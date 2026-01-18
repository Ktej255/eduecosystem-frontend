// SRS Scheduler using SM-2 Algorithm
// Reference: https://www.supermemo.com/en/archives1990-2015/english/ol/sm2

import {
    SRSCard,
    SRSUserData,
    ReviewQuality,
    UIRating,
    DEFAULT_SRS_SETTINGS,
    SRSSettings
} from './srs-types';

const SRS_STORAGE_KEY = 'eduecosystem_srs_data';

/**
 * Get SRS user data from localStorage
 */
export function getSRSData(): SRSUserData {
    if (typeof window === 'undefined') {
        return createEmptySRSData();
    }

    const stored = localStorage.getItem(SRS_STORAGE_KEY);
    if (!stored) {
        return createEmptySRSData();
    }

    try {
        return JSON.parse(stored);
    } catch (e) {
        return createEmptySRSData();
    }
}

/**
 * Save SRS data to localStorage
 */
export function saveSRSData(data: SRSUserData): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(data));
}

function createEmptySRSData(): SRSUserData {
    return {
        cards: {},
        reviews: [],
        totalReviews: 0,
        settings: DEFAULT_SRS_SETTINGS
    };
}

/**
 * Convert UI rating to SM-2 quality score
 */
export function uiRatingToQuality(rating: UIRating): ReviewQuality {
    switch (rating) {
        case 'again': return 0;
        case 'hard': return 2;
        case 'good': return 3;
        case 'easy': return 5;
    }
}

/**
 * SM-2 Algorithm: Calculate next review parameters
 */
export function calculateNextReview(
    card: SRSCard,
    quality: ReviewQuality,
    settings: SRSSettings = DEFAULT_SRS_SETTINGS
): { newInterval: number; newEaseFactor: number; newRepetitions: number; newState: SRSCard['state'] } {
    let newEaseFactor = card.easeFactor;
    let newInterval = card.interval;
    let newRepetitions = card.repetitions;
    let newState: SRSCard['state'] = card.state;

    // If quality < 3, reset (failed recall)
    if (quality < 3) {
        newRepetitions = 0;
        newInterval = 1; // Review again in 1 day
        newState = 'learning';
    } else {
        // Successful recall
        if (newRepetitions === 0) {
            newInterval = 1;
        } else if (newRepetitions === 1) {
            newInterval = 6;
        } else {
            newInterval = Math.round(card.interval * card.easeFactor);
        }
        newRepetitions++;

        // Update state based on interval
        if (newInterval >= 21) {
            newState = 'mastered';
        } else if (newInterval >= 7) {
            newState = 'review';
        } else {
            newState = 'learning';
        }
    }

    // Update ease factor using SM-2 formula
    // EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
    newEaseFactor = card.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    newEaseFactor = Math.max(1.3, newEaseFactor); // Minimum ease factor is 1.3

    // Apply easy bonus if rating was "easy"
    if (quality === 5) {
        newInterval = Math.round(newInterval * settings.easyBonus);
    }

    // Apply interval modifier
    newInterval = Math.round(newInterval * settings.intervalModifier);

    // Cap at max interval
    newInterval = Math.min(newInterval, settings.maxInterval);

    return {
        newInterval,
        newEaseFactor,
        newRepetitions,
        newState
    };
}

/**
 * Process a card review and update its scheduling
 */
export function reviewCard(cardId: string, rating: UIRating): SRSCard | null {
    const data = getSRSData();
    const card = data.cards[cardId];

    if (!card) return null;

    const quality = uiRatingToQuality(rating);
    const { newInterval, newEaseFactor, newRepetitions, newState } = calculateNextReview(
        card,
        quality,
        data.settings
    );

    // Calculate next review date
    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + newInterval);

    // Update card
    const updatedCard: SRSCard = {
        ...card,
        easeFactor: newEaseFactor,
        interval: newInterval,
        repetitions: newRepetitions,
        state: newState,
        nextReviewDate: nextReview.toISOString().split('T')[0],
        lastReviewDate: new Date().toISOString()
    };

    // Save updated card
    data.cards[cardId] = updatedCard;
    data.totalReviews++;
    data.reviews.push({
        cardId,
        quality,
        timestamp: new Date().toISOString(),
        responseTimeMs: 0 // Can be tracked separately
    });

    // Keep only last 1000 reviews
    if (data.reviews.length > 1000) {
        data.reviews = data.reviews.slice(-1000);
    }

    saveSRSData(data);

    return updatedCard;
}

