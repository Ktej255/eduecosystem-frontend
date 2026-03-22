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

export const MEDIEVAL_CHAPTER_11_SUBTOPICS: Subtopic[] = [
    {
        "id": "administration",
        "name": "Mansabdari & Land Revenue",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    },
    {
        "id": "religion",
        "name": "Religious Policy & Din-i-Ilahi",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    }
];

export const MEDIEVAL_CHAPTER_11_MCQS: Question[] = [
    {
        id: 1,
        question: "The 'Mansabdari System' introduced by Akbar was borrowed from which country?",
        options: ["Persia", "Mongolia", "Turkey", "Afghanistan"],
        correctAnswer: 1,
        explanation: "It was a decimal system of army organization borrowed from Mongolia (Chengiz Khan's system). Mansab means rank.",
        subtopic: 'administration',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "In Akbar's revenue system (Zabti/Bandobast), 'Polaj' referred to:",
        options: ["Land left fallow for 1 year", "Land cultivated every year", "Barren land", "Land left fallow for 3-4 years"],
        correctAnswer: 1,
        explanation: "Polaj: Land cultivated annually. Parauti: Fallow for 1 year. Chachar: Fallow 3-4 years. Banjar: Uncultivable > 5 years.",
        subtopic: 'administration',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "The Ibadat Khana (House of Worship) at Fatehpur Sikri was built by Akbar for:",
        options: ["Offering daily Namaz", "Holding discussions with scholars of all religions", "Private meetings with nobles", "Harem ladies"],
        correctAnswer: 1,
        explanation: "Built in 1575. Initially for Muslims, later opened to Hindus, Jains, Christians, and Zoroastrians to discuss truth.",
        subtopic: 'religion',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "Who was the only Hindu noble to accept Akbar's 'Din-i-Ilahi'?",
        options: ["Man Singh", "Todar Mal", "Birbal", "Bhagwan Das"],
        correctAnswer: 2,
        explanation: "Birbal (Mahesh Das) was the only Hindu to accept Din-i-Ilahi (Tauhid-i-Ilahi). The order had very few followers.",
        subtopic: 'religion',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "Which battle marked the consolidation of Mughal rule by defeating Hemu?",
        options: ["First Battle of Panipat", "Second Battle of Panipat", "Battle of Haldighati", "Battle of Khanwa"],
        correctAnswer: 1,
        explanation: "Second Battle of Panipat (1556): Akbar (under Bairam Khan) defeated Hemu (Vikramaditya).",
        subtopic: 'administration',
        difficulty: 'Easy'
    }
];

export const MEDIEVAL_CHAPTER_11_CONTENT = `
# BLOCK 1: AKBAR THE GREAT (1556-1605)
## 👑 CONSOLIDATION & ADMINISTRATION

**Early Reforms:**
*   Abolished **Pilgrimage Tax** (1563) and **Jizya** (1564).
*   **Sulh-i-kul:** Peace with all.

**Rajput Policy:**
*   Matrimonial alliances (Married Harkha Bai/Jodha Bai of Amer).
*   Gave high ranks to Rajputs (Man Singh, Bhagwan Das).
*   **Battle of Haldighati (1576):** Defeated **Maharana Pratap** of Mewar.

**Mansabdari System:**
*   **Dual Rank:**
    *   **Zat:** Personal rank/Salary.
    *   **Sawar:** Number of horsemen to maintain.
*   Not hereditary. Paid in Jagir (land revenue) or Cash (Naqdi).

**Land Revenue (Raja Todar Mal):**
*   **Dahsala System:** Avg produce of last 10 years taxed at 1/3rd.
*   Land Classification: Polaj (Best), Parauti, Chachar, Banjar.

# BLOCK 2: RELIGION & CULTURE
## 🕉️ DIN-I-ILAHI

**Religious Evolution:**
1.  **Ibadat Khana (1575):** Religious Debates.
2.  **Mahzar (1579):** Infallibility Decree. Akbar became supreme interpreter of law.
3.  **Tauhid-i-Ilahi (Din-i-Ilahi) (1582):** A code of conduct/order (not religion). Motto: *Allahu Akbar* (God is Great).
    *   No scriptures/priests.
    *   Key features: Vegetarianism, abstinence from alcohol, peace.

**Navratnas:**
*   **Birbal:** Wit/Advisor.
*   **Abul Fazl:** Wrote *Ain-i-Akbari* and *Akbarnama*.
*   **Tansen:** Musician (Mian ki Malhar).
*   **Todar Mal:** Finance Minister.
*   **Man Singh:** General.

**Architecture:**
*   **Fatehpur Sikri:** Buland Darwaza (Gujarat victory), Panch Mahal, Diwan-i-Khas.
*   **Agra Fort:** Built in Red Sandstone.
`;
