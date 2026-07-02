-- Rocky Mountain Anglers — Complete Database Schema
-- Run this in your Supabase SQL editor

-- ── Enable extensions ────────────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis"; -- for geo-coordinates on catches

-- ── States ───────────────────────────────────────────────────────────────
CREATE TABLE states (
  id TEXT PRIMARY KEY, -- 'UT', 'CO', 'WY', 'MT', 'ID'
  name TEXT NOT NULL,
  wildlife_agency TEXT,
  stocking_api_url TEXT,
  fishing_regs_url TEXT
);

INSERT INTO states VALUES
  ('UT', 'Utah', 'Utah Division of Wildlife Resources', 'https://wildlife.utah.gov', 'https://wildlife.utah.gov/fishing/fishing-regulations.html'),
  ('CO', 'Colorado', 'Colorado Parks and Wildlife', 'https://cpw.state.co.us', 'https://cpw.state.co.us/thingstodo/Pages/FishingRegulations.aspx'),
  ('WY', 'Wyoming', 'Wyoming Game and Fish Department', 'https://wgfd.wyo.gov', 'https://wgfd.wyo.gov/Fishing/Fishing-Regulations'),
  ('MT', 'Montana', 'Montana Fish, Wildlife and Parks', 'https://fwp.mt.gov', 'https://fwp.mt.gov/fishing/regulations'),
  ('ID', 'Idaho', 'Idaho Department of Fish and Game', 'https://idfg.idaho.gov', 'https://idfg.idaho.gov/fish/rules');

-- ── Lakes ─────────────────────────────────────────────────────────────────
CREATE TABLE lakes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  state_id TEXT REFERENCES states(id),
  county TEXT,
  elevation_ft INTEGER,
  surface_acres INTEGER,
  max_depth_ft INTEGER,
  lat DECIMAL(9,6),
  lng DECIMAL(9,6),
  motorboat_allowed BOOLEAN DEFAULT true,
  horsepower_limit INTEGER, -- null = unlimited
  has_boat_ramp BOOLEAN DEFAULT true,
  boat_ramp_notes TEXT,
  summary TEXT, -- 2-3 sentence lake description
  image_url TEXT,
  report_status TEXT DEFAULT 'unknown' CHECK (report_status IN ('hot','good','slow','iced_over','closed','unknown')),
  report_status_updated_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── Species ───────────────────────────────────────────────────────────────
CREATE TABLE species (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  common_name TEXT NOT NULL,
  scientific_name TEXT,
  category TEXT CHECK (category IN ('trout','bass','panfish','pike_walleye','catfish','other')),
  image_url TEXT,
  description TEXT,
  identification_tips TEXT,
  world_record_length_in DECIMAL(5,2),
  world_record_weight_lbs DECIMAL(6,3),
  average_length_in DECIMAL(5,2),
  habitat_notes TEXT,
  feeding_habits TEXT,
  best_seasons TEXT[], -- array: ['spring','summer','fall','winter']
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── Lake <> Species junction ──────────────────────────────────────────────
CREATE TABLE lake_species (
  lake_id UUID REFERENCES lakes(id) ON DELETE CASCADE,
  species_id UUID REFERENCES species(id) ON DELETE CASCADE,
  population_notes TEXT,
  best_months INTEGER[], -- 1-12
  stocked BOOLEAN DEFAULT false,
  PRIMARY KEY (lake_id, species_id)
);

-- ── Profiles ──────────────────────────────────────────────────────────────
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE NOT NULL,
  display_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  home_state TEXT REFERENCES states(id),
  home_lake_id UUID REFERENCES lakes(id),
  license_number TEXT, -- for legal compliance
  license_state TEXT REFERENCES states(id),
  kit_purchased BOOLEAN DEFAULT false,
  kit_order_id TEXT, -- Stripe order ID
  kit_shipped_at TIMESTAMPTZ,
  kit_tracking TEXT,
  stripe_customer_id TEXT,
  total_catches INTEGER DEFAULT 0,
  total_submissions INTEGER DEFAULT 0, -- paid submissions
  total_winnings DECIMAL(10,2) DEFAULT 0,
  joined_at TIMESTAMPTZ DEFAULT now(),
  is_banned BOOLEAN DEFAULT false,
  ban_reason TEXT
);

