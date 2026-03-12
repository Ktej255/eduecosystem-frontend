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

import { MoodTrackerModal } from "@/components/upsc/platform/productivity/MoodTrackerModal";
import DailyProtocolTimeline from "@/components/upsc/common/components/DailyProtocolTimeline";

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
            icon: <BookOpen className="h-6 w-6 text-muted-foreground" />,
            color: "slate",
            bg: "bg-muted",
            border: "border-border",
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
                    <h1 className="text-2xl font-bold text-foreground">
                        RAS Revision Portal
                    </h1>
                    <p className="text-muted-foreground dark:text-muted-foreground text-sm">
                        Daily Protocol & Progress Tracking
                    </p>
                </div>

                {/* Week & Mood Controls */}
                <div className="flex items-center gap-3">
                    <select
                        value={selectedWeek}
                        onChange={(e) => setSelectedWeek(Number(e.target.value))}
                        className="px-4 py-2 rounded-lg border bg-card text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none"
                    >
                        {WEEKS.map(week => (
                            <option key={week.id} value={week.id}>Week {week.id}</option>
                        ))}
                    </select>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-indigo-600 hover:bg-indigo-50 rounded-full"
                        onClick={() => setShowMoodModal(true)}
                    >
                        <Smile className="h-5 w-5" />
                    </Button>
                    <Link href="/student/upsc">
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-blue-600 hover:bg-blue-50 rounded-full" title="Resource Library">
                            <BookOpen className="h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href="/student/upsc/deep-report">
                        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-purple-600 hover:bg-purple-50 rounded-full">
                            <BarChart3 className="h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Day Selector */}
            <div className="bg-card p-1.5 rounded-xl border shadow-sm flex items-center justify-between gap-2 overflow-x-auto mb-8">
                {WEEKDAYS.map((day) => (
                    <button
                        key={day.id}
                        onClick={() => setSelectedDay(day.id)}
                        className={`flex-1 min-w-[60px] py-2 px-3 rounded-lg text-sm transition-all flex flex-col items-center gap-1
                            ${selectedDay === day.id
                                ? 'bg-indigo-600 text-white shadow-md'
                                : 'text-muted-foreground hover:bg-muted dark:hover:bg-gray-700'
                            }`}
                    >
                        <span className="font-semibold">{day.short}</span>
                    </button>
                ))}
            </div>

            {/* Vertical Timeline */}
            <div className="relative space-y-8 md:space-y-12 pl-4 md:pl-0">
                {/* Vertical Line */}
                <div className="absolute left-[27px] md:left-[50px] top-8 bottom-8 w-0.5 bg-indigo-100 -z-10" />

                {/* Daily Protocol Timeline */}
                <DailyProtocolTimeline weekId={selectedWeek} dayId={selectedDay} />
            </div>

        </div>
    );
}



