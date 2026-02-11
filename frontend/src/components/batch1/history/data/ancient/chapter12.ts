export interface Subtopic {
    id: string;
    name: string;
}

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic: string;
    difficulty?: 'Easy' | 'Moderate' | 'Hard';
}

export const ANCIENT_CHAPTER_12_SUBTOPICS: Subtopic[] = [
    { id: 'harsha', name: 'Harshavardhana & Kannauj' },
    { id: 'hiuen_tsang', name: 'Accounts of Hiuen Tsang' }
];

export const ANCIENT_CHAPTER_12_MCQS: Question[] = [
    {
        id: 1,
        question: "The biography 'Harshacharita' was written by whom?",
        options: ["Harshavardhana", "Banabhatta", "Hiuen Tsang", "Kalidasa"],
        correctAnswer: 1,
        explanation: "Banabhatta was the court poet of Harsha. He wrote 'Harshacharita' (Biography of Harsha) and 'Kadambari'.",
        subtopic: 'harsha',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Which Chalukyan ruler defeated Harshavardhana on the banks of the Narmada river?",
        options: ["Pulakeshin I", "Pulakeshin II", "Vikramaditya I", "Kirtivarman"],
        correctAnswer: 1,
        explanation: "Pulakeshin II (Chalukya of Badami) defeated Harsha and stopped his southern expansion. This is mentioned in the Aihole Inscription.",
        subtopic: 'harsha',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "Harshavardhana is credited with writing which of the following Sanskrit plays?",
        options: ["Ratnavali, Priyadarshika, Nagananda", "Shakuntalam, Malavikagnimitram", "Mrichhakatika, Mudrarakshasa", "Swapnavasavadattam"],
        correctAnswer: 0,
        explanation: "Harsha was a scholar-king. He wrote three plays: Ratnavali, Priyadarshika, and Nagananda.",
        subtopic: 'harsha',
        difficulty: 'Moderate'
    },
    {
        id: 4,
        question: "Hiuen Tsang (Xuanzang) presided over a grand religious assembly organized by Harsha at:",
        options: ["Thanesar", "Pataliputra", "Kannauj", "Prayag"],
        correctAnswer: 2,
        explanation: "Harsha organized a grand assembly at Kannauj to honor Hiuen Tsang and spread Mahayana doctrines.",
        subtopic: 'hiuen_tsang',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "According to Hiuen Tsang, the Nalanda University was maintained by the revenue of:",
        options: ["10 villages", "100 villages", "Royal Treasury only", "Donations from foreign monks"],
        correctAnswer: 1,
        explanation: "Harsha granted the revenue of 100 villages (later increased to 200) for the maintenance of Nalanda University.",
        subtopic: 'hiuen_tsang',
        difficulty: 'Hard'
    }
];

export const ANCIENT_CHAPTER_12_CONTENT = `
# BLOCK 1: KINGDOM OF KANNAUJ
## 👑 HARSHAVARDHANA (606-647 AD)

**Rise to Power:**
*   Belonged to **Pushyabhuti Dynasty** of Thanesar (Haryana).
*   Shifted capital to **Kannauj** (UP) after saving his sister Rajyashri.
*   Last great Hindu emperor of North India.

**Military Conquests:**
*   Conquered most of North India (Punjab, Kannauj, Bengal, Bihar, Orissa).
*   **Defeat:** Failed to invade South India. Defeated by **Pulakeshin II** (Chalukya) on the banks of **Narmada**. The Aihole inscription mentions this victory.

**Administration:**
*   More feudal and decentralized than Guptas.
*   Officers were paid in land grants.
*   Law and order was not as good as under Guptas (Hiuen Tsang was robbed twice).

# BLOCK 2: RELIGION & LITERATURE
## 📜 THE SCHOLAR KING

**Literature:**
*   **Banabhatta (Court Poet):** Wrote *Harshacharita* (First historical biography) and *Kadambari*.
*   **Harsha's Works:** Wrote 3 Sanskrit plays - *Ratnavali*, *Priyadarshika*, and *Nagananda*.

**Religion:**
*   Originally Shaivite, later embraced **Mahayana Buddhism**.
*   **Kannauj Assembly:** A grand religious conference to honor Hiuen Tsang.
*   **Prayag Assembly:** Held every 5 years (Maha Moksha Parishad). Harsha donated all his wealth here.

**Hiuen Tsang (Xuanzang):**
*   "Prince of Pilgrims". Visited India (630-645 AD).
*   Studied at **Nalanda** (under Shilabhadra).
*   Wrote *Si-Yu-Ki* (Records of the Western World).
*   Mentioned that untouchability was prevalent and city life had declined (towns described as desolate).
`;
