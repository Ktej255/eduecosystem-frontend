import axios from 'axios';

let _baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://a7z4kjysmp.us-east-1.awsapprunner.com";
_baseUrl = _baseUrl.replace(/\/$/, "");
const API_BASE = _baseUrl.endsWith("/api/v1") ? _baseUrl : `${_baseUrl}/api/v1`;

export interface SegmentData {
    id: number;
    title: string;
    key_points: string;
    video_url?: string;
    youtube_url?: string;
    content_type?: 'video' | 'pdf' | 'youtube';
    pdf_files?: { url: string; name: string; order: number }[];
    duration: string;
    transcription_status?: string;
}

export interface DayContentResponse {
    cycle_id: number;
    day_number: number;
    part_number: number;
    segments: SegmentData[];
}

const batch1Service = {
    // Get content for a specific part (Morning/Evening)
    getPartContent: async (cycleId: number, day: number, part: number): Promise<DayContentResponse> => {
        const response = await axios.get(`${API_BASE}/batch1/cycle/${cycleId}/day/${day}/part/${part}`);
        return response.data;
    },

    // Save segment metadata and/or upload video
    saveSegment: async (
        cycleId: number,
        day: number,
        part: number,
        segment: number,
        title: string,
        keyPoints: string,
        videoFile?: File
    ) => {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('key_points', keyPoints);
        if (videoFile) {
            formData.append('video', videoFile);
        }

        const response = await axios.post(
            `${API_BASE}/batch1/cycle/${cycleId}/day/${day}/part/${part}/segment/${segment}`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        return response.data;
    },

    // Check transcription status
    getTranscriptionStatus: async (segmentKey: string) => {
        const response = await axios.get(`${API_BASE}/batch1/transcription-status/${segmentKey}`);
        return response.data;
    },

    // Generate AI Quiz for a segment
    generateQuiz: async (segmentKey: string) => {
        const response = await axios.post(`${API_BASE}/batch1/generate-quiz/${segmentKey}`);
        return response.data;
    },

    // Submit Quiz Result
    submitQuizResult: async (data: { segment_key: string, score: number, total_questions: number }) => {
        const response = await axios.post(`${API_BASE}/batch1/submit-quiz-result`, data);
        return response.data;
    }
};

export default batch1Service;
