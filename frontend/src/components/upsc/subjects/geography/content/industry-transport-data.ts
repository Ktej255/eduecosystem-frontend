import { LessonContent } from "./types";

export const industryTransportData: LessonContent = {
    topicId: 'industry-transport',
    title: 'Manufacturing Industries & Transport',
    description: 'Analyzing the secondary and tertiary sectors: industrial location factors, major manufacturing hubs, and the lifelines of national economy.',
    sections: [
        {
            id: 'industry-loc',
            title: 'Manufacturing Industries',
            content: [
                {
                    id: 'ind-text',
                    type: 'text',
                    content: `Production of goods in large quantities after processing from raw materials to more valuable products is called manufacturing.
            
**Factors Influencing Industrial Location:**
- Availability of Raw Material
- Labour
- Capital
- Power
- Market`
                },
                {
                    id: 'ind-agro',
                    type: 'text',
                    content: `**Agro-based Industries:**
- **Cotton Textiles:** Concentrated in Maharashtra and Gujarat due to availability of raw cotton, market, and transport.
- **Sugar Industry:** Seasonal in nature. Shifting towards South (Maharashtra) due to higher sucrose content in cane.`
                },
                {
                    id: 'ind-callout',
                    type: 'callout',
                    content: '🏭 **Note:** The Iron and Steel industry is the **basic industry** since all other industries — heavy, medium and light, depend on it for their machinery.'
                }
            ]
        },
        {
            id: 'transport',
            title: 'Transport & Communication',
            content: [
                {
                    id: 'trans-text',
                    type: 'text',
                    content: `Efficient means of transport are prerequisites for fast development.
            
**Roadways:**
- **Golden Quadrilateral:** Connects Delhi-Kolkata-Chennai-Mumbai.
- **North-South Corridor:** Srinagar to Kanyakumari.
- **East-West Corridor:** Silchar to Porbandar.

**Railways:**
- Principal mode of transportation for freight and passengers.
- Problems: Sinking of tracks, damage to bridges.`
                },
                {
                    id: 'trans-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1000',
                    caption: 'Indian Railways network is one of the largest in the world.'
                }
            ]
        },
        {
            id: 'international-trade',
            title: 'International Trade',
            content: [
                {
                    id: 'trade-text',
                    type: 'text',
                    content: `The exchange of goods among people, states and countries is referred to as trade.
            
- **Balance of Trade:** The difference between export and import of a country.
- **Major Ports:** Kandla (Tidal port), Mumbai (Biggest), Marmagao, New Mangalore, Kochi, Tuticorin, Chennai (Oldest artificial), Visakhapatnam (Deepest landlocked), Paradip, Kolkata (Riverine).`
                }
            ]
        }
    ]
};
