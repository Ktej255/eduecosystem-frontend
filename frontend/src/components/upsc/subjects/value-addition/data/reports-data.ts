export interface Report {
    id: string;
    title: string;
    publisher: string;
    description: string;
    indiaRank?: string; // e.g. "127/146"
    keyFindings: string[];
    category: 'International' | 'National';
}

export const REPORTS_DATA: Report[] = [
    // --- INTERNATIONAL ---
    {
        id: 'wef-gender-gap',
        title: "Global Gender Gap Report",
        publisher: "World Economic Forum (WEF)",
        description: "Benchmarks gender parity across Economic Participation, Educational Attainment, Health, and Political Empowerment.",
        indiaRank: "127/146 (2023)",
        keyFindings: [
            "India has closed 64.3% of the overall gender gap.",
            "Improvement in 'Political Empowerment' but low in 'Economic Participation'.",
            "Neighboring countries like Bangladesh rank higher."
        ],
        category: 'International'
    },
    {
        id: 'hdi',
        title: "Human Development Report (HDI)",
        publisher: "UNDP",
        description: "Composite index of life expectancy, education, and per capita income.",
        indiaRank: "132/191 (2021-22)",
        keyFindings: [
            "India's HDI value declined slightly due to Covid-19 impact.",
            "Life expectancy at birth dropped to 67.2 years.",
            "Classified in the 'Medium Human Development' category."
        ],
        category: 'International'
    },
    {
        id: 'press-freedom',
        title: "World Press Freedom Index",
        publisher: "Reporters Without Borders (RSF)",
        description: "Evaluates the environment for journalism.",
        indiaRank: "161/180 (2023)",
        keyFindings: [
            "Ranking declined significantly.",
            "Concerns over safety of journalists and media concentration."
        ],
        category: 'International'
    },
    {
        id: 'logistics-index',
        title: "Logistics Performance Index (LPI)",
        publisher: "World Bank",
        description: "Measures efficiency of international supply chains.",
        indiaRank: "38/139 (2023)",
        keyFindings: [
            "Significant jump from 44th rank in 2018.",
            "Driven by soft and hard infrastructure improvements (PM GatiShakti, NLP)."
        ],
        category: 'International'
    },
    {
        id: 'global-hunger',
        title: "Global Hunger Index",
        publisher: "Concern Worldwide & Welthungerhilfe",
        description: "Tracks hunger globally. Indicators: Undernourishment, Child Wasting, Stunting, Mortality.",
        indiaRank: "111/125 (2023)",
        keyFindings: [
            "India has the highest child wasting rate in the world (18.7%).",
            "Categorized as 'Serious' level of hunger.",
            "Government contested the methodology."
        ],
        category: 'International'
    },

    // --- NATIONAL ---
    {
        id: 'niti-sdg',
        title: "SDG India Index",
        publisher: "NITI Aayog",
        description: "Tracks progress of States/UTs on 17 SDGs.",
        keyFindings: [
            "Kerala and Chandigarh consistently top rankings.",
            "Bihar and Jharkhand usually at the bottom.",
            "Access to clean water and sanitation (SDG 6) showed improvement."
        ],
        category: 'National'
    },
    {
        id: 'niti-health',
        title: "State Health Index",
        publisher: "NITI Aayog",
        description: "Annual tool to assess the performance of states on health outcomes.",
        keyFindings: [
            "Kerala, Tamil Nadu, Telangana are top performers among Larger States.",
            "Uttar Pradesh showed the highest incremental performance."
        ],
        category: 'National'
    },
    {
        id: 'niti-export',
        title: "Export Preparedness Index",
        publisher: "NITI Aayog",
        description: "Assesses readiness of states in terms of export potential.",
        keyFindings: [
            "Coastal states like Tamil Nadu, Maharashtra, Karnataka perform well.",
            "Policy pillar, Business Ecosystem, Export Ecosystem, Export Performance."
        ],
        category: 'National'
    },
    {
        id: 'aser',
        title: "Annual Status of Education Report (ASER)",
        publisher: "Pratham (NGO)",
        description: "Citizen-led survey of rural education.",
        keyFindings: [
            "Trends in foundational literacy and numeracy.",
            "High enrollment but low learning outcomes often cited.",
            "Shift to private tuition post-pandemic."
        ],
        category: 'National'
    }
];
