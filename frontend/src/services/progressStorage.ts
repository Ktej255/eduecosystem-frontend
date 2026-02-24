/**
 * Progress Storage Service
 * 
 * Centralized service for saving and loading all student progress data.
 * Uses localStorage for persistence across sessions and page refreshes.
 */

import { SadhanaProgress, DEFAULT_SADHANA_PROGRESS } from '../components/batch2/sadhana/data/sadhana-data';

// Storage keys
const STORAGE_KEYS = {
    LEARNING_PROGRESS: 'edueco_learning_progress',
    ANALYSIS_REPORTS: 'edueco_analysis_reports',
    STATS: 'edueco_student_stats',
    RETRY_QUEUE: 'edueco_sync_retry_queue',
};

/**
 * RESET ALL PROGRESS - Use this to start fresh
 * Call from browser console: window.resetAllProgress()
 */
export function resetAllProgress(): void {
    if (typeof window === 'undefined') return;
    try {
        localStorage.removeItem(STORAGE_KEYS.LEARNING_PROGRESS);
        localStorage.removeItem(STORAGE_KEYS.ANALYSIS_REPORTS);
        localStorage.removeItem(STORAGE_KEYS.STATS);
        console.log('✅ All progress reset to 0!');
        window.location.reload();
    } catch (e) {
        console.error('Failed to reset progress:', e);
    }
}

// Expose to window for easy access from console
if (typeof window !== 'undefined') {
    (window as any).resetAllProgress = resetAllProgress;
}

// Types
export interface PrelimsSession {
    cycleId: number;
    dayId: number;
    partId: number;
    segmentIndex: number;
    videoTimestamp: number;
    phase: 'video' | 'response' | 'analysis' | 'complete';
    lastUpdated: string;
}

export interface MeditationProgress {
    currentLevel: number;
    currentDay: number;
    processIndex: number;
    streakDays: number;
    lastCompleted: string | null;
}

export interface GraphotherapyProgress {
    currentLevel: number;
    currentDay: number;
    streakDays: number;
    lastCompleted: string | null;
}

export interface RASProgress {
    currentDay: number;
    topicsCompleted: string[];
    streakDays: number;
    lastCompleted: string | null;
}

export interface AnalysisReport {
    segmentKey: string; // "cycle-day-part-segment"
    recallScore: number;
    understandingLevel: string;
    coveragePercentage: number;
    feedback: string;
    detailedAnalysis: string;
    strengths: string[];
    areasToImprove: string[];
    conceptsCovered: string[];
    conceptsMissed: string[];
    aiSource: string;
    aiModel?: string;
    timestamp: string;
}

export interface LearningProgress {
    prelims: PrelimsSession | null;
    meditation: MeditationProgress;
    graphotherapy: GraphotherapyProgress;
    ras: RASProgress;
    completedSegments: string[]; // ["1-1-1-1", "1-1-1-2"]
    completedChapters: string[]; // ["economy-banking", "polity-preamble"]
    completedMeditation: string[]; // ["1-1", "1-2"]
    completedGraphotherapy: string[]; // ["1-1", "1-2"]
    lastActivity: string;
    chapterLogs?: Record<string, number>; // "economy-banking": 1714567890000
    chapterConfidence?: Record<string, 'high' | 'medium' | 'low'>;
    chapterStability?: Record<string, number>; // "economy-banking": 4.5 (days)
    solvedQuestions?: string[]; // ["hist-mod-001", "hist-anc-005"]
    subjectMastery: SubjectMastery;
    studyHabits: StudyHabits;
    sadhana: SadhanaProgress;
}

export interface SubjectMastery {
    economy: number;
    polity: number;
    history: number;
    geography: number;
    science: number;
    ethics: number;
    security: number;
    art_culture: number;
}

export interface StudyHabits {
    dailyMinutes: Record<string, number>;
    sessionsCount: number;
    totalStudyTime: number; // minutes
}

const isBrowser = typeof window !== 'undefined';

