export interface Ministry {
    id: string;
    name: string;
    minister: string; // Cabinet Minister
    mandate: string;
    website: string;
    categories: ('Social' | 'Economic' | 'Infrastructure' | 'Strategic' | 'Governance')[];
}

export const MINISTRIES_DATA: Ministry[] = [
    // --- STRATEGIC ---
    {
        id: 'mha',
        name: "Ministry of Home Affairs",
        minister: "Amit Shah",
        mandate: "Internal security, border management, Centre-State relations, administration of UTs.",
        website: "https://www.mha.gov.in/",
        categories: ['Strategic', 'Governance']
    },
    {
        id: 'mod',
        name: "Ministry of Defence",
        minister: "Rajnath Singh",
        mandate: "National defence and security, defence production, and welfare of armed forces.",
        website: "https://www.mod.gov.in/",
        categories: ['Strategic']
    },
    {
        id: 'mea',
        name: "Ministry of External Affairs",
        minister: "S. Jaishankar",
        mandate: "India's foreign relations, diaspora (OCI/PIO), and Passport Seva.",
        website: "https://www.mea.gov.in/",
        categories: ['Strategic']
    },

    // --- ECONOMIC ---
    {
        id: 'mof',
        name: "Ministry of Finance",
        minister: "Nirmala Sitharaman",
        mandate: "Fiscal policy, national budget, taxation, financial institutions, and capital markets.",
        website: "https://finmin.nic.in/",
        categories: ['Economic']
    },
    {
        id: 'mci',
        name: "Ministry of Commerce and Industry",
        minister: "Piyush Goyal",
        mandate: "Promotion of trade, formulation of foreign trade policy, and industrial development (DPIIT).",
        website: "https://commerce.gov.in/",
        categories: ['Economic']
    },
    {
        id: 'moa',
        name: "Ministry of Agriculture and Farmers Welfare",
        minister: "Shivraj Singh Chouhan", // Updated for 2024-25 context
        mandate: "Agricultural production, research (ICAR), and farmer welfare schemes.",
        website: "https://agricoop.nic.in/",
        categories: ['Economic', 'Social']
    },

    // --- SOCIAL ---
    {
        id: 'moe',
        name: "Ministry of Education",
        minister: "Dharmendra Pradhan",
        mandate: "National Policy on Education (NEP), School and Higher Education dev.",
        website: "https://www.education.gov.in/",
        categories: ['Social']
    },
    {
        id: 'mohfw',
        name: "Ministry of Health and Family Welfare",
        minister: "J.P. Nadda", // Updated
        mandate: "Public health, family welfare, and medical education.",
        website: "https://mohfw.gov.in/",
        categories: ['Social']
    },
    {
        id: 'mowcd',
        name: "Ministry of Women and Child Development",
        minister: "Annapurna Devi",
        mandate: "Welfare and development of women and children (Poshan Abhiyaan).",
        website: "https://wcd.nic.in/",
        categories: ['Social']
    },
    {
        id: 'mosje',
        name: "Ministry of Social Justice and Empowerment",
        minister: "Dr. Virendra Kumar",
        mandate: "Welfare of SCs, OBCs, PwDs, and Senior Citizens.",
        website: "https://socialjustice.gov.in/",
        categories: ['Social']
    },
    {
        id: 'mota',
        name: "Ministry of Tribal Affairs",
        minister: "Jual Oram",
        mandate: "Rights and welfare of Scheduled Tribes (Van Dhan, Eklavya Schools).",
        website: "https://tribal.nic.in/",
        categories: ['Social']
    },

    // --- INFRASTRUCTURE ---
    {
        id: 'morth',
        name: "Ministry of Road Transport and Highways",
        minister: "Nitin Gadkari",
        mandate: "Construction of National Highways (Bharatmala), road safety, and transport regulations.",
        website: "https://morth.nic.in/",
        categories: ['Infrastructure', 'Economic']
    },
    {
        id: 'mor',
        name: "Ministry of Railways",
        minister: "Ashwini Vaishnaw",
        mandate: "Operation and expansion of Indian Railways network.",
        website: "https://indianrailways.gov.in/",
        categories: ['Infrastructure']
    },
    {
        id: 'mohua',
        name: "Ministry of Housing and Urban Affairs",
        minister: "Manohar Lal Khattar",
        mandate: "Urban planning, housing (PMAY-U), metro rail, and smart cities.",
        website: "https://mohua.gov.in/",
        categories: ['Infrastructure', 'Social']
    },
    {
        id: 'jal-shakti',
        name: "Ministry of Jal Shakti",
        minister: "C.R. Patil",
        mandate: "Water resources, river development (Namami Gange), and drinking water (Jal Jeevan Mission).",
        website: "https://jalshakti-dowr.gov.in/",
        categories: ['Infrastructure', 'Social']
    }
];
