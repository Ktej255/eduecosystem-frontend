export interface MnemonicItem {
    id: string;
    category: 'Sources' | 'Parts' | 'Schedules' | 'Writs' | 'Majorities' | 'Bodies';
    title: string;
    mnemonic: string;
    explanation: string;
    color: string;
}

export const MNEMONIC_DATA: MnemonicItem[] = [
    // --- SCHEDULES ---
    {
        id: 'schedules',
        category: 'Schedules',
        title: '12 Schedules of Indian Constitution',
        mnemonic: 'TEARS OF OLD PM',
        explanation: `
        T - Territories (1)
        E - Emoluments (2)
        A - Affirmations (3)
        R - Rajya Sabha Seats (4)
        S - Scheduled Areas (5)
        
        O - Other Scheduled Areas (6 - AMTM)
        F - Federal List (7)
        
        O - Official Languages (8)
        L - Land Reforms (9)
        D - Defection (10)
        
        P - Panchayats (11)
        M - Municipalities (12)
        `,
        color: 'bg-emerald-100 text-emerald-800'
    },
    // --- PARTS ---
    {
        id: 'parts-1-11',
        category: 'Parts',
        title: 'Parts I to XI (Union to Relations)',
        mnemonic: 'U Can Fly Directly From US to UP to Meet Child of Shyam and Ram',
        explanation: `
        U - Union & Territory (I)
        C - Citizenship (II)
        F - Fundamental Rights (III)
        D - DPSP (IV)
        F - Fundamental Duties (IV-A)
        U - Union Govt (V)
        S - State Govt (VI)
        (Part VII - Repealed)
        U - UTs (VIII)
        P - Panchayats (IX)
        M - Municipalities (IX-A)
        C - Co-operative Societies (IX-B)
        S - Scheduled & Tribal Areas (X)
        R - Relations between Centre & States (XI)
        `,
        color: 'bg-blue-100 text-blue-800'
    },
    // --- SOURCES ---
    {
        id: 'sources-uk',
        category: 'Sources',
        title: 'Borrowed from UK Constitution',
        mnemonic: 'Parle Bi-SCuit',
        explanation: `
        Par - Parliamentary Govt
        le - Legislative Procedure
        Bi - Bicameralism
        S - Single Citizenship
        C - Cabinet System
        uit - Writs (Prerogative)
        `,
        color: 'bg-indigo-100 text-indigo-800'
    },
    {
        id: 'sources-usa',
        category: 'Sources',
        title: 'Borrowed from USA Constitution',
        mnemonic: 'President Needs Fund for Removal of Present Vice-President & Judges',
        explanation: `
        President - Impeachment of President
        Fund - Fundamental Rights
        Removal - Removal of SC/HC Judges
        Present - Preamble
        Vice-President - Post of VP
        Judges - Independence of Judiciary / Judicial Review
        `,
        color: 'bg-rose-100 text-rose-800'
    },
    {
        id: 'sources-ireland',
        category: 'Sources',
        title: 'Borrowed from Ireland (Irish)',
        mnemonic: 'Elephants Default President',
        explanation: `
        Elephants - Election of President (Method)
        Default - DPSP (Directive Principles)
        President - Nomination of members to RS by President
        `,
        color: 'bg-orange-100 text-orange-800'
    },
    // --- WRITS ---
    {
        id: 'writs',
        category: 'Writs',
        title: '5 Writs (Article 32)',
        mnemonic: 'HCPM Q (High Court PM Question)',
        explanation: `
        H - Habeas Corpus (To have the body)
        M - Mandamus (We Command)
        P - Prohibition (To Forbid - Higher to Lower Court)
        C - Certiorari (To be Certified - Higher to Lower Court/Tribunal)
        Q - Quo Warranto (By what authority?)
        `,
        color: 'bg-purple-100 text-purple-800'
    },
    // --- FUNDAMENTAL RIGHTS ---
    {
        id: 'fr-foreigners',
        category: 'Bodies', // Using Bodies category loosely for Articles
        title: 'FRs Available ONLY to Citizens (Not Foreigners)',
        mnemonic: '15, 16, 19, 29, 30',
        explanation: `
        Article 15 - Prohibition of discrimination
        Article 16 - Equality of opportunity in public employment
        Article 19 - Protection of 6 freedoms
        Article 29 - Protection of language, script, culture of minorities
        Article 30 - Right of minorities to establish educational institutions
        `,
        color: 'bg-yellow-100 text-yellow-800'
    }
];
