import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch68-l1-q1",
        "question": "Which Constitutional Amendment Act granted constitutional status to the National Commission for Backward Classes (NCBC)?",
        "options": ["101st Amendment Act","102nd Amendment Act","103rd Amendment Act","105th Amendment Act"],
        "correctAnswerIndex": 1,
        "explanation": "The 102nd Constitutional Amendment Act of 2018 conferred constitutional status on the NCBC."
    },
    {
        "id": "ch68-l1-q2",
        "question": "Under which Article of the Constitution of India is the NCBC currently established?",
        "options": ["Article 338","Article 338A","Article 338B","Article 340"],
        "correctAnswerIndex": 2,
        "explanation": "Article 338B of the Constitution deals with the National Commission for Backward Classes."
    },
    {
        "id": "ch68-l1-q3",
        "question": "Before becoming a constitutional body in 2018, the NCBC was a statutory body established under the NCBC Act of:",
        "options": ["1990","1993","2000","2014"],
        "correctAnswerIndex": 1,
        "explanation": "The NCBC was initially established as a statutory body in 1993 following the Supreme Court"
    },
    {
        "id": "ch68-l1-q4",
        "question": "The NCBC consists of a Chairperson, a Vice-Chairperson, and how many other members?",
        "options": ["Two","Three","Four","Five"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission consists of a Chairperson, a Vice-Chairperson, and three other members."
    },
    {
        "id": "ch68-l1-q5",
        "question": "The Chairperson and members of the NCBC are appointed by:",
        "options": ["The Prime Minister","The President of India","The Minister of Social Justice and Empowerment","A Committee headed by the PM"],
        "correctAnswerIndex": 1,
        "explanation": "They are appointed by the President by warrant under his hand and seal."
    },
    {
        "id": "ch68-l1-q6",
        "question": "The conditions of service and tenure of office of the NCBC members are determined by:",
        "options": ["The Parliament","The President","The Ministry of Social Justice","The UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "The President determines the conditions of service and tenure of office for NCBC members."
    },
    {
        "id": "ch68-l1-q7",
        "question": "To whom does the NCBC submit its annual report regarding the safeguards for socially and educationally backward classes?",
        "options": ["The Parliament","The President","The Prime Minister","The National Commission for SCs"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission presents an annual report to the President, who then lays it before each House of Parliament."
    },
    {
        "id": "ch68-l1-q8",
        "question": "Which Article of the Constitution empowers the President to appoint a Commission to investigate the conditions of backward classes (Commission of Inquiry)?",
        "options": ["Article 338B","Article 340","Article 342A","Article 366"],
        "correctAnswerIndex": 1,
        "explanation": "Article 340 provides for the appointment of a Commission to investigate the conditions of backward classes."
    },
    {
        "id": "ch68-l1-q9",
        "question": "The NCBC has the power to regulate its own procedure.",
        "options": ["True, under Article 338B(4)","False, procedures are set by the PMO","Only if the Supreme Court permits","Only during a National Emergency"],
        "correctAnswerIndex": 0,
        "explanation": "Like NCSC and NCST, the NCBC has the constitutional power to regulate its own procedure under Article 338B(4)."
    },
    {
        "id": "ch68-l1-q10",
        "question": "The first Backward Classes Commission (1953) was headed by:",
        "options": ["B.P. Mandal","Kaka Kalelkar","Morarji Desai","Jagjivan Ram"],
        "correctAnswerIndex": 1,
        "explanation": "The first Backward Classes Commission was appointed in 1953 under the chairmanship of Kaka Kalelkar."
    },
    {
        "id": "ch68-l1-q11",
        "question": "The second Backward Classes Commission (1979) was headed by:",
        "options": ["B.P. Mandal","Kaka Kalelkar","Sivashankar","Hanumantharayappa"],
        "correctAnswerIndex": 0,
        "explanation": "The second Backward Classes Commission was appointed in 1979 under the chairmanship of B.P. Mandal."
    },
    {
        "id": "ch68-l1-q12",
        "question": "In which landmark case did the Supreme Court direct the government to create a permanent statutory body for OBCs?",
        "options": ["Kesavananda Bharati","Indra Sawhney (1992)","Minerva Mills","Golaknath"],
        "correctAnswerIndex": 1,
        "explanation": "In Indra Sawhney v. Union of India (1992), the SC directed the Central Government to establish a permanent body to examine requests for inclusion/exclusion from the list of backward classes."
    },
    {
        "id": "ch68-l1-q13",
        "question": "Until 2018, which body was investigating complaints and grievances of OBCs?",
        "options": ["NCBC","NCSC","National Commission for Minorities","Planning Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Prior to the 102nd Amendment, the NCSC was mandated to look after the grievances of OBCs as well."
    },
    {
        "id": "ch68-l1-q14",
        "question": "The term of office for NCBC members is generally set at ______ years.",
        "options": ["3","5","6","At the pleasure of the President"],
        "correctAnswerIndex": 0,
        "explanation": "Current rules specify a term of three years for the Chairperson and members."
    },
    {
        "id": "ch68-l1-q15",
        "question": "The NCBC report is caused to be laid before each House of Parliament by:",
        "options": ["The Chairperson","The President of India","The Prime Minister","The Speaker"],
        "correctAnswerIndex": 1,
        "explanation": "The President is constitutionally responsible for laying the NCBC reports before Parliament."
    },
    {
        "id": "ch68-l1-q16",
        "question": "Which Article provides for the",
        "options": ["Article 366(26C)","Article 341","Article 342","Article 338B"],
        "correctAnswerIndex": 0,
        "explanation": "Article 366(26C) defines SEBCs."
    },
    {
        "id": "ch68-l1-q17",
        "question": "The NCBC is authorized to inquire into specific complaints regarding deprivation of rights of:",
        "options": ["All Citizens","Socially and Educationally Backward Classes (SEBCs)","Economically Weaker Sections (EWS)","Religious Minorities"],
        "correctAnswerIndex": 1,
        "explanation": "The NCBC"
    },
    {
        "id": "ch68-l1-q18",
        "question": "Which Amendment restored the power of State Governments to maintain their own state list of OBCs?",
        "options": ["102nd Amendment","103rd Amendment","105th Amendment","106th Amendment"],
        "correctAnswerIndex": 2,
        "explanation": "The 105th Amendment Act (2021) restored the power of State Governments and UTs to identify and maintain their own list of OBCs."
    },
    {
        "id": "ch68-l1-q19",
        "question": "The NCBC has the rank of a ______ for its Chairperson.",
        "options": ["Cabinet Minister","Minister of State","Secretary","Judge"],
        "correctAnswerIndex": 0,
        "explanation": "The Chairperson has the rank of a Union Cabinet Minister."
    },
    {
        "id": "ch68-l1-q20",
        "question": "The Vice-Chairperson of NCBC has the rank of:",
        "options": ["Cabinet Minister","Minister of State","Secretary","Joint Secretary"],
        "correctAnswerIndex": 1,
        "explanation": "The Vice-Chairperson has the rank of a Minister of State."
    },
    {
        "id": "ch68-l1-q21",
        "question": "How many members other than the Chairperson and Vice-Chairperson are in the NCBC?",
        "options": ["2","3","4","5"],
        "correctAnswerIndex": 1,
        "explanation": "Total 5 members: 1 Chairperson, 1 Vice-Chairperson, and 3 other members."
    },
    {
        "id": "ch68-l1-q22",
        "question": "The headquarters of the NCBC is in:",
        "options": ["Mumbai","Hyderabad","New Delhi","Chennai"],
        "correctAnswerIndex": 2,
        "explanation": "NCBC is headquartered in New Delhi."
    },
    {
        "id": "ch68-l1-q23",
        "question": "Is the NCBC",
        "options": ["Yes","No","Only during elections","Only if SC orders"],
        "correctAnswerIndex": 0,
        "explanation": "Under Article 338B(5)(d), the Commission must present an annual report to the President."
    },
    {
        "id": "ch68-l1-q24",
        "question": "Can the NCBC investigate a case",
        "options": ["Yes","No","Only with PM","Only for central government jobs"],
        "correctAnswerIndex": 0,
        "explanation": "The Commission can initiate investigations on its own motion."
    },
    {
        "id": "ch68-l1-q25",
        "question": "While investigating, the NCBC has powers of which court?",
        "options": ["Criminal Court","High Court","Civil Court","Supreme Court"],
        "correctAnswerIndex": 2,
        "explanation": "It has the powers of a civil court trying a suit."
    },
    {
        "id": "ch68-l1-q26",
        "question": "The mandatory",
        "options": ["Article 338B(1)","Article 338B(9)","Article 340","Article 341"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338B(9) mandates consultation on all major policy matters affecting SEBCs."
    },
    {
        "id": "ch68-l1-q27",
        "question": "The 102nd Amendment Act added which Article for notifying the list of SEBCs?",
        "options": ["Article 341","Article 342","Article 342A","Article 338B"],
        "correctAnswerIndex": 2,
        "explanation": "Article 342A deals with the notification of SEBCs."
    },
    {
        "id": "ch68-l1-q28",
        "question": "The administrative ministry for NCBC is:",
        "options": ["Ministry of Home Affairs","Ministry of Social Justice and Empowerment","Ministry of Law","Ministry of Tribal Affairs"],
        "correctAnswerIndex": 1,
        "explanation": "Nodal ministry: Social Justice and Empowerment."
    },
    {
        "id": "ch68-l1-q29",
        "question": "Are NCBC members eligible for re-appointment?",
        "options": ["No","Yes, for a maximum of two terms","Yes, for a maximum of three terms","Indefinitely"],
        "correctAnswerIndex": 1,
        "explanation": "The rules allow appointment for a maximum of two terms."
    },
    {
        "id": "ch68-l1-q30",
        "question": "The NCBC is the watchdog for safeguards of which community?",
        "options": ["SCs","STs","SEBCs (OBCs)","Linguistic Minorities"],
        "correctAnswerIndex": 2,
        "explanation": "The NCBC is dedicated to the Socially and Educationally Backward Classes."
    },
    {
        "id": "ch68-l1-q31",
        "question": "The 105th Constitutional Amendment Act (2021) clarified the power of the State Governments to:",
        "options": ["Abolish the NCBC","Identify and maintain their own state list of socially and educationally backward classes","Appoint the Chairperson of the National Commission","Increase the creamy layer limit to 50 lakhs"],
        "correctAnswerIndex": 1,
        "explanation": "The 105th Amendment clarified that States and UTs have the power to identify SEBCs for their own purposes, restoring the position prior to the Maratha reservation case interpretation."
    },
    {
        "id": "ch68-l1-q32",
        "question": "While investigating a complaint, the NCBC has the powers of a civil court. Which of the following is NOT one of those powers?",
        "options": ["Summoning any person and examining them on oath","Issuing search warrants for criminal investigation","Requiring the discovery and production of any document","Receiving evidence on affidavits"],
        "correctAnswerIndex": 1,
        "explanation": "The NCBC has powers of a civil court (summoning, documents, affidavits) but NOT criminal powers (like issuing search warrants or ordering arrests)."
    },
    {
        "id": "ch68-l1-q33",
        "question": "The",
        "options": ["Kesavananda Bharati Case","Indra Sawhney vs. Union of India (1992)","Maneka Gandhi Case","Minerva Mills Case"],
        "correctAnswerIndex": 1,
        "explanation": "In the Indra Sawhney case (Mandal Case), the Supreme Court upheld the 27% reservation for OBCs but directed the exclusion of the"
    },
    {
        "id": "ch68-l1-q34",
        "question": "When the NCBC report relates to a matter concerning a State Government, the President forwards it to:",
        "options": ["The Governor of that State","The Chief Minister","The State High Court","The State Legislative Assembly directly"],
        "correctAnswerIndex": 0,
        "explanation": "Reports concerning states are sent to the Governor, who places them before the State Legislature."
    },
    {
        "id": "ch68-l1-q35",
        "question": "The Central and State Governments are required to consult the NCBC on:",
        "options": ["All major policy matters affecting socially and educationally backward classes","The selection of the Chief Justice of India","The implementation of the National Education Policy across all segments","The declaration of war"],
        "correctAnswerIndex": 0,
        "explanation": "Article 338B(9) mandates consultation on all major policy matters affecting SEBCs."
    },
    {
        "id": "ch68-l1-q36",
        "question": "Article 342A, inserted by the 102nd Amendment, deals with:",
        "options": ["The salary of the NCBC members","The power of the President to specify the socially and educationally backward classes in relation to a State or UT","The removal of the Chairperson","The interaction between NCBC and UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "Article 342A provides the mechanism for identifying and notifying the list of SEBCs."
    },
    {
        "id": "ch68-l1-q37",
        "question": "The NCBC",
        "options": ["Yes","No, EWS is a separate category under the 103rd Amendment and its safeguards are not managed by the NCBC","Only for local elections","Only if they are from North India"],
        "correctAnswerIndex": 1,
        "explanation": "EWS reservation (103rd Amendment) is based on economic criteria alone and is distinct from SEBC/OBC categories handled by NCBC."
    },
    {
        "id": "ch68-l1-q38",
        "question": "If the Government does not accept a recommendation of the NCBC, it must lay before Parliament a",
        "options": ["The financial burden of the recommendation","The reasons for such non-acceptance","The bio-data of the members who made the recommendation","The legal opinion of the Attorney General"],
        "correctAnswerIndex": 1,
        "explanation": "Mandatory transparency: reasons for non-acceptance must be reported to the legislature."
    },
    {
        "id": "ch68-l1-q39",
        "question": "The Chairperson of the NCBC is usually a person who is or has been:",
        "options": ["A Judge of the Supreme Court or High Court","An eminent social worker or academician","Both (a) and (b) are considered as per practice/rules","A serving Member of Parliament"],
        "correctAnswerIndex": 2,
        "explanation": "Rules allow for persons belonging to different backgrounds (Judiciary, Social Work, Academia) to head the Commission."
    },
    {
        "id": "ch68-l1-q40",
        "question": "What is the primary difference between the NCBC before and after the 102nd Amendment?",
        "options": ["It became a temporary body after 2018","It moved from being a statutory body to a constitutional body with expanded powers to investigate grievances","It was renamed as the Equality Commission","It lost its power to recommend inclusions"],
        "correctAnswerIndex": 1,
        "explanation": "The 102nd Amendment upgraded NCBC to a constitutional body (338B) and gave it grievance redressal powers similar to NCSC and NCST."
    },
    {
        "id": "ch68-l1-q41",
        "question": "The",
        "options": ["27%","33%","50%","60%"],
        "correctAnswerIndex": 2,
        "explanation": "The SC ruled that reservation should not exceed 50%, except in certain extraordinary situations."
    },
    {
        "id": "ch68-l1-q42",
        "question": "Regarding the",
        "options": ["The NCBC directly","The Central Government (Ministry of Social Justice)","The Supreme Court","The President"],
        "correctAnswerIndex": 1,
        "explanation": "The Central Government reviews and updates the income criteria for the creamy layer (currently 8 lakhs per annum)."
    },
    {
        "id": "ch68-l1-q43",
        "question": "Can the NCBC investigate the denial of reservation benefits in a",
        "options": ["Yes","No, as reservation currently applies mostly to state-funded or government jobs","Only in banks","Only in the medical field"],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional reservation is primarily for state services; NCBC mandate follows where the law provides for reservation."
    },
    {
        "id": "ch68-l1-q44",
        "question": "The",
        "options": ["1951","1931","1971","1981"],
        "correctAnswerIndex": 1,
        "explanation": "The Mandal Commission relied on the 1931 census data for its estimations."
    },
    {
        "id": "ch68-l1-q45",
        "question": "The NCBC",
        "options": ["Hiding of records by government offices during investigations","OBC members from going to High Court","The PM from visiting the commission","The budget from being passed"],
        "correctAnswerIndex": 0,
        "explanation": "Civil court powers (summoning, production of documents) allow the commission to compel offices to provide evidence."
    },
    {
        "id": "ch68-l1-q46",
        "question": "The 105th Amendment (2021) was brought to",
        "options": ["Kesavananda Case","Maratha Reservation Case (Jaishri Laxmanrao Patil v. CM, Maharashtra)","Minerva Mills","Ayodhya Case"],
        "correctAnswerIndex": 1,
        "explanation": "The SC interpretation in the Maratha case suggested that after the 102nd Amendment, only the President could notify lists for both Centre and States. The 105th Amendment restored the States"
    },
    {
        "id": "ch68-l1-q47",
        "question": "Does the NCBC have the power to",
        "options": ["Yes","No, it can only recommend; the final power rests with the President and Parliament (under Art 342A)","Only for local tribes","Only if the GOI is not functioning"],
        "correctAnswerIndex": 1,
        "explanation": "The NCBC is an advisory body; the legal notification is done by the President."
    },
    {
        "id": "ch68-l1-q48",
        "question": "What does",
        "options": ["Socially and Economically Backward Classes","Socially and Educationally Backward Classes","State and Environment Backward Classes","Selective and Evolving Backward Classes"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution uses the phrase"
    },
    {
        "id": "ch68-l1-q49",
        "question": "If a policy affecting OBCs is not referred to the NCBC, it is a violation of:",
        "options": ["Article 14","Article 338B(9)","The IPC","The CrPC"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338B(9) makes consultation on major policy matters mandatory."
    },
    {
        "id": "ch68-l1-q50",
        "question": "Who appoints the",
        "options": ["NCSC","The President of India","The Prime Minister","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Article 340 empowers the President to appoint such commissions."
    },
    {
        "id": "ch68-l1-q51",
        "question": "The",
        "options": ["Promotions only","Initial Recruitment only","Both (a) and (b)","Neither (a) nor (b)"],
        "correctAnswerIndex": 1,
        "explanation": "OBC reservation is only for initial recruitment, and creamy layer is excluded at this stage."
    },
    {
        "id": "ch68-l1-q52",
        "question": "Is the Chairperson",
        "options": ["Yes","No, it is a constitutional post protected from such disqualifications","Only if they are also a Minister","Only if they receive a salary from a private firm"],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional posts are generally exempt or handled under specific rules for holding such offices."
    },
    {
        "id": "ch68-l1-q53",
        "question": "The",
        "options": ["Social, Educational, and Economic","Income only","Religion only","Place of birth only"],
        "correctAnswerIndex": 0,
        "explanation": "It used a multi-dimensional criteria covering social, educational, and economic aspects."
    },
    {
        "id": "ch68-l1-q54",
        "question": "The total number of castes in the OBC list is approximately:",
        "options": ["100","500","More than 5000","Exactly 2000"],
        "correctAnswerIndex": 2,
        "explanation": "The number is large and subject to inclusions by central and state lists."
    },
    {
        "id": "ch68-l1-q55",
        "question": "Is the NCSC still responsible for OBCs after the 102nd Amendment?",
        "options": ["Yes","No, the responsibility has been transferred to NCBC","Only in North Eastern states","Only for SC-OBC mixed communities"],
        "correctAnswerIndex": 1,
        "explanation": "The 102nd Amendment relieved NCSC of its functions regarding OBCs."
    },
    {
        "id": "ch68-l1-q56",
        "question": "The NCBC can",
        "options": ["They are an witness in a case of rights deprivation","They are a relative of the Chairman","The PM orders it","It cannot summon private individuals"],
        "correctAnswerIndex": 0,
        "explanation": "Its civil court powers allow it to summon ANY person relevant to the investigation."
    },
    {
        "id": "ch68-l1-q57",
        "question": "The",
        "options": ["15%","22.5%","27%","33%"],
        "correctAnswerIndex": 2,
        "explanation": "The SC upheld the 27% reservation for OBCs recommended by the Mandal Commission."
    },
    {
        "id": "ch68-l1-q58",
        "question": "The",
        "options": ["Examine requests for inclusion/exclusion from the list only","Investigate human rights atrocities","Decide on the creamy layer limit","Abolish reservations"],
        "correctAnswerIndex": 0,
        "explanation": "The original statutory body had a limited mandate of checking inclusions/exclusions."
    },
    {
        "id": "ch68-l1-q59",
        "question": "The 102nd Amendment Act received presidential assent in:",
        "options": ["2014","2016","2018","2020"],
        "correctAnswerIndex": 2,
        "explanation": "It became law in August 2018."
    },
    {
        "id": "ch68-l1-q60",
        "question": "The NCBC submits its report relating to a Union Territory to:",
        "options": ["The Lieutenant Governor","The President of India","The Chief Minister of UT","The Home Minister"],
        "correctAnswerIndex": 1,
        "explanation": "All reports are submitted to the President."
    },
    {
        "id": "ch68-l1-q61",
        "question": "Consider the following statements regarding the NCBC",
        "options": ["1, 2, and 3 only","2, 3, and 4 only","1 and 2 only","1, 2, 3, and 4"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1, 2, and 3 are standard civil court powers granted to the NCBC under Article 338B(8). Statement 4 is false: while it can"
    },
    {
        "id": "ch68-l1-q62",
        "question": "Regarding the 105th Constitutional Amendment Act (2021), what was the primary constitutional",
        "options": ["The abolition of the creamy layer concept","The interpretation of the Supreme Court in the Maratha Reservation case which suggested that States had lost the power to identify OBCs","The merger of NCSC and NCBC","The transfer of all reservation powers to the UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "The 105th Amendment restored the power of State Governments and UTs to identify and maintain their own list of OBCs, which was lost due to the SC"
    },
    {
        "id": "ch68-l1-q63",
        "question": "Assertion (A): The NCBC is considered a more powerful body after the 102nd Amendment compared to its statutory predecessor.\\nReason (R): It now possesses the constitutional mandate to redress grievances and inquire into specific complaints regarding the deprivation of rights of SEBCs, which the statutory body lacked.",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "The upgrade from statutory to constitutional body significantly expanded the NCBC"
    },
    {
        "id": "ch68-l1-q64",
        "question": "Which of the following describes the",
        "options": ["Establishment of a dedicated commission, specification of the proportion of reservation (not exceeding 50%), and the gathering of empirical data on the nature of backwardness","A literacy test, a wealth test, and a social status test","Approval by the PM, the CM, and the local DM","Investigation by NCSC, NCST, and NCBC together"],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch68-l1-q65",
        "question": "Regarding the",
        "options": ["1, 2, and 3 only","2, 3, and 4 only","1 and 3 only","1, 2, 3, and 4"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 4 is false: the SC explicitly ruled that reservation cannot be based solely on religion. Statements 1, 2, and 3 were key findings of the judgment."
    },
    {
        "id": "ch68-l1-q66",
        "question": "In the case of",
        "options": ["It provides the final list of OBCs for every state","It acts as the primary advisory body to the Union government regarding the empirical data collected by states for such reservations","It conducts the local elections directly","It has no role in local body elections"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 338B(9), the government (Union and State) must consult the NCBC on major policy matters, which include such structural reservation shifts."
    },
    {
        "id": "ch68-l1-q67",
        "question": "Which Article of the Constitution establishes the power of the President to specify the backward classes in relation to a State or Union Territory?",
        "options": ["Article 340","Article 341","Article 342A","Article 338B"],
        "correctAnswerIndex": 2,
        "explanation": "Article 342A, inserted by the 102nd Amendment, gives the President the power to notify the list of SEBCs."
    },
    {
        "id": "ch68-l1-q68",
        "question": "When a recommendation of the NCBC is relates to a",
        "options": ["The President must lay it before Parliament","The President sends a copy to the State Governor, who places it before the State Legislature along with an explanatory memorandum","The Chief Minister must implement it within 30 days","The recommendation is automatically law"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338B(6/7) details this process, ensuring that state-level rejections are also made public and debated in the state legislature."
    },
    {
        "id": "ch68-l1-q69",
        "question": "Regarding the",
        "options": ["The Supreme Court had stayed its report","Changes in the central government and lack of political consensus on the 27% reservation quota","The report was found to be statistically incorrect","B.P. Mandal had withdrawn the report"],
        "correctAnswerIndex": 1,
        "explanation": "The report was submitted in 1980, but it was not until the V.P. Singh government in 1990 that the decision to implement the 27% reservation was taken."
    },
    {
        "id": "ch68-l1-q70",
        "question": "The 102nd Amendment (2018) removed the mandate from which body to look after OBCs?",
        "options": ["National Commission for Scheduled Tribes","National Commission for Scheduled Castes","Planning Commission","Minority Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Prior to 2018, Article 338 (NCSC) had a clause that its functions regarding SCs would also apply to OBCs and Anglo-Indians. This was changed with 338B."
    },
    {
        "id": "ch68-l1-q71",
        "question": "In the context of",
        "options": ["The income of siblings is included in the family income calculation","The income of siblings is NOT included in the family income calculation; only parents","Only the income of elder siblings is considered","Only the income of younger siblings is considered"],
        "correctAnswerIndex": 1,
        "explanation": "As per the DOPT rules and NCBC recommendations, only the parents"
    },
    {
        "id": "ch68-l1-q72",
        "question": "The NCBC can inquire into the deprivation of rights of SEBCs in which of the following scenarios?\\n1. Denial of admission in a central university despite a valid certificate.\\n2. Non-compliance with the roster system in a government department.\\n3. Discrimination in a private multinational corporation and its hiring policy.\\nSelect the correct answer:",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "NCBC"
    },
    {
        "id": "ch68-l1-q73",
        "question": "Which Article of the Constitution deals with the",
        "options": ["Article 338B(1)","Article 338B(5)(c)","Article 340","Article 342A"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338B(5)(c) lists this as a specific function of the Commission."
    },
    {
        "id": "ch68-l1-q74",
        "question": "What is the constitutional significance of Article 366(26C)?",
        "options": ["It defines Scheduled Castes","It provides for the salary of the CAG","It defines","as such backward classes as are so deemed under Article 342A","It specifies the 6th schedule areas"],
        "correctAnswerIndex": 2,
        "explanation": "This definition clause links SEBCs to the Article 342A identification process."
    },
    {
        "id": "ch68-l1-q75",
        "question": "The NCBC",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "The Commission can access"
    },
    {
        "id": "ch68-l1-q76",
        "question": "The NCBC can",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 involve deprivation of existing rights and administrative failure. Statement 3 (inclusion/exclusion) is an advisory function of the Commission where it recommends to the President; it doesn"
    },
    {
        "id": "ch68-l1-q77",
        "question": "What is the legal status of",
        "options": ["They are mandatory rules of law","They are administrative protocols that ensure smooth information flow and help the commission fulfill its investigative mandate effectively","They are just suggestions with no weight","They can only be enforced by the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Like its sister commissions, the NCBC uses its power to"
    },
    {
        "id": "ch68-l1-q78",
        "question": "The NCBC recently focused on the",
        "options": ["Justice G. Rohini Commission","Justice Verma Commission","Sarkaria Commission","Punchhi Commission"],
        "correctAnswerIndex": 0,
        "explanation": "The G. Rohini Commission was appointed to examine the sub-categorization of OBCs to ensure equitable distribution of reservation benefits."
    },
    {
        "id": "ch68-l1-q79",
        "question": "Assertion (A): The NCBC has the power to",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "Access to records is the foundation of investigative justice. Without this, the Commission could only rely on private testimonies, which might be incomplete."
    },
    {
        "id": "ch68-l1-q80",
        "question": "In the case of",
        "options": ["Cancel the certificate directly","Investigate the case and recommend the state government or the issuing authority to verify and cancel if found fraudulent, and prosecute the individual","Ignore it as it","Only the UPSC can handle this"],
        "correctAnswerIndex": 1,
        "explanation": "Fake certificates deprive genuine candidates. The NCBC monitors this as a violation of the constitutional safeguards of the community."
    },
    {
        "id": "ch68-l1-q81",
        "question": "Which of the following describes the",
        "options": ["Investigative watchdog (for specific cases) and Developmental advisor (for planning)","Financial auditor and Political party leader","Judge and Executioner","Teacher and Researcher"],
        "correctAnswerIndex": 0,
        "explanation": "This encapsulates the breadth of Article 338B(5): reacting to injustices and proactively advising on planning for the SEBCs."
    },
    {
        "id": "ch68-l1-q82",
        "question": "The 105th Amendment (2021) added",
        "options": ["To allow the President to dissolve state commissions","To clarify that","means the list maintained by the Central Government for its own purposes (jobs/admissions) and doesn","To abolish the concept of creamy layer","To merge NCST and NCBC in Union Territories"],
        "correctAnswerIndex": 1,
        "explanation": "This"
    },
    {
        "id": "ch68-l1-q83",
        "question": "If a government official is summoned by the NCBC and refuses to appear, the Commission can:",
        "options": ["Issue a warrant and fine the official as a civil court would","Ask the President to dismiss the official","Do nothing","Only write a letter"],
        "correctAnswerIndex": 0,
        "explanation": "Its civil court powers are real; failure to comply with a summon can lead to contempt-like proceedings under the CPC."
    },
    {
        "id": "ch68-l1-q84",
        "question": "Regarding",
        "options": ["1, 2, and 3","1 and 2 only","1 and 3 only","2 and 3 only"],
        "correctAnswerIndex": 0,
        "explanation": "All three are mandatory conditions for qualifying the judicial scrutiny for local body reservation."
    },
    {
        "id": "ch68-l1-q85",
        "question": "The NCBC is an",
        "options": ["That the Prime Minister appoints them directly","The highest level of constitutional appointment, similar to that of SC judges or the CAG","That they are employees of the cabinet","That they can never be removed"],
        "correctAnswerIndex": 1,
        "explanation": "This formality signifies that the appointment is a"
    },
    {
        "id": "ch68-l1-q86",
        "question": "The 102nd Amendment (2018) moved the commission from a statutory post to Article 338B. What was the significance of this?",
        "options": ["None, it was just a numbering change","It established the Commission as a robust, permanent part of the Constitution","It made it a temporary body","It limited its budget"],
        "correctAnswerIndex": 1,
        "explanation": "It signified the institutionalization of the Commission from a body that just checked"
    },
    {
        "id": "ch68-l1-q87",
        "question": "In the context of",
        "options": ["A list of names of all employees","A mechanism to ensure reservation quotas are correctly applied to vacancies sequentially","The attendance register","The salary slip"],
        "correctAnswerIndex": 1,
        "explanation": "The Roster is the mathematical and legal proof that reservations are being delivered. The NCBC is the primary checker of these rosters."
    },
    {
        "id": "ch68-l1-q88",
        "question": "The NCBC often focuses on",
        "options": ["Post-Matric Scholarships for SEBC students","Reservation in central educational institutions like IITs/IIMs","The implementation of the","filter in admissions","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Education is the primary tool for social mobility. The NCBC monitors everything from funds to the"
    },
    {
        "id": "ch68-l1-q89",
        "question": "If a government department fails to consult the NCBC on a major policy change for SEBCs, the NCBC can:",
        "options": ["Recommend to the President that the policy be suspended until consultation is complete","File a writ petition in the High Court directly as a petitioner","Ignore it","Both (a) and (b) depending on the context"],
        "correctAnswerIndex": 0,
        "explanation": "Its primary constitutional path is reporting back to the President. Litigation is usually a last resort or handled through intervention in existing cases."
    },
    {
        "id": "ch68-l1-q90",
        "question": "Which of the following is the ultimate",
        "options": ["The power to arrest","The power of Publicity and Transparency (placing its findings before the Legislatures for public debate)","The power of the budget","The power to appoint ministers"],
        "correctAnswerIndex": 1,
        "explanation": "By forcing the government to respond and justify its actions publicly in the Parliament/State Legislatures, the NCBC creates accountability."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch68-l2-q1",
        "question": "The 105th Constitutional Amendment Act (2021) clarified the power of the State Governments to:",
        "options": ["Abolish the NCBC","Identify and maintain their own state list of socially and educationally backward classes","Appoint the Chairperson of the National Commission","Increase the creamy layer limit to 50 lakhs"],
        "correctAnswerIndex": 1,
        "explanation": "The 105th Amendment clarified that States and UTs have the power to identify SEBCs for their own purposes, restoring the position prior to the Maratha reservation case interpretation."
    },
    {
        "id": "ch68-l2-q2",
        "question": "While investigating a complaint, the NCBC has the powers of a civil court. Which of the following is NOT one of those powers?",
        "options": ["Summoning any person and examining them on oath","Issuing search warrants for criminal investigation","Requiring the discovery and production of any document","Receiving evidence on affidavits"],
        "correctAnswerIndex": 1,
        "explanation": "The NCBC has powers of a civil court (summoning, documents, affidavits) but NOT criminal powers (like issuing search warrants or ordering arrests)."
    },
    {
        "id": "ch68-l2-q3",
        "question": "The",
        "options": ["Kesavananda Bharati Case","Indra Sawhney vs. Union of India (1992)","Maneka Gandhi Case","Minerva Mills Case"],
        "correctAnswerIndex": 1,
        "explanation": "In the Indra Sawhney case (Mandal Case), the Supreme Court upheld the 27% reservation for OBCs but directed the exclusion of the"
    },
    {
        "id": "ch68-l2-q4",
        "question": "When the NCBC report relates to a matter concerning a State Government, the President forwards it to:",
        "options": ["The Governor of that State","The Chief Minister","The State High Court","The State Legislative Assembly directly"],
        "correctAnswerIndex": 0,
        "explanation": "Reports concerning states are sent to the Governor, who places them before the State Legislature."
    },
    {
        "id": "ch68-l2-q5",
        "question": "The Central and State Governments are required to consult the NCBC on:",
        "options": ["All major policy matters affecting socially and educationally backward classes","The selection of the Chief Justice of India","The implementation of the National Education Policy across all segments","The declaration of war"],
        "correctAnswerIndex": 0,
        "explanation": "Article 338B(9) mandates consultation on all major policy matters affecting SEBCs."
    },
    {
        "id": "ch68-l2-q6",
        "question": "Article 342A, inserted by the 102nd Amendment, deals with:",
        "options": ["The salary of the NCBC members","The power of the President to specify the socially and educationally backward classes in relation to a State or UT","The removal of the Chairperson","The interaction between NCBC and UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "Article 342A provides the mechanism for identifying and notifying the list of SEBCs."
    },
    {
        "id": "ch68-l2-q7",
        "question": "The NCBC",
        "options": ["Yes","No, EWS is a separate category under the 103rd Amendment and its safeguards are not managed by the NCBC","Only for local elections","Only if they are from North India"],
        "correctAnswerIndex": 1,
        "explanation": "EWS reservation (103rd Amendment) is based on economic criteria alone and is distinct from SEBC/OBC categories handled by NCBC."
    },
    {
        "id": "ch68-l2-q8",
        "question": "If the Government does not accept a recommendation of the NCBC, it must lay before Parliament a",
        "options": ["The financial burden of the recommendation","The reasons for such non-acceptance","The bio-data of the members who made the recommendation","The legal opinion of the Attorney General"],
        "correctAnswerIndex": 1,
        "explanation": "Mandatory transparency: reasons for non-acceptance must be reported to the legislature."
    },
    {
        "id": "ch68-l2-q9",
        "question": "The Chairperson of the NCBC is usually a person who is or has been:",
        "options": ["A Judge of the Supreme Court or High Court","An eminent social worker or academician","Both (a) and (b) are considered as per practice/rules","A serving Member of Parliament"],
        "correctAnswerIndex": 2,
        "explanation": "Rules allow for persons belonging to different backgrounds (Judiciary, Social Work, Academia) to head the Commission."
    },
    {
        "id": "ch68-l2-q10",
        "question": "What is the primary difference between the NCBC before and after the 102nd Amendment?",
        "options": ["It became a temporary body after 2018","It moved from being a statutory body to a constitutional body with expanded powers to investigate grievances","It was renamed as the Equality Commission","It lost its power to recommend inclusions"],
        "correctAnswerIndex": 1,
        "explanation": "The 102nd Amendment upgraded NCBC to a constitutional body (338B) and gave it grievance redressal powers similar to NCSC and NCST."
    },
    {
        "id": "ch68-l2-q11",
        "question": "The",
        "options": ["27%","33%","50%","60%"],
        "correctAnswerIndex": 2,
        "explanation": "The SC ruled that reservation should not exceed 50%, except in certain extraordinary situations."
    },
    {
        "id": "ch68-l2-q12",
        "question": "Regarding the",
        "options": ["The NCBC directly","The Central Government (Ministry of Social Justice)","The Supreme Court","The President"],
        "correctAnswerIndex": 1,
        "explanation": "The Central Government reviews and updates the income criteria for the creamy layer (currently 8 lakhs per annum)."
    },
    {
        "id": "ch68-l2-q13",
        "question": "Can the NCBC investigate the denial of reservation benefits in a",
        "options": ["Yes","No, as reservation currently applies mostly to state-funded or government jobs","Only in banks","Only in the medical field"],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional reservation is primarily for state services; NCBC mandate follows where the law provides for reservation."
    },
    {
        "id": "ch68-l2-q14",
        "question": "The",
        "options": ["1951","1931","1971","1981"],
        "correctAnswerIndex": 1,
        "explanation": "The Mandal Commission relied on the 1931 census data for its estimations."
    },
    {
        "id": "ch68-l2-q15",
        "question": "The NCBC",
        "options": ["Hiding of records by government offices during investigations","OBC members from going to High Court","The PM from visiting the commission","The budget from being passed"],
        "correctAnswerIndex": 0,
        "explanation": "Civil court powers (summoning, production of documents) allow the commission to compel offices to provide evidence."
    },
    {
        "id": "ch68-l2-q16",
        "question": "The 105th Amendment (2021) was brought to",
        "options": ["Kesavananda Case","Maratha Reservation Case (Jaishri Laxmanrao Patil v. CM, Maharashtra)","Minerva Mills","Ayodhya Case"],
        "correctAnswerIndex": 1,
        "explanation": "The SC interpretation in the Maratha case suggested that after the 102nd Amendment, only the President could notify lists for both Centre and States. The 105th Amendment restored the States"
    },
    {
        "id": "ch68-l2-q17",
        "question": "Does the NCBC have the power to",
        "options": ["Yes","No, it can only recommend; the final power rests with the President and Parliament (under Art 342A)","Only for local tribes","Only if the GOI is not functioning"],
        "correctAnswerIndex": 1,
        "explanation": "The NCBC is an advisory body; the legal notification is done by the President."
    },
    {
        "id": "ch68-l2-q18",
        "question": "What does",
        "options": ["Socially and Economically Backward Classes","Socially and Educationally Backward Classes","State and Environment Backward Classes","Selective and Evolving Backward Classes"],
        "correctAnswerIndex": 1,
        "explanation": "The Constitution uses the phrase"
    },
    {
        "id": "ch68-l2-q19",
        "question": "If a policy affecting OBCs is not referred to the NCBC, it is a violation of:",
        "options": ["Article 14","Article 338B(9)","The IPC","The CrPC"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338B(9) makes consultation on major policy matters mandatory."
    },
    {
        "id": "ch68-l2-q20",
        "question": "Who appoints the",
        "options": ["NCSC","The President of India","The Prime Minister","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Article 340 empowers the President to appoint such commissions."
    },
    {
        "id": "ch68-l2-q21",
        "question": "The",
        "options": ["Promotions only","Initial Recruitment only","Both (a) and (b)","Neither (a) nor (b)"],
        "correctAnswerIndex": 1,
        "explanation": "OBC reservation is only for initial recruitment, and creamy layer is excluded at this stage."
    },
    {
        "id": "ch68-l2-q22",
        "question": "Is the Chairperson",
        "options": ["Yes","No, it is a constitutional post protected from such disqualifications","Only if they are also a Minister","Only if they receive a salary from a private firm"],
        "correctAnswerIndex": 1,
        "explanation": "Constitutional posts are generally exempt or handled under specific rules for holding such offices."
    },
    {
        "id": "ch68-l2-q23",
        "question": "The",
        "options": ["Social, Educational, and Economic","Income only","Religion only","Place of birth only"],
        "correctAnswerIndex": 0,
        "explanation": "It used a multi-dimensional criteria covering social, educational, and economic aspects."
    },
    {
        "id": "ch68-l2-q24",
        "question": "The total number of castes in the OBC list is approximately:",
        "options": ["100","500","More than 5000","Exactly 2000"],
        "correctAnswerIndex": 2,
        "explanation": "The number is large and subject to inclusions by central and state lists."
    },
    {
        "id": "ch68-l2-q25",
        "question": "Is the NCSC still responsible for OBCs after the 102nd Amendment?",
        "options": ["Yes","No, the responsibility has been transferred to NCBC","Only in North Eastern states","Only for SC-OBC mixed communities"],
        "correctAnswerIndex": 1,
        "explanation": "The 102nd Amendment relieved NCSC of its functions regarding OBCs."
    },
    {
        "id": "ch68-l2-q26",
        "question": "The NCBC can",
        "options": ["They are an witness in a case of rights deprivation","They are a relative of the Chairman","The PM orders it","It cannot summon private individuals"],
        "correctAnswerIndex": 0,
        "explanation": "Its civil court powers allow it to summon ANY person relevant to the investigation."
    },
    {
        "id": "ch68-l2-q27",
        "question": "The",
        "options": ["15%","22.5%","27%","33%"],
        "correctAnswerIndex": 2,
        "explanation": "The SC upheld the 27% reservation for OBCs recommended by the Mandal Commission."
    },
    {
        "id": "ch68-l2-q28",
        "question": "The",
        "options": ["Examine requests for inclusion/exclusion from the list only","Investigate human rights atrocities","Decide on the creamy layer limit","Abolish reservations"],
        "correctAnswerIndex": 0,
        "explanation": "The original statutory body had a limited mandate of checking inclusions/exclusions."
    },
    {
        "id": "ch68-l2-q29",
        "question": "The 102nd Amendment Act received presidential assent in:",
        "options": ["2014","2016","2018","2020"],
        "correctAnswerIndex": 2,
        "explanation": "It became law in August 2018."
    },
    {
        "id": "ch68-l2-q30",
        "question": "The NCBC submits its report relating to a Union Territory to:",
        "options": ["The Lieutenant Governor","The President of India","The Chief Minister of UT","The Home Minister"],
        "correctAnswerIndex": 1,
        "explanation": "All reports are submitted to the President."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch68-l3-q1",
        "question": "Consider the following statements regarding the NCBC",
        "options": ["1, 2, and 3 only","2, 3, and 4 only","1 and 2 only","1, 2, 3, and 4"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1, 2, and 3 are standard civil court powers granted to the NCBC under Article 338B(8). Statement 4 is false: while it can"
    },
    {
        "id": "ch68-l3-q2",
        "question": "Regarding the 105th Constitutional Amendment Act (2021), what was the primary constitutional",
        "options": ["The abolition of the creamy layer concept","The interpretation of the Supreme Court in the Maratha Reservation case which suggested that States had lost the power to identify OBCs","The merger of NCSC and NCBC","The transfer of all reservation powers to the UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "The 105th Amendment restored the power of State Governments and UTs to identify and maintain their own list of OBCs, which was lost due to the SC"
    },
    {
        "id": "ch68-l3-q3",
        "question": "Assertion (A): The NCBC is considered a more powerful body after the 102nd Amendment compared to its statutory predecessor.\\nReason (R): It now possesses the constitutional mandate to redress grievances and inquire into specific complaints regarding the deprivation of rights of SEBCs, which the statutory body lacked.",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "The upgrade from statutory to constitutional body significantly expanded the NCBC"
    },
    {
        "id": "ch68-l3-q4",
        "question": "Which of the following describes the",
        "options": ["Establishment of a dedicated commission, specification of the proportion of reservation (not exceeding 50%), and the gathering of empirical data on the nature of backwardness","A literacy test, a wealth test, and a social status test","Approval by the PM, the CM, and the local DM","Investigation by NCSC, NCST, and NCBC together"],
        "correctAnswerIndex": 0,
        "explanation": "The"
    },
    {
        "id": "ch68-l3-q5",
        "question": "Regarding the",
        "options": ["1, 2, and 3 only","2, 3, and 4 only","1 and 3 only","1, 2, 3, and 4"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 4 is false: the SC explicitly ruled that reservation cannot be based solely on religion. Statements 1, 2, and 3 were key findings of the judgment."
    },
    {
        "id": "ch68-l3-q6",
        "question": "In the case of",
        "options": ["It provides the final list of OBCs for every state","It acts as the primary advisory body to the Union government regarding the empirical data collected by states for such reservations","It conducts the local elections directly","It has no role in local body elections"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 338B(9), the government (Union and State) must consult the NCBC on major policy matters, which include such structural reservation shifts."
    },
    {
        "id": "ch68-l3-q7",
        "question": "Which Article of the Constitution establishes the power of the President to specify the backward classes in relation to a State or Union Territory?",
        "options": ["Article 340","Article 341","Article 342A","Article 338B"],
        "correctAnswerIndex": 2,
        "explanation": "Article 342A, inserted by the 102nd Amendment, gives the President the power to notify the list of SEBCs."
    },
    {
        "id": "ch68-l3-q8",
        "question": "When a recommendation of the NCBC is relates to a",
        "options": ["The President must lay it before Parliament","The President sends a copy to the State Governor, who places it before the State Legislature along with an explanatory memorandum","The Chief Minister must implement it within 30 days","The recommendation is automatically law"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338B(6/7) details this process, ensuring that state-level rejections are also made public and debated in the state legislature."
    },
    {
        "id": "ch68-l3-q9",
        "question": "Regarding the",
        "options": ["The Supreme Court had stayed its report","Changes in the central government and lack of political consensus on the 27% reservation quota","The report was found to be statistically incorrect","B.P. Mandal had withdrawn the report"],
        "correctAnswerIndex": 1,
        "explanation": "The report was submitted in 1980, but it was not until the V.P. Singh government in 1990 that the decision to implement the 27% reservation was taken."
    },
    {
        "id": "ch68-l3-q10",
        "question": "The 102nd Amendment (2018) removed the mandate from which body to look after OBCs?",
        "options": ["National Commission for Scheduled Tribes","National Commission for Scheduled Castes","Planning Commission","Minority Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Prior to 2018, Article 338 (NCSC) had a clause that its functions regarding SCs would also apply to OBCs and Anglo-Indians. This was changed with 338B."
    },
    {
        "id": "ch68-l3-q11",
        "question": "In the context of",
        "options": ["The income of siblings is included in the family income calculation","The income of siblings is NOT included in the family income calculation; only parents","Only the income of elder siblings is considered","Only the income of younger siblings is considered"],
        "correctAnswerIndex": 1,
        "explanation": "As per the DOPT rules and NCBC recommendations, only the parents"
    },
    {
        "id": "ch68-l3-q12",
        "question": "The NCBC can inquire into the deprivation of rights of SEBCs in which of the following scenarios?\\n1. Denial of admission in a central university despite a valid certificate.\\n2. Non-compliance with the roster system in a government department.\\n3. Discrimination in a private multinational corporation and its hiring policy.\\nSelect the correct answer:",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "NCBC"
    },
    {
        "id": "ch68-l3-q13",
        "question": "Which Article of the Constitution deals with the",
        "options": ["Article 338B(1)","Article 338B(5)(c)","Article 340","Article 342A"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338B(5)(c) lists this as a specific function of the Commission."
    },
    {
        "id": "ch68-l3-q14",
        "question": "What is the constitutional significance of Article 366(26C)?",
        "options": ["It defines Scheduled Castes","It provides for the salary of the CAG","It defines","as such backward classes as are so deemed under Article 342A","It specifies the 6th schedule areas"],
        "correctAnswerIndex": 2,
        "explanation": "This definition clause links SEBCs to the Article 342A identification process."
    },
    {
        "id": "ch68-l3-q15",
        "question": "The NCBC",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "The Commission can access"
    },
    {
        "id": "ch68-l3-q16",
        "question": "The NCBC can",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 involve deprivation of existing rights and administrative failure. Statement 3 (inclusion/exclusion) is an advisory function of the Commission where it recommends to the President; it doesn"
    },
    {
        "id": "ch68-l3-q17",
        "question": "What is the legal status of",
        "options": ["They are mandatory rules of law","They are administrative protocols that ensure smooth information flow and help the commission fulfill its investigative mandate effectively","They are just suggestions with no weight","They can only be enforced by the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Like its sister commissions, the NCBC uses its power to"
    },
    {
        "id": "ch68-l3-q18",
        "question": "The NCBC recently focused on the",
        "options": ["Justice G. Rohini Commission","Justice Verma Commission","Sarkaria Commission","Punchhi Commission"],
        "correctAnswerIndex": 0,
        "explanation": "The G. Rohini Commission was appointed to examine the sub-categorization of OBCs to ensure equitable distribution of reservation benefits."
    },
    {
        "id": "ch68-l3-q19",
        "question": "Assertion (A): The NCBC has the power to",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "Access to records is the foundation of investigative justice. Without this, the Commission could only rely on private testimonies, which might be incomplete."
    },
    {
        "id": "ch68-l3-q20",
        "question": "In the case of",
        "options": ["Cancel the certificate directly","Investigate the case and recommend the state government or the issuing authority to verify and cancel if found fraudulent, and prosecute the individual","Ignore it as it","Only the UPSC can handle this"],
        "correctAnswerIndex": 1,
        "explanation": "Fake certificates deprive genuine candidates. The NCBC monitors this as a violation of the constitutional safeguards of the community."
    },
    {
        "id": "ch68-l3-q21",
        "question": "Which of the following describes the",
        "options": ["Investigative watchdog (for specific cases) and Developmental advisor (for planning)","Financial auditor and Political party leader","Judge and Executioner","Teacher and Researcher"],
        "correctAnswerIndex": 0,
        "explanation": "This encapsulates the breadth of Article 338B(5): reacting to injustices and proactively advising on planning for the SEBCs."
    },
    {
        "id": "ch68-l3-q22",
        "question": "The 105th Amendment (2021) added",
        "options": ["To allow the President to dissolve state commissions","To clarify that","means the list maintained by the Central Government for its own purposes (jobs/admissions) and doesn","To abolish the concept of creamy layer","To merge NCST and NCBC in Union Territories"],
        "correctAnswerIndex": 1,
        "explanation": "This"
    },
    {
        "id": "ch68-l3-q23",
        "question": "If a government official is summoned by the NCBC and refuses to appear, the Commission can:",
        "options": ["Issue a warrant and fine the official as a civil court would","Ask the President to dismiss the official","Do nothing","Only write a letter"],
        "correctAnswerIndex": 0,
        "explanation": "Its civil court powers are real; failure to comply with a summon can lead to contempt-like proceedings under the CPC."
    },
    {
        "id": "ch68-l3-q24",
        "question": "Regarding",
        "options": ["1, 2, and 3","1 and 2 only","1 and 3 only","2 and 3 only"],
        "correctAnswerIndex": 0,
        "explanation": "All three are mandatory conditions for qualifying the judicial scrutiny for local body reservation."
    },
    {
        "id": "ch68-l3-q25",
        "question": "The NCBC is an",
        "options": ["That the Prime Minister appoints them directly","The highest level of constitutional appointment, similar to that of SC judges or the CAG","That they are employees of the cabinet","That they can never be removed"],
        "correctAnswerIndex": 1,
        "explanation": "This formality signifies that the appointment is a"
    },
    {
        "id": "ch68-l3-q26",
        "question": "The 102nd Amendment (2018) moved the commission from a statutory post to Article 338B. What was the significance of this?",
        "options": ["None, it was just a numbering change","It established the Commission as a robust, permanent part of the Constitution","It made it a temporary body","It limited its budget"],
        "correctAnswerIndex": 1,
        "explanation": "It signified the institutionalization of the Commission from a body that just checked"
    },
    {
        "id": "ch68-l3-q27",
        "question": "In the context of",
        "options": ["A list of names of all employees","A mechanism to ensure reservation quotas are correctly applied to vacancies sequentially","The attendance register","The salary slip"],
        "correctAnswerIndex": 1,
        "explanation": "The Roster is the mathematical and legal proof that reservations are being delivered. The NCBC is the primary checker of these rosters."
    },
    {
        "id": "ch68-l3-q28",
        "question": "The NCBC often focuses on",
        "options": ["Post-Matric Scholarships for SEBC students","Reservation in central educational institutions like IITs/IIMs","The implementation of the","filter in admissions","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Education is the primary tool for social mobility. The NCBC monitors everything from funds to the"
    },
    {
        "id": "ch68-l3-q29",
        "question": "If a government department fails to consult the NCBC on a major policy change for SEBCs, the NCBC can:",
        "options": ["Recommend to the President that the policy be suspended until consultation is complete","File a writ petition in the High Court directly as a petitioner","Ignore it","Both (a) and (b) depending on the context"],
        "correctAnswerIndex": 0,
        "explanation": "Its primary constitutional path is reporting back to the President. Litigation is usually a last resort or handled through intervention in existing cases."
    },
    {
        "id": "ch68-l3-q30",
        "question": "Which of the following is the ultimate",
        "options": ["The power to arrest","The power of Publicity and Transparency (placing its findings before the Legislatures for public debate)","The power of the budget","The power to appoint ministers"],
        "correctAnswerIndex": 1,
        "explanation": "By forcing the government to respond and justify its actions publicly in the Parliament/State Legislatures, the NCBC creates accountability."
    }
];

export const CHAPTER_68_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
