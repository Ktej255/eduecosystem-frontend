/**
 * Pomodoro Timer Web Worker
 * Runs in the background to track time even when the main thread is blocked
 * or the browser tab is inactive. This ensures the timer continues accurately.
 */

// Message types for worker communication
type WorkerMessage =
    | { type: 'START'; startTime: number; duration: number }
    | { type: 'PAUSE' }
    | { type: 'RESUME'; pausedTime: number }
    | { type: 'STOP' }
    | { type: 'GET_STATUS' };

type WorkerResponse =
    | { type: 'TICK'; remaining: number; elapsed: number }
    | { type: 'COMPLETE' }
    | { type: 'STATUS'; isRunning: boolean; remaining: number };

let intervalId: ReturnType<typeof setInterval> | null = null;
let startTime: number = 0;
let duration: number = 0;
let pausedAt: number | null = null;
let totalPausedDuration: number = 0;

function calculateRemaining(): number {
    if (pausedAt !== null) {
        // While paused, calculate from pause point
        const elapsed = pausedAt - startTime - totalPausedDuration;
        return Math.max(0, duration - elapsed);
    }
    const now = Date.now();
    const elapsed = now - startTime - totalPausedDuration;
    return Math.max(0, duration - elapsed);
}

function tick() {
    const remaining = calculateRemaining();
    const elapsed = duration - remaining;

    if (remaining <= 0) {
        // Timer complete
        self.postMessage({ type: 'COMPLETE' } as WorkerResponse);
        stopTimer();
    } else {
        self.postMessage({ type: 'TICK', remaining, elapsed } as WorkerResponse);
    }
}

function startTimer(initialStartTime: number, timerDuration: number) {
    stopTimer(); // Clear any existing timer
    startTime = initialStartTime;
    duration = timerDuration;
    pausedAt = null;
    totalPausedDuration = 0;

    // Tick immediately
    tick();

    // Tick every second
    intervalId = setInterval(tick, 1000);
}

function pauseTimer() {
    if (intervalId) {
        pausedAt = Date.now();
        clearInterval(intervalId);
        intervalId = null;
    }
}

function resumeTimer(pausedDuration: number) {
    if (pausedAt !== null) {
        totalPausedDuration += pausedDuration;
        pausedAt = null;
        tick();
        intervalId = setInterval(tick, 1000);
    }
}

function stopTimer() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    startTime = 0;
    duration = 0;
    pausedAt = null;
    totalPausedDuration = 0;
}

// Handle messages from main thread
self.onmessage = (event: MessageEvent<WorkerMessage>) => {
    const message = event.data;

    switch (message.type) {
        case 'START':
            startTimer(message.startTime, message.duration);
            break;
        case 'PAUSE':
            pauseTimer();
            break;
        case 'RESUME':
            resumeTimer(message.pausedTime);
            break;
        case 'STOP':
            stopTimer();
            break;
        case 'GET_STATUS':
            self.postMessage({
                type: 'STATUS',
                isRunning: intervalId !== null,
                remaining: calculateRemaining()
            } as WorkerResponse);
            break;
    }
};

export { }; // Make this a module
