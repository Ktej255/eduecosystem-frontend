// ─────────────────────────────────────────────────────────────────────────────
// Geography Progress Store — @/lib/geography-store.ts
// Single localStorage key: 'geography_store_v2'
// Migrates from legacy 'geography_progress' (object) on first load
// Covers all 5 branches: Geomorphology, Climatology, Oceanography,
//                        Resource Geography, Indian Geography
// Backend: POST/GET /api/v1/student/progress/geography/mastered
// ─────────────────────────────────────────────────────────────────────────────

// ─── Types ───────────────────────────────────────────────────────────────────

export type GeoSectionStatus = 'not-started' | 'in-progress' | 'completed';

export type GeoBranch =
    | 'Geomorphology'
    | 'Climatology'
    | 'Oceanography'
    | 'Resource Geography'
    | 'Indian Geography'
    | 'Miscellaneous';

export interface GeoTopicProgress {
    readSection: GeoSectionStatus;
    flashcards: GeoSectionStatus;
    mcqs: GeoSectionStatus;
    lastVisited?: string;
    /** Total time spent in seconds */
    timeSpentSeconds?: number;
}

export interface GeoStoreState {
    /** Keyed by topicId (number → string JSON key) */
    topics: Record<number, GeoTopicProgress>;
    lastSyncedAt?: string;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const STORE_KEY = 'geography_store_v2';
const LEGACY_KEY_1 = 'geography_progress'; // GeographyUnifiedDashboard used this
const LEGACY_KEY_2 = 'geography-progress'; // GeographyDashboard (batch1) used this

const GEO_SECTIONS: (keyof GeoTopicProgress)[] = ['readSection', 'flashcards', 'mcqs'];

const API_BASE =
    typeof window !== 'undefined'
        ? process.env.NEXT_PUBLIC_API_URL || '/api/v1'
        : '/api/v1';

// ─── Empty Defaults ──────────────────────────────────────────────────────────

function emptyStore(): GeoStoreState {
    return { topics: {} };
}

function defaultTopicProgress(): GeoTopicProgress {
    return {
        readSection: 'not-started',
        flashcards: 'not-started',
        mcqs: 'not-started',
    };
}

// ─── Core Read / Write ───────────────────────────────────────────────────────

export function getGeographyStore(): GeoStoreState {
    if (typeof window === 'undefined') return emptyStore();
    try {
        const raw = localStorage.getItem(STORE_KEY);
        if (raw) return JSON.parse(raw) as GeoStoreState;
        return migrateLegacy();
    } catch {
        return emptyStore();
    }
}

export function saveGeographyStore(data: GeoStoreState): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

export function getTopicProgress(topicId: number): GeoTopicProgress | undefined {
    return getGeographyStore().topics[topicId];
}

// ─── Write — Section Update ───────────────────────────────────────────────────

export function updateGeoTopicSection(
    topicId: number,
    section: keyof GeoTopicProgress,
    value: GeoSectionStatus | number | string
): void {
    const data = getGeographyStore();
    if (!data.topics[topicId]) {
        data.topics[topicId] = defaultTopicProgress();
    }
    (data.topics[topicId] as any)[section] = value;
    data.topics[topicId].lastVisited = new Date().toISOString();
    saveGeographyStore(data);

    // Async backend sync — fire-and-forget
    const isMastered = isTopicMastered(topicId);
    syncTopicToBackend(topicId, isMastered).catch(() => {
        // Silently fail — progress is already saved to localStorage
    });
}

export function addTimeSpent(topicId: number, seconds: number): void {
    const data = getGeographyStore();
    if (!data.topics[topicId]) {
        data.topics[topicId] = defaultTopicProgress();
    }
    data.topics[topicId].timeSpentSeconds =
        (data.topics[topicId].timeSpentSeconds || 0) + seconds;
    saveGeographyStore(data);
}

// ─── Query Helpers ───────────────────────────────────────────────────────────

export function isTopicMastered(topicId: number): boolean {
    const p = getTopicProgress(topicId);
    if (!p) return false;
    return GEO_SECTIONS.every((k) => (p as any)[k] === 'completed');
}

export function isTopicStarted(topicId: number): boolean {
    const p = getTopicProgress(topicId);
    if (!p) return false;
    return GEO_SECTIONS.some((k) => (p as any)[k] !== 'not-started');
}

export function getMasteredTopicIds(): number[] {
    const store = getGeographyStore();
    return Object.entries(store.topics)
        .filter(([, p]) => GEO_SECTIONS.every((k) => (p as any)[k] === 'completed'))
        .map(([id]) => Number(id));
}

// ─── Branch Stats ─────────────────────────────────────────────────────────────

export interface GeoBranchStats {
    branch: GeoBranch;
    total: number;
    mastered: number;
    started: number;
    masteryPercentage: number;
    startedPercentage: number;
}

/**
 * Call with the GEOGRAPHY_REGISTRY array to compute per-branch mastery.
 * Kept side-effect free — no imports from component land.
 */
export function getBranchStats(
    registry: Array<{ id: number; branch: GeoBranch }>
): GeoBranchStats[] {
    const branches: GeoBranch[] = [
        'Geomorphology',
        'Climatology',
        'Oceanography',
        'Resource Geography',
        'Indian Geography',
    ];

    return branches.map((branch) => {
        const branchTopics = registry.filter((t) => t.branch === branch);
        const total = branchTopics.length;
        let mastered = 0;
        let started = 0;

        branchTopics.forEach((t) => {
            if (isTopicMastered(t.id)) mastered++;
            else if (isTopicStarted(t.id)) started++;
        });

        return {
            branch,
            total,
            mastered,
            started,
            masteryPercentage: total > 0 ? Math.round((mastered / total) * 100) : 0,
            startedPercentage: total > 0 ? Math.round(((mastered + started) / total) * 100) : 0,
        };
    });
}

export function getOverallStats(registry: Array<{ id: number; branch: GeoBranch }>) {
    const total = registry.length;
    const mastered = getMasteredTopicIds().filter((id) =>
        registry.some((t) => t.id === id)
    ).length;
    const started = registry.filter((t) => !isTopicMastered(t.id) && isTopicStarted(t.id)).length;

    return {
        total,
        mastered,
        started,
        masteryPercentage: total > 0 ? Math.round((mastered / total) * 100) : 0,
        startedPercentage: total > 0 ? Math.round(((mastered + started) / total) * 100) : 0,
    };
}

// ─── Backend Sync ─────────────────────────────────────────────────────────────

/**
 * Syncs a single topic's mastery state to the backend.
 * Uses the existing POST /progress/geography/mastered endpoint.
 */
async function syncTopicToBackend(topicId: number, isMastered: boolean): Promise<void> {
    const token =
        typeof window !== 'undefined'
            ? localStorage.getItem('access_token') || sessionStorage.getItem('access_token')
            : null;
    if (!token) return;

    await fetch(`${API_BASE}/student/progress/geography/mastered`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            locationId: String(topicId),
            isMastered,
        }),
    });
}

