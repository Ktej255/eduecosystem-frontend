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

// Enhanced Geography Topics
const GEOGRAPHY_TOPICS = [
    // --- Physical Geography (Module 1) ---
    {
        id: 1,
        title: "Geomorphology: Origin of Earth",
        moduleId: "1",
        priority: "Medium",
        staticFocus: "Nebular hypothesis, Plate tectonics, Continental drift.",
        keyConcepts: ["Pangaea", "Sea Floor Spreading", "Convection Currents"],
        currentAffairsCount: 0,
        mainsQuestions: [
            { id: "GQ1", question: "Explain the theory of Plate Tectonics and its role in shaping the Earth's landforms.", marks: 15 }
        ]
    },
    {
        id: 2,
        title: "Weathering and Erosion",
        moduleId: "1",
        priority: "High",
        staticFocus: "Types of weathering, mass wasting, erosional landforms.",
        keyConcepts: ["Mechanical Weathering", "Chemical Weathering", "Biological Weathering"],
        currentAffairsCount: 1
    },
    {
        id: 3,
        title: "Fluvial Landforms",
        moduleId: "1",
        priority: "High",
        staticFocus: "River erosion, deposition, meanders, deltas.",
        keyConcepts: ["Oxbow Lake", "Alluvial Fan", "Delta Formation"],
        currentAffairsCount: 0,
        mainsQuestions: [
            { id: "GQ2", question: "Describe the formation and types of deltas with Indian examples.", marks: 10, modelAnswer: "Deltas are depositional landforms at river mouths. Types include: Arcuate (Ganga), Bird's Foot (Mississippi), Cuspate. Factors: Sediment load, wave energy, tidal range." }
        ]
    },
    {
        id: 4,
        title: "Climatology: Atmospheric Circulation",
        moduleId: "1",
        priority: "High",
        staticFocus: "Pressure belts, wind systems, jet streams.",
        keyConcepts: ["Trade Winds", "Westerlies", "Ferrel Cell"],
        currentAffairsCount: 2,
        mainsQuestions: [
            { id: "GQ3", question: "Explain the role of Jet Streams in influencing Indian Monsoon.", marks: 15 }
        ]
    },

    // --- Indian Geography (Module 3) ---
    {
        id: 36,
        title: "Physiography of India",
        moduleId: "3",
        priority: "High",
        staticFocus: "Northern Mountains, Indo-Gangetic Plain, Peninsular Plateau.",
        keyConcepts: ["Himalayas", "Deccan Plateau", "Western Ghats"],
        currentAffairsCount: 1,
        mainsQuestions: [
            { id: "GQ4", question: "Discuss the physiographic divisions of India and their economic significance.", marks: 15 }
        ]
    },
    {
        id: 37,
        title: "Indian Monsoon",
        moduleId: "3",
        priority: "High",
        staticFocus: "Mechanism, onset, variability, impact on agriculture.",
        keyConcepts: ["ITCZ", "El Niño", "Monsoon Breaks"],
        currentAffairsCount: 3,
        mainsQuestions: [
            { id: "GQ5", question: "Analyze the factors affecting the distribution of rainfall in India.", marks: 10 }
        ]
    }
] as any[];

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
