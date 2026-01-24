import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    BookOpen,
    Calendar,
    Trophy,
    Target,
    Flame,
    ChevronRight,
    Clock,
    BrainCircuit,
    PenTool,
    ScrollText,
    Sun,
    Brain,
    Moon
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { RAS_PRELIMS_SYLLABUS } from "./data/ras-syllabus-data";

export default function RASDashboard() {
    // Phases Configuration
    const phases = [
        {
            id: 1,
            title: "Morning Meditation",
            subtitle: "Phase 1: Priming",
            time: "40 min",
            desc: "Start your day with clarity and focus. Essential for memory retention.",
            icon: <Sun className="h-6 w-6 text-amber-500" />,
            color: "amber",
            bg: "bg-amber-500/10",
            border: "border-amber-500/20",
            action: { label: "Watch Recording", link: "https://www.youtube.com/watch?v=placeholder", isExternal: true },
            linkText: "Guided Vizualization"
        },
        {
            id: 2,
            title: "Graphotherapy",
            subtitle: "Phase 2: Activation",
            time: "30 min",
            desc: "Rewire your subconscious for discipline and consistency.",
            icon: <PenTool className="h-6 w-6 text-pink-500" />,
            color: "pink",
            bg: "bg-pink-500/10",
            border: "border-pink-500/20",
            action: { label: "Write Now", link: `/student/graphotherapy` },
            linkText: "Level 2 Setup"
        },
        {
            id: 3,
            title: "RAS Core Revision",
            subtitle: "Phase 3: Deep Work",
            time: "4 Hours",
            desc: "The main block. Cover today's scheduled subjects and topics.",
            icon: <BookOpen className="h-6 w-6 text-white" />,
            color: "neutral", // Special handling for this block
            bg: "bg-neutral-900",
            border: "border-neutral-800",
            action: { label: "View Plan", link: `/student/ras/syllabus` },
            linkText: "Rajasthan History + Polity",
            isCore: true
        },
        {
            id: 4,
            title: "Mains Answer Writing",
            subtitle: "Phase 4: Output",
            time: "60 min",
            desc: "Daily answer writing practice with model answers.",
            icon: <Brain className="h-6 w-6 text-emerald-500" />,
            color: "emerald",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20",
            action: { label: "Practice", link: `/student/ras/mains` },
            linkText: "2 Questions Today"
        },
        {
            id: 5,
            title: "Night Class & Meditation",
            subtitle: "Phase 5: Night",
            time: "60 min",
            desc: "End your day with a specialized night class and relaxation.",
            icon: <Moon className="h-6 w-6 text-indigo-500" />,
            color: "indigo",
            bg: "bg-indigo-500/10",
            border: "border-indigo-500/20",
            action: { label: "Watch Recording", link: "https://www.youtube.com/watch?v=placeholder_night", isExternal: true },
            linkText: "Night Session Video"
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-b from-amber-900/20 to-black pb-12 pt-8">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                        <div>
                            <div className="flex items-center gap-2 text-amber-500 font-bold tracking-wider text-xs uppercase mb-2">
                                <span className="px-2 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">RAS 2026 Cycle 1</span>
                                <span className="flex items-center gap-1"><Flame className="w-3 h-3" /> Day 12 of 28</span>
                                <span className="px-2 py-1 bg-green-500/10 text-green-500 text-[10px] rounded-full border border-green-500/20 font-bold ml-2">v2.2 UPDATED</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                Officer's <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Headquarters</span>
                            </h1>
                            <p className="text-neutral-400 max-w-2xl">
                                Your Daily Protocol. Follow the timeline for maximum efficiency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content: Timeline */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 pb-20">
                <div className="space-y-6">
                    {/* Vertical Line Container */}
                    <div className="relative pl-4 md:pl-0 space-y-8">
                        {/* The Line */}
                        <div className="absolute left-[27px] md:left-[28px] top-8 bottom-8 w-0.5 bg-neutral-800 -z-10" />

                        {phases.map((phase) => (
                            <div key={phase.id} className="relative flex flex-col md:flex-row gap-6 md:gap-8">
                                {/* Number Indicator */}
                                <div className="absolute left-0 md:relative md:left-auto flex-shrink-0 z-10 bg-[#050505] py-2">
                                    <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center text-xl font-bold shadow-lg transition-transform hover:scale-105
                                        ${phase.isCore
                                            ? "border-amber-500 text-black bg-amber-500"
                                            : `border-neutral-700 text-neutral-400 bg-neutral-900`
                                        }`}>
                                        {phase.id}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="flex-1 ml-16 md:ml-0">
                                    {phase.isCore ? (
                                        // SPECIAL CARD FOR CORE REVISION
                                        <Card className="border-amber-500/30 bg-gradient-to-br from-neutral-900 to-black shadow-xl shadow-amber-900/10">
                                            <CardContent className="p-0">
                                                <div className="p-1 bg-gradient-to-r from-amber-500/20 to-transparent" />
                                                <div className="p-6">
                                                    <div className="flex flex-col md:flex-row justify-between gap-6">
                                                        <div className="flex-1">
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <span className="px-2 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-wider rounded border border-amber-500/20">
                                                                    {phase.subtitle}
                                                                </span>
                                                                <span className="flex items-center text-xs text-neutral-400 font-medium">
                                                                    <Clock className="w-3 h-3 mr-1" /> {phase.time}
                                                                </span>
                                                            </div>
                                                            <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                                                            <p className="text-neutral-400 text-sm mb-6">{phase.desc}</p>

                                                            {/* Nested Task List for Core */}
                                                            <div className="space-y-3 mb-6">
                                                                <div className="p-3 bg-neutral-800/50 rounded-lg border border-neutral-700/50 flex items-center gap-3">
                                                                    <div className="w-8 h-8 rounded bg-amber-500/10 flex items-center justify-center text-amber-500">
                                                                        <BookOpen className="w-4 h-4" />
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <div className="text-sm font-bold text-white">Rajasthan History</div>
                                                                        <div className="text-xs text-neutral-500">Middle Ages • Guhila Dynasty</div>
                                                                    </div>
                                                                    <Link href="/student/ras/focus?topic=Rajasthan%20History">
                                                                        <Button size="sm" className="h-8 bg-white text-black hover:bg-neutral-200">Start</Button>
                                                                    </Link>
                                                                </div>
                                                                <div className="p-3 bg-neutral-800/50 rounded-lg border border-neutral-700/50 flex items-center gap-3">
                                                                    <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-500">
                                                                        <Target className="w-4 h-4" />
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <div className="text-sm font-bold text-white">Polity</div>
                                                                        <div className="text-xs text-neutral-500">Governor Powers • Act 1935</div>
                                                                    </div>
                                                                    <Link href="/student/ras/focus?topic=Polity">
                                                                        <Button size="sm" variant="ghost" className="h-8 text-neutral-400 hover:text-white">Start</Button>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Right Side Stats */}
                                                        <div className="w-full md:w-64 bg-neutral-900 rounded-xl p-4 border border-neutral-800 flex flex-col gap-4">
                                                            <div>
                                                                <div className="text-xs text-neutral-500 mb-1">Today's Goal</div>
                                                                <Progress value={35} className="h-2 bg-neutral-800" />
                                                                <div className="text-right text-xs text-white font-bold mt-1">35% Complete</div>
                                                            </div>
                                                            <div className="grid grid-cols-2 gap-2">
                                                                <Link href="/student/ras/syllabus" className="col-span-2">
                                                                    <Button variant="outline" className="w-full border-neutral-700 text-neutral-300 hover:text-white hover:bg-neutral-800">
                                                                        Syllabus Tracker
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ) : (
                                        // STANDARD PHASE CARD
                                        <Card className="bg-neutral-900 border-neutral-800 hover:border-neutral-700 transition-all">
                                            <CardContent className="p-0 flex flex-col md:flex-row">
                                                <div className={`p-6 flex flex-col items-center justify-center gap-3 min-w-[100px] ${phase.bg}`}>
                                                    <div className={`w-10 h-10 rounded-lg bg-black/20 flex items-center justify-center`}>
                                                        {phase.icon}
                                                    </div>
                                                </div>
                                                <div className="p-5 flex-1 flex flex-col justify-center">
                                                    <div className="flex items-center gap-3 mb-1">
                                                        <span className={`text-[10px] font-bold uppercase tracking-wider text-${phase.color}-500`}>
                                                            {phase.subtitle}
                                                        </span>
                                                        <span className="text-xs text-neutral-500 font-medium">
                                                            {phase.time}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white mb-1">{phase.title}</h3>
                                                    <p className="text-neutral-400 text-sm mb-4">{phase.desc}</p>

                                                    <div className="flex items-center justify-between mt-auto">
                                                        {phase.action.isExternal ? (
                                                            <Button
                                                                size="sm"
                                                                onClick={() => window.open(phase.action.link, '_blank')}
                                                                className={`bg-${phase.color}-600 hover:bg-${phase.color}-700 text-white border-none`}
                                                            >
                                                                {phase.action.label} <Play className="ml-1 h-3 w-3" />
                                                            </Button>
                                                        ) : (
                                                            <Link href={phase.action.link}>
                                                                <Button size="sm" className={`bg-${phase.color}-600 hover:bg-${phase.color}-700 text-white border-none`}>
                                                                    {phase.action.label} <ChevronRight className="ml-1 h-3 w-3" />
                                                                </Button>
                                                            </Link>
                                                        )}
                                                        <span className="text-xs text-neutral-600 font-mono">{phase.linkText}</span>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
