import { GeoFeature } from './geo-types';

export const RAMSAR_SITES_DATA: GeoFeature[] = [
  // ══════════════════════════════════════════════════════════════════
  // THE RAMSAR WETLANDS OF INDIA (HIGH-YIELD MASTER LIST)
  // ══════════════════════════════════════════════════════════════════
  
  // --- PART 1: THE MONTREUX RECORD & HISTORIC SITES ---
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

  // --- PART 2: THE GEOLOGICAL & GEOGRAPHICAL EXTREMES ---
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

  // --- PART 3: HIGH-ALTITUDE & TRANS-BOUNDARY ---
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
    description: "A massive, high-altitude endorheic lake spanning India and China. (Note: Currently in process/proposed for Ramsar, but geographically critical).",
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

  // --- PART 4: MAN-MADE & CONFLUENCE WETLANDS ---
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
  }
];
