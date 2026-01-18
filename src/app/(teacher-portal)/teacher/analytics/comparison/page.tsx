"use client"

import { useState, useEffect } from "react"
import {
    BarChart3,
    TrendingUp,
    Users,
    ArrowLeftRight,
    Filter,
    Download,
    Target,
    Zap,
    Trophy,
    Search
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    LineChart,
    Line,
} from "recharts"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"

// Mock internal data for batch comparison
const batchData = [
    { metric: "Avg. MCQ Score", "Batch 1.1": 72, "Batch 2.0": 68, "FastTrack": 82 },
    { metric: "Video Completion", "Batch 1.1": 85, "Batch 2.0": 62, "FastTrack": 78 },
    { metric: "Daily Active %", "Batch 1.1": 92, "Batch 2.0": 88, "FastTrack": 95 },
    { metric: "Mains Submits", "Batch 1.1": 45, "Batch 2.0": 32, "FastTrack": 38 },
]

const scoreDistribution = [
    { score: "0-20", "Batch 1.1": 5, "Batch 2.0": 8 },
    { score: "21-40", "Batch 1.1": 12, "Batch 2.0": 15 },
    { score: "41-60", "Batch 1.1": 25, "Batch 2.0": 30 },
    { score: "61-80", "Batch 1.1": 40, "Batch 2.0": 35 },
    { score: "81-100", "Batch 1.1": 18, "Batch 2.0": 12 },
]

const topImprovers = [
    { name: "Sanya Gupta", batch: "Batch 1.1", improvement: 24, score: 88, avatar: "S" },
    { name: "Rahul Deshmukh", batch: "Batch 2.0", improvement: 19, score: 76, avatar: "R" },
    { name: "Priya V", batch: "FastTrack", improvement: 18, score: 92, avatar: "P" },
]

export default function BatchComparisonPage() {
    const [selectedBatches, setSelectedBatches] = useState(["Batch 1.1", "Batch 2.0"])
    const [isLoading, setIsLoading] = useState(false)

    const toggleBatch = (batch: string) => {
        setSelectedBatches(prev =>
            prev.includes(batch) ? prev.filter(b => b !== batch) : [...prev, batch]
        )
    }

    return (
        <div className="p-6 max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <ArrowLeftRight className="h-8 w-8 text-emerald-600" />
                        Batch Performance Comparison
                    </h1>
                    <p className="text-gray-500 mt-1">Cross-cohort analytics and top talent identification</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline"><Download className="w-4 h-4 mr-2" /> Export JSON</Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Detailed Audit</Button>
                </div>
            </div>

            {/* Batch Selector Bar */}
            <Card className="bg-gray-50 border-emerald-100">
                <CardContent className="p-4 flex flex-wrap items-center gap-6">
                    <span className="text-sm font-bold text-gray-700 flex items-center gap-2">
                        <Filter className="h-4 w-4" /> Compare Batches:
                    </span>
                    <div className="flex gap-4">
                        {["Batch 1.1", "Batch 2.0", "FastTrack", "Evening Only"].map((batch) => (
                            <label key={batch} className="flex items-center gap-2 cursor-pointer group">
                                <Checkbox
                                    checked={selectedBatches.includes(batch)}
                                    onCheckedChange={() => toggleBatch(batch)}
                                />
                                <span className={`text-sm font-medium ${selectedBatches.includes(batch) ? 'text-emerald-700' : 'text-gray-500'}`}>
                                    {batch}
                                </span>
                            </label>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Main Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Horizontal Comparison */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">Key Metrics Comparison</CardTitle>
                        <CardDescription>Performance overlay scaled to 100%</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={batchData} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
                                <XAxis type="number" domain={[0, 100]} hide />
                                <YAxis dataKey="metric" type="category" width={120} tick={{ fontSize: 12, fontWeight: 500 }} />
                                <Tooltip cursor={{ fill: '#f9fafb' }} />
                                <Legend verticalAlign="top" height={36} />
                                {selectedBatches.map((batch, idx) => (
                                    <Bar
                                        key={batch}
                                        dataKey={batch}
                                        fill={["#10b981", "#6366f1", "#f43f5e", "#f59e0b"][idx % 4]}
                                        radius={[0, 4, 4, 0]}
                                        barSize={12}
                                    />
                                ))}
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Score Distribution */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg">MCQ Score Distribution</CardTitle>
                        <CardDescription>Number of students per bracket</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={350}>
                            <BarChart data={scoreDistribution}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="score" tick={{ fontSize: 12 }} />
                                <YAxis tick={{ fontSize: 12 }} />
                                <Tooltip cursor={{ fill: 'transparent' }} />
                                <Legend verticalAlign="top" height={36} />
                                {selectedBatches.map((batch, idx) => (
                                    <Bar
                                        key={batch}
                                        dataKey={batch}
                                        fill={["#10b981", "#6366f1", "#f43f5e", "#f59e0b"][idx % 4]}
                                        radius={[4, 4, 0, 0]}
                                    />
                                ))}
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Bottom Row: Insights & Improvers */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Top Improvers Board */}
                <Card className="lg:col-span-1 border-emerald-500/20 shadow-lg shadow-emerald-500/5">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Trophy className="h-5 w-5 text-yellow-500" />
                            Top Improvers
                        </CardTitle>
                        <CardDescription>Highest WoW score gain</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {topImprovers.map((student) => (
                            <div key={student.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                                        {student.avatar}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-800">{student.name}</p>
                                        <p className="text-[11px] text-gray-500">{student.batch}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-0 text-[11px]">
                                        +{student.improvement}%
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* AI Comparative Insights */}
                <Card className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-indigo-950 text-white border-0 overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Zap className="h-32 w-32" />
                    </div>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-indigo-400">
                            <Zap className="h-5 w-5 fill-indigo-400" />
                            AI Comparative Analysis
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <h4 className="text-sm font-bold text-indigo-300 mb-2 flex items-center gap-2">
                                    <Target className="h-4 w-4" /> Strongest Batch
                                </h4>
                                <p className="text-xs text-indigo-100 leading-relaxed">
                                    <span className="text-amber-400 font-bold">FastTrack</span> leads in MCQ accuracy (82%). Their retention spike correlates with the intensive revision sessions launched on Tuesday.
                                </p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <h4 className="text-sm font-bold text-indigo-300 mb-2 flex items-center gap-2">
                                    <TrendingUp className="h-4 w-4" /> Growth Opportunity
                                </h4>
                                <p className="text-xs text-indigo-100 leading-relaxed">
                                    <span className="text-cyan-400 font-bold">Batch 2.0</span> has a 38% lag in video completion compared to Batch 1.1. Consider sending a completion nudge or unlocking bonus content.
                                </p>
                            </div>
                        </div>
                        <div className="pt-2">
                            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 border-0 h-11 text-sm font-bold shadow-xl shadow-indigo-500/20">
                                Send Targeted Intervention to Batch 2.0
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}