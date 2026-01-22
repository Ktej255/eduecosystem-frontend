import { LessonContent } from "./types";

export const indiaDrainageData: LessonContent = {
    topicId: 'india-drainage',
    title: 'Drainage System of India',
    description: 'The drainage systems of India are mainly controlled by the broad relief features of the subcontinent. They are divided into two major groups: the Himalayan rivers and the Peninsular rivers.',
    sections: [
        {
            id: 'himalayan-rivers',
            title: 'The Himalayan Rivers',
            content: [
                {
                    id: 'him-riv-text',
                    type: 'text',
                    content: `Most of the Himalayan rivers are perennial, meaning they have water throughout the year as they receive water from rain as well as from melted snow.
            
**Major Systems:**
1. **The Indus System:** Originates in Tibet, near Lake Mansarowar.
2. **The Ganga System:** Fed by the Gangotri Glacier and joined by the Alaknanda at Devprayag.
3. **The Brahmaputra System:** Rises in Tibet east of Mansarowar lake (known as Tsangpo).`
                },
                {
                    id: 'him-riv-callout',
                    type: 'callout',
                    content: '💡 The Ganga and the Brahmaputra join together to form the **Sunderban Delta**, the world\'s largest delta.'
                },
                {
                    id: 'ganga-sim',
                    type: 'simulation',
                    content: 'Explore the complete Ganga River System in 3D - see tributaries joining at exact confluence points!',
                    simulationType: 'ganga-river'
                }
            ]
        },
        {
            id: 'peninsular-rivers',
            title: 'The Peninsular Rivers',
            content: [
                {
                    id: 'pen-riv-text',
                    type: 'text',
                    content: `A large number of the Peninsular rivers are seasonal, as their flow is dependent on rainfall.
            
- **West Flowing Rivers:** Narmada and Tapi are the only long rivers which flow west and make estuaries.
- **East Flowing Rivers:** Mahanadi, Godavari, Krishna, and Kaveri flow eastwards and make deltas.`
                },
                {
                    id: 'pen-riv-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1590480413006-25983794357c?auto=format&fit=crop&q=80&w=1000',
                    caption: 'The mighty Godavari, the largest Peninsular river system.'
                },
                {
                    id: 'pen-riv-callout',
                    type: 'callout',
                    content: '💡 The **Godavari** is the largest Peninsular river and is also known as the **Dakshin Ganga**.'
                }
            ]
        }
    ]
};
