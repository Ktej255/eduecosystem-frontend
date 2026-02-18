"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, ArrowRight } from "lucide-react";
import Link from "next/link";
import PomodoroTimer from "./PomodoroTimer";

export default function FocusTimerWidget() {
    const [showTimer, setShowTimer] = useState(false);

    if (showTimer) {
        return (
            <div className="h-full">
                <PomodoroTimer
                    duration={1500}
                    onComplete={() => setShowTimer(false)}
                    sessionNumber={1}
                    totalSessions={1}
                    isStrict={false}
                />
            </div>
        );
    }

    return (
        <Card className="h-full bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border-orange-200 dark:border-orange-800 transition-all hover:shadow-md">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="p-3 bg-white dark:bg-orange-950/50 rounded-full shadow-sm">
                    <Timer className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-800 dark:text-gray-200">Ready to Focus?</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Start a quick 25-minute session</p>
                </div>
                <Button
                    onClick={() => setShowTimer(true)}
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                    Start Timer
                </Button>
                <Link href="/student/batch1-1" className="text-xs text-orange-600 hover:underline flex items-center mt-2">
                    Go to Full Session View <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
            </CardContent>
        </Card>
    );
}
