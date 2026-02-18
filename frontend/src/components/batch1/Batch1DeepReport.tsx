"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FocusAnalyticsDashboard from "./FocusAnalyticsDashboard";
import WeakTopicsAlert from "@/components/batch1-1/reports/WeakTopicsAlert";
import SubjectAnalytics from "@/components/batch1-1/reports/SubjectAnalytics";
import MoodTracker from "@/components/batch1-1/reports/MoodTracker";
import { Brain, TrendingUp, AlertTriangle, Smile } from "lucide-react";

export default function Batch1DeepReport() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Deep Performance Report</h2>
                    <p className="text-gray-500 dark:text-gray-400">Comprehensive analysis of your Batch 1 progress</p>
                </div>
            </div>

            {/* Critical Alerts Section */}
            <WeakTopicsAlert />

            <Tabs defaultValue="focus" className="space-y-4">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:w-[600px]">
                    <TabsTrigger value="focus" className="flex items-center gap-2">
                        <Brain className="w-4 h-4" /> Focus
                    </TabsTrigger>
                    <TabsTrigger value="subjects" className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" /> Subjects
                    </TabsTrigger>
                    <TabsTrigger value="mood" className="flex items-center gap-2">
                        <Smile className="w-4 h-4" /> Mood
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="focus" className="space-y-4">
                    <FocusAnalyticsDashboard />
                </TabsContent>

                <TabsContent value="subjects" className="space-y-4">
                    <SubjectAnalytics />
                </TabsContent>

                <TabsContent value="mood" className="space-y-4">
                    <MoodTracker />
                </TabsContent>
            </Tabs>
        </div>
    );
}
