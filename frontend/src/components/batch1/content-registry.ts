/**
 * Content Registry - Centralized mapping of days to content sources
 * This registry enables dynamic loading of CSAT questions, flashcards, and MCQs
 * for any day without hardcoding specific day checks.
 */

// === CSAT DATA IMPORTS ===
import { CSAT_DAY_1_DATA, CSAT_DAY_2_DATA } from "@/app/(student-portal)/student/batch1/csat/csat-data";
import type { SessionData } from "@/app/(student-portal)/student/batch1/csat/csat-data";

// === FLASHCARD DATA IMPORTS ===
import { DAY2_FLASHCARDS } from "./polity/data/day2-flashcards";
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
    // Add more days as content is created:
    // 3: CSAT_DAY_3_DATA,
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
    // Add more days as content is created:
    // 3: DAY3_FLASHCARDS,
    // 4: DAY4_FLASHCARDS,
};

/**
 * Get flashcard data for a specific day
 */
export function getFlashcardDataForDay(cycleId: number, dayNumber: number): Flashcard[] | undefined {
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
// Future: Add MCQ registry when needed


// === UTILITY FUNCTIONS ===

/**
 * Check if any content (CSAT, flashcards, or MCQ) exists for a day
 */
export function hasAnyContentForDay(dayNumber: number): boolean {
    return hasCSATContent(dayNumber) || hasFlashcardContent(dayNumber);
}

/**
 * Get content summary for a day
 */
export function getDayContentSummary(dayNumber: number): {
    hasCSAT: boolean;
    hasFlashcards: boolean;
    csatQuestionCount: number;
    flashcardCount: number;
} {
    const csatData = CSAT_CONTENT_REGISTRY[dayNumber];
    const flashcardData = FLASHCARD_CONTENT_REGISTRY[dayNumber];

    return {
        hasCSAT: csatData !== undefined,
        hasFlashcards: flashcardData !== undefined && flashcardData.length > 0,
        csatQuestionCount: csatData?.passages.reduce((acc, p) => acc + p.questions.length, 0) || 0,
        flashcardCount: flashcardData?.length || 0,
    };
}
