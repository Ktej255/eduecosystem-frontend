export type GeographyBranch =
    | 'Geomorphology'
    | 'Climatology'
    | 'Oceanography'
    | 'Biogeography'
    | 'Resource Geography'
    | 'Economic Geography'
    | 'Indian Geography'
    | 'Human Geography'
    | 'Political Geography'
    | 'Cartography'
    | 'Miscellaneous';

export interface GeographyTopic {
    id: number;
    title: string;
    branch: GeographyBranch;
    blockId: number; // 25-minute teaching block assigned to this topic
    subtopics?: string[];
    isCompleted?: boolean; // For tracking
    referenceChapter?: string; // e.g. "Savindra Singh Ch. 1"
    referenceLevel?: number; // e.g. 2 or 3
}

// 25-minute Teaching Block
export interface TeachingBlock {
    id: number;
    branch: GeographyBranch;
    topicIds: number[];
    isCompleted?: boolean;
}
