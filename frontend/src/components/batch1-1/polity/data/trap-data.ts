export interface TrapScenario {
    id: string;
    chapter: string;
    sentenceSegments: string[];
    trapIndex: number;
    correction: string;
    explanation: string;
    severity: 'Low' | 'Medium' | 'High';
}

export const TRAP_DATA: TrapScenario[] = [
    // --- CATEGORY 1: APPOINTMENT & REMOVAL TRAPS ---
    {
        id: 'trap_spsc_removal',
        chapter: 'SPSC',
        sentenceSegments: [
            "The Chairman of State PSC",
            "is appointed by the Governor",
            "and can be removed",
            "by the Governor",
            "on grounds of misbehavior."
        ],
        trapIndex: 3,
        correction: "by the President",
        explanation: "SPSC Chairman is appointed by Governor but removed ONLY by the President (same as UPSC Chairman).",
        severity: 'High'
    },
    {
        id: 'trap_hc_judge_appt',
        chapter: 'High Court',
        sentenceSegments: [
            "A High Court Judge",
            "is appointed by",
            "the Governor",
            "after consultation with the CJI",
            "and the Chief Justice of the High Court."
        ],
        trapIndex: 2,
        correction: "the President",
        explanation: "Judges of High Court are appointed by the President. Governor is only consulted.",
        severity: 'High'
    },
    {
        id: 'trap_vp_resignation',
        chapter: 'Vice President',
        sentenceSegments: [
            "The Vice President",
            "submits his resignation letter",
            "to the",
            "Chief Justice of India."
        ],
        trapIndex: 3,
        correction: "President",
        explanation: "Vice President resigns to the President. President resigns to the Vice President.",
        severity: 'Medium'
    },
    {
        id: 'trap_speaker_resignation',
        chapter: 'Parliament',
        sentenceSegments: [
            "The Speaker of Lok Sabha",
            "resigns by writing to",
            "the President of India."
        ],
        trapIndex: 2,
        correction: "the Deputy Speaker",
        explanation: "Speaker and Deputy Speaker resign to each other.",
        severity: 'Medium'
    },

    // --- CATEGORY 2: MAJORITY TRAPS ---
    {
        id: 'trap_vp_removal_majority',
        chapter: 'Vice President',
        sentenceSegments: [
            "The Vice President can be removed",
            "by a resolution of Rajya Sabha",
            "passed by a",
            "special majority."
        ],
        trapIndex: 3,
        correction: "effective majority",
        explanation: "Removal requires Effective Majority (Total Strength - Vacancies) in RS, and Simple Majority in LS.",
        severity: 'High'
    },
    {
        id: 'trap_speaker_removal',
        chapter: 'Parliament',
        sentenceSegments: [
            "The Speaker is removed",
            "by a resolution of Lok Sabha",
            "passed by",
            "a special majority."
        ],
        trapIndex: 3,
        correction: "an effective majority",
        explanation: "Speaker removal requires Effective Majority ( >50% of Total Members - Vacancies).",
        severity: 'High'
    },
    {
        id: 'trap_state_council_abolish',
        chapter: 'State Legislature',
        sentenceSegments: [
            "Parliament can abolish",
            "a State Legislative Council",
            "by passing a law with",
            "a special majority."
        ],
        trapIndex: 3,
        correction: "a simple majority",
        explanation: "The State Assembly needs Special Majority to request it, but Parliament does it via Simple Majority (Art 169).",
        severity: 'High'
    },

    // --- CATEGORY 3: CONSTITUTION VS CONVENTION ---
    {
        id: 'trap_budget_date',
        chapter: 'Budget',
        sentenceSegments: [
            "The Constitution mandates",
            "that the Budget shall be presented",
            "on February 1st."
        ],
        trapIndex: 2,
        correction: "on a date fixed by President",
        explanation: "The Constitution does not specify a date. Feb 1st is a convention (changed from Feb 28th in 2017).",
        severity: 'Medium'
    },
    {
        id: 'trap_cabinet_word',
        chapter: 'Council of Ministers',
        sentenceSegments: [
            "The word 'Cabinet'",
            "was mentioned in the Constitution",
            "originally in 1950."
        ],
        trapIndex: 2,
        correction: "added by 44th Amendment (1978)",
        explanation: "Originally, only 'Council of Ministers' was used. 'Cabinet' was added in Art 352 (Emergency) only in 1978.",
        severity: 'Low'
    },

    // --- CATEGORY 4: MANDATORY VS DISCRETIONARY ---
    {
        id: 'trap_president_advice',
        chapter: 'President',
        sentenceSegments: [
            "The President",
            "may act on the advice",
            "of the Council of Ministers."
        ],
        trapIndex: 1,
        correction: "shall act on the advice",
        explanation: "It is mandatory. The 42nd and 44th Amendments made it binding. He can return it once, but must accept if resent.",
        severity: 'High'
    },
    {
        id: 'trap_money_bill_return',
        chapter: 'Parliament',
        sentenceSegments: [
            "The President",
            "can return a Money Bill",
            "for reconsideration",
            "of the Parliament."
        ],
        trapIndex: 1,
        correction: "cannot return a Money Bill",
        explanation: "President can either Assent or Withhold. He cannot return a Money Bill as it is introduced with his prior permission.",
        severity: 'High'
    },
    {
        id: 'trap_joint_sitting_preside',
        chapter: 'Parliament',
        sentenceSegments: [
            "The Chairman of Rajya Sabha",
            "presides over",
            "the Joint Sitting",
            "of both Houses."
        ],
        trapIndex: 0,
        correction: "The Speaker of Lok Sabha",
        explanation: "The Chairman (VP) is not a member of either House, and thus never presides over a Joint Sitting.",
        severity: 'Medium'
    },

    // --- CATEGORY 5: EMERGENCY & FEDERALISM ---
    {
        id: 'trap_emergency_fr_19',
        chapter: 'Emergency',
        sentenceSegments: [
            "Article 19 is automatically suspended",
            "when a Proclamation of Emergency",
            "is issued on the ground of",
            "Armed Rebellion."
        ],
        trapIndex: 3,
        correction: "War or External Aggression",
        explanation: "Art 19 is suspended only during External Emergency. It remains alive during Armed Rebellion (Internal).",
        severity: 'High'
    },
    {
        id: 'trap_national_emergency_approval',
        chapter: 'Emergency',
        sentenceSegments: [
            "A National Emergency proclamation",
            "must be approved by Parliament",
            "within two months."
        ],
        trapIndex: 2,
        correction: "within one month",
        explanation: "The 44th Amendment Reduced the period from 2 months to 1 month for National Emergency approval.",
        severity: 'Medium'
    },
    {
        id: 'trap_pres_rule_max',
        chapter: 'Emergency',
        sentenceSegments: [
            "President's Rule",
            "in a state",
            "can be extended",
            "indefinitely",
            "with Parliamentary approval."
        ],
        trapIndex: 3,
        correction: "for a maximum of 3 years",
        explanation: "Unlike National Emergency (indefinite), President's Rule has a hard cap of 3 years.",
        severity: 'Medium'
    }
];
