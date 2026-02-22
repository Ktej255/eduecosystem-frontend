"use client";

import { useState } from "react";
import {
    Calendar,
    Clock,
    Users,
    Info
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

// --- Mock Data ---

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const hours = Array.from({ length: 24 }, (_, i) => i); // 0 to 23

// Generate mock heat data (7 days x 24 hours)
// Higher values = more activity
const generateHeatData = () => {
    return days.map(day => ({
        day,
        hours: hours.map(hour => {
            // Simulate peak times (e.g., 7 PM - 10 PM)
            let intensity = Math.random() * 30;
            if (hour >= 18 && hour <= 22) intensity += 50; // Evening peak
            if (hour >= 6 && hour <= 9) intensity += 30;   // Morning peak
            return Math.floor(intensity);
        })
    }));
};

const heatmapData = generateHeatData();

// --- Helper Functions ---

const getIntentistyColor = (value: number) => {
    if (value > 75) return "bg-indigo-600 hover:bg-indigo-700";
    if (value > 50) return "bg-indigo-400 hover:bg-indigo-500";
    if (value > 25) return "bg-indigo-200 hover:bg-indigo-300";
    return "bg-muted hover:bg-slate-200";
};

const formatTime = (hour: number) => {
    if (hour === 0) return "12 AM";
    if (hour === 12) return "12 PM";
    return hour > 12 ? `${hour - 12} PM` : `${hour} AM`;
};

export default function EngagementHeatmap() {
    const [selectedMetric, setSelectedMetric] = useState("active_users");
    const [hoveredCell, setHoveredCell] = useState<{ day: string, hour: number, value: number } | null>(null);

    return (
        <Card className="col-span-1 border-border">
            <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <CardTitle className="text-lg font-bold flex items-center gap-2">
                            <Clock className="h-5 w-5 text-indigo-500" />
                            Engagement Heatmap
                        </CardTitle>
                        <CardDescription>Identify high-traffic hours for better scheduling.</CardDescription>
                    </div>
                    <Select defaultValue="active_users" onValueChange={setSelectedMetric}>
                        <SelectTrigger className="w-[160px] h-9 text-xs">
                            <SelectValue placeholder="Metric" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="active_users">Active Users</SelectItem>
                            <SelectItem value="video_views">Video Views</SelectItem>
                            <SelectItem value="quiz_attempts">Quiz Attempts</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>
            <CardContent>
                <div className="relative overflow-x-auto pb-6">
                    {/* Tooltip */}
                    {hoveredCell && (
                        <div className="absolute top-0 right-0 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-md shadow-lg z-10 animate-in fade-in zoom-in-95 pointer-events-none">
                            <p className="font-bold">{hoveredCell.day} at {formatTime(hoveredCell.hour)}</p>
                            <p className="text-slate-300">{hoveredCell.value} students online</p>
                        </div>
                    )}

                    <div className="min-w-[600px] flex">
                        {/* Y-Axis (Days) */}
                        <div className="w-10 flex-shrink-0 flex flex-col justify-end gap-1 pb-6 mr-2">
                            {heatmapData.map(d => (
                                <div key={d.day} className="h-6 flex items-center justify-end text-[10px] font-medium text-muted-foreground">
                                    {d.day}
                                </div>
                            ))}
                        </div>

                        {/* Chart grid */}
                        <div className="flex-1">
                            <div className="grid grid-rows-7 gap-1">
                                {heatmapData.map((d) => (
                                    <div key={d.day} className="grid grid-cols-24 gap-1 h-6">
                                        {d.hours.map((val, hIndex) => (
                                            <div
                                                key={hIndex}
                                                className={cn(
                                                    "rounded-[2px] cursor-pointer transition-colors duration-200",
                                                    getIntentistyColor(val)
                                                )}
                                                onMouseEnter={() => setHoveredCell({ day: d.day, hour: hIndex, value: val })}
                                                onMouseLeave={() => setHoveredCell(null)}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>

                            {/* X-Axis (Hours) */}
                            <div className="grid grid-cols-24 pt-2 gap-1">
                                {hours.map((h) => (
                                    <div key={h} className="text-[9px] text-muted-foreground text-center relative h-6">
                                        {/* Show label every 3 hours to avoid clutter */}
                                        {h % 3 === 0 && (
                                            <span className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
                                                {formatTime(h).replace(" ", "")}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legend & Insight */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100 pt-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>Low</span>
                        <div className="flex gap-1">
                            <div className="w-3 h-3 bg-indigo-200 rounded-[2px]" />
                            <div className="w-3 h-3 bg-indigo-400 rounded-[2px]" />
                            <div className="w-3 h-3 bg-indigo-600 rounded-[2px]" />
                        </div>
                        <span>High</span>
                    </div>

                    <div className="flex items-center gap-2 bg-amber-50 dark:bg-amber-900/10 text-amber-700 dark:text-amber-400 px-3 py-1.5 rounded-lg text-xs font-medium">
                        <Info className="h-3 w-3" />
                        <span>Peak Activity: 8 PM - 10 PM (Weekdays)</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
