
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
import { getChapterReports, getSubjectTrendData, TrendDataPoint } from "@/lib/report-persistence";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollText, Landmark, TrendingUp, BarChart3 } from "lucide-react";

export default function SubjectAnalytics() {
    const [historyData, setHistoryData] = useState<{ chapter: string; score: number }[]>([]);
    const [polityData, setPolityData] = useState<{ chapter: string; score: number }[]>([]);
    const [trendData, setTrendData] = useState<Record<string, TrendDataPoint[]>>({});

    useEffect(() => {
        const loadData = async () => {
            // Fetch History Progress (Legacy Store)
            const histStore = getHistoryProgressStore();
            const hData = Object.values(histStore.chapters)
                .sort((a, b) => a.chapterId - b.chapterId)
                .map(c => ({
                    chapter: `Ch ${c.chapterId}`,
                    score: c.mcqScore || 0,
                }));
            setHistoryData(hData);

            // Fetch Polity Progress (New Universal Store)
            const pReports = await getChapterReports('polity');
            // Group by chapterId and get max accuracy
            const pMastery: Record<string | number, number> = {};
            pReports.forEach(r => {
                pMastery[r.chapterId] = Math.max(pMastery[r.chapterId] || 0, r.accuracy);
            });
            const pData = Object.entries(pMastery)
                .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
                .map(([chapterId, accuracy]) => ({
                    chapter: `Ch ${chapterId}`,
                    score: accuracy,
                }));
            setPolityData(pData);

            // Fetch Trend Data for both
            const [historyTrend, polityTrend] = await Promise.all([
                getSubjectTrendData('history'),
                getSubjectTrendData('polity')
            ]);

            setTrendData({
                history: historyTrend,
                polity: polityTrend
            });
        };
        loadData();
    }, []);

    const renderChapterChart = (data: { chapter: string; score: number }[], color: string, title: string) => (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" style={{ color }} />
                    {title}: Chapter Breakdown
                </CardTitle>
                <CardDescription>Accuracy per chapter (Highest attempt)</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
                {data.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                            <XAxis dataKey="chapter" fontSize={10} tickLine={false} axisLine={false} />
                            <YAxis fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
                            <Tooltip
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                cursor={{ fill: 'rgba(0,0,0,0.05)' }}
                            />
                            <Bar dataKey="score" fill={color} radius={[4, 4, 0, 0]} name="Accuracy %" />
                        </BarChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-2">
                        <BarChart3 className="w-8 h-8 opacity-20" />
                        <span>No chapter data recorded yet.</span>
                    </div>
                )}
            </CardContent>
        </Card>
    );

    const renderTrendChart = (data: TrendDataPoint[], color: string, title: string) => (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" style={{ color }} />
                    {title}: Performance Trend
                </CardTitle>
                <CardDescription>Accuracy progression over recent tests</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
                {data.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                            <XAxis dataKey="date" fontSize={10} axisLine={false} tickLine={false} />
                            <YAxis domain={[0, 100]} fontSize={12} axisLine={false} tickLine={false} />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="accuracy"
                                stroke={color}
                                strokeWidth={3}
                                dot={{ r: 4, fill: color }}
                                activeDot={{ r: 6 }}
                                name="Test Accuracy %"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="h-full flex flex-col items-center justify-center text-muted-foreground gap-2">
                        <TrendingUp className="w-8 h-8 opacity-20" />
                        <span>Not enough data to generate trend.</span>
                    </div>
                )}
            </CardContent>
        </Card>
    );

    return (
        <Tabs defaultValue="history" className="space-y-6">
            <TabsList className="bg-muted p-1 rounded-xl w-full md:w-auto">
                <TabsTrigger value="history" className="rounded-lg data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800 flex gap-2">
                    <ScrollText className="w-4 h-4" /> History
                </TabsTrigger>
                <TabsTrigger value="polity" className="rounded-lg data-[state=active]:bg-cyan-100 data-[state=active]:text-cyan-800 flex gap-2">
                    <Landmark className="w-4 h-4" /> Polity
                </TabsTrigger>
            </TabsList>

            <TabsContent value="history" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {renderChapterChart(historyData, "#d97706", "History")}
                    {renderTrendChart(trendData.history || [], "#d97706", "History")}
                </div>
            </TabsContent>

            <TabsContent value="polity" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {renderChapterChart(polityData, "#0891b2", "Polity")}
                    {renderTrendChart(trendData.polity || [], "#0891b2", "Polity")}
                </div>
            </TabsContent>
        </Tabs>
    );
}
