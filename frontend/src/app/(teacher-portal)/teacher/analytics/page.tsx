"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
    TrendingUp, TrendingDown, Users, DollarSign, BookOpen,
    Eye, Clock, Target, ArrowUpRight, BarChart3, PieChart,
    Layers, Megaphone, ArrowLeft, Calendar, Filter, RefreshCw, Loader2
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fetchTeacherAnalytics, type TeacherAnalyticsData } from "@/lib/services/teacherAnalyticsService";
import { toast } from "sonner";

export default function TeacherAnalyticsDashboard() {
    const [dateRange, setDateRange] = useState("30d");
    const [data, setData] = useState<TeacherAnalyticsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const loadData = useCallback(async (showRefresh = false) => {
        if (showRefresh) setRefreshing(true);
        else setLoading(true);

        try {
            const result = await fetchTeacherAnalytics(dateRange);
            setData(result);
        } catch {
            toast.error("Failed to load analytics.");
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }, [dateRange]);

    useEffect(() => { loadData(); }, [loadData]);

    const ANALYTICS = data;

    // Show skeleton while loading initial data
    if (loading || !ANALYTICS) {
        return (
            <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
                <div className="h-8 w-48 bg-muted rounded animate-pulse" />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[1,2,3,4].map(i => <div key={i} className="h-32 bg-muted rounded-lg animate-pulse" />)}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-7 h-64 bg-muted rounded-lg animate-pulse" />
                    <div className="lg:col-span-5 h-64 bg-muted rounded-lg animate-pulse" />
                </div>
            </div>
        );
    }

    const funnelSteps = [
        { label: "Website Visitors", value: ANALYTICS.funnel.visitors, color: "bg-slate-400", pct: 100 },
        { label: "Lead Captures", value: ANALYTICS.funnel.leadCaptures, color: "bg-blue-500", pct: Math.round((ANALYTICS.funnel.leadCaptures / ANALYTICS.funnel.visitors) * 100) },
        { label: "Enrollments", value: ANALYTICS.funnel.enrollments, color: "bg-emerald-500", pct: Math.round((ANALYTICS.funnel.enrollments / ANALYTICS.funnel.visitors) * 100) },
    ];

    return (
        <div className="p-4 md:p-6 space-y-6 max-w-7xl mx-auto">
            <Link href="/teacher/dashboard" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
            </Link>

            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
                            <BarChart3 className="h-5 w-5 text-white" />
                        </div>
                        Teacher Analytics
                    </h1>
                    <p className="text-muted-foreground mt-1 text-sm">
                        Revenue, engagement, content performance, and student funnel insights.
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={() => loadData(true)} disabled={refreshing} className="h-9">
                        <RefreshCw className={`w-4 h-4 mr-1.5 ${refreshing ? 'animate-spin' : ''}`} /> Refresh
                    </Button>
                    <Select value={dateRange} onValueChange={setDateRange}>
                        <SelectTrigger className="w-[140px]">
                            <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="7d">Last 7 Days</SelectItem>
                            <SelectItem value="30d">Last 30 Days</SelectItem>
                            <SelectItem value="90d">Last 90 Days</SelectItem>
                            <SelectItem value="all">All Time</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* === KPI Cards === */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Revenue */}
                <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-0 shadow-lg">
                    <CardContent className="p-5">
                        <div className="flex items-center justify-between mb-2">
                            <DollarSign className="h-6 w-6 opacity-80" />
                            <Badge className="bg-white/20 text-white text-[10px] hover:bg-white/30">
                                <TrendingUp className="w-3 h-3 mr-1" /> {ANALYTICS.revenue.growth}%
                            </Badge>
                        </div>
                        <p className="text-3xl font-bold">₹{(ANALYTICS.revenue.total / 1000).toFixed(1)}K</p>
                        <p className="text-sm opacity-80 mt-1">Total Revenue</p>
                    </CardContent>
                </Card>

                {/* Active Students */}
                <Card className="border-border shadow-sm">
                    <CardContent className="p-5">
                        <div className="flex items-center justify-between mb-2">
                            <Users className="h-6 w-6 text-blue-500" />
                            <Badge variant="outline" className="border-green-500/50 text-green-600 text-[10px]">
                                <TrendingUp className="w-3 h-3 mr-1" /> {ANALYTICS.students.growth}%
                            </Badge>
                        </div>
                        <p className="text-3xl font-bold">{ANALYTICS.students.active}</p>
                        <p className="text-sm text-muted-foreground mt-1">Active Students</p>
                    </CardContent>
                </Card>

                {/* Avg. Time Spent */}
                <Card className="border-border shadow-sm">
                    <CardContent className="p-5">
                        <div className="flex items-center justify-between mb-2">
                            <Clock className="h-6 w-6 text-amber-500" />
                        </div>
                        <p className="text-3xl font-bold">{ANALYTICS.engagement.avgTimeSpent}</p>
                        <p className="text-sm text-muted-foreground mt-1">Avg. Daily Time</p>
                    </CardContent>
                </Card>

                {/* Completion Rate */}
                <Card className="border-border shadow-sm">
                    <CardContent className="p-5">
                        <div className="flex items-center justify-between mb-2">
                            <Target className="h-6 w-6 text-violet-500" />
                        </div>
                        <p className="text-3xl font-bold">{ANALYTICS.students.completionRate}%</p>
                        <p className="text-sm text-muted-foreground mt-1">Completion Rate</p>
                        <Progress value={ANALYTICS.students.completionRate} className="mt-2 h-1.5" />
                    </CardContent>
                </Card>
            </div>

            {/* === Content + Funnel Row === */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Content Performance */}
                <div className="lg:col-span-7">
                    <Card className="border-border shadow-sm h-full">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-base flex items-center gap-2">
                                <Layers className="w-4 h-4 text-indigo-500" /> Content Performance
                            </CardTitle>
                            <CardDescription>Your top-performing courses ranked by views.</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                            <div className="divide-y divide-border">
                                {ANALYTICS.content.topCourses.map((course, idx) => (
                                    <div key={idx} className="px-5 py-4 flex items-center gap-4 hover:bg-muted/30 transition-colors">
                                        <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center text-indigo-600 font-bold text-sm flex-shrink-0">
                                            {idx + 1}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium truncate">{course.name}</p>
                                            <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                                                <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {(course.views / 1000).toFixed(1)}k views</span>
                                                <span>★ {course.rating}</span>
                                                <span>{course.completions} completions</span>
                                            </div>
                                        </div>
                                        <div className="text-right flex-shrink-0">
                                            <p className="text-sm font-semibold text-emerald-600">₹{(course.revenue / 1000).toFixed(0)}K</p>
                                            <p className="text-[10px] text-muted-foreground">Revenue</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Lead Funnel */}
                <div className="lg:col-span-5">
                    <Card className="border-border shadow-sm h-full">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-base flex items-center gap-2">
                                <Megaphone className="w-4 h-4 text-orange-500" /> Student Acquisition Funnel
                            </CardTitle>
                            <CardDescription>From visitor to paying student.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-5 pt-2">
                            {funnelSteps.map((step, idx) => (
                                <div key={idx} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="font-medium">{step.label}</span>
                                        <span className="font-semibold">{step.value.toLocaleString()}</span>
                                    </div>
                                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${step.color} rounded-full transition-all duration-700`}
                                            style={{ width: `${step.pct}%` }}
                                        />
                                    </div>
                                    {idx < funnelSteps.length - 1 && (
                                        <p className="text-[10px] text-muted-foreground text-right">
                                            {step.pct}% conversion →
                                        </p>
                                    )}
                                </div>
                            ))}

                            {/* Final Revenue */}
                            <div className="pt-3 border-t border-border">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-muted-foreground">Total Revenue</span>
                                    <span className="text-lg font-bold text-emerald-600">₹{(ANALYTICS.funnel.revenue / 1000).toFixed(1)}K</span>
                                </div>
                                <p className="text-[10px] text-muted-foreground mt-1">
                                    Cost per acquisition: ₹{Math.round(ANALYTICS.funnel.revenue / ANALYTICS.funnel.enrollments)} avg.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* === Engagement Metrics Row === */}
            <Card className="border-border shadow-sm">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                        <PieChart className="w-4 h-4 text-blue-500" /> Engagement Breakdown
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-4 bg-muted/50 rounded-xl">
                            <p className="text-2xl font-bold text-foreground">{ANALYTICS.engagement.lessonsPerDay}</p>
                            <p className="text-xs text-muted-foreground mt-1">Lessons / Student / Day</p>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-xl">
                            <p className="text-2xl font-bold text-foreground">{ANALYTICS.engagement.quizAttempts.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground mt-1">Quiz Attempts</p>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-xl">
                            <p className="text-2xl font-bold text-foreground">{ANALYTICS.students.total.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground mt-1">Total Enrolled</p>
                        </div>
                        <div className="text-center p-4 bg-muted/50 rounded-xl">
                            <p className="text-2xl font-bold text-red-500">{ANALYTICS.engagement.bounceRate}%</p>
                            <p className="text-xs text-muted-foreground mt-1">Bounce Rate</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Revenue Comparison */}
            <Card className="border-border shadow-sm">
                <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-500" /> Monthly Revenue Trend
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800/50">
                            <p className="text-sm text-muted-foreground mb-1">This Month</p>
                            <p className="text-3xl font-bold text-emerald-600">₹{(ANALYTICS.revenue.thisMonth / 1000).toFixed(1)}K</p>
                            <Badge className="mt-2 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-[10px]">
                                <ArrowUpRight className="w-3 h-3 mr-1" />
                                +{Math.round(((ANALYTICS.revenue.thisMonth - ANALYTICS.revenue.lastMonth) / ANALYTICS.revenue.lastMonth) * 100)}% vs last month
                            </Badge>
                        </div>
                        <div className="p-4 bg-muted/50 rounded-xl border border-border">
                            <p className="text-sm text-muted-foreground mb-1">Last Month</p>
                            <p className="text-3xl font-bold text-foreground">₹{(ANALYTICS.revenue.lastMonth / 1000).toFixed(1)}K</p>
                            <p className="text-xs text-muted-foreground mt-2">Baseline for comparison</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
