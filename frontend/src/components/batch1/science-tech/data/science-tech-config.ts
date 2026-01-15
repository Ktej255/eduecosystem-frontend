import { SubjectConfig, WeeklyScheduleData } from "../../framework/SubjectPlanner";
import { Atom, Microscope, Rocket, Cpu } from "lucide-react";
import React from "react";

// --- Syllabus Data ---

const SCIENCE_TECH_MODULES = [
    {
        id: "1",
        title: "Biology & Health",
        description: "Cell biology, Human physiology, Diseases, and Vaccines.",
        icon: React.createElement(Microscope),
        color: "green",
        topicRange: [1, 15] as [number, number]
    },
    {
        id: "2",
        title: "Physics & Chemistry",
        description: "Scientific principles, optics, sound, nanotechnology, and nuclear physics.",
        icon: React.createElement(Atom),
        color: "blue",
        topicRange: [16, 25] as [number, number]
    },
    {
        id: "3",
        title: "Space & Defense",
        description: "ISRO missions, satellites, launch vehicles, and DRDO missiles.",
        icon: React.createElement(Rocket),
        color: "orange",
        topicRange: [26, 40] as [number, number]
    },
    {
        id: "4",
        title: "Emerging Technologies",
        description: "AI, Blockchain, 5G, Biotech, and Robotics.",
        icon: React.createElement(Cpu),
        color: "violet",
        topicRange: [41, 55] as [number, number]
    }
];

// Placeholder Topics
const SCIENCE_TECH_TOPICS = Array.from({ length: 55 }, (_, i) => {
    const id = i + 1;
    let moduleId = "1";
    if (id > 15) moduleId = "2";
    if (id > 25) moduleId = "3";
    if (id > 40) moduleId = "4";

    return {
        id: id,
        title: `Science Topic ${id}`,
        moduleId: moduleId,
        priority: id % 3 === 0 ? "High" : "Medium",
        staticFocus: "Core principles and current developments...",
        keyConcepts: ["Principle X", "Tech Y"],
        currentAffairsCount: Math.floor(Math.random() * 8), // High CA
    };
}) as any[];

const SCIENCE_TECH_CHAPTERS = SCIENCE_TECH_TOPICS.map(t => ({
    chapter: t.id,
    topic: t.title,
    part: t.moduleId,
    pages: 10,
    slots: 2
}));

const SCIENCE_TECH_SCHEDULE: WeeklyScheduleData[] = [
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
            saturday: ["Biology Mock Test 1"],
            sunday: [1, 2, 3, 4, 5]
        }
    },
    {
        week: 2,
        totalSlots: 24,
        totalPages: 90,
        days: {
            monday: [16, 17, 18],
            tuesday: [26, 27],
            wednesday: [28, 29],
            thursday: [30, 31],
            friday: [41, 42],
            saturday: ["Space & Tech Mock"],
            sunday: [16, 26, 28, 41]
        }
    },
    // More weeks
];

export const SCIENCE_TECH_CONFIG: SubjectConfig = {
    id: "science-tech",
    title: "Science & Technology",
    subtitle: "General Science to Cutting-Edge Developments",
    totalChapters: 55,
    totalParts: 4,
    modules: SCIENCE_TECH_MODULES,
    topics: SCIENCE_TECH_TOPICS,
    chapters: SCIENCE_TECH_CHAPTERS,
    schedules: SCIENCE_TECH_SCHEDULE,
    colors: {
        primary: "violet",
        heroGradient: "from-violet-800 via-purple-900 to-indigo-900"
    },
    basePath: "/student/batch1/science-tech"
};
