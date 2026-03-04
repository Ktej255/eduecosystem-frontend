import type { MCQ } from './mcq-utils';

export const DAY19_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 19)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "In the scheme of the parliamentary system of government provided by the Constitution, the President is the nominal executive authority. Who is the real executive authority?",
        options: [
            "The Chief Justice of India",
            "The Speaker of the Lok Sabha",
            "The Prime Minister",
            "The Vice-President"
        ],
        correctAnswer: 2, // C
        explanation: "In the scheme of parliamentary system of government provided by the constitution, the President is the nominal executive authority (de jure executive) and Prime Minister is the real executive authority (de facto executive).",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 2,
        question: "While the President is the head of the State, the Prime Minister is the head of the:",
        options: [
            "Judiciary",
            "Legislature",
            "Government",
            "Republic"
        ],
        correctAnswer: 2, // C
        explanation: "In other words, president is the head of the State while Prime Minister is the head of the government.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 3,
        question: "Which Article of the Constitution states that 'There shall be a Council of Ministers with the Prime Minister at the head to aid and advise the President'?",
        options: [
            "Article 72",
            "Article 74",
            "Article 78",
            "Article 111"
        ],
        correctAnswer: 1, // B
        explanation: "Article 74: There shall be a council of ministers with the Prime Minister at the head to aid and advise the President who shall, in the exercise of his functions, act in accordance with such advice.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 4,
        question: "Which Article of the Constitution formally states that the Prime Minister shall be appointed by the President?",
        options: [
            "Article 73",
            "Article 74",
            "Article 75",
            "Article 78"
        ],
        correctAnswer: 2, // C
        explanation: "The Constitution does not contain any specific procedure for the selection and appointment of the Prime Minister. Article 75 says only that the Prime Minister shall be appointed by the president.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 5,
        question: "Does the Constitution mandate that the President can appoint ANYONE as the Prime Minister?",
        options: [
            "Yes, the President has completely free will in the appointment.",
            "No, in accordance with the conventions of the parliamentary system, the President has to appoint the leader of the majority party in the Lok Sabha as the Prime Minister.",
            "Yes, but only from the Rajya Sabha.",
            "No, the Supreme Court must ratify the choice."
        ],
        correctAnswer: 1, // B
        explanation: "However, this does not imply that the president is free to appoint any one as the Prime Minister. In accordance with the conventions of the parliamentary system of government, the President has to appoint the leader of the majority party in the Lok Sabha as the Prime Minister.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 6,
        question: "Is it constitutionally required for a person to prove his majority in the Lok Sabha BEFORE he is appointed as the Prime Minister?",
        options: [
            "Yes, it is an absolute constitutional mandate.",
            "No, the Supreme Court held that the President can first appoint him the Prime Minister and then ask him to prove his majority in the Lok Sabha within a reasonable period.",
            "Yes, but only in the case of a hung parliament.",
            "Yes, a formal floor test is the first step of appointment."
        ],
        correctAnswer: 1, // B
        explanation: "In 1980, the Delhi High Court held that the Constitution does not require that a person must prove his majority in the Lok Sabha before he is appointed as the Prime Minister. The President may first appoint him... and then ask him to prove his majority...",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 7,
        question: "Can a person who is NOT a member of either House of Parliament be appointed as the Prime Minister of India?",
        options: [
            "No, membership of Parliament is a strict pre-condition.",
            "Yes, but only if they promise to be elected to the Lok Sabha.",
            "Yes, the Supreme Court held that a person who is not a member of either House of Parliament can be appointed as Prime Minister for six months, within which, he should become a member of either House.",
            "Yes, and they can remain PM for their full five-year term without being elected."
        ],
        correctAnswer: 2, // C
        explanation: "In 1997, the Supreme Court held that a person who is not a member of either House of Parliament can be appointed as Prime Minister for six months, within which, he should become a member of either House of Parliament; otherwise, he ceases to be the Prime Minister.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 8,
        question: "Constitutionally, the Prime Minister may be a member of any of the two Houses of Parliament. Which of the following Prime Ministers was a member of the Rajya Sabha when appointed?",
        options: [
            "Jawaharlal Nehru",
            "Lal Bahadur Shastri",
            "Indira Gandhi (in 1966)",
            "Narendra Modi"
        ],
        correctAnswer: 2, // C
        explanation: "Three Prime Ministers, Indira Gandhi (1966), Deve Gowda (1996) and Manmohan Singh (2004), were members of the Rajya Sabha.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 9,
        question: "Who administers the oath of office and secrecy to the Prime Minister?",
        options: [
            "The Chief Justice of India",
            "The outgoing Prime Minister",
            "The President",
            "The Speaker of the Lok Sabha"
        ],
        correctAnswer: 2, // C
        explanation: "Before the Prime Minister enters upon his office, the president administers to him the oaths of office and secrecy.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 10,
        question: "According to the Constitution, what is the 'term' of the Prime Minister?",
        options: [
            "Exactly five years.",
            "The term of the Prime Minister is not fixed and he holds office during the pleasure of the president.",
            "Six years.",
            "Four years."
        ],
        correctAnswer: 1, // B
        explanation: "The term of the Prime Minister is not fixed and he holds office during the pleasure of the president.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 11,
        question: "Does the phrase 'holds office during the pleasure of the President' mean the President can dismiss the Prime Minister at any time?",
        options: [
            "Yes, the President has absolute discretion to dismiss the PM whenever he chooses.",
            "No, so long as the Prime Minister enjoys the majority support in the Lok Sabha, he cannot be dismissed by the President.",
            "Yes, but only on the advice of the Chief Justice.",
            "Yes, but he must give three months' notice."
        ],
        correctAnswer: 1, // B
        explanation: "However, this does not mean that the president can dismiss the Prime Minister at any time. So long as the Prime Minister enjoys the majority support in the Lok Sabha, he cannot be dismissed by the President.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 12,
        question: "Who determines the salary and allowances of the Prime Minister?",
        options: [
            "The President",
            "The Parliament from time to time",
            "The Finance Commission",
            "The Supreme Court"
        ],
        correctAnswer: 1, // B
        explanation: "The salary and allowances of the Prime Minister are determined by the Parliament from time to time. He gets the salary and allowances that are payable to a member of Parliament.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 13,
        question: "Regarding his relationship with the Council of Ministers, who advises the President on the appointment of other ministers?",
        options: [
            "The Chief Justice of India",
            "The Speaker of the Lok Sabha",
            "The Prime Minister",
            "The Vice-President"
        ],
        correctAnswer: 2, // C
        explanation: "He recommends persons who can be appointed as ministers by the president. The President can appoint only those persons as ministers who are recommended by the Prime Minister.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 14,
        question: "Who allocates and reshuffles various portfolios among the ministers?",
        options: [
            "The President",
            "The Prime Minister",
            "The Cabinet Secretary",
            "The Parliament"
        ],
        correctAnswer: 1, // B
        explanation: "He [Prime Minister] allocates and reshuffles various portfolios among the ministers.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 15,
        question: "If there is a difference of opinion between a Minister and the Prime Minister, what drastic action can the Prime Minister take regarding that minister?",
        options: [
            "He can ask the minister to resign or advise the President to dismiss him.",
            "He can suspend the minister for 30 days.",
            "He must refer the matter to the Supreme Court.",
            "He can do nothing; the minister is protected by Parliament."
        ],
        correctAnswer: 0, // A
        explanation: "He can ask a minister to resign or advise the President to dismiss him in case of difference of opinion.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 16,
        question: "Who presides over the meetings of the Council of Ministers (the Cabinet) and influences its decisions?",
        options: [
            "The President",
            "The Prime Minister",
            "The Senior-most Cabinet Minister",
            "The Vice-President"
        ],
        correctAnswer: 1, // B
        explanation: "He [Prime Minister] presides over the meeting of council of ministers and influences its decisions.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 17,
        question: "Historically and constitutionally, what happens to the entire Council of Ministers if the Prime Minister resigns or dies?",
        options: [
            "The senior-most minister automatically becomes the new Prime Minister.",
            "The Council of Ministers continues to function under the President's direct rule.",
            "The resignation or death of an incumbent Prime Minister automatically dissolves the council of ministers and thereby generates a vacuum.",
            "The Parliament elects a new Prime Minister within 24 hours."
        ],
        correctAnswer: 2, // C
        explanation: "Since the Prime Minister stands at the head of the council of ministers, the other ministers cannot function when the Prime Minister resigns or dies. In other words, the resignation or death of an incumbent Prime Minister automatically dissolves the council of ministers.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 18,
        question: "Who serves as the principal channel of communication between the President and the Council of Ministers?",
        options: [
            "The Cabinet Secretary",
            "The Speaker of the Lok Sabha",
            "The Prime Minister",
            "The Home Minister"
        ],
        correctAnswer: 2, // C
        explanation: "He [Prime Minister] is the principal channel of communication between the President and the council of ministers (Article 78).",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 19,
        question: "Under Article 78, is it the duty of the Prime Minister to communicate to the President all decisions of the Council of Ministers relating to the administration of the affairs of the Union?",
        options: [
            "Yes, it is his constitutional duty.",
            "No, it is optional and depends on the Prime Minister's discretion.",
            "Yes, but only regarding foreign policy.",
            "No, the President must legally request this information first."
        ],
        correctAnswer: 0, // A
        explanation: "Article 78: It shall be the duty of the Prime Minister to communicate to the President all decisions of the council of ministers relating to the administration of the affairs of the Union and proposals for legislation...",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 20,
        question: "The Prime Minister advises the President with regard to the appointment of important officials. Which of the following is NOT an official mentioned in the text whose appointment the PM advises the President on?",
        options: [
            "Attorney General of India",
            "Comptroller and Auditor General of India",
            "Chairman and members of the UPSC",
            "Chief Ministers of States"
        ],
        correctAnswer: 3, // D
        explanation: "He advises the president with regard to the appointment of important officials like attorney general of India, Comptroller and Auditor General of India, chairman and members of the UPSC, election commissioners, chairman and members of the finance commission and so on. (Chief Ministers are appointed by the Governor of the state, not the President/PM).",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 21,
        question: "Regarding his relationship with Parliament, the Prime Minister advises the President on what matter concerning the sessions of Parliament?",
        options: [
            "On how to judge the debates.",
            "On the seating arrangement.",
            "He advises the President with regard to summoning and proroguing of the sessions of the Parliament.",
            "On deciding the Speaker's salary."
        ],
        correctAnswer: 2, // C
        explanation: "He advises the President with regard to summoning and proroguing of the sessions of the Parliament.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 22,
        question: "Can the Prime Minister recommend the dissolution of the Lok Sabha to the President at any time?",
        options: [
            "Yes, he can recommend dissolution of the Lok Sabha to President at any time.",
            "No, he must get permission from the Election Commission first.",
            "Yes, but only in the fifth year of its term.",
            "No, only the Supreme Court can order dissolution."
        ],
        correctAnswer: 0, // A
        explanation: "He can recommend dissolution of the Lok Sabha to President at any time.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 23,
        question: "Who announces government policies on the floor of the House in Parliament?",
        options: [
            "The President",
            "The Speaker of the Lok Sabha",
            "The Prime Minister",
            "The Chief Justice of India"
        ],
        correctAnswer: 2, // C
        explanation: "He [Prime Minister] announces government policies on the floor of the House.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 24,
        question: "The Prime Minister is the ex-officio Chairman of several important national bodies. Which of the following bodies is NOT chaired by the Prime Minister?",
        options: [
            "NITI Aayog",
            "National Integration Council",
            "Inter-State Council",
            "Zonal Councils"
        ],
        correctAnswer: 3, // D
        explanation: "He is the chairman of the NITI Aayog (which succeded the planning commission), National Integration Council, Inter-State Council, National Water Resources Council and some other bodies. (Zonal Councils are chaired by the Union Home Minister).",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 25,
        question: "Who plays a significant role in shaping the foreign policy of the country?",
        options: [
            "The Home Minister",
            "The Speaker of Lok Sabha",
            "The Prime Minister",
            "The Vice-President"
        ],
        correctAnswer: 2, // C
        explanation: "He plays a significant role in shaping the foreign policy of the country.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 26,
        question: "During emergencies, what is the role of the Prime Minister regarding disaster management?",
        options: [
            "He advises local NGOs.",
            "He is the chief crisis manager at the political level.",
            "He steps down and military takes over.",
            "He is immune from emergency duties."
        ],
        correctAnswer: 1, // B
        explanation: "He is the chief crisis manager at the political level during emergencies.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 27,
        question: "Lord Morely comprehensively described the Prime Minister (in relation to the Cabinet) using WHICH famous phrase?",
        options: [
            "First among equals (primus inter pares) and key stone of the cabinet arch.",
            "The absolute dictator of Parliament.",
            "A mere servant of the Crown.",
            "The moon among the stars."
        ],
        correctAnswer: 0, // A
        explanation: "Lord Morely described him as 'primus inter pares' (first among equals) and 'key stone of the cabinet arch'.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 28,
        question: "Who among the following constitutional authorities once remarked about the British Prime Minister that 'the head of the cabinet is first among equals, and occupies a position which so long as it lasts, is one of exceptional and peculiar authority'?",
        options: [
            "Laski",
            "H R G Greaves",
            "Lord Morley",
            "Munro"
        ],
        correctAnswer: 2, // C
        explanation: "Lord Morley: He described him as... first among equals... He said: 'The head of the cabinet is 'primus inter pares', and occupies a position which so long as it lasts, is one of exceptional and peculiar authority'.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 29,
        question: "Sir William Vernon Harcourt described the Prime Minister as:",
        options: [
            "A dictator.",
            "A figurehead.",
            "Inter stellas luna minores (a moon among lesser stars).",
            "A temporary servant."
        ],
        correctAnswer: 2, // C
        explanation: "Sir William Vernon Harcourt: He described him as 'inter stellas luna minores' (a moon among lesser stars).",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    },
    {
        id: 30,
        question: "According to Sir Ivor Jennings, the Prime Minister is the:",
        options: [
            "Moon among lesser stars.",
            "Keystone of the cabinet arch.",
            "The sun around which planets revolve.",
            "The pivot of the whole system of government."
        ],
        correctAnswer: 2, // C
        explanation: "Sir Ivor Jennings: He described him as 'a sun around which planets revolve'.",
        level: "Easy", topic: "Prime Minister", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Prime Minister" }
    }
];
