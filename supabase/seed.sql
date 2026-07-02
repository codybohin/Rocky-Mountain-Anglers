-- Rocky Mountain Anglers — Seed Data
-- Motorboat-accessible lakes only across UT, CO, WY, MT, ID

-- ── Species ───────────────────────────────────────────────────────────────
INSERT INTO species (slug, common_name, scientific_name, category, description, identification_tips, world_record_length_in, average_length_in, best_seasons) VALUES
('rainbow-trout', 'Rainbow Trout', 'Oncorhynchus mykiss', 'trout', 'The most common and widely stocked trout in Rocky Mountain waters. Known for explosive strikes and acrobatic fights.', 'Pink-to-red lateral stripe, black spots on body and fins, white-edged lower fins. Colors intensify in males during spawn.', 43.0, 14.0, ARRAY['spring','fall']),
('brown-trout', 'Brown Trout', 'Salmo trutta', 'trout', 'The most wary and challenging trout to catch. Trophy browns are among the most prized freshwater fish in the Rockies.', 'Golden-brown body with black spots surrounded by orange halos, few or no spots on tail. Can grow much larger than rainbows.', 42.9, 16.0, ARRAY['spring','fall']),
('lake-trout', 'Lake Trout', 'Salvelinus namaycush', 'trout', 'Deepwater giants found in large, cold Rocky Mountain reservoirs. Require specialized tactics and gear.', 'Light spots on dark body, deeply forked tail, no pink stripe. Often found in 50-100ft depths.', 50.0, 22.0, ARRAY['spring','fall','winter']),
('cutthroat-trout', 'Cutthroat Trout', 'Oncorhynchus clarkii', 'trout', 'The native trout of the Rocky Mountains. State fish of Wyoming and Idaho. Red slashes under the jaw are unmistakable.', 'Red or orange slash marks under lower jaw, spots concentrated near tail, no black spot clusters.', 39.0, 13.0, ARRAY['spring','fall']),
('tiger-trout', 'Tiger Trout', 'Brown x Brook Trout hybrid', 'trout', 'A rare sterile hybrid between brown and brook trout. Stocked selectively for their aggressive feeding and trophy size.', 'Distinct marble/tiger-stripe pattern, no other trout looks like it. Aggressive and fast-growing.', 34.0, 18.0, ARRAY['spring','fall']),
('smallmouth-bass', 'Smallmouth Bass', 'Micropterus dolomieu', 'bass', 'The acrobatic fighter of Rocky Mountain warmwater lakes. Pound-for-pound one of the hardest-fighting freshwater fish.', 'Bronze-green color, vertical bars on sides, red eye, upper jaw does not extend past eye.', 27.0, 13.0, ARRAY['spring','summer','fall']),
('largemouth-bass', 'Largemouth Bass', 'Micropterus salmoides', 'bass', 'The most popular sportfish in America. Found in warmer Rocky Mountain reservoirs and lower elevation lakes.', 'Dark lateral stripe, upper jaw extends past eye, greenish body. Larger than smallmouth.', 29.5, 14.0, ARRAY['spring','summer']),
('walleye', 'Walleye', 'Sander vitreus', 'pike_walleye', 'Prized table fare and challenging to catch, walleye thrive in many Rocky Mountain reservoirs.', 'Glassy reflective eye (tapetum lucidum), white tip on lower tail, olive-gold body with saddle markings.', 35.8, 17.0, ARRAY['spring','fall']),
('northern-pike', 'Northern Pike', 'Esox lucius', 'pike_walleye', 'Ambush predators that grow to trophy size in cold Rocky Mountain waters. Aggressive and fast.', 'Long torpedo shape, duck-bill snout, light bean-shaped spots on dark green body.', 52.5, 28.0, ARRAY['spring','fall']),
('yellow-perch', 'Yellow Perch', 'Perca flavescens', 'panfish', 'Schooling panfish that are excellent table fare. Ice fishing favorites in frozen Rocky Mountain lakes.', 'Yellow-gold with 6-8 dark vertical bars, orange lower fins.', 19.9, 8.0, ARRAY['summer','fall','winter']),
('channel-catfish', 'Channel Catfish', 'Ictalurus punctatus', 'catfish', 'Night-time bottom feeders found in warmer Rocky Mountain reservoirs. Popular for families.', 'Deeply forked tail, spotted body, 4 pairs of barbels around mouth.', 47.0, 15.0, ARRAY['summer']),
('tiger-muskie', 'Tiger Muskie', 'Esox masquinongy x E. lucius', 'pike_walleye', 'Trophy predators stocked in select Colorado and Wyoming waters. The fish of 10,000 casts.', 'Dark spots/bars on light body, vertical bars more irregular than pure muskie.', 60.0, 38.0, ARRAY['fall','spring']);

