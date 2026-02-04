"use client";

import HistoryPomodoroPortal from "@/components/batch1/history/HistoryPomodoroPortal";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function PortalContent() {
    const searchParams = useSearchParams();
    const day = searchParams.get('day');
    const dayId = day ? parseInt(day) : 1;

    // Convert absolute day back to week/day for the component if needed, 
    // but the component I wrote handles absolute day as selectedDay.
    // However, the props are initialWeekId and initialDayId.
    // Let's adjust the component to accept dayId or just calculate here.
    const weekId = Math.floor((dayId - 1) / 7) + 1;
    const relativeDayId = ((dayId - 1) % 7) + 1;

    return <HistoryPomodoroPortal initialWeekId={weekId} initialDayId={relativeDayId} />;
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
