import { MCQ } from '../RevisionRegistry';

export const CHAPTER_43_MCQS: MCQ[] = [
    {
        id: 1,

        question: "Regarding SPSC, which is strictly correct?",
        options: [
            "Chairman appointed by Governor.",
            "Members hold office during pleasure of Governor.",
            "Removed by Governor after HC inquiry.",
            "Retirement age is 65."
        ],
        correctAnswer: 0,
        explanation: "Tenure Security exists (No 'pleasure'). Removal by President (not Governor). Retirement is 62.",
        difficulty: "medium"
    },
    {
        id: 2,

        question: "Who removes the Chairman of an SPSC?",
        options: [
            "Governor",
            "President",
            "Chief Justice of High Court",
            "State Legislature"
        ],
        correctAnswer: 1,
        explanation: "Although appointed by Governor, removal is only by the President.",
        difficulty: "medium"
    },
    {
        id: 3,

        question: "Which of the following describes the Independence of SPSC?\n1. Conditions not varied to disadvantage.\n2. Expenses charged on Consolidated Fund of India.\n3. Chairman eligible for UPSC Chairman.",
        options: [
            "1 only",
            "1 and 3 only",
            "2 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 1,
        explanation: "Expenses charged on Consolidated Fund of the STATE. 1 and 3 are correct.",
        difficulty: "hard"
    },
    {
        id: 4,

        question: "SPSC is consulted on:",
        options: [
            "State service recruitment methods.",
            "Disciplinary matters.",
            "Principles of appointment.",
            "All of the above."
        ],
        correctAnswer: 3,
        explanation: "Same consultation scope as UPSC but for state services.",
        difficulty: "easy"
    },
    {
        id: 5,

        question: "Can Governor suspend an SPSC member?",
        options: [
            "No, only President can.",
            "Yes, pending final removal order by President.",
            "Yes, indefinitely.",
            "Only on CM's advice."
        ],
        correctAnswer: 1,
        explanation: "Governor has the power to suspend during the inquiry.",
        difficulty: "medium"
    }
];

export default CHAPTER_43_MCQS;
