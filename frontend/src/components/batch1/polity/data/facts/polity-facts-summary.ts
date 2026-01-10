// Polity Facts Summary - All Important Facts in One Place
// Source: Laxmikanth Indian Polity Chapters 1-6
// Perfect for Quick Revision

export interface ImportantDate {
    year: string;
    event: string;
    significance: string;
    chapter: number;
}

export interface ImportantPerson {
    name: string;
    designation: string;
    significance: string;
    chapter: number;
}

export interface ImportantAct {
    year: string;
    name: string;
    keyFeatures: string[];
    chapter: number;
}

export interface ConstitutionalArticle {
    article: string;
    subject: string;
    details: string;
    chapter: number;
}

// ==================== IMPORTANT DATES ====================
export const IMPORTANT_DATES: ImportantDate[] = [
    // PRE-INDEPENDENCE
    { year: "1600", event: "Charter to East India Company", significance: "Queen Elizabeth I granted exclusive trading rights", chapter: 1 },
    { year: "1608", event: "Britishers came to India as traders", significance: "Beginning of British presence in India", chapter: 1 },
    { year: "1765", event: "Diwani of Bengal, Bihar, Orissa", significance: "Company obtained revenue and civil justice rights", chapter: 1 },
    { year: "1773", event: "Regulating Act", significance: "First step by British Parliament to control Company", chapter: 1 },
    { year: "1774", event: "Supreme Court at Calcutta", significance: "First Supreme Court in India", chapter: 1 },
    { year: "1784", event: "Pitt's India Act", significance: "Double Government introduced", chapter: 1 },
    { year: "1813", event: "Charter Act", significance: "Trade monopoly of Company abolished", chapter: 1 },
    { year: "1833", event: "Charter Act", significance: "Governor-General of India created", chapter: 1 },
    { year: "1853", event: "Charter Act", significance: "Open competition for civil services, Legislative Council", chapter: 1 },
    { year: "1857", event: "Revolt (Sepoy Mutiny)", significance: "First War of Independence", chapter: 1 },
    { year: "1858", event: "Government of India Act", significance: "Crown Rule began, Viceroy created", chapter: 1 },
    { year: "1861", event: "Indian Councils Act", significance: "Portfolio system recognized, Decentralisation started", chapter: 1 },
    { year: "1909", event: "Indian Councils Act", significance: "Morley-Minto Reforms, Separate Electorate for Muslims", chapter: 1 },
    { year: "1919", event: "Government of India Act", significance: "Dyarchy in provinces, Bicameralism", chapter: 1 },
    { year: "1926", event: "CPSC established", significance: "Central Public Service Commission", chapter: 1 },
    { year: "1932", event: "Communal Award", significance: "Separate electorates extended to depressed classes", chapter: 1 },
    { year: "1932", event: "Poona Pact", significance: "Reserved seats instead of separate electorate for SC", chapter: 1 },
    { year: "1935", event: "Government of India Act", significance: "Provincial autonomy, Federal Court, RBI", chapter: 1 },
    { year: "1937", event: "Federal Court established", significance: "Under GoI Act 1935", chapter: 1 },

    // CONSTITUENT ASSEMBLY
    { year: "Dec 9, 1946", event: "First meeting of Constituent Assembly", significance: "207 members attended (ML boycotted)", chapter: 2 },
    { year: "Dec 11, 1946", event: "Dr. Rajendra Prasad elected", significance: "Permanent President of Assembly", chapter: 2 },
    { year: "Dec 13, 1946", event: "Objectives Resolution moved", significance: "By Jawaharlal Nehru", chapter: 2 },
    { year: "Jan 22, 1947", event: "Objectives Resolution adopted", significance: "Unanimously", chapter: 2 },
    { year: "Jun 3, 1947", event: "Mountbatten Plan", significance: "Partition plan announced", chapter: 1 },
    { year: "Jul 22, 1947", event: "National Flag adopted", significance: "By Constituent Assembly", chapter: 2 },
    { year: "Aug 15, 1947", event: "Independence Day", significance: "British rule ended", chapter: 1 },
    { year: "Aug 29, 1947", event: "Drafting Committee set up", significance: "Dr. Ambedkar as Chairman", chapter: 2 },
    { year: "Nov 26, 1949", event: "Constitution adopted", significance: "284 members signed", chapter: 2 },
    { year: "Jan 24, 1950", event: "National Anthem & Song adopted", significance: "Also first President elected", chapter: 2 },
    { year: "Jan 26, 1950", event: "Constitution enforced", significance: "Republic Day (Purna Swaraj 1930)", chapter: 2 },

    // AMENDMENTS
    { year: "1976", event: "42nd Amendment", significance: "Added Socialist, Secular, Integrity to Preamble; Mini-Constitution", chapter: 5 },
    { year: "1978", event: "44th Amendment", significance: "Right to Property removed from FR", chapter: 4 },
    { year: "1988", event: "61st Amendment", significance: "Voting age reduced 21→18", chapter: 4 },
    { year: "1992", event: "73rd & 74th Amendments", significance: "Panchayats and Municipalities", chapter: 4 },
    { year: "2011", event: "97th Amendment", significance: "Co-operative Societies", chapter: 4 },
    { year: "2015", event: "100th Amendment", significance: "India-Bangladesh territory exchange", chapter: 6 },
    { year: "2019", event: "J&K Reorganisation", significance: "J&K bifurcated into 2 UTs", chapter: 6 }
];

