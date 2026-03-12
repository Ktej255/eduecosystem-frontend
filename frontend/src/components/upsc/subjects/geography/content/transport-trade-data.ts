import { LessonContent } from "./types";

export const transportTradeData: LessonContent = {
    topicId: 'transport-trade',
    title: 'Transport, Communication & International Trade',
    description: 'Transport and communication are the lifelines of a modern economy. They facilitate the movement of goods and ideas, while international trade links nations together in a global marketplace.',
    sections: [
        {
            id: 'land-water-air-transport',
            title: 'Global Transport Networks',
            content: [
                {
                    id: 'trans-text',
                    type: 'text',
                    content: `Transport is a service or facility for the carriage of persons and goods from one place to the other using humans, animals, and different kinds of vehicles.
            
**Modes of Transport:**
1. **Land Transport:** Roads and railways. The Trans-Siberian Railway is the longest in the world.
2. **Water Transport:** The cheapest mode for bulky goods over long distances. Key routes: The North Atlantic Sea Route and the Suez/Panama Canals.
3. **Air Transport:** The fastest but most expensive mode. Essential for perishable goods and high-value items.`
                },
                {
                    id: 'trans-callout',
                    type: 'callout',
                    content: '💡 **Pipelines** are used to transport liquids and gases (like oil and natural gas) over long distances.'
                }
            ]
        },
        {
            id: 'intl-trade-patterns',
            title: 'International Trade Patterns',
            content: [
                {
                    id: 'trade-text',
                    type: 'text',
                    content: `International trade is the exchange of goods and services between countries. It occurs because of the specialization of production and the uneven distribution of natural resources.
            
**Basis of International Trade:**
- Difference in natural resources.
- Population factors.
- Stage of economic development.
- Extent of foreign investment.
- Transport and communication infrastructure.`
                },
                {
                    id: 'trade-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1000',
                    caption: 'Container shipping is the backbone of modern international trade.'
                },
                {
                    id: 'trade-callout',
                    type: 'callout',
                    content: '⚠️ The **World Trade Organization (WTO)** is the only global international organization dealing with the rules of trade between nations.'
                }
            ]
        }
    ]
};
