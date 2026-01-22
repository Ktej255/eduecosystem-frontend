import { LessonContent } from "./types";

export const worldPopulationData: LessonContent = {
    topicId: 'world-population',
    title: 'World Population: Distribution, Density & Growth',
    description: 'The population of the world is not evenly distributed. Some areas are crowded, while others are sparsely populated. Understanding these patterns is crucial for planning and resource management.',
    sections: [
        {
            id: 'pop-distribution',
            title: 'Patterns of Population Distribution',
            content: [
                {
                    id: 'dist-text',
                    type: 'text',
                    content: `Population distribution refers to the way people are spaced over the Earth's surface. 
            
**Key Characteristics:**
- Broadly, **90% of the world population** lives in about 10% of its land area.
- The 10 most populous countries contribute about 60% of the world's population.
- Most of these countries are in Asia (China, India, Indonesia, Pakistan, Bangladesh, Japan).`
                },
                {
                    id: 'dist-callout',
                    type: 'callout',
                    content: '💡 **Density of Population** = Total Population / Total Area'
                }
            ]
        },
        {
            id: 'pop-growth',
            title: 'Population Growth & Change',
            content: [
                {
                    id: 'growth-text',
                    type: 'text',
                    content: `The population growth or population change refers to the change in number of inhabitants of a territory during a specific period of time.
            
**Components of Change:**
1. **Crude Birth Rate (CBR):** Number of live births in a year per thousand of population.
2. **Crude Death Rate (CDR):** Number of deaths in a particular year per thousand of population.
3. **Migration:** People moving in (immigrants) or out (emigrants) of a place.`
                },
                {
                    id: 'growth-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000',
                    caption: 'Urban density in modern cities reflects the concentration of global population.'
                }
            ]
        },
        {
            id: 'pop-composition',
            title: 'Population Composition',
            content: [
                {
                    id: 'comp-text',
                    type: 'text',
                    content: `People of any country are diverse in many respects. They can be distinguished by their age, sex, place of residence, occupation, education, and life expectancy.
            
- **Sex Composition:** The ratio between the number of women and men in the population.
- **Age Structure:** The number of people in different age groups. A large size of population in the age group of 15-59 indicates a large working population.`
                },
                {
                    id: 'comp-callout',
                    type: 'callout',
                    content: '⚠️ A declining population with an **aging population** is a significant challenge for many developed nations today.'
                }
            ]
        }
    ]
};
