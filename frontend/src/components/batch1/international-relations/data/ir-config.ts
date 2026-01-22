import { SubjectConfig, WeeklyScheduleData } from "../../framework/SubjectPlanner";
import { Globe, Users, Landmark, Flag } from "lucide-react";
import React from "react";

// --- Syllabus Data ---

const IR_MODULES = [
    {
        id: "1",
        title: "India's Foreign Policy",
        description: "Principles, Neighborhood Policy, and Strategic Partnerships.",
        icon: React.createElement(Flag),
        color: "indigo",
        topicRange: [1, 15] as [number, number]
    },
    {
        id: "2",
        title: "International Organizations",
        description: "UN, WTO, IMF, World Bank, and Regional Bodies.",
        icon: React.createElement(Landmark),
        color: "purple",
        topicRange: [16, 30] as [number, number]
    },
    {
        id: "3",
        title: "Bilateral Relations",
        description: "India's relations with major powers and neighbors.",
        icon: React.createElement(Users),
        color: "blue",
        topicRange: [31, 45] as [number, number]
    },
    {
        id: "4",
        title: "Global Issues",
        description: "Climate, Security, Terrorism, and Emerging Challenges.",
        icon: React.createElement(Globe),
        color: "teal",
        topicRange: [46, 55] as [number, number]
    }
];

// Placeholder Topics
const IR_TOPICS = Array.from({ length: 55 }, (_, i) => {
    const id = i + 1;
    let moduleId = "1";
    if (id > 15) moduleId = "2";
    if (id > 30) moduleId = "3";
    if (id > 45) moduleId = "4";

    return {
        id: id,
        title: `IR Topic ${id}`,
        moduleId: moduleId,
        priority: id % 3 === 0 ? "High" : "Medium",
        staticFocus: "Key concepts and current affairs...",
        keyConcepts: ["Concept A", "Concept B"],
        currentAffairsCount: Math.floor(Math.random() * 10),
    };
}) as any[];

const IR_CHAPTERS = IR_TOPICS.map(t => ({
    chapter: t.id,
    topic: t.title,
    part: t.moduleId,
    pages: 8,
    slots: 2
}));

const IR_SCHEDULE: WeeklyScheduleData[] = [
    {
        week: 1,
        totalSlots: 20,
        totalPages: 80,
        days: {
            monday: [1, 2, 3],
            tuesday: [4, 5],
            wednesday: [6, 7],
            thursday: [8, 9],
            friday: [10, 11],
            saturday: ["Foreign Policy Mock 1"],
            sunday: [1, 2, 3, 4, 5]
        }
    },
    {
        week: 2,
        totalSlots: 20,
        totalPages: 90,
        days: {
            monday: [12, 13, 14],
            tuesday: [15, 16],
            wednesday: [17, 18],
            thursday: [19, 20],
            friday: [21, 22],
            saturday: ["Intl Organizations Mock"],
            sunday: [12, 13, 14]
        }
    },
];

export const IR_CONFIG: SubjectConfig = {
    id: "international-relations",
    title: "International Relations",
    subtitle: "India's Foreign Policy and Global Governance",
    totalChapters: 55,
    totalParts: 4,
    modules: IR_MODULES,
    topics: IR_TOPICS,
    chapters: IR_CHAPTERS,
    schedules: IR_SCHEDULE,
    colors: {
        primary: "indigo",
        heroGradient: "from-indigo-700 via-purple-800 to-pink-900"
    },
    basePath: "/student/batch1/international-relations"
};
