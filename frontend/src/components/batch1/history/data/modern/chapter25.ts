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

export const MODERN_CHAPTER_25_SUBTOPICS = [
    { id: 1, name: "Early Phase (1850–1900): Factory Acts", status: 'todo' },
    { id: 2, name: "Rise of Trade Unions (1900–1920)", status: 'todo' },
    { id: 3, name: "Formation of AITUC (1920)", status: 'todo' },
    { id: 4, name: "Splits, Communism & Meerut Case", status: 'todo' },
    { id: 5, name: "Legislation (1926 & 1929)", status: 'todo' },
];

export const MODERN_CHAPTER_25_MCQS = [
    {
        id: 1,
        question: "Who is considered the 'Father of the Trade Union Movement in India' for organizing the Bombay Mill and Millhands Association (1890)?",
        options: ["Sorabji Shapoorji Bengalee", "N.M. Lokhande", "Sasipada Banerjee", "B.P. Wadia"],
        correctAnswer: 1,
        explanation: "N.M. Lokhande. He organized the first agitation (signature campaign) and the first loose association.",
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "The 'First Factory Act' (1881) primarily dealt with:",
        options: ["The working hours of women.", "The problem of child labor (prohibited employment below 7 years).", "Accidental insurance.", "Minimum wages."],
        correctAnswer: 1,
        explanation: "Child Labor. Banned employment below 7 years and limited hours for children (7-12) to 9 hours.",
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "The Factory Act of 1891 extended the regulations to include:",
        options: ["A weekly holiday for all workers.", "Maternity leave.", "Pension rights.", "Right to strike."],
        correctAnswer: 0,
        explanation: "Weekly Holiday. (Also fixed women's hours at 11 per day).",
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "'Sasipada Banerjee' founded which organization in 1870 to educate and uplift the workers?",
        options: ["Working Men’s Club", "Social Service League", "Seva Sadan", "Atmiya Sabha"],
        correctAnswer: 0,
        explanation: "Working Men's Club (1870) in Bengal.",
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "Why did the early nationalists (Moderates) NOT actively support the factory acts or labour laws initially?",
        options: ["They were pro-British.", "They feared that labour laws would hurt the infant Indian industries (owned by Indians) which were competing against British manufacturers.", "They hated the working class.", "They believed in the caste system."],
        correctAnswer: 1,
        explanation: "They feared it would raise the cost of production for Indian-owned mills (like in Bombay) which were competing with Manchester.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 6,
        question: "Which was the first clearly registered trade union in India (1918)?",
        options: ["Bombay Millhands Association", "Madras Labour Union", "All India Trade Union Congress", "Textile Labour Association"],
        correctAnswer: 1,
        explanation: "Madras Labour Union (1918) by B.P. Wadia.",
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "Who founded the 'Madras Labour Union' in 1918?",
        options: ["T.V. Kalyanasundaram", "B.P. Wadia", "V.O. Chidambaram Pillai", "C. Rajagopalachari"],
        correctAnswer: 1,
        explanation: "B.P. Wadia.",
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "The 'Textile Labour Association' (TLA) or Majur Mahajan Sangh was founded in Ahmedabad (1920) by:",
        options: ["Anusuya Sarabhai and Mahatma Gandhi", "N.M. Joshi", "S.A. Dange", "Vallabhbhai Patel"],
        correctAnswer: 0,
        explanation: "Anusuya Sarabhai (with Gandhi's guidance).",
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "Gandhi’s approach to trade unions was based on the theory of:",
        options: ["Class Struggle", "Trusteeship (Capitalists are trustees of workers' interests)", "Laissez-faire", "Dictatorship of the Proletariat"],
        correctAnswer: 1,
        explanation: "Trusteeship. (Class collaboration, not conflict).",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 10,
        question: "The 'All India Trade Union Congress' (AITUC) was founded in 1920 at:",
        options: ["Calcutta", "Bombay", "Madras", "Kanpur"],
        correctAnswer: 1,
        explanation: "Bombay (Oct 31, 1920).",
        cognitiveLevel: "Fact"
    },
    {
        id: 11,
        question: "Who was the first President of the AITUC?",
        options: ["Joseph Baptista", "Lala Lajpat Rai", "N.M. Joshi", "Jawaharlal Nehru"],
        correctAnswer: 1,
        explanation: "Lala Lajpat Rai.",
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "The immediate trigger for forming the AITUC in 1920 was:",
        options: ["To protest against the Rowlatt Act.", "To secure representation for India at the International Labour Organization (ILO).", "To support the Non-Cooperation Movement.", "To organize a general strike."],
        correctAnswer: 1,
        explanation: "The government chose a delegate for the ILO without consulting workers; to prevent this, a national body (AITUC) was needed to select the delegate.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 13,
        question: "The 'Nagpur Split' (1929) in the AITUC occurred when:",
        options: ["The Communists expelled the Congressmen.", "The Reformists (led by N.M. Joshi) broke away to form the Indian Trade Union Federation (ITUF) due to communist domination.", "Gandhi asked Congressmen to leave.", "The British banned the AITUC."],
        correctAnswer: 1,
        explanation: "N.M. Joshi (Moderate/Reformist) left because the Communists (who wanted to affiliate with Moscow) were dominating.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 14,
        question: "Who presided over the Nagpur Session (1929) where the first major split in AITUC took place?",
        options: ["Subhash Chandra Bose", "Jawaharlal Nehru", "V.V. Giri", "Muzaffar Ahmed"],
        correctAnswer: 1,
        explanation: "Jawaharlal Nehru presided over the session where the split happened (though he tried to mediate).",
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "The 'Trade Union Act, 1926' was a landmark legislation because:",
        options: ["It made union membership compulsory.", "It gave legal recognition to registered trade unions and immunity from civil and criminal liability for legitimate union activities.", "It banned strikes completely.", "It fixed the minimum wage at Rs 30."],
        correctAnswer: 1,
        explanation: "It gave legal immunity to union leaders for civil conspiracy (i.e., causing financial loss to employers during a strike).",
        cognitiveLevel: "Fact"
    },
    {
        id: 16,
        question: "The 'Trade Disputes Act, 1929' provided for:",
        options: ["Compulsory appointment of Courts of Inquiry and Conciliation Boards.", "A ban on strikes in public utility services without notice.", "Declaring 'political strikes' (sympathetic strikes) illegal.", "All of the above."],
        correctAnswer: 3,
        explanation: "It aimed to curb the rising wave of strikes by banning 'political' strikes and setting up tribunals.",
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "The 'Public Safety Bill' (1928), which Bhagat Singh protested against, was intended to:",
        options: ["Deport foreign communists/socialists (like Philip Spratt) from India.", "Arrest Indian leaders without trial.", "Censor the press.", "Ban public meetings."],
        correctAnswer: 0,
        explanation: "It aimed to deport British communists like Philip Spratt and Ben Bradley who were helping Indian unions.",
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "The 'Meerut Conspiracy Case' (1929) is famous because:",
        options: ["It was the longest trial in Indian history involving 31 labour leaders (including 3 Englishmen).", "It was about a plot to kill the Viceroy.", "It led to the hanging of Bhagat Singh.", "It was a case of financial fraud."],
        correctAnswer: 0,
        explanation: "A massive trial to crush the communist leadership.",
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "Who among the following was NOT an accused in the Meerut Conspiracy Case?",
        options: ["S.A. Dange", "Muzaffar Ahmed", "Philip Spratt", "C.R. Das"],
        correctAnswer: 3,
        explanation: "C.R. Das died in 1925. The others (Dange, Muzaffar, Spratt) were accused.",
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "Which newspaper was the mouthpiece of the Communists in Bombay, edited by S.A. Dange?",
        options: ["The Socialist", "Kranti", "Langal", "Kirti"],
        correctAnswer: 0,
        explanation: "The Socialist. (Kranti was also a communist paper in Marathi; Langal and Ganabani in Bengal; Kirti in Punjab).",
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "Arrange the following events in chronological order:\n1. Formation of AITUC\n2. Trade Union Act\n3. Meerut Conspiracy Case\n4. First Factory Act",
        options: ["4-1-2-3", "4-1-3-2", "1-4-2-3", "1-2-3-4"],
        correctAnswer: 0,
        explanation: "Factory Act (1881) -> AITUC (1920) -> TU Act (1926) -> Meerut (1929).",
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "Match the Leader with the Organization:\nA. N.M. Lokhande - 1. Madras Labour Union\nB. B.P. Wadia - 2. Bombay Millhands Association\nC. V.V. Giri - 3. Indian Trade Union Federation\nD. N.M. Joshi - 4. All India Railwaymen’s Federation",
        options: ["A-2, B-1, C-4, D-3", "A-1, B-2, C-3, D-4", "A-2, B-1, C-3, D-4", "A-3, B-2, C-4, D-1"],
        correctAnswer: 0,
        explanation: "All pairs correctly matched (V.V. Giri was associated with Railwaymen; Joshi founded ITUF after the split).",
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "The 'Indian National Trade Union Congress' (INTUC) was founded in May 1947 by:",
        options: ["The Communist Party of India", "The Congress (Vallabhbhai Patel)", "The Socialist Party", "The Forward Bloc"],
        correctAnswer: 1,
        explanation: "Congress (led by Patel) formed INTUC to break away from the communist-dominated AITUC.",
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "Why did the 'Royal Commission on Labour' (Whitley Commission) visit India in 1929?",
        options: ["To investigate the condition of labour in industries and plantations.", "To stop the growth of communism.", "To recruit labour for WWI.", "To investigate the Jallianwala Bagh massacre."],
        correctAnswer: 0,
        explanation: "Whitley Commission on Labour.",
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "The 'Kanpur Bolshevik Conspiracy Case' (1924) was directed against:",
        options: ["The newly formed Communist leaders (Dange, Usmani, Nalini Gupta, Shaukat Usmani).", "The Ghadarites.", "The Khilafatists.", "The Swarajists."],
        correctAnswer: 0,
        explanation: "The first major anti-communist conspiracy case.",
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "Who was the first General Secretary of the AITUC?",
        options: ["Lala Lajpat Rai", "Dewan Chaman Lal", "Joseph Baptista", "S.A. Dange"],
        correctAnswer: 1,
        explanation: "Dewan Chaman Lal.",
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "During the 'Civil Disobedience Movement', the working class participation was:",
        options: ["Massive across India.", "Mixed (High in Sholapur/Bombay/Calcutta, but generally lower than NCM because of the AITUC split).", "Non-existent.", "Only in Princely States."],
        correctAnswer: 1,
        explanation: "Mixed. The split in AITUC weakened the unified response, though workers participated in specific regions.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 28,
        question: "The first political strike in India (1908) was organized by the workers of:",
        options: ["The Railways", "The Textile Mills of Bombay", "The Jute Mills of Calcutta", "The Coal Mines of Jharia"],
        correctAnswer: 1,
        explanation: "Bombay textile workers went on a 6-day strike (one for each year of the sentence) against Tilak's conviction.",
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "'Girni Kamgar Union' (1928) was a powerful union led by:",
        options: ["The Communists", "The Gandhians", "The Liberals", "The British"],
        correctAnswer: 0,
        explanation: "Communists (led the famous 1928 textile strike).",
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "Which of the following leaders was associated with the 'Social Service League' and represented Indian labour at the Washington Labour Conference (1919)?",
        options: ["N.M. Joshi", "B.P. Wadia", "Tilak", "Lala Lajpat Rai"],
        correctAnswer: 0,
        explanation: "N.M. Joshi. He was the government's nominee to the Washington Conference (which triggered the AITUC formation).",
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "The 'Labour Swaraj Party' (1925) was founded in Bengal by:",
        options: ["Muzaffar Ahmed and Qazi Nazrul Islam", "Subhash Chandra Bose", "C.R. Das", "M.N. Roy"],
        correctAnswer: 0,
        explanation: "Muzaffar Ahmed and the poet Nazrul Islam.",
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "The 'Bombay Trade Disputes Conciliation Act' (1934) was passed by the:",
        options: ["British Parliament", "Bombay Legislative Council", "Congress Ministry", "Viceroy"],
        correctAnswer: 1,
        explanation: "Passed by the Bombay Govt to curb strikes.",
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "Which movement saw the unique 'Pals' (parallel governments) formed by workers in Alleppey (Kerala)?",
        options: ["Punnapra-Vayalar", "Moplah Rebellion", "Vaikom Satyagraha", "Quit India"],
        correctAnswer: 0,
        explanation: "Punnapra-Vayalar (Travancore).",
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "The 'National Management of Industries' was a concept advocated by:",
        options: ["The Gandhian unions (Trusteeship)", "The Leftist unions (Workers' Control)", "The British owners", "The Feudal lords"],
        correctAnswer: 1,
        explanation: "Workers' Control (Leftist/Communist idea).",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 35,
        question: "'Workers of the World, Unite!' This slogan became popular in India after:",
        options: ["1857 Revolt", "Russian Revolution (1917)", "French Revolution (1917)", "American Civil War"],
        correctAnswer: 1,
        explanation: "Russian Revolution.",
        cognitiveLevel: "Fact"
    }
];
