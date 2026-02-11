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

export const ANCIENT_CHAPTER_11_SUBTOPICS: Subtopic[] = [
    { id: 'political', name: 'Political History (Samudragupta to Skandagupta)' },
    { id: 'golden_age', name: 'Administration, Society & Golden Age' }
];

export const ANCIENT_CHAPTER_11_MCQS: Question[] = [
    {
        id: 1,
        question: "Who is known as the 'Napoleon of India' for his extensive military conquests?",
        options: ["Chandragupta I", "Samudragupta", "Chandragupta II", "Skandagupta"],
        correctAnswer: 1,
        explanation: "V.A. Smith called Samudragupta the 'Napoleon of India'. His conquests are detailed in the Allahabad Pillar Inscription (Prayag Prashasti).",
        subtopic: 'political',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "The 'Prayag Prashasti' (Allahabad Pillar Inscription) was composed by:",
        options: ["Kalidasa", "Harisena", "Ravikirti", "Banabhatta"],
        correctAnswer: 1,
        explanation: "Harisena, the court poet of Samudragupta, composed the Prayag Prashasti in Sanskrit.",
        subtopic: 'political',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "The Chinese traveler Fa-Hien visited India during the reign of:",
        options: ["Samudragupta", "Chandragupta II (Vikramaditya)", "Kanishka", "Harshavardhana"],
        correctAnswer: 1,
        explanation: "Fa-Hien visited India (399-414 AD) during the reign of Chandragupta II to collect Buddhist texts. He describes the peace and prosperity of the land.",
        subtopic: 'political',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "Which Gupta ruler successfully repulsed the invasion of the Hunas?",
        options: ["Kumaragupta", "Skandagupta", "Vishnugupta", "Buddhagupta"],
        correctAnswer: 1,
        explanation: "Skandagupta (455-467 AD) is famous for defeating the Hunas and saving the empire from early collapse.",
        subtopic: 'political',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "The 'Navratnas' (Nine Gems) flourished in the court of:",
        options: ["Samudragupta", "Chandragupta II", "Harshavardhana", "Akbar"],
        correctAnswer: 1,
        explanation: "Chandragupta II (Vikramaditya) had the Navratnas, including Kalidasa, Amarasimha, and Varahamihira.",
        subtopic: 'golden_age',
        difficulty: 'Easy'
    }
];

export const ANCIENT_CHAPTER_11_CONTENT = `
# BLOCK 1: POLITICAL HISTORY
## 👑 THE IMPERIAL GUPTAS (319 - 540 AD)

**1. Chandragupta I (319-335 AD):**
*   Started the **Gupta Era (319 AD)**.
*   Married Kumaradevi (Lichchhavi princess). Issued King-Queen type coins.

**2. Samudragupta (335-375 AD):**
*   **Prayag Prashasti:** Composed by Harisena. Describes his Digvijaya (Conquest in all directions).
*   **Policies:**
    *   **Aryavarta (North):** Prasabhoddharana (Violent extermination). Annexed territories.
    *   **Dakshinapatha (South):** Grahana-Mokshan-Anugraha (Capture, Release, Reinstall). Defeated 12 kings but returned their kingdoms.
*   **Coins:** Shown playing **Veena** (Lover of music). Performed Ashvamedha.

**3. Chandragupta II (Vikramaditya) (376-415 AD):**
*   Defeated the **Shakas** (Western Satraps) and took the title *Sakari*.
*   **Fa-Hien** visited his court.
*   **Navratnas:** Kalidasa (Poet), Amarasimha (Lexicographer), Dhanvantari (Physician), Varahamihira (Astronomer).

**4. Later Guptas:**
*   **Kumaragupta:** Founded **Nalanda University** (Oxford of Mahayana Buddhism).
*   **Skandagupta:** Defeated the **Hunas**. Restored Sudarshana Lake.

# BLOCK 2: THE GOLDEN AGE
## 🌟 ART, SCIENCE & ADMINISTRATION

**Administration:**
*   **Decentralized:** Feudalism grew. Land grants increased.
*   **Vishti:** Forced labor became common.
*   **Law:** Civil and Criminal laws were clearly defined for the first time (Smritis).

**Religion:**
*   Revival of **Brahmanism** (Vaishnavism/Shaivism).
*   Temple architecture began (Nagara Style). **Dashavatara Temple** (Deogarh).
*   Buddhism declined but Nalanda flourished.

**Literature (Sanskrit):**
*   **Kalidasa:** *Shakuntalam* (Drama), *Meghadutam* (Poem).
*   **Vishkakhadatta:** *Mudrarakshasa* (Spy thriller).
*   **Shudraka:** *Mrichhakatika* (The Little Clay Cart - story of a merchant and courtesan).
`;
