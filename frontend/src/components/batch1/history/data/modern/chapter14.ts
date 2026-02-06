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

export const MODERN_CHAPTER_14_SUBTOPICS: Subtopic[] = [
    { id: 'home_rule_leagues', name: 'Home Rule Leagues (Structure & Geography)' },
    { id: 'newspapers_ideology', name: 'Newspapers & Ideology' },
    { id: 'lucknow_session', name: 'Lucknow Session (1916)' },
    { id: 'lucknow_pact', name: 'The Lucknow Pact (Details)' },
    { id: 'august_declaration', name: 'Government Response & August Declaration' },
    { id: 'chronology_personalities', name: 'Chronology & Personalities' },
    { id: 'conceptual', name: 'Conceptual & Deep Dive' }
];

export const MODERN_CHAPTER_14_MCQS: Question[] = [
    // Set 1: Home Rule Leagues
    {
        id: 1,
        question: "Consider the following statements regarding the two Home Rule Leagues:\n1. Bal Gangadhar Tilak launched his Home Rule League before Annie Besant launched hers.\n2. Tilak’s League covered the whole of India except Maharashtra, while Besant’s League was restricted to Maharashtra.\n3. The two Leagues did not merge but worked in cooperation to avoid friction.\n\nWhich of the statements given above is/are correct?",
        options: ["1 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
        correctAnswer: 1, // (b)
        explanation: "Statement 2 is incorrect. Tilak’s League was restricted to Maharashtra (excluding Bombay city), Karnataka, Central Provinces, and Berar. Besant’s League covered the rest of India (including Bombay city).",
        subtopic: 'home_rule_leagues',
        difficulty: 'Moderate'
    },
    {
        id: 2,
        question: "Which of the following regions fell under the jurisdiction of Tilak’s Home Rule League?\n1. Bombay City\n2. Karnataka\n3. Central Provinces\n4. Berar\n\nSelect the correct answer using the code given below:",
        options: ["1, 2 and 3 only", "2, 3 and 4 only", "1 and 4 only", "1, 2, 3 and 4"],
        correctAnswer: 1, // (b)
        explanation: "Bombay City was under Besant’s League. Tilak covered the rest of Maharashtra.",
        subtopic: 'home_rule_leagues',
        difficulty: 'Easy'
    },
    {
        id: 3,
        question: "Annie Besant’s Home Rule League was loosely organized compared to Tilak's, but it had a wider reach. Its headquarters was located at:",
        options: ["Bombay", "Calcutta", "Adyar (Madras)", "Allahabad"],
        correctAnswer: 2, // (c)
        explanation: "Adyar (Madras).",
        subtopic: 'home_rule_leagues',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "Who among the following were the key lieutenants of Annie Besant in the Home Rule activities?",
        options: ["George Arundale, B.P. Wadia, and C.P. Ramaswamy Aiyar", "N.C. Kelkar, G.S. Khaparde, and B.S. Moonje", "Motilal Nehru and C.R. Das", "Lala Lajpat Rai and Ajit Singh"],
        correctAnswer: 0, // (a)
        explanation: "George Arundale, B.P. Wadia, and C.P. Ramaswamy Aiyar were Besant’s close associates. (Kelkar and Moonje were with Tilak).",
        subtopic: 'home_rule_leagues',
        difficulty: 'Moderate'
    },
    {
        id: 5,
        question: "Which prominent leader, though not a member of the Home Rule League initially, accepted the Presidentship of the \"All India Home Rule League\" (Besant’s) in 1920 and changed its name to \"Swarajya Sabha\"?",
        options: ["Bal Gangadhar Tilak", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose"],
        correctAnswer: 1, // (b)
        explanation: "Mahatma Gandhi accepted the presidency of the All India Home Rule League in 1920.",
        subtopic: 'home_rule_leagues',
        difficulty: 'Moderate'
    },
    // Set 2: Newspapers
    {
        id: 6,
        question: "Which of the following newspapers were the main organs of Annie Besant’s propaganda for Home Rule?",
        options: ["Kesari and Mahratta", "New India and Commonweal", "Young India and Navjivan", "The Hindu and Swadesamitran"],
        correctAnswer: 1, // (b)
        explanation: "New India and Commonweal (Besant). Kesari and Mahratta (Tilak).",
        subtopic: 'newspapers_ideology',
        difficulty: 'Easy'
    },
    {
        id: 7,
        question: "What was the core demand of the Home Rule Movement?",
        options: ["Complete Independence (Purna Swaraj) outside the British Empire.", "Self-Government (Home Rule) on the lines of White Colonies (Dominion Status) within the British Empire.", "Only administrative reforms in the Civil Services.", "Partition of India into Hindu and Muslim states."],
        correctAnswer: 1, // (b)
        explanation: "Self-Government within the British Empire (Dominion Status).",
        subtopic: 'newspapers_ideology',
        difficulty: 'Easy'
    },
    {
        id: 8,
        question: "The \"Servants of India Society\" members were:",
        options: ["Allowed to become members of the Home Rule League.", "Not permitted to become members of the League but supported it from outside.", "Totally opposed to the Home Rule Movement.", "Merged with the Home Rule League."],
        correctAnswer: 1, // (b)
        explanation: "Servants of India Society (Gokhale’s group) were not permitted to become members, but they supported the demand for Home Rule.",
        subtopic: 'newspapers_ideology',
        difficulty: 'Moderate'
    },
    // Set 3: Lucknow Session
    {
        id: 9,
        question: "The Lucknow Session of the INC (1916) is historically significant for:\n1. The readmission of the Extremists (Tilak group) into the Congress.\n2. The pact between the Congress and the Muslim League.\n3. The election of the first woman President of the Congress.\n\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 0, // (a)
        explanation: "The first woman President (Annie Besant) was elected in 1917 (Calcutta), not 1916. 1916 was Ambika Charan Majumdar.",
        subtopic: 'lucknow_session',
        difficulty: 'Moderate'
    },
    {
        id: 10,
        question: "Who was the President of the historic Lucknow Session of the INC in 1916?",
        options: ["Annie Besant", "Ambika Charan Majumdar", "Bal Gangadhar Tilak", "Muhammad Ali Jinnah"],
        correctAnswer: 1, // (b)
        explanation: "A.C. Majumdar.",
        subtopic: 'lucknow_session',
        difficulty: 'Easy'
    },
    {
        id: 11,
        question: "Which two leaders played the most crucial role in bringing about the \"Lucknow Pact\" between the Congress and the Muslim League?",
        options: ["Gandhi and Jinnah", "Tilak and Jinnah", "Gokhale and Aga Khan", "Malaviya and Syed Ahmed Khan"],
        correctAnswer: 1, // (b)
        explanation: "Tilak and Jinnah were the architects of the Lucknow Pact.",
        subtopic: 'lucknow_session',
        difficulty: 'Moderate'
    },
    {
        id: 12,
        question: "Which event/factor facilitated the re-entry of Extremists into the Congress in 1916?",
        options: ["The death of G.K. Gokhale and Pherozeshah Mehta (who were staunchly opposed to them).", "The intervention of the British Viceroy.", "The apology tendered by Tilak.", "The failure of the Moderate politics."],
        correctAnswer: 0, // (a)
        explanation: "The deaths of Gokhale and Mehta (who were the main obstacles) in 1915 cleared the path for reunion.",
        subtopic: 'lucknow_session',
        difficulty: 'Moderate'
    },
    // Set 4: Lucknow Pact
    {
        id: 13,
        question: "Under the Lucknow Pact (1916), the Congress made a major compromise that is often criticized by historians. What was it?",
        options: ["It accepted the partition of Bengal.", "It accepted the principle of Separate Electorates for Muslims.", "It agreed to give 50% reservation to Muslims in the Central Assembly.", "It agreed to support the British in World War I unconditionally."],
        correctAnswer: 1, // (b)
        explanation: "Congress accepted Separate Electorates, a move often criticized as the \"surrender of nationalism to communalism.\"",
        subtopic: 'lucknow_pact',
        difficulty: 'Easy'
    },
    {
        id: 14,
        question: "The \"Communal Veto\" clause in the Lucknow Pact stated that:",
        options: ["No bill affecting a community should be passed if 3/4th of the members of that community in the council opposed it.", "The Viceroy could veto any communal bill.", "Muslims could veto any Hindu religious procession.", "The Congress President had veto power over League resolutions."],
        correctAnswer: 0, // (a)
        explanation: "If 3/4th of a community's members opposed a bill, it would not be passed.",
        subtopic: 'lucknow_pact',
        difficulty: 'Moderate'
    },
    {
        id: 15,
        question: "Why did the Muslim League agree to join hands with the Congress in 1916?",
        options: ["Britain’s refusal to help Turkey (Ottoman Empire) in its wars (Balkan Wars/WWI) annoyed Muslims.", "The annulment of the Partition of Bengal in 1911 had alienated the Muslims.", "The younger leadership of the League was more nationalist.", "All of the above."],
        correctAnswer: 3, // (d)
        explanation: "All factors contributed to the League’s anti-British turn.",
        subtopic: 'lucknow_pact',
        difficulty: 'Easy'
    },
    // Set 5: August Declaration
    {
        id: 16,
        question: "The \"August Declaration\" of 1917 by Edwin Montagu stated the policy of:",
        options: ["Complete Independence for India immediately.", "Increasing association of Indians in every branch of administration and the gradual development of self-governing institutions.", "Suppression of the Home Rule Movement by force.", "Division of India into two dominions."],
        correctAnswer: 1, // (b)
        explanation: "\"Gradual development of self-governing institutions.\"",
        subtopic: 'august_declaration',
        difficulty: 'Easy'
    },
    {
        id: 17,
        question: "Following the arrest of Annie Besant in June 1917, which prominent Moderate leader renounced his Knighthood in protest?",
        options: ["Rabindranath Tagore", "Sir S. Subramaniya Aiyar", "Gopal Krishna Gokhale", "Pherozeshah Mehta"],
        correctAnswer: 1, // (b)
        explanation: "Sir S. Subramaniya Aiyar renounced his Knighthood.",
        subtopic: 'august_declaration',
        difficulty: 'Easy'
    },
    {
        id: 18,
        question: "Why did the Home Rule Movement fade out by 1919?\n1. Effective organization was lacking.\n2. Communal riots occurred during 1917-18.\n3. The Moderates were pacified by the Montagu-Chelmsford reforms talk.\n4. Tilak went to England for a libel case, and Besant became passive.\n\nSelect the correct answer:",
        options: ["1 and 2 only", "2 and 3 only", "1, 3 and 4 only", "1, 2, 3 and 4"],
        correctAnswer: 3, // (d)
        explanation: "All reasons are correct. Tilak went to London (libel case against Chirol), Besant was pacified by the August Declaration, and reforms created division.",
        subtopic: 'august_declaration',
        difficulty: 'Moderate'
    },
    // Set 6: Chronology
    {
        id: 19,
        question: "Who called the Lucknow Pact a \"Hindu-Muslim Unity\" achievement and was given the title \"Ambassador of Hindu-Muslim Unity\" by Sarojini Naidu?",
        options: ["Mahatma Gandhi", "Maulana Azad", "Muhammad Ali Jinnah", "Bal Gangadhar Tilak"],
        correctAnswer: 2, // (c)
        explanation: "Jinnah. He was a staunch nationalist then.",
        subtopic: 'chronology_personalities',
        difficulty: 'Easy'
    },
    {
        id: 20,
        question: "Arrange the following in chronological order:\n1. Formation of Tilak’s Home Rule League\n2. Formation of Besant’s Home Rule League\n3. Lucknow Pact\n4. August Declaration\n\nSelect the correct answer:",
        options: ["1-2-3-4", "2-1-3-4", "1-2-4-3", "1-3-2-4"],
        correctAnswer: 0, // (a)
        explanation: "Tilak’s League (April 1916) -> Besant’s League (Sept 1916) -> Lucknow Pact (Dec 1916) -> August Declaration (Aug 1917).",
        subtopic: 'chronology_personalities',
        difficulty: 'Moderate'
    },
    {
        id: 21,
        question: "Which Russian revolution inspired the Indian nationalists during the WWI period?",
        options: ["The 1905 Revolution", "The February Revolution (1917)", "The Bolshevik (October) Revolution (1917)", "The Decembrist Revolt"],
        correctAnswer: 2, // (c)
        explanation: "The Bolshevik Revolution (1917) gave a boost to self-determination ideas.",
        subtopic: 'chronology_personalities',
        difficulty: 'Easy'
    },
    {
        id: 22,
        question: "\"Swaraj is my birthright and I shall have it.\" Tilak raised this slogan specifically during:",
        options: ["The Swadeshi Movement (1905).", "The Home Rule Movement (1916).", "The Non-Cooperation Movement (1920).", "The Civil Disobedience Movement (1930)."],
        correctAnswer: 1, // (b)
        explanation: "It became the war cry of the Home Rule Movement.",
        subtopic: 'chronology_personalities',
        difficulty: 'Easy'
    },
    {
        id: 23,
        question: "Who among the following joined the Home Rule League?\n1. Motilal Nehru\n2. Jawaharlal Nehru\n3. Bhulabhai Desai\n4. Chittaranjan Das\n\nSelect the correct answer:",
        options: ["1 and 2 only", "2 and 4 only", "1, 3 and 4 only", "1, 2, 3 and 4"],
        correctAnswer: 3, // (d)
        explanation: "Many Moderate and Extremist leaders, including the Nehrus, Das, and Desai, joined the Home Rule agitation as it became the only active movement.",
        subtopic: 'chronology_personalities',
        difficulty: 'Moderate'
    },
    // Set 7: Conceptual
    {
        id: 24,
        question: "Why did Anglo-Indians, most Muslims, and non-Brahmins from the South NOT join the Home Rule Movement?",
        options: ["They were patriotic to the British.", "They felt Home Rule would mean the rule of the Hindu majority (for Muslims) or High Caste Brahmins (for non-Brahmins).", "They were legally banned from joining.", "They were busy with WWI recruitment."],
        correctAnswer: 1, // (b)
        explanation: "They feared that Home Rule would entrench the power of the Brahmins and Hindus.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 25,
        question: "The \"Indian Unrest\", a book that called Tilak the \"Father of Indian Unrest\", led Tilak to file a libel suit in London. Who was the author?",
        options: ["Valentine Chirol", "Curzon", "Risley", "Montagu"],
        correctAnswer: 0, // (a)
        explanation: "Valentine Chirol.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 26,
        question: "What was the main reason for the shift of the Muslim League from \"Loyalism\" (1906) to \"Nationalism\" (1912-13)?",
        options: ["British refusal to grant University status to Aligarh.", "Annulment of Partition of Bengal.", "British hostilities against Islamic powers (Turkey/Italy).", "All of the above."],
        correctAnswer: 3, // (d)
        explanation: "The betrayal over Bengal and the Balkan wars pushed the League towards the Congress.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 27,
        question: "The term \"Commonwealth\" in the context of the Home Rule movement referred to:",
        options: ["A loose federation of independent states.", "India staying within the British Empire with internal autonomy.", "A socialist republic.", "A union of Asian nations."],
        correctAnswer: 1, // (b)
        explanation: "Internal autonomy within the Empire.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 28,
        question: "During the Lucknow Session (1916), the Congress and League demanded:",
        options: ["Independence.", "That the government should declare that it would confer self-government on Indians at an early date.", "Partition of India.", "Only educational reforms."],
        correctAnswer: 1, // (b)
        explanation: "They demanded a declaration of Self-Government at an early date.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 29,
        question: "Annie Besant became the first woman President of the INC in which session?",
        options: ["1916 Lucknow", "1917 Calcutta", "1918 Bombay", "1919 Amritsar"],
        correctAnswer: 1, // (b)
        explanation: "1917 Calcutta.",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 30,
        question: "The \"Montagu-Chelmsford Reforms\" (Government of India Act 1919) were primarily based on:",
        options: ["The Lucknow Pact proposals.", "The August Declaration of 1917.", "The Nehru Report.", "The Simon Commission Report."],
        correctAnswer: 1, // (b)
        explanation: "The 1919 Act was the implementation of the August Declaration.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 31,
        question: "Which extremist leader, after returning from Mandalay jail, initially tried to assure the government of his loyalty to the Crown to gain readmission to Congress?",
        options: ["Lala Lajpat Rai", "Bipin Chandra Pal", "Bal Gangadhar Tilak", "Aurobindo Ghosh"],
        correctAnswer: 2, // (c)
        explanation: "Tilak. He stated he was not looking for separation from the Empire, to assure the authorities.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 32,
        question: "The \"Non-Brahmin Movement\" in Madras, which opposed the Home Rule movement, formed which political party?",
        options: ["The Justice Party", "The Dravida Kazhagam", "The Swaraj Party", "The Republican Party"],
        correctAnswer: 0, // (a)
        explanation: "The Justice Party (South Indian Liberal Federation) was formed to oppose the Brahmin-dominated Home Rule movement.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 33,
        question: "Which of the following states was the 'Headquarters' of the Theosophical Society where Besant operated?",
        options: ["Maharashtra", "Bengal", "Madras (Tamil Nadu)", "Punjab"],
        correctAnswer: 2, // (c)
        explanation: "Adyar is in Madras (Tamil Nadu).",
        subtopic: 'conceptual',
        difficulty: 'Easy'
    },
    {
        id: 34,
        question: "The \"Passive Resistance\" method was originally propounded by:",
        options: ["Gandhi in South Africa", "Aurobindo Ghosh (during Swadeshi)", "Tilak (during Home Rule)", "Besant"],
        correctAnswer: 1, // (b)
        explanation: "Aurobindo Ghosh propounded \"Passive Resistance\" in his articles (Doctrine of Passive Resistance) in 1907.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    },
    {
        id: 35,
        question: "Did the Home Rule Leagues merge into the Congress?",
        options: ["No, they were dissolved.", "Yes, in 1920, they merged with the Congress under Gandhi’s leadership.", "They continued as separate entities till 1947.", "They merged with the Muslim League."],
        correctAnswer: 1, // (b)
        explanation: "They merged into the Congress, providing the organizational base for the Gandhian movements.",
        subtopic: 'conceptual',
        difficulty: 'Moderate'
    }
];
