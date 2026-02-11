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

export const ANCIENT_CHAPTER_15_SUBTOPICS: Subtopic[] = [
    { id: 'society', name: 'Varna, Jati & Slavery' },
    { id: 'women', name: 'Position of Women' }
];

export const ANCIENT_CHAPTER_15_MCQS: Question[] = [
    {
        id: 1,
        question: "The first evidence of 'Sati' (immolation of widow) is found in which inscription?",
        options: ["Eran Inscription (510 AD)", "Allahabad Pillar Inscription", "Aihole Inscription", "Junagarh Inscription"],
        correctAnswer: 0,
        explanation: "The Eran Inscription of Bhanugupta (510 AD) provides the earliest epigraphic evidence of the practice of Sati.",
        subtopic: 'women',
        difficulty: 'Moderate'
    },
    {
        id: 2,
        question: "The concept of 'Untouchability' became firmly established during which period?",
        options: ["Early Vedic", "Later Vedic", "Mauryan", "Gupta/Post-Gupta"],
        correctAnswer: 3,
        explanation: "While roots existed earlier, untouchability became rigid and firmly established in the Dharma-shastras of the Gupta and Post-Gupta period. Fa-Hien describes 'Chandalas' living outside the city.",
        subtopic: 'society',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "Which of the following texts describes the four 'Ashramas' (stages of life) for the first time?",
        options: ["Jabala Upanishad", "Mundaka Upanishad", "Rig Veda", "Manusmriti"],
        correctAnswer: 0,
        explanation: "The Jabala Upanishad is the first to mention the four Ashramas clearly: Brahmacharya, Grihastha, Vanaprastha, and Sannyasa.",
        subtopic: 'society',
        difficulty: 'Hard'
    },
    {
        id: 4,
        question: "In ancient India, the term 'Vishti' referred to:",
        options: ["Religious tax", "Forced labor", "Irrigation tax", "A type of gold coin"],
        correctAnswer: 1,
        explanation: "Vishti was forced labor extracted by the King/Landlords from the people. It became very common in the Gupta period.",
        subtopic: 'society',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "The 'Mitakshara' system of law is related to:",
        options: ["Criminal procedure", "Inheritance of property", "Marriage rituals", "Temple administration"],
        correctAnswer: 1,
        explanation: "Mitakshara (by Vijnaneshwara) is a commentary on Yajnavalkya Smriti dealing with Hindu law of inheritance. It prevailed in all of India except Bengal.",
        subtopic: 'women',
        difficulty: 'Moderate'
    }
];

export const ANCIENT_CHAPTER_15_CONTENT = `
# BLOCK 1: SOCIAL STRUCTURE
## 🧱 VARNA TO JATI

**Evolution of Varna:**
*   **Early Vedic:** Flexible, based on color/profession.
*   **Later Vedic:** Hereditary. 4 Varnas defined.
*   **Mauryan:** Megasthenes mentions 7 classes (Philosophers, Farmers, Soldiers, etc.), confusing caste with occupation.
*   **Gupta Age:** Proliferation of **Castes (Jatis)** due to assimilation of tribals and foreigners (e.g., Hunas became Rajputs/Kshatriyas) and land grants.

**Slavery:**
*   Existed in all periods.
*   **Arthashastra:** Mentions 9 types of slaves. Says, "An Arya cannot be a slave".
*   **Manu:** Mentions 7 types.
*   Narada Smriti mentions 15 types.

**Sample of Untouchability:**
*   Chandalas were treated as untouchables.
*   **Fa-Hien:** Says Chandalas had to sound a clapper when entering the city so upper castes could avoid their sight.

# BLOCK 2: POSITION OF WOMEN
## 🚺 FROM FREEDOM TO SUBJUGATION

**Stages of Decline:**
1.  **Rig Vedic:** High status. Education allowed (Lopamudra, Apala). Attended assemblies. No Child Marriage.
2.  **Later Vedic:** Decline began. Daughter termed 'source of misery' (*Aitareya Brahmana*). Denied thread ceremony (*Upanayana*).
3.  **Gupta/Post-Gupta:**
    *   **Child Marriage:** Became the norm.
    *   **Widow Remarriage:** Prohibited by Smritis (Manu).
    *   **Sati:** First evidence in **Eran Inscription (510 AD)**.
    *   **Property Rights:** *Stridhana* (Women's wealth/gifts) was the only property allowed to women.

**Education:**
*   Women were generally denied Vedic education in later periods, but exceptions (poetesses, queens) continued to exist.
`;
