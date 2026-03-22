import { GeoFeature } from './geo-types';

export const TIGER_RESERVES_DATA: GeoFeature[] = [
  {
    id: "tr-jim-corbett",
    name: "Jim Corbett Tiger Reserve",
    type: "national-park", // Primary type is NP, but fits in Tiger layer
    region: "Uttarakhand",
    coordinates: { lat: 29.5300, lng: 78.7747 },
    description: "India's first tiger reserve (1973). Located in the foothills of the Himalayas.",
    characteristics: [
      "Project Tiger launch site",
      "High tiger density",
      "Ramganga river flows through it"
    ],
    upsc_relevance: "Historical significance of Project Tiger and river-park matching.",
    pyq_years: [2012, 2017, 2022],
    difficulty: "high-yield"
  },
  {
    id: "tr-kanha",
    name: "Kanha Tiger Reserve",
    type: "national-park",
    region: "Madhya Pradesh",
    coordinates: { lat: 22.3345, lng: 80.6115 },
    description: "The largest national park in Madhya Pradesh and a major tiger reserve.",
    characteristics: [
      "Known for Barasingha (Swamp Deer) conservation",
      "Inspiration for Rudyard Kipling's Jungle Book",
      "Central Indian Highlands landscape"
    ],
    upsc_relevance: "Fauna conservation (Barasingha) and cultural geography.",
    pyq_years: [2013, 2018],
    difficulty: "high-yield"
  },
  {
    id: "tr-bandhavgarh",
    name: "Bandhavgarh Tiger Reserve",
    type: "national-park",
    region: "Madhya Pradesh",
    coordinates: { lat: 23.6928, lng: 81.0264 },
    description: "Known for the highest density of Royal Bengal Tigers in India.",
    characteristics: [
      "Steep hills and mixed deciduous forests",
      "Ancient Bandhavgarh Fort is located here",
      "White tigers were first discovered in this region"
    ],
    upsc_relevance: "Tiger density statistics and historical intersections.",
    pyq_years: [2015, 2021],
    difficulty: "medium"
  },
  {
    id: "tr-ranthambore",
    name: "Ranthambore Tiger Reserve",
    type: "national-park",
    region: "Rajasthan",
    coordinates: { lat: 26.0173, lng: 76.5026 },
    description: "Famous for its diurnal tigers and the historic Ranthambore Fort.",
    characteristics: [
      "Located at the junction of Aravalli and Vindhya ranges",
      "Ancient fort is a UNESCO World Heritage site",
      "Padam Talao lake is a key water source"
    ],
    upsc_relevance: "Intersection of mountain ranges and historical heritage.",
    pyq_years: [2014, 2019, 2023],
    difficulty: "high-yield"
  },
  {
    id: "tr-kaziranga",
    name: "Kaziranga Tiger Reserve",
    type: "national-park",
    region: "Assam",
    coordinates: { lat: 26.5775, lng: 93.1703 },
    description: "UNESCO World Heritage Site. Holds the highest density of tigers among protected areas.",
    characteristics: [
      "Hosts two-thirds of the world's Great One-horned Rhinoceroses",
      "Brahmaputra river forms northern boundary",
      "Tall elephant grass and marshland ecosystem"
    ],
    upsc_relevance: "Biodiversity statistics and trans-boundary river dynamics.",
    pyq_years: [2012, 2016, 2021],
    difficulty: "high-yield"
  },
  {
    id: "tr-sunderbans",
    name: "Sunderbans Tiger Reserve",
    type: "national-park",
    region: "West Bengal",
    coordinates: { lat: 21.9444, lng: 88.8944 },
    description: "Largest mangrove forest global habitat for tigers. Tigers here are known for swimming and salt-water adaptability.",
    characteristics: [
      "Mangrove ecosystem (Sunda trees)",
      "Trans-boundary with Bangladesh",
      "Royal Bengal Tiger conservation"
    ],
    upsc_relevance: "Coastal geomorphology and climate change impact (sea-level rise).",
    pyq_years: [2011, 2020],
    difficulty: "high-yield"
  },
  {
    id: "tr-periyar",
    name: "Periyar Tiger Reserve",
    type: "national-park",
    region: "Kerala",
    coordinates: { lat: 9.4673, lng: 77.2393 },
    description: "Located high in the Cardamom Hills and Pandalam Hills of the southern Western Ghats.",
    characteristics: [
      "Artificial lake formed by Mullaperiyar Dam",
      "Elephant and Tiger reserve",
      "Rich in evergreen and semi-evergreen forests"
    ],
    upsc_relevance: "Interstate water disputes (Mullaperiyar) and Western Ghats ecology.",
    pyq_years: [2014, 2021],
    difficulty: "medium"
  },
  {
    id: "tr-sariska",
    name: "Sariska Tiger Reserve",
    type: "national-park",
    region: "Rajasthan",
    coordinates: { lat: 27.3297, lng: 76.4334 },
    description: "The first reserve in the world to successfully relocate tigers.",
    characteristics: [
      "Located in the Aravalli Hills",
      "Quartzite mountain peaks and dry deciduous forests",
      "Home to various historical monuments like Kankanwadi Fort"
    ],
    upsc_relevance: "Tiger relocation success stories and Aravalli geomorphology.",
    pyq_years: [2018],
    difficulty: "medium"
  },
  {
    id: "tr-panna",
    name: "Panna Tiger Reserve",
    type: "national-park",
    region: "Madhya Pradesh",
    coordinates: { lat: 24.6667, lng: 80.0000 },
    description: "Tiger population was completely lost and successfully reintroduced with Global Tiger Forum help.",
    characteristics: [
      "Located in the Vindhya range",
      "Ken river crosses the reserve",
      "Ken-Betwa river interlinking project impact"
    ],
    upsc_relevance: "River interlinking disputes and environmental impact assessments.",
    pyq_years: [2021, 2023],
    difficulty: "high-yield"
  },
  {
    id: "tr-melghat",
    name: "Melghat Tiger Reserve",
    type: "national-park",
    region: "Maharashtra",
    coordinates: { lat: 21.4300, lng: 77.1000 },
    description: "Located in the Satpura range. Among the first nine tiger reserves notified in 1973.",
    characteristics: [
      "Tapti river forms the northern boundary",
      "Gawilgarh hill range is a key feature",
      "Predominantly teak forests"
    ],
    upsc_relevance: "Satpura drainage and early Project Tiger history.",
    pyq_years: [2015],
    difficulty: "low"
  },
  {
    id: "tr-namdapha",
    name: "Namdapha Tiger Reserve",
    type: "national-park",
    region: "Arunachal Pradesh",
    coordinates: { lat: 27.4917, lng: 96.3833 },
    description: "Easternmost tiger reserve. Diverse altitudinal range from 200m to 4500m.",
    characteristics: [
      "Only park with four big cat species (Tiger, Leopard, Snow Leopard, Clouded Leopard)",
      "Hoolock Gibbon (India's only ape) habitat",
      "Tributary of Brahmaputra (Noa-Dihing) flows through it"
    ],
    upsc_relevance: "Biodiversity hotspot and altitude-based vegetation patterns.",
    pyq_years: [2013, 2020],
    difficulty: "high-yield"
  },
  {
    id: "tr-manas",
    name: "Manas Tiger Reserve",
    type: "national-park",
    region: "Assam",
    coordinates: { lat: 26.7000, lng: 90.9000 },
    description: "Contiguous with the Royal Manas National Park in Bhutan.",
    characteristics: [
      "UNESCO World Heritage Site",
      "Project Elephant and Biosphere Reserve",
      "Manas river flows through it"
    ],
    upsc_relevance: "Trans-boundary conservation and river systems.",
    pyq_years: [2014, 2019],
    difficulty: "medium"
  },
  {
    id: "tr-indravati",
    name: "Indravati Tiger Reserve",
    type: "national-park",
    region: "Chhattisgarh",
    coordinates: { lat: 18.9833, lng: 80.8167 },
    description: "Named after the Indravati river. Holds the last population of Wild Buffalo in the region.",
    characteristics: [
      "Tropical moist and dry deciduous forests",
      "Wild Buffalo (State animal of CG) habitat",
      "Naxalite-affected area (Security-related CA)"
    ],
    upsc_relevance: "Fauna conservation (Wild Buffalo) and regional security context.",
    pyq_years: [2016],
    difficulty: "low"
  },
  {
    id: "tr-duhwa",
    name: "Dudhwa Tiger Reserve",
    type: "national-park",
    region: "Uttar Pradesh",
    coordinates: { lat: 28.5167, lng: 80.6500 },
    description: "Located on the Indo-Nepal border in the Lakhimpur Kheri district. Part of the Terai region.",
    characteristics: [
      "Terai-Duar savanna and grasslands",
      "Sharda and Suheli rivers flow through",
      "Major population of Swamp Deer (Barasingha)"
    ],
    upsc_relevance: "Terai ecosystem and Indo-Nepal border context.",
    pyq_years: [2015, 2021],
    difficulty: "medium"
  },
  {
    id: "tr-sahyadri",
    name: "Sahyadri Tiger Reserve",
    type: "national-park",
    region: "Maharashtra",
    coordinates: { lat: 17.5000, lng: 73.8000 },
    description: "Includes Koyna Wildlife Sanctuary and Chandoli National Park.",
    characteristics: [
      "Located in the Sahyadri range of Western Ghats",
      "Source region of Krishna river tributaries",
      "Rich in endemic amphibians"
    ],
    upsc_relevance: "Western Ghats biodiversity and water resources.",
    pyq_years: [2022],
    difficulty: "low"
  },
  {
    id: "tr-sathyamangalam",
    name: "Sathyamangalam Tiger Reserve",
    type: "national-park",
    region: "Tamil Nadu",
    coordinates: { lat: 11.5000, lng: 77.2000 },
    description: "Crucial wildlife corridor connecting the Eastern and Western Ghats.",
    characteristics: [
      "Highest leopard density in TN",
      "Won the TX2 award for doubling tiger population",
      "Part of the Nilgiri Biosphere Reserve"
    ],
    upsc_relevance: "Corridor geography and international conservation awards (TX2).",
    pyq_years: [2021, 2023],
    difficulty: "high-yield"
  },
  {
    id: "tr-tiger-srivilliputhur",
    name: "Srivilliputhur-Megamalai Tiger Reserve",
    type: "national-park",
    region: "Tamil Nadu",
    coordinates: { lat: 9.6000, lng: 77.5000 },
    description: "India's 51st tiger reserve. Forms a continuous tiger corridor with Periyar.",
    characteristics: [
      "Important for Vaigai river catchment",
      "Grizzled Giant Squirrel habitat",
      "Sprawls across the Theni and Virudhunagar districts"
    ],
    upsc_relevance: "Newest entries in Project Tiger list (Highly testable).",
    pyq_years: [2021],
    difficulty: "high-yield"
  },
  {
    id: "tr-ramgarh-vishdhari",
    name: "Ramgarh Vishdhari Tiger Reserve",
    type: "national-park",
    region: "Rajasthan",
    coordinates: { lat: 25.5000, lng: 75.6000 },
    description: "India's 52nd tiger reserve. Acts as a buffer for Ranthambore.",
    characteristics: [
      "Connects Ranthambore with Mukundra Hills",
      "Mez river flows through it",
      "Rich biodiversity including Sloth Bear and Striped Hyena"
    ],
    upsc_relevance: "Recent designations and corridor connectivity in Rajasthan.",
    pyq_years: [2022],
    difficulty: "high-yield"
  },
  {
    id: "tr-ranipur",
    name: "Ranipur Tiger Reserve",
    type: "national-park",
    region: "Uttar Pradesh",
    coordinates: { lat: 25.1000, lng: 81.1000 },
    description: "India's 53rd tiger reserve. Located in the Bundelkhand region.",
    characteristics: [
      "Tropical dry deciduous forests",
      "Fourth tiger reserve in UP",
      "Crucial for tiger movement from Panna"
    ],
    upsc_relevance: "Bundelkhand region development and new conservation areas.",
    pyq_years: [2023],
    difficulty: "high-yield"
  },
  {
    id: "tr-dholpur-karauli",
    name: "Dholpur-Karauli Tiger Reserve",
    type: "national-park",
    region: "Rajasthan",
    coordinates: { lat: 26.5000, lng: 77.5000 },
    description: "India's 54th tiger reserve. Notified in late 2023.",
    characteristics: [
      "Chambal river ravine geography",
      "Critical for connecting tiger corridors in central India",
      "Fifth tiger reserve in Rajasthan"
    ],
    upsc_relevance: "Latest government notifications in Project Tiger.",
    pyq_years: [2024],
    difficulty: "high-yield"
  }
];
