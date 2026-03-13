import { TectonicPlate, TectonicBoundary, GeoHazard } from './tectonics-types';

export const MAJOR_PLATES: TectonicPlate[] = [
  { id: 'pacific', name: 'Pacific Plate', size: 'major', description: 'Largest tectonic plate, entirely oceanic. Shrinking due to subduction along the Ring of Fire.', label_coord: [-150, 0] },
  { id: 'na', name: 'North American Plate', size: 'major', description: 'Contains North America and part of the Atlantic Ocean floor.', label_coord: [-100, 45] },
  { id: 'sa', name: 'South American Plate', size: 'major', description: 'Contains South America and the southwestern Atlantic Ocean.', label_coord: [-60, -20] },
  { id: 'eurasian', name: 'Eurasian Plate', size: 'major', description: 'Contains most of Europe and Asia. Primarily continental crust.', label_coord: [90, 45] },
  { id: 'african', name: 'African Plate', size: 'major', description: 'Contains Africa and surrounding oceanic crust. Currently splitting at the East African Rift.', label_coord: [20, 0] },
  { id: 'indo-australian', name: 'Indo-Australian Plate', size: 'major', description: 'Colliding with the Eurasian plate to form the Himalayas. Sometimes considered two separate plates.', label_coord: [90, -20] },
  { id: 'antarctic', name: 'Antarctic Plate', size: 'major', description: 'Contains Antarctica and the surrounding Southern Ocean. Almost entirely surrounded by divergent boundaries.', label_coord: [0, -75] },
];

export const MINOR_PLATES: TectonicPlate[] = [
  { id: 'nazca', name: 'Nazca Plate', size: 'minor', description: 'Oceanic plate subducting under the South American plate, forming the Andes fold mountains.', label_coord: [-90, -20] },
  { id: 'cocos', name: 'Cocos Plate', size: 'minor', description: 'Located off the west coast of Central America. Subducting under the Caribbean plate.', label_coord: [-100, 10] },
  { id: 'caribbean', name: 'Caribbean Plate', size: 'minor', description: 'Mostly oceanic plate underlying Central America and the Caribbean Sea.', label_coord: [-75, 15] },
  { id: 'arabian', name: 'Arabian Plate', size: 'minor', description: 'Moving northward, colliding with the Eurasian plate (forming Zagros mountains) and rifting from Africa (Red Sea).', label_coord: [45, 20] },
  { id: 'philippine', name: 'Philippine Sea Plate', size: 'minor', description: 'Oceanic plate subducting under the Eurasian plate. Bounded by the Mariana Trench.', label_coord: [135, 15] },
  { id: 'scotia', name: 'Scotia Plate', size: 'minor', description: 'Small plate between South America and Antarctica.', label_coord: [-45, -60] },
  { id: 'juan-de-fuca', name: 'Juan de Fuca Plate', size: 'minor', description: 'Small plate subducting under the North American plate off the coast of Washington/Oregon. (Cascadia Subduction Zone)', label_coord: [-130, 45] }
];

