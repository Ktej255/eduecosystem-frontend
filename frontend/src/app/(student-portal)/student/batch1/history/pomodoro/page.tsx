"use client";

import PomodoroSessionView from "@/components/batch1-1/pomodoro/PomodoroSessionView";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function HistoryPomodoroContent() {
    const searchParams = useSearchParams();
    const day = searchParams.get('day');
    const dayIdVal = day ? parseInt(day) : 1;
    const dayId = isNaN(dayIdVal) ? 1 : dayIdVal;
    const weekId = Math.floor((Math.max(1, dayId) - 1) / 7) + 1;
    const relativeDayId = ((Math.max(1, dayId) - 1) % 7) + 1;

    const subjectParam = searchParams.get('subject');
    const isHistory = ['modern', 'medieval', 'ancient', 'art_culture', 'history'].includes(subjectParam || '');
    const subjectOverride = isHistory ? 'history' : 'polity';

    return <PomodoroSessionView weekId={weekId} dayId={relativeDayId} subjectOverride={subjectOverride} />;
}

export default function HistoryPomodoroPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <HistoryPomodoroContent />
        </Suspense>
    );
}
