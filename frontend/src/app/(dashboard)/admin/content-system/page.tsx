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
import { LAXMIKANTH_CHAPTERS } from '@/components/batch1/polity/data/polity-schedule-data';
import Link from 'next/link';

// Mock data for content status (simulated)
const CONTENT_STATUS = [
    { week: 1, status: 'complete', missing: [] },
    { week: 2, status: 'partial', missing: ['Flashcards: Week 2 Day 3', 'MCQs: Week 2 Day 4'] },
    { week: 3, status: 'missing', missing: ['All Content'] }
];

export default function ContentSystemDashboard() {
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
                <Card className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            Week 1 Content
                        </CardTitle>
                        <CardDescription>Current Week</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-sm text-green-700 font-medium bg-green-50 p-2 rounded">
                            Status: Ready for Students
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-yellow-500">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-yellow-500" />
                            Week 2 Content
                        </CardTitle>
                        <CardDescription>Upcoming (Starts Jan 19)</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-sm text-yellow-700 font-medium bg-yellow-50 p-2 rounded mb-2">
                            Status: Partially Complete
                        </div>
                        <p className="text-xs text-gray-500">Missing: Flashcards (W2D3), MCQs (W2D4)</p>
                    </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-500">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-red-500" />
                            Week 3 Content
                        </CardTitle>
                        <CardDescription>Future (Starts Jan 26)</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-sm text-red-700 font-medium bg-red-50 p-2 rounded mb-2">
                            Status: Not Started
                        </div>
                        <p className="text-xs text-gray-500">Action: Plan topics & subtopics</p>
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
