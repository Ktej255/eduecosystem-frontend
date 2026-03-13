
export const MEDIEVAL_PHASES = [
    {
        id: 1,
        name: "Phase 1: Early Medieval & Regional Empires",
        days: "1 - 5",
        title: "Foundation & Early Consolidation",
        description: "India & World, Three Empires, Cholas, Socio-Economic Life, Age of Conflict.",
        color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
    },
    {
        id: 2,
        name: "Phase 2: The Delhi Sultanate & Southern Power",
        days: "6 - 8",
        title: "Sultanate Era",
        description: "Delhi Sultanate I & II, Government & Socio-Economic Life under Sultanate.",
        color: "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-300"
    },
    {
        id: 3,
        name: "Phase 3: Transition & Rise of New Powers",
        days: "9 - 11",
        title: "Vijayanagara & Northern Struggles",
        description: "Vijayanagara, Bahmanids, North India Struggle I, Cultural Development.",
        color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300"
    },
    {
        id: 4,
        name: "Phase 4: The Mughal Hegemony",
        days: "12 - 16",
        title: "Mughal Empire Climax",
        description: "Mughals/Afghans II, Akbar, 17th Century India, Aurangzeb/Marathas, Economic Life.",
        color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
    },
    {
        id: 5,
        name: "Phase 5: Decline & Late Medieval Legacies",
        days: "17 - 20",
        title: "Late Medieval Transition",
        description: "Mughal Decline, Religion/Culture, Maratha Admin, Foreign Travelers.",
        color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
    }
];

export const MEDIEVAL_SCHEDULE = [
    {
        day: 1,
        title: "India & The World / Age of Three Empires",
        chapters: [1, 2],
        chapterNames: ["India and the World", "Northern India: Age of the Three Empires"],
        phase: 1,
        date: new Date().toISOString(),
        mcqCount: 120
    },
    {
        day: 2,
        title: "The Chola Empire",
        chapters: [3],
        chapterNames: ["South India: The Chola Empire"],
        phase: 1,
        date: new Date().toISOString(),
        mcqCount: 90
    },
    {
        day: 3,
        title: "Early Medieval Socio-Economic Life",
        chapters: [4],
        chapterNames: ["Economic and Social Life, Education and Religious Beliefs: 800–1200"],
        phase: 1,
        date: new Date().toISOString(),
        mcqCount: 90
    },
    {
        day: 4,
        title: "The Age of Conflict (1000-1200)",
        chapters: [5],
        chapterNames: ["The Age of Conflict: Circa 1000–1200"],
        phase: 1,
        date: new Date().toISOString(),
        mcqCount: 90
    },
    {
        day: 5,
        title: "Phase 1 Assessment & Review",
        chapters: [1, 2, 3, 4, 5],
        chapterNames: ["Review: India/World", "Review: Three Empires", "Review: Cholas", "Review: Socio-Econ 800-1200", "Review: Age of Conflict"],
        phase: 1,
        date: new Date().toISOString(),
        mcqCount: 150,
        isAssessmentDay: true
    },
    {
        day: 6,
        title: "Delhi Sultanate - I",
        chapters: [6],
        chapterNames: ["The Delhi Sultanat-I: Circa 1200–1400"],
        phase: 2,
        date: new Date().toISOString(),
        mcqCount: 90
    },
    {
        day: 7,
        title: "Delhi Sultanate - II",
        chapters: [7],
        chapterNames: ["The Delhi Sultanat-II: Circa 1200–1400"],
        phase: 2,
        date: new Date().toISOString(),
        mcqCount: 90
    },
    {
        day: 8,
        title: "Sultanate Administration & Society",
        chapters: [8],
        chapterNames: ["Government, and Economic and Social Life under the Delhi Sultanat"],
        phase: 2,
        date: new Date().toISOString(),
        mcqCount: 90
    },
    {
        day: 9,
        title: "Vijayanagara, Bahmanids & Portuguese",
        chapters: [9],
        chapterNames: ["The Age of Vijayanagara and the Bahmanids, and the Portuguese"],
        phase: 3,
        date: new Date().toISOString(),
        mcqCount: 120
    },
    {
        day: 10,
        title: "Struggle for Empire in North India (1400-1525)",
        chapters: [10],
        chapterNames: ["Struggle for Empire in North India-I: Circa 1400–1525"],
        phase: 3,
        date: new Date().toISOString(),
        mcqCount: 120
    },
    {
        day: 11,
        title: "Cultural Development (1300-1500)",
        chapters: [11],
        chapterNames: ["Cultural Development in India: 1300–1500"],
        phase: 3,
        date: new Date().toISOString(),
        mcqCount: 90
    },
    {
        day: 12,
        title: "Mughals and Afghans (1525-1555)",
        chapters: [12],
        chapterNames: ["Struggle for Empire in North India-II: Mughals and Afghans 1525–1555"],
        phase: 4,
        date: new Date().toISOString(),
        mcqCount: 90
    },
    {
        day: 13,
        title: "Age of Akbar",
        chapters: [13],
        chapterNames: ["Consolidation of the Mughal Empire: Age of Akbar"],
        phase: 4,
        date: new Date().toISOString(),
        mcqCount: 90
    },
    {
        day: 14,
        title: "17th Century India",
        chapters: [14],
        chapterNames: ["India in the First Half of the 17th Century"],
        phase: 4,
        date: new Date().toISOString(),
        mcqCount: 90
    },
    {
        day: 15,
        title: "Aurangzeb & The Marathas",
        chapters: [15],
        chapterNames: ["Climax and Crisis of the Mughal Empire: The Marathas and Aurangzeb"],
        phase: 4,
        date: new Date().toISOString(),
        mcqCount: 90
    },
    {
        day: 16,
        title: "Mughal Socio-Economic Life",
        chapters: [16],
        chapterNames: ["Economic and Social Life under the Mughals"],
        phase: 4,
        date: new Date().toISOString(),
        mcqCount: 90
    },
    {
        day: 17,
        title: "Mughal Decline & 18th Century",
        chapters: [17],
        chapterNames: ["Decline of the Mughal Empire and the 18th Century"],
        phase: 5,
        date: new Date().toISOString(),
        mcqCount: 90
    },
    {
        day: 18,
        title: "Religion and Culture",
        chapters: [18],
        chapterNames: ["Religion and Culture"],
        phase: 5,
        date: new Date().toISOString(),
        mcqCount: 90
    },
    {
        day: 19,
        title: "Maratha Administration",
        chapters: [19],
        chapterNames: ["The Maratha Administration"],
        phase: 5,
        date: new Date().toISOString(),
        mcqCount: 90
    },
    {
        day: 20,
        title: "Foreign Travelers",
        chapters: [20],
        chapterNames: ["Foreign Travelers"],
        phase: 5,
        date: new Date().toISOString(),
        mcqCount: 90
    }
];

export const getMedievalDaySchedule = (day: number = 1) => {
    return MEDIEVAL_SCHEDULE.find(s => s.day === day) || MEDIEVAL_SCHEDULE[0];
};
