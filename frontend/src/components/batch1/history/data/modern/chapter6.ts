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

export const MODERN_CHAPTER_6_SUBTOPICS: Subtopic[] = [
    { id: 'civil_east_north', name: 'Civil Uprisings (East & North)' },
    { id: 'civil_south_west', name: 'Civil Uprisings (South & West)' },
    { id: 'peasant_religious', name: 'Peasant Movements (Religious)' },
    { id: 'tribal_central_east', name: 'Tribal Revolts (Central & East)' },
    { id: 'chronology', name: 'Chronology & Comparative Analysis' },
    { id: 'advanced', name: 'Advanced Contextual Questions' }
];

export const MODERN_CHAPTER_6_MCQS: Question[] = [
    // Set 1: Civil Uprisings (East & North)
    {
        id: 1,
        question: "The \"Sanyasi Revolt\" (1763–1800) is famously immortalized in Bankim Chandra Chattopadhyay’s novel Anandamath. Which of the following was a primary cause of this revolt?",
        options: ["Implementation of the Permanent Settlement.", "Restrictions imposed on pilgrims visiting holy places and the famine of 1770.", "Introduction of Christian missionaries in Bengal.", "Disbanding of the Mughal army."],
        correctAnswer: 1, // (b)
        explanation: "The Sanyasi revolt was triggered by the famine of 1770 and the harsh economic order, alongside restrictions on pilgrims.",
        subtopic: 'civil_east_north',
        difficulty: 'Easy'
    },
    {
        id: 2,
        question: "Who among the following leaders is associated with the \"Sanyasi-Fakir\" rebellion?\n1. Majnum Shah\n2. Chirag Ali\n3. Devi Chaudhurani\n4. Bhawani Pathak\n\nSelect the correct answer using the code given below:",
        options: ["1 and 2 only", "2 and 3 only", "1, 3 and 4 only", "1, 2, 3 and 4"],
        correctAnswer: 3, // (d)
        explanation: "All listed leaders (Majnum Shah, Chirag Ali, Devi Chaudhurani, Bhawani Pathak) were associated with the Sanyasi-Fakir rebellion.",
        subtopic: 'civil_east_north',
        difficulty: 'Moderate'
    },
    {
        id: 3,
        question: "The \"Paika Rebellion\" of 1817, often demanded to be declared as the 'First War of Independence', took place in which region?",
        options: ["Bengal", "Odisha", "Maharashtra", "Andhra Pradesh"],
        correctAnswer: 1, // (b)
        explanation: "Paika Rebellion (1817) was in Odisha (Khurda region).",
        subtopic: 'civil_east_north',
        difficulty: 'Easy'
    },
    {
        id: 4,
        question: "Who was the leader of the Paika Rebellion who mobilized the Paikas (traditional landed militia) against the British?",
        options: ["Jagabandhu Bidyadhar", "Surendra Sai", "Chakra Bisoi", "Dora Bisoi"],
        correctAnswer: 0, // (a)
        explanation: "Bakshi Jagabandhu (Jagabandhu Bidyadhar) was the military chief of the Raja of Khurda who led the Paikas.",
        subtopic: 'civil_east_north',
        difficulty: 'Easy'
    },
    {
        id: 5,
        question: "The \"Ahom Revolt\" (1828) in Assam was led by Gomdhar Konwar. What was the immediate trigger?",
        options: ["Interference in tribal customs.", "British refusal to withdraw from Assam after the First Burma War (1824–26).", "Introduction of Opium cultivation.", "Imposition of a poll tax."],
        correctAnswer: 1, // (b)
        explanation: "The British pledged to withdraw from Assam after the First Burma War but refused, leading to the Ahom Revolt.",
        subtopic: 'civil_east_north',
        difficulty: 'Moderate'
    },
    {
        id: 6,
        question: "Match the following Civil Uprisings with their Leaders:\nA. Khasi Uprising -> 1. Tirat Singh\nB. Singhphos Rebellion -> 2. Nirang Phidu\nC. Kuka Movement -> 3. Bhagat Jawahar Mal\n\nSelect the correct answer:",
        options: ["A-1, B-2, C-3", "A-2, B-1, C-3", "A-1, B-3, C-2", "A-3, B-1, C-2"],
        correctAnswer: 0, // (a)
        explanation: "Tirat Singh (Khasi), Nirang Phidu (Singhphos), Bhagat Jawahar Mal (Kuka).",
        subtopic: 'civil_east_north',
        difficulty: 'Moderate'
    },
    // Set 2: Civil Uprisings (South & West)
    {
        id: 7,
        question: "The \"Kundara Proclamation\" of 1805 is associated with which anti-British leader?",
        options: ["Veerapandiya Kattabomman", "Maruthu Pandiyar", "Velu Thampi Dalawa", "Puli Thevar"],
        correctAnswer: 2, // (c)
        explanation: "Velu Thampi issued the Kundara Proclamation in 1805, a call to arms against the British.",
        subtopic: 'civil_south_west',
        difficulty: 'Easy'
    },
    {
        id: 8,
        question: "The \"Gadkari Revolt\" (1844) took place in Kolhapur. The Gadkaris were:",
        options: ["A priestly class deprived of their grants.", "A hereditary military class who were disbanded.", "Tribal cultivators affected by forest laws.", "Weavers who lost their livelihood."],
        correctAnswer: 1, // (b)
        explanation: "Gadkaris were a hereditary military class which garrisoned Maratha forts. They revolted when they were disbanded.",
        subtopic: 'civil_south_west',
        difficulty: 'Moderate'
    },
    {
        id: 9,
        question: "Who among the following was the leader of the \"Ramosi Uprising\" (1822) in the Western Ghats (Satara region)?",
        options: ["Chittur Singh", "Sewaram", "Vasudev Balwant Phadke", "Tantia Tope"],
        correctAnswer: 0, // (a)
        explanation: "Chittur Singh led the Ramosi peasant force in Satara.",
        subtopic: 'civil_south_west',
        difficulty: 'Moderate'
    },
    {
        id: 10,
        question: "The \"Poligar Revolt\" (1795–1805) was a major resistance movement in:",
        options: ["Malabar (Kerala)", "Tirunelveli (Tamil Nadu)", "Mysore (Karnataka)", "Warangal (Telangana)"],
        correctAnswer: 1, // (b)
        explanation: "Poligars (Palaiyakkarars) were feudal chiefs in South India (Tirunelveli).",
        subtopic: 'civil_south_west',
        difficulty: 'Easy'
    },
    {
        id: 11,
        question: "The revolt of \"Raja of Vizianagaram\" (1794) was caused by:",
        options: ["British demand for a tribute of 3 lakhs and disbanding of his troops.", "Interference in the succession of the Raja.", "Annexation of his kingdom under Doctrine of Lapse.", "Religious conversion activities."],
        correctAnswer: 0, // (a)
        explanation: "The British demanded a high tribute (3 lakhs) and ordered the Raja (Vijayaraghavaraju) to disband troops.",
        subtopic: 'civil_south_west',
        difficulty: 'Moderate'
    },
    {
        id: 12,
        question: "\"Dhundia Wagh\" was a local leader who resisted the British in which region after the fall of Tipu Sultan?",
        options: ["Bednur (Karnataka)", "Malabar", "Coorg", "Goa"],
        correctAnswer: 0, // (a)
        explanation: "Dhundia Wagh was a totally distinct rebel in the Bednur region (Karnataka).",
        subtopic: 'civil_south_west',
        difficulty: 'Moderate'
    },
    // Set 3: Peasant Movements (Religious Undertones)
    {
        id: 13,
        question: "The \"Narkelberia Uprising\" (1831) is considered the first armed peasant uprising against the British. It was led by:",
        options: ["Dudu Mian", "Titu Mir", "Karam Shah", "Majnum Shah"],
        correctAnswer: 1, // (b)
        explanation: "Titu Mir led the Narkelberia uprising. He built a bamboo fort (Bansher Kella).",
        subtopic: 'peasant_religious',
        difficulty: 'Moderate'
    },
    {
        id: 14,
        question: "The \"Pagal Panthis\" were a religious sect in Bengal founded by:",
        options: ["Tipu Shah", "Karam Shah", "Shariatullah", "Syed Ahmed"],
        correctAnswer: 1, // (b)
        explanation: "Karam Shah founded the Pagal Panthis. His son Tipu took it forward.",
        subtopic: 'peasant_religious',
        difficulty: 'Easy'
    },
    {
        id: 15,
        question: "The \"Faraizi Revolt\" (1838–1857) advocated for the expulsion of the British. The Faraizis were followers of:",
        options: ["A Muslim sect founded by Haji Shariatullah.", "The Wahabi movement.", "The Sufi order of Chisti.", "The Ahmadiyya movement."],
        correctAnswer: 0, // (a)
        explanation: "Faraizis were followers of Haji Shariatullah of Faridpur (East Bengal).",
        subtopic: 'peasant_religious',
        difficulty: 'Easy'
    },
    {
        id: 16,
        question: "The \"Moplah Uprisings\" in Malabar (1836–1854) were directed against:",
        options: ["The British government officials only.", "The Hindu Jenmis (landlords) and the British administration.", "The Christian missionaries.", "The Muslim moneylenders."],
        correctAnswer: 1, // (b)
        explanation: "Moplah outbreaks were against Hindu Jenmis (landlords) and the British.",
        subtopic: 'peasant_religious',
        difficulty: 'Moderate'
    },
    // Set 4: Tribal Revolts (Central & East India)
    {
        id: 17,
        question: "The \"Pahariyas Rebellion\" took place in the Rajmahal Hills (1778). The British were forced to declare their territory as:",
        options: ["Damin-i-Koh", "Khalisa Land", "Zamindari", "Protected Forest"],
        correctAnswer: 0, // (a)
        explanation: "Damin-i-Koh was the territory declared for the Santhals (not Pahariyas initially, but the area was the Pahariya stronghold which Santhals later occupied; however, the term is specifically associated with the Santhal settlement zone created by the British).",
        subtopic: 'tribal_central_east',
        difficulty: 'Moderate'
    },
    {
        id: 18,
        question: "The \"Kol Mutiny\" (1831), which covered Ranchi, Singhbhum, and Hazaribagh, was led by:",
        options: ["Sidhu and Kanhu", "Buddho Bhagat", "Birsa Munda", "Jatra Oraon"],
        correctAnswer: 1, // (b)
        explanation: "Buddho Bhagat led the Kol Mutiny (1831).",
        subtopic: 'tribal_central_east',
        difficulty: 'Easy'
    },
    {
        id: 19,
        question: "Which of the following was the primary cause of the \"Santhal Rebellion\" (1855–56)?",
        options: ["Interference in their religious practices.", "Oppression by police, revenue officials, and moneylenders (Dikus) leading to loss of land.", "The ban on shifting cultivation (Podu).", "Recruitment of Santhals into the British army."],
        correctAnswer: 1, // (b)
        explanation: "The oppression by 'Dikus' (outsiders/moneylenders) and revenue officials was the primary cause.",
        subtopic: 'tribal_central_east',
        difficulty: 'Easy'
    },
    {
        id: 20,
        question: "The \"Khond Uprisings\" (1837–1856) in Orissa were led by Chakra Bisoi. One of the main issues was the British attempt to ban:",
        options: ["Sati", "Mariah (Human Sacrifice)", "Child Marriage", "Polygamy"],
        correctAnswer: 1, // (b)
        explanation: "The British attempt to stop Mariah (human sacrifice) triggered the Khond revolt.",
        subtopic: 'tribal_central_east',
        difficulty: 'Easy'
    },
    {
        id: 21,
        question: "Match the Tribal Uprising with the Region:\nA. Chuar Uprising -> 1. Midnapore (Bengal)\nB. Bhil Revolt -> 2. Khandesh (Maharashtra)\nC. Koya Rebellion -> 3. Rampa Region (Andhra)\n\nSelect the correct answer:",
        options: ["A-1, B-2, C-3", "A-2, B-1, C-3", "A-1, B-3, C-2", "A-3, B-2, C-1"],
        correctAnswer: 0, // (a)
        explanation: "Chuar (Midnapore), Bhil (Khandesh), Koya (Rampa/Andhra).",
        subtopic: 'tribal_central_east',
        difficulty: 'Moderate'
    },
    {
        id: 22,
        question: "The \"Ho Uprisings\" (1820s) were undertaken by the Ho tribesmen of:",
        options: ["Singhbhum (Jharkhand)", "Garo Hills (Meghalaya)", "Bastar (Chhattisgarh)", "Keonjhar (Odisha)"],
        correctAnswer: 0, // (a)
        explanation: "Ho tribesmen belong to Singhbhum (Chotanagpur).",
        subtopic: 'tribal_central_east',
        difficulty: 'Easy'
    },
    // Set 5: Chronology & Comparative
    {
        id: 23,
        question: "Arrange the following uprisings in chronological order:\n1. Santhal Rebellion\n2. Paika Rebellion\n3. Kol Mutiny\n4. Vellore Mutiny\n\nSelect the correct answer:",
        options: ["4-2-3-1", "2-4-3-1", "4-2-1-3", "2-3-4-1"],
        correctAnswer: 0, // (a)
        explanation: "Vellore (1806) -> Paika (1817) -> Kol (1831) -> Santhal (1855).",
        subtopic: 'chronology',
        difficulty: 'Moderate'
    },
    {
        id: 24,
        question: "Which of the following revolts ended with the creation of a separate non-regulation district known as the \"Santhal Parganas\"?",
        options: ["Kol Mutiny", "Bhil Revolt", "Santhal Rebellion", "Munda Uprising"],
        correctAnswer: 2, // (c)
        explanation: "After the Santhal Rebellion, the Santhal Parganas Tenancy Act was passed.",
        subtopic: 'chronology',
        difficulty: 'Easy'
    },
    {
        id: 25,
        question: "\"Damin-i-Koh\" refers to:",
        options: ["The land demarcated for the Santhals.", "The land revenue system in Bombay.", "The distinct culture of the Khasis.", "The hill territory of the Pahariyas."],
        correctAnswer: 0, // (a)
        explanation: "Damin-i-Koh refers to the land of the Santhals (skirts of the Rajmahal hills).",
        subtopic: 'chronology',
        difficulty: 'Easy'
    },
    {
        id: 26,
        question: "The \"Kuka Movement\" in Punjab initially started as a religious purification movement under Bhagat Jawahar Mal, but later turned political. Who was the leader who was eventually deported to Rangoon?",
        options: ["Baba Ram Singh", "Balak Singh", "Lal Singh", "Ajit Singh"],
        correctAnswer: 0, // (a)
        explanation: "Baba Ram Singh (successor of Balak Singh) was the one who gave it a political turn and was deported to Rangoon.",
        subtopic: 'chronology',
        difficulty: 'Moderate'
    },
    {
        id: 27,
        question: "The \"Wahabi Movement\" in India was effectively suppressed by the British in the 1870s. Its primary operational base (hub) in India for anti-British activities was:",
        options: ["Deoband", "Sithana (North-West Frontier)", "Patna", "Aligarh"],
        correctAnswer: 2, // (c)
        explanation: "Sithana (NW Frontier) was the base; Patna was the organizational hub within India.",
        subtopic: 'chronology',
        difficulty: 'Moderate'
    },
    {
        id: 28,
        question: "The rebellion of the \"Singphos\" in Assam (1830s) is significant because:",
        options: ["They were supported by the Burmese.", "They used guerrilla warfare similar to the Marathas.", "They kidnapped the British Political Agent.", "They were the first to use firearms."],
        correctAnswer: 2, // (c)
        explanation: "This is a specific factual detail often asked.",
        subtopic: 'chronology',
        difficulty: 'Hard'
    },
    {
        id: 29,
        question: "Consider the following pairs:\n1. Velu Thampi: Dewan of Travancore\n2. Kattabomman: Nayak of Panchalamkurichi\n3. Chakra Bisoi: Khond Leader\n\nWhich of the pairs given above are correctly matched?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3, // (d)
        explanation: "All pairs are correctly matched.",
        subtopic: 'chronology',
        difficulty: 'Easy'
    },
    {
        id: 30,
        question: "The \"Bhil Uprisings\" (1817–19) in Khandesh were attributed by the British to:",
        options: ["Instigation by the Peshwa Baji Rao II.", "The famine and economic distress.", "The fear of conversion to Christianity.", "The ban on alcohol."],
        correctAnswer: 0, // (a)
        explanation: "The British suspected the hand of Peshwa Baji Rao II (Trimbakji Danglia) in instigating the Bhils.",
        subtopic: 'chronology',
        difficulty: 'Moderate'
    },
    // Set 6: Advanced Contextual
    {
        id: 31,
        question: "Which of the following was a common feature of almost all civil and tribal uprisings before 1857?",
        options: ["They were all led by the educated middle class.", "They were localized, isolated, and backward-looking (restorative).", "They all demanded a democratic republic.", "They coordinated with each other to form an All-India front."],
        correctAnswer: 1, // (b)
        explanation: "These uprisings were localized and backward-looking (aiming to restore the old order), not forward-looking national movements.",
        subtopic: 'advanced',
        difficulty: 'Moderate'
    },
    {
        id: 32,
        question: "The \"Khasi Uprising\" was triggered because:",
        options: ["The British wanted to construct a road connecting the Brahmaputra valley to Sylhet through Khasi domains.", "The British banned the Khasi language.", "The British occupied the coal mines of Cherrapunji.", "The missionaries were forcefully converting tribes."],
        correctAnswer: 0, // (a)
        explanation: "The road construction project was the trigger.",
        subtopic: 'advanced',
        difficulty: 'Easy'
    },
    {
        id: 33,
        question: "\"Sidhu and Kanhu\" were the leaders who claimed to have received a divine message to rebel. They are associated with:",
        options: ["The Munda Uprising", "The Santhal Rebellion", "The Oraon Uprising", "The Bhil Uprising"],
        correctAnswer: 1, // (b)
        explanation: "Sidhu and Kanhu (Santhal leaders) claimed divine sanction (Thakurji's command).",
        subtopic: 'advanced',
        difficulty: 'Easy'
    },
    {
        id: 34,
        question: "The \"Kolis\" of Gujarat revolted in three phases (1829, 1839, 1844-48) primarily because:",
        options: ["They were unemployed after the dismantling of forts.", "The British interfered in their salt trade.", "The imposition of new land revenue demands.", "The famine of 1830."],
        correctAnswer: 0, // (a)
        explanation: "The Kolis were unemployed after the British dismantled the forts in the region.",
        subtopic: 'advanced',
        difficulty: 'Moderate'
    },
    {
        id: 35,
        question: "Who among the following was the leader of the \"Sambalpur Uprisings\" (1827–40) against British interference in succession?",
        options: ["Surendra Sai", "Madho Singh", "Tirat Singh", "Ratna Naik"],
        correctAnswer: 0, // (a)
        explanation: "Surendra Sai was the famous leader of the Sambalpur revolt.",
        subtopic: 'advanced',
        difficulty: 'Easy'
    }
];
