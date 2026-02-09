export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic?: string;
    difficulty?: 'Easy' | 'Moderate' | 'Hard';
}

export const MODERN_CHAPTER_18_MCQS: Question[] = [
    {
        id: 1,
        question: "Why was the Simon Commission (1927) boycotted by Indians?",
        options: [
            "Whatever it proposed was unacceptable.",
            "There was no Indian member in the Commission.",
            "It proposed the partition of India.",
            "It was appointed before the scheduled time."
        ],
        correctAnswer: 1,
        explanation: "The 'All-White' seven-member commission had no Indian representation, which was seen as an insult to Indian self-respect.",
        subtopic: 'simon_commission',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Who among the following died due to lathi blows received during a protest against the Simon Commission?",
        options: ["Bal Gangadhar Tilak", "Lala Lajpat Rai", "Bipin Chandra Pal", "Gopal Krishna Gokhale"],
        correctAnswer: 1,
        explanation: "Lala Lajpat Rai was assaulted by police (led by Saunders) in Lahore and died later. He said, 'Every blow aimed at me is a nail in the coffin of British Imperialism.'",
        subtopic: 'simon_protest',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "The 'Nehru Report' (1928) was prepared by a committee headed by:",
        options: ["Jawaharlal Nehru", "Motilal Nehru", "Aruna Asaf Ali", "Tej Bahadur Sapru"],
        correctAnswer: 1,
        explanation: "The committee was headed by Motilal Nehru. Jawaharlal Nehru was the Secretary. It was a response to Lord Birkenhead's challenge.",
        subtopic: 'nehru_report',
        difficulty: 'Moderate'
    }
];

export const MODERN_CHAPTER_18_CONTENT = `
# Chapter 18: Simon Commission & Nehru Report (1927-1929)

The Catalyst for Complete Independence.

THE STRATEGY: "THE INSULT & THE CHALLENGE"
*   **Visual Metaphor:** Black Flags (Simon) vs. The Draft Constitution (Nehru Report).
*   **Context:** 10-year review of 1919 Act was due.

---

## BLOCK 1: SIMON COMMISSION (1927)
**The All-White Seven.**

### 🚫 THE BOYCOTT
*   **Reason:** No Indian member. "Indians are incapable of deciding their own constitution."
*   **Congress Response:** "Go Back Simon". (Madras Session 1927 - M.A. Ansari).
*   **Muslim League:** Jinnah faction boycotted; Shafi faction supported.
*   **Impact:**
    *   **Lala Lajpat Rai** died (Lahore).
    *   **Revolutionary surge:** Saunders murder (Bhagat Singh).

---

## BLOCK 2: NEHRU REPORT (1928)
**The First Indian Constitution.**

### 📝 THE CHALLENGE
*   **Lord Birkenhead** (Sec of State) challenged Indians to produce an agreed constitution.
*   **Drafting Committee:** Chair - **Motilal Nehru**. Members - Tej Bahadur Sapru, Subhash Bose.
*   **Key Recommendations:**
    1.  **Dominion Status** (Not Poorna Swaraj).
    2.  **Universal Adult Suffrage**.
    3.  **Secular State** (No state religion).
    4.  **Rejection of Separate Electorates** (Proposed Joint Electorates with reservation).
    5.  **Linguistic Provinces**.

### 👎 THE OPPOSITION
*   **Jinnah:** Rejected it. Proposed **"14 Points"**.
*   **Young Wing (Jawaharlal & Subhash):** Rejected "Dominion Status". Demanded "Poorna Swaraj".

---

## BLOCK 3: PYQ CORNER

> [!WARNING]
> **🔥 PYQ ALERT:**
> *   **Q:** Why Simon Boycott? -> **All White Commission**.
> *   **Q:** "Every blow is a nail..."? -> **Lala Lajpat Rai**.
> *   **Q:** Chairman of Nehru Report? -> **Motilal Nehru**.
> *   **Q:** Did Nehru Report ask for Complete Independence? -> **No (Dominion Status)**.
`;
