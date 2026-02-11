
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
        chapterNames: ["Paleolithic, Mesolithic, Neolithic", "Harappan Town Planning"],
        phase: 1
    },
    {
        day: 2,
        title: "Vedic Age & Mahajanapadas",
        chapters: [3, 4],
        chapterNames: ["Early vs Later Vedic Society", "Rise of Magadha"],
        phase: 1
    },
    {
        day: 3,
        title: "Buddhism & Jainism",
        chapters: [5],
        chapterNames: ["Teachings of Buddha & Mahavira", "Buddhist Councils"],
        phase: 1
    },
    {
        day: 4,
        title: "The Mauryan Empire",
        chapters: [6],
        chapterNames: ["Chandragupta Maurya, Ashoka's Dhamma"],
        phase: 1
    },
    {
        day: 5,
        title: "Post-Mauryan India",
        chapters: [7],
        chapterNames: ["Shungas, Kanvas, Indo-Greeks"],
        phase: 1
    },
    {
        day: 6,
        title: "Gupta Empire",
        chapters: [8],
        chapterNames: ["Samudragupta, Chandragupta II, Golden Age"],
        phase: 2
    },
    {
        day: 7,
        title: "Post-Gupta Era: Harsha",
        chapters: [9],
        chapterNames: ["Harshavardhana, Kannauj Assembly"],
        phase: 2
    },
    {
        day: 8,
        title: "Sangam Age (South India)",
        chapters: [10],
        chapterNames: ["Cheras, Cholas, Pandyas, Sangam Literature"],
        phase: 2
    },
    {
        day: 9,
        title: "Pallavas & Chalukyas",
        chapters: [11],
        chapterNames: ["Art & Architecture, Pulakeshin II"],
        phase: 2
    },
    {
        day: 10,
        title: "Rashtrakutas & Imperial Cholas",
        chapters: [12],
        chapterNames: ["Kailash Temple, Brihadisvara Temple"],
        phase: 3
    },
    {
        day: 11,
        title: "Ancient Indian Art & Architecture",
        chapters: [13],
        chapterNames: ["Cave Temples, Stupas, Temple Styles (Nagara, Dravida)"],
        phase: 3
    },
    {
        day: 12,
        title: "Ancient Indian Literature & Science",
        chapters: [14],
        chapterNames: ["Vedas, Upanishads, Aryabhatta, Sushruta"],
        phase: 3
    },
    {
        day: 13,
        title: "Philosophy Schools (Shad Darshana)",
        chapters: [15],
        chapterNames: ["Sankhya, Yoga, Nyaya, Vaisheshika, Mimamsa, Vedanta"],
        phase: 3
    },
    {
        day: 14,
        title: "Foreign Travelers in Ancient India",
        chapters: [16],
        chapterNames: ["Megasthenes, Fa-Hien, Hiuen Tsang"],
        phase: 3
    },
    {
        day: 15,
        title: "Pre-Medieval Transition",
        chapters: [17],
        chapterNames: ["Feudalism, Rise of Rajputs"],
        phase: 3
    }
];

export const getAncientDaySchedule = (day: number = 1) => {
    return ANCIENT_SCHEDULE.find(s => s.day === day) || ANCIENT_SCHEDULE[0];
};
