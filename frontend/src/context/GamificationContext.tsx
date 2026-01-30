"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import activityService from '@/services/activityService';
import AchievementToast from '@/components/gamification/AchievementToast';
import LevelUpModal from '@/components/gamification/LevelUpModal';

// ===========================
// SPACED REPETITION & XP TYPES
// ===========================
interface ReviewItem {
    questionId: string;
    subjectId: string;
    topicId: string;
    confidence: 'sure' | 'guessing' | 'unsure';
    lastReviewed: string;
    nextReview: string;
    interval: number;
    easeFactor: number;
    correctStreak: number;
}

interface XPEvent {
    type: string;
    points: number;
    timestamp: string;
}

interface GamificationState {
    totalXP: number;
    currentLevel: number;
    currentStreak: number;
    longestStreak: number;
    lastActiveDate: string;
    xpHistory: XPEvent[];
    reviewQueue: ReviewItem[];
    badges: string[]; // Added Badge Support
    visitedVisuals: string[]; // Added for Explorer Badge
}

const XP_VALUES: Record<string, number> = {
    mcq_correct: 10,
    mcq_incorrect: 2,
    chapter_complete: 50,
    daily_login: 15,
    streak_bonus: 25,
    start_visual_module: 50, // Added Visuals
    complete_quiz: 100,
    complete_topic: 150
};

const LEVEL_THRESHOLDS = [0, 100, 300, 600, 1000, 1500, 2200, 3000, 4000, 5200, 6500];

interface GamificationContextType {
    // Flattened State for convenience
    xp: number;
    level: number;
    badges: string[];
    streak: number;
    longestStreak: number;

    // Actions
    addXP: (type: string, metadata?: any) => void; // Supports both 'mcq_correct' or raw type
    addXp: (amount: number, reason: string) => void; // Alias for compatibility

    // SRS Methods
    recordReviewResult: (qId: string, sId: string, tId: string, isCorrect: boolean, conf: 'sure' | 'guessing' | 'unsure') => void;
    getReviewQueue: (limit?: number) => ReviewItem[];
    getWeakTopics: () => { topicId: string; subjectId: string; score: number }[];
    checkAndUpdateStreak: () => boolean;
}

const GamificationContext = createContext<GamificationContextType | null>(null);
const STORAGE_KEY = 'upsc_gamification_state_v2';

