export interface SocietyTopic {
    id: string;
    title: string;
    description: string;
    subtopics: string[];
    days: number;
    category: 'Structure' | 'Issues' | 'Dynamics';
}

export const SOCIETY_SYLLABUS: SocietyTopic[] = [
    {
        id: 'diversity',
        title: "Salient Features & Diversity",
        description: "Unity in Diversity, Caste, Class, and Kinship.",
        subtopics: [
            "Unity in Diversity (Linguistic, Religious)",
            "Caste System & Changes",
            "Kinship & Family Structure"
        ],
        days: 3,
        category: 'Structure'
    },
    {
        id: 'women-population',
        title: "Role of Women & Population",
        description: "Gender issues and demographic trends.",
        subtopics: [
            "Women's Organizations & Movements",
            "Population Explosion & Control",
            "Issues: Dowry, Safety, Empowerment"
        ],
        days: 4,
        category: 'Issues'
    },
    {
        id: 'poverty-urbanization',
        title: "Poverty & Urbanization",
        description: "Developmental issues and urban challenges.",
        subtopics: [
            "Poverty & Hunger (Causes, Cycle)",
            "Urbanization: Slums, Migration",
            "Remedies for Urban Problems"
        ],
        days: 3,
        category: 'Issues'
    },
    {
        id: 'globalization',
        title: "Effects of Globalization",
        description: "Impact on culture, family, and economy.",
        subtopics: [
            "Impact on Women & Elderly",
            "Cultural Homogenization vs Glocalization",
            "Economic Liberalization & Society"
        ],
        days: 3,
        category: 'Dynamics'
    },
    {
        id: 'social-empowerment',
        title: "Secularism & Communalism",
        description: "Ideological issues threatening integrity.",
        subtopics: [
            "Communalism vs Secularism",
            "Regionalism: Causes & Impact",
            "Social Empowerment Measures"
        ],
        days: 3,
        category: 'Dynamics'
    }
];