const safeStorage = {
    getItem: (key: string) => isBrowser ? localStorage.getItem(key) : null,
    setItem: (key: string, value: string) => isBrowser ? localStorage.setItem(key, value) : null,
};

export function getLearningProgress(): LearningProgress {
    const stored = safeStorage.getItem(STORAGE_KEYS.LEARNING_PROGRESS);
    if (!stored) return DEFAULT_PROGRESS;
    try {
        const parsed = JSON.parse(stored);
        return { ...DEFAULT_PROGRESS, ...parsed };
    } catch {
        return DEFAULT_PROGRESS;
    }
}

export function saveLearningProgress(updates: Partial<LearningProgress>): void {
    const current = getLearningProgress();
    const updated = {
        ...current,
        ...updates,
        lastActivity: new Date().toISOString()
    };
    safeStorage.setItem(STORAGE_KEYS.LEARNING_PROGRESS, JSON.stringify(updated));

    // Async sync with cloud
    if (isBrowser) {
        syncWithCloud(updated).catch(err => console.error('Cloud sync failed:', err));
    }
}

/**
 * Cloud Sync Integration with Exponential Backoff
 */
const MAX_RETRIES = 5;
const INITIAL_BACKOFF = 1000; // 1 second

async function syncWithCloud(progressState: LearningProgress, retryCount = 0) {
    const token = localStorage.getItem('edueco_auth_token');
    if (!token) return;

    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

        // Batch all local data for full persistence
        const reports = getAnalysisReports();
        const stats = getStudentStats();

        const response = await fetch(`${baseUrl}/progress/sync`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                state_blob: {
                    progress: progressState,
                    reports: reports,
                    stats: stats
                }
            })
        });

        if (!response.ok) throw new Error('Failed to sync progress');

        // Success: Clear any pending retries if this was a manual retry
        console.log('☁️ Universal state synced with cloud');
    } catch (e) {
        console.warn(`Silent sync failed (Attempt ${retryCount + 1}):`, e);

        if (retryCount < MAX_RETRIES) {
            const backoff = INITIAL_BACKOFF * Math.pow(2, retryCount);
            setTimeout(() => {
                syncWithCloud(progressState, retryCount + 1);
            }, backoff);
        } else {
            // Persistent failure: save to local retry queue for next app load
            saveToRetryQueue(progressState);
        }
    }
}

function saveToRetryQueue(state: LearningProgress) {
    if (!isBrowser) return;
    localStorage.setItem(STORAGE_KEYS.RETRY_QUEUE, JSON.stringify(state));
    console.log('💾 Progress saved to local retry queue (Offline)');
}

/**
 * Attempt to sync any pending data from previous sessions
 */
export async function processRetryQueue() {
    if (!isBrowser) return;
    const pending = localStorage.getItem(STORAGE_KEYS.RETRY_QUEUE);
    if (pending) {
        try {
            const state = JSON.parse(pending);
            await syncWithCloud(state);
            localStorage.removeItem(STORAGE_KEYS.RETRY_QUEUE);
            console.log('🔄 Pending local changes synced to cloud');
        } catch (e) {
            // Keep in queue for next time
        }
    }
}

/**
 * Pull latest state from cloud (Call on login/dashboard load)
 */
export async function pullCloudProgress(): Promise<void> {
    const token = localStorage.getItem('edueco_auth_token');
    if (!token) return;

    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';
        const response = await fetch(`${baseUrl}/progress/sync`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });

        if (response.ok) {
            const data = await response.json();
            const blob = data.state_blob;

            if (blob) {
                // If it's the new nested structure
                if (blob.progress && blob.reports && blob.stats) {
                    localStorage.setItem(STORAGE_KEYS.LEARNING_PROGRESS, JSON.stringify(blob.progress));
                    localStorage.setItem(STORAGE_KEYS.ANALYSIS_REPORTS, JSON.stringify(blob.reports));
                    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(blob.stats));
                    console.log('✅ Universal local state restored from cloud');
                } else {
                    // Legacy flattened structure
                    localStorage.setItem(STORAGE_KEYS.LEARNING_PROGRESS, JSON.stringify(blob));
                    console.log('✅ Legacy local state restored from cloud');
                }
            }
        }
    } catch (e) {
        console.error('Failed to pull cloud progress:', e);
    }
}


