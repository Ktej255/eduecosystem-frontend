"use client";

import { use } from "react";
import EveningSessionDayView from "@/components/batch1/EveningSessionDayView";

interface PageProps {
    params: Promise<{
        weekId: string;
        dayId: string;
    }>;
}

export default function EveningSessionPage({ params }: PageProps) {
    const resolvedParams = use(params);
    const weekId = parseInt(resolvedParams.weekId);
    const dayId = parseInt(resolvedParams.dayId);

    // Reuse the existing EveningSessionDayView from Batch 1
    // Map week/day to cycle/day format expected by the component
    // Week 1 Day 1 = Cycle 1 Day 1, etc.
    const cycleId = 1; // For now, use Cycle 1 structure
    const mappedDay = (weekId - 1) * 5 + dayId; // Map to continuous day number

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Evening Session - Week {weekId}, Day {dayId}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                    Flashcards • MCQs • CSAT Practice
                </p>
            </div>
            <EveningSessionDayView cycleId={cycleId} day={mappedDay} />
        </div>
    );
}
