export interface ConstitutionalBody {
    id: string;
    name: string;
    article: string;
    appointment: string;
    tenure: string;
    removal: string;
    independence: string[];
    powers: string[];
    pyqSpotlight: string;
}

export const CONSTITUTIONAL_BODIES: ConstitutionalBody[] = [
    {
        id: 'eci',
        name: 'Election Commission of India',
        article: 'Article 324',
        appointment: 'President of India',
        tenure: '6 years or until 65 years of age',
        removal: 'Same as Judge of Supreme Court (CEC); Others on recommendation of CEC',
        independence: [
            'Security of tenure for CEC',
            'Conditions of service cannot be varied to disadvantage',
            'Expenditure charged on Consolidated Fund (not explicitly, but traditionally independent)'
        ],
        powers: [
            'Preparation of electoral rolls',
            'Conduct of elections to Parliament, State Legislatures, President, VP',
            'Recognition of political parties and allotment of symbols'
        ],
        pyqSpotlight: 'Common question: Removal of CEC vs Other ECs. Mention of Article 324 for conduct/control of elections.'
    },
    {
        id: 'upsc',
        name: 'Union Public Service Commission',
        article: 'Articles 315 to 323',
        appointment: 'President of India',
        tenure: '6 years or until 65 years of age',
        removal: 'President on grounds of misbehaviour after SC enquiry',
        independence: [
            'Chairman ineligible for further employment under Govt',
            'Member eligible for Chairman of UPSC/SPSC only',
            'Expenses charged on Consolidated Fund of India'
        ],
        powers: [
            'Conduct examinations for appointments to All India Services',
            'Advisory role on disciplinary matters',
            'Assists states in framing recruitment schemes'
        ],
        pyqSpotlight: 'Exclusion of UPSC from certain matters (e.g., reservation for backward classes).'
    },
    {
        id: 'cag',
        name: 'Comptroller and Auditor General',
        article: 'Article 148',
        appointment: 'President by warrant under his hand and seal',
        tenure: '6 years or until 65 years of age',
        removal: 'Same manner and grounds as Judge of Supreme Court',
        independence: [
            'Security of tenure',
            'Ineligible for further office after retirement',
            'Salary and service conditions determined by Parliament'
        ],
        powers: [
            'Audits accounts of Union and States',
            'Audits expenditure from Consolidated Fund, Contingency Fund, Public Account',
            'Submits reports to President/Governor'
        ],
        pyqSpotlight: 'CAG as "Guardian of Public Purse". Reports: Audit report on appropriation, finance, and public undertakings.'
    },
    {
        id: 'fc',
        name: 'Finance Commission',
        article: 'Article 280',
        appointment: 'President every 5th year or earlier',
        tenure: 'As specified by President in the order',
        removal: 'Not explicitly mentioned; term expires with Commission',
        independence: [
            'Quasi-judicial body',
            'Constitutionally mandated distribution mechanism'
        ],
        powers: [
            'Distribution of net proceeds of taxes between Union and States',
            'Principles governing grants-in-aid to States',
            'Measures to augment Consolidated Fund of a State'
        ],
        pyqSpotlight: 'Recommendations are advisory only. Vertical vs Horizontal devolution concepts.'
    },
    {
        id: 'attorney-general',
        name: 'Attorney General of India',
        article: 'Article 76',
        appointment: 'President of India',
        tenure: 'During pleasure of the President (No fixed tenure)',
        removal: 'By President at any time',
        independence: [
            'Highest law officer in the country',
            'Right to speak in both Houses of Parliament without voting right'
        ],
        powers: [
            'Advises Govt of India on legal matters',
            'Appears on behalf of GoI in Supreme Court',
            'Right of audience in all courts in India'
        ],
        pyqSpotlight: 'Right to participate in proceedings of Parliament. Not a full-time counsel for Govt.'
    }
];
