"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, Globe, BookOpen } from "lucide-react";
import Link from 'next/link';
import { GEO_TIME_SCALE_CONTENT, ORIGIN_OF_EARTH_CONTENT, EVOLUTION_SPHERES_CONTENT } from './content/earth-evolution-data';
import ReactMarkdown from 'react-markdown';

export default function EarthEvolutionPage() {
    const sections = [
        ...ORIGIN_OF_EARTH_CONTENT.sections, // Origin first
        ...EVOLUTION_SPHERES_CONTENT.sections, // Then Spheres
        ...GEO_TIME_SCALE_CONTENT.sections // Then Time Scale
    ];

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
                                <Clock className="h-5 w-5 text-teal-600" />
                                Evolution of Earth
                            </h1>
                            <p className="text-xs text-stone-500">From Nebular Hypothesis to Geological Time Scale.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Navigation Sidebar */}
                <div className="md:col-span-1 space-y-4">
                    <Card className="sticky top-24 bg-card dark:bg-stone-900 border-stone-200 dark:border-stone-800">
                        <CardHeader>
                            <CardTitle className="text-sm uppercase tracking-wider text-stone-400">Timeline</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 p-4 pt-0">
                            {sections.map(sec => (
                                <a key={sec.id} href={`#${sec.id}`} className="block text-sm font-medium text-stone-600 dark:text-stone-400 hover:text-teal-600 border-l-2 border-transparent hover:border-teal-500 pl-2 transition-all">
                                    {sec.title}
                                </a>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content */}
                <div className="md:col-span-2 space-y-10">
                    {sections.map(sec => (
                        <section key={sec.id} id={sec.id} className="scroll-mt-24">
                            <Card className="overflow-hidden border-stone-200 dark:border-stone-800 shadow-sm">
                                <CardHeader className="bg-stone-100 dark:bg-stone-900 pb-3 border-b border-stone-200 dark:border-stone-800">
                                    <CardTitle className="flex items-center gap-2 text-lg">
                                        <BookOpen className="h-5 w-5 text-teal-500" />
                                        {sec.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-6">
                                    <div className="space-y-6">
                                        {sec.content.map((block: any) => (
                                            <div key={block.id}>
                                                {block.type === 'text' && (
                                                    <div className="prose dark:prose-invert max-w-none text-stone-700 dark:text-stone-300">
                                                        <ReactMarkdown>{block.content}</ReactMarkdown>
                                                    </div>
                                                )}
                                                {block.type === 'image' && (
                                                    <div className="relative rounded-xl overflow-hidden border border-stone-200 dark:border-stone-700 my-4 group">
                                                        <img src={block.content} alt={block.alt} className="w-full h-64 object-cover transition-transform group-hover:scale-105" />
                                                        <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-sm p-2 text-xs text-white text-center">
                                                            {block.caption}
                                                        </div>
                                                    </div>
                                                )}
                                                {block.type === 'callout' && (
                                                    <div className="bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 p-4 rounded-xl text-teal-800 dark:text-teal-200 text-sm my-4 flex gap-3">
                                                        <Globe className="h-5 w-5 flex-shrink-0" />
                                                        <div className="prose dark:prose-invert text-sm max-w-none">
                                                            <ReactMarkdown>{block.content}</ReactMarkdown>
                                                        </div>
                                                    </div>
                                                )}
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
    );
}
