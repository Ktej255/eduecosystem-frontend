"use client";

import EnergyLogger from "@/components/batch1-1/wellness/EnergyLogger";
import { ArrowLeft, Heart, Feather, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WellnessHubPage() {
    return (
        <div className="container mx-auto p-6 max-w-7xl">
            <div className="mb-8">
                <Link
                    href="/student/batch1-1"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-indigo-600 mb-4 transition-colors"
                >
                    <ArrowLeft className="mr-1 h-4 w-4" /> Back to Dashboard
                </Link>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-300 dark:to-emerald-300 flex items-center gap-3">
                    <Heart className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                    Student Wellness Center
                </h1>
                <p className="text-muted-foreground dark:text-muted-foreground mt-2">
                    Balance your mind and body for peak academic performance.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Bio-Rhythm */}
                <div className="space-y-6">
                    <Card className="border-teal-100 dark:border-teal-900 shadow-md">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-teal-700 dark:text-teal-300">
                                <TrendingUp className="h-5 w-5" /> Bio-Rhythm Scheduler
                            </CardTitle>
                            <CardDescription>
                                Align your study tasks with your natural energy peaks.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <EnergyLogger />
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column: Tools Navigation */}
                <div className="space-y-6">
                    <Card className="bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/30 dark:to-gray-900 border-indigo-200 dark:border-indigo-800 shadow-sm hover:shadow-md transition-all">
                        <CardHeader>
                            <CardTitle className="text-indigo-800 dark:text-indigo-300 flex items-center gap-2">
                                <Feather className="h-6 w-6" /> Neuro-Canvas
                            </CardTitle>
                            <CardDescription>
                                Digital Graphotherapy for stress relief and focus.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                                Engage in mindful handwriting practice. Our velocity-sensitive ink engine mimics fluid dynamics to soothe your nervous system.
                            </p>
                            <Link href="/student/batch1-1/wellness/canvas">
                                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                                    Open Canvas
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="opacity-75 border-dashed border-border">
                        <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                            <h3 className="font-semibold text-muted-foreground mb-2">Meditation Zone</h3>
                            <p className="text-xs text-muted-foreground">Coming Soon in Phase 7b</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