// ==================== FIRST HOLDERS ====================
export const FIRST_HOLDERS: ImportantPerson[] = [
    { name: "Lord Warren Hastings", designation: "First Governor-General of Bengal", significance: "Regulating Act 1773", chapter: 1 },
    { name: "Lord William Bentick", designation: "First Governor-General of India", significance: "Charter Act 1833", chapter: 1 },
    { name: "Lord Canning", designation: "First Viceroy of India", significance: "GoI Act 1858", chapter: 1 },
    { name: "Lord Canning", designation: "Last Governor-General under Company", significance: "Became first Viceroy", chapter: 1 },
    { name: "Lord Mountbatten", designation: "First Governor-General of Independent India", significance: "Also last Viceroy", chapter: 1 },
    { name: "C. Rajagopalachari", designation: "First Indian Governor-General", significance: "After Mountbatten", chapter: 1 },
    { name: "Dr. Rajendra Prasad", designation: "First President of India", significance: "Elected Jan 24, 1950", chapter: 2 },
    { name: "Jawaharlal Nehru", designation: "First Prime Minister", significance: "Sworn in by Mountbatten", chapter: 1 },
    { name: "Satyendra Prasad Sinha", designation: "First Indian in Viceroy's Executive Council", significance: "Law Member, 1909 Act", chapter: 1 },
    { name: "Dr. Sachchidananda Sinha", designation: "First (Temporary) Chairman of CA", significance: "Oldest member", chapter: 2 },
    { name: "G.V. Mavlankar", designation: "First Speaker (Dominion Legislature)", significance: "Nov 17, 1947", chapter: 2 }
];

// ==================== IMPORTANT ACTS ====================
export const IMPORTANT_ACTS: ImportantAct[] = [
    {
        year: "1773",
        name: "Regulating Act",
        keyFeatures: [
            "First step by Parliament to control Company",
            "Governor-General of Bengal + 4-member Council",
            "Supreme Court at Calcutta (1774)",
            "Prohibited private trade by servants"
        ],
        chapter: 1
    },
    {
        year: "1784",
        name: "Pitt's India Act",
        keyFeatures: [
            "Double Government (Court of Directors + Board of Control)",
            "First used 'British possessions in India'",
            "British Government got supreme control"
        ],
        chapter: 1
    },
    {
        year: "1833",
        name: "Charter Act",
        keyFeatures: [
            "Governor-General of Bengal → Governor-General of India",
            "First GG of India: Lord William Bentick",
            "Ended commercial activities of Company",
            "Laws under this Act called 'Acts' (not Regulations)"
        ],
        chapter: 1
    },
    {
        year: "1853",
        name: "Charter Act",
        keyFeatures: [
            "Separated legislative & executive functions",
            "Open competition for civil services",
            "Local representation in Legislative Council",
            "Macaulay Committee appointed (1854)"
        ],
        chapter: 1
    },
    {
        year: "1858",
        name: "Government of India Act",
        keyFeatures: [
            "Crown Rule began (after 1857 Revolt)",
            "Governor-General → Viceroy (Lord Canning first)",
            "Secretary of State for India created",
            "15-member Council of India"
        ],
        chapter: 1
    },
    {
        year: "1909",
        name: "Indian Councils Act (Morley-Minto)",
        keyFeatures: [
            "Separate electorate for Muslims",
            "Lord Minto = Father of Communal Electorate",
            "S.P. Sinha: First Indian in Viceroy's Executive Council"
        ],
        chapter: 1
    },
    {
        year: "1919",
        name: "Government of India Act (Montagu-Chelmsford)",
        keyFeatures: [
            "Dyarchy in provinces (Transferred vs Reserved)",
            "Bicameralism (Council of State + Legislative Assembly)",
            "Direct elections introduced",
            "CPSC set up in 1926"
        ],
        chapter: 1
    },
    {
        year: "1935",
        name: "Government of India Act",
        keyFeatures: [
            "321 sections, 10 schedules (longest Act)",
            "Provincial autonomy (dyarchy abolished)",
            "3 Lists: Federal (59), Provincial (54), Concurrent (36)",
            "Federal Court (1937), RBI established",
            "About 250 provisions in our Constitution"
        ],
        chapter: 1
    },
    {
        year: "1947",
        name: "Indian Independence Act",
        keyFeatures: [
            "India independent from Aug 15, 1947",
            "Partition: India and Pakistan",
            "Constituent Assemblies became sovereign",
            "Governor-General to act on advice of Cabinet"
        ],
        chapter: 1
    }
];

