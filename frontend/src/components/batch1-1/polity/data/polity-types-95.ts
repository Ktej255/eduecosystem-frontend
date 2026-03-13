// UPSC Polity 95 Topics - Type Definitions
// For Batch 1.1 Revision Platform

export type PartId = 'I' | 'II' | 'III' | 'IV' | 'V' | 'VI' | 'VII' | 'VIII' | 'IX' | 'X' | 'XI';
export type Priority = 'High' | 'Medium' | 'Low';
export type SectionStatus = 'not-started' | 'in-progress' | 'completed' | 'platinum';
export type PointerCategory = 'Article' | 'Amendment' | 'Case' | 'Year' | 'Commission' | 'Act' | 'Person' | 'Body' | 'Fact' | 'Committee';

export interface Article {
    number: string;
    title: string;
    description: string;
}

export interface Concept {
    term: string;
    definition: string;
    example?: string;
}

export interface CurrentAffairsItem {
    id: string;
    headline: string;
    date: string;
    source: string;
    teachingHook: string;
    relatedArticles?: string[];
    caseReference?: string;
}

export interface PrelimsPointer {
    fact: string;
    category: PointerCategory;
    highlight?: boolean;
}

export interface ChapterProgress {
    readSection: SectionStatus;
    flashcards: SectionStatus;
    drill: SectionStatus;
    l1: SectionStatus;
    l2: SectionStatus;
    l3: SectionStatus;
    vsMode: SectionStatus;
    completed?: boolean;
    lastViewed?: string;
}

export interface ComparisonRow {
    aspect: string;
    columnA: string;
    columnB: string;
}

export interface ComparisonTable {
    title: string;
    columnAHeader: string;
    columnBHeader: string;
    rows: ComparisonRow[];
}

export interface PolityTopic95 {
    id: number;
    part: PartId;
    title: string;
    syllabusTag: string;

    // Static Content
    staticFocus: string;
    coreArticles: Article[];
    keyConcepts: Concept[];

    // Current Affairs
    currentAffairs: CurrentAffairsItem[];

    // Prelims Pointers
    prelimsPointers: PrelimsPointer[];

    // Optional
    comparisonTable?: ComparisonTable;

    // Metadata
    priority: Priority;
    lastUpdated: string;
    isNew?: boolean; // For newly added topics
}

export interface PolityPart {
    id: PartId;
    number: number;
    title: string;
    description: string;
    color: string;
    topicRange: [number, number];
    icon: string;
    topicCount: number;
}

// 11 Parts as per UPSC Syllabus
export const POLITY_PARTS: PolityPart[] = [
    {
        id: 'I',
        number: 1,
        title: 'Constitutional Framework',
        description: 'Historical Background to Basic Structure',
        color: 'blue',
        topicRange: [1, 12],
        icon: '📜',
        topicCount: 12
    },
    {
        id: 'II',
        number: 2,
        title: 'System of Government',
        description: 'Parliamentary, Federal & Emergency',
        color: 'indigo',
        topicRange: [13, 17],
        icon: '⚙️',
        topicCount: 5
    },
    {
        id: 'III',
        number: 3,
        title: 'Central Government',
        description: 'Vice-President to PIL',
        color: 'purple',
        topicRange: [18, 26],
        icon: '🏛️',
        topicCount: 9
    },
    {
        id: 'IV',
        number: 4,
        title: 'State Government',
        description: 'Governor to Special Provisions',
        color: 'violet',
        topicRange: [27, 33],
        icon: '🏢',
        topicCount: 7
    },
    {
        id: 'V',
        number: 5,
        title: 'Local Government',
        description: 'Panchayati Raj & Municipalities',
        color: 'green',
        topicRange: [34, 35],
        icon: '🏘️',
        topicCount: 2
    },
    {
        id: 'VI',
        number: 6,
        title: 'Union Territories and Special Areas',
        description: 'UTs, Scheduled & Tribal Areas',
        color: 'teal',
        topicRange: [36, 37],
        icon: '🗺️',
        topicCount: 2
    },
    {
        id: 'VII',
        number: 7,
        title: 'Constitutional Bodies',
        description: 'Election Commission to Advocate General',
        color: 'amber',
        topicRange: [38, 49],
        icon: '🔰',
        topicCount: 12
    },
    {
        id: 'VIII',
        number: 8,
        title: 'Non-Constitutional Bodies',
        description: 'NITI Aayog to NDMA',
        color: 'orange',
        topicRange: [50, 59],
        icon: '🏗️',
        topicCount: 10
    },
    {
        id: 'IX',
        number: 9,
        title: 'Other Constitutional Dimensions',
        description: 'Co-operative Societies to Official Language',
        color: 'rose',
        topicRange: [60, 61],
        icon: '📋',
        topicCount: 2
    },
    {
        id: 'X',
        number: 10,
        title: 'Political Dynamics',
        description: 'Public Services to Electoral Reforms',
        color: 'cyan',
        topicRange: [62, 69],
        icon: '🗳️',
        topicCount: 8
    },
    {
        id: 'XI',
        number: 11,
        title: 'Working of the Constitution',
        description: 'Anti-Defection Law to Civil Service Reforms',
        color: 'emerald',
        topicRange: [70, 95],
        icon: '⚖️',
        topicCount: 26
    },
];

