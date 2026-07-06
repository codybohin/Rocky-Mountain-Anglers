/* ═══════════════════════════════════════════════════════
   ROCKY MOUNTAIN ANGLERS — SHARED DATA & UTILITIES
   Single source of truth for all page data
═══════════════════════════════════════════════════════ */

/* ── PRIZE POT CONFIG — single source ── */
const RMA_PAY = { entry: 5, platform: 0.05, p1: 0.60, p2: 0.30, p3: 0.10 };

/* ── ALL LAKES ─────────────────────────────────────── */
const RMA_LAKES = [
  { slug:'flaming-gorge', name:'Flaming Gorge Reservoir', state:'UT', region:'Uinta Mountains', county:'Daggett County', acres:42000, depth:436, elev:6040, status:'hot', motorboat:true, boatRamp:true, hpLimit:null, species:['Lake Trout','Rainbow Trout','Smallmouth Bass'], summary:'World-class lake trout in a red-rock canyon reservoir. Trophy fish to 50+ lbs caught regularly.', img:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&auto=format&fit=crop&q=80' },
  { slug:'deer-creek',    name:'Deer Creek Reservoir',    state:'UT', region:'Wasatch Front',   county:'Wasatch County', acres:3400, depth:85, elev:5417, status:'good', motorboat:true, boatRamp:true, hpLimit:null, species:['Rainbow Trout','Yellow Perch','Smallmouth Bass'], summary:'Wasatch Front gem near Provo with excellent rainbow trout, perch, and smallmouth bass.', img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&auto=format&fit=crop&q=80' },
  { slug:'utah-lake',     name:'Utah Lake',               state:'UT', region:'Wasatch Front',   county:'Utah County',    acres:148000, depth:14, elev:4489, status:'good', motorboat:true, boatRamp:true, hpLimit:null, species:['Channel Catfish','Walleye','White Bass'], summary:"Utah's largest freshwater lake. Warm-water species including catfish, walleye, and white bass.", img:'https://images.unsplash.com/photo-1439853949212-36589f9f2bf4?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1439853949212-36589f9f2bf4?w=1400&auto=format&fit=crop&q=80' },
  { slug:'yuba-reservoir',name:'Yuba Reservoir',          state:'UT', region:'West Desert',     county:'Juab County',    acres:11000, depth:38, elev:4625, status:'good', motorboat:true, boatRamp:true, hpLimit:null, species:['Walleye','Rainbow Trout','Channel Catfish'], summary:'Trophy walleye fishing with consistent rainbow trout action in southern Utah.', img:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&auto=format&fit=crop&q=80' },
  { slug:'echo-reservoir',name:'Echo Reservoir',          state:'UT', region:'Summit County',   county:'Summit County',  acres:1100, depth:36, elev:5480, status:'slow', motorboat:true, boatRamp:true, hpLimit:null, species:['Rainbow Trout','Yellow Perch'], summary:'Heavily stocked Summit County reservoir. Reliable family fishing close to Park City.', img:'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1400&auto=format&fit=crop&q=80' },
  { slug:'blue-mesa',     name:'Blue Mesa Reservoir',     state:'CO', region:'Gunnison Country',county:'Gunnison County',acres:9000, depth:340, elev:7519, status:'hot', motorboat:true, boatRamp:true, hpLimit:null, species:['Lake Trout','Rainbow Trout','Kokanee Salmon'], summary:"Colorado's largest reservoir. World-class lake trout and kokanee in Gunnison canyon.", img:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&auto=format&fit=crop&q=80' },
  { slug:'lake-granby',   name:'Lake Granby',             state:'CO', region:'Grand County',    county:'Grand County',   acres:7256, depth:265, elev:8280, status:'good', motorboat:true, boatRamp:true, hpLimit:null, species:['Lake Trout','Kokanee Salmon','Rainbow Trout'], summary:'Trophy lake trout and kokanee salmon with views of the Never Summer Mountains.', img:'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1400&auto=format&fit=crop&q=80' },
  { slug:'horsetooth',    name:'Horsetooth Reservoir',    state:'CO', region:'Front Range',     county:'Larimer County', acres:1900, depth:180, elev:5430, status:'good', motorboat:true, boatRamp:true, hpLimit:null, species:['Smallmouth Bass','Rainbow Trout','Walleye'], summary:'Front Range fishery near Fort Collins with excellent smallmouth bass and stocked rainbows.', img:'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1400&auto=format&fit=crop&q=80' },
  { slug:'eleven-mile',   name:'Eleven Mile Reservoir',   state:'CO', region:'South Park',      county:'Park County',    acres:3405, depth:100, elev:8663, status:'hot', motorboat:true, boatRamp:true, hpLimit:null, species:['Northern Pike','Rainbow Trout','Kokanee Salmon'], summary:'Trophy northern pike and kokanee with breathtaking high-altitude South Platte scenery.', img:'https://images.unsplash.com/photo-1535931737580-a99567967ddc?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1535931737580-a99567967ddc?w=1400&auto=format&fit=crop&q=80' },
  { slug:'dillon-reservoir',name:'Dillon Reservoir',      state:'CO', region:'Summit County',   county:'Summit County',  acres:3300, depth:256, elev:9017, status:'good', motorboat:true, boatRamp:true, hpLimit:10,   species:['Rainbow Trout','Brown Trout'], summary:"Colorado's highest major reservoir. 10 HP limit. Alpine scenery and quality trout fishing.", img:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1400&auto=format&fit=crop&q=80' },
  { slug:'boysen-reservoir',name:'Boysen Reservoir',      state:'WY', region:'Wind River Canyon',county:'Fremont County', acres:19600, depth:80, elev:4930, status:'good', motorboat:true, boatRamp:true, hpLimit:null, species:['Walleye','Sauger','Rainbow Trout'], summary:'Wind River Canyon reservoir with excellent walleye, sauger, and rainbow trout.', img:'https://images.unsplash.com/photo-1439853949212-36589f9f2bf4?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1439853949212-36589f9f2bf4?w=1400&auto=format&fit=crop&q=80' },
  { slug:'fremont-lake',  name:'Fremont Lake',            state:'WY', region:'Bridger-Teton',   county:'Sublette County',acres:5330, depth:600, elev:7500, status:'good', motorboat:true, boatRamp:true, hpLimit:null, species:['Lake Trout','Rainbow Trout','Cutthroat Trout'], summary:"Wyoming's deepest natural lake. Glacially formed, cold and clear, with trophy lake trout.", img:'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=1400&auto=format&fit=crop&q=80' },
  { slug:'jackson-lake',  name:'Jackson Lake',            state:'WY', region:'Grand Teton NP',  county:'Teton County',   acres:15800, depth:438, elev:6772, status:'good', motorboat:true, boatRamp:true, hpLimit:null, species:['Brown Trout','Lake Trout','Cutthroat Trout'], summary:'Grand Teton National Park reservoir. Brown and lake trout beneath the dramatic Teton Range.', img:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&auto=format&fit=crop&q=80' },
  { slug:'flathead-lake', name:'Flathead Lake',           state:'MT', region:'Northwest Montana',county:'Lake County',    acres:191000, depth:370, elev:2893, status:'hot', motorboat:true, boatRamp:true, hpLimit:null, species:['Lake Trout','Yellow Perch','Smallmouth Bass'], summary:'Largest natural freshwater lake west of the Mississippi. Nationally significant fishery.', img:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&auto=format&fit=crop&q=80' },
  { slug:'fort-peck-lake',name:'Fort Peck Lake',          state:'MT', region:'Northeast Montana',county:'Valley County',  acres:383000, depth:220, elev:2250, status:'hot', motorboat:true, boatRamp:true, hpLimit:null, species:['Walleye','Northern Pike','Smallmouth Bass'], summary:"Montana's largest reservoir. World-class walleye, pike, and smallmouth in uncrowded water.", img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&auto=format&fit=crop&q=80' },
  { slug:'canyon-ferry-lake',name:'Canyon Ferry Lake',    state:'MT', region:'Helena Valley',   county:'Lewis and Clark County',acres:35000, depth:60, elev:3767, status:'good', motorboat:true, boatRamp:true, hpLimit:null, species:['Rainbow Trout','Brown Trout','Walleye'], summary:"Helena's home lake. Rainbow trout, brown trout, and walleye near the state capitol.", img:'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1400&auto=format&fit=crop&q=80' },
  { slug:'lake-pend-oreille',name:"Lake Pend Oreille",   state:'ID', region:'North Idaho',     county:'Bonner County',  acres:148000, depth:1158, elev:2062, status:'hot', motorboat:true, boatRamp:true, hpLimit:null, species:['Rainbow Trout','Lake Trout','Smallmouth Bass'], summary:'Over 1,100 feet deep. Legendary Kamloops rainbow trout to 30+ lbs in northern Idaho.', img:'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1400&auto=format&fit=crop&q=80' },
  { slug:'american-falls',name:'American Falls Reservoir',state:'ID', region:'Snake River Plain',county:'Power County',   acres:56000, depth:40, elev:4318, status:'hot', motorboat:true, boatRamp:true, hpLimit:null, species:['Rainbow Trout','Yellow Perch','Walleye'], summary:"Idaho's top reservoir for rainbow trout, yellow perch, and walleye on the Snake River.", img:'https://images.unsplash.com/photo-1535931737580-a99567967ddc?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1535931737580-a99567967ddc?w=1400&auto=format&fit=crop&q=80' },
  { slug:'lucky-peak',    name:'Lucky Peak Reservoir',   state:'ID', region:'Boise Front',     county:'Ada County',     acres:2700, depth:239, elev:2824, status:'good', motorboat:true, boatRamp:true, hpLimit:null, species:['Rainbow Trout','Smallmouth Bass','Yellow Perch'], summary:"Boise's home reservoir. Spring rainbow trout and summer smallmouth bass fishing.", img:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=640&auto=format&fit=crop&q=75', imgHero:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&auto=format&fit=crop&q=80' },
];

/* ── SPECIES ────────────────────────────────────────── */
const RMA_SPECIES = [
  { slug:'rainbow-trout',   em:'🌈', name:'Rainbow Trout',   sci:'Oncorhynchus mykiss',    rec:'43"',  cat:'trout',  desc:'The most widely stocked trout in Rocky Mountain waters. Known for acrobatic fights and explosive strikes.' },
  { slug:'brown-trout',     em:'🟤', name:'Brown Trout',     sci:'Salmo trutta',            rec:'42.9"',cat:'trout',  desc:'The most wary and challenging trout to catch. Trophy browns are among the most prized freshwater fish in the Rockies.' },
  { slug:'lake-trout',      em:'🏔️', name:'Lake Trout',      sci:'Salvelinus namaycush',   rec:'50"',  cat:'trout',  desc:'Deepwater giants found in large, cold Rocky Mountain reservoirs. Require specialized deep-jigging or downrigger tactics.' },
  { slug:'cutthroat-trout', em:'✂️', name:'Cutthroat Trout', sci:'Oncorhynchus clarkii',   rec:'39"',  cat:'trout',  desc:'The native trout of the Rocky Mountains and the state fish of Wyoming and Idaho. Red jaw slashes are unmistakable.' },
  { slug:'kokanee-salmon',  em:'🐟', name:'Kokanee Salmon',  sci:'Oncorhynchus nerka',      rec:'28"',  cat:'salmon', desc:'Landlocked sockeye salmon found in cold, deep reservoirs. School near the surface in summer and create an exciting trolling bite.' },
  { slug:'tiger-trout',     em:'🐯', name:'Tiger Trout',     sci:'Brown x Brook hybrid',    rec:'34"',  cat:'trout',  desc:'A rare sterile hybrid known for its marble tiger-stripe pattern and aggressive feeding. Selectively stocked in a few Rocky Mountain waters.' },
  { slug:'smallmouth-bass', em:'🐠', name:'Smallmouth Bass', sci:'Micropterus dolomieu',    rec:'27"',  cat:'bass',   desc:'Pound-for-pound one of the hardest-fighting freshwater fish. Rocky canyon reservoirs provide excellent habitat.' },
  { slug:'walleye',         em:'👁️', name:'Walleye',         sci:'Sander vitreus',          rec:'35.8"',cat:'walleye',desc:'Prized table fare and challenging to catch. The glassy reflective eye and white tail tip are distinctive identification features.' },
  { slug:'northern-pike',   em:'🗡️', name:'Northern Pike',   sci:'Esox lucius',             rec:'52.5"',cat:'pike',   desc:'Aggressive ambush predators that grow to trophy size in cold Rocky Mountain reservoirs. A heavy-duty leader is mandatory.' },
  { slug:'tiger-muskie',    em:'🦓', name:'Tiger Muskie',    sci:'Esox hybrid',             rec:'60"',  cat:'pike',   desc:'Trophy predators stocked in select Colorado and Wyoming waters. Fish of 10,000 casts — but worth every one.' },
  { slug:'yellow-perch',    em:'🟡', name:'Yellow Perch',    sci:'Perca flavescens',         rec:'19.9"',cat:'panfish',desc:'Schooling panfish that are excellent table fare. Ice fishing favorites across frozen Rocky Mountain lakes in winter.' },
  { slug:'channel-catfish', em:'😸', name:'Channel Catfish', sci:'Ictalurus punctatus',     rec:'47"',  cat:'catfish',desc:'Night-time bottom feeders in warmer Rocky Mountain reservoirs. Popular for families and great eating.' },
];

/* ── SAMPLE LEADERBOARD ─────────────────────────────── */
const RMA_LB = {
  monthly:[
    { rank:1, angler:'T. Rowland',   loc:'MT', species:'Lake Trout',    lake:'Flathead Lake',  len:'41.5"', verified:true,  prize:'$342' },
    { rank:2, angler:'C. Bohin',     loc:'UT', species:'Rainbow Trout', lake:'Flaming Gorge',  len:'28.3"', verified:true,  prize:'$171' },
    { rank:3, angler:'M. Jensen',    loc:'CO', species:'Northern Pike', lake:'Eleven Mile',    len:'44.1"', verified:true,  prize:'$57'  },
    { rank:4, angler:'R. Hoffman',   loc:'WY', species:'Brown Trout',   lake:'Jackson Lake',   len:'27.8"', verified:true,  prize:'—'    },
    { rank:5, angler:'A. Torres',    loc:'ID', species:'Rainbow Trout', lake:'Pend Oreille',   len:'26.2"', verified:true,  prize:'—'    },
    { rank:6, angler:'D. Park',      loc:'CO', species:'Lake Trout',    lake:'Blue Mesa',      len:'24.9"', verified:false, prize:'—'    },
    { rank:7, angler:'S. Mitchell',  loc:'MT', species:'Walleye',       lake:'Fort Peck Lake', len:'24.1"', verified:true,  prize:'—'    },
  ],
  annual:[
    { rank:1, angler:'T. Rowland',  loc:'MT', species:'Lake Trout',    lake:'Flathead Lake',  len:'47.2"', verified:true,  prize:'Season Champion' },
    { rank:2, angler:'J. Williams', loc:'ID', species:'Rainbow Trout', lake:'Pend Oreille',   len:'31.8"', verified:true,  prize:'Runner-up'       },
    { rank:3, angler:'K. Brown',    loc:'WY', species:'Northern Pike', lake:'Fremont Lake',   len:'48.5"', verified:true,  prize:'3rd Place'       },
    { rank:4, angler:'C. Bohin',    loc:'UT', species:'Rainbow Trout', lake:'Flaming Gorge',  len:'28.3"', verified:true,  prize:'—'               },
    { rank:5, angler:'M. Jensen',   loc:'CO', species:'Northern Pike', lake:'Eleven Mile',    len:'44.1"', verified:true,  prize:'—'               },
  ],
  alltime:[
    { rank:1, angler:'B. Hansen',   loc:'MT', species:'Lake Trout',    lake:'Flathead Lake',  len:'53.5"', verified:true,  prize:'Hall of Fame' },
    { rank:2, angler:'W. Prescott', loc:'ID', species:'Tiger Muskie',  lake:'Pend Oreille',   len:'58.2"', verified:true,  prize:'Hall of Fame' },
    { rank:3, angler:'L. Dumont',   loc:'CO', species:'Lake Trout',    lake:'Blue Mesa',      len:'49.8"', verified:true,  prize:'Hall of Fame' },
    { rank:4, angler:'R. Kwan',     loc:'WY', species:'Northern Pike', lake:'Fremont Lake',   len:'51.3"', verified:true,  prize:'Hall of Fame' },
    { rank:5, angler:'T. Rowland',  loc:'MT', species:'Lake Trout',    lake:'Flathead Lake',  len:'47.2"', verified:true,  prize:'Hall of Fame' },
  ]
};

/* ── SAMPLE REPORTS ─────────────────────────────────── */
const RMA_REPORTS = [
  { lake:'Flaming Gorge Reservoir', state:'UT', date:'Jun 16, 2026', cond:'hot',  body:'Lake trout aggressive in 60–80ft. Tube jigs in chartreuse producing fish to 15 lbs. Rainbow trout solid near dam face at dawn. Water temp 52°F at 40ft.', tags:['Lake Trout','Rainbow Trout','Jigging'], src:'member', depth:'60–80ft', temp:'52°F' },
  { lake:'Blue Mesa Reservoir',     state:'CO', date:'Jun 14, 2026', cond:'hot',  body:'CDOW stocked 8,000 rainbow trout last week. Fish holding in East Elk arm at 15–25ft. Kokanee schooling near surface in AM — small UV spoons at 4 mph.', tags:['Rainbow Trout','Kokanee','Trolling'], src:'auto',   depth:'15–25ft', temp:'58°F' },
  { lake:'Flathead Lake',           state:'MT', date:'Jun 13, 2026', cond:'good', body:'Yellow perch schooled near south bay. Lake trout running deep at 120ft+. Water clarity exceptional — go with natural colors this week.', tags:['Yellow Perch','Lake Trout'], src:'member', depth:'120ft+', temp:'48°F' },
  { lake:'Fort Peck Lake',          state:'MT', date:'Jun 12, 2026', cond:'hot',  body:'MT FWP reports excellent walleye on main river channel at dawn and dusk. Nightcrawlers on bottom rigs outperforming artificials. Pike active in shallows.', tags:['Walleye','Northern Pike'], src:'auto',   depth:'8–20ft', temp:'64°F' },
  { lake:'Lake Pend Oreille',       state:'ID', date:'Jun 11, 2026', cond:'hot',  body:'Kamloops rainbow bite is on. 8" flashers with hoochies trolled at 3.5 mph at 80–90ft producing fish to 12 lbs. Best morning action starting at dawn.', tags:['Rainbow Trout','Trolling'], src:'member', depth:'80–90ft', temp:'50°F' },
];

/* ── GUIDES ─────────────────────────────────────────── */
const RMA_GUIDES = [
  { id:'hcf',  name:'High Country Fly',       init:'HCF', spec:'Trophy Trout · Lake Trout',    bio:'20 years guiding on Flaming Gorge and Utah mountain lakes. Full-day trips, all gear provided.',                lakes:['Flaming Gorge','Deer Creek'],        featured:true  },
  { id:'rrg',  name:'Rocky Ridge Guide Co.',  init:'RR',  spec:'Walleye · Pike · Bass',        bio:'Colorado guide covering Blue Mesa, Eleven Mile, and Horsetooth. Half and full-day options.',                   lakes:['Blue Mesa','Eleven Mile'],           featured:false },
  { id:'mtf',  name:'Montana Trophy Fishing', init:'MTF', spec:'Lake Trout · Perch · Walleye', bio:'Expert on Flathead Lake and Fort Peck. Multi-day expeditions available. Big fish specialists.',                  lakes:['Flathead Lake','Fort Peck Lake'],    featured:true  },
  { id:'sra',  name:'Snake River Angler',     init:'SRA', spec:'Kamloops Rainbow · Kokanee',   bio:'Idaho guide specializing in Pend Oreille and American Falls. Kamloops rainbow specialists since 2008.',         lakes:['Lake Pend Oreille','American Falls'],featured:false },
  { id:'spg',  name:'South Park Guides',      init:'SPG', spec:'Northern Pike · Kokanee',      bio:'South Park, Colorado specialists. Trophy pike and kokanee on Eleven Mile and Antero Reservoir.',               lakes:['Eleven Mile'],                       featured:false },
  { id:'wrf',  name:'Wind River Fly & Guide', init:'WRF', spec:'Walleye · Rainbow Trout',      bio:'Wyoming guide covering Boysen, Fremont Lake, and Pilot Butte Reservoir. Walleye specialists.',                 lakes:['Boysen Reservoir','Fremont Lake'],   featured:false },
];

/* ── TACKLE ─────────────────────────────────────────── */
const RMA_TACKLE = [
  { lake:'Flaming Gorge', sp:'Lake Trout',    name:'Tube Jig Kit — Chartreuse/Smoke',  desc:'6" tube jigs in proven Flaming Gorge colors. Fished vertically at 60–80ft on 1–2oz heads.',        badge:'Top Rated'    },
  { lake:'Blue Mesa',     sp:'Kokanee Salmon',name:'UV Kokanee Spoon Trolling Pack',    desc:'Brass and chrome spoons in 1.5–2". Speed trolled at 1.5–2 mph for consistent kokanee results.',   badge:'Seasonal Pick' },
  { lake:'Eleven Mile',   sp:'Northern Pike', name:'30lb Fluorocarbon Leader Material', desc:"Pike teeth cut lighter line immediately. 30lb fluoro is the minimum at Eleven Mile.",               badge:'Essential'     },
  { lake:'Fort Peck Lake',sp:'Walleye',       name:'Bottom Bouncer Rig Kit',            desc:'Pre-tied walleye rigs with 1/2–1 oz bouncers. Standard Fort Peck walleye setup.',                    badge:'Local Favorite'},
  { lake:'Flathead Lake', sp:'Yellow Perch',  name:'Tungsten Jig Pack 1/64–1/32 oz',  desc:'Ultra-light tungsten in white/chartreuse. Drop vertically over perch schools shown on sonar.',       badge:'Top Rated'     },
  { lake:'Pend Oreille',  sp:'Rainbow Trout', name:'Trolling Flasher + Hoochie Kit',   desc:'For Kamloops rainbows — 8–11" flashers at 3+ mph, 60–100ft. The flasher is not optional.',         badge:'Must Have'     },
];

/* ── STATUS HELPERS ─────────────────────────────────── */
const SM = { hot:'🔥 Hot',  good:'✓ Good', slow:'⏳ Slow', iced_over:'🧊 Iced', closed:'⛔ Closed' };
const SC = { hot:'badge-hot', good:'badge-good', slow:'badge-slow', iced_over:'badge-slow', closed:'badge-closed' };
const DC = { hot:'dot-hot',   good:'dot-good',   slow:'dot-slow' };

/* ── SHARED COMPONENTS ───────────────────────────────── */

/** Render the shared nav. activeLink = 'lakes' | 'leaderboard' | etc. */
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
    <a href="/lakes.html"       class="nav-link${activeLink==='lakes'?'       active':''}" >Lakes</a>
    <a href="/leaderboard.html" class="nav-link${activeLink==='leaderboard'?' active':''}" >Leaderboard</a>
    <a href="/species.html"     class="nav-link${activeLink==='species'?'     active':''}" >Species</a>
    <a href="/reports.html"     class="nav-link${activeLink==='reports'?'     active':''}" >Reports</a>
    <a href="/guides.html"      class="nav-link${activeLink==='guides'?'      active':''}" >Guides</a>
    <a href="/tackle.html"      class="nav-link${activeLink==='tackle'?'      active':''}" >Tackle</a>
    <a href="/fish-diary.html"  class="nav-link${activeLink==='diary'?'       active':''}" >Fish Diary</a>
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

/** Shared footer HTML */
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
        <p class="footer-tagline">Verified catch leaderboards and fishing intelligence across the Rocky Mountain West.</p>
        <div class="footer-states">UT · CO · WY · MT · ID</div>
      </div>
      <div class="footer-col">
        <h4>Fish</h4>
        <ul>
          <li><a href="/lakes.html">All Lakes</a></li>
          <li><a href="/species.html">Species Guide</a></li>
          <li><a href="/reports.html">Fishing Reports</a></li>
          <li><a href="/leaderboard.html">Leaderboard</a></li>
          <li><a href="/tackle.html">Tackle Shop</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Community</h4>
        <ul>
          <li><a href="/sign-in.html">Sign In</a></li>
          <li><a href="/sign-up.html">Create Account</a></li>
          <li><a href="/kit.html">Get Certified Kit</a></li>
          <li><a href="/fish-diary.html">Fish Diary</a></li>
          <li><a href="/guides.html">Find a Guide</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Compete</h4>
        <ul>
          <li><a href="/submit-catch.html">Submit a Catch</a></li>
          <li><a href="/leaderboard.html">View Leaderboard</a></li>
          <li><a href="/contest-rules.html">Contest Rules</a></li>
          <li><a href="/legal/contest-rules.html">Prize Eligibility</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="/legal/contest-rules.html">Contest Rules</a></li>
          <li><a href="/legal/privacy.html">Privacy Policy</a></li>
          <li><a href="/legal/terms.html">Terms of Use</a></li>
          <li><a href="/legal/affiliate.html">Affiliate Disclosure</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="footer-copy">© 2026 Rocky Mountain Anglers. All rights reserved.</p>
      <p class="footer-legal">Prize competitions are skill-based contests. Legal review required before operating in all states. 5% platform fee applies. Leaderboard data shown may be for demonstration purposes.</p>
    </div>
  </div>
</footer>`;
}

/** Lake card HTML */
function RMA_LakeCard(l) {
  return `
<a href="/lake/${l.slug}.html" class="lake-card card-hover" aria-label="${l.name} — view lake details">
  <div class="lake-card-img-wrap">
    <img class="lake-card-img" src="${l.img}" alt="${l.name}, ${l.state}" loading="lazy" width="640" height="200" onerror="this.style.background='#2B3740'">
    <div class="lake-card-img-overlay" aria-hidden="true"></div>
    <div class="lake-card-status"><span class="badge ${SC[l.status]||'badge-slow'}">${SM[l.status]||'Unknown'}</span></div>
  </div>
  <div class="lake-card-body">
    <div class="lake-card-state"><span class="lake-card-state-tag">${l.state}</span><span class="lake-card-depth mono">${l.depth}ft deep</span></div>
    <div class="lake-card-name">${l.name}</div>
    <div class="lake-card-county">${l.county} · ${l.acres.toLocaleString()} acres</div>
    <p class="lake-card-summary">${l.summary}</p>
    <div class="lake-card-species">${l.species.slice(0,3).map(s=>`<span class="lake-chip">${s}</span>`).join('')}</div>
  </div>
  <div class="lake-card-arrow" aria-hidden="true">→</div>
</a>`;
}

/** Render leaderboard table + mobile cards */
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
    <div class="lb-card-angler">${r.angler} <span class="text-silver" style="font-size:11px">${r.loc}</span></div>
    <div class="lb-card-meta">${r.species} · ${r.lake}${r.verified?' · <span style="color:#5CB88A;font-size:10px">✓</span>':''}</div>
    ${r.prize!=='—'?`<div class="mt-8"><span class="lb-prize-badge">${r.prize}</span></div>`:''}
  </div>
  <div class="lb-card-len">${r.len}</div>
</div>`).join('');
  }
}

/** Prize pot calculator */
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

/** Mobile nav toggle */
function RMA_toggleMob() {
  const mn  = document.getElementById('mobNav');
  const btn = document.getElementById('navHamBtn');
  if (!mn) return;
  const open = mn.classList.toggle('open');
  btn && btn.setAttribute('aria-expanded', open);
  mn.setAttribute('aria-hidden', !open);
  document.body.style.overflow = open ? 'hidden' : '';
}

/** Sticky nav scroll */
function RMA_initNav(transparent = false) {
  const nav = document.getElementById('rmaNav');
  if (!nav) return;
  if (!transparent) { nav.classList.add('always-dark'); return; }
  nav.classList.remove('always-dark');
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/** Toast notification */
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

/** Render report card */
function RMA_ReportCard(r) {
  return `
<div class="report-card">
  <div class="report-card-head">
    <div>
      <div class="report-card-lake">${r.lake}</div>
      <div class="report-card-state"><span class="status-dot ${DC[r.cond]||'dot-slow'}" aria-hidden="true"></span>${r.state} · ${r.cond.toUpperCase()}${r.temp ? ' · ' + r.temp : ''}</div>
    </div>
    <div class="report-card-meta">
      ${r.src==='auto'   ? '<span class="badge badge-info">🤖 Auto</span>'   : ''}
      ${r.src==='guide'  ? '<span class="badge badge-blue">🎣 Guide</span>'  : ''}
      ${r.src==='member' ? '<span class="badge badge-good">👤 Member</span>' : ''}
      <span class="report-card-date">${r.date}</span>
    </div>
  </div>
  <p class="report-card-body">${r.body}</p>
  <div class="report-card-tags">${r.tags.map(t=>`<span class="rtag rtag-fish">${t}</span>`).join('')}${r.depth?`<span class="rtag rtag-auto">${r.depth}</span>`:''}</div>
</div>`;
}

/** Guide card HTML */
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

/** Species card HTML */
function RMA_SpeciesCard(s) {
  return `
<div class="species-card" role="button" tabindex="0" onclick="RMA_toast('Full species guide — coming soon!')" onkeydown="if(event.key==='Enter')RMA_toast('Species guide coming soon!')" aria-label="${s.name}">
  <span class="species-card-icon" aria-hidden="true">${s.em}</span>
  <div class="species-card-name">${s.name}</div>
  <div class="species-card-sci">${s.sci}</div>
  <div class="species-card-rec"><span>Platform record</span> ${s.rec}</div>
</div>`;
}

/** Tackle card HTML */
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

/** Shared mountain SVG silhouette */
function RMA_MtnSVG(fill = '#080B0E', opacity = 1) {
  return `<svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" style="opacity:${opacity};display:block;width:100%">
    <path d="M0,90 L0,55 L110,20 L200,48 L310,10 L420,42 L530,8 L640,40 L750,6 L860,38 L970,12 L1080,44 L1190,16 L1300,48 L1440,22 L1440,90Z" fill="${fill}"/>
    <path d="M730,6 L716,26 L745,26Z M530,8 L518,26 L543,26Z M970,12 L958,30 L983,30Z" fill="rgba(156,207,227,0.5)"/>
  </svg>`;
}
