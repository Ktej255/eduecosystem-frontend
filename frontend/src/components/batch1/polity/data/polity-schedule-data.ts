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
export const BASE_PAGES_PER_DAY = 18;
export const PACING_GROWTH_RATE = 0.20; // 20% increase
export const PACING_GROWTH_INTERVAL = 4; // Every 4 weeks

// User requested full 95 chapters coverage.
// Based on Laxmikanth standard edition structure + Appendices/Extras
export const LAXMIKANTH_CHAPTERS: ChapterSchedule[] = [
    // PART I: Constitutional Framework
    { chapter: 1, part: 'I', topic: "Historical Background", pages: 15, slots: 3, group: "Foundation" },
    { chapter: 2, part: 'I', topic: "Making of the Constitution", pages: 12, slots: 2, group: "Foundation" },
    { chapter: 3, part: 'I', topic: "Salient Features of the Constitution", pages: 10, slots: 2, group: "Foundation" },
    { chapter: 4, part: 'I', topic: "Preamble of the Constitution", pages: 8, slots: 2, group: "Foundation" },
    { chapter: 5, part: 'I', topic: "Union and Its Territory", pages: 10, slots: 2, group: "Foundation" },
    { chapter: 6, part: 'I', topic: "Citizenship", pages: 12, slots: 2, group: "Foundation" },
    { chapter: 7, part: 'I', topic: "Fundamental Rights", pages: 40, slots: 8, group: "Foundation" },
    { chapter: 8, part: 'I', topic: "Directive Principles of State Policy", pages: 15, slots: 3, group: "Foundation" },
    { chapter: 9, part: 'I', topic: "Fundamental Duties", pages: 6, slots: 1, group: "Foundation" },
    { chapter: 10, part: 'I', topic: "Amendment of the Constitution", pages: 10, slots: 2, group: "Foundation" },
    { chapter: 11, part: 'I', topic: "Basic Structure of the Constitution", pages: 10, slots: 2, group: "Foundation" },
    // PART II: System of Government
    { chapter: 12, part: 'II', topic: "Parliamentary System", pages: 10, slots: 2, group: "System of Government" },
    { chapter: 13, part: 'II', topic: "Federal System", pages: 12, slots: 2, group: "System of Government" },
    { chapter: 14, part: 'II', topic: "Centre-State Relations", pages: 25, slots: 5, group: "System of Government" },
    { chapter: 15, part: 'II', topic: "Inter-State Relations", pages: 12, slots: 2, group: "System of Government" },
    { chapter: 16, part: 'II', topic: "Emergency Provisions", pages: 20, slots: 4, group: "System of Government" },
    // PART III: Central Government
    { chapter: 17, part: 'III', topic: "President", pages: 30, slots: 6, group: "The Mirror Executives" },
    { chapter: 18, part: 'III', topic: "Vice-President", pages: 10, slots: 2, group: "The Mirror Executives" },
    { chapter: 19, part: 'III', topic: "Prime Minister", pages: 12, slots: 2, group: "The Mirror Executives" },
    { chapter: 20, part: 'III', topic: "Central Council of Ministers", pages: 15, slots: 3, group: "The Mirror Executives" },
    { chapter: 21, part: 'III', topic: "Cabinet Committees", pages: 8, slots: 2, group: "Central Government" },
    { chapter: 22, part: 'III', topic: "Parliament", pages: 45, slots: 9, group: "The Legislative Machinery" },
    { chapter: 23, part: 'III', topic: "Parliamentary Committees", pages: 20, slots: 4, group: "The Legislative Machinery" },
    { chapter: 24, part: 'III', topic: "Parliamentary Forums", pages: 8, slots: 2, group: "The Legislative Machinery" },
    { chapter: 25, part: 'III', topic: "Parliamentary Group", pages: 5, slots: 1, group: "The Legislative Machinery" },
    { chapter: 26, part: 'III', topic: "Supreme Court", pages: 25, slots: 5, group: "The Integrated Judiciary" },
    { chapter: 27, part: 'III', topic: "Judicial Review", pages: 8, slots: 2, group: "The Integrated Judiciary" },
    { chapter: 28, part: 'III', topic: "Judicial Activism", pages: 8, slots: 2, group: "The Integrated Judiciary" },
    { chapter: 29, part: 'III', topic: "Public Interest Litigation", pages: 10, slots: 2, group: "The Integrated Judiciary" },
    // PART IV: State Government
    { chapter: 30, part: 'IV', topic: "Governor", pages: 25, slots: 5, comparativeWith: 17, group: "The Mirror Executives" },
    { chapter: 31, part: 'IV', topic: "Chief Minister", pages: 10, slots: 2, comparativeWith: 19, group: "The Mirror Executives" },
    { chapter: 32, part: 'IV', topic: "State Council of Ministers", pages: 10, slots: 2, comparativeWith: 20, group: "The Mirror Executives" },
    { chapter: 33, part: 'IV', topic: "State Legislature", pages: 35, slots: 7, comparativeWith: 22, group: "The Legislative Machinery" },
    { chapter: 34, part: 'IV', topic: "High Court", pages: 20, slots: 4, comparativeWith: 26, group: "The Integrated Judiciary" },
    { chapter: 35, part: 'IV', topic: "Tribunals", pages: 12, slots: 2, group: "The Integrated Judiciary" },
    { chapter: 36, part: 'IV', topic: "Subordinate Courts", pages: 10, slots: 2, group: "The Integrated Judiciary" },
    { chapter: 37, part: 'IV', topic: "Special Provisions for Some States", pages: 15, slots: 3, group: "State Government" },
    // PART V: Local Government
    { chapter: 38, part: 'V', topic: "Panchayati Raj", pages: 25, slots: 5, group: "Local Government" },
    { chapter: 39, part: 'V', topic: "Municipalities", pages: 20, slots: 4, group: "Local Government" },
    // PART VI: UTs and Special Areas
    { chapter: 40, part: 'VI', topic: "Union Territories", pages: 10, slots: 2, group: "Local Government" },
    { chapter: 41, part: 'VI', topic: "Scheduled and Tribal Areas", pages: 10, slots: 2, group: "Local Government" },
    // PART VII: Constitutional Bodies
    { chapter: 42, part: 'VII', topic: "Election Commission", pages: 12, slots: 2, group: "Constitutional Bodies" },
    { chapter: 43, part: 'VII', topic: "Union Public Service Commission", pages: 12, slots: 2, group: "Constitutional Bodies" },
    { chapter: 44, part: 'VII', topic: "State Public Service Commission", pages: 8, slots: 2, comparativeWith: 43, group: "Constitutional Bodies" },
    { chapter: 45, part: 'VII', topic: "Finance Commission", pages: 10, slots: 2, group: "Constitutional Bodies" },
    { chapter: 46, part: 'VII', topic: "Goods and Services Tax Council", pages: 8, slots: 2, group: "Constitutional Bodies" },
    { chapter: 47, part: 'VII', topic: "National Commission for SCs", pages: 8, slots: 2, group: "Constitutional Bodies" },
    { chapter: 48, part: 'VII', topic: "National Commission for STs", pages: 8, slots: 2, group: "Constitutional Bodies" },
    { chapter: 49, part: 'VII', topic: "National Commission for BCs", pages: 8, slots: 2, group: "Constitutional Bodies" },
    { chapter: 50, part: 'VII', topic: "Special Officer for Linguistic Minorities", pages: 5, slots: 1, group: "Constitutional Bodies" },
    { chapter: 51, part: 'VII', topic: "Comptroller and Auditor General", pages: 12, slots: 2, group: "Constitutional Bodies" },
    { chapter: 52, part: 'VII', topic: "Attorney General of India", pages: 10, slots: 2, group: "Constitutional Bodies" },
    { chapter: 53, part: 'VII', topic: "Advocate General of the State", pages: 8, slots: 2, comparativeWith: 52, group: "Constitutional Bodies" },
    // PART VIII: Non-Constitutional Bodies
    { chapter: 54, part: 'VIII', topic: "NITI Aayog", pages: 12, slots: 2, group: "Non-Constitutional Bodies" },
    { chapter: 55, part: 'VIII', topic: "National Human Rights Commission", pages: 10, slots: 2, group: "Non-Constitutional Bodies" },
    { chapter: 56, part: 'VIII', topic: "State Human Rights Commission", pages: 8, slots: 2, comparativeWith: 55, group: "Non-Constitutional Bodies" },
    { chapter: 57, part: 'VIII', topic: "Central Information Commission", pages: 8, slots: 2, group: "Non-Constitutional Bodies" },
    { chapter: 58, part: 'VIII', topic: "State Information Commission", pages: 8, slots: 2, comparativeWith: 57, group: "Non-Constitutional Bodies" },
    { chapter: 59, part: 'VIII', topic: "Central Vigilance Commission", pages: 8, slots: 2, group: "Non-Constitutional Bodies" },
    { chapter: 60, part: 'VIII', topic: "Central Bureau of Investigation", pages: 10, slots: 2, group: "Non-Constitutional Bodies" },
    { chapter: 61, part: 'VIII', topic: "Lokpal and Lokayuktas", pages: 10, slots: 2, group: "Non-Constitutional Bodies" },
    { chapter: 62, part: 'VIII', topic: "National Investigation Agency", pages: 8, slots: 2, group: "Non-Constitutional Bodies" },
    { chapter: 63, part: 'VIII', topic: "National Disaster Management Authority", pages: 8, slots: 2, group: "Non-Constitutional Bodies" },
    // PART IX: Other Constitutional Dimensions
    { chapter: 64, part: 'IX', topic: "Co-operative Societies", pages: 8, slots: 2, group: "Other Dimensions" },
    { chapter: 65, part: 'IX', topic: "Official Language", pages: 12, slots: 2, group: "Other Dimensions" },
    { chapter: 66, part: 'IX', topic: "Public Services", pages: 10, slots: 2, group: "Other Dimensions" },
    { chapter: 67, part: 'IX', topic: "Rights and Liabilities of the Government", pages: 8, slots: 2, group: "Other Dimensions" },
    { chapter: 68, part: 'IX', topic: "Special Provisions Relating to Certain Classes", pages: 10, slots: 2, group: "Other Dimensions" },
    // PART X: Political Dynamics
    { chapter: 69, part: 'X', topic: "Political Parties", pages: 12, slots: 2, group: "Political Dynamics" },
    { chapter: 70, part: 'X', topic: "Role of Regional Parties", pages: 10, slots: 2, group: "Political Dynamics" },
    { chapter: 71, part: 'X', topic: "Elections", pages: 12, slots: 2, group: "Political Dynamics" },
    { chapter: 72, part: 'X', topic: "Election Laws", pages: 10, slots: 2, group: "Political Dynamics" },
    { chapter: 73, part: 'X', topic: "Electoral Reforms", pages: 15, slots: 3, group: "Political Dynamics" },
    { chapter: 74, part: 'X', topic: "Voting Behaviour", pages: 8, slots: 2, group: "Political Dynamics" },
    { chapter: 75, part: 'X', topic: "Coalition Government", pages: 10, slots: 2, group: "Political Dynamics" },
    { chapter: 76, part: 'X', topic: "Anti-Defection Law", pages: 10, slots: 2, group: "Political Dynamics" },
    { chapter: 77, part: 'X', topic: "Pressure Groups", pages: 8, slots: 2, group: "Political Dynamics" },
    { chapter: 78, part: 'X', topic: "National Integration", pages: 10, slots: 2, group: "Political Dynamics" },
    { chapter: 79, part: 'X', topic: "Foreign Policy", pages: 15, slots: 3, group: "Political Dynamics" },
    // PART XI: Working of the Constitution
    { chapter: 80, part: 'XI', topic: "National Commission to Review the Working of the Constitution", pages: 12, slots: 2, group: "Working" },
    // Extra chapters to reach 90+ (Appendices/Concept chapters that are often separate)
    { chapter: 81, part: 'XII', topic: "Land Reforms", pages: 8, slots: 2, group: "Development" },
    { chapter: 82, part: 'XII', topic: "Planning in India", pages: 10, slots: 2, group: "Development" },
    { chapter: 83, part: 'XII', topic: "Green Revolution", pages: 8, slots: 2, group: "Development" },
    { chapter: 84, part: 'XII', topic: "White Revolution", pages: 8, slots: 2, group: "Development" },
    { chapter: 85, part: 'XII', topic: "Blue Revolution", pages: 8, slots: 2, group: "Development" },
    { chapter: 86, part: 'XII', topic: "Disaster Management", pages: 10, slots: 2, group: "Development" },
    { chapter: 87, part: 'XII', topic: "Terrorism & Security", pages: 10, slots: 2, group: "Security" },
    { chapter: 88, part: 'XII', topic: "Cyber Security", pages: 8, slots: 2, group: "Security" },
    { chapter: 89, part: 'XII', topic: "Money Laundering", pages: 8, slots: 2, group: "Security" },
    { chapter: 90, part: 'XII', topic: "Black Money", pages: 8, slots: 2, group: "Security" },
    { chapter: 91, part: 'XII', topic: "Corruption", pages: 10, slots: 2, group: "Governance" },
    { chapter: 92, part: 'XII', topic: "Lokpal (Detailed)", pages: 8, slots: 2, group: "Governance" },
    { chapter: 93, part: 'XII', topic: "Whistleblowers Protection", pages: 8, slots: 2, group: "Governance" },
    { chapter: 94, part: 'XII', topic: "Citizen's Charter", pages: 8, slots: 2, group: "Governance" },
    { chapter: 95, part: 'XII', topic: "Right to Information", pages: 10, slots: 2, group: "Governance" },
];

