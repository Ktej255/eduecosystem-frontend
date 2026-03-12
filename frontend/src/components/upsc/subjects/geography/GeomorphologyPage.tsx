"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Mountain, Layers, Database } from "lucide-react";
import Link from 'next/link';
import { GEOMORPHOLOGY_CONTENT } from './content/geomorphology-data';
import ReactMarkdown from 'react-markdown';
import PlateTectonicsViz from './3d/simulations/PlateTectonicsViz';

export default function GeomorphologyPage() {
    return (
        <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100">
            {/* Header */}
            <div className="bg-stone-100 dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/student/upsc/geography">
                            <Button variant="ghost" size="icon" className="hover:bg-stone-200 dark:hover:bg-stone-800">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold flex items-center gap-2 text-stone-700 dark:text-stone-300">
                                <Mountain className="h-5 w-5 text-amber-600" />
                                {GEOMORPHOLOGY_CONTENT.title}
                            </h1>
                            <p className="text-xs text-stone-500">{GEOMORPHOLOGY_CONTENT.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
                {/* Visualization Section */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold flex items-center gap-2 text-amber-700 dark:text-amber-500">
                            <Layers className="h-5 w-5" />
                            Tectonic Simulation
                        </h2>
                    </div>
                    {/* Reusing PlateTectonicsViz */}
                    <div className="h-[500px] rounded-2xl overflow-hidden border border-stone-300 dark:border-stone-800 bg-black relative">
                        <PlateTectonicsViz />
                    </div>
                </section>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Navigation Sidebar */}
                    <div className="md:col-span-1 space-y-4">
                        <Card className="sticky top-24 bg-card dark:bg-stone-900 border-stone-200 dark:border-stone-800">
                            <CardHeader>
                                <CardTitle className="text-sm uppercase tracking-wider text-stone-400">Chapters</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 p-4 pt-0">
                                {GEOMORPHOLOGY_CONTENT.sections.map(sec => (
                                    <a key={sec.id} href={`#${sec.id}`} className="block text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-amber-600 border-l-2 border-transparent hover:border-amber-500 pl-2 transition-all">
                                        {sec.title}
                                    </a>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-10">
                        {GEOMORPHOLOGY_CONTENT.sections.map(sec => (
                            <section key={sec.id} id={sec.id} className="scroll-mt-24">
                                <Card className="overflow-hidden border-stone-200 dark:border-stone-800 shadow-sm">
                                    <CardHeader className="bg-stone-100 dark:bg-stone-900 pb-3 border-b border-stone-200 dark:border-stone-800">
                                        <CardTitle className="flex items-center gap-2 text-lg">
                                            <Database className="h-5 w-5 text-amber-500" />
                                            {sec.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <div className="space-y-6">
                                            {sec.content.map((block: any) => (
                                                <div key={block.id} className="prose dark:prose-invert max-w-none text-stone-700 dark:text-stone-300">
                                                    <ReactMarkdown>{block.content}</ReactMarkdown>
                                                </div>
                                            ))}
                                        </div>
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
