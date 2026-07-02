/**
 * api/catch.js — Submit a catch for leaderboard consideration
 *
 * POST /api/catch
 * Body: { photo_base64, species_id, lake_id, length_in, lure_bait, depth_ft,
 *         catch_lat, catch_lng, location_privacy, notes, water_temp_f }
 *
 * Flow:
 * 1. Validate auth (Supabase JWT)
 * 2. Check kit purchased flag on profile
 * 3. Upload photo to Supabase Storage
 * 4. Run Claude vision verification (sticker + species + measurement)
 * 5. Save catch record with AI results
 * 6. If AI approved → create Stripe payment intent ($5)
 * 7. Return { catch_id, verification_status, payment_intent_client_secret }
 */

import { createClient } from '@supabase/supabase-js';
import Anthropic from '@anthropic-ai/sdk';
import Stripe from 'stripe';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  // 1. Auth
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Authentication required' });

  const { data: { user }, error: authErr } = await supabase.auth.getUser(token);
  if (authErr || !user) return res.status(401).json({ error: 'Invalid token' });

  // 2. Check kit purchased
  const { data: profile } = await supabase
    .from('profiles')
    .select('kit_purchased, is_banned, username')
    .eq('id', user.id)
    .single();

  if (!profile) return res.status(404).json({ error: 'Profile not found' });
  if (profile.is_banned) return res.status(403).json({ error: 'Account suspended' });
  if (!profile.kit_purchased) {
    return res.status(403).json({
      error: 'Certified kit required',
      message: 'You need to purchase a Certified Angler Kit before submitting catches to the leaderboard.',
      kit_url: '/kit'
    });
  }

  const {
    photo_base64, species_id, lake_id, length_in,
    lure_bait, depth_ft, catch_lat, catch_lng,
    location_privacy = 'private', notes, water_temp_f
  } = req.body;

  if (!photo_base64) return res.status(400).json({ error: 'Photo required' });
  if (!species_id)   return res.status(400).json({ error: 'Species required' });
  if (!lake_id)      return res.status(400).json({ error: 'Lake required' });
  if (!length_in || length_in <= 0) return res.status(400).json({ error: 'Valid length required' });

  try {
    // 3. Upload photo to Supabase Storage
    const photoBytes = Buffer.from(photo_base64, 'base64');
    const photoPath = `catches/${user.id}/${Date.now()}.jpg`;

    const { error: uploadErr } = await supabase.storage
      .from('catch-photos')
      .upload(photoPath, photoBytes, { contentType: 'image/jpeg' });

    if (uploadErr) throw new Error(`Photo upload failed: ${uploadErr.message}`);

    const { data: { publicUrl } } = supabase.storage
      .from('catch-photos')
      .getPublicUrl(photoPath);

    // 4. AI verification via Claude vision
    let aiResult = {
      sticker_confidence: 0,
      species_confidence: 0,
      length_estimate_in: null,
      raw_response: null,
      status: 'pending'
    };

    try {
      const aiResponse = await anthropic.messages.create({
        model: 'claude-opus-4-6',
        max_tokens: 600,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'base64', media_type: 'image/jpeg', data: photo_base64 }
            },
            {
              type: 'text',
              text: `You are verifying a fishing leaderboard catch submission for Rocky Mountain Anglers.

Analyze this photo and respond with ONLY a JSON object (no markdown, no explanation):

{
  "sticker_detected": true/false,
  "sticker_confidence": 0.0-1.0,
  "sticker_notes": "brief note about sticker visibility",
  "species_identified": "common name or null",
  "species_confidence": 0.0-1.0,
  "ruler_visible": true/false,
  "length_estimate_inches": number or null,
  "length_plausible": true/false,
  "length_plausibility_confidence": 0.0-1.0,
  "concerns": "any fraud concerns or null",
  "overall_verdict": "approve" | "flag" | "reject"
}

The angler claims:
- Species: ${species_id}
- Length: ${length_in} inches

Approval criteria:
- RMA (Rocky Mountain Anglers) branded sticker must be clearly visible in frame
- Fish must be identifiable as the claimed species
- Claimed length must be plausible given any ruler visible in frame
- Live or very recently caught fish preferred

Be strict about sticker detection — this is the primary anti-fraud measure.`
            }
          ]
        }]
      });

      const rawText = aiResponse.content[0]?.text || '{}';
      const clean = rawText.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(clean);

      aiResult = {
        sticker_confidence: parsed.sticker_confidence ?? 0,
        species_confidence: parsed.species_confidence ?? 0,
        length_estimate_in: parsed.length_estimate_inches,
        raw_response: parsed,
        status: parsed.sticker_confidence >= 0.85 && parsed.length_plausible
          ? 'ai_approved'
          : parsed.overall_verdict === 'reject'
          ? 'rejected'
          : 'ai_flagged'
      };
    } catch (aiErr) {
      console.error('AI verification error:', aiErr.message);
      aiResult.status = 'ai_flagged'; // Flag for human review if AI fails
    }

    // 5. Save catch record
    const { data: catch_, error: catchErr } = await supabase
      .from('catches')
      .insert({
        angler_id: user.id,
        lake_id,
        species_id,
        length_in,
        photo_url: publicUrl,
        catch_lat,
        catch_lng,
        location_privacy,
        lure_bait,
        depth_ft,
        water_temp_f,
        notes,
        caught_at: new Date().toISOString(),
        is_paid_submission: false, // becomes true after Stripe payment
        verification_status: aiResult.status,
        ai_sticker_confidence: aiResult.sticker_confidence,
        ai_species_confidence: aiResult.species_confidence,
        ai_length_estimate_in: aiResult.length_estimate_in,
        ai_raw_response: aiResult.raw_response,
        leaderboard_month: parseInt(new Date().toISOString().slice(0,7).replace('-','')),
        leaderboard_year: new Date().getFullYear(),
      })
      .select()
      .single();

    if (catchErr) throw new Error(`Catch save failed: ${catchErr.message}`);

    // If AI rejected outright, return early
    if (aiResult.status === 'rejected') {
      return res.status(422).json({
        error: 'Verification failed',
        message: 'Your photo did not pass AI verification. Make sure the RMA sticker is clearly visible and the fish measurement is accurate.',
        catch_id: catch_.id,
        verification_status: aiResult.status,
        ai_details: aiResult.raw_response,
      });
    }

    // 6. Create Stripe payment intent for $5 submission fee
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 500, // $5.00 in cents
      currency: 'usd',
      metadata: {
        catch_id: catch_.id,
        angler_id: user.id,
        angler_username: profile.username,
        species_id,
        lake_id,
        length_in: String(length_in),
        leaderboard_month: String(catch_.leaderboard_month),
      },
      description: `Rocky Mountain Anglers — leaderboard submission (${length_in}" catch)`,
    });

    return res.status(201).json({
      success: true,
      catch_id: catch_.id,
      verification_status: aiResult.status,
      ai_sticker_confidence: aiResult.sticker_confidence,
      ai_message: aiResult.status === 'ai_approved'
        ? 'Sticker verified! Pay $5 to enter the leaderboard.'
        : 'Your photo has been flagged for manual review. Pay $5 now and your catch will go live once approved.',
      payment_intent_client_secret: paymentIntent.client_secret,
      payment_amount: 5.00,
    });

  } catch (err) {
    console.error('Catch submission error:', err);
    return res.status(500).json({ error: 'Submission failed', detail: err.message });
  }
}