export interface WeeklySchedule {
    week: number;
    days: {
        sunday: ChapterSchedule[];
        monday: ChapterSchedule[];
        tuesday: ChapterSchedule[];
        wednesday: ChapterSchedule[];
        thursday: ChapterSchedule[];
        friday: ChapterSchedule[];
        saturday: string[];
    };
    totalPages: number;
    totalSlots: number;
    dailyPageTarget: number;
}

function getPhasedOrder(): ChapterSchedule[] {
    // 1. PHASE 1: CH 1-11 (Defined for Week 1)
    const phase1Ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    // 2. PHASE 2: PAIRS (Comparative)
    const phase2Pairs = [
        [17, 30], // Pres/Gov
        [19, 31], // PM/CM
        [20, 32], // CoMs
        [22, 33], // Parliament/Slate Leg
        [26, 34], // SC/HC
        [52, 53], // AG/AdvGen
        [43, 44], // UPSC/SPSC
        [55, 56], // NHRC/SHRC
        [57, 58]  // CIC/SIC
    ];

    const phase1Chapters = LAXMIKANTH_CHAPTERS.filter(c => phase1Ids.includes(c.chapter));

    // Flatten Phase 2
    const phase2Chapters: ChapterSchedule[] = [];
    phase2Pairs.forEach(pair => {
        const c1 = LAXMIKANTH_CHAPTERS.find(c => c.chapter === pair[0]);
        const c2 = LAXMIKANTH_CHAPTERS.find(c => c.chapter === pair[1]);
        if (c1) phase2Chapters.push(c1);
        if (c2) phase2Chapters.push(c2);
    });

    const usedIds = new Set([...phase1Ids, ...phase2Pairs.flat()]);

    // 3. PHASE 3: REMAINDER
    const phase3Chapters = LAXMIKANTH_CHAPTERS.filter(c => !usedIds.has(c.chapter));

    // Filter out duplicates just in case
    return [...phase1Chapters, ...phase2Chapters, ...phase3Chapters];
}

