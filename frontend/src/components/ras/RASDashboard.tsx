"use client";

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
    ScrollText
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { RAS_PRELIMS_SYLLABUS } from "./data/ras-syllabus-data";

export default function RASDashboard() {
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
                                <span className="flex items-center gap-1"><Flame className="w-3 h-3" /> Day 12 of 70</span>
                                <span className="px-2 py-1 bg-green-500/10 text-green-500 text-[10px] rounded-full border border-green-500/20 font-bold ml-2">v2.0 LIVE</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                Officer's <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Headquarters</span>
                            </h1>
                            <p className="text-neutral-400 max-w-2xl">
                                Your command center for RPSC preparation. Track syllabus coverage, manage daily targets, and execute precision revision.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur min-w-[140px]">
                                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                                    <Trophy className="w-6 h-6 text-amber-500 mb-1" />
                                    <div className="text-2xl font-bold text-white">12 <span className="text-xs text-neutral-500 font-normal">Rank</span></div>
                                    <div className="text-[10px] text-neutral-400 uppercase tracking-widest">Global</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-neutral-900/50 border-neutral-800 backdrop-blur min-w-[140px]">
                                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                                    <Target className="w-6 h-6 text-green-500 mb-1" />
                                    <div className="text-2xl font-bold text-white">84% <span className="text-xs text-neutral-500 font-normal">Acc.</span></div>
                                    <div className="text-[10px] text-neutral-400 uppercase tracking-widest">Prelims</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Quick Access Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <Link href="/student/ras/syllabus" className="group">
                            <div className="h-full bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 p-6 rounded-2xl transition-all cursor-pointer">
                                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                                    <ScrollText className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">Syllabus Tracker</h3>
                                <p className="text-xs text-neutral-400">Track 950+ Micro-topics across Prelims & Mains.</p>
                            </div>
                        </Link>

                        <Link href="/student/ras/focus" className="group">
                            <div className="h-full bg-neutral-900 border border-neutral-800 hover:border-blue-500/50 p-6 rounded-2xl transition-all cursor-pointer">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                                    <BrainCircuit className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">Deep Focus</h3>
                                <p className="text-xs text-neutral-400">Pomodoro sessions tailored to RAS topics.</p>
                            </div>
                        </Link>

                        <Link href="/student/ras/mains" className="group">
                            <div className="h-full bg-neutral-900 border border-neutral-800 hover:border-purple-500/50 p-6 rounded-2xl transition-all cursor-pointer">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4 group-hover:scale-110 transition-transform">
                                    <PenTool className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">Answer Writing</h3>
                                <p className="text-xs text-neutral-400">Daily answer practice with AI evaluation.</p>
                            </div>
                        </Link>

                        <Link href="/student/ras/subject/0" className="group">
                            <div className="h-full bg-gradient-to-br from-amber-600 to-amber-800 p-6 rounded-2xl transition-all cursor-pointer shadow-lg shadow-amber-900/20 hover:shadow-amber-900/40 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10" />
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <BookOpen className="w-8 h-8 text-white" />
                                        <span className="text-[10px] font-bold bg-black/20 px-2 py-1 rounded text-white">DAILY TARGET</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white leading-tight">Rajasthan History</h3>
                                    <div className="mt-4 flex items-center gap-2 text-amber-100 text-xs font-medium">
                                        <span>Resume Chapter 4</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Schedule & Tasks */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-white">Today's Protocol</h2>
                            <Link href="/student/ras/syllabus">
                                <Button variant="outline" size="sm" className="border-neutral-700 text-neutral-300 hover:text-white">
                                    View Full Plan
                                </Button>
                            </Link>
                        </div>

                        <div className="space-y-4">
                            {/* Task Card 1 */}
                            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex items-start gap-4 hover:bg-neutral-800/50 transition-colors">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-6 h-6 rounded-full border-2 border-amber-500 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-bold text-white text-lg">Rajasthan History: Middle Ages</h3>
                                        <span className="text-xs font-bold text-amber-500 bg-amber-500/10 px-2 py-1 rounded">PRIORITY</span>
                                    </div>
                                    <p className="text-neutral-400 text-sm mb-3">Cover Guhila and Chauhan Dynasties. Focus on battles and cultural achievements.</p>
                                    <div className="flex items-center gap-4 text-xs text-neutral-500">
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 2 Hours</span>
                                        <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> 45 Pages</span>
                                    </div>
                                </div>
                                <Link href="/student/ras/focus?topic=Rajasthan%20History%3A%20Middle%20Ages">
                                    <Button size="sm" className="bg-white text-black hover:bg-neutral-200 font-bold">Start</Button>
                                </Link>
                            </div>

                            {/* Task Card 2 */}
                            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 flex items-start gap-4 hover:bg-neutral-800/50 transition-colors">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="w-6 h-6 rounded-full border-2 border-neutral-700 hover:border-neutral-500 cursor-pointer" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-bold text-neutral-200 text-lg">Current Affairs: Rajasthan Budget</h3>
                                        <span className="text-xs font-bold text-blue-500 bg-blue-500/10 px-2 py-1 rounded">ANALYSIS</span>
                                    </div>
                                    <p className="text-neutral-400 text-sm mb-3">Review major scheme allocations and new announcements for 2026.</p>
                                    <div className="flex items-center gap-4 text-xs text-neutral-500">
                                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> 1 Hour</span>
                                    </div>
                                </div>
                                <Link href="/student/ras/focus?topic=Current%20Affairs%3A%20Budget">
                                    <Button size="sm" variant="ghost" className="text-neutral-400 hover:text-white">Details</Button>
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Subjects Grid */}
                    <div className="space-y-8">
                        <h2 className="text-xl font-bold text-white">Subject Modules</h2>
                        <div className="grid grid-cols-1 gap-3">
                            {RAS_PRELIMS_SYLLABUS.slice(0, 5).map((subject, idx) => (
                                <Link href={`/student/ras/subject/${idx}`} key={idx} className="block group">
                                    <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex items-center justify-between group-hover:border-neutral-600 transition-all">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-amber-500 group-hover:text-black transition-colors font-bold text-sm">
                                                {subject.title.substring(0, 2).toUpperCase()}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-neutral-200 text-sm group-hover:text-white line-clamp-1">{subject.title}</h4>
                                                <p className="text-[10px] text-neutral-500">{subject.topics.length} Sections</p>
                                            </div>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-white" />
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <Card className="bg-gradient-to-br from-neutral-900 to-black border-neutral-800">
                            <CardHeader>
                                <CardTitle className="text-sm font-bold text-neutral-400 uppercase tracking-widest">Performance</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-white font-medium">Syllabus Completion</span>
                                        <span className="text-amber-500 font-bold">12%</span>
                                    </div>
                                    <Progress value={12} className="h-1 bg-neutral-800" />
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-white font-medium">Correct Answers</span>
                                        <span className="text-green-500 font-bold">84%</span>
                                    </div>
                                    <Progress value={84} className="h-1 bg-neutral-800" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
