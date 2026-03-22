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

export const MEDIEVAL_CHAPTER_8_SUBTOPICS: Subtopic[] = [
    {
        "id": "vijayanagar",
        "name": "Vijayanagar Empire & Krishnadevaraya",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    },
    {
        "id": "bahmani",
        "name": "Bahmani Kingdom & Administration",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    }
];

export const MEDIEVAL_CHAPTER_8_MCQS: Question[] = [
    {
        id: 1,
        question: "The Vijayanagar Empire was founded by Harihara and Bukka in 1336 on the banks of which river?",
        options: ["Krishna", "Kaveri", "Tungabhadra", "Godavari"],
        correctAnswer: 2,
        explanation: "Founded on the banks of Tungabhadra (Hampi) with the blessings of saint Vidyaranya.",
        subtopic: 'vijayanagar',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Krishnadevaraya, the greatest Vijayanagar ruler, belonged to which dynasty?",
        options: ["Sangama", "Saluva", "Tuluva", "Aravidu"],
        correctAnswer: 2,
        explanation: "Krishnadevaraya (1509-1529) belonged to the Tuluva dynasty.",
        subtopic: 'vijayanagar',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "Which of the following travelers visited the Vijayanagar Empire?",
        options: ["Ibn Battuta", "Nicolo Conti & Abdur Razzaq", "Marco Polo", "Al-Masudi"],
        correctAnswer: 1,
        explanation: "Nicolo Conti (Italian) and Abdur Razzaq (Persian) visited Vijayanagar and left detailed accounts of its wealth.",
        subtopic: 'vijayanagar',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "The 'Ashtadiggajas' in the court of Krishnadevaraya were:",
        options: ["Eight Ministers", "Eight Elephants", "Eight Telugu Poets", "Eight Generals"],
        correctAnswer: 2,
        explanation: "They were 8 great Telugu poets (e.g., Peddana, Tenali Rama). This was the golden age of Telugu literature.",
        subtopic: 'vijayanagar',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "The Battle of Talikota (1565), which led to the destruction of Vijayanagar, was fought between:",
        options: ["Vijayanagar and Mughals", "Vijayanagar and Deccan Sultanates", "Vijayanagar and Portuguese", "Vijayanagar and Bahmani Kingdom"],
        correctAnswer: 1,
        explanation: "The combined forces of Bijapur, Ahmednagar, Golconda, and Bidar defeated Vijayanagar (Ram Raya). Also called Battle of Rakshasa-Tangadi.",
        subtopic: 'vijayanagar',
        difficulty: 'Moderate'
    }
];

export const MEDIEVAL_CHAPTER_8_CONTENT = `
# BLOCK 1: THE VIJAYANAGAR EMPIRE (1336-1646)
## 🏰 THE CITY OF VICTORY

**Dynasties:** Sangama, Saluva, Tuluva, Aravidu.

**Krishnadevaraya (1509-1529):**
*   **Dynasty:** Tuluva. Greatest ruler.
*   **Titles:** *Andhra Bhoja*.
*   **Literature:** Wrote *Amuktamalyada* (Telugu - on polity) and *Jambavati Kalyanam* (Sanskrit).
*   **Ashtadiggajas:** 8 Telugu poets (e.g., Tenali Ramakrishna).
*   **Architecture:** Built Hazara Rama Temple, Vittalaswamy Temple (Musical Pillars).
*   **Portuguese:** Maintained friendly relations (Albuquerque) for horses.

**Administration (Nayankara System):**
*   **Amaram:** Land granted to military chiefs (**Nayaks**) in return for service. Similar to Iqta.
*   **Ayangar System:** 12 village officials.

**Foreign Travelers:**
*   **Nicolo Conti (Italian):** Devaraya I.
*   **Abdur Razzaq (Persian):** Devaraya II.
*   **Domingo Paes (Portuguese):** Krishnadevaraya.

# BLOCK 2: THE BAHMANI KINGDOM (1347-1527)
## 🕌 RIVALS OF THE SOUTH

**Overview:**
*   Founded by **Alauddin Bahman Shah** (Hasan Gangu). Capital: Gulbarga/Bidar.
*   Constant wars with Vijayanagar for the **Raichur Doab** (fertile land).

**Mahmud Gawan (Prime Minister):**
*   Served under Muhammad Shah III.
*   Persian merchant turned administrator.
*   Built a famous **Madrasa at Bidar**.
*   Executed due to conspiracy of Deccani nobles.

**Disintegration:**
*   Split into 5 Sultanates:
    1.  **Bijapur** (Adil Shahi) - Gol Gumbaz.
    2.  **Golconda** (Qutb Shahi) - Charminar.
    3.  **Ahmednagar** (Nizam Shahi).
    4.  **Berar** (Imad Shahi).
    5.  **Bidar** (Barid Shahi).
`;
