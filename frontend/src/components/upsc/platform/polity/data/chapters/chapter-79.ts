import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch79-l1-q1",
        "question": "Which Part of the Indian Constitution deals with",
        "options": ["Part XIV","Part XIV-A","Part XV","Part XVI"],
        "correctAnswerIndex": 1,
        "explanation": "Part XIV-A of the Constitution (Articles 323A and 323B) deals with Tribunals."
    },
    {
        "id": "ch79-l1-q2",
        "question": "The provisions relating to Tribunals were added to the Constitution by which Amendment Act?",
        "options": ["24th Amendment Act","42nd Amendment Act","44th Amendment Act","73rd Amendment Act"],
        "correctAnswerIndex": 1,
        "explanation": "Part XIV-A was added by the 42nd Constitutional Amendment Act of 1976."
    },
    {
        "id": "ch79-l1-q3",
        "question": "Article 323A of the Constitution empowers which body to establish administrative tribunals?",
        "options": ["The President","The Parliament","The State Legislature","The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Article 323A empowers Parliament to provide for the adjudication of disputes relating to recruitment and conditions of service of persons appointed to public services."
    },
    {
        "id": "ch79-l1-q4",
        "question": "Administrative Tribunals are established primarily for dealing with:",
        "options": ["Taxation matters","Election disputes","Service matters of government employees","Industrial disputes"],
        "correctAnswerIndex": 2,
        "explanation": "Article 323A specifically deals with administrative tribunals for"
    },
    {
        "id": "ch79-l1-q5",
        "question": "Which Article provides for tribunals for",
        "options": ["Article 323A","Article 323B","Article 324","Article 262"],
        "correctAnswerIndex": 1,
        "explanation": "Article 323B empowers both Parliament and State Legislatures to establish tribunals for various other matters like taxation, labor, etc."
    },
    {
        "id": "ch79-l1-q6",
        "question": "The Central Administrative Tribunal (CAT) was established in which year?",
        "options": ["1976","1980","1985","1990"],
        "correctAnswerIndex": 2,
        "explanation": "The Central Administrative Tribunal (CAT) was set up in 1985 under the Administrative Tribunals Act of 1985."
    },
    {
        "id": "ch79-l1-q7",
        "question": "The Chairman of the Central Administrative Tribunal (CAT) is usually a:",
        "options": ["Retired Judge of a High Court","Serving or retired Judge of a High Court","Member of the UPSC","Advocated General"],
        "correctAnswerIndex": 1,
        "explanation": "The Chairman of CAT is a person who is or has been a Judge of a High Court."
    },
    {
        "id": "ch79-l1-q8",
        "question": "Who appoints the Chairman and members of the Central Administrative Tribunal?",
        "options": ["The Chief Justice of India","The President","The Parliament","The UPSC"],
        "correctAnswerIndex": 1,
        "explanation": "The President of India appoints the Chairman, Vice-Chairman, and members of CAT."
    },
    {
        "id": "ch79-l1-q9",
        "question": "Are Administrative Tribunals bound by the procedure laid down in the Civil Procedure Code (CPC)?",
        "options": ["Yes, strictly","No, they are guided by the principles of natural justice","Only for criminal cases","Only in the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Tribunals are not bound by the technical rules of the CPC or the Evidence Act; they follow the principles of natural justice."
    },
    {
        "id": "ch79-l1-q10",
        "question": "An appeal against the orders of the Central Administrative Tribunal (CAT) shall lie to which court?",
        "options": ["The High Court (Division Bench)","The Supreme Court directly","The President","The Tribunals cannot be appealed"],
        "correctAnswerIndex": 0,
        "explanation": "Following the L. Chandra Kumar case (1997), appeals against CAT orders lie before the division bench of the concerned High Court."
    },
    {
        "id": "ch79-l1-q11",
        "question": "State Administrative Tribunals (SATs) are established by:",
        "options": ["The Governor of the State","The State Legislature","The Central Government (on request of the State Government)","The High Court"],
        "correctAnswerIndex": 2,
        "explanation": "SATs are established by the Central Government on a specific request from the State Government concerned."
    },
    {
        "id": "ch79-l1-q12",
        "question": "Which of the following matters CANNOT be referred to a tribunal under Article 323B?",
        "options": ["Taxation","Foreign Exchange","Land Reforms","Appointment of Supreme Court Judges"],
        "correctAnswerIndex": 3,
        "explanation": "Appointment of SC judges is a constitutional process and not a matter for tribunals specified under Art 323B."
    },
    {
        "id": "ch79-l1-q13",
        "question": "The main objective of creating tribunals is to:",
        "options": ["Increase the burden on courts","Provide speedy and inexpensive justice","Make the judiciary subordinate to the executive","Abolish the High Courts"],
        "correctAnswerIndex": 1,
        "explanation": "Tribunals are"
    },
    {
        "id": "ch79-l1-q14",
        "question": "The Central Administrative Tribunal (CAT) has the status of a:",
        "options": ["Civil Court","High Court","Quasi-judicial body","Criminal Court"],
        "correctAnswerIndex": 2,
        "explanation": "Tribunals are quasi-judicial bodies that exercise judicial powers but are not part of the regular court hierarchy."
    },
    {
        "id": "ch79-l1-q15",
        "question": "Can a retired Chairman of CAT hold any further employment under the Government of India?",
        "options": ["Yes, anywhere","No, they are ineligible for further employment under Central or State governments","Only in the Supreme Court","Only in the Planning Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Members and Chairmen of CAT have certain restrictions on further employment to ensure impartiality."
    },
    {
        "id": "ch79-l1-q16",
        "question": "Which Article provides for the exclusion of jurisdiction of all courts (except Supreme Court) by the Parliament for service matters?",
        "options": ["Article 323A","Article 323B","Article 136","Article 226"],
        "correctAnswerIndex": 0,
        "explanation": "Article 323A(2)(d) mentions the exclusion of jurisdiction of all courts except the Supreme Court under Article 136."
    },
    {
        "id": "ch79-l1-q17",
        "question": "The",
        "options": ["Mumbai","Kolkata","New Delhi","Chennai"],
        "correctAnswerIndex": 2,
        "explanation": "The principal seat of CAT is in New Delhi."
    },
    {
        "id": "ch79-l1-q18",
        "question": "The members of Administrative Tribunals include:",
        "options": ["Only Judicial members","Only Administrative members","Both Judicial and Administrative members","Members of Parliament"],
        "correctAnswerIndex": 2,
        "explanation": "Tribunals are composed of both judicial and administrative experts to provide balanced adjudication."
    },
    {
        "id": "ch79-l1-q19",
        "question": "Which Article of the Constitution was amended to include Part XIV-A?",
        "options": ["Article 368","Article 323","It was a new part added","Article 312"],
        "correctAnswerIndex": 2,
        "explanation": "Part XIV-A was a new addition by the 42nd Amendment, not an amendment to an existing article."
    },
    {
        "id": "ch79-l1-q20",
        "question": "The",
        "options": ["2010","2015","2021","2024"],
        "correctAnswerIndex": 2,
        "explanation": "The Tribunals Reforms Act, 2021, was passed to abolish certain tribunals and transfer their functions to existing judicial bodies."
    },
    {
        "id": "ch79-l1-q21",
        "question": "A",
        "options": ["Is exactly like a court","Has powers similar to a court but is not a court","Has only administrative powers","Has only legislative powers"],
        "correctAnswerIndex": 1,
        "explanation": "Quasi-judicial bodies like tribunals can hear evidence and make decisions but have more flexible procedures than courts."
    },
    {
        "id": "ch79-l1-q22",
        "question": "Does Article 323B allow",
        "options": ["Yes","No, only Parliament","Only for land reforms","Only with the President"],
        "correctAnswerIndex": 0,
        "explanation": "Unlike Art 323A (Parliament only), Art 323B allows both Parliament and State Legislatures (within their competence) to establish tribunals."
    },
    {
        "id": "ch79-l1-q23",
        "question": "The",
        "options": ["Basic Structure of the Constitution","Jurisdiction of Tribunals and Judicial Review","Reservation in promotion","Panchayati Raj"],
        "correctAnswerIndex": 1,
        "explanation": "The case held that judicial review is part of the basic structure and hence tribunals are subject to High Court"
    },
    {
        "id": "ch79-l1-q24",
        "question": "The term of office for the CAT Chairman (as per recent rules) is generally:",
        "options": ["5 years or 65 years of age","4 years or 70 years of age","3 years or 62 years of age","6 years or 65 years of age"],
        "correctAnswerIndex": 1,
        "explanation": "The Tribunals Reforms Act and subsequent rules have standardized terms, often to 4 years."
    },
    {
        "id": "ch79-l1-q25",
        "question": "Are",
        "options": ["Yes","No","Only for pension matters","Only the officers"],
        "correctAnswerIndex": 1,
        "explanation": "Members of naval, military or air forces and staff of the Supreme Court/secretariats of Parliament are NOT covered by CAT."
    },
    {
        "id": "ch79-l1-q26",
        "question": "Who appoints the staff of the Central Administrative Tribunal (CAT)?",
        "options": ["UPSC","The President","The Chairman of CAT","Ministry of Personnel"],
        "correctAnswerIndex": 1,
        "explanation": "The President appoints the officers and other employees of the tribunal."
    },
    {
        "id": "ch79-l1-q27",
        "question": "Which tribunal deals with environmental disputes in India?",
        "options": ["Central Administrative Tribunal","National Green Tribunal (NGT)","Armed Forces Tribunal","Income Tax Appellate Tribunal"],
        "correctAnswerIndex": 1,
        "explanation": "The NGT (established 2010) is a specialized tribunal for environmental protection cases."
    },
    {
        "id": "ch79-l1-q28",
        "question": "Which authority provides the",
        "options": ["State Legislature","The Governor","The President","The State High Court"],
        "correctAnswerIndex": 2,
        "explanation": "Since SATs are established by the Central Government, the President determines the conditions of service."
    },
    {
        "id": "ch79-l1-q29",
        "question": "Can a Joint Administrative Tribunal (JAT) be established for two or more states?",
        "options": ["Yes","No","Only in the North-East","Only for Union Territories"],
        "correctAnswerIndex": 0,
        "explanation": "The Administrative Tribunals Act, 1985, provides for Joint Administrative Tribunals (JATs) for multiple states."
    },
    {
        "id": "ch79-l1-q30",
        "question": "Article 323A is contained in which chapter of Part XIV-A?",
        "options": ["Chapter I","Chapter II","There are no chapters","Chapter III"],
        "correctAnswerIndex": 2,
        "explanation": "Part XIV-A consists only of two articles (323A and 323B) and is not divided into chapters."
    },
    {
        "id": "ch79-l1-q31",
        "question": "Which of the following describes the difference between Article 323A and Article 323B?",
        "options": ["323A is for service matters; 323B is for other matters","323A can be established only by Parliament; 323B can be established by both Parliament and State Legislatures","Only one tribunal for the Union and one for each state can be established under 323A; there is no such hierarchy under 323B","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "All these points correctly distinguish the specialized Article 323A from the general Article 323B."
    },
    {
        "id": "ch79-l1-q32",
        "question": "Before the",
        "options": ["High Court","Supreme Court directly under Article 136","Districts Courts","None, the decision was final and non-appealable"],
        "correctAnswerIndex": 1,
        "explanation": "Initially, the Administrative Tribunals Act provided for direct appeal to the Supreme Court, bypassing the High Courts, which was later declared unconstitutional."
    },
    {
        "id": "ch79-l1-q33",
        "question": "Which of the following is NOT a member of the",
        "options": ["Chief Justice of India or a Judge of SC","Cabinet Secretary","Secretary to the Government of India in the Ministry of Personnel","Leader of Opposition"],
        "correctAnswerIndex": 3,
        "explanation": "Recent rules provide for a committee headed by CJI/SC Judge, but the Leader of Opposition is generally not a member of this specific selection committee."
    },
    {
        "id": "ch79-l1-q34",
        "question": "The",
        "options": ["Article 323A","Article 323B","Article 226","Article 136"],
        "correctAnswerIndex": 0,
        "explanation": "The Act of 1985 was enacted by Parliament using the power granted by Article 323A."
    },
    {
        "id": "ch79-l1-q35",
        "question": "A",
        "options": ["A person who is or has been a Judge of a High Court","An advocate of a High Court for at least 10 years","A member of the Indian Legal Service (Grade I) for 3 years","Any of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Judicial members are chosen from amongst judges, lawyers, or senior legal service officers."
    },
    {
        "id": "ch79-l1-q36",
        "question": "Regarding",
        "options": ["The IAS or other Central Services holding the rank of Secretary to GoI","Retired IPS officers","Principals of Law Colleges","Only those with a PhD in Administration"],
        "correctAnswerIndex": 0,
        "explanation": "Administrative members are senior civil servants with significant administrative experience."
    },
    {
        "id": "ch79-l1-q37",
        "question": "Does the Supreme Court have",
        "options": ["Yes","No","Only in criminal matters","Only if the President allows"],
        "correctAnswerIndex": 0,
        "explanation": "The Supreme Court"
    },
    {
        "id": "ch79-l1-q38",
        "question": "Which of the following is TRUE about SATs (State Administrative Tribunals)?",
        "options": ["They have benches in every district","Their members","The President appoints members after consulting the Governor of the state","The State Legislature appoints members"],
        "correctAnswerIndex": 2,
        "explanation": "While it"
    },
    {
        "id": "ch79-l1-q39",
        "question": "Members of which of the following services are excluded from CAT",
        "options": ["Member of the All-India Services","Secretariat staff of the Rajya Sabha","Employees of the Delhi Development Authority","Group A officers of the Postal Service"],
        "correctAnswerIndex": 1,
        "explanation": "The Secretariat staff of Parliament is excluded under the Administrative Tribunals Act."
    },
    {
        "id": "ch79-l1-q40",
        "question": "The",
        "options": ["Article 323A","Article 323B","Article 265","Article 280"],
        "correctAnswerIndex": 1,
        "explanation": "ITAT deals with taxation, which falls under Article 323B."
    },
    {
        "id": "ch79-l1-q41",
        "question": "Can a Tribunal",
        "options": ["No, only High Courts can review","Yes, if such power is granted by the statute (like the 1985 Act)","Yes, but only in the presence of the CJI","Only for math errors"],
        "correctAnswerIndex": 1,
        "explanation": "Tribunals like CAT have the power to review their own orders to correct errors of fact or law."
    },
    {
        "id": "ch79-l1-q42",
        "question": "The primary difference between a Court and a Tribunal is that:",
        "options": ["Courts are bound by strict rules of evidence; Tribunals are not","Courts can try all civil and criminal cases; Tribunals only specialized ones","Judges of courts are independent of the executive; Tribunal members can be from the executive","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "These are the fundamental characteristics that distinguish the judiciary from quasi-judicial bodies."
    },
    {
        "id": "ch79-l1-q43",
        "question": "Article 323B mentions",
        "options": ["42nd Amendment","44th Amendment","75th Amendment","It was there in the original 42nd Amendment text"],
        "correctAnswerIndex": 3,
        "explanation": "Article 323B was introduced by the 42nd Amendment with a comprehensive list including land reforms."
    },
    {
        "id": "ch79-l1-q44",
        "question": "Who acts as the",
        "options": ["The Registrar","The Chairman","The Vice-Chairman","The Ministry of Personnel"],
        "correctAnswerIndex": 1,
        "explanation": "The Chairman is the administrative and judicial head of the tribunal."
    },
    {
        "id": "ch79-l1-q45",
        "question": "If a State Government abolishes its State Administrative Tribunal (SAT), where do the pending cases go?",
        "options": ["Central Administrative Tribunal","Supreme Court","Respective High Court","They are dismissed"],
        "correctAnswerIndex": 2,
        "explanation": "Pending cases are transferred to the High Court having jurisdiction over the state."
    },
    {
        "id": "ch79-l1-q46",
        "question": "Does Article 323B provide for a hierarchy of tribunals?",
        "options": ["Yes, specifically mentioned","No, it","Only for industrial disputes","Only for Union matters"],
        "correctAnswerIndex": 1,
        "explanation": "Article 323B(2)(i) states that the law can provide for the establishment of a hierarchy of tribunals."
    },
    {
        "id": "ch79-l1-q47",
        "question": "Regarding",
        "options": ["Yes, under Section 17 of the 1985 Act","No, only High Courts have contempt powers","Only with Supreme Court","Only against government officers"],
        "correctAnswerIndex": 0,
        "explanation": "CAT has been given powers of contempt similar to High Courts to maintain its authority."
    },
    {
        "id": "ch79-l1-q48",
        "question": "Can the",
        "options": ["Yes, the Article specifically mentions","","No, Article 324 is overriding","Only for Rajya Sabha","Only for State Legislatures"],
        "correctAnswerIndex": 0,
        "explanation": "Article 323B(2)(f) allows for tribunals for"
    },
    {
        "id": "ch79-l1-q49",
        "question": "Which of the following is a",
        "options": ["Judicial Members only","Expert Members only","Both Judicial and Expert Members","Only retired SC judges"],
        "correctAnswerIndex": 2,
        "explanation": "NGT consists of judicial members and expert members (who have specialized knowledge in environmental science)."
    },
    {
        "id": "ch79-l1-q50",
        "question": "Under Article 323A, which body can exclude the jurisdiction of High Courts?",
        "options": ["The President","The Parliament by law","The Supreme Court","The Finance Minister"],
        "correctAnswerIndex": 1,
        "explanation": "Parliament can exclude jurisdiction of all courts (except Supreme Court) while establishing administrative tribunals."
    },
    {
        "id": "ch79-l1-q51",
        "question": "Regarding the",
        "options": ["High Court","Supreme Court (on limited grounds)","Chief of Army Staff","President"],
        "correctAnswerIndex": 1,
        "explanation": "Appeals against AFT orders lie only to the Supreme Court on points of law of general public importance."
    },
    {
        "id": "ch79-l1-q52",
        "question": "The",
        "options": ["Auxiliary","Executive","Parallel","Secondary"],
        "correctAnswerIndex": 2,
        "explanation": "They function as specialized bodies parallel to the traditional court system for specific issues."
    },
    {
        "id": "ch79-l1-q53",
        "question": "Which of the following is NOT a matter listed in Article 323B?",
        "options": ["Taxation","Rent and Revenue","Copyright and Trade Marks","Inter-state Water Disputes"],
        "correctAnswerIndex": 3,
        "explanation": "Inter-state water disputes are governed by Article 262, not 323B."
    },
    {
        "id": "ch79-l1-q54",
        "question": "A person appointed as a member of CAT generally serves for a term of (as per standard practice):",
        "options": ["5 years or 62 years of age","4 years or 67 years of age","5 years or 65 years of age","6 years or 70 years of age"],
        "correctAnswerIndex": 1,
        "explanation": "For Members, the age limit is 67, while for the Chairman it is 70."
    },
    {
        "id": "ch79-l1-q55",
        "question": "Can a",
        "options": ["Yes","No, they must generally exhaust available administrative remedies first","Only if they pray to the President","Only for salary disputes"],
        "correctAnswerIndex": 1,
        "explanation": "The 1985 Act requires that internal remedies must be exhausted before filing an application in the tribunal."
    },
    {
        "id": "ch79-l1-q56",
        "question": "The",
        "options": ["CAT","Supreme Court and High Courts","All Tribunals","District Courts"],
        "correctAnswerIndex": 1,
        "explanation": "Only the Supreme Court and High Courts are constitutional"
    },
    {
        "id": "ch79-l1-q57",
        "question": "Which of the following is a",
        "options": ["Judge of the Supreme Court","Chief Justice of a High Court","Retired Judge of a High Court","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "NGT judicial members are drawn from the ranks of serving or retired SC judges and HC Chief Justices/Judges."
    },
    {
        "id": "ch79-l1-q58",
        "question": "Was the",
        "options": ["Yes, it repealed Article 323B","No, the 44th Amendment did not touch this Part","It added","to the list","It removed judicial members"],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment focused on Emergency and other provisions, leaving the 42nd Amendment"
    },
    {
        "id": "ch79-l1-q59",
        "question": "If a service matter involves a",
        "options": ["Yes","No, only for Group A and B","Only if the Supreme Court permits","Only for IAS officers"],
        "correctAnswerIndex": 0,
        "explanation": "CAT"
    },
    {
        "id": "ch79-l1-q60",
        "question": "The",
        "options": ["Article 323B","The Foreigners Act, 1946","Citizenship Act","Article 323A"],
        "correctAnswerIndex": 1,
        "explanation": "These are executive tribunals established under a specific Act (Foreigners Act) and not necessarily under Part XIV-A directly."
    },
    {
        "id": "ch79-l1-q61",
        "question": "Assertion (A): Article 323A(2)(d) of the Constitution allows the exclusion of jurisdiction of all courts except the Supreme Court under Article 136.\\nReason (R): In",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 1,
        "explanation": "Both statements are individually true. A describes the constitutional provision as written, and R describes the judicial interpretation that effectively overruled the"
    },
    {
        "id": "ch79-l1-q62",
        "question": "The",
        "options": ["Creation of a new All-India Judicial Service","Constitutional validity of the National Tax Tribunal (NTT)","Abolition of SATs","Appointment of IAS officers in CAT"],
        "correctAnswerIndex": 1,
        "explanation": "In this case, the Supreme Court struck down the National Tax Tribunal Act, holding that the NTT cannot usurp the judicial functions of High Courts."
    },
    {
        "id": "ch79-l1-q63",
        "question": "Consider the following regarding the",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "The 2021 Act aimed at streamlining the tribunal system by abolishing bodies that were overlap or redundant."
    },
    {
        "id": "ch79-l1-q64",
        "question": "Which of the following describes the",
        "options": ["Members must have the same salary as High Court Judges","The terms of office and security of tenure must be such that the executive cannot easily influence them","Members must be appointed by the Prime Minister directly","Tribunals must not be subject to any court"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court has repeatedly (MBA series of cases) stressed that the conditions of service in tribunals must be comparable to the judiciary to ensure independence."
    },
    {
        "id": "ch79-l1-q65",
        "question": "Does Article 323B allow for a tribunal to adjudicate on",
        "options": ["No, only civil disputes","Yes, under Article 323B(2)(h)","Only if authorized by the Supreme Court","Only for tax evasion"],
        "correctAnswerIndex": 1,
        "explanation": "Article 323B(2)(h) specifically includes"
    },
    {
        "id": "ch79-l1-q66",
        "question": "Regarding",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 3 is false: Article 323A(2)(b) allows for the establishment of a hierarchy of administrative tribunals (though currently only one level exists)."
    },
    {
        "id": "ch79-l1-q67",
        "question": "In the context of",
        "options": ["Right to cross-examine all witnesses in all cases","Reasoned decisions (speaking orders)","Mandatory representation by a Senior Advocate","The presence of the Attorney General"],
        "correctAnswerIndex": 1,
        "explanation": "Tribunals must provide"
    },
    {
        "id": "ch79-l1-q68",
        "question": "The",
        "options": ["Doctrine of Alternative Institutional Mechanism","Doctrine of Basic Structure","Doctrine of Pleasure","Doctrine of Pith and Substance"],
        "correctAnswerIndex": 0,
        "explanation": "In the Sampath Kumar case, the SC initially accepted tribunals as an alternative mechanism to High Courts, provided they were equally effective and independent."
    },
    {
        "id": "ch79-l1-q69",
        "question": "Which of the following is correct about the",
        "options": ["It is a constitutional body under Art 323B","It has suomotu powers to take up environmental matters as per SC in 2021","It cannot award compensation for environmental damage","Its decisions are not binding on state governments"],
        "correctAnswerIndex": 1,
        "explanation": "In 2021, the Supreme Court held that the NGT can exercise suomotu powers to protect the environment."
    },
    {
        "id": "ch79-l1-q70",
        "question": "Which Article provides that the provisions of Part XIV-A shall have effect",
        "options": ["Article 323A(3)","Article 323B(4)","Both Article 323A(3) and 323B(4)","Neither, it only applies to laws"],
        "correctAnswerIndex": 2,
        "explanation": "Both articles contain a"
    },
    {
        "id": "ch79-l1-q71",
        "question": "The",
        "options": ["To represent the Government","To provide administrative expertise in service rules and procedures","To monitor the behavior of judicial members","To report to the Home Ministry"],
        "correctAnswerIndex": 1,
        "explanation": "Administrative members are specialists who understand the nuances of civil service rules, which helps in technical adjudication."
    },
    {
        "id": "ch79-l1-q72",
        "question": "Which of the following is correct regarding the",
        "options": ["Only two levels are allowed","No law can establish a hierarchy","It allows for the establishment of a hierarchy of tribunals for each matter","Only the Supreme Court can establish a hierarchy"],
        "correctAnswerIndex": 2,
        "explanation": "Article 323B(2)(i) explicitly allows the law to provide for the establishment of a hierarchy of tribunals."
    },
    {
        "id": "ch79-l1-q73",
        "question": "According to",
        "options": ["Constitutional Courts","Courts of First Instance in their specialized areas","Subordinate to the District Courts","Executive agencies"],
        "correctAnswerIndex": 1,
        "explanation": "They act as the primary bodies for adjudication, but their decisions are subject to the supervisory jurisdiction of High Courts."
    },
    {
        "id": "ch79-l1-q74",
        "question": "The",
        "options": ["Article 323A","Article 323B","Article 33","Article 227"],
        "correctAnswerIndex": 2,
        "explanation": "AFT is not strictly part of Part XIV-A (which excludes armed forces from CAT). It is established under the Armed Forces Tribunal Act, 2007 (Entry 2, List I)."
    },
    {
        "id": "ch79-l1-q75",
        "question": "The",
        "options": ["35 years","45 years","50 years","No minimum age"],
        "correctAnswerIndex": 2,
        "explanation": "The 2021 Act introduced a minimum age of 50 years for appointment to ensure maturity and experience."
    },
    {
        "id": "ch79-l1-q76",
        "question": "The",
        "options": ["The Prime Minister","The Chief Justice of India or a Judge of the Supreme Court nominated by him","The Cabinet Secretary","The Minister of Personnel"],
        "correctAnswerIndex": 1,
        "explanation": "The CJI or an SC Judge heads this committee for the selection of the Chairperson and Members."
    },
    {
        "id": "ch79-l1-q77",
        "question": "Which of the following describes the",
        "options": ["The Supreme Court struck down the 4-year term as being too short for judicial independence","The Supreme Court upheld the 4-year term provided there is an option of reappointment","The Supreme Court mandated a 7-year fixed term","The Supreme Court abolished fixed terms entirely"],
        "correctAnswerIndex": 1,
        "explanation": "In MBA-2020 (and 2021), the Court expressed concern over short terms but eventually standardized it to 4 years of tenure."
    },
    {
        "id": "ch79-l1-q78",
        "question": "Assertion (A): Article 323B allows both Parliament and State Legislatures to establish tribunals for matters within their legislative competence.\\nReason (R): Article 323A is limited only to service matters of the Union and states, while Article 323B provides for a wide range of administrative and civil matters.",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 1,
        "explanation": "Both statements are true, but R explains the"
    },
    {
        "id": "ch79-l1-q79",
        "question": "The",
        "options": ["AFT is part of the regular judiciary","Members of the armed forces cannot approach CAT","CAT has no judicial members","AFT can only hear pension cases"],
        "correctAnswerIndex": 1,
        "explanation": "Art 323A excludes military personnel, hence a separate AFT was created under its own Act."
    },
    {
        "id": "ch79-l1-q80",
        "question": "In",
        "options": ["It is a constitutional body under Art 245","The Parliament has the power to transfer judicial functions to quasi-judicial bodies for specialization","The Supreme Court ordered its creation","It doesn"],
        "correctAnswerIndex": 1,
        "explanation": "The case established that specialized tribunals can be created by the legislature as long as they maintain judicial standards."
    },
    {
        "id": "ch79-l1-q81",
        "question": "Which of the following is correct regarding",
        "options": ["A State Government can abolish a SAT by its own executive order anytime","A SAT can only be abolished by a law of Parliament (as they are created by Central law)","The Supreme Court can abolish any SAT","A SAT is a permanent constitutional body and cannot be abolished"],
        "correctAnswerIndex": 1,
        "explanation": "Since SATs are established by the Central Government under the 1985 Act (a Central law), their abolition also requires Central notification/approval."
    },
    {
        "id": "ch79-l1-q82",
        "question": "Under Article 323B, can a State Legislature establish a tribunal for",
        "options": ["Yes, as it is mentioned in Article 323B","No, because only Parliament has the legislative competence over Income Tax","Only if the President gives assent","Only for salary-based tax"],
        "correctAnswerIndex": 1,
        "explanation": "Article 323B(1) states that the law must be made by the appropriate Legislature for matters within its competence. Income tax is a Union subject."
    },
    {
        "id": "ch79-l1-q83",
        "question": "The",
        "options": ["Commercial Courts and High Courts","Supreme Court","District Courts","NCLT"],
        "correctAnswerIndex": 0,
        "explanation": "The Tribunals Reforms Act, 2021, transferred its powers back to the commercial divisions of the High Courts."
    },
    {
        "id": "ch79-l1-q84",
        "question": "What is the",
        "options": ["One member","One judicial and one administrative member","Three members","Minimum five members"],
        "correctAnswerIndex": 1,
        "explanation": "A standard bench in CAT consists of two members—one judicial and one administrative."
    },
    {
        "id": "ch79-l1-q85",
        "question": "Regarding",
        "options": ["It can exclude the jurisdiction of the Supreme Court under Art 32","It can exclude the jurisdiction of High Courts per Article 226","It has been held inoperative by the Supreme Court to the extent it excludes judicial review","All of the above"],
        "correctAnswerIndex": 2,
        "explanation": "The Supreme Court in L. Chandra Kumar struck down the clause that excluded High Courts"
    },
    {
        "id": "ch79-l1-q86",
        "question": "The",
        "options": ["Article 323A","Article 323B","Article 136","Executive"],
        "correctAnswerIndex": 1,
        "explanation": "CESTAT deals with taxation matters, which falls under Article 323B."
    },
    {
        "id": "ch79-l1-q87",
        "question": "The",
        "options": ["USA","United Kingdom","France","Germany"],
        "correctAnswerIndex": 2,
        "explanation": "France has a highly developed system of administrative courts (Droit Administratif) that influenced the global concept of specialized administrative adjudication."
    },
    {
        "id": "ch79-l1-q88",
        "question": "Which of the following describes",
        "options": ["Ceiling on urban property","Sales tax on urban property","Water drainage in cities","Only properties owned by the government"],
        "correctAnswerIndex": 0,
        "explanation": "Article 323B(2)(d) specifically mentions"
    },
    {
        "id": "ch79-l1-q89",
        "question": "Is the",
        "options": ["Yes, as per Art 320","No, the appointments are made by a separate Selection Committee provided under the 1985 Act/2021 Act","Only for the administrative members","Only for the judicial members"],
        "correctAnswerIndex": 1,
        "explanation": "Appointments to tribunals follow a specific statutory process (Selection Committee) and do not fall under the general recruitment mandate of UPSC."
    },
    {
        "id": "ch79-l1-q90",
        "question": "The concept of",
        "options": ["Tribunals replacing High Courts entirely","Tribunals assisting the judiciary in clearing backlogs with specialized expertise","Executives taking over judicial powers","None of the above"],
        "correctAnswerIndex": 1,
        "explanation": "They are meant to be"
    },
    {
        "id": "ch79-l1-q91",
        "question": "Which of the following is NOT a characteristic feature of a political party?",
        "options": ["Organized group of citizens","Aim to gain and exercise political power","Use of constitutional and peaceful means","Aiming to work only for the welfare of a specific individual"],
        "correctAnswerIndex": 3,
        "explanation": "Political parties are organized groups of citizens who seek to influence or control government policy through constitutional means, typically focusing on broader public interest or collective agendas rather than just an individual"
    },
    {
        "id": "ch79-l1-q92",
        "question": "India follows which type of party system?",
        "options": ["One-party system","Two-party system","Multi-party system","Non-party system"],
        "correctAnswerIndex": 2,
        "explanation": "India has a multi-party system where numerous political parties across the spectrum compete in elections, often leading to coalition governments at both central and state levels."
    },
    {
        "id": "ch79-l1-q93",
        "question": "The registration of political parties in India is done by the:",
        "options": ["President of India","Parliament","Election Commission of India","Supreme Court"],
        "correctAnswerIndex": 2,
        "explanation": "The Election Commission of India is the statutory body responsible for registering political parties under the Representation of the People Act, 1951."
    },
    {
        "id": "ch79-l1-q94",
        "question": "A political party is registered under which section of the Representation of the People Act, 1951?",
        "options": ["Section 12A","Section 29A","Section 32B","Section 41"],
        "correctAnswerIndex": 1,
        "explanation": "Section 29A of the Representation of the People Act, 1951, provides the legal framework for the registration of associations and bodies as political parties with the Election Commission."
    },
    {
        "id": "ch79-l1-q95",
        "question": "For a political party to be recognized as a",
        "options": ["Two states","Three states","Four states","Five states"],
        "correctAnswerIndex": 2,
        "explanation": "One of the criteria for recognition as a National Party is being recognized as a state party in four or more states."
    },
    {
        "id": "ch79-l1-q96",
        "question": "In the 2024 context, which of the following is a recognized",
        "options": ["Trinamool Congress (TMC)","Nationalist Congress Party (NCP)","Aam Aadmi Party (AAP)","Both (a) and (b)"],
        "correctAnswerIndex": 2,
        "explanation": "The Aam Aadmi Party (AAP) was recognized as a National Party in 2023, while TMC and NCP lost their national party status in the same period."
    },
    {
        "id": "ch79-l1-q97",
        "question": "Regional parties are often classified into four categories. Which category does the",
        "options": ["Secessionist parties","Parties based on state-centered identity/autonomy","Parties created by a split in National Parties","Parties with a purely religious agenda"],
        "correctAnswerIndex": 1,
        "explanation": "Shiv Sena is historically categorized as a party based on state-centered identity (Marathi Manoos/Hindutva) and regional autonomy."
    },
    {
        "id": "ch79-l1-q98",
        "question": "The",
        "options": ["BJP","CPI(M)","Indian National Congress","Janata Dal"],
        "correctAnswerIndex": 2,
        "explanation": "Both Trinamool Congress (led by Mamata Banerjee) and the Nationalist Congress Party (led by Sharad Pawar) were formed after splitting from the Indian National Congress."
    },
    {
        "id": "ch79-l1-q99",
        "question": "Which regional party holds significant influence in Odisha and has been led by Naveen Patnaik for over two decades?",
        "options": ["Biju Janata Dal (BJD)","Odisha Gana Parishad","JMM","RJD"],
        "correctAnswerIndex": 0,
        "explanation": "The Biju Janata Dal (BJD) is the dominant regional party in Odisha, named after the legendary leader Biju Patnaik and led by his son Naveen Patnaik."
    },
    {
        "id": "ch79-l1-q100",
        "question": "The",
        "options": ["Mizoram","Meghalaya","Sikkim","Tripura"],
        "correctAnswerIndex": 1,
        "explanation": "The National People"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch79-l2-q1",
        "question": "Which of the following describes the difference between Article 323A and Article 323B?",
        "options": ["323A is for service matters; 323B is for other matters","323A can be established only by Parliament; 323B can be established by both Parliament and State Legislatures","Only one tribunal for the Union and one for each state can be established under 323A; there is no such hierarchy under 323B","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "All these points correctly distinguish the specialized Article 323A from the general Article 323B."
    },
    {
        "id": "ch79-l2-q2",
        "question": "Before the",
        "options": ["High Court","Supreme Court directly under Article 136","Districts Courts","None, the decision was final and non-appealable"],
        "correctAnswerIndex": 1,
        "explanation": "Initially, the Administrative Tribunals Act provided for direct appeal to the Supreme Court, bypassing the High Courts, which was later declared unconstitutional."
    },
    {
        "id": "ch79-l2-q3",
        "question": "Which of the following is NOT a member of the",
        "options": ["Chief Justice of India or a Judge of SC","Cabinet Secretary","Secretary to the Government of India in the Ministry of Personnel","Leader of Opposition"],
        "correctAnswerIndex": 3,
        "explanation": "Recent rules provide for a committee headed by CJI/SC Judge, but the Leader of Opposition is generally not a member of this specific selection committee."
    },
    {
        "id": "ch79-l2-q4",
        "question": "The",
        "options": ["Article 323A","Article 323B","Article 226","Article 136"],
        "correctAnswerIndex": 0,
        "explanation": "The Act of 1985 was enacted by Parliament using the power granted by Article 323A."
    },
    {
        "id": "ch79-l2-q5",
        "question": "A",
        "options": ["A person who is or has been a Judge of a High Court","An advocate of a High Court for at least 10 years","A member of the Indian Legal Service (Grade I) for 3 years","Any of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Judicial members are chosen from amongst judges, lawyers, or senior legal service officers."
    },
    {
        "id": "ch79-l2-q6",
        "question": "Regarding",
        "options": ["The IAS or other Central Services holding the rank of Secretary to GoI","Retired IPS officers","Principals of Law Colleges","Only those with a PhD in Administration"],
        "correctAnswerIndex": 0,
        "explanation": "Administrative members are senior civil servants with significant administrative experience."
    },
    {
        "id": "ch79-l2-q7",
        "question": "Does the Supreme Court have",
        "options": ["Yes","No","Only in criminal matters","Only if the President allows"],
        "correctAnswerIndex": 0,
        "explanation": "The Supreme Court"
    },
    {
        "id": "ch79-l2-q8",
        "question": "Which of the following is TRUE about SATs (State Administrative Tribunals)?",
        "options": ["They have benches in every district","Their members","The President appoints members after consulting the Governor of the state","The State Legislature appoints members"],
        "correctAnswerIndex": 2,
        "explanation": "While it"
    },
    {
        "id": "ch79-l2-q9",
        "question": "Members of which of the following services are excluded from CAT",
        "options": ["Member of the All-India Services","Secretariat staff of the Rajya Sabha","Employees of the Delhi Development Authority","Group A officers of the Postal Service"],
        "correctAnswerIndex": 1,
        "explanation": "The Secretariat staff of Parliament is excluded under the Administrative Tribunals Act."
    },
    {
        "id": "ch79-l2-q10",
        "question": "The",
        "options": ["Article 323A","Article 323B","Article 265","Article 280"],
        "correctAnswerIndex": 1,
        "explanation": "ITAT deals with taxation, which falls under Article 323B."
    },
    {
        "id": "ch79-l2-q11",
        "question": "Can a Tribunal",
        "options": ["No, only High Courts can review","Yes, if such power is granted by the statute (like the 1985 Act)","Yes, but only in the presence of the CJI","Only for math errors"],
        "correctAnswerIndex": 1,
        "explanation": "Tribunals like CAT have the power to review their own orders to correct errors of fact or law."
    },
    {
        "id": "ch79-l2-q12",
        "question": "The primary difference between a Court and a Tribunal is that:",
        "options": ["Courts are bound by strict rules of evidence; Tribunals are not","Courts can try all civil and criminal cases; Tribunals only specialized ones","Judges of courts are independent of the executive; Tribunal members can be from the executive","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "These are the fundamental characteristics that distinguish the judiciary from quasi-judicial bodies."
    },
    {
        "id": "ch79-l2-q13",
        "question": "Article 323B mentions",
        "options": ["42nd Amendment","44th Amendment","75th Amendment","It was there in the original 42nd Amendment text"],
        "correctAnswerIndex": 3,
        "explanation": "Article 323B was introduced by the 42nd Amendment with a comprehensive list including land reforms."
    },
    {
        "id": "ch79-l2-q14",
        "question": "Who acts as the",
        "options": ["The Registrar","The Chairman","The Vice-Chairman","The Ministry of Personnel"],
        "correctAnswerIndex": 1,
        "explanation": "The Chairman is the administrative and judicial head of the tribunal."
    },
    {
        "id": "ch79-l2-q15",
        "question": "If a State Government abolishes its State Administrative Tribunal (SAT), where do the pending cases go?",
        "options": ["Central Administrative Tribunal","Supreme Court","Respective High Court","They are dismissed"],
        "correctAnswerIndex": 2,
        "explanation": "Pending cases are transferred to the High Court having jurisdiction over the state."
    },
    {
        "id": "ch79-l2-q16",
        "question": "Does Article 323B provide for a hierarchy of tribunals?",
        "options": ["Yes, specifically mentioned","No, it","Only for industrial disputes","Only for Union matters"],
        "correctAnswerIndex": 1,
        "explanation": "Article 323B(2)(i) states that the law can provide for the establishment of a hierarchy of tribunals."
    },
    {
        "id": "ch79-l2-q17",
        "question": "Regarding",
        "options": ["Yes, under Section 17 of the 1985 Act","No, only High Courts have contempt powers","Only with Supreme Court","Only against government officers"],
        "correctAnswerIndex": 0,
        "explanation": "CAT has been given powers of contempt similar to High Courts to maintain its authority."
    },
    {
        "id": "ch79-l2-q18",
        "question": "Can the",
        "options": ["Yes, the Article specifically mentions","","No, Article 324 is overriding","Only for Rajya Sabha","Only for State Legislatures"],
        "correctAnswerIndex": 0,
        "explanation": "Article 323B(2)(f) allows for tribunals for"
    },
    {
        "id": "ch79-l2-q19",
        "question": "Which of the following is a",
        "options": ["Judicial Members only","Expert Members only","Both Judicial and Expert Members","Only retired SC judges"],
        "correctAnswerIndex": 2,
        "explanation": "NGT consists of judicial members and expert members (who have specialized knowledge in environmental science)."
    },
    {
        "id": "ch79-l2-q20",
        "question": "Under Article 323A, which body can exclude the jurisdiction of High Courts?",
        "options": ["The President","The Parliament by law","The Supreme Court","The Finance Minister"],
        "correctAnswerIndex": 1,
        "explanation": "Parliament can exclude jurisdiction of all courts (except Supreme Court) while establishing administrative tribunals."
    },
    {
        "id": "ch79-l2-q21",
        "question": "Regarding the",
        "options": ["High Court","Supreme Court (on limited grounds)","Chief of Army Staff","President"],
        "correctAnswerIndex": 1,
        "explanation": "Appeals against AFT orders lie only to the Supreme Court on points of law of general public importance."
    },
    {
        "id": "ch79-l2-q22",
        "question": "The",
        "options": ["Auxiliary","Executive","Parallel","Secondary"],
        "correctAnswerIndex": 2,
        "explanation": "They function as specialized bodies parallel to the traditional court system for specific issues."
    },
    {
        "id": "ch79-l2-q23",
        "question": "Which of the following is NOT a matter listed in Article 323B?",
        "options": ["Taxation","Rent and Revenue","Copyright and Trade Marks","Inter-state Water Disputes"],
        "correctAnswerIndex": 3,
        "explanation": "Inter-state water disputes are governed by Article 262, not 323B."
    },
    {
        "id": "ch79-l2-q24",
        "question": "A person appointed as a member of CAT generally serves for a term of (as per standard practice):",
        "options": ["5 years or 62 years of age","4 years or 67 years of age","5 years or 65 years of age","6 years or 70 years of age"],
        "correctAnswerIndex": 1,
        "explanation": "For Members, the age limit is 67, while for the Chairman it is 70."
    },
    {
        "id": "ch79-l2-q25",
        "question": "Can a",
        "options": ["Yes","No, they must generally exhaust available administrative remedies first","Only if they pray to the President","Only for salary disputes"],
        "correctAnswerIndex": 1,
        "explanation": "The 1985 Act requires that internal remedies must be exhausted before filing an application in the tribunal."
    },
    {
        "id": "ch79-l2-q26",
        "question": "The",
        "options": ["CAT","Supreme Court and High Courts","All Tribunals","District Courts"],
        "correctAnswerIndex": 1,
        "explanation": "Only the Supreme Court and High Courts are constitutional"
    },
    {
        "id": "ch79-l2-q27",
        "question": "Which of the following is a",
        "options": ["Judge of the Supreme Court","Chief Justice of a High Court","Retired Judge of a High Court","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "NGT judicial members are drawn from the ranks of serving or retired SC judges and HC Chief Justices/Judges."
    },
    {
        "id": "ch79-l2-q28",
        "question": "Was the",
        "options": ["Yes, it repealed Article 323B","No, the 44th Amendment did not touch this Part","It added","to the list","It removed judicial members"],
        "correctAnswerIndex": 1,
        "explanation": "The 44th Amendment focused on Emergency and other provisions, leaving the 42nd Amendment"
    },
    {
        "id": "ch79-l2-q29",
        "question": "If a service matter involves a",
        "options": ["Yes","No, only for Group A and B","Only if the Supreme Court permits","Only for IAS officers"],
        "correctAnswerIndex": 0,
        "explanation": "CAT"
    },
    {
        "id": "ch79-l2-q30",
        "question": "The",
        "options": ["Article 323B","The Foreigners Act, 1946","Citizenship Act","Article 323A"],
        "correctAnswerIndex": 1,
        "explanation": "These are executive tribunals established under a specific Act (Foreigners Act) and not necessarily under Part XIV-A directly."
    },
    {
        "id": "ch79-l2-q31",
        "question": "How have regional parties contributed to the",
        "options": ["By demanding more central control over states","By forcing National Parties to consider regional aspirations in their manifestos","By abolishing the office of the Governor","By reducing the number of states"],
        "correctAnswerIndex": 1,
        "explanation": "Regional parties have shifted the focus towards regional issues, forcing national parties to form alliances and accommodate sub-national identities, thereby making the Indian federal system more competitive and representative."
    },
    {
        "id": "ch79-l2-q32",
        "question": "The era of",
        "options": ["The Supreme Court","No single national party being able to secure a majority without the support of regional parties","The President","A constitutional amendment"],
        "correctAnswerIndex": 1,
        "explanation": "The decline of the Congress"
    },
    {
        "id": "ch79-l2-q33",
        "question": "What is a",
        "options": ["Increased grassroots participation","Prioritizing regional interests over the broader national interest","Strengthening of the Rajya Sabha","Diversification of political leadership"],
        "correctAnswerIndex": 1,
        "explanation": "While they improve representation, regional parties are sometimes criticized for"
    },
    {
        "id": "ch79-l2-q34",
        "question": "Regional parties often demand",
        "options": ["Complete independence from India","Greater financial resources and less interference from the Centre in state subjects","The right to have a separate army","The right to issue their own currency"],
        "correctAnswerIndex": 1,
        "explanation": "State autonomy demands usually center on restoring the balance of power between the Union and the States, specifically regarding financial allocations (Finance Commission) and the use of Article 356."
    },
    {
        "id": "ch79-l2-q35",
        "question": "The role of a",
        "options": ["Becomes the President","Decides which national party or alliance will form the government at the Centre","Rules over more than five states","Is the senior-most member of the Lok Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "In a hung parliament, regional parties with significant numbers (like TDP or JD-U in various phases) hold the balance of power, effectively choosing the Prime Minister."
    },
    {
        "id": "ch79-l2-q36",
        "question": "Which of the following describes the",
        "options": ["The religious duties of a politician","The necessity of following a common minimum program and respecting the concerns of all alliance partners","A law passed by Parliament to prevent parties from leaving a coalition","The rule that only the largest party can lead a coalition"],
        "correctAnswerIndex": 1,
        "explanation": "Coalition Dharma refers to the unwritten rules of consensus-building and compromise required to maintain a stable government among parties with diverse ideologies."
    },
    {
        "id": "ch79-l2-q37",
        "question": "What has been the impact of regional parties on the recruitment of political leadership in India?",
        "options": ["It has limited leadership to only the elite in Delhi","It has created a","approach, allowing leaders from diverse social and regional backgrounds to reach national prominence","It has led to the abolition of competitive exams for civil services","It has resulted in only family members of national leaders becoming ministers"],
        "correctAnswerIndex": 1,
        "explanation": "Regional parties have acted as vehicles for social mobilization, bringing leaders from marginalized communities and rural areas into the mainstream of national decision-making."
    },
    {
        "id": "ch79-l2-q38",
        "question": "A",
        "options": ["The Speaker of the Lok Sabha","The President (in exercising discretionary powers to invite a leader)","The Chief Justice of India","The Leader of the Opposition automatically"],
        "correctAnswerIndex": 1,
        "explanation": "When no single party has a majority, the President"
    },
    {
        "id": "ch79-l2-q39",
        "question": "Which of the following is a",
        "options": ["Promotion of one language across the country","Acting as a","for regional grievances within the constitutional framework","Encouraging secessionist movements","Reducing the number of elections"],
        "correctAnswerIndex": 1,
        "explanation": "By providing a platform for local aspirations, regional parties help integrate various ethnic and linguistic groups into the democratic process, preventing extreme alienation."
    },
    {
        "id": "ch79-l2-q40",
        "question": "In the context of Indian coalition dynamics, the",
        "options": ["Abolish the manifestos of all parties","Provide a shared policy framework that all coalition partners agree to implement","Restrict the voting rights of smaller parties","Ensure that only one party"],
        "correctAnswerIndex": 1,
        "explanation": "A CMP is a document that outlines the agreed-upon priorities of a coalition government, helping to manage internal contradictions between different parties."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch79-l3-q1",
        "question": "Assertion (A): Article 323A(2)(d) of the Constitution allows the exclusion of jurisdiction of all courts except the Supreme Court under Article 136.\\nReason (R): In",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 1,
        "explanation": "Both statements are individually true. A describes the constitutional provision as written, and R describes the judicial interpretation that effectively overruled the"
    },
    {
        "id": "ch79-l3-q2",
        "question": "The",
        "options": ["Creation of a new All-India Judicial Service","Constitutional validity of the National Tax Tribunal (NTT)","Abolition of SATs","Appointment of IAS officers in CAT"],
        "correctAnswerIndex": 1,
        "explanation": "In this case, the Supreme Court struck down the National Tax Tribunal Act, holding that the NTT cannot usurp the judicial functions of High Courts."
    },
    {
        "id": "ch79-l3-q3",
        "question": "Consider the following regarding the",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "The 2021 Act aimed at streamlining the tribunal system by abolishing bodies that were overlap or redundant."
    },
    {
        "id": "ch79-l3-q4",
        "question": "Which of the following describes the",
        "options": ["Members must have the same salary as High Court Judges","The terms of office and security of tenure must be such that the executive cannot easily influence them","Members must be appointed by the Prime Minister directly","Tribunals must not be subject to any court"],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court has repeatedly (MBA series of cases) stressed that the conditions of service in tribunals must be comparable to the judiciary to ensure independence."
    },
    {
        "id": "ch79-l3-q5",
        "question": "Does Article 323B allow for a tribunal to adjudicate on",
        "options": ["No, only civil disputes","Yes, under Article 323B(2)(h)","Only if authorized by the Supreme Court","Only for tax evasion"],
        "correctAnswerIndex": 1,
        "explanation": "Article 323B(2)(h) specifically includes"
    },
    {
        "id": "ch79-l3-q6",
        "question": "Regarding",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 3 is false: Article 323A(2)(b) allows for the establishment of a hierarchy of administrative tribunals (though currently only one level exists)."
    },
    {
        "id": "ch79-l3-q7",
        "question": "In the context of",
        "options": ["Right to cross-examine all witnesses in all cases","Reasoned decisions (speaking orders)","Mandatory representation by a Senior Advocate","The presence of the Attorney General"],
        "correctAnswerIndex": 1,
        "explanation": "Tribunals must provide"
    },
    {
        "id": "ch79-l3-q8",
        "question": "The",
        "options": ["Doctrine of Alternative Institutional Mechanism","Doctrine of Basic Structure","Doctrine of Pleasure","Doctrine of Pith and Substance"],
        "correctAnswerIndex": 0,
        "explanation": "In the Sampath Kumar case, the SC initially accepted tribunals as an alternative mechanism to High Courts, provided they were equally effective and independent."
    },
    {
        "id": "ch79-l3-q9",
        "question": "Which of the following is correct about the",
        "options": ["It is a constitutional body under Art 323B","It has suomotu powers to take up environmental matters as per SC in 2021","It cannot award compensation for environmental damage","Its decisions are not binding on state governments"],
        "correctAnswerIndex": 1,
        "explanation": "In 2021, the Supreme Court held that the NGT can exercise suomotu powers to protect the environment."
    },
    {
        "id": "ch79-l3-q10",
        "question": "Which Article provides that the provisions of Part XIV-A shall have effect",
        "options": ["Article 323A(3)","Article 323B(4)","Both Article 323A(3) and 323B(4)","Neither, it only applies to laws"],
        "correctAnswerIndex": 2,
        "explanation": "Both articles contain a"
    },
    {
        "id": "ch79-l3-q11",
        "question": "The",
        "options": ["To represent the Government","To provide administrative expertise in service rules and procedures","To monitor the behavior of judicial members","To report to the Home Ministry"],
        "correctAnswerIndex": 1,
        "explanation": "Administrative members are specialists who understand the nuances of civil service rules, which helps in technical adjudication."
    },
    {
        "id": "ch79-l3-q12",
        "question": "Which of the following is correct regarding the",
        "options": ["Only two levels are allowed","No law can establish a hierarchy","It allows for the establishment of a hierarchy of tribunals for each matter","Only the Supreme Court can establish a hierarchy"],
        "correctAnswerIndex": 2,
        "explanation": "Article 323B(2)(i) explicitly allows the law to provide for the establishment of a hierarchy of tribunals."
    },
    {
        "id": "ch79-l3-q13",
        "question": "According to",
        "options": ["Constitutional Courts","Courts of First Instance in their specialized areas","Subordinate to the District Courts","Executive agencies"],
        "correctAnswerIndex": 1,
        "explanation": "They act as the primary bodies for adjudication, but their decisions are subject to the supervisory jurisdiction of High Courts."
    },
    {
        "id": "ch79-l3-q14",
        "question": "The",
        "options": ["Article 323A","Article 323B","Article 33","Article 227"],
        "correctAnswerIndex": 2,
        "explanation": "AFT is not strictly part of Part XIV-A (which excludes armed forces from CAT). It is established under the Armed Forces Tribunal Act, 2007 (Entry 2, List I)."
    },
    {
        "id": "ch79-l3-q15",
        "question": "The",
        "options": ["35 years","45 years","50 years","No minimum age"],
        "correctAnswerIndex": 2,
        "explanation": "The 2021 Act introduced a minimum age of 50 years for appointment to ensure maturity and experience."
    },
    {
        "id": "ch79-l3-q16",
        "question": "The",
        "options": ["The Prime Minister","The Chief Justice of India or a Judge of the Supreme Court nominated by him","The Cabinet Secretary","The Minister of Personnel"],
        "correctAnswerIndex": 1,
        "explanation": "The CJI or an SC Judge heads this committee for the selection of the Chairperson and Members."
    },
    {
        "id": "ch79-l3-q17",
        "question": "Which of the following describes the",
        "options": ["The Supreme Court struck down the 4-year term as being too short for judicial independence","The Supreme Court upheld the 4-year term provided there is an option of reappointment","The Supreme Court mandated a 7-year fixed term","The Supreme Court abolished fixed terms entirely"],
        "correctAnswerIndex": 1,
        "explanation": "In MBA-2020 (and 2021), the Court expressed concern over short terms but eventually standardized it to 4 years of tenure."
    },
    {
        "id": "ch79-l3-q18",
        "question": "Assertion (A): Article 323B allows both Parliament and State Legislatures to establish tribunals for matters within their legislative competence.\\nReason (R): Article 323A is limited only to service matters of the Union and states, while Article 323B provides for a wide range of administrative and civil matters.",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 1,
        "explanation": "Both statements are true, but R explains the"
    },
    {
        "id": "ch79-l3-q19",
        "question": "The",
        "options": ["AFT is part of the regular judiciary","Members of the armed forces cannot approach CAT","CAT has no judicial members","AFT can only hear pension cases"],
        "correctAnswerIndex": 1,
        "explanation": "Art 323A excludes military personnel, hence a separate AFT was created under its own Act."
    },
    {
        "id": "ch79-l3-q20",
        "question": "In",
        "options": ["It is a constitutional body under Art 245","The Parliament has the power to transfer judicial functions to quasi-judicial bodies for specialization","The Supreme Court ordered its creation","It doesn"],
        "correctAnswerIndex": 1,
        "explanation": "The case established that specialized tribunals can be created by the legislature as long as they maintain judicial standards."
    },
    {
        "id": "ch79-l3-q21",
        "question": "Which of the following is correct regarding",
        "options": ["A State Government can abolish a SAT by its own executive order anytime","A SAT can only be abolished by a law of Parliament (as they are created by Central law)","The Supreme Court can abolish any SAT","A SAT is a permanent constitutional body and cannot be abolished"],
        "correctAnswerIndex": 1,
        "explanation": "Since SATs are established by the Central Government under the 1985 Act (a Central law), their abolition also requires Central notification/approval."
    },
    {
        "id": "ch79-l3-q22",
        "question": "Under Article 323B, can a State Legislature establish a tribunal for",
        "options": ["Yes, as it is mentioned in Article 323B","No, because only Parliament has the legislative competence over Income Tax","Only if the President gives assent","Only for salary-based tax"],
        "correctAnswerIndex": 1,
        "explanation": "Article 323B(1) states that the law must be made by the appropriate Legislature for matters within its competence. Income tax is a Union subject."
    },
    {
        "id": "ch79-l3-q23",
        "question": "The",
        "options": ["Commercial Courts and High Courts","Supreme Court","District Courts","NCLT"],
        "correctAnswerIndex": 0,
        "explanation": "The Tribunals Reforms Act, 2021, transferred its powers back to the commercial divisions of the High Courts."
    },
    {
        "id": "ch79-l3-q24",
        "question": "What is the",
        "options": ["One member","One judicial and one administrative member","Three members","Minimum five members"],
        "correctAnswerIndex": 1,
        "explanation": "A standard bench in CAT consists of two members—one judicial and one administrative."
    },
    {
        "id": "ch79-l3-q25",
        "question": "Regarding",
        "options": ["It can exclude the jurisdiction of the Supreme Court under Art 32","It can exclude the jurisdiction of High Courts per Article 226","It has been held inoperative by the Supreme Court to the extent it excludes judicial review","All of the above"],
        "correctAnswerIndex": 2,
        "explanation": "The Supreme Court in L. Chandra Kumar struck down the clause that excluded High Courts"
    },
    {
        "id": "ch79-l3-q26",
        "question": "The",
        "options": ["Article 323A","Article 323B","Article 136","Executive"],
        "correctAnswerIndex": 1,
        "explanation": "CESTAT deals with taxation matters, which falls under Article 323B."
    },
    {
        "id": "ch79-l3-q27",
        "question": "The",
        "options": ["USA","United Kingdom","France","Germany"],
        "correctAnswerIndex": 2,
        "explanation": "France has a highly developed system of administrative courts (Droit Administratif) that influenced the global concept of specialized administrative adjudication."
    },
    {
        "id": "ch79-l3-q28",
        "question": "Which of the following describes",
        "options": ["Ceiling on urban property","Sales tax on urban property","Water drainage in cities","Only properties owned by the government"],
        "correctAnswerIndex": 0,
        "explanation": "Article 323B(2)(d) specifically mentions"
    },
    {
        "id": "ch79-l3-q29",
        "question": "Is the",
        "options": ["Yes, as per Art 320","No, the appointments are made by a separate Selection Committee provided under the 1985 Act/2021 Act","Only for the administrative members","Only for the judicial members"],
        "correctAnswerIndex": 1,
        "explanation": "Appointments to tribunals follow a specific statutory process (Selection Committee) and do not fall under the general recruitment mandate of UPSC."
    },
    {
        "id": "ch79-l3-q30",
        "question": "The concept of",
        "options": ["Tribunals replacing High Courts entirely","Tribunals assisting the judiciary in clearing backlogs with specialized expertise","Executives taking over judicial powers","None of the above"],
        "correctAnswerIndex": 1,
        "explanation": "They are meant to be"
    },
    {
        "id": "ch79-l3-q31",
        "question": "Assertion (A): The shift towards coalition governments at the Centre since 1989 has led to a more",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation of A","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "The presence of regional parties in national coalitions has forced the Union to be more sensitive to state needs, leading to institutional mechanisms (like the NITI Aayog"
    },
    {
        "id": "ch79-l3-q32",
        "question": "Analyze the",
        "options": ["Mandal politics (OBC reservations) consolidated all regional parties under one national banner","Mandir politics (Ram Janmabhoomi movement) led to the complete disappearance of regional parties in North India","Both Mandal and Mandir issues provided the ideological and social mobilization base for various regional parties to challenge the hegemony of the Indian National Congress","Neither Mandal nor Mandir had any impact on regional party growth"],
        "correctAnswerIndex": 2,
        "explanation": "These two phenomena created strong identity-based vote banks (caste and religion) which regional parties successfully harnessed to gain power in states like UP and Bihar, eventually making them indispensable at the national level."
    },
    {
        "id": "ch79-l3-q33",
        "question": "Evaluate the role of the",
        "options": ["The instructions of the Prime Minister only","The","recommendations and the","judgment, which emphasize floor tests to determine majority","The Governor","The order of the Supreme Court in every single case"],
        "correctAnswerIndex": 1,
        "explanation": "While the Governor has discretionary powers, the S.R. Bommai judgment (1994) established that the floor of the House is the only place to determine a majority, curbing arbitrary use of Article 356 and partisan discretion in government formation."
    },
    {
        "id": "ch79-l3-q34",
        "question": "In the 2026 UPSC Prelims context, consider the following statements regarding",
        "options": ["1 only","2 only","Both 1 and 2","Neither 1 nor 2"],
        "correctAnswerIndex": 1,
        "explanation": "The 91st Amendment Act (2003) removed the"
    },
    {
        "id": "ch79-l3-q35",
        "question": "The",
        "options": ["The number of parties in the coalition","The","and the role of the","party in managing partner demands","The size of the Cabinet","The personality of the President"],
        "correctAnswerIndex": 1,
        "explanation": "Stability in a multi-party system requires a consensus-based policy (CMP) and a strong lead party (Anchor) that can navigate the"
    },
    {
        "id": "ch79-l3-q36",
        "question": "Which of the following describes the impact of regional parties on the",
        "options": ["Most regional parties have high levels of internal democracy with regular elections","Many regional parties are characterized by","and",", where power is concentrated in a family or a single leader","Regional parties have forced National parties to stop having internal elections","The Constitution requires regional parties to have a rotating presidency every year"],
        "correctAnswerIndex": 1,
        "explanation": "A common critique of regional parties in India (like RJD, SP, TMC, TDP, etc.) is the lack of internal organizational democracy and the dominance of specific families."
    },
    {
        "id": "ch79-l3-q37",
        "question": "Considering the 2024-2026 landscape, the",
        "options": ["A law banning regional parties from contesting in other states","The","system which rewards concentrated vote banks rather than spread-out support","The lack of television coverage","The President"],
        "correctAnswerIndex": 1,
        "explanation": "The FPTP system makes it difficult for new or expanding parties to win seats unless they have a significant and concentrated presence in specific constituencies, leading to high vote shares but few seats."
    },
    {
        "id": "ch79-l3-q38",
        "question": "Assertion (A): Regional parties have made the Indian Parliament more",
        "options": ["Both A and R are true and R is the correct explanation of A","Both A and R are true but R is NOT the correct explanation of A","A is true but R is false","A is false but R is true"],
        "correctAnswerIndex": 0,
        "explanation": "By articulating the"
    },
    {
        "id": "ch79-l3-q39",
        "question": "The",
        "options": ["A coalition of the BJP and Congress","A non-Congress, non-BJP alliance of regional and left parties","A group of parties that don","The council of ministers in a state"],
        "correctAnswerIndex": 1,
        "explanation": "The Third Front concept (now evolved into various forms like I.N.D.I.A alliance subsets) historically aimed to provide an alternative to the two main poles of Indian politics."
    },
    {
        "id": "ch79-l3-q40",
        "question": "In the context of 2026 Simulation, the",
        "options": ["Winning the Lok Sabha elections","Gaining at least 6% of valid votes in four states (Punjab, Delhi, Goa, Gujarat) and winning at least four Lok Sabha seats, or meeting state party criteria in four states","Having 100 members in the Rajya Sabha","The Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "AAP"
    }
];

export const CHAPTER_79_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
