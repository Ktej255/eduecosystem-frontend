/**
 * Schedule Manager Service
 * 
 * Manages dynamic schedule adjustments when:
 * - Topics are covered early
 * - Students allocate different time to subjects
 * - Study sessions are completed ahead/behind schedule
 */

export interface ScheduledTopic {
    id: string;
    topicName: string;
    subjectId: string;
    subjectName: string;
    scheduledDate: string; // ISO date string
    allocatedHours: number;
    status: 'pending' | 'in-progress' | 'completed' | 'skipped';
    actualHoursSpent?: number;
    completedAt?: string;
}

export interface SubjectAllocation {
    subjectId: string;
    subjectName: string;
    totalHours: number;
    hoursCompleted: number;
    topicsCount: number;
    topicsCompleted: number;
}

export interface WeeklySchedule {
    weekNumber: number;
    startDate: string;
    endDate: string;
    topics: ScheduledTopic[];
}

const STORAGE_KEY_SCHEDULE = 'ras_study_schedule';
const STORAGE_KEY_ALLOCATIONS = 'ras_subject_allocations';

class ScheduleManager {
    private schedule: ScheduledTopic[] = [];
    private allocations: SubjectAllocation[] = [];

    constructor() {
        this.loadFromStorage();
    }

    // ============ Storage ============

    private loadFromStorage() {
        if (typeof window === 'undefined') return;

        try {
            const savedSchedule = localStorage.getItem(STORAGE_KEY_SCHEDULE);
            if (savedSchedule) {
                this.schedule = JSON.parse(savedSchedule);
            }

            const savedAllocations = localStorage.getItem(STORAGE_KEY_ALLOCATIONS);
            if (savedAllocations) {
                this.allocations = JSON.parse(savedAllocations);
            }
        } catch (e) {
            console.error('Failed to load schedule from storage:', e);
        }
    }

    private saveToStorage() {
        if (typeof window === 'undefined') return;

        try {
            localStorage.setItem(STORAGE_KEY_SCHEDULE, JSON.stringify(this.schedule));
            localStorage.setItem(STORAGE_KEY_ALLOCATIONS, JSON.stringify(this.allocations));
        } catch (e) {
            console.error('Failed to save schedule to storage:', e);
        }
    }

    // ============ Schedule Management ============

    /**
     * Schedule a new topic
     */
    scheduleTopic(topic: Omit<ScheduledTopic, 'id' | 'status'>): ScheduledTopic {
        const newTopic: ScheduledTopic = {
            ...topic,
            id: `topic-${Date.now()}`,
            status: 'pending',
        };

        this.schedule.push(newTopic);
        this.saveToStorage();
        return newTopic;
    }

    /**
     * Mark a topic as completed
     */
    completeTopic(topicId: string, actualHoursSpent: number): void {
        const topic = this.schedule.find((t) => t.id === topicId);
        if (topic) {
            topic.status = 'completed';
            topic.actualHoursSpent = actualHoursSpent;
            topic.completedAt = new Date().toISOString();

            // Update subject allocation
            this.updateSubjectProgress(topic.subjectId, actualHoursSpent);

            // Rebalance schedule if completed early
            if (actualHoursSpent < topic.allocatedHours) {
                this.rebalanceSchedule(topicId);
            }

            this.saveToStorage();
        }
    }

    /**
     * Mark a topic as in progress
     */
    startTopic(topicId: string): void {
        const topic = this.schedule.find((t) => t.id === topicId);
        if (topic) {
            topic.status = 'in-progress';
            this.saveToStorage();
        }
    }

    /**
     * Skip a topic
     */
    skipTopic(topicId: string): void {
        const topic = this.schedule.find((t) => t.id === topicId);
        if (topic) {
            topic.status = 'skipped';
            this.saveToStorage();
        }
    }

    /**
     * Rebalance schedule when a topic is completed early
     * This shifts remaining topics forward
     */
    private rebalanceSchedule(completedTopicId: string): void {
        const completedTopic = this.schedule.find((t) => t.id === completedTopicId);
        if (!completedTopic) return;

        const savedTime = completedTopic.allocatedHours - (completedTopic.actualHoursSpent || 0);
        if (savedTime <= 0) return;

        // Find pending topics for the same subject
        const pendingTopics = this.schedule.filter(
            (t) =>
                t.subjectId === completedTopic.subjectId &&
                t.status === 'pending' &&
                t.scheduledDate > completedTopic.scheduledDate
        );

        // Redistribute saved time by moving topics earlier
        let remainingTime = savedTime;
        for (const topic of pendingTopics) {
            if (remainingTime <= 0) break;

            // Move topic date earlier by the saved time
            const currentDate = new Date(topic.scheduledDate);
            const hoursToShift = Math.min(remainingTime, topic.allocatedHours);
            currentDate.setHours(currentDate.getHours() - hoursToShift);
            topic.scheduledDate = currentDate.toISOString();
            remainingTime -= hoursToShift;
        }
    }

