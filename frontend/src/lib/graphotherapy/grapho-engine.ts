
export interface GraphoDrill {
    day: number;
    title: string;
    focus: string;
    trait: string;
    instruction: string;
    sampleText: string[]; // Lines to write
    durationMinutes: number;
    tips: string[];
}

export const GRAPHO_PROGRAM: GraphoDrill[] = [
    {
        day: 1,
        title: "The 't' Bar Reset",
        focus: "Letter 't'",
        trait: "Willpower & Enthusiasm",
        instruction: "Cross your 't' bars high on the stem and firmly. This rewires your brain for higher goals and stronger determination.",
        sampleText: ["The time to target the top is today.", "Trust the talent that takes you there.", "Total transformation takes time."],
        durationMinutes: 15,
        tips: ["Don't let the bar float away from the stem.", "Keep the pressure even."]
    },
    {
        day: 2,
        title: "The 'y' Loop Release",
        focus: "Letter 'y' & 'g'",
        trait: "Check on Physical/Material Drives",
        instruction: "Ensure the lower loop of 'y' and 'g' is complete and returns to the baseline. Avoid leaving it open or unfinished.",
        sampleText: ["Go get your golden glory.", "Young energy yields yearning.", "Generosity gives great growth."],
        durationMinutes: 15,
        tips: ["A full loop signifies completion of tasks.", "A straight down stroke (no loop) can mean isolation."]
    },
    {
        day: 3,
        title: "The 'i' Dot Precision",
        focus: "Letter 'i' & 'j'",
        trait: "Attention to Detail & Memory",
        instruction: "Place the dot exactly above the stem, not to the right or left. This enhances focus and concentration.",
        sampleText: ["Imagine infinite ideas inside.", "Just join the joyful journey.", "Initiate immediate improvement."],
        durationMinutes: 15,
        tips: ["A circling dot is a sign of uniqueness/artistic flair but can distract.", "A missing dot shows absent-mindedness."]
    },
    {
        day: 4,
        title: "The Baseline Stability",
        focus: "Line Alignment",
        trait: "Emotional Stability",
        instruction: "Write on an unlined paper but keep your baseline straight. This trains your mind to stay balanced amidst chaos.",
        sampleText: ["Stability stays strong in storms.", "Balance brings better behavior.", "Level lines lead to logic."],
        durationMinutes: 15,
        tips: ["If lines droop, it signals depression/fatigue.", "If lines ascend too much, it's unrealistic optimism."]
    },
    {
        day: 5,
        title: "The Slant Check",
        focus: "Vertical to Right Slant",
        trait: "Emotional Expression",
        instruction: "Aim for a slight right slant (CD/DE slant). This fosters healthy emotional connection without impulsiveness.",
        sampleText: ["Connect calmly with compassion.", "Feelings flow freely and fairly.", "Social skills serve success."],
        durationMinutes: 15,
        tips: ["Too far right = hysterical/impulsive.", "Vertical = head over heart.", "Left = repressed."]
    }
];

export class GraphotherapyEngine {

    /**
     * Calculates the current day of the program for a user.
     * @param startDateStr The date the user started the program (ISO string)
     * @returns The current day number (1-indexed). Returns 0 if not started, >30 if finished.
     */
    static getCurrentDay(startDateStr: string | null): number {
        if (!startDateStr) return 0;

        const start = new Date(startDateStr);
        const now = new Date();

        // Reset times to midnight for accurate day difference
        start.setHours(0, 0, 0, 0);
        now.setHours(0, 0, 0, 0);

        const diffTime = Math.abs(now.getTime() - start.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // Day 1 is the start day itself, so if diffDays is 0 (same day), it returns 1.
        return diffDays + 1;
    }

    static getDrillForDay(day: number): GraphoDrill | null {
        return GRAPHO_PROGRAM.find(d => d.day === day) || null;
    }

    static getAllDrills(): GraphoDrill[] {
        return GRAPHO_PROGRAM;
    }

    /**
     * Determines if a specific day is unlocked based on user progress.
     * In this strict version, Day N is only unlocked on or after the Nth day since start.
     */
    static isDayUnlocked(targetDay: number, currentDayOfUser: number): boolean {
        return targetDay <= currentDayOfUser;
    }
}
