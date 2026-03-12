import { LessonContent } from "./types";

export const economicActivitiesData: LessonContent = {
    topicId: 'economic-activities',
    title: 'Economic Activities: From Fields to Factories',
    description: 'Human activities which generate income are known as economic activities. These are grouped into primary, secondary, tertiary, and quaternary activities depending on the nature of the work.',
    sections: [
        {
            id: 'primary-activities',
            title: 'Primary Activities',
            content: [
                {
                    id: 'prim-text',
                    type: 'text',
                    content: `Primary activities are directly dependent on the environment as these refer to utilization of Earth’s resources such as land, water, vegetation, building materials, and minerals.
            
**Examples:**
- **Hunting and Gathering:** The oldest known economic activities.
- **Pastoralism:** Nomadism or commercial livestock rearing.
- **Agriculture:** Ranging from subsistence to commercial plantation.
- **Mining:** Extraction of minerals from the Earth.`
                },
                {
                    id: 'prim-callout',
                    type: 'callout',
                    content: '💡 People engaged in primary activities are called **red-collar workers**.'
                }
            ]
        },
        {
            id: 'secondary-activities',
            title: 'Secondary Activities',
            content: [
                {
                    id: 'sec-text',
                    type: 'text',
                    content: `Secondary activities add value to natural resources by transforming raw materials into valuable products. 
            
**Manufacturing:** 
- Includes everything from handicrafts to high-tech steel production.
- Largely concentrated in urban industrial clusters.
- Key factors for location: access to raw materials, power, labor, and markets.`
                },
                {
                    id: 'sec-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000',
                    caption: 'Industrial manufacturing transforms raw materials into complex products.'
                }
            ]
        },
        {
            id: 'tertiary-quaternary',
            title: 'Tertiary & Quaternary Services',
            content: [
                {
                    id: 'tert-text',
                    type: 'text',
                    content: `**Tertiary Activities:** Provide services rather than goods. They involve the commercial exchange of services (e.g., trade, transport, communication, banking, education).
            
**Quaternary Activities:** A specialized segment of the tertiary sector, involving information-based services like R&D, specialized consultancy, and high-level management.`
                },
                {
                    id: 'tert-callout',
                    type: 'callout',
                    content: '💡 **Quinary activities** are the services that focus on the creation, rearrangement, and interpretation of new and existing ideas (the "gold-collar" professions).'
                }
            ]
        }
    ]
};
