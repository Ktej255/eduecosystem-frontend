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
    subtopic: string; // ID of the subtopic
    difficulty?: 'Easy' | 'Moderate' | 'Hard';
}

export const MEDIEVAL_CHAPTER_1_SUBTOPICS: Question[] = [
    {
        "id": "tripartite",
        "name": "Tripartite Struggle",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    },
    {
        "id": "cholas",
        "name": "The Chola Empire",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    },
    {
        "id": "early_medieval",
        "name": "Early Medieval Society",
        "explanation": "The correct answer covers this historical event precisely: Information pending."
    }
];

export const MEDIEVAL_CHAPTER_1_MCQS: Question[] = [
    {
        id: 1,
        question: "Who among the following was the founder of the Rashtrakuta Empire?",
        options: ["Dantidurga", "Krishna I", "Govinda III", "Amoghavarsha"],
        correctAnswer: 0,
        explanation: "Dantidurga was the founder of the Rashtrakuta dynasty. He defeated the Chalukyas of Badami.",
        subtopic: 'tripartite',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "The 'Tripartite Struggle' for the control of Kanauj involved which of the following three powers?",
        options: ["Palas, Pratiharas, and Cholas", "Palas, Pratiharas, and Rashtrakutas", "Cholas, Pandyas, and Cheras", "Palas, Cholas, and Rashtrakutas"],
        correctAnswer: 1,
        explanation: "The Tripartite Struggle involved the Palas (East), Pratiharas (North/West), and Rashtrakutas (Deccan) for control over the fertile Gangetic plain and Kanauj.",
        subtopic: 'tripartite',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "Consider the following statements regarding the Chola village administration:\n1. It was known for its high degree of autonomy.\n2. The 'Ur' was a general assembly of the village.\n3. The 'Sabha' was an assembly of Brahmin villages (Agraharas).\n\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All statements are correct. Chola village administration is famous for local self-government. Ur was the general assembly, and Sabha/Mahasabha was for Brahmin villages.",
        subtopic: 'cholas',
        difficulty: 'Moderate'
    },
    {
        id: 4,
        question: "The famous Brihadeshwara Temple at Thanjavur was built by which Chola ruler?",
        options: ["Rajaraja I", "Rajendra I", "Parantaka I", "Aditya I"],
        correctAnswer: 0,
        explanation: "Rajaraja I built the Brihadeshwara Temple (Rajarajeshwara temple) at Thanjavur, completed around 1010 AD.",
        subtopic: 'cholas',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "Which Chola King is credited with the conquest of the Maldives and parts of Sri Lanka?",
        options: ["Rajaraja I", "Rajendra I", "Kulothunga I", "Vijayalaya"],
        correctAnswer: 0,
        explanation: "Rajaraja I conquered the Maldives and northern Sri Lanka. His son Rajendra I completed the conquest of Sri Lanka.",
        subtopic: 'cholas',
        difficulty: 'Moderate'
    }
];

export const MEDIEVAL_CHAPTER_1_CONTENT = `
# BLOCK 1: THE TRIPARTITE STRUGGLE (8th - 10th Century)
## ⚔️ STRUGGLE FOR KANAUJ

**The Contenders:**
*   **The Palas (East):** Dominated Bengal. Patrons of Buddhism (Vikramshila University founded by Dharmapala).
*   **The Pratiharas (West):** Dominated Gujarat/Rajasthan. Stopped Arab invasions. (Nagabhata II, Bhoja).
*   **The Rashtrakutas (Deccan):** Capital at Manyakheta. Toughest warriors. (Dantidurga, Krishna I - built Kailasa Temple at Ellora).

**Why Kanauj?**
*   Symbol of sovereignty (former capital of Harsha).
*   Control over the fertile Gangetic Doab.
*   Control over trade routes (Uttararapatha).

**Outcome:**
*   The struggle weakened all three dynasties, paving the way for the Islamic invasions.
*   The Rashtrakutas were arguably the strongest geographically but were distracted by conflicts with Pallavas/Chalukyas in the south.

# BLOCK 2: THE CHOLA EMPIRE (The Imperial Cholas)
## 🏛️ ADMINISTRATION & NAVAL POWER

**Key Rulers:**
1.  **Vijayalaya (850 AD):** Founder. Captured Thanjavur.
2.  **Rajaraja I (985-1014 AD):**
    *   Built Brihadeshwara Temple (Shiva).
    *   Started naval expeditions (Maldives, Sri Lanka).
3.  **Rajendra I (1014-1044 AD):**
    *   Conquered whole Sri Lanka.
    *   Expedition to Ganga river (Gangaikondachola).
    *   Naval expedition to Sri Vijaya (Indonesia) to protect trade route to China.

**Administration (High Yield for Prelims):**
*   **Mandalams:** Provinces.
*   **Valanadus:** Districts.
*   **Nadus:** Groups of villages.
*   **Local Self-Government:**
    *   **Ur:** General assembly of tax-paying residents.
    *   **Sabha/Mahasabha:** Assembly of Brahmins (Agrahamas). Worked through committees called *Variyams* (e.g., Tank Committee, Garden Committee).
    *   **Nagaram:** Assembly of merchants.

# BLOCK 3: EARLY MEDIEVAL SOCIETY
## 👥 FEUDALISM & RELIGION

**Feudalism (Samanta System):**
*   Kings granted land to officers/Brahmins instead of cash salaries.
*   Rise of landed intermediaries (Samantas) who maintained troops for the King.
*   Decline of trade and coinage in this period (Debated by historians).

**Religion:**
*   **Bhakti Movement (South):** Nayanars (Shiva) and Alvars (Vishnu) challenged Hinduism's rigidity and caste system.
*   **Shankaracharya:** Propounded *Advaita Vedanta* (Monism). Established 4 Mathas (Dwarka, Puri, Sringeri, Badrinath).
`;
