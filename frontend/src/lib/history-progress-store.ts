/**
 * Unified Progress Store for History Study
 */

// Types
export interface ChapterProgress {
    chapterId: number;
    completed: boolean;
    completedAt?: string;
    subtopicsCompleted: string[];
    mcqScore?: number;
    flashcardsViewed?: number;
    mcqLevelsCompleted: number[]; // e.g. [1, 2] means L1 and L2 done
}

export interface DayProgress {
    weekId: number;
    dayId: number;
    cyclesCompleted: number;
    totalSubtopics: number;
    morningComplete: boolean;
    eveningComplete: boolean;
    lastUpdated: string;
}

export interface HistoryProgressStore {
    chapters: Record<number, ChapterProgress>;
    days: Record<string, DayProgress>; // key: "week_day"
    totalChaptersCompleted: number;
    totalSubtopicsCompleted: number;
    lastSyncTime: string;
}

// Storage keys
const PROGRESS_STORE_KEY = 'history_unified_progress';
const CHAPTERS_KEY = 'completed_history_chapters';
const SUBTOPICS_KEY = 'completed_history_subtopics';

// Event system for real-time updates
type ProgressListener = (store: HistoryProgressStore) => void;
const listeners: ProgressListener[] = [];

export function subscribeToHistoryProgress(listener: ProgressListener): () => void {
    listeners.push(listener);
    return () => {
        const index = listeners.indexOf(listener);
        if (index > -1) listeners.splice(index, 1);
    };
}

function notifyListeners(store: HistoryProgressStore) {
    listeners.forEach(listener => listener(store));
}

// Initialize or get the progress store
export function getHistoryProgressStore(): HistoryProgressStore {
    if (typeof window === 'undefined') {
        return createEmptyStore();
    }

    const saved = localStorage.getItem(PROGRESS_STORE_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (parsed) return parsed;
        } catch (e) {
            console.error('Failed to parse history progress:', e);
        }
    }

    const store = createEmptyStore();
    saveHistoryProgressStore(store);
    return store;
}

function createEmptyStore(): HistoryProgressStore {
    return {
        chapters: {},
        days: {},
        totalChaptersCompleted: 0,
        totalSubtopicsCompleted: 0,
        lastSyncTime: new Date().toISOString()
    };
}

function saveHistoryProgressStore(store: HistoryProgressStore) {
    if (typeof window === 'undefined') return;

    store.lastSyncTime = new Date().toISOString();
    localStorage.setItem(PROGRESS_STORE_KEY, JSON.stringify(store));

    // Also sync to legacy keys for backward compatibility
    const completedChapterIds = Object.values(store.chapters)
        .filter(c => c.completed)
        .map(c => c.chapterId);
    localStorage.setItem(CHAPTERS_KEY, JSON.stringify(completedChapterIds));

    notifyListeners(store);
}

// Mark a chapter as complete
export function markHistoryChapterComplete(chapterId: number, subtopicsCompleted: string[] = []) {
    const store = getHistoryProgressStore();

    if (!store.chapters[chapterId]) {
        store.chapters[chapterId] = {
            chapterId,
            completed: true,
            completedAt: new Date().toISOString(),
            subtopicsCompleted,
            mcqLevelsCompleted: []
        };
        store.totalChaptersCompleted++;
    } else {
        store.chapters[chapterId].completed = true;
        store.chapters[chapterId].completedAt = new Date().toISOString();
        store.chapters[chapterId].subtopicsCompleted = [
            ...new Set([...store.chapters[chapterId].subtopicsCompleted, ...subtopicsCompleted])
        ];
    }

    saveHistoryProgressStore(store);
}

// Mark subtopics as complete
export function markHistorySubtopicsComplete(chapterId: number, subtopicIds: string[]) {
    const store = getHistoryProgressStore();

    if (!store.chapters[chapterId]) {
        store.chapters[chapterId] = {
            chapterId,
            completed: false,
            subtopicsCompleted: subtopicIds,
            mcqLevelsCompleted: []
        };
    } else {
        store.chapters[chapterId].subtopicsCompleted = [
            ...new Set([...store.chapters[chapterId].subtopicsCompleted, ...subtopicIds])
        ];
    }

    store.totalSubtopicsCompleted = Object.values(store.chapters)
        .reduce((sum, c) => sum + c.subtopicsCompleted.length, 0);

    saveHistoryProgressStore(store);
}

