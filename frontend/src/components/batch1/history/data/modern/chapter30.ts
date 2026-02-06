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

export const MODERN_CHAPTER_30_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "Early Efforts (Charters & Macaulay)", status: 'done' },
    { id: '2', name: "Wood's Despatch (1854) - Magna Carta", status: 'done' },
    { id: '3', name: "Hunter Commission & Universities Act", status: 'done' },
    { id: '4', name: "Nationalist Education Movement", status: 'done' },
    { id: '5', name: "Saddler Commission & Hartog Committee", status: 'done' },
    { id: '6', name: "Wardha Scheme & Sargent Plan", status: 'done' },
];

export const MODERN_CHAPTER_30_MCQS: Question[] = [
    {
        id: 1,
        question: "Which Charter Act first allotted a sum of ₹1 Lakh for the promotion of education in India?",
        options: ["Charter Act of 1793", "Charter Act of 1813", "Charter Act of 1833", "Charter Act of 1853"],
        correctAnswer: 1,
        explanation: "Charter Act of 1813.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "The 'Macaulay’s Minute' (1835) settled the controversy between:",
        options: ["Hindus and Muslims.", "Orientalists and Anglicists.", "British and Princely States.", "Landlords and Peasants."],
        correctAnswer: 1,
        explanation: "Orientalists (favored traditional learning) vs Anglicists (favored Western learning in English).",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 3,
        question: "What was the 'Downward Filtration Theory' in education?",
        options: ["Educating everyone equally from top to bottom.", "Educating a small group of high-class Indians who would then spread knowledge to the masses (Filtration).", "Focusing only on primary education.", "Teaching only agriculture."],
        correctAnswer: 1,
        explanation: "The British didn't want to spend on mass education.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 4,
        question: "Which document is considered the 'Magna Carta' of English education in India?",
        options: ["Macaulay's Minute", "Wood's Despatch (1854)", "Hunter Commission Report", "Saddler Commission Report"],
        correctAnswer: 1,
        explanation: "Wood's Despatch (Sir Charles Wood).",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "The 'Hunter Education Commission' (1882) focused primarily on:",
        options: ["Higher Education.", "Primary and Secondary Education.", "Technical Education.", "Theological Education."],
        correctAnswer: 1,
        explanation: "It emphasized the government's duty towards mass education (Primary).",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "The 'Indian Universities Act' (1904) was passed based on the recommendations of:",
        options: ["Raleigh Commission", "Saddler Commission", "Hartog Committee", "Radhakrishnan Commission"],
        correctAnswer: 0,
        explanation: "Thomas Raleigh Commission (1902).",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "Which Viceroy was responsible for the Indian Universities Act, 1904, which increased government control over universities?",
        options: ["Lord Ripon", "Lord Lytton", "Lord Curzon", "Lord Minto"],
        correctAnswer: 2,
        explanation: "Lord Curzon.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "The 'Saddler University Commission' (1917-19) was originally appointed to study the problems of which university?",
        options: ["Madras University", "Bombay University", "Calcutta University", "Allahabad University"],
        correctAnswer: 2,
        explanation: "Calcutta University.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "The 'Wardha Scheme of Education' (1937) was based on the principles of:",
        options: ["Lord Macaulay", "Mahatma Gandhi ('Nai Talim' / Basic Education)", "Rabindranath Tagore", "B.R. Ambedkar"],
        correctAnswer: 1,
        explanation: "Learning through handicrafts and active work.",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "The 'Sargent Plan' (1944) aimed to achieve a level of education in India comparable to England within:",
        options: ["10 years", "20 years", "40 years", "60 years"],
        correctAnswer: 2,
        explanation: "40 years.",
        subtopic: '6',
        cognitiveLevel: "Fact"
    }
];

