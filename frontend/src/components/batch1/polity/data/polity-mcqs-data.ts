import { DAY3_MCQS } from './day3-mcqs';
import { DAY5_MCQS } from './day5-mcqs';

import { MCQ } from './mcq-utils';
export type { MCQ };

// Adapter for Day 3 Data (Chapters 16, 17 - Now directly compatible)
const legacyDay3: MCQ[] = DAY3_MCQS;

// Adapter for Day 5 Data (Chapter 7: Citizenship)
const legacyDay5: MCQ[] = DAY5_MCQS.map(item => {
    // All Day 5 questions are Chapter 7
    // Mapping specific topics if possible, otherwise generic 7.1
    let subtopicId = '7.1';
    if (item.subtopic?.includes('Article 5')) subtopicId = '7.2';
    if (item.subtopic?.includes('Article 6')) subtopicId = '7.2';
    if (item.subtopic?.includes('Citizenship Act')) subtopicId = '7.3';
    if (item.subtopic?.includes('Loss')) subtopicId = '7.4';
    if (item.subtopic?.includes('Single')) subtopicId = '7.5';
    if (item.subtopic?.includes('OCI')) subtopicId = '7.6';

    return {
        id: `legacy_d5_${item.id}`,
        subtopicId,
        question: item.question,
        options: item.options,
        correctIndex: item.correctAnswer,
        explanation: item.explanation || '',
        difficulty: (item.level as any) || 'Moderate',
        correctAnswer: item.correctAnswer
    };
});

