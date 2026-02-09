export interface CurrentAffairItem {
    id: string;
    title: string;
    description: string;
    subject: 'History' | 'Polity' | 'Economy' | 'Geography' | 'Science' | 'Environment' | 'IR';
    date: string; // YYYY-MM-DD
    month: string; // 'January', 'February', etc.
    tags: string[];
    source?: string;
}

export const CURRENT_AFFAIRS_DATA: CurrentAffairItem[] = [
    {
        id: '1',
        title: 'New Excavations at Vadnagar',
        description: 'ASI finds evidence of cultural continuity spanning 3000 years. Significant for Ancient History.',
        subject: 'History',
        date: '2024-01-15',
        month: 'January',
        tags: ['Art & Culture', 'ASI', 'Ancient India']
    },
    {
        id: '2',
        title: 'Supreme Court on Article 370',
        description: 'SC upholds the abrogation of Article 370, stating it was a temporary provision.',
        subject: 'Polity',
        date: '2023-12-11',
        month: 'December',
        tags: ['Constitution', 'Supreme Court', 'J&K']
    },
    {
        id: '3',
        title: 'Interim Budget 2024 Highlights',
        description: 'Focus on fiscal deficit reduction and infrastructure capex. No changes in tax slabs.',
        subject: 'Economy',
        date: '2024-02-01',
        month: 'February',
        tags: ['Budget', 'Fiscal Policy', 'Infrastructure']
    },
    {
        id: '4',
        title: 'Post-Office Bill 2023',
        description: 'Parliament passes bill to replace 125-year-old Indian Post Office Act.',
        subject: 'Polity',
        date: '2023-12-20',
        month: 'December',
        tags: ['Legislation', 'Governance']
    },
    {
        id: '5',
        title: 'Red Sea Crisis & Trade Impact',
        description: 'Houthi attacks impact shipping routes. India increases naval presence.',
        subject: 'IR',
        date: '2024-01-30',
        month: 'January',
        tags: ['Trade', 'Security', 'West Asia']
    },
    {
        id: '6',
        title: 'Snow Leopard Survey',
        description: 'First scientific survey puts India\'s snow leopard count at 718. Ladakh leads.',
        subject: 'Environment',
        date: '2024-01-30',
        month: 'January',
        tags: ['Biodiversity', 'Conservation', 'Species']
    },
    {
        id: '7',
        title: 'Maratha Military Landscapes',
        description: 'India nominates the "Maratha Military Landscapes" for UNESCO World Heritage List for 2024-25.',
        subject: 'History',
        date: '2024-01-29',
        month: 'January',
        tags: ['UNESCO', 'Marathas', 'Culture']
    },
    {
        id: '8',
        title: 'Aditya-L1 Reaches L1 Point',
        description: 'ISRO\'s solar mission successfully inserted into Halo Orbit around L1.',
        subject: 'Science',
        date: '2024-01-06',
        month: 'January',
        tags: ['Space', 'ISRO', 'Solar Mission']
    }
];

export const SUBJECT_FILTERS = ['All', 'History', 'Polity', 'Economy', 'Environment', 'Science', 'Geography', 'IR'];
export const MONTH_FILTERS = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
