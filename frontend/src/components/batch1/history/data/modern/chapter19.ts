export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic?: string;
    difficulty?: 'Easy' | 'Moderate' | 'Hard';
}

export const MODERN_CHAPTER_19_MCQS: Question[] = [
    {
        id: 1,
        question: "The 'Dandi March' (Salt Satyagraha) began on which date?",
        options: ["March 12, 1930", "April 6, 1930", "January 26, 1930", "December 31, 1929"],
        correctAnswer: 0,
        explanation: "Gandhi started the march from Sabarmati Ashram on March 12, 1930, and broke the salt law at Dandi on April 6, 1930.",
        subtopic: 'cdm_launch',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Who led the salt satyagraha movement in the Coromandel Coast (Tamil Nadu)?",
        options: ["T. Prakasam", "C. Rajagopalachari", "K. Kelappan", "Chidambaram Pillai"],
        correctAnswer: 1,
        explanation: "C. Rajagopalachari led the march from Tiruchirappalli to Vedaranniyam.",
        subtopic: 'regional_spread',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "In the North-West Frontier Province, the 'Red Shirts' (Khudai Khidmatgars) were led by:",
        options: ["Khan Abdul Ghaffar Khan", "M.A. Jinnah", "Liaquat Ali Khan", "Sikandar Hayat Khan"],
        correctAnswer: 0,
        explanation: "Khan Abdul Ghaffar Khan (Frontier Gandhi) led the non-violent movement in NWFP. His followers wore red shirts.",
        subtopic: 'north_west',
        difficulty: 'Easy'
    }
];

export const MODERN_CHAPTER_19_CONTENT = `
# Chapter 19: Civil Disobedience Movement (1930-1934)

The "Salt" of the Earth. From Decoration to Defiance.

THE STRATEGY: "SALT AS A SYMBOL"
*   **Visual Metaphor:** A pinch of salt.
*   **Logic:** Salt connects the poorest to the richest. Taxing it is immoral.

---

## BLOCK 1: LAHORE SESSION (1929)
**The Purna Swaraj Resolution.**

### 🎆 DEC 1929
*   **President:** **Jawaharlal Nehru**. (Passed torch from Motilal).
*   **Resolution:** **Poorna Swaraj** (Complete Independence).
*   **Significance:**
    *   Jan 26, 1930 to be observed as **First Independence Day**.
    *   Authorized Gandhi to launch CDM.

---

## BLOCK 2: THE DANDI MARCH (1930)
**The Spark.**

### 🚶‍♂️ THE MARCH
*   **Start:** March 12, 1930 (Sabarmati Ashram).
*   **End:** April 6, 1930 (Dandi Coast).
*   **Distance:** 240 Miles.
*   **Attendees:** 78 Volunteers (Sarojini Naidu joined later).
*   **Action:** Picked up a handful of salt. "I am shaking the foundations of the British Empire."

---

## BLOCK 3: REGIONAL SPREAD
**The Fire Spreads.**

| Region | Leader | Event |
| :--- | :--- | :--- |
| **Tamil Nadu** | **C. Rajagopalachari** | Trichy to Vedaranniyam. |
| **Malabar** | **K. Kelappan** | Calicut to Payyanur. |
| **NWFP** | **Khan Abdul Ghaffar Khan** | Khudai Khidmatgars (Red Shirts). |
| **Manipur** | **Rani Gaidinliu** | Combined with Naga movement. |
| **Dharasana** | **Sarojini Naidu** | Brutal police lathi charge (Webb Miller reported it). |

---

## BLOCK 4: FEATURES
*   **Women Participation:** Highest ever (Picketing liquor shops).
*   **Cunningham Circular:** Students in Assam protested against it.
*   **Forest Laws:** Defied in Maharashtra/Central India.

---

## BLOCK 5: PYQ CORNER

> [!WARNING]
> **🔥 PYQ ALERT:**
> *   **Q:** Date of Dandi March? -> **March 12, 1930**.
> *   **Q:** Who led in Tamil Nadu? -> **Rajaji**.
> *   **Q:** Who were Red Shirts? -> **Khudai Khidmatgars**.
> *   **Q:** American journalist at Dharasana? -> **Webb Miller**.
`;
