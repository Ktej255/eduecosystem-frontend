import { ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler (Strictly Chapter 8)
const LEVEL_1_QUESTIONS = [
    {
        question: "The Directive Principles of State Policy (DPSP) are enumerated in Part IV of the Constitution from Articles:",
        options: ["36 to 51", "36 to 51-A", "12 to 35", "52 to 78"],
        correctAnswerIndex: 0, // a) 36 to 51
        explanation: "Articles 36 to 51 in Part IV."
    },
    {
        question: "The concept of DPSP was borrowed from the Constitution of:",
        options: ["USA", "Canada", "Ireland (Irish Constitution)", "Australia"],
        correctAnswerIndex: 2, // c) Ireland
        explanation: "Borrowed from Irish Constitution."
    },
    {
        question: "Dr. B.R. Ambedkar described these principles as:",
        options: ["Novel features of the Indian Constitution.", "Soul of the Constitution.", "Conscience of the Constitution.", "Key-note of the Constitution."],
        correctAnswerIndex: 0, // a) Novel features
        explanation: "Ambedkar called them 'Novel features'."
    },
    {
        question: "Granville Austin described the Directive Principles and the Fundamental Rights as the:",
        options: ["Conscience of the Constitution.", "Heart and Soul of the Constitution.", "Basic Structure of the Constitution.", "Philosophy of the Constitution."],
        correctAnswerIndex: 0, // a) Conscience
        explanation: "Conscience of the Constitution."
    },
    {
        question: "Article 36 defines the term 'State'. Its meaning is:",
        options: ["Different from the definition given in Part III (Fundamental Rights).", "Same as the definition given in Part III (Article 12).", "Restricted to the Executive organ only.", "Restricted to the Legislature only."],
        correctAnswerIndex: 1, // b) Same as Part III
        explanation: "Same meaning as in Part III (Article 12)."
    },
    {
        question: "Article 37 declares that the Directive Principles are:",
        options: ["Justiciable (enforceable by courts).", "Non-justiciable (not enforceable by courts).", "Mandatory.", "Optional suggestions."],
        correctAnswerIndex: 1, // b) Non-justiciable
        explanation: "They are non-justiciable."
    },
    {
        question: "Article 37 also declares that these principles are fundamental in the:",
        options: ["Governance of the country.", "Making of laws.", "Administration of justice.", "Protection of rights."],
        correctAnswerIndex: 0, // a) Governance
        explanation: "Fundamental in the governance of the country."
    },
    {
        question: "The Constitution does not contain any classification of Directive Principles. However, on the basis of their content and direction, they are usually classified into three broad categories. Which is NOT one of them?",
        options: ["Socialist Principles", "Gandhian Principles", "Liberal-Intellectual Principles", "Religious Principles"],
        correctAnswerIndex: 3, // d) Religious Principles
        explanation: "Religious Principles is not a classification."
    },
    {
        question: "Article 38 directs the State to secure a social order for the promotion of welfare of the people by securing:",
        options: ["Justice—social, economic and political.", "Liberty—thought, expression and belief.", "Equality—status and opportunity.", "Fraternity."],
        correctAnswerIndex: 0, // a) Justice
        explanation: "Justice - social, economic and political."
    },
    {
        question: "Article 39 contains specific principles to be followed by the State. Which of the following is NOT one of them?",
        options: ["Right to adequate means of livelihood.", "Equitable distribution of material resources of the community.", "Prevention of concentration of wealth.", "Organization of village panchayats."],
        correctAnswerIndex: 3, // d) Organization of village panchayats
        explanation: "Village Panchayats is Article 40."
    },
    {
        question: "Article 39-A provides for:",
        options: ["Equal justice and free legal aid.", "Uniform Civil Code.", "Living wage for workers.", "Participation of workers in management."],
        correctAnswerIndex: 0, // a) Equal justice and free legal aid
        explanation: "Equal justice and free legal aid."
    },
    {
        question: "Article 41 secures the right to work, to education and to public assistance in cases of:",
        options: ["Unemployment, old age, sickness and disablement.", "Poverty only.", "Natural calamities.", "War."],
        correctAnswerIndex: 0, // a) Unemployment, old age...
        explanation: "Unemployment, old age, sickness and disablement."
    },
    {
        question: "Article 42 makes provision for just and humane conditions of work and:",
        options: ["Maternity relief.", "Paternity relief.", "Child care.", "Old age pension."],
        correctAnswerIndex: 0, // a) Maternity relief
        explanation: "Maternity relief."
    },
    {
        question: "Article 43 secures a living wage, a decent standard of life and social and cultural opportunities for:",
        options: ["All workers.", "Industrial workers only.", "Agricultural workers only.", "Government servants only."],
        correctAnswerIndex: 0, // a) All workers
        explanation: "All workers (agricultural, industrial or otherwise)."
    },
    {
        question: "Article 43-A (added by 42nd Amendment) directs the State to take steps to secure the participation of workers in the:",
        options: ["Management of industries.", "Ownership of industries.", "Trade unions.", "Political parties."],
        correctAnswerIndex: 0, // a) Management
        explanation: "Management of industries."
    },
    {
        question: "Article 47 directs the State to raise the level of nutrition and the standard of living of its people and to improve:",
        options: ["Public health.", "Environment.", "Education.", "Agriculture."],
        correctAnswerIndex: 0, // a) Public health
        explanation: "Public health."
    },
    {
        question: "Article 40 directs the State to organize:",
        options: ["Village Panchayats.", "Municipalities.", "Co-operative Societies.", "Cottage Industries."],
        correctAnswerIndex: 0, // a) Village Panchayats
        explanation: "Village Panchayats."
    },
    {
        question: "Article 43 promotes:",
        options: ["Cottage industries on an individual or co-operation basis in rural areas.", "Heavy industries.", "Small scale industries.", "Service sector."],
        correctAnswerIndex: 0, // a) Cottage industries
        explanation: "Cottage industries in rural areas."
    },
    {
        question: "Article 43-B (added by 97th Amendment) promotes the voluntary formation, autonomous functioning, democratic control and professional management of:",
        options: ["Co-operative Societies.", "NGOs.", "Self Help Groups.", "Trade Unions."],
        correctAnswerIndex: 0, // a) Co-operative Societies
        explanation: "Co-operative Societies."
    },
    {
        question: "Article 46 promotes the educational and economic interests of:",
        options: ["SCs, STs, and other weaker sections.", "Minorities.", "Women and Children.", "Disabled persons."],
        correctAnswerIndex: 0, // a) SCs, STs, weaker sections
        explanation: "SCs, STs, and other weaker sections."
    },
    {
        question: "Article 47 prohibits the consumption of:",
        options: ["Intoxicating drinks and drugs which are injurious to health.", "Tobacco products.", "Meat.", "Fast food."],
        correctAnswerIndex: 0, // a) Intoxicating drinks
        explanation: "Intoxicating drinks and drugs."
    },
    {
        question: "Article 48 prohibits the slaughter of:",
        options: ["Cows, calves and other milch and draught cattle.", "All animals.", "Wild animals.", "Endangered species."],
        correctAnswerIndex: 0, // a) Cows, calves etc
        explanation: "Cows, calves and other milch and draught cattle."
    },
    {
        question: "Article 44 seeks to secure for all citizens a:",
        options: ["Uniform Civil Code throughout the territory of India.", "Uniform Criminal Code.", "Common language.", "Common religion."],
        correctAnswerIndex: 0, // a) UCC
        explanation: "Uniform Civil Code."
    },
    {
        question: "Article 45 (as amended by 86th Amendment) directs the State to provide early childhood care and education for all children until they complete the age of:",
        options: ["Six years.", "Fourteen years.", "Eighteen years.", "Three years."],
        correctAnswerIndex: 0, // a) Six years
        explanation: "Until they complete the age of six years."
    },
    {
        question: "Article 48 directs the State to organize agriculture and animal husbandry on:",
        options: ["Modern and scientific lines.", "Traditional lines.", "Organic lines.", "Cooperative lines."],
        correctAnswerIndex: 0, // a) Modern and scientific
        explanation: "Modern and scientific lines."
    },
    {
        question: "Article 48-A (added by 42nd Amendment) directs the State to protect and improve the environment and to safeguard:",
        options: ["Forests and wild life.", "Rivers and lakes.", "Mountains and hills.", "Heritage sites."],
        correctAnswerIndex: 0, // a) Forests and wild life
        explanation: "Forests and wild life."
    },
    {
        question: "Article 49 directs the State to protect monuments, places and objects of:",
        options: ["Artistic or historic interest declared to be of national importance.", "Religious importance.", "Tourist importance.", "Local importance."],
        correctAnswerIndex: 0, // a) National importance
        explanation: "National importance."
    },
    {
        question: "Article 50 separates the judiciary from the:",
        options: ["Executive.", "Legislature.", "Media.", "Public."],
        correctAnswerIndex: 0, // a) Executive
        explanation: "Executive."
    },
    {
        question: "Article 51 promotes international peace and security and encourages:",
        options: ["Settlement of international disputes by arbitration.", "Use of force for peace.", "Formation of military alliances.", "Non-alignment."],
        correctAnswerIndex: 0, // a) Arbitration
        explanation: "Settlement by arbitration."
    },
    {
        question: "Which Amendment Act added four new Directive Principles (Articles 39, 39A, 43A, 48A)?",
        options: ["42nd Amendment Act, 1976", "44th Amendment Act, 1978", "86th Amendment Act, 2002", "97th Amendment Act, 2011"],
        correctAnswerIndex: 0, // a) 42nd
        explanation: "42nd Amendment Act, 1976."
    },
    {
        question: "The 44th Amendment Act of 1978 added one more Directive Principle, requiring the State to minimize inequalities in income, status, facilities and opportunities (Article 38).",
        options: ["True", "False"],
        correctAnswerIndex: 0, // a) True
        explanation: "True."
    },
    {
        question: "In the Champakam Dorairajan case (1951), the Supreme Court ruled that in case of any conflict between Fundamental Rights and Directive Principles, the former would prevail.",
        options: ["True", "False"],
        correctAnswerIndex: 0, // a) True
        explanation: "True."
    },
    {
        question: "In the Golaknath case (1967), the Supreme Court ruled that Fundamental Rights cannot be amended for the implementation of Directive Principles.",
        options: ["True", "False"],
        correctAnswerIndex: 0, // a) True
        explanation: "True."
    },
    {
        question: "In the Minerva Mills case (1980), the Supreme Court held that the Indian Constitution is founded on the bedrock of the balance between Fundamental Rights and Directive Principles.",
        options: ["True", "False"],
        correctAnswerIndex: 0, // a) True
        explanation: "True."
    },
    {
        question: "Directives outside Part IV: Article 335 deals with the claims of SCs and STs to:",
        options: ["Services and posts.", "Education.", "Land allotment.", "Political representation."],
        correctAnswerIndex: 0, // a) Services and posts
        explanation: "Services and posts."
    }
];

// Level 2: The Conceptual Bridge (Applied Knowledge)
const LEVEL_2_QUESTIONS = [
    {
        question: "The Directive Principles constitute a \"comprehensive economic, social and political programme\" for a modern welfare state. They aim at realizing the high ideals of Justice, Liberty, Equality, and Fraternity as outlined in:",
        options: ["The Fundamental Rights.", "The Preamble.", "The Fundamental Duties.", "The Objectives Resolution."],
        correctAnswerIndex: 1, // b) Preamble
        explanation: "Outlined in the Preamble."
    },
    {
        question: "Article 37 says DPSP are \"fundamental in the governance of the country.\" This implies that:",
        options: ["The courts can compel the government to implement them.", "It is the duty of the State to apply these principles in making laws.", "They are superior to Fundamental Rights.", "They can override the Constitution."],
        correctAnswerIndex: 1, // b) Duty of state
        explanation: "Duty of the State to apply these principles."
    },
    {
        question: "Which of the following DPSP reflects the \"Liberal-Intellectual\" ideology?",
        options: ["To organize village panchayats.", "To secure a uniform civil code.", "To promote cottage industries.", "To prohibit slaughter of cows."],
        correctAnswerIndex: 1, // b) UCC
        explanation: "UCC is Liberal-Intellectual."
    },
    {
        question: "Which of the following DPSP reflects the \"Gandhian\" ideology?",
        options: ["To separate the judiciary from the executive.", "To promote international peace and security.", "To promote the educational and economic interests of SCs/STs.", "To secure a uniform civil code."],
        correctAnswerIndex: 2, // c) SC/STs interests
        explanation: "Promotion of interests of SCs/STs/weaker sections (Art 46) is Gandhian."
    },
    {
        question: "Which of the following DPSP reflects the \"Socialist\" ideology?",
        options: ["To protect monuments of national importance.", "To secure the right to adequate means of livelihood.", "To prohibit the consumption of intoxicating drinks.", "To organize agriculture on modern lines."],
        correctAnswerIndex: 1, // b) Livelihood
        explanation: "Right to livelihood (Art 39a) is Socialist."
    },
    {
        question: "The 42nd Amendment Act (1976) added four new principles. Which of the following was NOT added by this amendment?",
        options: ["To secure opportunities for healthy development of children (Article 39).", "To promote equal justice and provide free legal aid (Article 39A).", "To minimize inequalities in income, status, facilities, and opportunities (Article 38).", "To take steps to secure the participation of workers in the management of industries (Article 43A)."],
        correctAnswerIndex: 2, // c) Article 38
        explanation: "Article 38(2) was added by 44th Amendment."
    },
    {
        question: "The 86th Amendment Act (2002) changed the subject matter of Article 45. Originally, Article 45 directed the State to provide free and compulsory education for:",
        options: ["Children up to 6 years.", "Children up to 14 years.", "Children between 6 and 14 years.", "All citizens."],
        correctAnswerIndex: 1, // b) Up to 14 years
        explanation: "Originally up to 14 years."
    },
    {
        question: "Which Amendment Act gave constitutional status to \"Co-operative Societies\" by adding Article 43B?",
        options: ["73rd Amendment", "74th Amendment", "97th Amendment", "91st Amendment"],
        correctAnswerIndex: 2, // c) 97th
        explanation: "97th Amendment."
    },
    {
        question: "The \"Legal Services Authorities Act, 1987\" was enacted to implement which specific DPSP?",
        options: ["Article 40 (Panchayats).", "Article 39A (Free Legal Aid).", "Article 44 (UCC).", "Article 50 (Separation of Judiciary)."],
        correctAnswerIndex: 1, // b) 39A
        explanation: "Article 39A."
    },
    {
        question: "The \"Wildlife (Protection) Act, 1972\" and \"Forest (Conservation) Act, 1980\" are steps taken to implement:",
        options: ["Article 48A.", "Article 49.", "Article 47.", "Article 51A."],
        correctAnswerIndex: 0, // a) 48A
        explanation: "Article 48A."
    },
    {
        question: "In the Champakam Dorairajan Case (1951), the Supreme Court held that DPSP:",
        options: ["Are superior to Fundamental Rights.", "Are subsidiary to Fundamental Rights.", "Are equal to Fundamental Rights.", "Are enforceable by courts."],
        correctAnswerIndex: 1, // b) Subsidiary
        explanation: "Subsidiary to Fundamental Rights."
    },
    {
        question: "To overcome the Champakam Dorairajan judgment, the Parliament enacted which Amendment Act (the first one to amend FRs for DPSP)?",
        options: ["1st Amendment Act, 1951.", "4th Amendment Act, 1955.", "25th Amendment Act, 1971.", "42nd Amendment Act, 1976."],
        correctAnswerIndex: 0, // a) 1st Amendment
        explanation: "1st Amendment Act, 1951 (Inserted Art 31A, 31B)."
    },
    {
        question: "The 25th Amendment Act (1971) inserted a new Article 31C. It provided that no law which seeks to implement the principles specified in ______ shall be void on the ground of contravention of Article 14, 19, or 31.",
        options: ["Article 39(b) and 39(c).", "All DPSP.", "Article 38 and 39.", "Article 40 and 44."],
        correctAnswerIndex: 0, // a) 39b and 39c
        explanation: "Article 39(b) and 39(c)."
    },
    {
        question: "In the Kesavananda Bharati Case (1973), the Supreme Court regarding Article 31C held that:",
        options: ["The entire Article 31C is unconstitutional.", "The first part (protecting laws under 39b/c) is valid, but the second part (barring judicial review) is unconstitutional.", "The second part is valid, but the first part is invalid.", "The entire Article 31C is valid."],
        correctAnswerIndex: 1, // b) First part valid, second invalid
        explanation: "First part valid, second invalid."
    },
    {
        question: "The 42nd Amendment Act (1976) extended the protection of Article 31C to laws implementing:",
        options: ["Only Article 39(b) and 39(c).", "Any of the Directive Principles.", "Socialist Principles only.", "Gandhian Principles only."],
        correctAnswerIndex: 1, // b) Any DPSP
        explanation: "Any of the Directive Principles."
    },
    {
        question: "In the Minerva Mills Case (1980), the Supreme Court struck down the extension of Article 31C made by the 42nd Amendment. Why?",
        options: ["Because it violated the \"Basic Structure\" by destroying the balance between FR and DPSP.", "Because DPSP are not justiciable.", "Because it removed the Right to Property.", "Because it was passed during Emergency."],
        correctAnswerIndex: 0, // a) Balance
        explanation: "Destroying the balance between FR and DPSP (Basic Structure)."
    },
    {
        question: "Therefore, the present legal position is that Fundamental Rights enjoy supremacy over Directive Principles. However, laws implementing ______ can supersede Article 14 and 19.",
        options: ["Article 39(b) and 39(c).", "All DPSP.", "Article 44.", "No DPSP."],
        correctAnswerIndex: 0, // a) 39b and 39c
        explanation: "Article 39(b) and 39(c)."
    },
    {
        question: "Directives Outside Part IV: Article 335 (Part XVI) says that the claims of SC/STs to services and posts shall be taken into consideration consistently with:",
        options: ["The maintenance of efficiency of administration.", "The social justice goals.", "The population ratio.", "The availability of funds."],
        correctAnswerIndex: 0, // a) Efficiency
        explanation: "Maintenance of efficiency of administration."
    },
    {
        question: "Article 350-A (Part XVII) directs every State to provide adequate facilities for instruction in the mother-tongue at the:",
        options: ["Primary stage of education to children belonging to linguistic minority groups.", "Secondary stage of education.", "Higher education level.", "All levels of education."],
        correctAnswerIndex: 0, // a) Primary stage
        explanation: "Primary stage of education."
    },
    {
        question: "Article 351 (Part XVII) directs the Union to promote the spread of the ______ language.",
        options: ["Sanskrit", "Hindi", "English", "Hindustani"],
        correctAnswerIndex: 1, // b) Hindi
        explanation: "Hindi."
    },
    {
        question: "Comparative & Analytical: The DPSP are similar to the \"Instrument of Instructions\" enumerated in the:",
        options: ["Government of India Act, 1919.", "Government of India Act, 1935.", "Indian Independence Act, 1947.", "Cabinet Mission Plan."],
        correctAnswerIndex: 1, // b) GoI Act 1935
        explanation: "Government of India Act, 1935."
    },
    {
        question: "Who described the DPSP as a \"Cheque on a bank, payable only when the resources of the bank permit\"?",
        options: ["K.T. Shah", "T.T. Krishnamachari", "Sir B.N. Rau", "Dr. B.R. Ambedkar"],
        correctAnswerIndex: 0, // a) K.T. Shah
        explanation: "K.T. Shah."
    },
    {
        question: "Who described the DPSP as a \"veritable dustbin of sentiments\"?",
        options: ["K.C. Wheare", "T.T. Krishnamachari", "Sir Ivor Jennings", "Srinivasan"],
        correctAnswerIndex: 1, // b) T.T. Krishnamachari
        explanation: "T.T. Krishnamachari."
    },
    {
        question: "Fundamental Rights are ______ in nature, while Directive Principles are ______ in nature.",
        options: ["Positive; Negative", "Negative; Positive", "Justiciable; Non-justiciable", "Temporary; Permanent"],
        correctAnswerIndex: 1, // b) Negative; Positive
        explanation: "FRs are negative (prohibitions), DPSP are positive (instructions)."
    },
    {
        question: "\"Economic Democracy\" is the goal of ______, while \"Political Democracy\" is the goal of ______.",
        options: ["Fundamental Rights; DPSP", "DPSP; Fundamental Rights", "Preamble; Fundamental Duties", "Fundamental Duties; Preamble"],
        correctAnswerIndex: 1, // b) DPSP; FR
        explanation: "Economic Democracy (DPSP); Political Democracy (FR)."
    },
    {
        question: "Article 44 (Uniform Civil Code) has been implemented in which state of India for a long time (even before Independence)?",
        options: ["Goa", "Kerala", "Mizoram", "Jammu & Kashmir"],
        correctAnswerIndex: 0, // a) Goa
        explanation: "Goa (Portuguese Civil Code)."
    },
    {
        question: "The Khadi and Village Industries Commission (KVIC) was established to implement:",
        options: ["Article 40", "Article 43", "Article 47", "Article 48"],
        correctAnswerIndex: 1, // b) Article 43
        explanation: "Article 43 (Cottage Industries)."
    },
    {
        question: "The \"Criminal Procedure Code, 1973\" separated the judiciary from the executive in the public services of the State. This fulfilled:",
        options: ["Article 39A", "Article 44", "Article 50", "Article 51"],
        correctAnswerIndex: 2, // c) Article 50
        explanation: "Article 50."
    },
    {
        question: "Assertion (A): The DPSP are non-justiciable. Reason (R): The Constitution-makers did not want to burden the future governments with strict legal obligations due to lack of financial resources.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation."
    },
    {
        question: "Which of the following acts was enacted to implement the DPSP related to \"Social Security\" (Article 41)?",
        options: ["Minimum Wages Act, 1948.", "Maternity Benefit Act, 1961.", "Old Age Pension Schemes (NSAP).", "All of the above."],
        correctAnswerIndex: 3, // d) All of the above
        explanation: "All implement social security/welfare."
    }
];

// Level 3: The UPSC Simulation 2026 (Integrated & Current Affairs)
const LEVEL_3_QUESTIONS = [
    {
        question: "With the implementation of the Uttarakhand UCC (2024), the constitutional debate on Article 44 has resurfaced. Opponents argue that a mandatory UCC violates Article 25. The Supreme Court's consistent stand (e.g., Shah Bano, Sarla Mudgal) has been that:",
        options: ["Article 25 (Religious Freedom) is absolute and overrides Article 44.", "Article 44 is a \"dead letter\" and should not be implemented.", "Article 25 guarantees religious freedom subject to \"public order, morality and health\" and \"other provisions of Part III,\" but personal laws are not \"laws\" under Article 13.", "Parliament has no power to legislate on personal laws."],
        correctAnswerIndex: 2, // c) Art 25 subject to...
        explanation: "Art 25 is subject to Part III; personal laws not laws under Art 13."
    },
    {
        question: "The \"Goa Civil Code\" is often cited as a model. However, it is a Portuguese legacy. Which specific feature of the Goa Code contradicts the modern understanding of a \"Uniform\" and \"Gender Just\" code?",
        options: ["It allows for \"Polygamy\" for Hindu men under specific circumstances (if the wife fails to deliver a male child by age 30).", "It mandates compulsory registration of marriage.", "It provides for equal division of property between spouses.", "It bans Triple Talaq."],
        correctAnswerIndex: 0, // a) Polygamy
        explanation: "Allows polygamy for Hindus in specific circumstances."
    },
    {
        question: "The \"Law Commission of India\" (22nd) solicited views on the UCC in 2023. Its predecessor (21st Law Commission) had observed that:",
        options: ["A UCC is neither necessary nor desirable at this stage.", "A UCC is urgently required to promote national integration.", "A UCC should be implemented state-by-state.", "A UCC violates the Basic Structure."],
        correctAnswerIndex: 0, // a) Neither necessary nor desirable
        explanation: "Neither necessary nor desirable at this stage."
    },
    {
        question: "The debate between \"Right to Work\" (MNREGA - Article 41) and \"Universal Basic Income\" (UBI) is ongoing. Economists argue that UBI fulfills the DPSP of \"Economic Justice\" (Article 38) better because:",
        options: ["It reduces administrative leakage.", "It provides \"choice\" to the beneficiary (Liberty).", "It covers the \"unemployable\" (elderly, disabled) who cannot work under MNREGA.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "All are arguments for UBI."
    },
    {
        question: "The Rajasthan Platform Based Gig Workers (Registration and Welfare) Act, 2023 is a pioneering law implementing Article 43 (Social Security). Gig workers (Swiggy/Zomato etc.) fall under the \"Unorganized Sector.\" Constitutional experts argue that denying them \"Employee\" status violates:",
        options: ["Article 14 (Equality).", "Article 21 (Right to Livelihood).", "Article 23 (Forced Labor - if pay is below minimum wage).", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Violates 14, 21, and possibly 23."
    },
    {
        question: "\"Equal Pay for Equal Work\" (Article 39(d)) was declared a constitutional goal by the Supreme Court. In the case of Contractual Employees vs Permanent Employees, the Court held that:",
        options: ["The principle applies if the nature of duties and responsibilities are identical.", "It does not apply because contractual employees have a different contract.", "It is only a DPSP, hence unenforceable.", "Market forces determine wages, not the Constitution."],
        correctAnswerIndex: 0, // a) Identical duties
        explanation: "Applies if duties are identical."
    },
    {
        question: "The \"Right to be Free from Adverse Effects of Climate Change\" was recognized as a distinct Fundamental Right by the Supreme Court in 2024 (Great Indian Bustard Case). This right is derived from:",
        options: ["Article 21 read with Article 48A and 51A(g).", "Article 14 only.", "Article 19(1)(g) only.", "The Paris Agreement."],
        correctAnswerIndex: 0, // a) 21 + 48A + 51A
        explanation: "Article 21 read with 48A and 51A(g)."
    },
    {
        question: "The Forest (Conservation) Amendment Act, 2023 exempted certain strategic border areas from clearance. Critics argue this dilutes Article 48A. The government's defense relies on:",
        options: ["Article 51 (Security of State/International relations).", "Article 19(2) (Reasonable restrictions for security).", "The \"Public Trust Doctrine\".", "The \"Polluter Pays Principle\"."],
        correctAnswerIndex: 0, // a) Art 51/Security
        explanation: "Security of State (implied in constitutional scheme, Art 51 context usually Intl Peace, but national security is primary defense)."
    },
    {
        question: "\"Prohibition of Intoxicating Drinks\" (Article 47) is implemented by states like Bihar and Gujarat. The constitutional challenge to these \"Liquor Bans\" is usually based on:",
        options: ["Article 19(1)(g) (Right to trade).", "Article 21 (Right to Choice/Privacy).", "Article 14 (Arbitrariness).", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Challenges involve Trade, Privacy/Choice, Arbitrariness."
    },
    {
        question: "The Supreme Court (2021) struck down part of the 97th Amendment (Cooperatives) because:",
        options: ["\"Cooperative Societies\" is exclusively a State Subject (Entry 32, List II).", "The Amendment was not ratified by half of the states (Article 368(2)).", "It violated the Basic Structure of Federalism.", "All of the above (Specifically for multi-state cooperatives, it was upheld; for state cooperatives, it was struck down)."],
        correctAnswerIndex: 3, // d) All
        explanation: "Struck down for state cooperatives due to lack of ratification/federalism."
    },
    {
        question: "Article 40 (Village Panchayats) was a \"Gandhian\" dream. However, the 73rd Amendment (1992) formalized it. The current debate on \"Simultaneous Elections\" suggests a \"Common Electoral Roll\" for Panchayat, Assembly, and Lok Sabha elections. This requires amending:",
        options: ["Article 243K and Article 324.", "Article 40 only.", "The Representation of People Act only.", "No amendment is needed."],
        correctAnswerIndex: 0, // a) 243K and 324
        explanation: "Requires amending 243K (State EC) and 324 (Central EC)."
    },
    {
        question: "The \"National Judicial Appointments Commission\" (NJAC) verdict relied heavily on the \"Independence of Judiciary\" as a Basic Feature. This concept is explicitly mentioned in:",
        options: ["Article 50 (DPSP).", "Article 124 (Establishment of SC).", "Preamble.", "Fundamental Duties."],
        correctAnswerIndex: 0, // a) Article 50
        explanation: "Explicitly mentioned in Article 50."
    },
    {
        question: "The \"Executive Magistracy\" (DM/SDM) retaining powers to issue Section 144 orders (CrPC/BNSS) is often criticized as a violation of Article 50 (Separation of Judiciary from Executive). The counter-argument is that:",
        options: ["These are \"preventive\" administrative powers, not \"judicial\" powers.", "Article 50 applies only to criminal trials.", "The DM acts as a court under Article 226.", "Article 50 is not justiciable."],
        correctAnswerIndex: 0, // a) Preventive
        explanation: "Considered preventive administrative powers."
    },
    {
        question: "India's \"Nuclear Doctrine\" (No First Use) and refusal to sign the NPT (Non-Proliferation Treaty) are guided by:",
        options: ["Article 51 (Promote international peace and security).", "Article 1 (Sovereignty).", "Strategic Autonomy (Non-Alignment).", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "Guided by Art 51, Sovereignty, and Strategic Autonomy."
    },
    {
        question: "The Citizenship Amendment Act (CAA) debate involved Article 51(c) (\"Foster respect for international law\"). Critics argued CAA violates the Refugee Convention. The Government's stand:",
        options: ["India is not a signatory to the Refugee Convention, so no violation.", "Article 51 is non-justiciable.", "CAA is a domestic law for citizenship, not a refugee law.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "All are part of the government's stand."
    },
    {
        question: "Assertion (A): Directives addressed to the State are not enforceable by courts. Reason (R): If the State fails to implement them, the remedy lies in the \"Court of the People\" (Elections), not the Court of Law.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation."
    },
    {
        question: "Assertion (A): The Supreme Court has elevated many DPSPs to the status of Fundamental Rights. Reason (R): By reading Article 21 (Right to Life) broadly, the Court has included rights like Health, Environment, and Livelihood (originally DPSPs) into it.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation."
    },
    {
        question: "The \"Harmonious Construction\" rule used in Kerala Education Bill case (1957) regarding DPSP means:",
        options: ["FRs and DPSP should be interpreted in a way that they support each other.", "FRs always override DPSP.", "DPSP always override FRs.", "Courts should ignore conflict."],
        correctAnswerIndex: 0, // a) Support each other
        explanation: "Interpret to support each other."
    },
    {
        question: "Article 31C is a \"super-constitutional\" provision because:",
        options: ["It validates laws even if they violate the \"Golden Triangle\" (14, 19).", "It allows the Parliament to amend the Basic Structure.", "It cannot be amended.", "It applies to all DPSPs."],
        correctAnswerIndex: 0, // a) Validates laws
        explanation: "Validates laws against 14 and 19."
    },
    {
        question: "The \"Cow Slaughter Ban\" (Article 48) was upheld by the Supreme Court in Hanif Qureshi case (1958) as a reasonable restriction on:",
        options: ["Article 19(1)(g) (Butchers' right to trade).", "Article 25 (Muslims' right to sacrifice - held sacrifice of cow is not essential).", "Both (a) and (b).", "Neither."],
        correctAnswerIndex: 2, // c) Both
        explanation: "Upheld against both 19(1)(g) and 25."
    },
    {
        question: "Which DPSP was added by the 97th Amendment Act, 2011?",
        options: ["Promotion of Co-operative Societies (43B).", "Free Legal Aid (39A).", "Protection of Environment (48A).", "Participation of workers (43A)."],
        correctAnswerIndex: 0, // a) 43B
        explanation: "Article 43B (Co-operative Societies)."
    },
    {
        question: "The \"Mid-Day Meal Scheme\" (now PM-POSHAN) primarily implements which DPSP?",
        options: ["Article 47 (Raising level of nutrition).", "Article 45 (Education).", "Article 41 (Public Assistance).", "Article 39(f) (Child development)."],
        correctAnswerIndex: 0, // a) Article 47
        explanation: "Article 47."
    },
    {
        question: "The \"Archaeological Survey of India\" (ASI) functions to fulfill the mandate of:",
        options: ["Article 49 (Protection of monuments).", "Article 48A (Environment).", "Article 51A(f) (Heritage duty).", "Article 29 (Culture)."],
        correctAnswerIndex: 0, // a) Article 49
        explanation: "Article 49."
    },
    {
        question: "\"Equal Justice and Free Legal Aid\" (Article 39A) is the basis for:",
        options: ["Lok Adalats.", "NALSA (National Legal Services Authority).", "Public Interest Litigation (PIL).", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "All (Lok Adalats, NALSA, PIL)."
    },
    {
        question: "The \"Maternity Benefit (Amendment) Act, 2017\" increasing leave to 26 weeks is a direct implementation of:",
        options: ["Article 42.", "Article 41.", "Article 43.", "Article 39."],
        correctAnswerIndex: 0, // a) Article 42
        explanation: "Article 42."
    },
    {
        question: "Which of the following is NOT a Socialist Principle?",
        options: ["Prevention of concentration of wealth (39c).", "Right to work (41).", "Organization of Village Panchayats (40).", "Equal pay for equal work (39d)."],
        correctAnswerIndex: 2, // c) Village Panchayats
        explanation: "Panchayats (Art 40) is Gandhian."
    },
    {
        question: "\"Participation of workers in management of industries\" (Article 43A) is:",
        options: ["Mandatory for all private companies.", "A goal to be achieved by legislation (e.g., Factories Act).", "A Fundamental Right of trade unions.", "Applicable only to PSUs."],
        correctAnswerIndex: 1, // b) Goal
        explanation: "Goal achieved by legislation."
    },
    {
        question: "The \"Prevention of Atrocities (SC/ST) Act, 1989\" fulfills the mandate of:",
        options: ["Article 46 (Promote economic interests and protect from social injustice).", "Article 17 (Untouchability).", "Both (a) and (b).", "Article 38 (Social Order)."],
        correctAnswerIndex: 2, // c) Both
        explanation: "Fulfills Art 46 and Art 17."
    },
    {
        question: "\"Living Wage\" (Article 43) vs \"Minimum Wage\". The Supreme Court has held that:",
        options: ["Minimum wage is a fundamental right (Article 23 - forced labor if paid less).", "Living wage is the ideal goal (DPSP).", "Fair wage lies between minimum and living wage.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "All statements intersect correctly (Reptakos Brett case)."
    },
    {
        question: "The \"Old Age Pension\" schemes (like Atal Pension Yojana) implement:",
        options: ["Article 41 (Public assistance in old age).", "Article 42 (Humane conditions).", "Article 43 (Living wage).", "Article 47 (Standard of living)."],
        correctAnswerIndex: 0, // a) Article 41
        explanation: "Article 41."
    }
];

export const CHAPTER_8_LEVELS: ChapterLevelData = {
    topicId: 8,
    levels: [
        {
            levelId: 1,
            title: "The Text-Book Stickler",
            description: "Strictly Chapter 8: Direct Recall.",
            questions: LEVEL_1_QUESTIONS.map((q, i) => ({ ...q, id: `ch8-l1-q${i + 1}` }))
        },
        {
            levelId: 2,
            title: "The Conceptual Bridge",
            description: "Applied Knowledge & Analysis.",
            questions: LEVEL_2_QUESTIONS.map((q, i) => ({ ...q, id: `ch8-l2-q${i + 1}` }))
        },
        {
            levelId: 3,
            title: "UPSC Simulation 2026",
            description: "Integrated & Current Affairs Context.",
            questions: LEVEL_3_QUESTIONS.map((q, i) => ({ ...q, id: `ch8-l3-q${i + 1}` }))
        }
    ]
};
