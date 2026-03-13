export interface ForestCover {
    state: string;
    totalArea: number; // in sq km
    forestCover: number; // in sq km
    percentage: number;
    change: number; // change since last report
}

export interface MangroveCover {
    state: string;
    area2026: number; // in sq km
    change: number;
}

export interface ISFRData {
    topStatesByPercentage: ForestCover[];
    topStatesByArea: ForestCover[];
    mangroveStats: MangroveCover[];
    nationalHighlights: {
        label: string;
        value: string;
        description: string;
    }[];
}

export const ISFR_2026_DATA: ISFRData = {
    topStatesByArea: [
        { state: "Madhya Pradesh", totalArea: 308252, forestCover: 77493, percentage: 25.14, change: 11 },
        { state: "Arunachal Pradesh", totalArea: 83743, forestCover: 66431, percentage: 79.33, change: -257 },
        { state: "Chhattisgarh", totalArea: 135192, forestCover: 55717, percentage: 41.21, change: 5 },
        { state: "Odisha", totalArea: 155707, forestCover: 52156, percentage: 33.50, change: 537 },
        { state: "Maharashtra", totalArea: 307713, forestCover: 50798, percentage: 16.51, change: 20 }
    ],
    topStatesByPercentage: [
        { state: "Mizoram", totalArea: 21081, forestCover: 17820, percentage: 84.53, change: -186 },
        { state: "Arunachal Pradesh", totalArea: 83743, forestCover: 66431, percentage: 79.33, change: -257 },
        { state: "Meghalaya", totalArea: 22429, forestCover: 17046, percentage: 76.00, change: -73 },
        { state: "Manipur", totalArea: 22327, forestCover: 16598, percentage: 74.34, change: -249 },
        { state: "Nagaland", totalArea: 16579, forestCover: 12251, percentage: 73.90, change: -235 }
    ],
    mangroveStats: [
        { state: "West Bengal (Sundarbans)", area2026: 2114, change: 2 },
        { state: "Gujarat", area2026: 1175, change: -2 },
        { state: "Andaman & Nicobar", area2026: 616, change: 0 },
        { state: "Andhra Pradesh", area2026: 405, change: 1 },
        { state: "Maharashtra", area2026: 324, change: 4 }
    ],
    nationalHighlights: [
        {
            label: "Total Forest & Tree Cover",
            value: "24.62%",
            description: "Combined total of forest cover and tree cover in India."
        },
        {
            label: "Total Forest Cover",
            value: "713,789 sq km",
            description: "21.71% of geographical area."
        },
        {
            label: "Mangrove Increase",
            value: "17 sq km",
            description: "Total mangrove cover stands at 4,992 sq km."
        },
        {
            label: "Carbon Stock",
            value: "7,204 Million Tonnes",
            description: "Increase of 79.4 million tonnes compared to last report."
        }
    ]
};
