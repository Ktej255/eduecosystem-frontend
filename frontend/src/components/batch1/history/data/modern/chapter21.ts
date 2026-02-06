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

export const MODERN_CHAPTER_21_SUBTOPICS = [
    { id: 1, name: "Post-War Upsurge (INA Trials, RIN Mutiny)", status: 'todo' },
    { id: 2, name: "Cabinet Mission Plan (1946)", status: 'todo' },
    { id: 3, name: "Direct Action Day & Interim Government", status: 'todo' },
    { id: 4, name: "Towards Freedom (Attlee, Mountbatten Plan, Independence Act)", status: 'todo' },
    { id: 5, name: "Integration of Princely States", status: 'todo' },
];

export const MODERN_CHAPTER_21_MCQS = [
    {
        id: 1,
        question: "The 'Red Fort Trials' (1945) garnered unprecedented public support across religious and political lines. Who were the three INA officers put on trial together?",
        options: ["Subhash Bose, Rashbehari Bose, and Mohan Singh", "Prem Kumar Sahgal, Shah Nawaz Khan, and Gurbaksh Singh Dhillon", "Bhagat Singh, Rajguru, and Sukhdev", "Lakshmi Sehgal, Aruna Asaf Ali, and Usha Mehta"],
        correctAnswer: 1,
        explanation: "Prem Kumar Sahgal, Shah Nawaz Khan, Gurbaksh Singh Dhillon (A Hindu, A Muslim, A Sikh - symbolic unity).",
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "Who led the panel of defense lawyers for the INA prisoners at the Red Fort?",
        options: ["Jawaharlal Nehru", "Tej Bahadur Sapru", "Bhulabhai Desai", "Kailash Nath Katju"],
        correctAnswer: 2,
        explanation: "Bhulabhai Desai led the defense (Nehru and Katju also donned robes after years).",
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "The 'Royal Indian Navy (RIN) Mutiny' started in February 1946 on the ship:",
        options: ["HMIS Talwar", "HMIS Hindustan", "HMIS Shivaji", "Komagata Maru"],
        correctAnswer: 0,
        explanation: "HMIS Talwar (Signal School) in Bombay.",
        cognitiveLevel: "Fact"
    },
    {
        id: 4,
        question: "The RIN mutineers surrendered on the advice of:",
        options: ["Mahatma Gandhi and Jawaharlal Nehru", "Vallabhbhai Patel and M.A. Jinnah", "Lord Wavell", "The Admiral of the Fleet"],
        correctAnswer: 1,
        explanation: "Patel and Jinnah persuaded the ratings to surrender, promising no victimization (a promise the British didn't keep fully).",
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "Which of the following was NOT a demand of the RIN mutineers?",
        options: ["Release of INA prisoners.", "Equal pay for Indian and European sailors.", "Withdrawal of Indian troops from Indonesia.", "Immediate partition of India."],
        correctAnswer: 3,
        explanation: "They demanded better food, equal pay, and release of INA prisoners. They did not demand partition; in fact, they flew Congress, League, and Communist flags together.",
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "The Cabinet Mission (1946) rejected the demand for a full-fledged Pakistan primarily because:",
        options: ["It would destroy the unity of the Indian Army.", "It would not solve the communal minority problem (large Sikh/Hindu populations would remain in Punjab/Bengal).", "The British wanted a united India for defense purposes in the Cold War context.", "All of the above."],
        correctAnswer: 3,
        explanation: "All reasons are correct. A divided army was a security risk for British strategic interests in the Indian Ocean.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 7,
        question: "The Cabinet Mission proposed a 'Three-Tier' executive and legislature. The Centre (Union of India) was to control only:",
        options: ["Defence, Foreign Affairs, and Communications.", "Defence, Currency, and Railways.", "Foreign Affairs, Home, and Finance.", "Defence and Internal Security."],
        correctAnswer: 0,
        explanation: "Defence, Foreign Affairs, and Communications. (A weak centre).",
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "The controversial 'Grouping Clause' of the Cabinet Mission grouped provinces into Sections A, B, and C. Section 'B' included:",
        options: ["Madras, Bombay, UP, Bihar, Central Provinces, Orissa.", "Punjab, NWFP, Sindh.", "Bengal and Assam.", "Punjab and Bengal."],
        correctAnswer: 1,
        explanation: "Section A: Hindu Majority (Madras, Bombay, UP, etc.); Section B: Muslim Majority NW (Punjab, Sindh, NWFP); Section C: Muslim Majority East (Bengal, Assam).",
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "Why did the Congress accept the Cabinet Mission Plan initially?",
        options: ["It promised Pakistan.", "It interpreted the 'Grouping' of provinces as optional, preserving the unity of India.", "It promised immediate independence.", "It gave Gandhi the power to select the Viceroy."],
        correctAnswer: 1,
        explanation: "Congress thought Grouping was optional (Provinces could choose). League thought it was compulsory (creating Pakistan in disguise). This interpretation difference killed the plan.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 10,
        question: "Why did the Muslim League withdraw its acceptance of the Cabinet Mission Plan and launch 'Direct Action'?",
        options: ["Nehru stated that the Constituent Assembly was sovereign and could change the 'Grouping' arrangement.", "The British refused to give Jinnah a veto.", "The Viceroy refused to include League members in the Interim Government.", "The Plan explicitly banned Pakistan."],
        correctAnswer: 0,
        explanation: "Nehru's press conference stating the Constituent Assembly was 'sovereign' and could alter the plan made Jinnah feel unsafe without a guarantee.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 11,
        question: "The 'Direct Action Day' was observed by the Muslim League on:",
        options: ["August 16, 1946", "August 15, 1947", "January 26, 1950", "December 22, 1939"],
        correctAnswer: 0,
        explanation: "Aug 16, 1946.",
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "In the 'Interim Government' formed in September 1946, who held the portfolio of 'Finance'?",
        options: ["John Mathai", "Liaquat Ali Khan", "C. Rajagopalachari", "Sardar Patel"],
        correctAnswer: 1,
        explanation: "Liaquat Ali Khan (League).",
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "Liaquat Ali Khan used his position as Finance Member to:",
        options: ["Help the Congress ministries.", "Obstruct the functioning of the government and prove that Congress and League could not work together (e.g., severe taxation on businessmen).", "Support the INA.", "Fund the Pakistan movement."],
        correctAnswer: 1,
        explanation: "He used the Finance portfolio to block Congress initiatives and presented a 'Socialist Budget' to hit the Hindu industrialists who supported Congress.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 14,
        question: "Who was the 'Home Member' (Home Minister) in the Interim Government?",
        options: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Rajendra Prasad", "Baldev Singh"],
        correctAnswer: 1,
        explanation: "Sardar Patel.",
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "Clement Attlee’s historic statement in the House of Commons on February 20, 1947, announced:",
        options: ["Immediate Partition.", "A deadline of June 30, 1948, for the transfer of power.", "The appointment of the Simon Commission.", "The cancellation of independence."],
        correctAnswer: 1,
        explanation: "Deadline: June 30, 1948 (Later advanced by Mountbatten to Aug 1947).",
        cognitiveLevel: "Fact"
    },
    {
        id: 16,
        question: "'Plan Balkan' was an early plan proposed by Mountbatten which envisaged:",
        options: ["Transfer of power to separate provinces (rendering them independent successor states) rather than a central government, leading to balkanization.", "A federation of South Asian states.", "Transfer of power to the Princes.", "A United India."],
        correctAnswer: 0,
        explanation: "It proposed transferring power to individual provinces, leading to Balkanization.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 17,
        question: "Who vehemently opposed 'Plan Balkan', forcing Mountbatten to draft the June 3rd Plan instead?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "V.P. Menon"],
        correctAnswer: 1,
        explanation: "Nehru saw the plan at Simla and rejected it instantly as a recipe for anarchy.",
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "The 'Mountbatten Plan' (June 3, 1947) provided for:\n1. Partition of India.\n2. Referendum in NWFP and Sylhet district of Assam.\n3. Creation of a Boundary Commission.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All features are correct.",
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "Who was the Chairman of the Boundary Commissions appointed to demarcate the borders of Punjab and Bengal?",
        options: ["Lord Mountbatten", "Cyril Radcliffe", "Stafford Cripps", "Pethick Lawrence"],
        correctAnswer: 1,
        explanation: "Cyril Radcliffe (who had never been to India before).",
        cognitiveLevel: "Fact"
    },
    {
        id: 20,
        question: "The 'Indian Independence Act, 1947' marked the end of British rule. Regarding the Princely States, it:",
        options: ["Transferred paramountcy to the Indian Union.", "Transferred paramountcy to Pakistan.", "Lapsed the British paramountcy, leaving states theoretically free to join India, Pakistan, or remain independent.", "Forced them to join India."],
        correctAnswer: 2,
        explanation: "Paramountcy lapsed. States became technically independent, creating a dangerous vacuum.",
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "Who played the most critical role alongside Sardar Patel in the integration of Princely States?",
        options: ["Jawaharlal Nehru", "V.P. Menon", "Lord Mountbatten", "Rajendra Prasad"],
        correctAnswer: 1,
        explanation: "V.P. Menon (Secretary of the States Ministry).",
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "Which three states initially refused to accede to India by August 15, 1947?",
        options: ["Hyderabad, Junagadh, Kashmir", "Travancore, Bhopal, Jodhpur", "Mysore, Hyderabad, Jaipur", "Kashmir, Mysore, Baroda"],
        correctAnswer: 0,
        explanation: "Hyderabad, Junagadh, Kashmir. (Travancore and Jodhpur flirted with the idea but acceded before Aug 15).",
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "The 'Instrument of Accession' signed by the Princes initially transferred only three subjects to the Dominion of India. These were:",
        options: ["Defence, Foreign Affairs, and Communications", "Defence, Finance, and Home", "Foreign Affairs, Currency, and Railways", "Trade, Commerce, and Industries"],
        correctAnswer: 0,
        explanation: "Defence, Foreign Affairs, Communications.",
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "Arrange the following events in chronological order:\n1. RIN Mutiny\n2. Cabinet Mission\n3. Direct Action Day\n4. Attlee’s Statement",
        options: ["1-2-3-4", "1-3-2-4", "2-1-3-4", "1-2-4-3"],
        correctAnswer: 0,
        explanation: "RIN (Feb) -> Cabinet (March) -> Direct Action (Aug) -> Attlee (Feb next year).",
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "'The Congress had accepted the partition of India to avoid the partition of the Congress.' Who holds this view?",
        options: ["Ram Manohar Lohia", "Maulana Azad", "Sucheta Kripalani", "C.H. Setalvad"],
        correctAnswer: 0,
        explanation: "Ram Manohar Lohia (Socialist view).",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 26,
        question: "Who was the Congress President when India became independent in 1947?",
        options: ["Jawaharlal Nehru", "J.B. Kripalani", "Maulana Azad", "Rajendra Prasad"],
        correctAnswer: 1,
        explanation: "J.B. Kripalani.",
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "The 'Punnapra-Vayalar' struggle (1946) was a communist-led uprising against the Diwan (C.P. Ramaswamy Aiyar) of which state?",
        options: ["Hyderabad", "Travancore", "Mysore", "Kashmir"],
        correctAnswer: 1,
        explanation: "Travancore. (Against the 'American Model' constitution proposed by the Diwan).",
        cognitiveLevel: "Fact"
    },
    {
        id: 28,
        question: "'Tebhaga Movement' in Bengal (1946) was led by:",
        options: ["The Kisan Sabha (Communists)", "The Congress", "The Muslim League", "The Forward Bloc"],
        correctAnswer: 0,
        explanation: "Kisan Sabha (Communists). Demand: 2/3rd share for sharecroppers.",
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "What was the 'Dickie Bird Plan'?",
        options: ["Another name for Plan Balkan (Mountbatten's plan).", "The plan to invade Burma.", "The plan to arrest Gandhi.", "The plan for the partition of the army."],
        correctAnswer: 0,
        explanation: "Dickie Bird Plan is another name for Plan Balkan (drafted by Ismay/Mountbatten).",
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "Why did Gandhi not celebrate Independence Day on August 15, 1947?",
        options: ["He was ill.", "He was in Calcutta, fasting to stop communal riots.", "He was in Pakistan.", "He had retired from politics."],
        correctAnswer: 1,
        explanation: "He was in Calcutta, mourning the partition and trying to stop the riots (Hydari Manzil).",
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "The 'Desai-Liaquat Pact' failed because:",
        options: ["It was an informal pact not backed by the official leadership.", "It proposed a dictatorship.", "The British rejected it.", "It was too pro-Hindu."],
        correctAnswer: 0,
        explanation: "It was an informal pact not backed by the official leadership.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 32,
        question: "The 'Wavell Plan' broke down at Simla because:",
        options: ["Congress wanted to nominate a Muslim member, but Jinnah insisted that only the League could nominate Muslims.", "Wavell refused to give up the Veto power.", "Gandhi wanted immediate independence.", "Nehru wanted to be PM."],
        correctAnswer: 0,
        explanation: "The communal deadlock over nomination.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 33,
        question: "Which province held a referendum to decide whether to join India or Pakistan?",
        options: ["Punjab", "North-West Frontier Province (NWFP)", "Sindh", "Baluchistan"],
        correctAnswer: 1,
        explanation: "NWFP. (Khan Abdul Ghaffar Khan boycotted it, so it went in favor of Pakistan).",
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "The 'Standstill Agreement' was signed by the Nizam of Hyderabad with the Government of India in Nov 1947 to:",
        options: ["Accede to India.", "Maintain the status quo for one year while negotiations continued.", "Join Pakistan.", "Declare war."],
        correctAnswer: 1,
        explanation: "Status quo for one year.",
        cognitiveLevel: "Fact"
    },
    {
        id: 35,
        question: "'Operation Polo' (1948) was the code name for:",
        options: ["The police action to integrate Hyderabad.", "The war in Kashmir.", "The liberation of Goa.", "The partition of the army."],
        correctAnswer: 0,
        explanation: "Police action in Hyderabad.",
        cognitiveLevel: "Fact"
    }
];
