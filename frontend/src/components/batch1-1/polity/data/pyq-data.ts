import { PYQItem } from './pyq-types';
import { POLITY_REVISION_CHAPTERS } from '../../../batch1/polity/data/RevisionRegistry';

export const PYQ_DATA: PYQItem[] = [
    // --- PREAMBLE ---
    {
        id: '2017-preamble-mind',
        year: 2017,
        exam: 'PRELIMS',
        question: 'Which one of the following objectives is not embodied in the Preamble to the Constitution of India?',
        options: [
            { label: 'A', text: 'Liberty of thought', isCorrect: false },
            { label: 'B', text: 'Economic liberty', isCorrect: true },
            { label: 'C', text: 'Liberty of expression', isCorrect: false },
            { label: 'D', text: 'Liberty of belief', isCorrect: false }
        ],
        answer: 'B',
        explanation: 'The Preamble secures to all citizens: Liberty of thought, expression, belief, faith and worship. It does NOT mention "Economic Liberty". It mentions "Economic Justice".',
        topicIds: [5], // Preamble
        tags: ['Factual', 'Keywords'],
        difficulty: 'Easy'
    },
    {
        id: '2020-preamble-legal',
        year: 2020,
        exam: 'PRELIMS',
        question: 'The Preamble to the Constitution of India is:',
        options: [
            { label: 'A', text: 'A part of the Constitution but has no legal effect', isCorrect: false },
            { label: 'B', text: 'Not a part of the Constitution and has no legal effect either', isCorrect: false },
            { label: 'C', text: 'A part of the Constitution and has the same legal effect as any other part', isCorrect: false },
            { label: 'D', text: 'A part of the Constitution but has no legal effect independently of other parts', isCorrect: true }
        ],
        answer: 'D',
        explanation: 'In the Kesavananda Bharati case (1973), the Supreme Court held that the Preamble is an integral part of the Constitution. However, it is not enforceable in a court of law, meaning it has no legal effect independently, but it aids in legal interpretation of ambiguous provisions.',
        topicIds: [5, 12], // Preamble, Basic Structure
        tags: ['Conceptual', 'Judgement'],
        difficulty: 'Medium'
    },

    // --- FUNDAMENTAL RIGHTS ---
    {
        id: '2017-right-to-privacy',
        year: 2017,
        exam: 'PRELIMS',
        question: 'Right to Privacy is protected as an intrinsic part of Right to Life and Personal Liberty. Which of the following in the Constitution of India correctly and appropriately imply the above statement?',
        options: [
            { label: 'A', text: 'Article 14 and the provisions under the 42nd Amendment', isCorrect: false },
            { label: 'B', text: 'Article 17 and the Directive Principles of State Policy in Part IV', isCorrect: false },
            { label: 'C', text: 'Article 21 and the freedoms guaranteed in Part III', isCorrect: true },
            { label: 'D', text: 'Article 24 and the provisions under the 44th Amendment', isCorrect: false }
        ],
        answer: 'C',
        explanation: 'In the K.S. Puttaswamy case (2017), the Supreme Court declared the Right to Privacy as a fundamental right protected under Article 21 (Right to Life and Personal Liberty) and Part III of the Constitution.',
        topicIds: [8, 92], // Fundamental Rights, Article 21 Judgements
        tags: ['Conceptual', 'Current Affairs Linked'],
        difficulty: 'Medium'
    },
    {
        id: '2019-right-to-marry',
        year: 2019,
        exam: 'PRELIMS',
        question: 'Which Article of the Constitution of India safeguards one’s right to marry the person of one’s choice?',
        options: [
            { label: 'A', text: 'Article 19', isCorrect: false },
            { label: 'B', text: 'Article 21', isCorrect: true },
            { label: 'C', text: 'Article 25', isCorrect: false },
            { label: 'D', text: 'Article 29', isCorrect: false }
        ],
        answer: 'B',
        explanation: 'In the Hadiya case (Shafin Jahan v. Asokan K.M., 2018), the Supreme Court ruled that the right to marry a person of one\'s choice is integral to Article 21 (Right to Life and Personal Liberty).',
        topicIds: [8, 92], // Fundamental Rights, Article 21 Judgements
        tags: ['Factual', 'Judgement'],
        difficulty: 'Easy'
    },
    {
        id: '2021-right-to-property',
        year: 2021,
        exam: 'PRELIMS',
        question: 'Right to Property in India is a:',
        options: [
            { label: 'A', text: 'Fundamental Right', isCorrect: false },
            { label: 'B', text: 'Legal Right available to citizens only', isCorrect: false },
            { label: 'C', text: 'Legal Right available to any person', isCorrect: true },
            { label: 'D', text: 'Neither Fundamental Right nor Legal Right', isCorrect: false }
        ],
        answer: 'C',
        explanation: 'The 44th Amendment Act (1978) removed the Right to Property from the list of Fundamental Rights and made it a constitutional/legal right under Article 300-A. It is available to any person (citizen or non-citizen).',
        topicIds: [8, 11], // Fundamental Rights, Amendment
        tags: ['Conceptual', 'Fact'],
        difficulty: 'Medium'
    },

    // --- PARLIAMENT ---
    {
        id: '2013-money-bill',
        year: 2013,
        exam: 'PRELIMS',
        question: 'What will follow if a Money Bill is substantially amended by the Rajya Sabha?',
        options: [
            { label: 'A', text: 'The Lok Sabha may still proceed with the Bill, accepting or not accepting the recommendations of the Rajya Sabha', isCorrect: true },
            { label: 'B', text: 'The Lok Sabha cannot consider the Bill further', isCorrect: false },
            { label: 'C', text: 'The Lok Sabha may send the Bill to the Rajya Sabha for reconsideration', isCorrect: false },
            { label: 'D', text: 'The President may call a joint sitting for passing the Bill', isCorrect: false }
        ],
        answer: 'A',
        explanation: 'The Lok Sabha has the exclusive power to accept or reject any or all recommendations made by the Rajya Sabha regarding a Money Bill. Joint sitting is NOT available for Money Bills.',
        topicIds: [23, 14], // Parliament, Federal System
        tags: ['Conceptual'],
        difficulty: 'Medium'
    },
    {
        id: '2017-cabinet-form',
        year: 2017,
        exam: 'PRELIMS',
        question: 'Out of the following statements, choose the one that brings out the principle underlying the Cabinet form of Government:',
        options: [
            { label: 'A', text: 'An arrangement for minimizing the criticism against the Government...', isCorrect: false },
            { label: 'B', text: 'A mechanism for speeding up the activities of the Government...', isCorrect: false },
            { label: 'C', text: 'A mechanism of parliamentary democracy for ensuring collective responsibility of the Government to the people', isCorrect: true },
            { label: 'D', text: 'A device for strengthening the hands of the head of the Government...', isCorrect: false }
        ],
        answer: 'C',
        explanation: 'The bedrock principle of the Parliamentary/Cabinet form of government is "Collective Responsibility" of the Council of Ministers to the Lok Sabha (people\'s representatives), as per Article 75(3).',
        topicIds: [13, 21], // Parliamentary System, Council of Ministers
        tags: ['Conceptual'],
        difficulty: 'Medium'
    },
    {
        id: '2014-no-confidence',
        year: 2014,
        exam: 'PRELIMS',
        question: 'Consider the following statements regarding a No-Confidence Motion in India: 1. There is no mention of a No-Confidence Motion in the Constitution of India. 2. A Motion of No-Confidence can be introduced in the Lok Sabha only.',
        options: [
            { label: 'A', text: '1 only', isCorrect: false },
            { label: 'B', text: '2 only', isCorrect: false },
            { label: 'C', text: 'Both 1 and 2', isCorrect: true },
            { label: 'D', text: 'Neither 1 nor 2', isCorrect: false }
        ],
        answer: 'C',
        explanation: 'Statement 1 is Correct: The Constitution (Article 75) mentions collective responsibility but does not explicitly mention "No-Confidence Motion". It is mentioned in Rule 198 of the Lok Sabha Rules. Statement 2 is Correct: It can only be introduced in the Lok Sabha.',
        topicIds: [23, 21], // Parliament, Council of Ministers
        tags: ['Factual', 'Procedure'],
        difficulty: 'Hard'
    },

    // --- DIRECTIVE PRINCIPLES (DPSP) ---
    {
        id: '2015-welfare-state',
        year: 2015,
        exam: 'PRELIMS',
        question: 'The ideal of ‘Welfare State’ in the Indian Constitution is enshrined in its:',
        options: [
            { label: 'A', text: 'Preamble', isCorrect: false },
            { label: 'B', text: 'Directive Principles of State Policy', isCorrect: true },
            { label: 'C', text: 'Fundamental Rights', isCorrect: false },
            { label: 'D', text: 'Seventh Schedule', isCorrect: false }
        ],
        answer: 'B',
        explanation: 'DPSPs (Part IV) aim to establish a "Welfare State" by securing social and economic justice. The Preamble sets the objectives, but DPSP contains the concrete provisions for a welfare state.',
        topicIds: [9], // DPSP
        tags: ['Conceptual'],
        difficulty: 'Easy'
    },
    {
        id: '2020-gandhian-principles',
        year: 2020,
        exam: 'PRELIMS',
        question: 'Which part of the Constitution of India declares the ideal of Welfare State?',
        options: [
            { label: 'A', text: 'Directive Principles of State Policy', isCorrect: true },
            { label: 'B', text: 'Fundamental Rights', isCorrect: false },
            { label: 'C', text: 'Preamble', isCorrect: false },
            { label: 'D', text: 'Seventh Schedule', isCorrect: false }
        ],
        answer: 'A',
        explanation: 'Repetitive theme. DPSP embodies the concept of a Welfare State.',
        topicIds: [9], // DPSP
        tags: ['Conceptual'],
        difficulty: 'Easy'
    },

    // --- EMERGENCY ---
    {
        id: '2018-president-rule',
        year: 2018,
        exam: 'PRELIMS',
        question: 'If the President of India exercises his power as provided under Article 356 of the Constitution in respect of a particular State, then:',
        options: [
            { label: 'A', text: 'The Assembly of the State is automatically dissolved', isCorrect: false },
            { label: 'B', text: 'The powers of the Legislature of that State shall be exercisable by or under the authority of the Parliament', isCorrect: true },
            { label: 'C', text: 'Article 19 is suspended in that State', isCorrect: false },
            { label: 'D', text: 'The President can make laws relating to that State', isCorrect: false }
        ],
        answer: 'B',
        explanation: 'Under Article 356 (President\'s Rule), the State Legislature\'s powers are exercised by the Parliament. The Assembly may be suspended or dissolved, but dissolution is not automatic. Article 19 is suspended only under Article 358 (National Emergency), not President\'s Rule.',
        topicIds: [17, 33], // Emergency, State Legislature
        tags: ['Conceptual', 'Emergency'],
        difficulty: 'Hard'
    },

    // --- JUDICIARY ---
    {
        id: '2019-judge-removal',
        year: 2019,
        exam: 'PRELIMS',
        question: 'Consider the following statements: 1. The motion to impeach a Judge of the Supreme Court of India cannot be rejected by the Speaker of the Lok Sabha as per the Judges (Inquiry) Act, 1968. 2. The Constitution of India defines and gives details of what Constitutes ‘incapacity and proved misbehaviour’.',
        options: [
            { label: 'A', text: '1 only', isCorrect: false },
            { label: 'B', text: '2 only', isCorrect: false },
            { label: 'C', text: 'Both 1 and 2', isCorrect: false },
            { label: 'D', text: 'Neither 1 nor 2', isCorrect: true }
        ],
        answer: 'D',
        explanation: 'Statement 1 is Incorrect: The Speaker/Chairman CAN reject the motion. Statement 2 is Incorrect: The Constitution uses the terms "proved misbehaviour or incapacity" but does NOT define them.',
        topicIds: [27, 26], // Supreme Court, Judicial Review
        tags: ['Factual', 'Procedure'],
        difficulty: 'Hard'
    }
];

