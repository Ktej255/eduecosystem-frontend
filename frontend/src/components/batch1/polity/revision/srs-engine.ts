// Spaced Repetition Algorithm (SM-2 based)
// Implements intelligent review scheduling for flashcards

export interface SRSCard {
    id: string;  // chapterId_flashcardIdx
    chapterId: number;
    flashcardIdx: number;
    easeFactor: number;  // Default 2.5
    interval: number;  // Days until next review
    repetitions: number;  // Number of successful recalls
    dueDate: string;  // ISO date string
    lastReview: string | null;
}

export interface SRSStats {
    due: number;
    new: number;
    learning: number;
    review: number;
}

const SRS_KEY = 'polity_srs_data';

// Quality ratings (0-5)
export type Quality = 0 | 1 | 2 | 3 | 4 | 5;

import { getSRSDataFromDB, saveSRSDataToDB } from '@/lib/report-persistence';

// Get all SRS data (Async)
export async function getSRSData(): Promise<Record<string, SRSCard>> {
    if (typeof window === 'undefined') return {};
    return await getSRSDataFromDB();
}

// Save SRS data (Async)
export async function saveSRSData(data: Record<string, SRSCard>): Promise<void> {
    if (typeof window === 'undefined') return;
    await saveSRSDataToDB(data);
}

// Initialize a card for SRS
export function initializeCard(chapterId: number, flashcardIdx: number): SRSCard {
    const today = new Date().toISOString().split('T')[0];
    return {
        id: `${chapterId}_${flashcardIdx}`,
        chapterId,
        flashcardIdx,
        easeFactor: 2.5,
        interval: 0,
        repetitions: 0,
        dueDate: today,
        lastReview: null
    };
}

// SM-2 Algorithm Implementation
export function calculateNextReview(card: SRSCard, quality: Quality): SRSCard {
    const today = new Date().toISOString().split('T')[0];
    let { easeFactor, interval, repetitions } = card;

    if (quality >= 3) {
        // Correct response
        if (repetitions === 0) {
            interval = 1;
        } else if (repetitions === 1) {
            interval = 6;
        } else {
            interval = Math.round(interval * easeFactor);
        }
        repetitions += 1;
    } else {
        // Incorrect response - reset
        repetitions = 0;
        interval = 1;
    }

    // Update ease factor
    easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (easeFactor < 1.3) easeFactor = 1.3;

    // Calculate next due date
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + interval);
    const dueDate = nextDate.toISOString().split('T')[0];

    return {
        ...card,
        easeFactor,
        interval,
        repetitions,
        dueDate,
        lastReview: today
    };
}

// Get cards due for review today
export async function getDueCards(chapterIds?: number[]): Promise<SRSCard[]> {
    const data = await getSRSData();
    const today = new Date().toISOString().split('T')[0];

    return Object.values(data)
        .filter(card => {
            const isDue = card.dueDate <= today;
            const matchesChapter = !chapterIds || chapterIds.includes(card.chapterId);
            return isDue && matchesChapter;
        })
        .sort((a, b) => {
            // Sort by: overdue first, then by ease (harder first)
            if (a.dueDate !== b.dueDate) {
                return a.dueDate.localeCompare(b.dueDate);
            }
            return a.easeFactor - b.easeFactor;
        });
}

// Get SRS statistics
export async function getSRSStats(chapterIds?: number[]): Promise<SRSStats> {
    const data = await getSRSData();
    const today = new Date().toISOString().split('T')[0];

    let due = 0, newCards = 0, learning = 0, review = 0;

    Object.values(data).forEach(card => {
        if (chapterIds && !chapterIds.includes(card.chapterId)) return;

        if (card.dueDate <= today) {
            due++;
            if (card.repetitions === 0) {
                newCards++;
            } else if (card.interval < 21) {
                learning++;
            } else {
                review++;
            }
        }
    });

    return { due, new: newCards, learning, review };
}

// Mark a card as reviewed with quality rating
export async function reviewCard(chapterId: number, flashcardIdx: number, quality: Quality): Promise<SRSCard> {
    const data = await getSRSData();
    const cardId = `${chapterId}_${flashcardIdx}`;

    let card = data[cardId];
    if (!card) {
        card = initializeCard(chapterId, flashcardIdx);
    }

    const updatedCard = calculateNextReview(card, quality);
    data[cardId] = updatedCard;
    await saveSRSData(data);

    return updatedCard;
}

// Initialize all flashcards for a chapter into SRS system
export async function initializeChapterForSRS(chapterId: number, flashcardCount: number): Promise<void> {
    const data = await getSRSData();
    const today = new Date().toISOString().split('T')[0];

    for (let i = 0; i < flashcardCount; i++) {
        const cardId = `${chapterId}_${i}`;
        if (!data[cardId]) {
            data[cardId] = initializeCard(chapterId, i);
        }
    }

    await saveSRSData(data);
}

// Get suggested chapters to review based on SRS
export async function getSuggestedReviewChapters(): Promise<{ chapterId: number; dueCount: number }[]> {
    const data = await getSRSData();
    const today = new Date().toISOString().split('T')[0];
    const chapterDueCounts: Record<number, number> = {};

    Object.values(data).forEach(card => {
        if (card.dueDate <= today) {
            chapterDueCounts[card.chapterId] = (chapterDueCounts[card.chapterId] || 0) + 1;
        }
    });

    return Object.entries(chapterDueCounts)
        .map(([chapterId, count]) => ({ chapterId: parseInt(chapterId), dueCount: count }))
        .sort((a, b) => b.dueCount - a.dueCount);
}

// Quality labels for UI
export const QUALITY_LABELS = {
    0: { text: 'Complete Blackout', color: 'red', emoji: '❌' },
    1: { text: 'Incorrect, remembered on seeing answer', color: 'red', emoji: '❓' },
    2: { text: 'Incorrect, easy to recall on seeing answer', color: 'orange', emoji: '🤔' },
    3: { text: 'Correct with difficulty', color: 'yellow', emoji: '😅' },
    4: { text: 'Correct with hesitation', color: 'lime', emoji: '👍' },
    5: { text: 'Perfect recall', color: 'green', emoji: '🎯' }
};
