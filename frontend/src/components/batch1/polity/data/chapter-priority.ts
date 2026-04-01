export type UPSCPriority = 'MUST_KNOW' | 'IMPORTANT' | 'OPTIONAL';

export const CHAPTER_PRIORITY: Record<number, UPSCPriority> = {
    // Must Know topics (Historical background, Fundamental Rights, Parliament, Judiciary)
    7: 'MUST_KNOW', // Fundamental Rights
    8: 'MUST_KNOW', // DPSP
    9: 'MUST_KNOW', // Fundamental Duties
    10: 'MUST_KNOW', // Amendment of the Constitution
    11: 'MUST_KNOW', // Basic Structure
    17: 'MUST_KNOW', // President
    22: 'MUST_KNOW', // Parliament
    26: 'MUST_KNOW', // Supreme Court
    43: 'MUST_KNOW', // Election Commission
    16: 'MUST_KNOW', // Emergency Provisions
    40: 'MUST_KNOW', // Tribunals

    // Important topics
    1: 'IMPORTANT', // Historical Background
    2: 'IMPORTANT', // Making of Constitution
    3: 'IMPORTANT', // Salient Features
    4: 'IMPORTANT', // Preamble
    5: 'IMPORTANT', // Union and its Territory
    6: 'IMPORTANT', // Citizenship
    12: 'IMPORTANT', // Parliamentary System
    13: 'IMPORTANT', // Federal System
    14: 'IMPORTANT', // Centre-State Relations
    18: 'IMPORTANT', // Vice-President
    19: 'IMPORTANT', // Prime Minister
    20: 'IMPORTANT', // Central Council of Ministers
    25: 'IMPORTANT', // Governor
    27: 'IMPORTANT', // Chief Minister
    31: 'IMPORTANT', // Subordinate Courts
    35: 'IMPORTANT', // Panchayati Raj
    36: 'IMPORTANT', // Municipalities
    44: 'IMPORTANT', // UPSC
    46: 'IMPORTANT', // Finance Commission
    52: 'IMPORTANT', // CAG
    
    // The rest normally default to OPTIONAL unless specified
};

export function getPriorityStyle(priority?: UPSCPriority) {
    if (priority === 'MUST_KNOW') return 'bg-red-500/10 text-red-500 hover:bg-red-500/20';
    if (priority === 'IMPORTANT') return 'bg-amber-500/10 text-amber-500 hover:bg-amber-500/20';
    return 'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20';
}

export function getPriorityLabel(priority?: UPSCPriority) {
    if (priority === 'MUST_KNOW') return 'MUST KNOW';
    if (priority === 'IMPORTANT') return 'IMPORTANT';
    return 'OPTIONAL';
}