// ==================== SOURCES OF CONSTITUTION ====================
export const CONSTITUTION_SOURCES = [
    { source: "GoI Act 1935", features: "Federal Scheme, Judiciary, Governor, Emergency, PSC, Administrative details (250+ provisions)" },
    { source: "British Constitution", features: "Parliamentary govt, Rule of Law, Cabinet, Single citizenship, Bicameralism, Writs" },
    { source: "US Constitution", features: "Fundamental Rights, Judicial Review, Independence of Judiciary, Impeachment, Vice-President" },
    { source: "Irish Constitution", features: "DPSP, Rajya Sabha nominations, Presidential election method" },
    { source: "Canadian Constitution", features: "Strong Centre, Residuary powers to Centre, Governor appointment" },
    { source: "Australian Constitution", features: "Concurrent List, Freedom of trade, Joint sitting" },
    { source: "German Constitution", features: "Emergency provisions, suspension of FR" },
    { source: "Soviet Constitution", features: "Fundamental Duties, Justice ideals in Preamble" },
    { source: "French Constitution", features: "Republic, Liberty-Equality-Fraternity" },
    { source: "South African Constitution", features: "Amendment procedure, Rajya Sabha election" },
    { source: "Japanese Constitution", features: "Procedure established by Law" }
];

// ==================== UPSC QUESTION TREND ====================
export const UPSC_POLITY_TREND = {
    prelims: [
        { year: 2010, questions: 10 },
        { year: 2011, questions: 12 },
        { year: 2012, questions: 20 },
        { year: 2013, questions: 18 },
        { year: 2014, questions: 13 },
        { year: 2015, questions: 15 },
        { year: 2016, questions: 6 },
        { year: 2017, questions: 22 },
        { year: 2018, questions: 15 },
        { year: 2019, questions: 15 },
        { year: 2020, questions: 18 },
        { year: 2021, questions: 18 },
        { year: 2022, questions: 11 },
        { year: 2023, questions: 16 },
        { year: 2024, questions: 19 },
        { year: 2025, questions: 15 }
    ],
    mains: [
        { year: 2010, marks: 66 },
        { year: 2011, marks: 111 },
        { year: 2012, marks: 47 },
        { year: 2013, marks: 100 },
        { year: 2014, marks: 88 },
        { year: 2015, marks: 100 },
        { year: 2016, marks: 112 },
        { year: 2017, marks: 110 },
        { year: 2018, marks: 125 },
        { year: 2019, marks: 125 },
        { year: 2020, marks: 125 },
        { year: 2021, marks: 125 },
        { year: 2022, marks: 125 },
        { year: 2023, marks: 125 },
        { year: 2024, marks: 110 }
    ]
};

// ==================== LANDMARK CASES ====================
export const LANDMARK_CASES = [
    { case: "Berubari Union (1960)", ruling: "Preamble NOT part of Constitution; Cession needs Amendment", chapter: 5 },
    { case: "Kesavananda Bharati (1973)", ruling: "Preamble IS part of Constitution; Basic Structure doctrine", chapter: 4 },
    { case: "Minerva Mills (1980)", ruling: "Balance between FR and DPSP is basic structure", chapter: 4 },
    { case: "LIC of India (1995)", ruling: "Reaffirmed Preamble is integral part of Constitution", chapter: 5 }
];

// ==================== SCHEDULES ====================
export const SCHEDULES_SUMMARY = [
    { schedule: 1, subject: "Names of States & UTs", articles: "1, 4" },
    { schedule: 2, subject: "Salaries of President, Governors, Judges, CAG", articles: "59, 65, 75, etc." },
    { schedule: 3, subject: "Oaths and Affirmations", articles: "75, 84, 99, etc." },
    { schedule: 4, subject: "Allocation of Rajya Sabha seats", articles: "4, 80" },
    { schedule: 5, subject: "Scheduled Areas & Tribes", articles: "244" },
    { schedule: 6, subject: "Tribal Areas (Assam, Meghalaya, Tripura, Mizoram)", articles: "244, 275" },
    { schedule: 7, subject: "3 Lists (Union-98, State-59, Concurrent-52)", articles: "246" },
    { schedule: 8, subject: "22 Languages", articles: "344, 351" },
    { schedule: 9, subject: "Land Reform Acts (282 entries)", articles: "31-B" },
    { schedule: 10, subject: "Anti-Defection Law", articles: "102, 191" },
    { schedule: 11, subject: "Panchayat Powers (29 matters)", articles: "243-G" },
    { schedule: 12, subject: "Municipality Powers (18 matters)", articles: "243-W" }
];

export default {
    IMPORTANT_DATES,
    FIRST_HOLDERS,
    IMPORTANT_ACTS,
    CONSTITUTION_SOURCES,
    UPSC_POLITY_TREND,
    LANDMARK_CASES,
    SCHEDULES_SUMMARY
};
