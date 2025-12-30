// Upanishad Data Registry - Central mapping of all data files
// This registry maps Upanishad IDs to their data and metadata

import { ALL_108_UPANISHADS } from "./upanishads-108-data";

// Import all available data files with consistent exports
import { ISHA_UPANISHAD, ISHA_METADATA } from "./data/isha-shlokas";
import { kenaData } from "./data/kena-shlokas";
import { kathaData } from "./data/katha-shlokas";
import { prashnaData } from "./data/prashna-shlokas";
import { MANDUKYA_SHLOKAS, MANDUKYA_METADATA } from "./data/mandukya-shlokas";
import { TAITTIRIYA_SHLOKAS, TAITTIRIYA_METADATA } from "./data/taittiriya-shlokas";
import { AITAREYA_SHLOKAS, AITAREYA_METADATA } from "./data/aitareya-shlokas";
import { CHANDOGYA_SHLOKAS, CHANDOGYA_METADATA } from "./data/chandogya-shlokas";
import { BRIHADARANYAKA_SHLOKAS, BRIHADARANYAKA_METADATA } from "./data/brihadaranyaka-shlokas";

// Yoga Upanishads
import { AMRITABINDU_SHLOKAS, AMRITABINDU_METADATA } from "./data/amritabindu-shlokas";
import { AMRITANADA_SHLOKAS, AMRITANADA_METADATA } from "./data/amritanada-shlokas";
import { BRAHMA_VIDYA_SHLOKAS, BRAHMA_VIDYA_METADATA } from "./data/brahma-vidya-shlokas";
import { YOGATATTVA_SHLOKAS, YOGATATTVA_METADATA } from "./data/yogatattva-shlokas";
import { KSHURIKA_SHLOKAS, KSHURIKA_METADATA } from "./data/kshurika-shlokas";
import { TEJOBINDU_SHLOKAS, TEJOBINDU_METADATA } from "./data/tejobindu-shlokas";
import { NADABINDU_SHLOKAS, NADABINDU_METADATA } from "./data/nadabindu-shlokas";
import { HAMSA_SHLOKAS, HAMSA_METADATA } from "./data/hamsa-shlokas";

// Shaiva Upanishads
import { KAIVALYA_SHLOKAS, KAIVALYA_METADATA } from "./data/kaivalya-shlokas";
import { ATHARVASHIRAS_SHLOKAS, ATHARVASHIRAS_METADATA } from "./data/atharvashiras-shlokas";
import { ATHARVASHIKHA_SHLOKAS, ATHARVASHIKHA_METADATA } from "./data/atharvashikha-shlokas";
import { KALAGNI_RUDRA_SHLOKAS, KALAGNI_RUDRA_METADATA } from "./data/kalagni-rudra-shlokas";
import { DAKSHINAMURTI_SHLOKAS, DAKSHINAMURTI_METADATA } from "./data/dakshinamurti-shlokas";
import { SHARABHA_SHLOKAS, SHARABHA_METADATA } from "./data/sharabha-shlokas";
import { BHASMA_JABALA_SHLOKAS, BHASMA_JABALA_METADATA } from "./data/bhasma-jabala-shlokas";
import { RUDRA_HRIDAYA_SHLOKAS, RUDRA_HRIDAYA_METADATA } from "./data/rudra-hridaya-shlokas";

// Shakta Upanishads
import { DEVI_SHLOKAS, DEVI_METADATA } from "./data/devi-shlokas";
import { TRIPURA_SHLOKAS, TRIPURA_METADATA } from "./data/tripura-shlokas";
import { TRIPURA_TAPANIYA_SHLOKAS, TRIPURA_TAPANIYA_METADATA } from "./data/tripura-tapaniya-shlokas";
import { BHAVANA_SHLOKAS, BHAVANA_METADATA } from "./data/bhavana-shlokas";
import { BAHVRICHA_SHLOKAS, BAHVRICHA_METADATA } from "./data/bahvricha-shlokas";
import { AKSHAMALIKA_SHLOKAS, AKSHAMALIKA_METADATA } from "./data/akshamalika-shlokas";
import { SARASVATI_RAHASYA_SHLOKAS, SARASVATI_RAHASYA_METADATA } from "./data/sarasvati-rahasya-shlokas";

