export interface MainsAngle {
    likelyQuestion: string;
    keyPoints: string[];
    vocabulary: string[];
}

export const ANCIENT_MAINS_ANGLES: Record<number, MainsAngle> = {
    1: {
        likelyQuestion: "Discuss the impact of climatic changes on the transition from Mesolithic to Neolithic periods in India.",
        keyPoints: [
            "Holocene transition leading to warmer, stable climate.",
            "Shift from nomadic hunting to sedentary domestication.",
            "Development of microliths and specialized toolkits."
        ],
        vocabulary: ["Holocene Epoch", "Sedentary life", "Microliths", "Domestication"]
    },
    2: {
        likelyQuestion: "How did the geographical location of Harappan sites influence their trade and urban planning?",
        keyPoints: [
            "Proximity to Indus and tributaries for internal transport.",
            "Coastal ports like Lothal for link to Mesopotamia.",
            "Grid pattern and drainage as response to flood risks."
        ],
        vocabulary: ["Citadel", "Drainage System", "Maritime Trade", "Lost-wax Tech"]
    },
    4: {
        likelyQuestion: "Examine the religious and economic significance of Indus Valley seals.",
        keyPoints: [
            "Seals as marks of identity and ownership in long-distance trade.",
            "Depiction of Pashupati and Mother Goddess as seeds of later Hinduism.",
            "Steatite carving reflecting advanced aesthetic and technical skill."
        ],
        vocabulary: ["Proto-Shiva", "Sealings", "Steatite", "Zebu Motif"]
    },
    6: {
        likelyQuestion: "Evaluate the significance of the town planning and drainage systems of the Indus Valley Civilization as precursors to modern urban planning.",
        keyPoints: [
            "Grid layout with streets cutting at right angles (chess-board pattern).",
            "Advanced closed drainage systems with manholes for cleaning.",
            "Standardized bricks (4:2:1 ratio) and massive granaries for food security."
        ],
        vocabulary: ["Gridiron Pattern", "Citadel vs Lower Town", "Granary Architecture", "Sanitary Engineering"]
    },
    14: {
        likelyQuestion: "Evaluate Ashoka's Dhamma as a tool of political and social integration.",
        keyPoints: [
            "Dhamma as a secular code of conduct to unify a diverse empire.",
            "Edicts as a medium of direct communication with the subjects.",
            "Promotion of religious tolerance and welfare state (Dhamma Mahamattas)."
        ],
        vocabulary: ["Dhamma", "Prakrit Edicts", "Religious Pluralism", "Benevolent Despotism"]
    },
    20: {
        likelyQuestion: "Analyze the reasons for labeling the Gupta period as the 'Golden Age' of Indian history.",
        keyPoints: [
            "Flourishing of Sanskrit literature (Kalidasa) and science (Aryabhatta).",
            "Stability and prosperity reflected in high-purity gold dinars.",
            "Evolution of temple architecture (Panchayatana style)."
        ],
        vocabulary: ["Golden Age", "Nava-ratnas", "Brahmanical Revival", "Siddhantas"]
    }
};
// Add more as needed for all 27 chapters
