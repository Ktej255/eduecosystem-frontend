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
    // --- 1950s: The Beginning ---
    {
        id: 'champakam',
        year: 1951,
        type: 'JUDGEMENT',
        title: 'Champakam Dorairajan Case',
        description: 'SC struck down reservation in educational institutions. Triggered 1st Amendment.',
        lane: 'BOTTOM',
        relatedIds: ['1st_aa'],
        impact: 'HIGH',
        status: 'OVERRULED'
    },
    {
        id: '1st_aa',
        year: 1951,
        type: 'AMENDMENT',
        title: '1st Amendment Act',
        description: 'Added 9th Schedule to protect land reforms. Added Art 15(4) for reservations.',
        lane: 'TOP',
        relatedIds: ['champakam', 'shankari_prasad'],
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

    // --- 1960s: The Confusion ---
    {
        id: 'berubari',
        year: 1960,
        type: 'JUDGEMENT',
        title: 'Berubari Union Case',
        description: 'SC ruled Preamble is NOT part of Constitution. Parliament can cede territory only via Amendment.',
        lane: 'BOTTOM',
        relatedIds: ['kesavananda'],
        impact: 'MEDIUM',
        status: 'OVERRULED'
    },
    {
        id: 'golaknath',
        year: 1967,
        type: 'JUDGEMENT',
        title: 'Golaknath Case',
        description: 'SC ruled Parliament CANNOT amend Fundamental Rights. (11 Judges).',
        lane: 'BOTTOM',
        relatedIds: ['24th_aa'],
        impact: 'HIGH',
        status: 'OVERRULED' // By Kesavananda
    },

    // --- 1970s: The Conflict & Structure ---
    {
        id: '24th_aa',
        year: 1971,
        type: 'AMENDMENT',
        title: '24th Amendment Act',
        description: 'Parliament re-asserted power to amend any part of Constitution (Reacting to Golaknath).',
        lane: 'TOP',
        relatedIds: ['golaknath', 'kesavananda'],
        impact: 'HIGH',
        status: 'VALID'
    },
    {
        id: '25th_aa',
        year: 1971,
        type: 'AMENDMENT',
        title: '25th Amendment Act',
        description: 'Curtailed Right to Property. Gave primacy to Art 39(b) and (c) over FRs.',
        lane: 'TOP',
        relatedIds: ['kesavananda'],
        impact: 'MEDIUM',
        status: 'PARTIALLY_OVERRULED'
    },
    {
        id: 'kesavananda',
        year: 1973,
        date: '1973-04-24',
        type: 'JUDGEMENT',
        title: 'Kesavananda Bharati Case',
        description: 'Largest Bench (13). Upheld 24th AA but invented "Basic Structure". Parliament cannot alter basic features.',
        lane: 'BOTTOM',
        relatedIds: ['24th_aa', '42nd_aa'],
        impact: 'HIGH',
        status: 'VALID'
    },
    {
        id: 'adm_jabalpur',
        year: 1976,
        type: 'JUDGEMENT',
        title: 'ADM Jabalpur (Habeas Corpus)',
        description: 'Darkest hour. SC ruled Right to Life can be suspended during Emergency.',
        lane: 'BOTTOM',
        relatedIds: ['44th_aa', 'puttaswamy'],
        impact: 'HIGH',
        status: 'OVERRULED'
    },
    {
        id: '42nd_aa',
        year: 1976,
        type: 'AMENDMENT',
        title: '42nd Amendment (Mini Constitution)',
        description: 'Added "Socialist, Secular". Fundamental Duties. Curtailed Judicial Review.',
        lane: 'TOP',
        relatedIds: ['kesavananda', 'minerva_mills'],
        impact: 'HIGH',
        status: 'PARTIALLY_OVERRULED'
    },
    {
        id: 'maneka',
        year: 1978,
        type: 'JUDGEMENT',
        title: 'Maneka Gandhi Case',
        description: 'Expanded Art 21. "Procedure established by law" must be "fair, just and reasonable" (Due Process).',
        lane: 'BOTTOM',
        relatedIds: ['ak_gopalan'],
        impact: 'HIGH',
        status: 'VALID'
    },
    {
        id: '44th_aa',
        year: 1978,
        type: 'AMENDMENT',
        title: '44th Amendment Act',
        description: 'Restored Democracy. Removed Right to Property from FR list. Art 20 & 21 cannot be suspended.',
        lane: 'TOP',
        relatedIds: ['adm_jabalpur', 'minerva_mills'],
        impact: 'HIGH',
        status: 'VALID'
    },

    // --- 1980s & 90s: Harmony & Federalism ---
    {
        id: 'minerva_mills',
        year: 1980,
        type: 'JUDGEMENT',
        title: 'Minerva Mills Case',
        description: 'Struck down 42nd AA supremacy clause. "Judicial Review" & "Harmony between FR/DPSP" = Basic Structure.',
        lane: 'BOTTOM',
        relatedIds: ['42nd_aa'],
        impact: 'HIGH',
        status: 'VALID'
    },
    {
        id: 'waman_rao',
        year: 1981,
        type: 'JUDGEMENT',
        title: 'Waman Rao Case',
        description: 'Validated 1st AA but clarified Basic Structure applies to 9th Schedule additions after 24 April 1973.',
        lane: 'BOTTOM',
        relatedIds: ['kesavananda', 'ir_coelho'],
        impact: 'MEDIUM',
        status: 'VALID'
    },
    {
        id: 'shah_bano',
        year: 1985,
        type: 'JUDGEMENT',
        title: 'Shah Bano Case',
        description: 'SC granted maintenance to Muslim women under CrPC. Triggered enactment of Muslim Women Act 1986.',
        lane: 'BOTTOM',
        relatedIds: [],
        impact: 'HIGH',
        status: 'VALID'
    },
    {
        id: '52nd_aa',
        year: 1985,
        type: 'AMENDMENT',
        title: '52nd Amendment (Anti-Defection)',
        description: 'Added 10th Schedule. Disqualification on ground of defection.',
        lane: 'TOP',
        relatedIds: ['kikolo'],
        impact: 'HIGH',
        status: 'VALID'
    },
    {
        id: 'kihoto',
        year: 1992,
        type: 'JUDGEMENT',
        title: 'Kihoto Hollohan Case',
        description: 'Upheld Anti-Defection Law but ruled Speaker\'s decision is subject to Judicial Review.',
        lane: 'BOTTOM',
        relatedIds: ['52nd_aa'],
        impact: 'HIGH',
        status: 'VALID'
    },
    {
        id: 'indra_sawhney',
        year: 1992,
        type: 'JUDGEMENT',
        title: 'Indra Sawhney Case',
        description: 'Upheld 27% OBC reservation. Capped total reservation at 50%. Introduced "Creamy Layer".',
        lane: 'BOTTOM',
        relatedIds: ['77th_aa', '103rd_aa'],
        impact: 'HIGH',
        status: 'VALID'
    },
    {
        id: '73_74_aa',
        year: 1992,
        type: 'AMENDMENT',
        title: '73rd & 74th Amendments',
        description: 'Constitutional status to Panchayats and Municipalities.',
        lane: 'TOP',
        relatedIds: [],
        impact: 'HIGH',
        status: 'VALID'
    },
    {
        id: 'sr_bommai',
        year: 1994,
        type: 'JUDGEMENT',
        title: 'S.R. Bommai Case',
        description: 'Federalism is Basic Structure. Strict guidelines for Article 356 (President\'s Rule).',
        lane: 'BOTTOM',
        relatedIds: [],
        impact: 'HIGH',
        status: 'VALID'
    },
    {
        id: 'vishaka',
        year: 1997,
        type: 'JUDGEMENT',
        title: 'Vishaka Case',
        description: 'Guidelines against Sexual Harassment at Workplace. Basis for 2013 POSH Act.',
        lane: 'BOTTOM',
        relatedIds: [],
        impact: 'MEDIUM',
        status: 'VALID'
    },

    // --- 2000s to Present ---
    {
        id: '86th_aa',
        year: 2002,
        type: 'AMENDMENT',
        title: '86th Amendment Act',
        description: 'Made Education a Fundamental Right (Art 21A).',
        lane: 'TOP',
        relatedIds: [],
        impact: 'HIGH',
        status: 'VALID'
    },
    {
        id: 'ir_coelho',
        year: 2007,
        type: 'JUDGEMENT',
        title: 'I.R. Coelho Case',
        description: '9th Schedule laws challenging Basic Structure are open to Judicial Review if added after 1973.',
        lane: 'BOTTOM',
        relatedIds: ['waman_rao', 'kesavananda'],
        impact: 'HIGH',
        status: 'VALID'
    },
    {
        id: '99th_aa',
        year: 2014,
        type: 'AMENDMENT',
        title: '99th Amendment (NJAC)',
        description: 'Replaced Collegium System with NJAC. (Struck down in 2015).',
        lane: 'TOP',
        relatedIds: ['njac_case'],
        impact: 'HIGH',
        status: 'OVERRULED'
    },
    {
        id: 'njac_case',
        year: 2015,
        type: 'JUDGEMENT',
        title: 'NJAC Case (4th Judges Case)',
        description: 'SC struck down 99th AA. Declared "Independence of Judiciary" as Basic Structure.',
        lane: 'BOTTOM',
        relatedIds: ['99th_aa'],
        impact: 'HIGH',
        status: 'VALID'
    },
    {
        id: 'puttaswamy',
        year: 2017,
        type: 'JUDGEMENT',
        title: 'KS Puttaswamy Case',
        description: 'Right to Privacy declared a Fundamental Right under Article 21.',
        lane: 'BOTTOM',
        relatedIds: [],
        impact: 'HIGH',
        status: 'VALID'
    },
    {
        id: '101st_aa',
        year: 2017,
        type: 'AMENDMENT',
        title: '101st Amendment (GST)',
        description: 'Introduced Goods and Services Tax.',
        lane: 'TOP',
        relatedIds: [],
        impact: 'HIGH',
        status: 'VALID'
    },
    {
        id: '103rd_aa',
        year: 2019,
        type: 'AMENDMENT',
        title: '103rd Amendment (EWS)',
        description: '10% Reservation for Economically Weaker Sections. Upheld by SC in 2022.',
        lane: 'TOP',
        relatedIds: ['indra_sawhney'],
        impact: 'HIGH',
        status: 'VALID'
    },
    {
        id: '106th_aa',
        year: 2023,
        type: 'AMENDMENT',
        title: '106th Amendment (Nari Shakti)',
        description: '33% Reservation for Women in Lok Sabha and Assemblies.',
        lane: 'TOP',
        relatedIds: [],
        impact: 'HIGH',
        status: 'VALID'
    }
];