// Default values
const DEFAULT_PROGRESS: LearningProgress = {
    prelims: null,
    meditation: {
        currentLevel: 1,
        currentDay: 1,
        processIndex: 0,
        streakDays: 0,
        lastCompleted: null,
    },
    graphotherapy: {
        currentLevel: 1,
        currentDay: 1,
        streakDays: 0,
        lastCompleted: null,
    },
    ras: {
        currentDay: 1,
        topicsCompleted: [],
        streakDays: 0,
        lastCompleted: null,
    },
    completedSegments: [],
    completedChapters: [],
    completedMeditation: [],
    completedGraphotherapy: [],
    lastActivity: new Date().toISOString(),
    chapterLogs: {},
    chapterConfidence: {},
    chapterStability: {},
    subjectMastery: {
        economy: 0,
        polity: 0,
        history: 0,
        geography: 0,
        science: 0,
        ethics: 0,
        security: 0,
        art_culture: 0,
    },
    studyHabits: {
        dailyMinutes: {},
        sessionsCount: 0,
        totalStudyTime: 0,
    },
    solvedQuestions: [],
    sadhana: DEFAULT_SADHANA_PROGRESS,
};

// ... existing code ...

export function markQuestionSolved(questionId: string): void {
    const progress = getLearningProgress();
    const solved = progress.solvedQuestions || [];

    if (!solved.includes(questionId)) {
        saveLearningProgress({
            solvedQuestions: [...solved, questionId]
        });

        // Update mastery (heuristic: 1 question = 0.5% mastery increment for that subject)
        // Extract subject from ID (assuming format "subject-...")
        // This is a simplified approach; ideally we'd map ID to subject
        const subjectPrefix = questionId.split('-')[0]; // "hist", "eco"
        if (subjectPrefix) {
            const subjectMap: Record<string, string> = {
                'hist': 'history', 'eco': 'economy', 'pol': 'polity', 'geo': 'geography',
                'sci': 'science', 'eth': 'ethics', 'sec': 'security', 'art': 'art_culture'
            };
            const subject = subjectMap[subjectPrefix];
            if (subject) {
                // We don't have a direct function to increment mastery by %, so we'll just leave it for now
                // or implemented a smarter update logic later.
                // For now, just saving the ID is enough for the UI to show "Solved".
            }
        }
    }
}

// Status checking


export function markChapterComplete(chapterId: string): void {
    const progress = getLearningProgress();
    const completedChapters = progress.completedChapters || [];
    const chapterLogs = progress.chapterLogs || {};

    const updates: Partial<LearningProgress> = {};
    let hasUpdates = false;

    if (!completedChapters.includes(chapterId)) {
        updates.completedChapters = [...completedChapters, chapterId];
        hasUpdates = true;
    }

    if (!chapterLogs[chapterId]) {
        updates.chapterLogs = {
            ...chapterLogs,
            [chapterId]: Date.now()
        };
        hasUpdates = true;
    }

    if (hasUpdates) {
        saveLearningProgress(updates);
        // Performance DNA Update
        updateSubjectMastery(chapterId);
    }
}

function updateSubjectMastery(chapterId: string): void {
    const progress = getLearningProgress();
    const subject = chapterId.split('-')[0]; // "economy-banking" -> "economy"

    // Simple heuristic: count completed chapters in this subject
    const subjectChapters = progress.completedChapters.filter(id => id.startsWith(subject));

    // Mock target counts for mastery %
    const TARGETS: Record<string, number> = {
        economy: 40, polity: 50, history: 60, geography: 45,
        science: 30, ethics: 25, security: 15, art_culture: 15
    };

    const target = TARGETS[subject] || 30;
    const mastery = Math.min(100, Math.round((subjectChapters.length / target) * 100));

    const currentMastery = progress.subjectMastery || DEFAULT_PROGRESS.subjectMastery;

    saveLearningProgress({
        subjectMastery: {
            ...currentMastery,
            [subject as keyof SubjectMastery]: mastery
        }
    });
}

