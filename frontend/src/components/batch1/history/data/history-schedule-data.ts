// History Pomodoro Schedule - Based on Spectrum Modern India
// Start Date: Feb 5th, 2026

export interface HistoryDaySchedule {
    day: number;
    phase: number;
    title: string;
    topics: string[];
    strategy: string;
    isRevisionDay: boolean;
    chapters: number[]; // References to Spectrum Chapters
}

export const HISTORY_START_DATE = new Date('2026-02-09');
export const SLOTS_PER_DAY = 6;

export const HISTORY_SCHEDULE: HistoryDaySchedule[] = [
    // Phase 1: Advent & Consolidation (Days 1-7)
    {
        day: 1,
        phase: 1,
        title: "Sources & Advent of Europeans",
        topics: ["Unit 1: Sources & Approaches", "Unit 2: Advent of Europeans (Portuguese, Dutch, English, French)"],
        strategy: "Speed Read Sources. Deep Dive: Anglo-French Rivalry & Carnatic Wars.",
        isRevisionDay: false,
        chapters: [1, 2, 3]
    },
    {
        day: 2,
        phase: 1,
        title: "Mughal Decline & Bengal Conquest",
        topics: ["Unit 2: Decline of Mughals", "Unit 2: British Conquest of Bengal (Plassey, Buxar)"],
        strategy: "Focus on Causes of Decline and Treaty of Allahabad.",
        isRevisionDay: false,
        chapters: [4]
    },
    {
        day: 3,
        phase: 1,
        title: "Anglo-Mysore & Anglo-Maratha Wars",
        topics: ["Unit 2: Anglo-Mysore Wars", "Unit 2: Anglo-Maratha Wars"],
        strategy: "Map Work: Territories annexed. Compare subsidiary alliances.",
        isRevisionDay: false,
        chapters: [5]
    },
    {
        day: 4,
        phase: 1,
        title: "Sindh, Punjab & Dalhousie's Policies",
        topics: ["Unit 2: Conquest of Sindh & Punjab", "Unit 2: Policy of Ring Fence to Lapse"],
        strategy: "Analyze: Dalhousie's policies vs Wellesley's.",
        isRevisionDay: false,
        chapters: [5]
    },
    {
        day: 5,
        phase: 1,
        title: "People's Resistance",
        topics: ["Unit 3: People's Resistance (Civil & Tribal Uprisings)"],
        strategy: "Table Study: Year, Region, Leader, Cause for each uprising.",
        isRevisionDay: false,
        chapters: [6]
    },
    {
        day: 6,
        phase: 1,
        title: "The Revolt of 1857",
        topics: ["Unit 3: Revolt of 1857 (Causes, Spread, Failure, Impact)"],
        strategy: "Mains Focus: nature of the revolt (Mutiny vs War of Independence).",
        isRevisionDay: false,
        chapters: [7]
    },
    {
        day: 7,
        phase: 1,
        title: "REVISION & MOCK - Phase 1",
        topics: ["Consolidate Days 1-6"],
        strategy: "Attempt 50 MCQs on Phase 1 content.",
        isRevisionDay: true,
        chapters: []
    },

    // Phase 2: Awakening & Reform (Days 8-9)
    {
        day: 8,
        phase: 2,
        title: "Reform Movements (Part 1)",
        topics: ["Unit 4: General Features", "Unit 4: Brahmo Samaj", "Unit 4: Arya Samaj"],
        strategy: "Focus on Ideological Differences (Reformist vs Revivalist).",
        isRevisionDay: false,
        chapters: [8, 9]
    },
    {
        day: 9,
        phase: 2,
        title: "Reform Movements (Part 2)",
        topics: ["Unit 4: Theosophical Society", "Unit 4: Aligarh Movement", "Unit 4: Temple Entry Movements"],
        strategy: "Persona Study: Role of leaders (Phule, Vivekananda, Syed Ahmed Khan).",
        isRevisionDay: false,
        chapters: [9]
    },

    // Phase 3: The Freedom Struggle Begins (Days 10-14)
    {
        day: 10,
        phase: 3,
        title: "Congress Foundation & Moderate Phase",
        topics: ["Unit 5: INC Foundation (1885)", "Unit 5: Moderate Phase (1885-1905)"],
        strategy: "Analyze: Economic Critique of British Rule (Drain Theory).",
        isRevisionDay: false,
        chapters: [10, 11]
    },
    {
        day: 11,
        phase: 3,
        title: "Swadeshi Movement & Surat Split",
        topics: ["Unit 6: Swadeshi Movement (1905-1907)", "Unit 6: Surat Split"],
        strategy: "Compare: Moderate vs Extremist ideologies.",
        isRevisionDay: false,
        chapters: [12]
    },
    {
        day: 12,
        phase: 3,
        title: "Revolutionary Activities & Ghadar",
        topics: ["Unit 6: Revolutionary Activities (Phase 1)", "Unit 6: Ghadar Party"],
        strategy: "Map Work: Global spread of revolutionaries (London, Paris, Berlin, US).",
        isRevisionDay: false,
        chapters: [13]
    },
    {
        day: 13,
        phase: 3,
        title: "Home Rule League & Lucknow Pact",
        topics: ["Unit 6: Home Rule League (1916)", "Unit 6: Lucknow Pact"],
        strategy: "Analyze: Shift in Congress-League relations.",
        isRevisionDay: false,
        chapters: [14]
    },
    {
        day: 14,
        phase: 3,
        title: "REVISION & MOCK - Phase 2 & 3",
        topics: ["Consolidate Days 8-13"],
        strategy: "Attempt 50 MCQs on Reform & Early Nationalism.",
        isRevisionDay: true,
        chapters: []
    },

    // Phase 4: Era of Mass Nationalism (Days 15-21)
    {
        day: 15,
        phase: 4,
        title: "Emergence of Gandhi",
        topics: ["Unit 7: Champaran Satyagraha", "Unit 7: Kheda Satyagraha", "Unit 7: Rowlatt Satyagraha"],
        strategy: "Study: Evolution of Satyagraha technique.",
        isRevisionDay: false,
        chapters: [15]
    },
    {
        day: 16,
        phase: 4,
        title: "Non-Cooperation & Khilafat",
        topics: ["Unit 7: Non-Cooperation Movement", "Unit 7: Khilafat Movement"],
        strategy: "Focus: Mass participation, Chauri Chaura incident.",
        isRevisionDay: false,
        chapters: [16]
    },
    {
        day: 17,
        phase: 4,
        title: "Swarajists & Simon Commission",
        topics: ["Unit 7: Swarajists", "Unit 7: Simon Commission", "Unit 7: Nehru Report"],
        strategy: "Debate: Council Entry vs Constructive Work.",
        isRevisionDay: false,
        chapters: [17, 18]
    },
    {
        day: 18,
        phase: 4,
        title: "CDM & Round Table Conferences",
        topics: ["Unit 7: Civil Disobedience Movement", "Unit 7: Round Table Conferences"],
        strategy: "Compare: CDM vs NCM (Participation, Goals).",
        isRevisionDay: false,
        chapters: [19]
    },
    {
        day: 19,
        phase: 4,
        title: "Communal Award & GoI Act 1935",
        topics: ["Unit 7: Communal Award", "Unit 7: Poona Pact", "Unit 7: GoI Act 1935"],
        strategy: "High Yield: Provisions of GoI Act 1935.",
        isRevisionDay: false,
        chapters: [20]
    },
    {
        day: 20,
        phase: 4,
        title: "Congress Rule in Provinces",
        topics: ["Unit 7: Congress Rule in Provinces (1937-39)"],
        strategy: "Evaluation of 28 months of Congress rule.",
        isRevisionDay: false,
        chapters: [21]
    },
    {
        day: 21,
        phase: 4,
        title: "REVISION & MOCK - Gandhian Era",
        topics: ["Consolidate Days 15-20"],
        strategy: "Cumulative Revision of Gandhian Era. Attempt 50 MCQs.",
        isRevisionDay: true,
        chapters: []
    },

    // Phase 5: Towards Independence (Days 22-25)
    {
        day: 22,
        phase: 5,
        title: "August Offer & Cripps Mission",
        topics: ["Unit 8: August Offer", "Unit 8: Individual Satyagraha", "Unit 8: Cripps Mission"],
        strategy: "Chronology: Very crucial in this phase.",
        isRevisionDay: false,
        chapters: [22]
    },
    {
        day: 23,
        phase: 5,
        title: "Quit India Movement & INA",
        topics: ["Unit 8: Quit India Movement", "Unit 8: INA"],
        strategy: "Analyze: 'Do or Die' vs earlier movements.",
        isRevisionDay: false,
        chapters: [23]
    },
    {
        day: 24,
        phase: 5,
        title: "Post-War Negotiations",
        topics: ["Unit 8: Rajagopalachari Formula", "Unit 8: Wavell Plan", "Unit 8: Cabinet Mission"],
        strategy: "Focus: Why negotiations failed?",
        isRevisionDay: false,
        chapters: [24]
    },
    {
        day: 25,
        phase: 5,
        title: "Independence & Partition",
        topics: ["Unit 8: Independence & Partition", "Unit 8: Mountbatten Plan"],
        strategy: "Critical analysis of Partition inevitability.",
        isRevisionDay: false,
        chapters: [25]
    },

    // Phase 6: Administrative & Economic History (Days 26-30)
    {
        day: 26,
        phase: 6,
        title: "Constitutional Development (1773-1858)",
        topics: ["Unit 9: Regulating Act", "Unit 9: Charter Acts", "Unit 9: GoI Act 1858"],
        strategy: "Chart Work: Evolution of Governor General's powers.",
        isRevisionDay: false,
        chapters: [26]
    },
    {
        day: 27,
        phase: 6,
        title: "Constitutional Development (1858-1947)",
        topics: ["Unit 9: Indian Councils Acts", "Unit 9: Morley-Minto", "Unit 9: Montagu-Chelmsford"],
        strategy: "Focus: Expansion of Legislative Councils.",
        isRevisionDay: false,
        chapters: [26]
    },
    {
        day: 28,
        phase: 6,
        title: "British Policies Survey",
        topics: ["Unit 9: Education Policy", "Unit 9: Press Regulations", "Unit 9: Civil Services"],
        strategy: "Analyze: Anglicist-Orientalist controversy, Press Acts.",
        isRevisionDay: false,
        chapters: [27, 29, 30]
    },
    {
        day: 29,
        phase: 6,
        title: "Economic Impact & Peasant Movements",
        topics: ["Unit 9: Economic Impact of British Rule", "Unit 9: Peasant Movements (Phase 2)"],
        strategy: "Connect: Deindustrialization -> Ruralization -> Famine.",
        isRevisionDay: false,
        chapters: [28, 31]
    },
    {
        day: 30,
        phase: 6,
        title: "Post-Independence Consolidation",
        topics: ["Unit 10: Integration of States", "Unit 10: Linguistic Reorganisation"],
        strategy: "Brief overview of Linguistic States & Integration.",
        isRevisionDay: false,
        chapters: [33, 34, 35]
    }
];

