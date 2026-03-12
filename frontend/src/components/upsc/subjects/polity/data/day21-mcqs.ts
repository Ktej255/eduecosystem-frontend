import type { MCQ } from './mcq-utils';

export const DAY21_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 21)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "Are Cabinet Committees mentioned in the Constitution of India?",
        options: [
            "Yes, they are described in Article 74.",
            "Yes, they are established under Article 77.",
            "No, they are extra-constitutional in emergence.",
            "Yes, they are mentioned in the First Schedule."
        ],
        correctAnswer: 2, // C
        explanation: "They are extra-constitutional in emergence. In other words, they are not mentioned in the Constitution.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 2,
        question: "Under which rules are the establishment of Cabinet Committees provided?",
        options: [
            "Rules of Procedure of the Lok Sabha",
            "Rules of Business of the Government of India",
            "The Constitution of India",
            "The Representation of the People Act"
        ],
        correctAnswer: 1, // B
        explanation: "However, the Rules of Business provide for their establishment.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 3,
        question: "What are the two types of Cabinet Committees?",
        options: [
            "Standing and Ad hoc",
            "Formal and Informal",
            "Executive and Legislative",
            "Permanent and Temporary"
        ],
        correctAnswer: 0, // A
        explanation: "They are of two types—standing and ad hoc. The former are of a permanent nature while the latter are of a temporary nature.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 4,
        question: "Who sets up the Cabinet Committees?",
        options: [
            "The President",
            "The Parliament",
            "The Prime Minister",
            "The Chief Justice of India"
        ],
        correctAnswer: 2, // C
        explanation: "They are set up by the Prime Minister according to the exigencies of the time and requirements of the situation.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 5,
        question: "Does the number, nomenclature, and composition of Cabinet Committees remain the same over time?",
        options: [
            "Yes, they are fixed by law.",
            "No, they vary from time to time.",
            "Yes, they are changed only by constitutional amendment.",
            "Yes, they are fixed by the President."
        ],
        correctAnswer: 1, // B
        explanation: "Hence, their number, nomenclature, and composition varies from time to time.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 6,
        question: "What is the typical membership size of a Cabinet Committee?",
        options: [
            "Only 2 members",
            "Exactly 10 members",
            "They usually include only three to eight members.",
            "More than 15 members"
        ],
        correctAnswer: 2, // C
        explanation: "Their membership varies from three to eight. They usually include only cabinet ministers.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 7,
        question: "Are non-cabinet ministers entirely excluded from membership in Cabinet Committees?",
        options: [
            "Yes, they are completely barred.",
            "No, the non-cabinet ministers are not debarred from their membership.",
            "Yes, unless special permission is granted by the President.",
            "No, but they cannot vote."
        ],
        correctAnswer: 1, // B
        explanation: "They usually include only cabinet ministers. However, the non-cabinet ministers are not debarred from their membership.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 8,
        question: "Do Cabinet Committees only include ministers in charge of subjects covered by the committee?",
        options: [
            "Yes, exclusively.",
            "No, they not only include the ministers in charge of subjects covered by them but also include other senior ministers.",
            "Yes, to ensure focused discussion.",
            "No, they must include opposition members as well."
        ],
        correctAnswer: 1, // B
        explanation: "They not only include the ministers in charge of subjects covered by them but also include other senior ministers.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 9,
        question: "Who mostly heads the Cabinet Committees?",
        options: [
            "The Home Minister",
            "The Prime Minister",
            "The Finance Minister",
            "The President"
        ],
        correctAnswer: 1, // B
        explanation: "They are mostly headed by the Prime Minister. Some time other Cabinet Ministers, particularly the Home Minister or the Finance Minister, also acts as their Chairman.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 10,
        question: "If the Prime Minister is a member of a Cabinet Committee, what is his formal position in that committee?",
        options: [
            "He acts as a regular member.",
            "He acts as an observer.",
            "He invariably presides over it.",
            "He serves as the secretary."
        ],
        correctAnswer: 2, // C
        explanation: "But, in case the Prime Minister is a member of a committee, he invariably presides over it.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 11,
        question: "What happens to the decisions taken by a Cabinet Committee?",
        options: [
            "They are final and cannot be reviewed.",
            "They must be approved by the President first.",
            "They not only sort out issues and formulate proposals for the consideration of the Cabinet, but also take decisions. However, the Cabinet can review their decisions.",
            "They are sent directly to Parliament for a vote."
        ],
        correctAnswer: 2, // C
        explanation: "They not only sort out issues and formulate proposals for the consideration of the Cabinet, but also take decisions. However, the Cabinet can review their decisions.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 12,
        question: "Upon what principle are Cabinet Committees based?",
        options: [
            "Division of labor and effective delegation",
            "Separation of powers",
            "Checks and balances",
            "Federalism"
        ],
        correctAnswer: 0, // A
        explanation: "They are an organisational device to reduce the enormous workload of the Cabinet. They also facilitate in-depth examination of policy issues and effective coordination. They are based on the principles of division of labour and effective delegation.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 13,
        question: "Which of the following describes 'Ad hoc' committees?",
        options: [
            "They are permanent in nature.",
            "They are formed by the Parliament.",
            "They are constituted from time to time to deal with special problems.",
            "They only handle financial matters."
        ],
        correctAnswer: 2, // C
        explanation: "The Ad hoc committees are constituted from time to time to deal with special problems.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 14,
        question: "In 1994, how many standing cabinet committees were in existence?",
        options: [
            "10",
            "11",
            "12",
            "13"
        ],
        correctAnswer: 3, // D
        explanation: "In 1994, there were 13 standing cabinet committees.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 15,
        question: "In 2013, how many standing cabinet committees were in existence?",
        options: [
            "8",
            "10",
            "12",
            "13"
        ],
        correctAnswer: 1, // B
        explanation: "In 2013, there were 10 standing cabinet committees.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 16,
        question: "At present (as of the chapter's context/2019 reconstituted list), how many standing cabinet committees are there?",
        options: [
            "6",
            "8",
            "10",
            "12"
        ],
        correctAnswer: 1, // B
        explanation: "At present, there are 8 standing cabinet committees.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 17,
        question: "Which of the following is NOT one of the current standing cabinet committees?",
        options: [
            "Cabinet Committee on Security",
            "Cabinet Committee on Economic Affairs",
            "Cabinet Committee on Political Affairs",
            "Cabinet Committee on External Affairs"
        ],
        correctAnswer: 3, // D
        explanation: "The list includes: Political Affairs, Economic Affairs, Appointments, Security, Parliamentary Affairs, Accommodation, Investment and Growth, and Employment and Skill Development. There is no 'Cabinet Committee on External Affairs' mentioned.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 18,
        question: "Which Cabinet Committee deals with all policy matters pertaining to domestic and foreign affairs?",
        options: [
            "The Cabinet Committee on Security",
            "The Cabinet Committee on Political Affairs",
            "The Cabinet Committee on Economic Affairs",
            "The Cabinet Committee on Parliamentary Affairs"
        ],
        correctAnswer: 1, // B
        explanation: "The Cabinet Committee on Political Affairs deals with all policy matters pertaining to domestic and foreign affairs.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 19,
        question: "What is the function of the Cabinet Committee on Economic Affairs?",
        options: [
            "It directs and coordinates the governmental activities in the economic sphere.",
            "It manages the progress of government business in the Parliament.",
            "It deals with all policy matters pertaining to domestic and foreign affairs.",
            "It decides all higher level appointments in the Central Secretariat."
        ],
        correctAnswer: 0, // A
        explanation: "The Cabinet Committee on Economic Affairs directs and coordinates the governmental activities in the economic sphere.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 20,
        question: "Which Cabinet Committee decides all higher-level appointments in the Central Secretariat, Public Enterprises, Banks and Financial Institutions?",
        options: [
            "The Appointments Committee of the Cabinet",
            "The Cabinet Committee on Economic Affairs",
            "The Cabinet Committee on Parliamentary Affairs",
            "The Cabinet Committee on Political Affairs"
        ],
        correctAnswer: 0, // A
        explanation: "Appointments Committee of the Cabinet decides all higher level appointments in the Central Secretariat, Public Enterprises, Banks and Financial Institutions.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 21,
        question: "Which Cabinet Committee looks after the progress of government business in the Parliament?",
        options: [
            "The Cabinet Committee on Political Affairs",
            "The Cabinet Committee on Parliamentary Affairs",
            "The Appointments Committee of the Cabinet",
            "The Cabinet Committee on Security"
        ],
        correctAnswer: 1, // B
        explanation: "Parliamentary Affairs Committee looks after the progress of government business in the Parliament.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 22,
        question: "Who chairs the Cabinet Committee on Parliamentary Affairs?",
        options: [
            "The Prime Minister",
            "The Home Minister",
            "The Finance Minister",
            "The Speaker of Lok Sabha"
        ],
        correctAnswer: 1, // B
        explanation: "The first three committees [Political Affairs, Economic Affairs, Appointments] are chaired by the Prime Minister and the last one [Parliamentary Affairs] by the Home Minister.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 23,
        question: "Out of the four most important cabinet committees mentioned in the text (Political Affairs, Economic Affairs, Appointments, Parliamentary Affairs), which one is described as the most powerful?",
        options: [
            "The Appointments Committee",
            "The Cabinet Committee on Economic Affairs",
            "The Cabinet Committee on Political Affairs",
            "The Cabinet Committee on Parliamentary Affairs"
        ],
        correctAnswer: 2, // C
        explanation: "Of all the Cabinet Committees, the most powerful is the Political Affairs Committee, often described as a 'Super-Cabinet'.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 24,
        question: "Which Cabinet Committee is often referred to as the 'Super-Cabinet'?",
        options: [
            "The Appointments Committee of the Cabinet",
            "The Cabinet Committee on Economic Affairs",
            "The Cabinet Committee on Political Affairs",
            "The Cabinet Committee on Security"
        ],
        correctAnswer: 2, // C
        explanation: "Of all the Cabinet Committees, the most powerful is the Political Affairs Committee, often described as a 'Super-Cabinet'.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 25,
        question: "Besides Standing Committees, what other institutional mechanisms have Prime Ministers used to reduce Cabinet workload?",
        options: [
            "Group of Ministers (GoMs)",
            "Special Parliamentary Committees",
            "Supreme Court Advisory Panels",
            "National Security Council Directives"
        ],
        correctAnswer: 0, // A
        explanation: "In addition to cabinet committees, several Groups of Ministers (GoMs) has been constituted to look into different issues/subjects.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 26,
        question: "Are Groups of Ministers (GoMs) permanent bodies?",
        options: [
            "Yes, they are established by the Constitution.",
            "No, some of these GoMs have been empowered to take decisions on behalf of the Cabinet whereas the others make recommendations to the Cabinet. They are essentially Ad hoc.",
            "Yes, they exist as long as the Lok Sabha exists.",
            "No, they only exist during emergencies."
        ],
        correctAnswer: 1, // B
        explanation: "GoMs are ad hoc bodies formed to give recommendations to the cabinet on certain emergent issues and critical problem areas.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 27,
        question: "What is an Empowered Group of Ministers (EGoM)?",
        options: [
            "A GoM headed specifically by the Prime Minister.",
            "A GoM that has been empowered to take decisions on behalf of the Cabinet without further approval.",
            "A GoM that includes state Chief Ministers.",
            "A GoM sanctioned by the Supreme Court."
        ],
        correctAnswer: 1, // B
        explanation: "Some of these GoMs have been empowered to take decisions on behalf of the Cabinet whereas the others make recommendations to the Cabinet.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 28,
        question: "What happened to the existing Empowered Group of Ministers (EGoMs) and Group of Ministers (GoMs) under the Modi government in 2014?",
        options: [
            "Their numbers were doubled.",
            "They were integrated into the NITI Aayog.",
            "The Modi government decided to abolish all the existing 9 EGoMs and 21 GoMs for greater accountability and faster decision-making.",
            "They were made permanent constitutional bodies."
        ],
        correctAnswer: 2, // C
        explanation: "It should be noted here that the Modi government in 2014, decided to abolish all the existing 9 EGoMs (Empowered Group of Ministers) and 21 GoMs (Group of Ministers)...",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 29,
        question: "What was the stated purpose behind the abolition of EGoMs and GoMs in 2014?",
        options: [
            "To give more power to the President.",
            "For greater accountability and to ensure faster decision-making by ministries and departments.",
            "To reduce the financial burden of committee meetings.",
            "To transfer their functions directly to the Parliament."
        ],
        correctAnswer: 1, // B
        explanation: "The Modi government in 2014, decided to abolish all the existing 9 EGoMs... for greater accountability and to ensure faster decision-making. This move was to empower the Ministries and Departments to take decisions themselves.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    },
    {
        id: 30,
        question: "After abolishing EGoMs/GoMs, where problems are inter-ministerial in nature, how are they typically resolved according to the 2014 directive?",
        options: [
            "Through a national referendum.",
            "By the Supreme Court.",
            "The Cabinet Secretariat and the Prime Minister’s Office (PMO) will facilitate the decision-making process.",
            "By forming temporary EGoMs again."
        ],
        correctAnswer: 2, // C
        explanation: "This move was to empower the Ministries and Departments to take decisions themselves... Wherever the Ministries face any difficulties, the Cabinet Secretariat and the Prime Minister’s Office (PMO) will facilitate the decision-making process.",
        level: "Easy", topic: "Cabinet Committees", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Cabinet Committees" }
    }
];
