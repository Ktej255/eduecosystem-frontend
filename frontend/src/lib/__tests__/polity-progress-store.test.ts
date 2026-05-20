import { markChapterComplete, getProgressStore } from '../polity-progress-store';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Mock fetch for background sync
global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve({})
})) as jest.Mock;

describe('polity-progress-store', () => {
  beforeEach(() => {
    localStorageMock.clear();
    jest.clearAllMocks();
  });

  describe('markChapterComplete', () => {
    it('should add a new chapter to the store when it does not exist', () => {
      const chapterId = 1;
      const subtopics = ['sub1', 'sub2'];

      markChapterComplete(chapterId, subtopics);

      const store = getProgressStore();
      expect(store.chapters[chapterId]).toBeDefined();
      expect(store.chapters[chapterId].completed).toBe(true);
      expect(store.chapters[chapterId].subtopicsCompleted).toEqual(subtopics);
      expect(store.totalChaptersCompleted).toBe(1);
    });

    it('should update an existing chapter and append new subtopics uniquely', () => {
      const chapterId = 1;

      // First completion
      markChapterComplete(chapterId, ['sub1']);

      // Second completion with overlap
      markChapterComplete(chapterId, ['sub1', 'sub2']);

      const store = getProgressStore();
      expect(store.chapters[chapterId].completed).toBe(true);
      expect(store.chapters[chapterId].subtopicsCompleted).toEqual(['sub1', 'sub2']);
      // Should not increment totalChaptersCompleted again
      expect(store.totalChaptersCompleted).toBe(1);
    });

    it('should handle missing subtopics argument by defaulting to empty array', () => {
      const chapterId = 2;

      markChapterComplete(chapterId);

      const store = getProgressStore();
      expect(store.chapters[chapterId].completed).toBe(true);
      expect(store.chapters[chapterId].subtopicsCompleted).toEqual([]);
    });
  });
});