// Vaishnava Upanishads
import { NARAYANA_SHLOKAS, NARAYANA_METADATA } from "./data/narayana-shlokas";
import { NRISIMHA_SHLOKAS, NRISIMHA_METADATA } from "./data/nrisimha-shlokas";
import { NRISIMHA_UTTARA_TAPANIYA_SHLOKAS, NRISIMHA_UTTARA_TAPANIYA_METADATA } from "./data/nrisimha-uttara-tapaniya-shlokas";

// Sannyasa Upanishads
import { JABALA_SHLOKAS, JABALA_METADATA } from "./data/jabala-shlokas";
import { PARAMAHAMSA_SHLOKAS, PARAMAHAMSA_METADATA } from "./data/paramahamsa-shlokas";
import { ARUNI_SHLOKAS, ARUNI_METADATA } from "./data/aruni-shlokas";
import { KUNDIKA_SHLOKAS, KUNDIKA_METADATA } from "./data/kundika-shlokas";
import { KATHA_RUDRA_SHLOKAS, KATHA_RUDRA_METADATA } from "./data/katha-rudra-shlokas";

// Samanya Upanishads
import { BRAHMA_SHLOKAS, BRAHMA_METADATA } from "./data/brahma-shlokas";
import { SHVETASHVATARA_SHLOKAS, SHVETASHVATARA_METADATA } from "./data/shvetashvatara-shlokas";
import { GARBHA_SHLOKAS, GARBHA_METADATA } from "./data/garbha-shlokas";
import { MAITRAYANI_SHLOKAS, MAITRAYANI_METADATA } from "./data/maitrayani-shlokas";
import { MAITREYI_SHLOKAS, MAITREYI_METADATA } from "./data/maitreyi-shlokas";
import { KAUSHITAKI_SHLOKAS, KAUSHITAKI_METADATA } from "./data/kaushitaki-shlokas";
import { VAJRASUCHIKA_SHLOKAS, VAJRASUCHIKA_METADATA } from "./data/vajrasuchika-shlokas";
import { SUBALA_SHLOKAS, SUBALA_METADATA } from "./data/subala-shlokas";
import { MANTRIKA_SHLOKAS, MANTRIKA_METADATA } from "./data/mantrika-shlokas";
import { SARVASARA_SHLOKAS, SARVASARA_METADATA } from "./data/sarvasara-shlokas";
import { SHUKA_RAHASYA_SHLOKAS, SHUKA_RAHASYA_METADATA } from "./data/shuka-rahasya-shlokas";
import { ATMA_SHLOKAS, ATMA_METADATA } from "./data/atma-shlokas";
import { MUKTIKA_SHLOKAS, MUKTIKA_METADATA } from "./data/muktika-shlokas";
// niralamba-shlokas doesn't exist yet - removed import
import { MUNDAKA_SHLOKAS, MUNDAKA_METADATA } from "./data/mundaka-shlokas";

// Generic interfaces
export interface UpanishadDataEntry {
    id: number;
    mantra?: number | string;
    verse?: number;
    sutra?: number;
    adhyaya?: number;
    khanda?: number;
    number?: number;
    theme?: string;
    sanskrit: string;
    hindi: string;
    english: string;
    simpleExplanation?: string;
    simpleExplanationHindi?: string;
    nanoBananaPrompt?: string;
    wordMeanings?: { sanskrit: string; devanagari: string; hindi: string; english: string; }[];
}

export interface UpanishadMetadata {
    id: string;
    name: string;
    nameSanskrit: string;
    veda: string;
    category: string;
    shlokaCount: number;
    sequenceNumber?: number;
    [key: string]: unknown;
}

export interface UpanishadRegistryEntry {
    data: UpanishadDataEntry[];
    metadata: UpanishadMetadata;
    hasCustomLayout?: boolean;
}

