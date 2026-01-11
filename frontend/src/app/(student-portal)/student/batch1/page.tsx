"use client";

import React, { useState } from "react";
import DailyTimeline from "@/components/batch1/workflow/DailyTimeline";
import MorningMeditation from "@/components/batch1/workflow/MorningMeditation";
import GraphotherapySession from "@/components/batch1/workflow/GraphotherapySession";
import ImmersivePomodoro from "@/components/batch1/workflow/ImmersivePomodoro";
import { useRouter } from "next/navigation";

type WorkflowStep = 'timeline' | 'morning' | 'graphotherapy' | 'pomodoro';

export default function Batch1Page() {
    const router = useRouter();
    const [currentView, setCurrentView] = useState<WorkflowStep>('timeline');

    const handleStepSelect = (stepId: string) => {
        switch (stepId) {
            case 'morning':
                setCurrentView('morning');
                break;
            case 'graphotherapy':
                setCurrentView('graphotherapy');
                break;
            case 'pomodoro':
                setCurrentView('pomodoro');
                break;
            case 'evening':
                // Redirect to specialized evening revision blocks
                // For now, let's assume we have a way to toggle or just scroll there
                // But per requirements: "redirect to evening section"
                // Ideally this could be a query param or anchor, but simpler is just a dedicated page section or toggle
                // Since this page might be the ALL-IN-ONE dashboard, we might show the evening cards here in the future.
                // For now, let's keep it simple.
                alert("Evening Section: This would engage Flashcards/MCQs components.");
                break;
            case 'night':
                // Live class logic
                alert("Night Class: Redirecting to Live Class Link if time is 9:00 PM.");
                break;
            default:
                break;
        }
    };

    const handleBackToTimeline = () => {
        setCurrentView('timeline');
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {currentView === 'timeline' && (
                <div className="p-4 md:p-8">
                    <DailyTimeline onSelectStep={handleStepSelect} />
                </div>
            )}

            {currentView === 'morning' && (
                <MorningMeditation
                    onComplete={handleBackToTimeline}
                    onBack={handleBackToTimeline}
                />
            )}

            {currentView === 'graphotherapy' && (
                <GraphotherapySession
                    onComplete={handleBackToTimeline}
                    onBack={handleBackToTimeline}
                />
            )}

            {currentView === 'pomodoro' && (
                <ImmersivePomodoro
                    onComplete={handleBackToTimeline}
                    onBack={handleBackToTimeline}
                />
            )}
        </div>
    );
}