// Update day progress
export function updateHistoryDayProgress(weekId: number, dayId: number, data: Partial<DayProgress>) {
    const store = getHistoryProgressStore();
    const key = `${weekId}_${dayId}`;

    const existing = store.days[key] || {
        weekId,
        dayId,
        cyclesCompleted: 0,
        totalSubtopics: 0,
        morningComplete: false,
        eveningComplete: false,
        lastUpdated: new Date().toISOString()
    };

    store.days[key] = {
        ...existing,
        ...data,
        lastUpdated: new Date().toISOString()
    };

    saveHistoryProgressStore(store);
}

// Get progress for a specific day
export function getHistoryDayProgress(weekId: number, dayId: number): DayProgress | undefined {
    const store = getHistoryProgressStore();
    return store.days[`${weekId}_${dayId}`];
}

// Check if a chapter is complete
export function isHistoryChapterComplete(chapterId: number): boolean {
    const store = getHistoryProgressStore();
    return store.chapters[chapterId]?.completed || false;
}

// Get all completed chapter IDs
export function getHistoryCompletedChapterIds(): number[] {
    const store = getHistoryProgressStore();
    return Object.values(store.chapters)
        .filter(c => c.completed)
        .map(c => c.chapterId);
}

// Get progress statistics
export function getHistoryProgressStats() {
    const store = getHistoryProgressStore();
    const totalChapters = 39; // Total chapters in History

    return {
        chaptersCompleted: store.totalChaptersCompleted,
        totalChapters,
        percentComplete: Math.round((store.totalChaptersCompleted / totalChapters) * 100),
        subtopicsCompleted: store.totalSubtopicsCompleted,
        daysWithProgress: Object.keys(store.days).length,
        lastActivity: store.lastSyncTime
    };
}

// Record MCQ score for a chapter
export function recordHistoryMCQScore(chapterId: number, score: number) {
    const store = getHistoryProgressStore();

    if (!store.chapters[chapterId]) {
        store.chapters[chapterId] = {
            chapterId,
            completed: false,
            subtopicsCompleted: [],
            mcqScore: score,
            mcqLevelsCompleted: []
        };
    } else {
        store.chapters[chapterId].mcqScore = score;
    }

    saveHistoryProgressStore(store);
}

// Record flashcards viewed
export function recordHistoryFlashcardsViewed(chapterId: number, count: number) {
    const store = getHistoryProgressStore();

    if (!store.chapters[chapterId]) {
        store.chapters[chapterId] = {
            chapterId,
            completed: false,
            subtopicsCompleted: [],
            flashcardsViewed: count,
            mcqLevelsCompleted: []
        };
    } else {
        store.chapters[chapterId].flashcardsViewed =
            (store.chapters[chapterId].flashcardsViewed || 0) + count;
    }

    saveHistoryProgressStore(store);
}

// Mark an MCQ Level as complete
export function markHistoryMCQLevelComplete(chapterId: number, level: number) {
    const store = getHistoryProgressStore();

    if (!store.chapters[chapterId]) {
        store.chapters[chapterId] = {
            chapterId,
            completed: false,
            subtopicsCompleted: [],
            mcqLevelsCompleted: [level]
        };
    } else {
        const levels = store.chapters[chapterId].mcqLevelsCompleted || [];
        if (!levels.includes(level)) {
            store.chapters[chapterId].mcqLevelsCompleted = [...levels, level];
        } else {
            // ensure it exists if undefined
            store.chapters[chapterId].mcqLevelsCompleted = levels;
        }
    }

    saveHistoryProgressStore(store);
}

// Check if an MCQ Level is complete
export function isHistoryMCQLevelComplete(chapterId: number, level: number): boolean {
    const store = getHistoryProgressStore();
    return store.chapters[chapterId]?.mcqLevelsCompleted?.includes(level) || false;
}