export function logStudySession(minutes: number): void {
    const progress = getLearningProgress();
    const today = new Date().toISOString().split('T')[0];
    const habits = progress.studyHabits || DEFAULT_PROGRESS.studyHabits;

    const todayMinutes = (habits.dailyMinutes[today] || 0) + minutes;

    saveLearningProgress({
        studyHabits: {
            ...habits,
            dailyMinutes: {
                ...habits.dailyMinutes,
                [today]: todayMinutes
            },
            sessionsCount: habits.sessionsCount + 1,
            totalStudyTime: habits.totalStudyTime + minutes
        }
    });
}

export function isChapterComplete(chapterId: string): boolean {
    const progress = getLearningProgress();
    const completedChapters = progress.completedChapters || [];
    return completedChapters.includes(chapterId);
}

// Confidence
export function setChapterConfidence(chapterId: string, level: 'high' | 'medium' | 'low'): void {
    const progress = getLearningProgress();
    const currentConfidence = progress.chapterConfidence || {};

    saveLearningProgress({
        chapterConfidence: {
            ...currentConfidence,
            [chapterId]: level
        }
    });

    // Also update stability for Spaced Repetition
    updateChapterStability(chapterId, level);
}

export function getChapterConfidence(chapterId: string): 'high' | 'medium' | 'low' | null {
    const progress = getLearningProgress();
    const currentConfidence = progress.chapterConfidence || {};
    return currentConfidence[chapterId] || null;
}

// ============================================
// SPACED REPETITION ENGINE (Vision Pillar 5)
// ============================================

const SR_CONFIG = {
    INITIAL_STABILITY: {
        high: 4,     // 4 days
        medium: 2,   // 2 days
        low: 1       // 1 day
    },
    STABILITY_FACTOR: {
        high: 2.2,
        medium: 1.5,
        low: 1.1
    },
    RETENTION_THRESHOLD: 0.9 // R=0.9 at t=S
};

/**
 * Calculates current retrievability for a topic
 * R = e^(ln(0.9) * t / S)
 */
export function getTopicRetention(chapterId: string) {
    const progress = getLearningProgress();
    const lastLog = progress.chapterLogs?.[chapterId];
    const stability = progress.chapterStability?.[chapterId];
    const confidence = progress.chapterConfidence?.[chapterId] || 'medium';

    if (!lastLog || !stability) {
        return {
            retrievability: 1.0,
            stability: stability || 0,
            status: 'new' as const,
            daysSince: 0
        };
    }

    const now = Date.now();
    const t = (now - lastLog) / (1000 * 60 * 60 * 24); // t in days

    // R = 0.9^(t/S) is equivalent to e^(ln(0.9) * t/S)
    const retrievability = Math.pow(0.9, t / stability);

    let status: 'mastered' | 'stable' | 'review_soon' | 'critical' | 'forgotten' = 'mastered';
    if (retrievability < 0.3) status = 'forgotten';
    else if (retrievability < 0.6) status = 'critical';
    else if (retrievability < 0.75) status = 'review_soon';
    else if (retrievability < 0.9) status = 'stable';

    return {
        retrievability: Math.max(0, Math.min(1, retrievability)),
        stability,
        status,
        daysSince: t,
        daysUntilReview: Math.max(0, stability - t)
    };
}

/**
 * Updates stability scores when confidence is set
 */
