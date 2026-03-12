import { LessonContent } from "./types";

export const indiaPhysiographyData: LessonContent = {
    topicId: 'india-physiography',
    title: 'Physiography of India',
    description: 'India has a diverse landscape, ranging from the towering Himalayas in the north to the vast coastal plains in the south. These physical features can be grouped into several physiographic divisions.',
    sections: [
        {
            id: 'himalayas',
            title: 'The Himalayan Mountains',
            content: [
                {
                    id: 'him-text',
                    type: 'text',
                    content: `The Himalayas are geologically young and structurally fold mountains. They stretch over the northern borders of India, forming an arc which covers a distance of about 2,400 km.
            
**Major Ranges:**
1. **The Himadri (Great or Inner Himalayas):** The most continuous range consisting of the loftiest peaks.
2. **The Himachal (Lesser Himalayas):** Altitude varies between 3,700 and 4,500 metres.
3. **The Shiwaliks (Outer Himalayas):** The outermost range with altitude varying between 900 and 1,100 metres.`
                },
                {
                    id: 'him-callout',
                    type: 'callout',
                    content: '💡 **Mount Everest (8848m)**, the highest peak in the world, is part of the Himadri.'
                }
            ]
        },
        {
            id: 'northern-plains',
            title: 'The Northern Plains',
            content: [
                {
                    id: 'plain-text',
                    type: 'text',
                    content: `Formed by the interplay of the three major river systems: the Indus, the Ganga, and the Brahmaputra along with their tributaries. 
            
**Key Regions:**
- **Bhabar:** A narrow belt where rivers deposit pebbles.
- **Terai:** A wet, swampy, and marshy region south of Bhabar.
- **Bhangar:** Older alluvium forming a terrace-like feature.
- **Khadar:** Newer, younger deposits of the flood plains, very fertile.`
                },
                {
                    id: 'plain-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1000',
                    caption: 'The fertile plains of North India, the breadbasket of the nation.'
                }
            ]
        },
        {
            id: 'peninsular-plateau',
            title: 'The Peninsular Plateau',
            content: [
                {
                    id: 'plat-text',
                    type: 'text',
                    content: `A tableland composed of the old crystalline, igneous, and metamorphic rocks. It was formed due to the breaking and drifting of the Gondwana land.
            
**Divisions:**
- **Central Highlands:** North of the Narmada river.
- **Deccan Plateau:** A triangular landmass that lies to the south of the river Narmada.`
                },
                {
                    id: 'plat-callout',
                    type: 'callout',
                    content: '💡 The **Western Ghats** and the **Eastern Ghats** mark the western and eastern edges of the Deccan Plateau respectively.'
                }
            ]
        }
    ]
};