-- ── Lakes — Utah ──────────────────────────────────────────────────────────
INSERT INTO lakes (slug, name, state_id, county, elevation_ft, surface_acres, max_depth_ft, lat, lng, motorboat_allowed, horsepower_limit, has_boat_ramp, summary, report_status) VALUES
('flaming-gorge-ut', 'Flaming Gorge Reservoir', 'UT', 'Daggett', 6040, 42000, 436, 41.0933, -109.4200, true, NULL, true, 'A stunning red-rock canyon reservoir straddling Utah and Wyoming. World-class lake trout and trophy rainbow trout fishing with depths exceeding 400 feet. One of the most scenic and productive fisheries in the western United States.', 'hot'),
('deer-creek-reservoir', 'Deer Creek Reservoir', 'UT', 'Wasatch', 5417, 3400, 85, 40.4052, -111.5290, true, NULL, true, 'A Wasatch Front gem known for excellent rainbow trout, perch, and smallmouth bass fishing. Conveniently located near Provo and Salt Lake City, making it one of the most-fished lakes in Utah.', 'good'),
('utah-lake', 'Utah Lake', 'UT', 'Utah', 4489, 148000, 14, 40.2300, -111.8000, true, NULL, true, 'Utah''s largest freshwater lake by surface area. Known primarily for catfish, white bass, and walleye. Unique among Utah fisheries for its warmwater species. Shallow and prone to algae blooms in summer.', 'good'),
('yuba-reservoir', 'Yuba Reservoir', 'UT', 'Juab', 4625, 11000, 38, 39.4175, -112.0354, true, NULL, true, 'A southern Utah reservoir with excellent walleye fishing and good rainbow trout action. Warm in summer making it ideal for bass and catfish. The walleye fishery rivals any in the state.', 'good'),
('echo-reservoir', 'Echo Reservoir', 'UT', 'Summit', 5480, 1100, 36, 40.9617, -111.4383, true, NULL, true, 'A small Summit County reservoir with surprisingly good rainbow trout and perch fishing. Heavily stocked by UDWR, making it a reliable choice for family outings.', 'slow'),
('rockport-reservoir', 'Rockport Reservoir', 'UT', 'Summit', 6000, 1000, 76, 40.7787, -111.3985, true, NULL, true, 'A Summit County reservoir at elevation with cold, clear water supporting rainbow and brown trout. The combination of stocked and wild fish makes for exciting year-round fishing.', 'good');

-- ── Lakes — Colorado ──────────────────────────────────────────────────────
INSERT INTO lakes (slug, name, state_id, county, elevation_ft, surface_acres, max_depth_ft, lat, lng, motorboat_allowed, horsepower_limit, has_boat_ramp, summary, report_status) VALUES
('blue-mesa-reservoir', 'Blue Mesa Reservoir', 'CO', 'Gunnison', 7519, 9000, 340, 38.4600, -107.3300, true, NULL, true, 'Colorado''s largest reservoir. A true trophy fishery for lake trout, kokanee salmon, and rainbow trout. The deep, cold water of the Gunnison canyon creates ideal conditions for fish to grow to exceptional sizes.', 'hot'),
('granby-lake', 'Lake Granby', 'CO', 'Grand', 8280, 7256, 265, 40.1500, -105.8700, true, NULL, true, 'Part of the Colorado-Big Thompson project. Renowned for trophy lake trout and kokanee salmon, with excellent rainbow trout fishing in the shallower bays.', 'good'),
('horsetooth-reservoir', 'Horsetooth Reservoir', 'CO', 'Larimer', 5430, 1900, 180, 40.5700, -105.1500, true, NULL, true, 'A Front Range fishery close to Fort Collins with excellent smallmouth bass, wipers, and stocked rainbow trout. Popular year-round with consistent action across multiple species.', 'good'),
('eleven-mile-reservoir', 'Eleven Mile Reservoir', 'CO', 'Park', 8663, 3405, 100, 38.9200, -105.5100, true, NULL, true, 'A South Platte River reservoir famous for trophy pike, rainbow trout, and kokanee salmon. Spectacular mountain scenery elevates every fishing trip. Cold water keeps fish active even in summer.', 'hot'),
('dillon-reservoir', 'Dillon Reservoir', 'CO', 'Summit', 9017, 3300, 256, 39.6300, -106.0500, true, 10, true, 'Colorado''s highest major reservoir. Electric/small motor only (10 HP limit). Rainbow trout and brown trout fishing with a stunning 360-degree mountain backdrop including the Tenmile Range.', 'good'),
('shadow-mountain-lake', 'Shadow Mountain Lake', 'CO', 'Grand', 8367, 1350, 15, 40.0800, -105.8100, true, NULL, true, 'Connected to Lake Granby and Grand Lake, this shallow reservoir is the gateway to the Grand Lake waterway system. Good for pike, kokanee, and trout, with easy access and family-friendly fishing.', 'slow');

