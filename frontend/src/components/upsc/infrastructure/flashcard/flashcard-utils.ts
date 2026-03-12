// Flashcard Utility Functions
// Generates flashcards from Polity topic data

import { PolityTopic, Concept, PrelimsPointer } from '../../subjects/polity/data/polity-types';

export interface Flashcard {
    id: string;
    front: string;      // Question/Term
    back: string;       // Answer/Definition
    category: 'concept' | 'fact' | 'article' | 'comparison';
    source: string;     // Topic reference
    highlight?: boolean; // For priority facts
    subtopicId?: string; // Links to SubTopic ID for granular filtering
}

/**
 * Generate flashcards from a single PolityTopic
 */
export function generateFlashcardsFromTopic(topic: PolityTopic): Flashcard[] {
    const flashcards: Flashcard[] = [];

    // 1. Convert keyConcepts to flashcards
    topic.keyConcepts.forEach((concept: Concept, idx: number) => {
        flashcards.push({
            id: `${topic.id}-concept-${idx}`,
            front: concept.term,
            back: concept.definition + (concept.example ? `\n\nExample: ${concept.example}` : ''),
            category: 'concept',
            source: topic.title,
        });
    });

    // 2. Convert prelimsPointers to flashcards
    topic.prelimsPointers.forEach((pointer: PrelimsPointer, idx: number) => {
        // Create question format from fact
        const question = createQuestionFromFact(pointer.fact);
        flashcards.push({
            id: `${topic.id}-fact-${idx}`,
            front: question,
            back: pointer.fact,
            category: 'fact',
            source: topic.title,
            highlight: pointer.highlight,
        });
    });

    // 3. Convert coreArticles to flashcards
    topic.coreArticles.forEach((article: any, idx: number) => {
        flashcards.push({
            id: `${topic.id}-article-${idx}`,
            front: `What is Article ${article.number}?`,
            back: `${article.title}\n\n${article.description}`,
            category: 'article',
            source: topic.title,
        });
    });

    return flashcards;
}

/**
 * Create a question from a fact statement
 */
function createQuestionFromFact(fact: string): string {
    // Try to create a fill-in-the-blank or "What is" question

    // Pattern: "X: Y" -> "What is X?"
    const colonMatch = fact.match(/^([^:]+):/);
    if (colonMatch) {
        return `What is ${colonMatch[1].trim()}?`;
    }

    // Pattern: "X was the first Y" -> "Who was the first Y?"
    if (fact.toLowerCase().includes('first')) {
        return fact.replace(/^[^:]+:?\s*/, 'Who/What ').replace(/\.$/, '?');
    }

    // Default: Convert statement to question
    return `What do you know about: ${fact.substring(0, 50)}...?`;
}

/**
 * Get flashcards for a specific day based on cycle and day number
 * Maps day number to topic IDs
 */
export function getFlashcardsForDay(cycleId: number, day: number): { topicIds: number[], totalTopics: number } {
    // Cycle 1 (Polity): 50 topics over 10 days = 5 topics per day
    if (cycleId === 1) {
        // Special case for Day 1: User requested ONLY Historical Background (Topic 1)
        if (day === 1) {
            return {
                topicIds: [1],
                totalTopics: 50
            };
        }

        // Day 2: Making of the Constitution (Topic 2)
        if (day === 2) {
            return {
                topicIds: [2],
                totalTopics: 50
            };
        }

        const topicsPerDay = 5;
        // Adjust start topic based on Day 1/2 being single topics
        // Day 3 starts at topic 3? Or maybe Day 3 starts at topic 6 as originally planned.
        // Let's assume the user wants one topic per day for now if it's specialized.
        const startTopic = (day - 1) * topicsPerDay + 1;
        const endTopic = day * topicsPerDay;

        return {
            topicIds: Array.from({ length: topicsPerDay }, (_, i) => startTopic + i),
            totalTopics: 50
        };
    }

    // Default: return first 5 topics for other cycles
    return {
        topicIds: [1, 2, 3, 4, 5],
        totalTopics: 50
    };
}

/**
 * Shuffle array using Fisher-Yates algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
