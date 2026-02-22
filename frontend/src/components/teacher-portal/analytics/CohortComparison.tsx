"use client";

import { useState } from "react";
import {
    Users,
    TrendingUp,
    Calendar,
    BarChart2,
    ArrowUpRight,
    ArrowDownRight,
    MousePointer2
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import ChartErrorBoundary from "@/components/ui/ChartErrorBoundary";

// --- Mock Data ---

const cohorts = [
    { id: "b1", name: "UPSC Batch 1 (Morning)", color: "#4f46e5" }, // Indigo
    { id: "b2", name: "UPSC Batch 2 (Evening)", color: "#ec4899" }, // Pink
];

// Weekly Average Scores (0-100)
const dataPoints = [
    { week: "W1", b1: 65, b2: 60 },
    { week: "W2", b1: 68, b2: 62 },
    { week: "W3", b1: 72, b2: 65 },
    { week: "W4", b1: 70, b2: 68 },
    { week: "W5", b1: 75, b2: 70 },
    { week: "W6", b1: 74, b2: 72 },
    { week: "W7", b1: 78, b2: 71 },
    { week: "W8", b1: 82, b2: 69 },
    { week: "W9", b1: 80, b2: 74 },
    { week: "W10", b1: 85, b2: 76 },
];

// Statistics
const stats = {
    b1: { avg: 75, trend: "+5.2%", active: 124 },
    b2: { avg: 69, trend: "+3.8%", active: 98 },
};

// --- Helper Components ---

function LineChart({ data, width = 600, height = 300 }: { data: typeof dataPoints; width?: number; height?: number }) {
    const padding = 40;
    const graphWidth = width - padding * 2;
    const graphHeight = height - padding * 2;

    // Y-axis scale: 0 to 100
    const getY = (val: number) => height - padding - (val / 100) * graphHeight;
    // X-axis scale
    const getX = (index: number) => padding + (index / (data.length - 1)) * graphWidth;

    const createPath = (key: 'b1' | 'b2') => {
        return data.map((d, i) =>
            `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d[key])}`
        ).join(" ");
    };

    const pointsB1 = createPath('b1');
    const pointsB2 = createPath('b2');

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="relative select-none" style={{ width: '100%', height: '100%' }}>
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
                {/* Grid Lines */}
                {[0, 25, 50, 75, 100].map((val) => (
                    <g key={val}>
                        <line
                            x1={padding}
                            y1={getY(val)}
                            x2={width - padding}
                            y2={getY(val)}
                            stroke="var(--border)"
                            strokeWidth="1"
                            strokeDasharray="4 4"
                        />
                        <text x={padding - 10} y={getY(val) + 4} textAnchor="end" className="text-[10px] fill-muted-foreground font-medium">
                            {val}%
                        </text>
                    </g>
                ))}

                {/* X-axis Labels */}
                {data.map((d, i) => (
                    <text
                        key={d.week}
                        x={getX(i)}
                        y={height - 10}
                        textAnchor="middle"
                        className="text-[10px] fill-muted-foreground font-bold uppercase tracking-tight"
                    >
                        {d.week}
                    </text>
                ))}

                {/* Trend Lines */}
                <path d={pointsB1} fill="none" stroke={cohorts[0].color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm" />
                <path d={pointsB2} fill="none" stroke={cohorts[1].color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm" />

                {/* Data Points (Interactive) */}
                {data.map((d, i) => (
                    <g key={i} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)}>
                        {/* Invisible Large Target for Hover */}
                        <rect x={getX(i) - 10} y={padding} width={20} height={graphHeight} fill="transparent" className="cursor-pointer" />

                        {/* Visible Dots */}
                        <circle cx={getX(i)} cy={getY(d.b1)} r={4} fill="var(--card)" stroke={cohorts[0].color} strokeWidth="2" />
                        <circle cx={getX(i)} cy={getY(d.b2)} r={4} fill="var(--card)" stroke={cohorts[1].color} strokeWidth="2" />

                        {/* Hover Tooltip - Rendered inside SVG for simplicity of positioning */}
                        {hoveredIndex === i && (
                            <g>
                                <line x1={getX(i)} y1={padding} x2={getX(i)} y2={height - padding} stroke="var(--border)" strokeWidth="1" />
                                <rect
                                    x={getX(i) - 60}
                                    y={Math.min(getY(d.b1), getY(d.b2)) - 60}
                                    width={120}
                                    height={50}
                                    rx={4}
                                    fill="var(--card)"
                                    stroke="var(--border)"
                                    className="shadow-lg"
                                />
                                <text x={getX(i)} y={Math.min(getY(d.b1), getY(d.b2)) - 45} textAnchor="middle" className="text-[10px] font-black fill-foreground">{d.week} Performance</text>
                                <text x={getX(i) - 50} y={Math.min(getY(d.b1), getY(d.b2)) - 25} className="text-[10px] fill-primary font-bold">B1: {d.b1}%</text>
                                <text x={getX(i) + 50} y={Math.min(getY(d.b1), getY(d.b2)) - 25} textAnchor="end" className="text-[10px] fill-pink-500 font-bold">B2: {d.b2}%</text>
                            </g>
                        )}
                    </g>
                ))}
            </svg>
        </div>
    );
}

