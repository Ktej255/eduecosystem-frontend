export interface AncientArtifact {
    id: string;
    name: string;
    description: string;
    upscSignificance: string;
    imagePath?: string;
    relatedPyqIds?: string[]; // Links to past questions
}

export const ANCIENT_ARTIFACTS: Record<number, AncientArtifact[]> = {
    6: [
        {
            id: "pashupati-seal",
            name: "Pashupati Seal (Mohenjo-daro)",
            description: "A steatite seal depicting a seated figure surrounded by animals (elephant, tiger, rhino, buffalo).",
            upscSignificance: "Evidence of early religious practices and proto-Shiva worship in the Indus Valley Civilization.",
            imagePath: "/images/history/artifacts/pashupati-seal.png",
            relatedPyqIds: ["PYQ-2019-INDUS-RELIGION"]
        },
        {
            id: "dancing-girl",
            name: "The Dancing Girl",
            description: "A bronze statue found in Mohenjo-daro, showcasing advanced lost-wax casting techniques.",
            upscSignificance: "Highlights the technical sophistication in metallurgy and the aesthetic sense of the Harappans.",
            imagePath: "/images/history/artifacts/dancing-girl.png",
            relatedPyqIds: ["PYQ-2022-HARAPPAN-ART"]
        }
    ],
    14: [
        {
            id: "ashoka-lion-capital",
            name: "Lion Capital of Ashoka (Sarnath)",
            description: "A polished sandstone sculpture featuring four lions standing back-to-back on an abacus.",
            upscSignificance: "Adopted as the National Emblem of India. Symbolizes imperial authority and Buddhist Dhamma.",
            imagePath: "/images/history/artifacts/ashoka-lion.png",
            relatedPyqIds: ["PYQ-2015-ASHOKAN-EDICTS"]
        }
    ],
    20: [
        {
            id: "gupta-gold-coin",
            name: "Gupta Gold Dinar",
            description: "Exquisitely minted gold coins featuring images of kings performing sacrifices or playing the Veena.",
            upscSignificance: "Symbolizes the economic prosperity and 'Golden Age' status of the Gupta Empire.",
            imagePath: "/images/history/artifacts/gupta-gold-coin.png",
            relatedPyqIds: ["PYQ-2017-GUPTA-ECONOMY"]
        }
    ]
};
