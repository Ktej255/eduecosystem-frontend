export interface MCQ {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // 0 for A, 1 for B, 2 for C, 3 for D
    explanation?: string;
    level?: string;
    // Topic metadata for detailed analytics
    topic?: string;
    chapter?: string;
    subtopic?: string;
}

export const DAY2_MCQS: MCQ[] = [
    {
        id: 1,
        question: "Who among the following was the constitutional advisor to the Constituent Assembly?",
        options: [
            "Dr. B.R. Ambedkar",
            "K.M. Munshi",
            "Sir B.N. Rau",
            "T.T. Krishnamachari"
        ],
        correctAnswer: 2,
        explanation: "Sir B.N. Rau was the Constitutional Advisor to the Constituent Assembly. He prepared the initial draft of the Constitution.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Making of the Constitution",
        subtopic: "Constituent Assembly"
    },
    {
        id: 2,
        question: "Which of the following features of the Indian Constitution is borrowed from the Canadian Constitution?",
        options: [
            "Independence of Judiciary",
            "Federation with a strong Centre",
            "Directive Principles of State Policy",
            "Concurrent List"
        ],
        correctAnswer: 1,
        explanation: "Federation with a strong Centre and residuary powers with the Centre were borrowed from the Canadian Constitution.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Making of the Constitution",
        subtopic: "Sources of Constitution"
    },
    {
        id: 3,
        question: "Consider the following statements regarding the Constituent Assembly:\n\n1. It was constituted under the scheme formulated by the Cabinet Mission Plan.\n2. The members were elected directly by the people of India.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 0,
        explanation: "Statement 1 is correct. Statement 2 is incorrect as the members were elected indirectly by the members of the provincial assemblies.",
        level: "Moderate",
        topic: "Indian Polity",
        chapter: "Making of the Constitution",
        subtopic: "Constituent Assembly"
    },
    {
        id: 4,
        question: "The idea of a Constituent Assembly for India was put forward for the first time by:",
        options: [
            "Mahatma Gandhi",
            "Jawaharlal Nehru",
            "M.N. Roy",
            "Sardar Vallabhbhai Patel"
        ],
        correctAnswer: 2,
        explanation: "M.N. Roy was the first to propose the idea of a Constituent Assembly for India in 1934.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Making of the Constitution",
        subtopic: "Constituent Assembly"
    },
    {
        id: 5,
        question: "Which Schedule of the Indian Constitution contains the list of recognized languages?",
        options: [
            "Seventh Schedule",
            "Eighth Schedule",
            "Ninth Schedule",
            "Tenth Schedule"
        ],
        correctAnswer: 1,
        explanation: "The Eighth Schedule contains the list of 22 recognized languages of India.",
        level: "Easy",
        topic: "Indian Polity",
        chapter: "Making of the Constitution",
        subtopic: "Schedules"
    },
    {
        id: 6,
        question: "The \"Objective Resolution\" was moved in the Constituent Assembly by:",
        options: [
            "Dr. Rajendra Prasad",
            "Dr. B.R. Ambedkar",
            "Jawaharlal Nehru",
            "Sardar Patel"
        ],
        correctAnswer: 2, // C
        explanation: "Jawaharlal Nehru moved the Objective Resolution on December 13, 1946, which later became the Preamble of the Constitution.",
        level: "Easy"
    },
    {
        id: 7,
        question: "Which of the following is NOT a feature of the Parliamentary System in India?",
        options: [
            "Presence of nominal and real executives",
            "Dissolution of the Lower House",
            "Collective responsibility of the Executive to the Legislature",
            "Strict separation of powers between Legislature and Executive"
        ],
        correctAnswer: 3, // D
        explanation: "Strict separation of powers is a feature of the Presidential system, not the Parliamentary system. In a Parliamentary system, there is fusion of powers.",
        level: "Moderate"
    },
    {
        id: 8,
        question: "The term 'Secular' was added to the Preamble of the Indian Constitution by which Amendment Act?",
        options: [
            "42nd Amendment Act, 1976",
            "44th Amendment Act, 1978",
            "86th Amendment Act, 2002",
            "61st Amendment Act, 1988"
        ],
        correctAnswer: 0, // A
        explanation: "The 42nd Amendment Act, 1976 added the words 'Socialist', 'Secular', and 'Integrity' to the Preamble.",
        level: "Easy"
    },
    {
        id: 9,
        question: "Who was the Chairman of the Drafting Committee of the Constituent Assembly?",
        options: [
            "Jawaharlal Nehru",
            "Dr. Rajendra Prasad",
            "Dr. B.R. Ambedkar",
            "Sardar Patel"
        ],
        correctAnswer: 2, // C
        explanation: "Dr. B.R. Ambedkar was the Chairman of the Drafting Committee, which prepared the draft Constitution.",
        level: "Easy"
    },
    {
        id: 10,
        question: "The concept of \"Judicial Review\" in the Indian Constitution is borrowed from:",
        options: [
            "United Kingdom",
            "USA",
            "Ireland",
            "Australia"
        ],
        correctAnswer: 1, // B
        explanation: "Judicial Review was borrowed from the USA, where the Supreme Court can review the constitutionality of laws.",
        level: "Easy"
    },
    {
        id: 11,
        question: "Consider the following statements regarding the composition of the Constituent Assembly:\n\n1. The total strength was to be 389.\n2. 93 seats were allotted to the Princely States.\n3. Seats were allocated in proportion to their respective population.\n\nWhich of the statements given above are correct?",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 3, // D
        explanation: "All three statements are correct. The total strength was 389, with 93 seats for Princely States, and allocation was based on population (roughly 1 seat per million).",
        level: "Moderate"
    },
    {
        id: 12,
        question: "The Indian Constitution is often described as:",
        options: [
            "Quasi-Federal",
            "Unitary",
            "Federal",
            "Presidential"
        ],
        correctAnswer: 0, // A
        explanation: "K.C. Wheare described the Indian Constitution as 'Quasi-Federal' because it has both federal and unitary features with a strong central bias.",
        level: "Easy"
    },
    {
        id: 13,
        question: "When was the National Flag adopted by the Constituent Assembly?",
        options: [
            "July 22, 1947",
            "August 15, 1947",
            "January 26, 1950",
            "November 26, 1949"
        ],
        correctAnswer: 0, // A
        explanation: "The National Flag was adopted by the Constituent Assembly on July 22, 1947, a few days before independence.",
        level: "Easy"
    },
    {
        id: 14,
        question: "Which part of the Constitution is described as the \"Magna Carta of India\"?",
        options: [
            "Part III",
            "Part IV",
            "Part IV-A",
            "Part V"
        ],
        correctAnswer: 0, // A
        explanation: "Part III (Fundamental Rights) is described as the Magna Carta of India as it guarantees civil liberties to all citizens.",
        level: "Easy"
    },
    {
        id: 15,
        question: "Who was elected as the temporary President of the Constituent Assembly following the French practice?",
        options: [
            "Dr. Rajendra Prasad",
            "H.C. Mukherjee",
            "Dr. Sachchidanand Sinha",
            "V.T. Krishnamachari"
        ],
        correctAnswer: 2, // C
        explanation: "Dr. Sachchidanand Sinha was elected as the temporary President (Provisional Chairman) on December 9, 1946, following the French practice of electing the oldest member.",
        level: "Moderate"
    },
    {
        id: 16,
        question: "The concept of \"Procedure Established by Law\" is borrowed from:",
        options: [
            "USA",
            "Japan",
            "UK",
            "France"
        ],
        correctAnswer: 1, // B
        explanation: "The concept of 'Procedure Established by Law' was borrowed from the Japanese Constitution.",
        level: "Moderate"
    },
    {
        id: 17,
        question: "Which of the following is correct regarding the Indian Federation?",
        options: [
            "It is the result of an agreement among the states.",
            "The states have no right to secede from the federation.",
            "It is strictly federal like the USA.",
            "It does not have a unitary bias."
        ],
        correctAnswer: 1, // B
        explanation: "The Indian Federation is indestructible, meaning states have no right to secede. India is not the result of an agreement among states and has a strong unitary bias.",
        level: "Moderate"
    },
    {
        id: 18,
        question: "The Preamble to the Indian Constitution is based on:",
        options: [
            "The Government of India Act, 1935",
            "The Objective Resolution",
            "The Indian Independence Act, 1947",
            "The August Offer"
        ],
        correctAnswer: 1, // B
        explanation: "The Preamble is based on the 'Objective Resolution' moved by Jawaharlal Nehru on December 13, 1946.",
        level: "Easy"
    },
    {
        id: 19,
        question: "Consider the following pairs of sources and borrowed features:\n\n1. Ireland: Directive Principles of State Policy\n2. Australia: Concurrent List\n3. Germany: Suspension of Fundamental Rights during Emergency\n\nWhich of the pairs given above is/are correctly matched?",
        options: [
            "1 only",
            "1 and 2 only",
            "2 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 3, // D
        explanation: "All pairs are correctly matched. DPSP from Ireland, Concurrent List from Australia, and Emergency provisions from Germany (Weimar Constitution).",
        level: "Moderate"
    },
    {
        id: 20,
        question: "Who was the Chairman of the Union Powers Committee of the Constituent Assembly?",
        options: [
            "Sardar Patel",
            "Dr. B.R. Ambedkar",
            "Jawaharlal Nehru",
            "J.B. Kripalani"
        ],
        correctAnswer: 2, // C
        explanation: "Jawaharlal Nehru was the Chairman of the Union Powers Committee.",
        level: "Moderate"
    },
    {
        id: 21,
        question: "The Indian Constitution establishes a:",
        options: [
            "Dual Citizenship",
            "Single Citizenship",
            "Triple Citizenship",
            "State Citizenship only"
        ],
        correctAnswer: 1, // B
        explanation: "The Indian Constitution provides for single citizenship, unlike the USA which has dual citizenship (state and federal).",
        level: "Easy"
    },
    {
        id: 22,
        question: "Which Amendment Act is known as the \"Mini-Constitution\"?",
        options: [
            "24th Amendment Act",
            "42nd Amendment Act",
            "44th Amendment Act",
            "73rd Amendment Act"
        ],
        correctAnswer: 1, // B
        explanation: "The 42nd Amendment Act, 1976 is known as the 'Mini-Constitution' due to the extensive changes it made to the Constitution.",
        level: "Easy"
    },
    {
        id: 23,
        question: "The Constituent Assembly held its first meeting on:",
        options: [
            "December 9, 1946",
            "January 26, 1947",
            "August 15, 1947",
            "November 26, 1949"
        ],
        correctAnswer: 0, // A
        explanation: "The Constituent Assembly held its first meeting on December 9, 1946, in the Constitution Hall (now Central Hall of Parliament).",
        level: "Easy"
    },
    {
        id: 24,
        question: "Which of the following is NOT a fundamental duty under the Indian Constitution?",
        options: [
            "To safeguard public property",
            "To protect the natural environment",
            "To vote in public elections",
            "To abide by the Constitution"
        ],
        correctAnswer: 2, // C
        explanation: "Voting in public elections is NOT listed as a Fundamental Duty under Article 51A. It remains a right, not a duty.",
        level: "Easy"
    },
    {
        id: 25,
        question: "The Drafting Committee consisted of how many members?",
        options: [
            "5",
            "6",
            "7",
            "9"
        ],
        correctAnswer: 2, // C
        explanation: "The Drafting Committee had 7 members, with Dr. B.R. Ambedkar as the Chairman.",
        level: "Easy"
    },
    {
        id: 26,
        question: "Which Article of the Indian Constitution defines \"State\"?",
        options: [
            "Article 12",
            "Article 13",
            "Article 14",
            "Article 32"
        ],
        correctAnswer: 0, // A
        explanation: "Article 12 defines 'State' for the purpose of Part III (Fundamental Rights).",
        level: "Easy"
    },
    {
        id: 27,
        question: "The provisions regarding the suspension of Fundamental Rights during National Emergency were borrowed from:",
        options: [
            "Weimar Constitution of Germany",
            "Constitution of USSR",
            "Constitution of USA",
            "Constitution of Canada"
        ],
        correctAnswer: 0, // A
        explanation: "The provisions for suspension of Fundamental Rights during Emergency were borrowed from the Weimar Constitution of Germany.",
        level: "Moderate"
    },
    {
        id: 28,
        question: "Who among the following was NOT a member of the Drafting Committee?",
        options: [
            "Dr. K.M. Munshi",
            "Syed Mohammad Saadullah",
            "N. Madhava Rau",
            "Pattabhi Sitaramayya"
        ],
        correctAnswer: 3, // D
        explanation: "Pattabhi Sitaramayya was NOT a member of the Drafting Committee. The 7 members were: Ambedkar, N. Gopalaswami Ayyangar, Alladi Krishnaswami Ayyar, K.M. Munshi, Syed Mohammad Saadullah, N. Madhava Rau, and D.P. Khaitan (later T.T. Krishnamachari).",
        level: "Tough"
    },
    {
        id: 29,
        question: "The Universal Adult Franchise was adopted in the Constitution by reducing the voting age from 21 to 18 years through which Amendment?",
        options: [
            "42nd Amendment Act",
            "44th Amendment Act",
            "61st Amendment Act",
            "73rd Amendment Act"
        ],
        correctAnswer: 2, // C
        explanation: "The 61st Amendment Act, 1988 reduced the voting age from 21 to 18 years.",
        level: "Easy"
    },
    {
        id: 30,
        question: "The \"Basic Structure\" doctrine was propounded by the Supreme Court in which case?",
        options: [
            "Golaknath Case",
            "Kesavananda Bharati Case",
            "Minerva Mills Case",
            "Maneka Gandhi Case"
        ],
        correctAnswer: 1, // B
        explanation: "The Basic Structure doctrine was propounded in the Kesavananda Bharati v. State of Kerala case (1973).",
        level: "Easy"
    },
    {
        id: 31,
        question: "Which of the following features makes the Indian Constitution \"Rigid\"?",
        options: [
            "It can be amended by a simple majority.",
            "Some provisions require special majority and ratification by states.",
            "It is a written constitution.",
            "It provides for a parliamentary system."
        ],
        correctAnswer: 1, // B
        explanation: "The rigidity comes from the fact that some provisions require a special majority (2/3rd) in Parliament AND ratification by at least half of the states.",
        level: "Moderate"
    },
    {
        id: 32,
        question: "Who was the Chairman of the Provincial Constitution Committee?",
        options: [
            "Jawaharlal Nehru",
            "Sardar Vallabhbhai Patel",
            "Dr. B.R. Ambedkar",
            "J.B. Kripalani"
        ],
        correctAnswer: 1, // B
        explanation: "Sardar Vallabhbhai Patel was the Chairman of the Provincial Constitution Committee.",
        level: "Moderate"
    },
    {
        id: 33,
        question: "Which of the following is a feature of the Presidential system of government?",
        options: [
            "Collective Responsibility",
            "Dual Executive",
            "Separation of Legislature and Executive",
            "Dissolution of Lower House"
        ],
        correctAnswer: 2, // C
        explanation: "The Presidential system features strict separation of powers between the Legislature, Executive, and Judiciary.",
        level: "Easy"
    },
    {
        id: 34,
        question: "The original Constitution of India contained how many Articles and Schedules?",
        options: [
            "395 Articles and 8 Schedules",
            "395 Articles and 10 Schedules",
            "448 Articles and 12 Schedules",
            "395 Articles and 12 Schedules"
        ],
        correctAnswer: 0, // A
        explanation: "The original Constitution had 395 Articles and 8 Schedules. Currently, it has around 470 Articles and 12 Schedules.",
        level: "Easy"
    },
    {
        id: 35,
        question: "The method of election of the President of India is borrowed from:",
        options: [
            "USA",
            "Ireland",
            "France",
            "Canada"
        ],
        correctAnswer: 1, // B
        explanation: "The method of election of the President (indirect election by an electoral college with proportional representation and single transferable vote) is borrowed from Ireland.",
        level: "Easy"
    },
    {
        id: 36,
        question: "On which date was the Constitution of India adopted?",
        options: [
            "January 26, 1950",
            "November 26, 1949",
            "August 15, 1947",
            "December 9, 1946"
        ],
        correctAnswer: 1, // B
        explanation: "The Constitution was adopted on November 26, 1949 (celebrated as Constitution Day), and came into force on January 26, 1950 (Republic Day).",
        level: "Easy"
    },
    {
        id: 37,
        question: "Which of the following is a unitary feature of the Indian Constitution?",
        options: [
            "Written Constitution",
            "Division of Powers",
            "Single Constitution",
            "Independent Judiciary"
        ],
        correctAnswer: 2, // C
        explanation: "Single Constitution for both the Centre and States is a unitary feature. In USA, states have their own constitutions.",
        level: "Easy"
    },
    {
        id: 38,
        question: "Who described the Directive Principles of State Policy as a \"Novel Feature\" of the Indian Constitution?",
        options: [
            "Jawaharlal Nehru",
            "K.T. Shah",
            "Dr. B.R. Ambedkar",
            "Granville Austin"
        ],
        correctAnswer: 2, // C
        explanation: "Dr. B.R. Ambedkar described the DPSPs as a 'Novel Feature' of the Indian Constitution.",
        level: "Moderate"
    },
    {
        id: 39,
        question: "The Muslim League boycotted the first meeting of the Constituent Assembly. What was their demand?",
        options: [
            "Separate Electorate",
            "A separate state of Pakistan",
            "More seats in the Assembly",
            "Federal Government"
        ],
        correctAnswer: 1, // B
        explanation: "The Muslim League boycotted the Constituent Assembly demanding a separate state of Pakistan.",
        level: "Easy"
    },
    {
        id: 40,
        question: "The ideal of 'Justice' (Social, Economic, and Political) in the Preamble draws inspiration from:",
        options: [
            "French Revolution",
            "Russian Revolution",
            "American Revolution",
            "Irish Revolution"
        ],
        correctAnswer: 1, // B
        explanation: "The ideal of Justice (Social, Economic, and Political) was inspired by the Russian Revolution.",
        level: "Moderate"
    },
    {
        id: 41,
        question: "Which of the following committees was chaired by Dr. Rajendra Prasad?\n\n1. Rules of Procedure Committee\n2. Steering Committee\n3. States Committee\n\nSelect the correct answer:",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 0, // A
        explanation: "Dr. Rajendra Prasad chaired the Rules of Procedure Committee and Steering Committee. The States Committee (for negotiating with princely states) was chaired by Nehru.",
        level: "Tough"
    },
    {
        id: 42,
        question: "The term \"Cooperative Federalism\" is often used to describe the Indian Constitution by:",
        options: [
            "K.C. Wheare",
            "Granville Austin",
            "Ivor Jennings",
            "Morris Jones"
        ],
        correctAnswer: 1, // B
        explanation: "Granville Austin used the term 'Cooperative Federalism' to describe the Indian Constitution in his book 'The Indian Constitution: Cornerstone of a Nation'.",
        level: "Moderate"
    },
    {
        id: 43,
        question: "Which of the following provisions came into force on November 26, 1949 itself?",
        options: [
            "Fundamental Rights",
            "Citizenship",
            "Directive Principles",
            "Emergency Provisions"
        ],
        correctAnswer: 1, // B
        explanation: "Citizenship provisions (Arts. 5, 6, 7, 8, 9), Elections (Art. 324), and some other provisions came into force on November 26, 1949. The rest came into force on January 26, 1950.",
        level: "Moderate"
    },
    {
        id: 44,
        question: "The system of \"Single Citizenship\" in India is borrowed from:",
        options: [
            "USA",
            "Canada",
            "UK",
            "Australia"
        ],
        correctAnswer: 2, // C
        explanation: "Single Citizenship is borrowed from the British (UK) Constitution.",
        level: "Easy"
    },
    {
        id: 45,
        question: "Who replaced D.P. Khaitan on the Drafting Committee after his death in 1948?",
        options: [
            "N. Madhava Rau",
            "T.T. Krishnamachari",
            "B.L. Mitter",
            "K.M. Munshi"
        ],
        correctAnswer: 1, // B
        explanation: "T.T. Krishnamachari replaced D.P. Khaitan on the Drafting Committee after Khaitan's death in 1948.",
        level: "Tough"
    },
    {
        id: 46,
        question: "The Indian Constitution provides for a three-tier government. This feature was constitutionalized by:",
        options: [
            "42nd Amendment Act",
            "44th Amendment Act",
            "73rd and 74th Amendment Acts",
            "86th Amendment Act"
        ],
        correctAnswer: 2, // C
        explanation: "The 73rd Amendment (Panchayati Raj) and 74th Amendment (Municipalities) of 1992 constitutionalized the three-tier government structure.",
        level: "Easy"
    },
    {
        id: 47,
        question: "Which of the following is correct regarding the Constituent Assembly acting as the Dominion Legislature?",
        options: [
            "It was chaired by Dr. Rajendra Prasad.",
            "It was chaired by G.V. Mavalankar.",
            "It discussed the Draft Constitution.",
            "It met in the evening sessions only."
        ],
        correctAnswer: 1, // B
        explanation: "When the Constituent Assembly acted as the Dominion Legislature (to pass ordinary laws), it was chaired by G.V. Mavalankar. When it drafted the Constitution, it was chaired by Dr. Rajendra Prasad.",
        level: "Tough"
    },
    {
        id: 48,
        question: "The \"Synthesis of Parliamentary Sovereignty and Judicial Supremacy\" is a unique feature of the Indian Constitution. This synthesis is between the systems of:",
        options: [
            "Britain and Ireland",
            "Britain and USA",
            "USA and Canada",
            "USA and Ireland"
        ],
        correctAnswer: 1, // B
        explanation: "The Indian Constitution synthesizes the British doctrine of Parliamentary Sovereignty with the American doctrine of Judicial Supremacy.",
        level: "Moderate"
    },
    {
        id: 49,
        question: "The Ninth Schedule was added to the Constitution by the:",
        options: [
            "1st Amendment Act, 1951",
            "42nd Amendment Act, 1976",
            "44th Amendment Act, 1978",
            "73rd Amendment Act, 1992"
        ],
        correctAnswer: 0, // A
        explanation: "The Ninth Schedule was added by the 1st Amendment Act, 1951 to protect land reform laws from judicial scrutiny.",
        level: "Easy"
    },
    {
        id: 50,
        question: "Who called the Indian Constitution a \"Paradise for Lawyers\"?",
        options: [
            "Sir Ivor Jennings",
            "K.C. Wheare",
            "Granville Austin",
            "Dr. B.R. Ambedkar"
        ],
        correctAnswer: 0, // A
        explanation: "Sir Ivor Jennings, the British constitutional expert, called the Indian Constitution a 'Paradise for Lawyers' due to its detailed and lengthy nature.",
        level: "Easy"
    },
    {
        id: 51,
        question: "Consider the following statements about the Independence of Judiciary:\n\n1. The Supreme Court judges have a fixed tenure.\n2. The expenses of the Supreme Court are charged on the Consolidated Fund of India.\n\nWhich of the statements is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctAnswer: 2, // C
        explanation: "Both statements are correct. SC judges serve till 65 years of age (fixed tenure) and expenses are charged on the Consolidated Fund of India (non-votable).",
        level: "Moderate"
    },
    {
        id: 52,
        question: "The elections to the Constituent Assembly were held in:",
        options: [
            "July-August 1946",
            "December 1946",
            "January 1947",
            "August 1947"
        ],
        correctAnswer: 0, // A
        explanation: "The elections to the Constituent Assembly were held in July-August 1946.",
        level: "Easy"
    },
    {
        id: 53,
        question: "Which feature of the Indian Constitution ensures the \"Secular\" nature of the state?",
        options: [
            "Uniform Civil Code",
            "Fundamental Rights (Articles 25-28)",
            "Directive Principles",
            "Single Citizenship"
        ],
        correctAnswer: 1, // B
        explanation: "Articles 25-28 (Right to Freedom of Religion) in Part III ensure the secular nature of the Indian state.",
        level: "Easy"
    },
    {
        id: 54,
        question: "Who proposed the Preamble before the Drafting Committee?",
        options: [
            "Jawaharlal Nehru",
            "B.N. Rau",
            "B.R. Ambedkar",
            "Mahatma Gandhi"
        ],
        correctAnswer: 0, // A
        explanation: "Jawaharlal Nehru proposed the Objective Resolution which later became the basis of the Preamble.",
        level: "Easy"
    },
    {
        id: 55,
        question: "The provisions of \"Freedom of Trade, Commerce and Intercourse\" were borrowed from:",
        options: [
            "UK",
            "USA",
            "Australia",
            "Canada"
        ],
        correctAnswer: 2, // C
        explanation: "Freedom of Trade, Commerce and Intercourse (Part XIII) was borrowed from the Australian Constitution.",
        level: "Moderate"
    },
    {
        id: 56,
        question: "Which of the following functions was NOT performed by the Constituent Assembly?",
        options: [
            "Adoption of National Flag",
            "Adoption of National Anthem",
            "Ratification of India's membership of the Commonwealth",
            "Electing the first Prime Minister of India"
        ],
        correctAnswer: 3, // D
        explanation: "The Constituent Assembly did not elect the first Prime Minister. It elected the first President (Dr. Rajendra Prasad). The PM was appointed by the Governor-General.",
        level: "Moderate"
    },
    {
        id: 57,
        question: "The concept of \"Rule of Law\" in India is reflected in:",
        options: [
            "Article 13",
            "Article 14",
            "Article 21",
            "Article 32"
        ],
        correctAnswer: 1, // B
        explanation: "Article 14 (Equality before Law) reflects the concept of Rule of Law in India.",
        level: "Easy"
    },
    {
        id: 58,
        question: "Who among the following was the Vice-President of the Constituent Assembly?",
        options: [
            "H.C. Mukherjee",
            "B.N. Rau",
            "K.M. Munshi",
            "J.B. Kripalani"
        ],
        correctAnswer: 0, // A
        explanation: "H.C. Mukherjee was the Vice-President of the Constituent Assembly. V.T. Krishnamachari was also a Vice-President.",
        level: "Moderate"
    },
    {
        id: 59,
        question: "The \"Federal System with a Strong Centre\" was borrowed from which country?",
        options: [
            "USA",
            "Canada",
            "Australia",
            "Germany"
        ],
        correctAnswer: 1, // B
        explanation: "The Federal System with a Strong Centre and residuary powers with the Centre were borrowed from the Canadian Constitution.",
        level: "Easy"
    },
    {
        id: 60,
        question: "Which of the following is considered the \"Soul of the Constitution\" by Thakurdas Bhargava?",
        options: [
            "Fundamental Rights",
            "Directive Principles",
            "Preamble",
            "Right to Constitutional Remedies"
        ],
        correctAnswer: 2, // C
        explanation: "Thakurdas Bhargava called the Preamble the 'Soul of the Constitution'. Note: Dr. Ambedkar called Article 32 the 'Heart and Soul' of the Constitution.",
        level: "Easy"
    }
];
