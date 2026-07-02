# Rocky Mountain Anglers

**Fish the Rockies. Prove It.**

The first AI-verified catch leaderboard for motorboat-accessible lakes across Utah, Colorado, Wyoming, Montana, and Idaho. Real fish, real measurements, real prizes.

---

## What's built

| Feature | Status |
|---|---|
| Lake directory (19+ lakes across 5 states) | ✅ Live |
| State-filtered lake cards with fishing status | ✅ Live |
| Monthly / annual / all-time leaderboards | ✅ Live |
| Prize pot calculator | ✅ Live |
| Species guide (12 species) | ✅ Live |
| Fish diary preview with GPS spot map | ✅ Live |
| Fishing reports (member + auto) | ✅ Live |
| Guide directory with featured placement | ✅ Live |
| Lake-specific tackle recommendations | ✅ Live |
| Catch submission API with Claude AI verification | ✅ Built |
| Stripe payment ($5 catch fee, $35 kit) | ✅ Built |
| Stripe webhook → leaderboard activation | ✅ Built |
| Weekly cron for automated state wildlife reports | ✅ Built |
| Supabase schema (full, production-ready) | ✅ Built |

---

## Tech stack

- **Frontend:** Static HTML/CSS/JS — no framework, instant load, works everywhere
- **Backend:** Vercel serverless functions (`/api/*.js`)
- **Database:** Supabase (Postgres + Auth + Storage)
- **AI:** Anthropic Claude claude-opus-4-6 vision API — verifies sticker, species, and measurement in catch photos
- **Payments:** Stripe — kit purchase ($34.99), $5 catch submission fee, guide featured placement ($19-49/mo)
- **Cron:** Vercel cron — runs every Monday at 6 AM MT, pulls state wildlife data and creates automated lake reports
- **Maps:** Mapbox GL JS (integrate your key for the fish diary GPS maps)

---

## Setup guide

### 1. Supabase (database + auth + storage)

1. Create a free project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run `supabase/schema.sql` — this creates all tables, RLS policies, and indexes
3. Then run `supabase/seed.sql` — this populates all 19 lakes, 12 species, and lake-species associations
4. In **Storage**, create a bucket called `catch-photos` and set it to public
5. Copy your **Project URL** and **service_role key** from Settings → API

### 2. Stripe

1. Create a [Stripe](https://stripe.com) account
2. In the Dashboard → Products, create:
   - **Certified Angler Kit** — $34.99 one-time
3. Add the webhook endpoint `https://your-domain.vercel.app/api/webhook` for the event `payment_intent.succeeded`
4. Copy your secret key, webhook signing secret, and kit price ID

### 3. Anthropic

1. Get an API key at [console.anthropic.com](https://console.anthropic.com)
2. The catch submission API uses `claude-opus-4-6` with vision — budget approximately $0.02-0.05 per photo verification

### 4. Deploy to Vercel

```bash
# Push to GitHub (done), then:
# 1. Go to vercel.com/new
# 2. Import codybohin/Rocky-Mountain-Anglers
# 3. Add all environment variables from .env.example
# 4. Deploy
```

The cron job (`vercel.json`) runs every Monday at 6 AM MT automatically once deployed.

---

## Business model

| Revenue stream | Amount | Notes |
|---|---|---|
| Certified Kit | $34.99 one-time | Sticker + ruler + scale, shipped |
| Catch submission | $5.00 per catch | Enters leaderboard + prize pot |
| Guide featured listing | $19–49/month | Lake page placement |
| Spot sales | Angler-set price | Platform takes 15% |
| Tackle affiliate | 3–8% commission | Amazon Associates + local shops |

**Prize pot structure (from $5 catch fees collected each month):**
- 60% → 1st place
- 35% → 2nd place
- 10% → 3rd place
- 5% → Platform fee

> ⚠️ **Legal note:** This structure is designed as a skill-based competition (biggest fish by length, verified photo), not a game of chance. Consult a licensed attorney in each operating state (UT, CO, WY, MT, ID) before launch. Prize payouts over $600/year per recipient require a 1099 — Stripe payouts handle this automatically.

---

## How catch verification works

1. Angler submits photo via the app
2. Claude claude-opus-4-6 vision analyzes the photo:
   - Detects RMA branded sticker (≥85% confidence required for auto-approval)
   - Identifies fish species
   - Estimates length from ruler visible in frame
   - Returns JSON confidence scores
3. If sticker confidence ≥85% and measurement is plausible → **auto-approved**
4. Otherwise → **flagged for human review** (admin dashboard needed — Phase 2)
5. Any member can flag a catch as suspicious; 3 flags → admin hold
6. Payment processed via Stripe on submission — catch goes live once paid + verified

---

## Leaderboard structure

Three cycles run simultaneously:
- **Monthly** — resets first of every month, prize pot awarded to top 3
- **Annual** — best catch of the 2026 season, announced December 31
- **All-time Hall of Fame** — never resets

Three ranking dimensions:
- Per lake — biggest fish on that specific water
- Per state — biggest across all lakes in UT/CO/WY/MT/ID
- Per species — biggest of each species across the whole platform

---

## File structure

```
rocky-mountain-anglers/
├── public/
│   └── index.html         # Complete site — lakes, leaderboard, species, diary, reports, guides, tackle
├── api/
│   ├── catch.js            # POST /api/catch — AI-verified catch submission
│   ├── webhook.js          # POST /api/webhook — Stripe payment confirmation → leaderboard activation
│   └── reports.js          # GET/POST /api/reports — fishing reports + weekly cron sync
├── supabase/
│   ├── schema.sql           # Complete database schema (run first)
│   └── seed.sql              # Lakes, species, and junction data (run second)
├── .env.example
├── vercel.json              # Cron: every Monday 6 AM MT
└── package.json
```

---

## Phase 2 roadmap

- [ ] Supabase Auth integration (sign up / login flow)
- [ ] Full catch submission UI with camera + GPS
- [ ] Fish diary map powered by Mapbox GL JS
- [ ] Admin moderation dashboard (review flagged catches)
- [ ] Individual lake pages with full detail
- [ ] Individual species pages
- [ ] Angler profile pages
- [ ] Kit order fulfillment integration (Shopify or ShipBob)
- [ ] Monthly prize payout automation (Stripe payouts to bank)
- [ ] React Native mobile app
- [ ] Regulation size limit alerts (auto-flag undersized fish)
- [ ] Social catch card generator (shareable image for Instagram/Facebook)
- [ ] Tournament mode for guides and brands
