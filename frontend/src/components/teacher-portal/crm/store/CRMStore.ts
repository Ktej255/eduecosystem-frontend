import { create } from 'zustand';

export interface StudentLead {
    id: number;
    name: string;
    email: string;
    avatar: string;
    lastLogin: string;
    drillsCompleted: number;
    storeVisits: number;
    warmthScore: number; // 0-100
    status: 'Hot' | 'Warm' | 'Cold';
    tags: string[];
}

export interface EmailStep {
    id: string;
    name: string;
    trigger: string;
    delayDays: number;
    template: 'Nudge' | 'Reward' | 'Upsell';
    stats: { sent: number; openRate: number };
}

interface CRMState {
    leads: StudentLead[];
    emailSequence: EmailStep[];

    // Actions
    updateWarmthScores: () => void;
    addSequenceStep: (step: EmailStep) => void;
    reorderSequence: (startIndex: number, endIndex: number) => void;
}

// Mock Data Generators
const generateLeads = (count: number): StudentLead[] => {
    return Array.from({ length: count }).map((_, i) => {
        const drills = Math.floor(Math.random() * 20);
        const logins = Math.floor(Math.random() * 10);
        const store = Math.floor(Math.random() * 5);

        // Algorithm: (Logins * 3) + (Drills * 5) + (Store * 10)
        let score = (logins * 3) + (drills * 5) + (store * 10);
        score = Math.min(100, score);

        let status: 'Hot' | 'Warm' | 'Cold' = 'Cold';
        if (score > 80) status = 'Hot';
        else if (score > 50) status = 'Warm';

        return {
            id: i + 1,
            name: `Student ${i + 1}`,
            email: `student${i + 1}@example.com`,
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
            lastLogin: new Date(Date.now() - Math.random() * 1000000000).toISOString(),
            drillsCompleted: drills,
            storeVisits: store,
            warmthScore: score,
            status,
            tags: score > 90 ? ['High Intent'] : []
        };
    });
};

export const useCRMStore = create<CRMState>((set, get) => ({
    leads: generateLeads(15).sort((a, b) => b.warmthScore - a.warmthScore),

    emailSequence: [
        { id: '1', name: 'Welcome Series', trigger: 'Signup', delayDays: 0, template: 'Nudge', stats: { sent: 120, openRate: 85 } },
        { id: '2', name: 'Methodology Intro', trigger: 'Signup', delayDays: 2, template: 'Nudge', stats: { sent: 110, openRate: 60 } },
        { id: '3', name: 'Level 2 Upsell', trigger: 'Completed L1', delayDays: 1, template: 'Upsell', stats: { sent: 45, openRate: 40 } },
    ],

    updateWarmthScores: () => {
        // In a real app, this would re-fetch or re-calc
        console.log("Recalculating Warmth Scores...");
    },

    addSequenceStep: (step) => set(state => ({
        emailSequence: [...state.emailSequence, step]
    })),

    reorderSequence: (startIndex, endIndex) => set(state => {
        const result = Array.from(state.emailSequence);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return { emailSequence: result };
    })
}));
