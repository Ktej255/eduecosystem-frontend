// Weak Topics Detection & Analysis
// Identifies chapters where student is struggling based on performance data

import { getAllProgress, RevisionProgress } from './progress-utils';
import { getSRSData, SRSCard } from './srs-engine';
import { POLITY_REVISION_CHAPTERS } from '../data/RevisionRegistry';

export interface WeakTopic {
    chapterId: number;
    chapterTitle: string;
    weaknessScore: number;  // 0-100, higher = weaker
    reasons: string[];
    flashcardAccuracy: number;  // 0-100%
    mcqAccuracy: number;  // 0-100%
    srsEaseFactor: number;  // Average ease factor
    lastRevised: string | null;
    recommendedAction: 'urgent' | 'review' | 'practice' | 'maintain';
}

export interface PerformanceMetrics {
    overallScore: number;  // 0-100
    strongTopicsCount: number;
    weakTopicsCount: number;
    needsAttentionCount: number;
    totalChaptersStudied: number;
}

// Calculate weakness score for a chapter
function calculateWeaknessScore(
    progress: RevisionProgress | null,
    srsCards: SRSCard[]
): { score: number; reasons: string[] } {
    const reasons: string[] = [];
    let score = 0;

    if (!progress) {
        return { score: 0, reasons: ['Not started yet'] };
    }

    // MCQ accuracy (max 40 points)
    if (progress.mcqsTotal > 0) {
        const mcqAccuracy = (progress.mcqHighScore / progress.mcqsTotal) * 100;
        if (mcqAccuracy < 50) {
            score += 40;
            reasons.push(`Low MCQ score (${Math.round(mcqAccuracy)}%)`);
        } else if (mcqAccuracy < 70) {
            score += 25;
            reasons.push(`MCQ score needs improvement (${Math.round(mcqAccuracy)}%)`);
        } else if (mcqAccuracy < 85) {
            score += 10;
        }
    }

    // Flashcard completion (max 20 points)
    if (progress.flashcardsTotal > 0) {
        const flashcardPct = (progress.flashcardsCompleted / progress.flashcardsTotal) * 100;
        if (flashcardPct < 30) {
            score += 20;
            reasons.push('Few flashcards reviewed');
        } else if (flashcardPct < 60) {
            score += 10;
            reasons.push('Incomplete flashcard review');
        }
    }

    // SRS data (max 30 points)
    if (srsCards.length > 0) {
        const avgEase = srsCards.reduce((sum, c) => sum + c.easeFactor, 0) / srsCards.length;
        const lowEaseCards = srsCards.filter(c => c.easeFactor < 2.0).length;
        const lowEasePct = (lowEaseCards / srsCards.length) * 100;

        if (avgEase < 1.8) {
            score += 30;
            reasons.push('Very difficult to remember');
        } else if (avgEase < 2.2) {
            score += 20;
            reasons.push('Memory retention is weak');
        } else if (lowEasePct > 30) {
            score += 15;
            reasons.push('Some cards are difficult');
        }

        // Overdue cards
        const today = new Date().toISOString().split('T')[0];
        const overdueCards = srsCards.filter(c => c.dueDate < today).length;
        if (overdueCards > 5) {
            score += 10;
            reasons.push(`${overdueCards} overdue cards`);
        }
    }

    // Staleness (max 10 points)
    if (progress.lastRevisedAt) {
        const daysSinceRevision = Math.floor(
            (Date.now() - new Date(progress.lastRevisedAt).getTime()) / (1000 * 60 * 60 * 24)
        );
        if (daysSinceRevision > 14) {
            score += 10;
            reasons.push('Not revised in 2+ weeks');
        } else if (daysSinceRevision > 7) {
            score += 5;
            reasons.push('Not revised in a week');
        }
    }

    return { score: Math.min(100, score), reasons };
}

