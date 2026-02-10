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

export const MODERN_CHAPTER_29_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "Early Efforts & Regulation (1780-1823)", status: 'done' },
    { id: '2', name: "Metcalfe & The Liberator (1835)", status: 'done' },
    { id: '3', name: "Vernacular Press Act (1878) - The Gagging Act", status: 'done' },
    { id: '4', name: "Newspapers as National Weapons (1880-1910)", status: 'done' },
    { id: '5', name: "Press Acts of 1908 & 1910", status: 'done' },
    { id: '6', name: "Press under Gandhi & WWII", status: 'done' },
];

export const MODERN_CHAPTER_29_MCQS: Question[] = [
    {
        id: 1,
        question: "Who started the first newspaper in India, 'The Bengal Gazette', in 1780?",
        options: ["James Augustus Hicky", "Lord Wellesley", "James Silk Buckingham", "Raja Rammohan Roy"],
        correctAnswer: 0,
        explanation: "James Augustus Hicky. It was also known as the Calcutta General Advertiser.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "The 'Censorship of Press Act, 1799' was passed by which Governor General?",
        options: ["Lord Cornwallis", "Lord Wellesley", "Lord Hastings", "Lord Amherst"],
        correctAnswer: 1,
        explanation: "Lord Wellesley, fearing French influence during the Napoleonic Wars.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "Who is known as the 'Liberator of the Indian Press'?",
        options: ["Lord Ripon", "Charles Metcalfe", "Lord Bentinck", "Lord Macaulay"],
        correctAnswer: 1,
        explanation: "Charles Metcalfe (1835) repealed the Licensing Regulations of 1823.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "The 'Vernacular Press Act' (1878) was aimed specifically at:",
        options: ["English language newspapers.", "Vernacular language newspapers (to curb seditious writing).", "All newspapers equally.", "Religious journals only."],
        correctAnswer: 1,
        explanation: "It exempted English newspapers, leading to 'Amrita Bazar Patrika' turning English overnight.",
        subtopic: '3',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 5,
        question: "Which Viceroy repealed the Vernacular Press Act in 1882?",
        options: ["Lord Lytton", "Lord Ripon", "Lord Dufferin", "Lord Curzon"],
        correctAnswer: 1,
        explanation: "Lord Ripon (The 'Good' Viceroy).",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "Which newspaper was edited by Bal Gangadhar Tilak to promote nationalism?",
        options: ["The Hindu", "Kesari (Marathi)", "Mahratta (English)", "Both (b) and (c)"],
        correctAnswer: 3,
        explanation: "Tilak edited both Kesari and Mahratta.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "Who was the first Indian journalist to be imprisoned for his profession?",
        options: ["Surendranath Banerjea", "B.G. Tilak", "Sisir Kumar Ghosh", "Dadabhai Naoroji"],
        correctAnswer: 0,
        explanation: "Surendranath Banerjea (1883) for his comments in 'The Bengalee'.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "The 'Indian Press Act, 1910' allowed the local government to:",
        options: ["Ban any book.", "Demand a security deposit from newspapers.", "Arrest editors without trial.", "Close down all presses."],
        correctAnswer: 1,
        explanation: "It was a way to financially cripple nationalist presses through security forfeitures.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "Which journal was started by Annie Besant to promote Home Rule?",
        options: ["New India", "Commonweal", "Young India", "Both (a) and (b)"],
        correctAnswer: 3,
        explanation: "Annie Besant started both New India and Commonweal.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "Gandhiji edited which of the following journals?",
        options: ["Indian Opinion (South Africa)", "Young India", "Harijan", "All of the above"],
        correctAnswer: 3,
        explanation: "Gandhi edited all three at different times.",
        subtopic: '6',
        cognitiveLevel: "Fact"
    }
];

export const MODERN_CHAPTER_29_CONTENT = `
# Chapter 29: Development of Indian Press

*Content to be added.*
`;


