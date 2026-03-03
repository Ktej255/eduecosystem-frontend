import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch9-l1-q1",
        "question": "In which Part of the Constitution are the Directive Principles of State Policy enumerated?",
        "options": ["Part III","Part IV","Part V","Part VI"],
        "correctAnswerIndex": 1,
        "explanation": "The Directive Principles of State Policy are enumerated in Part IV of the Constitution from Articles 36 to 51."
    },
    {
        "id": "ch9-l1-q2",
        "question": "The framers of the Constitution borrowed the idea of Directive Principles from the Constitution of which country?",
        "options": ["USA","USSR","Ireland","Britain"],
        "correctAnswerIndex": 2,
        "explanation": "The framers of the Constitution borrowed this idea from the Irish Constitution of 1937, which had copied it from the Spanish Constitution."
    },
    {
        "id": "ch9-l1-q3",
        "question": "Dr. B.R. Ambedkar described the Directive Principles of State Policy as the:",
        "options": ["Soul of the Constitution","Novel features of the Constitution","Conscience of the Constitution","Magna Carta of India"],
        "correctAnswerIndex": 1,
        "explanation": "Dr B R Ambedkar described these principles as ‘novel features’ of the Indian Constitution."
    },
    {
        "id": "ch9-l1-q4",
        "question": "Granville Austin described the Directive Principles and the Fundamental Rights together as the:",
        "options": ["Pillars of Democracy","Conscience of the Constitution","Heart and Soul of the Constitution","Basic Structure of the Constitution"],
        "correctAnswerIndex": 1,
        "explanation": "Granville Austin has described the Directive Principles and the Fundamental Rights as the"
    },
    {
        "id": "ch9-l1-q5",
        "question": "What does the term",
        "options": ["Strict laws that the State must enforce immediately.","Ideals that the State should keep in mind while formulating policies and enacting laws.","Fundamental Rights available to non-citizens.","Duties assigned purely to the citizens."],
        "correctAnswerIndex": 1,
        "explanation": "The phrase"
    },
    {
        "id": "ch9-l1-q6",
        "question": "The Directive Principles resemble the",
        "options": ["The Charter Act of 1833","The Indian Councils Act of 1909","The Government of India Act of 1919","The Government of India Act of 1935"],
        "correctAnswerIndex": 3,
        "explanation": "The Directive Principles resemble the"
    },
    {
        "id": "ch9-l1-q7",
        "question": "While Fundamental Rights aim at establishing political democracy, the Directive Principles aim at establishing:",
        "options": ["Economic and Social Democracy","Religious Democracy","Cultural Democracy","International Democracy"],
        "correctAnswerIndex": 0,
        "explanation": "They embody the concept of a ‘welfare state’ and not that of a ‘police state’... In brief, they seek to establish economic and social democracy in the country."
    },
    {
        "id": "ch9-l1-q8",
        "question": "Are the Directive Principles of State Policy justiciable in nature?",
        "options": ["Yes, they are legally enforceable by the courts for their violation.","No, they are non-justiciable in nature, that is, they are not legally enforceable by the courts.","Yes, but only by the Supreme Court, not High Courts.","No, unless the President explicitly decrees their enforcement."],
        "correctAnswerIndex": 1,
        "explanation": "The Directive Principles are non-justiciable in nature, that is, they are not legally enforceable by the courts for their violation. Therefore, the government cannot be compelled to implement them."
    },
    {
        "id": "ch9-l1-q9",
        "question": "Article 37 explicitly declares that the Directive Principles are:",
        "options": ["Legally binding on the Parliament alone.","Fundamental in the governance of the country.","Temporary guidelines until 1960.","Subservient to all ordinary laws."],
        "correctAnswerIndex": 1,
        "explanation": "Article 37 itself says that these principles are fundamental in the governance of the country and it shall be the duty of the State to apply these principles in making laws."
    },
    {
        "id": "ch9-l1-q10",
        "question": "Although the Constitution does not formally classify the Directive Principles, on the basis of their content and direction, they are usually classified into three broad categories. Which of the following is NOT one of those categories?",
        "options": ["Socialistic","Gandhian","Capitalistic","Liberal-Intellectual"],
        "correctAnswerIndex": 2,
        "explanation": "On the basis of their content and direction, the Directive Principles can be classified into three broad categories, viz, socialistic, Gandhian and liberal-intellectual."
    },
    {
        "id": "ch9-l1-q11",
        "question": "Article 39 directs the State to secure certain principles of policy. Which of the following is NOT one of them?",
        "options": ["Adequate means of livelihood for all citizens.","Equitable distribution of material resources of the community for the common good.","Equal pay for equal work for men and women.","Mandatory military training for all youth."],
        "correctAnswerIndex": 3,
        "explanation": "Article 39 outlines several policies like adequate livelihood, equitable distribution of resources, prevention of wealth concentration, equal pay for equal work, health of workers, and opportunities for children. Mandatory military training is not mentioned."
    },
    {
        "id": "ch9-l1-q12",
        "question": "Which new Article was added by the 42nd Amendment to promote equal justice and to provide free legal aid to the poor?",
        "options": ["Article 39A","Article 43A","Article 48A","Article 51A"],
        "correctAnswerIndex": 0,
        "explanation": "Article 39A (To promote equal justice and to provide free legal aid to the poor) was added by the 42nd Amendment Act of 1976."
    },
    {
        "id": "ch9-l1-q13",
        "question": "Which Article falls under the",
        "options": ["Article 40","Article 44","Article 50","Article 51"],
        "correctAnswerIndex": 0,
        "explanation": "Article 40 directs the State to organise village panchayats and endow them with necessary powers and authority to enable them to function as units of self-government (a Gandhian principle)."
    },
    {
        "id": "ch9-l1-q14",
        "question": "Article 43 directs the State to promote what specific type of industries in rural areas (a Gandhian principle)?",
        "options": ["Heavy iron and steel industries","Cottage industries on an individual or co-operative basis","Information Technology parks","Automobile manufacturing plants"],
        "correctAnswerIndex": 1,
        "explanation": "Article 43 (Gandhian part) directs the State to promote cottage industries on an individual or co-operation basis in rural areas."
    },
    {
        "id": "ch9-l1-q15",
        "question": "Which Article directs the State to promote the educational and economic interests of SCs, STs, and other weaker sections of the society and to protect them from social injustice?",
        "options": ["Article 44","Article 45","Article 46","Article 48"],
        "correctAnswerIndex": 2,
        "explanation": "Article 46: To promote the educational and economic interests of SCs, STs, and other weaker sections of the society and to protect them from social injustice and exploitation."
    },
    {
        "id": "ch9-l1-q16",
        "question": "Which Article, largely representing Gandhian ideals, directs the State to prohibit the consumption of intoxicating drinks and drugs which are injurious to health?",
        "options": ["Article 43","Article 47","Article 48","Article 51"],
        "correctAnswerIndex": 1,
        "explanation": "Article 47 directs the State to prohibit the consumption of intoxicating drinks and drugs which are injurious to health."
    },
    {
        "id": "ch9-l1-q17",
        "question": "Under Article 48, the State is directed to prohibit the slaughter of cows, calves, and other milch and draught cattle. Furthermore, it directs the State to organise agriculture and animal husbandry on modern and scientific lines. This Article reflects:",
        "options": ["Only Gandhian principles.","Only Liberal-Intellectual principles.","Both Gandhian (prohibiting cow slaughter) and Liberal-Intellectual (modern scientific agriculture) principles.","Neither; it is a purely Socialistic principle."],
        "correctAnswerIndex": 2,
        "explanation": "Article 48 appears in both classifications: prohibiting cow slaughter is based on Gandhian ideology, while organizing agriculture/animal husbandry on modern/scientific lines falls under Liberal-Intellectual principles."
    },
    {
        "id": "ch9-l1-q18",
        "question": "Which Article, falling under the Liberal-Intellectual category, directs the State to secure for all citizens a Uniform Civil Code throughout the country?",
        "options": ["Article 41","Article 44","Article 48","Article 50"],
        "correctAnswerIndex": 1,
        "explanation": "Article 44 directs the State to secure for all citizens a uniform civil code throughout the country."
    },
    {
        "id": "ch9-l1-q19",
        "question": "The 86th Amendment Act of 2002 changed the subject-matter of Article 45. Originally it directed the State to provide free and compulsory education until the age of 14. What does Article 45 direct NOW?",
        "options": ["To provide free university education to all.","To provide early childhood care and education for all children until they complete the age of six years.","To provide vocational training to youth aged 15-25.","To eliminate child labor entirely."],
        "correctAnswerIndex": 1,
        "explanation": "The 86th Amendment Act (2002) changed the subject-matter of Article 45. The amended directive requires the State to provide early childhood care and education for all children until they complete the age of six years."
    },
    {
        "id": "ch9-l1-q20",
        "question": "Which Article directs the State to separate the judiciary from the executive in the public services of the State?",
        "options": ["Article 49","Article 50","Article 51","Article 52"],
        "correctAnswerIndex": 1,
        "explanation": "Article 50 directs the state to separate the judiciary from the executive in the public services of the State."
    },
    {
        "id": "ch9-l1-q21",
        "question": "Which of the following Articles directs the State to promote international peace and security and maintain just and honourable relations between nations?",
        "options": ["Article 48","Article 49","Article 50","Article 51"],
        "correctAnswerIndex": 3,
        "explanation": "Article 51 directs the State to promote international peace and security and maintain just and honourable relations between nations."
    },
    {
        "id": "ch9-l1-q22",
        "question": "Four new Directive Principles were added by the 42nd Amendment Act of 1976. Which of the following was NOT one of them?",
        "options": ["To secure opportunities for healthy development of children (Article 39).","To promote equal justice and provide free legal aid to the poor (Article 39A).","To protect and improve the environment and safeguard forests and wild life (Article 48A).","To promote voluntary formation of co-operative societies (Article 43B)."],
        "correctAnswerIndex": 3,
        "explanation": "Article 43B (promoting voluntary formation, autonomous functioning, democratic control, and professional management of co-operative societies) was added later by the 97th Amendment Act of 2011, NOT the 42nd Amendment."
    },
    {
        "id": "ch9-l1-q23",
        "question": "Which Amendment Act added the directive to states to minimize inequalities in income, status, facilities, and opportunities (Article 38)?",
        "options": ["42nd Amendment Act, 1976","44th Amendment Act, 1978","86th Amendment Act, 2002","97th Amendment Act, 2011"],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment Act of 1978 added one more Directive Principle, which requires the State to minimise inequalities in income, status, facilities and opportunities (Article 38)."
    },
    {
        "id": "ch9-l1-q24",
        "question": "Which of the following is considered the primary",
        "options": ["The Supreme Court of India.","The Election Commission of India.","Public opinion (political sanction).","The United Nations."],
        "correctAnswerIndex": 2,
        "explanation": "The framers made the Directive Principles non-justiciable and legally non-enforceable. However, the real sanction behind them is political, that is, public opinion. The government is accountable to the electorate at election time."
    },
    {
        "id": "ch9-l1-q25",
        "question": "In the case of a conflict between Fundamental Rights and Directive Principles, what was the initial stance of the Supreme Court in the Champakam Dorairajan case (1951)?",
        "options": ["Directive principles must completely override Fundamental Rights.","Fundamental Rights and Directive principles are equal.","Fundamental Rights would prevail over Directive Principles; DPSPs have to conform to and run as a subsidiary to the Fundamental Rights.","The President must decide which prevails in each case."],
        "correctAnswerIndex": 2,
        "explanation": "In the Champakam Dorairajan case (1951), the Supreme Court ruled that in case of any conflict between Fundamental Rights and Directive Principles, the former would prevail. DPSPs have to run as a subsidiary to the Fundamental Rights."
    },
    {
        "id": "ch9-l1-q26",
        "question": "Which constitutional amendment attempted to accord absolute primacy to ALL Directive Principles over the Fundamental Rights conferred by Articles 14, 19, and 31?",
        "options": ["24th Amendment Act","25th Amendment Act","42nd Amendment Act","44th Amendment Act"],
        "correctAnswerIndex": 2,
        "explanation": "The 42nd Amendment Act (1976) extended the scope of Article 31C to include ALL Directive Principles. This gave absolute primacy to all DPSPs over Fundamental Rights under Articles 14, 19 (and 31). This massive extension was later struck down in Minerva Mills (1980)."
    },
    {
        "id": "ch9-l1-q27",
        "question": "According to the present constitutional position established by the Supreme Court, which holds supremacy: Fundamental Rights or Directive Principles?",
        "options": ["Directive Principles are generally supreme over all Fundamental Rights.","Fundamental Rights enjoy absolute supremacy over Fundamental Rights with no exceptions.","Fundamental Rights enjoy supremacy, but Article 31C acts as an exception, protecting laws implementing DPSPs in Art 39(b) and (c) from being challenged under Arts 14 and 19.","They are mutually exclusive and never conflict."],
        "correctAnswerIndex": 2,
        "explanation": "Presently, the Fundamental Rights enjoy supremacy over the Directive Principles. Yet, this does not mean DPSPs cannot be implemented. Parliament can amend rights to implement DPSPs, so long as it doesn"
    },
    {
        "id": "ch9-l1-q28",
        "question": "Apart from Part IV, there are some Directives contained in other parts of the Constitution. Which of the following is one such",
        "options": ["Article 11: Power of Parliament to regulate citizenship.","Article 350-A: Instruction in mother tongue at the primary stage to children belonging to linguistic minority groups.","Article 32: Remedies for enforcement of rights.","Article 1: Name and territory of the Union."],
        "correctAnswerIndex": 1,
        "explanation": "Article 350-A (Part XVII) directs that every State must endeavor to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to children belonging to linguistic minority groups. It is a directive outside Part IV."
    },
    {
        "id": "ch9-l1-q29",
        "question": "Sir B.N. Rau, the Constitutional Advisor, recommended that the rights of an individual should be divided into two categories: justiciable and non-justiciable. Which part of the Constitution did the non-justiciable rights eventually form?",
        "options": ["Fundamental Duties","Fundamental Rights","Directive Principles of State Policy","The Preamble"],
        "correctAnswerIndex": 2,
        "explanation": "Sir B N Rau recommended this division. The Drafting Committee accepted this, making the justiciable rights into Part III (Fundamental Rights) and the non-justiciable rights into Part IV (Directive Principles of State Policy)."
    },
    {
        "id": "ch9-l1-q30",
        "question": "The Directive Principles are analogous to which instrument found in the Government of India Act, 1935?",
        "options": ["Instruments of Accession","Instruments of Instructions","The White Paper","The August Offer"],
        "correctAnswerIndex": 1,
        "explanation": "Dr B R Ambedkar noted:"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch9-l2-q1",
        "question": "Consider the constitutional status of the Directive Principles of State Policy (Part IV). While they are non-justiciable, meaning courts cannot compel the government to enforce them, what crucial judicial function do they serve under Article 37?",
        "options": ["They are used to determine if a state government should be dismissed under Article 356.","They help the courts in examining and determining the constitutional validity of a law.","They are used strictly to audit the financial expenditures of the government.","They allow the Supreme Court to suo motu enact legislation lacking in the country."],
        "correctAnswerIndex": 1,
        "explanation": "Article 37 explicitly states that DPSPs are"
    },
    {
        "id": "ch9-l2-q2",
        "question": "The Directive Principles are classified into Socialistic, Gandhian, and Liberal-Intellectual categories based on their content. Which of the following Directives is uniquely found in BOTH the Gandhian and Liberal-Intellectual classifications in various scholarly analyses?",
        "options": ["To organize village panchayats (Article 40).","To secure a uniform civil code (Article 44).","To organize agriculture and animal husbandry on modern and scientific lines, while prohibiting cow slaughter (Article 48).","To promote international peace and security (Article 51)."],
        "correctAnswerIndex": 2,
        "explanation": "Article 48 encompasses two distinct ideals. Organizing agriculture and animal husbandry on"
    },
    {
        "id": "ch9-l2-q3",
        "question": "Assertion (A): The government can be taken to court for failing to implement the Uniform Civil Code under Article 44.\\nReason (R): The Directive Principles, though fundamental in governance, are expressly made non-justiciable by the Constitution to allow the State flexibility based on its resources.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 3,
        "explanation": "Assertion A is completely false; Article 37 explicitly states that DPSPs"
    },
    {
        "id": "ch9-l2-q4",
        "question": "Article 39(b) and 39(c) hold a unique, elevated status among all Directive Principles. What constitutional mechanism elevates them?",
        "options": ["They are the only Directives that the Supreme Court can enforce directly.","Under Article 31C, laws made to implement them cannot be challenged on the ground that they violate Fundamental Rights under Articles 14 and 19.","They are immune from any Constitutional Amendment under Article 368.","They automatically become Fundamental Rights during a Financial Emergency."],
        "correctAnswerIndex": 1,
        "explanation": "The 25th Amendment Act (1971) inserted Article 31C, which states that no law seeking to implement the socialistic directives in Article 39(b) (equitable distribution of resources) and (c) (prevention of wealth concentration) shall be void on the ground of contravention of Fundamental Rights under Articles 14 and 19."
    },
    {
        "id": "ch9-l2-q5",
        "question": "Which of the following constitutional amendments made the most sweeping additions to the Directive Principles of State Policy, attempting to subordinate Fundamental Rights to All DPSPs?",
        "options": ["The 1st Amendment (1951)","The 24th Amendment (1971)","The 42nd Amendment (1976)","The 44th Amendment (1978)"],
        "correctAnswerIndex": 2,
        "explanation": "The 42nd Amendment Act (1976), often called the"
    },
    {
        "id": "ch9-l2-q6",
        "question": "Consider Article 41:",
        "options": ["By ensuring a government job for one member of every family.","By enacting the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), offering 100 days of guaranteed wage employment.","By offering an unconditional universal basic income to all unemployed youth.","By compelling private sector companies to hire local candidates."],
        "correctAnswerIndex": 1,
        "explanation": "The MGNREGA (2005) is the classic example of state legislation implementing Article 41 (Right to work) by guaranteeing 100 days of employment in a financial year to every rural household whose adult members volunteer to do unskilled manual work."
    },
    {
        "id": "ch9-l2-q7",
        "question": "Article 42 directs the State to make provision for",
        "options": ["The Minimum Wages Act, 1948","The Maternity Benefit Act, 1961","The Equal Remuneration Act, 1976","The Factories Act, 1948"],
        "correctAnswerIndex": 1,
        "explanation": "The Maternity Benefit Act (1961), significantly amended in 2017 to increase paid maternity leave from 12 weeks to 26 weeks, is the direct legislative implementation of the"
    },
    {
        "id": "ch9-l2-q8",
        "question": "The Directive Principle under Article 46 requires the State to promote the educational and economic interests of SCs, STs, and other weaker sections. How does this DPSP practically interface with Fundamental Rights?",
        "options": ["It cannot interface with them because DPSPs are subordinate.","It acts as the constitutional foundation justifying the exceptions granted under Articles 15(4), 15(5), and 16(4) for reservations in education and employment.","It automatically nullifies the Right to Equality under Article 14.","It dictates that reservations must exceed 50% in all states."],
        "correctAnswerIndex": 1,
        "explanation": "Article 46 provides the moral and constitutional mandate for the State to create special provisions for weaker sections. Courts view Articles 15(4), 15(5), and 16(4) (the reservation clauses) as the tools the State uses to discharge its duty under the Article 46 directive, highlighting the harmony between Parts III and IV."
    },
    {
        "id": "ch9-l2-q9",
        "question": "Which of the following environmental protections is explicitly mandated by a Directive Principle (Article 48A) introduced by the 42nd Amendment?",
        "options": ["To transition entirely to renewable energy by 2050.","To protect and improve the environment and to safeguard forests and wildlife.","To establish a National Green Tribunal.","To ban single-use plastics nationwide."],
        "correctAnswerIndex": 1,
        "explanation": "Article 48A directs the State"
    },
    {
        "id": "ch9-l2-q10",
        "question": "The 97th Amendment Act of 2011 elevated",
        "options": ["To nationalize all failing cooperative banks.","To mandate that all farmers must join a cooperative society.","To promote voluntary formation, autonomous functioning, democratic control, and professional management of co-operative societies.","To exempt cooperative societies from all state and central taxes."],
        "correctAnswerIndex": 2,
        "explanation": "Article 43B specifies:"
    },
    {
        "id": "ch9-l2-q11",
        "question": "Article 50 directs the state to",
        "options": ["Judges were directly appointed by the Prime Minister.","The Supreme Court was an advisory body to the Cabinet.","Executive authorities like District Magistrates and Tehsildars possessed and exercised significant judicial (magisterial) powers over criminal offenses.","The High Courts were subordinate to State Governors."],
        "correctAnswerIndex": 2,
        "explanation": "During the British era and initial post-independence years, Executive Magistrates (like Collectors/Tehsildars) held substantial judicial powers in criminal cases, meaning the executive could arrest and judge a person. Separating the judiciary from the executive meant taking these judicial powers away and vesting them in separate Judicial Magistrates."
    },
    {
        "id": "ch9-l2-q12",
        "question": "Assertion (A): Fundamental Rights are negative injunctions on the State, while Directive Principles are positive obligations.\\nReason (R): Fundamental Rights prohibit the State from doing certain things (like discriminating), whereas Directive Principles require the State to actively do certain things (like providing a living wage).\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. FRs are generally negative (prohibiting state action to protect individual liberty), while DPSPs are positive (requiring state action to distribute resources and provide social welfare). Reason R perfectly explains Assertion A."
    },
    {
        "id": "ch9-l2-q13",
        "question": "Which of the following Directive Principles explicitly aims at promoting the economic empowerment of workers against pure capitalistic exploitation?",
        "options": ["Article 43A: Participation of workers in the management of industries.","Article 51: Promotion of international peace.","Article 49: Protection of monuments and places of national importance.","Article 44: Uniform Civil Code."],
        "correctAnswerIndex": 0,
        "explanation": "Article 43A (added by the 42nd Amendment) directs the State to take steps to secure the participation of workers in the management of undertakings, establishments, or other organizations engaged in any industry, challenging pure top-down capitalist management."
    },
    {
        "id": "ch9-l2-q14",
        "question": "Examine the relationship between DPSPs and the Preamble. Which noble objectives enshrined in the Preamble do the Directive Principles primarily seek to realize?",
        "options": ["Liberty of thought, expression, belief, faith and worship.","Justice—social, economic, and political.","Fraternity assuring the dignity of the individual.","Equality of status only."],
        "correctAnswerIndex": 1,
        "explanation": "While FRs primarily protect Liberty and Equality, the DPSPs are fundamentally designed to achieve the grand ideal of"
    },
    {
        "id": "ch9-l2-q15",
        "question": "Article 45 was significantly altered by the 86th Amendment Act (2002). Why did the subject matter change from",
        "options": ["Because education up to 14 years was deemed a state subject, not a central directive.","Because the Supreme Court ruled that education beyond 6 years was not feasible for India.","Because education for children between 6 and 14 years was elevated to a Fundamental Right under the newly inserted Article 21A.","Because the government wanted to shift focus entirely to Anganwadi centers."],
        "correctAnswerIndex": 2,
        "explanation": "The 86th Amendment made elementary education (6-14 years) a justiciable Fundamental Right (Article 21A). Once it became a fundamental right, the DPSP under Article 45 was amended to direct the state to focus on"
    },
    {
        "id": "ch9-l2-q16",
        "question": "The Directive Principles recognize that the State",
        "options": ["","","","","","","",""],
        "correctAnswerIndex": 1,
        "explanation": "Article 41 specifically states:"
    },
    {
        "id": "ch9-l2-q17",
        "question": "Article 39A directs the State to provide free legal aid",
        "options": ["The National Human Rights Commission (NHRC)","The National Legal Services Authority (NALSA)","The Law Commission of India","The Central Bureau of Investigation (CBI)"],
        "correctAnswerIndex": 1,
        "explanation": "The Legal Services Authorities Act, 1987 established a nation-wide network under NALSA (National Legal Services Authority) to provide free and competent legal services to the weaker sections of the society, directly implementing Article 39A."
    },
    {
        "id": "ch9-l2-q18",
        "question": "Which of the following is considered a",
        "options": ["Article 48A: Protection of the environment.","Article 335: Claims of SCs and STs to services and posts, consistent with maintaining administrative efficiency.","Article 38: Promoting the welfare of the people.","Article 51: Promotion of international peace."],
        "correctAnswerIndex": 1,
        "explanation": "Article 335 in Part XVI explicitly states that the claims of the members of the SCs and STs shall be taken into consideration, consistently with the maintenance of efficiency of administration. Like DPSPs, it is a directive to the state, but it lies outside Part IV. Others include Art 350-A and Art 351."
    },
    {
        "id": "ch9-l2-q19",
        "question": "Article 47 mandates the state to raise the level of nutrition, standard of living, and improve public health. It also specifically directs the prohibition of intoxicating drinks. Why is there a significant disparity among Indian states regarding the implementation of the prohibition aspect of this directive?",
        "options": ["Prohibition is a Fundamental Right in some states but not others.","Alcohol manufacturing and distribution falls under the","of the 7th Schedule; thus, individual state governments decide whether to implement prohibition based on their revenue dependencies and political goals.","The Supreme Court has banned nationwide prohibition.","The United Nations prohibits a nationwide ban."],
        "correctAnswerIndex": 1,
        "explanation": "Alcohol is a State Subject (Entry 8, State List). States earn massive excise revenue from liquor. Therefore, while Article 47 is a DPSP, states like Gujarat and Bihar chose to implement prohibition, while most others prioritize the revenue generated by liquor sales."
    },
    {
        "id": "ch9-l2-q20",
        "question": "Dr. B.R. Ambedkar believed that a government which rests on popular vote cannot ignore the Directive Principles. What happens, according to him, if a government ignores them?",
        "options": ["It will be immediately dismissed by the Supreme Court.","The President must declare a National Emergency.","It will certainly have to answer for them before the electorate at election time.","The Prime Minister must face impeachment."],
        "correctAnswerIndex": 2,
        "explanation": "Ambedkar famously stated that while there"
    },
    {
        "id": "ch9-l2-q21",
        "question": "Consider the constitutional directive",
        "options": ["Because the British government had already established a uniform civil code which they didn","Because of overwhelming opposition from minority communities who feared the imposition of a majority code, and the belief that the nation","t yet ready for it.","Because the Drafting Committee believed personal laws were entirely a state matter.","Because the Supreme Court advised against making it a fundamental right."],
        "correctAnswerIndex": 1,
        "explanation": "There was fierce debate. Minority members feared forced assimilation. Ambedkar argued for a UCC but conceded the time wasn"
    },
    {
        "id": "ch9-l2-q22",
        "question": "Examine Article 39(d):",
        "options": ["No, because it is purely a DPSP and courts can never intervene regarding equal pay.","Yes, the Supreme Court has read the principle of","into the Right to Equality (Article 14), making it enforceable although it strictly resides in Part IV.","Yes, but only in government jobs, not in the private sector.","No, the Equal Remuneration Act 1976 was repealed."],
        "correctAnswerIndex": 1,
        "explanation": "While formally a DPSP, the Supreme Court (Randhir Singh case, 1982) ruled that"
    },
    {
        "id": "ch9-l2-q23",
        "question": "Article 48 directs the State to",
        "options": ["Yes, the ban is absolute for all cattle, regardless of age or utility.","No, the SC has traditionally held that the ban applies to cows (absolute), but for other cattle (bulls/bullocks), it applies only as long as they are","(useful). Once they age past utility, they can be slaughtered.","Yes, the ban applies universally to all animals, including poultry.","No, the directive only applies during religious festivals."],
        "correctAnswerIndex": 1,
        "explanation": "Historically, the SC distinguished between cows/calves (absolute ban justified by public interest/sentiment) and other cattle. For bulls/bullocks, slaughter was permitted if they were old/decrepit and no longer useful for draught/agricultural purposes, balancing religious sentiments with the economic right to trade (Article 19(1)(g))."
    },
    {
        "id": "ch9-l2-q24",
        "question": "Which Directive Principle aligns with India",
        "options": ["Article 48A","Article 49","Article 50","Article 51"],
        "correctAnswerIndex": 3,
        "explanation": "Article 51 (Promotion of international peace and security, maintaining just relations, fostering respect for international law, and encouraging arbitration) is the constitutional bedrock of India"
    },
    {
        "id": "ch9-l2-q25",
        "question": "In the context of the evolution of the DPSP vs. Fundamental Rights debate, the Golaknath Case (1967) established a rigid stance. What was it?",
        "options": ["DPSPs are permanently supreme over Fundamental Rights.","Parliament CANNOT amend Fundamental Rights, not even to implement Directive Principles.","Article 31C is the most important part of the Constitution.","The Constitution cannot be amended at all."],
        "correctAnswerIndex": 1,
        "explanation": "In Golaknath (1967), the SC ruled that Fundamental Rights are"
    },
    {
        "id": "ch9-l2-q26",
        "question": "Article 38(2), added by the 44th Amendment, urges the State to",
        "options": ["Individuals only.","Groups of people residing in different areas or engaged in different vocations only.","Both individuals and groups of people residing in different areas or engaged in different vocations.","Only men and women in the organized sector."],
        "correctAnswerIndex": 2,
        "explanation": "Article 38(2) specifically states the State shall strive to eliminate inequalities"
    },
    {
        "id": "ch9-l2-q27",
        "question": "Consider the",
        "options": ["Promoting cottage industries (Article 43).","Organizing village panchayats (Article 40).","Prohibiting intoxicating drinks (Article 47).","Protecting monuments and places of national importance (Article 49)."],
        "correctAnswerIndex": 3,
        "explanation": "Protecting monuments (Article 49) is classified under"
    },
    {
        "id": "ch9-l2-q28",
        "question": "Article 39(a) directs the state to secure the right to an",
        "options": ["Building expressways connecting major cities.","Privatizing heavily indebted public sector units.","Distributing subsidized food grains through the Public Distribution System (PDS) and enacting the National Food Security Act.","Encouraging foreign direct investment in the defense sector."],
        "correctAnswerIndex": 2,
        "explanation": "Securing"
    },
    {
        "id": "ch9-l2-q29",
        "question": "Assertion (A): The President of India could hypothetically reject a bill passed by Parliament on the grounds that it blatantly violates a Directive Principle of State Policy.\\nReason (R): DPSPs are",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are true. While courts cannot enforce DPSPs, they bind the executive and legislature. Renowned scholars (like B.R. Ambedkar and Dr. Rajendra Prasad) noted that a President or Governor could technically refuse assent to a bill if it flagrantly violates a DPSP, though convention usually binds them to Cabinet advice."
    },
    {
        "id": "ch9-l2-q30",
        "question": "Article 51(c) directs the State to foster respect for",
        "options": ["The international treaty automatically supersedes the domestic law.","The domestic law prevails, as Parliament is sovereign, but courts will try to interpret the domestic law harmoniously with the treaty if possible.","The Supreme Court will immediately strike down the domestic law under Article 51.","The case must be referred to the International Court of Justice."],
        "correctAnswerIndex": 1,
        "explanation": "In India"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch9-l3-q1",
        "question": "Consider the constitutional journey of the balance between Fundamental Rights (FRs) and Directive Principles of State Policy (DPSPs). Which landmark judgment firmly established that the Indian Constitution is founded on the",
        "options": ["Champakam Dorairajan case (1951)","Golaknath case (1967)","Kesavananda Bharati case (1973)","Minerva Mills case (1980)"],
        "correctAnswerIndex": 3,
        "explanation": "In Minerva Mills (1980), the SC struck down the 42nd Amendment"
    },
    {
        "id": "ch9-l3-q2",
        "question": "Under the current constitutional position balancing FRs and DPSPs, what is the exact scope of the protective umbrella provided by Article 31C?",
        "options": ["It protects laws implementing any DPSP from being challenged under any Fundamental Right.","It protects laws implementing ONLY the socialistic directives under Article 39(b) and (c) from being challenged specifically under Articles 14 and 19.","It protects laws implementing Gandhian directives under Article 40 from being challenged under Article 21.","It has been completely struck down by the Supreme Court and no longer offers any protection."],
        "correctAnswerIndex": 1,
        "explanation": "Following Minerva Mills (1980) and later clarifications (like Waman Rao), Article 31C is valid only to its original extent (inserted by 25th CAA). It protects ONLY laws giving effect to the directives in Article 39(b) and (c) against challenges under Articles 14 (Equality) and 19 (Freedoms)."
    },
    {
        "id": "ch9-l3-q3",
        "question": "The Directive Principle under Article 44 advocates for a",
        "options": ["Marriage and Divorce.","Succession and Inheritance.","Adoption and Maintenance.","Criminal Law (Indian Penal Code/BNS) and Contract Law."],
        "correctAnswerIndex": 3,
        "explanation": "While personal laws (marriage, divorce, inheritance, adoption) vary sharply by religion in India (Hindu Marriage Act, Muslim Personal Law, etc.), laws like the IPC/BNS, CrPC/BNSS, Evidence Act, and Contract Act form a uniform civil framework that applies universally regardless of religion."
    },
    {
        "id": "ch9-l3-q4",
        "question": "Assertion (A): The Supreme Court has repeatedly issued detailed writs (Mandamus) directing the Central Government to enact legislation for a Uniform Civil Code (UCC) to fulfill its constitutional duty under Article 44.\\nReason (R): While DPSPs are fundamentally unenforceable by individuals, the Supreme Court, possessing inherent powers under Article 142, can mandate the legislature to draft specific laws if a DPSP has been ignored for too long.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 4,
        "explanation": "Both statements are false. The SC has urged/reminded the government (e.g., Shah Bano case, Sarla Mudgal case), but it has explicitly ruled (e.g., Maharshi Avadhesh vs UoI) that it CANNOT issue a writ of Mandamus directing the legislature to enact a Uniform Civil Code, as law-making is solely Parliament"
    },
    {
        "id": "ch9-l3-q5",
        "question": "Examine Article 39(b) [‘equitable distribution of material resources of the community’] and 39(c) [‘prevention of concentration of wealth’]. In the landmark 2024 judgment (Property Owners Association vs State of Maharashtra), how did a 9-judge Constitution Bench interpret",
        "options": ["It ruled that ALL private property automatically constitutes","and the State can take over anything.","It ruled that private property DOES NOT automatically constitute","simply by existing; it depends on the nature, scarcity, and impact of the resource.","It declared Article 39(b) unconstitutional as it violated the Right to Property.","It ruled that only government-owned land qualifies as","."],
        "correctAnswerIndex": 1,
        "explanation": "In a crucial 2024 verdict, the SC (8:1 majority) rejected Justice Krishna Iyer"
    },
    {
        "id": "ch9-l3-q6",
        "question": "Article 43 directs the State to secure a",
        "options": ["Minimum wage sustains mere life; living wage covers basic sustenance plus modest comfort (education, health, insurance); fair wage is above a living wage reflecting peak industry profitability.","Minimum wage covers basic sustenance (bare physical needs); fair wage covers sustenance plus a little comfort based on industry capacity; living wage provides for the highest standard of living including luxuries.","Minimum wage ensures mere bare physical needs; fair wage is a step up determined by industry capacity; living wage provides basic requirements plus frugal comforts (education, health, decent insurance) and is the ultimate constitutional goal.","There is no legal distinction; all three terms are used interchangeably by the Supreme Court."],
        "correctAnswerIndex": 2,
        "explanation": "The SC defined these in the Express Newspapers case (1958). Minimum wage: bare physical needs. Fair wage: higher than minimum, limited by the industry"
    },
    {
        "id": "ch9-l3-q7",
        "question": "Which of the following bodies is the primary mechanism established at the state level to realize the Gandhian directive under Article 40 (",
        "options": ["The 73rd Constitutional Amendment Act, 1992 (Part IX).","The Community Development Programme (1952).","The National Extension Service (1953).","The Mahatma Gandhi National Rural Employment Guarantee Act (2005)."],
        "correctAnswerIndex": 0,
        "explanation": "While earlier programs existed, the 73rd Constitutional Amendment Act (1992) gave practical, binding effect to Article 40 by adding Part IX (The Panchayats) to the Constitution, making the establishment of regular village panchayats mandatory rather than just a directive."
    },
    {
        "id": "ch9-l3-q8",
        "question": "Article 48A (",
        "options": ["The","Principle (absolute liability).","The","(anticipate and prevent environmental harm).","The",".","The","principle solely for ecological displacement."],
        "correctAnswerIndex": 3,
        "explanation": "Through landmark cases (like Vellore Citizens Welfare Forum, M.C. Mehta, etc.), the SC incorporated international environmental concepts—Polluter Pays, Precautionary Principle, Intergenerational Equity, and the Public Trust Doctrine—into domestic law by reading DPSPs and Fundamental Duties into Article 21."
    },
    {
        "id": "ch9-l3-q9",
        "question": "Consider the constitutional directive found in Article 350-A. The 7th Constitutional Amendment Act (1956) inserted this provision acting on the recommendation of the States Reorganization Commission. What does it essentially mandate?",
        "options": ["It directs linguistic minorities to adopt Hindi as their primary language within a decade.","It mandates the State to provide adequate facilities for instruction in the mother-tongue at the primary stage of education to children belonging to linguistic minority groups.","It reserves 10% of state government jobs for linguistic minorities.","It directs the Union to fund the translation of the Constitution into all scheduled languages."],
        "correctAnswerIndex": 1,
        "explanation": "Article 350-A (a Directive outside Part IV) charges every state and local authority to endeavor to provide facilities for instruction in the mother-tongue at the primary stage of education to linguistic minority children. The President can issue directions to states to ensure this."
    },
    {
        "id": "ch9-l3-q10",
        "question": "Article 51 directs the State to",
        "options": ["Article 73 (Extent of Executive Power of the Union).","Article 253 (Legislation for giving effect to international agreements).","Article 368 (Power of Parliament to amend the Constitution).","Article 131 (Original jurisdiction of the Supreme Court)."],
        "correctAnswerIndex": 1,
        "explanation": "While Article 51 acts as the guiding philosophy, Article 253 provides the concrete mechanism: Parliament has the exclusive power to make any law for the whole or any part of India to implement any international treaty, agreement, or convention, even if the subject matter falls in the State List."
    },
    {
        "id": "ch9-l3-q11",
        "question": "The 97th Amendment (2011) inserted Article 43B regarding Co-operative Societies. However, in 2021 (Union of India v. Rajendra N Shah), a 3-judge bench of the Supreme Court partially struck down the 97th Amendment Act. What was the primary constitutional flaw identified by the Court?",
        "options": ["It violated the Right to Equality (Article 14) of non-cooperative entities.","Co-operative societies are a","(Entry 32), and the amendment deeply regulated them without the mandatory ratification by one-half of the State Legislatures required under Article 368(2).","It violated the Basic Structure doctrine by curtailing the powers of the Election Commission.","It forced mandatory membership in co-operatives, violating Article 19(1)(c)."],
        "correctAnswerIndex": 1,
        "explanation": "The SC struck down Part IXB (dealing with cooperatives) for"
    },
    {
        "id": "ch9-l3-q12",
        "question": "Article 48 instructs the State to",
        "options": ["The Green Revolution (High Yielding Varieties Programme).","The Bhoodan Movement (Land donation).","The Swadeshi Movement.","The Nationalization of Banks (1969)."],
        "correctAnswerIndex": 0,
        "explanation": "The Green Revolution (1960s)—characterized by the introduction of High-Yielding Variety (HYV) seeds, modern irrigation, chemical fertilizers, and pesticides—is the practical historical manifestation of organizing agriculture on"
    },
    {
        "id": "ch9-l3-q13",
        "question": "In the context of protecting the environment (Article 48A), the Supreme Court has frequently applied the",
        "options": ["The State holds absolute ownership of all natural resources and can privatize them entirely for revenue generation.","Natural resources (air, water, forests) are held by the State as a","for the free and unimpeded use of the general public; the State is legally prohibited from turning them into private ownership or exploiting them arbitrarily.","Only religious trusts can manage natural resources like rivers and ancient groves.","The State must sell all natural resources through open public auctions only."],
        "correctAnswerIndex": 1,
        "explanation": "The Public Trust Doctrine (adopted in the US and then in India via M.C. Mehta vs Kamal Nath, 1997) asserts that certain resources like air, rivers, and forests have such great importance to the public that concluding them under private ownership is unjustified. The State holds them in trust to protect them for public use."
    },
    {
        "id": "ch9-l3-q14",
        "question": "Article 39(f), introduced by the 42nd Amendment, aims to",
        "options": ["The Juvenile Justice (Care and Protection of Children) Act, 2015.","The Protection of Children from Sexual Offences (POCSO) Act, 2012.","The Prohibition of Child Marriage Act, 2006.","The National Security Act (NSA), 1980."],
        "correctAnswerIndex": 3,
        "explanation": "The JJ Act, POCSO Act, and Prohibition of Child Marriage Act are all deeply rooted in fulfilling Article 39(f) to protect children and ensure their healthy development. The National Security Act (NSA) is a preventive detention law meant for state security, unrelated to child welfare."
    },
    {
        "id": "ch9-l3-q15",
        "question": "Consider the Directive to",
        "options": ["The Indian Penal Code Amendment of 1955.","The Code of Criminal Procedure (CrPC), 1973.","The Supreme Court (Number of Judges) Act, 1956.","The Administrative Tribunals Act, 1985."],
        "correctAnswerIndex": 1,
        "explanation": "The Code of Criminal Procedure (CrPC) of 1973 (replacing the 1898 code) formally structured the separation. It created distinct"
    },
    {
        "id": "ch9-l3-q16",
        "question": "In statecraft, the Directive Principles function as a",
        "options": ["They would eventually be converted into Fundamental Rights by the year 2000.","They lay down the explicit goal of an",", ensuring that irrespective of whichever party comes to power, it must respect these basic socio-economic parameters or face the electorate.","They were necessary to mollify the British Parliament during the transfer of power.","They allowed the Supreme Court to bypass the legislature entirely."],
        "correctAnswerIndex": 1,
        "explanation": "Ambedkar argued that India"
    },
    {
        "id": "ch9-l3-q17",
        "question": "Article 46 compels the State to protect SCs, STs, and weaker sections from",
        "options": ["The Indian Penal Code, 1860.","The Protection of Civil Rights Act, 1955.","The Scheduled Castes and the Scheduled Tribes (Prevention of Atrocities) Act, 1989.","The Right to Information Act, 2005."],
        "correctAnswerIndex": 2,
        "explanation": "While the Protection of Civil Rights Act targets"
    },
    {
        "id": "ch9-l3-q18",
        "question": "Assertion (A): To implement the Directive Principle regarding",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. Article 39A mandates"
    },
    {
        "id": "ch9-l3-q19",
        "question": "The Directive Principle in Article 43 mandates securing",
        "options": ["The Industrial Relations Code, 2020.","The Code on Social Security, 2020.","The Occupational Safety, Health and Working Conditions Code, 2020.","The Code on Wages, 2019."],
        "correctAnswerIndex": 3,
        "explanation": "The Code on Wages, 2019 (part of the 4 new labor codes) consolidates older laws (like the Minimum Wages Act 1948). It significantly expands coverage to guarantee a statutory"
    },
    {
        "id": "ch9-l3-q20",
        "question": "Examine the practical application of Article 351:",
        "options": ["By making Hindi the only official language and banning regional languages in state affairs.","By maintaining English as a permanent associate official language alongside Hindi, and providing safeguards for linguistic minorities (Articles 29, 30, 350A, 350B, and the 8th Schedule) preventing forced imposition.","By mandating that the Supreme Court conduct all proceedings exclusively in Hindi.","By forcing all state legislatures to debate only in Hindi."],
        "correctAnswerIndex": 1,
        "explanation": "While Art 351 promotes Hindi, the framers (and subsequent acts like the Official Languages Act 1963) balanced it. English continues to be used for official Union purposes. The 8th Schedule protects 22 major languages, and Arts 29/30 protect minority scripts, ensuring Hindi is promoted as a lingua franca, not imposed coercively over regional identities."
    },
    {
        "id": "ch9-l3-q21",
        "question": "Consider the distinction between Fundamental Rights and Directive Principles in terms of their applicability. Which of the following statements is legally accurate regarding their scope of operation?",
        "options": ["Both FRs and DPSPs are strictly negative, preventing the state from taking action.","FRs establish a political democracy, while DPSPs aim to establish an economic and social democracy.","DPSPs are enforceable against private individuals, while FRs are only enforceable against the State.","FRs require active legislation to be implemented, while DPSPs are automatically and directly applicable from 1950."],
        "correctAnswerIndex": 1,
        "explanation": "FRs (mostly negative injunctions against state overreach) form the bedrock of"
    },
    {
        "id": "ch9-l3-q22",
        "question": "Which of the following acts of Parliament was heavily criticized by scholars for arguably violating the spirit of Article 39(c) (prevention of concentration of wealth), leading to significant constitutional debates regarding the dilution of DPSPs in favor of rapid economic liberalization?",
        "options": ["The Monopolies and Restrictive Trade Practices (MRTP) Act, 1969.","The repeal of the MRTP Act and its replacement by the Competition Act, 2002.","The Bank Nationalization Act, 1969.","The Abolition of Privy Purses, 1971."],
        "correctAnswerIndex": 1,
        "explanation": "The older MRTP Act tightly restricted corporate expansion to strictly enforce Article 39(c) (preventing concentration of economic power). After the 1991 liberalization, the MRTP Act was seen as a hurdle to growth and was repealed, replaced by the Competition Act (2002) which focuses on promoting competition rather than strictly preventing corporate size/wealth concentration."
    },
    {
        "id": "ch9-l3-q23",
        "question": "Article 48 directs the organization of agriculture. Does the Constitution anywhere define",
        "options": ["No, the Constitution leaves it entirely to the common law definitions.","Yes, Article 366 explicitly defines","as agricultural income as defined for the purposes of the enactments relating to Indian income-tax.","Yes, the Tenth Schedule lists all recognized agricultural activities.","No, it is uniquely defined by each state legislature differently."],
        "correctAnswerIndex": 1,
        "explanation": "Article 366 (Definitions) clause (1) states:"
    },
    {
        "id": "ch9-l3-q24",
        "question": "The Directive Principle",
        "options": ["Article 14 (Equality before Law)","Article 25 (Freedom of Religion)","Article 21 (Right to Life and Personal Liberty)","Article 19(1)(g) (Freedom of Profession)"],
        "correctAnswerIndex": 2,
        "explanation": "The SC (e.g., in PUCL vs Union of India regarding the right to food) has expanded Article 21"
    },
    {
        "id": "ch9-l3-q25",
        "question": "According to Dr. L.M. Singhvi, what is the",
        "options": ["The Preamble","The Fundamental Rights","The Directive Principles of State Policy","The Power of Judicial Review"],
        "correctAnswerIndex": 2,
        "explanation": "Eminent jurist L.M. Singhvi noted that"
    },
    {
        "id": "ch9-l3-q26",
        "question": "Under Article 51 (Promotion of international peace), does the executive have the power to cede Indian territory to a foreign country by merely signing a treaty?",
        "options": ["Yes, because foreign policy falls entirely under the executive domain.","No, the Supreme Court ruled in the Berubari Union case (1960) that ceding Indian territory to a foreign country requires a Constitutional Amendment under Article 368.","Yes, provided the State legislature of the affected state agrees.","No, Indian territory can never be ceded under any circumstances."],
        "correctAnswerIndex": 1,
        "explanation": "The SC clarified in the Berubari Union Case (1960) that while the executive can settle a boundary dispute without constitutional amendment, CEDING (giving away) Indian territory to a foreign state under a treaty requires an amendment to Article 1 (and the First Schedule) under Article 368 (like the 100th Amendment for the Indo-Bangladesh land boundary agreement)."
    },
    {
        "id": "ch9-l3-q27",
        "question": "Assertion (A): Courts can declare a law void if it conflicts with a Directive Principle of State Policy.\\nReason (R): Article 37 declares DPSPs as",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 3,
        "explanation": "Assertion A is completely false. Because DPSPs are non-justiciable (Article 37 explicitly says they"
    },
    {
        "id": "ch9-l3-q28",
        "question": "Consider Article 40 (Village Panchayats). Why did Dr. B.R. Ambedkar famously clash with Gandhian members over the role of villages during the Constituent Assembly debates?",
        "options": ["Ambedkar believed villages were economically unviable and preferred only urban planning.","Ambedkar viewed the traditional Indian village as a",", arguing that the individual, not the village, should be the unit of the Constitution.","Ambedkar wanted village panchayats to have absolute judicial powers, which Gandhi opposed.","Ambedkar believed villages were already perfect and needed no constitutional intervention."],
        "correctAnswerIndex": 1,
        "explanation": "Ambedkar had a very critical view of the deeply entrenched caste prejudices and oppression within typical Indian villages. He argued forcefully that making the village the base unit would empower local elites to further oppress Dalits. Hence, the Constitution centers on the"
    },
    {
        "id": "ch9-l3-q29",
        "question": "Which of the following is an example of the legislature utilizing a DPSP (Article 39(b) & (c)) to enact major structural economic reforms between the 1950s and 1970s?",
        "options": ["The enactment of the Right to Information Act.","The Nationalization of 14 major commercial banks in 1969 and the abolition of Privy Purses.","The establishment of the National Green Tribunal.","The passage of the 73rd Constitutional Amendment."],
        "correctAnswerIndex": 1,
        "explanation": "To prevent the concentration of wealth (39c) and distribute community material resources equitably (39b), the Indira Gandhi government undertook massive socialist moves like Nationalizing 14 major private banks (1969) and abolishing the privy purses of former royals, heavily relying on these DPSPs for constitutional justification."
    },
    {
        "id": "ch9-l3-q30",
        "question": "What is the primary difference in the source of obligation between Fundamental Duties (Part IVA) and Directive Principles (Part IV)?",
        "options": ["FDs are directed at the State, while DPSPs are directed at the citizens.","Both are directed solely at the citizens.","DPSPs are constitutional instructions/directives to the State (Govt/Legislature), whereas Fundamental Duties are moral/civic obligations directed at the Citizens of India.","Both are directed solely at the State."],
        "correctAnswerIndex": 2,
        "explanation": "The core difference is the target. Part IV (DPSPs) instructs the STATE on how to behave ("
    }
];

export const CHAPTER_9_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
