// UPSC Polity 65 Topics - Foundation Architecture
// For "Mians ready Dec 2025" Batch

export type PartId = 'P0' | 'P1' | 'P2' | 'P3' | 'P4' | 'P5' | 'P6' | 'P7' | 'P8' | 'P9' | 'P10' | 'P11' | 'P12';

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

export const POLITY_PARTS: PolityPart[] = [
    { id: 'P0', number: 0, title: 'Constitutional Thinking Framework', description: 'Before studying the Constitution, understand what it is.', color: 'slate', topicRange: [1, 4], icon: '🧠', topicCount: 4 },
    { id: 'P1', number: 1, title: 'The Preamble', description: 'Soul of the Constitution', color: 'blue', topicRange: [5, 6], icon: '📜', topicCount: 2 },
    { id: 'P2', number: 2, title: 'Fundamental Rights', description: 'Articles 12 to 35', color: 'indigo', topicRange: [7, 14], icon: '🛡️', topicCount: 8 },
    { id: 'P3', number: 3, title: 'Directive Principles & Duties', description: 'Goals and Responsibilities', color: 'violet', topicRange: [15, 17], icon: '⚖️', topicCount: 3 },
    { id: 'P4', number: 4, title: 'Union Executive', description: 'President, PM, and Cabinet', color: 'purple', topicRange: [18, 23], icon: '🏛️', topicCount: 6 },
    { id: 'P5', number: 5, title: 'Parliament', description: 'Structure, Powers, and Procedures', color: 'amber', topicRange: [24, 29], icon: '⚙️', topicCount: 6 },
    { id: 'P6', number: 6, title: 'Union Judiciary', description: 'Supreme Court and High Courts', color: 'cyan', topicRange: [30, 34], icon: '⚖️', topicCount: 5 },
    { id: 'P7', number: 7, title: 'State Government', description: 'Governor, CM, and Legislature', color: 'teal', topicRange: [35, 38], icon: '🏢', topicCount: 4 },
    { id: 'P8', number: 8, title: 'Centre-State Relations', description: 'The Federal Architecture', color: 'emerald', topicRange: [39, 42], icon: '🔗', topicCount: 4 },
    { id: 'P9', number: 9, title: 'Local Government', description: '73rd and 74th Amendments', color: 'green', topicRange: [43, 45], icon: '🏘️', topicCount: 3 },
    { id: 'P10', number: 10, title: 'Constitutional Bodies', description: 'Independent Institutions', color: 'orange', topicRange: [46, 50], icon: '🔰', topicCount: 5 },
    { id: 'P11', number: 11, title: 'Emergency Provisions', description: 'Special Constitutional Areas', color: 'rose', topicRange: [51, 54], icon: '🚨', topicCount: 4 },
    { id: 'P12', number: 12, title: 'Amendment Procedure', description: 'Constitutional Evolution', color: 'red', topicRange: [55, 57], icon: '🔄', topicCount: 3 }
];

