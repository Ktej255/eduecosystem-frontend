export interface MCQ {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number; // 0 for A, 1 for B, 2 for C, 3 for D
    explanation?: string;
    level?: string;
}

export const DAY3_MCQS: MCQ[] = [
    // SECTION 1: HISTORICAL BACKGROUND (CHAPTER 1)
    {
        id: 1,
        question: "Consider the following regarding the Act of 1786:\n\n1. It was enacted to persuade Lord Cornwallis to accept the Governor-Generalship.\n2. It gave the Governor-General the power to override his council in all matters.\n3. It united the offices of Governor-General and Commander-in-Chief.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 and 3 only",
            "2 only",
            "2 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 0,
        explanation: "Statement 2 is incorrect; the power was for 'special cases', not all matters.",
        level: "Moderate"
    },
    {
        id: 2,
        question: "Which Act for the first time explicitly stated that the \"British Parliament could not be sued in India\"?",
        options: [
            "Charter Act of 1813",
            "Charter Act of 1833",
            "Charter Act of 1853",
            "Government of India Act, 1858"
        ],
        correctAnswer: 3,
        explanation: "The Act declared the Secretary of State as a 'body corporate' capable of suing and being sued, implying the Crown's direct liability, but previous Acts had different immunities.",
        level: "Tough"
    },
    {
        id: 3,
        question: "Match the following 'Minor' Acts with their key provisions:\n\nList-I\nA. Amending Act of 1781\nB. Charter Act of 1793\nC. Act of 1786\nD. Charter Act of 1813\n\nList-II\n1. Payment of Board of Control from Indian Revenues\n2. Jurisdiction of Supreme Court defined\n3. Override power given to Cornwallis\n4. Christian Missionaries allowed",
        options: [
            "2-1-3-4",
            "1-2-3-4",
            "2-3-1-4",
            "3-2-1-4"
        ],
        correctAnswer: 0,
        explanation: "A-2, B-1, C-3, D-4.",
        level: "Moderate"
    },
    {
        id: 4,
        question: "The \"System of Budget\" was formally introduced in British India by:",
        options: [
            "Lord Canning in 1860",
            "Lord Dalhousie in 1853",
            "Lord Ripon in 1882",
            "Lord Curzon in 1903"
        ],
        correctAnswer: 0,
        explanation: "The budget system was introduced by James Wilson in 1860 during the tenure of Lord Canning.",
        level: "Easy"
    },
    {
        id: 5,
        question: "Which Act provided for the appointment of a 'Law Member' to the Governor-General's Council but did not allow him to sit and vote in the council's meetings?",
        options: [
            "Charter Act of 1813",
            "Charter Act of 1833",
            "Charter Act of 1853",
            "Indian Councils Act, 1861"
        ],
        correctAnswer: 1,
        explanation: "Macaulay was the first Law Member. He became a full member only in 1853.",
        level: "Moderate"
    },
    {
        id: 6,
        question: "Regarding the 'Indian Councils Act of 1892', which of the following is correct?",
        options: [
            "It introduced the term 'election' in the act.",
            "It allowed members to move resolutions on the budget.",
            "It allowed members to ask supplementary questions.",
            "It allowed discussion on the budget but no right to vote on it."
        ],
        correctAnswer: 3,
        explanation: "The Act allowed discussion on the budget but gave no right to vote on it. The term 'election' was not used; it used the word 'nomination'. Supplementary questions were allowed by the 1909 Act.",
        level: "Moderate"
    },
    {
        id: 7,
        question: "Who was the first Indian to become the Speaker (President) of the Central Legislative Assembly in 1925?",
        options: [
            "G.V. Mavalankar",
            "Vithalbhai Patel",
            "Motilal Nehru",
            "C.R. Das"
        ],
        correctAnswer: 1,
        explanation: "Vithalbhai Patel was the first Indian Speaker (President) of the Central Legislative Assembly in 1925.",
        level: "Easy"
    },
    {
        id: 8,
        question: "The 'Lee Commission' (1923-24) is associated with which provision of the 1919 Act?",
        options: [
            "Establishment of Public Service Commission",
            "Separation of Railway Budget",
            "Appointment of High Commissioner",
            "Dyarchy in Provinces"
        ],
        correctAnswer: 0,
        explanation: "The Lee Commission recommended the establishment of a Public Service Commission, which led to the Central Public Service Commission in 1926.",
        level: "Easy"
    },
    {
        id: 9,
        question: "Which Act separated the provincial budgets from the Central budget and authorized provincial legislatures to enact their own budgets?",
        options: [
            "Indian Councils Act, 1909",
            "Government of India Act, 1919",
            "Government of India Act, 1935",
            "Indian Independence Act, 1947"
        ],
        correctAnswer: 1,
        explanation: "The Government of India Act, 1919 separated provincial budgets from the Central budget.",
        level: "Easy"
    },
    {
        id: 10,
        question: "Consider the following about the Government of India Act, 1935:\n\n1. It proposed a 'Instrument of Instructions' for the Governor-General and Governors.\n2. It provided for a Reserve Bank of India.\n3. It introduced bicameralism in all eleven provinces.\n\nWhich is/are correct?",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 0,
        explanation: "Statement 3 is incorrect; Bicameralism was introduced in only 6 out of 11 provinces (Bengal, Bombay, Madras, Bihar, Assam, and United Provinces).",
        level: "Moderate"
    },
    {
        id: 11,
        question: "The 'Simon Commission' report recommendations included:\n\n1. Abolition of Dyarchy.\n2. Extension of responsible government in provinces.\n3. Establishment of a federation of British India and Princely States.\n\nSelect the correct answer:",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 3,
        explanation: "The Simon Commission recommended all three: abolition of dyarchy, responsible government in provinces, and a federation.",
        level: "Moderate"
    },
    {
        id: 12,
        question: "Which Act empowered the Constituent Assembly to abrogate or repeal any Act of the British Parliament, including the Independence Act itself?",
        options: [
            "Cabinet Mission Plan",
            "Indian Independence Act, 1947",
            "Mountbatten Plan",
            "Third June Plan"
        ],
        correctAnswer: 1,
        explanation: "The Indian Independence Act, 1947 empowered the Constituent Assembly to repeal any British Act, including the Independence Act itself.",
        level: "Easy"
    },
    {
        id: 13,
        question: "Under the Act of 1919, the 'Council of State' (Upper House) had a tenure of:",
        options: [
            "3 Years",
            "5 Years",
            "6 Years",
            "Permanent Body"
        ],
        correctAnswer: 1,
        explanation: "Under the 1919 Act, the Legislative Assembly had a tenure of 3 years, and the Council of State had a tenure of 5 years.",
        level: "Tough"
    },
    {
        id: 14,
        question: "The office of 'Secretary of State for India' was abolished by:",
        options: [
            "Government of India Act, 1935",
            "Indian Independence Act, 1947",
            "Cabinet Mission Plan, 1946",
            "August Offer, 1940"
        ],
        correctAnswer: 1,
        explanation: "The Indian Independence Act, 1947 abolished the office of Secretary of State for India. His functions were transferred to the Secretary of State for Commonwealth Affairs.",
        level: "Easy"
    },
    {
        id: 15,
        question: "Which Act provided that the Commander-in-Chief was not to be a member of the Governor-General’s Council unless appointed so?",
        options: [
            "Act of 1786",
            "Charter Act of 1793",
            "Charter Act of 1833",
            "Charter Act of 1853"
        ],
        correctAnswer: 1,
        explanation: "The Charter Act of 1793 provided that the Commander-in-Chief was not to be a member of the Governor-General’s Council unless appointed so.",
        level: "Tough"
    },
    {
        id: 16,
        question: "The 'Macaulay Committee' (Committee on the Indian Civil Service) was appointed in:",
        options: [
            "1833",
            "1853",
            "1854",
            "1861"
        ],
        correctAnswer: 2,
        explanation: "The Macaulay Committee on the Indian Civil Service was appointed in 1854.",
        level: "Easy"
    },
    {
        id: 17,
        question: "Which Act extended the term of the East India Company’s trade monopoly for 20 years for the last time?",
        options: [
            "Charter Act of 1793",
            "Charter Act of 1813",
            "Charter Act of 1833",
            "Charter Act of 1853"
        ],
        correctAnswer: 1,
        explanation: "The Charter Act of 1813 extended the trade monopoly for 20 years (except tea and trade with China). 1833 ended it completely. 1853 did not specify a time period.",
        level: "Moderate"
    },
    {
        id: 18,
        question: "Who among the following was the Prime Minister of Britain when the 'Communal Award' was announced?",
        options: [
            "Winston Churchill",
            "Clement Atlee",
            "Ramsay MacDonald",
            "Stanley Baldwin"
        ],
        correctAnswer: 2,
        explanation: "Ramsay MacDonald announced the Communal Award in August 1932.",
        level: "Easy"
    },
    {
        id: 19,
        question: "The 'Satyendra Prasad Sinha' appointment as Law Member was a result of:",
        options: [
            "1861 Act",
            "1892 Act",
            "1909 Act",
            "1919 Act"
        ],
        correctAnswer: 2,
        explanation: "Satyendra Prasad Sinha was the first Indian to join the Viceroy's Executive Council as a Law Member under the Indian Councils Act, 1909.",
        level: "Easy"
    },
    {
        id: 20,
        question: "Which Act provided for the establishment of a 'Joint Public Service Commission' for two or more provinces?",
        options: [
            "Act of 1919",
            "Act of 1935",
            "Act of 1909",
            "Act of 1858"
        ],
        correctAnswer: 1,
        explanation: "The Government of India Act, 1935 provided for a Federal Public Service Commission, Provincial Public Service Commissions, and Joint Public Service Commissions.",
        level: "Moderate"
    },
    {
        id: 21,
        question: "The 'High Commissioner for India' in London was to perform functions previously performed by:",
        options: [
            "The Crown",
            "The Secretary of State for India",
            "The Viceroy",
            "The Court of Directors"
        ],
        correctAnswer: 1,
        explanation: "The Act of 1919 created the office of High Commissioner for India and transferred some functions of the Secretary of State for India to him.",
        level: "Easy"
    },
    {
        id: 22,
        question: "In the 1935 Act, the power to appoint the Governor-General and Governors was vested in:",
        options: [
            "The British Parliament",
            "The Crown",
            "The Secretary of State",
            "The Prime Minister of Britain"
        ],
        correctAnswer: 1,
        explanation: "Under the 1935 Act, appointments were made by the Crown.",
        level: "Moderate"
    },
    {
        id: 23,
        question: "Which Act introduced the principle that the 'Legislative Council' should be treated as a distinct body with distinct functions?",
        options: [
            "Charter Act of 1833",
            "Charter Act of 1853",
            "Indian Councils Act of 1861",
            "Indian Councils Act of 1892"
        ],
        correctAnswer: 1,
        explanation: "The Charter Act of 1853 separated, for the first time, the legislative and executive functions of the Governor-General’s council, creating a distinct Legislative Council (Indian Central Legislative Council).",
        level: "Moderate"
    },
    {
        id: 24,
        question: "The 'Dyarchy' at the Centre was proposed by the 1935 Act. Which subjects were to be 'Reserved' for the Governor-General?",
        options: [
            "Defence and Foreign Affairs",
            "Education and Health",
            "Police and Finance",
            "Railways and Post"
        ],
        correctAnswer: 0,
        explanation: "Reserved subjects included Defence, External Affairs, Tribal Areas, and Ecclesiastical Affairs.",
        level: "Moderate"
    },
    {
        id: 25,
        question: "Which Act authorized the Company to recruit 'covenanted' civil servants?",
        options: [
            "Regulating Act 1773",
            "Pitt’s India Act 1784",
            "Charter Act 1793",
            "Charter Act 1833"
        ],
        correctAnswer: 2,
        explanation: "The Charter Act of 1793 gave statutory recognition to the Covenanted Civil Service.",
        level: "Tough"
    },

    // SECTION 2: MAKING OF THE CONSTITUTION (CHAPTER 2)
    {
        id: 26,
        question: "Which of the following Princely States’ representatives did NOT join the Constituent Assembly initially but joined later?\n\n1. Baroda\n2. Bikaner\n3. Hyderabad\n4. Patiala\n\nSelect the correct code:",
        options: [
            "1, 2, and 4",
            "3 only",
            "1 and 2 only",
            "All joined initially"
        ],
        correctAnswer: 0,
        explanation: "Representatives of Baroda, Bikaner, Jaipur, Patiala, Rewa, and Udaipur joined by April 1947. Hyderabad representatives never joined.",
        level: "Tough"
    },
    {
        id: 27,
        question: "On which date did the Constituent Assembly act as a Legislative Body for the first time?",
        options: [
            "December 9, 1946",
            "August 15, 1947",
            "November 17, 1947",
            "January 26, 1950"
        ],
        correctAnswer: 2,
        explanation: "The Constituent Assembly met as a legislative body for the first time on November 17, 1947, chaired by G.V. Mavalankar.",
        level: "Tough"
    },
    {
        id: 28,
        question: "Who was the Secretary of the Constituent Assembly?",
        options: [
            "H.V.R. Iyengar",
            "S.N. Mukherjee",
            "Prem Behari Narain Raizada",
            "B.N. Rau"
        ],
        correctAnswer: 0,
        explanation: "H.V.R. Iyengar was the Secretary of the Constituent Assembly. S.N. Mukherjee was the Chief Draftsman.",
        level: "Moderate"
    },
    {
        id: 29,
        question: "Match the following Minor Committees with their Chairmen:\n\nList-I\nA. House Committee\nB. Order of Business Committee\nC. Ad-hoc Committee on National Flag\nD. Credentials Committee\n\nList-II\n1. Dr. K.M. Munshi\n2. B. Pattabhi Sitaramayya\n3. Alladi Krishnaswamy Ayyar\n4. Dr. Rajendra Prasad",
        options: [
            "2-1-4-3",
            "1-2-3-4",
            "2-1-3-4",
            "4-3-2-1"
        ],
        correctAnswer: 0,
        explanation: "House Committee - Pattabhi Sitaramayya; Order of Business - K.M. Munshi; Flag - Rajendra Prasad; Credentials - Alladi Krishnaswamy Ayyar.",
        level: "Moderate"
    },
    {
        id: 30,
        question: "The 'Elephant' was adopted as the symbol (seal) of the Constituent Assembly. Who was the Chief Draftsman of the Constitution?",
        options: [
            "S.N. Mukherjee",
            "L.N. Kiran",
            "Prem Behari Narain Raizada",
            "Nand Lal Bose"
        ],
        correctAnswer: 0,
        explanation: "S.N. Mukherjee was the Chief Draftsman of the Constitution.",
        level: "Easy"
    },
    {
        id: 31,
        question: "The calligraphy of the Hindi version of the original Constitution was done by:",
        options: [
            "Vasant Krishan Vaidya",
            "Prem Behari Narain Raizada",
            "Nand Lal Bose",
            "Beohar Rammanohar Sinha"
        ],
        correctAnswer: 0,
        explanation: "Vasant Krishan Vaidya did the calligraphy of the Hindi version. Prem Behari Narain Raizada did the English version.",
        level: "Moderate"
    },
    {
        id: 32,
        question: "How many seats were won by the 'Unionist Party' in the Constituent Assembly elections of 1946?",
        options: [
            "1",
            "3",
            "7",
            "0"
        ],
        correctAnswer: 0,
        explanation: "The Unionist Party won 1 seat.",
        level: "Tough"
    },
    {
        id: 33,
        question: "Which of the following women was NOT a member of the Constituent Assembly?",
        options: [
            "Hansa Mehta",
            "Sarojini Naidu",
            "Vijaya Lakshmi Pandit",
            "Aruna Asaf Ali"
        ],
        correctAnswer: 3,
        explanation: "Aruna Asaf Ali was NOT a member. Hansa Mehta, Sarojini Naidu, and Vijaya Lakshmi Pandit were members.",
        level: "Moderate"
    },
    {
        id: 34,
        question: "The resolution for the 'National Flag' was adopted on July 22, 1947. Who moved this resolution?",
        options: [
            "J.B. Kripalani",
            "Jawaharlal Nehru",
            "Sardar Patel",
            "Dr. Rajendra Prasad"
        ],
        correctAnswer: 1,
        explanation: "Jawaharlal Nehru moved the resolution for the National Flag.",
        level: "Easy"
    },
    {
        id: 35,
        question: "The 'Advisory Committee on Fundamental Rights' had 5 sub-committees. Who chaired the 'North-East Frontier Tribal Areas and Assam Excluded & Partially Excluded Areas Sub-Committee'?",
        options: [
            "Gopinath Bardoloi",
            "A.V. Thakkar",
            "J.B. Kripalani",
            "H.C. Mukherjee"
        ],
        correctAnswer: 0,
        explanation: "Gopinath Bardoloi chaired this sub-committee. A.V. Thakkar chaired the Excluded and Partially Excluded Areas (other than Assam) sub-committee.",
        level: "Tough"
    },
    {
        id: 36,
        question: "The total expenditure incurred on making the Constitution was approximately:",
        options: [
            "40 Lakhs",
            "64 Lakhs",
            "1 Crore",
            "26 Lakhs"
        ],
        correctAnswer: 1,
        explanation: "The total expenditure was approximately 64 Lakhs.",
        level: "Easy"
    },
    {
        id: 37,
        question: "Which state had the maximum membership in the Constituent Assembly?",
        options: [
            "Madras",
            "United Provinces",
            "Bihar",
            "Bombay"
        ],
        correctAnswer: 1,
        explanation: "United Provinces had the maximum membership (55), followed by Madras (49) and Bihar (36).",
        level: "Moderate"
    },
    {
        id: 38,
        question: "Who among the following was the only Congress member in the Drafting Committee (originally)?",
        options: [
            "K.M. Munshi",
            "T.T. Krishnamachari",
            "N. Madhava Rau",
            "Syed Mohammad Saadullah"
        ],
        correctAnswer: 0,
        explanation: "K.M. Munshi was the only 'Congress member' in the specific sense that others were independents or from other parties (though they were elected on Congress support). T.T. Krishnamachari joined later.",
        level: "Moderate"
    },
    {
        id: 39,
        question: "The Constitution was 'Adopted' on Nov 26, 1949. How many members were actually present and signed the Constitution on that day?",
        options: [
            "299",
            "284",
            "208",
            "211"
        ],
        correctAnswer: 1,
        explanation: "284 members were present and signed the Constitution.",
        level: "Easy"
    },
    {
        id: 40,
        question: "Which Act gave the Constituent Assembly the power to legislate for the Dominion of India?",
        options: [
            "Cabinet Mission Plan",
            "Indian Independence Act, 1947",
            "Government of India Act, 1935",
            "The Objectives Resolution"
        ],
        correctAnswer: 1,
        explanation: "The Indian Independence Act, 1947 made the Constituent Assembly a sovereign body and the Dominion Legislature.",
        level: "Easy"
    },
    {
        id: 41,
        question: "Who was the Chairman of the 'Press Gallery Committee' of the Constituent Assembly?",
        options: [
            "Usha Nath Sen",
            "Durga Das",
            "Devadas Gandhi",
            "Pothan Joseph"
        ],
        correctAnswer: 0,
        explanation: "Usha Nath Sen was the Chairman of the Press Gallery Committee.",
        level: "Tough"
    },
    {
        id: 42,
        question: "Which date was chosen for the 'commencement' of the Constitution to commemorate the Purna Swaraj day?",
        options: [
            "November 26",
            "August 15",
            "January 26",
            "January 30"
        ],
        correctAnswer: 2,
        explanation: "January 26 was chosen to commemorate the Purna Swaraj declaration of 1930.",
        level: "Easy"
    },
    {
        id: 43,
        question: "The 'Draft Constitution' was published in February 1948. How much time was given to the people of India to discuss and suggest amendments?",
        options: [
            "3 months",
            "6 months",
            "8 months",
            "1 year"
        ],
        correctAnswer: 2,
        explanation: "8 months were given to the people of India to discuss the draft and suggest amendments.",
        level: "Moderate"
    },
    {
        id: 44,
        question: "Who described the Drafting Committee as a \"Drifting Committee\" due to the delay?",
        options: [
            "Naziruddin Ahmed",
            "H.V. Kamath",
            "K.T. Shah",
            "Granville Austin"
        ],
        correctAnswer: 0,
        explanation: "Naziruddin Ahmed coined the term 'Drifting Committee'.",
        level: "Easy"
    },
    {
        id: 45,
        question: "The 'States Committee' (Committee for Negotiating with States) was chaired by:",
        options: [
            "Sardar Patel",
            "Jawaharlal Nehru",
            "Dr. Rajendra Prasad",
            "Pattabhi Sitaramayya"
        ],
        correctAnswer: 1,
        explanation: "The States Committee (for negotiating with states) was chaired by Jawaharlal Nehru. The Committee for Negotiating with States' Rulers was Patel's (Provincial Constitution Committee). This is a common confusion.",
        level: "Moderate"
    },
    {
        id: 46,
        question: "Under the Cabinet Mission Plan, the seats for 'General' category in British India were:",
        options: [
            "210",
            "292",
            "78",
            "4"
        ],
        correctAnswer: 0,
        explanation: "Total seats 296: General 210, Muslim 78, Sikh 4.",
        level: "Tough"
    },
    {
        id: 47,
        question: "The 'Finance and Staff Committee' was chaired by:",
        options: [
            "A.N. Sinha",
            "Dr. Rajendra Prasad",
            "Jawaharlal Nehru",
            "H.C. Mukherjee"
        ],
        correctAnswer: 1,
        explanation: "Dr. Rajendra Prasad chaired the Finance and Staff Committee.",
        level: "Moderate"
    },
    {
        id: 48,
        question: "Which provision was NOT enforced on November 26, 1949?",
        options: [
            "Citizenship",
            "Elections",
            "Fundamental Rights",
            "Provisional Parliament"
        ],
        correctAnswer: 2,
        explanation: "Fundamental Rights came into force on January 26, 1950. Citizenship, Elections, and Provisional Parliament provisions came into force on Nov 26, 1949.",
        level: "Easy"
    },
    {
        id: 49,
        question: "In the first meeting of the Assembly (Dec 9, 1946), how many women members were present?",
        options: [
            "9",
            "10",
            "12",
            "15"
        ],
        correctAnswer: 0,
        explanation: "9 women members were present in the first meeting.",
        level: "Moderate"
    },
    {
        id: 50,
        question: "Who was the constitutional advisor who prepared the 'first draft' of the constitution for the consideration of the Drafting Committee?",
        options: [
            "B.R. Ambedkar",
            "B.N. Rau",
            "S.N. Mukherjee",
            "K.M. Munshi"
        ],
        correctAnswer: 1,
        explanation: "B.N. Rau prepared the first draft.",
        level: "Easy"
    },

    // SECTION 3: SALIENT FEATURES (CHAPTER 3)
    {
        id: 51,
        question: "The 'Cooperatives' were given constitutional status by which Amendment?",
        options: [
            "73rd",
            "74th",
            "91st",
            "97th"
        ],
        correctAnswer: 3,
        explanation: "97th Amendment Act, 2011 gave constitutional status to cooperative societies.",
        level: "Easy"
    },
    {
        id: 52,
        question: "Which Schedule contains the 'Anti-Defection Law'?",
        options: [
            "9th",
            "10th",
            "11th",
            "12th"
        ],
        correctAnswer: 1,
        explanation: "The 10th Schedule (added by 52nd Amendment, 1985) contains the Anti-Defection Law.",
        level: "Easy"
    },
    {
        id: 53,
        question: "The 'Ninth Schedule' was added by:",
        options: [
            "42nd Amendment (1976)",
            "1st Amendment (1951)",
            "44th Amendment (1978)",
            "7th Amendment (1956)"
        ],
        correctAnswer: 1,
        explanation: "The 1st Amendment Act, 1951 added the Ninth Schedule.",
        level: "Easy"
    },
    {
        id: 54,
        question: "Which feature is borrowed from the 'Weimar Constitution of Germany'?",
        options: [
            "Emergency Provisions",
            "Suspension of Fundamental Rights during Emergency",
            "President's Rule",
            "Financial Emergency"
        ],
        correctAnswer: 1,
        explanation: "Suspension of Fundamental Rights during Emergency is borrowed from the Weimar Constitution. The Emergency Provisions themselves are from the Government of India Act, 1935.",
        level: "Moderate"
    },
    {
        id: 55,
        question: "The concept of 'Procedure Established by Law' is borrowed from:",
        options: [
            "USA",
            "UK",
            "Japan",
            "France"
        ],
        correctAnswer: 2,
        explanation: "Procedure Established by Law is borrowed from the Japanese Constitution.",
        level: "Easy"
    },
    {
        id: 56,
        question: "Which of the following is NOT a unitary feature of the Indian Constitution?",
        options: [
            "Single Constitution",
            "Flexibility of Constitution",
            "Integrated Judiciary",
            "Bicameralism"
        ],
        correctAnswer: 3,
        explanation: "Bicameralism (two houses) is a federal feature.",
        level: "Moderate"
    },
    {
        id: 57,
        question: "The 'Ideal of Justice' (Social, Economic, Political) in the Preamble is taken from:",
        options: [
            "French Revolution",
            "Russian Revolution",
            "American Revolution",
            "Irish Revolution"
        ],
        correctAnswer: 1,
        explanation: "The Ideal of Justice is taken from the Russian Revolution (1917).",
        level: "Easy"
    },
    {
        id: 58,
        question: "Match Source with Feature:\n\nList-I\nA. Australia\nB. Canada\nC. Ireland\nD. UK\n\nList-II\n1. Advisory Jurisdiction of SC\n2. Joint Sitting of two houses\n3. Method of Election of President\n4. Prerogative Writs",
        options: [
            "2-1-3-4",
            "1-2-3-4",
            "2-3-1-4",
            "3-1-2-4"
        ],
        correctAnswer: 0,
        explanation: "Australia - Joint Sitting; Canada - Advisory Jurisdiction; Ireland - Method of Election of President; UK - Prerogative Writs.",
        level: "Moderate"
    },
    {
        id: 59,
        question: "Which Article was termed by Dr. Ambedkar as the \"dead letter\" of the Constitution?",
        options: [
            "Article 32",
            "Article 356",
            "Article 360",
            "Article 370"
        ],
        correctAnswer: 1,
        explanation: "Dr. Ambedkar hoped Article 356 (President's Rule) would remain a 'dead letter'.",
        level: "Easy"
    },
    {
        id: 60,
        question: "The 'Three-Tier Government' became a constitutional feature in:",
        options: [
            "1950",
            "1959",
            "1992",
            "1976"
        ],
        correctAnswer: 2,
        explanation: "The 73rd and 74th Amendments (1992) gave constitutional status to the three-tier government.",
        level: "Easy"
    },
    {
        id: 61,
        question: "Which part of the Constitution deals with 'Official Language'?",
        options: [
            "Part XV",
            "Part XVI",
            "Part XVII",
            "Part XVIII"
        ],
        correctAnswer: 2,
        explanation: "Part XVII (Articles 343-351) deals with Official Language.",
        level: "Moderate"
    },
    {
        id: 62,
        question: "The 'Cabinet System' is a feature borrowed from:",
        options: [
            "USA",
            "British Constitution",
            "Canadian Constitution",
            "Irish Constitution"
        ],
        correctAnswer: 1,
        explanation: "The Cabinet System is borrowed from the British Constitution.",
        level: "Easy"
    },
    {
        id: 63,
        question: "Consider the following regarding the 42nd Amendment Act (1976):\n\n1. It is called the 'Mini-Constitution'.\n2. It added Part IV-A (Fundamental Duties).\n3. It added Part IX-A (Municipalities).\n\nWhich is/are correct?",
        options: [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 0,
        explanation: "Part IX-A (Municipalities) was added by the 74th Amendment Act, not the 42nd.",
        level: "Moderate"
    },
    {
        id: 64,
        question: "Which Schedule deals with the administration of Tribal Areas in Assam, Meghalaya, Tripura, and Mizoram?",
        options: [
            "5th Schedule",
            "6th Schedule",
            "7th Schedule",
            "8th Schedule"
        ],
        correctAnswer: 1,
        explanation: "The 6th Schedule deals with Tribal Areas in Assam, Meghalaya, Tripura, and Mizoram.",
        level: "Easy"
    },
    {
        id: 65,
        question: "The term 'Cabinet' is mentioned in which Article of the Constitution?",
        options: [
            "Article 74",
            "Article 75",
            "Article 352",
            "Not mentioned originally"
        ],
        correctAnswer: 2,
        explanation: "The term 'Cabinet' was added in Article 352 by the 44th Amendment Act, 1978. It was not in the original Constitution.",
        level: "Tough"
    },
    {
        id: 66,
        question: "Which feature is NOT borrowed from the US Constitution?",
        options: [
            "Impeachment of President",
            "Removal of SC/HC Judges",
            "Judicial Review",
            "Appointment of Governor"
        ],
        correctAnswer: 3,
        explanation: "Appointment of Governor by the Centre is borrowed from the Canadian Constitution.",
        level: "Easy"
    },
    {
        id: 67,
        question: "The 'Eighth Schedule' originally had how many languages?",
        options: [
            "14",
            "18",
            "22",
            "12"
        ],
        correctAnswer: 0,
        explanation: "The Eighth Schedule originally had 14 languages. Currently, it has 22.",
        level: "Moderate"
    },
    {
        id: 68,
        question: "Which part deals with 'Trade, Commerce and Intercourse' within India?",
        options: [
            "Part XI",
            "Part XII",
            "Part XIII",
            "Part XIV"
        ],
        correctAnswer: 2,
        explanation: "Part XIII (Articles 301-307) deals with Trade, Commerce and Intercourse.",
        level: "Moderate"
    },
    {
        id: 69,
        question: "Who called the Indian Constitution \"Federal in form but Unitary in spirit\"?",
        options: [
            "K.C. Wheare",
            "Morris Jones",
            "Granville Austin",
            "D.N. Banerjee"
        ],
        correctAnswer: 0,
        explanation: "K.C. Wheare described it as 'Quasi-Federal'.",
        level: "Moderate"
    },
    {
        id: 70,
        question: "Which Amendment lowered the voting age from 21 to 18?",
        options: [
            "42nd",
            "44th",
            "61st",
            "69th"
        ],
        correctAnswer: 2,
        explanation: "The 61st Amendment Act, 1988 lowered the voting age.",
        level: "Easy"
    },
    {
        id: 71,
        question: "The 'Concurrent List' is borrowed from:",
        options: [
            "Canada",
            "Australia",
            "USA",
            "USSR"
        ],
        correctAnswer: 1,
        explanation: "Concurrent List is borrowed from the Australian Constitution.",
        level: "Easy"
    },
    {
        id: 72,
        question: "'Freedom of Trade' is borrowed from:",
        options: [
            "UK",
            "USA",
            "Australia",
            "Ireland"
        ],
        correctAnswer: 2,
        explanation: "Freedom of Trade and Commerce is borrowed from the Australian Constitution.",
        level: "Easy"
    },
    {
        id: 73,
        question: "Which feature is borrowed from the South African Constitution?",
        options: [
            "Procedure for Amendment of Constitution",
            "Joint Sitting",
            "Nomination of Rajya Sabha members",
            "Directive Principles"
        ],
        correctAnswer: 0,
        explanation: "Procedure for Amendment and Election of Rajya Sabha members are borrowed from South Africa.",
        level: "Moderate"
    },
    {
        id: 74,
        question: "Who described the Indian Constitution as \"Cooperative Federalism\"?",
        options: [
            "K.C. Wheare",
            "Ivor Jennings",
            "Granville Austin",
            "Alexandrowicz"
        ],
        correctAnswer: 2,
        explanation: "Granville Austin called it 'Cooperative Federalism'.",
        level: "Moderate"
    },
    {
        id: 75,
        question: "Which Schedule contains the 'Union List, State List, and Concurrent List'?",
        options: [
            "4th",
            "6th",
            "7th",
            "9th"
        ],
        correctAnswer: 2,
        explanation: "The 7th Schedule contains the three lists.",
        level: "Easy"
    },

    // SECTION 4: PREAMBLE (CHAPTER 4)
    {
        id: 76,
        question: "The 'Preamble' was modified by which Amendment?",
        options: [
            "24th",
            "42nd",
            "44th",
            "It has never been amended"
        ],
        correctAnswer: 1,
        explanation: "The Preamble was amended by the 42nd Amendment Act, 1976.",
        level: "Easy"
    },
    {
        id: 77,
        question: "In which case did the Supreme Court declare that the \"Preamble is an integral part of the Constitution\"?",
        options: [
            "Berubari Union case (1960)",
            "Kesavananda Bharati case (1973)",
            "LIC of India case (1995)",
            "Both B and C"
        ],
        correctAnswer: 3,
        explanation: "The SC declared it an integral part in Kesavananda Bharati case (1973) and reaffirmed it in the LIC of India case (1995).",
        level: "Moderate"
    },
    {
        id: 78,
        question: "The words \"Unity and Integrity of the Nation\" replaced \"Unity of the Nation\" in:",
        options: [
            "1950",
            "1976",
            "1978",
            "1992"
        ],
        correctAnswer: 1,
        explanation: "Added by the 42nd Amendment Act, 1976.",
        level: "Easy"
    },
    {
        id: 79,
        question: "Which word is NOT explicitly mentioned in the Preamble?",
        options: [
            "Liberty",
            "Equality",
            "Justice",
            "Federal"
        ],
        correctAnswer: 3,
        explanation: "The word 'Federal' is not mentioned in the Preamble (or anywhere in the Constitution).",
        level: "Easy"
    },
    {
        id: 80,
        question: "The date of adoption of the Constitution mentioned in the Preamble is:",
        options: [
            "26 January 1950",
            "26 November 1949",
            "15 August 1947",
            "9 December 1946"
        ],
        correctAnswer: 1,
        explanation: "26 November 1949 is mentioned as the date of adoption.",
        level: "Easy"
    },
    {
        id: 81,
        question: "Who called the Preamble the \"Identity Card of the Constitution\"?",
        options: [
            "K.M. Munshi",
            "N.A. Palkhivala",
            "Ernest Barker",
            "Thakurdas Bhargava"
        ],
        correctAnswer: 1,
        explanation: "N.A. Palkhivala called the Preamble the 'Identity Card of the Constitution'.",
        level: "Moderate"
    },
    {
        id: 82,
        question: "The term \"Republic\" in the Preamble implies:\n\n1. Vesting of political sovereignty in the people.\n2. Absence of any privileged class.\n3. Head of state is elected.\n\nSelect the correct code:",
        options: [
            "3 only",
            "1 and 3 only",
            "2 and 3 only",
            "1, 2, and 3"
        ],
        correctAnswer: 3,
        explanation: "Republic implies: Head of State is elected (not hereditary), political sovereignty is in the people, and absence of privileged classes.",
        level: "Moderate"
    },
    {
        id: 83,
        question: "\"Economic Justice\" as one of the objectives of the Constitution has been provided in:",
        options: [
            "The Preamble and Fundamental Rights",
            "The Preamble and Directive Principles",
            "The Fundamental Rights and Directive Principles",
            "The Preamble only"
        ],
        correctAnswer: 1,
        explanation: "Economic Justice is mentioned in the Preamble and provided through Directive Principles of State Policy.",
        level: "Moderate"
    },
    {
        id: 84,
        question: "Who described the Preamble as the \"Horoscope of our Sovereign Democratic Republic\"?",
        options: [
            "K.M. Munshi",
            "Jawaharlal Nehru",
            "B.R. Ambedkar",
            "Alladi Krishnaswamy Ayyar"
        ],
        correctAnswer: 0,
        explanation: "K.M. Munshi described the Preamble as the 'Horoscope of our Sovereign Democratic Republic'.",
        level: "Easy"
    },
    {
        id: 85,
        question: "The text of the Preamble secures to all citizens \"Liberty of...\"",
        options: [
            "Thought, Expression, Belief, Faith, and Worship",
            "Thought, Expression, Belief, Faith, and Opportunity",
            "Thought, Speech, Belief, Faith, and Worship",
            "Expression, Belief, Faith, Worship, and Status"
        ],
        correctAnswer: 0,
        explanation: "Liberty of Thought, Expression, Belief, Faith, and Worship.",
        level: "Easy"
    },
    {
        id: 86,
        question: "In the Berubari Union case (1960), the Supreme Court opined that:",
        options: [
            "Preamble is part of the Constitution",
            "Preamble is not part of the Constitution",
            "Preamble can be amended",
            "Preamble is the source of power"
        ],
        correctAnswer: 1,
        explanation: "In the Berubari Union case, the SC opined that the Preamble is NOT a part of the Constitution. This was reversed in Kesavananda Bharati.",
        level: "Moderate"
    },
    {
        id: 87,
        question: "The word \"Socialist\" in the Preamble refers to:",
        options: [
            "Marxian Socialism",
            "Gandhian Socialism",
            "Democratic Socialism",
            "Communist Socialism"
        ],
        correctAnswer: 2,
        explanation: "Indian Socialism is 'Democratic Socialism', holding faith in a mixed economy. It is a blend of Marxian and Gandhian socialism, leaning heavily towards Gandhian socialism.",
        level: "Moderate"
    },
    {
        id: 88,
        question: "Which liberty is NOT guaranteed by the Preamble?",
        options: [
            "Liberty of Thought",
            "Liberty of Worship",
            "Liberty of Economic Freedom",
            "Liberty of Belief"
        ],
        correctAnswer: 2,
        explanation: "The Preamble guarantees Liberty of Thought, Expression, Belief, Faith, and Worship. 'Economic Freedom' is not mentioned (Economic Justice is mentioned).",
        level: "Moderate"
    },
    {
        id: 89,
        question: "Who called the Preamble the \"Key-note\" to the Constitution?",
        options: [
            "Ernest Barker",
            "Hidayatullah",
            "Granville Austin",
            "K.C. Wheare"
        ],
        correctAnswer: 0,
        explanation: "Ernest Barker called the Preamble the 'Key-note' to the Constitution.",
        level: "Easy"
    },
    {
        id: 90,
        question: "The phrase \"We, the People of India\" implies:",
        options: [
            "British Sovereignty",
            "Popular Sovereignty",
            "Legal Sovereignty",
            "Real Sovereignty"
        ],
        correctAnswer: 1,
        explanation: "It implies Popular Sovereignty (sovereignty lies with the people).",
        level: "Easy"
    },
    {
        id: 91,
        question: "Which case held that \"Secularism\" is a 'basic feature' of the Constitution?",
        options: [
            "Golaknath case",
            "Minerva Mills case",
            "S.R. Bommai case",
            "Indira Gandhi case"
        ],
        correctAnswer: 2,
        explanation: "In the S.R. Bommai case (1994), the Supreme Court held that Secularism is a basic feature of the Constitution.",
        level: "Easy"
    },
    {
        id: 92,
        question: "The Preamble states that the Constitution derives its authority from:",
        options: [
            "The Constituent Assembly",
            "The People of India",
            "The Indian Independence Act",
            "The Supreme Court"
        ],
        correctAnswer: 1,
        explanation: "The Constitution derives its authority from the People of India.",
        level: "Easy"
    },
    {
        id: 93,
        question: "The ideal of \"Fraternity\" in the Preamble is assured by:",
        options: [
            "Fundamental Rights",
            "Single Citizenship",
            "Directive Principles",
            "Fundamental Duties"
        ],
        correctAnswer: 1,
        explanation: "The Constitution promotes fraternity by the system of single citizenship. Fundamental Duties also promote it, but Single Citizenship is the primary structural mechanism.",
        level: "Moderate"
    },
    {
        id: 94,
        question: "\"Political Democracy cannot last unless there lies at the base of it Social Democracy.\" Who said this regarding the principles in the Preamble/Constitution?",
        options: [
            "Jawaharlal Nehru",
            "B.R. Ambedkar",
            "Sardar Patel",
            "Rajendra Prasad"
        ],
        correctAnswer: 1,
        explanation: "Dr. B.R. Ambedkar said this in his concluding speech in the Constituent Assembly.",
        level: "Moderate"
    },
    {
        id: 95,
        question: "The order of words in the Preamble is:",
        options: [
            "Sovereign, Secular, Socialist, Democratic, Republic",
            "Sovereign, Socialist, Democratic, Secular, Republic",
            "Sovereign, Socialist, Secular, Democratic, Republic",
            "Secular, Sovereign, Socialist, Democratic, Republic"
        ],
        correctAnswer: 2,
        explanation: "Sovereign, Socialist, Secular, Democratic, Republic (SSSDR).",
        level: "Easy"
    },
    {
        id: 96,
        question: "The Preamble is:",
        options: [
            "Enforceable in a court of law",
            "Not enforceable in a court of law",
            "A source of power to the legislature",
            "A prohibition upon the powers of legislature"
        ],
        correctAnswer: 1,
        explanation: "The Preamble is non-justiciable (not enforceable in courts). It is neither a source of power to legislature nor a prohibition.",
        level: "Easy"
    },
    {
        id: 97,
        question: "The concept of \"Distributive Justice\" consists of:",
        options: [
            "Social Justice only",
            "Economic Justice only",
            "Combination of Social and Economic Justice",
            "Political Justice"
        ],
        correctAnswer: 2,
        explanation: "Distributive Justice denotes the combination of Social Justice and Economic Justice.",
        level: "Moderate"
    },
    {
        id: 98,
        question: "The resolution for the Preamble (Objectives Resolution) was adopted by the Assembly on:",
        options: [
            "Dec 13, 1946",
            "Jan 22, 1947",
            "Aug 15, 1947",
            "Jan 26, 1950"
        ],
        correctAnswer: 1,
        explanation: "The Objectives Resolution was moved on Dec 13, 1946, and adopted on Jan 22, 1947.",
        level: "Moderate"
    },
    {
        id: 99,
        question: "Who said the Preamble is the \"Soul of the Constitution\"?",
        options: [
            "Thakurdas Bhargava",
            "B.R. Ambedkar",
            "Ernest Barker",
            "M. Hidayatullah"
        ],
        correctAnswer: 0,
        explanation: "Thakurdas Bhargava called it the 'Soul of the Constitution'.",
        level: "Moderate"
    },
    {
        id: 100,
        question: "Till date, the Preamble has been amended how many times?",
        options: [
            "Once",
            "Twice",
            "Thrice",
            "Never"
        ],
        correctAnswer: 0,
        explanation: "Only once, by the 42nd Amendment Act, 1976.",
        level: "Easy"
    }
];
