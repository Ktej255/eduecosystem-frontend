import { ModuleId } from './polity-types';

export interface ChapterSchedule {
    chapter: number;
    part: ModuleId;
    topic: string;
    pages: number;
    slots: number;
    comparativeWith?: number; // The chapter ID it overlaps with
    group?: string; // Thematic Group Name
}

export const SLOTS_PER_DAY = 6;

export const LAXMIKANTH_CHAPTERS: ChapterSchedule[] = [
    // MODULE 1: The Mirror Executives (High Interlinking)
    { chapter: 18, part: 'III', topic: "President", pages: 30, slots: 6, group: "The Mirror Executives" },
    { chapter: 30, part: 'IV', topic: "Governor", pages: 25, slots: 5, comparativeWith: 18, group: "The Mirror Executives" },
    { chapter: 20, part: 'III', topic: "Prime Minister", pages: 12, slots: 2, group: "The Mirror Executives" },
    { chapter: 31, part: 'IV', topic: "Chief Minister", pages: 10, slots: 2, comparativeWith: 20, group: "The Mirror Executives" },
    { chapter: 21, part: 'III', topic: "Central Council of Ministers", pages: 10, slots: 2, group: "The Mirror Executives" },
    { chapter: 32, part: 'IV', topic: "State Council of Ministers", pages: 10, slots: 2, comparativeWith: 21, group: "The Mirror Executives" },
    { chapter: 19, part: 'III', topic: "Vice-President", pages: 10, slots: 2, group: "The Mirror Executives" },

    // MODULE 2: The Legislative Machinery
    { chapter: 23, part: 'III', topic: "Parliament", pages: 45, slots: 9, group: "The Legislative Machinery" },
    { chapter: 33, part: 'IV', topic: "State Legislature", pages: 35, slots: 7, comparativeWith: 23, group: "The Legislative Machinery" },
    { chapter: 24, part: 'III', topic: "Parliamentary Committees", pages: 20, slots: 4, group: "The Legislative Machinery" },
    { chapter: 22, part: 'III', topic: "Cabinet Committees", pages: 8, slots: 2, group: "The Legislative Machinery" },
    { chapter: 25, part: 'III', topic: "Indian Parliamentary Group", pages: 8, slots: 2, group: "The Legislative Machinery" },

    // MODULE 3: The Integrated Judiciary
    { chapter: 26, part: 'III', topic: "Supreme Court", pages: 25, slots: 5, group: "The Integrated Judiciary" },
    { chapter: 34, part: 'IV', topic: "High Court", pages: 20, slots: 4, comparativeWith: 26, group: "The Integrated Judiciary" },
    { chapter: 35, part: 'IV', topic: "Subordinate Courts", pages: 10, slots: 2, group: "The Integrated Judiciary" },
    { chapter: 36, part: 'IV', topic: "Tribunals", pages: 12, slots: 2, group: "The Integrated Judiciary" },
    { chapter: 27, part: 'III', topic: "Judicial Review", pages: 10, slots: 2, group: "The Integrated Judiciary" },
    { chapter: 28, part: 'III', topic: "Judicial Activism", pages: 8, slots: 2, group: "The Integrated Judiciary" },
    { chapter: 29, part: 'III', topic: "Public Interest Litigation", pages: 10, slots: 2, group: "The Integrated Judiciary" },
    { chapter: 37, part: 'IV', topic: "Consumer Commissions", pages: 10, slots: 2, group: "The Integrated Judiciary" },
    { chapter: 38, part: 'IV', topic: "Lok Adalats and Other Courts", pages: 10, slots: 2, group: "The Integrated Judiciary" },

    // MODULE 4: The Federal Axis
    { chapter: 13, part: 'II', topic: "Parliamentary System", pages: 12, slots: 2, group: "The Federal Axis" },
    { chapter: 14, part: 'II', topic: "Federal System", pages: 12, slots: 2, group: "The Federal Axis" },
    { chapter: 15, part: 'II', topic: "Centre-State Relations", pages: 25, slots: 5, group: "The Federal Axis" },
    { chapter: 16, part: 'II', topic: "Inter-State Relations", pages: 12, slots: 2, group: "The Federal Axis" },
    { chapter: 17, part: 'II', topic: "Emergency Provisions", pages: 20, slots: 4, group: "The Federal Axis" },
    { chapter: 47, part: 'VII', topic: "Goods and Services Tax Council", pages: 8, slots: 2, group: "The Federal Axis" },
    { chapter: 56, part: 'VIII', topic: "NITI Aayog", pages: 12, slots: 2, group: "The Federal Axis" },
    { chapter: 72, part: 'VIII', topic: "North Eastern Council", pages: 6, slots: 1, group: "The Federal Axis" },

    // MODULE 5: The Philosophy (The Foundation)
    { chapter: 1, part: 'I', topic: "Historical Background", pages: 15, slots: 3, group: "The Philosophy" },
    { chapter: 2, part: 'I', topic: "Making of the Constitution", pages: 12, slots: 2, group: "The Philosophy" },
    { chapter: 3, part: 'I', topic: "Concept of the Constitution", pages: 8, slots: 2, group: "The Philosophy" },
    { chapter: 4, part: 'I', topic: "Salient Features of the Constitution", pages: 15, slots: 3, group: "The Philosophy" },
    { chapter: 5, part: 'I', topic: "Preamble of the Constitution", pages: 10, slots: 2, group: "The Philosophy" },
    { chapter: 6, part: 'I', topic: "Union and Its Territory", pages: 10, slots: 2, group: "The Philosophy" },
    { chapter: 7, part: 'I', topic: "Citizenship", pages: 12, slots: 2, group: "The Philosophy" },
    { chapter: 8, part: 'I', topic: "Fundamental Rights", pages: 40, slots: 8, group: "The Philosophy" },
    { chapter: 9, part: 'I', topic: "Directive Principles of State Policy", pages: 15, slots: 3, group: "The Philosophy" },
    { chapter: 10, part: 'I', topic: "Fundamental Duties", pages: 6, slots: 1, group: "The Philosophy" },
    { chapter: 11, part: 'I', topic: "Amendment of the Constitution", pages: 10, slots: 2, group: "The Philosophy" },
    { chapter: 12, part: 'I', topic: "Basic Structure of the Constitution", pages: 10, slots: 2, group: "The Philosophy" },

    // MODULE 6: Constitutional Bodies
    { chapter: 43, part: 'VII', topic: "Election Commission", pages: 12, slots: 2, group: "Constitutional Bodies" },
    { chapter: 52, part: 'VII', topic: "Comptroller and Auditor General of India", pages: 12, slots: 2, group: "Constitutional Bodies" },
    { chapter: 44, part: 'VII', topic: "Union Public Service Commission", pages: 12, slots: 2, group: "Constitutional Bodies" },
    { chapter: 45, part: 'VII', topic: "State Public Service Commission", pages: 8, slots: 2, comparativeWith: 44, group: "Constitutional Bodies" },
    { chapter: 46, part: 'VII', topic: "Finance Commission", pages: 10, slots: 2, group: "Constitutional Bodies" },
    { chapter: 48, part: 'VII', topic: "National Commission for SCs", pages: 8, slots: 2, group: "Constitutional Bodies" },
    { chapter: 49, part: 'VII', topic: "National Commission for STs", pages: 8, slots: 2, group: "Constitutional Bodies" },
    { chapter: 50, part: 'VII', topic: "National Commission for BCs", pages: 8, slots: 2, group: "Constitutional Bodies" },
    { chapter: 51, part: 'VII', topic: "Special Officer for Linguistic Minorities", pages: 5, slots: 1, group: "Constitutional Bodies" },
    { chapter: 53, part: 'VII', topic: "Attorney General of India", pages: 10, slots: 2, group: "Constitutional Bodies" },
    { chapter: 54, part: 'VII', topic: "Advocate General of the State", pages: 8, slots: 2, comparativeWith: 53, group: "Constitutional Bodies" },

    // MODULE 7: Local & Special Governance
    { chapter: 39, part: 'V', topic: "Panchayati Raj", pages: 25, slots: 5, group: "Local & Special Governance" },
    { chapter: 40, part: 'V', topic: "Municipalities", pages: 20, slots: 4, group: "Local & Special Governance" },
    { chapter: 73, part: 'IX', topic: "Co-operative Societies", pages: 8, slots: 2, group: "Local & Special Governance" },
    { chapter: 41, part: 'VI', topic: "Union Territories", pages: 10, slots: 2, group: "Local & Special Governance" },
    { chapter: 42, part: 'VI', topic: "Scheduled and Tribal Areas", pages: 10, slots: 2, group: "Local & Special Governance" },
    { chapter: 78, part: 'IX', topic: "Special Provisions for Some States", pages: 12, slots: 2, group: "Local & Special Governance" },

    // MODULE 8: Non-Constitutional Bodies
    { chapter: 57, part: 'VIII', topic: "National Human Rights Commission", pages: 10, slots: 2, group: "Non-Constitutional Bodies" },
    { chapter: 58, part: 'VIII', topic: "State Human Rights Commission", pages: 8, slots: 2, comparativeWith: 57, group: "Non-Constitutional Bodies" },
    { chapter: 59, part: 'VIII', topic: "National Commission for Women", pages: 8, slots: 2, group: "Non-Constitutional Bodies" },
    { chapter: 60, part: 'VIII', topic: "National Commission for Protection of Child Rights", pages: 8, slots: 2, group: "Non-Constitutional Bodies" },
    { chapter: 61, part: 'VIII', topic: "National Commission for Minorities", pages: 8, slots: 2, group: "Non-Constitutional Bodies" },
    { chapter: 64, part: 'VIII', topic: "Central Vigilance Commission", pages: 10, slots: 2, group: "Non-Constitutional Bodies" },
    { chapter: 65, part: 'VIII', topic: "Central Bureau of Investigation", pages: 12, slots: 2, group: "Non-Constitutional Bodies" },
    { chapter: 66, part: 'VIII', topic: "Lokpal and Lokayuktas", pages: 15, slots: 3, group: "Non-Constitutional Bodies" },
    { chapter: 67, part: 'VIII', topic: "National Investigation Agency", pages: 8, slots: 2, group: "Non-Constitutional Bodies" },
    { chapter: 68, part: 'VIII', topic: "National Disaster Management Authority", pages: 8, slots: 2, group: "Non-Constitutional Bodies" },
    { chapter: 62, part: 'VIII', topic: "Central Information Commission", pages: 10, slots: 2, group: "Non-Constitutional Bodies" },
    { chapter: 63, part: 'VIII', topic: "State Information Commission", pages: 8, slots: 2, comparativeWith: 62, group: "Non-Constitutional Bodies" },
    { chapter: 69, part: 'VIII', topic: "Bar Council of India", pages: 6, slots: 1, group: "Non-Constitutional Bodies" },
    { chapter: 70, part: 'VIII', topic: "Law Commission of India", pages: 8, slots: 2, group: "Non-Constitutional Bodies" },

    // MODULE 9: Political Dynamics & Other Dimensions
    { chapter: 79, part: 'X', topic: "Political Parties", pages: 12, slots: 2, group: "Political Dynamics" },
    { chapter: 80, part: 'X', topic: "Role of Regional Parties", pages: 10, slots: 2, group: "Political Dynamics" },
    { chapter: 81, part: 'X', topic: "Elections", pages: 15, slots: 3, group: "Political Dynamics" },
    { chapter: 82, part: 'X', topic: "Election Laws", pages: 12, slots: 2, group: "Political Dynamics" },
    { chapter: 83, part: 'X', topic: "Electoral Reforms", pages: 15, slots: 3, group: "Political Dynamics" },
    { chapter: 84, part: 'X', topic: "Voting Behaviour", pages: 10, slots: 2, group: "Political Dynamics" },
    { chapter: 86, part: 'X', topic: "Anti-Defection Law", pages: 12, slots: 2, group: "Political Dynamics" },
    { chapter: 87, part: 'X', topic: "Pressure Groups", pages: 10, slots: 2, group: "Political Dynamics" },
    { chapter: 88, part: 'X', topic: "National Integration", pages: 10, slots: 2, group: "Political Dynamics" },
    { chapter: 89, part: 'X', topic: "Foreign Policy", pages: 12, slots: 2, group: "Political Dynamics" },

    // MODULE 10: Legal & Miscellaneous
    { chapter: 71, part: 'VIII', topic: "Delimitation Commission of India", pages: 8, slots: 2, group: "Legal & Miscellaneous" },
    { chapter: 74, part: 'IX', topic: "Official Language", pages: 12, slots: 2, group: "Legal & Miscellaneous" },
    { chapter: 75, part: 'IX', topic: "Public Services", pages: 15, slots: 3, group: "Legal & Miscellaneous" },
    { chapter: 76, part: 'IX', topic: "Rights and Liabilities of the Government", pages: 10, slots: 2, group: "Legal & Miscellaneous" },
    { chapter: 77, part: 'IX', topic: "Special Provisions Relating to Certain Classes", pages: 12, slots: 2, group: "Legal & Miscellaneous" },
    { chapter: 90, part: 'XI', topic: "National Commission to Review the Working of the Constitution", pages: 15, slots: 3, group: "Legal & Miscellaneous" },

    // MODULE 11: Judgements & World Constitutions
    { chapter: 91, part: 'XII', topic: "Landmark Judgements and Their Impact", pages: 20, slots: 4, group: "Judgements & World Constitutions" },
    { chapter: 92, part: 'XII', topic: "Judgements Expanding the Scope of Article 21", pages: 10, slots: 2, group: "Judgements & World Constitutions" },
    { chapter: 93, part: 'XII', topic: "Judgements Relating to the Amendments", pages: 12, slots: 2, group: "Judgements & World Constitutions" },
    { chapter: 94, part: 'XII', topic: "Important Doctrines of Constitutional Interpretation", pages: 15, slots: 3, group: "Judgements & World Constitutions" },
    { chapter: 95, part: 'XIII', topic: "World Constitutions", pages: 30, slots: 5, group: "Judgements & World Constitutions" },
];

