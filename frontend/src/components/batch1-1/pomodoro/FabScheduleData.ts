import { HISTORY_SCHEDULE, HISTORY_START_DATE, HistoryDaySchedule } from '../../batch1/history/data/history-schedule-data';

// Fabricated Start Date: Feb 9, 2026
export const FAB_MONTH_START = HISTORY_START_DATE; // Synced

export interface FabDayContent {
    dayId: number;
    date: Date;
    morning: {
        subject: 'History';
        schedule: HistoryDaySchedule | null;
    };
    evening: {
        subject: 'Geography' | 'Environment' | 'SciTech' | 'Economy';
        topic: string;
        subtopics: string[];
    };
    liveClassLink?: string; // Optional link for live sessions
}

// Evening Schedule: Geography (Feb 9 - March 5 approx)
// Simple static list for now
const GEOGRAPHY_Plan = [
    { day: 1, topic: "Geomorphology I", subtopics: ["Interior of Earth", "Rocks & Minerals", "Plate Tectonics"] },
    { day: 2, topic: "Geomorphology II", subtopics: ["Volcanism", "Earthquakes", "Tsunami"] },
    { day: 3, topic: "Geomorphology III", subtopics: ["Landforms (Fluvial, Aeolian, Glacial)", "Weathering"] },
    { day: 4, topic: "Climatology I", subtopics: ["Atmosphere Composition", "Insolation & Heat Budget", "Temperature Inversion"] },
    { day: 5, topic: "Climatology II", subtopics: ["Pressure Belts", "Winds (Planetary/Local)", "Air Masses"] },
    { day: 6, topic: "Climatology III", subtopics: ["Cyclones (Tropical/Temperate)", "Humidity & Precipitation"] },
    { day: 7, topic: "Revising Physical Geo", subtopics: ["Revision of Days 1-6"] },
    // ... Extend as needed, repeating pattern
    { day: 8, topic: "Oceanography I", subtopics: ["Ocean Relief", "Temperature & Salinity", "Ocean Currents"] },
    { day: 9, topic: "Oceanography II", subtopics: ["Tides", "Waves", "Coral Reefs & Bleaching"] },
    { day: 10, topic: "Biogeography", subtopics: ["Soils of World", "Biomes", "Vegetation Belts"] },
    { day: 11, topic: "Indian Geo I", subtopics: ["Physiography (Himalayas, Plains, Peninsular)"] },
    { day: 12, topic: "Indian Geo II", subtopics: ["Drainage Systems (Himalayan vs Peninsular)"] },
    { day: 13, topic: "Indian Geo III", subtopics: ["Monsoon Mechanism", "Climate Zones", "Vegetation"] },
    { day: 14, topic: "Revision", subtopics: ["Revision"] },
];

export function getFabDayContent(currentDate: Date = new Date()): FabDayContent | null {
    const diffTime = currentDate.getTime() - FAB_MONTH_START.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return null; // Before Feb 9

    const currentDayNum = diffDays + 1;

    // Morning: History
    const historySch = HISTORY_SCHEDULE.find(d => d.day === currentDayNum) || null;

    // Evening: Geography (Cycle logic if array exhausted)
    // Simply map day to Geography Plan. If > plan length, hold last or cycle? For now, modular.
    const geoIndex = (currentDayNum - 1) % GEOGRAPHY_Plan.length;
    const geoSch = GEOGRAPHY_Plan[geoIndex];

    return {
        dayId: currentDayNum,
        date: currentDate,
        morning: {
            subject: 'History',
            schedule: historySch
        },
        evening: {
            subject: 'Geography',
            topic: geoSch.topic,
            subtopics: geoSch.subtopics
        },
        liveClassLink: "https://meet.google.com/edu-live-session" // Mock link for testing
    };
}
