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

export const LAXMIKANTH_CHAPTERS: ChapterSchedule[] = [
    // --- PHASE 1: SEQUENTIAL (Foundation & Philosophy) ---
    // Note: User requested 1-11 ending with Basic Structure. In our system, Basic Structure is Ch 12.
    // We include 1-12 to ensure coverage and match system IDs.
    { chapter: 1, part: 'I', topic: "Historical Background", pages: 15, slots: 3, group: "Foundation" },
    { chapter: 2, part: 'I', topic: "Making of the Constitution", pages: 12, slots: 2, group: "Foundation" },
    { chapter: 3, part: 'I', topic: "Salient Features", pages: 8, slots: 2, group: "Foundation" },
    // Ch 4 is effectively "Preamble" in some contexts but mapped to 5 here based on subtopics. 
    // If Ch 4 exists in subtopics as "Salient Features" duplicate, we skip or treat as Preamble.
    // We will trust the ID map: 5=Preamble, 6=Union, 7=Citizenship.
    { chapter: 5, part: 'I', topic: "Preamble of the Constitution", pages: 10, slots: 2, group: "Foundation" },
    { chapter: 6, part: 'I', topic: "Union and Its Territory", pages: 10, slots: 2, group: "Foundation" },
    { chapter: 7, part: 'I', topic: "Citizenship", pages: 12, slots: 2, group: "Foundation" },
    { chapter: 8, part: 'I', topic: "Fundamental Rights", pages: 40, slots: 8, group: "Foundation" },
    { chapter: 9, part: 'I', topic: "Directive Principles of State Policy", pages: 15, slots: 3, group: "Foundation" },
    { chapter: 10, part: 'I', topic: "Fundamental Duties", pages: 6, slots: 1, group: "Foundation" },
    { chapter: 11, part: 'I', topic: "Amendment of the Constitution", pages: 10, slots: 2, group: "Foundation" },
    { chapter: 12, part: 'I', topic: "Basic Structure of the Constitution", pages: 10, slots: 2, group: "Foundation" },

    // --- PHASE 2: COMPARATIVE PAIRS ---
    // Pair 1: President (18) & Governor (31)
    { chapter: 18, part: 'III', topic: "President", pages: 30, slots: 6, group: "The Mirror Executives" },
    { chapter: 31, part: 'IV', topic: "Governor", pages: 25, slots: 5, comparativeWith: 18, group: "The Mirror Executives" },

    // Pair 2: PM (20) & CM (32)
    { chapter: 20, part: 'III', topic: "Prime Minister", pages: 12, slots: 2, group: "The Mirror Executives" },
    { chapter: 32, part: 'IV', topic: "Chief Minister", pages: 10, slots: 2, comparativeWith: 20, group: "The Mirror Executives" },

    // Pair 3: Council of Ministers (21 & 33)
    { chapter: 21, part: 'III', topic: "Central Council of Ministers", pages: 15, slots: 3, group: "The Mirror Executives" },
    { chapter: 33, part: 'IV', topic: "State Council of Ministers", pages: 10, slots: 2, comparativeWith: 21, group: "The Mirror Executives" },

    // Pair 4: Parliament (22) & State Legislature (36)
    { chapter: 22, part: 'III', topic: "Parliament", pages: 45, slots: 9, group: "The Legislative Machinery" },
    { chapter: 36, part: 'IV', topic: "State Legislature", pages: 35, slots: 7, comparativeWith: 22, group: "The Legislative Machinery" },

    // Pair 5: Supreme Court (26) & High Court (34)
    { chapter: 26, part: 'III', topic: "Supreme Court", pages: 25, slots: 5, group: "The Integrated Judiciary" },
    { chapter: 34, part: 'IV', topic: "High Court", pages: 20, slots: 4, comparativeWith: 26, group: "The Integrated Judiciary" },

    // Pair 6: AG (53) & Adv. Gen (54)
    { chapter: 53, part: 'VII', topic: "Attorney General of India", pages: 10, slots: 2, group: "Constitutional Bodies" },
    { chapter: 54, part: 'VII', topic: "Advocate General of the State", pages: 8, slots: 2, comparativeWith: 53, group: "Constitutional Bodies" },

    // Pair 7: UPSC (44) & SPSC (45)
    { chapter: 44, part: 'VII', topic: "UPSC", pages: 12, slots: 2, group: "Constitutional Bodies" },
    { chapter: 45, part: 'VII', topic: "SPSC", pages: 8, slots: 2, comparativeWith: 44, group: "Constitutional Bodies" },

    // --- PHASE 3: REMAINING ---
    { chapter: 13, part: 'II', topic: "Parliamentary System", pages: 10, slots: 2, group: "System of Government" },
    { chapter: 14, part: 'II', topic: "Federal System", pages: 12, slots: 2, group: "System of Government" },
    { chapter: 15, part: 'II', topic: "Centre-State Relations", pages: 25, slots: 5, group: "System of Government" },
    { chapter: 16, part: 'II', topic: "Inter-State Relations", pages: 12, slots: 2, group: "System of Government" },
    { chapter: 17, part: 'II', topic: "Emergency Provisions", pages: 20, slots: 4, group: "System of Government" },
    { chapter: 19, part: 'III', topic: "Vice-President", pages: 10, slots: 2, group: "The Mirror Executives" },
    { chapter: 23, part: 'III', topic: "Parliamentary Committees", pages: 20, slots: 4, group: "The Legislative Machinery" },
    { chapter: 24, part: 'III', topic: "Parliamentary Forums", pages: 8, slots: 2, group: "The Legislative Machinery" },
    { chapter: 25, part: 'III', topic: "Parliamentary Group", pages: 5, slots: 1, group: "The Legislative Machinery" },
    { chapter: 27, part: 'III', topic: "Judicial Review", pages: 8, slots: 2, group: "The Integrated Judiciary" },
    { chapter: 28, part: 'III', topic: "Judicial Activism", pages: 8, slots: 2, group: "The Integrated Judiciary" },
    { chapter: 29, part: 'III', topic: "Public Interest Litigation", pages: 10, slots: 2, group: "The Integrated Judiciary" },
    { chapter: 35, part: 'IV', topic: "Subordinate Courts", pages: 10, slots: 2, group: "The Integrated Judiciary" },
    { chapter: 64, part: 'IV', topic: "Tribunals", pages: 12, slots: 2, group: "The Integrated Judiciary" },
    { chapter: 78, part: 'IX', topic: "Special Provisions for Some States", pages: 12, slots: 2, group: "Local & Special Governance" },
    { chapter: 39, part: 'V', topic: "Panchayati Raj", pages: 25, slots: 5, group: "Local & Special Governance" },
    { chapter: 40, part: 'V', topic: "Municipalities", pages: 20, slots: 4, group: "Local & Special Governance" },
    { chapter: 41, part: 'VI', topic: "Union Territories", pages: 10, slots: 2, group: "Local & Special Governance" },
    { chapter: 42, part: 'VI', topic: "Scheduled and Tribal Areas", pages: 10, slots: 2, group: "Local & Special Governance" },
    { chapter: 43, part: 'VII', topic: "Election Commission", pages: 12, slots: 2, group: "Constitutional Bodies" },
    { chapter: 46, part: 'VII', topic: "Finance Commission", pages: 10, slots: 2, group: "Constitutional Bodies" },
    { chapter: 47, part: 'VII', topic: "Goods and Services Tax Council", pages: 8, slots: 2, group: "Constitutional Bodies" },
    { chapter: 48, part: 'VII', topic: "National Commission for SCs", pages: 8, slots: 2, group: "Constitutional Bodies" },
    { chapter: 49, part: 'VII', topic: "National Commission for STs", pages: 8, slots: 2, group: "Constitutional Bodies" },
    { chapter: 50, part: 'VII', topic: "National Commission for BCs", pages: 8, slots: 2, group: "Constitutional Bodies" },
    { chapter: 51, part: 'VII', topic: "Special Officer for Linguistic Minorities", pages: 5, slots: 1, group: "Constitutional Bodies" },
    { chapter: 52, part: 'VII', topic: "Comptroller and Auditor General", pages: 12, slots: 2, group: "Constitutional Bodies" },
    { chapter: 56, part: 'VIII', topic: "NITI Aayog", pages: 12, slots: 2, group: "Non-Constitutional Bodies" },
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
    dailyPageTarget: number; // For UI display
}

