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

export const MODERN_CHAPTER_19_SUBTOPICS = [
    { id: 1, name: "Debate on Future Strategy (1934)", status: 'todo' },
    { id: 2, name: "Government of India Act, 1935", status: 'todo' },
    { id: 3, name: "Provincial Elections (1937)", status: 'todo' },
    { id: 4, name: "Work of Congress Ministries (1937-39)", status: 'todo' },
    { id: 5, name: "Haripura & Tripuri Crisis", status: 'todo' },
];

export const MODERN_CHAPTER_19_MCQS = [
    {
        id: 1,
        question: "In the debate on future strategy after the withdrawal of the Civil Disobedience Movement, Jawaharlal Nehru and the Leftists advocated:",
        options: ["S-T-S (Struggle-Truce-Struggle) strategy.", "S-V (Struggle-Victory) strategy, implying continuous mass struggle till independence.", "Council Entry to cooperate with the British.", "Constructive work only."],
        correctAnswer: 1,
        explanation: "Nehru and Leftists argued that S-T-S would cool down the masses. They wanted continuous struggle (S-V) to overthrow the Raj.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 2,
        question: "The 'Congress Socialist Party' (CSP) was founded in 1934 at Bombay. Who among the following was NOT a founding member?",
        options: ["Jayaprakash Narayan", "Acharya Narendra Dev", "Minoo Masani", "Jawaharlal Nehru"],
        correctAnswer: 3,
        explanation: "Nehru had socialist leanings and supported them, but he never officially joined the CSP to maintain his position as a bridge between Gandhi and the Left.",
        cognitiveLevel: "Fact"
    },
    {
        id: 3,
        question: "The 'Struggle-Truce-Struggle' (S-T-S) strategy propounded by Gandhi implied that:",
        options: ["The movement should be violent during the struggle phase and non-violent during the truce.", "A phase of mass struggle must be followed by a phase of constructive work (truce) to allow masses to recuperate, before the next struggle.", "The Congress should split into two wings.", "The struggle should be permanent without any break."],
        correctAnswer: 1,
        explanation: "Masses have a limited capacity for sacrifice. Truce is a breathing space to consolidate and regroup, not a surrender.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 4,
        question: "Which of the following was NOT a feature of the Government of India Act, 1935?",
        options: ["It proposed an 'All India Federation' consisting of British Provinces and Princely States.", "It introduced 'Provincial Autonomy' replacing Dyarchy in the provinces.", "It vested the 'Residual Powers' in the Federal Legislature.", "It separated Burma from India."],
        correctAnswer: 2,
        explanation: "Residual Powers were vested in the Viceroy/Governor-General, not the Legislature.",
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "The 'All India Federation' envisaged by the Act of 1935 never came into existence because:",
        options: ["The Congress opposed it.", "The Muslim League opposed it.", "The Princely States refused to join it (as they feared losing their autonomy).", "The British Parliament withdrew the offer."],
        correctAnswer: 2,
        explanation: "The Princes refused to join. Since their joining was a precondition (50% population requirement), the Federation part never came into force.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 6,
        question: "Who described the Government of India Act, 1935 as 'A machine with all brakes and no engine'?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "M.A. Jinnah"],
        correctAnswer: 1,
        explanation: "Jawaharlal Nehru called it a 'Charter of Slavery' and a 'machine with strong brakes but no engine'.",
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "Under the Act of 1935, the 'Dyarchy' system was:",
        options: ["Abolished completely at all levels.", "Introduced at the Centre (Federal Executive).", "Retained in the Provinces.", "Introduced in the Judiciary."],
        correctAnswer: 1,
        explanation: "Dyarchy (Reserved/Transferred subjects) was removed from Provinces (Provincial Autonomy) and introduced at the Centre.",
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "The 'Federal Court' established under the Act of 1935 was located in:",
        options: ["Calcutta", "Bombay", "Delhi", "Madras"],
        correctAnswer: 2,
        explanation: "Delhi. It began functioning in 1937.",
        cognitiveLevel: "Fact"
    },
    {
        id: 9,
        question: "In the 1937 Provincial Elections, the Congress secured an absolute majority in how many provinces?",
        options: ["Three", "Five", "Eight", "Eleven"],
        correctAnswer: 1,
        explanation: "Five Provinces: Madras, UP, Bihar, Central Provinces, and Orissa. (In Bombay, it won nearly half and formed govt with support).",
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "In which of the following provinces did the Congress NOT form a ministry (even as a coalition) in 1937?\n1. Bengal\n2. Punjab\n3. Sindh",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3,
        explanation: "In Bengal, Punjab (Unionist), and Sindh, the Congress did not form the ministry initially (or ever).",
        cognitiveLevel: "Fact"
    },
    {
        id: 11,
        question: "The 'Unionist Party' formed the government in Punjab in 1937 under the leadership of:",
        options: ["Fazl-ul-Haq", "Sikandar Hayat Khan", "Khan Abdul Ghaffar Khan", "Allah Bakhsh"],
        correctAnswer: 1,
        explanation: "Sikandar Hayat Khan led the Unionist Party (Coalition of Hindus, Muslims, Sikhs peasants).",
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "The Congress Ministries resigned in October-November 1939 primarily because:",
        options: ["The British government failed to abolish Zamindari.", "There was infighting within the Congress.", "India was declared a party to World War II without the consent of the Indian people.", "The Governor-Generals interfered in day-to-day administration."],
        correctAnswer: 2,
        explanation: "Viceroy Linlithgow declared India at war with Germany without consulting the Central Legislature.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 13,
        question: "Regarding the agrarian policy of the Congress Ministries (1937-39), which of the following statements is true?",
        options: ["They completely abolished the Zamindari system in all Congress-ruled provinces.", "They passed Tenancy Acts to secure the rights of tenants but could not abolish Zamindari due to constitutional and financial constraints.", "They supported the landlords against the peasants.", "They redistributed all land to the landless."],
        correctAnswer: 1,
        explanation: "The Legislative Councils (Upper Houses) in provinces blocked radical bills, and Congress lacked adequate finance/sovereignty to compensate landlords.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 14,
        question: "The 'Vidyamandir Scheme' of education was introduced by the Congress Ministry in:",
        options: ["Madras", "Central Provinces (CP)", "United Provinces (UP)", "Bihar"],
        correctAnswer: 1,
        explanation: "Central Provinces (under Ravi Shankar Shukla).",
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "Who led the 'Pirpur Committee' appointed by the Muslim League in 1938?",
        options: ["Raja of Pirpur", "Liaquat Ali Khan", "Fazl-ul-Haq", "Khaliquzzaman"],
        correctAnswer: 0,
        explanation: "Raja of Pirpur. The report cataloged alleged 'injustices' to inflame communal passions.",
        cognitiveLevel: "Fact"
    },
    {
        id: 16,
        question: "The 'National Planning Committee' was set up in 1938 by Subhash Chandra Bose. Who was appointed as its Chairman?",
        options: ["Subhash Chandra Bose", "Jawaharlal Nehru", "M. Visvesvaraya", "K.T. Shah"],
        correctAnswer: 1,
        explanation: "Jawaharlal Nehru. Bose (President) appointed him.",
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "Subhash Chandra Bose was elected President of the Congress at the 'Haripura Session' (1938). Haripura is located in:",
        options: ["Maharashtra", "Gujarat", "Bengal", "Madhya Pradesh"],
        correctAnswer: 1,
        explanation: "Haripura is in Gujarat.",
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "In the 'Tripuri Session' (1939), Subhash Chandra Bose defeated which candidate supported by Mahatma Gandhi?",
        options: ["Jawaharlal Nehru", "Pattabhi Sitaramayya", "Maulana Azad", "Rajendra Prasad"],
        correctAnswer: 1,
        explanation: "Pattabhi Sitaramayya.",
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "Why did Subhash Chandra Bose resign from the Presidentship of the Congress in 1939?",
        options: ["He wanted to retire from politics.", "The Congress Working Committee (dominated by the Gandhi wing) refused to cooperate with him, creating a deadlock.", "He was arrested by the British.", "He formed the INA immediately."],
        correctAnswer: 1,
        explanation: "Gandhi and the Pant Resolution restricted Bose's power to appoint the Working Committee, forcing him to resign.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 20,
        question: "After Bose's resignation, who became the President of the Congress for the remaining period?",
        options: ["Jawaharlal Nehru", "Rajendra Prasad", "Abul Kalam Azad", "Sardar Patel"],
        correctAnswer: 1,
        explanation: "Rajendra Prasad.",
        cognitiveLevel: "Fact"
    },
    {
        id: 21,
        question: "The 'Forward Bloc' was formed by Subhash Chandra Bose in 1939 as:",
        options: ["A new party outside the Congress.", "A radical bloc within the Congress.", "A communist organization.", "A student union."],
        correctAnswer: 1,
        explanation: "It was a bloc within the Congress to rally the radical elements. (Later he was expelled from Congress).",
        cognitiveLevel: "Fact"
    },
    {
        id: 22,
        question: "The 'All India States People's Conference' (AISPC) was founded in 1927 to:",
        options: ["Represent the interests of the Princes.", "Coordinate the political struggle of the people in the Princely States against feudal oppression.", "Support the British Resident.", "Merge all states into Pakistan."],
        correctAnswer: 1,
        explanation: "It was the organization of the people of the Princely States (Praja Mandals).",
        cognitiveLevel: "Fact"
    },
    {
        id: 23,
        question: "Who was elected the President of the All India States People's Conference in 1939, bringing the movement closer to the Congress?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Balvantray Mehta", "Sheikh Abdullah"],
        correctAnswer: 1,
        explanation: "Jawaharlal Nehru became President in 1939 at the Ludhiana session.",
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "The 'Butler Committee' (1927) was appointed to inquire into:",
        options: ["The Jallianwala Bagh massacre.", "The relationship between the Paramount Power (British Crown) and the Indian States (Princes).", "The education system in India.", "The reforms in the army."],
        correctAnswer: 1,
        explanation: "It asserted that Paramountcy (British control over Princes) must remain supreme and states cannot be handed over to an Indian government without their consent.",
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "The famous 'Rajkot Satyagraha' (1939) involving Gandhi was related to:",
        options: ["Temple Entry.", "Democratization of the administration in the Princely State of Rajkot.", "Salt tax.", "Indigo cultivation."],
        correctAnswer: 1,
        explanation: "It was a struggle against the Thakore Sahib of Rajkot for democratic reforms. Kasturba Gandhi was arrested here.",
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "Why did Jawaharlal Nehru eventually accept the formation of Congress Ministries in 1937 despite calling the 1935 Act a 'Charter of Slavery'?",
        options: ["He wanted power.", "He saw it as a short-term strategy to combat the Federation scheme and build mass contact from within.", "Gandhi forced him.", "The British bribed him."],
        correctAnswer: 1,
        explanation: "To work the Act for a while to demonstrate its hollowness and to use the ministries to strengthen the national movement (Combat Federation).",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 27,
        question: "The 'Mass Contact Programme' launched by the Congress in 1937 was primarily aimed at:",
        options: ["Recruiting soldiers.", "Reaching out to the Muslims to counter the League's propaganda.", "Collecting funds.", "Educating women."],
        correctAnswer: 1,
        explanation: "To reach out to the Muslim masses directly, bypassing the League. It failed due to lack of activists and League's counter-propaganda.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 28,
        question: "'Paramountcy must remain paramount.' This was the core conclusion of:",
        options: ["The Nehru Report", "The Butler Committee Report", "The Simon Commission", "The Cripps Mission"],
        correctAnswer: 1,
        explanation: "Butler Committee.",
        cognitiveLevel: "Fact"
    },
    {
        id: 29,
        question: "The 'Sharif Report' (1939) and 'Fazl-ul-Haq Report' were published by the Muslim League to:",
        options: ["Demand Pakistan.", "List the alleged 'atrocities' and discrimination by Congress Ministries against Muslims.", "Support the British war effort.", "Propose educational reforms."],
        correctAnswer: 1,
        explanation: "These reports (along with Pirpur) were tools of communal propaganda.",
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "Who coined the term 'Pakistan'?",
        options: ["Muhammad Ali Jinnah", "Chaudhary Rahmat Ali", "Muhammad Iqbal", "Liaquat Ali Khan"],
        correctAnswer: 1,
        explanation: "Chaudhary Rahmat Ali (a Cambridge student) in his pamphlet Now or Never (1933).",
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "The 'Tripuri Crisis' exposed the ideological rift between:",
        options: ["Moderates and Extremists", "The Right Wing (Gandhi/Patel) and the Left Wing (Bose/Socialists) within the Congress.", "Hindus and Muslims.", "Congress and the British."],
        correctAnswer: 1,
        explanation: "Right vs Left. Gandhi feared Bose would lead the Congress into a premature violent struggle.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 32,
        question: "During the 28 months of Congress rule, the Governor of which province was forced to dismiss the Premier (Chief Minister) Allah Bakhsh?",
        options: ["Sindh", "Punjab", "Bengal", "NWFP"],
        correctAnswer: 0,
        explanation: "Sindh.",
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "Which socialist leader famously said, 'I am a socialist and a republican, and am no believer in kings and princes'?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad"],
        correctAnswer: 1,
        explanation: "Jawaharlal Nehru (Lucknow Session, 1936).",
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "The 'National Planning Committee' (1938) is significant because it marked the acceptance of:",
        options: ["Gandhian economy (Charkha).", "Industrialization and State Planning as the path for free India.", "Laissez-faire capitalism.", "Foreign investment."],
        correctAnswer: 1,
        explanation: "It laid the foundation for the Five Year Plans in independent India.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 35,
        question: "The 'Day of Deliverance' (Dec 22, 1939) was observed by the Muslim League to celebrate:",
        options: ["The passing of the Lahore Resolution.", "The resignation of Congress Ministries.", "The victory of Allied powers.", "The formation of the League government in Bengal."],
        correctAnswer: 1,
        explanation: "Jinnah called for a Day of Deliverance when Congress ministries resigned, celebrating 'relief' from 'Hindu Raj'.",
        cognitiveLevel: "Fact"
    }
];
