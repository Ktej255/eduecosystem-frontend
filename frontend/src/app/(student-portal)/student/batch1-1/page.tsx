"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    Calendar, Clock, ChevronRight, Play, Target, Brain, CheckCircle2,
    Flame, Trophy, BarChart3, Timer, BookOpen, Smile, Sun, PenTool, Moon
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

// Week configuration
const WEEKS = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Week ${i + 1}`,
    startDate: new Date(2026, 0, 12 + (i * 7)), // Starting Jan 12, 2026 (Monday)
}));

// Days of the week (Mon-Sat)
const WEEKDAYS = [
    { id: 1, name: "Monday", short: "Mon", isSaturday: false },
    { id: 2, name: "Tuesday", short: "Tue", isSaturday: false },
    { id: 3, name: "Wednesday", short: "Wed", isSaturday: false },
    { id: 4, name: "Thursday", short: "Thu", isSaturday: false },
    { id: 5, name: "Friday", short: "Fri", isSaturday: false },
    { id: 6, name: "Saturday", short: "Sat", isSaturday: true },
];

import { MoodTrackerModal } from "@/components/batch1-1/productivity/MoodTrackerModal";

export default function Batch11Page() {
    const router = useRouter();
    const [selectedWeek, setSelectedWeek] = useState(1);
    const [selectedDay, setSelectedDay] = useState(1); // 1 = Monday, 6 = Saturday
    const [showMoodModal, setShowMoodModal] = useState(false);

    // Load saved state
    useEffect(() => {
        const savedWeek = localStorage.getItem('batch11_selected_week');
        if (savedWeek) setSelectedWeek(Number(savedWeek));

        // set selected day to today if within range, else 1
        const today = new Date().getDay(); // 0=Sun, 1=Mon...
        if (today >= 1 && today <= 6) {
            setSelectedDay(today);
        }
    }, []);

    // Save week selection
    useEffect(() => {
        localStorage.setItem('batch11_selected_week', selectedWeek.toString());
    }, [selectedWeek]);

    const isSaturday = selectedDay === 6;

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
            action: { label: "Start Now", link: `/student/batch1-1/${selectedWeek}/${selectedDay}/pomodoro` },
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
            action: { label: "Start Now", link: `/student/batch1-1/${selectedWeek}/${selectedDay}/pomodoro` },
            linkText: `Level 2 • Day ${selectedWeek * 7 + selectedDay - 7}`
        },
        {
            id: 3,
            title: isSaturday ? "Weekly Test" : "Core Study",
            subtitle: "Phase 3: Core",
            time: "180 min",
            desc: isSaturday ? "Full assessment of this week's learning." : "Deep work session on planned topics.",
            icon: <BookOpen className="h-6 w-6 text-slate-600" />,
            color: "slate",
            bg: "bg-slate-100",
            border: "border-slate-200",
            action: isSaturday
                ? { label: "Start Test", link: `/student/batch1-1/${selectedWeek}/saturday-test` }
                : { label: "Start Session", link: `/student/batch1-1/${selectedWeek}/${selectedDay}/pomodoro` },
            linkText: isSaturday ? `Week ${selectedWeek} Assessment` : "Main Study Block"
        },
        {
            id: 4,
            title: "Evening Revision",
            subtitle: "Phase 4: Evening",
            time: "180 min",
            desc: "Consolidate learning with active recall and practice.",
            icon: <Brain className="h-6 w-6 text-green-600" />,
            color: "emerald", // 'green' can be too bright, emerald is nicer
            bg: "bg-emerald-100",
            border: "border-emerald-200",
            action: { label: "Start Now", link: `/student/batch1-1/${selectedWeek}/${selectedDay}/evening` },
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
            action: { label: "Start Now", link: "#" }, // Placeholder
            linkText: "Watch Recording"
        }
    ];

    return (
        <div className="space-y-6 max-w-4xl mx-auto p-4 md:p-6 pb-24">
            <MoodTrackerModal isOpen={showMoodModal} onClose={() => setShowMoodModal(false)} />

            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                        RAS Revision Portal
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Daily Protocol & Progress Tracking
                    </p>
                </div>

                {/* Week & Mood Controls */}
                <div className="flex items-center gap-3">
                    <select
                        value={selectedWeek}
                        onChange={(e) => setSelectedWeek(Number(e.target.value))}
                        className="px-4 py-2 rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-700 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none"
                    >
                        {WEEKS.map(week => (
                            <option key={week.id} value={week.id}>Week {week.id}</option>
                        ))}
                    </select>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-full"
                        onClick={() => setShowMoodModal(true)}
                    >
                        <Smile className="h-5 w-5" />
                    </Button>
                    <Link href="/student/upsc">
                        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full" title="Resource Library">
                            <BookOpen className="h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href="/student/batch1-1/deep-report">
                        <Button variant="ghost" size="icon" className="text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-full">
                            <BarChart3 className="h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Day Selector */}
            <div className="bg-white dark:bg-gray-800 p-1.5 rounded-xl border shadow-sm flex items-center justify-between gap-2 overflow-x-auto mb-8">
                {WEEKDAYS.map((day) => (
                    <button
                        key={day.id}
                        onClick={() => setSelectedDay(day.id)}
                        className={`flex-1 min-w-[60px] py-2 px-3 rounded-lg text-sm transition-all flex flex-col items-center gap-1
                            ${selectedDay === day.id
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700'
                            }`}
                    >
                        <span className="font-semibold">{day.short}</span>
                    </button>
                ))}
            </div>

            {/* Vertical Timeline */}
            <div className="relative space-y-8 md:space-y-12 pl-4 md:pl-0">
                {/* Vertical Line */}
                <div className="absolute left-[27px] md:left-[50px] top-8 bottom-8 w-0.5 bg-indigo-100 dark:bg-gray-800 -z-10" />

                {phases.map((phase, index) => (
                    <div key={phase.id} className="relative flex flex-col md:flex-row gap-6 md:gap-8 group">

                        {/* Number/Icon Indicator */}
                        <div className="absolute left-0 md:relative md:left-auto flex-shrink-0 z-10 bg-white dark:bg-gray-900 py-2">
                            <div className={`w-14 h-14 rounded-full border-[3px] flex items-center justify-center text-xl font-bold shadow-sm transition-transform group-hover:scale-110 
                                ${phase.id === 4  // Example logic: highlighting current phase could go here
                                    ? `border-${phase.color}-500 text-${phase.color}-600 bg-${phase.color}-50`
                                    : `border-indigo-200 text-indigo-400 bg-white dark:bg-gray-800`
                                }`}>
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
                                            <span className="flex items-center text-xs text-gray-400 font-medium">
                                                <Clock className="w-3 h-3 mr-1" /> {phase.time}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                                            {phase.title}
                                        </h3>

                                        <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                                            {phase.linkText}
                                        </div>

                                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                                            {phase.desc}
                                        </p>

                                        <div className="mt-auto">
                                            {phase.action.link !== "#" ? (
                                                <Link href={phase.action.link}>
                                                    <Button className={`w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200 dark:shadow-none`}>
                                                        {phase.action.label} <ChevronRight className="ml-2 h-4 w-4" />
                                                    </Button>
                                                </Link>
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

        </div>
    );
}



