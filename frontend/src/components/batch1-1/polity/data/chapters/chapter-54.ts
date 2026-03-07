import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch54-l1-q1",
        "question": "Which Article of the Constitution of India provides for the establishment of the National Commission for Scheduled Castes?",
        "options": ["Article 330","Article 332","Article 338","Article 338A"],
        "correctAnswerIndex": 2,
        "explanation": "Article 338 of the Constitution deal with the National Commission for Scheduled Castes. Article 338A deals with NCST."
    },
    {
        "id": "ch54-l1-q2",
        "question": "Initially, the Constitution provided for a",
        "options": ["42nd Amendment Act","65th Amendment Act","89th Amendment Act","102nd Amendment Act"],
        "correctAnswerIndex": 1,
        "explanation": "The 65th Constitutional Amendment Act of 1990 provided for the establishment of a high-level multi-member National Commission for SCs and STs."
    },
    {
        "id": "ch54-l1-q3",
        "question": "Which Amendment Act bifurcated the combined National Commission for SCs and STs into two separate bodies?",
        "options": ["65th Amendment Act","89th Amendment Act","92nd Amendment Act","101st Amendment Act"],
        "correctAnswerIndex": 1,
        "explanation": "The 89th Constitutional Amendment Act of 2003 bifurcated the combined National Commission for SCs and STs into two separate bodies, namely, NCSC (Article 338) and NCST (Article 338A)."
    },
    {
        "id": "ch54-l1-q4",
        "question": "The National Commission for Scheduled Castes consists of a Chairperson, a Vice-Chairperson, and how many other members?",
        "options": ["Two","Three","Four","Five"],
        "correctAnswerIndex": 1,
        "explanation": "The NCSC consists of a chairperson, a vice-chairperson and three other members."
    },
    {
        "id": "ch54-l1-q5",
        "question": "The Chairperson, Vice-Chairperson, and members of the NCSC are appointed by:",
        "options": ["The Prime Minister","The President of India","The Minister of Social Justice and Empowerment","The Speaker of the Lok Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "They are appointed by the President by warrant under his hand and seal."
    },
    {
        "id": "ch54-l1-q6",
        "question": "The conditions of service and tenure of office of the NCSC members are determined by:",
        "options": ["The Parliament","The President","The Ministry of Social Justice","The UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "The conditions of service and tenure of office of the chairperson, vice-chairperson and other members are determined by the President."
    },
    {
        "id": "ch54-l1-q7",
        "question": "To whom does the NCSC submit its annual report?",
        "options": ["The Parliament","The President","The Prime Minister","The Governor of the respective state"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission presents an annual report to the President. It can also submit a report as and when it thinks necessary."
    },
    {
        "id": "ch54-l1-q8",
        "question": "The Commission is also required to discharge functions in relation to which other community, as per its historical constitutional mandate?",
        "options": ["Other Backward Classes (OBCs)","Anglo-Indians","Religious Minorities","Both (a) and (b)"],
        "correctAnswerIndex": 3,
        "explanation": "Historically, the Commission was required to discharge similar functions with regard to the other backward classes (OBCs) and the Anglo-Indian Community as it does with respect to the SCs."
    },
    {
        "id": "ch54-l1-q9",
        "question": "Which Amendment Act relieved the NCSC from the responsibility of looking after the Other Backward Classes (OBCs)?",
        "options": ["101st Amendment Act","102nd Amendment Act","103rd Amendment Act","105th Amendment Act"],
        "correctAnswerIndex": 1,
        "explanation": "The 102nd Amendment Act of 2018 established a separate National Commission for Backward Classes (NCBC), thus relieving NCSC of its functions regarding OBCs."
    },
    {
        "id": "ch54-l1-q10",
        "question": "The Commission has the power to regulate its own procedure.",
        "options": ["True, as provided under Article 338(4)","False, procedures are set by the Ministry","True, but only with the consent of the Chief Justice","False, Parliament regulates its procedure"],
        "correctAnswerIndex": 0,
        "explanation": "Article 338(4) of the Constitution states that the Commission shall have the power to regulate its own procedure."
    },
    {
        "id": "ch54-l1-q11",
        "question": "The term of office for the members of NCSC is usually set at ______ years.",
        "options": ["3","5","6","Till the pleasure of the President"],
        "correctAnswerIndex": 0,
        "explanation": "According to the rules, the Chairperson, Vice-Chairperson and every other Member shall hold office for a term of three years."
    },
    {
        "id": "ch54-l1-q12",
        "question": "Which of the following describes the rank of the Chairperson of the NCSC?",
        "options": ["Equivalent to a Secretary to the GOI","Equivalent to a Cabinet Minister of the Union","Equivalent to a Minister of State","Equivalent to a Judge of the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Chairperson of the NCSC is given the rank of a Cabinet Minister of the Union."
    },
    {
        "id": "ch54-l1-q13",
        "question": "The Vice-Chairperson of the NCSC has the rank of:",
        "options": ["Cabinet Minister","Minister of State","Secretary to the GOI","Chief Justice"],
        "correctAnswerIndex": 1,
        "explanation": "The Vice-Chairperson is given the rank of a Minister of State."
    },
    {
        "id": "ch54-l1-q14",
        "question": "The other three members of the NCSC have the rank of:",
        "options": ["Cabinet Minister","Minister of State","Secretary to the Government of India","Joint Secretary"],
        "correctAnswerIndex": 2,
        "explanation": "The other members are given the rank of Secretary to the Government of India."
    },
    {
        "id": "ch54-l1-q15",
        "question": "The salary and allowances of the Chairperson and Members are paid from:",
        "options": ["Consolidated Fund of India","Contingency Fund of India","Budget of the Ministry of Social Justice","Public Account of India"],
        "correctAnswerIndex": 2,
        "explanation": "The expenditure is met from the budget of the Department of Social Justice and Empowerment."
    },
    {
        "id": "ch54-l1-q16",
        "question": "The NCSC is required to investigate all matters relating to the safeguards provided for SCs under:",
        "options": ["The Constitution only","Any other law for the time being in force","Any order of the Government","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "The Commission"
    },
    {
        "id": "ch54-l1-q17",
        "question": "Can the NCSC take up a case of",
        "options": ["Yes, it has suo-moto powers","No, a complaint must be filed by the victim","Only if the Governor orders","Only if the Supreme Court allows"],
        "correctAnswerIndex": 0,
        "explanation": "The Commission can investigate matters on its own motion (suo-moto)."
    },
    {
        "id": "ch54-l1-q18",
        "question": "The NCSC report is laid before the Parliament by:",
        "options": ["The Chairperson of the Commission","The President of India","The Prime Minister","The Speaker of the Lok Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "The President causes all such reports to be laid before each House of Parliament."
    },
    {
        "id": "ch54-l1-q19",
        "question": "If a report relates to a State, it is forwarded to the ______ of that state.",
        "options": ["Chief Minister","Governor","Speaker","High Court"],
        "correctAnswerIndex": 1,
        "explanation": "The President forwards any report relating to a State Government to the Governor of the state."
    },
    {
        "id": "ch54-l1-q20",
        "question": "The Governor causes the NCSC state-related report to be laid before:",
        "options": ["The Lok Sabha","The State Legislature","The District Court","The High Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Governor causes the report to be laid before the State Legislature."
    },
    {
        "id": "ch54-l1-q21",
        "question": "Is the NCSC",
        "options": ["Yes, absolutely","No, they are recommendatory in nature","Only if passed by the Cabinet","Only if approved by the CJI"],
        "correctAnswerIndex": 1,
        "explanation": "The recommendations of the Commission are advisory and not binding on the Government."
    },
    {
        "id": "ch54-l1-q22",
        "question": "Which of the following is a power of the NCSC while investigating?",
        "options": ["Power to arrest the culprit","Power to summon and enforce the attendance of any person","Power to dismiss a government employee","Power to change the reservation policy"],
        "correctAnswerIndex": 1,
        "explanation": "While investigating, the NCSC has the powers of a civil court, including summoning persons."
    },
    {
        "id": "ch54-l1-q23",
        "question": "The NCSC has the power to receive evidence on:",
        "options": ["Paper only","Affidavits","Video call only","Oral testimony only"],
        "correctAnswerIndex": 1,
        "explanation": "As it has civil court powers, it can receive evidence on affidavits."
    },
    {
        "id": "ch54-l1-q24",
        "question": "Can the NCSC require the discovery and production of any",
        "options": ["Yes","No","Only from the Prime Minister","Only from private companies"],
        "correctAnswerIndex": 0,
        "explanation": "Yes, it has the power to require the discovery and production of any document."
    },
    {
        "id": "ch54-l1-q25",
        "question": "The mandate to consult the NCSC on major policy matters affecting SCs is found in:",
        "options": ["Article 338(1)","Article 338(9)","Article 330","Article 341"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338(9) mandates that the Union and every State Government shall consult the Commission on all major policy matters affecting Scheduled Castes."
    },
    {
        "id": "ch54-l1-q26",
        "question": "The NCSC still looks after the safeguards of which community (other than SCs)?",
        "options": ["OBCs","Anglo-Indians","Jains","Parsi"],
        "correctAnswerIndex": 1,
        "explanation": "While OBCs now have their own commission (NCBC), the NCSC still monitors safeguards for the Anglo-Indian community."
    },
    {
        "id": "ch54-l1-q27",
        "question": "When was the 89th Constitutional Amendment Act enacted (bifurcation year)?",
        "options": ["2002","2003","2004","2005"],
        "correctAnswerIndex": 1,
        "explanation": "The 89th Amendment was passed in 2003, and the separate commissions came into existence in 2004."
    },
    {
        "id": "ch54-l1-q28",
        "question": "The NCSC is headquartered in:",
        "options": ["Mumbai","New Delhi","Lucknow","Hyderabad"],
        "correctAnswerIndex": 1,
        "explanation": "The main office/headquarters of the NCSC is in New Delhi."
    },
    {
        "id": "ch54-l1-q29",
        "question": "The NCSC has regional offices across India. How many are there approximately?",
        "options": ["5","12","20","28"],
        "correctAnswerIndex": 1,
        "explanation": "The NCSC has 12 regional offices located across different states."
    },
    {
        "id": "ch54-l1-q30",
        "question": "The NCSC is a ______ body.",
        "options": ["Statutory","Executive","Constitutional","Judicial"],
        "correctAnswerIndex": 2,
        "explanation": "It is established under Article 338, making it a constitutional body."
    },
    {
        "id": "ch54-l1-q31",
        "question": "While investigating any matter or inquiring into any complaint, the NCSC has all the powers of a:",
        "options": ["Criminal Court","Civil Court trying a suit","High Court","Sessions Court"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338(8) specifies that the Commission shall, while investigating any matter, have all the powers of a civil court trying a suit."
    },
    {
        "id": "ch54-l1-q32",
        "question": "Which of the following powers does the NCSC possess while investigating a case?",
        "options": ["Summoning and enforcing the attendance of any person from any part of India","Requiring the discovery and production of any document","Receiving evidence on affidavits","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "The Commission"
    },
    {
        "id": "ch54-l1-q33",
        "question": "When the President receives the NCSC",
        "options": ["The names of all the complainants","The action taken or proposed to be taken on the recommendations and the reasons for non-acceptance, if any","The budget spent by the Commission in the last decade","The political affiliations of the members"],
        "correctAnswerIndex": 1,
        "explanation": "The memorandum must explain the action taken and, pivotally, the reasons for rejecting any recommendations."
    },
    {
        "id": "ch54-l1-q34",
        "question": "If a recommendation of the NCSC relates to a",
        "options": ["The Chief Minister","The Governor of that State","The High Court","The State Legislative Assembly directly"],
        "correctAnswerIndex": 1,
        "explanation": "Reports concerning state matters are sent to the Governor, who then places them before the State Legislature."
    },
    {
        "id": "ch54-l1-q35",
        "question": "The Central and State Governments are required to consult the NCSC on:",
        "options": ["All major policy matters affecting Scheduled Castes","The appointment of the Director General of Police","The selection of candidates for UPSC through a special committee","The declaration of a National Emergency"],
        "correctAnswerIndex": 0,
        "explanation": "Article 338(9) mandates consultation on all major policy matters affecting the community."
    },
    {
        "id": "ch54-l1-q36",
        "question": "Does the Commission have the power to",
        "options": ["Yes, it can award up to 3 years of imprisonment","No, it can only investigate and recommend action; adjudication and punishment are the domain of the judiciary","Yes, but only in Union Territories","No, it can only impose financial fines"],
        "correctAnswerIndex": 1,
        "explanation": "The NCSC is an investigatory and advisory body, not a judicial body. It cannot pass sentences; it can only recommend prosecution to the appropriate authorities."
    },
    {
        "id": "ch54-l1-q37",
        "question": "The NCSC",
        "options": ["Investigating all matters relating to the safeguards provided for them","Reporting to the President upon the working of those safeguards","Advising on the socio-economic development of Anglo-Indians","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Article 338(10) extends all the functions of the Commission regarding SCs to the Anglo-Indian community as well."
    },
    {
        "id": "ch54-l1-q38",
        "question": "The primary function of the NCSC is to act as a",
        "options": ["The economic interests of the Union government","The legal and constitutional safeguards of the Scheduled Castes","The implementation of the GST across states","The reservation of seats in the Rajya Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "The NCSC is the watchdog for the Constitutional and tribal/legal rights of the Scheduled Castes."
    },
    {
        "id": "ch54-l1-q39",
        "question": "If the Government rejects a recommendation of the NCSC, the",
        "options": ["A letter of apology from the Minister","The reasons for such non-acceptance","A dissenting note from the Opposition parties","A certificate of validation from the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Mandatory transparency: any rejection must be justified to the legislature."
    },
    {
        "id": "ch54-l1-q40",
        "question": "Which Ministry is the",
        "options": ["Ministry of Home Affairs","Ministry of Social Justice and Empowerment","Ministry of Tribal Affairs","Ministry of Law and Justice"],
        "correctAnswerIndex": 1,
        "explanation": "The NCSC works under the administrative control of the Ministry of Social Justice and Empowerment."
    },
    {
        "id": "ch54-l1-q41",
        "question": "The Commission is required to",
        "options": ["The planning process of socio-economic development of the SCs","The selection of the President of India","The drafting of the Union Budget","The foreign policy of India"],
        "correctAnswerIndex": 0,
        "explanation": "It is a key developmental function where the Commission helps in planning for the upliftment of the community."
    },
    {
        "id": "ch54-l1-q42",
        "question": "The",
        "options": ["Any public record or copy thereof from any court or office","The keys to the RBI vault","The classified nuclear codes","The personal bank statements of all citizens"],
        "correctAnswerIndex": 0,
        "explanation": "It can requisition public records relevant to its investigations from any government office."
    },
    {
        "id": "ch54-l1-q43",
        "question": "The",
        "options": ["Reducing the salary of members","Handling the distinct and geographically separate problems of SCs and STs with more focused attention","Abolishing the reservation system","Creating more government jobs in Delhi"],
        "correctAnswerIndex": 1,
        "explanation": "Since SCs and STs face different socio-legal challenges, separate commissions were created for specialized focus."
    },
    {
        "id": "ch54-l1-q44",
        "question": "Which of the following describes the",
        "options": ["5 years or until 65 years of age","3 years with no specific age limit mentioned in the Constitution","6 years or until 70 years of age","Fixed at 2 years"],
        "correctAnswerIndex": 1,
        "explanation": "The President determines the tenure, and the current rules specify a 3-year term for the chairperson and members."
    },
    {
        "id": "ch54-l1-q45",
        "question": "Can a member of the NCSC be re-appointed?",
        "options": ["No, only one term is permitted","Yes, but they are not eligible for appointment for more than two terms","Yes, they can be re-appointed indefinitely","Only the Chairperson can be re-appointed"],
        "correctAnswerIndex": 1,
        "explanation": "The rules specify that a person is eligible for appointment for a maximum of two terms."
    },
    {
        "id": "ch54-l1-q46",
        "question": "The NCSC can",
        "options": ["Land rights and service matters only","Constitutional and legal safeguards for SCs","Political rights only","Housing rights only"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission"
    },
    {
        "id": "ch54-l1-q47",
        "question": "Is the NCSC required to give",
        "options": ["No, it can land anytime","Yes, to the state administration as a matter of protocol and to ensure cooperation","Only if visiting a tribal area","Only if the PMO permits"],
        "correctAnswerIndex": 1,
        "explanation": "While it has investigative power, it usually coordinates with the state government for logistics and access to records."
    },
    {
        "id": "ch54-l1-q48",
        "question": "Which of the following is NOT a duty of the NCSC?",
        "options": ["To report on the working of safeguards","To allocate the SC sub-plan budget directly to the state governments","To advise on planning for socio-economic development","To inquire into specific complaints"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission advises on planning but does not have the executive power to"
    },
    {
        "id": "ch54-l1-q49",
        "question": "Regarding the 102nd Amendment Act (2018), which community",
        "options": ["Minorities","Other Backward Classes (OBCs)","Anglo-Indians","Women"],
        "correctAnswerIndex": 1,
        "explanation": "The 102nd Amendment Act established the NCBC (National Commission for Backward Classes) as a constitutional body, taking over OBC-related functions from NCSC."
    },
    {
        "id": "ch54-l1-q50",
        "question": "The NCSC",
        "options": ["The Code of Civil Procedure 1908","The Constitution of India (Article 338)","The National Commission for SCs Act","An Executive Order"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution itself (Article 338-8) grants these powers to the Commission to ensure it can function effectively."
    },
    {
        "id": "ch54-l1-q51",
        "question": "In the case of service-related grievances (e.g., promotions), what can the NCSC do?",
        "options": ["Issue a stay order on promotions","Direct the department to promote a specific person","Investigate the grievance and recommend corrective action to the department","Dismiss the departmental head"],
        "correctAnswerIndex": 2,
        "explanation": "The Commission can investigate systemic bias or specific discrimination in services and recommend remedies, which the department is expected (though not legally forced) to follow."
    },
    {
        "id": "ch54-l1-q52",
        "question": "The 65th Constitutional Amendment (1990) did what to the",
        "options": ["Abolished it entirely","Transformed the single-member post into a high-level multi-member commission","Made it a judicial post","Limited its tenure to 1 year"],
        "correctAnswerIndex": 1,
        "explanation": "It upgraded the mechanism from a"
    },
    {
        "id": "ch54-l1-q53",
        "question": "What does the NCSC do if a State Governor refuses to lay its report before the legislature?",
        "options": ["The Chairperson can dissolve the legislature","The matter is reported to the President and discussed at the highest levels of cooperative federalism","The Commission can move the Supreme Court to mandate it","Nothing, they have no power"],
        "correctAnswerIndex": 1,
        "explanation": "Since it"
    },
    {
        "id": "ch54-l1-q54",
        "question": "The term",
        "options": ["Article 338","Article 341","Article 366(24)","Article 342"],
        "correctAnswerIndex": 2,
        "explanation": "Article 366(24) contains the definition, while Article 341 contains the process of notifying the list of SCs."
    },
    {
        "id": "ch54-l1-q55",
        "question": "What is the NCSC",
        "options": ["The NCSC has the power to implement it","The NCSC is generally the forum where such policy shifts (like the recent SC judgment on sub-classification and creamy layer) are debated and implemented through government consultation","The NCSC is barred from the creamy layer discussion","Only the PM decides it"],
        "correctAnswerIndex": 1,
        "explanation": "As the constitutional advisory body, the NCSC is at the center of such vital policy shifts involving SC rights."
    },
    {
        "id": "ch54-l1-q56",
        "question": "The NCSC can",
        "options": ["Only the victims","Any person from any part of India (including high-ranking officials)","Only private company owners","Only individuals living in Delhi"],
        "correctAnswerIndex": 1,
        "explanation": "Its jurisdiction is national; it can summon any citizen or official to give evidence."
    },
    {
        "id": "ch54-l1-q57",
        "question": "Which of the following describes the relationship between NCSC and the courts?",
        "options": ["The NCSC is superior to the High Court","The NCSC performs functions that help the courts by investigating ground-level facts, but its findings are subject to judicial review","The courts cannot interfere with NCSC","The NCSC has no legal standing"],
        "correctAnswerIndex": 1,
        "explanation": "While it has civil court powers for"
    },
    {
        "id": "ch54-l1-q58",
        "question": "The",
        "options": ["The Ombudsman","The Commissioner for SCs and STs","The Advocate General","The Guardian of Tribes"],
        "correctAnswerIndex": 1,
        "explanation": "Before the 65th amendment, the officer was designated as the Commissioner for SCs and STs."
    },
    {
        "id": "ch54-l1-q59",
        "question": "The NCSC",
        "options": ["Giving land to everyone","Investigating cases of illegal land alienation or denial of land distribution to SC families","Regulating the stock market","Abolishing agriculture"],
        "correctAnswerIndex": 1,
        "explanation": "Economic justice through land rights is a key area of NCSC investigation."
    },
    {
        "id": "ch54-l1-q60",
        "question": "If a policy affecting SCs is made WITHOUT consulting the NCSC, it violates:",
        "options": ["Article 352","Article 338(9)","The IPC","The Representation of People Act"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338(9) makes consultation mandatory for major policy decisions."
    },
    {
        "id": "ch54-l1-q61",
        "question": "Consider the following statements regarding the NCSC",
        "options": ["2 only","1 and 2 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 1 is false: it CAN summon and enforce attendance. Statement 3 is false: its recommendations are advisory. Statement 2 is correct: it has suo-moto powers."
    },
    {
        "id": "ch54-l1-q62",
        "question": "Regarding the 2004 bifurcation, which Constitutional Amendment Act provided for the separate National Commission for Scheduled Tribes?",
        "options": ["65th Amendment","89th Amendment","102nd Amendment","42nd Amendment"],
        "correctAnswerIndex": 1,
        "explanation": "The 89th Amendment Act of 2003 (enforced in 2004) split the joint commission into NCSC (338) and NCST (338A)."
    },
    {
        "id": "ch54-l1-q63",
        "question": "Assertion (A): The NCSC is often described as possessing",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "This describes the advisory nature of the Commission. It can"
    },
    {
        "id": "ch54-l1-q64",
        "question": "The mandate of the NCSC in relation to",
        "options": ["It represents the only constitutional body that exclusively looks after Anglo-Indian rights","It shows that the NCSC is a generic body for all minorities","It was added by the 102nd Amendment","None of the above"],
        "correctAnswerIndex": 0,
        "explanation": "Article 338(10) assigns the protection of Anglo-Indian safeguards to the NCSC, even after the revocation of reserved seats in legislatures."
    },
    {
        "id": "ch54-l1-q65",
        "question": "In the context of the",
        "options": ["It acts as the judge for the Special Courts","It monitors the implementation of the Act and can investigate specific cases of police negligence in registering FIRs under the Act","It can pardon the accused","It has no role after the Police take over"],
        "correctAnswerIndex": 1,
        "explanation": "The NCSC acts as a watchdog over the administrative enforcement of the SC/ST (PoA) Act."
    },
    {
        "id": "ch54-l1-q66",
        "question": "What happens if a State Government does NOT accept a recommendation of the NCSC?",
        "options": ["The Governor must dismiss the State Cabinet","The State must lay a memorandum before the State Legislature explaining the reasons for non-acceptance","The Chairperson of NCSC can take over the state administration","The recommendation is automatically appealed to the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Transparency is the only constitutional"
    },
    {
        "id": "ch54-l1-q67",
        "question": "Can the NCSC stop a",
        "options": ["Yes, it can issue an injunction","No, but it can recommend the postponement of the process and report the violation to the President/Governor","Only if the department head is an SC","Only if the court allows"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission"
    },
    {
        "id": "ch54-l1-q68",
        "question": "The 102nd Amendment Act (2018) established the NCBC. How did this affect the NCSC",
        "options": ["The NCSC still handles OBC complaints in North India","The NCSC was relieved of all functions regarding OBCs, which are now solely handled by the NCBC","The NCSC and NCBC share the work","The NCSC was abolished and merged with NCBC"],
        "correctAnswerIndex": 1,
        "explanation": "A clean break: NCSC now only looks after SCs and Anglo-Indians; OBCs are exclusively with the NCBC."
    },
    {
        "id": "ch54-l1-q69",
        "question": "Which Article of the Constitution establishes the",
        "options": ["Article 330","Article 338(4)","Article 338(9)","Article 14"],
        "correctAnswerIndex": 2,
        "explanation": "Article 338(9) is the key provision ensuring the Commission has a say in all major policy decisions."
    },
    {
        "id": "ch54-l1-q70",
        "question": "In the case of",
        "options": ["It has no role as it","The state government MUST consult the NCSC before notifying any sub-classification of SCs, though the final power rests with the legal process/legislature","It can only talk to the President","It only handles individual complaints"],
        "correctAnswerIndex": 1,
        "explanation": "Major policy shifts like sub-classification fall squarely under the consultation mandate of Article 338(9)."
    },
    {
        "id": "ch54-l1-q71",
        "question": "If a member of the NCSC is found guilty of misbehavior, how are they removed?",
        "options": ["By a majority of the Parliament","By the President, after a report from the Supreme Court on a reference made by the President","By the Chairperson directly","By the Minister of Social Justice"],
        "correctAnswerIndex": 1,
        "explanation": "To ensure independence, the removal process mirrors that of UPSC members (reference to Supreme Court under specialized rules)."
    },
    {
        "id": "ch54-l1-q72",
        "question": "The NCSC",
        "options": ["They receive any government aid","They implement any state-mandated reservation policy that is allegedly violated","They have SC students enrolled","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Since private bodies also operate under state laws/safeguards for SCs, the NCSC has jurisdiction to ensure those safeguards are not breached."
    },
    {
        "id": "ch54-l1-q73",
        "question": "What is the frequency of the NCSC",
        "options": ["Every year strictly","Annually, but it can also submit reports","","Once in 5 years","Only when the President asks"],
        "correctAnswerIndex": 1,
        "explanation": "While"
    },
    {
        "id": "ch54-l1-q74",
        "question": "Which of the following is a",
        "options": ["To participate in the selection of Judges for the Supreme Court","To participate and advise on the planning process of socio-economic development of the SCs","To monitor the stock market for SC representation","To advise the Prime Minister on foreign visits"],
        "correctAnswerIndex": 1,
        "explanation": "This is one of the core functions listed in Article 338(5)."
    },
    {
        "id": "ch54-l1-q75",
        "question": "The NCSC is provided with its own",
        "options": ["The Chairperson","A Secretary to the Commission (usually a high-ranking IAS officer)","The Home Secretary","The Registrar of the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission has its own bureaucratic setup headed by a Secretary to the Commission."
    },
    {
        "id": "ch54-l1-q76",
        "question": "The NCSC can",
        "options": ["The transfer of land from SCs to non-SCs bypassing regulatory laws","The refusal of the state to allocate","or other land to SCs","The implementation of land ceiling acts that help marginalized communities","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Land is a key socio-economic safeguard. The Commission"
    },
    {
        "id": "ch54-l1-q77",
        "question": "What is the legal status of",
        "options": ["They are mandatory rules of law","They are administrative protocols that ensure smooth information flow and help the commission fulfill its investigative mandate effectively","They are just suggestions with no weight","They can only be enforced by the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "While"
    },
    {
        "id": "ch54-l1-q78",
        "question": "The NCSC",
        "options": ["Refuse the case as it belongs to Tamil Nadu","Investigate and coordinate with the local administration of the","to ensure justice","Ask the victim to go back","Only look at it if the CM of Delhi asks"],
        "correctAnswerIndex": 1,
        "explanation": "As a national commission, its jurisdiction is over the"
    },
    {
        "id": "ch54-l1-q79",
        "question": "Assertion (A): The NCSC has the power to",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "Access to records is the foundation of investigative justice. Without this, the Commission could only rely on private testimonies, which might be incomplete."
    },
    {
        "id": "ch54-l1-q80",
        "question": "In the case of",
        "options": ["Cancel the certificate directly","Investigate the case and recommend the state government or the issuing authority to verify and cancel if found fraudulent, and prosecute the individual","Ignore it as it","Only the UPSC can handle this"],
        "correctAnswerIndex": 1,
        "explanation": "Fake certificates deprive genuine SC candidates of their rights. The NCSC monitors"
    },
    {
        "id": "ch54-l1-q81",
        "question": "Which of the following describes the",
        "options": ["Investigative watchdog (for specific cases) and Developmental advisor (for planning)","Financial auditor and Political party leader","Judge and Executioner","Teacher and Researcher"],
        "correctAnswerIndex": 0,
        "explanation": "This encapsulates the breadth of Article 338(5): reacting to injustices and proactively advising on planning."
    },
    {
        "id": "ch54-l1-q82",
        "question": "The NCSC recently focused on",
        "options": ["Clean the sewers personally","Ensure that the SRMS (Self Employment Scheme for Rehabilitation of Manual Scavengers) is effectively implemented by the state","Increase the tax on sewer cleaners","Only report on it once in 10 years"],
        "correctAnswerIndex": 1,
        "explanation": "Manual scavenging is an ultimate deprivation of human dignity. Monitoring its total abolition is a key focus of the NCSC."
    },
    {
        "id": "ch54-l1-q83",
        "question": "If a government official is summoned by the NCSC and refuses to appear, the Commission can:",
        "options": ["Issue a warrant and fine the official as a civil court would","Ask the President to dismiss the official","Do nothing","Only write a letter"],
        "correctAnswerIndex": 0,
        "explanation": "Its civil court powers are real; failure to comply with a summon can lead to contempt-like proceedings under the CPC."
    },
    {
        "id": "ch54-l1-q84",
        "question": "Regarding",
        "options": ["Because only their","was stopped, but their","still exist under the Constitution and must be monitored","Because they were given special voting power","It is not relevant anymore","Because they now have 4 seats in Rajya Sabha"],
        "correctAnswerIndex": 0,
        "explanation": "Legislative reservation (political) is different from socio-economic and educational safeguards (protections). The latter still need a watchdog."
    },
    {
        "id": "ch54-l1-q85",
        "question": "The NCSC is an",
        "options": ["That the Prime Minister appoints them directly","The highest level of constitutional appointment, similar to that of SC judges or the CAG","That they are employees of the cabinet","That they can never be removed"],
        "correctAnswerIndex": 1,
        "explanation": "This formality signifies that the appointment is a"
    },
    {
        "id": "ch54-l1-q86",
        "question": "The 65th Amendment (1990) moved the commission from Article 338(2) to Article 338(1). What was the significance of this?",
        "options": ["None, it was just a numbering change","It established the Commission as a more robust, permanent part of the Constitution","It made it a temporary body","It limited its budget"],
        "correctAnswerIndex": 1,
        "explanation": "It signified the institutionalization of the Commission from a single officer to a full-fledged authority."
    },
    {
        "id": "ch54-l1-q87",
        "question": "In the context of",
        "options": ["A list of names of all employees","A mechanism to ensure reservation quotas are correctly applied to vacancies sequentially","The attendance register","The salary slip"],
        "correctAnswerIndex": 1,
        "explanation": "The Roster is the mathematical and legal proof that reservations are being delivered. The NCSC is the primary checker of these rosters."
    },
    {
        "id": "ch54-l1-q88",
        "question": "The NCSC often focuses on",
        "options": ["Post-Matric Scholarships","Hostel facilities and zero Tolerance for caste-based discrimination in universities","The Ph.D. fellowships","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Education is the primary tool for social mobility. The NCSC monitors everything from funds to the"
    },
    {
        "id": "ch54-l1-q89",
        "question": "If a policy change occurs in the",
        "options": ["Can change it directly","Must be consulted, ensuring that the process follows the Article 341 procedure correctly","Has no role as it is purely political","Only monitors the voting impact"],
        "correctAnswerIndex": 1,
        "explanation": "Changing the SC list is a major policy decision requiring NCSC input before the President/Parliament takes the final step."
    },
    {
        "id": "ch54-l1-q90",
        "question": "Which of the following is the ultimate",
        "options": ["The power to arrest","The power of Publicity and Transparency (placing its findings before the Legislatures for public debate)","The power of the budget","The power to appoint ministers"],
        "correctAnswerIndex": 1,
        "explanation": "By forcing the government to respond and justify its actions publicly in the Parliament/State Legislatures, the NCSC creates accountability."
    },
    {
        "id": "ch54-l1-q91",
        "question": "Which Article of the Constitution provides for the office of the Advocate General for the State?",
        "options": ["Article 76","Article 165","Article 177","Article 194"],
        "correctAnswerIndex": 1,
        "explanation": "Article 165 provides for the Advocate General for the State, the highest law officer in the state."
    },
    {
        "id": "ch54-l1-q92",
        "question": "The Advocate General of a State is appointed by:",
        "options": ["The Chief Justice of the High Court","The Governor of the State","The Chief Minister","The Law Minister of the State"],
        "correctAnswerIndex": 1,
        "explanation": "He is appointed by the Governor."
    },
    {
        "id": "ch54-l1-q93",
        "question": "To be appointed as the Advocate General of a State, a person must be qualified to be appointed as a:",
        "options": ["Judge of the Supreme Court","Judge of a High Court","District Judge","Senior Advocate of 5 years standing"],
        "correctAnswerIndex": 1,
        "explanation": "He must be a person who is qualified to be appointed a judge of a High Court."
    },
    {
        "id": "ch54-l1-q94",
        "question": "The Advocate General holds office during the pleasure of:",
        "options": ["The State Legislature","The Governor of the State","The Chief Minister","The President of India"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution does not fix his term; he holds office during the pleasure of the Governor."
    },
    {
        "id": "ch54-l1-q95",
        "question": "Does the Advocate General have the right to speak and take part in the proceedings of the State Legislature?",
        "options": ["Yes","No, only in the High Court","Only in the Legislative Council","Only if he is an MLA"],
        "correctAnswerIndex": 0,
        "explanation": "As per Art 177, he has the right to speak and take part in the proceedings of the state legislature."
    },
    {
        "id": "ch54-l1-q96",
        "question": "Can the Advocate General vote in the State Legislature?",
        "options": ["Yes","No","Only in the Legislative Council","Only during a tie"],
        "correctAnswerIndex": 1,
        "explanation": "He participates in proceedings but has no right to vote."
    },
    {
        "id": "ch54-l1-q97",
        "question": "The",
        "options": ["The State Legislature","The Governor","The Constitution","The State Finance Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution does not fix his remuneration; it is determined by the Governor."
    },
    {
        "id": "ch54-l1-q98",
        "question": "Who is the",
        "options": ["Chief Justice of the High Court","Advocate General of the State","State Law Minister","Public Prosecutor"],
        "correctAnswerIndex": 1,
        "explanation": "He is the chief legal advisor to the state executive."
    },
    {
        "id": "ch54-l1-q99",
        "question": "Is the Advocate General a member of the State Cabinet?",
        "options": ["Yes","No","Ex-officio member with voting right","Only during legal emergencies"],
        "correctAnswerIndex": 1,
        "explanation": "He is not a member of the state cabinet, although he is a part of the State Executive."
    },
    {
        "id": "ch54-l1-q100",
        "question": "The Advocate General represents the State Government in:",
        "options": ["The High Court","The Supreme Court","Both High Court and Supreme Court (in cases concerning the state)","Only District Courts"],
        "correctAnswerIndex": 2,
        "explanation": "His duties include appearing in any court for cases involving the State Government."
    },
    {
        "id": "ch54-l1-q101",
        "question": "By convention, the Advocate General resigns when:",
        "options": ["He completes 5 years.","The State Council of Ministers resigns or is replaced.","The Chief Justice of High Court retires.","He turns 62."],
        "correctAnswerIndex": 1,
        "explanation": "Since he is appointed on the advice of the council of ministers, he usually resigns when the govt changes."
    },
    {
        "id": "ch54-l1-q102",
        "question": "Can the Advocate General continue his private legal practice?",
        "options": ["Yes, with certain restrictions.","No, he is a full-time government servant.","Only for corporate cases.","Only for family law."],
        "correctAnswerIndex": 0,
        "explanation": "He is not a whole-time counsel for the government and can have private practice if it doesn"
    },
    {
        "id": "ch54-l1-q103",
        "question": "The Advocate General must NOT advise or hold a brief against:",
        "options": ["Any individual.","The State Government.","The High Court.","The Governor."],
        "correctAnswerIndex": 1,
        "explanation": "He cannot act against the state government as he is its chief legal representative."
    },
    {
        "id": "ch54-l1-q104",
        "question": "Does the Advocate General have the right to speak in both the Legislative Assembly and Legislative Council (if any)?",
        "options": ["Yes","No, only Legislative Assembly","No, only Legislative Council","Only if he is a former minister"],
        "correctAnswerIndex": 0,
        "explanation": "He has the right to speak in both Houses as per Art 177."
    },
    {
        "id": "ch54-l1-q105",
        "question": "The Advocate General is part of which organ of the state government?",
        "options": ["State Legislature","Judiciary","State Executive","NITI Aayog (State wing)"],
        "correctAnswerIndex": 2,
        "explanation": "The State Executive consists of Governor, CM, Council of Ministers, and the Advocate General (Art 153-167)."
    },
    {
        "id": "ch54-l1-q106",
        "question": "Can the Advocate General defend an accused person in criminal cases without permission?",
        "options": ["Yes","No, not without the permission of the State Government.","Only if the person is a relative.","Only in the High Court."],
        "correctAnswerIndex": 1,
        "explanation": "This is a restriction mentioned in his conditions of service to avoid conflict of interest."
    },
    {
        "id": "ch54-l1-q107",
        "question": "Is the Advocate General required to be a citizen of India?",
        "options": ["Yes","No","Only if he is a Judge","Only for the first terms"],
        "correctAnswerIndex": 0,
        "explanation": "He must meet HC judge qualifications, which includes citizenship."
    },
    {
        "id": "ch54-l1-q108",
        "question": "The Advocate General holds office during the pleasure of the Governor. This means he can be removed:",
        "options": ["Following impeachment.","Anytime by the Governor without assigned grounds.","Only after a trial in High Court.","Only if the CM signing it (CM advises Governor)."],
        "correctAnswerIndex": 1,
        "explanation": "He has no security of tenure."
    },
    {
        "id": "ch54-l1-q109",
        "question": "Does the Advocate General enjoy the",
        "options": ["Yes, under Art 194(4)","No, only salary.","Only if he is elected.","Only during a travel."],
        "correctAnswerIndex": 0,
        "explanation": "Art 194(4) extends MLA privileges to him when he participates in House proceedings."
    },
    {
        "id": "ch54-l1-q110",
        "question": "Which of the following describes the relationship between Attorney General and Advocate General?",
        "options": ["Advocate General is subordinate to AG.","They are independent constitutional officers for different tiers of government.","Advocate General reports to AGI.","They are the same person."],
        "correctAnswerIndex": 1,
        "explanation": "They have separate constitutional mandates (Art 76 vs Art 165)."
    },
    {
        "id": "ch54-l1-q111",
        "question": "Can the Advocate General be a member of a",
        "options": ["No.","Yes, if he is","of such a committee (Art 177).","Only if he is also an Advocate in HC.","Only for the Ethics committee."],
        "correctAnswerIndex": 1,
        "explanation": "Article 177 allows him to be part of any committee he is assigned to."
    },
    {
        "id": "ch54-l1-q112",
        "question": "Are there",
        "options": ["No, usually known as","or",".","Yes, always.","Only in big states like UP.","Only for the capital city."],
        "correctAnswerIndex": 0,
        "explanation": "States use different designations for law officers assist the Advocate General."
    },
    {
        "id": "ch54-l1-q113",
        "question": "Is the Advocate General",
        "options": ["Yes","No, it is recommendatory/legal opinion.","Only in criminal matters.","Only if the CM signing it."],
        "correctAnswerIndex": 1,
        "explanation": "Chief legal advisor role is advisory in nature."
    },
    {
        "id": "ch54-l1-q114",
        "question": "To whom does the Advocate General submit his resignation?",
        "options": ["Chief Minister","Governor","Speaker","Attorney General"],
        "correctAnswerIndex": 1,
        "explanation": "In accordance with his appointment authority."
    },
    {
        "id": "ch54-l1-q115",
        "question": "Does the Advocate General have a",
        "options": ["Yes","No, he has no right to vote at all.","Only if requested by the Speaker.","Only for the Law Bill."],
        "correctAnswerIndex": 1,
        "explanation": "Participating without being a member means no voting rights."
    },
    {
        "id": "ch54-l1-q116",
        "question": "Which city is the primary place of work for the Advocate General?",
        "options": ["New Delhi","The seat of the State High Court / State Capital.","Mumbai","Anywhere in the state."],
        "correctAnswerIndex": 1,
        "explanation": "He primarily represents the state in the High Court and advises the state cabinet."
    },
    {
        "id": "ch54-l1-q117",
        "question": "Wait. Can a person with",
        "options": ["Yes, as they meet HC judge qualification.","No.","Only for the first 5 years.","Only by an Amendment."],
        "correctAnswerIndex": 0,
        "explanation": "Art 217(2) qualifications for HC judge apply to AG as well (judicial office or 10 years advocate)."
    },
    {
        "id": "ch54-l1-q118",
        "question": "Who receives the AGI",
        "options": ["The State Legislature.","The State Government (Executive).","The Chief Justice.","The NITI Aayog (State wing)."],
        "correctAnswerIndex": 1,
        "explanation": "Advocate General"
    },
    {
        "id": "ch54-l1-q119",
        "question": "Is the Advocate General a",
        "options": ["Yes","No, he is allowed private practice (with certain restrictions).","Only for the capital city.","Only for alternate years."],
        "correctAnswerIndex": 1,
        "explanation": "He is not a permanent state civil servant."
    },
    {
        "id": "ch54-l1-q120",
        "question": "When a State has",
        "options": ["The Attorney General of India.","The sitting Advocate General (if not resigned) or a person appointed by the Governor (on President","The High Court Chief Justice.","The post is abolished."],
        "correctAnswerIndex": 1,
        "explanation": "The office continues as the"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch54-l2-q1",
        "question": "While investigating any matter or inquiring into any complaint, the NCSC has all the powers of a:",
        "options": ["Criminal Court","Civil Court trying a suit","High Court","Sessions Court"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338(8) specifies that the Commission shall, while investigating any matter, have all the powers of a civil court trying a suit."
    },
    {
        "id": "ch54-l2-q2",
        "question": "Which of the following powers does the NCSC possess while investigating a case?",
        "options": ["Summoning and enforcing the attendance of any person from any part of India","Requiring the discovery and production of any document","Receiving evidence on affidavits","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "The Commission"
    },
    {
        "id": "ch54-l2-q3",
        "question": "When the President receives the NCSC",
        "options": ["The names of all the complainants","The action taken or proposed to be taken on the recommendations and the reasons for non-acceptance, if any","The budget spent by the Commission in the last decade","The political affiliations of the members"],
        "correctAnswerIndex": 1,
        "explanation": "The memorandum must explain the action taken and, pivotally, the reasons for rejecting any recommendations."
    },
    {
        "id": "ch54-l2-q4",
        "question": "If a recommendation of the NCSC relates to a",
        "options": ["The Chief Minister","The Governor of that State","The High Court","The State Legislative Assembly directly"],
        "correctAnswerIndex": 1,
        "explanation": "Reports concerning state matters are sent to the Governor, who then places them before the State Legislature."
    },
    {
        "id": "ch54-l2-q5",
        "question": "The Central and State Governments are required to consult the NCSC on:",
        "options": ["All major policy matters affecting Scheduled Castes","The appointment of the Director General of Police","The selection of candidates for UPSC through a special committee","The declaration of a National Emergency"],
        "correctAnswerIndex": 0,
        "explanation": "Article 338(9) mandates consultation on all major policy matters affecting the community."
    },
    {
        "id": "ch54-l2-q6",
        "question": "Does the Commission have the power to",
        "options": ["Yes, it can award up to 3 years of imprisonment","No, it can only investigate and recommend action; adjudication and punishment are the domain of the judiciary","Yes, but only in Union Territories","No, it can only impose financial fines"],
        "correctAnswerIndex": 1,
        "explanation": "The NCSC is an investigatory and advisory body, not a judicial body. It cannot pass sentences; it can only recommend prosecution to the appropriate authorities."
    },
    {
        "id": "ch54-l2-q7",
        "question": "The NCSC",
        "options": ["Investigating all matters relating to the safeguards provided for them","Reporting to the President upon the working of those safeguards","Advising on the socio-economic development of Anglo-Indians","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Article 338(10) extends all the functions of the Commission regarding SCs to the Anglo-Indian community as well."
    },
    {
        "id": "ch54-l2-q8",
        "question": "The primary function of the NCSC is to act as a",
        "options": ["The economic interests of the Union government","The legal and constitutional safeguards of the Scheduled Castes","The implementation of the GST across states","The reservation of seats in the Rajya Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "The NCSC is the watchdog for the Constitutional and tribal/legal rights of the Scheduled Castes."
    },
    {
        "id": "ch54-l2-q9",
        "question": "If the Government rejects a recommendation of the NCSC, the",
        "options": ["A letter of apology from the Minister","The reasons for such non-acceptance","A dissenting note from the Opposition parties","A certificate of validation from the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Mandatory transparency: any rejection must be justified to the legislature."
    },
    {
        "id": "ch54-l2-q10",
        "question": "Which Ministry is the",
        "options": ["Ministry of Home Affairs","Ministry of Social Justice and Empowerment","Ministry of Tribal Affairs","Ministry of Law and Justice"],
        "correctAnswerIndex": 1,
        "explanation": "The NCSC works under the administrative control of the Ministry of Social Justice and Empowerment."
    },
    {
        "id": "ch54-l2-q11",
        "question": "The Commission is required to",
        "options": ["The planning process of socio-economic development of the SCs","The selection of the President of India","The drafting of the Union Budget","The foreign policy of India"],
        "correctAnswerIndex": 0,
        "explanation": "It is a key developmental function where the Commission helps in planning for the upliftment of the community."
    },
    {
        "id": "ch54-l2-q12",
        "question": "The",
        "options": ["Any public record or copy thereof from any court or office","The keys to the RBI vault","The classified nuclear codes","The personal bank statements of all citizens"],
        "correctAnswerIndex": 0,
        "explanation": "It can requisition public records relevant to its investigations from any government office."
    },
    {
        "id": "ch54-l2-q13",
        "question": "The",
        "options": ["Reducing the salary of members","Handling the distinct and geographically separate problems of SCs and STs with more focused attention","Abolishing the reservation system","Creating more government jobs in Delhi"],
        "correctAnswerIndex": 1,
        "explanation": "Since SCs and STs face different socio-legal challenges, separate commissions were created for specialized focus."
    },
    {
        "id": "ch54-l2-q14",
        "question": "Which of the following describes the",
        "options": ["5 years or until 65 years of age","3 years with no specific age limit mentioned in the Constitution","6 years or until 70 years of age","Fixed at 2 years"],
        "correctAnswerIndex": 1,
        "explanation": "The President determines the tenure, and the current rules specify a 3-year term for the chairperson and members."
    },
    {
        "id": "ch54-l2-q15",
        "question": "Can a member of the NCSC be re-appointed?",
        "options": ["No, only one term is permitted","Yes, but they are not eligible for appointment for more than two terms","Yes, they can be re-appointed indefinitely","Only the Chairperson can be re-appointed"],
        "correctAnswerIndex": 1,
        "explanation": "The rules specify that a person is eligible for appointment for a maximum of two terms."
    },
    {
        "id": "ch54-l2-q16",
        "question": "The NCSC can",
        "options": ["Land rights and service matters only","Constitutional and legal safeguards for SCs","Political rights only","Housing rights only"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission"
    },
    {
        "id": "ch54-l2-q17",
        "question": "Is the NCSC required to give",
        "options": ["No, it can land anytime","Yes, to the state administration as a matter of protocol and to ensure cooperation","Only if visiting a tribal area","Only if the PMO permits"],
        "correctAnswerIndex": 1,
        "explanation": "While it has investigative power, it usually coordinates with the state government for logistics and access to records."
    },
    {
        "id": "ch54-l2-q18",
        "question": "Which of the following is NOT a duty of the NCSC?",
        "options": ["To report on the working of safeguards","To allocate the SC sub-plan budget directly to the state governments","To advise on planning for socio-economic development","To inquire into specific complaints"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission advises on planning but does not have the executive power to"
    },
    {
        "id": "ch54-l2-q19",
        "question": "Regarding the 102nd Amendment Act (2018), which community",
        "options": ["Minorities","Other Backward Classes (OBCs)","Anglo-Indians","Women"],
        "correctAnswerIndex": 1,
        "explanation": "The 102nd Amendment Act established the NCBC (National Commission for Backward Classes) as a constitutional body, taking over OBC-related functions from NCSC."
    },
    {
        "id": "ch54-l2-q20",
        "question": "The NCSC",
        "options": ["The Code of Civil Procedure 1908","The Constitution of India (Article 338)","The National Commission for SCs Act","An Executive Order"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution itself (Article 338-8) grants these powers to the Commission to ensure it can function effectively."
    },
    {
        "id": "ch54-l2-q21",
        "question": "In the case of service-related grievances (e.g., promotions), what can the NCSC do?",
        "options": ["Issue a stay order on promotions","Direct the department to promote a specific person","Investigate the grievance and recommend corrective action to the department","Dismiss the departmental head"],
        "correctAnswerIndex": 2,
        "explanation": "The Commission can investigate systemic bias or specific discrimination in services and recommend remedies, which the department is expected (though not legally forced) to follow."
    },
    {
        "id": "ch54-l2-q22",
        "question": "The 65th Constitutional Amendment (1990) did what to the",
        "options": ["Abolished it entirely","Transformed the single-member post into a high-level multi-member commission","Made it a judicial post","Limited its tenure to 1 year"],
        "correctAnswerIndex": 1,
        "explanation": "It upgraded the mechanism from a"
    },
    {
        "id": "ch54-l2-q23",
        "question": "What does the NCSC do if a State Governor refuses to lay its report before the legislature?",
        "options": ["The Chairperson can dissolve the legislature","The matter is reported to the President and discussed at the highest levels of cooperative federalism","The Commission can move the Supreme Court to mandate it","Nothing, they have no power"],
        "correctAnswerIndex": 1,
        "explanation": "Since it"
    },
    {
        "id": "ch54-l2-q24",
        "question": "The term",
        "options": ["Article 338","Article 341","Article 366(24)","Article 342"],
        "correctAnswerIndex": 2,
        "explanation": "Article 366(24) contains the definition, while Article 341 contains the process of notifying the list of SCs."
    },
    {
        "id": "ch54-l2-q25",
        "question": "What is the NCSC",
        "options": ["The NCSC has the power to implement it","The NCSC is generally the forum where such policy shifts (like the recent SC judgment on sub-classification and creamy layer) are debated and implemented through government consultation","The NCSC is barred from the creamy layer discussion","Only the PM decides it"],
        "correctAnswerIndex": 1,
        "explanation": "As the constitutional advisory body, the NCSC is at the center of such vital policy shifts involving SC rights."
    },
    {
        "id": "ch54-l2-q26",
        "question": "The NCSC can",
        "options": ["Only the victims","Any person from any part of India (including high-ranking officials)","Only private company owners","Only individuals living in Delhi"],
        "correctAnswerIndex": 1,
        "explanation": "Its jurisdiction is national; it can summon any citizen or official to give evidence."
    },
    {
        "id": "ch54-l2-q27",
        "question": "Which of the following describes the relationship between NCSC and the courts?",
        "options": ["The NCSC is superior to the High Court","The NCSC performs functions that help the courts by investigating ground-level facts, but its findings are subject to judicial review","The courts cannot interfere with NCSC","The NCSC has no legal standing"],
        "correctAnswerIndex": 1,
        "explanation": "While it has civil court powers for"
    },
    {
        "id": "ch54-l2-q28",
        "question": "The",
        "options": ["The Ombudsman","The Commissioner for SCs and STs","The Advocate General","The Guardian of Tribes"],
        "correctAnswerIndex": 1,
        "explanation": "Before the 65th amendment, the officer was designated as the Commissioner for SCs and STs."
    },
    {
        "id": "ch54-l2-q29",
        "question": "The NCSC",
        "options": ["Giving land to everyone","Investigating cases of illegal land alienation or denial of land distribution to SC families","Regulating the stock market","Abolishing agriculture"],
        "correctAnswerIndex": 1,
        "explanation": "Economic justice through land rights is a key area of NCSC investigation."
    },
    {
        "id": "ch54-l2-q30",
        "question": "If a policy affecting SCs is made WITHOUT consulting the NCSC, it violates:",
        "options": ["Article 352","Article 338(9)","The IPC","The Representation of People Act"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338(9) makes consultation mandatory for major policy decisions."
    },
    {
        "id": "ch54-l2-q31",
        "question": "The Advocate General of a state is part of the",
        "options": ["Governor, Chief Minister and State Council of Ministers.","Chief Justice of High Court and Speaker.","Chief Secretary and D.G.P. of State.","Only the CM and Law Minister."],
        "correctAnswerIndex": 0,
        "explanation": "Articles 153 to 167 deal with the State Executive, which includes the Governor, CM, Council of Ministers and Advocate General."
    },
    {
        "id": "ch54-l2-q32",
        "question": "Assertion (A): The Advocate General can be removed from his office by the Governor at any time.\\nReason (R): The Advocate General holds office during the pleasure of the Governor.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "There is no fixed term or security of tenure for the Advocate General in the Constitution."
    },
    {
        "id": "ch54-l2-q33",
        "question": "Which of the following is a",
        "options": ["He must be a citizen of India.","He must have held a judicial office for 10 years or been an advocate of a High Court for 10 years.","Both 1 and 2.","He must be a member of the State Legislature."],
        "correctAnswerIndex": 2,
        "explanation": "These are the same qualifications as required for a judge of the High Court (Art 217)."
    },
    {
        "id": "ch54-l2-q34",
        "question": "The Advocate General has the right to",
        "options": ["The State Legislative Assembly.","The State Legislative Council (where it exists).","Any committee of the State Legislature of which he may be named a member.","All of the above."],
        "correctAnswerIndex": 3,
        "explanation": "As per Article 177, he enjoys all rights in the legislature except the right to vote."
    },
    {
        "id": "ch54-l2-q35",
        "question": "What is the",
        "options": ["He is completely banned from criminal cases.","He should not defend an accused person in criminal prosecutions without the permission of the State Government.","He can only defend government officials.","He can only defend people in the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "This ensures there is no conflict of interest as the State is the prosecutor in criminal cases."
    },
    {
        "id": "ch54-l2-q36",
        "question": "By convention, the Advocate General resigns when:",
        "options": ["The Governor","The State Council of Ministers resigns or is replaced.","The High Court Chief Justice retires.","By an order of the Lokayukta."],
        "correctAnswerIndex": 1,
        "explanation": "He is an advisor to the government of the day and is appointed on their advice."
    },
    {
        "id": "ch54-l2-q37",
        "question": "Which Article provides for the",
        "options": ["Article 165.","Article 194(4).","Article 202.","Article 300."],
        "correctAnswerIndex": 1,
        "explanation": "Article 194(4) extends the privileges of members of state legislature to non-members like the Advocate General who participate in house business."
    },
    {
        "id": "ch54-l2-q38",
        "question": "Does the Advocate General have the",
        "options": ["No.","Yes, in the Supreme Court of India or any other High Court where his state government is a party.","Only in the Delhi High Court.","Only if the AGI allows."],
        "correctAnswerIndex": 1,
        "explanation": "He is the chief representative of the state"
    },
    {
        "id": "ch54-l2-q39",
        "question": "The",
        "options": ["The State Legislature by law.","The Governor.","The Constitution (Second Schedule).","The Finance Commission."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike Judges, his pay is at the discretion of the Governor (Executive)."
    },
    {
        "id": "ch54-l2-q40",
        "question": "Who receives the official legal advice from the Advocate General?",
        "options": ["The State Legislature.","The State Government (Governor/Cabinet).","The Chief Justice of High Court.","The NITI Aayog."],
        "correctAnswerIndex": 1,
        "explanation": "His primary duty (Art 165(2)) is to advise the state"
    },
    {
        "id": "ch54-l2-q41",
        "question": "Is the Advocate General allowed to",
        "options": ["Yes.","No, not while holding office.","Only in another state","Only for family matters."],
        "correctAnswerIndex": 1,
        "explanation": "Conflict of interest rules strictly prohibit holding a brief against the state client."
    },
    {
        "id": "ch54-l2-q42",
        "question": "Does the Advocate General have a",
        "options": ["Yes.","No, he has no right to vote in the house.","Only if the CM allows.","Only if he is also an MLA."],
        "correctAnswerIndex": 1,
        "explanation": "Article 177 clearly states he has the right to speak/participate but not the right to vote."
    },
    {
        "id": "ch54-l2-q43",
        "question": "Is the Advocate General a",
        "options": ["Yes.","No, he is not a whole-time counsel and is not a member of the state civil services.","Only for salary purposes.","Only after 10 years."],
        "correctAnswerIndex": 1,
        "explanation": "He is a professional officer with allowed private practice."
    },
    {
        "id": "ch54-l2-q44",
        "question": "Why does the AG resign when the CM resigns?",
        "options": ["Because the Governor fire him.","By convention, as the incoming government must have the right to choose its own legal counsel.","He follows the CM","By a law of 1950."],
        "correctAnswerIndex": 1,
        "explanation": "Trust between the executive and its chief lawyer is paramount in a parliamentary system."
    },
    {
        "id": "ch54-l2-q45",
        "question": "Which Article provides for",
        "options": ["Article 165.","Article 177.","Article 213.","Article 226."],
        "correctAnswerIndex": 1,
        "explanation": "Article 177 is the specific provision for state legislature participation."
    },
    {
        "id": "ch54-l2-q46",
        "question": "Can the Advocate General serve as a member of a",
        "options": ["No.","Yes, if he is","of such a committee.","Only for the Public Accounts Committee.","Only if the Speaker is his friend."],
        "correctAnswerIndex": 1,
        "explanation": "Art 177 allows him to be part of any committee he is explicitly assigned to."
    },
    {
        "id": "ch54-l2-q47",
        "question": "What is the",
        "options": ["Cabinet Minister.","Secretary to Govt.","He is the first legal officer but not a member of the political cabinet hierarchy.","Subordinate to the Law Secretary."],
        "correctAnswerIndex": 2,
        "explanation": "It"
    },
    {
        "id": "ch54-l2-q48",
        "question": "Regarding",
        "options": ["No, he is a private lawyer.","Yes, he cannot accept appointment as a director in any company/corporation without government permission.","Only for government companies.","Only for banks."],
        "correctAnswerIndex": 1,
        "explanation": "This prevents commercial conflicts of interest."
    },
    {
        "id": "ch54-l2-q49",
        "question": "Can the Advocate General",
        "options": ["Yes, but only with the instructions of the state government.","No, only the CM can do it.","Only the high court judge can do it.","Only the police can do it."],
        "correctAnswerIndex": 0,
        "explanation": "As the state"
    },
    {
        "id": "ch54-l2-q50",
        "question": "The Advocate General",
        "options": ["The Chief Minister.","The Judges of the High Court.","The Chief Secretary.","The Speaker."],
        "correctAnswerIndex": 1,
        "explanation": "Protocol and salary usually mirror that of a high court judge."
    },
    {
        "id": "ch54-l2-q51",
        "question": "Does the AG have",
        "options": ["No, he holds office during",".","Yes.","Fixed for 5 years.","Fixed until age 62."],
        "correctAnswerIndex": 0,
        "explanation": "Absence of security of tenure is the key difference from judicial posts."
    },
    {
        "id": "ch54-l2-q52",
        "question": "Can the Advocate General appear in an",
        "options": ["Yes, as it is a case",".","No, only Attorney General does this.","Only for the Cauvery dispute.","Only if the PM allows."],
        "correctAnswerIndex": 0,
        "explanation": "Representing the state in all concerned matters is his primary mandate."
    },
    {
        "id": "ch54-l2-q53",
        "question": "Which body determines the",
        "options": ["The Parliament.","The Governor (Executive).","The High Court.","The Law Commission."],
        "correctAnswerIndex": 1,
        "explanation": "Art 165(2) empowers the Governor to assign such duties."
    },
    {
        "id": "ch54-l2-q54",
        "question": "Does the Advocate General have the right to speak in both Houses of a",
        "options": ["Yes (Under Art 177).","No, only Assembly.","Only if he is from that House.","Only for the first session."],
        "correctAnswerIndex": 0,
        "explanation": "His right to speak extends to both chambers (Assembly and Council)."
    },
    {
        "id": "ch54-l2-q55",
        "question": "Is the",
        "options": ["Yes, no such prohibition exists.","No.","Only after 5 years.","Only in another state."],
        "correctAnswerIndex": 0,
        "explanation": "High court judges are often chosen from the pool of senior advocates who have served as AG."
    },
    {
        "id": "ch54-l2-q56",
        "question": "Wait. In case of",
        "options": ["The State CM (who is already dismissed).","The Governor (on the advice of the Central Government/President).","The CJI.","The AGI."],
        "correctAnswerIndex": 1,
        "explanation": "Governor acts as the executive head during President"
    },
    {
        "id": "ch54-l2-q57",
        "question": "What is the",
        "options": ["To uphold the CM","True faith and allegiance to the Constitution.","No oath is needed.","To follow the law minister."],
        "correctAnswerIndex": 1,
        "explanation": "As a high constitutional officer, he takes the standard oath of allegiance."
    },
    {
        "id": "ch54-l2-q58",
        "question": "Is the Advocate General a",
        "options": ["No, unless he is an MLA/graduate/teacher voter in his personal capacity.","Yes, by virtue of his post.","Only for the first 5 votes.","Only if the Governor nominates him."],
        "correctAnswerIndex": 0,
        "explanation": "The office itself does not grant voting rights in elections."
    },
    {
        "id": "ch54-l2-q59",
        "question": "The Advocate General",
        "options": ["Usually not mentioned as",", hence would be votable.","Charged on the Consolidated Fund (like Judges).","Paid by the Finance Commission directly.","None of the above."],
        "correctAnswerIndex": 0,
        "explanation": "Unlike judges, his salary is not"
    },
    {
        "id": "ch54-l2-q60",
        "question": "If a State law is challenged as",
        "options": ["The Advocate General.","The Attorney General of India.","The Law Secretary.","The Police Commissioner."],
        "correctAnswerIndex": 0,
        "explanation": "Defending state laws in court is a primary duty of the Advocate General."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch54-l3-q1",
        "question": "Consider the following statements regarding the NCSC",
        "options": ["2 only","1 and 2 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 1 is false: it CAN summon and enforce attendance. Statement 3 is false: its recommendations are advisory. Statement 2 is correct: it has suo-moto powers."
    },
    {
        "id": "ch54-l3-q2",
        "question": "Regarding the 2004 bifurcation, which Constitutional Amendment Act provided for the separate National Commission for Scheduled Tribes?",
        "options": ["65th Amendment","89th Amendment","102nd Amendment","42nd Amendment"],
        "correctAnswerIndex": 1,
        "explanation": "The 89th Amendment Act of 2003 (enforced in 2004) split the joint commission into NCSC (338) and NCST (338A)."
    },
    {
        "id": "ch54-l3-q3",
        "question": "Assertion (A): The NCSC is often described as possessing",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "This describes the advisory nature of the Commission. It can"
    },
    {
        "id": "ch54-l3-q4",
        "question": "The mandate of the NCSC in relation to",
        "options": ["It represents the only constitutional body that exclusively looks after Anglo-Indian rights","It shows that the NCSC is a generic body for all minorities","It was added by the 102nd Amendment","None of the above"],
        "correctAnswerIndex": 0,
        "explanation": "Article 338(10) assigns the protection of Anglo-Indian safeguards to the NCSC, even after the revocation of reserved seats in legislatures."
    },
    {
        "id": "ch54-l3-q5",
        "question": "In the context of the",
        "options": ["It acts as the judge for the Special Courts","It monitors the implementation of the Act and can investigate specific cases of police negligence in registering FIRs under the Act","It can pardon the accused","It has no role after the Police take over"],
        "correctAnswerIndex": 1,
        "explanation": "The NCSC acts as a watchdog over the administrative enforcement of the SC/ST (PoA) Act."
    },
    {
        "id": "ch54-l3-q6",
        "question": "What happens if a State Government does NOT accept a recommendation of the NCSC?",
        "options": ["The Governor must dismiss the State Cabinet","The State must lay a memorandum before the State Legislature explaining the reasons for non-acceptance","The Chairperson of NCSC can take over the state administration","The recommendation is automatically appealed to the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Transparency is the only constitutional"
    },
    {
        "id": "ch54-l3-q7",
        "question": "Can the NCSC stop a",
        "options": ["Yes, it can issue an injunction","No, but it can recommend the postponement of the process and report the violation to the President/Governor","Only if the department head is an SC","Only if the court allows"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission"
    },
    {
        "id": "ch54-l3-q8",
        "question": "The 102nd Amendment Act (2018) established the NCBC. How did this affect the NCSC",
        "options": ["The NCSC still handles OBC complaints in North India","The NCSC was relieved of all functions regarding OBCs, which are now solely handled by the NCBC","The NCSC and NCBC share the work","The NCSC was abolished and merged with NCBC"],
        "correctAnswerIndex": 1,
        "explanation": "A clean break: NCSC now only looks after SCs and Anglo-Indians; OBCs are exclusively with the NCBC."
    },
    {
        "id": "ch54-l3-q9",
        "question": "Which Article of the Constitution establishes the",
        "options": ["Article 330","Article 338(4)","Article 338(9)","Article 14"],
        "correctAnswerIndex": 2,
        "explanation": "Article 338(9) is the key provision ensuring the Commission has a say in all major policy decisions."
    },
    {
        "id": "ch54-l3-q10",
        "question": "In the case of",
        "options": ["It has no role as it","The state government MUST consult the NCSC before notifying any sub-classification of SCs, though the final power rests with the legal process/legislature","It can only talk to the President","It only handles individual complaints"],
        "correctAnswerIndex": 1,
        "explanation": "Major policy shifts like sub-classification fall squarely under the consultation mandate of Article 338(9)."
    },
    {
        "id": "ch54-l3-q11",
        "question": "If a member of the NCSC is found guilty of misbehavior, how are they removed?",
        "options": ["By a majority of the Parliament","By the President, after a report from the Supreme Court on a reference made by the President","By the Chairperson directly","By the Minister of Social Justice"],
        "correctAnswerIndex": 1,
        "explanation": "To ensure independence, the removal process mirrors that of UPSC members (reference to Supreme Court under specialized rules)."
    },
    {
        "id": "ch54-l3-q12",
        "question": "The NCSC",
        "options": ["They receive any government aid","They implement any state-mandated reservation policy that is allegedly violated","They have SC students enrolled","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Since private bodies also operate under state laws/safeguards for SCs, the NCSC has jurisdiction to ensure those safeguards are not breached."
    },
    {
        "id": "ch54-l3-q13",
        "question": "What is the frequency of the NCSC",
        "options": ["Every year strictly","Annually, but it can also submit reports","","Once in 5 years","Only when the President asks"],
        "correctAnswerIndex": 1,
        "explanation": "While"
    },
    {
        "id": "ch54-l3-q14",
        "question": "Which of the following is a",
        "options": ["To participate in the selection of Judges for the Supreme Court","To participate and advise on the planning process of socio-economic development of the SCs","To monitor the stock market for SC representation","To advise the Prime Minister on foreign visits"],
        "correctAnswerIndex": 1,
        "explanation": "This is one of the core functions listed in Article 338(5)."
    },
    {
        "id": "ch54-l3-q15",
        "question": "The NCSC is provided with its own",
        "options": ["The Chairperson","A Secretary to the Commission (usually a high-ranking IAS officer)","The Home Secretary","The Registrar of the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission has its own bureaucratic setup headed by a Secretary to the Commission."
    },
    {
        "id": "ch54-l3-q16",
        "question": "The NCSC can",
        "options": ["The transfer of land from SCs to non-SCs bypassing regulatory laws","The refusal of the state to allocate","or other land to SCs","The implementation of land ceiling acts that help marginalized communities","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Land is a key socio-economic safeguard. The Commission"
    },
    {
        "id": "ch54-l3-q17",
        "question": "What is the legal status of",
        "options": ["They are mandatory rules of law","They are administrative protocols that ensure smooth information flow and help the commission fulfill its investigative mandate effectively","They are just suggestions with no weight","They can only be enforced by the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "While"
    },
    {
        "id": "ch54-l3-q18",
        "question": "The NCSC",
        "options": ["Refuse the case as it belongs to Tamil Nadu","Investigate and coordinate with the local administration of the","to ensure justice","Ask the victim to go back","Only look at it if the CM of Delhi asks"],
        "correctAnswerIndex": 1,
        "explanation": "As a national commission, its jurisdiction is over the"
    },
    {
        "id": "ch54-l3-q19",
        "question": "Assertion (A): The NCSC has the power to",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "Access to records is the foundation of investigative justice. Without this, the Commission could only rely on private testimonies, which might be incomplete."
    },
    {
        "id": "ch54-l3-q20",
        "question": "In the case of",
        "options": ["Cancel the certificate directly","Investigate the case and recommend the state government or the issuing authority to verify and cancel if found fraudulent, and prosecute the individual","Ignore it as it","Only the UPSC can handle this"],
        "correctAnswerIndex": 1,
        "explanation": "Fake certificates deprive genuine SC candidates of their rights. The NCSC monitors"
    },
    {
        "id": "ch54-l3-q21",
        "question": "Which of the following describes the",
        "options": ["Investigative watchdog (for specific cases) and Developmental advisor (for planning)","Financial auditor and Political party leader","Judge and Executioner","Teacher and Researcher"],
        "correctAnswerIndex": 0,
        "explanation": "This encapsulates the breadth of Article 338(5): reacting to injustices and proactively advising on planning."
    },
    {
        "id": "ch54-l3-q22",
        "question": "The NCSC recently focused on",
        "options": ["Clean the sewers personally","Ensure that the SRMS (Self Employment Scheme for Rehabilitation of Manual Scavengers) is effectively implemented by the state","Increase the tax on sewer cleaners","Only report on it once in 10 years"],
        "correctAnswerIndex": 1,
        "explanation": "Manual scavenging is an ultimate deprivation of human dignity. Monitoring its total abolition is a key focus of the NCSC."
    },
    {
        "id": "ch54-l3-q23",
        "question": "If a government official is summoned by the NCSC and refuses to appear, the Commission can:",
        "options": ["Issue a warrant and fine the official as a civil court would","Ask the President to dismiss the official","Do nothing","Only write a letter"],
        "correctAnswerIndex": 0,
        "explanation": "Its civil court powers are real; failure to comply with a summon can lead to contempt-like proceedings under the CPC."
    },
    {
        "id": "ch54-l3-q24",
        "question": "Regarding",
        "options": ["Because only their","was stopped, but their","still exist under the Constitution and must be monitored","Because they were given special voting power","It is not relevant anymore","Because they now have 4 seats in Rajya Sabha"],
        "correctAnswerIndex": 0,
        "explanation": "Legislative reservation (political) is different from socio-economic and educational safeguards (protections). The latter still need a watchdog."
    },
    {
        "id": "ch54-l3-q25",
        "question": "The NCSC is an",
        "options": ["That the Prime Minister appoints them directly","The highest level of constitutional appointment, similar to that of SC judges or the CAG","That they are employees of the cabinet","That they can never be removed"],
        "correctAnswerIndex": 1,
        "explanation": "This formality signifies that the appointment is a"
    },
    {
        "id": "ch54-l3-q26",
        "question": "The 65th Amendment (1990) moved the commission from Article 338(2) to Article 338(1). What was the significance of this?",
        "options": ["None, it was just a numbering change","It established the Commission as a more robust, permanent part of the Constitution","It made it a temporary body","It limited its budget"],
        "correctAnswerIndex": 1,
        "explanation": "It signified the institutionalization of the Commission from a single officer to a full-fledged authority."
    },
    {
        "id": "ch54-l3-q27",
        "question": "In the context of",
        "options": ["A list of names of all employees","A mechanism to ensure reservation quotas are correctly applied to vacancies sequentially","The attendance register","The salary slip"],
        "correctAnswerIndex": 1,
        "explanation": "The Roster is the mathematical and legal proof that reservations are being delivered. The NCSC is the primary checker of these rosters."
    },
    {
        "id": "ch54-l3-q28",
        "question": "The NCSC often focuses on",
        "options": ["Post-Matric Scholarships","Hostel facilities and zero Tolerance for caste-based discrimination in universities","The Ph.D. fellowships","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Education is the primary tool for social mobility. The NCSC monitors everything from funds to the"
    },
    {
        "id": "ch54-l3-q29",
        "question": "If a policy change occurs in the",
        "options": ["Can change it directly","Must be consulted, ensuring that the process follows the Article 341 procedure correctly","Has no role as it is purely political","Only monitors the voting impact"],
        "correctAnswerIndex": 1,
        "explanation": "Changing the SC list is a major policy decision requiring NCSC input before the President/Parliament takes the final step."
    },
    {
        "id": "ch54-l3-q30",
        "question": "Which of the following is the ultimate",
        "options": ["The power to arrest","The power of Publicity and Transparency (placing its findings before the Legislatures for public debate)","The power of the budget","The power to appoint ministers"],
        "correctAnswerIndex": 1,
        "explanation": "By forcing the government to respond and justify its actions publicly in the Parliament/State Legislatures, the NCSC creates accountability."
    },
    {
        "id": "ch54-l3-q31",
        "question": "Analyze the",
        "options": ["Both are members of their respective cabinets.","Both hold office during the","of their respective executive heads (President/Governor) and have no security of tenure.","The Advocate General is subordinate to the Attorney General.","The Advocate General is appointed for a fixed term of 5 years."],
        "correctAnswerIndex": 1,
        "explanation": "Both offices follow the"
    },
    {
        "id": "ch54-l3-q32",
        "question": "Assertion (A): The Advocate General can participate in the proceedings of any committee of the State Legislature to which he may be named a member (Art 177).\\nReason (R): As the highest law officer of the state, his legal expertise is crucial for the work of these committees.",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "This constitutional privilege ensures the legislature has direct access to the state"
    },
    {
        "id": "ch54-l3-q33",
        "question": "How does the",
        "options": ["He remains in office regardless.","By convention, he resigns as soon as the Council of Ministers (Government) resigns, as he is appointed on their advice.","The new government must impeach him.","He is appointed for life."],
        "correctAnswerIndex": 1,
        "explanation": "The office is essentially a political-professional appointment that follows the life-cycle of the state executive."
    },
    {
        "id": "ch54-l3-q34",
        "question": "The Advocate General must NOT",
        "options": ["To prevent him from making more money.","To avoid","as the","is always the prosecutor in criminal cases, and he is the head of the state","To save time for government work.","Only for terrorist cases."],
        "correctAnswerIndex": 1,
        "explanation": "He cannot fight against the entity (State) he represents as the chief lawyer."
    },
    {
        "id": "ch54-l3-q35",
        "question": "In a case of a",
        "options": ["A judge.","The representative of the state government to defend the validity of the law and present the state","Amicus Curiae (Friend of the Court).","A witness."],
        "correctAnswerIndex": 1,
        "explanation": "Defending state legislation in court is one of his core constitutional duties."
    },
    {
        "id": "ch54-l3-q36",
        "question": "Does the",
        "options": ["Yes.","No, he has the","in legal proceedings, but he must follow the procedural sittings and rules of the respective court.","Only in the Capital city","Only if the CM is the petitioner."],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional rights do not imply procedural administrative supremacy over the judiciary."
    },
    {
        "id": "ch54-l3-q37",
        "question": "Analyze the",
        "options": ["Yes.","No, he is a constitutional professional officer with allowed private practice (with conditions), and is not a part of the permanent civil services.","The AG is a politician.","The AG is a judicial officer."],
        "correctAnswerIndex": 1,
        "explanation": "He is a high constitutional officer, not a career bureaucrat."
    },
    {
        "id": "ch54-l3-q38",
        "question": "Does the Advocate General have the",
        "options": ["No.","Yes, he enjoys the same immunity as an MLA regarding anything said or any vote given (if he could) in the house proceedings.","Only for statements on the budget.","Only if he is a Senior Advocate."],
        "correctAnswerIndex": 1,
        "explanation": "Free speech in the house is essential for him to provide legal context to the legislature."
    },
    {
        "id": "ch54-l3-q39",
        "question": "If a citizen sues the state government for a",
        "options": ["Yes.","No, it would be a direct conflict with his primary role as advisor and counsel to the state executive.","Only with the CM","Only for human rights cases."],
        "correctAnswerIndex": 1,
        "explanation": "Representation of the State is the core mandate of the office."
    },
    {
        "id": "ch54-l3-q40",
        "question": "Analyze the",
        "options": ["Yes.","No, it is NOT mentioned as","in Article 165; the constitution says he shall receive such remuneration as the Governor may determine (Art 165(3)).","Only the travel allowance is charged.","Only after 10 years of service."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike Judges, his pay is at the discretion of the executive, reflecting the"
    },
    {
        "id": "ch54-l3-q41",
        "question": "Does the Advocate General have the power to",
        "options": ["No.","Yes, for certain criminal contempt motions in the High Court, his written consent is required to filter out frivolous petitions.","Only for the Speaker.","Only if the Chief Justice is absent."],
        "correctAnswerIndex": 1,
        "explanation": "The AG acts as a"
    },
    {
        "id": "ch54-l3-q42",
        "question": "Analysis of Art 177. Can the Advocate General be a member of a",
        "options": ["No.","Yes, the article allows him to be named a member of ANY committee of the State Legislature.","Only for the Public Accounts Committee.","Only if he is also a lawyer in the HC."],
        "correctAnswerIndex": 1,
        "explanation": "Technical assistance on complex Bills is common in joint committees."
    },
    {
        "id": "ch54-l3-q43",
        "question": "The AG must be",
        "options": ["Yes, automatically.","Actually, Article 217 for HC judge does NOT mention","(unlike Art 124 for SC judge), so the AG must typically have 10 years judicial office or 10 years advocate experience.","Only for the first 5 years of the constitution.","Only by an Amendment."],
        "correctAnswerIndex": 1,
        "explanation": "HC judges (and thus AG) have more strictly defined"
    },
    {
        "id": "ch54-l3-q44",
        "question": "Consider the",
        "options": ["It becomes invalid.","It remains as","but the new AG may provide a fresh/different opinion to the new executive.","The AG is arrested.","The advice is deleted from the files."],
        "correctAnswerIndex": 1,
        "explanation": "Institutional continuity of the record is maintained, but political/legal strategy is updated."
    },
    {
        "id": "ch54-l3-q45",
        "question": "Does the Advocate General have a",
        "options": ["Yes (under Art 189).","No, he has NO right to vote anywhere in the House (Art 177).","Only if the Chairman of the committee allows.","Only if he is the oldest member."],
        "correctAnswerIndex": 1,
        "explanation": "The prohibition on voting (Art 177) is total and applies to committees as well."
    },
    {
        "id": "ch54-l3-q46",
        "question": "Analyze the",
        "options": ["No.","Yes, for state matters requiring confidentiality where the court permits in-camera proceedings.","Only for spy cases.","Only during midnight."],
        "correctAnswerIndex": 1,
        "explanation": "He is the chief representative of the state"
    },
    {
        "id": "ch54-l3-q47",
        "question": "Has the Advocate General any",
        "options": ["Yes, on legal grounds.","No, he is an",". The Minister (Executive) is responsible to the house for policy decisions.","Only for constitutional amendments.","Only if he is older than the Minister."],
        "correctAnswerIndex": 1,
        "explanation": "Expert advice vs Democratic finality; the latter prevails in the Cabinet system."
    },
    {
        "id": "ch54-l3-q48",
        "question": "The",
        "options": ["On every court brief.","Actually, the AG doesn","Office Seal","Only on his salary slip.","Only on the budget."],
        "correctAnswerIndex": 1,
        "explanation": "He is an officer appearing"
    },
    {
        "id": "ch54-l3-q49",
        "question": "If the AG is found to be in",
        "options": ["Impeachment.","The Governor can fire him instantly as he holds office during",".","The High Court can fire him.","Only the CM can decide."],
        "correctAnswerIndex": 1,
        "explanation": "No complex procedure is required for removal of Advocate General."
    },
    {
        "id": "ch54-l3-q50",
        "question": "Analyze Article 165(1). To whom does the Governor give",
        "options": ["The Chief Justice.","Actually, the Constitution doesn","Advice","The President.","The Speaker."],
        "correctAnswerIndex": 1,
        "explanation": "The general principle of Governor acting on CM"
    },
    {
        "id": "ch54-l3-q51",
        "question": "Does the AG have any power to",
        "options": ["Yes.","No, Public Prosecutors are appointed by the State Government under the CrPC (Code of Criminal Procedure).","By the High Court.","By the DG of Police."],
        "correctAnswerIndex": 1,
        "explanation": "Statutory staffing of the legal department is an executive function."
    },
    {
        "id": "ch54-l3-q52",
        "question": "The",
        "options": ["Losing a vote in Assembly.","The convention of resignation following a change in the state political executive (Government).","His salary being paid by the political party.","He only appears for the CM."],
        "correctAnswerIndex": 1,
        "explanation": "The trust is tied to the executive mandate."
    },
    {
        "id": "ch54-l3-q53",
        "question": "Can the AG write a",
        "options": ["Yes.","No, he is not a member of the Cabinet; he provides a","which the Cabinet may or may not accept.","Only for tax bills.","Only if the CM agrees."],
        "correctAnswerIndex": 1,
        "explanation": "His input is"
    },
    {
        "id": "ch54-l3-q54",
        "question": "Is the Advocate General the",
        "options": ["No.","Yes.","Only for alternate years.","Only if he is a former judge."],
        "correctAnswerIndex": 0,
        "explanation": "The AG is usually an ex-officio"
    },
    {
        "id": "ch54-l3-q55",
        "question": "Analyze Article 165(2). Who specifies",
        "options": ["The State Legislature.","The Governor of the State.","The High Court Chief Justice.","The Law Minister solely."],
        "correctAnswerIndex": 1,
        "explanation": "The Governor assigns specific mandates beyond the standard ones."
    },
    {
        "id": "ch54-l3-q56",
        "question": "Does the AG have any authority to",
        "options": ["Yes, as he is the head of the law officers in the state.","No.","Only during a National Emergency.","Only for water disputes."],
        "correctAnswerIndex": 0,
        "explanation": "Functionally, he oversees the state"
    },
    {
        "id": "ch54-l3-q57",
        "question": "If a state law is declared",
        "options": ["Yes.","No, legal advice is given in good faith; the legislature is responsible for the law, and courts review it.","The AG must be arrested.","The AG has to pay the court costs."],
        "correctAnswerIndex": 1,
        "explanation": "Advice does not equal the final legislative act."
    },
    {
        "id": "ch54-l3-q58",
        "question": "Who receives the AG",
        "options": ["The Speaker.","The House as a whole (Table of the House).","The Opposition leader.","The Governor only."],
        "correctAnswerIndex": 1,
        "explanation": "Public legal advice to the legislature becomes part of the public record."
    },
    {
        "id": "ch54-l3-q59",
        "question": "Wait. Can the Advocate General continue his",
        "options": ["Yes, provided it doesn","No.","Only for corporate cases.","Only for families."],
        "correctAnswerIndex": 0,
        "explanation": "He is not a whole-time state employee."
    },
    {
        "id": "ch54-l3-q60",
        "question": "Who was the",
        "options": ["M.C. Setalvad.","K.Parasaran.","C.K. Daphtary.","Varied state by state; usually senior leaders of the Bar."],
        "correctAnswerIndex": 3,
        "explanation": "Each state has its own history of eminent lawyers serving as AG."
    }
];

export const CHAPTER_54_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
