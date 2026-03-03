import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch81-l1-q1",
        "question": "Which Part of the Indian Constitution deals with",
        "options": ["Part XIV","Part XV","Part XVI","Part XVII"],
        "correctAnswerIndex": 1,
        "explanation": "Part XV of the Constitution (Articles 324 to 329) deals with the electoral system and the Election Commission."
    },
    {
        "id": "ch81-l1-q2",
        "question": "The articles in the Constitution that provide for the",
        "options": ["Article 324 to 329","Article 330 to 342","Article 343 to 351","Article 352 to 360"],
        "correctAnswerIndex": 0,
        "explanation": "Part XV contains Articles 324 to 329 providing the framework for elections."
    },
    {
        "id": "ch81-l1-q3",
        "question": "Which Article provides for the establishment of an",
        "options": ["Article 323","Article 324","Article 325","Article 326"],
        "correctAnswerIndex": 1,
        "explanation": "Article 324 provides for the superintendence, direction, and control of elections to Parliament, State Legislatures, and the offices of President and Vice-President."
    },
    {
        "id": "ch81-l1-q4",
        "question": "According to the Constitution, there shall be how many",
        "options": ["Only one","Two (one for males, one for females)","Three (based on religion)","Separate rolls for each caste"],
        "correctAnswerIndex": 0,
        "explanation": "Article 325 provides that there shall be"
    },
    {
        "id": "ch81-l1-q5",
        "question": "Which Article prohibits discrimination in the preparation of electoral rolls on grounds of",
        "options": ["Article 324","Article 325","Article 326","Article 15"],
        "correctAnswerIndex": 1,
        "explanation": "Article 325 specifically addresses the non-discriminatory nature of electoral rolls."
    },
    {
        "id": "ch81-l1-q6",
        "question": "The Principle of",
        "options": ["Article 324","Article 325","Article 326","Article 327"],
        "correctAnswerIndex": 2,
        "explanation": "Article 326 provides that the elections to the Lok Sabha and the State Assemblies shall be on the basis of adult suffrage."
    },
    {
        "id": "ch81-l1-q7",
        "question": "Every person who is a",
        "options": ["18","21","25","30"],
        "correctAnswerIndex": 0,
        "explanation": "The voting age is currently 18 years, as provided under Article 326."
    },
    {
        "id": "ch81-l1-q8",
        "question": "Through which Constitutional Amendment was the voting age reduced from 21 years to 18 years?",
        "options": ["42nd Amendment Act, 1976","44th Amendment Act, 1978","61st Amendment Act, 1988","73rd Amendment Act, 1992"],
        "correctAnswerIndex": 2,
        "explanation": "The 61st Amendment Act (1988), which came into force in 1989, reduced the voting age to 18."
    },
    {
        "id": "ch81-l1-q9",
        "question": "Who has the power to make laws with respect to",
        "options": ["The Supreme Court","The Election Commission","The Parliament","The President"],
        "correctAnswerIndex": 2,
        "explanation": "Article 327 empowers the Parliament to make laws regarding elections to the Parliament and State Legislatures."
    },
    {
        "id": "ch81-l1-q10",
        "question": "Who has the power to make provisions for",
        "options": ["The State Legislature","The Governor","The State Election Commission","The High Court"],
        "correctAnswerIndex": 0,
        "explanation": "Under Article 328, the State Legislature can make provisions for matters relating to its own elections if the Parliament hasn"
    },
    {
        "id": "ch81-l1-q11",
        "question": "Which Article provides for",
        "options": ["Article 326","Article 327","Article 328","Article 329"],
        "correctAnswerIndex": 3,
        "explanation": "Article 329 bars the courts from interfering in matters like delimitation of constituencies and allotment of seats."
    },
    {
        "id": "ch81-l1-q12",
        "question": "As per Article 329, an",
        "options": ["A Writ Petition in the Supreme Court","A Public Interest Litigation (PIL)","An Election Petition","An appeal to the President"],
        "correctAnswerIndex": 2,
        "explanation": "Article 329(b) states that no election shall be called in question except by an election petition presented to such authority and in such manner as provided by law."
    },
    {
        "id": "ch81-l1-q13",
        "question": "In India, the system of",
        "options": ["Geography","Population","Revenue contribution","Literacy rate"],
        "correctAnswerIndex": 1,
        "explanation": "The allocation of seats and division of each state into territorial constituencies is based on the population to ensure equal representation."
    },
    {
        "id": "ch81-l1-q14",
        "question": "The",
        "options": ["Preparing electoral rolls","Allotting election symbols","Determining the boundaries of constituencies","Counting of votes"],
        "correctAnswerIndex": 2,
        "explanation": "The Delimitation Commission is an independent body that periodically redraws the boundaries of constituencies based on census data."
    },
    {
        "id": "ch81-l1-q15",
        "question": "Does the Indian Constitution provide for",
        "options": ["Yes","No, it was abolished with the adoption of the Constitution","Only for Muslims and Christians","Only in special border states"],
        "correctAnswerIndex": 1,
        "explanation": "The Indian Constitution abolished the colonial system of separate electorates and adopted"
    },
    {
        "id": "ch81-l1-q16",
        "question": "Reservation of seats for Scheduled Castes and Scheduled Tribes in the Lok Sabha is provided in:",
        "options": ["Article 330","Article 331","Article 332","Article 333"],
        "correctAnswerIndex": 0,
        "explanation": "Article 330 provides for reservation of seats for SCs and STs in the Lok Sabha based on their population ratio."
    },
    {
        "id": "ch81-l1-q17",
        "question": "Reservation of seats for Scheduled Castes and Scheduled Tribes in the State Legislative Assemblies is provided in:",
        "options": ["Article 330","Article 331","Article 332","Article 333"],
        "correctAnswerIndex": 2,
        "explanation": "Article 332 provides for SC/ST reservations in the State Assemblies."
    },
    {
        "id": "ch81-l1-q18",
        "question": "Which Amendment recently extended the reservation of SC/ST seats and abolished the nomination of",
        "options": ["101st Amendment","102nd Amendment","103rd Amendment","104th Amendment"],
        "correctAnswerIndex": 3,
        "explanation": "The 104th Constitutional Amendment Act (2019) extended SC/ST reservation for 10 years and ended the provision for Anglo-Indian nominations in Lok Sabha and Assemblies."
    },
    {
        "id": "ch81-l1-q19",
        "question": "Who is the",
        "options": ["The Election Commission","The Supreme Court","The President or Governor (on the advice of EC)","The Speaker or Chairperson"],
        "correctAnswerIndex": 2,
        "explanation": "According to Articles 103 and 192, disputes over disqualification (other than defection) are decided by the President/Governor based on the binding opinion of the Election Commission."
    },
    {
        "id": "ch81-l1-q20",
        "question": "Members of the",
        "options": ["Direct Election","Proportional Representation by means of Single Transferable Vote","First-Past-The-Post system","Nomination only"],
        "correctAnswerIndex": 1,
        "explanation": "The Rajya Sabha members are indirectly elected by the members of the State Legislative Assemblies using the PR-STV system."
    },
    {
        "id": "ch81-l1-q21",
        "question": "The",
        "options": ["Lok Sabha and Legislative Assemblies","Rajya Sabha and Legislative Councils","Presidential Election","Vice-Presidential Election"],
        "correctAnswerIndex": 0,
        "explanation": "In Lok Sabha and State Assembly elections, the candidate who receives the most votes in a constituency is declared the winner (FPTP)."
    },
    {
        "id": "ch81-l1-q22",
        "question": "What is the",
        "options": ["18 years","21 years","25 years","30 years"],
        "correctAnswerIndex": 2,
        "explanation": "A person must be at least 25 years old to contest an election to the Lok Sabha or a State Legislative Assembly."
    },
    {
        "id": "ch81-l1-q23",
        "question": "What is the",
        "options": ["25 years","30 years","35 years","40 years"],
        "correctAnswerIndex": 1,
        "explanation": "The minimum age for becoming a member of the Rajya Sabha or a State Legislative Council is 30 years."
    },
    {
        "id": "ch81-l1-q24",
        "question": "Can a person who is",
        "options": ["Yes, if they have resided in India for 10 years","Only in local body elections","No, only citizens are entitled to vote under Art 326","Only if they have a PAN card"],
        "correctAnswerIndex": 2,
        "explanation": "Article 326 clearly restricts the voting right to citizens of India."
    },
    {
        "id": "ch81-l1-q25",
        "question": "Which Act currently regulates the",
        "options": ["Representation of the People Act, 1950","Representation of the People Act, 1951","The Delimitation Act, 2002","The Election Laws (Amendment) Act, 2021"],
        "correctAnswerIndex": 1,
        "explanation": "While the 1950 Act deals with electoral rolls and seats, the 1951 Act deals with the actual conduct of elections, qualifications/disqualifications, and political parties."
    },
    {
        "id": "ch81-l1-q26",
        "question": "The",
        "options": ["Elected members of both Houses of Parliament and State Assemblies","All members of Parliament and State Assemblies","Elected members of Lok Sabha only","Governors of all States"],
        "correctAnswerIndex": 0,
        "explanation": "The President is elected by an electoral college comprising elected members of Parliament and State Legislative Assemblies (and UTs of Delhi/Puducherry)."
    },
    {
        "id": "ch81-l1-q27",
        "question": "Is",
        "options": ["No","Yes","Only for those living in urban areas","Only for those above 60 years"],
        "correctAnswerIndex": 1,
        "explanation": "A citizen must be registered on the electoral roll of their constituency to be eligible to vote."
    },
    {
        "id": "ch81-l1-q28",
        "question": "Which official is responsible for the",
        "options": ["The District Magistrate","The Returning Officer","The Presiding Officer","The Electoral Registration Officer"],
        "correctAnswerIndex": 1,
        "explanation": "The Returning Officer (appointed by the EC) is responsible for conducting the election in a specific constituency."
    },
    {
        "id": "ch81-l1-q29",
        "question": "The power of",
        "options": ["Restricted only to counting of votes","Plenary (complete) and wide enough to cover all election-related activities","Subject to approval by the Home Ministry","Only for Parliamentary elections"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court has interpreted Article 324 as giving the EC broad and plenary powers to ensure free and fair elections."
    },
    {
        "id": "ch81-l1-q30",
        "question": "Which Article provides for the",
        "options": ["Article 324","Article 329","Article 326","Article 328"],
        "correctAnswerIndex": 1,
        "explanation": "Article 329(b) provides for the resolution of election disputes via election petitions."
    },
    {
        "id": "ch81-l1-q31",
        "question": "The expression",
        "options": ["Only administrative duties","Plenary power to deal with any situation for which no specific law exists","Powers limited only to counting of votes","Powers that must be approved by the Union Cabinet"],
        "correctAnswerIndex": 1,
        "explanation": "In Mohinder Singh Gill v. CEC (1978), the SC held that Art 324 is a reservoir of power for the EC to ensure free and fair elections where the law is silent."
    },
    {
        "id": "ch81-l1-q32",
        "question": "Which of the following matters is NOT covered under the",
        "options": ["Allocation of seats in the House of the People","Delimitation of constituencies","Preparation of electoral rolls","Conduct of elections and election offenses"],
        "correctAnswerIndex": 3,
        "explanation": "The RPA 1950 deals with seats, delimitation, and registration of voters. RPA 1951 deals with the actual"
    },
    {
        "id": "ch81-l1-q33",
        "question": "Regarding",
        "options": ["It was first introduced in India by the Act of 1909","It was a bold experiment by the makers of the Constitution despite mass illiteracy","It is restricted only to those who pay income tax","It applies only to the election of the Rajya Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "The introduction of universal adult franchise was considered a"
    },
    {
        "id": "ch81-l1-q34",
        "question": "The",
        "options": ["Cannot be questioned in any court","Can be revised by the President","Can be vetoed by the State Assemblies","Require approval of the Supreme Court"],
        "correctAnswerIndex": 0,
        "explanation": "Article 329(a) and the Delimitation Act ensure that delimitation orders are final and not subject to judicial review once published."
    },
    {
        "id": "ch81-l1-q35",
        "question": "Which of the following is a ground for",
        "options": ["Non-residence","Unsoundness of mind","Conviction for corrupt practices","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Article 326 (and relevant laws) allow for disqualification on grounds of non-residence, unsoundness of mind, crime, or corrupt/illegal practices."
    },
    {
        "id": "ch81-l1-q36",
        "question": "If a State Legislature makes a law regarding its own elections, it is subject to:",
        "options": ["Any law made by the Parliament on the same subject","The absolute veto of the Governor","Prior approval by the Supreme Court","Nothing, State Legislatures are supreme in their elections"],
        "correctAnswerIndex": 0,
        "explanation": "Article 328 provides power to State Legislatures"
    },
    {
        "id": "ch81-l1-q37",
        "question": "The",
        "options": ["Supreme Court","High Court of the respective State","District Court","Special Election Tribunal"],
        "correctAnswerIndex": 1,
        "explanation": "Since 1966, election petitions are heard by the High Courts (under RPA 1951), with a right of appeal to the Supreme Court."
    },
    {
        "id": "ch81-l1-q38",
        "question": "The",
        "options": ["2010","2020","2026","2031"],
        "correctAnswerIndex": 2,
        "explanation": "The 84th Amendment extended the freeze on the total number of seats in Lok Sabha and State Assemblies until 2026."
    },
    {
        "id": "ch81-l1-q39",
        "question": "Can",
        "options": ["Yes, it bars all court interference","No, Article 329 only bars challenging the","before results; after results, a petition can be filed","Only if the EC gives permission","Only for local body candidates"],
        "correctAnswerIndex": 1,
        "explanation": "The bar under Art 329 is against interference"
    },
    {
        "id": "ch81-l1-q40",
        "question": "In India, the",
        "options": ["List System","Cumulative Vote System","Single-member territorial constituency system","Plurality system with multi-member constituencies"],
        "correctAnswerIndex": 2,
        "explanation": "India is divided into single-member territorial constituencies where each constituency elects one representative."
    },
    {
        "id": "ch81-l1-q41",
        "question": "The",
        "options": ["Ministry of Law","The Parliament","The Election Commission","The President"],
        "correctAnswerIndex": 2,
        "explanation": "The MCC is issued by the EC to ensure free and fair elections and comes into force the moment elections are announced."
    },
    {
        "id": "ch81-l1-q42",
        "question": "Does the",
        "options": ["Yes, explicitly mentioned in RPA 1951","No, the power of deregistration has been a subject of legal debate and is not clearly provided for most violations","Only for parties with less than 1% vote","Only if authorized by the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "While the EC can"
    },
    {
        "id": "ch81-l1-q43",
        "question": "What is the status of the",
        "options": ["Fundamental Right","Statutory Right (provided by law)","Constitutional Right only","Natural Right"],
        "correctAnswerIndex": 1,
        "explanation": "The SC (N.P. Ponnuswami and other cases) held that the right to vote is a"
    },
    {
        "id": "ch81-l1-q44",
        "question": "Which of the following is NOT a duty of the",
        "options": ["Superintendence of elections to Parliament","Superintendence of elections to Municipalities and Panchayats","Superintendence of elections to State Legislatures","Superintendence of elections for President/Vice-President"],
        "correctAnswerIndex": 1,
        "explanation": "Elections to Panchayats and Municipalities are handled by the"
    },
    {
        "id": "ch81-l1-q45",
        "question": "The",
        "options": ["Representation of the People Act, 1950","Representation of the People Act, 1951","Delimitation Act, 2002","Anti-Defection Act"],
        "correctAnswerIndex": 0,
        "explanation": "The RPA 1950 provides the detailed mechanism for the registration of electors and the preparation of electoral rolls."
    },
    {
        "id": "ch81-l1-q46",
        "question": "The 61st Amendment Act (1988) was passed by the Parliament. Did it require",
        "options": ["No, simple majority was enough","Yes, because it amended Article 326","Only if the President requested","Only for Jammu and Kashmir"],
        "correctAnswerIndex": 1,
        "explanation": "Amendments to Chapter XV (Elections) that affect the Representation of the People generally require state ratification if they change the core electoral rights/mechanism defined in the Constitution."
    },
    {
        "id": "ch81-l1-q47",
        "question": "Can a person be registered as a voter in",
        "options": ["Yes, if they have property in both","No, only in one constituency where they are","","Yes, for Lok Sabha but not for Assembly","Only if they are a Gazetted Officer"],
        "correctAnswerIndex": 1,
        "explanation": "Under the RPA 1950, no person is entitled to be registered in more than one constituency or more than once in the same constituency."
    },
    {
        "id": "ch81-l1-q48",
        "question": "The",
        "options": ["The State Government","The Election Commission of India","The President","The District Magistrate"],
        "correctAnswerIndex": 1,
        "explanation": "The ERO is designated/nominated by the ECI in consultation with the State Government."
    },
    {
        "id": "ch81-l1-q49",
        "question": "Is the",
        "options": ["No","Yes, the SC held it to be a part of the Right to Freedom of Speed (Art 19)","Only for graduates","Only for Rajya Sabha elections"],
        "correctAnswerIndex": 1,
        "explanation": "In Union of India v. Association for Democratic Reforms (2002), the SC held that voters have a right to know the background of candidates."
    },
    {
        "id": "ch81-l1-q50",
        "question": "A",
        "options": ["Free supply of electoral rolls","Broadcast/Telecast facilities on state media","Exclusive allotment of a reserved symbol","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Recognized parties (National and State) get several benefits like reserved symbols, free electoral rolls, and media time."
    },
    {
        "id": "ch81-l1-q51",
        "question": "Regarding",
        "options": ["Crime","Corrupt Practice","Illiteracy","Illegal Practice"],
        "correctAnswerIndex": 2,
        "explanation": "Illiteracy is not a ground for disqualification. Only non-residence, unsoundness of mind, crime, or corrupt/illegal practices are mentioned."
    },
    {
        "id": "ch81-l1-q52",
        "question": "The",
        "options": ["The Election Commission directly","The Returning Officer (RO)","The District Election Officer (DEO)","The Governor"],
        "correctAnswerIndex": 2,
        "explanation": "The District Election Officer appoints the Presiding Officer and Polling Officers for each booth."
    },
    {
        "id": "ch81-l1-q53",
        "question": "Which of the following is responsible for preparing and updating",
        "options": ["The Election Commission (through EROs)","The Home Ministry","The Census Commissioner","The District Magistrate (solely)"],
        "correctAnswerIndex": 0,
        "explanation": "Preparation of electoral rolls is a core function of the EC, performed via Electoral Registration Officers."
    },
    {
        "id": "ch81-l1-q54",
        "question": "When a",
        "options": ["Within 1 month","Within 6 months","Any time before the next general election","Within 1 year"],
        "correctAnswerIndex": 1,
        "explanation": "A by-election to fill a vacancy must be held within 6 months of the occurrence of the vacancy (unless the remainder of the term is less than 1 year)."
    },
    {
        "id": "ch81-l1-q55",
        "question": "The",
        "options": ["ADR Case","Lily Thomas Case","PUCL v. Union of India (2013)","Shreya Singhal Case"],
        "correctAnswerIndex": 2,
        "explanation": "The PUCL v. Union of India case led to the SC directing the EC to provide a NOTA option on EVMs."
    },
    {
        "id": "ch81-l1-q56",
        "question": "Can a person contest a Lok Sabha election from",
        "options": ["Yes","No, only maximum of 2 constituencies (under RPA 1951)","No, only 1 constituency","Only if they are an independent candidate"],
        "correctAnswerIndex": 1,
        "explanation": "Section 33 of RPA 1951 restricts a candidate to contesting from a maximum of two constituencies in a single general election."
    },
    {
        "id": "ch81-l1-q57",
        "question": "The",
        "options": ["Count votes faster","Verify that the vote cast by a voter has gone to the intended candidate","Allow voters to take the slip home","Replace EVMs"],
        "correctAnswerIndex": 1,
        "explanation": "VVPAT provides a physical verification method for voters to see their cast vote on a paper slip before it falls into a sealed box."
    },
    {
        "id": "ch81-l1-q58",
        "question": "Who assesses the",
        "options": ["The Parliament","The Central Government (Ministry of Law)","The Election Commission","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The expenditure limits are prescribed by the Central Government via a notification, based on the recommendation of the EC."
    },
    {
        "id": "ch81-l1-q59",
        "question": "Article 324 applies to the",
        "options": ["President and Vice-President","Governor and Chief Minister","CAG and Attorney General","District Judges"],
        "correctAnswerIndex": 0,
        "explanation": "ECI conducts elections to Parliament, State Legislatures, and the President and Vice-President offices."
    },
    {
        "id": "ch81-l1-q60",
        "question": "In the",
        "options": ["It makes Article 329 void","It means that High Court","It has no effect","It allows judges to skip voting"],
        "correctAnswerIndex": 1,
        "explanation": "While Art 329 bars interference"
    },
    {
        "id": "ch81-l1-q61",
        "question": "Assertion (A): The power of",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 2,
        "explanation": "While Art 324 is a reservoir of power, it cannot be exercised in a manner contrary to a valid law passed by Parliament. It only operates where the law is silent."
    },
    {
        "id": "ch81-l1-q62",
        "question": "Which of the following describes the Supreme Court",
        "options": ["Voters have a","to know the criminal, educational, and financial background of candidates under Article 19(1)(a)","Background disclosure is a","only","Disclosure is optional for cabinet ministers","Disclosure is required only for candidates with pending FIRs"],
        "correctAnswerIndex": 0,
        "explanation": "The SC held that the right to get information about the background of candidates is a part of the freedom of expression under Art 19(1)(a)."
    },
    {
        "id": "ch81-l1-q63",
        "question": "In",
        "options": ["Article 329(a) completely bars judicial review of delimitation orders once they are published in the Gazette","The order was signed by the President","The error was only in the language translation","The petitioner was not a citizen"],
        "correctAnswerIndex": 0,
        "explanation": "The Court held that the order has the"
    },
    {
        "id": "ch81-l1-q64",
        "question": "Consider the following statements regarding",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 3 is incorrect: The SC has held that the right to vote/register is a"
    },
    {
        "id": "ch81-l1-q65",
        "question": "The 104th Constitutional Amendment Act (2019) has modified which of the following?",
        "options": ["Article 330 and 332 only","Article 331 and 333 (by not extending the nomination of Anglo-Indians)","Article 324 (Election Commission composition)","Article 326 (Voting age)"],
        "correctAnswerIndex": 1,
        "explanation": "The 104th Amendment did not extend the reservation for Anglo-Indians (Art 331/333) beyond 2020, while extending SC/ST reservations."
    },
    {
        "id": "ch81-l1-q66",
        "question": "Regarding",
        "options": ["Special Tribunals have exclusive jurisdiction","High Courts have original jurisdiction and Supreme Court has appellate jurisdiction","Only the Election Commission can decide election challenges","The President has absolute power to decide disputes"],
        "correctAnswerIndex": 1,
        "explanation": "Before 1966, disputes were settled by Tribunals. Since then, the High Courts hear election petitions under the Representation of the People Act, 1951."
    },
    {
        "id": "ch81-l1-q67",
        "question": "With reference to the",
        "options": ["The Home Ministry","The Election Commission under Article 324","The Prime Minister","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The EC has plenary powers under Art 324 to postpone or cancel polls in any booth or constituency in extreme situations for free and fair polls."
    },
    {
        "id": "ch81-l1-q68",
        "question": "Can a person be disqualified for",
        "options": ["Yes, Article 326 provides for this disqualification","No, only non-citizens are disqualified","Only if they have a criminal record","Only for NRIs"],
        "correctAnswerIndex": 0,
        "explanation": "Article 326 mentions"
    },
    {
        "id": "ch81-l1-q69",
        "question": "The",
        "options": ["Linking Electoral Roll data with Aadhaar ecosystem","Reducing the cooling-off period for bureaucrats","Allowing proxy voting for overseas citizens","Reducing election expenses limit"],
        "correctAnswerIndex": 0,
        "explanation": "The 2021 Act allowed for the linking of Aadhaar to voter IDs on a voluntary basis to curb duplicate entries."
    },
    {
        "id": "ch81-l1-q70",
        "question": "If a law made by",
        "options": ["The State law, as it","The Parliamentary law prevails as State power is","Parliament","The Governor decides","Both are void to the extent of conflict"],
        "correctAnswerIndex": 1,
        "explanation": "Article 328 explicitly states that the state"
    },
    {
        "id": "ch81-l1-q71",
        "question": "In the",
        "options": ["Refuse to hold elections if it determines that a free and fair poll is not possible","Extend the Governor","Convert a State into a UT","Bypass the 6-month rule of Article 174 in extreme circumstances"],
        "correctAnswerIndex": 0,
        "explanation": "The SC held that the mandate of Art 324 is to ensure"
    },
    {
        "id": "ch81-l1-q72",
        "question": "What is the legal effect of",
        "options": ["The nomination is void","It doesn","The candidate must pay a fine","The person is barred for 6 years"],
        "correctAnswerIndex": 1,
        "explanation": "Once a person"
    },
    {
        "id": "ch81-l1-q73",
        "question": "Can",
        "options": ["Yes, ECI issues instructions for","and exit polls","No, ECI only controls state media (AIR/Doordarshan)","Only for international channels","Only with CBI approval"],
        "correctAnswerIndex": 0,
        "explanation": "ECI uses its plenary powers and the RPA 1951 to regulate exit polls and media conduct to prevent undue influence."
    },
    {
        "id": "ch81-l1-q74",
        "question": "Regarding",
        "options": ["Purely executive","Purely legislative and can be delegated to a Commission","Judicial in nature","Consultative only"],
        "correctAnswerIndex": 1,
        "explanation": "Districting and seat allocation are legislative functions. Parliament delegates this to the Delimitation Commission."
    },
    {
        "id": "ch81-l1-q75",
        "question": "In",
        "options": ["Only the final counting","The entire process starting from notification to the declaration of result","Only the polling day activities","Only the registration of voters"],
        "correctAnswerIndex": 1,
        "explanation": "The SC gave a wide meaning to"
    },
    {
        "id": "ch81-l1-q76",
        "question": "The",
        "options": ["Article 83 and 172 only","Article 356 only","Article 83, 85, 172, 174, and 356","Article 1 and 2"],
        "correctAnswerIndex": 2,
        "explanation": "Simultaneous elections require synchronizing the terms of Lok Sabha and State Assemblies, affecting articles related to duration and dissolution of houses, as well as President"
    },
    {
        "id": "ch81-l1-q77",
        "question": "In France,",
        "options": ["PR is too simple for the Indian voter","FPTP ensures a stable government by giving a clear majority to the largest party","PR is against the basic structure","FPTP was forced by the British"],
        "correctAnswerIndex": 1,
        "explanation": "PR often leads to fragmented legislatures and coalition instability. FPTP was chosen for its simplicity and the likelihood of forming stable governments."
    },
    {
        "id": "ch81-l1-q78",
        "question": "Regarding",
        "options": ["Yes, under Art 324","No, the power of disqualification on grounds of defection vests in the Speaker or Chairperson","Only if authorized by the PM","Only if the member is a Minister"],
        "correctAnswerIndex": 1,
        "explanation": "While ECI handles"
    },
    {
        "id": "ch81-l1-q79",
        "question": "The",
        "options": ["Kerala","Nagaland (Noksen constituency)","Gujarat","Delhi"],
        "correctAnswerIndex": 1,
        "explanation": "VVPAT was first used in the 2013 by-election in the Noksen assembly constituency of Nagaland."
    },
    {
        "id": "ch81-l1-q80",
        "question": "Condition (C): To ensure the",
        "options": ["The CEC can only be removed in the same manner as a SC Judge","The conditions of service of the CEC cannot be varied to his disadvantage after appointment","Other Election Commissioners cannot be removed except on the recommendation of the CEC","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Article 324(5) provides these constitutional safeguards to the CEC and other commissioners."
    },
    {
        "id": "ch81-l1-q81",
        "question": "If a person is convicted for an offense and sentenced to imprisonment for",
        "options": ["2 years","6 years","Indefinitely","1 year"],
        "correctAnswerIndex": 1,
        "explanation": "Under Section 8(3) of the RPA 1951, a person is disqualified for the period of imprisonment plus a further period of 6 years from their release."
    },
    {
        "id": "ch81-l1-q82",
        "question": "The",
        "options": ["Yes, it is only a moral code","No, EC can use its plenary powers under Article 324 to punish violators or suspend their campaign","It is only enforceable with the help of the local police","It can only be enforced by a High Court order"],
        "correctAnswerIndex": 1,
        "explanation": "The SC has repeatedly upheld the EC"
    },
    {
        "id": "ch81-l1-q83",
        "question": "Can",
        "options": ["No, MCC is not a law","Yes, because most MCC prohibitions reflect corrupt practices defined in the RPA 1951","Only for Parliamentary elections","Only if the President is a witness"],
        "correctAnswerIndex": 1,
        "explanation": "While the code itself is non-statutory, its content overlaps with"
    },
    {
        "id": "ch81-l1-q84",
        "question": "Which Article provides that",
        "options": ["Article 325","Article 326","Article 329","Article 13"],
        "correctAnswerIndex": 2,
        "explanation": "Article 329 provides a bar to interference by courts in electoral matters including rolls (as part of the election process)."
    },
    {
        "id": "ch81-l1-q85",
        "question": "The 1045th Amendment has been a typo in many mocks, but the",
        "options": ["Anglo-Indians are no longer a minority","Anglo-Indians have achieved adequate representation and their population has decreased substantially","It was recommended by the CAG","It was a part of the GST council"],
        "correctAnswerIndex": 1,
        "explanation": "The government"
    },
    {
        "id": "ch81-l1-q86",
        "question": "The",
        "options": ["Purely Administrative","Quasi-judicial","Purely Executive","Purely Ministerial"],
        "correctAnswerIndex": 1,
        "explanation": "Handling objections and determining voter eligibility involves a quasi-judicial process where evidence is evaluated."
    },
    {
        "id": "ch81-l1-q87",
        "question": "If a person",
        "options": ["Yes, the ERO can remove them even on polling day","No, once the name is in the","roll, they are eligible to vote; the entry can only be challenged post-result","Only if the Presiding Officer is a lawyer","Only in Lok Sabha elections"],
        "correctAnswerIndex": 1,
        "explanation": "The electoral roll is generally conclusive for the purpose of the polling day; any defect must be raised during the revision phase or post-election."
    },
    {
        "id": "ch81-l1-q88",
        "question": "Does",
        "options": ["No","Yes, if the Parliament is dissolved","Only with SC permission","Only for Part XV"],
        "correctAnswerIndex": 0,
        "explanation": "Constitutional amendments are purely legislative functions under Article 368. ECI has no such power."
    },
    {
        "id": "ch81-l1-q89",
        "question": "Is the",
        "options": ["Yes","No, Article 329(a) overrides other provisions to protect the finality of delimitation","Only if it violates basic structure","Only if the President requests"],
        "correctAnswerIndex": 1,
        "explanation": "Article 329(a) provides a specific and absolute bar against judicial review of delimitation laws/orders."
    },
    {
        "id": "ch81-l1-q90",
        "question": "The",
        "options": ["Elected members of State Legislative Assemblies","Elected members of State Legislative Councils","Elected and Nominated members of State Assemblies","The people directly"],
        "correctAnswerIndex": 0,
        "explanation": "Only the *elected* members of the State Legislative Assemblies choose the Rajya Sabha members."
    },
    {
        "id": "ch81-l1-q91",
        "question": "Which Part of the Indian Constitution deals with",
        "options": ["Part XIV","Part XV","Part XVI","Part XVII"],
        "correctAnswerIndex": 1,
        "explanation": "Part XV of the Constitution (Articles 324 to 329) deals with the electoral system and the Election Commission."
    },
    {
        "id": "ch81-l1-q92",
        "question": "The articles in the Constitution that provide for the",
        "options": ["Article 324 to 329","Article 330 to 342","Article 343 to 351","Article 352 to 360"],
        "correctAnswerIndex": 0,
        "explanation": "Part XV contains Articles 324 to 329 providing the framework for elections."
    },
    {
        "id": "ch81-l1-q93",
        "question": "Which Article provides for the establishment of an",
        "options": ["Article 323","Article 324","Article 325","Article 326"],
        "correctAnswerIndex": 1,
        "explanation": "Article 324 provides for the superintendence, direction, and control of elections to Parliament, State Legislatures, and the offices of President and Vice-President."
    },
    {
        "id": "ch81-l1-q94",
        "question": "According to the Constitution, there shall be how many",
        "options": ["Only one","Two (one for males, one for females)","Three (based on religion)","Separate rolls for each caste"],
        "correctAnswerIndex": 0,
        "explanation": "Article 325 provides that there shall be"
    },
    {
        "id": "ch81-l1-q95",
        "question": "Which Article prohibits discrimination in the preparation of electoral rolls on grounds of",
        "options": ["Article 324","Article 325","Article 326","Article 15"],
        "correctAnswerIndex": 1,
        "explanation": "Article 325 specifically addresses the non-discriminatory nature of electoral rolls."
    },
    {
        "id": "ch81-l1-q96",
        "question": "The Principle of",
        "options": ["Article 324","Article 325","Article 326","Article 327"],
        "correctAnswerIndex": 2,
        "explanation": "Article 326 provides that the elections to the Lok Sabha and the State Assemblies shall be on the basis of adult suffrage."
    },
    {
        "id": "ch81-l1-q97",
        "question": "Every person who is a",
        "options": ["18","21","25","30"],
        "correctAnswerIndex": 0,
        "explanation": "The voting age is currently 18 years, as provided under Article 326."
    },
    {
        "id": "ch81-l1-q98",
        "question": "Through which Constitutional Amendment was the voting age reduced from 21 years to 18 years?",
        "options": ["42nd Amendment Act, 1976","44th Amendment Act, 1978","61st Amendment Act, 1988","73rd Amendment Act, 1992"],
        "correctAnswerIndex": 2,
        "explanation": "The 61st Amendment Act (1988), which came into force in 1989, reduced the voting age to 18."
    },
    {
        "id": "ch81-l1-q99",
        "question": "Who has the power to make laws with respect to",
        "options": ["The Supreme Court","The Election Commission","The Parliament","The President"],
        "correctAnswerIndex": 2,
        "explanation": "Article 327 empowers the Parliament to make laws regarding elections to the Parliament and State Legislatures."
    },
    {
        "id": "ch81-l1-q100",
        "question": "Who has the power to make provisions for",
        "options": ["The State Legislature","The Governor","The State Election Commission","The High Court"],
        "correctAnswerIndex": 0,
        "explanation": "Under Article 328, the State Legislature can make provisions for matters relating to its own elections if the Parliament hasn"
    },
    {
        "id": "ch81-l1-q101",
        "question": "Which Article provides for",
        "options": ["Article 326","Article 327","Article 328","Article 329"],
        "correctAnswerIndex": 3,
        "explanation": "Article 329 bars the courts from interfering in matters like delimitation of constituencies and allotment of seats."
    },
    {
        "id": "ch81-l1-q102",
        "question": "As per Article 329, an",
        "options": ["A Writ Petition in the Supreme Court","A Public Interest Litigation (PIL)","An Election Petition","An appeal to the President"],
        "correctAnswerIndex": 2,
        "explanation": "Article 329(b) states that no election shall be called in question except by an election petition presented to such authority and in such manner as provided by law."
    },
    {
        "id": "ch81-l1-q103",
        "question": "In India, the system of",
        "options": ["Geography","Population","Revenue contribution","Literacy rate"],
        "correctAnswerIndex": 1,
        "explanation": "The allocation of seats and division of each state into territorial constituencies is based on the population to ensure equal representation."
    },
    {
        "id": "ch81-l1-q104",
        "question": "The",
        "options": ["Preparing electoral rolls","Allotting election symbols","Determining the boundaries of constituencies","Counting of votes"],
        "correctAnswerIndex": 2,
        "explanation": "The Delimitation Commission is an independent body that periodically redraws the boundaries of constituencies based on census data."
    },
    {
        "id": "ch81-l1-q105",
        "question": "Does the Indian Constitution provide for",
        "options": ["Yes","No, it was abolished with the adoption of the Constitution","Only for Muslims and Christians","Only in special border states"],
        "correctAnswerIndex": 1,
        "explanation": "The Indian Constitution abolished the colonial system of separate electorates and adopted"
    },
    {
        "id": "ch81-l1-q106",
        "question": "Reservation of seats for Scheduled Castes and Scheduled Tribes in the Lok Sabha is provided in:",
        "options": ["Article 330","Article 331","Article 332","Article 333"],
        "correctAnswerIndex": 0,
        "explanation": "Article 330 provides for reservation of seats for SCs and STs in the Lok Sabha based on their population ratio."
    },
    {
        "id": "ch81-l1-q107",
        "question": "Reservation of seats for Scheduled Castes and Scheduled Tribes in the State Legislative Assemblies is provided in:",
        "options": ["Article 330","Article 331","Article 332","Article 333"],
        "correctAnswerIndex": 2,
        "explanation": "Article 332 provides for SC/ST reservations in the State Assemblies."
    },
    {
        "id": "ch81-l1-q108",
        "question": "Which Amendment recently extended the reservation of SC/ST seats and abolished the nomination of",
        "options": ["101st Amendment","102nd Amendment","103rd Amendment","104th Amendment"],
        "correctAnswerIndex": 3,
        "explanation": "The 104th Constitutional Amendment Act (2019) extended SC/ST reservation for 10 years and ended the provision for Anglo-Indian nominations in Lok Sabha and Assemblies."
    },
    {
        "id": "ch81-l1-q109",
        "question": "Who is the",
        "options": ["The Election Commission","The Supreme Court","The President or Governor (on the advice of EC)","The Speaker or Chairperson"],
        "correctAnswerIndex": 2,
        "explanation": "According to Articles 103 and 192, disputes over disqualification (other than defection) are decided by the President/Governor based on the binding opinion of the Election Commission."
    },
    {
        "id": "ch81-l1-q110",
        "question": "Members of the",
        "options": ["Direct Election","Proportional Representation by means of Single Transferable Vote","First-Past-The-Post system","Nomination only"],
        "correctAnswerIndex": 1,
        "explanation": "The Rajya Sabha members are indirectly elected by the members of the State Legislative Assemblies using the PR-STV system."
    },
    {
        "id": "ch81-l1-q111",
        "question": "The",
        "options": ["Lok Sabha and Legislative Assemblies","Rajya Sabha and Legislative Councils","Presidential Election","Vice-Presidential Election"],
        "correctAnswerIndex": 0,
        "explanation": "In Lok Sabha and State Assembly elections, the candidate who receives the most votes in a constituency is declared the winner (FPTP)."
    },
    {
        "id": "ch81-l1-q112",
        "question": "What is the",
        "options": ["18 years","21 years","25 years","30 years"],
        "correctAnswerIndex": 2,
        "explanation": "A person must be at least 25 years old to contest an election to the Lok Sabha or a State Legislative Assembly."
    },
    {
        "id": "ch81-l1-q113",
        "question": "What is the",
        "options": ["25 years","30 years","35 years","40 years"],
        "correctAnswerIndex": 1,
        "explanation": "The minimum age for becoming a member of the Rajya Sabha or a State Legislative Council is 30 years."
    },
    {
        "id": "ch81-l1-q114",
        "question": "Can a person who is",
        "options": ["Yes, if they have resided in India for 10 years","Only in local body elections","No, only citizens are entitled to vote under Art 326","Only if they have a PAN card"],
        "correctAnswerIndex": 2,
        "explanation": "Article 326 clearly restricts the voting right to citizens of India."
    },
    {
        "id": "ch81-l1-q115",
        "question": "Which Act currently regulates the",
        "options": ["Representation of the People Act, 1950","Representation of the People Act, 1951","The Delimitation Act, 2002","The Election Laws (Amendment) Act, 2021"],
        "correctAnswerIndex": 1,
        "explanation": "While the 1950 Act deals with electoral rolls and seats, the 1951 Act deals with the actual conduct of elections, qualifications/disqualifications, and political parties."
    },
    {
        "id": "ch81-l1-q116",
        "question": "The",
        "options": ["Elected members of both Houses of Parliament and State Assemblies","All members of Parliament and State Assemblies","Elected members of Lok Sabha only","Governors of all States"],
        "correctAnswerIndex": 0,
        "explanation": "The President is elected by an electoral college comprising elected members of Parliament and State Legislative Assemblies (and UTs of Delhi/Puducherry)."
    },
    {
        "id": "ch81-l1-q117",
        "question": "Is",
        "options": ["No","Yes","Only for those living in urban areas","Only for those above 60 years"],
        "correctAnswerIndex": 1,
        "explanation": "A citizen must be registered on the electoral roll of their constituency to be eligible to vote."
    },
    {
        "id": "ch81-l1-q118",
        "question": "Which official is responsible for the",
        "options": ["The District Magistrate","The Returning Officer","The Presiding Officer","The Electoral Registration Officer"],
        "correctAnswerIndex": 1,
        "explanation": "The Returning Officer (appointed by the EC) is responsible for conducting the election in a specific constituency."
    },
    {
        "id": "ch81-l1-q119",
        "question": "The power of",
        "options": ["Restricted only to counting of votes","Plenary (complete) and wide enough to cover all election-related activities","Subject to approval by the Home Ministry","Only for Parliamentary elections"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court has interpreted Article 324 as giving the EC broad and plenary powers to ensure free and fair elections."
    },
    {
        "id": "ch81-l1-q120",
        "question": "Which Article provides for the",
        "options": ["Article 324","Article 329","Article 326","Article 328"],
        "correctAnswerIndex": 1,
        "explanation": "Article 329(b) provides for the resolution of election disputes via election petitions."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch81-l2-q1",
        "question": "The expression",
        "options": ["Only administrative duties","Plenary power to deal with any situation for which no specific law exists","Powers limited only to counting of votes","Powers that must be approved by the Union Cabinet"],
        "correctAnswerIndex": 1,
        "explanation": "In Mohinder Singh Gill v. CEC (1978), the SC held that Art 324 is a reservoir of power for the EC to ensure free and fair elections where the law is silent."
    },
    {
        "id": "ch81-l2-q2",
        "question": "Which of the following matters is NOT covered under the",
        "options": ["Allocation of seats in the House of the People","Delimitation of constituencies","Preparation of electoral rolls","Conduct of elections and election offenses"],
        "correctAnswerIndex": 3,
        "explanation": "The RPA 1950 deals with seats, delimitation, and registration of voters. RPA 1951 deals with the actual"
    },
    {
        "id": "ch81-l2-q3",
        "question": "Regarding",
        "options": ["It was first introduced in India by the Act of 1909","It was a bold experiment by the makers of the Constitution despite mass illiteracy","It is restricted only to those who pay income tax","It applies only to the election of the Rajya Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "The introduction of universal adult franchise was considered a"
    },
    {
        "id": "ch81-l2-q4",
        "question": "The",
        "options": ["Cannot be questioned in any court","Can be revised by the President","Can be vetoed by the State Assemblies","Require approval of the Supreme Court"],
        "correctAnswerIndex": 0,
        "explanation": "Article 329(a) and the Delimitation Act ensure that delimitation orders are final and not subject to judicial review once published."
    },
    {
        "id": "ch81-l2-q5",
        "question": "Which of the following is a ground for",
        "options": ["Non-residence","Unsoundness of mind","Conviction for corrupt practices","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Article 326 (and relevant laws) allow for disqualification on grounds of non-residence, unsoundness of mind, crime, or corrupt/illegal practices."
    },
    {
        "id": "ch81-l2-q6",
        "question": "If a State Legislature makes a law regarding its own elections, it is subject to:",
        "options": ["Any law made by the Parliament on the same subject","The absolute veto of the Governor","Prior approval by the Supreme Court","Nothing, State Legislatures are supreme in their elections"],
        "correctAnswerIndex": 0,
        "explanation": "Article 328 provides power to State Legislatures"
    },
    {
        "id": "ch81-l2-q7",
        "question": "The",
        "options": ["Supreme Court","High Court of the respective State","District Court","Special Election Tribunal"],
        "correctAnswerIndex": 1,
        "explanation": "Since 1966, election petitions are heard by the High Courts (under RPA 1951), with a right of appeal to the Supreme Court."
    },
    {
        "id": "ch81-l2-q8",
        "question": "The",
        "options": ["2010","2020","2026","2031"],
        "correctAnswerIndex": 2,
        "explanation": "The 84th Amendment extended the freeze on the total number of seats in Lok Sabha and State Assemblies until 2026."
    },
    {
        "id": "ch81-l2-q9",
        "question": "Can",
        "options": ["Yes, it bars all court interference","No, Article 329 only bars challenging the","before results; after results, a petition can be filed","Only if the EC gives permission","Only for local body candidates"],
        "correctAnswerIndex": 1,
        "explanation": "The bar under Art 329 is against interference"
    },
    {
        "id": "ch81-l2-q10",
        "question": "In India, the",
        "options": ["List System","Cumulative Vote System","Single-member territorial constituency system","Plurality system with multi-member constituencies"],
        "correctAnswerIndex": 2,
        "explanation": "India is divided into single-member territorial constituencies where each constituency elects one representative."
    },
    {
        "id": "ch81-l2-q11",
        "question": "The",
        "options": ["Ministry of Law","The Parliament","The Election Commission","The President"],
        "correctAnswerIndex": 2,
        "explanation": "The MCC is issued by the EC to ensure free and fair elections and comes into force the moment elections are announced."
    },
    {
        "id": "ch81-l2-q12",
        "question": "Does the",
        "options": ["Yes, explicitly mentioned in RPA 1951","No, the power of deregistration has been a subject of legal debate and is not clearly provided for most violations","Only for parties with less than 1% vote","Only if authorized by the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "While the EC can"
    },
    {
        "id": "ch81-l2-q13",
        "question": "What is the status of the",
        "options": ["Fundamental Right","Statutory Right (provided by law)","Constitutional Right only","Natural Right"],
        "correctAnswerIndex": 1,
        "explanation": "The SC (N.P. Ponnuswami and other cases) held that the right to vote is a"
    },
    {
        "id": "ch81-l2-q14",
        "question": "Which of the following is NOT a duty of the",
        "options": ["Superintendence of elections to Parliament","Superintendence of elections to Municipalities and Panchayats","Superintendence of elections to State Legislatures","Superintendence of elections for President/Vice-President"],
        "correctAnswerIndex": 1,
        "explanation": "Elections to Panchayats and Municipalities are handled by the"
    },
    {
        "id": "ch81-l2-q15",
        "question": "The",
        "options": ["Representation of the People Act, 1950","Representation of the People Act, 1951","Delimitation Act, 2002","Anti-Defection Act"],
        "correctAnswerIndex": 0,
        "explanation": "The RPA 1950 provides the detailed mechanism for the registration of electors and the preparation of electoral rolls."
    },
    {
        "id": "ch81-l2-q16",
        "question": "The 61st Amendment Act (1988) was passed by the Parliament. Did it require",
        "options": ["No, simple majority was enough","Yes, because it amended Article 326","Only if the President requested","Only for Jammu and Kashmir"],
        "correctAnswerIndex": 1,
        "explanation": "Amendments to Chapter XV (Elections) that affect the Representation of the People generally require state ratification if they change the core electoral rights/mechanism defined in the Constitution."
    },
    {
        "id": "ch81-l2-q17",
        "question": "Can a person be registered as a voter in",
        "options": ["Yes, if they have property in both","No, only in one constituency where they are","","Yes, for Lok Sabha but not for Assembly","Only if they are a Gazetted Officer"],
        "correctAnswerIndex": 1,
        "explanation": "Under the RPA 1950, no person is entitled to be registered in more than one constituency or more than once in the same constituency."
    },
    {
        "id": "ch81-l2-q18",
        "question": "The",
        "options": ["The State Government","The Election Commission of India","The President","The District Magistrate"],
        "correctAnswerIndex": 1,
        "explanation": "The ERO is designated/nominated by the ECI in consultation with the State Government."
    },
    {
        "id": "ch81-l2-q19",
        "question": "Is the",
        "options": ["No","Yes, the SC held it to be a part of the Right to Freedom of Speed (Art 19)","Only for graduates","Only for Rajya Sabha elections"],
        "correctAnswerIndex": 1,
        "explanation": "In Union of India v. Association for Democratic Reforms (2002), the SC held that voters have a right to know the background of candidates."
    },
    {
        "id": "ch81-l2-q20",
        "question": "A",
        "options": ["Free supply of electoral rolls","Broadcast/Telecast facilities on state media","Exclusive allotment of a reserved symbol","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Recognized parties (National and State) get several benefits like reserved symbols, free electoral rolls, and media time."
    },
    {
        "id": "ch81-l2-q21",
        "question": "Regarding",
        "options": ["Crime","Corrupt Practice","Illiteracy","Illegal Practice"],
        "correctAnswerIndex": 2,
        "explanation": "Illiteracy is not a ground for disqualification. Only non-residence, unsoundness of mind, crime, or corrupt/illegal practices are mentioned."
    },
    {
        "id": "ch81-l2-q22",
        "question": "The",
        "options": ["The Election Commission directly","The Returning Officer (RO)","The District Election Officer (DEO)","The Governor"],
        "correctAnswerIndex": 2,
        "explanation": "The District Election Officer appoints the Presiding Officer and Polling Officers for each booth."
    },
    {
        "id": "ch81-l2-q23",
        "question": "Which of the following is responsible for preparing and updating",
        "options": ["The Election Commission (through EROs)","The Home Ministry","The Census Commissioner","The District Magistrate (solely)"],
        "correctAnswerIndex": 0,
        "explanation": "Preparation of electoral rolls is a core function of the EC, performed via Electoral Registration Officers."
    },
    {
        "id": "ch81-l2-q24",
        "question": "When a",
        "options": ["Within 1 month","Within 6 months","Any time before the next general election","Within 1 year"],
        "correctAnswerIndex": 1,
        "explanation": "A by-election to fill a vacancy must be held within 6 months of the occurrence of the vacancy (unless the remainder of the term is less than 1 year)."
    },
    {
        "id": "ch81-l2-q25",
        "question": "The",
        "options": ["ADR Case","Lily Thomas Case","PUCL v. Union of India (2013)","Shreya Singhal Case"],
        "correctAnswerIndex": 2,
        "explanation": "The PUCL v. Union of India case led to the SC directing the EC to provide a NOTA option on EVMs."
    },
    {
        "id": "ch81-l2-q26",
        "question": "Can a person contest a Lok Sabha election from",
        "options": ["Yes","No, only maximum of 2 constituencies (under RPA 1951)","No, only 1 constituency","Only if they are an independent candidate"],
        "correctAnswerIndex": 1,
        "explanation": "Section 33 of RPA 1951 restricts a candidate to contesting from a maximum of two constituencies in a single general election."
    },
    {
        "id": "ch81-l2-q27",
        "question": "The",
        "options": ["Count votes faster","Verify that the vote cast by a voter has gone to the intended candidate","Allow voters to take the slip home","Replace EVMs"],
        "correctAnswerIndex": 1,
        "explanation": "VVPAT provides a physical verification method for voters to see their cast vote on a paper slip before it falls into a sealed box."
    },
    {
        "id": "ch81-l2-q28",
        "question": "Who assesses the",
        "options": ["The Parliament","The Central Government (Ministry of Law)","The Election Commission","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The expenditure limits are prescribed by the Central Government via a notification, based on the recommendation of the EC."
    },
    {
        "id": "ch81-l2-q29",
        "question": "Article 324 applies to the",
        "options": ["President and Vice-President","Governor and Chief Minister","CAG and Attorney General","District Judges"],
        "correctAnswerIndex": 0,
        "explanation": "ECI conducts elections to Parliament, State Legislatures, and the President and Vice-President offices."
    },
    {
        "id": "ch81-l2-q30",
        "question": "In the",
        "options": ["It makes Article 329 void","It means that High Court","It has no effect","It allows judges to skip voting"],
        "correctAnswerIndex": 1,
        "explanation": "While Art 329 bars interference"
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch81-l3-q1",
        "question": "Assertion (A): The power of",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 2,
        "explanation": "While Art 324 is a reservoir of power, it cannot be exercised in a manner contrary to a valid law passed by Parliament. It only operates where the law is silent."
    },
    {
        "id": "ch81-l3-q2",
        "question": "Which of the following describes the Supreme Court",
        "options": ["Voters have a","to know the criminal, educational, and financial background of candidates under Article 19(1)(a)","Background disclosure is a","only","Disclosure is optional for cabinet ministers","Disclosure is required only for candidates with pending FIRs"],
        "correctAnswerIndex": 0,
        "explanation": "The SC held that the right to get information about the background of candidates is a part of the freedom of expression under Art 19(1)(a)."
    },
    {
        "id": "ch81-l3-q3",
        "question": "In",
        "options": ["Article 329(a) completely bars judicial review of delimitation orders once they are published in the Gazette","The order was signed by the President","The error was only in the language translation","The petitioner was not a citizen"],
        "correctAnswerIndex": 0,
        "explanation": "The Court held that the order has the"
    },
    {
        "id": "ch81-l3-q4",
        "question": "Consider the following statements regarding",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 3 is incorrect: The SC has held that the right to vote/register is a"
    },
    {
        "id": "ch81-l3-q5",
        "question": "The 104th Constitutional Amendment Act (2019) has modified which of the following?",
        "options": ["Article 330 and 332 only","Article 331 and 333 (by not extending the nomination of Anglo-Indians)","Article 324 (Election Commission composition)","Article 326 (Voting age)"],
        "correctAnswerIndex": 1,
        "explanation": "The 104th Amendment did not extend the reservation for Anglo-Indians (Art 331/333) beyond 2020, while extending SC/ST reservations."
    },
    {
        "id": "ch81-l3-q6",
        "question": "Regarding",
        "options": ["Special Tribunals have exclusive jurisdiction","High Courts have original jurisdiction and Supreme Court has appellate jurisdiction","Only the Election Commission can decide election challenges","The President has absolute power to decide disputes"],
        "correctAnswerIndex": 1,
        "explanation": "Before 1966, disputes were settled by Tribunals. Since then, the High Courts hear election petitions under the Representation of the People Act, 1951."
    },
    {
        "id": "ch81-l3-q7",
        "question": "With reference to the",
        "options": ["The Home Ministry","The Election Commission under Article 324","The Prime Minister","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The EC has plenary powers under Art 324 to postpone or cancel polls in any booth or constituency in extreme situations for free and fair polls."
    },
    {
        "id": "ch81-l3-q8",
        "question": "Can a person be disqualified for",
        "options": ["Yes, Article 326 provides for this disqualification","No, only non-citizens are disqualified","Only if they have a criminal record","Only for NRIs"],
        "correctAnswerIndex": 0,
        "explanation": "Article 326 mentions"
    },
    {
        "id": "ch81-l3-q9",
        "question": "The",
        "options": ["Linking Electoral Roll data with Aadhaar ecosystem","Reducing the cooling-off period for bureaucrats","Allowing proxy voting for overseas citizens","Reducing election expenses limit"],
        "correctAnswerIndex": 0,
        "explanation": "The 2021 Act allowed for the linking of Aadhaar to voter IDs on a voluntary basis to curb duplicate entries."
    },
    {
        "id": "ch81-l3-q10",
        "question": "If a law made by",
        "options": ["The State law, as it","The Parliamentary law prevails as State power is","Parliament","The Governor decides","Both are void to the extent of conflict"],
        "correctAnswerIndex": 1,
        "explanation": "Article 328 explicitly states that the state"
    },
    {
        "id": "ch81-l3-q11",
        "question": "In the",
        "options": ["Refuse to hold elections if it determines that a free and fair poll is not possible","Extend the Governor","Convert a State into a UT","Bypass the 6-month rule of Article 174 in extreme circumstances"],
        "correctAnswerIndex": 0,
        "explanation": "The SC held that the mandate of Art 324 is to ensure"
    },
    {
        "id": "ch81-l3-q12",
        "question": "What is the legal effect of",
        "options": ["The nomination is void","It doesn","The candidate must pay a fine","The person is barred for 6 years"],
        "correctAnswerIndex": 1,
        "explanation": "Once a person"
    },
    {
        "id": "ch81-l3-q13",
        "question": "Can",
        "options": ["Yes, ECI issues instructions for","and exit polls","No, ECI only controls state media (AIR/Doordarshan)","Only for international channels","Only with CBI approval"],
        "correctAnswerIndex": 0,
        "explanation": "ECI uses its plenary powers and the RPA 1951 to regulate exit polls and media conduct to prevent undue influence."
    },
    {
        "id": "ch81-l3-q14",
        "question": "Regarding",
        "options": ["Purely executive","Purely legislative and can be delegated to a Commission","Judicial in nature","Consultative only"],
        "correctAnswerIndex": 1,
        "explanation": "Districting and seat allocation are legislative functions. Parliament delegates this to the Delimitation Commission."
    },
    {
        "id": "ch81-l3-q15",
        "question": "In",
        "options": ["Only the final counting","The entire process starting from notification to the declaration of result","Only the polling day activities","Only the registration of voters"],
        "correctAnswerIndex": 1,
        "explanation": "The SC gave a wide meaning to"
    },
    {
        "id": "ch81-l3-q16",
        "question": "The",
        "options": ["Article 83 and 172 only","Article 356 only","Article 83, 85, 172, 174, and 356","Article 1 and 2"],
        "correctAnswerIndex": 2,
        "explanation": "Simultaneous elections require synchronizing the terms of Lok Sabha and State Assemblies, affecting articles related to duration and dissolution of houses, as well as President"
    },
    {
        "id": "ch81-l3-q17",
        "question": "In France,",
        "options": ["PR is too simple for the Indian voter","FPTP ensures a stable government by giving a clear majority to the largest party","PR is against the basic structure","FPTP was forced by the British"],
        "correctAnswerIndex": 1,
        "explanation": "PR often leads to fragmented legislatures and coalition instability. FPTP was chosen for its simplicity and the likelihood of forming stable governments."
    },
    {
        "id": "ch81-l3-q18",
        "question": "Regarding",
        "options": ["Yes, under Art 324","No, the power of disqualification on grounds of defection vests in the Speaker or Chairperson","Only if authorized by the PM","Only if the member is a Minister"],
        "correctAnswerIndex": 1,
        "explanation": "While ECI handles"
    },
    {
        "id": "ch81-l3-q19",
        "question": "The",
        "options": ["Kerala","Nagaland (Noksen constituency)","Gujarat","Delhi"],
        "correctAnswerIndex": 1,
        "explanation": "VVPAT was first used in the 2013 by-election in the Noksen assembly constituency of Nagaland."
    },
    {
        "id": "ch81-l3-q20",
        "question": "Condition (C): To ensure the",
        "options": ["The CEC can only be removed in the same manner as a SC Judge","The conditions of service of the CEC cannot be varied to his disadvantage after appointment","Other Election Commissioners cannot be removed except on the recommendation of the CEC","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Article 324(5) provides these constitutional safeguards to the CEC and other commissioners."
    },
    {
        "id": "ch81-l3-q21",
        "question": "If a person is convicted for an offense and sentenced to imprisonment for",
        "options": ["2 years","6 years","Indefinitely","1 year"],
        "correctAnswerIndex": 1,
        "explanation": "Under Section 8(3) of the RPA 1951, a person is disqualified for the period of imprisonment plus a further period of 6 years from their release."
    },
    {
        "id": "ch81-l3-q22",
        "question": "The",
        "options": ["Yes, it is only a moral code","No, EC can use its plenary powers under Article 324 to punish violators or suspend their campaign","It is only enforceable with the help of the local police","It can only be enforced by a High Court order"],
        "correctAnswerIndex": 1,
        "explanation": "The SC has repeatedly upheld the EC"
    },
    {
        "id": "ch81-l3-q23",
        "question": "Can",
        "options": ["No, MCC is not a law","Yes, because most MCC prohibitions reflect corrupt practices defined in the RPA 1951","Only for Parliamentary elections","Only if the President is a witness"],
        "correctAnswerIndex": 1,
        "explanation": "While the code itself is non-statutory, its content overlaps with"
    },
    {
        "id": "ch81-l3-q24",
        "question": "Which Article provides that",
        "options": ["Article 325","Article 326","Article 329","Article 13"],
        "correctAnswerIndex": 2,
        "explanation": "Article 329 provides a bar to interference by courts in electoral matters including rolls (as part of the election process)."
    },
    {
        "id": "ch81-l3-q25",
        "question": "The 1045th Amendment has been a typo in many mocks, but the",
        "options": ["Anglo-Indians are no longer a minority","Anglo-Indians have achieved adequate representation and their population has decreased substantially","It was recommended by the CAG","It was a part of the GST council"],
        "correctAnswerIndex": 1,
        "explanation": "The government"
    },
    {
        "id": "ch81-l3-q26",
        "question": "The",
        "options": ["Purely Administrative","Quasi-judicial","Purely Executive","Purely Ministerial"],
        "correctAnswerIndex": 1,
        "explanation": "Handling objections and determining voter eligibility involves a quasi-judicial process where evidence is evaluated."
    },
    {
        "id": "ch81-l3-q27",
        "question": "If a person",
        "options": ["Yes, the ERO can remove them even on polling day","No, once the name is in the","roll, they are eligible to vote; the entry can only be challenged post-result","Only if the Presiding Officer is a lawyer","Only in Lok Sabha elections"],
        "correctAnswerIndex": 1,
        "explanation": "The electoral roll is generally conclusive for the purpose of the polling day; any defect must be raised during the revision phase or post-election."
    },
    {
        "id": "ch81-l3-q28",
        "question": "Does",
        "options": ["No","Yes, if the Parliament is dissolved","Only with SC permission","Only for Part XV"],
        "correctAnswerIndex": 0,
        "explanation": "Constitutional amendments are purely legislative functions under Article 368. ECI has no such power."
    },
    {
        "id": "ch81-l3-q29",
        "question": "Is the",
        "options": ["Yes","No, Article 329(a) overrides other provisions to protect the finality of delimitation","Only if it violates basic structure","Only if the President requests"],
        "correctAnswerIndex": 1,
        "explanation": "Article 329(a) provides a specific and absolute bar against judicial review of delimitation laws/orders."
    },
    {
        "id": "ch81-l3-q30",
        "question": "The",
        "options": ["Elected members of State Legislative Assemblies","Elected members of State Legislative Councils","Elected and Nominated members of State Assemblies","The people directly"],
        "correctAnswerIndex": 0,
        "explanation": "Only the *elected* members of the State Legislative Assemblies choose the Rajya Sabha members."
    }
];

export const CHAPTER_81_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
