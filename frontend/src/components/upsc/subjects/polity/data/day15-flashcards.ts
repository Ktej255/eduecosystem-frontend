// Day 15: JUDICIARY EXTENSIONS & LEGAL SYSTEM
// Topics: Subordinate Courts, Tribunals, Judicial Review, PIL
// Date: Jan 26 (Monday)

import type { Flashcard } from '@/components/upsc/infrastructure/flashcard/flashcard-utils';

export const DAY15_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // SUBORDINATE COURTS (Ch 37)
    // ==========================================
    {
        id: 'd15-37-1',
        front: 'Who appoints District Judges?',
        back: 'The Governor of the State in consultation with the High Court of the State (Art 233).',
        source: 'Subordinate Courts',
        subtopicId: '37.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd15-37-2',
        front: 'What are the qualifications to be appointed as a District Judge?',
        back: '1. Not already in service of Centre/State.\n2. Advocate/Pleader for at least 7 years.\n3. Recommended by the High Court.',
        source: 'Subordinate Courts',
        subtopicId: '37.1',
        category: 'fact'
    },
    {
        id: 'd15-37-3',
        front: 'Difference between District Judge and Sessions Judge?',
        back: 'Same person.\nDistrict Judge: Civil cases (Original/Appellate).\nSessions Judge: Criminal cases (Can impose death sentence, subject to HC confirmation).',
        source: 'Subordinate Courts',
        subtopicId: '37.2',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd15-37-4',
        front: 'Who controls the Subordinate Courts (Posting, Promotion)?',
        back: 'The High Court (Article 235).',
        source: 'Subordinate Courts',
        subtopicId: '37.3',
        category: 'fact'
    },

    // ==========================================
    // TRIBUNALS (Ch 36 - 323A, 323B)
    // ==========================================
    {
        id: 'd15-36-1',
        front: 'Which Amendment introduced Tribunals (Part XIV-A)?',
        back: '42nd Amendment Act, 1976 (Swaran Singh Committee).',
        source: 'Tribunals',
        subtopicId: '36.1',
        category: 'fact'
    },
    {
        id: 'd15-36-2',
        front: 'Article 323A vs Article 323B?',
        back: '323A: Administrative Tribunals (Public Service only). Established by PARLIAMENT only.\n323B: Tribunals for other matters (Tax, Land, etc). Established by Parliament OR State Legislature.',
        source: 'Tribunals',
        subtopicId: '36.2',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd15-36-3',
        front: 'Is the Central Administrative Tribunal (CAT) bound by the Code of Civil Procedure (CPC)?',
        back: 'No. It is guided by "Principles of Natural Justice".',
        source: 'Tribunals',
        subtopicId: '36.1',
        category: 'concept'
    },
    {
        id: 'd15-36-4',
        front: 'Chandra Kumar Case (1997) ruling on Tribunals?',
        back: 'Declared that Judicial Review of High Courts (Art 226) and Supreme Court (Art 32) is part of Basic Structure. Tribunals are subject to writ jurisdiction of HCs.',
        source: 'Tribunals',
        subtopicId: '36.3',
        category: 'concept',
        highlight: true
    },

    // ==========================================
    // JUDICIAL REVIEW & ACTIVISM (Ch 28, 29, 30)
    // ==========================================
    {
        id: 'd15-28-1',
        front: 'Is the phrase "Judicial Review" mentioned in the Constitution?',
        back: 'No. However, it is explicit in Articles 13, 32, 226 and implicit in others.',
        source: 'Judicial Review',
        subtopicId: '28.1',
        category: 'concept'
    },
    {
        id: 'd15-28-2',
        front: 'Ninth Schedule vs Judicial Review (I.R. Coelho Case 2007).',
        back: 'Laws placed in 9th Schedule AFTER April 24, 1973 (Kesavananda Bharati date) are OPEN to Judicial Review if they violate Basic Structure.',
        source: 'Judicial Review',
        subtopicId: '28.2',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd15-30-1',
        front: 'Who introduced PIL (Public Interest Litigation) in India?',
        back: 'Justice V.R. Krishna Iyer and Justice P.N. Bhagwati (around 1980s).',
        source: 'PIL',
        subtopicId: '30.1',
        category: 'fact'
    },
    {
        id: 'd15-30-2',
        front: 'Locus Standi principle in PIL?',
        back: 'Relaxed. Any public-spirited citizen/social org can move the court for rights of others who are unable to approach due to poverty/ignorance.',
        source: 'PIL',
        subtopicId: '30.2',
        category: 'concept'
    },
    {
        id: 'd15-29-1',
        front: 'Concept of "Judicial Activism" originated in?',
        back: 'USA (introduced by Arthur Schlesinger Jr in 1947).',
        source: 'Judicial Activism',
        subtopicId: '29.1',
        category: 'fact'
    },
    {
        id: 'd15-29-2',
        front: 'Difference between Judicial Activism and Judicial Restraint?',
        back: 'Activism: Judiciary proactively interprets law/Constitution to fill gaps.\nRestraint: Judges limit their power, deferring to Legislature/Executive unless blatant violation.',
        source: 'Judicial Activism',
        subtopicId: '29.2',
        category: 'concept'
    },

    // ==========================================
    // OTHER LEGAL ORGANS
    // ==========================================
    {
        id: 'd15-misc-1',
        front: 'What is a "Lok Adalat"?',
        back: 'Forum where disputes (pending or pre-litigation) are settled amicably. Given statutory status under Legal Services Authorities Act, 1987.',
        source: 'ADR',
        subtopicId: '37.4',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd15-misc-2',
        front: 'Is the award of a Lok Adalat binding?',
        back: 'Yes, binding on all parties and NO appeal lies to any court against it.',
        source: 'ADR',
        subtopicId: '37.4',
        category: 'fact'
    },
    {
        id: 'd15-misc-3',
        front: 'Gram Nyayalayas Act, 2008 jurisdiction?',
        back: 'Both Civil and Criminal cases. Mobile courts at intermediate panchayat level.',
        source: 'ADR',
        subtopicId: '37.5',
        category: 'fact'
    },
    {
        id: 'd15-misc-4',
        front: 'Family Courts Act 1984 applies to?',
        back: 'Marriage, divorce, custody, maintenance. Lawyers are generally prohibited from appearing as a matter of right.',
        source: 'Subordinate Courts',
        subtopicId: '37.6',
        category: 'fact'
    },
    {
        id: 'd15-misc-5',
        front: 'NALSA (National Legal Services Authority) purpose?',
        back: 'To provide free legal services to weaker sections and organize Lok Adalats (Article 39A).',
        source: 'Legal Services',
        subtopicId: '37.7',
        category: 'concept'
    },
    {
        id: 'd15-misc-6',
        front: 'Review vs Curative Petition.',
        back: 'Review: Correct error apparent on face of record.\nCurative: Final remedy after Review dismissal (Rupa Ashok Hurra case) to prevent gross miscarriage of justice.',
        source: 'Supreme Court',
        subtopicId: '26.4',
        category: 'concept'
    }
];

export default DAY15_FLASHCARDS;