// --- DERIVED DATA & EXPORTS FOR DASHBOARD ---

export interface ChapterPYQStats {
    chapterId: number;
    chapterTitle: string;
    questions: PYQItem[];
    totalPYQs: number;
    lastAskedYear: number;
    frequency: 'high' | 'medium' | 'low';
    trendDirection: 'increasing' | 'stable' | 'decreasing';
}

export const PYQ_DATA_MAP: Record<number, ChapterPYQStats> = {};

// Initialize Map with Chapters
POLITY_REVISION_CHAPTERS.forEach(ch => {
    PYQ_DATA_MAP[ch.id] = {
        chapterId: ch.id,
        chapterTitle: ch.title,
        questions: [],
        totalPYQs: 0,
        lastAskedYear: 0,
        frequency: 'low',
        trendDirection: 'stable'
    };
});

// Populate Data
PYQ_DATA.forEach(q => {
    q.topicIds.forEach(tid => {
        if (PYQ_DATA_MAP[tid]) {
            PYQ_DATA_MAP[tid].questions.push(q);
            PYQ_DATA_MAP[tid].totalPYQs++;
            if (q.year > PYQ_DATA_MAP[tid].lastAskedYear) {
                PYQ_DATA_MAP[tid].lastAskedYear = q.year;
            }
        }
    });
});

