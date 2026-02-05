import { SpectrumDaySchedule } from "./spectrum-schedule-data";

export const ANCIENT_SCHEDULE: SpectrumDaySchedule[] = [
    // Phase 1: Prehistoric to Vedic (Days 1-5)
    {
        day: 1,
        phase: 1,
        title: "Sources & Prehistoric India",
        chapters: [1],
        chapterNames: ["Palaeolithic, Mesolithic & Neolithic Cultures"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-06"
    },
    {
        day: 2,
        phase: 1,
        title: "Indus Valley Civilization (IVC)",
        chapters: [2],
        chapterNames: ["Urban Planning, Society & Economy of IVC"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-07"
    },
    {
        day: 3,
        phase: 1,
        title: "Early Vedic Age",
        chapters: [3],
        chapterNames: ["Rigvedic Society, Religion & Political Org"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-08"
    },
    {
        day: 4,
        phase: 1,
        title: "Later Vedic Age & Upanishads",
        chapters: [4],
        chapterNames: ["Transition to Varna System & Vedic Philosophy"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-09"
    },
    {
        day: 5,
        phase: 1,
        title: "ASSESSMENT DAY - PHASE 1",
        chapters: [1, 2, 3, 4],
        chapterNames: ["Consolidated Review: Prehistoric to Vedic"],
        mcqCount: 100,
        isAssessmentDay: true,
        date: "2026-02-10"
    },

    // Phase 2: Mahajanapadas to Mauryas (Days 6-10)
    {
        day: 6,
        phase: 2,
        title: "Mahajanapadas & Heterodox Sects",
        chapters: [5],
        chapterNames: ["Rise of Magadha, Buddhism & Jainism Foundation"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-11"
    },
    {
        day: 7,
        phase: 2,
        title: "Buddhism & Jainism: In-Depth",
        chapters: [6],
        chapterNames: ["Philosophy, Councils & Spread of Buddhism/Jainism"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-12"
    },
    {
        day: 8,
        phase: 2,
        title: "Mauryan Empire: Consolidation",
        chapters: [7],
        chapterNames: ["Chandragupta, Arthashastra & Mauryan Admin"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-13"
    },
    {
        day: 9,
        phase: 2,
        title: "Ashoka & Mauryan Decline",
        chapters: [8],
        chapterNames: ["Dhamma, Edicts & Mauryan Pillar Art"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-14"
    },
    {
        day: 10,
        phase: 2,
        title: "ASSESSMENT DAY - PHASE 2",
        chapters: [5, 6, 7, 8],
        chapterNames: ["Consolidated Review: Mahajanapadas to Mauryas"],
        mcqCount: 100,
        isAssessmentDay: true,
        date: "2026-02-15"
    },

    // Phase 3: Post-Mauryan to Post-Gupta (Days 11-15)
    {
        day: 11,
        phase: 3,
        title: "Post-Mauryan Period & Kushans",
        chapters: [9],
        chapterNames: ["Indo-Greeks, Shakas & The Silk Route Trade"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-16"
    },
    {
        day: 12,
        phase: 3,
        title: "Satavahanas & Sangam Age",
        chapters: [10],
        chapterNames: ["Regional Powers of South India & Sangam Literature"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-17"
    },
    {
        day: 13,
        phase: 3,
        title: "The Gupta Empire: Golden Age",
        chapters: [11],
        chapterNames: ["Gupta Admin, Science, Culture & Navratnas"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-18"
    },
    {
        day: 14,
        phase: 3,
        title: "Post-Gupta Period & Regional States",
        chapters: [12],
        chapterNames: ["Harshavardhana, Chalukyas & Pallavas"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-19"
    },
    {
        day: 15,
        phase: 3,
        title: "GRAND ASSESSMENT: ANCIENT HISTORY",
        chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        chapterNames: ["Full Ancient Syllabus Mock (UPSC Standard)"],
        mcqCount: 100,
        isAssessmentDay: true,
        date: "2026-02-20"
    },
];

export const ANCIENT_PHASES = [
    { title: "Vedic & Prehistoric Foundation", range: "Days 1-5" },
    { title: "Kingdoms & Ideologies", range: "Days 6-10" },
    { title: "Imperial India & Evolution", range: "Days 11-15" }
];

export function getAncientDaySchedule(day: number): SpectrumDaySchedule | undefined {
    return ANCIENT_SCHEDULE.find(s => s.day === day);
}
