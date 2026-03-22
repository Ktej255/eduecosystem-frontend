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

export const MEDIEVAL_CHAPTER_14_SUBTOPICS: Subtopic[] = [
    {
        "id": "shivaji",
        "name": "Chhatrapati Shivaji Maharaj",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    },
    {
        "id": "peshwas",
        "name": "The Peshwa Rule",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    }
];

export const MEDIEVAL_CHAPTER_14_MCQS: Question[] = [
    {
        id: 1,
        question: "The 'Ashtapradhan' (Council of 8 Ministers) assisted which ruler?",
        options: ["Akbar", "Krishnadevaraya", "Shivaji", "Tipu Sultan"],
        correctAnswer: 2,
        explanation: "Shivaji was assisted by the Ashtapradhan. The Peshwa (Prime Minister) and Amatya (Finance) were key members.",
        subtopic: 'shivaji',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "In the Maratha taxation system, 'Chauth' was:",
        options: ["1/4th of the revenue paid to Marathas to avoid raids", "1/10th of the revenue for the King", "A tax on pilgrims", "A tax on trade"],
        correctAnswer: 0,
        explanation: "Chauth was 25% (1/4th) of revenue collected from non-Maratha territories to guarantee protection from Maratha raids. Sardeshmukhi was an additional 10%.",
        subtopic: 'shivaji',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "The Treaty of Purandar (1665) was signed between Shivaji and:",
        options: ["Afzal Khan", "Shaista Khan", "Raja Jai Singh", "Aurangzeb"],
        correctAnswer: 2,
        explanation: "Raja Jai Singh (representing Aurangzeb) forced Shivaji to sign the treaty, surrendering 23 forts.",
        subtopic: 'shivaji',
        difficulty: 'Moderate'
    },
    {
        id: 4,
        question: "Who among the Peshwas is known as the 'Fighting Peshwa' and popularized the ideal of 'HinduPad-Padshahi'?",
        options: ["Balaji Vishwanath", "Baji Rao I", "Balaji Baji Rao", "Madhav Rao"],
        correctAnswer: 1,
        explanation: "Baji Rao I (1720-1740) was the greatest warrior Peshwa. He expanded the empire northwards.",
        subtopic: 'peshwas',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "The Third Battle of Panipat (1761) was fought between the Marathas and:",
        options: ["Mughals", "Nadir Shah", "Ahmad Shah Abdali", "British"],
        correctAnswer: 2,
        explanation: "The Marathas (Sadashiv Rao Bhau) were defeated by Ahmad Shah Abdali (Durrani), checking Maratha power.",
        subtopic: 'peshwas',
        difficulty: 'Easy'
    }
];

export const MEDIEVAL_CHAPTER_14_CONTENT = `
# BLOCK 1: CHHATRAPATI SHIVAJI (1630-1680)
## 🚩 HINDAVI SWARAJYA

**Rise:**
*   Born at Shivneri. Mother: Jijabai. Tutor: Dadoji Kondadev.
*   **Guerrilla Warfare (Ganimi Kava):** Master of hit-and-run tactics on hilly terrain.
*   **Encounters:** Killed **Afzal Khan** (Bijapur) with Tiger Claws (*Wagh Nakh*). Attacked Shaista Khan (Mughal) at Pune.
*   **Coronation:** 1674 at **Raigad**. Took title *Chhatrapati*.

**Administration:**
*   **Ashtapradhan (8 Ministers):**
    1.  **Peshwa:** Prime Minister (General/Admin).
    2.  **Amatya/Majumdar:** Finance.
    3.  **Sumant/Dabir:** Foreign Secretary.
    4.  **Waqia-Navis:** Home/Intelligence.
*   **Revenue:** Ryotwari system (Direct collection).
    *   **Chauth:** 1/4th of revenue from neighbors (Protection money).
    *   **Sardeshmukhi:** 1/10th additional levy (Claimed as Head Deshmukh).

# BLOCK 2: RISE OF PESHWAS (1713-1761)
## 🗡️ MARATHA CONFEDERACY

**1. Balaji Vishwanath (1713-1720):**
*   First Peshwa. Secured rights of *Chauth* and *Sardeshmukhi* of Deccan from Mughals.

**2. Baji Rao I (1720-1740):**
*   "Fighting Peshwa". Guerrilla tactician.
*   Goal: "Strike at the trunk of the withering tree (Mughals)".
*   Created Confederacy: Scindias, Holkars, Gaekwads, Bhonsles.

**3. Balaji Baji Rao (Nana Saheb) (1740-1761):**
*   Expansion to Punjab.
*   **Third Battle of Panipat (1761):** Marathas defeated by **Ahmad Shah Abdali**. Shattered the dream of all-India empire.
`;
