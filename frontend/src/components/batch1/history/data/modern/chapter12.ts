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

export const MODERN_CHAPTER_12_SUBTOPICS: Subtopic[] = [
    { id: 'rise_extremism', name: 'Rise of Extremism & Curzon\'s Policies' },
    { id: 'partition_bengal', name: 'Partition of Bengal (Chronology)' },
    { id: 'swadeshi_movement', name: 'Swadeshi Movement (Spread & Features)' },
    { id: 'surat_split', name: 'The Surat Split (1907)' },
    { id: 'muslim_league', name: 'Muslim League & Morley-Minto Reforms' },
    { id: 'conceptual', name: 'Conceptual & Advanced Statements' }
];

export const MODERN_CHAPTER_12_MCQS: Question[] = [
    // Set 1: Rise of Extremism
    {
        id: 1,
        question: "Which of the following events largely destroyed the myth of European invincibility and inspired Indian nationalists in the early 20th century?",
        options: ["The Boer War", "The victory of Japan over Russia (1905)", "The French Revolution", "The American Civil War"],
        correctAnswer: 1, // (b)
        explanation: "Japan's victory over Russia (an Asian power defeating a European giant) shattered the myth of white supremacy.",
        subtopic: 'rise_extremism',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Lord Curzon’s \"Indian Universities Act\" of 1904 was criticized by nationalists because:",
        options: ["It introduced English as the only medium of instruction.", "It increased government control over universities to curb nationalism.", "It banned the teaching of Indian history.", "It allowed only Europeans to be Vice-Chancellors."],
        correctAnswer: 1, // (b)
        explanation: "It reduced the autonomy of the Senate and Syndicates, filling them with government nominees.",
        subtopic: 'rise_extremism',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "The \"Official Secrets Act\" was amended by Lord Curzon in 1904 to:",
        options: ["Protect military secrets only.", "Curb the freedom of the press and restrict nationalist criticism.", "Prevent the leakage of budget details.", "Stop the publication of scientific research."],
        correctAnswer: 1, // (b)
        explanation: "It widened the definition of \"sedition\" and \"official secrets\" to crush criticism.",
        subtopic: 'rise_extremism',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "Who among the following described the three methods of the Moderates (Prayer, Petition, Protest) as \"Political Mendicancy\"?",
        options: ["Dadabhai Naoroji", "Aurobindo Ghosh", "G.K. Gokhale", "Madan Mohan Malaviya"],
        correctAnswer: 1, // (b)
        explanation: "Aurobindo Ghosh (and Tilak) used this term to criticize the begging attitude of Moderates.",
        subtopic: 'rise_extremism',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "The \"Calcutta Corporation Act\" (1899) passed by Curzon:",
        options: ["Increased the number of elected Indian members.", "Reduced the number of elected members, giving the British majority control.", "Abolished the Corporation entirely.", "Made the Mayor's post reserved for Indians."],
        correctAnswer: 1, // (b)
        explanation: "It reduced the elected members, making it an official-dominated body.",
        subtopic: 'rise_extremism',
        difficulty: 'Moderate'
    },
    // Set 2: Partition of Bengal
    {
        id: 6,
        question: "The formal proclamation of the Swadeshi Movement was made on August 7, 1905, with the passing of the 'Boycott Resolution' at:",
        options: ["The Calcutta Town Hall", "The Indian Association Hall", "The Congress Session in Banaras", "The Jagannath Temple, Puri"],
        correctAnswer: 0, // (a)
        explanation: "The Boycott Resolution was passed at a massive meeting in Calcutta Town Hall on Aug 7, 1905.",
        subtopic: 'partition_bengal',
        difficulty: 'Easy'
    },
    {
        id: 7,
        question: "The Partition of Bengal came into force on October 16, 1905. This day was observed in Bengal as:",
        options: ["Independence Day", "Day of Deliverance", "Raksha Bandhan Day (Symbol of Unity) and Day of Mourning", "Republic Day"],
        correctAnswer: 2, // (c)
        explanation: "Tagore suggested tying Rakhi as a symbol of unity. It was observed as a Day of Mourning (fasting, no cooking).",
        subtopic: 'partition_bengal',
        difficulty: 'Easy'
    },
    {
        id: 8,
        question: "Who composed the song \"Amar Sonar Bangla\" during the Swadeshi movement, which later became the national anthem of Bangladesh?",
        options: ["Dwijendralal Ray", "Rabindranath Tagore", "Mukunda Das", "Rajanikanta Sen"],
        correctAnswer: 1, // (b)
        explanation: "Rabindranath Tagore.",
        subtopic: 'partition_bengal',
        difficulty: 'Easy'
    },
    {
        id: 9,
        question: "The \"Carlyle Circular\" issued by the government in 1905 was aimed at:",
        options: ["Stopping the funding of the Congress.", "Threatening withdrawal of grants and scholarships if students participated in politics.", "Banning the singing of Vande Mataram.", "Arresting the editors of nationalist newspapers."],
        correctAnswer: 1, // (b)
        explanation: "The Carlyle Circular threatened students with rustication and withdrawal of grants if they joined politics.",
        subtopic: 'partition_bengal',
        difficulty: 'Moderate'
    },
    {
        id: 10,
        question: "Who was the Viceroy of India when the Partition of Bengal was annulled in 1911?",
        options: ["Lord Curzon", "Lord Minto II", "Lord Hardinge II", "Lord Chelmsford"],
        correctAnswer: 2, // (c)
        explanation: "Lord Hardinge II annulled the partition in 1911 (Delhi Durbar) to curb the revolutionary terrorism.",
        subtopic: 'partition_bengal',
        difficulty: 'Easy'
    },
    // Set 3: Swadeshi Movement
    {
        id: 11,
        question: "Match the Leader with the Region where they led the Swadeshi Movement:\nA. Syed Haider Raza -> 1. Madras\nB. Chidambaram Pillai -> 2. Delhi\nC. Lala Lajpat Rai -> 3. Punjab\nD. Bipin Chandra Pal -> 4. Bengal\n\nSelect the correct answer:",
        options: ["A-2, B-1, C-3, D-4", "A-1, B-2, C-3, D-4", "A-2, B-3, C-4, D-1", "A-3, B-1, C-2, D-4"],
        correctAnswer: 0, // (a)
        explanation: "Raza (Delhi), Pillai (Madras), Lajpat Rai (Punjab), Pal (Bengal).",
        subtopic: 'swadeshi_movement',
        difficulty: 'Easy'
    },
    {
        id: 12,
        question: "The \"National Council of Education\" (NCE) was set up in 1906 to impart education on national lines. Who was its first Principal?",
        options: ["Rabindranath Tagore", "Aurobindo Ghosh", "Satish Chandra Mukherjee", "P.C. Ray"],
        correctAnswer: 1, // (b)
        explanation: "Aurobindo Ghosh was the first Principal of the Bengal National College (under NCE).",
        subtopic: 'swadeshi_movement',
        difficulty: 'Moderate'
    },
    {
        id: 13,
        question: "Who founded the \"Bengal Chemical and Pharmaceutical Works\" to promote indigenous industry during the Swadeshi movement?",
        options: ["Prafulla Chandra Ray", "Jagadish Chandra Bose", "Meghnad Saha", "Nilratan Sircar"],
        correctAnswer: 0, // (a)
        explanation: "Acharya P.C. Ray.",
        subtopic: 'swadeshi_movement',
        difficulty: 'Easy'
    },
    {
        id: 14,
        question: "The \"Swadesh Bandhab Samiti\", which mobilized the masses in Barisal (now in Bangladesh), was founded by:",
        options: ["Ashwini Kumar Dutt", "Pulin Das", "Barindra Kumar Ghosh", "Krishnakumar Mitra"],
        correctAnswer: 0, // (a)
        explanation: "Ashwini Kumar Dutt turned the Swadesh Bandhab Samiti into a mass movement in Barisal.",
        subtopic: 'swadeshi_movement',
        difficulty: 'Moderate'
    },
    {
        id: 15,
        question: "Which of the following classes participated in the Swadeshi Movement in large numbers for the first time?",
        options: ["Women and Students", "The Muslim Peasantry", "The Army", "The Princely States"],
        correctAnswer: 0, // (a)
        explanation: "Women and Students took to the streets in large numbers. The Muslim peasantry was largely kept away by communal propaganda.",
        subtopic: 'swadeshi_movement',
        difficulty: 'Easy'
    },
    {
        id: 16,
        question: "The famous painting of \"Bharat Mata\", depicting her as an ascetic figure holding distinct Indian objects, was created by:",
        options: ["Raja Ravi Varma", "Abanindranath Tagore", "Nandalal Bose", "Gaganendranath Tagore"],
        correctAnswer: 1, // (b)
        explanation: "Abanindranath Tagore painted the iconic Bharat Mata.",
        subtopic: 'swadeshi_movement',
        difficulty: 'Easy'
    },
    // Set 4: The Surat Split
    {
        id: 17,
        question: "The primary cause of the Surat Split (1907) was:",
        options: ["Difference of opinion on the Partition of Bengal.", "The Extremists' demand to extend the Swadeshi & Boycott movement outside Bengal and to all forms of association, which Moderates opposed.", "The Moderates wanted to accept the Morley-Minto reforms.", "Religious differences."],
        correctAnswer: 1, // (b)
        explanation: "The conflict was on the extent of the movement (Bengal vs. India) and the forms (only goods vs. all associations/services).",
        subtopic: 'surat_split',
        difficulty: 'Moderate'
    },
    {
        id: 18,
        question: "Who was the President of the INC at the Surat Session (1907) where the split occurred?",
        options: ["Dadabhai Naoroji", "Bal Gangadhar Tilak", "Rashbehari Ghosh", "Lala Lajpat Rai"],
        correctAnswer: 2, // (c)
        explanation: "Rashbehari Ghosh (Moderate). Extremists wanted Tilak or Lajpat Rai.",
        subtopic: 'surat_split',
        difficulty: 'Easy'
    },
    {
        id: 19,
        question: "In the 1906 Calcutta Session, the Congress managed to avoid a split by electing a President respected by both factions. Who was he?",
        options: ["G.K. Gokhale", "Dadabhai Naoroji", "Pherozeshah Mehta", "Madan Mohan Malaviya"],
        correctAnswer: 1, // (b)
        explanation: "Dadabhai Naoroji (Grand Old Man) was respected by all. He declared \"Swaraj\" as the goal to pacify Extremists.",
        subtopic: 'surat_split',
        difficulty: 'Easy'
    },
    {
        id: 20,
        question: "Following the Surat Split, the Government launched a massive attack on Extremists. Bal Gangadhar Tilak was arrested in 1908 and sent to:",
        options: ["Andaman (Cellular Jail)", "Mandalay (Burma)", "Yerwada (Pune)", "Arthur Road (Bombay)"],
        correctAnswer: 1, // (b)
        explanation: "Mandalay Jail (Burma) for 6 years. He wrote Gita Rahasya there.",
        subtopic: 'surat_split',
        difficulty: 'Easy'
    },
    // Set 5: Muslim League & Reforms
    {
        id: 21,
        question: "The \"All India Muslim League\" was founded in December 1906 at:",
        options: ["Aligarh", "Lucknow", "Dhaka", "Lahore"],
        correctAnswer: 2, // (c)
        explanation: "Dhaka (Dec 30, 1906).",
        subtopic: 'muslim_league',
        difficulty: 'Easy'
    },
    {
        id: 22,
        question: "Who among the following was the moving spirit behind the formation of the Muslim League and invited delegates to Dhaka?",
        options: ["Syed Ahmed Khan", "Nawab Salimullah of Dhaka", "Muhammad Ali Jinnah", "Shaukat Ali"],
        correctAnswer: 1, // (b)
        explanation: "Nawab Salimullah of Dhaka was the convener.",
        subtopic: 'muslim_league',
        difficulty: 'Easy'
    },
    {
        id: 23,
        question: "The \"Simla Deputation\" (Oct 1906) led by the Aga Khan met Lord Minto to demand:",
        options: ["Joint electorates.", "Separate electorates for Muslims and weightage in representation in excess of their population.", "Abolition of the Partition of Bengal.", "Independence from British rule."],
        correctAnswer: 1, // (b)
        explanation: "They demanded Separate Electorates (conceded in 1909).",
        subtopic: 'muslim_league',
        difficulty: 'Moderate'
    },
    {
        id: 24,
        question: "The \"Indian Councils Act of 1909\" (Morley-Minto Reforms) is most infamously known for:",
        options: ["Granting Dominion Status.", "Legalizing the Partition of Bengal.", "Introducing Separate Electorates for Muslims.", "Giving women the right to vote."],
        correctAnswer: 2, // (c)
        explanation: "It introduced the communal virus into Indian politics.",
        subtopic: 'muslim_league',
        difficulty: 'Easy'
    },
    {
        id: 25,
        question: "Who was the first Indian to be appointed as the Law Member of the Governor-General’s Executive Council under the 1909 Act?",
        options: ["Tej Bahadur Sapru", "Satyendra Prasanna Sinha", "Syed Amir Ali", "Sankaran Nair"],
        correctAnswer: 1, // (b)
        explanation: "S.P. Sinha.",
        subtopic: 'muslim_league',
        difficulty: 'Easy'
    },
    // Set 6: Conceptual
    {
        id: 26,
        question: "\"The reforms may not save the Raj, but if they don't, nothing else will.\" Lord Morley said this regarding which Act?",
        options: ["Act of 1892", "Act of 1909", "Act of 1919", "Act of 1935"],
        correctAnswer: 1, // (b)
        explanation: "Morley (Secretary of State) defending the 1909 reforms.",
        subtopic: 'conceptual',
        difficulty: 'Hard'
    },
    {
        id: 27,
        question: "Why did the Muslims of East Bengal initially support the Partition of Bengal?",
        options: ["They were bribed by the British.", "They believed a separate province would free them from the dominance of Hindu landlords and merchants of Calcutta.", "They wanted to join the Ottoman Empire.", "They wanted to promote the Bengali language."],
        correctAnswer: 1, // (b)
        explanation: "The British propaganda (Curzon) convinced them that a separate province would free them from the \"Hindu yoke\" of Calcutta landlords.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 28,
        question: "The \"Arundeale Committee\" (1906) was appointed to:",
        options: ["Investigate the police atrocities.", "Work out the details of the expansion of the Legislative Councils (Minto-Morley reforms).", "Review the Partition of Bengal.", "Suggest educational reforms."],
        correctAnswer: 1, // (b)
        explanation: "The Arundeale Committee worked on the specific details of the 1909 reforms.",
        subtopic: 'conceptual',
        difficulty: 'Hard'
    },
    {
        id: 29,
        question: "\"Political Freedom is the life-breath of a nation.\" This slogan was given by:",
        options: ["B.G. Tilak", "Aurobindo Ghosh", "Mahatma Gandhi", "Subhash Chandra Bose"],
        correctAnswer: 1, // (b)
        explanation: "Aurobindo Ghosh emphasized that without political freedom, social or moral reform was impossible.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 30,
        question: "The \"Seditious Meetings Act\" (1907) and the \"Indian Press Act\" (1910) were passed primarily to:",
        options: ["Control the activities of the Revolutionaries and Extremists.", "Regulate the prices of newspapers.", "Stop the spread of communism.", "Ban religious processions."],
        correctAnswer: 0, // (a)
        explanation: "To crush the rising tide of militant nationalism after the split.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 31,
        question: "Which extremist leader retired from active politics and settled in Pondicherry as an ascetic after his acquittal in the Alipore Conspiracy Case?",
        options: ["Bipin Chandra Pal", "Aurobindo Ghosh", "Lala Lajpat Rai", "Brahmabandhab Upadhyay"],
        correctAnswer: 1, // (b)
        explanation: "Aurobindo Ghosh had a spiritual realization in jail and retired to Pondicherry.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 32,
        question: "The \"Barisal Conference\" (1906) is famous in the history of the freedom struggle because:",
        options: ["It was the first time the police brutally lathi-charged a peaceful gathering, leading to the cry of \"Vande Mataram\".", "It called for an armed revolution.", "It was presided over by Tilak.", "It passed the resolution for Pakistan."],
        correctAnswer: 0, // (a)
        explanation: "The delegates were beaten by the police; it became a symbol of British tyranny.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 33,
        question: "Which of the following was NOT a resolution passed at the historic 1906 Calcutta Session of the Congress?",
        options: ["Swaraj (Self-Government)", "Swadeshi", "Boycott", "Complete Independence (Purna Swaraj)"],
        correctAnswer: 3, // (d)
        explanation: "Complete Independence (Purna Swaraj) was NOT passed. The 4 resolutions were: Swaraj, Swadeshi, Boycott, National Education.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 34,
        question: "\"New Lamps for Old\" was a series of articles criticizing the Moderate politics of the Congress. It was written by:",
        options: ["B.G. Tilak", "Aurobindo Ghosh", "Lala Lajpat Rai", "Bankim Chandra Chattopadhyay"],
        correctAnswer: 1, // (b)
        explanation: "Aurobindo Ghosh wrote these articles in Indu Prakash.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 35,
        question: "In the context of the Swadeshi movement, the term \"Atmashakti\" (Self-Reliance) implied:",
        options: ["Rejection of all Western ideas.", "Reliance on government aid for development.", "Constructive work at the village level, national education, and indigenous courts.", "Individual spiritual salvation."],
        correctAnswer: 2, // (c)
        explanation: "Atmashakti meant strengthening the village economy and society through self-help, unrelated to the government.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    }
];

export const MODERN_CHAPTER_12_CONTENT = `
# Chapter 12: Swadeshi Movement & Rise of Extremism (1905-1911)

The First Mass Healing. The awakening of the "Atmashakti" (Self-Reliance).

THE STRATEGY: "PARTITION & THE PHOENIX"
*   **Visual Metaphor:** Dividing a map (Bengal Partition) vs. Tying a Rakhi (Unity).
*   **Core Theme:** From "Mendicancy" (Begging) to "Passive Resistance".
*   **Key Event:** The 1905 Partition and the 1907 Split.

---

## BLOCK 1: THE CAUSE - PARTITION OF BENGAL
**Curzon's Masterstroke (or Blunder).**

### ✂️ THE PARTITION (1903-1905)
*   **Viceroy:** **Lord Curzon** (The Villain of this act).
*   **Official Reason:** Administrative convenience. Bengal was too big (78 Million people).
*   **Real Motive:**
    *   To weaken the nerve center of Indian Nationalism (Bengal).
    *   To divide based on religion: **West Bengal** (Hindu Majority) vs **East Bengal & Assam** (Muslim Majority).
*   **Key Dates:**
    *   **July 1905:** Partition announced.
    *   **Aug 7, 1905:** **Boycott Resolution** passed at Calcutta Town Hall. (Formal Start of Swadeshi).
    *   **Oct 16, 1905:** **Day of Partition**. Observed as **Raksha Bandhan Day** (Tagore) and Day of Mourning.

---

## BLOCK 2: THE MOVEMENT (Swadeshi & Boycott)
**The Four Pillars: Swaraj, Swadeshi, Boycott, National Education.**

### 🚫 METHODOLOGY
*   **Boycott:** Burning foreign cloth, picketing shops.
*   **Swadeshi:** Promotion of indigenous industries (Textiles, Soap, Matchboxes).
    *   **P.C. Ray:** Bengal Chemical Factory.
*   **National Education:**
    *   **NCE (National Council of Education):** Setup in 1906.
    *   **Bengal National College:** Principal **Aurobindo Ghosh**.
*   **Cultural Awakening:**
    *   **Tagore:** "Amar Sonar Bangla" (Now Bangladesh Anthem).
    *   **Abanindranath Tagore:** Painted **Bharat Mata**.

---

## BLOCK 3: THE SPREAD (Beyond Bengal)
**The Fire Spreads.**

| Region | Leader |
| :--- | :--- |
| **Poona/Bombay** | **Bal Gangadhar Tilak** (Ganapati & Shivaji Festivals used for mobilization) |
| **Punjab** | **Lala Lajpat Rai** & Ajit Singh |
| **Delhi** | Syed Haider Raza |
| **Madras** | **V.O. Chidambaram Pillai** (Swadeshi Steam Navigation Company) |

---

## BLOCK 4: THE SPLIT - SURAT 1907
**The Divorce.**

### 💔 SURAT SPLIT (1907)
*   **Context:** Fight between Moderates (Gokhale, Mehta) and Extremists (Lal-Bal-Pal).
*   **Issue:**
    *   Extremists wanted to extend Boycott to *all* India and *all* forms of association.
    *   Moderates wanted to restrict it to Bengal and foreign cloth only.
*   **The Session:**
    *   Venue shifted to Surat (Stronghold of Mehta) from Nagpur (Tilak's fort).
    *   **President:** **Rashbehari Ghosh** (Moderate). Election was contested.
    *   **Result:** Shoes thrown in the pandal. Police called. Congress Split.
*   **Consequence:** Government repressed Extremists. Tilak sent to **Mandalay Jail** (6 Years).

---

## BLOCK 5: THE MUSLIM LEAGUE (1906)
**The Counter-Move.**

### ☪️ FORMATION OF ML
*   **Date:** Dec 30, 1906.
*   **Place:** **Dhaka**.
*   **Founders:** **Nawab Salimullah** of Dhaka, Aga Khan, Mohsin-ul-Mulk.
*   **Objective:** To protect Muslim interests and support the British Government (Loyalism).
*   **Key Demand:** **Separate Electorates** (Simla Deputation 1906).

---

## BLOCK 6: MORLEY-MINTO REFORMS (1909)
**The Poison Pill.**

### 📜 INDIAN COUNCILS ACT, 1909
*   **Key Feature:** Introduced **Separate Electorates** for Muslims.
*   **Impact:** Legalized communalism. (You vote only if you are X religion, for a candidate of X religion).
*   **S.P. Sinha:** Became the first Indian in Viceroy's Executive Council (Law Member).

---

## BLOCK 7: ANNULMENT (1911)
**The Climax.**

### 👑 DELHI DURBAR (1911)
*   **Visitor:** King George V.
*   **Decisions:**
    1.  **Annulment of Partition of Bengal:** Reunited on linguistic lines (Bihar/Orissa separated).
    2.  **Capital Shift:** From Calcutta to **Delhi**.

---

## BLOCK 8: PYQ CORNER

> [!WARNING]
> **🔥 PYQ ALERT:**
> *   **Q:** President of Surat Session 1907? -> **Rashbehari Ghosh**.
> *   **Q:** Who led Swadeshi in Madras? -> **Chidambaram Pillai**.
> *   **Q:** Who painted Bharat Mata? -> **Abanindranath Tagore**.
> *   **Q:** When was the Muslim League founded? -> **1906**.
> *   **Q:** The first Indian in Viceroy's Executive Council? -> **Satyendra Prasanna Sinha**.
`;
