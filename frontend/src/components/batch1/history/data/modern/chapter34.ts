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

export const MODERN_CHAPTER_34_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "Political Structure (Union & States)", status: 'done' },
    { id: '2', name: "Language Problem (Official Language)", status: 'done' },
    { id: '3', name: "Integration of French & Portuguese Enclaves", status: 'done' },
    { id: '4', name: "Creation of New States (1960-70s)", status: 'done' },
    { id: '5', name: "The Judiciary & Early Amendments", status: 'done' },
];

export const MODERN_CHAPTER_34_MCQS: Question[] = [
    {
        id: 1,
        question: "The French handed over Pondicherry (Puducherry) to India in which year?",
        options: ["1947", "1954", "1961", "1962"],
        correctAnswer: 1,
        explanation: "The French enclaves (Pondicherry, Karikal, Mahe, Yanam) were transferred in 1954.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "Which military operation was launched to liberate Goa from Portuguese rule?",
        options: ["Operation Vijay", "Operation Polo", "Operation Blue Star", "Operation Trident"],
        correctAnswer: 0,
        explanation: "Operation Vijay (1961) integrated Goa, Daman, and Diu into India.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "The 'Official Language Act' was passed in 1963. What was its main provision?",
        options: ["Sanskrit as official language.", "Hindi only.", "English to continue alongside Hindi as official language beyond 1965.", "Regional languages to replace English."],
        correctAnswer: 2,
        explanation: "It allowed the continued use of English for official purposes.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "In 1966, the state of Punjab was divided into:",
        options: ["Punjab and Haryana.", "Punjab and Himachal Pradesh.", "Punjab and PEPSU.", "Punjab and Delhi."],
        correctAnswer: 0,
        explanation: "Based on the Shah Commission recommendation, the Hindi-speaking areas became Haryana.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "The 10th Constitutional Amendment Act (1961) incorporated which territory as a Union Territory?",
        options: ["Goa", "Dadra and Nagar Haveli", "Puducherry", "Chandigarh"],
        correctAnswer: 1,
        explanation: "Dadra and Nagar Haveli.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "The 'Shah Commission' (1966) was related to the reorganization of:",
        options: ["Bombay State.", "Punjab State.", "Madras State.", "Assam."],
        correctAnswer: 1,
        explanation: "It was appointed to demarcate the boundaries of Punjab and Haryana.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "Which state was the first to implement the Panchayati Raj system in 1959?",
        options: ["Rajasthan (Nagaur)", "Andhra Pradesh", "Gujarat", "Tamil Nadu"],
        correctAnswer: 0,
        explanation: "Inaugurated by Nehru in Nagaur, Rajasthan.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "The 'North-Eastern Areas Reorganisation Act, 1971' created which states?",
        options: ["Manipur, Tripura, Meghalaya", "Assam and Meghalaya", "Nagaland and Sikkim", "Arunachal and Mizoram"],
        correctAnswer: 0,
        explanation: "Major reorganization of the north-east.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "Sikkim became a full-fledged state of the Indian Union in:",
        options: ["1947", "1974", "1975", "1980"],
        correctAnswer: 2,
        explanation: "Following the 36th Amendment Act.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "The 'Three-Language Formula' was related to:",
        options: ["Defense policy.", "Education and Official Language policy.", "Trade with neighbors.", "Constitutional amendments."],
        correctAnswer: 1,
        explanation: "To balance the interests of Hindi and non-Hindi speaking regions.",
        subtopic: '2',
        cognitiveLevel: "Conceptual"
    }
];

