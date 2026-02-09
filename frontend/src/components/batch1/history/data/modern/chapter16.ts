export interface Subtopic {
    id: string | number;
    name: string;
    status?: string;
}

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic?: string | number;
    difficulty?: string;
    cognitiveLevel?: string;
}

export const MODERN_CHAPTER_16_SUBTOPICS: Subtopic[] = [
    { id: 1, name: "Background (Khilafat, Hunter Committee)", status: 'commenced' },
    { id: 2, name: "Launch of NCM (Aug 1, 1920)", status: 'commenced' },
    { id: 3, name: "Congress Sessions (Calcutta & Nagpur 1920)", status: 'commenced' },
    { id: 4, name: "Spread & Regional Variations", status: 'commenced' },
    { id: 5, name: "Withdrawal (Chauri Chaura) & Split", status: 'commenced' },
];

export const MODERN_CHAPTER_16_MCQS = [
    {
        id: 1,
        question: "The 'Khilafat Movement' was primarily organized to protest against the injustice done to:",
        options: [
            "The Caliph of Baghdad",
            "The Sultan of Turkey (Ottoman Empire)",
            "The Shah of Iran",
            "The King of Afghanistan"
        ],
        correctAnswer: 1,
        explanation: "The Sultan of Turkey was the Caliph. The Treaty of Sevres (1920) dismembered the Ottoman Empire."
    },
    {
        id: 2,
        question: "Who among the following leaders was the first to link the Khilafat issue with the Indian National Movement, seeing it as 'an opportunity of uniting Hindus and Mohammedans as would not arise in a hundred years'?",
        options: [
            "Muhammad Ali Jinnah",
            "Abul Kalam Azad",
            "Mahatma Gandhi",
            "Shaukat Ali"
        ],
        correctAnswer: 2,
        explanation: "Gandhi saw this as a golden opportunity for Hindu-Muslim unity."
    },
    {
        id: 3,
        question: "The 'All India Khilafat Conference' held in Delhi in November 1919 decided to:",
        options: [
            "Launch a violent Jihad against the British",
            "Boycott British goods if their demands were not met",
            "Support the British in exchange for concessions",
            "Merge with the Muslim League"
        ],
        correctAnswer: 1,
        explanation: "It decided to boycott British goods if the Khilafat demands were not met."
    },
    {
        id: 4,
        question: "The Non-Cooperation Movement was formally launched on August 1, 1920. This day is also significant because:",
        options: [
            "The Jallianwala Bagh massacre happened on this day",
            "Lokmanya Tilak passed away",
            "Gandhi returned the Kaiser-i-Hind medal",
            "The Prince of Wales arrived in India"
        ],
        correctAnswer: 1,
        explanation: "Lokmanya Tilak passed away in the early hours of Aug 1, 1920."
    },
    {
        id: 5,
        question: "Who among the following leaders opposed the Non-Cooperation resolution at the Calcutta Special Session (1920) but later moved the same resolution at the Nagpur Session (1920)?",
        options: [
            "Motilal Nehru",
            "C.R. Das (Chittaranjan Das)",
            "Lala Lajpat Rai",
            "Vallabhbhai Patel"
        ],
        correctAnswer: 1,
        explanation: "C.R. Das opposed it at Calcutta (due to the boycott of councils) but was won over by Gandhi and moved the resolution at Nagpur."
    },
    {
        id: 6,
        question: "The 'Nagpur Session' (1920) of the Congress is a landmark in India's constitutional history because: (1) It changed the goal of the Congress to 'Swaraj by peaceful and legitimate means', (2) It established a CWC of 15 members, (3) It reorganized PCCs on a linguistic basis. Which are correct?",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2 and 3"
        ],
        correctAnswer: 3,
        explanation: "All three are landmark changes. The CWC was created to lead the movement continuously (unlike the annual sessions)."
    },
    {
        id: 7,
        question: "Which prominent leader left the Congress after the Nagpur Session (1920) because he disagreed with the new unconstitutional methods and the mass character of the movement?",
        options: [
            "Muhammad Ali Jinnah",
            "Jawaharlal Nehru",
            "Abul Kalam Azad",
            "Rajendra Prasad"
        ],
        correctAnswer: 0,
        explanation: "Jinnah (along with Besant and B.C. Pal) left the Congress, calling the movement 'political anarchy'."
    },
    {
        id: 8,
        question: "The 'Tilak Swaraj Fund' was announced to collect money for the movement. What was the target amount?",
        options: [
            "1 Lakh Rupees",
            "50 Lakh Rupees",
            "1 Crore Rupees",
            "10 Crore Rupees"
        ],
        correctAnswer: 2,
        explanation: "1 Crore Rupees. (It was oversubscribed)."
    },
    {
        id: 9,
        question: "Who was the President of the 'Special Session' of the Congress held at Calcutta in September 1920?",
        options: [
            "C. Vijayaraghavachariar",
            "Lala Lajpat Rai",
            "Motilal Nehru",
            "Annie Besant"
        ],
        correctAnswer: 1,
        explanation: "Lala Lajpat Rai."
    },
    {
        id: 10,
        question: "The 'Chirala-Perala' movement in Andhra Pradesh during the NCM was related to:",
        options: [
            "Refusal to pay Municipal Taxes led by Duggirala Gopalakrishnayya",
            "Forest Satyagraha",
            "Temple Entry",
            "Indigo cultivation"
        ],
        correctAnswer: 0,
        explanation: "Duggirala Gopalakrishnayya led the people to refuse municipal taxes; they vacated the town and lived in a settlement called 'Ramnagar'."
    },
    {
        id: 11,
        question: "The 'Eka Movement' (Unity Movement) in the Avadh region (1921) was led by:",
        options: [
            "Baba Ramchandra",
            "Madari Pasi",
            "Alluri Sitarama Raju",
            "Sahajanand Saraswati"
        ],
        correctAnswer: 1,
        explanation: "Madari Pasi led the Eka movement (tenants' movement). Baba Ramchandra led the earlier Kisan Sabha movement."
    },
    {
        id: 12,
        question: "The 'Moplah Rebellion' (1921) in Malabar started as an anti-British/anti-landlord struggle supporting the Khilafat but later turned communal. The Moplahs were:",
        options: [
            "Hindu peasants",
            "Muslim tenants/leaseholders",
            "Christian missionaries",
            "Tribal warriors"
        ],
        correctAnswer: 1,
        explanation: "Moplahs were Muslim tenants in Malabar fighting Hindu Jenmis (landlords)."
    },
    {
        id: 13,
        question: "In which region did the 'Anti-Union Board Tax' campaign achieve success during the Non-Cooperation Movement?",
        options: [
            "Midnapore (Bengal)",
            "Kheda (Gujarat)",
            "Guntur (Andhra)",
            "Malabar (Kerala)"
        ],
        correctAnswer: 0,
        explanation: "Midnapore (and parts of Birbhum)."
    },
    {
        id: 14,
        question: "The 'Akali Movement' in Punjab during this period was primarily directed against:",
        options: [
            "The British recruiting officers",
            "The corrupt Mahants (priests) of the Gurdwaras",
            "The Muslim League",
            "The Hindu moneylenders"
        ],
        correctAnswer: 1,
        explanation: "Mahants (who were pro-British and corrupt)."
    },
    {
        id: 15,
        question: "Who led the 'Forest Satyagraha' in the Palnadu region of Guntur (Andhra), where tribals sent their cattle into forests without paying the grazing fee?",
        options: [
            "T. Prakasam",
            "Unnava Lakshminarayana",
            "Alluri Sitarama Raju",
            "K. Nageswara Rao"
        ],
        correctAnswer: 1,
        explanation: "Unnava Lakshminarayana (and local tribals)."
    },
    {
        id: 16,
        question: "During the NCM, many national educational institutions were founded. Which of the following was NOT founded during this period (1920–22)?",
        options: [
            "Jamia Millia Islamia",
            "Kashi Vidyapeeth",
            "Gujarat Vidyapeeth",
            "Banaras Hindu University (BHU)"
        ],
        correctAnswer: 3,
        explanation: "BHU was founded earlier (1916) by Malaviya. Jamia, Kashi Vidyapeeth, Gujarat Vidyapeeth were born during NCM."
    },
    {
        id: 17,
        question: "Who became the first Principal of the 'National College' in Calcutta founded during the NCM?",
        options: [
            "C.R. Das",
            "Subhash Chandra Bose",
            "J.M. Sengupta",
            "B.C. Pal"
        ],
        correctAnswer: 1,
        explanation: "Subhash Chandra Bose resigned from the ICS to become the Principal."
    },
    {
        id: 18,
        question: "Which famous lawyer gave up his lucrative practice during the NCM?",
        options: [
            "Motilal Nehru and C.R. Das only",
            "Motilal, C.R. Das, and C. Rajagopalachari only",
            "C. Rajagopalachari and Vallabhbhai Patel only",
            "Motilal Nehru, C.R. Das, C. Rajagopalachari, and Vallabhbhai Patel"
        ],
        correctAnswer: 3,
        explanation: "All of them (Motilal, C.R. Das, C.R., Patel, Saifuddin Kitchlew) gave up their practice."
    },
    {
        id: 19,
        question: "The 'Chauri Chaura' incident, which compelled Gandhi to withdraw the movement, took place in:",
        options: [
            "Bihar",
            "Gorakhpur district, United Provinces (UP)",
            "Punjab",
            "Central Provinces"
        ],
        correctAnswer: 1,
        explanation: "Gorakhpur, UP."
    },
    {
        id: 20,
        question: "The resolution to withdraw the Non-Cooperation Movement was passed by the Congress Working Committee at:",
        options: [
            "Chauri Chaura",
            "Bardoli",
            "Ahmedabad",
            "Delhi"
        ],
        correctAnswer: 1,
        explanation: "Bardoli. (Hence called the Bardoli Resolution)."
    },
    {
        id: 21,
        question: "Who described the withdrawal of the movement after Chauri Chaura as a 'National Calamity'?",
        options: [
            "Jawaharlal Nehru",
            "Subhash Chandra Bose",
            "Motilal Nehru",
            "C.R. Das"
        ],
        correctAnswer: 1,
        explanation: "Subhash Chandra Bose called it a 'National Calamity'."
    },
    {
        id: 22,
        question: "Following the withdrawal, Gandhi was arrested in March 1922 and charged with sedition for his articles in:",
        options: [
            "Indian Opinion",
            "Young India",
            "Navjivan",
            "Harijan"
        ],
        correctAnswer: 1,
        explanation: "Young India."
    },
    {
        id: 23,
        question: "Which judge presided over the historic trial of Mahatma Gandhi in 1922 and sentenced him to six years imprisonment?",
        options: [
            "Justice Broomfield",
            "Justice Kingsford",
            "Justice Rowlatt",
            "Justice McNair"
        ],
        correctAnswer: 0,
        explanation: "Justice Broomfield. He famously said, 'If the government releases you, no one will be happier than I.'"
    },
    {
        id: 24,
        question: "What was the 'Reading Offer' (Dec 1921) regarding the Non-Cooperation Movement?",
        options: [
            "An offer to grant Dominion Status immediately",
            "An offer to release political prisoners and call a Round Table Conference if the boycott of the Prince of Wales was called off",
            "An offer to withdraw the Rowlatt Act",
            "An offer to separate Sindh from Bombay"
        ],
        correctAnswer: 1,
        explanation: "Viceroy Reading offered this to ensure a smooth visit for the Prince of Wales."
    },
    {
        id: 25,
        question: "Why did Gandhi reject the 'Reading Offer' in December 1921?",
        options: [
            "It did not include the release of the Ali Brothers (who were fatwa prisoners)",
            "It did not promise Independence",
            "The Congress demanded the resignation of the Viceroy",
            "He wanted to continue the movement till 1925"
        ],
        correctAnswer: 0,
        explanation: "Gandhi insisted that the Ali Brothers (who were arrested for calling on Muslims to resign from the army) must also be released."
    },
    {
        id: 26,
        question: "'The movement was not a failure; it was a strategic retreat.' This view regarding the withdrawal of NCM is held by:",
        options: [
            "Subhash Chandra Bose",
            "The Marxists",
            "Bipin Chandra (Modern Historians)",
            "The British"
        ],
        correctAnswer: 2,
        explanation: "Bipin Chandra argues it was a strategic retreat because the masses were getting exhausted and turning violent, which would give the British an excuse to use brutal force."
    },
    {
        id: 27,
        question: "Who was the first woman to be arrested during the Non-Cooperation Movement?",
        options: [
            "Sarojini Naidu",
            "Basanti Devi (Wife of C.R. Das)",
            "Kasturba Gandhi",
            "Annie Besant"
        ],
        correctAnswer: 1,
        explanation: "Basanti Devi. Her arrest caused a massive stir in Bengal."
    },
    {
        id: 28,
        question: "The 'Duke of Connaught' visited India in 1921 to:",
        options: [
            "Inaugurate the new Legislative Councils under the 1919 Act",
            "Negotiate with Gandhi",
            "Arrest the Ali Brothers",
            "Attend the Delhi Durbar"
        ],
        correctAnswer: 0,
        explanation: "To inaugurate the Reforms of 1919."
    },
    {
        id: 29,
        question: "The 'Mulshi Dam Satyagraha' (1920-24) in Maharashtra was led by:",
        options: [
            "Senapati Bapat",
            "Vinoba Bhave",
            "Sane Guruji",
            "N.C. Kelkar"
        ],
        correctAnswer: 0,
        explanation: "Senapati Bapat. (First anti-dam movement)."
    },
    {
        id: 30,
        question: "'Gandhi-Reading Talks' (May 1921) failed because:",
        options: [
            "Reading wanted Gandhi to condemn the violent speeches of the Ali Brothers, which Gandhi refused to do without them withdrawing the statements themselves",
            "Gandhi demanded immediate Swaraj",
            "Reading refused to meet Gandhi",
            "The Khilafat issue was solved"
        ],
        correctAnswer: 0,
        explanation: "Gandhi refused to fall into the trap of separating the Ali Brothers from the Congress."
    },
    {
        id: 31,
        question: "Arrange the following events in chronological order: (1) Death of Tilak, (2) Chauri Chaura Incident, (3) Nagpur Session of Congress, (4) Visit of Prince of Wales",
        options: [
            "1-3-4-2",
            "1-4-3-2",
            "3-1-4-2",
            "1-3-2-4"
        ],
        correctAnswer: 0,
        explanation: "Tilak (Aug 1920) -> Nagpur (Dec 1920) -> Prince of Wales (Nov 1921) -> Chauri Chaura (Feb 1922)."
    },
    {
        id: 32,
        question: "Match the Leader with the Region during NCM: (A) C. Rajagopalachari - Madras, (B) J.M. Sengupta - Bengal, (C) Vallabhbhai Patel - Gujarat, (D) Lala Lajpat Rai - Punjab.",
        options: [
            "A-2, B-1, C-3, D-4",
            "A-1, B-2, C-3, D-4",
            "A-2, B-1, C-4, D-3",
            "A-3, B-2, C-1, D-4"
        ],
        correctAnswer: 0,
        explanation: "All pairs are correctly matched."
    },
    {
        id: 33,
        question: "The 'Bijolia Peasant Movement' in Rajasthan was led by:",
        options: [
            "Vijay Singh Pathik",
            "Motilal Tejawat",
            "Govind Guru",
            "Manikya Lal Verma"
        ],
        correctAnswer: 0,
        explanation: "Vijay Singh Pathik."
    },
    {
        id: 34,
        question: "Which of the following slogans was widely used during the Non-Cooperation Movement?",
        options: [
            "Do or Die",
            "Swaraj in One Year",
            "Quit India",
            "Delhi Chalo"
        ],
        correctAnswer: 1,
        explanation: "'Swaraj in One Year' was the promise Gandhi made if the NCM was followed strictly."
    },
    {
        id: 35,
        question: "The 'Swaraj Party' was formed in late 1922/early 1923 as a result of:",
        options: [
            "The success of the NCM",
            "The dissatisfaction with the suspension of the NCM and the desire to enter Legislative Councils",
            "The merger of Congress and Muslim League",
            "The British ban on Congress"
        ],
        correctAnswer: 1,
        explanation: "C.R. Das and Motilal Nehru formed the Swaraj Party to end the boycott of councils and wreck the government from within."
    }
];

