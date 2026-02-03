"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Calendar, Book } from "lucide-react";
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CurrentAffairsPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black p-4 md:p-8 text-slate-900 dark:text-slate-100">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href="/student/value-addition">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <FileText className="h-6 w-6 text-rose-600" />
                            PIB & India Year Book
                        </h1>
                        <p className="text-sm text-slate-500">Official data summaries for Prelims 2026.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* India Year Book */}
                    <Card className="col-span-1 md:col-span-2 dark:bg-[#0a0a0a] border-slate-200 dark:border-slate-800">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Book className="w-5 h-5 text-rose-600" /> India Year Book 2026 (Synopsis)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-900/20 cursor-pointer hover:shadow-md transition-all">
                                <div className="w-12 h-16 bg-rose-200 rounded flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-rose-800 dark:text-rose-200">Chapter 1: Land & People</h3>
                                    <p className="text-xs text-rose-600 dark:text-rose-300 mt-1 line-clamp-2">
                                        Demographic profile, Physical features, and National Symbols updates.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 cursor-pointer hover:shadow-md transition-all">
                                <div className="w-12 h-16 bg-slate-200 rounded flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-slate-800 dark:text-slate-200">Chapter 3: Polity</h3>
                                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                                        Cabinet Secretariat, Ministries, and recent constitutional amendments.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recent PIB Updates */}
                    <Card className="col-span-1 dark:bg-[#0a0a0a] border-slate-200 dark:border-slate-800">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-blue-600" /> PIB Year-End Review
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {['Min of Power', 'Min of Defence', 'Min of Earth Sciences'].map((min, i) => (
                                <div key={i} className="flex items-center justify-between p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer">
                                    <span className="text-sm font-medium">{min}</span>
                                    <Badge variant="outline" className="text-xs">Jan 2026</Badge>
                                </div>
                            ))}
                            <div className="pt-4 text-center">
                                <Button variant="link" className="text-blue-600">View Archive</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
