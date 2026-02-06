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

export const MODERN_CHAPTER_20_SUBTOPICS = [
    { id: 1, name: "World War II & Resignation (1939)", status: 'todo' },
    { id: 2, name: "August Offer (1940) & Individual Satyagraha", status: 'todo' },
    { id: 3, name: "Cripps Mission (1942)", status: 'todo' },
    { id: 4, name: "Quit India Movement (1942)", status: 'todo' },
    { id: 5, name: "C.R. Formula (1944) & Wavell Plan (1945)", status: 'todo' },
    { id: 6, name: "Indian National Army (INA)", status: 'todo' },
];

export const MODERN_CHAPTER_20_MCQS = [
    {
        id: 1,
        question: "The 'August Offer' (1940) proposed by Viceroy Linlithgow for the first time conceded the demand for:",
        options: ["Complete Independence.", "A Constituent Assembly established by Indians (Mainly Indians).", "Immediate establishment of a National Government at the Centre.", "Partition of India."],
        correctAnswer: 1,
        explanation: "August Offer (1940) conceded the Constituent Assembly (Mainly Indians) and expanded the Executive Council.",
        cognitiveLevel: "Fact"
    },
    {
        id: 2,
        question: "Why did the Congress reject the 'August Offer'?\n1. It offered only 'Dominion Status' which was no longer the goal.\n2. It gave the Muslim League a 'veto' power over any constitutional settlement.\n3. It did not promise immediate transfer of power.",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
        correctAnswer: 3,
        explanation: "Congress rejected it because it didn't offer Independence (only Dominion status) and gave a veto to the League.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 3,
        question: "The primary objective of the 'Individual Satyagraha' launched in October 1940 was to:",
        options: ["Paralyze the British administration by mass strikes.", "Affirm the right to free speech and express moral opposition to the war effort without embarrassing the British during the crisis.", "Demand the release of political prisoners.", "Prepare the masses for a violent revolution."],
        correctAnswer: 1,
        explanation: "It was a symbolic protest to express anti-war stance through free speech without disrupting the war effort massively.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 4,
        question: "Who was the second Individual Satyagrahi chosen by Mahatma Gandhi?",
        options: ["Vinoba Bhave", "Jawaharlal Nehru", "Brahma Datt", "Sardar Patel"],
        correctAnswer: 1,
        explanation: "1st: Vinoba Bhave; 2nd: Jawaharlal Nehru.",
        cognitiveLevel: "Fact"
    },
    {
        id: 5,
        question: "The slogan 'Delhi Chalo' (March to Delhi) was associated with which movement during 1940-41?",
        options: ["The INA campaign", "Individual Satyagraha", "Quit India Movement", "Khilafat Movement"],
        correctAnswer: 1,
        explanation: "Individual Satyagrahis were supposed to march towards Delhi (Delhi Chalo) if not arrested.",
        cognitiveLevel: "Fact"
    },
    {
        id: 6,
        question: "Which of the following was NOT a proposal of the Cripps Mission?",
        options: ["Dominion Status for India with the right to secede from the Commonwealth.", "A Constituent Assembly consisting of members elected by Provincial Assemblies and nominated by Princes.", "Any Province could refuse to accept the new Constitution and form a separate Union (Right to Secede).", "Immediate transfer of the Defence portfolio to an Indian Minister."],
        correctAnswer: 3,
        explanation: "Defence was to remain in British hands during the war. This was a major sticking point.",
        cognitiveLevel: "Fact"
    },
    {
        id: 7,
        question: "Mahatma Gandhi described the Cripps Mission proposals as:",
        options: ["'A Charter of Slavery.'", "'A post-dated cheque on a crumbling bank.'", "'A Magna Carta of Indian Liberties.'", "'The death warrant of Indian unity.'"],
        correctAnswer: 1,
        explanation: "'Post-dated cheque' (on a crumbling/crashing bank - the latter part is often attributed to a journalist but popularly associated with Gandhi).",
        cognitiveLevel: "Fact"
    },
    {
        id: 8,
        question: "Why did the Muslim League reject the Cripps proposals?",
        options: ["It did not offer Pakistan clearly and explicitly.", "It gave too much power to the Centre.", "It proposed a single Constituent Assembly.", "It disallowed the Princes from joining Pakistan."],
        correctAnswer: 2,
        explanation: "League rejected it because it proposed a single Constituent Assembly (though it had the secession clause, League wanted explicit Pakistan).",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 9,
        question: "Who were the official Congress negotiators with the Cripps Mission?",
        options: ["Gandhi and Patel", "Jawaharlal Nehru and Maulana Azad", "Rajendra Prasad and J.B. Kripalani", "C. Rajagopalachari and Bhulabhai Desai"],
        correctAnswer: 1,
        explanation: "Nehru and Azad were the official negotiators.",
        cognitiveLevel: "Fact"
    },
    {
        id: 10,
        question: "The 'Quit India Resolution' was ratified by the All India Congress Committee (AICC) on August 8, 1942, at:",
        options: ["Wardha", "Gowalia Tank Maidan, Bombay", "Ramgarh", "Calcutta"],
        correctAnswer: 1,
        explanation: "Gowalia Tank Maidan, Bombay.",
        cognitiveLevel: "Fact"
    },
    {
        id: 11,
        question: "'I am not going to be satisfied with anything short of complete freedom... We shall either free India or die in the attempt.' Who said this?",
        options: ["Subhash Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
        correctAnswer: 1,
        explanation: "Gandhi (Do or Die speech).",
        cognitiveLevel: "Fact"
    },
    {
        id: 12,
        question: "Which of the following parties/groups did NOT support the Quit India Movement?\n1. The Communist Party of India (CPI)\n2. The Muslim League\n3. The Hindu Mahasabha\n4. The Princely States",
        options: ["1 and 2 only", "1, 2 and 3 only", "2 and 3 only", "1, 2, 3 and 4"],
        correctAnswer: 1,
        explanation: "CPI (People's War - supported Russia/Allies), League (wanted Partition first), Mahasabha (boycotted), and Princes did not participate.",
        cognitiveLevel: "Fact"
    },
    {
        id: 13,
        question: "Who hoisted the Indian Tricolour at the Gowalia Tank ground on August 9, 1942, after the arrest of the top leaders?",
        options: ["Usha Mehta", "Aruna Asaf Ali", "Sarojini Naidu", "Sucheta Kripalani"],
        correctAnswer: 1,
        explanation: "Aruna Asaf Ali (Heroine of 1942).",
        cognitiveLevel: "Fact"
    },
    {
        id: 14,
        question: "Match the Parallel Government with its Leader/Region:\nA. Jatiya Sarkar - 1. Ballia (Chittu Pandey)\nB. Prati Sarkar - 2. Tamluk (Midnapore)\nC. Ballia Govt - 3. Satara (Nana Patil)",
        options: ["A-2, B-3, C-1", "A-1, B-2, C-3", "A-2, B-1, C-3", "A-3, B-2, C-1"],
        correctAnswer: 0,
        explanation: "Chittu Pandey (Ballia - 1st to start), Tamluk (Jatiya Sarkar), Satara (Prati Sarkar - Longest).",
        cognitiveLevel: "Fact"
    },
    {
        id: 15,
        question: "The 'Prati Sarkar' in Satara was the longest-lasting parallel government. It organized:",
        options: ["Nyayaabhandas (People's Courts) and Gandhi Vivah.", "An armed militia called 'Vidyut Vahini'.", "A complete ban on salt tax.", "A separate currency."],
        correctAnswer: 0,
        explanation: "Nyayaabhandas (People's Courts) settled disputes cheaply. Vidyut Vahini was in Tamluk (Bengal).",
        cognitiveLevel: "Fact"
    },
    {
        id: 16,
        question: "Who among the following operated an 'Underground Radio' during the Quit India Movement to keep the morale of the people high?",
        options: ["Aruna Asaf Ali", "Usha Mehta", "Captain Lakshmi Sehgal", "Annie Besant"],
        correctAnswer: 1,
        explanation: "Usha Mehta (Congress Radio).",
        cognitiveLevel: "Fact"
    },
    {
        id: 17,
        question: "Matangini Hazra, a 73-year-old Gandhian, was shot dead while leading a procession in:",
        options: ["Assam", "Tamluk (Midnapore, Bengal)", "Bombay", "Bihar"],
        correctAnswer: 1,
        explanation: "Tamluk (Midnapore). She was holding the flag when shot.",
        cognitiveLevel: "Fact"
    },
    {
        id: 18,
        question: "Who escaped from Hazaribagh Jail during the Quit India Movement to organize underground activities and the 'Azad Dasta' in Nepal?",
        options: ["Ram Manohar Lohia", "Jayaprakash Narayan", "Achyut Patwardhan", "Aruna Asaf Ali"],
        correctAnswer: 1,
        explanation: "Jayaprakash Narayan. He organized the guerilla warfare squad (Azad Dasta).",
        cognitiveLevel: "Fact"
    },
    {
        id: 19,
        question: "The 'C. Rajagopalachari Formula' (1944) aimed to:",
        options: ["Convince the British to leave India.", "Resolve the political deadlock between the Congress and the Muslim League.", "Organize the INA.", "Merge the Princely states."],
        correctAnswer: 1,
        explanation: "To solve the deadlock so they could jointly demand independence.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 20,
        question: "Which of the following was a key proposal of the C.R. Formula?",
        options: ["Immediate partition of India.", "League to cooperate with Congress for a provisional interim government; a plebiscite to be held in Muslim-majority areas after the war to decide on separation.", "Separate electorates for all minorities.", "Jinnah to be the first Prime Minister."],
        correctAnswer: 1,
        explanation: "It implicitly accepted the right of self-determination (Plebiscite) for Muslims in the North-West and East.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 21,
        question: "The 'Wavell Plan' (1945) proposed to reconstitute the Viceroy’s Executive Council. What was the controversial clause regarding representation?",
        options: ["Equal representation for Congress and League.", "Equal representation for 'Caste Hindus' and 'Muslims'.", "Total reservation for Muslims.", "Nomination of members by the Queen."],
        correctAnswer: 1,
        explanation: "Parity between Caste Hindus and Muslims. This reduced Congress to a 'Caste Hindu' party in British eyes, which Congress rejected.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 22,
        question: "The Simla Conference (1945) failed primarily because:",
        options: ["The Congress refused to join the Executive Council.", "Jinnah insisted that the Muslim League alone had the right to nominate Muslim members to the Council (denying Congress the right to nominate a nationalist Muslim like Azad).", "Wavell wanted to retain the Defence portfolio.", "Gandhi demanded immediate independence."],
        correctAnswer: 1,
        explanation: "Jinnah's intransigence. He did not allow Congress to nominate any Muslim (like Azad), claiming only League represented Muslims.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 23,
        question: "The idea of the Indian National Army (INA) was first conceived in Malaya by:",
        options: ["Subhash Chandra Bose", "Mohan Singh", "Rashbehari Bose", "Niranjan Singh Gill"],
        correctAnswer: 1,
        explanation: "Captain Mohan Singh (with Japanese help) formed the first INA. Subhash Bose revived it later.",
        cognitiveLevel: "Fact"
    },
    {
        id: 24,
        question: "Subhash Chandra Bose established the 'Provisional Government of Free India' (Arzi Hukumat-e-Azad Hind) on October 21, 1943, in:",
        options: ["Tokyo", "Singapore", "Berlin", "Rangoon"],
        correctAnswer: 1,
        explanation: "Singapore.",
        cognitiveLevel: "Fact"
    },
    {
        id: 25,
        question: "Which of the following brigades was NOT part of the INA?",
        options: ["Gandhi Brigade", "Nehru Brigade", "Azad Brigade", "Patel Brigade"],
        correctAnswer: 3,
        explanation: "There was no 'Patel Brigade'.",
        cognitiveLevel: "Fact"
    },
    {
        id: 26,
        question: "The 'Rani of Jhansi Regiment' was the women's wing of the INA led by:",
        options: ["Sarojini Naidu", "Lakshmi Swaminathan (Sehgal)", "Usha Mehta", "Kalpana Dutt"],
        correctAnswer: 1,
        explanation: "Captain Lakshmi Sehgal.",
        cognitiveLevel: "Fact"
    },
    {
        id: 27,
        question: "Arrange the following in chronological order:\n1. August Offer\n2. Quit India Movement\n3. Cripps Mission\n4. Individual Satyagraha",
        options: ["1-3-4-2", "1-4-3-2", "4-1-3-2", "1-4-2-3"],
        correctAnswer: 1,
        explanation: "Aug Offer (Aug 1940) -> Indiv Satyagraha (Oct 1940) -> Cripps (March 1942) -> Quit India (Aug 1942).",
        cognitiveLevel: "Fact"
    },
    {
        id: 28,
        question: "Why was the Bengal Famine of 1943 called 'Man-made'?",
        options: ["It was caused by a drought.", "It was caused by the diversion of food supplies to the army (War effort), denial policy (destroying boats/rice to stop Japanese), and hoarding.", "The crop was destroyed by pests.", "The population increased suddenly."],
        correctAnswer: 1,
        explanation: "It was a result of the War Policy (Denial policy, export of grain), not just natural causes.",
        cognitiveLevel: "Conceptual"
    },
    {
        id: 29,
        question: "Which party formed a coalition government in Bengal (1941) known as the 'Shyama-Huq Ministry' (Progressive Coalition Party)?",
        options: ["Muslim League and Congress", "Krishak Praja Party (Fazl-ul-Haq) and Hindu Mahasabha (Shyama Prasad Mukherjee)", "Unionist Party and Akali Dal", "Forward Bloc and CPI"],
        correctAnswer: 1,
        explanation: "Shyama Prasad Mukherjee (Mahasabha) and Fazl-ul-Haq (Krishak Praja Party) formed a unique coalition.",
        cognitiveLevel: "Fact"
    },
    {
        id: 30,
        question: "'The forgotten war' often refers to the battles fought by the INA and the British Indian Army in:",
        options: ["Kashmir", "Imphal and Kohima", "North Africa", "Singapore"],
        correctAnswer: 1,
        explanation: "Imphal and Kohima (1944). The INA planted the flag at Moirang (Manipur).",
        cognitiveLevel: "Fact"
    },
    {
        id: 31,
        question: "During the Quit India Movement, Kanaklata Barua, a young girl, was shot dead while holding the national flag in:",
        options: ["Gohpur (Assam)", "Midnapore (Bengal)", "Satara (Maharashtra)", "Patna (Bihar)"],
        correctAnswer: 0,
        explanation: "Gohpur, Assam.",
        cognitiveLevel: "Fact"
    },
    {
        id: 32,
        question: "The 'Desai-Liaquat Pact' (1945) proposed:",
        options: ["A separate state for Muslims.", "An interim government with equal number of seats for Congress and League in the Central Legislature (40% each + 20% reserved).", "Military rule for 5 years.", "A coalition government in Punjab."],
        correctAnswer: 1,
        explanation: "Bhulabhai Desai and Liaquat Ali Khan drafted a pact for an interim government (40:40:20 ratio).",
        cognitiveLevel: "Fact"
    },
    {
        id: 33,
        question: "Which Congress President conducted the negotiations with both the Cripps Mission (1942) and the Wavell Plan (1945)?",
        options: ["Jawaharlal Nehru", "J.B. Kripalani", "Abul Kalam Azad", "Rajendra Prasad"],
        correctAnswer: 2,
        explanation: "Maulana Abul Kalam Azad was the Congress President from 1940 to 1946 (longest continuous term before independence due to the war).",
        cognitiveLevel: "Fact"
    },
    {
        id: 34,
        question: "The 'Tripuri Crisis' earlier had led to the formation of Forward Bloc. During WWII, the Forward Bloc:",
        options: ["Supported the British.", "Was declared illegal, and its leaders were imprisoned.", "Merged with the Communist Party.", "Remained neutral."],
        correctAnswer: 1,
        explanation: "The party was banned, and members were jailed.",
        cognitiveLevel: "Fact"
    },
    {
        id: 35,
        question: "'I have not become the King's First Minister in order to preside over the liquidation of the British Empire.' Who made this famous statement?",
        options: ["Clement Attlee", "Winston Churchill", "Lord Mountbatten", "Ramsay MacDonald"],
        correctAnswer: 1,
        explanation: "Winston Churchill. He was strictly against Indian independence.",
        cognitiveLevel: "Fact"
    }
];
