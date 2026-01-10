"use client";

import { use } from "react";
import PomodoroSessionView from "@/components/batch1-1/pomodoro/PomodoroSessionView";

interface PageProps {
    params: Promise<{
        weekId: string;
        dayId: string;
    }>;
}

export default function PomodoroPage({ params }: PageProps) {
    const resolvedParams = use(params);
    const weekId = parseInt(resolvedParams.weekId);
    const dayId = parseInt(resolvedParams.dayId);

    return <PomodoroSessionView weekId={weekId} dayId={dayId} />;
}
