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

export const ANCIENT_CHAPTER_10_SUBTOPICS: Subtopic[] = [
    { id: 'sculpture', name: 'Schools of Sculpture (Gandhara, Mathura, Amravati)' },
    { id: 'architecture', name: 'Stupas & Cave Architecture' }
];

export const ANCIENT_CHAPTER_10_MCQS: Question[] = [
    {
        id: 1,
        question: "Which of the following schools of art is known for the first physical representation of the Buddha in human form?",
        options: ["Gandhara School", "Mathura School", "Amravati School", "Sarnath School"],
        correctAnswer: 1,
        explanation: "The Mathura School (indigenous) is credited with the first human images of Buddha (based on Yaksha figures). Gandhara followed closely with Greek influence.",
        subtopic: 'sculpture',
        difficulty: 'Moderate'
    },
    {
        id: 2,
        question: "Consider the following statements regarding the Gandhara School of Art:\n1. It used bluish-grey sandstone.\n2. It was heavily influenced by Greco-Roman styles.\n3. It flourished under the Guptas.\n\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Statement 3 is Incorrect: Gandhara art flourished under the Kushanas (especially Kanishka), not the Guptas. 1 & 2 are correct.",
        subtopic: 'sculpture',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "The 'Amravati School of Art' is distinct because of its extensive use of:",
        options: ["Red Sandstone", "White Marble", "Granite", "Burnt Bricks"],
        correctAnswer: 1,
        explanation: "Amravati School (Satavahanas/Ikshvakus) is famous for its use of White Marble and narrative themes (Jataka tales).",
        subtopic: 'sculpture',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "The 'Lomas Rishi Cave' in Barabar Hills, the earliest example of rock-cut architecture, belonged to which sect?",
        options: ["Buddhism", "Jainism", "Ajivika", "Shaivism"],
        correctAnswer: 2,
        explanation: "Ashoka dedicated the Barabar caves (Lomas Rishi, Sudama) to the Ajivika sect.",
        subtopic: 'architecture',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "In the context of Stupa architecture, the 'Harmika' refers to:",
        options: ["The circumambulatory path", "The gateway", "The square railing on top of the dome", "The umbrella on top"],
        correctAnswer: 2,
        explanation: "Harmika is the square railing on top of the dome (Anda) representing the abode of gods. The umbrella (Chhatra) stands above it.",
        subtopic: 'architecture',
        difficulty: 'Moderate'
    }
];

export const ANCIENT_CHAPTER_10_CONTENT = `
# BLOCK 1: SCHOOLS OF SCULPTURE
## 🗿 GANDHARA, MATHURA & AMRAVATI

**1. Gandhara School (North-West):**
*   **Patrons:** Kushanas (Kanishka).
*   **Influence:** Greco-Roman (Hellenistic). Known as Greco-Buddhist art.
*   **Material:** Bluish-Grey Sandstone / Stucco (later).
*   **Buddha's Image:** Apollo-like face, wavy hair, muscular body, heavy drapery (folds), spiritual calm.
*   **Theme:** Almost exclusively Buddhist.

**2. Mathura School (North India):**
*   **Patrons:** Kushanas.
*   **Influence:** Indigenous (Indian). Developed from Yaksha worship.
*   **Material:** Spotted Red Sandstone.
*   **Buddha's Image:** Stout body, shaven head (early), smiling face, seated in Padmasana (Yogi), transparent drapery.
*   **Theme:** Buddhist, Jain (Tirthankaras), and Hindu (Shiva/Vishnu). **Secular** themes also present.

**3. Amravati School (Deccan):**
*   **Patrons:** Satavahanas and Ikshvakus.
*   **Material:** White Marble.
*   **Style:** Narrative art (telling stories from Jatakas). Figures are slim and full of movement (Tribhanga posture).

# BLOCK 2: STUPAS & CAVES
## 🏛️ EARLY INDIAN ARCHITECTURE

**Stupa Architecture:**
*   **Purpose:** To house relics (Dhatu) of Buddha or great monks.
*   **Structure:**
    *   **Anda:** Semi-circular dome.
    *   **Harmika:** Square box on top (Abode of God).
    *   **Chhatra:** Umbrella (Symbol of sovereignty/Dharma).
    *   **Pradakshina Patha:** Circumambulatory path enclosed by railings (*Vedika*).
    *   **Toranas:** Gateways (e.g., Sanchi Toranas with Jataka carvings).

**Rock-Cut Caves:**
*   **Mauryan:** Barabar Caves (Bihar) for Ajivikas. Polished inner walls.
*   **Post-Mauryan:**
    *   **Chaitya:** Prayer Hall (e.g., Karle Chaitya - Largest). Has a Stupa at the end.
    *   **Vihara:** Residential Hall for monks (e.g., Nasik Viharas).
`;
