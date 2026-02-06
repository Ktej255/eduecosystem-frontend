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

export const MODERN_CHAPTER_11_SUBTOPICS: Subtopic[] = [
    { id: 'foundation_inc', name: 'Foundation & Safety Valve' },
    { id: 'moderate_ideology', name: 'Moderate Ideology & Methods' },
    { id: 'economic_critique', name: 'Economic Critique (Core Contribution)' },
    { id: 'constitutional_reforms', name: 'Constitutional Reforms (1892)' },
    { id: 'official_attitude', name: 'Official Attitude & Quotes' },
    { id: 'chronology_sessions', name: 'Chronology & Sessions' },
    { id: 'conceptual', name: 'Conceptual & Statement Analysis' }
];

export const MODERN_CHAPTER_11_MCQS: Question[] = [
    // Set 1: Foundation
    {
        id: 1,
        question: "The first session of the Indian National Congress (1885) was originally scheduled to be held at Poona but was shifted to Bombay. What was the reason for this shift?",
        options: ["Refusal of the Poona Sarvajanik Sabha to host it.", "Outbreak of a cholera epidemic in Poona.", "The Governor of Bombay refused permission for a meeting in Poona.", "Bombay was considered more cosmopolitan."],
        correctAnswer: 1, // (b)
        explanation: "A cholera outbreak in Poona forced the shift to Bombay (Gokuldas Tejpal Sanskrit College).",
        subtopic: 'foundation_inc',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Who among the following used the \"Safety Valve Theory\" to attack the Congress, arguing that it was a creation of the British Viceroy to release legitimate Indian discontent harmlessly?",
        options: ["Gopal Krishna Gokhale", "Lala Lajpat Rai", "Dadabhai Naoroji", "Syed Ahmed Khan"],
        correctAnswer: 1, // (b)
        explanation: "Lala Lajpat Rai used the \"Safety Valve\" theory (in Young India, 1916) to argue Hume created INC to save the British Empire.",
        subtopic: 'foundation_inc',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "In response to the Safety Valve theory, the \"Lightning Conductor Theory\" was proposed. It argued that Indian leaders used A.O. Hume as a catalyst to bring together Indians under a British umbrella to avoid suppression. Who proposed this view?",
        options: ["B.G. Tilak", "G.K. Gokhale", "Bipin Chandra Pal", "Jawaharlal Nehru"],
        correctAnswer: 1, // (b)
        explanation: "Gokhale argued that if an Indian had started such a movement, the government would have crushed it instantly. They needed a British \"Lightning Conductor\" (Hume).",
        subtopic: 'foundation_inc',
        difficulty: 'Moderate'
    },
    {
        id: 4,
        question: "Consider the following statements regarding the first session of the INC:\n1. It was presided over by W.C. Bonnerjee.\n2. It was attended by 72 delegates from all over India.\n3. Surendranath Banerjea, a prominent leader, was absent from this session.\n\nWhich of the statements given above is/are correct?",
        options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d)
        explanation: "All statements are correct. S.N. Banerjea missed it due to his own National Conference in Calcutta.",
        subtopic: 'foundation_inc',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "The resolution to \"boycott foreign goods\" was passed in the very first session of the Congress.\nTrue or False?",
        options: ["True", "False"],
        correctAnswer: 1, // (b)
        explanation: "False. The first session was very loyalist; it demanded administrative reforms (ICS exam, council expansion). Swadeshi/Boycott came in 1905.",
        subtopic: 'foundation_inc',
        difficulty: 'Easy'
    },
    // Set 2: Moderate Ideology
    {
        id: 6,
        question: "Which of the following statements best describes the \"Moderate\" political methodology?",
        options: ["Passive Resistance and Swadeshi.", "Constitutional agitation within the confines of the law.", "Mass mobilization of peasants and workers.", "Secret revolutionary activities."],
        correctAnswer: 1, // (b)
        explanation: "Constitutional agitation (petitions, meetings, resolutions) was the hallmark.",
        subtopic: 'moderate_ideology',
        difficulty: 'Easy'
    },
    {
        id: 7,
        question: "The Moderates believed that the British rule in India was:",
        options: ["An unmitigated evil that must be ended immediately.", "Providential and essentially just, but needed to be made aware of Indian grievances.", "A temporary military occupation.", "A religious crusade against Indian culture."],
        correctAnswer: 1, // (b)
        explanation: "They believed British rule was providential (destined to modernize India) but needed feedback.",
        subtopic: 'moderate_ideology',
        difficulty: 'Easy'
    },
    {
        id: 8,
        question: "The \"British Committee of the INC\" was established in London in 1889 to influence British public opinion. It started a journal titled:",
        options: ["The Indian Sociologist", "India", "The Asiatic Mirror", "Commonweal"],
        correctAnswer: 1, // (b)
        explanation: "The journal was titled India.",
        subtopic: 'moderate_ideology',
        difficulty: 'Moderate'
    },
    {
        id: 9,
        question: "Who famously said, \"We do not ask for favors, we only want justice,\" and \"Swaraj is my birthright and I shall have it\" (marking the transition from Moderate to Extremist thought)?",
        options: ["Dadabhai Naoroji", "Bal Gangadhar Tilak", "Lala Lajpat Rai", "Bipin Chandra Pal"],
        correctAnswer: 1, // (b)
        explanation: "Tilak (Extremist) made this famous statement, contrasting with the Moderates' \"mendicancy\".",
        subtopic: 'moderate_ideology',
        difficulty: 'Easy'
    },
    {
        id: 10,
        question: "The Moderates demanded the \"Indianization of Services\" primarily on the grounds that:",
        options: ["Indians were racially superior.", "It would reduce the drain of wealth (as salaries would be spent in India) and make administration more responsive.", "The British officers were incompetent.", "It was mandated by the Queen's Proclamation."],
        correctAnswer: 1, // (b)
        explanation: "The economic argument (checking the drain of wealth) was the primary justification used by Moderates.",
        subtopic: 'moderate_ideology',
        difficulty: 'Moderate'
    },
    // Set 3: Economic Critique
    {
        id: 11,
        question: "The \"Drain Theory\", which argued that a significant portion of India's national product was being transferred to Britain without any return, was scientifically propounded by:",
        options: ["Dadabhai Naoroji in Poverty and Un-British Rule in India.", "R.C. Dutt in The Economic History of India.", "M.G. Ranade in Essays on Indian Economics.", "All of the above contributed to the economic critique."],
        correctAnswer: 3, // (d)
        explanation: "All three contributed. Naoroji is the father of the theory, Dutt provided the historical analysis, Ranade focused on industrialization.",
        subtopic: 'economic_critique',
        difficulty: 'Easy'
    },
    {
        id: 12,
        question: "The \"Welby Commission\" (1895) was appointed by the British Parliament to enquire into:",
        options: ["The causes of the 1857 Revolt.", "Indian Expenditure (financial management).", "The feasibility of the partition of Bengal.", "Educational reforms."],
        correctAnswer: 1, // (b)
        explanation: "Welby Commission on Indian Expenditure. Naoroji was a member and testified before it.",
        subtopic: 'economic_critique',
        difficulty: 'Moderate'
    },
    {
        id: 13,
        question: "Who was the first Indian to be a member of the British House of Commons (Liberal Party ticket), using the platform to voice Indian grievances?",
        options: ["W.C. Bonnerjee", "Dadabhai Naoroji", "G.K. Gokhale", "Shyamji Krishna Varma"],
        correctAnswer: 1, // (b)
        explanation: "Dadabhai Naoroji (elected in 1892 from Finsbury Central).",
        subtopic: 'economic_critique',
        difficulty: 'Easy'
    },
    {
        id: 14,
        question: "The Moderates popularized the concept that British Imperialism was:",
        options: ["Political in nature but economically beneficial.", "Economically exploitative and the root cause of India's poverty.", "Socially reformative and necessary.", "Culturally superior."],
        correctAnswer: 1, // (b)
        explanation: "They successfully destroyed the moral foundation of British rule by proving it was exploitative.",
        subtopic: 'economic_critique',
        difficulty: 'Moderate'
    },
    // Set 4: Constitutional Reforms
    {
        id: 15,
        question: "The \"Indian Councils Act of 1892\" was a direct result of Moderate pressure. Which of the following was a feature of this Act?",
        options: ["It introduced direct elections for the first time.", "It allowed members to discuss the budget and ask questions to the executive.", "It gave the members the right to move motions to vote on the budget.", "It provided for a majority of non-official members in the Imperial Legislative Council."],
        correctAnswer: 1, // (b)
        explanation: "It allowed discussion of the Budget and asking questions (but no supplementary questions).",
        subtopic: 'constitutional_reforms',
        difficulty: 'Moderate'
    },
    {
        id: 16,
        question: "What was the limitation of the Indian Councils Act of 1892 regarding the Budget?",
        options: ["The Budget could not be discussed at all.", "The Budget could be discussed, but no vote could be taken on it.", "The Budget could be voted upon item by item.", "Indians were barred from attending the budget session."],
        correctAnswer: 1, // (b)
        explanation: "They could discuss it but could not vote on it.",
        subtopic: 'constitutional_reforms',
        difficulty: 'Easy'
    },
    {
        id: 17,
        question: "The term \"Election\" was:",
        options: ["Explicitly used in the Act of 1892.", "Avoided in the Act; instead, the term \"Nomination on the recommendation of...\" was used.", "Introduced only for the Viceroy's Executive Council.", "Used only for Municipalities."],
        correctAnswer: 1, // (b)
        explanation: "The word \"Election\" was avoided. It was \"Nomination on recommendation of certain bodies\" (indirect election).",
        subtopic: 'constitutional_reforms',
        difficulty: 'Moderate'
    },
    // Set 5: Official Attitude
    {
        id: 18,
        question: "Who described the Congress as a \"Microscopic Minority\"?",
        options: ["Lord Curzon", "Lord Dufferin", "Lord Lytton", "Lord Minto"],
        correctAnswer: 1, // (b)
        explanation: "Dufferin (1888) ridiculed it as a \"microscopic minority\".",
        subtopic: 'official_attitude',
        difficulty: 'Easy'
    },
    {
        id: 19,
        question: "\"The Congress is tottering to its fall, and one of my great ambitions while in India is to assist it to a peaceful demise.\" This infamous statement was made by:",
        options: ["Lord Curzon", "Lord Elgin II", "Lord Dufferin", "Winston Churchill"],
        correctAnswer: 0, // (a)
        explanation: "Lord Curzon (1900) wrote this in a letter to the Secretary of State.",
        subtopic: 'official_attitude',
        difficulty: 'Easy'
    },
    {
        id: 20,
        question: "In 1887, after the third session (Madras), the government stance changed. Which leader was attacked by Dufferin in a public speech?",
        options: ["Dadabhai Naoroji", "A.O. Hume", "W.C. Bonnerjee", "Badruddin Tyabji"],
        correctAnswer: 1, // (b)
        explanation: "Hume was attacked by Dufferin as the Congress became more critical.",
        subtopic: 'official_attitude',
        difficulty: 'Moderate'
    },
    {
        id: 21,
        question: "The government issued a circular in 1890 forbidding:",
        options: ["The publication of Congress journals.", "Government servants from attending Congress meetings.", "Lawyers from joining the Congress.", "Students from singing Vande Mataram."],
        correctAnswer: 1, // (b)
        explanation: "Government servants were banned from attending Congress sessions.",
        subtopic: 'official_attitude',
        difficulty: 'Easy'
    },
    // Set 6: Chronology
    {
        id: 22,
        question: "Match the Congress Session with its President:\nA. 1885 Bombay -> 1. George Yule (First Englishman)\nB. 1886 Calcutta -> 2. Badruddin Tyabji (First Muslim)\nC. 1887 Madras -> 3. Dadabhai Naoroji\nD. 1888 Allahabad -> 4. W.C. Bonnerjee\n\nSelect the correct answer:",
        options: ["A-4, B-3, C-2, D-1", "A-4, B-2, C-3, D-1", "A-1, B-2, C-3, D-4", "A-3, B-4, C-1, D-2"],
        correctAnswer: 0, // (a)
        explanation: "1885 (Bonnerjee), 1886 (Naoroji - Parsi), 1887 (Tyabji - Muslim), 1888 (Yule - British).",
        subtopic: 'chronology_sessions',
        difficulty: 'Easy'
    },
    {
        id: 23,
        question: "Who was the first woman to address the Congress session (1890), symbolizing the rising status of women?",
        options: ["Sarojini Naidu", "Kadambini Ganguly", "Annie Besant", "Pandita Ramabai"],
        correctAnswer: 1, // (b)
        explanation: "Kadambini Ganguly (first female graduate of Calcutta Univ) addressed the session.",
        subtopic: 'chronology_sessions',
        difficulty: 'Moderate'
    },
    {
        id: 24,
        question: "In which session did the Congress first demand \"Swaraj\" (Self-Government) from the platform?",
        options: ["1905 Banaras", "1906 Calcutta", "1907 Surat", "1916 Lucknow"],
        correctAnswer: 1, // (b)
        explanation: "1906 Calcutta session (Presided by Naoroji) adopted the goal of \"Swaraj like the UK or colonies\".",
        subtopic: 'chronology_sessions',
        difficulty: 'Easy'
    },
    // Set 7: Conceptual
    {
        id: 25,
        question: "\"Three Days' Tamasha\" was a critique of the Congress sessions leveled by:",
        options: ["The British Government", "Ashwini Kumar Dutt (Extremist leader)", "Gopal Krishna Gokhale", "A.O. Hume"],
        correctAnswer: 1, // (b)
        explanation: "Ashwini Kumar Dutt dismissed the annual 3-day sessions as a \"Tamasha\" (Show).",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 26,
        question: "Why did the Moderates fail to create a mass movement?",
        options: ["They feared the masses were backward and would lead to chaos.", "They believed the British would leave voluntarily.", "They lacked funds.", "The British banned mass gatherings."],
        correctAnswer: 0, // (a)
        explanation: "They believed the Indian society was full of divisions and the masses were not yet ready for politics.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 27,
        question: "The Moderates often quoted the \"Proclamation of 1858\" as their \"Magna Carta\". Why?",
        options: ["It promised independence in 50 years.", "It promised equal treatment to Indians and Europeans in employment and law.", "It allowed them to keep arms.", "It recognized the Congress as a political party."],
        correctAnswer: 1, // (b)
        explanation: "The Queen's Proclamation (1858) promised equal rights, which the Moderates constantly reminded the British to fulfill.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 28,
        question: "The \"Public Service Commission\" (Aitchison Commission) was set up in 1886 by Dufferin to:",
        options: ["Discuss the expansion of the Legislative Councils.", "Look into the demand for raising the age limit for civil services and simultaneous exams.", "Investigate the famine.", "Suppress the press."],
        correctAnswer: 1, // (b)
        explanation: "The Aitchison Commission rejected simultaneous exams but raised the age limit slightly.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 29,
        question: "What was the main argument of the \"Economic Nationalism\" propounded by the Moderates?",
        options: ["India should stop all trade with Britain.", "India must industrialize with Indian capital, and the government must protect infant industries (Protectionism).", "Agriculture is the only way for India's salvation.", "Foreign capital is essential for India's growth."],
        correctAnswer: 1, // (b)
        explanation: "They demanded protection for Indian industries (tariffs on imports), arguing against the British policy of \"Laissez-faire\" (Free Trade) which hurt India.",
        subtopic: 'conceptual',
        difficulty: 'Hard'
    },
    {
        id: 30,
        question: "Who among the following was NOT a Moderate leader?",
        options: ["Rash Behari Ghosh", "Pherozeshah Mehta", "Aurobindo Ghosh", "P. Ananda Charlu"],
        correctAnswer: 2, // (c)
        explanation: "Aurobindo Ghosh was a staunch Extremist (Propounded \"Passive Resistance\").",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 31,
        question: "The \"Age of Consent Bill\" controversy (1891) saw a split in opinion. While Behramji Malabari supported it, who opposed it on the grounds of foreign interference in religious customs?",
        options: ["G.K. Gokhale", "B.G. Tilak", "Ranade", "Dadabhai Naoroji"],
        correctAnswer: 1, // (b)
        explanation: "Tilak opposed the Age of Consent Bill (1891).",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 32,
        question: "The \"Amravati Session\" (1897) was significant because:",
        options: ["It was the first session in a rural area.", "C. Sankaran Nair (President) criticized the government for the arrest of Tilak and the Poona plague measures.", "Gandhi attended his first session.", "The Congress split into two."],
        correctAnswer: 1, // (b)
        explanation: "C. Sankaran Nair criticized the government's handling of the plague and the detention of Natu brothers/Tilak.",
        subtopic: 'conceptual',
        difficulty: 'Hard'
    },
    {
        id: 33,
        question: "Which Moderate leader is known as the \"Lion of Bombay\"?",
        options: ["Dadabhai Naoroji", "Bal Gangadhar Tilak", "Pherozeshah Mehta", "M.G. Ranade"],
        correctAnswer: 2, // (c)
        explanation: "Pherozeshah Mehta.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 34,
        question: "The \"Voice of India\" was a journal started by Dadabhai Naoroji to:",
        options: ["Spread the message of Swadeshi.", "Present Indian grievances to the British public and press.", "Promote scientific education.", "Unite the Muslims."],
        correctAnswer: 1, // (b)
        explanation: "Voice of India presented Indian grievances to the British public.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 35,
        question: "Why did the Moderates support the British war efforts during the Boer War and World War I?",
        options: ["They were forced to do so.", "They hoped that loyalty would be rewarded with self-governing status (Dominion Status).", "They hated the Germans.", "They wanted to send Indian soldiers abroad for exposure."],
        correctAnswer: 1, // (b)
        explanation: "They believed in cooperation to gain concessions (Dominion Status).",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    }
];
