"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Calendar,
    Command,
    AlertTriangle,
    FileCode2,
    GitBranch,
    ChevronLeft,
    ChevronRight,
    Clock,
    CheckCircle2,
    Layers
} from 'lucide-react';
import { ACTION_LOG, getTodayDate, getActionsForDate } from '@/components/admin/data/action-log-data';
import Link from 'next/link';
import { LAXMIKANTH_CHAPTERS } from '@/components/batch1/polity/data/polity-schedule-data';
import { POLITY_FLASHCARDS_DATA } from '@/components/batch1/polity/data/polity-flashcards-data';
import { POLITY_MCQS_DATA } from '@/components/batch1/polity/data/polity-mcqs-data';

export default function AdminActionsPage() {
    const [selectedDate, setSelectedDate] = useState(getTodayDate());

    // Check Week 2 Status (Dynamic)
    // Week 2 starts Jan 19 covers Chapters 18, 31, 20... (Indices 7-13 in LAXMIKANTH_CHAPTERS)
    const week2Status = useMemo(() => {
        const week2Chapters = LAXMIKANTH_CHAPTERS.slice(7, 14); // Module 1
        let missingCount = 0;
        let missingItems: string[] = [];

        week2Chapters.forEach(ch => {
            const hasFlashcards = POLITY_FLASHCARDS_DATA.some(fc => fc.subtopicId?.startsWith(`${ch.chapter}.`));
            const hasMCQs = POLITY_MCQS_DATA.some(mcq => mcq.subtopicId?.startsWith(`${ch.chapter}.`));

            if (!hasFlashcards) {
                missingCount++;
                if (missingItems.length < 2) missingItems.push(`Flashcards Ch${ch.chapter}`);
            }
            if (!hasMCQs) {
                missingCount++;
                if (missingItems.length < 4) missingItems.push(`MCQs Ch${ch.chapter}`);
            }
        });

        const isComplete = missingCount === 0;

        return { isComplete, missingItems, missingCount };
    }, []);

    const currentMonth = useMemo(() => {
        const date = new Date(selectedDate);
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }, [selectedDate]);

    const todayActions = useMemo(() => getActionsForDate(selectedDate), [selectedDate]);

    // Generate calendar days for current month view
    const calendarDays = useMemo(() => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const days: { date: string; day: number; hasActions: boolean; isToday: boolean }[] = [];

        // Pad start with empty days
        const startPadding = firstDay.getDay(); // 0 = Sunday
        for (let i = 0; i < startPadding; i++) {
            days.push({ date: '', day: 0, hasActions: false, isToday: false });
        }

        // Add days of month
        for (let d = 1; d <= lastDay.getDate(); d++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            const hasActions = ACTION_LOG.some(a => a.date === dateStr);
            const isToday = dateStr === getTodayDate();
            days.push({ date: dateStr, day: d, hasActions, isToday });
        }

        return days;
    }, [currentMonth]);

    const navigateMonth = (direction: number) => {
        const newMonth = new Date(currentMonth);
        newMonth.setMonth(currentMonth.getMonth() + direction);
        setSelectedDate(newMonth.toISOString().split('T')[0]);
    };

    const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    return (
        <div className="p-6 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        Today&apos;s Action Log
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Track daily development progress and feature work
                    </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200">
                    <Clock className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">
                        {new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                </div>
            </div>

            {/* Weekly Readiness Alert (Dynamic) */}
            {!week2Status.isComplete ? (
                <Card className="mb-6 border-l-4 border-l-yellow-500 bg-yellow-50/50 dark:bg-yellow-900/10">
                    <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-full">
                                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                                    Week 2 Content Preparation Needed
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Upcoming content for Week 2 (starting Jan 19) is incomplete. Please generate missing Flashcards and MCQs.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {week2Status.missingItems.map((item, idx) => (
                                        <span key={idx} className="text-xs px-2 py-1 bg-white dark:bg-gray-800 border rounded text-gray-500">
                                            Missing: {item}
                                        </span>
                                    ))}
                                    {week2Status.missingCount > week2Status.missingItems.length && (
                                        <span className="text-xs px-2 py-1 text-gray-500">
                                            + {week2Status.missingCount - week2Status.missingItems.length} more...
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <Button variant="outline" className="border-yellow-200 text-yellow-700 hover:bg-yellow-100" asChild>
                            <Link href="/admin/content-system">Go to Content System</Link>
                        </Button>
                    </CardContent>
                </Card>
            ) : (
                <Card className="mb-6 border-l-4 border-l-green-500 bg-green-50/50 dark:bg-green-900/10">
                    <CardContent className="p-4 flex items-center gap-4">
                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                                Week 2 Content Ready
                            </h3>
                            <p className="text-sm text-gray-600">All flashcards and MCQs for next week are prepared.</p>
                        </div>
                    </CardContent>
                </Card>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left: Calendar */}
                <div>
                    <Card>
                        <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                                <Button variant="ghost" size="sm" onClick={() => navigateMonth(-1)}>
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <CardTitle className="text-base">{monthName}</CardTitle>
                                <Button variant="ghost" size="sm" onClick={() => navigateMonth(1)}>
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            {/* Day headers */}
                            <div className="grid grid-cols-7 gap-1 mb-2">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                                    <div key={d} className="text-center text-xs font-medium text-gray-500 py-1">
                                        {d}
                                    </div>
                                ))}
                            </div>
                            {/* Calendar grid */}
                            <div className="grid grid-cols-7 gap-1">
                                {calendarDays.map((day, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => day.date && setSelectedDate(day.date)}
                                        disabled={!day.date}
                                        className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all relative ${!day.date
                                            ? 'invisible'
                                            : day.date === selectedDate
                                                ? 'bg-indigo-600 text-white font-bold'
                                                : day.isToday
                                                    ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 font-bold'
                                                    : day.hasActions
                                                        ? 'bg-green-50 dark:bg-green-900/20 text-green-700 hover:bg-green-100'
                                                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                            }`}
                                    >
                                        {day.day || ''}
                                        {day.hasActions && day.date !== selectedDate && (
                                            <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-green-500" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Stats */}
                    <Card className="mt-4">
                        <CardContent className="p-4">
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-indigo-600">{ACTION_LOG.length}</div>
                                    <div className="text-xs text-indigo-700">Days Logged</div>
                                </div>
                                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
                                    <div className="text-2xl font-bold text-green-600">
                                        {ACTION_LOG.reduce((sum, a) => sum + a.features.length, 0)}
                                    </div>
                                    <div className="text-xs text-green-700">Features Built</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right: Day Details */}
                <div className="lg:col-span-2 space-y-4">
                    {todayActions ? (
                        <>
                            {/* Commands Section */}
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-base flex items-center gap-2 text-orange-600">
                                        <Command className="h-4 w-4" />
                                        Commands Given
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {todayActions.commands.map((cmd, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                                <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                                {cmd}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Features Section */}
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-base flex items-center gap-2 text-green-600">
                                        <Layers className="h-4 w-4" />
                                        Features Worked On
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {todayActions.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Files Modified */}
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-base flex items-center gap-2 text-blue-600">
                                        <FileCode2 className="h-4 w-4" />
                                        Files Modified
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {todayActions.filesModified.map((file, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded font-mono"
                                            >
                                                {file.split('/').pop()}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Deployments */}
                            {todayActions.deployments.length > 0 && (
                                <Card>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-base flex items-center gap-2 text-purple-600">
                                            <GitBranch className="h-4 w-4" />
                                            Deployments
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex gap-2">
                                            {todayActions.deployments.map((commit, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full font-mono"
                                                >
                                                    {commit}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </>
                    ) : (
                        <Card className="p-12 text-center">
                            <Calendar className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                            <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400">
                                No actions logged for this date
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                                Select a different date from the calendar
                            </p>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
}
