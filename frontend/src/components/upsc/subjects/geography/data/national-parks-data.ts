import { GeoFeature } from './geo-types';

export const NATIONAL_PARKS_DATA: GeoFeature[] = [
  {
    id: "np_hemis",
    name: "Hemis National Park",
    type: "national-park",
    coordinates: { lat: 33.82, lng: 77.28 },
    region: "Ladakh",
    description: "Largest National Park in India by area (4,400 sq km). Located north of the Himalayas in a high-altitude cold desert ecosystem. Famous for being the premier habitat of the Snow Leopard (Panthera uncia).",
    characteristics: [
      "Largest NP in India — 4,400 sq km",
      "Snow Leopard — highest density globally",
      "Cold desert ecosystem above 3,000m",
      "Indus River flows along northern boundary",
      "Also has Tibetan Wolf, Bharal (Blue Sheep), Asiatic Ibex",
      "Part of Ladakh Biosphere Reserve"
    ],
    upsc_relevance: "UPSC frequently asks: (1) Largest National Park in India = Hemis (not Kaziranga or Corbett — a common trap). (2) Snow Leopard primary habitat. (3) Location relative to Indus River — the Indus flows on the northern boundary. (4) Cold desert NP — only one of its kind in India.",
    pyq_years: [2019, 2022],
    difficulty: "high-yield"
  },
  {
    id: "np_dachigam",
    name: "Dachigam National Park",
    type: "national-park",
    coordinates: { lat: 34.13, lng: 74.96 },
    region: "Jammu & Kashmir",
    description: "Located in the Zabarwan Range near Srinagar. Name means 'ten villages' — the villages relocated to create this park. Critical and last viable habitat for the Hangul (Kashmir Stag), India's most endangered cervid.",
    characteristics: [
      "Only viable habitat for Hangul (Kashmir Stag)",
      "Zabarwan Range — near Srinagar",
      "Dal Lake watershed protection",
      "Hangul population: ~300 only (critically endangered)",
      "Name = 'ten villages' (relocated communities)",
      "Dachigam Stream flows through it"
    ],
    upsc_relevance: "Hangul (Kashmir Stag) + Dachigam = definitive pairing tested in UPSC. Hangul is State Animal of J&K. Critically endangered — IUCN Red List. Questions often pair: 'Which NP is the last remaining habitat for the Hangul?' Answer: Dachigam.",
    pyq_years: [2018, 2021],
    difficulty: "high-yield"
  },
  {
    id: "np_kishtwar",
    name: "Kishtwar National Park",
    type: "national-park",
    coordinates: { lat: 33.41, lng: 76.01 },
    region: "Jammu & Kashmir",
    description: "Located in the Kishtwar district of J&K. Trans-Himalayan NP with deep gorges cut by the Chenab River. Habitat for Snow Leopard, Hangul, and Himalayan Brown Bear.",
    characteristics: [
      "Chenab River gorge through the park",
      "Trans-Himalayan ecosystem",
      "Snow Leopard and Himalayan Brown Bear",
      "Alpine meadows and glaciers",
      "Margan Pass nearby"
    ],
    upsc_relevance: "Chenab River connection — the river passes through the park. Snow Leopard habitat in J&K region. Less frequently asked than Dachigam but appears in biodiversity questions.",
    pyq_years: [],
    difficulty: "medium"
  },
  {
    id: "np_great_himalayan",
    name: "Great Himalayan National Park",
    type: "national-park",
    coordinates: { lat: 31.75, lng: 77.55 },
    region: "Himachal Pradesh",
    description: "UNESCO World Heritage Site (2014). Located in the Kullu district of HP. Protects the upper catchments of the Beas River and its tributaries. Unique because it includes four valleys and is rich in medicinal plants.",
    characteristics: [
      "UNESCO World Heritage Site — 2014",
      "Upper Beas River catchment protection",
      "Snow Leopard, Himalayan Brown Bear, Western Tragopan",
      "Western Tragopan = State Bird of HP (critically endangered)",
      "Rich in medicinal plants (over 800 plant species)",
      "Located in Kullu district"
    ],
    upsc_relevance: "UNESCO WHS status makes it high priority for UPSC. Western Tragopan = HP State Bird = critically endangered pheasant. Questions: 'Which NP in HP is a UNESCO World Heritage Site?' = Great Himalayan NP. Also asked as biodiversity hotspot for medicinal plants.",
    pyq_years: [2020, 2023],
    difficulty: "high-yield"
  },
  {
    id: "np_pin_valley",
    name: "Pin Valley National Park",
    type: "national-park",
    coordinates: { lat: 31.98, lng: 78.02 },
    region: "Himachal Pradesh",
    description: "Located in Lahaul-Spiti district. Cold desert NP in the Spiti Valley — the 'Land of Snow Leopards'. Part of the Cold Desert Biosphere Reserve. Pin River (a tributary of Spiti River) flows through it.",
    characteristics: [
      "Cold Desert Biosphere Reserve core zone",
      "Pin River tributary of Spiti River",
      "Snow Leopard prime habitat in HP",
      "Siberian Ibex, Tibetan Wolf",
      "Altitude: 3,500m to 6,000m",
      "Located in Spiti Valley — trans-Himalayan"
    ],
    upsc_relevance: "Cold Desert Biosphere Reserve — one of India's 18 Biosphere Reserves. Pin Valley is the core zone. Snow Leopard habitat. Trans-Himalayan ecosystem questions. Spiti River basin geography.",
    pyq_years: [2021],
    difficulty: "medium"
  },
  {
    id: "np_jim_corbett",
    name: "Jim Corbett National Park",
    type: "national-park",
    coordinates: { lat: 29.53, lng: 78.77 },
    region: "Uttarakhand",
    description: "India's oldest National Park (established 1936, originally Hailey National Park). First Tiger Reserve of India (1973, Project Tiger). Located in the Nainital district at the foothills of Himalayas meeting the Terai.",
    characteristics: [
      "India's OLDEST National Park — 1936",
      "FIRST Tiger Reserve under Project Tiger — 1973",
      "Ramganga River flows through the park",
      "Ecotone of Himalayas and Terai ecosystems",
      "Bengal Tiger, Asian Elephant, Mugger Crocodile",
      "Named after Jim Corbett — hunter-turned-conservationist"
    ],
    upsc_relevance: "Three direct MCQ facts: (1) Oldest NP = Jim Corbett (1936). (2) First Tiger Reserve = Jim Corbett (1973). (3) Ramganga River flows through it — rivers through NPs is very high frequency UPSC question. Ecotone concept. Jim Corbett the person — famous for man-eater books of Kumaon.",
    pyq_years: [2014, 2017, 2020, 2022],
    difficulty: "high-yield"
  },
  {
    id: "np_nanda_devi",
    name: "Nanda Devi National Park",
    type: "national-park",
    coordinates: { lat: 30.37, lng: 79.73 },
    region: "Uttarakhand",
    description: "UNESCO World Heritage Site (along with Valley of Flowers). Surrounds Nanda Devi peak (7,816m — highest peak entirely in India). Located in the transition zone between Zanskar and Great Himalayas. No permanent human habitation allowed.",
    characteristics: [
      "UNESCO World Heritage Site — 1988",
      "Nanda Devi peak (7,816m) — highest peak entirely within India",
      "Transition zone: Zanskar + Great Himalayan ranges",
      "Snow Leopard, Himalayan Brown Bear, Musk Deer",
      "Rishi Ganga River gorge — most inaccessible gorge",
      "No human habitation — fully protected core"
    ],
    upsc_relevance: "Nanda Devi = highest peak ENTIRELY within India (K2 is higher but PoK; Kanchenjunga is on border with Nepal). UNESCO WHS paired with Valley of Flowers — together they form one UNESCO site. Rishi Ganga gorge = one of world's most inaccessible. Alpine flora and fauna.",
    pyq_years: [2016, 2019, 2023],
    difficulty: "high-yield"
  },
  {
    id: "np_valley_of_flowers",
    name: "Valley of Flowers National Park",
    type: "national-park",
    coordinates: { lat: 30.73, lng: 79.61 },
    region: "Uttarakhand",
    description: "UNESCO World Heritage Site (combined with Nanda Devi NP). Located in the Chamoli district in the West Himalayan region. Famous for its outstanding natural beauty of endemic alpine flowers and diverse fauna including Snow Leopard.",
    characteristics: [
      "UNESCO World Heritage Site — 1988 (paired with Nanda Devi)",
      "Pushpawati River flows through the valley",
      "Over 600 species of endemic alpine flowers",
      "Himalayan Monal (State Bird of Uttarakhand) found here",
      "Open only June-October (snow-covered in winter)",
      "Located on route to Hemkund Sahib (Sikh pilgrimage)"
    ],
    upsc_relevance: "UNESCO WHS paired with Nanda Devi. Himalayan Monal (Danphe) = Uttarakhand State Bird and Nepal National Bird. Alpine biodiversity questions. Often asked with Valley of Flowers — what two NPs together form the UNESCO WHS in Uttarakhand? Answer: Valley of Flowers + Nanda Devi.",
    pyq_years: [2016, 2020],
    difficulty: "high-yield"
  },
  {
    id: "np_rajaji",
    name: "Rajaji National Park",
    type: "national-park",
    coordinates: { lat: 30.02, lng: 78.22 },
    region: "Uttarakhand",
    description: "Located at the foothills of the Shivaliks between Haridwar, Dehradun, and Pauri Garhwal districts. Elephant Reserve. Ganga, Rawasan, Suswa, Song, and Chilla rivers flow through it.",
    characteristics: [
      "Rajaji Tiger Reserve (also Elephant Reserve)",
      "Named after C. Rajagopalachari (Rajaji)",
      "Ganga River on eastern boundary",
      "Important elephant corridor to Corbett",
      "Shivalik foothills ecosystem",
      "Haridwar urban area adjacent"
    ],
    upsc_relevance: "Elephant corridor connectivity — Rajaji to Corbett forms a critical elephant movement corridor. Named after Rajaji (C. Rajagopalachari) — India's last Governor-General. Conflict zone — urban pressure from Haridwar. Tiger + Elephant reserve dual designation.",
    pyq_years: [2018],
    difficulty: "medium"
  },
  {
    id: "np_gangotri",
    name: "Gangotri National Park",
    type: "national-park",
    coordinates: { lat: 30.98, lng: 79.07 },
    region: "Uttarakhand",
    description: "Located in the Uttarkashi district. Protects the Gangotri Glacier — the source of the Ganga (Bhagirathi at origin). Important watershed protection area for India's most sacred river.",
    characteristics: [
      "Gangotri Glacier — source of River Ganga (Bhagirathi)",
      "Bhagirathi River originates from Gaumukh within the park",
      "Snow Leopard, Himalayan Brown Bear, Bharal",
      "Alpine and sub-alpine ecosystems",
      "Uttarkashi district, Garhwal Himalayas",
      "Includes Gaumukh (sacred cow-mouth glacier)"
    ],
    upsc_relevance: "Gangotri Glacier source of Ganga = extremely important for climate change questions (glacier retreating at alarming rate). Gaumukh = actual snout of Gangotri glacier from where Bhagirathi flows. Watershed protection and river origin geography.",
    pyq_years: [2021],
    difficulty: "medium"
  },
  {
    id: "np_govind",
    name: "Govind Pashu Vihar National Park",
    type: "national-park",
    coordinates: { lat: 31.11, lng: 78.21 },
    region: "Uttarakhand",
    description: "Located in the Uttarkashi district, bordering Himachal Pradesh. The Tons River (Yamuna's largest tributary) flows through it. Part of the upper Yamuna watershed.",
    characteristics: [
      "Tons River — largest tributary of Yamuna — flows through it",
      "Upper Yamuna watershed protection",
      "Snow Leopard, Himalayan Brown Bear",
      "Borders HP Great Himalayan NP",
      "Har-ki-Dun valley nearby — ancient hanging valley"
    ],
    upsc_relevance: "Tons River = largest tributary of Yamuna — tributary geography is frequently tested. Har-ki-Dun = beautiful valley known as 'Valley of Gods'. Watershed of upper Yamuna system.",
    pyq_years: [],
    difficulty: "low"
  },
  {
    id: "np_ranthambore",
    name: "Ranthambore National Park",
    type: "national-park",
    coordinates: { lat: 26.02, lng: 76.50 },
    region: "Rajasthan",
    description: "Located in the Sawai Madhopur district at the junction of Aravalli and Vindhya ranges. One of India's most famous Tiger Reserves. The Chambal and Banas rivers form its southern and northern boundaries.",
    characteristics: [
      "Bengal Tiger — famous for daytime sightings",
      "Ranthambore Fort (UNESCO WHS — Hill Forts of Rajasthan) inside the park",
      "Chambal River on southern boundary",
      "At junction of Aravalli and Vindhya ranges",
      "Tigers T-17 Machli, T-28 famous individuals",
      "Sariska Tiger reintroduction used Ranthambore tigers"
    ],
    upsc_relevance: "Ranthambore Fort is a UNESCO World Heritage Site (Hill Forts of Rajasthan, 2013) located INSIDE the national park — a unique combination. Chambal River boundary. Tiger reintroduction source — tigers from Ranthambore relocated to Sariska. Located at Aravalli-Vindhya junction.",
    pyq_years: [2015, 2018, 2022],
    difficulty: "high-yield"
  },
  {
    id: "np_sariska",
    name: "Sariska Tiger Reserve",
    type: "national-park",
    coordinates: { lat: 27.33, lng: 76.43 },
    region: "Rajasthan",
    description: "Located in the Alwar district in the Aravalli Hills. Became infamous when all tigers disappeared by 2004 due to poaching. First successful tiger reintroduction in 2008 using Ranthambore tigers — a landmark conservation achievement.",
    characteristics: [
      "FIRST successful tiger reintroduction in India — 2008",
      "Tigers completely disappeared by 2004 (poaching)",
      "Aravalli Hills ecosystem",
      "Neelkanth Temple (8th century) inside the park",
      "Pandupol Hanuman Temple inside",
      "Near Alwar — Rajasthan"
    ],
    upsc_relevance: "Tiger reintroduction success story = landmark conservation event. All tigers disappeared = conservation failure lesson. Then successfully reintroduced from Ranthambore = conservation success. First reintroduction in India. UPSC asks this as a conservation case study.",
    pyq_years: [2019, 2021],
    difficulty: "high-yield"
  },
  {
    id: "np_desert",
    name: "Desert National Park",
    type: "national-park",
    coordinates: { lat: 26.01, lng: 70.64 },
    region: "Rajasthan",
    description: "Located near Jaisalmer and Barmer — largest NP in India after Hemis. Represents the Thar Desert ecosystem. Most critical habitat for the Great Indian Bustard (GIB) — India's critically endangered bird.",
    characteristics: [
      "Largest NP in India after Hemis — 3,162 sq km",
      "Great Indian Bustard (GIB) — critically endangered",
      "Sam Sand Dunes ecosystem",
      "Fossil Park — Akal Fossil Park nearby (dinosaur era plants)",
      "Blackbuck, Desert Fox, Spiny-Tailed Lizard (Sanda)",
      "Jaisalmer district — Thar Desert"
    ],
    upsc_relevance: "Great Indian Bustard (GIB) = State Bird of Rajasthan + critically endangered = extremely high frequency. Power line collision with overhead wires killing GIBs = current affairs 2022-24 (Supreme Court case on underground vs overhead power lines in GIB habitat). Fossil Park = Akal Wood Fossil Park — Jurassic period. Second largest NP after Hemis.",
    pyq_years: [2017, 2020, 2023],
    difficulty: "high-yield"
  },
  {
    id: "np_keoladeo",
    name: "Keoladeo Ghana National Park",
    type: "national-park",
    coordinates: { lat: 27.17, lng: 77.52 },
    region: "Rajasthan",
    description: "UNESCO World Heritage Site (1985). Former royal duck-shooting reserve of Bharatpur. Man-made and man-managed wetland created by damming the Gambhir River. Globally critical wintering ground for migratory birds including the Siberian Crane.",
    characteristics: [
      "UNESCO World Heritage Site — 1985",
      "Ramsar Site — on Montreux Record (ecological concern)",
      "Man-made wetland — created by damming Gambhir River",
      "Wintering ground for 300+ bird species",
      "Siberian Crane last wintered here (2002 was last sighting)",
      "Confluence of Gambhir and Banganga rivers",
      "Formerly Bharatpur Bird Sanctuary"
    ],
    upsc_relevance: "UNESCO WHS + Ramsar Site + Montreux Record = triple designation — very unique and frequently tested combination. Siberian Crane extinction concern = conservation current affairs. Man-made wetland = Gambhir River dam. Gambhir + Banganga confluence. Was removed from Montreux Record and then re-added — conservation status changes tested.",
    pyq_years: [2013, 2017, 2020],
    difficulty: "high-yield"
  },
  {
    id: "np_mukundra",
    name: "Mukundra Hills (Darrah) National Park",
    type: "national-park",
    coordinates: { lat: 24.52, lng: 75.82 },
    region: "Rajasthan",
    description: "Located in the Kota district at the junction of Aravalli and Vindhya ranges. Tiger Reserve. Chambal River and its tributaries define the landscape. Recently received tigers from Ranthambore.",
    characteristics: [
      "Tiger Reserve — received tigers from Ranthambore",
      "At junction of Aravalli and Vindhya plateau",
      "Chambal River gorges nearby",
      "Historical — British-era hunting reserve",
      "Kota district — Rajasthan"
    ],
    upsc_relevance: "Chambal River landscape connection. Tiger translocation from Ranthambore. Aravalli-Vindhya junction geography.",
    pyq_years: [],
    difficulty: "low"
  },
  {
    id: "np_gir",
    name: "Gir National Park",
    type: "national-park",
    coordinates: { lat: 21.13, lng: 70.79 },
    region: "Gujarat",
    description: "Sole remaining natural habitat of the Asiatic Lion (Panthera leo persica) — the last wild population outside Africa. Located in the Junagadh district of Saurashtra peninsula. Dry deciduous Gir forest.",
    characteristics: [
      "ONLY natural habitat of Asiatic Lion in the world",
      "Asiatic Lion population: ~700+ (2020 census)",
      "Dry deciduous forest — Junagadh district, Saurashtra",
      "Hiran, Shingda, Datardi, Machhundri rivers",
      "Relocation debate to Kuno (Madhya Pradesh) — ongoing",
      "CDV (Canine Distemper Virus) killed 20+ lions in 2018"
    ],
    upsc_relevance: "Asiatic Lion = Gir, Gujarat = only population in world outside Africa. UPSC tests this almost every 2 years. CDV outbreak (2018) and relocation debate to Kuno NP (MP) = perennial current affairs. Population recovery success story. Supreme Court order to relocate some lions to Kuno for safety (genetic diversity). Lion vs Tiger = Gir vs Corbett distinction.",
    pyq_years: [2014, 2018, 2021, 2024],
    difficulty: "high-yield"
  },
  {
    id: "np_marine_gulf_kutch",
    name: "Marine National Park (Gulf of Kutch)",
    type: "national-park",
    coordinates: { lat: 22.57, lng: 69.22 },
    region: "Gujarat",
    description: "India's first Marine National Park (1982). Located in the Gulf of Kutch. Protects coral reefs, mangroves, and diverse marine life including Dugongs, sea turtles, and dolphins.",
    characteristics: [
      "India's FIRST Marine National Park — 1982",
      "Gulf of Kutch — Arabian Sea",
      "Coral reefs, mangroves, sea grass beds",
      "Dugong (Sea Cow), sea turtles, dolphins",
      "42 islands in the Gulf",
      "Important for tidal energy potential area"
    ],
    upsc_relevance: "First Marine National Park in India = Gulf of Kutch (NOT Gulf of Mannar which is in TN). This distinction is directly tested. Dugong (Sea Cow) habitat. Coral reef protection. Gulf of Kutch tidal energy potential.",
    pyq_years: [2016, 2019],
    difficulty: "high-yield"
  },
  {
    id: "np_blackbuck",
    name: "Blackbuck National Park (Velavadar)",
    type: "national-park",
    coordinates: { lat: 22.02, lng: 71.90 },
    region: "Gujarat",
    description: "Located in the Bhavnagar district on the Blackbuck grasslands (Bhal grasslands). Protects the highest density of Blackbuck in India. Also one of the last habitats of the Lesser Florican (critically endangered bustard).",
    characteristics: [
      "Highest density of Blackbuck in India",
      "Lesser Florican (critically endangered bustard) habitat",
      "Bhal grassland ecosystem",
      "Migratory Harriers (birds of prey) in winter",
      "Bhavnagar district, Saurashtra"
    ],
    upsc_relevance: "Lesser Florican = critically endangered bustard (related to Great Indian Bustard). Blackbuck = Indian Antelope = national animal of Gujarat? No — Blackbuck is the State Animal of Andhra Pradesh, Haryana, and Punjab. Important grassland ecosystem.",
    pyq_years: [2020],
    difficulty: "medium"
  },
  {
    id: "np_vansda",
    name: "Vansda National Park",
    type: "national-park",
    coordinates: { lat: 20.73, lng: 73.45 },
    region: "Gujarat",
    description: "Located in the Navsari district at the foothills of the Sahyadri (Western Ghats). Tropical moist deciduous forest. Important for biodiversity of South Gujarat.",
    characteristics: [
      "Sahyadri foothills — transition to Western Ghats",
      "Tropical moist deciduous forest",
      "Leopard, Sloth Bear",
      "Navsari district"
    ],
    upsc_relevance: "Southern Gujarat biodiversity. Western Ghats transition zone.",
    pyq_years: [],
    difficulty: "low"
  },
  {
    id: "np_kanha",
    name: "Kanha National Park",
    type: "national-park",
    coordinates: { lat: 22.33, lng: 80.61 },
    region: "Madhya Pradesh",
    description: "One of India's finest Tiger Reserves. Famous for saving the Hardground Barasingha (Swamp Deer, Rucervus duvaucelii branderi) from extinction — this subspecies exists ONLY in Kanha. Also the inspiration for Rudyard Kipling's 'The Jungle Book'.",
    characteristics: [
      "Saved Hardground Barasingha (Swamp Deer) from extinction",
      "Hardground Barasingha exists ONLY in Kanha",
      "Inspiration for Kipling's 'The Jungle Book'",
      "First Tiger Reserve to have an official mascot — Bhoorsingh the Barasingha",
      "Banjar River flows through the park",
      "Sal and Bamboo forests with grassy meadows (maidans)"
    ],
    upsc_relevance: "Hardground Barasingha saved from extinction = only subspecies found in Kanha. Jungle Book inspiration. First tiger reserve with official mascot. Banjar River flows through it. Sal + Bamboo + maidans = ecosystem description. High frequency question: 'Which NP is associated with saving the Hardground Barasingha?'",
    pyq_years: [2015, 2018, 2022],
    difficulty: "high-yield"
  },
  {
    id: "np_bandhavgarh",
    name: "Bandhavgarh National Park",
    type: "national-park",
    coordinates: { lat: 23.71, lng: 81.04 },
    region: "Madhya Pradesh",
    description: "Located in the Umaria district of Vindhya hills. Famous for having the highest density of Bengal Tigers per square kilometer in India. Historical Bandhavgarh Fort is inside the park (ruins of a 2,000+ year old fort).",
    characteristics: [
      "Highest tiger density per sq km in India",
      "Bandhavgarh Fort (ancient, 2000+ years old) inside the park",
      "White Tiger first discovered here (1951) — now in captivity",
      "Charanbhadra River flows through it",
      "Vindhya hills ecosystem"
    ],
    upsc_relevance: "Highest tiger density in India. White Tiger FIRST discovered at Bandhavgarh in 1951. Now all white tigers in India are descendants of Mohan (the original white tiger found here). Ancient fort inside national park. Tiger density data for UPSC statistics.",
    pyq_years: [2019, 2023],
    difficulty: "high-yield"
  },
  {
    id: "np_panna",
    name: "Panna National Park",
    type: "national-park",
    coordinates: { lat: 24.72, lng: 80.14 },
    region: "Madhya Pradesh",
    description: "Located on the Ken River (Ken-Betwa interlinking project area). Second successful tiger reintroduction in India after Sariska. All tigers had disappeared by 2009 and were successfully reintroduced by 2011. UNESCO Biosphere Reserve.",
    characteristics: [
      "Second successful tiger reintroduction in India — 2011",
      "Ken River flows through — Ken-Betwa project area",
      "UNESCO Biosphere Reserve",
      "Diamond mines nearby — Panna diamond fields",
      "Ken Gharial Sanctuary nearby",
      "Vindhya Plateau ecosystem"
    ],
    upsc_relevance: "Ken-Betwa river interlinking project — India's first river interlinking project = directly affects Panna NP. Concerns about tiger habitat flooding. Second tiger reintroduction (after Sariska = first). Diamond mines of Panna = India's only diamond mines. UNESCO Biosphere Reserve. Ken River gharial habitat.",
    pyq_years: [2020, 2023],
    difficulty: "high-yield"
  },
  {
    id: "np_pench",
    name: "Pench National Park",
    type: "national-park",
    coordinates: { lat: 21.72, lng: 79.28 },
    region: "Madhya Pradesh / Maharashtra",
    description: "Spread across Madhya Pradesh and Maharashtra (Seoni and Chhindwara districts in MP; Nagpur district in MH). The Pench River bisects the park. Also an inspiration for Kipling's Jungle Book — 'Seonee' hills.",
    characteristics: [
      "Spans two states — MP and Maharashtra",
      "Pench River bisects the park",
      "'Seonee' in Jungle Book — Seoni district is here",
      "Bengal Tiger, Leopard, Indian Wild Dog (Dhole)",
      "Teak forests dominate"
    ],
    upsc_relevance: "Cross-state NP = spans MP and Maharashtra. Pench River. Another Jungle Book connection. Dhole (Asiatic Wild Dog) habitat — endangered species. Often paired with Kanha in Tiger Reserve questions.",
    pyq_years: [2018],
    difficulty: "medium"
  },
  {
    id: "np_satpura",
    name: "Satpura National Park",
    type: "national-park",
    coordinates: { lat: 22.53, lng: 78.58 },
    region: "Madhya Pradesh",
    description: "Located in the Satpura Range of the Hoshangabad district. The Denwa River forms its boundary. Part of the Pachmarhi Biosphere Reserve (UNESCO). Tiger Reserve.",
    characteristics: [
      "UNESCO Pachmarhi Biosphere Reserve — core zone",
      "Denwa River on southern boundary",
      "Satpura Range — Vindhya-Satpura divide",
      "Tiger, Leopard, Indian Giant Squirrel",
      "Pachmarhi hill station nearby",
      "Narmada River watershed"
    ],
    upsc_relevance: "Pachmarhi Biosphere Reserve (UNESCO MAB) includes Satpura NP as core zone. Denwa River. Satpura Range geography — divides Deccan from North India. Pachmarhi = only hill station of MP = Queen of Satpura.",
    pyq_years: [2017],
    difficulty: "medium"
  },
  {
    id: "np_kuno",
    name: "Kuno National Park",
    type: "national-park",
    coordinates: { lat: 25.86, lng: 77.25 },
    region: "Madhya Pradesh",
    description: "Located in the Sheopur district. Originally prepared as second home for Gir lions but lions were not sent. In September 2022, 8 cheetahs from Namibia were introduced — India's first cheetah reintroduction after 70 years of extinction.",
    characteristics: [
      "African Cheetah reintroduction — September 2022",
      "8 Namibian cheetahs introduced first, then South African batch",
      "Originally planned as 2nd Asiatic Lion habitat (disputed in SC)",
      "Kuno River (Chambal tributary) flows through",
      "Khathiar-Gir dry deciduous forest type",
      "Sheopur district — near Rajasthan border"
    ],
    upsc_relevance: "HIGHEST PRIORITY for UPSC 2026. Cheetah reintroduction = most discussed wildlife story 2022-2025. Deaths of cheetahs in captivity = conservation challenges. Supreme Court case on Asiatic Lion relocation to Kuno. Cheetah Project India = Ministry of Environment. Kuno River = Chambal tributary geography. Questions: survival rates, deaths, reintroduction success/failure.",
    pyq_years: [2023, 2024],
    difficulty: "high-yield"
  },
  {
    id: "np_indravati",
    name: "Indravati National Park",
    type: "national-park",
    coordinates: { lat: 18.50, lng: 80.54 },
    region: "Chhattisgarh",
    description: "Located in the Bijapur district — very remote. The Indravati River (a Godavari tributary) borders it on the north. One of the last habitats of the Wild Buffalo (Bubalus arnee) in Central India.",
    characteristics: [
      "Wild Buffalo (Bubalus arnee) — last in Central India",
      "Indravati River (Godavari tributary) on northern border",
      "Tiger Reserve",
      "Very remote — Bastar region",
      "Mahua, Sal, Teak forests"
    ],
    upsc_relevance: "Wild Buffalo (Bubalus arnee) = India's largest wild bovid. Critically endangered. Indravati River = Godavari tributary = river hierarchy. Remote Bastar region — tribal area questions.",
    pyq_years: [2021],
    difficulty: "medium"
  },
  {
    id: "np_simlipal",
    name: "Simlipal National Park",
    type: "national-park",
    coordinates: { lat: 21.83, lng: 86.49 },
    region: "Odisha",
    description: "Located in the Mayurbhanj district. UNESCO Biosphere Reserve. Famous for its unique population of Melanistic Tigers (Black Tigers) — a genetic mutation found ONLY in Simlipal.",
    characteristics: [
      "Melanistic (Black) Tigers — found ONLY in Simlipal globally",
      "UNESCO Biosphere Reserve",
      "Barehipani Falls (400m) and Joranda Falls (150m)",
      "Sal forests of Odisha",
      "Elephant, Gaur, Mugger Crocodile",
      "Mayurbhanj district"
    ],
    upsc_relevance: "Black (Melanistic) Tigers = unique genetic mutation = ONLY found in Simlipal = extremely high probability for UPSC 2026. UNESCO Biosphere Reserve. Barehipani Waterfall = one of the tallest in India. Question: 'Which NP is known for Black Tigers?' = Simlipal.",
    pyq_years: [2022, 2024],
    difficulty: "high-yield"
  },
  {
    id: "np_bhitarkanika",
    name: "Bhitarkanika National Park",
    type: "national-park",
    coordinates: { lat: 20.75, lng: 86.94 },
    region: "Odisha",
    description: "Located at the mouth of the Brahmani and Baitarani rivers in the Bay of Bengal. Second largest mangrove ecosystem in India after Sundarbans. Largest Saltwater Crocodile (Crocodylus porosus) population in India.",
    characteristics: [
      "Second largest mangroves in India (after Sundarbans)",
      "Largest Saltwater Crocodile population in India",
      "Brahmani and Baitarani river delta",
      "Olive Ridley sea turtle mass nesting (Gahirmatha nearby)",
      "Ramsar Site",
      "Largest King Cobra population in Asia"
    ],
    upsc_relevance: "Saltwater Crocodile = world's largest reptile = Bhitarkanika = India's largest population. Second largest mangrove after Sundarbans. Ramsar Site. Brahmani-Baitarani delta geography. King Cobra. Adjacent to Gahirmatha — world's largest Olive Ridley mass nesting beach. River mouth delta geography.",
    pyq_years: [2017, 2021],
    difficulty: "high-yield"
  },
  {
    id: "np_sundarbans",
    name: "Sundarbans National Park",
    type: "national-park",
    coordinates: { lat: 21.95, lng: 88.89 },
    region: "West Bengal",
    description: "UNESCO World Heritage Site (1987). Part of the world's largest mangrove forest (shared with Bangladesh). Sundarbans Tiger Reserve. Famous for the Royal Bengal Tiger that has adapted to swimming between islands.",
    characteristics: [
      "UNESCO World Heritage Site — 1987",
      "World's largest mangrove forest (India + Bangladesh)",
      "Sundari tree (Heritiera fomes) gives Sundarbans its name",
      "Bengal Tiger swimming between salt-water islands",
      "Irrawaddy Dolphin, Gangetic Dolphin",
      "Ganga-Brahmaputra mega-delta"
    ],
    upsc_relevance: "UNESCO WHS 1987. World's largest mangrove = Sundarbans. Sundari tree etymology. Swimming tigers = unique adaptation. Rising sea level threat = climate change impact on Sundarbans = current affairs. Irrawaddy Dolphin found here. Tiger conservation in tidal mangrove = unique globally.",
    pyq_years: [2015, 2018, 2020, 2023],
    difficulty: "high-yield"
  },
  {
    id: "np_kaziranga",
    name: "Kaziranga National Park",
    type: "national-park",
    coordinates: { lat: 26.58, lng: 93.17 },
    region: "Assam",
    description: "UNESCO World Heritage Site (1985). Hosts approximately two-thirds of the world's Great One-horned Rhinoceroses. Located between the Brahmaputra River and Karbi Anglong hills. Major rivers: Brahmaputra, Mora Diphlu, Diphlu, Mora Dhansiri.",
    characteristics: [
      "UNESCO World Heritage Site — 1985",
      "2/3 of world's Great One-Horned Rhinoceros population (~2,613)",
      "Highest Tiger density in India — more per sq km than Corbett",
      "Brahmaputra, Mora Diphlu, Diphlu, Mora Dhansiri rivers",
      "Bengal Florican and Eastern Swamp Deer also present",
      "Annual Brahmaputra floods displace animals toward Karbi hills"
    ],
    upsc_relevance: "UNESCO WHS. 2/3 of world's rhino = most tested Kaziranga fact. Tiger density actually highest here despite Corbett's fame. Four river systems — river through NP questions. Annual flooding pattern = animals move to Karbi Anglong hills = human-wildlife conflict during floods. Bengali Florican (critically endangered). Poaching and anti-poaching measures.",
    pyq_years: [2013, 2016, 2019, 2022],
    difficulty: "high-yield"
  },
  {
    id: "np_manas",
    name: "Manas National Park",
    type: "national-park",
    coordinates: { lat: 26.75, lng: 91.03 },
    region: "Assam",
    description: "UNESCO World Heritage Site (1985). Biosphere Reserve. Tiger Reserve. Elephant Reserve. Located contiguous with Royal Manas National Park in Bhutan. Manas River (Brahmaputra tributary) bisects it.",
    characteristics: [
      "UNESCO World Heritage Site — 1985",
      "Biosphere Reserve (UNESCO MAB)",
      "Tiger + Elephant + Rhino Reserve — triple designation",
      "Contiguous with Royal Manas NP in Bhutan",
      "Manas River (Brahmaputra tributary) bisects",
      "Pygmy Hog (world's smallest pig), Hispid Hare, Golden Langur"
    ],
    upsc_relevance: "UNESCO WHS + UNESCO Biosphere Reserve + Tiger + Elephant Reserve = quadruple designation = highest profile NP. Pygmy Hog = world's smallest pig = ONLY found in Manas + Nameri (Assam). Hispid Hare = endangered. Golden Langur = state animal of Assam + endemic. Manas River = Brahmaputra tributary. Trans-boundary park with Bhutan.",
    pyq_years: [2014, 2018, 2021],
    difficulty: "high-yield"
  },
  {
    id: "np_namdapha",
    name: "Namdapha National Park",
    type: "national-park",
    coordinates: { lat: 27.50, lng: 96.40 },
    region: "Arunachal Pradesh",
    description: "India's easternmost National Park. Spans from tropical evergreen forests to alpine meadows — one of the greatest altitudinal variations in any NP. The Noa-Dihing River flows through it.",
    characteristics: [
      "Easternmost NP in India",
      "FOUR feline species: Tiger, Leopard, Snow Leopard, Clouded Leopard",
      "Greatest altitudinal variation — 200m to 4,500m",
      "Noa-Dihing River (Brahmaputra tributary)",
      "Hollock Gibbon (only ape in India), Hoolock Gibbon",
      "India's largest NP in NE India"
    ],
    upsc_relevance: "FOUR feline species in one NP = unique in world = direct UPSC question. Hoolock Gibbon = only ape native to India. Noa-Dihing River = Brahmaputra tributary. Easternmost NP. Altitudinal variation = tropical to alpine in single park = biodiversity significance.",
    pyq_years: [2017, 2021],
    difficulty: "high-yield"
  },
  {
    id: "np_keibul_lamjao",
    name: "Keibul Lamjao National Park",
    type: "national-park",
    coordinates: { lat: 24.50, lng: 93.80 },
    region: "Manipur",
    description: "THE WORLD'S ONLY FLOATING NATIONAL PARK. Located on Loktak Lake — India's largest freshwater lake in NE India. The park floats on Phumdis — heterogeneous mass of vegetation, soil, and organic matter.",
    characteristics: [
      "ONLY floating NP in the world",
      "Loktak Lake — largest freshwater lake in NE India",
      "Phumdis — floating biomass islands (unique to Loktak)",
      "Sangai (Brow-Antlered Deer / Dancing Deer) — State Animal of Manipur",
      "Sangai found ONLY in Keibul Lamjao",
      "ILP (Inner Line Permit) area"
    ],
    upsc_relevance: "MOST UNIQUE NP IN INDIA — floating + Phumdis + Sangai = three unique facts all tested. Sangai = State Animal of Manipur = endemic to Keibul Lamjao = critically endangered. Phumdis = floating heterogeneous mass = unique geographic feature. Loktak Lake = largest freshwater lake in NE India = Ramsar Site. All three facts can appear in same question.",
    pyq_years: [2015, 2019, 2022],
    difficulty: "high-yield"
  },
  {
    id: "np_khangchendzonga",
    name: "Khangchendzonga National Park",
    type: "national-park",
    coordinates: { lat: 27.69, lng: 88.15 },
    region: "Sikkim",
    description: "UNESCO Mixed Heritage Site (2016) — BOTH natural and cultural. India's first and only UNESCO 'Mixed Heritage' site. Surrounds Kanchenjunga, the world's third highest peak (8,586m) and highest peak in Indian territory.",
    characteristics: [
      "UNESCO MIXED Heritage Site — 2016 (natural + cultural)",
      "India's FIRST Mixed UNESCO World Heritage Site",
      "Kanchenjunga (8,586m) — 3rd highest peak in world",
      "Highest peak in Indian territory",
      "Snow Leopard, Red Panda, Tibetan Wolf",
      "Sacred sites of the Lepcha community"
    ],
    upsc_relevance: "UNESCO Mixed Heritage = Khangchendzonga = India's only Mixed WHS (natural + cultural aspects both). Kanchenjunga = 3rd highest globally = highest in sovereign Indian territory. Red Panda = State Animal of Sikkim. Sacred landscape for Lepcha tribe. Most likely 2026 UPSC question format: 'Which NP received UNESCO Mixed Heritage designation?'",
    pyq_years: [2017, 2021],
    difficulty: "high-yield"
  },
  {
    id: "np_silent_valley",
    name: "Silent Valley National Park",
    type: "national-park",
    coordinates: { lat: 11.13, lng: 76.43 },
    region: "Kerala",
    description: "Core of the Nilgiri Biosphere Reserve. Contains some of the most undisturbed tropical rainforest in India. The Kunthipuzha River (tributary of Bharathappuzha) flows through it. Saved from a hydroelectric project in 1984.",
    characteristics: [
      "Most undisturbed tropical rainforest in peninsular India",
      "Kunthipuzha River (Bharathappuzha tributary) flows through",
      "Lion-tailed Macaque — highest density",
      "Saved from Silent Valley Hydroelectric Project (1984) — conservation victory",
      "Nilgiri Biosphere Reserve core"
    ],
    upsc_relevance: "Silent Valley = first environmental movement victory in India (1973-1984). Hydroelectric project was cancelled due to public + Indira Gandhi intervention. Kunthipuzha River = Bharathappuzha tributary. Lion-tailed Macaque = flagship species. Conservation history questions.",
    pyq_years: [2015, 2019, 2022],
    difficulty: "high-yield"
  },
  {
    id: "np_eravikulam",
    name: "Eravikulam National Park",
    type: "national-park",
    coordinates: { lat: 10.18, lng: 77.06 },
    region: "Kerala",
    description: "Located in the Kannan Devan Hills (Munnar). Anamudi peak (2,695m) — highest peak in South India — is within this park. Nilgiri Tahr primary habitat. Famous for mass flowering of Neelakurinji (Strobilanthes kunthiana) every 12 years.",
    characteristics: [
      "Anamudi (2,695m) — HIGHEST peak in South India",
      "Nilgiri Tahr — primary habitat (endangered mountain ungulate)",
      "Neelakurinji blooms every 12 years — last bloom 2018, next 2030",
      "Periyar River origin area",
      "Kannan Devan Hills — Munnar tea plantations adjacent"
    ],
    upsc_relevance: "Anamudi = highest peak in South India = Eravikulam = Kerala = direct UPSC fact. Nilgiri Tahr = Eravikulam = primary stronghold. Neelakurinji = blooms every 12 years = 2018 bloom was major event = 2030 next = current affairs awareness. Periyar River origin.",
    pyq_years: [2017, 2021, 2024],
    difficulty: "high-yield"
  },
  {
    id: "np_clouded_leopard",
    name: "Clouded Leopard National Park",
    type: "national-park",
    coordinates: { lat: 23.55, lng: 91.62 },
    region: "Tripura",
    description: "India's smallest National Park (5.08 sq km). Located in Sipahijola, West Tripura. Named for the Clouded Leopard — the State Animal of Tripura. Adjacent to Sipahijola Wildlife Sanctuary.",
    characteristics: [
      "India's SMALLEST National Park — 5.08 sq km",
      "Clouded Leopard = State Animal of Tripura",
      "Sipahijola area, West Tripura",
      "Adjacent to Sipahijola WLS",
      "Phayre's Leaf Monkey also here"
    ],
    upsc_relevance: "India's smallest NP = Clouded Leopard NP in Tripura. Clouded Leopard = State Animal of Tripura. Smallest vs Largest (Hemis) = common comparison question. Phayre's Leaf Monkey = rare primate of NE India.",
    pyq_years: [2022],
    difficulty: "high-yield"
  },

 
  // ─────────────────────────────────────────
  // MISSING 17 NATIONAL PARKS (Completing 106)
  // ─────────────────────────────────────────
  {
    id: "np_khirganga",
    name: "Khirganga National Park",
    type: "national-park",
    coordinates: { lat: 32.08, lng: 77.48 },
    region: "Himachal Pradesh",
    description: "Located in the Kullu district in the upper Parvati Valley, bordering Pin Valley National Park. The Parvati River originates from the glaciers here. Adjacent to the famous Khir Ganga hot springs — a sacred pilgrimage site.",
    characteristics: [
      "Parvati River origin — major Beas tributary",
      "Khir Ganga hot springs — geothermal activity",
      "Snow Leopard, Himalayan Brown Bear, Musk Deer",
      "Borders Pin Valley NP — trans-Himalayan connectivity"
    ],
    upsc_relevance: "Parvati River originates here — Beas tributary river geography. Hot springs = geothermal activity in Himalayas. Connectivity between Great Himalayan NP (UNESCO WHS) and Pin Valley Cold Desert Biosphere Reserve.",
    pyq_years: [],
    difficulty: "low"
  },
  {
    id: "np_dinosaur_fossil",
    name: "Dinosaur Fossil National Park",
    type: "national-park",
    coordinates: { lat: 22.60, lng: 75.30 },
    region: "Madhya Pradesh",
    description: "Located in the Dhar district near Mandu. One of the few places in the world established specifically to protect dinosaur fossil deposits. The fossils are approximately 65–70 million years old (late Cretaceous period).",
    characteristics: [
      "India's ONLY fossil National Park",
      "Dinosaur fossils — 65-70 million years old (Cretaceous)",
      "Titanosaurus indicus fossils — giant sauropod dinosaur",
      "Narmada River valley — Dhar district",
      "Lameta Formation geological rock type"
    ],
    upsc_relevance: "Only fossil NP in India = Dhar, MP = direct UPSC unique fact. Titanosaurus indicus = sauropod dinosaur whose fossils found here = India's paleontology connection. Cretaceous period = 65-70 million years.",
    pyq_years: [2020],
    difficulty: "medium"
  },
  {
    id: "np_guru_ghasidas",
    name: "Guru Ghasidas (Sanjay) National Park",
    type: "national-park",
    coordinates: { lat: 23.62, lng: 82.68 },
    region: "Chhattisgarh",
    description: "Located in the Koriya and Surguja districts of northern Chhattisgarh, bordering Madhya Pradesh. Named after Guru Ghasidas — the founder of the Satnami sect. Contiguous with Sanjay NP in MP.",
    characteristics: [
      "Named after Guru Ghasidas — Satnami sect founder (social reformer)",
      "Contiguous with Sanjay NP (MP) — forms unified Tiger Reserve",
      "Rihand River (Son tributary) flows through",
      "Tiger, Leopard, Sloth Bear, Gaur"
    ],
    upsc_relevance: "Guru Ghasidas = Satnami sect reformer = social history connection. Contiguous with Sanjay NP (MP) = cross-state Tiger Reserve = largest Tiger Reserve in central India when combined. Rihand River = Son River tributary = river geography.",
    pyq_years: [],
    difficulty: "medium"
  },
  {
    id: "np_raimona",
    name: "Raimona National Park",
    type: "national-park",
    coordinates: { lat: 26.50, lng: 90.12 },
    region: "Assam",
    description: "Notified in 2021. Located in the Kokrajhar district — part of the Bodo Territorial Region. Contiguous with the Royal Manas NP in Bhutan. Famous for the Golden Langur.",
    characteristics: [
      "Golden Langur — State Animal of Assam — found ONLY here + Bhutan",
      "Contiguous with Royal Manas NP (Bhutan)",
      "Bodo Territorial Region — Kokrajhar district",
      "Champavati River flows through"
    ],
    upsc_relevance: "Newest NP (2021) = high UPSC 2026 probability. Golden Langur = State Animal of Assam = found ONLY in western Assam + Bhutan. Trans-boundary with Royal Manas (Bhutan). Bodo Territorial Region = constitutional autonomy.",
    pyq_years: [2022, 2023],
    difficulty: "high-yield"
  },
  {
    id: "np_dehing_patkai",
    name: "Dehing Patkai National Park",
    type: "national-park",
    coordinates: { lat: 27.42, lng: 95.68 },
    region: "Assam",
    description: "Notified in 2021. Called the 'Amazon of the East' for its dense tropical rainforest. Part of the Dehing Patkai Elephant Reserve. The Dehing River flows through it.",
    characteristics: [
      "Called 'Amazon of the East' — densest rainforest in India outside NE",
      "Dehing River (Brahmaputra tributary) flows through",
      "Hoolock Gibbon habitat — India's only ape",
      "White-winged Wood Duck — critically endangered",
      "Patkai Hills (India-Myanmar border range)"
    ],
    upsc_relevance: "Notified in 2021. 'Amazon of the East' = Dehing Patkai = direct UPSC fact. Coal mining controversy within elephant reserve = major 2020-21 controversy. Hoolock Gibbon (India's only ape). White-winged Wood Duck = critically endangered.",
    pyq_years: [2021, 2022, 2023],
    difficulty: "high-yield"
  },

  {
    id: "np_sirohi",
    name: "Sirohi National Park",
    type: "national-park",
    coordinates: { lat: 25.01, lng: 94.02 },
    region: "Manipur",
    description: "Located in the Senapati district of Manipur. Habitat for the endangered Eld's Deer (Thamin) in addition to the Sangai found in Keibul Lamjao.",
    characteristics: [
      "Eld's Deer (Thamin) habitat — endangered",
      "Senapati district — central Manipur hills",
      "Indo-Burma biodiversity hotspot",
      "Barak River watershed area"
    ],
    upsc_relevance: "Eld's Deer (Thamin) = endangered cervid of Manipur. Different from Sangai (Keibul Lamjao). Manipur has TWO rare deer species in different NPs. Indo-Burma biodiversity hotspot.",
    pyq_years: [],
    difficulty: "low"
  },
  {
    id: "np_nongkhyllem",
    name: "Nongkhyllem National Park",
    type: "national-park",
    coordinates: { lat: 25.97, lng: 91.97 },
    region: "Meghalaya",
    description: "Located in the Ri-Bhoi district of Meghalaya. Part of the Khasi Hills ecosystem. Nongkhyllem River flows through it.",
    characteristics: [
      "Ri-Bhoi district — Khasi Hills",
      "Nongkhyllem River flows through",
      "Hoolock Gibbon and Slow Loris habitat",
      "Slow Loris — only venomous primate in India"
    ],
    upsc_relevance: "Slow Loris = only venomous primate in India = Meghalaya. Hoolock Gibbon distribution. Ri-Bhoi district geography.",
    pyq_years: [],
    difficulty: "low"
  },
  {
    id: "np_sri_venkateswara",
    name: "Sri Venkateswara National Park",
    type: "national-park",
    coordinates: { lat: 13.68, lng: 79.35 },
    region: "Andhra Pradesh",
    description: "Located in the Chittoor district in the Eastern Ghats (Seshachalam Hills). Protects the forest surrounding the sacred Tirumala hills.",
    characteristics: [
      "Seshachalam Hills — Tirumala Tirupati area",
      "Indian Pangolin — most trafficked mammal",
      "Slender Loris — endangered nocturnal primate",
      "Red Sanders (Red Sandalwood) — endemic and highly trafficked"
    ],
    upsc_relevance: "Red Sanders (Pterocarpus santalinus) = endemic to Seshachalam Hills = highly smuggled. Indian Pangolin = most trafficked mammal globally. National Park surrounding holiest Hindu pilgrimage site. Slender Loris.",
    pyq_years: [2018, 2021],
    difficulty: "high-yield"
  },
  {
    id: "np_mrugavani",
    name: "Mrugavani National Park",
    type: "national-park",
    coordinates: { lat: 17.32, lng: 78.31 },
    region: "Telangana",
    description: "Located on the outskirts of Hyderabad city. One of India's very few urban national parks. Deccan Plateau scrub forest ecosystem.",
    characteristics: [
      "Urban NP on Hyderabad city outskirts",
      "Deccan Plateau scrub forest ecosystem",
      "Blackbuck, Hyena, Indian Fox",
      "Hard rock plateau terrain"
    ],
    upsc_relevance: "Urban NP adjacent to Hyderabad. Deccan Plateau scrub forest type. Urban wildlife conflict near tech hub city.",
    pyq_years: [],
    difficulty: "low"
  },
  {
    id: "np_guindy",
    name: "Guindy National Park",
    type: "national-park",
    coordinates: { lat: 13.00, lng: 80.23 },
    region: "Tamil Nadu",
    description: "Located within Chennai city — the SMALLEST National Park on the Indian mainland (2.82 sq km). Attached to the Raj Bhavan compound.",
    characteristics: [
      "SMALLEST National Park on Indian mainland — 2.82 sq km",
      "Located INSIDE Chennai city",
      "Adjacent to Tamil Nadu Raj Bhavan (Governor's House)",
      "Blackbuck — one of last urban populations"
    ],
    upsc_relevance: "SMALLEST NP on mainland India = Guindy, Chennai = 2.82 sq km. Located inside state capital city. Blackbuck in urban Chennai.",
    pyq_years: [2019, 2022],
    difficulty: "high-yield"
  },
  {
    id: "np_pampadum_shola_kerala",
    name: "Pampadum Shola National Park",
    type: "national-park",
    coordinates: { lat: 10.22, lng: 77.27 },
    region: "Kerala",
    description: "Located in the Idukki district. Smallest National Park in Kerala. Part of the Nilgiri Biosphere Reserve. Protects a shola forest patch.",
    characteristics: [
      "Smallest NP in Kerala — 1.32 sq km",
      "Shola forest — high-altitude tropical evergreen patches",
      "Nilgiri Biosphere Reserve core zone",
      "Pamba River origin area"
    ],
    upsc_relevance: "Smallest NP in Kerala. Shola forests = unique patchy evergreen forests in Western Ghats. Pamba River = holy river of Kerala.",
    pyq_years: [],
    difficulty: "medium"
  },
  {
    id: "np_anamudi_shola",
    name: "Anamudi Shola National Park",
    type: "national-park",
    coordinates: { lat: 10.15, lng: 77.15 },
    region: "Kerala",
    description: "Located in the Idukki district near Munnar. Protects three shola forest patches. Part of Nilgiri Biosphere Reserve.",
    characteristics: [
      "Three shola forest patches — Mankulam, Idukki, Devikulam",
      "Idukki district — Munnar region",
      "Nilgiri Tahr, Grizzled Squirrel",
      "Near Anamudi peak"
    ],
    upsc_relevance: "Part of the Nilgiri Biosphere Reserve cluster. Shola-grassland mosaic ecosystem. Nilgiri Tahr habitat. Highest South India peak connection.",
    pyq_years: [],
    difficulty: "medium"
  },
  {
    id: "np_mathikettan_shola",
    name: "Mathikettan Shola National Park",
    type: "national-park",
    coordinates: { lat: 10.08, lng: 77.23 },
    region: "Kerala",
    description: "Located in the Idukki district. Southernmost of the three Shola NPs in Kerala. Periyar River system originates from this high-altitude area.",
    characteristics: [
      "Southernmost Shola NP in Kerala",
      "Periyar River catchment area",
      "Lion-tailed Macaque habitat",
      "Nilgiri Biosphere Reserve core zone"
    ],
    upsc_relevance: "Periyar River origin. Lion-tailed Macaque = flagship species. Part of Kerala's cluster of 6 NPs.",
    pyq_years: [],
    difficulty: "medium"
  },


  {
    id: "np_tadoba",
    name: "Tadoba Andhari National Park",
    type: "national-park",
    coordinates: { lat: 20.35, lng: 79.32 },
    region: "Maharashtra",
    description: "Maharashtra's oldest and largest National Park. Located in Chandrapur district. Famous for its high Tiger density and the Tadoba Lake.",
    characteristics: [
      "Oldest and largest National Park in Maharashtra",
      "Tadoba Lake — perennial water source",
      "Andhari River flows through",
      "Teak and bamboo forests",
      "High density of Tigers and Sloth Bears"
    ],
    upsc_relevance: "Oldest NP of Maharashtra. Andhari River. Core area of Tadoba-Andhari Tiger Reserve. High tiger visibility.",
    pyq_years: [2018, 2022],
    difficulty: "high-yield"
  },
  // ─────────────────────────────────────────
  // SOUTHERN INDIA (KARNATAKA, TAMIL NADU, AP)
  // ─────────────────────────────────────────
  {
    id: "np_bandipur",
    name: "Bandipur National Park",
    type: "national-park",
    coordinates: { lat: 11.66, lng: 76.63 },
    region: "Karnataka",
    description: "Located in the Nilgiri Biosphere Reserve. Part of the Western Ghats UNESCO WHS. Known for its large population of Asian Elephants and Tigers.",
    characteristics: [
      "Nilgiri Biosphere Reserve core zone",
      "Kabini, Moyar, and Nugu rivers",
      "Tiger + Elephant stronghold",
      "Dry deciduous and moist deciduous forests"
    ],
    upsc_relevance: "Part of Nilgiri Biosphere Reserve. Ecological confluence of Eastern and Western Ghats. Kabini and Moyar rivers. Tigers and Elephants focus.",
    pyq_years: [2014, 2018, 2022],
    difficulty: "high-yield"
  },
  {
    id: "np_nagahole",
    name: "Nagarhole (Rajiv Gandhi) National Park",
    type: "national-park",
    coordinates: { lat: 12.03, lng: 76.16 },
    region: "Karnataka",
    description: "Located in the Kodagu and Mysore districts. Named after the Nagar (Snake) hole (Stream). Part of the Nilgiri Biosphere Reserve.",
    characteristics: [
      "Nagarhole River flows through it",
      "Kabini Reservoir separates it from Bandipur",
      "Jenu Kuruba and Koraga tribal groups indigenous",
      "Highest density of herbivores in Asia"
    ],
    upsc_relevance: "Nilgiri Biosphere Reserve. Kabini Reservoir = boundary between Nagarhole and Bandipur. Jenu Kuruba (Honey sweepers) tribe. High density of Gaur (Indian Bison).",
    pyq_years: [2017, 2021],
    difficulty: "high-yield"
  },
  {
    id: "np_bannerghatta",
    name: "Bannerghatta National Park",
    type: "national-park",
    coordinates: { lat: 12.78, lng: 77.58 },
    region: "Karnataka",
    description: "Located near Bengaluru. Includes a biological park with a pet corner, snake house, and safari park. Important elephant corridor.",
    characteristics: [
      "Urban NP near Bengaluru",
      "Country's first butterfly park inaugurated here (2006)",
      "Elephant corridor connectivity to Krishnagiri",
      "Mixed deciduous forests"
    ],
    upsc_relevance: "First Butterfly Park in India = Bannerghatta = direct UPSC fact. Urban biodiversity and human-elephant conflict corridor. Bengaluru connectivity.",
    pyq_years: [2020],
    difficulty: "medium"
  },
  {
    id: "np_kudremukh",
    name: "Kudremukh National Park",
    type: "national-park",
    coordinates: { lat: 13.21, lng: 75.25 },
    region: "Karnataka",
    description: "Located in the Chikkamagaluru district. Name means 'horse-face' — referring to a mountain peak. Known for its shola-grassland ecosystem.",
    characteristics: [
      "Shola-grassland mosaic of Western Ghats",
      "Tunga, Bhadra, and Netravati rivers originate here",
      "Lion-tailed Macaque and Malabar Giant Squirrel",
      "Iron ore mining controversy (KIOCL) led to SC ban"
    ],
    upsc_relevance: "Tunga, Bhadra, and Netravati river origins = critical river geography. Iron ore mining ban history = environmental landmark case in India. Shola forests.",
    pyq_years: [2016, 2023],
    difficulty: "high-yield"
  },
  {
    id: "np_anshi",
    name: "Anshi (Kali) National Park",
    type: "national-park",
    coordinates: { lat: 15.01, lng: 74.30 },
    region: "Karnataka",
    description: "Located in the Uttara Kannada district. Part of the Kali Tiger Reserve. Dense evergreen and semi-evergreen forests.",
    characteristics: [
      "Kali River flows through the park",
      "Black Panther sightings (rare color variant)",
      "Borders Bhagwan Mahaveer Sanctuary in Goa",
      "Western Ghats biodiversity hotspot"
    ],
    upsc_relevance: "Kali River = hydroelectric and biodiversity importance. Black Panther (melanistic leopard) location. Connectivity with Goa Goa's Mollem NP.",
    pyq_years: [2021],
    difficulty: "medium"
  },
  {
    id: "np_papikonda",
    name: "Papikonda National Park",
    type: "national-park",
    coordinates: { lat: 17.43, lng: 81.35 },
    region: "Andhra Pradesh",
    description: "Located on the banks of the Godavari River. Important Bird Area (IBA). Landscape dominated by the Papi Hills.",
    characteristics: [
      "Godavari River cuts through the Papi Hills here",
      "Polavaram project displacement concerns",
      "Royal Bengal Tiger and Leopard",
      "Riverine ecosystem with hill forests"
    ],
    upsc_relevance: "Godavari River geography — river passes through deep gorges in Papi Hills. Polavaram Irrigation Project = national project affecting NP. Riverine biodiversity.",
    pyq_years: [2022],
    difficulty: "medium"
  },
  {
    id: "np_rajiv_gandhi_rameswaram",
    name: "Rajiv Gandhi (Rameswaram) National Park",
    type: "national-park",
    coordinates: { lat: 14.75, lng: 78.50 },
    region: "Andhra Pradesh",
    description: "Located in the Kadapa district. Tropical dry deciduous forests. Named after the former PM.",
    characteristics: [
      "Kadapa district — heart of Rayalaseema",
      "Tropical dry deciduous forest",
      "Penneru River basin area",
      "Blackbuck and Chital"
    ],
    upsc_relevance: "Penneru River basin. Dry deciduous ecosystem of the Deccan. Blackbuck distribution in AP.",
    pyq_years: [],
    difficulty: "low"
  },
  {
    id: "np_gulf_mannar_marine",
    name: "Gulf of Mannar Marine National Park",
    type: "national-park",
    coordinates: { lat: 9.14, lng: 78.89 },
    region: "Tamil Nadu",
    description: "India's first Marine Biosphere Reserve and National Park. Located between Tuticorin and Dhanushkodi. Known for Dugongs (Sea Cows).",
    characteristics: [
      "UNESCO Biosphere Reserve",
      "Dugong (Sea Cow) — flagship marine species",
      "21 islands with coral reef ecosystems",
      "Sea grass beds — critical Dugong habitat"
    ],
    upsc_relevance: "Dugong (Sea Cow) = critically endangered = Gulf of Mannar = primary habitat. First Marine Biosphere Reserve in South Asia. Coral reef diversity.",
    pyq_years: [2016, 2019, 2022],
    difficulty: "high-yield"
  },
  {
    id: "np_indira_gandhi_annamalai",
    name: "Indira Gandhi (Annamalai) National Park",
    type: "national-park",
    coordinates: { lat: 10.42, lng: 77.03 },
    region: "Tamil Nadu",
    description: "Located in the Anaimalai Hills. Part of the Topslip tourism area. High altitudinal variation with shola forests.",
    characteristics: [
      "Anaimalai Hills (Elephant Hills)",
      "Topslip — famous gateway to the park",
      "Nilgiri Tahr and Lion-tailed Macaque",
      "Bamboo and Teak forests"
    ],
    upsc_relevance: "Anaimalai Hills geography. Nilgiri Tahr (endangered). Shola forest clusters in Anaimalais. Elephant conservation.",
    pyq_years: [2018],
    difficulty: "medium"
  },
  {
    id: "np_mudumalai",
    name: "Mudumalai National Park",
    type: "national-park",
    coordinates: { lat: 11.56, lng: 76.62 },
    region: "Tamil Nadu",
    description: "Located at the tri-junction of TN, Kerala, and Karnataka. Part of Nilgiri Biosphere Reserve. One of the oldest wildlife sanctuaries in India.",
    characteristics: [
      "Tri-junction of three states — TN, Kerala, Karnataka",
      "Moyar River flows through the park",
      "Nilgiri Biosphere Reserve core zone",
      "Asian Elephant and Bengal Tiger"
    ],
    upsc_relevance: "Tri-junction location. Moyar River. Connectivity with Bandipur (Karnataka) and Wayanad (Kerala) — forms the massive Nilgiri landscape.",
    pyq_years: [2019, 2023],
    difficulty: "high-yield"
  },
  {
    id: "np_mukkurthi",
    name: "Mukkurthi National Park",
    type: "national-park",
    coordinates: { lat: 11.23, lng: 76.53 },
    region: "Tamil Nadu",
    description: "Located in the Nilgiris district. High altitude shola-grassland ecosystem. Primarily established to protect the Nilgiri Tahr.",
    characteristics: [
      "Nilgiri Tahr protection area",
      "UNESCO World Heritage Site (Western Ghats cluster)",
      "High altitude peat bogs and shola forests",
      "Kunthipuzha River watershed"
    ],
    upsc_relevance: "Nilgiri Tahr (Tamil Nadu State Animal) = Mukkurthi. UNESCO WHS status. High altitude shola-grassland mosaic typical of Nilgiris.",
    pyq_years: [2021],
    difficulty: "high-yield"
  },
  {
    id: "np_kasu_brahmananda",
    name: "Kasu Brahmananda Reddy National Park",
    type: "national-park",
    coordinates: { lat: 17.42, lng: 78.41 },
    region: "Telangana",
    description: "Located in Jubilee Hills, Hyderabad. Urban national park named after former CM. Habitat for over 600 plant species.",
    characteristics: [
      "Jubilee Hills urban park — Hyderabad",
      "Chiran Palace located inside",
      "Peacocks and diverse birdlife",
      "Unique granite rock formations"
    ],
    upsc_relevance: "Urban NP in Hyderabad. Unique Deccan granite formations. Peacocks conservation in urban setup.",
    pyq_years: [],
    difficulty: "low"
  },
  {
    id: "np_mahavir_harina",
    name: "Mahavir Harina Vanasthali National Park",
    type: "national-park",
    coordinates: { lat: 17.35, lng: 78.58 },
    region: "Telangana",
    description: "Located in Vanasthalipuram, Hyderabad. Largest green lung of Hyderabad. Named after Lord Mahavira.",
    characteristics: [
      "Blackbuck population (State Animal of Telangana)",
      "Deer park and nature education center",
      "Mixed dry deciduous scrub forest",
      "History: former hunting ground of Nizams"
    ],
    upsc_relevance: "Blackbuck conservation in Telangana. Former Nizam hunting ground. Scrub forest ecosystem of central Deccan.",
    pyq_years: [2018],
    difficulty: "medium"
  },
  {
    id: "np_periyar",
    name: "Periyar National Park",
    type: "national-park",
    coordinates: { lat: 9.46, lng: 77.24 },
    region: "Kerala",
    description: "Located in the Cardamom Hills and Pandalam Hills. Elephant and Tiger Reserve. Centered around Periyar Lake (artificial reservoir).",
    characteristics: [
      "Periyar Lake — created by Mullaperiyar Dam (1895)",
      "Cardamom and Pandalam Hills",
      "Elephant and Tiger Reserve",
      "Nilgiri Tahr and Lion-tailed Macaque"
    ],
    upsc_relevance: "Mullaperiyar Dam controversy (Kerala vs TN) = affects Periyar Lake level. Asian Elephant habitat. Cardamom Hills geography. Nilgiri Tahr presence.",
    pyq_years: [2015, 2019, 2022],
    difficulty: "high-yield"
  },

  // ─────────────────────────────────────────
  // NORTHERN, EASTERN & CENTRAL INDIA (OUTLIERS)
  // ─────────────────────────────────────────
  {
    id: "np_dudhwa",
    name: "Dudhwa National Park",
    type: "national-park",
    coordinates: { lat: 28.52, lng: 80.62 },
    region: "Uttar Pradesh",
    description: "Located in the Lakhimpur Kheri district. Part of the Dudhwa Tiger Reserve. High density of Tiger and Swamp Deer.",
    characteristics: [
      "Terai ecosystem — marshes and grasslands",
      "Sharda River flows near the park",
      "Swamp Deer (Barasingha) and Tiger habitat",
      "One-horned Rhinoceros reintroduction site"
    ],
    upsc_relevance: "Terai ecosystem questions. Rhinoceros reintroduction focus (second outside Assam). Border with Nepal connectivity.",
    pyq_years: [2016, 2020],
    difficulty: "high-yield"
  },
  {
    id: "np_valmiki",
    name: "Valmiki National Park",
    type: "national-park",
    coordinates: { lat: 27.34, lng: 84.15 },
    region: "Bihar",
    description: "Bihar's only National Park. Located in the West Champaran district. Contiguous with Nepal's Chitwan National Park.",
    characteristics: [
      "Gandak River flows along the boundary",
      "Contiguous with Royal Chitwan NP (Nepal)",
      "Tiger, Leopard, Wild Dog (Dhole)",
      "Moist deciduous Terai forests"
    ],
    upsc_relevance: "Only NP in Bihar = Valmiki = direct UPSC fact. Gandak River = Ganga tributary. Cross-border conservation with Nepal.",
    pyq_years: [2021],
    difficulty: "medium"
  },
  {
    id: "np_betla",
    name: "Betla National Park",
    type: "national-park",
    coordinates: { lat: 23.88, lng: 84.18 },
    region: "Jharkhand",
    description: "Located in the Latehar and Palamu districts. One of the first tiger reserves in India (Palamu Tiger Reserve). Landscape of Chota Nagpur Plateau.",
    characteristics: [
      "North Koel River and its tributaries",
      "Palamu Tiger Reserve core zone",
      "Chota Nagpur Plateau ecosystem",
      "Sal and bamboo forests"
    ],
    upsc_relevance: "Palamu Tiger Reserve = one of the original 9 under Project Tiger (1973). North Koel River = Son tributary. Tribal heartland of Jharkhand.",
    pyq_years: [],
    difficulty: "medium"
  },
  {
    id: "np_mollem",
    name: "Mollem National Park",
    type: "national-park",
    coordinates: { lat: 15.36, lng: 74.21 },
    region: "Goa",
    description: "Located in the Western Ghats (Sanguem taluka). Protected area within the Bhagwan Mahaveer Sanctuary. Famous for Dudhsagar Falls.",
    characteristics: [
      "Dudhsagar Falls inside the sanctuary area",
      "Western Ghats evergreen forests",
      "Borders Anshi NP in Karnataka",
      "Development projects (Rail/Power) controversy"
    ],
    upsc_relevance: "Dudhsagar Falls (Sea of Milk) = famous milestone. Recent environmental protests against linear projects. Western Ghats biodiversity.",
    pyq_years: [2022],
    difficulty: "high-yield"
  },
  {
    id: "np_kalesar",
    name: "Kalesar National Park",
    type: "national-park",
    coordinates: { lat: 30.31, lng: 77.58 },
    region: "Haryana",
    description: "Located in the Yamunanagar district at the foothills of the Shivaliks. Yamuna River flows near its eastern boundary. Famous for Sal forests in Haryana.",
    characteristics: [
      "Largest National Park in Haryana",
      "Shivalik foothills ecosystem",
      "Yamuna River boundary",
      "Sal forest (unusual for this latitude)"
    ],
    upsc_relevance: "Shivalik foothills geography. Yamuna River boundary. Tiger and Elephant corridor from Rajaji (Uttarakhand).",
    pyq_years: [],
    difficulty: "low"
  },
  {
    id: "np_sultanpur",
    name: "Sultanpur National Park",
    type: "national-park",
    coordinates: { lat: 28.46, lng: 76.89 },
    region: "Haryana",
    description: "Located near Gurgaon. Famous bird sanctuary and Ramsar Site. Wintering ground for many migratory bird species.",
    characteristics: [
      "Ramsar Site (2021)",
      "Migratory birds: Siberian Crane, Greater Flamingo",
      "Urban proximity — near Delhi/Gurugram",
      "Pied Kingfisher and Purple Sunbird resident"
    ],
    upsc_relevance: "Ramsar Site status (2021). Bird migration patterns in North India. Urban conservation challenges.",
    pyq_years: [2019, 2022],
    difficulty: "medium"
  },
  {
    id: "np_balpakram",
    name: "Balpakram National Park",
    type: "national-park",
    coordinates: { lat: 25.42, lng: 90.87 },
    region: "Meghalaya",
    description: "Located in South Garo Hills. 'Land of perpetual winds'. Deep gorges and canyons. Sacred to the Garo tribe.",
    characteristics: [
      "Meghalaya's Grand Canyon topography",
      "Red Panda and Pitcher Plant (Nepenthes khasiana)",
      "Sacred to Garo tribe (abode of spirits)",
      "Part of Garo Hills Biosphere Reserve"
    ],
    upsc_relevance: "Red Panda habitat in NE. Pitcher Plant (Nepenthes khasiana) = endemic and insectivorous. Cultural geography of Garo tribe. Canyons ecosystem.",
    pyq_years: [2017, 2021],
    difficulty: "high-yield"
  },
  {
    id: "np_nokrek",
    name: "Nokrek Ridge National Park",
    type: "national-park",
    coordinates: { lat: 25.48, lng: 90.31 },
    region: "Meghalaya",
    description: "UNESCO Biosphere Reserve. Core area involves the Tura Range. Famous for the Citrus gene sanctuary.",
    characteristics: [
      "UNESCO Biosphere Reserve",
      "Citrus Gene Sanctuary — origin of Mother Citrus species",
      "Highest peak of Garo Hills (Nokrek Peak)",
      "Red Panda and Hoolock Gibbon"
    ],
    upsc_relevance: "Citrus Gene Sanctuary = direct UPSC fact on genetic resources. UNESCO MAB status. Nokrek Peak geography. Red Panda distribution.",
    pyq_years: [2014, 2018, 2023],
    difficulty: "high-yield"
  },
  {
    id: "np_murlen",
    name: "Murlen National Park",
    type: "national-park",
    coordinates: { lat: 23.62, lng: 93.30 },
    region: "Mizoram",
    description: "Located in the Champhai district. Known for its extremely dense forests — locals say even a sunray cannot penetrate.",
    characteristics: [
      "Subtropical semi-evergreen and sub-montane forests",
      "Bordering Chin Hills of Myanmar",
      "Hume's Pheasant (State Bird of Mizoram)",
      "Blyth's Tragopan and Hill Myna"
    ],
    upsc_relevance: "Hume's Pheasant = Mizoram State Bird. Trans-boundary Chin Hills ecosystem. Biodiversity hotspot of NE.",
    pyq_years: [],
    difficulty: "low"
  },
  {
    id: "np_phawngpui",
    name: "Phawngpui (Blue Mountain) National Park",
    type: "national-park",
    coordinates: { lat: 22.67, lng: 93.05 },
    region: "Mizoram",
    description: "Located on the highest peak of Mizoram (Phawngpui). Sacred to locals. Famous for rocky cliffs and rhododendrons.",
    characteristics: [
      "Highest peak in Mizoram (2,157m)",
      "Rhododendron and orchid diversity",
      "Mizoram's 'Blue Mountain'",
      "Blyth's Tragopan habitat"
    ],
    upsc_relevance: "Highest peak of Mizoram fact. Rhododendrons distribution in NE. Flora and fauna of Mizo hills.",
    pyq_years: [2021],
    difficulty: "medium"
  },
  {
    id: "np_intanki",
    name: "Intanki National Park",
    type: "national-park",
    coordinates: { lat: 25.58, lng: 93.50 },
    region: "Nagaland",
    description: "Located in the Peren district of Nagaland. Established by the British. High diversity of primates.",
    characteristics: [
      "Only National Park in Nagaland",
      "Hoolock Gibbon and Golden Langur",
      "Dhansiri River watershed",
      "Barail Range foothills"
    ],
    upsc_relevance: "Only NP in Nagaland fact. Hoolock Gibbon (India's only ape). Dhansiri River basin.",
    pyq_years: [2017],
    difficulty: "medium"
  },
  {
    id: "np_bison_rajbari",
    name: "Bison (Rajbari) National Park",
    type: "national-park",
    coordinates: { lat: 23.25, lng: 91.45 },
    region: "Tripura",
    description: "Located in the South Tripura district. Primary habitat for the Indian Gaur (Bison). Part of Trishna Wildlife Sanctuary.",
    characteristics: [
      "Indian Gaur (Bison) population",
      "Trishna Wildlife Sanctuary core",
      "Moist deciduous forests",
      "Bamboo and teak diversity"
    ],
    upsc_relevance: "Indian Gaur (Bison) focus. Tripura's biodiversity. One of the two NPs in the state.",
    pyq_years: [],
    difficulty: "low"
  },
  {
    id: "np_buxa",
    name: "Buxa National Park",
    type: "national-park",
    coordinates: { lat: 26.65, lng: 89.60 },
    region: "West Bengal",
    description: "Located in the Alipurduar district. Part of the Buxa Tiger Reserve. Border with Bhutan. Historical Buxa Fort inside.",
    characteristics: [
      "Buxa Fort — British-era prison",
      "Border with Bhutan — connection to Phibsoo WLS",
      "Tiger, Elephant, Clouded Leopard",
      "Dooars region ecosystem"
    ],
    upsc_relevance: "Buxa Fort history. Cross-border connectivity (Phibsoo, Bhutan). 'Dooars' gateway to NE India geography.",
    pyq_years: [2018, 2021],
    difficulty: "high-yield"
  },
  {
    id: "np_neora_valley",
    name: "Neora Valley National Park",
    type: "national-park",
    coordinates: { lat: 27.08, lng: 88.75 },
    region: "West Bengal",
    description: "Located in the Kalimpong district. Pristine virgin forest. Habitat of the Red Panda. Borders Sikkim and Bhutan.",
    characteristics: [
      "Pristine virgin forest — 'Valley of the Red Panda'",
      "Borders Sikkim's Pangolakha WLS and Bhutan",
      "Red Panda, Clouded Leopard, Musk Deer",
      "Rachela Pass (tri-junction of WB, Sikkim, Bhutan)"
    ],
    upsc_relevance: "Red Panda habitat. Rachela Pass tri-junction geography. Pristine forest ecosystem of North Bengal.",
    pyq_years: [2019, 2022],
    difficulty: "high-yield"
  },
  {
    id: "np_singalila",
    name: "Singalila National Park",
    type: "national-park",
    coordinates: { lat: 27.05, lng: 88.08 },
    region: "West Bengal",
    description: "Located in Darjeeling district. Famous for the Singalila Ridge trek. Provides a view of Kanchenjunga and Everest.",
    characteristics: [
      "Highest NP in West Bengal (Sandakphu peak)",
      "Red Panda population",
      "Rhododendron and Orchid forests",
      "Singalila Ridge — boundary between India and Nepal"
    ],
    upsc_relevance: "Sandakphu = highest peak of WB = Singalila NP. Red Panda conservation. Boundary with Nepal (Mechi River region).",
    pyq_years: [2021, 2023],
    difficulty: "high-yield"
  },
  {
    id: "np_jaldapara",
    name: "Jaldapara National Park",
    type: "national-park",
    coordinates: { lat: 26.68, lng: 89.35 },
    region: "West Bengal",
    description: "Located in Alipurduar district. Famous for the Great One-horned Rhinoceros (second largest population in India after Kaziranga). On the banks of Torsa River.",
    characteristics: [
      "Second largest One-horned Rhino population in India",
      "Torsa River flows through the park",
      "Riverine grasslands (Dooars)",
      "Asian Elephant and Bengal Tiger"
    ],
    upsc_relevance: "One-horned Rhinoceros population statistics. Torsa River basin. Dooars geography and riverine ecology.",
    pyq_years: [2020, 2022],
    difficulty: "high-yield"
  },
  {
    id: "np_gorumara",
    name: "Gorumara National Park",
    type: "national-park",
    coordinates: { lat: 26.78, lng: 88.85 },
    region: "West Bengal",
    description: "Located in the Jalpaiguri district. Primarily known for its population of Rhinos. Confluence of Murti and Jaldhaka rivers.",
    characteristics: [
      "Murti and Jaldhaka rivers catchment",
      "One-horned Rhinoceros conservation",
      "Dooars alluvial grasslands",
      "Gaur, Elephant, and Sloth Bear"
    ],
    upsc_relevance: "River confluence (Murti and Jaldhaka). Rhino conservation in North Bengal. Alluvial grassland ecosystems.",
    pyq_years: [],
    difficulty: "medium"
  },
  // ─────────────────────────────────────────
  // ANDAMAN & NICOBAR ISLANDS
  // ─────────────────────────────────────────
  {
    id: "np_campbell_bay",
    name: "Campbell Bay National Park",
    type: "national-park",
    coordinates: { lat: 7.00, lng: 93.90 },
    region: "Andaman & Nicobar Islands",
    description: "Located on Great Nicobar Island. Part of Great Nicobar Biosphere Reserve. Extremely remote and bio-diverse.",
    characteristics: [
      "Great Nicobar Biosphere Reserve core",
      "Andaman Giant Water Monitor and Coconut Crab",
      "Shompen and Nicobarese tribes nearby",
      "Proximity to Galathea Bay"
    ],
    upsc_relevance: "Southernmost NP of India area (Great Nicobar). Shompen tribe (PVTGs) connection. Coconut Crab (world's largest land arthropod).",
    pyq_years: [2018, 2023],
    difficulty: "high-yield"
  },
  {
    id: "np_galathea",
    name: "Galathea Bay National Park",
    type: "national-park",
    coordinates: { lat: 6.85, lng: 93.85 },
    region: "Andaman & Nicobar Islands",
    description: "Located on Great Nicobar Island. Famous nesting site for Giant Leatherback Turtles. Major developmental projects in the area (2023-24).",
    characteristics: [
      "Giant Leatherback Turtle — main nesting site in India",
      "Great Nicobar Development Project controversy",
      "Andaman and Nicobar megapodes",
      "Tropical evergreen and littoral forests"
    ],
    upsc_relevance: "Leatherback Turtles = world's largest sea turtle = Galathea nesting. Great Nicobar connectivity project = environmental clearance controversy 2023-2024 = high priority CA. Megapodes.",
    pyq_years: [2024],
    difficulty: "high-yield"
  },
  {
    id: "np_mg_marine",
    name: "Mahatma Gandhi Marine (Wandoor) National Park",
    type: "national-park",
    coordinates: { lat: 11.53, lng: 92.58 },
    region: "Andaman & Nicobar Islands",
    description: "Located near Wandoor. Protects coral reefs and sea turtles. Part of the Labyrinth Islands group.",
    characteristics: [
      "Coral reef and mangrove ecosystems",
      "Sea Turtle nesting (Leatherback, Hawksbill)",
      "Saltwater Crocodile habitat",
      "Famous for underwater biodiversity"
    ],
    upsc_relevance: "Coral reef conservation in India focus areas. Labyrinth Islands geography. Sea Turtle conservation (Leatherback, Hawksbill).",
    pyq_years: [2021],
    difficulty: "medium"
  },
  {
    id: "np_saddle_peak",
    name: "Saddle Peak National Park",
    type: "national-park",
    coordinates: { lat: 13.15, lng: 93.02 },
    region: "Andaman & Nicobar Islands",
    description: "Located in North Andaman. Surrounds Saddle Peak (732m), the highest point of the A&N Islands.",
    characteristics: [
      "Highest peak in A&N Islands (732m)",
      "Kalpong River — only river in A&N with a dam",
      "Andaman Wild Pig and Saltwater Crocodile",
      "Moist evergreen forests"
    ],
    upsc_relevance: "Highest point of A&N = Saddle Peak = North Andaman. Kalpong River = unique river with dam in archipelago. Forest type distribution.",
    pyq_years: [2017, 2022],
    difficulty: "high-yield"
  },
  {
    id: "np_north_button",
    name: "North Button Island National Park",
    type: "national-park",
    coordinates: { lat: 12.31, lng: 93.06 },
    region: "Andaman & Nicobar Islands",
    description: "Part of the Button Islands group. Excellent for coral diving. Protects marine biodiversity.",
    characteristics: [
      "Button Island group member",
      "Dolphins and Water Monitors",
      "Pristine coral systems",
      "Oceanic climate ecosystem"
    ],
    upsc_relevance: "Marine biodiversity in Button Islands group. Andaman sea connectivity.",
    pyq_years: [],
    difficulty: "low"
  },
  {
    id: "np_middle_button",
    name: "Middle Button Island National Park",
    type: "national-park",
    coordinates: { lat: 12.27, lng: 93.02 },
    region: "Andaman & Nicobar Islands",
    description: "Smallest island in the Button group. Important habitat for butterflies and birds. Protects coastal ecosystem.",
    characteristics: [
      "Part of A&N marine protected areas",
      "Sea turtles and diverse marine life",
      "Mangroves and littoral forest",
      "Butterfly diversity hotspot"
    ],
    upsc_relevance: "Marine protected area network in A&N. Sea turtle nesting on island beaches.",
    pyq_years: [],
    difficulty: "low"
  },
  {
    id: "np_south_button",
    name: "South Button Island National Park",
    type: "national-park",
    coordinates: { lat: 12.21, lng: 93.00 },
    region: "Andaman & Nicobar Islands",
    description: "India's smallest National Park (0.03 sq km). Located near Havelock. Famous for shallow coral reefs.",
    characteristics: [
      "Smallest National Park in India — 0.03 sq km",
      "Near Havelock Island (Swaraj Dweep)",
      "Dugongs, Snappers, and Sweetlips fish",
      "Core of coral reef conservation in A&N"
    ],
    upsc_relevance: "SMALLEST NP in India = South Button Island (0.03 sq km) = direct UPSC fact. Dugong sightings. Proximity to Havelock.",
    pyq_years: [2013, 2019, 2022],
    difficulty: "high-yield"
  },
  // ─────────────────────────────────────────
  // RESTORED ASSAM & NE OUTLIERS
  // ─────────────────────────────────────────
  {
    id: "np_nameri",
    name: "Nameri National Park",
    type: "national-park",
    coordinates: { lat: 26.93, lng: 92.83 },
    region: "Assam",
    description: "Located in the Sonitpur district. Part of the Nameri Tiger Reserve. Contiguous with Pakhui (Pakke) WLS in Arunachal Pradesh.",
    characteristics: [
      "Jia Bhoroli River flows through it",
      "White-winged Wood Duck habitat",
      "Contiguous with Pakke (Pakhui) Tiger Reserve (Arunachal)",
      "High density of butterflies and birds"
    ],
    upsc_relevance: "Jia Bhoroli River system. White-winged Wood Duck (State Bird of Assam) stronghold. Cross-border connectivity (Assam-Arunachal).",
    pyq_years: [2018],
    difficulty: "medium"
  },
  {
    id: "np_orang",
    name: "Orang National Park",
    type: "national-park",
    coordinates: { lat: 26.55, lng: 92.33 },
    region: "Assam",
    description: "Located on the northern bank of the Brahmaputra River. Often referred to as 'Mini Kaziranga' due to its population of One-horned Rhinoceros.",
    characteristics: [
      "Mini Kaziranga (Miniature Kaziranga)",
      "Brahmaputra River on southern boundary",
      "Great One-horned Rhinoceros and Tiger",
      "Alluvial grasslands and wetlands"
    ],
    upsc_relevance: "Northern bank of Brahmaputra. Rhinoceros population outside Kaziranga. Tiger reserve status.",
    pyq_years: [2021],
    difficulty: "high-yield"
  },
  {
    id: "np_dibru_saikhowa",
    name: "Dibru-Saikhowa National Park",
    type: "national-park",
    coordinates: { lat: 27.65, lng: 95.33 },
    region: "Assam",
    description: "Located in Tinsukia and Dibrugarh districts. UNESCO Biosphere Reserve. Famous for Feral Horses.",
    characteristics: [
      "UNESCO Biosphere Reserve",
      "Feral Horses (only wild horse population in India)",
      "Brahmaputra and Lohit rivers boundary",
      "Moist mixed semi-evergreen and deciduous forests"
    ],
    upsc_relevance: "UNESCO Biosphere Reserve. Feral Horses unique fact. Lohit and Dibru river systems. Largest salix swamp forest of NE India.",
    pyq_years: [2016, 2022],
    difficulty: "high-yield"
  },
  {
    id: "np_mandla_fossil",
    name: "Mandla Plant Fossils (Ghughua) National Park",
    type: "national-park",
    coordinates: { lat: 23.11, lng: 80.61 },
    region: "Madhya Pradesh",
    description: "Located in the Dindori/Mandla district. One of the few paleontology-focused NPs in India. Contains plant fossils ranging from 40-150 million years old.",
    characteristics: [
      "65 million year old plant fossils",
      "Ghughua Fossil Site",
      "Fossils of palms, gymnosperms, and angiosperms",
      "India's largest fossil park in terms of species count"
    ],
    upsc_relevance: "Plant fossil record of India. Gondwanaland flora evidence. Dindori/Mandla district geography.",
    pyq_years: [2020],
    difficulty: "medium"
  },
  {
    id: "np_mouling",
    name: "Mouling National Park",
    type: "national-park",
    coordinates: { lat: 28.50, lng: 94.75 },
    region: "Arunachal Pradesh",
    description: "Located in the Upper Siang district. Named after the Mouling Peak. Part of the Dihang-Dibang Biosphere Reserve.",
    characteristics: [
      "Dihang-Dibang Biosphere Reserve core",
      "Siyom River flows along the western boundary",
      "Red Panda and Takin (State Animal of Bhutan/Arunachal variant)",
      "High altitudinal variation"
    ],
    upsc_relevance: "Dihang-Dibang Biosphere Reserve. Siyom River. Biodiversity of the Brahmaputra canyon region. Takin distribution.",
    pyq_years: [2019],
    difficulty: "medium"
  }
,
  // ─────────────────────────────────────────
  // FINAL 11 PARKS (COMPLETING 106)
  // ─────────────────────────────────────────
  {
    id: "np_inderkilla",
    name: "Inderkilla National Park",
    type: "national-park",
    coordinates: { lat: 32.25, lng: 77.20 },
    region: "Himachal Pradesh",
    description: "Located in the Kullu district. Protects a wide variety of flora and fauna in the Himalayan region.",
    characteristics: [
      "Kullu district — Himachal Pradesh",
      "Part of the Western Himalayas",
      "Leopard, Brown Bear, and diverse birdlife",
      "High altitudinal variation"
    ],
    upsc_relevance: "One of the 5 National Parks in Himachal Pradesh. Biodiversity of the Western Himalayas.",
    pyq_years: [],
    difficulty: "low"
  },
  {
    id: "np_simbalbara",
    name: "Simbalbara National Park",
    type: "national-park",
    coordinates: { lat: 30.45, lng: 77.67 },
    region: "Himachal Pradesh",
    description: "Located in the Paonta Valley of Sirmaur district. Also known as Colonel Sher Jung National Park. Famous for its Sal forests.",
    characteristics: [
      "Located in Sirmaur district",
      "Colonel Sher Jung National Park designation",
      "Sal and bamboo forests",
      "Goral, Sambhar, and Spotted Deer"
    ],
    upsc_relevance: "Sirmaur district HP. Identity as Colonel Sher Jung NP. Unique Sal forest at this altitude.",
    pyq_years: [],
    difficulty: "medium"
  },
  {
    id: "np_kanger_valley",
    name: "Kanger Valley National Park",
    type: "national-park",
    coordinates: { lat: 18.88, lng: 82.02 },
    region: "Chhattisgarh",
    description: "Located near Jagdalpur. Named after the Kanger River. Famous for limestone caves and the Bastar Hill Myna.",
    characteristics: [
      "Kutumsar, Kailash, and Dandak limestone caves",
      "Bastar Hill Myna (State Bird of Chhattisgarh)",
      "Kanger River flows through",
      "Teak and bamboo forests"
    ],
    upsc_relevance: "Limestone caves (geology connection). Bastar Hill Myna (State Bird). Kanger River watershed.",
    pyq_years: [2018, 2022],
    difficulty: "high-yield"
  },
  {
    id: "np_madhav",
    name: "Madhav National Park",
    type: "national-park",
    coordinates: { lat: 25.50, lng: 77.70 },
    region: "Madhya Pradesh",
    description: "Located in the Shivpuri district. Was the hunting ground of Mughal emperors and Maharajas of Gwalior. Sakhya Sagar Lake is a Ramsar Site here.",
    characteristics: [
      "Sakhya Sagar Lake (Ramsar Site)",
      "George Castle located at highest point",
      "Historical hunting ground of Gwalior Royals",
      "Dry deciduous and thorn forests"
    ],
    upsc_relevance: "Sakhya Sagar Ramsar Site (2022). Historical Mughal-Royal connect. Shivpuri plateau geography.",
    pyq_years: [2023],
    difficulty: "medium"
  },
  {
    id: "np_sanjay_mp",
    name: "Sanjay National Park (MP)",
    type: "national-park",
    coordinates: { lat: 23.85, lng: 81.90 },
    region: "Madhya Pradesh",
    description: "Located in the Sidhi district. Part of the Sanjay-Dubri Tiger Reserve. Contiguous with Guru Ghasidas NP in Chhattisgarh.",
    characteristics: [
      "Contiguous with Guru Ghasidas (Chhattisgarh)",
      "Son River and its tributaries flow near",
      "Tiger and Leopard habitat",
      "Sal forests of Central India"
    ],
    upsc_relevance: "Cross-border continuity with Chhattisgarh. Son River basin. Part of the larger tiger landscape of MP.",
    pyq_years: [],
    difficulty: "medium"
  },
  {
    id: "np_van_vihar",
    name: "Van Vihar National Park",
    type: "national-park",
    coordinates: { lat: 23.23, lng: 77.37 },
    region: "Madhya Pradesh",
    description: "Located in the heart of Bhopal. Unique as it functions both as a traditional National Park and a modern Zoological Park. Borders the Upper Lake (Bhojtal).",
    characteristics: [
      "Borders Bhojtal (Upper Lake) — Ramsar Site",
      "Urban National Park in Bhopal",
      "In-situ and Ex-situ conservation mix",
      "Peacocks, Blue Bull, and diverse rescued wildlife"
    ],
    upsc_relevance: "Urban conservation (Bhopal). Connection to Bhojtal Ramsar Site. Unique management model.",
    pyq_years: [],
    difficulty: "low"
  },
  {
    id: "np_mount_harriet",
    name: "Mount Harriet (Mount Manipur) National Park",
    type: "national-park",
    coordinates: { lat: 11.72, lng: 92.73 },
    region: "Andaman & Nicobar Islands",
    description: "Highest point in South Andaman. Renamed to Mount Manipur in 2021 to honor Manipur's freedom fighters. Featured on the ₹20 banknote.",
    characteristics: [
      "Renamed to Mount Manipur (2021)",
      "Highest peak in South Andaman (383m)",
      "Featured on old ₹20 note (reverse side view)",
      "Andaman Wild Pig and Saltwater Crocodile"
    ],
    upsc_relevance: "Renaming fact (Mount Manipur) = tribute to freedom struggle. Currency note connection = direct trivia. Highest point in South Andaman.",
    pyq_years: [2022],
    difficulty: "high-yield"
  },
  {
    id: "np_rani_jhansi_marine",
    name: "Rani Jhansi Marine National Park",
    type: "national-park",
    coordinates: { lat: 11.83, lng: 92.90 },
    region: "Andaman & Nicobar Islands",
    description: "Located in the Ritchie's Archipelago. Named after Rani Lakshmibai. Protects coral reefs and marine ecosystems.",
    characteristics: [
      "Named after Rani Lakshmibai of Jhansi — freedom fighter",
      "Ritchie's Archipelago area",
      "Coral reef ecosystem protection",
      "Sea turtles, Dugong, Marine fish diversity"
    ],
    upsc_relevance: "Named after Rani Lakshmibai = connects history (1857 revolt) with environment. Ritchie's Archipelago geography. Marine NP in A&N cluster.",
    pyq_years: [2021],
    difficulty: "medium"
  },
  {
    id: "np_navegaon",
    name: "Navegaon National Park",
    type: "national-park",
    coordinates: { lat: 20.95, lng: 80.18 },
    region: "Maharashtra",
    description: "Located in the Gondia district. Part of the Navegaon-Nagzira Tiger Reserve. Centered around columns of Navegaon Lake.",
    characteristics: [
      "Navegaon-Nagzira Tiger Reserve",
      "Navegaon Lake — major birding destination",
      "Teak and mixed deciduous forest",
      "Leopard and Tiger habitat"
    ],
    upsc_relevance: "Tiger Reserve status. Gondia district geography. Bird diversity in Navegaon Lake.",
    pyq_years: [],
    difficulty: "medium"
  },
  {
    id: "np_gugamal",
    name: "Gugamal National Park",
    type: "national-park",
    coordinates: { lat: 21.43, lng: 77.12 },
    region: "Maharashtra",
    description: "Located in the Melghat Tiger Reserve area. Part of the Satpura Range. High density of Gaur (Indian Bison).",
    characteristics: [
      "Melghat Tiger Reserve core area",
      "Satpura Range mountains (Gavilegarh Hills)",
      "Tapi River flows on the northern boundary",
      "Teak forest dominant"
    ],
    upsc_relevance: "Melghat Tiger Reserve = first batch of Project Tiger (1973). Satpura Range (Gavilegarh Hills). Tapi River basin.",
    pyq_years: [2017, 2021],
    difficulty: "medium"
  },
  {
    id: "np_sanjay_gandhi",
    name: "Sanjay Gandhi (Borivali) National Park",
    type: "national-park",
    coordinates: { lat: 19.22, lng: 72.90 },
    region: "Maharashtra",
    description: "One of the few national parks located within a city limit (Mumbai). Famous for the ancient Kanheri Caves. High Leopard-human interaction zone.",
    characteristics: [
      "Kanheri Caves (1st century BC to 9th century AD) inside",
      "Urban NP in Mumbai",
      "Highest density of Leopards in an urban area globally",
      "Tulsi and Vihar lakes inside supplying water to Mumbai"
    ],
    upsc_relevance: "Kanheri Caves (Buddhism) = very high frequency art and culture question. Urban biodiversity and human-wildlife conflict. Tulsi/Vihar lakes.",
    pyq_years: [2014, 2018, 2022],
    difficulty: "high-yield"
  }



];

