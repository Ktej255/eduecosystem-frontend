export interface Upanishad {
    id: string;
    number: number;
    name: string;
    veda: "Rigveda" | "Yajurveda" | "Samaveda" | "Atharvaveda";
    category: "Mukhya" | "Samanya" | "Sannyasa" | "Shakta" | "Vaishnava" | "Shaiva" | "Yoga";
    description?: string;
}

export const upanishads: Upanishad[] = [
    // Mukhya (Principal) Upanishads
    { number: 1, id: "isa", name: "Isha", veda: "Yajurveda", category: "Mukhya", description: "Learn about the divinity inherent in all things." },
    { number: 2, id: "kena", name: "Kena", veda: "Samaveda", category: "Mukhya", description: "Explore the nature of Brahman and knowledge." },
    { number: 3, id: "katha", name: "Katha", veda: "Yajurveda", category: "Mukhya", description: "The story of Nachiketa and the secrets of death." },
    { number: 4, id: "prashna", name: "Prashna", veda: "Atharvaveda", category: "Mukhya", description: "Six questions about the source of life." },
    { number: 5, id: "mundaka", name: "Mundaka", veda: "Atharvaveda", category: "Mukhya", description: "Distinction between higher and lower knowledge." },
    { number: 6, id: "mandukya", name: "Mandukya", veda: "Atharvaveda", category: "Mukhya", description: "Analysis of Om and the four states of consciousness." },
    { number: 7, id: "taittiriya", name: "Taittiriya", veda: "Yajurveda", category: "Mukhya", description: "Levels of reality (Koshas) and self-realization." },
    { number: 8, id: "aitareya", name: "Aitareya", veda: "Rigveda", category: "Mukhya", description: "Creation of the universe and consciousness." },
    { number: 9, id: "chandogya", name: "Chandogya", veda: "Samaveda", category: "Mukhya", description: "Meditation on Om and the statement 'Tat Tvam Asi'." },
    { number: 10, id: "brihadaranyaka", name: "Brihadaranyaka", veda: "Yajurveda", category: "Mukhya", description: "One of the oldest; deep philosophical debates." },

    // #11-16 (Muktika Canon Order)
    { number: 11, id: "brahma", name: "Brahma", veda: "Yajurveda", category: "Shaiva", description: "Teaching on Brahman and the nature of Ultimate Reality." },
    { number: 12, id: "kaivalya", name: "Kaivalya", veda: "Yajurveda", category: "Shaiva", description: "Path to Kaivalya (liberation) through Shiva meditation." },
    { number: 13, id: "jabala", name: "Jabala", veda: "Yajurveda", category: "Sannyasa", description: "Rules of renunciation and the Sannyasa ashrama." },
    { number: 14, id: "shvetashvatara", name: "Shvetashvatara", veda: "Yajurveda", category: "Shaiva", description: "Theistic Upanishad on Rudra-Shiva and devotion." },
    { number: 15, id: "hamsa", name: "Hamsa", veda: "Yajurveda", category: "Yoga", description: "The Swan - Ajapa Gayatri and Nada meditation." },
    { number: 16, id: "aruni", name: "Aruni", veda: "Samaveda", category: "Sannyasa", description: "Lifestyle of the wandering monk (Parivrajaka)." },

    // #17-27 (Continuing Muktika Canon)
    { number: 17, id: "garbha", name: "Garbha", veda: "Yajurveda", category: "Samanya", description: "Embryology and development of the fetus." },
    { number: 18, id: "narayana", name: "Narayana", veda: "Yajurveda", category: "Vaishnava", description: "Narayana as Supreme Being, the Eight-Syllabled Mantra." },
    { number: 19, id: "paramahamsa", name: "Paramahamsa", veda: "Yajurveda", category: "Sannyasa", description: "The highest class of monks (Paramahamsas)." },
    { number: 20, id: "amritabindu", name: "Amritabindu", veda: "Atharvaveda", category: "Yoga", description: "The immortal drop - mind control teachings." },
    { number: 21, id: "amritanada", name: "Amritanada", veda: "Atharvaveda", category: "Yoga", description: "The immortal sound - yoga practices." },
    { number: 22, id: "atharvashiras", name: "Atharvashiras", veda: "Atharvaveda", category: "Shaiva", description: "Head of Atharva - Rudra's nature." },
    { number: 23, id: "atharvashikha", name: "Atharvashikha", veda: "Atharvaveda", category: "Shaiva", description: "Crest of Atharva - Agni and consciousness." },
    { number: 24, id: "maitrayani", name: "Maitrayani", veda: "Samaveda", category: "Samanya", description: "Dialogue on liberation and yoga." },
    { number: 25, id: "kaushitaki", name: "Kaushitaki", veda: "Rigveda", category: "Samanya", description: "Prana, transmigration, and liberation." },
    { number: 26, id: "brihajjabala", name: "Brihajjabala", veda: "Atharvaveda", category: "Shaiva", description: "Great Jabala - Shiva worship rules." },
    { number: 27, id: "nrsimhatapani", name: "Nrsimha Tapani", veda: "Atharvaveda", category: "Vaishnava", description: "Worship of Narasimha avatar." },


    // Placeholder generation for the rest to simulate full 108 list for UI development
    // In a real scenario, we would populate this with the exact canonical list.
    ...Array.from({ length: 81 }).map((_, i) => ({
        number: 28 + i,
        id: `upanishad-${28 + i}`,
        name: `Upanishad ${28 + i}`,
        veda: ["Rigveda", "Yajurveda", "Samaveda", "Atharvaveda"][i % 4] as any,
        category: ["Samanya", "Sannyasa", "Shakta", "Vaishnava", "Shaiva", "Yoga"][i % 6] as any,
    })),
];
