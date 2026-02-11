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

export const ANCIENT_CHAPTER_2_SUBTOPICS: Subtopic[] = [
    { id: 'vedic', name: 'Vedic Literature & Society' },
    { id: 'later_vedic', name: 'Later Vedic Changes' },
    { id: 'mahajanapadas', name: 'Mahajanapadas & Magadha' }
];

export const ANCIENT_CHAPTER_2_MCQS: Question[] = [
    {
        id: 1,
        question: "The 'Gayatri Mantra' is dedicated to which deity and is found in which Veda?",
        options: ["Indra, Rig Veda", "Savitri, Rig Veda", "Agni, Sama Veda", "Surya, Atharva Veda"],
        correctAnswer: 1,
        explanation: "The Gayatri Mantra is found in the 3rd Mandala of the Rig Veda and is dedicated to Savitri (Solar deity).",
        subtopic: 'vedic',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Consider the following statements regarding the Early Vedic period:\n1. Women could attend the popular assemblies known as 'Sabha' and 'Samiti'.\n2. Child marriage was prevalent.\n3. The society was patriarchal but egalitarian.\n\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 2,
        explanation: "Statement 1 is Correct: Women attended Sabha/Samiti (Vidatha). Statement 2 is Incorrect: Child marriage absent. Statement 3 is Correct: Patriarchal but women enjoyed high status.",
        subtopic: 'vedic',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "Which of the following Mahajanapadas was situated to the south of the Vindhya range?",
        options: ["Avanti", "Kosala", "Assaka", "Magadha"],
        correctAnswer: 2,
        explanation: "Assaka (capital Potana/Potali) on the banks of Godavari was the only Mahajanapada in South India.",
        subtopic: 'mahajanapadas',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "The term 'Aghanya' (not to be killed) in the Rig Veda refers to:",
        options: ["Cow", "Horse", "Priest", "King"],
        correctAnswer: 0,
        explanation: "The Cow was considered very valuable and referred to as 'Aghanya'. Wars were often fought for cows (Gavishthi).",
        subtopic: 'vedic',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "Match the following Vedangas with their subjects:\nA. Shiksha -> 1. Grammar\nB. Nirukta -> 2. Etymology\nC. Vyakarana -> 3. Phonetics\nD. Kalpa -> 4. Rituals\n\nSelect the correct answer:",
        options: ["A-3, B-2, C-1, D-4", "A-1, B-2, C-3, D-4", "A-3, B-1, C-2, D-4", "A-2, B-3, C-4, D-1"],
        correctAnswer: 0,
        explanation: "Shiksha: Phonetics. Nirukta: Etymology. Vyakarana: Grammar. Kalpa: Rituals. Chhanda: Metrics. Jyotisha: Astronomy.",
        subtopic: 'vedic',
        difficulty: 'Moderate'
    }
];

export const ANCIENT_CHAPTER_2_CONTENT = `
# BLOCK 1: THE VEDIC AGE (1500-600 BC)
## 📜 ARYANS & VEDIC LITERATURE

**The Vedas:**
1.  **Rig Veda:** Oldest. 10 Mandalas. Hymns to gods (Indra, Agni, Varuna).
    *   **10th Mandala:** Purusha Sukta (Origin of 4 Varnas).
2.  **Sama Veda:** Book of Chants/Melodies (Origins of Indian Music).
3.  **Yajur Veda:** Book of Rituals/Sacrifices (Krishna & Shukla).
4.  **Atharva Veda:** Spells, Charms, Medicines.

**Early Vedic Society (1500-1000 BC):**
*   **Polity:** Tribal (*Jana*). King (*Rajan*) assisted by assemblies (*Sabha, Samiti, Vidatha*).
*   **Society:** Patriarchal but liberal. No child marriage. Widow remarriage allowed (*Niyoga*).
*   **Economy:** Pastoral (Cattle rearing). "Gavishthi" = Search for cows (War).
*   **Religion:** Nature worship. Indra (Rain/War) and Agni (Fire) were most important. No temples/idols.

**Later Vedic Society (1000-600 BC):**
*   **Iron Discovered:** Shyam Ayas (Iron) led to agriculture in Gangetic valley.
*   **Polity:** Janapadas formed (*Jana* became *Janapada*). King became powerful; Assemblies lost power.
*   **Society:** Varna system became rigid (Hereditary). Position of women declined. Gotra system appeared.
*   **Religion:** Prajapati (Creator) became supreme. Rituals/Sacrifices became complex.

# BLOCK 2: MAHAJANAPADAS (600 BC)
## 🏰 SECOND URBANIZATION

**Key Mahajanapadas (16 Total):**
1.  **Magadha:** (Bihar) - Most powerful. Capital: Rajgir/Pataliputra.
2.  **Kosala:** (UP) - King Prasenjit.
3.  **Vatsa:** (Allahabad) - King Udayana.
4.  **Avanti:** (MP) - King Pradyota.
5.  **Gandhara:** (Taxila) - Education hub.
6.  **Assaka:** (Godavari) - Only one in South India.

**Rise of Magadha - Reasons:**
*   **Iron Mines:** Access to iron ore (Singhbhum) for weapons.
*   **Strategic Capital:** Pataliputra (Water fort - Jaladurga) and Rajgir (Hill fort).
*   **Elephants:** Abundance of elephants in forests used in army.
`;
