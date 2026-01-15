import { SubjectConfig, WeeklyScheduleData } from "../../framework/SubjectPlanner";
import { TrendingUp, PieChart, Coins, Briefcase } from "lucide-react";
import React from "react";

// --- Syllabus Data ---

const ECONOMY_MODULES = [
    {
        id: "1",
        title: "Macro Economics",
        description: "National Income, Money & Banking, Inflation, and Fiscal Policy.",
        icon: React.createElement(Coins),
        color: "blue",
        topicRange: [1, 25] as [number, number]
    },
    {
        id: "2",
        title: "Indian Economy Sectors",
        description: "Agriculture, Industry, Services, and Infrastructure.",
        icon: React.createElement(Briefcase), // Using Briefcase for industry/sectors
        color: "green",
        topicRange: [26, 45] as [number, number]
    },
    {
        id: "3",
        title: "International Economics",
        description: "BoP, Forex, IMF, WTO, and World Bank.",
        icon: React.createElement(TrendingUp),
        color: "purple",
        topicRange: [46, 55] as [number, number]
    },
    {
        id: "4",
        title: "Social Development",
        description: "Poverty, Unemployment, Inclusion, and Demographics.",
        icon: React.createElement(PieChart),
        color: "orange",
        topicRange: [56, 65] as [number, number]
    }
];

// Placeholder Topics
const ECONOMY_TOPICS = Array.from({ length: 65 }, (_, i) => {
    const id = i + 1;
    let moduleId = "1";
    if (id > 25) moduleId = "2";
    if (id > 45) moduleId = "3";
    if (id > 55) moduleId = "4";

    return {
        id: id,
        title: `Economy Topic ${id}`,
        moduleId: moduleId,
        priority: id % 3 === 0 ? "High" : "Medium",
        staticFocus: "Trends and key definitions...",
        keyConcepts: ["Definition X", "Curve Y"],
        currentAffairsCount: Math.floor(Math.random() * 8), // High CA relevance
    };
}) as any[];

const ECONOMY_CHAPTERS = ECONOMY_TOPICS.map(t => ({
    chapter: t.id,
    topic: t.title,
    part: t.moduleId,
    pages: 10,
    slots: 2
}));

const ECONOMY_SCHEDULE: WeeklyScheduleData[] = [
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
            saturday: ["Macro Economics Mock 1"],
            sunday: [1, 2, 3, 4, 5]
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
            thursday: [20, 21],
            friday: [22, 23, 24],
            saturday: ["Banking & Finance Mock"],
            sunday: [13, 14, 15]
        }
    },
    // Add more weeks as needed
];

export const ECONOMY_CONFIG: SubjectConfig = {
    id: "economy",
    title: "Indian Economy",
    subtitle: "Concepts, Trends, and Economic Survey Analysis",
    totalChapters: 65,
    totalParts: 4,
    modules: ECONOMY_MODULES,
    topics: ECONOMY_TOPICS,
    chapters: ECONOMY_CHAPTERS,
    schedules: ECONOMY_SCHEDULE,
    colors: {
        primary: "blue",
        heroGradient: "from-blue-700 via-indigo-800 to-purple-900"
    },
    basePath: "/student/batch1/economy"
};