function getPhasedOrder(): ChapterSchedule[] {
    // Phase 1: 1-12 (Foundation)
    // Removed 4 from this list as 4 is sometimes a duplicate of 3 or 5 in this schema.
    const phase1Ids = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12];

    // Ordered pairs for Phase 2
    const phase2Pairs = [
        [18, 31], // Pres/Gov
        [20, 32], // PM/CM
        [21, 33], // CoMs
        [22, 36], // Parliament/State Leg
        [26, 34], // SC/HC
        [53, 54], // AGs
        [44, 45]  // UPSC/SPSC
    ];

    const phase1Chapters = phase1Ids.map(id => LAXMIKANTH_CHAPTERS.find(c => c.chapter === id)).filter(Boolean) as ChapterSchedule[];

    // Flatten Phase 2
    const phase2Chapters: ChapterSchedule[] = [];
    phase2Pairs.forEach(pair => {
        const c1 = LAXMIKANTH_CHAPTERS.find(c => c.chapter === pair[0]);
        const c2 = LAXMIKANTH_CHAPTERS.find(c => c.chapter === pair[1]);
        if (c1) phase2Chapters.push(c1);
        if (c2) phase2Chapters.push(c2);
    });

    const usedIds = new Set([...phase1Ids, ...phase2Pairs.flat()]);

    // Phase 3: Everything else
    const phase3Chapters = LAXMIKANTH_CHAPTERS.filter(c => !usedIds.has(c.chapter));

    return [...phase1Chapters, ...phase2Chapters, ...phase3Chapters];
}

