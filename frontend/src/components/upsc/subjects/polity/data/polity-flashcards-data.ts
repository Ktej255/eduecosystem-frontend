export interface Flashcard {
    id: string;
    subtopicId?: string;
    question?: string;
    answer?: string;
    front?: string;
    back?: string;
    [key: string]: any;
}

import { PARLIAMENT_FLASHCARDS } from './parliament-flashcards';

// Initial content for Chapter 11: Amendment of the Constitution
export const POLITY_FLASHCARDS_DATA: Flashcard[] = [
    ...PARLIAMENT_FLASHCARDS,
    // Note: WEEK1_FLASHCARDS are in a different format (front/back) - access via content-registry.ts

    // 11.1 Procedure for Amendment
    {
        id: 'fc_11.1_1',
        subtopicId: '11.1',
        question: 'Who can initiate an amendment to the Constitution?',
        answer: 'An amendment can be initiated only by the introduction of a bill in either House of Parliament. It CANNOT be introduced in the state legislature.'
    },
    {
        id: 'fc_11.1_2',
        subtopicId: '11.1',
        question: 'Does a Constitutional Amendment Bill require prior permission of the President?',
        answer: 'No, the bill does NOT require the prior permission of the President for introduction.'
    },
    {
        id: 'fc_11.1_3',
        subtopicId: '11.1',
        question: 'What happens in case of a deadlock between houses on an Amendment Bill?',
        answer: 'There is NO provision for a joint sitting of the two Houses for the purpose of deliberation and passage of a constitutional amendment bill.'
    },

    // 11.2 Simple Majority
    {
        id: 'fc_11.2_1',
        subtopicId: '11.2',
        question: 'What constitutes a "Simple Majority"?',
        answer: 'Simple majority refers to a majority of the members of the House present and voting.'
    },
    {
        id: 'fc_11.2_2',
        subtopicId: '11.2',
        question: 'Name two provisions amended by Simple Majority.',
        answer: '1. Admission or establishment of new states.\n2. Abolition or creation of legislative councils in states.\n3. Rules of procedure in Parliament.'
    },

    // 11.3 Special Majority
    {
        id: 'fc_11.3_1',
        subtopicId: '11.3',
        question: 'What constitutes a "Special Majority" under Article 368?',
        answer: 'A majority of the total membership of the House AND a majority of two-thirds of the members of the House present and voting.'
    },
    {
        id: 'fc_11.3_2',
        subtopicId: '11.3',
        question: 'Which provisions require Special Majority?',
        answer: '1. Fundamental Rights.\n2. Directive Principles of State Policy.\n3. All other provisions which are not covered by the other two categories.'
    },

    // 11.4 Special Majority + Ratification
    {
        id: 'fc_11.4_1',
        subtopicId: '11.4',
        question: 'When is State Ratification required?',
        answer: 'When the amendment relates to the federal structure of the Constitution. It requires ratification by legislatures of half of the states by a simple majority.'
    },
    {
        id: 'fc_11.4_2',
        subtopicId: '11.4',
        question: 'What is the time limit for states to give consent?',
        answer: 'The Constitution does NOT specify any time limit within which the states should give their consent to the bill.'
    },

    // 11.5 Criticism
    {
        id: 'fc_11.5_1',
        subtopicId: '11.5',
        question: 'Why is the amendment procedure criticized as rigid?',
        answer: 'Because for many important provisions, a special majority is required which is difficult to obtain. Also, the involvement of states makes it cumbersome.'
    },

    // 11.5 (Extra)
    {
        id: 'fc_11.5_2',
        subtopicId: '11.5',
        question: 'What constitutes the "Basic Structure" limitation?',
        answer: 'Parliament cannot amend those provisions which form the "basic structure" of the Constitution. This was ruled by the SC in Kesavananda Bharati case (1973).'
    },

    // ----------------------------------------------------
    // Chapter 12: Basic Structure of the Constitution
    // ----------------------------------------------------

    // 12.1 Emergence
    {
        id: 'fc_12.1_1',
        subtopicId: '12.1',
        question: 'Which case introduced the concept of "Basic Structure"?',
        answer: 'The Kesavananda Bharati case (1973).'
    },
    {
        id: 'fc_12.1_2',
        subtopicId: '12.1',
        question: 'What was the Supreme Court\'s stance in the Shankari Prasad case (1951)?',
        answer: 'The SC ruled that the power of Parliament to amend the Constitution under Article 368 also includes the power to amend Fundamental Rights.'
    },

    // 12.2 Kesavananda Bharati Case
    {
        id: 'fc_12.2_1',
        subtopicId: '12.2',
        question: 'What did the 24th Amendment Act (1971) declare?',
        answer: 'It declared that Parliament has the power to abridge or take away any of the Fundamental Rights under Article 368.'
    },
    {
        id: 'fc_12.2_2',
        subtopicId: '12.2',
        question: 'Did the SC uphold the 24th Amendment in Kesavananda Bharati case?',
        answer: 'Yes, it upheld the validity of the 24th Amendment Act but stated that Parliament cannot alter the "basic structure" of the Constitution.'
    },

    // 12.3 Elements
    {
        id: 'fc_12.3_1',
        subtopicId: '12.3',
        question: 'Name three components of the Basic Structure.',
        answer: '1. Supremacy of the Constitution.\n2. Sovereign, democratic and republican nature of the Indian polity.\n3. Secular character of the Constitution.'
    },
    {
        id: 'fc_12.3_2',
        subtopicId: '12.3',
        question: 'Is "Judicial Review" part of the Basic Structure?',
        answer: 'Yes, Judicial Review is an integral part of the Basic Structure.'
    },
    {
        id: 'fc_12.3_3',
        subtopicId: '12.3',
        question: 'Is the "Parliamentary System" part of Basic Structure?',
        answer: 'Yes, the Parliamentary System of Government is part of the Basic Structure.'
    },

    // Chapter 13: Parliamentary System
    {
        id: '13.1_1',
        subtopicId: '13.1',
        question: 'What are the two other names for the Parliamentary System of government?',
        answer: '1. Cabinet Government (due to nucleus of power)\n2. Responsible Government (accountable to legislature)\n3. Westminster Model'
    },
    {
        id: '13.1_2',
        subtopicId: '13.1',
        question: 'Article 74 and 75 deal with the Parliamentary System at which level?',
        answer: 'The Centre (Union Executive).'
    },
    {
        id: '13.2_1',
        subtopicId: '13.2',
        question: 'Which feature of the Parliamentary System prevents authoritarianism?',
        answer: 'Collective Responsibility (The Executive is responsible to the Legislature).'
    },
    {
        id: '13.2_2',
        subtopicId: '13.2',
        question: 'What is the "Bedrock principle" of the parliamentary system?',
        answer: 'Principle of Collective Responsibility (Article 75).'
    },
    {
        id: '13.3_1',
        subtopicId: '13.3',
        question: 'Is the Indian Prime Minister required to be a member of the Lower House only?',
        answer: 'No. The PM can be from either Rajya Sabha or Lok Sabha (unlike the UK where PM must be from House of Commons).'
    },
    {
        id: '13.3_2',
        subtopicId: '13.3',
        question: 'What is "Shadow Cabinet"?',
        answer: 'A unique institution of the British Cabinet system formed by the opposition to balance the ruling cabinet and prepare for future office. It does not exist in India.'
    },

    // Chapter 14: Federal System
    {
        id: '14.1_1',
        subtopicId: '14.1',
        question: 'What is the literal meaning of the word "Federation"?',
        answer: 'It is derived from the Latin word "foedus" which means treaty or agreement.'
    },
    {
        id: '14.1_2',
        subtopicId: '14.1',
        question: 'The Indian Federation is based on which model?',
        answer: 'Canadian Model (giving voice to the Centre) rather than the American Model.'
    },
    {
        id: '14.2_1',
        subtopicId: '14.2',
        question: 'Name two unitary features of the Indian Constitution?',
        answer: '1. Strong Centre\n2. Single Constitution\n3. Single Citizenship\n4. Flexibility of Constitution\n5. Appointment of Governor'
    },
    {
        id: '14.2_2',
        subtopicId: '14.2',
        question: 'Is the term "Federation" used in the Constitution of India?',
        answer: 'No. Article 1 describes India as a "Union of States".'
    },
    {
        id: '14.3_1',
        subtopicId: '14.3',
        question: 'Who described the Indian Constitution as "Quasi-federal"?',
        answer: 'K.C. Wheare.'
    },
    {
        id: '14.3_2',
        subtopicId: '14.3',
        question: 'What did Granville Austin call Indian Federalism?',
        answer: '"Cooperative Federalism".'
    },

    // Chapter 15: Centre-State Relations
    {
        id: '15.1_1',
        subtopicId: '15.1',
        question: 'Articles 245 to 255 in Part XI deal with which aspect of Centre-State relations?',
        answer: 'Legislative Relations.'
    },
    {
        id: '15.1_2',
        subtopicId: '15.1',
        question: 'In case of a conflict between the Concurrent List and State List, which one prevails?',
        answer: 'The Concurrent List prevails.'
    },
    {
        id: '15.1_3',
        subtopicId: '15.1',
        question: 'What is the "Residuary Power" of legislation?',
        answer: 'Power to make laws with respect to any matter not enumerated in any of the three lists. In India, it is vested in the Parliament.'
    },
    {
        id: '15.2_1',
        subtopicId: '15.2',
        question: 'Which article empowers Parliament to legislate on a State subject in "National Interest"?',
        answer: 'Article 249 (Resolution by Rajya Sabha).'
    },
    {
        id: '15.3_1',
        subtopicId: '15.3',
        question: 'Who appoints the Inter-State Council?',
        answer: 'The President (Article 263).'
    },
    {
        id: '15.4_1',
        subtopicId: '15.4',
        question: 'What is the main source of financial dependence of states on the centre?',
        answer: 'Grants-in-aid (Article 275 and 282).'
    },

    // CHAPTER 16: INTER-STATE RELATIONS
    // 16.1 Inter-State Water Disputes
    {
        id: 'fc_16.1_1',
        subtopicId: '16.1',
        question: 'Which Article empowers Parliament to adjudicate inter-state water disputes?',
        answer: 'Article 262.'
    },
    {
        id: 'fc_16.1_2',
        subtopicId: '16.1',
        question: 'Can the Supreme Court exercise jurisdiction over inter-state water disputes?',
        answer: 'No, Parliament may by law provide that neither the Supreme Court nor any other court shall exercise jurisdiction in respect of any such dispute or complaint.'
    },
    // 16.2 Inter-State Councils
    {
        id: 'fc_16.2_1',
        subtopicId: '16.2',
        question: 'Who can establish an Inter-State Council?',
        answer: 'The President can establish an Inter-State Council under Article 263.'
    },
    {
        id: 'fc_16.2_2',
        subtopicId: '16.2',
        question: 'What is the function of the Inter-State Council?',
        answer: 'To inquire into and advise upon disputes between states and to investigate and discuss subjects of common interest.'
    },

    // CHAPTER 17: EMERGENCY PROVISIONS
    // 17.1 National Emergency
    {
        id: 'fc_17.1_1',
        subtopicId: '17.1',
        question: 'On what grounds can a National Emergency be declared?',
        answer: 'War, External Aggression, or Armed Rebellion (Article 352).'
    },
    {
        id: 'fc_17.1_2',
        subtopicId: '17.1',
        question: 'Who approves the proclamation of a National Emergency?',
        answer: 'Both Houses of Parliament must approve it within one month by a special majority.'
    },
    // 17.2 President’s Rule
    {
        id: 'fc_17.2_1',
        subtopicId: '17.2',
        question: 'What is the maximum duration of President’s Rule in a state?',
        answer: 'Normally 3 years, but can be extended beyond 1 year only if a National Emergency is in operation OR the Election Commission certifies that elections cannot be held.'
    },
    // 17.4 Criticism
    {
        id: 'fc_17.4_1',
        subtopicId: '17.4',
        question: 'How does emergency affect the federal character of the Constitution?',
        answer: 'It converts the federal structure into a unitary one without a formal amendment of the Constitution.'
    },

    // CHAPTER 18: PRESIDENT
    // 18.1 Election and Qualifications
    {
        id: 'fc_18.1_1',
        subtopicId: '18.1',
        question: 'Who participates in the election of the President?',
        answer: 'Elected members of both Houses of Parliament and elected members of the Legislative Assemblies of the States (including Delhi and Puducherry).'
    },
    {
        id: 'fc_18.1_2',
        subtopicId: '18.1',
        question: 'What is the minimum age to be eligible for the office of President?',
        answer: '35 years.'
    },
    // 18.2 Impeachment
    {
        id: 'fc_18.2_1',
        subtopicId: '18.2',
        question: 'On what ground can the President be impeached?',
        answer: 'Violation of the Constitution.'
    },
    {
        id: 'fc_18.2_2',
        subtopicId: '18.2',
        question: 'Who can initiate impeachment charges against the President?',
        answer: 'Either House of Parliament.'
    },
    // 18.5 Ordinance Power
    {
        id: 'fc_18.5_1',
        subtopicId: '18.5',
        question: 'When can the President promulgate an ordinance?',
        answer: 'Only when both Houses of Parliament are not in session (Article 123).'
    },
    {
        id: 'fc_18.5_2',
        subtopicId: '18.5',
        question: 'What is the maximum life of an ordinance without parliamentary approval?',
        answer: '6 months and 6 weeks.'
    }
];

export function getFlashcardsForSubtopics(subtopicIds: string[]): Flashcard[] {
    return POLITY_FLASHCARDS_DATA.filter(fc => fc.subtopicId && subtopicIds.includes(fc.subtopicId));
}
