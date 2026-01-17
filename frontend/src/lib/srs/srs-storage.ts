// SRS Storage - LocalStorage persistence for Spaced Repetition data

import {
    SRSCard,
    SRSReview,
    SRSUserData,
    SRSSettings,
    SRSSessionStats,
    DEFAULT_SRS_SETTINGS
} from './srs-types';
import { initializeSRSCard } from './srs-engine';

const SRS_STORAGE_KEY = 'eduecosystem_srs_data';

/**
 * Get all SRS data from localStorage
 */
export function getSRSData(): SRSUserData {
    if (typeof window === 'undefined') {
        return createEmptyUserData();
    }

    const stored = localStorage.getItem(SRS_STORAGE_KEY);
    if (!stored) {
        return createEmptyUserData();
    }

    try {
        return JSON.parse(stored);
    } catch (e) {
        console.error('Failed to parse SRS data:', e);
        return createEmptyUserData();
    }
}

/**
 * Save SRS data to localStorage
 */
export function saveSRSData(data: SRSUserData): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(SRS_STORAGE_KEY, JSON.stringify(data));
}

/**
 * Create empty user data structure
 */
function createEmptyUserData(): SRSUserData {
    return {
        cards: {},
        reviews: [],
        totalReviews: 0,
        settings: { ...DEFAULT_SRS_SETTINGS }
    };
}

/**
 * Get a specific card by ID
 */
export function getCard(cardId: string): SRSCard | null {
    const data = getSRSData();
    return data.cards[cardId] || null;
}

/**
 * Save or update a card
 */
export function saveCard(card: SRSCard): void {
    const data = getSRSData();
    data.cards[card.id] = card;
    saveSRSData(data);
}

/**
 * Save a review
 */
export function saveReview(review: SRSReview): void {
    const data = getSRSData();
    data.reviews.push(review);
    data.totalReviews++;
    data.lastSessionDate = new Date().toISOString();
    saveSRSData(data);
}

/**
 * Get all cards as array
 */
export function getAllCards(): SRSCard[] {
    const data = getSRSData();
    return Object.values(data.cards);
}

/**
 * Import flashcards into SRS system
 * Converts regular flashcards to SRS cards if not already present
 */
export function importFlashcards(flashcards: Array<{
    id: string;
    front?: string;
    back?: string;
    question?: string;
    answer?: string;
    subtopicId?: string
}>): number {
    const data = getSRSData();
    let imported = 0;

    flashcards.forEach(fc => {
        if (!data.cards[fc.id]) {
            const front = fc.front || fc.question || '';
            const back = fc.back || fc.answer || '';

            if (front && back) {
                data.cards[fc.id] = initializeSRSCard(
                    fc.id,
                    front,
                    back,
                    fc.subtopicId
                );
                imported++;
            }
        }
    });

    saveSRSData(data);
    return imported;
}

/**
 * Get review statistics
 */
export function getReviewStats(): {
    totalCards: number;
    newCards: number;
    learningCards: number;
    reviewCards: number;
    masteredCards: number;
    dueToday: number;
    retentionRate: number;
} {
    const data = getSRSData();
    const cards = Object.values(data.cards);
    const now = new Date();

    const stats = {
        totalCards: cards.length,
        newCards: cards.filter(c => c.state === 'new').length,
        learningCards: cards.filter(c => c.state === 'learning').length,
        reviewCards: cards.filter(c => c.state === 'review').length,
        masteredCards: cards.filter(c => c.state === 'mastered').length,
        dueToday: cards.filter(c => {
            if (c.state === 'new') return true;
            return new Date(c.nextReviewDate) <= now;
        }).length,
        retentionRate: 0
    };

    // Calculate retention from last 100 reviews
    const recentReviews = data.reviews.slice(-100);
    if (recentReviews.length > 0) {
        const passed = recentReviews.filter(r => r.quality >= 3).length;
        stats.retentionRate = Math.round((passed / recentReviews.length) * 100);
    }

    return stats;
}

/**
 * Get user settings
 */
export function getSettings(): SRSSettings {
    const data = getSRSData();
    return data.settings;
}

/**
 * Update settings
 */
export function updateSettings(settings: Partial<SRSSettings>): void {
    const data = getSRSData();
    data.settings = { ...data.settings, ...settings };
    saveSRSData(data);
}

/**
 * Export all data (for backup)
 */
export function exportData(): string {
    const data = getSRSData();
    return JSON.stringify(data, null, 2);
}

/**
 * Import data from backup
 */
export function importData(jsonString: string): boolean {
    try {
        const data = JSON.parse(jsonString) as SRSUserData;
        saveSRSData(data);
        return true;
    } catch (e) {
        console.error('Failed to import SRS data:', e);
        return false;
    }
}

/**
 * Clear all SRS data (for reset)
 */
export function clearAllData(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(SRS_STORAGE_KEY);
}

/**
 * Get reviews for a specific date range
 */
export function getReviewsInRange(startDate: Date, endDate: Date): SRSReview[] {
    const data = getSRSData();
    return data.reviews.filter(r => {
        const reviewDate = new Date(r.timestamp);
        return reviewDate >= startDate && reviewDate <= endDate;
    });
}

/**
 * Get daily review counts for the last N days
 */
export function getDailyReviewCounts(days: number = 7): { date: string; count: number }[] {
    const data = getSRSData();
    const result: { date: string; count: number }[] = [];

    for (let i = days - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];

        const count = data.reviews.filter(r =>
            r.timestamp.startsWith(dateStr)
        ).length;

        result.push({ date: dateStr, count });
    }

    return result;
}