/**
 * Get cards due for review today
 */
export function getDueCards(): SRSCard[] {
    const data = getSRSData();
    const today = new Date().toISOString().split('T')[0];

    return Object.values(data.cards)
        .filter(card => card.nextReviewDate <= today)
        .sort((a, b) => {
            // Prioritize: new > overdue > due
            if (a.state === 'new' && b.state !== 'new') return -1;
            if (b.state === 'new' && a.state !== 'new') return 1;
            return new Date(a.nextReviewDate).getTime() - new Date(b.nextReviewDate).getTime();
        });
}

/**
 * Get upcoming cards (due in the next N days)
 */
export function getUpcomingCards(days: number = 7): SRSCard[] {
    const data = getSRSData();
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + days);

    const todayStr = today.toISOString().split('T')[0];
    const futureDateStr = futureDate.toISOString().split('T')[0];

    return Object.values(data.cards)
        .filter(card => card.nextReviewDate > todayStr && card.nextReviewDate <= futureDateStr)
        .sort((a, b) => new Date(a.nextReviewDate).getTime() - new Date(b.nextReviewDate).getTime());
}

/**
 * Add a new card to the SRS system
 */
export function addSRSCard(front: string, back: string, subtopicId?: string): SRSCard {
    const data = getSRSData();

    const newCard: SRSCard = {
        id: `srs_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        front,
        back,
        easeFactor: 2.5,
        interval: 0,
        repetitions: 0,
        nextReviewDate: new Date().toISOString().split('T')[0], // Due immediately
        state: 'new',
        subtopicId,
        createdAt: new Date().toISOString()
    };

    data.cards[newCard.id] = newCard;
    saveSRSData(data);

    return newCard;
}

/**
 * Get SRS statistics
 */
export function getSRSStats(): {
    totalCards: number;
    dueToday: number;
    newCards: number;
    learningCards: number;
    masteredCards: number;
    retentionRate: number;
} {
    const data = getSRSData();
    const cards = Object.values(data.cards);
    const today = new Date().toISOString().split('T')[0];

    const dueToday = cards.filter(c => c.nextReviewDate <= today).length;
    const newCards = cards.filter(c => c.state === 'new').length;
    const learningCards = cards.filter(c => c.state === 'learning').length;
    const masteredCards = cards.filter(c => c.state === 'mastered').length;

    // Calculate retention rate from recent reviews
    const recentReviews = data.reviews.slice(-100);
    const correctCount = recentReviews.filter(r => r.quality >= 3).length;
    const retentionRate = recentReviews.length > 0 ? (correctCount / recentReviews.length) * 100 : 0;

    return {
        totalCards: cards.length,
        dueToday,
        newCards,
        learningCards,
        masteredCards,
        retentionRate: Math.round(retentionRate)
    };
}

/**
 * Get estimated review intervals for UI display
 */
export function getNextIntervalPreview(card: SRSCard): { again: string; hard: string; good: string; easy: string } {
    const againResult = calculateNextReview(card, 0);
    const hardResult = calculateNextReview(card, 2);
    const goodResult = calculateNextReview(card, 3);
    const easyResult = calculateNextReview(card, 5);

    const formatInterval = (days: number): string => {
        if (days === 1) return '1d';
        if (days < 7) return `${days}d`;
        if (days < 30) return `${Math.round(days / 7)}w`;
        if (days < 365) return `${Math.round(days / 30)}mo`;
        return `${Math.round(days / 365)}y`;
    };

    return {
        again: formatInterval(againResult.newInterval),
        hard: formatInterval(hardResult.newInterval),
        good: formatInterval(goodResult.newInterval),
        easy: formatInterval(easyResult.newInterval)
    };
}
