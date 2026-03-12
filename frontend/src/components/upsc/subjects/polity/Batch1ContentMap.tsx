"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle2, Circle, Clock, ChevronLeft, CalendarDays, Brain, BookOpen, Layers } from "lucide-react";
import Link from "next/link";
import { getDayContentSummary } from "../content-registry";
import { motion } from "framer-motion";

export default function Batch1ContentMap({ onBack }: { onBack?: () => void }) {
    // Generate days 1 to 100
    const days = Array.from({ length: 100 }, (_, i) => i + 1);

    // Group days into weeks (groups of 7)
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7));
    }

    const getContentStatus = (day: number) => {
        const summary = getDayContentSummary(day);
        const hasContent = summary.hasFlashcards || summary.mcqCount > 0 || summary.hasCSAT;

        // Define day titles/topics (Hardcoded for now based on what we know)
        let topic = "Upcoming";
        if (day === 1) topic = "Preamble & Union";
        if (day === 2) topic = "Citizenship";
        if (day === 3) topic = "Test (Day 1-2)";
        if (day === 4) topic = "Fundamental Rights I";
        if (day === 5) topic = "Fundamental Rights II";
        if (day === 6) topic = "Fundamental Rights III";
        if (day === 7) topic = "Fundamental Rights IV";
        if (day === 8) topic = "Revision & Test";
        if (day === 9) topic = "DPSP & Duties";
        if (day === 10) topic = "Mock Test 1";

        return { ...summary, hasContent, topic };
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
                        <CalendarDays className="h-8 w-8 text-blue-600" />
                        Syllabus Tracker & Content Map
                    </h2>
                    <p className="text-muted-foreground dark:text-muted-foreground mt-1">
                        Track your daily progress. content availability, and revision status.
                    </p>
                </div>
                {onBack ? (
                    <Button variant="outline" onClick={onBack}>
                        <ChevronLeft className="mr-2 h-4 w-4" /> Back to Polity Home
                    </Button>
                ) : (
                    <Link href="/student/upsc/polity">
                        <Button variant="outline">
                            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Polity Home
                        </Button>
                    </Link>
                )}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 p-4 bg-muted rounded-lg border border-border">
                <div className="flex items-center gap-2 text-sm font-medium">
                    <Badge variant="outline" className="bg-pink-100 text-pink-700 border-pink-200">FC</Badge>
                    <span>Flashcards</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                    <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">MCQ</Badge>
                    <span>Tests</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                    <Badge variant="outline" className="bg-amber-100 text-amber-700 border-amber-200">CSAT</Badge>
                    <span>CSAT</span>
                </div>
                <div className="ml-auto flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-green-500" /> Completed
                    <Circle className="h-4 w-4 ml-2" /> Pending
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {days.map((day) => {
                    const status = getContentStatus(day);
                    if (!status.hasContent && day > 10) return null; // Hide future empty days to avoid clutter, show first 10 at least

                    return (
                        <motion.div
                            key={day}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: Math.min(day * 0.05, 0.5) }}
                        >
                            <Card className={`h-full hover:shadow-lg transition-all duration-300 border-2 ${status.hasContent ? 'border-border hover:border-blue-400' : 'border-dashed border-border opacity-60'}`}>
                                <CardHeader className="pb-3">
                                    <div className="flex justify-between items-start">
                                        <Badge variant={status.hasContent ? "default" : "secondary"} className="mb-2">
                                            Day {day}
                                        </Badge>
                                        <Link href={`/student/upsc/cycle/1/day/${day}`}>
                                            <Button size="sm" variant="ghost" className="h-6 px-2 text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                                Open <ChevronRight className="h-3 w-3 ml-1" />
                                            </Button>
                                        </Link>
                                    </div>
                                    <CardTitle className="text-lg font-bold text-foreground line-clamp-1">
                                        {status.topic}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {/* Content Indicators */}
                                        <div className="flex flex-wrap gap-2">
                                            {status.hasFlashcards ? (
                                                <Badge variant="outline" className="bg-pink-50 text-pink-700 border-pink-200 flex items-center gap-1">
                                                    <Layers className="h-3 w-3" /> {status.flashcardCount} Cards
                                                </Badge>
                                            ) : (
                                                <span className="text-xs text-muted-foreground flex items-center gap-1 opacity-50">
                                                    <Layers className="h-3 w-3" /> No FC
                                                </span>
                                            )}

                                            {status.mcqCount > 0 ? (
                                                <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 flex items-center gap-1">
                                                    <Brain className="h-3 w-3" /> {status.mcqCount} Qs
                                                </Badge>
                                            ) : (
                                                <span className="text-xs text-muted-foreground flex items-center gap-1 opacity-50">
                                                    <Brain className="h-3 w-3" /> No Test
                                                </span>
                                            )}

                                            {status.hasCSAT && (
                                                <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 flex items-center gap-1">
                                                    <BookOpen className="h-3 w-3" /> CSAT
                                                </Badge>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>

            <div className="text-center p-8 text-muted-foreground">
                <p>More content is being added daily!</p>
            </div>
        </div>
    );
}

function ChevronRight({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    );
}
