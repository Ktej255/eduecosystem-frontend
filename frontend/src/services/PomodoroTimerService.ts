/**
 * Pomodoro Timer Service
 * 
 * Provides a robust timer that:
 * - Continues in background (screen lock, tab switch)
 * - Persists across page refreshes using localStorage
 * - Plays completion sounds
 * - Supports browser notifications
 */

// Session types for the Pomodoro flow
export type SessionType =
    | 'study_25'      // Phase 1: 25-minute study
    | 'explanation_5' // Phase 1: 5-minute explanation
    | 'break_15'      // Break between phases
    | 'study_45'      // Phase 2: 45-minute study
    | 'explanation_10'// Phase 2: 10-minute explanation
    | 'revision_25';  // 6:30 revision session

export interface TimerState {
    isRunning: boolean;
    isPaused: boolean;
    sessionType: SessionType | null;
    startTime: number | null;
    duration: number; // in milliseconds
    pausedAt: number | null;
    totalPausedDuration: number;
    topicId: string | null;
    topicName: string | null;
    cycleNumber: number;
    phaseNumber: number; // 1 or 2
}

export interface TimerCallbacks {
    onTick?: (remaining: number, elapsed: number) => void;
    onComplete?: (sessionType: SessionType) => void;
    onStateChange?: (state: TimerState) => void;
}

const STORAGE_KEY = 'pomodoro_timer_state';
const SOUND_PATH = '/sounds/timer-complete.mp3';

// Duration mappings in milliseconds
export const SESSION_DURATIONS: Record<SessionType, number> = {
    study_25: 25 * 60 * 1000,        // 25 minutes
    explanation_5: 5 * 60 * 1000,     // 5 minutes
    break_15: 15 * 60 * 1000,         // 15 minutes
    study_45: 45 * 60 * 1000,         // 45 minutes
    explanation_10: 10 * 60 * 1000,   // 10 minutes
    revision_25: 25 * 60 * 1000,      // 25 minutes
};

class PomodoroTimerService {
    private worker: Worker | null = null;
    private callbacks: TimerCallbacks = {};
    private state: TimerState;
    private audio: HTMLAudioElement | null = null;
    private visibilityHandler: (() => void) | null = null;

    constructor() {
        this.state = this.loadState() || this.getDefaultState();
        this.initWorker();
        this.initAudio();
        this.setupVisibilityHandler();
        this.requestNotificationPermission();

        // Resume timer if it was running before page refresh
        if (this.state.isRunning && !this.state.isPaused && this.state.startTime) {
            this.resumeFromSavedState();
        }
    }

    private getDefaultState(): TimerState {
        return {
            isRunning: false,
            isPaused: false,
            sessionType: null,
            startTime: null,
            duration: 0,
            pausedAt: null,
            totalPausedDuration: 0,
            topicId: null,
            topicName: null,
            cycleNumber: 1,
            phaseNumber: 1,
        };
    }

    private loadState(): TimerState | null {
        if (typeof window === 'undefined') return null;
        try {
            const saved = localStorage.getItem(STORAGE_KEY);
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (e) {
            console.error('Failed to load timer state:', e);
        }
        return null;
    }

    private saveState() {
        if (typeof window === 'undefined') return;
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
        } catch (e) {
            console.error('Failed to save timer state:', e);
        }
    }

    private initWorker() {
        if (typeof window === 'undefined') return;

        try {
            // Create worker from file
            this.worker = new Worker(new URL('../workers/pomodoroWorker.ts', import.meta.url));

            this.worker.onmessage = (event) => {
                const message = event.data;

                switch (message.type) {
                    case 'TICK':
                        this.callbacks.onTick?.(message.remaining, message.elapsed);
                        break;
                    case 'COMPLETE':
                        this.handleComplete();
                        break;
                    case 'STATUS':
                        // Handle status response if needed
                        break;
                }
            };
        } catch (e) {
            console.error('Failed to initialize Web Worker:', e);
            // Fallback to setInterval-based timer if Worker fails
        }
    }

    private initAudio() {
        if (typeof window === 'undefined') return;

        try {
            this.audio = new Audio(SOUND_PATH);
            this.audio.preload = 'auto';
        } catch (e) {
            console.error('Failed to initialize audio:', e);
        }
    }

    private setupVisibilityHandler() {
        if (typeof window === 'undefined') return;

        this.visibilityHandler = () => {
            if (document.visibilityState === 'visible' && this.state.isRunning && !this.state.isPaused) {
                // Recalculate time when page becomes visible again
                this.syncWithStoredState();
            }
        };

        document.addEventListener('visibilitychange', this.visibilityHandler);
    }

    private syncWithStoredState() {
        const savedState = this.loadState();
        if (savedState && savedState.startTime) {
            const now = Date.now();
            const elapsed = now - savedState.startTime - savedState.totalPausedDuration;
            const remaining = Math.max(0, savedState.duration - elapsed);

            if (remaining <= 0) {
                this.handleComplete();
            } else {
                this.callbacks.onTick?.(remaining, elapsed);
            }
        }
    }

    private async requestNotificationPermission() {
        if (typeof window === 'undefined' || !('Notification' in window)) return;

        if (Notification.permission === 'default') {
            await Notification.requestPermission();
        }
    }

    private handleComplete() {
        const sessionType = this.state.sessionType;

        // Play completion sound
        this.playCompletionSound();

        // Show notification
        this.showNotification();

        // Update state
        this.state.isRunning = false;
        this.state.isPaused = false;
        this.saveState();

        // Notify callback
        if (sessionType) {
            this.callbacks.onComplete?.(sessionType);
        }

        this.callbacks.onStateChange?.(this.state);
    }

