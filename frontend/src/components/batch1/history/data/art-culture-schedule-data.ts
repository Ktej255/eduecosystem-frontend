import { SpectrumDaySchedule } from "./spectrum-schedule-data";

export const ART_CULTURE_SCHEDULE: SpectrumDaySchedule[] = [
    // Phase 1: Architecture & Sculpture (Days 1-5)
    {
        day: 1,
        phase: 1,
        title: "Harappan & Mauryan Architecture",
        chapters: [1],
        chapterNames: ["Indus Valley Art & Mauryan Rock-cut Pillars"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-06"
    },
    {
        day: 2,
        phase: 1,
        title: "Post-Mauryan Sculpture Schools",
        chapters: [2],
        chapterNames: ["Gandhara, Mathura & Amravati Schools of Art"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-07"
    },
    {
        day: 3,
        phase: 1,
        title: "Gupta Art & Temple Architecture (Nagara)",
        chapters: [3],
        chapterNames: ["Evolution of Hindu Temples & Nagara Style"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-08"
    },
    {
        day: 4,
        phase: 1,
        title: "South Indian Temple Styles (Dravida)",
        chapters: [4],
        chapterNames: ["Pallava, Chola & Dravidian Architecture"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-09"
    },
    {
        day: 5,
        phase: 1,
        title: "ASSESSMENT DAY - PHASE 1",
        chapters: [1, 2, 3, 4],
        chapterNames: ["Consolidated Review: Architecture & Sculpture"],
        mcqCount: 100,
        isAssessmentDay: true,
        date: "2026-02-10"
    },

    // Phase 2: Performing Arts & Paintings (Days 6-10)
    {
        day: 6,
        phase: 2,
        title: "Indian Classical & Folk Dances",
        chapters: [5],
        chapterNames: ["8 Classical Dances & Major Folk Traditions"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-11"
    },
    {
        day: 7,
        phase: 2,
        title: "Indian Classical Music Systems",
        chapters: [6],
        chapterNames: ["Hindustani vs Carnatic Music & Rag-Tal"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-12"
    },
    {
        day: 8,
        phase: 2,
        title: "Indian Mural & Miniature Paintings",
        chapters: [7],
        chapterNames: ["Ajanta Mural to Mughal & Rajput Miniatures"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-13"
    },
    {
        day: 9,
        phase: 2,
        title: "Puppetry, Theatre & Crafts",
        chapters: [8],
        chapterNames: ["Traditional Puppet Forms & Folk Theatre"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-14"
    },
    {
        day: 10,
        phase: 2,
        title: "ASSESSMENT DAY - PHASE 2",
        chapters: [5, 6, 7, 8],
        chapterNames: ["Consolidated Review: Performing Arts & Paintings"],
        mcqCount: 100,
        isAssessmentDay: true,
        date: "2026-02-15"
    },

    // Phase 3: Philosophy, Literature & Heritage (Days 11-15)
    {
        day: 11,
        phase: 3,
        title: "Indian Philosophy (Shad-Darshana)",
        chapters: [9],
        chapterNames: ["Nyaya, Sankhya, Yoga, Vedanta & Heterodox Schools"],
        mcqCount: 60,
        isAssessmentDay: false,
        date: "2026-02-16"
    },
    {
        day: 12,
        phase: 3,
        title: "Ancient & Medieval Literature",
        chapters: [10],
        chapterNames: ["Sanskrit Classics, Sangam & Bhakti Literature"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-17"
    },
    {
        day: 13,
        phase: 3,
        title: "Indian Languages & Calendars",
        chapters: [11],
        chapterNames: ["Classical Languages & Indian Eras (Saka, Vikram)"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-18"
    },
    {
        day: 14,
        phase: 3,
        title: "UNESCO Heritage & Cultural Institutions",
        chapters: [12],
        chapterNames: ["World Heritage Sites & Intangible Cultural Heritage"],
        mcqCount: 50,
        isAssessmentDay: false,
        date: "2026-02-19"
    },
    {
        day: 15,
        phase: 3,
        title: "GRAND ASSESSMENT: ART & CULTURE",
        chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        chapterNames: ["Full Art & Culture Syllabus Mock (UPSC Standard)"],
        mcqCount: 100,
        isAssessmentDay: true,
        date: "2026-02-20"
    },
];

export const ART_CULTURE_PHASES = [
    { title: "Visual Arts & Form", range: "Days 1-5" },
    { title: "Rhythm & Expression", range: "Days 6-10" },
    { title: "Knowledge & Legacy", range: "Days 11-15" }
];

export function getArtCultureDaySchedule(day: number): SpectrumDaySchedule | undefined {
    return ART_CULTURE_SCHEDULE.find(s => s.day === day);
}
