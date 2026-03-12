import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch72-l1-q1",
        "question": "The North Eastern Council (NEC) was established by:",
        "options": ["A Constitutional Amendment", "The North Eastern Council Act, 1971", "An Executive Resolution", "A Supreme Court order"],
        "correctAnswerIndex": 1,
        "explanation": "The NEC was established by the North Eastern Council Act, 1971, as a statutory advisory body for the economic and social development of the northeastern region."
    },
    {
        "id": "ch72-l1-q2",
        "question": "The NEC was established in:",
        "options": ["1947", "1972 under the North Eastern Council Act, 1971", "1980", "1991"],
        "correctAnswerIndex": 1,
        "explanation": "The NEC came into being in 1972 following the enactment of the North Eastern Council Act in 1971."
    },
    {
        "id": "ch72-l1-q3",
        "question": "The NEC originally comprised how many states?",
        "options": ["Eight", "Five states — Assam, Manipur, Meghalaya, Nagaland, and Tripura", "Seven", "Four"],
        "correctAnswerIndex": 1,
        "explanation": "The NEC originally comprised five states. Arunachal Pradesh and Mizoram were added in 1972, and Sikkim was included in 2002."
    },
    {
        "id": "ch72-l1-q4",
        "question": "At present, the NEC comprises:",
        "options": ["Seven states", "Eight states — Arunachal Pradesh, Assam, Manipur, Meghalaya, Mizoram, Nagaland, Sikkim, and Tripura", "Six states", "Nine states"],
        "correctAnswerIndex": 1,
        "explanation": "The NEC now has eight member states — the seven original northeastern states (Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, Tripura) plus Sikkim (added in 2002)."
    },
    {
        "id": "ch72-l1-q5",
        "question": "The Chairperson of the NEC is:",
        "options": ["The Prime Minister", "The Union Home Minister (until 2018); since the 2002 Amendment, it is the Union Minister for DoNER", "The Chief Minister of Assam", "The Governor of a northeastern state"],
        "correctAnswerIndex": 1,
        "explanation": "Post the NEC (Amendment) Act, 2002, the NEC is chaired by the Minister for Development of North Eastern Region (DoNER)."
    },
    {
        "id": "ch72-l1-q6",
        "question": "The primary function of the NEC is:",
        "options": ["Defence of the northeast", "To act as an advisory body for economic and social development of the northeastern region and formulate unified regional plans", "Judicial administration", "Revenue collection"],
        "correctAnswerIndex": 1,
        "explanation": "The NEC's primary role is advisory — formulating and reviewing regional development plans for the economic and social advancement of the northeast."
    },
    {
        "id": "ch72-l1-q7",
        "question": "The NEC functions under the administrative control of:",
        "options": ["Ministry of Home Affairs", "Ministry of Development of North Eastern Region (DoNER)", "Ministry of Finance", "NITI Aayog"],
        "correctAnswerIndex": 1,
        "explanation": "The NEC was transferred from the Ministry of Home Affairs to the newly created Ministry of DoNER in 2004."
    },
    {
        "id": "ch72-l1-q8",
        "question": "The Ministry of Development of North Eastern Region (DoNER) was created in:",
        "options": ["1971", "2001 (initially as Department, upgraded to Ministry in 2004)", "2010", "1991"],
        "correctAnswerIndex": 1,
        "explanation": "The Department of Development of North Eastern Region was created in 2001 and upgraded to a full Ministry in 2004."
    },
    {
        "id": "ch72-l1-q9",
        "question": "Sikkim was added to the NEC in:",
        "options": ["1972", "2002, through the North Eastern Council (Amendment) Act, 2002", "2010", "1991"],
        "correctAnswerIndex": 1,
        "explanation": "Sikkim was included as the eighth member of NEC through the 2002 Amendment Act."
    },
    {
        "id": "ch72-l1-q10",
        "question": "The members of the NEC include:",
        "options": ["Only Chief Ministers", "Governors and Chief Ministers of the eight member states, plus three nominated members", "Only bureaucrats", "Only MLAs"],
        "correctAnswerIndex": 1,
        "explanation": "The NEC comprises Governors and CMs of member states, along with three members nominated by the President."
    },
    {
        "id": "ch72-l1-q11",
        "question": "The NEC's role in regional planning includes:",
        "options": ["Only implementing central schemes", "Formulating a unified and coordinated regional plan for the northeast, including priority areas like infrastructure, connectivity, and human resource development", "Only state-level planning", "Only defence planning"],
        "correctAnswerIndex": 1,
        "explanation": "The NEC formulates regional development plans addressing infrastructure, connectivity, human resources, and balanced growth across the eight states."
    },
    {
        "id": "ch72-l1-q12",
        "question": "The NEC Act was amended in 2002 to:",
        "options": ["Abolish the NEC", "Reconstitute the NEC with changes including inclusion of Sikkim, making it the regional planning body, and restructuring its composition", "Only add Sikkim", "Only change the Chairman"],
        "correctAnswerIndex": 1,
        "explanation": "The 2002 Amendment comprehensively restructured the NEC — adding Sikkim, redefining it as a regional planning body, and changing its governance structure."
    },
    {
        "id": "ch72-l1-q13",
        "question": "The 'Look East Policy' (now 'Act East Policy') is relevant to the NEC because:",
        "options": ["It has no relevance", "Northeast India is the gateway to Southeast Asia, and the policy promotes the region's connectivity, trade, and development as India's bridge to ASEAN", "Only for defence", "Only for trade with China"],
        "correctAnswerIndex": 1,
        "explanation": "The Act East Policy positions northeast India as the strategic gateway to Southeast Asia, making NEC's development role critical for this geopolitical vision."
    },
    {
        "id": "ch72-l1-q14",
        "question": "The NEC's focus areas include:",
        "options": ["Only agriculture", "Infrastructure (roads, bridges, railways), connectivity, tourism, human resource development, agriculture, and industry", "Only defence", "Only education"],
        "correctAnswerIndex": 1,
        "explanation": "NEC focuses on comprehensive development — infrastructure, connectivity, tourism, HRD, agriculture, and industrial growth in the northeast."
    },
    {
        "id": "ch72-l1-q15",
        "question": "The Sixth Schedule of the Constitution is particularly relevant to the northeast because:",
        "options": ["It applies to all of India", "It provides for the administration of tribal areas in Assam, Meghalaya, Tripura, and Mizoram through Autonomous District and Regional Councils", "It applies only to J&K", "It deals with language policy"],
        "correctAnswerIndex": 1,
        "explanation": "The Sixth Schedule creates Autonomous District and Regional Councils for tribal areas in four northeastern states — protecting tribal autonomy and culture."
    },
    {
        "id": "ch72-l1-q16",
        "question": "The NEC headquarters is located in:",
        "options": ["New Delhi", "Shillong, Meghalaya", "Guwahati, Assam", "Imphal, Manipur"],
        "correctAnswerIndex": 1,
        "explanation": "The NEC is headquartered in Shillong, the capital of Meghalaya."
    },
    {
        "id": "ch72-l1-q17",
        "question": "Article 371A of the Constitution provides special provisions for:",
        "options": ["Assam", "Nagaland — protecting Naga customary law, religious practices, and land ownership from parliamentary interference", "Manipur", "Meghalaya"],
        "correctAnswerIndex": 1,
        "explanation": "Article 371A provides special protections for Nagaland — no Act of Parliament applies to Naga religious/social practices, customary law, and land issues unless the State Assembly resolves."
    },
    {
        "id": "ch72-l1-q18",
        "question": "The Inner Line Permit (ILP) system applies to:",
        "options": ["All northeastern states", "Arunachal Pradesh, Nagaland, Mizoram, and Manipur — restricting entry of outsiders to protect indigenous communities", "Only Assam", "No northeastern state"],
        "correctAnswerIndex": 1,
        "explanation": "ILP applies to four northeastern states, requiring domestic visitors to obtain permits — protecting indigenous populations from demographic changes."
    },
    {
        "id": "ch72-l1-q19",
        "question": "The NEC's role in security-related matters includes:",
        "options": ["Direct military operations", "Advising on security-related development measures and coordinating development to address root causes of insurgency", "No security role", "Only border patrol"],
        "correctAnswerIndex": 1,
        "explanation": "While not a security body, the NEC addresses development-related security concerns by coordinating initiatives that address root causes of unrest."
    },
    {
        "id": "ch72-l1-q20",
        "question": "The 10% gross budgetary allocation for the northeast sector is called:",
        "options": ["Northeast Fund", "Non-Lapsable Central Pool of Resources (NLCPR) — later restructured as NESIDS", "Northeast Grant", "NEC Fund"],
        "correctAnswerIndex": 1,
        "explanation": "The NLCPR (now restructured as North East Special Infrastructure Development Scheme - NESIDS) channels 10% of central ministry budgets for northeast development."
    },
    {
        "id": "ch72-l1-q21",
        "question": "The Armed Forces (Special Powers) Act (AFSPA) remains a significant issue in the northeast because:",
        "options": ["It applies everywhere in India", "It gives armed forces special powers in 'disturbed areas,' raising human rights concerns particularly in states like Manipur, Nagaland, and Assam", "It has been completely removed", "It only applies to J&K"],
        "correctAnswerIndex": 1,
        "explanation": "AFSPA's application in several northeastern states has been controversial, with demands for its repeal due to alleged human rights violations."
    },
    {
        "id": "ch72-l1-q22",
        "question": "The NEC's contribution to northeast connectivity includes:",
        "options": ["No connectivity projects", "Road construction, bridge building, and support for railway and air connectivity projects in the region", "Only digital connectivity", "Only maritime connectivity"],
        "correctAnswerIndex": 1,
        "explanation": "NEC has funded and facilitated road, bridge, railway, and air connectivity projects to improve the region's infrastructure."
    },
    {
        "id": "ch72-l1-q23",
        "question": "The northeast region shares international borders with:",
        "options": ["Only one country", "Five countries — Bangladesh, Bhutan, China, Myanmar, and Nepal", "Three countries", "No international borders"],
        "correctAnswerIndex": 1,
        "explanation": "The northeast shares borders with five countries, making it geographically and strategically significant but also creating security challenges."
    },
    {
        "id": "ch72-l1-q24",
        "question": "The 'Chicken's Neck' or Siliguri Corridor refers to:",
        "options": ["A river valley", "The narrow strip of land (about 22 km wide) connecting the northeast to the rest of India through West Bengal", "A mountain pass", "An island"],
        "correctAnswerIndex": 1,
        "explanation": "The Siliguri Corridor is the narrow land connection between northeast India and the rest of India — a strategic vulnerability and transportation bottleneck."
    },
    {
        "id": "ch72-l1-q25",
        "question": "Article 371G provides special provisions for:",
        "options": ["Nagaland", "Mizoram — protecting Mizo customary law, religious practices, and land ownership", "Assam", "Tripura"],
        "correctAnswerIndex": 1,
        "explanation": "Article 371G for Mizoram, similar to 371A for Nagaland, protects religious/social practices, customary law, and ownership of land from parliamentary interference."
    },
    {
        "id": "ch72-l1-q26",
        "question": "The NEC's role in tourism development includes:",
        "options": ["No role in tourism", "Promoting northeast tourism through infrastructure development, heritage conservation, and showcasing the region's natural beauty and cultural diversity", "Only wildlife tourism", "Only pilgrimage tourism"],
        "correctAnswerIndex": 1,
        "explanation": "NEC promotes tourism as a key economic driver — infrastructure, heritage, eco-tourism, adventure tourism, and cultural tourism in the diverse northeast."
    },
    {
        "id": "ch72-l1-q27",
        "question": "The NEC's human resource development initiatives include:",
        "options": ["Only higher education", "Skill development, education infrastructure, healthcare capacity building, and livelihood programs", "Only military training", "Only IT training"],
        "correctAnswerIndex": 1,
        "explanation": "NEC's HRD initiatives span skill development, education, healthcare, and livelihoods — addressing the region's human capital needs."
    },
    {
        "id": "ch72-l1-q28",
        "question": "The Bodo Territorial Region (BTR) in Assam was created under:",
        "options": ["The Sixth Schedule", "The Sixth Schedule — as an Autonomous District Council following the Bodo Accord (2020)", "The Fifth Schedule", "A separate Act"],
        "correctAnswerIndex": 1,
        "explanation": "BTR was created under the Sixth Schedule following the Bodo Peace Accord (2020), providing autonomous governance for the Bodo people."
    },
    {
        "id": "ch72-l1-q29",
        "question": "The NEC differs from the Zonal Councils in that:",
        "options": ["They are the same", "NEC is a statutory body with its own Act for the northeast specifically, while Zonal Councils were established under the States Reorganisation Act, 1956 for broader regional coordination", "NEC covers all of India", "Zonal Councils are more powerful"],
        "correctAnswerIndex": 1,
        "explanation": "NEC has its own dedicated Act and focuses specifically on northeast development, while Zonal Councils have a broader mandate under a different Act."
    },
    {
        "id": "ch72-l1-q30",
        "question": "The northeast region is known for its:",
        "options": ["Homogeneous culture", "Extraordinary cultural, linguistic, and ethnic diversity — with over 200 tribes, multiple languages, and distinct traditions", "Desert landscape", "Industrial development"],
        "correctAnswerIndex": 1,
        "explanation": "Northeast India is one of the most culturally diverse regions globally, with 200+ tribes, hundreds of languages, and unique cultural traditions."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch72-l2-q1",
        "question": "Consider the following about the NEC:\\n1. It is a constitutional body.\\n2. It is a statutory body.\\n3. It was originally a security-focused body.\\n4. It now focuses on regional planning.\\nWhich are correct?",
        "options": ["1 and 3 only", "2, 3 and 4 only", "1, 2, 3 and 4", "All four"],
        "correctAnswerIndex": 1,
        "explanation": "The NEC is statutory (not constitutional), originally had security advisory functions (under MHA), and was restructured in 2002 to focus on regional planning."
    },
    {
        "id": "ch72-l2-q2",
        "question": "Assertion (A): The NEC's transformation from a security-advisory body to a regional planning body reflects changing priorities for the northeast.\\nReason (R): As security situations improved and development became the priority, the NEC was restructured under DoNER to focus on economic planning rather than security coordination.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The shift from MHA to DoNER and the 2002 Amendment reflect the policy evolution from security-centric to development-centric approach for the northeast."
    },
    {
        "id": "ch72-l2-q3",
        "question": "Match the following special constitutional provisions for northeastern states:\\nA. Article 371A → Nagaland\\nB. Article 371B → Assam\\nC. Article 371C → Manipur\\nD. Article 371G → Mizoram\\nWhich are correctly matched?",
        "options": ["Only A and D", "All four are correctly matched", "Only B and C", "Only A"],
        "correctAnswerIndex": 1,
        "explanation": "All four are correctly matched — 371A (Nagaland), 371B (Assam), 371C (Manipur), 371G (Mizoram) provide state-specific protections."
    },
    {
        "id": "ch72-l2-q4",
        "question": "Statement I: The Sixth Schedule Autonomous Councils have significant legislative and executive powers.\\nStatement II: These councils can make laws on land, forests, village administration, and customary practices — functioning as mini-legislatures for tribal areas.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Sixth Schedule councils have extensive legislative power over specified subjects, creating a unique form of tribal self-governance."
    },
    {
        "id": "ch72-l2-q5",
        "question": "Assertion (A): The Act East Policy has made the northeast strategically more important.\\nReason (R): The northeast is India's land bridge to Southeast Asia, and improved connectivity (roads, railways, digital) through the region is essential for trade with ASEAN countries.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The northeast's strategic location makes it central to India's Act East Policy — connectivity through the region enables ASEAN engagement."
    },
    {
        "id": "ch72-l2-q6",
        "question": "The challenges facing the NEC include:\\n1. Limited financial autonomy\\n2. Coordination difficulties among eight diverse states\\n3. Insufficient implementation capacity\\n4. Overlap with Ministry of DoNER functions\\n5. Security challenges affecting development\\nWhich are recognized challenges?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five represent genuine challenges — financial constraints, inter-state coordination, implementation gaps, institutional overlap, and security-development tension."
    },
    {
        "id": "ch72-l2-q7",
        "question": "Statement I: The Inner Line Permit (ILP) system is derived from the Bengal Eastern Frontier Regulation, 1873.\\nStatement II: Originally designed by the British to protect commercial interests, it has evolved to protect indigenous tribal populations from demographic change and cultural erosion.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. ILP's colonial origin for commercial protection has been reinterpreted as a mechanism for protecting indigenous communities."
    },
    {
        "id": "ch72-l2-q8",
        "question": "The NLCPR (now NESIDS) mechanism requires:\\n1. Central ministries to earmark 10% of their budget for the northeast\\n2. Unspent funds to be transferred to a non-lapsable pool\\n3. This pool to fund northeast-specific projects\\n4. NEC to play a role in project identification\\nWhich are correct?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are correct — the NLCPR/NESIDS mechanism ensures sustained central funding for northeast development with non-lapsable provisions."
    },
    {
        "id": "ch72-l2-q9",
        "question": "Assertion (A): The northeast's ecological significance adds complexity to development planning.\\nReason (R): The region is one of the world's biodiversity hotspots (Eastern Himalaya and Indo-Burma), making development-conservation balance critical.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The northeast contains two of the world's 36 biodiversity hotspots, requiring environmentally sensitive development planning."
    },
    {
        "id": "ch72-l2-q10",
        "question": "Statement I: The NEC has funded major infrastructure projects in the northeast.\\nStatement II: Road construction, bridge building, educational institutions, health facilities, and tourism infrastructure have been supported by NEC funding.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. NEC has funded diverse infrastructure projects contributing to the region's connectivity and social development."
    },
    {
        "id": "ch72-l2-q11",
        "question": "The Naga peace process is relevant to the NEC because:\\n1. It affects inter-state relations (Nagaland, Manipur, Assam)\\n2. Development planning requires peace and stability\\n3. The 'Greater Nagalim' demand involves territory from multiple states\\n4. NEC must coordinate development across affected areas\\nWhich are correct?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four points link the Naga issue to NEC's mandate — inter-state tensions, development-security nexus, territorial claims, and regional coordination."
    },
    {
        "id": "ch72-l2-q12",
        "question": "Assertion (A): The northeast requires a different development model than mainland India.\\nReason (R): Hilly terrain, sparse population, ethnic diversity, limited industrialization, and unique ecological conditions necessitate a development approach different from plains-based models.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The northeast's unique geography, demographics, and ecology require customized development strategies rather than uniform national models."
    },
    {
        "id": "ch72-l2-q13",
        "question": "Statement I: The Autonomous District Councils under the Sixth Schedule face criticism for poor governance.\\nStatement II: Issues include lack of transparency, fund mismanagement, limited capacity, and inadequate devolution of powers from state governments.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. While Sixth Schedule councils provide tribal self-governance, their effectiveness is hampered by governance deficiencies."
    },
    {
        "id": "ch72-l2-q14",
        "question": "The northeast's contribution to India's hydroelectric potential includes:\\n1. Over 40% of India's hydropower potential\\n2. Rivers like Brahmaputra and its tributaries\\n3. Environmental and displacement concerns\\n4. Inter-state water disputes\\nWhich are correct?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are correct — the northeast has massive hydropower potential but faces environmental, displacement, and inter-state challenges."
    },
    {
        "id": "ch72-l2-q15",
        "question": "Assertion (A): The NEC's effectiveness depends on inter-state cooperation.\\nReason (R): Since the northeast region includes eight states with diverse interests, effective regional planning requires consensus-building, which is often difficult due to territorial disputes and ethnic tensions.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Inter-state cooperation is essential but challenging due to the region's diversity and existing disputes."
    },
    {
        "id": "ch72-l2-q16",
        "question": "The AFSPA-related recommendations include:\\n1. Jeevan Reddy Committee (2005) — recommended repeal\\n2. Justice Verma Committee (2012) — discussed excessive force\\n3. Supreme Court directives on accountability\\n4. State-level demands for withdrawal\\nWhich have addressed AFSPA in the northeast?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 4 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four represent responses to AFSPA in the northeast — the Reddy Committee, Verma Committee, SC directives, and persistent state-level demands."
    },
    {
        "id": "ch72-l2-q17",
        "question": "Statement I: The northeast faces significant outmigration to mainland India.\\nStatement II: Limited employment opportunities, poor infrastructure, and security concerns drive youth migration from the northeast to cities like Delhi, Bangalore, and Mumbai.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Outmigration is a significant challenge driven by employment gaps, infrastructure deficits, and security concerns."
    },
    {
        "id": "ch72-l2-q18",
        "question": "The NEC's approach to sustainable development in the northeast includes:\\n1. Promoting organic farming\\n2. Eco-tourism development\\n3. Bamboo economy promotion\\n4. Renewable energy (hydropower, solar)\\nWhich are part of NEC's strategy?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "NEC promotes sustainable development through organic farming, eco-tourism, bamboo industry, and renewable energy — leveraging the region's natural advantages."
    },
    {
        "id": "ch72-l2-q19",
        "question": "Assertion (A): Cross-border connectivity projects are crucial for the northeast's development.\\nReason (R): Projects like the India-Myanmar-Thailand Trilateral Highway, Kaladan Multi-Modal Transit Transport, and border trade points can transform the northeast from a 'dead-end' to a 'gateway.'\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Cross-border connectivity transforms the northeast from a landlocked region to a trade gateway — central to both regional and national strategy."
    },
    {
        "id": "ch72-l2-q20",
        "question": "Statement I: The northeast has witnessed multiple peace accords.\\nStatement II: Agreements like the Naga Framework Agreement (2015), Bodo Accord (2020), and Karbi Anglong Agreement (2021) aim to address ethnic aspirations and end insurgency.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Multiple peace accords have been signed to address the northeast's complex ethnic and territorial issues."
    },
    {
        "id": "ch72-l2-q21",
        "question": "The NEC's role in disaster management is important because:\\n1. The northeast is seismically active (Zone V)\\n2. Annual flooding of the Brahmaputra\\n3. Landslides in hilly terrain\\n4. Limited disaster response infrastructure\\nWhich factors make NEC's role critical?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four factors — seismic vulnerability, flooding, landslides, and limited infrastructure — make coordinated disaster management essential."
    },
    {
        "id": "ch72-l2-q22",
        "question": "Assertion (A): The northeast's integration with the national economy remains incomplete.\\nReason (R): The Siliguri Corridor bottleneck, poor connectivity, limited industrial base, and distance from major markets create economic isolation.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Physical connectivity constraints and market distance are major factors in the northeast's incomplete economic integration."
    },
    {
        "id": "ch72-l2-q23",
        "question": "Statement I: The NEC has been criticised for being an ineffective body.\\nStatement II: Critics point to slow project implementation, limited financial autonomy, insufficient coordination between states, and overlap with DoNER.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. NEC faces criticism for implementation delays, financial constraints, inter-state coordination gaps, and institutional redundancy with DoNER."
    },
    {
        "id": "ch72-l2-q24",
        "question": "The flagship government programs for the northeast include:\\n1. PM-DevINE (Prime Minister's Development Initiative for North Eastern Region)\\n2. NESIDS (North East Special Infrastructure Development Scheme)\\n3. Northeast BPO Promotion Scheme\\n4. Ude Desh Ka Aam Nagrik (UDAN) for NE air connectivity\\nWhich are correct?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are dedicated programs for the northeast — PM-DevINE, NESIDS, BPO promotion, and UDAN for improving connectivity and development."
    },
    {
        "id": "ch72-l2-q25",
        "question": "Assertion (A): The northeast's tea industry is a significant economic driver.\\nReason (R): Assam is India's largest tea-producing state, and the tea industry provides large-scale employment, making it critical for the regional economy.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Tea is a major economic pillar, with Assam producing over half of India's tea and providing significant employment."
    },
    {
        "id": "ch72-l2-q26",
        "question": "The northeast's educational challenges include:\\n1. Quality of education in remote areas\\n2. Language barriers (multiple indigenous languages)\\n3. Teacher shortages\\n4. Limited higher education institutions\\nWhich are significant challenges?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four represent significant educational challenges in the northeast — quality, language, teacher availability, and institutional gaps."
    },
    {
        "id": "ch72-l2-q27",
        "question": "Statement I: The Citizenship (Amendment) Act, 2019 was particularly controversial in the northeast.\\nStatement II: Northeastern states feared demographic changes from the Act's provisions for non-Muslim migrants from neighboring countries, potentially affecting indigenous populations.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. CAA triggered significant protests in the northeast due to concerns about demographic change and threat to indigenous identities."
    },
    {
        "id": "ch72-l2-q28",
        "question": "The NEC's relationship with NITI Aayog includes:\\n1. NITI Aayog provides policy advisory for the northeast\\n2. NEC focuses on implementation and regional coordination\\n3. Both promote development indices for northeastern states\\n4. Potential overlap in planning functions\\nWhich describe the relationship?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "NITI Aayog and NEC have complementary but sometimes overlapping roles in northeast planning — policy vs implementation, advisory vs coordination."
    },
    {
        "id": "ch72-l2-q29",
        "question": "Assertion (A): The northeast has witnessed significant improvement in connectivity in recent years.\\nReason (R): Projects like the Trans-Arunachal Highway, Bogibeel Bridge, Bhupen Hazarika Setu, and expanded air connectivity under UDAN have improved the region's access.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Major infrastructure projects have significantly improved the northeast's connectivity, though gaps remain."
    },
    {
        "id": "ch72-l2-q30",
        "question": "Statement I: The NEC plays a role in preserving the cultural heritage of the northeast.\\nStatement II: Through cultural festivals, heritage preservation projects, and support for traditional arts, the NEC contributes to protecting the region's diverse cultural traditions.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. NEC supports cultural preservation alongside economic development, recognizing culture as integral to northeast identity."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch72-l3-q1",
        "question": "Consider the comprehensive institutional framework for northeast development:\\n1. NEC — Regional planning and coordination\\n2. Ministry of DoNER — Policy and oversight\\n3. NLCPR/NESIDS — Funding mechanism\\n4. Sixth Schedule — Tribal autonomy\\n5. Special Articles (371A-H) — State-specific protections\\nHow do these interact?",
        "options": ["They operate independently", "Together they form a multi-layered governance framework — NEC coordinates, DoNER oversees, NLCPR funds, Sixth Schedule protects tribes, and special Articles safeguard state interests", "Only 1 and 2 interact", "Only 4 and 5 are related"],
        "correctAnswerIndex": 1,
        "explanation": "All five elements form an integrated governance framework for the northeast — institutional, financial, and constitutional mechanisms working together."
    },
    {
        "id": "ch72-l3-q2",
        "question": "Assertion (A): The northeast's development challenge is fundamentally different from the rest of India.\\nReason (R): The combination of geographical isolation (Siliguri Corridor), ethnic complexity (200+ tribes), international borders (5 countries), ecological sensitivity (biodiversity hotspots), and security concerns (insurgency history) creates a unique development challenge requiring customized solutions.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The convergence of geographical, ethnic, geopolitical, ecological, and security factors creates a uniquely complex development challenge."
    },
    {
        "id": "ch72-l3-q3",
        "question": "Statement I: The tension between development and indigenous identity is central to northeast politics.\\nStatement II: Rapid modernization, migration, and resource exploitation threaten indigenous cultures, while inadequate development fuels alienation — creating a development paradox.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The development-identity tension is the core paradox — communities need development but fear the cultural erosion it brings."
    },
    {
        "id": "ch72-l3-q4",
        "question": "The future of the NEC may involve:\\n1. Strengthening as a regional development authority\\n2. Greater financial autonomy\\n3. Better coordination with state governments\\n4. Integration with Act East Policy implementation\\n5. Enhanced role in cross-border cooperation\\nWhich represent possible reforms?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five represent possible NEC reforms — strengthening authority, financial independence, state coordination, Act East integration, and cross-border cooperation."
    },
    {
        "id": "ch72-l3-q5",
        "question": "Assertion (A): The Sixth Schedule provides a unique model of asymmetric federalism.\\nReason (R): By creating autonomous councils within states, it recognizes that uniform governance is inadequate for tribal areas with distinct customary practices, land systems, and cultural traditions.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The Sixth Schedule's asymmetric governance model recognizes the inadequacy of uniform administration for diverse tribal territories."
    },
    {
        "id": "ch72-l3-q6",
        "question": "Statement I: The Naga peace process illustrates the complexity of ethnic autonomy demands in the northeast.\\nStatement II: The demand for 'Greater Nagalim' involving territory from four states (Nagaland, Manipur, Assam, Arunachal Pradesh) creates inter-state tensions that the NEC and Centre must mediate.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The Naga issue's multi-state territorial dimension makes it a uniquely complex challenge requiring regional coordination."
    },
    {
        "id": "ch72-l3-q7",
        "question": "The northeast's strategic importance in India's geopolitics involves:\\n1. Border security with China (Arunachal Pradesh)\\n2. Gateway to ASEAN under Act East Policy\\n3. Buffer against Chinese influence in Myanmar/Bangladesh\\n4. Energy security (hydropower and oil/gas)\\n5. Counter-insurgency and border management\\nWhich are strategic considerations?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five represent the northeast's multi-dimensional strategic importance — from border security to energy and trade gateway functions."
    },
    {
        "id": "ch72-l3-q8",
        "question": "Assertion (A): The AFSPA debate in the northeast represents the tension between national security and human rights.\\nReason (R): While the Act provides armed forces operational flexibility in disturbed areas, it has led to documented cases of human rights violations, creating a cycle of resentment.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. AFSPA epitomizes the security-rights tension — operational necessity vs human rights protection in conflict-affected areas."
    },
    {
        "id": "ch72-l3-q9",
        "question": "Consider the impact of climate change on the northeast:\\n1. Increased flooding of the Brahmaputra\\n2. Glacial lake outburst floods (GLOFs)\\n3. Changing agricultural patterns\\n4. Biodiversity loss\\n5. Increased frequency of extreme weather events\\nWhich are climate change impacts affecting the region?",
        "options": ["1 only", "1, 2, 3, 4 and 5", "1 and 2 only", "3, 4 and 5 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five climate change impacts affect the northeast — flooding, GLOFs, agricultural disruption, biodiversity loss, and extreme weather events."
    },
    {
        "id": "ch72-l3-q10",
        "question": "Statement I: The northeast's development requires resolving the fundamental tension between integration and autonomy.\\nStatement II: While greater integration with the Indian economy is needed for development, the northeast's diverse communities demand autonomy to protect their distinct identities — a balance that institutions like NEC must navigate.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The integration-autonomy balance is the defining challenge of northeast governance — economic integration with cultural protection."
    },
    {
        "id": "ch72-l3-q11",
        "question": "Assertion (A): The northeast's organic farming potential is a comparative advantage.\\nReason (R): The region's limited use of chemical inputs, traditional farming practices, and ecological conditions make it naturally suited for organic farming — which commands premium prices in national and international markets.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The northeast's organic advantage comes from traditional practices and ecology, offering economic opportunities through premium organic markets."
    },
    {
        "id": "ch72-l3-q12",
        "question": "The comprehensive approach to northeast security must include:\\n1. Political settlement of ethnic demands\\n2. Economic development to address root causes\\n3. Good governance and accountability\\n4. Protection of human rights\\n5. Cross-border cooperation\\nWhich are essential components?",
        "options": ["1 only", "1, 2, 3, 4 and 5", "1 and 2 only", "3, 4 and 5 only"],
        "correctAnswerIndex": 1,
        "explanation": "Comprehensive security requires all five — political resolution, economic development, governance reform, human rights protection, and cross-border cooperation."
    },
    {
        "id": "ch72-l3-q13",
        "question": "Statement I: The northeast's linguistic diversity is both a cultural asset and a governance challenge.\\nStatement II: With hundreds of languages across multiple language families (Tibeto-Burman, Austroasiatic, Indo-Aryan), education, administration, and communication require sensitive language policy.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Linguistic diversity enriches culture but complicates education and governance — requiring thoughtful multilingual policies."
    },
    {
        "id": "ch72-l3-q14",
        "question": "Assertion (A): The role of civil society organizations is uniquely prominent in northeast governance.\\nReason (R): Tribal councils, student bodies, church organizations, and community groups play quasi-governmental roles in many northeastern states — filling governance gaps and representing community interests.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Civil society organizations in the northeast serve quasi-governmental functions, reflecting the region's unique governance ecosystem."
    },
    {
        "id": "ch72-l3-q15",
        "question": "The northeast's petroleum and natural gas resources are significant because:\\n1. Assam was India's first oil-producing state (Digboi, 1889)\\n2. Oil India Limited has major operations in the northeast\\n3. Tripura has significant natural gas reserves\\n4. Revenue sharing has been a source of Centre-State tension\\nWhich are correct?",
        "options": ["1 only", "1, 2, 3 and 4", "1 and 2 only", "3 and 4 only"],
        "correctAnswerIndex": 1,
        "explanation": "All four are correct — the northeast's petroleum resources, from India's first oil well at Digboi to Tripura's gas, are economically significant but also create Centre-State fiscal tensions."
    },
    {
        "id": "ch72-l3-q16",
        "question": "Statement I: The northeast faces a 'demographic anxiety' that differentiates its politics from the rest of India.\\nStatement II: Small indigenous populations fear being overwhelmed by migration — from Bangladesh (illegal immigration), mainland India (internal migration), and neighboring tribal groups — driving demand for protective mechanisms like ILP and NRC.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Demographic anxiety drives much of northeast politics — ILP, NRC, and anti-CAA protests all stem from indigenous communities' fears of demographic marginalization."
    },
    {
        "id": "ch72-l3-q17",
        "question": "Assertion (A): The NEC model could benefit from studying regional development bodies in other countries.\\nReason (R): Institutions like the Tennessee Valley Authority (USA), Scottish Development Agency (UK), and similar bodies demonstrate how dedicated regional institutions can drive transformation through integrated planning and execution.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. International models of regional development institutions provide useful lessons for strengthening the NEC's effectiveness."
    },
    {
        "id": "ch72-l3-q18",
        "question": "Consider the intersection of the Northeast's development with India's national goals:\\n1. Sustainable Development Goals implementation\\n2. Climate change commitments\\n3. National security strategy\\n4. Trade and commerce growth\\n5. Cultural diversity preservation\\nWhich are interdependent?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five national goals intersect with and depend on northeast development — SDGs, climate, security, trade, and culture."
    },
    {
        "id": "ch72-l3-q19",
        "question": "Statement I: The northeast's forest cover (over 65% for most states) is among the highest in India.\\nStatement II: However, deforestation, jhum (shifting) cultivation, mining, and infrastructure development threaten this forest cover — requiring NEC to balance development with forest conservation.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The northeast's exceptional forest cover faces multiple threats, requiring careful development-conservation balance."
    },
    {
        "id": "ch72-l3-q20",
        "question": "Assertion (A): The comprehensive resolution of northeast challenges requires constitutional, institutional, and developmental approaches simultaneously.\\nReason (R): Constitutional protections (Articles 371A-H, Sixth Schedule) provide the framework; institutions (NEC, DoNER) coordinate; and developmental programs (NESIDS, PM-DevINE) provide resources — all three must work together.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Northeast transformation requires synergy between constitutional frameworks, institutional capacity, and development resources."
    },
    {
        "id": "ch72-l3-q21",
        "question": "The impact of digital connectivity on the northeast includes:\\n1. BPO and IT industry development\\n2. E-governance improvement\\n3. Financial inclusion through digital banking\\n4. Telemedicine access\\n5. Digital education platforms\\nWhich represent digital transformation opportunities?",
        "options": ["1 only", "1, 2, 3, 4 and 5", "1 and 2 only", "3, 4 and 5 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five represent digital transformation opportunities — from BPO employment to telemedicine and digital education in remote areas."
    },
    {
        "id": "ch72-l3-q22",
        "question": "Statement I: The women of the northeast enjoy relatively higher status compared to much of India.\\nStatement II: Many northeastern societies are matrilineal (Khasi, Garo) or have strong traditions of women's participation in social and economic life — though political representation remains limited.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. Northeastern women have higher social and economic participation, though political representation gaps persist."
    },
    {
        "id": "ch72-l3-q23",
        "question": "Assertion (A): The NEC must evolve to address 21st-century challenges.\\nReason (R): Climate change adaptation, digital transformation, cross-border trade facilitation, startup ecosystem development, and sustainable tourism require the NEC to expand beyond traditional infrastructure planning.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. 21st-century challenges require NEC to evolve beyond infrastructure-focused planning to address climate, digital, trade, and innovation needs."
    },
    {
        "id": "ch72-l3-q24",
        "question": "Consider the healthcare challenges specific to the northeast:\\n1. Difficult terrain limiting healthcare access\\n2. Shortage of medical professionals\\n3. Limited tertiary care facilities\\n4. Traditional medicine vs modern healthcare tensions\\n5. Tropical disease burden\\nWhich are significant challenges?",
        "options": ["1 and 2 only", "1, 2, 3, 4 and 5", "3, 4 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five represent significant healthcare challenges — access barriers, professional shortages, facility gaps, traditional-modern tensions, and disease burden."
    },
    {
        "id": "ch72-l3-q25",
        "question": "Statement I: The success of the northeast's integration into India's mainstream depends on mutual understanding rather than mere infrastructure development.\\nStatement II: Addressing racial discrimination against northeast people in mainland India, promoting cultural exchange, and fostering political inclusion are as important as roads and railways.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. True integration requires social inclusion and cultural understanding alongside physical connectivity and economic development."
    },
    {
        "id": "ch72-l3-q26",
        "question": "Assertion (A): The northeast's border management challenges are unique in India.\\nReason (R): With 5,182 km of international borders, porous boundaries, challenging terrain, diverse ethnic groups straddling borders, and limited infrastructure, the northeast faces multi-dimensional border security challenges.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The northeast's border characteristics create uniquely complex security challenges requiring specialized approaches."
    },
    {
        "id": "ch72-l3-q27",
        "question": "The comprehensive vision for northeast India should include:\\n1. Economic development through sustainable industries\\n2. Cultural preservation and promotion\\n3. Security through peace processes and development\\n4. Connectivity (physical, digital, economic)\\n5. Governance reform and institutional strengthening\\nWhich are essential elements?",
        "options": ["1 and 4 only", "1, 2, 3, 4 and 5", "2, 3 and 5 only", "1 only"],
        "correctAnswerIndex": 1,
        "explanation": "All five elements are essential for a comprehensive northeast vision — economy, culture, security, connectivity, and governance."
    },
    {
        "id": "ch72-l3-q28",
        "question": "Statement I: The northeast faces unique migration challenges — both in-migration and out-migration.\\nStatement II: In-migration (from Bangladesh and mainland India) threatens indigenous demographics, while out-migration (youth to cities) depletes human capital — creating a demographic double-bind.\\nSelect the correct answer:",
        "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. The two-way migration challenge — demographic threat from inflows and brain drain from outflows — is a unique northeast problem."
    },
    {
        "id": "ch72-l3-q29",
        "question": "Assertion (A): The NEC's continued relevance depends on its ability to demonstrate tangible development outcomes.\\nReason (R): With increasing competition from DoNER and NITI Aayog, the NEC must show that its regional coordination adds value that state-level planning and national advisory cannot — justifying its institutional existence.\\nSelect the correct answer:",
        "options": ["Both A and R are correct and R is the correct explanation of A", "Both A and R are correct but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect"],
        "correctAnswerIndex": 0,
        "explanation": "Both correct. NEC's institutional survival depends on demonstrating unique value-addition through regional coordination that other bodies cannot replicate."
    },
    {
        "id": "ch72-l3-q30",
        "question": "The ultimate test of northeast development institutions is:\\n1. Reduction in regional development disparities\\n2. Peace and security improvement\\n3. Cultural preservation alongside modernization\\n4. Enhanced democratic participation\\n5. Integration with national and international economies\\nWhich together define success?",
        "options": ["1 only", "1, 2, 3, 4 and 5 — holistic transformation", "1 and 2 only", "5 only"],
        "correctAnswerIndex": 1,
        "explanation": "Holistic success requires all five — development equity, peace, cultural protection, democratic engagement, and economic integration working together."
    }
];

export const CHAPTER_72_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