export function GamificationProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<GamificationState>({
        totalXP: 0,
        currentLevel: 1,
        currentStreak: 0,
        longestStreak: 0,
        lastActiveDate: '',
        xpHistory: [],
        reviewQueue: [],
        badges: [],
        visitedVisuals: []
    });

    const [toast, setToast] = useState<{ message: string; subMessage: string; visible: boolean } | null>(null);
    const [levelUp, setLevelUp] = useState<{ level: number; visible: boolean } | null>(null);

    // Load from localStorage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                const stored = localStorage.getItem(STORAGE_KEY);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (parsed && typeof parsed === 'object') {
                        // Safe merge: Ensure arrays are actually arrays
                        setState(prev => ({
                            ...prev,
                            ...parsed,
                            // Defensively ensure critical array fields are arrays if parsed value is null/invalid
                            badges: Array.isArray(parsed.badges) ? parsed.badges : prev.badges,
                            visitedVisuals: Array.isArray(parsed.visitedVisuals) ? parsed.visitedVisuals : prev.visitedVisuals,
                            xpHistory: Array.isArray(parsed.xpHistory) ? parsed.xpHistory : prev.xpHistory,
                            reviewQueue: Array.isArray(parsed.reviewQueue) ? parsed.reviewQueue : prev.reviewQueue,
                        }));
                    }
                }
            } catch (error) {
                console.error("Failed to load gamification state:", error);
                // Fallback to default state is already set
            }
        }


        // Subscribe to Activity Service events
        const unsubscribe = activityService.subscribe((action, details) => {
            handleActivityEvent(action, details);
        });
        return () => unsubscribe();
    }, []);

    // Save to localStorage
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        }
    }, [state]);

    const calculateLevel = (xp: number) => {
        for (let i = LEVEL_THRESHOLDS.length - 1; i >= 0; i--) {
            if (xp >= LEVEL_THRESHOLDS[i]) return i + 1;
        }
        return 1;
    };

    const handleActivityEvent = (action: string, details: string) => {
        // Map activity actions to XP types
        if (action === 'start_visual_module') {
            addXP('start_visual_module', { details });
        } else if (action === 'complete_quiz') {
            addXP('complete_quiz', { details });
        } else if (action === 'complete_topic') {
            addXP('complete_topic', { details });
        } else if (action === 'login') {
            addXP('daily_login');
        }
    };

    const addXP = useCallback((type: string, metadata?: any) => {
        const points = XP_VALUES[type] || 10;

        setState(prev => {
            const newXP = prev.totalXP + points;
            const newLevel = calculateLevel(newXP);

            // Check Level Up
            if (newLevel > prev.currentLevel) {
                setLevelUp({ level: newLevel, visible: true });
            }

            // Check Badges (Explorer Logic)
            let newVisited = prev.visitedVisuals;
            let newBadges = prev.badges;

            if (type === 'start_visual_module' && metadata?.details) {
                if (!newVisited.includes(metadata.details)) {
                    newVisited = [...newVisited, metadata.details];
                    if (newVisited.length === 5 && !newBadges.includes('Explorer')) {
                        newBadges = [...newBadges, 'Explorer'];
                        // Show Badge Toast
                        setTimeout(() => setToast({ message: 'Badge Unlocked: Explorer', subMessage: 'Visited 5 Visual Modules', visible: true }), 500);
                    }
                }
            }

            // Show Toast for XP
            setToast({ message: `+${points} XP`, subMessage: type.replace(/_/g, ' '), visible: true });
            setTimeout(() => setToast(current => current?.visible ? { ...current, visible: false } : null), 3000);

            return {
                ...prev,
                totalXP: newXP,
                currentLevel: newLevel,
                xpHistory: [...prev.xpHistory.slice(-99), { type, points, timestamp: new Date().toISOString() }],
                visitedVisuals: newVisited,
                badges: newBadges
            };
        });
    }, []);

    const addXp = (amount: number, reason: string) => {
        // Compatibility wrapper
        // We'll treat 'amount' as custom points, or map to generic type
        console.log("Legacy addXp called:", reason);
        // Direct state manipulation for custom amount?
        setState(prev => {
            const newXP = prev.totalXP + amount;
            const newLevel = calculateLevel(newXP);
            if (newLevel > prev.currentLevel) setLevelUp({ level: newLevel, visible: true });

            setToast({ message: `+${amount} XP`, subMessage: reason, visible: true });
            setTimeout(() => setToast(current => current?.visible ? { ...current, visible: false } : null), 3000);

            return {
                ...prev,
                totalXP: newXP,
                currentLevel: newLevel,
                xpHistory: [...prev.xpHistory.slice(-99), { type: 'custom', points: amount, timestamp: new Date().toISOString() }]
            };
        });
    };

    // SRS METHODS
    const recordReviewResult = useCallback((questionId: string, subjectId: string, topicId: string, isCorrect: boolean, confidence: 'sure' | 'guessing' | 'unsure') => {
        setState(prev => {
            const existingIdx = prev.reviewQueue.findIndex(r => r.questionId === questionId);
            let updatedQueue = [...prev.reviewQueue];

            let item = existingIdx >= 0 ? updatedQueue[existingIdx] : {
                questionId, subjectId, topicId, confidence,
                lastReviewed: new Date().toISOString(),
                nextReview: new Date().toISOString(),
                interval: 0,
                easeFactor: 2.5,
                correctStreak: 0
            };

            // Calculate next review (simplified SuperMemo-2)
            if (isCorrect) {
                if (item.interval === 0) item.interval = 1;
                else if (item.interval === 1) item.interval = 6;
                else item.interval = Math.round(item.interval * item.easeFactor);
                item.easeFactor += 0.1;
                item.correctStreak += 1;
            } else {
                item.interval = 1;
                item.easeFactor = Math.max(1.3, item.easeFactor - 0.2);
                item.correctStreak = 0;
            }
            item.lastReviewed = new Date().toISOString();
            item.nextReview = new Date(Date.now() + item.interval * 24 * 60 * 60 * 1000).toISOString();

            if (existingIdx >= 0) updatedQueue[existingIdx] = item;
            else updatedQueue.push(item);

            return { ...prev, reviewQueue: updatedQueue };
        });
        addXP(isCorrect ? 'mcq_correct' : 'mcq_incorrect');
    }, [addXP]);

    const getReviewQueue = (limit = 10) => {
        const now = new Date().toISOString();
        return state.reviewQueue
            .filter(r => r.nextReview <= now)
            .sort((a, b) => a.nextReview.localeCompare(b.nextReview))
            .slice(0, limit);
    };

    const getWeakTopics = () => {
        const scores: Record<string, { correct: number, total: number, subjectId: string }> = {};
        state.reviewQueue.forEach(item => {
            if (!scores[item.topicId]) scores[item.topicId] = { correct: 0, total: 0, subjectId: item.subjectId };
            scores[item.topicId].total++;
            if (item.correctStreak > 1) scores[item.topicId].correct++;
        });

        return Object.entries(scores)
            .map(([topicId, data]) => ({
                topicId,
                subjectId: data.subjectId,
                score: data.total === 0 ? 0 : Math.round((data.correct / data.total) * 100)
            }))
            .filter(t => t.score < 50)
            .sort((a, b) => a.score - b.score);
    };

    const checkAndUpdateStreak = () => {
        // Simplified streak logic
        return true;
    };

    return (
        <GamificationContext.Provider value={{
            xp: state.totalXP,
            level: state.currentLevel,
            badges: state.badges,
            streak: state.currentStreak,
            longestStreak: state.longestStreak,
            addXP,
            addXp,
            recordReviewResult,
            getReviewQueue,
            getWeakTopics,
            checkAndUpdateStreak
        }}>
            {children}
            {toast?.visible && <AchievementToast message={toast.message} subMessage={toast.subMessage} onClose={() => setToast(null)} />}
            {levelUp?.visible && <LevelUpModal level={levelUp.level} onClose={() => setLevelUp(null)} />}
        </GamificationContext.Provider>
    );
}

export const useGamification = () => {
    const context = useContext(GamificationContext);
    if (!context) throw new Error("useGamification must be used within GamificationProvider");
    return context;
};

export function useXPProgress() {
    const { xp, level, streak, longestStreak } = useGamification();
    const currentThreshold = LEVEL_THRESHOLDS[level - 1] || 0;
    // Cap next threshold logic
    const isMaxLevel = level >= LEVEL_THRESHOLDS.length;
    const nextThreshold = isMaxLevel ? (currentThreshold * 1.5) : (LEVEL_THRESHOLDS[level] || LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1]);

    const xpInLevel = xp - currentThreshold;
    const xpNeeded = nextThreshold - currentThreshold;

    // Avoid division by zero
    const progress = xpNeeded > 0 ? Math.min(100, Math.max(0, (xpInLevel / xpNeeded) * 100)) : 100;

    return {
        level,
        xp,
        xpInLevel,
        xpNeeded,
        progress,
        streak,
        longestStreak
    };
}
