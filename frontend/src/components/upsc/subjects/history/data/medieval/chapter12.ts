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

export const MEDIEVAL_CHAPTER_12_SUBTOPICS: Subtopic[] = [
    {
        "id": "jahangir",
        "name": "Jahangir: Justice & Painting",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    },
    {
        "id": "shahjahan",
        "name": "Shah Jahan: Golden Age of Architecture",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    }
];

export const MEDIEVAL_CHAPTER_12_MCQS: Question[] = [
    {
        id: 1,
        question: "Which Mughal emperor installed the 'Chain of Justice' (Zanjir-i-Adl) at Agra Fort?",
        options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
        correctAnswer: 1,
        explanation: "Jahangir installed a gold chain with bells so that any seeker of justice could ring it and appeal directly to the Emperor.",
        subtopic: 'jahangir',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Captain William Hawkins and Sir Thomas Roe visited the court of which Mughal Emperor?",
        options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
        correctAnswer: 1,
        explanation: "They came as envoys of King James I of England to seek trade concessions. Thomas Roe got permission to set up factories.",
        subtopic: 'jahangir',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "The Mughal school of painting reached its zenith under:",
        options: ["Akbar", "Jahangir", "Shah Jahan", "Humayun"],
        correctAnswer: 1,
        explanation: "Jahangir was a naturalist and connoisseur of art. Ustad Mansur (birds/animals) and Bishandas (portraits) were famous painters.",
        subtopic: 'jahangir',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "Who built the 'Peacock Throne' (Takht-i-Taus)?",
        options: ["Akbar", "Jahangir", "Shah Jahan", "Nadir Shah"],
        correctAnswer: 2,
        explanation: "Shah Jahan built the Peacock Throne, studded with the Kohinoor. It was later looted by Nadir Shah in 1739.",
        subtopic: 'shahjahan',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "Prince Dara Shikoh, the eldest son of Shah Jahan, is famous for translating which texts into Persian?",
        options: ["Vedas", "Upanishads", "Puranas", "Ramayana"],
        correctAnswer: 1,
        explanation: "Dara Shikoh translated the Upanishads into Persian under the title 'Sirr-i-Akbar' (The Great Secret).",
        subtopic: 'shahjahan',
        difficulty: 'Moderate'
    }
];

export const MEDIEVAL_CHAPTER_12_CONTENT = `
# BLOCK 1: JAHANGIR (1605-1627)
## 🎨 THE CONNOISSEUR

**Administration:**
*   Original name: Salim.
*   **Chain of Justice:** Zanjir-i-Adl at Agra.
*   **Rebellion:** His son Khusrau rebelled. **Guru Arjan Dev** (5th Sikh Guru) was executed for blessing Khusrau.
*   **Nur Jahan:** His wife (Mehr-un-Nisa) held real power (Junta).

**Art & Culture:**
*   **Golden Age of Painting:** Moved from manuscript illustration to **Portrait** and **Nature** painting.
*   **Painters:** Ustad Mansur (Flora/Fauna), Bishandas, Abul Hasan.
*   **Architecture:** Tomb of Itimad-ud-Daulah (First use of **Pietra Dura** - inlay work).

**Foreigners:**
*   William Hawkins (1608) and Thomas Roe (1615) visited. East India Company established factory at Surat.

# BLOCK 2: SHAH JAHAN (1628-1658)
## 🏗️ THE ARCHITECT KING

**Golden Age of Architecture:**
*   **Taj Mahal:** In memory of Mumtaz Mahal. Chief architect: Ustad Ahmad Lahori.
*   **Red Fort (Delhi):** Diwan-i-Aam, Diwan-i-Khas. Only emperor to rule from Delhi for long.
*   **Jama Masjid (Delhi):** Largest mosque.
*   **Peacock Throne:** Symbol of wealth.

**Deccan Policy:**
*   Annexed Ahmednagar (1633).
*   Signed treaties with Golconda and Bijapur. Aurangzeb was appointed Viceroy of Deccan.

**War of Succession:**
*   Fought between his 4 sons: Dara Shikoh, Shuja, Aurangzeb, Murad.
*   **Dara Shikoh:** Scholar. Translated Upanishads (*Sirr-i-Akbar*).
*   **Battle of Samugarh:** Aurangzeb defeated Dara. Shah Jahan imprisoned in Agra Fort.
`;
