"use client";

/**
 * Polity Mains Adapter
 * Converts PolityTopic data to SubjectConfig format for MainsPractice compatibility.
 */

import { PolityTopic, POLITY_MODULES } from './polity-types';
import { SubjectConfig, SubjectTopic, SubjectModule } from '../../../common/framework/SubjectPlanner';

/**
 * Sample Mains Questions for Polity Topics
 * These can be expanded over time
 */
const POLITY_MAINS_QUESTIONS: Record<number, Array<{ id: string; question: string; marks: number; modelAnswer?: string }>> = {
    1: [
        { id: "PQ1-1", question: "Discuss the historical evolution of the Indian Constitution and the major sources from which it drew inspiration.", marks: 15 }
    ],
    2: [
        { id: "PQ2-1", question: "Explain the composition and role of the Constituent Assembly in the making of the Indian Constitution.", marks: 10 }
    ],
    3: [
        { id: "PQ3-1", question: "Analyze the significance of the Preamble to the Indian Constitution. Is it justiciable?", marks: 15, modelAnswer: "The Preamble declares India as a Sovereign, Socialist, Secular, Democratic Republic. Key points: 1) Source of authority (We the people), 2) Nature of state, 3) Objectives (Justice, Liberty, Equality, Fraternity). Justiciability: Kesavananda Bharati case established it as part of Constitution but non-enforceable directly." }
    ],
    9: [
        { id: "PQ9-1", question: "Critically analyze the relationship between Fundamental Rights and Directive Principles of State Policy.", marks: 15 }
    ],
    11: [
        { id: "PQ11-1", question: "Discuss the procedure for amendment of the Indian Constitution. Does frequent amendment undermine the sanctity of the Constitution?", marks: 15 }
    ],
    16: [
        { id: "PQ16-1", question: "Examine the emergency provisions under the Indian Constitution. How do they safeguard national integrity while protecting democratic rights?", marks: 15 }
    ],
    27: [
        { id: "PQ27-1", question: "Discuss the role of the Supreme Court as the guardian of the Constitution. How has judicial activism shaped Indian polity?", marks: 15 }
    ],
    32: [
        { id: "PQ32-1", question: "Analyze the role of the Election Commission of India in ensuring free and fair elections. Suggest reforms needed.", marks: 10 }
    ],
    22: [
        { id: "PQ22-1", question: "Discuss the powers and functions of the Speaker of the Lok Sabha. How does the Speaker ensure the orderly conduct of business in the House?", marks: 15 }
    ],
    30: [
        { id: "PQ30-1", question: "The office of the Governor has often been a subject of controversy in Indian federalism. Critically examine.", marks: 15 }
    ],
    38: [
        { id: "PQ38-1", question: "Trace the evolution of Panchayati Raj Institutions in India. Have they been successful in achieving democratic decentralization?", marks: 15 }
    ]
};

/**
 * Converts a PolityTopic to a SubjectTopic
 */
function polityTopicToSubjectTopic(topic: PolityTopic): SubjectTopic {
    return {
        id: topic.id,
        title: topic.title,
        moduleId: topic.module,
        priority: topic.priority,
        staticFocus: topic.staticFocus,
        keyConcepts: topic.keyConcepts.map(c => c.term),
        currentAffairsCount: topic.currentAffairs.length,
        mainsQuestions: POLITY_MAINS_QUESTIONS[topic.id] || []
    };
}

/**
 * Converts POLITY_MODULES to SubjectModule[]
 */
function polityModulesToSubjectModules(): SubjectModule[] {
    return POLITY_MODULES.map(m => ({
        id: m.id,
        title: m.title,
        description: m.description,
        icon: null, // Icon is emoji string in Polity, not React element
        color: m.color,
        topicRange: m.topicRange
    }));
}

/**
 * Creates a SubjectConfig from PolityTopic array
 */
export function createPolitySubjectConfig(topics: PolityTopic[]): SubjectConfig {
    return {
        id: "polity",
        title: "Indian Polity & Governance",
        subtitle: "Laxmikanth-based Mains Practice",
        totalChapters: topics.length,
        totalParts: POLITY_MODULES.length,
        modules: polityModulesToSubjectModules(),
        topics: topics.map(polityTopicToSubjectTopic),
        chapters: topics.map(t => ({
            chapter: t.id,
            topic: t.title,
            part: t.module,
            pages: t.pageCount || 10,
            slots: t.studySlots || 2
        })),
        schedules: [], // No schedule for Mains practice
        colors: {
            primary: "blue",
            heroGradient: "from-blue-700 via-indigo-800 to-purple-900"
        },
        basePath: "/student/upsc/polity"
    };
}
