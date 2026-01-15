"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Calendar, Save } from 'lucide-react';
import Link from 'next/link';

export default function PlannerGeneratorPage() {
    return (
        <div className="p-6 max-w-7xl mx-auto space-y-6">
            <div className="flex items-center gap-4 mb-6">
                <Link href="/admin/content-system">
                    <Button variant="ghost">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        Weekly Planner Generator
                    </h1>
                    <p className="text-gray-500">
                        Configure weekly schedules and chapter mappings
                    </p>
                </div>
            </div>

            <Card className="border-dashed border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                <CardContent className="py-12 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                        <Calendar className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        Planner Generator Coming Soon
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
                        This tool will allow you to drag-and-drop chapters into weekly slots and auto-calculate Pomodoro sessions.
                    </p>
                    <Button disabled>
                        Initialize Planner Engine
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
