"use client";

import React, { useEffect, useState } from "react";
import { useLiveClassroomStore } from "./store/LiveClassroomStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Square, Users, HelpCircle, BarChart2, Zap, Hand, Radio } from "lucide-react";

export default function LiveSessionDashboard() {
    const {
        isLive,
        toggleLive,
        students,
        confusionCount,
        activePoll,
        triggerPoll,
        endPoll,
        tick,
        sessionTime,
        pollResults
    } = useLiveClassroomStore();

    // Simulation Loop
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isLive) {
            interval = setInterval(tick, 2000); // Update every 2s
        }
        return () => clearInterval(interval);
    }, [isLive, tick]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <Card className="w-full border-indigo-500/20 shadow-xl overflow-hidden bg-white dark:bg-slate-950">
            <CardHeader className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl ${isLive ? 'bg-red-500/20 animate-pulse' : 'bg-slate-800'}`}>
                            <Radio className={`w-6 h-6 ${isLive ? 'text-red-500' : 'text-slate-400'}`} />
                        </div>
                        <div>
                            <CardTitle className="text-2xl font-black tracking-tight flex items-center gap-2">
                                LIVE CLASSROOM
                                {isLive && <Badge variant="destructive" className="animate-pulse">ON AIR</Badge>}
                            </CardTitle>
                            <p className="text-indigo-200/60 font-medium text-sm">
                                {isLive ? `Session Active • ${formatTime(sessionTime)}` : "Room Offline • Waiting to Start"}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-right hidden md:block">
                            <div className="text-2xl font-bold">{students.length}</div>
                            <div className="text-xs text-indigo-300 uppercase font-bold tracking-widest">Students</div>
                        </div>
                        <Button
                            size="lg"
                            variant={isLive ? "destructive" : "default"}
                            className={`font-bold uppercase tracking-widest ${!isLive ? 'bg-emerald-600 hover:bg-emerald-700' : ''}`}
                            onClick={() => toggleLive(!isLive)}
                        >
                            {isLive ? (
                                <><Square className="w-4 h-4 mr-2 fill-current" /> End Session</>
                            ) : (
                                <><Play className="w-4 h-4 mr-2 fill-current" /> Go Live</>
                            )}
                        </Button>
                    </div>
                </div>
            </CardHeader>

            {isLive ? (
                <CardContent className="p-6 space-y-8">
                    {/* Top Metrics Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Confusion Meter */}
                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                            <div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Confusion Level</div>
                                <div className={`text-3xl font-black ${confusionCount > 5 ? 'text-red-500' : 'text-slate-700 dark:text-slate-200'}`}>
                                    {Math.round((confusionCount / students.length) * 100)}%
                                </div>
                            </div>
                            <div className={`p-3 rounded-full ${confusionCount > 5 ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'}`}>
                                <HelpCircle className="w-6 h-6" />
                            </div>
                        </div>

                        {/* Average Attentiveness */}
                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                            <div>
                                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Avg. Focus</div>
                                <div className="text-3xl font-black text-indigo-600">
                                    {Math.round(students.reduce((acc, s) => acc + s.focusScore, 0) / students.length)}%
                                </div>
                            </div>
                            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                                <Zap className="w-6 h-6" />
                            </div>
                        </div>

                        {/* Active Poll */}
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-200 dark:border-indigo-800">
                            {activePoll ? (
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center bg-indigo-200/50 dark:bg-indigo-900/50 px-2 py-1 rounded">
                                        <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 animate-pulse">POLL ACTIVE</span>
                                        <button onClick={endPoll} className="text-[10px] underline text-indigo-600">End</button>
                                    </div>
                                    <div className="text-sm font-bold truncate">{activePoll}</div>
                                    <div className="flex gap-2 text-xs font-mono">
                                        <span className="text-emerald-600">Yes: {pollResults.yes}</span>
                                        <span className="text-red-600">No: {pollResults.no}</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition rounded" onClick={() => triggerPoll("Understand the core concept?")}>
                                    <BarChart2 className="w-5 h-5 text-indigo-400 mb-1" />
                                    <span className="text-xs font-bold text-indigo-600">Launch Quick Poll</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Attention Heatmap Grid */}
                    <div>
                        <div className="flex justify-between items-end mb-4">
                            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                                <Users className="w-5 h-5 text-slate-400" />
                                Student Pulse
                            </h3>
                            <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Focused</span>
                                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Drifting</span>
                                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> Confused</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                            {students.map(student => (
                                <div
                                    key={student.id}
                                    className={`
                                        aspect-square rounded-xl p-3 flex flex-col items-center justify-center gap-2 border transition-all duration-500 relative overflow-hidden group cursor-pointer
                                        ${student.isConfused
                                            ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                                            : student.focusScore < 60
                                                ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'
                                                : 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800'
                                        }
                                    `}
                                >
                                    <div className={`
                                        w-8 h-8 rounded-full flex items-center justify-center font-black text-xs
                                        ${student.isConfused ? 'bg-red-100 text-red-700' : 'bg-white text-slate-700 shadow-sm'}
                                    `}>
                                        {student.avatar}
                                    </div>
                                    <div className="text-[10px] font-bold truncate max-w-full text-slate-600 dark:text-slate-300">
                                        {student.name.split(' ')[0]}
                                    </div>

                                    {/* Pulse Indicator */}
                                    {student.isConfused && (
                                        <div className="absolute top-1 right-1 animate-bounce">
                                            <HelpCircle className="w-3 h-3 text-red-500" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            ) : (
                <div className="p-12 text-center text-slate-500">
                    <div className="w-20 h-20 bg-slate-100 dark:bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Radio className="w-10 h-10 text-slate-300" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Classroom Offline</h3>
                    <p className="max-w-md mx-auto mb-8">Start the session to connect with student devices, track real-time attention, and launch interactive polls.</p>
                </div>
            )}
        </Card>
    );
}
