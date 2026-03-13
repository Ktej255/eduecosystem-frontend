export interface SchemeNode {
    id: string;
    name: string;
    ministry: string;
    objective: string;
}

export interface ConvergenceGoal {
    id: string;
    goal: string;
    description: string;
    schemes: SchemeNode[];
}

export const CONVERGENCE_DATA: ConvergenceGoal[] = [
    {
        id: 'water-sanitation',
        goal: 'Water & Sanitation',
        description: 'Convergence of missions to ensure clean water and open-defecation-free India.',
        schemes: [
            { id: 'jjm', name: 'Jal Jeevan Mission', ministry: 'Ministry of Jal Shakti', objective: 'Functional Household Tap Connections to all.' },
            { id: 'sbm-g', name: 'Swachh Bharat Mission (Grameen)', ministry: 'Ministry of Jal Shakti', objective: 'ODF Plus sustainability and solid/liquid waste management.' },
            { id: 'amrut', name: 'AMRUT 2.0', ministry: 'MoHUA', objective: 'Water supply and septage management in urban areas.' }
        ]
    },
    {
        id: 'women-empowerment',
        goal: 'Women Empowerment',
        description: 'Multi-sectoral approach to financial, health, and social security for women.',
        schemes: [
            { id: 'psk', name: 'Pradhan Mantri Matru Vandana Yojana', ministry: 'MoWCD', objective: 'Maternity benefit of ₹5,000 for the first child.' },
            { id: 'nrlm', name: 'Lakhpati Didi (via NRLM)', ministry: 'Ministry of Rural Development', objective: 'Financial empowerment of SHG women.' },
            { id: 'udyami-sakhi', name: 'Udyami Sakhi', ministry: 'MSME', objective: 'Entrepreneurship support for women.' }
        ]
    },
    {
        id: 'rural-livelihood',
        goal: 'Rural Livelihood',
        description: 'Ensuring social safety nets and infrastructure in rural India.',
        schemes: [
            { id: 'mgnrega', name: 'MGNREGA', ministry: 'Ministry of Rural Development', objective: '100 days of guaranteed wage employment.' },
            { id: 'pmgsy', name: 'PMGSY', ministry: 'Ministry of Rural Development', objective: 'All-weather road connectivity to habitations.' },
            { id: 'ddu-gky', name: 'DDU-GKY', ministry: 'Ministry of Rural Development', objective: 'Placement linked skill training for rural youth.' }
        ]
    },
    {
        id: 'urban-transformation',
        goal: 'Urban Transformation',
        description: 'Housing and smart infrastructure for inclusive urban growth.',
        schemes: [
            { id: 'pmay-u', name: 'PMAY-Urban', ministry: 'MoHUA', objective: 'Housing for all in urban areas.' },
            { id: 'smart-cities', name: 'Smart Cities Mission', ministry: 'MoHUA', objective: 'Promote cities with core infrastructure and sustainable environment.' },
            { id: 'pm-svanidhi', name: 'PM SVANidhi', ministry: 'MoHUA', objective: 'Micro-credit for street vendors.' }
        ]
    }
];
