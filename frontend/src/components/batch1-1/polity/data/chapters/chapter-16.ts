import { ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler (Strictly Chapter 16)
const LEVEL_1_QUESTIONS = [
    {
        id: "ch16-l1-q1",
        question: "Article 262 of the Constitution provides for the adjudication of:",
        options: ["Inter-state river water disputes.", "Inter-state boundary disputes.", "Inter-state trade disputes.", "Disputes between Centre and States."],
        correctAnswerIndex: 0,
        explanation: "Article 262 deals with adjudication of disputes relating to waters of inter-state rivers or river valleys."
    },
    {
        id: "ch16-l1-q2",
        question: "Under Article 262, the Parliament may by law provide that neither the Supreme Court nor any other court shall exercise jurisdiction in respect of any such dispute.",
        options: ["True.", "False."],
        correctAnswerIndex: 0,
        explanation: "Article 262(2) allows Parliament to exclude SC jurisdiction."
    },
    {
        id: "ch16-l1-q3",
        question: "Under this provision (Article 262), the Parliament has enacted two laws:",
        options: ["The River Boards Act (1956) and the Inter-State Water Disputes Act (1956).", "The Water (Prevention and Control of Pollution) Act (1974) and the Environment Protection Act (1986).", "The Dam Safety Act (2021) and the National Water Policy (2012).", "None of the above."],
        correctAnswerIndex: 0,
        explanation: "Parliament enacted River Boards Act (1956) and Inter-State Water Disputes Act (1956)."
    },
    {
        id: "ch16-l1-q4",
        question: "The Inter-State Water Disputes Act empowers the Central Government to set up an ad hoc ______ for the adjudication of a dispute between two or more states.",
        options: ["Commission.", "Tribunal.", "Committee.", "High Court Bench."],
        correctAnswerIndex: 1,
        explanation: "It empowers the Centre to set up an ad hoc Tribunal."
    },
    {
        id: "ch16-l1-q5",
        question: "The decision of the Tribunal set up under the Inter-State Water Disputes Act is:",
        options: ["Final and binding on the parties.", "Appealable to the Supreme Court.", "Advisory in nature.", "Subject to review by the Parliament."],
        correctAnswerIndex: 0,
        explanation: "The Tribunal's decision is final and binding."
    },
    {
        id: "ch16-l1-q6",
        question: "Article 263 contemplates the establishment of an Inter-State Council to effect coordination between states and between Centre and states. Who can establish such a council?",
        options: ["Parliament.", "President.", "Supreme Court.", "NITI Aayog."],
        correctAnswerIndex: 1,
        explanation: "The President can establish an Inter-State Council under Article 263."
    },
    {
        id: "ch16-l1-q7",
        question: "The President can define the nature of duties to be performed by the Council. Article 263 specifies certain duties. Which is NOT one of them?",
        options: ["Enquiring into and advising upon disputes which may have arisen between states.", "Investigating and discussing subjects in which some or all of the states, or the Union and one or more of the states, have a common interest.", "Making recommendations upon any such subject for the better coordination of policy and action.", "Adjudicating legal disputes between states (This is SC's function under Art 131)."],
        correctAnswerIndex: 3,
        explanation: "Adjudication of legal disputes is the Supreme Court's function under Article 131, not ISC."
    },
    {
        id: "ch16-l1-q8",
        question: "The Inter-State Council's function to enquire into and advise upon inter-state disputes is complementary to the Supreme Court's jurisdiction under Article 131. However, the Council's function is:",
        options: ["Binding.", "Advisory.", "Judicial.", "Legislative."],
        correctAnswerIndex: 1,
        explanation: "The Council's function is advisory, unlike the SC's binding judgments."
    },
    {
        id: "ch16-l1-q9",
        question: "The Sarkaria Commission (1983-88) made a strong recommendation for the establishment of a permanent Inter-State Council under Article 263. It was established in:",
        options: ["1988", "1990", "1992", "1995"],
        correctAnswerIndex: 1,
        explanation: "The Inter-State Council was established in 1990."
    },
    {
        id: "ch16-l1-q10",
        question: "The Inter-State Council consists of the Prime Minister as Chairman, Chief Ministers of all States, Chief Ministers of UTs having Legislative Assemblies, and:",
        options: ["Administrators of UTs not having Legislative Assemblies.", "Six Central Cabinet Ministers, including Home Minister, nominated by the PM.", "Governors of States under President's Rule.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "It includes all these members."
    },
    {
        id: "ch16-l1-q11",
        question: "Who is the Chairman of the Standing Committee of the Inter-State Council?",
        options: ["Prime Minister.", "Union Home Minister.", "Cabinet Secretary.", "Vice-President."],
        correctAnswerIndex: 1,
        explanation: "The Union Home Minister chairs the Standing Committee."
    },
    {
        id: "ch16-l1-q12",
        question: "Under the Constitution, the jurisdiction of each state is confined to its own territory. Hence, the acts and records of one state may not be recognized in another state. To remove this difficulty, Article 261 provides that full faith and credit shall be given throughout the territory of India to:",
        options: ["Public acts, records and judicial proceedings of the Union and of every State.", "Only Central acts.", "Only Supreme Court judgments.", "Only Parliamentary proceedings."],
        correctAnswerIndex: 0,
        explanation: "Article 261 mandates full faith and credit to public acts, records, and judicial proceedings."
    },
    {
        id: "ch16-l1-q13",
        question: "The manner in which and the conditions under which such acts, records and proceedings are to be proved and the effect thereof determined shall be provided by:",
        options: ["The President.", "The Parliament by law.", "The Supreme Court rules.", "The State Legislatures."],
        correctAnswerIndex: 1,
        explanation: "Parliament determines the manner and conditions by law."
    },
    {
        id: "ch16-l1-q14",
        question: "Final judgments or orders delivered or passed by civil courts in any part of India are capable of execution anywhere within that territory without the necessity of a:",
        options: ["Fresh suit upon the judgment.", "Fresh trial.", "Fresh evidence.", "Presidential order."],
        correctAnswerIndex: 0,
        explanation: "Civil judgments are executable without filing a fresh suit."
    },
    {
        id: "ch16-l1-q15",
        question: "Article 301 declares that trade, commerce and intercourse throughout the territory of India shall be:",
        options: ["Free.", "Subject to reasonable restrictions.", "Restricted.", "Controlled by the Centre."],
        correctAnswerIndex: 0,
        explanation: "Article 301 declares trade, commerce, and intercourse shall be free."
    },
    {
        id: "ch16-l1-q16",
        question: "The freedom under Article 301 applies to:",
        options: ["Inter-state trade only.", "Intra-state trade only.", "Both inter-state and intra-state trade.", "International trade."],
        correctAnswerIndex: 2,
        explanation: "Article 301 applies to both inter-state and intra-state trade."
    },
    {
        id: "ch16-l1-q17",
        question: "Parliament can impose restrictions on the freedom of trade, commerce and intercourse between states or within a state in:",
        options: ["Public interest (Article 302).", "National interest.", "Economic interest.", "Emergency."],
        correctAnswerIndex: 0,
        explanation: "Article 302 allows restrictions in 'Public interest'."
    },
    {
        id: "ch16-l1-q18",
        question: "Can the Parliament give preference to one state over another or discriminate between the states in matters of trade and commerce?",
        options: ["Yes, generally.", "No, generally (Article 303).", "Yes, but only to deal with a situation arising from scarcity of goods in any part of India.", "Both (b) and (c)."],
        correctAnswerIndex: 3,
        explanation: "Generally no, but yes in case of scarcity of goods."
    },
    {
        id: "ch16-l1-q19",
        question: "The Legislature of a State can impose reasonable restrictions on the freedom of trade, commerce and intercourse with or within that state in public interest. But, a bill for this purpose can be introduced in the legislature only with the previous sanction of the:",
        options: ["Governor.", "President (Article 304).", "Parliament.", "High Court."],
        correctAnswerIndex: 1,
        explanation: "Previous sanction of the President is required under Article 304(b)."
    },
    {
        id: "ch16-l1-q20",
        question: "Can a State Legislature impose a tax on goods imported from other states?",
        options: ["Yes, provided similar goods manufactured in that state are also taxed (non-discriminatory).", "No, never.", "Yes, discriminatory taxes are allowed.", "Only with Parliament's permission."],
        correctAnswerIndex: 0,
        explanation: "State can impose non-discriminatory taxes on imported goods."
    },
    {
        id: "ch16-l1-q21",
        question: "The Zonal Councils are:",
        options: ["Constitutional bodies.", "Statutory bodies.", "Extra-constitutional bodies.", "Executive bodies."],
        correctAnswerIndex: 1,
        explanation: "Zonal Councils are statutory bodies."
    },
    {
        id: "ch16-l1-q22",
        question: "The Zonal Councils were established by the:",
        options: ["States Reorganization Act of 1956.", "North-Eastern Council Act of 1971.", "Inter-State Council Order of 1990.", "Planning Commission."],
        correctAnswerIndex: 0,
        explanation: "Established by the States Reorganization Act of 1956."
    },
    {
        id: "ch16-l1-q23",
        question: "The Act divided the country into how many zones initially (1956)?",
        options: ["4", "5 (Northern, Central, Eastern, Western and Southern).", "6", "7"],
        correctAnswerIndex: 1,
        explanation: "Initially 5 zones were created."
    },
    {
        id: "ch16-l1-q24",
        question: "Each Zonal Council consists of the Union Home Minister (Chairman) and:",
        options: ["Chief Ministers of all the States in the Zone.", "Two other ministers from each State in the Zone.", "Administrator of each UT in the Zone.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "It consists of Home Minister, CMs, two other ministers, and UT Administrators."
    },
    {
        id: "ch16-l1-q25",
        question: "Who is the Chairman of all the Zonal Councils?",
        options: ["The Prime Minister.", "The Union Home Minister.", "The Vice-President.", "A Union Minister nominated by the PM."],
        correctAnswerIndex: 1,
        explanation: "Union Home Minister chairs all Zonal Councils."
    },
    {
        id: "ch16-l1-q26",
        question: "Who acts as the Vice-Chairman of the Zonal Council?",
        options: ["Each Chief Minister of the Zone by rotation (for one year).", "The Governor of the host state.", "The Chief Secretary of the host state.", "A Central Minister."],
        correctAnswerIndex: 0,
        explanation: "CMs of the zone act as Vice-Chairman by rotation."
    },
    {
        id: "ch16-l1-q27",
        question: "The North-Eastern Council was created by a separate Act of Parliament in:",
        options: ["1956", "1971", "1985", "2002"],
        correctAnswerIndex: 1,
        explanation: "Created by North-Eastern Council Act, 1971."
    },
    {
        id: "ch16-l1-q28",
        question: "How many members does the North-Eastern Council have?",
        options: ["7 (Seven Sisters).", "8 (Seven Sisters + Sikkim).", "6", "5"],
        correctAnswerIndex: 1,
        explanation: "It has 8 members (Sikkim included in 2002)."
    },
    {
        id: "ch16-l1-q29",
        question: "The objectives of the Zonal Councils are:",
        options: ["To promote cooperation and coordination between states, and between the Centre and states.", "To discuss and make recommendations on matters of common interest like border disputes, linguistic minorities, etc.", "To assist each other in the execution of development projects.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All listed are objectives of Zonal Councils."
    },
    {
        id: "ch16-l1-q30",
        question: "Which of the following is NOT a statutory body?",
        options: ["Zonal Councils.", "North-Eastern Council.", "Inter-State Council (Constitutional - Art 263).", "River Boards (Statutory - River Boards Act 1956)."],
        correctAnswerIndex: 2,
        explanation: "Inter-State Council is a Constitutional body (Article 263)."
    },
    {
        id: "ch16-l1-q31",
        question: "Article 263 empowers the President to establish an Inter-State Council if at any time it appears to him that the public interest would be served thereby.",
        options: ["True.", "False."],
        correctAnswerIndex: 0,
        explanation: "True, President can establish it public interest requires."
    },
    {
        id: "ch16-l1-q32",
        question: "Under Article 307, Parliament may appoint an appropriate authority for carrying out the purposes of Articles 301 to 304.",
        options: ["True.", "False."],
        correctAnswerIndex: 0,
        explanation: "True, Article 307 empowers Parliament to appoint such authority."
    },
    {
        id: "ch16-l1-q33",
        question: "Freedom of trade, commerce and intercourse (Article 301) is subject to restrictions imposed by laws made by:",
        options: ["Parliament only.", "State Legislatures only.", "Both Parliament and State Legislatures.", "Executive orders."],
        correctAnswerIndex: 2,
        explanation: "Both Parliament and State Legislatures can impose restrictions."
    },
    {
        id: "ch16-l1-q34",
        question: "The \"Inter-State Trade and Commerce Commission\" was contemplated under Article 307 but has:",
        options: ["Been established.", "Not been established yet.", "Been replaced by GST Council.", "Been declared unconstitutional."],
        correctAnswerIndex: 1,
        explanation: "It has not been established yet."
    },
    {
        id: "ch16-l1-q35",
        question: "The Zonal Councils are only deliberative and advisory bodies.",
        options: ["True.", "False."],
        correctAnswerIndex: 0,
        explanation: "True, they are only advisory."
    }
];

// Level 2: The Conceptual Bridge (Applied Knowledge)
const LEVEL_2_QUESTIONS = [
    {
        id: "ch16-l2-q1",
        question: "The Constitution provides two distinct mechanisms for resolving inter-state disputes: Adjudication (Article 262) and Coordination (Article 263). The key difference is:",
        options: ["Article 262 deals with legal disputes only; Article 263 deals with non-legal disputes.", "Article 262 allows for binding adjudication by a Tribunal; Article 263 provides for an advisory council.", "Article 262 involves the Supreme Court; Article 263 involves the Parliament.", "Article 262 is for water; Article 263 is for land."],
        correctAnswerIndex: 1,
        explanation: "Article 262 allows binding adjudication, while 263 is advisory."
    },
    {
        id: "ch16-l2-q2",
        question: "Under Article 262, Parliament can bar the jurisdiction of the Supreme Court. However, in practice, the Supreme Court hears appeals against Tribunal awards under:",
        options: ["Article 131 (Original Jurisdiction).", "Article 136 (Special Leave Petition).", "Article 32 (Writ Jurisdiction).", "Article 143 (Advisory Jurisdiction)."],
        correctAnswerIndex: 1,
        explanation: "Supreme Court hears appeals under SLP (Article 136)."
    },
    {
        id: "ch16-l2-q3",
        question: "The \"Inter-State Water Disputes Act, 1956\" was amended in 2002 to make the Tribunal's award:",
        options: ["Binding regarding the data collection only.", "Have the same force as an order or decree of the Supreme Court.", "Advisory to the Centre.", "Subject to Parliamentary approval."],
        correctAnswerIndex: 1,
        explanation: "The award has the same force as a Supreme Court decree."
    },
    {
        id: "ch16-l2-q4",
        question: "Article 131 gives the Supreme Court exclusive original jurisdiction in inter-state disputes. Why are water disputes excluded?",
        options: ["Because water is a State subject.", "Because the Constitution makers felt that water disputes are technical and political, better resolved by negotiation or expert tribunals than by strict legal principles.", "Because the Supreme Court is too busy.", "Because water disputes are not legal disputes."],
        correctAnswerIndex: 1,
        explanation: "Water disputes are considered technical/political, better suited for tribunals."
    },
    {
        id: "ch16-l2-q5",
        question: "The Inter-State Council (ISC) is a constitutional body. Is it a permanent body?",
        options: ["Yes, created by the Constitution itself.", "No, it can be established by the President at any time public interest requires it (It was established only in 1990).", "Yes, created by Parliament.", "No, it is an ad-hoc body."],
        correctAnswerIndex: 1,
        explanation: "It is not permanent; President establishes it when needed."
    },
    {
        id: "ch16-l2-q6",
        question: "The decisions or recommendations of the Inter-State Council are:",
        options: ["Binding on the Centre and States.", "Advisory in nature.", "Binding if consensus is reached.", "Enforceable by the Supreme Court."],
        correctAnswerIndex: 1,
        explanation: "Its recommendations are advisory."
    },
    {
        id: "ch16-l2-q7",
        question: "Who acts as the Secretariat for the Inter-State Council?",
        options: ["The Cabinet Secretariat.", "The Ministry of Home Affairs.", "The Inter-State Council Secretariat (headed by a Secretary to GoI).", "The Prime Minister's Office."],
        correctAnswerIndex: 2,
        explanation: "The Inter-State Council Secretariat acts as its secretariat."
    },
    {
        id: "ch16-l2-q8",
        question: "Which of the following bodies has a composition similar to the Inter-State Council (PM + CMs)?",
        options: ["National Development Council (NDC) - Now defunct/replaced.", "Governing Council of NITI Aayog.", "National Integration Council.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All listed bodies have similar PM + CMs composition."
    },
    {
        id: "ch16-l2-q9",
        question: "The Zonal Councils are statutory bodies established under the States Reorganization Act, 1956. Their primary aim is to:",
        options: ["Promote \"Cooperative Federalism\" and check \"fissiparous tendencies\" (regionalism/linguism).", "Settle legal disputes.", "Distribute taxes.", "Manage elections."],
        correctAnswerIndex: 0,
        explanation: "Primary aim is to promote cooperative federalism and check regionalism."
    },
    {
        id: "ch16-l2-q10",
        question: "The Union Home Minister is the Chairman of:",
        options: ["Only the Northern Zonal Council.", "All 5 Zonal Councils.", "The Inter-State Council.", "The NITI Aayog."],
        correctAnswerIndex: 1,
        explanation: "Home Minister chairs all 5 Zonal Councils."
    },
    {
        id: "ch16-l2-q11",
        question: "The Chief Ministers of the States included in each zone act as Vice-Chairman of the Zonal Council by rotation for a period of:",
        options: ["1 year.", "2 years.", "5 years.", "6 months."],
        correctAnswerIndex: 0,
        explanation: "Vice-Chairmanship rotates every 1 year."
    },
    {
        id: "ch16-l2-q12",
        question: "Are the recommendations of the Zonal Councils binding?",
        options: ["Yes, strictly.", "No, they are only deliberative and advisory.", "Yes, if approved by Home Minister.", "Yes, for Union Territories."],
        correctAnswerIndex: 1,
        explanation: "They are only advisory."
    },
    {
        id: "ch16-l2-q13",
        question: "Which Zonal Council includes the States of Bihar, West Bengal, Odisha, and Jharkhand?",
        options: ["Northern Zonal Council.", "Eastern Zonal Council.", "Central Zonal Council.", "North-Eastern Council."],
        correctAnswerIndex: 1,
        explanation: "These states belong to the Eastern Zonal Council."
    },
    {
        id: "ch16-l2-q14",
        question: "Article 301 imposes a limitation on the legislative power of:",
        options: ["Parliament only.", "State Legislatures only.", "Both Parliament and State Legislatures.", "Executive only."],
        correctAnswerIndex: 2,
        explanation: "Limits both Parliament and State Legislatures."
    },
    {
        id: "ch16-l2-q15",
        question: "The freedom under Article 301 is not absolute. Parliament can impose restrictions in \"Public Interest\" (Article 302). However, can Parliament give preference to one State over another (Article 303)?",
        options: ["Yes, always.", "No, generally. But yes, if there is a \"scarcity of goods\" in any part of India.", "No, never.", "Only during Emergency."],
        correctAnswerIndex: 1,
        explanation: "Generally no, but yes in case of scarcity of goods."
    },
    {
        id: "ch16-l2-q16",
        question: "A State Legislature can impose a tax on goods imported from other States (Article 304(a)) provided:",
        options: ["The tax is higher than on local goods.", "The tax is lower than on local goods.", "Similar goods manufactured in the State are also taxed (Non-discriminatory).", "The Centre approves it."],
        correctAnswerIndex: 2,
        explanation: "Tax must be non-discriminatory."
    },
    {
        id: "ch16-l2-q17",
        question: "A State Legislature can impose \"reasonable restrictions\" on the freedom of trade with or within the State in \"Public Interest\" (Article 304(b)). But a Bill for this purpose requires:",
        options: ["Previous sanction of the Governor.", "Previous sanction of the President.", "Ratification by Parliament.", "Consultation with GST Council."],
        correctAnswerIndex: 1,
        explanation: "Previous sanction of the President is required."
    },
    {
        id: "ch16-l2-q18",
        question: "Article 307 empowers Parliament to appoint an \"Authority\" for carrying out the purposes of Articles 301-304. Has such an authority been appointed?",
        options: ["Yes, the Inter-State Commerce Commission.", "No, not yet.", "Yes, the Competition Commission of India.", "Yes, the GST Council acts as one."],
        correctAnswerIndex: 1,
        explanation: "No such authority has been appointed yet."
    },
    {
        id: "ch16-l2-q19",
        question: "\"Full Faith and Credit\" (Article 261) applies to:",
        options: ["Civil laws and proceedings.", "Criminal laws and proceedings.", "Both Civil and Criminal.", "Administrative orders only."],
        correctAnswerIndex: 0,
        explanation: "Primarily applies to civil laws and proceedings."
    },
    {
        id: "ch16-l2-q20",
        question: "Which of the following is NOT a function of the Inter-State Council?",
        options: ["Investigating subjects of common interest.", "Making recommendations for better coordination of policy.", "Adjudicating disputes regarding river waters.", "Deliberating on matters referred by the Chairman."],
        correctAnswerIndex: 2,
        explanation: "Adjudicating river water disputes is not an ISC function."
    },
    {
        id: "ch16-l2-q21",
        question: "Assertion (A): The Zonal Councils are extra-constitutional devices. Reason (R): They are not mentioned in the Constitution but created by a Parliamentary Statute. Select the correct answer:",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "Both true and R explains A."
    },
    {
        id: "ch16-l2-q22",
        question: "The \"North-Eastern Council\" (NEC) was originally an advisory body. It was made a \"Regional Planning Body\" by the Amendment Act of:",
        options: ["1971", "2002", "2014", "1991"],
        correctAnswerIndex: 1,
        explanation: "Made a Regional Planning Body by Amendment Act of 2002."
    },
    {
        id: "ch16-l2-q23",
        question: "Sikkim was included in the North-Eastern Council in the year:",
        options: ["1975", "2002", "1990", "2010"],
        correctAnswerIndex: 1,
        explanation: "Sikkim was included in 2002."
    },
    {
        id: "ch16-l2-q24",
        question: "Which body is responsible for dividing the assets and liabilities between two States after reorganization?",
        options: ["Finance Commission.", "Planning Commission / NITI Aayog.", "The Central Government (Home Ministry) often via Committees.", "Inter-State Council."],
        correctAnswerIndex: 2,
        explanation: "Central Government manages asset division."
    },
    {
        id: "ch16-l2-q25",
        question: "The \"River Boards Act, 1956\" provides for the establishment of River Boards for regulation and development of inter-state river valleys. These Boards are established by:",
        options: ["The Central Government on request of State Governments.", "The Supreme Court.", "The Inter-State Council.", "The President."],
        correctAnswerIndex: 0,
        explanation: "Established by Central Government on request."
    },
    {
        id: "ch16-l2-q26",
        question: "In the Atiabari Tea Co. case (1961), the Supreme Court held that the freedom of trade and commerce (Article 301) applies to:",
        options: ["Only trade barriers like customs.", "Taxation laws as well (if they directly impede movement).", "Only movement of individuals.", "Only international trade."],
        correctAnswerIndex: 1,
        explanation: "Applies to taxation laws if they directly impede movement."
    },
    {
        id: "ch16-l2-q27",
        question: "\"Compensatory Taxes\" (like road tax for maintenance) do not violate Article 301 according to:",
        options: ["Automobile Transport vs State of Rajasthan (1962).", "Kesavananda Bharati case.", "Maneka Gandhi case.", "S.R. Bommai case."],
        correctAnswerIndex: 0,
        explanation: "Automobile Transport vs State of Rajasthan established this."
    },
    {
        id: "ch16-l2-q28",
        question: "The \"Inter-State Migrant Workmen Act, 1979\" regulates the employment of inter-state migrants. It is a Central Law enforcing:",
        options: ["Article 19(1)(d) & (e).", "Article 23 (Traffic in human beings).", "Article 301.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "It enforces all these provisions."
    },
    {
        id: "ch16-l2-q29",
        question: "Which of the following states is NOT a member of any Zonal Council but a special invitee to the Northern Zonal Council?",
        options: ["Jammu & Kashmir.", "Ladakh.", "Sikkim (Member of NEC).", "Himachal Pradesh."],
        correctAnswerIndex: 2,
        explanation: "Sikkim is in NEC, not Zonal Council, but special invitee to Northern."
    },
    {
        id: "ch16-l2-q30",
        question: "The \"Standing Committee\" of the Inter-State Council was set up in 1996 for:",
        options: ["Continuous consultation and processing of matters for the consideration of the Council.", "Replacing the Council.", "Investigating criminal cases.", "Auditing state accounts."],
        correctAnswerIndex: 0,
        explanation: "It processes matters for the Council."
    }
];

// Level 3: The UPSC Prelims 2026 Simulation (Integrated & Current Affairs)
const LEVEL_3_QUESTIONS = [
    {
        id: "ch16-l3-q1",
        question: "The Inter-State River Water Disputes (Amendment) Bill (proposed) seeks to replace multiple existing Tribunals with a single \"Permanent Tribunal\". A key feature of this proposal is:",
        options: ["The decision of the Tribunal will be final and binding, with no appeal to the Supreme Court.", "The Tribunal will have a specific timeline for adjudication (e.g., 2 years extendable by 1 year).", "It creates a \"Dispute Resolution Committee\" (DRC) for amicable settlement before referring to the Tribunal.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All listed features are part of the proposed Amendment."
    },
    {
        id: "ch16-l3-q2",
        question: "In the Cauvery Water Dispute, the Supreme Court (2018 judgment) modified the 2007 Tribunal Award. Despite Article 262 barring jurisdiction, the Court heard the matter under:",
        options: ["Article 131 (Original Jurisdiction).", "Article 136 (Special Leave Petition) - treating the Tribunal's award as a decree of a Civil Court.", "Article 32 (Violation of Right to Water).", "Article 143 (Advisory Jurisdiction)."],
        correctAnswerIndex: 1,
        explanation: "Heard under Article 136, treating award as civil decree."
    },
    {
        id: "ch16-l3-q3",
        question: "The Sutlej-Yamuna Link (SYL) Canal issue between Punjab and Haryana involves a refusal by a State (Punjab) to implement a Supreme Court decree. The Court has clarified that:",
        options: ["A State cannot unilaterally terminate a water-sharing agreement by passing a State Law (Punjab Termination of Agreements Act, 2004).", "Water is a State subject, so Punjab is supreme.", "The Centre must intervene under Article 356 immediately.", "The Tribunal must be reconstituted."],
        correctAnswerIndex: 0,
        explanation: "States cannot unilateral terminate water sharing agreements."
    },
    {
        id: "ch16-l3-q4",
        question: "The Krishna Water Dispute (Telangana vs AP) recently saw the Centre notifying the jurisdiction of the Krishna River Management Board (KRMB). This Board is a:",
        options: ["Constitutional body under Article 262.", "Statutory body created under the AP Reorganisation Act, 2014.", "Body under the River Boards Act, 1956.", "Tribunal."],
        correctAnswerIndex: 1,
        explanation: "KRMB is a statutory body under AP Reorganisation Act, 2014."
    },
    {
        id: "ch16-l3-q5",
        question: "The Maharashtra-Karnataka Border Dispute (Belagavi) is currently pending in the Supreme Court under Article 131. Maharashtra argues that the States Reorganization Act, 1956 was arbitrary. Karnataka argues that:",
        options: ["Article 3 empowers only Parliament to settle boundaries; the Supreme Court cannot redraw borders.", "Article 131 does not apply to disputes arising from pre-constitution treaties.", "The dispute is time-barred.", "Belagavi is a Union Territory."],
        correctAnswerIndex: 0,
        explanation: "Karnataka argues Article 3 gives Parliament sole power."
    },
    {
        id: "ch16-l3-q6",
        question: "The Assam-Mizoram Border Conflict (2021 violence) was de-escalated through the intervention of the:",
        options: ["Supreme Court.", "Inter-State Council.", "Union Home Ministry (facilitating talks) and North-Eastern Council.", "President of India."],
        correctAnswerIndex: 2,
        explanation: "De-escalated by MHA and NEC intervention."
    },
    {
        id: "ch16-l3-q7",
        question: "Can the Parliament alter the boundary between two states to settle a dispute without their consent?",
        options: ["Yes, under Article 3, Parliament can alter boundaries by simple majority; State consent is not mandatory (only views are sought).", "No, State consent is mandatory.", "Yes, but requires a Constitutional Amendment (Article 368).", "No, only the Supreme Court can do it."],
        correctAnswerIndex: 0,
        explanation: "Yes, under Article 3, Parliament can alter boundaries without consent."
    },
    {
        id: "ch16-l3-q8",
        question: "Critics argue that the Inter-State Council (ISC) has become dormant while the GST Council is active. A key structural difference is:",
        options: ["GST Council has a constitutional mandate to meet at least once every quarter (implied by procedure/rules), whereas ISC has no mandatory meeting frequency in the Constitution.", "GST Council decisions are binding on tax rates; ISC is purely advisory.", "GST Council has a weighted voting system; ISC works on consensus.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All are key structural differences."
    },
    {
        id: "ch16-l3-q9",
        question: "The Standing Committee of the Inter-State Council was reconstituted in 2022. Its function is to:",
        options: ["Process matters for consideration of the Council.", "Replace the Council during emergencies.", "Implement the Council's decisions.", "Adjudicate disputes."],
        correctAnswerIndex: 0,
        explanation: "It processes matters for the Council."
    },
    {
        id: "ch16-l3-q10",
        question: "The \"Entry Tax\" imposed by States on goods entering local areas was upheld by a 9-judge bench of the Supreme Court in Jindal Stainless case (2017). The Court held that:",
        options: ["Taxes are restrictions on trade (Article 301) and are unconstitutional.", "Taxes are not restrictions on trade freedom unless they are discriminatory; compensatory taxes are valid.", "Only GST can be levied.", "Entry tax is a Union subject."],
        correctAnswerIndex: 1,
        explanation: "Taxes are not restrictions unless discriminatory."
    },
    {
        id: "ch16-l3-q11",
        question: "\"E-Way Bill\" under GST is a mechanism to monitor movement of goods. If a State Squad detains a truck for expiry of E-Way Bill, does it violate Article 301 (Freedom of Trade)?",
        options: ["Yes, it is a barrier to free movement.", "No, it is a \"Regulatory Measure\" to prevent tax evasion, which is a reasonable restriction in public interest (Article 302/304).", "Yes, unless the State pays compensation.", "No, Article 301 applies only to individuals."],
        correctAnswerIndex: 1,
        explanation: "It is a valid regulatory measure/reasonable restriction."
    },
    {
        id: "ch16-l3-q12",
        question: "Recent meetings of the Zonal Councils (chaired by Home Minister) have focused heavily on:",
        options: ["Internal Security (Cybercrime, Drugs trafficking, Naxalism).", "River water sharing.", "Language policy.", "Cultural exchange."],
        correctAnswerIndex: 0,
        explanation: "Recent focus is on internal security issues."
    },
    {
        id: "ch16-l3-q13",
        question: "The Eastern Zonal Council (2024 meeting) discussed the issue of \"Illegal Migration\" and \"Demographic Change\". This highlights the Zonal Council's role in:",
        options: ["Conflict Resolution.", "Security Coordination (Border management).", "Economic Planning.", "Judicial Cooperation."],
        correctAnswerIndex: 1,
        explanation: "Highlights role in Security Coordination."
    },
    {
        id: "ch16-l3-q14",
        question: "The \"North-Eastern Council\" (NEC) allocates funds for regional projects. A major criticism is that:",
        options: ["It overlaps with the Ministry of DoNER (Development of North Eastern Region).", "It has no funding power.", "It excludes Sikkim.", "It is dominated by Governors."],
        correctAnswerIndex: 0,
        explanation: "Overlap with DoNER is a major criticism."
    },
    {
        id: "ch16-l3-q15",
        question: "The Inter-State Migrant Workmen Act, 1979 requires:",
        options: ["Registration of establishments employing inter-state migrants.", "Licensing of contractors.", "Payment of equal wages to migrants performing same work as locals.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "Requires all listed measures."
    },
    {
        id: "ch16-l3-q16",
        question: "During the COVID-19 migrant crisis, the Supreme Court directed the Centre and States to establish a \"National Portal\" for registration. This portal is:",
        options: ["e-Shram Portal.", "Udyam Portal.", "ASEEM Portal.", "NREGA Soft."],
        correctAnswerIndex: 0,
        explanation: "e-Shram Portal was established."
    },
    {
        id: "ch16-l3-q17",
        question: "A \"Look Out Circular\" (LOC) issued by the Police of one State (e.g., Punjab) against a criminal is executed by Immigration Authorities at an Airport in another State (e.g., Delhi). This is an example of:",
        options: ["Article 261 (Full Faith and Credit to public acts/records).", "Extradition Treaty.", "Article 355.", "Interstate Commerce."],
        correctAnswerIndex: 0,
        explanation: "Example of Article 261 Full Faith and Credit."
    },
    {
        id: "ch16-l3-q18",
        question: "Can a \"Decree of Divorce\" granted by a Family Court in Chennai be executed in Mumbai?",
        options: ["Yes, under Article 261(3) (Execution of civil judgments).", "No, a fresh suit is needed.", "Only if the High Court allows.", "No, personal laws differ."],
        correctAnswerIndex: 0,
        explanation: "Yes, civil decree execution under Article 261(3)."
    },
    {
        id: "ch16-l3-q19",
        question: "Assertion (A): The Supreme Court has original jurisdiction in any dispute between the Government of India and one or more States. Reason (R): Article 131 expressly excludes disputes arising out of any treaty, agreement, covenant, engagement, sanad or other similar instrument entered into before the commencement of the Constitution. Select the correct answer:",
        options: ["Both A and R are true, and R is the correct explanation of A (partially explains the scope).", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "Both true and R explains the scope limitation."
    },
    {
        id: "ch16-l3-q20",
        question: "Assertion (A): The Zonal Councils are constitutional bodies. Reason (R): They are established under Article 263 to promote cooperative federalism. Select the correct answer:",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "Both A and R are false. (Zonal Councils are Statutory, Inter-State Council is Constitutional)."],
        correctAnswerIndex: 3,
        explanation: "Both are false."
    },
    {
        id: "ch16-l3-q21",
        question: "The \"River Boards Act, 1956\" empowers the Central Government to establish River Boards. Why has no River Board been established so far?",
        options: ["Because States prefer \"Tribunals\" (Adjudication) over \"Boards\" (Regulation/Management) to protect their rights.", "Because the Act is defective.", "Because the Supreme Court struck it down.", "Because water is a State subject."],
        correctAnswerIndex: 0,
        explanation: "States prefer adjudication over regulation."
    },
    {
        id: "ch16-l3-q22",
        question: "The \"Mullaperiyar Dam\" dispute involves the safety of a dam located in Kerala but operated by Tamil Nadu. This dispute involves conflict between:",
        options: ["Article 262 (Water sharing) and Article 21 (Right to Safety/Life of Kerala people).", "Two sovereign nations.", "Legislature and Judiciary.", "Centre and UN."],
        correctAnswerIndex: 0,
        explanation: "Conflict involves Article 262 vs Article 21."
    },
    {
        id: "ch16-l3-q23",
        question: "\"Forum Shopping\" in Inter-State Disputes. States often approach the Supreme Court under Article 32 or 131 instead of Tribunals because:",
        options: ["Tribunals are slow.", "Tribunal awards are often not implemented.", "SC offers immediate interim relief (Stay orders).", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All are reasons for forum shopping."
    },
    {
        id: "ch16-l3-q24",
        question: "The \"Polavaram Project\" (Andhra Pradesh) was declared a \"National Project\" by the AP Reorganisation Act, 2014. This means:",
        options: ["It is funded 90% or 100% by the Centre.", "It is executed by the Centre.", "It is exempt from environmental clearance.", "It requires no State funding."],
        correctAnswerIndex: 0,
        explanation: "National Project means significant Central funding (90-100%)."
    },
    {
        id: "ch16-l3-q25",
        question: "\"Inter-State Quarantine\" is a subject in the:",
        options: ["Union List (Entry 81).", "State List.", "Concurrent List.", "Residuary List."],
        correctAnswerIndex: 0,
        explanation: "It is in the Union List (Entry 81)."
    },
    {
        id: "ch16-l3-q26",
        question: "The \"Essential Commodities (Amendment) Act, 2020\" (now repealed) sought to remove restrictions on inter-state trade of food-stuffs. This was based on Entry 33 of the:",
        options: ["Concurrent List (Trade and commerce in foodstuffs).", "Union List.", "State List.", "Residuary List."],
        correctAnswerIndex: 0,
        explanation: "Based on Entry 33 of Concurrent List."
    },
    {
        id: "ch16-l3-q27",
        question: "The \"Linguistic Minorities\" Commissioner (Article 350B) investigates grievances related to safeguards for linguistic minorities. His report is sent to:",
        options: ["The President.", "The Inter-State Council.", "The Zonal Councils.", "The National Human Rights Commission."],
        correctAnswerIndex: 0,
        explanation: "Report is sent to the President."
    },
    {
        id: "ch16-l3-q28",
        question: "Under Article 292, the Centre can borrow upon the security of the Consolidated Fund of India. Under Article 293, States can borrow upon the security of:",
        options: ["Consolidated Fund of India.", "Consolidated Fund of the State.", "Contingency Fund of the State.", "Assets of the State."],
        correctAnswerIndex: 1,
        explanation: "States borrow on security of Consolidated Fund of the State."
    },
    {
        id: "ch16-l3-q29",
        question: "Which of the following is an example of \"Horizontal Federalism\"?",
        options: ["GST Council (Centre-State).", "Zonal Councils (State-State cooperation).", "Finance Commission (Centre-State).", "Governor's Office."],
        correctAnswerIndex: 1,
        explanation: "Zonal Councils (State-State) represent Horizontal Federalism."
    },
    {
        id: "ch16-l3-q30",
        question: "The \"Smart Cities Mission\" involves a Special Purpose Vehicle (SPV). This model bypasses the traditional federal route (Centre -> State -> Municipality) by:",
        options: ["Centre funding the SPV directly/jointly.", "State having no role.", "Municipality having no role.", "Privatizing the city."],
        correctAnswerIndex: 0,
        explanation: "SPV model involves direct/joint funding, bypassing traditional route."
    }
];

export const CHAPTER_16_LEVELS: ChapterLevelData = {
    topicId: 16,
    levels: [
        {
            levelId: 1,
            title: "The Text-Book Stickler",
            description: "Strictly Chapter 16",
            questions: LEVEL_1_QUESTIONS
        },
        {
            levelId: 2,
            title: "The Conceptual Bridge",
            description: "Applied Knowledge",
            questions: LEVEL_2_QUESTIONS
        },
        {
            levelId: 3,
            title: "UPSC Simulation 2026",
            description: "Integrated & Current Affairs Context",
            questions: LEVEL_3_QUESTIONS
        }
    ]
};
