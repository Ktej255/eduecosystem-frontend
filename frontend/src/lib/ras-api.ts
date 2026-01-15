// import { API_BASE_URL } from "@/config"; // Commenting out as it seems missing, and we are using localStorage for now.
const API_BASE_URL = "http://localhost:8000/api/v1"; // Fallback

export interface RASTestResult {
    id?: number;
    testId: string; // e.g., "RAS_2024_PRELIMS"
    totalQuestions: number;
    correctCount: number;
    incorrectCount: number;
    unansweredCount: number;
    score: number;
    timeSpentSeconds: number;
    timestamp: string;
    subjectBreakdown?: {
        [subject: string]: {
            total: number;
            correct: number;
            incorrect: number;
        }
    };
}

export const RASSessionService = {
    async submitTestResult(result: RASTestResult): Promise<void> {
        try {
            const token = localStorage.getItem('token');
            if (!token) return; // Fail silently or handle error

            // In a real implementation, this would POST to the backend
            // const res = await fetch(`${API_BASE_URL}/ras/test-results`, {
            //     method: 'POST',
            //     headers: { 
            //         'Content-Type': 'application/json',
            //         'Authorization': `Bearer ${token}`
            //     },
            //     body: JSON.stringify(result)
            // });

            // For now, since we might not have the backend ready, we can simulate persistence 
            // or actually implement the fetch if the endpoint is generic. 
            // Given the constraints, I'll implement a localStorage fallback for immediate demo
            // while preparing the structure for the API.

            const existing = JSON.parse(localStorage.getItem('ras_test_results') || '[]');
            existing.push({ ...result, id: Date.now() });
            localStorage.setItem('ras_test_results', JSON.stringify(existing));

            console.log("RAS Result saved locally:", result);

        } catch (error) {
            console.error("Failed to submit RAS result:", error);
            throw error;
        }
    },

    async getTestResults(): Promise<RASTestResult[]> {
        // LocalStorage fallback for now
        const local = JSON.parse(localStorage.getItem('ras_test_results') || '[]');
        return local.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    }
};
