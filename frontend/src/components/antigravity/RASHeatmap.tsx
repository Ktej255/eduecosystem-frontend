"use client";

import React, { useMemo, useState } from 'react';
import { Calendar } from 'lucide-react';

interface RASHeatmapProps {
    data: Record<string, number>; // "2026-01-20": 3
    startDate?: string;
}

export function RASHeatmap({ data, startDate }: RASHeatmapProps) {
    const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number } | null>(null);

    // Generate last ~90 days grid
    const days = useMemo(() => {
        const grid = [];
        const today = new Date();
        // Go back 12 weeks = 84 days. Start from the Sunday of that week.
        const daysToShow = 12 * 7;
        const end = today;
        const start = new Date(today);
        start.setDate(today.getDate() - daysToShow);

        // Adjust to Sunday
        const dayOfWeek = start.getDay();
        start.setDate(start.getDate() - dayOfWeek);

        let current = new Date(start);

        while (current <= end) {
            const dateStr = current.toISOString().split('T')[0];
            grid.push({
                date: dateStr,
                count: data[dateStr] || 0
            });
            current.setDate(current.getDate() + 1);
        }
        return grid;
    }, [data]);

    // Group by weeks for columns
    const weeks = useMemo(() => {
        const grid: { date: string; count: number }[][] = [];
        let currentWeek: { date: string; count: number }[] = [];

        days.forEach((day) => {
            currentWeek.push(day);
            if (currentWeek.length === 7) {
                grid.push(currentWeek);
                currentWeek = [];
            }
        });
        if (currentWeek.length > 0) grid.push(currentWeek);
        return grid;
    }, [days]);

    const getIntensity = (count: number) => {
        if (count === 0) return "bg-white/5 border border-white/5";
        if (count === 1) return "bg-green-900/40 border border-green-800/50";
        if (count === 2) return "bg-green-700/60 border border-green-600/50";
        if (count >= 3) return "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)] border border-green-400";
        return "bg-white/5";
    };

    const monthLabels = useMemo(() => {
        const labels: { text: string; index: number }[] = [];
        let lastMonth = -1;
        weeks.forEach((week, i) => {
            const date = new Date(week[0].date);
            const month = date.getMonth();
            if (month !== lastMonth) {
                labels.push({ text: date.toLocaleString('default', { month: 'short' }), index: i });
                lastMonth = month;
            }
        });
        return labels;
    }, [weeks]);

    return (
        <div className="w-full bg-[#1a1b26] border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-6">
                <Calendar className="h-5 w-5 text-green-400" />
                <h3 className="text-lg font-bold text-white">Consistency Map</h3>
            </div>

            <div className="relative overflow-x-auto pb-2">
                {/* Month Labels */}
                <div className="flex text-xs text-gray-500 mb-2 pl-8 relative h-4">
                    {monthLabels.map((label, i) => (
                        <div key={i} className="absolute" style={{ left: `${label.index * 16}px` }}> {/* Approx width of col + gap */}
                            {label.text}
                        </div>
                    ))}
                </div>

                <div className="flex gap-1">
                    {/* Day Labels */}
                    <div className="flex flex-col gap-1 mr-2 pt-0.5 text-[10px] text-gray-600 font-mono">
                        <div className="h-3">Sun</div>
                        <div className="h-3">Mon</div>
                        <div className="h-3">Tue</div>
                        <div className="h-3">Wed</div>
                        <div className="h-3">Thu</div>
                        <div className="h-3">Fri</div>
                        <div className="h-3">Sat</div>
                    </div>

                    {/* Grid */}
                    {weeks.map((week, wIdx) => (
                        <div key={wIdx} className="flex flex-col gap-1">
                            {week.map((day) => (
                                <div
                                    key={day.date}
                                    className={`w-3 h-3 rounded-sm transition-all hover:scale-125 hover:z-10 ${getIntensity(day.count)}`}
                                    onMouseEnter={() => setHoveredDay(day)}
                                    onMouseLeave={() => setHoveredDay(null)}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                {/* Tooltip */}
                {hoveredDay && (
                    <div className="absolute bottom-4 right-4 bg-gray-900 border border-white/10 px-3 py-2 rounded-lg shadow-xl text-xs z-20 pointer-events-none">
                        <p className="font-bold text-white">{hoveredDay.date}</p>
                        <p className="text-green-400">{hoveredDay.count} tasks completed</p>
                    </div>
                )}
            </div>

            <div className="flex justify-end items-center gap-2 mt-4 text-[10px] text-gray-500">
                <span>Less</span>
                <div className="w-2 h-2 rounded-sm bg-white/5" />
                <div className="w-2 h-2 rounded-sm bg-green-900/40" />
                <div className="w-2 h-2 rounded-sm bg-green-700/60" />
                <div className="w-2 h-2 rounded-sm bg-green-500" />
                <span>More</span>
            </div>
        </div>
    );
}
