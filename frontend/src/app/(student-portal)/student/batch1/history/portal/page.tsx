"use client";

import PomodoroSessionView from "@/components/batch1-1/pomodoro/PomodoroSessionView";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function PortalContent() {
    const searchParams = useSearchParams();
    const day = searchParams.get('day');
    const dayId = day ? parseInt(day) : 1;
    const weekId = Math.floor((dayId - 1) / 7) + 1;
    const relativeDayId = ((dayId - 1) % 7) + 1;

    return <PomodoroSessionView weekId={weekId} dayId={relativeDayId} />;
}

export default function HistoryPortalPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#050505]">
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading Portal...</div>}>
                <PortalContent />
            </Suspense>
        </div>
    );
}
