export interface Subtopic {
    id: string;
    name: string;
    status?: string;
}

export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    subtopic: string;
    cognitiveLevel?: string;
}

export const MODERN_CHAPTER_31_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "Early Uprisings (BENGAL to Deccan)", status: 'done' },
    { id: '2', name: "Kisan Sabhas & Eka Movement (1920s)", status: 'done' },
    { id: '3', name: "Bardoli Satyagraha & Vallabhbhai Patel", status: 'done' },
    { id: '4', name: "All India Kisan Sabha (AIKS) - 1936", status: 'done' },
    { id: '5', name: "Peasant Movements during WWII & Quit India", status: 'done' },
    { id: '6', name: "Tebhaga, Telangana & Punnapra-Vayalar", status: 'done' },
];

export const MODERN_CHAPTER_31_MCQS: Question[] = [
    {
        id: 1,
        question: "The 'Indigo Revolt' (1859-60) was against which of the following?",
        options: ["Land revenue tax.", "Forced cultivation of indigo by British planters.", "Salt tax.", "Zamindari system."],
        correctAnswer: 1,
        explanation: "Planters forced peasants to grow indigo under illegal/coercive contracts.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "Who were the leaders of the Indigo Revolt in Nadia district?",
        options: ["Digambar Biswas and Bishnu Biswas", "Siddhu and Kanhu", "Birsa Munda", "Titu Mir"],
        correctAnswer: 0,
        explanation: "Digambar and Bishnu Biswas of Govindpur village.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "The 'Pabna Agrarian League' (1873) in Bengal was primarily against:",
        options: ["The British government.", "High land revenue and enhancement of rents by Zamindars.", "Forest laws.", "Indigo cultivation."],
        correctAnswer: 1,
        explanation: "It was an'anti-zamindar' movement by legal means.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "The 'Deccan Riots' (1875) were directed against whom?",
        options: ["The British officials.", "The Gujarati and Marwari moneylenders.", "The Peshwa.", "The Nizam."],
        correctAnswer: 1,
        explanation: "Peasants in Pune and Ahmednagar attacked the houses and shops of moneylenders.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "Which Act was passed to provide relief to the peasants after the Deccan Riots?",
        options: ["Deccan Agriculturists' Relief Act, 1879", "Punjab Land Alienation Act", "Zamindari Abolition Act", "Rent Act"],
        correctAnswer: 0,
        explanation: "Deccan Agriculturists' Relief Act, 1879.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "The 'Eka Movement' (1921) in Oudh was led by:",
        options: ["Baba Ramchandra", "Madari Pasi", "Sahajanand Saraswati", "N.G. Ranga"],
        correctAnswer: 1,
        explanation: "Madari Pasi and other low-caste leaders.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "Who was the principal leader behind the formation of the 'Oudh Kisan Sabha' in 1920?",
        options: ["Jawaharlal Nehru", "Baba Ramchandra", "Gauri Shankar Misra", "All of the above"],
        correctAnswer: 1,
        explanation: "Baba Ramchandra, a sanyasi who lived among the peasants.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "The 'Bardoli Satyagraha' (1928) was caused by:",
        options: ["A 22% hike in land revenue by the government.", "Forced indigo cultivation.", "Communal riots.", "Shortage of seeds."],
        correctAnswer: 0,
        explanation: "Peasants refused to pay the enhanced revenue.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "After the successful Bardoli Satyagraha, who gave Vallabhbhai Patel the title of 'Sardar'?",
        options: ["Mahatma Gandhi", "The women of Bardoli", "Jawaharlal Nehru", "Vithalbhai Patel"],
        correctAnswer: 1,
        explanation: "The title was given by the women of Bardoli.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "The 'All India Kisan Sabha' (1936) was founded at its first session in:",
        options: ["Lucknow", "Patna", "Faizpur", "Calcutta"],
        correctAnswer: 0,
        explanation: "Lucknow session of Congress (1936).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    }
];

MODERN_CHAPTER_31_MCQS.push(
    {
        id: 11,
        question: "Who was the first President of the All India Kisan Sabha?",
        options: ["Swami Sahajanand Saraswati", "N.G. Ranga", "Indulal Yagnik", "Bankim Mukherji"],
        correctAnswer: 0,
        explanation: "Swami Sahajanand Saraswati. N.G. Ranga was the General Secretary.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "The 'Tebhaga Movement' (1946) in Bengal demanded:",
        options: ["Abolition of Zamindari.", "Two-thirds share of the harvest for the sharecroppers (Bargadars) instead of half.", "Free land for the landless.", "Reduction in land revenue."],
        correctAnswer: 1,
        explanation: "Tebhaga = Three shares (Peasant keeps 2/3, Zamindar gets 1/3).",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "The 'Telangana Movement' (1946-51) was directed against:",
        options: ["The British.", "The Nizam's officials and the local landlords (Deshmukhs/Vetti system).", "The Maratha raiders.", "The French."],
        correctAnswer: 1,
        explanation: "It was a massive peasant insurrection against the Nizam's feudal structure.",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 14,
        question: "What was the 'Vetti' system?",
        options: ["A system of crop sharing.", "Forced labor without pay.", "A type of tax.", "A land survey technique."],
        correctAnswer: 1,
        explanation: "Forced unpaid labor common in princely states like Hyderabad.",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "Which peasant movement used the slogan 'He who tills the land, shall own the land'?",
        options: ["Champaran", "Telangana", "Tebhaga", "Kalyan Singh Revolt"],
        correctAnswer: 1,
        explanation: "Prominent during the radical phase of Telangana struggle.",
        subtopic: '6',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 16,
        question: "The 'Bakasht' land dispute (1930s-40s) was a major issue in which province?",
        options: ["UP", "Bihar", "Punjab", "Bengal"],
        correctAnswer: 1,
        explanation: "Bakasht were lands the Zamindars had taken back from tenants due to inability to pay rent during the Depression.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "Who among the following was a key leader of the peasant movement in Andhra and wrote 'Economic Conditions of the Zamindari Ryots'?",
        options: ["P. Sundarayya", "N.G. Ranga", "A.K. Gopalan", "E.M.S. Namboodiripad"],
        correctAnswer: 1,
        explanation: "N.G. Ranga was a pioneer of peasant organization in Andhra.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "The 'Moplah (Mapilla) Rebellion' of 1921 occurred in:",
        options: ["Malabar (Kerala)", "Coastal Andhra", "Tamil Nadu", "Karnataka"],
        correctAnswer: 0,
        explanation: "Muslim tenants (Moplahs) against Hindu landlords and British administration.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "Initially, the Moplah rebellion was an integral part of which nationwide movement?",
        options: ["Swadeshi", "Non-Cooperation & Khilafat Movement", "Civil Disobedience", "Quit India"],
        correctAnswer: 1,
        explanation: "It later took a communal turn.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "The 'Punnapra-Vayalar' uprising took place in which princely state?",
        options: ["Hyderabad", "Travancore", "Mysore", "Gwalior"],
        correctAnswer: 1,
        explanation: "Travancore (1946), led by communists.",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "The 'Pagalpanti' movement (1820s-30s) in Bengal was a religious-peasant movement among:",
        options: ["Santhals", "Garos and Hajongs", "Mundas", "Kols"],
        correctAnswer: 1,
        explanation: "Led by Karam Shah and Tipu Shah.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "Why was the 'Kisan Sabha' movement so strong in UP between 1918-1922?",
        options: ["The presence of Baba Ramchandra.", "High rents and 'Bedakhli' (Eviction).", "Support from Home Rule League members like Malaviya.", "All of the above."],
        correctAnswer: 3,
        explanation: "All factors contributed to the strength of Oudh Kisan Sabha.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 23,
        question: "The 'Faizpur Session' (1936) of the Congress was significant for peasants because:",
        options: ["It was the first session held in a rural area.", "It adopted an Agrarian Programme.", "It demanded the abolition of Intermediate tenures.", "All of the above."],
        correctAnswer: 3,
        explanation: "Held in a village, it focused on peasant needs.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "Peasant movements in the 1930s were strongly influenced by which ideology?",
        options: ["Gandhism alone.", "Socialism and Communism.", "Capitalism.", "Religious fundamentalism."],
        correctAnswer: 1,
        explanation: "Leaders like Sahajanand, N.G. Ranga, and E.M.S. were left-leaning.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 25,
        question: "Match the leader with the region:\nA. Sahajanand Saraswati -> 1. Bihar\nB. N.G. Ranga -> 2. Andhra\nC. Nana Patil -> 3. Satara (Maharashtra)\n\nSelect the correct code:",
        options: ["A-1, B-2, C-3", "A-2, B-1, C-3", "A-3, B-2, C-1", "A-1, B-3, C-2"],
        correctAnswer: 0,
        explanation: "Sahajanand (Bihar), N.G. Ranga (Andhra), Nana Patil (Satara - Prati Sarkar).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "Which of the following was NOT a characteristic of peasant movements in the first half of the 20th century?",
        options: ["Integration with the national freedom struggle.", "Organized through Kisan Sabhas.", "Requirement for complete non-attachment from the Congress.", "Transition from localized to all-India platforms."],
        correctAnswer: 2,
        explanation: "They were increasingly integrated with the Congress or the Left.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 27,
        question: "The 'Worli Revolt' (1945) was a tribal-peasant struggle in which province?",
        options: ["Bihar", "Bombay", "Bengal", "Central Provinces"],
        correctAnswer: 1,
        explanation: "Worli tribals in Thane (led by AIKS and Godavari Parulekar).",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 28,
        question: "Who was the 'General Secretary' of the All India Kisan Sabha at its inception?",
        options: ["Sahajanand Saraswati", "N.G. Ranga", "Indulal Yagnik", "P.C. Joshi"],
        correctAnswer: 1,
        explanation: "N.G. Ranga.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "Which Viceroy described the peasant problem in India as the 'Achilles heel' of British rule?",
        options: ["Lord Linlithgow", "Lord Wavell", "Lord Irwin", "Lord Willingdon"],
        correctAnswer: 0,
        explanation: "Recognizing that rural misery was the fodder for nationalist mobilization.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "The 'Bijolia Movement' (1905-1920) was a famous peasant struggle in which state?",
        options: ["Punjab", "Rajasthan (Mewar)", "Gujarat", "MP"],
        correctAnswer: 1,
        explanation: "One of the longest organized peasant movements in India.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "Who wrote 'Neel Darpan' to highlight the plight of Indigo peasants?",
        options: ["Bankim Chandra", "Dinabandhu Mitra", "R.C. Dutt", "G.K. Gokhale"],
        correctAnswer: 1,
        explanation: "Dinabandhu Mitra (1860).",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "The 'Kayyur Riot' (1941) was related to peasant resistance in:",
        options: ["Madras", "Kasargod (Malabar)", "Surat", "Patna"],
        correctAnswer: 1,
        explanation: "Peasant resistance against the 'Feudal-cum-Colonial' rule.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "The 'Kisan Manifesto' was adopted in which year by AIKS?",
        options: ["1936", "1937", "1939", "1942"],
        correctAnswer: 1,
        explanation: "1937 (Lucknow-Faizpur timeline).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "The 'No-Tax' movements in Surat district in 1923 were a precursor to:",
        options: ["Salt Satyagraha", "Bardoli Satyagraha", "Quit India", "Independence"],
        correctAnswer: 1,
        explanation: "Successful mobilization led by Patel.",
        subtopic: '3',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 35,
        question: "The primary success of the 19th-century peasant uprisings was that they:",
        options: ["Abolished British rule.", "Forced the British to pass various Tenancy Acts and Rent Acts for protection.", "Distributed land to everyone.", "None of the above."],
        correctAnswer: 1,
        explanation: "They forced the colonial state into legislative action for peasant protection.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    }
);
