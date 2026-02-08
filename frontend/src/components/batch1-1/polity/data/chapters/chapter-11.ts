import { ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler (Strictly Chapter 11)
const LEVEL_1_QUESTIONS = [
    {
        question: "The amendment process of the Indian Constitution is described in:",
        options: ["Part XX, Article 368", "Part XVIII, Article 356", "Part XX, Article 370", "Part XXI, Article 369"],
        correctAnswerIndex: 0, // a) Part XX, Article 368
        explanation: "Part XX, Article 368."
    },
    {
        question: "The procedure for amendment of the Constitution is borrowed from the Constitution of:",
        options: ["USA", "Britain", "South Africa", "Canada"],
        correctAnswerIndex: 2, // c) South Africa
        explanation: "South Africa."
    },
    {
        question: "According to Article 368, the Parliament can amend the Constitution by way of:",
        options: ["Addition only.", "Variation only.", "Repeal only.", "Addition, variation or repeal of any provision."],
        correctAnswerIndex: 3, // d) Addition, variation or repeal
        explanation: "Addition, variation or repeal."
    },
    {
        question: "However, the Parliament cannot amend those provisions which form the 'basic structure' of the Constitution. This was ruled by the Supreme Court in the:",
        options: ["Shankari Prasad case (1951)", "Golak Nath case (1967)", "Kesavananda Bharati case (1973)", "Minerva Mills case (1980)"],
        correctAnswerIndex: 2, // c) Kesavananda Bharati
        explanation: "Kesavananda Bharati case (1973)."
    },
    {
        question: "An amendment of the Constitution can be initiated only by the introduction of a bill in:",
        options: ["Lok Sabha only.", "Rajya Sabha only.", "Either House of Parliament.", "State Legislatures."],
        correctAnswerIndex: 2, // c) Either House
        explanation: "Either House of Parliament."
    },
    {
        question: "Can a bill for amendment be introduced by a private member?",
        options: ["No, only by a minister.", "Yes, by a minister or a private member.", "Yes, but only with the Speaker's permission.", "No, it requires a public petition."],
        correctAnswerIndex: 1, // b) Minister or private member
        explanation: "By a minister or a private member."
    },
    {
        question: "Does the introduction of the bill require the prior permission of the President?",
        options: ["Yes, always.", "No, not required.", "Yes, only if it affects federal provisions.", "Yes, if it affects Fundamental Rights."],
        correctAnswerIndex: 1, // b) No, not required
        explanation: "Not required."
    },
    {
        question: "The bill must be passed in each House by:",
        options: ["A simple majority.", "A special majority.", "An absolute majority.", "A two-thirds majority of the total membership."],
        correctAnswerIndex: 1, // b) Special majority
        explanation: "A special majority."
    },
    {
        question: "A \"Special Majority\" under Article 368 means:",
        options: ["A majority of the total membership of the House AND a majority of two-thirds of the members of the House present and voting.", "Two-thirds of the total membership of the House.", "Two-thirds of the members present and voting.", "Majority of the total membership only."],
        correctAnswerIndex: 0, // a) Total majority + 2/3 present
        explanation: "Majority of total membership AND 2/3 of members present and voting."
    },
    {
        question: "Is there a provision for a joint sitting of the two Houses if there is a disagreement over an amendment bill?",
        options: ["Yes, under Article 108.", "No, each House must pass the bill separately.", "Yes, but only for federal provisions.", "Yes, if the President summons it."],
        correctAnswerIndex: 1, // b) No
        explanation: "No joint sitting."
    },
    {
        question: "If the bill seeks to amend the federal provisions of the Constitution, it must also be ratified by the legislatures of:",
        options: ["All the states.", "Half of the states.", "Three-fourths of the states.", "One-third of the states."],
        correctAnswerIndex: 1, // b) Half of the states
        explanation: "At least half of the states."
    },
    {
        question: "The state legislatures must ratify the bill by a:",
        options: ["Simple majority.", "Special majority.", "Absolute majority.", "Effective majority."],
        correctAnswerIndex: 0, // a) Simple majority
        explanation: "Simple majority."
    },
    {
        question: "After duly passed by both Houses (and ratified by states if necessary), the bill is presented to the President. The President:",
        options: ["Can withhold his assent.", "Can return the bill for reconsideration.", "Must give his assent to the bill.", "Can keep it pending indefinitely (Pocket Veto)."],
        correctAnswerIndex: 2, // c) Must give assent
        explanation: "Must give his assent."
    },
    {
        question: "Which Constitutional Amendment Act made it obligatory for the President to give his assent to a constitutional amendment bill?",
        options: ["24th Amendment Act, 1971", "42nd Amendment Act, 1976", "44th Amendment Act, 1978", "7th Amendment Act, 1956"],
        correctAnswerIndex: 0, // a) 24th
        explanation: "24th Amendment Act, 1971."
    },
    {
        question: "Types of Amendments: The Constitution provides for three types of amendments. Which is NOT one of them?",
        options: ["Amendment by simple majority of the Parliament.", "Amendment by special majority of the Parliament.", "Amendment by special majority of the Parliament and ratification by half of the state legislatures.", "Amendment by special majority of the state legislatures."],
        correctAnswerIndex: 3, // d) Amendment by state legislatures
        explanation: "State legislatures cannot amend the constitution directly."
    },
    {
        question: "Is the amendment by \"Simple Majority\" considered strictly as an amendment under Article 368?",
        options: ["Yes.", "No.", "Depends on the subject.", "Only if the Supreme Court says so."],
        correctAnswerIndex: 1, // b) No
        explanation: "No, Article 368 encompasses only Special Majority and Special + Ratification."
    },
    {
        question: "Which of the following provisions can be amended by a Simple Majority of Parliament?",
        options: ["Fundamental Rights.", "Directive Principles of State Policy.", "Admission or establishment of new states.", "Election of the President."],
        correctAnswerIndex: 2, // c) New states
        explanation: "Admission or establishment of new states."
    },
    {
        question: "Which of the following provisions requires a Special Majority of Parliament?",
        options: ["Quorum in Parliament.", "Rules of procedure in Parliament.", "Fundamental Rights.", "Use of official language."],
        correctAnswerIndex: 2, // c) Fundamental Rights
        explanation: "Fundamental Rights."
    },
    {
        question: "Which of the following provisions requires a Special Majority of Parliament and Consent of States?",
        options: ["Election of the President and its manner.", "Citizenship—acquisition and termination.", "Delimitation of constituencies.", "Union territories."],
        correctAnswerIndex: 0, // a) Election of President
        explanation: "Election of the President."
    },
    {
        question: "Which Schedule requires ratification by states for its amendment?",
        options: ["First Schedule.", "Second Schedule.", "Seventh Schedule (Lists).", "Fifth Schedule."],
        correctAnswerIndex: 2, // c) Seventh Schedule
        explanation: "Seventh Schedule."
    },
    {
        question: "Representation of states in Parliament (Rajya Sabha seats) can be amended by:",
        options: ["Simple Majority.", "Special Majority.", "Special Majority + Ratification by half of the states.", "Executive Order."],
        correctAnswerIndex: 2, // c) Special + Ratification
        explanation: "Special Majority + Ratification."
    },
    {
        question: "The Supreme Court and High Courts (provisions dealing with them) can be amended by:",
        options: ["Simple Majority.", "Special Majority.", "Special Majority + Ratification by half of the states.", "Judicial Order."],
        correctAnswerIndex: 2, // c) Special + Ratification
        explanation: "Special Majority + Ratification."
    },
    {
        question: "The Power of Parliament to amend the Constitution and its procedure (Article 368 itself) can be amended by:",
        options: ["Simple Majority.", "Special Majority.", "Special Majority + Ratification by half of the states.", "Cannot be amended."],
        correctAnswerIndex: 2, // c) Special + Ratification
        explanation: "Special Majority + Ratification."
    },
    {
        question: "Critics argue that the power to initiate an amendment lies with the Parliament. In only one case can the state legislature initiate an amendment?",
        options: ["Creation or abolition of Legislative Council in the state (Article 169).", "Changing the name of the state.", "Changing the boundary of the state.", "None of the above."],
        correctAnswerIndex: 0, // a) Legislative Council
        explanation: "Creation or abolition of Legislative Council (strictly resolution)."
    },
    {
        question: "Does the Constitution prescribe any time limit within which the state legislatures should ratify or reject an amendment submitted to them?",
        options: ["Yes, 6 months.", "Yes, 1 year.", "No, it is silent on the issue.", "Yes, 3 months."],
        correctAnswerIndex: 2, // c) Silent
        explanation: "No, it is silent."
    },
    {
        question: "Is the issue of whether states can withdraw their ratification after giving it settled in the Constitution?",
        options: ["Yes, they can withdraw anytime.", "Yes, they cannot withdraw.", "No, the Constitution is silent on the issue.", "Yes, with President's permission."],
        correctAnswerIndex: 2, // c) Silent
        explanation: "No, the Constitution is silent."
    },
    {
        question: "There is no provision for holding a joint sitting of both Houses of Parliament if there is a deadlock over the passage of a constitutional amendment bill.",
        options: ["True", "False"],
        correctAnswerIndex: 0, // a) True
        explanation: "True."
    },
    {
        question: "The process of amendment is considered to be:",
        options: ["Too flexible.", "Too rigid.", "Partly flexible and partly rigid.", "Very easy."],
        correctAnswerIndex: 2, // c) Partly flexible and partly rigid
        explanation: "Partly flexible and partly rigid."
    },
    {
        question: "Pandit Jawaharlal Nehru said in the Constituent Assembly that if you make the Constitution rigid and permanent, you stop the nation's:",
        options: ["Growth.", "Wealth.", "Independence.", "Democracy."],
        correctAnswerIndex: 0, // a) Growth
        explanation: "Growth."
    },
    {
        question: "K.C. Wheare described the Indian Constitution as strikingly ______ because it strikes a good balance between flexibility and rigidity.",
        options: ["Rigid", "Flexible", "Adaptable", "Novel"],
        correctAnswerIndex: 1, // b) Flexible (based on 'strikingly flexible' vs rigid discourse)
        explanation: "Flexible."
    },
    {
        question: "Granville Austin said the amending process has proved to be one of the most ably conceived aspects of the Constitution. He noted that it appears complicated but is merely:",
        options: ["Simple.", "Diverse.", "Elaborate.", "Confusing."],
        correctAnswerIndex: 2, // c) Elaborate
        explanation: "Elaborate."
    },
    {
        question: "The 42nd Amendment Act (1976) is also known as the:",
        options: ["Mini-Constitution.", "Major Constitution.", "New Constitution.", "Reformed Constitution."],
        correctAnswerIndex: 0, // a) Mini-Constitution
        explanation: "Mini-Constitution."
    },
    {
        question: "The 99th Constitutional Amendment Act (2014) related to NJAC was declared unconstitutional by the Supreme Court. This is the only instance of a constitutional amendment being struck down in entirety.",
        options: ["True", "False"],
        correctAnswerIndex: 0, // a) True
        explanation: "True."
    },
    {
        question: "A \"Constitutional Amendment Bill\" is treated as a:",
        options: ["Money Bill.", "Financial Bill.", "Ordinary Bill.", "Private Bill always."],
        correctAnswerIndex: 2, // c) Ordinary Bill (procedurally similar distractor)
        explanation: "Treated similarly to an Ordinary Bill in introduction/passage stages (except majority)."
    },
    {
        question: "The phrase \"Total Membership\" means:",
        options: ["Total number of members present on that day.", "Total number of members comprising the House irrespective of vacancies or absentees.", "Total number of elected members only.", "Total number of members minus those suspended."],
        correctAnswerIndex: 1, // b) Irrespective of vacancies
        explanation: "Total number of members comprising the House irrespective of vacancies or absentees."
    }
];

// Level 2: The Conceptual Bridge (Applied Knowledge)
const LEVEL_2_QUESTIONS = [
    {
        question: "Evolution of Amending Power: The conflict between the Parliament's power to amend (Article 368) and Fundamental Rights (Part III) began with:",
        options: ["Shankari Prasad case (1951).", "Golak Nath case (1967).", "Kesavananda Bharati case (1973).", "Minerva Mills case (1980)."],
        correctAnswerIndex: 0, // a) Shankari Prasad
        explanation: "Shankari Prasad case (1951)."
    },
    {
        question: "In the Golak Nath case (1967), the Supreme Court held that:",
        options: ["Parliament has absolute power to amend Fundamental Rights.", "Parliament cannot take away or abridge any of the Fundamental Rights.", "Fundamental Rights are subject to Directive Principles.", "The President can amend Fundamental Rights."],
        correctAnswerIndex: 1, // b) Cannot take away
        explanation: "Parliament cannot take away or abridge any of the Fundamental Rights."
    },
    {
        question: "To overcome the Golak Nath judgment, the Parliament enacted the 24th Amendment Act (1971). It declared that:",
        options: ["Parliament has the power to abridge or take away any of the Fundamental Rights under Article 368.", "Such an Act will not be a 'law' under the meaning of Article 13.", "Both (a) and (b).", "Neither (a) nor (b)."],
        correctAnswerIndex: 2, // c) Both
        explanation: "Both (a) and (b)."
    },
    {
        question: "The Kesavananda Bharati case (1973) upheld the validity of the 24th Amendment Act but laid down a new doctrine. What was it?",
        options: ["Doctrine of Pith and Substance.", "Doctrine of Basic Structure.", "Doctrine of Severability.", "Doctrine of Eclipse."],
        correctAnswerIndex: 1, // b) Basic Structure
        explanation: "Doctrine of Basic Structure."
    },
    {
        question: "According to the Basic Structure Doctrine:",
        options: ["Parliament cannot amend the Constitution at all.", "Parliament can amend any part of the Constitution, including Fundamental Rights, provided it does not alter the 'basic structure'.", "The Supreme Court is the only body that can amend the Constitution.", "The Preamble cannot be amended."],
        correctAnswerIndex: 1, // b) Can amend provided...
        explanation: "Can amend any part provided it does not alter the basic structure."
    },
    {
        question: "The 42nd Amendment Act (1976) tried to nullify the Basic Structure doctrine by inserting a clause declaring that:",
        options: ["There shall be no limitation on the constituent power of Parliament.", "No amendment can be questioned in any court on any ground.", "Both (a) and (b).", "Fundamental Duties are superior to Rights."],
        correctAnswerIndex: 2, // c) Both
        explanation: "Both (a) and (b)."
    },
    {
        question: "In the Minerva Mills case (1980), the Supreme Court struck down the above provision of the 42nd Amendment because:",
        options: ["It violated the 'Judicial Review' power, which is a basic feature.", "It was passed during an Emergency.", "It was not ratified by the states.", "It violated the Preamble."],
        correctAnswerIndex: 0, // a) Judicial Review
        explanation: "Violated Judicial Review (a basic feature)."
    },
    {
        question: "In the Waman Rao case (1981), the Supreme Court clarified that the Basic Structure doctrine applies to:",
        options: ["Constitutional Amendments enacted after April 24, 1973 (date of Kesavananda judgment).", "All Constitutional Amendments since 1950.", "Only amendments affecting Fundamental Rights.", "Only amendments affecting Federalism."],
        correctAnswerIndex: 0, // a) After 1973
        explanation: "Amendments enacted after April 24, 1973."
    },
    {
        question: "Procedure & Nuances: A Constitutional Amendment Bill must be passed by a \"Special Majority\". This implies:",
        options: ["A majority of more than 50% of the total membership of the House.", "A majority of two-thirds of the members of the House present and voting.", "Both (a) and (b) separately in each House.", "Both (a) and (b) in a joint sitting."],
        correctAnswerIndex: 2, // c) Both in each House
        explanation: "Both (a) and (b) separately in each House."
    },
    {
        question: "The \"Total Membership\" of the House for the purpose of Special Majority means:",
        options: ["The number of members actually holding office at that time (excluding vacancies).", "The total number of members comprising the House irrespective of whether there are vacancies or absentees.", "The number of members present on the day of voting.", "The quorum of the House."],
        correctAnswerIndex: 1, // b) Irrespective of vacancies
        explanation: "Irrespective of vacancies."
    },
    {
        question: "If a Constitutional Amendment Bill is passed by the Lok Sabha but rejected by the Rajya Sabha:",
        options: ["The President summons a joint sitting.", "The Bill lapses/ends.", "The Bill is returned to Lok Sabha.", "The Bill is deemed to have been passed."],
        correctAnswerIndex: 1, // b) Bill lapses
        explanation: "The Bill lapses/ends (No joint sitting)."
    },
    {
        question: "The \"Ratification by States\" (for federal provisions) requires:",
        options: ["A resolution passed by the State Legislature by a Special Majority.", "A resolution passed by the State Legislature by a Simple Majority.", "A resolution passed by the State Legislature and assent of the Governor.", "A referendum in the state."],
        correctAnswerIndex: 1, // b) Simple Majority
        explanation: "Simple Majority."
    },
    {
        question: "Is the Governor's assent required for the State Legislature's resolution ratifying the amendment?",
        options: ["Yes.", "No, it is just a resolution of the House, not a Bill.", "Depends on the Governor's discretion.", "Yes, if it affects state finances."],
        correctAnswerIndex: 1, // b) No
        explanation: "No, it is just a resolution."
    },
    {
        question: "Which of the following creates a \"Constitutional Amendment\" but is NOT deemed to be an amendment under Article 368?",
        options: ["Abolition or creation of Legislative Councils in States (Article 169).", "Admission or establishment of new states (Article 2).", "Formation of new states and alteration of areas (Article 3).", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "All of the above."
    },
    {
        question: "Therefore, the above changes (in Q14) can be passed by:",
        options: ["Simple Majority.", "Special Majority.", "Special Majority + Ratification.", "Executive Order."],
        correctAnswerIndex: 0, // a) Simple Majority
        explanation: "Simple Majority."
    },
    {
        question: "Subject Matter Classification: Which of the following provisions requires Ratification by States?",
        options: ["Goods and Services Tax (GST) Council (Article 279A).", "Fundamental Rights (Part III).", "Directive Principles (Part IV).", "Emergency Provisions."],
        correctAnswerIndex: 0, // a) GST Council
        explanation: "GST Council (Article 279A)."
    },
    {
        question: "Which of the following provisions requires Ratification by States?",
        options: ["The extent of the executive power of the Union and the States.", "The Supreme Court and High Courts.", "Distribution of legislative powers between the Union and the States (7th Schedule).", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "All of the above."
    },
    {
        question: "To amend the \"Language of the Supreme Court\" (Article 348), what majority is required?",
        options: ["Simple Majority.", "Special Majority.", "Special Majority + Ratification.", "President's Order."],
        correctAnswerIndex: 0, // a) Simple Majority
        explanation: "Simple Majority (Official Language provisions)."
    },
    {
        question: "To amend the \"Fifth Schedule\" (Scheduled Areas), what majority is required?",
        options: ["Simple Majority.", "Special Majority.", "Special Majority + Ratification.", "Governor's Notification."],
        correctAnswerIndex: 0, // a) Simple Majority
        explanation: "Simple Majority."
    },
    {
        question: "To amend the \"Election of the President\" (Article 54 & 55), what majority is required?",
        options: ["Simple Majority.", "Special Majority.", "Special Majority + Ratification by half of the states.", "Two-thirds of States."],
        correctAnswerIndex: 2, // c) Special + Ratification
        explanation: "Special Majority + Ratification."
    },
    {
        question: "Judicial Review & 9th Schedule: The I.R. Coelho case (2007) dealt with the:",
        options: ["Ninth Schedule and Judicial Review.", "Tenth Schedule and Anti-Defection.", "Eighth Schedule and Languages.", "Seventh Schedule and Federalism."],
        correctAnswerIndex: 0, // a) Ninth Schedule
        explanation: "Ninth Schedule and Judicial Review."
    },
    {
        question: "In I.R. Coelho, the Supreme Court held that:",
        options: ["Laws placed in the Ninth Schedule are completely immune from judicial review.", "Laws placed in the Ninth Schedule after April 24, 1973, are open to judicial review if they violate the Basic Structure (Fundamental Rights like 14, 15, 19, 21).", "The Ninth Schedule itself is unconstitutional.", "Judicial review does not apply to land reforms."],
        correctAnswerIndex: 1, // b) Open to review if...
        explanation: "Open to judicial review if placed after April 24, 1973."
    },
    {
        question: "Comparative & Critical: Unlike the USA, in India:",
        options: ["The State Legislatures cannot initiate an amendment to the Constitution.", "A special constituent body is not required for amending the Constitution.", "There is no time limit for ratification.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "All of the above."
    },
    {
        question: "In the USA, an amendment can be initiated by:",
        options: ["Congress only.", "State Legislatures only.", "Either Congress or State Legislatures (via convention).", "The President."],
        correctAnswerIndex: 2, // c) Either
        explanation: "Either Congress or State Legislatures."
    },
    {
        question: "The Indian Constitution is often criticized for being \"too flexible\" because:",
        options: ["Large parts of it can be amended by Parliament alone (either simple or special majority).", "States have no voice in most amendments.", "It can be amended by a simple notification.", "Both (a) and (b)."],
        correctAnswerIndex: 3, // d) Both a and b
        explanation: "Both (a) and (b)."
    },
    {
        question: "Assertion (A): The President of India has no veto power in respect of a Constitutional Amendment Bill. Reason (R): The 24th Amendment Act made it obligatory for the President to give his assent to such a bill.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation."
    },
    {
        question: "\"Constituent Power\" vs \"Legislative Power\".",
        options: ["Constituent power is the power to amend the Constitution (Article 368).", "Legislative power is the power to make ordinary laws (Article 245).", "In India, both powers are vested in the same body (Parliament), but the procedure differs.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "All are correct."
    },
    {
        question: "Can the Preamble be amended under Article 368?",
        options: ["No, it is not a part of the Constitution.", "Yes, as established in Kesavananda Bharati, provided the Basic Structure is not altered.", "Yes, without any restriction.", "Only to add words, not to remove."],
        correctAnswerIndex: 1, // b) Yes, provided...
        explanation: "Yes, provided Basic Structure is not altered."
    },
    {
        question: "The \"Basic Structure\" includes:",
        options: ["Supremacy of the Constitution.", "Secular character of the Constitution.", "Federal character of the Constitution.", "All of the above."],
        correctAnswerIndex: 3, // d) All
        explanation: "All of the above."
    },
    {
        question: "Is \"Social Justice\" considered part of the Basic Structure?",
        options: ["Yes.", "No.", "Only Economic Justice.", "Only Political Justice."],
        correctAnswerIndex: 0, // a) Yes
        explanation: "Yes."
    }
];

// Level 3: The UPSC Simulation 2026 (Integrated & Current Affairs)
const LEVEL_3_QUESTIONS = [
    {
        question: "Theme: Nari Shakti Vandan Adhiniyam (106th Amendment Act, 2023)\nThe Constitution (106th Amendment) Act, 2023 provides for 33% reservation for women in Lok Sabha and State Assemblies. Regarding its enactment process, consider the following statements:\n1. It required a Special Majority in both Houses of Parliament.\n2. Since it affects the representation of states in Parliament (Lok Sabha seats), it required ratification by at least half of the state legislatures.\n3. The reservation will come into effect immediately after the next delimitation exercise.\nWhich of the statements given above are correct?",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 3, // d) 1, 2, 3
        explanation: "Requires Special Majority and Ratification (affects representation/federal) and Delimitation."
    },
    {
        question: "The implementation of the 106th Amendment is linked to the \"Delimitation Process\". If the government decides to increase the total number of Lok Sabha seats (beyond 550) during this process, it will require:",
        options: ["A simple amendment to the Delimitation Act.", "A Constitutional Amendment to Article 81 (Composition of Lok Sabha) requiring ratification by half of the states.", "A Constitutional Amendment to Article 81 requiring only a Special Majority of Parliament.", "An Executive Order by the President."],
        correctAnswerIndex: 2, // c) Special Majority
        explanation: "Amendment to Art 81 (Special Majority)."
    },
    {
        question: "Theme: One Nation, One Election (High-Level Committee)\nThe \"One Nation, One Election\" proposal (Kovind Panel Report, 2024) suggests simultaneous elections. To implement this, the Committee identified that amendments to Article 83 (Duration of Houses) and Article 172 (Duration of State Legislatures) would be necessary. Does this specific amendment require ratification by States?",
        options: ["Yes, because it affects the federal structure.", "No, the Committee concluded that amendments to the \"duration\" of Houses do not fall under the entrenched provisions of Article 368(2) proviso (which lists subjects requiring ratification).", "Yes, because it affects the \"Election of President\".", "No, because it can be done by a simple majority."],
        correctAnswerIndex: 1, // b) No
        explanation: "No, duration is not entrenched in Proviso."
    },
    {
        question: "However, the Committee noted that a Common Electoral Roll (Article 325) would require an amendment that needs ratification by States. Why?",
        options: ["Because \"Elections to Panchayats/Municipalities\" is a State Subject (Entry 5, List II), and altering the roll affects State powers.", "Because it affects the powers of the Election Commission of India.", "Because it violates the Basic Structure.", "Because Article 325 is explicitly mentioned in the proviso to Article 368."],
        correctAnswerIndex: 0, // a) State Subject
        explanation: "Affects State Subject (Entry 5, List II)."
    },
    {
        question: "Theme: Basic Structure Debate (2024-25 Context)\nRecent remarks by high constitutional functionaries (Vice President, Law Minister) questioned the Basic Structure Doctrine as diluting Parliamentary Sovereignty. In this context, if Parliament passes a unanimous amendment to scrap the Basic Structure doctrine:",
        options: ["The amendment would be valid as it reflects the will of the people.", "The Supreme Court would likely strike it down as \"unconstitutional\" because the \"limited amending power\" itself is a part of the Basic Structure (Minerva Mills case).", "The President would be bound to withhold assent.", "It would require a national referendum."],
        correctAnswerIndex: 1, // b) Struck down
        explanation: "SC would strike it down (Limited amending power is Basic Structure)."
    },
    {
        question: "The NJAC Judgment (2015) is the only instance of a full amendment being struck down. If the government re-introduces NJAC with a \"Ratification by 100% States\" clause, would it survive judicial review?",
        options: ["Yes, because 100% consensus cures all defects.", "No, because the violation of \"Independence of Judiciary\" (Basic Structure) cannot be cured even by unanimity.", "Yes, if it is placed in the Ninth Schedule.", "Yes, if the President uses his advisory jurisdiction."],
        correctAnswerIndex: 1, // b) No
        explanation: "No, Basic Structure violation cannot be cured by unanimity."
    },
    {
        question: "Theme: Procedural Nuances & Anti-Defection\nThe 10th Schedule (Anti-Defection Law) was added by the 52nd Amendment. In Kihoto Hollohan case (1992), the Supreme Court struck down only Paragraph 7 (which barred judicial review) because:",
        options: ["It violated the Basic Structure (Judicial Review).", "It affected the jurisdiction of the Supreme Court/High Courts (Article 136/226), which is a federal provision requiring ratification by states, but the 52nd Amendment was not ratified.", "Both (a) and (b).", "Neither; it struck it down for being arbitrary."],
        correctAnswerIndex: 2, // c) Both
        explanation: "Both (a) and (b)."
    },
    {
        question: "If a Constitutional Amendment Bill is pending in the Rajya Sabha (introduced in RS) and the Lok Sabha is dissolved:",
        options: ["The Bill lapses.", "The Bill does not lapse.", "The Bill lapses only if it was passed by RS.", "The Bill is deemed passed."],
        correctAnswerIndex: 1, // b) Does not lapse
        explanation: "Bill introduced in RS and pending in RS does not lapse."
    },
    {
        question: "Can a Constitutional Amendment Bill be passed by a \"Voice Vote\"?",
        options: ["Yes, if there is no opposition.", "No, Article 368 requires a \"Division\" (recording of votes) to ensure the special majority criteria are met numerically.", "Yes, it is a parliamentary convention.", "Only in the Rajya Sabha."],
        correctAnswerIndex: 1, // b) No, Division required
        explanation: "No, Division (recording of votes) is required."
    },
    {
        question: "Theme: Federalism & Ratification (GST & Cooperatives)\nThe 97th Amendment Act (Cooperatives) was partially struck down by the Supreme Court (2021) in the Union of India vs Rajendra Shah case. The reason was:",
        options: ["\"Cooperative Societies\" is a State Subject. The amendment added provisions restricting state powers but was passed without ratification by half the states.", "It violated the Fundamental Right to form associations.", "It promoted privatization of cooperatives.", "It was passed without the President's recommendation."],
        correctAnswerIndex: 0, // a) State Subject/Ratification
        explanation: "Lack of ratification for a State Subject matter."
    },
    {
        question: "The 101st Amendment Act (GST) required ratification by states. If a State Legislature wants to withdraw its ratification after the President has given assent:",
        options: ["It can do so within 6 months.", "It cannot do so; the ratification is final once the process is complete.", "It can do so with the permission of the GST Council.", "It can do so if the government changes."],
        correctAnswerIndex: 1, // b) Cannot withdraw
        explanation: "Cannot withdraw."
    },
    {
        question: "Theme: Reservation & EWS (103rd Amendment)\nThe 103rd Amendment Act (EWS Reservation) amended Fundamental Rights (Articles 15 and 16). Did this require ratification by States?",
        options: ["Yes, because it affects the federal structure of reservation.", "No, amendments to Part III (Fundamental Rights) generally do not require ratification unless they also affect a provision in the proviso to Article 368 (like Art 226).", "Yes, because it affects State Services.", "No, because it was a private member bill."],
        correctAnswerIndex: 1, // b) No
        explanation: "No, FR amendments do not require ratification (unless affecting proviso)."
    },
    {
        question: "Theme: Reorganization of States (Art 3 vs Art 368)\nThe \"Jammu and Kashmir Reorganization Act, 2019\" bifurcated the state into two UTs. This was done under Article 3. However, if the government wants to cede a part of the Axai Chin area to China as part of a border settlement:",
        options: ["It can be done by Article 3 (Diminishing area).", "It requires a Constitutional Amendment under Article 368 (Cession of territory - Berubari case).", "It requires only an Executive Order.", "It requires UN approval."],
        correctAnswerIndex: 1, // b) Constitutional Amendment
        explanation: "Cession requires Constitutional Amendment (Berubari)."
    },
    {
        question: "The Land Boundary Agreement with Bangladesh (100th Amendment) involved the exchange of enclaves. Why was an amendment needed if Article 3 allows \"diminishing the area of a state\"?",
        options: ["Because \"diminishing\" in Article 3 refers to internal re-adjustment, not cession to a foreign country.", "Because West Bengal refused to give consent.", "Because it involved transfer of population.", "Because it was a treaty obligation."],
        correctAnswerIndex: 0, // a) Internal re-adjustment
        explanation: "Art 3 is for internal re-adjustment, not cession."
    },
    {
        question: "Theme: Assertion & Reason\nAssertion (A): The Constitution of India is neither rigid nor flexible but a synthesis of both. Reason (R): While some provisions can be amended by a simple majority of Parliament, others require a special majority or even ratification by states.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation."
    },
    {
        question: "Assertion (A): The President must give his assent to a Constitutional Amendment Bill. Reason (R): The 24th Constitutional Amendment Act, 1971, withdrew the President's discretion to withhold assent to such bills.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation."
    },
    {
        question: "Theme: Deep Dive - Amendment of the Preamble\nThe Preamble was amended only once (42nd Amendment). If a new government wants to remove the word \"Secular\" from the Preamble via the 107th Amendment:",
        options: ["It can be done by a Special Majority of Parliament.", "It would be struck down as violating the Basic Structure (S.R. Bommai case held Secularism is basic structure).", "It would require a national referendum.", "It requires ratification by states."],
        correctAnswerIndex: 1, // b) Struck down
        explanation: "Struck down as Basic Structure violation."
    },
    {
        question: "Theme: Miscellaneous & Procedural\nCan a Constitutional Amendment Bill be referred to a Parliamentary Standing Committee?",
        options: ["Yes, like any other bill.", "No, it must be passed immediately.", "Only if the Speaker permits.", "Only if it is a Private Member's Bill."],
        correctAnswerIndex: 0, // a) Yes
        explanation: "Yes, like any other bill."
    },
    {
        question: "The \"99th Amendment\" (NJAC) is a unique case where the amendment was passed, ratified, and assented to, but then:",
        options: ["Repealed by the 100th Amendment.", "Struck down by the Supreme Court, reviving the \"Collegium System\" (which had been repealed by the amendment).", "Lapsed due to dissolution of Lok Sabha.", "Withdrawn by the government."],
        correctAnswerIndex: 1, // b) Struck down
        explanation: "Struck down, reviving Collegium."
    },
    {
        question: "The \"reservation of seats\" for SCs and STs in Lok Sabha (Article 334) was extended for another 10 years by the 104th Amendment Act, 2020. Did this require ratification by States?",
        options: ["Yes, because it relates to \"Representation of States in Parliament\".", "No, it relates to special provisions.", "Yes, because it affects Fundamental Rights.", "No, because it is a temporary provision."],
        correctAnswerIndex: 0, // a) Yes
        explanation: "Yes, affects representation/proviso provisions."
    },
    {
        question: "Article 368(3) says \"Nothing in Article 13 shall apply to any amendment made under this Article.\" This clause was inserted by the 24th Amendment to:",
        options: ["Protect amendments from being challenged as \"law\" violating Fundamental Rights.", "Ensure Judicial Review.", "Allow amendments by simple majority.", "Remove the President's veto."],
        correctAnswerIndex: 0, // a) Protect from Art 13
        explanation: "Protect from Art 13."
    },
    {
        question: "The \"Doctrine of Implied Limitations\" on the amending power means:",
        options: ["There are no express limits, but the power is limited by the very identity of the Constitution (Basic Structure).", "Limitations are written in the text.", "Limitations are decided by the President.", "Limitations are decided by the UN Charter."],
        correctAnswerIndex: 0, // a) Identity/Basic Structure
        explanation: "Power limited by Basic Structure (identity)."
    },
    {
        question: "If a State Legislature ratifies an amendment but fails to communicate it to the Parliament within the specified time (if any):",
        options: ["It is deemed rejected.", "It is deemed ratified.", "The Constitution does not specify a time limit for states to communicate ratification.", "The Governor is held responsible."],
        correctAnswerIndex: 2, // c) Constitution silent
        explanation: "Constitution doesn't specify time limit."
    },
    {
        question: "The \"amending power\" of Parliament is a constituent power. This distinction was first clearly made in:",
        options: ["Shankari Prasad case.", "Golak Nath case.", "Kesavananda Bharati case.", "Indira Gandhi vs Raj Narain case."],
        correctAnswerIndex: 0, // a) Shankari Prasad
        explanation: "First made in Shankari Prasad (to distinguish from Art 13 'law')."
    },
    {
        question: "Can the \"Procedure for Amendment\" (Article 368 itself) be amended?",
        options: ["Yes, by a Special Majority of Parliament.", "Yes, by a Special Majority + Ratification by half of the states (as per the proviso to Art 368(2)).", "No, it is immutable.", "Only by a Constituent Assembly."],
        correctAnswerIndex: 1, // b) Special + Ratification
        explanation: "Yes, requires Special Majority + Ratification."
    },
    {
        question: "Which of the following is NOT part of the Basic Structure as per various SC judgments?",
        options: ["Free and fair elections.", "Welfare State.", "The exact number of judges in the Supreme Court.", "Harmony between FR and DPSP."],
        correctAnswerIndex: 2, // c) Exact number of judges
        explanation: "Exact number of judges is not Basic Structure."
    },
    {
        question: "The 102nd Amendment Act (OBC Commission) gave constitutional status to the NCBC. It required ratification because:",
        options: ["It affected the powers of State Governments to identify SEBCs (Socially and Educationally Backward Classes).", "It was a simple amendment.", "It affected the Supreme Court's jurisdiction.", "It was related to Fundamental Duties."],
        correctAnswerIndex: 0, // a) Affected federal balance/State powers
        explanation: "Affected State powers (though intent was federal, it touched state list matters effectively, hence ratification)."
    },
    {
        question: "In the Maratha Reservation Case (2021), the Supreme Court interpreted the 102nd Amendment to mean that only the Centre has the power to notify SEBCs. This necessitated the 105th Amendment Act to:",
        options: ["Restore the power of States to identify their own OBC lists.", "Cancel the 102nd Amendment.", "Increase the reservation cap.", "Abolish the NCBC."],
        correctAnswerIndex: 0, // a) Restore state power
        explanation: "Restore power of States."
    },
    {
        question: "The \"Official Language\" provisions (Part XVII) can be amended by:",
        options: ["Simple Majority (mostly).", "Special Majority.", "Special Majority + Ratification.", "Executive Order."],
        correctAnswerIndex: 0, // a) Simple Majority
        explanation: "Mostly Simple Majority (Article 343-348 provisions). Note: Some parts might be interpreted otherwise but standard text lists it under Simple."
    },
    {
        question: "Assertion (A): The Indian Constitution is \"living\" document. Reason (R): It can be amended to adapt to changing social and political needs, but its \"soul\" (Basic Structure) remains constant.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "Correct explanation."
    }
];

export const CHAPTER_11_LEVELS: ChapterLevelData = {
    topicId: 11,
    levels: [
        {
            levelId: 1,
            title: "The Text-Book Stickler",
            description: "Strictly Chapter 11: Direct Recall.",
            questions: LEVEL_1_QUESTIONS.map((q, i) => ({ ...q, id: `ch11-l1-q${i + 1}` }))
        },
        {
            levelId: 2,
            title: "The Conceptual Bridge",
            description: "Applied Knowledge & Analysis.",
            questions: LEVEL_2_QUESTIONS.map((q, i) => ({ ...q, id: `ch11-l2-q${i + 1}` }))
        },
        {
            levelId: 3,
            title: "UPSC Simulation 2026",
            description: "Integrated & Current Affairs Context.",
            questions: LEVEL_3_QUESTIONS.map((q, i) => ({ ...q, id: `ch11-l3-q${i + 1}` }))
        }
    ]
};
