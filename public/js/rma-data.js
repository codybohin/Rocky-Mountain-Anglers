/* ═══════════════════════════════════════════════════════
   ROCKY MOUNTAIN ANGLERS — SHARED DATA & UTILITIES
   UTAH LAUNCH — 5 flagship lakes
═══════════════════════════════════════════════════════ */

/* ── PRIZE POT CONFIG — single source ── */
const RMA_PAY = { entry: 5, platform: 0.05, p1: 0.60, p2: 0.30, p3: 0.10 };

/* ── UTAH FLAGSHIP LAKES ────────────────────────────── */
const RMA_LAKES = [
  {
    slug:'flaming-gorge', name:'Flaming Gorge', fullName:'Flaming Gorge Reservoir',
    state:'UT', region:'Uinta Mountains / Green River', county:'Daggett County',
    acres:42000, depth:436, elev:6040, status:'hot',
    motorboat:true, boatRamp:true, hpLimit:null, ramps:['Cedar Springs','Lucerne Valley','Sheep Creek','Antelope Flat'],
    species:['Lake Trout','Kokanee Salmon','Rainbow Trout','Smallmouth Bass','Burbot'],
    vibe:'Trophy Water',
    summary:'World-famous trophy lake trout water in a 91-mile red-rock canyon reservoir on the Green River. Fish over 50 lbs are caught here — this is where Utah records are broken.',
    about:'Flaming Gorge is the crown jewel of Utah trophy fishing. The reservoir stretches 91 miles from the Green River in Wyoming down through spectacular red-rock canyon country in Utah. Its cold, deep, well-oxygenated water grows some of the largest lake trout in the lower 48 — fish over 50 pounds have been documented. Beyond the giant macks, the Gorge holds a robust kokanee salmon fishery, chunky rainbows, aggressive smallmouth bass along the rocky shorelines, and a booming burbot population (anglers are required to keep every burbot caught). Summer brings excellent night fishing for burbot, while winter offers ice fishing in the northern arms.',
    tactics:{spring:'Lake trout cruise shallow flats (20–40ft) after ice-out. Casting big tube jigs and swimbaits from the boat is the best trophy window of the year.',summer:'Kokanee school at 35–60ft — dodgers and squids at 1.5 mph. Lakers go deep (80–120ft); downriggers or heavy jigging spoons.',fall:'Kokanee turn red and stage near spawning areas (closed to snagging — check regs). Lake trout feed aggressively pre-winter at 40–80ft.',winter:'Ice fishing in northern arms for burbot (night bite), rainbows, and kokanee. Burbot must be kept — no releasing.'},
    img:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=640&auto=format&fit=crop&q=75',
    imgHero:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&auto=format&fit=crop&q=80'
  },
  {
    slug:'strawberry', name:'Strawberry', fullName:'Strawberry Reservoir',
    state:'UT', region:'Wasatch Back / Highway 40', county:'Wasatch County',
    acres:17164, depth:200, elev:7602, status:'hot',
    motorboat:true, boatRamp:true, hpLimit:null, ramps:['Strawberry Bay Marina','Soldier Creek Marina','Renegade Point','Aspen Grove'],
    species:['Cutthroat Trout','Rainbow Trout','Kokanee Salmon'],
    vibe:'Utah\'s Premier Trout Water',
    summary:'Utah\'s most popular fishery, period. High-elevation water managed for trophy Bear Lake cutthroat, with fat rainbows and a strong kokanee program. The slot limit grows big fish.',
    about:'Strawberry Reservoir is the most heavily fished water in Utah — and for good reason. Sitting at 7,600 feet in the Wasatch Back, "The Berry" is intensively managed by DWR as a trophy cutthroat fishery. The Bear Lake-strain cutthroat slot limit (all cutthroat between 15–22 inches must be immediately released) has produced an exceptional population of big, healthy fish. Kokanee salmon add a trolling fishery that peaks mid-summer, and the rainbows run thick and hard-fighting. Two full-service marinas make boat access easy. In winter, Strawberry becomes Utah\'s ice fishing capital.',
    tactics:{spring:'Ice-out cutthroat feed shallow near tributary mouths. Casting jerkbaits and tube jigs in 5–15ft is deadly. Watch the spawning closures.',summer:'Kokanee at 30–50ft on dodger/squid setups. Cutthroat and rainbows early morning on the flats, deeper mid-day (25–40ft).',fall:'The best big-cutthroat window. Aggressive pre-winter feeding in 10–25ft. Large streamers and lures targeting fish fattening on chubs.',winter:'Utah\'s most popular ice fishery. Cutthroat and rainbows in 15–35ft on tungsten jigs tipped with meal worms. The slot limit still applies through the ice.'},
    img:'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=640&auto=format&fit=crop&q=75',
    imgHero:'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1400&auto=format&fit=crop&q=80'
  },
  {
    slug:'willard-bay', name:'Willard Bay', fullName:'Willard Bay Reservoir',
    state:'UT', region:'Northern Wasatch Front', county:'Box Elder County',
    acres:9900, depth:36, elev:4200, status:'good',
    motorboat:true, boatRamp:true, hpLimit:null, ramps:['North Marina','South Marina'],
    species:['Wiper','Walleye','Channel Catfish','Crappie','Smallmouth Bass'],
    vibe:'Wiper Boils & Warm Water',
    summary:'A freshwater reservoir sitting right off the Great Salt Lake. Famous for explosive summer wiper boils, quality walleye, and a fast-action warm-water fishery 20 minutes from Ogden.',
    about:'Willard Bay is a 9,900-acre freshwater reservoir separated from the Great Salt Lake by a 15-mile dike. It offers something no other northern Utah water does: wipers. These hybrid striped bass school up and push shad to the surface in summer "boils" — some of the most exciting freshwater fishing in the state. When a boil erupts, anglers race to cast into acres of churning water. Beyond wipers, Willard holds quality walleye (best in spring along the rocky dikes), channel catfish, crappie around the harbor structures, and smallmouth. Its low elevation and easy access from the Wasatch Front make it a season-extender — fishable earlier and later than the mountain waters.',
    tactics:{spring:'Walleye stack along the rocky dike faces pre-spawn. Jigs tipped with minnows at dawn/dusk. Crappie move into the marinas.',summer:'THE wiper boil season. Watch for surface eruptions early and late — run to them and cast shad-imitation lures. Catfish at night on cut bait.',fall:'Wipers still chase bait in open water — troll cranks until you find them. Walleye return to the dikes as water cools.',winter:'Mostly ices over — limited access. Catfish through the ice for the dedicated few. Check ice conditions carefully; this lake is notoriously variable.'},
    img:'https://images.unsplash.com/photo-1439853949212-36589f9f2bf4?w=640&auto=format&fit=crop&q=75',
    imgHero:'https://images.unsplash.com/photo-1439853949212-36589f9f2bf4?w=1400&auto=format&fit=crop&q=80'
  },
  {
    slug:'utah-lake', name:'Utah Lake', fullName:'Utah Lake',
    state:'UT', region:'Utah Valley / Provo', county:'Utah County',
    acres:148000, depth:14, elev:4489, status:'good',
    motorboat:true, boatRamp:true, hpLimit:null, ramps:['Utah Lake State Park','Lindon Harbor','American Fork Harbor','Saratoga Springs'],
    species:['Channel Catfish','Walleye','White Bass','Largemouth Bass','Crappie'],
    vibe:'The Big Warm-Water Factory',
    summary:'Utah\'s largest freshwater lake — 148,000 shallow, fertile acres in the heart of Utah Valley. A catfish and white bass factory with an underrated walleye bite.',
    about:'Utah Lake gets overlooked because it isn\'t a blue mountain reservoir — and that\'s a mistake. This massive, shallow (average 9 feet), warm and fertile lake in the middle of Utah Valley is one of the most productive fisheries in the state. Channel catfish grow big and bite all summer. White bass school in huge numbers — when you find them, it\'s a fish every cast. Walleye prowl the harbors and river mouths in early spring, and the Provo River mouth is a known big-fish area. Largemouth bass and crappie hold around harbor structure and the few rocky areas. With multiple harbors ringing the lake, boat access is excellent from every direction.',
    tactics:{spring:'Walleye run up the Provo and Spanish Fork river mouths in March. White bass follow in April–May — small jigs and spinners, fast action.',summer:'Prime channel catfish season — cut bait, worms, or shrimp on the bottom anywhere. Evening bite is best. White bass boils on calm evenings.',fall:'Catfish stay active into October. Walleye and white bass school near harbor mouths. Crappie tighten up on structure.',winter:'Ices over most years. Ice anglers target white bass and the occasional walleye near harbors. Check ice thickness — springs create weak spots.'},
    img:'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=640&auto=format&fit=crop&q=75',
    imgHero:'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1400&auto=format&fit=crop&q=80'
  },
  {
    slug:'lake-powell', name:'Lake Powell', fullName:'Lake Powell (Glen Canyon)',
    state:'UT', region:'Glen Canyon / Southern Utah', county:'Kane & San Juan Counties',
    acres:161000, depth:500, elev:3700, status:'hot',
    motorboat:true, boatRamp:true, hpLimit:null, ramps:['Wahweap','Bullfrog','Halls Crossing','Antelope Point'],
    species:['Striped Bass','Smallmouth Bass','Largemouth Bass','Walleye','Crappie'],
    vibe:'The Desert Giant',
    summary:'Nearly 2,000 miles of red-rock shoreline. Striped bass boils, endless smallmouth canyons, and houseboat fishing culture. America\'s most spectacular fishery.',
    about:'Lake Powell is unlike anywhere else on Earth — a 186-mile reservoir winding through Glen Canyon\'s red rock country with more shoreline than the entire US West Coast. The fishery is dominated by striped bass, which school by the thousands and erupt in surface boils when they push shad — find a boil and it\'s a fish on every cast. Smallmouth bass are everywhere; the rocky canyon walls are perfect habitat, and 50-fish days are common. Largemouth hold in the backs of brushy canyons, walleye stack on main-channel points in spring, and crappie school around submerged brush. Whether you fish from a bass boat or a houseboat, Powell is a bucket-list destination that Utah anglers get to call home water.',
    tactics:{spring:'Stripers stage pre-spawn on main channel points — anchovy bait fishing or trolling. Smallmouth move shallow to spawn (5–15ft); walleye bite peaks in April.',summer:'BOIL SEASON. Stripers push shad to the surface at dawn/dusk — run-and-gun with surface lures. Smallmouth on rocky points all day (15–30ft).',fall:'Boils continue into October. Stripers and smallmouth feed heavily. Best all-around fishing of the year with cooler temps and empty water.',winter:'Stripers school deep (60–100ft) — spoon them on sonar. Smallmouth slow but catchable on the warmest afternoons. Powell rarely ices.'},
    img:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=640&auto=format&fit=crop&q=75',
    imgHero:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&auto=format&fit=crop&q=80'
  },
];

