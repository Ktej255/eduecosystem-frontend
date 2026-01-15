import { SubjectConfig, WeeklyScheduleData } from "../../framework/SubjectPlanner";
import { Globe, Map, Mountain, CloudRain } from "lucide-react";
import React from "react";

// --- Syllabus Data ---

const GEOGRAPHY_MODULES = [
    {
        id: "1",
        title: "Physical Geography",
        description: "Geomorphology, Climatology, and Oceanography. The core principles of Earth sciences.",
        icon: React.createElement(Mountain),
        color: "emerald",
        topicRange: [1, 20] as [number, number]
    },
    {
        id: "2",
        title: "World Geography",
        description: "Continents, major physical features, resources, and industries across the globe.",
        icon: React.createElement(Globe),
        color: "blue",
        topicRange: [21, 35] as [number, number]
    },
    {
        id: "3",
        title: "Indian Geography",
        description: "Physical features, drainage system, monsoon, soil, and agriculture of India.",
        icon: React.createElement(Map),
        color: "orange",
        topicRange: [36, 55] as [number, number]
    },
    {
        id: "4",
        title: "Human & Economic Geography",
        description: "Demographics, urbanization, and economic activities (Primary, Secondary, Tertiary).",
        icon: React.createElement(CloudRain), // Using CloudRain as metaphor for environment/resources
        color: "teal",
        topicRange: [56, 65] as [number, number]
    }
];

// Placeholder Topics
const GEOGRAPHY_TOPICS = Array.from({ length: 65 }, (_, i) => {
    const id = i + 1;
    let moduleId = "1";
    if (id > 20) moduleId = "2";
    if (id > 35) moduleId = "3";
    if (id > 55) moduleId = "4";

    return {
        id: id,
        title: `Geography Topic ${id}`,
        moduleId: moduleId,
        priority: id % 4 === 0 ? "High" : "Medium",
        staticFocus: "Core concepts and distribution patterns...",
        keyConcepts: ["Process A", "Distribution B"],
        currentAffairsCount: Math.floor(Math.random() * 3),
    };
}) as any[];

const GEOGRAPHY_CHAPTERS = GEOGRAPHY_TOPICS.map(t => ({
    chapter: t.id,
    topic: t.title,
    part: t.moduleId,
    pages: 12,
    slots: 2
}));

const GEOGRAPHY_SCHEDULE: WeeklyScheduleData[] = [
    {
        week: 1,
        totalSlots: 24,
        totalPages: 100,
        days: {
            monday: [1, 2, 3],
            tuesday: [4, 5],
            wednesday: [6, 7],
            thursday: [8, 9, 10],
            friday: [11, 12],
            saturday: ["Physical Geography Mock 1"],
            sunday: [1, 2, 3, 4, 5]
        }
    },
    {
        week: 2,
        totalSlots: 24,
        totalPages: 110,
        days: {
            monday: [21, 22],
            tuesday: [23, 24],
            wednesday: [25, 26],
            thursday: [36, 37],
            friday: [38, 39],
            saturday: ["Map Work & Location Drill"],
            sunday: [21, 22, 36, 37]
        }
    },
    // Add more weeks as needed
];

export const GEOGRAPHY_CONFIG: SubjectConfig = {
    id: "geography",
    title: "Geography",
    subtitle: "Mastering the Earth: Physical to Human Perspectives",
    totalChapters: 65,
    totalParts: 4,
    modules: GEOGRAPHY_MODULES,
    topics: GEOGRAPHY_TOPICS,
    chapters: GEOGRAPHY_CHAPTERS,
    schedules: GEOGRAPHY_SCHEDULE,
    colors: {
        primary: "emerald",
        heroGradient: "from-emerald-700 via-teal-800 to-cyan-900"
    },
    basePath: "/student/batch1/geography"
};
