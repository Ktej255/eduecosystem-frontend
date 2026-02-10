import { LessonContent } from "./types";

export const INTERIOR_EARTH_CONTENT: LessonContent = {
    topicId: 'interior-earth',
    title: 'Interior of the Earth',
    description: 'Journey to the center of the Earth to understand its layered structure, from the crust we live on to the solid metal core.',
    sections: [
        {
            id: 'sources',
            title: 'Sources of Information',
            content: [
                {
                    id: 'direct-sources',
                    type: 'text',
                    content: `How do we know what's inside the Earth?
### Direct Sources
1. **Mining:** Deepest mine (Mponeng Gold Mine) is only ~4 km deep.
2. **Drilling:** Deepest drill (Kola Superdeep Borehole) is ~12 km deep.
3. **Volcanic Eruptions:** Magma provides samples from the Asthenosphere.`
                },
                {
                    id: 'indirect-sources',
                    type: 'text',
                    content: `### Indirect Sources (More Important)
1. **Seismic Waves:** Analysis of earthquake wave behavior.
2. **Gravity Anomalies:** Variations in gravity suggest uneven mass distribution.
3. **Meteors:** Assuming they formed from the same material as Earth.`
                }
            ]
        },
        {
            id: 'seismic-waves',
            title: 'Seismic Waves',
            content: [
                {
                    id: 'waves-intro',
                    type: 'text',
                    content: `Earthquakes generate **Body Waves** that travel through the Earth's interior.`
                },
                {
                    id: 'p-waves',
                    type: 'callout',
                    content: '🏃 **P-Waves (Primary):** Fastest, travel through **solid, liquid, and gas**. They are longitudinal (compressional).'
                },
                {
                    id: 's-waves',
                    type: 'callout',
                    content: '🐍 **S-Waves (Secondary):** Slower, travel **only through solids**. They are transverse (shear). The "Shadow Zone" of S-waves proved the outer core is liquid.'
                },
                {
                    id: 'shadow-zone-img',
                    type: 'image',
                    content: 'https://images.unsplash.com/photo-1510526027178-5ad5cf0dc05a?q=80&w=2000&auto=format&fit=crop', // Placeholder for seismic diagram
                    caption: 'Seismographs record the arrival of P and S waves.',
                    alt: 'Seismograph reading'
                }
            ]
        },
        {
            id: 'layers',
            title: 'Structure of the Earth (Mechanical/Compositional)',
            content: [
                {
                    id: 'crust',
                    type: 'text',
                    content: `### 1. The Crust
- **Continental Crust:** Thicker (~30km), granitic, lower density (2.7 g/cm³).
- **Oceanic Crust:** Thinner (~5km), basaltic, higher density (3.0 g/cm³).`
                },
                {
                    id: 'mantle',
                    type: 'text',
                    content: `### 2. The Mantle
- Extends to 2900 km. 83% of Earth's volume.
- **Asthenosphere:** The upper portion (up to 400km), weak and semi-molten. Source of magma.`
                },
                {
                    id: 'core',
                    type: 'text',
                    content: `### 3. The Core
- **Outer Core:** Liquid state (Iron & Nickel). Generates Earth's magnetic field.
- **Inner Core:** Solid state due to immense pressure. Temperature ~6000°C.`
                }
            ]
        },
        {
            id: 'chem-comp',
            title: 'Chemical Composition (Edward Suess)',
            content: [
                {
                    id: 'sial',
                    type: 'text',
                    content: `**SiAl (Silica + Aluminium):** Corresponds to the Continental Crust. Low density.`
                },
                {
                    id: 'sima',
                    type: 'text',
                    content: `**SiMa (Silica + Magnesium):** Corresponds to the Oceanic Crust and Lower Crust. Higher density.`
                },
                {
                    id: 'nife',
                    type: 'text',
                    content: `**NiFe (Nickel + Ferrous/Iron):** Corresponds to the Core. Highest density and magnetic properties.`
                }
            ]
        },
        {
            id: 'discontinuities',
            title: 'Discontinuities',
            content: [
                {
                    id: 'layers-quiz',
                    type: 'quiz',
                    content: '',
                    quizData: {
                        question: "Which discontinuity separates the Earth's Crust from the Mantle?",
                        options: [
                            "Conrad Discontinuity",
                            "Mohorovicic Discontinuity",
                            "Gutenberg Discontinuity",
                            "Lehmann Discontinuity"
                        ],
                        correctIndex: 1,
                        explanation: "The Mohorovicic Discontinuity (or Moho) marks the boundary between the crust and the mantle, characterized by a sharp increase in seismic wave velocity."
                    }
                },
                {
                    id: 'list-disc',
                    type: 'text',
                    content: `1. **Conrad:** Upper & Lower Crust
2. **Mohorovicic (Moho):** Crust & Mantle
3. **Repetti:** Upper & Lower Mantle
4. **Gutenberg:** Mantle & Outer Core
5. **Lehmann:** Outer & Inner Core`
                }
            ]
        }
    ]
};
