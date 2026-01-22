import { LessonContent } from "./types";

export const humanDevelopmentData: LessonContent = {
    topicId: 'human-development',
    title: 'Migration & Human Development',
    description: 'The movement of people across space and the quality of human life are two central themes in human geography. Migration shapes the cultural and economic landscape, while human development measures the well-being of societies.',
    sections: [
        {
            id: 'migration-types',
            title: 'Migration: Types & Causes',
            content: [
                {
                    id: 'mig-text',
                    type: 'text',
                    content: `Migration is the movement of people from one place to another. It can be internal (within a country) or international (between countries).
            
**Push and Pull Factors:**
- **Push Factors:** These make the place of origin seem less attractive (e.g., lack of jobs, poor living conditions, political turmoil, natural disasters).
- **Pull Factors:** These make the place of destination seem more attractive (e.g., job opportunities, better living conditions, peace, stability).`
                },
                {
                    id: 'mig-callout',
                    type: 'callout',
                    content: '💡 Migration can be spontaneous, planned, or forced.'
                }
            ]
        },
        {
            id: 'hdi-concept',
            title: 'Human Development Index (HDI)',
            content: [
                {
                    id: 'hdi-text',
                    type: 'text',
                    content: `The concept of human development was introduced by **Dr. Mahbub-ul-Haq**. Human development is development that expands the choices of people and improves their lives.
            
**The Three Pillars of HDI:**
1. **Health:** Measured by life expectancy at birth.
2. **Education:** Measured by mean years of schooling and expected years of schooling.
3. **Access to Resources:** Measured by Gross National Income (GNI) per capita.`
                },
                {
                    id: 'hdi-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000',
                    caption: 'Education and healthcare are the foundations of human development.'
                }
            ]
        }
    ]
};
