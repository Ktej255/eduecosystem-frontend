import { ARCHITECTURE_DATA } from "./architecture";
import { PERFORMING_ARTS_DATA } from "./performing-arts";
import { ContentItem } from "../../types";

export const ART_CULTURE_DATA: Record<string, ContentItem> = {
    ...ARCHITECTURE_DATA,
    ...PERFORMING_ARTS_DATA,
    // Add other modules here as they are built
};

export function getArtCultureContent(topicId: string): ContentItem | null {
    return ART_CULTURE_DATA[topicId] || null;
}