// Seeded Content for Chapter 11 & 12 (New Schema)
const seededContent: MCQ[] = [
    // Chapter 11: Amendment
    {
        id: 'mcq_11.1_1',
        subtopicId: '11.1',
        question: 'Which of the following statements is INCORRECT regarding the procedure for amendment of the Constitution?',
        options: [
            'The bill can be initiated in either House of Parliament.',
            'The bill requires prior permission of the President.',
            'The bill must be passed in each House by a special majority.',
            'There is no provision for a joint sitting.'
        ],
        correctIndex: 1,
        explanation: 'The bill does NOT require the prior permission of the President (unlike a Money Bill).',
        difficulty: 'Moderate'
    },
    {
        id: 'mcq_11.1_2',
        subtopicId: '11.1',
        question: 'Can a Constitutional Amendment Bill be introduced by a private member?',
        options: [
            'Yes, by any MP.',
            'No, only by a Minister.',
            'Yes, but only in Lok Sabha.',
            'No, it requires Speaker\'s permission.'
        ],
        correctIndex: 0,
        explanation: 'The bill can be introduced either by a minister or by a private member.',
        difficulty: 'Easy'
    },
    {
        id: 'mcq_11.2_1',
        subtopicId: '11.2',
        question: 'Which of the following provisions can be amended by a Simple Majority of Parliament?',
        options: [
            'Fundamental Rights',
            'Election of the President',
            'Abolition of Legislative Councils in States',
            'Representation of States in Parliament'
        ],
        correctIndex: 2,
        explanation: 'Abolition or creation of legislative councils in states falls under Article 169 and can be amended by a simple majority.',
        difficulty: 'Moderate'
    },
    {
        id: 'mcq_11.4_1',
        subtopicId: '11.4',
        question: 'Which of the following requires ratification by half of the state legislatures?',
        options: [
            'Directive Principles of State Policy',
            'Goods and Services Tax (GST) Council',
            'Fundamental Duties',
            'Citizenship provisions'
        ],
        correctIndex: 1,
        explanation: 'GST Council (Article 279A) affects the federal structure and thus requires ratification by states.',
        difficulty: 'Tough'
    },
    {
        id: 'mcq_11.3_1',
        subtopicId: '11.3',
        question: 'The "Special Majority" required for amendment under Article 368 means:',
        options: [
            '2/3rd of members present and voting only.',
            'Majority of total membership AND 2/3rd of members present and voting.',
            'Majority of total membership only.',
            '3/4th of the members of the House.'
        ],
        correctIndex: 1,
        explanation: 'Special Majority strictly means Majority of Total Membership + 2/3rd of Present and Voting.',
        difficulty: 'Moderate'
    },

    // Chapter 12: Basic Structure
    {
        id: 'mcq_12.1_1',
        subtopicId: '12.1',
        question: 'The doctrine of "Basic Structure" limits the power of which of the following?',
        options: [
            'Judicial Review of Supreme Court',
            'Amending Power of Parliament under Article 368',
            'Power of the President',
            'Legislative powers of State Assemblies'
        ],
        correctIndex: 1,
        explanation: 'The doctrine puts a limitation on the amending power of the Parliament—it cannot destroy the basic structure.',
        difficulty: 'Easy'
    },
    {
        id: 'mcq_12.2_1',
        subtopicId: '12.2',
        question: 'Which of the following elements has been declared as "Basic Structure" by the Supreme Court?',
        options: [
            'Supremacy of the Constitution',
            'Rule of Law',
            'Independence of Judiciary',
            'All of the above'
        ],
        correctIndex: 3,
        explanation: 'All options listed are components of the basic structure as evolved through various judgments.',
        difficulty: 'Easy'
    },
    {
        id: 'mcq_12.2_2',
        subtopicId: '12.2',
        question: 'In which case did the SC rule that "Harmony and Balance between Fundamental Rights and DPSP" is a basic feature?',
        options: [
            'Kesavananda Bharati case (1973)',
            'Minerva Mills case (1980)',
            'Golak Nath case (1967)',
            'Indira Nehru Gandhi case (1975)'
        ],
        correctIndex: 1,
        explanation: 'In the Minerva Mills case (1980), SC held that the Indian Constitution is founded on the bedrock of the balance between FRs and DPSPs.',
        difficulty: 'Moderate'
    },
    // Chapter 13: Parliamentary System
    {
        id: 'mcq_13.1_1',
        subtopicId: '13.1',
        question: 'Which of the following is NOT a feature of the Parliamentary System of government in India?',
        options: [
            'Presence of nominal and real executives',
            'Majority party rule',
            'Dissolution of the Upper House',
            'Collective responsibility of the executive'
        ],
        correctIndex: 2,
        explanation: 'The Rajya Sabha (Upper House) is a permanent body and is not subject to dissolution. Only the Lok Sabha (Lower House) can be dissolved.',
        difficulty: 'Easy'
    },
    {
        id: 'mcq_13.2_1',
        subtopicId: '13.2',
        question: 'The "Collective Responsibility" of the Council of Ministers implies responsibility to:',
        options: [
            'The President',
            'The Prime Minister',
            'The Parliament (in general)',
            'The Lok Sabha (specifically)'
        ],
        correctIndex: 3,
        explanation: 'Article 75 clearly states that the Council of Ministers shall be collectively responsible to the Lok Sabha (House of the People).',
        difficulty: 'Moderate'
    },
    {
        id: 'mcq_13.3_1',
        subtopicId: '13.3',
        question: 'Which of the following statements regarding the Indian and British Parliamentary systems is CORRECT?',
        options: [
            'India has a sovereign Parliament like Britain.',
            'In Britain, the Prime Minister must be a member of the Lower House.',
            'The Head of State in both countries is a Monarch.',
            'In India, a person who is not a member of Parliament cannot be appointed as Minister.'
        ],
        correctIndex: 1,
        explanation: 'In the UK, the PM must be from the House of Commons. In India, PM can be from either House. Also, Indian Parliament is not sovereign due to a written Constitution and Judicial Review.',
        difficulty: 'Tough'
    },
    {
        id: 'mcq_13.2_2',
        subtopicId: '13.2',
        question: 'The "Double Membership" is a feature of which system?',
        options: [
            'Presidential System',
            'Parliamentary System',
            'Federal System',
            'Unitary System'
        ],
        correctIndex: 1,
        explanation: 'In a Parliamentary system, ministers are members of both the legislature and the executive.',
        difficulty: 'Easy'
    },

    // Chapter 14: Federal System
    {
        id: 'mcq_14.1_1',
        subtopicId: '14.1',
        question: 'The Indian Federal system is based on the Canadian model. Which of the following is NOT a feature of the Canadian model?',
        options: [
            'Formation by way of disintegration.',
            'Appointment of governors by the Centre.',
            'Vesting of residuary powers in the Centre.',
            'Equal representation of states in the Upper House.'
        ],
        correctIndex: 3,
        explanation: 'Equal representation of states in the Upper House is a feature of the US Federation. In Canada (and India), states are not equally represented.',
        difficulty: 'Tough'
    },
    {
        id: 'mcq_14.2_1',
        subtopicId: '14.2',
        question: 'Which of the following is a UNITARY feature of the Indian Constitution?',
        options: [
            'Written Constitution',
            'Rigidity of Constitution',
            'Destructible states',
            'Independent Judiciary'
        ],
        correctIndex: 2,
        explanation: 'The Parliament can unilaterally alter the area, boundaries or name of any state (Article 3), making states destructible. This is a unitary feature. The others are federal features.',
        difficulty: 'Moderate'
    },
    {
        id: 'mcq_14.2_2',
        subtopicId: '14.2',
        question: 'Who described the Indian Constitution as "Bargaining Federalism"?',
        options: [
            'K.C. Wheare',
            'Morris Jones',
            'Granville Austin',
            'Ivor Jennings'
        ],
        correctIndex: 1,
        explanation: 'Morris Jones described it as "Bargaining Federalism". K.C. Wheare called it "Quasi-federal".',
        difficulty: 'Tough'
    },
    {
        id: 'mcq_14.3_1',
        subtopicId: '14.3',
        question: 'Article 1 of the Constitution describes India as a:',
        options: [
            'Federation of States',
            'Union of States',
            'Confederation of States',
            'United States of India'
        ],
        correctIndex: 1,
        explanation: 'Article 1 states: "India, that is Bharat, shall be a Union of States".',
        difficulty: 'Easy'
    },

    // Chapter 15: Centre-State Relations
    {
        id: 'mcq_15.1_1',
        subtopicId: '15.1',
        question: 'Which of the following matters is NOT included in the Union List?',
        options: [
            'Defence',
            'Banking',
            'Foreign Affairs',
            'Public Order'
        ],
        correctIndex: 3,
        explanation: 'Public Order (and Police) is a subject in the State List.',
        difficulty: 'Easy'
    },
    {
        id: 'mcq_15.1_2',
        subtopicId: '15.1',
        question: 'Under Article 249, who has the power to authorize Parliament to make a law on a State subject?',
        options: [
            'The President',
            'The Lok Sabha',
            'The Rajya Sabha',
            'The State Legislatures'
        ],
        correctIndex: 2,
        explanation: 'The Rajya Sabha can authorize Parliament to legislate on a state subject in national interest by passing a resolution with 2/3rd majority.',
        difficulty: 'Moderate'
    },
    {
        id: 'mcq_15.1_3',
        subtopicId: '15.1',
        question: 'In case of a conflict between a Central Law and a State Law on a Concurrent Subject, the State Law prevails if:',
        options: [
            'It was passed before the Central Law.',
            'It has received the assent of the President.',
            'The Supreme Court declares so.',
            'The Governor gives special permission.'
        ],
        correctIndex: 1,
        explanation: 'If a State law on a concurrent subject has received the assent of the President, it prevails in that state over the Central law. However, Parliament can override it by a subsequent law.',
        difficulty: 'Tough'
    },
    {
        id: 'mcq_15.3_1',
        subtopicId: '15.3',
        question: 'Which Commission was appointed in 1983 to review Centre-State relations?',
        options: [
            'Punchhi Commission',
            'Sarkaria Commission',
            'Rajamannar Committee',
            'Anandpur Sahib Resolution'
        ],
        correctIndex: 1,
        explanation: 'The Sarkaria Commission was appointed in 1983. Punchhi Commission was in 2007.',
        difficulty: 'Moderate'
    },

    // CHAPTER 16: INTER-STATE RELATIONS
    {
        id: 'mcq_16.1_1',
        subtopicId: '16.1',
        question: 'Under Article 262, who has the power to adjudicate inter-state water disputes?',
        options: [
            'Supreme Court',
            'President of India',
            'Parliament by Law',
            'Inter-State Council'
        ],
        correctIndex: 2,
        explanation: 'Article 262 empowers Parliament to provide for the adjudication of any dispute or complaint with respect to the use, distribution or control of the waters of, or in, any inter-state river or river valley.',
        difficulty: 'Moderate'
    },
    {
        id: 'mcq_16.2_1',
        subtopicId: '16.2',
        question: 'Which of the following is NOT a function of the Inter-State Council under Article 263?',
        options: [
            'Inquiring into disputes between states',
            'Investigating subjects of common interest',
            'Making recommendations for coordination of policy',
            'Settling legal boundary disputes between states'
        ],
        correctIndex: 3,
        explanation: 'The Inter-State Council is an advisory body. Legal boundary disputes effectively fall under the original jurisdiction of the Supreme Court (Article 131), not the Council.',
        difficulty: 'Tough'
    },

    // CHAPTER 17: EMERGENCY PROVISIONS
    {
        id: 'mcq_17.1_1',
        subtopicId: '17.1',
        question: 'A proclamation of National Emergency must be approved by both Houses of Parliament within:',
        options: [
            'One Month',
            'Two Months',
            'Six Months',
            'Fourteen Days'
        ],
        correctIndex: 0,
        explanation: 'Originally it was two months, but the 44th Amendment Act of 1978 reduced the period to one month.',
        difficulty: 'Moderate'
    },
    {
        id: 'mcq_17.2_1',
        subtopicId: '17.2',
        question: 'What is the maximum period for which President\'s Rule can be extended in a state with Election Commission certification?',
        options: [
            'One Year',
            'Two Years',
            'Three Years',
            'Six Months'
        ],
        correctIndex: 2,
        explanation: 'The maximum period is three years. However, beyond one year, it can be extended by six months at a time only if two conditions (Emergency + EC certificate) are met.',
        difficulty: 'Tough'
    },

    // CHAPTER 18: PRESIDENT
    {
        id: 'mcq_18.1_1',
        subtopicId: '18.1',
        question: 'Who among the following does NOT participate in the election of the President?',
        options: [
            'Elected members of Lok Sabha',
            'Elected members of Rajya Sabha',
            'Nominated members of Rajya Sabha',
            'Elected members of State Legislative Assemblies'
        ],
        correctIndex: 2,
        explanation: 'The electoral college consists only of elected members. Nominated members of Parliament and State Assemblies do not participate.',
        difficulty: 'Easy'
    },
    {
        id: 'mcq_18.2_1',
        subtopicId: '18.2',
        question: 'The impeachment of the President can be initiated in:',
        options: [
            'Lok Sabha only',
            'Rajya Sabha only',
            'Either House of Parliament',
            'Supreme Court'
        ],
        correctIndex: 2,
        explanation: 'The impeachment charges can be initiated by either House of Parliament (Article 61).',
        difficulty: 'Easy'
    },
    {
        id: 'mcq_18.5_1',
        subtopicId: '18.5',
        question: 'An ordinance promulgated by the President must be approved by Parliament within how many weeks of its reassembly?',
        options: [
            'Four weeks',
            'Six weeks',
            'Eight weeks',
            'Twelve weeks'
        ],
        correctIndex: 1,
        explanation: 'It must be approved by both provisions of Parliament within six weeks from the reassembly of Parliament. Otherwise, it ceases to operate.',
        difficulty: 'Moderate'
    }
];

import { PARLIAMENT_MCQS } from './parliament-mcqs';

export const POLITY_MCQS_DATA: MCQ[] = [
    ...legacyDay3,
    ...legacyDay5,
    ...seededContent,
    ...PARLIAMENT_MCQS
];

export function getMCQsForSubtopics(subtopicIds: string[]): MCQ[] {
    // Also support partial matches for Chapter-level requests (e.g. '1.')
    return POLITY_MCQS_DATA.filter(mcq =>
        subtopicIds.some(id => mcq.subtopicId === id || mcq.subtopicId?.startsWith(id + '.'))
    );
}
