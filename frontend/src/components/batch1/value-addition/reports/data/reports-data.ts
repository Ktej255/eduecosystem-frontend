export interface ReportConfig {
    id: string;
    title: string;
    publisher: string;
    indiaRank: string;
    topRank: string;
    keyFindings: string[];
    trend: 'Up' | 'Down' | 'Stable';
}

export const REPORTS_DATA: ReportConfig[] = [
    {
        id: 'ghi-2024',
        title: 'Global Hunger Index 2024',
        publisher: 'Concern Worldwide & Welthungerhilfe',
        indiaRank: '111/125',
        topRank: 'Belarus (Top Tier)',
        keyFindings: [
            'India has highest child wasting rate (18.7%).',
            'Score of 28.7 indicates "Serious" hunger.',
            'Performance poorer than neighbors (Pak, Ban, SL).'
        ],
        trend: 'Down'
    },
    {
        id: 'hdi-2024',
        title: 'Human Development Index 2023-24',
        publisher: 'UNDP',
        indiaRank: '134/193',
        topRank: 'Switzerland',
        keyFindings: [
            'HDI Value: 0.644 (Medium Human Development).',
            'Life Expectancy: 67.7 years.',
            'GNI per capita rose to $6,951.'
        ],
        trend: 'Up'
    },
    {
        id: 'press-freedom',
        title: 'World Press Freedom Index 2024',
        publisher: 'Reporters Without Borders (RSF)',
        indiaRank: '159/180',
        topRank: 'Norway',
        keyFindings: [
            'India\'s position improved slightly from 161 (2023).',
            'Category: "Difficult" situation.',
            'Concerns: Violence against journalists.'
        ],
        trend: 'Up'
    },
    {
        id: 'gender-gap',
        title: 'Global Gender Gap Report 2024',
        publisher: 'World Economic Forum (WEF)',
        indiaRank: '129/146',
        topRank: 'Iceland',
        keyFindings: [
            'Closed 64.1% of its gender gap.',
            'Political Empowerment rank is relatively high.',
            'Economic Participation remains a challenge.'
        ],
        trend: 'Down'
    }
];
