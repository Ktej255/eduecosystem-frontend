import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch4-l1-q1",
        "question": "Which of the following describes the Indian Constitution according to its salient features?",
        "options": ["The shortest written constitution in the world.","An entirely unwritten constitution based on conventions.","The lengthiest written constitution of any sovereign country in the world.","A partially written and partially unwritten constitution."],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution of India is the lengthiest of all the written constitutions of the world. It is a very comprehensive, elaborate and detailed document."
    },
    {
        "id": "ch4-l1-q2",
        "question": "Which of the following is NOT one of the reasons for the elephantine size of the Indian Constitution?",
        "options": ["Geographical factors like the vastness of the country.","Historical factors like the influence of the Government of India Act of 1935.","Single Constitution for both the Centre and the states.","The inclusion of a separate constitution for Jammu & Kashmir within the main text."],
        "correctAnswerIndex": 3,
        "explanation": "Jammu & Kashmir had its own separate state constitution under Article 370 (until 2019), but the primary reasons for the bulk were geographical, historical (1935 Act), a single constitution for Centre and states, and dominance of legal luminaries."
    },
    {
        "id": "ch4-l1-q3",
        "question": "From which source is the",
        "options": ["The British Constitution","The American and Irish Constitutions respectively","The Government of India Act 1935","The Canadian Constitution"],
        "correctAnswerIndex": 1,
        "explanation": "The philosophical part (Fundamental Rights and DPSP) derives its inspiration from the American and Irish Constitutions respectively."
    },
    {
        "id": "ch4-l1-q4",
        "question": "The",
        "options": ["American Constitution","Irish Constitution","British Constitution","Australian Constitution"],
        "correctAnswerIndex": 2,
        "explanation": "The political part of the Constitution (Cabinet government and executive-legislature relations) is largely drawn from the British Constitution."
    },
    {
        "id": "ch4-l1-q5",
        "question": "According to K.C. Wheare, how is the Indian Constitution accurately described regarding its federal nature?",
        "options": ["A perfect federation","A unitary state with subsidiary federal features","Quasi-federal","A confederation of independent states"],
        "correctAnswerIndex": 2,
        "explanation": "K.C. Wheare described the Indian Constitution as"
    },
    {
        "id": "ch4-l1-q6",
        "question": "Who described the Indian Constitution as a",
        "options": ["Ivor Jennings","K.C. Wheare","Granville Austin","Dr. B.R. Ambedkar"],
        "correctAnswerIndex": 0,
        "explanation": "Sir Ivor Jennings described the Indian Constitution as a"
    },
    {
        "id": "ch4-l1-q7",
        "question": "Granville Austin described the Indian federalism as:",
        "options": ["Quasi-federal","Co-operative federalism","Bargaining federalism","Centralised federalism"],
        "correctAnswerIndex": 1,
        "explanation": "Granville Austin famously described the Indian federal system as"
    },
    {
        "id": "ch4-l1-q8",
        "question": "The Constitution of India establishes a parliamentary form of government. What is the fundamental principle of this system?",
        "options": ["The doctrine of separation of powers between the legislature and executive.","The principle of cooperation and coordination between the legislative and executive organs.","The direct election of the Head of the State by the people.","The judicial supremacy over all administrative actions."],
        "correctAnswerIndex": 1,
        "explanation": "The parliamentary system is based on the principle of cooperation and co-ordination between the legislative and executive organs, while the presidential system is based on the separation of powers."
    },
    {
        "id": "ch4-l1-q9",
        "question": "Which term is used interchangeably with the",
        "options": ["Presidential Government","Federal Government","Cabinet Government","Unitary Government"],
        "correctAnswerIndex": 2,
        "explanation": "The parliamentary system is also known as the ‘Westminster’ model of government, responsible government, and Cabinet government."
    },
    {
        "id": "ch4-l1-q10",
        "question": "How does the Indian Parliamentary System differ fundamentally from the British Parliamentary System?",
        "options": ["India has a sovereign parliament, whereas Britain does not.","India has an elected Head of State (Republic), while Britain has a hereditary monarch.","India requires the Prime Minister to be from the Lower House, unlike Britain.","Britain has a written constitution anchoring its parliament, unlike India."],
        "correctAnswerIndex": 1,
        "explanation": "The Indian State has an elected head (republic) while the British State has hereditary head (monarchy). Also, the Indian Parliament is NOT sovereign like the British Parliament."
    },
    {
        "id": "ch4-l1-q11",
        "question": "The doctrine of",
        "options": ["American Parliament (Congress)","Indian Parliament","British Parliament","French Parliament"],
        "correctAnswerIndex": 2,
        "explanation": "The doctrine of sovereignty of Parliament is primarily associated with the British Parliament."
    },
    {
        "id": "ch4-l1-q12",
        "question": "The Indian Constitution synthesizes Parliamentary Sovereignty with which other major constitutional doctrine?",
        "options": ["Executive Accountability","Judicial Supremacy","Absolute Federalism","Direct Democracy"],
        "correctAnswerIndex": 1,
        "explanation": "The framers preferred a proper synthesis between the British principle of parliamentary sovereignty and the American principle of judicial supremacy."
    },
    {
        "id": "ch4-l1-q13",
        "question": "Which judicial body stands at the top of the integrated judicial system in India?",
        "options": ["The High Courts","The District Courts","The Supreme Court","The Federal Court"],
        "correctAnswerIndex": 2,
        "explanation": "The Supreme Court stands at the top of the integrated judicial system in the country. Below it are the High Courts at the state level."
    },
    {
        "id": "ch4-l1-q14",
        "question": "Who called the Directive Principles of State Policy a",
        "options": ["Jawaharlal Nehru","Sardar Vallabhbhai Patel","Dr. B.R. Ambedkar","K.M. Munshi"],
        "correctAnswerIndex": 2,
        "explanation": "According to Dr B.R. Ambedkar, the Directive Principles of State Policy is a"
    },
    {
        "id": "ch4-l1-q15",
        "question": "In the context of the Indian Constitution, the Directive Principles of State Policy (DPSP) are meant for promoting the ideal of:",
        "options": ["Political Democracy","Social and Economic Democracy","Absolute Equality","Religious Freedom"],
        "correctAnswerIndex": 1,
        "explanation": "The Fundamental Rights are meant for promoting political democracy. The Directive Principles of State Policy are meant for promoting the ideal of social and economic democracy."
    },
    {
        "id": "ch4-l1-q16",
        "question": "In the Minerva Mills case (1980), the Supreme Court held that the Indian Constitution is founded on the bedrock of the balance between:",
        "options": ["The Centre and the States","The Executive and the Judiciary","The Fundamental Rights and the Directive Principles","The Prime Minister and the President"],
        "correctAnswerIndex": 2,
        "explanation": "In the Minerva Mills case (1980), the Supreme Court held that"
    },
    {
        "id": "ch4-l1-q17",
        "question": "Which of the following parts was NOT in the original Constitution but was added by the 42nd Amendment Act of 1976?",
        "options": ["Part III (Fundamental Rights)","Part IV (Directive Principles)","Part IVA (Fundamental Duties)","Part IX (Panchayats)"],
        "correctAnswerIndex": 2,
        "explanation": "Part IVA (Fundamental Duties) was added by the 42nd Amendment Act of 1976 on the recommendation of the Swaran Singh Committee."
    },
    {
        "id": "ch4-l1-q18",
        "question": "Which committee recommended the inclusion of Fundamental Duties into the Indian Constitution?",
        "options": ["Santhanam Committee","Swaran Singh Committee","Ashok Mehta Committee","Balwant Rai Mehta Committee"],
        "correctAnswerIndex": 1,
        "explanation": "Fundamental Duties were added during internal emergency (1975-77) on the recommendation of the Swaran Singh Committee."
    },
    {
        "id": "ch4-l1-q19",
        "question": "Does the term",
        "options": ["Yes, it was present from the beginning.","No, it was added by the 42nd Amendment Act of 1976.","No, it was added by the 44th Amendment Act of 1978.","Yes, but it was removed later by the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "The term"
    },
    {
        "id": "ch4-l1-q20",
        "question": "Which concept explains the positive concept of secularism adopted by the Indian Constitution?",
        "options": ["The State strictly separates religion from politics completely.","The State recognizes only Hinduism as the official religion.","The State gives equal respect to all religions or protects all religions equally.","The State abolishes all religious practices."],
        "correctAnswerIndex": 2,
        "explanation": "The Indian Constitution embodies the positive concept of secularism, i.e., giving equal respect to all religions or protecting all religions equally."
    },
    {
        "id": "ch4-l1-q21",
        "question": "Universal Adult Franchise was adopted by the Constitution under which Article?",
        "options": ["Article 320","Article 324","Article 326","Article 330"],
        "correctAnswerIndex": 2,
        "explanation": "Article 326 of the Constitution provides that the elections to the House of the People and to the Legislative Assembly of every State shall be on the basis of adult suffrage."
    },
    {
        "id": "ch4-l1-q22",
        "question": "The voting age was reduced from 21 years to 18 years in 1989 by which Constitutional Amendment Act?",
        "options": ["42nd Amendment","44th Amendment","61st Amendment","73rd Amendment"],
        "correctAnswerIndex": 2,
        "explanation": "The voting age was reduced from 21 to 18 years by the 61st Constitutional Amendment Act of 1988 (effective 1989)."
    },
    {
        "id": "ch4-l1-q23",
        "question": "Though the Indian Constitution is federal and envisages a dual polity (Centre and states), how many citizenships does it provide for?",
        "options": ["Dual citizenship","Single citizenship","No citizenship but residency rights","Triple citizenship (Centre, State, District)"],
        "correctAnswerIndex": 1,
        "explanation": "Though the Indian Constitution is federal and envisages a dual polity (Centre and states), it provides for only a single citizenship, that is, the Indian citizenship."
    },
    {
        "id": "ch4-l1-q24",
        "question": "Which of the following is considered the",
        "options": ["The Prime Minister",",",",",","],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution establishes certain Independent Bodies (Election Commission, CAG, UPSC, etc.) which are considered the bulwarks of the democratic system of Government in India."
    },
    {
        "id": "ch4-l1-q25",
        "question": "Which feature of the Constitution converts the federal structure into a unitary one during extraordinary situations without a formal amendment?",
        "options": ["Single Citizenship","Universal Adult Franchise","Emergency Provisions","Judicial Review"],
        "correctAnswerIndex": 2,
        "explanation": "Emergency provisions convert the federal structure into a unitary one without a formal amendment of the Constitution. This is a unique feature."
    },
    {
        "id": "ch4-l1-q26",
        "question": "The 73rd and 74th Constitutional Amendment Acts (1992) added which unique tier of government to the Indian Constitution?",
        "options": ["The Central tier","The State tier","The Third tier (Local government)","The Judiciary branch"],
        "correctAnswerIndex": 2,
        "explanation": "The 73rd and 74th Amendments have added a third-tier of government (i.e., local) which is not found in any other Constitution of the world."
    },
    {
        "id": "ch4-l1-q27",
        "question": "The 97th Constitutional Amendment Act of 2011 gave constitutional status and protection to which of the following?",
        "options": ["Panchayati Raj Institutions","Co-operative Societies","Urban Local Bodies","Tribal Advisory Councils"],
        "correctAnswerIndex": 1,
        "explanation": "The 97th Constitutional Amendment Act of 2011 gave a constitutional status and protection to co-operative societies."
    },
    {
        "id": "ch4-l1-q28",
        "question": "Which of the following schedules was NOT present in the original Constitution but added later to protect land reforms from judicial review?",
        "options": ["Eighth Schedule","Ninth Schedule","Tenth Schedule","Eleventh Schedule"],
        "correctAnswerIndex": 1,
        "explanation": "The Ninth Schedule was added by the 1st Amendment Act (1951) to protect the land reform and other laws included in it from judicial review."
    },
    {
        "id": "ch4-l1-q29",
        "question": "The Indian Constitution empowers which body to declare parliamentary laws as unconstitutional through the power of Judicial Review?",
        "options": ["The President","The Supreme Court","The Parliament itself","The Comptroller and Auditor General"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court, on the one hand, can declare the parliamentary laws as unconstitutional through its power of judicial review."
    },
    {
        "id": "ch4-l1-q30",
        "question": "A Rigid Constitution is one that requires a",
        "options": ["Completely rigid","Completely flexible","A mix of both rigidity and flexibility","Unamendable"],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution of India is neither fully rigid nor fully flexible, but a synthesis of both. Article 368 provides for two types of amendments (rigid), while some provisions can be amended by a simple majority (flexible)."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch4-l2-q1",
        "question": "With reference to the Indian Constitution, the adoption of a",
        "options": ["The Executive is entirely independent of the Legislature and directly accountable to the Judiciary.","The Executive is drawn from the Legislature and remains accountable to it for its policies and acts.","The Executive holds a fixed tenure irrespective of parliamentary support, ensuring stability.","The Prime Minister acts as the titular head, while the President exercises real executive power."],
        "correctAnswerIndex": 1,
        "explanation": "In a parliamentary system (Cabinet government), the executive is formed from the legislature and is collectively responsible to it (specifically the lower house) for all its policies and actions."
    },
    {
        "id": "ch4-l2-q2",
        "question": "Consider the following features of the Constitution:\\n1. Strong Centre\\n2. Single Citizenship\\n3. Independent Judiciary\\n4. Integrated Judiciary\\nWhich of the above are considered",
        "options": ["1 and 2 only","1, 2, and 4 only","3 and 4 only","1, 2, 3, and 4"],
        "correctAnswerIndex": 1,
        "explanation": "Strong Centre, Single Citizenship, and Integrated Judiciary are unitary features. An Independent Judiciary, independent of the executive and other pressures, is a crucial requirement of a FEDERAL system (to resolve disputes between Centre and States), so"
    },
    {
        "id": "ch4-l2-q3",
        "question": "Assertion (A): The Indian Parliament is NOT a fully sovereign body like the British Parliament.\\nReason (R): The Indian Constitution provides for Judicial Review, Fundamental Rights, and a written federal structure that limit parliamentary powers.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. In India, parliamentary sovereignty is limited by the written constitution, federal system, judicial review, and fundamental rights, unlike in Britain where Parliament is absolutely supreme."
    },
    {
        "id": "ch4-l2-q4",
        "question": "The Indian Constitution embodies a synthesis of",
        "options": ["The Supreme Court can strike down laws as unconstitutional, while Parliament can amend the bulk of the Constitution through its constituent power.","Parliament can overrule any Supreme Court judgment by a simple majority vote.","The Supreme Court drafts constitutional amendments, which Parliament must ratify.","The President mediates between Parliament and the Supreme Court in cases of conflict."],
        "correctAnswerIndex": 0,
        "explanation": "The Supreme Court, on the one hand, can declare parliamentary laws as unconstitutional through its power of judicial review. The Parliament, on the other hand, can amend the major portion of the Constitution through its constituent power."
    },
    {
        "id": "ch4-l2-q5",
        "question": "Which of the following is a classic characteristic of",
        "options": ["The Constitution can be amended by the ordinary law-making procedure.","Constitutional amendments require ratification by the legislatures of the States in a federal setup.","Constitutional customs are strictly enforced by an unelected monarch.","All laws must originate in the upper house of the legislature."],
        "correctAnswerIndex": 1,
        "explanation": "A rigid constitution (like the US) requires a special procedure for amendment. In India, some provisions (federal structure) require a special majority of Parliament AND ratification by half of the state legislatures."
    },
    {
        "id": "ch4-l2-q6",
        "question": "In the context of",
        "options": ["They are elected directly by the people for a fixed term.","Their salaries are subject to annual vote by the Parliament based on performance.","They enjoy security of tenure and their expenses are charged on the Consolidated Fund of India.","They cannot be removed from office under any circumstances before retirement."],
        "correctAnswerIndex": 2,
        "explanation": "The Constitution ensures the independence of the judiciary through provisions like security of tenure, fixed service conditions, and charging all expenses of the Supreme Court on the Consolidated Fund of India."
    },
    {
        "id": "ch4-l2-q7",
        "question": "Consider the constitutional status of the",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 1 is correct. Statement 2 is incorrect; typically, Fundamental Rights enjoy supremacy over DPSP, although the relationship is balanced (Minerva Mills case), DPSP does not universally prevail."
    },
    {
        "id": "ch4-l2-q8",
        "question": "The introduction of",
        "options": ["Less than 5%","About 10%","Almost 30%","More than 50%"],
        "correctAnswerIndex": 1,
        "explanation": "Under the Government of India Act of 1935, the franchise was extremely limited; only about 10% of the total population enjoyed the right to vote."
    },
    {
        "id": "ch4-l2-q9",
        "question": "The Indian Constitution provides a",
        "options": ["In India, a citizen owes primary allegiance to their State of residence, unlike the USA.","In the USA, citizens have two sets of rights (Federal and State) corresponding to their dual citizenship, whereas Indians possess a uniform set of rights irrespective of their domicile.","In India, the State governments can confer separate State citizenship for local elections, unlike the USA.","There is no practical difference;","in the USA is merely a theoretical concept."],
        "correctAnswerIndex": 1,
        "explanation": "In countries like USA, each person is not only a citizen of USA but also a citizen of the particular state to which he belongs. Thus, he owes allegiance to both and enjoys dual sets of rights. In India, there"
    },
    {
        "id": "ch4-l2-q10",
        "question": "Which Constitutional Amendment is often referred to as the",
        "options": ["24th Amendment Act, 1971","38th Amendment Act, 1975","42nd Amendment Act, 1976","44th Amendment Act, 1978"],
        "correctAnswerIndex": 2,
        "explanation": "The 42nd Amendment Act (1976) is known as the"
    },
    {
        "id": "ch4-l2-q11",
        "question": "The doctrine of",
        "options": ["Golaknath Case (1967)","Kesavananda Bharati Case (1973)","Minerva Mills Case (1980)","S.R. Bommai Case (1994)"],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch4-l2-q12",
        "question": "With reference to Emergency Provisions, what happens to the federal structure of the Constitution when a",
        "options": ["The Constitution is formally amended to suspend state governments permanently.","The federal structure continues intact, but states lose financial taxation powers.","The federal structure transforms entirely into a unitary one, with the Centre assuming all sovereign powers without any formal constitutional amendment.","The power shifts entirely to the President, bypassing both the Centre and the States."],
        "correctAnswerIndex": 2,
        "explanation": "During an emergency, the Central government becomes all-powerful and the states go into the total control of the Centre. It converts the federal structure into a unitary one without a formal amendment of the Constitution."
    },
    {
        "id": "ch4-l2-q13",
        "question": "Consider the following statements about",
        "options": ["1 only","1 and 2 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 1,
        "explanation": "Statement 3 is incorrect; Fundamental Duties were NOT in the original Constitution. They were added by the 42nd Amendment in 1976."
    },
    {
        "id": "ch4-l2-q14",
        "question": "The term",
        "options": ["1 and 3 only","2 and 3 only","1 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Western secularism dictates a strict"
    },
    {
        "id": "ch4-l2-q15",
        "question": "Match the following Constitutional features to their respective Parts:\\nList-I\\nA. Fundamental Rights\\nB. Directive Principles\\nC. Fundamental Duties\\nD. The Panchayats\\n\\nList-II\\n1. Part IV\\n2. Part IVA\\n3. Part III\\n4. Part IX\\n\\nCode (A-B-C-D):",
        "options": ["3-1-2-4","1-3-4-2","3-2-1-4","4-1-2-3"],
        "correctAnswerIndex": 0,
        "explanation": "FRs are in Part III, DPSP in Part IV, Duties in Part IVA, Panchayats in Part IX."
    },
    {
        "id": "ch4-l2-q16",
        "question": "Assertion (A): The Constitution of India has a",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 2,
        "explanation": "The Assertion (A) is true; the Constitution has a unitary bias (strong centre). The Reason (R) is false; residuary powers are vested in the CENTRE (Parliament under Article 248), not the states."
    },
    {
        "id": "ch4-l2-q17",
        "question": "Which of the following is considered an",
        "options": ["NITI Aayog","Election Commission of India","National Human Rights Commission","Central Bureau of Investigation"],
        "correctAnswerIndex": 1,
        "explanation": "The Election Commission of India is an independent CONSTITUTIONAL body (Article 324). NITI Aayog, NHRC, and CBI are statutory or executive bodies, not constitutional bulwarks."
    },
    {
        "id": "ch4-l2-q18",
        "question": "What is the primary role of the Comptroller and Auditor General (CAG) of India as an independent constitutional body?",
        "options": ["To advise the President on legal matters.","To audit the accounts of the Central and State governments acting as the guardian of the public purse.","To conduct independent competitive examinations for civil services.","To monitor and control the monetary policy and inflation rates."],
        "correctAnswerIndex": 1,
        "explanation": "The CAG (Article 148) audits the accounts of the Central and state governments and acts as the guardian of the public purse."
    },
    {
        "id": "ch4-l2-q19",
        "question": "The Indian Constitution guarantees Universal Adult Franchise. What was the most significant hurdle or concern repeatedly raised against its immediate adoption in 1949?",
        "options": ["The opposition from the Princely States rulers.","The massive size of the country, high illiteracy, and huge poverty among the electorate.","The strict opposition from the British Parliament during the transfer of power.","The lack of a centralized banking system to fund the elections."],
        "correctAnswerIndex": 1,
        "explanation": "It was a bold experiment in view of the vast size of the country, its huge population, high poverty, social inequality, and massive illiteracy. Despite this, the framers trusted the common citizens."
    },
    {
        "id": "ch4-l2-q20",
        "question": "In the context of the blend of rigidity and flexibility in the Indian Constitution, how are provisions like",
        "options": ["By a special majority of Parliament only.","By a special majority of Parliament and ratification by half of the states.","By a simple majority of Parliament, outside the scope of Article 368.","They cannot be amended as they form the Basic Structure."],
        "correctAnswerIndex": 2,
        "explanation": "Some provisions (like Article 2, 3, 4 relating to states) can be amended by a simple majority of the Parliament in the manner of ordinary legislative process (flexible aspect), and notably do not fall under Article 368."
    },
    {
        "id": "ch4-l2-q21",
        "question": "Which of the following Fundamental Rights acts as a",
        "options": ["Directive Principles of State Policy","Fundamental Rights (Part III)","Fundamental Duties","Emergency Provisions"],
        "correctAnswerIndex": 1,
        "explanation": "Fundamental Rights are meant for promoting political democracy. They operate as limitations on the tyranny of the executive and arbitrary laws of the legislature."
    },
    {
        "id": "ch4-l2-q22",
        "question": "Consider the difference between",
        "options": ["Absolute Parliamentary Supremacy like the UK.","Absolute Judicial Supremacy like the USA.","Constitutional Supremacy, where the Constitution is supreme over the Parliament.","Dictatorial Supremacy of the Executive."],
        "correctAnswerIndex": 2,
        "explanation": "Unlike the UK where Parliament is supreme, India has a written Constitution that is the supreme law of the land (Constitutional Supremacy) which limits the powers of Parliament."
    },
    {
        "id": "ch4-l2-q23",
        "question": "The creation of full-fledged three-tier local governments (Panchayats and Municipalities) in 1992 was primarily aimed at:",
        "options": ["Centralizing all agrarian laws under the Union list.","Realizing the ideal of","and grassroots democracy.","Abolishing the State Governments eventually.","Replacing the district administration headed by the District Collector."],
        "correctAnswerIndex": 1,
        "explanation": "The 73rd and 74th Amendments established the 3rd tier of government to realize"
    },
    {
        "id": "ch4-l2-q24",
        "question": "Which of the following principles forms the foundation of",
        "options": ["Mandatory government ownership and control.","Democratic control, voluntary formation, and professional management.","Strict monopolization of rural credit by public sector banks.","Replacement of Panchayats with cooperative boards."],
        "correctAnswerIndex": 1,
        "explanation": "The 97th Amendment protects cooperatives and encourages their voluntary formation, autonomous functioning, democratic control, and professional management."
    },
    {
        "id": "ch4-l2-q25",
        "question": "How do the",
        "options": ["While FRs ensure political democracy, DPSPs aim to establish social and economic democracy.","While FRs are given to citizens alone, DPSPs are obligations placed on foreigners.","While FRs restrict the Centre, DPSPs restrict only the State Governments.","They contradict each other, leading to DPSPs constantly invalidating FRs."],
        "correctAnswerIndex": 0,
        "explanation": "FRs promote political democracy (freedom), while DPSPs promote social and economic democracy (welfare state). They complement each other to form a holistic constitutional philosophy."
    },
    {
        "id": "ch4-l2-q26",
        "question": "In the context of the",
        "options": ["It only hears cases related to federal taxation.","It acts as the highest court to settle disputes between the Centre and the States and among the States.","It dictates the laws that State legislatures must pass.","It is subordinate to the President in matters of federal importance."],
        "correctAnswerIndex": 1,
        "explanation": "Acting as a"
    },
    {
        "id": "ch4-l2-q27",
        "question": "A distinguishing feature of the Indian Constitution is the existence of special provisions for certain regions and classes. Which part of the Constitution deals with the temporary, transitional, and special provisions for certain states?",
        "options": ["Part I","Part XVIII","Part XX","Part XXI"],
        "correctAnswerIndex": 3,
        "explanation": "Part XXI contains"
    },
    {
        "id": "ch4-l2-q28",
        "question": "Consider the following statements regarding",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 2,
        "explanation": "Both statements are correct. The US follows a strict non-interference"
    },
    {
        "id": "ch4-l2-q29",
        "question": "The framers bypassed the widely practiced",
        "options": ["Separate electorates for Dalits.","A system of joint electorates with reservation of seats for SCs and STs.","Nomination of all SC/ST members by the President.","Weighted voting rights for minorities."],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution abolished communal representation (separate electorates) and instead adopted joint electorates with reservation of seats for Scheduled Castes and Scheduled Tribes."
    },
    {
        "id": "ch4-l2-q30",
        "question": "A primary",
        "options": ["States have no right to secede from the Union.","Parliament can unilaterally alter the area, boundaries or name of any state.","The Governor can reserve state bills for the President","All state public service commissions are appointed by the President."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 3, Parliament can alter the territory, boundaries, or name of a state without the state"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch4-l3-q1",
        "question": "With reference to the synthesis of",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 3 is incorrect. Parliament cannot merely pass a declaratory resolution to override a judgment (as ruled in cases like Cauvery Water Dispute). It must fundamentally alter the legislative basis or remove the constitutional defect pointed out by the court to validate the law retrospectively."
    },
    {
        "id": "ch4-l3-q2",
        "question": "The recent debate around",
        "options": ["Article 356 (President","Article 324, which centralizes the election machinery under the Election Commission of India.","Schedule VII, which places","in the Concurrent List.","Article 83, which makes the term of the Lok Sabha permanently fixed and unalterable."],
        "correctAnswerIndex": 0,
        "explanation": "The primary structural concern is that synchronizing elections might require truncating the tenure of state assemblies (via Article 356 or constitutional amendments), thus destroying the independent electoral mandate and survival of state governments, a core federal feature."
    },
    {
        "id": "ch4-l3-q3",
        "question": "Consider the following statements regarding the",
        "options": ["1 only","1 and 3 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 1,
        "explanation": "Statement 1 is incorrect (It is a judicial innovation, not written in the Constitution). Statement 3 is incorrect; the Supreme Court in S.R. Bommai (1994) explicitly held that Secularism was a basic feature, BUT it had already noted in Kesavananda (1973) that the secular character was basic even before the 42nd Amendment. The Constitution was inherently secular before 1976."
    },
    {
        "id": "ch4-l3-q4",
        "question": "Which of the following beautifully signifies the concept of a",
        "options": ["Part III (Fundamental Rights)","Part IV (Directive Principles of State Policy)","Part IVA (Fundamental Duties)","Tenth Schedule (Anti-Defection)"],
        "correctAnswerIndex": 1,
        "explanation": "The Directive Principles of State Policy (Part IV) embody the concept of a"
    },
    {
        "id": "ch4-l3-q5",
        "question": "In the ongoing debates regarding cooperative federalism vs. centralizing tendencies (e.g., the deployment of central agencies like CBI/ED in states), which of the following is an inherent unitary feature of the Indian Constitution?",
        "options": ["The establishment of Inter-State Councils under Article 263.","The division of powers in the Seventh Schedule.","The appointment of the Governor of a State by the President.","The creation of the Finance Commission."],
        "correctAnswerIndex": 2,
        "explanation": "The Governor is appointed by the President and holds office during His pleasure. This allows the Centre to exercise significant control over the States, acting as a strong unitary (non-federal) feature."
    },
    {
        "id": "ch4-l3-q6",
        "question": "Consider the following characteristics of",
        "options": ["1 and 2 only","1 and 3 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 1,
        "explanation": "Statement 2 is incorrect; originally (in 1950), the voting age was 21 years. It was reduced to 18 years only in 1989 by the 61st Amendment Act."
    },
    {
        "id": "ch4-l3-q7",
        "question": "India is described as a",
        "options": ["1 and 2 only","1 and 3 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "The term"
    },
    {
        "id": "ch4-l3-q8",
        "question": "The Indian Constitution empowers Parliament to restrict or abrogate the Fundamental Rights of members of armed forces, parliamentary forces, police forces, intelligence agencies (Article 33). This unique feature represents a compromise between:",
        "options": ["Individual liberty and national security/discipline.","Federalism and Unitary bias.","Judicial Supremacy and Parliamentary Sovereignty.","Democratic decentralization and Centralization."],
        "correctAnswerIndex": 0,
        "explanation": "Article 33 restricts FRs of armed forces to ensure proper discharge of their duties and maintenance of discipline, balancing individual liberty against national security."
    },
    {
        "id": "ch4-l3-q9",
        "question": "Assertion (A): The Constitution of India protects the life and personal liberty of citizens strictly according to",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 3,
        "explanation": "The Assertion is conceptually false historically because the text uses"
    },
    {
        "id": "ch4-l3-q10",
        "question": "Which feature makes the Indian Constitution somewhat",
        "options": ["The requirement of ratification by half of the State Legislatures for amending federal provisions (Article 368).","The ability to form new states by a simple majority under Article 4.","The use of ordinances by the President under Article 123.","The absolute veto power of the President over constitutional amendment bills."],
        "correctAnswerIndex": 0,
        "explanation": "The requirement for ratification by half of the states for federal amendments is what injects"
    },
    {
        "id": "ch4-l3-q11",
        "question": "In light of the recent controversies regarding state-sponsored religious events, how does the Indian model of secularism interpret",
        "options": ["The state cannot tax citizens to promote any particular religion (Article 27), but it can financially aid all religious institutions impartially.","The state must completely ban all religious symbols in public spaces, akin to French",".","The state officially recognizes majority religious practices while tolerating minority ones.","The state is prohibited from administering any property belonging to a religious endowment."],
        "correctAnswerIndex": 0,
        "explanation": "Indian secularism allows state intervention and aid (e.g., grants, subsidies for Haj or Mansarovar, or funding minority schools) provided it is not discriminatory. Article 27 prevents taxing to promote a *specific* religion, but general taxes can fund all religions impartially."
    },
    {
        "id": "ch4-l3-q12",
        "question": "Consider the constitutional status of the Comptroller and Auditor General (CAG) of India:\\n1. The CAG",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 1,
        "explanation": "Statement 1 is incorrect; the CAG"
    },
    {
        "id": "ch4-l3-q13",
        "question": "The concept of",
        "options": ["1 only","2 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 2,
        "explanation": "Unlike the US (where state courts enforce state laws and federal courts enforce federal laws), India has a single integrated judicial system that enforces BOTH central and state laws (Statement 2). The SC can also transfer cases (Statement 3)."
    },
    {
        "id": "ch4-l3-q14",
        "question": "Assertion (A): The Indian Constitution contains detailed administrative provisions alongside fundamental principles.\\nReason (R): The framers wanted to utilize the vast administrative experience of the Government of India Act, 1935 to avoid instability in a nascent democracy.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true. India"
    },
    {
        "id": "ch4-l3-q15",
        "question": "The introduction of Universal Adult Franchise without any qualification of education, property, or taxation in 1950 is considered a revolutionary step. Which of the following is an immediate structural consequence of this feature?",
        "options": ["It necessitated the immediate abolition of the Rajya Sabha.","It required the immediate establishment of the Election Commission of India as an independent constitutional body.","It led to the automatic reservation of seats for women in the Lok Sabha.","It mandated that the President be directly elected by the adult population."],
        "correctAnswerIndex": 1,
        "explanation": "Administering elections for ~160 million newly enfranchised, mostly illiterate voters logistically required an extremely powerful, independent, and centralized Election Commission, leading to Article 324 being enforced early on Nov 26, 1949."
    },
    {
        "id": "ch4-l3-q16",
        "question": "Which of the following constitutional provisions reflects the",
        "options": ["The establishment of an Inter-State Council.","The creation of the NITI Aayog to replace the Planning Commission.","The existence of Special Provisions for certain states under Part XXI (Articles 371-371J).","The division of powers into Union, State, and Concurrent Lists."],
        "correctAnswerIndex": 2,
        "explanation": "Asymmetric federalism refers to the unequal constitutional status and special administrative arrangements granting diverse levels of autonomy to different states (e.g., Nagaland, Mizoram, historically J&K), unlike the uniform"
    },
    {
        "id": "ch4-l3-q17",
        "question": "With respect to the",
        "options": ["They are placed immediately after Fundamental Rights to ensure courts can enforce them simultaneously.","They are placed immediately after the Directive Principles to suggest that citizenship obligations are morally parallel to the State","They are placed before the Union Executive chapter to ensure the President enforces them directly.","They are placed in a separate schedule to isolate them from constitutional amendments."],
        "correctAnswerIndex": 1,
        "explanation": "They were deliberately placed in Part IVA, right after the DPSP (Part IV), to structurally indicate that just as DPSP are guidelines for the State, Fundamental Duties are moral/civic guidelines for the citizens, both being non-justiciable."
    },
    {
        "id": "ch4-l3-q18",
        "question": "In recent years, the Union Government",
        "options": ["The Reserve Bank of India dictating state budgets.","A constitutionally mandated Finance Commission (under Article 280) that recommends the distribution of net proceeds of taxes.","The Supreme Court allocating tax revenues annually.","The NITI Aayog calculating the state-wise GDP contribution."],
        "correctAnswerIndex": 1,
        "explanation": "Article 280 established the Finance Commission precisely to balance fiscal federalism by recommending the vertical and horizontal devolution of central taxes to the states."
    },
    {
        "id": "ch4-l3-q19",
        "question": "Which Supreme Court decision decisively established that the",
        "options": ["Kesavananda Bharati case (1973)","Minerva Mills case (1980)","Golaknath case (1967)","Maneka Gandhi case (1978)"],
        "correctAnswerIndex": 1,
        "explanation": "In the Minerva Mills case (1980), the SC struck down sections of the 42nd Amendment that gave blanket primacy to DPSP over FRs, stating that the Constitution is founded on the bedrock of balance between them."
    },
    {
        "id": "ch4-l3-q20",
        "question": "The Indian Constitution uniquely adopted a",
        "options": ["The modern system completely removes state government control over local bodies.","The modern system grants local bodies the power to amend the Constitution.","The modern system provides an enumerated Constitutional timeline for regular elections (State Election Commission) and financial devolution (State Finance Commission).","The British acts allowed local bodies to maintain their own armed police forces."],
        "correctAnswerIndex": 2,
        "explanation": "By providing constitutional status (Parts IX and IXA), the modern PRIs are protected against arbitrary dissolution by states and are guaranteed independent mechanisms for elections (SEC) and finance (SFC)."
    },
    {
        "id": "ch4-l3-q21",
        "question": "Some critics describe the Indian Constitution as a",
        "options": ["The introduction of Judicial Review.","The concept of",".","The provision for special protection and reservation for socio-economically disadvantaged classes (SCs, STs, OBCs).","The incorporation of a Bill of Rights."],
        "correctAnswerIndex": 2,
        "explanation": "While affirmative action concepts existed, the vast, constitutionally entrenched system of compensatory discrimination and reservations (Articles 15, 16, 330, etc.) tailored specific to caste and tribal realities was a highly original innovation for a post-colonial constitution."
    },
    {
        "id": "ch4-l3-q22",
        "question": "With reference to the",
        "options": ["India needed a presidential strongman to prevent balkanization.","The Parliamentary system was entirely indigenous to ancient Indian republics.","India had grown up under the British parliamentary tradition and evaluating the executive","The Princes would only accede if a parliamentary system was adopted."],
        "correctAnswerIndex": 2,
        "explanation": "K.M. Munshi argued that India had acquired experience in the parliamentary system over the last century and preferred"
    },
    {
        "id": "ch4-l3-q23",
        "question": "A salient feature of the Constitution is its",
        "options": ["The Citizenship Act, 1955","Public Employment (Requirement as to Residence) Act, 1957 (currently operational in parts of AP/Telangana via Article 371-D)","The Representation of the People Act, 1951","The State Reorganization Act, 1956"],
        "correctAnswerIndex": 1,
        "explanation": "While the Public Employment Act 1957 was largely repealed, special provisions under Article 371-D (for Andhra/Telangana) still allow specific residential protections, acting as a unique exception under Article 16(3)."
    },
    {
        "id": "ch4-l3-q24",
        "question": "Consider the constitutional design of",
        "options": ["Cooperatives are an anti-competitive socialist design violating Article 19(1)(g).","The amendment impinged upon",", which is a State Subject (Entry 32 of State List), without obtaining ratification from half the states under Article 368.","The amendment violated the basic structure by destroying the Election Commission","The amendment was passed through an Ordinance and never ratified by Parliament."],
        "correctAnswerIndex": 1,
        "explanation": "In Union of India v. Rajendra N. Shah (2021), the SC held that since"
    },
    {
        "id": "ch4-l3-q25",
        "question": "The Indian Constitution is criticized for being a",
        "options": ["Yes, explicitly required by Articles 76 and 165.","No, they only need to be senior lawyers with 10 years of practice.","Yes, but this applies only to the Attorney General, not the Advocate General.","No, the Constitution leaves this entirely to the discretion of the President/Governor without any judicial equivalent mandate."],
        "correctAnswerIndex": 0,
        "explanation": "Article 76 requires the AG to be qualified to be a Judge of the Supreme Court. Article 165 requires the Advocate General to be qualified to be a Judge of a High Court."
    },
    {
        "id": "ch4-l3-q26",
        "question": "Which feature of the Constitution ensures that",
        "options": ["The creation of All-India Services (Article 312).","The independence and integration of the Judiciary.","The emergency powers of the President.","The power of Parliament to amend the Constitution."],
        "correctAnswerIndex": 1,
        "explanation": "An independent judiciary is the ultimate guarantor of both individual rights against state terror and the federal balance between the Centre and States."
    },
    {
        "id": "ch4-l3-q27",
        "question": "Dr. B.R. Ambedkar famously remarked on the floor of the Assembly,",
        "options": ["Articles 2, 3, and 4 (Territories)","The majority of provisions requiring simple majority","Article 169 (Abolition/Creation of Legislative Councils)","Proviso to Article 368 (requiring ratification by half the states)"],
        "correctAnswerIndex": 3,
        "explanation": "The proviso to Article 368 outlines the"
    },
    {
        "id": "ch4-l3-q28",
        "question": "The Constitution draws its",
        "options": ["It permanently abolished the provision for a",".","It replaced the term","with","and made the proclamation subject to written Cabinet advice and periodic parliamentary approval.","It shifted the power to declare an emergency from the President to the Chief Justice of India.","It allowed State Governors to declare National Emergencies independently."],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment restricted executive overreach by establishing extremely rigid procedural safeguards (written cabinet advice, 1-month parliamentary approval, armed rebellion instead of internal disturbance) to prevent a repeat of the 1975 emergency."
    },
    {
        "id": "ch4-l3-q29",
        "question": "Assertion (A): The Indian Constitution is unique because it features a strict Separation of Powers like the US Constitution.\\nReason (R): The executive, legislative, and judicial branches are constitutionally independent and cannot hold personnel in common.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true.","Both A and R are false."],
        "correctAnswerIndex": 4,
        "explanation": "Both statements are false. India does not have a strict separation of powers. It has a Parliamentary system where the executive is drawn from the legislature (personnel in common). Only the judiciary is strictly independent."
    },
    {
        "id": "ch4-l3-q30",
        "question": "In the context of",
        "options": ["73rd and 74th Amendment Acts (1992)","61st Amendment Act (1989)","106th Amendment Act (2023 - Nari Shakti Vandan Adhiniyam)","86th Amendment Act (2002)"],
        "correctAnswerIndex": 0,
        "explanation": "The 73rd and 74th Amendments mandated a minimum of one-third reservation for women in Panchayats and Municipalities respectively. (The 106th Amendment extended this to Lok Sabha and State Assemblies much later in 2023)."
    }
];

export const CHAPTER_4_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
