import type { MCQ } from './mcq-utils';

export const DAY24_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 24)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "When was the first Parliamentary Forum established?",
        options: [
            "2002",
            "2005",
            "2010",
            "2014"
        ],
        correctAnswer: 1, // B
        explanation: "The first Parliamentary Forum on Water Conservation and Management was constituted in the year 2005.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 2,
        question: "Presently, how many Parliamentary Forums exist?",
        options: [
            "5",
            "6",
            "8",
            "10"
        ],
        correctAnswer: 2, // C
        explanation: "Presently, there are eight Parliamentary Forums.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 3,
        question: "Which of the following was the first Parliamentary Forum to be constituted?",
        options: [
            "Parliamentary Forum on Youth",
            "Parliamentary Forum on Water Conservation and Management",
            "Parliamentary Forum on Children",
            "Parliamentary Forum on Population and Public Health"
        ],
        correctAnswer: 1, // B
        explanation: "The first Parliamentary Forum on Water Conservation and Management was constituted in the year 2005.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "History", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 4,
        question: "Who is the ex-officio President of all the Parliamentary Forums EXCEPT the Parliamentary Forum on Population and Public Health?",
        options: [
            "The Prime Minister",
            "The Chairman of Rajya Sabha",
            "The Speaker of Lok Sabha",
            "The Minister of Parliamentary Affairs"
        ],
        correctAnswer: 2, // C
        explanation: "The Speaker of Lok Sabha is the ex-officio President of all the Forums except the Parliamentary Forum on Population and Public Health.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Leadership", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 5,
        question: "Who acts as the ex-officio President of the Parliamentary Forum on Population and Public Health?",
        options: [
            "The Speaker of Lok Sabha",
            "The Prime Minister",
            "The Chairman of Rajya Sabha",
            "The Minister of Health and Family Welfare"
        ],
        correctAnswer: 2, // C
        explanation: "The Chairman of Rajya Sabha is the ex-officio President and the Speaker is the ex-officio Co-President of the Parliamentary Forum on Population and Public Health.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Exception Rule", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 6,
        question: "Who appoints the Co-President of a Parliamentary Forum (other than the Forum on Population and Public Health)?",
        options: [
            "The President of India",
            "The Speaker / Chairman from amongst themselves",
            "The Deputy Chairman of Rajya Sabha acts as Co-President.",
            "The Chairman of Rajya Sabha is the ex-officio Co-President of all Forums."
        ],
        correctAnswer: 3, // D
        explanation: "The Deputy Chairman of Rajya Sabha, the Deputy Speaker of Lok Sabha, the Ministers in-charge of the concerned Ministries/Departments and the Chairman of Departmentally-Related Standing Committees concerned are the ex-officio Vice-Presidents of the respective Forums. (Note: The Chairman of RS is the Co-President of all other forums where Speaker is President).",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Leadership", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 7,
        question: "What is the maximum number of members a Parliamentary Forum can have (excluding the President, Co-President and Vice-Presidents)?",
        options: [
            "21",
            "31",
            "45",
            "50"
        ],
        correctAnswer: 1, // B
        explanation: "Each Forum consists of not more than 31 members (excluding the President, Co-President and Vice-Presidents).",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Composition", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 8,
        question: "Out of the maximum 31 members in a Parliamentary Forum, what is the maximum number of members that can be from the Lok Sabha?",
        options: [
            "10",
            "15",
            "21",
            "31"
        ],
        correctAnswer: 2, // C
        explanation: "Out of whom not more than 21 are from Lok Sabha and not more than 10 are from Rajya Sabha.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Composition", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 9,
        question: "How are the members of the Lok Sabha and Rajya Sabha nominated to the Parliamentary Forums?",
        options: [
            "By the President of India",
            "By election through proportional representation",
            "Members (other than Ministers) are nominated by the Speaker/Chairman from amongst the leaders of various political parties/groups or their nominees, who have special knowledge/keen interest in the subject.",
            "By the Prime Minister"
        ],
        correctAnswer: 2, // C
        explanation: "Members (other than Ministers) of the Lok Sabha and the Rajya Sabha are nominated by the Speaker/Chairman from amongst the leaders of various political parties/groups or their nominees, who have special knowledge/keen interest in the subject.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Selection", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 10,
        question: "What is the duration of the term for members of the Parliamentary Forums?",
        options: [
            "They are permanent members for life.",
            "The duration of the office of members of the forum is co-terminus with their membership in the respective Houses.",
            "They are appointed for a fixed 5-year term regardless of house membership.",
            "They are reshuffled every year."
        ],
        correctAnswer: 1, // B
        explanation: "The duration of the office of members of the forum is co-terminus with their membership in the respective Houses.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Tenure", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 11,
        question: "Can a Member of Parliament resign from a Parliamentary Forum?",
        options: [
            "No, nomination is mandatory and irrevocable.",
            "Yes, by writing to the President of India.",
            "Yes, a member may resign from the forum by writing to the Speaker/Chairman.",
            "Yes, by simply not attending three consecutive meetings."
        ],
        correctAnswer: 2, // C
        explanation: "A member may also resign from the forum by writing to the Speaker/Chairman.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Resignation", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 12,
        question: "Do the Parliamentary Forums replace or interfere with the jurisdiction of the Departmentally-Related Standing Committees?",
        options: [
            "Yes, they act as an appellate body over the Standing Committees.",
            "No, the forums do not interfere with or encroach upon the jurisdiction of the Departmentally-Related Standing Committees of the Ministry/Department concerned.",
            "Yes, they have concurrent jurisdiction and can override Standing Committees.",
            "Yes, but only in matters concerning Population and Health."
        ],
        correctAnswer: 1, // B
        explanation: "The forums will not interfere with or encroach upon the jurisdiction of the Departmentally-Related Standing Committees of the Ministry/Department concerned.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Jurisdiction", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 13,
        question: "Who conducts the meetings of the Parliamentary Forums?",
        options: [
            "The President of India",
            "The Prime Minister",
            "The President of the Forum (Speaker/Chairman)",
            "The Secretary-General of the Lok Sabha"
        ],
        correctAnswer: 2, // C
        explanation: "The President of the forum conducts the meetings of the forum.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Proceedings", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 14,
        question: "Which of the following is an objective of the Parliamentary Forum on Water Conservation and Management?",
        options: [
            "To resolve inter-state water disputes.",
            "To audit the daily expenses of the Ministry of Water Resources.",
            "To identify problems relating to water and make recommendations/suggestions for consideration and appropriate action by Government/organisations concerned.",
            "To build new dams internationally."
        ],
        correctAnswer: 2, // C
        explanation: "One of the functions of the Forum on Water Conservation is to identify problems relating to water and make recommendations/suggestions for consideration and appropriate action by Government/organisations concerned.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Objective", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 15,
        question: "Which of the following Parliamentary Forums focuses on the empowerment of youth?",
        options: [
            "Parliamentary Forum on Artisans and Craftspeople",
            "Parliamentary Forum on Millennium Development Goals",
            "Parliamentary Forum on Youth",
            "Parliamentary Forum on Children"
        ],
        correctAnswer: 2, // C
        explanation: "Parliamentary Forum on Youth is one of the eight forums.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Identification", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 16,
        question: "Which Forum is specifically tasked to have focused deliberations on issues relating to Population Stabilization?",
        options: [
            "Parliamentary Forum on Youth",
            "Parliamentary Forum on Global Warming",
            "Parliamentary Forum on Population and Public Health",
            "Parliamentary Forum on Disaster Management"
        ],
        correctAnswer: 2, // C
        explanation: "Parliamentary Forum on Population and Public Health focuses on issues related to population stabilization and public health.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Function", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 17,
        question: "Is there a specific Parliamentary Forum dedicated to Disaster Management?",
        options: [
            "Yes, the Parliamentary Forum on Disaster Management.",
            "No, disaster management is handled strictly by the Home Ministry.",
            "No, it is handled by the Forum on Global Warming.",
            "Yes, but it is a sub-committee of the PAC."
        ],
        correctAnswer: 0, // A
        explanation: "Parliamentary Forum on Disaster Management was constituted in 2011.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Identification", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 18,
        question: "What is a primary purpose of having 'experts' participate in Parliamentary Forums?",
        options: [
            "To vote on bills in Parliament.",
            "To provide MPs with a platform to interact with subject experts, ministers and officials to equip them with information and knowledge on specific critical issues.",
            "To replace members who are absent.",
            "To audit the financial statements presented in the forum."
        ],
        correctAnswer: 1, // B
        explanation: "To provide a platform to the members to have interactions with the ministers concerned, experts and key officials from the nodal ministries with a view to have a focused and meaningful discussion on critical issues.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Purpose", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 19,
        question: "Which forum aims to organize seminars/workshops to create awareness about the causes and effects of Global Warming?",
        options: [
            "Parliamentary Forum on Millennium Development Goals",
            "Parliamentary Forum on Global Warming and Climate Change",
            "Parliamentary Forum on Disaster Management",
            "Parliamentary Forum on Water Conservation"
        ],
        correctAnswer: 1, // B
        explanation: "Parliamentary Forum on Global Warming and Climate Change organizes seminars/workshops to create awareness about the causes and effects of global warming.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Function", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 20,
        question: "When was the Parliamentary Forum on Millennium Development Goals constituted?",
        options: [
            "2005",
            "2008",
            "2013",
            "2015"
        ],
        correctAnswer: 2, // C
        explanation: "The Parliamentary Forum on Millennium Development Goals was constituted in the year 2013.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 21,
        question: "Are Ministers permitted to be nominated as members of the Parliamentary Forums (excluding their ex-officio roles)?",
        options: [
            "Yes, they form the majority of the members.",
            "No, only Members (other than Ministers) are nominated.",
            "Yes, but only Cabinet Ministers.",
            "Yes, but only Ministers of State."
        ],
        correctAnswer: 1, // B
        explanation: "Members (other than Ministers) of the Lok Sabha and Rajya Sabha are nominated...",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Membership Rules", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 22,
        question: "Does the Parliamentary Forum on Children mandate preparing data on the plight of children?",
        options: [
            "Yes, to equip members of Parliament to interact meaningfully on the subject.",
            "No, that is strictly the domain of the Ministry of Women and Child Development.",
            "No, the forum only deals with international child policies.",
            "Yes, but only for state legislative assemblies."
        ],
        correctAnswer: 0, // A
        explanation: "One of the functions is to further enhance awareness and attention of Parliamentarians towards critical issues affecting children’s well-being...",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Function", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 23,
        question: "Which Forum deals with preserving traditional art and crafts and promoting them?",
        options: [
            "Parliamentary Forum on Artisan and Craftspeople",
            "Parliamentary Forum on Youth",
            "Parliamentary Forum on Indigenous Knowledge",
            "Parliamentary Forum on Rural Development"
        ],
        correctAnswer: 0, // A
        explanation: "Parliamentary Forum on Artisans and Craftspeople was constituted in 2013.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Identification", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 24,
        question: "Is there a Parliamentary Forum on Information Technology?",
        options: [
            "Yes, established in 2020.",
            "No, it is not listed among the 8 official Parliamentary Forums.",
            "Yes, but it is a Standing Committee.",
            "Yes, headed by the IT Minister."
        ],
        correctAnswer: 1, // B
        explanation: "The 8 forums are: Water Conservation, Youth, Children, Population & Public Health, Global Warming & Climate Change, Disaster Management, Artisans & Craftspeople, Millennium Development Goals. There is no specific forum for IT.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 25,
        question: "What role does the Secretary-General of Lok Sabha play in the Parliamentary Forums?",
        options: [
            "He is the President of all forums.",
            "He has no role in the Parliamentary Forums.",
            "The Secretary-General of Lok Sabha is the Secretary to the forums.",
            "He decides which MPs join which forum."
        ],
        correctAnswer: 2, // C
        explanation: "The Secretary-General of Lok Sabha, is the Secretary to the forums.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Secretariat", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 26,
        question: "Do Parliamentary Forums generate formal legally binding reports similar to a Joint Parliamentary Committee?",
        options: [
            "Yes, their reports are debated and voted upon in the House.",
            "No, they are primarily platforms for informal interaction, awareness building, and focused discussion with experts, not for producing formal legislative reports.",
            "Yes, their reports go directly to the President.",
            "Yes, but only regarding financial matters."
        ],
        correctAnswer: 1, // B
        explanation: "The objective is to provide a platform to the members to have interactions... to equip them with information and knowledge... to sensitise members...",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Nature of Work", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 27,
        question: "A member is nominated to a Forum considering their 'special knowledge'. Who makes this determination?",
        options: [
            "The Prime Minister",
            "The Speaker/Chairman, usually based on nominations from party leaders.",
            "The Election Commission",
            "A panel of Supreme Court judges"
        ],
        correctAnswer: 1, // B
        explanation: "Nominated by the Speaker/Chairman from amongst the leaders of various political parties/groups or their nominees, who have special knowledge/keen interest in the subject.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Selection Process", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 28,
        question: "If a Member of Lok Sabha is a member of a Forum and the Lok Sabha dissolves, what happens to their membership in the Forum?",
        options: [
            "They remain a member until a new Lok Sabha is formed.",
            "Their membership ceases as their term is co-terminus with their membership in the House.",
            "They retain membership for another 6 months.",
            "They become a life member."
        ],
        correctAnswer: 1, // B
        explanation: "The duration of the office of members of the forum is co-terminus with their membership in the respective Houses. When Lok Sabha dissolves, they are no longer members of the House, thus losing forum membership.",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Tenure", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 29,
        question: "Which of these is NOT one of the 8 Parliamentary Forums?",
        options: [
            "Parliamentary Forum on Artisans and Craftspeople",
            "Parliamentary Forum on Defense Procurement",
            "Parliamentary Forum on Global Warming and Climate Change",
            "Parliamentary Forum on Disaster Management"
        ],
        correctAnswer: 1, // B
        explanation: "There is no Parliamentary Forum on Defense Procurement (that would typically fall under the purview of a Standing Committee or PAC/Estimates Committee, not a forum).",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Identification", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    },
    {
        id: 30,
        question: "What is the primary rationale for excluding Ministers from the general membership (not ex-officio) of the Forums?",
        options: [
            "To keep the forums strictly apolitical.",
            "Because Ministers belong to the Executive, and the forums are designed primarily to educate and empower the ordinary Legislators (MPs) to understand complex issues and hold the executive accountable or suggest better policies.",
            "Because Ministers do not have subject expertise.",
            "Because the Constitution forbids it."
        ],
        correctAnswer: 1, // B
        explanation: "The forums are tools for Parliamentarians (who don't have personal bureaucratic staff doing research for them) to gain knowledge from experts. Ministers already have entire ministries advising them. (Though concerned Ministers do sit as ex-officio Vice-Presidents to provide the government perspective).",
        level: "Easy", topic: "Parliamentary Forums", difficulty_tier: "Level_1", cognitive_tag: "Rationale", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Forums" }
    }
];
