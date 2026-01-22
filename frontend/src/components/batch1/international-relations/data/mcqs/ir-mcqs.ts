// International Relations MCQs - Practice Questions
// UPSC Prelims-style questions on Foreign Policy, Organizations, Bilateral Relations

export interface IRMCQ {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    topic: string;
    difficulty: 'easy' | 'medium' | 'hard';
}

export const irMCQs: IRMCQ[] = [
    {
        id: "ir-mcq-01",
        question: "Panchsheel principles were signed between India and:",
        options: ["Pakistan", "China", "Nepal", "Sri Lanka"],
        correctAnswer: 1,
        explanation: "Panchsheel (Five Principles of Peaceful Coexistence) was signed between India and China in 1954.",
        topic: "Foreign Policy",
        difficulty: "easy"
    },
    {
        id: "ir-mcq-02",
        question: "Which countries are members of the Quad?",
        options: [
            "USA, UK, France, India",
            "USA, Japan, Australia, India",
            "USA, Japan, South Korea, India",
            "USA, UK, Australia, India"
        ],
        correctAnswer: 1,
        explanation: "Quad consists of USA, Japan, Australia, and India for Indo-Pacific cooperation.",
        topic: "Groupings",
        difficulty: "easy"
    },
    {
        id: "ir-mcq-03",
        question: "New Development Bank is an initiative of:",
        options: ["G20", "BRICS", "ASEAN", "SAARC"],
        correctAnswer: 1,
        explanation: "New Development Bank (HQ: Shanghai) was established by BRICS countries as an alternative to World Bank/IMF.",
        topic: "Groupings",
        difficulty: "medium"
    },
    {
        id: "ir-mcq-04",
        question: "India is NOT a member of which organization?",
        options: ["BRICS", "SCO", "APEC", "G20"],
        correctAnswer: 2,
        explanation: "India is not a member of APEC (Asia-Pacific Economic Cooperation). It's a member of BRICS, SCO, and G20.",
        topic: "Groupings",
        difficulty: "medium"
    },
    {
        id: "ir-mcq-05",
        question: "UN Security Council has how many permanent members?",
        options: ["3", "4", "5", "6"],
        correctAnswer: 2,
        explanation: "UNSC has 5 permanent members (P5): USA, UK, France, Russia, China with veto power.",
        topic: "UN",
        difficulty: "easy"
    },
    {
        id: "ir-mcq-06",
        question: "India's Act East Policy replaces which earlier policy?",
        options: ["Look West Policy", "Look East Policy", "Connect Central Asia", "Neighborhood First"],
        correctAnswer: 1,
        explanation: "Act East Policy (2014) evolved from Look East Policy (1991). Focus shifted from economic to strategic engagement with Southeast Asia.",
        topic: "Foreign Policy",
        difficulty: "medium"
    },
    {
        id: "ir-mcq-07",
        question: "Headquarters of International Solar Alliance is in:",
        options: ["Paris", "New Delhi", "Gurugram", "Geneva"],
        correctAnswer: 2,
        explanation: "ISA HQ is in Gurugram, India. It's the first treaty-based international organization headquartered in India.",
        topic: "Groupings",
        difficulty: "medium"
    },
    {
        id: "ir-mcq-08",
        question: "India is NOT a signatory to which treaty?",
        options: ["Paris Climate Agreement", "NPT", "CTBT", "Both NPT and CTBT"],
        correctAnswer: 3,
        explanation: "India has not signed NPT (discriminatory) or CTBT (Comprehensive Test Ban Treaty). India signed Paris Agreement.",
        topic: "Nonproliferation",
        difficulty: "hard"
    },
    {
        id: "ir-mcq-09",
        question: "Which country hosts the largest Indian diaspora?",
        options: ["USA", "UK", "UAE", "Saudi Arabia"],
        correctAnswer: 0,
        explanation: "USA hosts the largest Indian diaspora (~4.5 million). UAE and Saudi Arabia have large populations of temporary workers.",
        topic: "Diaspora",
        difficulty: "medium"
    },
    {
        id: "ir-mcq-10",
        question: "G20 Summit 2023 was hosted by:",
        options: ["Indonesia", "India", "Brazil", "Saudi Arabia"],
        correctAnswer: 1,
        explanation: "India hosted G20 Summit 2023 in New Delhi. Theme was 'Vasudhaiva Kutumbakam' (One Earth, One Family, One Future).",
        topic: "Groupings",
        difficulty: "easy"
    }
];
