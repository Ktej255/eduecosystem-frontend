"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Database, TrendingUp, TrendingDown, Minus } from "lucide-react";
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { REPORTS_DATA } from './data/reports-data';

export default function ReportsPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black p-4 md:p-8 text-slate-900 dark:text-slate-100">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href="/student/value-addition">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <Database className="h-6 w-6 text-blue-600" />
                            Reports & Indices Registry
                        </h1>
                        <p className="text-sm text-slate-500">Critical data points for Prelims & Mains.</p>
                    </div>
                </div>

                {/* Reports Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {REPORTS_DATA.map((report) => (
                        <Card key={report.id} className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all dark:bg-[#0a0a0a]">
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-lg font-bold text-slate-800 dark:text-slate-100">{report.title}</CardTitle>
                                        <CardDescription className="text-xs font-mono mt-1 text-slate-500 uppercase tracking-widest">{report.publisher}</CardDescription>
                                    </div>
                                    <Badge variant="outline" className={`gap-1 ${report.trend === 'Up' ? 'text-emerald-600 border-emerald-200 bg-emerald-50' : report.trend === 'Down' ? 'text-red-600 border-red-200 bg-red-50' : 'text-slate-600 bg-slate-100'}`}>
                                        {report.trend === 'Up' && <TrendingUp className="w-3 h-3" />}
                                        {report.trend === 'Down' && <TrendingDown className="w-3 h-3" />}
                                        {report.trend === 'Stable' && <Minus className="w-3 h-3" />}
                                        {report.trend}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                                    <div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase">India's Rank</p>
                                        <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{report.indiaRank}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase">Topper</p>
                                        <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">{report.topRank}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">Key Findings</p>
                                    <ul className="space-y-1">
                                        {report.keyFindings.map((finding, i) => (
                                            <li key={i} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2">
                                                <div className="w-1 h-1 rounded-full bg-slate-400 mt-1.5" />
                                                {finding}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
