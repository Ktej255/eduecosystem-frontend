import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch61-l1-q1",
        "question": "The National Commission for Minorities (NCM) was established under:",
        "options": ["The Constitution of India", "National Commission for Minorities Act, 1992", "Minorities Protection Act, 1978", "42nd Constitutional Amendment"],
        "correctAnswerIndex": 1,
        "explanation": "NCM was established as a statutory body under the National Commission for Minorities Act, 1992."
    },
    {
        "id": "ch61-l1-q2",
        "question": "Before the NCM Act 1992, a Minorities Commission was set up in:",
        "options": ["1975", "1978", "1950", "1985"],
        "correctAnswerIndex": 1,
        "explanation": "A non-statutory Minorities Commission was set up by a Government resolution in 1978. It was given statutory status through the NCM Act, 1992."
    },
    {
        "id": "ch61-l1-q3",
        "question": "Which of the following communities are notified as minorities under the NCM Act?",
        "options": ["Only Muslims and Christians", "Muslims, Christians, Sikhs, Buddhists, Zoroastrians (Parsis), and Jains", "Only Sikhs and Buddhists", "All communities except Hindus"],
        "correctAnswerIndex": 1,
        "explanation": "Six communities are notified as minorities: Muslims, Christians, Sikhs, Buddhists, Zoroastrians (Parsis), and Jains (Jains added in 2014)."
    },
    {
        "id": "ch61-l1-q4",
        "question": "The NCM consists of:",
        "options": ["A Chairperson and 3 members", "A Chairperson, a Vice-Chairperson, and 5 members (total 7)", "A Chairperson and 10 members", "Only a Chairperson"],
        "correctAnswerIndex": 1,
        "explanation": "Under Section 3, NCM has a Chairperson, a Vice-Chairperson, and 5 members, all nominated by the Central Government."
    },
    {
        "id": "ch61-l1-q5",
        "question": "The Chairperson of NCM is appointed by:",
        "options": ["The President of India", "The Central Government", "The Supreme Court", "The Parliament"],
        "correctAnswerIndex": 1,
        "explanation": "The Chairperson is nominated by the Central Government from amongst persons belonging to a minority community."
    },
    {
        "id": "ch61-l1-q6",
        "question": "The term of office of the Chairperson and members of NCM is:",
        "options": ["5 years", "3 years", "6 years", "4 years"],
        "correctAnswerIndex": 1,
        "explanation": "Members hold office for 3 years from the date of assumption of charge."
    },
    {
        "id": "ch61-l1-q7",
        "question": "Among the 7 members of NCM (including Chairperson and Vice-Chairperson), at least how many must belong to minority communities?",
        "options": ["None", "Five members shall be from minority communities", "All seven", "Only the Chairperson"],
        "correctAnswerIndex": 1,
        "explanation": "The Act provides that 5 members (including Chairperson) shall be from minority communities, with each of the notified minorities getting at least one representation."
    },
    {
        "id": "ch61-l1-q8",
        "question": "The primary functions of NCM include:",
        "options": ["Only conducting research", "Evaluating the progress of development of minorities, monitoring safeguards provided by the Constitution and laws, looking into complaints of deprivation of rights", "Only settling disputes between communities", "Only advising on foreign policy"],
        "correctAnswerIndex": 1,
        "explanation": "Section 9 lists functions: evaluating minority development, monitoring safeguards, looking into complaints, studying/recommending on socio-economic and educational development."
    },
    {
        "id": "ch61-l1-q9",
        "question": "Article 29 of the Constitution provides:",
        "options": ["Right to freedom of religion only", "Protection of interests of minorities — any section of citizens having a distinct language, script, or culture has the right to conserve the same", "Right to equality only", "Right against exploitation only"],
        "correctAnswerIndex": 1,
        "explanation": "Article 29(1) protects the cultural and linguistic rights of minorities. Article 29(2) prohibits denial of admission to educational institutions on grounds of religion, race, caste, or language."
    },
    {
        "id": "ch61-l1-q10",
        "question": "Article 30 of the Constitution provides:",
        "options": ["Right to education for all", "Right of all minorities, whether based on religion or language, to establish and administer educational institutions of their choice", "Right to property only", "Right to vote only"],
        "correctAnswerIndex": 1,
        "explanation": "Article 30(1) gives linguistic and religious minorities the right to establish and administer educational institutions. 30(1A) ensures fair compensation for acquisition."
    },
    {
        "id": "ch61-l1-q11",
        "question": "NCM submits its annual report to:",
        "options": ["The Supreme Court", "The Central Government, which lays it before Parliament", "State Governments", "The NHRC"],
        "correctAnswerIndex": 1,
        "explanation": "NCM submits annual reports to the Central Government which presents them to Parliament with an action-taken memorandum."
    },
    {
        "id": "ch61-l1-q12",
        "question": "The NCM has the powers of a civil court for:",
        "options": ["Sentencing offenders", "Summoning witnesses, requiring document production, receiving evidence on affidavit", "Imposing imprisonment", "Passing final decrees"],
        "correctAnswerIndex": 1,
        "explanation": "Section 9(5) grants NCM powers of a civil court for inquiry purposes — summoning, document production, and affidavit evidence."
    },
    {
        "id": "ch61-l1-q13",
        "question": "Article 25 of the Constitution guarantees:",
        "options": ["Right to property", "Freedom of conscience and the right to freely profess, practise, and propagate religion", "Right to education", "Right to form associations"],
        "correctAnswerIndex": 1,
        "explanation": "Article 25 guarantees freedom of conscience and the right to freely profess, practise, and propagate religion, subject to public order, morality, and health."
    },
    {
        "id": "ch61-l1-q14",
        "question": "Article 26 of the Constitution provides religious denominations the right to:",
        "options": ["Only worship", "Establish and maintain institutions for religious and charitable purposes, manage their own affairs in matters of religion, own and acquire property", "Only build temples", "Only collect donations"],
        "correctAnswerIndex": 1,
        "explanation": "Article 26 gives religious denominations rights to establish institutions, manage religious affairs, own property, and administer property in accordance with law."
    },
    {
        "id": "ch61-l1-q15",
        "question": "The Prime Minister's 15-Point Programme for the Welfare of Minorities covers:",
        "options": ["Only employment", "Enhancing opportunities in education, equitable share in economic activities and employment, prevention of communal incidents, and improving living conditions", "Only religious matters", "Only housing"],
        "correctAnswerIndex": 1,
        "explanation": "The 15-Point Programme is a comprehensive framework covering education, economic advancement, employment, communal harmony, and improvement of living conditions for minorities."
    },
    {
        "id": "ch61-l1-q16",
        "question": "NCM is headquartered at:",
        "options": ["Mumbai", "Kolkata", "New Delhi", "Hyderabad"],
        "correctAnswerIndex": 2,
        "explanation": "NCM is headquartered in New Delhi."
    },
    {
        "id": "ch61-l1-q17",
        "question": "The NCM can take up cases suo motu when:",
        "options": ["Never", "When it notices issues relating to minorities requiring action, even without a complaint", "Only when directed by the PM", "Only when directed by courts"],
        "correctAnswerIndex": 1,
        "explanation": "NCM can take suo motu notice of matters relating to minority rights that have not been referred to it and initiate inquiries."
    },
    {
        "id": "ch61-l1-q18",
        "question": "Article 350A of the Constitution provides for:",
        "options": ["Right to vote for minorities", "Facilities for instruction in mother tongue at the primary stage of education for children belonging to linguistic minority groups", "Reservation in employment", "Special police protection for minorities"],
        "correctAnswerIndex": 1,
        "explanation": "Article 350A directs every State and local authority to provide adequate facilities for instruction in the mother tongue at the primary education stage for linguistic minority children."
    },
    {
        "id": "ch61-l1-q19",
        "question": "Article 350B provides for:",
        "options": ["A Commission for Religious Minorities", "A Special Officer for Linguistic Minorities to investigate matters relating to linguistic safeguards", "A National Human Rights Commission", "A Commission for SC/ST"],
        "correctAnswerIndex": 1,
        "explanation": "Article 350B provides for a Special Officer for Linguistic Minorities (Commissioner for Linguistic Minorities) appointed by the President to investigate safeguard-related matters."
    },
    {
        "id": "ch61-l1-q20",
        "question": "The Sachar Committee (2005) was appointed to examine:",
        "options": ["Economic status of all Indians", "The social, economic, and educational status of the Muslim community in India", "Defence preparedness", "Electoral reforms"],
        "correctAnswerIndex": 1,
        "explanation": "The Sachar Committee, chaired by Justice Rajinder Sachar, was constituted to study the social, economic, and educational conditions of Muslims in India."
    },
    {
        "id": "ch61-l1-q21",
        "question": "The Ministry responsible for minority affairs in India is:",
        "options": ["Ministry of Home Affairs", "Ministry of Minority Affairs", "Ministry of Social Justice and Empowerment", "Ministry of Law and Justice"],
        "correctAnswerIndex": 1,
        "explanation": "The Ministry of Minority Affairs (established in 2006) is the nodal ministry for formulation and implementation of policies for minorities."
    },
    {
        "id": "ch61-l1-q22",
        "question": "Jains were notified as a minority community at the national level in:",
        "options": ["1992", "2000", "2014", "2019"],
        "correctAnswerIndex": 2,
        "explanation": "Jains were notified as a minority community at the national level in 2014 by the Central Government."
    },
    {
        "id": "ch61-l1-q23",
        "question": "The MSDP (Multi-Sectoral Development Programme) for minorities focuses on:",
        "options": ["Only religious infrastructure", "Development of socio-economic and basic amenities infrastructure in identified minority concentration areas", "Only employment generation", "Only educational institutions"],
        "correctAnswerIndex": 1,
        "explanation": "MSDP targets improvement of socio-economic conditions including education, health, irrigation, skill development, and infrastructure in areas with substantial minority population."
    },
    {
        "id": "ch61-l1-q24",
        "question": "NCM's complaint-handling mechanism includes:",
        "options": ["Only postal complaints", "Written complaints, online registration, and in-person visits for issues like discrimination, communal incidents, and rights violations", "Only court referrals", "Only telephone complaints"],
        "correctAnswerIndex": 1,
        "explanation": "NCM accepts complaints through multiple channels — written, online, and in-person — covering discrimination, communal violence, and rights violations."
    },
    {
        "id": "ch61-l1-q25",
        "question": "The Places of Worship (Special Provisions) Act, 1991 provides:",
        "options": ["Freedom to convert places of worship", "The religious character of a place of worship as it existed on 15th August 1947 shall be maintained, prohibiting conversion", "Special protection only for Hindu temples", "Only demolition orders"],
        "correctAnswerIndex": 1,
        "explanation": "The Act prohibits conversion of any place of worship and maintains their religious character as on Independence Day (excluding the Ram Janmabhoomi dispute)."
    },
    {
        "id": "ch61-l1-q26",
        "question": "Article 28 of the Constitution provides regarding religious instruction:",
        "options": ["Compulsory religious instruction in all schools", "No religious instruction in fully State-funded institutions; optional in aided institutions with freedom to not attend", "Religious instruction only in minority institutions", "Ban on all religious teaching"],
        "correctAnswerIndex": 1,
        "explanation": "Article 28 prohibits religious instruction in fully State-funded institutions while allowing it in aided institutions with the option for students to not participate."
    },
    {
        "id": "ch61-l1-q27",
        "question": "The Maulana Azad Education Foundation (MAEF) provides:",
        "options": ["Only employment", "Educational support including scholarships and grants for educationally backward minorities", "Military training", "Only housing support"],
        "correctAnswerIndex": 1,
        "explanation": "MAEF focuses on educational upliftment of minorities through scholarships, grants for constructing schools, and other educational support programs."
    },
    {
        "id": "ch61-l1-q28",
        "question": "State Minorities Commissions are established under:",
        "options": ["The Constitution", "Respective state legislation", "NCM Act, 1992", "NHRC Act, 1993"],
        "correctAnswerIndex": 1,
        "explanation": "State Minorities Commissions are established under respective state laws, independent of the NCM Act."
    },
    {
        "id": "ch61-l1-q29",
        "question": "The definition of 'minority' in India is determined by:",
        "options": ["The Constitution provides a clear definition", "The Central Government through notification under Section 2(c) of the NCM Act — based on religion at the national level", "The Supreme Court only", "State Governments only"],
        "correctAnswerIndex": 1,
        "explanation": "Section 2(c) of the NCM Act empowers the Central Government to notify minority communities. Six communities are currently notified at the national level."
    },
    {
        "id": "ch61-l1-q30",
        "question": "NCM can recommend measures for effective implementation of:",
        "options": ["Only Constitution provisions", "Safeguards for minorities provided in the Constitution, laws enacted by Parliament and State Legislatures, and government policies", "Only central government orders", "Only judicial orders"],
        "correctAnswerIndex": 1,
        "explanation": "NCM monitors and recommends on all safeguards — constitutional, legislative, and policy-based — for the protection of minority rights."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch61-l2-q1",
        "question": "Consider the following about NCM:\\n1. It is a constitutional body like the NCSC.\\n2. It is a statutory body under the NCM Act, 1992.\\n3. It monitors safeguards for minorities under the Constitution.\\n4. It has civil court powers for investigation.\\nWhich are correct?",
        "options": ["1, 3 and 4 only", "2, 3 and 4 only", "1, 2, 3 and 4", "2 only"],
        "correctAnswerIndex": 1,
        "explanation": "Statements 2, 3, and 4 are correct. Statement 1 is incorrect — NCM is statutory (NCM Act, 1992), not constitutional."
    },
    {
        "id": "ch61-l2-q2",
        "question": "Assertion (A): Articles 29 and 30 form the core of minority rights in the Constitution.\\nReason (R): Article 29 protects cultural rights while Article 30 guarantees educational rights of minorities.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Article 29 (cultural/linguistic conservation) and Article 30 (right to establish/administer educational institutions) together form the constitutional core of minority rights."
    },
    {
        "id": "ch61-l2-q3",
        "question": "In TMA Pai Foundation v. State of Karnataka (2002), the Supreme Court held regarding minority educational institutions:",
        "options": ["Minorities have no educational rights", "The minority status of an institution must be determined State-wise for linguistic minorities and nationwide for religious minorities", "All educational institutions are minorities", "Only government institutions can be minority institutions"],
        "correctAnswerIndex": 1,
        "explanation": "The 11-judge bench held that minority status for linguistic minorities is determined at the state level, while for religious minorities it is determined at the national level."
    },
    {
        "id": "ch61-l2-q4",
        "question": "Statement I: The Constitution does not define the term 'minority.'\\nStatement II: The Supreme Court in TMA Pai Foundation used a quantitative criterion (numerical inferiority) to determine minority status.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The Constitution uses the term 'minority' without defining it. The SC applied numerical inferiority as the determinant."
    },
    {
        "id": "ch61-l2-q5",
        "question": "Match the following constitutional provisions with their subject:\\nA. Article 25 → Freedom of religion\\nB. Article 26 → Rights of religious denominations\\nC. Article 29 → Protection of interests of minorities\\nD. Article 30 → Right to establish educational institutions\\nWhich are correctly matched?",
        "options": ["All four are correctly matched", "Only A and B", "Only C and D", "Only A, B, and C"],
        "correctAnswerIndex": 0,
        "explanation": "All four are correctly matched: 25 (individual religious freedom), 26 (denominational rights), 29 (cultural conservation), 30 (educational institutions)."
    },
    {
        "id": "ch61-l2-q6",
        "question": "The Sachar Committee Report (2006) revealed which significant findings about the Muslim community?\\n1. Educational backwardness\\n2. Under-representation in government employment\\n3. Poor access to banking and credit\\n4. High rate of poverty\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "The Sachar Committee documented all four deficits — educational backwardness, under-representation in employment, poor banking access, and high poverty rates among Muslims."
    },
    {
        "id": "ch61-l2-q7",
        "question": "The NCM's recommendations are:",
        "options": ["Legally binding on the government", "Advisory in nature — the government must consider them and present the annual report to Parliament with an action-taken memorandum", "Binding on courts", "Enforceable as court orders"],
        "correctAnswerIndex": 1,
        "explanation": "NCM's recommendations are advisory. The government must consider them and explain its response when presenting the annual report to Parliament."
    },
    {
        "id": "ch61-l2-q8",
        "question": "Assertion (A): NCM has been criticized for being ineffective in preventing communal violence.\\nReason (R): NCM lacks enforcement powers and cannot hold perpetrators accountable — it can only investigate, recommend, and advise.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. NCM's purely advisory and investigative role without enforcement powers limits its effectiveness in preventing communal violence."
    },
    {
        "id": "ch61-l2-q9",
        "question": "The Ranganath Misra Commission (2004-2007) recommended:",
        "options": ["Abolition of reservations", "10% reservation for Muslims and 5% for other minorities in education and government employment", "Reservation only for SC/ST", "No reservation for any community"],
        "correctAnswerIndex": 1,
        "explanation": "The Ranganath Misra Commission recommended reservations for religious minorities (10% for Muslims, 5% for others), but these recommendations were not implemented."
    },
    {
        "id": "ch61-l2-q10",
        "question": "In S.P. Mittal v. Union of India (1983), the Supreme Court examined:",
        "options": ["Minority educational rights", "Whether the Auroville Foundation was a religious minority — the SC clarified that a minority must be numerically less than 50% of the total population", "Section 377 of IPC", "Article 370"],
        "correctAnswerIndex": 1,
        "explanation": "The SC clarified that a 'minority' denotes a community that is numerically less than 50% of the total population."
    },
    {
        "id": "ch61-l2-q11",
        "question": "NCM has functioned in monitoring which of the following government schemes for minorities?\\n1. Scholarship schemes (pre-matric, post-matric, merit-cum-means)\\n2. Maulana Azad National Fellowship\\n3. Nai Roshni (for minority women)\\n4. USTTAD (Upgrading Skills and Training in Traditional Arts/Crafts)\\nSelect the correct answer:",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "NCM monitors all major minority welfare schemes including scholarships, fellowships, women's empowerment, and skill development programs."
    },
    {
        "id": "ch61-l2-q12",
        "question": "Statement I: The Commissioner for Linguistic Minorities (Article 350B) is different from the NCM.\\nStatement II: The CLM focuses specifically on linguistic safeguards while NCM covers broader minority protection.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. CLM (constitutional) focuses on linguistic minorities' safeguards, while NCM (statutory) covers broader religious minority protection."
    },
    {
        "id": "ch61-l2-q13",
        "question": "The 103rd Constitutional Amendment Act (2019) providing 10% EWS reservation and its impact on minorities includes:",
        "options": ["It specifically targets minorities", "It provides reservation based on economic criteria across religions but its impact on minorities lies in potentially benefiting economically weaker sections within minority communities", "It abolishes all minority rights", "It only benefits majority communities"],
        "correctAnswerIndex": 1,
        "explanation": "The EWS quota benefits economically weaker sections across religions, including minorities, but is not minority-specific. NCM monitors its impact on minority communities."
    },
    {
        "id": "ch61-l2-q14",
        "question": "In St. Stephen's College v. University of Delhi (1992), the Supreme Court held regarding minority institutions:",
        "options": ["Minority institutions cannot admit any outsiders", "Minority institutions can reserve up to 50% seats for their community, but must admit on merit for the remaining seats", "100% seats must be open to all", "All seats can be reserved for minorities"],
        "correctAnswerIndex": 1,
        "explanation": "The SC held that aided minority institutions may reserve up to 50% for their community, balancing minority rights with the broader public interest."
    },
    {
        "id": "ch61-l2-q15",
        "question": "Waqf properties are administered by:",
        "options": ["NCM directly", "State Waqf Boards under the Waqf Act, 1995 (amended 2013), with the Central Waqf Council at the national level", "Ministry of Home Affairs", "The Supreme Court"],
        "correctAnswerIndex": 1,
        "explanation": "Waqf properties are managed by State Waqf Boards under the Waqf Act, with the Central Waqf Council providing oversight. NCM may review related issues."
    },
    {
        "id": "ch61-l2-q16",
        "question": "The difference between Articles 25/26 (religious freedom) and Articles 29/30 (minority rights) is:",
        "options": ["They are identical", "25/26 are available to ALL persons/denominations regardless of majority/minority status; 29/30 are specifically for minorities (linguistic and religious)", "25/26 are for minorities only", "29/30 are for all citizens"],
        "correctAnswerIndex": 1,
        "explanation": "Articles 25-26 guarantee religious freedom to all individuals and denominations. Articles 29-30 are specifically for minority protection — cultural conservation and educational rights."
    },
    {
        "id": "ch61-l2-q17",
        "question": "NCM's role in monitoring communal incidents includes:\\n1. Investigating communal violence cases\\n2. Recommending relief and rehabilitation\\n3. Advising on measures to promote communal harmony\\n4. Directly prosecuting offenders\\nWhich are correct?",
        "options": ["1, 2 and 3 only", "1, 2, 3 and 4", "1 only", "4 only"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1, 2, and 3 are correct. Statement 4 is incorrect — NCM cannot directly prosecute, only recommend action."
    },
    {
        "id": "ch61-l2-q18",
        "question": "Assertion (A): The question of who constitutes a minority has been a subject of debate in India.\\nReason (R): The Constitution does not define 'minority' and Hindus constitute a majority nationally but may be minorities in certain states.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The absence of a constitutional definition and the possibility of majority communities being state-level minorities creates complexity in minority identification."
    },
    {
        "id": "ch61-l2-q19",
        "question": "The National Minorities Development and Finance Corporation (NMDFC) provides:",
        "options": ["Only grants to minorities", "Concessional finance to socio-economically backward sections of notified minorities for self-employment ventures and income-generating activities", "Only scholarships", "Only housing loans"],
        "correctAnswerIndex": 1,
        "explanation": "NMDFC provides concessional loans through state channelizing agencies to minorities below the double of the poverty line for self-employment and skill development."
    },
    {
        "id": "ch61-l2-q20",
        "question": "In Bal Patil v. Union of India (2005), the Supreme Court dealt with:",
        "options": ["Muslim reservation", "The petition by Jains for minority status — the SC held that the Central Government has the authority to notify minority communities", "Christian minority institutions", "Sikh Gurdwara management"],
        "correctAnswerIndex": 1,
        "explanation": "The SC upheld the government's authority under the NCM Act to notify religious communities as minorities. Jains were subsequently notified in 2014."
    },
    {
        "id": "ch61-l2-q21",
        "question": "The Kundu Committee (2014) was established to:",
        "options": ["Review NCM's functioning", "Evaluate the implementation and impact of the Sachar Committee recommendations", "Study electoral reforms", "Review banking sector"],
        "correctAnswerIndex": 1,
        "explanation": "The Kundu Committee assessed the implementation of Sachar Committee recommendations and found significant gaps in achieving the targets set for Muslim welfare."
    },
    {
        "id": "ch61-l2-q22",
        "question": "NCM's functions under Section 9 of the Act include:\\n1. Evaluating progress of minorities' development\\n2. Making recommendations for removal of difficulties\\n3. Suggesting measures for economic and educational development\\n4. Looking into specific complaints regarding deprivation of rights\\nSelect the correct answer:",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are functions under Section 9 — evaluation, recommendation, suggestion of measures, and complaint investigation."
    },
    {
        "id": "ch61-l2-q23",
        "question": "Statement I: Linguistic minorities are protected by the Commissioner for Linguistic Minorities (Art 350B).\\nStatement II: Religious minorities are protected by the NCM under the NCM Act, 1992.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Linguistic minorities have the CLM (constitutional office), while religious minorities have the NCM (statutory body) — separate institutional mechanisms."
    },
    {
        "id": "ch61-l2-q24",
        "question": "The National Commission for Religious and Linguistic Minorities (Ranganath Misra Commission) recommended regarding minority identification:",
        "options": ["No changes needed", "An 11-member statutory body should be set up to determine minority status at both national and state levels", "Only international bodies should decide", "Only the Supreme Court should decide"],
        "correctAnswerIndex": 1,
        "explanation": "The Commission recommended a permanent body for determining minority status at national and state levels, recognizing that minority identification is context-dependent."
    },
    {
        "id": "ch61-l2-q25",
        "question": "The scholarship schemes for minorities administered by the Ministry of Minority Affairs include:\\n1. Pre-Matric Scholarship\\n2. Post-Matric Scholarship\\n3. Merit-cum-Means Based Scholarship\\n4. Maulana Azad National Fellowship for higher studies\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four scholarship schemes exist for minority communities at various educational levels — from pre-matric to doctoral research."
    },
    {
        "id": "ch61-l2-q26",
        "question": "In Pramati Educational and Cultural Trust v. Union of India (2014), the Supreme Court held regarding RTE Act and minority institutions:",
        "options": ["RTE Act applies equally to minority institutions", "RTE Act provisions including the 25% reservation under Section 12(1)(c) do not apply to minority institutions as it would violate Article 30(1) rights", "All minority institutions must close", "Only aided minority institutions are covered by RTE"],
        "correctAnswerIndex": 1,
        "explanation": "The SC held that imposing RTE obligations (including 25% reservation) on minority institutions would infringe their Article 30 rights. The 93rd Amendment (Article 15(5)) was struck down to that extent."
    },
    {
        "id": "ch61-l2-q27",
        "question": "NCM has recommended reforms in which area to prevent radicalization and promote communal harmony?",
        "options": ["Only defence policy", "Educational reforms including common curricula promoting national integration, community policing, and interfaith dialogue initiatives", "Only foreign policy changes", "Only economic reforms"],
        "correctAnswerIndex": 1,
        "explanation": "NCM has recommended educational reforms, community policing, interfaith dialogue, and media sensitivity to prevent radicalization and promote communal harmony."
    },
    {
        "id": "ch61-l2-q28",
        "question": "The 'Gharib Nawaz Skill Development Centres' scheme aims to:",
        "options": ["Build mosques", "Provide short-term job-oriented skill development courses for minorities of below poverty line, especially in traditional skills and modern trades", "Provide military training", "Build hospitals only"],
        "correctAnswerIndex": 1,
        "explanation": "These centres provide skill development training targeting BPL minority communities, linked to employment and entrepreneurship opportunities."
    },
    {
        "id": "ch61-l2-q29",
        "question": "Assertion (A): The Central Government has the power to designate minority communities at the national level.\\nReason (R): This power is derived from Section 2(c) of the NCM Act, 1992.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Section 2(c) gives the Central Government power to notify communities as minorities for the purposes of the Act."
    },
    {
        "id": "ch61-l2-q30",
        "question": "NCM's interaction with State Minorities Commissions involves:",
        "options": ["No interaction", "Coordination on minority welfare, sharing best practices, monitoring implementation of schemes, and addressing complaints that span state boundaries", "NCM controls State Commissions", "State Commissions report directly to NCM"],
        "correctAnswerIndex": 1,
        "explanation": "While NCM doesn't administratively control State Commissions (which are under state laws), they coordinate on shared objectives of minority welfare and rights protection."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch61-l3-q1",
        "question": "Consider the constitutional framework for minority rights:\\n1. Article 14 — Equality before law\\n2. Article 15(1) — Non-discrimination on grounds of religion\\n3. Article 25-28 — Freedom of religion\\n4. Article 29-30 — Cultural and educational rights\\n5. Article 350A-B — Linguistic minority protection\\nWhich form the complete constitutional framework for minorities?",
        "options": ["1, 2 and 3 only", "3 and 4 only", "1, 2, 3, 4 and 5", "4 and 5 only"],
        "correctAnswerIndex": 2,
        "explanation": "All five constitute the comprehensive constitutional framework for minority protection — from equality to religious freedom to cultural/educational rights to linguistic safeguards."
    },
    {
        "id": "ch61-l3-q2",
        "question": "In TMA Pai Foundation v. State of Karnataka (2002), the 11-judge bench held:\\n1. Minority is determined by State for linguistic minorities.\\n2. Minority is determined nationally for religious minorities.\\n3. Article 30 includes the right to choose the medium of instruction.\\n4. Aided minority institutions can have reasonable regulations imposed.\\nWhich are correct?",
        "options": ["1, 2 and 3 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four: linguistic minorities at state level, religious nationally, medium of instruction as part of Art 30, and reasonable regulations on aided institutions."
    },
    {
        "id": "ch61-l3-q3",
        "question": "Assertion (A): The debate on minority status has taken on new dimensions in states where a nationally recognized majority community is numerically smaller.\\nReason (R): In states like J&K, Punjab, Mizoram, Meghalaya, and Nagaland, Hindus constitute a numerical minority, raising questions about who qualifies as a minority at the state level.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. This conundrum was highlighted by the SC in TMA Pai and remains a contested issue — should minority status be state-specific or only national?"
    },
    {
        "id": "ch61-l3-q4",
        "question": "Statement I: The Places of Worship Act, 1991 was upheld by the Supreme Court in the Ayodhya judgment (2019) as reflecting constitutional commitment to secularism.\\nStatement II: The Act excludes the Ram Janmabhoomi-Babri Masjid dispute from its scope.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The SC in the Ayodhya verdict (2019) upheld the Places of Worship Act as a legislative instrument to protect secularism. The Act specifically excludes the Ram Janmabhoomi dispute."
    },
    {
        "id": "ch61-l3-q5",
        "question": "The evolution of minority institutions' regulatory framework shows:\\n1. Kerala Education Bill case (1958) — States can regulate but not destroy minority character.\\n2. Ahmedabad St. Xavier's College (1974) — Aided institutions subject to reasonable regulations.\\n3. TMA Pai Foundation (2002) — State-level determination for linguistic minorities.\\n4. Pramati Trust (2014) — RTE 25% quota not applicable to minority institutions.\\nWhich are correctly stated?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1, 2 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four represent the progressive judicial evolution of minority educational institution rights — from regulation limits to RTE exemption."
    },
    {
        "id": "ch61-l3-q6",
        "question": "Consider the distinction between religious and linguistic minorities in constitutional protection:\\n1. Both enjoy Article 29 rights (cultural conservation).\\n2. Both enjoy Article 30 rights (educational institutions).\\n3. Linguistic minorities have a dedicated constitutional officer (CLM under Art 350B).\\n4. Religious minorities have a statutory commission (NCM under NCM Act).\\nWhich are correct?",
        "options": ["1, 2 and 3 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four correctly state the distinction: both share cultural and educational rights under 29/30, but have separate institutional protections — CLM for linguistic and NCM for religious minorities."
    },
    {
        "id": "ch61-l3-q7",
        "question": "Assertion (A): The demand to make NCM a constitutional body has been a persistent recommendation.\\nReason (R): Constitutional status would ensure greater independence from the executive, fixed tenure protections, and give recommendations more weight — similar to NCSC (Art 338) and NCST (Art 338A).\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Constitutional status would provide the same level of independence and authority that NCSC and NCST enjoy."
    },
    {
        "id": "ch61-l3-q8",
        "question": "The impact of the Sachar Committee recommendations on minority policy includes:\\n1. Creation of the Ministry of Minority Affairs (2006)\\n2. Setting up of Equal Opportunity Commission (recommendation not implemented)\\n3. The PM's New 15-Point Programme for minorities\\n4. Establishment of Diversity Index (recommendation not fully implemented)\\nWhich are correctly attributable to Sachar Committee's influence?",
        "options": ["1 and 3 only", "1, 2, 3 and 4", "1, 3 and 4 only", "All of the above but implementation varies"],
        "correctAnswerIndex": 3,
        "explanation": "All four are connected to Sachar Committee influence, though implementation varies — Ministry created, PM's Programme adopted, while EOC and Diversity Index remain partially/not implemented."
    },
    {
        "id": "ch61-l3-q9",
        "question": "In Aligarh Muslim University case (Azeez Basha v. Union of India, 1968), the Supreme Court held:",
        "options": ["AMU is a minority institution", "AMU was NOT established by Muslims but by an Act of Parliament, hence cannot claim minority status under Article 30", "Only private universities can be minority institutions", "All central universities are minority institutions"],
        "correctAnswerIndex": 1,
        "explanation": "The SC held that since AMU was created by a central Act (AMU Act 1920), it was not 'established' by the Muslim minority and cannot claim Article 30 protection. This remains controversial."
    },
    {
        "id": "ch61-l3-q10",
        "question": "Statement I: India's secular framework provides equal protection to all religions without favoring any.\\nStatement II: However, the State can make special provisions for minorities (Articles 29/30) which is consistent with the 'positive secularism' model.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. India follows 'positive secularism' (Sarva Dharma Samabhava) which treats all religions equally while allowing special provisions for minorities."
    },
    {
        "id": "ch61-l3-q11",
        "question": "The challenges facing minority rights protection in India include:\\n1. Implementation gap between policy and ground reality\\n2. Communal polarization affecting minority security\\n3. Educational and economic backwardness of certain minority groups\\n4. NCM's advisory-only nature limiting its effectiveness\\nWhich are recognized challenges?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are well-documented challenges — implementation gaps, communal tensions, socio-economic backwardness, and institutional limitations."
    },
    {
        "id": "ch61-l3-q12",
        "question": "Assertion (A): The concept of 'minority within a minority' requires attention in minority rights discourse.\\nReason (R): Women, Dalits, and marginalized sections within minority communities may face intersecting discrimination that mainstream minority rights frameworks do not adequately address.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Intersectional discrimination (gender + minority status, caste + minority status) creates unique vulnerabilities within minority communities."
    },
    {
        "id": "ch61-l3-q13",
        "question": "In Indra Sawhney v. Union of India (1992), regarding reservations for minorities:",
        "options": ["The SC mandated reservations for all minorities", "The SC held that reservation based solely on religion is impermissible under Article 16, but backward classes within minorities can get reservation based on social/economic criteria", "All minorities are entitled to 50% reservation", "No minority can receive any reservation"],
        "correctAnswerIndex": 1,
        "explanation": "The SC clarified that religion alone cannot be the basis for reservation, but socially and educationally backward sections within minorities can benefit from OBC reservations based on secular criteria."
    },
    {
        "id": "ch61-l3-q14",
        "question": "Consider the differentiated approach to minority protection in India:\\n1. Constitutional protection (Articles 25-30) — Fundamental Rights\\n2. Statutory protection (NCM Act) — Commission framework\\n3. Administrative protection (PM's Programme, schemes) — Policy measures\\n4. Judicial protection (case law) — SC interpretations\\nWhich layers constitute the comprehensive framework?",
        "options": ["1 and 2 only", "1, 2 and 3 only", "1, 2, 3 and 4", "1 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four layers — constitutional, statutory, administrative, and judicial — together constitute the comprehensive minority protection framework in India."
    },
    {
        "id": "ch61-l3-q15",
        "question": "Statement I: The Waqf (Amendment) Act, 2025 introduces significant changes to Waqf property management.\\nStatement II: The Act has been controversial because it changes the composition of Waqf boards and introduces non-Muslim members, raising concerns about autonomy of religious endowments.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The 2025 amendments restructure Waqf governance, introducing non-Muslim members and government oversight, which has sparked debate about religious autonomy vs. transparency."
    },
    {
        "id": "ch61-l3-q16",
        "question": "The right of minorities under Article 30(2) provides that:",
        "options": ["The State can discriminate against minority institutions in granting aid", "The State shall not, in granting aid to educational institutions, discriminate against any educational institution on the ground that it is under the management of a minority", "Only majority institutions receive aid", "Aid is given only to unaided institutions"],
        "correctAnswerIndex": 1,
        "explanation": "Article 30(2) prohibits the State from discriminating against minority educational institutions when granting aid — ensuring equal treatment."
    },
    {
        "id": "ch61-l3-q17",
        "question": "The SDGs relevant to NCM's mandate include:\\n1. SDG 10 — Reduced Inequalities\\n2. SDG 4 — Quality Education (including minority access)\\n3. SDG 16 — Peace, Justice and Strong Institutions\\n4. SDG 8 — Decent Work (minority economic empowerment)\\nWhich are correct?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 only", "1 and 3 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four SDGs align with NCM's mandate — reducing inequality, educational access, peace and justice, and economic empowerment for minorities."
    },
    {
        "id": "ch61-l3-q18",
        "question": "Assertion (A): The Anti-Conversion legislation enacted by several states has implications for minority rights.\\nReason (R): Such legislation can potentially impact Article 25's right to 'propagate religion' and create a chilling effect on religious minorities.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Anti-conversion laws interface with Article 25 ('propagate' right) and raise concerns about their impact on minority communities' religious freedom."
    },
    {
        "id": "ch61-l3-q19",
        "question": "Consider the institutional hierarchy for minority protection:\\n1. Constitutional provisions (Articles 25-30, 350A-B) — Supreme law\\n2. NCM (statutory) — National monitoring and recommendations\\n3. State Minorities Commissions — State-level monitoring\\n4. Minority welfare departments — Implementation of schemes\\nWhich correctly represents the hierarchy?",
        "options": ["1, 2, 3 and 4", "Only 1 and 2", "Only 3 and 4", "Only 1"],
        "correctAnswerIndex": 0,
        "explanation": "All four levels work together: constitutional provisions as the supreme law, NCM for national oversight, State Commissions for state monitoring, and welfare departments for implementation."
    },
    {
        "id": "ch61-l3-q20",
        "question": "In DAV College, Bhatinda v. State of Punjab (1971), the Supreme Court held regarding linguistic minorities:",
        "options": ["Only religious minorities can claim Article 30 rights", "Linguistic minorities also have the right to establish and administer educational institutions under Article 30, and the right extends to imparting religious instruction", "Linguistic minorities have no constitutional protection", "Only Sikhs are linguistic minorities"],
        "correctAnswerIndex": 1,
        "explanation": "The SC affirmed that Article 30 protects both religious AND linguistic minorities' educational institution rights, including the right to choose medium of instruction."
    },
    {
        "id": "ch61-l3-q21",
        "question": "Statement I: NCM has recommended measures to prevent hate speech and incitement against minorities.\\nStatement II: IPC Sections 153A (promoting enmity between groups) and 295A (insulting religious beliefs) provide criminal law protection for communal harmony.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. NCM advocates against hate speech, and IPC/BNS provisions criminalize promotion of enmity and deliberate insult to religious beliefs."
    },
    {
        "id": "ch61-l3-q22",
        "question": "The National Minorities Educational Institutions Commission (NMEIC) was proposed to:",
        "options": ["Replace NCM", "Adjudicate disputes relating to minority educational institution status, affiliation, and recognition — providing an expert body for educational rights", "Close all minority schools", "Only monitor government schools"],
        "correctAnswerIndex": 1,
        "explanation": "NMEIC was proposed as a specialized body to handle minority educational institution disputes, separate from NCM's broader mandate."
    },
    {
        "id": "ch61-l3-q23",
        "question": "Assertion (A): The concept of 'secularism' in the Indian context differs from its Western understanding.\\nReason (R): Indian secularism (Sarva Dharma Samabhava) involves equal respect for all religions and positive engagement with religion, unlike the Western 'strict separation' model.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Indian secularism (positive/ameliorative) differs from Western secularism (wall of separation). The State can intervene in religious matters for social reform while treating all religions equally."
    },
    {
        "id": "ch61-l3-q24",
        "question": "The interaction between minority rights and the Uniform Civil Code (Article 44) involves:",
        "options": ["No tension exists", "A fundamental tension between minority communities' right to personal laws (cultural/religious identity) and the DPSP directive for a uniform code, requiring careful balancing", "UCC has already been implemented", "Minorities are exempt from all laws"],
        "correctAnswerIndex": 1,
        "explanation": "The UCC debate involves balancing minority rights (Articles 25, 29) with the DPSP directive (Article 44). NCM has engaged with this debate, emphasizing consensus-building."
    },
    {
        "id": "ch61-l3-q25",
        "question": "Consider the following about NCM's limitations:\\n1. Statutory (not constitutional) status limits independence.\\n2. Advisory recommendations lack binding force.\\n3. Government controls appointments and funding.\\n4. Limited staff and infrastructure constrain operations.\\nWhich are recognized?",
        "options": ["1 and 2 only", "1, 2, 3 and 4", "3 and 4 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are widely acknowledged limitations that affect NCM's ability to effectively protect minority rights."
    },
    {
        "id": "ch61-l3-q26",
        "question": "In Kerala Education Bill case (1958), the Supreme Court held regarding Article 30:",
        "options": ["Article 30 is absolute and cannot be regulated", "Article 30 is not absolute — the State can impose reasonable regulations on minority institutions in the interest of educational standards, but cannot destroy their minority character", "Article 30 only applies to primary schools", "Article 30 does not include aided institutions"],
        "correctAnswerIndex": 1,
        "explanation": "The SC held that while Article 30 protects minority educational rights, reasonable regulations (ensuring standards, preventing maladministration) are permissible — but the minority character must be preserved."
    },
    {
        "id": "ch61-l3-q27",
        "question": "Statement I: The NCM has a role in monitoring the implementation of the Communal Violence Prevention Bill (proposed).\\nStatement II: India does not currently have a comprehensive central law specifically addressing communal violence prevention.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 2,
        "explanation": "Statement II is correct — India lacks a comprehensive central communal violence prevention law. Statement I is aspirational — since the bill hasn't been enacted, NCM cannot monitor its implementation."
    },
    {
        "id": "ch61-l3-q28",
        "question": "The NCM's approach to emerging challenges includes:\\n1. Addressing online hate speech targeting minorities\\n2. Monitoring minority representation in new media\\n3. Advocating for data collection on minority socio-economic indicators\\n4. Recommending inclusive development policies\\nWhich are part of NCM's evolving mandate?",
        "options": ["1 only", "1, 2 and 3 only", "1, 2, 3 and 4", "3 and 4 only"],
        "correctAnswerIndex": 2,
        "explanation": "All four reflect NCM's evolving engagement with contemporary challenges — from digital hate speech to data-driven policy recommendations."
    },
    {
        "id": "ch61-l3-q29",
        "question": "Assertion (A): The protection of minority rights is essential to Indian democracy.\\nReason (R): Democracy is not merely majority rule but also requires protection of minority rights, individual liberties, and pluralism — as emphasized by the Supreme Court in S.R. Bommai v. Union of India (1994).\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. In S.R. Bommai, the SC emphasized secularism as a basic structure feature, and protecting minority rights is integral to democratic pluralism."
    },
    {
        "id": "ch61-l3-q30",
        "question": "Consider the comprehensive minority welfare framework:\\n1. Constitutional protection (Articles 25-30, 350A-B)\\n2. Institutional framework (NCM, CLM, State Commissions)\\n3. Policy framework (PM's 15-Point Programme, scholarships)\\n4. Financial framework (NMDFC, Waqf Boards)\\n5. Judicial protection (SC judgments on Articles 29/30)\\nWhich represent the complete framework?",
        "options": ["1 and 2 only", "1, 2, 3 and 4 only", "1, 2, 3, 4 and 5", "5 only"],
        "correctAnswerIndex": 2,
        "explanation": "All five layers — constitutional, institutional, policy, financial, and judicial — together constitute the comprehensive minority welfare framework in India."
    }
];

export const CHAPTER_61_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
