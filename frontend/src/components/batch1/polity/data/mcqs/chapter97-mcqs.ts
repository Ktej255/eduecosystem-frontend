import { MCQ } from '../RevisionRegistry';

export const CHAPTER_97_MCQS: MCQ[] = [
    {
        id: 1,
        chapterId: 97,
        question: "Regarding Advocate General of a State, correct statement:",
        options: [
            "Appointed by Governor; removed like HC Judge.",
            "Must be qualified to be appointed as HC Judge.",
            "Audience right in any court in India.",
            "Right to vote in State Assembly."
        ],
        correctAnswer: 1,
        explanation: "Removal is at pleasure of Governor (not like Judge). Audience limited to State courts. No vote.",
        difficulty: "medium"
    },
    {
        id: 2,
        chapterId: 97,
        question: "Rights of Advocate General:",
        options: [
            "Can be member of any State Legislature Committee.",
            "Immunities of a state legislature member.",
            "Full-time counsel; debarred from private practice.",
            "1 and 2 only."
        ],
        correctAnswer: 3, // D is usually "1, 2, 3" etc. but user option A was "1 and 2 only". 
        // User Q6 options: A. 1 and 2 only. B. 2 and 3 only. C. 1 and 3 only. D. 1, 2, and 3.
        // Correct is A (1 and 2). 3 is wrong (private practice allowed).
        // My system uses index, so 0 -> "1 and 2 only". I'll adjust options to match.
        explanation: "He is not debarred from private practice.",
        difficulty: "medium"
    },
    {
        id: 3,
        chapterId: 97,
        question: "Consider statements on Advocate General:\n1. Retirement age fixed at 62.\n2. Member of any Legislature Committee.\n3. Remuneration by State Legislature Act.",
        options: [
            "1 and 2 only",
            "2 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 1,
        explanation: "1 Wrong (No age limit). 3 Wrong (Determined by Governor). 2 is correct.",
        difficulty: "hard"
    }
];

export default CHAPTER_97_MCQS;
