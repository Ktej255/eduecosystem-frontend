export interface TimelineEvent {
    id: string;
    year: number;
    date?: string;
    type: 'AMENDMENT' | 'JUDGEMENT' | 'EVENT';
    title: string;
    description: string;
    lane: 'TOP' | 'BOTTOM' | 'MIDDLE';
    relatedIds: string[];
    impact: 'HIGH' | 'MEDIUM' | 'LOW';
    status: 'VALID' | 'OVERRULED' | 'PARTIALLY_OVERRULED';
}

export const TIMELINE_DATA: TimelineEvent[] = [
    // --- THE 1951 CONFLICT ---
    {
        id: '1st_aa',
        year: 1951,
        type: 'AMENDMENT',
        title: '1st Amendment Act',
        description: 'Added 9th Schedule to protect land reforms from judicial review.',
        lane: 'TOP',
        relatedIds: ['shankari_prasad'],
        impact: 'HIGH',
        status: 'VALID'
    },
    {
        id: 'shankari_prasad',
        year: 1951,
        type: 'JUDGEMENT',
        title: 'Shankari Prasad Case',
        description: 'SC upheld 1st Amendment. Ruled Parliament CAN amend Fundamental Rights.',
        lane: 'BOTTOM',
        relatedIds: ['1st_aa'],
        impact: 'HIGH',
        status: 'OVERRULED' // Later overruled by Golaknath
    },

    // --- THE 1967 U-TURN ---
    {
        id: 'golaknath',
        year: 1967,
        type: 'JUDGEMENT',
        title: 'Golaknath Case',
        description: 'SC ruled Parliament CANNOT amend Fundamental Rights. (11 Judges)',
        lane: 'BOTTOM',
        relatedIds: ['24th_aa'],
        impact: 'HIGH',
        status: 'OVERRULED' // By Kesavananda
    },

    // --- THE PARLIAMENT STRIKES BACK (1971) ---
    {
        id: '24th_aa',
        year: 1971,
        type: 'AMENDMENT',
        title: '24th Amendment Act',
        description: 'Parliament re-asserted power to amend any part of Constitution, including FRs.',
        lane: 'TOP',
        relatedIds: ['golaknath', 'kesavananda'],
        impact: 'HIGH',
        status: 'VALID'
    },

    // --- THE BASIC STRUCTURE (1973) ---
    {
        id: 'kesavananda',
        year: 1973,
        date: '1973-04-24',
        type: 'JUDGEMENT',
        title: 'Kesavananda Bharati Case',
        description: 'Upheld 24th AA but invented "Basic Structure". Parliament cannot alter basic features.',
        lane: 'BOTTOM',
        relatedIds: ['24th_aa', '42nd_aa'],
        impact: 'HIGH',
        status: 'VALID'
    },

    // --- THE MINI CONSTITUTION (1976) ---
    {
        id: '42nd_aa',
        year: 1976,
        type: 'AMENDMENT',
        title: '42nd Amendment Act',
        description: 'Removed judicial review. Gave Primacy to DPSP over FRs. (Emergency Era).',
        lane: 'TOP',
        relatedIds: ['kesavananda', 'minerva_mills'],
        impact: 'HIGH',
        status: 'PARTIALLY_OVERRULED'
    },

    // --- THE FINAL BALANCE (1980) ---
    {
        id: 'minerva_mills',
        year: 1980,
        type: 'JUDGEMENT',
        title: 'Minerva Mills Case',
        description: 'Struck down clauses of 42nd AA. "Judicial Review" & "Harmony between FR/DPSP" added to Basic Structure.',
        lane: 'BOTTOM',
        relatedIds: ['42nd_aa'],
        impact: 'HIGH',
        status: 'VALID'
    },

    // --- RECENT EXAMPLES ---
    {
        id: '99th_aa',
        year: 2014,
        type: 'AMENDMENT',
        title: '99th Amendment (NJAC)',
        description: 'Replaced Collegium System with National Judicial Appointments Commission.',
        lane: 'TOP',
        relatedIds: ['njac_case'],
        impact: 'HIGH',
        status: 'OVERRULED'
    },
    {
        id: 'njac_case',
        year: 2015,
        type: 'JUDGEMENT',
        title: 'NJAC Case',
        description: 'SC struck down 99th AA as Unconstitutional. Independence of Judiciary is Basic Structure.',
        lane: 'BOTTOM',
        relatedIds: ['99th_aa'],
        impact: 'HIGH',
        status: 'VALID'
    }
];
