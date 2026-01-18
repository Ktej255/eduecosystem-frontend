/**
 * Content Registry - Centralized mapping of days to content sources
 * This registry enables dynamic loading of CSAT questions, flashcards, and MCQs
 * for any day without hardcoding specific day checks.
 */

// === CSAT DATA IMPORTS ===
// === CSAT DATA IMPORTS ===
import { CSAT_DATA_MAP, CSATSessionData as SessionData } from "@/app/(student-portal)/student/batch1/csat/csat-data";
// import type { SessionData } from "@/app/(student-portal)/student/batch1/csat/csat-data";

// === FLASHCARD DATA IMPORTS ===
import { DAY2_FLASHCARDS } from "./polity/data/day2-flashcards";
import { DAY3_FLASHCARDS } from "./polity/data/day3-flashcards";
import { DAY4_FLASHCARDS } from "./polity/data/day4-flashcards";
import { DAY5_FLASHCARDS } from "./polity/data/day5-flashcards";
import { DAY6_FLASHCARDS } from "./polity/data/day6-flashcards";
import { DAY7_FLASHCARDS } from "./polity/data/day7-flashcards";
import { DAY8_FLASHCARDS } from "./polity/data/day8-flashcards";
import { DAY9_FLASHCARDS } from './polity/data/day9-flashcards';
import { DAY10_FLASHCARDS } from './polity/data/day10-flashcards';
import { DAY11_FLASHCARDS } from './polity/data/day11-flashcards';
import { DAY12_FLASHCARDS } from './polity/data/day12-flashcards';
import { DAY13_FLASHCARDS } from './polity/data/day13-flashcards';
import { DAY14_FLASHCARDS } from './polity/data/day14-flashcards';
import { DAY15_FLASHCARDS } from './polity/data/day15-flashcards';
import { DAY16_FLASHCARDS } from './polity/data/day16-flashcards';
import { DAY17_FLASHCARDS } from './polity/data/day17-flashcards';
import { DAY18_FLASHCARDS } from './polity/data/day18-flashcards';
import { DAY19_FLASHCARDS } from './polity/data/day19-flashcards';
import { DAY20_FLASHCARDS } from './polity/data/day20-flashcards';
import { DAY21_FLASHCARDS } from './polity/data/day21-flashcards';
import { DAY22_FLASHCARDS } from './polity/data/day22-flashcards';
import { DAY23_FLASHCARDS } from './polity/data/day23-flashcards';
import { DAY24_FLASHCARDS } from './polity/data/day24-flashcards';
import { DAY25_FLASHCARDS } from './polity/data/day25-flashcards';
import { DAY26_FLASHCARDS } from './polity/data/day26-flashcards';
import { DAY27_FLASHCARDS } from './polity/data/day27-flashcards';
import { DAY28_FLASHCARDS } from './polity/data/day28-flashcards';
import { DAY29_FLASHCARDS } from './polity/data/day29-flashcards';
import { DAY30_FLASHCARDS } from './polity/data/day30-flashcards';
import { DAY31_FLASHCARDS } from './polity/data/day31-flashcards';
import { DAY32_FLASHCARDS } from './polity/data/day32-flashcards';
import { DAY33_FLASHCARDS } from './polity/data/day33-flashcards';
import { DAY9_DPSP_FLASHCARDS } from "./polity/data/day9-dpsp-flashcards";
import { DAY9_FD_FLASHCARDS } from "./polity/data/day9-fd-flashcards";
import { WEEK1_FLASHCARDS } from "./polity/data/week1-flashcards";
import type { Flashcard } from "./flashcard/flashcard-utils";

