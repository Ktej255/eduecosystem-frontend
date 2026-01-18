import type { MCQ } from './mcq-utils';

export const DAY32_MCQS: MCQ[] = [
    // TOPIC 1: BAR COUNCIL OF INDIA (15 Questions)
    {
        id: 1,
        question: "The Bar Council of India was established under which Act?",
        options: [
            "The Advocates Act, 1961",
            "The Legal Services Authorities Act, 1987",
            "The Bar Council Act, 1955",
            "The Indian Legal Practitioners Act, 1923"
        ],
        correctAnswer: 0,
        explanation: "The Bar Council of India is a statutory body established under section 4 of the Advocates Act, 1961."
    },
    {
        id: 2,
        question: "Who is the ex-officio member of the Bar Council of India?",
        options: [
            "The Chief Justice of India",
            "The Attorney General of India",
            "The Minister of Law and Justice",
            "The Chairperson of the Law Commission"
        ],
        correctAnswer: 1,
        explanation: "The Attorney General of India and the Solicitor General of India are ex-officio members of the Bar Council of India."
    },
    {
        id: 3,
        question: "Which of the following is NOT a function of the Bar Council of India?",
        options: [
            "To lay down standards of professional conduct for advocates",
            "To safeguard the rights, privileges and interests of advocates",
            "To appoint judges to the High Courts",
            "To promote and support law reform"
        ],
        correctAnswer: 2,
        explanation: "Appointment of judges is done by the President (Collegium system/NJAC debate), not the Bar Council. BCI regulates the legal profession."
    },
    {
        id: 4,
        question: "The All India Bar Examination (AIBE) is conducted by:",
        options: [
            "Union Public Service Commission",
            "National Testing Agency",
            "Bar Council of India",
            "Supreme Court of India"
        ],
        correctAnswer: 2,
        explanation: "The BCI conducts the All India Bar Examination to test an advocate's ability to practice law."
    },
    {
        id: 5,
        question: "State Bar Councils are established under:",
        options: [
            "State Legislature Acts",
            "The Advocates Act, 1961",
            "Constitution of India",
            "Executive Order of the Governor"
        ],
        correctAnswer: 1,
        explanation: "Both the Bar Council of India and State Bar Councils are established under the Advocates Act, 1961."
    },
    {
        id: 6,
        question: "The 'Senior Advocate' designation is conferred by:",
        options: [
            "The President of India",
            "The Bar Council of India",
            "The Supreme Court or High Courts",
            "The Ministry of Law"
        ],
        correctAnswer: 2,
        explanation: "The Supreme Court or High Courts designate an advocate as a 'Senior Advocate' with their consent, based on ability/standing."
    },
    {
        id: 7,
        question: "Professional misconduct by an advocate is punished by:",
        options: [
            "The Police",
            "The Consumer Court",
            "The Disciplinary Committee of the State Bar Council",
            "The High Court directly"
        ],
        correctAnswer: 2,
        explanation: "Disciplinary committees of State Bar Councils explicitly handle cases of misconduct, with appeal lying to the BCI and then SC."
    },
    {
        id: 8,
        question: "Foreign lawyers are strictly prohibited from practicing law in India. (True/False status)",
        options: [
            "Strictly prohibited in all forms",
            "Allowed only for arbitration/international law on reciprocal basis (recent BCI rules)",
            "Allowed freely in corporate firms",
            "Allowed if registered with Home Ministry"
        ],
        correctAnswer: 1,
        explanation: "Recent BCI rules (2023) allow entry of foreign lawyers/firms on a reciprocal basis for foreign law advice and international commercial arbitration."
    },
    {
        id: 9,
        question: "The Chairman and Vice-Chairman of the Bar Council of India are elected by:",
        options: [
            "The Members of the Council from amongst themselves",
            "The Chief Justice of India",
            "The Advocates of the Supreme Court directly",
            "The Central Government"
        ],
        correctAnswer: 0,
        explanation: "The Council elects its own Chairman and Vice-Chairman for a period of 2 years."
    },
    {
        id: 10,
        question: "Funds for the Bar Council of India primarily come from:",
        options: [
            "Consolidated Fund of India",
            "20% share of enrollment fees from State Bar Councils",
            "Direct tax on law firms",
            "Grants from the World Bank"
        ],
        correctAnswer: 1,
        explanation: "Every State Bar Council must pay 20% of total enrollment fees received by it to the BCI."
    },
    {
        id: 11,
        question: "Who has the power to recognize foreign law degrees for enrollment in India?",
        options: [
            "Ministry of Education",
            "University Grants Commission (UGC)",
            "Bar Council of India",
            "Association of Indian Universities"
        ],
        correctAnswer: 2,
        explanation: "BCI recognizes universities (Indian & Foreign) whose degrees in law shall be a qualification for enrollment."
    },
    {
        id: 12,
        question: "Can the BCI issue directives to State Bar Councils?",
        options: [
            "No, State Councils are autonomous",
            "Yes, under the Advocates Act",
            "Only with High Court permission",
            "Only in financial matters"
        ],
        correctAnswer: 1,
        explanation: "BCI exercises general supervision and control over State Bar Councils."
    },
    {
        id: 13,
        question: "The Advocates Welfare Fund is constituted under:",
        options: [
            "The Advocates Welfare Fund Act, 2001",
            "The BCI Rules 1975",
            "The Welfare of Lawyers Act 1990",
            "Directive Principles"
        ],
        correctAnswer: 0,
        explanation: "A specific central act, The Advocates Welfare Fund Act, 2001, governs this."
    },
    {
        id: 14,
        question: "Does the BCI regulate legal aid?",
        options: [
            "No, that is NALSA's job only",
            "Yes, it is one of its statutory functions to organize legal aid",
            "Only for Supreme Court cases",
            "It funds NALSA but doesn't organize it"
        ],
        correctAnswer: 1,
        explanation: "One of the functions of BCI (S.7 of Advocates Act) is to organize legal aid to the poor."
    },
    {
        id: 15,
        question: "The term of office of elected members of a State Bar Council is:",
        options: [
            "2 years",
            "3 years",
            "5 years",
            "6 years"
        ],
        correctAnswer: 2,
        explanation: "The term is generally 5 years."
    },

    // TOPIC 2: COMPETITION COMMISSION OF INDIA (15 Questions)
    {
        id: 16,
        question: "The Competition Commission of India (CCI) replaced which former body?",
        options: [
            "MRTP Commission",
            "Company Law Board",
            "BIFR",
            "Fair Trade Commission"
        ],
        correctAnswer: 0,
        explanation: "The CCI replaced the Monopolies and Restrictive Trade Practices (MRTP) Commission."
    },
    {
        id: 17,
        question: "The Competition Act, 2002 seeks to regulate:",
        options: [
            "Anti-competitive agreements",
            "Abuse of dominant position",
            "Combinations (Mergers & Acquisitions)",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "The Act covers these three main pillars: Agreements, Dominance, and Combinations."
    },
    {
        id: 18,
        question: "The Chairperson and members of CCI are appointed by:",
        options: [
            "The President directly",
            "The Central Government",
            "The Chief Justice of India",
            "The Ministry of Finance only"
        ],
        correctAnswer: 1,
        explanation: "Appointed by the Central Government generally on the recommendation of a Selection Committee (headed by MCA Secretary or similar, usually)."
    },
    {
        id: 19,
        question: "What is 'Predatory Pricing' under the Competition Act?",
        options: [
            "Pricing below cost to eliminate competition",
            "Pricing according to market demand",
            "High pricing to maximize profit",
            "Discount pricing for festivals"
        ],
        correctAnswer: 0,
        explanation: "Predatory pricing is the sale of goods/services at a price below the cost of production with a view to reduce competition or eliminate competitors."
    },
    {
        id: 20,
        question: "The Competition Appellate Tribunal (COMPAT) was replaced by:",
        options: [
            "National Company Law Appellate Tribunal (NCLAT)",
            "High Courts",
            "Supreme Court",
            "Central Administrative Tribunal"
        ],
        correctAnswer: 0,
        explanation: "In 2017, COMPAT ceased to exist and its appellate functions were transferred to the NCLAT."
    },
    {
        id: 21,
        question: "Is the CCI a constitutional body?",
        options: [
            "Yes, under Article 301",
            "No, it is a statutory body",
            "No, it is an executive body",
            "Yes, under Article 323B"
        ],
        correctAnswer: 1,
        explanation: "It is a statutory body established under the Competition Act, 2002."
    },
    {
        id: 22,
        question: "The 'relevant market' definition in the Competition Act considers:",
        options: [
            "Only relevant product market",
            "Only relevant geographic market",
            "Both relevant product and geographic market",
            "Only the global market"
        ],
        correctAnswer: 2,
        explanation: "Relevant market means the market determined by the Commission with reference to the relevant product market or the relevant geographic market or with reference to both."
    },
    {
        id: 23,
        question: "CCI has the power to impose a penalty of up to what amount on cartels?",
        options: [
            "10% of turnover or 3 times profit, whichever is higher",
            "100 Crores fixed",
            "1% of global turnover",
            "50% of net profit"
        ],
        correctAnswer: 0,
        explanation: "For cartels, penalty can be up to 3 times of its profit for each year of continuance of such agreement or 10% of its turnover for each year of continuance of such agreement, whichever is higher."
    },
    {
        id: 24,
        question: "The term of office for the Chairperson of CCI is:",
        options: [
            "5 years or age of 65 years",
            "3 years or age of 65 years",
            "5 years or age of 70 years",
            "4 years fixed"
        ],
        correctAnswer: 0,
        explanation: "Currently 5 years or until the age of 65 years, whichever is earlier."
    },
    {
        id: 25,
        question: "Does the Competition Act apply to Government Departments?",
        options: [
            "No, strict sovereign immunity",
            "Yes, if they are engaged in any activity related to production/storage/supply/distribution",
            "Only to PSUs, not Depts",
            "Only if they make a profit"
        ],
        correctAnswer: 1,
        explanation: "The definition of 'enterprise' includes government departments engaged in economic activities, excluding sovereign functions (like atomic energy, defence, space)."
    },
    {
        id: 26,
        question: "The principle of 'Leniency Programme' in Competition Law refers to:",
        options: [
            "Reduced penalty for whistleblowers in a cartel",
            "Forgiving small companies",
            "Delaying prosecution",
            "Exempting agricultural sector"
        ],
        correctAnswer: 0,
        explanation: "Under lesser penalty regulations (Leniency), a member of a cartel who discloses information can get a reduced penalty."
    },
    {
        id: 27,
        question: "Which committee recommended the enactment of the Competition Act, 2002?",
        options: [
            "Raghuram Rajan Committee",
            "Raghavan Committee",
            "Narasimham Committee",
            "Dutt Committee"
        ],
        correctAnswer: 1,
        explanation: "The High Level Committee on Competition Policy and Law was headed by S.V.S. Raghavan."
    },
    {
        id: 28,
        question: "A 'combination' (M&A) needs CCI approval if:",
        options: [
            "It crosses certain asset/turnover thresholds",
            "It involves any foreign company",
            "It is in the tech sector",
            "The government refers it"
        ],
        correctAnswer: 0,
        explanation: "Combinations are regulated based on asset and turnover thresholds specified in the Act."
    },
    {
        id: 29,
        question: "Does CCI have suo motu powers?",
        options: [
            "No, it needs a complaint",
            "Yes, it can initiate inquiry on its own knowledge",
            "Yes, but only with Supreme Court permission",
            "No, only on government reference"
        ],
        correctAnswer: 1,
        explanation: "CCI can inquire into alleged contraventions on its own motion (suo motu), on receipt of information, or on reference."
    },
    {
        id: 30,
        question: "Who represents the CCI in courts?",
        options: [
            "Director General (Investigation)",
            "Secretary of CCI",
            "Attorney General",
            "Standing Counsel"
        ],
        correctAnswer: 0,
        explanation: "The Director General (DG) assists the CCI in investigating contraventions, but the Commission itself issues orders."
    },

    // TOPIC 3: ROLE OF REGIONAL PARTIES (15 Questions)
    {
        id: 31,
        question: "What defines a 'Regional Party' in the Indian context?",
        options: [
            "It is restricted to a specific region/state and prioritizes local interests",
            "It is banned from national elections",
            "It has less than 100 members",
            "It follows a communist ideology"
        ],
        correctAnswer: 0,
        explanation: "Regional parties operate within a limited area and articulate regional/local interests."
    },
    {
        id: 32,
        question: "Regional parties are eligible for recognition as 'State Parties' if they secure:",
        options: [
            "10% of votes in LS",
            "6% of valid votes in the State + 2 Assembly Seats",
            "20% of votes in Panchayat elections",
            "Any 1 seat in Lok Sabha"
        ],
        correctAnswer: 1,
        explanation: "One criteria is: Secure 6% of valid votes polled in the State at a general election to the Legislative Assembly AND win at least 2 seats."
    },
    {
        id: 33,
        question: "The rise of regional parties post-1967 is attributed to:",
        options: [
            "Decline of Congress dominance",
            "Rise of regional aspirations",
            "Success of coalition politics",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "All these factors contributed to the proliferation of regional parties."
    },
    {
        id: 34,
        question: "Which of the following is NOT a feature of regional parties?",
        options: [
            "Regional identity is key",
            "Normally focus on Local/State issues",
            "Ideologically always aligned with the Left",
            "Limited electoral base"
        ],
        correctAnswer: 2,
        explanation: "Regional parties can have various ideologies (Dravidian, ethno-centric, secular, right-wing, etc.), not just Left."
    },
    {
        id: 35,
        question: "Regional parties have strengthened Indian Federalism by:",
        options: [
            "Demanding more autonomy for states",
            "Checking the monopoly of the Centre",
            "Bringing local issues to Parliament",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "They have played a crucial role in deepening federalism and decentralization."
    },
    {
        id: 36,
        question: "Which was the first regional party to form a government in a state on its own?",
        options: [
            "DMK in Tamil Nadu",
            "TDP in Andhra Pradesh",
            "Akali Dal in Punjab",
            "National Conference in J&K"
        ],
        correctAnswer: 0,
        explanation: "DMK (Dravida Munnetra Kazhagam) formed the government in Madras State (TN) in 1967, marking a shift."
    },
    {
        id: 37,
        question: "A recognized State Party gets the privilege of:",
        options: [
            "Exclusive allotted symbol in that state",
            "Free airtime on Doordarshan/AIR",
            "Requires only 1 proposer for nomination",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "Recognition brings symbol reservation, broadcast time, and easier nomination rules."
    },
    {
        id: 38,
        question: "Which scholar described Indian politics as 'federalized' due to regional parties?",
        options: [
            "Rajni Kothari",
            "Paul Brass",
            "Yogendra Yadav",
            "Christophe Jaffrelot"
        ],
        correctAnswer: 2,
        explanation: "Scholars like Yogendra Yadav have analyzed the 'third electoral system' and federalization of politics."
    },
    {
        id: 39,
        question: "Can a Regional Party become a National Party?",
        options: [
            "No, never",
            "Yes, if it meets ECI criteria across 4 states",
            "Only if it merges with Congress or BJP",
            "Only by Supreme Court order"
        ],
        correctAnswer: 1,
        explanation: "Yes, parties like AAP, BSP, etc., started regionally and achieved National status (though status changes based on performance)."
    },
    {
        id: 40,
        question: "Regional parties often focus on which type of mobilization?",
        options: [
            "International relations",
            "Caste, Language, or Ethnic identity",
            "Space exploration",
            "Global trade"
        ],
        correctAnswer: 1,
        explanation: "Identity politics (Linguistic, Caste, Tribal) is a common mobilization tool."
    },
    {
        id: 41,
        question: "The 'United Front' (1996) government was largely a coalition of:",
        options: [
            "Congress and BJP",
            "Regional Parties supported by Congress",
            "Communist Parties only",
            "Military leaders"
        ],
        correctAnswer: 1,
        explanation: "It was a coalition of 13 parties, mostly regional (TDP, DMK, AGP etc.), supported by Congress from outside."
    },
    {
        id: 42,
        question: "Regional parties play a 'Kingmaker' role in:",
        options: [
            "Presidential Systems",
            "Coalition Governments at the Centre",
            "Unitary States",
            "Local Municipalities only"
        ],
        correctAnswer: 1,
        explanation: "In hung parliaments, their support is crucial for forming the central government."
    },
    {
        id: 43,
        question: "Which article allows restrictions on regionalism in the interest of 'integrity of India'?",
        options: [
            "Article 19(2)",
            "Article 370",
            "Article 14",
            "Article 25"
        ],
        correctAnswer: 0,
        explanation: "Reasonable restrictions on Freedom of Speech/Assembly/Association can be imposed for sovereignty and integrity of India (16th Amendment)."
    },
    {
        id: 44,
        question: "The trend of 'Regionalisation of National Parties' refers to:",
        options: [
            "National parties forming state units with autonomy",
            "National parties shutting down",
            "National parties ignoring states",
            "Regional parties becoming national"
        ],
        correctAnswer: 0,
        explanation: "National parties adapting to local realities and giving autonomy to state units to compete with regional forces."
    },
    {
        id: 45,
        question: "Which movement largely birthed the AGP (Asom Gana Parishad)?",
        options: [
            "Naxalite Movement",
            "Assam Agitation (Anti-foreigners movement)",
            "Environment movement",
            "Dravidian movement"
        ],
        correctAnswer: 1,
        explanation: "AGP was born out of the 6-year long Assam Agitation led by AASU against illegal immigration."
    },

    // TOPIC 4: ELECTIONS (15 Questions)
    {
        id: 46,
        question: "Which Part of the Constitution deals with Elections?",
        options: [
            "Part XIV",
            "Part XV",
            "Part XVI",
            "Part XVII"
        ],
        correctAnswer: 1,
        explanation: "Part XV (Articles 324-329) deals with Elections."
    },
    {
        id: 47,
        question: "Article 324 vests the power of superintendence, direction, and control of elections in:",
        options: [
            "Parliament",
            "Supreme Court",
            "Election Commission of India",
            "President"
        ],
        correctAnswer: 2,
        explanation: "Article 324 creates the ECI."
    },
    {
        id: 48,
        question: "The Election Commission conducts elections for:",
        options: [
            "Parliament and State Legislatures only",
            "Parliament, State Legislatures, President, and Vice President",
            "Panchayats and Municipalities also",
            "Only Lok Sabha"
        ],
        correctAnswer: 1,
        explanation: "ECI is responsible for Parliament, State Legislatures, President, and VP. Local bodies are managed by State Election Commissions."
    },
    {
        id: 49,
        question: "Article 326 guarantees:",
        options: [
            "Reservation for SC/STs",
            "Universal Adult Suffrage",
            "Right to property",
            "Powers of ECI"
        ],
        correctAnswer: 1,
        explanation: "Article 326 states that elections to LS and Assemblies shall be on the basis of adult suffrage (18+ years)."
    },
    {
        id: 50,
        question: "Who prepares the electoral rolls for Parliament elections?",
        options: [
            "Census Commissioner",
            "Election Commission of India",
            "Delimitation Commission",
            "State Government"
        ],
        correctAnswer: 1,
        explanation: "Preparation of electoral rolls is under the superintendence of ECI (Art 324)."
    },
    {
        id: 51,
        question: "The 'Model Code of Conduct' comes into force:",
        options: [
            "Immediately on announcement of election schedule by ECI",
            "From the date of notification by President",
            "From the last date of nomination",
            "Only on polling day"
        ],
        correctAnswer: 0,
        explanation: "It applies from the moment the ECI announces the election schedule."
    },
    {
        id: 52,
        question: "Which Act deals with the preparation of electoral rolls and qualification of voters?",
        options: [
            "Representation of the People Act, 1950",
            "Representation of the People Act, 1951",
            "Presidential and Vice-Presidential Elections Act, 1952",
            "Delimitation Act, 2002"
        ],
        correctAnswer: 0,
        explanation: "RPA 1950 deals with allocation of seats, delimitation, and preparation of electoral rolls. RPA 1951 deals with conduct of elections."
    },
    {
        id: 53,
        question: "Article 329 bars the interference of courts in:",
        options: [
            "Election expenses",
            "Electoral disputes",
            "Electoral matters like delimitation of constituencies",
            "Model Code violations"
        ],
        correctAnswer: 2,
        explanation: "Art 329(a): Validity of any law relating to delimitation or allotment of seats cannot be questioned in any court."
    },
    {
        id: 54,
        question: "An election petition calling in question an election to Parliament is presented to:",
        options: [
            "Election Commission",
            "Supreme Court directly",
            "The High Court",
            "District Court"
        ],
        correctAnswer: 2,
        explanation: "Election petitions are heard by the High Court (RPA 1951)."
    },
    {
        id: 55,
        question: "The 'First-Past-The-Post' system is used for:",
        options: [
            "Presidential Election",
            "Rajya Sabha Election",
            "Lok Sabha Election",
            "Vice-Presidential Election"
        ],
        correctAnswer: 2,
        explanation: "Lok Sabha and Assembly elections use FPTP. President/RS use Proportional Representation."
    },
    {
        id: 56,
        question: "Right to Vote in India is a:",
        options: [
            "Fundamental Right",
            "Natural Right",
            "Constitutional Right / Statutory Right",
            "Human Right"
        ],
        correctAnswer: 2,
        explanation: "Often debated. UPSC key has called it a Constitutional Right (Art 326) or Statutory Right (RPA). It is NOT a Fundamental Right."
    },
    {
        id: 57,
        question: "Who has the power to make provisions with respect to elections to Legislatures?",
        options: [
            "Election Commission",
            "Parliament",
            "President",
            "Supreme Court"
        ],
        correctAnswer: 1,
        explanation: "Article 327 empowers Parliament to make laws relating to all matters concerning elections."
    },
    {
        id: 58,
        question: "The provision for 'NOTA' (None Of The Above) was introduced following which judgment?",
        options: [
            "Lily Thomas case",
            "PUCL v. Union of India (2013)",
            "ADR v. Union of India",
            "Indra Sawhney case"
        ],
        correctAnswer: 1,
        explanation: "The SC judgment in PUCL v. UOI (2013) directed ECI to provide the NOTA option."
    },
    {
        id: 59,
        question: "VVPAT stands for:",
        options: [
            "Voter Verdifiable Paper Audit Trail",
            "Voter Verified Paper Audit Trail",
            "Voting Verification Paper Account Trail",
            "Valid Vote Paper Audit Trail"
        ],
        correctAnswer: 1,
        explanation: "Voter Verified Paper Audit Trail."
    },
    {
        id: 60,
        question: "Is there a ceiling on election expenditure for political parties?",
        options: [
            "Yes, same as candidates",
            "Yes, 100 Crores",
            "No, there is no ceiling",
            "Yes, decided by ECI every year"
        ],
        correctAnswer: 2,
        explanation: "Under RPA 1951, there is a ceiling on candidate expenditure, but NO ceiling on election expenditure by political parties."
    }
];
