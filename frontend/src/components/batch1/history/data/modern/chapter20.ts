export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic?: string;
    difficulty?: 'Easy' | 'Moderate' | 'Hard';
}

export const MODERN_CHAPTER_20_MCQS: Question[] = [
    {
        id: 1,
        question: "The 'Gandhi-Irwin Pact' (1931) included which of the following provisions?",
        options: [
            "Immediate release of all political prisoners not convicted of violence.",
            "Complete Independence as the goal.",
            "Return of Bhagat Singh's death sentence.",
            "Separate electorates for Depressed Classes."
        ],
        correctAnswer: 0,
        explanation: "The pact agreed to release prisoners not charged with violence. It did NOT save Bhagat Singh (a major point of criticism).",
        subtopic: 'gandhi_irwin_pact',
        difficulty: 'Moderate'
    },
    {
        id: 2,
        question: "Who represented the Congress in the Second Round Table Conference (1931)?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Subhash Chandra Bose"],
        correctAnswer: 1,
        explanation: "Gandhi was the sole representative of the Congress in the Second RTC. First and Third were boycotted by Congress.",
        subtopic: 'rtc_2',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "The 'Communal Award' (1932) by Ramsay MacDonald provided separate electorates for:",
        options: ["Muslims only", "Sikhs only", "Depressed Classes (Dalits)", "Anglo-Indians only"],
        correctAnswer: 2,
        explanation: "It extended separate electorates to the Depressed Classes, which Gandhi opposed (Fast unto death).",
        subtopic: 'communal_award',
        difficulty: 'Easy'
    }
];

export const MODERN_CHAPTER_20_CONTENT = `
# Chapter 20: Round Table Conferences & Communal Award (1930-1932)

The Negotiating Table & The Dividing Line.

THE STRATEGY: "THE EMPTY CHAIR & THE FAST"
*   **Visual Metaphor:** A round table with one empty chair (Congress).
*   **Key Event:** Gandhi-Irwin Pact -> Poona Pact.

---

## BLOCK 1: ROUND TABLE CONFERENCES (RTC)
**London Calling.**

### 🗣️ FIRST RTC (1930)
*   **Congress:** Boycotted. (Busy with Dandi March).
*   **Result:** Meaningless without Congress.

### 🤝 GANDHI-IRWIN PACT (Delhi Pact 1931)
*   **Context:** To get Congress to RTC.
*   **Terms:**
    *   **Irwin Agreed:** To release prisoners (non-violent), allow salt for personal use.
    *   **Gandhi Agreed:** To suspend CDM & attend 2nd RTC.
*   **Controversy:** Gandhi could not secure commutation of Bhagat Singh's death sentence.

### 🗣️ SECOND RTC (1931)
*   **Congress:** **Gandhi** attended (Sole Rep).
*   **Sarojini Naidu** & **Madan Mohan Malaviya** also went (Individual capacity).
*   **Outcome:** Failure. Deadlock over "Communal Question". Gandhi returned empty-handed.

### 🗣️ THIRD RTC (1932)
*   **Congress:** Boycotted again.

---

## BLOCK 2: COMMUNAL AWARD & POONA PACT
**The fight for Dalit Representation.**

### ➗ COMMUNAL AWARD (Aug 1932)
*   **PM:** **Ramsay MacDonald**.
*   **Proposal:** Separate Electorates for **Depressed Classes** (Dalits).
*   **Gandhi's Reaction:** Saw it as a ploy to divide Hindu society. Went on **Fast Unto Death** in Yerwada Jail (Poona).

### ✍️ POONA PACT (Sept 1932)
*   **Signatories:** **B.R. Ambedkar** (on behalf of Depressed Classes) & **Madan Mohan Malaviya** (on behalf of Caste Hindus).
*   **Result:**
    1.  **Abandoned Separate Electorates** for Depressed Classes.
    2.  **Increased Reservation:** Seats increased from 71 (in Award) to **147** (in Joint Electorates).

---

## BLOCK 3: PYQ CORNER

> [!WARNING]
> **🔥 PYQ ALERT:**
> *   **Q:** Who attended all three RTCs? -> **B.R. Ambedkar & Tej Bahadur Sapru**.
> *   **Q:** Congress attended which RTC? -> **Only Second**.
> *   **Q:** Gandhi-Irwin Pact year? -> **1931**.
> *   **Q:** Outcome of Poona Pact? -> **Joint Electorates with Reservation**.
`;
