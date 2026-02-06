import { Module } from "./geography-syllabus-data";

export interface GeographyDay {
    day: number;
    date: string;
    title: string;
    moduleId: string;
    topics: string[]; // Topic IDs from syllabus
    description: string;
}

export const GEOGRAPHY_SCHEDULE: GeographyDay[] = [
    // MODULE A: GEOMORPHOLOGY (7 Days)
    { day: 1, date: "Feb 6", title: "Universe & Solar System", moduleId: "geomorphology", topics: ["universe-solar-system"], description: "Origin of Universe, Stars, Solar System, and Moon." },
    { day: 2, date: "Feb 7", title: "Evolution of Earth", moduleId: "geomorphology", topics: ["evolution-earth"], description: "Geological Time Scale and Evolution of Spheres." },
    { day: 3, date: "Feb 8", title: "Interior of Earth", moduleId: "geomorphology", topics: ["interior-earth"], description: "Crust, Mantle, Core, and Seismic Waves." },
    { day: 4, date: "Feb 9", title: "Oceans & Continents", moduleId: "geomorphology", topics: ["distribution-oceans-continents"], description: "Continental Drift and Plate Tectonics." },
    { day: 5, date: "Feb 10", title: "Endogenic Processes", moduleId: "geomorphology", topics: ["endogenic-processes"], description: "Folding, Faulting, Volcanism, and Earthquakes." },
    { day: 6, date: "Feb 11", title: "Exogenic Processes", moduleId: "geomorphology", topics: ["exogenic-processes"], description: "Weathering, Mass Movements, and Soil Formation." },
    { day: 7, date: "Feb 12", title: "Landforms & Evolution", moduleId: "geomorphology", topics: ["landforms-evolution"], description: "Fluvial, Aeolian, Glacial, Karst, and Coastal Landforms." },

    // MODULE B: CLIMATOLOGY (5 Days)
    { day: 8, date: "Feb 13", title: "Atmosphere Structure", moduleId: "climatology", topics: ["atmosphere-structure"], description: "Composition and Structure of the Atmosphere." },
    { day: 9, date: "Feb 14", title: "Insolation & Heat", moduleId: "climatology", topics: ["insolation-heat"], description: "Heat Budget and Temperature Distribution." },
    { day: 10, date: "Feb 15", title: "Atmospheric Circulation", moduleId: "climatology", topics: ["atmospheric-circulation"], description: "Pressure Belts, Winds, and Jet Streams." },
    { day: 11, date: "Feb 16", title: "Water, Air Masses & Fronts", moduleId: "climatology", topics: ["water-atmosphere", "air-masses-cyclones"], description: "Humidity, Clouds, Precip, Air Masses, and Cyclones." },
    { day: 12, date: "Feb 17", title: "Climatic Regions", moduleId: "climatology", topics: ["climatic-regions"], description: "World Climate Zones and Koppen Classification." },

    // MODULE C: OCEANOGRAPHY (3 Days)
    { day: 13, date: "Feb 18", title: "Ocean Relief & Properties", moduleId: "oceanography", topics: ["ocean-relief", "ocean-properties"], description: "Ocean bottom relief, Temperature, and Salinity." },
    { day: 14, date: "Feb 19", title: "Water Movement", moduleId: "oceanography", topics: ["water-movement"], description: "Currents, Waves, and Tides." },
    { day: 15, date: "Feb 20", title: "Marine Resources", moduleId: "oceanography", topics: ["marine-resources"], description: "Resources, Coral Reefs, and Law of the Sea." },

    // MODULE D: INDIAN GEOGRAPHY (4 Days)
    { day: 16, date: "Feb 21", title: "India: Location & Physiography", moduleId: "indian-geography", topics: ["india-location", "india-physiography"], description: "Physical setting and major physiographic divisions." },
    { day: 17, date: "Feb 22", title: "Drainage System", moduleId: "indian-geography", topics: ["india-drainage"], description: "Himalayan and Peninsular River Systems." },
    { day: 18, date: "Feb 23", title: "Climate of India", moduleId: "indian-geography", topics: ["india-climate"], description: "Monsoon mechanism and Seasons." },
    { day: 19, date: "Feb 24", title: "Vegetation & Soils", moduleId: "indian-geography", topics: ["india-vegetation-soils"], description: "Forest types and Soil classification." },

    // MODULE E: HUMAN GEOGRAPHY (2 Days)
    { day: 20, date: "Feb 25", title: "Human Geography", moduleId: "human-geography", topics: ["world-population", "human-development"], description: "Population, Migration, and Human Development." },
    { day: 21, date: "Feb 26", title: "Economic Geography", moduleId: "human-geography", topics: ["economic-activities", "transport-trade"], description: "Economic activities, Transport, and Trade." },
];
