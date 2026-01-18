"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    FileText,
    Brain,
    Target,
    Calendar,
    AlertTriangle,
    CheckCircle2,
    Plus
} from 'lucide-react';
import Link from 'next/link';
import { LAXMIKANTH_CHAPTERS, ChapterSchedule } from '@/components/batch1/polity/data/polity-schedule-data';
import { POLITY_FLASHCARDS_DATA } from '@/components/batch1/polity/data/polity-flashcards-data';
import { POLITY_MCQS_DATA } from '@/components/batch1/polity/data/polity-mcqs-data';

// Helper to check status of a set of chapters
function getWeekStatus(chapters: ChapterSchedule[]) {
    const totalChapters = chapters.length;
    let readyChapters = 0;
    let partialChapters = 0;
    const missingDetails: string[] = [];

    chapters.forEach(ch => {
        // Check if any flashcards exist for this chapter ID
        const hasFlashcards = POLITY_FLASHCARDS_DATA.some(fc => fc.subtopicId.startsWith(`${ch.chapter}.`));
        const hasMCQs = POLITY_MCQS_DATA.some(mcq => mcq.subtopicId?.startsWith(`${ch.chapter}.`));

        if (hasFlashcards && hasMCQs) {
            readyChapters++;
        } else if (hasFlashcards || hasMCQs) {
            partialChapters++;
            if (!hasFlashcards) missingDetails.push(`Ex Ch ${ch.chapter}: Flashcards`);
            if (!hasMCQs) missingDetails.push(`Ex Ch ${ch.chapter}: MCQs`);
        } else {
            // Check if it's the very first chapter of the week to show specific info
            if (missingDetails.length < 3) missingDetails.push(`Ch ${ch.chapter}: All Content`);
        }
    });

    if (readyChapters === totalChapters && totalChapters > 0) return { status: 'complete', color: 'green', missing: [] };
    if (readyChapters > 0 || partialChapters > 0) return { status: 'partial', color: 'yellow', missing: missingDetails };
    return { status: 'missing', color: 'red', missing: ['All Content Missing'] };
}

export default function ContentSystemDashboard() {
    // Week 1: Indexes 0-6 (Intro Block)
    const week1Chapters = LAXMIKANTH_CHAPTERS.slice(0, 7);
    const week1Status = getWeekStatus(week1Chapters);

    // Week 2: Indexes 7-13 (Module 1)
    const week2Chapters = LAXMIKANTH_CHAPTERS.slice(7, 14);
    const week2Status = getWeekStatus(week2Chapters);

    // Week 3: Indexes 14-20 (Module 2 approx)
    const week3Chapters = LAXMIKANTH_CHAPTERS.slice(14, 21);
    const week3Status = getWeekStatus(week3Chapters);

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        Content Development System
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Manage and generate study content for Batch 1.1
                    </p>
                </div>
                <div className="flex gap-2">
                    <Button>
                        <Plus className="w-4 h-4 mr-2" /> New Content
                    </Button>
                </div>
            </div>

            {/* Status Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Week 1 */}
                <Card className={`border-l-4 border-l-${week1Status.color}-500`}>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                            <CheckCircle2 className={`w-5 h-5 text-${week1Status.color}-500`} />
                            Week 1 Content
                        </CardTitle>
                        <CardDescription>Current Week</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className={`text-sm text-${week1Status.color}-700 font-medium bg-${week1Status.color}-50 p-2 rounded mb-2`}>
                            Status: {week1Status.status === 'complete' ? 'Ready' : week1Status.status === 'partial' ? 'In Progress' : 'Not Started'}
                        </div>
                        {week1Status.missing.length > 0 && (
                            <p className="text-xs text-gray-500">Missing: {week1Status.missing.join(', ')}</p>
                        )}
                    </CardContent>
                </Card>

                {/* Week 2 */}
                <Card className={`border-l-4 border-l-${week2Status.color}-500`}>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                            <AlertTriangle className={`w-5 h-5 text-${week2Status.color}-500`} />
                            Week 2 Content
                        </CardTitle>
                        <CardDescription>Upcoming (Starts Jan 19)</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className={`text-sm text-${week2Status.color}-700 font-medium bg-${week2Status.color}-50 p-2 rounded mb-2`}>
                            Status: {week2Status.status === 'complete' ? 'Ready' : week2Status.status === 'partial' ? 'In Progress' : 'Not Started'}
                        </div>
                        {week2Status.missing.length > 0 && (
                            <p className="text-xs text-gray-500">Missing: {week2Status.missing.join(', ') + (week2Status.missing.length >= 3 ? '...' : '')}</p>
                        )}
                    </CardContent>
                </Card>

                {/* Week 3 */}
                <Card className={`border-l-4 border-l-${week3Status.color}-500`}>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Calendar className={`w-5 h-5 text-${week3Status.color}-500`} />
                            Week 3 Content
                        </CardTitle>
                        <CardDescription>Future (Starts Jan 26)</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className={`text-sm text-${week3Status.color}-700 font-medium bg-${week3Status.color}-50 p-2 rounded mb-2`}>
                            Status: {week3Status.status === 'complete' ? 'Ready' : week3Status.status === 'partial' ? 'In Progress' : 'Not Started'}
                        </div>
                        {week3Status.missing.length > 0 && (
                            <p className="text-xs text-gray-500">Missing: {week3Status.missing.join(', ').slice(0, 50) + '...'}</p>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Generators */}
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-8">
                Content Generators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link href="/admin/content-system/flashcards">
                    <Card className="hover:shadow-lg transition-all cursor-pointer h-full">
                        <CardHeader>
                            <Brain className="w-10 h-10 text-indigo-600 mb-2" />
                            <CardTitle>Flashcard Generator</CardTitle>
                            <CardDescription>
                                Create flip cards for specific chapters & subtopics
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button variant="outline" className="w-full">Open Generator</Button>
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/admin/content-system/mcqs">
                    <Card className="hover:shadow-lg transition-all cursor-pointer h-full">
                        <CardHeader>
                            <Target className="w-10 h-10 text-emerald-600 mb-2" />
                            <CardTitle>MCQ Generator</CardTitle>
                            <CardDescription>
                                Build comprehensive multiple choice questions
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button variant="outline" className="w-full">Open Generator</Button>
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/admin/content-system/planner">
                    <Card className="hover:shadow-lg transition-all cursor-pointer h-full">
                        <CardHeader>
                            <FileText className="w-10 h-10 text-blue-600 mb-2" />
                            <CardTitle>Weekly Planner</CardTitle>
                            <CardDescription>
                                Map chapters to days and assign subtopics
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button variant="outline" className="w-full">Open Planner</Button>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </div>
    );
}