MODERN_CHAPTER_29_MCQS.push(
    {
        id: 11,
        question: "James Silk Buckingham, the editor of Calcutta Journal, is remembered in the history of the Indian press for:",
        options: ["Supporting the British government blindly.", "Introducing a new era of journalism focused on local grievances and being the first to link the press with the public.", "Passing the Gagging Act.", "Being the first Indian editor."],
        correctAnswer: 1,
        explanation: "He introduced higher standards and focused on people's problems.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 12,
        question: "The 'Licensing Regulations of 1823' were particularly harsh on which Indian reformer's journals?",
        options: ["Raja Rammohan Roy (Mirat-ul-Akbar)", "Ishwar Chandra Vidyasagar", "Keshub Chandra Sen", "Vivekananda"],
        correctAnswer: 0,
        explanation: "Rammohan Roy had to stop Mirat-ul-Akbar due to these regulations.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "Which Act was specifically passed to suppress the 'militant' mindset during the Swadeshi movement?",
        options: ["Newspapers (Incitement to Offences) Act, 1908", "Vernacular Press Act", "Metcalfe Act", "Official Secrets Act"],
        correctAnswer: 0,
        explanation: "The 1908 Act targeted papers like Yugantar and Sandhya.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 14,
        question: "Who was known as the 'Father of Indian Journalism'?",
        options: ["J.A. Hicky", "Raja Rammohan Roy", "Robert Knight", "G. Subramaniya Iyer"],
        correctAnswer: 1,
        explanation: "Rammohan Roy for using the press as a tool for social and political reform.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "The 'Hindu Patriot' was edited for a long time by:",
        options: ["Harish Chandra Mukherjee", "S.N. Banerjea", "G.K. Gokhale", "Motilal Ghosh"],
        correctAnswer: 0,
        explanation: "Harish Chandra Mukherjee, who valiantly supported the indigo peasants.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 16,
        question: "In 1878, which newspaper changed its language from Bengali to English overnight?",
        options: ["Somalprakash", "Amrita Bazar Patrika", "Sulabh Samachar", "Bharat Mihir"],
        correctAnswer: 1,
        explanation: "To escape the Vernacular Press Act.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "The 'Press Association of India' was formed in 1915 to:",
        options: ["Support the British war effort.", "Protect the rights of the press from the 1910 Act.", "Control the printing of books.", "None of the above."],
        correctAnswer: 1,
        explanation: "A response to the increasing repression under the 1910 Act.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "Who started the journal 'The Socialist', the first Marxist journal in India?",
        options: ["Muzaffar Ahmed", "S.A. Dange", "S.V. Ghate", "P.C. Joshi"],
        correctAnswer: 1,
        explanation: "S.A. Dange (1922).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "The 'Indian Press (Emergency Powers) Act, 1931' was a reaction to which movement?",
        options: ["Non-Cooperation", "Civil Disobedience Movement", "Quit India", "1857 Revolt"],
        correctAnswer: 1,
        explanation: "To suppress the propaganda during CDM.",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "During WWII, which committee was formed to deal with press censorship issues?",
        options: ["Press Advisory Committee", "Censorship Bureau", "Sapru Committee", "Lee Committee"],
        correctAnswer: 0,
        explanation: "Press Advisory Committees were established at central and provincial levels.",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "Which leader's arrest in 1897 for 'sedition' in his writings led to a nationwide protest and established the press as a tool of the struggle?",
        options: ["G.K. Gokhale", "B.G. Tilak", "Gandhi", "Lala Lajpat Rai"],
        correctAnswer: 1,
        explanation: "Tilak's arrest for his articles on Shivaji and Afzal Khan.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "The 'Englishman' was a newspaper representing the views of:",
        options: ["The INC", "The British officials and merchants in Calcutta (Ultra-conservative).", "The Landlords.", "The Peasants."],
        correctAnswer: 1,
        explanation: "It was an Anglo-Indian paper often critical of Indian aspirations.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "Who started the newspaper 'The Leader' in Allahabad?",
        options: ["Madan Mohan Malaviya", "Jawaharlal Nehru", "Motilal Nehru", "Tej Bahadur Sapru"],
        correctAnswer: 0,
        explanation: "Pandit Madan Mohan Malaviya.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "The 'Independent' was a newspaper started by:",
        options: ["C.R. Das", "Motilal Nehru", "Jawaharlal Nehru", "Sardar Patel"],
        correctAnswer: 1,
        explanation: "Motilal Nehru (1919).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "Match the personality with their journal:\nA. Abul Kalam Azad -> 1. Al-Hilal\nB. Muhammad Ali -> 2. Comrade\nC. Zafar Ali Khan -> 3. Zamindar\n\nSelect the correct code:",
        options: ["A-1, B-2, C-3", "A-2, B-1, C-3", "A-3, B-2, C-1", "A-1, B-3, C-2"],
        correctAnswer: 0,
        explanation: "Azad (Al-Hilal), Muhammad Ali (Comrade/Hamdard), Zafar Ali Khan (Zamindar).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "The 'Metcalfe Act' is formally known as:",
        options: ["Registration Act, 1835", "Press Act, 1835", "Licensing Act, 1835", "None of the above"],
        correctAnswer: 1,
        explanation: "Press Act of 1835.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "The 'Indian Press Inquiry Committee' (1947) was appointed to:",
        options: ["Ban the press.", "Review all existing press laws in the light of the new Constitution and fundamental rights.", "Control the news during partition.", "Censure the Muslim League press."],
        correctAnswer: 1,
        explanation: "To align laws with democratic values.",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 28,
        question: "Who was the first Indian to be the editor of an English daily?",
        options: ["G. Subramaniya Iyer", "Robert Knight", "Surendranath Banerjea", "K.P. Ghosh"],
        correctAnswer: 0,
        explanation: "G. Subramaniya Iyer (The Hindu) or optionally Girish Chandra Ghosh (Bengalee).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "Why did the British fear 'Vernacular' newspapers more than English ones?",
        options: ["They couldn't read them.", "They reached the common people who didn't know English.", "They were cheaper.", "They were religious."],
        correctAnswer: 1,
        explanation: "Vernacular papers had a deeper reach among the masses.",
        subtopic: '3',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 30,
        question: "The newspaper 'Voice of India' was started by:",
        options: ["Dadabhai Naoroji", "D.E. Wacha", "Ferozeshah Mehta", "All of the above"],
        correctAnswer: 0,
        explanation: "Dadabhai Naoroji.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "Who was the editor of 'The Tribune' in Lahore?",
        options: ["Dayal Singh Majeethia", "Lala Lajpat Rai", "Ajit Singh", "Bakshi Ram"],
        correctAnswer: 0,
        explanation: "Dayal Singh Majeethia (Founder).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "The 'National Herald' was started by:",
        options: ["Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Subhash Bose"],
        correctAnswer: 1,
        explanation: "Jawaharlal Nehru (1938).",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "Which Act required the printer to deposit two copies of each book with the government?",
        options: ["Registration Act, 1867", "Press Act, 1835", "Official Secrets Act", "None of the above"],
        correctAnswer: 0,
        explanation: "Press and Registration of Books Act, 1867.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "Who said 'The press is the fourth estate'?",
        options: ["Edmund Burke", "Macaulay", "Mill", "Marx"],
        correctAnswer: 0,
        explanation: "Edmund Burke in the British Parliament.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 35,
        question: "The 'Official Secrets Act' (1923) updated an earlier version primarily to:",
        options: ["Promote secrecy.", "Give the government more power to prosecute for anything it deemed 'secret' or harmful to its interests.", "Protect the soldiers.", "Abolish the press."],
        correctAnswer: 1,
        explanation: "Broadened the scope of espionage and disclosure rules.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    }
);
