// UPSC Polity 95 Topics - Module-Based Study Structure
// "Mirror Studying" approach for 40% faster revision

export interface ChapterPair {
    primaryId: number;
    primaryTitle: string;
    mirrorId?: number;          // Optional mirror chapter
    mirrorTitle?: string;
    readingMinutes: number;     // First-time reading
    comprehensionMinutes: number; // Understanding & notes
    recallMinutes: number;      // Voice recall practice
    pomodoroSessions: number;   // Total Pomodoros needed (calculated)
    isCompleted?: boolean;
}

export interface StudyModule {
    id: number;
    name: string;
    description: string;
    color: string;
    weekNumber: number;         // Suggested week to study
    chapters: ChapterPair[];
    totalMinutes: number;       // Calculated total time
}

// Calculate Pomodoro sessions: (total minutes / 25) rounded up
const calcPomodoros = (reading: number, comp: number, recall: number) =>
    Math.ceil((reading + comp + recall) / 25);

// ========== MODULE 1: MIRROR EXECUTIVES ==========
const MODULE_1_CHAPTERS: ChapterPair[] = [
    {
        primaryId: 18, primaryTitle: "President",
        mirrorId: 31, mirrorTitle: "Governor",
        readingMinutes: 60, comprehensionMinutes: 30, recallMinutes: 15,
        pomodoroSessions: calcPomodoros(60, 30, 15)
    },
    {
        primaryId: 20, primaryTitle: "Prime Minister",
        mirrorId: 32, mirrorTitle: "Chief Minister",
        readingMinutes: 40, comprehensionMinutes: 20, recallMinutes: 10,
        pomodoroSessions: calcPomodoros(40, 20, 10)
    },
    {
        primaryId: 21, primaryTitle: "Central Council of Ministers",
        mirrorId: 33, mirrorTitle: "State Council of Ministers",
        readingMinutes: 35, comprehensionMinutes: 15, recallMinutes: 10,
        pomodoroSessions: calcPomodoros(35, 15, 10)
    },
    {
        primaryId: 19, primaryTitle: "Vice-President",
        readingMinutes: 25, comprehensionMinutes: 10, recallMinutes: 5,
        pomodoroSessions: calcPomodoros(25, 10, 5)
    }
];

// ========== MODULE 2: LEGISLATIVE MACHINERY ==========
const MODULE_2_CHAPTERS: ChapterPair[] = [
    {
        primaryId: 23, primaryTitle: "Parliament",
        mirrorId: 34, mirrorTitle: "State Legislature",
        readingMinutes: 90, comprehensionMinutes: 45, recallMinutes: 20,
        pomodoroSessions: calcPomodoros(90, 45, 20)
    },
    {
        primaryId: 24, primaryTitle: "Parliamentary Committees",
        readingMinutes: 40, comprehensionMinutes: 20, recallMinutes: 10,
        pomodoroSessions: calcPomodoros(40, 20, 10)
    },
    {
        primaryId: 22, primaryTitle: "Cabinet Committees",
        readingMinutes: 20, comprehensionMinutes: 10, recallMinutes: 5,
        pomodoroSessions: calcPomodoros(20, 10, 5)
    }
];

// ========== MODULE 3: INTEGRATED JUDICIARY ==========
const MODULE_3_CHAPTERS: ChapterPair[] = [
    {
        primaryId: 27, primaryTitle: "Supreme Court",
        mirrorId: 35, mirrorTitle: "High Court",
        readingMinutes: 60, comprehensionMinutes: 30, recallMinutes: 15,
        pomodoroSessions: calcPomodoros(60, 30, 15)
    },
    {
        primaryId: 37, primaryTitle: "Subordinate Courts",
        mirrorId: 36, mirrorTitle: "Tribunals",
        readingMinutes: 30, comprehensionMinutes: 15, recallMinutes: 10,
        pomodoroSessions: calcPomodoros(30, 15, 10)
    },
    {
        primaryId: 28, primaryTitle: "Judicial Review",
        readingMinutes: 25, comprehensionMinutes: 15, recallMinutes: 10,
        pomodoroSessions: calcPomodoros(25, 15, 10)
    },
    {
        primaryId: 29, primaryTitle: "Judicial Activism",
        readingMinutes: 20, comprehensionMinutes: 10, recallMinutes: 5,
        pomodoroSessions: calcPomodoros(20, 10, 5)
    },
    {
        primaryId: 30, primaryTitle: "PIL (Public Interest Litigation)",
        readingMinutes: 25, comprehensionMinutes: 10, recallMinutes: 5,
        pomodoroSessions: calcPomodoros(25, 10, 5)
    }
];

