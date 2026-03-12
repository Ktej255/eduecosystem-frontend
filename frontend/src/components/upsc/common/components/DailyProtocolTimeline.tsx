"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'lucide-react'; // Import icon only, we use next/link for actual linking
import NextLink from "next/link"; // Renamed to avoid key collision with lucide icon if needed, though here we use it as wrap
import {
    Calendar, Clock, ChevronRight, Play, Target, Brain, CheckCircle2,
    Flame, Trophy, BarChart3, Timer, BookOpen, Smile, Sun, PenTool, Moon
} from "lucide-react";

interface DailyProtocolTimelineProps {
    weekId: number;
    dayId: number;
    onPhaseAction?: (phaseId: number, link: string) => void; // Optional override for actions
}

export default function DailyProtocolTimeline({ weekId, dayId, onPhaseAction }: DailyProtocolTimelineProps) {
    const isSaturday = dayId === 6;

    // Timeline Configuration
    const phases = [
        {
            id: 1,
            title: "Morning Meditation",
            subtitle: "Phase 1: Priming",
            time: "40 min",
            desc: "Start your day with clarity and focus.",
            icon: <Sun className="h-6 w-6 text-orange-600" />,
            color: "orange",
            bg: "bg-orange-100",
            border: "border-orange-200",
            action: { label: "Start Now", link: `/student/upsc/${weekId}/${dayId}/pomodoro` },
            linkText: "Watch Recording"
        },
        {
            id: 2,
            title: "Graphotherapy",
            subtitle: "Phase 2: Activation",
            time: "30 min",
            desc: "Rewire your subconscious with writing exercises.",
            icon: <PenTool className="h-6 w-6 text-pink-600" />,
            color: "pink",
            bg: "bg-pink-100",
            border: "border-pink-200",
            action: { label: "Start Now", link: `/student/upsc/${weekId}/${dayId}/pomodoro` },
            linkText: `Level 2 • Day ${weekId * 7 + dayId - 7}`
        },
        {
            id: 3,
            title: isSaturday ? "Weekly Test" : "Core Study",
            subtitle: "Phase 3: Core",
            time: "180 min",
            desc: isSaturday ? "Full assessment of this week's learning." : "Deep work session on planned topics.",
            icon: <BookOpen className="h-6 w-6 text-muted-foreground" />,
            color: "slate",
            bg: "bg-muted",
            border: "border-border",
            action: isSaturday
                ? { label: "Start Test", link: `/student/upsc/${weekId}/saturday-test` }
                : { label: "Start Session", link: `/student/upsc/${weekId}/${dayId}/pomodoro` },
            linkText: isSaturday ? `Week ${weekId} Assessment` : "Main Study Block"
        },
        {
            id: 4,
            title: "Evening Revision",
            subtitle: "Phase 4: Evening",
            time: "180 min",
            desc: "Consolidate learning with active recall and practice.",
            icon: <Brain className="h-6 w-6 text-green-600" />,
            color: "emerald",
            bg: "bg-emerald-100",
            border: "border-emerald-200",
            action: { label: "Start Now", link: `/student/upsc/${weekId}/${dayId}/evening` },
            linkText: "Flashcards + MCQs + CSAT"
        },
        {
            id: 5,
            title: "Night Class",
            subtitle: "Phase 5: Night",
            time: "60 min",
            desc: "End your day with reflection and new learning.",
            icon: <Moon className="h-6 w-6 text-indigo-600" />,
            color: "indigo",
            bg: "bg-indigo-100",
            border: "border-indigo-200",
            action: { label: "Start Now", link: "#" },
            linkText: "Watch Recording"
        }
    ];

    return (
        <div className="relative space-y-8 md:space-y-12 pl-4 md:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-[27px] md:left-[50px] top-8 bottom-8 w-0.5 bg-indigo-100 -z-10" />

            {phases.map((phase) => (
                <div key={phase.id} className="relative flex flex-col md:flex-row gap-6 md:gap-8 group">

                    {/* Number/Icon Indicator */}
                    <div className="absolute left-0 md:relative md:left-auto flex-shrink-0 z-10 bg-card py-2">
                        <div className={`w-14 h-14 rounded-full border-[3px] flex items-center justify-center text-xl font-bold shadow-sm transition-transform group-hover:scale-110 
                            ${phase.id === 3 ? 'animate-pulse' : ''} 
                            border-${phase.color}-200 text-${phase.color}-400 bg-card`}>
                            {phase.id}
                        </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 ml-16 md:ml-0">
                        <Card className="border-0 shadow-lg shadow-indigo-100/40 dark:shadow-none ring-1 ring-slate-100 dark:ring-slate-800 hover:ring-indigo-200 transition-all overflow-hidden">
                            <CardContent className="p-0 flex flex-col md:flex-row">

                                {/* Icon Box */}
                                <div className={`p-6 flex flex-col items-center justify-center gap-3 min-w-[120px] 
                                    bg-gradient-to-br from-${phase.color}-50 to-white dark:from-gray-800 dark:to-gray-900`}>
                                    <div className={`w-12 h-12 rounded-xl ${phase.bg} flex items-center justify-center shadow-inner`}>
                                        {phase.icon}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 p-5 md:p-6 flex flex-col justify-center">
                                    <div className="flex flex-wrap items-center gap-3 mb-2">
                                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-${phase.color}-100 text-${phase.color}-700`}>
                                            {phase.subtitle}
                                        </span>
                                        <span className="flex items-center text-xs text-muted-foreground font-medium">
                                            <Clock className="w-3 h-3 mr-1" /> {phase.time}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-1">
                                        {phase.title}
                                    </h3>

                                    <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                                        {phase.linkText}
                                    </div>

                                    <p className="text-muted-foreground dark:text-muted-foreground text-sm mb-4 leading-relaxed">
                                        {phase.desc}
                                    </p>

                                    <div className="mt-auto">
                                        {phase.action.link !== "#" ? (
                                            onPhaseAction ? (
                                                <Button
                                                    onClick={() => onPhaseAction(phase.id, phase.action.link)}
                                                    className={`w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200 dark:shadow-none`}
                                                >
                                                    {phase.action.label} <ChevronRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            ) : (
                                                <NextLink href={phase.action.link}>
                                                    <Button className={`w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200 dark:shadow-none`}>
                                                        {phase.action.label} <ChevronRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </NextLink>
                                            )
                                        ) : (
                                            <Button disabled className="w-full md:w-auto opacity-80">
                                                Coming Soon
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ))}
        </div>
    );
}
