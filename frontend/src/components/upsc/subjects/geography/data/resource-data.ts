import { ResourceDeposit, MineralBelt } from './resource-types';

export const MINERAL_BELTS: MineralBelt[] = [
  {
    id: 'chotanagpur',
    name: 'Chotanagpur Plateau Belt',
    description: 'The mineral heartland of India. Extends over Jharkhand, Odisha, West Bengal, and Chhattisgarh. Exceptionally rich in Gondwana coal and high-grade Iron Ore.',
    primary_resources: ['Coal', 'Iron Ore', 'Mica', 'Bauxite', 'Copper'],
    upsc_relevance: 'Accountable for nearly 100% of Kyanite, 93% Iron Ore, and 84% Coal. The "Ruhr of India".',
    path: [[83, 21], [86, 21], [88, 23.5], [86, 25], [83, 23]] // Rough Polygon over Jharkhand/Odisha
  },
  {
    id: 'dharwar',
    name: 'Dharwar Rock System (Southern Belt)',
    description: 'Ancient metamorphic rocks found predominantly in Karnataka, Andhra Pradesh, and Tamil Nadu. Famous for gold and high-grade ferrous minerals.',
    primary_resources: ['Iron Ore', 'Gold', 'Manganese', 'Bauxite'],
    upsc_relevance: 'The Dharwar system is the most economically important rock system in India. (Kolar Gold Fields, Kudremukh Iron).',
    path: [[74, 13], [78, 13], [78, 17], [74, 16]] // Rough Polygon Karnataka/AP/TN region
  },
  {
    id: 'central-belt',
    name: 'Central Belt',
    description: 'Stretches over Madhya Pradesh, Chhattisgarh, and Maharashtra. A major source of Manganese, Bauxite, and Coal.',
    primary_resources: ['Manganese', 'Bauxite', 'Coal', 'Limestone', 'Marble'],
    upsc_relevance: 'Contains the famous Malanjkhand copper mines, Balaghat manganese, and Bailadila iron ore.',
    path: [[78, 19], [83, 19], [83, 24], [78, 24]] // MP / Chhattisgarh
  },
  {
    id: 'north-western',
    name: 'North-Western Belt',
    description: 'Covers the regions of Rajasthan and Gujarat along the Aravalis. Primarily non-ferrous minerals and energy resources (petroleum).',
    primary_resources: ['Copper', 'Zinc', 'Lead', 'Petroleum', 'Salt'],
    upsc_relevance: 'Known for Dharwar rocks in Aravalis containing Copper (Khetri) and Zinc/Lead (Zawar), plus Tertiary marine deposits yielding petroleum in Gujarat.',
    path: [[70, 22], [76, 22], [76, 28], [70, 28]] // Rajasthan / Gujarat
  }
];

