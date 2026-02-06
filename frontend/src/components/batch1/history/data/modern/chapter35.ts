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

export const MODERN_CHAPTER_35_SUBTOPICS: Subtopic[] = [
    { id: '1', name: "Formation & Working of Constituent Assembly", status: 'done' },
    { id: '2', name: "The Objectives Resolution (Nehru)", status: 'done' },
    { id: '3', name: "Major Committees & Drafting Committee", status: 'done' },
    { id: '4', name: "Salient Features of the Indian Constitution", status: 'done' },
    { id: '5', name: "Enactment & Commencement", status: 'done' },
];

export const MODERN_CHAPTER_35_MCQS: Question[] = [
    {
        id: 1,
        question: "Who was the 'Permanent President' of the Constituent Assembly?",
        options: ["Dr. Sachchidananda Sinha", "Dr. Rajendra Prasad", "Dr. B.R. Ambedkar", "Sardar Patel"],
        correctAnswer: 1,
        explanation: "Dr. Sinha was the interim president; Dr. Rajendra Prasad was elected permanent president on Dec 11, 1946.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "The 'Objectives Resolution' was moved in the Constituent Assembly by:",
        options: ["B.R. Ambedkar", "Jawaharlal Nehru", "M.K. Gandhi", "B.N. Rau"],
        correctAnswer: 1,
        explanation: "Moved on Dec 13, 1946; it defined the philosophy of the constitution.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "Who was the 'Constitutional Advisor' to the Constituent Assembly?",
        options: ["B.N. Rau", "K.M. Munshi", "S.N. Mukherjee", "Dr. Ambedkar"],
        correctAnswer: 0,
        explanation: "Sir B.N. Rau prepared the initial draft based on research of global constitutions.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "The 'Drafting Committee' of the Constituent Assembly was headed by:",
        options: ["Dr. Rajendra Prasad", "Dr. B.R. Ambedkar", "Alladi Krishnaswami Ayyar", "N. Gopalaswami Ayyangar"],
        correctAnswer: 1,
        explanation: "Ambedkar is hence known as the 'Father of the Indian Constitution'.",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "The Constituent Assembly took how long to finish the Constitution?",
        options: ["2 years, 11 months and 18 days", "Exactly 3 years", "1 year and 6 months", "5 years"],
        correctAnswer: 0,
        explanation: "A long and meticulous process of debates and drafting.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "Under which plan was the Constituent Assembly of India set up?",
        options: ["Simon Commission", "Cabinet Mission Plan (1946)", "Mountbatten Plan", "Cripps Mission"],
        correctAnswer: 1,
        explanation: "The members were indirectly elected by the provincial assemblies.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "The Constitution of India was 'Adopted' on:",
        options: ["Aug 15, 1947", "Nov 26, 1949", "Jan 26, 1950", "Jan 30, 1948"],
        correctAnswer: 1,
        explanation: "Adopted on Nov 26, 1949; came into full force on Jan 26, 1950.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "Why was 'January 26' chosen as the date for the commencement of the Constitution?",
        options: ["It was Nehru's birthday.", "To commemorate the Purna Swaraj declaration (1930).", "It was a lucky day.", "The draft was only ready then."],
        correctAnswer: 1,
        explanation: "Jan 26, 1930, was celebrated as the first independence day during the struggle.",
        subtopic: '5',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 9,
        question: "Which of the following was NOT a member of the Drafting Committee?",
        options: ["K.M. Munshi", "Mohammad Saadullah", "Jawaharlal Nehru", "T.T. Krishnamachari"],
        correctAnswer: 2,
        explanation: "Nehru was not in the Drafting Committee (he headed the Union Powers Committee).",
        subtopic: '3',
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "The Indian Constitution is described as 'Federal in structure but Unitary in spirit'. Who said this?",
        options: ["K.C. Wheare", "B.R. Ambedkar", "Granville Austin", "Ivor Jennings"],
        correctAnswer: 0,
        explanation: "K.C. Wheare called it 'Quasi-federal'.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    }
];

MODERN_CHAPTER_35_MCQS.push(
    {
        id: 11,
        question: "Who was the 'Chief Draftsman' of the Constitution in the Constituent Assembly?",
        options: ["S.N. Mukherjee", "B.N. Rau", "H.V.R. Iengar", "V.B. Patel"],
        correctAnswer: 0,
        explanation: "S.N. Mukherjee was praised by Ambedkar for his skill in translating complex ideas into legal language.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "The 'Preamble' to the Indian Constitution is based on:",
        options: ["Objectives Resolution", "The Magna Carta", "The Bill of Rights", "Nehru Report"],
        correctAnswer: 0,
        explanation: "It is the modified version of the Objectives Resolution.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "The word 'Socialist' and 'Secular' were added to the Preamble by which amendment?",
        options: ["1st", "24th", "42nd", "44th"],
        correctAnswer: 2,
        explanation: "The 42nd Amendment Act (1976) during the emergency.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 14,
        question: "Which feature of the Indian Constitution is borrowed from the 'Irish Constitution'?",
        options: ["Fundamental Rights", "Directive Principles of State Policy (DPSP)", "Rule of Law", "Concurrent List"],
        correctAnswer: 1,
        explanation: "DPSP and the method of election of President.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "The 'Procedure established by law' is a feature borrowed from:",
        options: ["British Constitution", "Japanese Constitution", "US Constitution", "Canadian Constitution"],
        correctAnswer: 1,
        explanation: "Article 21.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 16,
        question: "The Constituent Assembly also acted as the 'First Parliament' of India. In this capacity, who was its Speaker?",
        options: ["G.V. Mavalankar", "Rajendra Prasad", "C. Rajagopalachari", "S. Radhakrishnan"],
        correctAnswer: 0,
        explanation: "G.V. Mavalankar was the first Speaker.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "How many sessions did the Constituent Assembly hold?",
        options: ["5", "11", "15", "20"],
        correctAnswer: 1,
        explanation: "11 sessions over 165 days.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "The 'Elephant' was taken as the symbol (seal) of:",
        options: ["The Congress Party", "The Constituent Assembly", "The Planning Commission", "The RBI"],
        correctAnswer: 1,
        explanation: "The seal of the CA featured an elephant.",
        subtopic: '1',
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "Who was the 'Calligrapher' of the original Indian Constitution?",
        options: ["Prem Behari Narain Raizada", "Nand Lal Bose", "Beohar Rammanohar Sinha", "Ambedkar"],
        correctAnswer: 0,
        explanation: "He wrote the entire constitution in italic style by hand.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "The 'Illumination' and decoration of the original copies of the Constitution was done by artists from:",
        options: ["Shantiniketan", "Sir J.J. School of Art", "National School of Drama", "None of the above"],
        correctAnswer: 0,
        explanation: "Led by Nand Lal Bose.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "The concept of 'Fundamental Duties' was borrowed from:",
        options: ["USSR (Soviet Union)", "USA", "France", "Germany"],
        correctAnswer: 0,
        explanation: "Based on the Swaran Singh Committee recommendations.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "Which Article describes India as a 'Union of States' rather than a federation?",
        options: ["Article 1", "Article 2", "Article 13", "Article 368"],
        correctAnswer: 0,
        explanation: "To emphasize that states have no right to secede.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "Ambedkar called which article 'the heart and soul of the Constitution'?",
        options: ["Article 14 (Equality)", "Article 19 (Freedom)", "Article 21 (Life)", "Article 32 (Constitutional Remedies)"],
        correctAnswer: 3,
        explanation: "Because it makes the fundamental rights enforceable.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "The 'Residuary Powers' in the Indian Constitution are given to:",
        options: ["The States", "The Union Parliament", "The President", "The Supreme Court"],
        correctAnswer: 1,
        explanation: "Borrowed from the Canadian model.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "The Constituent Assembly was NOT a 'Sovereign Body' initially. When did it become one?",
        options: ["Aug 15, 1947 (via Independence Act)", "Jan 26, 1950", "Nov 26, 1949", "Never"],
        correctAnswer: 0,
        explanation: "The Independence Act removed the British Parliament's control.",
        subtopic: '1',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 26,
        question: "Most of the 'Administrative Details' of the Indian Constitution were inspired by:",
        options: ["Government of India Act, 1935", "US Constitution", "Weimar Constitution", "Australian Constitution"],
        correctAnswer: 0,
        explanation: "It served as the structural blueprint.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "The 'Concurrent List' is borrowed from:",
        options: ["USA", "Australia", "Canada", "Germany"],
        correctAnswer: 1,
        explanation: "Powers shared by both Union and States.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 28,
        question: "The 'Emergency Provisions' (suspension of rights) were inspired by:",
        options: ["USSR", "Weimar Constitution of Germany", "South Africa", "France"],
        correctAnswer: 1,
        explanation: "The power of the state during crises.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "Who called the Indian Constitution a 'Lawyers' Paradise'?",
        options: ["Ivor Jennings", "A.V. Dicey", "Lord Bryce", "Ambedkar"],
        correctAnswer: 0,
        explanation: "Due to its length and complex legal language.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 30,
        question: "The 'Universal Adult Franchise' was introduced in India with the commencement of the Constitution. What was the original voting age?",
        options: ["18 years", "21 years", "25 years", "30 years"],
        correctAnswer: 1,
        explanation: "Lowered to 18 by the 61st Amendment (1988).",
        subtopic: '4',
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "The total expenditure on making the Constitution was approximately:",
        options: ["6 lakh", "64 lakh", "1 crore", "10 crore"],
        correctAnswer: 1,
        explanation: "6.4 million rupees.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "The last session of the Constituent Assembly was held on:",
        options: ["Nov 26, 1949", "Jan 24, 1950", "Jan 26, 1950", "Aug 15, 1947"],
        correctAnswer: 1,
        explanation: "On this day, members signed the final document and elected Rajendra Prasad as President.",
        subtopic: '5',
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "Which of the following describes India accurately according to the Preamble?",
        options: ["Sovereign, Secular, Socialist, Democratic Republic", "Socialist, Capitalist, Federal", "Monarchy, Sovereign", "Theocratic State"],
        correctAnswer: 0,
        explanation: "The core character of the Indian state.",
        subtopic: '2',
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "The 'Single Citizenship' in India is a feature of:",
        options: ["Federalism.", "Unitary Bias.", "Republicanism.", "Socialism."],
        correctAnswer: 1,
        explanation: "Unlike the US where state citizenship also exists.",
        subtopic: '4',
        cognitiveLevel: "Conceptual"
    },
    {
        id: 35,
        question: "The 'Joint Sitting' of two houses is a concept borrowed from:",
        options: ["UK", "Australia", "USA", "Canada"],
        correctAnswer: 1,
        explanation: "Article 108.",
        subtopic: '4',
        cognitiveLevel: "Fact"
    }
);
