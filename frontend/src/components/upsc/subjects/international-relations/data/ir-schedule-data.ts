import { ContentItem } from "../../types";
import { indiaUsRelations } from "./relationships/india-us";
import { indiaChinaRelations } from "./relationships/india-china";
import { indiaNeighbours } from "./relationships/india-neighbours";
import { internationalOrgs } from "./organizations/international-bodies";
import { globalGroupings } from "./organizations/global-groupings";

export interface IRTopic {
    id: string;
    title: string;
    description: string;
    subtopics: string[];
    days: number;
    category: 'Foreign Policy' | 'Bilateral' | 'Organizations' | 'Issues';
    contentId?: string;
    content?: ContentItem;
}

export const IR_SYLLABUS: IRTopic[] = [
    {
        id: 'foreign-policy',
        title: "India's Foreign Policy",
        description: "Panchsheel, Non-Alignment, and Strategic Autonomy.",
        subtopics: [
            "Gujral Doctrine",
            "Look East to Act East",
            "Neighborhood First Policy",
            "Nuclear Doctrine (NFU)"
        ],
        days: 3,
        category: 'Foreign Policy'
    },
    {
        id: 'bilateral-relations',
        title: "Bilateral Relations: India-US",
        description: "Strategic partnerships with Major Powers.",
        subtopics: [
            "India-US (iCET, Defense)",
            "India-Russia (Energy, Arms)",
            "India-China (Border Disputes)",
            "India-Japan (Quad, Infrastructure)"
        ],
        days: 5,
        category: 'Bilateral',
        contentId: 'india-us-relations',
        content: indiaUsRelations
    },
    {
        id: 'bilateral-china',
        title: "Bilateral Relations: India-China",
        description: "Cooperation and Competition.",
        subtopics: [
            "Border Dispute",
            "Trade Deficit",
            "Water Issues"
        ],
        days: 3,
        category: 'Bilateral',
        contentId: 'india-china-relations',
        content: indiaChinaRelations
    },
    {
        id: 'bilateral-neighbours',
        title: "India & Its Neighbours",
        description: "Neighbourhood First Policy & Regional Dynamics.",
        subtopics: [
            "India-Nepal",
            "India-Bangladesh",
            "India-Sri Lanka",
            "SAARC vs BIMSTEC"
        ],
        days: 4,
        category: 'Bilateral',
        contentId: 'india-neighbours-relations',
        content: indiaNeighbours
    },
    {
        id: 'international-orgs',
        title: "International Organizations",
        description: "UN Reforms, WTO, and Regional Bodies.",
        subtopics: [
            "UNSC Reforms (G4)",
            "WTO Agreements (TRIPS)",
            "G20 Presidency",
            "SCO & BRICS Expansion"
        ],
        days: 4,
        category: 'Organizations',
        contentId: 'international-orgs-un-wto',
        content: internationalOrgs
    },
    {
        id: 'global-groupings',
        title: "Global Groupings",
        description: "G20, SCO, Quad, and Multilateralism.",
        subtopics: [
            "G20 Summit Outcomes",
            "Relevance of Non-Alignment",
            "Global South Cooperation"
        ],
        days: 2,
        category: 'Organizations',
        contentId: 'global-groupings-agreements',
        content: globalGroupings
    },
    {
        id: 'global-issues',
        title: "Global Issues",
        description: "Terrorism, Diaspora, and Climate Diplomacy.",
        subtopics: [
            "CCIT (Counter Terrorism)",
            "Indian Diaspora Strategy",
            "Global South Leadership",
            "UNCLOS & Maritime Security"
        ],
        days: 3,
        category: 'Issues'
    }
];

// Content Map
export const IR_CONTENT_MAP: Record<string, { content: ContentItem }> = {
    // Module Level IDs
    'bilateral-relations': { content: indiaUsRelations },
    'bilateral-china': { content: indiaChinaRelations },
    'bilateral-neighbours': { content: indiaNeighbours },
    'international-orgs': { content: internationalOrgs },
    'global-groupings': { content: globalGroupings },

    // Config Topic IDs (for granular navigation) - Mapping hypothetical numeric IDs
    '31': { content: indiaUsRelations }, // India-US
    '4': { content: indiaChinaRelations }, // Sino-India
    '5': { content: indiaNeighbours }, // Neighbours (Placeholder ID)
    '16': { content: internationalOrgs }, // UN
    '17': { content: internationalOrgs },  // WTO
    '18': { content: globalGroupings } // G20 etc
};