-- ── Catches ───────────────────────────────────────────────────────────────
CREATE TABLE catches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  angler_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  lake_id UUID REFERENCES lakes(id),
  species_id UUID REFERENCES species(id),
  length_in DECIMAL(5,2) NOT NULL, -- inches, to nearest 1/8th
  weight_lbs DECIMAL(6,3), -- optional
  photo_url TEXT NOT NULL,
  -- Geo (PostGIS point on the lake)
  catch_lat DECIMAL(9,6),
  catch_lng DECIMAL(9,6),
  location_privacy TEXT DEFAULT 'private' CHECK (location_privacy IN ('private','area','public','for_sale')),
  spot_price DECIMAL(6,2), -- if for_sale, price in USD
  -- Conditions
  caught_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  water_temp_f DECIMAL(4,1),
  weather_condition TEXT, -- auto-pulled
  wind_mph DECIMAL(4,1), -- auto-pulled
  lure_bait TEXT,
  depth_ft DECIMAL(5,1),
  technique TEXT,
  notes TEXT,
  -- Leaderboard / verification
  is_paid_submission BOOLEAN DEFAULT false,
  stripe_payment_id TEXT,
  payment_amount DECIMAL(6,2) DEFAULT 0,
  verification_status TEXT DEFAULT 'pending' CHECK (verification_status IN ('pending','ai_approved','ai_flagged','approved','rejected','under_review')),
  ai_sticker_confidence DECIMAL(4,3), -- 0.0 - 1.0
  ai_species_confidence DECIMAL(4,3),
  ai_length_estimate_in DECIMAL(5,2),
  ai_raw_response JSONB,
  flag_count INTEGER DEFAULT 0,
  moderator_notes TEXT,
  reviewed_by UUID REFERENCES profiles(id),
  reviewed_at TIMESTAMPTZ,
  -- Leaderboard eligibility
  on_leaderboard BOOLEAN DEFAULT false, -- true once paid + verified
  leaderboard_month INTEGER, -- YYYYMM
  leaderboard_year INTEGER,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── Catch flags (community moderation) ───────────────────────────────────
CREATE TABLE catch_flags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  catch_id UUID REFERENCES catches(id) ON DELETE CASCADE,
  flagged_by UUID REFERENCES profiles(id),
  reason TEXT NOT NULL,
  details TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE (catch_id, flagged_by) -- one flag per angler per catch
);

-- ── Spot purchases ────────────────────────────────────────────────────────
CREATE TABLE spot_purchases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  catch_id UUID REFERENCES catches(id),
  buyer_id UUID REFERENCES profiles(id),
  seller_id UUID REFERENCES profiles(id),
  amount_paid DECIMAL(6,2),
  platform_fee DECIMAL(6,2), -- 15%
  seller_payout DECIMAL(6,2), -- 85%
  stripe_payment_id TEXT,
  purchased_at TIMESTAMPTZ DEFAULT now()
);

-- ── Fishing reports ───────────────────────────────────────────────────────
CREATE TABLE fishing_reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lake_id UUID REFERENCES lakes(id) ON DELETE CASCADE,
  author_id UUID REFERENCES profiles(id), -- null = automated
  is_automated BOOLEAN DEFAULT false,
  source TEXT, -- 'member', 'state_wildlife', 'weather_api'
  title TEXT,
  body TEXT NOT NULL,
  conditions TEXT CHECK (conditions IN ('hot','good','slow','iced_over','closed','unknown')),
  species_id UUID REFERENCES species(id), -- null = general report
  recommended_lure TEXT,
  recommended_depth_ft DECIMAL(5,1),
  water_temp_f DECIMAL(4,1),
  water_clarity TEXT CHECK (water_clarity IN ('clear','stained','murky')),
  published_at TIMESTAMPTZ DEFAULT now(),
  is_approved BOOLEAN DEFAULT true
);