// === MCQ DATA IMPORTS ===
import { WEEK1_MCQS } from './polity/data/week1-mcqs'; // Day 1
import { DAY2_MCQS } from "./polity/data/day2-mcqs";
import { DAY3_MCQS } from "./polity/data/day3-mcqs";
import { DAY4_MCQS } from "./polity/data/day4-mcqs";
import { DAY5_MCQS } from "./polity/data/day5-mcqs";
import { DAY6_MCQS } from "./polity/data/day6-mcqs";
import { DAY7_MCQS } from "./polity/data/day7-mcqs";
import { DAY8_MCQS } from "./polity/data/day8-mcqs";
import { DAY9_MCQS } from "./polity/data/day9-mcqs";
import { DAY10_MCQS } from "./polity/data/day10-mcqs";
import { DAY11_MCQS } from "./polity/data/day11-mcqs";
import { DAY12_MCQS } from "./polity/data/day12-mcqs";
import { DAY13_MCQS } from "./polity/data/day13-mcqs";
import { DAY14_MCQS } from "./polity/data/day14-mcqs";
import { DAY15_MCQS } from "./polity/data/day15-mcqs";
import { DAY16_MCQS } from "./polity/data/day16-mcqs";
import { DAY17_MCQS } from "./polity/data/day17-mcqs";
import { DAY18_MCQS } from "./polity/data/day18-mcqs";
import { DAY19_MCQS } from "./polity/data/day19-mcqs";
import { DAY20_MCQS } from "./polity/data/day20-mcqs";
import { DAY21_MCQS } from "./polity/data/day21-mcqs";
import { DAY22_MCQS } from "./polity/data/day22-mcqs";
import { DAY23_MCQS } from "./polity/data/day23-mcqs";
import { DAY24_MCQS } from "./polity/data/day24-mcqs";
import { DAY25_MCQS } from "./polity/data/day25-mcqs";
import { DAY26_MCQS } from "./polity/data/day26-mcqs";
import { DAY27_MCQS } from "./polity/data/day27-mcqs";
import { DAY28_MCQS } from "./polity/data/day28-mcqs";
import { DAY29_MCQS } from "./polity/data/day29-mcqs";
import { DAY30_MCQS } from "./polity/data/day30-mcqs";
import { DAY31_MCQS } from "./polity/data/day31-mcqs";
import { DAY32_MCQS } from "./polity/data/day32-mcqs";
import { DAY33_MCQS } from './polity/data/day33-mcqs';
import { DAY9_DPSP_MCQS } from "./polity/data/day9-dpsp-mcqs";
import { DAY9_FD_MCQS } from "./polity/data/day9-fd-mcqs";
import { DAY10_PAPER1_MCQS } from "./polity/data/day10-paper1-mcqs";
import { DAY10_PAPER2_MCQS } from "./polity/data/day10-paper2-mcqs";

// Common MCQ Type (Assume exported from day1-mcqs or similar, or define here if needed)
import { MCQ as Question } from "./polity/data/mcq-utils";

// === DYNAMIC IMPORTS ===
import { getMCQsForSubtopics } from "./polity/data/polity-mcqs-data";
import { generateWeeklySchedule, LAXMIKANTH_CHAPTERS } from "./polity/data/polity-schedule-data";
import { CHAPTER_SUBTOPICS } from "./polity/data/polity-subtopics";
import { POLITY_FLASHCARDS_DATA } from "./polity/data/polity-flashcards-data";

// === CSAT CONTENT REGISTRY ===
/**
 * Maps day numbers to their CSAT session data.
 * To add a new day's CSAT content:
 * 1. Create the data file (e.g., day3-csat.ts)
 * 2. Import it above
 * 3. Add an entry here: [3]: DAY3_CSAT_DATA
 */
export const CSAT_CONTENT_REGISTRY: Record<number, SessionData | undefined> = {
    1: CSAT_DATA_MAP[1],
    2: CSAT_DATA_MAP[2],
    // 3: CSAT_DAY_3_DATA,
    // Add more days as content is created:
    // 4: CSAT_DAY_4_DATA,
};

/**
 * Get CSAT data for a specific day
 */
export function getCSATDataForDay(cycleId: number, dayNumber: number): SessionData | undefined {
    // Currently all cycles share the same content structure
    // In future, this could be extended to support cycle-specific content
    return CSAT_CONTENT_REGISTRY[dayNumber];
}

/**
 * Check if CSAT content exists for a day
 */
export function hasCSATContent(dayNumber: number): boolean {
    return CSAT_CONTENT_REGISTRY[dayNumber] !== undefined;
}

/**
 * Get list of all days that have CSAT content
 */
export function getCSATAvailableDays(): number[] {
    return Object.keys(CSAT_CONTENT_REGISTRY)
        .map(k => parseInt(k))
        .filter(k => CSAT_CONTENT_REGISTRY[k] !== undefined);
}


// === FLASHCARD CONTENT REGISTRY ===
/**
 * Maps day numbers to their flashcard arrays.
 * To add a new day's flashcards:
 * 1. Create the data file (e.g., day3-flashcards.ts)
 * 2. Import it above
 * 3. Add an entry here: [3]: DAY3_FLASHCARDS
 */
