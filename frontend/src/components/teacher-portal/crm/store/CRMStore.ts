import { create } from 'zustand';
import api from '@/lib/api';

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
    loading: boolean;
    error: string | null;

    // Actions
    fetchLeads: () => Promise<void>;
    updateWarmthScores: () => void;
    addSequenceStep: (step: EmailStep) => void;
    removeSequenceStep: (stepId: string) => void;
    reorderSequence: (startIndex: number, endIndex: number) => void;
}

// Transform backend student data to lead format
const transformStudentToLead = (student: any, index: number): StudentLead => {
    const drills = student.streak_days || 0;
    const coins = student.coins || 0;

    // Warmth score: engagement-based calculation
    let score = Math.min(100, (drills * 5) + (coins > 0 ? 20 : 0) + (student.is_batch1_authorized ? 30 : 0));

    let status: 'Hot' | 'Warm' | 'Cold' = 'Cold';
    if (score > 70) status = 'Hot';
    else if (score > 40) status = 'Warm';

    return {
        id: student.id || index + 1,
        name: student.full_name || `Student ${index + 1}`,
        email: student.email || `student${index + 1}@example.com`,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${student.id || index}`,
        lastLogin: student.last_login || new Date().toISOString(),
        drillsCompleted: drills,
        storeVisits: 0,
        warmthScore: score,
        status,
        tags: score > 80 ? ['High Intent'] : student.is_batch1_authorized ? ['Batch 1'] : []
    };
};

export const useCRMStore = create<CRMState>((set, get) => ({
    leads: [],
    loading: false,
    error: null,

    emailSequence: [
        { id: '1', name: 'Welcome Series', trigger: 'Signup', delayDays: 0, template: 'Nudge', stats: { sent: 120, openRate: 85 } },
        { id: '2', name: 'Methodology Intro', trigger: 'Signup', delayDays: 2, template: 'Nudge', stats: { sent: 110, openRate: 60 } },
        { id: '3', name: 'Level 2 Upsell', trigger: 'Completed L1', delayDays: 1, template: 'Upsell', stats: { sent: 45, openRate: 40 } },
    ],

    fetchLeads: async () => {
        set({ loading: true, error: null });
        try {
            const response = await api.get('/admin/students');
            const students = Array.isArray(response.data) ? response.data : [];
            const leads = students
                .map(transformStudentToLead)
                .sort((a, b) => b.warmthScore - a.warmthScore);
            set({ leads, loading: false });
        } catch (err: any) {
            console.error('Failed to fetch leads:', err);
            // Fallback: generate sample data if API unavailable
            const fallbackLeads: StudentLead[] = Array.from({ length: 8 }).map((_, i) => {
                const drills = Math.floor(Math.random() * 20);
                let score = Math.min(100, drills * 5 + Math.floor(Math.random() * 30));
                let status: 'Hot' | 'Warm' | 'Cold' = score > 70 ? 'Hot' : score > 40 ? 'Warm' : 'Cold';
                return {
                    id: i + 1,
                    name: `Student ${i + 1}`,
                    email: `student${i + 1}@example.com`,
                    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,
                    lastLogin: new Date().toISOString(),
                    drillsCompleted: drills,
                    storeVisits: 0,
                    warmthScore: score,
                    status,
                    tags: []
                };
            }).sort((a, b) => b.warmthScore - a.warmthScore);
            set({ leads: fallbackLeads, loading: false, error: 'Using offline data. API unavailable.' });
        }
    },

    updateWarmthScores: () => {
        // Recalculate from current data
        const { leads } = get();
        const updated = leads.map(lead => {
            let score = Math.min(100, (lead.drillsCompleted * 5) + (lead.storeVisits * 10));
            let status: 'Hot' | 'Warm' | 'Cold' = score > 70 ? 'Hot' : score > 40 ? 'Warm' : 'Cold';
            return { ...lead, warmthScore: score, status };
        }).sort((a, b) => b.warmthScore - a.warmthScore);
        set({ leads: updated });
    },

    addSequenceStep: (step) => set(state => ({
        emailSequence: [...state.emailSequence, step]
    })),

    removeSequenceStep: (stepId) => set(state => ({
        emailSequence: state.emailSequence.filter(s => s.id !== stepId)
    })),

    reorderSequence: (startIndex, endIndex) => set(state => {
        const result = Array.from(state.emailSequence);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return { emailSequence: result };
    })
}));