export const TOPIC_TITLES = [
    // P0
    { id: 1, title: 'What is a Constitution and Why Does It Matter', part: 'P0' },
    { id: 2, title: 'India\'s Constitutional History', part: 'P0' },
    { id: 3, title: 'The Constituent Assembly', part: 'P0' },
    { id: 4, title: 'How to Read a Constitutional Article', part: 'P0' },
    // P1
    { id: 5, title: 'The Preamble - Word by Word Analysis', part: 'P1' },
    { id: 6, title: 'Preamble - Legal Status and Basic Structure', part: 'P1' },
    // P2
    { id: 7, title: 'Article 12 and 13 - Defining State and Law', part: 'P2' },
    { id: 8, title: 'Right to Equality - Articles 14 to 18', part: 'P2' },
    { id: 9, title: 'Right to Freedom - Articles 19 to 22', part: 'P2' },
    { id: 10, title: 'Right Against Exploitation - Articles 23 to 24', part: 'P2' },
    { id: 11, title: 'Freedom of Religion - Articles 25 to 28', part: 'P2' },
    { id: 12, title: 'Cultural and Educational Rights - Articles 29 to 30', part: 'P2' },
    { id: 13, title: 'Right to Constitutional Remedies - Article 32', part: 'P2' },
    { id: 14, title: 'Article 21 Expansions - Privacy, Dignity', part: 'P2' },
    // P3
    { id: 15, title: 'Directive Principles - Articles 36 to 51', part: 'P3' },
    { id: 16, title: 'Conflict Between FRs and DPSPs', part: 'P3' },
    { id: 17, title: 'Fundamental Duties - Article 51A', part: 'P3' },
    // P4
    { id: 18, title: 'President of India', part: 'P4' },
    { id: 19, title: 'Presidential Discretion', part: 'P4' },
    { id: 20, title: 'Vice President', part: 'P4' },
    { id: 21, title: 'Prime Minister', part: 'P4' },
    { id: 22, title: 'Council of Ministers', part: 'P4' },
    { id: 23, title: 'Attorney General of India', part: 'P4' },
    // P5
    { id: 24, title: 'Lok Sabha', part: 'P5' },
    { id: 25, title: 'Rajya Sabha', part: 'P5' },
    { id: 26, title: 'Types of Bills and Procedure', part: 'P5' },
    { id: 27, title: 'Parliamentary Procedures', part: 'P5' },
    { id: 28, title: 'Parliamentary Privileges & Anti-Defection', part: 'P5' },
    { id: 29, title: 'Budget - Financial Control', part: 'P5' },
    // P6
    { id: 30, title: 'Supreme Court - Composition', part: 'P6' },
    { id: 31, title: 'Supreme Court Jurisdiction', part: 'P6' },
    { id: 32, title: 'Judicial Review', part: 'P6' },
    { id: 33, title: 'Independence of Judiciary', part: 'P6' },
    { id: 34, title: 'High Courts and Subordinate Courts', part: 'P6' },
    // P7
    { id: 35, title: 'Governor', part: 'P7' },
    { id: 36, title: 'Chief Minister and Council', part: 'P7' },
    { id: 37, title: 'State Legislature', part: 'P7' },
    { id: 38, title: 'Article 356 - President\'s Rule', part: 'P7' },
    // P8
    { id: 39, title: 'Legislative Relations', part: 'P8' },
    { id: 40, title: 'Administrative Relations', part: 'P8' },
    { id: 41, title: 'Financial Relations', part: 'P8' },
    { id: 42, title: 'Cooperative Federalism', part: 'P8' },
    // P9
    { id: 43, title: '73rd Amendment - Panchayati Raj', part: 'P9' },
    { id: 44, title: '74th Amendment - Urban Local Bodies', part: 'P9' },
    { id: 45, title: 'Challenges in Decentralisation', part: 'P9' },
    // P10
    { id: 46, title: 'Election Commission of India', part: 'P10' },
    { id: 47, title: 'CAG', part: 'P10' },
    { id: 48, title: 'UPSC', part: 'P10' },
    { id: 49, title: 'Finance Commission and NITI Aayog', part: 'P10' },
    { id: 50, title: 'Other Constitutional Bodies', part: 'P10' },
    // P11
    { id: 51, title: 'National Emergency', part: 'P11' },
    { id: 52, title: 'President\'s Rule (Federal Perspective)', part: 'P11' },
    { id: 53, title: 'Financial Emergency', part: 'P11' },
    { id: 54, title: 'Special Provisions (5th/6th Sch, 370)', part: 'P11' },
    // P12
    { id: 55, title: 'Article 368 - Amendment Procedure', part: 'P12' },
    { id: 56, title: 'Basic Structure Doctrine', part: 'P12' },
    { id: 57, title: 'Major Constitutional Amendments', part: 'P12' }
];

export function getPartById(partId: PartId): PolityPart | undefined {
    return POLITY_PARTS.find(p => p.id === partId);
}

export function getTopicsByPart(partId: PartId) {
    return TOPIC_TITLES.filter(t => t.part === partId);
}

export function getPartColors(color: string) {
    const colors: Record<string, any> = {
        slate: { bg: 'bg-slate-600', text: 'text-slate-600', border: 'border-slate-500', light: 'bg-slate-50' },
        blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-500', light: 'bg-blue-50' },
        indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-500', light: 'bg-indigo-50' },
        purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-500', light: 'bg-purple-50' },
        violet: { bg: 'bg-violet-600', text: 'text-violet-600', border: 'border-violet-500', light: 'bg-violet-50' },
        green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-500', light: 'bg-green-50' },
        teal: { bg: 'bg-teal-600', text: 'text-teal-600', border: 'border-teal-500', light: 'bg-teal-50' },
        amber: { bg: 'bg-amber-600', text: 'text-amber-600', border: 'border-amber-500', light: 'bg-amber-50' },
        orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-500', light: 'bg-orange-50' },
        rose: { bg: 'bg-rose-600', text: 'text-rose-600', border: 'border-rose-500', light: 'bg-rose-50' },
        cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600', border: 'border-cyan-500', light: 'bg-cyan-50' },
        emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-500', light: 'bg-emerald-50' },
        red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-500', light: 'bg-red-50' },
    };
    return colors[color] || colors.blue;
}
