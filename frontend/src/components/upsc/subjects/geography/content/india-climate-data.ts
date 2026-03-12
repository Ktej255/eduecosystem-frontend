import { LessonContent } from "./types";

export const indiaClimateData: LessonContent = {
    topicId: 'india-climate',
    title: 'Climate of India',
    description: 'The climate of India is described as the \'monsoon\' type. This type of climate is found mainly in South and Southeast Asia. Despite an overall unity in the general pattern, there are perceptible regional variations.',
    sections: [
        {
            id: 'monsoon-origin',
            title: 'Mechanism of Monsoon',
            content: [
                {
                    id: 'mon-text',
                    type: 'text',
                    content: `Monsoons are seasonal winds which reverse their direction with the change of season.
            
**Key Factors:**
- **Differential heating** of land and water.
- The shift of the **Inter Tropical Convergence Zone (ITCZ)**.
- High-pressure area east of Madagascar.
- Jet Streams (Tropical easterly jet stream).`
                },
                {
                    id: 'mon-callout',
                    type: 'callout',
                    content: '💡 **El Nino** also plays a significant role in the variability of Indian monsoons.'
                },
                {
                    id: 'monsoon-sim',
                    type: 'simulation',
                    content: 'Explore the Monsoon mechanism in 3D - watch ITCZ shift, wind patterns change, and pressure zones form across all 4 seasons!',
                    simulationType: 'monsoon'
                }
            ]
        },
        {
            id: 'seasons',
            title: 'The Indian Seasons',
            content: [
                {
                    id: 'sea-text',
                    type: 'text',
                    content: `The monsoon type of climate is characterized by a distinct seasonal pattern. 
            
1. **Cold Weather Season (Winter):** December to February.
2. **Hot Weather Season (Summer):** March to May. Local winds like **\'Loo\'** are common.
3. **Advancing Monsoon (Rainy):** June to September.
4. **Retreating Monsoon (Transition):** October and November.`
                },
                {
                    id: 'sea-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&q=80&w=1000',
                    caption: 'The arrival of monsoons in Southern India, essential for the country\'s ecology.'
                }
            ]
        }
    ]
};
