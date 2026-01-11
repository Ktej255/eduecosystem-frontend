/**
 * Journey Completion Tracker
 * 
 * Tracks which journey steps have been completed for each day using localStorage.
 */

const STORAGE_KEY = 'journey_step_completion';

export interface StepCompletionData {
    [dayNumber: number]: {
        [stepId: string]: {
            completed: boolean;
            completedAt: string;
        };
    };
}

/**
 * Get all completion data from localStorage
 */
export function getCompletionData(): StepCompletionData {
    if (typeof window === 'undefined') return {};
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : {};
    } catch {
        return {};
    }
}

/**
 * Check if a specific step is completed for a given day
 */
export function isStepCompleted(dayNumber: number, stepId: string): boolean {
    const data = getCompletionData();
    return data[dayNumber]?.[stepId]?.completed ?? false;
}

/**
 * Mark a step as completed for a given day
 */
export function markStepComplete(dayNumber: number, stepId: string): void {
    if (typeof window === 'undefined') return;

    const data = getCompletionData();
    if (!data[dayNumber]) {
        data[dayNumber] = {};
    }

    data[dayNumber][stepId] = {
        completed: true,
        completedAt: new Date().toISOString()
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    // Trigger storage event for other components
    window.dispatchEvent(new Event('storage'));
}

/**
 * Mark a step as not completed (reset)
 */
export function markStepIncomplete(dayNumber: number, stepId: string): void {
    if (typeof window === 'undefined') return;

    const data = getCompletionData();
    if (data[dayNumber]?.[stepId]) {
        delete data[dayNumber][stepId];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        window.dispatchEvent(new Event('storage'));
    }
}

/**
 * Get all completed steps for a given day
 */
export function getCompletedStepsForDay(dayNumber: number): string[] {
    const data = getCompletionData();
    const dayData = data[dayNumber] || {};
    return Object.keys(dayData).filter(stepId => dayData[stepId].completed);
}

/**
 * Clear all completion data (for testing/reset)
 */
export function clearCompletionData(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new Event('storage'));
}