function updateChapterStability(chapterId: string, level: 'high' | 'medium' | 'low'): void {
    const progress = getLearningProgress();
    const currentStability = progress.chapterStability || {};
    const oldStability = currentStability[chapterId];

    let newStability = 0;
    if (!oldStability) {
        // First study session
        newStability = SR_CONFIG.INITIAL_STABILITY[level];
    } else {
        // Revision
        newStability = oldStability * SR_CONFIG.STABILITY_FACTOR[level];
    }

    saveLearningProgress({
        chapterStability: {
            ...currentStability,
            [chapterId]: Number(newStability.toFixed(2))
        }
    });
}

/**
 * Generates points for the decay curve visualization
 */
export function getDecayCurvePoints(chapterId: string) {
    const srData = getTopicRetention(chapterId);
    const points: { day: number, retention: number }[] = [];

    // Generate 10 days of points
    for (let i = 0; i <= 10; i++) {
        const retention = Math.exp(Math.log(0.9) * i / srData.stability);
        points.push({
            day: i,
            retention: Math.max(0.1, retention)
        });
    }

    return {
        points,
        currentRetention: srData.retrievability,
        stability: srData.stability,
        daysUntilReview: srData.daysUntilReview
    };
}

// ============================================
// RETENTION SUMMARY (One-Stop Dashboard API)
// ============================================

export interface RetentionTopicInfo {
    chapterId: string;
    topicName: string;
    retrievability: number;
    stability: number;
    daysSince: number;
    daysUntilReview: number;
    status: 'mastered' | 'stable' | 'review_soon' | 'critical' | 'forgotten' | 'new';
    confidence: 'high' | 'medium' | 'low' | null;
    lastReviewedDate: string;
}

export interface RetentionSummary {
    avgRetention: number;
    topicsLearned: number;
    criticalCount: number;
    streak: number;
    criticalTopics: RetentionTopicInfo[];
    todaysDueTopics: RetentionTopicInfo[];
    allTopics: RetentionTopicInfo[];
    mostCriticalTopic: RetentionTopicInfo | null;
}

/**
 * Scans ALL tracked topics and calculates live retention stats.
 * This is the single source of truth for the Retention Dashboard.
 */
export function getRetentionSummary(): RetentionSummary {
    const progress = getLearningProgress();
    const stats = getStudentStats();
    const logs = progress.chapterLogs || {};
    const confidenceMap = progress.chapterConfidence || {};

    const allTopics: RetentionTopicInfo[] = [];

    // Iterate over all logged chapters
    Object.entries(logs).forEach(([chapterId, timestamp]) => {
        const srData = getTopicRetention(chapterId);
        const topicName = chapterId
            .split('-')
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ');

        allTopics.push({
            chapterId,
            topicName,
            retrievability: srData.retrievability,
            stability: srData.stability,
            daysSince: srData.daysSince || 0,
            daysUntilReview: srData.daysUntilReview || 0,
            status: srData.status,
            confidence: confidenceMap[chapterId] || null,
            lastReviewedDate: new Date(timestamp).toLocaleDateString('en-IN', {
                day: 'numeric', month: 'short', year: 'numeric'
            })
        });
    });

    // Sort by retrievability (most critical first)
    allTopics.sort((a, b) => a.retrievability - b.retrievability);

    const criticalTopics = allTopics.filter(t => t.retrievability < 0.6);
    const todaysDueTopics = allTopics.filter(t => t.daysUntilReview <= 0 && t.status !== 'new');

    const avgRetention = allTopics.length > 0
        ? allTopics.reduce((sum, t) => sum + t.retrievability, 0) / allTopics.length
        : 0;

    return {
        avgRetention,
        topicsLearned: allTopics.length,
        criticalCount: criticalTopics.length,
        streak: stats?.overallStreak || 0,
        criticalTopics,
        todaysDueTopics,
        allTopics,
        mostCriticalTopic: criticalTopics.length > 0 ? criticalTopics[0] : (allTopics[0] || null),
    };
}

/**
 * Records the result of a retention quiz/survey.
 * Adjusts stability based on actual performance, resets decay clock.
 * 
 * @param chapterId - The chapter tested
 * @param score - Score out of total (0.0 to 1.0)
 */
