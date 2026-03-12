export interface Scheme {
    id: string;
    name: string;
    description: string;
    launchYear: string;
    beneficiaries: string;
    budget: string; // e.g., "High" or specific amount
    status: 'Active' | 'Revamped' | 'Ended';
}

export interface Ministry {
    id: string;
    name: string;
    minister: string;
    mandate: string;
    schemes: Scheme[];
}

export const MINISTRY_REGISTRY: Ministry[] = [
    {
        id: 'agri',
        name: 'Ministry of Agriculture & Farmers Welfare',
        minister: 'Cabinet Minister',
        mandate: 'Development of agriculture and farmers welfare.',
        schemes: [
            { id: 'pm-kisan', name: 'PM-KISAN', description: 'Income support of ₹6000/year to farmers.', launchYear: '2019', beneficiaries: 'All Landholding Farmers', budget: '₹60,000 Cr', status: 'Active' },
            { id: 'pmfby', name: 'Pradhan Mantri Fasal Bima Yojana', description: 'Crop insurance scheme.', launchYear: '2016', beneficiaries: 'Farmers', budget: '₹13,625 Cr', status: 'Active' }
        ]
    },
    {
        id: 'finance',
        name: 'Ministry of Finance',
        minister: 'Cabinet Minister',
        mandate: 'Economic policy, Budget, and Taxation.',
        schemes: [
            { id: 'pmjdy', name: 'PM Jan Dhan Yojana', description: 'Financial inclusion (Banking accounts).', launchYear: '2014', beneficiaries: 'Unbanked Households', budget: 'N/A', status: 'Active' },
            { id: 'atal-pension', name: 'Atal Pension Yojana', description: 'Pension scheme for unorganized sector.', launchYear: '2015', beneficiaries: '18-40 Years', budget: 'Variable', status: 'Active' }
        ]
    },
    {
        id: 'tribal',
        name: 'Ministry of Tribal Affairs',
        minister: 'Cabinet Minister',
        mandate: 'Welfare of Scheduled Tribes.',
        schemes: [
            { id: 'pm-pvtg', name: 'PM-PVTG Mission', description: 'Development of Particularly Vulnerable Tribal Groups.', launchYear: '2023', beneficiaries: '75 PVTGs', budget: '₹15,000 Cr', status: 'Active' },
            { id: 'eklavya', name: 'Eklavya Model Residential Schools', description: 'Quality education for ST students.', launchYear: '1998', beneficiaries: 'ST Students', budget: 'High', status: 'Active' }
        ]
    },
    // Add more as needed
];