// All 95 topic titles organized by Part
// All 95 topic titles organized by Part
export const TOPIC_TITLES: { id: number; title: string; part: PartId }[] = [
    // Part I: Constitutional Framework (1-12)
    { id: 1, title: 'Historical Background', part: 'I' },
    { id: 2, title: 'Making of the Constitution', part: 'I' },
    { id: 3, title: 'Concept of the Constitution', part: 'I' },
    { id: 4, title: 'Salient Features of the Constitution', part: 'I' },
    { id: 5, title: 'Preamble of the Constitution', part: 'I' },
    { id: 6, title: 'Union and its Territory', part: 'I' },
    { id: 7, title: 'Citizenship', part: 'I' },
    { id: 8, title: 'Fundamental Rights', part: 'I' },
    { id: 9, title: 'Directive Principles of State Policy', part: 'I' },
    { id: 10, title: 'Fundamental Duties', part: 'I' },
    { id: 11, title: 'Amendment of the Constitution', part: 'I' },
    { id: 12, title: 'Basic Structure of the Constitution', part: 'I' },

    // Part II: System of Government (13-17)
    { id: 13, title: 'Parliamentary System', part: 'II' },
    { id: 14, title: 'Federal System', part: 'II' },
    { id: 15, title: 'Centre-State Relations', part: 'II' },
    { id: 16, title: 'Inter-State Relations', part: 'II' },
    { id: 17, title: 'Emergency Provisions', part: 'II' },

    // Part III: Central Government (18-29)
    { id: 18, title: 'President', part: 'III' },
    { id: 19, title: 'Vice-President', part: 'III' },
    { id: 20, title: 'Prime Minister', part: 'III' },
    { id: 21, title: 'Central Council of Ministers', part: 'III' },
    { id: 22, title: 'Cabinet Committees', part: 'III' },
    { id: 23, title: 'Parliament', part: 'III' },
    { id: 24, title: 'Parliamentary Committees', part: 'III' },
    { id: 25, title: 'Indian Parliamentary Group', part: 'III' },
    { id: 26, title: 'Supreme Court', part: 'III' },
    { id: 27, title: 'Judicial Review', part: 'III' },
    { id: 28, title: 'Judicial Activism', part: 'III' },
    { id: 29, title: 'Public Interest Litigation', part: 'III' },

    // Part IV: State Government (30-38)
    { id: 30, title: 'Governor', part: 'IV' },
    { id: 31, title: 'Chief Minister', part: 'IV' },
    { id: 32, title: 'State Council of Ministers', part: 'IV' },
    { id: 33, title: 'State Legislature', part: 'IV' },
    { id: 34, title: 'High Court', part: 'IV' },
    { id: 35, title: 'Subordinate Courts', part: 'IV' },
    { id: 36, title: 'Tribunals', part: 'IV' },
    { id: 37, title: 'Consumer Commissions', part: 'IV' },
    { id: 38, title: 'Lok Adalats and Other Courts', part: 'IV' },

    // Part V: Local Government (39-40)
    { id: 39, title: 'Panchayati Raj', part: 'V' },
    { id: 40, title: 'Municipalities', part: 'V' },

    // Part VI: Union Territories and Special Areas (41-42)
    { id: 41, title: 'Union Territories', part: 'VI' },
    { id: 42, title: 'Scheduled and Tribal Areas', part: 'VI' },

    // Part VII: Constitutional Bodies (43-55)
    { id: 43, title: 'Election Commission', part: 'VII' },
    { id: 44, title: 'Union Public Service Commission (UPSC)', part: 'VII' },
    { id: 45, title: 'State Public Service Commission (SPSC)', part: 'VII' },
    { id: 46, title: 'Finance Commission', part: 'VII' },
    { id: 47, title: 'Goods and Services Tax (GST) Council', part: 'VII' },
    { id: 48, title: 'National Commission for SCs', part: 'VII' },
    { id: 49, title: 'National Commission for STs', part: 'VII' },
    { id: 50, title: 'National Commission for BCs', part: 'VII' },
    { id: 51, title: 'Special Officer for Linguistic Minorities', part: 'VII' },
    { id: 52, title: 'Comptroller and Auditor General of India (CAG)', part: 'VII' },
    { id: 53, title: 'Attorney General of India', part: 'VII' },
    { id: 54, title: 'Advocate General of the State', part: 'VII' },

    // Part VIII: Non-Constitutional Bodies (56-72)
    // NOTE: User explicitly requested this section to start from 56
    // Skipping 55 to align with user's implicit numbering if needed, or filling.
    // User list has 54 items before this section starts at 56?
    // Let's count:
    // I: 1-12 (12)
    // II: 13-17 (5)
    // III: 18-29 (12)
    // IV: 30-38 (9)
    // V: 39-40 (2)
    // VI: 41-42 (2)
    // VII: 43-54 (12) -> Total 54 items.
    // So "55" is technically missing in user list or logic.
    // However, I will map strictly to user's numbers. 
    // If user says "56. NITI Aayog", then 55 is a gap or ghost topic.
    // I will insert a placeholder for 55 to maintain index integrity.
    { id: 55, title: 'Constitutional Bodies Buffer', part: 'VII' }, // Placeholder/Buffer

    { id: 56, title: 'NITI Aayog', part: 'VIII' },
    { id: 57, title: 'National Human Rights Commission (NHRC)', part: 'VIII' },
    { id: 58, title: 'State Human Rights Commission (SHRC)', part: 'VIII' },
    { id: 59, title: 'National Commission for Women', part: 'VIII' },
    { id: 60, title: 'National Commission for Protection of Child Rights', part: 'VIII' },
    { id: 61, title: 'National Commission for Minorities', part: 'VIII' },
    { id: 62, title: 'Central Information Commission', part: 'VIII' },
    { id: 63, title: 'State Information Commission', part: 'VIII' },
    { id: 64, title: 'Central Vigilance Commission', part: 'VIII' },
    { id: 65, title: 'Central Bureau of Investigation', part: 'VIII' },
    { id: 66, title: 'Lokpal and Lokayuktas', part: 'VIII' },
    { id: 67, title: 'National Investigation Agency', part: 'VIII' },
    { id: 68, title: 'National Disaster Management Authority', part: 'VIII' },
    { id: 69, title: 'Bar Council of India', part: 'VIII' },
    { id: 70, title: 'Law Commission of India', part: 'VIII' },
    { id: 71, title: 'Delimitation Commission of India', part: 'VIII' },
    { id: 72, title: 'North Eastern Council', part: 'VIII' },

    // Part IX: Other Constitutional Dimensions (73-78)
    { id: 73, title: 'Co-operative Societies', part: 'IX' },
    { id: 74, title: 'Official Language', part: 'IX' },
    { id: 75, title: 'Public Services', part: 'IX' },
    { id: 76, title: 'Rights and Liabilities of the Government', part: 'IX' },
    { id: 77, title: 'Special Provisions Relating to Certain Classes', part: 'IX' },
    { id: 78, title: 'Special Provisions for Some States', part: 'IX' },

    // Part X: Political Dynamics (79-89)
    { id: 79, title: 'Political Parties', part: 'X' },
    { id: 80, title: 'Role of Regional Parties', part: 'X' },
    { id: 81, title: 'Elections', part: 'X' },
    { id: 82, title: 'Election Laws', part: 'X' },
    { id: 83, title: 'Electoral Reforms', part: 'X' },
    { id: 84, title: 'Voting Behaviour', part: 'X' },
    { id: 85, title: 'Coalition Government', part: 'X' },
    { id: 86, title: 'Anti-Defection Law', part: 'X' },
    { id: 87, title: 'Pressure Groups', part: 'X' },
    { id: 88, title: 'National Integration', part: 'X' },
    { id: 89, title: 'Foreign Policy', part: 'X' },

    // Part XI: Working of the Constitution (90)
    { id: 90, title: 'National Commission to Review the Working of the Constitution', part: 'XI' },

    // Part XII: Judgements & Doctrines (91-94)
    // NOTE: User lists this as Part XII
    { id: 91, title: 'Landmark Judgements and Their Impact', part: 'XI' }, // Keeping PartID struct for compatibility
    { id: 92, title: 'Judgements Expanding the Scope of Article 21', part: 'XI' },
    { id: 93, title: 'Judgements Relating to the Amendments', part: 'XI' },
    { id: 94, title: 'Important Doctrines of Constitutional Interpretation', part: 'XI' },

    // Part XIII: Comparison (95)
    { id: 95, title: 'World Constitutions', part: 'XI' },
];

