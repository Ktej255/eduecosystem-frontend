import { ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler (Strictly Chapter 15)
const LEVEL_1_QUESTIONS = [
    {
        id: "ch15-l1-q1",
        question: "The Constitution divides legislative authority between the Centre and the States in:",
        options: ["Part XI", "Part XII", "Part XIII", "Part XIV"],
        correctAnswerIndex: 0,
        explanation: "Part XI deals with Relations between the Union and the States."
    },
    {
        id: "ch15-l1-q2",
        question: "The Parliament can make laws for the whole or any part of the territory of India. Who can make laws with \"extra-territorial operation\"?",
        options: ["Only Parliament.", "Only State Legislatures.", "Both Parliament and State Legislatures.", "Neither."],
        correctAnswerIndex: 0,
        explanation: "Only Parliament can make laws with extra-territorial operation."
    },
    {
        id: "ch15-l1-q3",
        question: "The Seventh Schedule contains three lists. Which list has precedence over the others?",
        options: ["Union List over State List and Concurrent List.", "State List over Union List.", "Concurrent List over Union List.", "All are equal."],
        correctAnswerIndex: 0,
        explanation: "Union List has precedence over State List and Concurrent List."
    },
    {
        id: "ch15-l1-q4",
        question: "In case of a conflict between the Concurrent List and the State List, which one prevails?",
        options: ["Concurrent List.", "State List.", "Union List.", "Supreme Court decides."],
        correctAnswerIndex: 0,
        explanation: "Concurrent List prevails in case of conflict with State List."
    },
    {
        id: "ch15-l1-q5",
        question: "However, if a State law on a Concurrent subject has received the assent of the ______, it prevails in that State.",
        options: ["Governor", "President", "Chief Minister", "Parliament"],
        correctAnswerIndex: 1,
        explanation: "Presidential assent allows State law on Concurrent subject to prevail."
    },
    {
        id: "ch15-l1-q6",
        question: "The power to make laws with respect to residuary subjects (not enumerated in any of the three lists) is vested in the:",
        options: ["Parliament.", "State Legislatures.", "President.", "Supreme Court."],
        correctAnswerIndex: 0,
        explanation: "Residuary powers are vested in Parliament."
    },
    {
        id: "ch15-l1-q7",
        question: "The Parliament can legislate on any subject in the State List in the \"National Interest\" if a resolution is passed by:",
        options: ["Lok Sabha.", "Rajya Sabha.", "Both Houses.", "President."],
        correctAnswerIndex: 1,
        explanation: "Rajya Sabha must pass a resolution for Parliament to legislate on State List in national interest."
    },
    {
        id: "ch15-l1-q8",
        question: "Such a resolution by Rajya Sabha (Article 249) must be supported by:",
        options: ["Simple Majority.", "Two-thirds of members present and voting.", "Absolute Majority.", "Two-thirds of total membership."],
        correctAnswerIndex: 1,
        explanation: "Article 249 resolution requires two-thirds of members present and voting."
    },
    {
        id: "ch15-l1-q9",
        question: "The Parliament can legislate on State List subjects during a \"Proclamation of Emergency\" (Article 250). Such laws cease to have effect on the expiration of ______ after the emergency ceases.",
        options: ["3 months", "6 months", "1 year", "2 years"],
        correctAnswerIndex: 1,
        explanation: "Such laws expire 6 months after emergency ceases."
    },
    {
        id: "ch15-l1-q10",
        question: "The Parliament can legislate on State List subjects if the legislatures of ______ or more states request it by passing resolutions (Article 252).",
        options: ["One", "Two", "Three", "Half"],
        correctAnswerIndex: 1,
        explanation: "Two or more states must request through resolutions under Article 252."
    },
    {
        id: "ch15-l1-q11",
        question: "The Parliament can legislate on State List subjects for implementing:",
        options: ["International treaties, agreements or conventions (Article 253).", "National policies.", "Directive Principles.", "Fundamental Duties."],
        correctAnswerIndex: 0,
        explanation: "Article 253 allows Parliament to legislate to implement international treaties."
    },
    {
        id: "ch15-l1-q12",
        question: "During \"President's Rule\" (Article 356), the Parliament becomes empowered to make laws with respect to any matter in the State List in relation to that state.",
        options: ["True.", "False."],
        correctAnswerIndex: 0,
        explanation: "During President's Rule, Parliament can make laws on State List for that state."
    },
    {
        id: "ch15-l1-q13",
        question: "The executive power of every State shall be so exercised as to ensure compliance with the laws made by:",
        options: ["The Parliament.", "The State Legislature.", "Both (a) and (b).", "The President."],
        correctAnswerIndex: 0,
        explanation: "State executive must ensure compliance with Parliamentary laws."
    },
    {
        id: "ch15-l1-q14",
        question: "The Centre can give directions to the States in certain matters. Which is NOT one of them?",
        options: ["Construction and maintenance of means of communication of national or military importance.", "Protection of railways.", "Provision of adequate facilities for instruction in mother-tongue at primary stage to linguistic minorities.", "Implementation of Uniform Civil Code."],
        correctAnswerIndex: 3,
        explanation: "Implementation of Uniform Civil Code is not among these directions."
    },
    {
        id: "ch15-l1-q15",
        question: "If a State fails to comply with any directions given by the Centre, the President can hold that a situation has arisen in which the government of the State cannot be carried on in accordance with the Constitution. This attracts:",
        options: ["Article 352", "Article 356 (President's Rule)", "Article 360", "Article 365"],
        correctAnswerIndex: 3,
        explanation: "Article 365 attracts President's Rule for non-compliance."
    },
    {
        id: "ch15-l1-q16",
        question: "The President may, with the consent of the State Government, entrust to that Government any matter to which the executive power of the Union extends.",
        options: ["True", "False"],
        correctAnswerIndex: 0,
        explanation: "True - President can entrust Union matters to States with their consent."
    },
    {
        id: "ch15-l1-q17",
        question: "Can the Parliament confer powers and impose duties on a State without its consent?",
        options: ["Yes, generally.", "No, never.", "Yes, but only for All India Services.", "Only during Emergency."],
        correctAnswerIndex: 0,
        explanation: "Yes, Parliament can confer powers and duties on States without consent."
    },
    {
        id: "ch15-l1-q18",
        question: "Article 262 provides for the adjudication of disputes relating to waters of inter-state rivers. Who can provide for such adjudication?",
        options: ["President.", "Supreme Court.", "Parliament.", "NITI Aayog."],
        correctAnswerIndex: 2,
        explanation: "Parliament can provide for adjudication of inter-state water disputes."
    },
    {
        id: "ch15-l1-q19",
        question: "Article 263 empowers the ______ to establish an Inter-State Council to inquire into and advise upon disputes between states.",
        options: ["Parliament", "President", "Supreme Court", "Prime Minister"],
        correctAnswerIndex: 1,
        explanation: "The President is empowered to establish the Inter-State Council."
    },
    {
        id: "ch15-l1-q20",
        question: "The Constitution divides the taxing powers between the Centre and the States. The residuary power of taxation belongs to the:",
        options: ["Centre (Parliament).", "States.", "President.", "GST Council."],
        correctAnswerIndex: 0,
        explanation: "Residuary power of taxation lies with Parliament."
    },
    {
        id: "ch15-l1-q21",
        question: "Which Amendment Act (2016) made a fundamental change in the Centre-State financial relations by introducing GST?",
        options: ["100th Amendment", "101st Amendment", "102nd Amendment", "103rd Amendment"],
        correctAnswerIndex: 1,
        explanation: "101st Amendment introduced GST in 2016."
    },
    {
        id: "ch15-l1-q22",
        question: "The \"Grant-in-aid\" to the States (Article 275) is charged on the:",
        options: ["Consolidated Fund of India.", "Contingency Fund of India.", "Public Account of India.", "Consolidated Fund of the State."],
        correctAnswerIndex: 0,
        explanation: "Grants-in-aid are charged on the Consolidated Fund of India."
    },
    {
        id: "ch15-l1-q23",
        question: "The Finance Commission (Article 280) is constituted by the President every:",
        options: ["3 years.", "4 years.", "5 years.", "6 years."],
        correctAnswerIndex: 2,
        explanation: "Finance Commission is constituted every 5 years."
    },
    {
        id: "ch15-l1-q24",
        question: "The property of the Centre is exempted from:",
        options: ["All State taxes.", "Some State taxes.", "Only Municipal taxes.", "None."],
        correctAnswerIndex: 0,
        explanation: "Central property is exempt from all State taxes."
    },
    {
        id: "ch15-l1-q25",
        question: "The property and income of a State is exempted from:",
        options: ["Central taxation.", "State taxation.", "GST.", "Customs duty."],
        correctAnswerIndex: 0,
        explanation: "State property and income are exempt from Central taxation."
    },
    {
        id: "ch15-l1-q26",
        question: "The First Administrative Reforms Commission (ARC) was constituted in 1966. Who was its chairman initially?",
        options: ["K. Hanumanthaiya.", "Morarji Desai.", "M.C. Setalvad.", "G.S. Pathak."],
        correctAnswerIndex: 1,
        explanation: "Morarji Desai was the initial chairman of the First ARC."
    },
    {
        id: "ch15-l1-q27",
        question: "The Rajamannar Committee (1969) was appointed by the Government of:",
        options: ["Kerala.", "Tamil Nadu (DMK Government).", "West Bengal.", "Punjab."],
        correctAnswerIndex: 1,
        explanation: "Rajamannar Committee was appointed by Tamil Nadu's DMK Government."
    },
    {
        id: "ch15-l1-q28",
        question: "The Sarkaria Commission was appointed by the Central Government in:",
        options: ["1980", "1983", "1987", "1990"],
        correctAnswerIndex: 1,
        explanation: "Sarkaria Commission was appointed in 1983."
    },
    {
        id: "ch15-l1-q29",
        question: "Which commission recommended that \"Article 356 should be used very sparingly, in extreme cases, as a last resort\"?",
        options: ["Rajamannar Committee.", "Sarkaria Commission.", "Anandpur Sahib Resolution.", "West Bengal Memorandum."],
        correctAnswerIndex: 1,
        explanation: "Sarkaria Commission recommended sparing use of Article 356."
    },
    {
        id: "ch15-l1-q30",
        question: "The Punchhi Commission was constituted in 2007 under the chairmanship of:",
        options: ["M.M. Punchhi (Former CJI).", "R.S. Sarkaria.", "Veerappa Moily.", "Manmohan Singh."],
        correctAnswerIndex: 0,
        explanation: "M.M. Punchhi, former CJI, headed the commission."
    },
    {
        id: "ch15-l1-q31",
        question: "Which of the following was a recommendation of the Sarkaria Commission regarding the Governor?",
        options: ["The post of Governor should be abolished.", "He should be an eminent person from outside the state.", "He should be a politician from the ruling party.", "He should be elected by the State Legislature."],
        correctAnswerIndex: 1,
        explanation: "Sarkaria recommended Governor should be from outside the state."
    },
    {
        id: "ch15-l1-q32",
        question: "The \"Anandpur Sahib Resolution\" (1973) demanded that the Centre's jurisdiction should be restricted only to:",
        options: ["Defence, Foreign Affairs, Communications, and Currency.", "Defence and Foreign Affairs only.", "All subjects except Police.", "Inter-state rivers only."],
        correctAnswerIndex: 0,
        explanation: "Anandpur Sahib Resolution wanted Centre limited to Defence, Foreign Affairs, Communications, and Currency."
    },
    {
        id: "ch15-l1-q33",
        question: "The \"West Bengal Memorandum\" (1977) suggested that the word 'Union' in the Constitution should be replaced by:",
        options: ["Federation.", "United States.", "Republic.", "Commonwealth."],
        correctAnswerIndex: 0,
        explanation: "West Bengal Memorandum suggested replacing 'Union' with 'Federation'."
    },
    {
        id: "ch15-l1-q34",
        question: "Article 355 imposes a duty on the Centre to protect every state against:",
        options: ["External aggression and internal disturbance.", "Financial instability.", "Political instability.", "Natural calamities."],
        correctAnswerIndex: 0,
        explanation: "Article 355 protects against external aggression and internal disturbance."
    },
    {
        id: "ch15-l1-q35",
        question: "The \"Zone of Peace\" concept was mentioned in:",
        options: ["Anandpur Sahib Resolution.", "West Bengal Memorandum.", "Sarkaria Commission Report.", "Punchhi Commission Report."],
        correctAnswerIndex: 0,
        explanation: "Zone of Peace was mentioned in the Anandpur Sahib Resolution."
    }
];

// Level 2: The Conceptual Bridge (Applied Knowledge)
const LEVEL_2_QUESTIONS = [
    {
        id: "ch15-l2-q1",
        question: "The \"Doctrine of Repugnancy\" (Article 254) applies when:",
        options: ["There is a conflict between a Central Law and a State Law on a subject in the Union List.", "There is a conflict between a Central Law and a State Law on a subject in the State List.", "There is a conflict between a Central Law and a State Law on a subject in the Concurrent List.", "There is a conflict between two State Laws."],
        correctAnswerIndex: 2,
        explanation: "Doctrine of Repugnancy applies to Concurrent List subjects."
    },
    {
        id: "ch15-l2-q2",
        question: "If a State law on a Concurrent subject is repugnant to an earlier Central law, the State law:",
        options: ["Becomes void to the extent of repugnancy.", "Prevails if it has received the President's assent.", "Prevails if it has received the Governor's assent.", "Both laws operate simultaneously."],
        correctAnswerIndex: 1,
        explanation: "Presidential assent allows State law to prevail."
    },
    {
        id: "ch15-l2-q3",
        question: "Even after the President's assent to a State law (under Article 254(2)), can the Parliament enact a law adding to, amending, or repealing the State law?",
        options: ["No, the President's assent makes the State law final.", "Yes, Parliament retains the power to override the State law on the same subject subsequently.", "Only if the State Legislature consents.", "Only during an Emergency."],
        correctAnswerIndex: 1,
        explanation: "Parliament can still override State law even after Presidential assent."
    },
    {
        id: "ch15-l2-q4",
        question: "Article 248 vests the residuary power of legislation in the Parliament. However, in the case of the GST (101st Amendment), the power to tax goods and services is:",
        options: ["Vested exclusively in Parliament.", "Vested exclusively in State Legislatures.", "Vested concurrently in Parliament and State Legislatures (Article 246A).", "Vested in the GST Council."],
        correctAnswerIndex: 2,
        explanation: "GST power is concurrent under Article 246A."
    },
    {
        id: "ch15-l2-q5",
        question: "When Parliament legislates on a State subject under Article 252 (Request by two or more states):",
        options: ["The law applies to all states in India.", "The law applies only to the requesting states and those that adopt it later.", "The requesting states can amend or repeal the law later.", "The law automatically lapses after 1 year."],
        correctAnswerIndex: 1,
        explanation: "Article 252 law applies to requesting states and those that adopt it."
    },
    {
        id: "ch15-l2-q6",
        question: "Can the Parliament repeal or amend an Act passed under Article 252?",
        options: ["No, only the State Legislatures can do so.", "Yes, only the Parliament can do so (States surrender their power).", "Yes, but with the consent of the States.", "No, it becomes a permanent law."],
        correctAnswerIndex: 1,
        explanation: "Only Parliament can amend or repeal Article 252 laws."
    },
    {
        id: "ch15-l2-q7",
        question: "Article 257 provides that the executive power of the State shall be so exercised as not to:",
        options: ["Prejudice the exercise of the executive power of the Union.", "Impede or prejudice the exercise of the executive power of the Union.", "Contradict the Directive Principles.", "Violate Fundamental Rights."],
        correctAnswerIndex: 1,
        explanation: "State must not impede or prejudice Union's executive power."
    },
    {
        id: "ch15-l2-q8",
        question: "The \"All India Services\" (Article 312) are often criticized by States as violating federalism because:",
        options: ["Officers are recruited by the Centre but work in States.", "Disciplinary action (dismissal/removal) against them can be taken only by the Centre (President).", "They occupy key strategic posts in the State administration.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "All these factors make AIS a violation of federalism in States' view."
    },
    {
        id: "ch15-l2-q9",
        question: "Deployment of Central Armed Police Forces (CAPF) in a State suo motu (without State request) by the Centre is:",
        options: ["Unconstitutional (Police is a State subject).", "Constitutional under Article 355 (Duty to protect against internal disturbance).", "Allowed only during National Emergency.", "Allowed only with President's Rule."],
        correctAnswerIndex: 1,
        explanation: "Article 355 allows Centre to deploy forces for internal disturbance."
    },
    {
        id: "ch15-l2-q10",
        question: "\"Full Faith and Credit\" (Article 261) shall be given throughout the territory of India to:",
        options: ["Public acts, records and judicial proceedings of the Union and of every State.", "Only Central laws.", "Only Supreme Court judgments.", "Only Acts of Parliament."],
        correctAnswerIndex: 0,
        explanation: "Article 261 covers public acts, records and judicial proceedings."
    },
    {
        id: "ch15-l2-q11",
        question: "Disputes relating to the use, distribution or control of waters of inter-state rivers (Article 262):",
        options: ["Fall within the original jurisdiction of the Supreme Court (Article 131).", "Are adjudicated by Tribunals set up by Parliament; Supreme Court jurisdiction is barred.", "Are settled by the President.", "Are settled by the Inter-State Council."],
        correctAnswerIndex: 1,
        explanation: "Parliament sets up tribunals and SC jurisdiction is barred under Article 262."
    },
    {
        id: "ch15-l2-q12",
        question: "Before GST, the Centre had the exclusive power to tax:",
        options: ["Manufacture of goods (Excise) and Services.", "Sale of goods (Sales Tax).", "Agricultural income.", "Land and buildings."],
        correctAnswerIndex: 0,
        explanation: "Centre had exclusive power over Excise and Service Tax."
    },
    {
        id: "ch15-l2-q13",
        question: "Before GST, States had the exclusive power to tax:",
        options: ["Sale of goods (VAT/Sales Tax).", "Services.", "Manufacture.", "Income (Non-agricultural)."],
        correctAnswerIndex: 0,
        explanation: "States had exclusive power over VAT/Sales Tax."
    },
    {
        id: "ch15-l2-q14",
        question: "The \"GST Council\" (Article 279A) is a constitutional body chaired by:",
        options: ["The Prime Minister.", "The Union Finance Minister.", "The NITI Aayog CEO.", "A rotating Chief Minister."],
        correctAnswerIndex: 1,
        explanation: "Union Finance Minister chairs the GST Council."
    },
    {
        id: "ch15-l2-q15",
        question: "In the GST Council, the vote of the Central Government has a weightage of:",
        options: ["One-half (50%).", "One-third (33.3%).", "Two-thirds (66.6%).", "One-fourth (25%)."],
        correctAnswerIndex: 1,
        explanation: "Centre has 1/3rd weightage in GST Council voting."
    },
    {
        id: "ch15-l2-q16",
        question: "A decision in the GST Council requires a majority of:",
        options: ["Not less than one-half of the weighted votes.", "Not less than two-thirds of the weighted votes.", "Not less than three-fourths of the weighted votes.", "Consensus."],
        correctAnswerIndex: 2,
        explanation: "GST Council decisions require 3/4th of weighted votes."
    },
    {
        id: "ch15-l2-q17",
        question: "The Sarkaria Commission (1983) recommended that the Governor:",
        options: ["Should be appointed in consultation with the Chief Minister of the concerned State.", "Should be a person who has not taken too great a part in politics generally, and particularly in the recent past.", "Should be a \"detached figure\" from outside the State.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "Sarkaria made all these recommendations about Governor."
    },
    {
        id: "ch15-l2-q18",
        question: "The Sarkaria Commission recommended regarding Article 356 that:",
        options: ["It should be abolished.", "The Governor's Report should be a \"speaking document\" (detailed reasons).", "The Assembly should be dissolved immediately.", "Judicial review should be barred."],
        correctAnswerIndex: 1,
        explanation: "Governor's Report should be a speaking document with detailed reasons."
    },
    {
        id: "ch15-l2-q19",
        question: "The Punchhi Commission (2007) recommended \"Localizing Emergency\" under Article 355 and 356. This means:",
        options: ["Imposing Emergency only in a specific troubled district/area rather than the whole state.", "Allowing Local Bodies to declare emergency.", "Giving power to the Governor to declare emergency.", "Using army without declaring emergency."],
        correctAnswerIndex: 0,
        explanation: "Localizing Emergency means limiting it to specific districts."
    },
    {
        id: "ch15-l2-q20",
        question: "The Punchhi Commission recommended that the Governor should be removed by:",
        options: ["The President at his pleasure (Status quo).", "An impeachment process by the State Legislature (similar to President).", "The Chief Minister.", "The Supreme Court."],
        correctAnswerIndex: 1,
        explanation: "Punchhi recommended impeachment process for Governor removal."
    },
    {
        id: "ch15-l2-q21",
        question: "Regarding the \"Treaty Making Power\" (Article 253), the Punchhi Commission suggested:",
        options: ["States should be involved in the negotiation of treaties that affect them.", "Parliament's power should be restricted.", "Treaties should be ratified by States.", "No change."],
        correctAnswerIndex: 0,
        explanation: "States should be involved in treaty negotiations affecting them."
    },
    {
        id: "ch15-l2-q22",
        question: "The \"Zonal Councils\" differ from the \"Inter-State Council\" in that:",
        options: ["Zonal Councils are statutory (States Reorganization Act, 1956); Inter-State Council is constitutional (Article 263).", "Zonal Councils are constitutional; Inter-State Council is statutory.", "Zonal Councils are headed by PM; Inter-State Council by Home Minister.", "Zonal Councils have binding powers; Inter-State Council is advisory."],
        correctAnswerIndex: 0,
        explanation: "Zonal Councils are statutory; Inter-State Council is constitutional."
    },
    {
        id: "ch15-l2-q23",
        question: "The Chairman of the Zonal Councils is:",
        options: ["The Prime Minister.", "The Union Home Minister.", "The Chief Minister of the host state (by rotation).", "The Vice-President."],
        correctAnswerIndex: 1,
        explanation: "Union Home Minister chairs the Zonal Councils."
    },
    {
        id: "ch15-l2-q24",
        question: "Assertion (A): The Centre can give directions to the States to maintain and construct means of communication declared to be of national importance. Reason (R): Non-compliance with such directions can attract the imposition of President's Rule under Article 365. Select the correct answer:",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 1,
        explanation: "Both true but R is not the explanation - they are separate provisions."
    },
    {
        id: "ch15-l2-q25",
        question: "\"Cooperative Federalism\" vs \"Bargaining Federalism\". The era of Coalition Governments (1989-2014) is often associated with:",
        options: ["Centralized Federalism.", "Bargaining Federalism (Regional parties extracting concessions).", "Unitary Federalism.", "Dictatorial Federalism."],
        correctAnswerIndex: 1,
        explanation: "Coalition era saw Bargaining Federalism."
    },
    {
        id: "ch15-l2-q26",
        question: "The \"Special Category Status\" for states (Gadgil Formula) was discontinued by the:",
        options: ["13th Finance Commission.", "14th Finance Commission.", "Planning Commission.", "NITI Aayog."],
        correctAnswerIndex: 1,
        explanation: "14th Finance Commission discontinued Special Category Status concept."
    },
    {
        id: "ch15-l2-q27",
        question: "\"Grants-in-aid\" under Article 275 are given on the recommendation of:",
        options: ["NITI Aayog.", "Finance Commission.", "Inter-State Council.", "Parliament."],
        correctAnswerIndex: 1,
        explanation: "Finance Commission recommends Grants-in-aid."
    },
    {
        id: "ch15-l2-q28",
        question: "\"Discretionary Grants\" under Article 282 are given by:",
        options: ["The Centre and States for any public purpose (even if not within their legislative competence).", "The President only.", "The Governor only.", "The Finance Commission."],
        correctAnswerIndex: 0,
        explanation: "Article 282 allows discretionary grants by Centre and States."
    },
    {
        id: "ch15-l2-q29",
        question: "Which Commission observed that \"Article 282 (Discretionary Grants) was intended to be a residuary provision but has been used to over-shadow Article 275\"?",
        options: ["Sarkaria Commission.", "First ARC.", "Rajamannar Committee.", "Punchhi Commission."],
        correctAnswerIndex: 0,
        explanation: "Sarkaria Commission made this observation."
    },
    {
        id: "ch15-l2-q30",
        question: "The \"North-Eastern Council\" was upgraded to a nodal agency for economic and social development of the NE region in 2002. Who is its Chairman?",
        options: ["The Prime Minister.", "The Union Home Minister.", "The DoNER Minister.", "The Governor of Assam."],
        correctAnswerIndex: 1,
        explanation: "Union Home Minister is the Chairman of NEC."
    }
];

// Level 3: The UPSC Prelims 2026 Simulation (Integrated & Current Affairs)
const LEVEL_3_QUESTIONS = [
    {
        id: "ch15-l3-q1",
        question: "In the landmark suit filed by Kerala against the Union (2024), the Supreme Court considered the Centre's imposition of a \"Net Borrowing Ceiling\" (NBC) on States. The Centre's power to restrict State borrowing is derived from:",
        options: ["Article 292 (Borrowing by GOI).", "Article 293(3) (Consent of GOI required if State has outstanding loan to Centre).", "Article 293(1) (Executive power of State extends to borrowing).", "The FRBM Act, 2003 (Fiscal Responsibility)."],
        correctAnswerIndex: 1,
        explanation: "Article 293(3) requires Centre's consent when State has outstanding loans."
    },
    {
        id: "ch15-l3-q2",
        question: "The States argue that \"Public Debt of the State\" is a State List subject (Entry 43). Therefore, the Centre's imposition of NBC violates federalism. The Centre counters that:",
        options: ["Borrowing affects the macro-economic stability of the nation, which is a Union responsibility.", "Article 293(4) allows the Centre to impose conditions while giving consent for loans.", "Off-budget borrowings by State PSUs must be included in the NBC to reflect true fiscal health.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "Centre uses all these arguments to justify NBC."
    },
    {
        id: "ch15-l3-q3",
        question: "The \"16th Finance Commission\" (under Arvind Panagariya) has been asked to review the current tax devolution formula. A major demand of Southern States is to reduce the weightage given to \"Population (2011 Census)\" because:",
        options: ["It penalizes states that have successfully controlled population growth (demographic performance).", "It favors states with higher per capita income.", "It violates Article 14.", "It contradicts the 15th FC recommendations."],
        correctAnswerIndex: 0,
        explanation: "Southern states feel penalized for controlling population growth."
    },
    {
        id: "ch15-l3-q4",
        question: "In the case of State of Punjab vs Governor (2023), the Supreme Court interpreted the phrase \"as soon as possible\" in the first proviso to Article 200. It held that:",
        options: ["The Governor has no time limit.", "If the Governor decides to \"withhold assent\", he must immediately return the Bill to the Legislature for reconsideration. He cannot sit on it indefinitely (Pocket Veto is not absolute).", "The Governor can reserve the bill for the President after withholding assent.", "The Governor is not answerable to the Court."],
        correctAnswerIndex: 1,
        explanation: "Governor must return bills promptly if withholding assent."
    },
    {
        id: "ch15-l3-q5",
        question: "If a State Legislature re-passes a Bill returned by the Governor (with or without amendments), the Governor:",
        options: ["Shall not withhold assent (Must give assent).", "Can reserve it for the President.", "Can withhold assent again.", "Can refer it to the Supreme Court."],
        correctAnswerIndex: 0,
        explanation: "Governor must give assent when Legislature re-passes a returned Bill."
    },
    {
        id: "ch15-l3-q6",
        question: "The Tamil Nadu Assembly passed a resolution urging the Centre to fix a timeline for the Governor to give assent. Currently, the Constitution:",
        options: ["Fixes a timeline of 6 months.", "Fixes a timeline of 6 weeks.", "Does not fix any specific timeline.", "Leaves it to the President."],
        correctAnswerIndex: 2,
        explanation: "Constitution does not fix any specific timeline for Governor's assent."
    },
    {
        id: "ch15-l3-q7",
        question: "The Centre proposed amendments to the IAS (Cadre) Rules, 1954 in 2022 to ensure sufficient Central Deputation Reserve (CDR). The amendment empowers the Centre to:",
        options: ["Recall any IAS officer from the State without the State's consent in specific situations.", "Override the State's objection in case of disagreement, within a specified time.", "Punish officers who refuse central deputation.", "Both (a) and (b)."],
        correctAnswerIndex: 3,
        explanation: "Centre can recall officers and override State objections under the amendment."
    },
    {
        id: "ch15-l3-q8",
        question: "States oppose this move (Q7) arguing it violates the spirit of \"Cooperative Federalism\" and administrative control. The Centre's justification is:",
        options: ["Shortage of officers at the Centre (Joint Secretary level).", "All India Service officers have a liability to serve both Centre and State.", "States are not sending enough officers for deputation.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "Centre uses all these justifications for the cadre rule amendments."
    },
    {
        id: "ch15-l3-q9",
        question: "During the West Bengal Panchayat Elections (2023), the Calcutta High Court directed the deployment of Central Forces. The State Government challenged this arguing \"Public Order\" and \"Police\" are State subjects. The Supreme Court upheld the deployment because:",
        options: ["The High Court has no jurisdiction.", "Free and fair elections are a \"Basic Structure\", and Article 324 (Election Commission) coupled with Article 355 empowers the Centre/Courts to ensure security when State machinery fails.", "Central forces are superior to State police.", "The State requested it."],
        correctAnswerIndex: 1,
        explanation: "Free elections are Basic Structure and Article 324/355 empowers deployment."
    },
    {
        id: "ch15-l3-q10",
        question: "In Manipur (2023-24), the Unified Command structure (including Army, Assam Rifles, and State Police) was headed by a Security Advisor appointed by the Centre. This effectively places the law and order:",
        options: ["Under the State Government (nominal).", "Under the Central Government (de facto application of Article 355).", "Under the Governor.", "Under the Chief Justice."],
        correctAnswerIndex: 1,
        explanation: "Central Government effectively controls law and order under Article 355."
    },
    {
        id: "ch15-l3-q11",
        question: "The National Education Policy (NEP) 2020 advocates a common structure. Some States (like TN, Kerala) have formed their own Education Policies. Since \"Education\" is in the Concurrent List:",
        options: ["The State Policy prevails automatically.", "The Central Policy (NEP) is merely \"advisory/guideline\" in nature for schools, but mandatory for Higher Education (UGC standards).", "The Centre can force States to adopt NEP under Article 256.", "Education was transferred to the Union List."],
        correctAnswerIndex: 1,
        explanation: "NEP is advisory for schools but mandatory for Higher Education."
    },
    {
        id: "ch15-l3-q12",
        question: "The Electricity (Amendment) Bill proposes allowing multiple discoms in the same area. Electricity is a Concurrent subject. If States oppose this:",
        options: ["Parliament cannot pass the bill.", "Parliament can pass the bill, and it will override inconsistent State laws (Article 254).", "States can block its implementation by not notifying rules.", "It requires ratification by half the states."],
        correctAnswerIndex: 1,
        explanation: "Parliamentary law on Concurrent subject overrides State laws."
    },
    {
        id: "ch15-l3-q13",
        question: "The Teesta Water Sharing Treaty with Bangladesh has been pending due to opposition from West Bengal. Under Article 253, the Parliament has the power to implement the treaty:",
        options: ["Only with the consent of West Bengal.", "Without the consent of West Bengal, overriding the State List entry \"Water\" (Entry 17).", "Only if declared a National Project.", "Only during Emergency."],
        correctAnswerIndex: 1,
        explanation: "Article 253 allows Parliament to implement treaties even on State subjects."
    },
    {
        id: "ch15-l3-q14",
        question: "The Inter-State River Water Disputes (Amendment) Bill proposes a \"Single Permanent Tribunal\" instead of multiple tribunals. The decision of this Tribunal:",
        options: ["Can be challenged in the Supreme Court under Article 136 (Special Leave Petition).", "Is final and binding; SC jurisdiction is barred under Article 262.", "Is advisory.", "Must be ratified by Parliament."],
        correctAnswerIndex: 1,
        explanation: "Article 262 bars SC jurisdiction over water dispute tribunals."
    },
    {
        id: "ch15-l3-q15",
        question: "Despite the bar under Article 262, the Supreme Court hears water disputes (like Cauvery) under:",
        options: ["Article 131 (Original Jurisdiction).", "Article 136 (Special Leave Petition) - on grounds of violation of legal rights/natural justice.", "Article 32 (Fundamental Rights).", "Article 143 (Advisory Jurisdiction)."],
        correctAnswerIndex: 1,
        explanation: "SC hears water disputes under Article 136 on grounds of legal rights."
    },
    {
        id: "ch15-l3-q16",
        question: "Assertion (A): The Governor can reserve a State Bill for the consideration of the President if it endangers the position of the High Court. Reason (R): This is the only condition mentioned in the Constitution (Article 200, second proviso) where reservation is mandatory. Select the correct answer:",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "Both true and R correctly explains A."
    },
    {
        id: "ch15-l3-q17",
        question: "Assertion (A): The Centre can levy \"Cess\" and \"Surcharge\" on taxes to raise additional revenue. Reason (R): The proceeds of Cess and Surcharge are not shareable with the States and form part of the Consolidated Fund of India exclusively. Select the correct answer:",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0,
        explanation: "Both true and R explains why Centre uses Cess/Surcharge."
    },
    {
        id: "ch15-l3-q18",
        question: "The \"Special Assistance to States for Capital Investment\" scheme (interest-free loans for 50 years) is a form of:",
        options: ["Article 275 Grant.", "Article 282 Discretionary Grant/Loan.", "Article 293 Loan.", "GST Compensation."],
        correctAnswerIndex: 1,
        explanation: "This is a discretionary grant under Article 282."
    },
    {
        id: "ch15-l3-q19",
        question: "The Supreme Court's 2018 Judgment on \"NCT of Delhi\" (GNCTD vs UOI) emphasized that the Lieutenant Governor (LG) is bound by the aid and advice of the Council of Ministers in all matters except:",
        options: ["Public Order, Police, and Land.", "Services (later modified by 2023 Act).", "Finance.", "Education."],
        correctAnswerIndex: 0,
        explanation: "LG not bound by CM's advice on Public Order, Police, and Land."
    },
    {
        id: "ch15-l3-q20",
        question: "The \"Sarkaria Commission\" recommendation on the appointment of Governor (consultation with CM) is:",
        options: ["A constitutional requirement.", "A statutory requirement.", "A convention (often breached).", "A judicial mandate."],
        correctAnswerIndex: 2,
        explanation: "It's a convention, not a legal requirement."
    },
    {
        id: "ch15-l3-q21",
        question: "\"Fiscal Marksman-ship\" refers to:",
        options: ["Accuracy of budget estimates (Revenue vs Actuals).", "States hitting deficit targets.", "Centre collecting taxes efficiently.", "GST collection."],
        correctAnswerIndex: 0,
        explanation: "Fiscal Marksmanship measures budget estimate accuracy."
    },
    {
        id: "ch15-l3-q22",
        question: "The \"Disaster Management Act, 2005\" was invoked by the Centre during COVID-19 to issue binding guidelines to States. This Act was passed under which entry of the Seventh Schedule?",
        options: ["Public Health (State List).", "Disaster Management (Concurrent List - Not explicitly mentioned).", "Social Security and Social Insurance (Concurrent List, Entry 23) + Residuary Power.", "Interstate Quarantine (Union List)."],
        correctAnswerIndex: 2,
        explanation: "DM Act uses Concurrent List Entry 23 and Residuary Power."
    },
    {
        id: "ch15-l3-q23",
        question: "The \"Zonal Councils\" were established to promote:",
        options: ["Emotional Integration of the country.", "Cooperation in social and economic matters.", "Uniform policies.", "All of the above."],
        correctAnswerIndex: 3,
        explanation: "Zonal Councils promote all these objectives."
    },
    {
        id: "ch15-l3-q24",
        question: "The \"Punchhi Commission\" suggested that the \"Doctrine of Pleasure\" regarding the Governor's tenure should be:",
        options: ["Retained as absolute.", "Deleted; Governor should have security of tenure and removal only by impeachment.", "Restricted to specific grounds.", "Transferred to the Chief Justice."],
        correctAnswerIndex: 1,
        explanation: "Punchhi recommended impeachment process for Governor removal."
    },
    {
        id: "ch15-l3-q25",
        question: "\"Cooperative Federalism\" is often contrasted with \"Competitive Federalism\". Which body promotes the latter through indices like 'Ease of Doing Business' or 'SDG India Index'?",
        options: ["Inter-State Council.", "Finance Commission.", "NITI Aayog.", "National Development Council."],
        correctAnswerIndex: 2,
        explanation: "NITI Aayog promotes Competitive Federalism through rankings."
    },
    {
        id: "ch15-l3-q26",
        question: "The \"GST Compensation\" to States was guaranteed for a period of:",
        options: ["3 years.", "5 years (ended June 2022).", "10 years.", "Indefinitely."],
        correctAnswerIndex: 1,
        explanation: "GST Compensation was for 5 years, ending June 2022."
    },
    {
        id: "ch15-l3-q27",
        question: "Can the President entrust Executive functions of the Centre to a State without its consent?",
        options: ["Yes, absolutely.", "No, it requires consent (Article 258(1)).", "Yes, but only if Parliament passes a law conferring such power (Article 258(2)).", "Only during Emergency."],
        correctAnswerIndex: 1,
        explanation: "Article 258(1) requires State consent for entrustment."
    },
    {
        id: "ch15-l3-q28",
        question: "The \"All India Judicial Service\" proposal requires a resolution by Rajya Sabha. This resolution acts as:",
        options: ["A Constitutional Amendment.", "An authorization for Parliament to legislate (Article 312).", "A final law.", "A recommendation to the President."],
        correctAnswerIndex: 1,
        explanation: "RS resolution authorizes Parliament to legislate under Article 312."
    },
    {
        id: "ch15-l3-q29",
        question: "The \"Sovereign Guarantee\" for external loans (e.g., from World Bank) raised by a State Government is given by:",
        options: ["The State Government itself.", "The Central Government (Union of India).", "The RBI.", "The SBI."],
        correctAnswerIndex: 1,
        explanation: "Central Government provides sovereign guarantee for external loans."
    },
    {
        id: "ch15-l3-q30",
        question: "Which of the following is an \"Extra-Constitutional\" device for Centre-State cooperation?",
        options: ["GST Council.", "Inter-State Council.", "Zonal Councils (Statutory).", "NITI Aayog (Executive Resolution)."],
        correctAnswerIndex: 3,
        explanation: "NITI Aayog is extra-constitutional, created by executive resolution."
    }
];

export const CHAPTER_15_LEVELS: ChapterLevelData = {
    topicId: 15,
    levels: [
        {
            levelId: 1,
            title: "The Text-Book Stickler",
            description: "Strictly Chapter 15",
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
