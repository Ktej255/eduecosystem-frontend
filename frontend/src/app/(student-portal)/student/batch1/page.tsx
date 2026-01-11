"use client";

import React, { useState } from "react";
import DailyTimeline from "@/components/batch1/workflow/DailyTimeline";
import MorningMeditation from "@/components/batch1/workflow/MorningMeditation";
import GraphotherapySession from "@/components/batch1/workflow/GraphotherapySession";
import ImmersivePomodoro from "@/components/batch1/workflow/ImmersivePomodoro";
import EveningSection from "@/components/batch1/workflow/EveningSection";
import NightClass from "@/components/batch1/workflow/NightClass";
import WeeklyPlan from "@/components/batch1/workflow/WeeklyPlan";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

import Batch1ContentMap from "@/components/batch1/polity/Batch1ContentMap";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type WorkflowStep = 'timeline' | 'plan' | 'map' | 'morning' | 'graphotherapy' | 'pomodoro' | 'evening' | 'night';

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
                setCurrentView('evening');
                break;
            case 'night':
                setCurrentView('night');
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
                    <DailyTimeline
                        onSelectStep={handleStepSelect}
                        onOpenPlan={() => setCurrentView('plan')}
                        onOpenMap={() => setCurrentView('map')}
                    />
                </div>
            )}

            {currentView === 'plan' && (
                <div className="p-4 md:p-8">
                    <WeeklyPlan onBack={handleBackToTimeline} />
                </div>
            )}

            {currentView === 'map' && (
                <div className="p-4 md:p-8">
                    <Button variant="ghost" onClick={handleBackToTimeline} className="mb-4">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Timeline
                    </Button>
                    <Batch1ContentMap />
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

            {currentView === 'evening' && (
                <EveningSection
                    onBack={handleBackToTimeline}
                />
            )}

            {currentView === 'night' && (
                <NightClass
                    onComplete={handleBackToTimeline}
                    onBack={handleBackToTimeline}
                />
            )}
        </div>
    );
}
