"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function DrillAnalyticsStudentsPage() {
    return (
        <div className="container mx-auto p-6 max-w-7xl">
            <div className="mb-8">
                <Link
                    href="/admin/drill/analytics"
                    className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600 mb-4 transition-colors"
                >
                    <ArrowLeft className="mr-1 h-4 w-4" /> Back to Analytics
                </Link>
                <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-indigo-600" />
                    <h1 className="text-3xl font-bold">Student Analytics</h1>
                </div>
                <p className="text-gray-600 mt-2">View detailed drill performance by student.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5" />
                        Student Performance Overview
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-12 text-gray-500">
                        <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p className="text-lg font-medium">Student analytics coming soon</p>
                        <p className="text-sm">This feature is under development.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
