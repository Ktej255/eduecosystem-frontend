"use client";

import React, { useState } from 'react';
import TechTreeViz from './visualizations/TechTreeViz';
import SpaceOrbitViz from './visualizations/OrbitSimulation';
import DefenseTechViz from './visualizations/DefenseTechViz';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Atom, Microscope, Rocket, Network, Shield, Globe2, Sparkles, Calendar, BookOpenCheck, ChevronRight, LayoutGrid, Layers, Zap, Activity, Radio } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { SCI_TECH_SYLLABUS } from './data/scitech-schedule-data';
import Link from 'next/link';
import ScienceTechSectionPlanner from './ScienceTechSectionPlanner';

const VIZ_COMPONENTS: Record<string, () => React.ReactNode> = {
    'tech-tree': () => <TechTreeViz />,
    'orbits': () => <SpaceOrbitViz />,
    'defense': () => <DefenseTechViz />
};

const VIZ_LIST = [
    { id: 'tech-tree', label: 'Tech Tree', icon: <Network className="w-4 h-4" />, desc: 'Emerging Technologies Map' },
    { id: 'orbits', label: 'Space Orbits', icon: <Globe2 className="w-4 h-4" />, desc: 'Satellite Mechanics' },
    { id: 'defense', label: 'Defense Sys', icon: <Shield className="w-4 h-4" />, desc: 'Missile Trajectories' },
];

export default function SciTechDashboard() {
    const [activeViz, setActiveViz] = useState<string>('tech-tree');
    const [viewMode, setViewMode] = useState<'planner' | 'sim' | 'syllabus'>('planner');

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Header Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                    label="Active Missions"
                    value="Gaganyaan-1"
                    status="Operational"
                    color="text-indigo-600"
                    icon={<Rocket className="w-5 h-5" />}
                />
                <StatCard
                    label="Focus Area"
                    value="Generative AI"
                    status="Strategic"
                    color="text-purple-600"
                    icon={<Sparkles className="w-5 h-5" />}
                />
                <StatCard
                    label="Bio-Discovery"
                    value="CRISPR-V3"
                    status="Testing"
                    color="text-rose-600"
                    icon={<Microscope className="w-5 h-5" />}
                />
            </div>

            {/* View Toggle */}
            <div className="flex justify-end border-b border-border pb-1">
                <div className="flex gap-4">
                    <button
                        onClick={() => setViewMode('planner')}
                        className={`px-4 py-2 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${viewMode === 'planner' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-muted-foreground hover:text-muted-foreground'}`}
                    >
                        <Calendar className="w-4 h-4" /> Study Planner
                    </button>
                    <button
                        onClick={() => setViewMode('sim')}
                        className={`px-4 py-2 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${viewMode === 'sim' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-muted-foreground hover:text-muted-foreground'}`}
                    >
                        <LayoutGrid className="w-4 h-4" /> Simulation Hub
                    </button>
                    <button
                        onClick={() => setViewMode('syllabus')}
                        className={`px-4 py-2 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${viewMode === 'syllabus' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-muted-foreground hover:text-muted-foreground'}`}
                    >
                        <Layers className="w-4 h-4" /> Syllabus
                    </button>
                </div>
            </div>

            {viewMode === 'planner' && (
                <div className="animate-in slide-in-from-bottom-4 duration-500">
                    <ScienceTechSectionPlanner />
                </div>
            )}

            {viewMode === 'sim' && (
                <div className="min-h-[600px] bg-slate-950 text-white relative overflow-hidden rounded-2xl border border-slate-800 animate-in slide-in-from-bottom-4 duration-500">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent" />
                    </div>

                    <div className="relative z-10 flex h-full">
                        {/* Sidebar Navigation */}
                        <div className="w-64 border-r border-white/10 flex flex-col p-4 gap-2">
                            <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 px-2">
                                Research Sectors
                            </div>

                            {VIZ_LIST.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveViz(item.id)}
                                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all group ${activeViz === item.id
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                        : "hover:bg-card/5 text-muted-foreground hover:text-white"
                                        }`}
                                >
                                    <div className={`p-2 rounded-lg ${activeViz === item.id ? "bg-card/20" : "bg-card/5 group-hover:bg-card/10"
                                        }`}>
                                        {item.icon}
                                    </div>
                                    <div className="text-left">
                                        <div className="text-sm font-bold">{item.label}</div>
                                        <div className="text-[10px] opacity-60">{item.desc}</div>
                                    </div>
                                    {activeViz === item.id && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="ml-auto w-1.5 h-1.5 rounded-full bg-card animate-pulse"
                                        />
                                    )}
                                </button>
                            ))}

                            <div className="mt-auto bg-slate-900/50 rounded-xl p-4 border border-white/5">
                                <div className="text-xs font-mono text-muted-foreground mb-2">SYSTEM STATUS</div>
                                <div className="flex items-center gap-2 text-sm text-emerald-400">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    Research Active
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 p-6 overflow-y-auto">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                                        {VIZ_LIST.find(i => i.id === activeViz)?.label}
                                    </h1>
                                    <p className="text-muted-foreground text-sm">
                                        {VIZ_LIST.find(i => i.id === activeViz)?.desc}
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <StatCard label="Tech Level" value="Type 0.73" status="Accelerating" color="text-amber-400" icon={<Zap className="w-4 h-4" />} />
                                    <StatCard label="Active Projects" value="12" status="On Schedule" color="text-blue-400" icon={<Activity className="w-4 h-4" />} />
                                </div>
                            </div>

                            <div className="w-full h-[calc(100%-120px)] border border-white/10 rounded-2xl overflow-hidden bg-slate-900/50 backdrop-blur-sm relative">
                                {VIZ_COMPONENTS[activeViz]()}

                                {/* Overlay Gradients */}
                                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {viewMode === 'syllabus' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4 duration-500">
                    {SCI_TECH_SYLLABUS.map((topic) => (
                        <Card key={topic.id} className="group hover:border-indigo-300 transition-all hover:shadow-md">
                            <CardHeader className="pb-3">
                                <div className="flex justify-between items-start">
                                    <Badge variant="secondary" className="mb-2">{topic.category}</Badge>
                                    <span className="text-xs font-mono text-muted-foreground">{topic.days} Days</span>
                                </div>
                                <CardTitle className="text-lg text-foreground group-hover:text-indigo-600 transition-colors">
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
                                            <BookOpenCheck className="w-3 h-3 text-indigo-400" />
                                            <span className="truncate">{sub}</span>
                                        </div>
                                    ))}
                                    {topic.subtopics.length > 3 && (
                                        <div className="text-xs text-muted-foreground pl-5">+{topic.subtopics.length - 3} more</div>
                                    )}
                                </div>
                                <Link href={`/student/batch1/science-tech/${topic.id}`}>
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

function StatCard({ label, value, status, color, icon }: { label: string, value: string, status: string, color: string, icon: React.ReactNode }) {
    return (
        <Card className="border-border overflow-hidden group hover:shadow-md transition-shadow">
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-muted rounded-xl text-muted-foreground group-hover:scale-110 transition-transform">
                        {icon}
                    </div>
                    <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-tighter opacity-70">
                        {status}
                    </Badge>
                </div>
                <div>
                    <h3 className={`text-2xl font-black tracking-tight mb-1 ${color}`}>{value}</h3>
                    <p className="text-xs font-medium text-muted-foreground dark:text-muted-foreground uppercase tracking-wide">{label}</p>
                </div>
            </CardContent>
        </Card>
    );
}
