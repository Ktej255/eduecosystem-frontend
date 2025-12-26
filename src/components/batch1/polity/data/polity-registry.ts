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

// Import Topics 12-26 (Phase 3)
import { topic12ParliamentarySystem } from './topics/topic-12-parliamentary-system';
import { topic13FederalSystem } from './topics/topic-13-federal-system';
import { topic14CentreStateRelations } from './topics/topic-14-centre-state';
import { topic15InterStateRelations } from './topics/topic-15-inter-state';
import { topic16Emergency } from './topics/topic-16-emergency';
import { topic17PresidentGovernor1 } from './topics/topic-17-president-governor-1';
import { topic18PresidentGovernor2 } from './topics/topic-18-president-governor-2';
import { topic19VicePresident } from './topics/topic-19-vice-president';
import { topic20PMCM } from './topics/topic-20-pm-cm';
import { topic21Parliament1 } from './topics/topic-21-parliament-1';
import { topic22Parliament2 } from './topics/topic-22-parliament-2';
import { topic23Parliament3 } from './topics/topic-23-parliament-3';
import { topic24Parliament4 } from './topics/topic-24-parliament-4';
import { topic25Committees } from './topics/topic-25-committees';
import { topic26AntiDefection } from './topics/topic-26-anti-defection';

// Import Topics 27-38 (Phase 4)
import { topic27SupremeCourt } from './topics/topic-27-supreme-court';
import { topic28HighCourts } from './topics/topic-28-high-courts';
import { topic29JudicialDoctrines } from './topics/topic-29-judicial-doctrines';
import { topic30PanchayatiRaj } from './topics/topic-30-panchayati-raj';
import { topic31Municipalities } from './topics/topic-31-municipalities';
import { topic32Elections } from './topics/topic-32-elections';
import { topic33CAGFinance } from './topics/topic-33-cag-finance';
import { topic34UPSCSPSC } from './topics/topic-34-upsc-spsc';
import { topic35VulnerableCommissions } from './topics/topic-35-vulnerable-commissions';
import { topic36NHRCLegalAid } from './topics/topic-36-nhrc-legal-aid';
import { topic37CICLokpal } from './topics/topic-37-cic-lokpal';
import { topic38NITINIACBl } from './topics/topic-38-niti-nia-cbi';

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
    topic12ParliamentarySystem,
    topic13FederalSystem,
    topic14CentreStateRelations,
    topic15InterStateRelations,
    topic16Emergency,
    topic17PresidentGovernor1,
    topic18PresidentGovernor2,
    topic19VicePresident,
    topic20PMCM,
    topic21Parliament1,
    topic22Parliament2,
    topic23Parliament3,
    topic24Parliament4,
    topic25Committees,
    topic26AntiDefection,
    topic27SupremeCourt,
    topic28HighCourts,
    topic29JudicialDoctrines,
    topic30PanchayatiRaj,
    topic31Municipalities,
    topic32Elections,
    topic33CAGFinance,
    topic34UPSCSPSC,
    topic35VulnerableCommissions,
    topic36NHRCLegalAid,
    topic37CICLokpal,
    topic38NITINIACBl,
    // Topics 39-50 will be added in Phase 5
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