export const HIGH_PRIORITY_NPS_2026 = [
  "Kuno NP — Cheetah reintroduction (most current)",
  "Simlipal — Black/Melanistic Tigers (only location globally)",
  "Dehing Patkai NP — 'Amazon of East' + coal mining SC case (2021)",
  "Raimona NP — Golden Langur + 2021 notification",
  "Guindy NP — Smallest mainland NP + inside Chennai city",
  "Pakke NP — Hornbill Nest Adoption + Nyishi tribe model",
  "Sri Venkateswara NP — Red Sanders smuggling + Tirumala hills",
  "Dinosaur Fossil NP — Only fossil NP in India + Titanosaurus fossils",
  "Keibul Lamjao — World's only floating NP + Sangai deer",
  "Khangchendzonga — India's only UNESCO Mixed Heritage site",
  "Desert NP — Great Indian Bustard power line collision crisis",
  "Great Himalayan NP — UNESCO WHS in HP (2014)",
  "Keoladeo Ghana — UNESCO WHS + Ramsar + Montreux",
  "Kaziranga — 2/3 world rhinos; flooding dynamics",
  "Namdapha — 4 feline species + Hoolock Gibbon",
  "Punjab has NO NP — negative fact",
  "Gulf of Kutch Marine NP — First Marine NP in India",
  "Hemis — Largest NP in India",
  "Clouded Leopard NP, Tripura — Smallest NP in India",
  "Three Kerala Shola NPs — Unique shola-grassland ecosystem",
  "Rani Jhansi Marine NP — Named after freedom fighter (1857)"
];
