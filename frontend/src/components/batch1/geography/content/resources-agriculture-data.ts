import { LessonContent } from "./types";

export const resourcesAgricultureData: LessonContent = {
    topicId: 'resources-agriculture',
    title: 'Land, Water, and Agriculture Resources',
    description: 'A comprehensive study of land utilization, water resource management, and major agricultural patterns in India and the world.',
    sections: [
        {
            id: 'land-resources',
            title: 'Land Resources',
            content: [
                {
                    id: 'land-intro',
                    type: 'text',
                    content: `Land is the most fundamental natural resource. India has a variety of land relief features: mountains, plateaus, plains, and islands.
            
**Land Use Categories:**
- Forests
- Land put to non-agricultural uses (buildings, roads)
- Net Sown Area (NSA)
- Fallow lands`
                },
                {
                    id: 'land-callout',
                    type: 'callout',
                    content: '💡 **Net Sown Area** represents the total area sown with crops and orchards. Area sown more than once in an agricultural year plus net sown area is known as **Gross Cropped Area**.'
                }
            ]
        },
        {
            id: 'agriculture-types',
            title: 'Agriculture Types & Cropping Seasons',
            content: [
                {
                    id: 'seasons-text',
                    type: 'text',
                    content: `India has three major cropping seasons:
            
1. **Rabi (Winter):** Sown in Oct-Dec, harvested in April-June. (Wheat, Barley, Peas, Gram, Mustard)
2. **Kharif (Monsoon):** Sown in June-July, harvested in Sept-Oct. (Paddy, Maize, Jowar, Bajra, Cotton)
3. **Zaid (Summer):** Short season between Rabi and Kharif. (Watermelon, Cucumber, Vegetables)`
                },
                {
                    id: 'crop-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1000',
                    caption: 'Wheat fields ready for harvest during the Rabi season.'
                }
            ]
        },
        {
            id: 'major-crops',
            title: 'Major Crops',
            content: [
                {
                    id: 'rice-wheat',
                    type: 'text',
                    content: `**Rice:**
- Staple food crop of majority of people in India.
- Requires high temperature (>25°C) and high humidity with annual rainfall above 100cm.
- Major states: West Bengal, UP, Punjab.

**Wheat:**
- Second most important cereal crop.
- Requires cool growing season and bright sunshine at ripening.
- Rainfall: 50-75cm. Major states: Punjab, Haryana, UP.`
                }
            ]
        },
        {
            id: 'mineral-resources',
            title: 'Mineral & Energy Resources',
            content: [
                {
                    id: 'minerals-text',
                    type: 'text',
                    content: `**Ferrous Minerals:**
- **Iron Ore:** Magnetite (finest, 70% iron), Hematite. Major belts: Odisha-Jharkhand, Durg-Bastar-Chandrapur.
- **Manganese:** Used in steel manufacturing.

**Energy Resources:**
- **Conventional:** Coal (Gondwana & Tertiary), Petroleum (Mumbai High, Digboi), Natural Gas.
- **Non-Conventional:** Solar, Wind, Biogas, Tidal.`
                },
                {
                    id: 'minerals-callout',
                    type: 'callout',
                    content: '⛏️ **Kudremukh** mines in Karnataka are known to be one of the largest iron ore deposits in the world.'
                }
            ]
        }
    ]
};
