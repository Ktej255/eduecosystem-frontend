// Kena Upanishad Image Mapping
// Maps shloka IDs and story step IDs to their generated image paths

export const KENA_IMAGES: Record<number, string> = {
    // CHUNK 1: THE INQUIRY
    1: "/images/upanishads/kena/kena_shloka_1_1766673029197.png", // Mind's source
    2: "/images/upanishads/kena/kena_shloka_2_1766673046056.png", // Internal Sensors
    3: "/images/upanishads/kena/kena_shloka_3_1766673064601.png", // Beyond Reach
    4: "/images/upanishads/kena/kena_shloka_4_1766673147816.png", // The Third Dimension
    5: "/images/upanishads/kena/kena_shloka_5_1766673171825.png", // Unspoken Power
    6: "/images/upanishads/kena/kena_shloka_6_1766673188589.png", // The Thinker
    7: "/images/upanishads/kena/kena_shloka_7_1766673421491.png", // Divine Sight
    8: "/images/upanishads/kena/kena_shloka_8_1766674578467.png", // Eternal Hearing

    // CHUNK 2: THE REVELATION
    9: "/images/upanishads/kena/kena_shloka_9_1766707837690.png", // Uma appears
    10: "/images/upanishads/kena/kena_shloka_10_1766707866683.png", // Uma teaching
    11: "/images/upanishads/kena/kena_shloka_11_1766707891028.png", // Lightning flash
    12: "/images/upanishads/kena/kena_shloka_12_1766707911529.png", // Mind's longing
    13: "/images/upanishads/kena/kena_shloka_13_1766707947572.png", // Heart glowing
    14: "/images/upanishads/kena/kena_shloka_14_1766707967228.png", // OM in space
    15: "/images/upanishads/kena/kena_shloka_15_1766707988778.png", // Sage at peace
    16: "/images/upanishads/kena/kena_shloka_16_1766708014864.png", // Foundation

    // CHUNK 3: THE STORY
    17: "/images/upanishads/kena/kena_shloka_17_1766708031411.png", // Agni & Vayu approach
    18: "/images/upanishads/kena/kena_shloka_18_1766708049091.png", // Agni can't burn
    19: "/images/upanishads/kena/kena_shloka_19_1766708078531.png", // Agni returns
    20: "/images/upanishads/kena/kena_shloka_20_1766708097968.png", // Vayu approaches
    21: "/images/upanishads/kena/kena_shloka_21_1766708115436.png", // Vayu can't move
    22: "/images/upanishads/kena/kena_shloka_22_1766708140910.png", // Vayu returns
    23: "/images/upanishads/kena/kena_shloka_23_1766708162272.png", // Indra approaches
    24: "/images/upanishads/kena/kena_shloka_24_1766708180691.png", // Brahman vanishes
    25: "/images/upanishads/kena/kena_shloka_25_1766708212396.png", // Uma appears
    26: "/images/upanishads/kena/kena_shloka_26_1766708231337.png", // Indra asks Uma
    27: "/images/upanishads/kena/kena_shloka_27_1766708253519.png", // Uma reveals
    28: "/images/upanishads/kena/kena_shloka_28_1766708276719.png", // Indra blessed
    29: "/images/upanishads/kena/kena_shloka_29_1766708297258.png", // Indra elevated
};

export const getKenaShlokaImage = (id: number): string | null => {
    return KENA_IMAGES[id] || null;
};

export const KENA_HEADER_BG = "/assets/upanishads/kena/kena_header_bg_1766057445730.png";
