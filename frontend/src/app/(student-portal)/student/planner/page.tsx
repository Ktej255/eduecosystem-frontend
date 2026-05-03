"use client";

import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar as CalendarIcon, Lock, Loader2 } from "lucide-react";
import Link from "next/link";
import { plannerService, CalendarDay } from "@/services/plannerService";

// TRIAL MODE: Set to false for production to enforce server-side unlocking logic
const TRIAL_MODE = false;

interface MonthGroup {
    name: string;
    year: number;
    days: CalendarDay[];
    status: "completed" | "ongoing" | "locked";
}

export default function PlannerPage() {
    const [calendarData, setCalendarData] = useState<CalendarDay[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedMonthIndex, setSelectedMonthIndex] = useState(0);

    useEffect(() => {
        const fetchCalendar = async () => {
            try {
                setLoading(true);
                const response = await plannerService.getCalendarOverview();
                if (response.success) {
                    setCalendarData(response.data);
                } else {
                    setError(response.message || "Failed to load planner data");
                }
            } catch (err) {
                console.error("Error fetching calendar:", err);
                setError("An unexpected error occurred while loading your planner.");
            } finally {
                setLoading(false);
            }
        };

        fetchCalendar();
    }, []);

    // Group days by month
    const monthlyGroups = useMemo(() => {
        if (!calendarData.length) return [];

        const groups: { [key: string]: MonthGroup } = {};
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        calendarData.forEach(day => {
            const date = new Date(day.date);
            const monthName = monthNames[date.getMonth()];
            const year = date.getFullYear();
            const key = `${monthName} ${year}`;

            if (!groups[key]) {
                groups[key] = {
                    name: monthName,
                    year: year,
                    days: [],
                    status: "ongoing" // Default
                };
            }
            groups[key].days.push(day);
        });

        const sortedGroups = Object.values(groups);
        
        // Simple status calculation for UI
        sortedGroups.forEach(group => {
            const allCompleted = group.days.every(d => d.is_completed);
            const anyUnlocked = group.days.some(d => d.is_unlocked);
            
            if (allCompleted) group.status = "completed";
            else if (anyUnlocked) group.status = "ongoing";
            else group.status = "locked";
        });

        return sortedGroups;
    }, [calendarData]);

    const currentGroup = monthlyGroups[selectedMonthIndex];

    const getFirstDayOfMonth = (year: number, month: number) => {
        return new Date(year, month, 1).getDay();
    };

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="text-muted-foreground animate-pulse">Synchronizing your 40-Day Revision Plan...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4 p-6">
                <div className="bg-destructive/10 p-4 rounded-full">
                    <Lock className="h-12 w-12 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Access Restricted</h2>
                <p className="text-muted-foreground text-center max-w-md">{error}</p>
                <Button onClick={() => window.location.reload()}>Try Again</Button>
            </div>
        );
    }

    if (!currentGroup) return null;

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthIdx = monthNames.indexOf(currentGroup.name);
    const firstDay = getFirstDayOfMonth(currentGroup.year, monthIdx);

    return (
        <div className="max-w-[1400px] mx-auto space-y-6 p-4 md:p-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">40-Day RAS Revision Planner</h1>
                    <p className="text-muted-foreground dark:text-muted-foreground">Server-verified progress tracking — Unlock your path to success day by day.</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 text-sm font-medium">History</span>
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 text-sm font-medium">Geography</span>
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 text-sm font-medium">Polity</span>
                    <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 text-sm font-medium">Economy</span>
                </div>
            </div>

            {/* Month Tabs */}
            <div className="flex flex-wrap gap-2">
                {monthlyGroups.map((group, idx) => (
                    <Button
                        key={`${group.name}-${group.year}`}
                        variant={selectedMonthIndex === idx ? "default" : "outline"}
                        onClick={() => setSelectedMonthIndex(idx)}
                        className="relative"
                        disabled={group.status === "locked" && !TRIAL_MODE}
                    >
                        {group.name} {group.year}
                        {group.status === "completed" && (
                            <CheckCircle className="ml-2 h-4 w-4 text-green-500" />
                        )}
                        {group.status === "ongoing" && (
                            <span className="ml-2 w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        )}
                        {group.status === "locked" && (
                            <Lock className="ml-2 h-4 w-4 text-muted-foreground" />
                        )}
                    </Button>
                ))}
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-2">
                {currentGroup.status === "completed" ? (
                    <span className="px-4 py-2 rounded-lg bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 font-semibold flex items-center gap-2">
                        <CheckCircle className="h-5 w-5" />
                        Month Completed
                    </span>
                ) : currentGroup.status === "ongoing" ? (
                    <span className="px-4 py-2 rounded-lg bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 font-semibold flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5" />
                        Target Month
                    </span>
                ) : (
                    <span className="px-4 py-2 rounded-lg bg-muted text-foreground/30 dark:text-muted-foreground font-semibold flex items-center gap-2">
                        <Lock className="h-5 w-5" />
                        Locked Content
                    </span>
                )}
            </div>

            {/* Calendar Grid */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">{currentGroup.name} {currentGroup.year}</CardTitle>
                </CardHeader>
                <CardContent className="p-2 md:p-6">
                    {/* Days of Week Header */}
                    <div className="grid grid-cols-7 gap-1 md:gap-2 mb-2">
                        {daysOfWeek.map(day => (
                            <div key={day} className="text-center font-semibold text-xs md:text-sm text-muted-foreground p-2 bg-muted/50 rounded">
                                {day.slice(0, 3)}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Days */}
                    <div className="grid grid-cols-7 gap-1 md:gap-2">
                        {/* Empty cells for days before month starts */}
                        {Array.from({ length: firstDay }).map((_, i) => (
                            <div key={`empty-${i}`} className="aspect-square"></div>
                        ))}

                        {/* Actual days */}
                        {currentGroup.days.map((day) => {
                            const dateObj = new Date(day.date);
                            const displayDate = dateObj.getDate();
                            const isUnlocked = day.is_unlocked || TRIAL_MODE;
                            const isCompleted = day.is_completed;

                            const dayHref = `/student/planner/daily-schedule/${day.date}`;

                            const dayContent = (
                                <div className={`h-full rounded-lg p-1 md:p-2 ${isUnlocked ? 'bg-card hover:ring-2 hover:ring-primary cursor-pointer' : 'bg-muted/30 opacity-50 cursor-not-allowed'} border transition-all flex flex-col justify-between relative`}>
                                    {!isUnlocked && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/5 rounded-lg">
                                            <Lock className="h-5 w-5 text-muted-foreground/50" />
                                        </div>
                                    )}
                                    <div className="flex justify-between items-start">
                                        <span className={`text-xs md:text-sm font-bold ${isCompleted ? 'text-green-600' : ''}`}>{displayDate}</span>
                                        {isCompleted && (
                                            <CheckCircle className="h-3 w-3 md:h-4 md:h-4 text-green-500" />
                                        )}
                                    </div>
                                    <div className="text-[10px] md:text-xs font-medium leading-tight line-clamp-2">
                                        {day.title}
                                    </div>
                                    {day.mastery_score !== undefined && isCompleted && (
                                        <div className="mt-1 h-1 w-full bg-muted rounded-full overflow-hidden">
                                            <div 
                                                className={`h-full ${day.mastery_score > 70 ? 'bg-green-500' : day.mastery_score > 40 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                                                style={{ width: `${day.mastery_score}%` }}
                                            />
                                        </div>
                                    )}
                                </div>
                            );

                            return isUnlocked ? (
                                <Link
                                    key={day.date}
                                    href={dayHref}
                                    className="aspect-square"
                                >
                                    {dayContent}
                                </Link>
                            ) : (
                                <div
                                    key={day.date}
                                    className="aspect-square"
                                >
                                    {dayContent}
                                </div>
                            );
                        })}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

