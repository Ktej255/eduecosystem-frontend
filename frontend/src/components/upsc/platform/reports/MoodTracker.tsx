/* eslint-disable */
"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Frown, Meh, AlertCircle, Calendar as CalendarIcon } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface MoodEntry {
    date: string; // YYYY-MM-DD
    rating: number; // 1-5 (1=Terrible, 5=Great)
    tags: string[];
    note?: string;
    timestamp: number;
}

const MOOD_STORAGE_KEY = "batch1_mood_tracker_v1";

const MOOD_OPTIONS = [
    { value: 5, label: "Great", icon: Smile, color: "text-green-500 bg-green-50 overflow-hidden" },
    { value: 4, label: "Good", icon: Smile, color: "text-emerald-500 bg-emerald-50" },
    { value: 3, label: "Okay", icon: Meh, color: "text-yellow-500 bg-yellow-50" },
    { value: 2, label: "Stressed", icon: AlertCircle, color: "text-orange-500 bg-orange-50" },
    { value: 1, label: "Bad", icon: Frown, color: "text-red-500 bg-red-50" },
];

export default function MoodTracker() {
    const [entries, setEntries] = useState<MoodEntry[]>([]);
    const [todayMood, setTodayMood] = useState<number | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem(MOOD_STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            setEntries(parsed);

            // Check if logged today
            const today = new Date().toISOString().split("T")[0];
            const found = parsed.find((e: MoodEntry) => e.date === today);
            if (found) setTodayMood(found.rating);
        }
    }, []);

    const handleLogMood = React.useCallback((rating: number) => {
        const today = new Date().toISOString().split("T")[0];
        const newEntry: MoodEntry = {
            date: today,
            rating,
            tags: [], // Could add tag selector later
            timestamp: Date.now()
        };

        setEntries(prev => {
            const updated = [...prev.filter(e => e.date !== today), newEntry];
            localStorage.setItem(MOOD_STORAGE_KEY, JSON.stringify(updated));
            return updated;
        });
        setTodayMood(rating);

        toast({
            title: "Mood Logged",
            description: "Your mental state is part of the journey. Keep going!",
        });
    }, [toast]);

    const getAverageMood = () => {
        if (entries.length === 0) return 0;
        const sum = entries.reduce((acc, curr) => acc + curr.rating, 0);
        return (sum / entries.length).toFixed(1);
    };

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Logger Card */}
                <Card className="border-indigo-100 dark:border-indigo-900 border-2">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Smile className="h-5 w-5 text-indigo-500" />
                            How are you feeling today?
                        </CardTitle>
                        <CardDescription>Tracking your emotional baseline during prep</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {todayMood ? (
                            <div className="text-center py-6">
                                <p className="text-muted-foreground mb-2">You logged for today:</p>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 font-bold text-lg">
                                    {MOOD_OPTIONS.find(m => m.value === todayMood)?.label}
                                </div>
                                <Button
                                    variant="link"
                                    className="text-xs text-muted-foreground block mx-auto mt-2"
                                    onClick={() => setTodayMood(null)}
                                >
                                    Change Log
                                </Button>
                            </div>
                        ) : (
                            <div className="flex justify-between gap-2">
                                {MOOD_OPTIONS.map(opt => (
                                    <button
                                        key={opt.value}
                                        onClick={() => handleLogMood(opt.value)}
                                        className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-xl transition-all hover:scale-105 ${opt.color} hover:shadow-md`}
                                    >
                                        <opt.icon className="h-6 w-6" />
                                        <span className="text-xs font-bold">{opt.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Stats Card */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CalendarIcon className="h-5 w-5 text-muted-foreground" />
                            Mood Trends
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-muted rounded-xl text-center">
                                <div className="text-2xl font-bold text-muted-foreground">{entries.length}</div>
                                <div className="text-xs text-muted-foreground uppercase font-bold">Days Logged</div>
                            </div>
                            <div className="p-4 bg-muted rounded-xl text-center">
                                <div className="text-2xl font-bold text-indigo-600">{getAverageMood()}/5</div>
                                <div className="text-xs text-muted-foreground uppercase font-bold">Avg Mood</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
