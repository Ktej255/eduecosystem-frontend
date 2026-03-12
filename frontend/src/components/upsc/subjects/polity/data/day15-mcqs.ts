import type { MCQ } from './mcq-utils';

export const DAY15_MCQS: MCQ[] = [
    // ----------------------------------------------------------------------
    // LEVEL 1: EASY (The Text-Book Stickler - Strictly Chapter 15)
    // ----------------------------------------------------------------------
    {
        id: 1,
        question: "To ensure harmony among the states, the Constitution makes provisions regarding 'Inter-State Relations'. Which of the following is NOT one of the primary mechanisms provided in the Constitution for this purpose?",
        options: [
            "Adjudication of inter-state water disputes.",
            "Coordination through Inter-State Councils.",
            "Mutual recognition of public acts, records, and judicial proceedings.",
            "Establishment of a permanent Federal Police Force."
        ],
        correctAnswer: 3, // D
        explanation: "The Constitution provides for water dispute adjudication (Art 262), Inter-State Councils (Art 263), mutual recognition of public acts (Art 261), and freedom of inter-state trade (Art 301). It does not provide for a permanent Federal Police Force to manage inter-state relations.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 2,
        question: "Which Article of the Constitution deals with the adjudication of disputes relating to waters of inter-state rivers or river valleys?",
        options: [
            "Article 131",
            "Article 262",
            "Article 263",
            "Article 356"
        ],
        correctAnswer: 1, // B
        explanation: "Article 262 of the Constitution provides for the adjudication of inter-state water disputes.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 3,
        question: "Under Article 262, what significant power is granted to the Parliament regarding the jurisdiction of courts over inter-state water disputes?",
        options: [
            "Parliament can mandate that only the Supreme Court hears these cases.",
            "Parliament may by law provide that neither the Supreme Court nor any other court shall exercise jurisdiction in respect of any such dispute or complaint.",
            "Parliament can allow state High Courts to issue final verdicts on these rivers.",
            "Parliament can permanently transfer the river to Union control."
        ],
        correctAnswer: 1, // B
        explanation: "Article 262(2) states that Parliament may by law provide that neither the Supreme Court nor any other court shall exercise jurisdiction in respect of any such dispute or complaint relating to inter-state rivers.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 4,
        question: "To implement the provisions of Article 262, Parliament enacted two major laws. One of them is the Inter-State Water Disputes Act (1956). What is the other?",
        options: [
            "The National River Conservation Act (1995)",
            "The River Boards Act (1956)",
            "The Inter-State Council Act (1990)",
            "The Water Prevention and Control of Pollution Act (1974)"
        ],
        correctAnswer: 1, // B
        explanation: "Under Article 262, Parliament has enacted two laws: the River Boards Act (1956) and the Inter-State Water Disputes Act (1956).",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 5,
        question: "According to the Inter-State Water Disputes Act (1956), who is empowered to set up an ad hoc tribunal for the adjudication of a dispute between two or more states in relation to the waters of an inter-state river?",
        options: [
            "The Supreme Court of India",
            "The Central Government",
            "The Inter-State Council",
            "The President directly"
        ],
        correctAnswer: 1, // B
        explanation: "The Inter-State Water Disputes Act empowers the Central government to set up an ad hoc tribunal for the adjudication of a dispute between two or more states.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 6,
        question: "Once an Inter-State Water Dispute Tribunal gives its decision, what is its legal standing?",
        options: [
            "It is merely advisory and states can ignore it.",
            "It must be ratified by the Parliament to become binding.",
            "The decision of the tribunal is final and binding on the parties to the dispute.",
            "It can be instantly appealed to the local High Court."
        ],
        correctAnswer: 2, // C
        explanation: "The Inter-State Water Disputes Act states that the decision of the tribunal is final and binding on the parties to the dispute.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 7,
        question: "Which states are involved in the famous, long-standing Cauvery Water Dispute?",
        options: [
            "Maharashtra, Karnataka, and Andhra Pradesh",
            "Punjab, Haryana, and Rajasthan",
            "Karnataka, Kerala, Tamil Nadu, and Puducherry",
            "Goa, Karnataka, and Maharashtra"
        ],
        correctAnswer: 2, // C
        explanation: "The Cauvery Water Disputes Tribunal (set up in 1990) involves the states of Karnataka, Kerala, Tamil Nadu, and the UT of Puducherry.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 8,
        question: "Article 263 contemplates the establishment of an Inter-State Council. Who is authorized to establish such a council if it appears that public interests would be served by it?",
        options: [
            "The Prime Minister",
            "The Parliament",
            "The President",
            "The Chief Justice of India"
        ],
        correctAnswer: 2, // C
        explanation: "Article 263 states that the President can establish an Inter-State Council if at any time it appears to him that the public interest would be served by its establishment.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 9,
        question: "The Inter-State Council was formally established in 1990 based on the strong recommendation of which commission?",
        options: [
            "Sarkaria Commission",
            "Punchhi Commission",
            "First Administrative Reforms Commission",
            "Rajamannar Committee"
        ],
        correctAnswer: 0, // A
        explanation: "The Sarkaria Commission on Centre-State Relations (1983–88) made a strong case for the establishment of a permanent Inter-State Council. The VP Singh government established it in 1990.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 10,
        question: "Who is the Chairman of the Inter-State Council established under Article 263?",
        options: [
            "The President",
            "The Union Home Minister",
            "The Prime Minister",
            "A rotating Chief Minister"
        ],
        correctAnswer: 2, // C
        explanation: "The Prime Minister is the Chairman of the Inter-State Council.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 11,
        question: "What is the primary nature of the function of the Inter-State Council according to Article 263?",
        options: [
            "It is a legislative body that can pass laws binding on states.",
            "It is a judicial body that gives final verdicts on all state disputes.",
            "Its function to enquire and advise upon inter-state disputes is complementary to the Supreme Court's jurisdiction under Article 131, meaning it is an advisory body.",
            "It is a financial body that distributes tax revenue."
        ],
        correctAnswer: 2, // C
        explanation: "The Council's function to enquire and advise upon inter-state disputes is complementary to the Supreme Court’s jurisdiction under Article 131. Unlike the court, the Council’s function is advisory and not binding.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 12,
        question: "Under the States Reorganisation Act of 1956, the country was divided into five zones, and a 'Zonal Council' was provided for each. Are Zonal Councils constitutional or statutory bodies?",
        options: [
            "They are constitutional bodies created directly by Article 263.",
            "They are statutory bodies created by an Act of Parliament.",
            "They are executive bodies created by a Prime Ministerial decree.",
            "They are judicial bodies created by the Supreme Court."
        ],
        correctAnswer: 1, // B
        explanation: "The Zonal Councils are statutory (and not the constitutional) bodies. They are established by an Act of the Parliament, that is, States Reorganisation Act of 1956.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 13,
        question: "Who acts as the common chairman of all the five Zonal Councils (Northern, Central, Eastern, Western, and Southern)?",
        options: [
            "The Prime Minister",
            "The President",
            "The Union Home Minister",
            "The Vice-President"
        ],
        correctAnswer: 2, // C
        explanation: "The Union home minister is the common chairman of the five Zonal Councils.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 14,
        question: "In addition to the five Zonal Councils created in 1956, a separate North-Eastern Council was created later. By which act was it created?",
        options: [
            "The States Reorganisation Act, 1956 (Amendment)",
            "The North-Eastern Council Act, 1971",
            "The Assam Reorganisation Act, 1969",
            "The 7th Constitutional Amendment Act, 1956"
        ],
        correctAnswer: 1, // B
        explanation: "In addition to the above Zonal Councils, a North-Eastern Council was created by a separate Act of Parliament—the North-Eastern Council Act of 1971.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 15,
        question: "Which part of the Constitution guarantees freedom of trade, commerce, and intercourse throughout the territory of India (Articles 301 to 307)?",
        options: [
            "Part XI",
            "Part XII",
            "Part XIII",
            "Part XIV"
        ],
        correctAnswer: 2, // C
        explanation: "Articles 301 to 307 in Part XIII of the Constitution deal with the trade, commerce and intercourse within the territory of India.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 16,
        question: "Article 301 declares that trade, commerce, and intercourse throughout the territory of India shall be free. However, this freedom is not absolute. Who has the power to impose restrictions on this freedom in the 'public interest' under Article 302?",
        options: [
            "State Legislatures alone",
            "The Parliament",
            "The Supreme Court",
            "The Zonal Councils"
        ],
        correctAnswer: 1, // B
        explanation: "Article 302: Parliament can impose restrictions on the freedom of trade, commerce or intercourse between the states or within a state in public interest.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 17,
        question: "Under Article 304, a State legislature can impose reasonable restrictions on the freedom of trade, commerce or intercourse with that state in the public interest. However, what is the prerequisite for introducing such a bill in the state legislature?",
        options: [
            "Consent of the adjacent states.",
            "Previous sanction of the President.",
            "Approval from the Inter-State Council.",
            "A referendum in the state."
        ],
        correctAnswer: 1, // B
        explanation: "A bill for this purpose can be introduced in the state legislature only with the previous sanction of the president (Article 304).",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 18,
        question: "To prevent discrimination, Article 303 prohibits both the Parliament and the State Legislatures from making laws that give preference to one state over another regarding trade and commerce. What is the only exception allowing Parliament to discriminate?",
        options: [
            "If a state is politically favored.",
            "In the case of dealing with a situation arising from scarcity of goods in any part of India.",
            "If the Finance Commission recommends it.",
            "There are absolutely no exceptions."
        ],
        correctAnswer: 1, // B
        explanation: "Parliament can make discrimination or give preference to one state over another in the case of dealing with a situation arising from a scarcity of goods in any part of India (Article 303).",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 19,
        question: "Can a State Legislature impose taxes on goods imported from other States or Union Territories?",
        options: [
            "No, states cannot tax incoming goods under any circumstances.",
            "Yes, provided the tax does not discriminate between goods imported from other states and goods manufactured or produced in that state.",
            "Yes, they can tax imported goods at a much higher rate to protect local industries.",
            "Yes, but only if the Central Government collects the tax."
        ],
        correctAnswer: 1, // B
        explanation: "The legislature of a state can impose on goods imported from other states any tax to which similar goods manufactured in that state are subject. This is to ensure no discrimination against imported goods (Article 304).",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 20,
        question: "The Constitution provides for 'Full Faith and Credit'. What does this clause (Article 261) mandate?",
        options: [
            "That every state must trust the financial promises of the Centre.",
            "That Full faith and credit shall be given throughout the territory of India to public acts, records and judicial proceedings of the Union and of every State.",
            "That states must give loans to each other without interest.",
            "That the public must have blind faith in the government."
        ],
        correctAnswer: 1, // B
        explanation: "Article 261 declares that 'Full faith and credit shall be given throughout the territory of India to public acts, records and judicial proceedings of the Union and of every State.'",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 21,
        question: "Under the 'Full Faith and Credit' clause, what is the rule regarding final judgments and orders delivered by civil courts in any part of India?",
        options: [
            "They are only enforceable in the state where they were issued.",
            "They must be re-tried if enforced in another state.",
            "They are capable of execution anywhere within India (without the necessity of a fresh suit).",
            "They only apply to criminal cases, not civil cases."
        ],
        correctAnswer: 2, // C
        explanation: "Final judgments and orders delivered or passed by civil courts in any part of India are capable of execution anywhere within India (without the necessity of a fresh suit upon the judgment).",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 22,
        question: "What does the term 'Public acts' mean in the context of the 'Full Faith and Credit' clause?",
        options: [
            "Only the actions of the President.",
            "Charitable acts done by NGOs.",
            "Both legislative and executive acts of the Government.",
            "Only the judgments of the Supreme Court."
        ],
        correctAnswer: 2, // C
        explanation: "The term 'public acts' includes both legislative and executive acts of the government.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 23,
        question: "While Article 301 guarantees freedom of trade and commerce, can the national or state governments create monopolies in a particular trade or business?",
        options: [
            "No, monopolies are strictly unconstitutional.",
            "Yes, but only the Central Government can create monopolies.",
            "Yes, the freedom under Article 301 is subject to the nationalization laws (creating a monopoly for the Centre or State in a given sector).",
            "Yes, but only for foreign companies."
        ],
        correctAnswer: 2, // C
        explanation: "Article 305 says the freedom under Article 301 is subject to the nationalisation laws. Parliament or a state legislature can make laws for carrying on any trade, business, industry or service by the government to the exclusion of citizens (creating a monopoly).",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Knowledge", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 24,
        question: "Under Article 307, Parliament can appoint an authority to carry out the purposes of provisions relating to freedom of trade and commerce (Articles 301 to 304). Has Parliament appointed any such authority to date?",
        options: [
            "Yes, the Inter-State Trade Commission.",
            "Yes, the Competition Commission of India.",
            "Yes, the Ministry of Commerce directly.",
            "No such authority has been appointed so far."
        ],
        correctAnswer: 3, // D
        explanation: "Article 307 empowers Parliament to appoint such authority. However, no such authority has been appointed so far.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 25,
        question: "The Inter-State Council comprises several members. Which of the following is NOT a member of the Inter-State Council?",
        options: [
            "The Prime Minister (Chairman)",
            "Chief Ministers of all states",
            "Six Central Cabinet Ministers (nominated by PM)",
            "The Chief Justice of India"
        ],
        correctAnswer: 3, // D
        explanation: "The Inter-State Council does not include the Chief Justice of India. It consists of the PM, all CMs, Administrators of UTs, and six Central Cabinet Ministers (including the Home Minister).",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 26,
        question: "A Standing Committee of the Inter-State Council was set up in 1996 for continuous consultation. Who is the Chairman of this Standing Committee?",
        options: [
            "The Prime Minister",
            "The Union Home Minister",
            "The Finance Minister",
            "A Chief Minister"
        ],
        correctAnswer: 1, // B
        explanation: "The Standing Committee of the Inter-State Council is chaired by the Union Home Minister. (It also includes 5 Union Cabinet Ministers and 9 Chief Ministers).",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 27,
        question: "How many active Zonal Councils are currently functioning in India under the 1956 Act?",
        options: [
            "4",
            "5",
            "6",
            "7"
        ],
        correctAnswer: 1, // B
        explanation: "There are 5 Zonal Councils (Northern, Central, Eastern, Western, and Southern) created by the States Reorganisation Act of 1956.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 28,
        question: "Which of the following bodies act as 'deliberative and advisory' bodies aiming to foster emotional integration of the country and help remove the after-effects of separation in some cases?",
        options: [
            "Water Disputes Tribunals",
            "Zonal Councils",
            "High Courts",
            "Finance Commission"
        ],
        correctAnswer: 1, // B
        explanation: "Zonal Councils are deliberative and advisory bodies. One of their stated objectives is to bring out the emotional integration of the country and arrest the growth of acute state consciousness, regionalism, linguism, and particularistic tendencies.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 29,
        question: "Which of the following is a function of the Inter-State Council as explicitly defined in Article 263?",
        options: [
            "To impose President's Rule in states.",
            "To investigate and discuss subjects in which some or all of the states, or the Union and one or more of the states, have a common interest.",
            "To audit the financial accounts of the states.",
            "To conduct elections for State Assemblies."
        ],
        correctAnswer: 1, // B
        explanation: "Article 263 explicitly states it is the duty of the Council to investigate and discuss subjects in which some or all of the states, or the Union and one or more of the states, have a common interest.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Fact", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    },
    {
        id: 30,
        question: "Is the jurisdiction of the Supreme Court over inter-state water disputes completely barred the moment the dispute arises?",
        options: [
            "Yes, the Supreme Court can never look at river waters.",
            "No, the Supreme Court automatically takes all these cases under Article 131.",
            "Under the 1956 Act, the Supreme Court's jurisdiction is barred only *after* the Central Government establishes a Tribunal and refers the specific dispute to it.",
            "The Supreme Court and the Tribunal share parallel jurisdiction at all times."
        ],
        correctAnswer: 2, // C
        explanation: "The bar on the Supreme Court's jurisdiction does not apply automatically to all water disputes. The jurisdiction of the Supreme Court (or any other court) is barred only 'in respect of the water dispute which has been referred to the Tribunal' under the Inter-State Water Disputes Act.",
        level: "Easy", topic: "Inter-State Relations", difficulty_tier: "Level_1", cognitive_tag: "Understanding", source_mapping: { book: "M. Laxmikanth", chapter: "Inter-State Relations" }
    }
];
