import { ChapterLevelData } from "../level-types";

// Level 1: The Text-Book Stickler (Strictly Chapter 6)
const LEVEL_1_QUESTIONS = [
    {
        question: "Article 1 of the Constitution describes India, that is Bharat, as a:",
        options: ["Federation of States", "Union of States", "Confederation of States", "United States of India"],
        correctAnswerIndex: 1, // b) Union of States
        explanation: "Article 1 describes India as a 'Union of States'."
    },
    {
        question: "According to Dr. B.R. Ambedkar, the phrase \"Union of States\" has been preferred to \"Federation of States\" for two reasons. One is that the Indian Federation is not the result of an agreement among the states. What is the second reason?",
        options: ["The states have no right to secede from the federation.", "The states are administratively dependent on the Centre.", "The Centre can alter the boundaries of the states.", "The Judiciary is integrated."],
        correctAnswerIndex: 0, // a) The states have no right to secede
        explanation: "The second reason is that the states have no right to secede from the federation."
    },
    {
        question: "According to Article 1, the \"Territory of India\" can be classified into three categories. Which of the following is NOT one of them?",
        options: ["Territories of the States", "Union Territories", "Territories that may be acquired by the Government of India at any time", "Territories of the Autonomous District Councils"],
        correctAnswerIndex: 3, // d) Territories of the ADCs
        explanation: "The three categories are States, UTs, and Acquired Territories."
    },
    {
        question: "The names of states and union territories and their territorial extent are mentioned in the:",
        options: ["First Schedule", "Second Schedule", "Third Schedule", "Fourth Schedule"],
        correctAnswerIndex: 0, // a) First Schedule
        explanation: "First Schedule lists the names and extent of States and UTs."
    },
    {
        question: "Which Article empowers the Parliament to 'admit into the Union of India, or establish, new states on such terms and conditions as it thinks fit'?",
        options: ["Article 1", "Article 2", "Article 3", "Article 4"],
        correctAnswerIndex: 1, // b) Article 2
        explanation: "Article 2 relates to admission/establishment of new states."
    },
    {
        question: "Article 2 relates to the admission or establishment of new states that are:",
        options: ["Already part of the Union of India.", "Not already part of the Union of India.", "Formed by dividing existing states.", "Formed by uniting two or more states."],
        correctAnswerIndex: 1, // b) Not already part of the Union
        explanation: "Article 2 deals with external adjustment (new states not part of Union)."
    },
    {
        question: "Article 3 authorizes the Parliament to do all of the following EXCEPT:",
        options: ["Form a new state by separation of territory from any state.", "Increase the area of any state.", "Alter the name of any state.", "Cede a part of Indian territory to a foreign state."],
        correctAnswerIndex: 3, // d) Cede a part of Indian territory
        explanation: "Article 3 does not cover cession of territory to a foreign state (Berubari case)."
    },
    {
        question: "Article 3 lays down two conditions for the formation/alteration of states. One is that such a bill can be introduced in the Parliament only with the prior recommendation of the:",
        options: ["Prime Minister", "President", "Speaker of Lok Sabha", "Concerned State Legislature"],
        correctAnswerIndex: 1, // b) President
        explanation: "Prior recommendation of the President is required."
    },
    {
        question: "The second condition under Article 3 is that before recommending the bill, the President has to refer the same to the:",
        options: ["Supreme Court for advice.", "State Legislature concerned for expressing its views within a specified period.", "Rajya Sabha for approval.", "Governor of the state."],
        correctAnswerIndex: 1, // b) State Legislature concerned
        explanation: "Must be referred to the State Legislature for its views."
    },
    {
        question: "Is the Parliament bound by the views of the State Legislature regarding the alteration of its boundaries/name?",
        options: ["Yes, absolutely.", "Yes, if the state passes a unanimous resolution.", "No, the Parliament can either accept or reject them.", "Yes, but only for changing the name, not boundaries."],
        correctAnswerIndex: 2, // c) No
        explanation: "Parliament is not bound by the views of the State Legislature."
    },
    {
        question: "In the case of a Union Territory, is it necessary to refer the bill to its legislature (if it has one) for views?",
        options: ["Yes, mandatory.", "No, no reference need be made to the concerned legislature.", "Yes, but only for Delhi and Puducherry.", "Depends on the discretion of the Lieutenant Governor."],
        correctAnswerIndex: 1, // b) No
        explanation: "No reference needs to be made to the concerned legislature of a UT."
    },
    {
        question: "Article 4 declares that laws made for admission or establishment of new states (under Article 2) and formation of new states (under Article 3) are:",
        options: ["To be considered as amendments of the Constitution under Article 368.", "Not to be considered as amendments of the Constitution under Article 368.", "To be passed by a special majority of the Parliament.", "To be ratified by half of the state legislatures."],
        correctAnswerIndex: 1, // b) Not to be considered as amendments
        explanation: "Article 4 states they are not amendments under Article 368."
    },
    {
        question: "Therefore, such laws (under Art 2 and 3) can be passed by the Parliament by a:",
        options: ["Simple Majority", "Special Majority", "Absolute Majority", "Effective Majority"],
        correctAnswerIndex: 0, // a) Simple Majority
        explanation: "Passed by a Simple Majority."
    },
    {
        question: "Does the power of Parliament to diminish the area of a state (under Article 3) include the power to cede Indian territory to a foreign country?",
        options: ["Yes, as per the Berubari Union case (1960).", "No, as per the Supreme Court's opinion in the Berubari Union case (1960).", "Yes, but only with the consent of the state concerned.", "Yes, by a simple executive order."],
        correctAnswerIndex: 1, // b) No
        explanation: "SC held in Berubari that Article 3 does not cover cession."
    },
    {
        question: "The cession of Indian territory to a foreign state requires:",
        options: ["A simple law under Article 3.", "An executive order.", "A Constitutional Amendment under Article 368.", "A referendum."],
        correctAnswerIndex: 2, // c) Constitutional Amendment
        explanation: "Requires a Constitutional Amendment under Article 368."
    },
    {
        question: "At the time of independence, India comprised two categories of political units: the British Provinces and the:",
        options: ["Commissioner's Provinces", "Princely States", "Presidencies", "Zamindaris"],
        correctAnswerIndex: 1, // b) Princely States
        explanation: "British Provinces and Princely States."
    },
    {
        question: "Out of 552 princely states situated within the geographical boundaries of India, 549 joined India. Which 3 initially refused to join?",
        options: ["Hyderabad, Junagarh, and Kashmir", "Hyderabad, Mysore, and Bhopal", "Kashmir, Travancore, and Jodhpur", "Junagarh, Bhopal, and Indore"],
        correctAnswerIndex: 0, // a) Hyderabad, Junagarh, Kashmir
        explanation: "Hyderabad, Junagarh, and Kashmir initially refused."
    },
    {
        question: "Hyderabad was integrated into India by means of:",
        options: ["Referendum", "Police Action", "Instrument of Accession", "Diplomatic Negotiation"],
        correctAnswerIndex: 1, // b) Police Action
        explanation: "Integrated by Police Action (Operation Polo)."
    },
    {
        question: "Junagarh was integrated into India by means of:",
        options: ["Referendum", "Police Action", "Instrument of Accession", "Purchase"],
        correctAnswerIndex: 0, // a) Referendum
        explanation: "Integrated by Referendum."
    },
    {
        question: "In 1950, the Constitution contained a four-fold classification of states (Part A, B, C, and D). Part A states comprised:",
        options: ["Princely states with legislatures.", "Nine erstwhile Governor’s provinces of British India.", "Chief Commissioner's provinces.", "Andaman and Nicobar Islands."],
        correctAnswerIndex: 1, // b) Nine erstwhile Governor’s provinces
        explanation: "Part A consisted of the former British Governor's provinces."
    },
    {
        question: "Who was the Chairman of the Linguistic Provinces Commission appointed in June 1948?",
        options: ["Jawaharlal Nehru", "S.K. Dhar", "Fazl Ali", "Vallabhbhai Patel"],
        correctAnswerIndex: 1, // b) S.K. Dhar
        explanation: "S.K. Dhar was the Chairman."
    },
    {
        question: "The Dhar Commission recommended the reorganization of states on the basis of:",
        options: ["Linguistic factor", "Administrative convenience", "Religious factor", "Cultural homogeneity"],
        correctAnswerIndex: 1, // b) Administrative convenience
        explanation: "Recommended 'Administrative convenience' over linguistic factor."
    },
    {
        question: "The JVP Committee (1948) consisted of Jawaharlal Nehru, Vallabhbhai Patel, and:",
        options: ["Pattabhi Sitaramayya", "P. Sriramulu", "K.M. Munshi", "H.N. Kunzru"],
        correctAnswerIndex: 0, // a) Pattabhi Sitaramayya
        explanation: "JVP = Jawaharlal, Vallabhbhai, Pattabhi."
    },
    {
        question: "The JVP Committee formally ______ language as the basis for reorganization of states.",
        options: ["Accepted", "Rejected", "Deferred", "Partially accepted"],
        correctAnswerIndex: 1, // b) Rejected
        explanation: "It formally rejected language as the basis."
    },
    {
        question: "The first linguistic state, Andhra State, was created in 1953 by separating the Telugu-speaking areas from the:",
        options: ["Bombay State", "Madras State", "Hyderabad State", "Mysore State"],
        correctAnswerIndex: 1, // b) Madras State
        explanation: "Separated from Madras State."
    },
    {
        question: "The creation of Andhra State followed the death of which Congress person after a 56-day hunger strike?",
        options: ["T. Prakasam", "Potti Sriramulu", "K. Kamaraj", "C. Rajagopalachari"],
        correctAnswerIndex: 1, // b) Potti Sriramulu
        explanation: "Potti Sriramulu."
    },
    {
        question: "The States Reorganization Commission (Fazl Ali Commission) appointed in 1953 consisted of Fazl Ali, K.M. Panikkar, and:",
        options: ["H.N. Kunzru", "V.P. Menon", "M.C. Chagla", "S.K. Dhar"],
        correctAnswerIndex: 0, // a) H.N. Kunzru
        explanation: "Members were Fazl Ali, K.M. Panikkar, and H.N. Kunzru."
    },
    {
        question: "The Fazl Ali Commission accepted language as the basis of reorganization of states but rejected the theory of:",
        options: ["One language, one state", "Administrative convenience", "Cultural unity", "Financial viability"],
        correctAnswerIndex: 0, // a) "One language, one state"
        explanation: "Rejected 'One language, one state' theory."
    },
    {
        question: "By the States Reorganization Act (1956) and the 7th Constitutional Amendment Act (1956), the four-fold classification of states was abolished. How many States and UTs were created on November 1, 1956?",
        options: ["14 States and 6 UTs", "16 States and 3 UTs", "12 States and 8 UTs", "29 States and 7 UTs"],
        correctAnswerIndex: 0, // a) 14 States and 6 UTs
        explanation: "14 States and 6 UTs were created."
    },
    {
        question: "In 1960, the bilingual state of Bombay was divided into two separate states:",
        options: ["Maharashtra and Karnataka", "Maharashtra and Gujarat", "Gujarat and Rajasthan", "Bombay and Vidarbha"],
        correctAnswerIndex: 1, // b) Maharashtra and Gujarat
        explanation: "Bombay divided into Maharashtra (Marathi) and Gujarat (Gujarati)."
    },
    {
        question: "Nagaland was formed in 1963 by taking the Naga Hills and Tuensang area out of the state of:",
        options: ["Assam", "Manipur", "Arunachal Pradesh", "West Bengal"],
        correctAnswerIndex: 0, // a) Assam
        explanation: "Carved out of Assam."
    },
    {
        question: "Haryana, Chandigarh, and Himachal Pradesh were carved out of which state in 1966?",
        options: ["Patiala and East Punjab States Union (PEPSU)", "Punjab", "Uttar Pradesh", "Jammu & Kashmir"],
        correctAnswerIndex: 1, // b) Punjab
        explanation: "Carved out of Punjab."
    },
    {
        question: "Sikkim became a 'Protectorate' of India in 1947. It became a full-fledged state of the Indian Union by which Constitutional Amendment Act?",
        options: ["35th Amendment Act, 1974", "36th Amendment Act, 1975", "38th Amendment Act, 1975", "42nd Amendment Act, 1976"],
        correctAnswerIndex: 1, // b) 36th Amendment Act, 1975
        explanation: "36th Amendment Act made it a full state."
    },
    {
        question: "Which three states were created in the year 2000?",
        options: ["Chhattisgarh, Uttarakhand, and Jharkhand", "Chhattisgarh, Telangana, and Jharkhand", "Uttarakhand, Jharkhand, and Telangana", "Goa, Mizoram, and Arunachal Pradesh"],
        correctAnswerIndex: 0, // a) Chhattisgarh, Uttarakhand, Jharkhand
        explanation: "Chhattisgarh, Uttarakhand, and Jharkhand were created in 2000."
    },
    {
        question: "Telangana was created as the 29th state of the Indian Union in 2014 by carving it out of:",
        options: ["Karnataka", "Andhra Pradesh", "Maharashtra", "Tamil Nadu"],
        correctAnswerIndex: 1, // b) Andhra Pradesh
        explanation: "Carved out of Andhra Pradesh."
    }
];

