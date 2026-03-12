import { MCQ } from '../RevisionRegistry';

export const CHAPTER_25_MCQS: MCQ[] = [
    {
        id: 1,

        question: "Which of the following describes the Rajya Sabha correctly?",
        options: [
            "It is a permanent body and not subject to dissolution",
            "One-half of its members retire every year",
            "Members are elected for a term of 5 years",
            "The Vice-President is elected by its members only"
        ],
        correctAnswer: 0,
        explanation: "Rajya Sabha is a permanent body; 1/3rd members retire every 2nd year; term is 6 years.",
        difficulty: "easy"
    },
    {
        id: 2,

        question: "The 'Joint Sitting' of the Parliament can be called for which of the following?",
        options: [
            "Ordinary Bill",
            "Money Bill",
            "Constitutional Amendment Bill",
            "Both A and C"
        ],
        correctAnswer: 0,
        explanation: "Joint sittings are only for Ordinary and Financial Bills (not Money or Amendment Bills).",
        difficulty: "medium"
    },
    {
        id: 3,

        question: "A Money Bill passed by Lok Sabha and sent to Rajya Sabha must be returned within:",
        options: ["10 days", "14 days", "30 days", "6 months"],
        correctAnswer: 1,
        explanation: "RS has only 14 days to suggest changes; it cannot reject or amend it permanently.",
        difficulty: "easy"
    },
    {
        id: 4,

        question: "Who among the following can participate in the proceedings of Parliament without being a member?",
        options: [
            "Solicitor General of India",
            "Attorney General of India",
            "Chief Election Commissioner",
            "CAG of India"
        ],
        correctAnswer: 1,
        explanation: "The Attorney General (Art 88) has the right to speak/participate in both Houses but not the right to vote.",
        difficulty: "medium"
    },
    {
        id: 5,

        question: "The quorum for either House of Parliament is fixed at:",
        options: [
            "1/10th of the total members",
            "1/3rd of the total members",
            "Majority of members",
            "Fixed by the President"
        ],
        correctAnswer: 0,
        explanation: "Quorum is 10% of total strength of the House including the presiding officer.",
        difficulty: "easy"
    },
    {
        id: 6,

        question: "The Speaker of Lok Sabha can be removed by a resolution passed by:",
        options: [
            "Effective Majority of the House",
            "Special Majority of the House",
            "Simple Majority of both Houses",
            "2/3rd majority of members present and voting"
        ],
        correctAnswer: 0,
        explanation: "A resolution passed by a majority of all the then members of the Lok Sabha (Effective Majority).",
        difficulty: "hard"
    },
    {
        id: 7,

        question: "Which of the following bills DOES NOT lapse on the dissolution of Lok Sabha?",
        options: [
            "A bill pending in Lok Sabha",
            "A bill passed by Lok Sabha but pending in Rajya Sabha",
            "A bill pending in Rajya Sabha but not passed by Lok Sabha",
            "All of the above lapse"
        ],
        correctAnswer: 2,
        explanation: "If a bill originated in RS and is still there (not yet passed by LS), it does not lapse.",
        difficulty: "hard"
    },
    {
        id: 8,

        question: "In the absence of the Speaker and Deputy Speaker of Lok Sabha, who presides over a Joint Sitting?",
        options: [
            "Chairman of Rajya Sabha",
            "Deputy Chairman of Rajya Sabha",
            "A member elected by the Houses",
            "Senior-most member of LS"
        ],
        correctAnswer: 1,
        explanation: "The Chairman of RS NEVER presides over a joint sitting because he is not a member of either House.",
        difficulty: "hard"
    },
    {
        id: 9,

        question: "The power to 'adjourn sine die' belongs to:",
        options: ["The President", "The Presiding Officer of the House", "The PM", "The Parliamentary Affairs Minister"],
        correctAnswer: 1,
        explanation: "Adjournment (terminating sitting) is power of Speaker/Chairman. Prorogation (terminating session) is power of President.",
        difficulty: "medium"
    },
    {
        id: 10,

        question: "Which Articles deal with the 'Sessions of Parliament'?",
        options: ["Article 80", "Article 85", "Article 100", "Article 110"],
        correctAnswer: 1,
        explanation: "Article 85 deals with summoning, prorogation and dissolution.",
        difficulty: "medium"
    }
];

export default CHAPTER_25_MCQS;
