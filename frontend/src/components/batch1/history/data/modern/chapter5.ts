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

export const MODERN_CHAPTER_5_SUBTOPICS: Subtopic[] = [
    { id: 'bengal', name: 'Conquest of Bengal' },
    { id: 'mysore', name: 'Anglo-Mysore Wars' },
    { id: 'maratha', name: 'Anglo-Maratha Struggle' },
    { id: 'sindh_punjab', name: 'Conquest of Sindh & Punjab' },
    { id: 'policies', name: 'Administrative Policies' },
    { id: 'neighbours', name: 'Relations with Neighbours' }
];

export const MODERN_CHAPTER_5_MCQS: Question[] = [
    // Set 1: Bengal
    {
        id: 1,
        question: "Which of the following was the immediate cause of the conflict between Siraj-ud-Daulah and the English East India Company leading to the Battle of Plassey?",
        options: ["The refusal of the Company to pay the annual tribute.", "The Company's support to Shaukat Jang (a rival of Siraj).", "The misuse of trade privileges (Dastaks) and the fortification of Calcutta without permission.", "The asylum given by the Company to Krishna Das, son of Rajballabh."],
        correctAnswer: 2, // (c)
        explanation: "The immediate causes included the misuse of Dastaks (trade passes) by private traders and the fortification of Calcutta without the Nawab's permission.",
        subtopic: 'bengal',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Consider the following statements regarding the \"Treaty of Allahabad\" (1765):\n1. It was signed between Robert Clive, Shuja-ud-Daulah (Awadh), and Shah Alam II (Mughal Emperor).\n2. Shah Alam II granted the Diwani of Bengal, Bihar, and Odisha to the Company in perpetuity.\n3. Awadh was annexed by the Company immediately after this treaty.\n\nWhich of the statements given above is/are correct?",
        options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b)
        explanation: "Awadh was not annexed; it was restored to Shuja-ud-Daulah in return for Allahabad and Kara (given to Shah Alam) and a war indemnity.",
        subtopic: 'bengal',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "The \"Dual System of Government\" in Bengal (1765–1772) meant that:",
        options: ["The Company controlled both the Diwani (revenue) and Nizamat (police/judicial) functions directly.", "The Company exercised Diwani rights effectively, while the Nizamat was left to the Nawab, but practically controlled by the Company.", "The administration was shared equally between the Hindu Zamindars and Muslim Nobles.", "The British Parliament and the Company Directors jointly ruled Bengal."],
        correctAnswer: 1, // (b)
        explanation: "Diwani (revenue) was with the Company. Nizamat (law and order) was with the Nawab, but the Company appointed the Deputy Subahdar, effectively controlling both.",
        subtopic: 'bengal',
        difficulty: 'Moderate'
    },
    {
        id: 4,
        question: "The \"Treaty of 1760\" was signed between the English and Mir Qasim. Under this treaty, Mir Qasim agreed to cede which of the following districts to the Company?",
        options: ["Dacca, Chittagong, and Murshidabad", "Burdwan, Midnapore, and Chittagong", "Hooghly, Howrah, and 24 Parganas", "Sylhet, Patna, and Monghyr"],
        correctAnswer: 1, // (b)
        explanation: "Mir Qasim ceded Burdwan, Midnapore, and Chittagong for the Company's military support.",
        subtopic: 'bengal',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "Who among the following led the British forces in the Battle of Buxar (1764)?",
        options: ["Robert Clive", "Hector Munro", "Eyre Coote", "Watson"],
        correctAnswer: 1, // (b)
        explanation: "Major Hector Munro led the British forces to a decisive victory at Buxar.",
        subtopic: 'bengal',
        difficulty: 'Easy'
    },
    // Set 2: Anglo-Mysore Wars
    {
        id: 6,
        question: "Which treaty concluded the First Anglo-Mysore War (1767–69), where Haidar Ali virtually dictated terms to the British?",
        options: ["Treaty of Madras", "Treaty of Mangalore", "Treaty of Seringapatam", "Treaty of Wandiwash"],
        correctAnswer: 0, // (a)
        explanation: "The Treaty of Madras (1769) ended the first war. It was a defensive alliance.",
        subtopic: 'mysore',
        difficulty: 'Easy'
    },
    {
        id: 7,
        question: "Consider the following statements regarding the Second Anglo-Mysore War:\n1. The immediate cause was the British capture of Mahe, a French settlement under Haidar Ali's protection.\n2. Haidar Ali died during the course of this war.\n3. It ended with the Treaty of Mangalore, signed by Tipu Sultan.\n\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswer: 3, // (d)
        explanation: "All statements are correct. Haidar Ali died of cancer in 1782; the war continued and ended with the Treaty of Mangalore (1784).",
        subtopic: 'mysore',
        difficulty: 'Moderate'
    },
    {
        id: 8,
        question: "Under the \"Treaty of Seringapatam\" (1792), Tipu Sultan was forced to:\n1. Surrender half of his kingdom to the allies (English, Nizam, Marathas).\n2. Pay a war indemnity of 3 Crore Rupees.\n3. Send two of his sons as hostages to the British camp.\n\nSelect the correct answer using the code given below:",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d)
        explanation: "Tipu had to surrender half his territory, pay 3.3 crore rupees, and give two sons as hostages.",
        subtopic: 'mysore',
        difficulty: 'Moderate'
    },
    {
        id: 9,
        question: "Who was the Governor-General during the Fourth Anglo-Mysore War (1799) which resulted in the death of Tipu Sultan?",
        options: ["Lord Cornwallis", "Sir John Shore", "Lord Wellesley", "Lord Hastings"],
        correctAnswer: 2, // (c)
        explanation: "Lord Wellesley (1798–1805) was the Governor-General who decided to eliminate Tipu.",
        subtopic: 'mysore',
        difficulty: 'Easy'
    },
    {
        id: 10,
        question: "The Wodeyar dynasty was restored to the throne of Mysore after the fall of Tipu Sultan. Who was the minor ruler placed on the throne?",
        options: ["Krishnaraja III", "Chikka Krishnaraja II", "Dodda Krishnaraja", "Nanjaraja"],
        correctAnswer: 0, // (a)
        explanation: "Krishnaraja III (a child from the old Wodeyar dynasty) was placed on the throne.",
        subtopic: 'mysore',
        difficulty: 'Moderate'
    },
    // Set 3: Anglo-Maratha Struggle
    {
        id: 11,
        question: "The \"Treaty of Surat\" (1775), which triggered the First Anglo-Maratha War, was signed by the British with which Maratha leader?",
        options: ["Nana Phadnavis", "Raghunathrao (Raghoba)", "Madhavrao II", "Mahadji Scindia"],
        correctAnswer: 1, // (b)
        explanation: "Raghunathrao signed the Treaty of Surat to get British help to become Peshwa, starting the war.",
        subtopic: 'maratha',
        difficulty: 'Moderate'
    },
    {
        id: 12,
        question: "The \"Treaty of Salbai\" (1782) is significant because:",
        options: ["It established British supremacy over the Marathas decisively.", "It gave the British 20 years of peace with the Marathas, allowing them to focus on Mysore.", "It resulted in the annexation of Poona.", "It was signed between Bajirao II and Lord Wellesley."],
        correctAnswer: 1, // (b)
        explanation: "The Treaty of Salbai (1782) ended the First Anglo-Maratha War and secured peace for 20 years, allowing the British to defeat Mysore.",
        subtopic: 'maratha',
        difficulty: 'Moderate'
    },
    {
        id: 13,
        question: "Which of the following events is often described as the \"immediate cause\" of the Second Anglo-Maratha War?",
        options: ["The death of Nana Phadnavis.", "The signing of the Treaty of Bassein (1802) by Peshwa Bajirao II.", "The invasion of Indore by the British.", "The Holkar's attack on Poona."],
        correctAnswer: 1, // (b)
        explanation: "The Treaty of Bassein (1802), a subsidiary alliance signed by the Peshwa, was accepted by other Maratha chiefs as a surrender of national honor.",
        subtopic: 'maratha',
        difficulty: 'Easy'
    },
    {
        id: 14,
        question: "Match the following treaties with the Maratha Chiefs who signed them (Second Anglo-Maratha War):\nA. Treaty of Deogaon -> 1. Bhonsle\nB. Treaty of Surji-Anjangaon -> 2. Scindia\nC. Treaty of Rajghat -> 3. Holkar\n\nSelect the correct answer:",
        options: ["A-1, B-2, C-3", "A-2, B-1, C-3", "A-1, B-3, C-2", "A-3, B-2, C-1"],
        correctAnswer: 0, // (a)
        explanation: "Bhonsle (Deogaon), Scindia (Surji-Anjangaon), Holkar (Rajghat).",
        subtopic: 'maratha',
        difficulty: 'Moderate'
    },
    {
        id: 15,
        question: "The \"Pindaris\", whose suppression led to the Third Anglo-Maratha War, were essentially:",
        options: ["A religious cult in Central India.", "Irregular horsemen and mercenaries attached to the Maratha armies.", "The personal bodyguards of the Peshwa.", "Afghan invaders settled in Malwa."],
        correctAnswer: 1, // (b)
        explanation: "Pindaris were irregular horsemen/plunderers associated with Maratha armies. Lord Hastings invaded Central India to suppress them.",
        subtopic: 'maratha',
        difficulty: 'Easy'
    },
    // Set 4: Conquest of Sindh & Punjab
    {
        id: 16,
        question: "Who among the following British Generals sent the famous one-word message \"Peccavi\" (I have sinned/Sindh) after conquering Sindh in 1843?",
        options: ["Charles Napier", "Outram", "Henry Lawrence", "Gough"],
        correctAnswer: 0, // (a)
        explanation: "Charles Napier. \"Peccavi\" is Latin for \"I have sinned\" (a pun on \"I have Sindh\").",
        subtopic: 'sindh_punjab',
        difficulty: 'Easy'
    },
    {
        id: 17,
        question: "The \"Treaty of Amritsar\" (1809) between Ranjit Singh and the British:",
        options: ["Allowed Ranjit Singh to expand towards the east of Sutlej.", "Fixed the River Sutlej as the boundary between the two powers.", "Was signed after Ranjit Singh was defeated in battle.", "Allowed the British to station a Resident at Lahore."],
        correctAnswer: 1, // (b)
        explanation: "The treaty fixed the Sutlej River as the boundary; Ranjit Singh could not expand east of it.",
        subtopic: 'sindh_punjab',
        difficulty: 'Moderate'
    },
    {
        id: 18,
        question: "The \"Tripartite Treaty\" of 1838 was signed between:",
        options: ["British, Ranjit Singh, and Shah Shuja.", "British, Ranjit Singh, and Dost Muhammad.", "British, Sikhs, and Marathas.", "British, Nizam, and Mysore."],
        correctAnswer: 0, // (a)
        explanation: "It was an alliance to replace Dost Muhammad with Shah Shuja on the throne of Kabul (prelude to 1st Afghan War).",
        subtopic: 'sindh_punjab',
        difficulty: 'Moderate'
    },
    {
        id: 19,
        question: "Which of the following battles was NOT part of the Anglo-Sikh Wars?",
        options: ["Battle of Mudki", "Battle of Sobraon", "Battle of Chillianwala", "Battle of Talikota"],
        correctAnswer: 3, // (d)
        explanation: "Battle of Talikota (1565) was the defeat of Vijayanagara. Mudki, Sobraon, and Chillianwala are Sikh War battles.",
        subtopic: 'sindh_punjab',
        difficulty: 'Easy'
    },
    {
        id: 20,
        question: "The state of Punjab was formally annexed to the British Empire in 1849 under the Governor-Generalship of:",
        options: ["Lord Hardinge", "Lord Dalhousie", "Lord Ellenborough", "Lord Canning"],
        correctAnswer: 1, // (b)
        explanation: "Lord Dalhousie annexed Punjab after the Second Anglo-Sikh War.",
        subtopic: 'sindh_punjab',
        difficulty: 'Easy'
    },
    // Set 5: Administrative Policies
    {
        id: 21,
        question: "The \"Policy of Ring Fence\" is primarily associated with:",
        options: ["Robert Clive", "Warren Hastings", "Lord Wellesley", "Lord Dalhousie"],
        correctAnswer: 1, // (b)
        explanation: "Warren Hastings followed the \"Ring Fence\" policy (defending neighbors to defend own frontiers).",
        subtopic: 'policies',
        difficulty: 'Moderate'
    },
    {
        id: 22,
        question: "Which of the following states was the first to enter into the \"Subsidiary Alliance\" system of Lord Wellesley in 1798?",
        options: ["Mysore", "Awadh", "Hyderabad", "Tanjore"],
        correctAnswer: 2, // (c)
        explanation: "The Nizam of Hyderabad (1798) was the first to sign the Subsidiary Alliance.",
        subtopic: 'policies',
        difficulty: 'Easy'
    },
    {
        id: 23,
        question: "Under the Subsidiary Alliance system, the Indian ruler had to:\n1. Maintain a British contingent at his own expense.\n2. Expel all other Europeans from his service.\n3. Consult the British Resident before negotiating with any other Indian state.\n\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d)
        explanation: "All three conditions were core to the Subsidiary Alliance.",
        subtopic: 'policies',
        difficulty: 'Moderate'
    },
    {
        id: 24,
        question: "Arrange the following states in the chronological order of their annexation under the \"Doctrine of Lapse\":\n1. Satara\n2. Jhansi\n3. Udaipur\n4. Sambalpur\n\nSelect the correct answer:",
        options: ["1-4-3-2", "1-3-4-2", "4-1-2-3", "1-2-3-4"],
        correctAnswer: 0, // (a)
        explanation: "Satara (1848), Sambalpur (1849), Udaipur (1852), Jhansi (1853), Nagpur (1854).",
        subtopic: 'policies',
        difficulty: 'Hard'
    },
    {
        id: 25,
        question: "The Kingdom of Awadh was annexed in 1856 not under the Doctrine of Lapse, but on the grounds of:",
        options: ["Failure to pay subsidiary dues.", "Plotting with the Russians.", "Misgovernance (Maladministration).", "Lack of a natural heir."],
        correctAnswer: 2, // (c)
        explanation: "Awadh was annexed for \"Misgovernance\" (Report by Outram).",
        subtopic: 'policies',
        difficulty: 'Easy'
    },
    // Set 6: Relations with Neighbours
    {
        id: 26,
        question: "The \"Treaty of Sagauli\" (1816) defined the relations of the British with:",
        options: ["Bhutan", "Nepal", "Burma", "Tibet"],
        correctAnswer: 1, // (b)
        explanation: "Treaty of Sagauli ended the Anglo-Nepalese War.",
        subtopic: 'neighbours',
        difficulty: 'Easy'
    },
    {
        id: 27,
        question: "The \"Treaty of Yandabo\" (1826) marked the end of:",
        options: ["First Anglo-Afghan War", "First Anglo-Burmese War", "Second Anglo-Sikh War", "Anglo-Nepalese War"],
        correctAnswer: 1, // (b)
        explanation: "Treaty of Yandabo ended the First Anglo-Burmese War.",
        subtopic: 'neighbours',
        difficulty: 'Moderate'
    },
    {
        id: 28,
        question: "The policy of \"Masterly Inactivity\" regarding Afghanistan is associated with:",
        options: ["Lord Lytton", "Lord Auckland", "John Lawrence", "Lord Curzon"],
        correctAnswer: 2, // (c)
        explanation: "John Lawrence (1864–69) followed the policy of non-intervention (Masterly Inactivity) in Afghan affairs.",
        subtopic: 'neighbours',
        difficulty: 'Moderate'
    },
    {
        id: 29,
        question: "Who among the following was responsible for the \"Younghusband Expedition\" to Tibet in 1904?",
        options: ["Lord Ripon", "Lord Dufferin", "Lord Curzon", "Lord Minto"],
        correctAnswer: 2, // (c)
        explanation: "Lord Curzon sent the Younghusband expedition to Tibet to check Russian influence.",
        subtopic: 'neighbours',
        difficulty: 'Moderate'
    },
    {
        id: 30,
        question: "The \"Durand Line\", demarcating the boundary between India (now Pakistan) and Afghanistan, was drawn up during the viceroyalty of:",
        options: ["Lord Lansdowne", "Lord Elgin II", "Lord Dufferin", "Lord Lytton"],
        correctAnswer: 0, // (a)
        explanation: "Sir Mortimer Durand drew the line during Lord Lansdowne's tenure (1893).",
        subtopic: 'neighbours',
        difficulty: 'Moderate'
    },
    // Set 7: Integrated & Conceptual
    {
        id: 31,
        question: "Which Governor-General is credited with the statement, \"The cherry will drop into our mouth one day,\" referring to the annexation of Awadh?",
        options: ["Lord Wellesley", "Lord William Bentinck", "Lord Dalhousie", "Lord Hastings"],
        correctAnswer: 2, // (c)
        explanation: "Lord Dalhousie described Awadh as a \"cherry that will drop into our mouth one day.\"",
        subtopic: 'policies',
        difficulty: 'Easy'
    },
    {
        id: 32,
        question: "The \"Treaty of Eternal Friendship\" was signed by Ranjit Singh with:",
        options: ["The French", "The British (Metcalfe)", "The Afghans", "The Gurkhas"],
        correctAnswer: 1, // (b)
        explanation: "Also known as the Treaty of Amritsar (1809), signed by Charles Metcalfe on behalf of the British.",
        subtopic: 'sindh_punjab',
        difficulty: 'Moderate'
    },
    {
        id: 33,
        question: "Which of the following pairs is INCORRECTLY matched?",
        options: ["Battle of Wandiwash — Defeat of French", "Battle of Bedara — Defeat of Dutch", "Battle of Kharda — Defeat of Nizam by Marathas", "Battle of Porto Novo — Defeat of Tipu Sultan by Eyre Coote"],
        correctAnswer: 3, // (d)
        explanation: "Battle of Porto Novo (1781) was a defeat of Haidar Ali (not Tipu) by Sir Eyre Coote.",
        subtopic: 'mysore',
        difficulty: 'Moderate'
    },
    {
        id: 34,
        question: "The \"General Service Enlistment Act\" of 1856, which required sepoys to serve overseas if required, was passed by:",
        options: ["Lord Dalhousie", "Lord Canning", "Lord Hardinge", "Lord Ellenborough"],
        correctAnswer: 1, // (b)
        explanation: "Lord Canning passed this Act, which became a cause of discontent for the 1857 Revolt.",
        subtopic: 'policies',
        difficulty: 'Moderate'
    },
    {
        id: 35,
        question: "\"We have no right to seize Sindh, yet we shall do so, and a very advantageous, useful, humane piece of rascality it will be.\" Who made this statement?",
        options: ["Lord Auckland", "Charles Napier", "Lord Ellenborough", "Alexander Burnes"],
        correctAnswer: 1, // (b)
        explanation: "Charles Napier made this candid confession about the aggression in Sindh.",
        subtopic: 'sindh_punjab',
        difficulty: 'Moderate'
    },
    {
        id: 36,
        question: "The 'Treaty of Gandamak' (1879), which required the Afghan Amir to cede various districts and accept a British Resident at Kabul, was signed during the tenure of:",
        options: ["Lord Mayo", "Lord Northbrook", "Lord Lytton", "Lord Ripon"],
        correctAnswer: 2, // (c)
        explanation: "The Treaty of Gandamak was signed during the Second Anglo-Afghan War under Lord Lytton's forward policy.",
        subtopic: 'neighbours',
        difficulty: 'Moderate'
    }
];
