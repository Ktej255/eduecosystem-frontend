/**
 * UPSC Synapse: Stress-Response Engine (SRE) v1.0
 * 
 * Purpose: 
 * Detects "Panic Clicking" (High speed + High error rate) to identify exam anxiety.
 * 
 * Core Formula:
 * Stress_Score = (Error_Streak * 2) + (Target_Time / Actual_Time)
 * 
 * Threshold:
 * If Stress_Score > 5 -> Trigger Anxiety Intervention.
 */

export interface StressMetrics {
    timeTaken: number;      // Seconds taken for the current question
    errorStreak: number;    // Consecutive wrong answers
    targetTime: number;     // Expected time (e.g., 60s for Hard questions)
}

export const ANXIETY_THRESHOLD = 5.0;
export const MIN_TIME_THRESHOLD = 5.0; // If answered in < 5s, it's a "Guess/Panic"

export function calculateStressScore(metrics: StressMetrics): { score: number; isAnxietyDetected: boolean; reason?: string } {
    const { timeTaken, errorStreak, targetTime } = metrics;

    // Prevent division by zero
    const effectiveTime = Math.max(timeTaken, 0.5);

    // Velocity Factor: How much faster than "Thoughtful Time" are they going?
    const velocityFactor = targetTime / effectiveTime;

    // The Stress Formula
    const stressScore = (errorStreak * 2) + velocityFactor;

    let isAnxietyDetected = false;
    let reason = undefined;

    if (stressScore > ANXIETY_THRESHOLD) {
        if (timeTaken < MIN_TIME_THRESHOLD && errorStreak >= 1) {
            isAnxietyDetected = true;
            reason = "Impulse Clicking detected. You are guessing without reading.";
        } else if (errorStreak >= 3) {
            isAnxietyDetected = true;
            reason = "Negative Spiral detected. 3 consecutive errors.";
        } else if (velocityFactor > 4) {
            isAnxietyDetected = true;
            reason = "Rushing detected. Slow down to improve accuracy.";
        }
    }

    return {
        score: parseFloat(stressScore.toFixed(2)),
        isAnxietyDetected,
        reason
    };
}

export function getMeditationRecommendation(): string {
    const recommendations = [
        "Take 3 deep breaths. 4-7-8 breathing technique.",
        "Visualise your success for 30 seconds.",
        "Drink a sip of water and reset your posture."
    ];
    return recommendations[Math.floor(Math.random() * recommendations.length)];
}
