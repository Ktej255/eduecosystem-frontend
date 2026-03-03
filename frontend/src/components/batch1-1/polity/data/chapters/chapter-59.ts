import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch59-l1-q1",
        "question": "The National Commission for Women (NCW) was established under:",
        "options": ["The Constitution of India", "National Commission for Women Act, 1990", "Women's Reservation Act, 2023", "Protection of Women from Domestic Violence Act, 2005"],
        "correctAnswerIndex": 1,
        "explanation": "NCW was established as a statutory body under the National Commission for Women Act, 1990. It is not a constitutional body."
    },
    {
        "id": "ch59-l1-q2",
        "question": "The NCW was constituted on:",
        "options": ["26th January 1992", "31st January 1992", "8th March 1990", "15th August 1991"],
        "correctAnswerIndex": 1,
        "explanation": "The NCW was constituted on 31st January 1992 under the NCW Act, 1990."
    },
    {
        "id": "ch59-l1-q3",
        "question": "The NCW consists of how many members including the Chairperson?",
        "options": ["3 members", "5 members", "A Chairperson and 5 members (total 6), plus a Member Secretary", "A Chairperson and 10 members"],
        "correctAnswerIndex": 2,
        "explanation": "Under Section 3, the NCW consists of a Chairperson, 5 members nominated by the Central Government, and a Member Secretary — totaling 7 (including Member Secretary)."
    },
    {
        "id": "ch59-l1-q4",
        "question": "The Chairperson of the NCW is appointed by:",
        "options": ["The President of India", "The Central Government", "The Supreme Court", "The Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "The Chairperson is appointed by the Central Government. She must be a woman committed to the cause of women."
    },
    {
        "id": "ch59-l1-q5",
        "question": "Among the 5 nominated members of the NCW, at least how many must be from Scheduled Castes and Scheduled Tribes?",
        "options": ["None specified", "One member each from SC and ST", "Two from SC only", "Three members from SC/ST combined"],
        "correctAnswerIndex": 1,
        "explanation": "The Act mandates that among the 5 members, at least one shall be from SC and one from ST to ensure representation."
    },
    {
        "id": "ch59-l1-q6",
        "question": "The term of office of the Chairperson and members of the NCW is:",
        "options": ["5 years", "3 years or until the age of 65, whichever is earlier", "6 years", "4 years"],
        "correctAnswerIndex": 1,
        "explanation": "The Chairperson and members hold office for a term of 3 years or until the age of 65, whichever is earlier."
    },
    {
        "id": "ch59-l1-q7",
        "question": "The NCW's primary function includes:",
        "options": ["Framing criminal laws related to women", "Reviewing the constitutional and legal safeguards for women, recommending remedial legislative measures, and facilitating redressal of grievances", "Appointing judges for women-related cases", "Collecting taxes from women entrepreneurs"],
        "correctAnswerIndex": 1,
        "explanation": "Under Section 10, NCW reviews constitutional/legal safeguards for women, recommends legislative measures, advises on policy, and facilitates redressal of women's grievances."
    },
    {
        "id": "ch59-l1-q8",
        "question": "The NCW has the powers of a civil court when investigating complaints. These powers include:",
        "options": ["Power to arrest offenders", "Power to summon and enforce attendance of any person, require discovery and production of documents, receive evidence on affidavit, and issue commissions for examination of witnesses", "Power to impose imprisonment", "Power to pass final judicial decrees"],
        "correctAnswerIndex": 1,
        "explanation": "Under Section 10(4), the NCW has powers of a civil court for the purpose of investigating complaints — summoning witnesses, requiring document production, receiving affidavits, etc."
    },
    {
        "id": "ch59-l1-q9",
        "question": "Which of the following is NOT a function of the NCW?",
        "options": ["Inspecting jails and institutions where women are kept as prisoners/detainees", "Reviewing existing legislation affecting women", "Directly prosecuting offenders in criminal courts", "Looking into complaints relating to deprivation of women's rights"],
        "correctAnswerIndex": 2,
        "explanation": "NCW does not have prosecutorial powers. It reviews legislation, inspects institutions, looks into complaints, and makes recommendations, but cannot directly prosecute."
    },
    {
        "id": "ch59-l1-q10",
        "question": "The NCW submits its annual report to:",
        "options": ["The Supreme Court", "The Central Government, which lays it before each House of Parliament", "The State Governments", "The NHRC"],
        "correctAnswerIndex": 1,
        "explanation": "Under Section 13, the NCW prepares an annual report and forwards it to the Central Government, which causes it to be laid before each House of Parliament."
    },
    {
        "id": "ch59-l1-q11",
        "question": "The recommendation to establish a National Commission for Women was first made by the:",
        "options": ["Ashok Mehta Committee", "Committee on the Status of Women in India (CSWI), 1974 — popularly known as the 'Towards Equality' report", "Sarkaria Commission", "Law Commission of India"],
        "correctAnswerIndex": 1,
        "explanation": "The CSWI (1974), which produced the landmark 'Towards Equality' report, first recommended establishing a National Commission for Women."
    },
    {
        "id": "ch59-l1-q12",
        "question": "The NCW can take up cases suo motu (on its own) when:",
        "options": ["Never — it can only act on complaints", "When it notices issues requiring action for women's rights, even without a specific complaint", "Only when directed by the Supreme Court", "Only when directed by the Central Government"],
        "correctAnswerIndex": 1,
        "explanation": "Section 10(1)(f) empowers the NCW to take suo motu notice of matters relating to deprivation of women's rights and take up issues with appropriate authorities."
    },
    {
        "id": "ch59-l1-q13",
        "question": "The NCW can intervene in court proceedings involving women's issues by:",
        "options": ["Filing an appeal as a party", "Seeking leave of the court to intervene in proceedings involving issues of women's rights", "Issuing writs to courts", "Overruling court decisions"],
        "correctAnswerIndex": 1,
        "explanation": "The NCW can seek the court's permission to intervene in proceedings concerning women's rights issues."
    },
    {
        "id": "ch59-l1-q14",
        "question": "The Member Secretary of the NCW is:",
        "options": ["Elected by Parliament", "Nominated by the Central Government and must be an expert in the field of management, law, or social work", "Appointed by the Chairperson alone", "A retired Supreme Court Judge"],
        "correctAnswerIndex": 1,
        "explanation": "The Member Secretary is nominated by the Central Government and must possess relevant expertise in management, organizational capacity, or social work."
    },
    {
        "id": "ch59-l1-q15",
        "question": "The NCW handles complaints related to which of the following?",
        "options": ["Only dowry-related cases", "Domestic violence, harassment at workplace, dowry, rape, gender discrimination, and any deprivation of women's rights", "Only trafficking cases", "Only property disputes involving women"],
        "correctAnswerIndex": 1,
        "explanation": "NCW handles a wide range of complaints including domestic violence, workplace harassment, dowry, sexual offences, gender discrimination, and any matter involving deprivation of women's rights."
    },
    {
        "id": "ch59-l1-q16",
        "question": "The NCW has played a key role in reviewing which of the following legislation?",
        "options": ["Goods and Services Tax Act", "Dowry Prohibition Act, Indian Penal Code (sections related to women), Hindu Succession Act, and related gender-specific laws", "Income Tax Act", "Competition Act"],
        "correctAnswerIndex": 1,
        "explanation": "NCW has reviewed multiple women-centric legislation including the Dowry Prohibition Act, IPC provisions on crimes against women, Hindu Succession Act amendments, and protective legislation."
    },
    {
        "id": "ch59-l1-q17",
        "question": "The Central Government can remove the Chairperson or a member of NCW if they:",
        "options": ["Win an election", "Are adjudged insolvent, convicted of an offence involving moral turpitude, are of unsound mind, or refuse to act or become incapable of acting", "Disagree with government policy", "Complete 2 years of term"],
        "correctAnswerIndex": 1,
        "explanation": "Section 5 prescribes grounds for removal: insolvency, conviction for moral turpitude, unsound mind, refusal or incapacity to act, or absence from three consecutive meetings without permission."
    },
    {
        "id": "ch59-l1-q18",
        "question": "The NCW's complaint handling process includes:",
        "options": ["Only informal counseling", "Receiving complaints, conducting inquiries, providing counseling, referring to police/legal aid, and recommending action to appropriate authorities", "Directly sentencing offenders", "Only publishing reports"],
        "correctAnswerIndex": 1,
        "explanation": "NCW's complaint process involves registration, preliminary inquiry, investigation, counseling, legal assistance, references to police or other authorities, and follow-up until resolution."
    },
    {
        "id": "ch59-l1-q19",
        "question": "The NCW has set up the online complaint management system called:",
        "options": ["SCORE (Standing Committee on Reforms)", "Online Complaint Registration System linked to the NCW portal", "NFHS Portal", "NSSO Portal"],
        "correctAnswerIndex": 1,
        "explanation": "NCW has an online complaint management system on its portal where women can register complaints related to violence, discrimination, and rights violations."
    },
    {
        "id": "ch59-l1-q20",
        "question": "The Protection of Women from Domestic Violence Act, 2005, which the NCW helped advocate for, provides:",
        "options": ["Only criminal punishment", "Civil remedies including protection orders, residence orders, monetary relief, and custody orders for women facing domestic violence", "Only divorce proceedings", "Free housing for all women"],
        "correctAnswerIndex": 1,
        "explanation": "The Act provides comprehensive civil remedies — protection orders, residence orders, monetary relief, custody orders, and compensation — making it a crucial tool for women facing domestic violence."
    },
    {
        "id": "ch59-l1-q21",
        "question": "The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 was enacted following the Supreme Court guidelines in:",
        "options": ["Bhanwari Devi case — Vishaka v. State of Rajasthan (1997)", "Indra Sawhney v. Union of India (1992)", "Maneka Gandhi v. Union of India (1978)", "Mary Roy v. State of Kerala (1986)"],
        "correctAnswerIndex": 0,
        "explanation": "The Vishaka guidelines (1997), prompted by the Bhanwari Devi case, laid down guidelines for preventing sexual harassment at the workplace, which were later codified into the 2013 Act."
    },
    {
        "id": "ch59-l1-q22",
        "question": "State Women's Commissions are established under:",
        "options": ["The Constitution", "Respective state legislation", "NCW Act, 1990", "NHRC Act, 1993"],
        "correctAnswerIndex": 1,
        "explanation": "State Women's Commissions are established under respective state laws, not under the NCW Act. Each state has its own legislation for this purpose."
    },
    {
        "id": "ch59-l1-q23",
        "question": "The NCW can investigate matters relating to which constitutional provisions?",
        "options": ["Only Article 14", "Constitutional safeguards provided under Articles 14, 15, 15(3), 16, 39(a), 39(d), and 42", "Only DPSP provisions", "Only Fundamental Rights under Part III"],
        "correctAnswerIndex": 1,
        "explanation": "NCW reviews safeguards under Article 14 (equality), 15 (non-discrimination, special provisions for women — 15(3)), 16 (equal opportunity), 39(a)(d) (equal means of livelihood, equal pay), and 42 (maternity relief)."
    },
    {
        "id": "ch59-l1-q24",
        "question": "The Mahila Shakti Kendra scheme is associated with:",
        "options": ["NCW exclusively", "Ministry of Women and Child Development for women's empowerment at the community level", "Ministry of Labour", "Ministry of Education"],
        "correctAnswerIndex": 1,
        "explanation": "Mahila Shakti Kendra is a Government of India scheme under the Ministry of Women and Child Development aimed at empowering rural women through community participation."
    },
    {
        "id": "ch59-l1-q25",
        "question": "The NCW's 'Legal Awareness Programme' aims to:",
        "options": ["Train police officers only", "Educate women about their legal rights, available remedies, and protection mechanisms", "Recruit women lawyers", "Operate legal clinics in courts"],
        "correctAnswerIndex": 1,
        "explanation": "NCW's Legal Awareness Programme conducts workshops and awareness campaigns to educate women about their legal rights, protective laws, and available redressal mechanisms."
    },
    {
        "id": "ch59-l1-q26",
        "question": "Which Article of the Indian Constitution specifically empowers the State to make special provisions for women?",
        "options": ["Article 14", "Article 15(3)", "Article 19", "Article 25"],
        "correctAnswerIndex": 1,
        "explanation": "Article 15(3) specifically states: 'Nothing in this Article shall prevent the State from making any special provision for women and children.' This enables affirmative action for women."
    },
    {
        "id": "ch59-l1-q27",
        "question": "The NCW's role in the review of Personal Laws affecting women includes:",
        "options": ["Directly amending personal laws", "Examining discriminatory provisions in personal laws and recommending amendments to ensure gender justice", "Enforcing uniform civil code", "Abolishing all personal laws"],
        "correctAnswerIndex": 1,
        "explanation": "NCW examines personal laws across religions for provisions that discriminate against women and recommends reforms to ensure gender equality within those legal frameworks."
    },
    {
        "id": "ch59-l1-q28",
        "question": "The NCW is headquartered at:",
        "options": ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
        "correctAnswerIndex": 2,
        "explanation": "The NCW is headquartered in New Delhi."
    },
    {
        "id": "ch59-l1-q29",
        "question": "The concept of 'Gender Budgeting' that the NCW promotes refers to:",
        "options": ["A separate budget for women only", "Analyzing government budgets to assess their differential impact on women and men, and ensuring adequate allocation for women's empowerment", "Reducing government spending on women", "Tax exemptions for women only"],
        "correctAnswerIndex": 1,
        "explanation": "Gender budgeting is a tool to analyze the impact of budget allocations on women and men, ensuring that government programs adequately address gender-specific needs and promote women's empowerment."
    },
    {
        "id": "ch59-l1-q30",
        "question": "The 'One Stop Centre' scheme for women in distress operates under:",
        "options": ["NCW directly", "Ministry of Women and Child Development (funded under Nirbhaya Fund)", "Ministry of Home Affairs", "Ministry of Social Justice"],
        "correctAnswerIndex": 1,
        "explanation": "One Stop Centres (Sakhi Centres) are established under the Ministry of Women and Child Development, funded through the Nirbhaya Fund, providing integrated support to women facing violence."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch59-l2-q1",
        "question": "Consider the following statements about the NCW:\\n1. It is a constitutional body established under Article 338.\\n2. It is a statutory body established under the NCW Act, 1990.\\n3. It has the powers of a civil court for investigation purposes.\\nWhich of the above is/are correct?",
        "options": ["1 and 3 only", "2 and 3 only", "1, 2 and 3", "2 only"],
        "correctAnswerIndex": 1,
        "explanation": "Statements 2 and 3 are correct. Statement 1 is incorrect — NCW is a statutory body (not constitutional like NCSC under Art 338). It has civil court powers for summoning, examining witnesses, and documents."
    },
    {
        "id": "ch59-l2-q2",
        "question": "Assertion (A): The NCW is not a constitutional body.\\nReason (R): Unlike the National Commission for SCs (Article 338) and STs (Article 338A), the NCW derives its authority from a parliamentary statute, not from the Constitution.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. The NCW is statutory (NCW Act, 1990), distinguishing it from constitutional commissions like NCSC (338) and NCST (338A) which have constitutional status."
    },
    {
        "id": "ch59-l2-q3",
        "question": "The NCW's recommendations are:",
        "options": ["Legally binding on the government and courts", "Advisory in nature — the government is not legally bound to accept them, though it must consider them and lay the report before Parliament", "Binding only on State Governments", "Enforceable as court decrees"],
        "correctAnswerIndex": 1,
        "explanation": "NCW's recommendations are advisory. While the government must lay the annual report before Parliament with an action-taken memorandum, it is not legally bound to implement all recommendations."
    },
    {
        "id": "ch59-l2-q4",
        "question": "Compare the NCW with the NHRC:\\n1. Both are statutory bodies.\\n2. NHRC is headed by a retired CJI; NCW is headed by a government-appointed Chairperson.\\n3. Both have the powers of a civil court for investigation.\\n4. NHRC can deal with human rights violations generally; NCW focuses specifically on women's rights.\\nWhich of the above are correct?",
        "options": ["1, 3 and 4 only", "1, 2, 3 and 4", "2 and 4 only", "1 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are correct. Both are statutory, both have civil court powers, NHRC is headed by a retired CJI while NCW has a government-appointed Chairperson, and they differ in scope (general vs women-specific)."
    },
    {
        "id": "ch59-l2-q5",
        "question": "Which of the following constitutional provisions relate to gender equality and women's rights?\\n1. Article 14 — Equality before law\\n2. Article 15(1) — Prohibition of discrimination on grounds of sex\\n3. Article 15(3) — Special provisions for women and children\\n4. Article 16 — Equal opportunity in public employment\\n5. Article 42 — Just and humane conditions of work and maternity relief\\nSelect the correct answer:",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "1, 2 and 3 only", "3 and 5 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five provisions form the constitutional framework for gender equality: equality before law (14), non-discrimination (15(1)), special provisions for women (15(3)), equal employment opportunity (16), and maternity relief (42)."
    },
    {
        "id": "ch59-l2-q6",
        "question": "The NCW's role in the formulation of the Criminal Law (Amendment) Act, 2013 (post-Nirbhaya amendments) included:",
        "options": ["No involvement at all", "Reviewing existing laws, recommending expanded definitions of sexual offences, stricter punishments, and new offences like stalking and voyeurism", "Opposing all amendments", "Only monitoring implementation"],
        "correctAnswerIndex": 1,
        "explanation": "NCW actively contributed to the post-Nirbhaya law reform by recommending broader definitions, recognition of new offences (stalking, voyeurism, acid attacks), and stricter penalties."
    },
    {
        "id": "ch59-l2-q7",
        "question": "Statement I: The NCW can investigate police refusal to register FIRs in cases of violence against women.\\nStatement II: The NCW can direct the police to register FIRs.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both statements are incorrect"],
        "correctAnswerIndex": 1,
        "explanation": "Statement I is correct — NCW can investigate police inaction. Statement II is incorrect — NCW can recommend, request, and highlight such cases but cannot legally 'direct' police to register FIRs."
    },
    {
        "id": "ch59-l2-q8",
        "question": "The NCW's interaction with the judiciary includes:\\n1. Intervening in court proceedings with the court's permission.\\n2. Filing PILs on women's issues.\\n3. Recommending judicial reforms for gender-sensitive adjudication.\\nWhich of the above is/are correct?",
        "options": ["1 and 3 only", "1, 2 and 3", "1 only", "2 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All three are correct. NCW can intervene in court proceedings, file/support PILs on women's issues, and recommend judicial reforms for gender sensitivity."
    },
    {
        "id": "ch59-l2-q9",
        "question": "Under the NCW Act, the Commission can look into complaints related to:",
        "options": ["Only criminal offences against women", "Deprivation of women's rights under any law, non-implementation of protective legislation, and non-compliance of policy decisions aimed at women's welfare", "Only matrimonial disputes", "Only workplace harassment"],
        "correctAnswerIndex": 1,
        "explanation": "Section 10(1)(f) gives NCW broad jurisdiction — deprivation of rights, non-implementation of laws, non-compliance with policies, and any matter adversely affecting women."
    },
    {
        "id": "ch59-l2-q10",
        "question": "The NCW collaborates with which international bodies on women's rights?",
        "options": ["Only the World Bank", "UN Women, CEDAW Committee, and other international organizations working on gender equality", "Only the WTO", "Only NATO"],
        "correctAnswerIndex": 1,
        "explanation": "NCW collaborates with UN Women and monitors India's compliance with CEDAW (Convention on the Elimination of All Forms of Discrimination Against Women)."
    },
    {
        "id": "ch59-l2-q11",
        "question": "The NCW has been instrumental in advocating reforms in which of the following areas?\\n1. Inheritance rights for women\\n2. Triple talaq\\n3. Acid attack victim compensation\\n4. Trafficking prevention\\nSelect the correct answer:",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "NCW has advocated reforms in all these areas — equal inheritance rights, opposition to triple talaq, compensation for acid attack victims, and anti-trafficking measures."
    },
    {
        "id": "ch59-l2-q12",
        "question": "Assertion (A): The NCW has recommended strengthening Section 498A IPC (cruelty by husband/relatives) despite criticisms of misuse.\\nReason (R): The NCW maintains that the provision remains necessary to protect married women from domestic cruelty, while also recommending safeguards against misuse.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. NCW has taken the balanced position that 498A is essential for women's protection while acknowledging the need for safeguards against misuse."
    },
    {
        "id": "ch59-l2-q13",
        "question": "The NCW's Parivarik Mahila Lok Adalat is:",
        "options": ["A regular court for family disputes", "A special forum organized by NCW in collaboration with Legal Services Authorities for pre-litigation settlement of family disputes affecting women", "A government tribunal", "An international arbitration forum"],
        "correctAnswerIndex": 1,
        "explanation": "Parivarik Mahila Lok Adalats are special initiatives of NCW organized with NALSA/SLSAs for amicable resolution of family disputes (maintenance, custody, domestic violence) before they reach courts."
    },
    {
        "id": "ch59-l2-q14",
        "question": "The difference between the NCW and the State Women's Commissions is:\\n1. NCW is a statutory body under a central Act; State Commissions are under respective state Acts.\\n2. NCW advises the Central Government; State Commissions advise State Governments.\\n3. State Commissions are constitutionally mandated.\\nWhich of the above is/are correct?",
        "options": ["1 and 2 only", "1, 2 and 3", "1 only", "3 only"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect — State Women's Commissions are also statutory (under state laws), not constitutionally mandated."
    },
    {
        "id": "ch59-l2-q15",
        "question": "In Vishaka v. State of Rajasthan (1997), the Supreme Court issued guidelines for prevention of sexual harassment at the workplace. The NCW's role in the subsequent Act (2013) was:",
        "options": ["No role at all", "Active participation in reviewing the Vishaka guidelines and recommending comprehensive legislation that eventually became the Sexual Harassment of Women at Workplace Act, 2013", "Opposing the legislation", "Only enforcing the 1997 guidelines"],
        "correctAnswerIndex": 1,
        "explanation": "NCW played a key role in advocating for comprehensive legislation beyond the Vishaka guidelines, contributing to the formulation of the Sexual Harassment of Women at Workplace Act, 2013."
    },
    {
        "id": "ch59-l2-q16",
        "question": "The NCW's 'Gender Sensitization' programs target:",
        "options": ["Only women", "Police, judiciary, government officials, educational institutions, and the general public to create awareness about gender equality and women's rights", "Only school children", "Only male offenders"],
        "correctAnswerIndex": 1,
        "explanation": "Gender sensitization programs target multiple stakeholders — police, judiciary, bureaucracy, educational institutions, and the general public — to create a more gender-sensitive society."
    },
    {
        "id": "ch59-l2-q17",
        "question": "The NCW's involvement in the Triple Talaq case (Shayara Bano v. Union of India, 2017) demonstrated:",
        "options": ["NCW opposed the judgment", "NCW's active role in supporting the petition and advocating for the constitutional rights of Muslim women against the practice of instant triple talaq", "NCW had no involvement", "NCW supported triple talaq"],
        "correctAnswerIndex": 1,
        "explanation": "NCW actively supported the legal challenge to instant triple talaq, advocating for constitutional rights of Muslim women. The SC declared instant triple talaq unconstitutional."
    },
    {
        "id": "ch59-l2-q18",
        "question": "Under the NCW Act, the Central Government must present the NCW's annual report to Parliament along with:",
        "options": ["Nothing additional", "A memorandum of action taken on the recommendations and reasons for non-acceptance of any recommendations", "A legal opinion from the Attorney General", "Approval from the Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Section 13(2) requires the Central Government to cause the annual report to be laid before Parliament with a memorandum of action taken and reasons for non-acceptance of any recommendations."
    },
    {
        "id": "ch59-l2-q19",
        "question": "The NCW's complaint resolution mechanism includes which of the following?\\n1. Direct resolution through counseling and mediation\\n2. Referral to police for FIR registration\\n3. Referral to Legal Services Authority for legal aid\\n4. Writing to concerned authorities for corrective action\\nSelect the correct answer:",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "2 and 3 only", "4 only"],
        "correctAnswerIndex": 1,
        "explanation": "NCW uses all four approaches in its complaint resolution: direct counseling/mediation, police referrals, legal aid referrals, and writing to authorities — depending on the nature and severity of the complaint."
    },
    {
        "id": "ch59-l2-q20",
        "question": "The Hindu Succession (Amendment) Act, 2005, which the NCW advocated for, provided:",
        "options": ["No change for women", "Equal coparcenary rights to daughters in joint Hindu family property, making them coparceners by birth just like sons", "Only inheritance rights for widows", "Property rights only in urban areas"],
        "correctAnswerIndex": 1,
        "explanation": "The 2005 amendment gave daughters equal coparcenary rights by birth in joint Hindu family property — a landmark reform that NCW strongly advocated for."
    },
    {
        "id": "ch59-l2-q21",
        "question": "The Women's Reservation Act (Constitution 106th Amendment Act, 2023) provides for:",
        "options": ["50% reservation for women in all government jobs", "Reservation of not less than one-third seats for women in Lok Sabha and State Legislative Assemblies", "100% women judges in all courts", "Reservation only in Rajya Sabha"],
        "correctAnswerIndex": 1,
        "explanation": "The 106th Amendment reserves at least one-third seats for women in Lok Sabha and State Legislative Assemblies (Articles 330A and 332A), effective after delimitation and census."
    },
    {
        "id": "ch59-l2-q22",
        "question": "The NCW's investigation into the conditions of women in custody includes:",
        "options": ["Only visiting jails", "Inspecting jails, remand homes, protective homes, and institutions where women are kept in custody, and reporting conditions to the government with recommendations", "Only conducting surveys", "Only publishing statistics"],
        "correctAnswerIndex": 1,
        "explanation": "Under Section 10(1)(g), NCW inspects institutions housing women detainees/prisoners and reports on conditions including facilities, treatment, and compliance with legal standards."
    },
    {
        "id": "ch59-l2-q23",
        "question": "Assertion (A): The NCW has been criticized for being a 'toothless body.'\\nReason (R): The NCW's recommendations are advisory, it lacks prosecutorial powers, and the appointment process is perceived as politically influenced.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. Common criticisms include advisory-only powers (no binding authority), lack of prosecutorial capacity, and political influence in appointments."
    },
    {
        "id": "ch59-l2-q24",
        "question": "The NCW's role during the COVID-19 pandemic included:",
        "options": ["No action was taken", "Active monitoring of increased domestic violence cases, setting up emergency helplines, coordinating with police for rescue operations, and advocating for policy measures", "Only publishing research papers", "Closing all operations during lockdown"],
        "correctAnswerIndex": 1,
        "explanation": "During COVID-19, NCW saw a spike in domestic violence complaints and responded with enhanced helplines, social media complaint channels, police coordination, and policy advocacy."
    },
    {
        "id": "ch59-l2-q25",
        "question": "CEDAW (Convention on the Elimination of All Forms of Discrimination Against Women), which India ratified in 1993, requires countries to:",
        "options": ["Only submit annual reports", "Take all appropriate measures to eliminate discrimination against women in all fields — political, economic, social, cultural, and civil", "Only protect women in employment", "Focus only on political rights"],
        "correctAnswerIndex": 1,
        "explanation": "CEDAW requires comprehensive action to eliminate discrimination against women in all spheres. NCW monitors and advises on India's compliance with CEDAW obligations."
    },
    {
        "id": "ch59-l2-q26",
        "question": "The Nirbhaya Fund was established to:",
        "options": ["Build women's sports facilities", "Support initiatives for women's safety including One Stop Centres, Women Helplines, Safe City Projects, and Emergency Response Systems", "Provide scholarships for women in STEM", "Fund women's political campaigns"],
        "correctAnswerIndex": 1,
        "explanation": "The Nirbhaya Fund (Rs. 1,000 crore corpus) was established in 2013 to support projects enhancing women's safety and empowerment, including Sakhi Centres, helplines, and safe city initiatives."
    },
    {
        "id": "ch59-l2-q27",
        "question": "The NCW's 'Complaint and Investigation Cell' handles complaints through:",
        "options": ["Only postal mail", "Post, email, online portal, and in-person visits", "Only phone calls", "Only through court referrals"],
        "correctAnswerIndex": 1,
        "explanation": "The Complaint and Investigation Cell accepts complaints through multiple channels — postal mail, email, online registration on NCW portal, and in-person visits — ensuring accessibility."
    },
    {
        "id": "ch59-l2-q28",
        "question": "The Immoral Traffic (Prevention) Act, 1956 (ITPA), which is relevant to NCW's anti-trafficking work, provides for:",
        "options": ["Legalization of all sex work", "Prevention and punishment of trafficking in persons, particularly women and children, and rescue and rehabilitation of victims", "Only international trafficking prevention", "Regulation of the tourism industry"],
        "correctAnswerIndex": 1,
        "explanation": "ITPA criminalizes trafficking and sexual exploitation, provides for rescue operations, and mandates rehabilitation of victims. NCW plays a role in monitoring and advocating for better implementation."
    },
    {
        "id": "ch59-l2-q29",
        "question": "Which of the following schemes launched by the Government, informed by NCW's recommendations, aim at women's empowerment?\\n1. Beti Bachao, Beti Padhao\\n2. Ujjwala Scheme (anti-trafficking)\\n3. Mahila E-Haat (online marketing for women entrepreneurs)\\n4. Working Women's Hostel Scheme\\nSelect the correct answer:",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are government schemes aimed at women's empowerment: Beti Bachao Beti Padhao (girl child), Ujjwala (anti-trafficking), Mahila E-Haat (entrepreneurship), and Working Women's Hostels (working women)."
    },
    {
        "id": "ch59-l2-q30",
        "question": "The NCW's power to 'call for information/report from the Central Government or any State Government' demonstrates:",
        "options": ["NCW has sovereign authority over governments", "NCW's advisory and monitoring function — it can seek information to review compliance with women's rights provisions and protective legislation", "NCW can override government decisions", "NCW can withhold government funds"],
        "correctAnswerIndex": 1,
        "explanation": "This power reinforces NCW's monitoring and advisory role — enabling it to gather information from governments to assess compliance with laws and policies relating to women."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch59-l3-q1",
        "question": "Consider the following commissions and their nature:\\n1. National Commission for SCs — Constitutional (Article 338)\\n2. National Commission for STs — Constitutional (Article 338A)\\n3. National Commission for Women — Statutory (NCW Act, 1990)\\n4. National Commission for Minorities — Statutory (NCM Act, 1992)\\n5. National Human Rights Commission — Statutory (PHR Act, 1993)\\nWhich of the above are correctly matched?",
        "options": ["1, 2 and 3 only", "1, 2, 3, 4 and 5", "1 and 2 only", "3, 4 and 5 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five are correctly matched. NCSC and NCST are constitutional; NCW, NCM, and NHRC are statutory. This distinction affects their powers, independence, and constitutional protection."
    },
    {
        "id": "ch59-l3-q2",
        "question": "Assertion (A): The demand to make NCW a constitutional body has been raised repeatedly.\\nReason (R): Constitutional status would give NCW greater independence from the executive, similar to the NCSC and NCST, and make its recommendations more authoritative.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. Constitutional status would provide NCW independence in appointments, remove executive control, and give its recommendations greater weight."
    },
    {
        "id": "ch59-l3-q3",
        "question": "Statement I: The NCW's effectiveness is limited by its advisory nature and dependence on the executive for appointments and funding.\\nStatement II: The NHRC, though also statutory, has greater operational independence due to its broader mandate and higher-level leadership (retired CJI as Chairperson).\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both statements are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both are correct. NCW's advisory-only nature and executive-controlled appointments limit its effectiveness. NHRC's structure (retired CJI, broader mandate) provides relatively greater operational independence."
    },
    {
        "id": "ch59-l3-q4",
        "question": "Consider the following landmark Supreme Court judgments that impacted women's rights and NCW's advocacy:\\n1. Vishaka v. State of Rajasthan (1997) — Sexual harassment guidelines\\n2. Shayara Bano v. Union of India (2017) — Triple talaq\\n3. Joseph Shine v. Union of India (2018) — Decriminalization of adultery (Section 497)\\n4. Navtej Singh Johar v. Union of India (2018) — Section 377\\nWhich of the above directly relate to women's rights?",
        "options": ["1 and 2 only", "1, 2 and 3", "All four", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "Statements 1, 2, and 3 directly relate to women's rights: Vishaka (workplace harassment), Shayara Bano (Muslim women's rights), and Joseph Shine (women's equality — SC held adultery law discriminated against women). Navtej Johar (Section 377) primarily deals with LGBTQ+ rights."
    },
    {
        "id": "ch59-l3-q5",
        "question": "The NCW has recommended reforms in the Dowry Prohibition Act, 1961, including:\\n1. Increasing minimum punishment for dowry harassment.\\n2. Shifting burden of proof to the accused in dowry death cases.\\n3. Defining 'dowry' more comprehensively to include gifts given willingly.\\nWhich of the above is/are correctly attributed to NCW's recommendations?",
        "options": ["1 and 2 only", "1 only", "All three are correct", "1 and 3 only"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are NCW recommendations. Statement 3 is incorrect — NCW has recommended defining 'dowry' more precisely to EXCLUDE willing gifts, as including them would make the law unworkable."
    },
    {
        "id": "ch59-l3-q6",
        "question": "In the context of women's political representation, compare the following provisions:\\n1. 73rd and 74th Amendments — One-third reservation for women in Panchayats and Municipalities\\n2. 106th Amendment — One-third reservation in Lok Sabha and State Assemblies (after delimitation)\\n3. NCW recommendation — 50% reservation for women at all levels\\nWhich of the above are currently part of the Constitution?",
        "options": ["1 and 2 only", "1 only", "1, 2 and 3", "All three"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are constitutional provisions. Statement 3 is NCW's recommendation which has not been adopted constitutionally. The 106th Amendment is part of the Constitution but awaits implementation."
    },
    {
        "id": "ch59-l3-q7",
        "question": "The NCW's effectiveness in protecting women's rights can be evaluated along multiple dimensions. Which of the following are recognized limitations?\\n1. Advisory recommendations without binding power\\n2. Government control over appointments affecting independence\\n3. Limited budget and human resources\\n4. No power to directly prosecute offenders\\nSelect the correct answer:",
        "options": ["1 and 2 only", "1, 2 and 4 only", "1, 2, 3 and 4", "3 and 4 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four are recognized limitations that have been highlighted by civil society, academics, and NCW's own reports as impediments to its effectiveness."
    },
    {
        "id": "ch59-l3-q8",
        "question": "Assertion (A): India has ratified CEDAW but with certain reservations.\\nReason (R): India reserved its position on Articles 5(a) (modifying social and cultural patterns) and 16(1) (marriage and family relations equality) citing personal laws and cultural practices.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. India ratified CEDAW in 1993 with reservations on Articles 5(a) and 16(1), citing diversity of personal laws. The NCW has recommended review of these reservations."
    },
    {
        "id": "ch59-l3-q9",
        "question": "Consider the timeline of women-centric legislation in India:\\n1. Hindu Succession Act, 1956 (amended 2005)\\n2. Dowry Prohibition Act, 1961\\n3. NCW Act, 1990\\n4. Protection of Women from Domestic Violence Act, 2005\\n5. Sexual Harassment of Women at Workplace Act, 2013\\n6. Criminal Law (Amendment) Act, 2013 (post-Nirbhaya)\\nThe correct chronological order is:",
        "options": ["1 → 2 → 3 → 4 → 5 → 6", "2 → 1 → 3 → 4 → 6 → 5", "1 → 2 → 3 → 5 → 4 → 6", "3 → 1 → 2 → 4 → 5 → 6"],
        "correctAnswerIndex": 0,
        "explanation": "Correct order: Hindu Succession Act (1956) → Dowry Prohibition (1961) → NCW Act (1990) → DV Act & Hindu Succession Amendment (2005) → SH at Workplace Act & Criminal Law Amendment (2013)."
    },
    {
        "id": "ch59-l3-q10",
        "question": "Statement I: The NCW can recommend to the government that a particular legislation be enacted or amended.\\nStatement II: The NCW can draft legislation and introduce it in Parliament.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both statements are incorrect"],
        "correctAnswerIndex": 1,
        "explanation": "Statement I is correct — recommending legislation is a core function. Statement II is incorrect — NCW cannot introduce bills in Parliament; only the government or a Member of Parliament can do so."
    },
    {
        "id": "ch59-l3-q11",
        "question": "The intersection of gender and caste in NCW's mandate means:\\n1. NCW must address concerns specific to Dalit women who face double discrimination.\\n2. The mandatory SC/ST representation on the Commission ensures this perspective.\\n3. NCW has taken up cases of atrocities against Dalit women specifically.\\nWhich of the above are correct?",
        "options": ["1 and 2 only", "1, 2 and 3", "1 only", "2 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All three are correct. NCW's mandate necessarily intersects with caste-based discrimination (intersectionality). The mandated SC/ST representation and specific case interventions reflect this."
    },
    {
        "id": "ch59-l3-q12",
        "question": "The NCW's 'SHe-Box' (Sexual Harassment electronic Box) is:\\nA. An online complaint management system for reporting sexual harassment at the workplace\\nB. Managed by the Ministry of Women and Child Development\\nC. Connected to both the employer and the concerned Local Complaints Committee\\nSelect the correct answer:",
        "options": ["Only A is correct", "A and B only", "A, B and C", "A and C only"],
        "correctAnswerIndex": 2,
        "explanation": "All three are correct. SHe-Box is an online platform for workplace sexual harassment complaints, managed by MoWCD, and connects complaints to both the employer's ICC and relevant LCC."
    },
    {
        "id": "ch59-l3-q13",
        "question": "Consider the following about the impact of the Hindu Succession (Amendment) Act, 2005 on women's property rights:\\n1. Daughters became coparceners in joint Hindu family property by birth.\\n2. The Supreme Court in Vineeta Sharma v. Rakesh Sharma (2020) held these rights apply even if the father died before 2005.\\n3. The amendment applies only to Hindu Undivided Family (HUF) property.\\nWhich of the above are correct?",
        "options": ["1 and 2 only", "1, 2 and 3", "1 only", "1 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All three are correct. The 2005 amendment gave daughters equal coparcenary rights, Vineeta Sharma (2020) established retrospective application, and it primarily impacts HUF/Mitakshara coparcenary property."
    },
    {
        "id": "ch59-l3-q14",
        "question": "The NCW has recommended reforms for which DPSP Articles relevant to women?\\n1. Article 39(a) — Equal right to adequate means of livelihood for men and women\\n2. Article 39(d) — Equal pay for equal work for men and women\\n3. Article 42 — Just and humane conditions of work, maternity relief\\n4. Article 44 — Uniform Civil Code\\nSelect the correct answer:",
        "options": ["1, 2 and 3 only", "1, 2, 3 and 4", "1 and 2 only", "4 only"],
        "correctAnswerIndex": 1,
        "explanation": "NCW has advocated for implementation of all four: equal livelihood (39a), equal pay (39d), maternity benefits (42), and aspects of UCC (44) that promote gender equality across religions."
    },
    {
        "id": "ch59-l3-q15",
        "question": "In the case of Mary Roy v. State of Kerala (1986), the Supreme Court held:",
        "options": ["Women have no inheritance rights", "Syrian Christian women in Kerala are entitled to equal inheritance with male heirs under the Indian Succession Act, striking down the discriminatory Travancore Christian Succession Act", "Only Hindu women have inheritance rights", "Inheritance rights depend on state legislation only"],
        "correctAnswerIndex": 1,
        "explanation": "This landmark judgment gave Syrian Christian women equal inheritance rights, striking down discriminatory customary law. It exemplified the judicial push for gender equality that NCW supports."
    },
    {
        "id": "ch59-l3-q16",
        "question": "Assertion (A): The NCW's mandate extends to examining the intersection of women's rights with emerging issues like cyber crimes, online harassment, and digital exploitation.\\nReason (R): The broad language of Section 10 of the NCW Act, which covers 'deprivation of women's rights' and 'non-implementation of laws,' allows NCW to address contemporary challenges not specifically enumerated in the Act.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. The broad mandate language enables NCW to address new-age challenges like cyber harassment, revenge pornography, and digital stalking."
    },
    {
        "id": "ch59-l3-q17",
        "question": "Consider the following about the Protection of Women from Domestic Violence Act, 2005:\\n1. It provides only civil remedies, not criminal punishment.\\n2. An 'aggrieved person' includes any woman living in a domestic relationship.\\n3. 'Domestic violence' includes physical, sexual, verbal, emotional, and economic abuse.\\n4. Protection Officers are appointed under the Act.\\nWhich of the above are correct?",
        "options": ["1, 2 and 3 only", "2, 3 and 4 only", "1, 2, 3 and 4", "1 and 3 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four are correct. The DV Act provides civil remedies (not criminal), covers women in domestic relationships, defines violence broadly (five types), and mandates Protection Officers."
    },
    {
        "id": "ch59-l3-q18",
        "question": "Statement I: The NCW has advocated for gender-responsive budgeting across all ministries.\\nStatement II: India introduced Gender Budget Statement in the Union Budget from 2005-06 onwards.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both statements are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both statements are correct. NCW has been a strong advocate for gender budgeting, and India introduced the Gender Budget Statement from 2005-06, classifying schemes into women-specific and pro-women categories."
    },
    {
        "id": "ch59-l3-q19",
        "question": "The NCW's critique of the 'two-finger test' in rape cases demonstrates:",
        "options": ["NCW's support for outdated medical practices", "NCW's role in advocating for scientific, gender-sensitive, and constitutionally compliant investigation procedures in sexual assault cases", "NCW's indifference to medical reform", "NCW's focus only on legislative changes"],
        "correctAnswerIndex": 1,
        "explanation": "NCW opposed the two-finger test as unscientific, violative of dignity, and inconsistent with SC guidelines (Lillu v. State of Haryana, 2013). This demonstrates NCW's role in reforming investigation practices."
    },
    {
        "id": "ch59-l3-q20",
        "question": "Assertion (A): NCW's recommendations have contributed to several legislative reforms in India.\\nReason (R): Major legislation like the DV Act 2005, SH at Workplace Act 2013, Criminal Law Amendment Act 2013, and Hindu Succession Amendment Act 2005 were all influenced by NCW's advocacy.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. NCW's sustained advocacy contributed to multiple landmark legislative reforms that strengthened women's legal protections."
    },
    {
        "id": "ch59-l3-q21",
        "question": "Consider the following proposals to strengthen the NCW:\\n1. Grant constitutional status equivalent to NCSC/NCST.\\n2. Ensure financial independence through a dedicated constitutional fund.\\n3. Make recommendations binding on the government.\\n4. Ensure transparent, non-political appointment process.\\nWhich of the above have been recommended by various expert committees and civil society?",
        "options": ["1 and 4 only", "1, 2, 3 and 4", "1 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four reforms have been recommended by various stakeholders — constitutional status, financial independence, binding recommendations, and depoliticized appointments — to make NCW more effective."
    },
    {
        "id": "ch59-l3-q22",
        "question": "The NCW's role in monitoring the implementation of the POCSO (Protection of Children from Sexual Offences) Act, 2012 involves:",
        "options": ["No role — only NCPCR handles this", "Monitoring in conjunction with NCPCR when victims are girl children, as NCW's mandate covers women and girls", "Only prosecuting offenders under POCSO", "Only conducting sensitization for judges"],
        "correctAnswerIndex": 1,
        "explanation": "While NCPCR is the primary body for child protection, NCW has overlapping jurisdiction for girl children and works in coordination with NCPCR on POCSO implementation."
    },
    {
        "id": "ch59-l3-q23",
        "question": "In Anuj Garg v. Hotel Association of India (2008), the Supreme Court held regarding protective discrimination for women:",
        "options": ["All protective laws for women are unconstitutional", "Paternalistic laws that restrict women's employment rights (like banning women from working in bars under Punjab Excise Act) are unconstitutional as they reinforce gender stereotypes rather than empowering women", "Women cannot work in hospitality", "Only Constitutional Amendments can change such laws"],
        "correctAnswerIndex": 1,
        "explanation": "The SC struck down the restriction on women working in bars, holding it paternalistic and violative of Articles 14, 15, and 19. This aligned with NCW's position against regressive 'protective' restrictions."
    },
    {
        "id": "ch59-l3-q24",
        "question": "The NCW's engagement with the Uniform Civil Code (Article 44) debate involves:",
        "options": ["NCW has taken no position", "NCW has recommended examining discriminatory provisions in personal laws across all religions to ensure gender justice, without necessarily advocating a single uniform code", "NCW has demanded immediate implementation of UCC", "NCW has opposed any reform of personal laws"],
        "correctAnswerIndex": 1,
        "explanation": "NCW's nuanced position focuses on identifying and reforming gender-discriminatory provisions within each community's personal laws, broadly supporting the spirit of gender equality underlying UCC."
    },
    {
        "id": "ch59-l3-q25",
        "question": "Consider the following about the Maternity Benefit (Amendment) Act, 2017:\\n1. Increased paid maternity leave from 12 weeks to 26 weeks for the first two children.\\n2. Mandated creche facility in establishments with 50+ employees.\\n3. Allows 'work from home' option after the maternity leave period.\\nWhich of the above are provisions of this Act?",
        "options": ["1 only", "1 and 2 only", "1, 2 and 3", "1 and 3 only"],
        "correctAnswerIndex": 2,
        "explanation": "All three are provisions of the 2017 amendment — 26 weeks leave, mandatory creche, and work-from-home option — reflecting NCW-supported reforms for working mothers."
    },
    {
        "id": "ch59-l3-q26",
        "question": "Statement I: The NCW has advocated for mandatory gender-sensitivity training for police personnel handling cases of violence against women.\\nStatement II: The Criminal Law (Amendment) Act, 2013 mandated woman officers to record statements of female victims of sexual offences.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both statements are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both are correct. NCW has pushed for police sensitization, and the 2013 amendment mandated that statements of female sexual assault victims be recorded by a woman police officer."
    },
    {
        "id": "ch59-l3-q27",
        "question": "The NCW's initiatives for women's financial inclusion align with which Sustainable Development Goal (SDG)?",
        "options": ["SDG 1 (No Poverty) only", "SDG 5 (Gender Equality) primarily, along with SDG 1 (No Poverty), SDG 8 (Decent Work), and SDG 10 (Reduced Inequalities)", "SDG 13 (Climate Action)", "SDG 15 (Life on Land)"],
        "correctAnswerIndex": 1,
        "explanation": "NCW's financial inclusion work aligns primarily with SDG 5 (Gender Equality) and intersects with SDG 1 (poverty), SDG 8 (economic growth/decent work), and SDG 10 (reducing inequalities)."
    },
    {
        "id": "ch59-l3-q28",
        "question": "Assertion (A): The number of complaints received by NCW has been steadily increasing over the years.\\nReason (R): Greater awareness, digital accessibility (online complaints), and increased public attention to women's issues have contributed to higher complaint volumes.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct with R explaining A. The increase in complaints reflects greater awareness, easier access through digital platforms, and increased social consciousness, not necessarily an increase in violation rates."
    },
    {
        "id": "ch59-l3-q29",
        "question": "The NCW's recommendations regarding the Uniform Personal Laws vs. Reform of Personal Laws debate have focused on:\\n1. Ensuring equal property rights for women across all religions.\\n2. Eliminating discriminatory divorce practices.\\n3. Ensuring equal guardianship and custody rights.\\n4. Mandating equal maintenance rights.\\nWhich of the above have been part of NCW's advocacy?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "NCW has advocated for all four reforms across personal laws — equal property rights, non-discriminatory divorce, equal guardianship, and equal maintenance — regardless of religion."
    },
    {
        "id": "ch59-l3-q30",
        "question": "Consider the comprehensive ecosystem for women's protection in India:\\n1. Legal framework — DV Act, SH Act, CrLA 2013, POCSO\\n2. Institutional framework — NCW, State Women's Commissions, CCPCR\\n3. Administrative framework — One Stop Centres, Women Helplines, SHe-Box\\n4. Judicial framework — Family Courts, Fast Track Special Courts\\nWhich components correctly represent this ecosystem?",
        "options": ["1 and 2 only", "1, 2 and 3 only", "1, 2, 3 and 4", "3 and 4 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four represent the comprehensive ecosystem: legal (protective laws), institutional (commissions), administrative (helplines, support centres), and judicial (specialized courts). NCW plays a connecting role across all."
    }
];

export const CHAPTER_59_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
