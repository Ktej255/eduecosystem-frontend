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

export const MODERN_CHAPTER_24_SUBTOPICS = [
    { id: 1, name: "19th Century Movements (Indigo, Pabna, Deccan)", status: 'todo' },
    { id: 2, name: "20th Century Movements (Kisan Sabhas, Eka, Bardoli)", status: 'todo' },
    { id: 3, name: "Movements in 1930s & 40s (AIKS, Tebhaga, Telangana)", status: 'todo' },
];

export const MODERN_CHAPTER_24_MCQS = [
    {
        id: 1,
        question: "The 'Indigo Revolt' in Bengal (1859-60) was directed against:",
        options: ["The British Government's land revenue policy.", "The European Planters who forced peasants to grow indigo under severe oppression.", "The Indian Zamindars who increased the rent.", "The Moneylenders who charged high interest."],
        correctAnswer: 1,
        explanation: "European Planters forced peasants to grow indigo at unremunerative prices.",
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "Who among the following leaders led the Indigo Revolt in the Nadia district of Bengal?",
        options: ["Baba Ramchandra and Madari Pasi", "Digambar Biswas and Bishnu Biswas", "Ishan Chandra Roy and Shambhu Pal", "Titumir and Dudu Mian"],
        correctAnswer: 1,
        explanation: "Digambar and Bishnu Biswas of Nadia district.",
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "The role of the 'Intelligentsia' in the Indigo Revolt was unique because:",
        options: ["They stayed away from the movement.", "They supported the planters.", "They actively supported the peasants by organizing meetings, writing in newspapers, and preparing legal briefs.", "They tried to mediate but failed."],
        correctAnswer: 2,
        explanation: "Unlike the Revolt of 1857, the intelligentsia actively supported the Indigo Revolt.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 4,
        question: "Who was the editor of the newspaper 'The Hindu Patriot', which fiercely advocated the cause of the Indigo peasants?",
        options: ["Sisir Kumar Ghosh", "Harish Chandra Mukherjee", "Dinabandhu Mitra", "Surendranath Banerjea"],
        correctAnswer: 1,
        explanation: "Harish Chandra Mukherjee (Hindu Patriot).",
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "The play 'Neel Darpan' (Mirror of Indigo) depicting the atrocities of the planters was written by:",
        options: ["Bankim Chandra Chattopadhyay", "Dinabandhu Mitra", "Rabindranath Tagore", "Michael Madhusudan Dutt"],
        correctAnswer: 1,
        explanation: "Dinabandhu Mitra. (Translated into English by Michael Madhusudan Dutt).",
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "The 'Pabna Agrarian Leagues' (1873-85) in East Bengal were formed to resist:",
        options: ["The Indigo Planters.", "The enhanced rents and eviction attempts by the Zamindars.", "The British land survey officers.", "The Christian missionaries."],
        correctAnswer: 1,
        explanation: "Against the Zamindars' oppression (enhanced rent).",
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "What was the unique political stance of the Pabna peasants?",
        options: ["They wanted to overthrow the British rule.", "They wanted to be the 'Ryots of Her Majesty the Queen' and not of the Zamindars.", "They demanded a separate state.", "They refused to pay any tax."],
        correctAnswer: 1,
        explanation: "They were not anti-British but anti-Zamindar. They famously said they wanted to be Ryots of the Queen.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 8,
        question: "The 'Deccan Riots' of 1875 in Pune and Ahmednagar were primarily directed against:",
        options: ["The British Collector.", "The Marwari and Gujarati moneylenders.", "The Deshmukhs and Patils.", "The Forest Department."],
        correctAnswer: 1,
        explanation: "Moneylenders (Marwari/Gujarati) who grabbed land using debt traps.",
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "The 'Deccan Agriculturists Relief Act' was passed in:",
        options: ["1858", "1879", "1885", "1905"],
        correctAnswer: 1,
        explanation: "1879. It restricted the sale of peasants' land to non-agriculturists.",
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "Who among the following provided legal assistance to the peasants during the Deccan Riots through the Poona Sarvajanik Sabha?",
        options: ["Bal Gangadhar Tilak", "M.G. Ranade", "Dadabhai Naoroji", "G.K. Gokhale"],
        correctAnswer: 1,
        explanation: "M.G. Ranade (Poona Sarvajanik Sabha).",
        cognitiveLevel: "Fact"
    },
    {
        id: 11,
        question: "The 'UP Kisan Sabha' was set up in 1918 by:",
        options: ["Baba Ramchandra", "Gauri Shankar Mishra, Indra Narayan Dwivedi, and Madan Mohan Malaviya", "Jawaharlal Nehru and Baba Ramchandra", "Madari Pasi"],
        correctAnswer: 1,
        explanation: "Gauri Shankar Mishra, Indra Narayan Dwivedi, and Malaviya. (Set up in Feb 1918).",
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "'Baba Ramchandra', who organized the peasants in Awadh (1920), was originally from:",
        options: ["Uttar Pradesh", "Maharashtra", "Fiji (Indentured Laborer)", "Bihar"],
        correctAnswer: 1,
        explanation: "Baba Ramchandra was from Maharashtra but had been to Fiji as an indentured laborer.",
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "The 'Eka Movement' (Unity Movement) in 1921 was different from the earlier Kisan Sabha movement because:",
        options: ["It was led by lower-caste leaders like Madari Pasi and included small tenants.", "It was completely non-violent.", "It was led by the Congress leadership.", "It demanded the abolition of the British Raj."],
        correctAnswer: 0,
        explanation: "It involved low caste tenants and small zamindars, led by Madari Pasi. It was more militant.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 14,
        question: "The main grievance of the Eka Movement was:",
        options: ["Indigo cultivation.", "Extraction of rent that was 50% higher than the recorded rent.", "Forced conversion.", "Restriction on forest produce."],
        correctAnswer: 1,
        explanation: "Rent was 50% higher than recorded rates.",
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "The immediate cause of the 'Bardoli Satyagraha' (1928) was:",
        options: ["An increase in land revenue by 22% (later 30%) despite a fall in cotton prices.", "The arrest of Gandhi.", "The Rowlatt Act.", "The seizure of grazing lands."],
        correctAnswer: 0,
        explanation: "22% hike (initially 30%) in revenue by the Bombay government despite poor cotton prices.",
        cognitiveLevel: "Fact"
    },
    {
        id: 16,
        question: "Vallabhbhai Patel received the title of 'Sardar' from:",
        options: ["Mahatma Gandhi", "The women of Bardoli", "Jawaharlal Nehru", "Subhash Chandra Bose"],
        correctAnswer: 1,
        explanation: "Women of Bardoli gave him the title 'Sardar'.",
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "The social reform aspect of the Bardoli movement involved the upliftment of the 'Kaliparaj' (Dark people). Gandhiji renamed them:",
        options: ["Harijan", "Raniparaj (People of the forest)", "Girijan", "Adivasi"],
        correctAnswer: 1,
        explanation: "Raniparaj (People of the forest), to remove the stigma of 'Kaliparaj' (Dark people).",
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "Who were the two officials appointed to the Inquiry Committee (Maxwell-Broomfield) which vindicated the peasants' stand in Bardoli?",
        options: ["Broomfield and Maxwell", "Irwin and Gandhi", "Simon and Attlee", "Peel and Strachey"],
        correctAnswer: 0,
        explanation: "Maxwell and Broomfield. They admitted the hike was unjustified and reduced it to 6.03%.",
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "The 'All India Kisan Sabha' (AIKS) was founded in 1936 at:",
        options: ["Lucknow", "Faizpur", "Patna", "Vijayawada"],
        correctAnswer: 0,
        explanation: "Lucknow (April 1936).",
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "Who was elected as the first President and General Secretary of the AIKS respectively?",
        options: ["N.G. Ranga and Sahajanand Saraswati", "Swami Sahajanand Saraswati and N.G. Ranga", "Indulal Yagnik and Baba Ramchandra", "Jawaharlal Nehru and Jayaprakash Narayan"],
        correctAnswer: 1,
        explanation: "Swami Sahajanand (President) and N.G. Ranga (Gen Sec).",
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "The 'Kisan Manifesto' adopted by the AIKS in 1937 demanded:",
        options: ["Abolition of Zamindari and cancellation of rural debts.", "Protection of moneylenders.", "Commercialization of agriculture.", "Increase in land revenue."],
        correctAnswer: 0,
        explanation: "Abolition of Zamindari and debt cancellation.",
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "Who edited the periodical 'Kisan Bulletin' started by the AIKS?",
        options: ["Indulal Yagnik", "N.G. Ranga", "Rahul Sankrityayan", "P.C. Joshi"],
        correctAnswer: 0,
        explanation: "Indulal Yagnik.",
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "The 'Tebhaga Movement' (1946) in Bengal was a struggle by sharecroppers (Bargadars) to:",
        options: ["Retain 2/3rds of the produce for themselves instead of the traditional 1/2.", "Demand ownership of land.", "Refuse to pay any share to the Jotedars.", "Stop Indigo cultivation."],
        correctAnswer: 0,
        explanation: "Demand for two-thirds (Tebhaga) share for the tiller.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 24,
        question: "The Tebhaga Movement was based on the recommendations of which commission?",
        options: ["Simon Commission", "Floud Commission", "Royal Commission on Agriculture", "Fowler Commission"],
        correctAnswer: 1,
        explanation: "Floud Commission (Bengal Land Revenue Commission).",
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "The 'Telangana Movement' (1946-51) in Hyderabad state was primarily directed against:",
        options: ["The British Governor.", "The Deshmukhs/Jagirdars and the practice of 'Vetti' (forced labor).", "The Congress Party.", "The influx of refugees."],
        correctAnswer: 1,
        explanation: "Against Vetti (forced labor) and feudal oppression by Deshmukhs.",
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "The 'Varli Adivasi Revolt' (1945) in Maharashtra was led by:",
        options: ["Godavari Parulekar", "Rani Gaidinliu", "Alluri Sitarama Raju", "Jaipal Singh"],
        correctAnswer: 0,
        explanation: "Godavari Parulekar (Kisan Sabha).",
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "The 'Punnapra-Vayalar' uprising (1946) took place in:",
        options: ["Travancore", "Malabar", "Hyderabad", "Bengal"],
        correctAnswer: 0,
        explanation: "Travancore.",
        cognitiveLevel: "Fact"
    },
    {
        id: 28,
        question: "Arrange the following peasant movements in chronological order:\n1. Indigo Revolt\n2. Bardoli Satyagraha\n3. Deccan Riots\n4. Eka Movement",
        options: ["1-3-4-2", "1-3-2-4", "3-1-4-2", "1-2-3-4"],
        correctAnswer: 0,
        explanation: "Indigo (1859) -> Deccan (1875) -> Eka (1921) -> Bardoli (1928).",
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "Match the Leader with the Movement:\nA. Baba Ramchandra - 1. Awadh Kisan Sabha\nB. Madari Pasi - 2. Eka Movement\nC. Swami Sahajanand - 3. All India Kisan Sabha\nD. Digambar Biswas - 4. Indigo Revolt",
        options: ["A-1, B-2, C-3, D-4", "A-2, B-1, C-3, D-4", "A-1, B-3, C-2, D-4", "A-4, B-3, C-2, D-1"],
        correctAnswer: 0,
        explanation: "All pairs correctly matched.",
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "Which of the following movements was known as the 'first successful Satyagraha' led by Gandhi in India?",
        options: ["Kheda", "Bardoli", "Champaran", "Ahmedabad"],
        correctAnswer: 2,
        explanation: "Champaran.",
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "The 'Bakasht Land' movement (1930s-40s) in Bihar was related to:",
        options: ["Lands confiscated by the British.", "Self-cultivated lands of the Zamindars which tenants lost due to non-payment of rent during depression.", "Forest lands.", "Temple lands."],
        correctAnswer: 1,
        explanation: "Bakasht lands were those resumed by Zamindars from tenants for non-payment of rent. The movement was to get them back.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 32,
        question: "Who among the following was a prominent peasant leader from Andhra, known for the 'Anti-Zamindari Struggle' and establishing the 'Indian Peasants' Institute'?",
        options: ["N.G. Ranga", "T. Prakasam", "P. Sundarayya", "Alluri Sitarama Raju"],
        correctAnswer: 0,
        explanation: "N.G. Ranga.",
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "The 'Kheda Satyagraha' was organized by Gandhi, but the actual groundwork was done by:",
        options: ["Mohanlal Pandya and Shankarlal Banker", "Vallabhbhai Patel and Indulal Yagnik", "Mahadev Desai and Narhari Parekh", "All of the above"],
        correctAnswer: 3,
        explanation: "All of them were Gandhi's lieutenants in Kheda.",
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "The 'Forest Satyagraha' involving the Gonds and Kolis was a major feature of the Civil Disobedience Movement in:",
        options: ["Bengal", "Central Provinces (CP)", "Punjab", "Assam"],
        correctAnswer: 1,
        explanation: "Central Provinces (and Maharashtra/Karnataka).",
        cognitiveLevel: "Fact"
    },
    {
        id: 35,
        question: "'Land to the Tiller' became the slogan of which movement?",
        options: ["Champaran", "Tebhaga", "Telangana", "Eka"],
        correctAnswer: 2,
        explanation: "Telangana Movement. (Also Tebhaga implies it, but Telangana was the armed struggle for land).",
        cognitiveLevel: "Fact"
    }
];
