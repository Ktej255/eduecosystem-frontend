import { ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler (Strictly Chapter 14)
const LEVEL_1_QUESTIONS = [
    {
        id: "ch14-l1-q1",
        question: "Political scientists have classified governments into unitary and federal on the basis of the:",
        options: ["Nature of relations between the executive and the legislature.", "Nature of relations between the national government and the regional governments.", "Method of election of the head of state.", "Role of the judiciary."],
        correctAnswerIndex: 1,
        explanation: "Federal systems are classified based on the relationship between national and regional governments."
    },
    {
        id: "ch14-l1-q2",
        question: "In a unitary government, all powers are vested in:",
        options: ["The National Government.", "The Regional Governments.", "The Judiciary.", "The Local Bodies."],
        correctAnswerIndex: 0,
        explanation: "In a unitary government, all powers are concentrated in the National Government."
    },
    {
        id: "ch14-l1-q3",
        question: "In a federal government, powers are divided between the national government and the regional governments by:",
        options: ["The Parliament.", "The Constitution.", "The President.", "The Supreme Court."],
        correctAnswerIndex: 1,
        explanation: "The Constitution divides powers between national and regional governments in a federal system."
    },
    {
        id: "ch14-l1-q4",
        question: "Which of the following countries has a Unitary model of government?",
        options: ["USA", "Britain (UK)", "Switzerland", "Australia"],
        correctAnswerIndex: 1,
        explanation: "Britain (UK) has a unitary model of government."
    },
    {
        id: "ch14-l1-q5",
        question: "Which of the following countries has a Federal model of government?",
        options: ["France", "Japan", "China", "Russia"],
        correctAnswerIndex: 3,
        explanation: "Russia has a federal model of government."
    },
    {
        id: "ch14-l1-q6",
        question: "The term 'federation' is derived from the Latin word 'foedus' which means:",
        options: ["Separation", "Treaty or Agreement", "Union", "State"],
        correctAnswerIndex: 1,
        explanation: "Foedus means Treaty or Agreement in Latin."
    },
    {
        id: "ch14-l1-q7",
        question: "The Indian federal system is based on the ______ model.",
        options: ["American", "Canadian", "Swiss", "Australian"],
        correctAnswerIndex: 1,
        explanation: "India's federal system is based on the Canadian model."
    },
    {
        id: "ch14-l1-q8",
        question: "The Canadian model differs from the American model in that it establishes a very:",
        options: ["Weak Centre.", "Strong Centre.", "Weak Judiciary.", "Strong State."],
        correctAnswerIndex: 1,
        explanation: "The Canadian model establishes a very Strong Centre, unlike the American model."
    },
    {
        id: "ch14-l1-q9",
        question: "The Indian Constitution establishes a dual polity consisting of:",
        options: ["The Union at the Centre and the States at the periphery.", "The Legislature and the Executive.", "The Lok Sabha and the Rajya Sabha.", "The President and the Governors."],
        correctAnswerIndex: 0,
        explanation: "Dual polity means the Union at the Centre and the States at the periphery."
    },
    {
        id: "ch14-l1-q10",
        question: "The Constitution is not only a written document but also the:",
        options: ["Longest written constitution in the world.", "Shortest written constitution.", "Most rigid constitution.", "Most flexible constitution."],
        correctAnswerIndex: 0,
        explanation: "The Indian Constitution is the longest written constitution in the world."
    },
    {
        id: "ch14-l1-q11",
        question: "The Constitution divides powers between the Centre and the States in terms of:",
        options: ["Union List, State List, and Concurrent List.", "Parts and Schedules.", "Fundamental Rights and Duties.", "Executive orders."],
        correctAnswerIndex: 0,
        explanation: "Powers are divided through the Union List, State List, and Concurrent List in the Seventh Schedule."
    },
    {
        id: "ch14-l1-q12",
        question: "The supremacy of the Constitution means that:",
        options: ["Parliament can amend any part of it easily.", "The laws enacted by the Centre and the states must conform to its provisions.", "The President is supreme.", "The States are supreme."],
        correctAnswerIndex: 1,
        explanation: "Constitutional supremacy means all laws must conform to the Constitution."
    },
    {
        id: "ch14-l1-q13",
        question: "The Constitution is rigid to the extent that those provisions which are concerned with the federal structure can be amended only by:",
        options: ["A simple majority of the Parliament.", "A special majority of the Parliament.", "A special majority of the Parliament and ratification by half of the state legislatures.", "A referendum."],
        correctAnswerIndex: 2,
        explanation: "Federal provisions require special majority plus ratification by half the state legislatures."
    },
    {
        id: "ch14-l1-q14",
        question: "The Constitution establishes an independent judiciary headed by the Supreme Court to:",
        options: ["Protect the supremacy of the Constitution.", "Settle disputes between the Centre and the States.", "Interpret the Constitution.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "The Supreme Court performs all these functions."
    },
    {
        id: "ch14-l1-q15",
        question: "Bicameralism means the Parliament consists of:",
        options: ["Lok Sabha and Rajya Sabha.", "Centre and States.", "Executive and Judiciary.", "President and Prime Minister."],
        correctAnswerIndex: 0,
        explanation: "Bicameralism refers to two houses - Lok Sabha and Rajya Sabha."
    },
    {
        id: "ch14-l1-q16",
        question: "Which of the following is a Unitary feature of the Indian Constitution?",
        options: ["Strong Centre.", "Dual Polity.", "Division of Powers.", "Independent Judiciary."],
        correctAnswerIndex: 0,
        explanation: "Strong Centre is a unitary feature of the Indian Constitution."
    },
    {
        id: "ch14-l1-q17",
        question: "Unlike the USA, the Indian Constitution provides for:",
        options: ["Dual Citizenship.", "Single Citizenship.", "Triple Citizenship.", "No Citizenship."],
        correctAnswerIndex: 1,
        explanation: "India has Single Citizenship unlike the USA which has dual citizenship."
    },
    {
        id: "ch14-l1-q18",
        question: "The States in India have:",
        options: ["The right to frame their own Constitution.", "No right to frame their own Constitution (except J&K previously).", "The right to secede from the Union.", "Equal representation in the Rajya Sabha."],
        correctAnswerIndex: 1,
        explanation: "States in India cannot frame their own constitutions (except J&K previously)."
    },
    {
        id: "ch14-l1-q19",
        question: "The Parliament can change the area, boundaries or name of any state by:",
        options: ["A simple majority.", "A special majority.", "A special majority with state consent.", "An executive order."],
        correctAnswerIndex: 0,
        explanation: "Parliament can alter state boundaries by a simple majority."
    },
    {
        id: "ch14-l1-q20",
        question: "In the US Senate, all states are given equal representation. In the Indian Rajya Sabha, representation is given on the basis of:",
        options: ["Equality.", "Population.", "Area.", "Wealth."],
        correctAnswerIndex: 1,
        explanation: "Rajya Sabha representation is based on population, not equality."
    },
    {
        id: "ch14-l1-q21",
        question: "During an Emergency (Article 352, 356, 360), the Central Government becomes all-powerful and the states go into total control of the Centre. This converts the federal structure into:",
        options: ["A unitary one.", "A confederation.", "A dictatorship.", "A monarchy."],
        correctAnswerIndex: 0,
        explanation: "Emergency provisions convert the federal structure into a unitary one."
    },
    {
        id: "ch14-l1-q22",
        question: "In India, we have a ______ judiciary, whereas in the US, there is a double system of courts.",
        options: ["Integrated", "Separated", "Divided", "Dual"],
        correctAnswerIndex: 0,
        explanation: "India has an integrated judiciary, unlike the US dual court system."
    },
    {
        id: "ch14-l1-q23",
        question: "The All-India Services (IAS, IPS, IFS) are common to both the Centre and the States. The members of these services are recruited and trained by the:",
        options: ["Centre.", "States.", "Both Centre and States.", "Private agencies."],
        correctAnswerIndex: 0,
        explanation: "All-India Services are recruited and trained by the Centre."
    },
    {
        id: "ch14-l1-q24",
        question: "The Governor constitutes the:",
        options: ["Elected head of the state.", "Agent of the Centre in the state.", "Representative of the state legislature.", "Head of the Judiciary in the state."],
        correctAnswerIndex: 1,
        explanation: "The Governor is the agent of the Centre in the state."
    },
    {
        id: "ch14-l1-q25",
        question: "The Election Commission of India conducts elections to:",
        options: ["Parliament only.", "State Legislatures only.", "Both Parliament and State Legislatures.", "Local Bodies only."],
        correctAnswerIndex: 2,
        explanation: "ECI conducts elections to both Parliament and State Legislatures."
    },
    {
        id: "ch14-l1-q26",
        question: "The CAG (Comptroller and Auditor General) audits the accounts of:",
        options: ["Central Government only.", "State Governments only.", "Both Central and State Governments.", "PSUs only."],
        correctAnswerIndex: 2,
        explanation: "CAG audits accounts of both Central and State Governments."
    },
    {
        id: "ch14-l1-q27",
        question: "K.C. Wheare described the Constitution of India as:",
        options: ["\"Quasi-federal\".", "\"A federation with a strong centralizing tendency\".", "\"Cooperative federalism\".", "\"Bargaining federalism\"."],
        correctAnswerIndex: 0,
        explanation: "K.C. Wheare described India as 'Quasi-federal'."
    },
    {
        id: "ch14-l1-q28",
        question: "Who described the Indian Constitution as \"a federation with a strong centralizing tendency\"?",
        options: ["K.C. Wheare.", "Sir Ivor Jennings.", "Granville Austin.", "Morris Jones."],
        correctAnswerIndex: 1,
        explanation: "Sir Ivor Jennings described it as 'a federation with a strong centralizing tendency'."
    },
    {
        id: "ch14-l1-q29",
        question: "Who described Indian federalism as \"Bargaining Federalism\"?",
        options: ["Morris Jones.", "Granville Austin.", "Alexandrowicz.", "Paul Appleby."],
        correctAnswerIndex: 0,
        explanation: "Morris Jones described Indian federalism as 'Bargaining Federalism'."
    },
    {
        id: "ch14-l1-q30",
        question: "Granville Austin called Indian federalism:",
        options: ["\"Cooperative Federalism\".", "\"Competitive Federalism\".", "\"Paramount Federalism\".", "\"Asymmetric Federalism\"."],
        correctAnswerIndex: 0,
        explanation: "Granville Austin called it 'Cooperative Federalism'."
    },
    {
        id: "ch14-l1-q31",
        question: "In the S.R. Bommai case (1994), the Supreme Court laid down that the Constitution is federal and federalism is its:",
        options: ["Basic feature.", "Weakness.", "Temporary feature.", "Subsidiary feature."],
        correctAnswerIndex: 0,
        explanation: "The S.R. Bommai case established federalism as a basic feature."
    },
    {
        id: "ch14-l1-q32",
        question: "The term \"Federation\" has been used in the Constitution:",
        options: ["In the Preamble.", "In Article 1.", "Nowhere.", "In Part XIII."],
        correctAnswerIndex: 2,
        explanation: "The word 'Federation' is not used anywhere in the Constitution."
    },
    {
        id: "ch14-l1-q33",
        question: "Article 1 of the Constitution describes India as a:",
        options: ["Federation of States.", "Union of States.", "United States of India.", "Confederation of States."],
        correctAnswerIndex: 1,
        explanation: "Article 1 describes India as a 'Union of States'."
    },
    {
        id: "ch14-l1-q34",
        question: "According to Dr. Ambedkar, the phrase 'Union of States' was preferred to 'Federation of States' to indicate two things: (i) the Indian federation is not the result of an agreement among the states, and (ii):",
        options: ["The states have no right to secede from the federation.", "The Centre is more powerful than the states.", "The states are administrative units only.", "The judiciary is supreme."],
        correctAnswerIndex: 0,
        explanation: "States have no right to secede from the federation."
    },
    {
        id: "ch14-l1-q35",
        question: "The Indian system is unique because it combines:",
        options: ["The rigidity of a federal system with the flexibility of a unitary system.", "The flexibility of a federal system with the rigidity of a unitary system.", "The best features of the US and UK systems only.", "None of the above."],
        correctAnswerIndex: 0,
        explanation: "India combines federal rigidity with unitary flexibility."
    }
];

// Level 2: The Conceptual Bridge (Applied Knowledge)
const LEVEL_2_QUESTIONS = [
    {
        id: "ch14-l2-q1",
        question: "The Indian Union is described as an \"Indestructible Union of Destructible States\". This means:",
        options: ["The Union cannot be destroyed, but the States can be altered or abolished by the Parliament.", "The States cannot be destroyed, but the Union can be dissolved.", "Neither the Union nor the States can be destroyed.", "Both can be destroyed."],
        correctAnswerIndex: 0,
        explanation: "Parliament can alter or abolish states, but the Union cannot be destroyed."
    },
    {
        id: "ch14-l2-q2",
        question: "In contrast, the USA is described as:",
        options: ["An Indestructible Union of Destructible States.", "An Indestructible Union of Indestructible States.", "A Destructible Union of Indestructible States.", "A Destructible Union of Destructible States."],
        correctAnswerIndex: 1,
        explanation: "The USA is an Indestructible Union of Indestructible States."
    },
    {
        id: "ch14-l2-q3",
        question: "The \"Coming Together\" federation model (like USA) involves independent states coming together to form a bigger unit. India follows the \"Holding Together\" model, where:",
        options: ["A large country decides to divide its power between the constituent states and the national government.", "States have more power than the Centre.", "The Centre is dependent on the States.", "The Judiciary controls the federation."],
        correctAnswerIndex: 0,
        explanation: "In the 'Holding Together' model, the country divides power between Centre and States."
    },
    {
        id: "ch14-l2-q4",
        question: "Why did the Constituent Assembly avoid the word \"Federation\" in the Constitution?",
        options: ["To avoid the impression that states have a right to secede.", "To emphasize the unity and integrity of the nation.", "Because the Indian federation was not the result of an agreement among the states.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All these reasons contributed to avoiding the word 'Federation'."
    },
    {
        id: "ch14-l2-q5",
        question: "In a typical federation (like USA), the states have the right to frame their own Constitution. In India:",
        options: ["States have their own Constitutions.", "No state has its own Constitution (Single Constitution for both).", "Only North-Eastern states have their own Constitutions.", "Only Union Territories have their own Constitutions."],
        correctAnswerIndex: 1,
        explanation: "India has a single Constitution for both Centre and States."
    },
    {
        id: "ch14-l2-q6",
        question: "\"Single Citizenship\" in India means:",
        options: ["A citizen is a citizen of India only, not of a particular state.", "A citizen can hold citizenship of India and another country.", "A citizen has to register in every state he moves to.", "A citizen has dual voting rights."],
        correctAnswerIndex: 0,
        explanation: "Single Citizenship means being a citizen of India only, not of any particular state."
    },
    {
        id: "ch14-l2-q7",
        question: "In the US, the Upper House (Senate) has equal representation from all states (2 per state). In India's Rajya Sabha:",
        options: ["Seats are allotted equally to all states.", "Seats are allotted on the basis of population (Schedule IV).", "Seats are allotted on the basis of area.", "Seats are allotted on the basis of economic contribution."],
        correctAnswerIndex: 1,
        explanation: "Rajya Sabha seats are based on population as per Schedule IV."
    },
    {
        id: "ch14-l2-q8",
        question: "The \"Integrated Judiciary\" in India means:",
        options: ["The Supreme Court and High Courts form a single hierarchy enforcing both Central and State laws.", "There are separate courts for Central laws and State laws.", "The High Courts are independent of the Supreme Court.", "State courts cannot interpret the Constitution."],
        correctAnswerIndex: 0,
        explanation: "Integrated Judiciary means a single hierarchy enforcing both Central and State laws."
    },
    {
        id: "ch14-l2-q9",
        question: "The \"All-India Services\" (IAS, IPS, IFoS) are considered a unitary feature because:",
        options: ["They are recruited and trained by the Centre but work in the States.", "They are controlled jointly by the Centre and States, but ultimate control lies with the Centre.", "They infringe on the autonomy of the States.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All these factors make All-India Services a unitary feature."
    },
    {
        id: "ch14-l2-q10",
        question: "The Governor is appointed by the President and holds office during his pleasure. This makes the Governor:",
        options: ["An agent of the Centre.", "An independent constitutional office.", "A representative of the State Legislature.", "A subordinate of the Chief Minister."],
        correctAnswerIndex: 0,
        explanation: "The Governor is the agent of the Centre in the State."
    },
    {
        id: "ch14-l2-q11",
        question: "The Parliament can legislate on subjects in the State List under certain circumstances. Which is NOT one of them?",
        options: ["In National Interest (Article 249).", "During National Emergency (Article 250).", "By agreement between States (Article 252).", "On the request of the President (Article 253 is for International Agreements, not President's request)."],
        correctAnswerIndex: 3,
        explanation: "Article 253 is for implementing international treaties, not on President's request."
    },
    {
        id: "ch14-l2-q12",
        question: "The \"Veto Power\" of the President over State Legislation occurs when:",
        options: ["The Governor reserves a bill for the consideration of the President (Article 201).", "The President directly calls for the bill.", "The Rajya Sabha passes a resolution.", "The High Court refers it."],
        correctAnswerIndex: 0,
        explanation: "The Governor reserves bills for the President under Article 201."
    },
    {
        id: "ch14-l2-q13",
        question: "Which of the following is the most essential feature of a Federal System?",
        options: ["Written Constitution.", "Division of Powers.", "Independent Judiciary.", "Dual Citizenship."],
        correctAnswerIndex: 1,
        explanation: "Division of Powers is the core defining feature of federalism."
    },
    {
        id: "ch14-l2-q14",
        question: "The \"Supremacy of the Constitution\" ensures that:",
        options: ["The Centre cannot unilaterally alter the division of powers.", "The States cannot violate the Constitution.", "Both Centre and States derive their authority from the Constitution.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "Constitutional supremacy ensures all these outcomes."
    },
    {
        id: "ch14-l2-q15",
        question: "\"Bicameralism\" is essential in a federation to:",
        options: ["Give representation to the units (States) at the Centre.", "Check the hasty legislation of the Lower House.", "Provide for expert opinion.", "Reduce the burden of the Lower House."],
        correctAnswerIndex: 0,
        explanation: "Bicameralism gives representation to States at the Centre."
    },
    {
        id: "ch14-l2-q16",
        question: "The Emergency Provisions (Articles 352, 356, 360) convert the federal structure into a unitary one without a formal amendment of the Constitution. This unique feature was described by Dr. Ambedkar as:",
        options: ["A safety valve.", "A unique feature not found in other federations.", "A necessary evil.", "A violation of federalism."],
        correctAnswerIndex: 1,
        explanation: "Dr. Ambedkar called this a unique feature not found in other federations."
    },
    {
        id: "ch14-l2-q17",
        question: "In the US, the states are \"sovereign\" within their sphere. In India:",
        options: ["The states are sovereign.", "The states are autonomous but not sovereign (Centre has overriding powers).", "The states are subordinate agents.", "The states have no powers."],
        correctAnswerIndex: 1,
        explanation: "Indian states are autonomous but not sovereign."
    },
    {
        id: "ch14-l2-q18",
        question: "The \"Residuary Powers\" (powers not listed in any list) are vested in:",
        options: ["The Centre (Parliament) in India; The States in USA.", "The States in India; The Centre in USA.", "Both in India; Centre in USA.", "The President in India; Congress in USA."],
        correctAnswerIndex: 0,
        explanation: "Residuary powers lie with the Centre in India and States in USA."
    },
    {
        id: "ch14-l2-q19",
        question: "The Constitutional Amendment process in India shows a unitary bias because:",
        options: ["States cannot initiate amendments.", "Most parts of the Constitution can be amended by Parliament alone.", "Even for federal provisions, only half the states need to ratify (not 3/4th like USA).", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All these factors show a unitary bias in the amendment process."
    },
    {
        id: "ch14-l2-q20",
        question: "\"Fiscal Federalism\" in India is characterized by:",
        options: ["Centre having more elastic sources of revenue (Tax power).", "States being dependent on Centre for grants (Finance Commission).", "GST Council deciding indirect tax rates.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All these characterize fiscal federalism in India."
    },
    {
        id: "ch14-l2-q21",
        question: "Assertion (A): India is a \"Quasi-Federal\" state. Reason (R): The Indian Constitution provides for a strong Centre with unitary features like Single Citizenship, Integrated Judiciary, and Emergency provisions. Select the correct answer:",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "Both are true and R correctly explains why India is quasi-federal."
    },
    {
        id: "ch14-l2-q22",
        question: "The concept of \"Cooperative Federalism\" implies:",
        options: ["Centre and States working together for national development.", "Centre dictating terms to States.", "States competing with each other.", "Separation of powers."],
        correctAnswerIndex: 0,
        explanation: "Cooperative Federalism means Centre and States working together."
    },
    {
        id: "ch14-l2-q23",
        question: "Which institution is a prime example of \"Cooperative Federalism\" in India?",
        options: ["Inter-State Council.", "GST Council.", "NITI Aayog.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All these are examples of Cooperative Federalism."
    },
    {
        id: "ch14-l2-q24",
        question: "\"Asymmetric Federalism\" refers to:",
        options: ["Unequal representation of states in Rajya Sabha.", "Special provisions for some states (Article 371 series) due to specific needs.", "Differential treatment of Union Territories.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All these represent aspects of Asymmetric Federalism."
    },
    {
        id: "ch14-l2-q25",
        question: "The CAG of India is often criticized for violating federalism because:",
        options: ["He audits state accounts but is appointed by the President without state consultation.", "He interferes in policy.", "He is an agent of the Parliament.", "He has no power to enforce findings."],
        correctAnswerIndex: 0,
        explanation: "CAG audits state accounts but is appointed centrally without state input."
    },
    {
        id: "ch14-l2-q26",
        question: "The Election Commission of India conducts elections for State Legislatures. This is:",
        options: ["A federal feature.", "A unitary feature (Central body controlling state elections).", "An administrative convenience.", "A violation of state rights."],
        correctAnswerIndex: 1,
        explanation: "A central body (ECI) controlling state elections is a unitary feature."
    },
    {
        id: "ch14-l2-q27",
        question: "\"Competitive Federalism\" (promoted by NITI Aayog) means:",
        options: ["States competing with each other to attract investment and improve governance (Rankings).", "States fighting with the Centre.", "Centre competing with States.", "Political competition."],
        correctAnswerIndex: 0,
        explanation: "Competitive Federalism involves states competing to attract investment."
    },
    {
        id: "ch14-l2-q28",
        question: "In the S.R. Bommai case, the Supreme Court held that:",
        options: ["Federalism is a basic feature.", "States are not mere appendages of the Centre.", "President's Rule is subject to Judicial Review.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "The S.R. Bommai case established all these principles."
    },
    {
        id: "ch14-l2-q29",
        question: "The \"Treaty Making Power\" lies with the Centre. Can the Parliament make a law to implement a treaty on a subject in the State List?",
        options: ["Yes, under Article 253.", "No, it requires state consent.", "Yes, but only during Emergency.", "No, never."],
        correctAnswerIndex: 0,
        explanation: "Article 253 allows Parliament to legislate to implement treaties even on State List subjects."
    },
    {
        id: "ch14-l2-q30",
        question: "Which feature of the Indian Constitution was borrowed from the Canadian Constitution?",
        options: ["Federation with a strong Centre.", "Residuary powers with the Centre.", "Appointment of Governors by the Centre.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All these features were borrowed from the Canadian Constitution."
    }
];

// Level 3: The UPSC Prelims 2026 Simulation (Integrated & Current Affairs)
const LEVEL_3_QUESTIONS = [
    {
        id: "ch14-l3-q1",
        question: "The 16th Finance Commission (under Arvind Panagariya) is currently deliberating. A major point of contention for States is the increasing use of \"Cesses and Surcharges\" by the Centre. Why is this a federal issue?",
        options: ["Because Cesses and Surcharges are not part of the \"Divisible Pool\" of taxes shared with States (Article 270).", "Because they are temporary taxes.", "Because States cannot levy their own cesses.", "Because they violate the GST Act."],
        correctAnswerIndex: 0,
        explanation: "Cesses and Surcharges are not shared with states under Article 270."
    },
    {
        id: "ch14-l3-q2",
        question: "The State of Kerala filed a suit in the Supreme Court (2024) against the Centre's imposition of \"Net Borrowing Ceilings\" (NBC). The Centre argues that under Article 293(3), a State cannot raise a loan without Centre's consent if:",
        options: ["It has any outstanding loan from the Centre.", "It has a fiscal deficit above 3%.", "It is under President's Rule.", "It has defaulted on external commercial borrowings."],
        correctAnswerIndex: 0,
        explanation: "Article 293(3) requires Centre's consent if a State has outstanding loans from Centre."
    },
    {
        id: "ch14-l3-q3",
        question: "The \"GST Compensation Cess\" ended in June 2022 (extended only for loan repayment). States argue this has caused a \"Vertical Fiscal Imbalance\". The GST Council's decision-making process (Article 279A) requires:",
        options: ["A majority of 50% of present and voting.", "A majority of 75% (3/4th) of weighted votes, where the Centre has 1/3rd weight and States have 2/3rd weight.", "Consensus (unanimity).", "Simple majority of States."],
        correctAnswerIndex: 1,
        explanation: "GST Council requires 75% of weighted votes with Centre having 1/3rd weight."
    },
    {
        id: "ch14-l3-q4",
        question: "In the case of State of Punjab vs Governor (2023), the Supreme Court clarified the Governor's power under Article 200. It held that:",
        options: ["The Governor can withhold assent indefinitely (\"Pocket Veto\").", "If the Governor \"withholds assent\", he must return the Bill to the Legislature \"as soon as possible\". If the Legislature passes it again, the Governor must give assent.", "The Governor can refer any bill to the President.", "The Governor acts in his discretion."],
        correctAnswerIndex: 1,
        explanation: "The SC held that the Governor must return bills promptly and cannot sit on them indefinitely."
    },
    {
        id: "ch14-l3-q5",
        question: "Several States (WB, Kerala, TN) have passed Bills to remove the Governor as the \"Chancellor\" of State Universities. The Governor reserves these bills for the President (Article 201). Is this constitutionally valid?",
        options: ["Yes, if the Governor feels the bill derogates from the powers of the High Court.", "Yes, the Governor has discretion to reserve any bill he deems fit (except Money Bills).", "No, education is a State Subject.", "No, it violates federalism."],
        correctAnswerIndex: 1,
        explanation: "The Governor has discretion to reserve bills for the President."
    },
    {
        id: "ch14-l3-q6",
        question: "The Centre proposed amendments to the IAS Cadre Rules (2022) to ensure central deputation of officers. States opposed this. Under the current federal scheme:",
        options: ["An IAS officer serves the State but can be deputed to the Centre only with the concurrence of the State Government and the officer.", "The Centre has the final say in all deputations.", "States have no control over IAS officers.", "Officers are employees of the NITI Aayog."],
        correctAnswerIndex: 0,
        explanation: "Central deputation currently requires concurrence of both State and the officer."
    },
    {
        id: "ch14-l3-q7",
        question: "\"Article 355\" imposes a duty on the Union to protect States against external aggression and internal disturbance. In the context of the Manipur Crisis (2023-24), the Centre reportedly invoked Article 355 to:",
        options: ["Take over the law and order machinery without imposing President's Rule (Article 356).", "Dismiss the State Government.", "Deploy Army only.", "Dissolve the Assembly."],
        correctAnswerIndex: 0,
        explanation: "Article 355 allows Centre to intervene without imposing President's Rule."
    },
    {
        id: "ch14-l3-q8",
        question: "The \"Concurrent List\" (List III) creates potential for conflict. Under Article 254(2), a State law on a Concurrent subject can prevail over an earlier Central law if:",
        options: ["It receives the assent of the Governor.", "It receives the assent of the President.", "It is passed by a 2/3rd majority.", "The Supreme Court allows it."],
        correctAnswerIndex: 1,
        explanation: "Presidential assent allows State law to prevail on Concurrent subjects."
    },
    {
        id: "ch14-l3-q9",
        question: "The Supreme Court's judgment on the \"Powers of Delhi Government\" (2023) held that Delhi (NCT) has legislative power over \"Services\" (Entry 41). The Centre negated this by passing the GNCTD (Amendment) Act, 2023. This highlights:",
        options: ["The supremacy of Parliament over Union Territories (Article 239AA).", "The violation of the Basic Structure of Federalism.", "The concept of Asymmetric Federalism.", "All of the above are part of the legal debate."],
        correctAnswerIndex: 3,
        explanation: "All these are part of the ongoing legal debate."
    },
    {
        id: "ch14-l3-q10",
        question: "Several States (WB, TN, Punjab) have withdrawn \"General Consent\" for the CBI (under Section 6 of DSPE Act). This means:",
        options: ["The CBI cannot register new cases in that State without specific permission from the State Government.", "The CBI cannot enter the State at all.", "The CBI is dissolved in that State.", "The CBI can only investigate Central Govt employees."],
        correctAnswerIndex: 0,
        explanation: "Withdrawal of general consent means CBI needs specific permission for new cases."
    },
    {
        id: "ch14-l3-q11",
        question: "However, the Supreme Court has clarified that the withdrawal of General Consent does not apply to:",
        options: ["Cases referred to CBI by the High Court or Supreme Court.", "Old cases already registered.", "Both (a) and (b).", "Cases involving Ministers."],
        correctAnswerIndex: 2,
        explanation: "Court-referred cases and old cases are exempt from general consent requirement."
    },
    {
        id: "ch14-l3-q12",
        question: "The Enforcement Directorate (ED) under PMLA does not require State consent because:",
        options: ["Money Laundering is a global offense.", "PMLA is a Central Act under the Union List (Foreign Affairs/International treaties), and ED has jurisdiction across India.", "ED is a constitutional body.", "ED is part of the Police."],
        correctAnswerIndex: 1,
        explanation: "PMLA is a Central Act and ED has pan-India jurisdiction."
    },
    {
        id: "ch14-l3-q13",
        question: "The impending Delimitation 2026 (based on Census after 2026) threatens to reduce the seat share of Southern States due to successful population control. This creates a crisis of:",
        options: ["Political Federalism (Representation).", "Fiscal Federalism.", "Administrative Federalism.", "Judicial Federalism."],
        correctAnswerIndex: 0,
        explanation: "This affects political representation - Political Federalism."
    },
    {
        id: "ch14-l3-q14",
        question: "To resolve this, some experts suggest increasing the strength of Lok Sabha but freezing the state-wise ratio as per 1971 Census. This would require:",
        options: ["Amendment to Article 81 and 82.", "A new Delimitation Act.", "Presidential Order.", "NITI Aayog guideline."],
        correctAnswerIndex: 0,
        explanation: "This would require constitutional amendments to Articles 81 and 82."
    },
    {
        id: "ch14-l3-q15",
        question: "The proposal for an All India Judicial Service (AIJS) (Article 312) is opposed by High Courts and States because:",
        options: ["It infringes on the High Court's power to control the Subordinate Judiciary (Article 233-235).", "It violates the language policy (Local language is used in lower courts).", "It centralizes recruitment.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All these are reasons for opposition to AIJS."
    },
    {
        id: "ch14-l3-q16",
        question: "To create the AIJS, the Rajya Sabha must pass a resolution by:",
        options: ["Simple Majority.", "Special Majority (2/3rd present and voting).", "Absolute Majority.", "Consensus."],
        correctAnswerIndex: 1,
        explanation: "Rajya Sabha must pass a resolution by special majority for AIJS."
    },
    {
        id: "ch14-l3-q17",
        question: "Ladakh's demand for the Sixth Schedule (Autonomous Councils) is based on:",
        options: ["Protection of tribal culture and land rights (Article 244(2)).", "Desire for statehood.", "Financial autonomy.", "Strategic location."],
        correctAnswerIndex: 0,
        explanation: "Sixth Schedule protects tribal culture and land rights under Article 244(2)."
    },
    {
        id: "ch14-l3-q18",
        question: "The \"Inner Line Permit\" (ILP) system restricts movement of Indian citizens in certain states (Arunachal, Nagaland, Mizoram, Manipur). This is a restriction on Article 19(1)(d) allowed for:",
        options: ["Protection of interests of Scheduled Tribes (Article 19(5)).", "Security of State.", "Public Order.", "Foreign Relations."],
        correctAnswerIndex: 0,
        explanation: "ILP is allowed for protection of Scheduled Tribes under Article 19(5)."
    },
    {
        id: "ch14-l3-q19",
        question: "Assertion (A): The Rajya Sabha is the federal chamber of the Parliament. Reason (R): It represents the States and protects their interests against Central interference; for instance, it can authorize Parliament to make laws on State List subjects (Article 249). Select the correct answer:",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "Both are true and R correctly explains A."
    },
    {
        id: "ch14-l3-q20",
        question: "Assertion (A): India practices \"Cooperative Federalism\". Reason (R): The NITI Aayog and GST Council are constitutional bodies designed to foster cooperation. Select the correct answer:",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false. (NITI Aayog is not a constitutional body; it is an executive body).", "A is false, but R is true."],
        correctAnswerIndex: 2,
        explanation: "A is true but R is false - NITI Aayog is an executive body, not constitutional."
    },
    {
        id: "ch14-l3-q21",
        question: "The \"Inter-State Council\" (Article 263) was set up in 1990 on the recommendation of:",
        options: ["Sarkaria Commission.", "Punchhi Commission.", "Rajamannar Committee.", "Administrative Reforms Commission."],
        correctAnswerIndex: 0,
        explanation: "The Sarkaria Commission recommended setting up the Inter-State Council."
    },
    {
        id: "ch14-l3-q22",
        question: "The \"Zonal Councils\" are:",
        options: ["Constitutional bodies.", "Statutory bodies (established by States Reorganization Act, 1956).", "Extra-constitutional bodies.", "NGOs."],
        correctAnswerIndex: 1,
        explanation: "Zonal Councils are statutory bodies under the States Reorganization Act, 1956."
    },
    {
        id: "ch14-l3-q23",
        question: "The \"North-Eastern Council\" (NEC) was created by a separate Act in 1971. Its members include:",
        options: ["Governors and Chief Ministers of all 8 NE states.", "Only CMs.", "Only Governors.", "Home Minister and Defence Minister."],
        correctAnswerIndex: 0,
        explanation: "NEC includes Governors and Chief Ministers of all 8 NE states."
    },
    {
        id: "ch14-l3-q24",
        question: "The \"Sarkaria Commission\" (1983) opposed the deletion of Article 356 (President's Rule) but recommended:",
        options: ["It should be used very sparingly, as a measure of last resort.", "It should be used frequently.", "It should be abolished.", "It should be replaced by Governor's Rule."],
        correctAnswerIndex: 0,
        explanation: "Sarkaria Commission recommended sparing use of Article 356."
    },
    {
        id: "ch14-l3-q25",
        question: "The Punchhi Commission (2007) recommended on the appointment of Governors:",
        options: ["The Governor should be a \"detached figure\" and not active in local politics.", "The Chief Minister should be consulted before appointment.", "The Governor should have a fixed tenure of 5 years.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "Punchhi Commission made all these recommendations."
    },
    {
        id: "ch14-l3-q26",
        question: "\"Fiscal Deficit\" targets for States are set by:",
        options: ["FRBM Act (Central and State Acts).", "Finance Commission.", "RBI.", "NITI Aayog."],
        correctAnswerIndex: 0,
        explanation: "FRBM Acts set fiscal deficit targets for States."
    },
    {
        id: "ch14-l3-q27",
        question: "The \"Contingency Fund of India\" is at the disposal of the President. States have their own Contingency Funds at the disposal of:",
        options: ["The Governor.", "The Chief Minister.", "The Finance Minister.", "The State Legislature."],
        correctAnswerIndex: 0,
        explanation: "State Contingency Funds are at the disposal of the Governor."
    },
    {
        id: "ch14-l3-q28",
        question: "In the Mineral Area Development Authority case (2024), the Supreme Court (9-judge bench) is deciding:",
        options: ["Whether States have the power to tax mineral rights (Entry 50, List II) or if it is overridden by the Centre's MMDR Act (Entry 54, List I).", "Whether mining is illegal.", "Whether coal blocks can be auctioned.", "Environmental clearance."],
        correctAnswerIndex: 0,
        explanation: "The case concerns State's power to tax mineral rights vs Centre's MMDR Act."
    },
    {
        id: "ch14-l3-q29",
        question: "The \"Model Code of Conduct\" (MCC) during elections often leads to federal friction because:",
        options: ["It freezes developmental projects initiated by the State Government.", "It transfers officials without State consent.", "It stops welfare schemes.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "MCC causes friction for all these reasons."
    },
    {
        id: "ch14-l3-q30",
        question: "Which of the following is NOT a federal feature? (In the Indian Constitution context, 'Appointment of Governor', 'Unequal RS seats', and 'Single Citizenship' are ALL unitary features)",
        options: ["Appointment of Governor.", "Equal representation of states in Rajya Sabha (India doesn't have this).", "Single Citizenship.", "All of the above are unitary biases/deviations."],
        correctAnswerIndex: 3,
        explanation: "All listed are unitary features, not federal features."
    }
];

export const CHAPTER_14_LEVELS: ChapterLevelData = {
    topicId: 14,
    levels: [
        {
            levelId: 1,
            title: "The Text-Book Stickler",
            description: "Strictly Chapter 14",
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
            description: "Integrated & Current Affairs",
            questions: LEVEL_3_QUESTIONS
        }
    ]
};
