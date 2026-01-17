// SM-2 Spaced Repetition Algorithm Engine

import {
    SRSCard,
    SRSReview,
    ReviewQuality,
    UIRating,
    SRSSettings,
    DEFAULT_SRS_SETTINGS
} from './srs-types';

/**
 * Convert UI rating to SM-2 quality score
 */
export function uiRatingToQuality(rating: UIRating): ReviewQuality {
    switch (rating) {
        case 'again': return 1;
        case 'hard': return 3;
        case 'good': return 4;
        case 'easy': return 5;
    }
}

/**
 * SM-2 Algorithm Implementation
 * 
 * Based on: https://www.supermemo.com/en/archives1990-2015/english/ol/sm2
 * 
 * EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
 * where EF is the old ease factor, q is the response quality (0-5)
 * 
 * If q < 3, reset repetitions to 0 and interval to 1
 * If q >= 3:
 *   - rep 0: interval = 1
 *   - rep 1: interval = 6
 *   - rep 2+: interval = oldInterval * EF
 */
export function calculateNextReview(
    card: SRSCard,
    quality: ReviewQuality,
    settings: SRSSettings = DEFAULT_SRS_SETTINGS
): { interval: number; easeFactor: number; repetitions: number; state: SRSCard['state'] } {
    let { easeFactor, interval, repetitions } = card;

    // Calculate new ease factor
    const newEaseFactor = Math.max(
        1.3, // Minimum ease factor
        easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    );

    let newInterval: number;
    let newRepetitions: number;
    let newState: SRSCard['state'];

    if (quality < 3) {
        // Failed - reset to learning
        newRepetitions = 0;
        newInterval = 1;
        newState = 'learning';
    } else {
        // Passed
        newRepetitions = repetitions + 1;

        if (newRepetitions === 1) {
            newInterval = 1;
            newState = 'learning';
        } else if (newRepetitions === 2) {
            newInterval = 6;
            newState = 'review';
        } else {
            newInterval = Math.round(interval * newEaseFactor * settings.intervalModifier);

            // Apply easy bonus
            if (quality === 5) {
                newInterval = Math.round(newInterval * settings.easyBonus);
            }

            // Cap at max interval
            newInterval = Math.min(newInterval, settings.maxInterval);

            // Mark as mastered if interval > 30 days
            newState = newInterval >= 30 ? 'mastered' : 'review';
        }
    }

    return {
        interval: newInterval,
        easeFactor: newEaseFactor,
        repetitions: newRepetitions,
        state: newState
    };
}

/**
 * Calculate the next review date based on interval
 */
export function getNextReviewDate(intervalDays: number): string {
    const date = new Date();
    date.setDate(date.getDate() + intervalDays);
    date.setHours(0, 0, 0, 0); // Normalize to start of day
    return date.toISOString();
}

/**
 * Check if a card is due for review
 */
export function isCardDue(card: SRSCard): boolean {
    if (card.state === 'new') return true;

    const now = new Date();
    const reviewDate = new Date(card.nextReviewDate);
    return now >= reviewDate;
}

/**
 * Get cards due for review, sorted by priority
 * Priority: Overdue cards first (most overdue first), then new cards
 */
export function getDueCards(cards: SRSCard[], limit?: number): SRSCard[] {
    const now = new Date();

    const dueCards = cards
        .filter(isCardDue)
        .sort((a, b) => {
            // New cards come after review cards
            if (a.state === 'new' && b.state !== 'new') return 1;
            if (a.state !== 'new' && b.state === 'new') return -1;

            // Sort by how overdue (most overdue first)
            const overdueA = now.getTime() - new Date(a.nextReviewDate).getTime();
            const overdueB = now.getTime() - new Date(b.nextReviewDate).getTime();
            return overdueB - overdueA;
        });

    return limit ? dueCards.slice(0, limit) : dueCards;
}

/**
 * Process a card review and return updated card
 */
export function processReview(
    card: SRSCard,
    rating: UIRating,
    responseTimeMs: number,
    settings: SRSSettings = DEFAULT_SRS_SETTINGS
): { updatedCard: SRSCard; review: SRSReview } {
    const quality = uiRatingToQuality(rating);
    const result = calculateNextReview(card, quality, settings);

    const updatedCard: SRSCard = {
        ...card,
        easeFactor: result.easeFactor,
        interval: result.interval,
        repetitions: result.repetitions,
        state: result.state,
        nextReviewDate: getNextReviewDate(result.interval),
        lastReviewDate: new Date().toISOString()
    };

    const review: SRSReview = {
        cardId: card.id,
        quality,
        timestamp: new Date().toISOString(),
        responseTimeMs
    };

    return { updatedCard, review };
}

/**
 * Initialize a new SRS card from existing flashcard data
 */
export function initializeSRSCard(
    id: string,
    front: string,
    back: string,
    subtopicId?: string
): SRSCard {
    return {
        id,
        front,
        back,
        easeFactor: 2.5,
        interval: 0,
        repetitions: 0,
        nextReviewDate: new Date().toISOString(),
        state: 'new',
        subtopicId,
        createdAt: new Date().toISOString()
    };
}

/**
 * Calculate retention rate from reviews
 */
export function calculateRetentionRate(reviews: SRSReview[]): number {
    if (reviews.length === 0) return 0;

    const passed = reviews.filter(r => r.quality >= 3).length;
    return Math.round((passed / reviews.length) * 100);
}

/**
 * Get estimated time for next review (human readable)
 */
export function getNextReviewText(card: SRSCard): string {
    if (card.state === 'new') return 'New';

    const now = new Date();
    const reviewDate = new Date(card.nextReviewDate);
    const diffMs = reviewDate.getTime() - now.getTime();

    if (diffMs <= 0) return 'Due now';

    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 7) return `${diffDays} days`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks`;
    if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months`;
    return `${Math.ceil(diffDays / 365)} years`;
}
