// Saturday Polity Module Test-1 Data
// Covering: Amendment, Basic Structure, Parliamentary System, Federal System, 
// Centre-State, Inter-State, Emergency, President, Governor, PM, CM, COM.

export interface ModuleMCQ {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // 0-indexed (A=0, B=1, etc.)
    explanation: string;
    chapter: string;
    subtopic: string;
}

export const PAPER_1_QUESTIONS: ModuleMCQ[] = [
    {
        id: 1,
        question: "Consider the following statements regarding the amendment procedure under Article 368:\n1. A Constitutional Amendment Bill can be introduced in the Parliament only by a Minister and not by a Private Member.\n2. The bill requires prior permission of the President before introduction.\n3. If there is a disagreement between the two Houses, a joint sitting can be summoned to pass the bill.\nWhich of the statements given above is/are correct?",
        options: ["(a) 1 only", "(b) 2 only", "(c) 1 and 3 only", "(d) None of the above"],
        correctAnswer: 3,
        explanation: "Private members can introduce. No prior permission needed. No joint sitting for Constitutional Amendments.",
        chapter: "Amendment of the Constitution",
        subtopic: "Procedure for Amendment"
    },
    {
        id: 2,
        question: "Which of the following provisions of the Constitution require ratification by the State Legislatures for their amendment?\n1. Election of the President.\n2. Fundamental Rights.\n3. Representation of States in Parliament.\n4. Any of the Lists in the Seventh Schedule.\nSelect the correct answer using the code given below:",
        options: ["(a) 1, 3 and 4 only", "(b) 1 and 2 only", "(c) 3 and 4 only", "(d) 1, 2, 3 and 4"],
        correctAnswer: 0,
        explanation: "FRs (2) do not need ratification. Election of President (1), Representation of States (3), and 7th Schedule (4) do.",
        chapter: "Amendment of the Constitution",
        subtopic: "Types of Amendments"
    },
    {
        id: 3,
        question: "In the context of the 'Basic Structure Doctrine', consider the following statements:\n1. The doctrine was explicitly defined by the Supreme Court in the Kesavananda Bharati case (1973).\n2. It acts as a limitation on the constituent power of the Parliament.\n3. The Supreme Court in the I.R. Coelho case held that laws placed in the Ninth Schedule after April 24, 1973, are open to judicial review if they violate the basic structure.\nWhich of the statements given above is/are correct?",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "Basic structure was not explicitly 'defined' (it's open-ended) in 1973. It was introduced.",
        chapter: "Basic Structure Doctrine",
        subtopic: "Evolution of Basic Structure"
    },
    {
        id: 4,
        question: "Consider the following statements regarding the 'Parliamentary System' in India:\n1. The Constitution provides for a parliamentary form of government both at the Centre and in the States.\n2. The collective responsibility of the Executive to the Legislature is the bedrock principle of this system.\n3. Indian Parliament is a sovereign body similar to the British Parliament.\nWhich of the statements given above are correct?",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Indian Parliament is not sovereign like the British Parliament as its powers are limited by a written Constitution, federal structure, and judicial review.",
        chapter: "Parliamentary System",
        subtopic: "Features of Parliamentary System"
    },
    {
        id: 5,
        question: "Which of the following creates a 'Unitary Bias' in the Indian Federal System?\n1. Single Constitution\n2. Appointment of Governor\n3. Integrated Judiciary\n4. All-India Services\nSelect the correct answer using the code given below:",
        options: ["(a) 1 and 2 only", "(b) 2 and 4 only", "(c) 1, 3 and 4 only", "(d) 1, 2, 3 and 4"],
        correctAnswer: 3,
        explanation: "All listed features show unitary bias as they give more power to the Centre or provide a unified structure under Central control.",
        chapter: "Federal System",
        subtopic: "Unitary Features"
    },
    {
        id: 6,
        question: "With reference to the Constitution (106th Amendment) Act, 2023 (Nari Shakti Vandan Adhiniyam), consider the following statements:\n1. It mandates 33% reservation for women in the Lok Sabha, State Legislative Assemblies, and the Rajya Sabha.\n2. The reservation provisions will come into effect immediately after the dissolution of the current Lok Sabha.\n3. It provides for vertical reservation for women belonging to Scheduled Castes and Scheduled Tribes.\nWhich of the statements given above is/are correct?",
        options: ["(a) 1 and 2 only", "(b) 3 only", "(c) 1 and 3 only", "(d) 2 only"],
        correctAnswer: 1,
        explanation: "Statement 1 is incorrect as Rajya Sabha is not included. Statement 2 is incorrect as it is linked to the first census after 2026/delimitation. Statement 3 is correct (Vertical reservation).",
        chapter: "Amendment of the Constitution",
        subtopic: "Recent Amendments"
    },
    {
        id: 7,
        question: "Consider the following statements regarding the 'Shadow Cabinet':\n1. It is a unique institution of the Indian Parliamentary System.\n2. It is formed by the ruling party to monitor the performance of its own ministers.\nWhich of the statements given above is/are correct?",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 3,
        explanation: "Shadow cabinet is a British institution where the opposition forms a parallel cabinet. It doesn't exist in the Indian system.",
        chapter: "Parliamentary System",
        subtopic: "British vs Indian System"
    },
    {
        id: 8,
        question: "Which of the following features of the Indian Constitution were borrowed from the Canadian Constitution?\n1. Federation with a strong Centre.\n2. Vesting of residuary powers in the Centre.\n3. Appointment of State Governors by the Centre.\n4. Method of election of the President.\nSelect the correct answer using the code given below:",
        options: ["(a) 1 and 2 only", "(b) 1, 2 and 3 only", "(c) 2, 3 and 4 only", "(d) 1, 2, 3 and 4"],
        correctAnswer: 1,
        explanation: "Method of election of the President is borrowed from Ireland. Others are from Canada.",
        chapter: "Federal System",
        subtopic: "Sources of Constitution"
    },
    {
        id: 9,
        question: "In the context of the amendment of the Constitution, a 'Special Majority' of Parliament refers to:",
        options: ["(a) A majority of the total membership of each House.", "(b) A majority of two-thirds of the members of each House present and voting.", "(c) A majority of the total membership of each House and a majority of two-thirds of the members of each House present and voting.", "(d) A majority of two-thirds of the total membership of each House."],
        correctAnswer: 2,
        explanation: "Under Article 368, special majority requires a majority of the total membership of each House and a majority of two-thirds of the members of each House present and voting.",
        chapter: "Amendment of the Constitution",
        subtopic: "Types of Amendments"
    },
    {
        id: 10,
        question: "Consider the following statements regarding the 'Federal features' of the Indian Constitution:\n1. Dual Polity\n2. Written Constitution\n3. Flexible Constitution\n4. Bicameralism\nWhich of the above are NOT federal features?",
        options: ["(a) 1 and 2 only", "(b) 3 only", "(c) 3 and 4 only", "(d) 1 and 4 only"],
        correctAnswer: 1,
        explanation: "Flexible constitution (3) is a unitary feature. Federal systems usually have a rigid constitution.",
        chapter: "Federal System",
        subtopic: "Federal Features"
    },
    {
        id: 11,
        question: "The 'Doctrine of Harmonious Construction' is primarily used to:",
        options: ["(a) Resolve conflicts between Fundamental Rights and Directive Principles.", "(b) Interpret the Basic Structure of the Constitution.", "(c) Resolve disputes between Centre and States.", "(d) Validate the election of the President."],
        correctAnswer: 0,
        explanation: "Used to balance Part III (Fundamental Rights) and Part IV (DPSP) to ensure they work in harmony.",
        chapter: "Basic Structure Doctrine",
        subtopic: "Harmonious Construction"
    },
    {
        id: 12,
        question: "Which of the following amendments provided for the 'National Judicial Appointments Commission' (NJAC), which was later struck down by the Supreme Court?",
        options: ["(a) 97th Amendment Act", "(b) 98th Amendment Act", "(c) 99th Amendment Act", "(d) 100th Amendment Act"],
        correctAnswer: 2,
        explanation: "The 99th Amendment Act replaced the collegium system with NJAC, but it was struck down as unconstitutional.",
        chapter: "Basic Structure Doctrine",
        subtopic: "Judicial Review"
    },
    {
        id: 13,
        question: "Consider the following statements regarding the dissolution of the Lok Sabha:\n1. A Bill pending in the Rajya Sabha which has not been passed by the Lok Sabha lapses.\n2. A Bill passed by the Lok Sabha but pending in the Rajya Sabha lapses.\n3. A Bill pending in the Lok Sabha lapses.\nWhich of the statements given above is/are correct?",
        options: ["(a) 1 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "A bill pending in RS but not passed by LS does NOT lapse (Statement 1 incorrect). 2 and 3 are correct regarding lapsing.",
        chapter: "Parliamentary System",
        subtopic: "Lapsing of Bills"
    },
    {
        id: 14,
        question: "Regarding the 'Doctrine of Basic Structure', which of the following judgments is NOT correctly matched?",
        options: ["(a) Shankari Prasad Case (1951) – Parliament can amend any part of the Constitution.", "(b) Golaknath Case (1967) – Fundamental Rights are transcendental and immutable.", "(c) Minerva Mills Case (1980) – Judicial Review is a basic feature.", "(d) Waman Rao Case (1981) – The Basic Structure doctrine applies retrospectively to 1951."],
        correctAnswer: 3,
        explanation: "Waman Rao (1981) clarified retrospectivity to April 24, 1973 (Kesavananda judgment date), not 1951.",
        chapter: "Basic Structure Doctrine",
        subtopic: "Landmark Cases"
    },
    {
        id: 15,
        question: "Which of the following is NOT a merit of the Parliamentary System?",
        options: ["(a) Harmony between Legislature and Executive.", "(b) Responsible Government.", "(c) Strict Separation of Powers.", "(d) Wide Representation."],
        correctAnswer: 2,
        explanation: "Separation of powers is not strict in a Parliamentary system as the Executive is part of the Legislature. Strict separation is a feature of the Presidential system.",
        chapter: "Parliamentary System",
        subtopic: "Merits & Demerits"
    },
    {
        id: 16,
        question: "Consider the following statements regarding the 'Indian Federal System' vs 'American Federal System':\n1. Unlike the US, India has a single citizenship.\n2. In India, the states have no right to secede from the Federation.\n3. Both India and the US have a dual system of courts (State courts and Federal courts).",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "India has integrated courts (unified judiciary), unlike the dual court system in the US.",
        chapter: "Federal System",
        subtopic: "Indian vs American System"
    },
    {
        id: 17,
        question: "With reference to the 'S.R. Bommai Case (1994)', the Supreme Court declared which of the following as a 'Basic Feature' of the Constitution?",
        options: ["(a) Parliamentary Sovereignty", "(b) Federalism", "(c) Uniform Civil Code", "(d) Presidential System"],
        correctAnswer: 1,
        explanation: "The SC declared Federalism, Secularism, Democracy, and Unity of Integrity as basic features in the Bommai case.",
        chapter: "Basic Structure Doctrine",
        subtopic: "Federalism"
    },
    {
        id: 18,
        question: "The 24th Constitutional Amendment Act, 1971:\n1. Affirmed the power of Parliament to amend any part of the Constitution including Fundamental Rights.\n2. Made it obligatory for the President to give his assent to a Constitutional Amendment Bill.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "Both statements are correct. It was enacted to neutralize the effects of the Golaknath case.",
        chapter: "Amendment of the Constitution",
        subtopic: "Key Amendments"
    },
    {
        id: 19,
        question: "Consider the following statements regarding the 'Office of Whip':\n1. The office of 'whip' is mentioned in the Constitution of India.\n2. He is appointed by the Speaker of the House to maintain decorum.\n3. Violation of the whip may lead to disqualification under the Tenth Schedule.",
        options: ["(a) 1 and 2 only", "(b) 3 only", "(c) 2 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "Whip is not in Constitution or Rules of House (1 & 2 incorrect). Appointed by political party. Disqualification rule (3) is correct.",
        chapter: "Parliamentary System",
        subtopic: "Legislative Organs"
    },
    {
        id: 20,
        question: "In the Indian Parliamentary model, a 'No-Confidence Motion':\n1. Can be moved against an individual minister.\n2. Requires the support of 50 members to be admitted.\n3. If passed, the Council of Ministers must resign.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "Cannot be moved against an individual minister (Statement 1 incorrect). It must be against the entire Council of Ministers.",
        chapter: "Parliamentary System",
        subtopic: "Motions in Parliament"
    },
    {
        id: 21,
        question: "Which of the following features indicate that the Indian Constitution is 'flexible' in nature?\n1. Amendment of certain provisions by a simple majority of Parliament.\n2. The power of Parliament to alter the boundaries of States.\n3. Abolition of Legislative Councils in States.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All three allows changes via simple majority, indicating the flexible aspect of the Constitution.",
        chapter: "Amendment of the Constitution",
        subtopic: "Flexible Features"
    },
    {
        id: 22,
        question: "Consider the following statements regarding the 'Presidential System':\n1. The Executive is not responsible to the Legislature for its policies and acts.\n2. The President is the Head of State as well as the Head of Government.\n3. The President can dissolve the Legislature (Lower House).",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "The President cannot dissolve the Legislature in most Presidential systems (US model). Statement 3 is incorrect.",
        chapter: "Parliamentary System",
        subtopic: "Presidential System"
    },
    {
        id: 23,
        question: "The 'Basic Structure' includes which of the following as per various SC judgments?\n1. Rule of Law\n2. Separation of Powers\n3. Welfare State\n4. Free and Fair Elections",
        options: ["(a) 1, 2 and 3 only", "(b) 2, 3 and 4 only", "(c) 1, 3 and 4 only", "(d) 1, 2, 3 and 4"],
        correctAnswer: 3,
        explanation: "All listed are basic features as established through various SC judgments.",
        chapter: "Basic Structure Doctrine",
        subtopic: "List of Basic Features"
    },
    {
        id: 24,
        question: "Consider the following statements regarding Article 1 of the Constitution:\n1. It describes India as a 'Federation of States'.\n2. The 'Territory of India' is a wider expression than the 'Union of India'.\n3. The states have the right to secede from the Union.",
        options: ["(a) 1 only", "(b) 2 only", "(c) 2 and 3 only", "(d) 1 and 3 only"],
        correctAnswer: 1,
        explanation: "Art 1 says 'Union of States' (1 incorrect). No right to secede (3 incorrect). 'Territory' includes UTs and acquired territories (2 correct).",
        chapter: "Federal System",
        subtopic: "Union and Territory"
    },
    {
        id: 25,
        question: "Which of the following amendments restricts the size of the Council of Ministers to 15% of the total strength of the Lok Sabha?",
        options: ["(a) 86th Amendment Act", "(b) 91st Amendment Act", "(c) 97th Amendment Act", "(d) 103rd Amendment Act"],
        correctAnswer: 1,
        explanation: "The 91st Amendment Act (2003) limited the size of the Council of Ministers to 15%.",
        chapter: "Parliamentary System",
        subtopic: "Council of Ministers"
    },
    {
        id: 26,
        question: "Regarding the 'Doctrine of Separation of Powers' in India, consider the following:\n1. It is strictly followed in India as in the USA.\n2. The Supreme Court declared it as part of the Basic Structure.\n3. The Executive exercises some legislative and judicial functions.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "India doesn't have strict separation as the Executive is part of the Legislature (1 incorrect). It is part of the basic structure (2 correct).",
        chapter: "Basic Structure Doctrine",
        subtopic: "Separation of Powers"
    },
    {
        id: 27,
        question: "In the context of recent debates (2024-25), the 'One Nation, One Election' proposal primarily impacts which feature of the Constitution?",
        options: ["(a) Fundamental Rights", "(b) Federalism and Terms of State Assemblies", "(c) Judicial Independence", "(d) Directive Principles"],
        correctAnswer: 1,
        explanation: "Impacts federalism and the fixed/variable terms of State Assemblies.",
        chapter: "Federal System",
        subtopic: "Current Federal Issues"
    },
    {
        id: 28,
        question: "Consider the following statements regarding the amendment of the Constitution:\n1. The provisions related to the election of the President can be amended by a simple majority.\n2. The amendment of the Seventh Schedule requires ratification by half of the states.\n3. A bill to amend the Constitution cannot be returned by the President for reconsideration.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "President election amendment requires special majority + ratification by states (1 incorrect). President must give assent (3 correct).",
        chapter: "Amendment of the Constitution",
        subtopic: "Amendment Process"
    },
    {
        id: 29,
        question: "Which of the following is correct regarding the 'Kitchen Cabinet'?",
        options: ["(a) It is a constitutional body consisting of the Prime Minister and senior ministers.", "(b) It is an informal body invoked for quick decision making.", "(c) It consists only of Cabinet Ministers.", "(d) It is headed by the Cabinet Secretary."],
        correctAnswer: 1,
        explanation: "It's an informal/extra-constitutional circle of trust for the PM.",
        chapter: "Parliamentary System",
        subtopic: "Cabinet Committees"
    },
    {
        id: 30,
        question: "The 'Residuary Powers' in India are vested in the Centre. This feature is:",
        options: ["(a) Similar to the American Constitution.", "(b) Similar to the Canadian Constitution.", "(c) Similar to the Australian Constitution.", "(d) Unique to India."],
        correctAnswer: 1,
        explanation: "Canada vests residuary powers in the Centre. US and Australia vest them in the States.",
        chapter: "Federal System",
        subtopic: "Division of Powers"
    },
    {
        id: 31,
        question: "Consider the following statements regarding the 'Basic Structure' debate:\n1. Justice H.R. Khanna's vote was decisive in the Kesavananda Bharati judgment.\n2. The judgment held that the Preamble is not a part of the Constitution.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 0,
        explanation: "Preamble IS a part of the Constitution (2 incorrect). Justice Khanna's vote was indeed the tie-breaker.",
        chapter: "Basic Structure Doctrine",
        subtopic: "Kesavananda Bharati Case"
    },
    {
        id: 32,
        question: "Which of the following are the 'Unitary features' of the Indian Constitution?\n1. Strong Centre\n2. Destructible States\n3. Emergency Provisions\n4. Bicameralism",
        options: ["(a) 1, 2 and 3 only", "(b) 1, 3 and 4 only", "(c) 2 and 4 only", "(d) 1, 2, 3 and 4"],
        correctAnswer: 0,
        explanation: "Bicameralism (4) is a federal feature. Others are unitary.",
        chapter: "Federal System",
        subtopic: "Unitary Features"
    },
    {
        id: 33,
        question: "In the context of the Parliamentary System, 'Individual Responsibility' means:",
        options: ["(a) A minister is responsible to the Prime Minister.", "(b) A minister holds office during the pleasure of the President.", "(c) A minister is responsible to the Speaker.", "(d) A minister is responsible to his constituency."],
        correctAnswer: 1,
        explanation: "Ministers hold office during the pleasure of the President, which means the President can remove a minister on the advice of the PM.",
        chapter: "Parliamentary System",
        subtopic: "Individual Responsibility"
    },
    {
        id: 34,
        question: "Consider the following statements regarding the '42nd Amendment Act, 1976':\n1. It is known as the 'Mini-Constitution'.\n2. It attempted to limit the power of Judicial Review.\n3. It gave primacy to Directive Principles over Fundamental Rights.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All statements are correct. It brought massive changes and attempted to assert parliamentary supremacy.",
        chapter: "Amendment of the Constitution",
        subtopic: "42nd Amendment"
    },
    {
        id: 35,
        question: "The 'Doctrine of Colourable Legislation' is relevant to:",
        options: ["(a) Article 13 (Judicial Review).", "(b) Article 246 (Distribution of Legislative Powers).", "(c) Article 368 (Amendment Power).", "(d) Article 32 (Writs)."],
        correctAnswer: 1,
        explanation: "It relates to legislative competence - doing indirectly what cannot be done directly under the distribution of powers.",
        chapter: "Federal System",
        subtopic: "Legislative Competence"
    },
    {
        id: 36,
        question: "Which of the following pairs is correctly matched regarding the majority required?\n1. Impeachment of President: Majority of 2/3rd of total membership.\n2. Removal of Vice-President: Effective Majority in Rajya Sabha.\n3. Creation of Legislative Council: Simple Majority in Parliament.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All pairs are correctly matched as per constitutional requirements.",
        chapter: "Amendment of the Constitution",
        subtopic: "Types of Majorities"
    },
    {
        id: 37,
        question: "Consider the following statements regarding the 'Inter-State Council':\n1. It is a permanent constitutional body to support the Federal System.\n2. It is established by the Parliament.\n3. Its recommendations are binding on the Union Government.",
        options: ["(a) 1 only", "(b) 1 and 2 only", "(c) 2 and 3 only", "(d) None of the above"],
        correctAnswer: 3,
        explanation: "It is not 'permanent' in that sense (established by President), recommendations are only advisory.",
        chapter: "Federal System",
        subtopic: "Inter-State Council"
    },
    {
        id: 38,
        question: "The Supreme Court in the Kihoto Hollohan case (1992) upheld the validity of the Tenth Schedule but declared which paragraph as unconstitutional?",
        options: ["(a) The paragraph dealing with 'split'.", "(b) The paragraph dealing with 'merger'.", "(c) The paragraph barring the jurisdiction of courts.", "(d) The paragraph empowering the Speaker."],
        correctAnswer: 2,
        explanation: "Para 7, which barred the jurisdiction of courts, was struck down as judicial review is basic structure.",
        chapter: "Basic Structure Doctrine",
        subtopic: "Kihoto Hollohan Case"
    },
    {
        id: 39,
        question: "Regarding the 'Rajya Sabha' in the Federal System:\n1. It represents the States of the Indian Federation.\n2. It has equal powers with the Lok Sabha in amending the Constitution.\n3. It can authorize the Parliament to create new All-India Services.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All are correct. RS has special federal powers under Art 249 and 312.",
        chapter: "Federal System",
        subtopic: "Role of Rajya Sabha"
    },
    {
        id: 40,
        question: "Which of the following is NOT a part of the 'Basic Structure' declared by the SC?",
        options: ["(a) Secularism", "(b) Sovereignty of Parliament", "(c) Rule of Law", "(d) Principle of Equality"],
        correctAnswer: 1,
        explanation: "In India, the Constitution is supreme, not the Parliament. Sovereignty of Parliament is a British concept.",
        chapter: "Basic Structure Doctrine",
        subtopic: "Basic Features"
    },
    {
        id: 41,
        question: "Consider the following statements regarding the 'Cooperative Federalism':\n1. NITI Aayog is a platform to promote cooperative federalism.\n2. GST Council is a constitutional body reflecting cooperative federalism.\n3. Zonal Councils are constitutional bodies promoting cooperation.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Zonal councils are statutory (created by Act of States Reorganisation 1956), not constitutional.",
        chapter: "Federal System",
        subtopic: "Cooperative Federalism"
    },
    {
        id: 42,
        question: "A 'Constitutional Amendment Bill' lapses if:\n1. The Lok Sabha dissolves while the bill is pending in the Lok Sabha.\n2. The Lok Sabha dissolves after passing the bill, and it is pending in the Rajya Sabha.\n3. There is a deadlock between the two Houses.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Deadlock doesn't apply (no joint sitting), so if it dissolves, pending bills in LS/passed by LS lapse.",
        chapter: "Amendment of the Constitution",
        subtopic: "Lapsing of Bills"
    },
    {
        id: 43,
        question: "Which of the following forms the 'Executive' in the Indian Parliamentary System?\n1. President\n2. Prime Minister\n3. Council of Ministers\n4. Civil Servants",
        options: ["(a) 2 and 3 only", "(b) 1, 2 and 3 only", "(c) 2, 3 and 4 only", "(d) 1, 2, 3 and 4"],
        correctAnswer: 3,
        explanation: "Executive includes both political (Pres, PM, COM) and permanent (Civil Servants) executive.",
        chapter: "Parliamentary System",
        subtopic: "Nature of Executive"
    },
    {
        id: 44,
        question: "The '99th Constitutional Amendment Act' was declared unconstitutional because:",
        options: ["(a) It violated the Fundamental Rights.", "(b) It violated the Independence of Judiciary (Basic Structure).", "(c) It was not ratified by the States.", "(d) It disturbed the Federal Balance."],
        correctAnswer: 1,
        explanation: "NJAC was struck down as it was held to violate the independence of the judiciary, which is part of the basic structure.",
        chapter: "Basic Structure Doctrine",
        subtopic: "Independence of Judiciary"
    },
    {
        id: 45,
        question: "Consider the following statements regarding 'Asymmetric Federalism' in India:\n1. Article 371 to 371-J provides special provisions for certain states.\n2. The Fifth and Sixth Schedules provide for differential administration.\n3. All Union Territories have the same administrative structure.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "UTs have varying structures (3 incorrect). Special provisions and schedules justify asymmetry.",
        chapter: "Federal System",
        subtopic: "Asymmetric Federalism"
    },
    {
        id: 46,
        question: "Which of the following statements regarding the 'Lapsing of Bills' is correct?",
        options: ["(a) A bill passed by both Houses but pending assent of the President lapses on dissolution of Lok Sabha.", "(b) A bill pending in the Rajya Sabha but not passed by the Lok Sabha does not lapse.", "(c) A bill passed by the Lok Sabha but pending in the Rajya Sabha does not lapse.", "(d) All bills pending in Parliament lapse on the prorogation of the House.",],
        correctAnswer: 1,
        explanation: "Pending in RS but not passed by LS doesn't lapse because LS didn't touch it.",
        chapter: "Parliamentary System",
        subtopic: "Lapsing of Bills"
    },
    {
        id: 47,
        question: "With reference to the 'Anti-Defection Law' (10th Schedule), consider the following:\n1. A nominated member is disqualified if he joins any political party after six months.\n2. The Speaker’s decision is final and not subject to Judicial Review.\n3. It applies to both Parliament and State Legislatures.",
        options: ["(a) 1 only", "(b) 1 and 3 only", "(c) 2 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "Speaker's decision IS subject to judicial review (Kihoto case). Others are correct.",
        chapter: "Parliamentary System",
        subtopic: "Anti-Defection Law"
    },
    {
        id: 48,
        question: "Which of the following can be amended by a 'Simple Majority'?\n1. Admission of new states.\n2. Use of official language.\n3. Citizenship provisions.\n4. Election of the President.",
        options: ["(a) 1, 2 and 3 only", "(b) 2, 3 and 4 only", "(c) 1 and 4 only", "(d) 1, 2, 3 and 4"],
        correctAnswer: 0,
        explanation: "Election of President requires special majority + ratification by states (4 incorrect).",
        chapter: "Amendment of the Constitution",
        subtopic: "Simple Majority"
    },
    {
        id: 49,
        question: "The 'Doctrine of Pith and Substance' is applied to solve questions of:",
        options: ["(a) Conflict between Fundamental Rights and DPSP.", "(b) Competency of Legislature (Centre vs State).", "(c) Conflict between two Fundamental Rights.", "(d) Interpretation of the Preamble."],
        correctAnswer: 1,
        explanation: "Pith and substance determines the true nature of a statute to decide which list it belongs to.",
        chapter: "Federal System",
        subtopic: "Division of Powers"
    },
    {
        id: 50,
        question: "Consider the following regarding the 'Office of Profit' controversy:\n1. The term is defined in Article 102 of the Constitution.\n2. Holding an office of profit is a ground for disqualification for MPs.\n3. Parliament (Prevention of Disqualification) Act exempts certain posts.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "The term is NOT defined in the Constitution (1 incorrect). It's interpreted by courts.",
        chapter: "Parliamentary System",
        subtopic: "Office of Profit"
    },
    {
        id: 51,
        question: "Which of the following states have been given special status under Article 371?\n1. Maharashtra\n2. Gujarat\n3. Nagaland\n4. Karnataka",
        options: ["(a) 1 and 2 only", "(b) 3 and 4 only", "(c) 1, 2 and 3 only", "(d) 1, 2, 3 and 4"],
        correctAnswer: 3,
        explanation: "All listed states have special provisions under Various clauses of Article 371.",
        chapter: "Federal System",
        subtopic: "Special Status States"
    },
    {
        id: 52,
        question: "The 'Sarkaria Commission' on Centre-State relations recommended:\n1. Establishment of a permanent Inter-State Council.\n2. Abolition of the office of Governor.\n3. Strengthening of All-India Services.",
        options: ["(a) 1 and 2 only", "(b) 1 and 3 only", "(c) 2 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "Rejected abolition of Governor (2 incorrect). Strongly supported AIS.",
        chapter: "Federal System",
        subtopic: "Sarkaria Commission"
    },
    {
        id: 53,
        question: "Consider the following statements regarding the 'Leader of Opposition':\n1. It is a statutory post.\n2. The leader of the largest opposition party having not less than one-tenth seats is recognized as such.\n3. He enjoys the rank of a Cabinet Minister.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All correct. Statutorily recognized in 1977.",
        chapter: "Parliamentary System",
        subtopic: "Leader of Opposition"
    },
    {
        id: 54,
        question: "In the Minerva Mills case (1980), the Supreme Court struck down:\n1. Section 4 of the 42nd Amendment (Primacy of DPSP over FR).\n2. Section 55 of the 42nd Amendment (Unlimited amending power).",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "Both sections were struck down as they violated the basic structure.",
        chapter: "Basic Structure Doctrine",
        subtopic: "Minerva Mills Case"
    },
    {
        id: 55,
        question: "Which of the following is correct regarding 'Fiscal Federalism' in India?",
        options: ["(a) The State Legislatures have the residuary power of taxation.", "(b) GST is a destination-based tax.", "(c) The Centre cannot levy any cess or surcharge.", "(d) The Finance Commission is a permanent body."],
        correctAnswer: 1,
        explanation: "GST is destination-based. Residuary taxation is with Centre. FC is non-permanent (appointed every 5 years).",
        chapter: "Federal System",
        subtopic: "Fiscal Federalism"
    },
    {
        id: 56,
        question: "The 'Vote on Account' is passed:",
        options: ["(a) After the voting of demands for grants.", "(b) Before the general discussion on the budget.", "(c) After the general discussion but before the voting of demands for grants.", "(d) After the passing of the Appropriation Bill."],
        correctAnswer: 2,
        explanation: "Passed to keep govt running until budget is fully passed.",
        chapter: "Parliamentary System",
        subtopic: "Budget Procedure"
    },
    {
        id: 57,
        question: "Consider the following regarding the 'Motion of Thanks':\n1. It is addressed by the President at the start of the first session after each general election.\n2. It is discussed in the Lok Sabha only.\n3. Defeat of this motion amounts to the defeat of the government.",
        options: ["(a) 1 and 2 only", "(b) 1 and 3 only", "(c) 2 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "Discussed in BOTH houses (2 incorrect). Defeat = dismissal (3 correct).",
        chapter: "Parliamentary System",
        subtopic: "Motions in Parliament"
    },
    {
        id: 58,
        question: "Which of the following features makes the Indian Constitution 'Federal'?\n1. Written Constitution\n2. Rigid Constitution\n3. Independent Judiciary\n4. Supremacy of the Constitution",
        options: ["(a) 1 and 3 only", "(b) 2 and 4 only", "(c) 1, 2 and 3 only", "(d) 1, 2, 3 and 4"],
        correctAnswer: 3,
        explanation: "All are essential federal features.",
        chapter: "Federal System",
        subtopic: "Federal Features"
    },
    {
        id: 59,
        question: "In the context of the 'Parliamentary System', the President is:",
        options: ["(a) The Real Executive.", "(b) The Nominal Executive.", "(c) The Head of Government.", "(d) Responsible to the Parliament."],
        correctAnswer: 1,
        explanation: "President is De-jure (nominal) head. PM is De-facto (real) head.",
        chapter: "Parliamentary System",
        subtopic: "Head of State"
    },
    {
        id: 60,
        question: "Regarding the 'Tenth Schedule' (Anti-Defection Law):\n1. It was added by the 52nd Amendment Act, 1985.\n2. A member is disqualified if he voluntarily gives up the membership of his political party.\n3. The 91st Amendment Act removed the exception of 'split' (one-third members).",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2, 3"],
        correctAnswer: 3,
        explanation: "All are correct. Split exception was often misused and thus removed.",
        chapter: "Parliamentary System",
        subtopic: "Anti-Defection Law"
    },
    {
        id: 61,
        question: "Consider the following statements regarding 'Administrative Relations' between Centre and States:\n1. The Centre can give directions to the States even on subjects in the State List.\n2. Non-compliance with such directions can lead to the imposition of President's Rule.\n3. The Parliament can provide for the adjudication of any dispute with respect to the use, distribution or control of waters of any inter-state river.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All correct. Directions can be given for construction/maintenance of communications, railways, etc. Waters dispute is Art 262.",
        chapter: "Centre-State Relations",
        subtopic: "Administrative Relations"
    },
    {
        id: 62,
        question: "Which of the following matters are exempted from the 'Full Faith and Credit' clause (Article 261)?",
        options: ["(a) Public Acts", "(b) Judicial Proceedings", "(c) Criminal Judgments of a State Court", "(d) Records of the Government"],
        correctAnswer: 2,
        explanation: "The clause applies to civil judgments, not criminal ones. Criminal law of one state is not enforced in another.",
        chapter: "Inter-State Relations",
        subtopic: "Full Faith & Credit"
    },
    {
        id: 63,
        question: "Under 'National Emergency' (Article 352), consider the following:\n1. It can be declared for the whole of India or only a part of it.\n2. The President can declare it only on the written recommendation of the Cabinet.\n3. It must be approved by both Houses of Parliament within two months.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Must be approved within ONE month (3 incorrect). Cabinet recommendation made mandatory by 44th Amendment.",
        chapter: "Emergency Provisions",
        subtopic: "National Emergency"
    },
    {
        id: 64,
        question: "When a 'National Emergency' is in operation, which Fundamental Rights CANNOT be suspended under Article 359?",
        options: ["(a) Articles 19 and 20", "(b) Articles 20 and 21", "(c) Articles 21 and 22", "(d) Articles 14 and 19"],
        correctAnswer: 1,
        explanation: "The 44th Amendment ensured that the right to protection in respect of conviction (Art 20) and the right to life/liberty (Art 21) cannot be suspended.",
        chapter: "Emergency Provisions",
        subtopic: "Impact on Fundamental Rights"
    },
    {
        id: 65,
        question: "Consider the following regarding 'President's Rule' (Article 356):\n1. It can be imposed if a state fails to comply with directions from the Centre (Article 365).\n2. It requires approval of Parliament within two months.\n3. It can be extended for a maximum period of five years.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Maximum period is THREE years (3 incorrect). Extended beyond 1 year only under specific conditions.",
        chapter: "Emergency Provisions",
        subtopic: "President's Rule"
    },
    {
        id: 66,
        question: "Regarding 'Financial Emergency' (Article 360):\n1. It has never been declared in India so far.\n2. During its operation, the President can direct the reduction of salaries of SC and HC judges.\n3. It remains in force indefinitely until revoked by the President.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All are correct. Approval is needed within 2 months, but no repeated approval required (unlike National Emergency).",
        chapter: "Emergency Provisions",
        subtopic: "Financial Emergency"
    },
    {
        id: 67,
        question: "Which of the following taxes are levied by the Centre but collected and appropriated by the States (Article 268)?",
        options: ["(a) Income Tax", "(b) Corporate Tax", "(c) Stamp Duties on Bills of Exchange", "(d) Service Tax"],
        correctAnswer: 2,
        explanation: "Stamp duties and duties of excise on medicinal/toilet preparations are under Art 268.",
        chapter: "Centre-State Relations",
        subtopic: "Financial Relations"
    },
    {
        id: 68,
        question: "In the context of 'Inter-State Water Disputes', consider the following:\n1. The Supreme Court has original jurisdiction over such disputes.\n2. Parliament can bar the jurisdiction of any court including the Supreme Court.\n3. The decisions of the Water Disputes Tribunal are binding.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "SC's jurisdiction is barred by law under Art 262 (1 incorrect).",
        chapter: "Inter-State Relations",
        subtopic: "Water Disputes"
    },
    {
        id: 69,
        question: "Consider the following statements regarding the 'Zonal Councils':\n1. They are established under the States Reorganisation Act, 1956.\n2. The Prime Minister is the Chairman of all Zonal Councils.\n3. Each Zonal Council includes the Chief Ministers of the states in the zone.",
        options: ["(a) 1 and 2 only", "(b) 1 and 3 only", "(c) 2 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "Union Home Minister is the Chairman, not PM (2 incorrect).",
        chapter: "Inter-State Relations",
        subtopic: "Zonal Councils"
    },
    {
        id: 70,
        question: "Which of the following is correct regarding 'Grants-in-aid' to States?",
        options: ["(a) Statutory grants are given under Article 282.", "(b) Discretionary grants are given under Article 275.", "(c) Statutory grants are given on the recommendation of the Finance Commission.", "(d) Discretionary grants are mandatory for the Centre to provide."],
        correctAnswer: 2,
        explanation: "Statutory (Art 275) - FC recommendation. Discretionary (Art 282) - at Centre's will.",
        chapter: "Centre-State Relations",
        subtopic: "Financial Relations"
    },
    {
        id: 71,
        question: "Regarding 'National Emergency' and 'Fundamental Rights' (Article 19):\n1. Article 19 is automatically suspended when emergency is declared on grounds of 'internal disturbance'.\n2. Article 19 is automatically suspended when emergency is declared on grounds of 'war' or 'external aggression'.\n3. The suspension of Article 19 continues for the entire duration of the emergency.",
        options: ["(a) 1 and 3 only", "(b) 2 and 3 only", "(c) 1 and 2 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "Suspension doesn't happen for internal disturbance (1 incorrect). It happens for war/external aggression (Art 358).",
        chapter: "Emergency Provisions",
        subtopic: "Article 358 vs 359"
    },
    {
        id: 72,
        question: "Which of the following commissions recommended that the residuary powers should be transferred from the Union List to the Concurrent List?",
        options: ["(a) Sarkaria Commission", "(b) Rajamannar Committee", "(c) Punchhi Commission", "(d) Santhanam Committee"],
        correctAnswer: 1,
        explanation: "The Rajamannar committee (appointed by TN govt) gave recommendations favoring states heavily.",
        chapter: "Centre-State Relations",
        subtopic: "Center-State Commissions"
    },
    {
        id: 73,
        question: "Consider the following regarding the 'Distribution of Legislative Powers':\n1. The Parliament has power to make laws on any part of the territory of India for subjects in the State List during a National Emergency.\n2. A state law on a Concurrent subject repugnant to a Central law is void to the extent of repugnancy.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "Both are basic tenets of legislative relations under Art 250 and 254.",
        chapter: "Centre-State Relations",
        subtopic: "Legislative Relations"
    },
    {
        id: 74,
        question: "In the context of the 'North-Eastern Council', which of the following states is NOT an original member but joined later (2002)?",
        options: ["(a) Assam", "(b) Sikkim", "(c) Arunachal Pradesh", "(d) Tripura"],
        correctAnswer: 1,
        explanation: "Sikkim was added as the 8th member in 2002.",
        chapter: "Inter-State Relations",
        subtopic: "Regional Councils"
    },
    {
        id: 75,
        question: "For a 'National Emergency' to be approved by the Parliament, what majority is required?",
        options: ["(a) Simple majority in both houses.", "(b) Special majority in both houses.", "(c) Special majority in Lok Sabha and Simple majority in Rajya Sabha.", "(d) Simple majority in Lok Sabha and Special majority in Rajya Sabha."],
        correctAnswer: 1,
        explanation: "The 44th Amendment changed it from simple to special majority to prevent misuse.",
        chapter: "Emergency Provisions",
        subtopic: "Approval Process"
    },
    {
        id: 76,
        question: "Consider the following regarding 'Delegation of Powers' between Centre and States:\n1. The President can delegate a function of the Union to a State with the state's consent.\n2. The Governor can delegate a state function to the Union with the Centre's consent.\n3. The Parliament can delegate a Union function to a state without the state's consent.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "Statement 3 is correct - Parliament can do it via law without consent (Art 258(2)). Presidency/Governor needs consent (Art 258(1)/258A).",
        chapter: "Centre-State Relations",
        subtopic: "Administrative Relations"
    },
    {
        id: 77,
        question: "Which of the following is correct regarding 'All-India Services' (AIS)?",
        options: ["(a) They are created by the President.", "(b) They violate the principle of federalism but are supported for national integration.", "(c) The members are recruited and trained by the State Governments.", "(d) They can only be abolished by a Constitutional Amendment."],
        correctAnswer: 1,
        explanation: "AIS are seen as a unitary feature but necessary for unity and efficient administration.",
        chapter: "Centre-State Relations",
        subtopic: "Unitary Features"
    },
    {
        id: 78,
        question: "Under Article 249, the Parliament can legislate on a State subject in 'National Interest' if:",
        options: ["(a) The President issues an ordinance.", "(b) The Rajya Sabha passes a resolution supported by 2/3rd members present and voting.", "(c) Two or more states request the Parliament to do so.", "(d) The Supreme Court gives a directive."],
        correctAnswer: 1,
        explanation: "This is a special power of the Rajya Sabha reflecting its federal character.",
        chapter: "Centre-State Relations",
        subtopic: "Legislative Relations"
    },
    {
        id: 79,
        question: "Consider the following regarding 'President's Rule':\n1. It must be approved by Parliament within two months by a simple majority.\n2. The President can dismiss the State Council of Ministers.\n3. The State Assembly is always dissolved immediately upon imposition.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Assembly can be suspended or dissolved (3 incorrect).",
        chapter: "Emergency Provisions",
        subtopic: "President's Rule"
    },
    {
        id: 80,
        question: "Which of the following is NOT a consequence of a 'Financial Emergency'?",
        options: ["(a) Suspension of all Fundamental Rights.", "(b) Reduction of salaries and allowances of state employees.", "(c) Reservation of state money bills for the President's consideration.", "(d) Reduction of salaries of Supreme Court judges."],
        correctAnswer: 0,
        explanation: "FRs are NOT suspended during a Financial Emergency.",
        chapter: "Emergency Provisions",
        subtopic: "Financial Emergency"
    },
    {
        id: 81,
        question: "The 'Punchhi Commission' (2007) was appointed to look into:",
        options: ["(a) Banking Reforms", "(b) Centre-State Relations", "(c) Police Reforms", "(d) Electoral Reforms"],
        correctAnswer: 1,
        explanation: "Successor to the Sarkaria commission for reviewing Centre-State relations in the new era.",
        chapter: "Centre-State Relations",
        subtopic: "Center-State Commissions"
    },
    {
        id: 82,
        question: "Consider the following statements regarding 'Territorial Jurisdiction':\n1. Parliament can make laws for the whole or any part of India.\n2. State legislature can make laws for the whole or any part of the state.\n3. The Parliament alone can make extra-territorial laws.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All correct. States cannot make extra-territorial laws unless there is a 'territorial nexus'.",
        chapter: "Centre-State Relations",
        subtopic: "Legislative Relations"
    },
    {
        id: 83,
        question: "Which of the following is correct regarding 'Inter-State Trade and Commerce' (Part XIII)?",
        options: ["(a) Trade throughout India is free from all restrictions.", "(b) Parliament can impose restrictions in public interest.", "(c) States cannot impose any tax on goods from other states.", "(d) All disputes are settled by the Inter-State Council."],
        correctAnswer: 1,
        explanation: "Art 301 says free trade, but Art 302 allows Parliament to impose reasonable restrictions.",
        chapter: "Inter-State Relations",
        subtopic: "Trade & Commerce"
    },
    {
        id: 84,
        question: "When 'President's Rule' is in operation, the laws made by the Parliament for that state:",
        options: ["(a) Become inoperative immediately when President's rule is revoked.", "(b) Continue to be operative even after President's rule is revoked.", "(c) Can be repealed only by the Parliament.", "(d) Apply only to the subjects in the Union List."],
        correctAnswer: 1,
        explanation: "The laws continue until the state legislature repeals or amends them.",
        chapter: "Emergency Provisions",
        subtopic: "President's Rule"
    },
    {
        id: 85,
        question: "Consider the following regarding the 'GST Council':\n1. It is a statutory body chaired by the Union Finance Minister.\n2. States have two-third weightage in the voting power.\n3. Every decision requires a majority of not less than three-fourths of weighted votes.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "It is a CONSTITUTIONAL body (Art 279A), not statutory (1 incorrect).",
        chapter: "Centre-State Relations",
        subtopic: "Financial Relations"
    },
    {
        id: 86,
        question: "In the context of 'Emergencies', the term 'Cabinet' was inserted in the Constitution by which amendment?",
        options: ["(a) 42nd Amendment", "(b) 44th Amendment", "(c) 52nd Amendment", "(d) 1st Amendment"],
        correctAnswer: 1,
        explanation: "The word was inserted in Art 352 to ensure collective written advice for emergency.",
        chapter: "Emergency Provisions",
        subtopic: "Constitutional Safety"
    },
    {
        id: 87,
        question: "Which of the following is a 'Direct Tax' in India?",
        options: ["(a) GST", "(b) Customs Duty", "(c) Professional Tax", "(d) Excise Duty"],
        professional_tax: 2,
        correctAnswer: 2,
        explanation: "Professional tax is a direct tax levied by states. Others are indirect.",
        chapter: "Centre-State Relations",
        subtopic: "Financial Relations"
    },
    {
        id: 88,
        question: "Consider the following regarding the 'Finance Commission':\n1. It is a quasi-judicial body.\n2. It determines the shares of states in the net proceeds of taxes.\n3. It advises the President on the principles of grants-in-aid.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All are primary functions and nature of the Finance Commission.",
        chapter: "Centre-State Relations",
        subtopic: "Finance Commission"
    },
    {
        id: 89,
        question: "A 'National Emergency' continues to be in force for how long after the Parliament approves it?",
        options: ["(a) 6 months", "(b) 1 year", "(c) Indefinitely", "(d) 2 years"],
        correctAnswer: 0,
        explanation: "Must be re-approved every 6 months for indefinite continuation.",
        chapter: "Emergency Provisions",
        subtopic: "Duration"
    },
    {
        id: 90,
        question: "The power of Parliament to legislate with respect to a matter in the State List in 'National Interest' (Art 249) remains in force for how long?",
        options: ["(a) 6 months", "(b) 1 year", "(c) Until revoked", "(d) 2 years"],
        correctAnswer: 1,
        explanation: "The resolution remains in force for 1 year, but can be renewed indefinitely.",
        chapter: "Centre-State Relations",
        subtopic: "Legislative Relations"
    },
    {
        id: 91,
        question: "Which of the following factors led to the adoption of a 'Strong Centre' in the Indian Constitution?\n1. Communal riots during partition.\n2. Presence of a large number of Princely States.\n3. Need for rapid economic development.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "Historical context and development needs both dictated a strong unifying centre.",
        chapter: "Federal System",
        subtopic: "Nature of Union"
    },
    {
        id: 92,
        question: "Consider the following regarding the 'Borrowing Powers':\n1. The Union can borrow both within India and from abroad.\n2. The States can borrow ONLY within India.\n3. States cannot raise a fresh loan without Centre's consent if they are already in debt to the Centre.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All correctly describe the constitutional limits on borrowing (Art 292/293).",
        chapter: "Centre-State Relations",
        subtopic: "Financial Relations"
    },
    {
        id: 93,
        question: "Which of the following bodies is NOT established by the Constitution?",
        options: ["(a) Inter-State Council", "(b) Finance Commission", "(c) Zonal Council", "(d) GST Council"],
        correctAnswer: 2,
        explanation: "Zonal councils are statutory.",
        chapter: "Inter-State Relations",
        subtopic: "Formal Bodies"
    },
    {
        id: 94,
        question: "In the context of 'Emergency', the 'Proclamation of Emergency' is subject to Judicial Review. This was held in:",
        options: ["(a) Minerva Mills Case", "(b) Bommai Case", "(c) Waman Rao Case", "(d) Golaknath Case"],
        correctAnswer: 0,
        explanation: "Minerva Mills clarified that the satisfaction of the President is not beyond judicial review.",
        chapter: "Emergency Provisions",
        subtopic: "Judicial Review"
    },
    {
        id: 95,
        question: "Regarding 'Concurrent List' subjects, if there is a conflict between Centre and State law, and the State law was reserved for and received President's assent:",
        options: ["(a) Central law prevails in that state.", "(b) State law prevails in that state.", "(c) Both laws are void.", "(d) The Governor decides which law prevails."],
        correctAnswer: 1,
        explanation: "This is an exception where state law prevails (Art 254(2)), but Parliament can still override it later.",
        chapter: "Centre-State Relations",
        subtopic: "Repugnancy"
    },
    {
        id: 96,
        question: "Which of the following entries are in the 'Concurrent List' (after 42nd Amendment)?\n1. Education\n2. Forests\n3. Protection of Wild Animals\n4. Population Control",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1, 2 and 3 only", "(d) 1, 2, 3 and 4"],
        correctAnswer: 3,
        explanation: "The 42nd Amendment moved these 5 subjects (including Weights & Measures) from state to concurrent list.",
        chapter: "Centre-State Relations",
        subtopic: "Subject Lists"
    },
    {
        id: 97,
        question: "Consider the following regarding the 'Unified Judiciary':\n1. High Courts and the Supreme Court enforce both Central and State laws.\n2. High Court judges are appointed by the Governor in consultation with the CJI.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 0,
        explanation: "High court judges are appointed by the PRESIDENT (2 incorrect).",
        chapter: "Federal System",
        subtopic: "Unified Judiciary"
    },
    {
        id: 98,
        question: "Which of the following acts as the 'Cushion' in the Federal System during times of stress?",
        options: ["(a) All India Services", "(b) Governor", "(c) Rajya Sabha", "(d) Inter-State Council"],
        correctAnswer: 1,
        explanation: "The Governor is often described as the bridge/cushion between centre and state.",
        chapter: "Centre-State Relations",
        subtopic: "Governor's Role"
    },
    {
        id: 99,
        question: "Regarding 'National Emergency', the 44th Amendment Act (1978):\n1. Replaced 'internal disturbance' with 'armed rebellion'.\n2. Mandatory approval within 1 month instead of 2 months.\n3. Introduced periodic parliamentary approval every 6 months.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All were safeguards introduced to prevent misuse like in 1975.",
        chapter: "Emergency Provisions",
        subtopic: "44th Amendment"
    },
    {
        id: 100,
        question: "The power to 'grant pardons' under Article 72 and 161 is a:",
        options: ["(a) Judicial power of the Executive.", "(b) Discretionary power of the President/Governor.", "(c) Power exercisable without Cabinet advice.", "(d) Power subject to judicial review on merits of the case."],
        correctAnswer: 0,
        explanation: "It is an executive power of judicial nature. It's NOT discretionary (must follow advice) and judicial review is limited to the process, not merits.",
        chapter: "Executives",
        subtopic: "Pardoning Powers"
    }
];

export const PAPER_2_QUESTIONS: ModuleMCQ[] = [
    {
        id: 1,
        question: "Consider the following statements regarding the 'Election of the President':\n1. The nominated members of either House of Parliament do not participate.\n2. The elected members of the legislative assemblies of Union Territories of Delhi and Puducherry participate.\n3. In case of dissolution of a state assembly, the elected members of that state can still vote in the presidential election.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Elected members of dissolved assembly cannot vote (3 incorrect).",
        chapter: "President",
        subtopic: "Election Procedure"
    },
    {
        id: 2,
        question: "With reference to the 'Governor' of a State, consider the following statements:\n1. The same person can be appointed as Governor for two or more states.\n2. The Governor holds office during the pleasure of the President.\n3. The Constitution provides for the grounds of removal of the Governor by the President.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Constitution DOES NOT provide grounds for removal of Governor (3 incorrect).",
        chapter: "Governor",
        subtopic: "Appointment & Tenure"
    },
    {
        id: 3,
        question: "Consider the following statements regarding the 'Vice-President of India':\n1. He is elected by the members of an electoral college consisting of both elected and nominated members of Parliament.\n2. He can be removed by a resolution of the Rajya Sabha passed by a special majority and agreed to by the Lok Sabha.\n3. Like the President, he is also the Supreme Commander of the Armed Forces.",
        options: ["(a) 1 and 2 only", "(b) 1 only", "(c) 2 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "Removal needs 'Effective Majority' in RS and agreement by LS (2 incorrect). Not supreme commander (3 incorrect).",
        chapter: "Vice-President",
        subtopic: "Removal & Duties"
    },
    {
        id: 4,
        question: "Which of the following powers is NOT enjoyed by the Governor while a National Emergency is in operation?",
        options: ["(a) Executive power of the state.", "(b) Power to issue ordinances.", "(c) Power to dissolve the state assembly without Central advice.", "(d) Power to grant pardons for state laws."],
        correctAnswer: 2,
        explanation: "Governor's powers are subject to the President's directions during emergency.",
        chapter: "Governor",
        subtopic: "Emergency Powers"
    },
    {
        id: 5,
        question: "The 'Ordinance Making Power' of the Governor (Article 213):\n1. Is a discretionary power of the Governor.\n2. Can be exercised even when the State Legislature is in session.\n3. Has the same force and effect as an Act of the State Legislature.",
        options: ["(a) 1 and 2 only", "(b) 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "Not discretionary (must follow advice), can only be used when legislature is NOT in session.",
        chapter: "Governor",
        subtopic: "Ordinance Power"
    },
    {
        id: 6,
        question: "Consider the following statements regarding the 'Pardoning Power' of the President vs Governor:\n1. The President can pardon sentences of death, while the Governor cannot.\n2. Both can pardon sentences inflicted by a Court Martial.\n3. The Governor can pardon death sentences if the state law provides for it.",
        options: ["(a) 1 only", "(b) 2 and 3 only", "(c) 1 and 2 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Governor cannot pardon death sentence (can only suspend/commute). Court martial pardons are exclusive to the President.",
        chapter: "Executives",
        subtopic: "Pardoning Powers"
    },
    {
        id: 7,
        question: "Who among the following handles the duties of the President when both the President and the Vice-President are unavailable?",
        options: ["(a) Prime Minister", "(b) Speaker of Lok Sabha", "(c) Chief Justice of India", "(d) Senior-most Governor"],
        correctAnswer: 2,
        explanation: "As per the President (Discharge of Functions) Act, 1969.",
        chapter: "President",
        subtopic: "Vacancy"
    },
    {
        id: 8,
        question: "Regarding the 'Discretionary Powers' of the Governor:\n1. Reservation of a bill for the consideration of the President.\n2. Recommendation for the imposition of President's Rule.\n3. Dismissal of the Council of Ministers when it loses the majority support.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All are situational or constitutional discretionary powers of the Governor.",
        chapter: "Governor",
        subtopic: "Discretionary Powers"
    },
    {
        id: 9,
        question: "The President's 'Veto Power' over State Legislation:\n1. The President can return a state bill for reconsideration once.\n2. If the state passes it again, the President is bound to give his assent.\n3. The President can withhold assent to a state bill indefinitely.",
        options: ["(a) 1 and 2 only", "(b) 1 and 3 only", "(c) 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 2,
        explanation: "President NOT bound even if passed again by state (2 incorrect). Pocket veto is possible (3 correct).",
        chapter: "President",
        subtopic: "Veto Power"
    },
    {
        id: 10,
        question: "Consider the following regarding the 'Impeachment of the President':\n1. It can be initiated by either House of Parliament.\n2. The charges must be signed by one-fourth members of the House.\n3. The resolution must be passed by a majority of two-thirds of the members present and voting.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Needs 2/3rd of TOTAL membership, not just present and voting (3 incorrect).",
        chapter: "President",
        subtopic: "Impeachment"
    },
    {
        id: 11,
        question: "In the case of 'Hung Assembly', the Governor's choice of Chief Minister is a:",
        options: ["(a) Constitutional Discretion", "(b) Situational Discretion", "(c) Mandatory Duty", "(d) Power subject to PM's advice"],
        correctAnswer: 1,
        explanation: "When no party has a clear majority, the Governor uses situational discretion.",
        chapter: "Governor",
        subtopic: "Situational Discretion"
    },
    {
        id: 12,
        question: "Which of the following is correct regarding the 'Qualifications' for the President?\n1. He should be a citizen of India.\n2. He should have completed 35 years of age.\n3. He should be qualified for election as a member of the Rajya Sabha.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Must be qualified for LOK SABHA membership (3 incorrect).",
        chapter: "President",
        subtopic: "Qualifications"
    },
    {
        id: 13,
        question: "The Governor can 'reserve' a bill for the President. In which of the following cases is it MANDATORY for the Governor to do so?",
        options: ["(a) If the bill is against the DPSP.", "(b) If the bill endangers the position of the State High Court.", "(c) If the bill is against the national interest.", "(d) If the bill deals with compulsory acquisition of property."],
        correctAnswer: 1,
        explanation: "Mandatory only if it endangers the position of the High Court.",
        chapter: "Governor",
        subtopic: "Bill Reservation"
    },
    {
        id: 14,
        question: "Consider the following statements regarding the 'Oath' of the President:\n1. It is administered by the Vice-President of India.\n2. The President swears to preserve, protect and defend the Constitution.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 1,
        explanation: "Administered by the Chief Justice of India (1 incorrect).",
        chapter: "President",
        subtopic: "Oath"
    },
    {
        id: 15,
        question: "Whose prior recommendation is required to introduce a 'Money Bill' in the State Legislative Assembly?",
        options: ["(a) Speaker", "(b) Chief Minister", "(c) Governor", "(d) President"],
        correctAnswer: 2,
        explanation: "Similar to Center where President's recommendation is needed, at state level Governor's is needed.",
        chapter: "Governor",
        subtopic: "Legislative Powers"
    },
    {
        id: 16,
        question: "Which of the following is NOT an 'Executive Power' of the President?",
        options: ["(a) Appointment of the Attorney General of India.", "(b) Appointment of the Comptroller and Auditor General.", "(c) Summoning and Proroguing the Houses of Parliament.", "(d) Appointment of the members of the Finance Commission."],
        correctAnswer: 2,
        explanation: "Summoning/Proroguing are LEGISLATIVE powers, though exercised by the executive head.",
        chapter: "President",
        subtopic: "Executive vs Legislative"
    },
    {
        id: 17,
        question: "Regarding the 'Tenure' of the Vice-President:\n1. He holds office for a term of five years.\n2. He can resign at any time by addressing the resignation letter to the Vice-President (his own office).",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 0,
        explanation: "Resignation is addressed to the PRESIDENT (2 incorrect).",
        chapter: "Vice-President",
        subtopic: "Tenure"
    },
    {
        id: 18,
        question: "The Governor 'nominates' how many members to the State Legislative Council?",
        options: ["(a) 1/12th of total members.", "(b) 1/6th of total members.", "(c) 2 members if Anglo-Indian (now abolished).", "(d) 10 members."],
        correctAnswer: 1,
        explanation: "1/6th members are nominated from fields of literature, science, art, cooperative movement, and social service.",
        chapter: "Governor",
        subtopic: "Legislative Powers"
    },
    {
        id: 19,
        question: "Consider the following statements regarding 'Presidential Ordinances':\n1. It can be issued only when both the Houses of Parliament are not in session.\n2. It can be withdrawn by the President at any time.\n3. It cannot be used to amend the Constitution.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "Can be issued if EITHER house is not in session (1 incorrect). Amending constitution via ordinance is prohibited (3 correct).",
        chapter: "President",
        subtopic: "Ordinance Power"
    },
    {
        id: 20,
        question: "Who among the following appoints the 'State Election Commissioner'?",
        options: ["(a) President of India", "(b) Governor of the State", "(c) Chief Justice of High Court", "(d) Chief Minister"],
        correctAnswer: 1,
        explanation: "Appointed by Governor, but can be removed only like a judge of HC.",
        chapter: "Governor",
        subtopic: "Appointments"
    },
    {
        id: 21,
        question: "With reference to the 'Vice-President' as Ex-officio Chairman of Rajya Sabha:\n1. He has no right to vote in the first instance.\n2. He can cast a vote in case of an equality of votes.\n3. He cannot preside over the house when a resolution for his removal is under consideration.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All are correct regarding his role as Chairman.",
        chapter: "Vice-President",
        subtopic: "Chairman of Rajya Sabha"
    },
    {
        id: 22,
        question: "The 'Contingency Fund of India' is placed at the disposal of:",
        options: ["(a) Prime Minister", "(b) Finance Minister", "(c) President", "(d) Controller General of Accounts"],
        correctAnswer: 2,
        explanation: "President holds it to meet unforeseen expenditure pending parliamentary approval.",
        chapter: "President",
        subtopic: "Financial Powers"
    },
    {
        id: 23,
        question: "Consider the following regarding the 'Governor's address' to the state legislature:\n1. He addresses the first session after each general election.\n2. He addresses the first session of each year.\n3. It is a constitutional requirement.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All correct. Similar to the President's address to Parliament.",
        chapter: "Governor",
        subtopic: "Legislative Powers"
    },
    {
        id: 24,
        question: "Which of the following is NOT correctly matched regarding the President's 'Vetoes'?",
        options: ["(a) Absolute Veto – Power to say 'no' to a bill passed by Parliament.", "(b) Suspensive Veto – Power to return a bill for reconsideration.", "(c) Qualified Veto – Power to veto which can be overridden by a higher majority.", "(d) Pocket Veto – Power to keep the bill pending for an indefinite period."],
        correctAnswer: 2,
        explanation: "Qualified veto is NOT possessed by the Indian President; it's a feature of the US President.",
        chapter: "President",
        subtopic: "Veto Power"
    },
    {
        id: 25,
        question: "Who decides the 'Election Disputes' related to the President and Vice-President?",
        options: ["(a) Election Commission of India", "(b) Supreme Court of India", "(c) Parliament", "(d) Attorney General"],
        correctAnswer: 1,
        explanation: "Supreme Court has exclusive jurisdiction in this matter.",
        chapter: "Executives",
        subtopic: "Election Disputes"
    },
    {
        id: 26,
        question: "Regarding the 'Removal of the Governor':\n1. The Governor can be removed by the President at any time without assigned reasons.\n2. The Supreme Court in BP Singhal case (2010) held that the President's pleasure is not subject to judicial review.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 0,
        explanation: "BP Singhal case held it IS subject to limited judicial review (2 incorrect).",
        chapter: "Governor",
        subtopic: "Tenure"
    },
    {
        id: 27,
        question: "The 'Military Powers' of the President include:\n1. Appointing the chiefs of Army, Navy and Air Force.\n2. Declaring war or concluding peace, subject to approval of Parliament.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "Both are correct. He is the supreme commander but acts on advice.",
        chapter: "President",
        subtopic: "Military Powers"
    },
    {
        id: 28,
        question: "Consider the following regarding the 'Vice-President's vacancy':\n1. If the office becomes vacant due to resignation, removal or death, the Deputy Chairman of Rajya Sabha becomes the Vice-President.\n2. An election to fill the vacancy should be held as soon as possible after the occurrence of the vacancy.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 1,
        explanation: "No provision for 'Acting Vice President' (1 incorrect). Only election is held.",
        chapter: "Vice-President",
        subtopic: "Vacancy"
    },
    {
        id: 29,
        question: "Under which article can the President 'seek advice' from the Supreme Court?",
        options: ["(a) Article 123", "(b) Article 143", "(c) Article 352", "(d) Article 72"],
        correctAnswer: 1,
        explanation: "Art 143 deals with the Advisory jurisdiction of the SC.",
        chapter: "President",
        subtopic: "Judicial Powers"
    },
    {
        id: 30,
        question: "The Governor can 'pardon' for an offence against any law relating to a matter to which the 'executive power of the state' extends. This includes:",
        options: ["(a) Death sentences", "(b) Court martial sentences", "(c) Sentences for violation of state laws", "(d) Sentences for violation of central laws"],
        correctAnswer: 2,
        explanation: "Governor's power is limited to state laws and excludes death/court martial sentences.",
        chapter: "Governor",
        subtopic: "Pardoning Power"
    },
    {
        id: 31,
        question: "Consider the following statements regarding the 'Executive Power' of the Union:\n1. It is vested in the President of India.\n2. All executive actions of the Government of India are taken in his name.\n3. He can exercise it directly or through officers subordinate to him.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All are correct as per Article 53 and 77.",
        chapter: "President",
        subtopic: "Executive Nature"
    },
    {
        id: 32,
        question: "Whose assent is required for the 'creation or abolition' of a Legislative Council in a state?",
        options: ["(a) Governor", "(b) President", "(c) Chief Minister", "(d) Speaker"],
        correctAnswer: 1,
        explanation: "Since it's done by an Act of Parliament, the President's assent is required.",
        chapter: "Governor",
        subtopic: "Legislative Role"
    },
    {
        id: 33,
        question: "Regarding the 'Salary and Allowances' of the President:\n1. They are determined by the Parliament.\n2. They cannot be diminished during his term of office.\n3. They are charged on the Contingency Fund of India.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Charged on the CONSOLIDATED Fund of India (3 incorrect).",
        chapter: "President",
        subtopic: "Privileges"
    },
    {
        id: 34,
        question: "The Governor of which state has 'special responsibility' with respect to law and order and in the discharge of his functions in relation thereto?",
        options: ["(a) Assam", "(b) Nagaland", "(c) Manipur", "(d) Sikkim"],
        correctAnswer: 1,
        explanation: "Nagaland (Art 371A) gives special responsibility to the Governor for law and order.",
        chapter: "Governor",
        subtopic: "Special Responsibilities"
    },
    {
        id: 35,
        question: "Consider the following regarding the 'Term' of the President:\n1. He can be re-elected for any number of terms.\n2. In case of election delay, he can continue beyond five years until his successor enters upon his office.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "Both are correct. US limited to 2 terms, India has no such limit.",
        chapter: "President",
        subtopic: "Tenure"
    },
    {
        id: 36,
        question: "Who among the following 'discharges the functions' of the Governor in case of a vacancy?",
        options: ["(a) Chief Minister", "(b) Speaker of Assembly", "(c) Chief Justice of High Court", "(d) President appoints an administrator"],
        correctAnswer: 2,
        explanation: "Usually the CJ of High Court discharges the functions until a new Governor is appointed.",
        chapter: "Governor",
        subtopic: "Vacancy"
    },
    {
        id: 37,
        question: "The 'Diplomatic Powers' of the President include:\n1. International treaties and agreements are negotiated and concluded on behalf of the President.\n2. He represents India in international forums and affairs.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "Both are correct. Treaties must be approved by Parliament though.",
        chapter: "President",
        subtopic: "Diplomatic Powers"
    },
    {
        id: 38,
        question: "Which of the following is correct regarding the 'Vice-President's oath'?\n1. Administered by the President of India.\n2. He swears to be faithful to the Constitution and to faithfully discharge the duties of his office.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "Both are correct.",
        chapter: "Vice-President",
        subtopic: "Oath"
    },
    {
        id: 39,
        question: "The Governor can 'promulgate' an ordinance only when:\n1. The State Assembly is not in session.\n2. The Legislative Council (if exists) is not in session.\n3. He is satisfied that circumstances exist which render it necessary.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All are conditions for ordinance power.",
        chapter: "Governor",
        subtopic: "Ordinance Power"
    },
    {
        id: 40,
        question: "Under the 'Pocket Veto', the President of India keeps the bill pending for an indefinite period. Why is it called 'Pocket Veto'?",
        options: ["(a) Because he keeps it in his pocket.", "(b) Because the Constitution does not prescribe any time limit for his action.", "(c) Because it's a secret veto.", "(d) Because it's only used for private member bills."],
        correctAnswer: 1,
        explanation: "Unlike US where he must act in 10 days, Indian Constitution doesn't specify a time frame.",
        chapter: "President",
        subtopic: "Veto Power"
    },
    {
        id: 41,
        question: "Which of the following bodies is NOT appointed by the President?",
        options: ["(a) Inter-State Council", "(b) Finance Commission", "(c) Planning Commission (now NITI Aayog)", "(d) Scheduled Castes Commission"],
        correctAnswer: 2,
        explanation: "Planning commission was an executive body. NITI Aayog members are appointed by PM.",
        chapter: "President",
        subtopic: "Appointments"
    },
    {
        id: 42,
        question: "Regarding the 'Constitutional position' of the Governor:\n1. He is an agent of the Central Government.\n2. He is the constitutional head of the State.\n3. His office is an 'employment' under the Central Government.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Supreme Court held it's NOT an employment under CG (3 incorrect). It's an independent constitutional office.",
        chapter: "Governor",
        subtopic: "Nature of Office"
    },
    {
        id: 43,
        question: "The President 'lays' which of the following reports before the Parliament?\n1. CAG Audit Reports\n2. Finance Commission Recommendations\n3. UPSC Report\n4. National Commission for BCs Report",
        options: ["(a) 1, 2 and 3 only", "(b) 2, 3 and 4 only", "(c) 1 and 3 only", "(d) 1, 2, 3 and 4"],
        correctAnswer: 3,
        explanation: "President is responsible for laying all these constitutional body reports.",
        chapter: "President",
        subtopic: "Oversight"
    },
    {
        id: 44,
        question: "A person to be eligible for the 'Governor's office' must be:\n1. A citizen of India.\n2. Complete 35 years of age.\n3. A resident of the state for which he is appointed.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Resident condition is a CONVENTION, not a constitutional requirement (3 incorrect).",
        chapter: "Governor",
        subtopic: "Qualifications"
    },
    {
        id: 45,
        question: "Consider the following regarding the 'Mercy Petition' to the President:\n1. The petitioner has no right to an oral hearing.\n2. The President must assign reasons for his decision.\n3. The power is subject to limited judicial review.",
        options: ["(a) 1 only", "(b) 1 and 3 only", "(c) 2 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "Assigned reasons are not mandatory (2 incorrect).",
        chapter: "President",
        subtopic: "Mercy Petitions"
    },
    {
        id: 46,
        question: "The Governor can 'dissolve' the State Legislative Assembly when:\n1. The Chief Minister advises him to do so.\n2. The Council of Ministers has lost its majority and no other party can form a stable government.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "Both are conditions for dissolution, the second being situational discretion.",
        chapter: "Governor",
        subtopic: "Legislative Powers"
    },
    {
        id: 47,
        question: "Which of the following is correct regarding the 'President's Rule' (Art 356)?\n1. It is based on the Governor's report or otherwise.\n2. All powers of the State Legislature are transferred to the President.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 0,
        explanation: "Legislative powers go to the PARLIAMENT, not President (2 incorrect).",
        chapter: "Emergency Provisions",
        subtopic: "President's Rule"
    },
    {
        id: 48,
        question: "The 'Immunity' of the Governor includes:\n1. He is not answerable to any court for the exercise of his duties.\n2. No criminal proceedings can be instituted against him during his term.\n3. No civil proceedings can be started against him concerning his personal acts without a 2-month notice.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All correct as per Article 361.",
        chapter: "Governor",
        subtopic: "Privileges"
    },
    {
        id: 49,
        question: "Who among the following 'resigns' by writing to the President?\n1. Vice-President\n2. Prime Minister\n3. Governors of States\n4. Judges of Supreme Court",
        options: ["(a) 1, 3 and 4 only", "(b) 2 and 3 only", "(c) 1 and 2 only", "(d) 1, 2, 3 and 4"],
        correctAnswer: 3,
        explanation: "All listed offices address their resignation to the President of India.",
        chapter: "Executives",
        subtopic: "Resignation"
    },
    {
        id: 50,
        question: "Regarding 'Executive Discretion' vs 'Constitutional Discretion' of the Governor:\n1. Reserving a bill is constitutional discretion.\n2. Choosing a CM in a hung assembly is situational (executive) discretion.\n3. The President has no constitutional discretion, unlike the Governor.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All correct. Governor is explicitly given discretion in Article 163, President isn't.",
        chapter: "Governor",
        subtopic: "Discretion"
    },
    {
        id: 51,
        question: "Consider the following statements regarding the 'appointment of the Prime Minister':\n1. The Constitution contains specific procedure for the selection and appointment of the Prime Minister.\n2. In accordance with the conventions of the parliamentary system, the President has to appoint the leader of the majority party in the Lok Sabha as the Prime Minister.\n3. The President can exercise his personal discretion in the selection and appointment of the Prime Minister when no party has a clear majority in the Lok Sabha.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 1,
        explanation: "Constitution does NOT contain a specific procedure (Statement 1 is incorrect). It only says PM shall be appointed by the President.",
        chapter: "Prime Minister",
        subtopic: "Appointment"
    },
    {
        id: 52,
        question: "With reference to the 'Chief Minister', consider the following statements:\n1. A person who is not a member of the state legislature can be appointed as Chief Minister for six months.\n2. According to the Constitution, the Chief Minister should be a member of the Legislative Assembly only.\n3. The Chief Minister holds office during the pleasure of the Governor.",
        options: ["(a) 1 and 3 only", "(b) 2 and 3 only", "(c) 1 and 2 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Statement 2 is incorrect as the CM can be from either house (if it exists).",
        chapter: "Chief Minister",
        subtopic: "Appointment & Tenure"
    },
    {
        id: 53,
        question: "Consider the following statements regarding the 'powers of the Prime Minister' in relation to the Council of Ministers:\n1. He recommends persons who can be appointed as ministers by the President.\n2. He allocates and reshuffles various portfolios among the ministers.\n3. He can ask a minister to resign or advise the President to dismiss him in case of difference of opinion.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All of the above statements are correct and define the PM's authority over his team.",
        chapter: "Prime Minister",
        subtopic: "Powers & Functions"
    },
    {
        id: 54,
        question: "The 'Council of Ministers' is collectively responsible to which of the following at the state level?",
        options: ["(a) Governor", "(b) State Legislative Assembly", "(c) Chief Minister", "(d) State Legislature"],
        correctAnswer: 1,
        explanation: "Article 164 clearly states that the council of ministers shall be collectively responsible to the state legislative assembly.",
        chapter: "State Council of Ministers",
        subtopic: "Collective Responsibility"
    },
    {
        id: 55,
        question: "Regarding the 'resignation of a Prime Minister', consider the following statements:\n1. The resignation of the Prime Minister automatically reaches the dissolution of the Council of Ministers.\n2. He can resign by writing to the Speaker of the Lok Sabha.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 0,
        explanation: "PM resigns by writing to the PRESIDENT (Statement 2 is incorrect).",
        chapter: "Prime Minister",
        subtopic: "Resignation"
    },
    {
        id: 56,
        question: "Who among the following 'determines the size' of the Council of Ministers and the 'rank of ministers' at the state level?",
        options: ["(a) Governor", "(b) Chief Minister", "(c) State Legislative Assembly", "(d) Constitution of India"],
        correctAnswer: 1,
        explanation: "While the 91st Amendment limits the size to 15%, the specific size and ranks are decided by the CM.",
        chapter: "Chief Minister",
        subtopic: "Powers"
    },
    {
        id: 57,
        question: "Consider the following statements regarding 'Cabinet Committees':\n1. They are extra-constitutional in emergence.\n2. They are of two types—standing and ad hoc.\n3. They are mostly headed by the Prime Minister.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All statements are correct. They help in reducing the workload of the Cabinet.",
        chapter: "Cabinet Committees",
        subtopic: "Nature of Committees"
    },
    {
        id: 58,
        question: "The 'Prime Minister' is the chairman of which of the following bodies?\n1. NITI Aayog\n2. National Development Council\n3. Inter-State Council\n4. National Water Resources Council",
        options: ["(a) 1, 2 and 3 only", "(b) 2, 3 and 4 only", "(c) 1, 3 and 4 only", "(d) 1, 2, 3 and 4"],
        correctAnswer: 3,
        explanation: "The PM acts as the chairman of all these high-level coordinating bodies.",
        chapter: "Prime Minister",
        subtopic: "Role in Bodies"
    },
    {
        id: 59,
        question: "In the context of 'State Administration', who is the 'crisis manager-in-chief' at the political level during emergencies?",
        options: ["(a) Governor", "(b) Chief Minister", "(c) Chief Secretary", "(d) Home Minister of the State"],
        correctAnswer: 1,
        explanation: "The CM acts as the chief crisis manager at the state political level.",
        chapter: "Chief Minister",
        subtopic: "Functions"
    },
    {
        id: 60,
        question: "The 'oath of office' to a state minister is administered by:",
        options: ["(a) Chief Justice of High Court", "(b) Governor", "(c) Chief Minister", "(d) Speaker of the Assembly"],
        correctAnswer: 1,
        explanation: "The Governor administers the oath to all ministers including the CM.",
        chapter: "State Council of Ministers",
        subtopic: "Oath"
    },
    {
        id: 61,
        question: "Regarding the 'rank of ministers' in the Central Council of Ministers:\n1. Cabinet ministers head the important ministries of the Central government.\n2. Ministers of state can be given independent charge of ministries/departments.\n3. Deputy ministers are given independent charge of departments.",
        options: ["(a) 1 and 2 only", "(b) 1 and 3 only", "(c) 2 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Deputy ministers are not given independent charge (Statement 3 is incorrect).",
        chapter: "Council of Ministers",
        subtopic: "Classification"
    },
    {
        id: 62,
        question: "Consider the following statements regarding the 'Prime Minister's role' in Parliament:\n1. He is the leader of the Lower House.\n2. He can recommend dissolution of the Lok Sabha to the President at any time.\n3. He announces government policies on the floor of the House.",
        options: ["(a) 1 and 3 only", "(b) 2 and 3 only", "(c) 1 and 2 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "All statements are correct regarding the PM's legislative role.",
        chapter: "Prime Minister",
        subtopic: "Role in Parliament"
    },
    {
        id: 63,
        question: "Who among the following 'advises the Governor' with regard to the appointment of the Chairman and members of the State Public Service Commission?",
        options: ["(a) Chief Minister", "(b) President", "(c) Chief Justice of HC", "(d) Home Minister"],
        correctAnswer: 0,
        explanation: "The CM advises the Governor on important appointments like SPSC, Advocate General, etc.",
        chapter: "Chief Minister",
        subtopic: "Powers"
    },
    {
        id: 64,
        question: "The 'Constitution' says that the 'Council of Ministers' shall be collectively responsible to:",
        options: ["(a) Parliament", "(b) Lok Sabha", "(c) Prime Minister", "(d) President"],
        correctAnswer: 1,
        explanation: "Article 75 specifies collective responsibility to the Lok Sabha.",
        chapter: "Council of Ministers",
        subtopic: "Collective Responsibility"
    },
    {
        id: 65,
        question: "Regarding 'Cabinet' vs 'Council of Ministers':\n1. The Council of Ministers is a wider body while the Cabinet is a smaller body.\n2. The Cabinet meets frequently to take decisions, while the Council of Ministers rarely meets.\n3. All ministers are members of the Cabinet.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Not all ministers are in the Cabinet (Statement 3 is incorrect). Only cabinet-rank ministers are.",
        chapter: "Council of Ministers",
        subtopic: "Cabinet vs COM"
    },
    {
        id: 66,
        question: "Consider the following statements regarding 'State Cabinet Committees':\n1. Like Central Cabinet Committees, they are extra-constitutional.\n2. They are used to solve issues and coordinate between departments.\n3. Their decisions are always binding on the Cabinet.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Decisions are usually recommendations (Statement 3 is incorrect).",
        chapter: "Cabinet Committees",
        subtopic: "State Level"
    },
    {
        id: 67,
        question: "A 'no-confidence motion' can be moved only in which of the following houses at the state level?",
        options: ["(a) Legislative Council", "(b) Legislative Assembly", "(c) Both houses", "(d) Neither house"],
        correctAnswer: 1,
        explanation: "Responsibility is to the Assembly, so the motion can only be in the Assembly.",
        chapter: "State Council of Ministers",
        subtopic: "No-Confidence Motion"
    },
    {
        id: 68,
        question: "Who is the 'link' between the Governor and the Council of Ministers at the state level?",
        options: ["(a) Chief Secretary", "(b) Chief Minister", "(c) Speaker", "(d) Advocate General"],
        correctAnswer: 1,
        explanation: "CM is the channel of communication under Article 167.",
        chapter: "Chief Minister",
        subtopic: "Communication Channel"
    },
    {
        id: 69,
        question: "Regarding 'Minister's salary' in India:\n1. Their salaries and allowances are determined by the Parliament/State Legislature from time to time.\n2. Their salaries are not mentioned in the Constitution of India.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 0,
        explanation: "Salaries are provided for in the Second Schedule (Statement 2 is incorrect).",
        chapter: "Council of Ministers",
        subtopic: "Salaries"
    },
    {
        id: 70,
        question: "The 'Prime Minister' is described as 'primus inter pares' (first among equals) in relation to:",
        options: ["(a) Parliament", "(b) Cabinet", "(c) People", "(d) President"],
        correctAnswer: 1,
        explanation: "Lord Morley described him as such in relation to his cabinet colleagues.",
        chapter: "Prime Minister",
        subtopic: "Position"
    },
    {
        id: 71,
        question: "Consider the following statements regarding the 'duties of the Chief Minister' (Article 167):\n1. To communicate to the Governor all decisions of the Council of Ministers.\n2. To furnish such information relating to the administration of the affairs of the state as the Governor may call for.\n3. To submit for the consideration of the Council of Ministers any matter on which a decision has been taken by a minister but which has not been considered by the Council.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 3,
        explanation: "These are the three primary duties of the CM towards the Governor.",
        chapter: "Chief Minister",
        subtopic: "Duties"
    },
    {
        id: 72,
        question: "Which of the following is true about 'President's Veto' over a state bill passed twice by the state legislature?",
        options: ["(a) He is bound to give his assent.", "(b) He is not bound to give his assent.", "(c) He can refer it to the Supreme Court.", "(d) He must return it for a third time."],
        correctAnswer: 1,
        explanation: "Unlike central bills, the President is NOT bound for state bills (Art 201).",
        chapter: "President",
        subtopic: "Veto Power"
    },
    {
        id: 73,
        question: "The 'Cabinet Secretary' at the center works directly under the:",
        options: ["(a) Home Minister", "(b) Finance Minister", "(c) Prime Minister", "(d) President"],
        correctAnswer: 2,
        explanation: "Cabinet Secretariat is under the direct charge of the PM.",
        chapter: "Prime Minister",
        subtopic: "Administrative Support"
    },
    {
        id: 74,
        question: "Regarding 'individual responsibility' of state ministers:\n1. Ministers hold office during the pleasure of the Governor.\n2. A minister can be removed by the Governor at any time without the advice of the Chief Minister.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 0,
        explanation: "Removal needs CM's advice (Statement 2 is incorrect).",
        chapter: "State Council of Ministers",
        subtopic: "Individual Responsibility"
    },
    {
        id: 75,
        question: "The 'Inter-State Council' is established by which of the following?",
        options: ["(a) Parliament", "(b) Prime Minister", "(c) President", "(d) Union Home Minister"],
        correctAnswer: 2,
        explanation: "Article 263 empowers the President to establish it.",
        chapter: "President",
        subtopic: "Coordinating Powers"
    },
    {
        id: 76,
        question: "Who among the following is the 'chief spokesperson' of the State Government?",
        options: ["(a) Governor", "(b) Chief Minister", "(c) Chief Secretary", "(d) Minister of Information"],
        correctAnswer: 1,
        explanation: "The CM acts as the chief spokesperson for his government.",
        chapter: "Chief Minister",
        subtopic: "Spokesperson"
    },
    {
        id: 77,
        question: "Consider the following statements regarding 'Cabinet Decisions':\n1. The Cabinet is a collective body.\n2. All Cabinet decisions must be unanimous.\n3. Once a decision is taken, every minister is bound by it.",
        options: ["(a) 1 and 3 only", "(b) 2 and 3 only", "(c) 1 and 2 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "Decisions don't HAVE to be unanimous at the start, but once taken, they are binding (Statement 2 is incorrect).",
        chapter: "Council of Ministers",
        subtopic: "Cabinet Decisions"
    },
    {
        id: 78,
        question: "Which of the following describes the PM as the 'Sun around which planets revolve'?",
        options: ["(a) Jennings", "(b) Laski", "(c) Morley", "(d) Ambedkar"],
        correctAnswer: 1,
        explanation: "Harold Laski used this metaphor to describe the PM's pivotal position.",
        chapter: "Prime Minister",
        subtopic: "Position"
    },
    {
        id: 79,
        question: "The 'Advocate General' of a state is appointed on the advice of:",
        options: ["(a) CJ of High Court", "(b) Chief Minister", "(c) President", "(d) Union Law Minister"],
        correctAnswer: 1,
        explanation: "CM advises the Governor on the appointment of the Advocate General.",
        chapter: "Chief Minister",
        subtopic: "Powers"
    },
    {
        id: 80,
        question: "Regarding 'Cabinet Committees' at the center, which one is known as the 'Super Cabinet'?",
        options: ["(a) Economic Affairs Committee", "(b) Appointments Committee", "(c) Political Affairs Committee", "(d) Parliamentary Affairs Committee"],
        correctAnswer: 2,
        explanation: "Political Affairs Committee is the most powerful and often called the Super Cabinet.",
        chapter: "Cabinet Committees",
        subtopic: "Political Affairs"
    },
    {
        id: 81,
        question: "Who among the following is the 'ex-officio chairman' of the Zonal Councils?",
        options: ["(a) Prime Minister", "(b) Union Home Minister", "(c) Senior-most Chief Minister", "(d) Vice-President"],
        correctAnswer: 1,
        explanation: "Home minister heads all zonal councils.",
        chapter: "Inter-State Relations",
        subtopic: "Zonal Councils"
    },
    {
        id: 82,
        question: "The 'Council of Ministers' in a state CANNOT function without a:",
        options: ["(a) Governor", "(b) Chief Minister", "(c) Speaker", "(d) High Court"],
        correctAnswer: 1,
        explanation: "CM is the head; without him, the council survives not. Death/Resignation of CM dissolves the council.",
        chapter: "Chief Minister",
        subtopic: "Head of Council"
    },
    {
        id: 83,
        question: "Which of the following 'articles' deals with the Council of Ministers at the Center?",
        options: ["(a) Articles 74 and 75", "(b) Articles 163 and 164", "(c) Articles 52 and 53", "(d) Articles 76 and 77"],
        correctAnswer: 0,
        explanation: "74 (Advice to President) and 75 (Other provisions for ministers) are key.",
        chapter: "Council of Ministers",
        subtopic: "Articles"
    },
    {
        id: 84,
        question: "Regarding 'legal responsibility' of ministers in India:\n1. Like Britain, ministers in India have legal responsibility for their official acts.\n2. The courts are barred from inquiring into the nature of advice given by ministers to the President/Governor.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 1,
        explanation: "India has NO legal responsibility for ministers (Statement 1 is incorrect).",
        chapter: "Council of Ministers",
        subtopic: "Legal Responsibility"
    },
    {
        id: 85,
        question: "The 'Cabinet Secretariat' at the center is headed by the:",
        options: ["(a) Prime Minister", "(b) Cabinet Secretary", "(c) Home Secretary", "(d) Principal Secretary to PM"],
        correctAnswer: 1,
        explanation: "The Cabinet Secretary is the top-most civil servant and head of the secretariat.",
        chapter: "Prime Minister",
        subtopic: "Support System"
    },
    {
        id: 86,
        question: "Who 'allocates' portfolios among the ministers at the state level?",
        options: ["(a) Governor", "(b) Chief Minister", "(c) State Assembly", "(d) Chief Secretary"],
        correctAnswer: 1,
        explanation: "Governor does it on the ADVICE of the CM.",
        chapter: "Chief Minister",
        subtopic: "Powers"
    },
    {
        id: 87,
        question: "Consider the following regarding 'Kitchen Cabinet':\n1. It is an informal body.\n2. It can include outsiders like family members or friends.\n3. It is prohibited by the Constitution.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 0,
        explanation: "It's not prohibited, just informal (Statement 3 is incorrect).",
        chapter: "Prime Minister",
        subtopic: "Informal Bodies"
    },
    {
        id: 88,
        question: "Which of the following 'committees' is NOT always chaired by the PM?",
        options: ["(a) Political Affairs Committee", "(b) Economic Affairs Committee", "(c) Appointments Committee", "(d) Parliamentary Affairs Committee"],
        correctAnswer: 3,
        explanation: "Parliamentary Affairs Committee is usually chaired by the Home Minister.",
        chapter: "Cabinet Committees",
        subtopic: "Chairmanship"
    },
    {
        id: 89,
        question: "The 'resignation' of a state minister is submitted to the:",
        options: ["(a) Chief Minister", "(b) Speaker", "(c) Governor", "(d) President"],
        correctAnswer: 2,
        explanation: "Ministers are appointed by and resign to the Governor.",
        chapter: "State Council of Ministers",
        subtopic: "Resignation"
    },
    {
        id: 90,
        question: "Who is the 'link' between the President and the Council of Ministers?",
        options: ["(a) Speaker", "(b) Prime Minister", "(c) Vice-President", "(d) Attorney General"],
        correctAnswer: 1,
        explanation: "PM is the channel of communication under Article 78.",
        chapter: "Prime Minister",
        subtopic: "Communication Channel"
    },
    {
        id: 91,
        question: "Regarding 'advice' given by the Council of Ministers to the Governor:\n1. It is binding in all matters.\n2. It is not binding in matters where the Governor has discretion.\n3. Courts can inquire into the advice.",
        options: ["(a) 1 only", "(b) 2 only", "(c) 2 and 3 only", "(d) 1 and 3 only"],
        correctAnswer: 1,
        explanation: "Binding normally, but discretion is the exception. Courts are barred (Statement 3 incorrect).",
        chapter: "Governor",
        subtopic: "Relationship with Council"
    },
    {
        id: 92,
        question: "The 'oath of secrecy' for ministers in India is part of which schedule?",
        options: ["(a) Second Schedule", "(b) Third Schedule", "(c) Fourth Schedule", "(d) Seventh Schedule"],
        correctAnswer: 1,
        explanation: "Third schedule contains forms of oaths and affirmations.",
        chapter: "Council of Ministers",
        subtopic: "Oaths"
    },
    {
        id: 93,
        question: "Who is the 'chief advisor' to the Governor?",
        options: ["(a) Chief Secretary", "(b) Chief Minister", "(c) Advocate General", "(d) Speaker"],
        correctAnswer: 1,
        explanation: "As head of the Council of Ministers, the CM is the principal advisor.",
        chapter: "Chief Minister",
        subtopic: "Role"
    },
    {
        id: 94,
        question: "Consider the following statements regarding 'Ministerial responsibility' in India:\n1. Collective responsibility is a constitutional provision.\n2. Individual responsibility is a convention.\n3. Legal responsibility does not exist.",
        options: ["(a) 1 and 2 only", "(b) 2 and 3 only", "(c) 1 and 3 only", "(d) 1, 2 and 3"],
        correctAnswer: 2,
        explanation: "Both collective (Art 75/164) and individual (Pleasure of Pres/Gov) are CONSTITUTIONAL (Statement 2 is incorrect).",
        chapter: "Council of Ministers",
        subtopic: "Responsibility"
    },
    {
        id: 95,
        question: "Who among the following can 'attend' Cabinet meetings without being a member of the Cabinet?",
        options: ["(a) Deputy Ministers", "(b) Ministers of State (Independent Charge) when invited", "(c) All Ministers of State", "(d) Cabinet Secretary always participating as a member"],
        correctAnswer: 1,
        explanation: "Ministers of state with independent charge attend when their ministry is discussed.",
        chapter: "Council of Ministers",
        subtopic: "Meetings"
    },
    {
        id: 96,
        question: "The 'Prime Minister' holds office during the pleasure of the:",
        options: ["(a) Lok Sabha", "(b) Parliament", "(c) President", "(d) People"],
        correctAnswer: 2,
        explanation: "Constitutional provision (Art 75), though he must enjoy Lok Sabha majority.",
        chapter: "Prime Minister",
        subtopic: "Tenure"
    },
    {
        id: 97,
        question: "Regarding the 'number of ministers' at the state level (including CM):\n1. It cannot exceed 15% of the total strength of the assembly.\n2. It cannot be less than 12.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "Both limits were provided by the 91st Amendment Act, 2003.",
        chapter: "State Council of Ministers",
        subtopic: "Size"
    },
    {
        id: 98,
        question: "Who is the 'head' of the political executive at the center?",
        options: ["(a) President", "(b) Prime Minister", "(c) Cabinet", "(d) Parliament"],
        correctAnswer: 1,
        explanation: "PM is the real/active head of the political executive.",
        chapter: "Prime Minister",
        subtopic: "Head of Government"
    },
    {
        id: 99,
        question: "Consider the following regarding 'disagreement' in the Cabinet:\n1. If a minister disagrees with a cabinet decision, he must defend it in Parliament or resign.\n2. Several ministers have resigned in the past due to disagreements.",
        options: ["(a) 1 only", "(b) 2 only", "(c) Both 1 and 2", "(d) Neither 1 nor 2"],
        correctAnswer: 2,
        explanation: "This is the essence of collective responsibility.",
        chapter: "Council of Ministers",
        subtopic: "Collective Responsibility"
    },
    {
        id: 100,
        question: "The 'Council of Ministers' is officially part of which article for 'aiding and advising' the President?",
        options: ["(a) Article 74", "(b) Article 75", "(c) Article 78", "(d) Article 77"],
        correctAnswer: 0,
        explanation: "Article 74 provides for a Council of Ministers with the PM at the head to aid and advise the President.",
        chapter: "Council of Ministers",
        subtopic: "Articles"
    }
];
