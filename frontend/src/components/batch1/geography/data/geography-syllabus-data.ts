export type TopicStatus = 'locked' | 'active' | 'mastered';

export interface MicroTopic {
    id: string;
    title: string;
    status: TopicStatus;
}

export interface SubTopic {
    id: string;
    title: string;
    microTopics: MicroTopic[];
    coordinates?: [number, number, number]; // x, y, z for 3D globe placement
}

export interface Module {
    id: string;
    title: string;
    color: string; // Hex code for UI theming
    description: string;
    topics: SubTopic[];
}

export const GEOGRAPHY_SYLLABUS: Module[] = [
    {
        id: 'geomorphology',
        title: 'Module A: Geomorphology (The Lithosphere)',
        color: '#E07A5F', // Terra-cotta/Brown
        description: 'Study of landforms and the processes that shape them.',
        topics: [
            {
                id: 'universe-solar-system',
                title: '1. The Universe & Solar System',
                coordinates: [1.5, 0.2, 0],
                microTopics: [
                    { id: 'origin-universe', title: 'Origin of Universe (Big Bang, Steady State)', status: 'locked' },
                    { id: 'star-formation', title: 'Star Formation & Life Cycle', status: 'locked' },
                    { id: 'solar-system', title: 'The Solar System (Planets, Kuiper Belt)', status: 'locked' },
                    { id: 'moon', title: 'The Moon (Phases, Eclipses)', status: 'locked' }
                ]
            },
            {
                id: 'evolution-earth',
                title: '2. Evolution of Earth',
                coordinates: [1.2, 0.4, 0.8],
                microTopics: [
                    { id: 'geo-time-scale', title: 'Geological Time Scale', status: 'locked' },
                    { id: 'origin-earth', title: 'Origin of Earth (Nebular Hypothesis)', status: 'locked' },
                    { id: 'evolution-spheres', title: 'Evolution of Lithosphere, Atmosphere, Hydrosphere', status: 'locked' }
                ]
            },
            {
                id: 'interior-earth',
                title: '3. Interior of the Earth',
                coordinates: [0.5, 0.3, 1.3],
                microTopics: [
                    { id: 'sources-info', title: 'Sources of Information (Direct/Indirect)', status: 'locked' },
                    { id: 'seismic-waves', title: 'Seismic Waves (P-waves, S-waves)', status: 'locked' },
                    { id: 'earth-layers', title: 'Layers of Earth (Crust, Mantle, Core)', status: 'locked' },
                    { id: 'discontinuities', title: 'Discontinuities (Mohorovicic, Gutenberg)', status: 'locked' }
                ]
            },
            {
                id: 'distribution-oceans-continents',
                title: '4. Distribution of Oceans & Continents',
                coordinates: [-0.2, 0.2, 1.5],
                microTopics: [
                    { id: 'continental-drift', title: 'Continental Drift Theory', status: 'locked' },
                    { id: 'convectional-current', title: 'Convectional Current Theory', status: 'locked' },
                    { id: 'sea-floor-spreading', title: 'Sea Floor Spreading Theory', status: 'locked' },
                    { id: 'plate-tectonics', title: 'Plate Tectonics (Unifying Theory)', status: 'locked' },
                    { id: 'plate-boundaries', title: 'Plate Boundaries', status: 'locked' }
                ]
            },
            {
                id: 'endogenic-processes',
                title: '5. Geomorphic Processes (Endogenic)',
                coordinates: [-1.0, 0.1, 1.0],
                microTopics: [
                    { id: 'diastrophism', title: 'Diastrophism (Epeirogenic vs Orogenic)', status: 'locked' },
                    { id: 'folding', title: 'Folding (Anticline, Syncline)', status: 'locked' },
                    { id: 'faulting', title: 'Faulting (Normal, Reverse, Rift Valleys)', status: 'locked' },
                    { id: 'volcanism', title: 'Volcanism (Lava, Landforms)', status: 'locked' },
                    { id: 'earthquakes', title: 'Earthquakes (Waves, Tsunami)', status: 'locked' }
                ]
            },
            {
                id: 'exogenic-processes',
                title: '6. Geomorphic Processes (Exogenic)',
                coordinates: [-1.4, 0, 0.4],
                microTopics: [
                    { id: 'weathering', title: 'Weathering (Physical, Chemical, Biological)', status: 'locked' },
                    { id: 'mass-movements', title: 'Mass Movements (Creep, Landslides)', status: 'locked' },
                    { id: 'soil-formation', title: 'Soil Formation (Pedogenesis)', status: 'locked' }
                ]
            },
            {
                id: 'landforms-evolution',
                title: '7. Landforms & Evolution',
                coordinates: [-1.2, -0.2, -0.5],
                microTopics: [
                    { id: 'fluvial-landforms', title: 'Fluvial Landforms (Rivers)', status: 'locked' },
                    { id: 'aeolian-landforms', title: 'Aeolian Landforms (Wind)', status: 'locked' },
                    { id: 'glacial-landforms', title: 'Glacial Landforms', status: 'locked' },
                    { id: 'karst-topography', title: 'Karst Topography (Groundwater)', status: 'locked' },
                    { id: 'coastal-landforms', title: 'Coastal Landforms', status: 'locked' }
                ]
            }
        ]
    },
    {
        id: 'climatology',
        title: 'Module B: Climatology (The Atmosphere)',
        color: '#81B29A', // Sage Green/Airy
        description: 'Study of the atmosphere and weather patterns.',
        topics: [
            {
                id: 'atmosphere-structure',
                title: '1. Atmosphere Composition & Structure',
                coordinates: [1.2, 0.8, 0],
                microTopics: [
                    { id: 'composition', title: 'Composition (Gases, Dust)', status: 'locked' },
                    { id: 'layers', title: 'Layers (Troposphere to Thermosphere)', status: 'locked' }
                ]
            },
            {
                id: 'insolation-heat',
                title: '2. Insolation & Heat Budget',
                coordinates: [0.8, 1.0, 0.6],
                microTopics: [
                    { id: 'insolation-factors', title: 'Factors affecting Insolation', status: 'locked' },
                    { id: 'heat-budget', title: 'Heat Budget (Albedo)', status: 'locked' },
                    { id: 'temp-distribution', title: 'Temperature Distribution', status: 'locked' }
                ]
            },
            {
                id: 'atmospheric-circulation',
                title: '3. Atmospheric Circulation',
                coordinates: [0, 1.2, 0.8],
                microTopics: [
                    { id: 'pressure-belts', title: 'Atmospheric Pressure Belts', status: 'locked' },
                    { id: 'planetary-winds', title: 'Planetary Winds', status: 'locked' },
                    { id: 'secondary-winds', title: 'Secondary Winds (Monsoons)', status: 'locked' },
                    { id: 'local-winds', title: 'Local Winds', status: 'locked' },
                    { id: 'jet-streams', title: 'Jet Streams', status: 'locked' }
                ]
            },
            {
                id: 'water-atmosphere',
                title: '4. Water in Atmosphere',
                coordinates: [-0.8, 1.0, 0.6],
                microTopics: [
                    { id: 'humidity', title: 'Humidity Types', status: 'locked' },
                    { id: 'condensation', title: 'Condensation Forms (Clouds)', status: 'locked' },
                    { id: 'precipitation', title: 'Precipitation Types', status: 'locked' }
                ]
            },
            {
                id: 'air-masses-cyclones',
                title: '5. Air Masses & Cyclones',
                coordinates: [-1.2, 0.8, 0],
                microTopics: [
                    { id: 'air-masses', title: 'Air Masses', status: 'locked' },
                    { id: 'fronts', title: 'Fronts', status: 'locked' },
                    { id: 'temperate-cyclones', title: 'Temperate Cyclones', status: 'locked' },
                    { id: 'tropical-cyclones', title: 'Tropical Cyclones', status: 'locked' }
                ]
            },
            {
                id: 'climatic-regions',
                title: '6. Climatic Regions',
                coordinates: [0, 1.4, -0.4],
                microTopics: [
                    { id: 'koppen', title: 'Koppen’s Classification', status: 'locked' },
                    { id: 'global-zones', title: 'Global Climate Zones', status: 'locked' }
                ]
            }
        ]
    },
    {
        id: 'oceanography',
        title: 'Module C: Oceanography (The Hydrosphere)',
        color: '#3D5A80', // Deep Blue
        description: 'Study of the ocean and marine resources.',
        topics: [
            {
                id: 'ocean-relief',
                title: '1. Ocean Relief',
                coordinates: [1.2, -0.6, 0.3],
                microTopics: [
                    { id: 'major-relief', title: 'Major Divisions (Shelf, Slope)', status: 'locked' },
                    { id: 'minor-relief', title: 'Minor Relief Features', status: 'locked' }
                ]
            },
            {
                id: 'ocean-properties',
                title: '2. Ocean Water Properties',
                coordinates: [0.5, -0.8, 0.8],
                microTopics: [
                    { id: 'ocean-temp', title: 'Temperature Distribution', status: 'locked' },
                    { id: 'ocean-salinity', title: 'Salinity', status: 'locked' },
                    { id: 'ocean-density', title: 'Density & Pressure', status: 'locked' }
                ]
            },
            {
                id: 'water-movement',
                title: '3. Water Movement',
                coordinates: [-0.5, -0.8, 0.8],
                microTopics: [
                    { id: 'ocean-currents', title: 'Ocean Currents', status: 'locked' },
                    { id: 'ocean-waves', title: 'Waves', status: 'locked' },
                    { id: 'tides', title: 'Tides', status: 'locked' }
                ]
            },
            {
                id: 'marine-resources',
                title: '4. Marine Resources',
                coordinates: [-1.2, -0.6, 0.3],
                microTopics: [
                    { id: 'coral-reefs', title: 'Coral Reefs', status: 'locked' },
                    { id: 'resources', title: 'Marine Resources', status: 'locked' },
                    { id: 'unclos', title: 'UNCLOS', status: 'locked' }
                ]
            }
        ]
    },
    {
        id: 'indian-geography',
        title: 'Module D: Indian Geography',
        color: '#F4A261', // Saffron/Earth Orange
        description: 'Comprehensive study of India\'s physical and political geography.',
        topics: [
            {
                id: 'india-location',
                title: '1. India: Location & Size',
                coordinates: [0.3, 0.4, 1.4],
                microTopics: [
                    { id: 'lat-long', title: 'Latitudinal & Longitudinal Extent', status: 'locked' },
                    { id: 'frontiers', title: 'Frontiers & Boundaries', status: 'locked' },
                    { id: 'ist', title: 'Indian Standard Time', status: 'locked' }
                ]
            },
            {
                id: 'india-physiography',
                title: '2. Physiography of India',
                coordinates: [0.4, 0.5, 1.3],
                microTopics: [
                    { id: 'himalayas', title: 'The Himalayas', status: 'locked' },
                    { id: 'northern-plains', title: 'The Northern Plains', status: 'locked' },
                    { id: 'peninsular-plateau', title: 'The Peninsular Plateau', status: 'locked' },
                    { id: 'coastal-plains-islands', title: 'Coastal Plains & Islands', status: 'locked' }
                ]
            },
            {
                id: 'india-drainage',
                title: '3. Drainage System',
                coordinates: [0.5, 0.6, 1.2],
                microTopics: [
                    { id: 'himalayan-rivers', title: 'Himalayan Rivers (Indus, Ganga, Brahmaputra)', status: 'locked' },
                    { id: 'peninsular-rivers', title: 'Peninsular Rivers', status: 'locked' }
                ]
            },
            {
                id: 'india-climate',
                title: '4. Climate of India',
                coordinates: [0.6, 0.7, 1.1],
                microTopics: [
                    { id: 'monsoon-origin', title: 'Origin of Monsoon', status: 'locked' },
                    { id: 'seasons', title: 'Indian Seasons', status: 'locked' }
                ]
            },
            {
                id: 'india-vegetation-soils',
                title: '5. Vegetation & Soils',
                coordinates: [0.7, 0.8, 1.0],
                microTopics: [
                    { id: 'veg-types', title: 'Types of Natural Vegetation', status: 'locked' },
                    { id: 'soil-types', title: 'Major Soil Types in India', status: 'locked' }
                ]
            }
        ]
    },
    {
        id: 'human-geography',
        title: 'Module E: Human & Economic Geography',
        color: '#2A9D8F', // Emerald/Humanity Green
        description: 'Study of human societies, economies, and their interaction with the environment.',
        topics: [
            {
                id: 'world-population',
                title: '1. World Population',
                coordinates: [-0.3, -0.4, 1.4],
                microTopics: [
                    { id: 'pop-distribution', title: 'Distribution & Density', status: 'locked' },
                    { id: 'pop-growth', title: 'Population Growth & Change', status: 'locked' },
                    { id: 'pop-composition', title: 'Population Composition', status: 'locked' }
                ]
            },
            {
                id: 'human-development',
                title: '2. Migration & Development',
                coordinates: [-0.4, -0.5, 1.3],
                microTopics: [
                    { id: 'migration-types', title: 'Types & Causes of Migration', status: 'locked' },
                    { id: 'hdi-concept', title: 'Human Development Index (HDI)', status: 'locked' }
                ]
            },
            {
                id: 'economic-activities',
                title: '3. Economic Activities',
                coordinates: [-0.5, -0.6, 1.2],
                microTopics: [
                    { id: 'primary-activities', title: 'Primary (Agriculture, Mining)', status: 'locked' },
                    { id: 'secondary-activities', title: 'Secondary (Manufacturing)', status: 'locked' },
                    { id: 'tertiary-quaternary', title: 'Tertiary & Quaternary Services', status: 'locked' }
                ]
            },
            {
                id: 'transport-trade',
                title: '4. Transport, Communication & Trade',
                coordinates: [-0.6, -0.7, 1.1],
                microTopics: [
                    { id: 'land-water-air-transport', title: 'Global Transport Networks', status: 'locked' },
                    { id: 'intl-trade-patterns', title: 'International Trade Patterns', status: 'locked' }
                ]
            }
        ]
    }
];

export const TOPIC_COORDINATES: Record<string, [number, number, number]> = {
    // Helper map if we need quick lookups later
};
