import { GeographyTopic } from './geography-types';
import { GEOMORPHOLOGY_TOPICS } from './topics/geomorphology';
import { CLIMATOLOGY_TOPICS } from './topics/climatology';
import { OCEANOGRAPHY_TOPICS } from './topics/oceanography';
import { RESOURCE_GEOGRAPHY_TOPICS } from './topics/resource-geography';
import { INDIAN_GEOGRAPHY_TOPICS } from './topics/indian-geography';

// We combine all individual branch topics into one master registry array
export const GEOGRAPHY_REGISTRY: GeographyTopic[] = [
    ...GEOMORPHOLOGY_TOPICS,
    ...CLIMATOLOGY_TOPICS,
    ...OCEANOGRAPHY_TOPICS,
    ...RESOURCE_GEOGRAPHY_TOPICS,
    ...INDIAN_GEOGRAPHY_TOPICS,
];

// Helper functions for easy access
export const getGeographyTopicById = (id: number): GeographyTopic | undefined => {
    return GEOGRAPHY_REGISTRY.find(topic => topic.id === id);
};

export const getGeographyTopicsByBranch = (branch: string): GeographyTopic[] => {
    return GEOGRAPHY_REGISTRY.filter(topic => topic.branch === branch);
};

export const getGeographyTopicsByBlockId = (blockId: number, branch?: string): GeographyTopic[] => {
    if (branch) {
        return GEOGRAPHY_REGISTRY.filter(topic => topic.blockId === blockId && topic.branch === branch);
    }
    return GEOGRAPHY_REGISTRY.filter(topic => topic.blockId === blockId);
};