export const TECTONIC_BOUNDARIES: TectonicBoundary[] = [
  // --- CONVERGENT (Oceanic-Continental) ---
  {
    id: 'andes-subduction',
    name: 'Peru-Chile Trench (Andes)',
    type: 'convergent-oc',
    plates_involved: ['nazca', 'sa'],
    path: [[-75, -50], [-72, -30], [-75, -10], [-80, 5]], // Rough coastal trace
    landforms: ['Andes Mountains (Fold)', 'Peru-Chile Trench', 'Stratovolcanoes'],
    description: 'The dense, oceanic Nazca plate subducts beneath the lighter, continental South American plate. The melting crust forms explosive composite volcanoes.',
    upsc_relevance: 'Classic example of O-C convergence forming coastal fold mountains and oceanic trenches.',
    is_ring_of_fire: true
  },
  {
    id: 'cascadia-subduction',
    name: 'Cascadia Subduction Zone',
    type: 'convergent-oc',
    plates_involved: ['juan-de-fuca', 'na'],
    path: [[-125, 40], [-124, 45], [-127, 50]],
    landforms: ['Cascade Volcanic Arc (Mt St Helens)', 'Offshore Trench'],
    description: 'Juan de Fuca plate subducting under North America. Capable of generating Megathrust earthquakes (Magnitude 9.0+).',
    upsc_relevance: 'High earthquake and tsunami risk zone. O-C convergence.',
    is_ring_of_fire: true
  },

  // --- CONVERGENT (Continental-Continental) ---
  {
    id: 'himalayan-collision',
    name: 'Himalayan Orogeny',
    type: 'convergent-cc',
    plates_involved: ['indo-australian', 'eurasian'],
    path: [[72, 34], [80, 30], [88, 28], [95, 29]], // Rough Himalayan arc
    landforms: ['Himalayan Fold Mountains', 'Tibetan Plateau', 'Syntaxial Bends'],
    description: 'Two low-density continental plates collide. Neither can subduct deeply, so the crust crumples and thickens, thrusting upwards to form the highest mountains on Earth.',
    upsc_relevance: 'The most important boundary for Indian Geography. Note the absence of volcanoes due to lack of deep subduction/melting.',
    is_ring_of_fire: false
  },
  {
    id: 'alpine-collision',
    name: 'Alpine Orogeny',
    type: 'convergent-cc',
    plates_involved: ['african', 'eurasian'],
    path: [[-5, 36], [10, 45], [20, 42], [30, 38], [45, 38]], // Atlas -> Alps -> Zagros
    landforms: ['Alps', 'Atlas Mountains', 'Zagros Mountains'],
    description: 'The complex collision zone where the African (and Arabian) plates grind into Eurasia, closing the ancient Tethys Sea.',
    upsc_relevance: 'C-C convergence forming the Alpine-Himalayan mountain belt. Highly prone to severe earthquakes (e.g., Turkey/Syria).',
    is_ring_of_fire: false
  },

  // --- CONVERGENT (Oceanic-Oceanic) ---
  {
    id: 'mariana-trench',
    name: 'Mariana Trench (Island Arc)',
    type: 'convergent-oo',
    plates_involved: ['pacific', 'philippine'],
    path: [[140, 30], [145, 20], [143, 10]],
    landforms: ['Mariana Trench', 'Volcanic Island Arcs (Japan, Philippines)'],
    description: 'The older, denser Pacific Plate subducts beneath the Philippine Sea Plate. Forms the deepest trench on Earth (Challenger Deep) and an arc of volcanic islands.',
    upsc_relevance: 'Formation of Island Arcs and the deepest trenches. O-O convergence.',
    is_ring_of_fire: true
  },
  {
    id: 'aleutian-trench',
    name: 'Aleutian Trench',
    type: 'convergent-oo',
    plates_involved: ['pacific', 'na'],
    path: [[-160, 55], [-170, 52], [180, 52], [165, 55]], // Across the dateline
    landforms: ['Aleutian Islands', 'Aleutian Trench'],
    description: 'Pacific plate subducting under the North American plate (Bering Sea region).',
    upsc_relevance: 'Northernmost active segment of the Pacific Ring of Fire.',
    is_ring_of_fire: true
  },

  // --- DIVERGENT (Oceanic & Continental Rifting) ---
  {
    id: 'mid-atlantic-ridge',
    name: 'Mid-Atlantic Ridge',
    type: 'divergent',
    plates_involved: ['na', 'eurasian'], // Simply using these two as proxy, it stretches south too
    path: [[-30, 60], [-40, 40], [-45, 20], [-30, 0], [-15, -20], [-15, -50]],
    landforms: ['Mid-Ocean Ridge', 'Rift Valleys (Iceland)', 'Basaltic Fissure Eruptions'],
    description: 'The longest mountain range on Earth, entirely underwater (mostly). Plates pull apart, and magma rises to create new oceanic crust (seafloor spreading).',
    upsc_relevance: 'Evidence for Seafloor Spreading (Harry Hess) and Paleomagnetism. Emerges above sea level at Iceland.',
    is_ring_of_fire: false
  },
  {
    id: 'east-african-rift',
    name: 'East African Rift System',
    type: 'divergent',
    plates_involved: ['african', 'african'], // Technically splitting into Nubian and Somali
    path: [[40, 10], [35, 0], [35, -10], [35, -20]],
    landforms: ['Rift Valley', 'Block Mountains (Horsts)', 'Great Lakes (Tanganyika, Malawi)', 'Mt. Kilimanjaro'],
    description: 'An active continental rift zone where the African plate is splitting into two new tectonic plates (Somali and Nubian). Eventually, a new ocean will form here.',
    upsc_relevance: 'Continental rifting process. High yield for questions on African Great Lakes being situated in rift valleys.',
    is_ring_of_fire: false
  },

  // --- TRANSFORM ---
  {
    id: 'san-andreas',
    name: 'San Andreas Fault',
    type: 'transform',
    plates_involved: ['pacific', 'na'],
    path: [[-124, 40], [-122, 37], [-115, 32]],
    landforms: ['Strike-slip fault line', 'Linear valleys'],
    description: 'The Pacific Plate slides horizontally past the North American plate. Crust is neither created nor destroyed (conservative boundary).',
    upsc_relevance: 'Classic example of a Transform Boundary. High earthquake risk, but NO volcanic activity.',
    is_ring_of_fire: true
  }
];