/* ── UTAH SPECIES ───────────────────────────────────── */
const RMA_SPECIES = [
  { slug:'lake-trout',      em:'🏔️', name:'Lake Trout',      sci:'Salvelinus namaycush',  rec:'—', cat:'trout',  lakes:['Flaming Gorge'], desc:'The trophy of Utah trophy fishing. Flaming Gorge macks exceed 50 lbs. Deep water, big jigs, patience.' },
  { slug:'cutthroat-trout', em:'✂️', name:'Cutthroat Trout', sci:'Oncorhynchus clarkii',  rec:'—', cat:'trout',  lakes:['Strawberry'], desc:'Utah\'s state fish. Strawberry\'s Bear Lake-strain cutts are managed under a 15–22" release slot that grows giants.' },
  { slug:'rainbow-trout',   em:'🌈', name:'Rainbow Trout',   sci:'Oncorhynchus mykiss',   rec:'—', cat:'trout',  lakes:['Strawberry','Flaming Gorge'], desc:'The everywhere-fish of Utah waters. Strawberry and Flaming Gorge rainbows run thick and fight hard.' },
  { slug:'kokanee-salmon',  em:'🐟', name:'Kokanee Salmon',  sci:'Oncorhynchus nerka',    rec:'—', cat:'salmon', lakes:['Strawberry','Flaming Gorge'], desc:'Landlocked sockeye that school mid-depth in summer. Dodgers, squids, and precise speed control.' },
  { slug:'striped-bass',    em:'⚡', name:'Striped Bass',    sci:'Morone saxatilis',      rec:'—', cat:'bass',   lakes:['Lake Powell'], desc:'Powell\'s signature fish. Schools of thousands erupt in surface boils — the most explosive bite in Utah.' },
  { slug:'wiper',           em:'🌀', name:'Wiper',           sci:'Striped × White Bass',  rec:'—', cat:'bass',   lakes:['Willard Bay'], desc:'Hybrid striped bass built like linebackers. Willard Bay\'s summer boils are legendary on the Wasatch Front.' },
  { slug:'smallmouth-bass', em:'🐠', name:'Smallmouth Bass', sci:'Micropterus dolomieu',  rec:'—', cat:'bass',   lakes:['Lake Powell','Flaming Gorge','Willard Bay'], desc:'Pound-for-pound the hardest fighter in fresh water. Powell\'s canyon walls hold them by the thousands.' },
  { slug:'largemouth-bass', em:'🎯', name:'Largemouth Bass', sci:'Micropterus salmoides', rec:'—', cat:'bass',   lakes:['Lake Powell','Utah Lake'], desc:'Brushy canyon backs at Powell and harbor structure at Utah Lake. Classic bass fishing, Utah style.' },
  { slug:'walleye',         em:'👁️', name:'Walleye',         sci:'Sander vitreus',        rec:'—', cat:'walleye',lakes:['Willard Bay','Utah Lake','Lake Powell'], desc:'Utah\'s underrated eater-fish. Spring dike bite at Willard, river mouths at Utah Lake, main points at Powell.' },
  { slug:'white-bass',      em:'⚪', name:'White Bass',      sci:'Morone chrysops',       rec:'—', cat:'bass',   lakes:['Utah Lake'], desc:'When Utah Lake\'s white bass school up, it\'s a fish every cast. Perfect for kids and fast action.' },
  { slug:'channel-catfish', em:'😸', name:'Channel Catfish', sci:'Ictalurus punctatus',   rec:'—', cat:'catfish',lakes:['Utah Lake','Willard Bay'], desc:'Utah Lake is a legitimate trophy cat factory. Summer nights, cut bait, big fish.' },
  { slug:'crappie',         em:'🪶', name:'Black Crappie',   sci:'Pomoxis nigromaculatus',rec:'—', cat:'panfish',lakes:['Lake Powell','Willard Bay','Utah Lake'], desc:'Brush piles and harbor structure. Light jigs, light line, and some of the best eating in fresh water.' },
];

