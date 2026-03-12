"use client";

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the session view to avoid SSR issues
const PomodoroSessionView = dynamic(
    () => import('@/components/upsc/platform/pomodoro/PomodoroSessionView'),
    {
        ssr: false,
        loading: () => <div className="flex items-center justify-center min-h-screen text-white">Loading Pomodoro...</div>
    }
);

export default function EmergencyHistoryPage() {
    // HARDCODED safe values - bypasses all URL parsing and schedule logic
    const weekId = 1;
    const dayId = 1;
    const subjectOverride = 'history' as const;

    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-white">Loading...</div>}>
            <PomodoroSessionView
                weekId={weekId}
                dayId={dayId}
                subjectOverride={subjectOverride}
                showBackButton={true}

            />
        </Suspense>
    );
}
