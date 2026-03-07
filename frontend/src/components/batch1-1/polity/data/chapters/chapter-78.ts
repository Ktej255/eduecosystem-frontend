import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch78-l1-q1",
        "question": "Which Part of the Indian Constitution deals with Special Provisions relating to certain Classes or States?",
        "options": [
            "Part XX",
            "Part XXI",
            "Part XXII",
            "Part XVI"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Part XXI (Articles 369-392) contains temporary, transitional, and special provisions for certain States."
    },
    {
        "id": "ch78-l1-q2",
        "question": "Article 370 of the Indian Constitution dealt with special provisions for which State/UT?",
        "options": [
            "Nagaland",
            "Mizoram",
            "Jammu & Kashmir",
            "Sikkim"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 370 provided special autonomous status to Jammu & Kashmir until it was abrogated in August 2019."
    },
    {
        "id": "ch78-l1-q3",
        "question": "Article 370 was abrogated in which year?",
        "options": [
            "2014",
            "2017",
            "2019",
            "2020"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 370 was effectively abrogated on August 5, 2019 by a Presidential Order."
    },
    {
        "id": "ch78-l1-q4",
        "question": "Which Article provides special provisions for the State of Maharashtra and Gujarat?",
        "options": [
            "Article 371",
            "Article 371A",
            "Article 371B",
            "Article 371C"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371 contains special provisions for Maharashtra (Vidarbha, Marathwada) and Gujarat (Saurashtra, Kutch)."
    },
    {
        "id": "ch78-l1-q5",
        "question": "Article 371A provides special provisions for which State?",
        "options": [
            "Assam",
            "Nagaland",
            "Manipur",
            "Mizoram"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371A provides special provisions for Nagaland regarding religious or social practices, customary law, and land ownership."
    },
    {
        "id": "ch78-l1-q6",
        "question": "Under Article 371A, no Act of Parliament shall apply to Nagaland in respect of:",
        "options": [
            "Taxation",
            "Religious or social practices of the Nagas, customary law, and ownership of land and resources",
            "Defense matters",
            "External affairs"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371A protects Naga customary law, religious practices, and land ownership from parliamentary override unless the State Assembly decides otherwise."
    },
    {
        "id": "ch78-l1-q7",
        "question": "Article 371B provides for a committee of the Assam Legislative Assembly consisting of members elected from:",
        "options": [
            "Bodo areas",
            "Tribal areas as specified in Part A of the table in the Sixth Schedule",
            "Cachar district",
            "All constituencies"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371B provides for a committee of MLAs from tribal areas for matters relating to those areas in Assam."
    },
    {
        "id": "ch78-l1-q8",
        "question": "Article 371C deals with special provisions for which State?",
        "options": [
            "Meghalaya",
            "Manipur",
            "Mizoram",
            "Tripura"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371C provides special provisions for Manipur, particularly regarding the hill areas."
    },
    {
        "id": "ch78-l1-q9",
        "question": "Article 371D and 371E deal with special provisions for which State?",
        "options": [
            "Karnataka",
            "Tamil Nadu",
            "Andhra Pradesh and Telangana",
            "Kerala"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 371D provides for equitable opportunities in public employment and education in Andhra Pradesh (now also Telangana), and 371E establishes a central university."
    },
    {
        "id": "ch78-l1-q10",
        "question": "Which Article provides for the establishment of a Central University in Andhra Pradesh?",
        "options": [
            "Article 371D",
            "Article 371E",
            "Article 371F",
            "Article 371G"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371E empowers Parliament to establish a Central University in Andhra Pradesh."
    },
    {
        "id": "ch78-l1-q11",
        "question": "Article 371F provides special provisions for which State?",
        "options": [
            "Arunachal Pradesh",
            "Sikkim",
            "Goa",
            "Mizoram"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371F was inserted by the 36th Amendment (1975) when Sikkim became a full State of India."
    },
    {
        "id": "ch78-l1-q12",
        "question": "Sikkim became a full State of the Indian Union through which Constitutional Amendment?",
        "options": [
            "35th Amendment",
            "36th Amendment",
            "37th Amendment",
            "38th Amendment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 36th Amendment Act (1975) admitted Sikkim as a full State and inserted Article 371F."
    },
    {
        "id": "ch78-l1-q13",
        "question": "Article 371G provides special provisions for which State?",
        "options": [
            "Nagaland",
            "Manipur",
            "Mizoram",
            "Meghalaya"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 371G provides special provisions for Mizoram regarding religious or social practices, customary law, and land ownership."
    },
    {
        "id": "ch78-l1-q14",
        "question": "Article 371H provides special provisions for which State?",
        "options": [
            "Assam",
            "Arunachal Pradesh",
            "Tripura",
            "Meghalaya"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371H provides special provisions for Arunachal Pradesh, including the Governor's special responsibility for law and order."
    },
    {
        "id": "ch78-l1-q15",
        "question": "Under Article 371H, the Governor of Arunachal Pradesh has special responsibility with respect to:",
        "options": [
            "Education",
            "Law and order",
            "Agriculture",
            "Trade and commerce"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Governor of Arunachal Pradesh has special responsibility for law and order under Article 371H."
    },
    {
        "id": "ch78-l1-q16",
        "question": "Article 371I provides special provisions for which State?",
        "options": [
            "Goa",
            "Sikkim",
            "Manipur",
            "Tripura"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371I provides special provisions for Goa, particularly regarding the Legislative Assembly."
    },
    {
        "id": "ch78-l1-q17",
        "question": "Article 371J provides special provisions for which State?",
        "options": [
            "Andhra Pradesh",
            "Telangana",
            "Karnataka (Hyderabad-Karnataka region)",
            "Maharashtra"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 371J (inserted by the 98th Amendment, 2012) provides for a separate development board for Hyderabad-Karnataka region."
    },
    {
        "id": "ch78-l1-q18",
        "question": "The 98th Constitutional Amendment Act (2012) is related to:",
        "options": [
            "Article 371I (Goa)",
            "Article 371J (Karnataka - Hyderabad-Karnataka)",
            "Article 371K",
            "Article 370"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 98th Amendment inserted Article 371J for special provisions for the Hyderabad-Karnataka region."
    },
    {
        "id": "ch78-l1-q19",
        "question": "Which of the following is NOT a common feature in the special provisions Articles (371A-371J)?",
        "options": [
            "Protection of customary law",
            "Development boards for backward regions",
            "Governor's special responsibilities",
            "Abolition of State Legislature"
        ],
        "correctAnswerIndex": 3,
        "explanation": "None of the special provisions Articles abolish any State Legislature."
    },
    {
        "id": "ch78-l1-q20",
        "question": "Article 371 provides for the establishment of separate development boards for:",
        "options": [
            "Vidarbha, Marathwada, and rest of Maharashtra; Saurashtra and Kutch in Gujarat",
            "Only Maharashtra",
            "Only Gujarat",
            "All States"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371 provides for development boards for these specific regions in Maharashtra and Gujarat."
    },
    {
        "id": "ch78-l1-q21",
        "question": "The special provisions under Article 371A for Nagaland were made as part of which agreement?",
        "options": [
            "Shimla Agreement",
            "Naga Peace Accord",
            "16-Point Agreement of 1960",
            "Mizo Accord"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 371A was based on the 16-Point Agreement of 1960 between the Naga People's Convention and the Government of India."
    },
    {
        "id": "ch78-l1-q22",
        "question": "Which Article was inserted by the Andhra Pradesh Reorganisation Act, 2014?",
        "options": [
            "Article 371J",
            "Article 371K",
            "Article 371D was amended",
            "None, no new Article was inserted"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The AP Reorganisation Act, 2014 extended the application of Article 371D to both Andhra Pradesh and Telangana."
    },
    {
        "id": "ch78-l1-q23",
        "question": "Under Article 371D, who has the power to provide for equitable opportunities in public employment?",
        "options": [
            "The Parliament",
            "The President",
            "The Governor",
            "The State Legislature"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The President may by order provide for equitable allocation of opportunities in public employment and education."
    },
    {
        "id": "ch78-l1-q24",
        "question": "Article 371F(k) provides that all laws in force in Sikkim immediately before its merger with India shall continue unless:",
        "options": [
            "Repealed by the President",
            "Amended or repealed by a competent legislature or authority",
            "Declared void by the SC",
            "Modified by the Governor"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Existing Sikkimese laws continue until amended or repealed by the competent legislature or authority."
    },
    {
        "id": "ch78-l1-q25",
        "question": "The special provision for Goa under Article 371I ensures that the Legislative Assembly shall consist of not less than:",
        "options": [
            "20 members",
            "30 members",
            "40 members",
            "60 members"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371I ensures Goa's Legislative Assembly shall have not less than 30 members."
    },
    {
        "id": "ch78-l1-q26",
        "question": "Which of the following States has a special provision regarding the Governor's responsibility for law and order?",
        "options": [
            "Meghalaya",
            "Arunachal Pradesh",
            "Sikkim",
            "Goa"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371H gives the Governor of Arunachal Pradesh special responsibility for law and order."
    },
    {
        "id": "ch78-l1-q27",
        "question": "Article 371G for Mizoram was inserted by which Constitutional Amendment?",
        "options": [
            "50th Amendment",
            "53rd Amendment",
            "55th Amendment",
            "56th Amendment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 53rd Amendment (1986) inserted Article 371G as part of the Mizo Accord."
    },
    {
        "id": "ch78-l1-q28",
        "question": "The Mizo Accord of 1986 led to the insertion of which Article?",
        "options": [
            "Article 371F",
            "Article 371G",
            "Article 371H",
            "Article 371I"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Mizo Accord (signed in 1986) led to the creation of the State of Mizoram and insertion of Article 371G."
    },
    {
        "id": "ch78-l1-q29",
        "question": "Under Article 371C, the President may direct that a Committee of MLAs from hill areas of Manipur be constituted. This committee is responsible for:",
        "options": [
            "Defense matters",
            "Matters relating to administration of hill areas",
            "Foreign affairs",
            "Revenue collection"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The committee deals with matters relating to the administration of hill areas in Manipur."
    },
    {
        "id": "ch78-l1-q30",
        "question": "Article 371D provides for an Administrative Tribunal in Andhra Pradesh for:",
        "options": [
            "Criminal cases",
            "Disputes regarding public employment orders",
            "Tax disputes",
            "Land acquisition cases"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371D(5) provides for an Administrative Tribunal to deal with disputes about orders under Article 371D."
    },
    {
        "id": "ch78-l1-q31",
        "question": "Which Article provided for a separate Governor for Nagaland with special responsibility?",
        "options": [
            "Article 370",
            "Article 371",
            "Article 371A",
            "Article 371H"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 371A provides for the Governor of Nagaland to have special responsibility for law and order."
    },
    {
        "id": "ch78-l1-q32",
        "question": "The insertion of Article 371J for Hyderabad-Karnataka was demanded to address:",
        "options": [
            "Linguistic differences",
            "Developmental backwardness of the region",
            "Religious differences",
            "Border disputes"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371J was inserted to address the developmental backwardness of the Hyderabad-Karnataka region."
    },
    {
        "id": "ch78-l1-q33",
        "question": "Under Article 371J, the President may provide for:",
        "options": [
            "Equitable allocation of funds for Hyderabad-Karnataka development",
            "A separate State for Hyderabad-Karnataka",
            "Merger of Hyderabad-Karnataka with Telangana",
            "Special courts for the region"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371J provides for equitable allocation of funds, employment, and education opportunities for the Hyderabad-Karnataka region."
    },
    {
        "id": "ch78-l1-q34",
        "question": "Which of the following correctly pairs the Article with the State?",
        "options": [
            "371A - Mizoram",
            "371C - Manipur",
            "371F - Goa",
            "371H - Nagaland"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371C deals with Manipur. 371A is Nagaland, 371F is Sikkim, 371H is Arunachal Pradesh."
    },
    {
        "id": "ch78-l1-q35",
        "question": "The Supreme Court upheld the abrogation of Article 370 in which case?",
        "options": [
            "Kesavananda Bharati case",
            "In re Article 370 (2023)",
            "Minerva Mills case",
            "SR Bommai case"
        ],
        "correctAnswerIndex": 1,
        "explanation": "In December 2023, the Supreme Court upheld the abrogation of Article 370."
    },
    {
        "id": "ch78-l1-q36",
        "question": "Article 371 provides that the Governor of Maharashtra shall establish separate development boards. The Governor acts on whose advice for this?",
        "options": [
            "The President's advice",
            "His own discretion as a special responsibility",
            "The Chief Minister's advice",
            "The Supreme Court's direction"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Governor has a special responsibility under Article 371 to establish development boards."
    },
    {
        "id": "ch78-l1-q37",
        "question": "Which Article was temporarily inserted for the State of Andhra Pradesh before the creation of Telangana?",
        "options": [
            "Article 371",
            "Article 371D",
            "Article 371E",
            "All of the above"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371D was originally for united Andhra Pradesh and now applies to both AP and Telangana."
    },
    {
        "id": "ch78-l1-q38",
        "question": "Under Article 370 (before abrogation), which of the following was NOT applicable to J&K?",
        "options": [
            "Article 1",
            "Article 370 itself",
            "Most provisions of Part III",
            "The Preamble of the Constitution"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Most fundamental rights under Part III were applicable to J&K, but many other provisions of the Constitution were not directly applicable."
    },
    {
        "id": "ch78-l1-q39",
        "question": "Article 35A (now abrogated) was related to:",
        "options": [
            "Special rights of permanent residents of J&K",
            "Special provisions for Nagaland",
            "Official language provisions",
            "Emergency provisions"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 35A defined permanent residents of J&K and gave the State Legislature power to define their special rights and privileges."
    },
    {
        "id": "ch78-l1-q40",
        "question": "The J&K Reorganisation Act, 2019 bifurcated J&K into:",
        "options": [
            "Two States",
            "Two Union Territories",
            "One State and one UT",
            "Three UTs"
        ],
        "correctAnswerIndex": 1,
        "explanation": "J&K was bifurcated into two UTs: Jammu & Kashmir (with legislature) and Ladakh (without legislature)."
    },
    {
        "id": "ch78-l1-q41",
        "question": "Which northeastern State does NOT have a special provision Article (371 series)?",
        "options": [
            "Nagaland",
            "Meghalaya",
            "Mizoram",
            "Arunachal Pradesh"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Meghalaya does not have a dedicated 371 series Article, though it has protections under the Sixth Schedule."
    },
    {
        "id": "ch78-l1-q42",
        "question": "The special provisions for northeastern States primarily aim to protect:",
        "options": [
            "Industrial development",
            "Tribal identity, customary law, and land ownership",
            "Military installations",
            "Foreign trade"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The special provisions for NE States primarily protect tribal identity, customary practices, and land rights."
    },
    {
        "id": "ch78-l1-q43",
        "question": "Under Article 371A, the Governor of Nagaland has special responsibility with respect to:",
        "options": [
            "Law and order until the insurgency ends",
            "Development of tribal areas",
            "Naga customary law enforcement",
            "Internal security only"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Governor has special responsibility for law and order so long as the internal disturbance continues."
    },
    {
        "id": "ch78-l1-q44",
        "question": "Article 371D was inserted by which Constitutional Amendment?",
        "options": [
            "30th Amendment",
            "32nd Amendment",
            "34th Amendment",
            "36th Amendment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 32nd Amendment Act (1973) inserted Article 371D for Andhra Pradesh."
    },
    {
        "id": "ch78-l1-q45",
        "question": "The term 'Special Category States' is related to:",
        "options": [
            "Constitutional special provisions under 371 series",
            "Planning Commission/NITI Aayog financial allocation categories",
            "Supreme Court classification",
            "Election Commission designation"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Special Category Status is a Planning Commission/NITI Aayog designation for financial benefits, different from constitutional special provisions."
    },
    {
        "id": "ch78-l1-q46",
        "question": "Which of the following is a common theme across Articles 371A to 371J?",
        "options": [
            "All provide for separate statehood",
            "All protect against extension of Union laws without State consent",
            "Many provide for developmental boards or protection of tribal customs",
            "All provide for special courts"
        ],
        "correctAnswerIndex": 2,
        "explanation": "A common theme is the protection of tribal customs, land rights, and/or creation of development boards for backward regions."
    },
    {
        "id": "ch78-l1-q47",
        "question": "Can Article 371A provisions for Nagaland be amended by Parliament?",
        "options": [
            "Yes, by simple majority",
            "Yes, but only with the consent of the Nagaland State Legislature",
            "No, they are part of the basic structure",
            "Only with President's assent"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371A(1)(b) provides that its provisions cannot be amended unless the Legislative Assembly of Nagaland agrees."
    },
    {
        "id": "ch78-l1-q48",
        "question": "Article 369 is a temporary provision regarding:",
        "options": [
            "Special status for J&K",
            "Power of Parliament to legislate on State List matters for 5 years",
            "Emergency provisions",
            "Linguistic minorities"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 369 gave Parliament temporary power (for 5 years) to legislate on certain State List matters during the transitional period."
    },
    {
        "id": "ch78-l1-q49",
        "question": "Under Article 371F, the seats in the Sikkim Legislative Assembly are protected from:",
        "options": [
            "Any reduction",
            "Any increase",
            "Delimitation for 25 years",
            "Reservation for SC/STs"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371F contains special provisions to protect the composition of the Sikkim Assembly."
    },
    {
        "id": "ch78-l1-q50",
        "question": "Which of the following best describes the purpose of special provisions under Part XXI?",
        "options": [
            "To create inequality among States",
            "To address unique historical, geographical, and demographic challenges of certain States",
            "To enforce uniform governance",
            "To restrict State autonomy"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Special provisions aim to address unique challenges and protect distinct identities of certain States and regions."
    },
    {
        "id": "ch78-l1-q51",
        "question": "Consider the following pairs:\\n1. Article 371A — Nagaland\\n2. Article 371G — Mizoram\\n3. Article 371H — Sikkim\\nWhich are correctly matched?",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 0,
        "explanation": "371H is for Arunachal Pradesh, not Sikkim (which is 371F)."
    },
    {
        "id": "ch78-l1-q52",
        "question": "Assertion (A): Article 370 was a temporary provision.\\nReason (R): It was placed under Part XXI titled 'Temporary, Transitional, and Special Provisions'.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 370 was explicitly a temporary provision as indicated by its heading and placement in Part XXI."
    },
    {
        "id": "ch78-l1-q53",
        "question": "Which State's special provisions include protection of ownership and transfer of land?",
        "options": [
            "Goa under Article 371I",
            "Nagaland under Article 371A",
            "Karnataka under Article 371J",
            "Andhra Pradesh under Article 371D"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371A protects Naga customary land ownership and prevents its transfer without the Assembly's consent."
    },
    {
        "id": "ch78-l1-q54",
        "question": "Article 371G for Mizoram protects which of the following?\\n1. Religious or social practices\\n2. Customary law and procedure\\n3. Ownership and transfer of land\\n4. Administration of civil and criminal justice",
        "options": [
            "1 and 2 only",
            "1, 2, and 3 only",
            "1, 2, 3, and 4",
            "2 and 4 only"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 371G protects all four aspects for Mizoram."
    },
    {
        "id": "ch78-l1-q55",
        "question": "The Governor's special responsibility under Article 371H for Arunachal Pradesh means:",
        "options": [
            "The Governor acts independently without the CM's advice",
            "The Governor exercises individual judgment after consulting the CM",
            "The Governor can dismiss the CM",
            "The Governor can suspend the Constitution"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Governor exercises individual judgment after consulting the Council of Ministers but is not bound by their advice."
    },
    {
        "id": "ch78-l1-q56",
        "question": "Which of the following statements about Article 371J is correct?",
        "options": [
            "It establishes a separate State",
            "It provides for a development board for Hyderabad-Karnataka and reservation in education and employment",
            "It deals with Telangana only",
            "It was inserted by the 42nd Amendment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371J provides for a development board and equitable opportunities in public employment and education for Hyderabad-Karnataka."
    },
    {
        "id": "ch78-l1-q57",
        "question": "The 13th Amendment (1962) inserted Article 371A for Nagaland and also:",
        "options": [
            "Created the State of Meghalaya",
            "Created the State of Nagaland",
            "Merged Sikkim with India",
            "Abolished tribal councils"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 13th Amendment created the State of Nagaland and inserted Article 371A."
    },
    {
        "id": "ch78-l1-q58",
        "question": "Which of the following is a key difference between Article 370 (before abrogation) and Article 371A?",
        "options": [
            "370 was for J&K autonomy on most matters; 371A protects specific Naga customs and land",
            "370 protected tribal customs; 371A provided autonomy on all matters",
            "Both are identical",
            "Neither had any practical significance"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 370 provided broad constitutional autonomy to J&K, while 371A specifically protects Naga customs, law, and land."
    },
    {
        "id": "ch78-l1-q59",
        "question": "Under which Article can the President direct that a committee of the State Legislative Assembly from tribal areas be formed?",
        "options": [
            "Article 371 (Maharashtra/Gujarat)",
            "Article 371B (Assam)",
            "Article 371C (Manipur)",
            "Both B and C"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Both Articles 371B (Assam) and 371C (Manipur) provide for committees of MLAs from tribal/hill areas."
    },
    {
        "id": "ch78-l1-q60",
        "question": "Which of the following States was the last to get a special provision Article (371 series)?",
        "options": [
            "Goa (371I)",
            "Karnataka (371J)",
            "Mizoram (371G)",
            "Arunachal Pradesh (371H)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371J for Karnataka was inserted by the 98th Amendment (2012), making it the most recent."
    },
    {
        "id": "ch78-l1-q61",
        "question": "Consider the following amendments and their corresponding Articles:\\n1. 13th Amendment — Article 371A (Nagaland)\\n2. 36th Amendment — Article 371F (Sikkim)\\n3. 53rd Amendment — Article 371G (Mizoram)\\nWhich are correctly matched?",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1, 2, and 3",
            "None"
        ],
        "correctAnswerIndex": 2,
        "explanation": "All three pairs are correctly matched."
    },
    {
        "id": "ch78-l1-q62",
        "question": "Which of the following is NOT protected under Article 371G for Mizoram?",
        "options": [
            "Religious or social practices",
            "Customary law and procedure",
            "Nuclear energy and atomic resources",
            "Ownership and transfer of land"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Nuclear energy is a Union subject and is not covered under Article 371G's protections."
    },
    {
        "id": "ch78-l1-q63",
        "question": "Assertion (A): The special provisions under Part XXI are not uniform across all States.\\nReason (R): Different States have different historical, cultural, and administrative needs.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The non-uniformity is precisely because different States face different challenges."
    },
    {
        "id": "ch78-l1-q64",
        "question": "The inner line permit system in some northeastern States is related to which colonial-era legislation?",
        "options": [
            "Bengal Eastern Frontier Regulation, 1873",
            "Government of India Act, 1935",
            "Indian Councils Act, 1892",
            "Montagu-Chelmsford Reforms"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Inner Line Permit system traces back to the Bengal Eastern Frontier Regulation, 1873."
    },
    {
        "id": "ch78-l1-q65",
        "question": "Which of the following States requires an Inner Line Permit for outsiders to visit?",
        "options": [
            "Assam",
            "Arunachal Pradesh",
            "Meghalaya",
            "Tripura"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Arunachal Pradesh, Nagaland, Mizoram, and Manipur require Inner Line Permits."
    },
    {
        "id": "ch78-l1-q66",
        "question": "The development boards under Article 371 for Maharashtra and Gujarat are meant to ensure:",
        "options": [
            "Equitable distribution of development resources in backward regions",
            "Separation of the States",
            "Merger with neighboring States",
            "Special tax zones"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The development boards ensure equitable allocation of development expenditure and infrastructure in backward regions."
    },
    {
        "id": "ch78-l1-q67",
        "question": "Which Article provides that the High Court of a State shall have no jurisdiction over disputes regarding administrative orders under Article 371D?",
        "options": [
            "Article 371D itself",
            "Article 371E",
            "Article 226",
            "Article 142"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371D(5) excludes HC jurisdiction and provides for an Administrative Tribunal instead."
    },
    {
        "id": "ch78-l1-q68",
        "question": "The special provisions for Andhra Pradesh under Article 371D primarily address:",
        "options": [
            "Religious minorities",
            "Regional imbalance in education and employment between different regions",
            "Industrial development",
            "Agricultural subsidies"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371D addresses regional imbalance, particularly between Telangana, Rayalaseema, and coastal Andhra regions."
    },
    {
        "id": "ch78-l1-q69",
        "question": "Which of the following best describes Article 371F(f) for Sikkim?",
        "options": [
            "It abolishes the Sikkim Assembly",
            "It provides that the existing laws of Sikkim continue until modified",
            "It merges Sikkim with West Bengal",
            "It creates a separate judiciary for Sikkim"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371F(k) ensures continuity of existing Sikkimese laws until modified by competent authority."
    },
    {
        "id": "ch78-l1-q70",
        "question": "The North-Eastern Areas (Reorganisation) Act, 1971 carved out which States from Assam?",
        "options": [
            "Meghalaya, Manipur, and Tripura",
            "Only Meghalaya",
            "Nagaland and Mizoram",
            "Arunachal Pradesh and Sikkim"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The 1971 Act created the States of Meghalaya, Manipur, and Tripura from territories associated with Assam."
    },
    {
        "id": "ch78-l1-q71",
        "question": "Under Article 371B, who directs the establishment of the committee of the Assam Legislative Assembly?",
        "options": [
            "The Governor",
            "The Speaker",
            "The President",
            "The Chief Minister"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The President may make an order directing the establishment of such a committee."
    },
    {
        "id": "ch78-l1-q72",
        "question": "Which special provision Article ensures that the minimum size of the Goa Legislative Assembly is 30 members?",
        "options": [
            "Article 371G",
            "Article 371H",
            "Article 371I",
            "Article 371J"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 371I ensures the Goa Legislative Assembly shall not have less than 30 members."
    },
    {
        "id": "ch78-l1-q73",
        "question": "Can Parliament extend its laws to areas covered by Article 371A (Nagaland) without the State Assembly's resolution?",
        "options": [
            "Yes, in all cases",
            "No, the Nagaland Assembly must pass a resolution for it",
            "Only during Financial Emergency",
            "Only with the Governor's consent"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371A requires a resolution of the Nagaland Legislative Assembly before Parliament's laws on protected matters apply."
    },
    {
        "id": "ch78-l1-q74",
        "question": "Which constitutional provision is sometimes called the 'mini-Article 370' for northeastern States?",
        "options": [
            "Article 371A",
            "Sixth Schedule",
            "Article 371G",
            "None, this term is not used officially"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371A is sometimes informally called a 'mini-Article 370' due to its protective provisions for Nagaland."
    },
    {
        "id": "ch78-l1-q75",
        "question": "The Armed Forces Special Powers Act (AFSPA) has been a controversial law in States with special provisions. Under which List is defense?",
        "options": [
            "State List",
            "Concurrent List",
            "Union List",
            "Residuary powers"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Defense is Entry 1 of the Union List, making AFSPA a Central law."
    },
    {
        "id": "ch78-l1-q76",
        "question": "Article 371D empowers the President to provide for the establishment of a separate administrative tribunal. This provision was inserted to address:",
        "options": [
            "Corruption in judiciary",
            "Regional disputes over public employment in Andhra Pradesh",
            "International trade disputes",
            "Labor disputes"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The tribunal addresses disputes arising from orders regarding equitable allocation of opportunities in public employment."
    },
    {
        "id": "ch78-l1-q77",
        "question": "Assertion (A): Article 371A protects the ownership and transfer of land in Nagaland from central interference.\\nReason (R): Land in tribal areas of northeastern States is traditionally community-owned.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The protection of land ownership in Nagaland is directly linked to the community-based traditional land ownership system."
    },
    {
        "id": "ch78-l1-q78",
        "question": "Which of the following constitutional amendments reorganized the State of Andhra Pradesh?",
        "options": [
            "Andhra Pradesh Reorganisation Act, 2014 (not a constitutional amendment but an Act of Parliament)",
            "42nd Amendment",
            "44th Amendment",
            "92nd Amendment"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The AP Reorganisation Act, 2014 was an Act of Parliament (not a constitutional amendment) that created Telangana."
    },
    {
        "id": "ch78-l1-q79",
        "question": "The concept of 'Special Status' for States as discussed in recent debates (e.g., for Andhra Pradesh post-bifurcation) is granted by:",
        "options": [
            "The Constitution automatically",
            "The Planning Commission/NITI Aayog based on criteria",
            "The Supreme Court",
            "The Election Commission"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Special Category Status is a planning/financial category, not a constitutional provision."
    },
    {
        "id": "ch78-l1-q80",
        "question": "Which of the following is correct about Part XXI of the Constitution?",
        "options": [
            "It only contains temporary provisions",
            "It contains permanent special provisions for certain States as well",
            "It has been completely repealed",
            "It only dealt with J&K"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Part XXI contains both temporary transitional provisions and permanent special provisions like Articles 371A through 371J."
    },
    {
        "id": "ch78-l1-q81",
        "question": "Under Article 371, the Governor of Gujarat has special responsibility regarding:",
        "options": [
            "The Saurashtra and Kutch regions",
            "All of Gujarat uniformly",
            "Only Ahmedabad",
            "Only the tribal belt"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371 specifically provides for a development board for Saurashtra and Kutch."
    },
    {
        "id": "ch78-l1-q82",
        "question": "Which Article provides for temporary provisions regarding the State of Bihar (for development of the Jharkhand area)?",
        "options": [
            "Article 371",
            "Article 371A",
            "There is no specific 371 series Article for Bihar/Jharkhand",
            "Article 371K"
        ],
        "correctAnswerIndex": 2,
        "explanation": "There is no dedicated 371 series Article for Bihar or Jharkhand."
    },
    {
        "id": "ch78-l1-q83",
        "question": "The protection of customary law under Articles 371A and 371G covers which areas of law?",
        "options": [
            "Only criminal law",
            "Only civil law",
            "Decisions of disputes according to Naga/Mizo customary law",
            "Only property law"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Customary law protection covers various traditional dispute resolution mechanisms of the Nagas and Mizos."
    },
    {
        "id": "ch78-l1-q84",
        "question": "Which of the following amendments gave statehood to Arunachal Pradesh?",
        "options": [
            "53rd Amendment",
            "55th Amendment",
            "57th Amendment",
            "None; it was created by the State of Arunachal Pradesh Act, 1986"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Arunachal Pradesh became a State through the State of Arunachal Pradesh Act, 1986 (not a constitutional amendment)."
    },
    {
        "id": "ch78-l1-q85",
        "question": "Article 371F provides that the Governor of Sikkim shall have special responsibility for:",
        "options": [
            "Defense",
            "Peace and equitable arrangement for ensuring social and economic advancement for all sections",
            "Foreign affairs",
            "Nuclear policy"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Governor has special responsibility for peace and equitable social and economic advancement in Sikkim."
    },
    {
        "id": "ch78-l1-q86",
        "question": "Can Article 371A type provisions be inserted for new States in the future?",
        "options": [
            "No, Part XXI is frozen",
            "Yes, through a Constitutional Amendment",
            "Only with UN approval",
            "Only during a national emergency"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Parliament can insert new provisions through Constitutional Amendments, as was done with Article 371J in 2012."
    },
    {
        "id": "ch78-l1-q87",
        "question": "Which of the following is a feature unique to Article 371F (Sikkim)?",
        "options": [
            "It protects Sikkimese citizenship separately from Indian citizenship",
            "It protects old laws of Sikkim and prohibits review by all courts",
            "It merged Sikkim's Chogyal territory",
            "It provides seats for Sangha (monks) in the Sikkim Assembly"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Article 371F(f) provides for seats for the Sangha in the Sikkim Legislative Assembly."
    },
    {
        "id": "ch78-l1-q88",
        "question": "Consider the following statements about special provisions:\\n1. Article 371A was inserted by the 13th Amendment.\\n2. Article 371F was inserted by the 36th Amendment.\\n3. Article 371J was inserted by the 92nd Amendment.\\nWhich are correct?",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1, 2, and 3",
            "1 only"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371J was inserted by the 98th Amendment (not 92nd), so statement 3 is incorrect."
    },
    {
        "id": "ch78-l1-q89",
        "question": "The special provisions under Part XXI demonstrate which feature of Indian federalism?",
        "options": [
            "Rigid uniformity",
            "Asymmetric federalism",
            "Unitary character",
            "Confederate tendencies"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The varied special provisions for different States demonstrate India's asymmetric federal character."
    },
    {
        "id": "ch78-l1-q90",
        "question": "Which of the following is the correct chronological order of insertion of special provision Articles?",
        "options": [
            "371 → 371A → 371D → 371F → 371G → 371H → 371I → 371J",
            "371A → 371 → 371F → 371D → 371G → 371H → 371J → 371I",
            "371 → 371A → 371F → 371D → 371H → 371G → 371I → 371J",
            "371A → 371 → 371D → 371F → 371G → 371I → 371H → 371J"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The order follows: 371 (original), 371A (1963), 371D (1973), 371F (1975), 371G (1986), 371H (1986), 371I (1987), 371J (2012)."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch78-l2-q1",
        "question": "Which Article provided for a separate Governor for Nagaland with special responsibility?",
        "options": [
            "Article 370",
            "Article 371",
            "Article 371A",
            "Article 371H"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 371A provides for the Governor of Nagaland to have special responsibility for law and order."
    },
    {
        "id": "ch78-l2-q2",
        "question": "The insertion of Article 371J for Hyderabad-Karnataka was demanded to address:",
        "options": [
            "Linguistic differences",
            "Developmental backwardness of the region",
            "Religious differences",
            "Border disputes"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371J was inserted to address the developmental backwardness of the Hyderabad-Karnataka region."
    },
    {
        "id": "ch78-l2-q3",
        "question": "Under Article 371J, the President may provide for:",
        "options": [
            "Equitable allocation of funds for Hyderabad-Karnataka development",
            "A separate State for Hyderabad-Karnataka",
            "Merger of Hyderabad-Karnataka with Telangana",
            "Special courts for the region"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371J provides for equitable allocation of funds, employment, and education opportunities for the Hyderabad-Karnataka region."
    },
    {
        "id": "ch78-l2-q4",
        "question": "Which of the following correctly pairs the Article with the State?",
        "options": [
            "371A - Mizoram",
            "371C - Manipur",
            "371F - Goa",
            "371H - Nagaland"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371C deals with Manipur. 371A is Nagaland, 371F is Sikkim, 371H is Arunachal Pradesh."
    },
    {
        "id": "ch78-l2-q5",
        "question": "The Supreme Court upheld the abrogation of Article 370 in which case?",
        "options": [
            "Kesavananda Bharati case",
            "In re Article 370 (2023)",
            "Minerva Mills case",
            "SR Bommai case"
        ],
        "correctAnswerIndex": 1,
        "explanation": "In December 2023, the Supreme Court upheld the abrogation of Article 370."
    },
    {
        "id": "ch78-l2-q6",
        "question": "Article 371 provides that the Governor of Maharashtra shall establish separate development boards. The Governor acts on whose advice for this?",
        "options": [
            "The President's advice",
            "His own discretion as a special responsibility",
            "The Chief Minister's advice",
            "The Supreme Court's direction"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Governor has a special responsibility under Article 371 to establish development boards."
    },
    {
        "id": "ch78-l2-q7",
        "question": "Which Article was temporarily inserted for the State of Andhra Pradesh before the creation of Telangana?",
        "options": [
            "Article 371",
            "Article 371D",
            "Article 371E",
            "All of the above"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371D was originally for united Andhra Pradesh and now applies to both AP and Telangana."
    },
    {
        "id": "ch78-l2-q8",
        "question": "Under Article 370 (before abrogation), which of the following was NOT applicable to J&K?",
        "options": [
            "Article 1",
            "Article 370 itself",
            "Most provisions of Part III",
            "The Preamble of the Constitution"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Most fundamental rights under Part III were applicable to J&K, but many other provisions of the Constitution were not directly applicable."
    },
    {
        "id": "ch78-l2-q9",
        "question": "Article 35A (now abrogated) was related to:",
        "options": [
            "Special rights of permanent residents of J&K",
            "Special provisions for Nagaland",
            "Official language provisions",
            "Emergency provisions"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 35A defined permanent residents of J&K and gave the State Legislature power to define their special rights and privileges."
    },
    {
        "id": "ch78-l2-q10",
        "question": "The J&K Reorganisation Act, 2019 bifurcated J&K into:",
        "options": [
            "Two States",
            "Two Union Territories",
            "One State and one UT",
            "Three UTs"
        ],
        "correctAnswerIndex": 1,
        "explanation": "J&K was bifurcated into two UTs: Jammu & Kashmir (with legislature) and Ladakh (without legislature)."
    },
    {
        "id": "ch78-l2-q11",
        "question": "Which northeastern State does NOT have a special provision Article (371 series)?",
        "options": [
            "Nagaland",
            "Meghalaya",
            "Mizoram",
            "Arunachal Pradesh"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Meghalaya does not have a dedicated 371 series Article, though it has protections under the Sixth Schedule."
    },
    {
        "id": "ch78-l2-q12",
        "question": "The special provisions for northeastern States primarily aim to protect:",
        "options": [
            "Industrial development",
            "Tribal identity, customary law, and land ownership",
            "Military installations",
            "Foreign trade"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The special provisions for NE States primarily protect tribal identity, customary practices, and land rights."
    },
    {
        "id": "ch78-l2-q13",
        "question": "Under Article 371A, the Governor of Nagaland has special responsibility with respect to:",
        "options": [
            "Law and order until the insurgency ends",
            "Development of tribal areas",
            "Naga customary law enforcement",
            "Internal security only"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Governor has special responsibility for law and order so long as the internal disturbance continues."
    },
    {
        "id": "ch78-l2-q14",
        "question": "Article 371D was inserted by which Constitutional Amendment?",
        "options": [
            "30th Amendment",
            "32nd Amendment",
            "34th Amendment",
            "36th Amendment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 32nd Amendment Act (1973) inserted Article 371D for Andhra Pradesh."
    },
    {
        "id": "ch78-l2-q15",
        "question": "The term 'Special Category States' is related to:",
        "options": [
            "Constitutional special provisions under 371 series",
            "Planning Commission/NITI Aayog financial allocation categories",
            "Supreme Court classification",
            "Election Commission designation"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Special Category Status is a Planning Commission/NITI Aayog designation for financial benefits, different from constitutional special provisions."
    },
    {
        "id": "ch78-l2-q16",
        "question": "Which of the following is a common theme across Articles 371A to 371J?",
        "options": [
            "All provide for separate statehood",
            "All protect against extension of Union laws without State consent",
            "Many provide for developmental boards or protection of tribal customs",
            "All provide for special courts"
        ],
        "correctAnswerIndex": 2,
        "explanation": "A common theme is the protection of tribal customs, land rights, and/or creation of development boards for backward regions."
    },
    {
        "id": "ch78-l2-q17",
        "question": "Can Article 371A provisions for Nagaland be amended by Parliament?",
        "options": [
            "Yes, by simple majority",
            "Yes, but only with the consent of the Nagaland State Legislature",
            "No, they are part of the basic structure",
            "Only with President's assent"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371A(1)(b) provides that its provisions cannot be amended unless the Legislative Assembly of Nagaland agrees."
    },
    {
        "id": "ch78-l2-q18",
        "question": "Article 369 is a temporary provision regarding:",
        "options": [
            "Special status for J&K",
            "Power of Parliament to legislate on State List matters for 5 years",
            "Emergency provisions",
            "Linguistic minorities"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 369 gave Parliament temporary power (for 5 years) to legislate on certain State List matters during the transitional period."
    },
    {
        "id": "ch78-l2-q19",
        "question": "Under Article 371F, the seats in the Sikkim Legislative Assembly are protected from:",
        "options": [
            "Any reduction",
            "Any increase",
            "Delimitation for 25 years",
            "Reservation for SC/STs"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371F contains special provisions to protect the composition of the Sikkim Assembly."
    },
    {
        "id": "ch78-l2-q20",
        "question": "Which of the following best describes the purpose of special provisions under Part XXI?",
        "options": [
            "To create inequality among States",
            "To address unique historical, geographical, and demographic challenges of certain States",
            "To enforce uniform governance",
            "To restrict State autonomy"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Special provisions aim to address unique challenges and protect distinct identities of certain States and regions."
    },
    {
        "id": "ch78-l2-q21",
        "question": "Consider the following pairs:\\n1. Article 371A — Nagaland\\n2. Article 371G — Mizoram\\n3. Article 371H — Sikkim\\nWhich are correctly matched?",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 0,
        "explanation": "371H is for Arunachal Pradesh, not Sikkim (which is 371F)."
    },
    {
        "id": "ch78-l2-q22",
        "question": "Assertion (A): Article 370 was a temporary provision.\\nReason (R): It was placed under Part XXI titled 'Temporary, Transitional, and Special Provisions'.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 370 was explicitly a temporary provision as indicated by its heading and placement in Part XXI."
    },
    {
        "id": "ch78-l2-q23",
        "question": "Which State's special provisions include protection of ownership and transfer of land?",
        "options": [
            "Goa under Article 371I",
            "Nagaland under Article 371A",
            "Karnataka under Article 371J",
            "Andhra Pradesh under Article 371D"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371A protects Naga customary land ownership and prevents its transfer without the Assembly's consent."
    },
    {
        "id": "ch78-l2-q24",
        "question": "Article 371G for Mizoram protects which of the following?\\n1. Religious or social practices\\n2. Customary law and procedure\\n3. Ownership and transfer of land\\n4. Administration of civil and criminal justice",
        "options": [
            "1 and 2 only",
            "1, 2, and 3 only",
            "1, 2, 3, and 4",
            "2 and 4 only"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 371G protects all four aspects for Mizoram."
    },
    {
        "id": "ch78-l2-q25",
        "question": "The Governor's special responsibility under Article 371H for Arunachal Pradesh means:",
        "options": [
            "The Governor acts independently without the CM's advice",
            "The Governor exercises individual judgment after consulting the CM",
            "The Governor can dismiss the CM",
            "The Governor can suspend the Constitution"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Governor exercises individual judgment after consulting the Council of Ministers but is not bound by their advice."
    },
    {
        "id": "ch78-l2-q26",
        "question": "Which of the following statements about Article 371J is correct?",
        "options": [
            "It establishes a separate State",
            "It provides for a development board for Hyderabad-Karnataka and reservation in education and employment",
            "It deals with Telangana only",
            "It was inserted by the 42nd Amendment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371J provides for a development board and equitable opportunities in public employment and education for Hyderabad-Karnataka."
    },
    {
        "id": "ch78-l2-q27",
        "question": "The 13th Amendment (1962) inserted Article 371A for Nagaland and also:",
        "options": [
            "Created the State of Meghalaya",
            "Created the State of Nagaland",
            "Merged Sikkim with India",
            "Abolished tribal councils"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 13th Amendment created the State of Nagaland and inserted Article 371A."
    },
    {
        "id": "ch78-l2-q28",
        "question": "Which of the following is a key difference between Article 370 (before abrogation) and Article 371A?",
        "options": [
            "370 was for J&K autonomy on most matters; 371A protects specific Naga customs and land",
            "370 protected tribal customs; 371A provided autonomy on all matters",
            "Both are identical",
            "Neither had any practical significance"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 370 provided broad constitutional autonomy to J&K, while 371A specifically protects Naga customs, law, and land."
    },
    {
        "id": "ch78-l2-q29",
        "question": "Under which Article can the President direct that a committee of the State Legislative Assembly from tribal areas be formed?",
        "options": [
            "Article 371 (Maharashtra/Gujarat)",
            "Article 371B (Assam)",
            "Article 371C (Manipur)",
            "Both B and C"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Both Articles 371B (Assam) and 371C (Manipur) provide for committees of MLAs from tribal/hill areas."
    },
    {
        "id": "ch78-l2-q30",
        "question": "Which of the following States was the last to get a special provision Article (371 series)?",
        "options": [
            "Goa (371I)",
            "Karnataka (371J)",
            "Mizoram (371G)",
            "Arunachal Pradesh (371H)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371J for Karnataka was inserted by the 98th Amendment (2012), making it the most recent."
    },
    {
        "id": "ch78-l2-q31",
        "question": "Consider the following amendments and their corresponding Articles:\\n1. 13th Amendment — Article 371A (Nagaland)\\n2. 36th Amendment — Article 371F (Sikkim)\\n3. 53rd Amendment — Article 371G (Mizoram)\\nWhich are correctly matched?",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1, 2, and 3",
            "None"
        ],
        "correctAnswerIndex": 2,
        "explanation": "All three pairs are correctly matched."
    },
    {
        "id": "ch78-l2-q32",
        "question": "Which of the following is NOT protected under Article 371G for Mizoram?",
        "options": [
            "Religious or social practices",
            "Customary law and procedure",
            "Nuclear energy and atomic resources",
            "Ownership and transfer of land"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Nuclear energy is a Union subject and is not covered under Article 371G's protections."
    },
    {
        "id": "ch78-l2-q33",
        "question": "Assertion (A): The special provisions under Part XXI are not uniform across all States.\\nReason (R): Different States have different historical, cultural, and administrative needs.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The non-uniformity is precisely because different States face different challenges."
    },
    {
        "id": "ch78-l2-q34",
        "question": "The inner line permit system in some northeastern States is related to which colonial-era legislation?",
        "options": [
            "Bengal Eastern Frontier Regulation, 1873",
            "Government of India Act, 1935",
            "Indian Councils Act, 1892",
            "Montagu-Chelmsford Reforms"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Inner Line Permit system traces back to the Bengal Eastern Frontier Regulation, 1873."
    },
    {
        "id": "ch78-l2-q35",
        "question": "Which of the following States requires an Inner Line Permit for outsiders to visit?",
        "options": [
            "Assam",
            "Arunachal Pradesh",
            "Meghalaya",
            "Tripura"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Arunachal Pradesh, Nagaland, Mizoram, and Manipur require Inner Line Permits."
    },
    {
        "id": "ch78-l2-q36",
        "question": "The development boards under Article 371 for Maharashtra and Gujarat are meant to ensure:",
        "options": [
            "Equitable distribution of development resources in backward regions",
            "Separation of the States",
            "Merger with neighboring States",
            "Special tax zones"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The development boards ensure equitable allocation of development expenditure and infrastructure in backward regions."
    },
    {
        "id": "ch78-l2-q37",
        "question": "Which Article provides that the High Court of a State shall have no jurisdiction over disputes regarding administrative orders under Article 371D?",
        "options": [
            "Article 371D itself",
            "Article 371E",
            "Article 226",
            "Article 142"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371D(5) excludes HC jurisdiction and provides for an Administrative Tribunal instead."
    },
    {
        "id": "ch78-l2-q38",
        "question": "The special provisions for Andhra Pradesh under Article 371D primarily address:",
        "options": [
            "Religious minorities",
            "Regional imbalance in education and employment between different regions",
            "Industrial development",
            "Agricultural subsidies"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371D addresses regional imbalance, particularly between Telangana, Rayalaseema, and coastal Andhra regions."
    },
    {
        "id": "ch78-l2-q39",
        "question": "Which of the following best describes Article 371F(f) for Sikkim?",
        "options": [
            "It abolishes the Sikkim Assembly",
            "It provides that the existing laws of Sikkim continue until modified",
            "It merges Sikkim with West Bengal",
            "It creates a separate judiciary for Sikkim"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371F(k) ensures continuity of existing Sikkimese laws until modified by competent authority."
    },
    {
        "id": "ch78-l2-q40",
        "question": "The North-Eastern Areas (Reorganisation) Act, 1971 carved out which States from Assam?",
        "options": [
            "Meghalaya, Manipur, and Tripura",
            "Only Meghalaya",
            "Nagaland and Mizoram",
            "Arunachal Pradesh and Sikkim"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The 1971 Act created the States of Meghalaya, Manipur, and Tripura from territories associated with Assam."
    },
    {
        "id": "ch78-l2-q41",
        "question": "Under Article 371B, who directs the establishment of the committee of the Assam Legislative Assembly?",
        "options": [
            "The Governor",
            "The Speaker",
            "The President",
            "The Chief Minister"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The President may make an order directing the establishment of such a committee."
    },
    {
        "id": "ch78-l2-q42",
        "question": "Which special provision Article ensures that the minimum size of the Goa Legislative Assembly is 30 members?",
        "options": [
            "Article 371G",
            "Article 371H",
            "Article 371I",
            "Article 371J"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 371I ensures the Goa Legislative Assembly shall not have less than 30 members."
    },
    {
        "id": "ch78-l2-q43",
        "question": "Can Parliament extend its laws to areas covered by Article 371A (Nagaland) without the State Assembly's resolution?",
        "options": [
            "Yes, in all cases",
            "No, the Nagaland Assembly must pass a resolution for it",
            "Only during Financial Emergency",
            "Only with the Governor's consent"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371A requires a resolution of the Nagaland Legislative Assembly before Parliament's laws on protected matters apply."
    },
    {
        "id": "ch78-l2-q44",
        "question": "Which constitutional provision is sometimes called the 'mini-Article 370' for northeastern States?",
        "options": [
            "Article 371A",
            "Sixth Schedule",
            "Article 371G",
            "None, this term is not used officially"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371A is sometimes informally called a 'mini-Article 370' due to its protective provisions for Nagaland."
    },
    {
        "id": "ch78-l2-q45",
        "question": "The Armed Forces Special Powers Act (AFSPA) has been a controversial law in States with special provisions. Under which List is defense?",
        "options": [
            "State List",
            "Concurrent List",
            "Union List",
            "Residuary powers"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Defense is Entry 1 of the Union List, making AFSPA a Central law."
    },
    {
        "id": "ch78-l2-q46",
        "question": "Article 371D empowers the President to provide for the establishment of a separate administrative tribunal. This provision was inserted to address:",
        "options": [
            "Corruption in judiciary",
            "Regional disputes over public employment in Andhra Pradesh",
            "International trade disputes",
            "Labor disputes"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The tribunal addresses disputes arising from orders regarding equitable allocation of opportunities in public employment."
    },
    {
        "id": "ch78-l2-q47",
        "question": "Assertion (A): Article 371A protects the ownership and transfer of land in Nagaland from central interference.\\nReason (R): Land in tribal areas of northeastern States is traditionally community-owned.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The protection of land ownership in Nagaland is directly linked to the community-based traditional land ownership system."
    },
    {
        "id": "ch78-l2-q48",
        "question": "Which of the following constitutional amendments reorganized the State of Andhra Pradesh?",
        "options": [
            "Andhra Pradesh Reorganisation Act, 2014 (not a constitutional amendment but an Act of Parliament)",
            "42nd Amendment",
            "44th Amendment",
            "92nd Amendment"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The AP Reorganisation Act, 2014 was an Act of Parliament (not a constitutional amendment) that created Telangana."
    },
    {
        "id": "ch78-l2-q49",
        "question": "The concept of 'Special Status' for States as discussed in recent debates (e.g., for Andhra Pradesh post-bifurcation) is granted by:",
        "options": [
            "The Constitution automatically",
            "The Planning Commission/NITI Aayog based on criteria",
            "The Supreme Court",
            "The Election Commission"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Special Category Status is a planning/financial category, not a constitutional provision."
    },
    {
        "id": "ch78-l2-q50",
        "question": "Which of the following is correct about Part XXI of the Constitution?",
        "options": [
            "It only contains temporary provisions",
            "It contains permanent special provisions for certain States as well",
            "It has been completely repealed",
            "It only dealt with J&K"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Part XXI contains both temporary transitional provisions and permanent special provisions like Articles 371A through 371J."
    },
    {
        "id": "ch78-l2-q51",
        "question": "Under Article 371, the Governor of Gujarat has special responsibility regarding:",
        "options": [
            "The Saurashtra and Kutch regions",
            "All of Gujarat uniformly",
            "Only Ahmedabad",
            "Only the tribal belt"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371 specifically provides for a development board for Saurashtra and Kutch."
    },
    {
        "id": "ch78-l2-q52",
        "question": "Which Article provides for temporary provisions regarding the State of Bihar (for development of the Jharkhand area)?",
        "options": [
            "Article 371",
            "Article 371A",
            "There is no specific 371 series Article for Bihar/Jharkhand",
            "Article 371K"
        ],
        "correctAnswerIndex": 2,
        "explanation": "There is no dedicated 371 series Article for Bihar or Jharkhand."
    },
    {
        "id": "ch78-l2-q53",
        "question": "The protection of customary law under Articles 371A and 371G covers which areas of law?",
        "options": [
            "Only criminal law",
            "Only civil law",
            "Decisions of disputes according to Naga/Mizo customary law",
            "Only property law"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Customary law protection covers various traditional dispute resolution mechanisms of the Nagas and Mizos."
    },
    {
        "id": "ch78-l2-q54",
        "question": "Which of the following amendments gave statehood to Arunachal Pradesh?",
        "options": [
            "53rd Amendment",
            "55th Amendment",
            "57th Amendment",
            "None; it was created by the State of Arunachal Pradesh Act, 1986"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Arunachal Pradesh became a State through the State of Arunachal Pradesh Act, 1986 (not a constitutional amendment)."
    },
    {
        "id": "ch78-l2-q55",
        "question": "Article 371F provides that the Governor of Sikkim shall have special responsibility for:",
        "options": [
            "Defense",
            "Peace and equitable arrangement for ensuring social and economic advancement for all sections",
            "Foreign affairs",
            "Nuclear policy"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Governor has special responsibility for peace and equitable social and economic advancement in Sikkim."
    },
    {
        "id": "ch78-l2-q56",
        "question": "Can Article 371A type provisions be inserted for new States in the future?",
        "options": [
            "No, Part XXI is frozen",
            "Yes, through a Constitutional Amendment",
            "Only with UN approval",
            "Only during a national emergency"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Parliament can insert new provisions through Constitutional Amendments, as was done with Article 371J in 2012."
    },
    {
        "id": "ch78-l2-q57",
        "question": "Which of the following is a feature unique to Article 371F (Sikkim)?",
        "options": [
            "It protects Sikkimese citizenship separately from Indian citizenship",
            "It protects old laws of Sikkim and prohibits review by all courts",
            "It merged Sikkim's Chogyal territory",
            "It provides seats for Sangha (monks) in the Sikkim Assembly"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Article 371F(f) provides for seats for the Sangha in the Sikkim Legislative Assembly."
    },
    {
        "id": "ch78-l2-q58",
        "question": "Consider the following statements about special provisions:\\n1. Article 371A was inserted by the 13th Amendment.\\n2. Article 371F was inserted by the 36th Amendment.\\n3. Article 371J was inserted by the 92nd Amendment.\\nWhich are correct?",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1, 2, and 3",
            "1 only"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371J was inserted by the 98th Amendment (not 92nd), so statement 3 is incorrect."
    },
    {
        "id": "ch78-l2-q59",
        "question": "The special provisions under Part XXI demonstrate which feature of Indian federalism?",
        "options": [
            "Rigid uniformity",
            "Asymmetric federalism",
            "Unitary character",
            "Confederate tendencies"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The varied special provisions for different States demonstrate India's asymmetric federal character."
    },
    {
        "id": "ch78-l2-q60",
        "question": "Which of the following is the correct chronological order of insertion of special provision Articles?",
        "options": [
            "371 → 371A → 371D → 371F → 371G → 371H → 371I → 371J",
            "371A → 371 → 371F → 371D → 371G → 371H → 371J → 371I",
            "371 → 371A → 371F → 371D → 371H → 371G → 371I → 371J",
            "371A → 371 → 371D → 371F → 371G → 371I → 371H → 371J"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The order follows: 371 (original), 371A (1963), 371D (1973), 371F (1975), 371G (1986), 371H (1986), 371I (1987), 371J (2012)."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch78-l3-q1",
        "question": "Consider the following amendments and their corresponding Articles:\\n1. 13th Amendment — Article 371A (Nagaland)\\n2. 36th Amendment — Article 371F (Sikkim)\\n3. 53rd Amendment — Article 371G (Mizoram)\\nWhich are correctly matched?",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1, 2, and 3",
            "None"
        ],
        "correctAnswerIndex": 2,
        "explanation": "All three pairs are correctly matched."
    },
    {
        "id": "ch78-l3-q2",
        "question": "Which of the following is NOT protected under Article 371G for Mizoram?",
        "options": [
            "Religious or social practices",
            "Customary law and procedure",
            "Nuclear energy and atomic resources",
            "Ownership and transfer of land"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Nuclear energy is a Union subject and is not covered under Article 371G's protections."
    },
    {
        "id": "ch78-l3-q3",
        "question": "Assertion (A): The special provisions under Part XXI are not uniform across all States.\\nReason (R): Different States have different historical, cultural, and administrative needs.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The non-uniformity is precisely because different States face different challenges."
    },
    {
        "id": "ch78-l3-q4",
        "question": "The inner line permit system in some northeastern States is related to which colonial-era legislation?",
        "options": [
            "Bengal Eastern Frontier Regulation, 1873",
            "Government of India Act, 1935",
            "Indian Councils Act, 1892",
            "Montagu-Chelmsford Reforms"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Inner Line Permit system traces back to the Bengal Eastern Frontier Regulation, 1873."
    },
    {
        "id": "ch78-l3-q5",
        "question": "Which of the following States requires an Inner Line Permit for outsiders to visit?",
        "options": [
            "Assam",
            "Arunachal Pradesh",
            "Meghalaya",
            "Tripura"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Arunachal Pradesh, Nagaland, Mizoram, and Manipur require Inner Line Permits."
    },
    {
        "id": "ch78-l3-q6",
        "question": "The development boards under Article 371 for Maharashtra and Gujarat are meant to ensure:",
        "options": [
            "Equitable distribution of development resources in backward regions",
            "Separation of the States",
            "Merger with neighboring States",
            "Special tax zones"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The development boards ensure equitable allocation of development expenditure and infrastructure in backward regions."
    },
    {
        "id": "ch78-l3-q7",
        "question": "Which Article provides that the High Court of a State shall have no jurisdiction over disputes regarding administrative orders under Article 371D?",
        "options": [
            "Article 371D itself",
            "Article 371E",
            "Article 226",
            "Article 142"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371D(5) excludes HC jurisdiction and provides for an Administrative Tribunal instead."
    },
    {
        "id": "ch78-l3-q8",
        "question": "The special provisions for Andhra Pradesh under Article 371D primarily address:",
        "options": [
            "Religious minorities",
            "Regional imbalance in education and employment between different regions",
            "Industrial development",
            "Agricultural subsidies"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371D addresses regional imbalance, particularly between Telangana, Rayalaseema, and coastal Andhra regions."
    },
    {
        "id": "ch78-l3-q9",
        "question": "Which of the following best describes Article 371F(f) for Sikkim?",
        "options": [
            "It abolishes the Sikkim Assembly",
            "It provides that the existing laws of Sikkim continue until modified",
            "It merges Sikkim with West Bengal",
            "It creates a separate judiciary for Sikkim"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371F(k) ensures continuity of existing Sikkimese laws until modified by competent authority."
    },
    {
        "id": "ch78-l3-q10",
        "question": "The North-Eastern Areas (Reorganisation) Act, 1971 carved out which States from Assam?",
        "options": [
            "Meghalaya, Manipur, and Tripura",
            "Only Meghalaya",
            "Nagaland and Mizoram",
            "Arunachal Pradesh and Sikkim"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The 1971 Act created the States of Meghalaya, Manipur, and Tripura from territories associated with Assam."
    },
    {
        "id": "ch78-l3-q11",
        "question": "Under Article 371B, who directs the establishment of the committee of the Assam Legislative Assembly?",
        "options": [
            "The Governor",
            "The Speaker",
            "The President",
            "The Chief Minister"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The President may make an order directing the establishment of such a committee."
    },
    {
        "id": "ch78-l3-q12",
        "question": "Which special provision Article ensures that the minimum size of the Goa Legislative Assembly is 30 members?",
        "options": [
            "Article 371G",
            "Article 371H",
            "Article 371I",
            "Article 371J"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 371I ensures the Goa Legislative Assembly shall not have less than 30 members."
    },
    {
        "id": "ch78-l3-q13",
        "question": "Can Parliament extend its laws to areas covered by Article 371A (Nagaland) without the State Assembly's resolution?",
        "options": [
            "Yes, in all cases",
            "No, the Nagaland Assembly must pass a resolution for it",
            "Only during Financial Emergency",
            "Only with the Governor's consent"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 371A requires a resolution of the Nagaland Legislative Assembly before Parliament's laws on protected matters apply."
    },
    {
        "id": "ch78-l3-q14",
        "question": "Which constitutional provision is sometimes called the 'mini-Article 370' for northeastern States?",
        "options": [
            "Article 371A",
            "Sixth Schedule",
            "Article 371G",
            "None, this term is not used officially"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371A is sometimes informally called a 'mini-Article 370' due to its protective provisions for Nagaland."
    },
    {
        "id": "ch78-l3-q15",
        "question": "The Armed Forces Special Powers Act (AFSPA) has been a controversial law in States with special provisions. Under which List is defense?",
        "options": [
            "State List",
            "Concurrent List",
            "Union List",
            "Residuary powers"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Defense is Entry 1 of the Union List, making AFSPA a Central law."
    },
    {
        "id": "ch78-l3-q16",
        "question": "Article 371D empowers the President to provide for the establishment of a separate administrative tribunal. This provision was inserted to address:",
        "options": [
            "Corruption in judiciary",
            "Regional disputes over public employment in Andhra Pradesh",
            "International trade disputes",
            "Labor disputes"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The tribunal addresses disputes arising from orders regarding equitable allocation of opportunities in public employment."
    },
    {
        "id": "ch78-l3-q17",
        "question": "Assertion (A): Article 371A protects the ownership and transfer of land in Nagaland from central interference.\\nReason (R): Land in tribal areas of northeastern States is traditionally community-owned.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The protection of land ownership in Nagaland is directly linked to the community-based traditional land ownership system."
    },
    {
        "id": "ch78-l3-q18",
        "question": "Which of the following constitutional amendments reorganized the State of Andhra Pradesh?",
        "options": [
            "Andhra Pradesh Reorganisation Act, 2014 (not a constitutional amendment but an Act of Parliament)",
            "42nd Amendment",
            "44th Amendment",
            "92nd Amendment"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The AP Reorganisation Act, 2014 was an Act of Parliament (not a constitutional amendment) that created Telangana."
    },
    {
        "id": "ch78-l3-q19",
        "question": "The concept of 'Special Status' for States as discussed in recent debates (e.g., for Andhra Pradesh post-bifurcation) is granted by:",
        "options": [
            "The Constitution automatically",
            "The Planning Commission/NITI Aayog based on criteria",
            "The Supreme Court",
            "The Election Commission"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Special Category Status is a planning/financial category, not a constitutional provision."
    },
    {
        "id": "ch78-l3-q20",
        "question": "Which of the following is correct about Part XXI of the Constitution?",
        "options": [
            "It only contains temporary provisions",
            "It contains permanent special provisions for certain States as well",
            "It has been completely repealed",
            "It only dealt with J&K"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Part XXI contains both temporary transitional provisions and permanent special provisions like Articles 371A through 371J."
    },
    {
        "id": "ch78-l3-q21",
        "question": "Under Article 371, the Governor of Gujarat has special responsibility regarding:",
        "options": [
            "The Saurashtra and Kutch regions",
            "All of Gujarat uniformly",
            "Only Ahmedabad",
            "Only the tribal belt"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371 specifically provides for a development board for Saurashtra and Kutch."
    },
    {
        "id": "ch78-l3-q22",
        "question": "Which Article provides for temporary provisions regarding the State of Bihar (for development of the Jharkhand area)?",
        "options": [
            "Article 371",
            "Article 371A",
            "There is no specific 371 series Article for Bihar/Jharkhand",
            "Article 371K"
        ],
        "correctAnswerIndex": 2,
        "explanation": "There is no dedicated 371 series Article for Bihar or Jharkhand."
    },
    {
        "id": "ch78-l3-q23",
        "question": "The protection of customary law under Articles 371A and 371G covers which areas of law?",
        "options": [
            "Only criminal law",
            "Only civil law",
            "Decisions of disputes according to Naga/Mizo customary law",
            "Only property law"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Customary law protection covers various traditional dispute resolution mechanisms of the Nagas and Mizos."
    },
    {
        "id": "ch78-l3-q24",
        "question": "Which of the following amendments gave statehood to Arunachal Pradesh?",
        "options": [
            "53rd Amendment",
            "55th Amendment",
            "57th Amendment",
            "None; it was created by the State of Arunachal Pradesh Act, 1986"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Arunachal Pradesh became a State through the State of Arunachal Pradesh Act, 1986 (not a constitutional amendment)."
    },
    {
        "id": "ch78-l3-q25",
        "question": "Article 371F provides that the Governor of Sikkim shall have special responsibility for:",
        "options": [
            "Defense",
            "Peace and equitable arrangement for ensuring social and economic advancement for all sections",
            "Foreign affairs",
            "Nuclear policy"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Governor has special responsibility for peace and equitable social and economic advancement in Sikkim."
    },
    {
        "id": "ch78-l3-q26",
        "question": "Can Article 371A type provisions be inserted for new States in the future?",
        "options": [
            "No, Part XXI is frozen",
            "Yes, through a Constitutional Amendment",
            "Only with UN approval",
            "Only during a national emergency"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Parliament can insert new provisions through Constitutional Amendments, as was done with Article 371J in 2012."
    },
    {
        "id": "ch78-l3-q27",
        "question": "Which of the following is a feature unique to Article 371F (Sikkim)?",
        "options": [
            "It protects Sikkimese citizenship separately from Indian citizenship",
            "It protects old laws of Sikkim and prohibits review by all courts",
            "It merged Sikkim's Chogyal territory",
            "It provides seats for Sangha (monks) in the Sikkim Assembly"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Article 371F(f) provides for seats for the Sangha in the Sikkim Legislative Assembly."
    },
    {
        "id": "ch78-l3-q28",
        "question": "Consider the following statements about special provisions:\\n1. Article 371A was inserted by the 13th Amendment.\\n2. Article 371F was inserted by the 36th Amendment.\\n3. Article 371J was inserted by the 92nd Amendment.\\nWhich are correct?",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1, 2, and 3",
            "1 only"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 371J was inserted by the 98th Amendment (not 92nd), so statement 3 is incorrect."
    },
    {
        "id": "ch78-l3-q29",
        "question": "The special provisions under Part XXI demonstrate which feature of Indian federalism?",
        "options": [
            "Rigid uniformity",
            "Asymmetric federalism",
            "Unitary character",
            "Confederate tendencies"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The varied special provisions for different States demonstrate India's asymmetric federal character."
    },
    {
        "id": "ch78-l3-q30",
        "question": "Which of the following is the correct chronological order of insertion of special provision Articles?",
        "options": [
            "371 → 371A → 371D → 371F → 371G → 371H → 371I → 371J",
            "371A → 371 → 371F → 371D → 371G → 371H → 371J → 371I",
            "371 → 371A → 371F → 371D → 371H → 371G → 371I → 371J",
            "371A → 371 → 371D → 371F → 371G → 371I → 371H → 371J"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The order follows: 371 (original), 371A (1963), 371D (1973), 371F (1975), 371G (1986), 371H (1986), 371I (1987), 371J (2012)."
    }
];

export const CHAPTER_78_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
