"use client";

import PomodoroSessionView from "@/components/upsc/platform/pomodoro/PomodoroSessionView";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function HistoryPomodoroContent() {
    const searchParams = useSearchParams();

    // Get parameters from URL
    const day = searchParams.get('day');
    const mode = searchParams.get('mode') || 'study';
    const section = searchParams.get('subject') || 'modern'; // modern, medieval, ancient, art_culture

    // Calculate linear day (1-15 for each section)
    const dayNumber = day ? parseInt(day) : 1;
    const safeDay = isNaN(dayNumber) || dayNumber < 1 ? 1 : dayNumber;

    // Convert linear day to week/day format for PomodoroSessionView
    const weekId = Math.floor((safeDay - 1) / 7) + 1;
    const relativeDayId = ((safeDay - 1) % 7) + 1;

    return (
        <PomodoroSessionView
            weekId={weekId}
            dayId={relativeDayId}
            subjectOverride="history"
            historySection={section}
            showBackButton={true}
        />
    );
}

export default function HistoryPomodoroPage() {
    return (
        <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
                Loading History Session...
            </div>
        }>
            <HistoryPomodoroContent />
        </Suspense>
    );
}
