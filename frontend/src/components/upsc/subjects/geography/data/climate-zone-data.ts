import { ClimateZone } from './climate-types';

export const CLIMATE_ZONES: ClimateZone[] = [
  // --- TROPICAL (A) ---
  {
    id: 'af-equatorial',
    code: 'Af',
    name: 'Tropical Wet (Equatorial)',
    group: 'A',
    description: 'Hot and wet throughout the year. No distinct dry season. Due to intense insolation and convectional rainfall, evenings are marked by heavy downpours with thunder and lightning.',
    regions: ['Amazon Basin', 'Congo Basin', 'Malaysian Peninsula', 'Indonesian archipelago'],
    temp_range_annual: '25°C - 27°C (Uniformly High, extremely low diurnal range)',
    rainfall_annual: '2000mm - 2500mm+',
    natural_vegetation: 'Tropical Rainforest (Selvas). Broad-leaved evergreen trees forming a dense canopy. Mahogony, Ebony, Rosewood. Epiphytes and lianas are common.',
    key_wildlife: 'Highly diverse canopy dwellers (Monkeys, Sloths, Macaws, Toucans), Gorillas in Congo.',
    upsc_relevance: 'Questions frequently target the "uniform temperature", "lack of dry season", and "laterite soil formation due to intense leaching".',
    climograph_city: 'Singapore',
    monthly_data: [
      { temp: 26.5, precip: 240 }, { temp: 26.9, precip: 160 }, { temp: 27.2, precip: 175 },
      { temp: 27.5, precip: 170 }, { temp: 27.8, precip: 170 }, { temp: 27.8, precip: 165 },
      { temp: 27.6, precip: 160 }, { temp: 27.5, precip: 170 }, { temp: 27.4, precip: 165 },
      { temp: 27.3, precip: 190 }, { temp: 27.0, precip: 250 }, { temp: 26.6, precip: 280 }
    ],
    visual_paths: [
      [[-75,-5], [-70,-8], [-60,-10], [-50,-5], [-45,0], [-50,5], [-65,8], [-75,5], [-75,-5]], // Amazon Basin (Refined)
      [[10,-5], [15,-8], [25,-10], [30,-5], [28,5], [20,8], [12,5], [10,-5]], // Congo Basin (Refined)
      [[95,-10], [105,-12], [120,-10], [135,-5], [140,5], [130,12], [110,15], [95,10], [95,-10]], // SE Asia (Refined)
    ]
  },
  {
    id: 'aw-savanna',
    code: 'Aw',
    name: 'Tropical Wet/Dry (Savanna)',
    group: 'A',
    description: 'Distinct wet summer and dry winter. Found adjacent to the equatorial regions. Experiences distinct seasons, unlike the Af climate.',
    regions: ['Llanos (Orinoco)', 'Campos (Brazil)', 'Sudan (Africa)', 'Northern Australia'],
    temp_range_annual: '20°C - 32°C (Highest temps just before the onset of rains)',
    rainfall_annual: '750mm - 1500mm',
    natural_vegetation: 'Tall grasses (Elephant grass) interspersed with short, widely spaced trees (Acacia, Baobab). "Parkland" landscape.',
    key_wildlife: 'The "Big Game" country: Lions, Cheetahs, Zebras, Giraffes, Elephants. Abundant herbivores and carnivores.',
    upsc_relevance: 'Pastoralism (Masai tribes), big game hunting associations, distinct wet/dry seasonality.',
    climograph_city: 'Kano, Nigeria',
    monthly_data: [
      { temp: 21, precip: 0 }, { temp: 24, precip: 0 }, { temp: 28, precip: 10 },
      { temp: 31, precip: 40 }, { temp: 29, precip: 120 }, { temp: 27, precip: 200 },
      { temp: 25, precip: 300 }, { temp: 24, precip: 320 }, { temp: 25, precip: 180 },
      { temp: 26, precip: 40 }, { temp: 24, precip: 0 }, { temp: 22, precip: 0 }
    ],
    visual_paths: [
      [[-70, 5], [-50, 5], [-45, 12], [-55, 20], [-70, 20], [-70, 5]], // Llanos (Refined)
      [[-60, -25], [-45, -28], [-40, -20], [-42, -10], [-55, -5], [-60, -25]], // Campos (Refined)
      [[-15, 6], [10, 8], [30, 10], [40, 8], [38, 15], [20, 18], [0, 16], [-15, 6]], // Sudan N (Refined)
      [[15, -20], [30, -25], [40, -18], [35, -8], [20, -6], [15, -20]], // S. Africa Savanna (Refined)
      [[118,-22], [130,-25], [145,-20], [148,-12], [135,-10], [120,-12], [118,-22]] // N Australia (Refined)
    ]
  },

  // --- DRY (B) ---
  {
    id: 'bw-desert',
    code: 'BWh/BWk',
    name: 'Desert (Hot & Mid-Latitude)',
    group: 'B',
    description: 'Arid climate where precipitation is too scant to support significant vegetation. Hot deserts are on western margins (15°-30° lat), cold deserts in continental interiors.',
    regions: ['Sahara', 'Arabian', 'Atacama', 'Kalahari', 'Great Australian', 'Gobi (Cold)', 'Patagonian (Cold)'],
    temp_range_annual: '10°C - 35°C (Extreme diurnal range due to clear skies)',
    rainfall_annual: 'Less than 250mm',
    natural_vegetation: 'Xerophytic plants. Cacti, thorny bushes, deep-rooted shrubs (Phreatophytes). Plants have waxy leaves or no leaves to prevent transpiration.',
    key_wildlife: 'Camels, Fennec foxes, scorpions, nocturnal rodents (Kangaroo rat).',
    upsc_relevance: 'High frequent questions on why deserts form on western coasts (cold currents & off-shore trade winds).',
    climograph_city: 'Cairo, Egypt (BWh)',
    monthly_data: [
      { temp: 14, precip: 5 }, { temp: 15, precip: 4 }, { temp: 18, precip: 2 },
      { temp: 22, precip: 1 }, { temp: 26, precip: 1 }, { temp: 28, precip: 0 },
      { temp: 29, precip: 0 }, { temp: 29, precip: 0 }, { temp: 27, precip: 0 },
      { temp: 24, precip: 1 }, { temp: 19, precip: 2 }, { temp: 15, precip: 4 }
    ],
    visual_paths: [
      [[-15, 18], [10, 15], [30, 18], [35, 25], [32, 32], [10, 35], [-15, 32], [-15, 18]], // Sahara (Refined)
      [[38, 18], [55, 15], [62, 22], [58, 32], [42, 30], [38, 18]], // Arabian (Refined)
      [[-75, -28], [-68, -30], [-68, -20], [-72, -18], [-75, -28]], // Atacama (Small Coastal)
      [[15, -30], [22, -32], [28, -25], [20, -20], [15, -30]], // Kalahari (Refined)
      [[115,-32], [130,-35], [142,-30], [138,-22], [120,-20], [115,-32]], // Australian (Refined)
      [[85, 38], [110, 35], [115, 45], [95, 48], [85, 38]] // Gobi (Refined)
    ]
  },

  // --- TEMPERATE (C) ---
  {
    id: 'cs-mediterranean',
    code: 'Cs',
    name: 'Mediterranean',
    group: 'C',
    description: 'Distinctive for its warm, dry summers and mild, wet winters. Found on western margins of continents between 30° and 45° latitude.',
    regions: ['Mediterranean Basin', 'California', 'Central Chile', 'Cape Town', 'SW Australia'],
    temp_range_annual: '10°C - 25°C',
    rainfall_annual: '500mm - 900mm (Concentrated in Winter)',
    natural_vegetation: 'Sclerophyllous vegetation (thick, waxy, evergreen leaves). Olive, Cork Oak, Citrus, Grapes. Chaparral in California, Matorral in Chile.',
    key_wildlife: 'Adapted to summer drought. Small mammals, various birds of prey.',
    upsc_relevance: 'The **most frequently asked climate region**. Focus on "Winter Rain" caused by the shifting of westerly wind belts equator-ward in winter.',
    climograph_city: 'Rome, Italy',
    monthly_data: [
      { temp: 8, precip: 80 }, { temp: 9, precip: 75 }, { temp: 11, precip: 65 },
      { temp: 14, precip: 55 }, { temp: 18, precip: 40 }, { temp: 22, precip: 20 },
      { temp: 25, precip: 15 }, { temp: 25, precip: 25 }, { temp: 21, precip: 60 },
      { temp: 17, precip: 90 }, { temp: 12, precip: 110 }, { temp: 9, precip: 95 }
    ],
    visual_paths: [
      [[-10, 35], [5, 32], [20, 30], [35, 32], [42, 35], [40, 42], [20, 45], [5, 42], [-10, 35]], // Med Basin (Refined)
      [[-125, 32], [-118, 30], [-115, 35], [-120, 42], [-125, 40], [-125, 32]], // California (Refined)
      [[-75, -38], [-70, -40], [-68, -35], [-72, -30], [-75, -38]], // Central Chile (Refined)
      [[17, -34], [25, -35], [26, -32], [22, -30], [17, -34]], // Cape Town (Refined)
      [[115,-34], [122,-35], [124,-32], [118,-30], [115,-34]] // SW Australia (Refined)
    ]
  },
  {
    id: 'cfb-marine-west-coast',
    code: 'Cfb',
    name: 'Marine West Coast (British Type)',
    group: 'C',
    description: 'Mild, damp climate found on western coasts in mid-latitudes (40°-60°). Heavily influenced by warm ocean currents and prevailing westerlies blowing onshore year-round.',
    regions: ['NW Europe (UK, Norway)', 'Pacific NW (Canada/USA)', 'Southern Chile', 'New Zealand', 'Tasmania'],
    temp_range_annual: '5°C - 15°C (Highly equable, mild winters for the latitude)',
    rainfall_annual: '750mm - 1500mm (Evenly distributed throughout the year)',
    natural_vegetation: 'Deciduous forests (Oak, Elm, Beech). Trees shed leaves in winter to protect against snow/frost.',
    key_wildlife: 'Deer, squirrels, foxes, rich marine life off coasts due to ocean currents.',
    upsc_relevance: 'Influence of the North Atlantic Drift on keeping European ports ice-free. Lack of a dry season compared to Mediterranean.',
    climograph_city: 'London, UK',
    monthly_data: [
      { temp: 5, precip: 55 }, { temp: 5, precip: 40 }, { temp: 7, precip: 45 },
      { temp: 9, precip: 45 }, { temp: 12, precip: 50 }, { temp: 15, precip: 50 },
      { temp: 17, precip: 45 }, { temp: 17, precip: 50 }, { temp: 15, precip: 55 },
      { temp: 11, precip: 65 }, { temp: 8, precip: 65 }, { temp: 5, precip: 55 }
    ],
    visual_paths: [
      [[-10, 48], [5, 45], [15, 48], [20, 55], [15, 62], [0, 65], [-10, 60], [-10, 48]], // NW Europe (Refined)
      [[-135, 42], [-125, 45], [-120, 55], [-125, 62], [-135, 60], [-135, 42]], // Pac NW (Refined)
      [[-75, -53], [-70, -55], [-68, -45], [-72, -42], [-75, -53]], // S Chile (Refined)
      [[166,-46], [175,-48], [178,-40], [172,-35], [166,-35], [166,-46]] // New Zealand (Refined)
    ]
  },
  {
    id: 'cwa-china-type',
    code: 'Cwa/Cfa',
    name: 'Humid Subtropical (China Type)',
    group: 'C',
    description: 'Found on eastern margins of continents (20°-35°). Warm, moist summers caused by onshore trade winds. Winters are cooler and relatively drier.',
    regions: ['Eastern China', 'SE USA (Florida/Georgia)', 'Pampas (Argentina)', 'Natal (S. Africa)', 'Eastern Australia'],
    temp_range_annual: '10°C - 27°C',
    rainfall_annual: '1000mm - 1500mm (Summer maximum, distinct typhoons/hurricanes in late summer)',
    natural_vegetation: 'Broad-leaved evergreen and deciduous trees. Bamboos and pines in China. Highly productive agricultural lands (rice, cotton).',
    key_wildlife: 'Alligators (USA), Pandas (China), highly diverse avifauna.',
    upsc_relevance: 'Typhoons/Hurricanes occur in this region. The "Lush vegetation" compared to the deserts on the exact opposite western margin at the same latitude.',
    climograph_city: 'Shanghai, China',
    monthly_data: [
      { temp: 4, precip: 50 }, { temp: 6, precip: 60 }, { temp: 10, precip: 100 },
      { temp: 15, precip: 90 }, { temp: 20, precip: 110 }, { temp: 24, precip: 170 },
      { temp: 28, precip: 150 }, { temp: 28, precip: 140 }, { temp: 24, precip: 100 },
      { temp: 19, precip: 60 }, { temp: 13, precip: 50 }, { temp: 6, precip: 45 }
    ],
    visual_paths: [
      [[110, 20], [125, 20], [125, 35], [110, 35], [110, 20]], // E. China
      [[-95, 25], [-75, 25], [-75, 35], [-95, 35], [-95, 25]], // SE USA
      [[-65, -35], [-55, -35], [-55, -25], [-65, -25], [-65, -35]], // Pampas
      [[25, -35], [35, -35], [35, -25], [25, -25], [25, -35]], // Natal
      [[145,-35], [155,-35], [155,-25], [145,-25], [145,-35]] // E Australia
    ]
  },

  // --- CONTINENTAL (D) ---
  {
    id: 'df-taiga',
    code: 'Df/Dw',
    name: 'Subarctic (Taiga / Boreal)',
    group: 'D',
    description: 'Found only in the Northern Hemisphere due to the required large landmass. Extreme temperature range with brief, cool summers and long, harshly cold winters.',
    regions: ['Much of Canada', 'Scandinavia', 'Siberia'],
    temp_range_annual: '-25°C to 15°C (Extreme annual range, up to 50°C difference in Siberia)',
    rainfall_annual: '350mm - 600mm (Mostly summer convective rain, winter snow)',
    natural_vegetation: 'Coniferous Forests (Taiga). Pines, Firs, Spruces, Larches. Needle-like leaves, conical shape to shed snow. Softwood lumber industry is dominant.',
    key_wildlife: 'Fur-bearing animals (Mink, Silver Fox, Lynx, Bears). Extremely sparse human population.',
    upsc_relevance: 'Why is it absent in the Southern Hemisphere? (Oceanic dominance). The softwood lumber industry\'s geographical basis.',
    climograph_city: 'Yakutsk, Russia',
    monthly_data: [
      { temp: -38, precip: 10 }, { temp: -33, precip: 8 }, { temp: -20, precip: 6 },
      { temp: -5, precip: 8 }, { temp: 7, precip: 20 }, { temp: 16, precip: 35 },
      { temp: 19, precip: 38 }, { temp: 15, precip: 37 }, { temp: 6, precip: 22 },
      { temp: -8, precip: 15 }, { temp: -26, precip: 15 }, { temp: -36, precip: 11 }
    ],
    visual_paths: [
      [[-130, 52], [-110, 55], [-80, 55], [-60, 58], [-55, 68], [-100, 70], [-130, 65], [-130, 52]], // Canada (Refined)
      [[10, 58], [40, 55], [80, 52], [120, 55], [140, 58], [130, 68], [80, 70], [30, 70], [10, 58]] // Eurasia (Refined)
    ]
  },

  // --- POLAR (E) ---
  {
    id: 'et-tundra',
    code: 'ET',
    name: 'Tundra',
    group: 'E',
    description: 'Found beyond the Arctic/Antarctic circles. Treeless landscape. Subsoil is permanently frozen (Permafrost). Brief summer allows topsoil to thaw.',
    regions: ['Northern fringes of Canada, Alaska, Russia', 'Coastal Greenland'],
    temp_range_annual: '-30°C to 10°C (Summers rarely exceed 10°C)',
    rainfall_annual: 'Less than 250mm (Cold desert conditions, locks moisture as snow/ice)',
    natural_vegetation: 'Mosses, lichens, sedges, and dwarf willows during brief summer. Brilliant floral bloom for a few weeks.',
    key_wildlife: 'Reindeer (Caribou), Polar Bears, Walrus, Arctic Fox, migratory birds.',
    upsc_relevance: 'Permafrost melting (Climate Change), semi-nomadic tribes (Inuits, Lapps).',
    climograph_city: 'Barrow, Alaska',
    monthly_data: [
      { temp: -25, precip: 4 }, { temp: -27, precip: 4 }, { temp: -26, precip: 4 },
      { temp: -18, precip: 5 }, { temp: -7, precip: 4 }, { temp: 1, precip: 8 },
      { temp: 4, precip: 25 }, { temp: 3, precip: 25 }, { temp: -1, precip: 15 },
      { temp: -10, precip: 12 }, { temp: -18, precip: 8 }, { temp: -23, precip: 5 }
    ],
    visual_paths: [
      [[-165, 72], [-120, 75], [-80, 72], [-60, 75], [-60, 82], [-120, 85], [-165, 80], [-165, 72]], // N. America Tundra (Refined)
      [[10, 72], [60, 75], [110, 72], [160, 75], [160, 85], [100, 82], [40, 85], [10, 72]] // Eurasia Tundra (Refined)
    ]
  }
];
