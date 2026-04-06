export type HistorySectionStatus = 'not-started' | 'in-progress' | 'completed';

export interface ModernHistoryProgress {
    readSection: HistorySectionStatus;
    flashcards: HistorySectionStatus;
    drill: HistorySectionStatus;
    l1: HistorySectionStatus;
    l2: HistorySectionStatus;
    l3: HistorySectionStatus;
    lastVisited?: string;
}

const STORE_KEY = 'modern_history_spectrum_progress';

const SECTION_KEYS: (keyof ModernHistoryProgress)[] = [
    'readSection', 'flashcards', 'drill', 'l1', 'l2', 'l3'
];

function emptyProgress(): Record<number, ModernHistoryProgress> {
    return {};
}

function defaultChapterProgress(): ModernHistoryProgress {
    return {
        readSection: 'not-started',
        flashcards: 'not-started',
        drill: 'not-started',
        l1: 'not-started',
        l2: 'not-started',
        l3: 'not-started',
    };
}

export function getSpectrumProgress(): Record<number, ModernHistoryProgress> {
    if (typeof window === 'undefined') return emptyProgress();
    try {
        const raw = localStorage.getItem(STORE_KEY);
        if (raw) return JSON.parse(raw);
        return emptyProgress();
    } catch {
        return emptyProgress();
    }
}

export function saveSpectrumProgress(data: Record<number, ModernHistoryProgress>): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

export function getSpectrumChapterProgress(chapterId: number): ModernHistoryProgress | undefined {
    return getSpectrumProgress()[chapterId];
}

export function updateSpectrumChapterSection(
    chapterId: number,
    section: keyof ModernHistoryProgress,
    status: HistorySectionStatus
): void {
    const data = getSpectrumProgress();
    if (!data[chapterId]) {
        data[chapterId] = defaultChapterProgress();
    }
    data[chapterId][section] = status;
    data[chapterId].lastVisited = new Date().toISOString();
    saveSpectrumProgress(data);
}

export function getSpectrumStats(totalChapters: number) {
    const progress = getSpectrumProgress();
    let mastered = 0;
    let started = 0;

    Object.values(progress).forEach((p) => {
        const allDone = SECTION_KEYS.every((k) => p[k] === 'completed');
        const anyStarted = SECTION_KEYS.some((k) => p[k] !== 'not-started');
        if (allDone) mastered++;
        if (anyStarted) started++;
    });

    return {
        mastered,
        started,
        total: totalChapters,
        percentage: Math.round((started / Math.max(totalChapters, 1)) * 100),
        masteryPercentage: Math.round((mastered / Math.max(totalChapters, 1)) * 100),
    };
}

export function isSpectrumChapterMastered(chapterId: number): boolean {
    const p = getSpectrumChapterProgress(chapterId);
    if (!p) return false;
    return SECTION_KEYS.every((k) => p[k] === 'completed');
}

export function isSpectrumChapterStarted(chapterId: number): boolean {
    const p = getSpectrumChapterProgress(chapterId);
    if (!p) return false;
    return SECTION_KEYS.some((k) => p[k] !== 'not-started');
}
