"use client";

import React, { useState, useEffect } from "react";
import {
    Sun, PenTool, Timer, BookOpen, Moon,
    CheckCircle2, Lock, Play, ArrowRight,
    LayoutDashboard, CalendarRange
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TimelineNodeProps {
    id: string;
    title: string;
    description: string;
    time: string;
    icon: React.ReactNode;
    status: 'locked' | 'active' | 'completed';
    onClick: () => void;
    isLast?: boolean;
}

const TimelineNode = ({ title, description, time, icon, status, onClick, isLast }: TimelineNodeProps) => {
    return (
        <div className="relative flex gap-6 group">
            {!isLast && (
                <div className={cn(
                    "absolute left-[24px] top-[60px] w-0.5 h-[calc(100%-20px)]",
                    status === 'completed' ? "bg-green-500" : "bg-gray-200 dark:bg-gray-800"
                )} />
            )}

            <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center shrink-0 z-10 transition-all duration-300",
                status === 'completed' ? "bg-green-100 text-green-600 border-2 border-green-500" :
                    status === 'active' ? "bg-blue-100 text-blue-600 border-2 border-blue-500 shadow-lg shadow-blue-200" :
                        "bg-gray-100 text-gray-400 border-2 border-gray-200"
            )}>
                {status === 'completed' ? <CheckCircle2 className="w-6 h-6" /> : icon}
            </div>

            <div
                onClick={status !== 'locked' ? onClick : undefined}
                className={cn(
                    "flex-1 mb-8 cursor-pointer transition-all duration-300 transform",
                    status !== 'locked' && "hover:scale-[1.01]",
                    status === 'locked' && "opacity-60 pointer-events-none"
                )}
            >
                <Card className={cn(
                    "border-l-4",
                    status === 'active' ? "border-l-blue-500 shadow-md ring-1 ring-blue-100" :
                        status === 'completed' ? "border-l-green-500" :
                            "border-l-gray-300"
                )}>
                    <CardContent className="p-4 flex justify-between items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                                    {time}
                                </span>
                                {status === 'active' && (
                                    <span className="flex h-2 w-2 relative">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                    </span>
                                )}
                            </div>
                            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
                        </div>
                        <div className="text-gray-400">
                            {status === 'locked' ? <Lock className="w-5 h-5" /> :
                                status === 'completed' ? <Button variant="ghost" size="sm" className="text-green-600">Review</Button> :
                                    <Button size="sm" className="gap-2">Start <ArrowRight className="w-4 h-4" /></Button>}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default function DailyTimeline({ onSelectStep }: { onSelectStep: (step: string) => void }) {
    const [activeStep] = useState('morning'); // Could be derived from time or progress

    const steps = [
        {
            id: 'morning',
            title: 'Morning Rituals',
            description: 'Meditation & Mindful Start',
            time: '06:00 - 07:00 AM',
            icon: <Sun className="w-6 h-6" />,
            status: 'active' as const
        },
        {
            id: 'graphotherapy',
            title: 'Graphotherapy',
            description: 'Handwriting Practice',
            time: '07:00 - 08:00 AM',
            icon: <PenTool className="w-6 h-6" />,
            status: 'locked' as const
        },
        {
            id: 'pomodoro',
            title: 'Immersive Study',
            description: '6-Hour Deep Work Session',
            time: '08:00 AM - 02:00 PM',
            icon: <Timer className="w-6 h-6" />,
            status: 'locked' as const
        },
        {
            id: 'evening',
            title: 'Revise & Practice',
            description: 'Flashcards, MCQs & CSAT',
            time: 'Evening',
            icon: <BookOpen className="w-6 h-6" />,
            status: 'locked' as const
        },
        {
            id: 'night',
            title: 'Night Class',
            description: 'Live Session & Journaling',
            time: '09:00 - 10:00 PM',
            icon: <Moon className="w-6 h-6" />,
            status: 'locked' as const
        }
    ];

    return (
        <div className="max-w-3xl mx-auto py-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold">Today's Journey</h2>
                    <p className="text-gray-500">Follow the path to complete your daily goals.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" className="gap-2">
                        <LayoutDashboard className="w-4 h-4" /> Dashboard
                    </Button>
                    <Button variant="outline" className="gap-2">
                        <CalendarRange className="w-4 h-4" /> Weekly Plan
                    </Button>
                </div>
            </div>

            <div className="relative">
                {steps.map((step, index) => (
                    <TimelineNode
                        key={step.id}
                        {...step}
                        onClick={() => onSelectStep(step.id)}
                        isLast={index === steps.length - 1}
                    />
                ))}
            </div>
        </div>
    );
}
