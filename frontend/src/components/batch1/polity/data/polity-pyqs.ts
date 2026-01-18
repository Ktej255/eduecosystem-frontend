import { PYQQuestion } from '@/lib/pyq/pyq-types';

export const POLITY_PYQS: PYQQuestion[] = [
    {
        id: 'cse_2023_1',
        year: 2023,
        subject: 'Polity',
        topic: 'Constitutional Bodies',
        subtopicId: '10.1', // Election Commission
        question: "Consider the following statements about the Election Commission of India:\n1. The Chief Election Commissioner can be removed from office only in like manner and on like grounds as a Judge of the Supreme Court.\n2. The Constitution has not prescribed the qualifications (legal, educational, administrative or judicial) of the members of the Election Commission.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctIndex: 2, // Both are correct
        explanation: "Statement 1 is correct: CEC is removed like a SC Judge (Art 324(5)). Statement 2 is correct: The Constitution does not prescribe qualifications for EC members.",
        exam: 'CSE Prelims',
        difficulty: 'Moderate'
    },
    {
        id: 'cse_2023_2',
        year: 2023,
        subject: 'Polity',
        topic: 'Executive',
        subtopicId: '5.1', // President
        question: "Consider the following statements regarding the election of the President of India:\n1. The value of the vote of each MLA varies from State to State.\n2. The value of the vote of MPs of the Lok Sabha is more than the value of the vote of MPs of the Rajya Sabha.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctIndex: 0, // 1 only
        explanation: "Statement 1 is correct: Value of MLA vote depends on state population. Statement 2 is incorrect: Value of vote of every elected MP (LS or RS) is the same.",
        exam: 'CSE Prelims',
        difficulty: 'Moderate'
    },
    {
        id: 'cse_2022_1',
        year: 2022,
        subject: 'Polity',
        topic: 'Parliament',
        subtopicId: '5.2', // Parliament
        question: "Which one of the following statements is correct?",
        options: [
            "The Constitution of India defines its 'basic structure' in terms of federalism, secularism, fundamental rights and democracy.",
            "The Constitution of India provides for 'judicial review' to safeguard the citizens' liberties and to preserve the ideals on which the Constitution is based.",
            "The Constitution of India defines 'judicial review' in Article 13.",
            "The Constitution of India provides for 'judicial review' implicitly, though the term is not explicitly defined in the Constitution."
        ],
        correctIndex: 3, // D is correct (most appropriate)
        explanation: "The term 'Judicial Review' is nowhere defined in the Constitution, but the power is conferred on the Judiciary (Art 13, 32, 226). Option A is incorrect as 'Basic Structure' is a judicial innovation (Kesavananda Bharati case), not defined in Constitution.",
        exam: 'CSE Prelims',
        difficulty: 'Moderate'
    },
    {
        id: 'cse_2021_1',
        year: 2021,
        subject: 'Polity',
        topic: 'DPSP',
        subtopicId: '4.1', // DPSP
        question: "Under the Indian Constitution, concentration of wealth violates:",
        options: [
            "The Right to Equality",
            "The Directive Principles of State Policy",
            "The Right to Freedom",
            "The Concept of Welfare"
        ],
        correctIndex: 1, // DPSP
        explanation: "Article 39(c) of DPSP directs the State to ensure that the operation of the economic system does not result in the concentration of wealth and means of production to the common detriment.",
        exam: 'CSE Prelims',
        difficulty: 'Easy'
    },
    {
        id: 'cse_2021_2',
        year: 2021,
        subject: 'Polity',
        topic: 'Judiciary',
        subtopicId: '6.1', // Supreme Court
        question: "With reference to the Indian Judiciary, consider the following statements:\n1. Any retired judge of the Supreme Court of India can be called back to sit and act as a Supreme Court judge by the Chief Justice of India with prior permission of the President of India.\n2. A High Court in India has the power to review its own judgement as the Supreme Court does.\n\nWhich of the statements given above is/are correct?",
        options: [
            "1 only",
            "2 only",
            "Both 1 and 2",
            "Neither 1 nor 2"
        ],
        correctIndex: 2, // Both
        explanation: "Statement 1 is correct (Article 128). Statement 2 is correct (Article 215 - as a Court of Record).",
        exam: 'CSE Prelims',
        difficulty: 'Tough'
    },
    {
        id: 'cse_2020_1',
        year: 2020,
        subject: 'Polity',
        topic: 'Preamble',
        subtopicId: '2.2', // Preamble (assuming Preamble is 2.2 or similar)
        question: "The Preamble to the Constitution of India is:",
        options: [
            "A part of the Constitution but has no legal effect",
            "Not a part of the Constitution and has no legal effect either",
            "A part of the Constitution and has the same legal effect as any other part",
            "A part of the Constitution but has no legal effect independently of other parts"
        ],
        correctIndex: 3, // D
        explanation: "In Kesavananda Bharati case, SC held Preamble is part of Constitution. However, it is not a source of power nor prohibition (non-justiciable). It aids interpretation of other parts. Thus, D is the most precise answer.",
        exam: 'CSE Prelims',
        difficulty: 'Tough'
    },
    {
        id: 'cse_2019_1',
        year: 2019,
        subject: 'Polity',
        topic: 'Fundamental Rights',
        subtopicId: '3.1', // FR
        question: "Which one of the following categories of Fundamental Rights incorporates protection against untouchability as a form of discrimination?",
        options: [
            "Right against Exploitation",
            "Right to Freedom",
            "Right to Constitutional Remedies",
            "Right to Equality"
        ],
        correctIndex: 3, // Equality (Art 17)
        explanation: "Right to Equality includes Articles 14 to 18. Abolition of Untouchability is Article 17.",
        exam: 'CSE Prelims',
        difficulty: 'Easy'
    }
];