// Helper: Get days for a specific phase
export function getDaysForPhase(phase: number): HistoryDaySchedule[] {
    return HISTORY_SCHEDULE.filter(d => d.phase === phase);
}

// Helper: Get today's schedule based on start date
export function getTodaySchedule(): HistoryDaySchedule | null {
    const today = new Date();
    const diffTime = today.getTime() - HISTORY_START_DATE.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Day 1 is index 0
    if (diffDays >= 0 && diffDays < HISTORY_SCHEDULE.length) {
        return HISTORY_SCHEDULE[diffDays];
    }
    return null;
}

// Helper: Get current day number
export function getCurrentDayNumber(): number {
    const today = new Date();
    const diffTime = today.getTime() - HISTORY_START_DATE.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, Math.min(diffDays + 1, HISTORY_SCHEDULE.length));
}

// Helper: Phase Information
export const HISTORY_PHASES = [
    { id: 1, title: "Advent & Consolidation", description: "Building the foundation of Colonial Rule", days: "1-7" },
    { id: 2, title: "Awakening & Reform", description: "Social and Cultural transformation", days: "8-9" },
    { id: 3, title: "The Freedom Struggle Begins", description: "From Moderate Politics to Revolutionary Terrorism", days: "10-14" },
    { id: 4, title: "Era of Mass Nationalism", description: "The Gandhian Era", days: "15-21" },
    { id: 5, title: "Towards Independence", description: "The Final Push", days: "22-25" },
    { id: 6, title: "Administrative & Economic History", description: "The Backbone of British Rule", days: "26-30" }
];