-- ── Species tips (lake-specific) ──────────────────────────────────────────
CREATE TABLE species_tips (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lake_id UUID REFERENCES lakes(id),
  species_id UUID REFERENCES species(id),
  tip TEXT NOT NULL,
  source TEXT DEFAULT 'admin',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── Tackle recommendations ────────────────────────────────────────────────
CREATE TABLE tackle_recommendations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lake_id UUID REFERENCES lakes(id),
  species_id UUID REFERENCES species(id),
  name TEXT NOT NULL,
  description TEXT,
  affiliate_url TEXT NOT NULL,
  image_url TEXT,
  price_usd DECIMAL(7,2),
  season TEXT[], -- ['spring','summer','fall','winter']
  is_featured BOOLEAN DEFAULT false,
  click_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── Guides ────────────────────────────────────────────────────────────────
CREATE TABLE guides (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id UUID REFERENCES profiles(id),
  business_name TEXT NOT NULL,
  bio TEXT NOT NULL,
  photo_url TEXT,
  website_url TEXT,
  booking_url TEXT,
  phone TEXT,
  email TEXT,
  state_id TEXT REFERENCES states(id),
  years_experience INTEGER,
  is_licensed BOOLEAN DEFAULT true,
  license_number TEXT,
  specialties TEXT[], -- species they specialize in
  is_featured BOOLEAN DEFAULT false,
  featured_until TIMESTAMPTZ,
  stripe_subscription_id TEXT, -- for featured placement
  featured_monthly_rate DECIMAL(6,2),
  created_at TIMESTAMPTZ DEFAULT now(),
  is_active BOOLEAN DEFAULT true
);

-- ── Guide <> Lake junction ────────────────────────────────────────────────
CREATE TABLE guide_lakes (
  guide_id UUID REFERENCES guides(id) ON DELETE CASCADE,
  lake_id UUID REFERENCES lakes(id) ON DELETE CASCADE,
  PRIMARY KEY (guide_id, lake_id)
);

-- ── Leaderboard snapshots (monthly) ──────────────────────────────────────
CREATE TABLE leaderboard_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  period TEXT NOT NULL, -- 'YYYY-MM' for monthly, 'YYYY' for annual, 'alltime'
  period_type TEXT CHECK (period_type IN ('monthly','annual','alltime')),
  scope_type TEXT CHECK (scope_type IN ('lake','state','species','overall')),
  scope_id TEXT, -- lake_id, state_id, or species_id
  species_id UUID REFERENCES species(id),
  angler_id UUID REFERENCES profiles(id),
  catch_id UUID REFERENCES catches(id),
  length_in DECIMAL(5,2),
  rank INTEGER,
  prize_amount DECIMAL(10,2) DEFAULT 0,
  prize_paid BOOLEAN DEFAULT false,
  stripe_payout_id TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── Prize pots (monthly tracking) ────────────────────────────────────────
CREATE TABLE prize_pots (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  period TEXT NOT NULL, -- 'YYYY-MM'
  total_submissions INTEGER DEFAULT 0,
  gross_amount DECIMAL(10,2) DEFAULT 0, -- total $5 fees collected
  platform_fee DECIMAL(10,2) DEFAULT 0, -- 5%
  distributable DECIMAL(10,2) DEFAULT 0, -- 95%
  first_place DECIMAL(10,2) DEFAULT 0,
  second_place DECIMAL(10,2) DEFAULT 0,
  third_place DECIMAL(10,2) DEFAULT 0,
  is_finalized BOOLEAN DEFAULT false,
  finalized_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ── Automated report log (cron job tracking) ──────────────────────────────
CREATE TABLE cron_runs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_name TEXT NOT NULL,
  started_at TIMESTAMPTZ DEFAULT now(),
  finished_at TIMESTAMPTZ,
  status TEXT CHECK (status IN ('running','success','partial','failed')),
  lakes_updated INTEGER DEFAULT 0,
  reports_created INTEGER DEFAULT 0,
  error_details TEXT
);

-- ── RLS policies ──────────────────────────────────────────────────────────

-- Profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "profiles_public_read" ON profiles FOR SELECT USING (true);
CREATE POLICY "profiles_own_update" ON profiles FOR UPDATE USING (auth.uid() = id);

-- Catches
ALTER TABLE catches ENABLE ROW LEVEL SECURITY;
CREATE POLICY "catches_public_leaderboard" ON catches FOR SELECT USING (on_leaderboard = true OR angler_id = auth.uid());
CREATE POLICY "catches_own_insert" ON catches FOR INSERT WITH CHECK (auth.uid() = angler_id);
CREATE POLICY "catches_own_update" ON catches FOR UPDATE USING (auth.uid() = angler_id);

-- Reports (public read, member insert)
ALTER TABLE fishing_reports ENABLE ROW LEVEL SECURITY;
CREATE POLICY "reports_public_read" ON fishing_reports FOR SELECT USING (is_approved = true);
CREATE POLICY "reports_member_insert" ON fishing_reports FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

-- ── Indexes ───────────────────────────────────────────────────────────────
CREATE INDEX idx_catches_lake ON catches(lake_id);
CREATE INDEX idx_catches_species ON catches(species_id);
CREATE INDEX idx_catches_angler ON catches(angler_id);
CREATE INDEX idx_catches_leaderboard ON catches(on_leaderboard, leaderboard_month, length_in DESC);
CREATE INDEX idx_catches_verification ON catches(verification_status);
CREATE INDEX idx_reports_lake ON fishing_reports(lake_id, published_at DESC);
CREATE INDEX idx_leaderboard_period ON leaderboard_entries(period, scope_type, scope_id, length_in DESC);
CREATE INDEX idx_lakes_state ON lakes(state_id, motorboat_allowed);
