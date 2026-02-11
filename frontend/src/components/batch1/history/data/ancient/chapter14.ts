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

export const ANCIENT_CHAPTER_14_SUBTOPICS: Subtopic[] = [
    { id: 'astronomy', name: 'Mathematics & Astronomy' },
    { id: 'medicine', name: 'Medicine & Metallurgy' }
];

export const ANCIENT_CHAPTER_14_MCQS: Question[] = [
    {
        id: 1,
        question: "Who wrote the 'Aryabhatiya' and was the first to state that the earth rotates on its axis?",
        options: ["Varahamihira", "Aryabhatta", "Brahmagupta", "Bhaskara II"],
        correctAnswer: 1,
        explanation: "Aryabhatta (Gupta period) wrote Aryabhatiya. He explained the causes of eclipses, calculated Pi, and stated Earth rotates on its axis.",
        subtopic: 'astronomy',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "The 'Sushruta Samhita' is a famous text dealing with:",
        options: ["Algebra", "Astronomy", "Surgery", "Grammar"],
        correctAnswer: 2,
        explanation: "Sushruta Samhita is a foundational text on Ayurveda, specifically focusing on Surgery (Shalya-chikitsa). Sushruta is called the 'Father of Surgery'.",
        subtopic: 'medicine',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "The Iron Pillar at Mehrauli (Delhi), which has not rusted for centuries, belongs to which period?",
        options: ["Mauryan", "Gupta", "Kushana", "Mughal"],
        correctAnswer: 1,
        explanation: "The Iron Pillar is attributed to Chandragupta II (Vikramaditya) of the Gupta period. It showcases advanced metallurgy.",
        subtopic: 'medicine',
        difficulty: 'Moderate'
    },
    {
        id: 4,
        question: "Who wrote the 'Pancha-Siddhantika', summarizing five systems of astronomy?",
        options: ["Aryabhatta", "Varahamihira", "Brahmagupta", "Palakapya"],
        correctAnswer: 1,
        explanation: "Varahamihira wrote Pancha-Siddhantika and Brihat Samhita (Encyclopedia). He was one of the Navratnas.",
        subtopic: 'astronomy',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "The decimal system and the concept of Zero were invented in India during which period?",
        options: ["Vedic Age", "Mauryan Age", "Gupta Age", "Delhi Sultanate"],
        correctAnswer: 2,
        explanation: "The decimal system and zero usage flourished during the Gupta 'Golden Age'.",
        subtopic: 'astronomy',
        difficulty: 'Easy'
    }
];

export const ANCIENT_CHAPTER_14_CONTENT = `
# BLOCK 1: ASTRONOMY & MATHEMATICS
## 🔭 THE ZERO REVOLUTION

**1. Aryabhatta (5th Century AD - Gupta Age):**
*   **Works:** *Aryabhatiya*, *Arya-siddhanta*.
*   **Mathematics:** Invented **Zero** (concept/usage, though symbol came later). Calculated Value of **Pi** (3.1416). Invented Algebra.
*   **Astronomy:** Scientific explanation of Solar/Lunar Eclipses. Stated **Earth is round and rotates on its axis**.

**2. Varahamihira (6th Century AD - Gupta Age):**
*   **Works:** *Pancha-Siddhantika* (Summary of 5 schools: Romaka, Paulisa, Surya, etc.). *Brihat Samhita* (Encyclopedia on geography, botany, etc.).
*   Stated that the Moon rotates round the Earth and Earth round the Sun.

**3. Brahmagupta (7th Century AD):**
*   **Works:** *Brahmasphutasiddhanta*.
*   Gave rules for operating with Zero. Anticipated **Gravity** (*Gurutvakarshan*).

# BLOCK 2: MEDICINE & METALLURGY
## ⚕️ AYURVEDA & ALCHEMY

**Medicine:**
*   **Charaka (Kushana Age):** *Charaka Samhita*. Encyclopedia of Indian Medicine (Kayachikitsa).
*   **Sushruta (Gupta Age):** *Sushruta Samhita*. Father of **Surgery**. Describes Rhinoplasty (Plastic Surgery) and 121 surgical instruments.
*   **Vagbhata:** *Ashtanga Hridaya* (Summary of Charaka and Sushruta).

**Metallurgy:**
*   **Iron Pillar (Mehrauli):** Chandra (Chandragupta II). 23 feet high. Has not rusted for 1600 years due to formation of 'Misawite' (film).
*   **Sultanganj Buddha:** HUGE Copper statue of Buddha (Gupta period).

**Veterinary Science:**
*   *Hastyayurveda* (Treatise on Elephants) by Palakapya.
`;