// Level 2: The Conceptual Bridge (Applied Knowledge)
const LEVEL_2_QUESTIONS = [
    {
        question: "The Constitution defines India as a \"Union of States\". This implies that:",
        options: ["The Indian federation is the result of an agreement among the states like the American federation.", "The states have the right to secede from the Union.", "The country is an integral whole and divided into different states only for the convenience of administration.", "The states are sovereign entities within the Union."],
        correctAnswerIndex: 2, // c) Integral whole
        explanation: "Implies indestructible union."
    },
    {
        question: "Distinguish between the expressions \"Union of India\" and \"Territory of India\":",
        options: ["\"Union of India\" is a wider expression than \"Territory of India\".", "\"Union of India\" includes only the States, while \"Territory of India\" includes States, UTs, and acquired territories.", "\"Union of India\" includes UTs, while \"Territory of India\" includes only States.", "Both expressions mean the same thing."],
        correctAnswerIndex: 1, // b)
        explanation: "Territory is wider than Union."
    },
    {
        question: "Article 3 authorizes the Parliament to alter the boundaries of a state. This reflects which nature of the Indian Constitution?",
        options: ["Indestructible Union of Indestructible States.", "Destructible Union of Destructible States.", "Indestructible Union of Destructible States.", "Destructible Union of Indestructible States."],
        correctAnswerIndex: 2, // c)
        explanation: "Indestructible Union, Destructible States."
    },
    {
        question: "In the context of Article 3, the President refers the bill to the State Legislature for its views. If the State Legislature does not express its views within the specified period:",
        options: ["The Bill lapses.", "The President must extend the time limit.", "The President or Parliament can proceed with the Bill without the state's views.", "The President must refer the matter to the Supreme Court."],
        correctAnswerIndex: 2, // c)
        explanation: "President/Parliament can proceed."
    },
    {
        question: "If the State Legislature expresses its views against the reorganization bill within the time limit:",
        options: ["The Parliament is bound to accept the views and drop the bill.", "The Parliament is not bound to accept the views and can proceed to pass the bill.", "A joint sitting of Parliament and State Legislature is called.", "The bill is referred to a referendum in that state."],
        correctAnswerIndex: 1, // b)
        explanation: "Parliament is not bound by views."
    },
    {
        question: "Suppose the Parliament accepts some amendments to the original bill (under Article 3) after referring it to the State Legislature. Is it necessary to refer the amended bill to the State Legislature again?",
        options: ["Yes, absolutely mandatory.", "No, not necessary.", "Yes, but only if the amendment changes the name of the state.", "Yes, if the Governor demands it."],
        correctAnswerIndex: 1, // b)
        explanation: "No need to refer again for amendments."
    },
    {
        question: "Article 2 grants power to admit or establish new states. This Article specifically applies to:",
        options: ["Adjusting boundaries of existing states (e.g., Telangana from AP).", "Renaming existing states (e.g., Orissa to Odisha).", "Territories that are not currently part of the Union of India (e.g., if India acquires a foreign territory).", "Merging two existing UTs."],
        correctAnswerIndex: 2, // c)
        explanation: "Article 2 is for external states (not currently part of India)."
    },
    {
        question: "The \"Berubari Union case\" (1960) settled a significant constitutional question regarding Article 3. The Supreme Court held that:",
        options: ["Parliament can cede Indian territory to a foreign state by a simple majority under Article 3.", "Article 3 deals with internal readjustment only; it does not cover cession of territory to a foreign state.", "Cession of territory can be done only by an Executive Order.", "Preamble allows cession of territory."],
        correctAnswerIndex: 1, // b)
        explanation: "Article 3 does not cover cession."
    },
    {
        question: "Therefore, to cede a part of Indian territory to a foreign state (like the Berubari enclave to Pakistan), the Parliament must:",
        options: ["Pass a simple law under Article 3.", "Amend the Constitution under Article 368.", "Conduct a plebiscite in that area.", "Obtain the consent of the State Government concerned."],
        correctAnswerIndex: 1, // b)
        explanation: "Requires Amendment under Art 368."
    },
    {
        question: "However, in the Maganbhai Ishwarbhai Patel vs Union of India (1969) case, the Supreme Court clarified that a \"settlement of a boundary dispute\" between India and another country:",
        options: ["Requires a Constitutional Amendment.", "Does not require a Constitutional Amendment and can be done by executive action.", "Requires approval of the United Nations.", "Requires a referendum."],
        correctAnswerIndex: 1, // b)
        explanation: "Boundary dispute settlement requires no amendment, only executive action."
    },
    {
        question: "Why was the \"Dhar Commission\" (1948) opposed to the linguistic reorganization of states?",
        options: ["It believed it would lead to administrative inefficiency and threaten national unity.", "It believed language was not a strong enough bond.", "It wanted to prioritize religious reorganization.", "It favored the integration of Princely States first."],
        correctAnswerIndex: 0, // a)
        explanation: "Feared threat to national unity."
    },
    {
        question: "The \"JVP Committee\" (1949) also rejected the linguistic basis initially. What was the primary reason cited?",
        options: ["Lack of funds.", "Security concerns and the need for a strong Centre during the formative years of the nation.", "Opposition from the South.", "Pressure from the British."],
        correctAnswerIndex: 1, // b)
        explanation: "Security concerns."
    },
    {
        question: "The \"Fazl Ali Commission\" (1953) accepted the linguistic basis but rejected \"One Language, One State\". This implies:",
        options: ["A state can have only one official language.", "A state should not be created solely for a language group if it compromises administrative or financial viability.", "Every language group must have a separate state.", "Hindi must be the official language of all new states."],
        correctAnswerIndex: 1, // b)
        explanation: "Unity and administrative viability come first."
    },
    {
        question: "Which of the following factors was NOT considered by the Fazl Ali Commission for reorganization?",
        options: ["Preservation and strengthening of the unity and security of India.", "Linguistic and cultural homogeneity.", "Financial, economic, and administrative considerations.", "Religious demographic dominance."],
        correctAnswerIndex: 3, // d)
        explanation: "Religion was not a factor."
    },
    {
        question: "Sikkim's association with India evolved uniquely. The 35th Amendment Act (1974) gave it the status of an \"Associate State\". Why was the 36th Amendment Act (1975) necessary just a year later?",
        options: ["To separate Sikkim from West Bengal.", "To abolish the institution of the 'Chogyal' and make Sikkim a full-fledged state of India.", "To give Sikkim the status of a Union Territory.", "To cede Sikkim to China."],
        correctAnswerIndex: 1, // b)
        explanation: "To abolish Chogyal and make it a full state."
    },
    {
        question: "The specific provision \"Article 2A\" (Sikkim to be associated with the Union) was added by the 35th Amendment and then:",
        options: ["Retained in the Constitution.", "Repealed by the 36th Amendment.", "Moved to the Ninth Schedule.", "Expanded to include Nepal."],
        correctAnswerIndex: 1, // b) Repealed by 36th.
        explanation: "Repealed by 36th Amendment."
    },
    {
        question: "Arrange the following states in the chronological order of their creation (from earliest to latest):\n1. Haryana\n2. Nagaland\n3. Meghalaya\n4. Gujarat\nSelect the correct code:",
        options: ["4, 2, 1, 3", "2, 4, 1, 3", "4, 1, 2, 3", "2, 1, 4, 3"],
        correctAnswerIndex: 0, // a) Gujarat (1960), Nagaland (1963), Haryana (1966), Meghalaya (1972)
        explanation: "Gujarat (1960) -> Nagaland (1963) -> Haryana (1966) -> Meghalaya (1972)."
    },
    {
        question: "The \"North-Eastern Areas (Reorganization) Act, 1971\" resulted in the elevation of which two Union Territories to Statehood?",
        options: ["Manipur and Tripura", "Mizoram and Arunachal Pradesh", "Meghalaya and Assam", "Nagaland and Manipur"],
        correctAnswerIndex: 0, // a) Manipur and Tripura
        explanation: "Manipur and Tripura became states."
    },
    {
        question: "Goa, Daman, and Diu were acquired from the Portuguese by police action in 1961. They were initially constituted as:",
        options: ["A single State.", "A single Union Territory.", "Three separate Union Territories.", "Part of Maharashtra."],
        correctAnswerIndex: 1, // b) A single UT
        explanation: "Single UT of Goa, Daman and Diu."
    },
    {
        question: "In 1987, Goa was conferred statehood. What happened to Daman and Diu?",
        options: ["They were merged with Gujarat.", "They were made a separate Union Territory.", "They remained part of Goa state.", "They were merged with Dadra and Nagar Haveli."],
        correctAnswerIndex: 1, // b) Separate UT
        explanation: "Made a separate UT."
    },
    {
        question: "The Parliament can establish a High Court for a Union Territory or put it under the jurisdiction of the High Court of an adjacent State. This power is derived from:",
        options: ["Article 239", "Article 241", "Article 230 (Old) / Article 241 implies it.", "Article 3"],
        correctAnswerIndex: 1, // b) Article 241
        explanation: "Article 241 empowers Parliament regarding High Courts for UTs."
    },
    {
        question: "Why were Union Territories like Himachal Pradesh, Manipur, and Tripura created initially before becoming states?",
        options: ["Because they were financially weak.", "Because of strategic importance and the need for direct Central control during that period.", "Because they had no legislature.", "Because they were acquired territories."],
        correctAnswerIndex: 1, // b)
        explanation: "Need for Central control (Strategic/Security)."
    },
    {
        question: "The power to change the name of a state (e.g., Madras to Tamil Nadu) lies with:",
        options: ["The State Legislature concerned (by passing a resolution).", "The Parliament (by simple majority).", "The President (by executive order).", "The Governor."],
        correctAnswerIndex: 1, // b) Parliament
        explanation: "Parliament (Article 3)."
    },
    {
        question: "In 2019, the State of Jammu and Kashmir was reorganized into two Union Territories. This was done under:",
        options: ["Article 368 (Constitutional Amendment).", "Article 3 (Jammu and Kashmir Reorganization Act).", "Presidential Order under Article 370 alone.", "Martial Law."],
        correctAnswerIndex: 1, // b) Article 3
        explanation: "Under Article 3 (J&K Reorganization Act)."
    },
    {
        question: "Consider the following statements regarding the creation of new states:\n1. A Bill for this purpose cannot be introduced in the Rajya Sabha.\n2. The Bill requires a special majority in the Parliament.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "2 only", "Both 1 and 2", "Neither 1 nor 2"],
        correctAnswerIndex: 3, // d) Neither
        explanation: "Can be introduced in either house; requires simple majority."
    },
    {
        question: "\"Acquired Territories\" are governed by:",
        options: ["The same provisions as States.", "The same provisions as Union Territories.", "International Law.", "The Ministry of External Affairs directly."],
        correctAnswerIndex: 1, // b) Same as UTs
        explanation: "Governed like UTs."
    },
    {
        question: "Which of the following committees was NOT related to the reorganization of states?",
        options: ["Dhar Commission", "JVP Committee", "Fazl Ali Commission", "Swaran Singh Committee"],
        correctAnswerIndex: 3, // d) Swaran Singh
        explanation: "Swaran Singh Committee was for Fundamental Duties."
    },
    {
        question: "The \"Shah Commission\" (1966) was appointed to:",
        options: ["Determine the boundary between Punjab and Haryana.", "Investigate the Emergency excesses.", "Reorganize the North East.", "Settle the Belgaum dispute."],
        correctAnswerIndex: 0, // a) Punjab and Haryana
        explanation: "For Punjab/Haryana boundary."
    },
    {
        question: "Assertion (A): India is a federation with a unitary bias. Reason (R): The Parliament can redraw the political map of India according to its will.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "R explains A."
    },
    {
        question: "The exchange of enclaves between India and Bangladesh (100th Constitutional Amendment Act, 2015) involved:",
        options: ["Ceding of Indian territory only.", "Acquisition of Bangladesh territory only.", "Both acquisition and cession of territories.", "Only settlement of boundary dispute without cession."],
        correctAnswerIndex: 2, // c)
        explanation: "Both acquisition and cession."
    }
];

