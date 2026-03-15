import { GeoFeature } from './geo-types';

export const BIOSPHERE_RESERVES_DATA: GeoFeature[] = [
  // ══════════════════════════════════════════════════════════════════
  // THE BIOSPHERE RESERVES OF INDIA (COMPLETE MASTER LIST - 18 ITEMS)
  // ══════════════════════════════════════════════════════════════════
  
  // --- PART 1: THE 12 UNESCO MAB (MAN AND THE BIOSPHERE) RESERVES ---
  {
    id: "br-nilgiri",
    name: "Nilgiri Biosphere Reserve",
    type: "biosphere", region: "TN / Kerala / Karnataka",
    coordinates: { lat: 11.5500, lng: 76.5300 },
    difficulty: "high-yield",
    description: "India's FIRST Biosphere Reserve (1986) and first to join UNESCO MAB (2000). A massive tri-state ecological tri-junction in the Western Ghats.",
    characteristics: [
      "UNESCO MAB Network (2000)",
      "Core Zones: Bandipur, Nagarhole, Mudumalai, Mukurthi, Silent Valley NPs",
      "Flagship Fauna: Lion-tailed Macaque, Nilgiri Tahr",
      "Major Rivers: Bhavani, Moyar, Kabini"
    ],
    upsc_relevance: "Identifying which NPs are part of its core zone. Tri-state geography is a perennial Prelims favorite.",
    pyq_years: [2014, 2016, 2020]
  },
  {
    id: "br-gulf-of-mannar",
    name: "Gulf of Mannar Biosphere Reserve",
    type: "biosphere", region: "Tamil Nadu",
    coordinates: { lat: 9.2500, lng: 79.2000 },
    difficulty: "high-yield",
    description: "India's first marine biosphere reserve, extending from Rameswaram to Kanyakumari. Comprises 21 islands with estuaries, beaches, and coral reefs.",
    characteristics: [
      "UNESCO MAB Network (2001)",
      "Marine ecosystem: Coral reefs, seagrass beds, and mangroves",
      "Flagship Fauna: Dugong (Sea Cow)",
      "Located in the Gulf of Mannar (NOT Palk Strait)"
    ],
    upsc_relevance: "Dugong habitat and distinguishing its location from the Gulf of Kutch.",
    pyq_years: [2016, 2023]
  },
  {
    id: "br-sundarbans",
    name: "Sundarbans Biosphere Reserve",
    type: "biosphere", region: "West Bengal",
    coordinates: { lat: 21.9500, lng: 88.8900 },
    difficulty: "high-yield",
    description: "The largest contiguous mangrove forest in the world, located at the massive delta of the Ganga, Brahmaputra, and Meghna rivers.",
    characteristics: [
      "UNESCO MAB Network (2001)",
      "Flagship Fauna: Royal Bengal Tiger, Estuarine Crocodile",
      "Endemic Flora: Sundari tree (Heritiera fomes)",
      "Only mangrove forest in the world inhabited by tigers"
    ],
    upsc_relevance: "Mangrove adaptations (pneumatophores/breathing roots) and climate change threats (rising sea levels).",
    pyq_years: [2015, 2018, 2020]
  },
  {
    id: "br-nanda-devi",
    name: "Nanda Devi Biosphere Reserve",
    type: "biosphere", region: "Uttarakhand",
    coordinates: { lat: 30.3700, lng: 79.7300 },
    difficulty: "high-yield",
    description: "A high-altitude Himalayan reserve surrounding India's second-highest mountain. Includes the Valley of Flowers.",
    characteristics: [
      "UNESCO MAB Network (2004)",
      "Core Zones: Nanda Devi NP and Valley of Flowers NP",
      "Flagship Fauna: Snow Leopard, Himalayan Musk Deer, Himalayan Tahr",
      "Drainage: Rishi Ganga river gorge"
    ],
    upsc_relevance: "UNESCO Natural Heritage site connections and high-altitude alpine flora.",
    pyq_years: [2016, 2019]
  },
  {
    id: "br-nokrek",
    name: "Nokrek Biosphere Reserve",
    type: "biosphere", region: "Meghalaya",
    coordinates: { lat: 25.4600, lng: 90.4600 },
    difficulty: "medium",
    description: "Located in the Garo Hills. It is a vital genetic sanctuary for citrus fruits.",
    characteristics: [
      "UNESCO MAB Network (2009)",
      "Flagship Flora: Citrus indica (mother of all citrus fruits)",
      "Flagship Fauna: Red Panda, Hoolock Gibbon",
      "Major River: Simsang"
    ],
    upsc_relevance: "Wild citrus gene pool significance and Red Panda distribution outside the high Himalayas.",
    pyq_years: [2020]
  },
  {
    id: "br-pachmarhi",
    name: "Pachmarhi Biosphere Reserve",
    type: "biosphere", region: "Madhya Pradesh",
    coordinates: { lat: 22.5000, lng: 78.3300 },
    difficulty: "medium",
    description: "Located in the Satpura Range. Often referred to as the 'Queen of Satpura'.",
    characteristics: [
      "UNESCO MAB Network (2009)",
      "Core Zones: Satpura NP, Bori Sanctuary, Pachmarhi Sanctuary",
      "Flagship Fauna: Indian Giant Squirrel, Flying Squirrel",
      "Tribal Culture: Gond and Korku tribes"
    ],
    upsc_relevance: "Satpura geography (rift valley borders) and identifying the Indian Giant Squirrel habitat.",
    pyq_years: [2017]
  },
  {
    id: "br-simlipal",
    name: "Simlipal Biosphere Reserve",
    type: "biosphere", region: "Odisha",
    coordinates: { lat: 21.8300, lng: 86.4900 },
    difficulty: "high-yield",
    description: "A major reserve in the Mayurbhanj district, famous for its red soil and unique genetic mutations in its tiger population.",
    characteristics: [
      "UNESCO MAB Network (2009)",
      "Flagship Fauna: Melanistic (Black) Tigers, Asian Elephant",
      "Features massive waterfalls: Barehipani and Joranda"
    ],
    upsc_relevance: "The ONLY wild habitat of Melanistic tigers in the world.",
    pyq_years: [2022, 2024],
    in_news_24m: true,
    news_context: "Recurring massive forest fires in the Simlipal dry deciduous ecosystem have been a major ecological concern."
  },
  {
    id: "br-achanakmar-amarkantak",
    name: "Achanakmar-Amarkantak Biosphere Reserve",
    type: "biosphere", region: "Madhya Pradesh / Chhattisgarh",
    coordinates: { lat: 22.5500, lng: 81.7500 },
    difficulty: "high-yield",
    description: "Located at the junction of the Vindhya and Satpura ranges (Maikal Hills). A critical watershed for peninsular India.",
    characteristics: [
      "UNESCO MAB Network (2012)",
      "Origin of three major river systems: Narmada, Son, and Johila",
      "Radial drainage pattern",
      "Flagship Fauna: Four-horned antelope (Chousingha), Indian wild dog (Dhole)"
    ],
    upsc_relevance: "The concept of 'Radial Drainage' from the Amarkantak plateau is a highly tested geomorphology fact.",
    pyq_years: [2011, 2014]
  },
  {
    id: "br-great-nicobar",
    name: "Great Nicobar Biosphere Reserve",
    type: "biosphere", region: "Andaman & Nicobar Islands",
    coordinates: { lat: 7.0000, lng: 93.8300 },
    difficulty: "high-yield",
    description: "The southernmost biosphere reserve of India, encompassing the Campbell Bay and Galathea National Parks.",
    characteristics: [
      "UNESCO MAB Network (2013)",
      "Core Zones: Campbell Bay NP and Galathea NP",
      "Flagship Fauna: Saltwater Crocodile, Leatherback Sea Turtle, Nicobar Megapode",
      "Tribes: Shompen (PVTG) and Nicobarese"
    ],
    upsc_relevance: "Strategic geography (proximity to Malacca Strait) and PVTG (Particularly Vulnerable Tribal Groups) protections.",
    pyq_years: [2019, 2022],
    in_news_24m: true,
    news_context: "The controversial ₹72,000 crore Great Nicobar mega-infrastructure project involves deforestation of this pristine reserve and potential disruption of the uncontacted Shompen tribe."
  },
  {
    id: "br-agasthyamalai",
    name: "Agasthyamalai Biosphere Reserve",
    type: "biosphere", region: "Kerala / Tamil Nadu",
    coordinates: { lat: 8.6300, lng: 77.2500 },
    difficulty: "medium",
    description: "Located at the southern end of the Western Ghats. Known for exceptional endemism in flora.",
    characteristics: [
      "UNESCO MAB Network (2016)",
      "Core Zones: Neyyar, Peppara, and Shendurney sanctuaries, plus Kalakkad Mundanthurai TR",
      "Flagship Fauna: Nilgiri Tahr, Asian Elephant",
      "Tribe: Kanikaran (one of the oldest surviving hunter-gatherer tribes)"
    ],
    upsc_relevance: "Identifying specific sanctuaries within the reserve and its shared border between Kerala and TN.",
    pyq_years: [2018]
  },
  {
    id: "br-khangchendzonga",
    name: "Khangchendzonga Biosphere Reserve",
    type: "biosphere", region: "Sikkim",
    coordinates: { lat: 27.6900, lng: 88.1500 },
    difficulty: "high-yield",
    description: "One of the highest ecosystems in the world, surrounding the third highest mountain globally.",
    characteristics: [
      "UNESCO MAB Network (2018)",
      "India's ONLY 'Mixed' UNESCO World Heritage Site (Cultural + Natural)",
      "Flagship Fauna: Snow Leopard, Red Panda, Himalayan Tahr",
      "Sacred hidden land (Beyul) in Tibetan Buddhism"
    ],
    upsc_relevance: "The unique 'Mixed Heritage' status is an absolute favorite for UPSC.",
    pyq_years: [2017, 2021]
  },
  {
    id: "br-panna",
    name: "Panna Biosphere Reserve",
    type: "biosphere", region: "Madhya Pradesh",
    coordinates: { lat: 24.7200, lng: 80.1400 },
    difficulty: "high-yield",
    description: "Located in the Vindhya Range. The most recent Indian addition to the UNESCO MAB network.",
    characteristics: [
      "UNESCO MAB Network (2020) - The 12th and latest",
      "Flagship Fauna: Bengal Tiger, Sloth Bear",
      "River: Ken River flows through it"
    ],
    upsc_relevance: "Ken-Betwa river interlinking project and its environmental clearance issues.",
    pyq_years: [2020, 2023],
    in_news_24m: true,
    news_context: "The execution of the Ken-Betwa link is submerging a significant portion of the Panna core tiger habitat."
  },

  // --- PART 2: THE 6 DOMESTIC (NON-UNESCO) BIOSPHERE RESERVES ---
  {
    id: "br-manas",
    name: "Manas Biosphere Reserve",
    type: "biosphere", region: "Assam",
    coordinates: { lat: 26.7500, lng: 91.0300 },
    difficulty: "high-yield",
    description: "A heavily designated area at the foothills of the Bhutan Himalayas. Though a UNESCO Natural WHS, it is NOT in the UNESCO MAB network.",
    characteristics: [
      "Domestic BR (Not UNESCO MAB)",
      "Triple designation: Tiger Reserve, Elephant Reserve, and Biosphere Reserve",
      "Flagship Fauna: Pygmy Hog, Golden Langur, Hispid Hare"
    ],
    upsc_relevance: "UPSC Trap: Students often assume Manas is in the UNESCO MAB network because it is a UNESCO World Heritage Site. It is not.",
    pyq_years: [2014, 2021]
  },
  {
    id: "br-dibru-saikhowa",
    name: "Dibru-Saikhowa Biosphere Reserve",
    type: "biosphere", region: "Assam",
    coordinates: { lat: 27.6500, lng: 95.3200 },
    difficulty: "medium",
    description: "The SMALLEST Biosphere Reserve in India. Bounded by the Brahmaputra, Lohit, and Dibru rivers.",
    characteristics: [
      "Smallest BR in India by area (765 sq km)",
      "Flagship Fauna: Feral Horses, White-winged Wood Duck",
      "Largest salix swamp forest in north-eastern India"
    ],
    upsc_relevance: "Smallest BR fact, and the presence of feral horses.",
    pyq_years: [2016]
  },
  {
    id: "br-dihang-dibang",
    name: "Dihang-Dibang Biosphere Reserve",
    type: "biosphere", region: "Arunachal Pradesh",
    coordinates: { lat: 28.9500, lng: 94.9500 },
    difficulty: "medium",
    description: "A massive, rugged, high-altitude reserve in the Eastern Himalayas covering the Mouling NP and Dibang Wildlife Sanctuary.",
    characteristics: [
      "Domestic BR",
      "Flagship Fauna: Mishmi Takin, Red Goral, Musk Deer",
      "Vast altitudinal variation (tropical to alpine)"
    ],
    upsc_relevance: "Mishmi Takin endemism.",
    pyq_years: []
  },
  {
    id: "br-cold-desert",
    name: "Cold Desert Biosphere Reserve",
    type: "biosphere", region: "Himachal Pradesh",
    coordinates: { lat: 32.2500, lng: 77.9500 },
    difficulty: "high-yield",
    description: "Encompasses the trans-Himalayan region. Includes Pin Valley NP, Chandratal, Sarchu, and Kibber wildlife sanctuaries.",
    characteristics: [
      "Domestic BR",
      "Flagship Fauna: Snow Leopard, Himalayan Ibex, Tibetan Wolf",
      "Ecosystem: Trans-Himalayan arid cold desert"
    ],
    upsc_relevance: "Identifying Cold Desert ecology components (Pin Valley).",
    pyq_years: [2021]
  },
  {
    id: "br-kutch",
    name: "Kachchh Biosphere Reserve",
    type: "biosphere", region: "Gujarat",
    coordinates: { lat: 23.8500, lng: 70.4000 },
    difficulty: "high-yield",
    description: "The LARGEST Biosphere Reserve in India. Comprises the vast saline mudflats of the Great Rann and Little Rann of Kutch.",
    characteristics: [
      "Largest BR in India by area (12,454 sq km)",
      "Flagship Fauna: Indian Wild Ass (Equus hemionus khur), Greater Flamingo",
      "Unique seasonal saline marsh ecosystem"
    ],
    upsc_relevance: "Largest BR fact, and the exclusive habitat of the Indian Wild Ass in the Little Rann.",
    pyq_years: [2017, 2020]
  },
  {
    id: "br-seshachalam",
    name: "Seshachalam Hills Biosphere Reserve",
    type: "biosphere", region: "Andhra Pradesh",
    coordinates: { lat: 13.6800, lng: 79.3500 },
    difficulty: "medium",
    description: "The first Biosphere Reserve in Andhra Pradesh, covering parts of the Eastern Ghats in Chittoor and Kadapa districts.",
    characteristics: [
      "Domestic BR",
      "Flagship Flora: Red Sandalwood (Pterocarpus santalinus) - highly endemic",
      "Flagship Fauna: Slender Loris, Golden Gecko",
      "Tirupati temple is located within these hills"
    ],
    upsc_relevance: "Endemism of Red Sanders (highly smuggled, CITES Appendix II).",
    pyq_years: [2016, 2021]
  }
];
