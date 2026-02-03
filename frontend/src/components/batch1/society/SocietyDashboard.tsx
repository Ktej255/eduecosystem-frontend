"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, Globe2, Heart, Building2, ChevronRight, Hash, Smile, Baby } from 'lucide-react';
import { SOCIETY_SYLLABUS } from './data/society-schedule-data';

export default function SocietyDashboard() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Header / Intro */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                        <Users className="w-8 h-8" />
                        Indian Society (GS-I)
                    </h1>
                    <p className="opacity-90 max-w-2xl text-lg">
                        Explore the complex tapestry of Unity in Diversity, Social Issues, and the transforming dynamics of Indian culture.
                    </p>
                </div>
            </div>

            {/* Demographic Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard icon={<Users />} label="Population" value="1.4B+" color="text-pink-600" bg="bg-pink-50 dark:bg-pink-900/20" />
                <StatCard icon={<Globe2 />} label="Languages" value="121+" color="text-indigo-600" bg="bg-indigo-50 dark:bg-indigo-900/20" />
                <StatCard icon={<Building2 />} label="Urbanization" value="35%" color="text-cyan-600" bg="bg-cyan-50 dark:bg-cyan-900/20" />
                <StatCard icon={<Baby />} label="Sex Ratio" value="1020" color="text-emerald-600" bg="bg-emerald-50 dark:bg-emerald-900/20" />
            </div>

            {/* Syllabus Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SOCIETY_SYLLABUS.map((topic) => (
                    <Card key={topic.id} className="group hover:border-pink-300 transition-all hover:shadow-lg dark:bg-[#0a0a0a] dark:border-slate-800">
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start mb-2">
                                <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider 
                                    ${topic.category === 'Structure' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' :
                                        topic.category === 'Issues' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' :
                                            'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400'}`}>
                                    {topic.category}
                                </span>
                                <span className="text-xs font-mono text-slate-400">{topic.days} Days</span>
                            </div>
                            <CardTitle className="text-lg text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                                {topic.title}
                            </CardTitle>
                            <CardDescription className="line-clamp-2">
                                {topic.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3 mb-6">
                                {topic.subtopics.map((sub, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                                        <span className="truncate">{sub}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href={`/student/batch1/society/${topic.id}`}>
                                <button className="w-full py-2 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors border border-slate-200 dark:border-slate-800 group-hover:border-pink-200 dark:group-hover:border-pink-900/30">
                                    Study Module <ChevronRight className="w-4 h-4" />
                                </button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

function StatCard({ icon, label, value, color, bg }: { icon: React.ReactNode, label: string, value: string, color: string, bg: string }) {
    return (
        <div className={`p-5 rounded-2xl flex items-center gap-4 bg-white dark:bg-[#0a0a0a] border border-slate-100 dark:border-slate-800 shadow-sm`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bg} ${color}`}>
                {icon}
            </div>
            <div>
                <p className={`text-2xl font-bold ${color} dark:text-white`}>{value}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{label}</p>
            </div>
        </div>
    );
}
