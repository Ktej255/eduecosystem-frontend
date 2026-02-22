"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Flame, Clock, TrendingUp } from 'lucide-react';
import {
    getHeatmapData,
    HeatmapData,
    DayActivity,
    getIntensityColor,
    formatStudyTime
} from '@/lib/analytics/StudyHeatmapGenerator';

interface StudyHeatmapProps {
    weeks?: number;
    showStats?: boolean;
}

export default function StudyHeatmap({ weeks = 12, showStats = true }: StudyHeatmapProps) {
    const [data, setData] = useState<HeatmapData | null>(null);
    const [hoveredDay, setHoveredDay] = useState<DayActivity | null>(null);

    useEffect(() => {
        const heatmapData = getHeatmapData(weeks * 7);
        setData(heatmapData);
    }, [weeks]);

    // Group days by week for grid layout
    const weeklyGrid = useMemo(() => {
        if (!data) return [];

        const grid: DayActivity[][] = [];
        let currentWeek: DayActivity[] = [];

        data.days.forEach((day, index) => {
            const dayOfWeek = new Date(day.date).getDay();

            // Start new week on Sunday
            if (dayOfWeek === 0 && currentWeek.length > 0) {
                grid.push(currentWeek);
                currentWeek = [];
            }

            currentWeek.push(day);

            // Push last week
            if (index === data.days.length - 1) {
                grid.push(currentWeek);
            }
        });

        return grid;
    }, [data]);

    if (!data) {
        return (
            <Card className="animate-pulse">
                <CardContent className="p-6">
                    <div className="h-32 bg-muted rounded"></div>
                </CardContent>
            </Card>
        );
    }

    const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                    <Calendar className="h-5 w-5 text-green-600" />
                    Study Activity
                </CardTitle>
            </CardHeader>
            <CardContent>
                {/* Stats Row */}
                {showStats && (
                    <div className="grid grid-cols-4 gap-3 mb-4">
                        <div className="text-center p-2 bg-muted rounded-lg">
                            <div className="text-xl font-bold text-foreground">
                                {formatStudyTime(data.totalStudyMinutes)}
                            </div>
                            <div className="text-[10px] text-muted-foreground">Total Study</div>
                        </div>
                        <div className="text-center p-2 bg-muted rounded-lg">
                            <div className="text-xl font-bold text-green-600">
                                {data.totalDaysActive}
                            </div>
                            <div className="text-[10px] text-muted-foreground">Days Active</div>
                        </div>
                        <div className="text-center p-2 bg-muted rounded-lg">
                            <div className="text-xl font-bold text-orange-500 flex items-center justify-center gap-1">
                                <Flame className="h-4 w-4" />
                                {data.currentStreak}
                            </div>
                            <div className="text-[10px] text-muted-foreground">Current Streak</div>
                        </div>
                        <div className="text-center p-2 bg-muted rounded-lg">
                            <div className="text-xl font-bold text-blue-600">
                                {data.longestStreak}
                            </div>
                            <div className="text-[10px] text-muted-foreground">Best Streak</div>
                        </div>
                    </div>
                )}

                {/* Heatmap Grid */}
                <div className="overflow-x-auto">
                    <div className="flex gap-1">
                        {/* Day labels */}
                        <div className="flex flex-col gap-1 mr-2 text-[10px] text-muted-foreground">
                            {dayLabels.map((day, i) => (
                                <div key={day} className="h-3 flex items-center" style={{ visibility: i % 2 === 1 ? 'visible' : 'hidden' }}>
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Week columns */}
                        {weeklyGrid.map((week, weekIndex) => (
                            <div key={weekIndex} className="flex flex-col gap-1">
                                {week.map(day => (
                                    <div
                                        key={day.date}
                                        className={`w-3 h-3 rounded-sm cursor-pointer transition-all hover:ring-2 hover:ring-blue-400 ${getIntensityColor(day.intensity)}`}
                                        onMouseEnter={() => setHoveredDay(day)}
                                        onMouseLeave={() => setHoveredDay(null)}
                                        title={`${day.date}: ${formatStudyTime(day.studyMinutes)}`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hover tooltip */}
                {hoveredDay && (
                    <div className="mt-3 p-3 bg-muted rounded-lg text-sm">
                        <div className="font-medium text-foreground mb-1">
                            {new Date(hoveredDay.date).toLocaleDateString('en-US', {
                                weekday: 'long',
                                month: 'short',
                                day: 'numeric'
                            })}
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground dark:text-muted-foreground">
                            <div>
                                <Clock className="h-3 w-3 inline mr-1" />
                                {formatStudyTime(hoveredDay.studyMinutes)}
                            </div>
                            <div>🍅 {hoveredDay.pomodorosCompleted} pomodoros</div>
                            <div>📚 {hoveredDay.flashcardsReviewed} cards</div>
                        </div>
                    </div>
                )}

                {/* Legend */}
                <div className="flex items-center justify-end gap-2 mt-4 text-xs text-muted-foreground">
                    <span>Less</span>
                    <div className="flex gap-1">
                        {[0, 1, 2, 3, 4].map(level => (
                            <div
                                key={level}
                                className={`w-3 h-3 rounded-sm ${getIntensityColor(level as DayActivity['intensity'])}`}
                            />
                        ))}
                    </div>
                    <span>More</span>
                </div>
            </CardContent>
        </Card>
    );
}
