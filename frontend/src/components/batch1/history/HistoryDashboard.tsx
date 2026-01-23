"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Crown, Building2, Scroll, Sword } from 'lucide-react';
import { motion } from 'framer-motion';

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
        id: 'modern',
        title: 'Modern India',
        period: '1700 CE - 1947 CE',
        color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200',
        icon: Scroll,
        events: [
            { year: '1757', title: 'Battle of Plassey' },
            { year: '1857', title: 'First War of Independence' },
            { year: '1885', title: 'Formation of INC' },
            { year: '1920', title: 'Non-Cooperation Movement' },
            { year: '1947', title: 'Independence' },
        ]
    }
];

export default function HistoryDashboard() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
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

            <Card className="bg-slate-50/50 dark:bg-slate-900/20 border-0">
                <CardHeader>
                    <CardTitle>Chrono-Lab Timeline</CardTitle>
                    <CardDescription>Visual journey through Indian History</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                    <ScrollArea className="w-full whitespace-nowrap rounded-md border bg-white dark:bg-black p-4">
                        <div className="flex space-x-8 p-4">
                            {HISTORY_ERAS.map((era) => (
                                <div key={era.id} className="inline-block align-top w-[350px]">
                                    <div className={`p-4 rounded-xl border-2 mb-4 ${era.color} bg-opacity-10 border-opacity-20`}>
                                        <div className="flex items-center gap-3 mb-2">
                                            <era.icon className="w-6 h-6" />
                                            <div>
                                                <h3 className="font-bold text-lg">{era.title}</h3>
                                                <span className="text-xs font-mono opacity-80">{era.period}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4 relative pl-4 border-l-2 border-dashed border-gray-200 dark:border-gray-800">
                                        {era.events.map((event, idx) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ x: 5 }}
                                                className="relative group cursor-pointer"
                                            >
                                                <div className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-gray-300 dark:border-gray-700 group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-colors" />
                                                <div className="bg-white dark:bg-gray-900 p-3 rounded-lg border border-gray-100 dark:border-gray-800 shadow-sm group-hover:shadow-md transition-shadow">
                                                    <div className="font-bold text-sm text-indigo-600 dark:text-indigo-400">{event.year}</div>
                                                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{event.title}</div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </CardContent>
            </Card>
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
