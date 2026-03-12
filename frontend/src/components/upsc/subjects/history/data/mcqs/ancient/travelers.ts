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
    primaryObservations: string[]; // Verbatim/Primary quotes
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
        ],
        primaryObservations: [
            "Indians are divided into seven castes (philosophers, cultivators, herdsmen, artisans, soldiers, overseers, and councillors).",
            "The king is ever attended by women, who also guard his person.",
            "Indians do not use metallic money but rely on barter; they are honest and do not lock their doors."
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
        ],
        primaryObservations: [
            "The people are numerous and happy; they have not to register their households, or attend to any magistrates and their rules.",
            "Criminals are simply fined, lightly or heavily, according to the circumstances (no capital punishment).",
            "Throughout the whole country the people do not kill any living creature, nor drink intoxicating liquor."
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
        ],
        primaryObservations: [
            "The taxation is light and the forced service on public works is sparsely required.",
            "Nalanda is an institution where the day is not sufficient for asking and answering profound questions.",
            "The people are of a pure and honest character; they have a high sense of justice."
        ]
    }
};