export const MAJOR_HAZARDS: GeoHazard[] = [
  // Ring of Fire sample points
  { id: 'fuji', name: 'Mt. Fuji', type: 'volcano', coord: [138.7, 35.3], description: 'Iconic stratovolcano on the convergent boundary of Japan.' },
  { id: 'krakatoa', name: 'Krakatoa', type: 'volcano', coord: [105.4, -6.1], description: 'Devastating caldera volcano on the Sunda Arc subduction zone.' },
  { id: 'pinatubo', name: 'Mt. Pinatubo', type: 'volcano', coord: [120.3, 15.1], description: 'Massive 1991 eruption caused global cooling due to aerosols.' },
  { id: 'st-helens', name: 'Mt. St. Helens', type: 'volcano', coord: [-122.1, 46.2], description: 'Explosive Plinian eruption in 1980 on the Cascadia subduction zone.' },
  
  // Earthquakes
  { id: 'tohoku', name: '2011 Tohoku EQ', type: 'earthquake', coord: [142.3, 38.2], description: 'Magnitude 9.1 megathrust earthquake causing a massive tsunami and Fukushima disaster.' },
  { id: 'haiti', name: '2010 Haiti EQ', type: 'earthquake', coord: [-72.5, 18.5], description: 'Disastrous M7.0 earthquake on the Enriquillo-Plantain Garden fault zone.' },
  { id: 'turkey', name: '2023 Turkey-Syria EQ', type: 'earthquake', coord: [37.0, 37.1], description: 'Deadly M7.8 strike-slip earthquake on the East Anatolian Fault.' },
  { id: 'nepal', name: '2015 Gorkha EQ', type: 'earthquake', coord: [84.7, 28.1], description: 'M7.8 thrust earthquake caused by the ongoing collision of India into Eurasia.' },
  
  // Key Rifts / Trenches
  { id: 'challenger-deep', name: 'Challenger Deep', type: 'trench', coord: [142.2, 11.3], description: 'Deepest point on Earth (~10,920m) located in the Mariana Trench.' },
  { id: 'iceland-rift', name: 'Icelandic Rift', type: 'ridge', coord: [-19.0, 65.0], description: 'Mid-Atlantic ridge surface exposure. Features fissure eruptions and geothermal activity.' }
];
