import type { MCQ } from './mcq-utils';

export const DAY31_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 31)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "In the scheme of parliamentary system of government provided by the Constitution, who is the nominal executive authority (de jure executive) in the state?",
        options: [
            "Chief Minister",
            "Governor",
            "President",
            "Chief Secretary"
        ],
        correctAnswer: 1, // B
        explanation: "As in the Centre, in the state, the Governor is the nominal executive authority (de jure executive).",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Nominal vs Real", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 2,
        question: "In the state government, who is the real executive authority (de facto executive)?",
        options: [
            "Governor",
            "Chief Minister",
            "Chief Justice of High Court",
            "Speaker of the Legislative Assembly"
        ],
        correctAnswer: 1, // B
        explanation: "The Chief Minister is the real executive authority (de facto executive) in the state government.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Nominal vs Real", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 3,
        question: "The position of the Chief Minister at the state level is analogous to the position of the ______ at the Centre.",
        options: [
            "President",
            "Vice-President",
            "Prime Minister",
            "Cabinet Secretary"
        ],
        correctAnswer: 2, // C
        explanation: "In other words, the governor is the head of the state while the Chief Minister is the head of the government. Thus the position of the Chief Minister at the state level is analogous to the position of prime minister at the Centre.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Analogy", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 4,
        question: "Does the Constitution contain any specific procedure for the selection and appointment of the Chief Minister?",
        options: [
            "Yes, in Article 163.",
            "Yes, through direct public election.",
            "No, the Constitution does not contain any specific procedure for the selection and appointment of the Chief Minister.",
            "Yes, by a voting college of MLAs and MLCs."
        ],
        correctAnswer: 2, // C
        explanation: "The Constitution does not contain any specific procedure for the selection and appointment of the Chief Minister. Article 164 only says that the Chief Minister shall be appointed by the governor.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Appointment Procedure", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 5,
        question: "Under Article 164, the Chief Minister shall be appointed by the:",
        options: [
            "President",
            "Governor",
            "Chief Justice of the High Court",
            "State Election Commission"
        ],
        correctAnswer: 1, // B
        explanation: "Article 164 only says that the Chief Minister shall be appointed by the governor.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Appointment Authority", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 6,
        question: "According to conventions of the parliamentary system, whom does the Governor generally appoint as the Chief Minister?",
        options: [
            "The senior-most member of the State Legislative Assembly.",
            "The leader of the majority party in the state legislative assembly.",
            "Any eminent citizen of the state.",
            "The runner-up in the state elections."
        ],
        correctAnswer: 1, // B
        explanation: "In accordance with the conventions of the parliamentary system of government, the governor has to appoint the leader of the majority party in the state legislative assembly as the Chief Minister.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Parliamentary Convention", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 7,
        question: "When no party has a clear majority in the assembly, the governor may exercise his personal discretion in the selection of the Chief Minister. Usually, whom does he invite to form the government?",
        options: [
            "The leader of the largest party or coalition in the assembly.",
            "The leader of the opposition.",
            "The Speaker of the assembly.",
            "A panel of retired judges."
        ],
        correctAnswer: 0, // A
        explanation: "When no party has a clear majority in the assembly, the governor may exercise his personal discretion... in such a situation, the governor usually invites the leader of the largest party or coalition in the assembly to form the government.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Governor Discretion", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 8,
        question: "If a person who is NOT a member of the state legislature is appointed as the Chief Minister, within what period must they become a member of the state legislature?",
        options: [
            "3 months",
            "6 months",
            "1 year",
            "They can never be appointed."
        ],
        correctAnswer: 1, // B
        explanation: "A person who is not a member of the state legislature can be appointed as Chief Minister for six months, within which time, he should be elected to the state legislature, failing which he ceases to be the Chief Minister.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Non-member CM", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 9,
        question: "According to the Constitution, the Chief Minister must only be a member of the Lower House (Legislative Assembly) of the state legislature. True or False?",
        options: [
            "True",
            "False",
            "Partially True",
            "Cannot be determined"
        ],
        correctAnswer: 1, // B
        explanation: "False. According to the Constitution, the Chief Minister may be a member of any of the two Houses of a state legislature. Usually Chief Ministers are selected from the Lower House, but on a number of occasions, a member of the Upper House has been appointed as Chief Minister.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "House Membership", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 10,
        question: "Before the Chief Minister enters his office, the Governor administers to him the oaths of:",
        options: [
            "Office and Secrecy",
            "Allegiance and Wealth",
            "Fidelity and Honour",
            "Statecraft and Justice"
        ],
        correctAnswer: 0, // A
        explanation: "Before the Chief Minister enters his office, the governor administers to him the oaths of office and secrecy.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Oath", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 11,
        question: "The term of the Chief Minister is fixed at exactly five years, irrespective of whether he loses the majority confidence. True or False?",
        options: [
            "True",
            "False",
            "Partially True",
            "Cannot be determined"
        ],
        correctAnswer: 1, // B
        explanation: "False. The term of the Chief Minister is not fixed and he holds office during the pleasure of the governor. However, the governor cannot dismiss him as long as he enjoys the majority support in the legislative assembly.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Tenure", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 12,
        question: "If a Chief Minister loses the confidence of the legislative assembly, he must resign. If he does not resign, the Governor:",
        options: [
            "Must ask the President for instructions.",
            "Can dismiss him.",
            "Must dissolve the high court.",
            "Can suspend the constitution."
        ],
        correctAnswer: 1, // B
        explanation: "If he loses the confidence of the assembly, he must resign or the governor can dismiss him.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Loss of Confidence", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 13,
        question: "Who determines the salary and allowances of the Chief Minister?",
        options: [
            "The Governor",
            "The Parliament",
            "The State Legislature",
            "The Finance Commission of India"
        ],
        correctAnswer: 2, // C
        explanation: "The salary and allowances of the Chief Minister are determined by the state legislature.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Salary determination", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 14,
        question: "Regarding the Council of Ministers, the Governor appoints those persons as ministers who are recommended by the:",
        options: [
            "President",
            "Chief Minister",
            "Speaker",
            "Chief Justice of High Court"
        ],
        correctAnswer: 1, // B
        explanation: "The governor appoints only those persons as ministers who are recommended by the Chief Minister.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Minister Appointment", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 15,
        question: "Who allocates and reshuffles the portfolios among the state ministers?",
        options: [
            "The Governor independently",
            "The Chief Minister",
            "The Cabinet Secretary",
            "The President"
        ],
        correctAnswer: 1, // B
        explanation: "He (Chief Minister) allocates and reshuffles the portfolios among ministers.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Portfolio Allocation", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 16,
        question: "If there is a difference of opinion between the Chief Minister and an individual minister, the Chief Minister can ask the minister to resign. If the minister refuses, the Chief Minister can advise the ______ to dismiss him.",
        options: [
            "Speaker",
            "Governor",
            "High Court",
            "President"
        ],
        correctAnswer: 1, // B
        explanation: "He can ask a minister to resign or advise the governor to dismiss him in case of difference of opinion.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Dismissal of Minister", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 17,
        question: "Who presides over the meetings of the state council of ministers?",
        options: [
            "The Governor",
            "The Chief Minister",
            "The Speaker",
            "The Chief Secretary"
        ],
        correctAnswer: 1, // B
        explanation: "He (Chief Minister) presides over the meetings of the council of ministers and influences its decisions.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Cabinet Meetings", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 18,
        question: "Since the Chief Minister is the head of the council of ministers, what happens to the council of ministers when a Chief Minister resigns or dies?",
        options: [
            "The senior most minister automatically becomes the Chief Minister.",
            "The council of ministers continues to function without a head for 6 months.",
            "His resignation or death automatically dissolves the council of ministers.",
            "The Governor takes over the portfolios."
        ],
        correctAnswer: 2, // C
        explanation: "Since the Chief Minister is the head of the council of ministers, his resignation or death automatically dissolves the council of ministers. The resignation or death of any other minister, on the other hand, merely creates a vacancy.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "CM Resignation Effect", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 19,
        question: "The Chief Minister acts as the principal channel of communication between the ______ and the council of ministers.",
        options: [
            "President",
            "Governor",
            "Legislative Assembly",
            "General Public"
        ],
        correctAnswer: 1, // B
        explanation: "He is the principal channel of communication between the governor and the council of ministers.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Channel of Comm", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 20,
        question: "It is the constitutionally mandated duty of the Chief Minister (Article 167) to communicate to the Governor all decisions of the council of ministers relating to:",
        options: [
            "Only the annual budget.",
            "The administration of the affairs of the state and proposals for legislation.",
            "The appointment of High Court judges.",
            "Only the transfers of IAS officers."
        ],
        correctAnswer: 1, // B
        explanation: "It is the duty of the Chief Minister (Art 167) to communicate to the governor of the state all decisions of the council of ministers relating to the administration of the affairs of the state and proposals for legislation.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Article 167 Duty", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 21,
        question: "If a decision has been taken by a minister but has not been considered by the council, who can require the Chief Minister to submit the matter for the consideration of the council of ministers?",
        options: [
            "The President",
            "The Governor",
            "The Speaker",
            "The Leader of Opposition"
        ],
        correctAnswer: 1, // B
        explanation: "If the governor so requires, to submit for the consideration of the council of ministers any matter on which a decision has been taken by a minister but which has not been considered by the council.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Governor's Requirement", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 22,
        question: "The Chief Minister advises the Governor with regard to the appointment of important officials like:",
        options: [
            "Advocate General and Chairman of SPSC",
            "President of India",
            "Chief Justice of India",
            "Governors of neighboring states"
        ],
        correctAnswer: 0, // A
        explanation: "He advises the governor with regard to the appointment of important officials like advocate general, chairman and members of the state public service commission, state election commissioner, and so on.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Advice on Appointments", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 23,
        question: "In his capacity as the leader of the lower house, the Chief Minister advises the Governor with regard to ______ the sessions of the state legislature.",
        options: [
            "Summoning and proroguing",
            "Banning",
            "Ignoring",
            "Only dissolving"
        ],
        correctAnswer: 0, // A
        explanation: "He advises the governor with regard to the summoning and proroguing of the sessions of the state legislature.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Legislative Advice", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 24,
        question: "The Chief Minister can recommend the dissolution of the legislative assembly to the Governor at any time. True or False?",
        options: [
            "True",
            "False",
            "Partially True",
            "Cannot be determined"
        ],
        correctAnswer: 0, // A
        explanation: "He can recommend the dissolution of the legislative assembly to the governor at any time.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Recommend Dissolution", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 25,
        question: "Who announces the government policies on the floor of the House?",
        options: [
            "The Governor",
            "The Speaker",
            "The Chief Minister",
            "The Chief Secretary"
        ],
        correctAnswer: 2, // C
        explanation: "He announces the government policies on the floor of the House.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Policy Announcement", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 26,
        question: "At the state level, the Chief Minister acts as the chairman of the:",
        options: [
            "State Planning Board",
            "Finance Commission",
            "Public Service Commission",
            "State Human Rights Commission"
        ],
        correctAnswer: 0, // A
        explanation: "Other Powers and Functions: He is the chairman of the State Planning Board.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Chairman Roles", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 27,
        question: "The Chief Minister acts as a Vice-Chairman of the concerned Zonal Council by rotation. What is the tenure of this position?",
        options: [
            "Five Years",
            "One Year",
            "Six Months",
            "Three Years"
        ],
        correctAnswer: 1, // B
        explanation: "He acts as a vice-chairman of the concerned zonal council by rotation, holding office for a period of one year at a time.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Zonal Council Role", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 28,
        question: "The Chief Minister is a member of the Inter-State Council and the Governing Council of NITI Aayog. Who heads both of these bodies?",
        options: [
            "The President",
            "The Prime Minister",
            "The Home Minister",
            "The Chief Justice of India"
        ],
        correctAnswer: 1, // B
        explanation: "He is a member of the Inter-State Council and the Governing Council of NITI Aayog, both headed by the prime minister.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "PM Headed Bodies", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 29,
        question: "Who is the chief spokesman of the state government?",
        options: [
            "The Information and Broadcasting Minister",
            "The Governor",
            "The Chief Minister",
            "The Director General of Police"
        ],
        correctAnswer: 2, // C
        explanation: "He is the chief spokesman of the state government.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Chief Spokesman", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    },
    {
        id: 30,
        question: "During emergencies, who acts as the crisis manager-in-chief at the political level in the state?",
        options: [
            "The Chief Secretary",
            "The Governor",
            "The Chief Minister",
            "The President"
        ],
        correctAnswer: 2, // C
        explanation: "He is the crisis manager-in-chief at the political level during emergencies.",
        level: "Easy", topic: "Chief Minister", difficulty_tier: "Level_1", cognitive_tag: "Crisis Manager", source_mapping: { book: "M. Laxmikanth", chapter: "Chief Minister" }
    }
];
