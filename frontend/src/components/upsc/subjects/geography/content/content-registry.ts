import { LessonContent } from "./types";
import {
    GEO_TIME_SCALE_CONTENT,
    ORIGIN_OF_EARTH_CONTENT,
    EVOLUTION_SPHERES_CONTENT
} from "./earth-evolution-data";
import { ORIGIN_OF_UNIVERSE_CONTENT } from "./universe-data";
import {
    ENDOGENIC_PROCESSES_CONTENT,
    VOLCANISM_CONTENT,
    EARTHQUAKE_CONTENT,
    EXOGENIC_PROCESSES_CONTENT
} from "./geomorphic-processes-data";

// Registry mapping topic IDs to their full content objects
export const GEOGRAPHY_CONTENT_REGISTRY: Record<string, LessonContent> = {
    // Universe & Earth Evolution
    'origin-universe': ORIGIN_OF_UNIVERSE_CONTENT,
    'geo-time-scale': GEO_TIME_SCALE_CONTENT,
    'origin-earth': ORIGIN_OF_EARTH_CONTENT,
    'evolution-spheres': EVOLUTION_SPHERES_CONTENT,

    // Geomorphic Processes (Endogenic)
    'endogenic-processes': ENDOGENIC_PROCESSES_CONTENT,
    'volcanism': VOLCANISM_CONTENT,
    'earthquakes': EARTHQUAKE_CONTENT,

    // Geomorphic Processes (Exogenic)
    'exogenic-processes': EXOGENIC_PROCESSES_CONTENT,
};

export function getContentForTopic(topicId: string): LessonContent | null {
    return GEOGRAPHY_CONTENT_REGISTRY[topicId] || null;
}
