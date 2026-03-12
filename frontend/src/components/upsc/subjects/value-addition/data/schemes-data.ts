export interface Scheme {
    id: string;
    ministryId: string;
    name: string;
    launchYear: string;
    objective: string;
    beneficiaries: string;
    keyFeatures: string[];
    sector: 'Social' | 'Economic' | 'Infrastructure' | 'Strategic';
}

export const SCHEMES_DATA: Scheme[] = [
    // --- AGRICULTURE (MoA) ---
    {
        id: 'pm-kisan',
        ministryId: 'moa',
        name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
        launchYear: "2019",
        objective: "Income support to all landholding farmers' families.",
        beneficiaries: "All landholding farmer families",
        keyFeatures: [
            "Financial benefit of Rs. 6000/- per year.",
            "Payable in three equal installments of Rs. 2000/-.",
            "Direct Benefit Transfer (DBT) mode.",
            "Central Sector Scheme (100% funding by GoI)."
        ],
        sector: 'Economic'
    },
    {
        id: 'pmfby',
        ministryId: 'moa',
        name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        launchYear: "2016",
        objective: "Comprehensive crop insurance scheme.",
        beneficiaries: "Farmers",
        keyFeatures: [
            "Uniform premium of only 2% for Kharif and 1.5% for Rabi crops.",
            "5% premium for annual commercial/horticultural crops.",
            "Covers post-harvest losses and localized calamities."
        ],
        sector: 'Economic'
    },

    // --- HEALTH (MoHFW) ---
    {
        id: 'pm-jay',
        ministryId: 'mohfw',
        name: "Ayushman Bharat - PM JAY",
        launchYear: "2018",
        objective: "Universal Health Coverage.",
        beneficiaries: "Bottom 40% of population (SECC 2011 data)",
        keyFeatures: [
            "World's largest government-funded healthcare program.",
            "Cover of Rs. 5 lakhs per family per year.",
            "Secondary and tertiary care hospitalization.",
            "Cashless and paperless access."
        ],
        sector: 'Social'
    },

    // --- EDUCATION (MoE) ---
    {
        id: 'pm-shri',
        ministryId: 'moe',
        name: "PM-SHRI Schools",
        launchYear: "2022",
        objective: "Development of more than 14500 schools across India.",
        beneficiaries: "Students",
        keyFeatures: [
            "Strengthening existing schools to showcase all components of NEP 2020.",
            "Green schools with solar panels, LED lights, nutrition gardens.",
            "Holistic pedagogy and modern infrastructure."
        ],
        sector: 'Social'
    },

    // --- HOUSING (MoHUA) ---
    {
        id: 'pmay-u',
        ministryId: 'mohua',
        name: "Pradhan Mantri Awas Yojana (Urban)",
        launchYear: "2015",
        objective: "Housing for All in urban areas.",
        beneficiaries: "EWS, LIG, and MIG categories",
        keyFeatures: [
            "Interest subsidy on housing loans (CLSS).",
            "In-situ slum redevelopment.",
            "Affordable housing in partnership.",
            "Beneficiary-led individual house construction."
        ],
        sector: 'Infrastructure'
    },

    // --- JAL SHAKTI ---
    {
        id: 'jjm',
        ministryId: 'jal-shakti',
        name: "Jal Jeevan Mission (JJM)",
        launchYear: "2019",
        objective: "Functional Household Tap Connection (FHTC) to every rural household.",
        beneficiaries: "Rural households",
        keyFeatures: [
            "55 litres per capita per day (lpcd).",
            "Community participation (Paani Samitis).",
            "Focus on water quality monitoring.",
            "Coverage target: By 2024."
        ],
        sector: 'Infrastructure'
    },

    // --- WOMEN & CHILD (MoWCD) ---
    {
        id: 'mission-shakti',
        ministryId: 'mowcd',
        name: "Mission Shakti",
        launchYear: "2022",
        objective: "Safety, Security and Empowerment of Women.",
        beneficiaries: "Women",
        keyFeatures: [
            "Two sub-schemes: Sambal (Safety) and Samarthya (Empowerment).",
            "Sambal: One Stop Centres, Women Helplines, Beti Bachao Beti Padhao.",
            "Samarthya: Shakti Sadans, Sakhi Niwas, PM Matru Vandana Yojana."
        ],
        sector: 'Social'
    }
];
