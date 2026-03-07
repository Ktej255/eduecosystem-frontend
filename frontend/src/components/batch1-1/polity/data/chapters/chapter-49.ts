import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch49-l1-q1",
        "question": "Which Article of the Constitution provides for the National Commission for Scheduled Tribes (NCST)?",
        "options": ["Article 338","Article 338A","Article 338B","Article 340"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338A was inserted by the 89th Amendment to provide for a separate commission for STs."
    },
    {
        "id": "ch49-l1-q2",
        "question": "The National Commission for Scheduled Tribes was created as a separate body in which year?",
        "options": ["2002","2003","2004","2005"],
        "correctAnswerIndex": 2,
        "explanation": "Though the amendment was passed in 2003, the separate commission for STs came into existence in February 2004."
    },
    {
        "id": "ch49-l1-q3",
        "question": "The NCST consists of a Chairperson, a Vice-Chairperson and how many other members?",
        "options": ["Two other members","Three other members","Four other members","Five other members"],
        "correctAnswerIndex": 1,
        "explanation": "It consists of a Chairperson, a Vice-Chairperson and three other members (total five)."
    },
    {
        "id": "ch49-l1-q4",
        "question": "At least one member of the National Commission for Scheduled Tribes must be a:",
        "options": ["Judge","Woman","Social worker","Foreign expert"],
        "correctAnswerIndex": 1,
        "explanation": "The rules specify that at least one member should be a woman."
    },
    {
        "id": "ch49-l1-q5",
        "question": "Who appoints the Chairperson and members of the NCST?",
        "options": ["The Prime Minister","The President of India","The Minister of Tribal Affairs","The Speaker"],
        "correctAnswerIndex": 1,
        "explanation": "They are appointed by the President by warrant under his hand and seal."
    },
    {
        "id": "ch49-l1-q6",
        "question": "The Chairperson of NCST is given the rank and status of a:",
        "options": ["Cabinet Minister of the Union","Minister of State","Secretary","Additional Secretary"],
        "correctAnswerIndex": 0,
        "explanation": "The Chairperson has the rank of a Union Cabinet Minister."
    },
    {
        "id": "ch49-l1-q7",
        "question": "The tenure of the Chairperson and members of NCST is usually:",
        "options": ["2 years","3 years","5 years","6 years"],
        "correctAnswerIndex": 1,
        "explanation": "They hold office for a term of three years from the date of assumption of charge."
    },
    {
        "id": "ch49-l1-q8",
        "question": "To whom does the NCST submit its annual report?",
        "options": ["The Parliament","The President of India","The Minister of Tribal Affairs","The Chief Minister"],
        "correctAnswerIndex": 1,
        "explanation": "It presents an annual report to the President."
    },
    {
        "id": "ch49-l1-q9",
        "question": "The NCST has all the powers of which court while investigating a matter?",
        "options": ["A Criminal Court","A Civil Court","A High Court","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Like the NCSC, the NCST has the powers of a civil court for evidence and summoning."
    },
    {
        "id": "ch49-l1-q10",
        "question": "Which of the following describes the main function of NCST?",
        "options": ["To prepare the list of STs in each state.","To investigate and monitor all matters relating to the safeguards provided for STs.","To conduct tribal dance festivals.","To promote tribal products in the international market."],
        "correctAnswerIndex": 1,
        "explanation": "Its primary constitutional duty is to oversee the safeguards and protections for STs."
    },
    {
        "id": "ch49-l1-q11",
        "question": "Which ministry is the nodal ministry for NCST?",
        "options": ["Ministry of Home Affairs","Ministry of Tribal Affairs","Ministry of Social Justice and Empowerment","Ministry of Law"],
        "correctAnswerIndex": 1,
        "explanation": "NCST is administratively linked to the Ministry of Tribal Affairs."
    },
    {
        "id": "ch49-l1-q12",
        "question": "Is the Union Government required to consult the NCST on major policy matters affecting STs?",
        "options": ["No","Yes, according to Article 338A(9)","Only for the Fifth Schedule areas","Only if the Governor requests"],
        "correctAnswerIndex": 1,
        "explanation": "Mandatory consultation is a constitutional requirement (Art 338A(9))."
    },
    {
        "id": "ch49-l1-q13",
        "question": "Can a member of NCST hold office for more than two terms?",
        "options": ["Yes","No, only two terms are allowed.","Only for the woman member.","Only if the President allows as a special case."],
        "correctAnswerIndex": 1,
        "explanation": "Members are eligible for appointment only for a maximum of two terms."
    },
    {
        "id": "ch49-l1-q14",
        "question": "The NCST works towards which of the following",
        "options": ["Measures to be taken to confer ownership rights in respect of minor forest produce.","Measures to safeguard rights of the tribal communities over mineral resources.","Measures to be taken to ensure full implementation of the PESA Act.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Several specific ST-related policy areas were formally added to the commission"
    },
    {
        "id": "ch49-l1-q15",
        "question": "The",
        "options": ["Article 330","Article 338","Article 340","Article 342"],
        "correctAnswerIndex": 1,
        "explanation": "Originally Art 338 provided for a single special officer for BOTH SCs and STs."
    },
    {
        "id": "ch49-l1-q16",
        "question": "When the NCST report is about a",
        "options": ["The Chief Minister","The Governor of the state","The High Court Chief Justice","The Tribal Council"],
        "correctAnswerIndex": 1,
        "explanation": "The Governor lays it before the State Legislature with an ATR."
    },
    {
        "id": "ch49-l1-q17",
        "question": "The Vice-Chairperson of NCST has the rank of a:",
        "options": ["Cabinet Minister","Minister of State","Secretary","Additional Secretary"],
        "correctAnswerIndex": 1,
        "explanation": "The Vice-Chairperson has the rank of a Minister of State."
    },
    {
        "id": "ch49-l1-q18",
        "question": "Which Schedule of the Constitution deals with the administration of Tribal Areas in the states of Assam, Meghalaya, Tripura and Mizoram?",
        "options": ["Fifth Schedule","Sixth Schedule","Seventh Schedule","Tenth Schedule"],
        "correctAnswerIndex": 1,
        "explanation": "The Sixth Schedule specifically handles those four NE states."
    },
    {
        "id": "ch49-l1-q19",
        "question": "Does the NCST handle complaints of",
        "options": ["No, only HRRC","Yes, it is one of the functions to suggest measures for relief and rehabilitation.","Only if the project is in a city.","Only for irrigation projects."],
        "correctAnswerIndex": 1,
        "explanation": "Managing and monitoring the impact of development on ST lands is a key function."
    },
    {
        "id": "ch49-l1-q20",
        "question": "The",
        "options": ["NCSC only","NCST only","National Commission for SCs and STs (Common Body)","Planning Commission"],
        "correctAnswerIndex": 2,
        "explanation": "It was a unified multi-member commission."
    },
    {
        "id": "ch49-l1-q21",
        "question": "Who decides the rules of procedure for the National Commission for Scheduled Tribes?",
        "options": ["The Parliament","The President","The Commission itself","The Prime Minister"],
        "correctAnswerIndex": 2,
        "explanation": "According to Article 338A(4), the Commission has the power to regulate its own procedure."
    },
    {
        "id": "ch49-l1-q22",
        "question": "Is the Chairperson of the NCST an ex-officio member of any other body?",
        "options": ["NITI Aayog","National Human Rights Commission (NHRC)","Election Commission","Finance Commission"],
        "correctAnswerIndex": 1,
        "explanation": "The Chairpersons of NCST, NCSC, and NCBC are ex-officio members of the NHRC."
    },
    {
        "id": "ch49-l1-q23",
        "question": "Can a person who is",
        "options": ["Yes","No, custom and spirit of representation ensure he is from the community.","Only for the first terms.","Only if he is a Judge of Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "Self-led governance/oversight is a core principle for these commissions."
    },
    {
        "id": "ch49-l1-q24",
        "question": "The Headquarters of NCST is in:",
        "options": ["Guwahati","New Delhi","Ranchi","Raipur"],
        "correctAnswerIndex": 1,
        "explanation": "It is located in New Delhi, with regional offices across the country."
    },
    {
        "id": "ch49-l1-q25",
        "question": "The protection from",
        "options": ["NCSC","NCST","UPSC","Law Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Preventing land alienation is a major policy objective for ST welfare overseen by NCST."
    },
    {
        "id": "ch49-l1-q26",
        "question": "The rank of",
        "options": ["The Chairperson of NCST","The Vice-Chairperson of NCST","The Secretary of NCST","All members of NCST"],
        "correctAnswerIndex": 1,
        "explanation": "The Vice-Chairperson gets this rank; the Chairperson gets Cabinet rank."
    },
    {
        "id": "ch49-l1-q27",
        "question": "The NCST provides an Action Taken Report (ATR) along with its report to the President to show:",
        "options": ["How many meetings were held.","Recommendations accepted/rejected and reasons for non-acceptance.","The number of tribal people who got jobs.","The salary budget."],
        "correctAnswerIndex": 1,
        "explanation": "This report is laid before Parliament for public scrutiny."
    },
    {
        "id": "ch49-l1-q28",
        "question": "The creation of a separate NCST was a response to:",
        "options": ["The demand for a separate ministry.","The recognition that STs have culturally and geographically distinct problems from SCs.","The need to hire more staff.","A Supreme Court order."],
        "correctAnswerIndex": 1,
        "explanation": "The bifurcation happened primarily for focused handling of ST-specific issues."
    },
    {
        "id": "ch49-l1-q29",
        "question": "What is the",
        "options": ["2 members including Chairperson","3 members including Chairperson or Vice-Chairperson","All members","1 member"],
        "correctAnswerIndex": 1,
        "explanation": "Usually three members constitute the quorum for the 5-member body."
    },
    {
        "id": "ch49-l1-q30",
        "question": "The term of members can be terminated by the President for which reason?",
        "options": ["Holding an office of profit.","Insolvency.","Infirmity of body/mind or proven misbehaviour.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "Standard constitutional/statutory grounds for removal apply."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch49-l2-q1",
        "question": "The separate National Commission for Scheduled Tribes (NCST) was recommended to handle which specific focus that differed from SCs?",
        "options": ["Urban employment.","Geographically and culturally distinct problems and different developmental needs of tribes.","Higher education in cities.","Political elections in the center."],
        "correctAnswerIndex": 1,
        "explanation": "Tribes often face isolation and specific land/forest rights issues that vary significantly from the social/atricity issues dominant for SCs."
    },
    {
        "id": "ch49-l2-q2",
        "question": "Assertion (A): The NCST chairperson has the rank of a Union Cabinet Minister.\\nReason (R): This high rank allows the commission to deal effectively with central ministries and state governments.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The status ensures that the commission is taken seriously in the executive hierarchy (Art 338A)."
    },
    {
        "id": "ch49-l2-q3",
        "question": "In 2005, the President specified",
        "options": ["Measures to reduce the salary of tribal leaders.","Measures to be taken to confer ownership rights over minor forest produce to STs living in forests.","Measures to build more malls in tribal areas.","Measures to convert tribal land into industrial zones."],
        "correctAnswerIndex": 1,
        "explanation": "This recognizes the traditional relationship of tribes with the forest."
    },
    {
        "id": "ch49-l2-q4",
        "question": "Which Act",
        "options": ["The Income Tax Act.","The Provisions of the Panchayats (Extension to the Scheduled Areas) Act (PESA), 1996.","The Special Protection Group Act.","The Information Technology Act."],
        "correctAnswerIndex": 1,
        "explanation": "PESA is the bedrock of tribal self-governance in Fifth Schedule areas."
    },
    {
        "id": "ch49-l2-q5",
        "question": "NCST has a function regarding",
        "options": ["To order the displacement of tribes.","To monitor relief and rehabilitation measures for tribal groups displaced by development projects.","To provide the trucks for moving people.","To choose the new location by force."],
        "correctAnswerIndex": 1,
        "explanation": "Safeguarding the welfare of displaced tribal communities is a crucial human rights function of NCST."
    },
    {
        "id": "ch49-l2-q6",
        "question": "Regarding",
        "options": ["To sell minerals to foreign countries.","To safeguard the rights of tribal communities over mineral and water resources as per the law.","To operate the mines.","To hide the location of minerals."],
        "correctAnswerIndex": 1,
        "explanation": "This prevents exploitation of tribal lands by powerful interests."
    },
    {
        "id": "ch49-l2-q7",
        "question": "When the NCST investigates a complaint, it can demand the production of",
        "options": ["Supreme Court.","Civil Court (under Code of Civil Procedure).","Criminal Court.","International Court of Justice."],
        "correctAnswerIndex": 1,
        "explanation": "Article 338A(8) confers specific civil court powers for effective investigation."
    },
    {
        "id": "ch49-l2-q8",
        "question": "Does the NCST handle matters related to the",
        "options": ["No, only Sixth Schedule.","Yes, it monitors safeguards in both Fifth and Sixth Schedule areas across India.","Only for Jharkhand and Chhattisgarh.","Only if the PM directs."],
        "correctAnswerIndex": 1,
        "explanation": "Its jurisdiction spans all of India where ST populations and safeguards exist."
    },
    {
        "id": "ch49-l2-q9",
        "question": "A",
        "options": ["No jurisdiction.","Yes, as the national constitutional commission, it monitors central safeguards even in these states.","Only for education.","Only during national emergency."],
        "correctAnswerIndex": 1,
        "explanation": "Art 338A is a supreme constitutional provision covering the entire territory of India."
    },
    {
        "id": "ch49-l2-q10",
        "question": "The NCSC handles Sc community. The NCST handles ST. If a community is in both lists in different states, which commission handles it?",
        "options": ["They fight over it.","Both Commissions monitor it depending on the specific state category of the community.","UPSC decides.","Supreme Court handles such cases."],
        "correctAnswerIndex": 1,
        "explanation": "Jurisdiction is determined by the legal status (SC or ST) in that particular administrative context."
    },
    {
        "id": "ch49-l2-q11",
        "question": "Can a member of NCST be removed for",
        "options": ["No, only for mental health.","Yes, by the President of India.","Only by the tribal elders.","Only by a resolution in Lok Sabha."],
        "correctAnswerIndex": 1,
        "explanation": "Standard high-office removal procedures apply (Art 338A(3))."
    },
    {
        "id": "ch49-l2-q12",
        "question": "The",
        "options": ["Government must obey the commission","Government must seek the commission","The commission must consult the government.","The commission must consult the public only."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch49-l2-q13",
        "question": "Why is",
        "options": ["It is a traditional tribal practice that requires measures to eliminate the practice in a way that provides alternate livelihoods and preserves land.","It is a modern technological method.","It only happens in Delhi.","It is a type of industrial farming."],
        "correctAnswerIndex": 0,
        "explanation": "The President"
    },
    {
        "id": "ch49-l2-q14",
        "question": "Which of the following describes",
        "options": ["They can sell the entire forest.","They have rights to collect, use and dispose of non-timber forest items like honey, tendu leaves, etc., which NCST monitors.","They can only use the forest for walking.","Only the Governor owns the produce."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch49-l2-q15",
        "question": "Does the NCST interact with the",
        "options": ["No, they are rivals.","Yes, as they both work for ST welfare, data and policy insights are often shared.","Only during elections.","TAC is part of NCST."],
        "correctAnswerIndex": 1,
        "explanation": "Synergy among specialized constitutional/statutory bodies is expected for effective policy."
    },
    {
        "id": "ch49-l2-q16",
        "question": "The 65th Constitutional Amendment was the first to create:",
        "options": ["The separate NCST.","The joint National Commission for SCs and STs.","The Ministry of Tribal Affairs.","The post of Tribal Commissioner."],
        "correctAnswerIndex": 1,
        "explanation": "It upgraded the single officer to a multi-member commission."
    },
    {
        "id": "ch49-l2-q17",
        "question": "A",
        "options": ["The Governor of Jammu and Kashmir.","The President of India.","The Administrator/Lt. Governor of the UT.","The High Court."],
        "correctAnswerIndex": 1,
        "explanation": "Ultimately all reports go to the President, who then routes them (Art 338A(6))."
    },
    {
        "id": "ch49-l2-q18",
        "question": "Which of the following is correct about NCSC vs NCST powers?",
        "options": ["NCSC has more powers.","NCST has more powers.","They have identical powers and procedures under Art 338 and 338A respectively.","NCSC is part of NCST."],
        "correctAnswerIndex": 2,
        "explanation": "Art 338A was modeled exactly on Art 338 to give STs the same level of institutional protection."
    },
    {
        "id": "ch49-l2-q19",
        "question": "The",
        "options": ["Only money should be given.","The community","They should be moved to cities only.","Rehabilitation is not necessary."],
        "correctAnswerIndex": 1,
        "explanation": "Holistic resettlement is required to prevent tribal societal collapse."
    },
    {
        "id": "ch49-l2-q20",
        "question": "Can the NCST commission its own research on tribal languages?",
        "options": ["No, only Census does that.","Yes, to understand and protect cultural safeguards.","Only if the PM allocates extra budget.","Only for Sanskrit."],
        "correctAnswerIndex": 1,
        "explanation": "Broad investigative powers include the ability to baseline the status of various communities."
    },
    {
        "id": "ch49-l2-q21",
        "question": "The",
        "options": ["2003","2004","2005","2010"],
        "correctAnswerIndex": 1,
        "explanation": "The commission was formally constituted in 2004."
    },
    {
        "id": "ch49-l2-q22",
        "question": "Is the NCST required to protect",
        "options": ["No, they are separate.","Yes, they are a high-priority subgroup within the ST category.","Only if they live in islands.","Only for Andaman tribes."],
        "correctAnswerIndex": 1,
        "explanation": "PVTGs are the most marginalized and require the most intensive monitoring."
    },
    {
        "id": "ch49-l2-q23",
        "question": "Which of the following is NOT a duty of NCST?",
        "options": ["To investigate specific complaints with respect to the deprivation of rights of STs.","To monitor the educational progress of ST children.","To declare a new community as",".","To participate in the planning of ST development."],
        "correctAnswerIndex": 2,
        "explanation": "Declaration / modification of the ST list is done by the President/Parliament (Art 342)."
    },
    {
        "id": "ch49-l2-q24",
        "question": "NCST has regional offices. Where might you find one typical office?",
        "options": ["London.","Bhubaneswar (Odisha).","Islamabad.","Tokyo."],
        "correctAnswerIndex": 1,
        "explanation": "Offices are strategically located in states with significant tribal populations like Odisha, MP, etc."
    },
    {
        "id": "ch49-l2-q25",
        "question": "The term",
        "options": ["Article 340.","Article 341.","Article 342.","The Preamble."],
        "correctAnswerIndex": 2,
        "explanation": "Article 342 defines the procedure for specifying Scheduled Tribes."
    },
    {
        "id": "ch49-l2-q26",
        "question": "Can the NCST report be ignored by the Union Cabinet?",
        "options": ["Legally yes (as it is advisory), but politically it must be justified in Parliament (Art 338A(6)).","No, it is binding.","Only if the Supreme Court allows.","Only during a war."],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch49-l2-q27",
        "question": "Which Article provides for the",
        "options": ["Article 338A(1)","Article 338A(3)","Article 342","Article 312"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338A(3) specifies the Presidential warrant."
    },
    {
        "id": "ch49-l2-q28",
        "question": "What is the relationship between the",
        "options": ["They are rivals.","NCST monitors the implementation of forest rights granted by federal/state laws to tribes.","NCST abolished the Act.","The Act abolished NCST."],
        "correctAnswerIndex": 1,
        "explanation": "The Act is a major"
    },
    {
        "id": "ch49-l2-q29",
        "question": "In the NCST, who chooses the",
        "options": ["The Chairperson.","The President (he appoints all members including VC).","The members by vote.","The Tribal Affairs Minister."],
        "correctAnswerIndex": 1,
        "explanation": "All 5 members are Presidential appointees."
    },
    {
        "id": "ch49-l2-q30",
        "question": "The power to",
        "options": ["The commission makes its own laws for the country.","The commission defines how its meetings will be held, how decisions are taken, and how investigations are conducted internally.","The commission can hire foreigners.","The commission can change the age of its members."],
        "correctAnswerIndex": 1,
        "explanation": "Procedural autonomy is crucial for an independent oversight body."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch49-l3-q1",
        "question": "Analyze the impact of the",
        "options": ["Because STs wanted a different building.","Because it recognized the fundamentally different","(Schedules V and VI) and the","(Forest Rights, PESA) that tribes require compared to SCs.","Because the Chairman of NCSC was not talking to ST members.","Because the President wanted to create more posts."],
        "correctAnswerIndex": 1,
        "explanation": "Tribal issues are tied to land, forest, and local self-rule, whereas SC issues are predominantly social/discrimination-based; different frameworks were mandatory for effectiveness."
    },
    {
        "id": "ch49-l3-q2",
        "question": "In the context of the",
        "options": ["NCST can sell the mines.","NCST monitors that the exploitation of minerals by state/private entities does not violate tribal rights to land and that local","are consulted as per PESA/FRA.","NCST only collects data for the CAG.","NCST has no role in mining."],
        "correctAnswerIndex": 1,
        "explanation": "The"
    },
    {
        "id": "ch49-l3-q3",
        "question": "The",
        "options": ["The policy is automatically invalid.","It can be challenged as a breach of","and","principles designed to protect vulnerable groups.","The Commission can arrest the Forest Minister.","Only the Governor can challenge it."],
        "correctAnswerIndex": 1,
        "explanation": "Procedural compliance is a check on executive arbitrariness in a constitutional democracy."
    },
    {
        "id": "ch49-l3-q4",
        "question": "Consider the following statements regarding",
        "options": ["2 only","1 and 2 only","All of the above","None of the above"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 1 is wrong (appointed by President). Statement 3 is wrong (tenure of 3 years fixed by President, not Speaker). Only 2 is correct."
    },
    {
        "id": "ch49-l3-q5",
        "question": "The",
        "options": ["To participate in every Gram Sabha meeting.","To monitor that such consultations are not mere formalities and that tribal interests are protected during",".","To act as the witness for the government.","To pay for the land."],
        "correctAnswerIndex": 1,
        "explanation": "Monitoring the"
    },
    {
        "id": "ch49-l3-q6",
        "question": "Regarding",
        "options": ["The President (Art 338A).","The Governor (by public notification can direct that an Act of Parliament/State Legislature does not apply or applies with modifications). NCST monitors the Governor","Annual Report","The NCST Chairman.","The Local MLA."],
        "correctAnswerIndex": 1,
        "explanation": "Governor is the executive head for Fifth Schedule; NCST is the constitutional watchdog."
    },
    {
        "id": "ch49-l3-q7",
        "question": "Analyze the role of NCST in",
        "options": ["The Sixth Schedule areas have","(ADCs) with legislative and judicial powers; NCST monitors these ADCs","NCST has no power in Sixth Schedule areas.","NCST replaces the District Councils.","NCST only deals with education in these states."],
        "correctAnswerIndex": 0,
        "explanation": "ADCs have high autonomy; NCST serves as a national bridge ensuring they act within the constitutional framework of tribal protection."
    },
    {
        "id": "ch49-l3-q8",
        "question": "The NCST works towards",
        "options": ["Giving everyone a smartphone.","The loss of","and","when tribal hamlets are dispersed into individual urban housing schemes.","Teaching tribes how to trade in the stock market.","Making tribes pay income tax."],
        "correctAnswerIndex": 1,
        "explanation": "Cultural rehabilitation is as important as physical resettlement for STs."
    },
    {
        "id": "ch49-l3-q9",
        "question": "Article 338A(10) mentions",
        "options": ["It has been replaced by the NCST Chairperson/Commission.","It is held by the Prime Minister.","It is a separate officer in the Ministry of External Affairs.","It is a post in the RBI."],
        "correctAnswerIndex": 0,
        "explanation": "Wait. Actually, Art 338A(1) creates the"
    },
    {
        "id": "ch49-l3-q10",
        "question": "Assertion (A): The NCST is a more",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is false but R is true.","A is true but R is false."],
        "correctAnswerIndex": 2,
        "explanation": "Powers (Art 338 vs 338A) are identical. However, the legal architecture for tribes (V/VI schedules, PESA) IS more complex/extensive, but that doesn"
    },
    {
        "id": "ch49-l3-q11",
        "question": "Under Article 338A(5)(e), what does",
        "options": ["NCST calculates the total amount of money required.","NCST advises on the strategy and allocation priorities within the TSP to ensure funds reach the intended beneficiaries.","NCST only audits the TSP after 5 years.","NCST has no role in TSP."],
        "correctAnswerIndex": 1,
        "explanation": "TSP (Special Central Assistance) is the main financial driver for tribal welfare monitored by NCST."
    },
    {
        "id": "ch49-l3-q12",
        "question": "If a State Government denies tribal rights over",
        "options": ["The NCST can issue a binding court order.","The Supreme Court or High Courts via writ jurisdiction (Art 226/32) based on the findings/investigation of the NCST report.","The Gram Sabha only.","The Prime Minister."],
        "correctAnswerIndex": 1,
        "explanation": "NCST acts as the primary fact-finder; the judiciary provides the final enforcement."
    },
    {
        "id": "ch49-l3-q13",
        "question": "The",
        "options": ["Enforce attendance of any person.","Demand production of any document.","Recieve evidence on oath.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "These are the three standard"
    },
    {
        "id": "ch49-l3-q14",
        "question": "A",
        "options": ["Other tribal members.","Non-tribal settlers and corporate entities acquire tribal land illegally or through coerced consent.","The State government only.","Foreigners from other continents."],
        "correctAnswerIndex": 1,
        "explanation": "Land transfer from tribal to non-tribal is the core"
    },
    {
        "id": "ch49-l3-q15",
        "question": "Article 338A(4) gives NCST power to",
        "options": ["Yes.","No, it must work within the framework of the Constitution and the relevant Rules made by the President.","Only during a National Emergency.","Only for the Seventh Schedule."],
        "correctAnswerIndex": 1,
        "explanation": "Autonomy is not"
    },
    {
        "id": "ch49-l3-q16",
        "question": "Analyze the impact of",
        "options": ["Yes, for SCs living in forests.","No, FRA is purely for STs (hence NCST).","Actually, FRA covers","(OTFD) too, making it a point of potential collaboration between commissions.","FRA is only for animals."],
        "correctAnswerIndex": 2,
        "explanation": "Wait. FRA protects both STs and OTFDs (who could be many from OBC/SC/General categories); this creates a multi-commission oversight areas."
    },
    {
        "id": "ch49-l3-q17",
        "question": "Is the",
        "options": ["Yes, as a permanent invitee/member for tribal discussions.","No, only CMs are allowed.","Only if the PM specifically invites him.","Only if he is a former minister."],
        "correctAnswerIndex": 0,
        "explanation": "Effective integration of tribal planning requires participation in apex developmental forums."
    },
    {
        "id": "ch49-l3-q18",
        "question": "The",
        "options": ["Removing all taxes.","Establishing that GST applies uniformly, but Sixth Schedule councils (ADCs) can still levy certain local taxes for their development funds.","Giving all GST to the tribes.","Making tribes pay 100% tax."],
        "correctAnswerIndex": 1,
        "explanation": "Safeguarding the revenue autonomy of ADCs during the GST shift was a major constitutional debate."
    },
    {
        "id": "ch49-l3-q19",
        "question": "Compare Article 342 (Power to specify STs) with Article 338A. Which of the following is correct?",
        "options": ["NCST can declare any caste as a tribe.","The President (after consulting Governor) notifies the list; NCST","The Parliament has no role in the list.","NCST Chairperson can remove a tribe from the list."],
        "correctAnswerIndex": 1,
        "explanation": "Art 342 is the"
    },
    {
        "id": "ch49-l3-q20",
        "question": "The",
        "options": ["The PM.","The President of India.","The Minister of Tribal Affairs.","The Speaker."],
        "correctAnswerIndex": 1,
        "explanation": "It"
    },
    {
        "id": "ch49-l3-q21",
        "question": "How many",
        "options": ["Any number.","Maximum two terms.","Only one term.","Five terms."],
        "correctAnswerIndex": 1,
        "explanation": "The President"
    },
    {
        "id": "ch49-l3-q22",
        "question": "If a",
        "options": ["Yes.","No, it can only investigate and recommend changes to the Governor/State Legislature.","Only if the President supports the veto.","Only in Fifth Schedule areas."],
        "correctAnswerIndex": 1,
        "explanation": "Like NCSC, its power is Persuasive and Monitoring, not Veto."
    },
    {
        "id": "ch49-l3-q23",
        "question": "Analyze the",
        "options": ["It lends money at 0% interest.","It monitors implementation of laws against usury in tribal areas and suggests institutional credit alternatives.","It arrests all money lenders.","It cancels all debts of everyone in India."],
        "correctAnswerIndex": 1,
        "explanation": "Debt bondage is a key form of tribal exploitation monitored by the commission."
    },
    {
        "id": "ch49-l3-q24",
        "question": "The",
        "options": ["The Chairperson.","The President (via his memorandum logic).","The Speaker.","The Prime Minister."],
        "correctAnswerIndex": 1,
        "explanation": "Article 338A(6) mandates the President to cause the report and memorandum to be laid."
    },
    {
        "id": "ch49-l3-q25",
        "question": "",
        "options": ["Tribal land grabbing by large corporations.","Injustice in government recruitment (reservation backlog).","Major atrocities reported in national media.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "The commission proactively uses its power to protect the community."
    },
    {
        "id": "ch49-l3-q26",
        "question": "The 102nd Amendment affected NCSC but did it affect NCST?",
        "options": ["No direct change in Article 338A.","Yes, it made NCST part of NCSC again.","It removed the power to handle OBCs from NCST too.","It abolished the post of Vice-Chairperson in NCST."],
        "correctAnswerIndex": 0,
        "explanation": "Main impact was creating 338B (NCBC) and modifying 338 (NCSC residual powers); NCST remained functionally separate as before."
    },
    {
        "id": "ch49-l3-q27",
        "question": "Analyze the",
        "options": ["He can give orders to the Tribal Minister.","It provides a peer-level protocol for high-level coordination and ensures the commission","It is for a higher salary only.","It is a ceremonial rank."],
        "correctAnswerIndex": 1,
        "explanation": "Protocol weight is essential in Indian bureaucracy for effective oversight."
    },
    {
        "id": "ch49-l3-q28",
        "question": "The",
        "options": ["No.","Yes, as these are","mentioned in the Constitution it must monitor.","Only for Christian tribes.","Only for border districts."],
        "correctAnswerIndex": 1,
        "explanation": "Article 338A covers"
    },
    {
        "id": "ch49-l3-q29",
        "question": "Does NCST provide legal aid to tribes in Supreme Court?",
        "options": ["It doesn","Yes, it has its own team of lawyers for every tribe.","Only for criminal cases.","No, only for education."],
        "correctAnswerIndex": 0,
        "explanation": "Monitoring implementation of safeguards includes legal access."
    },
    {
        "id": "ch49-l3-q30",
        "question": "The",
        "options": ["The Constitution.","The Commission itself (under Art 338A(4) procedure power).","The Supreme Court.","The PM."],
        "correctAnswerIndex": 1,
        "explanation": "Procedural details are determined by the commission using its constitutional autonomy."
    }
];

export const CHAPTER_49_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
