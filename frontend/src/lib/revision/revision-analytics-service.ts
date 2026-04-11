/**
 * Revision Analytics Service
 * Aggregates user study cycle data for Deep Reports dashboard.
 * Pulls from localStorage and prepares data for daily, weekly, 15-day, and monthly views.
 */

import { TreeBranch, MOCK_TREE_DATA } from '../../components/revision/immersive/tree-data';
export interface TopicPerformanceResult {
    topicName: string;
    totalSessions: number;
    avgRecallScore: number;
    lastSessionDate: string;
    masteryLevel: number;
    strength: "strong" | "average" | "weak";
}

export interface CycleSession {
    id: string;
    examId: string;
    subjectId: string;
    topicName: string;
    topicId: number;
    startTime: string; // ISO date string
    endTime: string;
    durationMinutes: number;
    phases: {
        video: { completed: boolean; durationSeconds: number };
        recall: { completed: boolean; transcript: string; aiScore?: number };
        mcq: { completed: boolean; correctCount: number; totalCount: number };
    };
    level: 'beginner' | 'intermediate' | 'advanced';
    synced?: boolean;
}

export interface TopicPerformance {
    topicName: string;
    totalSessions: number;
    avgRecallScore: number;
    avgMcqAccuracy: number;
    lastPracticed: string;
    trend: 'improving' | 'stable' | 'declining';
}

export interface RevisionAnalytics {
    totalFocusHours: number;
    totalCycles: number;
    avgRecallRetention: number;
    strongTopics: TopicPerformance[];
    weakTopics: TopicPerformance[];
    dailySessions: CycleSession[];
    weeklySessions: CycleSession[];
}

const STORAGE_KEY = 'revision_cycle_sessions';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function saveCycleSession(session: CycleSession): Promise<void> {
    // 1. Save locally first (Offline persistence)
    const sessions = getAllSessions();
    sessions.push({ ...session, synced: false });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));

    // 2. Attempt sync to backend
    try {
        await syncCycleToBackend(session);
        // Mark as synced if successful
        markSessionSynced(session.id);
    } catch (error) {
        console.error("Failed to sync cycle session:", error);
        // Will remain synced: false and retry on next load/action
    }
}

async function syncCycleToBackend(session: CycleSession) {
    const payload = {
        topic_id: session.topicId,
        cycle_type: `${session.level}_${session.durationMinutes}m`,
        duration_minutes: session.durationMinutes,
        recall_score: session.phases.recall.aiScore || 0,
        mcq_score: session.phases.mcq.totalCount > 0
            ? (session.phases.mcq.correctCount / session.phases.mcq.totalCount) * 100
            : 0,
        verbal_transcript: session.phases.recall.transcript
    };

    const token = localStorage.getItem('token');

    // Use retention v1 endpoint
    const response = await fetch(`${API_URL}/retention/cycle`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error(`Backend Sync Failed: ${response.statusText}`);
    }

    return await response.json();
}

function markSessionSynced(id: string) {
    const sessions = getAllSessions();
    const index = sessions.findIndex(s => s.id === id);
    if (index !== -1) {
        sessions[index].synced = true;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
    }
}

export function getAllSessions(): CycleSession[] {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
}

export function getSessionsInRange(days: number): CycleSession[] {
    const sessions = getAllSessions();
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    return sessions.filter(s => new Date(s.startTime) >= cutoff);
}

export function getDailyAnalytics(): RevisionAnalytics {
    return computeAnalytics(getSessionsInRange(1));
}

export function getWeeklyAnalytics(): RevisionAnalytics {
    return computeAnalytics(getSessionsInRange(7));
}

export function get15DayAnalytics(): RevisionAnalytics {
    return computeAnalytics(getSessionsInRange(15));
}

export function getMonthlyAnalytics(): RevisionAnalytics {
    return computeAnalytics(getSessionsInRange(30));
}

