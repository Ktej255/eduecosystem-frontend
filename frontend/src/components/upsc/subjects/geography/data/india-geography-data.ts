import { GeoFeature } from './geo-types';
import { NATIONAL_PARKS_DATA } from './national-parks-data';
import { RAMSAR_SITES_DATA } from './ramsar-sites-data'; // New
import { MOUNTAINS_DATA } from './mountains-data'; // New
import { BIOSPHERE_RESERVES_DATA } from './biosphere-reserves-data';
import { TIGER_RESERVES_DATA } from './tiger-reserves-data';
import { UNESCO_SITES_DATA } from './unesco-sites-data';

export const INDIA_GEO_DATA: GeoFeature[] = [
  // NATIONAL PARKS (106+)
  ...NATIONAL_PARKS_DATA,

  // RAMSAR SITES (85+)
  ...RAMSAR_SITES_DATA,

  // MOUNTAIN RANGES & PEAKS
  ...MOUNTAINS_DATA,

  // BIOSPHERE RESERVES
  ...BIOSPHERE_RESERVES_DATA,

  // TIGER RESERVES
  ...TIGER_RESERVES_DATA,

  // UNESCO WORLD HERITAGE SITES
  ...UNESCO_SITES_DATA,

  // ══════════════════════════════════════════════════════════════════
  // THE GANGA RIVER SYSTEM (MASTER INJECTION - 35+ MICRO RIVERS)
  // ══════════════════════════════════════════════════════════════════
  
  // --- PART 1: THE HEADWATERS & PANCH PRAYAG MICRO-STREAMS ---
  {
    id: "riv-bhagirathi",
    name: "Bhagirathi River",
    type: "river", region: "Uttarakhand",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 30.9333, lng: 79.0833 },
    path: [[79.0833, 30.9333], [78.9333, 30.9833], [78.7500, 30.7500], [78.4803, 30.3778], [78.6000, 30.1500]],
    difficulty: "high-yield",
    description: "The source stream of the Ganga. Originates at Gaumukh (Gangotri glacier).",
    characteristics: ["Meets Alaknanda at Devprayag", "Site of Tehri Dam", "Antecedent drainage"],
    upsc_relevance: "Panch Prayag matching and glacier origin points.", 
    pyq_years: [2014, 2021], in_news_24m: true, news_context: "Silkyara tunnel rescue zone (2023)."
  },
  {
    id: "riv-alaknanda",
    name: "Alaknanda River",
    type: "river", region: "Uttarakhand",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 30.7500, lng: 79.4000 },
    path: [[79.4000, 30.7500], [79.5500, 30.5500], [79.3167, 30.3333], [79.2167, 30.2667], [78.9833, 30.2833], [78.6000, 30.1500]],
    difficulty: "high-yield",
    description: "Larger headstream of Ganga by volume. Originates from Satopanth Glacier.",
    characteristics: ["Connects all Panch Prayags", "Higher discharge than Bhagirathi"],
    upsc_relevance: "Core of the Himalayan drainage system.", 
    pyq_years: [2013, 2020], in_news_24m: true, news_context: "Joshimath land subsidence (2023)."
  },
  {
    id: "riv-dhauliganga",
    name: "Dhauliganga",
    type: "river", region: "Uttarakhand",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 30.5500, lng: 79.5500 }, // Vishnuprayag
    path: [[79.8000, 30.8000], [79.6500, 30.6500], [79.5500, 30.5500]],
    difficulty: "high-yield",
    description: "Originates from Vasudhara Tal. Merges with Alaknanda at Vishnuprayag.",
    characteristics: ["First of the Panch Prayag rivers", "Site of Tapovan Vishnugad Hydroelectric Project"],
    upsc_relevance: "Tapovan project disaster (2021 glacier burst) and Joshimath sinking.",
    pyq_years: [2021], in_news_24m: true, news_context: "Joshimath land subsidence crisis directly above its valley."
  },
  {
    id: "riv-nandakini",
    name: "Nandakini",
    type: "river", region: "Uttarakhand",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 30.3333, lng: 79.3167 }, // Nandaprayag
    path: [[79.6000, 30.3000], [79.4500, 30.3200], [79.3167, 30.3333]],
    difficulty: "medium",
    description: "Emerges from the Nanda Ghunti glacier. Joins Alaknanda at Nandaprayag.",
    characteristics: ["Second of the Panch Prayags", "Flows through Nanda Devi Biosphere buffer"],
    upsc_relevance: "Panch Prayag north-to-south ordering.", pyq_years: [2014]
  },
  {
    id: "riv-pindar",
    name: "Pindar River",
    type: "river", region: "Uttarakhand",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 30.2667, lng: 79.2167 }, // Karnaprayag
    path: [[80.0000, 30.1000], [79.6000, 30.2000], [79.2167, 30.2667]],
    difficulty: "medium",
    description: "Emerges from the Pindari Glacier. Joins Alaknanda at Karnaprayag.",
    characteristics: ["Third of the Panch Prayags", "Known for high velocity and rapid flow"],
    upsc_relevance: "Glacier-to-river matching questions.", pyq_years: [2014]
  },
  {
    id: "riv-mandakini",
    name: "Mandakini",
    type: "river", region: "Uttarakhand",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 30.2833, lng: 78.9833 }, // Rudraprayag
    path: [[79.0667, 30.7333], [79.0000, 30.5000], [78.9833, 30.2833]],
    difficulty: "high-yield",
    description: "Originates near Kedarnath (Chorabari Glacier). Joins Alaknanda at Rudraprayag.",
    characteristics: ["Fourth of the Panch Prayags", "Washed away Kedarnath in 2013 floods"],
    upsc_relevance: "Disaster management case studies and origin point matching.", pyq_years: [2013, 2020]
  },

  // --- PART 2: LEFT BANK TRIBUTARIES (THE HIMALAYAN FEEDERS) ---
  {
    id: "riv-ganga-main",
    name: "Ganga River (Main Stem)",
    type: "river", region: "Northern India",
    basin: "Ganga", river_hierarchy: "main",
    coordinates: { lat: 25.3176, lng: 83.0034 },
    path: [[78.6000, 30.1500], [78.1667, 29.9667], [80.3319, 26.4499], [81.8463, 25.4358], [83.0034, 25.3176], [85.1376, 25.5941], [87.9000, 24.8000]],
    difficulty: "high-yield",
    description: "Largest river basin in India. Formed by Bhagirathi and Alaknanda.",
    characteristics: ["Enters plains at Haridwar", "Large delta at Bay of Bengal"],
    upsc_relevance: "Holistic Basin Understanding.",
    pyq_years: [2012, 2015, 2019, 2022], in_news_24m: true
  },
  {
    id: "riv-ramganga",
    name: "Ramganga",
    type: "river", region: "Uttarakhand / UP",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 27.1833, lng: 79.9500 }, // Kannauj
    path: [[79.2833, 30.0833], [78.7747, 29.5300], [79.5000, 28.0000], [79.9500, 27.1833]],
    difficulty: "high-yield",
    description: "First major left-bank tributary of the Ganga. Flows directly through Jim Corbett National Park.",
    characteristics: ["Originates in Dudhatoli ranges", "Joins Ganga near Kannauj", "Jim Corbett NP lifeline"],
    upsc_relevance: "Matching national parks to rivers intersecting them.", pyq_years: [2017, 2022]
  },
  {
    id: "riv-gomti",
    name: "Gomti (Gomati)",
    type: "river", region: "Uttar Pradesh",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 25.5333, lng: 83.1333 }, // Ghazipur
    path: [[80.1333, 28.6000], [80.9462, 26.8467], [82.6833, 25.7500], [83.1333, 25.5333]],
    difficulty: "high-yield",
    description: "A uniquely groundwater-fed (non-glacial) Himalayan river. The city of Lucknow sits on its banks.",
    characteristics: ["Originates from Gomat Taal (Pilibhit, UP)", "Joins Ganga at Ghazipur", "Highly polluted near Lucknow"],
    upsc_relevance: "Identifying non-glacial tributaries of the Ganga.", pyq_years: [2016]
  },
  {
    id: "riv-ghaghara",
    name: "Ghaghara (Karnali)",
    type: "river", region: "Nepal / UP / Bihar",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 25.7333, lng: 84.6667 }, // Chhapra
    path: [[81.0000, 30.5000], [81.3000, 28.5000], [82.1000, 26.8000], [84.6667, 25.7333]],
    difficulty: "high-yield",
    description: "The largest tributary of the Ganga by water volume. Known as Karnali in Nepal.",
    characteristics: ["Originates from Mapchachugo Glacier", "Major tributaries: Sarda, Rapti", "Joins Ganga at Chhapra (Bihar)"],
    upsc_relevance: "Volume vs. Length comparisons (Yamuna is longest, Ghaghara is largest by volume).", pyq_years: [2015]
  },
  {
    id: "riv-sarda",
    name: "Sarda (Kali / Mahakali)",
    type: "river", region: "Uttarakhand / UP / Nepal",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 28.0000, lng: 81.1000 },
    path: [[80.9500, 30.3500], [80.3000, 29.5000], [81.1000, 28.0000]],
    difficulty: "high-yield",
    description: "Forms the international boundary between India (Uttarakhand) and Nepal.",
    characteristics: ["Originates at Kalapani", "Known as Kali in upper reaches", "Joins Ghaghara in UP"],
    upsc_relevance: "Kalapani territorial dispute between India and Nepal.", pyq_years: [2019, 2021], in_news_24m: true, news_context: "Border dispute cartography issues with Nepal."
  },
  {
    id: "riv-rapti",
    name: "Rapti",
    type: "river", region: "Nepal / UP",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 26.2500, lng: 83.7500 }, // Gorakhpur
    path: [[82.5000, 28.0000], [83.3000, 27.0000], [83.7500, 26.2500], [83.7800, 26.1000]],
    difficulty: "medium",
    description: "Known as the 'Sorrow of Gorakhpur' due to recurrent severe flooding.",
    characteristics: ["Joins the Ghaghara", "Flows through Gorakhpur city"],
    upsc_relevance: "Flood-prone rivers matching with specific Purvanchal cities.", pyq_years: []
  },
  {
    id: "riv-gandak",
    name: "Gandak (Narayani)",
    type: "river", region: "Nepal / Bihar",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 25.6833, lng: 85.1667 }, // Hajipur/Patna
    path: [[83.9000, 29.2000], [84.0000, 27.5000], [84.8000, 26.5000], [85.1667, 25.6833]],
    difficulty: "high-yield",
    description: "Forms the border between UP and Bihar in its lower course.",
    characteristics: ["Originates in Nepal Himalayas", "Valmiki Tiger Reserve is located on its banks", "Joins Ganga near Hajipur"],
    upsc_relevance: "Valmiki TR (Bihar's only Tiger Reserve) connection.", pyq_years: [2018]
  },
  {
    id: "riv-kosi",
    name: "Kosi",
    type: "river", region: "Nepal / Bihar",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 25.4000, lng: 87.2833 }, // Kurusela
    path: [[86.5000, 28.0000], [87.0000, 26.8000], [86.6000, 25.9000], [87.2833, 25.4000]],
    difficulty: "high-yield",
    description: "The 'Sorrow of Bihar'. Famous for heavily braided channels and catastrophic course-shifting.",
    characteristics: ["Antecedent river", "Carries massive silt load from Himalayas", "Joins Ganga at Kurusela (Katihar)"],
    upsc_relevance: "River meandering, braiding, and flood disaster geography.", pyq_years: [2012, 2017]
  },
  {
    id: "riv-bagmati",
    name: "Bagmati",
    type: "river", region: "Nepal / Bihar",
    coordinates: { lat: 25.7500, lng: 86.5000 },
    path: [[85.3167, 27.7167], [85.5000, 26.8000], [86.0000, 26.0000], [86.5000, 25.7500]],
    difficulty: "medium",
    description: "Sacred river of Nepal (Pashupatinath Temple is on its banks). Enters Bihar and frequently floods.",
    characteristics: ["Passes through Kathmandu valley", "Tributary of Kosi (functionally part of the Kosi system in floods)"],
    upsc_relevance: "Trans-national cultural geography.", pyq_years: []
  },
  {
    id: "riv-mahananda",
    name: "Mahananda",
    type: "river", region: "West Bengal / Bihar",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 24.5000, lng: 88.2500 }, // Nawabganj (BD)
    path: [[88.2500, 26.9000], [88.0000, 26.1000], [88.0000, 25.5000], [88.2500, 24.5000]],
    difficulty: "high-yield",
    description: "The LAST major left-bank tributary of the Ganga before it enters Bangladesh.",
    characteristics: ["Originates in Darjeeling Hills (Mahaldiram range)", "Flows through the Siliguri corridor", "Joins Ganga in Bangladesh"],
    upsc_relevance: "Frequently tested as the 'easternmost' or 'last' Himalayan tributary of Ganga.", pyq_years: [2016, 2021]
  },

  // --- PART 3: RIGHT BANK TRIBUTARIES (YAMUNA SYSTEM MICRO-BASINS) ---
  {
    id: "riv-yamuna",
    name: "Yamuna River",
    type: "river", region: "Northern India",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 27.1767, lng: 78.0081 },
    path: [[78.4600, 31.0140], [77.2090, 28.6139], [78.0081, 27.1767], [79.0300, 26.7730], [81.8463, 25.4358]],
    difficulty: "high-yield",
    description: "Longest tributary of Ganga. Originates from Yamunotri Glacier.",
    characteristics: ["Passes through Delhi and Agra", "Meets Ganga at Prayagraj (Sangam)"],
    upsc_relevance: "Sequential arrangement of its right-bank tributaries.", 
    pyq_years: [2015, 2023], in_news_24m: true, news_context: "Delhi Floods (2023)."
  },
  {
    id: "riv-hindon",
    name: "Hindon",
    type: "river", region: "Uttar Pradesh",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 28.4000, lng: 77.4500 }, // Noida
    path: [[77.6000, 30.0000], [77.5000, 29.0000], [77.4000, 28.7000], [77.4500, 28.4000]],
    difficulty: "medium",
    description: "A highly polluted, rain-fed tributary of the Yamuna flowing through western UP's industrial belt.",
    characteristics: ["Originates in Saharanpur district", "Flows through Ghaziabad and Noida", "Joins Yamuna near Delhi"],
    upsc_relevance: "Industrial pollution dead-zones.", pyq_years: []
  },
  {
    id: "riv-tons",
    name: "Tons (Himalayan)",
    type: "river", region: "Uttarakhand",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 30.5000, lng: 77.8000 },
    path: [[78.1000, 31.1000], [77.9000, 30.9000], [77.8000, 30.5000]],
    difficulty: "high-yield",
    description: "The largest Himalayan tributary of the Yamuna. Carries more water than the Yamuna itself before they meet.",
    characteristics: ["Originates from Bandarpunch range", "Flows through the Govind Pashu Vihar NP", "Joins Yamuna at Kalsi"],
    upsc_relevance: "Tributary volume traps (Tons > Yamuna at confluence).", pyq_years: [2018]
  },
  {
    id: "riv-sind",
    name: "Sind",
    type: "river", region: "Madhya Pradesh / UP",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 26.4333, lng: 79.2000 },
    path: [[77.5000, 24.0000], [78.0000, 25.5000], [78.8000, 26.2000], [79.2000, 26.4333]],
    difficulty: "medium",
    description: "A major right-bank peninsular tributary of the Yamuna, flowing through the Malwa plateau.",
    characteristics: ["Originates in Vidisha district (MP)", "Joins Yamuna just after Chambal in UP"],
    upsc_relevance: "West-to-East arrangement of Yamuna tributaries (Chambal -> Sind -> Betwa -> Ken).", pyq_years: [2015]
  },
  {
    id: "riv-betwa",
    name: "Betwa (Vetravati)",
    type: "river", region: "Madhya Pradesh / UP",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 25.9167, lng: 80.2167 }, // Hamirpur
    path: [[77.6000, 23.0000], [78.0000, 24.5000], [78.6000, 25.4000], [80.2167, 25.9167]],
    difficulty: "high-yield",
    description: "Famous peninsular tributary of Yamuna. The historic Buddhist site of Sanchi is located on its banks.",
    characteristics: ["Originates in Vindhya Range (Raisen, MP)", "Matatila Dam and Rajghat Dam located here", "Part of the Ken-Betwa interlink"],
    upsc_relevance: "Ken-Betwa river interlinking project (India's first). Sanchi Stupa geography.", pyq_years: [2019, 2023], in_news_24m: true, news_context: "Ken-Betwa project execution causing Panna Tiger Reserve deforestation concerns."
  },
  {
    id: "riv-ken",
    name: "Ken",
    type: "river", region: "Madhya Pradesh / UP",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 25.7833, lng: 80.5667 }, // Banda
    path: [[80.2000, 23.9000], [80.0000, 24.6000], [80.2000, 25.2000], [80.5667, 25.7833]],
    difficulty: "high-yield",
    description: "Flows directly through the Panna Tiger Reserve. Source river for the Ken-Betwa link.",
    characteristics: ["Originates in Kaimur Range", "Joins Yamuna at Banda (UP)", "Famous for Ken Gharial Sanctuary"],
    upsc_relevance: "Panna Tiger reserve geography + River interlinking.", pyq_years: [2020]
  },

  // --- PART 4: RIGHT BANK TRIBUTARIES (DIRECT TO GANGA) ---
  {
    id: "riv-son",
    name: "Son (Sone)",
    type: "river", region: "MP / UP / Jharkhand / Bihar",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 25.6667, lng: 84.8833 }, // Patna (Danapur)
    path: [[81.7500, 22.7000], [81.5000, 24.0000], [83.5000, 24.5000], [84.8833, 25.6667]],
    difficulty: "high-yield",
    description: "The largest right-bank peninsular tributary that joins the Ganga directly (bypassing Yamuna).",
    characteristics: ["Originates at Amarkantak Plateau (close to Narmada origin)", "Major tributaries: Rihand, North Koel", "Bansagar Dam located here"],
    upsc_relevance: "Radial drainage pattern of Amarkantak (Narmada flows West, Son flows North/East).", pyq_years: [2011, 2014]
  },
  {
    id: "riv-rihand",
    name: "Rihand",
    type: "river", region: "Chhattisgarh / UP",
    coordinates: { lat: 24.4500, lng: 83.0000 },
    path: [[82.8000, 22.8000], [83.0000, 23.8000], [83.0000, 24.4500]],
    difficulty: "high-yield",
    description: "Tributary of the Son river. Site of the massive Govind Ballabh Pant Sagar (India's largest artificial lake).",
    characteristics: ["Originates in Matiranga hills", "Rihand Dam (Pipri, UP) creates GB Pant Sagar lake"],
    upsc_relevance: "Matching dams/artificial lakes to rivers.", pyq_years: [2013]
  },
  {
    id: "riv-punpun",
    name: "Punpun",
    type: "river", region: "Jharkhand / Bihar",
    coordinates: { lat: 25.5000, lng: 85.2500 }, // Fatuha (Patna)
    path: [[84.2000, 24.2000], [84.6000, 24.8000], [85.2500, 25.5000]],
    difficulty: "medium",
    description: "A rain-fed right-bank tributary joining the Ganga at Fatuha. Frequently floods Patna from the south.",
    characteristics: ["Originates in Palamu district (Chota Nagpur)", "Flows parallel to the Son river"],
    upsc_relevance: "Bihar flood geography.", pyq_years: []
  },
  {
    id: "riv-phalgu",
    name: "Phalgu (Niranjana)",
    type: "river", region: "Bihar",
    coordinates: { lat: 24.7000, lng: 85.0000 }, // Bodh Gaya
    path: [[84.9000, 24.3000], [85.0000, 24.7000], [85.2000, 25.1000]],
    difficulty: "high-yield",
    description: "Highly sacred river. Gautama Buddha attained enlightenment on its banks (Niranjana) at Bodh Gaya.",
    characteristics: ["Formed by confluence of Lilajan (Niranjana) and Mohana", "Site of the Pitrapaksha Mela", "Usually a dry, sandy bed"],
    upsc_relevance: "Ancient History and Geography crossover (Buddhism locations).", 
    pyq_years: [2019], in_news_24m: true, news_context: "Gayaji Dam (rubber dam) to ensure year-round water."
  },
  {
    id: "riv-karamnasa",
    name: "Karamnasa",
    type: "river", region: "UP / Bihar",
    coordinates: { lat: 25.5167, lng: 83.8667 }, // Buxar
    path: [[83.3000, 24.6000], [83.5000, 25.2000], [83.8667, 25.5167]],
    difficulty: "low",
    description: "Historically considered a 'cursed' river in Hindu mythology. Forms the UP-Bihar border.",
    characteristics: ["Originates in Kaimur Range", "Joins Ganga near Chausa/Buxar (site of historical battles)"],
    upsc_relevance: "Historical battle sites (Battle of Chausa).", pyq_years: []
  },

  // --- PART 5: DISTRIBUTARIES & BENGAL BASIN ---
  {
    id: "riv-hooghly",
    name: "Hooghly (Bhagirathi-Hooghly)",
    type: "river", region: "West Bengal",
    basin: "Ganga", river_hierarchy: "distributary",
    coordinates: { lat: 22.5726, lng: 88.3639 }, // Kolkata
    path: [[88.1000, 24.8000], [88.3000, 23.5000], [88.3639, 22.5726], [88.1000, 21.6000]],
    difficulty: "high-yield",
    description: "An artificial/natural distributary of the Ganga branching off at Farakka Barrage. The city of Kolkata sits on its east bank.",
    characteristics: ["Distributary (flows AWAY from main river)", "Maintained by water diverted from Farakka Barrage", "Navigable waterway (NW-1 termination)"],
    upsc_relevance: "Distributary concept vs Tributary. National Waterway 1 geography.", pyq_years: [2012, 2021]
  },
  {
    id: "riv-damodar",
    name: "Damodar",
    type: "river", region: "Jharkhand / West Bengal",
    coordinates: { lat: 22.3000, lng: 88.0833 }, // Joins Hooghly
    path: [[84.6000, 23.6000], [86.0000, 23.7000], [87.5000, 23.2000], [88.0833, 22.3000]],
    difficulty: "high-yield",
    description: "Known historically as the 'Sorrow of Bengal'. Now heavily dammed by the Damodar Valley Corporation (DVC).",
    characteristics: ["Originates in Chota Nagpur Plateau", "Flows through India's richest coal belts (Jharia, Raniganj)", "Joins the Hooghly river (NOT the main Ganga)"],
    upsc_relevance: "First multipurpose river valley project of independent India (DVC). Coal belt geography.", pyq_years: [2014, 2017]
  },
  {
    id: "riv-barakar",
    name: "Barakar",
    type: "river", region: "Jharkhand",
    coordinates: { lat: 23.7500, lng: 86.8000 }, // Dishergarh (Confluence with Damodar)
    path: [[85.3000, 24.2000], [86.0000, 24.0000], [86.5000, 23.8000], [86.8000, 23.7500]],
    difficulty: "medium",
    description: "The main tributary of the Damodar River. Site of major DVC dams.",
    characteristics: ["Originates in Hazaribagh plateau", "Tilaiya and Maithon dams are built on it"],
    upsc_relevance: "Dam-river matching (Maithon Dam is on Barakar, not Damodar).", pyq_years: [2015]
  },
  {
    id: "riv-ajay",
    name: "Ajay",
    type: "river", region: "Jharkhand / West Bengal",
    coordinates: { lat: 23.6500, lng: 88.1333 }, // Katwa (Joins Bhagirathi)
    path: [[86.5000, 24.1000], [87.3000, 23.8000], [88.1333, 23.6500]],
    difficulty: "low",
    description: "Flows from the Chota Nagpur plateau into West Bengal, separating the laterite soil region (Rarh) from the delta.",
    characteristics: ["Joins the Bhagirathi-Hooghly at Katwa"],
    upsc_relevance: "Rarh plateau geography of Bengal.", pyq_years: []
  },
  {
    id: "riv-mayurakshi",
    name: "Mayurakshi",
    type: "river", region: "Jharkhand / West Bengal",
    coordinates: { lat: 23.9000, lng: 88.1000 },
    path: [[86.8000, 24.5000], [87.5000, 24.1000], [88.1000, 23.9000]],
    difficulty: "medium",
    description: "A major rain-fed river of West Bengal. Site of the Massanjore Dam (Canada Dam).",
    characteristics: ["Originates at Trikut Hill (Deoghar)", "Massanjore Dam built with Canadian assistance"],
    upsc_relevance: "Dam matching and Chota Nagpur drainage.", pyq_years: []
  },

  // ══════════════════════════════════════════════════════════════════
  // THE RAJASTHAN RIVER SYSTEM (MODULE 2: RAS / WESTERN DRAINAGE)
  // ══════════════════════════════════════════════════════════════════
  {
    id: "riv-chambal",
    name: "Chambal River",
    type: "river",
    region: "Rajasthan / Madhya Pradesh",
    basin: "Ganga", river_hierarchy: "tributary",
    coordinates: { lat: 25.1800, lng: 75.8300 }, // Kota City
    path: [
      [75.6000, 22.4600], // Janapav, Vindhya Range (Origin)
      [75.5600, 24.9300], // Rana Pratap Sagar area
      [75.8300, 25.1800], // Kota City
      [76.3500, 25.8500], // Sawai Madhopur border
      [77.8900, 26.6900], // Dholpur badlands
      [79.0300, 26.7730]  // Etawah (Confluence with Yamuna)
    ],
    difficulty: "high-yield",
    description: "The most significant river of Rajasthan. Famous for its pristine water, Gharial sanctuaries, and the extensive 'Badlands' (Ravine) topography caused by severe gully erosion.",
    characteristics: [
      "Originates at Janapav, Vindhya Range (MP)",
      "Only perennial river of Rajasthan",
      "Creates the Chambal Ravines (Badlands Topography) via gully erosion",
      "Major Dams (South to North): Gandhi Sagar -> Rana Pratap Sagar -> Jawahar Sagar -> Kota Barrage",
      "Tributaries: Banas, Kali Sindh, Parbati"
    ],
    upsc_relevance: "Arranging the four major dams from South to North (or origin to confluence) is a frequent MCQ. Gully erosion and badlands topography are staple geomorphology questions.",
    pyq_years: [2014, 2017, 2022],
    pyq_details: "UPSC asked which river is famous for 'badland' topography (Answer: Chambal). RAS frequently asks the sequence of its dams.",
    in_news_24m: true,
    news_context: "The Eastern Rajasthan Canal Project (ERCP), a massive interlinking project involving Chambal's tributaries (Kalisindh, Parbati, Mez), was officially approved via an MoU between MP and Rajasthan. Highly probable for RAS 2026/2027."
  },
  {
    id: "riv-luni",
    name: "Luni River",
    type: "river",
    region: "Rajasthan",
    coordinates: { lat: 25.7500, lng: 73.0000 },
    path: [
      [74.6300, 26.4500], // Naga Hills, Pushkar Valley (Origin)
      [73.8000, 26.0000], // Near Pali
      [72.2400, 24.8300], // Balotra (Turns saline here)
      [71.4000, 24.6000], // Barmer region
      [71.0000, 23.9000]  // Rann of Kutch (Terminates inland)
    ],
    difficulty: "high-yield",
    description: "The largest river in the Thar Desert. It is an ephemeral, inland drainage river that never reaches the ocean, evaporating and spreading out in the Rann of Kutch.",
    characteristics: [
      "Originates in the Naga Hills of the Aravalli Range (Ajmer)",
      "Water is fresh up to Balotra, after which it becomes highly saline due to salt-rich surface soils",
      "Inland Drainage System (does not drain into the sea)",
      "Left Bank Tributaries: Sukri, Jawai, Bandi, Lilri",
      "Right Bank Tributary: Jojari (the only major one joining from the right)"
    ],
    upsc_relevance: "The definitive example of an 'Inland Drainage' system in India. The fresh-to-saline transition at Balotra is a classic state PSC trap.",
    pyq_years: [2010, 2015, 2019],
    pyq_details: "UPSC specifically asked 'Which river of India has fresh water in its upper course and saline water in the lower?' (Answer: Luni)."
  },
  {
    id: "riv-banas",
    name: "Banas River (Van Ki Asha)",
    type: "river",
    region: "Rajasthan",
    coordinates: { lat: 25.5000, lng: 75.0000 },
    path: [
      [73.5800, 25.1500], // Khamnor Hills, Kumbhalgarh (Origin)
      [74.6300, 25.3300], // Bhilwara
      [75.7800, 26.1600], // Tonk (Bisalpur Dam)
      [76.5000, 26.0000]  // Rameshwaram Ghat (Confluence with Chambal)
    ],
    difficulty: "medium",
    description: "Known as 'Van Ki Asha' (Hope of the Forest). It is the longest river that flows entirely within the borders of Rajasthan.",
    characteristics: [
      "Originates in Khamnor Hills (Aravalli Range, Rajsamand)",
      "Flows entirely within Rajasthan before joining the Chambal",
      "Bisalpur Dam (Tonk) provides major drinking water to Jaipur and Ajmer",
      "Forms a Triveni Sangam (confluence of 3 rivers) with Berach and Menal at Bigod (Bhilwara)",
      "Tributaries: Berach, Khari, Kothari, Morel"
    ],
    upsc_relevance: "RAS heavily tests the Triveni Sangams (river meeting points) of Rajasthan. Banas is central to the drinking water infrastructure of the state's capital.",
    pyq_years: [2018, 2021],
    pyq_details: "RAS frequently asks to identify the river on which the Bisalpur dam is built, or to match tributaries to the Banas."
  },
  {
    id: "riv-ghaggar",
    name: "Ghaggar-Hakra River",
    type: "river",
    region: "Rajasthan / Haryana",
    coordinates: { lat: 29.5000, lng: 74.0000 },
    path: [
      [77.0000, 30.7000], // Shivalik Hills (Origin)
      [76.0000, 29.8000], // Near Sirsa
      [74.0000, 29.5000], // Hanumangarh
      [73.0000, 29.0000]  // Anupgarh (terminates in Thar desert)
    ],
    difficulty: "high-yield",
    description: "An intermittent, endorheic river. Often identified by paleo-hydrologists as the remnants of the ancient Saraswati River.",
    characteristics: [
      "Originates in the Shivalik Hills (HP)",
      "An endorheic river (Inland drainage) that dries up in the Thar desert",
      "Known as Ghaggar in India and Hakra in Pakistan",
      "Site of major Harappan settlements like Kalibangan"
    ],
    upsc_relevance: "Paleo-channels and link to the Indus Valley Civilization (IVC). Saraswati river mythology vs. geography.",
    pyq_years: [2013, 2019],
    in_news_24m: true,
    news_context: "Isotope studies and satellite mapping by ISRO to trace the paleo-channel of the Saraswati (Ghaggar-Hakra) frequently bring this river into UPSC Science & Tech news."
  },
  {
    id: "riv-kantli",
    name: "Kantli River",
    type: "river",
    region: "Rajasthan",
    coordinates: { lat: 28.1000, lng: 75.4000 },
    path: [
      [75.4000, 27.6000], // Khandela Hills, Sikar (Origin)
      [75.4000, 28.1000], // Jhunjhunu
      [75.5000, 28.3000]  // Dries up near Churu border
    ],
    difficulty: "high-yield",
    description: "A rain-fed inland drainage river that flows through the Shekhawati region of Rajasthan.",
    characteristics: [
      "Originates from the Khandela Hills (Sikar district)",
      "Flows through Sikar and Jhunjhunu districts",
      "Site of the Chalcolithic civilization - Ganeshwar (Copper culture)",
      "Main river of the Torawati region"
    ],
    upsc_relevance: "Extremely high priority for RAS. Connecting Ganeshwar civilization to its geographic location.",
    pyq_years: [2016, 2021],
    pyq_details: "RAS asks about the origin of Kantli or the civilization located on its banks (Ganeshwar)."
  },

  {
    id: "riv-mahi",
    name: "Mahi River",
    type: "river",
    region: "Rajasthan / Gujarat",
    coordinates: { lat: 23.5000, lng: 74.4000 }, // Banswara
    path: [
      [74.9000, 22.6000], // Vindhya Range, Dhar (Origin)
      [74.4000, 23.5000], // Banswara (Crosses Tropic of Cancer going North)
      [73.8000, 23.0000], // Turns South, crosses Tropic of Cancer again
      [72.5000, 22.2000]  // Gulf of Khambhat (Estuary)
    ],
    difficulty: "high-yield",
    description: "A major west-flowing river. It is the only river in India that crosses the Tropic of Cancer twice.",
    characteristics: [
      "Originates in the Vindhya Range (MP)",
      "Flows North into Rajasthan (Banswara), makes a U-turn, and flows South into Gujarat",
      "CROSSES THE TROPIC OF CANCER TWICE",
      "Forms an Estuary in the Gulf of Khambhat",
      "Site of the Baneshwar Dham (Kumbh of Tribals) at the confluence of Som, Mahi, and Jakham rivers"
    ],
    upsc_relevance: "The 'Crosses Tropic of Cancer twice' is an absolute favorite geographical trivia question. The Baneshwar fair is highly relevant for Art & Culture (Tribal festivals) sections.",
    pyq_years: [2012, 2016, 2023],
    pyq_details: "Asked directly: 'Which of the following rivers crosses the Tropic of Cancer twice?'",
    in_news_24m: true,
    news_context: "Water sharing disputes and dam maintenance (Mahi Bajaj Sagar) often flare up between Rajasthan and Gujarat during drought years, placing it in regional news."
  },
  {
    id: "riv-mahanadi",
    name: "Mahanadi River",
    type: "river",
    region: "Chhattisgarh / Odisha",
    coordinates: { lat: 20.4000, lng: 85.8000 }, // Cuttack
    // Path: Sihawa -> Hirakud -> Cuttack -> Paradip
    path: [
      [81.9000, 20.3000], // Sihawa, Chhattisgarh (Origin)
      [83.8000, 21.5000], // Hirakud Dam
      [85.8000, 20.4000], // Cuttack (Delta apex)
      [86.6000, 20.2000]  // Bay of Bengal near Paradip
    ],
    difficulty: "medium",
    description: "A major east-flowing peninsular river, infamous for devastating floods in Odisha before the construction of the Hirakud Dam.",
    characteristics: [
      "Originates near Sihawa in Raipur district (Chhattisgarh)",
      "Left Bank Tributaries: Seonath, Hasdeo, Mand, Ib",
      "Right Bank Tributaries: Ong, Tel, Jonk",
      "Site of the Hirakud Dam (longest earthen dam in the world)"
    ],
    upsc_relevance: "Tributary identification (especially Tel and Hasdeo).",
    pyq_years: [2016],
    in_news_24m: true,
    news_context: "The ongoing Mahanadi Water Disputes Tribunal managing the fierce conflict between Odisha and Chhattisgarh over upstream barrages restricting dry-season flow."
  },



  // ══════════════════════════════════════════════════════════════════
  // THE PENINSULAR RIVER SYSTEM (MODULE 3: DECCAN & COASTAL DRAINAGE)
  // ══════════════════════════════════════════════════════════════════
  {
    id: "riv-narmada",
    name: "Narmada River",
    type: "river",
    region: "Central India (MP/Gujarat)",
    coordinates: { lat: 22.0667, lng: 75.0000 },
    // Path: Amarkantak -> Jabalpur (Marble Rocks) -> Sardar Sarovar -> Gulf of Khambhat
    path: [
      [81.7500, 22.6600], // Amarkantak Plateau (Origin)
      [79.9300, 23.1800], // Jabalpur / Dhuandhar Falls
      [77.7500, 22.7500], // Hoshangabad
      [73.7431, 21.8319], // Sardar Sarovar Dam (Gujarat)
      [72.5000, 21.6000]  // Gulf of Khambhat (Estuary)
    ],
    difficulty: "high-yield",
    description: "The largest west-flowing river in Peninsular India. It flows in a rift valley between the Vindhya Range (north) and the Satpura Range (south).",
    characteristics: [
      "Originates from the Amarkantak Plateau (Maikal Range, MP)",
      "Flows through a Rift Valley (fault line)",
      "Does NOT form a delta; forms an Estuary",
      "Major Dams: Indira Sagar, Omkareshwar, Sardar Sarovar",
      "Famous for Dhuandhar Falls (Marble Rocks) at Jabalpur"
    ],
    upsc_relevance: "The definitive example of a rift valley river. Distinguishing between delta-forming (east) and estuary-forming (west) rivers is a core UPSC concept.",
    pyq_years: [2011, 2013, 2020],
    pyq_details: "UPSC frequently asks: 'Why does the Narmada flow to the west while most other large peninsular rivers flow to the east?' (Answer: It occupies a linear rift valley).",
    in_news_24m: true,
    news_context: "Sardar Sarovar Dam water levels and the continuous displacement/rehabilitation issues (Narmada Bachao Andolan legacy) remain perennial topics for Mains, but Prelims focuses on the exact location of the dams."
  },
  {
    id: "riv-godavari",
    name: "Godavari River (Dakshin Ganga)",
    type: "river",
    region: "Peninsular India (MH/TL/AP)",
    coordinates: { lat: 18.0000, lng: 81.0000 },
    // Path: Trimbakeshwar -> Nanded -> Nizamabad -> Rajahmundry -> Bay of Bengal
    path: [
      [73.5300, 19.9300], // Trimbakeshwar, Nashik (Origin)
      [77.3000, 19.1500], // Nanded
      [79.9800, 18.7500], // Pranhita confluence
      [81.7800, 17.0000], // Rajahmundry (Delta apex)
      [82.3000, 16.5000]  // Bay of Bengal
    ],
    difficulty: "high-yield",
    description: "The largest peninsular river system, often called 'Dakshin Ganga' (Ganga of the South) due to its size and age.",
    characteristics: [
      "Originates at Trimbakeshwar in the Western Ghats (Nashik, Maharashtra)",
      "Left Bank Tributaries: Penganga, Wardha, Wainganga (combine to form Pranhita), Indravati, Sabari",
      "Right Bank Tributaries: Manjira, Bindusara",
      "Polavaram Irrigation Project is located on this river in Andhra Pradesh"
    ],
    upsc_relevance: "Identifying tributaries (especially Indravati and Pranhita) and distinguishing them from Krishna/Kaveri tributaries.",
    pyq_years: [2014, 2015, 2019],
    pyq_details: "UPSC asked to identify the tributaries of Godavari from a mixed list (Answer included Indravati and Pranhita, but excluded Pennar).",
    in_news_24m: true,
    news_context: "The Polavaram National Irrigation Project (Andhra Pradesh) is facing massive cost overruns, diaphragm wall damage, and backwater flooding disputes with Telangana, Odisha, and Chhattisgarh. Highly testable."
  },
  {
    id: "riv-krishna",
    name: "Krishna River",
    type: "river",
    region: "Peninsular India (MH/KA/TL/AP)",
    coordinates: { lat: 16.5000, lng: 79.5000 },
    // Path: Mahabaleshwar -> Almatti -> Raichur -> Nagarjuna Sagar -> Vijayawada
    path: [
      [73.6600, 17.9200], // Mahabaleshwar (Origin)
      [75.8900, 16.3300], // Almatti Dam (Karnataka)
      [77.3500, 16.2000], // Raichur Doab (meets Tungabhadra)
      [79.3142, 16.5772], // Nagarjuna Sagar Dam
      [80.6200, 16.5100], // Vijayawada (Prakasam Barrage)
      [81.0000, 15.8000]  // Bay of Bengal
    ],
    difficulty: "high-yield",
    description: "The second-largest east-flowing river of the Peninsula. Its basin is shared by Maharashtra, North Karnataka, Telangana, and Andhra Pradesh, making it a hotspot for water disputes.",
    characteristics: [
      "Originates near Mahabaleshwar (Western Ghats, Maharashtra)",
      "Major Tributaries: Tungabhadra, Bhima, Koyna, Ghataprabha, Malaprabha, Musi",
      "Dams: Almatti, Srisailam, Nagarjuna Sagar",
      "The Raichur Doab (historical battleground) lies between Krishna and Tungabhadra"
    ],
    upsc_relevance: "Tributary matching (Bhima, Tungabhadra, Musi) and interstate water dispute tribunals. The historic Vijayanagara empire was based on the Tungabhadra.",
    pyq_years: [2016, 2021],
    pyq_details: "Asked which of the given rivers is NOT a tributary of the Krishna."
  },
  {
    id: "riv-tungabhadra",
    name: "Tungabhadra River",
    type: "river",
    region: "Karnataka / AP / TL",
    coordinates: { lat: 15.3350, lng: 76.4620 }, // Hampi
    path: [
      [75.6000, 14.0000], // Tunga and Bhadra confluence at Koodli (Origin)
      [76.4620, 15.3350], // Hampi
      [77.3500, 16.2000]  // Confluence with Krishna near Sangamameswaram
    ],
    difficulty: "high-yield",
    description: "The most important tributary of the Krishna. It is formed by the union of two rivers, the Tunga and the Bhadra. Historically, it was the lifeblood of the Vijayanagara Empire.",
    characteristics: [
      "Formed by the confluence of Tunga and Bhadra at Koodli",
      "Flows north-eastward to join Krishna",
      "The ruins of Hampi (UNESCO site) are on its banks",
      "Site of the Tungabhadra Dam (Hosapete)"
    ],
    upsc_relevance: "Historical linkage (Vijayanagara), the Raichur Doab disputes, and its role as a major Krishna tributary.",
    pyq_years: [2015, 2019, 2022],
    pyq_details: "Asked to identify the river flowing past the ruins of Hampi (Answer: Tungabhadra)."
  },

  {
    id: "riv-kaveri",
    name: "Kaveri (Cauvery) River",
    type: "river",
    region: "Southern India (KA/TN)",
    coordinates: { lat: 11.0000, lng: 78.5000 },
    // Path: Talakaveri -> KRS Dam -> Mettur Dam -> Tiruchirappalli -> Thanjavur
    path: [
      [75.5200, 12.3800], // Talakaveri, Brahmagiri Hills (Origin)
      [76.5700, 12.4200], // Krishna Raja Sagara (KRS) Dam
      [77.8000, 11.8000], // Mettur Dam (Tamil Nadu border)
      [78.6900, 10.8000], // Tiruchirappalli / Srirangam Island
      [79.8000, 11.0000]  // Thanjavur Delta / Bay of Bengal
    ],
    difficulty: "high-yield",
    description: "Often called the 'Ganga of the South' (culturally). It is uniquely perennial compared to other peninsular rivers because its upper catchment receives the Southwest Monsoon, and its lower catchment receives the Northeast Monsoon.",
    characteristics: [
      "Originates at Talakaveri (Brahmagiri range, Kodagu, Karnataka)",
      "Tributaries (Left): Harangi, Hemavati, Shimsha, Arkavathi",
      "Tributaries (Right): Lakshmana Tirtha, Kabini, Suvarnavati, Bhavani, Noyyal, Amaravati",
      "Forms the island of Srirangapatna and Srirangam",
      "Thanjavur is the 'Rice Bowl of Tamil Nadu' located in its delta"
    ],
    upsc_relevance: "The dual-monsoon feeding mechanism is a classic UPSC concept. Interstate water sharing disputes (Kaveri Water Dispute Tribunal).",
    pyq_years: [2013, 2017, 2023],
    pyq_details: "UPSC asked to identify the tributaries of Kaveri. Another question focused on its unique flow regime (receiving rain from both monsoons).",
    in_news_24m: true,
    news_context: "The ongoing friction between Karnataka and Tamil Nadu over the release of water from KRS Dam to Mettur Dam during deficit Southwest monsoon years. The Mekedatu balancing reservoir project proposed by Karnataka is highly contested."
  },

  // ══════════════════════════════════════════════════════════════════
  // THE INDUS RIVER SYSTEM (MASTER INJECTION - TRANS-HIMALAYAN & PUNJAB)
  // ══════════════════════════════════════════════════════════════════
  
  // --- PART 1: THE MAIN STEM & TRANS-HIMALAYAN TRIBUTARIES ---
  {
    id: "riv-indus",
    name: "Indus River",
    type: "river", region: "Ladakh",
    basin: "Indus", river_hierarchy: "main",
    coordinates: { lat: 34.1662, lng: 77.5840 }, // Leh
    path: [
      [81.3000, 31.2000], // Bokhar Chu / Mansarovar (Origin)
      [79.0000, 33.0000], // Enters India at Demchok
      [77.5833, 34.1667], // Leh
      [76.3000, 34.8000], // Batalik / Skardu sector
      [74.6000, 35.5000], // Nanga Parbat hairpin bend
      [67.9000, 24.3000]  // Arabian Sea (Karachi)
    ],
    difficulty: "high-yield",
    description: "One of the longest rivers in Asia. It flows between the Ladakh and Zanskar ranges before making a spectacular gorge near Nanga Parbat.",
    characteristics: [
      "Originates at Bokhar Chu glacier (near Mansarovar, Tibet)",
      "Flows perfectly between the Ladakh (north) and Zanskar (south) ranges",
      "Leh city is located on its right bank",
      "Left Bank Tributaries (India): Zanskar, Suru, Panjnad (eventually)",
      "Right Bank Tributaries (India): Shyok, Gilgit, Hunza"
    ],
    upsc_relevance: "Arranging cities (Leh, Kargil, Srinagar) relative to the Indus and its tributaries. Understanding the geographical divide between Ladakh and Zanskar ranges.",
    pyq_years: [2015, 2020, 2021],
    pyq_details: "UPSC asked which river joins the Indus directly (Answer: Sutlej, via the Panjnad). Another asked the exact mountain ranges it flows between.",
    in_news_24m: true,
    news_context: "India's recent notices to Pakistan regarding the modification of the 1960 Indus Water Treaty (IWT) makes the geography of the Western Rivers (Indus, Jhelum, Chenab) highly testable."
  },
  {
    id: "riv-shyok",
    name: "Shyok River",
    type: "river", region: "Ladakh",
    basin: "Indus", river_hierarchy: "tributary",
    coordinates: { lat: 34.7500, lng: 77.6000 }, // Nubra Valley confluence
    path: [
      [77.6500, 35.1500], // Rimo Glacier (Origin)
      [78.1000, 34.8000], // Galwan confluence area
      [77.5000, 34.6000], // Diskit / Nubra Valley
      [75.9000, 35.1000]  // Confluence with Indus (Gilgit-Baltistan)
    ],
    difficulty: "high-yield",
    description: "Known as the 'River of Death'. It is a major right-bank tributary of the Indus, flowing through the strategic Depsang plains and Nubra valley.",
    characteristics: [
      "Originates from the Rimo Glacier (tongue of Siachen)",
      "Flows roughly parallel to the Indus but in the opposite direction before taking a U-turn",
      "Tributaries: Nubra (from Siachen), Galwan (from Aksai Chin)"
    ],
    upsc_relevance: "Strategic infrastructure: The Darbuk-Shyok-Daulat Beg Oldie (DSDBO) road runs parallel to it.",
    pyq_years: [2018],
    pyq_details: "UPSC asked a map-based question about the geographical location of the Siachen Glacier (Answer: North of Nubra Valley)."
  },
  {
    id: "riv-galwan",
    name: "Galwan River",
    type: "river", region: "Ladakh (Aksai Chin)",
    basin: "Indus", river_hierarchy: "tributary",
    coordinates: { lat: 34.7667, lng: 78.2167 }, // Galwan Valley
    path: [
      [78.8000, 34.8000], // Samzungling (Aksai Chin Origin)
      [78.4000, 34.7500], // Patrol Point 14 area
      [78.2000, 34.7000]  // Confluence with Shyok River
    ],
    difficulty: "high-yield",
    description: "A small but geopolitically critical tributary of the Shyok river. It originates in the Chinese-controlled Aksai Chin region and flows west into India.",
    characteristics: [
      "Originates in Aksai Chin",
      "Steep gorge topology makes it a natural defensive barrier",
      "Joins the Shyok river near the DSDBO road"
    ],
    upsc_relevance: "Border dispute geography. High probability of being asked in a North-to-South alignment question with Pangong Tso and Hot Springs.",
    pyq_years: [],
    in_news_24m: true,
    news_context: "🚨 GEOPOLITICAL FLASHPOINT: Site of the deadly June 2020 India-China border clashes (PP-14). Continued militarization of this exact river valley makes its coordinates essential for Prelims."
  },
  {
    id: "riv-zanskar",
    name: "Zanskar River",
    type: "river", region: "Ladakh",
    basin: "Indus", river_hierarchy: "tributary",
    coordinates: { lat: 33.8000, lng: 77.0000 }, // Zanskar Valley
    path: [
      [77.3000, 32.9000], // Lungnak/Stod confluence (Origin area)
      [76.9000, 33.6000], // Padum
      [77.3300, 34.1600]  // Nimmu (Confluence with Indus)
    ],
    difficulty: "medium",
    description: "A major left-bank tributary of the Indus, flowing entirely within Ladakh. Famous for the winter 'Chadar Trek' on its frozen surface.",
    characteristics: [
      "Formed by the confluence of Doda (Stod) and Tsarap rivers",
      "Flows through a massive gorge in the Zanskar range",
      "Meets the Indus at Nimmu (near Leh)"
    ],
    upsc_relevance: "Tributary identification and Himalayan range alignments.",
    pyq_years: [2016]
  },

  // --- PART 2: THE PANJNAD (PUNJAB SYSTEM) ---
  {
    id: "riv-jhelum",
    name: "Jhelum (Vitasta)",
    type: "river", region: "Jammu & Kashmir",
    basin: "Indus", river_hierarchy: "tributary",
    coordinates: { lat: 34.0833, lng: 74.7833 }, // Srinagar
    path: [
      [75.2500, 33.5333], // Verinag Spring (Origin)
      [75.1000, 33.8000], // Anantnag
      [74.7833, 34.0833], // Srinagar
      [74.6000, 34.3333], // Wular Lake
      [73.8000, 34.2000], // Uri / LoC
      [71.8000, 31.2000]  // Trimmu (Joins Chenab in Pakistan)
    ],
    difficulty: "high-yield",
    description: "The lifeline of the Kashmir Valley. It is unique among Himalayan rivers for its meandering stage occurring in its youth (due to the flat Kashmir valley).",
    characteristics: [
      "Originates from Verinag spring at the foot of Pir Panjal",
      "Flows through Srinagar and Wular Lake (India's largest freshwater lake)",
      "Forms a deep gorge at Baramulla before entering Pakistan",
      "Forms the India-Pakistan border for about 170 km",
      "Tributary: Kishanganga (Neelum)"
    ],
    upsc_relevance: "Geomorphology: Meandering in a youthful stage. Navigable in the valley. Wular Lake matching.",
    pyq_years: [2014, 2021],
    pyq_details: "Asked which river passes through Wular Lake."
  },
  {
    id: "riv-kishanganga",
    name: "Kishanganga (Neelum)",
    type: "river", region: "Jammu & Kashmir",
    basin: "Indus", river_hierarchy: "tributary",
    coordinates: { lat: 34.6000, lng: 74.8000 }, // Gurez Valley
    path: [
      [75.0000, 34.3000], // Krishansar Lake (Origin)
      [74.8000, 34.6000], // Gurez Valley
      [73.7000, 34.4000], // Enters PoK (becomes Neelum)
      [73.4700, 34.3600]  // Joins Jhelum at Muzaffarabad (PoK)
    ],
    difficulty: "high-yield",
    description: "A major tributary of the Jhelum. It flows through the beautiful Gurez valley before crossing the Line of Control.",
    characteristics: [
      "Originates near Sonamarg (Krishansar Lake)",
      "Known as Neelum River in Pakistan-occupied Kashmir (PoK)",
      "Site of the controversial 330 MW Kishanganga Hydroelectric Plant"
    ],
    upsc_relevance: "Indus Water Treaty disputes.",
    pyq_years: [2019],
    in_news_24m: true,
    news_context: "Permanent Court of Arbitration (The Hague) rulings regarding Pakistan's objections to India's Kishanganga and Ratle hydroelectric projects make this a top tier target."
  },
  {
    id: "riv-chenab",
    name: "Chenab (Chandrabhaga)",
    type: "river", region: "Himachal Pradesh / J&K",
    basin: "Indus", river_hierarchy: "tributary",
    coordinates: { lat: 33.2000, lng: 75.8000 }, // Kishtwar
    path: [
      [77.4000, 32.7500], // Bara Lacha La (Origin)
      [76.5000, 33.1000], // Tandi (Chandra & Bhaga confluence)
      [75.8000, 33.2000], // Kishtwar (J&K)
      [74.8000, 33.2000], // Baglihar / Ramban
      [71.8000, 31.2000]  // Joins Sutlej in Pakistan (Panjnad)
    ],
    difficulty: "high-yield",
    description: "The largest tributary of the Indus by water volume. Formed by two streams, Chandra and Bhaga.",
    characteristics: [
      "Originates at Bara Lacha La pass (Zanskar range, Lahaul-Spiti, HP)",
      "Flows through the Pir Panjal range",
      "Major Dams: Salal, Baglihar, Dul Hasti, Ratle, Pakal Dul",
      "Crosses the world's highest railway bridge (Chenab Bridge)"
    ],
    upsc_relevance: "Matching dams to rivers (Baglihar/Salal are massive UPSC favorites).",
    pyq_years: [2015, 2021],
    pyq_details: "UPSC asked which of the Panjnad rivers directly joins the Indus (Answer: Sutlej, but Chenab collects Jhelum and Ravi before joining Sutlej).",
    in_news_24m: true,
    news_context: "The completion of the Chenab Railway Bridge (world's highest) and the ongoing IWT disputes over the Ratle Hydroelectric project."
  },
  {
    id: "riv-ravi",
    name: "Ravi (Iravati)",
    type: "river", region: "Himachal Pradesh / Punjab",
    basin: "Indus", river_hierarchy: "tributary",
    coordinates: { lat: 32.4000, lng: 75.9000 }, // Dalhousie/Pathankot area
    path: [
      [77.0000, 32.3500], // Bara Bhangal, Kangra (Origin near Rohtang)
      [76.3000, 32.5500], // Chamba
      [75.6000, 32.4000], // Ranjit Sagar Dam (Thein Dam)
      [74.3000, 31.6000], // Lahore (Pakistan)
      [71.8000, 30.6000]  // Joins Chenab in Pakistan
    ],
    difficulty: "medium",
    description: "Flows between the Pir Panjal and Dhauladhar ranges. Lahore is situated on its banks.",
    characteristics: [
      "Originates in the Kullu hills near Rohtang Pass",
      "Flows through the Chamba valley",
      "Forms part of the Indo-Pak international border",
      "Site of the Ranjit Sagar (Thein) Dam and Shahpur Kandi project"
    ],
    upsc_relevance: "Mountain ranges boundaries (between Pir Panjal and Dhauladhar).",
    pyq_years: [2017],
    in_news_24m: true,
    news_context: "Completion of the Shahpur Kandi barrage (early 2024) officially stopped the remaining flow of India's allocated Ravi water from going into Pakistan, fulfilling IWT rights."
  },
  {
    id: "riv-beas",
    name: "Beas (Vipasha)",
    type: "river", region: "Himachal Pradesh / Punjab",
    basin: "Indus", river_hierarchy: "tributary",
    coordinates: { lat: 31.8000, lng: 76.1000 }, // Pong Dam
    path: [
      [77.0833, 32.3667], // Beas Kund, Rohtang Pass (Origin)
      [77.1500, 32.2000], // Manali / Kullu
      [76.2000, 31.9000], // Pong Dam (Maharana Pratap Sagar)
      [74.9000, 31.1000]  // Harike (Confluence with Sutlej)
    ],
    difficulty: "high-yield",
    description: "The only river of the Indus system that flows ENTIRELY within India. It does not enter Pakistan.",
    characteristics: [
      "Originates at Beas Kund near Rohtang Pass (Pir Panjal range)",
      "Flows through the Kullu Valley",
      "Meets the Sutlej river at Harike Wetland (Punjab)",
      "Pong Dam (Ramsar Site) is built on it"
    ],
    upsc_relevance: "The 'entirely within India' fact is a highly tested absolute statement. Harike wetland confluence.",
    pyq_years: [2016, 2021],
    pyq_details: "UPSC asked which river is formed by the confluence at Harike (Answer: Beas and Sutlej)."
  },



  {
    id: "riv-sutlej",
    name: "Sutlej River",
    type: "river",
    region: "Himachal Pradesh / Punjab",
    basin: "Indus", river_hierarchy: "tributary",
    coordinates: { lat: 31.4114, lng: 76.4339 }, // Bhakra Dam
    // Path: Rakshastal -> Shipki La -> Bhakra -> Harike
    path: [
      [81.2000, 30.6000], // Rakshastal Lake, Tibet (Origin)
      [78.7000, 31.8000], // Enters India at Shipki La Pass
      [76.4339, 31.4114], // Bhakra Nangal Dam
      [74.9000, 31.1000]  // Harike Wetland (Meets Beas)
    ],
    difficulty: "high-yield",
    description: "The longest of the five rivers of Punjab. An antecedent river that originates beyond the Great Himalayas in Tibet.",
    characteristics: [
      "Originates at Rakshastal (near Mansarovar, Tibet)",
      "Antecedent river (existed before the Himalayas formed)",
      "Enters India through the Shipki La pass (Himachal Pradesh)",
      "Meets the Beas River at Harike (origin of the Indira Gandhi Canal)",
      "Site of the massive Bhakra Nangal Dam"
    ],
    upsc_relevance: "Antecedent drainage concept. Geography of the Indira Gandhi Canal origin.",
    pyq_years: [2015, 2021],
    pyq_details: "UPSC asked which river joins the Indus directly (Answer: Sutlej, after collecting the others at Panjnad).",
    in_news_24m: true,
    news_context: "The Sutlej-Yamuna Link (SYL) Canal dispute between Punjab and Haryana remains a highly volatile constitutional and geographical issue heavily tracked by the Supreme Court."
  },


  // ══════════════════════════════════════════════════════════════════
  // THE BRAHMAPUTRA SYSTEM (MASTER INJECTION - TRANS-BOUNDARY & TRIBUTARIES)
  // ══════════════════════════════════════════════════════════════════
  
  // --- PART 1: THE MAIN STEM & HEADWATERS ---
  {
    id: "riv-siang-brahmaputra",
    name: "Brahmaputra (Siang / Dihang)",
    type: "river", region: "Arunachal Pradesh / Assam",
    basin: "Brahmaputra", river_hierarchy: "main",
    coordinates: { lat: 26.1433, lng: 91.7898 }, // Guwahati
    path: [
      [95.5333, 29.6333], // Great Bend / Namcha Barwa (Tibet)
      [95.3333, 28.1000], // Pasighat (Arunachal)
      [95.0000, 27.6000], // Sadiya (Meets Dibang & Lohit)
      [94.9000, 27.4000], // Dibrugarh
      [94.1000, 26.9000], // Majuli Island
      [91.7898, 26.1433], // Guwahati
      [89.9000, 26.0000]  // Dhubri (Enters Bangladesh as Jamuna)
    ],
    difficulty: "high-yield",
    description: "Known as Yarlung Tsangpo in Tibet, Siang in Arunachal, Brahmaputra in Assam, and Jamuna in Bangladesh. Infamous for its massive braided channels and devastating annual floods.",
    characteristics: [
      "Enters India taking a 'hairpin bend' around the Namcha Barwa peak",
      "Volume-wise, it is the largest river in India",
      "Forms Majuli, the world's largest river island",
      "National Waterway 2 (Sadiya to Dhubri)"
    ],
    upsc_relevance: "National Waterways geography, braided river geomorphology, and international water treaties.",
    pyq_years: [2012, 2016, 2023],
    in_news_24m: true,
    news_context: "China's continuous construction of mega-dams (like Zangmu and the proposed Medog super-dam) on the Yarlung Tsangpo raises severe 'water war' and sediment-starvation concerns for Assam."
  },
  {
    id: "riv-lohit",
    name: "Lohit",
    type: "river", region: "Arunachal Pradesh / Assam",
    basin: "Brahmaputra", river_hierarchy: "tributary",
    coordinates: { lat: 27.8500, lng: 96.0000 },
    path: [
      [97.1000, 28.4000], // Zayal Chu (Tibet border)
      [96.5000, 27.9000], // Parshuram Kund
      [95.6000, 27.7500]  // Sadiya (Confluence with Siang)
    ],
    difficulty: "high-yield",
    description: "A major Left Bank tributary known as the 'River of Blood' due to the lateritic soil it carries.",
    characteristics: [
      "Originates in eastern Tibet (Zayal Chu range)",
      "Flows through the Mishmi Hills",
      "Site of the Dhola-Sadiya Bridge (Bhupen Hazarika Setu) - India's longest river bridge"
    ],
    upsc_relevance: "Infrastructure geography (Dhola-Sadiya bridge) and tributary matching.",
    pyq_years: [2016],
    pyq_details: "UPSC asked to identify Lohit as a tributary of the Brahmaputra."
  },
  {
    id: "riv-dibang",
    name: "Dibang",
    type: "river", region: "Arunachal Pradesh / Assam",
    basin: "Brahmaputra", river_hierarchy: "tributary",
    coordinates: { lat: 28.1500, lng: 95.8000 },
    path: [
      [95.9000, 28.8000], // Mishmi Hills (Origin)
      [95.8000, 28.1500], // Roing
      [95.5000, 27.7000]  // Confluence near Sadiya
    ],
    difficulty: "medium",
    description: "A major Left Bank tributary that joins the Lohit and Siang to officially form the Brahmaputra.",
    characteristics: [
      "Originates in the Mishmi Hills near the Indo-China border",
      "Site of the massive proposed Dibang Multipurpose Project (hydroelectric)"
    ],
    upsc_relevance: "Tributary matching. Environmental clearances vs. strategic infrastructure in Arunachal.",
    pyq_years: [2016]
  },

  // --- PART 2: RIGHT BANK TRIBUTARIES (THE HIMALAYAN FEEDERS) ---
  {
    id: "riv-subansiri",
    name: "Subansiri",
    type: "river", region: "Arunachal Pradesh / Assam",
    basin: "Brahmaputra", river_hierarchy: "tributary",
    coordinates: { lat: 27.5000, lng: 94.0000 },
    path: [
      [93.5000, 28.5000], // Tibet (Origin)
      [94.1000, 27.8000], // Enters Arunachal
      [94.0000, 27.0000], // Gerukamukh
      [93.8000, 26.8000]  // Confluence with Brahmaputra (Lakhimpur)
    ],
    difficulty: "high-yield",
    description: "The largest tributary of the Brahmaputra. Known as the 'Gold River'.",
    characteristics: [
      "Antecedent river originating in Tibet",
      "Largest Right Bank tributary",
      "Site of the highly controversial Lower Subansiri Hydroelectric Project (LSHEP) at Gerukamukh"
    ],
    upsc_relevance: "Antecedent drainage. The LSHEP dam protests have been a massive issue in Assam for over a decade.",
    pyq_years: [2014, 2021],
    in_news_24m: true,
    news_context: "The 2000 MW Lower Subansiri Hydroelectric Project suffered severe landslides and structural damages to its diversion tunnels during recent monsoons, delaying its commissioning again."
  },
  {
    id: "riv-kameng",
    name: "Kameng (Jia Bhoreli)",
    type: "river", region: "Arunachal Pradesh / Assam",
    basin: "Brahmaputra", river_hierarchy: "tributary",
    coordinates: { lat: 26.9000, lng: 92.8500 },
    path: [
      [92.5000, 27.8000], // Tawang district (Origin near Gorichen peak)
      [92.6000, 27.0000], // Bhalukpong
      [92.8500, 26.6500]  // Confluence at Tezpur
    ],
    difficulty: "high-yield",
    description: "A crucial Right Bank tributary. Known as Kameng in Arunachal and Jia Bhoreli in Assam.",
    characteristics: [
      "Originates near Gorichen Peak",
      "Forms the border between East Kameng and West Kameng districts",
      "Flows through Pakke Tiger Reserve and Nameri National Park"
    ],
    upsc_relevance: "Linking rivers to National Parks (Pakke and Nameri).",
    pyq_years: [2018]
  },
  {
    id: "riv-manas",
    name: "Manas River",
    type: "river", region: "Bhutan / Assam",
    basin: "Brahmaputra", river_hierarchy: "tributary",
    coordinates: { lat: 26.6500, lng: 90.9500 },
    path: [
      [91.0000, 27.5000], // Bhutan Himalayas
      [90.9500, 26.7500], // Enters Manas National Park
      [90.6000, 26.2500]  // Confluence near Jogighopa
    ],
    difficulty: "high-yield",
    description: "The largest river system in Bhutan before entering India. A critical Right Bank tributary.",
    characteristics: [
      "Trans-boundary river (Bhutan and India)",
      "Flows directly through the heart of Manas National Park (UNESCO WHS)",
      "Meets the Brahmaputra near Jogighopa"
    ],
    upsc_relevance: "Manas National Park geography and trans-boundary river agreements.",
    pyq_years: [2014, 2020]
  },
  {
    id: "riv-sankosh",
    name: "Sankosh (Gadadhar)",
    type: "river", region: "Bhutan / Assam / West Bengal",
    basin: "Brahmaputra", river_hierarchy: "tributary",
    coordinates: { lat: 26.4000, lng: 89.8000 },
    path: [
      [89.9000, 27.4000], // Northern Bhutan
      [89.8000, 26.6000], // Enters India
      [89.7500, 26.1000]  // Confluence near Dhubri
    ],
    difficulty: "medium",
    description: "Forms the natural geographic boundary between the states of Assam and West Bengal in its lower reaches.",
    characteristics: [
      "Originates in northern Bhutan",
      "Right Bank tributary",
      "Empties into the Brahmaputra near the Indo-Bangladesh border"
    ],
    upsc_relevance: "Identifying state borders formed by rivers.",
    pyq_years: []
  },

  // --- PART 3: LEFT BANK TRIBUTARIES (NAGA & MEGHALAYA HILLS FEEDERS) ---
  {
    id: "riv-dhansiri-south",
    name: "Dhansiri (South)",
    type: "river", region: "Nagaland / Assam",
    basin: "Brahmaputra", river_hierarchy: "tributary",
    coordinates: { lat: 26.2500, lng: 93.6500 },
    path: [
      [93.6000, 25.4000], // Laisang peak, Nagaland (Origin)
      [93.7300, 25.9000], // Dimapur
      [93.6500, 26.6000]  // Confluence at Dhansirimukh (near Kaziranga)
    ],
    difficulty: "high-yield",
    description: "A major Left Bank tributary originating from the Laisang peak of Nagaland.",
    characteristics: [
      "Flows through the commercial hub of Dimapur (Nagaland)",
      "Forms the southern boundary of Kaziranga National Park",
      "Highly meandering course"
    ],
    upsc_relevance: "Kaziranga National Park boundary geography. Left bank vs Right bank matching.",
    pyq_years: [2015]
  },
  {
    id: "riv-kopili",
    name: "Kopili",
    type: "river", region: "Meghalaya / Assam",
    basin: "Brahmaputra", river_hierarchy: "tributary",
    coordinates: { lat: 26.0500, lng: 92.4000 },
    path: [
      [92.5000, 25.5000], // Meghalaya Plateau (Origin)
      [92.7000, 25.8000], // Karbi Anglong / Dima Hasao
      [92.4000, 26.1500]  // Confluence with Brahmaputra
    ],
    difficulty: "medium",
    description: "An important Left Bank tributary separating the Jaintia Hills of Meghalaya from the Karbi Anglong hills of Assam.",
    characteristics: [
      "Originates in the Meghalaya Plateau",
      "Flows through deep gorges and has several hydroelectric projects (Khandong, Umrong)",
      "Water is highly acidic in some stretches"
    ],
    upsc_relevance: "Ecological disasters: Unregulated rat-hole coal mining in Meghalaya has severely acidified the Kopili river, devastating its aquatic life.",
    pyq_years: [2019],
    in_news_24m: true,
    news_context: "The ongoing ecological crisis of river acidification due to illegal rat-hole coal mining (acid mine drainage) in the Jaintia hills."
  },
  {
    id: "riv-burhi-dihing",
    name: "Burhi Dihing",
    type: "river", region: "Arunachal Pradesh / Assam",
    basin: "Brahmaputra", river_hierarchy: "tributary",
    coordinates: { lat: 27.2500, lng: 95.3500 },
    path: [
      [96.0000, 27.4000], // Patkai Hills (Origin)
      [95.6333, 27.3833], // Digboi / Margherita area
      [94.6000, 27.1500]  // Confluence with Brahmaputra
    ],
    difficulty: "medium",
    description: "A massive Left Bank tributary that flows through the historic tea and oil/coal belts of Upper Assam.",
    characteristics: [
      "Originates in the Patkai Hills",
      "Flows through Namdapha National Park in its upper reaches (as Noa Dihing)",
      "Creates numerous oxbow lakes and swamps"
    ],
    upsc_relevance: "Flows through India's oldest oil and coal fields (Digboi, Margherita).",
    pyq_years: []
  },
  // ══════════════════════════════════════════════════════════════════
  // THE COASTAL RIVERS (MODULE 5: EAST & WEST FLOWING MICRO-RIVERS)
  // ══════════════════════════════════════════════════════════════════
  
  // --- PART 0: ADDITIONAL PENINSULAR & NORTHEAST MICRO-SYSTEMS ---
  {
    id: "riv-tapi",
    name: "Tapi (Tapti) River",
    type: "river", region: "Madhya Pradesh / Maharashtra / Gujarat",
    basin: "Peninsular-West", river_hierarchy: "main",
    coordinates: { lat: 21.1000, lng: 74.0000 },
    path: [
      [78.2000, 21.7000], [76.2000, 21.3000], [73.5000, 21.2000], [72.8000, 21.1000]
    ],
    difficulty: "medium",
    description: "The second-largest west-flowing river of the Peninsula, flowing in a rift valley south of the Satpura range.",
    characteristics: [
      "Originates at Multai reserve forest in Betul, MP",
      "Flows through a rift valley between the Satpura and Ajanta ranges",
      "Major Tributaries: Purna, Girna, Panjhra",
      "Major Dam: Ukai Dam (Gujarat)"
    ],
    upsc_relevance: "Paired with Narmada in rift valley questions. Satpura divides Narmada/Tapi.",
    pyq_years: [2014, 2018]
  },
  {
    id: "riv-subarnarekha",
    name: "Subarnarekha River",
    type: "river", region: "Jharkhand / West Bengal / Odisha",
    basin: "Peninsular-East", river_hierarchy: "main",
    coordinates: { lat: 22.8000, lng: 86.1000 },
    path: [
      [85.3000, 23.3000], [86.1000, 22.8000], [87.3000, 21.5000]
    ],
    difficulty: "low",
    description: "Translates to 'Streak of Gold'. A rain-fed river flowing through the mineral-rich Chota Nagpur plateau.",
    characteristics: [
      "Originates in the Chota Nagpur Plateau (Jharkhand)",
      "Forms the Hundru Falls",
      "Flows through the industrial city of Jamshedpur"
    ],
    upsc_relevance: "Important for mapping industrial locations (Tata Steel).",
    pyq_years: [2012]
  },
  {
    id: "riv-pennar",
    name: "Pennar (Penna)",
    type: "river", region: "Karnataka / Andhra Pradesh",
    basin: "Peninsular-East", river_hierarchy: "main",
    coordinates: { lat: 14.4000, lng: 79.9000 },
    path: [
      [77.6000, 13.3000], [78.8000, 14.4000], [79.9000, 14.4000], [80.1000, 14.5000]
    ],
    difficulty: "medium",
    description: "A major seasonal river in southern India that flows between the Krishna and Kaveri basins.",
    characteristics: [
      "Originates in the Nandi Hills (Karnataka)",
      "Flows through the Gandikota Gorge (the 'Grand Canyon of India')"
    ],
    upsc_relevance: "North-to-South arrangement questions.",
    pyq_years: [2014, 2020]
  },
  {
    id: "riv-vaigai",
    name: "Vaigai River",
    type: "river", region: "Tamil Nadu",
    basin: "Peninsular-East", river_hierarchy: "main",
    coordinates: { lat: 9.9000, lng: 78.1000 },
    path: [
      [77.5000, 9.6000], [78.1000, 9.9000], [78.8000, 9.3000]
    ],
    difficulty: "low",
    description: "A major river of southern Tamil Nadu, historically and culturally significant (Madurai banks).",
    characteristics: [
      "Originates in the Varusanadu Hills",
      "Flows through the temple city of Madurai",
      "Empties into the Palk Strait"
    ],
    upsc_relevance: "Mapping ancient historical cities.",
    pyq_years: [2018]
  },
  {
    id: "riv-periyar",
    name: "Periyar River",
    type: "river", region: "Kerala",
    basin: "Peninsular-West", river_hierarchy: "main",
    coordinates: { lat: 10.1000, lng: 76.3000 },
    path: [
      [77.2000, 9.3000], [76.9000, 9.8000], [76.3000, 10.1000], [76.2000, 10.1500]
    ],
    difficulty: "medium",
    description: "The longest river in Kerala. Known as the 'Lifeline of Kerala'.",
    characteristics: [
      "Originates in the Sivagiri Hills",
      "Site of the Idukki and Mullaperiyar dams"
    ],
    upsc_relevance: "Mullaperiyar Dam inter-state disputes.",
    pyq_years: [2016],
    in_news_24m: true
  },
  {
    id: "riv-barak",
    name: "Barak River",
    type: "river", region: "Northeast India (Manipur/Assam)",
    basin: "Inland", river_hierarchy: "main",
    coordinates: { lat: 24.8000, lng: 92.8000 },
    path: [
      [94.2000, 25.5000], [93.0000, 24.5000], [92.8000, 24.8000], [92.3000, 24.8000]
    ],
    difficulty: "medium",
    description: "A massive river system in Northeast India that drains into the Meghna system in Bangladesh.",
    characteristics: [
      "Originates in the Manipur Hills",
      "Designated as National Waterway 16",
      "Bifurcates into Surma and Kushiyara"
    ],
    upsc_relevance: "Part of the Meghna basin, NOT Brahmaputra.",
    pyq_years: [2015, 2021]
  },

  // --- PART 1: EAST-FLOWING (BAY OF BENGAL DRAINAGE) ---
  {
    id: "riv-brahmani",
    name: "Brahmani",
    type: "river", region: "Odisha",
    basin: "Peninsular-East", river_hierarchy: "main",
    coordinates: { lat: 20.8000, lng: 86.8000 },
    path: [
      [84.8000, 22.2000], // Rourkela (Confluence of Sankh & South Koel)
      [85.5000, 21.0000], // Talcher coalfields
      [86.8000, 20.8000]  // Dhamra (Bay of Bengal)
    ],
    difficulty: "medium",
    description: "Formed by the confluence of the Sankh and South Koel rivers. It is the second longest river in Odisha after the Mahanadi.",
    characteristics: [
      "Formed at Rourkela (Odisha)",
      "Flows through the industrial-rich Talcher coalfields",
      "Meets the Baitarani river to form a common delta at Dhamra"
    ],
    upsc_relevance: "Identifying the Sankh/South Koel confluence point. Industrial geography of Odisha.",
    pyq_years: [2017, 2021]
  },
  {
    id: "riv-baitarani",
    name: "Baitarani",
    type: "river", region: "Odisha",
    basin: "Peninsular-East", river_hierarchy: "main",
    coordinates: { lat: 21.0000, lng: 86.5000 },
    path: [
      [85.5000, 21.5000], // Gonasika/Guptaganga (Origin)
      [86.5000, 21.0000]  // Meets Brahmani near Dhamra
    ],
    difficulty: "medium",
    description: "A major river of Odisha. Legend says it is the boundary between the living and the dead.",
    characteristics: [
      "Originates from the Gonasika/Guptaganga in the Keonjhar district",
      "Entirely rain-fed and flows through mineral-rich iron ore belts"
    ],
    upsc_relevance: "Matching rivers to iron ore belts (Badampahar/Gorumahisani).",
    pyq_years: []
  },
  {
    id: "riv-rushikulya",
    name: "Rushikulya",
    type: "river", region: "Odisha",
    basin: "Peninsular-East", river_hierarchy: "main",
    coordinates: { lat: 19.3667, lng: 85.0833 },
    path: [
      [84.3000, 20.0000], // Daringbadi (Origin)
      [85.0833, 19.3667]  // Ganjam (Bay of Bengal)
    ],
    difficulty: "high-yield",
    description: "A small but ecologically vital river. Its mouth is one of the world's largest mass nesting sites for Olive Ridley turtles.",
    characteristics: [
      "Originates in the Daringbadi hills (Kashmir of Odisha)",
      "The Rushikulya Mouth is a famous 'Arribada' (mass nesting) site for Olive Ridley turtles"
    ],
    upsc_relevance: "Environment & Ecology crossover: Olive Ridley nesting sites.",
    pyq_years: [2018, 2022],
    in_news_24m: true,
    news_context: "Record-breaking mass nesting of Olive Ridley turtles at the Rushikulya rookery in 2024."
  },
  {
    id: "riv-vamsadhara",
    name: "Vamsadhara",
    type: "river", region: "Odisha / Andhra Pradesh",
    basin: "Peninsular-East", river_hierarchy: "main",
    coordinates: { lat: 18.3000, lng: 83.9000 },
    path: [
      [83.4000, 19.6000], // Eastern Ghats (Origin)
      [83.9000, 18.3000]  // Kalingapatnam (Bay of Bengal)
    ],
    difficulty: "medium",
    description: "An important east-flowing river between the Mahanadi and Godavari basins.",
    characteristics: [
      "Originates in the Eastern Ghats of Odisha",
      "Interstate water dispute between Odisha and Andhra Pradesh"
    ],
    upsc_relevance: "Interstate river water disputes.",
    pyq_years: [2016, 2021]
  },
  {
    id: "riv-palar",
    name: "Palar",
    type: "river", region: "Karnataka / AP / Tamil Nadu",
    basin: "Peninsular-East", river_hierarchy: "main",
    coordinates: { lat: 12.5000, lng: 79.5000 },
    path: [
      [77.9000, 13.3000], // Nandi Hills (Origin)
      [79.5000, 12.8000], // Vaniyambadi
      [80.1500, 12.5000]  // Bay of Bengal (near Kalpakkam)
    ],
    difficulty: "medium",
    description: "Flows through the historic regions of Karnataka, Andhra Pradesh, and Tamil Nadu.",
    characteristics: [
      "Originates near Nandi Hills in Karnataka",
      "Flows through the town of Vaniyambadi and Vellore"
    ],
    upsc_relevance: "North-to-South arrangement of Peninsular rivers.",
    pyq_years: [2015]
  },
  {
    id: "riv-thamirabarani",
    name: "Thamirabarani",
    type: "river", region: "Tamil Nadu",
    basin: "Peninsular-East", river_hierarchy: "main",
    coordinates: { lat: 8.6333, lng: 77.6000 },
    path: [
      [77.2500, 8.6000], // Pothigai Hills (Origin)
      [78.1000, 8.5000]  // Gulf of Mannar
    ],
    difficulty: "high-yield",
    description: "The only perennial river of Tamil Nadu. It is enriched with minerals (copper) giving it a distinct color.",
    characteristics: [
      "Originates from the Pothigai Hills (Western Ghats)",
      "Flows through Tirunelveli and Thoothukudi districts",
      "Enters the Gulf of Mannar"
    ],
    upsc_relevance: "The 'only perennial' status in a rain-shadow region. Archaeological significance (Adichanallur civilization on its banks).",
    pyq_years: [2021, 2023],
    in_news_24m: true,
    news_context: "Discovery of more than 3,000-year-old artifacts at Sivagalai and Adichanallur in the Thamirabarani valley."
  },

  // --- PART 2: WEST-FLOWING (ARABIAN SEA DRAINAGE) ---
  {
    id: "riv-mandovi-mahadayi",
    name: "Mandovi (Mahadayi)",
    type: "river", region: "Karnataka / Goa",
    basin: "Peninsular-West", river_hierarchy: "main",
    coordinates: { lat: 15.5000, lng: 73.8000 },
    path: [
      [74.3500, 15.6500], // Bhimgad (Origin)
      [73.8000, 15.5000]  // Panjim (Arabian Sea)
    ],
    difficulty: "high-yield",
    description: "The lifeline of Goa. Famous for the Dudhsagar Falls and intense water disputes.",
    characteristics: [
      "Originates at Bhimgad Wildlife Sanctuary (Karnataka)",
      "Site of the famous Dudhsagar Falls",
      "Panaji (Capital of Goa) is on its south bank"
    ],
    upsc_relevance: "Kalasa-Banduri project and Mahadayi water tribunal dispute.",
    pyq_years: [2016, 2022],
    in_news_24m: true,
    news_context: "Legal battles between Goa and Karnataka over the diversion of Mahadayi waters."
  },
  {
    id: "riv-zuari",
    name: "Zuari",
    type: "river", region: "Goa",
    basin: "Peninsular-West", river_hierarchy: "main",
    coordinates: { lat: 15.4167, lng: 73.8500 },
    path: [
      [74.2000, 15.3000], // Hemad-Barshe (Origin)
      [73.8500, 15.4167]  // Mormugao (Arabian Sea)
    ],
    difficulty: "medium",
    description: "The largest river in Goa. It forms a massive estuary with the Mandovi.",
    characteristics: [
      "Originates at Hemad-Barshe in the Western Ghats",
      "Connected by the Cumbarjua canal to the Mandovi river",
      "Mormugao Port is located at its mouth"
    ],
    upsc_relevance: "Estuarine geography and port locations.",
    pyq_years: []
  },
  {
    id: "riv-sharavati",
    name: "Sharavati",
    type: "river", region: "Karnataka",
    basin: "Peninsular-West", river_hierarchy: "main",
    coordinates: { lat: 14.2833, lng: 74.8333 },
    path: [
      [75.1000, 13.8000], // Ambuthirtha (Origin)
      [74.8100, 14.2300], // Jog Falls
      [74.4500, 14.2500]  // Honnavar (Arabian Sea)
    ],
    difficulty: "high-yield",
    description: "Entirely within Karnataka. Famous for the Jog Falls (one of India's highest waterfalls).",
    characteristics: [
      "Originates at Ambuthirtha",
      "Entirely flows through the Western Ghats",
      "Jog Falls (Gerusoppa Falls) is created by this river"
    ],
    upsc_relevance: "Matching waterfalls to rivers (Jog Falls -> Sharavati).",
    pyq_years: [2014, 2017]
  },
  {
    id: "riv-netravati",
    name: "Netravati",
    type: "river", region: "Karnataka",
    basin: "Peninsular-West", river_hierarchy: "main",
    coordinates: { lat: 12.8667, lng: 74.8333 },
    path: [
      [75.5000, 13.2000], // Kudremukh (Origin)
      [74.8333, 12.8667]  // Mangaluru (Arabian Sea)
    ],
    difficulty: "medium",
    description: "Flows through the holy town of Dharmasthala and joins the Arabian Sea at Mangaluru.",
    characteristics: [
      "Originates in the Western Ghats near Kudremukh",
      "Merges with the Kumaradhara river near Uppinangadi"
    ],
    upsc_relevance: "Yettinahole diversion project (Netravati river diversion controversy).",
    pyq_years: []
  },
  {
    id: "riv-bharathappuzha",
    name: "Bharathappuzha (Nila)",
    type: "river", region: "Kerala",
    basin: "Peninsular-West", river_hierarchy: "main",
    coordinates: { lat: 10.7500, lng: 75.9000 },
    path: [
      [77.0500, 10.3500], // Anaimalai Hills (Origin)
      [75.9800, 10.8000]  // Ponnani (Arabian Sea)
    ],
    difficulty: "high-yield",
    description: "The second longest river in Kerala (after Periyar). Also known as Nila.",
    characteristics: [
      "Originates in the Anaimalai Hills",
      "Flows through the Palakkad Gap",
      "Vast archaeological and cultural significance for Kerala"
    ],
    upsc_relevance: "River-city-gap matching (Palakkad Gap).",
    pyq_years: [2021]
  },
  {
    id: "riv-pamba",
    name: "Pamba",
    type: "river", region: "Kerala",
    basin: "Peninsular-West", river_hierarchy: "main",
    coordinates: { lat: 9.3500, lng: 76.4500 },
    path: [
      [77.1500, 9.4000], // Pulachimalai (Origin)
      [76.4000, 9.6000]  // Vembanad Lake
    ],
    difficulty: "high-yield",
    description: "The third longest river in Kerala. Highly sacred as it is linked to the Sabarimala shrine.",
    characteristics: [
      "Originates in the Pulachimalai Hill",
      "Empties into the Vembanad Lake (Ramsar Site)",
      "Site of the famous Aranmula Boat Race"
    ],
    upsc_relevance: "Sabarimala pilgrimage geography. Vembanad Lake ecosystem.",
    pyq_years: [2016, 2023]
  },
  {
    id: "riv-vaitarna",
    name: "Vaitarna",
    type: "river", region: "Maharashtra",
    basin: "Peninsular-West", river_hierarchy: "main",
    coordinates: { lat: 19.4667, lng: 72.8500 },
    path: [
      [73.5000, 19.9000], // Trimbakeshwar (Origin area)
      [72.8500, 19.4667]  // Arabian Sea
    ],
    difficulty: "medium",
    description: "One of the major west-flowing rivers of the Konkan region in Maharashtra.",
    characteristics: [
      "Originates in the Trimbak Hills (Western Ghats)",
      "Main source of water supply to Mumbai city"
    ],
    upsc_relevance: "Urban geography and Konkan river patterns.",
    pyq_years: []
  },
  {
    id: "riv-bhadar",
    name: "Bhadar",
    type: "river", region: "Gujarat (Saurashtra)",
    basin: "Peninsular-West", river_hierarchy: "main",
    coordinates: { lat: 21.5000, lng: 69.6000 },
    path: [
      [71.1000, 22.0000], // Jasdan (Origin)
      [69.6000, 21.5000]  // Navibandar (Arabian Sea)
    ],
    difficulty: "medium",
    description: "The largest river in the Saurashtra peninsula of Gujarat.",
    characteristics: [
      "Originates near Jasdan in the Rajkot district",
      "Flows through the Gir region"
    ],
    upsc_relevance: "Saurashtra drainage matching.",
    pyq_years: []
  },
  {
    id: "riv-shetrunji",
    name: "Shetrunji",
    type: "river", region: "Gujarat (Saurashtra)",
    basin: "Peninsular-West", river_hierarchy: "main",
    coordinates: { lat: 21.4000, lng: 72.2000 },
    path: [
      [70.9000, 21.1000], // Gir Hills (Origin)
      [72.2000, 21.4000]  // Gulf of Khambhat
    ],
    difficulty: "medium",
    description: "A major river of the Saurashtra region, flowing through the sacred Palitana hills.",
    characteristics: [
      "Originates in the Gir Hills",
      "Palitana Jain temples are located in its basin",
      "Flows into the Gulf of Khambhat"
    ],
    upsc_relevance: "Linking historical sites (Palitana) to rivers.",
    pyq_years: [2018]
  },


  {
    id: "pass-zojila",
    name: "Zoji La",
    type: "pass",
    coordinates: { lat: 34.2783, lng: 75.4605 },
    region: "Ladakh",
    description: "A high mountain pass in the Himalayas. It connects the Kashmir Valley to its west with the Dras and Suru valleys to its northeast and the Indus valley further east.",
    characteristics: ["On Srinagar-Kargil-Leh highway", "Great Himalayan range", "Strategic importance"],
    upsc_relevance: "Mapping connection routes and exact mountain ranges containing passes.",
    pyq_years: [2012, 2016],
    related_topics: ["geo-pass-01"],
    difficulty: "high-yield"
  },
  {
    id: "pass-nathula",
    name: "Nathu La",
    type: "pass",
    coordinates: { lat: 27.3860, lng: 88.8309 },
    region: "Sikkim",
    description: "A mountain pass in the Himalayas in East Sikkim district. It connects the Indian state of Sikkim with China's Tibet Autonomous Region.",
    characteristics: ["Sino-Indian border", "Ancient Silk Route", "Chumbi Valley proximity"],
    upsc_relevance: "Strategic borders, historical trade routes, state-pass matching questions.",
    pyq_years: [2014, 2018],
    related_topics: ["geo-pass-02"],
    difficulty: "high-yield"
  },
  {
    id: "pass-rohtang",
    name: "Rohtang Pass",
    type: "pass",
    coordinates: { lat: 32.3716, lng: 77.2466 },
    region: "Himachal Pradesh",
    description: "Connects the Kullu Valley with the Lahaul and Spiti Valleys. Atal Tunnel was built underneath it to provide all-weather connectivity.",
    characteristics: ["Pir Panjal Range", "Watershed between Chenab and Beas", "Atal Tunnel"],
    upsc_relevance: "Drainage basin divides; location of Atal Tunnel.",
    pyq_years: [2020, 2022],
    related_topics: ["geo-infra-01"],
    difficulty: "medium"
  },
  {
    id: "pass-lipulekh",
    name: "Lipulekh Pass",
    type: "pass",
    coordinates: { lat: 30.2263, lng: 81.0253 },
    region: "Uttarakhand",
    description: "A Himalayan pass on the border between India's Uttarakhand state and the Tibet region. Used by pilgrims to Kailash Mansarovar.",
    characteristics: ["Tri-junction (India, Nepal, China)", "Kailash Mansarovar Yatra", "Kalapani territory dispute"],
    upsc_relevance: "International border disputes; pilgrim routes.",
    pyq_years: [2019, 2021],
    related_topics: ["ir-border-01"],
    difficulty: "high-yield"
  },
  {
    id: "pass-bomdila",
    name: "Bomdi La",
    type: "pass",
    coordinates: { lat: 27.2628, lng: 92.4172 },
    region: "Arunachal Pradesh",
    description: "Connects Arunachal Pradesh with Lhasa, Tibet. It is situated in the Greater Himalayas.",
    characteristics: ["Northeast India connectivity", "Greater Himalayas", "Tawang connection"],
    upsc_relevance: "Northeastern passes are frequently asked as \"North to South\" or \"West to East\" arrangements.",
    pyq_years: [2015, 2023],
    related_topics: ["geo-pass-03"],
    difficulty: "high-yield"
  },

  // MINERALS & DEPOSITS (10)
  {
    id: "min-jaduguda",
    name: "Jaduguda Uranium Mine",
    type: "mineral",
    coordinates: { lat: 22.6500, lng: 86.3500 },
    region: "Jharkhand",
    description: "The first uranium mine of India. Located in the Singhbhum Thrust Belt.",
    characteristics: ["Uranium ore", "Singhbhum copper belt", "Nuclear power resource"],
    upsc_relevance: "Uranium and Thorium reserves in India are a staple question.",
    pyq_years: [2013, 2017],
    related_topics: ["geo-resource-01"],
    difficulty: "high-yield"
  },
  {
    id: "min-kudremukh",
    name: "Kudremukh Iron Ore",
    type: "mineral",
    coordinates: { lat: 13.2167, lng: 75.2500 },
    region: "Karnataka",
    description: "Historically one of the largest iron ore deposits in the world. Mining was stopped due to environmental concerns in the Western Ghats.",
    characteristics: ["Magnetite ore", "Western Ghats biodiversity", "Exported via Mangalore"],
    upsc_relevance: "Environment vs Development conflict; types of iron ore.",
    pyq_years: [2012, 2015],
    related_topics: ["env-mining-01"],
    difficulty: "medium"
  },
  {
    id: "min-digboi",
    name: "Digboi Oil Field",
    type: "mineral",
    coordinates: { lat: 27.3833, lng: 95.6333 },
    region: "Assam",
    description: "The oldest operating oil refinery in Asia and the oldest oil well in operation in India.",
    characteristics: ["Crude oil", "Tertiary rock formations", "Brahmaputra valley"],
    upsc_relevance: "Historical geography; locations of terrestrial vs offshore oil fields.",
    pyq_years: [2011, 2018],
    related_topics: ["geo-energy-01"],
    difficulty: "low"
  },
  {
    id: "min-khetri",
    name: "Khetri Copper Belt",
    type: "mineral",
    coordinates: { lat: 28.0000, lng: 75.8000 },
    region: "Rajasthan",
    description: "A famous copper mining region nestled in the Aravalli hills. Has been mined since the Indus Valley Civilization.",
    characteristics: ["Copper reserves", "Aravalli range", "Jhunjhunu district"],
    upsc_relevance: "Historical linkage (IVC copper source) and non-ferrous mineral distribution.",
    pyq_years: [2014, 2021],
    related_topics: ["hist-ivc-01"],
    difficulty: "high-yield"
  },
  {
    id: "min-koderma",
    name: "Koderma Mica Belt",
    type: "mineral",
    coordinates: { lat: 24.4667, lng: 85.6000 },
    region: "Jharkhand",
    description: "Considered the 'Mica Capital of the World'. High-quality ruby mica is found here.",
    characteristics: ["Mica production", "Chota Nagpur Plateau", "Pegmatite rocks"],
    upsc_relevance: "Non-metallic minerals and India's global export monopolies.",
    pyq_years: [2016, 2022],
    related_topics: ["geo-resource-02"],
    difficulty: "medium"
  },

  // DAMS & RESERVOIRS (5)
  {
    id: "dam-bhakra",
    name: "Bhakra-Nangal Dam",
    type: "dam",
    coordinates: { lat: 31.4114, lng: 76.4339 },
    region: "Himachal Pradesh / Punjab",
    description: "One of the highest gravity dams in the world. Built across the Sutlej River.",
    characteristics: ["Sutlej river", "Gobind Sagar reservoir", "Joint venture of Punjab, Haryana, Rajasthan"],
    upsc_relevance: "Major multi-purpose projects and their beneficiary states.",
    pyq_years: [2013, 2019],
    related_topics: ["geo-infra-02"],
    difficulty: "medium"
  },
  {
    id: "dam-hirakud",
    name: "Hirakud Dam",
    type: "dam",
    coordinates: { lat: 21.5286, lng: 83.8732 },
    region: "Odisha",
    description: "The longest earthen dam in the world. Built across the Mahanadi River.",
    characteristics: ["Mahanadi river", "Earthen dam", "Aluminium industry nearby (Hindalco)"],
    upsc_relevance: "River-dam matching and geographical setting of industries.",
    pyq_years: [2015, 2020],
    related_topics: ["geo-industry-01"],
    difficulty: "high-yield"
  },
  {
    id: "dam-sardar-sarovar",
    name: "Sardar Sarovar Dam",
    type: "dam",
    coordinates: { lat: 21.8319, lng: 73.7431 },
    region: "Gujarat",
    description: "A concrete gravity dam on the Narmada river. Famous for the Narmada Bachao Andolan environmental movement.",
    characteristics: ["Narmada river", "Rift valley", "Narmada Bachao Andolan"],
    upsc_relevance: "Environmental movements related to large dams.",
    pyq_years: [2014, 2018],
    related_topics: ["env-movements-01"],
    difficulty: "high-yield"
  },
  {
    id: "dam-nagarjuna",
    name: "Nagarjuna Sagar Dam",
    type: "dam",
    coordinates: { lat: 16.5772, lng: 79.3142 },
    region: "Telangana / Andhra Pradesh",
    description: "The world's largest masonry dam. Built across the Krishna River.",
    characteristics: ["Krishna river", "Masonry dam", "Border of AP/Telangana"],
    upsc_relevance: "River-dam matching.",
    pyq_years: [2016],
    related_topics: ["geo-infra-03"],
    difficulty: "low"
  },
  {
    id: "dam-tehri",
    name: "Tehri Dam",
    type: "dam",
    coordinates: { lat: 30.3778, lng: 78.4803 },
    region: "Uttarakhand",
    description: "The highest dam in India. An earth and rock-fill dam on the Bhagirathi River.",
    characteristics: ["Bhagirathi river", "Seismic Zone V", "Earth-fill dam"],
    upsc_relevance: "Seismic risks associated with large dams in the Himalayas.",
    pyq_years: [2017, 2022],
    related_topics: ["geo-disaster-01"],
    difficulty: "high-yield"
  }
];