// Level 3: The UPSC Simulation 2026 (Integrated & Current Affairs)
const LEVEL_3_QUESTIONS = [
    {
        question: "In December 2023, the Supreme Court upheld the validity of the Jammu and Kashmir Reorganization Act, 2019. In this context, consider the following statements regarding the reorganization of a State into Union Territories:\n1. Article 3 explicitly empowers the Parliament to convert a State into one or more Union Territories.\n2. The Supreme Court left the question of the validity of converting a State into a Union Territory open, as the Solicitor General promised the restoration of statehood.\n3. The reorganization was done using the President's Rule (Article 356) mechanism to bypass the requirement of the State Legislature's view.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "1 and 2 only", "2 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 2, // c) 2 and 3 only
        explanation: "Article 3 does NOT explicitly say 'State to UT' (controversial, hence SC left it open). 1 is false."
    },
    {
        question: "With the restoration of the Legislative Assembly in J&K (2024), its powers differ from other States. Which of the following subjects is/are explicitly reserved for the Lieutenant Governor of J&K (and not the Assembly)?\n1. Public Order\n2. Police\n3. Land\nSelect the correct answer:",
        options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
        correctAnswerIndex: 0, // a) 1 and 2 only. (Police & Public Order). Land is a gray area but generally elected govt has power unless specified.
        explanation: "For J&K, Police and Public Order are reserved. Land is not explicitly reserved strictly like Delhi (initially), but amendments gave LG more power."
    },
    {
        question: "The Delimitation Commission for J&K (2022) used the 2011 Census, unlike the rest of India where the 2001 Census is used (until 2026). This unique exercise was mandated by:",
        options: ["The Constitution (105th Amendment) Act.", "The J&K Reorganization Act, 2019.", "A Presidential Order under Article 370.", "The Representation of the People Act, 1950."],
        correctAnswerIndex: 1, // b) J&K Reorg Act 2019
        explanation: "Mandated by J&K Reorganization Act, 2019."
    },
    {
        question: "The \"India vs Bharat\" renaming controversy (2023-24) centered on Article 1. If the government decides to drop \"India\" and retain only \"Bharat\" in the Constitution:",
        options: ["It requires a Constitutional Amendment under Article 368 with a Special Majority.", "It can be done by a simple majority under Article 3 (Alteration of names).", "It requires ratification by half of the states.", "It can be done by an Executive Order of the President."],
        correctAnswerIndex: 0, // a) Art 368
        explanation: "Article 1 is a fundamental provision. Changing 'India, that is Bharat' requires Amendment (Art 368)."
    },
    {
        question: "Critics argued that \"Union of States\" implies a \"Federal\" contract. However, the Constituent Assembly debates clarify that the term \"Union\" was chosen to emphasize:",
        options: ["The supremacy of the Centre.", "The indestructibility of the nation.", "The cultural unity of Bharat.", "The administrative convenience."],
        correctAnswerIndex: 1, // b) Indestructibility
        explanation: "Emphasizes indestructibility (no right to secede)."
    },
    {
        question: "The ongoing protests in Ladakh (2024-25) demand inclusion in the Sixth Schedule. Currently, the Sixth Schedule (Article 244(2)) applies only to:",
        options: ["Assam, Meghalaya, Tripura, and Mizoram.", "All North-Eastern States.", "Tribal areas of Himachal Pradesh and Ladakh.", "Scheduled Areas under the Fifth Schedule."],
        correctAnswerIndex: 0, // a) AMTM
        explanation: "Assam, Meghalaya, Tripura, Mizoram."
    },
    {
        question: "Ladakh is currently a Union Territory without a Legislature. To grant it a Legislature (like Puducherry), Parliament must:",
        options: ["Amend Article 239A via a Constitutional Amendment.", "Pass a law under Article 3.", "Pass a law under Article 240.", "Issue a Presidential Regulation."],
        correctAnswerIndex: 0, // a) Amend 239A
        explanation: "Art 239A needs amendment to include Ladakh."
    },
    {
        question: "The \"Katchatheevu Island\" controversy (2024) raised questions about the 1974 agreement with Sri Lanka. The government argued that Katchatheevu was a \"disputed\" territory and thus its settlement did not require a Constitutional Amendment. This reliance is based on which Supreme Court judgment?",
        options: ["Berubari Union case (1960)", "Maganbhai Ishwarbhai Patel case (1969)", "Kesavananda Bharati case (1973)", "S.R. Bommai case (1994)"],
        correctAnswerIndex: 1, // b) Maganbhai
        explanation: "Maganbhai Patel case (boundary dispute settlement requires no amendment)."
    },
    {
        question: "If the government were to retrieve Katchatheevu today, under which Article would this action fall?",
        options: ["Article 1(3)(c) - Acquisition of territory.", "Article 2 - Admission of new states.", "Article 3 - Alteration of boundaries.", "Article 368 - Amendment."],
        correctAnswerIndex: 0, // a) Acquisition
        explanation: "Acquisition of territory."
    },
    {
        question: "The Maharashtra-Karnataka border dispute (Belagavi) has flared up again. Under the Constitution, the original jurisdiction to settle disputes between two states lies with:",
        options: ["The Zonal Council (chaired by Home Minister).", "The Inter-State Council (Article 263).", "The Supreme Court (Article 131).", "The Parliament (Article 3)."],
        correctAnswerIndex: 2, // c) SC (Art 131)
        explanation: "Supreme Court (Article 131)."
    },
    {
        question: "Zonal Councils were established by the States Reorganization Act, 1956 to promote cooperation. Which of the following is NOT a Statutory Zonal Council?",
        options: ["Northern Zonal Council", "Eastern Zonal Council", "North-Eastern Zonal Council", "Southern Zonal Council"],
        correctAnswerIndex: 2, // c) North-Eastern
        explanation: "NE Zonal Council created by North-Eastern Council Act, 1971 (Separate Act)."
    },
    {
        question: "The \"Assam-Mizoram\" border dispute involves the interpretation of colonial-era demarcations. The Centre often intervenes using paramilitary forces. This intervention is constitutionally backed by:",
        options: ["Article 355 (Duty of Union to protect States).", "Article 263 (Inter-State Council).", "Article 3 (Power to alter boundaries).", "Article 256 (Administrative directions)."],
        correctAnswerIndex: 0, // a) Art 355
        explanation: "Article 355 (Duty to protect against internal disturbance)."
    },
    {
        question: "The freeze on the number of seats in the Lok Sabha (based on 1971 Census) ends in 2026. If the number of seats is increased based on the new Census:",
        options: ["It will require an amendment to Article 81 and 82.", "It can be done by the Delimitation Commission alone.", "It will automatically happen under the Representation of the People Act.", "It requires the consent of all states."],
        correctAnswerIndex: 0, // a) Amendment to Art 81/82
        explanation: "Requires Amendment to lift the freeze."
    },
    {
        question: "Southern States have raised concerns that population-based delimitation will penalize them for effective population control. This violates the federal principle of:",
        options: ["Equal Representation of States (Rajya Sabha model).", "Asymmetric Federalism.", "Fiscal Federalism.", "Proportional Representation."],
        correctAnswerIndex: 0, // a)
        explanation: "Equal representation principle (though RS is not equal in India, the US model is often cited in this federal debate)."
    },
    {
        question: "The demand for \"Greater Tipraland\" (Tripura) is based on the assertion of indigenous rights. Under Article 3, can Parliament create a new state solely comprising the Tribal Areas of an existing state?",
        options: ["Yes, Parliament has the power to separate any territory from any state.", "No, Tribal Areas are protected under the Sixth Schedule and cannot be separated.", "Yes, but only with the consent of the Tribal Council.", "No, it requires a Constitutional Amendment."],
        correctAnswerIndex: 0, // a) Yes
        explanation: "Parliament has plenary power under Article 3."
    },
    {
        question: "Delhi's demand for full statehood continues. The GNCTD (Amendment) Act, 2023 solidified the Centre's control over \"Services\". This implies that for Delhi (Article 239AA):",
        options: ["It is a \"Sui Generis\" (unique) entity, neither a full State nor a standard UT.", "The Parliament can legislate on any subject in the State List for Delhi.", "The Executive power of Delhi is co-extensive with its Legislative power, subject to Parliamentary laws.", "All of the above."],
        correctAnswerIndex: 3, // d) All of the above
        explanation: "All statements describe Delhi's unique status."
    },
    {
        question: "Assertion (A): The Parliament can alter the name of any state without the consent of that state. Reason (R): The Indian Constitution mandates that the President must refer the bill to the state legislature, but its views are not binding on the President or Parliament.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "R explains A."
    },
    {
        question: "Assertion (A): India is a \"Holding Together\" federation. Reason (R): It was formed by the transformation of a unitary system into a federal one, unlike the US which is a \"Coming Together\" federation.",
        options: ["Both A and R are true, and R is the correct explanation of A.", "Both A and R are true, but R is NOT the correct explanation of A.", "A is true, but R is false.", "A is false, but R is true."],
        correctAnswerIndex: 0, // a)
        explanation: "R explains A."
    },
    {
        question: "Article 4 allows changes under Article 2 and 3 to be made by simple majority. However, does this immunity from Article 368 apply if the change involves \"diminishing the area of a state\" to cede it to a foreign country?",
        options: ["Yes, Article 4 covers all changes.", "No, cession of territory is not covered under Article 3, hence Article 4 does not apply.", "Yes, but only for boundary disputes.", "No, unless the state agrees."],
        correctAnswerIndex: 1, // b)
        explanation: "Cession is not covered by Art 3, so Art 4 immunity doesn't apply."
    },
    {
        question: "The \"Inner Line Permit\" (ILP) regime restricts the movement of Indian citizens in certain states (Arunachal, Nagaland, Mizoram, Manipur). This is a restriction on Article 19(1)(d) and (e) grounded in:",
        options: ["Article 371-A to 371-H.", "The Bengal Eastern Frontier Regulation, 1873 (saved by Article 19(5)).", "The Sixth Schedule.", "The Citizenship Act, 1955."],
        correctAnswerIndex: 1, // b) BEFR 1873
        explanation: "Based on BEFR 1873, protected by Art 19(5) (interests of STs)."
    },
    {
        question: "The concept of \"Union Territory\" was introduced by the:",
        options: ["1st Constitutional Amendment (1951).", "7th Constitutional Amendment (1956).", "42nd Constitutional Amendment (1976).", "Original Constitution (1950)."],
        correctAnswerIndex: 1, // b) 7th AA 1956
        explanation: "Introduced by 7th AA 1956."
    },
    {
        question: "Which of the following territories was acquired by India through a \"Plebiscite\"?",
        options: ["Goa", "Puducherry", "Sikkim", "Junagarh"],
        correctAnswerIndex: 3, // d) Junagarh
        explanation: "Junagarh acceded via plebiscite."
    },
    {
        question: "The \"Union of India\" does not include:",
        options: ["Andhra Pradesh", "Lakshadweep", "Punjab", "West Bengal"],
        correctAnswerIndex: 1, // b) Lakshadweep
        explanation: "Union of India includes only States."
    },
    {
        question: "In the event of a conflict between the name of a state in the First Schedule and the name used in a specific Article (e.g., Article 371-A uses \"Nagaland\"), which prevails?",
        options: ["The First Schedule.", "The specific Article.", "Both must be amended simultaneously.", "The Supreme Court decides."],
        correctAnswerIndex: 1, // b) Specific Article
        explanation: "Specific provision prevails."
    },
    {
        question: "The power to \"abolish\" a state and convert it into a UT (as done with J&K) is:",
        options: ["Explicitly mentioned in Article 3.", "Derived from the power to \"alter the boundaries\" or \"form a new state\".", "Constitutionally silent and thus contentious.", "Prohibited by the Basic Structure."],
        correctAnswerIndex: 2, // c) Contentious (SC left it open).
        explanation: "It is constitutionally silent/contentious."
    },
    {
        question: " \"Scheduled Areas\" (Fifth Schedule) can be declared by the President. Does the alteration of the boundaries of a Scheduled Area require a law under Article 3?",
        options: ["Yes.", "No, it can be done by a Presidential Order.", "No, it requires a Governor's notification.", "Yes, but only with the Tribes Advisory Council's consent."],
        correctAnswerIndex: 1, // b) Presidential Order
        explanation: "Presidential Order is sufficient."
    },
    {
        question: "The \"Andhra Pradesh Reorganization Act, 2014\" promised a separate High Court for Andhra Pradesh. The High Court was finally established in:",
        options: ["2014 immediately.", "2019 at Amravati.", "2017 at Vijayawada.", "It is still sharing with Telangana."],
        correctAnswerIndex: 1, // b) 2019
        explanation: "Established in 2019 at Amravati."
    },
    {
        question: "If India were to acquire a part of Pakistan-occupied Kashmir (PoK) tomorrow, it would legally fall under:",
        options: ["Article 1(3)(c) - Acquired Territory.", "It is already part of the \"Territory of India\" as per the 1994 Parliament Resolution and Article 1.", "Article 2 - Admission of new territory.", "International mandate."],
        correctAnswerIndex: 1, // b) Already part of Territory
        explanation: "India claims entire J&K, so it's re-establishing control, not new acquisition."
    },
    {
        question: "The \"99th Amendment\" (NJAC) is famous, but the \"100th Amendment\" (2015) related to:",
        options: ["GST.", "EWS Reservation.", "Land Boundary Agreement with Bangladesh.", "National Judicial Appointments Commission."],
        correctAnswerIndex: 2, // c) LBA with Bangladesh
        explanation: "LBA with Bangladesh."
    },
    {
        question: "Under the Dadra and Nagar Haveli and Daman and Diu (Merger of Union Territories) Act, 2019, the jurisdiction of the High Court for this merged UT lies with:",
        options: ["Gujarat High Court.", "Bombay High Court.", "Delhi High Court.", "A separate High Court."],
        correctAnswerIndex: 1, // b) Bombay HC
        explanation: "Bombay High Court."
    }
];

export const CHAPTER_6_LEVELS: ChapterLevelData = {
    topicId: 6,
    levels: [
        {
            levelId: 1,
            title: "The Text-Book Stickler",
            description: "Strictly Chapter 6: Direct Recall.",
            questions: LEVEL_1_QUESTIONS.map((q, i) => ({ ...q, id: `ch6-l1-q${i + 1}` }))
        },
        {
            levelId: 2,
            title: "The Conceptual Bridge",
            description: "Applied Knowledge & Analysis.",
            questions: LEVEL_2_QUESTIONS.map((q, i) => ({ ...q, id: `ch6-l2-q${i + 1}` }))
        },
        {
            levelId: 3,
            title: "UPSC Simulation 2026",
            description: "Integrated & Current Affairs Context.",
            questions: LEVEL_3_QUESTIONS.map((q, i) => ({ ...q, id: `ch6-l3-q${i + 1}` }))
        }
    ]
};