export const RESOURCE_DEPOSITS: ResourceDeposit[] = [
  // --- ENERGY (COAL) ---
  {
    id: 'jharia-coal',
    name: 'Jharia Coalfield',
    type: 'Coal (Bituminous)',
    category: 'energy',
    state: 'Jharkhand',
    coord: [86.4, 23.7],
    description: 'The largest coal reserves in India and the prime source of coking coal for the metallurgical industry.',
    geological_period: 'Gondwana (Permian)',
    upsc_relevance: 'India imports coking coal because local supply (mainly from Jharia) is insufficient and high in ash content.'
  },
  {
    id: 'raniganj-coal',
    name: 'Raniganj Coalfield',
    type: 'Coal (Bituminous)',
    category: 'energy',
    state: 'West Bengal',
    coord: [87.1, 23.6],
    description: 'The oldest coalfield in India, located in the Damodar River valley.',
    geological_period: 'Gondwana',
    upsc_relevance: 'First coal mine in India (1774). Primarily non-coking but high quality.'
  },
  {
    id: 'neyveli-lignite',
    name: 'Neyveli',
    type: 'Coal (Lignite)',
    category: 'energy',
    state: 'Tamil Nadu',
    coord: [79.4, 11.5],
    description: 'Largest open-cast lignite mine in India. Used mainly for thermal power generation.',
    geological_period: 'Tertiary',
    upsc_relevance: 'Proof that not all Indian coal is Gondwana. Tertiary coal is newer, lower carbon (lignite/brown coal), and has high moisture.'
  },

  // --- ENERGY (PETROLEUM) ---
  {
    id: 'bombay-high',
    name: 'Bombay High',
    type: 'Petroleum & Natural Gas',
    category: 'energy',
    state: 'Maharashtra (Offshore)',
    coord: [71.3, 19.4],
    description: 'India\'s largest oil field, located 176 km off the coast of Mumbai in the Arabian Sea.',
    geological_period: 'Tertiary (Miocene)',
    upsc_relevance: 'Accounts for over half of India\'s domestic crude oil production. Operated by ONGC via the Sagar Samrat platform.'
  },
  {
    id: 'digboi',
    name: 'Digboi',
    type: 'Petroleum',
    category: 'energy',
    state: 'Assam',
    coord: [95.6, 27.3],
    description: 'The oldest operational oil well in the world (discovered 1889).',
    geological_period: 'Tertiary',
    upsc_relevance: 'The birthplace of the oil industry in India. Represents the Brahmaputra valley tertiary deposits.'
  },

  // --- ATOMIC MINERALS ---
  {
    id: 'jaduguda',
    name: 'Jaduguda',
    type: 'Uranium',
    category: 'atomic',
    state: 'Jharkhand',
    coord: [86.3, 22.6],
    description: 'The first uranium mine of India.',
    geological_period: 'Dharwar / Archaean',
    upsc_relevance: 'Critical for India\'s three-stage nuclear power programme. Located in the Singhbhum Thrust Belt.'
  },
  {
    id: 'monazite-kerala',
    name: 'Kerala Coast Placers',
    type: 'Thorium (Monazite Sand)',
    category: 'atomic',
    state: 'Kerala',
    coord: [76.5, 9.0], // Coastal sweep
    description: 'Beach sands richest in Monazite, containing highly radioactive Thorium.',
    geological_period: 'Recent (Quaternary)',
    upsc_relevance: 'India has the world\'s largest reserves of Thorium in these sands, crucial for the 3rd stage of the nuclear program.'
  },

  // --- METALLIC (IRON ORE) ---
  {
    id: 'kudremukh',
    name: 'Kudremukh',
    type: 'Iron Ore (Magnetite)',
    category: 'metallic',
    state: 'Karnataka',
    coord: [75.2, 13.2],
    description: 'One of the largest iron ore deposits in the world, transported as slurry through a pipeline to Mangaluru port.',
    geological_period: 'Dharwar',
    upsc_relevance: '100% export unit oriented towards Iran/Japan. Represents Western Ghats ecology vs mining conflict.'
  },
  {
    id: 'bailadila',
    name: 'Bailadila',
    type: 'Iron Ore (Hematite)',
    category: 'metallic',
    state: 'Chhattisgarh',
    coord: [81.2, 18.7],
    description: 'Produces extremely high-grade hematite ore, situated in the Bastar district.',
    geological_period: 'Dharwar',
    upsc_relevance: 'Exported to Japan via the Visakhapatnam port. Critical high-grade reserves.'
  },

  // --- METALLIC (NON-FERROUS) ---
  {
    id: 'khetri',
    name: 'Khetri Copper Complex',
    type: 'Copper',
    category: 'metallic',
    state: 'Rajasthan',
    coord: [75.7, 28.0],
    description: 'Historic copper mining region situated in the Aravali range.',
    geological_period: 'Dharwar / Aravali',
    upsc_relevance: 'India is highly deficient in Copper. Khetri, alongside Singhbhum (JH) and Malanjkhand (MP), are the only major sources.'
  },
  {
    id: 'panchpatmali',
    name: 'Panchpatmali',
    type: 'Bauxite',
    category: 'metallic',
    state: 'Odisha',
    coord: [82.9, 18.8],
    description: 'The largest Bauxite deposit in India, located in the Koraput district.',
    geological_period: 'Tertiary Laterite',
    upsc_relevance: 'Odisha holds over 50% of India\'s bauxite reserves. Bauxite forms in tropical regions with high rainfall via Laterization.'
  },

  // --- NON-METALLIC ---
  {
    id: 'makrana',
    name: 'Makrana',
    type: 'Limestone / Marble',
    category: 'non-metallic',
    state: 'Rajasthan',
    coord: [74.7, 27.0],
    description: 'World-renowned high-quality white marble.',
    geological_period: 'Vindhyan / Pre-Cambrian',
    upsc_relevance: 'Used to build the Taj Mahal. Represents the transition of limestone to metamorphic marble.'
  },
  {
    id: 'koderma',
    name: 'Koderma',
    type: 'Mica',
    category: 'non-metallic',
    state: 'Jharkhand',
    coord: [85.5, 24.4],
    description: 'Often called the "Mica Capital of India".',
    geological_period: 'Archaean',
    upsc_relevance: 'India is a leading global producer of sheet mica. It restricts heat and electricity, vital for electronics.'
  }
];
