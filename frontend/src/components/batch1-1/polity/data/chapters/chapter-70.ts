import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch70-l1-q1",
        "question": "The Law Commission of India is:",
        "options": ["A constitutional body", "A statutory body", "A non-statutory body established by executive order of the Government of India", "A judicial body"],
        "correctAnswerIndex": 2,
        "explanation": "The Law Commission is a non-statutory (executive) body constituted by the Government of India by an order/resolution, not by an Act of Parliament or the Constitution."
    },
    {
        "id": "ch70-l1-q2",
        "question": "The first Law Commission of India was established in:",
        "options": ["1947", "1955, with M.C. Setalvad as Chairman", "1960", "1950"],
        "correctAnswerIndex": 1,
        "explanation": "The first Law Commission of independent India was established in 1955 under the chairmanship of M.C. Setalvad, the first Attorney General of India."
    },
    {
        "id": "ch70-l1-q3",
        "question": "During British rule, the first Law Commission was established by:",
        "options": ["Lord Cornwallis", "The Charter Act of 1833 under the chairmanship of Lord Macaulay", "Warren Hastings", "Lord Mountbatten"],
        "correctAnswerIndex": 1,
        "explanation": "The first Law Commission under British India was established by the Charter Act of 1833, chaired by Lord Macaulay, which led to the codification of the Indian Penal Code."
    },
    {
        "id": "ch70-l1-q4",
        "question": "The primary function of the Law Commission is to:",
        "options": ["Pass new laws", "Recommend reforms of law by researching, analyzing, and advising the government on legal reform", "Adjudicate disputes", "Appoint judges"],
        "correctAnswerIndex": 1,
        "explanation": "The Law Commission researches and advises the government on legal reform — its recommendations, while influential, are not binding."
    },
    {
        "id": "ch70-l1-q5",
        "question": "The Law Commission submits its reports to:",
        "options": ["The Supreme Court", "The Ministry of Law and Justice, Government of India", "The President directly", "The Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "The Law Commission submits its reports and recommendations to the Ministry of Law and Justice."
    },
    {
        "id": "ch70-l1-q6",
        "question": "The Law Commission is reconstituted every:",
        "options": ["Two years", "Three years", "Five years", "Ten years"],
        "correctAnswerIndex": 1,
        "explanation": "The Law Commission is typically reconstituted every three years with a fresh mandate and new or renewed membership."
    },
    {
        "id": "ch70-l1-q7",
        "question": "The Chairman of the Law Commission is usually:",
        "options": ["The Chief Justice of India", "A retired Supreme Court or High Court Judge, or an eminent jurist", "The Law Minister", "The Attorney General"],
        "correctAnswerIndex": 1,
        "explanation": "The Chairman is typically a retired Supreme Court or High Court Judge, or a distinguished jurist appointed by the government."
    },
    {
        "id": "ch70-l1-q8",
        "question": "Lord Macaulay's Law Commission is most famous for drafting:",
        "options": ["The Constitution of India", "The Indian Penal Code (IPC), 1860", "The Hindu Code Bill", "The Indian Evidence Act"],
        "correctAnswerIndex": 1,
        "explanation": "Macaulay's Commission drafted the Indian Penal Code (enacted in 1860), which remained India's criminal law until replaced by BNS in 2023."
    },
    {
        "id": "ch70-l1-q9",
        "question": "The recommendations of the Law Commission are:",
        "options": ["Legally binding on the government", "Advisory in nature — the government may or may not accept them", "Binding on courts", "Binding on Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "Law Commission recommendations are advisory. The government decides whether to accept, modify, or reject them."
    },
    {
        "id": "ch70-l1-q10",
        "question": "The Law Commission can consider legal reform:",
        "options": ["Only when directed by the government", "Both on reference from the government (suo motu by government) and on its own initiative (suo motu)", "Only on court orders", "Only through Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "The Law Commission can take up matters referred to it by the government or can suo motu examine legal issues requiring reform."
    },
    {
        "id": "ch70-l1-q11",
        "question": "The 22nd Law Commission (2020-2024) was chaired by:",
        "options": ["Justice B.S. Chauhan", "Justice (Retd.) Rituraj Awasthi", "M.C. Setalvad", "Justice A.P. Shah"],
        "correctAnswerIndex": 1,
        "explanation": "The 22nd Law Commission was chaired by Justice (Retd.) Rituraj Awasthi, former Chief Justice of Karnataka High Court."
    },
    {
        "id": "ch70-l1-q12",
        "question": "The Law Commission's 262nd Report dealt with:",
        "options": ["Uniform Civil Code", "Death Penalty — recommending abolition of death penalty except in terrorism-related cases", "Electoral reforms", "Family law reforms"],
        "correctAnswerIndex": 1,
        "explanation": "The 262nd Report (August 2015) recommended abolishing the death penalty except for terrorism-related offences and war-related crimes."
    },
    {
        "id": "ch70-l1-q13",
        "question": "The Indian Penal Code was replaced in 2023 by:",
        "options": ["Indian Criminal Code", "Bhartiya Nyaya Sanhita (BNS), 2023", "New Penal Code", "Criminal Justice Code"],
        "correctAnswerIndex": 1,
        "explanation": "The IPC (1860), originally drafted by Macaulay's Commission, was replaced by the Bhartiya Nyaya Sanhita (BNS) in 2023."
    },
    {
        "id": "ch70-l1-q14",
        "question": "The Law Commission's work on Uniform Civil Code has included:",
        "options": ["Never examined UCC", "The 21st Law Commission (2018) examined the issue and stated that a UCC was 'neither necessary nor desirable at this stage'", "Recommended immediate implementation of UCC", "Declared UCC unconstitutional"],
        "correctAnswerIndex": 1,
        "explanation": "The 21st Law Commission's consultation paper (2018) concluded that a UCC was neither necessary nor desirable at the current stage, recommending reform within personal laws instead."
    },
    {
        "id": "ch70-l1-q15",
        "question": "How many Law Commissions have been constituted in pre-independence British India?",
        "options": ["Two", "Four (1st: Macaulay 1834, 2nd: 1853, 3rd: 1861, 4th: 1879)", "Six", "One"],
        "correctAnswerIndex": 1,
        "explanation": "Four Law Commissions were constituted during British rule — collectively responsible for codifying Indian law including IPC, CrPC, Indian Evidence Act, etc."
    },
    {
        "id": "ch70-l1-q16",
        "question": "The Law Commission's reports have influenced the reform of:",
        "options": ["Only criminal law", "Criminal law, family law, property law, contract law, administrative law, electoral law, and other areas", "Only constitutional law", "Only commercial law"],
        "correctAnswerIndex": 1,
        "explanation": "Law Commission reports span all areas of law — criminal, family, property, contract, administrative, commercial, and electoral law reform."
    },
    {
        "id": "ch70-l1-q17",
        "question": "The Law Commission's 245th Report dealt with:",
        "options": ["Marriage laws", "Arrears and Backlog: Creating Additional Judicial (wo)manpower — addressing the massive pendency of cases in Indian courts", "Tax reform", "Land acquisition"],
        "correctAnswerIndex": 1,
        "explanation": "The 245th Report addressed judicial backlog and recommended creating additional judicial positions to reduce case pendency."
    },
    {
        "id": "ch70-l1-q18",
        "question": "The members of the Law Commission typically include:",
        "options": ["Only politicians", "A Chairman (retired judge), full-time and part-time members (legal experts, academics), and a Member-Secretary", "Only bureaucrats", "Only advocates"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission comprises a Chairman (usually a retired judge), full-time and part-time members from the legal profession, academia, and a Member-Secretary."
    },
    {
        "id": "ch70-l1-q19",
        "question": "The Law Commission's consultation process includes:",
        "options": ["No public consultation", "Publishing consultation papers, inviting public comments, conducting stakeholder meetings, and reviewing comparative international law", "Only consulting judges", "Only consulting politicians"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission follows a comprehensive consultation process including public comments, stakeholder engagement, and comparative legal analysis."
    },
    {
        "id": "ch70-l1-q20",
        "question": "The Law Commission's 277th Report (2018) examined:",
        "options": ["Criminal law reform only", "Wrongful Prosecution (Miscarriage of Justice): Legal Remedies — recommending compensation for persons wrongfully prosecuted", "Only family law", "Only property law"],
        "correctAnswerIndex": 1,
        "explanation": "The 277th Report recommended legal remedies and compensation for victims of wrongful prosecution and miscarriage of justice."
    },
    {
        "id": "ch70-l1-q21",
        "question": "The Law Commission operates under the administrative control of:",
        "options": ["Ministry of Home Affairs", "Ministry of Law and Justice, Department of Legal Affairs", "Ministry of Finance", "Supreme Court of India"],
        "correctAnswerIndex": 1,
        "explanation": "The Law Commission functions under the Ministry of Law and Justice, Department of Legal Affairs."
    },
    {
        "id": "ch70-l1-q22",
        "question": "The Supreme Court has referred matters to the Law Commission for examination. This demonstrates:",
        "options": ["The Commission is subordinate to the SC", "The Commission's role as an expert advisory body that courts and government can consult on complex legal issues", "The Commission can overrule the SC", "The Commission is part of the judiciary"],
        "correctAnswerIndex": 1,
        "explanation": "Courts sometimes refer complex policy-legal questions to the Law Commission for detailed study, recognizing its expertise and research capacity."
    },
    {
        "id": "ch70-l1-q23",
        "question": "The total number of reports submitted by various Law Commissions exceeds:",
        "options": ["50", "100", "280+", "1000"],
        "correctAnswerIndex": 2,
        "explanation": "Over their tenure since 1955, the various Law Commissions have submitted over 280 reports covering a wide range of legal reforms."
    },
    {
        "id": "ch70-l1-q24",
        "question": "The Law Commission's 267th Report examined:",
        "options": ["Only criminal procedure", "Hate Speech — recommending amendments to existing provisions and new legislation to curb hate speech", "Only tax law", "Only commercial law"],
        "correctAnswerIndex": 1,
        "explanation": "The 267th Report recommended strengthening provisions against hate speech by amending IPC sections and proposing new legislative measures."
    },
    {
        "id": "ch70-l1-q25",
        "question": "The Indian Evidence Act, 1872 was based on the work of:",
        "options": ["Lord Macaulay's Commission", "The Third Law Commission (1861) under Sir John Romilly and later drafts", "The first post-independence Commission", "None — it was independently drafted"],
        "correctAnswerIndex": 1,
        "explanation": "The Indian Evidence Act (drafted by Sir James Fitzjames Stephen) was influenced by the work of the British-era Law Commissions, particularly the third Commission."
    },
    {
        "id": "ch70-l1-q26",
        "question": "The Law Commission has recommended reforms in the area of electoral law including:",
        "options": ["Never examined electoral law", "State funding of elections, criminalization of politics, and reforms to the anti-defection law", "Only voter ID reform", "Only EVM reform"],
        "correctAnswerIndex": 1,
        "explanation": "Multiple Law Commission reports have recommended electoral reforms including state funding, decriminalization of politics, and anti-defection law improvements."
    },
    {
        "id": "ch70-l1-q27",
        "question": "The Law Commission's 21st session (2015-2018) was chaired by:",
        "options": ["Justice M.C. Setalvad", "Justice B.S. Chauhan (former SC Judge)", "Justice A.P. Shah", "Justice Ranganath Misra"],
        "correctAnswerIndex": 1,
        "explanation": "The 21st Law Commission was chaired by Justice B.S. Chauhan, a former Supreme Court Judge."
    },
    {
        "id": "ch70-l1-q28",
        "question": "The Law Commission differs from Parliamentary Standing Committees in that:",
        "options": ["Both are the same", "The Law Commission is an expert advisory body focused on legal reform, while Parliamentary Committees oversee governance, legislation, and policy across all sectors", "Parliamentary Committees focus only on law", "The Law Commission passes laws"],
        "correctAnswerIndex": 1,
        "explanation": "The Law Commission provides specialized legal reform advice, while Parliamentary Committees have broader oversight functions across government."
    },
    {
        "id": "ch70-l1-q29",
        "question": "The 22nd Law Commission examined the issue of:",
        "options": ["Only criminal law", "Sedition law (Section 124A IPC), among other important legal reform issues", "Only family courts", "Only banking law"],
        "correctAnswerIndex": 1,
        "explanation": "The 22nd Commission examined the sedition law issue and other critical legal reform matters referred to it by the Supreme Court and government."
    },
    {
        "id": "ch70-l1-q30",
        "question": "Before the first post-independence Law Commission, the B.N. Rau Committee (1944) contributed to:",
        "options": ["Only criminal law reform", "The codification of Hindu law through the Hindu Code Bill, eventually resulting in four separate Acts in 1955-56", "Only Muslim personal law", "Only commercial law"],
        "correctAnswerIndex": 1,
        "explanation": "B.N. Rau's work on the Hindu Code Bill led to the four Hindu law Acts — Hindu Marriage Act, Hindu Succession Act, Hindu Minority and Guardianship Act, and Hindu Adoptions and Maintenance Act."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch70-l2-q1",
        "question": "Consider the following about the Law Commission of India:\\n1. It is a constitutional body.\\n2. It is constituted by an executive order.\\n3. Its recommendations are binding.\\n4. It advises the government on legal reform.\\nWhich are correct?",
        "options": ["1, 3 and 4 only", "2 and 4 only", "1, 2, 3 and 4", "All four"],
        "correctAnswerIndex": 1,
        "explanation": "Only Statements 2 and 4 are correct. The Law Commission is non-statutory (executive), and its recommendations are advisory, not binding."
    },
    {
        "id": "ch70-l2-q2",
        "question": "Assertion (A): The Law Commission's reports have significantly shaped India's legal framework.\\nReason (R): Reports on criminal law reform, death penalty, electoral law, UCC, hate speech, and judicial reforms have influenced both legislation and judicial interpretation.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Law Commission reports have been instrumental in shaping India's legal landscape across multiple domains."
    },
    {
        "id": "ch70-l2-q3",
        "question": "Match the following Law Commission Reports:\\nA. 262nd Report → Death Penalty\\nB. 267th Report → Hate Speech\\nC. 245th Report → Judicial Backlog\\nD. UCC Consultation (2018) → Uniform Civil Code\\nWhich are correctly matched?",
        "options": ["Only A and B", "All four are correctly matched", "Only C and D", "Only A"],
        "correctAnswerIndex": 1,
        "explanation": "All four are correctly matched — 262nd (death penalty abolition), 267th (hate speech), 245th (judicial manpower/backlog), 21st Commission (UCC examination)."
    },
    {
        "id": "ch70-l2-q4",
        "question": "Statement I: The Law Commission recommended the abolition of the death penalty except for terrorism.\\nStatement II: The Supreme Court's 'rarest of rare' doctrine (Bachan Singh v. State of Punjab, 1980) was also examined in the context of this recommendation.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The 262nd Report examined the global trend towards abolition and India's 'rarest of rare' doctrine, recommending abolition except for terrorism."
    },
    {
        "id": "ch70-l2-q5",
        "question": "Assertion (A): The gap between Law Commissions' reconstitution has often been prolonged.\\nReason (R): The 22nd Law Commission was constituted after a significant gap from the 21st, during which no Law Commission was active — creating a void in systematic legal reform advisory.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Gaps in reconstitution disrupt systematic legal reform, as the government loses access to expert advisory during these periods."
    },
    {
        "id": "ch70-l2-q6",
        "question": "The Law Commission's role in the replacement of colonial-era criminal laws (IPC, CrPC, Indian Evidence Act) includes:\\n1. Several reports recommending modernization\\n2. Input into the drafting of BNS, BNSS, BSA\\n3. Identifying outdated provisions\\n4. Comparative analysis with international criminal law\\nWhich are correct?",
        "options": ["1 and 3 only", "1, 2, 3 and 4", "2 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "Law Commission reports over decades recommended criminal law reform, identified outdated provisions, and provided comparative analysis — contributing to the 2023 criminal law overhaul."
    },
    {
        "id": "ch70-l2-q7",
        "question": "Statement I: The Law Commission has examined sedition law (Section 124A IPC) multiple times.\\nStatement II: While some reports recommended retaining sedition with safeguards, the Supreme Court's reference to the 22nd Commission for comprehensive review reflected growing concern about its misuse.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Sedition has been examined repeatedly, with the SC referring it to the 22nd Commission amid growing concerns about its chilling effect on free speech."
    },
    {
        "id": "ch70-l2-q8",
        "question": "The difference between the Law Commission and the National Judicial Appointments Commission (NJAC) is:\\n1. Law Commission advises on law reform; NJAC was proposed for judicial appointments\\n2. Law Commission is executive; NJAC was constitutional (struck down)\\n3. Law Commission exists; NJAC was struck down in 2015\\nWhich are correct?",
        "options": ["1 only", "1, 2 and 3", "2 and 3 only", "1 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All three differences are correct — Law Commission (advisory/executive/existing) vs NJAC (appointments/constitutional amendment/struck down by SC in 2015)."
    },
    {
        "id": "ch70-l2-q9",
        "question": "Assertion (A): The Law Commission's report on electoral reforms recommended state funding of elections.\\nReason (R): State funding would reduce the influence of corporate donations, black money, and corruption in elections — a recommendation made in the 170th and 255th Reports.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The Law Commission has repeatedly recommended state funding to reduce money power in elections and enhance democratic integrity."
    },
    {
        "id": "ch70-l2-q10",
        "question": "The Law Commission's 21st session examination of the Uniform Civil Code concluded:\\n1. UCC is not necessary at this stage\\n2. Reform of discriminatory practices within personal laws is preferable\\n3. Article 44's directive should be read in the context of Articles 25-28\\n4. 'Piecemeal reform' is better than a single UCC\\nWhich were part of its conclusions?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "The 21st Commission recommended all four positions — incremental reform within personal laws rather than a single UCC, placing Article 44 in context."
    },
    {
        "id": "ch70-l2-q11",
        "question": "Statement I: The British-era Law Commissions led to the codification of substantive and procedural law in India.\\nStatement II: The IPC (1860), CrPC (1861/1898/1973), Indian Evidence Act (1872), and Contract Act (1872) all trace their origins to these commissions' recommendations.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. British-era Commissions laid the foundation for India's codified legal system, which served as the framework for over 150 years."
    },
    {
        "id": "ch70-l2-q12",
        "question": "The Law Commission has addressed access to justice through reports on:\\n1. Legal aid reform\\n2. Alternative Dispute Resolution (ADR)\\n3. Lok Adalat strengthening\\n4. Fast track courts\\nWhich topics have been covered?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission has comprehensively addressed access to justice — legal aid, ADR, Lok Adalats, and fast-track courts."
    },
    {
        "id": "ch70-l2-q13",
        "question": "Assertion (A): The Law Commission's recommendations on judicial reforms are particularly significant.\\nReason (R): With over 4 crore pending cases, the Commission's recommendations on judge-population ratio, court infrastructure, and case management directly address India's justice delivery challenge.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Massive case pendency makes the Commission's judicial reform recommendations critical for improving justice delivery."
    },
    {
        "id": "ch70-l2-q14",
        "question": "The Law Commission's 170th Report on 'Reform of Electoral Laws' recommended:\\n1. Disqualification of candidates charged with serious crimes\\n2. Negative voting option (NOTA)\\n3. State funding of elections\\n4. Compulsory voting consideration\\nWhich were included?",
        "options": ["1 and 3 only", "1, 2, 3 and 4", "2 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "The 170th Report comprehensively addressed electoral reforms including criminal disqualification, NOTA, state funding, and compulsory voting."
    },
    {
        "id": "ch70-l2-q15",
        "question": "Statement I: The Law Commission has examined the intersection of technology and law.\\nStatement II: Reports on data protection, cyber law, e-commerce, and digital evidence reflect the Commission's effort to keep India's legal framework updated with technological developments.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The Commission adapts its mandate to emerging challenges, including technology-law intersections."
    },
    {
        "id": "ch70-l2-q16",
        "question": "The Law Commission's work on marriage and family law includes:\\n1. Hindu law reforms\\n2. Special Marriage Act review\\n3. Divorce law modernization\\n4. Maintenance and alimony reform\\nWhich are correct?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission has extensively examined family law — Hindu law, Special Marriage Act, divorce procedures, and spousal maintenance provisions."
    },
    {
        "id": "ch70-l2-q17",
        "question": "Assertion (A): There have been demands to make the Law Commission a permanent statutory body.\\nReason (R): A statutory body with guaranteed tenure, powers, and resources would ensure continuity, independence, and effectiveness compared to the current executive body model.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Making the Commission statutory would address concerns about tenure gaps, inadequate resources, and lack of institutional independence."
    },
    {
        "id": "ch70-l2-q18",
        "question": "The Law Commission's approach to law reform typically involves:\\n1. Reviewing existing law\\n2. Comparative analysis with international jurisdictions\\n3. Stakeholder consultation\\n4. Drafting proposed legislation\\nWhich steps are part of the methodology?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission's methodology is comprehensive — reviewing existing law, international comparison, stakeholder consultation, and drafting proposed legislative changes."
    },
    {
        "id": "ch70-l2-q19",
        "question": "Statement I: Some Law Commission recommendations have been accepted decades after submission.\\nStatement II: The lag between recommendation and implementation reflects political, social, and institutional barriers to legal reform.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Many Commission recommendations face delayed implementation due to political sensitivity, social resistance, or bureaucratic inertia."
    },
    {
        "id": "ch70-l2-q20",
        "question": "The Law Commission's environmental law recommendations have covered:\\n1. Strengthening the National Green Tribunal\\n2. Environmental impact assessment reforms\\n3. Pollution control legislation\\n4. Wildlife protection\\nWhich are correct?",
        "options": ["1 and 3 only", "1, 2, 3 and 4", "2 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission has addressed multiple environmental law areas — NGT strengthening, EIA reforms, pollution control, and wildlife protection."
    },
    {
        "id": "ch70-l2-q21",
        "question": "Assertion (A): The Law Commission plays a crucial role in harmonizing Indian law with international obligations.\\nReason (R): Through comparative legal analysis and recommendations on treaty implementation, the Commission helps align domestic law with international conventions and human rights standards.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The Commission's comparative approach helps India meet international law obligations and adopt global best practices."
    },
    {
        "id": "ch70-l2-q22",
        "question": "The 'working papers' published by the Law Commission differ from 'reports' in that:",
        "options": ["They are the same", "Working papers are preliminary discussion documents inviting public feedback, while reports are final recommendations after comprehensive analysis and consultation", "Working papers are binding", "Reports are preliminary"],
        "correctAnswerIndex": 1,
        "explanation": "Working papers (also called consultation papers) are preliminary documents seeking public input, while reports are final, comprehensive recommendations."
    },
    {
        "id": "ch70-l2-q23",
        "question": "Statement I: The Law Commission has recommended reforms to property and land law.\\nStatement II: Reports on land acquisition, tenancy reform, and property registration aim to modernize India's complex property law framework.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Property and land law reform has been covered across multiple Commission reports, addressing acquisition, tenancy, and registration issues."
    },
    {
        "id": "ch70-l2-q24",
        "question": "The Law Commission's recommendations on criminal justice reform have included:\\n1. Police reform\\n2. Speedy trial\\n3. Bail reform\\n4. Witness protection\\n5. Victim compensation\\nWhich have been covered?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "Commission reports have comprehensively addressed criminal justice reform — police restructuring, speedy trial guarantees, bail reform, witness protection, and victim compensation."
    },
    {
        "id": "ch70-l2-q25",
        "question": "Assertion (A): The Supreme Court has cited Law Commission reports in its judgments.\\nReason (R): Courts treat Commission reports as authoritative research and policy recommendations, using them as reference material for interpreting existing law and supporting legal reform.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Commission reports serve as authoritative references that courts frequently cite in judgments."
    },
    {
        "id": "ch70-l2-q26",
        "question": "The Law Commission's role in commercial law reform includes:\\n1. Contract Act modernization\\n2. Arbitration law reform\\n3. Insolvency law\\n4. Consumer protection enhancement\\nWhich have been addressed?",
        "options": ["1 only", "1, 2, 3 and 4", "2 and 3 only", "1 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "Commercial law reform has been a significant area — contract modernization, arbitration reform, insolvency framework, and consumer protection."
    },
    {
        "id": "ch70-l2-q27",
        "question": "Statement I: The Law Commission has examined the right to privacy in the context of surveillance and data protection.\\nStatement II: These recommendations gained relevance after the SC's Puttaswamy judgment (2017) recognizing privacy as a fundamental right.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The Commission's work on privacy and data protection became more significant post-Puttaswamy as India developed its data protection framework."
    },
    {
        "id": "ch70-l2-q28",
        "question": "The Law Commission has recommended reforms in administrative law including:\\n1. Administrative Procedure Act\\n2. Government litigation reform\\n3. Reducing government being the largest litigant\\n4. Tribunal functioning\\nWhich are correct?",
        "options": ["1 only", "1, 2, 3 and 4", "2 and 3 only", "4 only"],
        "correctAnswerIndex": 1,
        "explanation": "Administrative law reform has been reviewed comprehensively — procedure standardization, government litigation reduction, and tribunal functioning."
    },
    {
        "id": "ch70-l2-q29",
        "question": "Assertion (A): The Law Commission bridges the gap between academic legal research and practical legislative reform.\\nReason (R): By combining scholarly analysis with policy pragmatism, the Commission translates complex legal research into actionable legislative recommendations.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The Commission's unique role is translating legal scholarship into practical policy and legislative reform."
    },
    {
        "id": "ch70-l2-q30",
        "question": "The Law Commission's recommendations on prison reform have included:\\n1. Overcrowding solutions\\n2. Undertrial prisoner rights\\n3. Rehabilitation and reform programs\\n4. Prison administration modernization\\nWhich are correct?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "Prison reform has been a recurring theme — overcrowding, undertrial rights, rehabilitation, and administration modernization have all been addressed."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch70-l3-q1",
        "question": "Consider the complete evolution of law reform institutions in India:\\n1. British-era Commissions (1834-1879) — Codification\\n2. B.N. Rau Committee (1944-47) — Hindu Code\\n3. Post-independence Commissions (1955-present) — Comprehensive reform\\n4. Parliamentary Standing Committees — Legislative oversight\\nWhich represent the institutional framework?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four represent the institutional evolution of law reform in India — from colonial codification to post-independence comprehensive reform."
    },
    {
        "id": "ch70-l3-q2",
        "question": "Assertion (A): The Law Commission's non-statutory status is both a strength and a weakness.\\nReason (R): Non-statutory status provides flexibility in reconstitution and mandate, but creates vulnerability to political interference, tenure gaps, and resource constraints.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The executive body status allows flexibility but lacks the institutional stability of a statutory or constitutional body."
    },
    {
        "id": "ch70-l3-q3",
        "question": "Statement I: The tension between the Law Commission's expert recommendations and political feasibility is inherent in legal reform.\\nStatement II: Commission reports on politically sensitive issues (UCC, death penalty, sedition, electoral funding) often face delayed or partial implementation due to political considerations.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Politically sensitive recommendations face an inherent tension between expert legal analysis and political feasibility."
    },
    {
        "id": "ch70-l3-q4",
        "question": "The comprehensive approach to legal reform should include:\\n1. Law Commission's recommendations\\n2. Parliamentary committee review\\n3. Judicial interpretation and directives\\n4. Civil society advocacy\\n5. International best practices\\nWhich together form an effective legal reform framework?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "Effective legal reform requires all five elements — expert analysis, parliamentary review, judicial input, civil society engagement, and international comparison."
    },
    {
        "id": "ch70-l3-q5",
        "question": "Assertion (A): The replacement of IPC, CrPC, and Indian Evidence Act in 2023 with BNS, BNSS, and BSA is the most significant criminal law reform since independence.\\nReason (R): These colonial-era laws, originally based on Law Commission recommendations of the 1830s-1860s, had been amended but never comprehensively replaced until 2023.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The 2023 overhaul replaced laws created under British-era commissions, representing the most comprehensive criminal law reform since 1860."
    },
    {
        "id": "ch70-l3-q6",
        "question": "The challenges facing the Law Commission include:\\n1. Delayed reconstitution and tenure gaps\\n2. Limited resources and staff compared to the scope of work\\n3. Government selectivity in implementing recommendations\\n4. Evolving legal landscape requiring rapid adaptation\\n5. Maintaining independence from executive influence\\nWhich are recognized challenges?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five challenges affect the Commission's effectiveness — tenure gaps, limited resources, selective implementation, rapid change, and independence concerns."
    },
    {
        "id": "ch70-l3-q7",
        "question": "Statement I: The Law Commission's role is evolving from purely legal reform advisory to addressing socio-legal policy issues.\\nStatement II: Reports on hate speech, mob violence, live-in relationships, and digital rights reflect the Commission's expanding engagement with social issues through a legal lens.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The Commission increasingly addresses socio-legal issues, reflecting the expanding intersection of law with social change."
    },
    {
        "id": "ch70-l3-q8",
        "question": "Assertion (A): International law commissions (like the ALRC, SALRC, ECC) provide useful models for reforming India's Law Commission.\\nReason (R): Australia's ALRC (statutory, permanent, well-resourced) and South Africa's SALRC demonstrate how statutory status and dedicated funding enhance law reform effectiveness.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Statutory law reform bodies in other countries provide useful models for strengthening India's Commission."
    },
    {
        "id": "ch70-l3-q9",
        "question": "Consider the relationship between the Law Commission and constitutional interpretation:\\n1. Commission reports inform SC judgments\\n2. SC refers issues to the Commission for study\\n3. Commission examines impact of SC judgments on law reform\\n4. This creates a dialogue between law reform and constitutional adjudication\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four demonstrate the symbiotic relationship between the Law Commission and the judiciary in developing India's legal framework."
    },
    {
        "id": "ch70-l3-q10",
        "question": "Statement I: The Law Commission's report on sedition examined whether Section 124A should be retained, amended, or repealed.\\nStatement II: The debate involves balancing national security concerns with free speech rights under Article 19(1)(a) — a constitutional tension the Commission must navigate.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Sedition law reform involves the fundamental tension between security and liberty — a complex constitutional question the Commission has examined."
    },
    {
        "id": "ch70-l3-q11",
        "question": "Assertion (A): The Law Commission has examined the judge-to-population ratio in India.\\nReason (R): India's ratio of approximately 20 judges per million population (compared to 50+ in developed countries) contributes to massive case pendency and delayed justice delivery.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The inadequate judge-population ratio is a structural cause of case pendency that the Commission has highlighted."
    },
    {
        "id": "ch70-l3-q12",
        "question": "The Law Commission's work intersects with global jurisprudential trends including:\\n1. Human rights law developments\\n2. Environmental justice\\n3. Digital rights and AI regulation\\n4. Transitional justice\\n5. Gender justice and LGBTQ+ rights\\nWhich represent contemporary intersections?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five represent contemporary global jurisprudential trends that the Commission must engage with for effective law reform."
    },
    {
        "id": "ch70-l3-q13",
        "question": "Statement I: The Law Commission's methodology has evolved from purely doctrinal analysis to incorporating empirical research and data.\\nStatement II: Modern Commission reports increasingly use statistical data, field studies, and social science research alongside traditional legal analysis.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The evolution from purely doctrinal to empirically-informed analysis strengthens the Commission's recommendations."
    },
    {
        "id": "ch70-l3-q14",
        "question": "Assertion (A): The Law Commission's examination of personal laws is inherently complex and politically sensitive.\\nReason (R): Personal laws intersect with religious identity, constitutional rights (Articles 25-28 and 14), and cultural diversity — making reform politically contentious.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Personal law reform involves navigating between religious freedom, fundamental rights, and social reform — making it inherently complex."
    },
    {
        "id": "ch70-l3-q15",
        "question": "Consider the impact of AI and technology on law reform:\\n1. Algorithmic accountability\\n2. Digital privacy and surveillance\\n3. Online dispute resolution\\n4. Smart contracts legal framework\\n5. Deepfakes and digital evidence\\nThe Law Commission's future mandate should address:",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five represent emerging legal challenges that the Law Commission must address to keep India's legal framework current with technological change."
    },
    {
        "id": "ch70-l3-q16",
        "question": "Statement I: The effectiveness of law reform depends not just on Commission recommendations but on implementation infrastructure.\\nStatement II: Without adequate court infrastructure, trained personnel, effective enforcement, and monitoring mechanisms, even the best legislative reforms fail to achieve their objectives.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The implementation gap between law reform recommendations and their effective operationalization is a persistent challenge."
    },
    {
        "id": "ch70-l3-q17",
        "question": "Assertion (A): India's legal system requires fundamental structural reform beyond incremental amendments.\\nReason (R): The colonial origins of much Indian law, massive case pendency, access to justice gaps, and the changing socio-economic landscape necessitate comprehensive structural reform.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Structural reform beyond piecemeal amendments is needed to modernize India's legal system — a core mandate for the Law Commission."
    },
    {
        "id": "ch70-l3-q18",
        "question": "The Law Commission's work on women's rights has included:\\n1. Domestic violence law reform\\n2. Dowry death provisions\\n3. Sexual harassment legislation\\n4. Marriage age reform\\n5. Maintenance and alimony reform\\nWhich have been covered?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "Women's rights reform has been comprehensively addressed — domestic violence, dowry, sexual harassment, marriage age, and maintenance provisions."
    },
    {
        "id": "ch70-l3-q19",
        "question": "Statement I: The Law Commission's status as a 'think tank for law reform' parallels NITI Aayog's role as a 'think tank for governance.'\\nStatement II: Both are executive bodies with advisory-only powers, relying on the quality of their analysis and recommendations for influence rather than binding authority.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The Law Commission and NITI Aayog share structural similarities as executive advisory bodies whose influence depends on quality rather than authority."
    },
    {
        "id": "ch70-l3-q20",
        "question": "Assertion (A): The interaction between law reform and social change is bidirectional.\\nReason (R): Sometimes legal reform drives social change (e.g., dowry prohibition), and sometimes social change demands legal reform (e.g., LGBTQ+ rights, digital privacy) — the Law Commission must be responsive to both directions.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The bidirectional relationship between law and society means the Commission must both anticipate and respond to social change."
    },
    {
        "id": "ch70-l3-q21",
        "question": "Consider the comprehensive legal reform framework for India:\\n1. Law Commission — Expert advisory\\n2. Parliamentary Committees — Legislative review\\n3. NITI Aayog — Policy advisory\\n4. Judiciary — Constitutional interpretation\\n5. Bar Council — Legal profession regulation\\nWhich together form the ecosystem?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five institutions contribute to India's legal reform ecosystem — from expert advisory to legislative review, policy input, judicial development, and professional regulation."
    },
    {
        "id": "ch70-l3-q22",
        "question": "Statement I: The Law Commission has examined tribal and indigenous community rights.\\nStatement II: Reports on forest rights, land alienation, and customary law protection contribute to the legal framework protecting tribal communities alongside NCST and FRA.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The Commission's tribal-related reports complement NCST's oversight and FRA's statutory framework."
    },
    {
        "id": "ch70-l3-q23",
        "question": "Assertion (A): The Law Commission should adopt a more transparent and participatory approach.\\nReason (R): Greater public engagement, online consultations, regional hearings, and involvement of diverse stakeholders would enhance the quality and legitimacy of Commission recommendations.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Enhanced public participation would improve both the quality and democratic legitimacy of the Commission's recommendations."
    },
    {
        "id": "ch70-l3-q24",
        "question": "The Law Commission's examination of the interface between law and economics includes:\\n1. Ease of doing business reforms\\n2. Commercial court legislation\\n3. Insolvency law modernization\\n4. Competition law reform\\n5. Investment treaty arbitration\\nWhich have been covered?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five law-economics intersections have been addressed — business environment, commercial courts, insolvency, competition, and investment treaties."
    },
    {
        "id": "ch70-l3-q25",
        "question": "Statement I: The Law Commission's relationship with the government raises questions about institutional independence.\\nStatement II: Since the Commission is constituted by the executive, depends on government funding, and its chairman is a government appointee, maintaining intellectual independence from the government of the day is structurally challenging.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The structural dependence on the executive creates inherent challenges for maintaining the intellectual independence that effective law reform requires."
    },
    {
        "id": "ch70-l3-q26",
        "question": "Assertion (A): The COVID-19 pandemic highlighted the need for legal reform in multiple areas.\\nReason (R): The Epidemic Diseases Act (1897), disaster management law, digital justice delivery, telemedicine regulation, and workplace safety law were all exposed as inadequate.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The pandemic revealed gaps in multiple legal frameworks that the Law Commission should address in future recommendations."
    },
    {
        "id": "ch70-l3-q27",
        "question": "The future of legal reform in India requires:\\n1. A permanent, well-resourced Law Commission\\n2. Integration with digital governance frameworks\\n3. Proactive (not just reactive) legal reform\\n4. Greater state-level law reform capacity\\n5. Civil society and academic engagement\\nWhich represent essential reforms?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five represent essential reforms needed to strengthen India's legal reform infrastructure for the 21st century."
    },
    {
        "id": "ch70-l3-q28",
        "question": "Statement I: The Law Commission's examination of Article 21 (right to life) jurisprudence has been extensive.\\nStatement II: Reports on right to health, right to shelter, right to livelihood, right to clean environment, and right to die with dignity have expanded the Commission's engagement with Article 21's expansive interpretation.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The Court's expansive Article 21 interpretation has created numerous areas for the Commission to examine and recommend legislative frameworks."
    },
    {
        "id": "ch70-l3-q29",
        "question": "Assertion (A): Comparative law is an essential tool for the Law Commission.\\nReason (R): By studying how other jurisdictions address similar legal challenges, the Commission can adapt proven solutions to India's unique legal and social context.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Comparative legal analysis is a core methodology that enriches the Commission's recommendations with global perspectives."
    },
    {
        "id": "ch70-l3-q30",
        "question": "Consider the ultimate measure of the Law Commission's effectiveness:\\n1. Number of reports produced\\n2. Quality and depth of legal analysis\\n3. Percentage of recommendations accepted by government\\n4. Impact on actual access to justice and legal certainty\\n5. Contribution to democratic governance and rule of law\\nWhich is the most comprehensive measure?",
        "options": ["1 only", "3 only", "4 and 5 together", "All five, but with 4 and 5 being the most important"],
        "correctAnswerIndex": 3,
        "explanation": "While all five are relevant measures, the ultimate effectiveness test is impact on access to justice, legal certainty, democratic governance, and rule of law."
    }
];

export const CHAPTER_70_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
