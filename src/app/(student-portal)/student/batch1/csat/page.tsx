"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Play, Calendar, BookOpen, FileQuestion } from "lucide-react";
import Link from "next/link";
import PomodoroCSATSession from "@/components/batch1/csat/PomodoroCSATSession";
import { getAvailableCSATDays, CSAT_SESSIONS } from "@/components/batch1/csat/data";

function CSATContent() {
    const searchParams = useSearchParams();
    const dayParam = searchParams.get('day');
    const pomodoroParam = searchParams.get('pomodoro');
    const day = dayParam ? parseInt(dayParam) : null;

    if (day && pomodoroParam === 'true') {
        return <PomodoroCSATSession day={day} />;
    }

    const availableDays = getAvailableCSATDays();

    return (
        <div className="space-y-6 max-w-6xl mx-auto p-4 md:p-6">
            <div className="flex items-center gap-4">
                <Link href="/student/batch1">
                    <Button variant="ghost" size="sm">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Batch 1
                    </Button>
                </Link>
            </div>

            <div>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">CSAT Preparation</h1>
                <p className="text-gray-600 dark:text-gray-400">Pomodoro-based 20-Day Series • Batch 1.1</p>
            </div>

            <Card className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0">
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h2 className="text-xl font-bold">20-Day CSAT Masterclass</h2>
                            <p className="text-amber-100">Intensive reading comprehension and logic sessions</p>
                        </div>
                        <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                            {availableDays.length} Days Available
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {availableDays.map((dayNum) => {
                    const session = CSAT_SESSIONS.find(s => s.day === dayNum);
                    return (
                        <Card key={dayNum} className="hover:shadow-lg transition-all border-2 hover:border-amber-500 overflow-hidden group">
                            <Link href={`/student/batch1/csat?day=${dayNum}&pomodoro=true`}>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 font-bold text-xl group-hover:scale-110 transition-transform">
                                            {dayNum}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg leading-tight line-clamp-1">{session?.title || `Day ${dayNum}`}</h3>
                                            <p className="text-xs text-gray-500 mt-1">CSAT Priority Topic</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <BookOpen className="h-4 w-4" /> {session?.passageCount || 4} Passages
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FileQuestion className="h-4 w-4" /> {session?.questionCount || 20} MCQs
                                        </span>
                                    </div>

                                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                                        <Play className="mr-2 h-4 w-4" /> Start Day {dayNum}
                                    </Button>
                                </div>
                            </Link>
                        </Card>
                    );
                })}

                {/* Placeholder for future days */}
                {Array.from({ length: 20 - availableDays.length }).map((_, idx) => (
                    <Card key={`locked-${idx}`} className="opacity-60 bg-gray-50 dark:bg-gray-900/50 border-dashed border-2">
                        <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center py-12">
                            <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-400 mb-2">
                                <Calendar className="h-6 w-6" />
                            </div>
                            <h3 className="font-medium text-gray-400">Day {availableDays.length + idx + 1}</h3>
                            <p className="text-xs text-gray-400 mt-1">Coming Soon</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default function CSATPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading CSAT...</div>}>
            <CSATContent />
        </Suspense>
    );
}
