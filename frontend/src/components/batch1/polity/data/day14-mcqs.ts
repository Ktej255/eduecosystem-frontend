import type { MCQ } from './mcq-utils';

export const DAY14_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 14)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "The Constitution of India divides Centre-State relations into three parts. Which of the following is NOT one of those parts?",
        options: [
            "Legislative relations",
            "Administrative relations",
            "Judicial relations",
            "Financial relations"
        ],
        correctAnswer: 2, // C
        explanation: "The Constitution divides Centre-State relations into Legislative, Administrative, and Financial relations. There is no division of judicial powers as India has an integrated judicial system.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 2,
        question: "Which Part of the Constitution deals with the Legislative Relations between the Centre and the states (Articles 245 to 255)?",
        options: [
            "Part X",
            "Part XI",
            "Part XII",
            "Part XIII"
        ],
        correctAnswer: 1, // B
        explanation: "Articles 245 to 255 in Part XI of the Constitution deal with the legislative relations between the Centre and the states.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 3,
        question: "Regarding the 'Territorial Extent' of Central and state legislation, what is the geographical scope of laws made by the Parliament?",
        options: [
            "They apply only to Union Territories.",
            "They can apply to the whole or any part of the territory of India.",
            "They apply only outside the territory of India (extra-territorial laws).",
            "They apply only to states that have ratified them."
        ],
        correctAnswer: 1, // B
        explanation: "The Parliament can make laws for the whole or any part of the territory of India. The territory of India includes the states, the union territories, and any other area for the time being included in the territory of India.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 4,
        question: "Which legislative body in India alone possesses the power to make 'extra-territorial legislation' (laws applicable to Indian citizens and their property anywhere in the world)?",
        options: [
            "State Legislatures",
            "The Supreme Court",
            "The Parliament",
            "The Inter-State Council"
        ],
        correctAnswer: 2, // C
        explanation: "The Parliament alone can make 'extra-territorial legislation'. Thus, the laws of the Parliament are also applicable to the Indian citizens and their property in any part of the world.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 5,
        question: "Though Parliament has pan-India jurisdiction, the President can make regulations for the peace, progress, and good government of five specific Union Territories, which have the same force as acts of Parliament. Which of the following is NOT one of those UTs?",
        options: [
            "Andaman and Nicobar Islands",
            "Lakshadweep",
            "Delhi",
            "Ladakh"
        ],
        correctAnswer: 2, // C
        explanation: "The President makes regulations for five UTs: Andaman and Nicobar Islands, Lakshadweep, Dadra and Nagar Haveli, Daman and Diu, and Ladakh. Delhi is a specifically governed UT with its own Legislative Assembly under Art 239AA.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 6,
        question: "In the Seventh Schedule of the Constitution, which List gives exclusive power to the Parliament to make laws? (It currently has 98 subjects).",
        options: [
            "State List (List II)",
            "Concurrent List (List III)",
            "Union List (List I)",
            "Residuary List"
        ],
        correctAnswer: 2, // C
        explanation: "The Parliament has exclusive powers to make laws with respect to any of the matters enumerated in the Union List (List I).",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 7,
        question: "Which of the following subjects is correctly matched with its respective List in the Seventh Schedule?",
        options: [
            "Defense - State List",
            "Police - Union List",
            "Education - Concurrent List",
            "Banking - State List"
        ],
        correctAnswer: 2, // C
        explanation: "Education is in the Concurrent List (shifted from State List by the 42nd Amendment). Defense and Banking are Union List subjects. Police is a key State List subject.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 8,
        question: "The power to make laws on 'Residuary Subjects' (matters not enumerated in any of the three lists) is vested in:",
        options: [
            "The State Legislatures",
            "The Parliament",
            "The Supreme Court",
            "The President directly"
        ],
        correctAnswer: 1, // B
        explanation: "The Parliament has the power to make laws with respect to any matter for any part of the territory of India not enumerated in any of the three Lists (Article 248). This is called the residuary legislative power.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 9,
        question: "In case of a conflict or overlapping between the Union List and the State List, which list prevails?",
        options: [
            "The State List",
            "The Union List",
            "The Supreme Court decides on a case-by-case basis",
            "The matter is moved to the Concurrent List"
        ],
        correctAnswer: 1, // B
        explanation: "In case of overlapping between the Union List and the State List, the former should prevail. The Union List always secures predominance over the State List.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 10,
        question: "According to Article 254, what happens if there is a conflict (repugnancy) between a Central law and a State law regarding a subject in the Concurrent List?",
        options: [
            "The State law prevails immediately.",
            "The Central law prevails, and the State law is void to the extent of repugnancy.",
            "Both laws are struck down by the courts.",
            "The President suspends the subject for an entire year."
        ],
        correctAnswer: 1, // B
        explanation: "In case of a conflict between the Central law and the state law on a subject enumerated in the Concurrent List, the Central law prevails over the state law.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 11,
        question: "Under Article 249, Parliament can make laws on a subject in the State List if a particular constitutional body passes a resolution declaring it is 'necessary in the national interest'. Which body is this?",
        options: [
            "The Lok Sabha",
            "The Legislative Assemblies of at least half the states",
            "The Rajya Sabha",
            "The Inter-State Council"
        ],
        correctAnswer: 2, // C
        explanation: "If the Rajya Sabha declares that it is necessary in the national interest that Parliament should make laws with respect to a matter in the State List, then the Parliament becomes competent to make laws on that matter (Article 249).",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 12,
        question: "When a National Emergency (Article 352) is in operation, what happens to the legislative powers concerning the State List?",
        options: [
            "The State Legislatures are permanently dissolved.",
            "State Legislatures retain exclusive power, Parliament cannot interfere.",
            "Parliament acquires the power to legislate with respect to ANY matter in the State List for the entire country.",
            "Only the President can legislate via ordinance; Parliament is suspended."
        ],
        correctAnswer: 2, // C
        explanation: "During a national emergency, Parliament acquires the power to legislate with respect to matters in the State List. The states' power to legislate is not suspended, but there is concurrent jurisdiction, and parliamentary law prevails in case of conflict.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 13,
        question: "When does the Parliament acquire the power to legislate on a State List subject during 'President's Rule' (Article 356)?",
        options: [
            "Never; state laws remain valid.",
            "When the Rajya Sabha passes a resolution.",
            "When the President issues an order declaring that the powers of the state legislature shall be exercised by or under the authority of Parliament.",
            "Only after the Supreme Court approves the takeover."
        ],
        correctAnswer: 2, // C
        explanation: "When President's rule is imposed in a state, the President can declare that the powers of the state legislature are to be exercised by the Parliament. Parliament then makes laws on State List subjects for that state.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 14,
        question: "Part XI covers Administrative Relations under Articles 256 to 263. A key principle is that the executive power of every state must be exercised so as to ensure compliance with:",
        options: [
            "The orders of the local High Court.",
            "The laws made by the Parliament and any existing laws which apply in that state.",
            "The directives of neighboring states.",
            "The demands of the dominant political party."
        ],
        correctAnswer: 1, // B
        explanation: "Article 256 states that the executive power of every state is to be exercised in such a way as to ensure compliance with the laws made by the Parliament.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 15,
        question: "Under Article 365, what is the consequence if a state fails to comply with or give effect to any administrative directions given by the Centre?",
        options: [
            "The State Chief Minister is fined.",
            "The State is excluded from national elections.",
            "It is lawful for the President to hold that a situation has arisen in which the government of the state cannot be carried on in accordance with the provisions of the Constitution (leading to President's Rule).",
            "The Centre must negotiate a treaty with the state."
        ],
        correctAnswer: 2, // C
        explanation: "Article 365 says that where any state has failed to comply with any directions given by the Centre, it will be lawful for the President to hold that a situation has arisen in which the government of the state cannot be carried on in accordance with the provisions of the Constitution (meaning Article 356 can be applied).",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 16,
        question: "The Centre can give directions to the states regarding the construction and maintenance of means of communication declared to be of 'national or military importance'. Which other specific infrastructure can the Centre direct states to protect?",
        options: [
            "State highways only",
            "Private internet networks",
            "The railways within the state",
            "Local municipal water supplies"
        ],
        correctAnswer: 2, // C
        explanation: "The Centre can direct states regarding the measures to be taken for the protection of the railways within the state.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 17,
        question: "Which of the following bodies resolves disputes regarding the use, distribution, and control of waters of any inter-state river or river valley?",
        options: [
            "The Supreme Court exclusively",
            "The National Green Tribunal",
            "Parliament can legally provide for the adjudication of such disputes, usually by creating an ad hoc Tribunal.",
            "The Inter-State Council"
        ],
        correctAnswer: 2, // C
        explanation: "Article 262 empowers Parliament to provide for the adjudication of any dispute or complaint with respect to the use, distribution and control of waters of any inter-state river or river valley. Parliament enacted the Inter-State Water Disputes Act (1956) creating Tribunals.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 18,
        question: "Under Article 263, who has the constitutional authority to establish an Inter-State Council if it appears that the public interests would be served by its establishment?",
        options: [
            "The Prime Minister",
            "The Parliament",
            "The Chief Justice of India",
            "The President"
        ],
        correctAnswer: 3, // D
        explanation: "Article 263 contemplates the establishment of an Inter-State Council to effect coordination between the states and between Centre and states. The President can establish such a council if at any time it appears to him that the public interest would be served by its establishment.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 19,
        question: "The 'All-India Services' are common to both the Centre and the States. Which are the three currently existing All-India Services?",
        options: [
            "IAS, IPS, Indian Revenue Service (IRS)",
            "IAS, IPS, Indian Foreign Service (IFS)",
            "IAS, IPS, Indian Forest Service (IFS)",
            "IAS, Indian Railway Traffic Service (IRTS), IPS"
        ],
        correctAnswer: 2, // C
        explanation: "There are currently three all-India services: Indian Administrative Service (IAS), Indian Police Service (IPS), and Indian Forest Service (IFS). (Note: Indian Foreign Service is a Central service, not an All-India service).",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 20,
        question: "While Members of the All-India Services serve in state administrations, who possesses the 'ultimate control' over them (e.g., the power to dismiss or remove them)?",
        options: [
            "The State Chief Minister",
            "The State Public Service Commission",
            "The Central Government",
            "The Parliament"
        ],
        correctAnswer: 2, // C
        explanation: "The members of these services are recruited and trained by the Centre but are assigned to different states for work. The ultimate control lies with the Central government while immediate control vests with the state governments.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 21,
        question: "State Public Service Commissions conduct exams for state civil services. However, who appoints and who removes the Chairman and members of a State Public Service Commission?",
        options: [
            "Appointed by the Governor, removed by the Governor.",
            "Appointed by the President, removed by the President.",
            "Appointed by the Governor, but removed only by the President.",
            "Appointed by the Chief Minister, removed by the High Court."
        ],
        correctAnswer: 2, // C
        explanation: "The Chairman and members of a state public service commission are appointed by the governor of the state, but they can be removed only by the President (not the governor).",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 22,
        question: "During a National Emergency (Article 352), what directive power does the Centre acquire over the States' administrative machinery?",
        options: [
            "The Centre can only direct states regarding external affairs.",
            "The Centre becomes entitled to give executive directions to a state on 'any' matter.",
            "The Centre has no administrative power; only legislative.",
            "The states become completely independent administratively to handle the emergency."
        ],
        correctAnswer: 1, // B
        explanation: "During a national emergency, the Centre becomes entitled to give executive directions to a state on 'any' matter. Thus, state governments are brought under the complete control of the Centre, though they are not suspended.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 23,
        question: "Which Part of the Constitution deals with Centre-State 'Financial Relations' (Articles 268 to 293)?",
        options: [
            "Part X",
            "Part XI",
            "Part XII",
            "Part XIV"
        ],
        correctAnswer: 2, // C
        explanation: "Articles 268 to 293 in Part XII of the Constitution deal with Centre-state financial relations.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 24,
        question: "Regarding the allocation of taxing powers, who has the exclusive power to levy taxes on subjects enumerated in the Union List?",
        options: [
            "The State Legislature",
            "The Finance Commission",
            "The Parliament",
            "Municipal Corporations"
        ],
        correctAnswer: 2, // C
        explanation: "The Parliament has exclusive power to levy taxes on subjects enumerated in the Union List (e.g., income tax, customs, corporation tax).",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 25,
        question: "Article 280 provides for a 'Finance Commission'. Who constitutes this commission, and how often?",
        options: [
            "The Prime Minister, every year.",
            "The Parliament, every 10 years.",
            "The President of India, every fifth year or at such earlier time as he considers necessary.",
            "The Supreme Court, when disputes arise."
        ],
        correctAnswer: 2, // C
        explanation: "Article 280 provides for a Finance Commission as a quasi-judicial body. It is constituted by the President of India every fifth year or at such earlier time as he considers necessary.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 26,
        question: "What is the primary function of the Finance Commission regarding Central and State finances?",
        options: [
            "To collect taxes from citizens directly.",
            "To audit the accounts of the central and state governments.",
            "To make recommendations to the President regarding the distribution of net proceeds of taxes between the Centre and the states, and the allocation between the states of the respective shares of such proceeds.",
            "To print currency notes."
        ],
        correctAnswer: 2, // C
        explanation: "The Finance Commission is required to make recommendations regarding the distribution of the net proceeds of taxes to be shared between the Centre and the states, and the allocation between the states of the respective shares of such proceeds.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 27,
        question: "Besides sharing taxes, the Constitution provides for 'Grants-in-Aid' to the states from the Central resources. Statutory grants (Article 275) are given out of which fund?",
        options: [
            "The Contingency Fund of India",
            "The Consolidated Fund of India",
            "The Public Account of India",
            "The Prime Minister's Relief Fund"
        ],
        correctAnswer: 1, // B
        explanation: "Article 275 empowers the Parliament to make grants to the states which are in need of financial assistance. These sums are charged on the Consolidated Fund of India every year.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 28,
        question: "States can borrow money within India. However, under what condition must a State obtain the explicit 'consent' of the Central Government before raising any new loan?",
        options: [
            "If the loan amount exceeds 1 Crore rupees.",
            "If the loan is raised from an international bank.",
            "If there is still outstanding any part of a loan made to the State by the Centre, or in respect of which the Centre has given a guarantee.",
            "States never need Central consent to borrow internally."
        ],
        correctAnswer: 2, // C
        explanation: "A state cannot raise any loan without the consent of the Centre, if there is still outstanding any part of a loan made to the state by the Centre or in respect of which a guarantee has been given by the Centre. (In practice, all states have debt to the Centre, meaning they always need consent).",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 29,
        question: "During a 'Financial Emergency' (Article 360), what power does the Centre gain over State budgets in particular?",
        options: [
            "The Centre can abolish state taxes.",
            "The President can mandate that all money bills passed by the state legislature be reserved for his consideration.",
            "The Centre takes over the collection of all local taxes.",
            "The state budget is voted on by the Lok Sabha instead of the State Assembly."
        ],
        correctAnswer: 1, // B
        explanation: "During a Financial Emergency, the President can give directions requiring all money bills or other financial bills to be reserved for the consideration of the President after they are passed by the state legislature.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    },
    {
        id: 30,
        question: "In 1983, the Central Government appointed a major three-member commission to thoroughly examine the working of Centre-State relations. What was the name of this famous commission?",
        options: [
            "Rajamannar Committee",
            "Kothari Commission",
            "Sarkaria Commission",
            "Punchhi Commission"
        ],
        correctAnswer: 2, // C
        explanation: "In 1983, the Central government appointed a three-member Commission on Centre-state relations under the chairmanship of R.S. Sarkaria, a retired judge of the Supreme Court.",
        level: "Easy", topic: "Centre-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Centre-State Relations" }
    }
];
