"use client";

// PYQ (Previous Year Questions) Data Types and Structure
// For UPSC Prelims Integration

export interface PYQQuestion {
    id: string;
    year: number;
    question: string;
    options: string[];
    correctAnswer: number; // 0-indexed
    explanation: string;
    articleReference?: string; // e.g., "Art 14, 19, 21"
    difficulty: 'easy' | 'moderate' | 'difficult';
    tags: string[]; // e.g., ["Fundamental Rights", "Article 21", "Right to Life"]
}

export interface ChapterPYQData {
    chapterId: number;
    chapterTitle: string;
    totalPYQs: number;
    lastAskedYear: number;
    frequency: 'high' | 'medium' | 'low'; // How often this topic appears
    trendDirection: 'increasing' | 'stable' | 'decreasing';
    questions: PYQQuestion[];
}

// High-Yield Chapters for PYQ Focus
export const HIGH_YIELD_CHAPTERS = [
    { id: 3, title: "Preamble", expectedPYQs: 8 },
    { id: 5, title: "Fundamental Rights", expectedPYQs: 25 },
    { id: 6, title: "DPSP", expectedPYQs: 15 },
    { id: 7, title: "Fundamental Duties", expectedPYQs: 5 },
    { id: 8, title: "Amendment", expectedPYQs: 12 },
    { id: 9, title: "Basic Structure", expectedPYQs: 8 },
    { id: 13, title: "President", expectedPYQs: 18 },
    { id: 14, title: "Vice President", expectedPYQs: 5 },
    { id: 15, title: "Prime Minister", expectedPYQs: 8 },
    { id: 17, title: "Parliament", expectedPYQs: 20 },
    { id: 23, title: "Supreme Court", expectedPYQs: 15 },
    { id: 24, title: "Judicial Review", expectedPYQs: 8 },
    { id: 26, title: "Governor", expectedPYQs: 12 },
    { id: 31, title: "High Court", expectedPYQs: 10 },
    { id: 33, title: "Panchayati Raj", expectedPYQs: 12 },
    { id: 35, title: "Emergency Provisions", expectedPYQs: 15 },
    { id: 38, title: "Election Commission", expectedPYQs: 10 },
    { id: 41, title: "Finance Commission", expectedPYQs: 8 },
    { id: 50, title: "NITI Aayog", expectedPYQs: 5 },
    { id: 63, title: "Tribunals", expectedPYQs: 6 },
];

// CHAPTER 5: FUNDAMENTAL RIGHTS - Most asked topic
export const FUNDAMENTAL_RIGHTS_PYQS: ChapterPYQData = {
    chapterId: 5,
    chapterTitle: "Fundamental Rights",
    totalPYQs: 25,
    lastAskedYear: 2024,
    frequency: 'high',
    trendDirection: 'stable',
    questions: [
        {
            id: "FR-2024-1",
            year: 2024,
            question: "With reference to the Constitution of India, which one of the following statements is NOT correct?",
            options: [
                "Article 14 guarantees equality before the law",
                "Article 19 is available only to citizens",
                "Article 21 is available to both citizens and non-citizens",
                "Article 15 prohibits discrimination only by the State"
            ],
            correctAnswer: 3,
            explanation: "Article 15(2) prohibits discrimination by private individuals also in access to public places. The statement that Art 15 prohibits discrimination ONLY by State is incorrect.",
            articleReference: "Art 14, 15, 19, 21",
            difficulty: 'moderate',
            tags: ["Fundamental Rights", "Article 15", "Discrimination"]
        },
        {
            id: "FR-2023-1",
            year: 2023,
            question: "Which of the following are regarded as the 'Golden Triangle' of the Indian Constitution?",
            options: [
                "Articles 14, 19 and 21",
                "Articles 32, 226 and 227",
                "Articles 14, 21 and 32",
                "Articles 19, 21 and 32"
            ],
            correctAnswer: 0,
            explanation: "Articles 14 (Equality), 19 (Six Freedoms) and 21 (Life & Liberty) are called the 'Golden Triangle' as per Maneka Gandhi case (1978). They must be read together.",
            articleReference: "Art 14, 19, 21",
            difficulty: 'easy',
            tags: ["Fundamental Rights", "Golden Triangle", "Maneka Gandhi"]
        },
        {
            id: "FR-2022-1",
            year: 2022,
            question: "Right to Privacy is protected under which Article of the Indian Constitution?",
            options: [
                "Article 14",
                "Article 19",
                "Article 21",
                "Article 32"
            ],
            correctAnswer: 2,
            explanation: "In K.S. Puttaswamy case (2017), a 9-judge bench unanimously declared Right to Privacy as a fundamental right under Article 21.",
            articleReference: "Art 21",
            difficulty: 'easy',
            tags: ["Fundamental Rights", "Right to Privacy", "Article 21", "Puttaswamy"]
        },
        {
            id: "FR-2021-1",
            year: 2021,
            question: "Which of the following rights was described by Dr. Ambedkar as the 'heart and soul' of the Constitution?",
            options: [
                "Right to Freedom",
                "Right to Equality",
                "Right to Constitutional Remedies",
                "Right against Exploitation"
            ],
            correctAnswer: 2,
            explanation: "Dr. B.R. Ambedkar called Article 32 (Right to Constitutional Remedies) the 'heart and soul' of the Constitution because without it, other rights would be meaningless.",
            articleReference: "Art 32",
            difficulty: 'easy',
            tags: ["Fundamental Rights", "Article 32", "Ambedkar", "Constitutional Remedies"]
        },
        {
            id: "FR-2020-1",
            year: 2020,
            question: "Which of the following is NOT a Fundamental Right guaranteed under the Constitution of India?",
            options: [
                "Right to strike",
                "Right to form associations",
                "Right to peaceful assembly",
                "Right to move freely throughout India"
            ],
            correctAnswer: 0,
            explanation: "Right to Strike is NOT a fundamental right. It is a statutory/legal right. The Supreme Court has clarified this in multiple judgments including T.K. Rangarajan case.",
            articleReference: "Art 19(1)(c)",
            difficulty: 'moderate',
            tags: ["Fundamental Rights", "Right to Strike", "Article 19"]
        }
    ]
};

