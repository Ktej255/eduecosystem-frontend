export interface IREvent {
    id: string;
    date: string;
    title: string;
    category: 'Bilateral' | 'Multilateral' | 'Geopolitical' | 'Security';
    importance: 'High' | 'Medium' | 'Low';
    description: string;
    indiasStance: string;
    relatedNations: string[];
    tags: string[];
}

export const IR_EVENTS: IREvent[] = [
    {
        id: 'g20-2023',
        date: 'Sept 2023',
        title: '18th G20 Summit (New Delhi)',
        category: 'Multilateral',
        importance: 'High',
        description: 'New Delhi Declaration adopted with consensus. Global Biofuel Alliance launched.',
        indiasStance: 'Strategic autonomy and Global South leadership. Integrated Delhi Declaration despite Ukraine rift.',
        relatedNations: ['India', 'USA', 'Russia', 'China', 'EU'],
        tags: ['G20', 'Diplomacy', 'Global South']
    },
    {
        id: 'voice-global-south',
        date: 'Nov 2023',
        title: 'Voice of Global South Summit',
        category: 'Multilateral',
        importance: 'Medium',
        description: 'India hosted the 2nd virtual summit to discuss development challenges.',
        indiasStance: 'Advocating for 5-C: Consultation, Communication, Cooperation, Creativity, and Capacity Building.',
        relatedNations: ['India', 'Global South Nations'],
        tags: ['Global South', 'Development']
    },
    {
        id: 'cop28-uae',
        date: 'Dec 2023',
        title: 'COP28 Climate Summit (Dubai)',
        category: 'Geopolitical',
        importance: 'High',
        description: 'Agreement to transition away from fossil fuels. Loss and Damage fund operationalized.',
        indiasStance: 'Green Credits Initiative launched. Emphasis on "equity" and "common but differentiated responsibilities" (CBDR).',
        relatedNations: ['Global'],
        tags: ['Climate', 'Environment', 'UNFCCC']
    },
    {
        id: 'india-middle-east-corridor',
        date: 'Sept 2023',
        title: 'IMEEC Launch',
        category: 'Geopolitical',
        importance: 'High',
        description: 'India-Middle East-Europe Economic Corridor announced at G20.',
        indiasStance: 'Strategic alternative to BRI. Enhancing multi-modal connectivity and energy security.',
        relatedNations: ['India', 'UAE', 'Saudi Arabia', 'USA', 'EU'],
        tags: ['Trade', 'Geopolitics', 'Connectivity']
    },
    {
        id: 'sco-summit-2023',
        date: 'July 2023',
        title: 'SCO Virtual Summit',
        category: 'Security',
        importance: 'Medium',
        description: 'India chaired the Shanghai Cooperation Organization virtual summit.',
        indiasStance: 'Focus on "SECURE" SCO. Strong stance against cross-border terrorism. Iran joined as permanent member.',
        relatedNations: ['India', 'Russia', 'China', 'Pakistan', 'Iran', 'Central Asian Republics'],
        tags: ['Security', 'Regional', 'SCO']
    },
    {
        id: 'quad-summit-hiroshima',
        date: 'May 2023',
        title: 'Quad Leaders Summit',
        category: 'Security',
        importance: 'High',
        description: 'Held on the sidelines of G7 in Hiroshima. Focus on Free and Open Indo-Pacific.',
        indiasStance: 'Quad as a "Force for Good". Focus on maritime domain awareness and supply chain resilience.',
        relatedNations: ['India', 'USA', 'Japan', 'Australia'],
        tags: ['Indo-Pacific', 'Security', 'Quad']
    }
];

export const DIPLOMATIC_PILLARS = [
    {
        title: "Strategic Autonomy",
        description: "India's ability to take independent decisions without being part of any formal military alliance."
    },
    {
        title: "Global South Leadership",
        description: "Positioning India as the voice for developing nations in climate and economic discussions."
    },
    {
        title: "Neighborhood First",
        description: "Prioritizing ties with immediate neighbors for regional stability and connectivity."
    },
    {
        title: "Vasudhaiva Kutumbakam",
        description: "The world is one family – the philosophical anchor for India's presidency of G20."
    }
];
