"use client";

import PomodoroSessionView from "@/components/upsc/platform/pomodoro/PomodoroSessionView";
import PreSessionPlanner from "@/components/upsc/subjects/history/PreSessionPlanner";
import { useSearchParams } from 'next/navigation';
import { Suspense, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"; // Assuming available

// We need to fetch the schedule for the day to pass to PreSessionPlanner.
// Since PomodoroSessionView handles its own data fetching, we might need a way to 
// 1. Let PomodoroView load, but start in a "Planning" state?
// 2. Or wrap it here.
// Let's modify PomodoroSessionView to accept optional "plannedChapters" prop or handle the planning internal mode.
// Actually, PomodoroSessionView is complex. It's better to let IT handle the modal if possible, 
// OR pass a callback.
// BUT, the user asked for "Pre-Session Selection". 
// Let's actually put this logic INSIDE PomodoroSessionView because getting the daily schedule happens there.
// So I will revert changes here and edit PomodoroSessionView instead.

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
        <div className="min-h-screen bg-muted dark:bg-[#050505]">
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading Portal...</div>}>
                <PortalContent />
            </Suspense>
        </div>
    );
}