/* ── SAMPLE LEADERBOARD (Utah lakes) ─────────────────── */
const RMA_LB = {
  monthly:[
    { rank:1, angler:'M. Christensen', loc:'Ogden, UT',    species:'Lake Trout',    lake:'Flaming Gorge', len:'42.5"', verified:true,  prize:'$342' },
    { rank:2, angler:'C. Bohin',       loc:'Washington, UT',species:'Striped Bass',  lake:'Lake Powell',   len:'34.3"', verified:true,  prize:'$171' },
    { rank:3, angler:'T. Later',       loc:'Heber, UT',     species:'Cutthroat Trout',lake:'Strawberry',   len:'24.1"', verified:true,  prize:'$57'  },
    { rank:4, angler:'R. Hoffman',     loc:'Provo, UT',     species:'Channel Catfish',lake:'Utah Lake',    len:'31.8"', verified:true,  prize:'—'    },
    { rank:5, angler:'A. Torres',      loc:'Roy, UT',       species:'Wiper',          lake:'Willard Bay',  len:'26.2"', verified:true,  prize:'—'    },
    { rank:6, angler:'D. Park',        loc:'St. George, UT',species:'Smallmouth Bass',lake:'Lake Powell',  len:'19.9"', verified:false, prize:'—'    },
    { rank:7, angler:'S. Mitchell',    loc:'Orem, UT',      species:'Walleye',        lake:'Utah Lake',    len:'24.1"', verified:true,  prize:'—'    },
  ],
  annual:[
    { rank:1, angler:'M. Christensen', loc:'Ogden, UT',     species:'Lake Trout',    lake:'Flaming Gorge', len:'47.2"', verified:true, prize:'Season Champion' },
    { rank:2, angler:'J. Williams',    loc:'Kanab, UT',     species:'Striped Bass',  lake:'Lake Powell',   len:'38.8"', verified:true, prize:'Runner-up'       },
    { rank:3, angler:'K. Brown',       loc:'Heber, UT',     species:'Cutthroat Trout',lake:'Strawberry',   len:'26.5"', verified:true, prize:'3rd Place'       },
    { rank:4, angler:'C. Bohin',       loc:'Washington, UT',species:'Striped Bass',  lake:'Lake Powell',   len:'34.3"', verified:true, prize:'—'               },
    { rank:5, angler:'T. Later',       loc:'Heber, UT',     species:'Kokanee Salmon',lake:'Strawberry',    len:'22.1"', verified:true, prize:'—'               },
  ],
  alltime:[
    { rank:1, angler:'B. Hansen',   loc:'Manila, UT',   species:'Lake Trout',     lake:'Flaming Gorge', len:'51.5"', verified:true, prize:'Hall of Fame' },
    { rank:2, angler:'W. Prescott', loc:'Page, AZ',     species:'Striped Bass',   lake:'Lake Powell',   len:'42.2"', verified:true, prize:'Hall of Fame' },
    { rank:3, angler:'L. Later',    loc:'Provo, UT',    species:'Channel Catfish',lake:'Utah Lake',     len:'36.8"', verified:true, prize:'Hall of Fame' },
    { rank:4, angler:'R. Kwan',     loc:'Ogden, UT',    species:'Wiper',          lake:'Willard Bay',   len:'29.3"', verified:true, prize:'Hall of Fame' },
    { rank:5, angler:'D. Later',    loc:'Heber, UT',    species:'Cutthroat Trout',lake:'Strawberry',    len:'27.9"', verified:true, prize:'Hall of Fame' },
  ]
};

