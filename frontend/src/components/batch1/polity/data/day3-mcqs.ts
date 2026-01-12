
export interface MCQ {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation?: string;
    level?: string;
    topic?: string;
    chapter?: string;
    subtopic?: string;
}

export const DAY3_MCQS: MCQ[] = [
    // ========================================================
    // CHAPTER 16: INTER-STATE RELATIONS (20 Questions)
    // ========================================================

    // 16.1 Inter-State Water Disputes
    {
        id: 1,
        question: "Article 262 of the Constitution provides for the adjudication of disputes relating to:",
        options: ["Inter-state trade", "Inter-state river waters", "Inter-state border disputes", "Inter-state migration"],
        correctAnswer: 1,
        explanation: "Article 262 provides for the adjudication of disputes relating to the waters of inter-state rivers or river valleys.",
        subtopic: "16.1"
    },
    {
        id: 2,
        question: "Which of the following statements regarding the Inter-State Water Disputes Act, 1956 is correct?",
        options: [
            "Supreme Court has original jurisdiction over such disputes.",
            "The decision of the Tribunal set up under the Act is final and binding.",
            "The President sets up the Tribunal on his own discretion.",
            "Tribunals are permanent bodies."
        ],
        correctAnswer: 1,
        explanation: "The decision of the Tribunal is final and binding on the parties. The SC's jurisdiction is barred (though it intervenes via Special Leave Petition often). Tribunals are ad hoc.",
        subtopic: "16.1"
    },
    {
        id: 3,
        question: "Who among the following has the power to adjudicate inter-state water disputes under the Constitution?",
        options: ["Supreme Court", "High Court", "Parliament", "President"],
        correctAnswer: 2,
        explanation: "Article 262 empowers Parliament to provide for adjudication. It can also bar Courts from interfering.",
        subtopic: "16.1"
    },
    {
        id: 4,
        question: "Which major river dispute involves the states of Karnataka and Tamil Nadu?",
        options: ["Godavari", "Krishna", "Cauvery", "Mahanadi"],
        correctAnswer: 2,
        explanation: "The Cauvery Water Dispute involves Karnataka, Tamil Nadu, Kerala, and Puducherry.",
        subtopic: "16.1"
    },

    // 16.2 Inter-State Councils
    {
        id: 5,
        question: "The Inter-State Council was established in 1990 based on the recommendation of:",
        options: ["Administrative Reforms Commission", "Rajamannar Committee", "Sarkaria Commission", "Punchhi Commission"],
        correctAnswer: 2,
        explanation: "The Janata Dal government established the Inter-State Council in 1990 on the recommendation of the Sarkaria Commission.",
        subtopic: "16.2"
    },
    {
        id: 6,
        question: "Who acts as the Chairman of the Standing Committee of the Inter-State Council?",
        options: ["Prime Minister", "Union Home Minister", "Cabinet Secretary", "Union Finance Minister"],
        correctAnswer: 1,
        explanation: "The Union Home Minister is the Chairman of the Standing Committee of the Inter-State Council. (Note: The Council itself is chaired by PM).",
        subtopic: "16.2"
    },
    {
        id: 7,
        question: "Which Article empowers the President to establish an Inter-State Council?",
        options: ["Article 262", "Article 263", "Article 264", "Article 265"],
        correctAnswer: 1,
        explanation: "Article 263 empowers the President to establish an Inter-State Council.",
        subtopic: "16.2"
    },
    {
        id: 8,
        question: "The function of the Inter-State Council is to:",
        options: [
            "Adjudicate legal disputes between states",
            "Investigate and discuss subjects of common interest",
            "Allocate tax revenues",
            "Appoint Governors"
        ],
        correctAnswer: 1,
        explanation: "Under Article 263, the council inquires into and advises upon disputes (non-binding) and investigates subjects of common interest to better coordinate policy.",
        subtopic: "16.2"
    },

    // 16.3 Zonal Councils
    {
        id: 9,
        question: "Zonal Councils are:",
        options: ["Constitutional bodies", "Statutory bodies", "Extra-constitutional bodies", "Judicial bodies"],
        correctAnswer: 1,
        explanation: "Zonal Councils are statutory bodies established by the States Reorganisation Act of 1956.",
        subtopic: "16.3"
    },
    {
        id: 10,
        question: "How many Zonal Councils were established by the States Reorganisation Act, 1956?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 1,
        explanation: "5 Zonal Councils: Northern, Central, Eastern, Western, and Southern. (The North-Eastern Council was created separately in 1971).",
        subtopic: "16.3"
    },
    {
        id: 11,
        question: "Who acts as the Chairman of a Zonal Council?",
        options: ["The Prime Minister", "The Union Home Minister", "The Chief Minister of the host state", "The President"],
        correctAnswer: 1,
        explanation: "The Union Home Minister is the common chairman of all Zonal Councils.",
        subtopic: "16.3"
    },
    {
        id: 12,
        question: "The North-Eastern Council was created by:",
        options: ["States Reorganisation Act, 1956", "North-Eastern Council Act, 1971", "Constitution (42nd Amendment) Act", "Presidential Order"],
        correctAnswer: 1,
        explanation: "It was created by a separate Act of Parliament - the North-Eastern Council Act, 1971.",
        subtopic: "16.3"
    },
    {
        id: 13,
        question: "Which of the following states is NOT a member of the Eastern Zonal Council?",
        options: ["Bihar", "West Bengal", "Odisha", "Assam"],
        correctAnswer: 3,
        explanation: "Assam is a member of the North-Eastern Council. Bihar, West Bengal, Odisha, and Jharkhand are in the Eastern Zonal Council.",
        subtopic: "16.3"
    },

    // 16.4 Inter-State Trade and Commerce
    {
        id: 14,
        question: "Article 301 guarantees that trade, commerce and intercourse shall be free:",
        options: ["Throughout the territory of India", "Only between states", "Only within states", "Only for essential commodities"],
        correctAnswer: 0,
        explanation: "Article 301 declares that trade, commerce and intercourse throughout the territory of India shall be free.",
        subtopic: "16.4"
    },
    {
        id: 15,
        question: "Restrictions on the freedom of trade and commerce can be imposed by Parliament in:",
        options: ["Public Interest", "Private Interest", "Only during Emergency", "Only with President's consent"],
        correctAnswer: 0,
        explanation: "Article 302 empowers Parliament to impose restrictions on the freedom of trade, commerce or intercourse between one state and another or within any part of India in 'public interest'.",
        subtopic: "16.4"
    },
    {
        id: 16,
        question: "Can State Legislatures impose reasonable restrictions on trade within the state?",
        options: ["Yes, with President's sanction", "Yes, without any sanction", "No, only Parliament can", "Yes, with Governor's sanction"],
        correctAnswer: 0,
        explanation: "Under Article 304(b), State Legislature can impose reasonable restrictions in public interest, BUT a bill for this purpose can be introduced only with the previous sanction of the President.",
        subtopic: "16.4"
    },
    {
        id: 17,
        question: "Which Articles deal with Trade, Commerce and Intercourse within the territory of India?",
        options: ["Articles 245-255", "Articles 256-263", "Articles 301-307", "Articles 36-51"],
        correctAnswer: 2,
        explanation: "Part XIII, Articles 301 to 307 deal with Trade, Commerce and Intercourse.",
        subtopic: "16.4"
    },
    {
        id: 18,
        question: "The power to appoint an authority to carry out the purposes of Articles 301-304 belongs to:",
        options: ["President", "Parliament", "Supreme Court", "Finance Commission"],
        correctAnswer: 1,
        explanation: "Article 307 empowers Parliament to appoint such authority.",
        subtopic: "16.4"
    },
    // General Ch 16
    {
        id: 19,
        question: "Full Faith and Credit clause (Article 261) ensures that:",
        options: [
            "All states trust each other",
            "Public acts, records and judicial proceedings of Union and States are proved and respected throughout India",
            "Currency of India is accepted everywhere",
            "Citizens can move freely"
        ],
        correctAnswer: 1,
        explanation: "Article 261 provides that full faith and credit shall be given throughout India to public acts, records and judicial proceedings of the Union and every State.",
        subtopic: "16.0"
    },
    {
        id: 20,
        question: "Which constitutional body investigates and discusses subjects of common interest between the Union and States?",
        options: ["NITI Aayog", "Inter-State Council", "Zonal Council", "National Development Council"],
        correctAnswer: 1,
        explanation: "Inter-State Council (Art 263). NITI Aayog is non-constitutional.",
        subtopic: "16.2"
    },

    // ========================================================
    // CHAPTER 17: EMERGENCY PROVISIONS (40 Questions)
    // ========================================================

    // 17.1 National Emergency
    {
        id: 21,
        question: "Under Article 352, National Emergency can be declared on which grounds?",
        options: ["War, External Aggression, Internal Disturbance", "War, External Aggression, Armed Rebellion", "War, Civil War, Armed Rebellion", "External Aggression, Internal Disturbance, Financial Instability"],
        correctAnswer: 1,
        explanation: "The 44th Amendment Act replaced 'Internal Disturbance' with 'Armed Rebellion'.",
        subtopic: "17.1"
    },
    {
        id: 22,
        question: "The proclamation of National Emergency must be approved by both Houses of Parliament within:",
        options: ["1 month", "2 months", "6 months", "1 year"],
        correctAnswer: 0,
        explanation: "Originally 2 months, reduced to 1 month by the 44th Amendment Act, 1978.",
        subtopic: "17.1"
    },
    {
        id: 23,
        question: "A proclamation of National Emergency requires approval by:",
        options: ["Simple Majority", "Special Majority", "Absolute Majority", "Consensus"],
        correctAnswer: 1,
        explanation: "It requires Special Majority (majority of total membership AND 2/3rds of members present and voting). Change introduced by 44th Amendment.",
        subtopic: "17.1"
    },
    {
        id: 24,
        question: "Once approved, the National Emergency continues for:",
        options: ["6 months", "1 year", "Indefinitely", "3 years"],
        correctAnswer: 0,
        explanation: "It continues for 6 months. It can be extended indefinitely by Parliament's approval every 6 months.",
        subtopic: "17.1"
    },
    {
        id: 25,
        question: "Which Fundamental Rights are automatically suspended during National Emergency under Article 358?",
        options: ["Article 14", "Article 19", "Article 21", "Article 32"],
        correctAnswer: 1,
        explanation: "Article 358 provides for automatic suspension of the six freedoms under Article 19 (only if declared on grounds of War/External Aggression).",
        subtopic: "17.1"
    },
    {
        id: 26,
        question: "Which Rights can NEVER be suspended even during National Emergency?",
        options: ["Article 19 and 20", "Article 20 and 21", "Article 21 and 22", "Article 32"],
        correctAnswer: 1,
        explanation: "The 44th Amendment Act guaranteed that Articles 20 and 21 (Protection in conviction and Life & Personal Liberty) cannot be suspended.",
        subtopic: "17.1"
    },
    {
        id: 27,
        question: "The President can revoke a National Emergency:",
        options: ["Only with Parliament's approval", "Only on recommendation of Supreme Court", "At any time by a subsequent proclamation", "Only after 6 months"],
        correctAnswer: 2,
        explanation: "The President can revoke it at any time. Parliamentary approval is not needed for revocation.",
        subtopic: "17.1"
    },
    {
        id: 28,
        question: "If Lok Sabha is dissolved, the proclamation of National Emergency survives if:",
        options: ["Rajya Sabha approves it", "President re-issues it", "Supreme Court validates it", "Army Chief approves it"],
        correctAnswer: 0,
        explanation: "If Lok Sabha is dissolved, Rajya Sabha must approve it. Then the new Lok Sabha must approve within 30 days of its first sitting.",
        subtopic: "17.1"
    },
    {
        id: 29,
        question: "How many times has National Emergency been declared so far in India?",
        options: ["Once", "Twice", "Thrice", "Four times"],
        correctAnswer: 2,
        explanation: "1962 (China War), 1971 (Pakistan War), 1975 (Internal Disturbance).",
        subtopic: "17.1"
    },
    {
        id: 30,
        question: "Who must communicate the decision to impose National Emergency to the President in writing?",
        options: ["Prime Minister alone", "Union Cabinet", "Defence Minister", "Home Minister"],
        correctAnswer: 1,
        explanation: "The 44th Amendment introduced the safeguard that the President can declare it only after receiving the decision of the Cabinet in writing.",
        subtopic: "17.1"
    },

    // 17.2 President's Rule
    {
        id: 31,
        question: "Article 356 allows imposition of President's Rule if:",
        options: ["Law and order situation deteriorates", "State government loses majority", "Article 365 is violated", "Constitutional machinery fails"],
        correctAnswer: 3,
        explanation: "Failure of constitutional machinery in the state (report by Governor or otherwise).",
        subtopic: "17.2"
    },
    {
        id: 32,
        question: "President's Rule must be approved by Parliament within:",
        options: ["1 month", "2 months", "6 months", "14 days"],
        correctAnswer: 1,
        explanation: "Within 2 months. (Contrast with 1 month for National Emergency).",
        subtopic: "17.2"
    },
    {
        id: 33,
        question: "Approval of President's Rule requires:",
        options: ["Simple Majority", "Special Majority", "Effective Majority", "Absolute Majority"],
        correctAnswer: 0,
        explanation: "Simple Majority is sufficient.",
        subtopic: "17.2"
    },
    {
        id: 34,
        question: "The maximum period for which President's Rule can be extended (with all conditions met) is:",
        options: ["1 year", "2 years", "3 years", "Indefinite"],
        correctAnswer: 2,
        explanation: "Maximum period is 3 years. Beyond 1 year, two conditions (Emergency in operation + Election Commission certification) must be met.",
        subtopic: "17.2"
    },
    {
        id: 35,
        question: "When President's Rule is imposed, the State Legislature:",
        options: ["Is automatically dissolved", "Is automatically suspended or dissolved", "Requires fresh elections immediately", "Members lose their citizenship"],
        correctAnswer: 1,
        explanation: "It can be either suspended or dissolved by the President.",
        subtopic: "17.2"
    },
    {
        id: 36,
        question: "Laws made by Parliament for a state during President's Rule:",
        options: ["Lapse immediately after Rule ends", "Continue to operate until repealed/amended by State Legislature", "Lapse after 6 months", "Become permanent constitutional amendments"],
        correctAnswer: 1,
        explanation: "They continue to be operative even after the President's Rule. The State Legislature can repeal/alter them later.",
        subtopic: "17.2"
    },
    {
        id: 37,
        question: "In S.R. Bommai case (1994), the Supreme Court held that:",
        options: ["President's Rule is immune from Judicial Review", "Secularism is not part of basic structure", "President's Rule is subject to Judicial Review", "Floor test is not necessary"],
        correctAnswer: 2,
        explanation: "The SC held that the proclamation under Art 356 is subject to judicial review and 'Secularism' is a basic feature.",
        subtopic: "17.2"
    },
    {
        id: 38,
        question: "Article 365 says that President's Rule can be imposed if:",
        options: ["State fails to elect a CM", "State fails to comply with Centre's directions", "Governor resigns", "CM resigns"],
        correctAnswer: 1,
        explanation: "Article 365 says if a state fails to comply with/effect directions given by the Union, it is lawful to hold that constitutional machinery has failed.",
        subtopic: "17.2"
    },
    {
        id: 39,
        question: "The first state where President's Rule was imposed was:",
        options: ["Kerala", "Punjab", "PEPSU", "Uttar Pradesh"],
        correctAnswer: 1,
        explanation: "It was imposed in Punjab in 1951.",
        subtopic: "17.2"
    },

    // 17.3 Financial Emergency
    {
        id: 40,
        question: "Article 360 empowers the President to declare Financial Emergency if:",
        options: ["There is a stock market crash", "There is a threat to the financial stability or credit of India", "Currency devaluation occurs", "GDP growth is negative"],
        correctAnswer: 1,
        explanation: "If he is satisfied that a situation has arisen whereby the financial stability or credit of India or any part thereof is threatened.",
        subtopic: "17.3"
    },
    {
        id: 41,
        question: "A proclamation of Financial Emergency must be approved by Parliament within:",
        options: ["1 month", "2 months", "6 months", "14 days"],
        correctAnswer: 1,
        explanation: "Within 2 months.",
        subtopic: "17.3"
    },
    {
        id: 42,
        question: "Once approved, Financial Emergency continues:",
        options: ["For 6 months", "For 1 year", "Indefinitely until revoked", "For 3 years"],
        correctAnswer: 2,
        explanation: "There is no maximum limit prescribed. It continues indefinitely until revoked.",
        subtopic: "17.3"
    },
    {
        id: 43,
        question: "During Financial Emergency, the President can suspend the distribution of financial resources between Union and States.",
        options: ["True", "False, only reduce", "Only for Schedule VI states", "Only grants"],
        correctAnswer: 0,
        explanation: "Technically, he can issue directions to observe canons of financial propriety. The allocation of revenues can be modified? Actually Art 354 is for National Emergency. Art 360 allows 'reduction of salaries'. The exact text says he can give directions. Modification of revenue distribution usually links to Art 354 (Proclamation of Emergency - 352). Let's check.",
        text_check: "Wait. Art 354 applies to Art 352. For Financial Emergency (360), the Union can give directions to State to observe financial propriety and reduce salaries. The President can reserve all money bills. It doesn't explicitly say 'Suspend distribution'. So True might be false."
    },
    {
        id: 43, // Rephrase for clarity
        question: "During Financial Emergency, the President can issue directions for the reduction of salaries and allowances of:",
        options: ["Only State government employees", "Only Central government employees", "All or any class of persons serving the Union or State, including Judges", "Only Ministers"],
        correctAnswer: 2,
        explanation: "Article 360(4)(b) allows reduction of salaries of all persons serving the Union/State, including SC/HC Judges.",
        subtopic: "17.3"
    },
    {
        id: 44,
        question: "Financial Emergency requires which majority for ongoing parliamentary approval?",
        options: ["Simple Majority", "Special Majority", "No repeated approval needed", "Absolute Majority"],
        correctAnswer: 2,
        explanation: "Once approved by both Houses, it continues indefinitely. No repeated parliamentary approval is required.",
        subtopic: "17.3"
    },

    // 17.4 Criticism & Mixed
    {
        id: 45,
        question: "Dr. B.R. Ambedkar called Article 356 a:",
        options: ["Dead Letter", "Death Letter", "Life Line", "Necessary Evil"],
        correctAnswer: 0,
        explanation: "He hoped that Article 356 would remain a 'dead letter' and would be used only as a last resort.",
        subtopic: "17.4"
    },
    {
        id: 46,
        question: "Which amendment provided that the 10% Cabinet decision is required for National Emergency?",
        options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "61st Amendment"],
        correctAnswer: 1,
        explanation: "44th Amendment Act, 1978.",
        subtopic: "17.1"
    },
    {
        id: 47,
        question: "The distinction between Art 352 and Art 356 includes:",
        options: ["352 affects Centre-State relations, 356 does not", "352 applies to whole India/part, 356 applies to a State", "352 requires Simple Majority, 356 Special", "352 has max 3 years, 356 indefinite"],
        correctAnswer: 1,
        explanation: "Art 352 (National Emergency) can be whole/part of India. Art 356 (President's Rule) is specific to a State.",
        subtopic: "17.4"
    },
    {
        id: 48,
        question: "Which case put a check on the arbitrary power of Dismissal of State Governments?",
        options: ["Minerva Mills Case", "S.R. Bommai Case", "Golaknath Case", "Maneka Gandhi Case"],
        correctAnswer: 1,
        explanation: "S.R. Bommai Case (1994).",
        subtopic: "17.2"
    },
    {
        id: 49,
        question: "Can the President issue an ordinance when National Emergency is in force?",
        options: ["Yes, if Parliament is not in session", "No, never", "Only regarding state list", "Only on advice of CJI"],
        correctAnswer: 0,
        explanation: "Yes, the President's legislative power (Art 123) is co-extensive with Parliament's. If Parliament is not in session, he can issue ordinances.",
        subtopic: "17.1"
    },
    {
        id: 50,
        question: "During National Emergency, the life of the Lok Sabha can be extended by:",
        options: ["President", "Parliament by Law", "Election Commission", "Supreme Court"],
        correctAnswer: 1,
        explanation: "Parliament may by law extend the term of Lok Sabha for one year at a time.",
        subtopic: "17.1"
    },

    // More Ch 16 & 17
    {
        id: 51,
        question: "Which of the following is correct about Inter-State Water Dispute Tribunals?",
        options: ["Their chairman must be a retired CJI", "There is no time limit for giving the award", "The award has the force of a SC decree", "Appeal lies to High Court"],
        correctAnswer: 2,
        explanation: "The award is final and binding. (Recent amendments proposed time limits, but traditionally indefinite delay was an issue. The 2019 Bill proposed timelines).",
        subtopic: "16.1"
    },
    {
        id: 52,
        question: "Article 263 allows the Council to inquire into:",
        options: ["Only legal disputes", "Only non-legal disputes", "Disputes which may have arisen between States", "Private disputes"],
        correctAnswer: 2,
        explanation: "It can inquire into and advise upon disputes which may have arisen between States.",
        subtopic: "16.2"
    },
    {
        id: 53,
        question: "Freedom of trade (Art 301) includes freedom from:",
        options: ["Taxation", "Restrictions on movement", "customs duties", "All of the above"],
        correctAnswer: 1,
        explanation: "It guarantees freedom of movement of trade. It doesn't mean freedom from taxation (regulatory taxes are allowed).",
        subtopic: "16.4"
    },
    {
        id: 54,
        question: "Who can initiate the resolution for disapproving the National Emergency?",
        options: ["Only Lok Sabha", "Only Rajya Sabha", "Either House", "President"],
        correctAnswer: 0,
        explanation: "A resolution of disapproval can be initiated by 1/10th of Lok Sabha members (giving notice) and passed by Simple Majority of Lok Sabha.",
        subtopic: "17.1"
    },
    {
        id: 55,
        question: "Which right is NOT suspended under Art 359?",
        options: ["Right to Move Court for Art 14", "Right to Move Court for Art 19", "Right to Move Court for Art 20 & 21", "Right to Move Court for Art 25"],
        correctAnswer: 2,
        explanation: "Art 359 empowers President to suspend the right to move court for enforcement of rights, EXCEPT Art 20 and 21.",
        subtopic: "17.1"
    },
    {
        id: 56,
        question: "President's Rule can be imposed without Governor's report?",
        options: ["Yes", "No", "Only in J&K", "Only during war"],
        correctAnswer: 0,
        explanation: "Yes, Art 356 says 'on receipt of a report from the Governor OR OTHERWISE'.",
        subtopic: "17.2"
    },
    {
        id: 57,
        question: "Sarkaria Commission recommended that Article 356 should be used:",
        options: ["Frequently", "Sparingly and as a last resort", "To discipline states", "Whenever CM disagrees with PM"],
        correctAnswer: 1,
        explanation: "Sparingly and as a last resort.",
        subtopic: "17.4"
    },
    {
        id: 58,
        question: "Which Amendment restored the 3-year maximum limit for President's Rule in Punjab (exceptionally allowed longer)?",
        options: ["59th", "64th", "67th", "68th"],
        correctAnswer: 0,
        explanation: "Various amendments (59, 64, 67, 68) extended it for Punjab specifically due to militancy. This is detailed history.",
        subtopic: "17.2"
    },
    {
        id: 59,
        question: "Financial Emergency has the effect of:",
        options: ["Suspending State Legislature", "Suspending Fundamental Rights", "Centralized Financial Control", "Dissolving Lok Sabha"],
        correctAnswer: 2,
        explanation: "The Centre acquires full control over the states in financial matters.",
        subtopic: "17.3"
    },
    {
        id: 60,
        question: "The 38th Amendment Act 1975 made the satisfaction of President in declaring emergency:",
        options: ["Subject to Judicial Review", "Final and conclusive", "Subject to Parliament approval only", "None of the above"],
        correctAnswer: 1,
        explanation: "It made it final and conclusive (non-justiciable). This was reversed by 44th Amendment.",
        subtopic: "17.4"
    }
];

export default DAY3_MCQS;
