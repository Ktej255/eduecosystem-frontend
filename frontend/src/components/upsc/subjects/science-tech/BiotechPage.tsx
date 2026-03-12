"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Dna, Microscope, BookOpen } from "lucide-react";
import Link from 'next/link';
import { BIOTECH_CONTENT } from './data/biotech-content';
import ReactMarkdown from 'react-markdown';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function BiotechPage() {
    return (
        <div className="min-h-screen bg-muted dark:bg-black">
            {/* Header */}
            <div className="bg-card border-b border-border sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/student/upsc/science-tech">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold flex items-center gap-2 text-rose-700 dark:text-rose-400">
                                <Dna className="h-5 w-5" />
                                {BIOTECH_CONTENT.title}
                            </h1>
                            <p className="text-xs text-muted-foreground">{BIOTECH_CONTENT.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Navigation Sidebar */}
                <div className="md:col-span-1 space-y-4">
                    <Card className="top-24 sticky">
                        <CardHeader>
                            <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Key Topics</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2 p-4 pt-0">
                            {BIOTECH_CONTENT.sections.map(sec => (
                                <a key={sec.id} href={`#${sec.id}`} className="block text-sm font-medium text-muted-foreground hover:text-rose-600 dark:hover:text-rose-400 p-2 rounded-lg hover:bg-muted dark:hover:bg-slate-800 transition-colors">
                                    {sec.title}
                                </a>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Placeholder for DNA Viz */}
                    <Card className="bg-rose-50 dark:bg-rose-900/10 border-rose-100 dark:border-rose-900/30">
                        <CardContent className="p-6 text-center">
                            <Microscope className="h-12 w-12 text-rose-400 mx-auto mb-4 opacity-50" />
                            <h3 className="text-sm font-bold text-rose-800 dark:text-rose-300">New Simulation Coming</h3>
                            <p className="text-xs text-rose-600 dark:text-rose-400 mt-1">Interactive DNA Helix & CRISPR tool.</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content Area */}
                <div className="md:col-span-2 space-y-8">
                    {BIOTECH_CONTENT.sections.map(sec => (
                        <section key={sec.id} id={sec.id} className="scroll-mt-24">
                            <Card className="overflow-hidden border-t-4 border-t-rose-500">
                                <CardHeader className="bg-muted/50 pb-3">
                                    <CardTitle className="flex items-center gap-2 text-lg">
                                        <BookOpen className="h-5 w-5 text-rose-500" />
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
    );
}
