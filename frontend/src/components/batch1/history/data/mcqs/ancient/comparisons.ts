export interface ComparisonPoint {
    category: string;
    description: string;
}

export interface DynastyComparison {
    id: string;
    name: string;
    points: ComparisonPoint[];
}

export const ANCIENT_COMPARISONS: Record<number, DynastyComparison> = {
    14: {
        id: "maurya",
        name: "Maurya Empire",
        points: [
            { category: "Administration", description: "Highly centralized and bureaucratic; divided into 6 committees of 30 officers for Pataliputra." },
            { category: "Economy", description: "State monopoly on mining, liquor, and arms; heavy taxation (1/4 to 1/6)." },
            { category: "Religion", description: "Promotion of Dhamma (moral code) by Ashoka; support for Buddhism while remains tolerant." },
            { category: "Military", description: "Massive standing army managed by a board of 30 officers across 6 wings." },
            { category: "Architecture", description: "Massive stone pillars, rock edicts, and the beginning of stone architecture." }
        ]
    },
    20: {
        id: "gupta",
        name: "Gupta Empire",
        points: [
            { category: "Administration", description: "Decentralized/Feudalistic; local administration had significant autonomy; 'Golden Age' of bureaucracy." },
            { category: "Economy", description: "Flourishing guilds; decline in long-distance trade with Romans but strong domestic trade." },
            { category: "Religion", description: "Revival of Brahmanism; peak of Puranic Hinduism; patronized both Vishnu and Shiva." },
            { category: "Military", description: "Less emphasis on massive numbers compared to Mauryas; focused on cavalry and archers." },
            { category: "Architecture", description: "Development of free-standing temples (e.g., Bhitargaon); classical Sanskrit literature peak." }
        ]
    },
    23: {
        id: "vardhana",
        name: "Harshavardhana",
        points: [
            { category: "Administration", description: "Feudal and decentralized; land grants to officials (samantas) instead of cash salaries." },
            { category: "Economy", description: "Economic decline compared to Guptas; less monetization; agriculture-focused." },
            { category: "Religion", description: "Converted to Mahayana Buddhism; held massive religious assemblies at Prayag and Kanauj." },
            { category: "Military", description: "Based on local levies; Harsha led campaigns personally across North India." },
            { category: "Architecture", description: "Patronage of Nalanda University; development of Kanauj as a center of power." }
        ]
    }
    // More can be added later
};