MODERN_CHAPTER_34_MCQS.push(
    {
        id: 11,
        question: "What was the 'Anti-Hindi Agitation' of 1965 primarily centered in?",
        options: ["Bengal", "Tamil Nadu", "Kerala", "Punjab"],
        correctAnswer: 1,
        explanation: "Protest against making Hindi the sole official language.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "The 'Assam Accord' (1985) was related to the issue of:",
        options: ["Linguistic states.", "Illegal immigrants/Foreigners issue.", "River water sharing.", "Border dispute with China."],
        correctAnswer: 1,
        explanation: "Signed by the Rajiv Gandhi govt with AASU leaders.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "Before 1954, Dadra and Nagar Haveli were under the rule of:",
        options: ["France", "Portugal", "British", "Local Nawab"],
        correctAnswer: 1,
        explanation: "Portuguese enclaves.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 14,
        question: "Which Prime Minister had to face the intense debate over the Official Language in 1965?",
        options: ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Morarji Desai"],
        correctAnswer: 1,
        explanation: "Shastri assured the non-Hindi states that English would continue.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "The 'Samyukta Maharashtra Samiti' was fighting for:",
        options: ["Independence of Maharashtra.", "A separate Marathi-speaking state with Bombay as capital.", "Integration with Gujarat.", "Ending the caste system."],
        correctAnswer: 1,
        explanation: "The movement led to the creation of Maharashtra in 1960.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 16,
        question: "The 'Mahagujarat Movement' was the counterpart to the Maharashtra movement in:",
        options: ["Rajasthan", "Gujarat", "MP", "Sindh"],
        correctAnswer: 1,
        explanation: "Led to the creation of Gujarat.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "Nagaland was created as a separate state in:",
        options: ["1950", "1960", "1963", "1972"],
        correctAnswer: 2,
        explanation: "To satisfy the Naga nationalist demands.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "Which body was created as an advisory body for the 5-year plans?",
        options: ["Finance Commission", "National Development Council (NDC)", "Election Commission", "UGC"],
        correctAnswer: 1,
        explanation: "NDC included CMs of states to ensure cooperative federalism.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "The 'States Reorganisation Commission' rejected the 'one language one state' theory. Why?",
        options: ["They hated regional languages.", "They felt national unity and administrative viability were more important.", "They wanted Hindi everywhere.", "None of the above."],
        correctAnswer: 1,
        explanation: "A balanced approach to reorganization.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 20,
        question: "Mizoram and Arunachal Pradesh were elevated to statehood in:",
        options: ["1972", "1987", "2000", "1947"],
        correctAnswer: 1,
        explanation: "Major step in the political integration of the North East.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "What was the 'PEPSU'?",
        options: ["A soft drink.", "Patiala and East Punjab States Union.", "A communist group.", "A border agreement."],
        correctAnswer: 1,
        explanation: "A union of princely states in the Punjab region integrated later into Punjab.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "The 'Akali Dal' movement in Punjab demanded a:",
        options: ["Separate country.", "Punjabi Suba (linguistic state).", "Union with Pakistan.", "Religious state only."],
        correctAnswer: 1,
        explanation: "A demand for a state based on Punjabi language.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "Meghalaya was carved out of which state?",
        options: ["Assam", "Manipur", "Nagaland", "West Bengal"],
        correctAnswer: 0,
        explanation: "Initially an autonomous state within Assam, later a full state.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "The 'Linguistic Provinces Commission' (1948) was headed by:",
        options: ["Fazl Ali", "S.K. Dhar", "J.L. Nehru", "B.R. Ambedkar"],
        correctAnswer: 1,
        explanation: "The S.K. Dhar Commission.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "'Chandigarh' was designed by which famous architect?",
        options: ["Edwin Lutyens", "Le Corbusier", "Charles Correa", "Herbert Baker"],
        correctAnswer: 1,
        explanation: "Commissioned by Nehru as a symbol of modern India.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "The 'Article 370' provided special status to:",
        options: ["Nagaland", "Jammu and Kashmir", "Sikkim", "Assam"],
        correctAnswer: 1,
        explanation: "A temporary provision for J&K.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "Telangana was part of which state before it became separate in 2014?",
        options: ["Andhra Pradesh", "Hyderabad State (pre-1956)", "Tamil Nadu", "Karnataka"],
        correctAnswer: 0,
        explanation: "Merged with Andhra in 1956 to form Andhra Pradesh.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 28,
        question: "Chhattisgarh, Uttarakhand and Jharkhand were created in:",
        options: ["1990", "2000", "2010", "1956"],
        correctAnswer: 1,
        explanation: "Created for better administration and regional identity.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "The 'Belgaum Border Dispute' is between which two states?",
        options: ["Maharashtra and Karnataka", "Kerala and T.N.", "Andhra and Odisha", "Punjab and Haryana"],
        correctAnswer: 0,
        explanation: "A long-standing linguistic-boundary dispute.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "Why did Nehru initially oppose linguistic states?",
        options: ["He preferred English.", "He feared it would incite 'narrow provincialism' and disrupt national unity during the communal trauma of partition.", "He wanted one single state for India.", "He was a dictator."],
        correctAnswer: 1,
        explanation: "The timing (just after partition) made the top leadership cautious.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 31,
        question: "Which part of the Constitution deals with 'The Union and its Territory'?",
        options: ["Part I", "Part II", "Part III", "Part IV"],
        correctAnswer: 0,
        explanation: "Articles 1 to 4.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "The power to 'Reorganize States' lies with which body?",
        options: ["State Assemblies", "The President", "The Parliament", "The Supreme Court"],
        correctAnswer: 2,
        explanation: "Article 3 gives the Parliament this power.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "Delhi was made the 'National Capital Territory' (NCT) by which amendment?",
        options: ["42nd", "69th", "73rd", "86th"],
        correctAnswer: 1,
        explanation: "The 69th Constitutional Amendment Act, 1991.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "Kachatheevu island was ceded by India to which country in 1974?",
        options: ["Sri Lanka", "Bangladesh", "Pakistan", "Maldives"],
        correctAnswer: 0,
        explanation: "A controversial diplomatic agreement.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 35,
        question: "The 'Sixth Schedule' of the Constitution provides for autonomous councils in tribal areas of:",
        options: ["Assam, Meghalaya, Tripura, Mizoram", "Nagaland and Manipur", "Arunachal and Sikkim", "All hilly states"],
        correctAnswer: 0,
        explanation: "To protect the tribal identity and land.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    }
);