export function generateWeeklySchedule(): WeeklySchedule[] {
    const schedules: WeeklySchedule[] = [];
    const orderedChapters = getPhasedOrder();

    let currentChapterIndex = 0;
    let weekNumber = 1;
    let previousWeekChapters: ChapterSchedule[] = [];

    // State for carrying over partial chapters across days
    let currentChapter: ChapterSchedule | null = null;
    let remainingPagesInChapter = 0;

    const studyDays: (keyof WeeklySchedule['days'])[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

    while (currentChapterIndex < orderedChapters.length || remainingPagesInChapter > 0) {
        // Calculate Dynamic Capacity for this week
        // Increase by 20% every 4 weeks
        const pacingMultiplier = 1 + (Math.floor((weekNumber - 1) / PACING_GROWTH_INTERVAL) * PACING_GROWTH_RATE);
        const dailyPageTarget = Math.round(BASE_PAGES_PER_DAY * pacingMultiplier);

        const week: WeeklySchedule = {
            week: weekNumber++,
            days: {
                sunday: [], // Filled with previous week's chapters
                monday: [], tuesday: [], wednesday: [], thursday: [], friday: [],
                saturday: ["Weekly Mock Test (Paper 1)", "Cumulative Mock Test (Paper 2)"],
            },
            totalPages: 0,
            totalSlots: 0,
            dailyPageTarget
        };

        if (week.week > 1) {
            week.days.sunday = previousWeekChapters;
        } else {
            // Special Week 1 Revision
            week.days.sunday = [
                orderedChapters.find(c => c.chapter === 1)!,
                orderedChapters.find(c => c.chapter === 2)!
            ].filter(Boolean);
        }

        const currentWeekChaptersSet = new Map<number, ChapterSchedule>();

        for (const day of studyDays) {
            let dayPagesRemaining = dailyPageTarget;

            while (dayPagesRemaining > 0) {
                // Determine which chapter to work on
                if (remainingPagesInChapter <= 0) {
                    if (currentChapterIndex >= orderedChapters.length) break; // Done with all content

                    const rawChapter = orderedChapters[currentChapterIndex++];
                    currentChapter = { ...rawChapter };
                    remainingPagesInChapter = currentChapter.pages;

                    // Apply Smart Savings (50% reduction for comparative chapters if their partner was done)
                    // Note: In our strict phase 2 sequence, the partner is always done immediately before or close.
                    // For logic simplicity, if it HAS a comparativeWith ID, and we are in Phase 2 list, we check if we've passed it.
                    // Since we strict ordered them [17, 30], 30 comes after 17.
                    // We can check if comparativeWith is in valid list and index is lower.
                    if (currentChapter.comparativeWith) {
                        const partnerIdx = orderedChapters.findIndex(c => c.chapter === currentChapter!.comparativeWith);
                        if (partnerIdx !== -1 && partnerIdx < (currentChapterIndex - 1)) {
                            // Partner already processed
                            remainingPagesInChapter = Math.ceil(remainingPagesInChapter * 0.5); // 50% reduction
                            currentChapter.group += " (Smart Comparative)";
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

                // Add to week set for Sunday revision
                if (!currentWeekChaptersSet.has(currentChapter.chapter)) {
                    // Start fresh object for Sunday display so it shows Full stats, not just partial
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
            // Stop if empty week generated
            break;
        }
    }

    return schedules;
}
