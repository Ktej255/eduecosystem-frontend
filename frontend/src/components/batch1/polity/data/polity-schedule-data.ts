import { ModuleId } from './polity-types';

export interface ChapterSchedule {
    chapter: number;
    part: ModuleId;
    topic: string;
    pages: number;
    slots: number;
    comparativeWith?: number; // The chapter ID it overlaps with
}

export const SLOTS_PER_DAY = 6;

export const LAXMIKANTH_CHAPTERS: ChapterSchedule[] = [
    // INTRODUCTORY BLOCK (Week 1)
    { chapter: 11, part: 'I', topic: "Amendment of the Constitution", pages: 6, slots: 1 },
    { chapter: 12, part: 'I', topic: "Basic Structure of the Constitution", pages: 6, slots: 1 },
    { chapter: 13, part: 'II', topic: "Parliamentary System", pages: 12, slots: 2 },
    { chapter: 14, part: 'II', topic: "Federal System", pages: 12, slots: 2 },
    { chapter: 15, part: 'II', topic: "Centre–State Relations", pages: 32, slots: 6 },
    { chapter: 16, part: 'II', topic: "Inter-State Relations", pages: 12, slots: 2 },
    { chapter: 17, part: 'II', topic: "Emergency Provisions", pages: 20, slots: 4 },
    { chapter: 18, part: 'III', topic: "President", pages: 24, slots: 4 },
    { chapter: 31, part: 'IV', topic: "Governor", pages: 18, slots: 3, comparativeWith: 18 },
    // End of Week 1 approx.

    // WEEK 2 ALIGNMENT (Strictly as per Visual Plan)
    // Monday
    { chapter: 19, part: 'III', topic: "Vice-President", pages: 8, slots: 2 },

    // Monday (part) -> Tuesday -> Wednesday (part)
    // Parliament (ID 22 in subtopics)
    { chapter: 22, part: 'III', topic: "Parliament", pages: 90, slots: 15 },

    // Wednesday (part) -> Thursday (part)
    // State Legislature (ID 36 in subtopics)
    { chapter: 36, part: 'IV', topic: "State Legislature", pages: 36, slots: 6, comparativeWith: 22 },

    // Thursday (part)
    // Parliamentary Committees (ID 23 in subtopics)
    { chapter: 23, part: 'III', topic: "Parliamentary Committees", pages: 22, slots: 4 },

    // Friday
    // Cabinet Committees (ID 21 usually, but creating alias ch 21 for now or using 21 if fits)
    { chapter: 21, part: 'III', topic: "Cabinet Committees", pages: 6, slots: 1 },
    // Supreme Court (ID 26 in subtopics)
    { chapter: 26, part: 'III', topic: "Supreme Court", pages: 24, slots: 4 },
    // High Court (ID 34 in subtopics)
    { chapter: 34, part: 'IV', topic: "High Court", pages: 18, slots: 3, comparativeWith: 26 },

    // Next Modules (Shifted)
    { chapter: 20, part: 'III', topic: "Prime Minister", pages: 8, slots: 2 },
    { chapter: 32, part: 'IV', topic: "Chief Minister", pages: 8, slots: 2, comparativeWith: 20 },
    { chapter: 33, part: 'IV', topic: "State Council of Ministers", pages: 10, slots: 2, comparativeWith: 21 },

    { chapter: 37, part: 'IV', topic: "Subordinate Courts (District)", pages: 12, slots: 2 },
    { chapter: 36, part: 'IV', topic: "Tribunals", pages: 10, slots: 2 },
    { chapter: 28, part: 'III', topic: "Judicial Review", pages: 8, slots: 2 },
    { chapter: 29, part: 'III', topic: "Judicial Activism", pages: 6, slots: 1 },
    { chapter: 30, part: 'IV', topic: "Public Interest Litigation", pages: 10, slots: 2 },

    // MODULE 4: The "Federal Axis" Extensions
    { chapter: 47, part: 'VII', topic: "GST Council", pages: 8, slots: 2 },
    { chapter: 55, part: 'VIII', topic: "NITI Aayog", pages: 14, slots: 3 },

    // MODULE 5: The "Philosophy" Extensions
    { chapter: 9, part: 'I', topic: "Directive Principles of State Policy", pages: 15, slots: 3 },
    { chapter: 10, part: 'I', topic: "Fundamental Duties", pages: 6, slots: 1 },

    // MODULE 6: Constitutional Bodies
    { chapter: 43, part: 'VII', topic: "Election Commission", pages: 12, slots: 2 },
    { chapter: 52, part: 'VII', topic: "Comptroller and Auditor General of India", pages: 12, slots: 2 },
    { chapter: 44, part: 'VII', topic: "UPSC", pages: 12, slots: 2 },
    { chapter: 45, part: 'VII', topic: "SPSC", pages: 8, slots: 2, comparativeWith: 44 },
    { chapter: 46, part: 'VII', topic: "Finance Commission", pages: 8, slots: 2 },
    { chapter: 48, part: 'VII', topic: "National Commission for SCs", pages: 6, slots: 1 },
    { chapter: 49, part: 'VII', topic: "National Commission for STs", pages: 6, slots: 1 },
    { chapter: 50, part: 'VII', topic: "National Commission for BCs", pages: 6, slots: 1 },
    { chapter: 51, part: 'VII', topic: "Special Officer for Linguistic Minorities", pages: 4, slots: 1 },
    { chapter: 53, part: 'VII', topic: "Attorney General of India", pages: 8, slots: 2 },
    { chapter: 54, part: 'VII', topic: "Advocate General of the State", pages: 6, slots: 1, comparativeWith: 53 },

    // MODULE 7: Local & Special Governance
    { chapter: 39, part: 'V', topic: "Panchayati Raj", pages: 30, slots: 5 },
    { chapter: 40, part: 'V', topic: "Municipalities", pages: 18, slots: 3 },
    { chapter: 41, part: 'VI', topic: "Union Territories", pages: 10, slots: 2 },
    { chapter: 42, part: 'VI', topic: "Scheduled and Tribal Areas", pages: 8, slots: 2 },
    { chapter: 38, part: 'IV', topic: "Special Provisions for Some States", pages: 12, slots: 2 },

    // MODULE 8: Current Affairs & Updates (8th Edition Specials)
    { chapter: 94, part: 'XI', topic: "Bharatiya Nyaya Sanhita (Criminal Law Reforms)", pages: 20, slots: 4 },
    { chapter: 95, part: 'XI', topic: "One Nation One Election", pages: 10, slots: 2 },
    { chapter: 92, part: 'XI', topic: "National Commission for Persons with Disabilities", pages: 10, slots: 2 },
    { chapter: 93, part: 'XI', topic: "Model Code of Conduct", pages: 10, slots: 2 },

    // REMAINING CHAPTERS
    { chapter: 56, part: 'VIII', topic: "National Human Rights Commission", pages: 10, slots: 2 },
    { chapter: 57, part: 'VIII', topic: "State Human Rights Commission", pages: 6, slots: 1, comparativeWith: 56 },
    { chapter: 58, part: 'VIII', topic: "Central Information Commission", pages: 8, slots: 2 },
    { chapter: 59, part: 'VIII', topic: "State Information Commission", pages: 6, slots: 1, comparativeWith: 58 },
    { chapter: 60, part: 'VIII', topic: "Central Vigilance Commission", pages: 8, slots: 2 },
    { chapter: 61, part: 'VIII', topic: "Central Bureau of Investigation", pages: 10, slots: 2 },
    { chapter: 62, part: 'VIII', topic: "Lokpal and Lokayuktas", pages: 12, slots: 2 },
    { chapter: 63, part: 'VIII', topic: "National Investigation Agency", pages: 6, slots: 1 },
    { chapter: 64, part: 'VIII', topic: "National Disaster Management Authority", pages: 6, slots: 1 },
    { chapter: 65, part: 'VIII', topic: "National Commission for Women", pages: 6, slots: 1 },
    { chapter: 66, part: 'VIII', topic: "NCPCR", pages: 6, slots: 1 },
    { chapter: 67, part: 'VIII', topic: "National Commission for Minorities", pages: 6, slots: 1 },
    { chapter: 68, part: 'VIII', topic: "Tribunals", pages: 10, slots: 2 },
    { chapter: 69, part: 'VIII', topic: "Law Commission", pages: 6, slots: 1 },
    { chapter: 70, part: 'VIII', topic: "Delimitation Commission", pages: 6, slots: 1 },
    { chapter: 71, part: 'VIII', topic: "Consumer Commissions", pages: 8, slots: 2 },
    { chapter: 72, part: 'IX', topic: "Official Language", pages: 12, slots: 2 },
    { chapter: 73, part: 'IX', topic: "Public Services", pages: 14, slots: 3 },
    { chapter: 74, part: 'IX', topic: "Rights and Liabilities of Government", pages: 10, slots: 2 },
    { chapter: 75, part: 'IX', topic: "Special Provisions for Certain Classes", pages: 12, slots: 2 },
    { chapter: 76, part: 'IX', topic: "Bar Council of India", pages: 6, slots: 1 },
    { chapter: 77, part: 'IX', topic: "Competition Commission of India", pages: 6, slots: 1 },
    { chapter: 79, part: 'X', topic: "Role of Regional Parties", pages: 8, slots: 2 },
    { chapter: 80, part: 'X', topic: "Elections", pages: 14, slots: 3 },
    { chapter: 81, part: 'X', topic: "Election Laws", pages: 10, slots: 2 },
    { chapter: 82, part: 'X', topic: "Electoral Reforms", pages: 12, slots: 2 },
    { chapter: 83, part: 'X', topic: "Voting Behaviour", pages: 8, slots: 2 },
    { chapter: 84, part: 'X', topic: "Anti-Defection Law", pages: 10, slots: 2 },
    { chapter: 85, part: 'X', topic: "Pressure Groups", pages: 8, slots: 2 },
    { chapter: 86, part: 'X', topic: "National Integration", pages: 8, slots: 2 },
    { chapter: 87, part: 'X', topic: "Foreign Policy", pages: 10, slots: 2 },
    { chapter: 88, part: 'X', topic: "Public Policy", pages: 8, slots: 2 },
    { chapter: 89, part: 'XI', topic: "Landmark Judgements and their Impact", pages: 20, slots: 4 },
    { chapter: 90, part: 'XI', topic: "Important Doctrines of Constitutional Interpretation", pages: 12, slots: 2 },
    { chapter: 91, part: 'XI', topic: "World Constitutions comparison", pages: 30, slots: 5 },
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
