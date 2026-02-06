
"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
    Legend
} from 'recharts';
import { getHistoryProgressStore } from "@/lib/history-progress-store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollText, Landmark } from "lucide-react";

export default function SubjectAnalytics() {
    const [historyData, setHistoryData] = useState<any[]>([]);

    // Fetch History Progress
    useEffect(() => {
        const store = getHistoryProgressStore();
        // Convert 'chapters' object to array for chart
        // Need to be careful: store.chapters only has entries for TOUCHED chapters.
        // We want to show progress over time? Or just current status per chapter?
        // Let's show "Chapter Score" bar chart.

        const data = Object.values(store.chapters)
            .sort((a, b) => a.chapterId - b.chapterId)
            .map(c => ({
                chapter: `Ch ${c.chapterId}`,
                score: c.mcqScore || 0,
                status: c.completed ? 'Completed' : 'In Progress'
            }));

        setHistoryData(data);
    }, []);

    // Mock Polity Data (or fetch if store available)
    // Assuming Polity uses similar store or local storage keys
    const polityData = [
        { chapter: 'Ch 1', score: 85 },
        { chapter: 'Ch 2', score: 70 },
        { chapter: 'Ch 3', score: 92 },
        { chapter: 'Ch 4', score: 65 },
        { chapter: 'Ch 5', score: 88 },
    ];

    return (
        <Tabs defaultValue="history" className="space-y-6">
            <TabsList className="bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                <TabsTrigger value="history" className="rounded-lg data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800 flex gap-2">
                    <ScrollText className="w-4 h-4" /> History
                </TabsTrigger>
                <TabsTrigger value="polity" className="rounded-lg data-[state=active]:bg-cyan-100 data-[state=active]:text-cyan-800 flex gap-2">
                    <Landmark className="w-4 h-4" /> Polity
                </TabsTrigger>
            </TabsList>

            <TabsContent value="history">
                <Card>
                    <CardHeader>
                        <CardTitle>History: Modern India MCQ Performance</CardTitle>
                        <CardDescription>Accuracy per chapter based on Pomodoro sessions</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        {historyData.length > 0 ? (
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={historyData}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="chapter" fontSize={10} tickLine={false} axisLine={false} />
                                    <YAxis fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                        cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                                    />
                                    <Bar dataKey="score" fill="#d97706" radius={[4, 4, 0, 0]} name="Score %" />
                                </BarChart>
                            </ResponsiveContainer>
                        ) : (
                            <div className="h-full flex items-center justify-center text-gray-400">
                                No History data recorded yet.
                            </div>
                        )}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="polity">
                <Card>
                    <CardHeader>
                        <CardTitle>Polity Performance</CardTitle>
                        <CardDescription>Recent Chapter Accuracy</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={polityData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="chapter" fontSize={10} axisLine={false} tickLine={false} />
                                <YAxis domain={[0, 100]} fontSize={12} axisLine={false} tickLine={false} />
                                <Tooltip />
                                <Line type="monotone" dataKey="score" stroke="#0891b2" strokeWidth={3} dot={{ r: 4 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}
