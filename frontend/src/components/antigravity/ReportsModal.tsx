"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BarChart2, TrendingUp, Activity, AlertCircle, Star } from "lucide-react";
import axios from "axios";
import { RASHeatmap } from "@/components/antigravity/RASHeatmap";
import { analyzeWeakTopics, WeakTopicAnalysis, getPriorityColor, getRecommendationLabel } from "@/lib/analytics/WeakTopicAnalyzer";
import { generateWeeklyReport, WeeklyReportData, getWeeklySummaryText } from "@/lib/reports/WeeklyReportGenerator";
import { getUserXP, getLevelIcon, getLevelTitle, calculateLevel, LEVEL_THRESHOLDS } from "@/lib/gamification/xp-engine";
import { UserXP } from "@/lib/gamification/gamification-types";

interface ReportsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface ActivityReport {
    total_tasks_completed: number;
    current_streak: number;
    daily_breakdown: Record<string, number>;
    weekly_summary: any[];
    recent_activity: string[];
}

interface WeeklyAIReview {
    summary: string;
    strengths: string[];
    weaknesses: string[];
    next_week_strategy: string;
    mastery_score: number;
}

interface MasteryNode {
    name: string;
    stability: number;
    retention: number;
    type: string;
    children?: MasteryNode[];
}

// Helper function for SVG arc rendering
function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return [
        "M", start.x, start.y,
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
}