export function recordRevisionResult(chapterId: string, score: number): void {
    const progress = getLearningProgress();
    const currentStability = progress.chapterStability?.[chapterId] || 2;

    let newStability: number;
    if (score >= 0.9) {
        // Excellent recall — double stability
        newStability = currentStability * 2.2;
    } else if (score >= 0.6) {
        // Decent recall — slight increase
        newStability = currentStability * 1.5;
    } else {
        // Poor recall — reset to initial
        newStability = 1;
    }

    // Update stability and reset the decay clock (new timestamp)
    saveLearningProgress({
        chapterStability: {
            ...(progress.chapterStability || {}),
            [chapterId]: Number(newStability.toFixed(2))
        },
        chapterLogs: {
            ...(progress.chapterLogs || {}),
            [chapterId]: Date.now()
        }
    });
}



// ============================================
// MEDITATION PROGRESS
// ============================================

export function getMeditationProgress(): MeditationProgress {
    return getLearningProgress().meditation;
}

export function saveMeditationProgress(meditation: Partial<MeditationProgress>): void {
    const current = getLearningProgress();
    saveLearningProgress({
        meditation: { ...current.meditation, ...meditation },
    });
}

export function markMeditationDayComplete(level: number, day: number): void {
    const progress = getLearningProgress();
    const key = `${level}-${day}`;
    if (!progress.completedMeditation.includes(key)) {
        // Calculate next day/level
        let nextDay = day + 1;
        let nextLevel = level;
        if (nextDay > 60) {
            nextDay = 1;
            nextLevel = level + 1;
        }

        // Update streak
        const today = new Date().toDateString();
        const lastCompleted = progress.meditation.lastCompleted;
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        let newStreak = progress.meditation.streakDays;

        if (lastCompleted === yesterday) {
            newStreak += 1;
        } else if (lastCompleted !== today) {
            newStreak = 1;
        }

        saveLearningProgress({
            completedMeditation: [...progress.completedMeditation, key],
            meditation: {
                ...progress.meditation,
                currentLevel: nextLevel,
                currentDay: nextDay,
                processIndex: 0,
                streakDays: newStreak,
                lastCompleted: today,
            },
        });
    }
}

// ============================================
// GRAPHOTHERAPY PROGRESS
// ============================================

export function getGraphotherapyProgress(): GraphotherapyProgress {
    return getLearningProgress().graphotherapy;
}

export function saveGraphotherapyProgress(graphotherapy: Partial<GraphotherapyProgress>): void {
    const current = getLearningProgress();
    saveLearningProgress({
        graphotherapy: { ...current.graphotherapy, ...graphotherapy },
    });
}

export function markGraphotherapyDayComplete(level: number, day: number): void {
    const progress = getLearningProgress();
    const key = `${level}-${day}`;
    if (!progress.completedGraphotherapy.includes(key)) {
        let nextDay = day + 1;
        let nextLevel = level;
        if (nextDay > 60) {
            nextDay = 1;
            nextLevel = level + 1;
        }

        const today = new Date().toDateString();
        const lastCompleted = progress.graphotherapy.lastCompleted;
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        let newStreak = progress.graphotherapy.streakDays;

        if (lastCompleted === yesterday) {
            newStreak += 1;
        } else if (lastCompleted !== today) {
            newStreak = 1;
        }

        saveLearningProgress({
            completedGraphotherapy: [...progress.completedGraphotherapy, key],
            graphotherapy: {
                ...progress.graphotherapy,
                currentLevel: nextLevel,
                currentDay: nextDay,
                streakDays: newStreak,
                lastCompleted: today,
            },
        });
    }
}

// ============================================
// RAS PROGRESS
// ============================================

export function getRASProgress(): RASProgress {
    const progress = getLearningProgress();
    return progress.ras || DEFAULT_PROGRESS.ras;
}

