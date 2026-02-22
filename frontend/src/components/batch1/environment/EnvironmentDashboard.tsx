"use client";

import React, { useState } from 'react';
import FoodWebViz from './visualizations/FoodWebViz';
import CarbonCycleViz from './visualizations/CarbonCycleViz';
import ClimateAgreementsViz from './visualizations/ClimateAgreementsViz';
import ClimateTimeMachine from './visualizations/ClimateTimeMachine';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Leaf, Droplets, ThermometerSun, BookOpenCheck, ChevronRight, Calendar, LayoutGrid, Layers } from 'lucide-react';
import { ENVIRONMENT_SYLLABUS } from './data/environment-schedule-data';
import Link from 'next/link';
import EnvironmentSectionPlanner from './EnvironmentSectionPlanner';

export default function EnvironmentDashboard() {
    const [viewMode, setViewMode] = useState<'planner' | 'visual' | 'syllabus'>('planner');

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Visual Hub Banner */}
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 rounded-xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
                        <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-emerald-900 dark:text-emerald-100">Visual Environment Hub</h3>
                        <p className="text-sm text-emerald-700 dark:text-emerald-300">Explore interactive simulations: Food Webs, Carbon Cycle & Climate Agreements.</p>
                    </div>
                </div>
                {/* View Toggle */}
                <div className="flex bg-card/50 dark:bg-black/20 p-1 rounded-lg border border-emerald-100 dark:border-emerald-800 gap-1">
                    <button
                        onClick={() => setViewMode('planner')}
                        className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-2 ${viewMode === 'planner' ? 'bg-emerald-600 text-white shadow-sm' : 'text-emerald-700 hover:bg-emerald-100'}`}
                    >
                        <Calendar className="w-3 h-3" /> Planner
                    </button>
                    <button
                        onClick={() => setViewMode('visual')}
                        className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-2 ${viewMode === 'visual' ? 'bg-emerald-600 text-white shadow-sm' : 'text-emerald-700 hover:bg-emerald-100'}`}
                    >
                        <LayoutGrid className="w-3 h-3" /> Visual Hub
                    </button>
                    <button
                        onClick={() => setViewMode('syllabus')}
                        className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-2 ${viewMode === 'syllabus' ? 'bg-emerald-600 text-white shadow-sm' : 'text-emerald-700 hover:bg-emerald-100'}`}
                    >
                        <Layers className="w-3 h-3" /> Syllabus
                    </button>
                </div>
            </div>

            {/* Header Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                    label="Biodiversity Index"
                    value="Critical"
                    color="text-red-500"
                    icon={<Leaf className="w-5 h-5 text-emerald-500" />}
                />
                <StatCard
                    label="CO2 Concentration"
                    value="421 ppm"
                    color="text-orange-500"
                    icon={<ThermometerSun className="w-5 h-5 text-orange-500" />}
                />
                <StatCard
                    label="Global Temp Rise"
                    value="+1.1°C"
                    color="text-red-600"
                    icon={<ThermometerSun className="w-5 h-5 text-red-500" />}
                />
            </div>

            {viewMode === 'planner' && (
                <div className="animate-in slide-in-from-bottom-4 duration-500">
                    <EnvironmentSectionPlanner onViewVisuals={() => setViewMode('visual')} />
                </div>
            )}

            {viewMode === 'visual' && (
                <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
                    {/* Climate Time Machine */}
                    <ClimateTimeMachine />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left: Food Web */}
                        <div className="space-y-6">
                            <FoodWebViz />
                        </div>

                        {/* Right: Cycles */}
                        <div className="space-y-6">
                            <CarbonCycleViz />
                        </div>
                    </div>

                    {/* Climate Agreements - Full Width */}
                    <ClimateAgreementsViz />
                </div>
            )}

            {viewMode === 'syllabus' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4 duration-500">
                    {ENVIRONMENT_SYLLABUS.map((topic) => (
                        <Card key={topic.id} className="group hover:border-emerald-300 transition-all hover:shadow-md">
                            <CardHeader className="pb-3">
                                <div className="flex justify-between items-start">
                                    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider ${topic.category === 'Climate' ? 'bg-orange-100 text-orange-700' :
                                        topic.category === 'Biodiversity' ? 'bg-teal-100 text-teal-700' :
                                            'bg-emerald-100 text-emerald-700'
                                        }`}>
                                        {topic.category}
                                    </span>
                                    <span className="text-xs font-mono text-muted-foreground">{topic.days} Days</span>
                                </div>
                                <CardTitle className="text-lg text-foreground group-hover:text-emerald-600 transition-colors">
                                    {topic.title}
                                </CardTitle>
                                <CardDescription className="line-clamp-2">
                                    {topic.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 mb-4">
                                    {topic.subtopics.slice(0, 3).map((sub, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                                            <BookOpenCheck className="w-3 h-3 text-emerald-400" />
                                            <span className="truncate">{sub}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link href={`/student/batch1/environment/${topic.id}`}>
                                    <button className="w-full py-2 bg-muted hover:bg-muted dark:hover:bg-slate-700 text-muted-foreground rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors">
                                        Start Module <ChevronRight className="w-4 h-4" />
                                    </button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}

function StatCard({ label, value, color, icon }: { label: string, value: string, color: string, icon: React.ReactNode }) {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-muted rounded-lg">
                        {icon}
                    </div>
                </div>
                <div>
                    <h3 className={`text-2xl font-bold mb-1 ${color}`}>{value}</h3>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground">{label}</p>
                </div>
            </CardContent>
        </Card>
    );
}
