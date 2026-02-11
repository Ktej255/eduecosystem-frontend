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

export const ANCIENT_CHAPTER_8_SUBTOPICS: Subtopic[] = [
    { id: 'satavahanas', name: 'The Satavahana Empire' },
    { id: 'administration', name: 'Society & Administration' }
];

export const ANCIENT_CHAPTER_8_MCQS: Question[] = [
    {
        id: 1,
        question: "The Satavahanas are credited with starting the practice of:",
        options: ["Gold Coinage", "Land Grants to Brahmins", "Temple Architecture", "Naval Warfare"],
        correctAnswer: 1,
        explanation: "The Satavahanas were the first rulers to make land grants to Brahmins and Buddhist monks (Nanaghat Edict). This laid the foundation of feudalism.",
        subtopic: 'satavahanas',
        difficulty: 'Moderate'
    },
    {
        id: 2,
        question: "Which Satavahana ruler is described as 'Trisamudra-toya-pit-vahana' (One whose horses drank the water of three seas)?",
        options: ["Simuka", "Gautamiputra Satakarni", "Hala", "Yajnashri Satakarni"],
        correctAnswer: 1,
        explanation: "Gautamiputra Satakarni (The greatest ruler). He defeated the Shakas (Nahapana) and restored the glory of the dynasty.",
        subtopic: 'satavahanas',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "The official language of the Satavahanas was:",
        options: ["Sanskrit", "Pali", "Prakrit", "Telugu"],
        correctAnswer: 2,
        explanation: "Prakrit was the official language. All inscriptions are in Prakrit and Brahmi script.",
        subtopic: 'administration',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "Which of the following ports was the most famous trade centre of the Satavahanas on the west coast?",
        options: ["Kalyan", "Sopara", "Bharuch (Barygaza)", "Tamralipti"],
        correctAnswer: 2,
        explanation: "Bharuch (Broach/Barygaza) was the most important port for trade with the Romans.",
        subtopic: 'administration',
        difficulty: 'Moderate'
    }
];

export const ANCIENT_CHAPTER_8_CONTENT = `
# BLOCK 1: THE SATAVAHANAS (Deccan)
## 🏰 LORDS OF THE DAKSHINAPATHA

**Overview:**
*   Ruled the Deccan (Maharashtra/Andhra) after the Mauryas (1st Century BC - 3rd Century AD).
*   **Founder:** Simuka.
*   **Capitals:** Pratisthana (Paithan) and Amravati (Dharanikota).
*   **Social Structure:** Matrilineal Names (Kings took mother's name like Gautamiputra), but succession was patriarchal (Father to Son).

**Key Rulers:**
*   **Shatakarni I:** The first great ruler. Mentioned in Nanaghat Inscription (by Queen Naganika).
*   **Hala:** A poet-king. Wrote *Gathasaptasati* (700 erotic verses in Prakrit).
*   **Gautamiputra Satakarni (106-130 AD):** The greatest. "Destroyer of the pride of Kshatriyas". Defeated the Shaka ruler Nahapana.
*   **Yajnashri Satakarni:** The last great ruler. His coins feature a **Ship**, showing love for navigation and trade.

# BLOCK 2: ADMINISTRATION & CULTURE
## 🏛️ LEGACY OF THE ANDHRAS

**Contributions:**
*   **Land Grants:** First rulers to make tax-free land grants (*Agraharas*) to Brahmins and Buddhist monks. This shifted power from the state to local landlords.
*   **Coins:** Issued coins of **Lead** (most common), Potin, and Copper. Did NOT issue Gold coins.
*   **Architecture:**
    *   **Amravati Stupa:** Famous for White Marble panels and narrative art.
    *   **Nagarjunakonda:** Famous university and stupa site.
    *   **Caves:** Karle Chaitya (Largest in India) and Nasik Caves.
`;
