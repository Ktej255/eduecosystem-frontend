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

export const MODERN_CHAPTER_4_SUBTOPICS: Subtopic[] = [
    { id: 'later_mughals', name: 'The Later Mughals' },
    { id: 'decline', name: 'Causes of Decline' },
    { id: 'regional', name: 'Rise of Regional States' },
    { id: 'independent', name: 'Independent Kingdoms' },
    { id: 'socio_economic', name: 'Socio-Economic Conditions' },
    { id: 'art_culture', name: 'Art and Culture' }
];

export const MODERN_CHAPTER_4_MCQS: Question[] = [
    // Set 1: The Later Mughals & Decline
    {
        id: 1,
        question: "Who among the following Mughal Emperors was known by the title \"Shah-i-Bekhabar\" for his indifferent attitude towards administration?",
        options: ["Jahandar Shah", "Bahadur Shah I", "Muhammad Shah", "Shah Alam II"],
        correctAnswer: 1, // (b)
        explanation: "Bahadur Shah I (1707–12) was called Shah-i-Bekhabar by historian Khafi Khan due to his lavish grants and lack of control over administration.",
        subtopic: 'later_mughals',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "The evil practice of 'Izara' (revenue farming), which ruined the peasantry, was introduced/institutionalized during the reign of which Mughal ruler?",
        options: ["Aurangzeb", "Jahandar Shah", "Farrukhsiyar", "Muhammad Shah"],
        correctAnswer: 1, // (b)
        explanation: "Jahandar Shah (under the influence of Zulfikar Khan) promoted Izara (revenue farming), where revenue collection was auctioned to the highest bidder, leading to peasant oppression.",
        subtopic: 'later_mughals',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "Consider the following statements regarding the Sayyid Brothers (Abdulla Khan and Hussain Ali):\n1. They are known as the \"King Makers\" in Indian history.\n2. They followed a policy of religious intolerance and re-imposed Jaziya.\n3. They were killed/suppressed during the reign of Muhammad Shah.\n\nWhich of the statements given above is/are correct?",
        options: ["1 only", "1 and 2 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 2, // (c)
        explanation: "The Sayyid Brothers were religiously tolerant. They abolished Jaziya and the pilgrimage tax. They were indeed \"King Makers\" (Farrukhsiyar to Muhammad Shah).",
        subtopic: 'later_mughals',
        difficulty: 'Moderate'
    },
    {
        id: 4,
        question: "The Battle of Karnal (1739), which exposed the weakness of the Mughal Empire, was fought between:",
        options: ["Ahmed Shah Abdali and the Marathas", "Nadir Shah and Muhammad Shah", "Nadir Shah and Bajirao I", "Ahmed Shah Abdali and Alamgir II"],
        correctAnswer: 1, // (b)
        explanation: "Nadir Shah defeated Muhammad Shah at Karnal in 1739 and took away the Peacock Throne and Kohinoor.",
        subtopic: 'later_mughals',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "Arrange the following Later Mughal Emperors in chronological order:\n1. Farrukhsiyar\n2. Jahandar Shah\n3. Bahadur Shah I\n4. Muhammad Shah\n\nSelect the correct answer:",
        options: ["3-2-1-4", "3-1-2-4", "2-3-1-4", "1-2-3-4"],
        correctAnswer: 0, // (a)
        explanation: "Bahadur Shah I (1707–12) -> Jahandar Shah (1712–13) -> Farrukhsiyar (1713–19) -> Muhammad Shah (1719–48).",
        subtopic: 'later_mughals',
        difficulty: 'Moderate'
    },
    {
        id: 6,
        question: "Who was the Mughal Emperor during the Third Battle of Panipat (1761)?",
        options: ["Alamgir II", "Shah Alam II", "Ahmed Shah", "Akbar II"],
        correctAnswer: 1, // (b)
        explanation: "Shah Alam II (reign 1759–1806) was the Emperor during the 3rd Battle of Panipat (1761), though he was often in exile or under Maratha protection.",
        subtopic: 'later_mughals',
        difficulty: 'Moderate'
    },
    {
        id: 7,
        question: "Which Mughal Emperor gave the title of \"Raja\" to Rammohan Roy and sent him to England?",
        options: ["Shah Alam II", "Akbar II", "Bahadur Shah Zafar", "Muhammad Shah"],
        correctAnswer: 1, // (b)
        explanation: "Akbar II gave the title of \"Raja\" to Rammohan Roy.",
        subtopic: 'later_mughals',
        difficulty: 'Easy'
    },
    // Set 2: Rise of Regional States
    {
        id: 8,
        question: "The state of Hyderabad was founded in 1724 by Nizam-ul-Mulk (Asaf Jah). What was his actual name?",
        options: ["Qamar-ud-din Siddiqi", "Saadat Khan", "Murshid Quli Khan", "Zulfikar Khan"],
        correctAnswer: 0, // (a)
        explanation: "Nizam-ul-Mulk's personal name was Qamar-ud-din Siddiqi. He was given the title Asaf Jah later.",
        subtopic: 'regional',
        difficulty: 'Moderate'
    },
    {
        id: 9,
        question: "Who founded the independent state of Awadh in 1722?",
        options: ["Safdar Jung", "Shuja-ud-Daula", "Saadat Khan (Burhan-ul-Mulk)", "Asaf-ud-Daula"],
        correctAnswer: 2, // (c)
        explanation: "Saadat Khan (Burhan-ul-Mulk) founded Awadh. Safdar Jung was his successor.",
        subtopic: 'regional',
        difficulty: 'Easy'
    },
    {
        id: 10,
        question: "Murshid Quli Khan, the founder of the independent state of Bengal, transferred his capital from Dacca to:",
        options: ["Monghyr", "Murshidabad", "Calcutta", "Midnapore"],
        correctAnswer: 1, // (b)
        explanation: "Murshid Quli Khan shifted the capital to Murshidabad.",
        subtopic: 'regional',
        difficulty: 'Easy'
    },
    {
        id: 11,
        question: "Which of the following statements about the \"Successor States\" (Awadh, Bengal, Hyderabad) is correct?",
        options: ["They completely severed all ties with the Mughal Emperor.", "They stopped sending revenue to the central treasury immediately.", "They continued to recognize the Mughal Emperor as their nominal sovereign to maintain legitimacy.", "They adopted a new calendar and currency distinct from the Mughals."],
        correctAnswer: 2, // (c)
        explanation: "Successor states like Hyderabad and Bengal were legally independent but maintained nominal ties with the Mughal Emperor (read the Khutba in his name) to ensure legitimacy.",
        subtopic: 'regional',
        difficulty: 'Moderate'
    },
    {
        id: 12,
        question: "The city of Jaipur was founded and designed by Sawai Jai Singh. He is also famous for building astronomical observatories (Jantar Mantars) at:",
        options: ["Delhi, Jaipur, Ujjain, Varanasi, Mathura", "Delhi, Agra, Jaipur, Varanasi, Patna", "Jaipur, Ujjain, Indore, Pune, Delhi", "Delhi, Jaipur, Mysore, Bangalore, Chennai"],
        correctAnswer: 0, // (a)
        explanation: "Jai Singh built observatories at Delhi, Jaipur, Ujjain, Varanasi, and Mathura.",
        subtopic: 'regional',
        difficulty: 'Moderate'
    },
    // Set 3: Independent Kingdoms
    {
        id: 13,
        question: "Who is known as the \"Plato of the Jat tribe\" for his political sagacity and intellect?",
        options: ["Churaman", "Badan Singh", "Suraj Mal", "Gokula"],
        correctAnswer: 2, // (c)
        explanation: "Suraj Mal is called the Plato of the Jat tribe.",
        subtopic: 'independent',
        difficulty: 'Easy'
    },
    {
        id: 14,
        question: "The term \"Misls\" in the context of 18th-century Punjab referred to:",
        options: ["Religious taxes collected by the Gurus.", "Political confederacies of the Sikhs.", "The revenue records of the village.", "The cavalry units of Ranjit Singh."],
        correctAnswer: 1, // (b)
        explanation: "Misls were the 12 sovereign states/confederacies of the Sikh commonwealth.",
        subtopic: 'independent',
        difficulty: 'Easy'
    },
    {
        id: 15,
        question: "Raja Martanda Varma (1729–1758) is credited with modernizing which Indian state?",
        options: ["Mysore", "Travancore (Kerala)", "Calicut", "Cochin"],
        correctAnswer: 1, // (b)
        explanation: "Martanda Varma consolidated and modernized Travancore, defeating the Dutch at the Battle of Colachel (1741).",
        subtopic: 'independent',
        difficulty: 'Easy'
    },
    {
        id: 16,
        question: "The \"Treaty of Warna\" (1731) settled the dispute between which two Maratha factions?",
        options: ["The Peshwa and the Gaekwad.", "Shahu (Satara) and Sambhaji II (Kolhapur)", "The Holkars and the Scindias.", "Bajirao I and the Nizam."],
        correctAnswer: 1, // (b)
        explanation: "The Treaty of Warna (1731) resolved the succession dispute between Shahu (Satara branch) and Sambhaji II (Kolhapur branch).",
        subtopic: 'independent',
        difficulty: 'Moderate'
    },
    {
        id: 17,
        question: "Under which Peshwa did the Maratha power reach its zenith, extending from \"Attock to Cuttack\"?",
        options: ["Balaji Vishwanath", "Bajirao I", "Balaji Bajirao (Nana Saheb)", "Madhavrao"],
        correctAnswer: 2, // (c)
        explanation: "Under Balaji Bajirao (Nana Saheb), the Maratha empire reached its maximum territorial extent.",
        subtopic: 'independent',
        difficulty: 'Easy'
    },
    {
        id: 18,
        question: "The \"Chauth\" collected by the Marathas was:",
        options: ["A tax on their own subjects for protection.", "25% of the land revenue claimed from territories outside their direct rule to avoid Maratha raids.", "An additional 10% tax on top of the Sardeshmukhi.", "A religious tax on non-Hindus."],
        correctAnswer: 1, // (b)
        explanation: "Chauth was 25% of revenue paid to Marathas to avoid their raids. Sardeshmukhi was an additional 10% claim as the head Deshmukh.",
        subtopic: 'independent',
        difficulty: 'Easy'
    },
    {
        id: 19,
        question: "Who planted the \"Tree of Liberty\" at Seringapatam and became a member of the Jacobin Club?",
        options: ["Haidar Ali", "Tipu Sultan", "Nana Phadnavis", "Mahadji Scindia"],
        correctAnswer: 1, // (b)
        explanation: "Tipu Sultan planted the Tree of Liberty and joined the Jacobin Club.",
        subtopic: 'independent',
        difficulty: 'Easy'
    },
    {
        id: 20,
        question: "The Bangash Pathans established their independent principality in which region?",
        options: ["Rohilkhand", "Bundelkhand", "Farrukhabad", "Mewat"],
        correctAnswer: 2, // (c)
        explanation: "The Bangash Pathans ruled around Farrukhabad. The Rohillas ruled Rohilkhand.",
        subtopic: 'independent',
        difficulty: 'Moderate'
    },
    // Set 4: Socio-Economic Conditions
    {
        id: 21,
        question: "Which of the following statements correctly describes the state of Indian trade in the 18th century?\n1. India was a \"sink of precious metals\" due to a favorable balance of trade.\n2. India imported luxury goods like pearls, wool, and dates from the Persian Gulf.\n3. There was no export of textiles to Europe during this period.\n\nSelect the correct answer:",
        options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b)
        explanation: "Statement 3 is incorrect. India had a massive export of textiles (cotton, silk) to Europe, which is why the British banned Indian textiles later.",
        subtopic: 'socio_economic',
        difficulty: 'Moderate'
    },
    {
        id: 22,
        question: "The \"Dastak\" system, which became a bone of contention in Bengal, referred to:",
        options: ["A permit for duty-free trade.", "A land revenue settlement.", "A military rank.", "A gold coin minted by the British."],
        correctAnswer: 0, // (a)
        explanation: "Dastak was the trade permit/pass.",
        subtopic: 'socio_economic',
        difficulty: 'Easy'
    },
    {
        id: 23,
        question: "In the context of 18th-century education, the \"Maktabs\" and \"Madrasas\" were institutions for:",
        options: ["Primary and Higher learning for Muslims, respectively.", "Military training.", "Vocational training for artisans.", "Secular education for all."],
        correctAnswer: 0, // (a)
        explanation: "Maktabs (Primary) and Madrasas (Higher) were Muslim educational institutions. Tols and Pathshalas were Hindu ones.",
        subtopic: 'socio_economic',
        difficulty: 'Easy'
    },
    {
        id: 24,
        question: "Who among the following Urdu poets famously witnessed the devastation of Delhi during Nadir Shah's invasion and wrote, \"Delhi, which was a select city in the world... is now a deserted ruin\"?",
        options: ["Mirza Ghalib", "Mir Taqi Mir", "Nazir Akbarabadi", "Khwaja Mir Dard"],
        correctAnswer: 1, // (b)
        explanation: "Mir Taqi Mir is the famous poet who lamented the fall of Delhi.",
        subtopic: 'art_culture',
        difficulty: 'Moderate'
    },
    {
        id: 25,
        question: "The magnificent \"Bara Imambara\" at Lucknow was built by:",
        options: ["Safdar Jung", "Shuja-ud-Daula", "Asaf-ud-Daula", "Wajid Ali Shah"],
        correctAnswer: 2, // (c)
        explanation: "Asaf-ud-Daula built the Bara Imambara in 1784 as a famine relief project.",
        subtopic: 'art_culture',
        difficulty: 'Easy'
    },
    {
        id: 26,
        question: "Which of the following was NOT a characteristic of the 18th-century Indian society?",
        options: ["Strict observance of caste rules.", "Prevalence of slavery.", "High status of women with widespread female literacy.", "Use of magic and superstition in medicine."],
        correctAnswer: 2, // (c)
        explanation: "The status of women was generally low. Child marriage and Sati were prevalent; female literacy was negligible.",
        subtopic: 'socio_economic',
        difficulty: 'Easy'
    },
    // Set 5: Conceptual & Mixed
    {
        id: 27,
        question: "The \"Jagirdari Crisis\" refers to:",
        options: ["Shortage of jagirs (lands) to distribute among the swelling number of mansabdars.", "The rebellion of Jagirdars against the Emperor.", "The refusal of peasants to pay revenue.", "The conversion of Khalisa land into Jagir land."],
        correctAnswer: 0, // (a)
        explanation: "The Jagirdari Crisis was the mismatch between the available land (Paibaqi) and the increasing number of Mansabdars waiting for Jagirs.",
        subtopic: 'decline',
        difficulty: 'Moderate'
    },
    {
        id: 28,
        question: "\"Zij Muhammad Shahi\", a set of astronomical tables to help people make astronomical observations, was prepared by:",
        options: ["Feroz Shah Tughlaq", "Sawai Jai Singh", "Tipu Sultan", "Raja Rammohan Roy"],
        correctAnswer: 1, // (b)
        explanation: "Sawai Jai Singh prepared these tables.",
        subtopic: 'art_culture',
        difficulty: 'Moderate'
    },
    {
        id: 29,
        question: "The Rohillas, who established the state of Rohilkhand, were originally migrants from:",
        options: ["Turkey", "Iran (Persia)", "Afghanistan", "Central Asia (Uzbekistan)"],
        correctAnswer: 2, // (c)
        explanation: "Rohillas were Afghan immigrants.",
        subtopic: 'regional',
        difficulty: 'Easy'
    },
    {
        id: 30,
        question: "Who said, \"I can ruin their [British] resources by land but I cannot dry up the sea,\" acknowledging the naval superiority of the British?",
        options: ["Haidar Ali", "Tipu Sultan", "Shivaji", "Ranjit Singh"],
        correctAnswer: 0, // (a)
        explanation: "Haidar Ali famously realized that without a navy, he could not defeat the English decisively.",
        subtopic: 'independent',
        difficulty: 'Moderate'
    },
    {
        id: 31,
        question: "The \"Padmanabhapuram Palace,\" famous for its mural paintings and wood carvings, is associated with which state?",
        options: ["Mysore", "Travancore (Kerala)", "Hyderabad", "Tanjore"],
        correctAnswer: 1, // (b)
        explanation: "Padmanabhapuram Palace is a masterpiece of Travancore (Kerala) architecture.",
        subtopic: 'art_culture',
        difficulty: 'Moderate'
    },
    {
        id: 32,
        question: "In the 18th century, the \"Sanyasi Revolt\" and \"Fakir Rebellion\" occurred primarily in which region?",
        options: ["Punjab", "Bengal", "Maharashtra", "Awadh"],
        correctAnswer: 1, // (b)
        explanation: "These revolts occurred in Bengal (depicted in Anandamath).",
        subtopic: 'socio_economic',
        difficulty: 'Easy'
    },
    {
        id: 33,
        question: "Which of the following painters is associated with the \"Kangra School\" of painting that flourished in the 18th century?",
        options: ["Nainsukh", "Bishandas", "Mansur", "Basawan"],
        correctAnswer: 0, // (a)
        explanation: "Nainsukh is a celebrated painter of the Pahari/Kangra school.",
        subtopic: 'art_culture',
        difficulty: 'Moderate'
    },
    {
        id: 34,
        question: "The \"Kunwar Singh\" who led the revolt of 1857 in Bihar belonged to the royal house of:",
        options: ["Patna", "Arrah (Jagdishpur)", "Gaya", "Bettiah"],
        correctAnswer: 1, // (b)
        explanation: "Kunwar Singh was the Zamindar of Jagdishpur (Arrah).",
        subtopic: 'regional',
        difficulty: 'Easy'
    },
    {
        id: 35,
        question: "The \"Begums of Awadh\" were famously coerced into giving up their wealth by:",
        options: ["Robert Clive", "Warren Hastings", "Lord Wellesley", "Lord Dalhousie"],
        correctAnswer: 1, // (b)
        explanation: "Warren Hastings was impeached partly for his treatment of the Begums of Awadh (mother and grandmother of Asaf-ud-Daula).",
        subtopic: 'regional',
        difficulty: 'Easy'
    }
];

