// Topic Registry - All 10 History Topics (10-Day Smart Module)
// Central export point for all topic data

import { HistoryTopic, HISTORY_MODULES } from './history-types';

// Import all 10 day topics
import { topicDay01IVC } from './topics/topic-day01-ivc';
import { topicDay02ReligionEmpires } from './topics/topic-day02-religion-empires';
import { topicDay03CholasSultanate } from './topics/topic-day03-cholas-sultanate';
import { topicDay04MughalMarathas } from './topics/topic-day04-mughals-marathas';
import { topicDay05_1857_1905 } from './topics/topic-day05-1857-1905';
import { topicDay06_1905_1919 } from './topics/topic-day06-1905-1919';
import { topicDay07_1920_1935 } from './topics/topic-day07-1920-1935';
import { topicDay08_1935_1947 } from './topics/topic-day08-1935-1947';
import { topicDay09Architecture } from './topics/topic-day09-architecture';
import { topicDay10Culture } from './topics/topic-day10-culture';

// All topics registry
export const HISTORY_TOPICS: HistoryTopic[] = [
    topicDay01IVC,
    topicDay02ReligionEmpires,
    topicDay03CholasSultanate,
    topicDay04MughalMarathas,
    topicDay05_1857_1905,
    topicDay06_1905_1919,
    topicDay07_1920_1935,
    topicDay08_1935_1947,
    topicDay09Architecture,
    topicDay10Culture,
];

// Get topic by ID
export function getTopicById(id: number): HistoryTopic | undefined {
    return HISTORY_TOPICS.find(t => t.id === id);
}

// Get topic by Day
export function getTopicByDay(day: number): HistoryTopic | undefined {
    return HISTORY_TOPICS.find(t => t.day === day);
}

// Get topics by module
export function getTopicsByModule(moduleId: string): HistoryTopic[] {
    return HISTORY_TOPICS.filter(t => t.module === moduleId);
}

// Get module statistics
export function getModuleStats(moduleId: string) {
    const module = HISTORY_MODULES.find(m => m.id === moduleId);
    if (!module) return null;

    const topics = getTopicsByModule(moduleId);
    const [start, end] = module.dayRange;
    const totalDays = end - start + 1;
    const implementedDays = topics.length;

    return {
        module,
        totalDays,
        implementedDays,
        percentComplete: Math.round((implementedDays / totalDays) * 100),
        totalCA: topics.reduce((sum, t) => sum + t.currentAffairs.length, 0),
        highPriority: topics.filter(t => t.priority === 'High').length,
    };
}

// Re-export types and modules
export * from './history-types';