// ========== MODULE 4: FEDERAL AXIS ==========
const MODULE_4_CHAPTERS: ChapterPair[] = [
    {
        primaryId: 14, primaryTitle: "Federal System",
        mirrorId: 15, mirrorTitle: "Centre-State Relations",
        readingMinutes: 50, comprehensionMinutes: 25, recallMinutes: 15,
        pomodoroSessions: calcPomodoros(50, 25, 15)
    },
    {
        primaryId: 16, primaryTitle: "Inter-State Relations",
        mirrorId: 17, mirrorTitle: "Emergency Provisions",
        readingMinutes: 45, comprehensionMinutes: 20, recallMinutes: 10,
        pomodoroSessions: calcPomodoros(45, 20, 10)
    },
    {
        primaryId: 47, primaryTitle: "GST Council",
        mirrorId: 55, mirrorTitle: "NITI Aayog",
        readingMinutes: 30, comprehensionMinutes: 15, recallMinutes: 10,
        pomodoroSessions: calcPomodoros(30, 15, 10)
    }
];

// ========== MODULE 5: PHILOSOPHY (SOUL OF CONSTITUTION) ==========
const MODULE_5_CHAPTERS: ChapterPair[] = [
    {
        primaryId: 5, primaryTitle: "Preamble of the Constitution",
        readingMinutes: 30, comprehensionMinutes: 15, recallMinutes: 10,
        pomodoroSessions: calcPomodoros(30, 15, 10)
    },
    {
        primaryId: 7, primaryTitle: "Citizenship",
        readingMinutes: 35, comprehensionMinutes: 15, recallMinutes: 10,
        pomodoroSessions: calcPomodoros(35, 15, 10)
    },
    {
        primaryId: 8, primaryTitle: "Fundamental Rights",
        readingMinutes: 75, comprehensionMinutes: 35, recallMinutes: 20,
        pomodoroSessions: calcPomodoros(75, 35, 20)
    },
    {
        primaryId: 9, primaryTitle: "Directive Principles of State Policy",
        readingMinutes: 45, comprehensionMinutes: 20, recallMinutes: 10,
        pomodoroSessions: calcPomodoros(45, 20, 10)
    },
    {
        primaryId: 10, primaryTitle: "Fundamental Duties",
        readingMinutes: 25, comprehensionMinutes: 10, recallMinutes: 5,
        pomodoroSessions: calcPomodoros(25, 10, 5)
    },
    {
        primaryId: 11, primaryTitle: "Amendment of the Constitution",
        mirrorId: 12, mirrorTitle: "Basic Structure Doctrine",
        readingMinutes: 40, comprehensionMinutes: 20, recallMinutes: 10,
        pomodoroSessions: calcPomodoros(40, 20, 10)
    }
];

// ========== MODULE 6: CONSTITUTIONAL BODIES - GROUP A ==========
const MODULE_6_CHAPTERS: ChapterPair[] = [
    {
        primaryId: 43, primaryTitle: "Election Commission",
        readingMinutes: 40, comprehensionMinutes: 20, recallMinutes: 10,
        pomodoroSessions: calcPomodoros(40, 20, 10)
    },
    {
        primaryId: 52, primaryTitle: "CAG (Comptroller & Auditor General)",
        readingMinutes: 30, comprehensionMinutes: 15, recallMinutes: 10,
        pomodoroSessions: calcPomodoros(30, 15, 10)
    },
    {
        primaryId: 44, primaryTitle: "UPSC",
        mirrorId: 45, mirrorTitle: "SPSC",
        readingMinutes: 35, comprehensionMinutes: 15, recallMinutes: 10,
        pomodoroSessions: calcPomodoros(35, 15, 10)
    }
];

// ========== MODULE 7: CONSTITUTIONAL BODIES - GROUP B ==========
const MODULE_7_CHAPTERS: ChapterPair[] = [
    {
        primaryId: 46, primaryTitle: "Finance Commission",
        readingMinutes: 30, comprehensionMinutes: 15, recallMinutes: 10,
        pomodoroSessions: calcPomodoros(30, 15, 10)
    },
    {
        primaryId: 48, primaryTitle: "National Commission for SCs",
        readingMinutes: 25, comprehensionMinutes: 10, recallMinutes: 5,
        pomodoroSessions: calcPomodoros(25, 10, 5)
    },
    {
        primaryId: 49, primaryTitle: "National Commission for STs",
        readingMinutes: 25, comprehensionMinutes: 10, recallMinutes: 5,
        pomodoroSessions: calcPomodoros(25, 10, 5)
    },
    {
        primaryId: 50, primaryTitle: "NCBC (Backward Classes)",
        readingMinutes: 25, comprehensionMinutes: 10, recallMinutes: 5,
        pomodoroSessions: calcPomodoros(25, 10, 5)
    },
    {
        primaryId: 51, primaryTitle: "Special Officer for Linguistic Minorities",
        readingMinutes: 15, comprehensionMinutes: 5, recallMinutes: 5,
        pomodoroSessions: calcPomodoros(15, 5, 5)
    },
    {
        primaryId: 53, primaryTitle: "Attorney General of India",
        mirrorId: 54, mirrorTitle: "Advocate General of State",
        readingMinutes: 25, comprehensionMinutes: 10, recallMinutes: 5,
        pomodoroSessions: calcPomodoros(25, 10, 5)
    }
];

