import api from '@/lib/api';

export interface StudySessionStats {
    overall: {
        total_hours: number;
        study_sessions: number;
        explanations: number;
        revisions: number;
        average_comprehension: number;
    };
    subjects: {
        name: string;
        hours: number;
    }[];
}

export interface SessionRecord {
    email: string;
    session_type: string;
    topic_id?: string;
    topic_name?: string;
    subject_id?: string;
    subject_name?: string;
    start_time: string;
    end_time: string;
    duration_seconds: number;
    cycle_number?: number;
    phase_number?: number;
    audio?: Blob;
}

class StudySessionService {
    private baseUrl = '/study';

    /**
     * Record a study session to the backend
     */
    async recordSession(record: SessionRecord): Promise<any> {
        const formData = new FormData();
        formData.append('email', record.email);
        formData.append('session_type', record.session_type);
        if (record.topic_id) formData.append('topic_id', record.topic_id);
        if (record.topic_name) formData.append('topic_name', record.topic_name);
        if (record.subject_id) formData.append('subject_id', record.subject_id);
        if (record.subject_name) formData.append('subject_name', record.subject_name);
        formData.append('start_time', record.start_time);
        formData.append('end_time', record.end_time);
        formData.append('duration_seconds', record.duration_seconds.toString());
        formData.append('cycle_number', (record.cycle_number || 1).toString());
        formData.append('phase_number', (record.phase_number || 1).toString());

        if (record.audio) {
            formData.append('audio', record.audio, 'explanation.webm');
        }

        try {
            const response = await api.post(`${this.baseUrl}/sessions/record`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Failed to record session:', error);
            throw error;
        }
    }

    /**
     * Get study statistics for a user
     */
    async getStats(email: string): Promise<StudySessionStats> {
        try {
            const response = await api.get(`${this.baseUrl}/stats/${email}`);
            return response.data;
        } catch (error) {
            console.error('Failed to get study stats:', error);
            throw error;
        }
    }

    /**
     * Get session history for a user
     */
    async getHistory(email: string, limit: number = 50): Promise<any[]> {
        try {
            const response = await api.get(`${this.baseUrl}/history/${email}?limit=${limit}`);
            return response.data;
        } catch (error) {
            console.error('Failed to get session history:', error);
            throw error;
        }
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
