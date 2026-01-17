// SRS Types for Spaced Repetition System

export interface SRSCard {
    id: string;
    front: string;
    back: string;
    // SM-2 Algorithm Fields
    easeFactor: number;      // Default 2.5, min 1.3
    interval: number;        // Days until next review
    repetitions: number;     // Number of successful reviews
    nextReviewDate: string;  // ISO date string
    lastReviewDate?: string;
    // Metadata
    state: 'new' | 'learning' | 'review' | 'mastered';
    subtopicId?: string;
    createdAt: string;
}

export interface SRSReview {
    cardId: string;
    quality: ReviewQuality;
    timestamp: string;
    responseTimeMs: number;
}

// Quality ratings for SM-2 algorithm
// 0: Complete blackout
// 1: Incorrect, but upon seeing answer, remembered
// 2: Incorrect, but easy to recall
// 3: Correct with serious difficulty
// 4: Correct with some hesitation
// 5: Perfect response
export type ReviewQuality = 0 | 1 | 2 | 3 | 4 | 5;

// Simplified UI rating
export type UIRating = 'again' | 'hard' | 'good' | 'easy';

export interface SRSSessionStats {
    totalCards: number;
    newCards: number;
    reviewedCards: number;
    correctCount: number;
    incorrectCount: number;
    averageResponseTime: number;
    retentionRate: number;
}

export interface SRSUserData {
    cards: Record<string, SRSCard>;
    reviews: SRSReview[];
    lastSessionDate?: string;
    totalReviews: number;
    settings: SRSSettings;
}

export interface SRSSettings {
    newCardsPerDay: number;      // Default 20
    reviewsPerDay: number;       // Default 100
    easyBonus: number;           // Default 1.3
    intervalModifier: number;    // Default 1.0
    maxInterval: number;         // Default 365 days
}

export const DEFAULT_SRS_SETTINGS: SRSSettings = {
    newCardsPerDay: 20,
    reviewsPerDay: 100,
    easyBonus: 1.3,
    intervalModifier: 1.0,
    maxInterval: 365
};
