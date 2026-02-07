"use client";

import React from "react";
import {
    TrendingUp, TrendingDown, Minus, BarChart3, Calendar,
    Target, BookOpen, Flame, AlertTriangle, Trophy,
    ChevronRight, Star, Zap
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    PYQ_DATA_MAP,
    getPYQStatistics,
    getPYQTrendData,
    getYearWiseDistribution,
    HIGH_YIELD_CHAPTERS
} from "../data/pyq-data";

// Trend Indicator Component
const TrendIndicator = ({ direction }: { direction: 'increasing' | 'stable' | 'decreasing' }) => {
    const config = {
        increasing: { icon: TrendingUp, color: "text-green-600", bg: "bg-green-100", label: "Rising" },
        stable: { icon: Minus, color: "text-blue-600", bg: "bg-blue-100", label: "Stable" },
        decreasing: { icon: TrendingDown, color: "text-orange-600", bg: "bg-orange-100", label: "Declining" },
    };
    const { icon: Icon, color, bg, label } = config[direction];
    return (
        <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${bg} ${color} text-xs font-bold`}>
            <Icon size={12} />
            {label}
        </div>
    );
};

// Frequency Badge Component
const FrequencyBadge = ({ frequency }: { frequency: 'high' | 'medium' | 'low' }) => {
    const config = {
        high: { color: "bg-red-500 text-white", icon: Flame, label: "HIGH YIELD" },
        medium: { color: "bg-yellow-500 text-white", icon: Star, label: "MEDIUM" },
        low: { color: "bg-gray-400 text-white", icon: Zap, label: "LOW" },
    };
    const { color, icon: Icon, label } = config[frequency];
    return (
        <Badge className={`${color} gap-1`}>
            <Icon size={12} />
            {label}
        </Badge>
    );
};

export default function PYQTrendDashboard() {
    const stats = getPYQStatistics();
    const trendData = getPYQTrendData();
    const yearDistribution = getYearWiseDistribution();
    const chapters = Object.values(PYQ_DATA_MAP);

    return (
        <div className="space-y-8 p-6 bg-gradient-to-br from-slate-50 to-indigo-50 min-h-screen">
            {/* HEADER */}
            <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-2xl shadow-lg">
                    <BarChart3 size={28} />
                    <h1 className="text-2xl font-bold">PYQ Trend Analysis</h1>
                </div>
                <p className="mt-3 text-slate-600">UPSC Polity Previous Year Questions - Pattern Analysis</p>
            </div>

            {/* QUICK STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-white border-2 border-indigo-100 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6 text-center">
                        <div className="text-4xl font-black text-indigo-600">{stats.totalQuestions}</div>
                        <div className="text-sm text-slate-500 mt-1">Total PYQs</div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-2 border-purple-100 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6 text-center">
                        <div className="text-4xl font-black text-purple-600">{stats.chaptersWithPYQs}</div>
                        <div className="text-sm text-slate-500 mt-1">Chapters Covered</div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-2 border-red-100 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6 text-center">
                        <div className="text-4xl font-black text-red-600">{stats.highFrequencyTopics}</div>
                        <div className="text-sm text-slate-500 mt-1">High Yield Topics</div>
                    </CardContent>
                </Card>
                <Card className="bg-white border-2 border-green-100 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6 text-center">
                        <div className="text-4xl font-black text-green-600">{stats.mostRecentYear}</div>
                        <div className="text-sm text-slate-500 mt-1">Latest Year</div>
                    </CardContent>
                </Card>
            </div>

            {/* TREND ANALYSIS */}
            <div className="grid md:grid-cols-3 gap-6">
                {/* Rising Topics */}
                <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-green-700">
                            <TrendingUp size={20} />
                            Rising Topics
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {trendData.increasing.length > 0 ? (
                            <ul className="space-y-2">
                                {trendData.increasing.map((topic, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-green-800 font-medium">
                                        <ChevronRight size={16} className="text-green-500" />
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-slate-500 text-sm italic">No topics with increasing trend</p>
                        )}
                        <p className="mt-4 text-xs text-green-600 bg-green-100 p-2 rounded">
                            <strong>Focus Alert:</strong> These topics are being asked more frequently in recent years!
                        </p>
                    </CardContent>
                </Card>

                {/* Stable Topics */}
                <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-blue-700">
                            <Minus size={20} />
                            Stable Topics
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {trendData.stable.map((topic, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-blue-800 font-medium">
                                    <ChevronRight size={16} className="text-blue-500" />
                                    {topic}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 text-xs text-blue-600 bg-blue-100 p-2 rounded">
                            <strong>Consistent:</strong> These topics appear regularly every year.
                        </p>
                    </CardContent>
                </Card>

                {/* Declining Topics */}
                <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
                    <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-orange-700">
                            <TrendingDown size={20} />
                            Declining Topics
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {trendData.decreasing.length > 0 ? (
                            <ul className="space-y-2">
                                {trendData.decreasing.map((topic, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-orange-800 font-medium">
                                        <ChevronRight size={16} className="text-orange-500" />
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-slate-500 text-sm italic">No topics with declining trend</p>
                        )}
                        <p className="mt-4 text-xs text-orange-600 bg-orange-100 p-2 rounded">
                            <strong>Lower Priority:</strong> Don't ignore, but focus less time here.
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* YEAR-WISE DISTRIBUTION */}
            <Card className="border-2 border-slate-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Calendar size={20} className="text-indigo-600" />
                        Year-wise Question Distribution
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        {yearDistribution.map(([year, count]) => (
                            <div
                                key={year}
                                className="flex flex-col items-center bg-gradient-to-b from-indigo-100 to-indigo-50 border-2 border-indigo-200 rounded-xl p-4 min-w-[80px]"
                            >
                                <span className="text-2xl font-black text-indigo-600">{count}</span>
                                <span className="text-sm text-indigo-800 font-medium">{year}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* CHAPTER-WISE BREAKDOWN */}
            <Card className="border-2 border-slate-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BookOpen size={20} className="text-purple-600" />
                        Chapter-wise PYQ Coverage
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {chapters.sort((a, b) => b.questions.length - a.questions.length).map((chapter) => (
                            <div
                                key={chapter.chapterId}
                                className="flex items-center justify-between p-4 bg-white border-2 border-slate-100 rounded-xl hover:border-indigo-200 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                                        {chapter.questions.length}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-800">{chapter.chapterTitle}</h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="text-xs text-slate-500">
                                                Last: {chapter.lastAskedYear}
                                            </span>
                                            <span className="text-slate-300">|</span>
                                            <span className="text-xs text-slate-500">
                                                Total: {chapter.totalPYQs} PYQs
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FrequencyBadge frequency={chapter.frequency} />
                                    <TrendIndicator direction={chapter.trendDirection} />
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* HIGH-YIELD CHAPTERS PRIORITY LIST */}
            <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-white">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-700">
                        <Target size={20} />
                        High-Yield Chapters Priority List
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {HIGH_YIELD_CHAPTERS.slice(0, 12).map((ch, idx) => {
                            const hasPYQs = PYQ_DATA_MAP[ch.id];
                            return (
                                <div
                                    key={ch.id}
                                    className={`flex items-center gap-3 p-3 rounded-lg border-2 ${hasPYQs
                                            ? 'bg-green-50 border-green-200'
                                            : 'bg-white border-slate-200'
                                        }`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${hasPYQs
                                            ? 'bg-green-500 text-white'
                                            : 'bg-slate-200 text-slate-600'
                                        }`}>
                                        {idx + 1}
                                    </div>
                                    <div className="flex-1">
                                        <span className={`font-medium ${hasPYQs ? 'text-green-800' : 'text-slate-700'}`}>
                                            {ch.title}
                                        </span>
                                        <span className="text-xs text-slate-400 ml-2">~{ch.expectedPYQs} PYQs</span>
                                    </div>
                                    {hasPYQs && (
                                        <Trophy size={16} className="text-green-500" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                    <div className="mt-4 p-3 bg-red-100 rounded-lg text-sm text-red-700">
                        <strong>📊 Coverage Status:</strong> {Object.keys(PYQ_DATA_MAP).length} of {HIGH_YIELD_CHAPTERS.length} high-yield chapters have PYQ data integrated.
                    </div>
                </CardContent>
            </Card>

            {/* EXAM INSIGHTS */}
            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-700">
                        <AlertTriangle size={20} />
                        UPSC Polity Exam Insights
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-white rounded-xl border border-amber-200">
                            <h4 className="font-bold text-amber-800 mb-2">🎯 Most Asked Topics</h4>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-slate-700">
                                <li>Fundamental Rights (Art 14-35)</li>
                                <li>Parliament & Legislative Process</li>
                                <li>Emergency Provisions</li>
                                <li>President & Governor Powers</li>
                                <li>Constitutional Amendments</li>
                            </ol>
                        </div>
                        <div className="p-4 bg-white rounded-xl border border-amber-200">
                            <h4 className="font-bold text-amber-800 mb-2">⚠️ Common PYQ Traps</h4>
                            <ul className="space-y-1 text-sm text-slate-700">
                                <li>• MLCs don't vote in President election</li>
                                <li>• Right to Strike is NOT a FR</li>
                                <li>• 44th Amendment safeguards (Art 20, 21)</li>
                                <li>• SC judges: 65yr, HC: 62yr</li>
                                <li>• Money Bill: LS only, 14 days to RS</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
