// Unified History Era Progress Store
// Single localStorage key: 'history_era_progress'
// Covers all 3 eras: ancient (27), medieval (20), modern (30)
// Migrates from legacy 'ancient_27_progress' on first load

export type HistorySectionStatus = 'not-started' | 'in-progress' | 'completed';

export interface HistoryChapterProgress {
    readSection: HistorySectionStatus;
    flashcards: HistorySectionStatus;
    drill: HistorySectionStatus;
    l1: HistorySectionStatus;
    l2: HistorySectionStatus;
    l3: HistorySectionStatus;
    lastVisited?: string;
}

export type HistoryEra = 'ancient' | 'medieval' | 'modern';

export interface HistoryEraProgress {
    ancient: Record<number, HistoryChapterProgress>;
    medieval: Record<number, HistoryChapterProgress>;
    modern: Record<number, HistoryChapterProgress>;
}

const STORE_KEY = 'history_era_progress';
const LEGACY_ANCIENT_KEY = 'ancient_27_progress';

const SECTION_KEYS: (keyof HistoryChapterProgress)[] = [
    'readSection', 'flashcards', 'drill', 'l1', 'l2', 'l3'
];

function emptyProgress(): HistoryEraProgress {
    return { ancient: {}, medieval: {}, modern: {} };
}

function defaultChapterProgress(): HistoryChapterProgress {
    return {
        readSection: 'not-started',
        flashcards: 'not-started',
        drill: 'not-started',
        l1: 'not-started',
        l2: 'not-started',
        l3: 'not-started',
    };
}

// ─── Core Read/Write ──────────────────────────────────────────────────────────

export function getHistoryEraProgress(): HistoryEraProgress {
    if (typeof window === 'undefined') return emptyProgress();
    try {
        const raw = localStorage.getItem(STORE_KEY);
        if (raw) return JSON.parse(raw) as HistoryEraProgress;
        return migrateLegacyAncient();
    } catch {
        return emptyProgress();
    }
}

export function saveHistoryEraProgress(data: HistoryEraProgress): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

export function getEraChapters(era: HistoryEra): Record<number, HistoryChapterProgress> {
    return getHistoryEraProgress()[era] ?? {};
}

export function getEraChapterProgress(era: HistoryEra, chapterId: number): HistoryChapterProgress | undefined {
    return getEraChapters(era)[chapterId];
}

export function updateEraChapterSection(
    era: HistoryEra,
    chapterId: number,
    section: keyof HistoryChapterProgress,
    status: HistorySectionStatus
): void {
    const data = getHistoryEraProgress();
    if (!data[era][chapterId]) {
        data[era][chapterId] = defaultChapterProgress();
    }
    (data[era][chapterId] as any)[section] = status;
    data[era][chapterId].lastVisited = new Date().toISOString();
    saveHistoryEraProgress(data);
}

// ─── Stats ────────────────────────────────────────────────────────────────────

export function getEraProgressStats(era: HistoryEra, totalChapters: number) {
    const progress = getEraChapters(era);
    let mastered = 0;
    let started = 0;

    Object.values(progress).forEach((p) => {
        const allDone = SECTION_KEYS.every((k) => (p as any)[k] === 'completed');
        const anyStarted = SECTION_KEYS.some((k) => (p as any)[k] !== 'not-started');
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

export function isEraChapterMastered(era: HistoryEra, chapterId: number): boolean {
    const p = getEraChapterProgress(era, chapterId);
    if (!p) return false;
    return SECTION_KEYS.every((k) => (p as any)[k] === 'completed');
}

export function isEraChapterStarted(era: HistoryEra, chapterId: number): boolean {
    const p = getEraChapterProgress(era, chapterId);
    if (!p) return false;
    return SECTION_KEYS.some((k) => (p as any)[k] !== 'not-started');
}

// ─── Legacy Migration ─────────────────────────────────────────────────────────

function migrateLegacyAncient(): HistoryEraProgress {
    const result = emptyProgress();
    try {
        const legacy = localStorage.getItem(LEGACY_ANCIENT_KEY);
        if (legacy) {
            const parsed = JSON.parse(legacy) as Record<string, any>;
            Object.entries(parsed).forEach(([id, p]) => {
                result.ancient[Number(id)] = {
                    readSection: p.readSection ?? 'not-started',
                    flashcards: p.flashcards ?? 'not-started',
                    drill: p.drill ?? 'not-started',
                    l1: p.l1 ?? 'not-started',
                    l2: p.l2 ?? 'not-started',
                    l3: p.l3 ?? 'not-started',
                    lastVisited: p.lastVisited,
                };
            });
        }
    } catch { /* ignore */ }
    saveHistoryEraProgress(result);
    return result;
}
