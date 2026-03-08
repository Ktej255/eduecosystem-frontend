export interface TravelerStop {
    city: string;
    description: string;
    observation: string;
}

export interface Traveler {
    id: string;
    name: string;
    title: string;
    period: string;
    route: TravelerStop[];
}

export const ANCIENT_TRAVELERS: Record<number, Traveler> = {
    14: {
        id: "megasthenes",
        name: "Megasthenes",
        title: "Greek Ambassador (Sent by Seleucus I)",
        period: "Maurya Period (Chandragupta Maurya)",
        route: [
            { city: "Taxila", description: "The Great Entrance", observation: "Described as a city of great size and wealth, a center of learning." },
            { city: "Pataliputra", description: "The Capital City", observation: "Described as the largest city in the world, surrounded by a timber palisade with 570 towers." },
            { city: "Indus Valley", description: "Fertile Plains", observation: "Noted the abundance of cotton, sugarcane, and the skilled craftsmanship of Indians." }
        ]
    },
    20: {
        id: "fa-hien",
        name: "Fa-Hien",
        title: "Chinese Buddhist monk",
        period: "Gupta Period (Chandragupta II)",
        route: [
            { city: "Mathura", description: "Religious Center", observation: "Noted the presence of many monasteries and the mildness of the administration." },
            { city: "Pataliputra", description: "Prosperous Capital", observation: "Impressed by the philanthropic institutions, free hospitals, and rest-houses." },
            { city: "Tamralipti", description: "Maritime Port", observation: "Stayed for 2 years copying scriptures before sailing back to China via Sri Lanka." }
        ]
    },
    23: {
        id: "hiuen-tsang",
        name: "Hiuen Tsang (Xuanzang)",
        title: "Prince of Pilgrims",
        period: "Vardhana Period (Harshavardhana)",
        route: [
            { city: "Kanauj", description: "Imperial City", observation: "Described Harsha's grand assembly where many kings and thousands of monks gathered." },
            { city: "Nalanda", description: "The University", observation: "Stayed for 15 months as a student and teacher; noted 10,000 monks living there." },
            { city: "Prayag", description: "Kumbh Mela", observation: "Witnessed Harsha distributing all his royal treasure to the public every five years." }
        ]
    }
};