export const FLASHCARD_CONTENT_REGISTRY: Record<number, Flashcard[] | undefined> = {
    1: WEEK1_FLASHCARDS, // Week 1 (Ch 11-14) Override for New Cycle
    2: DAY2_FLASHCARDS,
    3: DAY3_FLASHCARDS, // Day 3 (Ch 16, 17)
    4: DAY4_FLASHCARDS, // Day 4 (Ch 18, 19)
    5: DAY5_FLASHCARDS, // Day 5 (Ch 20, 21, 31, 32, 33) - Mirror Executives
    6: DAY6_FLASHCARDS, // Day 6 (Jan 17): WEEK 1 REVISION (Mock Test)
    7: DAY7_FLASHCARDS, // Day 7 (Jan 18): SUNDAY REVISION (Concepts/Distinctions)
    8: DAY8_FLASHCARDS, // Day 8 (Jan 19): PARLIAMENT Part 1 (Ch 22) - Start of Week 2
    9: DAY9_FLASHCARDS, // Day 9 (Jan 20): PARLIAMENT Part 2 (Bills, Budget, Funds)
    10: DAY10_FLASHCARDS, // Day 10 (Jan 21): COMMITTEES & FORUMS (Ch 23, 24)
    11: DAY11_FLASHCARDS, // Day 11 (Jan 22): INTEGRATED JUDICIARY (SC & HC)
    12: DAY12_FLASHCARDS, // Day 12 (Jan 23): STATE LEGISLATURE (Ch 36)
    13: DAY13_FLASHCARDS, // Day 13 (Jan 24): SATURDAY REVISION (Week 2 Review)
    14: DAY14_FLASHCARDS, // Day 14 (Jan 25): SUNDAY MOCK TEST (Week 1 & 2)
    15: DAY15_FLASHCARDS, // Day 15 (Jan 26): JUDICIARY EXTENSIONS (Ch 37, 36, 28, 30)
    16: DAY16_FLASHCARDS, // Day 16 (Jan 27): FEDERAL EXTENSIONS (GST, NITI Aayog)
    17: DAY17_FLASHCARDS, // Day 17 (Jan 28): PHILOSOPHY EXTENSIONS (DPSP, Duties)
    18: DAY18_FLASHCARDS, // Day 18 (Jan 29): CONST BODIES PART 1 (EC, CAG, UPSC)
    19: DAY19_FLASHCARDS, // Day 19 (Jan 30): CONST BODIES PART 2 (SPSC, FinComm, SC/ST/BC)
    20: DAY20_FLASHCARDS, // Day 20 (Jan 31): SATURDAY REVISION (Week 3 Review)
    21: DAY21_FLASHCARDS, // Day 21 (Feb 1): SUNDAY MOCK TEST 3 (Integrated)
    22: DAY22_FLASHCARDS, // Day 22 (Feb 2): CONST BODIES PART 3 (Law Officers)
    23: DAY23_FLASHCARDS, // Day 23 (Feb 3): NON-CONST BODIES 1 (NHRC, SHRC)
    24: DAY24_FLASHCARDS, // Day 24 (Feb 4): NON-CONST BODIES 2 (CIC, SIC)
    25: DAY25_FLASHCARDS, // Day 25 (Feb 5): NON-CONST BODIES 3 (CVC, CBI)
    26: DAY26_FLASHCARDS, // Day 26 (Feb 6): NON-CONST BODIES 4 (Lokpal, Lokayukta)
    27: DAY27_FLASHCARDS, // Day 27 (Feb 7): SATURDAY REVISION (Week 4 Review)
    28: DAY28_FLASHCARDS, // Day 28 (Feb 8): SUNDAY MOCK TEST 4 (Bodies & Revision)
    29: DAY29_FLASHCARDS, // Day 29 (Feb 9): OTHER CONST (Co-op, Language)
    30: DAY30_FLASHCARDS, // Day 30 (Feb 10): PUBLIC SERVICES & RIGHTS (Ch 65, 66)
    31: DAY31_FLASHCARDS, // Day 31 (Feb 11): SPECIAL PROVISIONS (Ch 67)
};


/**
 * Get flashcard data for a specific day
 */
