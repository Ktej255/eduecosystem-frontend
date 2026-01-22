import { LessonContent } from "./types";

export const indiaLocationData: LessonContent = {
    topicId: 'india-location',
    title: 'India: Location & Size',
    description: 'India is a vast country, completely lying in the Northern hemisphere. Its strategic position in South Asia has made it a significant cultural and economic hub throughout history.',
    sections: [
        {
            id: 'lat-long',
            title: 'Latitudinal & Longitudinal Extent',
            content: [
                {
                    id: 'extent-text',
                    type: 'text',
                    content: `The main land of India extends between latitudes **8°4\'N and 37°6\'N** and longitudes **68°7\'E and 97°25\'E**. 
            
**Key Facts:**
- The **Tropic of Cancer (23°30\'N)** divides the country into almost two equal parts.
- To the southeast and southwest of the mainland, lie the Andaman and Nicobar islands and the Lakshadweep islands.
- Total area of India is about **3.28 million sq. km**, which accounts for about 2.4% of the total geographical area of the world.`
                },
                {
                    id: 'extent-callout',
                    type: 'callout',
                    content: '💡 India is the **seventh largest country** in the world by area.'
                }
            ]
        },
        {
            id: 'frontiers',
            title: 'Frontiers & Boundaries',
            content: [
                {
                    id: 'front-text',
                    type: 'text',
                    content: `India has a land boundary of about **15,200 km** and the total length of the coastline of the mainland, including Andaman and Nicobar and Lakshadweep, is **7,516.6 km**.
            
India is bounded by the young fold mountains (Himalayas) in the northwest, north, and northeast.`
                },
                {
                    id: 'front-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&q=80&w=1000',
                    caption: 'Varanasi, reflecting the cultural heart of India\'s vast landscape.'
                }
            ]
        },
        {
            id: 'ist',
            title: 'Indian Standard Time (IST)',
            content: [
                {
                    id: 'ist-text',
                    type: 'text',
                    content: `From Gujarat to Arunachal Pradesh, there is a time lag of two hours. Hence, time along the **Standard Meridian of India (82°30\'E)** passing through Mirzapur is taken as the standard time for the whole country.`
                },
                {
                    id: 'ist-callout',
                    type: 'callout',
                    content: '⚠️ **82°30\'E** is 5 hours and 30 minutes ahead of GMT (Greenwich Mean Time).'
                }
            ]
        }
    ]
};
