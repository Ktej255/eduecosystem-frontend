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
    | 'revision_25'   // 6:30 revision session
    | 'ras_revision'; // RAS Portal 2.0 Revision session

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
    ras_revision: 25 * 60 * 1000,     // 25 minutes (default)
};

class PomodoroTimerService {
    private worker: Worker | null = null;
    private callbacks: TimerCallbacks = {};
    private state: TimerState;
    private audio: HTMLAudioElement | null = null;
    private visibilityHandler: (() => void) | null = null;

    private wakeLock: any = null;

    constructor() {
        this.state = this.loadState() || this.getDefaultState();
        this.initWorker();
        this.initAudio();
        this.setupVisibilityHandler();
        this.requestNotificationPermission();

        // Resume timer if it was running before page refresh
        if (this.state.isRunning && !this.state.isPaused && this.state.startTime) {
            this.resumeFromSavedState();
            this.requestWakeLock();
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
            return saved ? JSON.parse(saved) : null;
        } catch {
            return null;
        }
    }

    private saveState() {
        if (typeof window === 'undefined') return;
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
        } catch {
            // Ignore storage errors
        }
    }

    private initWorker() {
        if (typeof window === 'undefined') return;
        try {
            const workerCode = `
                let timerId = null;
                let startTime = 0;
                let duration = 0;
                let pausedTime = 0;

                self.onmessage = function(e) {
                    const { type, startTime: st, duration: dur, pausedTime: pt } = e.data;
                    
                    if (type === 'START') {
                        startTime = st;
                        duration = dur;
                        pausedTime = 0;
                        if (timerId) clearInterval(timerId);
                        timerId = setInterval(() => {
                            const elapsed = Date.now() - startTime - pausedTime;
                            const remaining = Math.max(0, duration - elapsed);
                            self.postMessage({ type: 'TICK', remaining, elapsed });
                            if (remaining <= 0) {
                                clearInterval(timerId);
                                self.postMessage({ type: 'COMPLETE' });
                            }
                        }, 100);
                    } else if (type === 'PAUSE') {
                        if (timerId) clearInterval(timerId);
                        timerId = null;
                    } else if (type === 'RESUME') {
                        pausedTime += e.data.pausedTime || 0;
                        if (timerId) clearInterval(timerId);
                        timerId = setInterval(() => {
                            const elapsed = Date.now() - startTime - pausedTime;
                            const remaining = Math.max(0, duration - elapsed);
                            self.postMessage({ type: 'TICK', remaining, elapsed });
                            if (remaining <= 0) {
                                clearInterval(timerId);
                                self.postMessage({ type: 'COMPLETE' });
                            }
                        }, 100);
                    } else if (type === 'STOP') {
                        if (timerId) clearInterval(timerId);
                        timerId = null;
                    }
                };
            `;
            const blob = new Blob([workerCode], { type: 'application/javascript' });
            this.worker = new Worker(URL.createObjectURL(blob));
            this.worker.onmessage = (e) => {
                if (e.data.type === 'TICK') {
                    this.callbacks.onTick?.(e.data.remaining, e.data.elapsed);
                } else if (e.data.type === 'COMPLETE') {
                    this.handleComplete();
                }
            };
        } catch {
            // Worker not supported
        }
    }

    private initAudio() {
        if (typeof window === 'undefined') return;
        try {
            this.audio = new Audio(SOUND_PATH);
            this.audio.preload = 'auto';
        } catch {
            // Audio not supported
        }
    }

    private setupVisibilityHandler() {
        if (typeof window === 'undefined') return;
        this.visibilityHandler = () => {
            if (document.visibilityState === 'visible' && this.state.isRunning && !this.state.isPaused) {
                this.requestWakeLock();
            }
        };
        document.addEventListener('visibilitychange', this.visibilityHandler);
    }

    private requestNotificationPermission() {
        if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }
    }

    private resumeFromSavedState() {
        if (!this.state.startTime) return;
        this.worker?.postMessage({
            type: 'START',
            startTime: this.state.startTime,
            duration: this.state.duration,
        });
    }

    private playCompletionSound() {
        this.audio?.play().catch(() => { /* ignore */ });
    }

    private showNotification() {
        if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
            new Notification('Timer Complete!', {
                body: `${this.state.sessionType} session finished.`,
                icon: '/favicon.ico',
            });
        }
    }

    private async requestWakeLock() {
        if (typeof window !== 'undefined' && 'wakeLock' in navigator) {
            try {
                this.wakeLock = await (navigator as any).wakeLock.request('screen');
                this.wakeLock.addEventListener('release', () => {
                    console.log('Wake Lock released');
                    this.wakeLock = null;
                });
                console.log('Wake Lock acquired');
            } catch (err: unknown) {
                const e = err as Error;
                console.error(`${e.name}, ${e.message}`);
            }
        }
    }

    private async releaseWakeLock() {
        if (this.wakeLock) {
            try {
                await this.wakeLock.release();
                this.wakeLock = null;
            } catch (err: unknown) {
                const e = err as Error;
                console.error(`${e.name}, ${e.message}`);
            }
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

        this.releaseWakeLock();

        // Notify callback
        if (sessionType) {
            this.callbacks.onComplete?.(sessionType);
        }

        this.callbacks.onStateChange?.(this.state);
    }

    // ... (existing methods)

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
        this.requestWakeLock();

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
        this.releaseWakeLock();

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
        this.requestWakeLock();

        this.worker?.postMessage({ type: 'RESUME', pausedTime: pausedDuration });
        this.callbacks.onStateChange?.(this.state);
    }

    stopTimer() {
        this.state = this.getDefaultState();
        this.saveState();
        this.releaseWakeLock();

        this.worker?.postMessage({ type: 'STOP' });
        this.callbacks.onStateChange?.(this.state);
    }

    getState(): TimerState {
        return this.state;
    }

    setCallbacks(callbacks: TimerCallbacks) {
        this.callbacks = callbacks;
    }

    getTimeRemaining(): number {
        if (!this.state.isRunning || !this.state.startTime) {
            return 0;
        }
        const elapsed = Date.now() - this.state.startTime - this.state.totalPausedDuration;
        return Math.max(0, this.state.duration - elapsed);
    }

    previewSound() {
        this.audio?.play().catch(() => { /* ignore */ });
    }

    addMinutes(minutes: number) {
        if (!this.state.isRunning) return;
        this.state.duration += minutes * 60 * 1000;
        this.saveState();
        this.callbacks.onStateChange?.(this.state);
    }

    completeEarly() {
        if (!this.state.isRunning) return;
        this.handleComplete();
    }

    updateTopic(topicId: string, topicName: string) {
        this.state.topicId = topicId;
        this.state.topicName = topicName;
        this.saveState();
        this.callbacks.onStateChange?.(this.state);
    }

    // ... (rest of class)

    // Cleanup
    destroy() {
        this.worker?.terminate();
        this.releaseWakeLock();
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