export function getFlashcardDataForDay(cycleId: number, dayNumber: number, subTopic?: string): Flashcard[] | undefined {
    // Special handling for Day 9 (split topic)
    if (dayNumber === 9) {
        if (subTopic === 'fundamental-duties') {
            return DAY9_FD_FLASHCARDS;
        }
        // Default or 'dpsp'
        return DAY9_DPSP_FLASHCARDS;
    }

    // 1. Check Explicit Registry
    if (FLASHCARD_CONTENT_REGISTRY[dayNumber]) {
        return FLASHCARD_CONTENT_REGISTRY[dayNumber];
    }

    // 2. Check Legacy Mapping (Unified Store fallback)
    const legacyMap: Record<number, string[]> = {
        11: ['16.1', '16.2', '16.3', '16.4', '17.1', '17.2', '17.3', '17.4'],
        12: ['18.1', '18.2', '18.3', '18.4', '18.5', '18.6'],
    };

    if (legacyMap[dayNumber]) {
        const targetSubtopics = legacyMap[dayNumber];
        // Filter the central store
        // Cast to any[] to avoid strict type mismatch with new Flashcard interface (category string literals)
        return (POLITY_FLASHCARDS_DATA as any[]).filter(card => {
            return card.subtopicId && targetSubtopics.includes(card.subtopicId);
        });
    }

    return undefined;
}

/**
 * Check if flashcard content exists for a day
 */
export function hasFlashcardContent(dayNumber: number): boolean {
    const content = FLASHCARD_CONTENT_REGISTRY[dayNumber];
    return content !== undefined && content.length > 0;
}

/**
 * Get list of all days that have flashcard content
 */
export function getFlashcardAvailableDays(): number[] {
    return Object.keys(FLASHCARD_CONTENT_REGISTRY)
        .map(k => parseInt(k))
        .filter(k => {
            const content = FLASHCARD_CONTENT_REGISTRY[k];
            return content !== undefined && content.length > 0;
        });
}

// ...

// Note: MCQ entries are now standardized to MCQ interface
export const MCQ_CONTENT_REGISTRY: Record<number, Question[] | undefined> = {
    // STARTING WITH DAY 1 (Ch 11, 12, 13, 14 Revision)
    1: WEEK1_MCQS,
    2: DAY2_MCQS, // Day 2 (Ch 15)
    3: DAY3_MCQS, // Day 3 (Ch 16, 17)
    4: DAY4_MCQS, // Day 4 (Ch 18, 19)
    5: DAY5_MCQS, // Day 5 (Ch 20, 21, 31, 32, 33)
    6: DAY6_MCQS, // Day 6: Week 1 Mock Test
    7: DAY7_MCQS, // Day 7: Sunday Revision Challenge
    8: DAY8_MCQS, // Day 8: Parliament Part 1
    9: DAY9_MCQS, // Day 9: Parliament Part 2
    10: DAY10_MCQS, // Day 10: Committees & Forums
    11: DAY11_MCQS, // Day 11: Integrated Judiciary (SC + HC)
    12: DAY12_MCQS, // Day 12: State Legislature
    13: DAY13_MCQS, // Day 13: Paper 1 (Week 2) & Paper 2 (Week 1) Revision
    14: DAY14_MCQS, // Day 14: Sunday Mock Test 2 (Integrated)
    15: DAY15_MCQS, // Day 15: Judiciary Ext (Subordinate Courts, Tribunals)
    16: DAY16_MCQS, // Day 16: Federal Ext (GST, NITI)
    17: DAY17_MCQS, // Day 17: Philosophy Ext (DPSP, Duties)
    18: DAY18_MCQS, // Day 18: Const Bodies 1 (EC, CAG, UPSC)
    19: DAY19_MCQS, // Day 19: Const Bodies 2 (SPSC, FinComm, Commissions)
    20: DAY20_MCQS, // Day 20: Saturday Revision (Week 3)
    21: DAY21_MCQS, // Day 21: Sunday Mock Test 3 (Weeks 1-3)
    22: DAY22_MCQS, // Day 22: Law Officers (AG, Adv Gen)
    23: DAY23_MCQS, // Day 23: Non-Const Bodies 1 (NHRC, SHRC)
    24: DAY24_MCQS, // Day 24: Non-Const Bodies 2 (CIC, SIC)
    25: DAY25_MCQS, // Day 25: Non-Const Bodies 3 (CVC, CBI)
    26: DAY26_MCQS, // Day 26: Non-Const Bodies 4 (Lokpal, Lokayukta)
    27: DAY27_MCQS, // Day 27: Saturday Revision (Week 4)
    28: DAY28_MCQS, // Day 28: Sunday Mock Test 4 (Bodies & Revision)
    29: DAY29_MCQS, // Day 29: Other Const (Co-op, Language)
    30: DAY30_MCQS, // Day 30: Public Services & Rights/Liabilities
    31: DAY31_MCQS, // Day 31: Special Provisions (Ch 67)
    32: DAY32_MCQS, // Day 32: Statutory Bodies & Elections
};