export function ReportsModal({ isOpen, onClose }: ReportsModalProps) {
    const [data, setData] = useState<ActivityReport | null>(null);
    const [aiReview, setAiReview] = useState<WeeklyAIReview | null>(null);
    const [masteryData, setMasteryData] = useState<MasteryNode | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<"activity" | "ai_strategy" | "sunburst" | "vulnerabilities">("activity");
    const [vulnerabilities, setVulnerabilities] = useState<WeakTopicAnalysis | null>(null);
    const [weeklyReport, setWeeklyReport] = useState<WeeklyReportData | null>(null);
    const [userXP, setUserXP] = useState<UserXP | null>(null);

    useEffect(() => {
        if (isOpen) {
            fetchReports();
            fetchAIReview();
            fetchMasteryHierarchy();
            // Local Analytics
            setVulnerabilities(analyzeWeakTopics());
            setWeeklyReport(generateWeeklyReport());
            setUserXP(getUserXP());
        }
    }, [isOpen]);

    const fetchMasteryHierarchy = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/antigravity/reports/mastery-hierarchy`);
            setMasteryData(res.data);
        } catch (error) {
            console.error("Failed to fetch mastery hierarchy", error);
        }
    };

    const fetchAIReview = async () => {
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/antigravity/reports/weekly-ai-review`);
            setAiReview(res.data);
        } catch (error) {
            console.error("Failed to fetch AI review", error);
        }
    };

    const fetchReports = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/antigravity/reports`);
            setData(res.data);
        } catch (error) {
            console.error("Failed to fetch reports", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        onClick={onClose}
                    />

                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="relative w-full max-w-3xl bg-[#1a1b26] border border-white/10 rounded-2xl flex flex-col max-h-[90vh] overflow-hidden shadow-2xl"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-card/5">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                <BarChart2 className="mr-2 text-blue-400" /> Performance Analytics
                            </h2>
                            <button onClick={onClose} className="text-muted-foreground hover:text-white">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-8">
                            <div className="flex gap-4 mb-2 overflow-x-auto pb-2 scrollbar-hide">
                                <button
                                    onClick={() => setActiveTab("activity")}
                                    className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${activeTab === "activity" ? "bg-blue-500 text-white" : "text-muted-foreground hover:bg-card/5"}`}
                                >
                                    Activity & Heatmap
                                </button>
                                <button
                                    onClick={() => setActiveTab("ai_strategy")}
                                    className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${activeTab === "ai_strategy" ? "bg-purple-500 text-white" : "text-muted-foreground hover:bg-card/5"}`}
                                >
                                    Weekly AI Strategy
                                </button>
                                <button
                                    onClick={() => setActiveTab("sunburst")}
                                    className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${activeTab === "sunburst" ? "bg-green-500 text-white" : "text-muted-foreground hover:bg-card/5"}`}
                                >
                                    Mastery Sunburst
                                </button>
                                <button
                                    onClick={() => setActiveTab("vulnerabilities")}
                                    className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${activeTab === "vulnerabilities" ? "bg-red-500 text-white" : "text-muted-foreground hover:bg-card/5"}`}
                                >
                                    Vulnerabilities
                                </button>
                            </div>

                            {loading ? (
                                <div className="flex justify-center py-12">
                                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
                                </div>
                            ) : data ? (
                                <div className="space-y-8">
                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/30 p-4 rounded-xl flex flex-col justify-center">
                                            <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest mb-1">Total Tasks</p>
                                            <p className="text-2xl font-bold text-white">{data.total_tasks_completed}</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-orange-500/20 to-red-600/10 border border-orange-500/30 p-4 rounded-xl flex flex-col justify-center">
                                            <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest mb-1">Current Streak</p>
                                            <p className="text-2xl font-bold text-white">{data.current_streak} Days</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-emerald-500/20 to-green-600/10 border border-emerald-500/30 p-4 rounded-xl flex flex-col justify-center">
                                            <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest mb-1">Weekly Accuracy</p>
                                            <p className="text-2xl font-bold text-white">{weeklyReport?.mcqAccuracy || 0}%</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-purple-500/20 to-indigo-600/10 border border-purple-500/30 p-4 rounded-xl flex flex-col justify-center">
                                            <p className="text-muted-foreground text-[10px] font-black uppercase tracking-widest mb-1">Focus Time</p>
                                            <p className="text-2xl font-bold text-white">{weeklyReport?.totalStudyMinutes || 0}m</p>
                                        </div>
                                    </div>

                                    {/* Content based on Active Tab */}
                                    {activeTab === "activity" && (
                                        <div className="space-y-8">
                                            {/* XP Progress Bar */}
                                            {userXP && (
                                                <div className="p-6 bg-card/5 border border-white/10 rounded-2xl">
                                                    <div className="flex justify-between items-end mb-4">
                                                        <div>
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <span className="text-2xl">{getLevelIcon(userXP.level)}</span>
                                                                <h4 className="text-xl font-black text-white">{getLevelTitle(userXP.level)}</h4>
                                                            </div>
                                                            <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Level {userXP.level} • {userXP.totalXP} Total XP</p>
                                                        </div>
                                                        <div className="text-right">
                                                            <span className="text-xs font-black text-blue-400 uppercase tracking-tighter">{userXP.currentXP} / {userXP.xpToNextLevel} XP</span>
                                                        </div>
                                                    </div>
                                                    <div className="h-2 w-full bg-card/5 rounded-full overflow-hidden border border-white/5">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${(userXP.currentXP / userXP.xpToNextLevel) * 100}%` }}
                                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            <div className="mb-6">
                                                <RASHeatmap data={data.daily_breakdown} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-muted-foreground mb-4">Recent Completed Tasks</h3>
                                                <div className="space-y-2">
                                                    {data.recent_activity.length > 0 ? (
                                                        data.recent_activity.map((topic, i) => (
                                                            <div key={i} className="p-3 bg-card/5 border border-white/5 rounded-lg flex items-center justify-between">
                                                                <span className="text-sm text-muted-foreground font-mono">{topic}</span>
                                                                <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded">Done</span>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <p className="text-muted-foreground italic">No recent activity found.</p>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Milestones / Achievements Section */}
                                            <div>
                                                <h3 className="text-lg font-bold text-muted-foreground mb-4">Recent Milestones</h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    <div className="p-4 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl flex items-center gap-3">
                                                        <div className="p-2 bg-yellow-500/20 rounded-lg">
                                                            <TrendingUp className="text-yellow-400" size={20} />
                                                        </div>
                                                        <div>
                                                            <p className="text-white text-xs font-bold">{data.current_streak}-Day Streak</p>
                                                            <p className="text-[10px] text-muted-foreground font-medium">Momentum is building!</p>
                                                        </div>
                                                    </div>
                                                    <div className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl flex items-center gap-3">
                                                        <div className="p-2 bg-blue-500/20 rounded-lg">
                                                            <Star className="text-blue-400" size={20} />
                                                        </div>
                                                        <div>
                                                            <p className="text-white text-xs font-bold">Level {userXP?.level || 1} Reached</p>
                                                            <p className="text-[10px] text-muted-foreground font-medium">Evolution in progress.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "ai_strategy" && (
                                        <div className="space-y-6">
                                            {aiReview ? (
                                                <>
                                                    <div className="p-6 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/10 rounded-2xl">
                                                        <h4 className="text-purple-400 font-black uppercase text-[10px] tracking-widest mb-2">Strategic Summary</h4>
                                                        <p className="text-gray-200 leading-relaxed font-medium">"{aiReview.summary}"</p>
                                                    </div>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div className="space-y-3">
                                                            <h4 className="text-green-400 text-xs font-bold uppercase tracking-wider">Top Strengths</h4>
                                                            {aiReview.strengths.map((s, i) => (
                                                                <div key={i} className="flex items-center gap-2 p-3 bg-green-500/5 border border-green-500/10 rounded-xl text-xs text-green-100 font-medium">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" /> {s}
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="space-y-3">
                                                            <h4 className="text-orange-400 text-xs font-bold uppercase tracking-wider">Focus Areas</h4>
                                                            {aiReview.weaknesses.map((w, i) => (
                                                                <div key={i} className="flex items-center gap-2 p-3 bg-orange-500/5 border border-orange-500/10 rounded-xl text-xs text-orange-100 font-medium">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" /> {w}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl relative overflow-hidden">
                                                        <h4 className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-3">Recommended Next Week Strategy</h4>
                                                        <p className="text-gray-100 font-bold leading-relaxed">{aiReview.next_week_strategy}</p>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                                                    <Activity className="animate-pulse mb-2 text-purple-400" />
                                                    <p className="text-sm font-medium">Synthesizing AI Strategic Review...</p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {activeTab === "sunburst" && (
                                        <div className="flex flex-col items-center">
                                            <h3 className="text-lg font-bold text-muted-foreground mb-6 w-full text-center">Syllabus Mastery Sunburst</h3>
                                            {masteryData && masteryData.children ? (
                                                <div className="relative w-full aspect-square max-w-[360px] mx-auto">
                                                    <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                                        {masteryData.children.map((course, cIdx) => {
                                                            const angleRange = (1 / (masteryData.children?.length || 1)) * 360;
                                                            const startAngle = cIdx * angleRange;
                                                            return (
                                                                <g key={cIdx}>
                                                                    <path
                                                                        d={describeArc(50, 50, 20, startAngle, startAngle + angleRange)}
                                                                        fill={course.retention > 0.8 ? '#4ade80' : course.retention > 0.5 ? '#fbbf24' : '#f87171'}
                                                                        className="opacity-80 hover:opacity-100 transition-opacity cursor-help"
                                                                    >
                                                                        <title>{course.name} ({Math.round(course.retention * 100)}%)</title>
                                                                    </path>
                                                                    {course.children?.map((module, mIdx) => {
                                                                        const mAngleRange = angleRange / (course.children?.length || 1);
                                                                        const mStartAngle = startAngle + (mIdx * mAngleRange);
                                                                        return (
                                                                            <path
                                                                                key={mIdx}
                                                                                d={describeArc(50, 50, 35, mStartAngle, mStartAngle + mAngleRange)}
                                                                                fill={module.retention > 0.8 ? '#22c55e' : module.retention > 0.5 ? '#eab308' : '#ef4444'}
                                                                                className="opacity-60 hover:opacity-100 transition-opacity cursor-help"
                                                                            >
                                                                                <title>{module.name} ({Math.round(module.retention * 100)}%)</title>
                                                                            </path>
                                                                        );
                                                                    })}
                                                                </g>
                                                            );
                                                        })}
                                                        <circle cx="50" cy="50" r="12" fill="#111" />
                                                        <text x="50" y="52" textAnchor="middle" fill="#555" fontSize="4" fontWeight="black" transform="rotate(90 50 50)">RAS</text>
                                                    </svg>
                                                    <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                                                        <div className="flex flex-col gap-1">
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                                                <span className="text-[10px] text-muted-foreground uppercase font-black">High Mastery (&gt;80%)</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                                                <span className="text-[10px] text-muted-foreground uppercase font-black">Stable (50-80%)</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                                                <span className="text-[10px] text-muted-foreground uppercase font-black">Decayed (&lt;50%)</span>
                                                            </div>
                                                        </div>
                                                        <div className="bg-card/5 p-4 rounded-2xl border border-white/5">
                                                            <p className="text-[9px] text-muted-foreground font-bold leading-tight italic uppercase tracking-widest text-center">
                                                                Outer rings: Modules. Inner rings: Subjects.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="py-20 text-muted-foreground font-mono text-sm uppercase italic">No Hierarchy Data Found</div>
                                            )}
                                        </div>
                                    )}

                                    {activeTab === "vulnerabilities" && (
                                        <div className="space-y-6">
                                            <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
                                                <h4 className="text-red-400 text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                                    <AlertCircle size={16} /> Critical Vulnerabilities (Memory Decay)
                                                </h4>
                                                <div className="space-y-3">
                                                    {vulnerabilities && vulnerabilities.weakTopics.length > 0 ? (
                                                        vulnerabilities.weakTopics.map((topic, i) => (
                                                            <div key={i} className="flex items-center justify-between p-4 bg-card/5 border border-white/10 rounded-xl hover:bg-card/[0.08] transition-all">
                                                                <div>
                                                                    <p className="text-sm font-bold text-white mb-1">{topic.topicName}</p>
                                                                    <div className="flex gap-2">
                                                                        <span className="text-[9px] font-black uppercase bg-card/10 px-2 py-0.5 rounded text-muted-foreground">
                                                                            Accuracy: {topic.accuracy}%
                                                                        </span>
                                                                        <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${getPriorityColor(topic.practiceRecommendation)}`}>
                                                                            {getRecommendationLabel(topic.practiceRecommendation)}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <button
                                                                    onClick={() => {
                                                                        setActiveTab("activity");
                                                                        onClose();
                                                                    }}
                                                                    className="px-3 py-1.5 bg-red-500 hover:bg-red-400 text-white text-[10px] font-black uppercase rounded-lg transition-all"
                                                                >
                                                                    Review Now
                                                                </button>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <div className="text-center py-8 text-muted-foreground italic text-sm">
                                                            No critical vulnerabilities detected. Your trajectory is stable.
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="p-4 bg-card/5 border border-white/10 rounded-xl">
                                                    <h5 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Weekly Summary</h5>
                                                    <p className="text-xs text-muted-foreground leading-relaxed italic">
                                                        {weeklyReport ? getWeeklySummaryText(weeklyReport) : "No weekly data available."}
                                                    </p>
                                                </div>
                                                <div className="p-4 bg-card/5 border border-white/10 rounded-xl">
                                                    <h5 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Subject Mastery</h5>
                                                    <p className="text-xs text-muted-foreground leading-relaxed font-bold">
                                                        Strongest: <span className="text-green-400">{weeklyReport?.strongestTopic || "N/A"}</span><br />
                                                        Weakest: <span className="text-red-400">{weeklyReport?.weakestTopic || "N/A"}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="text-center text-muted-foreground py-12 italic uppercase font-black tracking-widest opacity-20">NO INTEL DATA</div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