/* ── SAMPLE REPORTS (Utah lakes) ─────────────────────── */
const RMA_REPORTS = [
  { lake:'Flaming Gorge', state:'UT', date:'Jul 6, 2026', cond:'hot',  body:'Kokanee bite is wide open at 45–55ft — pink dodger/squid combos at 1.6 mph. Lake trout holding 90–110ft off Cedar Springs; big tubes on heavy jigheads. Burbot night bite starting on the north end.', tags:['Kokanee','Lake Trout','Trolling'], src:'member', depth:'45–110ft', temp:'58°F' },
  { lake:'Strawberry',    state:'UT', date:'Jul 5, 2026', cond:'hot',  body:'DWR gill-net survey confirms strong cutthroat year class. Slot fish (15–22") everywhere — remember immediate release. Kokanee at 35–45ft out from the Ladders. Rainbows on the flats at dawn.', tags:['Cutthroat','Kokanee','Slot Limit'], src:'auto', depth:'35–45ft', temp:'62°F' },
  { lake:'Willard Bay',   state:'UT', date:'Jul 4, 2026', cond:'hot',  body:'WIPER BOILS reported both mornings this weekend on the south end — shad-pattern topwater and lipless cranks. Walleye slower in the heat; try the dikes at first light. Cats active at night on cut bait.', tags:['Wiper','Boils','Topwater'], src:'member', depth:'Surface–15ft', temp:'74°F' },
  { lake:'Utah Lake',     state:'UT', date:'Jul 3, 2026', cond:'good', body:'Channel cats in full summer mode — carp meat and shrimp on the bottom anywhere from Lindon Harbor south. White bass schooling off American Fork at dusk. Walleye picking up slowly at Provo River mouth.', tags:['Channel Catfish','White Bass'], src:'auto', depth:'6–12ft', temp:'76°F' },
  { lake:'Lake Powell',   state:'UT', date:'Jul 2, 2026', cond:'hot',  body:'Striper boils erupting at dawn in Padre Bay and Warm Creek — run and gun with surface spooks. Smallmouth stacked on rocky points 15–25ft, ned rigs and grubs. Water temp 78° on the main channel.', tags:['Striped Bass','Boils','Smallmouth'], src:'member', depth:'Surface–25ft', temp:'78°F' },
];

