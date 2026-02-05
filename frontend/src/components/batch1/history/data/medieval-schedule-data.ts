import { SpectrumDaySchedule } from "./spectrum-schedule-data";

export const MEDIEVAL_SCHEDULE: SpectrumDaySchedule[] = [
    // Phase 1: Early Medieval & Delhi Sultanate (Days 1-5)
    {
        day: 1,
        phase: 1,
        title: "Early Medieval India & Tripartite Struggle",
        chapters: [1],
        chapterNames: ["The Palas, Pratiharas, and Rashtrakutas"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-06"
    },
    {
        day: 2,
        phase: 1,
        title: "Delhi Sultanate: Slave & Khilji Dynasties",
        chapters: [2],
        chapterNames: ["Foundation of the Sultanate & Alauddin Khilji's Reforms"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-07"
    },
    {
        day: 3,
        phase: 1,
        title: "Delhi Sultanate: Tughlaqs to Lodis",
        chapters: [3],
        chapterNames: ["M.B. Tughlaq's Experiments & Firoz Shah's Administration"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-08"
    },
    {
        day: 4,
        phase: 1,
        title: "Bhakti Movement & Sufism",
        chapters: [4],
        chapterNames: ["Teachings of Kabir, Nanak, and Sufi Silsilas"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-09"
    },
    {
        day: 5,
        phase: 1,
        title: "ASSESSMENT DAY - PHASE 1",
        chapters: [1, 2, 3, 4],
        chapterNames: ["Consolidated Review: Early Medieval & Sultanate"],
        mcqCount: 100,
        isAssessmentDay: true,
        date: "2026-02-10"
    },

    // Phase 2: Vijayanagar, Mughals & Administration (Days 6-10)
    {
        day: 6,
        phase: 2,
        title: "Vijayanagar & Bahmani Kingdoms",
        chapters: [5],
        chapterNames: ["Krishna Deva Raya & Deccan Sultanates"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-11"
    },
    {
        day: 7,
        phase: 2,
        title: "The Mughal Empire: Rise & Akbar",
        chapters: [6],
        chapterNames: ["Babur, Humayun & Akbar's Consolidation"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-12"
    },
    {
        day: 8,
        phase: 2,
        title: "Mughal Zenith: Jahangir to Aurangzeb",
        chapters: [7],
        chapterNames: ["Golden Age of Architecture & Decline under Aurangzeb"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-13"
    },
    {
        day: 9,
        phase: 2,
        title: "Mughal Administration & Revenue",
        chapters: [8],
        chapterNames: ["Mansabdari System, Jagirdari & Dahsala System"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-14"
    },
    {
        day: 10,
        phase: 2,
        title: "ASSESSMENT DAY - PHASE 2",
        chapters: [5, 6, 7, 8],
        chapterNames: ["Consolidated Review: Mughals & Vijayanagar"],
        mcqCount: 100,
        isAssessmentDay: true,
        date: "2026-02-15"
    },

    // Phase 3: Marathas, Culture & Late Mughals (Days 11-15)
    {
        day: 11,
        phase: 3,
        title: "The Maratha Empire",
        chapters: [9],
        chapterNames: ["Shivaji's Swarajya & The Rise of Peshwas"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-16"
    },
    {
        day: 12,
        phase: 3,
        title: "Medieval Art, Architecture & Paintings",
        chapters: [10],
        chapterNames: ["Indo-Islamic Architecture & Mughal Paintings"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-17"
    },
    {
        day: 13,
        phase: 3,
        title: "Medieval Literature & Philosophy",
        chapters: [11],
        chapterNames: ["Persian & Vernacular Works of Medieval India"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-18"
    },
    {
        day: 14,
        phase: 3,
        title: "PREPARATORY LEAVE - FULL MOCK REVISION",
        chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        chapterNames: ["Complete Medieval Syllabus Review"],
        mcqCount: 0,
        isAssessmentDay: false,
        date: "2026-02-19"
    },
    {
        day: 15,
        phase: 3,
        title: "GRAND ASSESSMENT: MEDIEVAL HISTORY",
        chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        chapterNames: ["Full Medieval Syllabus Mock (UPSC Standard)"],
        mcqCount: 100,
        isAssessmentDay: true,
        date: "2026-02-20"
    },
];

export const MEDIEVAL_PHASES = [
    { title: "Sultanate & Regional Powers", range: "Days 1-5" },
    { title: "Mughal Empire & Admin", range: "Days 6-10" },
    { title: "Marathas & Cultural Legacy", range: "Days 11-15" }
];

export function getMedievalDaySchedule(day: number): SpectrumDaySchedule | undefined {
    return MEDIEVAL_SCHEDULE.find(s => s.day === day);
}
