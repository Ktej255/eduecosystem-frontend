"use client";

/**
 * Behavioral Intelligence Tracker
 * 
 * Monitors user interaction patterns to identify "Fight or Flight" signals.
 * - Flight: Rapid scrolling, quick exits, skipping content.
 * - Fight (Frustration): Rapid clicking, erratic mouse movements.
 * - Freeze (Confusion): Long dwell time without interaction.
 */

interface BehavioralMetrics {
    scrollVelocity: number;
    clickFrequency: number;
    dwellTime: number; // current page dwell in seconds
    isStruggling: boolean;
    lastSignal: 'frustrated' | 'confused' | 'disengaged' | 'focused';
}

class BehavioralTracker {
    private metrics: BehavioralMetrics = {
        scrollVelocity: 0,
        clickFrequency: 0,
        dwellTime: 0,
        isStruggling: false,
        lastSignal: 'focused'
    };

    private clickCount = 0;
    private lastClickTime = 0;
    private lastScrollPos = 0;
    private lastScrollTime = 0;
    private startTime = Date.now();
    private subscribers: ((metrics: BehavioralMetrics) => void)[] = [];

    constructor() {
        if (typeof window === 'undefined') return;

        window.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('click', this.handleClick.bind(this));

        // Background loop for dwell and periodic analysis
        setInterval(this.analyze.bind(this), 2000);
    }

    private handleScroll() {
        const now = Date.now();
        const currentPos = window.scrollY;
        const dt = (now - this.lastScrollTime) / 1000;

        if (dt > 0) {
            const velocity = Math.abs(currentPos - this.lastScrollPos) / dt;
            this.metrics.scrollVelocity = velocity;
        }

        this.lastScrollPos = currentPos;
        this.lastScrollTime = now;
    }

    private handleClick() {
        const now = Date.now();
        if (now - this.lastClickTime < 500) {
            this.clickCount++;
        } else {
            this.clickCount = 1;
        }

        this.metrics.clickFrequency = this.clickCount;
        this.lastClickTime = now;
    }

    private lastSyncedSignal: BehavioralMetrics['lastSignal'] = 'focused';

    private async syncEvent(metrics: BehavioralMetrics) {
        if (metrics.lastSignal === this.lastSyncedSignal) return;
        if (metrics.lastSignal === 'focused') return;

        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';
            const token = localStorage.getItem('edueco_auth_token');
            if (!token) return;

            await fetch(`${baseUrl}/analytics/events`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    event_type: 'struggle_signal',
                    event_data: {
                        signal: metrics.lastSignal,
                        scrollVelocity: metrics.scrollVelocity,
                        clickFrequency: metrics.clickFrequency,
                        dwellTime: metrics.dwellTime,
                        path: window.location.pathname
                    }
                })
            });
            this.lastSyncedSignal = metrics.lastSignal;
            console.log(`🧠 Behavioral signal synced: ${metrics.lastSignal}`);
        } catch (e) {
            console.warn('Failed to sync behavioral event:', e);
        }
    }

    private analyze() {
        this.metrics.dwellTime = (Date.now() - this.startTime) / 1000;

        let signal: BehavioralMetrics['lastSignal'] = 'focused';
        let struggling = false;

        // Logic for Frustration (Rapid Clicks)
        if (this.clickCount > 5) {
            signal = 'frustrated';
            struggling = true;
        }
        // Logic for Disengagement (Rapid Scrolling)
        else if (this.metrics.scrollVelocity > 5000) {
            signal = 'disengaged';
            struggling = true;
        }
        // Logic for Confusion (High dwell with zero interaction)
        else if (this.metrics.dwellTime > 300 && this.metrics.scrollVelocity === 0 && this.clickCount === 0) {
            signal = 'confused';
            struggling = true;
        }

        this.metrics.lastSignal = signal;
        this.metrics.isStruggling = struggling;

        if (struggling) {
            this.syncEvent(this.metrics);
        }

        this.notify();
    }

    public subscribe(callback: (metrics: BehavioralMetrics) => void) {
        this.subscribers.push(callback);
        return () => {
            this.subscribers = this.subscribers.filter(s => s !== callback);
        };
    }

    private notify() {
        this.subscribers.forEach(s => s(this.metrics));
    }

    public getMetrics() {
        return { ...this.metrics };
    }
}

export const behavioralTracker = typeof window !== 'undefined' ? new BehavioralTracker() : null;
