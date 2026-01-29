"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Crown, Building2, Scroll, Sword, ArrowRight, BookOpen, Globe, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { ModernHistoryTimeline } from './ModernHistoryTimeline';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HISTORY_ERAS = [
    {
        id: 'ancient',
        title: 'Ancient India',
        period: '2500 BCE - 700 CE',
        color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200',
        icon: Building2,
        events: [
            { year: '2500 BCE', title: 'Indus Valley Civilization' },
            { year: '1500 BCE', title: 'Vedic Period' },
            { year: '600 BCE', title: 'Mahajanapadas' },
            { year: '321 BCE', title: 'Mauryan Empire' },
            { year: '320 CE', title: 'Gupta Empire (Golden Age)' },
        ]
    },
    {
        id: 'medieval',
        title: 'Medieval India',
        period: '700 CE - 1700 CE',
        color: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-200',
        icon: Crown,
        events: [
            { year: '750 CE', title: 'Tripartite Struggle' },
            { year: '1206 CE', title: 'Delhi Sultanate' },
            { year: '1336 CE', title: 'Vijayanagara Empire' },
            { year: '1526 CE', title: 'Mughal Empire' },
            { year: '1674 CE', title: 'Maratha Empire' },
        ]
    },
    {
        id: 'world',
        title: 'World History',
        period: '18th - 20th Century',
        color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200',
        icon: Globe,
        events: [
            { year: '1760', title: 'Industrial Revolution' },
            { year: '1789', title: 'French Revolution' },
            { year: '1914', title: 'World War I' },
            { year: '1939', title: 'World War II' },
            { year: '1991', title: 'End of Cold War' },
        ]
    }
];

export default function HistoryDashboard() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Header / Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                        <Scroll className="h-8 w-8 text-amber-600" />
                        History Dashboard
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">Track your journey across Ancient, Medieval, and Modern India.</p>
                </div>
                <div className="flex gap-3">
                    <Link href="/student/batch1/history/schedule">
                        <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-lg">
                            <Calendar className="mr-2 h-4 w-4" />
                            30-Day Pomodoro Plan
                        </Button>
                    </Link>
                    <Link href="/student/pyq">
                        <Button variant="outline" className="border-amber-500 text-amber-700 hover:bg-amber-50 dark:text-amber-300 dark:hover:bg-amber-900/20">
                            <BookOpen className="mr-2 h-4 w-4" />
                            Access PYQ Portal
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Header Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                    label="Current Focus"
                    value="Modern India"
                    color="text-blue-600"
                    icon={<Scroll className="w-5 h-5 text-blue-600" />}
                />
                <StatCard
                    label="Key Battles"
                    value="58 Major"
                    color="text-red-500"
                    icon={<Sword className="w-5 h-5 text-red-500" />}
                />
                <StatCard
                    label="Dynasties"
                    value="24 Recorded"
                    color="text-amber-600"
                    icon={<Crown className="w-5 h-5 text-amber-600" />}
                />
            </div>

            {/* Main Content Grid: Modern History (Left) + Eras (Right/Bottom) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Modern History Detailed Timeline (Takes 2 columns) */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="border-amber-100 dark:border-amber-900/50 overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30">
                            <CardTitle className="text-amber-900 dark:text-amber-100">Modern History Syllabus Tracker</CardTitle>
                            <CardDescription>Based on Spectrum (Rajiv Ahir)</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                            <ModernHistoryTimeline />
                        </CardContent>
                    </Card>
                </div>

                {/* Ancient & Medieval Summaries (Takes 1 column) */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Historical Eras</h3>
                    {HISTORY_ERAS.map((era) => (
                        <Card key={era.id} className="hover:shadow-md transition-all">
                            <div className={`p-4 border-b-2 ${era.color} bg-opacity-10 border-opacity-20`}>
                                <div className="flex items-center gap-3">
                                    <era.icon className="w-6 h-6" />
                                    <div>
                                        <h3 className="font-bold text-lg">{era.title}</h3>
                                        <span className="text-xs font-mono opacity-80">{era.period}</span>
                                    </div>
                                </div>
                            </div>
                            <CardContent className="p-4 bg-slate-50 dark:bg-slate-900/20">
                                <div className="space-y-4 relative pl-4 border-l-2 border-dashed border-gray-200 dark:border-gray-800">
                                    {era.events.map((event, idx) => (
                                        <div key={idx} className="relative">
                                            <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-gray-300 dark:border-gray-700" />
                                            <div>
                                                <div className="font-bold text-xs text-indigo-600 dark:text-indigo-400">{event.year}</div>
                                                <div className="text-sm text-gray-700 dark:text-gray-300">{event.title}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    <Card className="bg-indigo-50 border-indigo-200 dark:bg-indigo-900/20 dark:border-indigo-800">
                        <CardContent className="p-6 text-center">
                            <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">Ready to Practice?</h4>
                            <p className="text-sm text-indigo-600 dark:text-indigo-300 mb-4">
                                Test your knowledge with Previous Year Questions.
                            </p>
                            <Link href="/student/pyq">
                                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                                    Launch PYQ Bank
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function StatCard({ label, value, color, icon }: { label: string, value: string, color: string, icon: React.ReactNode }) {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        {icon}
                    </div>
                </div>
                <div>
                    <h3 className={`text-2xl font-bold mb-1 ${color}`}>{value}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                </div>
            </CardContent>
        </Card>
    );
}
