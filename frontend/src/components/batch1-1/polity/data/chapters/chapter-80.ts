import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch80-l1-q1",
        "question": "A regional party in India is also known as a:",
        "options": [
            "National party",
            "State party",
            "International party",
            "Federal party"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Regional parties are officially recognized as State parties by the Election Commission of India."
    },
    {
        "id": "ch80-l1-q2",
        "question": "Which of the following is NOT a criterion for recognition as a State party by the Election Commission?",
        "options": [
            "Winning a minimum percentage of valid votes in State Assembly elections",
            "Winning a minimum number of seats in State Assembly elections",
            "Having representation in the Rajya Sabha",
            "Securing at least 6% valid votes and winning 2 seats in a State Legislative Assembly election"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Rajya Sabha representation is not a criterion; the ECI uses vote share and seat thresholds in assembly/LS elections."
    },
    {
        "id": "ch80-l1-q3",
        "question": "To be recognized as a State party, a political party must secure at least what percentage of valid votes polled in a State?",
        "options": [
            "3%",
            "5%",
            "6%",
            "8%"
        ],
        "correctAnswerIndex": 2,
        "explanation": "A party must secure at least 6% of valid votes polled in a State Assembly or Lok Sabha election."
    },
    {
        "id": "ch80-l1-q4",
        "question": "Along with the 6% vote share, how many seats must a State party win in the State Legislative Assembly?",
        "options": [
            "1 seat",
            "2 seats",
            "3 seats",
            "5 seats"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A party must win at least 2 seats in the State Legislative Assembly along with the 6% vote threshold."
    },
    {
        "id": "ch80-l1-q5",
        "question": "Which of the following is an example of a regional party?",
        "options": [
            "BJP",
            "INC",
            "TMC (Trinamool Congress)",
            "CPI"
        ],
        "correctAnswerIndex": 2,
        "explanation": "TMC is a prominent regional party based in West Bengal."
    },
    {
        "id": "ch80-l1-q6",
        "question": "The Dravida Munnetra Kazhagam (DMK) is a regional party primarily active in:",
        "options": [
            "Kerala",
            "Karnataka",
            "Tamil Nadu",
            "Andhra Pradesh"
        ],
        "correctAnswerIndex": 2,
        "explanation": "DMK is a major regional party in Tamil Nadu."
    },
    {
        "id": "ch80-l1-q7",
        "question": "The Telugu Desam Party (TDP) was founded by:",
        "options": [
            "N.T. Rama Rao",
            "YS Rajasekhara Reddy",
            "K. Chandrashekar Rao",
            "Chandrababu Naidu"
        ],
        "correctAnswerIndex": 0,
        "explanation": "TDP was founded by N.T. Rama Rao in 1982."
    },
    {
        "id": "ch80-l1-q8",
        "question": "The Shiv Sena was founded in which year?",
        "options": [
            "1960",
            "1966",
            "1970",
            "1975"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Shiv Sena was founded by Bal Thackeray in 1966."
    },
    {
        "id": "ch80-l1-q9",
        "question": "The Akali Dal is a regional party representing the interests of:",
        "options": [
            "Scheduled Castes in Punjab",
            "Sikhs in Punjab",
            "Muslims in UP",
            "Tribals in Jharkhand"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Shiromani Akali Dal primarily represents the Sikh community in Punjab."
    },
    {
        "id": "ch80-l1-q10",
        "question": "Which of the following regional parties has the longest history?",
        "options": [
            "TDP",
            "DMK",
            "Shiromani Akali Dal",
            "JD(S)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Shiromani Akali Dal was founded in 1920, making it one of the oldest parties in India."
    },
    {
        "id": "ch80-l1-q11",
        "question": "Regional parties in India have grown primarily due to:",
        "options": [
            "Decline of the single-party dominant system",
            "Increasing regional aspirations and identity politics",
            "Failure of national parties to address local issues",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "The growth of regional parties is driven by all these factors."
    },
    {
        "id": "ch80-l1-q12",
        "question": "The era of coalition governments in India at the Centre began prominently in which decade?",
        "options": [
            "1970s",
            "1980s",
            "1990s",
            "2000s"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The 1990s saw the prominent rise of coalition governments with regional parties playing kingmaker roles."
    },
    {
        "id": "ch80-l1-q13",
        "question": "Which regional party was part of the United Front Government (1996-1998)?",
        "options": [
            "BJP",
            "INC",
            "TDP",
            "Shiv Sena"
        ],
        "correctAnswerIndex": 2,
        "explanation": "TDP under Chandrababu Naidu was a key supporter of the United Front Government."
    },
    {
        "id": "ch80-l1-q14",
        "question": "The Biju Janata Dal (BJD) is a regional party active in which State?",
        "options": [
            "Bihar",
            "Odisha",
            "West Bengal",
            "Jharkhand"
        ],
        "correctAnswerIndex": 1,
        "explanation": "BJD is a regional party of Odisha, founded by Naveen Patnaik."
    },
    {
        "id": "ch80-l1-q15",
        "question": "The AIADMK was founded by:",
        "options": [
            "M.G. Ramachandran",
            "J. Jayalalithaa",
            "C.N. Annadurai",
            "M. Karunanidhi"
        ],
        "correctAnswerIndex": 0,
        "explanation": "AIADMK (All India Anna Dravida Munnetra Kazhagam) was founded by M.G. Ramachandran in 1972."
    },
    {
        "id": "ch80-l1-q16",
        "question": "Which of the following factors does NOT contribute to the rise of regional parties?",
        "options": [
            "Linguistic identity",
            "Caste mobilization",
            "Uniform economic development across States",
            "Regional pride and cultural identity"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Uneven economic development (not uniform development) contributes to regional party growth."
    },
    {
        "id": "ch80-l1-q17",
        "question": "The concept of 'federal front' or 'third front' in Indian politics refers to:",
        "options": [
            "A front led by BJP",
            "A front led by INC",
            "A coalition of regional parties attempting to form an alternative to the two major national parties",
            "A military alliance"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Third/Federal fronts have been attempted by regional parties as alternatives to BJP and INC."
    },
    {
        "id": "ch80-l1-q18",
        "question": "Which of the following elections saw the maximum number of regional parties winning seats in the Lok Sabha?",
        "options": [
            "1984",
            "1991",
            "1996",
            "2004"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The 1996 elections saw the highest fragmentation with numerous regional parties winning Lok Sabha seats."
    },
    {
        "id": "ch80-l1-q19",
        "question": "The Janata Dal (Secular) is active primarily in which State?",
        "options": [
            "Bihar",
            "Karnataka",
            "Tamil Nadu",
            "Rajasthan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "JD(S) is a regional party primarily active in Karnataka."
    },
    {
        "id": "ch80-l1-q20",
        "question": "The term 'rainbow coalition' in Indian politics refers to:",
        "options": [
            "A coalition of parties with similar ideologies",
            "A broad coalition of diverse regional parties with different ideological backgrounds",
            "A coalition of left parties only",
            "A coalition of right-wing parties only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Rainbow coalitions bring together ideologically diverse regional parties."
    },
    {
        "id": "ch80-l1-q21",
        "question": "The Samajwadi Party is a regional party active in which State?",
        "options": [
            "Bihar",
            "Madhya Pradesh",
            "Uttar Pradesh",
            "Rajasthan"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Samajwadi Party is primarily active in Uttar Pradesh."
    },
    {
        "id": "ch80-l1-q22",
        "question": "The Bahujan Samaj Party (BSP) represents the interests of:",
        "options": [
            "Upper castes",
            "Dalits and Other Backward Classes",
            "Business communities",
            "Only SC communities"
        ],
        "correctAnswerIndex": 1,
        "explanation": "BSP primarily represents the interests of Dalits, OBCs, and marginalized communities."
    },
    {
        "id": "ch80-l1-q23",
        "question": "National Conference is a regional party active in:",
        "options": [
            "Jammu & Kashmir",
            "Uttarakhand",
            "Himachal Pradesh",
            "Rajasthan"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Jammu & Kashmir National Conference is a regional party in J&K."
    },
    {
        "id": "ch80-l1-q24",
        "question": "The People's Democratic Party (PDP) is based in:",
        "options": [
            "Punjab",
            "J&K",
            "Tamil Nadu",
            "Assam"
        ],
        "correctAnswerIndex": 1,
        "explanation": "PDP is a regional party based in Jammu & Kashmir."
    },
    {
        "id": "ch80-l1-q25",
        "question": "Regional parties have been accused of promoting which of the following?",
        "options": [
            "National unity",
            "Parochialism and regionalism at the cost of national interest",
            "Industrial growth",
            "Uniform education policy"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Critics argue that regional parties sometimes promote narrow regional interests over national concerns."
    },
    {
        "id": "ch80-l1-q26",
        "question": "The YSR Congress Party (YSRCP) is a regional party active in:",
        "options": [
            "Tamil Nadu",
            "Telangana",
            "Andhra Pradesh",
            "Kerala"
        ],
        "correctAnswerIndex": 2,
        "explanation": "YSRCP is a regional party primarily active in Andhra Pradesh."
    },
    {
        "id": "ch80-l1-q27",
        "question": "The Rashtriya Janata Dal (RJD) is a regional party active in:",
        "options": [
            "UP",
            "Bihar",
            "MP",
            "Rajasthan"
        ],
        "correctAnswerIndex": 1,
        "explanation": "RJD is a major regional party in Bihar."
    },
    {
        "id": "ch80-l1-q28",
        "question": "The Janata Dal (United) or JD(U) is active primarily in:",
        "options": [
            "Karnataka",
            "Bihar",
            "UP",
            "Maharashtra"
        ],
        "correctAnswerIndex": 1,
        "explanation": "JD(U) is a regional party primarily active in Bihar."
    },
    {
        "id": "ch80-l1-q29",
        "question": "Which of the following is a positive role of regional parties in Indian democracy?",
        "options": [
            "They ensure representation of diverse regional interests",
            "They make governance more centralized",
            "They reduce voter participation",
            "They eliminate opposition politics"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Regional parties ensure that diverse regional and local concerns are represented in the political process."
    },
    {
        "id": "ch80-l1-q30",
        "question": "Which regional party alliance ruled the State of Maharashtra from 1995 to 1999?",
        "options": [
            "UPA",
            "NDA",
            "Shiv Sena-BJP alliance",
            "Congress-NCP alliance"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Shiv Sena-BJP alliance governed Maharashtra from 1995 to 1999."
    },
    {
        "id": "ch80-l1-q31",
        "question": "The Jharkhand Mukti Morcha (JMM) is a regional party that fought for:",
        "options": [
            "Language rights in Tamil Nadu",
            "Separate Telangana State",
            "Separate Jharkhand State",
            "Muslim rights in UP"
        ],
        "correctAnswerIndex": 2,
        "explanation": "JMM fought for the creation of a separate Jharkhand State."
    },
    {
        "id": "ch80-l1-q32",
        "question": "Which of the following describes the 'coalition dharma' dilemma?",
        "options": [
            "Balancing national interest with coalition partners' regional demands",
            "Balancing party ideology with personal interest",
            "Balancing economic growth with defense spending",
            "None of the above"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Coalition dharma refers to the challenge of maintaining coalition stability while balancing national and regional interests."
    },
    {
        "id": "ch80-l1-q33",
        "question": "The Bharat Rashtra Samithi (BRS), formerly known as TRS, is active in:",
        "options": [
            "AP",
            "Telangana",
            "Karnataka",
            "Tamil Nadu"
        ],
        "correctAnswerIndex": 1,
        "explanation": "BRS (formerly Telangana Rashtra Samithi) is the dominant regional party in Telangana."
    },
    {
        "id": "ch80-l1-q34",
        "question": "The Anti-Defection Law (10th Schedule) impacts regional parties by:",
        "options": [
            "Encouraging floor-crossing",
            "Preventing defection of elected members from their party",
            "Allowing unlimited party switching",
            "Having no relevance to regional parties"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 10th Schedule discourages defection and affects regional parties like all others."
    },
    {
        "id": "ch80-l1-q35",
        "question": "Which regional party leader became the Prime Minister of India?",
        "options": [
            "Lalu Prasad Yadav",
            "H.D. Deve Gowda",
            "Chandrababu Naidu",
            "Mamata Banerjee"
        ],
        "correctAnswerIndex": 1,
        "explanation": "H.D. Deve Gowda of JD became PM in 1996 as part of the United Front coalition."
    },
    {
        "id": "ch80-l1-q36",
        "question": "The Indian Union Muslim League (IUML) is a regional party mainly active in:",
        "options": [
            "UP",
            "Bihar",
            "Kerala",
            "West Bengal"
        ],
        "correctAnswerIndex": 2,
        "explanation": "IUML is primarily active in the Malabar region of Kerala."
    },
    {
        "id": "ch80-l1-q37",
        "question": "The concept of 'dual membership' in a political party (being recognized in more than one State) is relevant for:",
        "options": [
            "Gaining national party status",
            "Getting recognized as a State party in multiple States",
            "Election funding",
            "Presidential elections"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A party can be recognized as a State party in multiple States based on its performance in each."
    },
    {
        "id": "ch80-l1-q38",
        "question": "The Aam Aadmi Party (AAP) was originally a regional party of which UT/State?",
        "options": [
            "Punjab",
            "Goa",
            "Delhi",
            "Haryana"
        ],
        "correctAnswerIndex": 2,
        "explanation": "AAP was founded in 2012 and first gained power in Delhi. It later gained national party status."
    },
    {
        "id": "ch80-l1-q39",
        "question": "The ECI allocates election symbols to regional parties based on:",
        "options": [
            "The party's request only",
            "Performance criteria and registration status",
            "The President's approval",
            "The Supreme Court's direction"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The ECI allocates reserved symbols based on the party's recognition status and performance."
    },
    {
        "id": "ch80-l1-q40",
        "question": "Which of the following is a benefit of being recognized as a State party?",
        "options": [
            "Reserved election symbol",
            "Free time on Doordarshan and AIR during elections",
            "Priority in allotment of land",
            "Both A and B"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Recognized State parties get a reserved symbol and free broadcast time during elections."
    },
    {
        "id": "ch80-l1-q41",
        "question": "The Kerala Congress is an example of:",
        "options": [
            "A national party",
            "A regional party based on religious identity",
            "A regional breakaway from the Indian National Congress in Kerala",
            "A communist party"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Kerala Congress is a regional party that broke away from the INC and has had multiple factions."
    },
    {
        "id": "ch80-l1-q42",
        "question": "The Mizo National Front (MNF) is a regional party active in:",
        "options": [
            "Manipur",
            "Mizoram",
            "Meghalaya",
            "Nagaland"
        ],
        "correctAnswerIndex": 1,
        "explanation": "MNF is a regional party in Mizoram, which signed a peace accord in 1986."
    },
    {
        "id": "ch80-l1-q43",
        "question": "The Naga People's Front (NPF) is active in:",
        "options": [
            "Nagaland",
            "Manipur",
            "Mizoram",
            "Assam"
        ],
        "correctAnswerIndex": 0,
        "explanation": "NPF is a major regional party in Nagaland."
    },
    {
        "id": "ch80-l1-q44",
        "question": "The Asom Gana Parishad (AGP) emerged from which movement?",
        "options": [
            "Chipko Movement",
            "Assam Movement (anti-foreigners movement)",
            "Telangana Movement",
            "Separate Uttarakhand Movement"
        ],
        "correctAnswerIndex": 1,
        "explanation": "AGP was formed in 1985 following the Assam Accord that ended the Assam Movement."
    },
    {
        "id": "ch80-l1-q45",
        "question": "Which of the following best describes the relationship between regional parties and federalism?",
        "options": [
            "Regional parties weaken federalism",
            "Regional parties strengthen federalism by representing State interests",
            "Regional parties have no impact on federalism",
            "Regional parties promote unitary governance"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Regional parties strengthen federalism by asserting State interests and ensuring power-sharing."
    },
    {
        "id": "ch80-l1-q46",
        "question": "The Nationalist Congress Party (NCP) was formed as a split from:",
        "options": [
            "BJP",
            "CPI(M)",
            "INC",
            "Janata Dal"
        ],
        "correctAnswerIndex": 2,
        "explanation": "NCP was formed by Sharad Pawar, P.A. Sangma, and Tariq Anwar after splitting from the INC in 1999."
    },
    {
        "id": "ch80-l1-q47",
        "question": "The Dravidian movement led to the birth of which series of regional parties?",
        "options": [
            "Akali parties in Punjab",
            "DMK, AIADMK, and other Dravidian parties in Tamil Nadu",
            "BRS and TDP in Telangana/AP",
            "AGP in Assam"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Dravidian movement led to DMK, AIADMK, MDMK, PMK, and other parties in Tamil Nadu."
    },
    {
        "id": "ch80-l1-q48",
        "question": "Which regional party has consistently governed Odisha since 2000?",
        "options": [
            "INC",
            "BJP",
            "BJD",
            "JD(U)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Biju Janata Dal (BJD) under Naveen Patnaik governed Odisha continuously from 2000 to 2024."
    },
    {
        "id": "ch80-l1-q49",
        "question": "The Sarkaria Commission (1983) recommendations included strengthening:",
        "options": [
            "Only national parties",
            "The role of regional parties in inter-governmental relations",
            "The military",
            "The judiciary"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Sarkaria Commission recommended strengthening Centre-State relations and recognized the role of regional parties."
    },
    {
        "id": "ch80-l1-q50",
        "question": "Which of the following factors has reduced the role of regional parties in some States?",
        "options": [
            "Bipolarity through strong national party presence",
            "Elimination of regional identities",
            "Complete urbanization",
            "Abolition of State legislatures"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Strong national party presence in some States creates bipolarity, reducing space for regional parties."
    },
    {
        "id": "ch80-l1-q51",
        "question": "Consider the following pairs:\\n1. DMK — Tamil Nadu\\n2. TDP — Andhra Pradesh\\n3. AGP — Meghalaya\\nWhich are correctly matched?",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 0,
        "explanation": "AGP is from Assam, not Meghalaya. DMK-TN and TDP-AP are correct."
    },
    {
        "id": "ch80-l1-q52",
        "question": "Assertion (A): Regional parties have played a decisive role in the formation of coalition governments at the Centre.\\nReason (R): No single party has won an absolute majority in the Lok Sabha in many elections since 1989.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The fragmented mandate made regional parties essential for forming governments, especially from 1989 to 2014."
    },
    {
        "id": "ch80-l1-q53",
        "question": "Which of the following regional parties has been part of both NDA and UPA coalitions at different times?",
        "options": [
            "DMK",
            "BSP",
            "Both A and B",
            "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Both DMK and BSP have allied with different national coalitions at different points in time."
    },
    {
        "id": "ch80-l1-q54",
        "question": "The phrase 'Sons of the Soil' doctrine is most closely associated with:",
        "options": [
            "National parties",
            "Regional parties advocating for local employment preferences",
            "The Supreme Court",
            "The Election Commission"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Sons of the Soil doctrine advocates preferential treatment for local residents in employment and education, championed by regional parties."
    },
    {
        "id": "ch80-l1-q55",
        "question": "Which regional party was formed specifically to demand a separate Telangana State?",
        "options": [
            "TDP",
            "YSRCP",
            "TRS (now BRS)",
            "INC"
        ],
        "correctAnswerIndex": 2,
        "explanation": "TRS (Telangana Rashtra Samithi, now BRS) was formed in 2001 specifically to demand a separate Telangana State."
    },
    {
        "id": "ch80-l1-q56",
        "question": "The National People's Party (NPP) from Meghalaya has attained which status?",
        "options": [
            "State party status only in Meghalaya",
            "National party status",
            "It is unregistered",
            "It has been deregistered"
        ],
        "correctAnswerIndex": 1,
        "explanation": "NPP became a national party after gaining recognition in multiple States."
    },
    {
        "id": "ch80-l1-q57",
        "question": "Which of the following is a challenge posed by regional parties to national governance?",
        "options": [
            "Policy paralysis due to coalition compulsions",
            "Complete centralization",
            "Elimination of opposition",
            "Uniform development"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Coalition compulsions from regional partners can sometimes lead to policy delays and compromises."
    },
    {
        "id": "ch80-l1-q58",
        "question": "The Lok Dal and its successor parties were prominent in which region?",
        "options": [
            "South India",
            "Northern India (especially UP and Haryana)",
            "Northeast India",
            "Western India"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Lok Dal and its offshoots like INLD were prominent in northern India, particularly among Jat communities."
    },
    {
        "id": "ch80-l1-q59",
        "question": "The role of regional parties in the Rajya Sabha has been to:",
        "options": [
            "Ensure representation of State-level interests in the Upper House",
            "Block all central legislation",
            "Support only national parties",
            "Have no impact"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Regional parties use Rajya Sabha representation to voice State-level concerns in national legislation."
    },
    {
        "id": "ch80-l1-q60",
        "question": "Which commission recommended that the appointment of Governors should consider the views of State governments, thereby recognizing regional party interests?",
        "options": [
            "Sarkaria Commission",
            "Punchhi Commission",
            "Both A and B",
            "Verma Commission"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Both the Sarkaria and Punchhi Commissions recommended consulting State governments for Governor appointments."
    },
    {
        "id": "ch80-l1-q61",
        "question": "Consider the following statements about regional parties:\\n1. They can participate in Presidential elections.\\n2. They can form the government at the Centre independently.\\n3. They have played kingmaker roles in coalition governments.\\nWhich are correct?",
        "options": [
            "1 and 3 only",
            "2 and 3 only",
            "1 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Regional parties participate in Presidential elections and have been kingmakers, but cannot independently form a central government."
    },
    {
        "id": "ch80-l1-q62",
        "question": "Assertion (A): Regional parties have promoted linguistic identity in Indian politics.\\nReason (R): The reorganization of States on linguistic basis in 1956 strengthened linguistic identities.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Linguistic reorganization reinforced regional identities, providing fertile ground for regional parties."
    },
    {
        "id": "ch80-l1-q63",
        "question": "Which of the following is NOT a criticism of regional parties?",
        "options": [
            "Dynastic leadership",
            "Encouraging parochialism",
            "Promoting narrow identity politics",
            "Ensuring representation of all sections of society uniformly"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Ensuring uniform representation is generally not a criticism but rather an aspiration."
    },
    {
        "id": "ch80-l1-q64",
        "question": "The concept of 'competitive federalism' is enhanced by regional parties because:",
        "options": [
            "They compete with each other for central resources and better governance",
            "They eliminate competition",
            "They centralize power",
            "They oppose all national policies"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Regional parties promote competitive federalism by competing for better governance and central resources."
    },
    {
        "id": "ch80-l1-q65",
        "question": "Which of the following regional parties was founded by a film actor who later became Chief Minister?",
        "options": [
            "DMK",
            "AIADMK",
            "TDP",
            "Both B and C"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Both M.G. Ramachandran (AIADMK) and N.T. Rama Rao (TDP) were film actors who became Chief Ministers."
    },
    {
        "id": "ch80-l1-q66",
        "question": "The Sikkim Democratic Front (SDF) was led by:",
        "options": [
            "Naveen Patnaik",
            "Pawan Kumar Chamling",
            "Mamata Banerjee",
            "Nitish Kumar"
        ],
        "correctAnswerIndex": 1,
        "explanation": "SDF was led by Pawan Kumar Chamling, who served as CM of Sikkim for a record 24 years."
    },
    {
        "id": "ch80-l1-q67",
        "question": "Which regional party championed the demand for a separate Uttarakhand State?",
        "options": [
            "Uttarakhand Kranti Dal",
            "BJP",
            "INC",
            "JD(U)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Uttarakhand Kranti Dal was instrumental in the movement for a separate Uttarakhand State."
    },
    {
        "id": "ch80-l1-q68",
        "question": "The ECI reviews the recognition status of parties after:",
        "options": [
            "Every year",
            "Every general election",
            "Every 10 years",
            "Only on complaint"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The ECI reviews party recognition after every general election to State Assemblies and Lok Sabha."
    },
    {
        "id": "ch80-l1-q69",
        "question": "Regional parties can lose their recognition status if:",
        "options": [
            "They fail to meet the minimum vote share and seat criteria",
            "The Supreme Court orders derecognition",
            "The President withdraws recognition",
            "They change their party name"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Parties lose recognition if they fail to meet ECI criteria in subsequent elections."
    },
    {
        "id": "ch80-l1-q70",
        "question": "Which of the following best describes the contribution of regional parties to Indian democracy?",
        "options": [
            "They have weakened democratic processes",
            "They have deepened democracy by ensuring representation of diverse interests",
            "They have no significant impact",
            "They have promoted authoritarian tendencies"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Regional parties have deepened Indian democracy by ensuring diverse representation and power-sharing."
    },
    {
        "id": "ch80-l1-q71",
        "question": "The phenomenon of 'regionalization of Indian politics' refers to:",
        "options": [
            "The increasing influence of regional parties in national politics",
            "The decreasing importance of States",
            "The centralization of power",
            "The decline of democracy"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Regionalization refers to the growing influence of regional parties in shaping national political outcomes."
    },
    {
        "id": "ch80-l1-q72",
        "question": "Which of the following regional parties has governed Jammu & Kashmir?",
        "options": [
            "National Conference",
            "PDP",
            "Both A and B",
            "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Both National Conference and PDP have governed J&K at different times."
    },
    {
        "id": "ch80-l1-q73",
        "question": "The concept of 'regional party system' was described by which political scientist?",
        "options": [
            "Yogendra Yadav",
            "Rajni Kothari",
            "Paul Brass",
            "All of them have contributed to this discourse"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Multiple political scientists have analyzed the Indian regional party system."
    },
    {
        "id": "ch80-l1-q74",
        "question": "Which of the following is a feature of the post-1989 Indian party system?",
        "options": [
            "Single-party dominance",
            "Multi-party system with coalition politics",
            "Two-party system",
            "No-party system"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Post-1989 India has been characterized by a multi-party system with frequent coalition governments."
    },
    {
        "id": "ch80-l1-q75",
        "question": "Regional parties in India are regulated by:",
        "options": [
            "The Constitution directly",
            "The Representation of the People Act, 1951 and ECI guidelines",
            "The Supreme Court only",
            "State legislatures"
        ],
        "correctAnswerIndex": 1,
        "explanation": "All political parties including regional parties are regulated by the RPA, 1951 and ECI rules."
    },
    {
        "id": "ch80-l1-q76",
        "question": "Which of the following regional parties won the maximum Lok Sabha seats in the 2019 general elections?",
        "options": [
            "DMK",
            "TMC",
            "YSRCP",
            "BJD"
        ],
        "correctAnswerIndex": 0,
        "explanation": "DMK won 24 seats in the 2019 Lok Sabha elections, the highest among regional parties."
    },
    {
        "id": "ch80-l1-q77",
        "question": "Assertion (A): Some regional parties have expanded beyond their home State.\\nReason (R): Parties like TMC and AAP have contested elections in States beyond West Bengal and Delhi respectively.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The expansion of TMC to Goa/Tripura and AAP to Punjab/Goa shows regional parties expanding their footprint."
    },
    {
        "id": "ch80-l1-q78",
        "question": "The impact of regional parties on fiscal federalism includes:",
        "options": [
            "Demanding greater financial autonomy for States",
            "Supporting centralization of finances",
            "Opposing GST uniformly",
            "Having no views on fiscal matters"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Regional parties consistently demand greater financial devolution and autonomy for States."
    },
    {
        "id": "ch80-l1-q79",
        "question": "Which of the following correctly describes the 'era of coalitions' in Indian politics?",
        "options": [
            "1952-1967",
            "1967-1977",
            "1989-2014",
            "2014 onwards"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The era of coalitions is generally identified as 1989-2014, when no single party consistently won a majority."
    },
    {
        "id": "ch80-l1-q80",
        "question": "Regional parties have contributed to which of the following constitutional processes?",
        "options": [
            "Constitutional amendments",
            "Presidential and Vice-Presidential elections",
            "Formation of new States",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Regional parties participate in all these constitutional processes through their parliamentary and legislative presence."
    },
    {
        "id": "ch80-l1-q81",
        "question": "The Representation of the People Act, 1951 requires all political parties to:",
        "options": [
            "Register with the Election Commission of India",
            "Register with the Supreme Court",
            "Obtain a license from the President",
            "Register with the Home Ministry"
        ],
        "correctAnswerIndex": 0,
        "explanation": "All parties must register with the ECI under Section 29A of the RPA, 1951."
    },
    {
        "id": "ch80-l1-q82",
        "question": "Which of the following is a dynastic regional party?",
        "options": [
            "CPI(M)",
            "DMK",
            "AAP",
            "Lok Dal"
        ],
        "correctAnswerIndex": 1,
        "explanation": "DMK has been led primarily by members of the Karunanidhi family, exemplifying dynastic politics in regional parties."
    },
    {
        "id": "ch80-l1-q83",
        "question": "The number of recognized State parties in India typically ranges between:",
        "options": [
            "5-10",
            "10-20",
            "40-70",
            "Over 100"
        ],
        "correctAnswerIndex": 2,
        "explanation": "India typically has between 40-70 recognized State parties at any given time."
    },
    {
        "id": "ch80-l1-q84",
        "question": "Which of the following events significantly boosted the role of regional parties?",
        "options": [
            "Implementation of the Mandal Commission recommendations",
            "Abolition of the Planning Commission",
            "Introduction of GST",
            "Demonetization"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Mandal Commission implementation (1990) boosted caste-based and regional parties significantly."
    },
    {
        "id": "ch80-l1-q85",
        "question": "The 'demand for Special Category Status' by some States is often pushed by:",
        "options": [
            "National parties only",
            "Regional parties representing those States",
            "The Supreme Court",
            "International organizations"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Regional parties from States like AP, Bihar, and Odisha have pushed for Special Category Status."
    },
    {
        "id": "ch80-l1-q86",
        "question": "Which of the following is a role played by regional parties in opposition?",
        "options": [
            "Scrutinizing central government policies",
            "Representing State interests in Parliament",
            "Raising issues of regional importance nationally",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Regional parties play all these roles when in opposition."
    },
    {
        "id": "ch80-l1-q87",
        "question": "The Election Symbols (Reservation and Allotment) Order, 1968 provides for:",
        "options": [
            "Reservation of symbols for recognized parties",
            "Allotment of free symbols to unrecognized parties",
            "Both A and B",
            "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Order provides for both reservation of symbols for recognized parties and allotment to others."
    },
    {
        "id": "ch80-l1-q88",
        "question": "Which regional party in Kerala is part of the Left Democratic Front (LDF)?",
        "options": [
            "Indian Union Muslim League",
            "Kerala Congress (M)",
            "CPI(M)",
            "Kerala Congress (J)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "CPI(M) leads the Left Democratic Front in Kerala."
    },
    {
        "id": "ch80-l1-q89",
        "question": "The fragmentation of the party system in India has led to:",
        "options": [
            "Stronger single-party governments",
            "Weaker central authority and stronger State bargaining power",
            "Abolition of regional parties",
            "Military rule"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Party fragmentation has strengthened States' bargaining power through coalition politics."
    },
    {
        "id": "ch80-l1-q90",
        "question": "Which of the following best summarizes the significance of regional parties in Indian polity?",
        "options": [
            "They are irrelevant to national politics",
            "They represent regional aspirations, strengthen federalism, and have been crucial in coalition formations",
            "They only serve local interests",
            "They weaken the national fabric"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Regional parties are vital to Indian democracy, representing regional aspirations, strengthening federalism, and playing crucial roles in coalition governments."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch80-l2-q1",
        "question": "The Jharkhand Mukti Morcha (JMM) is a regional party that fought for:",
        "options": [
            "Language rights in Tamil Nadu",
            "Separate Telangana State",
            "Separate Jharkhand State",
            "Muslim rights in UP"
        ],
        "correctAnswerIndex": 2,
        "explanation": "JMM fought for the creation of a separate Jharkhand State."
    },
    {
        "id": "ch80-l2-q2",
        "question": "Which of the following describes the 'coalition dharma' dilemma?",
        "options": [
            "Balancing national interest with coalition partners' regional demands",
            "Balancing party ideology with personal interest",
            "Balancing economic growth with defense spending",
            "None of the above"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Coalition dharma refers to the challenge of maintaining coalition stability while balancing national and regional interests."
    },
    {
        "id": "ch80-l2-q3",
        "question": "The Bharat Rashtra Samithi (BRS), formerly known as TRS, is active in:",
        "options": [
            "AP",
            "Telangana",
            "Karnataka",
            "Tamil Nadu"
        ],
        "correctAnswerIndex": 1,
        "explanation": "BRS (formerly Telangana Rashtra Samithi) is the dominant regional party in Telangana."
    },
    {
        "id": "ch80-l2-q4",
        "question": "The Anti-Defection Law (10th Schedule) impacts regional parties by:",
        "options": [
            "Encouraging floor-crossing",
            "Preventing defection of elected members from their party",
            "Allowing unlimited party switching",
            "Having no relevance to regional parties"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 10th Schedule discourages defection and affects regional parties like all others."
    },
    {
        "id": "ch80-l2-q5",
        "question": "Which regional party leader became the Prime Minister of India?",
        "options": [
            "Lalu Prasad Yadav",
            "H.D. Deve Gowda",
            "Chandrababu Naidu",
            "Mamata Banerjee"
        ],
        "correctAnswerIndex": 1,
        "explanation": "H.D. Deve Gowda of JD became PM in 1996 as part of the United Front coalition."
    },
    {
        "id": "ch80-l2-q6",
        "question": "The Indian Union Muslim League (IUML) is a regional party mainly active in:",
        "options": [
            "UP",
            "Bihar",
            "Kerala",
            "West Bengal"
        ],
        "correctAnswerIndex": 2,
        "explanation": "IUML is primarily active in the Malabar region of Kerala."
    },
    {
        "id": "ch80-l2-q7",
        "question": "The concept of 'dual membership' in a political party (being recognized in more than one State) is relevant for:",
        "options": [
            "Gaining national party status",
            "Getting recognized as a State party in multiple States",
            "Election funding",
            "Presidential elections"
        ],
        "correctAnswerIndex": 1,
        "explanation": "A party can be recognized as a State party in multiple States based on its performance in each."
    },
    {
        "id": "ch80-l2-q8",
        "question": "The Aam Aadmi Party (AAP) was originally a regional party of which UT/State?",
        "options": [
            "Punjab",
            "Goa",
            "Delhi",
            "Haryana"
        ],
        "correctAnswerIndex": 2,
        "explanation": "AAP was founded in 2012 and first gained power in Delhi. It later gained national party status."
    },
    {
        "id": "ch80-l2-q9",
        "question": "The ECI allocates election symbols to regional parties based on:",
        "options": [
            "The party's request only",
            "Performance criteria and registration status",
            "The President's approval",
            "The Supreme Court's direction"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The ECI allocates reserved symbols based on the party's recognition status and performance."
    },
    {
        "id": "ch80-l2-q10",
        "question": "Which of the following is a benefit of being recognized as a State party?",
        "options": [
            "Reserved election symbol",
            "Free time on Doordarshan and AIR during elections",
            "Priority in allotment of land",
            "Both A and B"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Recognized State parties get a reserved symbol and free broadcast time during elections."
    },
    {
        "id": "ch80-l2-q11",
        "question": "The Kerala Congress is an example of:",
        "options": [
            "A national party",
            "A regional party based on religious identity",
            "A regional breakaway from the Indian National Congress in Kerala",
            "A communist party"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Kerala Congress is a regional party that broke away from the INC and has had multiple factions."
    },
    {
        "id": "ch80-l2-q12",
        "question": "The Mizo National Front (MNF) is a regional party active in:",
        "options": [
            "Manipur",
            "Mizoram",
            "Meghalaya",
            "Nagaland"
        ],
        "correctAnswerIndex": 1,
        "explanation": "MNF is a regional party in Mizoram, which signed a peace accord in 1986."
    },
    {
        "id": "ch80-l2-q13",
        "question": "The Naga People's Front (NPF) is active in:",
        "options": [
            "Nagaland",
            "Manipur",
            "Mizoram",
            "Assam"
        ],
        "correctAnswerIndex": 0,
        "explanation": "NPF is a major regional party in Nagaland."
    },
    {
        "id": "ch80-l2-q14",
        "question": "The Asom Gana Parishad (AGP) emerged from which movement?",
        "options": [
            "Chipko Movement",
            "Assam Movement (anti-foreigners movement)",
            "Telangana Movement",
            "Separate Uttarakhand Movement"
        ],
        "correctAnswerIndex": 1,
        "explanation": "AGP was formed in 1985 following the Assam Accord that ended the Assam Movement."
    },
    {
        "id": "ch80-l2-q15",
        "question": "Which of the following best describes the relationship between regional parties and federalism?",
        "options": [
            "Regional parties weaken federalism",
            "Regional parties strengthen federalism by representing State interests",
            "Regional parties have no impact on federalism",
            "Regional parties promote unitary governance"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Regional parties strengthen federalism by asserting State interests and ensuring power-sharing."
    },
    {
        "id": "ch80-l2-q16",
        "question": "The Nationalist Congress Party (NCP) was formed as a split from:",
        "options": [
            "BJP",
            "CPI(M)",
            "INC",
            "Janata Dal"
        ],
        "correctAnswerIndex": 2,
        "explanation": "NCP was formed by Sharad Pawar, P.A. Sangma, and Tariq Anwar after splitting from the INC in 1999."
    },
    {
        "id": "ch80-l2-q17",
        "question": "The Dravidian movement led to the birth of which series of regional parties?",
        "options": [
            "Akali parties in Punjab",
            "DMK, AIADMK, and other Dravidian parties in Tamil Nadu",
            "BRS and TDP in Telangana/AP",
            "AGP in Assam"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Dravidian movement led to DMK, AIADMK, MDMK, PMK, and other parties in Tamil Nadu."
    },
    {
        "id": "ch80-l2-q18",
        "question": "Which regional party has consistently governed Odisha since 2000?",
        "options": [
            "INC",
            "BJP",
            "BJD",
            "JD(U)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Biju Janata Dal (BJD) under Naveen Patnaik governed Odisha continuously from 2000 to 2024."
    },
    {
        "id": "ch80-l2-q19",
        "question": "The Sarkaria Commission (1983) recommendations included strengthening:",
        "options": [
            "Only national parties",
            "The role of regional parties in inter-governmental relations",
            "The military",
            "The judiciary"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Sarkaria Commission recommended strengthening Centre-State relations and recognized the role of regional parties."
    },
    {
        "id": "ch80-l2-q20",
        "question": "Which of the following factors has reduced the role of regional parties in some States?",
        "options": [
            "Bipolarity through strong national party presence",
            "Elimination of regional identities",
            "Complete urbanization",
            "Abolition of State legislatures"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Strong national party presence in some States creates bipolarity, reducing space for regional parties."
    },
    {
        "id": "ch80-l2-q21",
        "question": "Consider the following pairs:\\n1. DMK — Tamil Nadu\\n2. TDP — Andhra Pradesh\\n3. AGP — Meghalaya\\nWhich are correctly matched?",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 0,
        "explanation": "AGP is from Assam, not Meghalaya. DMK-TN and TDP-AP are correct."
    },
    {
        "id": "ch80-l2-q22",
        "question": "Assertion (A): Regional parties have played a decisive role in the formation of coalition governments at the Centre.\\nReason (R): No single party has won an absolute majority in the Lok Sabha in many elections since 1989.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The fragmented mandate made regional parties essential for forming governments, especially from 1989 to 2014."
    },
    {
        "id": "ch80-l2-q23",
        "question": "Which of the following regional parties has been part of both NDA and UPA coalitions at different times?",
        "options": [
            "DMK",
            "BSP",
            "Both A and B",
            "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Both DMK and BSP have allied with different national coalitions at different points in time."
    },
    {
        "id": "ch80-l2-q24",
        "question": "The phrase 'Sons of the Soil' doctrine is most closely associated with:",
        "options": [
            "National parties",
            "Regional parties advocating for local employment preferences",
            "The Supreme Court",
            "The Election Commission"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Sons of the Soil doctrine advocates preferential treatment for local residents in employment and education, championed by regional parties."
    },
    {
        "id": "ch80-l2-q25",
        "question": "Which regional party was formed specifically to demand a separate Telangana State?",
        "options": [
            "TDP",
            "YSRCP",
            "TRS (now BRS)",
            "INC"
        ],
        "correctAnswerIndex": 2,
        "explanation": "TRS (Telangana Rashtra Samithi, now BRS) was formed in 2001 specifically to demand a separate Telangana State."
    },
    {
        "id": "ch80-l2-q26",
        "question": "The National People's Party (NPP) from Meghalaya has attained which status?",
        "options": [
            "State party status only in Meghalaya",
            "National party status",
            "It is unregistered",
            "It has been deregistered"
        ],
        "correctAnswerIndex": 1,
        "explanation": "NPP became a national party after gaining recognition in multiple States."
    },
    {
        "id": "ch80-l2-q27",
        "question": "Which of the following is a challenge posed by regional parties to national governance?",
        "options": [
            "Policy paralysis due to coalition compulsions",
            "Complete centralization",
            "Elimination of opposition",
            "Uniform development"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Coalition compulsions from regional partners can sometimes lead to policy delays and compromises."
    },
    {
        "id": "ch80-l2-q28",
        "question": "The Lok Dal and its successor parties were prominent in which region?",
        "options": [
            "South India",
            "Northern India (especially UP and Haryana)",
            "Northeast India",
            "Western India"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Lok Dal and its offshoots like INLD were prominent in northern India, particularly among Jat communities."
    },
    {
        "id": "ch80-l2-q29",
        "question": "The role of regional parties in the Rajya Sabha has been to:",
        "options": [
            "Ensure representation of State-level interests in the Upper House",
            "Block all central legislation",
            "Support only national parties",
            "Have no impact"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Regional parties use Rajya Sabha representation to voice State-level concerns in national legislation."
    },
    {
        "id": "ch80-l2-q30",
        "question": "Which commission recommended that the appointment of Governors should consider the views of State governments, thereby recognizing regional party interests?",
        "options": [
            "Sarkaria Commission",
            "Punchhi Commission",
            "Both A and B",
            "Verma Commission"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Both the Sarkaria and Punchhi Commissions recommended consulting State governments for Governor appointments."
    },
    {
        "id": "ch80-l2-q31",
        "question": "Consider the following statements about regional parties:\\n1. They can participate in Presidential elections.\\n2. They can form the government at the Centre independently.\\n3. They have played kingmaker roles in coalition governments.\\nWhich are correct?",
        "options": [
            "1 and 3 only",
            "2 and 3 only",
            "1 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Regional parties participate in Presidential elections and have been kingmakers, but cannot independently form a central government."
    },
    {
        "id": "ch80-l2-q32",
        "question": "Assertion (A): Regional parties have promoted linguistic identity in Indian politics.\\nReason (R): The reorganization of States on linguistic basis in 1956 strengthened linguistic identities.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Linguistic reorganization reinforced regional identities, providing fertile ground for regional parties."
    },
    {
        "id": "ch80-l2-q33",
        "question": "Which of the following is NOT a criticism of regional parties?",
        "options": [
            "Dynastic leadership",
            "Encouraging parochialism",
            "Promoting narrow identity politics",
            "Ensuring representation of all sections of society uniformly"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Ensuring uniform representation is generally not a criticism but rather an aspiration."
    },
    {
        "id": "ch80-l2-q34",
        "question": "The concept of 'competitive federalism' is enhanced by regional parties because:",
        "options": [
            "They compete with each other for central resources and better governance",
            "They eliminate competition",
            "They centralize power",
            "They oppose all national policies"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Regional parties promote competitive federalism by competing for better governance and central resources."
    },
    {
        "id": "ch80-l2-q35",
        "question": "Which of the following regional parties was founded by a film actor who later became Chief Minister?",
        "options": [
            "DMK",
            "AIADMK",
            "TDP",
            "Both B and C"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Both M.G. Ramachandran (AIADMK) and N.T. Rama Rao (TDP) were film actors who became Chief Ministers."
    },
    {
        "id": "ch80-l2-q36",
        "question": "The Sikkim Democratic Front (SDF) was led by:",
        "options": [
            "Naveen Patnaik",
            "Pawan Kumar Chamling",
            "Mamata Banerjee",
            "Nitish Kumar"
        ],
        "correctAnswerIndex": 1,
        "explanation": "SDF was led by Pawan Kumar Chamling, who served as CM of Sikkim for a record 24 years."
    },
    {
        "id": "ch80-l2-q37",
        "question": "Which regional party championed the demand for a separate Uttarakhand State?",
        "options": [
            "Uttarakhand Kranti Dal",
            "BJP",
            "INC",
            "JD(U)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Uttarakhand Kranti Dal was instrumental in the movement for a separate Uttarakhand State."
    },
    {
        "id": "ch80-l2-q38",
        "question": "The ECI reviews the recognition status of parties after:",
        "options": [
            "Every year",
            "Every general election",
            "Every 10 years",
            "Only on complaint"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The ECI reviews party recognition after every general election to State Assemblies and Lok Sabha."
    },
    {
        "id": "ch80-l2-q39",
        "question": "Regional parties can lose their recognition status if:",
        "options": [
            "They fail to meet the minimum vote share and seat criteria",
            "The Supreme Court orders derecognition",
            "The President withdraws recognition",
            "They change their party name"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Parties lose recognition if they fail to meet ECI criteria in subsequent elections."
    },
    {
        "id": "ch80-l2-q40",
        "question": "Which of the following best describes the contribution of regional parties to Indian democracy?",
        "options": [
            "They have weakened democratic processes",
            "They have deepened democracy by ensuring representation of diverse interests",
            "They have no significant impact",
            "They have promoted authoritarian tendencies"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Regional parties have deepened Indian democracy by ensuring diverse representation and power-sharing."
    },
    {
        "id": "ch80-l2-q41",
        "question": "The phenomenon of 'regionalization of Indian politics' refers to:",
        "options": [
            "The increasing influence of regional parties in national politics",
            "The decreasing importance of States",
            "The centralization of power",
            "The decline of democracy"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Regionalization refers to the growing influence of regional parties in shaping national political outcomes."
    },
    {
        "id": "ch80-l2-q42",
        "question": "Which of the following regional parties has governed Jammu & Kashmir?",
        "options": [
            "National Conference",
            "PDP",
            "Both A and B",
            "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Both National Conference and PDP have governed J&K at different times."
    },
    {
        "id": "ch80-l2-q43",
        "question": "The concept of 'regional party system' was described by which political scientist?",
        "options": [
            "Yogendra Yadav",
            "Rajni Kothari",
            "Paul Brass",
            "All of them have contributed to this discourse"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Multiple political scientists have analyzed the Indian regional party system."
    },
    {
        "id": "ch80-l2-q44",
        "question": "Which of the following is a feature of the post-1989 Indian party system?",
        "options": [
            "Single-party dominance",
            "Multi-party system with coalition politics",
            "Two-party system",
            "No-party system"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Post-1989 India has been characterized by a multi-party system with frequent coalition governments."
    },
    {
        "id": "ch80-l2-q45",
        "question": "Regional parties in India are regulated by:",
        "options": [
            "The Constitution directly",
            "The Representation of the People Act, 1951 and ECI guidelines",
            "The Supreme Court only",
            "State legislatures"
        ],
        "correctAnswerIndex": 1,
        "explanation": "All political parties including regional parties are regulated by the RPA, 1951 and ECI rules."
    },
    {
        "id": "ch80-l2-q46",
        "question": "Which of the following regional parties won the maximum Lok Sabha seats in the 2019 general elections?",
        "options": [
            "DMK",
            "TMC",
            "YSRCP",
            "BJD"
        ],
        "correctAnswerIndex": 0,
        "explanation": "DMK won 24 seats in the 2019 Lok Sabha elections, the highest among regional parties."
    },
    {
        "id": "ch80-l2-q47",
        "question": "Assertion (A): Some regional parties have expanded beyond their home State.\\nReason (R): Parties like TMC and AAP have contested elections in States beyond West Bengal and Delhi respectively.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The expansion of TMC to Goa/Tripura and AAP to Punjab/Goa shows regional parties expanding their footprint."
    },
    {
        "id": "ch80-l2-q48",
        "question": "The impact of regional parties on fiscal federalism includes:",
        "options": [
            "Demanding greater financial autonomy for States",
            "Supporting centralization of finances",
            "Opposing GST uniformly",
            "Having no views on fiscal matters"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Regional parties consistently demand greater financial devolution and autonomy for States."
    },
    {
        "id": "ch80-l2-q49",
        "question": "Which of the following correctly describes the 'era of coalitions' in Indian politics?",
        "options": [
            "1952-1967",
            "1967-1977",
            "1989-2014",
            "2014 onwards"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The era of coalitions is generally identified as 1989-2014, when no single party consistently won a majority."
    },
    {
        "id": "ch80-l2-q50",
        "question": "Regional parties have contributed to which of the following constitutional processes?",
        "options": [
            "Constitutional amendments",
            "Presidential and Vice-Presidential elections",
            "Formation of new States",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Regional parties participate in all these constitutional processes through their parliamentary and legislative presence."
    },
    {
        "id": "ch80-l2-q51",
        "question": "The Representation of the People Act, 1951 requires all political parties to:",
        "options": [
            "Register with the Election Commission of India",
            "Register with the Supreme Court",
            "Obtain a license from the President",
            "Register with the Home Ministry"
        ],
        "correctAnswerIndex": 0,
        "explanation": "All parties must register with the ECI under Section 29A of the RPA, 1951."
    },
    {
        "id": "ch80-l2-q52",
        "question": "Which of the following is a dynastic regional party?",
        "options": [
            "CPI(M)",
            "DMK",
            "AAP",
            "Lok Dal"
        ],
        "correctAnswerIndex": 1,
        "explanation": "DMK has been led primarily by members of the Karunanidhi family, exemplifying dynastic politics in regional parties."
    },
    {
        "id": "ch80-l2-q53",
        "question": "The number of recognized State parties in India typically ranges between:",
        "options": [
            "5-10",
            "10-20",
            "40-70",
            "Over 100"
        ],
        "correctAnswerIndex": 2,
        "explanation": "India typically has between 40-70 recognized State parties at any given time."
    },
    {
        "id": "ch80-l2-q54",
        "question": "Which of the following events significantly boosted the role of regional parties?",
        "options": [
            "Implementation of the Mandal Commission recommendations",
            "Abolition of the Planning Commission",
            "Introduction of GST",
            "Demonetization"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Mandal Commission implementation (1990) boosted caste-based and regional parties significantly."
    },
    {
        "id": "ch80-l2-q55",
        "question": "The 'demand for Special Category Status' by some States is often pushed by:",
        "options": [
            "National parties only",
            "Regional parties representing those States",
            "The Supreme Court",
            "International organizations"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Regional parties from States like AP, Bihar, and Odisha have pushed for Special Category Status."
    },
    {
        "id": "ch80-l2-q56",
        "question": "Which of the following is a role played by regional parties in opposition?",
        "options": [
            "Scrutinizing central government policies",
            "Representing State interests in Parliament",
            "Raising issues of regional importance nationally",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Regional parties play all these roles when in opposition."
    },
    {
        "id": "ch80-l2-q57",
        "question": "The Election Symbols (Reservation and Allotment) Order, 1968 provides for:",
        "options": [
            "Reservation of symbols for recognized parties",
            "Allotment of free symbols to unrecognized parties",
            "Both A and B",
            "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Order provides for both reservation of symbols for recognized parties and allotment to others."
    },
    {
        "id": "ch80-l2-q58",
        "question": "Which regional party in Kerala is part of the Left Democratic Front (LDF)?",
        "options": [
            "Indian Union Muslim League",
            "Kerala Congress (M)",
            "CPI(M)",
            "Kerala Congress (J)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "CPI(M) leads the Left Democratic Front in Kerala."
    },
    {
        "id": "ch80-l2-q59",
        "question": "The fragmentation of the party system in India has led to:",
        "options": [
            "Stronger single-party governments",
            "Weaker central authority and stronger State bargaining power",
            "Abolition of regional parties",
            "Military rule"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Party fragmentation has strengthened States' bargaining power through coalition politics."
    },
    {
        "id": "ch80-l2-q60",
        "question": "Which of the following best summarizes the significance of regional parties in Indian polity?",
        "options": [
            "They are irrelevant to national politics",
            "They represent regional aspirations, strengthen federalism, and have been crucial in coalition formations",
            "They only serve local interests",
            "They weaken the national fabric"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Regional parties are vital to Indian democracy, representing regional aspirations, strengthening federalism, and playing crucial roles in coalition governments."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch80-l3-q1",
        "question": "Consider the following statements about regional parties:\\n1. They can participate in Presidential elections.\\n2. They can form the government at the Centre independently.\\n3. They have played kingmaker roles in coalition governments.\\nWhich are correct?",
        "options": [
            "1 and 3 only",
            "2 and 3 only",
            "1 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Regional parties participate in Presidential elections and have been kingmakers, but cannot independently form a central government."
    },
    {
        "id": "ch80-l3-q2",
        "question": "Assertion (A): Regional parties have promoted linguistic identity in Indian politics.\\nReason (R): The reorganization of States on linguistic basis in 1956 strengthened linguistic identities.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Linguistic reorganization reinforced regional identities, providing fertile ground for regional parties."
    },
    {
        "id": "ch80-l3-q3",
        "question": "Which of the following is NOT a criticism of regional parties?",
        "options": [
            "Dynastic leadership",
            "Encouraging parochialism",
            "Promoting narrow identity politics",
            "Ensuring representation of all sections of society uniformly"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Ensuring uniform representation is generally not a criticism but rather an aspiration."
    },
    {
        "id": "ch80-l3-q4",
        "question": "The concept of 'competitive federalism' is enhanced by regional parties because:",
        "options": [
            "They compete with each other for central resources and better governance",
            "They eliminate competition",
            "They centralize power",
            "They oppose all national policies"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Regional parties promote competitive federalism by competing for better governance and central resources."
    },
    {
        "id": "ch80-l3-q5",
        "question": "Which of the following regional parties was founded by a film actor who later became Chief Minister?",
        "options": [
            "DMK",
            "AIADMK",
            "TDP",
            "Both B and C"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Both M.G. Ramachandran (AIADMK) and N.T. Rama Rao (TDP) were film actors who became Chief Ministers."
    },
    {
        "id": "ch80-l3-q6",
        "question": "The Sikkim Democratic Front (SDF) was led by:",
        "options": [
            "Naveen Patnaik",
            "Pawan Kumar Chamling",
            "Mamata Banerjee",
            "Nitish Kumar"
        ],
        "correctAnswerIndex": 1,
        "explanation": "SDF was led by Pawan Kumar Chamling, who served as CM of Sikkim for a record 24 years."
    },
    {
        "id": "ch80-l3-q7",
        "question": "Which regional party championed the demand for a separate Uttarakhand State?",
        "options": [
            "Uttarakhand Kranti Dal",
            "BJP",
            "INC",
            "JD(U)"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Uttarakhand Kranti Dal was instrumental in the movement for a separate Uttarakhand State."
    },
    {
        "id": "ch80-l3-q8",
        "question": "The ECI reviews the recognition status of parties after:",
        "options": [
            "Every year",
            "Every general election",
            "Every 10 years",
            "Only on complaint"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The ECI reviews party recognition after every general election to State Assemblies and Lok Sabha."
    },
    {
        "id": "ch80-l3-q9",
        "question": "Regional parties can lose their recognition status if:",
        "options": [
            "They fail to meet the minimum vote share and seat criteria",
            "The Supreme Court orders derecognition",
            "The President withdraws recognition",
            "They change their party name"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Parties lose recognition if they fail to meet ECI criteria in subsequent elections."
    },
    {
        "id": "ch80-l3-q10",
        "question": "Which of the following best describes the contribution of regional parties to Indian democracy?",
        "options": [
            "They have weakened democratic processes",
            "They have deepened democracy by ensuring representation of diverse interests",
            "They have no significant impact",
            "They have promoted authoritarian tendencies"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Regional parties have deepened Indian democracy by ensuring diverse representation and power-sharing."
    },
    {
        "id": "ch80-l3-q11",
        "question": "The phenomenon of 'regionalization of Indian politics' refers to:",
        "options": [
            "The increasing influence of regional parties in national politics",
            "The decreasing importance of States",
            "The centralization of power",
            "The decline of democracy"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Regionalization refers to the growing influence of regional parties in shaping national political outcomes."
    },
    {
        "id": "ch80-l3-q12",
        "question": "Which of the following regional parties has governed Jammu & Kashmir?",
        "options": [
            "National Conference",
            "PDP",
            "Both A and B",
            "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Both National Conference and PDP have governed J&K at different times."
    },
    {
        "id": "ch80-l3-q13",
        "question": "The concept of 'regional party system' was described by which political scientist?",
        "options": [
            "Yogendra Yadav",
            "Rajni Kothari",
            "Paul Brass",
            "All of them have contributed to this discourse"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Multiple political scientists have analyzed the Indian regional party system."
    },
    {
        "id": "ch80-l3-q14",
        "question": "Which of the following is a feature of the post-1989 Indian party system?",
        "options": [
            "Single-party dominance",
            "Multi-party system with coalition politics",
            "Two-party system",
            "No-party system"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Post-1989 India has been characterized by a multi-party system with frequent coalition governments."
    },
    {
        "id": "ch80-l3-q15",
        "question": "Regional parties in India are regulated by:",
        "options": [
            "The Constitution directly",
            "The Representation of the People Act, 1951 and ECI guidelines",
            "The Supreme Court only",
            "State legislatures"
        ],
        "correctAnswerIndex": 1,
        "explanation": "All political parties including regional parties are regulated by the RPA, 1951 and ECI rules."
    },
    {
        "id": "ch80-l3-q16",
        "question": "Which of the following regional parties won the maximum Lok Sabha seats in the 2019 general elections?",
        "options": [
            "DMK",
            "TMC",
            "YSRCP",
            "BJD"
        ],
        "correctAnswerIndex": 0,
        "explanation": "DMK won 24 seats in the 2019 Lok Sabha elections, the highest among regional parties."
    },
    {
        "id": "ch80-l3-q17",
        "question": "Assertion (A): Some regional parties have expanded beyond their home State.\\nReason (R): Parties like TMC and AAP have contested elections in States beyond West Bengal and Delhi respectively.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The expansion of TMC to Goa/Tripura and AAP to Punjab/Goa shows regional parties expanding their footprint."
    },
    {
        "id": "ch80-l3-q18",
        "question": "The impact of regional parties on fiscal federalism includes:",
        "options": [
            "Demanding greater financial autonomy for States",
            "Supporting centralization of finances",
            "Opposing GST uniformly",
            "Having no views on fiscal matters"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Regional parties consistently demand greater financial devolution and autonomy for States."
    },
    {
        "id": "ch80-l3-q19",
        "question": "Which of the following correctly describes the 'era of coalitions' in Indian politics?",
        "options": [
            "1952-1967",
            "1967-1977",
            "1989-2014",
            "2014 onwards"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The era of coalitions is generally identified as 1989-2014, when no single party consistently won a majority."
    },
    {
        "id": "ch80-l3-q20",
        "question": "Regional parties have contributed to which of the following constitutional processes?",
        "options": [
            "Constitutional amendments",
            "Presidential and Vice-Presidential elections",
            "Formation of new States",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Regional parties participate in all these constitutional processes through their parliamentary and legislative presence."
    },
    {
        "id": "ch80-l3-q21",
        "question": "The Representation of the People Act, 1951 requires all political parties to:",
        "options": [
            "Register with the Election Commission of India",
            "Register with the Supreme Court",
            "Obtain a license from the President",
            "Register with the Home Ministry"
        ],
        "correctAnswerIndex": 0,
        "explanation": "All parties must register with the ECI under Section 29A of the RPA, 1951."
    },
    {
        "id": "ch80-l3-q22",
        "question": "Which of the following is a dynastic regional party?",
        "options": [
            "CPI(M)",
            "DMK",
            "AAP",
            "Lok Dal"
        ],
        "correctAnswerIndex": 1,
        "explanation": "DMK has been led primarily by members of the Karunanidhi family, exemplifying dynastic politics in regional parties."
    },
    {
        "id": "ch80-l3-q23",
        "question": "The number of recognized State parties in India typically ranges between:",
        "options": [
            "5-10",
            "10-20",
            "40-70",
            "Over 100"
        ],
        "correctAnswerIndex": 2,
        "explanation": "India typically has between 40-70 recognized State parties at any given time."
    },
    {
        "id": "ch80-l3-q24",
        "question": "Which of the following events significantly boosted the role of regional parties?",
        "options": [
            "Implementation of the Mandal Commission recommendations",
            "Abolition of the Planning Commission",
            "Introduction of GST",
            "Demonetization"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Mandal Commission implementation (1990) boosted caste-based and regional parties significantly."
    },
    {
        "id": "ch80-l3-q25",
        "question": "The 'demand for Special Category Status' by some States is often pushed by:",
        "options": [
            "National parties only",
            "Regional parties representing those States",
            "The Supreme Court",
            "International organizations"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Regional parties from States like AP, Bihar, and Odisha have pushed for Special Category Status."
    },
    {
        "id": "ch80-l3-q26",
        "question": "Which of the following is a role played by regional parties in opposition?",
        "options": [
            "Scrutinizing central government policies",
            "Representing State interests in Parliament",
            "Raising issues of regional importance nationally",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Regional parties play all these roles when in opposition."
    },
    {
        "id": "ch80-l3-q27",
        "question": "The Election Symbols (Reservation and Allotment) Order, 1968 provides for:",
        "options": [
            "Reservation of symbols for recognized parties",
            "Allotment of free symbols to unrecognized parties",
            "Both A and B",
            "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Order provides for both reservation of symbols for recognized parties and allotment to others."
    },
    {
        "id": "ch80-l3-q28",
        "question": "Which regional party in Kerala is part of the Left Democratic Front (LDF)?",
        "options": [
            "Indian Union Muslim League",
            "Kerala Congress (M)",
            "CPI(M)",
            "Kerala Congress (J)"
        ],
        "correctAnswerIndex": 2,
        "explanation": "CPI(M) leads the Left Democratic Front in Kerala."
    },
    {
        "id": "ch80-l3-q29",
        "question": "The fragmentation of the party system in India has led to:",
        "options": [
            "Stronger single-party governments",
            "Weaker central authority and stronger State bargaining power",
            "Abolition of regional parties",
            "Military rule"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Party fragmentation has strengthened States' bargaining power through coalition politics."
    },
    {
        "id": "ch80-l3-q30",
        "question": "Which of the following best summarizes the significance of regional parties in Indian polity?",
        "options": [
            "They are irrelevant to national politics",
            "They represent regional aspirations, strengthen federalism, and have been crucial in coalition formations",
            "They only serve local interests",
            "They weaken the national fabric"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Regional parties are vital to Indian democracy, representing regional aspirations, strengthening federalism, and playing crucial roles in coalition governments."
    }
];

export const CHAPTER_80_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
