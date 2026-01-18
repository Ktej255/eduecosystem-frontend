"use client"

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LineChart,
    Line,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, TrendingUp } from "lucide-react";

const studyActivityData = [
    { name: "Mon", hours: 4 },
    { name: "Tue", hours: 6 },
    { name: "Wed", hours: 3 },
    { name: "Thu", hours: 8 },
    { name: "Fri", hours: 5 },
    { name: "Sat", hours: 2 },
    { name: "Sun", hours: 4 },
];

const progressData = [
    { name: "Week 1", score: 65 },
    { name: "Week 2", score: 72 },
    { name: "Week 3", score: 78 },
    { name: "Week 4", score: 85 },
];

export default function DashboardCharts() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Study Activity Bar Chart */}
            <Card className="lg:col-span-2">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-lg font-medium">Study Activity</CardTitle>
                    <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={studyActivityData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.2} />
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#6b7280', fontSize: 12 }}
                                    dy={10}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#6b7280', fontSize: 12 }}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                                    cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
                                />
                                <Bar dataKey="hours" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={30} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>

            {/* Progress Line Chart */}
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-lg font-medium">Performance</CardTitle>
                    <div className="flex items-center text-sm text-green-500">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        +5.2%
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="h-[200px] w-full mb-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={progressData}>
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1f2937', border: 'none', borderRadius: '8px', color: '#fff' }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="score"
                                    stroke="#8b5cf6"
                                    strokeWidth={3}
                                    dot={{ r: 4, fill: '#8b5cf6', strokeWidth: 2, stroke: '#fff' }}
                                    activeDot={{ r: 6 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="h-2 w-2 rounded-full bg-blue-500 mr-2" />
                                <span className="text-sm text-muted-foreground">Quiz Completion</span>
                            </div>
                            <span className="text-sm font-bold">92%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="h-2 w-2 rounded-full bg-purple-500 mr-2" />
                            <span className="text-sm text-muted-foreground">Assignments</span>
                        </div>
                        <span className="text-sm font-bold">85%</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
