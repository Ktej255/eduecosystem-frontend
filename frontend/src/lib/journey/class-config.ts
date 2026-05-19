import { MEET_CONFIG } from '@/config/meet-config';

/**
 * Class Configuration for Diksha & Kajal's Daily Workflow
 * 
 * This file contains timing and URL configurations for live/recorded sessions.
 * Update the links as needed.
 */

export const CLASS_CONFIG = {
    morning: {
        liveStart: { hour: 5, minute: 50 },
        liveEnd: { hour: 6, minute: 30 },
        meetLink: MEET_CONFIG.MORNING_SESSION_LINK,
        // YouTube embed with all controls hidden: autoplay, no controls, no annotations, no logo, fullscreen
        recordedVideo: 'https://www.youtube.com/embed/-kv1TaiCf14?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1&loop=1&playlist=-kv1TaiCf14',
        title: 'Morning Meditation',
        description: 'Start your day with guided meditation and clarity.',
    },
    night: {
        liveStart: { hour: 21, minute: 0 },  // 9 PM
        liveEnd: { hour: 22, minute: 0 },    // 10 PM
        meetLink: MEET_CONFIG.NIGHT_CLASS_LINK,
        // YouTube embed with all controls hidden
        recordedVideo: 'https://www.youtube.com/embed/hzNKZN4YQXs?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&fs=0&disablekb=1&loop=1&playlist=hzNKZN4YQXs',
        title: 'Night Class',
        description: 'End your day with reflection and learning.',
    },
    graphotherapy: {
        currentLevel: 2, // Level 2 = 2 pages per day
        currentDay: 9,   // Current day in graphotherapy journey
        timerMinutes: 3, // Timer per page
    },
    pomodoro: {
        endTime: { hour: 14, minute: 0 }, // 2 PM
        redirectUrl: '/student/batch1-1',
    },
    evening: {
        startTime: { hour: 17, minute: 0 }, // 5 PM
    }
};

/**
 * Check if current time is within a live window
 */
export function isWithinLiveWindow(config: { liveStart: { hour: number; minute: number }; liveEnd: { hour: number; minute: number } }): boolean {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    const startMinutes = config.liveStart.hour * 60 + config.liveStart.minute;
    const endMinutes = config.liveEnd.hour * 60 + config.liveEnd.minute;
    const currentMinutes = hour * 60 + minute;

    return currentMinutes >= startMinutes && currentMinutes <= endMinutes;
}

/**
 * Check if it's evening time (after 5 PM)
 */
export function isEveningTime(): boolean {
    const now = new Date();
    const hour = now.getHours();
    return hour >= CLASS_CONFIG.evening.startTime.hour;
}

/**
 * Get formatted time window string
 */
export function formatTimeWindow(config: { liveStart: { hour: number; minute: number }; liveEnd: { hour: number; minute: number } }): string {
    const formatTime = (h: number, m: number) => {
        const ampm = h >= 12 ? 'PM' : 'AM';
        const hour12 = h % 12 || 12;
        return `${hour12}:${m.toString().padStart(2, '0')} ${ampm}`;
    };
    return `${formatTime(config.liveStart.hour, config.liveStart.minute)} - ${formatTime(config.liveEnd.hour, config.liveEnd.minute)}`;
}
