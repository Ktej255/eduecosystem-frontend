export interface EthicsTopic {
    id: string;
    title: string;
    description: string;
    subtopics: string[];
    days: number;
    category: 'Theory' | 'Applied' | 'Thinkers';
}

export const ETHICS_SYLLABUS: EthicsTopic[] = [
    {
        id: 'theory-values',
        title: "Human Values & Ethics",
        description: "Essence of Ethics, Determinants, and Consequences.",
        subtopics: [
            "Ethics in Private vs Public Relationships",
            "Human Values: Lessons from Great Leaders",
            "Role of Family & Society in inculcating values"
        ],
        days: 3,
        category: 'Theory'
    },
    {
        id: 'theory-attitude',
        title: "Attitude & Aptitude",
        description: "Content, Structure, Function of Attitude.",
        subtopics: [
            "Moral & Political Attitude",
            "Social Influence & Persuasion",
            "Foundation Values for Civil Service (Integrity, Impartiality)"
        ],
        days: 4,
        category: 'Theory'
    },
    {
        id: 'theory-ei',
        title: "Emotional Intelligence",
        description: "Concepts and their utility in administration.",
        subtopics: [
            "Self Awareness & Regulation",
            "Empathy & Social Skills",
            "Application in Governance"
        ],
        days: 2,
        category: 'Theory'
    },
    {
        id: 'applied-case-studies',
        title: "Case Studies",
        description: "Solving real-world ethical dilemmas.",
        subtopics: [
            "Corruption vs Efficiency",
            "Private Interest vs Public Duty",
            "Corporate Governance Dilemmas",
            "Dilemmas in International Relations"
        ],
        days: 5,
        category: 'Applied'
    },
    {
        id: 'thinkers',
        title: "Moral Thinkers",
        description: "Philosophies from India and the World.",
        subtopics: [
            "Western: Kant, Mill, Aristotle",
            "Indian: Kautilya, Gandhi, Ambedkar",
            "Modern Admin: Nolan Principles"
        ],
        days: 3,
        category: 'Thinkers'
    }
];