/* ── UTAH GUIDES ────────────────────────────────────── */
const RMA_GUIDES = [
  { id:'gorge', name:'Gorge Trophy Guides',     init:'GT', spec:'Lake Trout · Kokanee',        bio:'Trophy mack specialists on Flaming Gorge for 15+ years. Full-day trips out of Cedar Springs, all gear provided.', lakes:['Flaming Gorge'], featured:true  },
  { id:'berry', name:'Berry Fishing Co.',       init:'BF', spec:'Cutthroat · Kokanee',         bio:'Strawberry Reservoir specialists. Slot-cutthroat trophy hunts and summer kokanee trolling. Ice trips in winter.', lakes:['Strawberry'], featured:true  },
  { id:'pwl',   name:'Powell Striper Charters', init:'PS', spec:'Striped Bass · Smallmouth',   bio:'Boil-chasing striper trips out of Wahweap and Bullfrog. Multi-day houseboat fishing packages available.', lakes:['Lake Powell'], featured:true  },
  { id:'wfront',name:'Wasatch Front Anglers',   init:'WF', spec:'Wiper · Walleye · Catfish',   bio:'Willard Bay and Utah Lake trips. Wiper boil season is our specialty — fast action 20 minutes from Ogden.', lakes:['Willard Bay','Utah Lake'], featured:false },
];

/* ── UTAH TACKLE ────────────────────────────────────── */
const RMA_TACKLE = [
  { lake:'Flaming Gorge', sp:'Lake Trout',      name:'Heavy Tube Jig Kit — 6" White/Chartreuse', desc:'The standard Gorge trophy setup. 6" tubes on 1–2oz heads, jigged vertically at 80–120ft over sonar marks.', badge:'Gorge Standard' },
  { lake:'Flaming Gorge', sp:'Kokanee Salmon',  name:'Pink Dodger + Squid Trolling Combo',       desc:'Pink dodger with matching squid, 1.5–1.8 mph behind downriggers at 45–55ft. The summer kokanee killer.', badge:'Hot Right Now' },
  { lake:'Strawberry',    sp:'Cutthroat Trout', name:'Tube Jig & Jerkbait Cutthroat Kit',        desc:'White tube jigs and suspending jerkbaits for slot cutts. Barbless hooks recommended for fast release.', badge:'Berry Essential' },
  { lake:'Willard Bay',   sp:'Wiper',           name:'Shad-Pattern Boil Pack',                   desc:'Topwater spooks and lipless cranks in shad patterns. Keep rods rigged and ready — boils erupt fast.', badge:'Boil Season' },
  { lake:'Utah Lake',     sp:'Channel Catfish', name:'Carolina Cat Rig Kit + Circle Hooks',      desc:'Sliding sinker rigs with 8/0 circle hooks. Fish carp meat or shrimp on the bottom, dusk till dawn.', badge:'Local Favorite' },
  { lake:'Lake Powell',   sp:'Striped Bass',    name:'Surface Spook + Anchovy Rig Combo',        desc:'Topwater spooks for boils, anchovy rigs for deep schools. Cover both patterns in one kit.', badge:'Powell Proven' },
  { lake:'Lake Powell',   sp:'Smallmouth Bass', name:'Ned Rig Canyon Kit',                       desc:'Green pumpkin ned rigs on 1/8oz heads. Drag rocky points and canyon walls — 50-fish days are real.', badge:'Top Rated' },
];

/* ── STATUS HELPERS ─────────────────────────────────── */
const SM = { hot:'🔥 Hot',  good:'✓ Good', slow:'⏳ Slow', iced_over:'🧊 Iced', closed:'⛔ Closed' };
const SC = { hot:'badge-hot', good:'badge-good', slow:'badge-slow', iced_over:'badge-slow', closed:'badge-closed' };
const DC = { hot:'dot-hot',   good:'dot-good',   slow:'dot-slow' };

/* ── SHARED COMPONENTS ───────────────────────────────── */

