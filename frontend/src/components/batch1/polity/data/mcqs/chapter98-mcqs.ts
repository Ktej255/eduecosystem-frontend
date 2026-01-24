import { MCQ } from '../RevisionRegistry';

export const CHAPTER_98_MCQS: MCQ[] = [
    {
        id: 1,
        chapterId: 98,
        question: "Regarding evolution of UTs:\n1. 'Union Territory' introduced by 7th Amendment (1956).\n2. Originally classified as 'Part D States' only.\n3. Governor of adjoining State can be Administrator.",
        options: [
            "1 and 2 only",
            "1 and 3 only",
            "2 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 1,
        explanation: "Statement 2 is incorrect (Included Part C and Part D). 1 and 3 are correct.",
        difficulty: "medium"
    },
    {
        id: 2,
        chapterId: 98,
        question: "Parliament's power to make laws on State List subjects extends to:",
        options: [
            "UTs without legislature only.",
            "UTs with legislature (like Delhi/Puducherry) only.",
            "Both 1 and 2.",
            "Neither (State List is exclusive)."
        ],
        correctAnswer: 2,
        explanation: "Parliament has overriding legislative power for ALL UTs on ALL subjects.",
        difficulty: "easy"
    },
    {
        id: 3,
        chapterId: 98,
        question: "Regarding Delhi Administration (Art 239-AA):",
        options: [
            "CM appointed by LG.",
            "Ministers not to exceed 10% of Assembly.",
            "Can make laws on ALL State List subjects.",
            "1 and 2 only."
        ],
        correctAnswer: 1,
        explanation: "CM appointed by President. Excluded subjects: Public Order, Police, Land. 10% rule is correct.",
        difficulty: "medium"
    },
    {
        id: 4,
        chapterId: 98,
        question: "President's Regulation Making Power (Art 240):",
        options: [
            "Applicable to Delhi.",
            "Has same force as Act of Parliament.",
            "Cannot repeal Parliamentary Act.",
            "Available for Puducherry at all times."
        ],
        correctAnswer: 1,
        explanation: "It has the force of an Act of Parliament. Not applicable to Delhi. Only for Puducherry when assembly suspended.",
        difficulty: "hard"
    },
    {
        id: 5,
        chapterId: 98,
        question: "Comparison: Delhi vs Puducherry",
        options: [
            "Puducherry can legislate on all State List subjects.",
            "Delhi excluded from Public Order, Police, Land.",
            "Both CMs appointed by President.",
            "1, 2, and 3."
        ],
        correctAnswer: 3, // D in user provided key
        explanation: "All statements are correct. Puducherry has no excluded subjects in State List (though Parliament acts prevail).",
        difficulty: "medium"
    },
    {
        id: 6,
        chapterId: 98,
        question: "Judicial System in UTs:",
        options: [
            "Every UT must have separate HC.",
            "Only Delhi has separate HC.",
            "Parliament can place UT under adjacent State HC.",
            "President determines HC jurisdiction."
        ],
        correctAnswer: 2,
        explanation: "Parliament decides jurisdiction (Art 241). J&K also has HC, so B is wrong.",
        difficulty: "medium"
    },
    {
        id: 7,
        chapterId: 98,
        question: "Practice Q: 1. President makes regulations for all UTs. 2. Parliamentary law prevails over Delhi law.",
        options: [
            "1 only",
            "2 only",
            "1 and 2",
            "Neither"
        ],
        correctAnswer: 1,
        explanation: "President's power restricted to specified UTs (not all). Parliament's law prevails.",
        difficulty: "medium"
    }
];

export default CHAPTER_98_MCQS;
