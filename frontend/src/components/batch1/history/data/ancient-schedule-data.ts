
export const ANCIENT_PHASES = [
    {
        id: 1,
        name: "Phase 1: Pre-Mauryan to Mauryan",
        range: "Day 1 - 5",
        description: "Stone Age, IVC, Vedic, Mahajanapadas & Mauryas",
        color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
    },
    {
        id: 2,
        name: "Phase 2: Post-Mauryan Era",
        range: "Day 6 - 10",
        description: "Central Asian Invasions, Satavahanas, Sangam Age",
        color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
    },
    {
        id: 3,
        name: "Phase 3: Gupta & Post-Gupta",
        range: "Day 11 - 15",
        description: "Gupta Golden Age, Harsha, Chalukyas & Pallavas",
        color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
    }
];

export const ANCIENT_SCHEDULE = [
    {
        day: 1,
        title: "Stone Age & Indus Valley Civilization",
        chapters: [1, 2],
        topics: ["Paleolithic, Mesolithic, Neolithic", "Harappan Town Planning"],
        phase: 1
    },
    {
        day: 2,
        title: "Vedic Age & Mahajanapadas",
        chapters: [3, 4],
        topics: ["Early vs Later Vedic Society", "Rise of Magadha"],
        phase: 1
    },
    {
        day: 3,
        title: "Buddhism & Jainism",
        chapters: [5],
        topics: ["Teachings of Buddha & Mahavira", "Buddhist Councils"],
        phase: 1
    },
    {
        day: 4,
        title: "The Mauryan Empire",
        chapters: [6],
        topics: ["Chandragupta Maurya", "Ashoka's Dhamma", "Mauryan Administration"],
        phase: 1
    },
    {
        day: 5,
        title: "Revision: Pre-Mauryan & Mauryan",
        chapters: [1, 2, 3, 4, 5, 6],
        topics: ["Consolidation of Phase 1"],
        phase: 1
    },
    {
        day: 6,
        title: "Post-Mauryan Invasions",
        chapters: [7],
        topics: ["Indo-Greeks", "Shakas", "Kushanas (Kanishka)"],
        phase: 2
    },
    {
        day: 7,
        title: "Satavahanas & Sangam Age",
        chapters: [8, 9],
        topics: ["Satavahana Administration", "Sangam Literature"],
        phase: 2
    },
    {
        day: 8,
        title: "Theme: Ancient Art & Culture",
        chapters: [10],
        topics: ["Gandhara vs Mathura School", "Stupa Architecture"],
        phase: 2
    },
    {
        day: 9,
        title: "Gupta Empire",
        chapters: [11],
        topics: ["Samudragupta", "Chandragupta II", "Golden Age Debate"],
        phase: 3
    },
    {
        day: 10,
        title: "Post-Gupta Period (Harsha)",
        chapters: [12],
        topics: ["Harshavardhana", "Hiuen Tsang's Account"],
        phase: 3
    },
    {
        day: 11,
        title: "Chalukyas & Pallavas",
        chapters: [13],
        topics: ["South Indian Art", "Dravidian Style Temples"],
        phase: 3
    },
    {
        day: 12,
        title: "Ancient Science & Technology",
        chapters: [14],
        topics: ["Aryabhatta", "Varahamihira", "Metallurgy"],
        phase: 3
    },
    {
        day: 13,
        title: "Social Evolution in Ancient India",
        chapters: [15],
        topics: ["Varna System", "Position of Women", "Slavery"],
        phase: 3
    },
    {
        day: 14,
        title: "Revision: Post-Mauryan to Gupta",
        chapters: [7, 8, 9, 11, 12],
        topics: ["Consolidation of Phase 2 & 3"],
        phase: 3
    },
    {
        day: 15,
        title: "Full Syllabus Mock Test",
        chapters: [],
        topics: ["Comprehensive Test on Ancient India"],
        phase: 3
    }
];

export const getAncientDaySchedule = (day: number = 1) => {
    return ANCIENT_SCHEDULE.find(s => s.day === day) || ANCIENT_SCHEDULE[0];
};