export function generateWeeklySchedule(): WeeklySchedule[] {
    const schedules: WeeklySchedule[] = [];
    const orderedChapters = getPhasedOrder();

    // We already know Phase 1 (1-11) is DONE/Covered in the first 10 days.
    // We will hardcode Week 1 to reflect this specific status.

    const phase1Ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const phase1Content = orderedChapters.filter(c => phase1Ids.includes(c.chapter));
    const remainingContent = orderedChapters.filter(c => !phase1Ids.includes(c.chapter));

    // --- WEEK 1: FOUNDATION (COMPLETED Jan 1-10) ---
    // User instruction: "First 10 days... all chapters (1-11) are covered... directly calculate"
    // We package these into Week 1 without page limits.
    schedules.push({
        week: 1,
        days: {
            sunday: [phase1Content[0], phase1Content[1]], // Partial representation
            monday: [phase1Content[2], phase1Content[3]],
            tuesday: [phase1Content[4], phase1Content[5]],
            wednesday: [phase1Content[6]], // FR is big
            thursday: [phase1Content[7]], // DPSP
            friday: [phase1Content[8], phase1Content[9], phase1Content[10]],
            saturday: ["Phase 1 Mock Test", "Historic Review"],
        },
        totalPages: phase1Content.reduce((sum, c) => sum + c.pages, 0),
        totalSlots: phase1Content.reduce((sum, c) => sum + c.slots, 0),
        dailyPageTarget: 0 // "No requirement of calculation" for this initial block
    });

    // --- SUBSEQUENT WEEKS: PHASE 2 & 3 ---
    let currentChapterIndex = 0;
    let weekNumber = 2; // Start from Week 2
    let previousWeekChapters: ChapterSchedule[] = [];
    let currentChapter: ChapterSchedule | null = null;
    let remainingPagesInChapter = 0;
    const studyDays: (keyof WeeklySchedule['days'])[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

    const contentToSchedule = remainingContent;

    while (currentChapterIndex < contentToSchedule.length || remainingPagesInChapter > 0) {
        // Dynamic Pacing starts from Week 2 behavior
        // Growth calc: (Week 2 -> idx 0) -> 1.0, (Week 6 -> idx 1) -> 1.2
        const pacingWeeks = weekNumber - 2; // Normalize so Week 2 is "0" for growth
        const pacingMultiplier = 1 + (Math.floor(pacingWeeks / PACING_GROWTH_INTERVAL) * PACING_GROWTH_RATE);
        const dailyPageTarget = Math.round(BASE_PAGES_PER_DAY * pacingMultiplier);

        const week: WeeklySchedule = {
            week: weekNumber++,
            days: {
                sunday: [], // Filled with previous week's chapters
                monday: [], tuesday: [], wednesday: [], thursday: [], friday: [],
                saturday: weekNumber === 5
                    ? ["UPSC Prelims 2026: Paper 1", "UPSC Prelims 2026: Paper 2"]
                    : ["Weekly Mock Test", "Revision"],
            },
            totalPages: 0,
            totalSlots: 0,
            dailyPageTarget
        };

        if (week.week > 2) {
            week.days.sunday = previousWeekChapters;
        } else {
            // Week 2 Revision: Revise Phase 1
            week.days.sunday = [{ chapter: 0, part: 'I', topic: "Review Phase 1 (Ch 1-11)", pages: 0, slots: 0, group: "Revision" } as any];
        }

        const currentWeekChaptersSet = new Map<number, ChapterSchedule>();

        for (const day of studyDays) {
            let dayPagesRemaining = dailyPageTarget;

            while (dayPagesRemaining > 0) {
                if (remainingPagesInChapter <= 0) {
                    if (currentChapterIndex >= contentToSchedule.length) break;

                    const rawChapter = contentToSchedule[currentChapterIndex++];
                    currentChapter = { ...rawChapter };
                    remainingPagesInChapter = currentChapter.pages;

                    // Comparative Smart Savings applied here for Phase 2 items
                    if (currentChapter.comparativeWith) {
                        const partnerIdx = contentToSchedule.findIndex(c => c.chapter === currentChapter!.comparativeWith);
                        // If partner was already done (index lower than current), apply savings
                        // Since we strict ordered Phase 2, the second item in pair comes after.
                        // Check if the partner is NOT in the future list (meaning it was passed)
                        // But contentToSchedule is filtered.
                        // Actually, our ordered list puts pairs together [A, B].
                        // So when processing B, A is at `currentChapterIndex - 2` (since we just incremented)
                        // Simple check: currentChapter.comparativeWith should be in `contentToSchedule` at a lower index OR in `phase1Content` (unlikely for pairs).
                        // We can just trust the `group` logic or simple logic:
                        if (currentChapter.group === "The Mirror Executives" || currentChapter.group === "The Integrated Judiciary") {
                            // Just checking if it is the second of a pair
                            // E.g. 30 (Gov) comes after 17 (Pres).
                            if (currentChapter.chapter > (currentChapter.comparativeWith || 999)) {
                                // It is likely the second one (e.g. 30 > 17)
                                remainingPagesInChapter = Math.ceil(remainingPagesInChapter * 0.5);
                                currentChapter.group += " (Smart Comparative)";
                            }
                        }
                    }
                }

                if (!currentChapter) break;

                const pagesToTake = Math.min(dayPagesRemaining, remainingPagesInChapter);
                // Approximate slots: 1 slot = ~5 pages (given 30pgs/6slots)
                const slotsToTake = Math.max(1, Math.round(currentChapter.slots * (pagesToTake / (currentChapter.pages || 1))));

                // Add to day
                const dayList = week.days[day] as ChapterSchedule[];
                // Check if already in day to merge
                const existing = dayList.find(c => c.chapter === currentChapter!.chapter);
                if (existing) {
                    existing.pages += pagesToTake; // Just visual tracking
                    existing.slots += slotsToTake;
                } else {
                    dayList.push({
                        ...currentChapter,
                        pages: pagesToTake, // Showing pages covered TODAY
                        slots: slotsToTake
                    });
                }

                if (!currentWeekChaptersSet.has(currentChapter.chapter)) {
                    currentWeekChaptersSet.set(currentChapter.chapter, { ...currentChapter });
                }

                remainingPagesInChapter -= pagesToTake;
                dayPagesRemaining -= pagesToTake;

                week.totalPages += pagesToTake;
                week.totalSlots += slotsToTake;
            }
        }

        previousWeekChapters = Array.from(currentWeekChaptersSet.values());

        if (week.totalSlots > 0 || week.days.sunday.length > 0) {
            schedules.push(week);
        } else {
            break;
        }
    }

    return schedules;
}
