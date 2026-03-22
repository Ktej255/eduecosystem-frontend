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

export const MEDIEVAL_CHAPTER_4_SUBTOPICS: Subtopic[] = [
    {
        "id": "foundation",
        "name": "Foundation (Aibak & Iltutmish)",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    },
    {
        "id": "balban",
        "name": "Razia Sultan & Balban",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    }
];

export const MEDIEVAL_CHAPTER_4_MCQS: Question[] = [
    {
        id: 1,
        question: "Who was the first Sultan of Delhi to issue regular currency and declare Delhi as the capital of his empire?",
        options: ["Qutbuddin Aibak", "Iltutmish", "Balban", "Alauddin Khilji"],
        correctAnswer: 1,
        explanation: "Iltutmish is considered the real founder of the Delhi Sultanate. He shifted the capital from Lahore to Delhi and introduced Silver Tanka and Copper Jital.",
        subtopic: 'foundation',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "The 'Chalisa' or 'Turkan-i-Chahalgani' (Group of 40 nobles) was organized by:",
        options: ["Qutbuddin Aibak", "Iltutmish", "Balban", "Razia Sultan"],
        correctAnswer: 1,
        explanation: "Iltutmish organized the 'Chalisa', a corps of 40 loyal Turkish slaves. It was later destroyed by Balban.",
        subtopic: 'foundation',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "Who among the following introduced the Persian festival 'Nauroz' in India?",
        options: ["Balban", "Iltutmish", "Alauddin Khilji", "Firoz Tughlaq"],
        correctAnswer: 0,
        explanation: "Balban introduced the Persian New Year 'Nauroz' to impress his nobles and subjects with the grandeur of the court.",
        subtopic: 'balban',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "The practice of 'Sijda' (Prostration) and 'Paibos' (Kissing the monarch's feet) was introduced by:",
        options: ["Iltutmish", "Balban", "Alauddin Khilji", "Muhammad bin Tughlaq"],
        correctAnswer: 1,
        explanation: "Balban introduced these Persian customs to enforce the theory of Divine Right of Kings (Zil-i-Ilahi).",
        subtopic: 'balban',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "Who was the first and only female ruler of the Delhi Sultanate?",
        options: ["Chand Bibi", "Razia Sultan", "Nur Jahan", "Durgavati"],
        correctAnswer: 1,
        explanation: "Razia Sultan (1236-1240) was the daughter of Iltutmish and the only woman to rule Delhi. She was defeated by the nobles (Chalisa).",
        subtopic: 'balban',
        difficulty: 'Easy'
    }
];

export const MEDIEVAL_CHAPTER_4_CONTENT = `
# BLOCK 1: FOUNDATION OF SULTANATE
## 🕌 THE SLAVE DYNASTY (MAMLUKS) (1206-1290)

**1. Qutbuddin Aibak (1206-1210):**
*   **Founder:** Slave of Muhammad Ghori. Ruled from **Lahore**.
*   **Titles:** *Lakh Baksh* (Giver of Lakhs).
*   **Architecture:** Started **Qutub Minar** (for saint Qutbuddin Bakhtiyar Kaki) and built *Quwwat-ul-Islam* mosque.
*   **Death:** Died while playing Chaugan (Polo).

**2. Shamsuddin Iltutmish (1210-1236):**
*   **Real Founder:** Shifted capital to **Delhi**.
*   **Saved India:** Refused asylum to Khwarizm Shah, saving India from **Chengiz Khan's** Mongol invasion.
*   **Administration:**
    *   **Iqta System:** Land revenue assignment to officers (Iqtadars).
    *   **Chalisa:** Corps of 40 Turkish nobles.
    *   **Coins:** Silver *Tanka* and Copper *Jital*.

# BLOCK 2: CONSOLIDATION & POWER
## ⚔️ RAZIA & BALBAN

**3. Razia Sultan (1236-1240):**
*   Nominated by Iltutmish. First female ruler.
*   Discarded purdah, held court.
*   Revolted against by Altunia (Governor of Bhatinda) and the Chalisa. Killed by bandits in Kaithal.

**4. Ghiyasuddin Balban (1266-1287):**
*   **Policy:** "Blood and Iron". Ruthless against robbers and rebels.
*   **Destruction of Chalisa:** Broke the power of the 40 nobles to restore prestige of Crown.
*   **Kingship Theory:** *Niyabat-i-Khudai* (Deputy of God) and *Zil-i-Ilahi* (Shadow of God).
*   **Customs:** Introduced *Sijda* (Prostration), *Paibos* (Kissing feet), and *Nauroz*.
*   **Military:** Separated military department (**Diwan-i-Arz**) to counter Mongols.
`;
