import { MCQ } from '../RevisionRegistry';

export const CHAPTER_49_MCQS: MCQ[] = [
    {
        id: 1, // User Q11
        chapterId: 49,
        question: "Regarding Special Officer for Linguistic Minorities:\n1. Constitution specifies qualifications/salary.\n2. Created in 1957 under Art 350-B.\n3. Reports to President through Home Ministry.",
        options: [
            "1 and 2 only",
            "2 only",
            "1 and 3 only",
            "2 and 3 only"
        ],
        correctAnswer: 1,
        explanation: "Constitution is silent on qualifications (1 wrong). Under Ministry of Minority Affairs, not Home (3 wrong).",
        difficulty: "hard"
    },
    {
        id: 2, // User Q12
        chapterId: 49,
        question: "Term 'Linguistic Minority' is defined in which Article?",
        options: [
            "Article 29",
            "Article 30",
            "Article 350-B",
            "Not defined in the Constitution"
        ],
        correctAnswer: 3,
        explanation: "Terms 'Minority' and 'Linguistic Minority' are not defined in the Constitution.",
        difficulty: "medium"
    },
    {
        id: 3, // User Q13 - Relating to NCST but placed here in user text. I'll include it here or move it? 
        // User text had Q13 in this section, but it asks about NCST. I already handled NCST MCQs.
        // However, this Q is about "who specifies additional functions".
        // I will add it here as a cross-topic revision question or leave it if strictly chapter-bound. 
        // It's safer to include it to ensure user sees it.
        chapterId: 49,
        question: "(Revision) Who specifies 'additional functions' for NCST?",
        options: [
            "Parliament by law",
            "President of India",
            "Ministry of Tribal Affairs",
            "Supreme Court"
        ],
        correctAnswer: 1,
        explanation: "The President specified them in the 2005 Notification.",
        difficulty: "medium"
    }
];

export default CHAPTER_49_MCQS;
