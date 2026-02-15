import { FlashcardSet } from "../../../types";

export const bankingSystemFlashcards: FlashcardSet = {
    id: "banking-system-fc-set",
    title: "Banking System Key Concepts",
    description: "Rapid recall for Banking terms",
    cards: [
        {
            id: "fc1",
            front: "What is CRR?",
            back: "Cash Reserve Ratio: The percentage of total deposits that banks must strictly keep with the RBI in cash liquid form.",
            difficulty: "easy",
            tags: ["Monetary Policy"]
        },
        {
            id: "fc2",
            front: "What is SLR?",
            back: "Statutory Liquidity Ratio: The percentage of deposits banks must maintain in liquid assets like cash, gold, or government securities.",
            difficulty: "medium",
            tags: ["Monetary Policy"]
        },
        {
            id: "fc3",
            front: "Repo Rate",
            back: "The rate at which RBI lends money to commercial banks in the event of any shortfall of funds. Used to control inflation.",
            difficulty: "medium",
            tags: ["Monetary Policy"]
        },
        {
            id: "fc4",
            front: "Reverse Repo Rate",
            back: "The rate at which the RBI borrows money from commercial banks within the country.",
            difficulty: "medium",
            tags: ["Monetary Policy"]
        },
        {
            id: "fc5",
            front: "Scheduled Bank",
            back: "A bank listed in the Second Schedule of the RBI Act, 1934. Must have paid-up capital of at least Rs. 5 Lakhs.",
            difficulty: "hard",
            tags: ["Banking Structure"]
        }
    ]
};
