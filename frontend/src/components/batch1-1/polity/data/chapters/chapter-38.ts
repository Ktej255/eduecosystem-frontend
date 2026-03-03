import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch38-l1-q1",
        "question": "Lok Adalats in India derive their statutory authority from which Act?",
        "options": ["Code of Civil Procedure, 1908", "Legal Services Authorities Act, 1987", "Arbitration and Conciliation Act, 1996", "Consumer Protection Act, 2019"],
        "correctAnswerIndex": 1,
        "explanation": "Lok Adalats are established under Chapter VI of the Legal Services Authorities Act (LSAA), 1987, which provides for the organization and functioning of Lok Adalats."
    },
    {
        "id": "ch38-l1-q2",
        "question": "Which Article of the Constitution provides the philos foundation for Lok Adalats through its mandate of equal justice and free legal aid?",
        "options": ["Article 14", "Article 21", "Article 39A", "Article 50"],
        "correctAnswerIndex": 2,
        "explanation": "Article 39A (DPSP, added by the 42nd Amendment) directs the State to secure equal justice and free legal aid, providing the constitutional basis for Lok Adalats and legal services."
    },
    {
        "id": "ch38-l1-q3",
        "question": "The Legal Services Authorities Act, 1987 came into force on:",
        "options": ["9th November 1987", "11th October 1987", "9th November 1995", "26th January 1996"],
        "correctAnswerIndex": 2,
        "explanation": "Though enacted in 1987, the LSAA came into force on 9th November 1995. NALSA (National Legal Services Authority) was constituted on this date."
    },
    {
        "id": "ch38-l1-q4",
        "question": "The National Legal Services Authority (NALSA) is headed by:",
        "options": ["The Chief Justice of India as Patron-in-Chief", "The Law Minister as Chairman", "The Prime Minister", "The Attorney General"],
        "correctAnswerIndex": 0,
        "explanation": "The Chief Justice of India is the Patron-in-Chief of NALSA. A sitting or retired Supreme Court Judge is nominated as the Executive Chairman by the President in consultation with the CJI."
    },
    {
        "id": "ch38-l1-q5",
        "question": "Every award made by a Lok Adalat is deemed to be:",
        "options": ["A mere recommendation", "A decree of a civil court, which is final and binding on all parties", "An advisory opinion", "An interim order subject to appeal"],
        "correctAnswerIndex": 1,
        "explanation": "Under Section 21 of LSAA, every award made by a Lok Adalat shall be deemed to be a decree of a civil court. It is final and binding on all parties and no appeal lies against it."
    },
    {
        "id": "ch38-l1-q6",
        "question": "Which of the following is true about the fees payable in a Lok Adalat?",
        "options": ["Heavy court fees as per CPC Schedule", "Nominal fees of Rs. 1,000", "No court fees are payable for filing a case in Lok Adalat", "Fees depend on the value of the dispute"],
        "correctAnswerIndex": 2,
        "explanation": "No court fees are payable in Lok Adalat proceedings. If court fees were already paid in a pending court case referred to Lok Adalat, the amount is refunded."
    },
    {
        "id": "ch38-l1-q7",
        "question": "Permanent Lok Adalats for public utility services were established by:",
        "options": ["Legal Services Authorities Act, 1987 (original)", "Legal Services Authorities (Amendment) Act, 2002", "Consumer Protection Act, 2019", "42nd Constitutional Amendment"],
        "correctAnswerIndex": 1,
        "explanation": "Permanent Lok Adalats for public utility services were established by the Legal Services Authorities (Amendment) Act, 2002, inserting Sections 22A to 22E into the LSAA."
    },
    {
        "id": "ch38-l1-q8",
        "question": "Permanent Lok Adalats can deal with cases relating to 'public utility services' which include:",
        "options": ["Only transport services", "Transport, postal, telegraph, power, insurance, and such other services as notified by the Government", "Only banking services", "Only electricity disputes"],
        "correctAnswerIndex": 1,
        "explanation": "Public utility services include transport, postal, telegraph/telephone, supply of power/light/water, insurance, and any other service notified by the Central or State Government."
    },
    {
        "id": "ch38-l1-q9",
        "question": "A key difference between a regular Lok Adalat and a Permanent Lok Adalat is:",
        "options": ["Both can decide cases on merit if settlement fails", "A Permanent Lok Adalat can decide cases on merit if conciliation fails (up to Rs. 1 crore), whereas a regular Lok Adalat cannot impose a decision without consent", "Regular Lok Adalats have higher jurisdiction", "They are identical in every respect"],
        "correctAnswerIndex": 1,
        "explanation": "Unlike regular Lok Adalats which require consent of both parties, Permanent Lok Adalats can adjudicate cases on merit if conciliation fails, for disputes up to Rs. 1 crore involving public utility services."
    },
    {
        "id": "ch38-l1-q10",
        "question": "A Lok Adalat is organized by:",
        "options": ["The Supreme Court alone", "The Legal Services Authority (National, State, District, or Taluk level)", "The Home Ministry", "The Law Commission"],
        "correctAnswerIndex": 1,
        "explanation": "Lok Adalats are organized at various levels by the respective Legal Services Authority — NALSA, State Legal Services Authority, District LSA, or Taluk LSA."
    },
    {
        "id": "ch38-l1-q11",
        "question": "The State Legal Services Authority is headed by:",
        "options": ["The Governor of the State", "The Chief Justice of the High Court as Patron-in-Chief", "The Chief Minister", "The Advocate General"],
        "correctAnswerIndex": 1,
        "explanation": "The Chief Justice of the High Court is the Patron-in-Chief of the State Legal Services Authority. A sitting or retired HC Judge serves as Executive Chairman."
    },
    {
        "id": "ch38-l1-q12",
        "question": "The District Legal Services Authority is headed by:",
        "options": ["The District Collector", "The District Judge as Chairman", "The Superintendent of Police", "The Chief Judicial Magistrate"],
        "correctAnswerIndex": 1,
        "explanation": "The District Judge is the Chairman of the District Legal Services Authority, responsible for organizing Lok Adalats and implementing legal aid programs at the district level."
    },
    {
        "id": "ch38-l1-q13",
        "question": "Cases that can be taken up in a Lok Adalat include:",
        "options": ["Only criminal cases", "Only pending cases from courts", "Both pending cases referred by courts and pre-litigation disputes (cases not yet filed in any court)", "Only family disputes"],
        "correctAnswerIndex": 2,
        "explanation": "Lok Adalats can take up both: (1) cases pending before any court and referred to the Lok Adalat, and (2) pre-litigation matters (disputes not yet filed in court) directly."
    },
    {
        "id": "ch38-l1-q14",
        "question": "Who are eligible for free legal services under the LSAA, 1987?",
        "options": ["Only women", "SC/ST members, women, children, persons with disabilities, industrial workmen, victims of mass disaster/trafficking, persons in custody, persons with annual income below prescribed limits", "Only senior citizens", "Everyone regardless of income"],
        "correctAnswerIndex": 1,
        "explanation": "Section 12 of LSAA lists eligible categories: SC/ST, women, children, mentally ill/disabled, industrial workmen, disaster victims, trafficking victims, persons in custody, and those below the income ceiling."
    },
    {
        "id": "ch38-l1-q15",
        "question": "The Taluk Legal Services Committee is headed by:",
        "options": ["The District Judge", "A Senior Civil Judge operating at the Taluk level", "The Tehsildar", "The Block Development Officer"],
        "correctAnswerIndex": 1,
        "explanation": "The Senior Civil Judge at the Taluk level is the ex-officio Chairman of the Taluk Legal Services Committee."
    },
    {
        "id": "ch38-l1-q16",
        "question": "National Lok Adalat days are organized:",
        "options": ["Every day", "On specific dates fixed by NALSA, typically held simultaneously across the country", "Only on national holidays", "Once every 5 years"],
        "correctAnswerIndex": 1,
        "explanation": "NALSA organizes National Lok Adalats on specific dates — typically monthly or bi-monthly — held simultaneously across all districts in the country to dispose of a large number of cases."
    },
    {
        "id": "ch38-l1-q17",
        "question": "A Lok Adalat bench typically consists of:",
        "options": ["Only lawyers", "A sitting or retired judicial officer and other persons as specified", "Only police officers", "Only government officials"],
        "correctAnswerIndex": 1,
        "explanation": "A Lok Adalat bench typically includes a sitting or retired judicial officer as Chairman, along with a lawyer and a social worker or other person as specified."
    },
    {
        "id": "ch38-l1-q18",
        "question": "If a Lok Adalat fails to arrive at a compromise or settlement, the case is:",
        "options": ["Permanently dismissed", "Returned to the referring court for further proceedings from the stage at which it was referred", "Automatically appealed to the High Court", "Decided by the Lok Adalat on merit"],
        "correctAnswerIndex": 1,
        "explanation": "Under Section 20(5), if no settlement is reached, the case is returned to the referring court. The regular Lok Adalat cannot impose a decision without the consent of both parties."
    },
    {
        "id": "ch38-l1-q19",
        "question": "The legal aid movement in India was significantly boosted by which Supreme Court judgment that interpreted Article 21 to include the right to free legal aid?",
        "options": ["Kesavananda Bharati v. State of Kerala (1973)", "Hussainara Khatoon v. Home Secretary, State of Bihar (1979)", "Maneka Gandhi v. Union of India (1978)", "S.R. Bommai v. Union of India (1994)"],
        "correctAnswerIndex": 1,
        "explanation": "In Hussainara Khatoon (1979), Justice P.N. Bhagwati held that the right to free legal aid for accused who cannot afford a lawyer is part of the right to a fair trial under Article 21."
    },
    {
        "id": "ch38-l1-q20",
        "question": "Motor Accident Claims Tribunals (MACTs) are established under:",
        "options": ["Motor Vehicles Act, 1988", "Legal Services Authorities Act, 1987", "Code of Civil Procedure, 1908", "Consumer Protection Act, 2019"],
        "correctAnswerIndex": 0,
        "explanation": "MACTs are established under Section 165 of the Motor Vehicles Act, 1988 to adjudicate claims for compensation arising from motor vehicle accidents."
    },
    {
        "id": "ch38-l1-q21",
        "question": "Labour Courts in India are established under:",
        "options": ["The Constitution of India directly", "Industrial Disputes Act, 1947", "Indian Labour Code, 2020", "Factories Act, 1948"],
        "correctAnswerIndex": 1,
        "explanation": "Labour Courts are established under Section 7 of the Industrial Disputes Act, 1947 to adjudicate disputes relating to matters specified in the Second Schedule of the Act."
    },
    {
        "id": "ch38-l1-q22",
        "question": "Industrial Tribunals are different from Labour Courts in that they:",
        "options": ["Handle exactly the same matters as Labour Courts", "Handle matters in the Third Schedule (e.g., wages, hours of work, leave with wages, bonus) which are of greater significance than Labour Court matters", "Only handle consumer disputes", "Are international bodies"],
        "correctAnswerIndex": 1,
        "explanation": "Industrial Tribunals handle Third Schedule matters (wages, hours, bonus, retrenchment, closure) which are typically of greater industrial significance than Second Schedule matters handled by Labour Courts."
    },
    {
        "id": "ch38-l1-q23",
        "question": "The Income Tax Appellate Tribunal (ITAT) is governed by:",
        "options": ["Income Tax Act, 1961", "Companies Act, 2013", "SEBI Act, 1992", "Customs Act, 1962"],
        "correctAnswerIndex": 0,
        "explanation": "ITAT is established under Section 252 of the Income Tax Act, 1961. It is second appellate authority hearing appeals against orders of the Commissioner of Income Tax (Appeals)."
    },
    {
        "id": "ch38-l1-q24",
        "question": "The National Green Tribunal (NGT) was established under:",
        "options": ["Environment Protection Act, 1986", "National Green Tribunal Act, 2010", "Forest Conservation Act, 1980", "Wildlife Protection Act, 1972"],
        "correctAnswerIndex": 1,
        "explanation": "The NGT was established under the National Green Tribunal Act, 2010 for effective and expeditious disposal of cases relating to environmental protection and conservation of forests."
    },
    {
        "id": "ch38-l1-q25",
        "question": "The Central Administrative Tribunal (CAT) was established under:",
        "options": ["Administrative Tribunals Act, 1985", "LSAA, 1987", "Article 323A of the Constitution", "Both A and C"],
        "correctAnswerIndex": 3,
        "explanation": "CAT was established under the Administrative Tribunals Act, 1985 which was enacted pursuant to Article 323A of the Constitution (added by 42nd Amendment) for adjudication of disputes relating to service matters of public servants."
    },
    {
        "id": "ch38-l1-q26",
        "question": "The Armed Forces Tribunal (AFT) was established under:",
        "options": ["Army Act, 1950", "Armed Forces Tribunal Act, 2007", "National Security Act, 1980", "Air Force Act, 1950"],
        "correctAnswerIndex": 1,
        "explanation": "AFT was established under the Armed Forces Tribunal Act, 2007 to adjudicate complaints and disputes regarding service matters and appeals against court martial sentences."
    },
    {
        "id": "ch38-l1-q27",
        "question": "The Debt Recovery Tribunal (DRT) was established under:",
        "options": ["Recovery of Debts Due to Banks and Financial Institutions Act, 1993 (RDDBFI Act)", "SARFAESI Act, 2002", "Banking Regulation Act, 1949", "RBI Act, 1934"],
        "correctAnswerIndex": 0,
        "explanation": "DRTs were established under the RDDBFI Act, 1993 for expeditious adjudication and recovery of debts due to banks and financial institutions."
    },
    {
        "id": "ch38-l1-q28",
        "question": "The primary goal of a Lok Adalat is:",
        "options": ["To punish offenders", "To arrive at an amicable settlement between parties through conciliation and compromise", "To collect court fees", "To review High Court judgments"],
        "correctAnswerIndex": 1,
        "explanation": "The fundamental objective of Lok Adalats is to settle disputes amicably through conciliation, compromise, and mutual agreement, reducing the burden on regular courts."
    },
    {
        "id": "ch38-l1-q29",
        "question": "Appeals from the orders of the Income Tax Appellate Tribunal lie to:",
        "options": ["The Supreme Court only", "The High Court on a substantial question of law", "The Commissioner of Income Tax", "No appeal is available"],
        "correctAnswerIndex": 1,
        "explanation": "Appeals from ITAT lie to the High Court under Section 260A of the Income Tax Act on a substantial question of law."
    },
    {
        "id": "ch38-l1-q30",
        "question": "Lok Adalats can deal with which types of cases?",
        "options": ["Only civil cases", "Only criminal compoundable cases", "Both civil and criminal (compoundable) cases, including matrimonial, labour, and motor accident claims", "Only commercial disputes above Rs. 1 crore"],
        "correctAnswerIndex": 2,
        "explanation": "Lok Adalats deal with a wide range of cases — civil disputes, compoundable criminal cases, matrimonial disputes, motor accident claims, labour disputes, and other matters referred to them."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch38-l2-q1",
        "question": "Consider the following statements about Lok Adalats:\\n1. Awards of regular Lok Adalats are not appealable.\\n2. Awards of Permanent Lok Adalats are not appealable.\\n3. Regular Lok Adalats can decide cases on merit without consent of parties.\\nWhich of the above is/are correct?",
        "options": ["1 and 2 only", "1 only", "1, 2 and 3", "2 and 3 only"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct — awards of both regular and Permanent Lok Adalats are final and non-appealable. Statement 3 is incorrect — regular Lok Adalats cannot decide without consent; only Permanent Lok Adalats can for public utility disputes."
    },
    {
        "id": "ch38-l2-q2",
        "question": "Assertion (A): Lok Adalats are not courts in the traditional sense.\\nReason (R): They function as conciliatory forums where the emphasis is on arriving at a settlement through compromise, not adversarial adjudication.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct and R explains A. Lok Adalats use conciliation and compromise methodology, not adversarial proceedings. They lack the power to summon witnesses or impose decisions (in regular Lok Adalats)."
    },
    {
        "id": "ch38-l2-q3",
        "question": "Match the following tribunals with their governing legislation:\\nA. Central Administrative Tribunal → 1. NGT Act, 2010\\nB. National Green Tribunal → 2. Armed Forces Tribunal Act, 2007\\nC. Armed Forces Tribunal → 3. Administrative Tribunals Act, 1985\\nD. Debt Recovery Tribunal → 4. RDDBFI Act, 1993\\nSelect the correct answer:",
        "options": ["A-3, B-1, C-2, D-4", "A-1, B-3, C-4, D-2", "A-2, B-4, C-1, D-3", "A-4, B-2, C-3, D-1"],
        "correctAnswerIndex": 0,
        "explanation": "CAT → Administrative Tribunals Act (3); NGT → NGT Act (1); AFT → AFT Act (2); DRT → RDDBFI Act (4)."
    },
    {
        "id": "ch38-l2-q4",
        "question": "Under LSAA, the Legal Services Authorities are established at how many levels?",
        "options": ["Two levels — National and State only", "Three levels — National, State, and District", "Four levels — National, State, District, and Taluk", "Five levels — National, State, District, Taluk, and Village"],
        "correctAnswerIndex": 2,
        "explanation": "Legal Services Authorities exist at four levels: NALSA (National), SLSA (State), DLSA (District), and Taluk Legal Services Committee."
    },
    {
        "id": "ch38-l2-q5",
        "question": "Which of the following correctly describes the constitutional basis for tribunals in India?\\n1. Article 323A — Administrative Tribunals (added by 42nd Amendment)\\n2. Article 323B — Tribunals for other matters (added by 42nd Amendment)\\n3. Article 136 — Supreme Court's appellate jurisdiction over tribunals\\nSelect the correct answer:",
        "options": ["1 and 2 only", "1, 2 and 3", "1 only", "3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All three are relevant: 323A for admin tribunals, 323B for other tribunals, and 136 gives the SC appellate power (by special leave) over tribunal orders."
    },
    {
        "id": "ch38-l2-q6",
        "question": "In L. Chandra Kumar v. Union of India (1997), the Supreme Court held regarding tribunals that:",
        "options": ["Tribunals are superior to High Courts", "The jurisdiction of High Courts under Articles 226/227 cannot be ousted by tribunals — High Court jurisdiction over tribunals is part of the basic structure", "All tribunals were declared unconstitutional", "Lok Adalats should replace all tribunals"],
        "correctAnswerIndex": 1,
        "explanation": "This landmark 7-judge bench ruling held that HC jurisdiction under Articles 226/227 over tribunals is part of the basic structure and cannot be excluded. All tribunal orders remain subject to HC/SC judicial review."
    },
    {
        "id": "ch38-l2-q7",
        "question": "Consider the following about the National Green Tribunal (NGT):\\n1. It has original jurisdiction to hear environmental disputes.\\n2. It has appellate jurisdiction over orders of authorities under environmental laws.\\n3. It follows the principles of natural justice and is not bound by CPC.\\n4. Appeals from NGT lie to the Supreme Court.\\nWhich of the above is/are correct?",
        "options": ["1 and 4 only", "1, 2 and 3 only", "1, 2, 3 and 4", "3 and 4 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four are correct. NGT exercises both original and appellate jurisdiction, follows principles of natural justice, and appeals from NGT lie directly to the Supreme Court."
    },
    {
        "id": "ch38-l2-q8",
        "question": "The Permanent Lok Adalat for public utility services can exercise jurisdiction up to a pecuniary value of:",
        "options": ["Rs. 10 lakh", "Rs. 50 lakh", "Rs. 1 crore", "Rs. 10 crore"],
        "correctAnswerIndex": 2,
        "explanation": "Permanent Lok Adalats under Section 22C have jurisdiction over disputes relating to public utility services where the value does not exceed Rs. 1 crore."
    },
    {
        "id": "ch38-l2-q9",
        "question": "The principle governing refund of court fees in Lok Adalat is:",
        "options": ["No court fees are ever refunded", "If a pending court case is settled in a Lok Adalat, the court fees already paid are refunded to the parties", "Additional court fees must be paid in Lok Adalat", "Fees are refunded only if the case is dismissed"],
        "correctAnswerIndex": 1,
        "explanation": "Under Section 21(2), where a case pending before a court is referred to and settled by a Lok Adalat, the court shall refund the court fees paid by the parties."
    },
    {
        "id": "ch38-l2-q10",
        "question": "Which of the following types of criminal cases CANNOT be heard by a Lok Adalat?",
        "options": ["Compoundable offences under Section 320 CrPC", "Minor traffic challans", "Non-compoundable offences like murder, robbery, or dacoity", "Cheque bouncing cases under Section 138 NI Act"],
        "correctAnswerIndex": 2,
        "explanation": "Lok Adalats can only deal with compoundable criminal offences. Non-compoundable offences (murder, robbery, dacoity, etc.) cannot be settled through Lok Adalats."
    },
    {
        "id": "ch38-l2-q11",
        "question": "In the context of Alternative Dispute Resolution (ADR) in India, arrange the following mechanisms from least to most formal:\\n1. Negotiation\\n2. Mediation\\n3. Conciliation (Lok Adalat)\\n4. Arbitration\\n5. Regular Court Adjudication",
        "options": ["1 → 2 → 3 → 4 → 5", "5 → 4 → 3 → 2 → 1", "2 → 1 → 3 → 5 → 4", "3 → 4 → 1 → 2 → 5"],
        "correctAnswerIndex": 0,
        "explanation": "From least to most formal: Negotiation (direct party discussion) → Mediation (third party facilitates) → Conciliation/Lok Adalat (structured settlement forum) → Arbitration (binding decision by arbitrator) → Court adjudication."
    },
    {
        "id": "ch38-l2-q12",
        "question": "The Motor Accident Claims Tribunal (MACT) applies the principle of:",
        "options": ["Strict contractual liability only", "'No fault liability' under Section 166 of the Motor Vehicles Act for compensation claims arising from motor vehicle accidents", "Only criminal prosecution", "No compensation in any case"],
        "correctAnswerIndex": 1,
        "explanation": "MACT applies the 'no fault liability' principle — compensation can be claimed regardless of who was at fault in the accident, ensuring victims receive relief."
    },
    {
        "id": "ch38-l2-q13",
        "question": "Assertion (A): Lok Adalats have significantly contributed to reducing the pendency of cases in India.\\nReason (R): National Lok Adalats held across the country on designated days settle lakhs of cases in a single day through compromise.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. National Lok Adalats have settled over 5 crore cases cumulatively, significantly contributing to reducing the burden on regular courts."
    },
    {
        "id": "ch38-l2-q14",
        "question": "Under the Arbitration and Conciliation Act, 1996, the main difference between arbitration and conciliation is:",
        "options": ["Both result in non-binding outcomes", "Arbitration results in a binding award; conciliation results in a settlement agreement binding only if accepted by both parties", "Conciliation is more formal than arbitration", "There is no difference between them"],
        "correctAnswerIndex": 1,
        "explanation": "Arbitration produces a binding award enforceable as a decree. Conciliation aims at settlement through mutual agreement — it becomes binding only when both parties accept the settlement."
    },
    {
        "id": "ch38-l2-q15",
        "question": "Section 89 of the Code of Civil Procedure (CPC) provides for:",
        "options": ["Filing of suits directly in the Supreme Court", "Settlement of disputes outside the court — the court may refer cases to arbitration, conciliation, Lok Adalat, or mediation", "Appointment of government pleaders", "Execution of decrees only"],
        "correctAnswerIndex": 1,
        "explanation": "Section 89 CPC mandates courts to explore settlement possibilities and refer suitable cases to ADR mechanisms — arbitration, conciliation, Lok Adalat, or judicial settlement/mediation."
    },
    {
        "id": "ch38-l2-q16",
        "question": "The Income Tax Appellate Tribunal (ITAT) is often called the 'Mother Tribunal' because:",
        "options": ["It was the first tribunal to be established in India", "It is the oldest and was established in 1941, serving as a model for subsequent tribunals", "It handles the highest number of cases", "It has members from all other tribunals"],
        "correctAnswerIndex": 1,
        "explanation": "ITAT, established in 1941, is the oldest tribunal in India. It served as the template for the establishment of subsequent specialized tribunals in the country."
    },
    {
        "id": "ch38-l2-q17",
        "question": "Under the NGT Act, the Tribunal must dispose of applications or appeals within:",
        "options": ["1 year from filing", "3 months from filing", "6 months from the date of filing", "No time limit is prescribed"],
        "correctAnswerIndex": 2,
        "explanation": "Section 18(3) of the NGT Act mandates that the Tribunal shall endeavour to dispose of applications or appeals within 6 months of filing."
    },
    {
        "id": "ch38-l2-q18",
        "question": "Which of the following statements about CAT is/are correct?\\n1. CAT has the jurisdiction to hear service matters of Central Government employees.\\n2. It also handles service disputes of State Government employees in states that have adopted the scheme.\\n3. CAT's decisions are subject to judicial review by the High Court.\\nSelect the correct answer:",
        "options": ["1 only", "1 and 3 only", "1, 2 and 3", "2 and 3 only"],
        "correctAnswerIndex": 2,
        "explanation": "All three are correct. CAT handles Central Government service matters, and states can opt in for State Government employees too. After L. Chandra Kumar, CAT orders are subject to HC review."
    },
    {
        "id": "ch38-l2-q19",
        "question": "Free legal aid under Section 12 of LSAA is available to persons whose annual income does not exceed:",
        "options": ["Rs. 50,000", "Rs. 1 lakh", "Such amount as may be prescribed by the State Government (typically Rs. 1 to 3 lakh depending on the state, and Rs. 5 lakh for Supreme Court Legal Services Committee)", "Rs. 10 lakh"],
        "correctAnswerIndex": 2,
        "explanation": "The income ceiling varies by state notification. For the Supreme Court Legal Services Committee, the ceiling is Rs. 5 lakh per annum. States fix their own limits."
    },
    {
        "id": "ch38-l2-q20",
        "question": "The Lok Adalat movement in India was pioneered by:",
        "options": ["Dr. B.R. Ambedkar", "Justice P.N. Bhagwati", "Mahatma Gandhi", "Jawaharlal Nehru"],
        "correctAnswerIndex": 1,
        "explanation": "Justice P.N. Bhagwati, as Chief Justice of India, was instrumental in pioneering the Lok Adalat movement in the early 1980s as part of the broader legal aid and access to justice initiative."
    },
    {
        "id": "ch38-l2-q21",
        "question": "The Tribunals Reforms Act, 2021 brought several changes to tribunal functioning. Which of the following is a key provision?",
        "options": ["It created 50 new tribunals", "It prescribed uniform conditions for appointment (including minimum age of 50 years for Judicial/Administrative members) and a 4-year term for members", "It abolished all existing tribunals", "It merged all tribunals into one National Tribunal"],
        "correctAnswerIndex": 1,
        "explanation": "The 2021 Act prescribed uniform conditions including a 4-year term, minimum age of 50, and retirement age of 65 (67 for Chairperson) for tribunal members."
    },
    {
        "id": "ch38-l2-q22",
        "question": "Lok Adalats have been most successful in disposing of which types of cases?",
        "options": ["Complex constitutional law matters", "Motor accident claims, matrimonial disputes, labour disputes, dishonoured cheque cases, and utility service complaints", "International trade disputes", "Murder and robbery cases"],
        "correctAnswerIndex": 1,
        "explanation": "Lok Adalats have been most effective in settling motor accident claims, matrimonial disputes, labour matters, Section 138 NI Act cases, and public utility service complaints."
    },
    {
        "id": "ch38-l2-q23",
        "question": "The National Company Law Tribunal (NCLT) was established under:",
        "options": ["Companies Act, 2013", "Companies Act, 1956", "Insolvency and Bankruptcy Code, 2016", "Partnership Act, 1932"],
        "correctAnswerIndex": 0,
        "explanation": "NCLT was constituted under the Companies Act, 2013 to adjudicate corporate disputes. It also handles insolvency matters under the Insolvency and Bankruptcy Code, 2016."
    },
    {
        "id": "ch38-l2-q24",
        "question": "Which of the following ADR mechanisms is recognized by the Constitution of India?",
        "options": ["Arbitration under Arbitration Act, 1996", "Lok Adalat under LSAA, 1987 which derives its mandate from Article 39A", "Online Dispute Resolution", "Commercial mediation only"],
        "correctAnswerIndex": 1,
        "explanation": "Lok Adalats derive their constitutional mandate from Article 39A (equal justice and free legal aid). Other ADR mechanisms are purely statutory, not constitutionally mandated."
    },
    {
        "id": "ch38-l2-q25",
        "question": "The Mediation Act, 2023 impacts the ADR landscape in India by:",
        "options": ["Replacing Lok Adalats entirely", "Providing a comprehensive statutory framework for mediation, recognizing pre-litigation mediation, and establishing the Mediation Council of India", "Abolishing arbitration", "Making all ADR mechanisms compulsory"],
        "correctAnswerIndex": 1,
        "explanation": "The Mediation Act, 2023 provides statutory recognition to mediation, encourages pre-litigation mediation for commercial and civil disputes, and establishes the Mediation Council of India for regulation."
    },
    {
        "id": "ch38-l2-q26",
        "question": "The Railway Claims Tribunal was established under:",
        "options": ["Indian Railways Act, 1890", "Railway Claims Tribunal Act, 1987", "Railways Act, 1989", "Consumer Protection Act, 1986"],
        "correctAnswerIndex": 1,
        "explanation": "The Railway Claims Tribunal was established under the Railway Claims Tribunal Act, 1987 to adjudicate claims for compensation for loss, destruction, damage, deterioration, or non-delivery of goods transported by rail."
    },
    {
        "id": "ch38-l2-q27",
        "question": "Under Section 22B of LSAA, a Permanent Lok Adalat shall consist of:",
        "options": ["Only retired judges", "A Chairman who is or has been a District Judge or Additional District Judge, and two other persons having adequate experience", "Only lawyers", "Only social workers"],
        "correctAnswerIndex": 1,
        "explanation": "Section 22B provides that a Permanent Lok Adalat shall consist of a person who is or has been a District Judge or Additional District Judge as Chairman, along with two other experienced persons."
    },
    {
        "id": "ch38-l2-q28",
        "question": "Evening Courts and Morning Courts are organized primarily to:",
        "options": ["Handle only VIP cases", "Provide access to justice at convenient timings for working people and help reduce pendency of petty cases", "Replace regular courts", "Handle only traffic violation cases"],
        "correctAnswerIndex": 1,
        "explanation": "Evening/Morning Courts operate during non-regular hours to provide access to justice for working people and expedite disposal of petty offences and small civil disputes."
    },
    {
        "id": "ch38-l2-q29",
        "question": "The appeal hierarchy for Armed Forces Tribunal orders is:",
        "options": ["Appeal to High Court", "Direct appeal to the Supreme Court under Section 31 of the AFT Act", "Appeal to the Law Ministry", "No appeal is possible"],
        "correctAnswerIndex": 1,
        "explanation": "Appeals from AFT orders lie directly to the Supreme Court under Section 31 of the AFT Act, not to High Courts."
    },
    {
        "id": "ch38-l2-q30",
        "question": "Which of the following is NOT a benefit of the Lok Adalat system?",
        "options": ["No court fees payable", "Awards are final and non-appealable, providing quick closure", "Parties can be represented by lawyers", "Lok Adalats can award imprisonment for non-compliance"],
        "correctAnswerIndex": 3,
        "explanation": "Lok Adalats cannot award imprisonment — they focus on civil remedies and compromise settlements. They cannot impose criminal sentences."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch38-l3-q1",
        "question": "Consider the following statements about the evolution of ADR in India:\\n1. Article 39A provides the constitutional mandate for free legal aid.\\n2. The Committee for Implementing Legal Aid Schemes (CILAS) was headed by Justice P.N. Bhagwati.\\n3. The LSAA was enacted in 1987 but came into force only in 1995.\\n4. The first organized Lok Adalat was held in Gujarat in 1982.\\nWhich of the above are correct?",
        "options": ["1, 2 and 3 only", "1, 3 and 4 only", "1, 2, 3 and 4", "2 and 4 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four are correct. Article 39A (1976), CILAS under Justice Bhagwati, LSAA enacted 1987/enforced 1995, and the first organized Lok Adalat in Gujarat (1982) trace the complete evolution."
    },
    {
        "id": "ch38-l3-q2",
        "question": "In L. Chandra Kumar v. Union of India (1997), the 7-judge Constitution Bench held regarding tribunals:\\n1. Tribunals can serve as supplementary to but not substitutes for High Courts.\\n2. Articles 226/227 jurisdiction of High Courts over tribunals is part of the basic structure.\\n3. Section 28 of the Administrative Tribunals Act (barring HC jurisdiction) was struck down.\\nWhich of the above are correct?",
        "options": ["1 and 2 only", "2 and 3 only", "1, 2 and 3", "1 only"],
        "correctAnswerIndex": 2,
        "explanation": "All three are correct. The SC held tribunals supplement but cannot substitute HCs, HC jurisdiction is basic structure, and provisions barring HC jurisdiction were unconstitutional."
    },
    {
        "id": "ch38-l3-q3",
        "question": "Assertion (A): The Lok Adalat system embodies the principle of 'access to justice' which is recognized as a fundamental right under Article 21.\\nReason (R): The Supreme Court in Hussainara Khatoon (1979) and subsequent cases held that the right to access justice, including free legal aid and speedy trial, is integral to Article 21.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. The SC's interpretation of Article 21 to include access to justice, free legal aid, and speedy trial provides the constitutional foundation for the Lok Adalat system."
    },
    {
        "id": "ch38-l3-q4",
        "question": "Statement I: Under Section 22C(8), if the Permanent Lok Adalat is not able to settle the dispute by conciliation, it shall decide the dispute on merits.\\nStatement II: This power to adjudicate (decide on merits) is unique to Permanent Lok Adalats and does not exist in regular Lok Adalats.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both statements are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both are correct. This adjudicatory power (deciding on merits if conciliation fails) is what fundamentally distinguishes Permanent Lok Adalats from regular Lok Adalats."
    },
    {
        "id": "ch38-l3-q5",
        "question": "Consider the following about NALSA's structure:\\n1. Patron-in-Chief — Chief Justice of India\\n2. Executive Chairman — Sitting or retired SC Judge nominated by President in consultation with CJI\\n3. NALSA functions under the administrative control of the Law Ministry\\nWhich of the above is/are correct?",
        "options": ["1 and 2 only", "1, 2 and 3", "1 only", "All three are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect — while the Ministry of Law provides financial support, NALSA functions independently under the aegis of the Supreme Court, not under the Law Ministry's administrative control."
    },
    {
        "id": "ch38-l3-q6",
        "question": "In Madras Bar Association v. Union of India (2014), the Supreme Court examined the constitutional validity of the National Tax Tribunal. What was the key finding?",
        "options": ["The National Tax Tribunal was upheld as fully constitutional", "The SC struck down the NTT Act 2005 as unconstitutional because replacing High Courts with a tribunal for tax appeals violated the basic structure (independence of judiciary)", "The SC recommended creating more tax tribunals", "The SC merged the NTT with ITAT"],
        "correctAnswerIndex": 1,
        "explanation": "The SC struck down the NTT Act finding that completely substituting HC jurisdiction over tax matters with a tribunal would violate judicial independence, which is part of the basic structure."
    },
    {
        "id": "ch38-l3-q7",
        "question": "The Tribunals Reforms Act, 2021 was partially struck down by the Supreme Court in a case challenging its provisions. The key concern was:",
        "options": ["Too many tribunals were being created", "The provisions regarding tenure (4 years), minimum age requirements, and search-cum-selection committee composition undermined the independence of tribunals", "The Act gave too much power to tribunals", "The Act abolished too many tribunals"],
        "correctAnswerIndex": 1,
        "explanation": "In Madras Bar Association v. Union of India (2021), the SC struck down several provisions of the Tribunals Reforms Act, holding that the short tenure, age requirements, and government-heavy selection committees undermined judicial independence."
    },
    {
        "id": "ch38-l3-q8",
        "question": "Consider the following comparison between CAT and regular courts:\\n1. CAT follows simplified procedures — not strictly bound by CPC\\n2. CAT exercises both original and appellate jurisdiction in service matters\\n3. CAT's orders are final with no further judicial review possible\\nWhich of the above is/are correct?",
        "options": ["1 only", "1 and 2 only", "1, 2 and 3", "All three are incorrect"],
        "correctAnswerIndex": 1,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect — after L. Chandra Kumar (1997), CAT orders are subject to judicial review by the High Court under Articles 226/227."
    },
    {
        "id": "ch38-l3-q9",
        "question": "The NGT applies several environmental law principles. Which of the following principles does the NGT explicitly apply?\\n1. Precautionary principle\\n2. Polluter pays principle\\n3. Sustainable development principle\\n4. Public trust doctrine\\nSelect the correct answer:",
        "options": ["1 and 2 only", "1, 2 and 3 only", "1, 2, 3 and 4", "4 only"],
        "correctAnswerIndex": 2,
        "explanation": "Section 20 of the NGT Act mandates the Tribunal to apply the precautionary principle, polluter pays principle, and sustainable development. The public trust doctrine has also been invoked by NGT in environmental cases."
    },
    {
        "id": "ch38-l3-q10",
        "question": "Assertion (A): India has multiple specialized tribunals handling different subjects.\\nReason (R): The proliferation of tribunals is based on the rationale that specialized bodies with domain expertise can provide speedier, expert, and more efficient justice than overburdened regular courts.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. Tribunals like NGT (environment), CAT (service matters), ITAT (tax), and NCLT (company law) bring domain expertise and reduce burden on regular courts."
    },
    {
        "id": "ch38-l3-q11",
        "question": "NALSA v. Union of India (2014) is a landmark case in the context of legal services because:",
        "options": ["It abolished Lok Adalats", "The Supreme Court recognized transgender persons as the 'third gender' and directed the government to provide them legal protection, social welfare, and equal constitutional rights", "It increased court fees for all cases", "It merged all legal services authorities"],
        "correctAnswerIndex": 1,
        "explanation": "The NALSA judgment was a landmark in human rights jurisprudence, recognizing transgender rights and directing state action, demonstrating NALSA's broader role in justice and rights advocacy."
    },
    {
        "id": "ch38-l3-q12",
        "question": "Consider the following chronological sequence of tribunal establishment:\\n1. Income Tax Appellate Tribunal (ITAT)\\n2. Central Administrative Tribunal (CAT)\\n3. National Green Tribunal (NGT)\\n4. National Company Law Tribunal (NCLT)\\nThe correct chronological sequence of establishment is:",
        "options": ["1 → 2 → 4 → 3", "2 → 1 → 3 → 4", "1 → 2 → 3 → 4", "2 → 3 → 1 → 4"],
        "correctAnswerIndex": 2,
        "explanation": "ITAT (1941) → CAT (1985) → NGT (2010) → NCLT (2016). ITAT is the oldest, followed by CAT, then NGT, and NCLT is among the newest."
    },
    {
        "id": "ch38-l3-q13",
        "question": "In the case of Union of India v. R. Gandhi (2010), regarding the NCLT, the Supreme Court held:",
        "options": ["NCLT was unconstitutional", "NCLT is constitutionally valid provided it has a majority of judicial members and is headed by a person who has been a High Court Judge, ensuring judicial independence", "NCLT should be abolished", "NCLT should be merged with CAT"],
        "correctAnswerIndex": 1,
        "explanation": "The SC upheld NCLT's constitutional validity with conditions — including judicial chairperson, majority of judicial members, and proper qualifications — to maintain judicial character and independence."
    },
    {
        "id": "ch38-l3-q14",
        "question": "The relationship between the Arbitration and Conciliation Act, 1996 and Lok Adalats is:",
        "options": ["They are completely unrelated mechanisms", "Both are ADR mechanisms but differ significantly: arbitration produces a binding award through a private adjudicator (arbitrator), while Lok Adalat achieves settlement through conciliation with a public forum", "Arbitration has replaced Lok Adalats", "Lok Adalats have replaced arbitration"],
        "correctAnswerIndex": 1,
        "explanation": "Both are ADR mechanisms but differ in nature: arbitration is a private, binding adjudication, while Lok Adalats are public conciliation forums. They serve different types of disputes and clientele."
    },
    {
        "id": "ch38-l3-q15",
        "question": "Statement I: The award of a Lok Adalat can be challenged through a writ petition under Article 226/227 of the Constitution.\\nStatement II: Section 21 of LSAA declares Lok Adalat awards as final with no appeal.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both statements are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both are correct and not contradictory. While Section 21 bars statutory appeals, writ jurisdiction of High Courts (under Articles 226/227) is a constitutional remedy that cannot be excluded by any statute."
    },
    {
        "id": "ch38-l3-q16",
        "question": "Assertion (A): The Finance Act, 2017 attempted to merge and abolish several tribunals.\\nReason (R): The Government argued that rationalization of tribunals would reduce duplication, save costs, and improve efficiency.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. The Finance Act 2017 merged several tribunals (e.g., COMPAT into NCLT) citing rationalization. However, parts were challenged and some provisions were modified."
    },
    {
        "id": "ch38-l3-q17",
        "question": "Consider the following challenges facing the tribunal system in India:\\n1. Lack of financial and administrative independence from the executive\\n2. Vacancies in tribunal positions remaining unfilled for long periods\\n3. Short tenure of members affecting functional independence\\n4. Inadequate infrastructure\\nWhich of the above are recognized challenges?",
        "options": ["1 and 2 only", "1, 2 and 3 only", "1, 2, 3 and 4", "3 and 4 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four are well-recognized challenges. The Supreme Court has repeatedly highlighted these issues in Madras Bar Association cases and other judgments, directing the government to address them."
    },
    {
        "id": "ch38-l3-q18",
        "question": "The concept of 'plea bargaining' under CrPC/BNSS and its relationship with Lok Adalats is:",
        "options": ["They are identical mechanisms", "Plea bargaining in criminal cases is a court-administered procedure where the accused pleads guilty for a lesser charge/sentence, while Lok Adalats achieve civil settlements through compromise — they address different aspects of dispute resolution", "Lok Adalats have replaced plea bargaining", "Plea bargaining only applies to civil cases"],
        "correctAnswerIndex": 1,
        "explanation": "They are distinct mechanisms: plea bargaining is a criminal procedure tool (for offences up to 7 years imprisonment); Lok Adalats primarily handle civil disputes and compoundable criminal offences through conciliation."
    },
    {
        "id": "ch38-l3-q19",
        "question": "In Rojer Mathew v. South Indian Bank Ltd. (2019), the Supreme Court held regarding the Tribunals Reforms (Rationalization and Conditions of Service) Ordinance that:",
        "options": ["All tribunals should be abolished", "The provisions relating to conditions of service (tenure, qualification) of tribunal members through the Finance Act 2017 were unconstitutional as 'money bill' classification was incorrect", "Tribunals should be merged with regular courts", "The ordinance was fully constitutional"],
        "correctAnswerIndex": 1,
        "explanation": "The SC held that provisions relating to tribunal composition and service conditions cannot be disguised as a money bill. It struck down parts of the Finance Act 2017 relating to tribunals."
    },
    {
        "id": "ch38-l3-q20",
        "question": "Which of the following represents the correct appellate hierarchy for different tribunals?\\n1. ITAT → High Court → Supreme Court\\n2. NGT → Supreme Court (directly)\\n3. CAT → High Court → Supreme Court\\n4. AFT → Supreme Court (directly)\\nSelect the correct answer:",
        "options": ["1, 2 and 3 only", "1, 3 and 4 only", "1, 2, 3 and 4", "2 and 4 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four are correct: ITAT → HC → SC (tax); NGT → SC (environment); CAT → HC → SC (service matters after L. Chandra Kumar); AFT → SC (armed forces)."
    },
    {
        "id": "ch38-l3-q21",
        "question": "Consider the following about the impact of Lok Adalats on access to justice:\\n1. They eliminate court fees, reducing financial barriers.\\n2. They are time-efficient — cases can be settled in a single sitting.\\n3. They follow simplified procedures without strict evidentiary rules.\\n4. They provide finality as awards are non-appealable.\\nWhich of the above contribute to enhanced access to justice?",
        "options": ["1 and 2 only", "1, 2 and 3 only", "1, 2, 3 and 4", "3 and 4 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four features — no court fees, time efficiency, simplified procedures, and finality of awards — collectively enhance access to justice, especially for marginalized and economically weaker sections."
    },
    {
        "id": "ch38-l3-q22",
        "question": "Statement I: The NCLT exercises both original jurisdiction (under Companies Act, 2013) and insolvency jurisdiction (under IBC, 2016).\\nStatement II: Appeals from NCLT go to the National Company Law Appellate Tribunal (NCLAT) and then to the Supreme Court.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both statements are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both are correct. NCLT handles both company disputes (Companies Act) and insolvency/bankruptcy matters (IBC). The appellate route is NCLT → NCLAT → Supreme Court."
    },
    {
        "id": "ch38-l3-q23",
        "question": "The Online Dispute Resolution (ODR) mechanism in India has been gaining traction. Which of the following has enabled this development?\\n1. NITI Aayog's push for ODR adoption\\n2. Supreme Court's directions during COVID-19 for virtual hearings\\n3. State Consumer Commissions adopting e-filing\\n4. The e-Lok Adalat initiative by NALSA\\nSelect the correct answer:",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "4 only", "2 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four have contributed to ODR development: NITI Aayog's advocacy, SC's COVID-era virtual hearing directions, e-filing adoption, and NALSA's e-Lok Adalat initiatives."
    },
    {
        "id": "ch38-l3-q24",
        "question": "In State of Punjab v. Jalour Singh (2008), the Supreme Court held regarding Lok Adalats:",
        "options": ["Lok Adalats can be organized anywhere without legal authority", "The award of a Lok Adalat is valid only when all parties to the dispute have given their consent; an award without consent is a nullity and can be challenged", "Lok Adalats can impose penalties", "Lok Adalats can override High Court orders"],
        "correctAnswerIndex": 1,
        "explanation": "The SC emphasized that the essence of a regular Lok Adalat settlement is mutual consent — if an award is passed without the free consent of all parties, it is void and can be set aside."
    },
    {
        "id": "ch38-l3-q25",
        "question": "Assertion (A): The proliferation of tribunals in India has been both welcomed and criticized.\\nReason (R): While tribunals provide specialized, expert, and quicker justice, concerns remain about their independence from the executive, inadequate infrastructure, and the quality of adjudication.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. The tension between the benefits (specialization, speed) and challenges (independence, quality) has been a recurring theme in SC judgments on tribunals."
    },
    {
        "id": "ch38-l3-q26",
        "question": "Article 323B of the Constitution provides for tribunals for the following matters EXCEPT:",
        "options": ["Levy and collection of taxes", "Disputes relating to service conditions of public servants", "Foreign exchange, import and export matters", "Acquisition and requisition of property"],
        "correctAnswerIndex": 1,
        "explanation": "Service matters of public servants are covered under Article 323A (administrative tribunals), NOT 323B. Article 323B covers taxes, foreign exchange, import/export, land reforms, food stuffs, rent, elections, etc."
    },
    {
        "id": "ch38-l3-q27",
        "question": "The concept of 'para-legal volunteers' in the legal services system refers to:",
        "options": ["Retired judges volunteering at courts", "Trained community volunteers who assist in legal literacy, connecting eligible persons with legal services, and supporting Lok Adalats at the grassroots level", "Government officials providing legal advice", "Foreign lawyers practicing in India"],
        "correctAnswerIndex": 1,
        "explanation": "Para-legal volunteers are trained community members who serve as a vital link between the legal services system and the community, especially in rural areas, facilitating access to justice."
    },
    {
        "id": "ch38-l3-q28",
        "question": "Consider the following statements about the powers of Permanent Lok Adalats vs regular Lok Adalats:\\n1. Regular Lok Adalats can only settle by compromise — they cannot decide on merits.\\n2. Permanent Lok Adalats can first attempt conciliation and then decide on merits if conciliation fails.\\n3. In both types, the award is final and non-appealable.\\n4. Regular Lok Adalats can hear any case regardless of value; Permanent Lok Adalats are limited to Rs. 1 crore.\\nWhich of the above are correct?",
        "options": ["1 and 2 only", "1, 2 and 3 only", "1, 2, 3 and 4", "1 and 3 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four are correct. Regular Lok Adalats are conciliation-only forums with no pecuniary limit. Permanent Lok Adalats have adjudicatory power but are limited to Rs. 1 crore for public utility services. Both produce non-appealable awards."
    },
    {
        "id": "ch38-l3-q29",
        "question": "The Gram Nyayalaya system under the Gram Nyayalayas Act, 2008 is different from Lok Adalats in that:",
        "options": ["They are identical in every respect", "Gram Nyayalayas are regular courts presided by a Nyayadhikari with powers to decide cases on merits and impose sentences (up to 1 year), while Lok Adalats are conciliation forums without sentencing power", "Lok Adalats have higher jurisdiction than Gram Nyayalayas", "Gram Nyayalayas can only handle civil cases"],
        "correctAnswerIndex": 1,
        "explanation": "Gram Nyayalayas are proper courts of record with judicial powers (including sentencing up to 1 year imprisonment), unlike Lok Adalats which are settlement/conciliation forums without the power to impose sentences."
    },
    {
        "id": "ch38-l3-q30",
        "question": "The Law Commission of India's 222nd Report (2009) recommended strengthening Access to Justice by:\\n1. Establishing Gram Nyayalayas in every panchayat.\\n2. Expanding Lok Adalats and making them more effective.\\n3. Increasing the number of judges in subordinate courts.\\n4. Using technology for case management and virtual courts.\\nWhich of the above were recommendations of the report?",
        "options": ["1 and 2 only", "1, 2 and 3 only", "1, 2, 3 and 4", "3 and 4 only"],
        "correctAnswerIndex": 2,
        "explanation": "The 222nd Report made comprehensive recommendations addressing all four aspects — Gram Nyayalayas, Lok Adalats, judge strength, and technology — as part of a holistic approach to improving access to justice."
    }
];

export const CHAPTER_38_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
