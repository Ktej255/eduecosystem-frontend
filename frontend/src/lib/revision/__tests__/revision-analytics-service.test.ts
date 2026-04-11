import { fetchTopicPerformance } from '../revision-analytics-service';

// Mock global fetch
// @ts-ignore
global.fetch = jest.fn();

describe('Revision Analytics Service', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('fetchTopicPerformance error handling', () => {
        it('returns an empty array when the API response is not ok', async () => {
            // @ts-ignore
            (global.fetch as jest.Mock).mockResolvedValue({
                ok: false,
                status: 500
            });

            const result = await fetchTopicPerformance();

            expect(result).toEqual([]);
            expect(console.error).toHaveBeenCalledWith(
                "Error fetching topic performance from backend:",
                expect.any(Error)
            );
        });

        it('returns an empty array when a network error occurs', async () => {
            // @ts-ignore
            (global.fetch as jest.Mock).mockRejectedValue(new Error('Network failure'));

            const result = await fetchTopicPerformance();

            expect(result).toEqual([]);
            expect(console.error).toHaveBeenCalledWith(
                "Error fetching topic performance from backend:",
                expect.any(Error)
            );
        });

        it('successfully fetches and maps topic performance data', async () => {
            const mockData = {
                hierarchy: [
                    {
                        topic_name: 'Photosynthesis',
                        metrics: {
                            sessions_completed: 5,
                            ai_recall_score_avg: 85,
                            last_session_date: '2024-03-20',
                            mastery_percentage: 90
                        }
                    }
                ]
            };

            // @ts-ignore
            (global.fetch as jest.Mock).mockResolvedValue({
                ok: true,
                json: async () => mockData
            });

            const result = await fetchTopicPerformance();

            expect(result).toHaveLength(1);
            expect(result[0].topicName).toBe('Photosynthesis');
            expect(result[0].strength).toBe('strong');
        });
    });
});