// Calculate Trends and Frequency
Object.values(PYQ_DATA_MAP).forEach(ch => {
    // Frequency Logic
    if (ch.totalPYQs >= 5) ch.frequency = 'high';
    else if (ch.totalPYQs >= 2) ch.frequency = 'medium';
    else ch.frequency = 'low';

    // Trend Logic
    const recent = ch.questions.filter(q => q.year >= 2020).length;
    const old = ch.questions.filter(q => q.year < 2020 && q.year >= 2015).length;

    if (recent > old) ch.trendDirection = 'increasing';
    else if (recent < old && recent === 0) ch.trendDirection = 'decreasing';
    else ch.trendDirection = 'stable';
});

// Helper Functions
export const getPYQStatistics = () => {
    const totalQuestions = PYQ_DATA.length;
    const chaptersWithPYQs = Object.values(PYQ_DATA_MAP).filter(c => c.totalPYQs > 0).length;
    const highFrequencyTopics = Object.values(PYQ_DATA_MAP).filter(c => c.frequency === 'high').length;
    const mostRecentYear = Math.max(...PYQ_DATA.map(q => q.year));
    return { totalQuestions, chaptersWithPYQs, highFrequencyTopics, mostRecentYear };
};

export const getPYQTrendData = () => {
    const increasing = Object.values(PYQ_DATA_MAP).filter(c => c.trendDirection === 'increasing').map(c => c.chapterTitle);
    const stable = Object.values(PYQ_DATA_MAP).filter(c => c.trendDirection === 'stable' && c.totalPYQs > 0).map(c => c.chapterTitle);
    const decreasing = Object.values(PYQ_DATA_MAP).filter(c => c.trendDirection === 'decreasing').map(c => c.chapterTitle);
    return { increasing, stable, decreasing };
};