export interface WeeklySchedule {
    week: number;
    days: {
        sunday: ChapterSchedule[]; // Revision Day
        monday: ChapterSchedule[];
        tuesday: ChapterSchedule[];
        wednesday: ChapterSchedule[];
        thursday: ChapterSchedule[];
        friday: ChapterSchedule[];
        saturday: string[]; // MCQ Day
    };
    totalPages: number;
    totalSlots: number;
}

export function generateWeeklySchedule(): WeeklySchedule[] {
    const schedules: WeeklySchedule[] = [];
    let currentChapterIndex = 0;
    let weekNumber = 1;
    let remainingSlotsFromPrevious = 0;
    let currentChapter: ChapterSchedule | null = null;
    const scheduledChapterIds = new Set<number>();

    // Initial chapters for Jan 11 Revision (Sunday) as requested
    const JAN_11_REVISION_CHAPTERS: ChapterSchedule[] = [
        { chapter: 7, part: 'I', topic: "Citizenship", pages: 12, slots: 2 },
        { chapter: 8, part: 'I', topic: "Fundamental Rights", pages: 75, slots: 13 },
        { chapter: 9, part: 'I', topic: "Directive Principles of State Policy", pages: 15, slots: 3 },
        { chapter: 10, part: 'I', topic: "Fundamental Duties", pages: 6, slots: 1 },
    ];

    let previousWeekChapters: ChapterSchedule[] = [];

    while (currentChapterIndex < LAXMIKANTH_CHAPTERS.length || remainingSlotsFromPrevious > 0) {
        const week: WeeklySchedule = {
            week: weekNumber++,
            days: {
                sunday: weekNumber === 2 ? JAN_11_REVISION_CHAPTERS : [], // Initial Sunday override
                monday: [],
                tuesday: [],
                wednesday: [],
                thursday: [],
                friday: [],
                saturday: ["Weekly Mock Test (Paper 1)", "Cumulative Mock Test (Paper 2)"],
            },
            totalPages: 0,
            totalSlots: 0,
        };

        // Sunday revision from Week 2 onwards uses previous week's chapters
        if (week.week > 1) {
            week.days.sunday = previousWeekChapters;
        }

        const studyDays: (keyof typeof week.days)[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
        const currentWeekChapters: ChapterSchedule[] = [];

        for (const day of studyDays) {
            let daySlotsAvailable = SLOTS_PER_DAY;

            while (daySlotsAvailable > 0) {
                if (remainingSlotsFromPrevious <= 0) {
                    if (currentChapterIndex >= LAXMIKANTH_CHAPTERS.length) break;

                    const rawChapter = LAXMIKANTH_CHAPTERS[currentChapterIndex++];
                    currentChapter = { ...rawChapter };

                    // Comparative study time reduction
                    if (currentChapter.comparativeWith && scheduledChapterIds.has(currentChapter.comparativeWith)) {
                        currentChapter.slots = Math.ceil(currentChapter.slots / 2);
                        currentChapter.pages = Math.ceil(currentChapter.pages / 2);
                        currentChapter.topic += " (Smart Savings)";
                    }

                    remainingSlotsFromPrevious = currentChapter.slots;
                    scheduledChapterIds.add(currentChapter.chapter);
                }

                if (!currentChapter) break;

                const slotsToTake = Math.min(daySlotsAvailable, remainingSlotsFromPrevious);

                // Add to daily list
                const existingInDay = (week.days[day] as ChapterSchedule[]).find(c => c.chapter === currentChapter!.chapter);
                if (!existingInDay) {
                    (week.days[day] as ChapterSchedule[]).push({
                        ...currentChapter,
                        slots: slotsToTake
                    });
                } else {
                    existingInDay.slots += slotsToTake;
                }

                // Collect for revision (deduplicated)
                if (!currentWeekChapters.find(c => c.chapter === currentChapter!.chapter)) {
                    currentWeekChapters.push({ ...currentChapter, slots: currentChapter.slots, pages: currentChapter.pages });
                }

                daySlotsAvailable -= slotsToTake;
                remainingSlotsFromPrevious -= slotsToTake;

                const pagesRatio = slotsToTake / currentChapter.slots;
                week.totalPages += Math.round(currentChapter.pages * pagesRatio);
                week.totalSlots += slotsToTake;
            }
        }

        // Store this week's chapters for next week's Sunday Revision
        previousWeekChapters = currentWeekChapters;

        if (week.totalSlots > 0 || week.days.sunday.length > 0) {
            schedules.push(week);
        }
    }

    return schedules;
}
