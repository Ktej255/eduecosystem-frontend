export interface Policy {
    id: string;
    name: string;
    year: string;
    ministry: string;
    objectives: string[];
    keyHighlights: string[];
    category: 'Education' | 'Health' | 'Economy' | 'Technology' | 'Environment';
}

export const POLICIES_DATA: Policy[] = [
    {
        id: 'nep-2020',
        name: "National Education Policy (NEP)",
        year: "2020",
        ministry: "Ministry of Education",
        objectives: [
            "Universal Access to Education.",
            "Equity and Inclusion.",
            "Quality and Excellence.",
            "Global Citizenship."
        ],
        keyHighlights: [
            "5+3+3+4 Curricular Structure.",
            "Mother tongue/regional language as medium of instruction up to Grade 5.",
            "Single regulator for higher education (HECI).",
            "Target: 50% Gross Enrolment Ratio (GER) in Higher Education by 2035."
        ],
        category: 'Education'
    },
    {
        id: 'nhp-2017',
        name: "National Health Policy",
        year: "2017",
        ministry: "Ministry of Health & Family Welfare",
        objectives: [
            "Attain highest possible level of health and well-being for all at all ages.",
            "Preventive and Promotive Health Care.",
            "Universal Health Coverage."
        ],
        keyHighlights: [
            "Increase public health expenditure to 2.5% of GDP.",
            "Reduce Total Fertility Rate (TFR) to 2.1.",
            "Reduce Under Five Mortality to 23 by 2025.",
            "Establishes Health and Wellness Centres (HWCs)."
        ],
        category: 'Health'
    },
    {
        id: 'nlp-2022',
        name: "National Logistics Policy",
        year: "2022",
        ministry: "Ministry of Commerce & Industry",
        objectives: [
            "Reduce cost of logistics in India to be comparable to global benchmarks.",
            "Improve Logisitcs Performance Index ranking."
        ],
        keyHighlights: [
            "Unified Logistics Interface Platform (ULIP).",
            "Ease of Logistics (ELOG).",
            "Integration with PM GatiShakti National Master Plan.",
            "Comprehensive Logistics Action Plan (CLAP)."
        ],
        category: 'Economy'
    },
    {
        id: 'ndcp-2018',
        name: "National Digital Communications Policy",
        year: "2018",
        ministry: "Ministry of Communications",
        objectives: [
            "Broadband for All.",
            "Create 4 million jobs in Digital Communications sector.",
            "Enhance contribution of Digital Communications to 8% of GDP."
        ],
        keyHighlights: [
            "BharatNet for Gram Panchayats.",
            "GramNet for rural connectivity.",
            "NagarNet for urban areas.",
            "Focus on 5G, IoT, and M2M communications."
        ],
        category: 'Technology'
    },
    {
        id: 'napcc',
        name: "National Action Plan on Climate Change (NAPCC)",
        year: "2008",
        ministry: "MoEFCC",
        objectives: [
            "Sustainable development co-benefits.",
            "Climate adaptation and mitigation."
        ],
        keyHighlights: [
            "8 National Missions (Solar, Energy Efficiency, Sustainable Habitat, Water, etc.).",
            "Focus on Solar Energy (National Solar Mission).",
            "Green India Mission for afforestation."
        ],
        category: 'Environment'
    },
    {
        id: 'nmp-2021',
        name: "National Monetisation Pipeline (NMP)",
        year: "2021",
        ministry: "NITI Aayog / Finance Ministry",
        objectives: [
            "Unlock value in brownfield projects.",
            "Engage private sector."
        ],
        keyHighlights: [
            "Asset Monetisation, not privatisation (ownership remains with Govt).",
            "Roads, Railways, and Power sectors are top contributors.",
            "Estimated value: Rs 6 lakh crore over 4 years."
        ],
        category: 'Economy'
    },
    {
        id: 'green-hydrogen',
        name: "National Green Hydrogen Mission",
        year: "2023",
        ministry: "Ministry of New and Renewable Energy",
        objectives: [
            "Make India a global hub for production and export of Green Hydrogen.",
            "Decarbonisation of major sectors."
        ],
        keyHighlights: [
            "Production target: 5 MMT per annum by 2030.",
            "Renewable energy capacity addition of 125 GW.",
            "SIGHT Programme (Strategic Interventions for Green Hydrogen Transition)."
        ],
        category: 'Environment'
    }
];
