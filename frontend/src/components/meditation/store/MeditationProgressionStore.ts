import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { meditationService } from '@/services/meditationService'; // Import service

export interface MeditationLevel {
    id: 1 | 2 | 3 | 4;
    name: string;
    theme: string;
    description: string;
    unlockPrice: number;
    color: string;
}

export const MEDITATION_LEVELS: MeditationLevel[] = [
    {
        id: 1,
        name: "The Anchor",
        theme: "Awareness",
        description: "Master the breath. Stabilize the mind. The foundation of all specialized practices.",
        unlockPrice: 0,
        color: "from-teal-500 to-emerald-600"
    },
    {
        id: 2,
        name: "The Garden",
        theme: "Visualization",
        description: "Enter the Zen Garden. Engage your senses in a 3D interactive sandscape for deep focus.",
        unlockPrice: 500,
        color: "from-pink-500 to-rose-600"
    },
    {
        id: 3,
        name: "The Resonance",
        theme: "Vibration",
        description: "Tune into the universal frequency. Mantra and Binaural beats for cellular alignment.",
        unlockPrice: 1500,
        color: "from-indigo-500 to-violet-600"
    },
    {
        id: 4,
        name: "The Void",
        theme: "Transcendence",
        description: "Dissolve into the cosmos. A pure awareness experience beyond thought and form.",
        unlockPrice: 3000,
        color: "from-amber-400 to-orange-500"
    }
];

interface MeditationState {
    currentLevel: number;
    unlockedLevels: number[];
    karmaCoins: number;
    totalMinutes: number;
    streakDays: number;
    lastSessionDate: string | null;

    unlockLevel: (levelId: number) => boolean;
    grantLevel: (levelId: number) => void; // New action for payment unlocks
    syncPurchases: () => Promise<void>;   // New action to sync with backend
    completeSession: (minutes: number) => void;
    addCoins: (amount: number) => void;
}

export const useMeditationStore = create<MeditationState>()(
    persist(
        (set, get) => ({
            currentLevel: 1,
            unlockedLevels: [1],
            karmaCoins: 2500, // Starting bonus for demo
            totalMinutes: 120,
            streakDays: 5,
            lastSessionDate: new Date().toISOString(),

            unlockLevel: (levelId) => {
                const { karmaCoins, unlockedLevels } = get();
                const level = MEDITATION_LEVELS.find(l => l.id === levelId);

                if (!level || unlockedLevels.includes(levelId)) return false;
                if (karmaCoins < level.unlockPrice) return false;

                set({
                    karmaCoins: karmaCoins - level.unlockPrice,
                    unlockedLevels: [...unlockedLevels, levelId],
                    currentLevel: levelId // Auto-switch to newly unlocked
                });
                return true;
            },

            grantLevel: (levelId) => {
                const { unlockedLevels } = get();
                if (!unlockedLevels.includes(levelId)) {
                    set({
                        unlockedLevels: [...unlockedLevels, levelId],
                        currentLevel: levelId
                    });
                }
            },

            syncPurchases: async () => {
                try {
                    const history = await meditationService.getPurchaseHistory();
                    if (history && history.levels_owned) {
                        const { unlockedLevels } = get();
                        // Merge existing unlocks with purchased ones
                        const newUnlocks = Array.from(new Set([...unlockedLevels, ...history.levels_owned]));
                        set({ unlockedLevels: newUnlocks as number[] });
                    }
                } catch (error) {
                    console.error("Failed to sync purchases:", error);
                }
            },

            completeSession: (minutes) => {
                // Award 10 coins per minute
                const coinsEarned = minutes * 10;
                set(state => ({
                    totalMinutes: state.totalMinutes + minutes,
                    karmaCoins: state.karmaCoins + coinsEarned,
                    // Simple streak logic (demo)
                    streakDays: state.streakDays + 1,
                    lastSessionDate: new Date().toISOString()
                }));
            },

            addCoins: (amount) => set(state => ({ karmaCoins: state.karmaCoins + amount }))
        }),
        {
            name: 'meditation-progression-storage',
        }
    )
);
