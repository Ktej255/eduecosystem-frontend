"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Rocket, Orbit, BookOpen } from "lucide-react";
import Link from 'next/link';
import SpaceOrbitViz from '@/components/batch1/science-tech/visualizations/SpaceOrbitViz';
import { ORIGIN_OF_UNIVERSE_CONTENT } from './content/universe-data';
import ReactMarkdown from 'react-markdown';

export default function UniversePage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30">
            {/* Header */}
            <div className="bg-slate-900/50 border-b border-slate-800 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/student/batch1/geography">
                            <Button variant="ghost" size="icon" className="hover:bg-slate-800 text-slate-300">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold flex items-center gap-2 text-indigo-400">
                                <Orbit className="h-5 w-5" />
                                {ORIGIN_OF_UNIVERSE_CONTENT.title}
                            </h1>
                            <p className="text-xs text-muted-foreground">{ORIGIN_OF_UNIVERSE_CONTENT.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 space-y-12">
                {/* Visualization Section */}
                <section>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold flex items-center gap-2 text-indigo-300">
                            <Rocket className="h-5 w-5" />
                            Interactive Cosmos
                        </h2>
                        <span className="text-xs px-2 py-1 bg-indigo-900/50 text-indigo-300 rounded-full border border-indigo-500/30">
                            3D Simulation
                        </span>
                    </div>
                    {/* Reusing SpaceOrbitViz for Universe Context - Ideally would be a Big Bang Viz but SpaceOrbit serves as 'Cosmic Context' */}
                    <div className="h-[500px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 relative group">
                        <div className="absolute inset-0 z-0">
                            <SpaceOrbitViz />
                        </div>
                        {/* Overlay Hint */}
                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded-lg text-xs text-slate-300 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                            Drag to rotate • Scroll to zoom
                        </div>
                    </div>
                </section>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Navigation Sidebar */}
                    <div className="md:col-span-1 space-y-4">
                        <Card className="sticky top-24 bg-slate-900 border-slate-800">
                            <CardHeader>
                                <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Topics</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 p-4 pt-0">
                                {ORIGIN_OF_UNIVERSE_CONTENT.sections.map(sec => (
                                    <a key={sec.id} href={`#${sec.id}`} className="block text-sm font-medium text-muted-foreground hover:text-indigo-400 p-2 rounded-lg hover:bg-slate-800 transition-colors">
                                        {sec.title}
                                    </a>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-2 space-y-10">
                        {ORIGIN_OF_UNIVERSE_CONTENT.sections.map(sec => (
                            <section key={sec.id} id={sec.id} className="scroll-mt-24">
                                <Card className="overflow-hidden border-0 bg-transparent">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 bg-indigo-500/10 rounded-lg">
                                            <BookOpen className="h-5 w-5 text-indigo-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-100">{sec.title}</h3>
                                    </div>

                                    <div className="space-y-6">
                                        {sec.content.map((block: any) => (
                                            <div key={block.id}>
                                                {block.type === 'text' && (
                                                    <div className="prose prose-invert max-w-none text-slate-300">
                                                        <ReactMarkdown>{block.content}</ReactMarkdown>
                                                    </div>
                                                )}
                                                {block.type === 'image' && (
                                                    <div className="relative rounded-xl overflow-hidden border border-slate-800 my-4">
                                                        <img src={block.content} alt={block.alt} className="w-full h-auto object-cover" />
                                                        <div className="bg-black/50 p-2 text-xs text-muted-foreground italic text-center backdrop-blur-sm absolute bottom-0 w-full">
                                                            {block.caption}
                                                        </div>
                                                    </div>
                                                )}
                                                {block.type === 'callout' && (
                                                    <div className="bg-indigo-900/20 border border-indigo-500/30 p-4 rounded-xl text-indigo-200 text-sm my-4">
                                                        <ReactMarkdown>{block.content}</ReactMarkdown>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mt-8" />
                                </Card>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
