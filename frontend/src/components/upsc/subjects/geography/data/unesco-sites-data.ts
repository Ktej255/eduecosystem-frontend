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
  },
  {
    id: "unesco-rajasthan-forts",
    name: "Hill Forts of Rajasthan",
    type: "unesco-site", region: "Rajasthan",
    coordinates: { lat: 24.8829, lng: 74.6467 }, // Chittorgarh as focused node
    description: "Series of six majestic forts (Chittorgarh, Kumbhalgarh, Sawai Madhopur, Jhalawar, Jaipur, and Jaisalmer).",
    characteristics: [
      "Rajput military hill architecture",
      "Eclectic urban centers within forts",
      "Extensive water harvesting systems"
    ],
    upsc_relevance: "Rajput history, Rajputana architecture, and RAS state exams focal point.",
    pyq_years: [2016, 2022],
    difficulty: "high-yield"
  },
  {
    id: "unesco-western-ghats",
    name: "Western Ghats (UNESCO)",
    type: "unesco-site", region: "Multiple States",
    coordinates: { lat: 10.1500, lng: 77.0667 }, // Munnar/Anamudi area node
    description: "One of the world's eight 'hottest hotspots' of biological diversity.",
    characteristics: [
      "Older than the Himalayas",
      "Influences Indian monsoon weather patterns",
      "Home to at least 325 globally threatened species"
    ],
    upsc_relevance: "Biodiversity hotspots, Endemism, and Gadgil vs. Kasturirangan reports.",
    pyq_years: [2011, 2013, 2017, 2021],
    difficulty: "high-yield"
  },
  {
    id: "unesco-humayun-tomb",
    name: "Humayun's Tomb, Delhi",
    type: "unesco-site", region: "Delhi",
    coordinates: { lat: 28.5933, lng: 77.2507 },
    description: "The first garden-tomb on the Indian subcontinent, built for the Mughal Emperor Humayun.",
    characteristics: [
      "Charbagh (fourfold garden) layout",
      "Persian influenced architecture",
      "Inspiration for the Taj Mahal"
    ],
    upsc_relevance: "Evolution of Mughal architecture and Indo-Persian synthesis.",
    pyq_years: [2015, 2018],
    difficulty: "high-yield"
  },
  {
    id: "unesco-red-fort",
    name: "Red Fort Complex",
    type: "unesco-site", region: "Delhi",
    coordinates: { lat: 28.6562, lng: 77.2410 },
    description: "A 17th-century fort complex built by Shah Jahan following the shift of his capital from Agra.",
    characteristics: [
      "Zenith of Mughal creativity under Shah Jahan",
      "Yamuna riverbank placement",
      "Diwan-i-Aam and Diwan-i-Khas landmarks"
    ],
    upsc_relevance: "Shahjahanabad urban planning and Mughal peak architecture.",
    pyq_years: [2012, 2021],
    difficulty: "high-yield"
  },
  {
    id: "unesco-qutb-minar",
    name: "Qutb Minar and its Monuments",
    type: "unesco-site", region: "Delhi",
    coordinates: { lat: 28.5244, lng: 77.1855 },
    description: "A 73-meter high tower of victory and the Quwwat-ul-Islam Mosque.",
    characteristics: [
      "Built by Qutb-ud-din Aibak & Iltutmish",
      "Indo-Islamic architecture",
      "Iron Pillar of Mehrauli nearby (corrosion resistance)"
    ],
    upsc_relevance: "Delhi Sultanate architecture and early Islamic influence in India.",
    pyq_years: [2014, 2019],
    difficulty: "high-yield"
  },
  {
    id: "unesco-fatehpur-sikri",
    name: "Fatehpur Sikri",
    type: "unesco-site", region: "Uttar Pradesh",
    coordinates: { lat: 27.0911, lng: 77.6611 },
    description: "Accurately dubbed 'The City of Victory', briefly the capital of the Mughal Empire.",
    characteristics: [
      "Buland Darwaza - highest gateway in the world",
      "Tomb of Salim Chishti",
      "Panch Mahal and Jodha Bai's Palace"
    ],
    upsc_relevance: "Akbar's syncretic architectural style and administrative history.",
    pyq_years: [2012, 2020],
    difficulty: "high-yield"
  },
  {
    id: "unesco-ghnp",
    name: "Great Himalayan National Park",
    type: "unesco-site", region: "Himachal Pradesh",
    coordinates: { lat: 31.7300, lng: 77.5300 },
    description: "Characterized by high alpine peaks, alpine meadows and riverine forests.",
    characteristics: [
      "Critical high-altitude biodiversity hotspot",
      "Conservation of Western Himalayan endangered species",
      "Includes glacial and snow meltwater sources"
    ],
    upsc_relevance: "Himalayan ecology and UNESCO Natural site criteria (Criterion x).",
    pyq_years: [2014, 2021],
    difficulty: "medium"
  },
  {
    id: "unesco-victorian-mumbai",
    name: "Victorian Gothic and Art Deco Ensembles",
    type: "unesco-site", region: "Maharashtra",
    coordinates: { lat: 18.9298, lng: 72.8294 },
    description: "A collection of 19th-century Neo-Gothic public buildings and 20th-century Art Deco buildings.",
    characteristics: [
      "Oval Maidan as the central open space",
      "High Concentration of Art Deco buildings (2nd after Miami)",
      "Reflects the global trade hub status of Mumbai"
    ],
    upsc_relevance: "Colonial urbanism and global architectural trends in India.",
    pyq_years: [2018],
    difficulty: "medium"
  },
  {
    id: "unesco-jaipur",
    name: "Jaipur City, Rajasthan",
    type: "unesco-site", region: "Rajasthan",
    coordinates: { lat: 26.9220, lng: 75.8267 },
    description: "The fortified city of Jaipur, known for its grid-plan and pink facade.",
    characteristics: [
      "First planned city of medieval India",
      "Hawa Mahal and Jantar Mantar (UNESCO site inside UNESCO city)",
      "Synthesis of ancient Hindu and modern Mughal ideas"
    ],
    upsc_relevance: "Medieval urban planning and Rajput-Mughal collaboration.",
    pyq_years: [2019, 2023],
    difficulty: "high-yield"
  },
  {
    id: "unesco-ramappa",
    name: "Kakatiya Rudreshwara (Ramappa) Temple",
    type: "unesco-site", region: "Telangana",
    coordinates: { lat: 18.2611, lng: 79.9431 },
    description: "A 13th-century temple featuring 'floating bricks' and ornate carvings.",
    characteristics: [
      "Sandbox foundation technique",
      "Light-weight porous bricks (float on water)",
      "Kakatiya style architecture"
    ],
    upsc_relevance: "Medieval engineering, sandbox foundations, and recent UNESCO entry.",
    pyq_years: [2012, 2022],
    difficulty: "high-yield"
  },
  {
    id: "unesco-nalanda",
    name: "Archaeological Site of Nalanda Mahavihara",
    type: "unesco-site", region: "Bihar",
    coordinates: { lat: 25.1186, lng: 85.4439 },
    description: "An ancient Buddhist monastic university established in the 5th century CE.",
    characteristics: [
      "One of the earliest organized residential universities",
      "Staged evolution of Buddhist temple architecture",
      "Library of 'Dharmaganja' (Dharma Mart)"
    ],
    upsc_relevance: "Ancient Indian education, Buddhist philosophy, and Gupta/Pala history.",
    pyq_years: [2013, 2016, 2021],
    difficulty: "high-yield"
  },
  {
    id: "unesco-cst",
    name: "Chhatrapati Shivaji Terminus (Victoria Terminus)",
    type: "unesco-site", region: "Maharashtra",
    coordinates: { lat: 18.9402, lng: 72.8354 },
    description: "A historic railway station and the headquarters of the Central Railways.",
    characteristics: [
      "Victorian Italianate Gothic Revival architecture",
      "Fusion of traditional Indian palace architecture",
      "Symbol of late 19th-century terminal design"
    ],
    upsc_relevance: "Indo-Saracenic and Victorian Gothic styles in British India.",
    pyq_years: [2011],
    difficulty: "medium"
  },
  {
    id: "unesco-champaner",
    name: "Champaner-Pavagadh Archaeological Park",
    type: "unesco-site", region: "Gujarat",
    coordinates: { lat: 22.4833, lng: 73.5333 },
    description: "Concentration of largely unexcavated archaeological and cultural heritage properties.",
    characteristics: [
      "Pre-Mughal Islamic city planning",
      "Transition between Hindu and Muslim architecture",
      "Complex water management systems"
    ],
    upsc_relevance: "Sultanate architecture and medieval site preservation.",
    pyq_years: [2014],
    difficulty: "medium"
  },
  {
    id: "unesco-rani-ki-vav",
    name: "Rani-ki-Vav (Queen’s Stepwell)",
    type: "unesco-site", region: "Gujarat",
    coordinates: { lat: 23.8589, lng: 72.1025 },
    description: "A subterranean water management system featuring masterful craftsmanship.",
    characteristics: [
      "Maru-Gurjara architectural style",
      "Inverted temple design focusing on water",
      "Depicted on the ₹100 currency note"
    ],
    upsc_relevance: "Medieval water storage, Solanki dynasty, and cultural iconography.",
    pyq_years: [2014, 2021],
    difficulty: "high-yield"
  }
];