function RMA_Nav(activeLink = '') {
  return `
<nav class="nav always-dark" id="rmaNav">
  <a href="/" class="nav-logo" aria-label="Rocky Mountain Anglers home">
    <div class="nav-logo-mark">
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        <polygon points="17,3 31,27 3,27" fill="none" stroke="#9CCFE3" stroke-width="1.5"/>
        <polygon points="17,9 27,27 7,27" fill="#9CCFE3" opacity="0.13"/>
        <line x1="11" y1="27" x2="23" y2="27" stroke="#9CCFE3" stroke-width="1.5" opacity="0.35"/>
      </svg>
    </div>
    <div class="nav-logo-text">Rocky Mountain <em>Anglers</em></div>
  </a>
  <div class="nav-links">
    <a href="/lakes.html"       class="nav-link${activeLink==='lakes'?' active':''}">Lakes</a>
    <a href="/leaderboard.html" class="nav-link${activeLink==='leaderboard'?' active':''}">Leaderboard</a>
    <a href="/species.html"     class="nav-link${activeLink==='species'?' active':''}">Species</a>
    <a href="/reports.html"     class="nav-link${activeLink==='reports'?' active':''}">Reports</a>
    <a href="/guides.html"      class="nav-link${activeLink==='guides'?' active':''}">Guides</a>
    <a href="/tackle.html"      class="nav-link${activeLink==='tackle'?' active':''}">Tackle</a>
    <a href="/fish-diary.html"  class="nav-link${activeLink==='diary'?' active':''}">Fish Diary</a>
    <a href="/sign-in.html"     class="nav-signin">Sign In</a>
    <a href="/kit.html"         class="nav-cta">Get Certified</a>
  </div>
  <button class="nav-hamburger" onclick="RMA_toggleMob()" aria-label="Open menu" aria-expanded="false" id="navHamBtn">☰</button>
</nav>
<nav class="mob-nav" id="mobNav" aria-hidden="true">
  <div class="mob-nav-head">
    <a href="/" class="nav-logo">
      <div class="nav-logo-mark">
        <svg width="30" height="30" viewBox="0 0 34 34" fill="none"><polygon points="17,3 31,27 3,27" fill="none" stroke="#9CCFE3" stroke-width="1.5"/><polygon points="17,9 27,27 7,27" fill="#9CCFE3" opacity="0.13"/></svg>
      </div>
      <div class="nav-logo-text">Rocky Mountain <em>Anglers</em></div>
    </a>
    <button class="mob-nav-close" onclick="RMA_toggleMob()" aria-label="Close menu">✕</button>
  </div>
  <div class="mob-nav-links">
    <a href="/lakes.html"       class="mob-nav-link" onclick="RMA_toggleMob()">Lakes</a>
    <a href="/leaderboard.html" class="mob-nav-link" onclick="RMA_toggleMob()">Leaderboard</a>
    <a href="/species.html"     class="mob-nav-link" onclick="RMA_toggleMob()">Species</a>
    <a href="/reports.html"     class="mob-nav-link" onclick="RMA_toggleMob()">Reports</a>
    <a href="/guides.html"      class="mob-nav-link" onclick="RMA_toggleMob()">Guides</a>
    <a href="/tackle.html"      class="mob-nav-link" onclick="RMA_toggleMob()">Tackle</a>
    <a href="/fish-diary.html"  class="mob-nav-link" onclick="RMA_toggleMob()">Fish Diary</a>
  </div>
  <div class="mob-nav-actions">
    <a href="/sign-in.html" class="btn btn-md btn-secondary btn-full" onclick="RMA_toggleMob()">Sign In</a>
    <a href="/kit.html"     class="btn btn-md btn-primary  btn-full" onclick="RMA_toggleMob()">Get Certified — $34.99</a>
  </div>
</nav>`;
}

function RMA_Footer() {
  return `
<footer class="footer">
  <svg class="footer-mtn" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,100 L0,60 L100,25 L200,55 L320,8 L440,45 L560,12 L680,50 L800,18 L920,55 L1040,22 L1160,58 L1280,26 L1440,50 L1440,100Z" fill="#9CCFE3"/>
  </svg>
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <div class="footer-brand-name">Rocky Mountain <em>Anglers</em></div>
        <p class="footer-tagline">Verified catch leaderboards and lake intelligence — launching first on Utah's flagship waters.</p>
        <div class="footer-states">UTAH LAUNCH · 5 FLAGSHIP LAKES</div>
      </div>
      <div class="footer-col">
        <h4>The Lakes</h4>
        <ul>
          <li><a href="/lake/flaming-gorge.html">Flaming Gorge</a></li>
          <li><a href="/lake/strawberry.html">Strawberry</a></li>
          <li><a href="/lake/willard-bay.html">Willard Bay</a></li>
          <li><a href="/lake/utah-lake.html">Utah Lake</a></li>
          <li><a href="/lake/lake-powell.html">Lake Powell</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Fish</h4>
        <ul>
          <li><a href="/leaderboard.html">Leaderboard</a></li>
          <li><a href="/species.html">Species Guide</a></li>
          <li><a href="/reports.html">Fishing Reports</a></li>
          <li><a href="/tackle.html">Tackle Shop</a></li>
          <li><a href="/guides.html">Find a Guide</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Compete</h4>
        <ul>
          <li><a href="/kit.html">Get Certified Kit</a></li>
          <li><a href="/submit-catch.html">Submit a Catch</a></li>
          <li><a href="/fish-diary.html">Fish Diary</a></li>
          <li><a href="/contest-rules.html">Contest Rules</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="/legal/privacy.html">Privacy Policy</a></li>
          <li><a href="/legal/terms.html">Terms of Use</a></li>
          <li><a href="/legal/affiliate.html">Affiliate Disclosure</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© 2026 Rocky Mountain Anglers. All rights reserved.</p>
      <p class="footer-legal">Prize competitions are skill-based contests. Legal review required before paid entries open. 5% platform fee applies. Leaderboard data shown may be for demonstration purposes.</p>
    </div>
  </div>
</footer>`;
}

