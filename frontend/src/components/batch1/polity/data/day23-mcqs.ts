import type { MCQ } from './mcq-utils';

export const DAY23_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 23)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "What is a Parliamentary Committee?",
        options: [
            "Any committee comprising members of Parliament.",
            "A committee that is appointed or elected by the House or nominated by the Speaker/Chairman.",
            "A committee that works closely with the President.",
            "A committee formed by the ruling party."
        ],
        correctAnswer: 1, // B
        explanation: "A parliamentary committee means a committee that... Is appointed or elected by the House or nominated by the Speaker / Chairman... Works under the direction of the Speaker / Chairman... Presents its report to the House or to the Speaker / Chairman... Has a secretariat provided by the Lok Sabha / Rajya Sabha.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Definition", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 2,
        question: "Under whose direction does a Parliamentary Committee work?",
        options: [
            "The Prime Minister",
            "The President of India",
            "The Speaker / Chairman of the House",
            "The Chief Justice of India"
        ],
        correctAnswer: 2, // C
        explanation: "A parliamentary committee... Works under the direction of the Speaker / Chairman.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 3,
        question: "What are the two broad classifications of Parliamentary Committees?",
        options: [
            "Standing Committees and Ad Hoc Committees",
            "Financial Committees and Administrative Committees",
            "Lok Sabha Committees and Rajya Sabha Committees",
            "Statutory Committees and Non-Statutory Committees"
        ],
        correctAnswer: 0, // A
        explanation: "Broadly, parliamentary committees are of two kinds—Standing Committees and Ad Hoc Committees. The former are permanent... The latter are temporary...",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 4,
        question: "Which of the following describes Standing Committees?",
        options: [
            "They are temporary and cease to exist after completing their task.",
            "They are appointed by the President during emergencies.",
            "They are permanent (constituted every year or periodically) and work on a continuous basis.",
            "They are composed only of Ministers."
        ],
        correctAnswer: 2, // C
        explanation: "The former [Standing Committees] are permanent (constituted every year or periodically) and work on a continuous basis.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 5,
        question: "Which category do the Public Accounts Committee, Estimates Committee, and Committee on Public Undertakings fall under?",
        options: [
            "Ad hoc Committees",
            "Financial Committees",
            "Departmental Standing Committees",
            "Committees to Inquire"
        ],
        correctAnswer: 1, // B
        explanation: "Financial Committees (a) Public Accounts Committee (b) Estimates Committee (c) Committee on Public Undertakings",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Classification", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 6,
        question: "When was the Public Accounts Committee first set up?",
        options: [
            "1919",
            "1921",
            "1947",
            "1950"
        ],
        correctAnswer: 1, // B
        explanation: "This committee was set up first in 1921 under the provisions of the Government of India Act of 1919 and has since been in existence.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 7,
        question: "What is the total membership of the Public Accounts Committee presently?",
        options: [
            "15 members",
            "20 members",
            "22 members",
            "30 members"
        ],
        correctAnswer: 2, // C
        explanation: "At present, it consists of 22 members (15 from the Lok Sabha and 7 from the Rajya Sabha).",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Composition", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 8,
        question: "How are the members of the Public Accounts Committee elected?",
        options: [
            "Nominated by the President",
            "Elected by the Parliament entirely from the ruling party",
            "Elected by the Parliament every year from amongst its members according to the principle of proportional representation by means of the single transferable vote",
            "Directly elected by the public"
        ],
        correctAnswer: 2, // C
        explanation: "The members are elected by the Parliament every year from amongst its members according to the principle of proportional representation by means of the single transferable vote.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Election Method", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 9,
        question: "Can a minister be elected as a member of the Public Accounts Committee?",
        options: [
            "Yes, invariably",
            "Yes, if nominated by the Speaker",
            "No",
            "Only the Finance Minister"
        ],
        correctAnswer: 2, // C
        explanation: "A minister cannot be elected as a member of the committee.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Membership Rules", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 10,
        question: "Since 1967, what convention has developed regarding the chairman of the Public Accounts Committee?",
        options: [
            "The chairman is always the Speaker of the Lok Sabha.",
            "The chairman is selected invariably from the ruling party.",
            "The chairman is selected invariably from the Opposition.",
            "The oldest member of the committee becomes the chairman."
        ],
        correctAnswer: 2, // C
        explanation: "However, since 1967 a convention has developed whereby the chairman of the committee is selected invariably from the Opposition.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Convention", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 11,
        question: "What is the primary function of the Public Accounts Committee?",
        options: [
            "To draft the union budget.",
            "To examine the annual audit reports of the Comptroller and Auditor General of India (CAG).",
            "To decide the allocation of funds to state governments.",
            "To appoint the Finance Commission."
        ],
        correctAnswer: 1, // B
        explanation: "The function of the committee is to examine the annual audit reports of the Comptroller and Auditor General of India (CAG), which are laid before the Parliament by the President.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Function", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 12,
        question: "Who acts as a 'guide, friend and philosopher' to the Public Accounts Committee?",
        options: [
            "The Prime Minister",
            "The Speaker of the Lok Sabha",
            "The Comptroller and Auditor General of India (CAG)",
            "The Finance Secretary"
        ],
        correctAnswer: 2, // C
        explanation: "In the fulfillment of the above functions, the committee is assisted by the CAG. In fact, the CAG acts as a guide, friend and philosopher of the committee.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 13,
        question: "When was the first Estimates Committee in the post-independence era constituted?",
        options: [
            "1947",
            "1950",
            "1952",
            "1956"
        ],
        correctAnswer: 1, // B
        explanation: "The origin of this committee can be traced to the standing financial committee set up in 1921. The first Estimates Committee in the post-independence era was constituted in 1950 on the recommendation of John Mathai, the then finance minister.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "History", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 14,
        question: "What is the membership strength of the Estimates Committee?",
        options: [
            "22 members (15 from LS and 7 from RS)",
            "30 members (all from Lok Sabha)",
            "45 members (30 from LS and 15 from RS)",
            "15 members (all from Rajya Sabha)"
        ],
        correctAnswer: 1, // B
        explanation: "Originally, it had 25 members but in 1956 its membership was raised to 30. All the thirty members are from Lok Sabha only. The Rajya Sabha has no representation in this committee.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Composition", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 15,
        question: "From which House are the members of the Estimates Committee drawn?",
        options: [
            "Lok Sabha only",
            "Rajya Sabha only",
            "Both Lok Sabha and Rajya Sabha",
            "Nominated by the President"
        ],
        correctAnswer: 0, // A
        explanation: "All the thirty members are from Lok Sabha only. The Rajya Sabha has no representation in this committee.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Composition", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 16,
        question: "Who appoints the chairman of the Estimates Committee?",
        options: [
            "The Prime Minister",
            "The President",
            "The Speaker",
            "The Chairman of Rajya Sabha"
        ],
        correctAnswer: 2, // C
        explanation: "The chairman of the committee is appointed by the Speaker from amongst its members...",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 17,
        question: "What is the primary function of the Estimates Committee?",
        options: [
            "To audit government accounts post-expenditure.",
            "To suggest 'economies' in public expenditure by examining the estimates included in the budget.",
            "To approve or reject the annual budget.",
            "To investigate administrative corruption."
        ],
        correctAnswer: 1, // B
        explanation: "The function of the committee is to examine the estimates included in the budget and suggest ‘economies’ in public expenditure.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Function", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 18,
        question: "On whose recommendation was the Committee on Public Undertakings created in 1964?",
        options: [
            "Santhanam Committee",
            "Krishna Menon Committee",
            "John Mathai Committee",
            "Mandal Commission"
        ],
        correctAnswer: 1, // B
        explanation: "This committee was created in 1964 on the recommendation of the Krishna Menon Committee.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "History", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 19,
        question: "What is the current membership of the Committee on Public Undertakings?",
        options: [
            "15 members (10 LS, 5 RS)",
            "22 members (15 LS, 7 RS)",
            "30 members (all LS)",
            "45 members"
        ],
        correctAnswer: 1, // B
        explanation: "Originally, it had 15 members (10 from the Lok Sabha and 5 from the Rajya Sabha). However, in 1974, its membership was raised to 22 (15 from the Lok Sabha and 7 from the Rajya Sabha).",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Composition", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 20,
        question: "From which House can the chairman of the Committee on Public Undertakings be appointed?",
        options: [
            "Only from the Lok Sabha",
            "Only from the Rajya Sabha",
            "From either House",
            "They are usually an outside expert"
        ],
        correctAnswer: 0, // A
        explanation: "The chairman of the committee is appointed by the Speaker from amongst its members who are drawn from the Lok Sabha only. Thus, the members of the committee who are from the Rajya Sabha cannot be appointed as the chairman.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 21,
        question: "Can the Committee on Public Undertakings examine matters of major government policy as distinct from business or commercial functions of the public undertakings?",
        options: [
            "Yes, absolutely.",
            "No, the committee is not to examine and investigate... matters of major government policy as distinct from business or commercial functions of the public undertakings.",
            "Yes, if directed by the President.",
            "Yes, but only for navratna companies."
        ],
        correctAnswer: 1, // B
        explanation: "The committee is not to examine and investigate any of the following: (i) matters of major government policy as distinct from business or commercial functions of the public undertakings...",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Limitation", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 22,
        question: "When was the system of Departmental Standing Committees (DSCs) instituted?",
        options: [
            "1950",
            "1989",
            "1993",
            "2004"
        ],
        correctAnswer: 2, // C
        explanation: "On the recommendation of the Rules Committee of the Lok Sabha, 17 Departmentally-Related Standing Committees (DRSCs) were set up in the Parliament in 1993.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "History", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 23,
        question: "Currently, how many Departmental Standing Committees (DSCs) exist?",
        options: [
            "17",
            "20",
            "24",
            "30"
        ],
        correctAnswer: 2, // C
        explanation: "In 2004, seven more such committees were setup, thus increasing their number from 17 to 24.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 24,
        question: "What is the main objective of the Departmental Standing Committees?",
        options: [
            "To audit all state governments.",
            "To ensure day-to-day administration of ministries.",
            "To secure more accountability of the Executive (i.e., the Council of Ministers) to the Parliament, particularly financial accountability.",
            "To conduct elections for the Parliament."
        ],
        correctAnswer: 2, // C
        explanation: "The main objective of the standing committees is to secure more accountability of the Executive (i.e., the Council of Ministers) to the Parliament, particularly financial accountability.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Purpose", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 25,
        question: "How many members does each Departmental Standing Committee consist of?",
        options: [
            "21",
            "31",
            "45",
            "50"
        ],
        correctAnswer: 1, // B
        explanation: "Each standing committee consists of 31 members (21 from Lok Sabha and 10 from Rajya Sabha).",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Composition", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 26,
        question: "Do the recommendations of the Departmental Standing Committees have a binding nature on Parliament?",
        options: [
            "Yes, they are absolute laws.",
            "No, they are highly regarded but are advisory in nature.",
            "Yes, unless vetoed by the President.",
            "Yes, but only the financial ones."
        ],
        correctAnswer: 1, // B
        explanation: "However, it should be noted that the recommendations of these committees are advisory in nature and hence not binding on the Parliament.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 27,
        question: "Which committee specifically considers matters of procedure and conduct of business in the House?",
        options: [
            "Committee on Privileges",
            "Rules Committee",
            "Business Advisory Committee",
            "Committee on Petitions"
        ],
        correctAnswer: 1, // B
        explanation: "Rules Committee: This committee considers the matters of procedure and conduct of business in the House and recommends necessary amendments or additions to the rules of the House.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Function", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 28,
        question: "Who acts as the ex-officio chairman of the Rules Committee in the Lok Sabha?",
        options: [
            "The Prime Minister",
            "The Minister of Parliamentary Affairs",
            "The Speaker",
            "A member of the opposition"
        ],
        correctAnswer: 2, // C
        explanation: "The Lok Sabha committee consists of 15 members including the Speaker as its ex-officio chairman.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 29,
        question: "What does the Committee on Privileges examine?",
        options: [
            "It examines the privileges of the Prime Minister.",
            "It investigates the financial privileges of states.",
            "The functions of this committee are semi-judicial in nature. It examines the cases of breach of privileges of the House and its members and recommends appropriate action.",
            "It handles international diplomatic privileges."
        ],
        correctAnswer: 2, // C
        explanation: "Committee on Privileges: The functions of this committee are semi-judicial in nature. It examines the cases of breach of privileges of the House and its members and recommends appropriate action.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Function", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    },
    {
        id: 30,
        question: "Which committee examines bills to ensure that the rules regarding the formulation of bye-laws and regulations by the executive are being properly followed?",
        options: [
            "Committee on Subordinate Legislation",
            "Committee on Assurances",
            "Business Advisory Committee",
            "Committee on Petitions"
        ],
        correctAnswer: 0, // A
        explanation: "Committee on Subordinate Legislation: This committee examines and reports to the House whether the powers to make regulations, rules, sub-rules and bye-laws delegated by the Parliament or conferred by the Constitution to the Executive are being properly exercised by it.",
        level: "Easy", topic: "Parliamentary Committees", difficulty_tier: "Level_1", cognitive_tag: "Function", source_mapping: { book: "M. Laxmikanth", chapter: "Parliamentary Committees" }
    }
];
