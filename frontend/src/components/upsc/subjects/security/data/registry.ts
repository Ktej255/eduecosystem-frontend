import { ORGANIZED_CRIME_DATA } from "./organized-crime";
import { ContentItem } from "../../types";

export const SECURITY_DATA: Record<string, ContentItem> = {
    ...ORGANIZED_CRIME_DATA,
    // Add other security topics here
};

export function getSecurityContent(topicId: string): ContentItem | null {
    return SECURITY_DATA[topicId] || null;
}
