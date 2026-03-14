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

export const MEDIEVAL_CHAPTER_6_SUBTOPICS: Question[] = [
    {
        "id": "mbt",
        "name": "Experiments of Muhammad bin Tughlaq",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    },
    {
        "id": "fst",
        "name": "Firoz Shah Tughlaq: Builder & Bigot",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    }
];

export const MEDIEVAL_CHAPTER_6_MCQS: Question[] = [
    {
        id: 1,
        question: "Which Sultan of Delhi is known as the 'Wisest Fool' due to his failed experiments?",
        options: ["Alauddin Khilji", "Muhammad bin Tughlaq", "Firoz Shah Tughlaq", "Sikandar Lodi"],
        correctAnswer: 1,
        explanation: "Muhammad bin Tughlaq was highly educated but his five ambitious projects (Capital shift, Token currency, etc.) failed disastrously due to poor execution.",
        subtopic: 'mbt',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Muhammad bin Tughlaq set up a new department of agriculture called:",
        options: ["Diwan-i-Arz", "Diwan-i-Kohi", "Diwan-i-Risalat", "Diwan-i-Bandagan"],
        correctAnswer: 1,
        explanation: "Diwan-i-Kohi (Department of Agriculture) was created to extend cultivation and give Takavi loans to farmers.",
        subtopic: 'mbt',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "Who wrote 'Kitab-ul-Rihla' and visited the court of Muhammad bin Tughlaq?",
        options: ["Al-Beruni", "Ibn Battuta", "Amir Khusrau", "Minhaj-us-Siraj"],
        correctAnswer: 1,
        explanation: "Ibn Battuta, a Moroccan traveler, visited India (1333-1347). He acted as Qazi of Delhi and wrote Rihla.",
        subtopic: 'mbt',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "Firoz Shah Tughlaq is primarily known for:",
        options: ["Market Reforms", "Building Canal Network", "Military Conquests", "Religious Tolerance"],
        correctAnswer: 1,
        explanation: "Firoz Shah built an extensive network of irrigation canals (e.g., Yamuna to Hissar). He also founded many cities like Firozabad and Hissar.",
        subtopic: 'fst',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "Which tax was imposed on Brahmins for the first time by Firoz Shah Tughlaq?",
        options: ["Kharaj", "Jizya", "Zakat", "Khams"],
        correctAnswer: 1,
        explanation: "Firoz Shah imposed Jizya (religious tax on non-Muslims) even on Brahmins, who were previously exempted.",
        subtopic: 'fst',
        difficulty: 'Moderate'
    }
];

export const MEDIEVAL_CHAPTER_6_CONTENT = `
# BLOCK 1: MUHAMMAD BIN TUGHLAQ (1325-1351)
## 🧪 THE MAD GENIUS

**Five Controversial Projects:**
1.  **Transfer of Capital (1327):** Delhi to **Daulatabad** (Devagiri). To control South. Failed due to lack of water and Mongol threat to North.
2.  **Token Currency (1329):** Bronze/Copper coins had same value as Silver Tanka. Failed due to massive forgery (every house became a mint).
3.  **Khurasan Expedition:** Raised huge army to conquer Iraq/Iran. Disbanded later (financial loss).
4.  **Qarachil Expedition:** Attempt to secure Himalayas. Army destroyed by cold/tribals.
5.  **Taxation in Doab:** Raised taxes during a famine. Resulted in rebellion.

**Achievements:**
*   **Diwan-i-Kohi:** Dept of Agriculture.
*   Most learned Sultan (Astronomy, Philosophy).

# BLOCK 2: FIROZ SHAH TUGHLAQ (1351-1388)
## 🏗️ THE BUILDER SULTAN

**Administration & Welfare:**
*   **Diwan-i-Khairat:** Marriage bureau for poor Muslims.
*   **Diwan-i-Bandagan:** Dept of Slaves (Had 1,80,000 slaves).
*   **Dar-ul-Shafa:** Charitable Hospital.
*   **Canals:** Western Yamuna Canal, Sutlej to Hansi.

**Religious Policy (Intolerant):**
*   Imposed **Jizya on Brahmins**.
*   Destroyed Jagannath Puri and Jwalamukhi temples.
*   Burnt a Brahmin alive.

**Cities:**
*   Founded Firozabad (Firoz Shah Kotla), Hissar, Jaunpur, Fatehabad.
*   Brought two Ashokan Pillars from Topra and Meerut to Delhi.
`;
