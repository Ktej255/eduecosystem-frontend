import { GeoFeature } from './geo-types';

export const UNESCO_SITES_DATA: GeoFeature[] = [
  {
    id: "unesco-ajanta",
    name: "Ajanta Caves",
    type: "unesco-site",
    region: "Maharashtra",
    coordinates: { lat: 20.5519, lng: 75.7481 },
    description: "30 rock-cut Buddhist cave monuments dating from the 2nd century BCE to about 480 CE.",
    characteristics: [
      "Masterpieces of Buddhist religious art",
      "Frescos and paintings unique in Indian art",
      "Located in the Waghur River valley"
    ],
    upsc_relevance: "Buddhist architecture, Vakataka dynasty, and Ancient Indian art history.",
    pyq_years: [2011, 2015, 2021],
    difficulty: "high-yield"
  },
  {
    id: "unesco-ellora",
    name: "Ellora Caves",
    type: "unesco-site",
    region: "Maharashtra",
    coordinates: { lat: 20.0268, lng: 75.1772 },
    description: "One of the largest rock-cut monastery-temple cave complexes in the world.",
    characteristics: [
      "Buddhist, Hindu, and Jain monuments",
      "Kailasa Temple (Cave 16) - largest monolithic rock excavation",
      "Rashtrakuta dynasty patronage"
    ],
    upsc_relevance: "Religious synchronicity in ancient India and monolithic architecture.",
    pyq_years: [2013, 2019, 2022],
    difficulty: "high-yield"
  },
  {
    id: "unesco-hampi",
    name: "Group of Monuments at Hampi",
    type: "unesco-site",
    region: "Karnataka",
    coordinates: { lat: 15.3350, lng: 76.4600 },
    description: "The capital of the Vijayanagara Empire. Sprawling ruins along the Tungabhadra river.",
    characteristics: [
      "Dravidian style architecture",
      "Virupaksha Temple and Vitthala Temple",
      "Strategic defense based on rocky topography"
    ],
    upsc_relevance: "Vijayanagara Empire administration, architecture, and Tungabhadra geography.",
    pyq_years: [2012, 2018, 2023],
    difficulty: "high-yield"
  },
  {
    id: "unesco-khajuraho",
    name: "Khajuraho Group of Monuments",
    type: "unesco-site",
    region: "Madhya Pradesh",
    coordinates: { lat: 24.8318, lng: 79.9199 },
    description: "Known for their Nagara-style architectural symbolism and erotic sculptures.",
    characteristics: [
      "Chandela dynasty patronage",
      "Kandariya Mahadeva Temple",
      "Panchayatana layout of temples"
    ],
    upsc_relevance: "Nagara temple architecture and Chandela history.",
    pyq_years: [2014, 2021],
    difficulty: "high-yield"
  },
  {
    id: "unesco-konark",
    name: "Sun Temple, Konark",
    type: "unesco-site",
    region: "Odisha",
    coordinates: { lat: 19.8876, lng: 86.0945 },
    description: "A 13th-century Sun temple shaped like a gigantic chariot with 24 wheels.",
    characteristics: [
      "Kalinga architecture",
      "Built by King Narasimhadeva I (Eastern Ganga Dynasty)",
      "Known as the 'Black Pagoda'"
    ],
    upsc_relevance: "Kalinga school of architecture and dynastic history.",
    pyq_years: [2013, 2017, 2020],
    difficulty: "high-yield"
  },
  {
    id: "unesco-sanchi",
    name: "Buddhist Monuments at Sanchi",
    type: "unesco-site",
    region: "Madhya Pradesh",
    coordinates: { lat: 23.4792, lng: 77.7397 },
    description: "One of the oldest stone structures in India, commissioned by Emperor Ashoka.",
    characteristics: [
      "Great Stupa and its ornately carved Toranas (gateways)",
      "Narrative art depicting Jataka tales",
      "Evolution of Buddhist architecture"
    ],
    upsc_relevance: "Mauryan and Satavahana art, Buddhist philosophy, and iconography.",
    pyq_years: [2012, 2016, 2022],
    difficulty: "high-yield"
  },
  {
    id: "unesco-mahabalipuram",
    name: "Group of Monuments at Mahabalipuram",
    type: "unesco-site",
    region: "Tamil Nadu",
    coordinates: { lat: 12.6208, lng: 80.1945 },
    description: "Pallava dynasty coastal monuments including Rathas and Mandapas.",
    characteristics: [
      "Rock-cut Shore Temple",
      "Descent of the Ganges (bas-relief)",
      "Pancha Rathas (monolithic temples)"
    ],
    upsc_relevance: "Pallava art, maritime trade connections, and Dravidian style evolution.",
    pyq_years: [2015, 2021],
    difficulty: "high-yield"
  },
  {
    id: "unesco-kaziranga",
    name: "Kaziranga National Park (UNESCO)",
    type: "unesco-site",
    region: "Assam",
    coordinates: { lat: 26.5775, lng: 93.1703 },
    description: "A Natural World Heritage site famous for the One-horned Rhino.",
    characteristics: [
      "Biodiversity hotspot in the Brahmaputra valley",
      "Critical habitat for endangered species",
      "Significant ecological integrity"
    ],
    upsc_relevance: "Environment conservation and UNESCO natural site criteria.",
    pyq_years: [2012, 2021],
    difficulty: "medium"
  },
  {
    id: "unesco-dholavira",
    name: "Dholavira: A Harappan City",
    type: "unesco-site",
    region: "Gujarat",
    coordinates: { lat: 23.8875, lng: 70.2100 },
    description: "One of the most remarkable and well-preserved urban settlements in South Asia (IVC).",
    characteristics: [
      "Sophisticated water management system",
      "Unique three-tier city planning",
      "Discovery of the 'Signboard' with ten large symbols"
    ],
    upsc_relevance: "Indus Valley Civilization (IVC) urbanism and water engineering.",
    pyq_years: [2021, 2023],
    difficulty: "high-yield"
  },
  {
    id: "unesco-shantiniketan",
    name: "Santiniketan",
    type: "unesco-site",
    region: "West Bengal",
    coordinates: { lat: 23.6780, lng: 87.6890 },
    description: "Established by Rabindranath Tagore. A unique system of education based on nature.",
    characteristics: [
      "Visva-Bharati University",
      "Integration of tradition and modernism",
      "Focus on rural reconstruction and arts"
    ],
    upsc_relevance: "Modern Indian education, Tagore's philosophy, and recent UNESCO entries.",
    pyq_years: [2023],
    difficulty: "high-yield"
  },
  {
    id: "unesco-hoysala",
    name: "Sacred Ensembles of the Hoysalas",
    type: "unesco-site",
    region: "Karnataka",
    coordinates: { lat: 13.1610, lng: 75.9890 },
    description: "Temples at Belur, Halebid, and Somanathapura known for intricate soapstone carvings.",
    characteristics: [
      "Stellate (star-shaped) ground plans",
      "Extremely detailed miniature sculptures",
      "Vesara school of architecture"
    ],
    upsc_relevance: "Hoysala architecture, Vesara style, and latest UNESCO entries-2023.",
    pyq_years: [2023],
    difficulty: "high-yield"
  }
];
