// Day 3 Flashcards - Jan 14
// Topic: Inter-State Relations (Ch 16) & Emergency Provisions (Ch 17)

import type { Flashcard } from '../../flashcard/flashcard-utils';

export const DAY3_FLASHCARDS: Flashcard[] = [
    // ==========================================
    // CHAPTER 16: INTER-STATE RELATIONS
    // ==========================================

    // 16.1 Inter-State Water Disputes
    {
        id: 'd3-16-1-1',
        front: 'Which Article empowers Parliament to adjudicate inter-state water disputes?',
        back: 'Article 262. It also empowers Parliament to exclude such disputes from the jurisdiction of the Supreme Court.',
        source: 'Inter-State Relations',
        subtopicId: '16.1',
        category: 'article'
    },
    {
        id: 'd3-16-1-2',
        front: 'What is the significance of the Inter-State Water Disputes Act, 1956?',
        back: 'It empowers the Central Government to set up an ad hoc Tribunal for the adjudication of a dispute between two or more states in relation to river waters.',
        source: 'Inter-State Relations',
        subtopicId: '16.1',
        category: 'fact'
    },

    // 16.2 Inter-State Councils
    {
        id: 'd3-16-2-1',
        front: 'Who establishes the Inter-State Council and under which Article?',
        back: 'The President established it under Article 263 to investigate and discuss subjects of common interest between the Union and States.',
        source: 'Inter-State Relations',
        subtopicId: '16.2',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd3-16-2-2',
        front: 'Who is the Chairman of the Inter-State Council?',
        back: 'The Prime Minister.',
        source: 'Inter-State Relations',
        subtopicId: '16.2',
        category: 'fact'
    },

    // 16.3 Zonal Councils
    {
        id: 'd3-16-3-1',
        front: 'Are Zonal Councils constitutional bodies?',
        back: 'No. They are Statutory bodies established by the States Reorganisation Act of 1956.',
        source: 'Inter-State Relations',
        subtopicId: '16.3',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd3-16-3-2',
        front: 'Who chairs all the Zonal Councils?',
        back: 'The Union Home Minister.',
        source: 'Inter-State Relations',
        subtopicId: '16.3',
        category: 'fact'
    },
    {
        id: 'd3-16-3-3',
        front: 'Which Zonal Council was created later by a separate act in 1971?',
        back: 'The North-Eastern Council (Created by North-Eastern Council Act of 1971).',
        source: 'Inter-State Relations',
        subtopicId: '16.3',
        category: 'fact'
    },

    // 16.4 Inter-State Trade and Commerce
    {
        id: 'd3-16-4-1',
        front: 'Which Article guarantees freedom of trade, commerce and intercourse throughout India?',
        back: 'Article 301. However, this freedom is not absolute and can be restricted in public interest.',
        source: 'Inter-State Relations',
        subtopicId: '16.4',
        category: 'article'
    },

    // ==========================================
    // CHAPTER 17: EMERGENCY PROVISIONS
    // ==========================================

    // 17.1 National Emergency (Art 352)
    {
        id: 'd3-17-1-1',
        front: 'What are the three grounds for declaring a National Emergency under Article 352?',
        back: 'War, External Aggression, or Armed Rebellion.',
        source: 'Emergency Provisions',
        subtopicId: '17.1',
        category: 'concept',
        highlight: true
    },
    {
        id: 'd3-17-1-2',
        front: 'Which amendment substituted "Armed Rebellion" for "Internal Disturbance"?',
        back: '44th Amendment Act, 1978. It was done to prevent misuse (as seen in 1975).',
        source: 'Emergency Provisions',
        subtopicId: '17.1',
        category: 'fact'
    },
    {
        id: 'd3-17-1-3',
        front: 'How long can a National Emergency continue if approved by Parliament?',
        back: 'It continues for 6 months at a time. It can be extended indefinitely with Parliamentary approval every 6 months.',
        source: 'Emergency Provisions',
        subtopicId: '17.1',
        category: 'fact'
    },
    {
        id: 'd3-17-1-4',
        front: 'What effect does National Emergency have on Fundamental Rights (specifically Art 19)?',
        back: 'Article 358: Art 19 is automatically suspended ONLY if Emergency is declared on grounds of War or External Aggression (not Armed Rebellion).',
        source: 'Emergency Provisions',
        subtopicId: '17.1',
        category: 'concept',
        highlight: true
    },

    // 17.2 President's Rule (Art 356)
    {
        id: 'd3-17-2-1',
        front: 'What is the ground for imposing President\'s Rule under Article 356?',
        back: 'Failure of constitutional machinery in the state.',
        source: 'Emergency Provisions',
        subtopicId: '17.2',
        category: 'article'
    },
    {
        id: 'd3-17-2-2',
        front: 'What is the maximum period for which President\'s Rule can be extended?',
        back: 'Maximum 3 years. However, beyond 1 year, it requires a resolution by Parliament AND a certification by Election Commission stating difficulty in holding elections.',
        source: 'Emergency Provisions',
        subtopicId: '17.2',
        category: 'fact',
        highlight: true
    },
    {
        id: 'd3-17-2-3',
        front: 'Does the State Legislature get dissolved immediately upon President\'s Rule?',
        back: 'Not necessarily. It can be suspended or dissolved. The convention is to keep it in suspended animation until Parliament approves the Proclamation.',
        source: 'Emergency Provisions',
        subtopicId: '17.2',
        category: 'concept'
    },

    // 17.3 Financial Emergency (Art 360)
    {
        id: 'd3-17-3-1',
        front: 'Has Financial Emergency (Article 360) ever been declared in India?',
        back: 'No, never.',
        source: 'Emergency Provisions',
        subtopicId: '17.3',
        category: 'fact'
    },
    {
        id: 'd3-17-3-2',
        front: 'What is the effect of Financial Emergency on salaries?',
        back: 'The President may issue directions for the reduction of salaries and allowances of all or any class of persons serving the Union, including Judges of Supreme Court and High Courts.',
        source: 'Emergency Provisions',
        subtopicId: '17.3',
        category: 'concept'
    },

    // 17.4 Criticism & Safeguards
    {
        id: 'd3-17-4-1',
        front: 'Which amendment made the declaration of National Emergency immune from Judicial Review (later struck down)?',
        back: '38th Amendment Act, 1975. This was deleted by the 44th Amendment Act, 1978; Minerva Mills case (1980) reaffirmed Judicial Review.',
        source: 'Emergency Provisions',
        subtopicId: '17.4',
        category: 'fact'
    },
    {
        id: 'd3-17-4-2',
        front: 'Can Rights under Articles 20 and 21 be suspended during National Emergency?',
        back: 'No. The 44th Amendment provided that the enforcement of rights under Articles 20 (Protection in conviction) and 21 (Life and Liberty) cannot be suspended even during Emergency.',
        source: 'Emergency Provisions',
        subtopicId: '17.4',
        category: 'concept',
        highlight: true
    }
];

export default DAY3_FLASHCARDS;
