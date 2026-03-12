
export const ANCIENT_PHASES = [
    {
        id: 1,
        name: "Phase 1: Foundations & Early Cultures",
        title: "Foundations & Early Cultures",
        range: "Day 1 - 3",
        days: "1-3",
        description: "Importance of History, Construction, Geography, Stone Age, Copper Phase & Harappan",
        color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
    },
    {
        id: 2,
        name: "Phase 2: Vedic Age & Rise of States",
        title: "Vedic Age & Rise of States",
        range: "Day 4 - 7",
        days: "4-7",
        description: "Aryans, Vedic Phase, Buddhism, Jainism, Magadha & Mauryas",
        color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
    },
    {
        id: 3,
        name: "Phase 3: Empires, Trade & Southern India",
        title: "Empires, Trade & Southern India",
        range: "Day 8 - 11",
        days: "8-11",
        description: "Central Asia, Satavahanas, Deep South, Post-Maurya Towns, Guptas, Harsha",
        color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
    },
    {
        id: 4,
        name: "Phase 4: Golden Age & Transition",
        title: "Golden Age & Transition",
        range: "Day 12 - 15",
        days: "12-15",
        description: "Regional Kingdoms, Cultural Legacy, Social Changes & Revision",
        color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
    }
];

// Each "day" maps 2-3 RS Sharma chapters for intensive study
// 15 days × ~2 chapters = 27 chapters + 2 revision days
export const ANCIENT_SCHEDULE = [
    // Phase 1: Foundations & Early Cultures (Ch 1-6)
    {
        day: 1,
        title: "Why Ancient History Matters & Sources",
        chapters: [1, 2],
        chapterNames: ["Ch 1: The Importance of Ancient Indian History", "Ch 2: The Construction of Ancient Indian History"],
        phase: 1,
        mcqCount: 40,
        date: "2026-03-05",
        isAssessmentDay: false
    },
    {
        day: 2,
        title: "Geography & Stone Ages",
        chapters: [3, 4],
        chapterNames: ["Ch 3: The Geographical Setting", "Ch 4: The Stone Age"],
        phase: 1,
        mcqCount: 40,
        date: "2026-03-06",
        isAssessmentDay: false
    },
    {
        day: 3,
        title: "Chalcolithic & Harappan Civilization",
        chapters: [5, 6],
        chapterNames: ["Ch 5: The Stone-Copper Phase", "Ch 6: The Harappan Civilization"],
        phase: 1,
        mcqCount: 60,
        date: "2026-03-07",
        isAssessmentDay: false
    },

    // Phase 2: Vedic Age & Rise of States (Ch 7-14)
    {
        day: 4,
        title: "Aryan Arrival & Later Vedic Transition",
        chapters: [7, 8],
        chapterNames: ["Ch 7: Advent of the Aryans and the Age of the Rig Veda", "Ch 8: The Later Vedic Phase: Transition to State and Social Formation"],
        phase: 2,
        mcqCount: 40,
        date: "2026-03-08",
        isAssessmentDay: false
    },
    {
        day: 5,
        title: "Jainism, Buddhism & Early States",
        chapters: [9, 10],
        chapterNames: ["Ch 9: Jainism and Buddhism", "Ch 10: Territorial States and the First Magadhan Empire"],
        phase: 2,
        mcqCount: 60,
        date: "2026-03-09",
        isAssessmentDay: false
    },
    {
        day: 6,
        title: "Foreign Invasions & Society in Buddha's Age",
        chapters: [11, 12],
        chapterNames: ["Ch 11: Iranian and Macedonian Invasions", "Ch 12: State and Varna Society in the Age of the Buddha"],
        phase: 2,
        mcqCount: 40,
        date: "2026-03-10",
        isAssessmentDay: false
    },
    {
        day: 7,
        title: "The Mauryan Empire & Its Significance",
        chapters: [13, 14],
        chapterNames: ["Ch 13: The Age of the Mauryas", "Ch 14: Significance of the Maurya Rule"],
        phase: 2,
        mcqCount: 60,
        date: "2026-03-11",
        isAssessmentDay: false
    },

    // Phase 3: Empires, Trade & Southern India (Ch 15-22)
    {
        day: 8,
        title: "Central Asian Contacts & Satavahanas",
        chapters: [15, 16],
        chapterNames: ["Ch 15: Central Asian Contacts and Their Results", "Ch 16: The Age of the Satavahanas"],
        phase: 3,
        mcqCount: 40,
        date: "2026-03-12",
        isAssessmentDay: false
    },
    {
        day: 9,
        title: "Deep South & Post-Maurya Trade Towns",
        chapters: [17, 18],
        chapterNames: ["Ch 17: The Dawn of History in the Deep South", "Ch 18: Crafts, Trade and Towns in the Post-Maurya Age"],
        phase: 3,
        mcqCount: 40,
        date: "2026-03-13",
        isAssessmentDay: false
    },
    {
        day: 10,
        title: "Gupta Empire: Rise & Life",
        chapters: [19, 20],
        chapterNames: ["Ch 19: The Rise and Growth of the Gupta Empire", "Ch 20: Life in the Gupta Age"],
        phase: 3,
        mcqCount: 60,
        date: "2026-03-14",
        isAssessmentDay: false
    },
    {
        day: 11,
        title: "Eastern India & Harsha's Empire",
        chapters: [21, 22],
        chapterNames: ["Ch 21: Spread of Civilization in Eastern India", "Ch 22: Harsha and His Times"],
        phase: 3,
        mcqCount: 40,
        date: "2026-03-15",
        isAssessmentDay: false
    },

    // Phase 4: Golden Age & Transition (Ch 23-27) + Revision
    {
        day: 12,
        title: "New States & Cultural Contacts",
        chapters: [23, 24],
        chapterNames: ["Ch 23: Formation of New States and Rural Expansion in the Peninsula", "Ch 24: India's Cultural Contacts with the Asian Countries"],
        phase: 4,
        mcqCount: 40,
        date: "2026-03-16",
        isAssessmentDay: false
    },
    {
        day: 13,
        title: "Transformation, Social Changes & Scientific Legacy",
        chapters: [25, 26, 27],
        chapterNames: ["Ch 25: Transformation of the Ancient Phase", "Ch 26: Sequence of Social Changes", "Ch 27: Legacy in Science and Civilization"],
        phase: 4,
        mcqCount: 60,
        date: "2026-03-17",
        isAssessmentDay: false
    },
    {
        day: 14,
        title: "Full Syllabus Rapid Revision",
        chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        chapterNames: ["Revision: Chapters 1-14 (Foundations → Mauryas)"],
        phase: 4,
        mcqCount: 100,
        date: "2026-03-18",
        isAssessmentDay: false
    },
    {
        day: 15,
        title: "Final Assessment — Full Ancient History",
        chapters: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
        chapterNames: ["Assessment: Chapters 15-27 (Post-Maurya → Legacy)"],
        phase: 4,
        mcqCount: 100,
        date: "2026-03-19",
        isAssessmentDay: true
    }
];

export const getAncientDaySchedule = (day: number = 1) => {
    return ANCIENT_SCHEDULE.find(s => s.day === day) || ANCIENT_SCHEDULE[0];
};