export const MODERN_CHAPTER_4_CONTENT = `
# BLOCK 1: THE LATER MUGHALS (The Decline)
## 🎭 THE LATER MUGHALS (1707 - 1857)

**The Great Mughals (Babur to Aurangzeb)** ended with Aurangzeb's death in 1707.
**The Later Mughals** were weak, puppet rulers.

**Key Emperors:**
*   **Bahadur Shah I (1707-12):** "Shah-i-Bekhabar" (Heedless King). Pacifist policy.
*   **Jahandar Shah (1712-13):** Introduced **Izara** (Revenue Farming). Puppet of Zulfikar Khan.
*   **Farrukhsiyar (1713-19):** Puppet of **Sayyid Brothers** (King Makers). Issued 1717 Farman. Killed by Sayyid Bros.
*   **Muhammad Shah 'Rangeela' (1719-48):** Sayyid Brothers killed. Battle of Karnal (1739) - **Nadir Shah** invaded, took Peacock Throne & Kohinoor.
*   **Shah Alam II (1759-1806):** Battle of Panipat (1761), Battle of Buxar (1764). Lived as pensioner of EIC.
*   **Bahadur Shah Zafar (1837-57):** Last Emperor. Deported to Rangoon after 1857 Revolt.

**Causes of Decline:**
*   Weak Successors.
*   Jagirdari Crisis (Too many mansabdars, too little land).
*   Foreign Invasions (Nadir Shah, Ahmed Shah Abdali).
*   Rise of Regional Powers.

# BLOCK 2: REGIONAL STATES (Successor, Independent, Rebel)
## 🦁 RISE OF REGIONAL STATES

**1. Successor States (Broke away but kept nominal tie):**
*   **Hyderabad (1724):** Nizam-ul-Mulk (Asaf Jah).
*   **Awadh (1722):** Saadat Khan (Burhan-ul-Mulk).
*   **Bengal (1717):** Murshid Quli Khan.

**2. Independent Kingdoms:**
*   **Mysore:** Haidar Ali (Usurped from Wodeyars).
*   **Travancore:** Martanda Varma.
*   **Rajputs:** Sawai Jai Singh (Jaipur - Built Jantar Mantar).

**3. Warrior/Rebel States:**
*   **Marathas:** Peshwas (Pune).
*   **Sikhs:** Misls (Ranjit Singh later).
*   **Jats:** Suraj Mal ("Plato of Jats").
*   **Rohillas & Bangash Pathans.**

> [!TIP]
> **🔥 PYQ ALERT:**
> *   **Q:** Who founded Hyderabad? -> **Nizam-ul-Mulk**.
> *   **Q:** Who invaded in 1739? -> **Nadir Shah**.
> *   **Q:** Who built Jantar Mantar? -> **Sawai Jai Singh**.

# BLOCK 3: THE MARATHAS (The New Contenders)
## 🚩 THE MARATHA CONFEDERACY

**The Peshwas (Prime Ministers turned Rulers):**
1.  **Balaji Vishwanath (1713-20):** Signed treaty with Sayyid Bros. Secured Chauth rights.
2.  **Bajirao I (1720-40):** The Fighter. "Let us strike at the trunk of the withering tree." Expanded Maratha power. (Mastri fame).
3.  **Balaji Bajirao (Nana Saheb) (1740-61):** Peak of Maratha Power (Attock to Cuttack).
    *   **Anti-Climax:** Third Battle of Panipat (1761). Marathas lost to Ahmed Shah Abdali.

**The Confederacy (5 Chiefs):**
*   **Peshwa** (Pune) - Head.
*   **Scindia** (Gwalior).
*   **Holkar** (Indore).
*   **Gaekwad** (Baroda).
*   **Bhonsle** (Nagpur).

**Administration Terms:**
*   **Chauth:** 1/4th revenue (Tax for protection).
*   **Sardeshmukhi:** Additional 10% (Head-man tax).

# BLOCK 4: SIKHS & JATS
## ⚔️ SIKHS & JATS

**The Sikhs:**
*   **Misls:** 12 Confederacies.
*   **Ranjit Singh (Sukerchakia Misl):** Uniting force (1790s onwards).
*   **Treaty of Amritsar (1809):** With British. Boundary set at Sutlej River.

**The Jats:**
*   **Churaman & Badan Singh.**
*   **Suraj Mal:** Greatest Jat ruler.

# BLOCK 5: SOCIO-ECONOMIC CONDITIONS
## 💰 ECONOMY & SOCIETY (18th Century)

**Economy:**
*   **Agriculture:** Ruined by constant wars & heavy taxes.
*   **Trade:** Still robust (Textiles, Spices). India was a "Sink of Precious Metals".
*   **Banking:** Jagat Seths (Bengal) had massive influence.

**Society:**
*   **Stagnant:** Caste system rigid.
*   **Women:** Sati, Child Marriage, Purdah prevalent.
*   **Education:** Traditional (Pathshalas/Madrasas). No science/tech focus.

**Culture:**
*   **Urdu Poetry:** Mir Taqi Mir, Mirza Ghalib.
*   **Architecture:** Bara Imambara (Lucknow), Pink City (Jaipur).
*   **Painting:** Kangra/Rajput Schools.

> [!NOTE]
> **📌 EXAMINER'S LENS (Analysis):**
> 18th Century was a **"Dark Age"** politically (chaos/wars) but economically/culturally it wasn't a total collapse. It was a period of transition.
`;