/**
 * On app init: fetch all mastered topic IDs from backend and hydrate the store.
 * Safe to call multiple times — merges server state with local state.
 */
export async function hydrateFromBackend(): Promise<void> {
    const token =
        typeof window !== 'undefined'
            ? localStorage.getItem('access_token') || sessionStorage.getItem('access_token')
            : null;
    if (!token) return;

    try {
        const res = await fetch(`${API_BASE}/student/progress/geography/mastered`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) return;

        const data = await res.json();
        const masteredIds: string[] = data.masteredIds || [];

        const store = getGeographyStore();
        let changed = false;

        masteredIds.forEach((id) => {
            const numId = Number(id);
            if (!isNaN(numId)) {
                if (!store.topics[numId]) {
                    store.topics[numId] = defaultTopicProgress();
                }
                const p = store.topics[numId];
                // Only upgrade — never downgrade a locally completed topic
                if (p.readSection !== 'completed') { p.readSection = 'completed'; changed = true; }
                if (p.flashcards !== 'completed') { p.flashcards = 'completed'; changed = true; }
                if (p.mcqs !== 'completed') { p.mcqs = 'completed'; changed = true; }
            }
        });

        if (changed) {
            store.lastSyncedAt = new Date().toISOString();
            saveGeographyStore(store);
        }
    } catch {
        // Silent failure — local store is the fallback
    }
}

// ─── Legacy Migration ─────────────────────────────────────────────────────────

/**
 * Migrate from the old { [topicId]: { completed: bool, lastViewed: string, ... } }
 * format used by both legacy storage keys.
 */
function migrateLegacy(): GeoStoreState {
    const result = emptyStore();

    for (const legacyKey of [LEGACY_KEY_1, LEGACY_KEY_2]) {
        try {
            const raw = localStorage.getItem(legacyKey);
            if (!raw) continue;
            const parsed = JSON.parse(raw) as Record<string, any>;

            // Handle both array format (key2: [1,2,3] = completed IDs) and object format
            if (Array.isArray(parsed)) {
                // geography-progress key was an array of completed IDs
                (parsed as number[]).forEach((id) => {
                    if (!result.topics[id]) result.topics[id] = defaultTopicProgress();
                    result.topics[id].readSection = 'completed';
                    result.topics[id].flashcards = 'completed';
                    result.topics[id].mcqs = 'completed';
                });
            } else {
                // geography_progress key was { [topicId]: { completed, flashcardsDone, mcqsDone } }
                Object.entries(parsed).forEach(([id, p]) => {
                    const numId = Number(id);
                    if (isNaN(numId)) return;
                    if (!result.topics[numId]) result.topics[numId] = defaultTopicProgress();
                    if (p?.readDone) result.topics[numId].readSection = 'completed';
                    if (p?.flashcardsDone) result.topics[numId].flashcards = 'completed';
                    if (p?.mcqsDone) result.topics[numId].mcqs = 'completed';
                    if (p?.completed) {
                        result.topics[numId].readSection = 'completed';
                        result.topics[numId].flashcards = 'completed';
                        result.topics[numId].mcqs = 'completed';
                    }
                });
            }
        } catch {
            // ignore corrupt data
        }
    }

    saveGeographyStore(result);
    return result;
}