export function markRASTopicComplete(topic: string): void {
    const progress = getLearningProgress();
    const currentRAS = progress.ras || DEFAULT_PROGRESS.ras;

    if (!currentRAS.topicsCompleted.includes(topic)) {
        const today = new Date().toDateString();
        const lastCompleted = currentRAS.lastCompleted;
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        let newStreak = currentRAS.streakDays;

        if (lastCompleted === yesterday) {
            newStreak += 1;
        } else if (lastCompleted !== today) {
            newStreak = 1;
        }

        saveLearningProgress({
            ras: {
                ...currentRAS,
                topicsCompleted: [...currentRAS.topicsCompleted, topic],
                streakDays: newStreak > 0 ? newStreak : 1, // Ensure at least 1 if active today
                lastCompleted: today,
            }
        });
    }
}

// ============================================
// ANALYSIS REPORTS
// ============================================

export function getAnalysisReports(): Record<string, AnalysisReport> {
    const stored = safeStorage.getItem(STORAGE_KEYS.ANALYSIS_REPORTS);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch {
            return {};
        }
    }
    return {};
}

export function saveAnalysisReport(report: AnalysisReport): void {
    const reports = getAnalysisReports();
    reports[report.segmentKey] = report;
    safeStorage.setItem(STORAGE_KEYS.ANALYSIS_REPORTS, JSON.stringify(reports));

    // Update stats
    updatePrelimsStats(report);
}

export function getAnalysisReport(segmentKey: string): AnalysisReport | null {
    const reports = getAnalysisReports();
    return reports[segmentKey] || null;
}

export interface StudentStats {
    prelims: {
        avgRecall: number;
        totalSegmentsCompleted: number;
        currentCycle: number;
        currentDay: number;
        lastSessionRecalls: number[];
    };
    meditation: {
        currentLevel: number;
        currentDay: number;
        streakDays: number;
        minutesToday: number;
    };
    graphotherapy: {
        currentLevel: number;
        currentDay: number;
        streakDays: number;
    };
    ras: {
        currentDay: number;
        streakDays: number;
    };
    overallStreak: number;
}

const DEFAULT_STATS: StudentStats = {
    prelims: {
        avgRecall: 0,
        totalSegmentsCompleted: 0,
        currentCycle: 1,
        currentDay: 1,
        lastSessionRecalls: [],
    },
    meditation: {
        currentLevel: 1,
        currentDay: 1,
        streakDays: 0,
        minutesToday: 0,
    },
    graphotherapy: {
        currentLevel: 1,
        currentDay: 1,
        streakDays: 0,
    },
    ras: {
        currentDay: 1,
        streakDays: 0,
    },
    overallStreak: 0,
};

// ============================================
// STUDENT STATS
// ============================================

export function getStudentStats(): StudentStats {
    const stored = safeStorage.getItem(STORAGE_KEYS.STATS);
    if (stored) {
        try {
            return { ...DEFAULT_STATS, ...JSON.parse(stored) };
        } catch {
            return DEFAULT_STATS;
        }
    }

    // Calculate from progress if no stored stats
    return calculateStatsFromProgress();
}


export function savePrelimsSession(session: PrelimsSession): void {
    const progress = getLearningProgress();

    // Update prelims state
    const updates: Partial<LearningProgress> = {
        prelims: session,
        lastActivity: new Date().toISOString()
    };

    saveLearningProgress(updates);

    // Also log study time if segment completed? 
    // For now just saving the session state is enough.
}

export function saveStudentStats(stats: Partial<StudentStats>): void {
    const current = getStudentStats();
    const updated = { ...current, ...stats };
    safeStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(updated));

    // Dispatch for cross-tab sync
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new StorageEvent('storage', {
            key: STORAGE_KEYS.STATS,
            newValue: JSON.stringify(updated),
        }));
    }
}

export function getPrelimsSession(): PrelimsSession | null {
    return getLearningProgress().prelims;
}

