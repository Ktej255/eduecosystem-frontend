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

export const ANCIENT_CHAPTER_9_SUBTOPICS: Subtopic[] = [
    { id: 'kingdoms', name: 'The Three Kingdoms (Muvendar)' },
    { id: 'literature', name: 'Sangam Literature & Society' }
];

export const ANCIENT_CHAPTER_9_MCQS: Question[] = [
    {
        id: 1,
        question: "The capital of the Early Cholas during the Sangam age was:",
        options: ["Madurai", "Vanji", "Uraiyur", "Kanchipuram"],
        correctAnswer: 2,
        explanation: "Uraiyur was the inland capital, while Puhar (Kaveripattinam) was the port capital.",
        subtopic: 'kingdoms',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Which Sangam text is considered the 'Bible of the Tamil Land' (Tamil Veda)?",
        options: ["Silappadikaram", "Manimekalai", "Tirukkural", "Tolkappiyam"],
        correctAnswer: 2,
        explanation: "Tirukkural, written by Thiruvalluvar, is a masterwork on Ethics, Politics, and Love. It is called the Tamil Veda.",
        subtopic: 'literature',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "The term 'Muvendar' in Sangam poems refers to:",
        options: ["Three Chiefs (Chola, Chera, Pandya)", "Three Gods", "Three Assemblies", "Three Rivers"],
        correctAnswer: 0,
        explanation: "Muvendar means 'The Three Crowned Kings' referring to the Cholas, Cheras, and Pandyas.",
        subtopic: 'kingdoms',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "Kannagi, the central character of the epic Silappadikaram, is worshipped as the goddess of:",
        options: ["Learning", "Wealth", "Chastity (Pattini)", "War"],
        correctAnswer: 2,
        explanation: "She is worshipped as 'Pattini Devi' (Goddess of Chastity). The cult was introduced by Chera king Senguttuvan.",
        subtopic: 'literature',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "Match the Royal Emblem with the Sangam Dynasty:\n1. Chola - A. Bow and Arrow\n2. Chera - B. Tiger\n3. Pandya - C. Fish",
        options: ["1-A, 2-B, 3-C", "1-B, 2-A, 3-C", "1-C, 2-A, 3-B", "1-B, 2-C, 3-A"],
        correctAnswer: 1,
        explanation: "Chola: Tiger. Chera: Bow and Arrow. Pandya: Carp (Fish).",
        subtopic: 'kingdoms',
        difficulty: 'Easy'
    }
];

export const ANCIENT_CHAPTER_9_CONTENT = `
# BLOCK 1: THE THREE KINGDOMS (MUVENDAR)
## 📜 TAMILAKAM (300 BC - 300 AD)

**1. The Cholas (The Tiger):**
*   **Region:** Northeast (Cholamandal/Coromandel). Kaveri delta.
*   **Capitals:** Uraiyur (Inland) and Puhar (Port).
*   **Key Ruler:** **Karikala** (The man with the charred leg). He built the **Kallanai Dam** (Grand Anicut) on Kaveri.

**2. The Cheras (The Bow):**
*   **Region:** Southwest (Kerala + Kongu Nadu).
*   **Capital:** Vanji (Karur). Ports: Muziris, Tondi.
*   **Key Ruler:** **Senguttuvan** (Red Chera). Invaded North India. Established the **Pattini Cult** (Worship of Kannagi).

**3. The Pandyas (The Fish):**
*   **Region:** Southeast (Madurai/Tirunelveli).
*   **Capital:** Madurai. Port: Korkai (Famous for Pearls).
*   **Legacy:** Patronized the **Sangam Assemblies**.

# BLOCK 2: SANGAM LITERATURE & SOCIETY
## 📚 THE GOLDEN AGE OF TAMIL

**The Assemblies (Sangams):**
*   Held at Madurai under Pandya patronage.
*   Most surviving texts (Ettutogai, Pattu Pattu) are from the **Third Sangam**.

**Key Texts:**
*   **Tolkappiyam:** Oldest extant Tamil grammar. By Tolkappiyar.
*   **Tirukkural:** By Thiruvalluvar. "The Bible of Tamil Land". Universal ethics.
*   **Epics:**
    *   **Silappadikaram:** (Ilango Adigal). Tragic story of Kovalan (merchant) and Kannagi.
    *   **Manimekalai:** (Sittalai Sattanar). Buddhist text. Sequel to Silappadikaram.

**Society and Five Tinais (Eco-zones):**
1.  **Kurinji:** Mountains (Hunting). God: Murugan.
2.  **Mullai:** Forests (Pastoral). God: Mayon (Vishnu).
3.  **Marudam:** Plains (Agriculture). God: Indra.
4.  **Neytal:** Coastal (Fishing/Salt). God: Varuna.
5.  **Palai:** Dry land (Robbery). God: Korravai (Durga).
`;
