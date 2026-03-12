import { MCQSet } from "../../../types";

export const bankingSystemMcqs: MCQSet = {
    id: "banking-system-set-1",
    title: "Banking System Practice Questions",
    description: "Test your understanding of RBI and Monetary Policy",
    questions: [
        {
            id: "q1",
            question: "Which of the following serves as the 'Lender of Last Resort' in India?",
            options: [
                { id: "a", text: "State Bank of India" },
                { id: "b", text: "Reserve Bank of India" },
                { id: "c", text: "NABARD" },
                { id: "d", text: "Ministry of Finance" }
            ],
            correctAnswer: "b",
            explanation: "The RBI acts as the lender of last resort, providing liquidity to banks when they face a crisis and have no other source of funds.",
            difficulty: "easy",
            tags: ["Banking", "RBI"]
        },
        {
            id: "q2",
            question: "An increase in the Cash Reserve Ratio (CRR) by the RBI will typically lead to:",
            options: [
                { id: "a", text: "Increase in money supply" },
                { id: "b", text: "Decrease in money supply" },
                { id: "c", text: "No change in money supply" },
                { id: "d", text: "Increase in bank profits" }
            ],
            correctAnswer: "b",
            explanation: "When CRR is increased, banks have to keep more funds with RBI and have less to lend, thus decreasing the money supply in the economy.",
            difficulty: "medium",
            tags: ["Monetary Policy"]
        },
        {
            id: "q3",
            question: "Which institution issues the one rupee note in India?",
            options: [
                { id: "a", text: "Reserve Bank of India" },
                { id: "b", text: "State Bank of India" },
                { id: "c", text: "Ministry of Finance" },
                { id: "d", text: "NITI Aayog" }
            ],
            correctAnswer: "c",
            explanation: "One rupee notes and coins are issued by the Ministry of Finance and bear the signature of the Finance Secretary, unlike other currency notes issued by RBI.",
            difficulty: "medium",
            tags: ["Currency"]
        }
    ]
};
