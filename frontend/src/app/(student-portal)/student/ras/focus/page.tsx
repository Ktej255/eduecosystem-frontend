
"use client";

import React, { useState, useEffect } from 'react';
import FocusTimer from '@/components/ras/focus/FocusTimer';
import DailyChecklist, { TaskItem } from '@/components/ras/focus/DailyChecklist';
import RecallTrigger from '@/components/ras/focus/RecallTrigger';
import { ArrowLeft, Zap } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function RASFocusPage() {
    // Phase Logic: Determine current phase based on date
    // Hardcoded to simulate "Today is Jan 24" as per user context or actual date
    // For production, we'd use new Date(), but for this specific roadmap:
    // Jan 24 is in Phase 1 (Jan 20-29) -> Physics & Reasoning

    const [currentSlot, setCurrentSlot] = useState<'A' | 'B' | 'C'>('A');

    // Initial Tasks State
    const [tasks, setTasks] = useState<TaskItem[]>([
        {
            id: 'slot-a',
            slot: 'A',
            label: 'Classwork Revision',
            subLabel: 'Math (10 Qs) + History Notes Recall',
            completed: false
        },
        {
            id: 'slot-b',
            slot: 'B',
            label: 'Physics: Mechanics', // Dynamic based on Phase 1
            subLabel: 'Gravitation & Newton Laws',
            completed: false
        },
        {
            id: 'slot-c',
            slot: 'C',
            label: 'Reasoning Practice', // Dynamic based on Phase 1
            subLabel: 'Coding-Decoding (20 Qs)',
            completed: false
        }
    ]);

    const handleToggleTask = (id: string) => {
        setTasks(tasks.map(t =>
            t.id === id ? { ...t, completed: !t.completed } : t
        ));
    };

    // Determine Timer Settings based on Slot
    const getTimerSettings = (slot: 'A' | 'B' | 'C') => {
        switch (slot) {
            case 'A': return { minutes: 165, label: "Slot A: Classwork Revision" }; // 2h 45m
            case 'B': return { minutes: 180, label: "Slot B: Deep Work (Physics)" }; // 3h
            case 'C': return { minutes: 120, label: "Slot C: Skill Practice" };      // 2h
        }
    };

    const timerSettings = getTimerSettings(currentSlot);

    return (
        <div className="min-h-screen bg-[#050505] text-white p-4 md:p-8">
            {/* Header */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <Link href="/student/ras">
                        <Button variant="ghost" className="text-neutral-400 hover:text-white pl-0 mb-2">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to HQ
                        </Button>
                    </Link>
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <Zap className="w-8 h-8 text-amber-500 fill-amber-500" />
                        Anti-Gravity Focus Mode
                    </h1>
                    <p className="text-neutral-500 text-sm mt-1">High-Intensity Execution • Phase 1 (Jan 20-29)</p>
                </div>
                <div className="flex bg-neutral-900 rounded-lg p-1 border border-neutral-800">
                    {['A', 'B', 'C'].map((slot) => (
                        <button
                            key={slot}
                            onClick={() => setCurrentSlot(slot as any)}
                            className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${currentSlot === slot
                                    ? 'bg-amber-500 text-black shadow-lg'
                                    : 'text-neutral-500 hover:text-white hover:bg-neutral-800'
                                }`}
                        >
                            Slot {slot}
                        </button>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Recall Trigger (Simulating Day 6 for Demo, or calculate real day) */}
                <RecallTrigger dayNumber={6} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left: Timer */}
                    <div className="lg:col-span-7">
                        <FocusTimer
                            durationMinutes={timerSettings.minutes}
                            label={timerSettings.label}
                            isActive={true}
                            onComplete={() => alert("Session Complete! Take a break.")}
                        />

                        {/* Tips Card */}
                        <div className="mt-6 p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
                            <h3 className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-3">Protocol Rules</h3>
                            <ul className="space-y-2 text-sm text-neutral-400">
                                <li className="flex gap-2">
                                    <span className="text-amber-500 font-bold">1.</span>
                                    <span>Phone must be in another room or DND mode.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-amber-500 font-bold">2.</span>
                                    <span>Use "Active Recall" - Close the book and recite.</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-amber-500 font-bold">3.</span>
                                    <span>Taking a break? Pause the timer. Accountability is key.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right: Checklist */}
                    <div className="lg:col-span-5">
                        <DailyChecklist
                            tasks={tasks}
                            onToggle={handleToggleTask}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
