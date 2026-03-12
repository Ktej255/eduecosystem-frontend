// Day 18: CONSTITUTIONAL BODIES (PART 1)
// Topics: Election Commission (Ch 43), CAG (Ch 52), UPSC (Ch 44)
// Date: Jan 29 (Thursday)

import type { Flashcard } from '@/components/upsc/infrastructure/flashcard/flashcard-utils';

export const DAY18_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // ELECTION COMMISSION (Ch 43) - Article 324
    // ==========================================
    {
        id: 'd18-43-1',
        front: 'Who appoints the Chief Election Commissioner and other Election Commissioners?',
        back: 'The President (Article 324). Often based on recommendations (now specific Selection Committee under 2023 Act).',
        source: 'Election Commission',
        subtopicId: '38.1', // 38.1 maps to Constitutional Bodies in general or EC specific
        category: 'fact',
        highlight: true
    },
    {
        id: 'd18-43-2',
        front: 'Can the Chief Election Commissioner be removed like a Judge of Supreme Court?',
        back: 'Yes. He has security of tenure. Removal requires special majority in Parliament on grounds of proved misbehavior or incapacity.',
        source: 'Election Commission',
        subtopicId: '38.1',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd18-43-3',
        front: 'Do other Election Commissioners have the same security of tenure as the CEC?',
        back: 'No. They can be removed by the President on the recommendation of the CEC.',
        source: 'Election Commission',
        subtopicId: '38.1',
        category: 'fact'
    },
    {
        id: 'd18-43-4',
        front: 'Does the Constitution prescribe qualifications for members of the Election Commission?',
        back: 'No. The Constitution has NOT prescribed qualifications (legal, educational, administrative or judicial).',
        source: 'Election Commission',
        subtopicId: '38.1',
        category: 'fact'
    },
    {
        id: 'd18-43-5',
        front: 'Are retiring Election Commissioners debarred from further government appointment?',
        back: 'No. The Constitution has NOT debarred them from further employment.',
        source: 'Election Commission',
        subtopicId: '38.1',
        category: 'fact'
    },

    // ==========================================
    // COMPTROLLER & AUDITOR GENERAL (Ch 52) - Article 148
    // ==========================================
    {
        id: 'd18-52-1',
        front: 'The CAG is the guardian of?',
        back: 'The Public Purse (Controls the entire financial system of country - Centre & States).',
        source: 'CAG',
        subtopicId: '25.1', // CAG usually mapped here
        category: 'concept',
        highlight: true
    },
    {
        id: 'd18-52-2',
        front: 'Is the CAG eligible for further office under the Government of India/State?',
        back: 'No. He is not eligible for further office after retirement.',
        source: 'CAG',
        subtopicId: '25.1',
        category: 'fact'
    },
    {
        id: 'd18-52-3',
        front: 'Who determines the salary and service conditions of the CAG?',
        back: 'Parliament by law. (Salary equal to Judge of Supreme Court).',
        source: 'CAG',
        subtopicId: '25.1',
        category: 'fact'
    },
    {
        id: 'd18-52-4',
        front: 'Article 151: CAG submits audit reports to?',
        back: 'President (for Centre) and Governor (for State), who lay it before the respective legislatures.',
        source: 'CAG',
        subtopicId: '25.1',
        category: 'article'
    },
    {
        id: 'd18-52-5',
        front: 'Does CAG audit the accounts of secret service expenditure?',
        back: 'No. He cannot call for particulars but has to accept a certificate from the competent administrative authority.',
        source: 'CAG',
        subtopicId: '25.1',
        category: 'fact'
    },

    // ==========================================
    // UPSC (Ch 44) - Article 315-323
    // ==========================================
    {
        id: 'd18-44-1',
        front: 'Who can remove the Chairman or member of UPSC?',
        back: 'President ONLY (Even for SPSC members, removal is by President, though appointment is by Governor).',
        source: 'UPSC',
        subtopicId: '38.1',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd18-44-2',
        front: 'What is the ground for removal of UPSC member for which Supreme Court inquiry is mandatory?',
        back: 'Misbehavior. (President has to refer matter to SC under Art 317. SC advice is binding).',
        source: 'UPSC',
        subtopicId: '38.1',
        category: 'concept'
    },
    {
        id: 'd18-44-3',
        front: 'Is UPSC consulted on reservation of appointments or posts?',
        back: 'No. Article 320(4) exempts reservation matters (SC/ST/OBC) from UPSC consultation.',
        source: 'UPSC',
        subtopicId: '38.1',
        category: 'fact'
    },
    {
        id: 'd18-44-4',
        front: 'The "Watchdog of Merit System" in India is?',
        back: 'UPSC (Union Public Service Commission).',
        source: 'UPSC',
        subtopicId: '38.1',
        category: 'concept'
    },

    // ==========================================
    // COMPARATIVE / LINKAGES
    // ==========================================
    {
        id: 'd18-link-1',
        front: 'Who is the "friend, philosopher and guide" of the Public Accounts Committee?',
        back: 'The CAG (Comptroller and Auditor General).',
        source: 'CAG',
        subtopicId: '23.1',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd18-link-2',
        front: 'Composition of UPSC is determined by?',
        back: 'President (Constitution does not specify strength. Currently 9-11 members).',
        source: 'UPSC',
        subtopicId: '38.1',
        category: 'fact'
    },
    {
        id: 'd18-link-3',
        front: 'Article 326 deals with?',
        back: 'Universal Adult Suffrage (Right to vote for citizens above 18 years).',
        source: 'Elections',
        subtopicId: '38.1',
        category: 'article'
    },
    {
        id: 'd18-link-4',
        front: 'Can Parliament extend the jurisdiction of UPSC?',
        back: 'Yes (Article 321).',
        source: 'UPSC',
        subtopicId: '38.1',
        category: 'fact'
    }
];

export default DAY18_FLASHCARDS;