export const MODERN_CHAPTER_16_CONTENT = `
# Chapter 16: The Non-Cooperation Movement (1920-1922)

The First All-India Mass Struggle. Gandhi takes the wheel.

THE STRATEGY: "BOYCOTT & CALAMITY"
*   **Visual Metaphor:** The Charkha vs. The Police Station (Chauri Chaura).
*   **Key Comparison:** Constitutional Struggle -> Mass Satyagraha.

---

## BLOCK 1: THE LAUNCH (1920)
**From Khilafat to Swaraj.**

### 🚀 ROAD TO NCM
*   **Aug 1, 1920:** Movement formally launched. (Tilak died on the same day).
*   **Calcutta Special Session (Sept 1920):** Approved the NCM plan (Lala Lajpat Rai Presided).
*   **Nagpur Session (Dec 1920):**
    *   **Ratification:** C.R. Das (who opposed earlier) moved the resolution.
    *   **New Constitution:** 15-member Working Committee (CWC) formed to lead year-round.
    *   **Goal:** "Swaraj by peaceful and legitimate means."

---

## BLOCK 2: THE PROGRAM
**Boycott, Swadeshi, and National Education.**

*   **Boycott:** Schools, Colleges, Courts, Foreign Cloth.
*   **Success:**
    *   Imports of foreign cloth halved.
    *   **Jamia Millia Islamia** & **Kashi Vidyapeeth** founded.
    *   Lawyers like Motilal Nehru & C.R. Das gave up practice.

---

## BLOCK 3: THE WITHDRAWAL (1922)
**The Sudden Stop.**

### 🛑 CHAURI CHAURA
*   **Date:** Feb 5, 1922.
*   **Event:** Mob burned 22 policemen alive in Gorakhpur (UP).
*   **Gandhi's Response:** Withdrew NCM immediately. "**Himalayan Blunder**".
*   **Bardoli Resolution:** Formally stopped the movement.
*   **Reaction:**
    *   **Subhash Bose:** "National Calamity".
    *   **Jawaharlal Nehru:** Dismayed.
*   **Outcome:** Gandhi arrested (March 1922). 6 Years Jail.

---

## BLOCK 4: PYQ CORNER

> [!WARNING]
> **🔥 PYQ ALERT:**
> *   **Q:** Who moved the NCM resolution at Nagpur? -> **C.R. Das**.
> *   **Q:** Target of Tilak Swaraj Fund? -> **1 Crore**.
> *   **Q:** Why did Gandhi withdraw? -> **Violence at Chauri Chaura**.
> *   **Q:** Who called it a National Calamity? -> **Subhash Bose**.
`;