// Helper functions
export function getPartById(partId: PartId): PolityPart | undefined {
    return POLITY_PARTS.find(p => p.id === partId);
}

export function getTopicsByPart(partId: PartId): { id: number; title: string; part: PartId }[] {
    return TOPIC_TITLES.filter(t => t.part === partId);
}

export function getPartColors(color: string) {
    const colors: Record<string, { bg: string; text: string; border: string; light: string; gradient: string }> = {
        blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-500', light: 'bg-blue-50', gradient: 'from-blue-500 to-blue-600' },
        indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-500', light: 'bg-indigo-50', gradient: 'from-indigo-500 to-indigo-600' },
        purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-500', light: 'bg-purple-50', gradient: 'from-purple-500 to-purple-600' },
        violet: { bg: 'bg-violet-600', text: 'text-violet-600', border: 'border-violet-500', light: 'bg-violet-50', gradient: 'from-violet-500 to-violet-600' },
        green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-500', light: 'bg-green-50', gradient: 'from-green-500 to-green-600' },
        teal: { bg: 'bg-teal-600', text: 'text-teal-600', border: 'border-teal-500', light: 'bg-teal-50', gradient: 'from-teal-500 to-teal-600' },
        amber: { bg: 'bg-amber-600', text: 'text-amber-600', border: 'border-amber-500', light: 'bg-amber-50', gradient: 'from-amber-500 to-amber-600' },
        orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-500', light: 'bg-orange-50', gradient: 'from-orange-500 to-orange-600' },
        rose: { bg: 'bg-rose-600', text: 'text-rose-600', border: 'border-rose-500', light: 'bg-rose-50', gradient: 'from-rose-500 to-rose-600' },
        cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600', border: 'border-cyan-500', light: 'bg-cyan-50', gradient: 'from-cyan-500 to-cyan-600' },
        emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-500', light: 'bg-emerald-50', gradient: 'from-emerald-500 to-emerald-600' },
    };
    return colors[color] || colors.blue;
}
