
export interface RASSession {
    type: "Deep Work" | "Quick Review" | "Test" | "Practice" | "Classwork";
    topic: string;
    description?: string;
    durationMinutes: number;
    resourceLink?: string;
    completed?: boolean;
}

export interface RASDayPlan {
    day: number;
    date: string; // YYYY-MM-DD
    title: string; // e.g., "Physics & Reasoning Day 1"
    targetHours: number;
    status: "locked" | "active" | "completed" | "missed";
    sessions: RASSession[];
}

// Helper to generate dates
const startDate = new Date("2026-01-20");
const getDate = (dayOffset: number) => {
    const d = new Date(startDate);
    d.setDate(d.getDate() + dayOffset - 1); // Day 1 is offset 0
    return d.toISOString().split('T')[0];
};

export const RAS_REVISION_PLAN: RASDayPlan[] = [
    // --- PHASE 1: SCIENCE & LOGIC BUILDER (Jan 20 - Jan 29) ---
    // Goal: Physics and Reasoning Daily
    ...Array.from({ length: 10 }, (_, i) => ({
        day: i + 1,
        date: getDate(i + 1),
        title: `Phase 1: Physics & Reasoning (Day ${i + 1})`,
        targetHours: 7.75, // 2h45 + 3h + 2h
        status: (i === 0 ? "active" : "locked") as RASDayPlan['status'],
        sessions: [
            {
                type: "Classwork" as const,
                topic: "Live Class Revision",
                description: "Math (10 Qs) + Medieval History (Recall Notes).",
                durationMinutes: 165 // 2h 45m
            },
            {
                type: "Deep Work" as const,
                topic: "Physics: Mechanics & Light",
                description: "Focus on Pre-specific topics (Gravitation, Optics).",
                durationMinutes: 180 // 3h
            },
            {
                type: "Practice" as const,
                topic: "Reasoning: Logical & Analytical",
                description: "Coding-Decoding, Blood Relations. Practice only.",
                durationMinutes: 120 // 2h
            }
        ]
    })),

    // --- PHASE 2: BIOLOGY SPRINT (Jan 30 - Jan 31) ---
    // Goal: Biology Complete
    ...Array.from({ length: 2 }, (_, i) => ({
        day: 11 + i,
        date: getDate(11 + i),
        title: `Phase 2: Biology Sprint (Day ${i + 1})`,
        targetHours: 7.75,
        status: "locked" as RASDayPlan['status'],
        sessions: [
            {
                type: "Classwork" as const,
                topic: "Live Class Revision",
                description: "Math + History Revision.",
                durationMinutes: 165
            },
            {
                type: "Deep Work" as const,
                topic: "Biology: Systems & Diseases",
                description: "Digestive, Circulatory, Human Diseases.",
                durationMinutes: 180
            },
            {
                type: "Practice" as const,
                topic: "Reasoning / Hindi",
                description: "Maintain flow.",
                durationMinutes: 120
            }
        ]
    })),

    // --- PHASE 3: THE ECONOMIC GRIND (Feb 1 - Feb 28) ---
    // Goal: Eco Survey + Raj History/Polity
    ...Array.from({ length: 28 }, (_, i) => ({
        day: 13 + i,
        date: getDate(13 + i),
        title: `Phase 3: Economy & Core (Day ${i + 1})`,
        targetHours: 7.75,
        status: "locked" as RASDayPlan['status'],
        sessions: [
            {
                type: "Classwork" as const,
                topic: "Live Class Revision",
                description: "Math + History Revision.",
                durationMinutes: 165
            },
            {
                type: "Deep Work" as const,
                topic: "Rajasthan History / Polity",
                description: "1 New Chapter Daily (Mewar, Marwar, Governor, etc.).",
                durationMinutes: 180
            },
            {
                type: "Deep Work" as const,
                topic: "Economic Survey 2024-25",
                description: "Data memorization. High scoring area.",
                durationMinutes: 120
            }
        ]
    })),

    // Fill remaining days to reach 70 if needed (March onwards)
    ...Array.from({ length: 29 }, (_, i) => ({
        day: 41 + i,
        date: getDate(41 + i),
        title: `Phase 4: Full Throttle (Day ${i + 1})`,
        targetHours: 8,
        status: "locked" as RASDayPlan['status'],
        sessions: [
            { type: "Deep Work" as const, topic: "Full Syllabus Revision", description: "Consolidation phase.", durationMinutes: 240 },
            { type: "Test" as const, topic: "Full Length Tests", description: "Daily FLT practice.", durationMinutes: 180 }
        ]
    }))
];