function RMA_LakeCard(l) {
  return `
<a href="/lake/${l.slug}.html" class="lake-card card-hover" aria-label="${l.name} — view lake details">
  <div class="lake-card-img-wrap">
    <img class="lake-card-img" src="${l.img}" alt="${l.fullName}, Utah" loading="lazy" width="640" height="200" onerror="this.style.background='#2B3740'">
    <div class="lake-card-img-overlay" aria-hidden="true"></div>
    <div class="lake-card-status"><span class="badge ${SC[l.status]||'badge-slow'}">${SM[l.status]||'Unknown'}</span></div>
  </div>
  <div class="lake-card-body">
    <div class="lake-card-state"><span class="lake-card-state-tag">${l.vibe.toUpperCase()}</span><span class="lake-card-depth mono">${l.depth}ft max</span></div>
    <div class="lake-card-name">${l.name}</div>
    <div class="lake-card-county">${l.region} · ${l.acres.toLocaleString()} acres</div>
    <p class="lake-card-summary">${l.summary}</p>
    <div class="lake-card-species">${l.species.slice(0,3).map(s=>`<span class="lake-chip">${s}</span>`).join('')}${l.species.length>3?`<span class="lake-chip">+${l.species.length-3}</span>`:''}</div>
  </div>
  <div class="lake-card-arrow" aria-hidden="true">→</div>
</a>`;
}

function RMA_renderLB(data, tableId, cardsId) {
  const rc = {1:'lb-rank-1', 2:'lb-rank-2', 3:'lb-rank-3'};
  const tbody = document.getElementById(tableId);
  if (tbody) {
    tbody.innerHTML = data.map(r => `
<tr>
  <td><span class="lb-rank ${rc[r.rank]||''}">${r.rank}</span></td>
  <td>
    <div class="lb-angler">
      <div class="lb-avatar">${r.angler.split(' ').map(n=>n[0]).join('')}</div>
      <div><div class="lb-angler-name">${r.angler}</div><div class="lb-angler-state">${r.loc}</div></div>
    </div>
  </td>
  <td class="lb-species">${r.species}</td>
  <td class="lb-lake">${r.lake}</td>
  <td>${r.verified ? '<span class="badge badge-verified">✓ Verified</span>' : '<span class="badge badge-info">Pending</span>'}</td>
  <td class="lb-length">${r.len}</td>
  <td class="lb-prize">${r.prize==='—'?'<span class="text-silver">—</span>':`<span class="lb-prize-badge">${r.prize}</span>`}</td>
</tr>`).join('');
  }
  const cards = document.getElementById(cardsId);
  if (cards) {
    cards.innerHTML = data.map(r => `
<div class="lb-card">
  <div class="lb-card-rank ${rc[r.rank]||''}">${r.rank}</div>
  <div class="lb-card-body">
    <div class="lb-card-angler">${r.angler}</div>
    <div class="lb-card-meta">${r.species} · ${r.lake}${r.verified?' · <span style="color:#5CB88A;font-size:10px">✓</span>':''}</div>
    ${r.prize!=='—'?`<div class="mt-8"><span class="lb-prize-badge">${r.prize}</span></div>`:''}
  </div>
  <div class="lb-card-len">${r.len}</div>
</div>`).join('');
  }
}

function RMA_calcPot(sliderId, outputIds) {
  const n = parseInt(document.getElementById(sliderId).value);
  const pot = n * RMA_PAY.entry * (1 - RMA_PAY.platform);
  const out = outputIds;
  if (out.n)   document.getElementById(out.n).textContent   = n;
  if (out.slv) document.getElementById(out.slv).textContent = n + ' submissions';
  if (out.p1)  document.getElementById(out.p1).textContent  = '$' + Math.round(pot * RMA_PAY.p1).toLocaleString();
  if (out.p2)  document.getElementById(out.p2).textContent  = '$' + Math.round(pot * RMA_PAY.p2).toLocaleString();
  if (out.p3)  document.getElementById(out.p3).textContent  = '$' + Math.round(pot * RMA_PAY.p3).toLocaleString();
  if (out.tot) document.getElementById(out.tot).textContent = '$' + Math.round(pot).toLocaleString();
  if (out.hero) document.getElementById(out.hero).textContent = '$' + Math.round(pot).toLocaleString();
}