    /**
     * Get topics for a specific date
     */
    getTopicsForDate(date: string): ScheduledTopic[] {
        const targetDate = new Date(date).toDateString();
        return this.schedule.filter(
            (t) => new Date(t.scheduledDate).toDateString() === targetDate
        );
    }

    /**
     * Get topics for today
     */
    getTodaysTopics(): ScheduledTopic[] {
        return this.getTopicsForDate(new Date().toISOString());
    }

    /**
     * Get weekly schedule
     */
    getWeeklySchedule(weekOffset: number = 0): WeeklySchedule {
        const now = new Date();
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay() + weekOffset * 7);
        startOfWeek.setHours(0, 0, 0, 0);

        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);

        const topics = this.schedule.filter((t) => {
            const topicDate = new Date(t.scheduledDate);
            return topicDate >= startOfWeek && topicDate <= endOfWeek;
        });

        return {
            weekNumber: this.getWeekNumber(startOfWeek),
            startDate: startOfWeek.toISOString(),
            endDate: endOfWeek.toISOString(),
            topics,
        };
    }

    private getWeekNumber(date: Date): number {
        const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
        const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    }

    // ============ Subject Allocations ============

    /**
     * Set allocation for a subject
     */
    setSubjectAllocation(
        subjectId: string,
        subjectName: string,
        totalHours: number,
        topicsCount: number
    ): void {
        const existing = this.allocations.find((a) => a.subjectId === subjectId);
        if (existing) {
            existing.totalHours = totalHours;
            existing.topicsCount = topicsCount;
        } else {
            this.allocations.push({
                subjectId,
                subjectName,
                totalHours,
                hoursCompleted: 0,
                topicsCount,
                topicsCompleted: 0,
            });
        }
        this.saveToStorage();
    }

    /**
     * Update subject progress when a topic is completed
     */
    private updateSubjectProgress(subjectId: string, hoursSpent: number): void {
        const allocation = this.allocations.find((a) => a.subjectId === subjectId);
        if (allocation) {
            allocation.hoursCompleted += hoursSpent;
            allocation.topicsCompleted += 1;
        }
    }

    /**
     * Get all subject allocations
     */
    getAllocations(): SubjectAllocation[] {
        return [...this.allocations];
    }

    /**
     * Get allocation for a specific subject
     */
    getSubjectAllocation(subjectId: string): SubjectAllocation | undefined {
        return this.allocations.find((a) => a.subjectId === subjectId);
    }

    // ============ Modification APIs ============

    /**
     * Move a topic to a different date
     */
    moveTopic(topicId: string, newDate: string): void {
        const topic = this.schedule.find((t) => t.id === topicId);
        if (topic) {
            topic.scheduledDate = newDate;
            this.saveToStorage();
        }
    }

    /**
     * Change topic's allocated hours
     */
    updateTopicHours(topicId: string, newHours: number): void {
        const topic = this.schedule.find((t) => t.id === topicId);
        if (topic) {
            topic.allocatedHours = newHours;
            this.saveToStorage();
        }
    }

    /**
     * Delete a topic from schedule
     */
    deleteTopic(topicId: string): void {
        this.schedule = this.schedule.filter((t) => t.id !== topicId);
        this.saveToStorage();
    }

    /**
     * Get all scheduled topics
     */
    getAllTopics(): ScheduledTopic[] {
        return [...this.schedule];
    }

    /**
     * Get pending topics
     */
    getPendingTopics(): ScheduledTopic[] {
        return this.schedule.filter((t) => t.status === 'pending');
    }

    /**
     * Get completed topics
     */
    getCompletedTopics(): ScheduledTopic[] {
        return this.schedule.filter((t) => t.status === 'completed');
    }

    /**
     * Clear all data
     */
    clearAll(): void {
        this.schedule = [];
        this.allocations = [];
        this.saveToStorage();
    }
}

// Singleton instance
let instance: ScheduleManager | null = null;

export function getScheduleManager(): ScheduleManager {
    if (!instance) {
        instance = new ScheduleManager();
    }
    return instance;
}

export default ScheduleManager;
