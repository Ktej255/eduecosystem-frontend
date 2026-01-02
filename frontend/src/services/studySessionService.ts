/**
 * Study Session Service
 * 
 * Handles API calls for Pomodoro study sessions including:
 * - Audio explanation analysis
 * - Session progress tracking
 * - Topic content retrieval
 */

import api from '@/lib/api';

export interface StudyExplanationAnalysis {
    success: boolean;
    transcript: string;
    topic_name: string;
    subject: string;
    session_type: string;
    analysis: {
        comprehension_score: number;
        key_concepts: string[];
        missing_concepts: string[];
        clarity_rating: number;
        depth_rating: number;
        strengths: string[];
        improvements: string[];
        summary: string;
    };
    error?: string;
}

export interface SessionProgress {
    sessionId: string;
    topicId: string;
    topicName: string;
    phase: number;
    cycle: number;
    sessionType: string;
    startTime: string;
    endTime?: string;
    audioBlob?: Blob;
    analysis?: StudyExplanationAnalysis;
}

class StudySessionService {
    private baseUrl = '/api/v1/audio';

    /**
     * Analyze a recorded study explanation
     */
    async analyzeExplanation(
        audioBlob: Blob,
        topicName: string,
        subject: string,
        sessionType: string,
        durationMinutes: number,
        expectedConcepts?: string[]
    ): Promise<StudyExplanationAnalysis> {
        const formData = new FormData();
        formData.append('audio', audioBlob, 'explanation.webm');
        formData.append('topic_name', topicName);
        formData.append('subject', subject);
        formData.append('session_type', sessionType);
        formData.append('duration_minutes', durationMinutes.toString());

        if (expectedConcepts && expectedConcepts.length > 0) {
            formData.append('expected_concepts', expectedConcepts.join(','));
        }

        try {
            const response = await api.post(
                `${this.baseUrl}/analyze-study-explanation`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            return response.data;
        } catch (error) {
            console.error('Failed to analyze explanation:', error);
            throw error;
        }
    }

    /**
     * Save session progress to local storage
     */
    saveSessionProgress(progress: SessionProgress): void {
        if (typeof window === 'undefined') return;

        try {
            const key = 'study_session_history';
            const existing = localStorage.getItem(key);
            const history: SessionProgress[] = existing ? JSON.parse(existing) : [];

            // Add new session, keep last 50
            history.unshift(progress);
            if (history.length > 50) {
                history.pop();
            }

            localStorage.setItem(key, JSON.stringify(history));
        } catch (e) {
            console.error('Failed to save session progress:', e);
        }
    }

    /**
     * Get session history from local storage
     */
    getSessionHistory(): SessionProgress[] {
        if (typeof window === 'undefined') return [];

        try {
            const key = 'study_session_history';
            const existing = localStorage.getItem(key);
            return existing ? JSON.parse(existing) : [];
        } catch (e) {
            console.error('Failed to get session history:', e);
            return [];
        }
    }

    /**
     * Get statistics for a specific topic
     */
    getTopicStats(topicId: string): {
        totalSessions: number;
        totalMinutes: number;
        averageScore: number;
        lastStudied?: string;
    } {
        const history = this.getSessionHistory();
        const topicSessions = history.filter(s => s.topicId === topicId);

        if (topicSessions.length === 0) {
            return {
                totalSessions: 0,
                totalMinutes: 0,
                averageScore: 0,
            };
        }

        const totalMinutes = topicSessions.reduce((sum, s) => {
            if (s.startTime && s.endTime) {
                const duration = (new Date(s.endTime).getTime() - new Date(s.startTime).getTime()) / 60000;
                return sum + duration;
            }
            return sum;
        }, 0);

        const scoresWithAnalysis = topicSessions.filter(s => s.analysis?.analysis?.comprehension_score);
        const averageScore = scoresWithAnalysis.length > 0
            ? scoresWithAnalysis.reduce((sum, s) => sum + (s.analysis?.analysis?.comprehension_score || 0), 0) / scoresWithAnalysis.length
            : 0;

        return {
            totalSessions: topicSessions.length,
            totalMinutes: Math.round(totalMinutes),
            averageScore: Math.round(averageScore),
            lastStudied: topicSessions[0]?.startTime,
        };
    }

    /**
     * Get today's study summary
     */
    getTodaySummary(): {
        sessionsCompleted: number;
        totalMinutes: number;
        topicsCovered: string[];
        averageScore: number;
    } {
        const history = this.getSessionHistory();
        const today = new Date().toDateString();

        const todaySessions = history.filter(s =>
            new Date(s.startTime).toDateString() === today
        );

        const topicsCovered = [...new Set(todaySessions.map(s => s.topicName))];

        const totalMinutes = todaySessions.reduce((sum, s) => {
            if (s.startTime && s.endTime) {
                const duration = (new Date(s.endTime).getTime() - new Date(s.startTime).getTime()) / 60000;
                return sum + duration;
            }
            return sum;
        }, 0);

        const scoresWithAnalysis = todaySessions.filter(s => s.analysis?.analysis?.comprehension_score);
        const averageScore = scoresWithAnalysis.length > 0
            ? scoresWithAnalysis.reduce((sum, s) => sum + (s.analysis?.analysis?.comprehension_score || 0), 0) / scoresWithAnalysis.length
            : 0;

        return {
            sessionsCompleted: todaySessions.length,
            totalMinutes: Math.round(totalMinutes),
            topicsCovered,
            averageScore: Math.round(averageScore),
        };
    }
}

// Singleton instance
let instance: StudySessionService | null = null;

export function getStudySessionService(): StudySessionService {
    if (!instance) {
        instance = new StudySessionService();
    }
    return instance;
}

export default StudySessionService;
