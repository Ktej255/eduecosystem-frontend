// Revision Progress Tracking Utilities
// Manages localStorage persistence for chapter progress

export interface RevisionProgress {
    chapterId: string | number;
    flashcardsCompleted: number;
    flashcardsTotal: number;
    mcqsCompleted: number;
    mcqsTotal: number;
    mcqHighScore: number;
    lastRevisedAt: string | null;
    mastered: boolean;
}

export interface StudyStreak {
    currentStreak: number;
    longestStreak: number;
    lastStudyDate: string | null;
    totalDaysStudied: number;
}

// Helper to get keys based on subject
const getKeys = (subjectId: string) => ({
    PROGRESS_KEY: `${subjectId}_revision_progress`,
    STREAK_KEY: `${subjectId}_study_streak`
});

// Get all progress from localStorage
export function getAllProgress(subjectId: string = 'polity'): Record<string | number, RevisionProgress> {
    if (typeof window === 'undefined') return {};
    try {
        const { PROGRESS_KEY } = getKeys(subjectId);
        const stored = localStorage.getItem(PROGRESS_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch {
        return {};
    }
}

// Get progress for a specific chapter
export function getChapterProgress(chapterId: string | number, subjectId: string = 'polity'): RevisionProgress | null {
    const all = getAllProgress(subjectId);
    return all[chapterId] || null;
}

// Save progress for a chapter
export function saveChapterProgress(progress: RevisionProgress, subjectId: string = 'polity') {
    if (typeof window === 'undefined') return;
    const all = getAllProgress(subjectId);
    all[progress.chapterId] = progress;

    const { PROGRESS_KEY } = getKeys(subjectId);
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(all));

    // Also update streak
    updateStreak(subjectId);
}

// Update flashcard progress for a chapter
export function updateFlashcardProgress(chapterId: string | number, currentIdx: number, totalFlashcards: number, subjectId: string = 'polity') {
    const existing = getChapterProgress(chapterId, subjectId) || {
        chapterId,
        flashcardsCompleted: 0,
        flashcardsTotal: totalFlashcards,
        mcqsCompleted: 0,
        mcqsTotal: 0,
        mcqHighScore: 0,
        lastRevisedAt: null,
        mastered: false
    };

    // Update if this is further than before
    const newCompleted = Math.max(existing.flashcardsCompleted, currentIdx + 1);

    const updated: RevisionProgress = {
        ...existing,
        flashcardsCompleted: newCompleted,
        flashcardsTotal: totalFlashcards,
        lastRevisedAt: new Date().toISOString(),
        mastered: existing.mastered || (newCompleted >= totalFlashcards && existing.mcqHighScore >= existing.mcqsTotal * 0.8)
    };

    saveChapterProgress(updated, subjectId);
    return updated;
}

// Update MCQ progress for a chapter
export function updateMcqProgress(chapterId: string | number, score: number, totalMcqs: number, subjectId: string = 'polity') {
    const existing = getChapterProgress(chapterId, subjectId) || {
        chapterId,
        flashcardsCompleted: 0,
        flashcardsTotal: 0,
        mcqsCompleted: 0,
        mcqsTotal: totalMcqs,
        mcqHighScore: 0,
        lastRevisedAt: null,
        mastered: false
    };

    const updated: RevisionProgress = {
        ...existing,
        mcqsCompleted: totalMcqs, // Completed all MCQs
        mcqsTotal: totalMcqs,
        mcqHighScore: Math.max(existing.mcqHighScore, score),
        lastRevisedAt: new Date().toISOString(),
        mastered: existing.flashcardsCompleted >= existing.flashcardsTotal && score >= totalMcqs * 0.8
    };

    saveChapterProgress(updated, subjectId);
    return updated;
}

// Get streak data
export function getStreak(subjectId: string = 'polity'): StudyStreak {
    if (typeof window === 'undefined') {
        return { currentStreak: 0, longestStreak: 0, lastStudyDate: null, totalDaysStudied: 0 };
    }
    try {
        const { STREAK_KEY } = getKeys(subjectId);
        const stored = localStorage.getItem(STREAK_KEY);
        return stored ? JSON.parse(stored) : { currentStreak: 0, longestStreak: 0, lastStudyDate: null, totalDaysStudied: 0 };
    } catch {
        return { currentStreak: 0, longestStreak: 0, lastStudyDate: null, totalDaysStudied: 0 };
    }
}

// Update streak on study
export function updateStreak(subjectId: string = 'polity'): StudyStreak {
    if (typeof window === 'undefined') {
        return { currentStreak: 0, longestStreak: 0, lastStudyDate: null, totalDaysStudied: 0 };
    }

    const streak = getStreak(subjectId);
    const today = new Date().toISOString().split('T')[0];

    if (streak.lastStudyDate === today) {
        return streak; // Already studied today
    }

    const { STREAK_KEY } = getKeys(subjectId);

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    if (streak.lastStudyDate === yesterday) {
        // Continuing streak
        streak.currentStreak += 1;
        streak.longestStreak = Math.max(streak.currentStreak, streak.longestStreak);
    } else if (streak.lastStudyDate !== today) {
        // Streak broken
        streak.currentStreak = 1;
    }

    streak.lastStudyDate = today;
    streak.totalDaysStudied += 1;

    localStorage.setItem(STREAK_KEY, JSON.stringify(streak));
    return streak;
}

// Calculate overall stats
export function getOverallStats(subjectId: string = 'polity') {
    const progress = getAllProgress(subjectId);
    const chapters = Object.values(progress);

    const totalFlashcards = chapters.reduce((sum, p) => sum + p.flashcardsTotal, 0);
    const completedFlashcards = chapters.reduce((sum, p) => sum + p.flashcardsCompleted, 0);
    const totalMcqs = chapters.reduce((sum, p) => sum + p.mcqsTotal, 0);
    const completedMcqs = chapters.reduce((sum, p) => sum + p.mcqsCompleted, 0);
    const masteredChapters = chapters.filter(p => p.mastered).length;

    return {
        totalFlashcards,
        completedFlashcards,
        totalMcqs,
        completedMcqs,
        masteredChapters,
        totalChapters: 95, // TODO: This should probably be dynamic based on subject config
        overallProgress: totalFlashcards + totalMcqs > 0
            ? Math.round(((completedFlashcards + completedMcqs) / (totalFlashcards + totalMcqs)) * 100)
            : 0
    };
}
