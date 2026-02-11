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

export const ANCIENT_CHAPTER_3_SUBTOPICS: Subtopic[] = [
    { id: 'buddhism', name: 'Buddhism: Teachings & Councils' },
    { id: 'jainism', name: 'Jainism: Teachings & Sects' },
    { id: 'sects', name: 'Mahayana vs Hinayana' }
];

export const ANCIENT_CHAPTER_3_MCQS: Question[] = [
    {
        id: 1,
        question: "The First Buddhist Council was held at which place and under whose patronage?",
        options: ["Vaishali, Kalashoka", "Rajgir, Ajatshatru", "Pataliputra, Ashoka", "Kashmir, Kanishka"],
        correctAnswer: 1,
        explanation: "1st Council: Rajgir (Saptaparni Cave), Patron: Ajatshatru, President: Mahakashyapa. Resulted in Vinaya Pitaka and Sutta Pitaka.",
        subtopic: 'buddhism',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Consider the following statements regarding Jainism:\n1. It recognized the existence of God but placed them lower than Jina (Mahavira).\n2. It condemned the Varna system completely.\n3. It strictly emphasized non-violence (Ahimsa).\n\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 1,
        explanation: "Statement 2 is Incorrect: Jainism did NOT condemn the Varna system completely; Mahavira said a person is born in high/low varna due to past sins, but can attain salvation through good karma. 1 & 3 are correct.",
        subtopic: 'jainism',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "The concept of 'Anuvratas' (Lesser Vows) was advocated by:",
        options: ["Mahayana Buddhism", "Hinayana Buddhism", "Jainism", "Lokayata School"],
        correctAnswer: 2,
        explanation: "Anuvratas (5 Vows) are central to Jainism: Ahimsa, Satya, Asteya (No stealing), Aparigraha (No property), and Brahmacharya.",
        subtopic: 'jainism',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "Which of the following Pitakas contains the rules of conduct (discipline) for the Buddhist Sangha?",
        options: ["Sutta Pitaka", "Vinaya Pitaka", "Abhidhamma Pitaka", "Jataka Tales"],
        correctAnswer: 1,
        explanation: "Vinaya Pitaka contains rules of discipline. Sutta Pitaka: Teachings/Sermons. Abhidhamma Pitaka: Philosophy.",
        subtopic: 'buddhism',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "The schism in Buddhism into Mahayana and Hinayana occurred during which Buddhist Council?",
        options: ["First", "Second", "Third", "Fourth"],
        correctAnswer: 3,
        explanation: "The Fourth Buddhist Council (Kashmir, under Kanishka) saw the formal split into Mahayana (Great Vehicle - Idol worship) and Hinayana (Lesser Vehicle).",
        subtopic: 'buddhism',
        difficulty: 'Easy'
    }
];

export const ANCIENT_CHAPTER_3_CONTENT = `
# BLOCK 1: GAUTAMA BUDDHA & BUDDHISM
## ☸️ THE MIDDLE PATH

**Gautama Buddha (563-483 BC):**
*   **Birth:** Lumbini (Nepal). Clan: Sakya.
*   **Enlightenment (Nirvana):** Bodh Gaya (Peepal Tree).
*   **First Sermon (Dharmachakra Pravartana):** Sarnath (Deer Park).
*   **Death (Mahaparinirvana):** Kushinagar.

**Teachings:**
*   **Four Noble Truths:** World is full of sorrow; Desire is cause; Sorrow can stop; Follow 8-fold path.
*   **Eightfold Path (Ashtangika Marga):** Right view, resolve, speech, action, livelihood, effort, mindfulness, concentration.
*   **Triratna:** Buddha, Dhamma, Sangha.
*   **Philosophy:** Rejected Vedas, Soul (Atman), and God. Believed in Karma and Nirvana.

**Buddhist Councils (Mnemonic: R-V-P-K applied to place and A-K-A-K to King):**
1.  **Rajgir (Ajatshatru):** Sutta/Vinaya Pitaka compiled.
2.  **Vaishali (Kalashoka):** Split into Sthavirvadins & Mahasanghikas.
3.  **Pataliputra (Ashoka):** Abhidhamma Pitaka added. Missionaries sent.
4.  **Kashmir (Kanishka):** Split into Mahayana & Hinayana. Sanskrit used.

# BLOCK 2: MAHAVIRA & JAINISM
## ✋ AHIMSA & ANEKANTAVADA

**Mahavira (540-468 BC):**
*   **Birth:** Kundagrama (Vaishali). 24th Tirthankara.
*   **Death:** Pavapuri.

**Teachings:**
*   **Three Jewels (Triratna):** Right Faith, Right Knowledge, Right Conduct.
*   **Five Vows (Pancha Mahavratas):** Ahimsa, Satya, Asteya, Aparigraha, Brahmacharya (Added by Mahavira).
*   **Philosophy:**
    *   **Anekantavada/Syadvada:** Theory of 'Maybe' (Plurality of truth).
    *   **Rigorous Penance:** Believed in extreme asceticism and self-starvation (*Sallekhana*) to liberate soul.
    *   **God:** Recognized gods but placed them below Jina.

**Sects:**
*   **Digambaras:** Sky-clad (Naked). Led by Bhadrabahu. Stayed in South during famine.
*   **Svetambaras:** White-clad. Led by Sthulabhadra. Stayed in Magadha.
`;
