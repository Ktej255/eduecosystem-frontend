import { LessonContent } from "./types";

export const GEOMORPHOLOGY_CONTENT: LessonContent = {
    topicId: 'geomorphology',
    title: 'Geomorphology & Earth\'s Interior',
    description: 'Study of landforms, Earth\'s internal structure, and the forces that shape our planet.',
    sections: [
        {
            id: 'interior',
            title: 'Interior of the Earth',
            content: [
                {
                    id: 'chemical-comp',
                    type: 'text',
                    content: `### Chemical Composition (Edward Suess)
- **SiAl (Silica + Aluminium)**: Continental Crust. Lower density.
- **SiMa (Silica + Magnesium)**: Oceanic Crust. Higher density.
- **NiFe (Nickel + Iron)**: Core. Highest density and magnetic properties.`
                },
                {
                    id: 'layers',
                    type: 'text',
                    content: `### Mechanical Layers
1.  **Lithosphere**: Crust + Upper Mantle (Rigid).
2.  **Asthenosphere**: Plastic/Viscous layer below Lithosphere. Source of magma.
3.  **Mesosphere**: Lower Mantle (Solid).
4.  **Outer Core**: Liquid Iron (Generates Magnetic Field).
5.  **Inner Core**: Solid Iron (Extreme Pressure).`
                }
            ]
        },
        {
            id: 'rocks',
            title: 'Rock Cycle',
            content: [
                {
                    id: 'rock-types',
                    type: 'text',
                    content: `### Classification of Rocks
1.  **Igneous (Primary)**: Formed by cooling of magma/lava. (e.g., Granite, Basalt).
2.  **Sedimentary**: Formed by lithification of sediments. (e.g., Sandstone, Limestone).
3.  **Metamorphic**: Formed by heat & pressure acting on existing rocks. (e.g., Marble, Gneiss).`
                },
                {
                    id: 'cycle-desc',
                    type: 'text',
                    content: `**The Rock Cycle** is a continuous process where rocks change from one type to another due to geological forces like weathering, erosion, heat, and pressure.`
                }
            ]
        },
        {
            id: 'forces',
            title: 'Geomorphic Forces',
            content: [
                {
                    id: 'endo-exo',
                    type: 'text',
                    content: `### Endogenic vs Exogenic
- **Endogenic (Internal)**: Diastrophism (Slow) and Sudden (Volcanism, Earthquakes).
- **Exogenic (External)**: Weathering, Mass Wasting, Erosion, and Deposition (Wind, River, Glaciers).`
                }
            ]
        }
    ]
};
