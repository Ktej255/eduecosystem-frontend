// Day 9 Flashcards - Jan 20 (Tuesday)
// Topic: PARLIAMENT (Chapter 22) - Part 2
// Legislative Procedure, Bills, Budget, Funds

import type { Flashcard } from '../../flashcard/flashcard-utils';

export const DAY9_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // LEGISLATIVE PROCEDURE (22.6)
    // ==========================================

    // Ordinary Bills
    {
        id: 'd9-22-6-1',
        front: 'Can an Ordinary Bill be introduced in Rajya Sabha?',
        back: 'Yes. An Ordinary Bill can be introduced in either House of Parliament.',
        source: 'Parliament Part 2',
        subtopicId: '22.6',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd9-22-6-2',
        front: 'What are the three reading stages of a bill?',
        back: '1. First Reading (Introduction & Publication)\n2. Second Reading (General Discussion, Committee Stage, Consideration Stage)\n3. Third Reading (Passing/Rejection)',
        source: 'Parliament Part 2',
        subtopicId: '22.6',
        category: 'concept'
    },

    // Money Bills (22.6)
    {
        id: 'd9-22-6-3',
        front: 'Which Article deals with the definition of "Money Bill"?',
        back: 'Article 110.',
        source: 'Parliament Part 2',
        subtopicId: '22.6',
        category: 'article',
        highlight: true
    },
    {
        id: 'd9-22-6-4',
        front: 'Can Rajya Sabha reject or amend a Money Bill?',
        back: 'No. It can only make recommendations, which Lok Sabha may or may NOT accept. It must return the bill within 14 days.',
        source: 'Parliament Part 2',
        subtopicId: '22.6',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd9-22-6-5',
        front: 'Is a bill dealing with "imposition of fines" considered a Money Bill?',
        back: 'No. Article 110 specifically excludes fines, penalties, or fees for licenses/services from being Money Bills.',
        source: 'Parliament Part 2',
        subtopicId: '22.6',
        category: 'concept'
    },

    // Financial Bills (22.6)
    {
        id: 'd9-22-6-6',
        front: 'What is the difference between Financial Bill (I) and Money Bill regarding introduction?',
        back: 'Financial Bill (I) (Art 117(1)) can ONLY be introduced in Lok Sabha (like Money Bill).\nHowever, unlike Money Bill, Rajya Sabha CAN reject/amend Financial Bill (I).',
        source: 'Parliament Part 2',
        subtopicId: '22.6',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd9-22-6-7',
        front: 'Can Financial Bill (II) be introduced in Rajya Sabha?',
        back: 'Yes. Financial Bill (II) (Art 117(3)) involves expenditure from CFI but not matters of Art 110. It is treated as an Ordinary Bill.',
        source: 'Parliament Part 2',
        subtopicId: '22.6',
        category: 'fact'
    },

    // Joint Sitting (22.7)
    {
        id: 'd9-22-7-1',
        front: 'Under which Article can a Joint Sitting be summoned?',
        back: 'Article 108.',
        source: 'Parliament Part 2',
        subtopicId: '22.7',
        category: 'article'
    },
    {
        id: 'd9-22-7-2',
        front: 'Is Joint Sitting applicable to Constitutional Amendment Bills?',
        back: 'No. Constitutional Amendment Bills must be passed by each House separately.',
        source: 'Parliament Part 2',
        subtopicId: '22.7',
        category: 'concept',
        highlight: true
    },

    // Budget (22.8)
    {
        id: 'd9-22-8-1',
        front: 'The term "Budget" is mentioned in which Article of the Constitution?',
        back: 'Nowhere. The Constitution refers to it as "Annual Financial Statement" (Article 112).',
        source: 'Parliament Part 2',
        subtopicId: '22.8',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd9-22-8-2',
        front: 'Who prepares the Budget?',
        back: 'Department of Economic Affairs, Ministry of Finance.',
        source: 'Parliament Part 2',
        subtopicId: '22.8',
        category: 'fact'
    },
    {
        id: 'd9-22-8-3',
        front: 'Can the "Charged Expenditure" be voted upon by Parliament?',
        back: 'No. It can only be discussed, but not voted upon.',
        source: 'Parliament Part 2',
        subtopicId: '22.8',
        category: 'concept'
    },

    // Grants (22.8)
    {
        id: 'd9-22-8-4',
        front: 'What is a "Vote on Account"?',
        back: 'It allows the Government to withdraw money from CFI for a part of the year (usually 2 months) pending the passage of the Appropriation Bill.',
        source: 'Parliament Part 2',
        subtopicId: '22.8',
        category: 'concept'
    },
    {
        id: 'd9-22-8-5',
        front: 'What is a "Token Grant"?',
        back: 'Grant granted when funds to meet proposed expenditure on a new service can be made available by re-appropriation. A token sum of Re 1 is submitted to vote.',
        source: 'Parliament Part 2',
        subtopicId: '22.8',
        category: 'concept'
    },

    // Funds (22.10)
    {
        id: 'd9-22-10-1',
        front: 'Consolidated Fund of India is under Article ____.',
        back: 'Article 266.',
        source: 'Parliament Part 2',
        subtopicId: '22.10',
        category: 'article'
    },
    {
        id: 'd9-22-10-2',
        front: 'Who holds the Contingency Fund of India?',
        back: 'The Finance Secretary (on behalf of the President).',
        source: 'Parliament Part 2',
        subtopicId: '22.10',
        category: 'fact'
    },
    {
        id: 'd9-22-10-3',
        front: 'Does the Public Account of India (Art 266) require parliamentary appropriation for withdrawal?',
        back: 'No. Payments from this account (Provident Funds, Savings Bank deposits, etc.) can be made by executive action.',
        source: 'Parliament Part 2',
        subtopicId: '22.10',
        category: 'concept',
        highlight: true
    }
];

export default DAY9_FLASHCARDS;
