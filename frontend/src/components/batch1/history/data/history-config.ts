import { SubjectConfig, WeeklyScheduleData } from "../../framework/SubjectPlanner";
import { BookOpen, Scroll, Landmark, Flag } from "lucide-react";
import React from "react";

// --- Syllabus Data ---

const HISTORY_MODULES = [
    {
        id: "1",
        title: "Ancient India", // Indus to Guptas
        description: "From Stone Age to the Golden Age of Guptas. Focus on Art, Society & Administration.",
        icon: React.createElement(Landmark),
        color: "amber",
        topicRange: [1, 15] as [number, number]
    },
    {
        id: "2",
        title: "Medieval India", // Sultanate to Mughals
        description: "The age of Sultanates, Mughals, and Marathas. Bhakti & Sufi Movements.",
        icon: React.createElement(Scroll),
        color: "purple",
        topicRange: [16, 28] as [number, number]
    },
    {
        id: "3",
        title: "Modern India: Expansion", // 1757 - 1857
        description: "European advent, British expansion, and the Revolt of 1857.",
        icon: React.createElement(Flag),
        color: "blue",
        topicRange: [29, 45] as [number, number]
    },
    {
        id: "4",
        title: "Modern India: Freedom Struggle", // 1857 - 1947
        description: "National Movement, Gandhian Era, and Independence.",
        icon: React.createElement(BookOpen),
        color: "orange",
        topicRange: [46, 65] as [number, number]
    }
];

// Placeholder Topics (to be expanded)
const HISTORY_TOPICS = Array.from({ length: 65 }, (_, i) => {
    const id = i + 1;
    let moduleId = "1";
    if (id > 15) moduleId = "2";
    if (id > 28) moduleId = "3";
    if (id > 45) moduleId = "4";

    return {
        id: id,
        title: `History Topic ${id}`, // Placeholder
        moduleId: moduleId,
        priority: id % 5 === 0 ? "High" : "Medium",
        staticFocus: "Key specific details about this era...",
        keyConcepts: ["Concept A", "Concept B"],
        currentAffairsCount: Math.floor(Math.random() * 5),
    };
}) as any[]; // Type assertion for brevity in placeholder

// Placeholder Chapters (generic mapping)
const HISTORY_CHAPTERS = HISTORY_TOPICS.map(t => ({
    chapter: t.id,
    topic: t.title,
    part: t.moduleId,
    pages: 15,
    slots: 2
}));

// Placeholder Schedule (3 Weeks)
const HISTORY_SCHEDULE: WeeklyScheduleData[] = [
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
            saturday: ["Ancient History Mock 1"],
            sunday: [1, 2, 3, 4, 5] // Revision
        }
    },
    {
        week: 2,
        totalSlots: 24,
        totalPages: 120,
        days: {
            monday: [13, 14, 15],
            tuesday: [16, 17],
            wednesday: [18, 19],
            thursday: [20, 21, 22],
            friday: [23, 24],
            saturday: ["Medieval History Mock 1"],
            sunday: [13, 14, 15]
        }
    },
    {
        week: 3,
        totalSlots: 24,
        totalPages: 120,
        days: {
            monday: [29, 30],
            tuesday: [31, 32],
            wednesday: [33, 34],
            thursday: [35, 36],
            friday: [37, 38, 39],
            saturday: ["Modern History Mock 1"],
            sunday: [29, 30, 31]
        }
    }
];

export const HISTORY_CONFIG: SubjectConfig = {
    id: "history",
    title: "Indian History",
    subtitle: "Comprehensive coverage from Indus Valley to Independence (Strictly Prelims-Focused)",
    totalChapters: 65,
    totalParts: 4,
    modules: HISTORY_MODULES,
    topics: HISTORY_TOPICS,
    chapters: HISTORY_CHAPTERS,
    schedules: HISTORY_SCHEDULE,
    colors: {
        primary: "amber",
        heroGradient: "from-amber-700 via-orange-800 to-red-900"
    },
    basePath: "/student/batch1/history"
};
