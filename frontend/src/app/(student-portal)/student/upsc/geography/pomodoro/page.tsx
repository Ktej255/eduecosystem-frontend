"use client";

import { useSearchParams } from "next/navigation";
import PomodoroSessionView from "@/components/upsc/platform/pomodoro/PomodoroSessionView";
import { Suspense } from "react";
import { PomodoroSubjectId } from "@/components/upsc/platform/pomodoro/subject-schedule-configs";

function PomodoroContent() {
    const searchParams = useSearchParams();
    const dayId = parseInt(searchParams.get('day') || '1');
    const weekId = Math.ceil(dayId / 7) || 1; 

    return <PomodoroSessionView weekId={weekId} dayId={dayId} subjectOverride={"geography" as PomodoroSubjectId} showBackButton={true} />;
}

export default function GeographyPomodoroPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-indigo-600 font-bold">Loading Focus Session...</div>}>
            <PomodoroContent />
        </Suspense>
    );
}
