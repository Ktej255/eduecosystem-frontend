export interface Subtopic {
    id: string;
    name: string;
    explanation?: string;
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

export const MEDIEVAL_CHAPTER_7_SUBTOPICS: Subtopic[] = [
    {
        "id": "timur",
        "name": "Timur's Invasion",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    },
    {
        "id": "lodi",
        "name": "The Lodi Dynasty",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    }
];

export const MEDIEVAL_CHAPTER_7_MCQS: Question[] = [
    {
        id: 1,
        question: "Which ruler founded the city of Agra in 1504?",
        options: ["Bahlul Lodi", "Sikandar Lodi", "Ibrahim Lodi", "Akbar"],
        correctAnswer: 1,
        explanation: "Sikandar Lodi founded Agra in 1504 and shifted the capital there from Delhi.",
        subtopic: 'lodi',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Who was the last Sultan of the Delhi Sultanate, defeated by Babur in 1526?",
        options: ["Sikandar Lodi", "Daulat Khan Lodi", "Ibrahim Lodi", "Rana Sanga"],
        correctAnswer: 2,
        explanation: "Ibrahim Lodi was defeated and killed by Babur in the First Battle of Panipat (1526), ending the Sultanate.",
        subtopic: 'lodi',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "The invasion of Timur (Tamerlane) in 1398 AD dealt a death blow to which dynasty?",
        options: ["Khilji", "Tughlaq", "Sayyid", "Lodi"],
        correctAnswer: 1,
        explanation: "Timur invaded during the reign of Nasiruddin Mahmud Tughlaq, sacking Delhi and effectively ending the Tughlaq power.",
        subtopic: 'timur',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "Sikandar Lodi wrote Persian poetry under the pen name:",
        options: ["Gulrukhi", "Zafar", "Khusrau", "Ghalib"],
        correctAnswer: 0,
        explanation: "Sikandar Lodi was a poet and wrote under the pen name 'Gulrukhi'.",
        subtopic: 'lodi',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "The 'Gaz-i-Sikandari', a unit of measurement introduced by Sikandar Lodi, was used for:",
        options: ["Weighing Grain", "Measuring Land", "Measuring Cloth", "Weighing Gold"],
        correctAnswer: 1,
        explanation: "Gaz-i-Sikandari (approx 32 digits) was used for measuring cultivated land.",
        subtopic: 'lodi',
        difficulty: 'Moderate'
    }
];

export const MEDIEVAL_CHAPTER_7_CONTENT = `
# BLOCK 1: DECLINE OF SULTANATE
## 🏚️ TIMUR & THE SAYYIDS

**Timur's Invasion (1398 AD):**
*   **Ruler:** Nasiruddin Mahmud Tughlaq.
*   Timur (Lame) sacked Delhi, massacred thousands, and left India with immense booty.
*   Appointed **Khizr Khan** as the governor of Multan/Lahore.

**The Sayyid Dynasty (1414-1451):**
*   Founded by Khizr Khan (claimed descent from Prophet).
*   Ruled as vassals of Timur's son (Shah Rukh).
*   Weakest dynasty. Alam Shah voluntarily abdicated in favor of Bahlul Lodi.

# BLOCK 2: THE LODIS (1451-1526)
## 🏳️ THE FIRST AFGHAN DYNASTY

**1. Bahlul Lodi (1451-1489):**
*   Founder. Afghan noble (Pashtun).
*   Concept of Kingship: "First among equals" (treated nobles as friends).

**2. Sikandar Lodi (1489-1517):**
*   **Greatest Lodi ruler.**
*   **Agra:** Founded **Agra (1504)** and shifted capital.
*   **Administration:** Introduced **Gaz-i-Sikandari** (Land measure).
*   **Culture:** Wrote poetry as *Gulrukhi*.
*   **Religious Intolerance:** Destroyed Mathura temples.

**3. Ibrahim Lodi (1517-1526):**
*   Arrogant. Humiliated nobles (Daulat Khan Lodi, Governor of Punjab).
*   **Defeat:** Daulat Khan invited **Babur** to invade.
*   **Battle of Panipat (1526):** Defeated and killed by Babur. End of Delhi Sultanate.
`;