function updatePrelimsStats(report: AnalysisReport): void {
    const stats = getStudentStats();
    const reports = getAnalysisReports();

    // Calculate average recall
    const scores = Object.values(reports).map(r => r.recallScore);
    const avgRecall = scores.length > 0
        ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
        : 0;

    // Get last 3 session recalls
    const sortedReports = Object.values(reports)
        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        .slice(0, 3);

    saveStudentStats({
        prelims: {
            ...stats.prelims,
            avgRecall,
            totalSegmentsCompleted: Object.keys(reports).length,
            lastSessionRecalls: sortedReports.map(r => r.recallScore),
        },
    });
}

function calculateStatsFromProgress(): StudentStats {
    const progress = getLearningProgress();
    const reports = getAnalysisReports();
    const ras = progress.ras || DEFAULT_PROGRESS.ras;

    // Calculate prelims stats
    const scores = Object.values(reports).map(r => r.recallScore);
    const avgRecall = scores.length > 0
        ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
        : 0;

    return {
        prelims: {
            avgRecall,
            totalSegmentsCompleted: progress.completedSegments.length,
            currentCycle: progress.prelims?.cycleId || 1,
            currentDay: progress.prelims?.dayId || 1,
            lastSessionRecalls: scores.slice(-3),
        },
        meditation: {
            currentLevel: progress.meditation.currentLevel,
            currentDay: progress.meditation.currentDay,
            streakDays: progress.meditation.streakDays,
            minutesToday: 0,
        },
        graphotherapy: {
            currentLevel: progress.graphotherapy.currentLevel,
            currentDay: progress.graphotherapy.currentDay,
            streakDays: progress.graphotherapy.streakDays,
        },
        ras: {
            currentDay: ras.currentDay,
            streakDays: ras.streakDays,
        },
        overallStreak: Math.max(
            progress.meditation.streakDays,
            progress.graphotherapy.streakDays,
            ras.streakDays
        ),
    };
}

// ============================================
// RESUME POINT
// ============================================

export interface ResumePoint {
    type: 'prelims' | 'meditation' | 'graphotherapy' | null;
    label: string;
    href: string;
    details: string;
}

export function getResumePoint(): ResumePoint {
    const progress = getLearningProgress();

    // Check prelims first (most likely to be in-progress)
    if (progress.prelims && progress.prelims.phase !== 'complete') {
        const { cycleId, dayId, partId, segmentIndex, phase, videoTimestamp } = progress.prelims;
        return {
            type: 'prelims',
            label: `Cycle ${cycleId}, Day ${dayId}, Part ${partId}`,
            href: `/student/batch1/cycle/${cycleId}/day/${dayId}/part/${partId}`,
            details: `Segment ${segmentIndex + 1} • ${phase === 'video' ? `Video at ${Math.floor(videoTimestamp / 60)}:${String(Math.floor(videoTimestamp % 60)).padStart(2, '0')}` : phase}`,
        };
    }

    // Check meditation
    if (progress.meditation.processIndex > 0) {
        const { currentLevel, currentDay, processIndex } = progress.meditation;
        return {
            type: 'meditation',
            label: `Level ${currentLevel}, Day ${currentDay}`,
            href: '/student/meditation',
            details: `Process ${processIndex + 1} in progress`,
        };
    }

    // Default - suggest next activity
    return {
        type: null,
        label: 'Start Learning',
        href: '/student/batch1',
        details: 'Continue your UPSC preparation',
    };
}

export function markSegmentComplete(cycleId: number, dayId: number, partId: number, segmentId: number): void {
    const progress = getLearningProgress();
    const key = `${cycleId}-${dayId}-${partId}-${segmentId}`;

    if (!progress.completedSegments.includes(key)) {
        saveLearningProgress({
            completedSegments: [...progress.completedSegments, key]
        });
    }
}

export function isSegmentComplete(cycleId: number, dayId: number, partId: number, segmentId: number): boolean {
    const progress = getLearningProgress();
    const key = `${cycleId}-${dayId}-${partId}-${segmentId}`;
    return progress.completedSegments.includes(key);
}
