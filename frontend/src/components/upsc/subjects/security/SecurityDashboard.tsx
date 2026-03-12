"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldAlert, Globe, Lock, Activity, ChevronRight, Hash, Radar } from 'lucide-react';
import { SECURITY_SYLLABUS } from './data/security-schedule-data';

export default function SecurityDashboard() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Mission Control Header */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                    <h1 className="text-2xl font-bold flex items-center gap-3">
                        <ShieldAlert className="w-8 h-8 text-red-500" />
                        Internal Security Command Center
                    </h1>
                    <p className="text-muted-foreground mt-2 max-w-2xl">
                        Monitor threats, analyze challenges, and master the GS-3 Internal Security curriculum.
                    </p>
                </div>
            </div>

            {/* Threat Intel Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard icon={<ShieldAlert />} label="Critical Threats" value="3" color="text-red-500" border="border-red-500/20" />
                <StatCard icon={<Lock />} label="Cyber Vectors" value="High" color="text-blue-500" border="border-blue-500/20" />
                <StatCard icon={<Globe />} label="Border Zones" value="15k km" color="text-emerald-500" border="border-emerald-500/20" />
                <StatCard icon={<Radar />} label="Agencies" value="7+" color="text-amber-500" border="border-amber-500/20" />
            </div>

            {/* Syllabus Grid */}
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Activity className="w-5 h-5 text-indigo-600" />
                Active Operations (Modules)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SECURITY_SYLLABUS.map((topic) => (
                    <Card key={topic.id} className="group hover:border-red-500/50 transition-all hover:shadow-lg dark:bg-[#0a0a0a]">
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start mb-2">
                                <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider 
                                    ${topic.threatLevel === 'Critical' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                                        topic.threatLevel === 'High' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                                            'bg-muted text-muted-foreground'}`}>
                                    {topic.threatLevel} Priority
                                </span>
                                <span className="text-xs font-mono text-muted-foreground">{topic.days} Days</span>
                            </div>
                            <CardTitle className="text-lg text-foreground group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                                {topic.title}
                            </CardTitle>
                            <CardDescription className="line-clamp-2">
                                {topic.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3 mb-6">
                                {topic.subtopics.map((sub, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                                        <Hash className="w-3 h-3 text-slate-300" />
                                        <span className="truncate">{sub}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href={`/student/upsc/security/${topic.id}`}>
                                <button className="w-full py-2 bg-muted hover:bg-muted dark:hover:bg-slate-800 text-muted-foreground rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors border border-border group-hover:border-red-200 dark:group-hover:border-red-900/30">
                                    Access Briefing <ChevronRight className="w-4 h-4" />
                                </button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

function StatCard({ icon, label, value, color, border }: { icon: React.ReactNode, label: string, value: string, color: string, border: string }) {
    return (
        <div className={`bg-card dark:bg-[#0a0a0a] p-5 rounded-xl border ${border} flex items-center gap-4 shadow-sm`}>
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-muted ${color}`}>
                {icon}
            </div>
            <div>
                <p className={`text-2xl font-bold ${color}`}>{value}</p>
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">{label}</p>
            </div>
        </div>
    );
}
