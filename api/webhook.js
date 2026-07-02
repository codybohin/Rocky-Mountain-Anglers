/**
 * api/webhook.js — Stripe webhook handler
 *
 * Handles payment_intent.succeeded to:
 * 1. Mark catch as paid + on_leaderboard = true
 * 2. Update prize_pots table for this month
 * 3. Increment angler's total_submissions counter
 */

import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = { api: { bodyParser: false } };

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const rawBody = await getRawBody(req);
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature failed:', err.message);
    return res.status(400).json({ error: `Webhook error: ${err.message}` });
  }

  if (event.type === 'payment_intent.succeeded') {
    const pi = event.data.object;
    const { catch_id, angler_id, leaderboard_month } = pi.metadata;

    if (!catch_id) {
      console.log('Non-catch payment, ignoring:', pi.id);
      return res.json({ received: true });
    }

    try {
      // 1. Activate leaderboard entry
      const { error: catchErr } = await supabase
        .from('catches')
        .update({
          is_paid_submission: true,
          stripe_payment_id: pi.id,
          payment_amount: pi.amount / 100,
          on_leaderboard: true,
        })
        .eq('id', catch_id);

      if (catchErr) throw new Error(`Catch update failed: ${catchErr.message}`);

      // 2. Update prize pot for this month
      const month = leaderboard_month;
      const { data: existing } = await supabase
        .from('prize_pots')
        .select('id, total_submissions, gross_amount')
        .eq('period', month)
        .single();

      if (existing) {
        const newGross = existing.gross_amount + 5.00;
        await supabase
          .from('prize_pots')
          .update({
            total_submissions: existing.total_submissions + 1,
            gross_amount: newGross,
            platform_fee: newGross * 0.05,
            distributable: newGross * 0.95,
            first_place: newGross * 0.95 * 0.60,
            second_place: newGross * 0.95 * 0.35,
            third_place: newGross * 0.95 * 0.10,
          })
          .eq('id', existing.id);
      } else {
        await supabase.from('prize_pots').insert({
          period: month,
          total_submissions: 1,
          gross_amount: 5.00,
          platform_fee: 0.25,
          distributable: 4.75,
          first_place: 2.85,
          second_place: 1.66,
          third_place: 0.48,
        });
      }

      // 3. Increment angler stats
      await supabase.rpc('increment_angler_submissions', { angler_id });

      console.log(`✓ Catch ${catch_id} activated on leaderboard for ${angler_id}`);
    } catch (err) {
      console.error('Webhook processing error:', err.message);
      // Return 200 to prevent Stripe retries — log for manual fix
      return res.json({ received: true, error: err.message });
    }
  }

  return res.json({ received: true });
}
