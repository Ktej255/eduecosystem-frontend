import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch62-l1-q1",
        "question": "The National Commission for Scheduled Tribes (NCST) was established by which Constitutional Amendment?",
        "options": ["73rd Amendment", "89th Constitutional Amendment Act, 2003", "86th Amendment", "91st Amendment"],
        "correctAnswerIndex": 1,
        "explanation": "The 89th Amendment separated the combined National Commission for SCs and STs into two separate commissions — NCSC (Article 338) and NCST (Article 338A)."
    },
    {
        "id": "ch62-l1-q2",
        "question": "NCST derives its powers from:",
        "options": ["A Parliamentary statute", "Article 338A of the Constitution", "Executive order", "Supreme Court directive"],
        "correctAnswerIndex": 1,
        "explanation": "NCST is a constitutional body established under Article 338A, giving it higher constitutional status than statutory commissions."
    },
    {
        "id": "ch62-l1-q3",
        "question": "NCST consists of:",
        "options": ["A Chairperson and 3 members", "A Chairperson, a Vice-Chairperson, and 3 other members (total 5)", "A Chairperson and 10 members", "Only a Chairperson"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 338A(2), NCST has a Chairperson, Vice-Chairperson, and 3 other members appointed by the President."
    },
    {
        "id": "ch62-l1-q4",
        "question": "The Chairperson and members of NCST are appointed by:",
        "options": ["The Prime Minister", "The President by warrant under his hand and seal", "The Parliament", "The Chief Justice of India"],
        "correctAnswerIndex": 1,
        "explanation": "The President appoints the Chairperson, Vice-Chairperson, and members of NCST."
    },
    {
        "id": "ch62-l1-q5",
        "question": "Before the 89th Amendment (2003), the combined commission for SCs and STs was established under:",
        "options": ["Article 338 (65th Amendment, 1990)", "Article 340", "Article 342", "National Commission for SC and ST Act, 1990"],
        "correctAnswerIndex": 0,
        "explanation": "The 65th Amendment (1990) established the combined National Commission for SCs and STs under Article 338, replacing the Special Officer for SCs/STs."
    },
    {
        "id": "ch62-l1-q6",
        "question": "The primary function of NCST under Article 338A(5) includes:",
        "options": ["Legislating laws for tribals", "Investigating and monitoring all matters relating to safeguards for Scheduled Tribes under the Constitution and other laws", "Administering tribal areas directly", "Appointing tribal leaders"],
        "correctAnswerIndex": 1,
        "explanation": "NCST investigates and monitors all matters relating to constitutional and legal safeguards for STs and evaluates their working."
    },
    {
        "id": "ch62-l1-q7",
        "question": "NCST submits its report to:",
        "options": ["The Supreme Court", "The President, who lays it before Parliament", "The Prime Minister", "The Home Ministry only"],
        "correctAnswerIndex": 1,
        "explanation": "Under Article 338A(6), NCST submits reports to the President who causes them to be laid before Parliament with a memorandum of action taken."
    },
    {
        "id": "ch62-l1-q8",
        "question": "Article 342 of the Constitution relates to:",
        "options": ["Scheduled Castes notification", "The President's power to specify Scheduled Tribes in relation to any State or Union Territory", "Fundamental Rights", "Emergency provisions"],
        "correctAnswerIndex": 1,
        "explanation": "Article 342 empowers the President to specify Scheduled Tribes (after consultation with the Governor in respect of a State). Parliament can modify the list."
    },
    {
        "id": "ch62-l1-q9",
        "question": "The Fifth Schedule of the Constitution deals with:",
        "options": ["Union Territories", "Administration and control of Scheduled Areas and Scheduled Tribes in states other than the four northeastern states", "Language provisions", "Financial relations"],
        "correctAnswerIndex": 1,
        "explanation": "The Fifth Schedule provides for administration of Scheduled Areas and Scheduled Tribes in states other than Assam, Meghalaya, Tripura, and Mizoram."
    },
    {
        "id": "ch62-l1-q10",
        "question": "The Sixth Schedule of the Constitution deals with:",
        "options": ["All tribal areas in India", "Administration of tribal areas in Assam, Meghalaya, Tripura, and Mizoram through Autonomous District Councils and Regional Councils", "Religious minorities", "Language policy"],
        "correctAnswerIndex": 1,
        "explanation": "The Sixth Schedule provides for Autonomous District Councils and Regional Councils for tribal areas in the four northeastern states."
    },
    {
        "id": "ch62-l1-q11",
        "question": "The Provisions of the Panchayats (Extension to Scheduled Areas) Act, 1996 (PESA) extends to:",
        "options": ["All areas of India", "Scheduled Areas under the Fifth Schedule for tribal self-governance through Panchayats", "Only Union Territories", "Only northeastern states"],
        "correctAnswerIndex": 1,
        "explanation": "PESA extends Panchayati Raj provisions to Fifth Schedule areas, empowering tribal communities with self-governance through Gram Sabhas and Panchayats."
    },
    {
        "id": "ch62-l1-q12",
        "question": "The Forest Rights Act, 2006 (FRA) provides:",
        "options": ["Only timber rights to commercial entities", "Recognition and vesting of forest rights and occupation of forest land in forest dwelling Scheduled Tribes and other traditional forest dwellers", "Only rights to state governments", "Mining rights in forest areas"],
        "correctAnswerIndex": 1,
        "explanation": "FRA recognizes individual and community forest rights of forest-dwelling STs and other traditional forest dwellers who have been occupying forest land."
    },
    {
        "id": "ch62-l1-q13",
        "question": "Article 244 of the Constitution provides for:",
        "options": ["Reservation in employment", "Administration of Scheduled Areas and Tribal Areas as per the Fifth and Sixth Schedules", "Right to education", "Judicial review"],
        "correctAnswerIndex": 1,
        "explanation": "Article 244(1) applies the Fifth Schedule to Scheduled Areas in states and 244(2) applies the Sixth Schedule to tribal areas in the northeastern states."
    },
    {
        "id": "ch62-l1-q14",
        "question": "The Tribes Advisory Council (TAC) under the Fifth Schedule is constituted in:",
        "options": ["All states", "States having Scheduled Areas, with 3/4th members being tribal representatives from state legislature", "Only Union Territories", "Only northeastern states"],
        "correctAnswerIndex": 1,
        "explanation": "TAC is constituted in states having Scheduled Areas. It advises the Governor on matters pertaining to the welfare and advancement of STs."
    },
    {
        "id": "ch62-l1-q15",
        "question": "Under the Fifth Schedule, the Governor has the power to:",
        "options": ["Only appoint tribal leaders", "Direct that any particular Act of Parliament or State Legislature shall not apply to a Scheduled Area, or apply with modifications", "Only build roads in tribal areas", "Only grant scholarships"],
        "correctAnswerIndex": 1,
        "explanation": "The Governor can direct non-application or modified application of Acts to Scheduled Areas, and make regulations for peace and good government of Scheduled Areas."
    },
    {
        "id": "ch62-l1-q16",
        "question": "NCST has the powers of a civil court for:",
        "options": ["Criminal prosecution", "Summoning and enforcing attendance, requiring discovery and production of documents, receiving evidence on affidavit, and requisitioning public records", "Passing imprisonment orders", "Issuing writs"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338A(8) grants NCST civil court powers for investigating complaints and inquiries related to tribal safeguards."
    },
    {
        "id": "ch62-l1-q17",
        "question": "The Scheduled Tribes and Other Traditional Forest Dwellers (Recognition of Forest Rights) Act, 2006 recognizes:",
        "options": ["Only individual forest rights", "Both individual rights (habitation, cultivation) and community rights (fishing, grazing, access to biodiversity, traditional knowledge)", "Only commercial forestry rights", "Only mining rights"],
        "correctAnswerIndex": 1,
        "explanation": "FRA recognizes both individual rights (right to hold and live in forest land) and community rights (grazing, fishing, biodiversity access, traditional knowledge)."
    },
    {
        "id": "ch62-l1-q18",
        "question": "Article 275(1) provides for:",
        "options": ["Special grants to tribal areas", "Grants-in-aid from the Consolidated Fund of India to states for promoting the welfare of STs and for raising the level of administration of Scheduled Areas", "Loans to tribal communities", "Only educational scholarships"],
        "correctAnswerIndex": 1,
        "explanation": "Article 275(1) provides earmarked grants to states for tribal welfare and administration of Scheduled Areas — a constitutional obligation."
    },
    {
        "id": "ch62-l1-q19",
        "question": "The Ministry responsible for tribal affairs is:",
        "options": ["Ministry of Home Affairs", "Ministry of Tribal Affairs", "Ministry of Social Justice and Empowerment", "Ministry of Rural Development"],
        "correctAnswerIndex": 1,
        "explanation": "The Ministry of Tribal Affairs (created in 1999) is the nodal ministry for overall policy, planning, and coordination of tribal development programs."
    },
    {
        "id": "ch62-l1-q20",
        "question": "Particularly Vulnerable Tribal Groups (PVTGs) are:",
        "options": ["All Scheduled Tribes", "The most vulnerable among STs, identified based on pre-agricultural technology, stagnant/declining population, and low literacy — 75 groups identified across India", "Only urban tribal populations", "Only forest-dwelling tribes"],
        "correctAnswerIndex": 1,
        "explanation": "PVTGs (earlier called Primitive Tribal Groups) are identified based on pre-agricultural technology, declining/stagnant population, and low literacy. 75 groups are designated in 18 states and 1 UT."
    },
    {
        "id": "ch62-l1-q21",
        "question": "Article 15(4) provides for:",
        "options": ["Equal pay for equal work", "Special provisions by the State for the advancement of socially and educationally backward classes, including SCs and STs", "Right to property", "Right to vote"],
        "correctAnswerIndex": 1,
        "explanation": "Article 15(4) enables the State to make special provisions (reservations in education, etc.) for the advancement of backward classes including STs."
    },
    {
        "id": "ch62-l1-q22",
        "question": "Article 16(4) provides for:",
        "options": ["Equal pay", "Reservation of appointments or posts in favor of any backward class of citizens not adequately represented in state services", "Right to strike", "Right to education"],
        "correctAnswerIndex": 1,
        "explanation": "Article 16(4) enables the State to make reservations in government employment for backward classes including STs."
    },
    {
        "id": "ch62-l1-q23",
        "question": "The percentage of reservation for STs in central government services and educational institutions is:",
        "options": ["15%", "7.5%", "22.5%", "10%"],
        "correctAnswerIndex": 1,
        "explanation": "STs have 7.5% reservation in central government services and aided educational institutions, broadly proportional to their population share."
    },
    {
        "id": "ch62-l1-q24",
        "question": "The Tribal Sub-Plan (TSP), now renamed as Scheduled Tribe Component (STC), aims at:",
        "options": ["Only building roads", "Ensuring that funds for tribal development from all central ministries are pooled and utilized specifically for ST welfare, in proportion to their population", "Only providing scholarships", "Only healthcare services"],
        "correctAnswerIndex": 1,
        "explanation": "The TSP/STC strategy mandates that all central ministries earmark funds proportional to the ST population share for tribal development programs."
    },
    {
        "id": "ch62-l1-q25",
        "question": "The Protection of Civil Rights Act, 1955 (originally Untouchability Offences Act) applies to:",
        "options": ["Only urban areas", "The entire country, prohibiting the practice of untouchability in any form", "Only tribal areas", "Only government institutions"],
        "correctAnswerIndex": 1,
        "explanation": "The Act prohibits untouchability in all its forms and makes its practice punishable. It complements Article 17 of the Constitution."
    },
    {
        "id": "ch62-l1-q26",
        "question": "The SC/ST (Prevention of Atrocities) Act, 1989 provides:",
        "options": ["Only education benefits", "Prevention of offences of atrocities against SCs and STs, special courts for trial, and relief and rehabilitation of victims", "Only employment reservation", "Only housing schemes"],
        "correctAnswerIndex": 1,
        "explanation": "The Act addresses and penalizes atrocities against SCs/STs through special courts, exclusive special courts, and victim relief/rehabilitation provisions."
    },
    {
        "id": "ch62-l1-q27",
        "question": "NCST is headquartered at:",
        "options": ["Mumbai", "New Delhi", "Ranchi", "Bhopal"],
        "correctAnswerIndex": 1,
        "explanation": "NCST is headquartered in New Delhi."
    },
    {
        "id": "ch62-l1-q28",
        "question": "The Eklavya Model Residential Schools (EMRS) scheme aims at:",
        "options": ["Only vocational training", "Providing quality education to ST students in remote areas through residential schools on the pattern of Navodaya Vidyalayas", "Only higher education", "Only adult education"],
        "correctAnswerIndex": 1,
        "explanation": "EMRS provides quality education with boarding facilities to ST students in remote tribal areas, focusing on both academic and co-curricular development."
    },
    {
        "id": "ch62-l1-q29",
        "question": "The scheduled areas in India are declared by:",
        "options": ["State Governments", "The President, after consultation with the Governor of the state", "The Parliament", "The NCST"],
        "correctAnswerIndex": 1,
        "explanation": "Under the Fifth Schedule, the President has the power to declare an area as a Scheduled Area after consultation with the Governor."
    },
    {
        "id": "ch62-l1-q30",
        "question": "NCST can take up matters suo motu when:",
        "options": ["Never", "When it notices violations of tribal rights or safeguards even without a formal complaint", "Only when directed by the President", "Only on court orders"],
        "correctAnswerIndex": 1,
        "explanation": "NCST can take suo motu cognizance of matters relating to ST safeguards and initiate investigations."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch62-l2-q1",
        "question": "Consider the following about NCST:\\n1. It is a statutory body.\\n2. It is a constitutional body under Article 338A.\\n3. It was created by the 89th Amendment, 2003.\\n4. It has civil court powers.\\nWhich are correct?",
        "options": ["1, 3 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4", "2 only"],
        "correctAnswerIndex": 1,
        "explanation": "Statements 2, 3, and 4 are correct. Statement 1 is incorrect — NCST is constitutional, not statutory."
    },
    {
        "id": "ch62-l2-q2",
        "question": "Assertion (A): The separation of NCST from the combined SC/ST Commission was necessary.\\nReason (R): The distinct issues of tribal communities — land alienation, forest rights, geographical isolation, cultural preservation — require dedicated institutional attention different from SC issues.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Tribal issues (land rights, forest access, cultural preservation, geographical isolation) differ fundamentally from SC issues (caste discrimination, untouchability), necessitating separate commissions."
    },
    {
        "id": "ch62-l2-q3",
        "question": "Match the following:\\nA. Fifth Schedule → Administration of Scheduled Areas (mainland)\\nB. Sixth Schedule → Autonomous District Councils (NE states)\\nC. PESA → Panchayat extension to Scheduled Areas\\nD. FRA → Forest rights of tribals\\nWhich are correctly matched?",
        "options": ["Only A and B", "Only C and D", "All four are correctly matched", "Only A"],
        "correctAnswerIndex": 2,
        "explanation": "All four are correctly matched — Fifth Schedule (mainland tribal areas), Sixth Schedule (NE autonomous councils), PESA (panchayat in tribal areas), FRA (forest rights)."
    },
    {
        "id": "ch62-l2-q4",
        "question": "Under PESA 1996, the Gram Sabha in Scheduled Areas has the power to:\\n1. Approve development plans\\n2. Control over money-lending to tribals\\n3. Manage minor forest produce (MFP)\\n4. Control minerals under minor minerals\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "PESA empowers Gram Sabhas with wide-ranging powers — plan approval, money-lending control, MFP management, and control over minor minerals in Scheduled Areas."
    },
    {
        "id": "ch62-l2-q5",
        "question": "Statement I: The Forest Rights Act recognizes community forest rights including the right to protect and manage community forest resources.\\nStatement II: FRA was enacted to correct the 'historical injustice' done to forest-dwelling communities.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The FRA preamble explicitly mentions 'historical injustice' and Sections 3(1)(i) provide for community rights including forest management."
    },
    {
        "id": "ch62-l2-q6",
        "question": "In Samatha v. State of Andhra Pradesh (1997), the Supreme Court held:",
        "options": ["Mining in Scheduled Areas is unrestricted", "Transfer of government land in Scheduled Areas to a non-tribal (including private companies) for mining is void — the concept of 'person' in the transfer prohibition includes companies", "Only STs can mine in tribal areas", "All mining should be stopped nationwide"],
        "correctAnswerIndex": 1,
        "explanation": "The SC held that the transfer prohibition in Scheduled Areas extends to mining leases to private companies, protecting tribal land rights from alienation."
    },
    {
        "id": "ch62-l2-q7",
        "question": "NCST's additional function (not given to NCSC) under Article 338A(9) includes:",
        "options": ["No additional function", "Measures to be taken for socio-economic development of STs and to evaluate the effectiveness of their protection under the Union and State Governments' plans", "Only military recruitment", "Only election monitoring"],
        "correctAnswerIndex": 1,
        "explanation": "Article 338A(9) gives NCST an additional function specifically related to socio-economic development and protection measures — a function not given to NCSC."
    },
    {
        "id": "ch62-l2-q8",
        "question": "The Sixth Schedule Autonomous District Councils have powers to:\\n1. Make laws on land management\\n2. Make laws on forests (except reserved forests)\\n3. Regulate money-lending and trading by non-tribals\\n4. Establish courts for tribal disputes\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "Autonomous District Councils have wide legislative and judicial powers covering land, forests, money-lending regulation, and dispute resolution."
    },
    {
        "id": "ch62-l2-q9",
        "question": "Assertion (A): Land alienation remains one of the most critical issues for tribal communities.\\nReason (R): Despite protective legislation, tribals lose land to non-tribals through illegal transfers, government acquisition for development projects, and inadequate legal enforcement.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Land alienation through illegal transfers, mining, dam construction, and weak enforcement remains a fundamental threat to tribal livelihoods."
    },
    {
        "id": "ch62-l2-q10",
        "question": "The criteria for declaring Scheduled Areas under the Fifth Schedule include:\\n1. Preponderance of tribal population\\n2. Compactness and reasonable size\\n3. Economic backwardness relative to neighboring areas\\n4. Marked disparity in economic standards\\nSelect the correct answer:",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four criteria are considered: tribal population preponderance, compact area size, economic backwardness, and economic disparity with neighbouring areas."
    },
    {
        "id": "ch62-l2-q11",
        "question": "Statement I: The Union and State Governments are required to consult NCST on all major policy matters affecting STs.\\nStatement II: Under Article 338A(5)(b), the Central and State Governments must consult the Commission on all policy questions concerning STs.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Article 338A(5)(b) mandates consultation with NCST on all major policy matters affecting STs — a significant constitutional safeguard."
    },
    {
        "id": "ch62-l2-q12",
        "question": "In Orissa Mining Corporation v. Ministry of Environment and Forests (Niyamgiri Hills case, 2013), the Supreme Court held:",
        "options": ["Mining always takes priority over tribal rights", "The Gram Sabha has the right to decide whether mining in their sacred hills should be permitted — upholding forest rights and cultural rights of the Dongria Kondh tribe", "Only the Central Government can decide", "Only the mining company can decide"],
        "correctAnswerIndex": 1,
        "explanation": "The SC ruled that the Gram Sabha must be consulted and their rights under FRA must be considered before allowing mining in the Niyamgiri Hills, protecting the Dongria Kondh tribe's sacred forest."
    },
    {
        "id": "ch62-l2-q13",
        "question": "NCST monitors the implementation of which specific legislation?\\n1. SC/ST (Prevention of Atrocities) Act\\n2. Forest Rights Act\\n3. PESA\\n4. Land alienation prevention laws\\nSelect the correct answer:",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "NCST monitors all major tribal legislation — atrocities prevention, forest rights, panchayat extension, and land alienation laws."
    },
    {
        "id": "ch62-l2-q14",
        "question": "The Bhuria Committee (1995) and Bhuria Committee (2002-04) recommended:",
        "options": ["Abolition of tribal self-governance", "Extension of Parts IX and IXA of the Constitution to Scheduled Areas (leading to PESA) and reforms in Fifth Schedule administration", "Only urban development for tribals", "Only educational reforms"],
        "correctAnswerIndex": 1,
        "explanation": "The Bhuria Committee's recommendations led to PESA (1996) and further reforms in Fifth Schedule area administration, strengthening tribal self-governance."
    },
    {
        "id": "ch62-l2-q15",
        "question": "The difference between NCST (Art 338A) and the Tribes Advisory Council (Fifth Schedule) is:",
        "options": ["They are the same body", "NCST is a national constitutional commission monitoring tribal safeguards nationwide; TAC is a state-level advisory body advising the Governor on tribal welfare in Scheduled Areas", "TAC monitors NCST", "NCST reports to TAC"],
        "correctAnswerIndex": 1,
        "explanation": "NCST operates nationally as a constitutional oversight body, while TAC operates at the state level advising the Governor specifically on Scheduled Area governance."
    },
    {
        "id": "ch62-l2-q16",
        "question": "Under FRA, Community Forest Resource (CFR) rights include:\\n1. Right to protect and manage community forest resources\\n2. Right to regeneration and conservation\\n3. Right to biodiversity preservation\\n4. Right to intellectual property of traditional knowledge\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "FRA provides comprehensive community rights including forest management, conservation, biodiversity, and protection of traditional knowledge."
    },
    {
        "id": "ch62-l2-q17",
        "question": "Assertion (A): The SC/ST (Prevention of Atrocities) Amendment Act, 2015 strengthened protections.\\nReason (R): The amendment added new categories of offences, established exclusive special courts, and enhanced accountability of public servants.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The 2015 amendment strengthened the Act by adding new offences, exclusive special courts, and public servant accountability provisions."
    },
    {
        "id": "ch62-l2-q18",
        "question": "NCST has raised concerns about displacement of tribals due to:\\n1. Large dam projects\\n2. Mining and industrialization\\n3. National parks and wildlife sanctuaries\\n4. Military installations\\nWhich are documented causes of tribal displacement?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 only", "4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four cause displacement — dams (Narmada, Polavaram), mining (Niyamgiri, Jharkhand), wildlife protection (evictions from sanctuaries), and military installations."
    },
    {
        "id": "ch62-l2-q19",
        "question": "The Van Dhan Vikas Kendra (VDVK) initiative aims at:",
        "options": ["Only tourism development", "Value addition to Minor Forest Produce (MFP) collected by tribals, helping them get better prices through processing, branding, and marketing at local level", "Only mining rights", "Only education"],
        "correctAnswerIndex": 1,
        "explanation": "VDVK provides MFP processing, skill development, and marketing support to tribal communities through tribal self-help groups."
    },
    {
        "id": "ch62-l2-q20",
        "question": "Statement I: The recommendations of NCST are advisory in nature.\\nStatement II: However, the Constitution mandates that the Union and State Governments shall consult NCST on all major policy matters affecting STs.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. While recommendations are advisory, the mandatory consultation requirement gives NCST significant influence on tribal policy."
    },
    {
        "id": "ch62-l2-q21",
        "question": "The Stand-Up India scheme benefits ST entrepreneurs by:",
        "options": ["Only providing land", "Facilitating bank loans between Rs 10 lakh and Rs 1 crore for SC, ST, and women entrepreneurs for setting up greenfield enterprises", "Only providing government jobs", "Only scholarship support"],
        "correctAnswerIndex": 1,
        "explanation": "Stand-Up India provides bank loans for SC/ST/women entrepreneurs to set up manufacturing, services, or trading enterprises."
    },
    {
        "id": "ch62-l2-q22",
        "question": "NCST's role in monitoring reservations includes:\\n1. Checking adequate representation in government posts\\n2. Monitoring backlog vacancies\\n3. Ensuring promotion quotas are filled\\n4. Reviewing reservation roster maintenance\\nSelect the correct answer:",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "NCST monitors all aspects of reservation implementation — recruitment, backlog filling, promotions, and roster maintenance in government services."
    },
    {
        "id": "ch62-l2-q23",
        "question": "The difference between PESA (1996) and the Sixth Schedule is:",
        "options": ["They are identical", "PESA extends Panchayati Raj to Fifth Schedule areas giving GramSabhas key powers; the Sixth Schedule creates Autonomous District Councils with legislative/judicial powers in northeastern tribal areas", "PESA applies only to NE states", "Sixth Schedule applies to all states"],
        "correctAnswerIndex": 1,
        "explanation": "PESA operates through Panchayati Raj framework in Fifth Schedule areas (mainland), while the Sixth Schedule provides autonomous governance structures in northeastern tribal areas."
    },
    {
        "id": "ch62-l2-q24",
        "question": "Assertion (A): The implementation of FRA has been uneven across states.\\nReason (R): States like Madhya Pradesh, Odisha, and Chhattisgarh have made progress, while others lag in processing claims due to bureaucratic delays and land revenue department resistance.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. FRA implementation varies significantly — some states process claims actively while others face institutional resistance and delays."
    },
    {
        "id": "ch62-l2-q25",
        "question": "The Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement (RFCTLARR) Act, 2013 protects STs by:",
        "options": ["No special provisions", "Requiring consent of 70% of affected families (80% for PPP projects), enhanced compensation, Social Impact Assessment, and mandatory rehabilitation before acquisition", "Only market-rate compensation", "Automatic consent"],
        "correctAnswerIndex": 1,
        "explanation": "RFCTLARR provides special protections for STs including consent requirements, enhanced compensation (up to 4x in rural areas), SIA, and prior rehabilitation."
    },
    {
        "id": "ch62-l2-q26",
        "question": "The Xaxa Committee (2014) examined which issues related to STs?",
        "options": ["Only education", "Socio-economic, educational, and health status of tribals, including land alienation, displacement, migration, and access to livelihood", "Only election participation", "Only military recruitment"],
        "correctAnswerIndex": 1,
        "explanation": "The Xaxa Committee comprehensively examined tribal issues including socio-economic status, education, health, land alienation, displacement, and forest rights."
    },
    {
        "id": "ch62-l2-q27",
        "question": "Statement I: NCST has recommended that the Governor should exercise Fifth Schedule powers more actively.\\nStatement II: The Governor's power under Fifth Schedule Paragraph 5 to make regulations for Scheduled Areas is largely underutilized.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. NCST has consistently noted that Governors rarely use Fifth Schedule powers to protect tribal interests through regulations in Scheduled Areas."
    },
    {
        "id": "ch62-l2-q28",
        "question": "The National Tribal Research Institute (NTRI) serves as:",
        "options": ["A court for tribals", "An apex centre for tribal research, training, and data collection to support evidence-based policy making for tribal development", "A military training centre", "A religious institution"],
        "correctAnswerIndex": 1,
        "explanation": "NTRI consolidates tribal research, provides policy inputs, and serves as a knowledge hub for tribal development strategies."
    },
    {
        "id": "ch62-l2-q29",
        "question": "The Minor Forest Produce (MFP) Minimum Support Price (MSP) scheme benefits tribals by:",
        "options": ["Only providing seeds", "Ensuring fair prices for MFP collected by tribals through government-fixed MSPs, preventing exploitation by middlemen", "Only providing transport", "Only providing storage"],
        "correctAnswerIndex": 1,
        "explanation": "MSP for MFP ensures tribals receive fair prices for forest produce (tendu leaves, bamboo, honey, medicinal herbs) through government procurement at minimum support prices."
    },
    {
        "id": "ch62-l2-q30",
        "question": "NCST's interface with state-level institutions includes:\\n1. State Tribal Advisory Councils\\n2. Commissioner for STs at state level\\n3. State Tribal Welfare Departments\\n4. District-level committees\\nWhich are part of NCST's institutional network?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "1 only", "4 only"],
        "correctAnswerIndex": 1,
        "explanation": "NCST coordinates with all levels of tribal governance — from TACs and state commissioners to welfare departments and district committees."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch62-l3-q1",
        "question": "Consider the constitutional framework for tribal protection:\\n1. Article 15(4) — Special provisions for advancement\\n2. Article 16(4) — Reservation in employment\\n3. Article 244 — Administration of Scheduled/Tribal Areas\\n4. Article 275(1) — Special grants for tribal welfare\\n5. Article 338A — NCST\\n6. Article 342 — Specification of Scheduled Tribes\\nWhich constitute the complete constitutional framework?",
        "options": ["1, 2 and 3 only", "1, 2, 3, 4, 5 and 6", "5 and 6 only", "1 and 2 only"],
        "correctAnswerIndex": 1,
        "explanation": "All six articles together form the comprehensive constitutional framework for tribal protection — from affirmative action to governance to institutional oversight."
    },
    {
        "id": "ch62-l3-q2",
        "question": "In Wildlife First v. Ministry of Environment (2019), the Supreme Court initially ordered eviction of tribals whose FRA claims were rejected, but later stayed its own order. This case highlights:",
        "options": ["FRA is unconstitutional", "The tension between forest/wildlife conservation and tribal rights, and the need for proper procedural compliance in rejecting FRA claims", "All tribals should be evicted", "FRA is irrelevant"],
        "correctAnswerIndex": 1,
        "explanation": "This case exposed the conflict between conservation and tribal rights, and highlighted procedural lapses in FRA claim rejection — many claims were rejected without proper process."
    },
    {
        "id": "ch62-l3-q3",
        "question": "Assertion (A): The intersection of extractive industries and tribal rights is a major source of conflict in India.\\nReason (R): Mineral-rich areas often overlap with tribal territories, and mining/industrial projects displace tribal communities without adequate consent, compensation, or rehabilitation.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. States like Jharkhand, Chhattisgarh, and Odisha see significant conflicts between mining interests and tribal land/forest rights."
    },
    {
        "id": "ch62-l3-q4",
        "question": "Statement I: The Sixth Schedule's Autonomous District Councils have exclusive legislative power over certain matters.\\nStatement II: However, any law made by an ADC must receive the assent of the Governor to be effective.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. ADCs have legislative powers on specified subjects, but all laws require the Governor's assent — maintaining a balance between autonomy and state oversight."
    },
    {
        "id": "ch62-l3-q5",
        "question": "The challenges in implementing PESA include:\\n1. Many states have not framed PESA rules\\n2. State laws contradict PESA provisions\\n3. Bureaucratic resistance to empowering Gram Sabhas\\n4. Lack of awareness among tribals about their PESA rights\\nWhich are recognized challenges?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are well-documented PESA implementation challenges — absent rules, conflicting state laws, bureaucratic resistance, and awareness gaps."
    },
    {
        "id": "ch62-l3-q6",
        "question": "In Nandini Sundar v. State of Chhattisgarh (2011), the Supreme Court held:",
        "options": ["Arming tribals for counter-insurgency is constitutional", "The use of tribals as Special Police Officers (Salwa Judum) in anti-Naxal operations violated their fundamental rights — the State cannot use tribal youth against tribal communities", "All tribal movements are illegal", "Counter-insurgency takes priority over tribal rights"],
        "correctAnswerIndex": 1,
        "explanation": "The SC ordered disbandment of Salwa Judum and held that using young tribals as SPOs in counter-insurgency violated their constitutional rights."
    },
    {
        "id": "ch62-l3-q7",
        "question": "Consider the distinction between individual and community forest rights under FRA:\\n1. Individual rights — Right to hold and live in forest land (up to 4 hectares)\\n2. Community rights — Grazing, fishing, access to water bodies\\n3. Community forest resource rights — Right to manage and protect community forests\\n4. Habitat rights — For PVTGs to protect their habitats\\nWhich are correctly stated?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four categories of forest rights exist under FRA — individual (Section 3(1)(a)), community (Section 3(1)(b)-(l)), CFR (Section 3(1)(i)), and PVTG habitat rights (Section 3(1)(e))."
    },
    {
        "id": "ch62-l3-q8",
        "question": "Assertion (A): The concept of Free, Prior, and Informed Consent (FPIC) is increasingly relevant to tribal policy in India.\\nReason (R): International frameworks like UNDRIP (UN Declaration on Rights of Indigenous Peoples) advocate FPIC for all decisions affecting indigenous/tribal communities.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. FPIC is gaining traction in Indian tribal policy, partly reflected in PESA (Gram Sabha consent) and FRA (community participation), aligned with UNDRIP principles."
    },
    {
        "id": "ch62-l3-q9",
        "question": "Statement I: NCST has recommended review of the process for inclusion/exclusion of communities from the ST list.\\nStatement II: The criteria for scheduling tribes (indications of primitive traits, distinctive culture, geographical isolation, shyness of contact, backwardness) were suggested by the Lokur Committee (1965).\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The Lokur Committee's criteria remain the basis for scheduling. NCST has recommended review given changing socio-economic conditions and demands for ST status."
    },
    {
        "id": "ch62-l3-q10",
        "question": "The tension between the Forest Conservation Act, 1980 and the Forest Rights Act, 2006 involves:",
        "options": ["No tension exists", "FCA prioritizes forest conservation and requires central government approval for forest diversion, while FRA recognizes pre-existing rights of tribals — creating potential conflicts in forest governance", "Both acts are identical", "FCA has been repealed"],
        "correctAnswerIndex": 1,
        "explanation": "FCA's conservation focus and central approval requirements can conflict with FRA's recognition of tribal forest rights, creating governance challenges."
    },
    {
        "id": "ch62-l3-q11",
        "question": "In K.S. Puttaswamy v. Union of India (Aadhaar case, 2018), the implications for tribal communities related to:",
        "options": ["No implications", "Concerns about mandatory Aadhaar for accessing welfare schemes — tribals in remote areas face exclusion due to connectivity/biometric issues, potentially denying them benefits", "Only urban tribal issues", "Only property rights"],
        "correctAnswerIndex": 1,
        "explanation": "The Aadhaar-welfare linkage disproportionately affects tribals in remote/forest areas who face connectivity, biometric, and documentation challenges."
    },
    {
        "id": "ch62-l3-q12",
        "question": "NCST's role in conflict areas involving Left-Wing Extremism (LWE) includes:\\n1. Monitoring tribal rights in LWE-affected areas\\n2. Recommending development measures to address root causes\\n3. Investigating excesses against tribals during operations\\n4. Advocating for rehabilitation of surrendered militants\\nWhich are part of NCST's mandate?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "NCST addresses all four aspects — monitoring rights, recommending development, investigating excesses, and advocating rehabilitation in LWE areas."
    },
    {
        "id": "ch62-l3-q13",
        "question": "The Mungekar Committee (2009) recommended regarding PESA implementation:",
        "options": ["PESA should be repealed", "States must complete PESA rules framing, central government should ensure compliance, and Gram Sabhas should be genuinely empowered with control over natural resources", "Only administrative reforms", "Only financial reforms"],
        "correctAnswerIndex": 1,
        "explanation": "The Mungekar Committee highlighted PESA implementation gaps and recommended strict compliance by states, genuine Gram Sabha empowerment, and natural resource control."
    },
    {
        "id": "ch62-l3-q14",
        "question": "Assertion (A): Climate change disproportionately affects tribal communities.\\nReason (R): Tribals depend heavily on forests, agriculture, and natural resources — climate-induced changes in rainfall patterns, forest degradation, and water scarcity directly threaten their livelihoods and food security.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Tribal communities' dependence on natural resources and forest ecosystems makes them highly vulnerable to climate change impacts."
    },
    {
        "id": "ch62-l3-q15",
        "question": "Consider the institutional framework for tribal development:\\n1. NCST — Constitutional oversight\\n2. Ministry of Tribal Affairs — Policy and schemes\\n3. TRIFED — Marketing of tribal products\\n4. State Tribal Welfare Departments — Implementation\\n5. Tribes Advisory Councils — State-level advice\\nWhich constitute the comprehensive framework?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five institutions together form the comprehensive tribal development framework — from constitutional oversight to policy, marketing, implementation, and advisory roles."
    },
    {
        "id": "ch62-l3-q16",
        "question": "Statement I: The SC in Subhash Kashinath Mahajan v. State of Maharashtra (2018) diluted the SC/ST (Prevention of Atrocities) Act provisions.\\nStatement II: Parliament responded by passing the SC/ST (Amendment) Act, 2018 nullifying the SC's direction requiring preliminary inquiry before FIR registration.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The SC's direction for preliminary inquiry was seen as diluting protections. Parliament's amendment restored the original Act's provisions, making it clear that FIR should be registered without preliminary inquiry."
    },
    {
        "id": "ch62-l3-q17",
        "question": "The concept of 'tribal self-rule' as envisioned in PESA includes:\\n1. Gram Sabha as the foundation of governance\\n2. Control over natural resources\\n3. Preservation of traditions and customs\\n4. Regulation of exploitation by outsiders\\nWhich represent the vision?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "PESA's vision encompasses all four — Gram Sabha empowerment, resource control, cultural preservation, and protection from external exploitation."
    },
    {
        "id": "ch62-l3-q18",
        "question": "Assertion (A): The protection of tribal intellectual property and traditional knowledge is an emerging area of concern.\\nReason (R): Biopiracy and unauthorized commercial exploitation of tribal medicinal knowledge and genetic resources threaten tribal communities' rights to their traditional knowledge.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. FRA Section 3(1)(k) recognizes traditional knowledge rights, but enforcement against biopiracy remains challenging."
    },
    {
        "id": "ch62-l3-q19",
        "question": "The SDGs relevant to tribal development include:\\n1. SDG 1 — No Poverty\\n2. SDG 2 — Zero Hunger\\n3. SDG 4 — Quality Education\\n4. SDG 15 — Life on Land (forest rights)\\n5. SDG 10 — Reduced Inequalities\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "4 and 5 only", "1, 3 and 5 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five SDGs are directly relevant to tribal development — poverty reduction, food security, education, forest/land rights, and inequality reduction."
    },
    {
        "id": "ch62-l3-q20",
        "question": "Statement I: The demand to include more communities in the ST list has led to political controversies.\\nStatement II: The inclusion process requires ethnographic survey by the Registrar General, approval by NCST, state government recommendation, and passage of a Presidential Order (modifiable only by Parliament).\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. ST list modification follows a rigorous process, and demands for inclusion (e.g., from various communities) often become politically charged."
    },
    {
        "id": "ch62-l3-q21",
        "question": "In Navtej Singh Johar v. Union of India (2018 — Section 377 case), the broader principle established that applies to tribal rights is:",
        "options": ["No connection to tribal rights", "The constitutional duty to protect vulnerable and marginalized groups' dignity and autonomy — a principle equally applicable to tribals facing discrimination and marginalization", "Only LGBTQ rights were discussed", "Only religious rights"],
        "correctAnswerIndex": 1,
        "explanation": "The case reinforced constitutional protection of marginalized groups' dignity — a principle that strengthens the constitutional mandate for tribal rights protection."
    },
    {
        "id": "ch62-l3-q22",
        "question": "NCST's challenges include:\\n1. Vacancies in Chairperson and member positions\\n2. Inadequate budget and staff\\n3. Recommendations not being accepted by governments\\n4. Limited public awareness about NCST's role\\nWhich are recognized?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are documented challenges that affect NCST's effectiveness — institutional vacancies, resource constraints, ignored recommendations, and awareness gaps."
    },
    {
        "id": "ch62-l3-q23",
        "question": "Assertion (A): TRIFED's 'Go Tribal' campaign promotes tribal products.\\nReason (R): Marketing of tribal products (handicrafts, handlooms, MFP) through TRIFED provides livelihood support and preserves tribal craftsmanship.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. TRIFED's marketing initiatives including Tribes India retail, e-commerce, and Go Tribal campaign promote tribal products while supporting livelihoods."
    },
    {
        "id": "ch62-l3-q24",
        "question": "Consider the multi-layered tribal governance:\\n1. Fifth Schedule — Mainland tribal areas (Governor's powers)\\n2. Sixth Schedule — NE autonomous councils\\n3. PESA — Panchayati Raj extension\\n4. Article 371A-G — Special provisions for NE states\\n5. Inner Line Permit (ILP) — Restricted area entry\\nWhich constitute the comprehensive governance framework?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1, 2 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five layers — Fifth Schedule, Sixth Schedule, PESA, special state provisions, and ILP — together constitute the comprehensive tribal governance framework."
    },
    {
        "id": "ch62-l3-q25",
        "question": "Statement I: The Forest Conservation Rules, 2022 have been criticized for potentially diluting tribal participation in forest governance.\\nStatement II: The rules streamline approval for forest diversion but may reduce the role of Gram Sabhas in forest management decisions.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The 2022 rules have been critiqued for potentially weakening Gram Sabha consent mechanisms established under FRA."
    },
    {
        "id": "ch62-l3-q26",
        "question": "The intersection of tribal rights with Biodiversity Act, 2002 involves:",
        "options": ["No connection", "Recognition of tribal communities' role in biodiversity conservation, benefit-sharing from traditional knowledge, and protection against biopiracy through Biodiversity Management Committees", "Only urban biodiversity", "Only marine biodiversity"],
        "correctAnswerIndex": 1,
        "explanation": "The Biodiversity Act recognizes tribal contributions to conservation, mandates benefit-sharing, and establishes BMCs — intersecting with FRA's traditional knowledge provisions."
    },
    {
        "id": "ch62-l3-q27",
        "question": "Assertion (A): Digital divide disproportionately affects tribal communities.\\nReason (R): Geographical isolation, poor infrastructure, low digital literacy, and inadequate connectivity in tribal areas create barriers to accessing digital services, education, and government schemes.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. COVID-19 highlighted the digital divide's impact on tribal education and access to government services."
    },
    {
        "id": "ch62-l3-q28",
        "question": "Consider the comprehensive tribal welfare scheme portfolio:\\n1. EMRS — Education\\n2. Van Dhan — MFP value addition\\n3. TSP/STC — Budgetary allocation\\n4. MSP for MFP — Fair prices\\n5. PM JANMAN — PVTG development\\nWhich represent the current framework?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1, 2 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five represent the current comprehensive tribal welfare scheme framework covering education, livelihoods, budgetary allocations, fair pricing, and PVTG-specific development."
    },
    {
        "id": "ch62-l3-q29",
        "question": "Statement I: Inner Line Permit (ILP) system protects tribal areas in certain NE states from outside interference.\\nStatement II: ILP is currently applicable in Arunachal Pradesh, Nagaland, Mizoram, and Manipur (added in 2019).\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. ILP restricts entry of outsiders into protected tribal areas. Manipur was added to the ILP regime in 2019."
    },
    {
        "id": "ch62-l3-q30",
        "question": "NCST's evolving role in contemporary issues includes:\\n1. Climate change impact on tribal areas\\n2. Digital inclusion of tribal communities\\n3. Protection against post-COVID vulnerability\\n4. Traditional knowledge preservation in the patent regime\\n5. Balancing development with cultural preservation\\nWhich are part of NCST's expanding mandate?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five represent NCST's expanding mandate in addressing contemporary challenges facing tribal communities in the 21st century."
    }
];

export const CHAPTER_62_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
