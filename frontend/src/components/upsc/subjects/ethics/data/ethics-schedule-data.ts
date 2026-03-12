import { ContentItem } from "../../types";
import { ethicsHumanInterface } from "./chapters/ethics-human-interface";
import { attitudeAptitude } from "./chapters/attitude-aptitude";
import { emotionalIntelligence } from "./chapters/emotional-intelligence";
import { probityGovernance } from "./chapters/probity-governance";
import { civilServiceIntegrity } from "./case-studies/civil-service-integrity";
import { corruptionEfficiencyCase } from "./case-studies/corruption-efficiency";

export interface EthicsTopic {
    id: string;
    title: string;
    description: string;
    subtopics: string[];
    days: number;
    category: 'Theory' | 'Applied' | 'Thinkers';
    // Link to new content structure
    contentId?: string;
    content?: ContentItem;
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
        category: 'Theory',
        contentId: 'ethics-human-interface',
        content: ethicsHumanInterface
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
        category: 'Theory',
        contentId: 'attitude-aptitude',
        content: attitudeAptitude
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
        category: 'Theory',
        contentId: 'emotional-intelligence',
        content: emotionalIntelligence
    },
    {
        id: 'theory-probity',
        title: "Probity in Governance",
        description: "Transparency, Accountability, and RTI.",
        subtopics: [
            "Concept of Public Service",
            "Philosophical Basis of Governance",
            "Information Sharing (RTI)"
        ],
        days: 3,
        category: 'Theory',
        contentId: 'probity-governance',
        content: probityGovernance
    },
    {
        id: 'applied-case-studies',
        title: "Case Studies: Integrity",
        description: "Solving real-world ethical dilemmas.",
        subtopics: [
            "Corruption vs Efficiency",
            "Private Interest vs Public Duty",
            "Corporate Governance Dilemmas",
            "Dilemmas in International Relations"
        ],
        days: 5,
        category: 'Applied',
        contentId: 'case-study-integrity',
        content: civilServiceIntegrity
    },
    {
        id: 'case-study-corruption',
        title: "CS: Corruption vs Efficiency",
        description: "Dilemma: Honest vs Efficient Officer.",
        subtopics: [
            "Merit vs Morality",
            "Administrative Delay",
            "Ethical Decision Making"
        ],
        days: 1,
        category: 'Applied',
        contentId: 'case-study-corruption',
        content: corruptionEfficiencyCase
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

// Helper map for dynamic loading by ID
// Helper map for dynamic loading by ID
export const ETHICS_CONTENT_MAP: Record<string, { content: ContentItem }> = {
    'theory-values': { content: ethicsHumanInterface },
    'theory-attitude': { content: attitudeAptitude },
    'theory-ei': { content: emotionalIntelligence },
    'theory-probity': { content: probityGovernance }, // Need to add to SYLLABUS if not present
    'applied-case-studies': { content: civilServiceIntegrity },
    'case-study-corruption': { content: corruptionEfficiencyCase } // Need to add to SYLLABUS if not present
};
