export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic?: string;
    difficulty?: 'Easy' | 'Moderate' | 'Hard';
}

export const MODERN_CHAPTER_17_MCQS: Question[] = [
    {
        id: 1,
        question: "The 'Swaraj Party' was formed following the failure of which movement?",
        options: [
            "Civil Disobedience Movement",
            "Non-Cooperation Movement",
            "Quit India Movement",
            "Swadeshi Movement"
        ],
        correctAnswer: 1,
        explanation: "The Swaraj Party (1923) was formed by C.R. Das and Motilal Nehru after the withdrawal of the Non-Cooperation Movement (Chauri Chaura incident).",
        subtopic: 'swarajists',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Who among the following was known as a 'No-Changer' properly opposed to Council Entry?",
        options: [
            "C.R. Das",
            "Motilal Nehru",
            "Vallabhbhai Patel",
            "Vithalbhai Patel"
        ],
        correctAnswer: 2,
        explanation: "Vallabhbhai Patel, Rajendra Prasad, and C. Rajagopalachari were 'No-Changers' who wanted to continue Gandhi's constructive work and boycott councils.",
        subtopic: 'no_changers',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "The famous 'Vithalbhai Patel' (Swarajist) was elected as the President (Speaker) of the Central Legislative Assembly in which year?",
        options: ["1923", "1925", "1927", "1929"],
        correctAnswer: 1,
        explanation: "In 1925, Vithalbhai Patel was elected as the first Indian Speaker (President) of the Central Legislative Assembly. A major Swarajist victory.",
        subtopic: 'swarajist_achievements',
        difficulty: 'Moderate'
    }
];

export const MODERN_CHAPTER_17_CONTENT = `
# Chapter 17: Swarajists vs. No-Changers (1922-1928)

Post-NCM Politics. The battle between "End or Mend" the Councils.

THE STRATEGY: "PARLIAMENT AS A BATTLEFIELD"
*   **Visual Metaphor:** Entering the Lion's Den (Councils) vs. Building the Fort outside (Constructive Work).
*   **Key Debate:** Council Entry.

---

## BLOCK 1: THE SPLIT (Gaya Session 1922)
**Pro-Changers vs. No-Changers.**

### 🏛️ THE FACTIONS
*   **Swarajists (Pro-Changers):**
    *   **Leaders:** **C.R. Das** (President), **Motilal Nehru** (Secretary).
    *   **Plan:** Enter councils to "Wreck them from within" (Obstructionism).
    *   **Argument:** Councils are a sham; we must expose them.
*   **No-Changers:**
    *   **Leaders:** C. Rajagopalachari, Vallabhbhai Patel, Rajendra Prasad.
    *   **Plan:** Boycott councils. Focus on **Constructive Work** (Khadi, Hindu-Muslim unity, Untouchability).

### 🤝 THE COMPROMISE (Delhi 1923)
*   Resulted in a "Swaraj Party within the Congress".
*   Both groups allowed to work in their own way.

---

## BLOCK 2: SWARAJIST ACHIEVEMENTS
**Wrecking from Within.**

*   **1923 Elections:** Won 42/101 seats in Central Assembly.
*   **Biggest Victory (1925):** **Vithalbhai Patel** elected Speaker (President) of Central Legislative Assembly.
*   **Defeated Public Safety Bill (1928):** Government forced to use Veto.
*   **Exposed the Hollow System:** Proved Montagu-Chelmsford reforms were useless.

---

## BLOCK 3: DECLINE (Why it failed?)
*   **Death of C.R. Das (1925):** A huge blow.
*   **Cooperation:** Some Swarajists (Responsivists like Lajpat Rai, M.M. Malaviya) started cooperating with Govt to protect "Hindu Interests".
*   **Communalism:** Rise of communal riots weakened the party.

---

## BLOCK 4: PYQ CORNER

> [!WARNING]
> **🔥 PYQ ALERT:**
> *   **Q:** Who founded Swaraj Party? -> **C.R. Das & Motilal Nehru**.
> *   **Q:** Who was the first Indian Speaker? -> **Vithalbhai Patel**.
> *   **Q:** Leader of No-Changers? -> **Rajaji / Patel**.
`;
