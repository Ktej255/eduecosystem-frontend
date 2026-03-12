import type { MCQ } from './mcq-utils';

export const DAY33_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 33)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "Which articles in Part VI of the Constitution deal with the organization, composition, duration, officers, and procedures of the state legislature?",
        options: [
            "Articles 153 to 167",
            "Articles 168 to 212",
            "Articles 214 to 231",
            "Articles 239 to 241"
        ],
        correctAnswer: 1, // B
        explanation: "Articles 168 to 212 in Part VI of the Constitution deal with the organisation, composition, duration, officers, procedures, privileges, powers and so on of the state legislature.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Article Mapping", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 2,
        question: "How many states in India currently have a bicameral legislature?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        correctAnswer: 1, // B
        explanation: "At present, only six states have two Houses (bicameral). These are Andhra Pradesh, Telangana, Uttar Pradesh, Bihar, Maharashtra and Karnataka.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Bicameral States", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 3,
        question: "In a state with a bicameral legislature, the legislature consists of the Governor, the Legislative Council (Vidhan Parishad), and the:",
        options: [
            "Zila Parishad",
            "Legislative Assembly (Vidhan Sabha)",
            "Gram Sabha",
            "Rajya Sabha"
        ],
        correctAnswer: 1, // B
        explanation: "In the states having a bicameral system, the state legislature consists of the governor, the legislative council and the legislative assembly.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Legislature Composition", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 4,
        question: "Under Article 169, who has the power to abolish or create a State Legislative Council?",
        options: [
            "The Governor",
            "The State Legislative Assembly",
            "The Parliament",
            "The President"
        ],
        correctAnswer: 2, // C
        explanation: "The Constitution provides for the abolition or creation of legislative councils in states. Accordingly, the Parliament can abolish a legislative council (where it already exists) or create it (where it does not exist)...",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Article 169 Power", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 5,
        question: "For the Parliament to act under Article 169 to create or abolish a Legislative Council, what must the concerned State Legislative Assembly do first?",
        options: [
            "Pass a resolution by a simple majority.",
            "Pass a resolution by a special majority.",
            "Obtain the Governor's prior recommendation.",
            "Send an advisory request to the Supreme Court."
        ],
        correctAnswer: 1, // B
        explanation: "...if the legislative assembly of the concerned state passes a resolution to that effect. Such a specific resolution must be passed by the state assembly by a special majority...",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Assembly Resolution Majority", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 6,
        question: "Is the law made by Parliament under Article 169 for the creation or abolition of a Legislative Council considered an amendment to the Constitution under Article 368?",
        options: [
            "Yes, it requires ratification by half the states.",
            "Yes, it requires a special majority in Parliament.",
            "No, it is passed like an ordinary piece of legislation (i.e., by simple majority).",
            "No, it does not require Parliament's approval at all."
        ],
        correctAnswer: 2, // C
        explanation: "This Act of Parliament is not to be deemed as an amendment of the Constitution for the purposes of Article 368 and is passed like an ordinary piece of legislation (ie, by simple majority).",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Article 169 Amendment Status", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 7,
        question: "The maximum strength of a State Legislative Assembly is fixed by the Constitution at:",
        options: [
            "300 members",
            "400 members",
            "500 members",
            "545 members"
        ],
        correctAnswer: 2, // C
        explanation: "Its maximum strength is fixed at 500 and minimum strength at 60.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Assembly Maximum Strength", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 8,
        question: "The minimum strength of a State Legislative Assembly is generally fixed at 60. However, which of the following states has an Assembly with fewer than 60 members?",
        options: [
            "Kerala",
            "Sikkim",
            "Haryana",
            "Punjab"
        ],
        correctAnswer: 1, // B
        explanation: "However, in case of Arunachal Pradesh, Sikkim and Goa, the minimum number is fixed at 30 and in case of Mizoram and Nagaland, it is 40 and 46 respectively.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Assembly Minimum Exception", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 9,
        question: "Which Constitutional Amendment Act discontinued the provision for the nomination of one Anglo-Indian member by the Governor to the State Legislative Assembly?",
        options: [
            "99th Amendment Act",
            "100th Amendment Act",
            "103rd Amendment Act",
            "104th Amendment Act (2019)"
        ],
        correctAnswer: 3, // D
        explanation: "The 104th Amendment Act of 2019 did away with the provision for nomination of one member of the Anglo-Indian community to the State Legislative Assembly by the Governor.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "104th Amendment Anglo-Indian", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 10,
        question: "The maximum strength of the State Legislative Council is fixed at what proportion of the total strength of the state's Legislative Assembly?",
        options: [
            "One-half",
            "One-third",
            "One-fourth",
            "One-sixth"
        ],
        correctAnswer: 1, // B
        explanation: "The maximum strength of the council is fixed at one-third of the total strength of the assembly and the minimum strength is fixed at 40.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Council Maximum Strength", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 11,
        question: "What is the absolute minimum strength fixed for a State Legislative Council?",
        options: [
            "30",
            "40",
            "50",
            "60"
        ],
        correctAnswer: 1, // B
        explanation: "The maximum strength of the council is fixed at one-third of the total strength of the assembly and the minimum strength is fixed at 40.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Council Minimum Strength", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 12,
        question: "In the composition of the Legislative Council, what fraction of the total members are elected by the members of local bodies in the state, like municipalities and district boards?",
        options: [
            "1/3",
            "1/6",
            "1/12",
            "1/2"
        ],
        correctAnswer: 0, // A
        explanation: "Of the total number of members of a legislative council: 1/3 are elected by the members of local bodies in the state like municipalities, district boards, etc.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Council Composition Local Bodies", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 13,
        question: "What fraction of the members of the Legislative Council are elected by graduates of three years' standing and residing within the state?",
        options: [
            "1/3",
            "1/6",
            "1/12",
            "1/4"
        ],
        correctAnswer: 2, // C
        explanation: "1/12 are elected by graduates of three years’ standing and residing within the state...",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Council Composition Graduates", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 14,
        question: "What fraction of the members of the Legislative Council are nominated by the Governor?",
        options: [
            "1/3",
            "1/6",
            "1/12",
            "1/4"
        ],
        correctAnswer: 1, // B
        explanation: "The remaining 1/6 are nominated by the governor from amongst persons who have a special knowledge or practical experience of literature, science, art, cooperative movement and social service.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Council Composition Governor Nominated", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 15,
        question: "What is the normal term of the Legislative Assembly?",
        options: [
            "4 years",
            "5 years",
            "6 years",
            "It is a permanent body."
        ],
        correctAnswer: 1, // B
        explanation: "Like the Lok Sabha, the legislative assembly is not a continuing chamber. Its normal term is five years from the date of its first meeting after the general elections.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Assembly Normal Term", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 16,
        question: "During a National Emergency, the term of the State Legislative Assembly can be extended by Parliament by law for one year at a time. However, this extension cannot continue beyond a period of ______ after the emergency has ceased to operate.",
        options: [
            "One month",
            "Three months",
            "Six months",
            "One year"
        ],
        correctAnswer: 2, // C
        explanation: "However, this extension cannot continue beyond a period of six months after the emergency has ceased to operate.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Assembly Term Extension Limit", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 17,
        question: "The Legislative Council is a permanent body and not subject to dissolution. What proportion of its members retire on the expiration of every second year?",
        options: [
            "One-half",
            "One-third",
            "One-fourth",
            "One-sixth"
        ],
        correctAnswer: 1, // B
        explanation: "Like the Rajya Sabha, the legislative council is a continuing chamber, that is, it is a permanent body and is not subject to dissolution. But, one-third of its members retire on the expiration of every second year.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Council Retirement Cycle", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 18,
        question: "What is the minimum age prescribed by the Constitution for a person to be chosen as a member of the State Legislative Assembly?",
        options: [
            "21 years",
            "25 years",
            "30 years",
            "35 years"
        ],
        correctAnswer: 1, // B
        explanation: "He must be not less than 30 years of age in the case of the legislative council and not less than 25 years of age in the case of the legislative assembly.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Assembly Minimum Age", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 19,
        question: "What is the minimum age prescribed for becoming a member of the State Legislative Council?",
        options: [
            "25 years",
            "30 years",
            "35 years",
            "21 years"
        ],
        correctAnswer: 1, // B
        explanation: "He must be not less than 30 years of age in the case of the legislative council...",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Council Minimum Age", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 20,
        question: "Under the Representation of the People Act (1951), a person to be elected to the legislative council or assembly must be:",
        options: [
            "A graduate from a recognized university.",
            "An elector for an assembly constituency in the concerned state.",
            "A native resident of the specific district they are contesting from.",
            "A registered member of a recognized political party."
        ],
        correctAnswer: 1, // B
        explanation: "A person to be elected to the legislative council must be an elector for an assembly constituency in the concerned state... Similarly, a person to be elected to the legislative assembly must be an elector for an assembly constituency in the concerned state.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Elector Requirement RPA", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 21,
        question: "On the question of whether a member has become subject to any of the standard disqualifications (e.g., holding an office of profit, unsound mind), whose decision is final?",
        options: [
            "The High Court",
            "The Speaker / Chairman",
            "The Governor",
            "The Election Commission of India"
        ],
        correctAnswer: 2, // C
        explanation: "On the question whether a member has become subject to any of the above disqualifications, the governor’s decision is final. However, he should obtain the opinion of the Election Commission and act accordingly.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Disqualification Final Authority", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 22,
        question: "The question of disqualification under the Tenth Schedule (Anti-Defection Law) is decided by the:",
        options: [
            "Governor",
            "Election Commission",
            "Presiding Officer of the House (Speaker/Chairman)",
            "High Court"
        ],
        correctAnswer: 2, // C
        explanation: "The question of disqualification under the Tenth Schedule is decided by the Chairman in the case of legislative council and Speaker in the case of legislative assembly (and not by the governor).",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Tenth Schedule Authority", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 23,
        question: "Members of the state legislature take their oath or affirmation before the:",
        options: [
            "Chief Justice of High Court",
            "Governor",
            "Speaker / Chairman",
            "Chief Minister"
        ],
        correctAnswer: 1, // B
        explanation: "Every member of either House of state legislature, before taking his seat, has to make and subscribe an oath or affirmation before the governor or some person appointed by him for this purpose.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Oath Administrator", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 24,
        question: "If a member of the State Legislature is absent from all meetings for a continuous period without the permission of the House, the House can declare his seat vacant. What is this period?",
        options: [
            "30 days",
            "60 days",
            "90 days",
            "6 months"
        ],
        correctAnswer: 1, // B
        explanation: "A House of the state legislature can declare the seat of a member vacant if he absents himself from all its meetings for a period of sixty days without its permission.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Vacancy by Absence", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 25,
        question: "How is the Speaker of the Legislative Assembly elected?",
        options: [
            "Elected by the people directly.",
            "Appointed by the Governor.",
            "Elected by the Assembly itself from amongst its members.",
            "Nominated by the Chief Minister."
        ],
        correctAnswer: 2, // C
        explanation: "The Speaker is elected by the assembly itself from amongst its members.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Speaker Election", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 26,
        question: "To whom does the Speaker of the Legislative Assembly address his resignation letter?",
        options: [
            "The Governor",
            "The Chief Minister",
            "The Deputy Speaker",
            "The President"
        ],
        correctAnswer: 2, // C
        explanation: "Usually, the Speaker remains in office during the life of the assembly. However, he vacates his office earlier... if he resigns by writing to the deputy speaker.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Speaker Resignation", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 27,
        question: "The Speaker of the Legislative Assembly can be removed by a resolution passed by a majority of all the then members of the assembly. Such a resolution can be moved only after giving how many days' advance notice?",
        options: [
            "7 days",
            "10 days",
            "14 days",
            "30 days"
        ],
        correctAnswer: 2, // C
        explanation: "...if he is removed by a resolution passed by a majority of all the then members of the assembly. Such a resolution can be moved only after giving 14 days’ advance notice.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Removal Resolution Notice", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 28,
        question: "Who decides the question of whether a bill is a Money Bill or not in the State Legislature?",
        options: [
            "The Governor",
            "The Speaker of the Legislative Assembly",
            "The Chairman of the Legislative Council",
            "The Finance Minister"
        ],
        correctAnswer: 1, // B
        explanation: "He (the Speaker) decides whether a bill is a Money Bill or not and his decision on this question is final.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Money Bill Authority", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 29,
        question: "The quorum to constitute a meeting of either House of the state legislature is:",
        options: [
            "One-tenth of the total number of members of the House, regardless of the minimum.",
            "Ten members or one-tenth of the total number of members of the House (including the presiding officer), whichever is greater.",
            "Fifty members.",
            "One-third of the total number of members."
        ],
        correctAnswer: 1, // B
        explanation: "Quorum is the minimum number of members required to be present... It is ten members or one-tenth of the total number of members of the House (including the presiding officer), whichever is greater.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Quorum Definition", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    },
    {
        id: 30,
        question: "According to the Constitution, the maximum gap between two sessions of the state legislature cannot exceed:",
        options: [
            "3 months",
            "4 months",
            "6 months",
            "1 year"
        ],
        correctAnswer: 2, // C
        explanation: "The governor from time to time summons each House of state legislature to meet. The maximum gap between two sessions of state legislature cannot be more than six months.",
        level: "Easy", topic: "State Legislature", difficulty_tier: "Level_1", cognitive_tag: "Session Maximum Gap", source_mapping: { book: "M. Laxmikanth", chapter: "State Legislature" }
    }
];
