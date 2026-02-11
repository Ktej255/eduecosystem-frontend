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

export const ANCIENT_CHAPTER_13_SUBTOPICS: Subtopic[] = [
    { id: 'chalukyas', name: 'The Chalukyas of Badami' },
    { id: 'pallavas', name: 'The Pallavas of Kanchi' }
];

export const ANCIENT_CHAPTER_13_MCQS: Question[] = [
    {
        id: 1,
        question: "The 'Aihole Inscription' gives the details of the reign of which king?",
        options: ["Pulakeshin I", "Pulakeshin II", "Narasimhavarman I", "Vikramaditya II"],
        correctAnswer: 1,
        explanation: "The Aihole Inscription was composed by Ravikirti (Jain poet). It details the achievements of Pulakeshin II, including his victory over Harsha.",
        subtopic: 'chalukyas',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Which Pallava King took the title 'Vatapikonda' (Conqueror of Vatapi)?",
        options: ["Mahendravarman I", "Narasimhavarman I", "Narasimhavarman II (Rajasimha)", "Simhavishnu"],
        correctAnswer: 1,
        explanation: "Narasimhavarman I defeated and killed Pulakeshin II, captured his capital Vatapi (Badami), and took the title 'Vatapikonda'.",
        subtopic: 'pallavas',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "The 'Ratha Temples' (Seven Pagodas) at Mahabalipuram were built by:",
        options: ["Cholas", "Pallavas", "Pandyas", "Cheras"],
        correctAnswer: 1,
        explanation: "They were built by the Pallava king Narasimhavarman I (Mamalla). The city Mamallapuram is named after him.",
        subtopic: 'pallavas',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "The 'Vesara' style of temple architecture, which combines features of Nagara and Dravida, was patronized by:",
        options: ["Pallavas", "Cholas", "Chalukyas", "Rashtrakutas"],
        correctAnswer: 2,
        explanation: "The Chalukyas of Badami developed the Vesara style. Examples: Virupaksha Temple at Pattadakal.",
        subtopic: 'chalukyas',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "The Shore Temple at Mahabalipuram was built by:",
        options: ["Mahendravarman I", "Narasimhavarman I", "Narasimhavarman II (Rajasimha)", "Dantivarman"],
        correctAnswer: 2,
        explanation: "Narasimhavarman II (Rajasimha) built structural temples like the Shore Temple at Mahabalipuram and Kailasanatha Temple at Kanchipuram.",
        subtopic: 'pallavas',
        difficulty: 'Hard'
    }
];

export const ANCIENT_CHAPTER_13_CONTENT = `
# BLOCK 1: THE CHALUKYAS OF BADAMI (Vatapi)
## 🏛️ MASTERS OF THE DECCAN (543-753 AD)

**Political History:**
*   **Pulakeshin II (610-642 AD):** Greatest ruler.
    *   Defeated Harsha (Narmada battle).
    *   Sent embassy to Persia (Khusrau II). A painting in Ajanta Cave 1 depicting a Persian embassy is attributed to his reign.
    *   Defeated by Pallava king **Narasimhavarman I** and died in battle.

**Art & Architecture:**
*   Developed the **Vesara Style** (Hybrid of Nagara & Dravida).
*   **Key Sites:**
    *   **Aihole:** "Cradle of Indian Temple Architecture". (Durga Temple).
    *   **Badami:** Rock-cut caves (Hindu/Jain).
    *   **Pattadakal (UNESCO):** Virupaksha Temple (Dravida style) built by Queen Lokamahadevi.

# BLOCK 2: THE PALLAVAS OF KANCHI
## 🏗️ PIONEERS OF DRAVIDIAN ART

**Political History:**
*   **Mahendravarman I:** Scholar-king (wrote *Mattavilasa Prahasana*). Defeated by Pulakeshin II.
*   **Narasimhavarman I (Mamalla):**
    *   Defeated Pulakeshin II. Took title **Vatapikonda**.
    *   Founded Mamallapuram (Mahabalipuram).
*   **Narasimhavarman II (Rajasimha):** Peaceful reign. Built structural temples.

**Art & Architecture (Dravidian Style Origins):**
1.  **Mahendra Group:** Rock-cut mandapas (Pillared halls).
2.  **Mamalla Group:** **Monolithic Rathas** (Pancha Pandava Rathas). Dharmaraja Ratha is the largest; Draupadi Ratha smallest.
3.  **Rajasimha Group:** Structural Temples. **Shore Temple** (Mahabalipuram) and **Kailasanatha Temple** (Kanchi).
4.  **Nandivarman Group:** Smaller temples (Vaikunta Perumal).
`;
