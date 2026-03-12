export interface GeographyDaySchedule {
    day: number;
    title: string;
    phase: number;
    topics: string[];
    strategy: string;
    chapters: string[];
    isRevisionDay?: boolean;
    moduleId?: string; // Added for compatibility with Planner
    date?: string;     // Added for compatibility with Planner
    description?: string; // Added for compatibility with Planner
}

export type GeographyDay = GeographyDaySchedule;

export const GEOGRAPHY_PHASES = [
    { id: 1, title: "Physical Foundations", days: "1-7", description: "Mastering the fundamental processes of Geomorphology and Climatology." },
    { id: 2, title: "Oceanography & World Regions", days: "8-12", description: "Deep dive into oceanic systems and global geographic distributions." },
    { id: 3, title: "Indian Geography", days: "13-18", description: "Comprehensive study of the Indian subcontinent's physical and human landscape." },
    { id: 4, title: "Human Geography & Final Revision", days: "19-21", description: "Population dynamics and integrated revision for UPSC readiness." }
];

export const GEOGRAPHY_SCHEDULE: GeographyDaySchedule[] = [
    // Phase 1: Physical Foundations (Days 1-7)
    {
        day: 1,
        phase: 1,
        title: "Origin of Earth & Interior",
        topics: ["The Big Bang Theory", "Nebular Hypothesis", "Internal Structure of Earth"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Focus on seismic wave behavior and chemical composition of layers.",
        chapters: ["geo-ch-01"]
    },
    {
        day: 2,
        phase: 1,
        title: "Plate Tectonics & Continental Drift",
        topics: ["Alfred Wegener's Theory", "Sea Floor Spreading", "Plate Boundaries"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Visualize the 7 major plates and 3 types of boundaries.",
        chapters: ["geo-ch-02"]
    },
    {
        day: 3,
        phase: 1,
        title: "Rocks & Landform Development",
        topics: ["Igneous, Sedimentary, Metamorphic", "Weathering & Erosion", "Fluvial Landforms"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Understand the rock cycle and erosional vs depositional landforms.",
        chapters: ["geo-ch-03"]
    },
    {
        day: 4,
        phase: 1,
        title: "Atmosphere: Composition & Structure",
        topics: ["Layers of Atmosphere", "Insolation", "Heat Budget of Earth"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Memorize the lapse rate and ozone layer location (Stratosphere).",
        chapters: ["geo-ch-04"]
    },
    {
        day: 5,
        phase: 1,
        title: "Pressure Belts & Wind Systems",
        topics: ["Planetary Winds", "Jet Streams", "Local Winds (Loo, Mistral, etc.)"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Correlate pressure belts with global climate zones.",
        chapters: ["geo-ch-05"]
    },
    {
        day: 6,
        phase: 1,
        title: "Humidity & Precipitation",
        topics: ["Types of Rainfall", "Cyclones & Anticyclones", "Air Masses"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Focus on Tropical vs Temperate Cyclones (UPSC favorite).",
        chapters: ["geo-ch-06"]
    },
    {
        day: 7,
        phase: 1,
        title: "Physical Geography Revision",
        topics: ["Geomorphology Review", "Climatology Review", "Full Phase 1 MCQ Drill"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Consolidate all L1/L2 concepts from the first week.",
        chapters: [],
        isRevisionDay: true
    },

    // Phase 2: Oceanography & World Regions (Days 8-12)
    {
        day: 8,
        phase: 2,
        title: "Ocean Floor & Salinity",
        topics: ["Continental Shelf", "Abyssal Plains", "Factors affecting Salinity"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Understand the vertical and horizontal distribution of salinity.",
        chapters: ["geo-ch-07"]
    },
    {
        day: 9,
        phase: 2,
        title: "Ocean Currents & Tides",
        topics: ["Warm vs Cold Currents", "El Niño & La Niña", "Tidal Theories"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Map the major ocean currents and their impact on coastal climates.",
        chapters: ["geo-ch-08"]
    },
    {
        day: 10,
        phase: 2,
        title: "World Climate Regions (I)",
        topics: ["Equatorial Region", "Tropical Monsoon", "Savanna Type"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Focus on vegetation and economic activities associated with each.",
        chapters: ["geo-ch-09"]
    },
    {
        day: 11,
        phase: 2,
        title: "World Climate Regions (II)",
        topics: ["Mediterranean Climate", "Steppe Type", "Tundra"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "High yield: Mediterranean region's winter rainfall and citrus fruits.",
        chapters: ["geo-ch-10"]
    },
    {
        day: 12,
        phase: 2,
        title: "Phase 2 Consolidation",
        topics: ["Oceanography Review", "World Climates Review"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Attempt the World Geography module in the Question Bank.",
        chapters: [],
        isRevisionDay: true
    },

    // Phase 3: Indian Geography (Days 13-18)
    {
        day: 13,
        phase: 3,
        title: "Physiography of India (I)",
        topics: ["The Himalayas", "Northern Plains", "Peninsular Plateau"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Master the regional divisions of Himalayas (Srinagar to Arunachal).",
        chapters: ["geo-ch-11"]
    },
    {
        day: 14,
        phase: 3,
        title: "Physiography of India (II)",
        topics: ["Coastal Plains", "Indian Islands", "Desert Region"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Compare Western vs Eastern Ghats and Coastal Plains.",
        chapters: ["geo-ch-12"]
    },
    {
        day: 15,
        phase: 3,
        title: "Indian Drainage System",
        topics: ["Himalayan Rivers", "Peninsular Rivers", "Interlinking Projects"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Map the tributaries: Left bank vs Right bank (Ganga/Indus/Brahmaputra).",
        chapters: ["geo-ch-13"]
    },
    {
        day: 16,
        phase: 3,
        title: "Climate of India",
        topics: ["Indian Monsoon Mechanism", "Western Disturbances", "Retreating Monsoon"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Understand Tibertan Plateau heating and Somali Jet impact.",
        chapters: ["geo-ch-14"]
    },
    {
        day: 17,
        phase: 3,
        title: "Soils & Natural Vegetation",
        topics: ["Alluvial, Black, Red Soils", "Tropical Evergreen vs Deciduous"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Associate soil types with specific crop requirements (e.g. Cotton).",
        chapters: ["geo-ch-15"]
    },
    {
        day: 18,
        phase: 3,
        title: "Minerals & Energy Resources",
        topics: ["Iron Ore, Coal, Bauxite", "Renewable Energy Potential", "Nuclear Sites"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Memorize locations: Gondwana coal fields vs Tertiary fields.",
        chapters: ["geo-ch-16"]
    },

    // Phase 4: Human Geography & Final Revision (Days 19-21)
    {
        day: 19,
        phase: 4,
        title: "Population & Settlement",
        topics: ["Demographic Transition", "Migration Patterns", "Urbanization Trends"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Focus on Census 2011 data vs latest NFHS trends.",
        chapters: ["geo-ch-17"]
    },
    {
        day: 20,
        phase: 4,
        title: "Integrated Map Work",
        topics: ["Major Ports", "National Highways", "Protected Areas (NP/WLS)"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Practice locating Biosphere Reserves from North to South.",
        chapters: ["geo-ch-18"]
    },
    {
        day: 21,
        phase: 4,
        title: "Grand Final Mock Test",
        topics: ["Full Syllabus Simulation", "Previous Year Question Drill"],
        moduleId: 'geography',
        date: 'Day Study',
        description: 'Comprehensive study of assigned topics.',
        strategy: "Solve 100 MCQs in 120 minutes. Review every wrong answer.",
        chapters: [],
        isRevisionDay: true
    }
];

export const GEOGRAPHY_START_DATE = new Date(); // Dynamic start date or static as needed

export function getCurrentDayNumber(): number {
    // Basic logic to determine current day based on start date
    // Placeholder returning 1
    return 1;
}

