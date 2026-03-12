import { MCQ } from "../RevisionRegistry";

export const CHAPTER_31_MCQS: MCQ[] = [
    {
        id: 1,
        chapterId: 30, // Mapping to Schedule ID 30 (PIL)
        question: "With reference to 'Public Interest Litigation' (PIL), consider the following statements:\n1. Origin/Developed in UK in early 20th century.\n2. In India, it is a product of judicial innovation.\n3. First reported PIL: Hussainara Khatoon v. Home Secretary, Bihar.",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 1,
        explanation: "Statement 1 is incorrect; PIL originated in the USA (1960s), not UK.",
        difficulty: "medium"
    },
    {
        id: 2,
        chapterId: 30,
        question: "What does 'Relaxation of Locus Standi' strictly mean in PIL context?",
        options: [
            "Court takes up cases of individual rights violation only.",
            "Any member of public (public-spirited) can file for redressal of public injury.",
            "Person must have personal interest/injury.",
            "Only Attorney General can file."
        ],
        correctAnswer: 1,
        explanation: "Locus Standi is relaxed so that a person acting bona fide can file a petition even if not personally aggregated.",
        difficulty: "easy"
    },
    {
        id: 3,
        chapterId: 30,
        question: "Which of the following matters is generally NOT entertained as PIL?",
        options: [
            "Bonded Labour matters.",
            "Environmental Pollution.",
            "Landlord-Tenant matters.",
            "Atrocities on women."
        ],
        correctAnswer: 2,
        explanation: "Landlord-Tenant, Service matters, and admission matters are typically NOT entertained as PIL.",
        difficulty: "easy"
    },
    {
        id: 4,
        chapterId: 30,
        question: "Who are considered the pioneers of PIL in India?",
        options: [
            "Justice V.R. Krishna Iyer and Justice P.N. Bhagwati.",
            "Justice H.R. Khanna and Justice M.H. Beg.",
            "Justice Y.V. Chandrachud and Justice A.N. Ray.",
            "Justice K.S. Hegde and Justice Grover."
        ],
        correctAnswer: 0,
        explanation: "Justices Krishna Iyer and Bhagwati spearheaded the movement in the 1970s/80s.",
        difficulty: "easy"
    },
    {
        id: 5,
        chapterId: 30,
        question: "What is 'Epistolary Jurisdiction' in the context of PIL?",
        options: [
            "Court can transfer cases from one Hq to another.",
            "Court can treat a letter or telegram as a writ petition.",
            "Court can issue advisory opinion.",
            "Court acts as a supervisor of tribals."
        ],
        correctAnswer: 1,
        explanation: "The court can treat informal letters/telegrams as formal petitions to ensure justice for the disadvantaged.",
        difficulty: "medium"
    }
];
