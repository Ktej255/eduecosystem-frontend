"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ThermometerSun, BookOpen } from "lucide-react";
import Link from 'next/link';
import { CLIMATE_CONTENT } from './data/climate-change-content';
import CarbonCycleViz from './visualizations/CarbonCycleViz';
import ReactMarkdown from 'react-markdown';

export default function ClimateChangePage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black">
            {/* Header */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/student/batch1/environment">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold flex items-center gap-2 text-orange-900 dark:text-orange-100">
                                <ThermometerSun className="h-5 w-5 text-orange-600" />
                                {CLIMATE_CONTENT.title}
                            </h1>
                            <p className="text-xs text-slate-500">{CLIMATE_CONTENT.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
                {/* Visualization Section */}
                <section>
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-orange-800 dark:text-orange-200">
                        <span className="w-1 h-6 bg-orange-600 rounded-full"></span>
                        Interactive Carbon Cycle
                    </h2>
                    <CarbonCycleViz />
                </section>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Navigation Sidebar */}
                    <div className="md:col-span-1 space-y-4">
                        <Card className="sticky top-24">
                            <CardHeader>
                                <CardTitle className="text-sm uppercase tracking-wider text-slate-500">Key Topics</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 p-4 pt-0">
                                {CLIMATE_CONTENT.sections.map(sec => (
                                    <a key={sec.id} href={`#${sec.id}`} className="block text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 p-2 rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
                                        {sec.title}
                                    </a>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-8">
                        {CLIMATE_CONTENT.sections.map(sec => (
                            <section key={sec.id} id={sec.id} className="scroll-mt-24">
                                <Card className="overflow-hidden border-t-4 border-t-orange-500">
                                    <CardHeader className="bg-orange-50 dark:bg-orange-900/30 pb-3">
                                        <CardTitle className="flex items-center gap-2 text-lg">
                                            <BookOpen className="h-5 w-5 text-orange-500" />
                                            {sec.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6 prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                                        <ReactMarkdown>{sec.content}</ReactMarkdown>
                                    </CardContent>
                                </Card>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
