import { create } from 'zustand';

interface LiveStudent {
    id: number;
    name: string;
    avatar: string; // Initials or color
    focusScore: number; // 0-100
    isConfused: boolean;
    hasRaisedHand: boolean;
    lastActivity: string;
}

interface LiveClassroomState {
    isLive: boolean;
    students: LiveStudent[];
    activePoll: string | null;
    pollResults: { yes: number; no: number };
    confusionCount: number;
    sessionTime: number; // Seconds
    toggleLive: (status: boolean) => void;
    triggerPoll: (question: string) => void;
    endPoll: () => void;
    tick: () => void; // Called by interval to update simulation
}

const MOCK_NAMES = ["Aarav", "Vihaan", "Aditya", "Sai", "Reyansh", "Arjun", "Vivaan", "Rohan", "Ishaan", "Dhruv", "Ananya", "Diya", "Saanvi", "Aadhya", "Pari", "Myra", "Riya", "Anika", "Kavya", "Navya"];

const generateStudents = (count: number): LiveStudent[] => {
    return Array.from({ length: count }).map((_, i) => ({
        id: i + 1,
        name: MOCK_NAMES[i % MOCK_NAMES.length] + ` ${i > 19 ? i : ''}`,
        avatar: MOCK_NAMES[i % MOCK_NAMES.length][0],
        focusScore: 85 + Math.random() * 15,
        isConfused: false,
        hasRaisedHand: false,
        lastActivity: 'Joined session'
    }));
};

export const useLiveClassroomStore = create<LiveClassroomState>((set, get) => ({
    isLive: false,
    students: generateStudents(24),
    activePoll: null,
    pollResults: { yes: 0, no: 0 },
    confusionCount: 0,
    sessionTime: 0,

    toggleLive: (status) => set({ isLive: status }),

    triggerPoll: (question) => {
        set({ activePoll: question, pollResults: { yes: 0, no: 0 } });
        // Simulate results coming in
        setTimeout(() => {
            set((state) => ({
                pollResults: {
                    yes: Math.floor(state.students.length * 0.7),
                    no: Math.floor(state.students.length * 0.2)
                }
            }));
        }, 3000);
    },

    endPoll: () => set({ activePoll: null }),

    tick: () => {
        const { isLive, students } = get();
        if (!isLive) return;

        // Simulate Fluctuations
        const updatedStudents = students.map(s => {
            let newFocus = s.focusScore + (Math.random() - 0.5) * 5; // Drift
            if (newFocus > 100) newFocus = 100;
            if (newFocus < 40) newFocus = 40;

            // Random confusion spike
            const becomeConfused = Math.random() < 0.05;
            const resolveConfusion = Math.random() < 0.2;

            return {
                ...s,
                focusScore: newFocus,
                isConfused: s.isConfused ? !resolveConfusion : becomeConfused
            };
        });

        // Calculate confusion count
        const confusionCount = updatedStudents.filter(s => s.isConfused).length;

        set((state) => ({
            students: updatedStudents,
            confusionCount,
            sessionTime: state.sessionTime + 1
        }));
    }
}));
