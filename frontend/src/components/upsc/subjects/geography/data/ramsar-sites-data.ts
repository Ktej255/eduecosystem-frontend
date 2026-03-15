import { GeoFeature } from './geo-types';

export const RAMSAR_SITES_DATA: GeoFeature[] = [
  // ══════════════════════════════════════════════════════════════════
  // THE RAMSAR WETLANDS OF INDIA (MASTER MATRIX - 40+ ITEMS)
  // ══════════════════════════════════════════════════════════════════
  
  // --- PART 1: HIGH-YIELD & MONTREUX RECORD (CORE LIST) ---
  {
    id: "ramsar-keoladeo",
    name: "Keoladeo National Park",
    type: "wetland", region: "Rajasthan",
    coordinates: { lat: 27.1667, lng: 77.5167 },
    difficulty: "high-yield",
    description: "One of India's first two Ramsar sites (1981). A man-made and man-managed wetland currently on the Montreux Record for ecological degradation.",
    characteristics: [
      "Currently ON the Montreux Record",
      "Man-made wetland (created by damming Gambhir and Banganga rivers)",
      "Critical wintering ground for Palearctic migratory waterfowl",
      "UNESCO World Heritage Site"
    ],
    upsc_relevance: "The Montreux Record status and its man-made origin are classic UPSC traps.",
    pyq_years: [2014, 2017, 2020]
  },
  {
    id: "ramsar-loktak",
    name: "Loktak Lake",
    type: "wetland", region: "Manipur",
    coordinates: { lat: 24.5500, lng: 93.8167 },
    difficulty: "high-yield",
    description: "The largest freshwater lake in Northeast India. Currently on the Montreux Record due to ecological problems caused by the Ithai Barrage.",
    characteristics: [
      "Currently ON the Montreux Record",
      "Features 'Phumdis' (floating heterogeneous biomass)",
      "Contains Keibul Lamjao, the world's only floating National Park"
    ],
    upsc_relevance: "Montreux Record status, Phumdis, and the Sangai deer habitat.",
    pyq_years: [2015, 2019, 2022],
    in_news_24m: true,
    news_context: "State government efforts to decommission the controversial Ithai Barrage to restore the lake's natural flushing cycle."
  },
  {
    id: "ramsar-chilika",
    name: "Chilika Lake",
    type: "wetland", region: "Odisha",
    coordinates: { lat: 19.7000, lng: 85.3167 },
    difficulty: "high-yield",
    description: "India's largest coastal lagoon and first Ramsar site. A massive global success story, as it was REMOVED from the Montreux Record in 2002.",
    characteristics: [
      "Brackish water lagoon fed by the Daya and Bhargavi rivers",
      "Removed from Montreux Record (Conservation success)",
      "Nalabana Bird Sanctuary located within",
      "Major habitat for Irrawaddy Dolphins"
    ],
    upsc_relevance: "The 'removed from Montreux' fact is highly tested. Irrawaddy dolphin distribution.",
    pyq_years: [2018, 2021]
  },

  // ══════════════════════════════════════════════════════════════════
  // BATCH 1: NORTH, WEST & CENTRAL INDIA
  // ══════════════════════════════════════════════════════════════════

  // --- RAJASTHAN & GUJARAT ---
  {
    id: "ramsar-sambhar",
    name: "Sambhar Lake",
    type: "wetland", region: "Rajasthan",
    coordinates: { lat: 26.9000, lng: 75.1833 },
    difficulty: "high-yield",
    description: "India's largest inland salt lake. It is an elliptical, shallow lake fed by four ephemeral streams.",
    characteristics: [
      "Largest inland salt lake in India",
      "Crucial wintering area for tens of thousands of flamingos",
      "Endorheic basin (inland drainage)"
    ],
    upsc_relevance: "Inland drainage geomorphology and mass avian botulism disasters (2019 flamingo deaths).",
    pyq_years: [2014, 2017]
  },
  {
    id: "ramsar-nalsarovar",
    name: "Nalsarovar Bird Sanctuary",
    type: "wetland", region: "Gujarat",
    coordinates: { lat: 22.8167, lng: 72.0500 },
    difficulty: "medium",
    description: "The largest natural freshwater lake in Gujarat, located between the Saurashtra plateau and the Gujarat plains.",
    characteristics: [
      "Freshwater lake amidst arid geography",
      "Lifeline for endangered species like the Indian Wild Ass during summer",
      "Massive congregation of migratory waterfowl"
    ],
    upsc_relevance: "Important Bird Area (IBA) in the Central Asian Flyway.",
    pyq_years: []
  },
  {
    id: "ramsar-khijadia",
    name: "Khijadia Wildlife Sanctuary",
    type: "wetland", region: "Gujarat",
    coordinates: { lat: 22.5333, lng: 70.1333 },
    difficulty: "low",
    description: "A unique wetland located near the coast of Jamnagar, featuring both freshwater lakes and salt/marine marshes.",
    characteristics: [
      "Formed by two man-made reclamation bunds",
      "Dual ecosystem: Freshwater on one side, saltwater on the other",
      "Added to Ramsar list in 2022"
    ],
    upsc_relevance: "Recent additions to Ramsar are highly testable.",
    pyq_years: []
  },

  // --- MAHARASHTRA & MADHYA PRADESH ---
  {
    id: "ramsar-lonar",
    name: "Lonar Lake",
    type: "wetland", region: "Maharashtra",
    coordinates: { lat: 19.9667, lng: 76.5000 },
    difficulty: "high-yield",
    description: "A hyper-alkaline and hyper-saline lake created by a meteorite impact during the Pleistocene Epoch.",
    characteristics: [
      "Only known meteorite crater in basaltic rock globally",
      "Water turned pink in 2020 due to Haloarchaea microbes",
      "Closed basin with no outflow"
    ],
    upsc_relevance: "Meteorite crater geomorphology and biological phenomena (pink water).",
    pyq_years: [2021],
    in_news_24m: true,
    news_context: "The geological preservation of the crater and its unique extremophile microbes."
  },
  {
    id: "ramsar-nandur",
    name: "Nandur Madhameshwar",
    type: "wetland", region: "Maharashtra",
    coordinates: { lat: 20.0167, lng: 74.1167 },
    difficulty: "medium",
    description: "Maharashtra's first Ramsar site. Known as the 'Bharatpur of Maharashtra'.",
    characteristics: [
      "Created by a weir at the confluence of the Godavari and Kadwa rivers",
      "Mosaic of lakes, marshes, and riparian forests"
    ],
    upsc_relevance: "Identifying the first Ramsar sites of major states.",
    pyq_years: []
  },
  {
    id: "ramsar-thane-creek",
    name: "Thane Creek Flamingo Sanctuary",
    type: "wetland", region: "Maharashtra",
    coordinates: { lat: 19.1333, lng: 72.9667 },
    difficulty: "high-yield",
    description: "One of the largest creeks in Asia, heavily dominated by mangroves and acting as a massive urban flood sink for Mumbai.",
    characteristics: [
      "Urban wetland fed by the Ulhas river",
      "Critically important habitat for Lesser Flamingos",
      "Threatened by urban encroachment and Mumbai infrastructure projects"
    ],
    upsc_relevance: "Urban wetlands and infrastructure vs. ecology debates (Mumbai Trans Harbour Link).",
    pyq_years: []
  },
  {
    id: "ramsar-sakhya",
    name: "Sakhya Sagar",
    type: "wetland", region: "Madhya Pradesh",
    coordinates: { lat: 25.4333, lng: 77.7167 },
    difficulty: "low",
    description: "A human-made reservoir situated within the Madhav National Park.",
    characteristics: [
      "Created in 1918 from the Manier river",
      "Habitat for the Mugger crocodile",
      "Added to Ramsar list in 2022"
    ],
    upsc_relevance: "Overlap of Ramsar sites with National Parks.",
    pyq_years: []
  },

  // --- UTTAR PRADESH & PUNJAB ---
  {
    id: "ramsar-upper-ganga",
    name: "Upper Ganga River",
    type: "wetland", region: "Uttar Pradesh",
    coordinates: { lat: 28.3333, lng: 78.2000 },
    difficulty: "high-yield",
    description: "A shallow river stretch of the Ganges from Brijghat to Narora, featuring highly variable water levels.",
    characteristics: [
      "Crucial habitat for the endangered Ganges River Dolphin",
      "Contains the Gharial and various turtle species",
      "Hindu pilgrimage site"
    ],
    upsc_relevance: "Ganges River Dolphin (National Aquatic Animal) habitat.",
    pyq_years: [2014, 2015]
  },
  {
    id: "ramsar-sur-sarovar",
    name: "Sur Sarovar (Keetham Lake)",
    type: "wetland", region: "Uttar Pradesh",
    coordinates: { lat: 27.2500, lng: 77.8333 },
    difficulty: "medium",
    description: "A human-made reservoir near Agra, originally created to supply water to the city in summer.",
    characteristics: [
      "Located alongside the Yamuna river",
      "Contains a massive bear rescue facility",
      "High concentration of resident and migratory birds"
    ],
    upsc_relevance: "Proximity to the heavily polluted Yamuna and urban conservation.",
    pyq_years: []
  },
  {
    id: "ramsar-bakhira",
    name: "Bakhira Wildlife Sanctuary",
    type: "wetland", region: "Uttar Pradesh",
    coordinates: { lat: 26.9000, lng: 83.1333 },
    difficulty: "low",
    description: "The largest natural floodplain wetland in eastern Uttar Pradesh.",
    characteristics: [
      "Provides wintering ground for over 80 species of migratory birds",
      "Added to Ramsar list in 2022"
    ],
    upsc_relevance: "Floodplain ecology in the Purvanchal region.",
    pyq_years: []
  },
  {
    id: "ramsar-haiderpur",
    name: "Haiderpur Wetland",
    type: "wetland", region: "Uttar Pradesh",
    coordinates: { lat: 29.4000, lng: 78.0167 },
    difficulty: "medium",
    description: "A human-made wetland formed by the construction of the Madhya Ganga Barrage at the confluence of the Ganga and Solani rivers.",
    characteristics: [
      "Located within the Hastinapur Wildlife Sanctuary boundaries",
      "Formed in 1984, representing rapid ecological succession"
    ],
    upsc_relevance: "Confluence geography (Ganga + Solani).",
    pyq_years: []
  },
  {
    id: "ramsar-kanjli",
    name: "Kanjli Wetland",
    type: "wetland", region: "Punjab",
    coordinates: { lat: 31.4167, lng: 75.3667 },
    difficulty: "low",
    description: "A man-made wetland created by constructing a barrage across the Kali Bein river.",
    characteristics: [
      "Kali Bein is a tributary of the Beas river",
      "High cultural significance in Sikhism (associated with Guru Nanak Dev Ji)",
      "Heavily affected by water hyacinth invasion"
    ],
    upsc_relevance: "Invasive species (Water Hyacinth) destroying wetland ecology.",
    pyq_years: []
  },
  {
    id: "ramsar-ropar",
    name: "Ropar Wetland",
    type: "wetland", region: "Punjab",
    coordinates: { lat: 31.0167, lng: 76.5000 },
    difficulty: "medium",
    description: "A man-made riverine wetland formed by a barrage on the Sutlej River.",
    characteristics: [
      "Crucial breeding ground for the Smooth-coated Otter",
      "Important habitat for the endangered Indian Pangolin",
      "Located near an ancient Harappan civilization site"
    ],
    upsc_relevance: "Indus Valley Civilization overlap and Smooth-coated otter habitat.",
    pyq_years: []
  },
  
  // --- HIGH ALTITUDE LAKES (J&K / HP) ---
  {
    id: "ramsar-hokera",
    name: "Hokera Wetland",
    type: "wetland", region: "Jammu & Kashmir",
    coordinates: { lat: 34.0833, lng: 74.7167 },
    difficulty: "high-yield",
    description: "Located near Srinagar, it is a crucial backwater of the Jhelum river basin.",
    characteristics: [
      "Natural perennial wetland",
      "Acts as a major flood absorption basin for Srinagar city",
      "Heavily threatened by weed infestation and siltation"
    ],
    upsc_relevance: "Jhelum basin flood management (relevant to the 2014 Kashmir floods).",
    pyq_years: []
  },
  {
    id: "ramsar-surinsar",
    name: "Surinsar-Mansar Lakes",
    type: "wetland", region: "Jammu & Kashmir",
    coordinates: { lat: 32.7667, lng: 75.1333 },
    difficulty: "medium",
    description: "Twin freshwater lakes located in the semi-arid lower Shivalik region.",
    characteristics: [
      "Mansar lake is deeply connected to Hindu mythology (Mahabharata)",
      "Composite lake system with high biological diversity",
      "No surface drainage outflow"
    ],
    upsc_relevance: "Shivalik region geography.",
    pyq_years: []
  },
  {
    id: "ramsar-chandertal",
    name: "Chandertal Wetland",
    type: "wetland", region: "Himachal Pradesh",
    coordinates: { lat: 32.4833, lng: 77.6167 },
    difficulty: "high-yield",
    description: "A high-altitude, crescent-shaped lake in the Lahaul and Spiti district.",
    characteristics: [
      "High altitude (4,300m) glacial lake",
      "Source of the Chandra River (which merges to form Chenab)",
      "Supports rare alpine flora and Snow Leopards"
    ],
    upsc_relevance: "Glacial lakes and origin point of the Chenab river system.",
    pyq_years: []
  },

  // ══════════════════════════════════════════════════════════════════
  // BATCH 2: SOUTH, EAST & NORTHEAST INDIA
  // ══════════════════════════════════════════════════════════════════

  // --- ODISHA & WEST BENGAL ---
  {
    id: "ramsar-bhitarkanika",
    name: "Bhitarkanika Mangroves",
    type: "wetland", region: "Odisha",
    coordinates: { lat: 20.6500, lng: 86.9167 },
    difficulty: "high-yield",
    description: "India's second-largest mangrove ecosystem after the Sundarbans. Located in the estuarine region of the Brahmani and Baitarani rivers.",
    characteristics: [
      "Highest density of Saltwater Crocodiles in India",
      "Gahirmatha beach (Olive Ridley turtles) lies on its eastern boundary",
      "Nutrient-rich alluvial delta"
    ],
    upsc_relevance: "Estuarine ecology, Saltwater crocodiles, and overlap with Gahirmatha.",
    pyq_years: [2015, 2017, 2021]
  },
  {
    id: "ramsar-east-kolkata",
    name: "East Kolkata Wetlands",
    type: "wetland", region: "West Bengal",
    coordinates: { lat: 22.5400, lng: 88.4500 },
    difficulty: "high-yield",
    description: "A globally unique urban wetland system that naturally treats Kolkata's sewage using sunlight, oxygen, and microbial action.",
    characteristics: [
      "World's largest organic sewage management system",
      "Heavily utilized for aquaculture and agriculture (bheris)",
      "Saves the city millions of dollars in sewage treatment costs"
    ],
    upsc_relevance: "Urban waste management and ecological engineering (bioremediation).",
    pyq_years: [2014, 2019]
  },
  {
    id: "ramsar-hirakud",
    name: "Hirakud Reservoir",
    type: "wetland", region: "Odisha",
    coordinates: { lat: 21.5500, lng: 83.8500 },
    difficulty: "medium",
    description: "The largest earthen dam in the world, operating as a massive artificial wetland on the Mahanadi River.",
    characteristics: [
      "Man-made reservoir on the Mahanadi",
      "Crucial wintering ground for migratory birds from the Caspian Sea",
      "Added to the Ramsar list in 2022"
    ],
    upsc_relevance: "Dam-river matching and recent Ramsar additions.",
    pyq_years: [2016]
  },
  {
    id: "ramsar-tampara",
    name: "Tampara Lake",
    type: "wetland", region: "Odisha",
    coordinates: { lat: 19.3500, lng: 85.0000 },
    difficulty: "low",
    description: "One of the most prominent freshwater lakes in the State of Odisha, situated near the Rushikulya river mouth.",
    characteristics: [
      "Freshwater lake (unlike the nearby brackish Chilika)",
      "Formed by the gradual filling of rainwater in a depression",
      "Supports vulnerable species like the Common Pochard"
    ],
    upsc_relevance: "Distinguishing freshwater vs. saltwater coastal lakes.",
    pyq_years: []
  },

  // --- THE NORTHEAST ---
  {
    id: "ramsar-kabartal",
    name: "Kabartal (Kanwar Jheel)",
    type: "wetland", region: "Bihar",
    coordinates: { lat: 25.6167, lng: 86.1333 },
    difficulty: "high-yield",
    description: "Asia's largest freshwater oxbow lake, formed by the meandering dynamics of the Gandak river.",
    characteristics: [
      "Classic example of an Oxbow Lake (fluvial geomorphology)",
      "Located in the Indo-Gangetic plains (Begusarai)",
      "Vital flood buffer for the region"
    ],
    upsc_relevance: "Oxbow lake formation (fluvial landforms).",
    pyq_years: [2018, 2022]
  },
  {
    id: "ramsar-rudrasagar",
    name: "Rudrasagar Lake",
    type: "wetland", region: "Tripura",
    coordinates: { lat: 23.4833, lng: 91.3167 },
    difficulty: "medium",
    description: "A lowland sedimentation reservoir fed by three perennial streams. Famous for the Neermahal palace situated in its center.",
    characteristics: [
      "Located in the Gomati river basin",
      "Water palace (Neermahal) built by Maharaja Bir Bikram Kishore Manikya",
      "Suffering from heavy siltation and agricultural runoff"
    ],
    upsc_relevance: "History/Art & Culture crossover (Neermahal).",
    pyq_years: []
  },
  {
    id: "ramsar-pala",
    name: "Pala Wetland",
    type: "wetland", region: "Mizoram",
    coordinates: { lat: 22.2000, lng: 92.9333 },
    difficulty: "low",
    description: "The largest natural lake in Mizoram, surrounded by pristine tropical semi-evergreen forests.",
    characteristics: [
      "Natural lake formed by a geological fault/earthquake",
      "Deeply revered by the local Mara tribe",
      "Added to the Ramsar list in 2022"
    ],
    upsc_relevance: "Northeast physical geography and tribal affiliations.",
    pyq_years: []
  },

  // --- KERALA ---
  {
    id: "ramsar-ashtamudi",
    name: "Ashtamudi Wetland",
    type: "wetland", region: "Kerala",
    coordinates: { lat: 8.9500, lng: 76.5833 },
    difficulty: "high-yield",
    description: "An estuary featuring a unique palm-shaped (eight-armed) topology. The deepest estuary in Kerala.",
    characteristics: [
      "Name translates to 'Eight Braids' (arms)",
      "Fed by the Kallada River",
      "Gateway to the Kerala backwaters (Kollam)"
    ],
    upsc_relevance: "Estuary morphology and Kallada river geography.",
    pyq_years: [2015]
  },
  {
    id: "ramsar-sasthamkotta",
    name: "Sasthamkotta Lake",
    type: "wetland", region: "Kerala",
    coordinates: { lat: 9.0333, lng: 76.6333 },
    difficulty: "medium",
    description: "The largest freshwater lake in Kerala. Its water remains uniquely pure due to the presence of specific larvae.",
    characteristics: [
      "Freshwater lake (unlike Vembanad and Ashtamudi which are brackish/estuarine)",
      "No visible tributaries feeding it (fed by underground springs)",
      "Provides drinking water to the Kollam district"
    ],
    upsc_relevance: "Identifying the freshwater anomalies among Kerala's mostly brackish backwaters.",
    pyq_years: [2014]
  },

  // --- TAMIL NADU ---
  {
    id: "ramsar-point-calimere",
    name: "Point Calimere Wildlife Sanctuary",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 10.3000, lng: 79.8500 },
    difficulty: "high-yield",
    description: "Located at the apex of the Cauvery River delta. Features a mix of salt swamps, mangroves, and dry evergreen forests.",
    characteristics: [
      "Features the rare Tropical Dry Evergreen Forest biome",
      "Major congregation site for Greater Flamingos",
      "Wintering ground for birds migrating via the Central Asian Flyway"
    ],
    upsc_relevance: "Tropical Dry Evergreen Forest biome distribution (coromandel coast).",
    pyq_years: [2018, 2021]
  },
  {
    id: "ramsar-pichavaram",
    name: "Pichavaram Mangrove",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 11.4333, lng: 79.7833 },
    difficulty: "high-yield",
    description: "One of the largest contiguous mangrove forests in India, sandwiched between the Vellar and Coleroon estuaries.",
    characteristics: [
      "Complex network of backwaters and mangrove islands",
      "Located near the Chidambaram Nataraja Temple",
      "Added to the Ramsar list in 2022"
    ],
    upsc_relevance: "Mangrove ecology and river estuary geography (Vellar and Coleroon).",
    pyq_years: [2023]
  },
  {
    id: "ramsar-gulf-of-mannar-marine",
    name: "Gulf of Mannar Marine Biosphere",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 9.2500, lng: 79.2000 },
    difficulty: "high-yield",
    description: "A marine National Park and Ramsar site featuring 21 islands, coral reefs, and shallow water habitats.",
    characteristics: [
      "First marine Biosphere Reserve in South and South-East Asia",
      "Major habitat for the Dugong (Sea Cow)",
      "Added to the Ramsar list in 2022"
    ],
    upsc_relevance: "Dugong conservation status and coral reef geography.",
    pyq_years: [2016, 2023]
  },

  // --- GEOGRAPHICAL EXTREMES PART 2 ---
  {
    id: "ramsar-wular",
    name: "Wular Lake",
    type: "wetland", region: "Jammu & Kashmir",
    coordinates: { lat: 34.3333, lng: 74.6000 },
    difficulty: "medium",
    description: "One of the largest freshwater lakes in Asia, formed by tectonic activity.",
    characteristics: [
      "Tectonic origin (unlike most oxbow or creator lakes)",
      "Fed by the Jhelum River",
      "The Tulbul Navigation Project is located at its mouth"
    ],
    upsc_relevance: "Tectonic origin concept and Indus Water Treaty (Tulbul project) connections.",
    pyq_years: [2014]
  },
  {
    id: "ramsar-vembanad",
    name: "Vembanad-Kol Wetland",
    type: "wetland", region: "Kerala",
    coordinates: { lat: 9.6000, lng: 76.4000 },
    difficulty: "high-yield",
    description: "The longest lake in India and the largest Ramsar site in Kerala. A complex estuarine system.",
    characteristics: [
      "Longest lake in India",
      "Includes the Kuttanad region (below sea-level farming)",
      "Fed by 10 rivers including Pamba and Periyar",
      "Famous for Nehru Trophy Boat Race"
    ],
    upsc_relevance: "Kuttanad's below-sea-level farming (Globally Important Agricultural Heritage System).",
    pyq_years: [2019]
  },
  {
    id: "ramsar-renuka",
    name: "Renuka Lake",
    type: "wetland", region: "Himachal Pradesh",
    coordinates: { lat: 30.6000, lng: 77.4500 },
    difficulty: "high-yield",
    description: "The SMALLEST Ramsar site in India, located in the Sirmaur district.",
    characteristics: [
      "Smallest Ramsar Site in India (approx 20 hectares)",
      "Natural freshwater lake fed by underground springs",
      "Named after the goddess Renuka (mother of Parashurama)"
    ],
    upsc_relevance: "Frequently tested as a 'Smallest/Largest' superlative.",
    pyq_years: [2016]
  },
  {
    id: "ramsar-kolleru",
    name: "Kolleru Lake",
    type: "wetland", region: "Andhra Pradesh",
    coordinates: { lat: 16.6000, lng: 81.2000 },
    difficulty: "high-yield",
    description: "One of the largest freshwater lakes in India, uniquely positioned between two massive river deltas.",
    characteristics: [
      "Located strictly between the deltas of the Krishna and Godavari rivers",
      "Freshwater lake (NOT a saltwater lagoon like Chilika or Pulicat)",
      "Fed by seasonal streams like Tammileru and Budameru"
    ],
    upsc_relevance: "The 'between Krishna and Godavari' geographical trap. Often confused with Pulicat (which is saltwater).",
    pyq_years: [2015, 2021]
  },
  {
    id: "ramsar-tso-moriri",
    name: "Tso Moriri",
    type: "wetland", region: "Ladakh",
    coordinates: { lat: 32.9000, lng: 78.3000 },
    difficulty: "medium",
    description: "A high-altitude oligotrophic (low nutrient) lake in the Changthang plateau.",
    characteristics: [
      "Brackish/Saline water endorheic (inland drainage) lake",
      "Only breeding ground in India for the Bar-headed goose and Black-necked crane",
      "Highest Ramsar site in India"
    ],
    upsc_relevance: "Oligotrophic lake ecology and Black-necked crane habitat.",
    pyq_years: [2018]
  },
  {
    id: "ramsar-tso-kar",
    name: "Tso Kar Wetland Complex",
    type: "wetland", region: "Ladakh",
    coordinates: { lat: 33.3000, lng: 78.0000 },
    difficulty: "high-yield",
    description: "Known as the 'White Lake' due to the thick crust of salt forming on its margins.",
    characteristics: [
      "Consists of two connected lakes: Startsapuk Tso (freshwater) and Tso Kar (hypersaline)",
      "A-1 Category Important Bird Area (IBA)",
      "Added to the Ramsar list in 2020"
    ],
    upsc_relevance: "Hypersaline lake ecology in high-altitude cold deserts.",
    pyq_years: [2022]
  },
  {
    id: "ramsar-pangong",
    name: "Pangong Tso",
    type: "wetland", region: "Ladakh / Tibet",
    coordinates: { lat: 33.7500, lng: 78.6667 },
    difficulty: "high-yield",
    description: "A massive, high-altitude endorheic lake spanning India and China.",
    characteristics: [
      "Trans-boundary lake (1/3 in India, 2/3 in China)",
      "Saline water, yet completely freezes in winter",
      "Features 'Fingers' (mountain spurs) that are major border dispute points"
    ],
    upsc_relevance: "Geopolitics: The Line of Actual Control (LAC) passes directly through the lake at Finger 8.",
    pyq_years: [],
    in_news_24m: true,
    news_context: "China's construction of a dual-purpose bridge across the lake to quickly mobilize troops between the north and south banks."
  },
  {
    id: "ramsar-harike",
    name: "Harike Wetland",
    type: "wetland", region: "Punjab",
    coordinates: { lat: 31.1333, lng: 74.9500 },
    difficulty: "high-yield",
    description: "A vital man-made riverine wetland formed by the Harike Barrage.",
    characteristics: [
      "Located at the exact confluence of the Beas and Sutlej rivers",
      "Source of the Indira Gandhi Canal (Rajasthan Canal)",
      "Crucial wintering site for Indus Dolphins and migratory birds"
    ],
    upsc_relevance: "Confluence matching (Beas + Sutlej) and Indira Gandhi Canal origin.",
    pyq_years: [2016, 2020]
  },
  {
    id: "ramsar-bhoj",
    name: "Bhoj Wetland",
    type: "wetland", region: "Madhya Pradesh",
    coordinates: { lat: 23.2333, lng: 77.3333 },
    difficulty: "medium",
    description: "Consists of two contiguous human-made lakes (Upper and Lower Lake) situated right in the city of Bhopal.",
    characteristics: [
      "Created in the 11th century by Paramara Raja Bhoj",
      "Urban wetland facing heavy encroachment and pollution",
      "Largest bird of India, the Sarus Crane, is found here"
    ],
    upsc_relevance: "Urban wetland conservation issues.",
    pyq_years: [2013]
  },
  {
    id: "ramsar-pong-dam",
    name: "Pong Dam Lake",
    type: "wetland", region: "Himachal Pradesh",
    coordinates: { lat: 32.0167, lng: 76.0833 },
    difficulty: "medium",
    description: "Also known as Maharana Pratap Sagar. Created by damming the Beas river.",
    characteristics: [
      "Man-made reservoir on the Beas River",
      "Located in the Kangra district in the Shivalik foothills",
      "Major stopover for trans-Himalayan migratory birds"
    ],
    upsc_relevance: "Matching reservoirs to their rivers (Pong = Beas, Bhakra = Sutlej).",
    pyq_years: [2017]
  },
  {
    id: "ramsar-deepor-beel",
    name: "Deepor Beel",
    type: "wetland", region: "Assam",
    coordinates: { lat: 26.1167, lng: 91.6500 },
    difficulty: "high-yield",
    description: "A permanent freshwater lake, in a former channel of the Brahmaputra River, to the south of Guwahati city.",
    characteristics: [
      "Only Ramsar site in Assam",
      "Major elephant corridor",
      "Threatened by a railway line passing directly through the wetland area"
    ],
    upsc_relevance: "Elephant-train collision disasters and urban encroachment.",
    pyq_years: [2021],
    in_news_24m: true,
    news_context: "Ongoing NGT (National Green Tribunal) interventions regarding the doubling of railway tracks through this critical elephant corridor."
  },
  {
    id: "ramsar-pallikaranai",
    name: "Pallikaranai Marsh Reserve Forest",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 12.9333, lng: 80.2167 },
    difficulty: "high-yield",
    description: "One of the last remaining natural wetlands of Chennai. Added to the Ramsar list recently during India's major expansion.",
    characteristics: [
      "Freshwater marsh and partly saline",
      "Acts as a natural flood sink for the city of Chennai",
      "Severely threatened by massive garbage dumping (Perungudi dump yard)"
    ],
    upsc_relevance: "Urban flood management (Chennai floods) and waste management intersecting with Ramsar ecology.",
    pyq_years: [],
    in_news_24m: true,
    news_context: "Chennai's catastrophic urban flooding is directly linked to the choking of the Pallikaranai marsh by real estate and landfill expansion."
  },

  // ══════════════════════════════════════════════════════════════════
  // RAMSAR WETLANDS BATCH 3: TAMIL NADU, UP, HARYANA & GUJARAT
  // ══════════════════════════════════════════════════════════════════

  // --- TAMIL NADU (THE MEGA-CLUSTER) ---
  {
    id: "ramsar-vedanthangal",
    name: "Vedanthangal Bird Sanctuary",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 12.5400, lng: 79.8500 },
    difficulty: "high-yield",
    description: "One of the oldest water bird sanctuaries in the country, deeply protected by the local community for centuries.",
    characteristics: ["Human-made irrigation tank", "Guano (bird droppings) enriches the water for local agriculture", "Oldest sanctuary in TN"],
    upsc_relevance: "Community conservation models and symbiotic agriculture.",
    pyq_years: []
  },
  {
    id: "ramsar-karikili",
    name: "Karikili Bird Sanctuary",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 12.5700, lng: 79.8400 },
    difficulty: "low",
    description: "A rocky terrain wetland located very close to Vedanthangal, acting as a satellite feeding ground for migratory birds.",
    characteristics: ["Rain-fed irrigation tanks", "Provides roosting sites for birds feeding at Vedanthangal"],
    upsc_relevance: "Satellite wetland ecosystems.",
    pyq_years: []
  },
  {
    id: "ramsar-koonthankulam",
    name: "Koonthankulam Bird Sanctuary",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 8.5800, lng: 77.7600 },
    difficulty: "medium",
    description: "The largest reserve for breeding water birds in South India, actively protected by the local Nadar community.",
    characteristics: ["Important Bird Area (IBA)", "Community-led conservation", "Significant breeding site for Painted Storks"],
    upsc_relevance: "Community-led conservation models (Nadar community).",
    pyq_years: []
  },
  {
    id: "ramsar-vellode",
    name: "Vellode Bird Sanctuary",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 11.1500, lng: 77.6600 },
    difficulty: "low",
    description: "A large irrigation tank located in Erode district, surrounded by agricultural fields.",
    characteristics: ["Provincial irrigation tank", "Hosts thousands of Pelicans and Teals"],
    upsc_relevance: "Irrigation tank ecosystems.",
    pyq_years: []
  },
  {
    id: "ramsar-vembannur",
    name: "Vembannur Wetland Complex",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 8.2400, lng: 77.3800 },
    difficulty: "low",
    description: "A human-made irrigation tank forming part of the Important Bird and Biodiversity Area in the Kanyakumari district.",
    characteristics: ["Southernmost wetland cluster in TN", "Crucial for agricultural irrigation"],
    upsc_relevance: "Kanyakumari wetland biodiversity.",
    pyq_years: []
  },
  {
    id: "ramsar-chitrangudi",
    name: "Chitrangudi Bird Sanctuary",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 9.3200, lng: 78.4700 },
    difficulty: "low",
    description: "Locally known as 'Chitrangudi Kanmoli', this crescent-shaped wetland is a favored nesting site for herons.",
    characteristics: ["Crescent-shaped irrigation tank", "Features Acacia nilotica plantations for bird roosting"],
    upsc_relevance: " roosting site management in arid regions.",
    pyq_years: []
  },
  {
    id: "ramsar-suchindram",
    name: "Suchindram Theroor Wetland",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 8.1400, lng: 77.4600 },
    difficulty: "medium",
    description: "Located near the southern tip of India, it lies at the southern end of the Central Asian Flyway.",
    characteristics: ["Part of the Kanyakumari Wildlife Sanctuary", "Man-made, ancient irrigation tank"],
    upsc_relevance: "Central Asian Flyway terminal sites.",
    pyq_years: []
  },
  {
    id: "ramsar-vaduvur",
    name: "Vaduvur Bird Sanctuary",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 10.7000, lng: 79.3100 },
    difficulty: "low",
    description: "A large human-made irrigation tank in the Cauvery Delta region, attracting thousands of migratory birds.",
    characteristics: ["Located in the 'Rice Bowl' of Tamil Nadu", "Provides a buffer against droughts"],
    upsc_relevance: "Cauvery Delta wetland dynamics.",
    pyq_years: []
  },
  {
    id: "ramsar-kanjirankulam",
    name: "Kanjirankulam Bird Sanctuary",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 9.3300, lng: 78.4700 },
    difficulty: "low",
    description: "Adjacent to Chitrangudi, forming a twin-wetland system vital for migratory waterbirds in the Ramanathapuram district.",
    characteristics: ["Features Babul (Acacia) trees planted specifically for bird nesting", "Dry landscape wetland"],
    upsc_relevance: "Artificial roosting habitats.",
    pyq_years: []
  },
  {
    id: "ramsar-udhayamarthandapuram",
    name: "Udhayamarthandapuram Bird Sanctuary",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 10.4500, lng: 79.5600 },
    difficulty: "low",
    description: "An irrigation tank in the Tiruvarur district, highly dependent on the northeast monsoon.",
    characteristics: ["Fed by the Koraiyar canal", "Dries up entirely during summer months"],
    upsc_relevance: "Seasonal wetland vulnerabilities.",
    pyq_years: []
  },
  {
    id: "ramsar-karaivetti",
    name: "Karaivetti Bird Sanctuary",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 10.9600, lng: 79.0400 },
    difficulty: "medium",
    description: "One of the most important freshwater feeding grounds for migratory birds in the state of Tamil Nadu.",
    characteristics: ["One of the largest inland tanks of Tamil Nadu", "High congregation of Bar-headed Geese"],
    upsc_relevance: "Bar-headed Geese migration patterns.",
    pyq_years: []
  },
  {
    id: "ramsar-longwood",
    name: "Longwood Shola Reserve Forest",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 11.4200, lng: 76.8700 },
    difficulty: "high-yield",
    description: "A highly fragile, high-altitude Shola forest and wetland ecosystem in the Nilgiris.",
    characteristics: ["Tropical montane forest (Shola)", "Critical water source for the Kotagiri region", "Endemic Nilgiri laughingthrush habitat"],
    upsc_relevance: "Shola forest ecosystem characteristics (high altitude, stunted canopy, grassland mosaic).",
    pyq_years: []
  },

  // --- UTTAR PRADESH (GANGETIC PLAINS) ---
  {
    id: "ramsar-nawabganj",
    name: "Nawabganj Bird Sanctuary",
    type: "wetland", region: "Uttar Pradesh",
    coordinates: { lat: 26.6200, lng: 80.6500 },
    difficulty: "medium",
    description: "A shallow marshland located between Lucknow and Kanpur, renamed as Shahid Chandra Shekhar Azad Bird Sanctuary.",
    characteristics: ["Monsoon-fed shallow marsh", "Heavily utilized by wintering waterfowl", "Faces issues from agricultural runoff"],
    upsc_relevance: "Impact of agricultural runoff on Gangetic wetlands.",
    pyq_years: []
  },
  {
    id: "ramsar-parvati-arga",
    name: "Parvati Arga Bird Sanctuary",
    type: "wetland", region: "Uttar Pradesh",
    coordinates: { lat: 26.9300, lng: 82.1600 },
    difficulty: "medium",
    description: "Consists of two connected oxbow lakes formed by the meandering dynamics of the Ghaghara River.",
    characteristics: ["Oxbow lake formation", "Located in the Terai region", "Important vulture habitat"],
    upsc_relevance: "Terai region ecology and oxbow lake formation.",
    pyq_years: []
  },
  {
    id: "ramsar-saman",
    name: "Saman Bird Sanctuary",
    type: "wetland", region: "Uttar Pradesh",
    coordinates: { lat: 27.0200, lng: 79.3100 },
    difficulty: "low",
    description: "A seasonal oxbow lake on the Ganges floodplain, heavily dependent on monsoon rainfall.",
    characteristics: ["Rain-fed oxbow lake", "Habitat for the vulnerable Sarus Crane"],
    upsc_relevance: "Sarus Crane conservation status.",
    pyq_years: []
  },
  {
    id: "ramsar-samaspur",
    name: "Samaspur Bird Sanctuary",
    type: "wetland", region: "Uttar Pradesh",
    coordinates: { lat: 25.9900, lng: 81.3900 },
    difficulty: "low",
    description: "A perennial lowland marsh typical of the Indo-Gangetic Plains, featuring six connected lakes.",
    characteristics: ["Cluster of six interconnected lakes", "Sarus Crane breeding ground"],
    upsc_relevance: "Interconnected lake systems (clusters).",
    pyq_years: []
  },
  {
    id: "ramsar-sandi",
    name: "Sandi Bird Sanctuary",
    type: "wetland", region: "Uttar Pradesh",
    coordinates: { lat: 27.3100, lng: 79.9800 },
    difficulty: "low",
    description: "A freshwater marsh in the Hardoi district, created by the Garra River (a tributary of the Ramganga).",
    characteristics: ["Fluvial (riverine) wetland", "Features extensive tracts of Typha reeds"],
    upsc_relevance: "Fluvial wetland vegetation (Typha).",
    pyq_years: []
  },
  {
    id: "ramsar-sarsai-nawar",
    name: "Sarsai Nawar Jheel",
    type: "wetland", region: "Uttar Pradesh",
    coordinates: { lat: 27.0200, lng: 79.2500 },
    difficulty: "medium",
    description: "A classic example of an Indo-Gangetic marsh, uniquely co-managed by the local community and the state.",
    characteristics: ["Permanent marsh", "High population of Sarus Cranes", "Recognized for excellent community-led conservation"],
    upsc_relevance: "Community-led wetland management (Indo-Gangetic).",
    pyq_years: []
  },

  // --- HARYANA (URBAN & ARAVALLI) ---
  {
    id: "ramsar-sultanpur",
    name: "Sultanpur National Park",
    type: "wetland", region: "Haryana",
    coordinates: { lat: 28.4600, lng: 76.8900 },
    difficulty: "high-yield",
    description: "A highly urbanized Ramsar site located very close to Gurugram. It acts as a critical green lung and water sink for the NCR.",
    characteristics: ["Urban wetland ecosystem", "Crucial stopover on the Central Asian Flyway", "Threatened by massive real estate encroachment"],
    upsc_relevance: "Urban wetlands vs. Infrastructure encroachment in the National Capital Region (NCR).",
    pyq_years: []
  },
  {
    id: "ramsar-bhindawas",
    name: "Bhindawas Wildlife Sanctuary",
    type: "wetland", region: "Haryana",
    coordinates: { lat: 28.5300, lng: 76.5500 },
    difficulty: "medium",
    description: "The largest human-made freshwater wetland in Haryana, created to store excess water from the Jawaharlal Nehru Canal.",
    characteristics: ["Human-made reservoir", "Alleviates flooding in the surrounding agricultural areas", "Supports the endangered Egyptian Vulture"],
    upsc_relevance: "Reservoirs as flood-control buffers.",
    pyq_years: []
  },

  // --- GUJARAT (ARID WETLANDS) ---
  {
    id: "ramsar-thol",
    name: "Thol Lake Wildlife Sanctuary",
    type: "wetland", region: "Gujarat",
    coordinates: { lat: 23.1500, lng: 72.4000 },
    difficulty: "medium",
    description: "A shallow freshwater reservoir built originally for irrigation, now serving as a major avian habitat on the Central Asian Flyway.",
    characteristics: ["Man-made irrigation tank", "Dry deciduous forest surroundings", "Supports over 320 bird species"],
    upsc_relevance: "Irrigation tanks in arid deciduous zones.",
    pyq_years: []
  },
  {
    id: "ramsar-wadhvana",
    name: "Wadhvana Wetland",
    type: "wetland", region: "Gujarat",
    coordinates: { lat: 22.1700, lng: 73.4800 },
    difficulty: "low",
    description: "An irrigation reservoir created by the former King of Baroda in the early 20th century.",
    characteristics: ["Century-old irrigation reservoir", "Provides vital wintering grounds for migratory waterbirds in an otherwise semi-arid region"],
    upsc_relevance: "Historical reservoirs and their ecological succession.",
    pyq_years: []
  },

  // --- GOA & MADHYA PRADESH ---
  {
    id: "ramsar-nanda-lake",
    name: "Nanda Lake",
    type: "wetland", region: "Goa",
    coordinates: { lat: 15.2400, lng: 74.1100 },
    difficulty: "medium",
    description: "Goa's first and only Ramsar site, featuring intermittent freshwater marshes adjacent to the Zuari river.",
    characteristics: ["Goa's only Ramsar site", "Regulates downstream flooding in the Zuari basin", "Used traditionally for 'Khazan' farming"],
    upsc_relevance: "Khazan land farming and Zuari river basin.",
    pyq_years: []
  },
  {
    id: "ramsar-sirpur",
    name: "Sirpur Wetland",
    type: "wetland", region: "Madhya Pradesh",
    coordinates: { lat: 22.7100, lng: 75.8300 },
    difficulty: "medium",
    description: "A historically significant, human-made wetland created by the Holkar dynasty in Indore.",
    characteristics: ["Created in the late 19th century by the Holkars", "Important urban wetland for Indore city", "Excellent example of community-led restoration"],
    upsc_relevance: "Holkar dynasty's ecological contributions.",
    pyq_years: []
  },
  {
    id: "ramsar-yashwant-sagar",
    name: "Yashwant Sagar",
    type: "wetland", region: "Madhya Pradesh",
    coordinates: { lat: 22.8100, lng: 75.6600 },
    difficulty: "low",
    description: "A massive reservoir built on the Gambhir river, primarily to supply water to the city of Indore.",
    characteristics: ["Reservoir on the Gambhir river", "One of the most important strongholds of the vulnerable Sarus Crane in Central India"],
    upsc_relevance: "Gambhir river geography.",
    pyq_years: []
  },

  // ══════════════════════════════════════════════════════════════════
  // RAMSAR WETLANDS BATCH 4: THE FINAL 20 (RECENT ADDITIONS & RESERVES)
  // ══════════════════════════════════════════════════════════════════

  // --- KARNATAKA (THE MASSIVE EXPANSION) ---
  {
    id: "ramsar-ranganathittu",
    name: "Ranganathittu Bird Sanctuary",
    type: "wetland", region: "Karnataka",
    coordinates: { lat: 12.4200, lng: 76.6500 },
    difficulty: "high-yield",
    description: "Karnataka's first Ramsar site. A cluster of small islands in the Kaveri River, famously championed by Salim Ali.",
    characteristics: ["Riverine island ecosystem on the Kaveri", "Largest bird sanctuary in Karnataka", "High population of Mugger crocodiles"],
    upsc_relevance: "Riverine island ecosystems and Salim Ali's conservation history.",
    pyq_years: []
  },
  {
    id: "ramsar-aghanashini",
    name: "Aghanashini Estuary",
    type: "wetland", region: "Karnataka",
    coordinates: { lat: 14.5100, lng: 74.3500 },
    difficulty: "medium",
    description: "A pristine, undammed estuary where the Aghanashini river meets the Arabian Sea.",
    characteristics: ["One of the few free-flowing (undammed) rivers in the Western Ghats", "Crucial for traditional 'Gazni' rice farming", "Supports massive bivalve and crab fisheries"],
    upsc_relevance: "Undammed estuarine ecology and traditional coastal agriculture.",
    pyq_years: []
  },
  {
    id: "ramsar-magadi-kere",
    name: "Magadi Kere Conservation Reserve",
    type: "wetland", region: "Karnataka",
    coordinates: { lat: 15.2200, lng: 75.6400 },
    difficulty: "low",
    description: "A human-made wetland in the Gadag district, uniquely formed to store rainwater for irrigation.",
    characteristics: ["One of the largest wintering grounds for the Bar-headed Goose in southern India", "Water is slightly saline"],
    upsc_relevance: "Saline wetland ecology in interior Karnataka.",
    pyq_years: []
  },
  {
    id: "ramsar-ankasamudra",
    name: "Ankasamudra Bird Conservation Reserve",
    type: "wetland", region: "Karnataka",
    coordinates: { lat: 15.1100, lng: 76.3200 },
    difficulty: "low",
    description: "A rain-fed human-made tank in the Bellary district, originally built centuries ago.",
    characteristics: ["Only exclusive bird conservation reserve in the Kalyana-Karnataka region", "Surrounded by dry-deciduous scrubland"],
    upsc_relevance: "Kalyana-Karnataka regional biodiversity.",
    pyq_years: []
  },

  // --- BIHAR & UTTAR PRADESH (THE NEWEST ADDITIONS) ---
  {
    id: "ramsar-nagi",
    name: "Nagi Bird Sanctuary",
    type: "wetland", region: "Bihar",
    coordinates: { lat: 24.8500, lng: 86.4200 },
    difficulty: "medium",
    description: "A human-made reservoir in Jamui district, recently added to the Ramsar list. Formed by damming the Nagi River.",
    characteristics: ["Hosts over 1% of the global population of Bar-headed Geese", "Located in the Jhajha forest range"],
    upsc_relevance: "2024 Ramsar additions are highly testable.",
    pyq_years: []
  },
  {
    id: "ramsar-nakti",
    name: "Nakti Bird Sanctuary",
    type: "wetland", region: "Bihar",
    coordinates: { lat: 24.8200, lng: 86.4500 },
    difficulty: "medium",
    description: "The twin sanctuary to Nagi, also a recently designated Ramsar site formed by a local irrigation dam.",
    characteristics: ["Constructed primarily for agricultural irrigation", "Surrounded by dry deciduous hill terrain"],
    upsc_relevance: "Irrigation-driven wetland creation in Jharkhand-Bihar borderlands.",
    pyq_years: []
  },
  {
    id: "ramsar-patna-bird",
    name: "Patna Bird Sanctuary",
    type: "wetland", region: "Uttar Pradesh",
    coordinates: { lat: 27.6000, lng: 78.3100 },
    difficulty: "high-yield",
    description: "Do not let the name fool you—it is located in the Etah district of Uttar Pradesh, not Bihar! A classic UPSC trap.",
    characteristics: ["Rain-fed oxbow lake", "Smallest wildlife sanctuary in UP", "Critical wintering ground for Roosting birds"],
    upsc_relevance: "The name 'Patna' in UP is an absolute classic geography trap.",
    pyq_years: []
  },

  // --- PUNJAB (COMMUNITY CONSERVATION) ---
  {
    id: "ramsar-keshopur",
    name: "Keshopur-Miani Community Reserve",
    type: "wetland", region: "Punjab",
    coordinates: { lat: 32.0800, lng: 75.3600 },
    difficulty: "medium",
    description: "India's first-ever notified community reserve, demonstrating excellent decentralized ecological management.",
    characteristics: ["Mosaic of natural marshes, aquaculture ponds, and agricultural wetlands", "Managed jointly by local village panchayats and the forest department"],
    upsc_relevance: "Community Reserve legislation (Wildlife Protection Act) mapped to geography.",
    pyq_years: []
  },
  {
    id: "ramsar-beas-conservation",
    name: "Beas Conservation Reserve",
    type: "wetland", region: "Punjab",
    coordinates: { lat: 31.3900, lng: 75.2000 },
    difficulty: "high-yield",
    description: "A 185 km stretch of the Beas River, punctuated with islands, sandbars, and braided channels.",
    characteristics: ["Only known habitat in India for the endangered Indus River Dolphin", "Successful reintroduction site for the Gharial"],
    upsc_relevance: "Indus River Dolphin habitat.",
    pyq_years: []
  },
  {
    id: "ramsar-nangal",
    name: "Nangal Wildlife Sanctuary",
    type: "wetland", region: "Punjab",
    coordinates: { lat: 31.3900, lng: 76.3800 },
    difficulty: "low",
    description: "Situated in the Shivalik foothills, this highly eco-sensitive zone supports abundant flora and fauna.",
    characteristics: ["Human-made reservoir formed by the Nangal Dam (part of Bhakra-Nangal)", "Hosts the endangered Indian Pangolin"],
    upsc_relevance: "Shivalik foothill ecology and Bhakra-Nangal context.",
    pyq_years: []
  },

  // --- JAMMU & KASHMIR (VALLEY WETLANDS) ---
  {
    id: "ramsar-hygam",
    name: "Hygam Wetland Conservation Reserve",
    type: "wetland", region: "Jammu & Kashmir",
    coordinates: { lat: 34.2400, lng: 74.5200 },
    difficulty: "medium",
    description: "Located in the Jhelum River basin, it plays a vital role in flood control for the Kashmir Valley.",
    characteristics: ["Acts as a massive sponge during extreme rainfall", "Heavily threatened by heavy siltation and willow tree encroachment"],
    upsc_relevance: "Flood mitigation through wetlands in Jhelum valley.",
    pyq_years: []
  },
  {
    id: "ramsar-shallbugh",
    name: "Shallbugh Wetland Conservation Reserve",
    type: "wetland", region: "Jammu & Kashmir",
    coordinates: { lat: 34.1600, lng: 74.7200 },
    difficulty: "low",
    description: "A shallow, rain-fed and snow-melt fed wetland that dries up extensively between September and March.",
    characteristics: ["Extensive reed beds", "Vital carbon sink for the Kashmir Valley"],
    upsc_relevance: "Carbon sequestration in Himalayan wetlands.",
    pyq_years: []
  },

  // --- ODISHA (RIVERINE & GORGE WETLANDS) ---
  {
    id: "ramsar-satkosia",
    name: "Satkosia Gorge",
    type: "wetland", region: "Odisha",
    coordinates: { lat: 20.5800, lng: 84.8100 },
    difficulty: "high-yield",
    description: "A magnificent gorge carved by the Mahanadi River through the Eastern Ghats.",
    characteristics: ["Meeting point of two biogeographic regions: Deccan Peninsula and Eastern Ghats", "Critical habitat for the Gharial and Mugger crocodiles"],
    upsc_relevance: "Gorge geomorphology and Gharial conservation outside the Chambal basin.",
    pyq_years: []
  },
  {
    id: "ramsar-ansupa",
    name: "Ansupa Lake",
    type: "wetland", region: "Odisha",
    coordinates: { lat: 20.4500, lng: 85.5900 },
    difficulty: "medium",
    description: "The largest freshwater lake in Odisha, formed by the meandering Mahanadi River.",
    characteristics: ["Oxbow lake formation", "Shelters the vulnerable Indian Skimmer", "Heavily affected by soil erosion from the Saranda hills"],
    upsc_relevance: "Indian Skimmer habitats and Saranda hills soil erosion.",
    pyq_years: []
  },

  // --- TAMIL NADU (FINAL NEW ADDITIONS) ---
  {
    id: "ramsar-kazhuveli",
    name: "Kazhuveli Bird Sanctuary",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 12.0600, lng: 79.8400 },
    difficulty: "medium",
    description: "The second largest brackish water lake in South India after Pulicat, located on the Coromandel Coast.",
    characteristics: ["Brackish water lagoon", "Connected to the Bay of Bengal via the Uppukalli creek", "Vital habitat for the Grey Pelican"],
    upsc_relevance: "Brackish lagoon dynamics on the Coromandel coast.",
    pyq_years: []
  },
  {
    id: "ramsar-nanjarayan",
    name: "Nanjarayan Bird Sanctuary",
    type: "wetland", region: "Tamil Nadu",
    coordinates: { lat: 11.1400, lng: 77.3600 },
    difficulty: "low",
    description: "A large irrigation tank located in Tiruppur district, famously restored by local environmentalists.",
    characteristics: ["Man-made reservoir built by King Nanjarayan", "Excellent case study of citizens reviving a polluted urban water body"],
    upsc_relevance: "Citizen-led environmental restoration case studies.",
    pyq_years: []
  },

  // --- UTTARAKHAND & GUJARAT ---
  {
    id: "ramsar-asan",
    name: "Asan Conservation Reserve",
    type: "wetland", region: "Uttarakhand",
    coordinates: { lat: 30.4300, lng: 77.6600 },
    difficulty: "high-yield",
    description: "Uttarakhand's first Ramsar site, formed by the barrage at the confluence of the Yamuna and Asan rivers.",
    characteristics: ["Located in the Doon Valley", "Major transit camp for migratory birds crossing the Himalayas"],
    upsc_relevance: "Identifying the first Ramsar site of Uttarakhand.",
    pyq_years: []
  },
  {
    id: "ramsar-chhari-dhand",
    name: "Chhari Dhand Conservation Reserve",
    type: "wetland", region: "Gujarat",
    coordinates: { lat: 23.5600, lng: 69.3200 },
    difficulty: "medium",
    description: "A seasonal desert wetland in the Banni grasslands of Kutch.",
    characteristics: ["'Chhari' means salt and 'Dhand' means shallow wetland", "Only fills up during a good monsoon", "Attracts massive flocks of Cranes and Pelicans"],
    upsc_relevance: "Banni grassland ecology.",
    pyq_years: []
  }
];