export default function CohortComparison() {
    const [metric, setMetric] = useState("avg_score");

    return (
        <Card className="col-span-1 md:col-span-2 border-border">
            <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <CardTitle className="text-lg font-bold flex items-center gap-2">
                            <BarChart2 className="h-5 w-5 text-indigo-500" />
                            Cohort Comparison
                        </CardTitle>
                        <CardDescription>Compare performance trends across different batches.</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                        <Select defaultValue="avg_score" onValueChange={setMetric}>
                            <SelectTrigger className="w-[180px] h-9 text-xs">
                                <SelectValue placeholder="Select Metric" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="avg_score">Average Quiz Score</SelectItem>
                                <SelectItem value="attendance">Daily Attendance</SelectItem>
                                <SelectItem value="completion">Content Completion</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                {/* Stats Header */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                                <span className="text-xs font-bold text-indigo-900 dark:text-indigo-200">Batch 1 (Alpha)</span>
                            </div>
                            <Badge variant="secondary" className="bg-card text-indigo-600 shadow-sm text-[10px]">Morning</Badge>
                        </div>
                        <div className="flex items-end justify-between">
                            <div>
                                <span className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">{stats.b1.avg}%</span>
                                <p className="text-[10px] text-indigo-500 uppercase font-semibold">Avg Score</p>
                            </div>
                            <div className="text-right">
                                <span className="flex items-center text-xs font-medium text-green-600">
                                    <ArrowUpRight className="h-3 w-3 mr-1" /> {stats.b1.trend}
                                </span>
                                <p className="text-[10px] text-muted-foreground">{stats.b1.active} Active</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 rounded-xl bg-pink-50/50 dark:bg-pink-900/10 border border-pink-100 dark:border-pink-900/30">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                                <span className="text-xs font-bold text-pink-900 dark:text-pink-200">Batch 2 (Beta)</span>
                            </div>
                            <Badge variant="secondary" className="bg-card text-pink-600 shadow-sm text-[10px]">Evening</Badge>
                        </div>
                        <div className="flex items-end justify-between">
                            <div>
                                <span className="text-2xl font-bold text-pink-700 dark:text-pink-300">{stats.b2.avg}%</span>
                                <p className="text-[10px] text-pink-500 uppercase font-semibold">Avg Score</p>
                            </div>
                            <div className="text-right">
                                <span className="flex items-center text-xs font-medium text-green-600">
                                    <ArrowUpRight className="h-3 w-3 mr-1" /> {stats.b2.trend}
                                </span>
                                <p className="text-[10px] text-muted-foreground">{stats.b2.active} Active</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Chart Area */}
                <div className="h-[250px] w-full bg-muted/30 rounded-xl border border-border p-2">
                    <ChartErrorBoundary name="Cohort Comparison Chart">
                        <LineChart data={dataPoints} />
                    </ChartErrorBoundary>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <MousePointer2 className="h-3 w-3" />
                    <span>Hover over chart comparison points to see detailed breakdown</span>
                </div>
            </CardContent>
        </Card>
    );
}
