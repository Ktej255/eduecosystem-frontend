import { MCQ } from '../RevisionRegistry';

export const CHAPTER_99_MCQS: MCQ[] = [
    // Phase 1: 5th Schedule
    {
        id: 1,
        chapterId: 99,
        question: "Regarding 'Scheduled Areas' (Fifth Schedule):\n1. President empowers to declare area.\n2. Governor can alter boundary after consultation with President.\n3. Executive power of Union extends to giving directions.",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 2,
        explanation: "Statement 2 is incorrect; only President can alter boundaries. 1 and 3 are correct.",
        difficulty: "medium"
    },
    {
        id: 2,
        chapterId: 99,
        question: "Tribes Advisory Council (TAC):",
        options: [
            "30 members, 3/4ths ST MLAs.",
            "Mandatory for every state in India.",
            "20 members, advises on ST welfare.",
            "Chairman is always Governor."
        ],
        correctAnswer: 2,
        explanation: "TAC has 20 members (not 30). Mandatory only for states with Scheduled Areas.",
        difficulty: "medium"
    },
    // Phase 2: 6th Schedule
    {
        id: 3,
        chapterId: 99,
        question: "States with 'Tribal Areas' under Sixth Schedule?",
        options: [
            "Assam, Tripura, Meghalaya, Mizoram",
            "Assam, Manipur, Tripura, Mizoram",
            "Assam, Tripura, Manipur, Meghalaya",
            "Manipur, Tripura, Mizoram, Meghalaya"
        ],
        correctAnswer: 0,
        explanation: "AMTM: Assam, Meghalaya, Tripura, Mizoram. Manipur is NOT included.",
        difficulty: "easy"
    },
    {
        id: 4,
        chapterId: 99,
        question: "District Councils in Sixth Schedule (ADCs):",
        options: [
            "30 members total.",
            "All 30 elected by adult franchise.",
            "Governor nominates 4 members.",
            "1 and 3 only."
        ],
        correctAnswer: 3, // D is "1 and 3 only" based on user logic.
        // User Logic: "Statement 2 is incorrect; only 26 members are elected; 4 are nominated".
        // My option D "1 and 3 only" fits this.
        explanation: "Total 30 members: 26 Elected + 4 Nominated by Governor.",
        difficulty: "medium"
    },
    // Phase 3: Law Application
    {
        id: 5,
        chapterId: 99,
        question: "Application of Laws in 5th vs 6th Schedule:",
        options: [
            "In 5th Sch, Governor repeals Parliament Act with President assent.",
            "In 6th Sch, Acts do not apply or apply with modifications.",
            "For Mizoram/Tripura, Governor excludes Parliamentary acts (not President).",
            "1, 2, and 3."
        ],
        correctAnswer: 3,
        explanation: "All statements regarding the nuanced exclusion powers are correct.",
        difficulty: "hard"
    },
    // Phase 4: Analytical
    {
        id: 6,
        chapterId: 99,
        question: "Common feature of Fifth and Sixth Schedules:",
        options: [
            "Creation of Autonomous District Councils.",
            "Presidential notification to declare areas.",
            "Governor's power to modify law application.",
            "Mandatory Tribes Advisory Council."
        ],
        correctAnswer: 2,
        explanation: "Both grant Governor power to filter/modify laws. ADCs are 6th Sch only. TAC is 5th Sch only.",
        difficulty: "medium"
    }
];

export default CHAPTER_99_MCQS;
