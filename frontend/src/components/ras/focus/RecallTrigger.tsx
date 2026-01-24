
"use client";

import React from 'react';
import { AlertTriangle, Brain, FileText } from 'lucide-react';

interface RecallTriggerProps {
    dayNumber: number;
}

export default function RecallTrigger({ dayNumber }: RecallTriggerProps) {
    // Logic: Trigger every 3rd day (Day 3, 6, 9...)
    const isRecallDay = dayNumber % 3 === 0;

    if (!isRecallDay) return null;

    // Calculate which topic to recall (based on 3 days ago)
    const recallDayOffset = dayNumber - 3;
    const recallTopic = recallDayOffset > 0 ? `Topics from Day ${recallDayOffset}` : "Previous Topics";

    return (
        <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6 mb-8 animate-pulse-slow">
            <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/10 rounded-lg text-red-500">
                    <Brain className="w-8 h-8" />
                </div>
                <div>
                    <h3 className="text-red-500 font-bold text-lg flex items-center gap-2 mb-1">
                        <AlertTriangle className="w-5 h-5" />
                        Anti-Gravity Protocol Active
                    </h3>
                    <p className="text-neutral-300 text-sm mb-4 max-w-lg">
                        It's Day {dayNumber}. The "Forgetting Curve" is peaking for <strong>{recallTopic}</strong>.
                        You must perform a Blank Sheet Test before starting new topics.
                    </p>

                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all">
                        <FileText className="w-4 h-4" /> Start Blank Sheet Test
                    </button>
                </div>
            </div>
        </div>
    );
}
