// Weak Topic Analyzer - Identifies weak subtopics based on MCQ performance

export interface TopicPerformance {
    topicId: string;
    topicName: string;
    totalAttempts: number;
    correctAnswers: number;
    accuracy: number;
    lastAttempted: string | null;
    needsReview: boolean;
    practiceRecommendation: 'urgent' | 'recommended' | 'optional' | 'mastered';
}

export interface WeakTopicAnalysis {
    weakTopics: TopicPerformance[];
    strongTopics: TopicPerformance[];
    overallAccuracy: number;
    totalTopicsAnalyzed: number;
    lastUpdated: string;
}

const WEAK_TOPIC_STORAGE_KEY = 'eduecosystem_topic_performance';

/**
 * Get topic performance data from localStorage
 */
function getStoredPerformance(): Record<string, TopicPerformance> {
    if (typeof window === 'undefined') return {};

    try {
        const stored = localStorage.getItem(WEAK_TOPIC_STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch (e) {
        return {};
    }
}

/**
 * Save topic performance data
 */
function savePerformance(data: Record<string, TopicPerformance>): void {
    if (typeof window === 'undefined') return;
    localStorage.setItem(WEAK_TOPIC_STORAGE_KEY, JSON.stringify(data));
}

/**
 * Record MCQ attempt for a topic
 */
export function recordMCQAttempt(
    topicId: string,
    topicName: string,
    isCorrect: boolean
): TopicPerformance {
    const data = getStoredPerformance();

    if (!data[topicId]) {
        data[topicId] = {
            topicId,
            topicName,
            totalAttempts: 0,
            correctAnswers: 0,
            accuracy: 0,
            lastAttempted: null,
            needsReview: false,
            practiceRecommendation: 'optional'
        };
    }

    data[topicId].totalAttempts++;
    if (isCorrect) {
        data[topicId].correctAnswers++;
    }

    // Calculate accuracy
    data[topicId].accuracy = Math.round(
        (data[topicId].correctAnswers / data[topicId].totalAttempts) * 100
    );

    data[topicId].lastAttempted = new Date().toISOString();

    // Determine practice recommendation
    data[topicId].practiceRecommendation = getPracticeRecommendation(data[topicId]);
    data[topicId].needsReview = data[topicId].accuracy < 60 && data[topicId].totalAttempts >= 3;

    savePerformance(data);
    return data[topicId];
}

/**
 * Record batch MCQ results
 */
export function recordBatchMCQResults(
    results: Array<{ topicId: string; topicName: string; isCorrect: boolean }>
): void {
    results.forEach(result => {
        recordMCQAttempt(result.topicId, result.topicName, result.isCorrect);
    });
}

/**
 * Get practice recommendation based on performance
 */
function getPracticeRecommendation(
    perf: TopicPerformance
): 'urgent' | 'recommended' | 'optional' | 'mastered' {
    if (perf.totalAttempts < 3) {
        return 'optional'; // Not enough data
    }

    if (perf.accuracy >= 90) {
        return 'mastered';
    } else if (perf.accuracy >= 70) {
        return 'optional';
    } else if (perf.accuracy >= 50) {
        return 'recommended';
    } else {
        return 'urgent';
    }
}

/**
 * Analyze all topic performance and identify weak areas
 */
export function analyzeWeakTopics(): WeakTopicAnalysis {
    const data = getStoredPerformance();
    const topics = Object.values(data);

    // Filter topics with sufficient attempts
    const analyzableTopics = topics.filter(t => t.totalAttempts >= 3);

    // Sort by accuracy (ascending for weak, descending for strong)
    const sortedByAccuracy = [...analyzableTopics].sort((a, b) => a.accuracy - b.accuracy);

    // Identify weak topics (bottom 30% or accuracy < 60%)
    const weakTopics = sortedByAccuracy.filter(t =>
        t.accuracy < 60 || t.practiceRecommendation === 'urgent' || t.practiceRecommendation === 'recommended'
    );

    // Identify strong topics (accuracy >= 80%)
    const strongTopics = sortedByAccuracy.filter(t => t.accuracy >= 80);

    // Calculate overall accuracy
    const totalAttempts = topics.reduce((sum, t) => sum + t.totalAttempts, 0);
    const totalCorrect = topics.reduce((sum, t) => sum + t.correctAnswers, 0);
    const overallAccuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

    return {
        weakTopics,
        strongTopics,
        overallAccuracy,
        totalTopicsAnalyzed: analyzableTopics.length,
        lastUpdated: new Date().toISOString()
    };
}

/**
 * Get top N weak topics for focused practice
 */
export function getTopWeakTopics(n: number = 5): TopicPerformance[] {
    const analysis = analyzeWeakTopics();
    return analysis.weakTopics.slice(0, n);
}

/**
 * Get practice recommendations for a specific topic
 */
export function getTopicRecommendation(topicId: string): TopicPerformance | null {
    const data = getStoredPerformance();
    return data[topicId] || null;
}

/**
 * Get all topic performances
 */
export function getAllTopicPerformances(): TopicPerformance[] {
    const data = getStoredPerformance();
    return Object.values(data).sort((a, b) => a.accuracy - b.accuracy);
}

/**
 * Clear all performance data (for reset)
 */
export function clearPerformanceData(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(WEAK_TOPIC_STORAGE_KEY);
}

/**
 * Get practice priority color
 */
export function getPriorityColor(recommendation: TopicPerformance['practiceRecommendation']): string {
    switch (recommendation) {
        case 'urgent':
            return 'bg-red-500 text-white';
        case 'recommended':
            return 'bg-orange-500 text-white';
        case 'optional':
            return 'bg-blue-500 text-white';
        case 'mastered':
            return 'bg-green-500 text-white';
    }
}

/**
 * Get recommendation label
 */
export function getRecommendationLabel(recommendation: TopicPerformance['practiceRecommendation']): string {
    switch (recommendation) {
        case 'urgent':
            return 'Needs Urgent Practice';
        case 'recommended':
            return 'Practice Recommended';
        case 'optional':
            return 'Optional Review';
        case 'mastered':
            return 'Mastered';
    }
}
