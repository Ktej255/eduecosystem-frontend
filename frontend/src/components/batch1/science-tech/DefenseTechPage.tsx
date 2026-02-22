"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Shield, BookOpen, MonitorPlay, Crosshair } from "lucide-react";
import Link from 'next/link';
import DefenseTechViz from './visualizations/DefenseTechViz'; // Reuse existing visualization
import { DEFENSE_TECH_CONTENT } from './data/defense-tech-content';
import ReactMarkdown from 'react-markdown';

export default function DefenseTechPage() {
    return (
        <div className="min-h-screen bg-muted dark:bg-black">
            {/* Header */}
            <div className="bg-card border-b border-border sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/student/batch1/science-tech">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold flex items-center gap-2 text-indigo-900 dark:text-indigo-100">
                                <Shield className="h-5 w-5 text-indigo-600" />
                                {DEFENSE_TECH_CONTENT.title}
                            </h1>
                            <p className="text-xs text-muted-foreground">{DEFENSE_TECH_CONTENT.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <Tabs defaultValue="learn" className="space-y-6">
                    <TabsList className="bg-card border border-border p-1">
                        <TabsTrigger value="learn" className="flex items-center gap-2 data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-700">
                            <BookOpen className="h-4 w-4" /> Defense Notes
                        </TabsTrigger>
                        <TabsTrigger value="sim" className="flex items-center gap-2 data-[state=active]:bg-indigo-50 data-[state=active]:text-indigo-700">
                            <MonitorPlay className="h-4 w-4" /> Missile Lab
                        </TabsTrigger>
                    </TabsList>

                    {/* Learning Content */}
                    <TabsContent value="learn">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Navigation Sidebar */}
                            <div className="md:col-span-1 space-y-4">
                                <Card className="top-24 sticky">
                                    <CardHeader>
                                        <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">Topics</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-2 p-4 pt-0">
                                        {DEFENSE_TECH_CONTENT.sections.map(sec => (
                                            <a key={sec.id} href={`#${sec.id}`} className="block text-sm font-medium text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 p-2 rounded-lg hover:bg-muted dark:hover:bg-slate-800 transition-colors">
                                                {sec.title}
                                            </a>
                                        ))}
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Main Content Area */}
                            <div className="md:col-span-2 space-y-8">
                                {DEFENSE_TECH_CONTENT.sections.map(sec => (
                                    <section key={sec.id} id={sec.id} className="scroll-mt-24">
                                        <Card className="overflow-hidden border-l-4 border-l-red-600">
                                            <CardHeader className="bg-muted/50 pb-3">
                                                <CardTitle className="flex items-center gap-2">
                                                    <Crosshair className="h-5 w-5 text-red-500" />
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
                    </TabsContent>

                    {/* Simulation Content */}
                    <TabsContent value="sim" className="min-h-[600px] border rounded-2xl overflow-hidden shadow-xl bg-slate-900">
                        <DefenseTechViz />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