// CHAPTER 13: PRESIDENT - High yield topic
export const PRESIDENT_PYQS: ChapterPYQData = {
    chapterId: 13,
    chapterTitle: "President",
    totalPYQs: 18,
    lastAskedYear: 2024,
    frequency: 'high',
    trendDirection: 'stable',
    questions: [
        {
            id: "PRES-2024-1",
            year: 2024,
            question: "Consider the following statements about the election of the President of India:\n1. Elected members of both Houses of Parliament participate.\n2. Elected members of Legislative Assemblies participate.\n3. Elected members of Legislative Councils participate.\nWhich of the statements given above is/are correct?",
            options: [
                "1 and 2 only",
                "2 only",
                "1, 2 and 3",
                "1 only"
            ],
            correctAnswer: 0,
            explanation: "Only elected members of Parliament (both Houses) and elected members of State Legislative ASSEMBLIES participate. MLCs do NOT participate in Presidential election.",
            articleReference: "Art 54",
            difficulty: 'moderate',
            tags: ["President", "Election", "Electoral College", "Article 54"]
        },
        {
            id: "PRES-2023-1",
            year: 2023,
            question: "The President of India can be removed from office by:",
            options: [
                "The Prime Minister",
                "The Chief Justice of India",
                "Impeachment by Parliament",
                "No-confidence motion in Lok Sabha"
            ],
            correctAnswer: 2,
            explanation: "Article 61 provides for impeachment of President for 'violation of the Constitution'. It requires special majority in both Houses.",
            articleReference: "Art 61",
            difficulty: 'easy',
            tags: ["President", "Impeachment", "Removal", "Article 61"]
        },
        {
            id: "PRES-2022-1",
            year: 2022,
            question: "Which of the following is/are the discretionary powers of the President?",
            options: [
                "Appointing the Prime Minister when no party has clear majority",
                "Dissolving Lok Sabha on advice of PM who has lost majority",
                "Both (a) and (b)",
                "Neither (a) nor (b)"
            ],
            correctAnswer: 2,
            explanation: "President has discretionary (situational) powers: (1) Appointing PM in hung parliament, (2) Dissolving LS when PM has lost majority but refuses to resign.",
            articleReference: "Art 74, 75",
            difficulty: 'moderate',
            tags: ["President", "Discretionary Powers", "Appointment of PM"]
        }
    ]
};

