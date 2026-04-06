/**
 * UPSC Prelims Chapter Priority Index
 * Based on question frequency analysis from UPSC CSE 2015–2024 (Polity GS Paper 1)
 *
 * MUST_KNOW  — appears almost every year (high‑frequency, 8–10 Qs/year)
 * IMPORTANT  — tested 2–3 times in 5 years
 * OPTIONAL   — rarely or never directly tested
 */

export type PriorityLevel = 'MUST_KNOW' | 'IMPORTANT' | 'OPTIONAL';

/**
 * Map of topicId → PriorityLevel
 * Only topics with a non-OPTIONAL rating are explicitly listed.
 * Unlisted topics default to OPTIONAL in the helper function.
 */
export const CHAPTER_PRIORITY: Record<number, PriorityLevel> = {
    // ─── MUST_KNOW ─────────────────────────────────────────────────────────
    1:  'MUST_KNOW',   // Historical Background
    2:  'MUST_KNOW',   // Making of Constitution
    4:  'MUST_KNOW',   // Salient Features
    5:  'MUST_KNOW',   // Preamble
    6:  'MUST_KNOW',   // Union and Its Territory
    7:  'MUST_KNOW',   // Citizenship
    8:  'MUST_KNOW',   // Fundamental Rights I
    9:  'MUST_KNOW',   // Fundamental Rights II
    10: 'MUST_KNOW',   // Fundamental Rights III
    11: 'MUST_KNOW',   // DPSP
    12: 'MUST_KNOW',   // Fundamental Duties
    20: 'MUST_KNOW',   // President
    21: 'MUST_KNOW',   // Vice-President
    22: 'MUST_KNOW',   // Prime Minister
    23: 'MUST_KNOW',   // Central Council of Ministers
    24: 'MUST_KNOW',   // Cabinet Committees
    25: 'MUST_KNOW',   // Parliament – Making of Laws
    26: 'MUST_KNOW',   // Parliament – Composition
    27: 'MUST_KNOW',   // Parliament – Functions & Powers
    28: 'MUST_KNOW',   // Parliamentary Committees
    30: 'MUST_KNOW',   // Supreme Court
    31: 'MUST_KNOW',   // High Courts
    35: 'MUST_KNOW',   // Emergency Provisions
    36: 'MUST_KNOW',   // Centre-State Relations
    37: 'MUST_KNOW',   // Inter-State Relations
    42: 'MUST_KNOW',   // Amendment of Constitution
    45: 'MUST_KNOW',   // Election Commission
    46: 'MUST_KNOW',   // CAG
    47: 'MUST_KNOW',   // Attorney General of India
    51: 'MUST_KNOW',   // Finance Commission
    52: 'MUST_KNOW',   // UPSC
    53: 'MUST_KNOW',   // State PSCs
    56: 'MUST_KNOW',   // Special Provisions for States
    60: 'MUST_KNOW',   // Schedules of Constitution
    61: 'MUST_KNOW',   // Constitutional Amendments (List)
    70: 'MUST_KNOW',   // Tribunals
    73: 'MUST_KNOW',   // Panchayati Raj (73rd Amendment)
    74: 'MUST_KNOW',   // Municipalities (74th Amendment)
    80: 'MUST_KNOW',   // Official Language
    81: 'MUST_KNOW',   // Emergency – National (Art 352)
    82: 'MUST_KNOW',   // Emergency – State (Art 356)
    83: 'MUST_KNOW',   // Emergency – Financial (Art 360)

    // ─── IMPORTANT ─────────────────────────────────────────────────────────
    3:  'IMPORTANT',   // Concept of Constitution
    13: 'IMPORTANT',   // Rights and Duties
    14: 'IMPORTANT',   // System of Government
    15: 'IMPORTANT',   // Parliamentary Form
    16: 'IMPORTANT',   // Federal System
    17: 'IMPORTANT',   // Centre-State Legislative Relations
    18: 'IMPORTANT',   // Centre-State Admin Relations
    19: 'IMPORTANT',   // Centre-State Financial Relations
    29: 'IMPORTANT',   // Lok Sabha
    32: 'IMPORTANT',   // Subordinate Courts
    33: 'IMPORTANT',   // Tribunals (old)
    34: 'IMPORTANT',   // Lokpal & Lokayukta
    38: 'IMPORTANT',   // Union Territories
    39: 'IMPORTANT',   // Scheduled Areas
    40: 'IMPORTANT',   // Tribal Areas
    41: 'IMPORTANT',   // Constitutional Bodies — Overview
    43: 'IMPORTANT',   // National Commission for SC
    44: 'IMPORTANT',   // National Commission for ST
    48: 'IMPORTANT',   // Advocate General
    49: 'IMPORTANT',   // Statutory Bodies — NHRC
    50: 'IMPORTANT',   // Right to Information
    54: 'IMPORTANT',   // Cooperative Societies (97th Amendment)
    55: 'IMPORTANT',   // Anti-Defection Law (10th Schedule)
    57: 'IMPORTANT',   // Goods and Services Tax Council
    58: 'IMPORTANT',   // NITI Aayog
    59: 'IMPORTANT',   // National Integration Council
    62: 'IMPORTANT',   // Zonal Councils
    63: 'IMPORTANT',   // Inter-State Council
    64: 'IMPORTANT',   // President's Rule
    65: 'IMPORTANT',   // Governor – Special Provisions
    66: 'IMPORTANT',   // State Legislature
    67: 'IMPORTANT',   // State Executive (CM)
    68: 'IMPORTANT',   // State Council of Ministers
    69: 'IMPORTANT',   // Advocate General (State)
    71: 'IMPORTANT',   // Public Service Commission (State)
    72: 'IMPORTANT',   // State Finance Commission
    75: 'IMPORTANT',   // Public Interest Litigation
    76: 'IMPORTANT',   // Writs
    77: 'IMPORTANT',   // Constitutional Remedies (Art 32)
    78: 'IMPORTANT',   // Judicial Review
    79: 'IMPORTANT',   // Judicial Activism
    84: 'IMPORTANT',   // Armed Forces Tribunals
    85: 'IMPORTANT',   // National Security Act
    86: 'IMPORTANT',   // Preventive Detention Laws
    87: 'IMPORTANT',   // Right to Information Act
    88: 'IMPORTANT',   // Protection of Human Rights Act
    89: 'IMPORTANT',   // RTI Act
    90: 'IMPORTANT',   // Competition Act
    91: 'IMPORTANT',   // Environment Laws
    92: 'IMPORTANT',   // Cyber Laws
    93: 'IMPORTANT',   // Consumer Protection
    94: 'IMPORTANT',   // Anti-Corruption Laws
    95: 'IMPORTANT',   // Constitutional Morality
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getPriority(topicId: number): PriorityLevel {
    return CHAPTER_PRIORITY[topicId] ?? 'OPTIONAL';
}

export function getPriorityStyle(level: PriorityLevel): string {
    switch (level) {
        case 'MUST_KNOW':
            return 'text-red-600 bg-red-50 border-red-200 dark:text-red-400 dark:bg-red-900/20 dark:border-red-800/50';
        case 'IMPORTANT':
            return 'text-amber-600 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-900/20 dark:border-amber-800/50';
        case 'OPTIONAL':
            return 'text-muted-foreground bg-muted border-border';
    }
}

export function getPriorityLabel(level: PriorityLevel): string {
    switch (level) {
        case 'MUST_KNOW': return '🔴 Must Know';
        case 'IMPORTANT': return '🟡 Important';
        case 'OPTIONAL':  return 'Optional';
    }
}