// ========== MODULE 8: LOCAL & SPECIAL GOVERNANCE ==========
const MODULE_8_CHAPTERS: ChapterPair[] = [
    {
        primaryId: 39, primaryTitle: "Panchayati Raj",
        mirrorId: 40, mirrorTitle: "Municipalities",
        readingMinutes: 50, comprehensionMinutes: 25, recallMinutes: 15,
        pomodoroSessions: calcPomodoros(50, 25, 15)
    },
    {
        primaryId: 41, primaryTitle: "Union Territories",
        mirrorId: 42, mirrorTitle: "Scheduled & Tribal Areas",
        readingMinutes: 35, comprehensionMinutes: 15, recallMinutes: 10,
        pomodoroSessions: calcPomodoros(35, 15, 10)
    },
    {
        primaryId: 38, primaryTitle: "Special Provisions for Some States",
        readingMinutes: 30, comprehensionMinutes: 15, recallMinutes: 10,
        pomodoroSessions: calcPomodoros(30, 15, 10)
    }
];

// Calculate total minutes for a module
const calcModuleTotal = (chapters: ChapterPair[]) =>
    chapters.reduce((sum, ch) => sum + ch.readingMinutes + ch.comprehensionMinutes + ch.recallMinutes, 0);

// ========== MAIN EXPORT: 8 STUDY MODULES ==========
export const POLITY_STUDY_MODULES: StudyModule[] = [
    {
        id: 1,
        name: "Mirror Executives",
        description: "President ↔ Governor, PM ↔ CM, Ministers",
        color: "blue",
        weekNumber: 1,
        chapters: MODULE_1_CHAPTERS,
        totalMinutes: calcModuleTotal(MODULE_1_CHAPTERS)
    },
    {
        id: 2,
        name: "Legislative Machinery",
        description: "Parliament ↔ State Legislature, Committees",
        color: "indigo",
        weekNumber: 2,
        chapters: MODULE_2_CHAPTERS,
        totalMinutes: calcModuleTotal(MODULE_2_CHAPTERS)
    },
    {
        id: 3,
        name: "Integrated Judiciary",
        description: "SC ↔ HC, Tribunals, Judicial Review & Activism",
        color: "purple",
        weekNumber: 3,
        chapters: MODULE_3_CHAPTERS,
        totalMinutes: calcModuleTotal(MODULE_3_CHAPTERS)
    },
    {
        id: 4,
        name: "Federal Axis",
        description: "Federal System, Centre-State, Emergency",
        color: "violet",
        weekNumber: 4,
        chapters: MODULE_4_CHAPTERS,
        totalMinutes: calcModuleTotal(MODULE_4_CHAPTERS)
    },
    {
        id: 5,
        name: "Philosophy",
        description: "Preamble, Rights, DPSP, Duties, Amendment",
        color: "amber",
        weekNumber: 5,
        chapters: MODULE_5_CHAPTERS,
        totalMinutes: calcModuleTotal(MODULE_5_CHAPTERS)
    },
    {
        id: 6,
        name: "Constitutional Bodies A",
        description: "EC, CAG, UPSC ↔ SPSC",
        color: "teal",
        weekNumber: 6,
        chapters: MODULE_6_CHAPTERS,
        totalMinutes: calcModuleTotal(MODULE_6_CHAPTERS)
    },
    {
        id: 7,
        name: "Constitutional Bodies B",
        description: "Finance Commission, SC/ST/OBC Commissions",
        color: "orange",
        weekNumber: 7,
        chapters: MODULE_7_CHAPTERS,
        totalMinutes: calcModuleTotal(MODULE_7_CHAPTERS)
    },
    {
        id: 8,
        name: "Local Governance",
        description: "Panchayat ↔ Municipalities, UTs, Special Areas",
        color: "green",
        weekNumber: 8,
        chapters: MODULE_8_CHAPTERS,
        totalMinutes: calcModuleTotal(MODULE_8_CHAPTERS)
    }
];

// Helper: Get all chapter IDs for a module
export function getModuleChapterIds(moduleId: number): number[] {
    const module = POLITY_STUDY_MODULES.find(m => m.id === moduleId);
    if (!module) return [];

    const ids: number[] = [];
    module.chapters.forEach(ch => {
        ids.push(ch.primaryId);
        if (ch.mirrorId) ids.push(ch.mirrorId);
    });
    return ids;
}

// Helper: Get module for a specific week
export function getModuleForWeek(weekNumber: number): StudyModule | undefined {
    return POLITY_STUDY_MODULES.find(m => m.weekNumber === weekNumber);
}

// Helper: Get all chapters as flat list for a week
export function getChaptersForWeek(weekNumber: number): ChapterPair[] {
    const module = getModuleForWeek(weekNumber);
    return module?.chapters || [];
}

// Helper: Calculate total Pomodoros for a module
export function getModulePomodoroCount(moduleId: number): number {
    const module = POLITY_STUDY_MODULES.find(m => m.id === moduleId);
    if (!module) return 0;
    return module.chapters.reduce((sum, ch) => sum + ch.pomodoroSessions, 0);
}