// CHAPTER 35: EMERGENCY PROVISIONS - Critical topic
export const EMERGENCY_PYQS: ChapterPYQData = {
    chapterId: 35,
    chapterTitle: "Emergency Provisions",
    totalPYQs: 15,
    lastAskedYear: 2024,
    frequency: 'high',
    trendDirection: 'increasing',
    questions: [
        {
            id: "EMRG-2024-1",
            year: 2024,
            question: "During National Emergency under Article 352, which of the following Fundamental Rights CANNOT be suspended?",
            options: [
                "Right to Freedom (Article 19)",
                "Right to Life and Personal Liberty (Article 21)",
                "Right to Property",
                "Right to Freedom of Religion"
            ],
            correctAnswer: 1,
            explanation: "After 44th Amendment, Articles 20 (Protection in conviction) and 21 (Life & Liberty) CANNOT be suspended even during National Emergency.",
            articleReference: "Art 352, 358, 359",
            difficulty: 'moderate',
            tags: ["Emergency", "National Emergency", "Article 21", "44th Amendment"]
        },
        {
            id: "EMRG-2023-1",
            year: 2023,
            question: "President's Rule can be imposed in a State under Article 356 on grounds of:",
            options: [
                "Failure of constitutional machinery in the State",
                "Financial emergency in the State",
                "External aggression or armed rebellion",
                "Failure to comply with Union directions"
            ],
            correctAnswer: 0,
            explanation: "Article 356 (State Emergency/President's Rule) is imposed when constitutional machinery in a State fails. It's based on Governor's report or otherwise.",
            articleReference: "Art 356",
            difficulty: 'easy',
            tags: ["Emergency", "President's Rule", "Article 356", "State Emergency"]
        },
        {
            id: "EMRG-2022-1",
            year: 2022,
            question: "Which Constitutional Amendment made 'internal disturbance' insufficient for declaring National Emergency?",
            options: [
                "42nd Amendment",
                "44th Amendment",
                "52nd Amendment",
                "61st Amendment"
            ],
            correctAnswer: 1,
            explanation: "44th Amendment (1978) replaced 'internal disturbance' with 'armed rebellion' as ground for National Emergency under Article 352.",
            articleReference: "Art 352",
            difficulty: 'moderate',
            tags: ["Emergency", "44th Amendment", "Armed Rebellion", "National Emergency"]
        }
    ]
};

// CHAPTER 8: AMENDMENT - Frequently asked
export const AMENDMENT_PYQS: ChapterPYQData = {
    chapterId: 8,
    chapterTitle: "Amendment of the Constitution",
    totalPYQs: 12,
    lastAskedYear: 2024,
    frequency: 'high',
    trendDirection: 'stable',
    questions: [
        {
            id: "AMD-2024-1",
            year: 2024,
            question: "Which of the following requires ratification by States for constitutional amendment?",
            options: [
                "Creation of new All India Services",
                "Amendment of Fundamental Rights",
                "Amendment of Article 368 itself",
                "Abolition of Legislative Council"
            ],
            correctAnswer: 2,
            explanation: "Amendment of Article 368 (amendment procedure) requires Special Majority + Ratification by half the States. Federal provisions need state ratification.",
            articleReference: "Art 368",
            difficulty: 'difficult',
            tags: ["Amendment", "Article 368", "Ratification", "Federal Provisions"]
        },
        {
            id: "AMD-2023-1",
            year: 2023,
            question: "The power of Parliament to amend the Constitution is a:",
            options: [
                "Original power",
                "Derived power",
                "Constituent power",
                "Absolute power"
            ],
            correctAnswer: 2,
            explanation: "Parliament's power to amend is a CONSTITUENT power (derived from Constitution itself), not absolute. It's limited by Basic Structure doctrine.",
            articleReference: "Art 368",
            difficulty: 'moderate',
            tags: ["Amendment", "Constituent Power", "Basic Structure"]
        }
    ]
};

// Master PYQ Data Map
export const PYQ_DATA_MAP: Record<number, ChapterPYQData> = {
    5: FUNDAMENTAL_RIGHTS_PYQS,
    13: PRESIDENT_PYQS,
    35: EMERGENCY_PYQS,
    8: AMENDMENT_PYQS,
};

// Get PYQ data for a chapter
export function getChapterPYQs(chapterId: number): ChapterPYQData | null {
    return PYQ_DATA_MAP[chapterId] || null;
}

// Get statistics across all chapters
export function getPYQStatistics() {
    const chapters = Object.values(PYQ_DATA_MAP);
    return {
        totalQuestions: chapters.reduce((sum, ch) => sum + ch.questions.length, 0),
        chaptersWithPYQs: chapters.length,
        highFrequencyTopics: chapters.filter(ch => ch.frequency === 'high').length,
        mostRecentYear: Math.max(...chapters.map(ch => ch.lastAskedYear)),
    };
}
