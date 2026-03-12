export interface EnergyLog {
    timeOfDay: 'morning' | 'afternoon' | 'evening';
    level: number; // 1-10
    date: string; // ISO Date
}

export const analyzeEnergy = (logs: EnergyLog[]) => {
    // Simple average calculation
    const averages = {
        morning: 0,
        afternoon: 0,
        evening: 0,
        counts: { morning: 0, afternoon: 0, evening: 0 }
    };

    logs.forEach(log => {
        averages[log.timeOfDay] += log.level;
        averages.counts[log.timeOfDay] += 1;
    });

    const finalAverages = {
        morning: averages.counts.morning ? averages.morning / averages.counts.morning : 5,
        afternoon: averages.counts.afternoon ? averages.afternoon / averages.counts.afternoon : 5,
        evening: averages.counts.evening ? averages.evening / averages.counts.evening : 5,
    };

    return finalAverages;
};

export const getSuggestion = (energyLevel: number): string => {
    if (energyLevel >= 8) return "Deep Work: Tackle new, complex concepts (Polity Chapters, Geography).";
    if (energyLevel >= 5) return "Active Recall: Attempt MCQs, Answer Writing, or Flashcards.";
    return "Passive Review: Listen to lectures, Watch News, or do Graphotherapy.";
};

export const TASKS_BY_ENERGY = {
    high: ["Concept Learning", "Mains Answer Writing", "Complex Problem Solving"],
    medium: ["MCQ Practice", "Notes Revision", "Current Affairs"],
    low: ["Video Lectures", "Graphotherapy", "Audio Recall"]
};
