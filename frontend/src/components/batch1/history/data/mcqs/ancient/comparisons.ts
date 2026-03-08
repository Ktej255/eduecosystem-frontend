export interface DynastyComparison {
    id: string;
    title: string;
    subjects: [string, string];
    metrics: {
        label: string;
        val1: string;
        val2: string;
    }[];
}

export const ANCIENT_COMPARISONS: DynastyComparison[] = [
    {
        id: "mau-v-gup",
        title: "Empire Showdown: Centralized vs Decentralized",
        subjects: ["Maurya Empire", "Gupta Empire"],
        metrics: [
            { label: "Administration", val1: "Centralized, massive bureaucracy", val2: "Decentralized, feudal-federal structure" },
            { label: "Religion", val1: "State patronage to Buddhism (Dhamma)", val2: "Revival of Brahmanism (Vaishnavism)" },
            { label: "Economy", val1: "State-controlled monopolies", val2: "Flourishing guilds, silk-weaver migrations" },
            { label: "Land Grants", val1: "Very rare, royal ownership", val2: "Common (Agraharas), emergence of landed class" }
        ]
    },
    {
        id: "sat-v-vak",
        title: "Deccan Powers: Satavahanas vs Vakatakas",
        subjects: ["Satavahanas", "Vakatakas"],
        metrics: [
            { label: "Duration", val1: "1st century BC - 2nd century AD", val2: "3rd century AD - 5th century AD" },
            { label: "Religion", val1: "Brahmanas but patrons of Buddhism", val2: "Shaivism & Vaishnavism (Vindhyashakti)" },
            { label: "Contribution", val1: "Amravati Art, Cave Temples", val2: "Ajanta Caves (later phases), Literature" },
            { label: "Administration", val1: "Ahamaras (Districts), Amatyas", val2: "Prantik (Provinces), Feudal loyalties" }
        ]
    },
    {
        id: "bud-v-jai",
        title: "Heterodox Battle: Buddhism vs Jainism",
        subjects: ["Buddhism", "Jainism"],
        metrics: [
            { label: "Founder", val1: "Gautama Buddha", val2: "Vardhamana Mahavira (24th Tirthankara)" },
            { label: "Austerity", val1: "The Middle Path (Madhyama Pratipada)", val2: "Extreme penance and rigorous fasting" },
            { label: "Ahimsa", val1: "Practical non-violence", val2: "Strict ahimsa (even micro-organisms)" },
            { label: "God Concept", val1: "Agnostic/Silent on God", val2: "Atheistic (God is not the creator)" }
        ]
    },
    {
        id: "san-tri-bat",
        title: "Sangam Triangle: Three Crowned Kings",
        subjects: ["Cholas", "Pandyas"],
        metrics: [
            { label: "Emblem", val1: "Tiger (Walled city of Puhar/Kaveripattinam)", val2: "Fish (Capital Madurai, center of Sangam)" },
            { label: "Port", val1: "Kaveripattinam (Trade with Rome/SE Asia)", val2: "Korkai (Known for Pearl Fishery)" },
            { label: "Focus", val1: "Military power & Naval strength", val2: "Patronage to Literature & Sangam Assemblies" },
            { label: "Geography", val1: "Kaveri Delta (Northern Tamil Nadu)", val2: "Vaigai River Basin (Southern Tamil Nadu)" }
        ]
    }
];
