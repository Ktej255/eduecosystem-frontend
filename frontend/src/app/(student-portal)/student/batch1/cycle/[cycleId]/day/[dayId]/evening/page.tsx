"use client";

import { useParams, useRouter } from "next/navigation";
import EveningSessionDayView from "@/components/batch1/EveningSessionDayView";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function EveningSessionPage() {
    const params = useParams();
    const router = useRouter();
    const cycleId = parseInt(params.cycleId as string);
    const dayId = parseInt(params.dayId as string);

    return (
        <div className="space-y-6 max-w-6xl mx-auto p-4 md:p-6">
            <div className="flex items-center justify-between">
                <Button variant="ghost" onClick={() => router.back()} className="text-gray-700 dark:text-gray-300">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Day {dayId}
                </Button>
                <div className="text-sm text-gray-500">
                    Cycle {cycleId} • Day {dayId} • Evening Session
                </div>
            </div>

            <EveningSessionDayView cycleId={cycleId} day={dayId} />
        </div>
    );
}
