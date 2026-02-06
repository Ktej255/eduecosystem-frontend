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

export const MODERN_CHAPTER_32_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "Rise of Trade Unionism After WWI", status: 'done' },
    { id: '2', name: "Formation of AITUC (1920)", status: 'done' },
    { id: '3', name: "The Trade Union Act, 1926", status: 'done' },
    { id: '4', name: "Communist Influence & Splits in AITUC", status: 'done' },
    { id: '5', name: "The Working Class During WWII & Independence", status: 'done' },
];

export const MODERN_CHAPTER_32_MCQS: Question[] = [
    {
        id: 1,
        question: "Who is considered the 'Father of the Trade Union Movement' in India?",
        options: ["B.P. Wadia", "N.M. Lokhande", "Lala Lajpat Rai", "V.V. Giri"],
        correctAnswer: 1,
        explanation: "N.M. Lokhande founded the Bombay Millhands Association in 1890.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "The first Factory Act in India was passed in which year?",
        options: ["1881", "1891", "1911", "1922"],
        correctAnswer: 0,
        explanation: "The Factory Act of 1881 primarily focused on child labor issues.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "The 'Madras Labour Union', formed in 1918, was led by:",
        options: ["N.M. Joshi", "B.P. Wadia", "Diwan Chaman Lall", "Joseph Baptista"],
        correctAnswer: 1,
        explanation: "It was the first clearly registered trade union in the modern sense.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "Who was the first President of the All India Trade Union Congress (AITUC)?",
        options: ["Jawaharlal Nehru", "Lala Lajpat Rai", "V.V. Giri", "C.R. Das"],
        correctAnswer: 1,
        explanation: "Lala Lajpat Rai was the first president at the Bombay session in 1920.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "The 'Textile Labour Association' in Ahmedabad was founded by:",
        options: ["N.M. Lokhande", "Anusuya Sarabhai", "Mahatma Gandhi", "Both (b) and (c)"],
        correctAnswer: 3,
        explanation: "It was based on Gandhi's theory of Trusteeship.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "The Trade Union Act, 1926, provided for:",
        options: ["Compulsory membership.", "Legal status and protection for registered trade unions.", "Ban on strikes.", "Minimum wage fixing."],
        correctAnswer: 1,
        explanation: "It allowed unions to be registered and provided immunity from civil and criminal liability in some cases.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "The 'Meerut Conspiracy Case' (1929) was directed against:",
        options: ["Landlords", "Communist and labor leaders", "British officers", "Congress leaders"],
        correctAnswer: 1,
        explanation: "It was an attempt by the British to suppress the rising influence of Communists in the labor movement.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "Who was the first General Secretary of AITUC?",
        options: ["Diwan Chaman Lall", "N.M. Joshi", "V.V. Giri", "S.A. Dange"],
        correctAnswer: 0,
        explanation: "Diwan Chaman Lall was the first General Secretary.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "Which ideological group led the split in AITUC at the Nagpur session (1929)?",
        options: ["Reformists (led by N.M. Joshi)", "Communists", "Congressites", "Gadhites"],
        correctAnswer: 0,
        explanation: "Differences over the issue of affiliation with international labor bodies led to the split.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 10,
        question: "The 'Bombay Millhands Association' (1890) was notable because it was:",
        options: ["A registered union.", "The first organization for workers in India.", "A political party.", "Led by the British."],
        correctAnswer: 1,
        explanation: "It was a pioneer organization, though not a union in the strictly modern legal sense.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    }
];

MODERN_CHAPTER_32_MCQS.push(
    {
        id: 11,
        question: "Which of the following acts for the first time regulated the hours of work for women?",
        options: ["Factory Act, 1881", "Factory Act, 1891", "Trade Union Act, 1926", "None"],
        correctAnswer: 1,
        explanation: "The 1891 Act limited women's work to 11 hours per day.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "The 'Royal Commission on Labour' (1929) was chaired by:",
        options: ["Lord Whitley", "Lord Curzon", "Lord Irwin", "Stafford Cripps"],
        correctAnswer: 0,
        explanation: "Commonly known as the Whitley Commission.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "Which leader founded the 'All India Red Trade Union Congress'?",
        options: ["N.M. Joshi", "Deshpande and B.T. Ranadive", "V.V. Giri", "Subhash Bose"],
        correctAnswer: 1,
        explanation: "Formed by Communists after the 1931 split in AITUC.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 14,
        question: "The 'Indian National Trade Union Congress' (INTUC) was formed in 1947 by:",
        options: ["Communist Party", "The Congress Party (Sardar Patel and others)", "Socialists", "British Government"],
        correctAnswer: 1,
        explanation: "To give the labor movement a nationalist and non-communist direction.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "The 'Hind Mazdoor Sabha' (1948) was associated with:",
        options: ["The Socialist Party", "The Congress", "The RSS", "The Forward Bloc"],
        correctAnswer: 0,
        explanation: "Formed by socialists like Ashok Mehta and others.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 16,
        question: "The 'Girni Kamgar Union' was a powerful union of ______ workers in Bombay.",
        options: ["Railway", "Textile", "Mining", "Port"],
        correctAnswer: 1,
        explanation: "It was led by communists and was very active in the late 1920s.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "Why were the early nationalists (Moderates) initially indifferent to factory acts?",
        options: ["They hated workers.", "They feared it was a British plot to increase the cost of Indian production and help Lancashire.", "They were all mill owners.", "None of the above."],
        correctAnswer: 1,
        explanation: "They saw these acts as an attempt to stifle late-blooming Indian industry.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 18,
        question: "The AITUC's first session goal was described as:",
        options: ["Communist Revolution.", "To coordinate the activities of all labor organizations in India.", "To join the British Parliament.", "To ban all mills."],
        correctAnswer: 1,
        explanation: "It acted as an umbrella body for the nascent labor movement.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 19,
        question: "The 'Public Safety Bill' (1928) was mainly aimed at:",
        options: ["Stopping crime.", "Curbing the activities of communists and foreign subversives in the labor movement.", "Protecting factory owners.", "None of the above."],
        correctAnswer: 1,
        explanation: "Its rejection led to Bhagat Singh and Batukeshwar Dutt throwing bombs in the Assembly.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "Who was the president of AITUC during the 1929 Nagpur split?",
        options: ["Jawaharlal Nehru", "Subhash Bose", "N.M. Joshi", "S.A. Dange"],
        correctAnswer: 0,
        explanation: "Nehru presided over the historic session where the rift became permanent.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "What was Gandhi's main contribution to the Ahmedabad labor strike (1918)?",
        options: ["He provided weapons.", "He introduced the concept of Satyagraha and Hunger Strike to labor disputes.", "He asked the British to intervene.", "None."],
        correctAnswer: 1,
        explanation: "His intervention led to a settlement on the plague bonus issue.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 22,
        question: "The AITUC was affiliated with which international body in its early years?",
        options: ["Red International of Labour Unions (Profintern)", "International Federation of Trade Unions (IFTU)", "Both (a) and (b)", "None"],
        correctAnswer: 2,
        explanation: "Different factions favored different international affiliations.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "The 'Trade Disputes Act, 1929' made which of the following illegal?",
        options: ["Sympathetic strikes and strikes in public utility services without notice.", "All strikes.", "All lockouts.", "Registration of new unions."],
        correctAnswer: 0,
        explanation: "It aimed to restrict the workers' strike power.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "During the 'Quit India Movement', the working class in which city showed the most remarkable resistance?",
        options: ["Ahmedabad", "Jamshedpur", "Bombay", "All of the above"],
        correctAnswer: 3,
        explanation: "Strikes were widespread in major industrial hubs.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "Which leader is associated with the 'United Trades Union Congress' (UTGC)?",
        options: ["K.T. Shah", "Mrinal Kanti Bose", "V.V. Giri", "Sardar Patel"],
        correctAnswer: 1,
        explanation: "Formed in 1949 as another splinter group.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "The 'Bharatiya Mazdoor Sangh' (BMS) was founded by:",
        options: ["Dattopant Thengadi", "S.A. Dange", "V.V. Giri", "Ashok Mehta"],
        correctAnswer: 0,
        explanation: "Founded in 1955, aligned with RSS ideology.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "Gandhi's theory of 'Trusteeship' in labor relations meant:",
        options: ["Capitalists should own everything.", "Workers and owners should see themselves as partners, with owners holding wealth in trust for society.", "The state should own all factories.", "Elimination of the capitalist class."],
        correctAnswer: 1,
        explanation: "It was a uniquely non-confrontational approach to industrial relations.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 28,
        question: "AITUC became a primary organ of which political party in the post-1945 era?",
        options: ["Indian National Congress", "Communist Party of India (CPI)", "Muslim League", "Socialist Party"],
        correctAnswer: 1,
        explanation: "The Congress formed INTUC to counter CPI's control of AITUC.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "The 'First Labour Member' of the Viceroy’s Executive Council was:",
        options: ["B.R. Ambedkar", "N.M. Joshi", "V.V. Giri", "Jagjivan Ram"],
        correctAnswer: 0,
        explanation: "Ambedkar held this post during WWII.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "The main grievances of the early 20th-century workers were:",
        options: ["Long working hours.", "Low wages and poor working conditions.", "Lack of housing and health facilities.", "All of the above."],
        correctAnswer: 3,
        explanation: "The industrial revolution in India was characterized by intense exploitation.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 31,
        question: "Who founded the 'All India Railwaymen's Federation' (AIRF)?",
        options: ["V.V. Giri", "N.M. Joshi", "Rai Saheb Chandrika Prasad", "All of the above"],
        correctAnswer: 3,
        explanation: "Various leaders contributed to the unification of railway workers.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "The emergence of 'Communism' in the 1920s in India was closely linked to:",
        options: ["The success of the Russian Revolution.", "Intense economic hardship post-WWI.", "Inadequacy of Moderate politics for the masses.", "All of the above."],
        correctAnswer: 3,
        explanation: "It provided a radical alternative to the nationalist struggle.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 33,
        question: "Which of the following describes the 'Modus Operandi' of communist labor leaders in the late 1920s?",
        options: ["Secret meetings only.", "Intense unionization, mass strikes, and radical slogans.", "Cooperation with the British.", "None of the above."],
        correctAnswer: 1,
        explanation: "They transformed the AITUC into a militant body for a period.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 34,
        question: "Which of the following acts established the concept of 'Works Committees' to resolve employee-employer issues?",
        options: ["Industrial Disputes Act, 1947", "Trade Union Act, 1926", "Factory Act, 1948", "None"],
        correctAnswer: 0,
        explanation: "A landmark act for industrial relations in independent India.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 35,
        question: "The 'Centre of Indian Trade Unions' (CITU) is associated with which party?",
        options: ["CPI", "CPI (M)", "Congress", "BJP"],
        correctAnswer: 1,
        explanation: "Formed in 1970 after the split in the Communist party.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    }
);
