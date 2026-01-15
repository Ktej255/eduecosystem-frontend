import { SubjectConfig, WeeklyScheduleData } from "../../framework/SubjectPlanner";
import { Leaf, Warehouse, CloudFog, Scale } from "lucide-react"; // Warehouse as placeholder for conservation/bank, CloudFog for pollution
import React from "react";

// --- Syllabus Data ---

const ENVIRONMENT_MODULES = [
    {
        id: "1",
        title: "Ecology & Ecosystems",
        description: "Functions of ecosystems, energy flow, productivity, and biomes.",
        icon: React.createElement(Leaf),
        color: "green",
        topicRange: [1, 15] as [number, number]
    },
    {
        id: "2",
        title: "Biodiversity & Conservation",
        description: "Flora, fauna, protected areas, red data book, and conservation efforts.",
        icon: React.createElement(Warehouse), // Using warehouse as 'store' of nature
        color: "emerald",
        topicRange: [16, 30] as [number, number]
    },
    {
        id: "3",
        title: "Climate Change & Organizations",
        description: "Global warming, UNFCCC, Kyoto, Paris Agreement, and international bodies.",
        icon: React.createElement(CloudFog),
        color: "cyan",
        topicRange: [31, 45] as [number, number]
    },
    {
        id: "4",
        title: "Pollution & Acts",
        description: "Air, Water, Noise pollution, and environmental legislation in India.",
        icon: React.createElement(Scale), // Scale for Laws/Acts
        color: "red",
        topicRange: [46, 55] as [number, number]
    }
];

// Placeholder Topics
const ENVIRONMENT_TOPICS = Array.from({ length: 55 }, (_, i) => {
    const id = i + 1;
    let moduleId = "1";
    if (id > 15) moduleId = "2";
    if (id > 30) moduleId = "3";
    if (id > 45) moduleId = "4";

    return {
        id: id,
        title: `Environment Topic ${id}`,
        moduleId: moduleId,
        priority: id % 3 === 0 ? "High" : "Medium",
        staticFocus: "Core environmental definitions and current status...",
        keyConcepts: ["Process X", "Act Y"],
        currentAffairsCount: Math.floor(Math.random() * 6), // High CA
    };
}) as any[];

const ENVIRONMENT_CHAPTERS = ENVIRONMENT_TOPICS.map(t => ({
    chapter: t.id,
    topic: t.title,
    part: t.moduleId,
    pages: 8,
    slots: 2
}));

const ENVIRONMENT_SCHEDULE: WeeklyScheduleData[] = [
    {
        week: 1,
        totalSlots: 24,
        totalPages: 80,
        days: {
            monday: [1, 2, 3],
            tuesday: [4, 5],
            wednesday: [6, 7],
            thursday: [8, 9, 10],
            friday: [11],
            saturday: ["Ecology Mock Test"],
            sunday: [1, 2, 3, 4]
        }
    },
    {
        week: 2,
        totalSlots: 24,
        totalPages: 90,
        days: {
            monday: [16, 17, 18],
            tuesday: [19, 20],
            wednesday: [21, 22],
            thursday: [23, 24],
            friday: [25, 26],
            saturday: ["Biodiversity Mock"],
            sunday: [16, 17, 18]
        }
    },
    // More weeks
];

export const ENVIRONMENT_CONFIG: SubjectConfig = {
    id: "environment",
    title: "Environment & Ecology",
    subtitle: "Conservation, Climate Change, and Sustainable Development",
    totalChapters: 55,
    totalParts: 4,
    modules: ENVIRONMENT_MODULES,
    topics: ENVIRONMENT_TOPICS,
    chapters: ENVIRONMENT_CHAPTERS,
    schedules: ENVIRONMENT_SCHEDULE,
    colors: {
        primary: "emerald",
        heroGradient: "from-emerald-800 via-green-800 to-teal-900"
    },
    basePath: "/student/batch1/environment"
};
