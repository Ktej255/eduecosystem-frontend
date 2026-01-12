/**
 * Unified Progress Store for Polity Study
 * 
 * This store centralizes all progress tracking to ensure:
 * - Dashboard, Study Planner, and Analytics show consistent data
 * - Completion in Pomodoro reflects in Study Planner
 * - Real-time updates across components
 */

// Types
export interface ChapterProgress {
    chapterId: number;
    completed: boolean;
    completedAt?: string;
    subtopicsCompleted: string[];
    mcqScore?: number;
    flashcardsViewed?: number;
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

export interface PolityProgressStore {
    chapters: Record<number, ChapterProgress>;
    days: Record<string, DayProgress>; // key: "week_day"
    totalChaptersCompleted: number;
    totalSubtopicsCompleted: number;
    lastSyncTime: string;
}

// Storage keys
const PROGRESS_STORE_KEY = 'polity_unified_progress';
const CHAPTERS_KEY = 'completed_polity_chapters';
const SUBTOPICS_KEY = 'completed_polity_subtopics';

// Event system for real-time updates
type ProgressListener = (store: PolityProgressStore) => void;
const listeners: ProgressListener[] = [];

export function subscribeToProgress(listener: ProgressListener): () => void {
    listeners.push(listener);
    return () => {
        const index = listeners.indexOf(listener);
        if (index > -1) listeners.splice(index, 1);
    };
}

function notifyListeners(store: PolityProgressStore) {
    listeners.forEach(listener => listener(store));
}

// Initialize or get the progress store
export function getProgressStore(): PolityProgressStore {
    if (typeof window === 'undefined') {
        return createEmptyStore();
    }

    const saved = localStorage.getItem(PROGRESS_STORE_KEY);
    if (saved) {
        return JSON.parse(saved);
    }

    // Migrate from old storage format
    const migratedStore = migrateFromOldFormat();
    saveProgressStore(migratedStore);
    return migratedStore;
}

function createEmptyStore(): PolityProgressStore {
    return {
        chapters: {},
        days: {},
        totalChaptersCompleted: 0,
        totalSubtopicsCompleted: 0,
        lastSyncTime: new Date().toISOString()
    };
}

function migrateFromOldFormat(): PolityProgressStore {
    const store = createEmptyStore();

    // Migrate completed chapters
    const oldChapters = localStorage.getItem(CHAPTERS_KEY);
    if (oldChapters) {
        const chapterIds: number[] = JSON.parse(oldChapters);
        chapterIds.forEach(id => {
            store.chapters[id] = {
                chapterId: id,
                completed: true,
                completedAt: new Date().toISOString(),
                subtopicsCompleted: []
            };
        });
        store.totalChaptersCompleted = chapterIds.length;
    }

    return store;
}

function saveProgressStore(store: PolityProgressStore) {
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
export function markChapterComplete(chapterId: number, subtopicsCompleted: string[] = []) {
    const store = getProgressStore();

    if (!store.chapters[chapterId]) {
        store.chapters[chapterId] = {
            chapterId,
            completed: true,
            completedAt: new Date().toISOString(),
            subtopicsCompleted
        };
        store.totalChaptersCompleted++;
    } else {
        store.chapters[chapterId].completed = true;
        store.chapters[chapterId].completedAt = new Date().toISOString();
        store.chapters[chapterId].subtopicsCompleted = [
            ...new Set([...store.chapters[chapterId].subtopicsCompleted, ...subtopicsCompleted])
        ];
    }

    saveProgressStore(store);
}

// Mark subtopics as complete
export function markSubtopicsComplete(chapterId: number, subtopicIds: string[]) {
    const store = getProgressStore();

    if (!store.chapters[chapterId]) {
        store.chapters[chapterId] = {
            chapterId,
            completed: false,
            subtopicsCompleted: subtopicIds
        };
    } else {
        store.chapters[chapterId].subtopicsCompleted = [
            ...new Set([...store.chapters[chapterId].subtopicsCompleted, ...subtopicIds])
        ];
    }

    store.totalSubtopicsCompleted = Object.values(store.chapters)
        .reduce((sum, c) => sum + c.subtopicsCompleted.length, 0);

    saveProgressStore(store);
}

// Update day progress
export function updateDayProgress(weekId: number, dayId: number, data: Partial<DayProgress>) {
    const store = getProgressStore();
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

    saveProgressStore(store);
}

// Get progress for a specific day
export function getDayProgress(weekId: number, dayId: number): DayProgress | undefined {
    const store = getProgressStore();
    return store.days[`${weekId}_${dayId}`];
}

// Check if a chapter is complete
export function isChapterComplete(chapterId: number): boolean {
    const store = getProgressStore();
    return store.chapters[chapterId]?.completed || false;
}

// Get all completed chapter IDs
export function getCompletedChapterIds(): number[] {
    const store = getProgressStore();
    return Object.values(store.chapters)
        .filter(c => c.completed)
        .map(c => c.chapterId);
}

// Get progress statistics
export function getProgressStats() {
    const store = getProgressStore();
    const totalChapters = 95; // Total topics in Polity

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
export function recordMCQScore(chapterId: number, score: number) {
    const store = getProgressStore();

    if (!store.chapters[chapterId]) {
        store.chapters[chapterId] = {
            chapterId,
            completed: false,
            subtopicsCompleted: [],
            mcqScore: score
        };
    } else {
        store.chapters[chapterId].mcqScore = score;
    }

    saveProgressStore(store);
}

// Record flashcards viewed
export function recordFlashcardsViewed(chapterId: number, count: number) {
    const store = getProgressStore();

    if (!store.chapters[chapterId]) {
        store.chapters[chapterId] = {
            chapterId,
            completed: false,
            subtopicsCompleted: [],
            flashcardsViewed: count
        };
    } else {
        store.chapters[chapterId].flashcardsViewed =
            (store.chapters[chapterId].flashcardsViewed || 0) + count;
    }

    saveProgressStore(store);
}
