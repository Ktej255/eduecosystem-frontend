/**
 * React hook for accessing the unified Polity progress store
 * Provides real-time updates across all components
 */

import { useState, useEffect, useCallback } from 'react';
import {
    PolityProgressStore,
    getProgressStore,
    subscribeToProgress,
    markChapterComplete,
    markSubtopicsComplete,
    updateDayProgress,
    getProgressStats,
    isChapterComplete,
    getCompletedChapterIds,
    recordMCQScore,
    recordFlashcardsViewed,
    DayProgress
} from '@/lib/polity-progress-store';

export function usePolityProgress() {
    const [store, setStore] = useState<PolityProgressStore | null>(null);
    const [stats, setStats] = useState(() => getProgressStats());

    useEffect(() => {
        // Initial load
        setStore(getProgressStore());
        setStats(getProgressStats());

        // Subscribe to changes
        const unsubscribe = subscribeToProgress((newStore) => {
            setStore(newStore);
            setStats(getProgressStats());
        });

        return unsubscribe;
    }, []);

    // Memoized callbacks
    const completeChapter = useCallback((chapterId: number, subtopics?: string[]) => {
        markChapterComplete(chapterId, subtopics);
    }, []);

    const completeSubtopics = useCallback((chapterId: number, subtopicIds: string[]) => {
        markSubtopicsComplete(chapterId, subtopicIds);
    }, []);

    const updateDay = useCallback((weekId: number, dayId: number, data: Partial<DayProgress>) => {
        updateDayProgress(weekId, dayId, data);
    }, []);

    const recordMCQ = useCallback((chapterId: number, score: number) => {
        recordMCQScore(chapterId, score);
    }, []);

    const recordFlashcards = useCallback((chapterId: number, count: number) => {
        recordFlashcardsViewed(chapterId, count);
    }, []);

    return {
        store,
        stats,
        // Actions
        completeChapter,
        completeSubtopics,
        updateDay,
        recordMCQ,
        recordFlashcards,
        // Queries
        isComplete: isChapterComplete,
        completedIds: getCompletedChapterIds
    };
}

/**
 * Simple hook to check if specific chapters are complete
 */
export function useChapterCompletion(chapterIds: number[]) {
    const { store } = usePolityProgress();

    const completion = chapterIds.map(id => ({
        chapterId: id,
        completed: store?.chapters[id]?.completed || false,
        subtopicsCompleted: store?.chapters[id]?.subtopicsCompleted?.length || 0
    }));

    const allComplete = completion.every(c => c.completed);
    const someComplete = completion.some(c => c.completed);
    const completedCount = completion.filter(c => c.completed).length;

    return {
        completion,
        allComplete,
        someComplete,
        completedCount,
        total: chapterIds.length
    };
}
