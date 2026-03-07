import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch39-l1-q1",
        "question": "Which Committee, appointed in 1957, recommended the establishment of the scheme of",
        "options": ["Ashok Mehta Committee","Balwant Rai Mehta Committee","G.V.K. Rao Committee","L.M. Singhvi Committee"],
        "correctAnswerIndex": 1,
        "explanation": "The Balwant Rai Mehta Committee (1957) recommended the establishment of the scheme of"
    },
    {
        "id": "ch39-l1-q2",
        "question": "The three tiers of the Panchayati Raj system recommended by the Balwant Rai Mehta Committee were the Gram Panchayat at the village level, Panchayat Samiti at the block level, and the:",
        "options": ["Nyaya Panchayat at the district level","Zila Parishad at the district level","Gram Sabha at the district level","Mandal Panchayat at the district level"],
        "correctAnswerIndex": 1,
        "explanation": "The Balwant Rai Mehta Committee recommended a three-tier Panchayati Raj system: Gram Panchayat at the village level, Panchayat Samiti at the block level, and Zila Parishad at the district level."
    },
    {
        "id": "ch39-l1-q3",
        "question": "Panchayati Raj was first inaugurated in India by Prime Minister Jawaharlal Nehru on October 2, 1959, in which district?",
        "options": ["Nagaur district, Rajasthan","Anantapur district, Andhra Pradesh","Mahendragarh district, Haryana","Salem district, Tamil Nadu"],
        "correctAnswerIndex": 0,
        "explanation": "Rajasthan was the first state to establish Panchayati Raj. The scheme was inaugurated by the prime minister on October 2, 1959, in Nagaur district."
    },
    {
        "id": "ch39-l1-q4",
        "question": "In 1977, the Ashok Mehta Committee on Panchayati Raj recommended replacing the three-tier system with a:",
        "options": ["Single-tier system","Two-tier system","Four-tier system","Five-tier system"],
        "correctAnswerIndex": 1,
        "explanation": "The Ashok Mehta Committee recommended that the three-tier system of Panchayati Raj should be replaced by the two-tier system: Zila Parishad at the district level, and below it, the Mandal Panchayat consisting of a group of villages."
    },
    {
        "id": "ch39-l1-q5",
        "question": "Which committee (1986) primarily recommended that the Panchayati Raj institutions should be constitutionally recognized, protected, and preserved?",
        "options": ["L.M. Singhvi Committee","G.V.K. Rao Committee","Thungon Committee","Gadgil Committee"],
        "correctAnswerIndex": 0,
        "explanation": "The L.M. Singhvi Committee (1986) recommended that the Panchayati Raj institutions should be constitutionally recognized, protected and preserved."
    },
    {
        "id": "ch39-l1-q6",
        "question": "The 73rd Constitutional Amendment Act of 1992 added a new Part to the Constitution entitled",
        "options": ["Part IX","Part IX-A","Part X","Part XI"],
        "correctAnswerIndex": 0,
        "explanation": "The 73rd Amendment Act of 1992 has added a new Part-IX to the Constitution of India."
    },
    {
        "id": "ch39-l1-q7",
        "question": "The 73rd Amendment Act also added a new Schedule to the Constitution granting 29 functional items to the panchayats. Which Schedule is this?",
        "options": ["Tenth Schedule","Eleventh Schedule","Twelfth Schedule","Ninth Schedule"],
        "correctAnswerIndex": 1,
        "explanation": "The Act has also added a new Eleventh Schedule to the Constitution. This schedule contains 29 functional items of the panchayats (Article 243-G)."
    },
    {
        "id": "ch39-l1-q8",
        "question": "The 73rd Amendment Act provides for a",
        "options": ["All the inhabitants of a village.","Persons registered in the electoral rolls relating to a village comprised within the area of Panchayat.","All adult males of a village.","Only the elected members of the Panchayat."],
        "correctAnswerIndex": 1,
        "explanation": "Gram Sabha is a body consisting of persons registered in the electoral rolls of a village comprised within the area of Panchayat at the village level."
    },
    {
        "id": "ch39-l1-q9",
        "question": "The Act brings about a uniform three-tier system of panchayati raj throughout the country. However, a state having a population not exceeding _______ may not constitute panchayats at the intermediate level.",
        "options": ["10 Lakhs","20 Lakhs","50 Lakhs","5 Lakhs"],
        "correctAnswerIndex": 1,
        "explanation": "A state having a population not exceeding 20 lakh may not constitute panchayats at the intermediate level."
    },
    {
        "id": "ch39-l1-q10",
        "question": "According to the 73rd Amendment Act, all the members of panchayats at the village, intermediate, and district levels shall be elected:",
        "options": ["Directly by the people","Indirectly by the Gram Sabha","Nominated by the Governor","Appointed by the District Collector"],
        "correctAnswerIndex": 0,
        "explanation": "All the members of panchayats at the village, intermediate and district levels shall be elected directly by the people."
    },
    {
        "id": "ch39-l1-q11",
        "question": "The chairperson of panchayats at the intermediate and district levels shall be elected:",
        "options": ["Directly by the people","Indirectly—by and from amongst the elected members thereof","By the Gram Sabha","By the local MLA"],
        "correctAnswerIndex": 1,
        "explanation": "The chairperson of panchayats at the intermediate and district levels shall be elected indirectly—by and from amongst the elected members thereof. (Note: Election of chairperson at the village level is determined by the state legislature)."
    },
    {
        "id": "ch39-l1-q12",
        "question": "The Act provides for the reservation of seats for Scheduled Castes (SCs) and Scheduled Tribes (STs) in every panchayat in proportion to their population. This reservation relates to:",
        "options": ["Membership seats only","Chairperson offices only","Both membership seats and offices of chairpersons","Neither, as it was abolished by a later amendment"],
        "correctAnswerIndex": 2,
        "explanation": "The act provides for the reservation of seats for scheduled castes and scheduled tribes in every panchayat... Further, the state legislature shall provide for the reservation of offices of chairperson in the panchayat at the village or any other level for the SCs and STs."
    },
    {
        "id": "ch39-l1-q13",
        "question": "What is the minimum proportion of total number of seats to be reserved for women (including the number of seats reserved for women belonging to SCs and STs) in the panchayats?",
        "options": ["One-fourth (25%)","One-third (33%)","One-half (50%)","One-fifth (20%)"],
        "correctAnswerIndex": 1,
        "explanation": "The act provides for the reservation of not less than one-third of the total number of seats for women (including the number of seats reserved for women belonging the SCs and STs)."
    },
    {
        "id": "ch39-l1-q14",
        "question": "The 73rd Amendment Act provides for a regular term of office to the panchayat at every level. The term is fixed at:",
        "options": ["4 years","5 years","6 years","Indefinite"],
        "correctAnswerIndex": 1,
        "explanation": "The act provides for a five-year term of office to the panchayat at every level."
    },
    {
        "id": "ch39-l1-q15",
        "question": "If a panchayat is dissolved before the completion of its five-year term, fresh elections to constitute the new panchayat must be completed within:",
        "options": ["1 month from the date of dissolution","3 months from the date of dissolution","6 months from the date of its dissolution","1 year from the date of dissolution"],
        "correctAnswerIndex": 2,
        "explanation": "Elections must be completed before the expiry of a period of six months from the date of its dissolution."
    },
    {
        "id": "ch39-l1-q16",
        "question": "What is the minimum age prescribed for a person to be qualified to be chosen as a member of a panchayat?",
        "options": ["18 years","21 years","25 years","30 years"],
        "correctAnswerIndex": 1,
        "explanation": "No person shall be disqualified on the ground that he is less than 25 years of age if he has attained the age of 21 years (i.e., minimum age is 21 years)."
    },
    {
        "id": "ch39-l1-q17",
        "question": "The superintendence, direction, and control of the preparation of electoral rolls and the conduct of all elections to the panchayats are vested in the:",
        "options": ["Election Commission of India","State Election Commission","District Collector","Governor"],
        "correctAnswerIndex": 1,
        "explanation": "The superintendence, direction and control of the preparation of electoral rolls and the conduct of all elections to the panchayats shall be vested in the state election commission."
    },
    {
        "id": "ch39-l1-q18",
        "question": "The State Election Commissioner is appointed by the:",
        "options": ["President of India","Governor of the State","Chief Minister of the State","Chief Election Commissioner of India"],
        "correctAnswerIndex": 1,
        "explanation": "The state election commission consists of a state election commissioner to be appointed by the governor."
    },
    {
        "id": "ch39-l1-q19",
        "question": "To review the financial position of the panchayats and make recommendations regarding the distribution of taxes, the Governor forms a State Finance Commission every:",
        "options": ["3 years","5 years","10 years","2 years"],
        "correctAnswerIndex": 1,
        "explanation": "The governor of a state shall, after every five years, constitute a finance commission to review the financial position of the panchayats."
    },
    {
        "id": "ch39-l1-q20",
        "question": "Which Article of the Constitution deals specifically with the",
        "options": ["Article 243-I","Article 243-J","Article 243-K","Article 243-H"],
        "correctAnswerIndex": 1,
        "explanation": "Article 243-J relates to the Audit of accounts of panchayats."
    },
    {
        "id": "ch39-l1-q21",
        "question": "The 73rd Amendment Act classifies its provisions into",
        "options": ["Giving voting rights to MPs and MLAs in the Panchayats.","Providing reservation for Backward Classes (OBCs) in Panchayats.","Organization of Gram Sabha in a village or group of villages.","Granting financial powers (levying taxes) to the Panchayats."],
        "correctAnswerIndex": 2,
        "explanation": "The organization of Gram Sabha in a village or group of villages is a compulsory (mandatory) provision of the 73rd Amendment Act."
    },
    {
        "id": "ch39-l1-q22",
        "question": "Providing reservation of seats (both members and chairpersons) for backward classes (OBCs) in panchayats is a:",
        "options": ["Compulsory provision of the 73rd Amendment","Voluntary provision for the State Legislature to decide","Provision explicitly prohibited by the Constitution","Mandate of the Central Government"],
        "correctAnswerIndex": 1,
        "explanation": "Providing reservation of seats (both members and chairpersons) for backward classes in panchayats at any level is a voluntary (discretionary) provision, left to the state legislatures."
    },
    {
        "id": "ch39-l1-q23",
        "question": "Giving representation to Members of Parliament (MPs) and Members of State Legislature (MLAs) in the panchayats at different levels is considered a:",
        "options": ["Voluntary provision","Compulsory provision","Judicial mandate","Constitutional violation"],
        "correctAnswerIndex": 0,
        "explanation": "Giving representation to MPs and MLAs in the panchayats at different levels falling within their constituencies is a voluntary provision."
    },
    {
        "id": "ch39-l1-q24",
        "question": "The 11th Schedule of the Constitution, which specifies the functional scope of Panchayats, contains how many items?",
        "options": ["18","29","22","31"],
        "correctAnswerIndex": 1,
        "explanation": "The 11th Schedule contains 29 functional items placed within the purview of panchayats."
    },
    {
        "id": "ch39-l1-q25",
        "question": "The provisions of the 73rd Amendment Act do NOT apply to certain states under Article 243M. Which of the following groups of states are completely exempted?",
        "options": ["Nagaland, Meghalaya, and Mizoram","Rajasthan and Gujarat","Uttar Pradesh and Bihar","Kerala and Tamil Nadu"],
        "correctAnswerIndex": 0,
        "explanation": "The act does not apply to the states of Nagaland, Meghalaya and Mizoram and certain other specified areas."
    },
    {
        "id": "ch39-l1-q26",
        "question": "Which Directive Principle of State Policy (DPSP) directs the state to organize village panchayats and endow them with necessary powers and authority?",
        "options": ["Article 39","Article 40","Article 44","Article 50"],
        "correctAnswerIndex": 1,
        "explanation": "Article 40 (a DPSP) states that the State shall take steps to organize village panchayats and endow them with such powers and authority as may be necessary to enable them to function as units of self-government."
    },
    {
        "id": "ch39-l1-q27",
        "question": "Who is historically known as the",
        "options": ["Lord Mayo","Lord Dalhousie","Lord Ripon","Lord Curzon"],
        "correctAnswerIndex": 2,
        "explanation": "Lord Ripon"
    },
    {
        "id": "ch39-l1-q28",
        "question": "What happens if a Panchayat is dissolved when the remainder of its term is less than six months?",
        "options": ["An election must still be held within 6 months.","The Governor runs the Panchayat directly.","It shall not be necessary to hold any election for constituting the new panchayat for such period.","The existing Sarpanch gets an automatic extension of 2 years."],
        "correctAnswerIndex": 2,
        "explanation": "The act states that where the remainder of the period (for which the dissolved panchayat would have continued) is less than six months, it shall not be necessary to hold any election for constituting the new panchayat for such period."
    },
    {
        "id": "ch39-l1-q29",
        "question": "The fundamental philosophy of Panchayati Raj is best described by the term:",
        "options": ["Administrative Centralization","Democratic Decentralisation","Authoritarian Localism","Feudal Governance"],
        "correctAnswerIndex": 1,
        "explanation": "The scheme of Panchayati Raj is fundamentally based on the concept of"
    },
    {
        "id": "ch39-l1-q30",
        "question": "In the context of the Panchayati Raj, what does",
        "options": ["Panchayats Enforcement in State Areas","Provisions of the Panchayats (Extension to Scheduled Areas) Act","Panchayat Empowerment and Survey Act","Primary Education in Scheduled Areas"],
        "correctAnswerIndex": 1,
        "explanation": "PESA stands for"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch39-l2-q1",
        "question": "Which of the following is considered a",
        "options": ["Fixing the tenure of Panchayats strictly at five years.","Making the Gram Sabha the foundation of the system.","Granting financial powers to Panchayats to levy, collect, and appropriate taxes.","Reserving one-third of seats for women at all levels."],
        "correctAnswerIndex": 2,
        "explanation": "Granting financial powers, devloping powers for economic development, and providing reservations for backward classes are voluntary provisions. Tenure, Gram Sabha, and women"
    },
    {
        "id": "ch39-l2-q2",
        "question": "The reservation of seats for Scheduled Castes (SCs) and Scheduled Tribes (STs) in membership of the Panchayat is mandatory. What is the constitutional standing regarding the reservation of the OFFICE of Chairperson for SCs/STs?",
        "options": ["It is also mandatory, in proportion to their population in the state.","It is voluntary, completely left to the discretion of the State Legislature.","It is mandatory only at the Village level, but voluntary at higher levels.","There is no provision for reserving the office of Chairperson."],
        "correctAnswerIndex": 0,
        "explanation": "The state legislature MUST provide for the reservation of offices of chairperson in the panchayat at the village or any other level for the SCs and STs... (Compulsory provision)."
    },
    {
        "id": "ch39-l2-q3",
        "question": "If a State Legislature decides to provide reservation for Other Backward Classes (OBCs) in Panchayat elections, what is the legal premise?",
        "options": ["It is exercising a","mandated by a 1995 Supreme Court ruling.","It is acting unconstitutionally, as Panchayats only allow SC/ST and Women reservations.","It requires prior approval from the President of India.","It is exercising a","under the 73rd Amendment Act."],
        "correctAnswerIndex": 3,
        "explanation": "The act authorizes the legislature of a state to make any provision for reservation of seats in any panchayat or offices of chairperson... in favor of backward classes. This is widely considered a voluntary provision."
    },
    {
        "id": "ch39-l2-q4",
        "question": "To ensure the independence of local elections, the State Election Commissioner (SEC) enjoys the same security of tenure as a:",
        "options": ["Judge of a High Court","Governor of a State","Chief Minister","District Sessions Judge"],
        "correctAnswerIndex": 0,
        "explanation": "The State Election Commissioner shall not be removed from his office except in like manner and on the like grounds as a Judge of a High Court."
    },
    {
        "id": "ch39-l2-q5",
        "question": "Can the State Election Commission",
        "options": ["Yes, anytime if a candidate suspects foul play.","No, Article 243-O strictly bars the interference of courts in electoral matters of Panchayats (like delimitation or seat allotment).","Only with the special permission of the Governor.","Only in the Supreme Court under Article 32."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243-O: Bar to interference by courts in electoral matters. The validity of any law relating to the delimitation of constituencies... shall not be called in question in any court."
    },
    {
        "id": "ch39-l2-q6",
        "question": "The State Finance Commission (SFC) prepares a comprehensive report regarding the distribution of net proceeds of taxes between the State and the Panchayats. Who lays this report before the State Legislature?",
        "options": ["The Chief Minister","The Governor","The Speaker of the Assembly","The State Finance Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The governor shall cause every recommendation made by the commission... to be laid before the legislature of the state."
    },
    {
        "id": "ch39-l2-q7",
        "question": "The 73rd Amendment initially did not apply to the",
        "options": ["The Forest Rights Act, 2006","The Tribal Self-Rule Act, 1999","The Scheduled Areas Municipalities Act","The PESA Act, 1996"],
        "correctAnswerIndex": 3,
        "explanation": "PESA (Provisions of the Panchayats (Extension to the Scheduled Areas) Act, 1996) was enacted to extend the provisions of Part IX to Scheduled Areas with specific tribal-centric exceptions and modifications."
    },
    {
        "id": "ch39-l2-q8",
        "question": "Under the specific provisions of the PESA Act 1996, what is a mandatory prerequisite before the state government can acquire land in Scheduled Areas for development projects?",
        "options": ["Approval of the District Collector heavily endorsed by a local MLA.","Prior consultation solely with the Gram Panchayat (the elected body).","Prior consultation with the Gram Sabha or the Panchayats at the appropriate level.","A public referendum organized by the Election Commission."],
        "correctAnswerIndex": 2,
        "explanation": "Under PESA, the Gram Sabha or the Panchayats at the appropriate level shall be consulted before making the acquisition of land in the Scheduled Areas for development projects."
    },
    {
        "id": "ch39-l2-q9",
        "question": "Under the PESA Act, who has been granted the",
        "options": ["The State Forest Department","Private contractors licensed by the State","The District Magistrate","The Gram Sabha / Panchayats at the appropriate level"],
        "correctAnswerIndex": 3,
        "explanation": "A landmark feature of PESA is granting ownership of minor forest produce to Panchayats at the appropriate level and the Gram Sabha."
    },
    {
        "id": "ch39-l2-q10",
        "question": "What is the role of the",
        "options": ["It has no role; cultural matters are decided by the State Ministry of Culture.","It is restricted to organizing annual cultural festivals.","Every Gram Sabha is competent to safeguard and preserve the traditions and customs of the people, their cultural identity, community resources, and the customary mode of dispute resolution.","It must enforce modern secular laws over tribal customs in all disputes."],
        "correctAnswerIndex": 2,
        "explanation": "PESA explicitly empowers the Gram Sabha to safeguard and preserve the traditions and customs, cultural identity, and community resources of the tribal people."
    },
    {
        "id": "ch39-l2-q11",
        "question": "While a 3-tier structure is standard, states with a population below 20 lakhs are exempted from forming the intermediate level. Which of the following states/UTs would NOT be required to have an intermediate panchayat?",
        "options": ["Uttar Pradesh","Maharashtra","Goa","Madhya Pradesh"],
        "correctAnswerIndex": 2,
        "explanation": "Goa has a population of around 15 Lakhs (well under the 20 Lakhs threshold), meaning it is not strictly required by the 73rd Amendment to constitute the intermediate (block) tier."
    },
    {
        "id": "ch39-l2-q12",
        "question": "Regarding the",
        "options": ["Yes, if the ruling party nominates them and the Governor approves.","No, the Chairperson must strictly be elected by and from amongst the already elected members of that Panchayat.","Only if they are a sitting MLA or MP.","Only if they win a specific","held a month later."],
        "correctAnswerIndex": 1,
        "explanation": "The act is clear: the chairperson of panchayats at the intermediate and district levels shall be elected indirectly—by and from amongst the elected members thereof. You cannot be a chairperson without first being an elected member."
    },
    {
        "id": "ch39-l2-q13",
        "question": "The 11th Schedule transfers 29 functional items to the Panchayats. Which of the following represents an item famously NOT in the 11th Schedule (but rather belongs to Municipalities in the 12th)?",
        "options": ["Agriculture, including agricultural extension.","Minor irrigation, water management, and watershed development.","Fire Services.","Poverty alleviation programs."],
        "correctAnswerIndex": 2,
        "explanation": "Fire services, urban planning, and regulation of land use are urban functions listed in the 12th Schedule (Municipalities), not the 11th Schedule (Panchayats)."
    },
    {
        "id": "ch39-l2-q14",
        "question": "A Gram Panchayat completes 4 years and 8 months of its 5-year tenure before being dissolved by the state government for misconduct. What happens regarding the election of the new Panchayat?",
        "options": ["A fresh election must be held immediately within 1 month.","Since the remainder of the term is less than six months, no mid-term election is constitutionally required for that short period.","The Governor appoints a temporary administrator until the 5 years are up.","The former Sarpanch is allowed to continue as a caretaker."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243E: Where the remainder of the period for which the dissolved panchayat would have continued is less than six months, it shall not be necessary to hold any election under this clause for constituting the panchayat for such period."
    },
    {
        "id": "ch39-l2-q15",
        "question": "If a Panchayat is dissolved after just 2 years in office, and a new Panchayat is elected, how long will this newly elected Panchayat serve?",
        "options": ["A full fresh term of 5 years.","Only for the remainder of the original 5-year period (i.e., 3 years).","Until the next national Lok Sabha elections are held.","A rigid term of exactly 2 years."],
        "correctAnswerIndex": 1,
        "explanation": "A panchayat constituted upon the dissolution of a panchayat before the expiration of its duration shall continue only for the remainder of the period for which the dissolved panchayat would have continued."
    },
    {
        "id": "ch39-l2-q16",
        "question": "Conceptually, which of the following terms best describes the constitutional nature of the",
        "options": ["An executive body that implements projects and signs checks.","A deliberative body representing","at the village level, passing audits and sanctioning broad plans.","A localized judicial tribunal for criminal trials.","A sub-committee of the State Legislative Assembly."],
        "correctAnswerIndex": 1,
        "explanation": "The Gram Sabha is an incarnation of direct democracy. Unlike the elected Panchayat (which is an executive/representative body), the Gram Sabha is a deliberative assembly of all voters that oversees the Panchayat."
    },
    {
        "id": "ch39-l2-q17",
        "question": "Assertion (A): It is widely recognized that the 73rd Amendment transformed the Panchayati Raj Institutions (PRIs) into completely independent, financially self-reliant entities.\\nReason (R): State Finance Commissions have massively increased the direct tax collection powers of rural panchayats, eliminating their need for state grants.\\nSelect the correct answer:",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","Both are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both A and R are fundamentally FALSE in reality. PRIs suffer from severe financial weakness (a well-documented critique). Their own tax collection is abysmal, and they heavily depend on"
    },
    {
        "id": "ch39-l2-q18",
        "question": "The",
        "options": ["The 73rd Amendment Act (Part IX relates to Panchayats).","The 74th Amendment Act (Part IX-A relates to Municipalities).","The NITI Aayog resolution.","The PESA Act."],
        "correctAnswerIndex": 1,
        "explanation": "Though it consolidates plans from both rural Panchayats and urban Municipalities, the core Article mandating the District Planning Committee (Article 243ZD) was added via the 74th Amendment Act (Part IX-A)."
    },
    {
        "id": "ch39-l2-q19",
        "question": "What is the overarching conceptual objective behind designating certain provisions of the 73rd Amendment as",
        "options": ["To strip State Governments of all taxation powers.","To ensure a rigid uniformity in the basic structural framework of Panchayati Raj across all states, preventing states from creating weak, unrepresentative bodies.","To strictly follow the dictates of the World Bank for rural funding.","To increase the electoral prospects of national political parties over regional ones."],
        "correctAnswerIndex": 1,
        "explanation": "Compulsory provisions (like 5-year tenure, SEC, State Finance Commission, Gram Sabha) establish a non-negotiable, uniform democratic baseline across India, protecting local bodies from the whims of state politics."
    },
    {
        "id": "ch39-l2-q20",
        "question": "A 23-year-old popular local youth wins a Gram Panchayat election. A rival petitions for their disqualification, arguing that the minimum age to contest state assembly elections is 25. What is the legal outcome?",
        "options": ["The youth is disqualified; Panchayat rules strictly mirror State Assembly rules.","The youth is NOT disqualified because Article 243F explicitly lowers the qualifying age for Panchayats to 21 years.","The youth can hold the seat but cannot vote on financial matters until age 25.","Only the District Collector can grant a special age waiver."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243F ensures greater youth participation by declaring:"
    },
    {
        "id": "ch39-l2-q21",
        "question": "The Balwant Rai Mehta Committee suggested that the",
        "options": ["An executive body with massive independent taxation powers.","An advisory, coordinating, and supervisory body rather than an executive one.","A judicial body replacing the District Sessions Court.","A puppet body entirely manned by nominated Central Government officers."],
        "correctAnswerIndex": 1,
        "explanation": "Balwant Rai Mehta envisioned the Panchayat Samiti (block level) as the primary executive body, while the Zila Parishad was to be an advisory, coordinating and supervisory body, typically chaired by the District Collector (as per his 1957 vision)."
    },
    {
        "id": "ch39-l2-q22",
        "question": "Regarding women",
        "options": ["Kerala","Bihar (in 2006)","Rajasthan","Gujarat"],
        "correctAnswerIndex": 1,
        "explanation": "Bihar became the first state in India (under the Bihar Panchayati Raj Act, 2006) to provide 50% reservation for women in Panchayati Raj Institutions. Today, many states have followed suit."
    },
    {
        "id": "ch39-l2-q23",
        "question": "Under the provisions of the PESA Act, 1996, the power to grant",
        "options": ["Union Ministry of Mines","Forest Department","Gram Sabha or the Panchayats at the appropriate level","Tribal Advisory Council only"],
        "correctAnswerIndex": 2,
        "explanation": "A key economic empowerment feature of PESA is that the prior recommendation of the Gram Sabha or the Panchayats at the appropriate level is mandatory for granting prospecting licenses/mining leases for minor minerals."
    },
    {
        "id": "ch39-l2-q24",
        "question": "Which of the following bodies was NOT constitutionally mandated by the 73rd Amendment Act, but was highly recommended by earlier committees (like Ashok Mehta) to settle rural disputes?",
        "options": ["Gram Panchayat","Nyaya Panchayat","Panchayat Samiti","Zila Parishad"],
        "correctAnswerIndex": 1,
        "explanation": "The Ashok Mehta Committee heavily recommended keeping"
    },
    {
        "id": "ch39-l2-q25",
        "question": "Under Article 243G, state legislatures may endow Panchayats with powers to prepare plans for:",
        "options": ["National defense and border security.","Economic development and social justice.","Regulation of aviation and railways.","Foreign direct investment guidelines."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243G: The state legislature may endow the panchayats with such powers and authority... with respect to the preparation of plans for economic development and social justice."
    },
    {
        "id": "ch39-l2-q26",
        "question": "If a Member of the Legislative Assembly (MLA) wants to vote in the meetings of a Panchayat Samiti within their constituency, is this right guaranteed by the Constitution?",
        "options": ["Yes, it is a compulsory provision ensuring legislative oversight.","No, it is a",". The state legislature must pass a specific law granting them this representation and voting right.","Yes, but they are forbidden from voting on financial matters.","No, MLAs are strictly forbidden from participating in PRIs to prevent political overshadowing."],
        "correctAnswerIndex": 1,
        "explanation": "Representation of MPs and MLAs in panchayats varying levels, including their voting rights, is explicitly listed as a"
    },
    {
        "id": "ch39-l2-q27",
        "question": "What is the defining characteristic of the",
        "options": ["It manages the finances of the village.","It consists of exactly 5 to 15 elected members.","It is the permanent, unelected foundation comprising all registered voters of the village, whereas the Panchayat is the elected executive committee for a defined term.","It operates exclusively at the block (intermediate) level."],
        "correctAnswerIndex": 2,
        "explanation": "The Gram Panchayat is the elected executive body with a 5-year tenure. The Gram Sabha is the permanent deliberative body comprising the entire electorate of the village."
    },
    {
        "id": "ch39-l2-q28",
        "question": "Assertion (A): The 73rd Amendment Act applies uniformly across the entirety of India without exception.\\nReason (R): The Constitution strictly prohibits any deviation in democratic structures to ensure equality.\\nSelect the correct answer:",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","Both are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both statements are fundamentally false. Article 243M specifically exempts certain states (Nagaland, Meghalaya, Mizoram) and"
    },
    {
        "id": "ch39-l2-q29",
        "question": "The L.M. Singhvi Committee (1986) suggested that",
        "options": ["National Green Tribunal.","Gram Munsif Tribunal.","Village Courts and Judicial Tribunals for handling controversies regarding elections, dissolutions, and PRI matters.","Administrative Service Tribunal."],
        "correctAnswerIndex": 2,
        "explanation": "A key recommendation of the LM Singhvi Committee (alongside constitutional recognition) was the establishment of judicial tribunals in each state to adjudicate controversies about elections, dissolutions, and functioning of Panchayati Raj institutions."
    },
    {
        "id": "ch39-l2-q30",
        "question": "Regarding the",
        "options": ["Yes, the CAG is constitutionally mandated to audit every single Gram Panchayat.","No, Article 243-J states that the","may make provisions with respect to the maintenance of accounts and auditing of such accounts. It does not mandate direct CAG auditing.","Only Panchayats receiving more than ₹10 Crores annually are audited by CAG.","Panchayats cannot be audited to guarantee financial autonomy."],
        "correctAnswerIndex": 1,
        "explanation": "While the CAG often audits the higher tiers or runs sample audits, the constitutional onus is on the State Legislature (Article 243J) to design the audit mechanism for PRIs, which often relies on Local Fund Audit departments of the state."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch39-l3-q1",
        "question": "In 2024-25, several states have moved to notify",
        "options": ["Granting prospecting licenses or mining leases for minor minerals in Scheduled Areas.","Appointing the District Collector in Scheduled Areas.","Deciding the curriculum of local government schools in the block.","Deploying Central Armed Police Forces (CAPF) within the district."],
        "correctAnswerIndex": 0,
        "explanation": "PESA specifically mandates that the prior recommendation of the Gram Sabha/Panchayats is required for granting prospecting licenses, mining leases, or concessions for the exploitation of minor minerals by auction."
    },
    {
        "id": "ch39-l3-q2",
        "question": "Does the landmark PESA Act (1996) apply to the",
        "options": ["Yes, PESA explicitly covers all constitutional tribal areas for uniformity.","No. PESA applies exclusively to the",". The Sixth Schedule areas are governed by their own distinct Autonomous District Councils (ADCs).","Yes, but only if the respective State Governors issue a notification.","It applies only to forest management, not political elections."],
        "correctAnswerIndex": 1,
        "explanation": "The title is"
    },
    {
        "id": "ch39-l3-q3",
        "question": "Under PESA, the Gram Sabha is endowed with the power to manage",
        "options": ["The state law prevails as","and","are strictly State Subjects.","The state legislature has exactly one year to amend its laws to bring them in consonance with PESA; otherwise, the conflicting provisions of the state law become invalid in Scheduled Areas.","The matter must be referred to the Supreme Court for arbitration.","The Governor must decide on a case-by-case basis."],
        "correctAnswerIndex": 1,
        "explanation": "PESA mandated that any provision of any law relating to Panchayats in force in the Scheduled Areas immediately before the commencement of this Act, which is inconsistent with the provisions of this Act, shall continue to be in force until amended or repealed... or until the expiration of one year from the date of such commencement."
    },
    {
        "id": "ch39-l3-q4",
        "question": "The",
        "options": ["It strips Panchayats of land management and hands it to the Central Revenue Department.","It helps Panchayats to collect local property taxes more effectively, thereby boosting their","(OSR), while reducing land-related disputes before the Gram Sabha.","It forces Panchayats to privatize all common village lands.","It restricts the Gram Sabha from acquiring any private land for public projects."],
        "correctAnswerIndex": 1,
        "explanation": "SVAMITVA aims to establish clear ownership of property in rural inhabited (Abadi) areas. Clear titles allow villagers to use property as financial collateral and empower Gram Panchayats to systematically assess and collect property tax, strengthening their dismal OSR."
    },
    {
        "id": "ch39-l3-q5",
        "question": "The Ministry of Panchayati Raj operates the",
        "options": ["Digitize the casting of votes in all Sarpanch elections to prevent EVM hacking.","Provide a unified, single-window platform for planning, accounting, and monitoring of Panchayat work, significantly promoting transparency and curbing corruption.","Completely replace physical Gram Sabha meetings with virtual video calls.","Allow the Central Government to directly bypass the State and disburse salaries to village secretaries."],
        "correctAnswerIndex": 1,
        "explanation": "e-Gram Swaraj is a simplified work-based accounting application addressing the planning, tracking, costing, and accounting needs of PRIs, ensuring real-time visibility into the implementation of Panchayat Development Plans (GPDP)."
    },
    {
        "id": "ch39-l3-q6",
        "question": "The 15th Finance Commission (XV-FC) has drastically shaped local governance financing by recommending massive",
        "options": ["Salaries and pensions of elected Panchayat members to ensure independence.","Basic services like sanitation, drinking water supply, and rainwater harvesting / water recycling.","Political campaigning awareness programs.","Building high-speed optical fiber links, transferring the telecom burden to villages."],
        "correctAnswerIndex": 1,
        "explanation": "The 15th FC stipulated that 60% of the grants to rural local bodies should be tied to supporting fundamental national priorities: (a) sanitation and maintenance of ODF status, and (b) supply of drinking water, rainwater harvesting, and water recycling."
    },
    {
        "id": "ch39-l3-q7",
        "question": "A chronic, structural failure of the 73rd Amendment is the persistently low",
        "options": ["Grants-in-aid received from the State Finance Commission.","The proportionate share in the State","Taxes assessed on local village buildings, tolls on Panchayat-built roads, and fees collected for allocating spots in the village market.","Funds received directly from the World Bank for the National Rural Livelihood Mission."],
        "correctAnswerIndex": 2,
        "explanation": "OSR (Own Source Revenue) refers to the money a local body raises itself using its own taxation/fee-levying powers—such as property/house tax, lighting tax, toll tax, or user charges for markets and water supply."
    },
    {
        "id": "ch39-l3-q8",
        "question": "To combat the pervasive and deeply entrenched",
        "options": ["Abolish women","Strictly ban the male relatives of elected women leaders from attending official PRI meetings, sitting in the Sarpanch","Legally allow husbands to act as","with a small salary.","Increase the reservation quota to 75% to overwhelm the patriarchal system."],
        "correctAnswerIndex": 1,
        "explanation": "To enforce the spirit of the 73rd Amendment, courts and state administrations (like in Punjab, Haryana, MP) have issued stringent orders threatening suspension or disqualification if the"
    },
    {
        "id": "ch39-l3-q9",
        "question": "If a sitting State Election Commissioner (SEC) is perceived to be heavily biased in scheduling Panchayat elections to favor the ruling State Government, what is the constitutional path to forcibly remove them?",
        "options": ["The Governor can instantly dismiss them via an executive order if the cabinet advises so.","They can be removed solely in the same manner as a High Court Judge (requiring a difficult parliamentary impeachment-like process), protecting them from state executive retribution.","The original appointing authority (the Chief Minister) can recall them.","The Supreme Court can directly fire them via a suo-motu writ."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243K ensures the independence of the SEC by stating clearly that the SEC"
    },
    {
        "id": "ch39-l3-q10",
        "question": "Article 243G forms the functional anchor of Panchayats. It enables state legislatures to endow PRIs with such powers and authority as may be necessary to function as institutions of self-government, specifically assigning them the responsibility of preparing plans for:",
        "options": ["State-level law enforcement and high-court jurisdiction.","Economic development and social justice.","Defense of the village against international incursions.","Macro-economic stability and monetary policy."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243G explicitly mentions"
    },
    {
        "id": "ch39-l3-q11",
        "question": "Assertion (A): The 73rd Amendment Act is historically monumental because it introduced the formal concept of",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is false, but R is true.","Both A and R are false."],
        "correctAnswerIndex": 0,
        "explanation": "The Gram Sabha embodies direct democracy as the entire electorate directly participates in decision-making, planning, and auditing, unlike the elected Gram Panchayat which is a representative (indirect) democracy model."
    },
    {
        "id": "ch39-l3-q12",
        "question": "Assertion (A): Despite being granted constitutional status by Part IX, Panchayats are not completely sovereign, independent bodies and fundamentally function under the overarching supervision and control of the State Government.\\nReason (R): The State Government retains enormous discretionary power to devolve funds, dissolve a malfunctioning Panchayat, and dictate the audit procedures for Panchayat accounts.\\nSelect the correct answer:",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","Both are false."],
        "correctAnswerIndex": 0,
        "explanation": "Local government remains a State Subject (Entry 5, State List). The 73rd Amendment created a uniform framework, but the actual devolution of the 3 Fs (Funds, Functions, Functionaries) remains entirely dependent on the political will of the State Government."
    },
    {
        "id": "ch39-l3-q13",
        "question": "Are",
        "options": ["Yes, Article 243N mandates the creation of Nyaya Panchayats in every village.","No. While strongly recommended by older committees (like Ashok Mehta and L.M. Singhvi), the 73rd Amendment is completely silent on Nyaya Panchayats, leaving their creation entirely to the discretion of State Legislatures under their own separate Acts.","Yes, but they are only mandated in the 5th Schedule Areas under PESA.","No, their creation is outlawed by the Supreme Court to protect the formal judicial hierarchy."],
        "correctAnswerIndex": 1,
        "explanation": "The 73rd Amendment deals with developmental, executive"
    },
    {
        "id": "ch39-l3-q14",
        "question": "The",
        "options": ["100% of its members must be nominated IAS officers to ensure technical planning expertise.","At least four-fifths (80%) of its members must be elected by, and from amongst, the already elected members of the Zila Parishad and Municipalities in the district.","Fifty percent are elected, and fifty percent are nominated by the Governor.","It is headed by the Chief Minister exclusively."],
        "correctAnswerIndex": 1,
        "explanation": "To ensure the DPC represents the democratic will rather than bureaucratic dominance, the Constitution dictates that at least four-fifths (80%) of its members must be elected representatives from the Zila Parishad and Municipalities."
    },
    {
        "id": "ch39-l3-q15",
        "question": "Consider the phenomenon of bureaucratic overlap in rural development. In the Zila Parishad (District level), who generally acts as the Chief Executive Officer (CEO) executing the decisions of the elected body?",
        "options": ["The elected Chairperson of the Zila Parishad acts dual-hatted as CEO.","A senior bureaucrat, often an IAS officer, appointed by the State Government acts as the CEO to oversee the administrative machinery.","A judicial officer appointed by the High Court.","The local Member of Parliament (MP)."],
        "correctAnswerIndex": 1,
        "explanation": "While the Zila Parishad is headed by an elected Chairperson (Adhyaksha), the administrative control and execution of plans are managed by a state-appointed bureaucrat, typically an IAS officer holding the post of CEO/DDC. This often leads to friction between the elected representative and the executive officer."
    },
    {
        "id": "ch39-l3-q16",
        "question": "The",
        "options": ["The Gram Sabha has no role; the GPDP is prepared by the NITI Aayog.","The Gram Sabha","The GPDP must essentially be prepared through a participatory process involving the Gram Sabha, and it is the Gram Sabha that finally approves the plan.","It must submit the plan to the Supreme Court for legal vetting."],
        "correctAnswerIndex": 2,
        "explanation": "The core philosophy of GPDP is participatory planning. The plan is formulated based on the needs articulated in Gram Sabha meetings, and the final GPDP must invariably be approved by a resolution of the Gram Sabha."
    },
    {
        "id": "ch39-l3-q17",
        "question": "If rural local bodies are failing critically because State Governments refuse to transfer sufficient funds or functions (the",
        "options": ["Yes, voluntary provisions become mandatory after 10 years of the Amendment passing.","No. The Supreme Court cannot issue a writ of Mandamus compelling a State Legislature to exercise its discretionary (voluntary) powers regarding devolution under Article 243G.","Yes, if the Gram Sabha passes a unanimous resolution to sue the State.","Only the President can file such a suit on behalf of the Panchayats."],
        "correctAnswerIndex": 1,
        "explanation": "As established in several cases (like UP Gram Panchayat case), courts cannot issue a writ of Mandamus to state legislatures compelling them to enact laws devolving powers under Article 243G, because the Constitution explicitly left it to the"
    },
    {
        "id": "ch39-l3-q18",
        "question": "Which Constitutional Amendment extended the reservation of seats for Scheduled Tribes (STs) to the State of Arunachal Pradesh, recognizing its unique demographic composition where the entire indigenous population is tribal?",
        "options": ["83rd Amendment Act, 2000.","86th Amendment Act, 2002.","97th Amendment Act, 2011.","None. The 73rd Amendment inherently exempted Arunachal Pradesh."],
        "correctAnswerIndex": 0,
        "explanation": "The 83rd Amendment (2000) exempted Arunachal Pradesh from the requirement of providing reservations for SCs in Panchayats because the state has no indigenous SC population, being entirely inhabited by tribal communities."
    },
    {
        "id": "ch39-l3-q19",
        "question": "Regarding the",
        "options": ["Panchayats must physically mail their ledgers to the Finance Ministry in New Delhi.","Grants are released only if the Panchayats maintain their accounts online and their audit reports are available in the public domain (via platforms like",").","Panchayats must stop collecting local taxes to receive the grant.","They must employ a private chartered accountant from a","firm."],
        "correctAnswerIndex": 1,
        "explanation": "To enforce financial discipline, the 15th FC linked the release of grants to the online availability of both provisional accounts and audited accounts using the"
    },
    {
        "id": "ch39-l3-q20",
        "question": "Under the PESA Act, the Gram Sabha has the power to control local plans and resources for such plans including tribal sub-plans. Does this power extend to",
        "options": ["No, liquor regulation is a strict state monopoly extending into Scheduled Areas.","Yes, the Gram Sabha (or Panchayats at appropriate level) holds the power to enforce prohibition or to regulate or restrict the sale and consumption of any intoxicant.","Only if the Gram Sabha collects a massive excise tax to send to the State.","Only regarding the sale of foreign imported liquor."],
        "correctAnswerIndex": 1,
        "explanation": "PESA explicitly grants the Gram Sabha or Panchayats the power to enforce prohibition or to regulate or restrict the sale and consumption of any intoxicant, recognizing the devastating socio-economic impact of liquor on tribal communities."
    },
    {
        "id": "ch39-l3-q21",
        "question": "Assertion (A): The institution of the",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","Both A and R are completely false."],
        "correctAnswerIndex": 3,
        "explanation": "Both statements are false. In reality, the DPC is consistently highlighted in reports (like the Mani Shankar Aiyar committee or ARC) as an enormous failure. Many states delayed forming them, and where they exist, they are chronically powerless, bypassed by parallel parastatal bodies and state planning boards."
    },
    {
        "id": "ch39-l3-q22",
        "question": "How does the",
        "options": ["Mehta viewed them merely as local administrative agencies for the",", while Singhvi aggressively argued for their elevation as autonomous constitutional",".","Singhvi wanted to abolish Panchayats entirely, while Mehta supported them.","Mehta focused exclusively on urban areas, while Singhvi focused on rural.","There was no philosophical difference; Singhvi merely updated the financial numbers."],
        "correctAnswerIndex": 0,
        "explanation": "Balwant Rai Mehta"
    },
    {
        "id": "ch39-l3-q23",
        "question": "The 73rd Amendment mandates reservation for SCs/STs based on population proportion. In a hypothetical Gram Panchayat where STs make up 60% of the population, SCs 10%, and others 30%, what is the maximum permissible total reservation (excluding women",
        "options": ["50%, because the Supreme Court caps all reservations at 50%.","70%, because the Constitutional mandate for proportional reservation in Part IX overrides the 50% ceiling rule applied to public employment in Article 16.","30%, to protect the unreserved categories.","100%, because it becomes a","."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court in K. Krishna Murthy vs. UoI (2010) clarified that the 50% ceiling limit (propounded in Indra Sawhney for Article 16 employment) applies to the"
    },
    {
        "id": "ch39-l3-q24",
        "question": "What distinct electoral advantage does the",
        "options": ["It conducts elections for the President of India.","It operates completely outside the overarching supervision of the ECI. The State Election Commission is an independent, parallel constitutional body, not a subordinate branch of the central ECI.","It controls the delimitation of Lok Sabha constituencies.","It utilizes paper ballots exclusively mandated by the Constitution."],
        "correctAnswerIndex": 1,
        "explanation": "A common misconception is that the SEC is a subordinate branch of the Election Commission of India. It is not. The SEC is an independent constitutional body created under Article 243K deriving its power directly from the Constitution to conduct local elections."
    },
    {
        "id": "ch39-l3-q25",
        "question": "Consider a state wanting to mandate specific educational qualifications (like passing 10th standard) to contest Gram Panchayat elections (similar to laws passed previously in Haryana and Rajasthan). Is this constitutionally permissible under the 73rd Amendment?",
        "options": ["No, the Supreme Court has declared such educational restrictions unconstitutional as they violate the basic democratic right to contest.","Yes. The Supreme Court upheld the Haryana law (Rajbala vs State of Haryana, 2015), ruling that prescribing educational criteria is a valid exercise of legislative power by the State to ensure competent governance at the local level.","Only if the candidate is contesting for the post of Zila Parishad Chairperson.","No, Article 243F strictly prohibits any disqualification rules other than age."],
        "correctAnswerIndex": 1,
        "explanation": "In Rajbala vs State of Haryana (2015), the SC upheld the controversial Haryana Panchayati Raj (Amendment) Act which introduced minimum educational qualifications, arrears clearance, and functional toilets as mandatory prerequisites for contesting Panchayat elections."
    },
    {
        "id": "ch39-l3-q26",
        "question": "The",
        "options": ["State Governments are absolutely mandated to transfer all 29 subjects to the Panchayats upon the commencement of the 73rd Amendment.","The schedule is essentially illustrative/directive. The actual transfer of any or all of these 29 subjects depends entirely on the legislative discretion (Voluntary Provision) of the individual State Government via Article 243G.","The Central Government directly administers these 29 subjects via the District Collector.","Panchayats can claim immediate jurisdiction over these 29 subjects by passing a Gram Sabha resolution, bypassing the State."],
        "correctAnswerIndex": 1,
        "explanation": "The 11th Schedule provides a menu of subjects. Article 243G says the state legislature *may* endow Panchayats with powers regarding these subjects. It is not an automatic, binding transfer; the state retains sweeping discretion over what, if anything, is actually devolved."
    },
    {
        "id": "ch39-l3-q27",
        "question": "According to the PESA Act, 1996, what is the mandatory structural composition regarding the reservation of seats directly for Scheduled Tribes (STs) in every Panchayat situated within a Scheduled Area?",
        "options": ["It is restricted to a maximum of 33%.","The reservation for STs shall not be less than one-half (50%) of the total number of seats, and all seats of Chairpersons of Panchayats at all levels shall be reserved only for STs.","There is no reservation requirement; it is based purely on open merit in tribal areas.","Only 10% seats are reserved, mirroring central jobs."],
        "correctAnswerIndex": 1,
        "explanation": "PESA explicitly enhances tribal political control. It stipulates that reservation for STs shall be strictly proportional but *shall not be less than one-half of the total seats*. Critically, *all* Chairperson positions at all levels in these areas are reserved for STs."
    },
    {
        "id": "ch39-l3-q28",
        "question": "Which of the following bodies is structurally responsible for determining the number of seats to be allotted to different constituencies within a Panchayat (i.e., Delimitation) prior to elections?",
        "options": ["The Election Commission of India","The State Legislature, which authorizes the State Election Commission or a dedicated State Delimitation body to undertake the exercise as per the state","The sitting Zila Parishad Adhyaksha.","The Union Parliament directly."],
        "correctAnswerIndex": 1,
        "explanation": "Article 243K veils the SEC with superintendence power, but the heavy lifting of determining constituencies (delimitation) is governed by the laws made by the State Legislature (Article 243K(4) & 243C), executed usually by the SEC or a state-appointed authority."
    },
    {
        "id": "ch39-l3-q29",
        "question": "When a Gram Panchayat imposes",
        "options": ["It is an","reflecting total dependence on the Central Finance Commission.","It is a","aimed at enriching state politicians.","It falls under","within their","(OSR), crucial because it provides the Panchayat autonomous, unrestricted funds distinct from tied government grants.","It is illegal under the 73rd Amendment, which forbids Panchayats from charging citizens."],
        "correctAnswerIndex": 2,
        "explanation": "User charges, fees, and fines form the non-tax portion of a Panchayat"
    },
    {
        "id": "ch39-l3-q30",
        "question": "Assertion (A): The",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","Both are false."],
        "correctAnswerIndex": 0,
        "explanation": "Remarkably, Ashok Mehta (1977) favored a two-tier structure: Zila Parishad (district) and Mandal Panchayat (group of villages with 15k-20k pop). He felt an individual village Gram Panchayat was too small to be economically viable or to handle complex developmental projects, thus effectively trying to eliminate the standard Gram Panchayat level."
    }
];

export const CHAPTER_39_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
