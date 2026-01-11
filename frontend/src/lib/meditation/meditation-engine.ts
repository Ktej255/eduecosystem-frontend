
export interface MeditationSession {
    id: string;
    title: string;
    description: string;
    category: 'focus' | 'sleep' | 'anxiety' | 'morning' | 'beginner';
    duration: number; // minutes
    audioUrl: string; // Placeholder or path to static asset
    thumbnailGradient: string;
}

export const MEDITATION_SESSIONS: MeditationSession[] = [
    {
        id: "morning-clarity",
        title: "Morning Clarity",
        description: "Start your day with intention and focus. Clear the mental fog before you begin studying.",
        category: "morning",
        duration: 10,
        audioUrl: "/audio/meditation/morning-clarity.mp3",
        thumbnailGradient: "from-orange-400 to-rose-400"
    },
    {
        id: "deep-focus",
        title: "Deep Focus 45",
        description: "Binaural beats and guidance to enter a state of deep flow for intense study sessions.",
        category: "focus",
        duration: 45,
        audioUrl: "/audio/meditation/deep-focus.mp3",
        thumbnailGradient: "from-indigo-500 to-blue-500"
    },
    {
        id: "exam-anxiety-sos",
        title: "Exam Anxiety SOS",
        description: "A quick 5-minute grounding session to calm racing thoughts before a test.",
        category: "anxiety",
        duration: 5,
        audioUrl: "/audio/meditation/anxiety-sos.mp3",
        thumbnailGradient: "from-teal-400 to-emerald-500"
    },
    {
        id: "sleep-yoga-nidra",
        title: "Yoga Nidra for Sleep",
        description: "Systematic relaxation to recover lost sleep and consolidate memory after a long day.",
        category: "sleep",
        duration: 20,
        audioUrl: "/audio/meditation/yoga-nidra.mp3",
        thumbnailGradient: "from-indigo-900 to-purple-900"
    },
    {
        id: "beginner-breath",
        title: "Breath Awareness",
        description: "The foundation of mindfulness. Learn to watch your breath without judgment.",
        category: "beginner",
        duration: 10,
        audioUrl: "/audio/meditation/breath-awareness.mp3",
        thumbnailGradient: "from-cyan-400 to-blue-400"
    }
];

export class MeditationEngine {

    /**
     * Recommends a session based on the current time of day.
     */
    static getRecommendedSession(): MeditationSession {
        const hour = new Date().getHours();

        if (hour >= 5 && hour < 10) return this.getSessionById('morning-clarity')!;
        if (hour >= 21 || hour < 5) return this.getSessionById('sleep-yoga-nidra')!;
        return this.getSessionById('deep-focus')!;
    }

    static getAllSessions(): MeditationSession[] {
        return MEDITATION_SESSIONS;
    }

    static getSessionById(id: string): MeditationSession | undefined {
        return MEDITATION_SESSIONS.find(s => s.id === id);
    }

    static getSessionsByCategory(category: MeditationSession['category']): MeditationSession[] {
        return MEDITATION_SESSIONS.filter(s => s.category === category);
    }
}
