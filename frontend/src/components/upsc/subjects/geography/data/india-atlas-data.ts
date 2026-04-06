/**
 * India Atlas Mapping Data — v2
 * Maps ISO 3166-2:IN state codes to Indian Geography topic IDs in the GEOGRAPHY_REGISTRY.
 * All Indian Geography topics live in IDs 201–290 (Indian Geography branch, registry range).
 * States are linked to their most geographically significant topic for Atlas navigation.
 */

export const INDIA_TOPO_URL =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

export interface AtlasRegion {
    id: string;         // ISO Code (e.g., IN-MH)
    name: string;       // State display name
    topicId: number;    // Links to GEOGRAPHY_REGISTRY topic
    description: string;
    physioRegion: string; // Physiographic division
}

/**
 * Full mapping of all Indian states + UTs to topic IDs.
 * Topic IDs in the Indian Geography range (201–290) are real topics in GEOGRAPHY_REGISTRY.
 * Topic IDs >= 500 are Book 3 (Human Geography) — these are locked ("Coming Soon").
 */
export const INDIA_ATLAS_MAPPING: Record<string, AtlasRegion> = {
    // ── Northern Mountains ──────────────────────────────────────────────────
    "IN-JK": { id: "IN-JK", name: "Jammu & Kashmir", topicId: 202, description: "Trans-Himalaya: Karakoram, Zanskar, Ladakh", physioRegion: "Northern Mountains" },
    "IN-LA": { id: "IN-LA", name: "Ladakh", topicId: 202, description: "Cold Desert, high altitude lake system", physioRegion: "Northern Mountains" },
    "IN-HP": { id: "IN-HP", name: "Himachal Pradesh", topicId: 202, description: "Lower Himalayas, Kullu Valley, river systems", physioRegion: "Northern Mountains" },
    "IN-UT": { id: "IN-UT", name: "Uttarakhand", topicId: 202, description: "Ganga-Yamuna origin, Himalayas, glaciers", physioRegion: "Northern Mountains" },
    "IN-AR": { id: "IN-AR", name: "Arunachal Pradesh", topicId: 202, description: "Eastern Himalayas, Brahmaputra gorge", physioRegion: "Northern Mountains" },
    "IN-SK": { id: "IN-SK", name: "Sikkim", topicId: 202, description: "Eastern Himalaya, Kangchenjunga", physioRegion: "Northern Mountains" },

    // ── Indo-Gangetic Plains ────────────────────────────────────────────────
    "IN-PB": { id: "IN-PB", name: "Punjab", topicId: 204, description: "Alluvial plains, Indus river system", physioRegion: "Indo-Gangetic Plains" },
    "IN-HR": { id: "IN-HR", name: "Haryana", topicId: 204, description: "Doab between Ganga and Yamuna", physioRegion: "Indo-Gangetic Plains" },
    "IN-UP": { id: "IN-UP", name: "Uttar Pradesh", topicId: 204, description: "Ganga-Yamuna Doab, Agriculture heartland", physioRegion: "Indo-Gangetic Plains" },
    "IN-BR": { id: "IN-BR", name: "Bihar", topicId: 204, description: "Middle Ganga plains, Son River", physioRegion: "Indo-Gangetic Plains" },
    "IN-WB": { id: "IN-WB", name: "West Bengal", topicId: 207, description: "Ganga Delta, Sundarbans mangrove", physioRegion: "Indo-Gangetic Plains" },
    "IN-AS": { id: "IN-AS", name: "Assam", topicId: 204, description: "Brahmaputra valley floodplains", physioRegion: "Indo-Gangetic Plains" },

    // ── Peninsular Plateau ──────────────────────────────────────────────────
    "IN-MP": { id: "IN-MP", name: "Madhya Pradesh", topicId: 205, description: "Deccan Plateau, Vindhya Range, Son River", physioRegion: "Peninsular Plateau" },
    "IN-CG": { id: "IN-CG", name: "Chhattisgarh", topicId: 205, description: "Chota Nagpur extension, mineral belt", physioRegion: "Peninsular Plateau" },
    "IN-JH": { id: "IN-JH", name: "Jharkhand", topicId: 205, description: "Chota Nagpur Plateau, mineral wealth", physioRegion: "Peninsular Plateau" },
    "IN-MH": { id: "IN-MH", name: "Maharashtra", topicId: 205, description: "Deccan Plateau, Western Ghats escarpment", physioRegion: "Peninsular Plateau" },
    "IN-TG": { id: "IN-TG", name: "Telangana", topicId: 205, description: "Deccan Plateau, Krishna-Godavari basin", physioRegion: "Peninsular Plateau" },
    "IN-KA": { id: "IN-KA", name: "Karnataka", topicId: 205, description: "Deccan Plateau, Kaveri basin", physioRegion: "Peninsular Plateau" },

    // ── Eastern Ghats & Coasts ─────────────────────────────────────────────
    "IN-OD": { id: "IN-OD", name: "Odisha", topicId: 208, description: "Eastern Ghats, Chilika Lake, delta coast", physioRegion: "Eastern Coastal Plains" },
    "IN-AP": { id: "IN-AP", name: "Andhra Pradesh", topicId: 208, description: "Krishna-Godavari delta, Eastern Ghats", physioRegion: "Eastern Coastal Plains" },
    "IN-TN": { id: "IN-TN", name: "Tamil Nadu", topicId: 208, description: "Coromandel Coast, retreating monsoon", physioRegion: "Eastern Coastal Plains" },

    // ── Western Ghats & Coasts ─────────────────────────────────────────────
    "IN-GJ": { id: "IN-GJ", name: "Gujarat", topicId: 209, description: "Rann of Kutch, Gulf of Cambay, Saurashtra", physioRegion: "Western Coastal Plains" },
    "IN-RJ": { id: "IN-RJ", name: "Rajasthan", topicId: 203, description: "Thar Desert, Aravalli Range, salt lakes", physioRegion: "Desert & Aravalli" },
    "IN-KL": { id: "IN-KL", name: "Kerala", topicId: 209, description: "Malabar Coast, Western Ghats biodiversity, backwaters", physioRegion: "Western Coastal Plains" },
    "IN-GA": { id: "IN-GA", name: "Goa", topicId: 209, description: "Konkan Coast, estuaries", physioRegion: "Western Coastal Plains" },

    // ── North-East ─────────────────────────────────────────────────────────
    "IN-MN": { id: "IN-MN", name: "Manipur", topicId: 202, description: "Eastern Highlands, Loktak Lake", physioRegion: "North-East Hills" },
    "IN-MZ": { id: "IN-MZ", name: "Mizoram", topicId: 202, description: "Eastern Hills, Tropic of Cancer", physioRegion: "North-East Hills" },
    "IN-NL": { id: "IN-NL", name: "Nagaland", topicId: 202, description: "Naga Hills, Brahmaputra watershed", physioRegion: "North-East Hills" },
    "IN-ML": { id: "IN-ML", name: "Meghalaya", topicId: 202, description: "Shillong Plateau, highest rainfall", physioRegion: "North-East Hills" },
    "IN-TR": { id: "IN-TR", name: "Tripura", topicId: 202, description: "Hilly terrain, Gumti River", physioRegion: "North-East Hills" },

    // ── UTs considered Book 3 (Human Geography) ───────────────────────────
    "IN-DL": { id: "IN-DL", name: "Delhi", topicId: 950, description: "Urbanization, National Capital Region", physioRegion: "Indo-Gangetic Plains" },
    "IN-PY": { id: "IN-PY", name: "Puducherry", topicId: 950, description: "French enclave, Coromandel Coast", physioRegion: "Eastern Coastal Plains" },
    "IN-AN": { id: "IN-AN", name: "Andaman & Nicobar", topicId: 210, description: "Island arc, coral reefs, volcanoes", physioRegion: "Islands" },
    "IN-LD": { id: "IN-LD", name: "Lakshadweep", topicId: 210, description: "Coral atolls, Arabian Sea", physioRegion: "Islands" },
};