// Get recommended action based on weakness score
function getRecommendedAction(score: number): 'urgent' | 'review' | 'practice' | 'maintain' {
    if (score >= 70) return 'urgent';
    if (score >= 50) return 'review';
    if (score >= 25) return 'practice';
    return 'maintain';
}

// Analyze all chapters and return weak topics
export async function analyzeWeakTopics(): Promise<WeakTopic[]> {
    const progress = getAllProgress();
    const srsData = await getSRSData();
    const weakTopics: WeakTopic[] = [];

    POLITY_REVISION_CHAPTERS.forEach(chapter => {
        const chProgress = progress[chapter.id];
        const chapterSRSCards = Object.values(srsData).filter(c => c.chapterId === chapter.id);

        // Only analyze chapters that have been started
        if (!chProgress && chapterSRSCards.length === 0) {
            return;
        }

        const { score, reasons } = calculateWeaknessScore(chProgress, chapterSRSCards);

        // Calculate accuracies
        const flashcardAccuracy = chProgress && chProgress.flashcardsTotal > 0
            ? (chProgress.flashcardsCompleted / chProgress.flashcardsTotal) * 100
            : 0;
        const mcqAccuracy = chProgress && chProgress.mcqsTotal > 0
            ? (chProgress.mcqHighScore / chProgress.mcqsTotal) * 100
            : 0;
        const srsEaseFactor = chapterSRSCards.length > 0
            ? chapterSRSCards.reduce((sum, c) => sum + c.easeFactor, 0) / chapterSRSCards.length
            : 2.5;

        weakTopics.push({
            chapterId: Number(chapter.id),
            chapterTitle: chapter.title,
            weaknessScore: score,
            reasons,
            flashcardAccuracy,
            mcqAccuracy,
            srsEaseFactor,
            lastRevised: chProgress?.lastRevisedAt || null,
            recommendedAction: getRecommendedAction(score)
        });
    });

    // Sort by weakness score (highest first)
    return weakTopics.sort((a, b) => b.weaknessScore - a.weaknessScore);
}

// Get only the weak topics (score >= 25)
export async function getWeakTopicsOnly(): Promise<WeakTopic[]> {
    const topics = await analyzeWeakTopics();
    return topics.filter(t => t.weaknessScore >= 25);
}

// Get urgent topics (score >= 70)
export async function getUrgentTopics(): Promise<WeakTopic[]> {
    const topics = await analyzeWeakTopics();
    return topics.filter(t => t.weaknessScore >= 70);
}

// Get overall performance metrics
export async function getPerformanceMetrics(): Promise<PerformanceMetrics> {
    const allTopics = await analyzeWeakTopics();

    if (allTopics.length === 0) {
        return {
            overallScore: 0,
            strongTopicsCount: 0,
            weakTopicsCount: 0,
            needsAttentionCount: 0,
            totalChaptersStudied: 0
        };
    }

    const avgScore = allTopics.reduce((sum, t) => sum + (100 - t.weaknessScore), 0) / allTopics.length;
    const strongTopics = allTopics.filter(t => t.weaknessScore < 25).length;
    const weakTopics = allTopics.filter(t => t.weaknessScore >= 50).length;
    const needsAttention = allTopics.filter(t => t.weaknessScore >= 25 && t.weaknessScore < 50).length;

    return {
        overallScore: Math.round(avgScore),
        strongTopicsCount: strongTopics,
        weakTopicsCount: weakTopics,
        needsAttentionCount: needsAttention,
        totalChaptersStudied: allTopics.length
    };
}

// Action labels for UI
export const ACTION_LABELS = {
    urgent: { text: 'Urgent Review Needed', color: 'red', icon: '🚨' },
    review: { text: 'Needs Review', color: 'orange', icon: '⚠️' },
    practice: { text: 'More Practice', color: 'yellow', icon: '📝' },
    maintain: { text: 'Keep Practicing', color: 'green', icon: '✅' }
};
