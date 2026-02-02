import { create } from 'zustand';

export interface StudentActivity {
    id: string;
    studentName: string;
    studentInitials: string;
    action: string;
    target: string;
    timestamp: string;
    color: string;
}

interface StudentActivityState {
    activities: StudentActivity[];
    addActivity: (activity: Omit<StudentActivity, 'id' | 'timestamp'>) => void;
}

export const useStudentActivityStore = create<StudentActivityState>((set) => ({
    activities: [
        {
            id: '1',
            studentName: 'Rahul V.',
            studentInitials: 'RV',
            action: 'watching',
            target: 'Polity Class',
            timestamp: new Date().toISOString(),
            color: 'bg-purple-500'
        },
        {
            id: '2',
            studentName: 'Amit S.',
            studentInitials: 'AS',
            action: 'scored 85% in',
            target: 'CSAT Mock',
            timestamp: new Date().toISOString(),
            color: 'bg-blue-500'
        }
    ],
    addActivity: (activity) => set((state) => ({
        activities: [
            {
                ...activity,
                id: Math.random().toString(36).substring(7),
                timestamp: new Date().toISOString()
            },
            ...state.activities
        ].slice(0, 5) // Keep only latest 5 for the pulse
    }))
}));
