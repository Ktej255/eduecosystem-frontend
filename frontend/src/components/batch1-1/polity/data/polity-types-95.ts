// UPSC Polity 95 Topics - Type Definitions
// For Batch 1.1 Revision Platform

export type PartId = 'I' | 'II' | 'III' | 'IV' | 'V' | 'VI' | 'VII' | 'VIII' | 'IX' | 'X' | 'XI';
export type Priority = 'High' | 'Medium' | 'Low';
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
export const TOPIC_TITLES: { id: number; title: string; part: PartId; blockId: number }[] = [
    // Part I: Constitutional Framework (1-12)
    { id: 1, title: 'Historical Background', part: 'I', blockId: 1 },
    { id: 2, title: 'Making of the Constitution', part: 'I', blockId: 1 },
    { id: 3, title: 'Concept of the Constitution', part: 'I', blockId: 2 },
    { id: 4, title: 'Salient Features of the Constitution', part: 'I', blockId: 2 },
    { id: 5, title: 'Preamble of the Constitution', part: 'I', blockId: 3 },
    { id: 6, title: 'Union and its Territory', part: 'I', blockId: 3 },
    { id: 7, title: 'Citizenship', part: 'I', blockId: 4 },
    { id: 8, title: 'Fundamental Rights', part: 'I', blockId: 4 },
    { id: 9, title: 'Directive Principles of State Policy', part: 'I', blockId: 5 },
    { id: 10, title: 'Fundamental Duties', part: 'I', blockId: 5 },
    { id: 11, title: 'Amendment of the Constitution', part: 'I', blockId: 6 },
    { id: 12, title: 'Basic Structure of the Constitution', part: 'I', blockId: 6 },

    // Part II: System of Government (13-17)
    { id: 13, title: 'Parliamentary System', part: 'II', blockId: 7 },
    { id: 14, title: 'Federal System', part: 'II', blockId: 7 },
    { id: 15, title: 'Centre-State Relations', part: 'II', blockId: 8 },
    { id: 16, title: 'Inter-State Relations', part: 'II', blockId: 8 },
    { id: 17, title: 'Emergency Provisions', part: 'II', blockId: 9 },

    // Part III: Central Government (18-29)
    { id: 18, title: 'President', part: 'III', blockId: 9 },
    { id: 19, title: 'Vice-President', part: 'III', blockId: 10 },
    { id: 20, title: 'Prime Minister', part: 'III', blockId: 10 },
    { id: 21, title: 'Central Council of Ministers', part: 'III', blockId: 11 },
    { id: 22, title: 'Cabinet Committees', part: 'III', blockId: 11 },
    { id: 23, title: 'Parliament', part: 'III', blockId: 12 },
    { id: 24, title: 'Parliamentary Committees', part: 'III', blockId: 12 },
    { id: 25, title: 'Indian Parliamentary Group', part: 'III', blockId: 13 },
    { id: 26, title: 'Supreme Court', part: 'III', blockId: 13 },
    { id: 27, title: 'Judicial Review', part: 'III', blockId: 14 },
    { id: 28, title: 'Judicial Activism', part: 'III', blockId: 14 },
    { id: 29, title: 'Public Interest Litigation', part: 'III', blockId: 15 },

    // Part IV: State Government (30-38)
    { id: 30, title: 'Governor', part: 'IV', blockId: 15 },
    { id: 31, title: 'Chief Minister', part: 'IV', blockId: 16 },
    { id: 32, title: 'State Council of Ministers', part: 'IV', blockId: 16 },
    { id: 33, title: 'State Legislature', part: 'IV', blockId: 17 },
    { id: 34, title: 'High Court', part: 'IV', blockId: 17 },
    { id: 35, title: 'Subordinate Courts', part: 'IV', blockId: 18 },
    { id: 36, title: 'Tribunals', part: 'IV', blockId: 18 },
    { id: 37, title: 'Consumer Commissions', part: 'IV', blockId: 19 },
    { id: 38, title: 'Lok Adalats and Other Courts', part: 'IV', blockId: 19 },

    // Part V: Local Government (39-40)
    { id: 39, title: 'Panchayati Raj', part: 'V', blockId: 20 },
    { id: 40, title: 'Municipalities', part: 'V', blockId: 20 },

    // Part VI: Union Territories and Special Areas (41-42)
    { id: 41, title: 'Union Territories', part: 'VI', blockId: 21 },
    { id: 42, title: 'Scheduled and Tribal Areas', part: 'VI', blockId: 21 },

    // Part VII: Constitutional Bodies (43-55)
    { id: 43, title: 'Election Commission', part: 'VII', blockId: 22 },
    { id: 44, title: 'Union Public Service Commission (UPSC)', part: 'VII', blockId: 22 },
    { id: 45, title: 'State Public Service Commission (SPSC)', part: 'VII', blockId: 23 },
    { id: 46, title: 'Finance Commission', part: 'VII', blockId: 23 },
    { id: 47, title: 'Goods and Services Tax (GST) Council', part: 'VII', blockId: 24 },
    { id: 48, title: 'National Commission for SCs', part: 'VII', blockId: 24 },
    { id: 49, title: 'National Commission for STs', part: 'VII', blockId: 25 },
    { id: 50, title: 'National Commission for BCs', part: 'VII', blockId: 25 },
    { id: 51, title: 'Special Officer for Linguistic Minorities', part: 'VII', blockId: 26 },
    { id: 52, title: 'Comptroller and Auditor General of India (CAG)', part: 'VII', blockId: 26 },
    { id: 53, title: 'Attorney General of India', part: 'VII', blockId: 27 },
    { id: 54, title: 'Advocate General of the State', part: 'VII', blockId: 27 },

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
    { id: 55, title: 'Constitutional Bodies Buffer', part: 'VII', blockId: 28 }, // Placeholder/Buffer

    { id: 56, title: 'NITI Aayog', part: 'VIII', blockId: 28 },
    { id: 57, title: 'National Human Rights Commission (NHRC)', part: 'VIII', blockId: 29 },
    { id: 58, title: 'State Human Rights Commission (SHRC)', part: 'VIII', blockId: 29 },
    { id: 59, title: 'National Commission for Women', part: 'VIII', blockId: 30 },
    { id: 60, title: 'National Commission for Protection of Child Rights', part: 'VIII', blockId: 30 },
    { id: 61, title: 'National Commission for Minorities', part: 'VIII', blockId: 31 },
    { id: 62, title: 'Central Information Commission', part: 'VIII', blockId: 31 },
    { id: 63, title: 'State Information Commission', part: 'VIII', blockId: 32 },
    { id: 64, title: 'Central Vigilance Commission', part: 'VIII', blockId: 32 },
    { id: 65, title: 'Central Bureau of Investigation', part: 'VIII', blockId: 33 },
    { id: 66, title: 'Lokpal and Lokayuktas', part: 'VIII', blockId: 33 },
    { id: 67, title: 'National Investigation Agency', part: 'VIII', blockId: 34 },
    { id: 68, title: 'National Disaster Management Authority', part: 'VIII', blockId: 34 },
    { id: 69, title: 'Bar Council of India', part: 'VIII', blockId: 35 },
    { id: 70, title: 'Law Commission of India', part: 'VIII', blockId: 35 },
    { id: 71, title: 'Delimitation Commission of India', part: 'VIII', blockId: 36 },
    { id: 72, title: 'North Eastern Council', part: 'VIII', blockId: 36 },

    // Part IX: Other Constitutional Dimensions (73-78)
    { id: 73, title: 'Co-operative Societies', part: 'IX', blockId: 37 },
    { id: 74, title: 'Official Language', part: 'IX', blockId: 37 },
    { id: 75, title: 'Public Services', part: 'IX', blockId: 38 },
    { id: 76, title: 'Rights and Liabilities of the Government', part: 'IX', blockId: 38 },
    { id: 77, title: 'Special Provisions Relating to Certain Classes', part: 'IX', blockId: 39 },
    { id: 78, title: 'Special Provisions for Some States', part: 'IX', blockId: 39 },

    // Part X: Political Dynamics (79-89)
    { id: 79, title: 'Political Parties', part: 'X', blockId: 40 },
    { id: 80, title: 'Role of Regional Parties', part: 'X', blockId: 40 },
    { id: 81, title: 'Elections', part: 'X', blockId: 41 },
    { id: 82, title: 'Election Laws', part: 'X', blockId: 41 },
    { id: 83, title: 'Electoral Reforms', part: 'X', blockId: 42 },
    { id: 84, title: 'Voting Behaviour', part: 'X', blockId: 42 },
    { id: 85, title: 'Coalition Government', part: 'X', blockId: 43 },
    { id: 86, title: 'Anti-Defection Law', part: 'X', blockId: 43 },
    { id: 87, title: 'Pressure Groups', part: 'X', blockId: 44 },
    { id: 88, title: 'National Integration', part: 'X', blockId: 44 },
    { id: 89, title: 'Foreign Policy', part: 'X', blockId: 45 },

    // Part XI: Working of the Constitution (90)
    { id: 90, title: 'National Commission to Review the Working of the Constitution', part: 'XI', blockId: 45 },

    // Part XII: Judgements & Doctrines (91-94)
    // NOTE: User lists this as Part XII
    { id: 91, title: 'Landmark Judgements and Their Impact', part: 'XI', blockId: 46 }, // Keeping PartID struct for compatibility
    { id: 92, title: 'Judgements Expanding the Scope of Article 21', part: 'XI', blockId: 46 },
    { id: 93, title: 'Judgements Relating to the Amendments', part: 'XI', blockId: 47 },
    { id: 94, title: 'Important Doctrines of Constitutional Interpretation', part: 'XI', blockId: 47 },

    // Part XIII: Comparison (95)
    { id: 95, title: 'World Constitutions', part: 'XI', blockId: 48 },
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
