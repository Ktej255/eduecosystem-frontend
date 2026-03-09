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
    },
    {
        id: "vak-v-vis",
        title: "Deccan Successors: Vakatakas vs Vishnukundins",
        subjects: ["Vakatakas", "Vishnukundins"],
        metrics: [
            { label: "Religion", val1: "Brahmanical (Shaivism dominant)", val2: "Performers of Ashvamedha (Vaishnavism)" },
            { label: "Capital", val1: "Vatsagulma / Nandivardhana", val2: "Vinukonda / Amaravati" },
            { label: "Architecture", val1: "Ajanta Caves (Rock-cut)", val2: "Undavalli & Mogalrajapuram (Cave temples)" },
            { label: "Decline", val1: "Absorbed by Chalukyas of Badami", val2: "Overthrown by Pulakeshin II" }
        ]
    },
    {
        id: "kad-v-gan",
        title: "Karnataka Origins: Kadambas vs Western Gangas",
        subjects: ["Kadambas", "Western Gangas"],
        metrics: [
            { label: "Founder", val1: "Mayurasharma (Brahmana turned warrior)", val2: "Konganivarma Madhava" },
            { label: "Language", val1: "Early patrons of Kannada script", val2: "Sanskrit & Kannada (Adikavi Pampa's era link)" },
            { label: "Capital", val1: "Banavasi (Vaijayanti)", val2: "Talakad / Kuvalala" },
            { label: "Relation", val1: "Matrimonial alliances with Guptas", val2: "Feudatories of Rashtrakutas/Chalukyas" }
        ]
    },
    {
        id: "iks-v-pal",
        title: "Krishna-Guntur Rivalry: Ikshvakus vs Early Pallavas",
        subjects: ["Ikshvakus", "Early Pallavas"],
        metrics: [
            { label: "Successor of", val1: "Satavahanas (in Krishna valley)", val2: "Satavahanas (in Kanchi region)" },
            { label: "Religion", val1: "Royal women patrons of Buddhism", val2: "Strong Brahmanical orientation" },
            { label: "Language", val1: "Prakrit inscriptions (Vijayapuri)", val2: "Prakrit/Sanskrit Charters (Kanchipuram)" },
            { label: "Economy", val1: "Trade with Rome (Indo-Roman coins)", val2: "Early maritime activity near Mamallapuram" }
        ]
    },
    {
        id: "kal-v-pan",
        title: "Tamil Dark Age: Kalabhras vs First Pandyas",
        subjects: ["Kalabhras", "Pandyas"],
        metrics: [
            { label: "Nature", val1: "Often called 'Evil kings' in Bhakti literature", val2: "Revivers of Sangam tradition" },
            { label: "Religion", val1: "Buddhist/Jain (Anti-Brahmanical)", val2: "Shaiva/Vaishnava (Bhakti Movement rise)" },
            { label: "Contribution", val1: "Tamil grammar (Tolkapium context)", val2: "Pandyan Sangams, Rock-cut temples" },
            { label: "End of Era", val1: "Defeated by Kadungon (Pandya)", val2: "Supremacy in Madurai region" }
        ]
    },
    {
        id: "ind-v-kus",
        title: "Northwest Invaders: Indo-Greeks vs Kushans",
        subjects: ["Indo-Greeks", "Kushans"],
        metrics: [
            { label: "Origin", val1: "Bactrian Greeks (Menander)", val2: "Yuezhi tribes (Kanishka)" },
            { label: "Coinage", val1: "First to issue gold coins in India", val2: "Massive gold dinars, pure coinage" },
            { label: "Art", val1: "Gandhara Art (Greek influence)", val2: "Gandhara + Mathura Art (Indigenous mix)" },
            { label: "Religion", val1: "Milinda-panha (Buddhism conversion)", val2: "Mahayana Buddhism (4th Council)" }
        ]
    }
];
