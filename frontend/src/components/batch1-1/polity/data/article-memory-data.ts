export type ArticleGroup =
    | 'Union & Territory'
    | 'Citizenship'
    | 'Fundamental Rights'
    | 'DPSP'
    | 'Duties'
    | 'President'
    | 'Parliament'
    | 'Judiciary'
    | 'Emergency'
    | 'Constitutional Bodies';

export interface ArticleMemoryItem {
    articleNumber: string;
    provision: string;
    mnemonic: string;
    group: ArticleGroup;
    complexity: 'Easy' | 'Medium' | 'Hard';
    keywords?: string[]; // For partial matching
}

export const ARTICLE_MEMORY_DATA: ArticleMemoryItem[] = [
    // --- UNION & TERRITORY (1-4) ---
    {
        articleNumber: '1',
        provision: 'Name and territory of the Union',
        mnemonic: 'India that is Bharat (Rule #1)',
        group: 'Union & Territory',
        complexity: 'Easy'
    },
    {
        articleNumber: '3',
        provision: 'Formation of new States and alteration of areas, boundaries or names',
        mnemonic: 'Tree (3) branches growing/changing shape -> New States formed internally.',
        group: 'Union & Territory',
        complexity: 'Medium'
    },

    // --- CITIZENSHIP (5-11) ---
    {
        articleNumber: '5',
        provision: 'Citizenship at the commencement of the Constitution',
        mnemonic: 'Five fingers of a hand -> Staring point/Commencement.',
        group: 'Citizenship',
        complexity: 'Medium'
    },
    {
        articleNumber: '11',
        provision: 'Parliament to regulate the right of citizenship by law',
        mnemonic: '1+1 = 2 (Parliament + Law) decides everything.',
        group: 'Citizenship',
        complexity: 'Medium'
    },

    // --- FUNDAMENTAL RIGHTS (12-35) ---
    {
        articleNumber: '12',
        provision: 'Definition of State',
        mnemonic: 'The Dozen (12) agencies that act as "State".',
        group: 'Fundamental Rights',
        complexity: 'Easy'
    },
    {
        articleNumber: '13',
        provision: 'Laws inconsistent with Fundamental Rights (Judicial Review)',
        mnemonic: 'Unlucky 13 for any law that violates FRs.',
        group: 'Fundamental Rights',
        complexity: 'Medium'
    },
    {
        articleNumber: '14',
        provision: 'Equality before Law',
        mnemonic: 'One for All (14) -> Equality.',
        group: 'Fundamental Rights',
        complexity: 'Easy'
    },
    {
        articleNumber: '17',
        provision: 'Abolition of Untouchability',
        mnemonic: 'Sector 17 -> Danger -> Untouchability is a crime.',
        group: 'Fundamental Rights',
        complexity: 'Easy'
    },
    {
        articleNumber: '19',
        provision: 'Protection of 6 Freedom Rights',
        mnemonic: '19th Century Revolution -> Freedom of Speech, etc.',
        group: 'Fundamental Rights',
        complexity: 'Easy'
    },
    {
        articleNumber: '21',
        provision: 'Protection of Life and Personal Liberty',
        mnemonic: '21st Birthday -> Start of Adult Life & Liberty.',
        group: 'Fundamental Rights',
        complexity: 'Easy'
    },
    {
        articleNumber: '21A',
        provision: 'Right to Education',
        mnemonic: 'A for Apple -> Education (Added by 86th AA).',
        group: 'Fundamental Rights',
        complexity: 'Easy'
    },
    {
        articleNumber: '32',
        provision: 'Remedies for enforcement of rights (Heart & Soul)',
        mnemonic: '32 Teeth -> Guarding the mouth/Constitution.',
        group: 'Fundamental Rights',
        complexity: 'Easy'
    },

    // --- DPSP (36-51) ---
    {
        articleNumber: '39A',
        provision: 'Equal Justice and Free Legal Aid',
        mnemonic: '39 Steps to Free Justice.',
        group: 'DPSP',
        complexity: 'Medium'
    },
    {
        articleNumber: '40',
        provision: 'Organisation of Village Panchayats',
        mnemonic: 'Ali Baba and 40 Thieves -> Start of Politics/Panchayat.',
        group: 'DPSP',
        complexity: 'Easy'
    },
    {
        articleNumber: '44',
        provision: 'Uniform Civil Code',
        mnemonic: '4 = 4 -> Uniform digits -> Uniform Code.',
        group: 'DPSP',
        complexity: 'Easy'
    },
    {
        articleNumber: '50',
        provision: 'Separation of Judiciary from Executive',
        mnemonic: '50-50 Split between Judges and Minister.',
        group: 'DPSP',
        complexity: 'Easy'
    },

    // --- PRESIDENT & VP ---
    {
        articleNumber: '52',
        provision: 'The President of India',
        mnemonic: '52 weeks in a year -> President is there all year.',
        group: 'President',
        complexity: 'Easy'
    },
    {
        articleNumber: '61',
        provision: 'Procedure for Impeachment of the President',
        mnemonic: '61 -> VI (Six-One) -> VIctim -> President is victim of impeachment.',
        group: 'President',
        complexity: 'Hard'
    },
    {
        articleNumber: '72',
        provision: 'Power of President to grant pardons',
        mnemonic: '72 (Saath Do) -> "Give Support" -> President helps.',
        group: 'President',
        complexity: 'Medium'
    },

    // --- PARLIAMENT ---
    {
        articleNumber: '76',
        provision: 'Attorney General for India',
        mnemonic: 'AG -> 76 (Seven-Six) -> Strongest Lawyer.',
        group: 'Constitutional Bodies',
        complexity: 'Medium'
    },
    {
        articleNumber: '110',
        provision: 'Definition of Money Bill',
        mnemonic: 'Rs. 110 -> Money.',
        group: 'Parliament',
        complexity: 'Easy'
    },
    {
        articleNumber: '112',
        provision: 'Annual Financial Statement (Budget)',
        mnemonic: '1+1=2 -> Double Check Finances -> Budget.',
        group: 'Parliament',
        complexity: 'Medium'
    },
    {
        articleNumber: '123',
        provision: 'Power of President to promulgate Ordinances',
        mnemonic: '1-2-3 Go! -> Quick Law making.',
        group: 'President',
        complexity: 'Easy'
    },

    // --- JUDICIARY & CAG ---
    {
        articleNumber: '148',
        provision: 'Comptroller and Auditor-General of India',
        mnemonic: '1-4-8 => "I For Audit".',
        group: 'Constitutional Bodies',
        complexity: 'Medium'
    },

    // --- EMERGENCY ---
    {
        articleNumber: '352',
        provision: 'Proclamation of Emergency (National)',
        mnemonic: '352 -> 3 forces (Land, Air, Sea) in danger -> National Emergency.',
        group: 'Emergency',
        complexity: 'Medium'
    },
    {
        articleNumber: '356',
        provision: 'Provisions in case of failure of constitutional machinery in States (President\'s Rule)',
        mnemonic: '+4 rule (352+4 = 356) -> State Emergency.',
        group: 'Emergency',
        complexity: 'Medium'
    },
    {
        articleNumber: '360',
        provision: 'Provisions as to Financial Emergency',
        mnemonic: '+4 rule (356+4 = 360) -> 360 degree financial circle.',
        group: 'Emergency',
        complexity: 'Medium'
    },
    {
        articleNumber: '368',
        provision: 'Power of Parliament to amend the Constitution',
        mnemonic: '368 -> 3(rd) 6(ix) 8(ght) -> Fix it -> Amend it.',
        group: 'Parliament',
        complexity: 'Medium'
    }
];
