"use client";

import { useState } from "react";
import {
    Mail,
    Phone,
    Calendar,
    Award,
    TrendingUp,
    Clock,
    CreditCard,
    BookOpen,
    CheckCircle2,
    XCircle,
    Download
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

// --- Mock Data ---

const studentProfile = {
    id: "s1",
    name: "Rohan Das",
    email: "rohan.d@example.com",
    phone: "+91 98765 43210",
    joinDate: "Aug 15, 2025",
    avatar: "https://github.com/shadcn.png",
    bio: "UPSC Aspirant 2026. Improving Answer Writing.",
    overallRank: 42,
    attendance: 85,
};

const subjects = [
    { name: "Polity", score: 75, fullMark: 100 },
    { name: "History", score: 45, fullMark: 100 },
    { name: "Geography", score: 80, fullMark: 100 },
    { name: "Economy", score: 60, fullMark: 100 },
    { name: "Environment", score: 70, fullMark: 100 },
    { name: "Sci & Tech", score: 55, fullMark: 100 },
];

const activityLog = [
    { id: 1, type: "quiz", title: "Completed 'Polity Chapter 5 Quiz'", score: "8/10", time: "2 hours ago" },
    { id: 2, type: "video", title: "Watched 'Monsoon Mechanism'", duration: "45 mins", time: "Yesterday" },
    { id: 3, type: "payment", title: "Purchased 'CSAT Module'", amount: "₹4,999", time: "3 days ago" },
    { id: 4, type: "assignment", title: "Submitted 'Ethics Case Study'", status: "Pending Review", time: "4 days ago" },
    { id: 5, type: "login", title: "Logged in from Chrome/Windows", time: "5 days ago" },
];

const payments = [
    { id: "inv-001", plan: "CSAT Module", amount: "₹4,999", date: "Jan 28, 2026", status: "Paid" },
    { id: "inv-002", plan: "Polity Foundation", amount: "₹9,999", date: "Aug 15, 2025", status: "Paid" },
];

// --- Sub-Components ---

function RadarChart({ data }: { data: { name: string; score: number }[] }) {
    // Simple SVG implementation for a hexagon radar chart
    const size = 200;
    const center = size / 2;
    const radius = 80;
    const angleStep = (Math.PI * 2) / data.length;

    const getCoordinates = (value: number, index: number) => {
        const angle = index * angleStep - Math.PI / 2;
        const r = (value / 100) * radius;
        return {
            x: center + r * Math.cos(angle),
            y: center + r * Math.sin(angle),
        };
    };

    const points = data.map((d, i) => getCoordinates(d.score, i)).map(p => `${p.x},${p.y}`).join(" ");
    const fullPoints = data.map((_, i) => getCoordinates(100, i)).map(p => `${p.x},${p.y}`).join(" ");
    const midPoints = data.map((_, i) => getCoordinates(50, i)).map(p => `${p.x},${p.y}`).join(" ");

    return (
        <div className="flex flex-col items-center">
            <svg width={size} height={size} className="overflow-visible">
                {/* Background Grid */}
                <polygon points={fullPoints} fill="none" stroke="#e2e8f0" strokeWidth="1" />
                <polygon points={midPoints} fill="none" stroke="#e2e8f0" strokeWidth="1" />

                {/* Axes */}
                {data.map((_, i) => {
                    const p = getCoordinates(100, i);
                    return <line key={i} x1={center} y1={center} x2={p.x} y2={p.y} stroke="#e2e8f0" strokeWidth="1" />;
                })}

                {/* Data Polygon */}
                <polygon points={points} fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" strokeWidth="2" />

                {/* Labels */}
                {data.map((d, i) => {
                    const p = getCoordinates(120, i); // Push labels out slightly
                    return (
                        <text
                            key={i}
                            x={p.x}
                            y={p.y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="text-[10px] fill-slate-500 font-medium uppercase"
                        >
                            {d.name}
                        </text>
                    );
                })}
            </svg>
        </div>
    );
}

export default function StudentDeepDiveProfile() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[700px] w-full max-w-6xl mx-auto p-4 md:p-0">
            {/* Left Sidebar: ID Card */}
            <div className="md:col-span-4 lg:col-span-3 space-y-6">
                <Card className="text-center overflow-hidden border-slate-200 dark:border-slate-800">
                    <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                    <div className="relative -mt-12 px-4 pb-4">
                        <Avatar className="h-24 w-24 border-4 border-white shadow-md mx-auto">
                            <AvatarImage src={studentProfile.avatar} />
                            <AvatarFallback>RD</AvatarFallback>
                        </Avatar>
                        <h2 className="mt-3 text-xl font-bold text-slate-900 dark:text-slate-100">{studentProfile.name}</h2>
                        <div className="flex items-center justify-center gap-1 text-sm text-slate-500 mt-1">
                            <Mail className="h-3 w-3" /> {studentProfile.email}
                        </div>
                        <div className="flex items-center justify-center gap-3 mt-4">
                            <Button size="sm" className="h-8 text-xs bg-indigo-600 hover:bg-indigo-700">Message</Button>
                            <Button size="sm" variant="outline" className="h-8 text-xs">Profile</Button>
                        </div>
                    </div>
                </Card>

                <Card className="border-slate-200 dark:border-slate-800">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-bold uppercase tracking-wider text-slate-500">Key Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">Avg Attendance</span>
                            <Badge variant={studentProfile.attendance > 75 ? "default" : "destructive"} className="bg-green-100 text-green-700 hover:bg-green-100 border-none">
                                {studentProfile.attendance}%
                            </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">Class Rank</span>
                            <span className="font-bold text-slate-800">#{studentProfile.overallRank}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-slate-600">Date Joined</span>
                            <span className="text-sm text-slate-500">{studentProfile.joinDate}</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content Area */}
            <div className="md:col-span-8 lg:col-span-9 space-y-6 text-left">
                <Tabs defaultValue="overview" className="h-full flex flex-col">
                    <TabsList className="w-full justify-start bg-transparent border-b border-slate-200 dark:border-slate-800 rounded-none h-auto p-0 mb-4">
                        <TabsTrigger value="overview" className="data-[state=active]:border-b-2 data-[state=active]:border-indigo-600 data-[state=active]:shadow-none rounded-none px-4 py-2">Overview</TabsTrigger>
                        <TabsTrigger value="activity" className="data-[state=active]:border-b-2 data-[state=active]:border-indigo-600 data-[state=active]:shadow-none rounded-none px-4 py-2">Activity Log</TabsTrigger>
                        <TabsTrigger value="billing" className="data-[state=active]:border-b-2 data-[state=active]:border-indigo-600 data-[state=active]:shadow-none rounded-none px-4 py-2">Billing & Plans</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Performance Radar */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">Subject Performance</CardTitle>
                                </CardHeader>
                                <CardContent className="flex justify-center py-6">
                                    <RadarChart data={subjects} />
                                </CardContent>
                            </Card>

                            {/* Weak Areas */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-base">Focus Areas</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {subjects.filter(s => s.score < 60).map(s => (
                                        <div key={s.name} className="flex items-center p-3 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/20">
                                            <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center mr-3 shrink-0">
                                                <TrendingUp className="h-4 w-4 text-red-600" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold text-red-900 dark:text-red-200">{s.name} is weak ({s.score}%)</h4>
                                                <p className="text-xs text-red-700 dark:text-red-300">Recommended: Assign basic foundation tests.</p>
                                            </div>
                                        </div>
                                    ))}
                                    {subjects.filter(s => s.score < 60).length === 0 && (
                                        <div className="text-center py-8 text-slate-500">
                                            <CheckCircle2 className="h-8 w-8 mx-auto text-green-500 mb-2 opacity-50" />
                                            <p>No critical weak areas detected.</p>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    <TabsContent value="activity">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Recent Timeline</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="h-[400px] pr-4">
                                    <div className="space-y-6 pl-2 relative border-l-2 border-slate-100 dark:border-slate-800 ml-4">
                                        {activityLog.map((log) => (
                                            <div key={log.id} className="relative pl-6">
                                                <div className={cn(
                                                    "absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-white dark:border-slate-900",
                                                    log.type === 'quiz' ? "bg-blue-500" :
                                                        log.type === 'payment' ? "bg-green-500" :
                                                            log.type === 'assignment' ? "bg-amber-500" : "bg-slate-300"
                                                )}></div>
                                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{log.title}</span>
                                                    <span className="text-xs text-slate-400 whitespace-nowrap">{log.time}</span>
                                                </div>
                                                {log.score && <Badge variant="secondary" className="mt-1 text-[10px] bg-slate-100">Score: {log.score}</Badge>}
                                                {log.amount && <Badge variant="secondary" className="mt-1 text-[10px] bg-green-50 text-green-700 border-green-200">{log.amount}</Badge>}
                                            </div>
                                        ))}
                                    </div>
                                </ScrollArea>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="billing">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Purchase History</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {payments.map(inv => (
                                        <div key={inv.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                                            <div className="flex items-center gap-4">
                                                <div className="h-10 w-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                                                    <CreditCard className="h-5 w-5 text-indigo-600" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-sm">{inv.plan}</h4>
                                                    <p className="text-xs text-slate-500">{inv.date} • {inv.id.toUpperCase()}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold text-slate-900">{inv.amount}</p>
                                                <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none h-5 text-[10px]">{inv.status}</Badge>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
