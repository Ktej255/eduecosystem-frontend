export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic?: string;
    difficulty?: 'Easy' | 'Moderate' | 'Hard';
}

export const MODERN_CHAPTER_21_MCQS: Question[] = [
    {
        id: 1,
        question: "In the 1937 elections held under the Government of India Act, 1935, the Congress formed ministries in how many provinces?",
        options: ["5", "7", "9", "11"],
        correctAnswer: 1,
        explanation: "Congress formed ministries in 7 out of 11 provinces (Madras, Bombay, Central Provinces, Orissa, Bihar, United Provinces, and NWFP). later in Assam too.",
        subtopic: 'elections_1937',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "The Congress Ministries resigned in October 1939 because:",
        options: [
            "The British government declared India a party to World War II without consulting Indian opinion.",
            "There were internal differences in the Congress regarding the support to British.",
            "The Governors interfered too much in the administration.",
            "They wanted to launch the Quit India Movement immediately."
        ],
        correctAnswer: 0,
        explanation: "Viceroy Linlithgow declared India at war with Germany without consulting the Central Legislature or provincial leaders.",
        subtopic: 'congress_resignation',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "Which day was observed as the 'Day of Deliverance' by the Muslim League after the resignation of Congress Ministries?",
        options: ["August 15, 1947", "December 22, 1939", "January 26, 1930", "August 16, 1946"],
        correctAnswer: 1,
        explanation: "Jawaharlal Nehru called it a 'Day of Deliverance'. Jinnah appealed to Muslims to celebrate Dec 22, 1939, as a day of relief from 'Congress Tyranny'.",
        subtopic: 'day_of_deliverance',
        difficulty: 'Easy'
    }
];

export const MODERN_CHAPTER_21_CONTENT = `
# Chapter 21: 1937 Elections & Congress Rule (1937-1939)

The Dress Rehearsal for Power.

THE STRATEGY: "THE 28-MONTH RULE"
*   **Visual Metaphor:** A Minister's Chair.
*   **Context:** Act of 1935 provided Provincial Autonomy.

---

## BLOCK 1: ELECTIONS OF 1937
**The Ballot Box verdict.**

### 🗳️ THE RESULTS
*   **Total Provinces:** 11.
*   **Congress Sweep:** Won absolute majority in 5 provinces. Formed government in **7** (later 8).
    *   (Madras, Bombay, Central Provinces, Orissa, Bihar, UP, NWFP, Assam).
*   **Muslim League:** Dismal performance. Fared badly even in Muslim-majority provinces (Punjab, Bengal, Sind).
    *   Result: Jinnah turned to extreme communalism ("Islam in Danger").

---

## BLOCK 2: CONGRESS MINISTRIES (28 Months)
**Achievements & Limitations.**

### ✅ ACHIEVEMENTS
*   **Civil Liberties:** Released political prisoners (including revolutionaries).
*   **Agrarian Reforms:** Tenancy acts passed to protect peasants.
*   **Social Reforms:** Temple Entry (Madras), Prohibition (Madras/Bombay).
*   **Labour:** Introduction of trade union rights.

### ❌ CRITICISM
*   **Pirpur Report (1938):** Published by Muslim League alleging atrocities by Congress ministries. (Mostly fabricated).
*   **Socialists:** Felt Congress was too soft on landlords and capitalists.

---

## BLOCK 3: THE RESIGNATION (1939)
**The War begins.**

### 🌍 WORLD WAR II
*   **Sept 1, 1939:** Germany invades Poland.
*   **Sept 3, 1939:** Viceroy **Linlithgow** declares India at war.
*   **Congress Demand:** "We will support only if India is promised independence after war."
*   **British Reply:** No.
*   **Oct 1939:** **Congress Ministries Resigned** in protest.
*   **Dec 22, 1939:** Jinnah celebrated **"Day of Deliverance"**.

---

## BLOCK 4: PYQ CORNER

> [!WARNING]
> **🔥 PYQ ALERT:**
> *   **Q:** How many provinces did Congress win? -> **Majority in 5, Govt in 8**.
> *   **Q:** Why did they resign? -> **India declared at war without consent**.
> *   **Q:** Date of Deliverance Day? -> **Dec 22, 1939**.
`;