// The main registry - maps ID to data/metadata
// Using 'as any' to handle slight interface differences between files
export const UPANISHAD_REGISTRY: Record<string, UpanishadRegistryEntry> = {
    // Major 10 (Mukhya) - Some have custom layouts
    "isa": { data: ISHA_UPANISHAD as any, metadata: ISHA_METADATA as any, hasCustomLayout: true },
    "kena": { data: kenaData as any, metadata: { id: "kena", name: "Kena", nameSanskrit: "केन", veda: "Sama Veda", category: "Mukhya", shlokaCount: 34 } as any, hasCustomLayout: true },
    "katha": { data: kathaData as any, metadata: { id: "katha", name: "Katha", nameSanskrit: "कठ", veda: "Krishna Yajur Veda", category: "Mukhya", shlokaCount: 119 } as any, hasCustomLayout: true },
    "prasna": { data: prashnaData as any, metadata: { id: "prasna", name: "Prashna", nameSanskrit: "प्रश्न", veda: "Atharva Veda", category: "Mukhya", shlokaCount: 67 } as any, hasCustomLayout: true },
    "mundaka": { data: MUNDAKA_SHLOKAS as any, metadata: MUNDAKA_METADATA as any },
    "mandukya": { data: MANDUKYA_SHLOKAS as any, metadata: MANDUKYA_METADATA as any },
    "taittiriya": { data: TAITTIRIYA_SHLOKAS as any, metadata: TAITTIRIYA_METADATA as any },
    "aitareya": { data: AITAREYA_SHLOKAS as any, metadata: AITAREYA_METADATA as any },
    "chandogya": { data: CHANDOGYA_SHLOKAS as any, metadata: CHANDOGYA_METADATA as any },
    "brihadaranyaka": { data: BRIHADARANYAKA_SHLOKAS as any, metadata: BRIHADARANYAKA_METADATA as any },


    // Yoga Upanishads
    "amritabindu": { data: AMRITABINDU_SHLOKAS as any, metadata: AMRITABINDU_METADATA as any },
    "amritanada": { data: AMRITANADA_SHLOKAS as any, metadata: AMRITANADA_METADATA as any },
    "brahmavidya": { data: BRAHMA_VIDYA_SHLOKAS as any, metadata: BRAHMA_VIDYA_METADATA as any },
    "yogatattva": { data: YOGATATTVA_SHLOKAS as any, metadata: YOGATATTVA_METADATA as any },
    "kshurika": { data: KSHURIKA_SHLOKAS as any, metadata: KSHURIKA_METADATA as any },
    "tejobindu": { data: TEJOBINDU_SHLOKAS as any, metadata: TEJOBINDU_METADATA as any },
    "nadabindu": { data: NADABINDU_SHLOKAS as any, metadata: NADABINDU_METADATA as any },
    "hamsa": { data: HAMSA_SHLOKAS as any, metadata: HAMSA_METADATA as any },

    // Shaiva Upanishads
    "kaivalya": { data: KAIVALYA_SHLOKAS as any, metadata: KAIVALYA_METADATA as any },
    "atharvasiras": { data: ATHARVASHIRAS_SHLOKAS as any, metadata: ATHARVASHIRAS_METADATA as any },
    "atharvasikha": { data: ATHARVASHIKHA_SHLOKAS as any, metadata: ATHARVASHIKHA_METADATA as any },
    "kalagnirudra": { data: KALAGNI_RUDRA_SHLOKAS as any, metadata: KALAGNI_RUDRA_METADATA as any },
    "dakshinamurti": { data: DAKSHINAMURTI_SHLOKAS as any, metadata: DAKSHINAMURTI_METADATA as any },
    "sharabha": { data: SHARABHA_SHLOKAS as any, metadata: SHARABHA_METADATA as any },
    "bhasma-jabala": { data: BHASMA_JABALA_SHLOKAS as any, metadata: BHASMA_JABALA_METADATA as any },
    "rudrahridaya": { data: RUDRA_HRIDAYA_SHLOKAS as any, metadata: RUDRA_HRIDAYA_METADATA as any },

    // Shakta Upanishads
    "devi": { data: DEVI_SHLOKAS as any, metadata: DEVI_METADATA as any },
    "tripura": { data: TRIPURA_SHLOKAS as any, metadata: TRIPURA_METADATA as any },
    "tripuratapini": { data: TRIPURA_TAPANIYA_SHLOKAS as any, metadata: TRIPURA_TAPANIYA_METADATA as any },
    "bhavana": { data: BHAVANA_SHLOKAS as any, metadata: BHAVANA_METADATA as any },
    "bahvricha": { data: BAHVRICHA_SHLOKAS as any, metadata: BAHVRICHA_METADATA as any },
    "akshamalika": { data: AKSHAMALIKA_SHLOKAS as any, metadata: AKSHAMALIKA_METADATA as any },
    "sarasvati-rahasya": { data: SARASVATI_RAHASYA_SHLOKAS as any, metadata: SARASVATI_RAHASYA_METADATA as any },

    // Vaishnava Upanishads
    "narayana": { data: NARAYANA_SHLOKAS as any, metadata: NARAYANA_METADATA as any },
    "nrisimhatapaniya": { data: NRISIMHA_SHLOKAS as any, metadata: NRISIMHA_METADATA as any },
    "nrisimha-uttara": { data: NRISIMHA_UTTARA_TAPANIYA_SHLOKAS as any, metadata: NRISIMHA_UTTARA_TAPANIYA_METADATA as any },

    // Sannyasa Upanishads
    "jabala": { data: JABALA_SHLOKAS as any, metadata: JABALA_METADATA as any },
    "paramahamsa": { data: PARAMAHAMSA_SHLOKAS as any, metadata: PARAMAHAMSA_METADATA as any },
    "aruneya": { data: ARUNI_SHLOKAS as any, metadata: ARUNI_METADATA as any },
    "kundika": { data: KUNDIKA_SHLOKAS as any, metadata: KUNDIKA_METADATA as any },
    "katharudra": { data: KATHA_RUDRA_SHLOKAS as any, metadata: KATHA_RUDRA_METADATA as any },

    // Samanya Upanishads
    "brahma": { data: BRAHMA_SHLOKAS as any, metadata: BRAHMA_METADATA as any },
    "shvetashvatara": { data: SHVETASHVATARA_SHLOKAS as any, metadata: SHVETASHVATARA_METADATA as any },
    "garbha": { data: GARBHA_SHLOKAS as any, metadata: GARBHA_METADATA as any },
    "maitrayani": { data: MAITRAYANI_SHLOKAS as any, metadata: MAITRAYANI_METADATA as any },
    "maitreyi": { data: MAITREYI_SHLOKAS as any, metadata: MAITREYI_METADATA as any },
    "kaushitaki": { data: KAUSHITAKI_SHLOKAS as any, metadata: KAUSHITAKI_METADATA as any },
    "vajrasuchika": { data: VAJRASUCHIKA_SHLOKAS as any, metadata: VAJRASUCHIKA_METADATA as any },
    "subala": { data: SUBALA_SHLOKAS as any, metadata: SUBALA_METADATA as any },
    "mantrika": { data: MANTRIKA_SHLOKAS as any, metadata: MANTRIKA_METADATA as any },
    "sarvasara": { data: SARVASARA_SHLOKAS as any, metadata: SARVASARA_METADATA as any },
    "shukarahasya": { data: SHUKA_RAHASYA_SHLOKAS as any, metadata: SHUKA_RAHASYA_METADATA as any },
    "atma": { data: ATMA_SHLOKAS as any, metadata: ATMA_METADATA as any },
    "muktika": { data: MUKTIKA_SHLOKAS as any, metadata: MUKTIKA_METADATA as any },
    // niralamba removed - file doesn't exist yet
};

