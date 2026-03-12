import { MCQ } from '../RevisionRegistry';

export const CHAPTER_40_MCQS: MCQ[] = [
    // Phase 1: Evolution
    {
        id: 1,

        question: "Chronological order of Urban Local Govt milestones:\n1. Lord Ripon's Resolution\n2. First Municipal Corp (Madras)\n3. Municipal Corps (Bombay/Calcutta)\n4. Provincial Subject (GoI Act 1935)",
        options: [
            "2-3-1-4",
            "2-1-3-4",
            "1-2-3-4",
            "3-2-1-4"
        ],
        correctAnswer: 0,
        explanation: "Madras (1688) -> Bombay/Calcutta (1726) -> Ripon (1882) -> 1935 Act.",
        difficulty: "medium"
    },
    {
        id: 2,

        question: "Father of Local Self-Government in India?",
        options: [
            "Lord Mayo",
            "Lord Ripon",
            "Lord Dalhousie",
            "Lord Mountbatten"
        ],
        correctAnswer: 1,
        explanation: "Lord Ripon (Resolution of 1882) is the Magna Carta of Local Self-Government.",
        difficulty: "easy"
    },
    // Phase 2: 74th Amendment
    {
        id: 3,

        question: "Regarding 74th Amendment:\n1. Added Part IX-A & 12th Schedule.\n2. Three types: Nagar Panchayat, Council, Corporation.\n3. Governor specifies transition areas based on criteria.\n4. Industrial townships can be exempt.",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1, 2, and 3 only",
            "1, 2, 3, and 4"
        ],
        correctAnswer: 3,
        explanation: "All statements are correct salient features of the Act.",
        difficulty: "medium"
    },
    {
        id: 4,

        question: "Regarding Composition (Art 243-R):",
        options: [
            "All members elected indirectly.",
            "All members elected directly from Wards.",
            "Chairperson always elected directly.",
            "Nominated members have right to vote."
        ],
        correctAnswer: 1,
        explanation: "Members elected directly from Wards. Nominated members do NOT have voting rights.",
        difficulty: "medium"
    },
    {
        id: 5,

        question: "Mandatory provision(s) of 74th Amendment:\n1. 1/3rd reservation for women.\n2. SC/ST reservation (Pop based).\n3. Ward Committees (Pop > 3 Lakhs).\n4. OBC Reservation.",
        options: [
            "1 and 2 only",
            "1, 2, and 3 only",
            "2 and 4 only",
            "1, 2, 3, and 4"
        ],
        correctAnswer: 1,
        explanation: "OBC Reservation is voluntary. Others are mandatory.",
        difficulty: "medium"
    },
    // Phase 3: Technical Committees
    {
        id: 6,

        question: "Primary function of District Planning Committee (DPC)?",
        options: [
            "Conduct judicial inquiries.",
            "Consolidate plans of Panchayats and Municipalities.",
            "Manage state urban budget.",
            "Recruit municipal commissioners."
        ],
        correctAnswer: 1,
        explanation: "Core mandate is to consolidate rural and urban plans into a draft development plan.",
        difficulty: "easy"
    },
    {
        id: 7,

        question: "DPC vs MPC Composition:\n1. DPC: 4/5ths elected from elected members.\n2. MPC: 2/3rds elected from elected members.",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 2,
        explanation: "Both ratios are correct: 4/5ths for DPC, 2/3rds for MPC.",
        difficulty: "hard"
    },
    // Phase 4: Types of ULBs
    {
        id: 8,

        question: "Match Urban Body:\nA. Notified Area: 1. Military areas (Ministry of Defence)\nB. Cantonment: 2. Fast-developing / Not yet fit for municipality\nC. Port Trust: 3. PSU townships\nD. Township: 4. Port areas (Act of Parliament)",
        options: [
            "A-2, B-1, C-4, D-3",
            "A-1, B-2, C-3, D-4",
            "A-2, B-4, C-1, D-3",
            "A-4, B-1, C-2, D-3"
        ],
        correctAnswer: 0,
        explanation: "Notified Area (2), Cantonment (1), Port Trust (4), Township (3).",
        difficulty: "medium"
    },
    {
        id: 9,

        question: "Chief Executive Authority of Municipal Corporation?",
        options: [
            "The Mayor",
            "Standing Committee Chairman",
            "The Municipal Commissioner",
            "The Governor"
        ],
        correctAnswer: 2,
        explanation: "Municipal Commissioner (appointed by State, usually IAS) is the executive authority.",
        difficulty: "easy"
    },
    {
        id: 10,

        question: "True about 'Special Purpose Agency':",
        options: [
            "Area-based body.",
            "Function-based body (e.g. Water Board).",
            "Part of Municipal structure.",
            "Chaired by Mayor."
        ],
        correctAnswer: 1,
        explanation: "It is a Function-based body, independent of the municipal corporation.",
        difficulty: "medium"
    },
    // Phase 5: Powers & Finance
    {
        id: 11,

        question: "NOT a 12th Schedule item?",
        options: [
            "Urban poverty alleviation.",
            "Fire services.",
            "Regulation of slaughterhouses.",
            "Technical training and vocational education."
        ],
        correctAnswer: 3,
        explanation: "Technical training/Vocational education is an 11th Schedule (Panchayat) item.",
        difficulty: "hard"
    },
    {
        id: 12,

        question: "Regarding Disqualifications (Art 243-V):",
        options: [
            "Min age to contest is 25.",
            "No disqualification if < 25 but attained 21 years.",
            "Disputes referred to SEC decision.",
            "Disqualified by Governor."
        ],
        correctAnswer: 1,
        explanation: "Minimum age for Municipality elections is 21 years.",
        difficulty: "medium"
    },
    {
        id: 13,

        question: "State Finance Commission makes recommendations on:",
        options: [
            "Distribution of taxes.",
            "Assignment of taxes/duties.",
            "Measures to improve financial position.",
            "All of the above."
        ],
        correctAnswer: 3,
        explanation: "All three are core mandates of the SFC.",
        difficulty: "easy"
    },
    // Adding Q11 from user set (Ministries)
    {
        id: 14,

        question: "Central Ministries associated with Urban Local Govt:\n1. Housing and Urban Affairs.\n2. Defence.\n3. Home Affairs.",
        options: [
            "1 only",
            "1 and 2 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 3,
        explanation: "MoHUA (States), Defence (Cantonments), Home Affairs (UTs).",
        difficulty: "medium"
    }
];

export default CHAPTER_40_MCQS;
