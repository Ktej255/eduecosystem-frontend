import { getHistoryEraProgress, HistoryEraProgress } from '../history-era-store';

describe('getHistoryEraProgress', () => {
    beforeEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
    });

    it('returns empty progress when no data in localStorage', () => {
        const result = getHistoryEraProgress();
        expect(result).toEqual({ ancient: {}, medieval: {}, modern: {} });
    });

    it('returns parsed data when valid JSON exists in STORE_KEY', () => {
        const mockData: HistoryEraProgress = {
            ancient: {
                1: {
                    readSection: 'completed',
                    flashcards: 'not-started',
                    drill: 'not-started',
                    l1: 'not-started',
                    l2: 'not-started',
                    l3: 'not-started',
                }
            },
            medieval: {},
            modern: {}
        };
        localStorage.setItem('history_era_progress', JSON.stringify(mockData));

        const result = getHistoryEraProgress();
        expect(result).toEqual(mockData);
    });

    it('migrates legacy ancient data when STORE_KEY is empty', () => {
        localStorage.setItem('ancient_27_progress', JSON.stringify({
            '1': { readSection: 'completed', flashcards: 'in-progress' }
        }));

        const result = getHistoryEraProgress();
        expect(result.ancient[1].readSection).toBe('completed');
        expect(result.ancient[1].flashcards).toBe('in-progress');
        expect(result.ancient[1].drill).toBe('not-started'); // defaults applied
        expect(result.medieval).toEqual({});
        expect(result.modern).toEqual({});
    });

    it('returns migrated legacy data on JSON parse error in STORE_KEY', () => {
        // Corrupt main store
        localStorage.setItem('history_era_progress', 'invalid-json');

        // Setup legacy data
        localStorage.setItem('ancient_27_progress', JSON.stringify({
            '2': { readSection: 'completed', l1: 'completed' }
        }));

        const result = getHistoryEraProgress();
        expect(result.ancient[2].readSection).toBe('completed');
        expect(result.ancient[2].l1).toBe('completed');
        expect(result.ancient[2].l2).toBe('not-started');
    });

    it('handles JSON parse error in STORE_KEY when legacy data is also missing', () => {
        localStorage.setItem('history_era_progress', 'invalid-json');

        const result = getHistoryEraProgress();
        expect(result).toEqual({ ancient: {}, medieval: {}, modern: {} });
    });

    it('handles JSON parse error in STORE_KEY and legacy data', () => {
        localStorage.setItem('history_era_progress', 'invalid-json');
        localStorage.setItem('ancient_27_progress', 'invalid-json-too');

        const result = getHistoryEraProgress();
        expect(result).toEqual({ ancient: {}, medieval: {}, modern: {} });
    });
});
