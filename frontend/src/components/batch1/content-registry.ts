/**
 * Content Registry - Centralized mapping of days to content sources
 * This registry enables dynamic loading of CSAT questions, flashcards, and MCQs
 * for any day without hardcoding specific day checks.
 */

// === CSAT DATA IMPORTS ===
import { CSAT_DAY_1_DATA, CSAT_DAY_2_DATA, CSAT_DAY_3_DATA } from "@/app/(student-portal)/student/batch1/csat/csat-data";
import type { SessionData } from "@/app/(student-portal)/student/batch1/csat/csat-data";

// === FLASHCARD DATA IMPORTS ===
import { DAY2_FLASHCARDS } from "./polity/data/day2-flashcards";
import { DAY5_FLASHCARDS } from "./polity/data/day5-flashcards";
import { DAY6_FLASHCARDS } from "./polity/data/day6-flashcards";
import { DAY7_FLASHCARDS } from "./polity/data/day7-flashcards";
import { DAY8_FLASHCARDS } from "./polity/data/day8-flashcards";
import { DAY9_DPSP_FLASHCARDS } from "./polity/data/day9-dpsp-flashcards";
import { DAY9_FD_FLASHCARDS } from "./polity/data/day9-fd-flashcards";
import type { Flashcard } from "./flashcard/flashcard-utils";

// === CSAT CONTENT REGISTRY ===
/**
 * Maps day numbers to their CSAT session data.
 * To add a new day's CSAT content:
 * 1. Create the data file (e.g., day3-csat.ts)
 * 2. Import it above
 * 3. Add an entry here: [3]: DAY3_CSAT_DATA
 */
export const CSAT_CONTENT_REGISTRY: Record<number, SessionData | undefined> = {
    1: CSAT_DAY_1_DATA,
    2: CSAT_DAY_2_DATA,
    3: CSAT_DAY_3_DATA,
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
    2: DAY2_FLASHCARDS,
    5: DAY5_FLASHCARDS,
    6: DAY6_FLASHCARDS,  // Fundamental Rights Part 1 (Articles 12-21)
    7: DAY7_FLASHCARDS,  // Fundamental Rights Part 2 (Articles 22-30)
    8: DAY8_FLASHCARDS,  // Fundamental Rights Part 3 (Articles 31-35, Writs, Exceptions)
    9: DAY9_DPSP_FLASHCARDS, // Default to DPSP for checking existence
    // Add more days as content is created:
    // 3: DAY3_FLASHCARDS,
    // 4: DAY4_FLASHCARDS,
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

    // Currently all cycles share the same content structure
    return FLASHCARD_CONTENT_REGISTRY[dayNumber];
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


// === MCQ CONTENT REGISTRY ===
import { DAY8_MCQS } from "./polity/data/day8-mcqs";
import { DAY9_DPSP_MCQS } from "./polity/data/day9-dpsp-mcqs";
import { DAY9_FD_MCQS } from "./polity/data/day9-fd-mcqs";
import type { Question } from "./qa/MCQTestSession";

export const MCQ_CONTENT_REGISTRY: Record<number, Question[] | undefined> = {
    8: DAY8_MCQS,
    9: DAY9_DPSP_MCQS, // Default check
};

/**
 * Get MCQ data for a specific day
 */
export function getMCQDataForDay(cycleId: number, dayNumber: number, subTopic?: string): Question[] | undefined {
    // Special handling for Day 9 (split topic)
    if (dayNumber === 9) {
        if (subTopic === 'fundamental-duties') {
            return DAY9_FD_MCQS;
        }
        return DAY9_DPSP_MCQS;
    }

    // Fallback/Standard registry
    return MCQ_CONTENT_REGISTRY[dayNumber];
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
        csatQuestionCount: csatData?.passages.reduce((acc, p) => acc + p.questions.length, 0) || 0,
        flashcardCount: flashcardData?.length || 0,
        mcqCount: MCQ_CONTENT_REGISTRY[dayNumber]?.length || 0
    };
}
