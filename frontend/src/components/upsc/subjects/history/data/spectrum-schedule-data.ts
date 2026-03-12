export interface SpectrumDaySchedule {
    day: number;
    phase: number;
    title: string;
    chapters: number[];
    chapterNames: string[];
    mcqCount: number;
    isAssessmentDay: boolean; // Every 5 days
    date: string;
}

export const SPECTRUM_START_DATE = new Date('2026-02-06T00:00:00');

export const SPECTRUM_SCHEDULE: SpectrumDaySchedule[] = [
    // Phase 1: Advent to 1857 (Days 1-4)
    {
        day: 1,
        phase: 1,
        title: "Sources & Advent of Europeans",
        chapters: [1, 2, 3],
        chapterNames: ["Sources for the History of Modern India", "Major Approaches", "Advent of the Europeans in India"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-06"
    },
    {
        day: 2,
        phase: 1,
        title: "Expansion of British Power",
        chapters: [4, 5],
        chapterNames: ["India on the Eve of British Conquest", "Expansion and Consolidation of British Power"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-07"
    },
    {
        day: 3,
        phase: 1,
        title: "People's Resistance & 1857 Revolt",
        chapters: [6, 7],
        chapterNames: ["People's Resistance Before 1857", "The Revolt of 1857"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-08"
    },
    {
        day: 4,
        phase: 1,
        title: "Socio-Religious Reform",
        chapters: [8, 9],
        chapterNames: ["Socio-Religious Reform: General Features", "General Survey of Reform Movements"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-09"
    },
    {
        day: 5,
        phase: 1,
        title: "ASSESSMENT DAY - PHASE 1",
        chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        chapterNames: ["Consolidated Review (Ch 1-9)"],
        mcqCount: 100, // Assessment Day
        isAssessmentDay: true,
        date: "2026-02-10"
    },

    // Phase 2: Moderate to Extremist (Days 6-9)
    {
        day: 6,
        phase: 2,
        title: "The Struggle Begins",
        chapters: [10, 11, 12],
        chapterNames: ["Beginning of Modern Nationalism", "INC: Foundation & Moderate Phase", "Era of Militant Nationalism"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-11"
    },
    {
        day: 7,
        phase: 2,
        title: "Revolution & WWI Era",
        chapters: [13, 14, 15],
        chapterNames: ["First Phase of Revolutionary Activities", "First World War & Nationalist Response", "Emergence of Gandhi"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-12"
    },
    {
        day: 8,
        phase: 2,
        title: "Non-Cooperation & Swarajists",
        chapters: [16, 17],
        chapterNames: ["Non-Cooperation Movement & Khilafat", "Swarajists & Socialist Ideas"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-13"
    },
    {
        day: 9,
        phase: 2,
        title: "Simon Commission & CDM",
        chapters: [18, 19],
        chapterNames: ["Simon Commission & Nehru Report", "Civil Disobedience Movement & RTC"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-14"
    },
    {
        day: 10,
        phase: 2,
        title: "ASSESSMENT DAY - PHASE 2",
        chapters: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        chapterNames: ["Consolidated Review (Ch 10-19)"],
        mcqCount: 100,
        isAssessmentDay: true,
        date: "2026-02-15"
    },

    // Phase 3: Towards Independence (Days 11-15)
    {
        day: 11,
        phase: 3,
        title: "From 1935 to 1940s",
        chapters: [20, 21, 22],
        chapterNames: ["Debates on Future Strategy", "Congress Rule in Provinces", "Nationalist Response to WWII"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-16"
    },
    {
        day: 12,
        phase: 3,
        title: "Quit India & Partition",
        chapters: [23, 24, 25],
        chapterNames: ["Quit India, Pakistan Demand & INA", "Post-War National Scenario", "Independence with Partition"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-17"
    },
    {
        day: 13,
        phase: 3,
        title: "Administrative & British Policies",
        chapters: [26, 27, 28, 29],
        chapterNames: ["Constitutional Developments", "Survey of British Policies", "Economic Impact", "Development of Indian Press"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-18"
    },
    {
        day: 14,
        phase: 3,
        title: "Education, Peasants & Post-Independence",
        chapters: [30, 31, 32, 33, 34, 35],
        chapterNames: ["Education", "Peasant Movements", "Working Class", "Challenges before Newborn Nation", "Indian States", "Making of Constitution"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-19"
    },
    {
        day: 15,
        phase: 3,
        title: "FINAL ASSESSMENT & POST-INDEPENDENCE",
        chapters: [36, 37, 38, 39],
        chapterNames: ["Evolution of Foreign Policy", "First General Elections", "Nehru's Vision", "Succession & 1965 War"],
        mcqCount: 150, // Major Test
        isAssessmentDay: true,
        date: "2026-02-20"
    }
];

export const SPECTRUM_PHASES = [
    { id: 1, title: "Foundation & 1857", days: "1-5" },
    { id: 2, title: "The Freedom Struggle", days: "6-10" },
    { id: 3, title: "Independence & Legacy", days: "11-15" }
];

// Helper to get today's plan
export function getSpectrumDaySchedule(): SpectrumDaySchedule | null {
    const today = new Date();
    // Reset time for accurate day calc
    today.setHours(0, 0, 0, 0);
    const start = new Date(SPECTRUM_START_DATE);
    start.setHours(0, 0, 0, 0);

    const diffTime = today.getTime() - start.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= 0 && diffDays < SPECTRUM_SCHEDULE.length) {
        return SPECTRUM_SCHEDULE[diffDays];
    }
    return null;
}