function computeAnalytics(sessions: CycleSession[]): RevisionAnalytics {
    const totalFocusMinutes = sessions.reduce((sum, s) => sum + s.durationMinutes, 0);
    const totalCycles = sessions.length;

    // Calculate average recall retention
    const recallScores = sessions
        .map(s => s.phases.recall.aiScore)
        .filter((score): score is number => score !== undefined);
    const avgRecallRetention = recallScores.length > 0
        ? recallScores.reduce((a, b) => a + b, 0) / recallScores.length
        : 0;

    // Group by topic for performance analysis
    const topicMap = new Map<string, { scores: number[]; mcqAccuracies: number[]; lastPracticed: string }>();
    for (const session of sessions) {
        const existing = topicMap.get(session.topicName) || { scores: [], mcqAccuracies: [], lastPracticed: session.startTime };
        if (session.phases.recall.aiScore) {
            existing.scores.push(session.phases.recall.aiScore);
        }
        if (session.phases.mcq.totalCount > 0) {
            existing.mcqAccuracies.push((session.phases.mcq.correctCount / session.phases.mcq.totalCount) * 100);
        }
        if (new Date(session.startTime) > new Date(existing.lastPracticed)) {
            existing.lastPracticed = session.startTime;
        }
        topicMap.set(session.topicName, existing);
    }

    const allTopics: TopicPerformance[] = Array.from(topicMap.entries()).map(([topicName, data]) => {
        const avgRecallScore = data.scores.length > 0 ? data.scores.reduce((a, b) => a + b, 0) / data.scores.length : 0;
        const avgMcqAccuracy = data.mcqAccuracies.length > 0 ? data.mcqAccuracies.reduce((a, b) => a + b, 0) / data.mcqAccuracies.length : 0;
        return {
            topicName,
            totalSessions: data.scores.length,
            avgRecallScore,
            avgMcqAccuracy,
            lastPracticed: data.lastPracticed,
            trend: determineTrend(data.scores)
        };
    });

    // Sort to find strong and weak topics
    const sortedByPerformance = [...allTopics].sort((a, b) => (b.avgRecallScore + b.avgMcqAccuracy) - (a.avgRecallScore + a.avgMcqAccuracy));
    const strongTopics = sortedByPerformance.slice(0, 3);
    const weakTopics = sortedByPerformance.slice(-3).reverse();

    return {
        totalFocusHours: parseFloat((totalFocusMinutes / 60).toFixed(1)),
        totalCycles,
        avgRecallRetention: parseFloat(avgRecallRetention.toFixed(1)),
        strongTopics,
        weakTopics,
        dailySessions: sessions.filter(s => isToday(new Date(s.startTime))),
        weeklySessions: sessions
    };
}

function determineTrend(scores: number[]): 'improving' | 'stable' | 'declining' {
    if (scores.length < 2) return 'stable';
    const recent = scores.slice(-3);
    const older = scores.slice(0, -3);
    if (older.length === 0) return 'stable';

    const recentAvg = recent.reduce((a, b) => a + b, 0) / recent.length;
    const olderAvg = older.reduce((a, b) => a + b, 0) / older.length;

    if (recentAvg > olderAvg + 5) return 'improving';
    if (recentAvg < olderAvg - 5) return 'declining';
    return 'stable';
}

function isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
}

export async function fetchKnowledgeTree(): Promise<TreeBranch[]> {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

    try {
        // Redirect to new Anti-Gravity Mastery API
        const response = await fetch(`${API_URL}/antigravity/reports/mastery-hierarchy`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token}` // Auth optional for now as per dev setup
            }
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const rootData = await response.json();

        // Transform MasteryNode (nested) to TreeBranch[] (flat branches)
        // We'll treat each 'Module' as a Branch for the 3D Tree
        const branches: TreeBranch[] = [];

        if (rootData.children) {
            rootData.children.forEach((course: any) => {
                if (course.children) {
                    course.children.forEach((module: any) => {
                        branches.push({
                            id: module.name,
                            subjectId: course.name,
                            subjectName: `${course.name}: ${module.name}`,
                            leaves: (module.children || []).map((topic: any) => ({
                                id: topic.name,
                                topicId: 0, // Not strictly needed for visual
                                topicName: topic.name,
                                subjectId: course.name,
                                retentionScore: topic.retention * 100,
                                lastReviewed: new Date(),
                                status: topic.retention >= 0.8 ? 'blooming' : (topic.retention >= 0.5 ? 'healthy' : 'withered')
                            }))
                        });
                    });
                }
            });
        }

        return branches.length > 0 ? branches : MOCK_TREE_DATA;
    } catch (error) {
        console.error('Failed to fetch knowledge tree from Anti-Gravity API:', error);
        return MOCK_TREE_DATA;
    }
}

export interface BackendTopicPerformanceNode {
    topic_name: string;
    metrics: {
        sessions_completed: number;
        ai_recall_score_avg: number;
        last_session_date: string;
        mastery_percentage: number;
    };
}

export async function fetchTopicPerformance(): Promise<TopicPerformanceResult[]> {
    try {
        const response = await fetch(`${API_URL}/antigravity/reports/topic-performance`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();

        return data.hierarchy.map((node: BackendTopicPerformanceNode) => ({
            topicName: node.topic_name,
            totalSessions: node.metrics.sessions_completed,
            avgRecallScore: node.metrics.ai_recall_score_avg,
            lastSessionDate: node.metrics.last_session_date,
            masteryLevel: node.metrics.mastery_percentage,
            strength: node.metrics.mastery_percentage > 80 ? 'strong' : node.metrics.mastery_percentage > 50 ? 'average' : 'weak'
        }));

    } catch (error) {
        console.error("Error fetching topic performance from backend:", error);
        // Fallback to local calculation for MVP compatibility
        return [];
    }
}