function RMA_toggleMob() {
  const mn  = document.getElementById('mobNav');
  const btn = document.getElementById('navHamBtn');
  if (!mn) return;
  const open = mn.classList.toggle('open');
  btn && btn.setAttribute('aria-expanded', open);
  mn.setAttribute('aria-hidden', !open);
  document.body.style.overflow = open ? 'hidden' : '';
}

function RMA_initNav(transparent = false) {
  const nav = document.getElementById('rmaNav');
  if (!nav) return;
  if (!transparent) { nav.classList.add('always-dark'); return; }
  nav.classList.remove('always-dark');
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

let _toastTimer;
function RMA_toast(msg, type = '') {
  let el = document.getElementById('rmaToast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'rmaToast';
    el.className = 'toast';
    el.setAttribute('role', 'alert');
    el.setAttribute('aria-live', 'polite');
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.className = 'toast' + (type ? ' toast-' + type : '');
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 3400);
}

function RMA_ReportCard(r) {
  return `
<div class="report-card">
  <div class="report-card-head">
    <div>
      <div class="report-card-lake">${r.lake}</div>
      <div class="report-card-state"><span class="status-dot ${DC[r.cond]||'dot-slow'}" aria-hidden="true"></span>${r.cond.toUpperCase()}${r.temp ? ' · ' + r.temp : ''}${r.depth ? ' · ' + r.depth : ''}</div>
    </div>
    <div class="report-card-meta">
      ${r.src==='auto'   ? '<span class="badge badge-info">🤖 Auto-Report</span>' : ''}
      ${r.src==='guide'  ? '<span class="badge badge-blue">🎣 Guide</span>' : ''}
      ${r.src==='member' ? '<span class="badge badge-good">👤 Member</span>' : ''}
      <span class="report-card-date">${r.date}</span>
    </div>
  </div>
  <p class="report-card-body">${r.body}</p>
  <div class="report-card-tags">${r.tags.map(t=>`<span class="rtag rtag-fish">${t}</span>`).join('')}</div>
</div>`;
}

function RMA_GuideCard(g) {
  return `
<div class="guide-card${g.featured?' featured':''}">
  ${g.featured ? '<span class="guide-card-feat-badge">▲ Featured Guide</span>' : ''}
  <div class="guide-avatar">${g.init}</div>
  <div class="guide-name">${g.name}</div>
  <div class="guide-spec">${g.spec}</div>
  <p class="guide-bio">${g.bio}</p>
  <div class="guide-lakes">${g.lakes.map(l=>`<span class="guide-lake-chip">${l}</span>`).join('')}</div>
  <button class="btn btn-sm btn-outline-ice" onclick="RMA_toast('Guide contact info — launching soon!')">Book a Trip</button>
</div>`;
}

function RMA_SpeciesCard(s) {
  return `
<div class="species-card" role="button" tabindex="0" onclick="RMA_toast('Full species guide — coming soon!')" onkeydown="if(event.key==='Enter')RMA_toast('Species guide coming soon!')" aria-label="${s.name}">
  <span class="species-card-icon" aria-hidden="true">${s.em}</span>
  <div class="species-card-name">${s.name}</div>
  <div class="species-card-sci">${s.sci}</div>
  <div class="species-card-rec"><span>Best water:</span> ${s.lakes[0]}</div>
</div>`;
}

function RMA_TackleCard(t) {
  return `
<div class="tackle-card">
  <span class="tackle-card-badge"><span class="tackle-card-lake">${t.lake}</span> · ${t.sp} · ${t.badge}</span>
  <div class="tackle-card-name">${t.name}</div>
  <p class="tackle-card-desc">${t.desc}</p>
  <button class="tackle-card-buy" onclick="RMA_toast('Affiliate link — opens partner store')">Shop Now →</button>
  <div class="tackle-card-disc">Affiliate link — we may earn a small commission.</div>
</div>`;
}

function RMA_MtnSVG(fill = '#080B0E', opacity = 1) {
  return `<svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" style="opacity:${opacity};display:block;width:100%">
    <path d="M0,90 L0,55 L110,20 L200,48 L310,10 L420,42 L530,8 L640,40 L750,6 L860,38 L970,12 L1080,44 L1190,16 L1300,48 L1440,22 L1440,90Z" fill="${fill}"/>
    <path d="M730,6 L716,26 L745,26Z M530,8 L518,26 L543,26Z M970,12 L958,30 L983,30Z" fill="rgba(156,207,227,0.5)"/>
  </svg>`;
}
