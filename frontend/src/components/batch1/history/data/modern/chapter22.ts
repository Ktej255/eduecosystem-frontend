export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic?: string;
    difficulty?: 'Easy' | 'Moderate' | 'Hard';
}

export const MODERN_CHAPTER_22_MCQS: Question[] = [
    {
        id: 1,
        question: "The slogan 'Do or Die' was given by Mahatma Gandhi during which movement?",
        options: ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Rowlatt Satyagraha"],
        correctAnswer: 2,
        explanation: "Gandhi gave the mantra 'Do or Die' (Karenge ya Marenge) in his speech at Gowalia Tank Maidan, Bombay on August 8, 1942.",
        subtopic: 'quit_india_launch',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Which of the following leaders ran an underground radio during the Quit India Movement?",
        options: ["Aruna Asaf Ali", "Usha Mehta", "Sucheta Kripalani", "Sarojini Naidu"],
        correctAnswer: 1,
        explanation: "Usha Mehta started an underground radio station in Bombay. It broadcasted news for three months before being detected.",
        subtopic: 'underground_activity',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "The Indian National Army (INA) was first conceived by:",
        options: ["Subhash Chandra Bose", "Mohan Singh", "Rashbehari Bose", "Niranjan Singh Gill"],
        correctAnswer: 1,
        explanation: "The idea was first conceived by Captain Mohan Singh in Malaya (with Japanese help). It was later revived and led by Subhash Chandra Bose.",
        subtopic: 'ina_origin',
        difficulty: 'Moderate'
    }
];

export const MODERN_CHAPTER_22_CONTENT = `
# Chapter 22: Quit India Movement & INA (1942-1945)

The Final Push. The "Leaderless" Revolution.

THE STRATEGY: "DO OR DIE"
*   **Visual Metaphor:** A ship burning its bridges.
*   **Context:** Failure of Cripps Mission (1942) & Japanese threat.

---

## BLOCK 1: CRIPPS MISSION (March 1942)
**The Failed Offer.**

*   **Sir Stafford Cripps:** Sent by Churchill (under US pressure).
*   **Offer:** Dominion Status (after war) + Constituent Assembly.
*   **Rejection:**
    *   **Gandhi:** "A post-dated cheque on a crashing bank."
    *   **Congress:** Wanted immediate transfer of power.
    *   **League:** Rejected because it didn't accept Pakistan explicitly.

---

## BLOCK 2: QUIT INDIA MOVEMENT (August 1942)
**August Kranti.**

### 🚀 THE LAUNCH
*   **Date:** Aug 8, 1942.
*   **Venue:** Gowalia Tank Maidan, Bombay.
*   **Resolution:** "Quit India".
*   **Mantra:** "**Do or Die**" (We shall either free India or die in the attempt).
*   **Response:**
    *   British arrested ALL top leaders (Gandhi, Nehru, Patel) on Aug 9 morning.
    *   **Operation Zero Hour**.

### 🌪️ THE REVOLT
*   **Leaderless:** Since leaders were jailed, it became a spontaneous mass upheaval.
*   **Underground Leaders:** **Jayaprakash Narayan**, **Aruna Asaf Ali** (Heroine of 1942), Ram Manohar Lohia.
*   **Usha Mehta:** Secret Radio.
*   **Parallel Governments:**
    *   **Ballia (UP):** Chittu Pandey.
    *   **Tamluk (Bengal):** Jatiya Sarkar.
    *   **Satara (Maharashtra):** Nana Patil (Prati Sarkar) - Longest lasting.

---

## BLOCK 3: INDIAN NATIONAL ARMY (INA)
**Azad Hind Fauj.**

### 🐅 SUBHASH CHANDRA BOSE
*   **The Escape:** Escaped house arrest in Calcutta (1941) -> Russia -> Germany (Hitler) -> Japan.
*   **INA Origins:**
    *   Founded by **Captain Mohan Singh** (POWs in Malaya).
    *   Revived by **Rashbehari Bose**.
    *   Handed over to Subhash (Netaji) in Singapore (1943).
*   **Slogans:** "Jai Hind", "Dilli Chalo", "Give me blood, and I will give you freedom".
*   **Brigades:** Gandhi, Nehru, Azad, and **Rani Jhansi Regiment** (Women - Lakshmi Sahgal).
*   **Imphal Campaign (1944):** Reached Indian soil (Moirang, Manipur). Defeated by rains and lack of supplies.

### ⚖️ INA TRIALS (Red Fort 1945)
*   **Accused:** Shah Nawaz Khan, P.K. Sahgal, G.S. Dhillon (Hindu-Muslim-Sikh trio).
*   **Defense:** Bhulabhai Desai, Nehru, Sapru.
*   **Impact:** Unified India like never before. Royal Indian Navy (RIN) Mutiny followed in 1946.

---

## BLOCK 4: PYQ CORNER

> [!WARNING]
> **🔥 PYQ ALERT:**
> *   **Q:** "Post-dated cheque"? -> **Cripps Mission**.
> *   **Q:** Heroine of 1942? -> **Aruna Asaf Ali**.
> *   **Q:** Where was Parallel Govt formed? -> **Ballia, Tamluk, Satara**.
> *   **Q:** Who founded INA? -> **Mohan Singh** (First).
`;
