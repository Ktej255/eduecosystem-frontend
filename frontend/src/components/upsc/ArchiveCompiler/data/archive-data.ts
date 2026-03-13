export interface ArchiveItem {
    id: string;
    type: 'PIB' | 'Yojana' | 'Kurukshetra' | 'IYB';
    title: string;
    theme: string;
    date: string;
    ministry?: string;
    keyTakeaways: string[];
    priority: 'High' | 'Medium' | 'Low';
}

export const ARCHIVE_DATA: ArchiveItem[] = [
    // --- PIB YEAR END REVIEWS ---
    {
        id: 'pib-mnre-2025',
        type: 'PIB',
        title: 'Ministry of New & Renewable Energy - Year End Review 2025',
        theme: 'Sustainable Energy Expansion',
        date: '2025-12-31',
        ministry: 'MNRE',
        keyTakeaways: [
            'India reached 200GW of non-fossil fuel capacity.',
            'Surya Ghar Muft Bijli Yojana launched for solar rooftops.',
            'Green Hydrogen Mission phase 1 pilot results.'
        ],
        priority: 'High'
    },
    {
        id: 'pib-defence-2025',
        type: 'PIB',
        title: 'Ministry of Defence - Year End Review 2025',
        theme: 'Atmanirbharata in Defence',
        date: '2025-12-28',
        ministry: 'MoD',
        keyTakeaways: [
            'Induction of 2nd indigenous aircraft carrier INS Vishal tests.',
            'Defence exports touched record Rs. 21,000 crore.',
            'Success of iDEX Prime initiatives.'
        ],
        priority: 'Medium'
    },
    // --- YOJANA ARCHIVES ---
    {
        id: 'yojana-jan-2026',
        type: 'Yojana',
        title: 'Yojana January 2026',
        theme: 'Viksit Bharat @ 2047',
        date: '2026-01-01',
        keyTakeaways: [
            'Structural reforms in the manufacturing sector.',
            'Digital Public Infrastructure (DPI) as a global export.',
            'Focus on youth and women-led development.'
        ],
        priority: 'High'
    },
    {
        id: 'yojana-dec-2025',
        type: 'Yojana',
        title: 'Yojana December 2025',
        theme: 'Environment & Climate Change',
        date: '2025-12-01',
        keyTakeaways: [
            'Mission LiFE impact assessment.',
            'Circular economy in urban waste management.',
            'COP30 roadmap for India.'
        ],
        priority: 'High'
    },
    // --- KURUKSHETRA ARCHIVES ---
    {
        id: 'kuru-jan-2026',
        type: 'Kurukshetra',
        title: 'Kurukshetra January 2026',
        theme: 'Rural Entrepreneurship',
        date: '2026-01-01',
        keyTakeaways: [
            'Self Help Group (SHG) digitization results.',
            'Rural startups in food processing.',
            'Market linkages for FPOs.'
        ],
        priority: 'Medium'
    },
    // --- INDIA YEARBOOK (IYB) ---
    {
        id: 'iyb-geo-data',
        type: 'IYB',
        title: 'IYB 2026 - Geography & Land Data',
        theme: 'National Facts',
        date: '2026-02-15',
        keyTakeaways: [
            'India\'s total land area confirmed as 3.28 million sq km.',
            'Number of States: 28, UTs: 8.',
            'Total Forest Cover (ISFR 2025 prelim): 24.8%.'
        ],
        priority: 'High'
    }
];
