import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch36-l1-q1",
        "question": "Tribunals were not part of the original Constitution. They were added to the Constitution by which Amendment Act?",
        "options": ["42nd Amendment Act of 1976","44th Amendment Act of 1978","24th Amendment Act of 1971","73rd Amendment Act of 1992"],
        "correctAnswerIndex": 0,
        "explanation": "The provisions for Tribunals were added to the Constitution by the 42nd Amendment Act of 1976."
    },
    {
        "id": "ch36-l1-q2",
        "question": "Which new Part was added to the Constitution specifically to deal with Tribunals?",
        "options": ["Part XIV","Part XIV-A","Part XV","Part IX-A"],
        "correctAnswerIndex": 1,
        "explanation": "Part XIV-A was added to the Constitution specifically for Tribunals."
    },
    {
        "id": "ch36-l1-q3",
        "question": "Part XIV-A of the Constitution contains only two Articles relating to tribunals. These are:",
        "options": ["Articles 323 and 324","Articles 323A and 323B","Articles 226 and 227","Articles 136 and 137"],
        "correctAnswerIndex": 1,
        "explanation": "Part XIV-A consists of only two Articles: 323A (Administrative tribunals) and 323B (Tribunals for other matters)."
    },
    {
        "id": "ch36-l1-q4",
        "question": "The establishment of administrative tribunals was recommended by which committee?",
        "options": ["Swaran Singh Committee","Sarkaria Commission","Balwant Rai Mehta Committee","Punchhi Commission"],
        "correctAnswerIndex": 0,
        "explanation": "The recommendation to establish Tribunals was made by the Swaran Singh Committee."
    },
    {
        "id": "ch36-l1-q5",
        "question": "Article 323A empowers whom to establish administrative tribunals for the adjudication of disputes relating to recruitment and conditions of service of public servants?",
        "options": ["Parliament only","State Legislatures only","Both Parliament and State Legislatures","The President of India"],
        "correctAnswerIndex": 0,
        "explanation": "Article 323A empowers the Parliament only to establish administrative tribunals."
    },
    {
        "id": "ch36-l1-q6",
        "question": "In pursuance of Article 323A, Parliament passed which Act in 1985 to authorize the Central government to establish administrative tribunals?",
        "options": ["Administrative Tribunals Act","Civil Services Act","Public Servants Adjudication Act","Judicial Reforms Act"],
        "correctAnswerIndex": 0,
        "explanation": "In pursuance of Article 323A, Parliament passed the Administrative Tribunals Act in 1985."
    },
    {
        "id": "ch36-l1-q7",
        "question": "The principal bench of the Central Administrative Tribunal (CAT), established in 1985, is located in:",
        "options": ["Mumbai","Delhi","Kolkata","Chennai"],
        "correctAnswerIndex": 1,
        "explanation": "The principal bench of the Central Administrative Tribunal (CAT) is located in Delhi."
    },
    {
        "id": "ch36-l1-q8",
        "question": "The Central Administrative Tribunal (CAT) exercises original jurisdiction in relation to recruitment and conditions of service of persons appointed to:",
        "options": ["All-India Services and Central Civil Services only","Civilian employees of defense services only","Both (a) and (b)","Members of the Armed Forces"],
        "correctAnswerIndex": 2,
        "explanation": "The CAT exercises original jurisdiction over service matters of All-India Services, Central Civil Services, and civilian employees of defense services."
    },
    {
        "id": "ch36-l1-q9",
        "question": "Which of the following categories of personnel are explicitly EXCLUDED from the jurisdiction of the Central Administrative Tribunal (CAT)?",
        "options": ["Officers and servants of the Supreme Court","Secretarial staff of Parliament","Members of the Armed Forces (Military)","All of the above"],
        "correctAnswerIndex": 3,
        "explanation": "Members of the defense forces, officers and servants of the Supreme Court and the secretarial staff of the Parliament are not covered by CAT."
    },
    {
        "id": "ch36-l1-q10",
        "question": "The Chairman and members of the Central Administrative Tribunal (CAT) are appointed by the:",
        "options": ["Chief Justice of India","President of India","Prime Minister","Union Law Minister"],
        "correctAnswerIndex": 1,
        "explanation": "The Chairman and members of the CAT are appointed by the President."
    },
    {
        "id": "ch36-l1-q11",
        "question": "Under the provisions, the Chairman of the CAT holds office for a term of:",
        "options": ["5 years or until the age of 65 years","5 years or until the age of 67 years","3 years or until the age of 62 years","4 years or until the age of 70 years"],
        "correctAnswerIndex": 0,
        "explanation": "The Chairman holds office for a term of 5 years or until he attains the age of 65 years, whichever is earlier."
    },
    {
        "id": "ch36-l1-q12",
        "question": "The Central Administrative Tribunal (CAT) is not bound by the rigorous procedure laid down in the Civil Procedure Code (CPC). Instead, it is guided by the:",
        "options": ["Criminal Procedure Code (CrPC)","Principles of Natural Justice","Indian Evidence Act","Executive Orders of the Ministry of Personnel"],
        "correctAnswerIndex": 1,
        "explanation": "The CAT is not bound by the procedure laid down in the Civil Procedure Code (CPC). It is guided by the Principles of Natural Justice."
    },
    {
        "id": "ch36-l1-q13",
        "question": "Article 323B empowers whom to establish tribunals for the adjudication of disputes relating to",
        "options": ["Parliament only","State Legislatures only","Both Parliament and State Legislatures (within their competence)","The Governor of the State"],
        "correctAnswerIndex": 2,
        "explanation": "Article 323B empowers both Parliament and State Legislatures to establish tribunals for other matters within their respective legislative competence."
    },
    {
        "id": "ch36-l1-q14",
        "question": "Which of the following matters is NOT covered under Article 323B (Tribunals for other matters)?",
        "options": ["Taxation","Industrial and Labour disputes","Elections to Parliament and State Legislatures","Recruitment of State Civil Servants"],
        "correctAnswerIndex": 3,
        "explanation": "Recruitment of State Civil Servants falls under Article 323A (Administrative Tribunals), not 323B."
    },
    {
        "id": "ch36-l1-q15",
        "question": "Which Article allows for the creation of a",
        "options": ["Article 323A","Article 323B","Both Article 323A and 323B","Neither Article 323A nor 323B"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 323B, a hierarchy of tribunals can be created. Under Article 323A, there is no hierarchy of tribunals."
    },
    {
        "id": "ch36-l1-q16",
        "question": "Article 323A differs from Article 323B in terms of the establishing authority. Which statement is true?",
        "options": ["Article 323A tribunals can be established only by Parliament.","Article 323B tribunals can be established only by State Legislatures.","Both can only be established by Parliament.","Both can only be established by State Legislatures."],
        "correctAnswerIndex": 0,
        "explanation": "While Article 323A can be established only by Parliament, Article 323B allows both Parliament and State Legislatures to create tribunals."
    },
    {
        "id": "ch36-l1-q17",
        "question": "Under Article 323A, what is the maximum number of tribunals that can be established for the Centre?",
        "options": ["One","Two","Three","Unlimited"],
        "correctAnswerIndex": 0,
        "explanation": "Under Article 323A, only one tribunal for the Centre (CAT) and one for each state (SAT) or two or more states (JAT) can be established."
    },
    {
        "id": "ch36-l1-q18",
        "question": "In the landmark L. Chandra Kumar Case (1997), what did the Supreme Court declare regarding the provisions of Articles 323A and 323B that excluded the writ jurisdiction of High Courts?",
        "options": ["The exclusion was declared constitutionally valid.","The exclusion was declared unconstitutional and void.","It upheld the exclusion but allowed appeals to the Supreme Court.","It left the decision to Parliament."],
        "correctAnswerIndex": 1,
        "explanation": "In the L. Chandra Kumar Case (1997), the Supreme Court declared that the provisions of Articles 323A and 323B that excluded the jurisdiction of High Courts were unconstitutional as Judicial Review is part of the Basic Structure."
    },
    {
        "id": "ch36-l1-q19",
        "question": "Post the 1997 L. Chandra Kumar judgement, an appeal against the decision of an Administrative Tribunal must first go to the:",
        "options": ["Supreme Court directly","Division Bench of the concerned High Court","Governor of the State","President of India"],
        "correctAnswerIndex": 1,
        "explanation": "Post-1997, an appeal against the decision of a Tribunal must first go to the Division Bench of the concerned High Court."
    },
    {
        "id": "ch36-l1-q20",
        "question": "Can the Central Government establish a State Administrative Tribunal (SAT)?",
        "options": ["No, only the State Legislature can.","Yes, on the specific request of the concerned State Government.","Yes, voluntarily without any state request.","Only upon the recommendation of the Supreme Court."],
        "correctAnswerIndex": 1,
        "explanation": "The Central Government can establish a State Administrative Tribunal (SAT) on the specific request of the concerned State Government."
    },
    {
        "id": "ch36-l1-q21",
        "question": "The Chairman and members of a State Administrative Tribunal (SAT) are appointed by the President after consultation with the:",
        "options": ["Chief Justice of India","Governor of the concerned State","Chief Minister of the State","Chairman of the Central Administrative Tribunal"],
        "correctAnswerIndex": 1,
        "explanation": "The Chairman and members of an SAT are appointed by the President after consultation with the Governor of that state."
    },
    {
        "id": "ch36-l1-q22",
        "question": "For whom can a Joint Administrative Tribunal (JAT) be established?",
        "options": ["For the Centre and a State.","For two or more states.","Only for North-Eastern states.","For all Union Territories combined."],
        "correctAnswerIndex": 1,
        "explanation": "The Joint Administrative Tribunal (JAT) can be established for two or more states."
    },
    {
        "id": "ch36-l1-q23",
        "question": "The members of the Central Administrative Tribunal are drawn from which background?",
        "options": ["Judicial background only","Administrative background only","Both Judicial and Administrative backgrounds","Private sector experts"],
        "correctAnswerIndex": 2,
        "explanation": "The members of CAT/SAT are drawn from both Judicial and Administrative backgrounds."
    },
    {
        "id": "ch36-l1-q24",
        "question": "Tribunals are often described not as traditional courts, but as:",
        "options": ["Quasi-legislative bodies","Quasi-judicial bodies","Executive agencies","Non-Governmental Organizations"],
        "correctAnswerIndex": 1,
        "explanation": "Tribunals are known as"
    },
    {
        "id": "ch36-l1-q25",
        "question": "Does the Central Administrative Tribunal (CAT) possess the power to punish for its contempt?",
        "options": ["No, it must refer the matter to the High Court.","Yes, it has the same power to punish for contempt as a High Court.","Yes, but only with a symbolic fine.","No, only the Supreme Court can punish for contempt of CAT."],
        "correctAnswerIndex": 1,
        "explanation": "The CAT possesses the power to punish for its contempt, having the same jurisdiction, powers and authority in this respect as a High Court."
    },
    {
        "id": "ch36-l1-q26",
        "question": "Which Constitutional Amendment envisioned the setting up of Tribunals to relieve the heavy burden of the regular courts?",
        "options": ["1st Amendment","24th Amendment","42nd Amendment","44th Amendment"],
        "correctAnswerIndex": 2,
        "explanation": "The 42nd Amendment Act (1976) introduced Part XIV-A, aiming to reduce the backlog in regular courts by establishing specialized tribunals."
    },
    {
        "id": "ch36-l1-q27",
        "question": "Article 323B relates to tribunals specialized for:",
        "options": ["Only service matters of public servants","Only military personnel disputes","Other matters such as taxation, foreign exchange, and land reforms","Appeals against the Prime Minister"],
        "correctAnswerIndex": 2,
        "explanation": "While 323A deals strictly with public service matters, 323B relates to tribunals for"
    },
    {
        "id": "ch36-l1-q28",
        "question": "Regarding evidence and procedure, Tribunals are designed to provide speedy and inexpensive justice by avoiding the technicalities of the:",
        "options": ["Indian Evidence Act","Constitution of India","Parliamentary Rules","International Court of Justice"],
        "correctAnswerIndex": 0,
        "explanation": "Tribunals are guided by the principles of natural justice and are not bound by the strict procedural and evidentiary rules of the Indian Evidence Act or the CPC."
    },
    {
        "id": "ch36-l1-q29",
        "question": "Who bears the administrative expenses of a State Administrative Tribunal (SAT)?",
        "options": ["The Central Government","The State Government","The Supreme Court of India","Shared equally between the Centre and the State"],
        "correctAnswerIndex": 1,
        "explanation": "Although SATs are established by the Central government on the request of the state, their administrative expenses and salaries are borne by the respective State Government."
    },
    {
        "id": "ch36-l1-q30",
        "question": "Under Article 323A, Parliament can authorize administrative tribunals to exercise jurisdiction covering public servants of the Union, States, local bodies, and:",
        "options": ["Private sector corporations","Public corporations and other public authorities","Non-governmental organizations (NGOs)","Workers of the unorganized sector"],
        "correctAnswerIndex": 1,
        "explanation": "Article 323A allows Parliament to establish administrative tribunals for the adjudication of disputes concerning the recruitment and service conditions of persons in service under the Union, State, or any local or other public authority or public corporation."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch36-l2-q1",
        "question": "Before the landmark L. Chandra Kumar Case (1997), appeals from the Central Administrative Tribunal (CAT) went directly to the Supreme Court. What is the current judicial path for an aggrieved party?",
        "options": ["Directly to the Supreme Court under Article 136.","To the Division Bench of the concerned High Court under Article 226/227.","To the District Court for a fresh trial.","No appeal is possible as Tribunals are final."],
        "correctAnswerIndex": 1,
        "explanation": "Post-1997, the SC ruled that appeals against the orders of the CAT shall lie before the division bench of the concerned High Court. Consequently, now it is not possible to appeal directly to the Supreme Court."
    },
    {
        "id": "ch36-l2-q2",
        "question": "In the context of the Basic Structure Doctrine, the Supreme Court ruled in the L. Chandra Kumar case that the power of Judicial Review over Tribunals:",
        "options": ["Can be selectively excluded by Parliament to ensure speedy justice.","Is a part of the basic structure and cannot be excluded even by a Constitutional Amendment.","Belongs exclusively to the Supreme Court, bypassing High Courts.","Applies only when the tribunal imposes a criminal sentence."],
        "correctAnswerIndex": 1,
        "explanation": "The SC declared that the power of judicial review vested in the High Courts under Articles 226 and 227 and in the Supreme Court under Article 32 is an integral and essential feature of the Constitution, constituting part of its basic structure."
    },
    {
        "id": "ch36-l2-q3",
        "question": "What was a primary practical rationale the Supreme Court provided in the L. Chandra Kumar case for mandating that Tribunal appeals must go to the High Court first rather than directly to the Supreme Court?",
        "options": ["To increase the general workload and revenue of High Courts.","To ensure the Supreme Court acts only as a court of last resort and to filter out non-substantial factual disputes from flooding the apex court.","To symbolically assert the High Court","Because the Constitution specifically barred the Supreme Court from hearing service matters."],
        "correctAnswerIndex": 1,
        "explanation": "The direct appeal mechanism was flooding the Supreme Court with service matter appeals. Routing them through the Division Bench of High Courts acts as a filter, allowing the SC to focus on substantial questions of law."
    },
    {
        "id": "ch36-l2-q4",
        "question": "Article 323A is dedicated strictly to",
        "options": ["A Tribunal resolving disputes over the recruitment to the Indian Administrative Service (IAS).","A Tribunal adjudicating disputes relating to foreign exchange and import-export across borders.","A Tribunal for the civilian employees of the Defense Ministry.","A Joint Administrative Tribunal for the civil services of Punjab and Haryana."],
        "correctAnswerIndex": 1,
        "explanation": "Article 323B covers"
    },
    {
        "id": "ch36-l2-q5",
        "question": "Which of the following statements accurately captures the differences in the establishing authority between the two Tribunal Articles?",
        "options": ["Only Parliament can establish tribunals under both Article 323A and 323B.","State Legislatures can establish tribunals under Article 323A for their own state services without parliamentary involvement.","While tribunals under Article 323A can be established only by Parliament, tribunals under Article 323B can be established by both Parliament and State Legislatures.","The President establishes tribunals under 323A, while the Governor establishes them under 323B."],
        "correctAnswerIndex": 2,
        "explanation": "Article 323A tribunals can be established only by Parliament. In contrast, Article 323B tribunals can be established by both Parliament and state legislatures with respect to matters falling within their legislative competence."
    },
    {
        "id": "ch36-l2-q6",
        "question": "Under the provisions of Article 323A (Administrative Tribunals), can the legislative framework create an",
        "options": ["Yes, the Article explicitly mandates a multi-tier hierarchy for appeals.","No, Article 323A does not permit the creation of a hierarchy of tribunals. It provides for only one tribunal at the Centre and one for each state (or two or more states).","Yes, but only if the Supreme Court grants prior approval.","Only for Armed Forces personnel."],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 323A, there is no hierarchy of tribunals. It envisions a single flat structure (CAT at the center, SATs at the state level). Alternatively, under Article 323B, a hierarchy of tribunals may be created."
    },
    {
        "id": "ch36-l2-q7",
        "question": "The members of Administrative Tribunals are drawn from both",
        "options": ["Practicing lawyers with 10 years of experience.","Senior IAS officers or other high-ranking civil servants with extensive experience in public administration and service rules.","Retired High Court judges.","Elected Members of Parliament."],
        "correctAnswerIndex": 1,
        "explanation": "Administrative members bring specialized knowledge of government functioning, service rules, and administrative nuances which traditional judges may lack. They are usually senior civil servants."
    },
    {
        "id": "ch36-l2-q8",
        "question": "The Central Administrative Tribunal (CAT) is exempt from the rigid procedures of the Indian Evidence Act, 1872. What is the primary advantage of this exemption?",
        "options": ["It allows the tribunal to completely ignore documentary evidence and base decisions solely on oral testimony.","It permits the tribunal to adopt a flexible, informal approach to gather facts and ensure","without being bogged down by procedural technicalities.","It allows the tribunal to convict civil servants of criminal offenses based on hearsay.","It forces the tribunal to follow military tribunal procedures."],
        "correctAnswerIndex": 1,
        "explanation": "By not being bound by the strict rules of evidence, tribunals can ensure quick, cheap, and flexible adjudication, focusing on the core facts and substantial justice rather than procedural loopholes."
    },
    {
        "id": "ch36-l2-q9",
        "question": "If a Group B Central Government employee wants to challenge their suspicious transfer order before the CAT, do they legally require a lawyer?",
        "options": ["Yes, legal representation by a registered advocate is mandatory in all constitutional tribunals.","No, the applicant may appear either in person or through any legal practitioner of their choice.","Only allowed if the opposing party (the Government) is represented by the Attorney General.","No, they cannot even use a lawyer; they must appear personally."],
        "correctAnswerIndex": 1,
        "explanation": "To ensure approachability and lower costs, the Administrative Tribunals Act allows an applicant to step before the CAT either in person or through an authorized legal practitioner."
    },
    {
        "id": "ch36-l2-q10",
        "question": "A State Administrative Tribunal (SAT) is established by the Central Government on the specific request of the concerned State Government. In this arrangement, who is responsible for paying the salaries and administrative expenses of the SAT?",
        "options": ["The Consolidated Fund of India.","The Central Government directly from the Law Ministry budget.","The State Government concerned.","Shared equally (50-50) between the Centre and the State."],
        "correctAnswerIndex": 2,
        "explanation": "While the Centre establishes it and the President appoints the members, the salaries and administrative expenses of a State Administrative Tribunal are borne by the respective state government."
    },
    {
        "id": "ch36-l2-q11",
        "question": "Under what specific circumstance is a",
        "options": ["When there is a constitutional dispute between the Centre and a State regarding civil services.","When two or more states jointly request the Central Government to establish a common tribunal to hear service matters of their public servants.","When the Supreme Court orders the consolidation of multiple high-volume SATs.","When a national emergency is declared affecting civil administration in multiple states."],
        "correctAnswerIndex": 1,
        "explanation": "The Act authorizes the Central government to establish a Joint Administrative Tribunal (JAT) for two or more states, but only on the specific request of the concerned state governments."
    },
    {
        "id": "ch36-l2-q12",
        "question": "The",
        "options": ["It is established under Article 323A because environmental officials are public servants.","It is established under Article 323B as","falls under",".","It is a statutory body established directly by an Act of Parliament (NGT Act, 2010) drawing inspiration primarily from Article 21 (Right to Life/Environment), not strictly deriving its source from 323A/323B.","It is an executive body created by the Ministry of Environment."],
        "correctAnswerIndex": 2,
        "explanation": "The NGT is a specialized statutory body set up under the National Green Tribunal Act, 2010, for effective and expeditious disposal of cases relating to environmental protection. It doesn"
    },
    {
        "id": "ch36-l2-q13",
        "question": "Members of the defense forces are explicitly kept outside the purview of the Central Administrative Tribunal (CAT). How are their service disputes adjudicated?",
        "options": ["Through direct petitions to the President of India as the Supreme Commander.","Through the Armed Forces Tribunal (AFT), which was set up under a separate parliamentary act in 2007.","They can only file writ petitions directly in the Supreme Court.","They have no judicial recourse and must accept Court Martial rulings absolutely."],
        "correctAnswerIndex": 1,
        "explanation": "To provide a dedicated forum for military personnel (who are excluded from CAT), the Armed Forces Tribunal (AFT) was established under the Armed Forces Tribunal Act, 2007."
    },
    {
        "id": "ch36-l2-q14",
        "question": "Assertion (A): Tribunals are intended to provide expert adjudication in modern, complex governmental functions.\\nReason (R): Administrative members on these tribunals bring specialized, practical knowledge of government functioning and service rules which traditional judges may lack.\\nSelect the correct answer:",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The inclusion of administrative members (like retired IAS officers) is explicitly to blend judicial fairness with administrative expertise, allowing tribunals to understand the practical nuances of service/taxation disputes better than a pure judicial court."
    },
    {
        "id": "ch36-l2-q15",
        "question": "Assertion (A): A State Legislature acting alone cannot establish an Administrative Tribunal (SAT) for its own state civil services.\\nReason (R): Article 323A explicitly reserves the power to provide for the establishment of administrative tribunals exclusively to the Union Parliament.\\nSelect the correct answer:",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Article 323A states that Parliament may, by law, provide for the adjudication of disputes... A state legislature has no constitutional power to create an administrative tribunal under 323A; it must request the Centre to establish a SAT via the central Act."
    },
    {
        "id": "ch36-l2-q16",
        "question": "Which of the following matters is historically significant for being added to the scope of Article 323B regarding tenancy issues?",
        "options": ["Rent, its regulation and control and tenancy issues.","Urban property ceilings.","Inter-state river water disputes.","Agricultural produce marketing."],
        "correctAnswerIndex": 0,
        "explanation": "Through an amendment in 1993 (75th Amendment Act), the constitution added"
    },
    {
        "id": "ch36-l2-q17",
        "question": "In the structure of the Central Administrative Tribunal (CAT), what is the role of the",
        "options": ["The Vice-Chairman acts as the primary disciplinary authority over the Chairman.","The post of Vice-Chairman was abolished in 2006 to streamline the administrative structure.","The Vice-Chairman handles all appeals against the Chairman","The Vice-Chairman is strictly a political appointee made by the Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "By an amendment to the Administrative Tribunals Act in 2006, the members have been given the status of judges of High Courts, and the post of Vice-Chairman was abolished."
    },
    {
        "id": "ch36-l2-q18",
        "question": "A tribunal decides a case concerning the fixation of seniority for thousands of government employees. An aggrieved employee challenges this order. Legally, the High Court will review this order under which Article primarily?",
        "options": ["Article 32","Article 136","Article 226/227","Article 323A"],
        "correctAnswerIndex": 2,
        "explanation": "Following L. Chandra Kumar, the High Court exercises its power of judicial review (writ jurisdiction) and superintendence over tribunals situated within its territorial jurisdiction under Articles 226 and 227."
    },
    {
        "id": "ch36-l2-q19",
        "question": "Suppose the Parliament enacts a law under Article 323B to create a tribunal for adjudicating electoral disputes regarding State Legislatures. What happens to the jurisdiction of the High Court over such election petitions as per the original intent of the 42nd Amendment?",
        "options": ["The High Court","The law may specifically exclude the jurisdiction of all courts (including High Courts) except the Supreme Court (under Art 136).","The High Court shares concurrent original jurisdiction with the tribunal.","Election petitions can only be heard by the Election Commission."],
        "correctAnswerIndex": 1,
        "explanation": "The original intent of Articles 323A and 323B (added by the 42nd Amendment) was to allow the establishing law to exclude the jurisdiction of all courts (except the SC under 136) over the disputes referred to the tribunal. However, this exclusion was struck down in 1997."
    },
    {
        "id": "ch36-l2-q20",
        "question": "The Income Tax Appellate Tribunal (ITAT) is one of the oldest tribunals in India (established 1941). Functionally, what type of disputes does it handle?",
        "options": ["Disputes between the Finance Ministry and its employees regarding promotions.","Direct tax disputes between the taxpayers and the Income Tax Department.","Disputes regarding the allocation of tax revenue between the Centre and States.","Criminal prosecution for tax evasion under the Indian Penal Code."],
        "correctAnswerIndex": 1,
        "explanation": "The ITAT is a quasi-judicial institution that deals with appeals under the Direct Taxes Acts (Income Tax, etc.) between the assessees (taxpayers) and the IT department."
    },
    {
        "id": "ch36-l2-q21",
        "question": "Regarding the composition of the CAT, if a bench must adjudicate a service dispute smoothly, what is the mandated bench composition according to the Act?",
        "options": ["A single judicial member.","A single administrative member.","At least three members, with the Chairman presiding.","Generally, a Division Bench comprising one Judicial Member and one Administrative Member."],
        "correctAnswerIndex": 3,
        "explanation": "To ensure a balance of legal acumen and administrative experience, benches of the CAT are typically division benches consisting of one Judicial Member and one Administrative Member."
    },
    {
        "id": "ch36-l2-q22",
        "question": "Which of the following statements is true regarding the appeal route for decisions made by the Armed Forces Tribunal (AFT)?",
        "options": ["Appeals lie exclusively to the Division Bench of the concerned High Court.","Appeals lie directly to the Supreme Court of India, subject to leave being granted by the AFT or the SC.","Appeals lie to the President of India as the Supreme Commander.","AFT decisions are final and cannot be appealed anywhere."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike the CAT (where appeals go to the HC first), the Armed Forces Tribunal Act provides for a direct appeal from the AFT to the Supreme Court of India, bypassing the High Courts, usually on matters of general public importance."
    },
    {
        "id": "ch36-l2-q23",
        "question": "Can a State Administrative Tribunal (SAT) exercise jurisdiction over the employees of a local body (like a Municipal Corporation) within that state?",
        "options": ["No, SATs are strictly for State Civil Services (like State PCS officers).","Yes, if the State Legislature enacts a law extending the SAT","Yes, but only with the prior permission of the Central Administrative Tribunal.","No, local body disputes are handled exclusively by District Courts."],
        "correctAnswerIndex": 1,
        "explanation": "Article 323A states that tribunals can adjudicate disputes of persons appointed to public services and posts in connection with the affairs of the Union or of any State or of any local or other authority within the territory of India..."
    },
    {
        "id": "ch36-l2-q24",
        "question": "The power of",
        "options": ["Article 32","Article 226","Article 227","Article 323A"],
        "correctAnswerIndex": 2,
        "explanation": "Article 227 vests the High Court with the power of superintendence (both administrative and judicial) over all courts and tribunals (except those relating to armed forces) functioning within its territorial jurisdiction."
    },
    {
        "id": "ch36-l2-q25",
        "question": "What is the primary difference in the procedure for the removal of a Supreme Court Judge versus a Member of the Central Administrative Tribunal?",
        "options": ["Both require a parliamentary impeachment motion with a special majority.","A Tribunal member is removed by the President without any inquiry, at pleasure. A SC judge requires parliamentary impeachment.","A SC judge requires parliamentary impeachment. A Tribunal member can be removed by the President on the ground of proved misbehavior or incapacity after an inquiry by a sitting Supreme Court Judge.","A Tribunal member can only be removed by the Chairman of the CAT."],
        "correctAnswerIndex": 2,
        "explanation": "While SC/HC judges require a cumbersome parliamentary impeachment, members of CAT are removed by the President on grounds of proved misbehavior or incapacity, but only after an inquiry held by a judge of the Supreme Court to safeguard their independence."
    },
    {
        "id": "ch36-l2-q26",
        "question": "In the context of the L. Chandra Kumar judgment, if a petitioner wishes to challenge the constitutional validity of a service rule, must they go to the High Court directly, or approach the Administrative Tribunal first?",
        "options": ["They must go to the High Court directly because Tribunals cannot examine constitutional issues.","They must approach the Tribunal first, as Tribunals act as courts of first instance for all matters (including constitutional validity of rules) falling within their statutory jurisdiction, subject to review by the High Court.","They can choose either forum based on convenience.","They must approach the Supreme Court directly."],
        "correctAnswerIndex": 1,
        "explanation": "The SC clarified in L. Chandra Kumar that tribunals will continue to act as courts of first instance in respect of the areas of law for which they have been constituted. It will not be open for litigants to directly approach the HCs even in cases addressing the vires of statutory legislations."
    },
    {
        "id": "ch36-l2-q27",
        "question": "Tribunals are",
        "options": ["Legislature","Traditional Judiciary","Executive","Media"],
        "correctAnswerIndex": 2,
        "explanation": "Tribunals are created by statutes as part of the executive branch machinery to relieve the courts"
    },
    {
        "id": "ch36-l2-q28",
        "question": "Assertion (A): The jurisdiction of the Supreme Court under Article 136 (Special Leave Petition) regarding decisions of Tribunals remained intact even after the 42nd Amendment originally passed Articles 323A and 323B.\\nReason (R): Article 323A and 323B explicitly stated that they do not affect the jurisdiction of the Supreme Court under Article 136.\\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is NOT the correct explanation.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "The 42nd Amendment attempted to exclude the jurisdiction of High Courts (226/227), but the establishing articles explicitly preserved the Supreme Court"
    },
    {
        "id": "ch36-l2-q29",
        "question": "Which Constitutional Amendment extended the scope of Article 323B to specifically include the adjudication of disputes relating to rent and tenancy issues?",
        "options": ["44th Amendment Act, 1978.","73rd Amendment Act, 1992.","75th Amendment Act, 1993.","97th Amendment Act, 2011."],
        "correctAnswerIndex": 2,
        "explanation": "The 75th Amendment Act (1993) amended Article 323B to enable the establishment of rent tribunals for speedy disposal of rent and tenancy disputes."
    },
    {
        "id": "ch36-l2-q30",
        "question": "The Chairman of CAT can be appointed from among persons who are, or have been:",
        "options": ["Secretary to the Government of India for at least 5 years.","A Judge of a High Court.","A Senior Advocate of the Supreme Court.","A retired Chief Minister."],
        "correctAnswerIndex": 1,
        "explanation": "According to the rules, the Chairman of the CAT has typically been a sitting or retired Judge of a High Court, reflecting the need for strong judicial leadership at the helm of the tribunal."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch36-l3-q1",
        "question": "Consider the implications of the Tribunals Reforms Act, 2021. The Act abolished several existing appellate tribunals, such as the Film Certification Appellate Tribunal (FCAT), and transferred their functions to:",
        "options": ["The Supreme Court of India.","The respective High Courts.","The Central Administrative Tribunal.","A newly constituted National Tribunal Commission."],
        "correctAnswerIndex": 1,
        "explanation": "The Tribunals Reforms Act, 2021 abolished several appellate bodies and transferred their jurisdiction (the power to hear appeals) to other existing judicial bodies, predominantly the High Courts."
    },
    {
        "id": "ch36-l3-q2",
        "question": "In Madras Bar Association vs. Union of India (2021), the Supreme Court scrutinized the Tribunals Reforms Ordinance (later the Act). The Court specifically struck down provisions regarding the tenure of Tribunal members, insisting that a shorter tenure undermines judicial independence. The Court directed that the minimum tenure should be:",
        "options": ["3 years.","5 years.","1 year.","10 years."],
        "correctAnswerIndex": 1,
        "explanation": "The Supreme Court struck down the 4-year tenure provision, reiterating its earlier direction that members of tribunals should hold a term of 5 years to ensure stability, confidence, and judicial independence."
    },
    {
        "id": "ch36-l3-q3",
        "question": "Following recent judicial directions to diminish executive control over tribunal appointments, the",
        "options": ["The Prime Minister of India.","The Chief Justice of India (or a Supreme Court Judge nominated by him).","The Cabinet Secretary.","The Union Law Minister."],
        "correctAnswerIndex": 1,
        "explanation": "To safeguard judicial independence, the Supreme Court mandated that the Search-cum-Selection Committee, which shortlists candidates for tribunals, must be chaired by the Chief Justice of India or their nominee."
    },
    {
        "id": "ch36-l3-q4",
        "question": "In the context of the Madras Bar Association (2021) judgment, how did the Supreme Court view the government",
        "options": ["Valid, as tribunal adjudicators require maturity and vast experience.","Unconstitutional and arbitrary, as it unjustifiably excluded younger, talented advocates from joining the bench, contrary to the overarching goal of judicial efficiency.","Applicable only to the appointment of Administrative members, not Judicial members.","Applicable only to the post of Chairman."],
        "correctAnswerIndex": 1,
        "explanation": "The SC struck down the 50-year minimum age requirement, arguing it was arbitrary and deprived tribunals of younger, competent candidates, especially when High Court judges can be appointed at a younger age."
    },
    {
        "id": "ch36-l3-q5",
        "question": "A consistent point of friction between the Judiciary and the Executive regarding tribunals is the alteration of service conditions (salary, allowances) during a member",
        "options": ["The Executive, through the nodal ministry, can unilaterally change them to align with Central Pay Commission directives.","They cannot be altered to the disadvantage of the member after their appointment, as a fundamental safeguard of their independence.","They can be altered only if an Ordinance is promulgated by the President.","They are determined annually by the vote of the concerned State Legislature."],
        "correctAnswerIndex": 1,
        "explanation": "To ensure tribunal members aren"
    },
    {
        "id": "ch36-l3-q6",
        "question": "Tribunals like the Income Tax Appellate Tribunal (ITAT) are frequently referred to as the",
        "options": ["The High Court cannot hear any appeal against an ITAT order under any circumstance.","The High Court generally accepts the factual determinations made by the ITAT as final and will only interfere if the appeal involves a",".","The factual findings of the ITAT must be verified affirmatively by the Supreme Court.","The Government has the power to overrule the facts determined by the tribunal."],
        "correctAnswerIndex": 1,
        "explanation": "Unlike an original trial court, a High Court reviewing a tribunal"
    },
    {
        "id": "ch36-l3-q7",
        "question": "Is the National Green Tribunal (NGT) subject to the writ jurisdiction of the High Courts, despite the NGT Act explicitly providing a statutory appeal route directly to the Supreme Court?",
        "options": ["No, the statutory provision overrides the High Court","Yes. The Supreme Court in Madhya Pradesh High Court vs. Union of India affirmed that the power of judicial review under Article 226/227 is a part of the Basic Structure and cannot be ousted by a statute.","Only with the prior permission of the NGT Chairman.","Only in matters concerning criminal pollution offenses."],
        "correctAnswerIndex": 1,
        "explanation": "Despite the NGT Act providing an appeal to the SC, the constitutional power of HCs under 226/227 remains intact. An aggrieved party can approach a HC against an NGT order, as judicial review is a constitutional basic structure."
    },
    {
        "id": "ch36-l3-q8",
        "question": "A Group A officer challenges an unjust dismissal order before the Central Administrative Tribunal (CAT). The CAT rules against the officer. Can the officer challenge this ruling before a single judge of the Delhi High Court?",
        "options": ["Yes, a single judge has the constitutional authority under Article 226.","No. According to the L. Chandra Kumar ruling, challenges to CAT orders must be heard by a Division Bench (at least two judges) of the High Court.","Only if the dispute involves pension or arrears exceeding ₹10 lakhs.","Yes, but only the Chief Justice of the High Court can hear it."],
        "correctAnswerIndex": 1,
        "explanation": "To ensure that tribunal orders (often passed by a bench consisting of a retired HC judge) are reviewed with sufficient gravity, the SC mandated in L. Chandra Kumar that such writ petitions must be heard by a Division Bench."
    },
    {
        "id": "ch36-l3-q9",
        "question": "In the past, states like Odisha and Himachal Pradesh have abolished their State Administrative Tribunals (SATs). Can the Central Government abolish a SAT unilaterally?",
        "options": ["Yes, the Central Government has plenary power under Article 323A.","No, the power to abolish a SAT vests entirely in the State Legislative Assembly by a special majority.","It can do so, but primarily upon the specific request or concurrence of the concerned State Government which initially requested its creation.","Abolition requires a Constitutional Amendment."],
        "correctAnswerIndex": 2,
        "explanation": "Just as a SAT is established by the Centre upon the request of a state, its abolition generally follows a concurring request or notification reversing the original establishment, usually initiated by the state citing inefficiency or redundancy."
    },
    {
        "id": "ch36-l3-q10",
        "question": "The",
        "options": ["Article 323A, because they deal with conditions of service of corporate directors.","Article 323B, under the specific clause relating to",".","They are primarily statutory, established under the Companies Act, 2013, drawing broad constitutional validity from Parliament","They are established via a joint resolution of the RBI and SEBI."],
        "correctAnswerIndex": 2,
        "explanation": "The NCLT and NCLAT are statutory bodies created entirely under the Companies Act, 2013. While Parliament has broad powers (and 323B does cover certain specialized things), NCLT is a direct creation of the Companies Act."
    },
    {
        "id": "ch36-l3-q11",
        "question": "The concept of",
        "options": ["It leads to a massive reduction in the salaries of traditional judges.","By transferring judicial functions from regular courts to tribunals heavily influenced by parent ministries (Executive), it undermines the","and the independence of the Judiciary.","It forces all trials to be held entirely in English.","It mandates the use of foreign law in domestic disputes."],
        "correctAnswerIndex": 1,
        "explanation": "Tribunalization is criticized because tribunals are often funded, administered, and populated by the very executive departments whose actions they are supposed to adjudicate, threatening the Separation of Powers."
    },
    {
        "id": "ch36-l3-q12",
        "question": "Can an individual with absolutely no formal legal degree or judicial background be appointed as a",
        "options": ["No, the position of a","strictly requires a person who is, has been, or is qualified to be a judge of a High Court, ensuring legal expertise.","Yes, if they have served for 20 years in public administration, they can act as a Judicial Member.","Only if nominated directly by the Prime Minister.","Only in the National Green Tribunal."],
        "correctAnswerIndex": 0,
        "explanation": "A"
    },
    {
        "id": "ch36-l3-q13",
        "question": "Assertion (A): The overarching power of Parliament to establish Tribunals under Article 323A is wider in scope than its power under Article 323B.\\nReason (R): Article 323A deals with All-India services and Central services which are of paramount national importance.\\nSelect the correct answer:",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","A is false, but R is true."],
        "correctAnswerIndex": 3,
        "explanation": "A is FALSE. Article 323B is wider in scope because it covers a vast array of topics (taxation, land reforms, rent, elections, forex), whereas Article 323A is strictly narrow, covering only public service matters. R is a true statement factually, but A is completely incorrect."
    },
    {
        "id": "ch36-l3-q14",
        "question": "Assertion (A): A member of the Central Administrative Tribunal (CAT) acts completely independently because they can only be removed from office following the exact same parliamentary impeachment process as a Supreme Court Judge.\\nReason (R): The Constitution grants tribunal members the same security of tenure as Constitutional Court judges to prevent executive interference.\\nSelect the correct answer:",
        "options": ["Both A and R are true, and R is the correct explanation of A.","Both A and R are true, but R is NOT the correct explanation.","A is true, but R is false.","Both A and R are false."],
        "correctAnswerIndex": 3,
        "explanation": "Both A and R are FALSE. Tribunal members do NOT face parliamentary impeachment. They are removed by the President following an inquiry by a sitting SC Judge (a statutory protection, not constitutional impeachment). They do not have the identical constitutional security of SC judges."
    },
    {
        "id": "ch36-l3-q15",
        "question": "Under the provisions of the Administrative Tribunals Act, 1985, if the Central Government is a party in a case before the CAT, who is responsible for enforcing the order passed by the CAT?",
        "options": ["Only the Supreme Court can enforce it.","The CAT itself, using its contempt powers and directing the relevant government department to comply with its order as a decree of a civil court.","The High Court of the concerned state.","The Ministry of Law and Justice."],
        "correctAnswerIndex": 1,
        "explanation": "CAT orders are executed in the same manner as a decree of a civil court. If the government fails to comply, the CAT can initiate contempt proceedings to enforce its decision."
    },
    {
        "id": "ch36-l3-q16",
        "question": "The proposal for creating a",
        "options": ["To act as a super-appellate body over the Supreme Court.","To strip High Courts of their Article 226 powers.","To establish an independent, centralized statutory body to oversee the appointments, administration, and infrastructural requirements of all tribunals, severing their dependence on nodal ministries.","To replace the Election Commission of India."],
        "correctAnswerIndex": 2,
        "explanation": "The NTC is proposed to be an independent umbrella body to handle the administrative and financial needs of tribunals, removing their reliance on their respective"
    },
    {
        "id": "ch36-l3-q17",
        "question": "Regarding Article 323B (Tribunals for other matters), can an individual challenge an election to the Lok Sabha in a Tribunal established under this article, bypassing the High Court?",
        "options": ["Yes, if Parliament creates such an Election Tribunal, it completely excludes High Court jurisdiction.","No. Although 323B allows for election tribunals, under the Representation of the People Act, 1951, election petitions are exclusively filed as original suits in the High Court, and no such separate national election tribunal currently exists for MPs/MLAs.","Yes, but only for Presidential elections.","No, only the Election Commission can hear post-election petitions."],
        "correctAnswerIndex": 1,
        "explanation": "While Article 323B theoretically permits Parliament to create tribunals for"
    },
    {
        "id": "ch36-l3-q18",
        "question": "Under Article 323A, can a State Legislature enact a law to establish an Administrative Tribunal to resolve disputes relating to the recruitment of employees in its own State Public Sector Undertakings (PSUs)?",
        "options": ["Yes, because State PSUs are under the exclusive control of the State.","No, the power to legislate for the establishment of ANY tribunal under Article 323A is vested exclusively in Parliament. The state must rely on the Central Act.","Yes, provided the President gives prior assent to the state bill.","Yes, but only if the State High Court approves."],
        "correctAnswerIndex": 1,
        "explanation": "Article 323A explicitly states"
    },
    {
        "id": "ch36-l3-q19",
        "question": "If a Member of the Armed Forces Tribunal (AFT) is to be removed before the completion of their tenure, the mandatory inquiry into the allegations must be conducted by:",
        "options": ["A Court Martial.","The Chief of Defence Staff (CDS).","A sitting Judge of the Supreme Court of India.","The Defence Secretary."],
        "correctAnswerIndex": 2,
        "explanation": "Similar to the CAT, to protect the independence of AFT members from executive dictates, they can only be removed by the President based on an inquiry report showing proved misbehavior or incapacity submitted by a sitting Supreme Court Judge."
    },
    {
        "id": "ch36-l3-q20",
        "question": "Section 3 of the Administrative Tribunals Act empowers the Central Government to establish CAT. The Supreme Court in a historic judgment noted that the CAT operates as a",
        "options": ["An equal to the Supreme Court.","A subordinate court strictly supervised under Article 227 by the High Court, meaning its writ jurisdiction cannot be absolutely ousted.","A legislative committee.","A part of the Prime Minister"],
        "correctAnswerIndex": 1,
        "explanation": "While intended to be a"
    },
    {
        "id": "ch36-l3-q21",
        "question": "Under Article 323B, a State Legislature enacts a law to create a tribunal for resolving disputes over the ceiling on urban property. Does this state law require the assent of the President to be valid?",
        "options": ["It automatically requires Presidential assent because tribunals are a Union Subject.","It does not require Presidential assent if it only deals with state subjects and does not conflict with existing Central Laws.","Yes, because all laws under Part XIV-A require Presidential assent.","No, it requires the assent of the Chief Justice of India."],
        "correctAnswerIndex": 1,
        "explanation": "Under 323B, State Legislatures can make laws on matters within their competence (e.g., land ceilings, state taxes). Unless the bill is specifically reserved by the Governor or conflicts with a central law (triggering Article 254), standard Presidential assent is not a blanket requirement."
    },
    {
        "id": "ch36-l3-q22",
        "question": "If the Central Administrative Tribunal (CAT) strikes down a rule framed by the Department of Personnel and Training (DoPT) as unconstitutional, does the CAT have the power to do so?",
        "options": ["No, tribunals cannot rule on constitutional validity; they can only interpret service rules.","Yes, the SC recognized in L. Chandra Kumar that Tribunals act as courts of first instance and can test the vires (constitutional validity) of subordinate legislations and statutory rules.","Only if the rule violated an International Treaty.","No, only the Supreme Court can strike down DoPT rules."],
        "correctAnswerIndex": 1,
        "explanation": "Tribunals can test the constitutional validity of statutory provisions/rules falling within their specialized jurisdiction. However, they cannot test the vires of the parent Act that created them."
    },
    {
        "id": "ch36-l3-q23",
        "question": "Which landmark case firmly established the principle that creating tribunals that are virtually subordinate branches of the executive ministries, where secretaries are judges in their own cause, violates the basic structure of the Constitution?",
        "options": ["Kesavananda Bharati case.","Rojer Mathew vs. South Indian Bank Ltd (2019) / Madras Bar Association cases.","Indra Sawhney case.","Minerva Mills case."],
        "correctAnswerIndex": 1,
        "explanation": "The series of Madras Bar Association judgments (and Rojer Mathew) heavily criticized the Tribunal Rules framed by the government for lacking independence, emphasizing that tribunals cannot be prolonged arms of the executive."
    },
    {
        "id": "ch36-l3-q24",
        "question": "The Income Tax Appellate Tribunal (ITAT) has the status of a",
        "options": ["Yes, it was created immediately after the 42nd Amendment.","No, it was established in 1941, long before the Constitution or Article 323B existed. Its existence is anchored entirely in the statutory framework of the Income Tax Act.","It was created by a royal charter.","It is a temporary body renewed every 5 years."],
        "correctAnswerIndex": 1,
        "explanation": "The ITAT is one of the oldest tribunals, established in 1941. It is a perfect example of a statutory tribunal that existed prior to and independent of the Part XIV-A constitutional mechanism."
    },
    {
        "id": "ch36-l3-q25",
        "question": "Consider a dispute involving the fundamental right to free speech (Article 19) of a civil servant acting as a whistleblower, leading to their suspension. Can the CAT adjudicate on this fundamental right violation, and can the employee simultaneously approach the Supreme Court under Article 32?",
        "options": ["The CAT cannot hear matters of Fundamental Rights. Only the SC can under Article 32.","The CAT can hear the service dispute (including FR aspects). However, the employee retains the right to directly approach the SC under Article 32 for FR enforcement, though the SC may direct them to the CAT first.","The CAT has exclusive jurisdiction; Article 32 is completely suspended for civil servants.","The employee must resign before approaching the CAT."],
        "correctAnswerIndex": 1,
        "explanation": "CAT acts as the court of first instance for service matters, including those involving constitutional rights. However, Article 32 is a fundamental right itself. The SC might ask the petitioner to exhaust alternative remedies (CAT/HC), but the constitutional path of Art 32 theoretically exists."
    },
    {
        "id": "ch36-l3-q26",
        "question": "The appointment of",
        "options": ["Elections among the central civil servants.","Nominations by the State Governors.","Recommendations made by a high-powered Selection Committee chaired by a sitting Judge of the Supreme Court.","Direct appointment by the Cabinet Secretary without any committee."],
        "correctAnswerIndex": 2,
        "explanation": "Appointments are made by the President, but the crucial filtering and recommendation are done by a Selection Committee chaired by a sitting SC Judge (nominated by the CJI), ensuring judicial oversight over executive appointments."
    },
    {
        "id": "ch36-l3-q27",
        "question": "Are the judgements and orders of the National Green Tribunal (NGT) binding and enforceable?",
        "options": ["No, they are merely recommendatory to the Ministry of Environment.","Yes, they are enforceable as decrees of a civil court. Non-compliance can result in severe penalties, including imprisonment and hefty fines.","Yes, but only if approved by the State Pollution Control Boards.","Only the fines are enforceable, not the injunctions."],
        "correctAnswerIndex": 1,
        "explanation": "The NGT has immense teeth. Its orders are executable as decrees of a civil court, and the NGT Act prescribes severe penalties (imprisonment up to 3 years, fine up to Rs. 10 crore) for non-compliance."
    },
    {
        "id": "ch36-l3-q28",
        "question": "A defining characteristic of Tribunals under Article 323A and 323B is their jurisdiction over specific subject matters. Which of the following is an example of an adjudicatory body that is a",
        "options": ["Central Administrative Tribunal.","Industrial Tribunal established under the Industrial Disputes Act.","Rent Control Tribunal.","Railways Claims Tribunal."],
        "correctAnswerIndex": 3,
        "explanation": "While 323B covers industrial disputes and rent,"
    },
    {
        "id": "ch36-l3-q29",
        "question": "The 42nd Amendment originally sought to bar the jurisdiction of High Courts over tribunals. What was the constitutional logic proposed by the government at that time?",
        "options": ["To destroy the independence of the judiciary.","To promote the swift finality of tribunal decisions and prevent endless litigation in multi-tiered courts, thereby reducing arrears in High Courts.","To ensure only English law was applied.","To allow Governors to override judgments."],
        "correctAnswerIndex": 1,
        "explanation": "The stated objective was noble: to reduce the massive backlog in High Courts by creating specialized, expert bodies whose decisions would be swift and final (subject only to the SC). The flaw was that it undermined the constitutional check-and-balance of judicial review."
    },
    {
        "id": "ch36-l3-q30",
        "question": "In concluding the legal saga of Tribunals, what is the",
        "options": ["Tribunals must essentially be located in New Delhi.","If a tribunal replaces a court, it must possess the identical essential features of independence, security of tenure, and competence as the court it replaces.","It is essential to have only administrative members.","Tribunals essentially cannot award monetary compensation."],
        "correctAnswerIndex": 1,
        "explanation": "The Court held that transferring jurisdiction from High Courts/Civil Courts to Tribunals is permissible, but"
    }
];

export const CHAPTER_36_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
