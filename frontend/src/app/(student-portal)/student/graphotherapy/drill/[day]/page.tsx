"use client";

import DailyDrillMode from '@/components/graphotherapy/DailyDrillMode';
import { graphotherapyService, DayDetailResponse } from '@/services/graphotherapyService';
import { notFound } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function DrillPage({ params }: { params: Promise<{ day: string }> }) {
    const resolvedParams = use(params);
    const day = parseInt(resolvedParams.day, 10);
    
    const [loading, setLoading] = useState(true);
    const [drillData, setDrillData] = useState<DayDetailResponse | null>(null);

    useEffect(() => {
        async function fetchDrill() {
            try {
                // Fetch overview to get the current level
                const overview = await graphotherapyService.getOverview();
                const level = overview.current_level;
                
                // Fetch details for the correct level and day
                const data = await graphotherapyService.getDayDetail(level, day);
                setDrillData(data);
            } catch (error) {
                console.error("Failed to fetch drill:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchDrill();
    }, [day]);

    if (loading) {
        return (
            <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center text-white">
                <Loader2 className="w-10 h-10 animate-spin text-blue-500 mb-4" />
                <p className="text-neutral-400 animate-pulse font-medium">Loading your drill...</p>
            </div>
        );
    }

    if (!drillData) {
        notFound();
    }

    // Map backend response to what DailyDrillMode expects
    const drill = {
        day: drillData.day_number,
        title: drillData.exercise || `Day ${drillData.day_number} Drill`,
        focus: drillData.focus_area || "Handwriting Practice",
        trait: drillData.focus_area || "",
        instruction: drillData.instructions || "",
        sampleText: [
            drillData.exercise || "Practice your daily strokes.",
            "Consistency is the key to transformation.",
            "Focus on every stroke and curve."
        ],
        durationMinutes: 15,
        tips: [
            drillData.why_it_works || "Trust the process.",
            drillData.expected_result || "You will see improvement soon."
        ],
        // Additional fields requested by user
        why_it_works: drillData.why_it_works,
        expected_result: drillData.expected_result,
        level: drillData.level
    };

    return <DailyDrillMode drill={drill as any} />;
}
