"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Landmark, Map, FileText, Zap, ChevronRight, Crown, Database } from 'lucide-react';

export default function ValueAdditionDashboard() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Premium Header */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                        <Crown className="w-8 h-8 text-yellow-200" />
                        <h1 className="text-3xl font-bold">Value Addition Hub</h1>
                    </div>
                    <p className="opacity-90 max-w-2xl text-lg font-medium">
                        The "Fab Month" Accelerator. High-Yield Modules for Prelims 2026.
                    </p>
                </div>
            </div>

            {/* Main Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Governance Node */}
                <Link href="/student/value-addition/governance">
                    <Card className="group h-full hover:border-amber-400 transition-all hover:shadow-lg dark:bg-[#0a0a0a] dark:border-slate-800 cursor-pointer">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400">
                                <Landmark className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">Governance & Schemes</CardTitle>
                            <CardDescription>
                                Registry of Ministries, flagship schemes (allocation, objectives), and policies.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-amber-600 transition-colors">
                                Explore Ministries <ChevronRight className="w-4 h-4" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>

                {/* Interactive Atlas */}
                <Link href="/student/value-addition/atlas">
                    <Card className="group h-full hover:border-emerald-400 transition-all hover:shadow-lg dark:bg-[#0a0a0a] dark:border-slate-800 cursor-pointer">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                                <Map className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">Interactive Atlas</CardTitle>
                            <CardDescription>
                                Visual mastery of National Parks, Minerals, Ramsar Sites, and Industrial Corridors.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-emerald-600 transition-colors">
                                Open Maps <ChevronRight className="w-4 h-4" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>

                {/* High Yield Data */}
                <Link href="/student/value-addition/reports">
                    <Card className="group h-full hover:border-blue-400 transition-all hover:shadow-lg dark:bg-[#0a0a0a] dark:border-slate-800 cursor-pointer">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                                <Database className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">Reports & Indices</CardTitle>
                            <CardDescription>
                                Critical data points, Global Indices trends, and Economic Survey summaries.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-blue-600 transition-colors">
                                View Data <ChevronRight className="w-4 h-4" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>

                {/* CSAT Formulas */}
                <Link href="/student/value-addition/csat-formulas">
                    <Card className="group h-full hover:border-violet-400 transition-all hover:shadow-lg dark:bg-[#0a0a0a] dark:border-slate-800 cursor-pointer">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4 text-violet-600 dark:text-violet-400">
                                <Zap className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">CSAT Formulas</CardTitle>
                            <CardDescription>
                                Quick revision cheat-sheets for Quant, Reasoning, and Data Interpretation.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-violet-600 transition-colors">
                                Open Cheat Sheet <ChevronRight className="w-4 h-4" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>

                {/* Current Affairs / Year Book */}
                <Link href="/student/value-addition/current-affairs">
                    <Card className="group h-full hover:border-rose-400 transition-all hover:shadow-lg dark:bg-[#0a0a0a] dark:border-slate-800 cursor-pointer">
                        <CardHeader>
                            <div className="w-12 h-12 rounded-xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center mb-4 text-rose-600 dark:text-rose-400">
                                <FileText className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-xl">PIB & Year Book</CardTitle>
                            <CardDescription>
                                Synopsis of India Year Book 2026 and major PIB releases (Year-End Review).
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-2 text-sm text-slate-500 group-hover:text-rose-600 transition-colors">
                                Read Summaries <ChevronRight className="w-4 h-4" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>

            </div>

            {/* Quick Access / Recent Updates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="dark:bg-[#0a0a0a]">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-amber-500" />
                            "Why in News?" (2025-26)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 flex justify-between items-center">
                            <span className="text-sm font-medium">Lithium Reserves in J&K</span>
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Critical</span>
                        </div>
                        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 flex justify-between items-center">
                            <span className="text-sm font-medium">New Ramsar Sites Added</span>
                            <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Env</span>
                        </div>
                        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800 flex justify-between items-center">
                            <span className="text-sm font-medium">PM-PVTG Mission</span>
                            <span className="text-xs bg-amber-100 text-amber-600 px-2 py-1 rounded">Schemes</span>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
