export interface Ministry {
    id: string;
    name: string;
    shortName: string;
    sector: 'Social' | 'Economic' | 'Infrastructure' | 'Strategic' | 'Governance';
    focus: string;
    upscAnchor: string;
    keySchemes: string[];
    reports: string[];
}

export const MINISTRIES_DATA: Ministry[] = [
    {
        id: 'moa',
        name: 'Ministry of Agriculture and Farmers Welfare',
        shortName: 'MoA&FW',
        sector: 'Economic',
        focus: 'Sustainable agriculture, farmer welfare, and food security.',
        upscAnchor: 'Critical for GS3 (Agriculture). Focus on MSP, Irrigation, and Doubling Farmer Income.',
        keySchemes: ['pm-kisan', 'pmfby', 'soil-health-card'],
        reports: ['Agriculture Census', 'Pocket Book of Agricultural Statistics']
    },
    {
        id: 'mohfw',
        name: 'Ministry of Health and Family Welfare',
        shortName: 'MoHFW',
        sector: 'Social',
        focus: 'Universal health coverage and medical education.',
        upscAnchor: 'Key for GS2 (Social Justice). Focus on NFHS-5, Maternal Health, and NCDs.',
        keySchemes: ['pm-jay', 'mission-indradhanush', 'national-health-mission'],
        reports: ['National Family Health Survey (NFHS)', 'National Health Profile']
    },
    {
        id: 'moe',
        name: 'Ministry of Education',
        shortName: 'MoE',
        sector: 'Social',
        focus: 'Literacy, school education, and higher education.',
        upscAnchor: 'Vital for GS2 (Education). NEP 2020 Implementation is a high-frequency topic.',
        keySchemes: ['pm-shri', 'samagra-shiksha', 'pm-poshan'],
        reports: ['AISHE Report', 'NAS (National Achievement Survey)']
    },
    {
        id: 'mohua',
        name: 'Ministry of Housing and Urban Affairs',
        shortName: 'MoHUA',
        sector: 'Infrastructure',
        focus: 'Urban infrastructure, housing, and sanitation.',
        upscAnchor: 'Focus on AMRUT, PMAY-U, and Swachh Bharat for GS1 & GS3.',
        keySchemes: ['pmay-u', 'amrut', 'smart-cities-mission', 'svanidhi'],
        reports: ['Swachh Survekshan', 'Ease of Living Index']
    },
    {
        id: 'jal-shakti',
        name: 'Ministry of Jal Shakti',
        shortName: 'MoJS',
        sector: 'Infrastructure',
        focus: 'Integrated water resources management and sanitation.',
        upscAnchor: 'GS1 (Geography) & GS3 (Environment/Infrastructure). Ground water management is key.',
        keySchemes: ['jjm', 'atal-bhujal-yojana', 'namami-gange'],
        reports: ['Dynamic Ground Water Resources of India']
    },
    {
        id: 'moefcc',
        name: 'Ministry of Environment, Forest and Climate Change',
        shortName: 'MoEFCC',
        sector: 'Strategic',
        focus: 'Conservation of environment, forests, and biodiversity.',
        upscAnchor: 'Heavyweight for GS3 & Prelims. Wildlife Protection Act and COP targets.',
        keySchemes: ['project-tiger', 'project-elephant', 'green-india-mission'],
        reports: ['India State of Forest Report (ISFR)', 'Tiger Census']
    },
    {
        id: 'mof',
        name: 'Ministry of Finance',
        shortName: 'MoF',
        sector: 'Economic',
        focus: 'Economic planning, taxation, and financial management.',
        upscAnchor: 'The core of GS3 Economy. FRBM Act, GST, and Budgeting.',
        keySchemes: ['pm-mudra-yojana', 'stand-up-india'],
        reports: ['Economic Survey', 'Annual Financial Statement (Budget)']
    },
    {
        id: 'mha',
        name: 'Ministry of Home Affairs',
        shortName: 'MHA',
        sector: 'Strategic',
        focus: 'Internal security, border management, and center-state relations.',
        upscAnchor: 'GS2 (Governance) & GS3 (Internal Security). AFSPA, UAPA, and Federalism.',
        keySchemes: ['modernization-of-police-forces'],
        reports: ['Crime in India Report (NCRB)']
    }
];
