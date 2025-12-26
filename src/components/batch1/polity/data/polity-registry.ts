// Topic Registry - All 50 Polity Topics
// Central export point for all topic data

import { PolityTopic, POLITY_MODULES } from './polity-types';

// Import Topics 1-5 (Phase 1)
import { topic01HistoricalEvolution } from './topics/topic-01-historical-evolution';
import { topic02MakingConstitution } from './topics/topic-02-making-constitution';
import { topic03Preamble } from './topics/topic-03-preamble';
import { topic04UnionTerritory } from './topics/topic-04-union-territory';
import { topic05Citizenship } from './topics/topic-05-citizenship';

// Import Topics 6-11 (Phase 2)
import { topic06FREquality } from './topics/topic-06-fr-equality';
import { topic07FRFreedom } from './topics/topic-07-fr-freedom';
import { topic08FRReligion } from './topics/topic-08-fr-religion';
import { topic09DPSP } from './topics/topic-09-dpsp';
import { topic10DutiesBasicStructure } from './topics/topic-10-duties-basic-structure';
import { topic11Amendment } from './topics/topic-11-amendment';

// All topics registry
export const POLITY_TOPICS: PolityTopic[] = [
    topic01HistoricalEvolution,
    topic02MakingConstitution,
    topic03Preamble,
    topic04UnionTerritory,
    topic05Citizenship,
    topic06FREquality,
    topic07FRFreedom,
    topic08FRReligion,
    topic09DPSP,
    topic10DutiesBasicStructure,
    topic11Amendment,
    // Topics 12-50 will be added in subsequent phases
];

// Get topic by ID
export function getTopicById(id: number): PolityTopic | undefined {
    return POLITY_TOPICS.find(t => t.id === id);
}

// Get topics by module
export function getTopicsByModule(moduleId: string): PolityTopic[] {
    return POLITY_TOPICS.filter(t => t.module === moduleId);
}

// Get module statistics
export function getModuleStats(moduleId: string) {
    const module = POLITY_MODULES.find(m => m.id === moduleId);
    if (!module) return null;

    const topics = getTopicsByModule(moduleId);
    const [start, end] = module.topicRange;
    const totalTopics = end - start + 1;
    const implementedTopics = topics.length;

    return {
        module,
        totalTopics,
        implementedTopics,
        percentComplete: Math.round((implementedTopics / totalTopics) * 100),
        totalCA: topics.reduce((sum, t) => sum + t.currentAffairs.length, 0),
    };
}

// Re-export types and modules
export * from './polity-types';
