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

export const ANCIENT_CHAPTER_7_SUBTOPICS: Subtopic[] = [
    { id: 'invasions', name: 'Foreign Invasions (Indo-Greeks to Kushanas)' },
    { id: 'kanishka', name: 'Kanishka & Gandhara Art' },
    { id: 'native', name: 'Native Dynasties (Shungas, Kanvas, Chedis)' }
];

export const ANCIENT_CHAPTER_7_MCQS: Question[] = [
    {
        id: 1,
        question: "Who among the following was the most famous Indo-Greek ruler known for his philosophical dialogue with the Buddhist monk Nagasena?",
        options: ["Demetrius", "Menander (Milinda)", "Eucratides", "Heliodorus"],
        correctAnswer: 1,
        explanation: "Menander (Milinda) is famous for the 'Milinda Panho' (Questions of Milinda), a dialogue with Nagasena. He converted to Buddhism.",
        subtopic: 'invasions',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "The 'Gandhara School of Art' flourished primarily under which dynasty?",
        options: ["Mauryas", "Guptas", "Kushanas", "Satavahanas"],
        correctAnswer: 2,
        explanation: "Gandhara School (Greco-Buddhist art) flourished under the Kushanas, especially Kanishka. It featured realistic images of Buddha with Greek features.",
        subtopic: 'kanishka',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "The 'Junagarh Inscription' of Rudradaman Is famous for being:",
        options: ["The first inscription in pure Sanskrit.", "The only inscription mentioning Ashoka by name.", "A record of the Silk Route trade.", "A dedication to the Sun God."],
        correctAnswer: 0,
        explanation: "It is the first long inscription in chaste Sanskrit. It mentions the repair of the Sudarshana Lake by Rudradaman (Shaka ruler).",
        subtopic: 'invasions',
        difficulty: 'Moderate'
    },
    {
        id: 4,
        question: "Who started the 'Saka Era' in 78 AD, which is used by the Government of India today?",
        options: ["Vikramaditya", "Kanishka", "Rudradaman", "Ashoka"],
        correctAnswer: 1,
        explanation: "Kanishka started the Saka Era in 78 AD to mark his accession.",
        subtopic: 'kanishka',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "The 'Besnagar Pillar Inscription' (Heliodorus Pillar) is dedicated to:",
        options: ["Shiva", "Vasudeva (Vishnu)", "Buddha", "Mahavira"],
        correctAnswer: 1,
        explanation: "Heliodorus (Greek ambassador) erected it in honor of Vasudeva (Vishnu), showing the adoption of Vaishnavism by Greeks.",
        subtopic: 'native',
        difficulty: 'Moderate'
    }
];

export const ANCIENT_CHAPTER_7_CONTENT = `
# BLOCK 1: FOREIGN INVASIONS (200 BC - 100 AD)
## 🌍 THE AGE OF ASSIMILATION

**1. Indo-Greeks (Bactrian Greeks):**
*   First to invade India after Mauryas.
*   **Menander (Milinda):** Famous king. Converted to Buddhism by **Nagasena**. Text: *Milinda Panho*.
*   **Contribution:** First to issue **Gold Coins** in India (attribution definite). Introduced **Hellenistic Art** (Gandhara School).

**2. The Shakas (Scythians):**
*   Replaced Greeks. 5 branches.
*   **Rudradaman I (Western Kstrapa):** Most famous. Repaired **Sudarshana Lake** (Gujarat). Issued first long Sanskrit inscription (**Junagarh Inscription**).

**3. The Parthians (Pahlavas):**
*   King **Gondophernes**. St. Thomas (Christianity) is said to have visited his court.

**4. The Kushanas (Yueh-chi):**
*   **Kanishka (78-101 AD):** Greatest king.
    *   **Capitals:** Purushapura (Peshawar) and Mathura.
    *   **Saka Era:** Started in **78 AD** (Used by Indian Govt).
    *   **Religion:** Parton of Mahayana Buddhism. Held 4th Buddhist Council in Kashmir.
    *   **Scholars:** Ashvaghosha (*Buddhacharita*), Charaka (*Charaka Samhita*), Nagarjuna (*Madhyamika*).

# BLOCK 2: NATIVE DYNASTIES
## 🗡️ BRAHMINICAL REVIVAL

**1. The Shunga Dynasty (185-73 BC):**
*   **Pushyamitra Shunga:** Commander-in-chief who killed the last Mauryan king (Brihadratha).
*   Staunch Brahmin. Performed Ashvamedha sacrifice.
*   Patanjali (author of *Mahabhasya*) was his contemporary.

**2. The Kanva Dynasty:**
*   Founded by Vasudeva Kanva. Short-lived.

**3. The Cheti Dynasty (Kalinga):**
*   **Kharavela:** Greatest king. **Hathigumpha Inscription** (Elephants Cave) describes his victories. Jain patron.
`;
