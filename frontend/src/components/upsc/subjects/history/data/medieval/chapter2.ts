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
    subtopic: string; // ID of the subtopic
    difficulty?: 'Easy' | 'Moderate' | 'Hard';
}

export const MEDIEVAL_CHAPTER_2_SUBTOPICS: Subtopic[] = [
    {
        "id": "ghazni",
        "name": "Mahmud of Ghazni",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    },
    {
        "id": "ghori",
        "name": "Muhammad Ghori",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    },
    {
        "id": "rajputs",
        "name": "Rajput States",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    }
];

export const MEDIEVAL_CHAPTER_2_MCQS: Question[] = [
    {
        id: 1,
        question: "Mahmud of Ghazni invaded India 17 times. His most famous expedition was against which temple in 1025 AD?",
        options: ["Jagannath Puri", "Somnath Temple", "Kashi Vishwanath", "Brihadeshwara Temple"],
        correctAnswer: 1,
        explanation: "Mahmud of Ghazni sacked the Somnath Temple in Gujarat in 1025 AD. It was his 16th and most famous expedition.",
        subtopic: 'ghazni',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "The First Battle of Tarain (1191) was fought between Muhammad Ghori and:",
        options: ["Prithviraj Chauhan", "Jaichand", "Rana Sanga", "Maharana Pratap"],
        correctAnswer: 0,
        explanation: "The First Battle of Tarain (1191) was fought between Muhammad Ghori and Prithviraj Chauhan. Prithviraj defeated Ghori.",
        subtopic: 'ghori',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "Consider the following statements regarding the Rajput polity:\n1. It was based on a clan-based feudal structure.\n2. Land grants were given to kinsmen (Bhai-Bant).\n3. They lacked a unified central authority to resist foreign invasions effectively.\n\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All are correct. Rajput polity was clan-based (Bhai-Bant system), feudal, and suffered from internal rivalries and lack of unity.",
        subtopic: 'rajputs',
        difficulty: 'Moderate'
    },
    {
        id: 4,
        question: "Who was the court poet of Mahmud of Ghazni and author of the famous book 'Shah Namah'?",
        options: ["Al-Biruni", "Firdausi", "Utbi", "Minhaj-us-Siraj"],
        correctAnswer: 1,
        explanation: "Firdausi wrote 'Shah Namah'. Al-Biruni wrote 'Kitab-ul-Hind'. Both were associated with Ghazni's court.",
        subtopic: 'ghazni',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "The Battle of Chandawar (1194) was fought between Muhammad Ghori and:",
        options: ["Prithviraj Chauhan", "Jaichand of Kanauj", "Rana Kumbha", "Bhimdev II"],
        correctAnswer: 1,
        explanation: "In the Battle of Chandawar (1194), Muhammad Ghori defeated and killed Jaichand, the ruler of Kanauj (Gahadavala dynasty).",
        subtopic: 'ghori',
        difficulty: 'Easy'
    }
];

export const MEDIEVAL_CHAPTER_2_CONTENT = `
# BLOCK 1: ARAB & TURKISH INVASIONS
## ⚔️ GHAZNI & GHORI

**1. Mahmud of Ghazni (998-1030 AD):**
*   **Purpose:** Plunder (Wealth), not empire building.
*   **Invasions:** 17 times.
*   **Key Event:** Sacking of Somnath Temple (1025 AD).
*   **Scholars:**
    *   **Al-Biruni:** Wrote *Kitab-ul-Hind* (Encyclopedic work on India).
    *   **Firdausi:** Wrote *Shah Namah*.

**2. Muhammad Ghori (1173-1206 AD):**
*   **Purpose:** Empire building. Regarded as the **founder of Muslim rule in India**.
*   **Battles of Tarain:**
    *   **First Battle (1191):** Defeated by Prithviraj Chauhan.
    *   **Second Battle (1192):** Defeated Prithviraj Chauhan. (Turning point in Indian History).
*   **Battle of Chandawar (1194):** Defeated Jaichand of Kanauj.
*   **Legacy:** Left his generals (Qutbuddin Aibak, Bakhtiyar Khilji) to govern Indian territories.

# BLOCK 2: RAJPUT STATES
## 🏰 CLAN SYSTEM & POLITY

**Key Clans:**
*   **Chauhans (Chahamanas):** Ajmer/Delhi. (Prithviraj III).
*   **Gahadavalas:** Kanauj. (Jaichand).
*   **Paramaras:** Malwa. (Raja Bhoja - scholar king).
*   **Solankis (Chalukyas of Gujarat):** Built Dilwara Temples (Mt. Abu) & Modhera Sun Temple.
*   **Chandellas:** Bundelkhand. Built Khajuraho Temples.

**Features of Rajput Polity:**
1.  **Feudal/Clan-based:** State was considered a joint property of the clan (*Bhai-Bant* system).
2.  **Lack of Unity:** Constant warfare among clans prevented a united front against Turks.
3.  **Forts:** Major focus on building hill forts (Durgs) for defense.
4.  **Social:** Rise of Jauhar (mass self-immolation by women) to escape dishonor during wars.
`;
