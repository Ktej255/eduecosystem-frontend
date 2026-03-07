import { ChapterLevelData } from '../level-types';

const LEVEL_1_QUESTIONS = [
    {
        "id": "ch73-l1-q1",
        "question": "The 97th Constitutional Amendment Act of 2011 deals with:",
        "options": [
            "Right to Education",
            "Co-operative Societies",
            "GST Council",
            "Panchayati Raj"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 97th Amendment gave constitutional status and protection to co-operative societies by amending Articles 19, 43B, and inserting Part IXB."
    },
    {
        "id": "ch73-l1-q2",
        "question": "Which Part of the Constitution was inserted by the 97th Amendment to deal with co-operative societies?",
        "options": [
            "Part IXA",
            "Part IXB",
            "Part IXC",
            "Part X"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Part IXB (Articles 243ZH to 243ZT) was inserted by the 97th Amendment Act."
    },
    {
        "id": "ch73-l1-q3",
        "question": "Article 43B directs the State to promote:",
        "options": [
            "Small-scale industries",
            "Co-operative societies",
            "Consumer protection",
            "Rural employment"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 43B (added by the 97th Amendment) directs the State to promote voluntary formation, autonomous functioning, democratic control, and professional management of co-operative societies."
    },
    {
        "id": "ch73-l1-q4",
        "question": "Which of the following was added to Article 19(1)(c) by the 97th Amendment?",
        "options": [
            "Right to form associations or unions or co-operative societies",
            "Right to free speech in co-operatives",
            "Right to form political parties",
            "Right to advisory bodies"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The 97th Amendment added 'or co-operative societies' to Article 19(1)(c), making it a fundamental right to form co-operative societies."
    },
    {
        "id": "ch73-l1-q5",
        "question": "Under the 97th Amendment, the maximum number of directors in a co-operative society shall not exceed:",
        "options": [
            "15",
            "21",
            "25",
            "31"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Part IXB specifies that the board shall consist of such number of directors as may be provided by the State Legislature, not exceeding 21."
    },
    {
        "id": "ch73-l1-q6",
        "question": "The term of office of elected members of the board of a co-operative society shall be:",
        "options": [
            "3 years",
            "5 years",
            "6 years",
            "No fixed term"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The term of office of elected members of the board and its office bearers shall be five years from the date of election."
    },
    {
        "id": "ch73-l1-q7",
        "question": "The maximum term for which the board of a co-operative society can be kept under supersession or suspension is:",
        "options": [
            "3 months",
            "6 months",
            "1 year",
            "2 years"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The board shall not be superseded or suspended for a period exceeding six months."
    },
    {
        "id": "ch73-l1-q8",
        "question": "Which Article of the Constitution defines co-operative society for Part IXB?",
        "options": [
            "Article 243ZH",
            "Article 243ZI",
            "Article 243ZJ",
            "Article 243ZK"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 243ZH contains the definitions relevant to Part IXB on co-operative societies."
    },
    {
        "id": "ch73-l1-q9",
        "question": "The 97th Amendment mandates that the election of a board of a co-operative society shall be conducted by:",
        "options": [
            "The State Election Commission",
            "A designated authority or officer as provided by the State Legislature",
            "The Election Commission of India",
            "The Registrar of Co-operative Societies"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The State Legislature provides for the authority to conduct elections of co-operative societies."
    },
    {
        "id": "ch73-l1-q10",
        "question": "Article 43B is placed in which Part of the Constitution?",
        "options": [
            "Part III (Fundamental Rights)",
            "Part IV (Directive Principles of State Policy)",
            "Part IXB (Co-operative Societies)",
            "Part XIV (Services)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 43B is a Directive Principle of State Policy (Part IV)."
    },
    {
        "id": "ch73-l1-q11",
        "question": "Which of the following is NOT a feature of the 97th Amendment?",
        "options": [
            "Right to form co-operative societies as a fundamental right",
            "Reservation of seats for SC/ST in co-operative boards",
            "Mandatory audit of co-operative societies",
            "Mandatory elections every 5 years"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 97th Amendment does not provide for reservation of seats for SC/ST in co-operative society boards."
    },
    {
        "id": "ch73-l1-q12",
        "question": "Under Part IXB, the accounts of every co-operative society shall be audited within how many months of the close of the financial year?",
        "options": [
            "3 months",
            "6 months",
            "9 months",
            "12 months"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The audit of accounts of every co-operative society shall be completed within six months of the close of the financial year."
    },
    {
        "id": "ch73-l1-q13",
        "question": "The 97th Amendment was enacted based on the recommendation of which committee?",
        "options": [
            "Balwant Rai Mehta Committee",
            "Ashok Mehta Committee",
            "Vaidyanathan Committee",
            "Sarkaria Commission"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Vaidyanathan Committee recommended constitutional status for co-operative societies."
    },
    {
        "id": "ch73-l1-q14",
        "question": "Which of the following co-operative sectors is NOT covered by the 97th Amendment?",
        "options": [
            "State co-operative societies",
            "Multi-State co-operative societies",
            "District co-operative banks",
            "Credit co-operative societies"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Multi-State co-operative societies are governed by Union law and not by the state-level provisions of Part IXB."
    },
    {
        "id": "ch73-l1-q15",
        "question": "The 97th Amendment mandates that the annual general body meeting of every co-operative society shall be convened within a period of:",
        "options": [
            "3 months from the close of the financial year",
            "6 months from the close of the financial year",
            "1 year",
            "No time limit specified"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The annual general body meeting must be convened within six months of the close of the financial year."
    },
    {
        "id": "ch73-l1-q16",
        "question": "In 2021, the Supreme Court struck down certain provisions of the 97th Amendment. Which part was invalidated for multi-state co-operative societies?",
        "options": [
            "Part IXB entirely",
            "Only Article 43B",
            "Provisions relating to multi-state co-operative societies as they needed state ratification",
            "Only election provisions"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The SC in Union of India v. Rajendra N. Shah held that provisions affecting multi-state co-operatives needed ratification by half the states under Article 368(2)."
    },
    {
        "id": "ch73-l1-q17",
        "question": "Co-operative societies in India are primarily regulated under which subject list?",
        "options": [
            "Union List",
            "State List",
            "Concurrent List",
            "Residuary powers"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Co-operative societies fall under Entry 32 of the State List (List II) of the Seventh Schedule."
    },
    {
        "id": "ch73-l1-q18",
        "question": "The number of co-opted directors on the board of a co-operative society should not exceed:",
        "options": [
            "One-fourth of the total strength",
            "One-third of the total strength",
            "Two members",
            "As determined by the Registrar"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Part IXB provides that co-opted members shall not exceed two, in addition to the elected members."
    },
    {
        "id": "ch73-l1-q19",
        "question": "Which Article provides for the incorporation, regulation, and winding up of multi-state co-operative societies?",
        "options": [
            "Article 243ZH",
            "Article 243ZT",
            "Entry 44 of Union List",
            "Article 44"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Entry 44 of the Union List empowers the Parliament to deal with the incorporation, regulation, and winding up of multi-state co-operative societies."
    },
    {
        "id": "ch73-l1-q20",
        "question": "The first co-operative society legislation in India was passed in which year?",
        "options": [
            "1890",
            "1904",
            "1912",
            "1919"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Co-operative Credit Societies Act of 1904 was the first co-operative legislation in India."
    },
    {
        "id": "ch73-l1-q21",
        "question": "Which state is known for the most successful co-operative movement in India?",
        "options": [
            "Uttar Pradesh",
            "Maharashtra",
            "Gujarat",
            "Kerala"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Gujarat is renowned for its successful co-operative movement, especially in dairy (Amul) and agriculture."
    },
    {
        "id": "ch73-l1-q22",
        "question": "The Multi-State Co-operative Societies Act was passed in which year?",
        "options": [
            "1984",
            "2002",
            "2011",
            "2020"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Multi-State Co-operative Societies Act, 2002 governs co-operatives operating across state boundaries."
    },
    {
        "id": "ch73-l1-q23",
        "question": "In 2021, a separate Ministry of Co-operation was created by the Union Government. It was carved out of:",
        "options": [
            "Ministry of Finance",
            "Ministry of Agriculture and Farmers Welfare",
            "Ministry of Consumer Affairs",
            "Ministry of Rural Development"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Ministry of Co-operation was carved out of the Ministry of Agriculture and Farmers Welfare in July 2021."
    },
    {
        "id": "ch73-l1-q24",
        "question": "Under Part IXB, the right of information of members includes access to:",
        "options": [
            "Only the annual report",
            "Books of account, register of members, and minutes of meetings",
            "Only audited financial statements",
            "Only government inspection reports"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Members have the right to access books of account, register of members, and minutes of general body meetings."
    },
    {
        "id": "ch73-l1-q25",
        "question": "The 97th Amendment seeks to prevent the supersession of elected boards. A board can be superseded only by:",
        "options": [
            "The Governor directly",
            "An authority specified by the State Legislature after giving the board an opportunity of being heard",
            "The Registrar on his own discretion",
            "The District Collector"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Supersession requires following due process with the board being given a chance to be heard."
    },
    {
        "id": "ch73-l1-q26",
        "question": "Which of the following is a constitutional provision for co-operative societies after the 97th Amendment?",
        "options": [
            "Compulsory filing of income tax returns",
            "Mandatory elections within 6 months of expiry of the board's term",
            "Compulsory registration with SEBI",
            "Mandatory listing on stock exchanges"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Elections must be conducted before the expiry of the term of the existing board, and if the board is superseded, within 6 months of supersession."
    },
    {
        "id": "ch73-l1-q27",
        "question": "The National Co-operative Development Corporation (NCDC) was established under which Act?",
        "options": [
            "Co-operative Societies Act, 1912",
            "NCDC Act, 1963",
            "Multi-State Co-operative Societies Act, 2002",
            "97th Amendment Act, 2011"
        ],
        "correctAnswerIndex": 1,
        "explanation": "NCDC was established under the National Co-operative Development Corporation Act, 1963."
    },
    {
        "id": "ch73-l1-q28",
        "question": "NABARD plays an important role in the co-operative sector. It primarily functions as:",
        "options": [
            "A retail bank for farmers",
            "An apex development bank for rural and agricultural credit",
            "A registrar of co-operative societies",
            "A regulatory body for co-operatives"
        ],
        "correctAnswerIndex": 1,
        "explanation": "NABARD is the apex development bank providing credit and other facilities for rural and agricultural development, including co-operative banks."
    },
    {
        "id": "ch73-l1-q29",
        "question": "Which of the following is NOT a type of co-operative society in India?",
        "options": [
            "Consumer co-operative",
            "Producer co-operative",
            "Marketing co-operative",
            "Judicial co-operative"
        ],
        "correctAnswerIndex": 3,
        "explanation": "There is no concept of a judicial co-operative. Common types include consumer, producer, marketing, credit, and housing co-operatives."
    },
    {
        "id": "ch73-l1-q30",
        "question": "Amul is an example of which type of co-operative?",
        "options": [
            "Consumer co-operative",
            "Credit co-operative",
            "Dairy co-operative",
            "Housing co-operative"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Amul (Anand Milk Union Limited) is a dairy co-operative based in Gujarat."
    },
    {
        "id": "ch73-l1-q31",
        "question": "The 97th Amendment provides that the State Legislature shall make provisions for persons having experience in which field to be co-opted as members of the board?",
        "options": [
            "Politics",
            "Banking, management, co-operative field, or functional expertise",
            "Military service",
            "Media and journalism"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Part IXB allows co-option of persons having experience in banking, management, co-operative field or other specified fields."
    },
    {
        "id": "ch73-l1-q32",
        "question": "Which constitutional provision ensures the voluntary nature of co-operative societies?",
        "options": [
            "Article 14",
            "Article 19(1)(c)",
            "Article 21",
            "Article 32"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 19(1)(c) as amended guarantees the right to voluntarily form co-operative societies."
    },
    {
        "id": "ch73-l1-q33",
        "question": "Before the 97th Amendment, co-operative societies were governed primarily by:",
        "options": [
            "Constitutional provisions in Part III",
            "State Co-operative Societies Acts",
            "Central Co-operative Act",
            "Panchayati Raj Acts"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Before the 97th Amendment, co-operative societies were governed by respective State Co-operative Societies Acts."
    },
    {
        "id": "ch73-l1-q34",
        "question": "Who appoints the Registrar of Co-operative Societies in a State?",
        "options": [
            "The President",
            "The Governor/State Government",
            "The Supreme Court",
            "The Parliament"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Registrar of Co-operative Societies is appointed by the State Government."
    },
    {
        "id": "ch73-l1-q35",
        "question": "The 97th Amendment was challenged primarily on what ground?",
        "options": [
            "It violated basic structure",
            "It was not passed by the required majority",
            "It affected Entry 32 of the State List (co-operatives) without ratification by states for multi-state provisions",
            "It violated Article 14"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The amendment was challenged for not obtaining ratification from half the states as required for provisions affecting federal structure."
    },
    {
        "id": "ch73-l1-q36",
        "question": "The co-operative movement in India started during which period?",
        "options": [
            "Ancient India",
            "Mughal Period",
            "British Period",
            "Post-Independence"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The co-operative movement in India started during the British period with the Co-operative Credit Societies Act of 1904."
    },
    {
        "id": "ch73-l1-q37",
        "question": "Which Five Year Plan emphasized the role of co-operatives in agricultural credit?",
        "options": [
            "First",
            "Second",
            "Third",
            "Fourth"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Second Five Year Plan (1956-61) emphasized co-operatives as the principal medium for agricultural credit, marketing, and distribution."
    },
    {
        "id": "ch73-l1-q38",
        "question": "How many Articles are there in Part IXB of the Constitution?",
        "options": [
            "10",
            "13",
            "15",
            "18"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Part IXB contains 13 Articles, from Article 243ZH to Article 243ZT."
    },
    {
        "id": "ch73-l1-q39",
        "question": "Under Part IXB, the offences and penalties relating to co-operative societies are to be prescribed by:",
        "options": [
            "The Parliament",
            "The State Legislature",
            "The Registrar",
            "The Supreme Court"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The State Legislature has the power to make laws prescribing offences and penalties for co-operative societies."
    },
    {
        "id": "ch73-l1-q40",
        "question": "The 97th Amendment mandates that every co-operative society shall file returns within how many months?",
        "options": [
            "3 months",
            "6 months",
            "9 months",
            "12 months"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Returns must be filed within six months of the close of every financial year."
    },
    {
        "id": "ch73-l1-q41",
        "question": "Which of the following countries inspired the Indian co-operative movement?",
        "options": [
            "USA",
            "UK (Rochdale model)",
            "Japan",
            "Australia"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Rochdale Pioneers in England (1844) inspired the modern co-operative movement worldwide, including India."
    },
    {
        "id": "ch73-l1-q42",
        "question": "The 97th Amendment provides for professional management in co-operatives. What does this imply?",
        "options": [
            "Only MBA graduates can be directors",
            "The CEO/Manager should be appointed through a transparent process based on qualifications",
            "All employees must be IAS officers",
            "The government directly manages all co-operatives"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Professional management means appointing qualified professionals through a transparent process for efficient functioning."
    },
    {
        "id": "ch73-l1-q43",
        "question": "Which Article of Part IXB deals with the election of members of the board?",
        "options": [
            "Article 243ZI",
            "Article 243ZJ",
            "Article 243ZK",
            "Article 243ZL"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 243ZK deals with the election of members of the board and related provisions."
    },
    {
        "id": "ch73-l1-q44",
        "question": "Under the 97th Amendment, can a State government directly supersede the board of a co-operative society?",
        "options": [
            "Yes, without any conditions",
            "No, it requires following the procedure laid down in Article 243ZL",
            "Only during a national emergency",
            "Only with the President's approval"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 243ZL prescribes the conditions and procedure for supersession of boards."
    },
    {
        "id": "ch73-l1-q45",
        "question": "The co-operative sector in India contributes significantly to which of the following?",
        "options": [
            "Sugar production",
            "Fertilizer distribution",
            "Dairy production",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Co-operatives play a major role in sugar, fertilizer, dairy, and other agricultural sectors in India."
    },
    {
        "id": "ch73-l1-q46",
        "question": "The principle of 'one member, one vote' is a hallmark of:",
        "options": [
            "Corporate governance",
            "Parliamentary democracy",
            "Co-operative governance",
            "Military hierarchy"
        ],
        "correctAnswerIndex": 2,
        "explanation": "One member, one vote is a fundamental principle of democratic co-operative governance."
    },
    {
        "id": "ch73-l1-q47",
        "question": "Which institution is the apex body for agricultural co-operatives in India?",
        "options": [
            "NABARD",
            "IFFCO",
            "NAFED",
            "RBI"
        ],
        "correctAnswerIndex": 2,
        "explanation": "NAFED (National Agricultural Co-operative Marketing Federation) is the apex body of marketing co-operatives in India."
    },
    {
        "id": "ch73-l1-q48",
        "question": "IFFCO is a co-operative organization dealing with:",
        "options": [
            "Dairy products",
            "Fertilizers",
            "Housing",
            "Consumer goods"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IFFCO (Indian Farmers Fertiliser Co-operative Limited) is a fertilizer co-operative."
    },
    {
        "id": "ch73-l1-q49",
        "question": "The 97th Amendment ensures transparency by mandating:",
        "options": [
            "RTI applicability to all co-operatives",
            "Mandatory audit and disclosure of information to members",
            "Public listing of all co-operatives",
            "Media coverage of co-operative meetings"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Amendment provides for mandatory audit and the right of members to access information about the co-operative."
    },
    {
        "id": "ch73-l1-q50",
        "question": "Which Article of Part IXB provides for the audit of co-operative societies?",
        "options": [
            "Article 243ZM",
            "Article 243ZN",
            "Article 243ZO",
            "Article 243ZP"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 243ZM deals with the audit of accounts of co-operative societies."
    },
    {
        "id": "ch73-l1-q51",
        "question": "The right to form co-operative societies under Article 19(1)(c) can be restricted under Article 19(4) on grounds of:",
        "options": [
            "Public order and morality only",
            "Sovereignty and integrity of India, public order, or morality",
            "Economic necessity",
            "National emergency only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 19(4) allows reasonable restrictions on the right to form co-operatives on grounds of sovereignty and integrity of India, public order, or morality."
    },
    {
        "id": "ch73-l1-q52",
        "question": "Which of the following is an urban co-operative sector entity?",
        "options": [
            "Primary Agricultural Credit Society (PACS)",
            "Urban Co-operative Bank",
            "District Central Co-operative Bank",
            "State Co-operative Bank"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Urban Co-operative Banks (UCBs) are the primary urban co-operative sector entities, regulated by both the RBI and the Registrar."
    },
    {
        "id": "ch73-l1-q53",
        "question": "Primary Agricultural Credit Societies (PACS) operate at which level?",
        "options": [
            "National level",
            "State level",
            "District level",
            "Village level"
        ],
        "correctAnswerIndex": 3,
        "explanation": "PACS operate at the village/grassroots level providing credit to farmers."
    },
    {
        "id": "ch73-l1-q54",
        "question": "The three-tier structure of co-operative credit in India consists of:",
        "options": [
            "PACS, DCCBs, and State Co-operative Banks",
            "NABARD, RBI, and SBI",
            "Village, Block, and District levels",
            "National, State, and Local levels"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The three-tier structure consists of Primary Agricultural Credit Societies (village), District Central Co-operative Banks (district), and State Co-operative Banks (state)."
    },
    {
        "id": "ch73-l1-q55",
        "question": "Which committee recommended the revival of the short-term co-operative credit structure?",
        "options": [
            "Vaidyanathan Committee",
            "Narasimham Committee",
            "Kelkar Committee",
            "Chelliah Committee"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Vaidyanathan Committee (2004) recommended the revival of the short-term co-operative credit structure."
    },
    {
        "id": "ch73-l1-q56",
        "question": "The Multi-State Co-operative Societies (Amendment) Act was passed in which year?",
        "options": [
            "2002",
            "2011",
            "2023",
            "2019"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Multi-State Co-operative Societies (Amendment) Act, 2023 was passed to strengthen governance and transparency."
    },
    {
        "id": "ch73-l1-q57",
        "question": "Which of the following is a co-operative principle as per the International Co-operative Alliance?",
        "options": [
            "Profit maximization",
            "Voluntary and open membership",
            "Government control",
            "Limited liability"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Voluntary and open membership is one of the seven co-operative principles of the ICA."
    },
    {
        "id": "ch73-l1-q58",
        "question": "The 97th Amendment ensures that the board of a co-operative society shall have how many seats reserved for SC/ST members?",
        "options": [
            "None specifically mandated",
            "Two seats",
            "Proportional to population",
            "One seat"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The 97th Amendment does not mandate specific reservation for SC/ST on co-operative boards; it focuses on elections and governance."
    },
    {
        "id": "ch73-l1-q59",
        "question": "Under the 97th Amendment, a seat on the board of a co-operative society is reserved for:",
        "options": [
            "SC/ST",
            "OBC",
            "One seat for a member of the SC or ST and Two seats for women",
            "No reservations are mandated"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Part IXB provides for reservation of one seat for SC or ST and two seats for women on the board of every co-operative society."
    },
    {
        "id": "ch73-l1-q60",
        "question": "Which Article of Part IXB deals with the right of members to access information?",
        "options": [
            "Article 243ZN",
            "Article 243ZO",
            "Article 243ZP",
            "Article 243ZQ"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 243ZN provides for the right of members to get information regarding the co-operative society."
    },
    {
        "id": "ch73-l1-q61",
        "question": "Consider the following statements regarding the 97th Amendment:\\n1. It added Part IXB to the Constitution.\\n2. It made the right to form co-operative societies a fundamental right.\\n3. It was held fully valid by the Supreme Court in 2021.\\nWhich of the above are correct?",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is false: The SC struck down Part IXB insofar as it applied to multi-state co-operatives for lack of state ratification."
    },
    {
        "id": "ch73-l1-q62",
        "question": "Assertion (A): The 97th Amendment requires mandatory elections in co-operative societies.\\nReason (R): Co-operative societies were suffering from the problem of long-term supersession of elected boards by state governments.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Amendment mandated mandatory elections precisely because state governments were superseding elected boards for extended periods."
    },
    {
        "id": "ch73-l1-q63",
        "question": "Which of the following best describes the impact of the Supreme Court judgment on the 97th Amendment (2021)?",
        "options": [
            "It declared the entire amendment unconstitutional",
            "It upheld the amendment fully",
            "It struck down provisions related to multi-state co-operatives but upheld the rest for state co-operatives",
            "It directed Parliament to re-enact the amendment"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The SC upheld Part IXB for state co-operatives but invalidated it for multi-state co-operatives as it changed Entry 44 of Union List without state ratification."
    },
    {
        "id": "ch73-l1-q64",
        "question": "The 97th Amendment aims to bring which of the following to co-operative governance?",
        "options": [
            "Centralization",
            "Democratic decentralization and professional management",
            "Military discipline",
            "Bureaucratic control"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Amendment aims to ensure democratic control, transparent elections, and professional management of co-operatives."
    },
    {
        "id": "ch73-l1-q65",
        "question": "The International Day of Co-operatives is observed on:",
        "options": [
            "First Saturday of July",
            "October 2",
            "November 14",
            "June 5"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The UN International Day of Co-operatives is observed on the first Saturday of July every year."
    },
    {
        "id": "ch73-l1-q66",
        "question": "Which of the following amendments to the Constitution is analogous to the 97th Amendment in terms of giving constitutional status to local institutions?",
        "options": [
            "73rd and 74th Amendments",
            "42nd Amendment",
            "44th Amendment",
            "86th Amendment"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Just as the 73rd and 74th Amendments gave constitutional status to Panchayats and Municipalities, the 97th Amendment gave constitutional status to co-operatives."
    },
    {
        "id": "ch73-l1-q67",
        "question": "The 97th Amendment was passed with the support of how many votes in Parliament?",
        "options": [
            "Simple majority",
            "Two-thirds majority in both Houses",
            "Unanimous vote",
            "Three-fourths majority"
        ],
        "correctAnswerIndex": 1,
        "explanation": "As a constitutional amendment, it required a special majority (two-thirds of members present and voting) in both Houses."
    },
    {
        "id": "ch73-l1-q68",
        "question": "Under Part IXB, the State Legislature may provide for the qualifications of members of the board. This includes:",
        "options": [
            "Only educational qualifications",
            "Experience in co-operative management, banking, and related fields",
            "Only age requirements",
            "Only caste certificates"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The qualifications relate to experience in co-operative management, banking, and other relevant fields."
    },
    {
        "id": "ch73-l1-q69",
        "question": "Which of the following key problems in co-operatives did the 97th Amendment seek to address?",
        "options": [
            "Government interference in elections",
            "Delayed audits and lack of transparency",
            "Prolonged supersession of elected boards",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "The Amendment addressed multiple issues including government interference, delayed audits, and prolonged supersession."
    },
    {
        "id": "ch73-l1-q70",
        "question": "The 97th Amendment mandates that the board of a co-operative society should have functional directors. This is to ensure:",
        "options": [
            "Political representation",
            "Expert guidance in banking, marketing, and management",
            "Military advice",
            "Legal compliance only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Functional directors provide expert guidance in areas like banking, marketing, and management for better functioning."
    },
    {
        "id": "ch73-l1-q71",
        "question": "Which Article of the Constitution now includes the right to form co-operative societies?",
        "options": [
            "Article 14",
            "Article 19(1)(c)",
            "Article 21",
            "Article 32"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 19(1)(c) was amended by the 97th Amendment to include the right to form co-operative societies."
    },
    {
        "id": "ch73-l1-q72",
        "question": "Under Part IXB, the audit report must be placed before:",
        "options": [
            "The Parliament",
            "The annual general body meeting of the society",
            "The Registrar only",
            "The RBI"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The audit report and annual accounts must be placed before the annual general body meeting."
    },
    {
        "id": "ch73-l1-q73",
        "question": "Which of the following is the regulatory authority for co-operative banks in India?",
        "options": [
            "SEBI",
            "NABARD and RBI",
            "IRDAI",
            "Finance Ministry"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Co-operative banks are regulated by both NABARD (for agricultural credit) and RBI (for banking regulations)."
    },
    {
        "id": "ch73-l1-q74",
        "question": "The Ministry of Co-operation was created in which year?",
        "options": [
            "2019",
            "2020",
            "2021",
            "2022"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Ministry of Co-operation was created in July 2021 by the Union Government."
    },
    {
        "id": "ch73-l1-q75",
        "question": "The Rochdale Principles of co-operation include:",
        "options": [
            "One member, one vote",
            "Democratic member control",
            "Voluntary and open membership",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "The Rochdale Principles include all these principles and more, forming the basis of modern co-operative governance."
    },
    {
        "id": "ch73-l1-q76",
        "question": "Which of the following best describes the status of co-operatives after the 97th Amendment?",
        "options": [
            "They are under exclusive central control",
            "They have constitutional recognition with provisions for democratic governance",
            "They are abolished",
            "They are converted into companies"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Co-operatives now have constitutional recognition with provisions ensuring democratic elections, transparency, and autonomy."
    },
    {
        "id": "ch73-l1-q77",
        "question": "Assertion (A): Co-operative societies are a State subject.\\nReason (R): They fall under Entry 32 of the State List.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Co-operative societies are indeed a State subject as they fall under Entry 32 of the State List."
    },
    {
        "id": "ch73-l1-q78",
        "question": "The 97th Amendment provides protection to the co-operative sector from:",
        "options": [
            "Only financial mismanagement",
            "Excessive government control and political interference",
            "International competition",
            "Natural disasters"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The primary aim was to protect co-operatives from excessive government control and political interference in their governance."
    },
    {
        "id": "ch73-l1-q79",
        "question": "Under Part IXB, the State Legislature shall provide for the procedure for:",
        "options": [
            "Winding up of co-operative societies",
            "Merger and amalgamation of co-operative societies",
            "Both winding up and merger",
            "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The State Legislature provides for both the winding up and the merger/amalgamation of co-operative societies."
    },
    {
        "id": "ch73-l1-q80",
        "question": "Which of the following correctly describes the 97th Amendment's approach to co-operative governance?",
        "options": [
            "It centralizes all power with the Registrar",
            "It provides for democratic elections, mandatory audit, transparency, and limits on supersession",
            "It abolishes the Registrar's role",
            "It privatizes all co-operatives"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Amendment ensures democratic governance through regular elections, mandatory audit, transparency, and limiting the period of supersession."
    },
    {
        "id": "ch73-l1-q81",
        "question": "Which of the following is a distinguished co-operative institution in India?",
        "options": [
            "TATA Motors",
            "Amul",
            "Infosys",
            "Reliance"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Amul (Gujarat Co-operative Milk Marketing Federation) is one of the most successful co-operative institutions in India."
    },
    {
        "id": "ch73-l1-q82",
        "question": "Under Part IXB, the maximum number of co-opted members on a co-operative board is:",
        "options": [
            "1",
            "2",
            "3",
            "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Not more than two directors can be co-opted as members of the board under Part IXB."
    },
    {
        "id": "ch73-l1-q83",
        "question": "The 97th Amendment was initially introduced as the _______ Amendment Bill.",
        "options": [
            "106th",
            "111th",
            "116th",
            "121st"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 97th Amendment was initially introduced as the 111th Constitutional Amendment Bill."
    },
    {
        "id": "ch73-l1-q84",
        "question": "The 97th Amendment ensures that the State Government cannot delay elections to co-operative boards by mandating elections before:",
        "options": [
            "The expiry of the board's term",
            "6 months after supersession, whichever is earlier",
            "Both of the above",
            "None of the above"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Elections must be held before the expiry of the board's term, and within 6 months in case of supersession."
    },
    {
        "id": "ch73-l1-q85",
        "question": "Which fundamental right was amended by the 97th Amendment?",
        "options": [
            "Right to Equality (Art 14)",
            "Right to Freedom (Art 19)",
            "Right against Exploitation (Art 23)",
            "Right to Constitutional Remedies (Art 32)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 19(1)(c) under Right to Freedom was amended to include the right to form co-operative societies."
    },
    {
        "id": "ch73-l1-q86",
        "question": "The National Policy on Co-operatives was formulated in which year?",
        "options": [
            "2002",
            "2006",
            "2011",
            "2015"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The National Policy on Co-operatives was formulated in 2002 to support the co-operative movement."
    },
    {
        "id": "ch73-l1-q87",
        "question": "Under the 97th Amendment, disputes between a co-operative society and its members are to be settled by:",
        "options": [
            "Civil courts only",
            "The Registrar or a dispute resolution mechanism as provided by State law",
            "The Supreme Court",
            "Arbitration under the Indian Arbitration Act"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Disputes are settled through mechanisms provided by the State Legislature, often through the Registrar or co-operative tribunals."
    },
    {
        "id": "ch73-l1-q88",
        "question": "Which of the following is a challenge faced by the co-operative sector in India?",
        "options": [
            "Excessive politicization",
            "Lack of professional management",
            "Delayed elections and prolonged supersession",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "The co-operative sector faces multiple challenges including politicization, lack of professional management, and governance issues."
    },
    {
        "id": "ch73-l1-q89",
        "question": "The 97th Amendment requires that the accounts of co-operative societies be maintained in a manner prescribed by:",
        "options": [
            "The RBI",
            "The State Government",
            "The Registrar of Co-operative Societies",
            "The Chartered Accountants Institute"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The State Government prescribes the manner in which accounts should be maintained."
    },
    {
        "id": "ch73-l1-q90",
        "question": "Which of the following correctly represents the significance of the 97th Amendment?",
        "options": [
            "It is purely procedural with no substantive impact",
            "It provides constitutional safeguards for democratic, transparent, and professionally managed co-operatives",
            "It abolishes the concept of co-operatives",
            "It transfers all co-operatives to central control"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 97th Amendment provides substantive constitutional safeguards ensuring democratic governance, transparency, and professional management of co-operative societies."
    }
];

const LEVEL_2_QUESTIONS = [
    {
        "id": "ch73-l2-q1",
        "question": "The 97th Amendment provides that the State Legislature shall make provisions for persons having experience in which field to be co-opted as members of the board?",
        "options": [
            "Politics",
            "Banking, management, co-operative field, or functional expertise",
            "Military service",
            "Media and journalism"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Part IXB allows co-option of persons having experience in banking, management, co-operative field or other specified fields."
    },
    {
        "id": "ch73-l2-q2",
        "question": "Which constitutional provision ensures the voluntary nature of co-operative societies?",
        "options": [
            "Article 14",
            "Article 19(1)(c)",
            "Article 21",
            "Article 32"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 19(1)(c) as amended guarantees the right to voluntarily form co-operative societies."
    },
    {
        "id": "ch73-l2-q3",
        "question": "Before the 97th Amendment, co-operative societies were governed primarily by:",
        "options": [
            "Constitutional provisions in Part III",
            "State Co-operative Societies Acts",
            "Central Co-operative Act",
            "Panchayati Raj Acts"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Before the 97th Amendment, co-operative societies were governed by respective State Co-operative Societies Acts."
    },
    {
        "id": "ch73-l2-q4",
        "question": "Who appoints the Registrar of Co-operative Societies in a State?",
        "options": [
            "The President",
            "The Governor/State Government",
            "The Supreme Court",
            "The Parliament"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Registrar of Co-operative Societies is appointed by the State Government."
    },
    {
        "id": "ch73-l2-q5",
        "question": "The 97th Amendment was challenged primarily on what ground?",
        "options": [
            "It violated basic structure",
            "It was not passed by the required majority",
            "It affected Entry 32 of the State List (co-operatives) without ratification by states for multi-state provisions",
            "It violated Article 14"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The amendment was challenged for not obtaining ratification from half the states as required for provisions affecting federal structure."
    },
    {
        "id": "ch73-l2-q6",
        "question": "The co-operative movement in India started during which period?",
        "options": [
            "Ancient India",
            "Mughal Period",
            "British Period",
            "Post-Independence"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The co-operative movement in India started during the British period with the Co-operative Credit Societies Act of 1904."
    },
    {
        "id": "ch73-l2-q7",
        "question": "Which Five Year Plan emphasized the role of co-operatives in agricultural credit?",
        "options": [
            "First",
            "Second",
            "Third",
            "Fourth"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Second Five Year Plan (1956-61) emphasized co-operatives as the principal medium for agricultural credit, marketing, and distribution."
    },
    {
        "id": "ch73-l2-q8",
        "question": "How many Articles are there in Part IXB of the Constitution?",
        "options": [
            "10",
            "13",
            "15",
            "18"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Part IXB contains 13 Articles, from Article 243ZH to Article 243ZT."
    },
    {
        "id": "ch73-l2-q9",
        "question": "Under Part IXB, the offences and penalties relating to co-operative societies are to be prescribed by:",
        "options": [
            "The Parliament",
            "The State Legislature",
            "The Registrar",
            "The Supreme Court"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The State Legislature has the power to make laws prescribing offences and penalties for co-operative societies."
    },
    {
        "id": "ch73-l2-q10",
        "question": "The 97th Amendment mandates that every co-operative society shall file returns within how many months?",
        "options": [
            "3 months",
            "6 months",
            "9 months",
            "12 months"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Returns must be filed within six months of the close of every financial year."
    },
    {
        "id": "ch73-l2-q11",
        "question": "Which of the following countries inspired the Indian co-operative movement?",
        "options": [
            "USA",
            "UK (Rochdale model)",
            "Japan",
            "Australia"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Rochdale Pioneers in England (1844) inspired the modern co-operative movement worldwide, including India."
    },
    {
        "id": "ch73-l2-q12",
        "question": "The 97th Amendment provides for professional management in co-operatives. What does this imply?",
        "options": [
            "Only MBA graduates can be directors",
            "The CEO/Manager should be appointed through a transparent process based on qualifications",
            "All employees must be IAS officers",
            "The government directly manages all co-operatives"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Professional management means appointing qualified professionals through a transparent process for efficient functioning."
    },
    {
        "id": "ch73-l2-q13",
        "question": "Which Article of Part IXB deals with the election of members of the board?",
        "options": [
            "Article 243ZI",
            "Article 243ZJ",
            "Article 243ZK",
            "Article 243ZL"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Article 243ZK deals with the election of members of the board and related provisions."
    },
    {
        "id": "ch73-l2-q14",
        "question": "Under the 97th Amendment, can a State government directly supersede the board of a co-operative society?",
        "options": [
            "Yes, without any conditions",
            "No, it requires following the procedure laid down in Article 243ZL",
            "Only during a national emergency",
            "Only with the President's approval"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 243ZL prescribes the conditions and procedure for supersession of boards."
    },
    {
        "id": "ch73-l2-q15",
        "question": "The co-operative sector in India contributes significantly to which of the following?",
        "options": [
            "Sugar production",
            "Fertilizer distribution",
            "Dairy production",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "Co-operatives play a major role in sugar, fertilizer, dairy, and other agricultural sectors in India."
    },
    {
        "id": "ch73-l2-q16",
        "question": "The principle of 'one member, one vote' is a hallmark of:",
        "options": [
            "Corporate governance",
            "Parliamentary democracy",
            "Co-operative governance",
            "Military hierarchy"
        ],
        "correctAnswerIndex": 2,
        "explanation": "One member, one vote is a fundamental principle of democratic co-operative governance."
    },
    {
        "id": "ch73-l2-q17",
        "question": "Which institution is the apex body for agricultural co-operatives in India?",
        "options": [
            "NABARD",
            "IFFCO",
            "NAFED",
            "RBI"
        ],
        "correctAnswerIndex": 2,
        "explanation": "NAFED (National Agricultural Co-operative Marketing Federation) is the apex body of marketing co-operatives in India."
    },
    {
        "id": "ch73-l2-q18",
        "question": "IFFCO is a co-operative organization dealing with:",
        "options": [
            "Dairy products",
            "Fertilizers",
            "Housing",
            "Consumer goods"
        ],
        "correctAnswerIndex": 1,
        "explanation": "IFFCO (Indian Farmers Fertiliser Co-operative Limited) is a fertilizer co-operative."
    },
    {
        "id": "ch73-l2-q19",
        "question": "The 97th Amendment ensures transparency by mandating:",
        "options": [
            "RTI applicability to all co-operatives",
            "Mandatory audit and disclosure of information to members",
            "Public listing of all co-operatives",
            "Media coverage of co-operative meetings"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Amendment provides for mandatory audit and the right of members to access information about the co-operative."
    },
    {
        "id": "ch73-l2-q20",
        "question": "Which Article of Part IXB provides for the audit of co-operative societies?",
        "options": [
            "Article 243ZM",
            "Article 243ZN",
            "Article 243ZO",
            "Article 243ZP"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 243ZM deals with the audit of accounts of co-operative societies."
    },
    {
        "id": "ch73-l2-q21",
        "question": "The right to form co-operative societies under Article 19(1)(c) can be restricted under Article 19(4) on grounds of:",
        "options": [
            "Public order and morality only",
            "Sovereignty and integrity of India, public order, or morality",
            "Economic necessity",
            "National emergency only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 19(4) allows reasonable restrictions on the right to form co-operatives on grounds of sovereignty and integrity of India, public order, or morality."
    },
    {
        "id": "ch73-l2-q22",
        "question": "Which of the following is an urban co-operative sector entity?",
        "options": [
            "Primary Agricultural Credit Society (PACS)",
            "Urban Co-operative Bank",
            "District Central Co-operative Bank",
            "State Co-operative Bank"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Urban Co-operative Banks (UCBs) are the primary urban co-operative sector entities, regulated by both the RBI and the Registrar."
    },
    {
        "id": "ch73-l2-q23",
        "question": "Primary Agricultural Credit Societies (PACS) operate at which level?",
        "options": [
            "National level",
            "State level",
            "District level",
            "Village level"
        ],
        "correctAnswerIndex": 3,
        "explanation": "PACS operate at the village/grassroots level providing credit to farmers."
    },
    {
        "id": "ch73-l2-q24",
        "question": "The three-tier structure of co-operative credit in India consists of:",
        "options": [
            "PACS, DCCBs, and State Co-operative Banks",
            "NABARD, RBI, and SBI",
            "Village, Block, and District levels",
            "National, State, and Local levels"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The three-tier structure consists of Primary Agricultural Credit Societies (village), District Central Co-operative Banks (district), and State Co-operative Banks (state)."
    },
    {
        "id": "ch73-l2-q25",
        "question": "Which committee recommended the revival of the short-term co-operative credit structure?",
        "options": [
            "Vaidyanathan Committee",
            "Narasimham Committee",
            "Kelkar Committee",
            "Chelliah Committee"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Vaidyanathan Committee (2004) recommended the revival of the short-term co-operative credit structure."
    },
    {
        "id": "ch73-l2-q26",
        "question": "The Multi-State Co-operative Societies (Amendment) Act was passed in which year?",
        "options": [
            "2002",
            "2011",
            "2023",
            "2019"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Multi-State Co-operative Societies (Amendment) Act, 2023 was passed to strengthen governance and transparency."
    },
    {
        "id": "ch73-l2-q27",
        "question": "Which of the following is a co-operative principle as per the International Co-operative Alliance?",
        "options": [
            "Profit maximization",
            "Voluntary and open membership",
            "Government control",
            "Limited liability"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Voluntary and open membership is one of the seven co-operative principles of the ICA."
    },
    {
        "id": "ch73-l2-q28",
        "question": "The 97th Amendment ensures that the board of a co-operative society shall have how many seats reserved for SC/ST members?",
        "options": [
            "None specifically mandated",
            "Two seats",
            "Proportional to population",
            "One seat"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The 97th Amendment does not mandate specific reservation for SC/ST on co-operative boards; it focuses on elections and governance."
    },
    {
        "id": "ch73-l2-q29",
        "question": "Under the 97th Amendment, a seat on the board of a co-operative society is reserved for:",
        "options": [
            "SC/ST",
            "OBC",
            "One seat for a member of the SC or ST and Two seats for women",
            "No reservations are mandated"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Part IXB provides for reservation of one seat for SC or ST and two seats for women on the board of every co-operative society."
    },
    {
        "id": "ch73-l2-q30",
        "question": "Which Article of Part IXB deals with the right of members to access information?",
        "options": [
            "Article 243ZN",
            "Article 243ZO",
            "Article 243ZP",
            "Article 243ZQ"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Article 243ZN provides for the right of members to get information regarding the co-operative society."
    },
    {
        "id": "ch73-l2-q31",
        "question": "Consider the following statements regarding the 97th Amendment:\\n1. It added Part IXB to the Constitution.\\n2. It made the right to form co-operative societies a fundamental right.\\n3. It was held fully valid by the Supreme Court in 2021.\\nWhich of the above are correct?",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is false: The SC struck down Part IXB insofar as it applied to multi-state co-operatives for lack of state ratification."
    },
    {
        "id": "ch73-l2-q32",
        "question": "Assertion (A): The 97th Amendment requires mandatory elections in co-operative societies.\\nReason (R): Co-operative societies were suffering from the problem of long-term supersession of elected boards by state governments.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Amendment mandated mandatory elections precisely because state governments were superseding elected boards for extended periods."
    },
    {
        "id": "ch73-l2-q33",
        "question": "Which of the following best describes the impact of the Supreme Court judgment on the 97th Amendment (2021)?",
        "options": [
            "It declared the entire amendment unconstitutional",
            "It upheld the amendment fully",
            "It struck down provisions related to multi-state co-operatives but upheld the rest for state co-operatives",
            "It directed Parliament to re-enact the amendment"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The SC upheld Part IXB for state co-operatives but invalidated it for multi-state co-operatives as it changed Entry 44 of Union List without state ratification."
    },
    {
        "id": "ch73-l2-q34",
        "question": "The 97th Amendment aims to bring which of the following to co-operative governance?",
        "options": [
            "Centralization",
            "Democratic decentralization and professional management",
            "Military discipline",
            "Bureaucratic control"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Amendment aims to ensure democratic control, transparent elections, and professional management of co-operatives."
    },
    {
        "id": "ch73-l2-q35",
        "question": "The International Day of Co-operatives is observed on:",
        "options": [
            "First Saturday of July",
            "October 2",
            "November 14",
            "June 5"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The UN International Day of Co-operatives is observed on the first Saturday of July every year."
    },
    {
        "id": "ch73-l2-q36",
        "question": "Which of the following amendments to the Constitution is analogous to the 97th Amendment in terms of giving constitutional status to local institutions?",
        "options": [
            "73rd and 74th Amendments",
            "42nd Amendment",
            "44th Amendment",
            "86th Amendment"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Just as the 73rd and 74th Amendments gave constitutional status to Panchayats and Municipalities, the 97th Amendment gave constitutional status to co-operatives."
    },
    {
        "id": "ch73-l2-q37",
        "question": "The 97th Amendment was passed with the support of how many votes in Parliament?",
        "options": [
            "Simple majority",
            "Two-thirds majority in both Houses",
            "Unanimous vote",
            "Three-fourths majority"
        ],
        "correctAnswerIndex": 1,
        "explanation": "As a constitutional amendment, it required a special majority (two-thirds of members present and voting) in both Houses."
    },
    {
        "id": "ch73-l2-q38",
        "question": "Under Part IXB, the State Legislature may provide for the qualifications of members of the board. This includes:",
        "options": [
            "Only educational qualifications",
            "Experience in co-operative management, banking, and related fields",
            "Only age requirements",
            "Only caste certificates"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The qualifications relate to experience in co-operative management, banking, and other relevant fields."
    },
    {
        "id": "ch73-l2-q39",
        "question": "Which of the following key problems in co-operatives did the 97th Amendment seek to address?",
        "options": [
            "Government interference in elections",
            "Delayed audits and lack of transparency",
            "Prolonged supersession of elected boards",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "The Amendment addressed multiple issues including government interference, delayed audits, and prolonged supersession."
    },
    {
        "id": "ch73-l2-q40",
        "question": "The 97th Amendment mandates that the board of a co-operative society should have functional directors. This is to ensure:",
        "options": [
            "Political representation",
            "Expert guidance in banking, marketing, and management",
            "Military advice",
            "Legal compliance only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Functional directors provide expert guidance in areas like banking, marketing, and management for better functioning."
    },
    {
        "id": "ch73-l2-q41",
        "question": "Which Article of the Constitution now includes the right to form co-operative societies?",
        "options": [
            "Article 14",
            "Article 19(1)(c)",
            "Article 21",
            "Article 32"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 19(1)(c) was amended by the 97th Amendment to include the right to form co-operative societies."
    },
    {
        "id": "ch73-l2-q42",
        "question": "Under Part IXB, the audit report must be placed before:",
        "options": [
            "The Parliament",
            "The annual general body meeting of the society",
            "The Registrar only",
            "The RBI"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The audit report and annual accounts must be placed before the annual general body meeting."
    },
    {
        "id": "ch73-l2-q43",
        "question": "Which of the following is the regulatory authority for co-operative banks in India?",
        "options": [
            "SEBI",
            "NABARD and RBI",
            "IRDAI",
            "Finance Ministry"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Co-operative banks are regulated by both NABARD (for agricultural credit) and RBI (for banking regulations)."
    },
    {
        "id": "ch73-l2-q44",
        "question": "The Ministry of Co-operation was created in which year?",
        "options": [
            "2019",
            "2020",
            "2021",
            "2022"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Ministry of Co-operation was created in July 2021 by the Union Government."
    },
    {
        "id": "ch73-l2-q45",
        "question": "The Rochdale Principles of co-operation include:",
        "options": [
            "One member, one vote",
            "Democratic member control",
            "Voluntary and open membership",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "The Rochdale Principles include all these principles and more, forming the basis of modern co-operative governance."
    },
    {
        "id": "ch73-l2-q46",
        "question": "Which of the following best describes the status of co-operatives after the 97th Amendment?",
        "options": [
            "They are under exclusive central control",
            "They have constitutional recognition with provisions for democratic governance",
            "They are abolished",
            "They are converted into companies"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Co-operatives now have constitutional recognition with provisions ensuring democratic elections, transparency, and autonomy."
    },
    {
        "id": "ch73-l2-q47",
        "question": "Assertion (A): Co-operative societies are a State subject.\\nReason (R): They fall under Entry 32 of the State List.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Co-operative societies are indeed a State subject as they fall under Entry 32 of the State List."
    },
    {
        "id": "ch73-l2-q48",
        "question": "The 97th Amendment provides protection to the co-operative sector from:",
        "options": [
            "Only financial mismanagement",
            "Excessive government control and political interference",
            "International competition",
            "Natural disasters"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The primary aim was to protect co-operatives from excessive government control and political interference in their governance."
    },
    {
        "id": "ch73-l2-q49",
        "question": "Under Part IXB, the State Legislature shall provide for the procedure for:",
        "options": [
            "Winding up of co-operative societies",
            "Merger and amalgamation of co-operative societies",
            "Both winding up and merger",
            "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The State Legislature provides for both the winding up and the merger/amalgamation of co-operative societies."
    },
    {
        "id": "ch73-l2-q50",
        "question": "Which of the following correctly describes the 97th Amendment's approach to co-operative governance?",
        "options": [
            "It centralizes all power with the Registrar",
            "It provides for democratic elections, mandatory audit, transparency, and limits on supersession",
            "It abolishes the Registrar's role",
            "It privatizes all co-operatives"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Amendment ensures democratic governance through regular elections, mandatory audit, transparency, and limiting the period of supersession."
    },
    {
        "id": "ch73-l2-q51",
        "question": "Which of the following is a distinguished co-operative institution in India?",
        "options": [
            "TATA Motors",
            "Amul",
            "Infosys",
            "Reliance"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Amul (Gujarat Co-operative Milk Marketing Federation) is one of the most successful co-operative institutions in India."
    },
    {
        "id": "ch73-l2-q52",
        "question": "Under Part IXB, the maximum number of co-opted members on a co-operative board is:",
        "options": [
            "1",
            "2",
            "3",
            "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Not more than two directors can be co-opted as members of the board under Part IXB."
    },
    {
        "id": "ch73-l2-q53",
        "question": "The 97th Amendment was initially introduced as the _______ Amendment Bill.",
        "options": [
            "106th",
            "111th",
            "116th",
            "121st"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 97th Amendment was initially introduced as the 111th Constitutional Amendment Bill."
    },
    {
        "id": "ch73-l2-q54",
        "question": "The 97th Amendment ensures that the State Government cannot delay elections to co-operative boards by mandating elections before:",
        "options": [
            "The expiry of the board's term",
            "6 months after supersession, whichever is earlier",
            "Both of the above",
            "None of the above"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Elections must be held before the expiry of the board's term, and within 6 months in case of supersession."
    },
    {
        "id": "ch73-l2-q55",
        "question": "Which fundamental right was amended by the 97th Amendment?",
        "options": [
            "Right to Equality (Art 14)",
            "Right to Freedom (Art 19)",
            "Right against Exploitation (Art 23)",
            "Right to Constitutional Remedies (Art 32)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 19(1)(c) under Right to Freedom was amended to include the right to form co-operative societies."
    },
    {
        "id": "ch73-l2-q56",
        "question": "The National Policy on Co-operatives was formulated in which year?",
        "options": [
            "2002",
            "2006",
            "2011",
            "2015"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The National Policy on Co-operatives was formulated in 2002 to support the co-operative movement."
    },
    {
        "id": "ch73-l2-q57",
        "question": "Under the 97th Amendment, disputes between a co-operative society and its members are to be settled by:",
        "options": [
            "Civil courts only",
            "The Registrar or a dispute resolution mechanism as provided by State law",
            "The Supreme Court",
            "Arbitration under the Indian Arbitration Act"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Disputes are settled through mechanisms provided by the State Legislature, often through the Registrar or co-operative tribunals."
    },
    {
        "id": "ch73-l2-q58",
        "question": "Which of the following is a challenge faced by the co-operative sector in India?",
        "options": [
            "Excessive politicization",
            "Lack of professional management",
            "Delayed elections and prolonged supersession",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "The co-operative sector faces multiple challenges including politicization, lack of professional management, and governance issues."
    },
    {
        "id": "ch73-l2-q59",
        "question": "The 97th Amendment requires that the accounts of co-operative societies be maintained in a manner prescribed by:",
        "options": [
            "The RBI",
            "The State Government",
            "The Registrar of Co-operative Societies",
            "The Chartered Accountants Institute"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The State Government prescribes the manner in which accounts should be maintained."
    },
    {
        "id": "ch73-l2-q60",
        "question": "Which of the following correctly represents the significance of the 97th Amendment?",
        "options": [
            "It is purely procedural with no substantive impact",
            "It provides constitutional safeguards for democratic, transparent, and professionally managed co-operatives",
            "It abolishes the concept of co-operatives",
            "It transfers all co-operatives to central control"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 97th Amendment provides substantive constitutional safeguards ensuring democratic governance, transparency, and professional management of co-operative societies."
    }
];

const LEVEL_3_QUESTIONS = [
    {
        "id": "ch73-l3-q1",
        "question": "Consider the following statements regarding the 97th Amendment:\\n1. It added Part IXB to the Constitution.\\n2. It made the right to form co-operative societies a fundamental right.\\n3. It was held fully valid by the Supreme Court in 2021.\\nWhich of the above are correct?",
        "options": [
            "1 and 2 only",
            "2 and 3 only",
            "1 and 3 only",
            "1, 2, and 3"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Statements 1 and 2 are correct. Statement 3 is false: The SC struck down Part IXB insofar as it applied to multi-state co-operatives for lack of state ratification."
    },
    {
        "id": "ch73-l3-q2",
        "question": "Assertion (A): The 97th Amendment requires mandatory elections in co-operative societies.\\nReason (R): Co-operative societies were suffering from the problem of long-term supersession of elected boards by state governments.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The Amendment mandated mandatory elections precisely because state governments were superseding elected boards for extended periods."
    },
    {
        "id": "ch73-l3-q3",
        "question": "Which of the following best describes the impact of the Supreme Court judgment on the 97th Amendment (2021)?",
        "options": [
            "It declared the entire amendment unconstitutional",
            "It upheld the amendment fully",
            "It struck down provisions related to multi-state co-operatives but upheld the rest for state co-operatives",
            "It directed Parliament to re-enact the amendment"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The SC upheld Part IXB for state co-operatives but invalidated it for multi-state co-operatives as it changed Entry 44 of Union List without state ratification."
    },
    {
        "id": "ch73-l3-q4",
        "question": "The 97th Amendment aims to bring which of the following to co-operative governance?",
        "options": [
            "Centralization",
            "Democratic decentralization and professional management",
            "Military discipline",
            "Bureaucratic control"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Amendment aims to ensure democratic control, transparent elections, and professional management of co-operatives."
    },
    {
        "id": "ch73-l3-q5",
        "question": "The International Day of Co-operatives is observed on:",
        "options": [
            "First Saturday of July",
            "October 2",
            "November 14",
            "June 5"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The UN International Day of Co-operatives is observed on the first Saturday of July every year."
    },
    {
        "id": "ch73-l3-q6",
        "question": "Which of the following amendments to the Constitution is analogous to the 97th Amendment in terms of giving constitutional status to local institutions?",
        "options": [
            "73rd and 74th Amendments",
            "42nd Amendment",
            "44th Amendment",
            "86th Amendment"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Just as the 73rd and 74th Amendments gave constitutional status to Panchayats and Municipalities, the 97th Amendment gave constitutional status to co-operatives."
    },
    {
        "id": "ch73-l3-q7",
        "question": "The 97th Amendment was passed with the support of how many votes in Parliament?",
        "options": [
            "Simple majority",
            "Two-thirds majority in both Houses",
            "Unanimous vote",
            "Three-fourths majority"
        ],
        "correctAnswerIndex": 1,
        "explanation": "As a constitutional amendment, it required a special majority (two-thirds of members present and voting) in both Houses."
    },
    {
        "id": "ch73-l3-q8",
        "question": "Under Part IXB, the State Legislature may provide for the qualifications of members of the board. This includes:",
        "options": [
            "Only educational qualifications",
            "Experience in co-operative management, banking, and related fields",
            "Only age requirements",
            "Only caste certificates"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The qualifications relate to experience in co-operative management, banking, and other relevant fields."
    },
    {
        "id": "ch73-l3-q9",
        "question": "Which of the following key problems in co-operatives did the 97th Amendment seek to address?",
        "options": [
            "Government interference in elections",
            "Delayed audits and lack of transparency",
            "Prolonged supersession of elected boards",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "The Amendment addressed multiple issues including government interference, delayed audits, and prolonged supersession."
    },
    {
        "id": "ch73-l3-q10",
        "question": "The 97th Amendment mandates that the board of a co-operative society should have functional directors. This is to ensure:",
        "options": [
            "Political representation",
            "Expert guidance in banking, marketing, and management",
            "Military advice",
            "Legal compliance only"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Functional directors provide expert guidance in areas like banking, marketing, and management for better functioning."
    },
    {
        "id": "ch73-l3-q11",
        "question": "Which Article of the Constitution now includes the right to form co-operative societies?",
        "options": [
            "Article 14",
            "Article 19(1)(c)",
            "Article 21",
            "Article 32"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 19(1)(c) was amended by the 97th Amendment to include the right to form co-operative societies."
    },
    {
        "id": "ch73-l3-q12",
        "question": "Under Part IXB, the audit report must be placed before:",
        "options": [
            "The Parliament",
            "The annual general body meeting of the society",
            "The Registrar only",
            "The RBI"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The audit report and annual accounts must be placed before the annual general body meeting."
    },
    {
        "id": "ch73-l3-q13",
        "question": "Which of the following is the regulatory authority for co-operative banks in India?",
        "options": [
            "SEBI",
            "NABARD and RBI",
            "IRDAI",
            "Finance Ministry"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Co-operative banks are regulated by both NABARD (for agricultural credit) and RBI (for banking regulations)."
    },
    {
        "id": "ch73-l3-q14",
        "question": "The Ministry of Co-operation was created in which year?",
        "options": [
            "2019",
            "2020",
            "2021",
            "2022"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The Ministry of Co-operation was created in July 2021 by the Union Government."
    },
    {
        "id": "ch73-l3-q15",
        "question": "The Rochdale Principles of co-operation include:",
        "options": [
            "One member, one vote",
            "Democratic member control",
            "Voluntary and open membership",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "The Rochdale Principles include all these principles and more, forming the basis of modern co-operative governance."
    },
    {
        "id": "ch73-l3-q16",
        "question": "Which of the following best describes the status of co-operatives after the 97th Amendment?",
        "options": [
            "They are under exclusive central control",
            "They have constitutional recognition with provisions for democratic governance",
            "They are abolished",
            "They are converted into companies"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Co-operatives now have constitutional recognition with provisions ensuring democratic elections, transparency, and autonomy."
    },
    {
        "id": "ch73-l3-q17",
        "question": "Assertion (A): Co-operative societies are a State subject.\\nReason (R): They fall under Entry 32 of the State List.",
        "options": [
            "Both A and R are true and R is the correct explanation of A",
            "Both A and R are true but R is NOT the correct explanation",
            "A is true but R is false",
            "A is false but R is true"
        ],
        "correctAnswerIndex": 0,
        "explanation": "Co-operative societies are indeed a State subject as they fall under Entry 32 of the State List."
    },
    {
        "id": "ch73-l3-q18",
        "question": "The 97th Amendment provides protection to the co-operative sector from:",
        "options": [
            "Only financial mismanagement",
            "Excessive government control and political interference",
            "International competition",
            "Natural disasters"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The primary aim was to protect co-operatives from excessive government control and political interference in their governance."
    },
    {
        "id": "ch73-l3-q19",
        "question": "Under Part IXB, the State Legislature shall provide for the procedure for:",
        "options": [
            "Winding up of co-operative societies",
            "Merger and amalgamation of co-operative societies",
            "Both winding up and merger",
            "Neither"
        ],
        "correctAnswerIndex": 2,
        "explanation": "The State Legislature provides for both the winding up and the merger/amalgamation of co-operative societies."
    },
    {
        "id": "ch73-l3-q20",
        "question": "Which of the following correctly describes the 97th Amendment's approach to co-operative governance?",
        "options": [
            "It centralizes all power with the Registrar",
            "It provides for democratic elections, mandatory audit, transparency, and limits on supersession",
            "It abolishes the Registrar's role",
            "It privatizes all co-operatives"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The Amendment ensures democratic governance through regular elections, mandatory audit, transparency, and limiting the period of supersession."
    },
    {
        "id": "ch73-l3-q21",
        "question": "Which of the following is a distinguished co-operative institution in India?",
        "options": [
            "TATA Motors",
            "Amul",
            "Infosys",
            "Reliance"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Amul (Gujarat Co-operative Milk Marketing Federation) is one of the most successful co-operative institutions in India."
    },
    {
        "id": "ch73-l3-q22",
        "question": "Under Part IXB, the maximum number of co-opted members on a co-operative board is:",
        "options": [
            "1",
            "2",
            "3",
            "5"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Not more than two directors can be co-opted as members of the board under Part IXB."
    },
    {
        "id": "ch73-l3-q23",
        "question": "The 97th Amendment was initially introduced as the _______ Amendment Bill.",
        "options": [
            "106th",
            "111th",
            "116th",
            "121st"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 97th Amendment was initially introduced as the 111th Constitutional Amendment Bill."
    },
    {
        "id": "ch73-l3-q24",
        "question": "The 97th Amendment ensures that the State Government cannot delay elections to co-operative boards by mandating elections before:",
        "options": [
            "The expiry of the board's term",
            "6 months after supersession, whichever is earlier",
            "Both of the above",
            "None of the above"
        ],
        "correctAnswerIndex": 2,
        "explanation": "Elections must be held before the expiry of the board's term, and within 6 months in case of supersession."
    },
    {
        "id": "ch73-l3-q25",
        "question": "Which fundamental right was amended by the 97th Amendment?",
        "options": [
            "Right to Equality (Art 14)",
            "Right to Freedom (Art 19)",
            "Right against Exploitation (Art 23)",
            "Right to Constitutional Remedies (Art 32)"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Article 19(1)(c) under Right to Freedom was amended to include the right to form co-operative societies."
    },
    {
        "id": "ch73-l3-q26",
        "question": "The National Policy on Co-operatives was formulated in which year?",
        "options": [
            "2002",
            "2006",
            "2011",
            "2015"
        ],
        "correctAnswerIndex": 0,
        "explanation": "The National Policy on Co-operatives was formulated in 2002 to support the co-operative movement."
    },
    {
        "id": "ch73-l3-q27",
        "question": "Under the 97th Amendment, disputes between a co-operative society and its members are to be settled by:",
        "options": [
            "Civil courts only",
            "The Registrar or a dispute resolution mechanism as provided by State law",
            "The Supreme Court",
            "Arbitration under the Indian Arbitration Act"
        ],
        "correctAnswerIndex": 1,
        "explanation": "Disputes are settled through mechanisms provided by the State Legislature, often through the Registrar or co-operative tribunals."
    },
    {
        "id": "ch73-l3-q28",
        "question": "Which of the following is a challenge faced by the co-operative sector in India?",
        "options": [
            "Excessive politicization",
            "Lack of professional management",
            "Delayed elections and prolonged supersession",
            "All of the above"
        ],
        "correctAnswerIndex": 3,
        "explanation": "The co-operative sector faces multiple challenges including politicization, lack of professional management, and governance issues."
    },
    {
        "id": "ch73-l3-q29",
        "question": "The 97th Amendment requires that the accounts of co-operative societies be maintained in a manner prescribed by:",
        "options": [
            "The RBI",
            "The State Government",
            "The Registrar of Co-operative Societies",
            "The Chartered Accountants Institute"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The State Government prescribes the manner in which accounts should be maintained."
    },
    {
        "id": "ch73-l3-q30",
        "question": "Which of the following correctly represents the significance of the 97th Amendment?",
        "options": [
            "It is purely procedural with no substantive impact",
            "It provides constitutional safeguards for democratic, transparent, and professionally managed co-operatives",
            "It abolishes the concept of co-operatives",
            "It transfers all co-operatives to central control"
        ],
        "correctAnswerIndex": 1,
        "explanation": "The 97th Amendment provides substantive constitutional safeguards ensuring democratic governance, transparency, and professional management of co-operative societies."
    }
];

export const CHAPTER_73_LEVELS: ChapterLevelData = {
    level1: LEVEL_1_QUESTIONS,
    level2: LEVEL_2_QUESTIONS,
    level3: LEVEL_3_QUESTIONS
};
