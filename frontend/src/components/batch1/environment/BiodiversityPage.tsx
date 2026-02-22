"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Sprout, BookOpen } from "lucide-react";
import Link from 'next/link';
import { BIODIVERSITY_CONTENT } from './data/biodiversity-content';
import FoodWebViz from './visualizations/FoodWebViz';
import ReactMarkdown from 'react-markdown';

export default function BiodiversityPage() {
    return (
        <div className="min-h-screen bg-muted dark:bg-black">
            {/* Header */}
            <div className="bg-card border-b border-border sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/student/batch1/environment">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold flex items-center gap-2 text-emerald-900 dark:text-emerald-100">
                                <Sprout className="h-5 w-5 text-emerald-600" />
                                {BIODIVERSITY_CONTENT.title}
                            </h1>
                            <p className="text-xs text-muted-foreground">{BIODIVERSITY_CONTENT.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
                {/* Visualization Section */}
                <section>
                    <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-emerald-800 dark:text-emerald-200">
                        <span className="w-1 h-6 bg-emerald-600 rounded-full"></span>
                        Interactive Food Web
                    </h2>
                    <FoodWebViz />
                </section>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Navigation Sidebar */}
                    <div className="md:col-span-1 space-y-4">
                        <Card className="sticky top-24">
                            <CardHeader>
                                <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Key Topics</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 p-4 pt-0">
                                {BIODIVERSITY_CONTENT.sections.map(sec => (
                                    <a key={sec.id} href={`#${sec.id}`} className="block text-sm font-medium text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors">
                                        {sec.title}
                                    </a>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-8">
                        {BIODIVERSITY_CONTENT.sections.map(sec => (
                            <section key={sec.id} id={sec.id} className="scroll-mt-24">
                                <Card className="overflow-hidden border-t-4 border-t-emerald-500">
                                    <CardHeader className="bg-emerald-50 dark:bg-emerald-900/30 pb-3">
                                        <CardTitle className="flex items-center gap-2 text-lg">
                                            <BookOpen className="h-5 w-5 text-emerald-500" />
                                            {sec.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6 prose dark:prose-invert max-w-none text-muted-foreground">
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
