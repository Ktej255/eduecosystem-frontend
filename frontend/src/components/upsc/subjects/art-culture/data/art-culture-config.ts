import { SubjectConfig, WeeklyScheduleData } from "../../../common/framework/SubjectPlanner";
import { Palette, Music, Book, Star } from "lucide-react";
import React from "react";

// --- Syllabus Data ---

const ART_CULTURE_MODULES = [
    {
        id: "1",
        title: "Visual Arts",
        description: "Architecture, Sculpture, Painting, and Pottery.",
        icon: React.createElement(Palette),
        color: "amber",
        topicRange: [1, 20] as [number, number]
    },
    {
        id: "2",
        title: "Performing Arts",
        description: "Indian Classical Music, Dance forms, Theatre, and Martial Arts.",
        icon: React.createElement(Music),
        color: "rose",
        topicRange: [21, 35] as [number, number]
    },
    {
        id: "3",
        title: "Language & Literature",
        description: "Classical languages, regional literature, and religious texts.",
        icon: React.createElement(Book),
        color: "blue",
        topicRange: [36, 45] as [number, number]
    },
    {
        id: "4",
        title: "Miscellaneous & Analysis",
        description: "Fairs, Festivals, UNESCO Sites, and Cultural Institutions.",
        icon: React.createElement(Star),
        color: "yellow",
        topicRange: [46, 55] as [number, number]
    }
];

// Placeholder Topics
const ART_CULTURE_TOPICS = Array.from({ length: 55 }, (_, i) => {
    const id = i + 1;
    let moduleId = "1";
    if (id > 20) moduleId = "2";
    if (id > 35) moduleId = "3";
    if (id > 45) moduleId = "4";

    return {
        id: id,
        title: `Art & Culture Topic ${id}`,
        moduleId: moduleId,
        priority: id % 3 === 0 ? "High" : "Medium",
        staticFocus: "Key forms and examples...",
        keyConcepts: ["School X", "Style Y"],
        currentAffairsCount: Math.floor(Math.random() * 2), // Lower CA
    };
}) as any[];

const ART_CULTURE_CHAPTERS = ART_CULTURE_TOPICS.map(t => ({
    chapter: t.id,
    topic: t.title,
    part: t.moduleId,
    pages: 15,
    slots: 2
}));

const ART_CULTURE_SCHEDULE: WeeklyScheduleData[] = [
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
            saturday: ["Temple Architecture Mock"],
            sunday: [1, 2, 3, 4]
        }
    },
    // More weeks
];

export const ART_CULTURE_CONFIG: SubjectConfig = {
    id: "art-culture",
    title: "Art & Culture",
    subtitle: "Heritage, Traditions, and Artistic Expressions of India",
    totalChapters: 55,
    totalParts: 4,
    modules: ART_CULTURE_MODULES,
    topics: ART_CULTURE_TOPICS,
    chapters: ART_CULTURE_CHAPTERS,
    schedules: ART_CULTURE_SCHEDULE,
    colors: {
        primary: "rose",
        heroGradient: "from-rose-700 via-pink-800 to-amber-900"
    },
    basePath: "/student/upsc/art-culture"
};
