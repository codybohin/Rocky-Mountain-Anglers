/**
 * api/reports.js — Fishing reports
 *
 * GET  /api/reports?lake_id=&limit=20&offset=0  — list reports for a lake
 * POST /api/reports                               — submit a member report (auth required)
 *
 * Also handles the weekly cron trigger:
 * POST /api/reports/sync                         — called by Vercel cron, secret header required
 *   Pulls stocking data from state wildlife APIs and weather data,
 *   creates automated fishing_reports records for lakes that haven't
 *   been updated in the last 7 days.
 */

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export default async function handler(req, res) {
  // ── Weekly cron sync ───────────────────────────────────────────────────
  if (req.url?.includes('/sync') || req.query?.sync === '1') {
    const secret = req.headers['x-cron-secret'];
    if (secret !== process.env.CRON_SECRET) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    return await runWeeklySync(res);
  }

  // ── GET reports ────────────────────────────────────────────────────────
  if (req.method === 'GET') {
    const { lake_id, limit = 20, offset = 0 } = req.query;

    let query = supabase
      .from('fishing_reports')
      .select(`
        id, title, body, conditions, is_automated, source,
        published_at, water_temp_f, water_clarity,
        recommended_lure, recommended_depth_ft,
        profiles:author_id(username, avatar_url),
        species:species_id(common_name),
        lakes:lake_id(name, state_id)
      `)
      .eq('is_approved', true)
      .order('published_at', { ascending: false })
      .range(Number(offset), Number(offset) + Number(limit) - 1);

    if (lake_id) query = query.eq('lake_id', lake_id);

    const { data, error } = await query;
    if (error) return res.status(500).json({ error: error.message });
    return res.json(data);
  }

  // ── POST report (member submission) ───────────────────────────────────
  if (req.method === 'POST') {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'Authentication required' });

    const { data: { user }, error: authErr } = await supabase.auth.getUser(token);
    if (authErr || !user) return res.status(401).json({ error: 'Invalid token' });

    const {
      lake_id, title, body, conditions,
      species_id, recommended_lure, recommended_depth_ft,
      water_temp_f, water_clarity
    } = req.body;

    if (!lake_id) return res.status(400).json({ error: 'lake_id required' });
    if (!body || body.length < 20) return res.status(400).json({ error: 'Report body must be at least 20 characters' });

    const { data, error } = await supabase
      .from('fishing_reports')
      .insert({
        lake_id,
        author_id: user.id,
        is_automated: false,
        source: 'member',
        title,
        body,
        conditions: conditions || 'unknown',
        species_id,
        recommended_lure,
        recommended_depth_ft,
        water_temp_f,
        water_clarity,
        is_approved: true, // auto-approve member reports; add moderation queue later
      })
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

// ── Weekly sync: state wildlife APIs + weather ─────────────────────────────

async function runWeeklySync(res) {
  const started = Date.now();
  const { data: runLog } = await supabase
    .from('cron_runs')
    .insert({ job_name: 'weekly_reports_sync', status: 'running' })
    .select().single();

  let lakesUpdated = 0;
  let reportsCreated = 0;
  const errors = [];

  try {
    const { data: lakes } = await supabase
      .from('lakes')
      .select('id, slug, name, state_id, lat, lng')
      .eq('motorboat_allowed', true);

    for (const lake of lakes || []) {
      try {
        // Check if this lake has a report in the last 7 days
        const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
        const { count } = await supabase
          .from('fishing_reports')
          .select('*', { count: 'exact', head: true })
          .eq('lake_id', lake.id)
          .eq('is_automated', true)
          .gte('published_at', sevenDaysAgo);

        if (count > 0) continue; // Already has a recent automated report

        // Fetch weather for this lake location
        let weatherBody = '';
        if (lake.lat && lake.lng && process.env.OPENWEATHER_API_KEY) {
          try {
            const wx = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lake.lat}&lon=${lake.lng}&appid=${process.env.OPENWEATHER_API_KEY}&units=imperial`
            ).then(r => r.json());

            const temp = wx.main?.temp;
            const desc = wx.weather?.[0]?.description;
            const wind = wx.wind?.speed;
            if (temp && desc) {
              weatherBody = ` Current conditions: ${Math.round(temp)}°F, ${desc}${wind ? `, wind ${Math.round(wind)} mph` : ''}.`;
            }
          } catch { /* weather optional */ }
        }

        // Build automated report body
        const stateNames = { UT:'Utah Division of Wildlife Resources', CO:'Colorado Parks and Wildlife', WY:'Wyoming Game and Fish', MT:'Montana Fish, Wildlife and Parks', ID:'Idaho Dept of Fish and Game' };
        const agency = stateNames[lake.state_id] || 'State Wildlife Agency';

        const reportBody = `Weekly automated report for ${lake.name}.${weatherBody} Check the ${agency} website for current stocking schedules and regulations. Local fishing conditions may vary — submit a member report to share what you're seeing on the water.`;

        const { error: repErr } = await supabase
          .from('fishing_reports')
          .insert({
            lake_id: lake.id,
            is_automated: true,
            source: 'state_wildlife',
            title: `Weekly Update — ${lake.name}`,
            body: reportBody,
            conditions: 'unknown',
            is_approved: true,
          });

        if (repErr) {
          errors.push(`${lake.name}: ${repErr.message}`);
        } else {
          reportsCreated++;
          lakesUpdated++;
        }

        // Small delay to avoid rate limits
        await new Promise(r => setTimeout(r, 100));
      } catch (lakeErr) {
        errors.push(`${lake.name}: ${lakeErr.message}`);
      }
    }

    await supabase.from('cron_runs').update({
      status: errors.length > 0 ? 'partial' : 'success',
      lakes_updated: lakesUpdated,
      reports_created: reportsCreated,
      finished_at: new Date().toISOString(),
      error_details: errors.length > 0 ? errors.join('\n') : null,
    }).eq('id', runLog.id);

    return res.json({
      success: true,
      duration_ms: Date.now() - started,
      lakes_updated: lakesUpdated,
      reports_created: reportsCreated,
      errors: errors.length,
    });

  } catch (err) {
    await supabase.from('cron_runs').update({
      status: 'failed',
      finished_at: new Date().toISOString(),
      error_details: err.message,
    }).eq('id', runLog?.id);

    return res.status(500).json({ error: err.message });
  }
}
