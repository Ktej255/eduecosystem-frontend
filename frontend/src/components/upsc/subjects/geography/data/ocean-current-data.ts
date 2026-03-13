import { OceanCurrent } from './ocean-types';

// Approximate D3 Mercator [lng, lat] coordinates for world map rendering
export const OCEAN_CURRENTS: OceanCurrent[] = [
  // --- NORTH ATLANTIC GYRE ---
  {
    id: 'gulf-stream',
    name: 'Gulf Stream',
    type: 'warm',
    gyre: 'North Atlantic',
    path: [[-80, 25], [-75, 30], [-70, 35], [-60, 40], [-40, 45]],
    climate_effect: 'Keeps Western Europe (UK, Norway) significantly warmer than other regions at the same latitude.',
    upsc_relevance: 'Frequently asked regarding its ameliorating effect on European winters and dense fog formation when meeting the Labrador current.'
  },
  {
    id: 'north-atlantic-drift',
    name: 'North Atlantic Drift',
    type: 'warm',
    gyre: 'North Atlantic',
    path: [[-40, 45], [-20, 50], [0, 55], [10, 60]],
    climate_effect: 'Extension of Gulf Stream. Prevents European ports (like Murmansk) from freezing in winter.',
    upsc_relevance: 'Crucial for understanding why ports at 60°N in Europe remain ice-free year-round.'
  },
  {
    id: 'canaries-current',
    name: 'Canaries Current',
    type: 'cold',
    gyre: 'North Atlantic',
    path: [[-10, 40], [-15, 30], [-20, 20], [-25, 10]],
    climate_effect: 'Desiccating effect on the northwest coast of Africa, contributing to the formation of the Sahara Desert.',
    upsc_relevance: 'Standard question: Matching cold currents to the formation of western coastal deserts.'
  },
  {
    id: 'north-equatorial-atlantic',
    name: 'North Equatorial Current (Atlantic)',
    type: 'warm',
    gyre: 'North Atlantic',
    path: [[-25, 15], [-40, 15], [-60, 15], [-75, 15]],
    climate_effect: 'Carries warm water towards the Caribbean, fueling hurricane formation.',
    upsc_relevance: 'Part of the trade-wind driven equatorial circulation.'
  },

  // --- SOUTH ATLANTIC GYRE ---
  {
    id: 'brazil-current',
    name: 'Brazil Current',
    type: 'warm',
    gyre: 'South Atlantic',
    path: [[-35, -5], [-35, -15], [-40, -25], [-45, -35]],
    climate_effect: 'Brings warm, humid conditions to the eastern coast of Brazil.',
    upsc_relevance: 'Forms the western boundary current of the South Atlantic Gyre.'
  },
  {
    id: 'benguela-current',
    name: 'Benguela Current',
    type: 'cold',
    gyre: 'South Atlantic',
    path: [[10, -35], [10, -25], [5, -15], [0, -5]],
    climate_effect: 'Causes upwelling of nutrient-rich water. Responsible for the Namib and Kalahari deserts.',
    upsc_relevance: 'Key concept: Cold currents, upwelling, rich fishing grounds, and desertification (Namib desert).'
  },
  {
    id: 'south-equatorial-atlantic',
    name: 'South Equatorial Current (Atlantic)',
    type: 'warm',
    gyre: 'South Atlantic',
    path: [[0, -5], [-15, -5], [-30, -5], [-40, -5]],
    climate_effect: 'Pushes warm water into the Caribbean and Gulf of Mexico.',
    upsc_relevance: 'Splits at Cape Sao Roque (Brazil) feeding both North and South Atlantic gyres.'
  },

  // --- NORTH PACIFIC GYRE ---
  {
    id: 'kuroshio',
    name: 'Kuroshio (Japan Current)',
    type: 'warm',
    gyre: 'North Pacific',
    path: [[125, 20], [130, 30], [140, 35], [150, 40]],
    climate_effect: 'Similar to the Gulf Stream; brings warm water to the east coast of Japan.',
    upsc_relevance: 'Meets the cold Oyashio current creating dense fog and one of the world\'s best fishing grounds (Grand Banks equivalent).'
  },
  {
    id: 'north-pacific-drift',
    name: 'North Pacific Drift',
    type: 'warm',
    gyre: 'North Pacific',
    path: [[150, 40], [180, 45], [-150, 45], [-130, 45]],
    climate_effect: 'Moderates the climate of the western coast of North America (British Columbia, Washington).',
    upsc_relevance: 'Trans-Pacific transfer of heat energy.'
  },
  {
    id: 'california-current',
    name: 'California Current',
    type: 'cold',
    gyre: 'North Pacific',
    path: [[-125, 40], [-125, 30], [-120, 20], [-115, 10]],
    climate_effect: 'Causes frequent coastal fogs (San Francisco) and contributes to the Mojave/Sonoran deserts.',
    upsc_relevance: 'Classic western boundary cold current contributing to mid-latitude deserts.'
  },
  {
    id: 'north-equatorial-pacific',
    name: 'North Equatorial Current (Pacific)',
    type: 'warm',
    gyre: 'North Pacific',
    path: [[-115, 15], [-150, 15], [180, 15], [140, 15]],
    climate_effect: 'Pools massive amounts of warm water in the Western Pacific Warm Pool (during neutral/La Nina conditions).',
    upsc_relevance: 'The primary driver of the Walker Circulation dynamics.'
  },

  // --- SOUTH PACIFIC GYRE ---
  {
    id: 'east-australian',
    name: 'East Australian Current',
    type: 'warm',
    gyre: 'South Pacific',
    path: [[150, -15], [155, -25], [155, -35], [150, -40]],
    climate_effect: 'Brings warm, tropical waters southbound along Australia\'s east coast (promotes coral growth at Great Barrier Reef).',
    upsc_relevance: 'Impact on Eastern Australian rainfall and biodiversity.'
  },
  {
    id: 'peru-humboldt',
    name: 'Peru (Humboldt) Current',
    type: 'cold',
    gyre: 'South Pacific',
    path: [[-75, -40], [-75, -30], [-80, -20], [-80, -5]],
    climate_effect: 'Highly productive upwelling system. Responsible for the hyper-arid Atacama Desert.',
    upsc_relevance: 'The core current affected by El Niño (which warms and reverses it, killing the fish).'
  },
  {
    id: 'south-equatorial-pacific',
    name: 'South Equatorial Current (Pacific)',
    type: 'warm',
    gyre: 'South Pacific',
    path: [[-80, -5], [-120, -5], [-160, -5], [160, -5]],
    climate_effect: 'Driven by trade winds, pushes water from South America to Indonesia.',
    upsc_relevance: 'The halting/reversal of this current IS El Niño.'
  },

  // --- INDIAN OCEAN GYRE (South) & MONSOON DRIFT (North) ---
  {
    id: 'agulhas',
    name: 'Agulhas Current',
    type: 'warm',
    gyre: 'Indian Ocean',
    path: [[40, -15], [35, -25], [25, -35]],
    climate_effect: 'Brings warm water down the east coast of Africa (Mozambique/South Africa), causing heavy rainfall.',
    upsc_relevance: 'Interaction with the Southern Ocean and retroflection south of Africa.'
  },
  {
    id: 'west-australian',
    name: 'West Australian Current',
    type: 'cold',
    gyre: 'Indian Ocean',
    path: [[110, -35], [110, -25], [105, -15]],
    climate_effect: 'Contributes to the arid climate of Western Australia (Great Victoria Desert).',
    upsc_relevance: 'Completes the anti-clockwise Indian Ocean gyre.'
  },
  {
    id: 'somali-current',
    name: 'Somali Current',
    type: 'cold',
    gyre: 'None',
    path: [[50, -5], [52, 5], [55, 15]],
    climate_effect: 'Unique because it reverses direction seasonally with the monsoon winds. Upwells cold water during summer.',
    upsc_relevance: 'Highly tested: The only major ocean current that completely reverses direction twice a year.'
  },

  // --- POLAR / MAJOR INDEPENDENT ---
  {
    id: 'antarctic-circumpolar',
    name: 'West Wind Drift (Antarctic Circumpolar)',
    type: 'cold',
    gyre: 'Antarctic Circumpolar',
    path: [[-180, -55], [-90, -55], [0, -55], [90, -55], [180, -55]],
    climate_effect: 'The largest ocean current. Isolates Antarctica thermally, keeping it frozen.',
    upsc_relevance: 'The only current that flows completely around the globe unimpeded by landmasses.'
  },
  {
    id: 'labrador',
    name: 'Labrador Current',
    type: 'cold',
    gyre: 'None',
    path: [[-60, 60], [-55, 50], [-50, 45]],
    climate_effect: 'Brings icebergs from Greenland down to transatlantic shipping lanes (sank the Titanic).',
    upsc_relevance: 'Meeting point with Gulf Stream at Grand Banks causes dense fogs and rich fishing.'
  },
  {
    id: 'oyashio',
    name: 'Oyashio Current',
    type: 'cold',
    gyre: 'None',
    path: [[160, 55], [150, 45], [145, 40]],
    climate_effect: 'Brings cold, nutrient-rich Arctic water southwards along the Kamchatka peninsula.',
    upsc_relevance: 'Convergence with Kuroshio current.'
  }
];