-- ── Lakes — Wyoming ───────────────────────────────────────────────────────
INSERT INTO lakes (slug, name, state_id, county, elevation_ft, surface_acres, max_depth_ft, lat, lng, motorboat_allowed, horsepower_limit, has_boat_ramp, summary, report_status) VALUES
('flaming-gorge-wy', 'Flaming Gorge (WY)', 'WY', 'Sweetwater', 6040, 42000, 436, 41.2200, -109.5800, true, NULL, true, 'The Wyoming arm of Flaming Gorge Reservoir. Access points through Manila Creek and Lucerne Valley offer different fishing experiences than the Utah side. Same spectacular scenery and world-class lake trout.', 'hot'),
('boysen-reservoir', 'Boysen Reservoir', 'WY', 'Fremont', 4930, 19600, 80, 43.4200, -108.1800, true, NULL, true, 'A Wind River Canyon reservoir with excellent walleye, sauger, and rainbow trout fishing. The warm lower end fishes differently than the cold upper reaches. Popular with Wyoming families for camping and fishing.', 'good'),
('fremont-lake', 'Fremont Lake', 'WY', 'Sublette', 7500, 5330, 600, 42.9500, -109.8200, true, NULL, true, 'One of Wyoming''s deepest natural lakes, formed by glaciers. Cold, clear water supports trophy lake trout, rainbow trout, and the occasional record-class fish. Wind can come up fast — always check weather.', 'good'),
('fontenelle-reservoir', 'Fontenelle Reservoir', 'WY', 'Lincoln', 6520, 8200, 210, 42.0200, -110.0700, true, NULL, true, 'A Green River reservoir with excellent rainbow trout fishing and a growing walleye fishery. Less crowded than many Wyoming lakes, this is a local''s favorite for consistent catches.', 'slow'),
('jackson-lake', 'Jackson Lake', 'WY', 'Teton', 6772, 15800, 438, 43.8600, -110.6700, true, NULL, true, 'A Grand Teton National Park reservoir with dramatic mountain scenery. Brown and lake trout are the primary targets, with cutthroat available in the inlet streams. NPS regulations apply.', 'good');

-- ── Lakes — Montana ───────────────────────────────────────────────────────
INSERT INTO lakes (slug, name, state_id, county, elevation_ft, surface_acres, max_depth_ft, lat, lng, motorboat_allowed, horsepower_limit, has_boat_ramp, summary, report_status) VALUES
('flathead-lake', 'Flathead Lake', 'MT', 'Lake/Flathead', 2893, 191000, 370, 47.8500, -114.1500, true, NULL, true, 'The largest natural freshwater lake west of the Mississippi. Trophy lake trout, bull trout, and yellow perch are the primary targets. The bull trout fishery here is nationally significant and catch-and-release only.', 'hot'),
('fort-peck-lake', 'Fort Peck Lake', 'MT', 'Valley/McCone', 2250, 383000, 220, 47.5000, -107.0000, true, NULL, true, 'Montana''s largest reservoir and one of the largest in the US. World-class walleye, sauger, northern pike, and smallmouth bass fishing. Its sheer size means uncrowded fishing even on weekends.', 'hot'),
('hungry-horse-reservoir', 'Hungry Horse Reservoir', 'MT', 'Flathead', 3560, 34000, 500, 48.3300, -113.7200, true, NULL, true, 'A Flathead National Forest reservoir with trophy rainbow and bull trout fishing. Remote and scenic, with limited crowds and exceptional water clarity. The deep cold water produces large fish.', 'good'),
('canyon-ferry-lake', 'Canyon Ferry Lake', 'MT', 'Lewis and Clark', 3767, 35000, 60, 46.6500, -111.7200, true, NULL, true, 'Helena''s home lake. Rainbow and brown trout fishing with a surprising walleye fishery in the lower end. Multiple boat ramps, campgrounds, and easy access make this a year-round destination.', 'good'),
('lake-elmo', 'Lake Elmo', 'MT', 'Yellowstone', 3220, 64, 20, 45.8100, -108.4400, true, NULL, true, 'A small Billings urban lake stocked heavily with rainbow trout and known for largemouth bass. Perfect for quick weekday fishing trips and teaching kids to fish.', 'good');