export const getYearWiseDistribution = () => {
    const map: Record<number, number> = {};
    PYQ_DATA.forEach(q => {
        map[q.year] = (map[q.year] || 0) + 1;
    });
    return Object.entries(map).map(([y, c]) => [Number(y), c] as [number, number]).sort((a, b) => b[0] - a[0]);
};

// --- HIGH YIELD CHAPTERS (For Dashboard) ---
export const HIGH_YIELD_CHAPTERS = [
    { id: 8, title: 'Fundamental Rights', expectedPYQs: 15 },
    { id: 23, title: 'Parliament', expectedPYQs: 12 },
    { id: 17, title: 'President', expectedPYQs: 8 },
    { id: 19, title: 'Emergency Provisions', expectedPYQs: 6 },
    { id: 9, title: 'DPSP', expectedPYQs: 5 },
    { id: 5, title: 'Preamble', expectedPYQs: 4 },
    { id: 26, title: 'Supreme Court', expectedPYQs: 7 },
    { id: 10, title: 'Fundamental Duties', expectedPYQs: 3 },
    { id: 36, title: 'Panchayati Raj', expectedPYQs: 5 },
    { id: 41, title: 'Scheduled Areas', expectedPYQs: 3 },
    { id: 12, title: 'Basic Structure', expectedPYQs: 4 },
    { id: 11, title: 'Amendment of Constitution', expectedPYQs: 4 }
];

// Removed dangling code block that caused syntax error
// .map(c => ({ ... }))

// --- SPECIFIC CHAPTER EXPORTS (Required by Modules) ---

export const PRESIDENT_PYQS = PYQ_DATA.filter(q =>
    q.question.toLowerCase().includes('president') ||
    q.topicIds.includes(20) ||
    q.topicIds.includes(52) // Assuming 52 might be President in some mapping, or just text match
);

export const FUNDAMENTAL_RIGHTS_PYQS = PYQ_DATA.filter(q =>
    q.topicIds.includes(8) ||
    q.topicIds.includes(9) ||
    q.topicIds.includes(10) ||
    q.tags.includes('Fundamental Rights')
);

export const EMERGENCY_PYQS = PYQ_DATA.filter(q =>
    q.topicIds.includes(19) ||
    q.tags.includes('Emergency') ||
    q.question.toLowerCase().includes('emergency')
);
