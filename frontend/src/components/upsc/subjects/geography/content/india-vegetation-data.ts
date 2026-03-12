import { LessonContent } from "./types";

export const indiaVegetationData: LessonContent = {
    topicId: 'india-vegetation-soils',
    title: 'Vegetation & Soils',
    description: 'The natural vegetation and soil types of India are highly influenced by the variations in climate and relief. From evergreen forests to desert soils, India exhibits a wide spectrum of natural resources.',
    sections: [
        {
            id: 'veg-types',
            title: 'Types of Natural Vegetation',
            content: [
                {
                    id: 'veg-text',
                    type: 'text',
                    content: `1. **Tropical Evergeen Forests:** Areas of heavy rainfall (>200 cm).
2. **Tropical Deciduous Forests:** Most widespread. Also called monsoon forests.
3. **Tropical Thorn Forests:** Regions with less than 70 cm of rainfall.
4. **Montane Forests:** Mountainous areas where vegetation changes with altitude.
5. **Mangrove Forests:** Found in coastal areas influenced by tides.`
                },
                {
                    id: 'veg-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1000',
                    caption: 'Mangrove forests of India, a unique ecosystem providing coastal protection.'
                }
            ]
        },
        {
            id: 'soil-types',
            title: 'Major Soil Types',
            content: [
                {
                    id: 'soil-text',
                    type: 'text',
                    content: `India is an agricultural country, and its soils are its most precious resource.
            
- **Alluvial Soils:** Most widespread and important.
- **Black Soils (Regur Soils):** Ideal for growing cotton.
- **Red and Yellow Soils:** Found in areas of low rainfall.
- **Laterite Soils:** Result of intense leaching due to heavy rain.
- **Arid Soils:** Found in Rajasthan, high salt content.`
                },
                {
                    id: 'soil-callout',
                    type: 'callout',
                    content: '💡 **Alluvial soils** cover about 40% of India\'s total land area.'
                }
            ]
        }
    ]
};