-- ── Lakes — Idaho ─────────────────────────────────────────────────────────
INSERT INTO lakes (slug, name, state_id, county, elevation_ft, surface_acres, max_depth_ft, lat, lng, motorboat_allowed, horsepower_limit, has_boat_ramp, summary, report_status) VALUES
('lake-pend-oreille', 'Lake Pend Oreille', 'ID', 'Bonner', 2062, 148000, 1158, 48.1600, -116.5700, true, NULL, true, 'One of the deepest lakes in the US and Idaho''s largest. Historic bull trout and kamloops rainbow trout fishing, along with lake trout, perch, and bass. The depth of over 1,100 feet creates unique fishing opportunities.', 'hot'),
('lucky-peak-reservoir', 'Lucky Peak Reservoir', 'ID', 'Ada/Boise', 2824, 2700, 239, 43.5600, -116.0500, true, NULL, true, 'The closest major reservoir to Boise. Rainbow trout fishing from April through early summer followed by smallmouth bass and perch fishing. Drawdown in late summer affects fishing but early season is excellent.', 'good'),
('american-falls-reservoir', 'American Falls Reservoir', 'ID', 'Power', 4318, 56000, 40, 42.8700, -112.8600, true, NULL, true, 'A Snake River reservoir with outstanding fishing for rainbow trout, yellow perch, and walleye. The perch fishery here may be the best in Idaho. Large surface area with multiple launch facilities.', 'hot'),
('magic-reservoir', 'Magic Reservoir', 'ID', 'Blaine/Gooding', 4981, 4500, 60, 43.2800, -114.3500, true, NULL, true, 'A productive Wood River reservoir known for rainbow trout, perch, and bass. Fluctuates significantly between drought and good water years, but in good conditions it produces exceptional catches.', 'slow'),
('anderson-ranch-reservoir', 'Anderson Ranch Reservoir', 'ID', 'Elmore/Camas', 3290, 4740, 300, 43.4500, -115.4300, true, NULL, true, 'A Boise River reservoir with cold, deep water supporting rainbow and kokanee fishing. The steep canyon walls make for dramatic scenery and the fishing for kokanee in summer is excellent.', 'good');

-- ── Lake-Species associations (sample set) ────────────────────────────────
-- Flaming Gorge
INSERT INTO lake_species (lake_id, species_id, population_notes, best_months, stocked)
SELECT l.id, s.id, 'Trophy lake trout population, fish to 50+ lbs', ARRAY[4,5,9,10,11], false
FROM lakes l, species s WHERE l.slug = 'flaming-gorge-ut' AND s.slug = 'lake-trout';

INSERT INTO lake_species (lake_id, species_id, population_notes, best_months, stocked)
SELECT l.id, s.id, 'Heavily stocked rainbows, 12-18 inches average', ARRAY[4,5,6,9,10], true
FROM lakes l, species s WHERE l.slug = 'flaming-gorge-ut' AND s.slug = 'rainbow-trout';

INSERT INTO lake_species (lake_id, species_id, population_notes, best_months, stocked)
SELECT l.id, s.id, 'Wild population, excellent fall bite', ARRAY[9,10,11], false
FROM lakes l, species s WHERE l.slug = 'flaming-gorge-ut' AND s.slug = 'smallmouth-bass';

-- Blue Mesa
INSERT INTO lake_species (lake_id, species_id, population_notes, best_months, stocked)
SELECT l.id, s.id, 'World-class lake trout, fish 30-40 lbs not uncommon', ARRAY[4,5,9,10,11], false
FROM lakes l, species s WHERE l.slug = 'blue-mesa-reservoir' AND s.slug = 'lake-trout';

INSERT INTO lake_species (lake_id, species_id, population_notes, best_months, stocked)
SELECT l.id, s.id, 'Strong rainbow population in upper arms', ARRAY[4,5,6,9,10], true
FROM lakes l, species s WHERE l.slug = 'blue-mesa-reservoir' AND s.slug = 'rainbow-trout';

-- Flathead Lake
INSERT INTO lake_species (lake_id, species_id, population_notes, best_months, stocked)
SELECT l.id, s.id, 'Catch and release only, nationally significant population', ARRAY[4,5,9,10], false
FROM lakes l, species s WHERE l.slug = 'flathead-lake' AND s.slug = 'lake-trout';

INSERT INTO lake_species (lake_id, species_id, population_notes, best_months, stocked)
SELECT l.id, s.id, 'Excellent perch fishing, especially in fall', ARRAY[8,9,10,11], false
FROM lakes l, species s WHERE l.slug = 'flathead-lake' AND s.slug = 'yellow-perch';

-- Lake Pend Oreille
INSERT INTO lake_species (lake_id, species_id, population_notes, best_months, stocked)
SELECT l.id, s.id, 'Legendary Kamloops rainbow, fish to 30+ lbs', ARRAY[3,4,5,10,11], false
FROM lakes l, species s WHERE l.slug = 'lake-pend-oreille' AND s.slug = 'rainbow-trout';
