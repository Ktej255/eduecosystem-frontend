
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
    // Phase 1: Foundations & Early Cultures (Mod 1-3)
    {
        day: 1,
        title: "Significance of Ancient History",
        chapters: [1],
        chapterNames: ["Significance: Unity, Diversity, and the Name of India"],
        phase: 1,
        mcqCount: 20,
        date: "2026-03-05",
        isAssessmentDay: false
    },
    {
        day: 2,
        title: "Historiography & Trends",
        chapters: [2],
        chapterNames: ["Historiography: Colonial vs Nationalist vs Marxist views"],
        phase: 1,
        mcqCount: 20,
        date: "2026-03-06",
        isAssessmentDay: false
    },
    {
        day: 3,
        title: "Nature of Sources",
        chapters: [3],
        chapterNames: ["Sources: Archaeology, Epigraphy, Numismatics, Literature"],
        phase: 1,
        mcqCount: 30,
        date: "2026-03-07",
        isAssessmentDay: false
    },

    // Phase 2: Vedic Age & Rise of States (Mod 4-7)
    {
        day: 4,
        title: "Geographical & Ecological Setting",
        chapters: [4],
        chapterNames: ["Geography: Impact of Mountains, Rivers, and Flora/Fauna"],
        phase: 2,
        mcqCount: 30,
        date: "2026-03-08",
        isAssessmentDay: false
    },
    {
        day: 5,
        title: "Palaeolithic & Mesolithic Eras",
        chapters: [5],
        chapterNames: ["Palaeolithic: Biological evolution and early hunter-gatherers"],
        phase: 2,
        mcqCount: 40,
        date: "2026-03-09",
        isAssessmentDay: false
    },
    {
        day: 6,
        title: "Neolithic & Chalcolithic",
        chapters: [6],
        chapterNames: ["Neolithic: First farmers and the transition to Copper"],
        phase: 2,
        mcqCount: 40,
        date: "2026-03-10",
        isAssessmentDay: false
    },
    {
        day: 7,
        title: "Harappan/Indus Valley Civilization",
        chapters: [7],
        chapterNames: ["Harappan: Town Planning, Trade, Religion, and Decline"],
        phase: 2,
        mcqCount: 70,
        date: "2026-03-11",
        isAssessmentDay: false
    },

    // Phase 3: Empires, Trade & Southern India (Mod 8-11)
    {
        day: 8,
        title: "Vedic Age (Early & Later)",
        chapters: [8],
        chapterNames: ["Vedic: Rigvedic Society vs Later Vedic Transition"],
        phase: 3,
        mcqCount: 50,
        date: "2026-03-12",
        isAssessmentDay: false
    },
    {
        day: 9,
        title: "Jainism & Buddhism",
        chapters: [9],
        chapterNames: ["Rise of Heterodox Sects: Philosophy and Impact"],
        phase: 3,
        mcqCount: 60,
        date: "2026-03-13",
        isAssessmentDay: false
    },
    {
        day: 10,
        title: "Mahajanapadas & Magadha",
        chapters: [10],
        chapterNames: ["16 States: Persian/Greek Invasions and Magadha Hegemony"],
        phase: 3,
        mcqCount: 50,
        date: "2026-03-14",
        isAssessmentDay: false
    },
    {
        day: 11,
        title: "The Mauryan Empire",
        chapters: [11],
        chapterNames: ["Ashoka: Dhamma, Bureaucracy, and Administration"],
        phase: 3,
        mcqCount: 70,
        date: "2026-03-15",
        isAssessmentDay: false
    },

    // Phase 4: Golden Age & Transition (Mod 12-15)
    {
        day: 12,
        title: "Post-Mauryas & Foreign Contacts",
        chapters: [12],
        chapterNames: ["Post-Mauryas: Shungas, Kushans, and Silk Road"],
        phase: 4,
        mcqCount: 50,
        date: "2026-03-16",
        isAssessmentDay: false
    },
    {
        day: 13,
        title: "Sangam Age & Deep South",
        chapters: [13],
        chapterNames: ["Sangam: Literature, Society, and Satavahanas"],
        phase: 4,
        mcqCount: 50,
        date: "2026-03-17",
        isAssessmentDay: false
    },
    {
        day: 14,
        title: "The Gupta Age",
        chapters: [14],
        chapterNames: ["Guptas: Administration, Art, and Science Legacy"],
        phase: 4,
        mcqCount: 70,
        date: "2026-03-18",
        isAssessmentDay: false
    },
    {
        day: 15,
        title: "Post-Guptas & Final Assessment",
        chapters: [15],
        chapterNames: ["Post-Guptas: Harsha, Chalukyas, and Pallavas"],
        phase: 4,
        mcqCount: 100,
        date: "2026-03-19",
        isAssessmentDay: true
    }
];

export const getAncientDaySchedule = (day: number = 1) => {
    return ANCIENT_SCHEDULE.find(s => s.day === day) || ANCIENT_SCHEDULE[0];
};