MODERN_CHAPTER_30_MCQS.push(
    {
        id: 11,
        question: "Who founded the 'Calcutta Madrasah' in 1781?",
        options: ["Warren Hastings", "Jonathan Duncan", "Lord Wellesley", "William Jones"],
        correctAnswer: 0,
        explanation: "Warren Hastings.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "The 'Sanskrit College' at Varanasi was founded in 1791 by:",
        options: ["Warren Hastings", "Jonathan Duncan", "William Bentinck", "Thomas Munro"],
        correctAnswer: 1,
        explanation: "Jonathan Duncan, for study of Hindu law and philosophy.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "In Wood's Despatch, which system was proposed to encourage private enterprise in education?",
        options: ["System of Grants-in-aid", "System of Taxation", "Free education", "Religious education"],
        correctAnswer: 0,
        explanation: "Grants-in-aid for private schools.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 14,
        question: "Who was the founder of the 'Bethune School' (1849), a pioneer in female education in India?",
        options: ["J.E.D. Bethune", "Ishwar Chandra Vidyasagar", "Rammohan Roy", "D.K. Karve"],
        correctAnswer: 0,
        explanation: "J.E.D. Bethune, with support from Vidyasagar.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "The 'Hartog Committee' (1929) noted with concern the problem of:",
        options: ["Lack of English teachers.", "Stagnation and Wastage at the primary level.", "Excessive focus on sports.", "Foreign funding."],
        correctAnswer: 1,
        explanation: "Wastage (leaving school early) and Stagnation (staying in same class).",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 16,
        question: "Which organization was founded in 1906 to challenge British control over education in India?",
        options: ["National Council of Education", "Indian National Congress", "Muslim League", "Arya Samaj"],
        correctAnswer: 0,
        explanation: "National Council of Education (Jadavpur University's origin).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "Who among the following set up the 'Fergusson College' in Poona?",
        options: ["B.G. Tilak", "G.G. Agarkar", "M.G. Ranade", "The Deccan Education Society"],
        correctAnswer: 3,
        explanation: "Founded by Deccan Education Society (Tilak/Agarkar were key members).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "The universities of Bombay, Calcutta, and Madras were established in which year?",
        options: ["1854", "1857", "1858", "1861"],
        correctAnswer: 1,
        explanation: "1857 (following Wood's Despatch).",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "The 'Resolution on Education Policy' (1913) stated that the government refused to take up the responsibility of:",
        options: ["Primary education.", "Compulsory education.", "University education.", "Religious education."],
        correctAnswer: 1,
        explanation: "Gokhale's bill for compulsory education was rejected.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "Which commission recommended the '10+2+3' pattern of education?",
        options: ["Hunter Commission", "Saddler Commission", "Kothari Commission (Post-independence)", "Radhakrishnan Commission"],
        correctAnswer: 1,
        explanation: "Saddler Commission laid the groundwork for this structure.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "The 'Maulana Abul Kalam Azad' was the first:",
        options: ["Prime Minister of India.", "General Secretary of INC.", "Education Minister of Independent India.", "Speaker of Lok Sabha."],
        correctAnswer: 2,
        explanation: "First Education Minister.",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "Who among the following was the founder of 'Jamia Millia Islamia'?",
        options: ["Sir Syed Ahmed Khan", "Maulana Abul Kalam Azad", "Zakir Hussain & Maulana Mahmad Hasan", "Muhammad Ali Jinnah"],
        correctAnswer: 2,
        explanation: "Founded in 1920 (Aligarh) during Non-Cooperation.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "The 'Banaras Hindu University' was founded in 1916 by:",
        options: ["Madan Mohan Malaviya", "Annie Besant", "Raja Rammohan Roy", "Both (a) and (b)"],
        correctAnswer: 3,
        explanation: "Annie Besant (Central Hindu College) and Malaviya.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "Which of the following describes the British education policy accurately?",
        options: ["Determined to make every Indian literate.", "Aimed at creating a class of loyalists to serve administrative needs ('Clerk production').", "Focus on promoting Indian vernacular languages.", "Focused on scientific and technical research."],
        correctAnswer: 1,
        explanation: "Administrative utility was the priority.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 25,
        question: "Match the following institutions with their founders:\nA. Aligarh Muslim University -> 1. Sir Syed Ahmed Khan\nB. Shantiniketan -> 2. Rabindranath Tagore\nC. SNDT University -> 3. D.K. Karve\n\nSelect the correct code:",
        options: ["A-1, B-2, C-3", "A-2, B-1, C-3", "A-3, B-2, C-1", "A-1, B-3, C-2"],
        correctAnswer: 0,
        explanation: "Sir Syed (AMU), Tagore (Shantiniketan), Karve (SNDT).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "The 'Orientalists' in the education controversy were led by:",
        options: ["Lord Bentinck", "H.T. Prinsep", "Lord Macaulay", "Thomas Munro"],
        correctAnswer: 1,
        explanation: "H.T. Prinsep was the leader of the Orientalist faction.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "Under which Governor General was the 'Macaulay’s Minute' accepted?",
        options: ["William Bentinck", "Lord Auckland", "Lord Dalhousie", "Lord Canning"],
        correctAnswer: 0,
        explanation: "William Bentinck (1835).",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 28,
        question: "Why was the 'Universities Act, 1904' hated by Indian nationalists?",
        options: ["It restricted admission.", "It increased the number of nominated members in the Senate and increased government veto power.", "It taught only science.", "It was too liberal."],
        correctAnswer: 1,
        explanation: "Government control increased significantly.",
        subtopic: '3',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 29,
        question: "The 'Vernacular education' at the primary level was first emphasized in a significant way by:",
        options: ["Macaulay", "Wood's Despatch", "Hunter Commission", "Sargent Plan"],
        correctAnswer: 1,
        explanation: "Wood's Despatch explicitly mentioned vernaculars for primary schools.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "Name the 'Thomasonian' system of education developed in the North-West Provinces.",
        options: ["Village-school system using vernacular languages.", "High-school system using English.", "Religious school system.", "Military school system."],
        correctAnswer: 0,
        explanation: "James Thomason started an experiment in the 1840s.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "Who founded the 'Mohammedan Anglo-Oriental College' in 1875?",
        options: ["The Aga Khan", "Sir Syed Ahmed Khan", "Salimullah Khan", "Zakir Hussain"],
        correctAnswer: 1,
        explanation: "Sir Syed Ahmed Khan in Aligarh.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "The 'Radhakrishnan Commission' (1948) dealt with:",
        options: ["Secondary education.", "University education.", "Primary education.", "Adult education."],
        correctAnswer: 1,
        explanation: "University Education Commission.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "The 'Osmania University' (Hyderabad) was unique in using which language as a medium of instruction for higher education?",
        options: ["English", "Urdu", "Telugu", "Marathi"],
        correctAnswer: 1,
        explanation: "Urdu (Established 1918).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "Which report recommended universal, free, and compulsory education for all children aged 6-14?",
        options: ["Hunter Report", "Hartog Report", "Sargent Report (Plan)", "Wardha Scheme"],
        correctAnswer: 2,
        explanation: "Sargent Plan (1944).",
        subtopic: '6',
        cognitiveLevel: "Fact"
    },
    {
        id: 35,
        question: "The 'Public Service Commission' for the first time in 1886-87 (Aitchison Commission) recommended dividing services into:",
        options: ["Central and State.", "Imperial, Provincial, and Subordinate.", "London and Delhi.", "Technical and General."],
        correctAnswer: 1,
        explanation: "Divisions based on hiring origin and status.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    }
);