    private showNotification() {
        if (typeof window === 'undefined' || !('Notification' in window)) return;

        if (Notification.permission === 'granted') {
            const sessionLabels: Record<SessionType, string> = {
                study_25: '25-minute study session',
                explanation_5: '5-minute explanation',
                break_15: '15-minute break',
                study_45: '45-minute study session',
                explanation_10: '10-minute explanation',
                revision_25: '25-minute revision',
            };

            const label = this.state.sessionType
                ? sessionLabels[this.state.sessionType]
                : 'Timer';

            new Notification('⏰ Time\'s Up!', {
                body: `Your ${label} is complete!`,
                icon: '/favicon.ico',
                tag: 'pomodoro-complete',
                requireInteraction: true,
            });
        }
    }

    async playCompletionSound() {
        if (!this.audio) return;

        try {
            this.audio.currentTime = 0;
            await this.audio.play();
        } catch (e) {
            console.error('Failed to play completion sound:', e);
        }
    }

    // Preview sound for settings
    async previewSound() {
        await this.playCompletionSound();
    }

    private resumeFromSavedState() {
        if (!this.state.startTime) return;

        this.worker?.postMessage({
            type: 'START',
            startTime: this.state.startTime,
            duration: this.state.duration,
        });
    }

    // ============ Public API ============

    startTimer(
        sessionType: SessionType,
        options?: {
            topicId?: string;
            topicName?: string;
            cycleNumber?: number;
            phaseNumber?: number;
            customDuration?: number; // Override default duration (in ms)
        }
    ) {
        const duration = options?.customDuration ?? SESSION_DURATIONS[sessionType];
        const startTime = Date.now();

        this.state = {
            isRunning: true,
            isPaused: false,
            sessionType,
            startTime,
            duration,
            pausedAt: null,
            totalPausedDuration: 0,
            topicId: options?.topicId ?? this.state.topicId,
            topicName: options?.topicName ?? this.state.topicName,
            cycleNumber: options?.cycleNumber ?? this.state.cycleNumber,
            phaseNumber: options?.phaseNumber ?? this.state.phaseNumber,
        };

        this.saveState();

        this.worker?.postMessage({
            type: 'START',
            startTime,
            duration,
        });

        this.callbacks.onStateChange?.(this.state);
    }

    pauseTimer() {
        if (!this.state.isRunning || this.state.isPaused) return;

        this.state.isPaused = true;
        this.state.pausedAt = Date.now();
        this.saveState();

        this.worker?.postMessage({ type: 'PAUSE' });
        this.callbacks.onStateChange?.(this.state);
    }

    resumeTimer() {
        if (!this.state.isRunning || !this.state.isPaused || !this.state.pausedAt) return;

        const pausedDuration = Date.now() - this.state.pausedAt;
        this.state.totalPausedDuration += pausedDuration;
        this.state.isPaused = false;
        this.state.pausedAt = null;
        this.saveState();

        this.worker?.postMessage({ type: 'RESUME', pausedTime: pausedDuration });
        this.callbacks.onStateChange?.(this.state);
    }

    stopTimer() {
        this.state = this.getDefaultState();
        this.saveState();

        this.worker?.postMessage({ type: 'STOP' });
        this.callbacks.onStateChange?.(this.state);
    }

    extendTime(additionalMs: number) {
        if (!this.state.isRunning) return;

        this.state.duration += additionalMs;
        this.saveState();

        // Restart worker with new duration
        if (this.state.startTime) {
            this.worker?.postMessage({
                type: 'START',
                startTime: this.state.startTime,
                duration: this.state.duration,
            });
        }

        this.callbacks.onStateChange?.(this.state);
    }

    // Add 1, 2, 3, or 5 minutes
    addMinutes(minutes: 1 | 2 | 3 | 5) {
        this.extendTime(minutes * 60 * 1000);
    }

    getTimeRemaining(): number {
        if (!this.state.isRunning || !this.state.startTime) return 0;

        const now = this.state.isPaused && this.state.pausedAt
            ? this.state.pausedAt
            : Date.now();
        const elapsed = now - this.state.startTime - this.state.totalPausedDuration;
        return Math.max(0, this.state.duration - elapsed);
    }

    getState(): TimerState {
        return { ...this.state };
    }

    setCallbacks(callbacks: TimerCallbacks) {
        this.callbacks = callbacks;
    }

    updateTopic(topicId: string, topicName: string) {
        this.state.topicId = topicId;
        this.state.topicName = topicName;
        this.saveState();
        this.callbacks.onStateChange?.(this.state);
    }

    updateCycle(cycleNumber: number, phaseNumber: number) {
        this.state.cycleNumber = cycleNumber;
        this.state.phaseNumber = phaseNumber;
        this.saveState();
        this.callbacks.onStateChange?.(this.state);
    }

    // Mark session complete early (e.g., "Done" button)
    completeEarly() {
        this.handleComplete();
        this.worker?.postMessage({ type: 'STOP' });
    }

    // Cleanup
    destroy() {
        this.worker?.terminate();
        if (this.visibilityHandler) {
            document.removeEventListener('visibilitychange', this.visibilityHandler);
        }
    }
}

// Singleton instance
let instance: PomodoroTimerService | null = null;

export function getPomodoroTimerService(): PomodoroTimerService {
    if (!instance) {
        instance = new PomodoroTimerService();
    }
    return instance;
}

export default PomodoroTimerService;