/**
 * Get MCQ data for a specific day
 * Strategy:
 * 1. Check Registry (Manual Overrides for specific days)
 * 2. Check Legacy Mappings (Day 1-7) via Unified Store
 * 3. Check Weekly Schedule (Dynamic Generation for Day 11+)
 */
export function getMCQDataForDay(cycleId: number, dayNumber: number, subTopic?: string): Question[] | undefined {
    // 1. Special handling for Day 9 (split topic)
    if (dayNumber === 9) {
        if (subTopic === 'fundamental-duties') return DAY9_FD_MCQS;
        return DAY9_DPSP_MCQS;
    }

    // 2. Special handling for Day 10 (Paper 2)
    if (dayNumber === 102) return DAY10_PAPER2_MCQS;
    if (dayNumber === 10) return DAY10_PAPER1_MCQS;

    // 3. Check Explicit Registry
    if (MCQ_CONTENT_REGISTRY[dayNumber]) {
        return MCQ_CONTENT_REGISTRY[dayNumber];
    }

    // 4. Legacy Days Mapping (Using Unified Store)
    const legacyMap: Record<number, string[]> = {
        3: ['1.1', '2.1', '3.1'], // Ch 1, 2, 3
        5: ['7.1'], // Ch 7
        11: ['16.1', '16.2', '16.3', '16.4', '17.1', '17.2', '17.3', '17.4'], // Ch 16, 17 (Mapped to Day 11)
        12: ['18.1', '18.2', '18.3', '18.4', '18.5', '18.6'], // Ch 18 (Mapped to Day 12)
        // Day 6 & 7 already in registry or not covered by migration yet
    };

    if (legacyMap[dayNumber]) {
        // Cast to any to avoid strict interface mismatch on legacy data (missing fields like explanation/correctAnswer in some legacy structures?)
        return getMCQsForSubtopics(legacyMap[dayNumber]) as any as Question[];
    }

    // 5. Dynamic Schedule-based Generation (Week 1 onwards)
    // Calculate which chapters are scheduled for this day
    const schedule = generateWeeklySchedule();
    // Flatten schedule to find the day (This is a simplified lookup)
    const allDays = schedule.flatMap(week => [
        { d: 'Monday', data: week.days.monday },
        { d: 'Tuesday', data: week.days.tuesday },
        { d: 'Wednesday', data: week.days.wednesday },
        { d: 'Thursday', data: week.days.thursday },
        { d: 'Friday', data: week.days.friday }
    ]);

    // Note: 'dayNumber' in this context is usually the generic Cycle Day (1-10) or absolute Day ID depending on usage.
    // If usage is Absolute Day (e.g., Jan 12 = Day 1), we need a date mapper.
    // However, currently Cycle Days 1-10 restart.
    // Assuming 'dayNumber' > 10 implies specific absolute days or Week 1 starts at 11?
    // Let's assume for now we only support Dynamic loading if we know the Chapters.

    // Fallback: If no explicit mapping, return undefined to let the UI component handle or show empty.

    return undefined;
}


// === UTILITY FUNCTIONS ===

/**
 * Check if any content (CSAT, flashcards, or MCQ) exists for a day
 */
export function hasAnyContentForDay(dayNumber: number): boolean {
    return hasCSATContent(dayNumber) || hasFlashcardContent(dayNumber) || (MCQ_CONTENT_REGISTRY[dayNumber] !== undefined);
}

/**
 * Get content summary for a day
 */
export function getDayContentSummary(dayNumber: number): {
    hasCSAT: boolean;
    hasFlashcards: boolean;
    csatQuestionCount: number;
    flashcardCount: number;
    mcqCount: number;
} {
    const csatData = CSAT_CONTENT_REGISTRY[dayNumber];
    const flashcardData = FLASHCARD_CONTENT_REGISTRY[dayNumber];

    return {
        hasCSAT: csatData !== undefined,
        hasFlashcards: flashcardData !== undefined && flashcardData.length > 0,
        csatQuestionCount: csatData?.passages.reduce((acc: number, p: any) => acc + p.questions.length, 0) || 0,
        flashcardCount: flashcardData?.length || 0,
        mcqCount: MCQ_CONTENT_REGISTRY[dayNumber]?.length || 0
    };
}