// Helper: Get data for an Upanishad by ID
export function getUpanishadData(id: string): UpanishadRegistryEntry | null {
    return UPANISHAD_REGISTRY[id] || null;
}

// Helper: Check if Upanishad has data available
export function hasUpanishadData(id: string): boolean {
    return id in UPANISHAD_REGISTRY;
}

// Helper: Get prev/next Upanishads based on study order
export function getAdjacentUpanishads(currentId: string): { prev: typeof ALL_108_UPANISHADS[0] | null; next: typeof ALL_108_UPANISHADS[0] | null } {
    const sortedByOrder = [...ALL_108_UPANISHADS].sort((a, b) => a.studyOrder - b.studyOrder);
    const currentIndex = sortedByOrder.findIndex(u => u.id === currentId);

    if (currentIndex === -1) {
        return { prev: null, next: null };
    }

    return {
        prev: currentIndex > 0 ? sortedByOrder[currentIndex - 1] : null,
        next: currentIndex < sortedByOrder.length - 1 ? sortedByOrder[currentIndex + 1] : null
    };
}

// Helper: Get all available Upanishads (with data)
export function getAvailableUpanishads() {
    return ALL_108_UPANISHADS.filter(u => hasUpanishadData(u.id));
}

// Count of available Upanishads
export const AVAILABLE_COUNT = Object.keys(UPANISHAD_REGISTRY).length;
