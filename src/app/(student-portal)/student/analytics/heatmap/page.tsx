"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Calendar,
    Flame,
    Clock,
    TrendingUp,
    Activity,
    ChevronLeft,
    ChevronRight
} from "lucide-react"
import { getHeatmapData, getIntensityColor, formatStudyTime, DayActivity } from "@/lib/analytics/StudyHeatmapGenerator"
import { cn } from "@/lib/utils"

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function StudyHeatmapPage() {
    const [heatmapData, setHeatmapData] = useState<ReturnType<typeof getHeatmapData> | null>(null)
    const [selectedDay, setSelectedDay] = useState<DayActivity | null>(null)
    const [year, setYear] = useState(new Date().getFullYear())

    useEffect(() => {
        setHeatmapData(getHeatmapData(365))
    }, [])

    if (!heatmapData) return <div className="p-12 text-center text-gray-500">Loading...</div>

    // Group days by week for the grid
    const weeks: DayActivity[][] = []
    let currentWeek: DayActivity[] = []

    // Pad the first week with empty slots
    const firstDayOfWeek = new Date(heatmapData.days[0]?.date).getDay()
    for (let i = 0; i < firstDayOfWeek; i++) {
        currentWeek.push({ date: '', studyMinutes: 0, pomodorosCompleted: 0, flashcardsReviewed: 0, mcqsAttempted: 0, intensity: 0 })
    }

    heatmapData.days.forEach((day) => {
        currentWeek.push(day)
        if (currentWeek.length === 7) {
            weeks.push(currentWeek)
            currentWeek = []
        }
    })
    if (currentWeek.length > 0) {
        weeks.push(currentWeek)
    }

    return (
        <div className="container mx-auto py-8 px-4 max-w-6xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-xl shadow-emerald-500/20">
                            <Activity className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-black">Study Heatmap</h1>
                            <p className="text-gray-400 text-sm">Visualize your learning consistency</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" onClick={() => setYear(y => y - 1)}>
                        <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <span className="text-lg font-bold min-w-[60px] text-center">{year}</span>
                    <Button variant="ghost" size="icon" onClick={() => setYear(y => Math.min(y + 1, new Date().getFullYear()))}>
                        <ChevronRight className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Total Hours</p>
                                <p className="text-3xl font-black text-emerald-400">{Math.round(heatmapData.totalStudyMinutes / 60)}</p>
                            </div>
                            <Clock className="w-8 h-8 text-emerald-500/30" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Days Active</p>
                                <p className="text-3xl font-black text-blue-400">{heatmapData.totalDaysActive}</p>
                            </div>
                            <Calendar className="w-8 h-8 text-blue-500/30" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Current Streak</p>
                                <p className="text-3xl font-black text-orange-400">{heatmapData.currentStreak}</p>
                            </div>
                            <Flame className={cn("w-8 h-8", heatmapData.currentStreak > 0 ? "text-orange-500 animate-pulse" : "text-orange-500/30")} />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Best Streak</p>
                                <p className="text-3xl font-black text-purple-400">{heatmapData.longestStreak}</p>
                            </div>
                            <TrendingUp className="w-8 h-8 text-purple-500/30" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Heatmap Grid */}
            <Card className="bg-gray-900 border-gray-800 rounded-3xl overflow-hidden">
                <CardHeader>
                    <CardTitle className="text-lg">Activity Overview</CardTitle>
                    <CardDescription>Click on a day to see details</CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Month Labels */}
                    <div className="flex mb-2 ml-8">
                        {MONTHS.map((month, idx) => (
                            <div key={month} className="flex-1 text-[10px] text-gray-500 font-medium">
                                {month}
                            </div>
                        ))}
                    </div>

                    {/* Heatmap */}
                    <div className="flex gap-1">
                        {/* Day labels */}
                        <div className="flex flex-col gap-1 mr-2 justify-center">
                            {DAYS.filter((_, i) => i % 2 === 1).map(day => (
                                <div key={day} className="text-[9px] text-gray-600 h-3 flex items-center">{day}</div>
                            ))}
                        </div>

                        {/* Grid */}
                        <div className="flex gap-[3px] overflow-x-auto pb-2">
                            {weeks.map((week, weekIdx) => (
                                <div key={weekIdx} className="flex flex-col gap-[3px]">
                                    {week.map((day, dayIdx) => (
                                        <button
                                            key={`${weekIdx}-${dayIdx}`}
                                            className={cn(
                                                "w-3 h-3 rounded-sm transition-all hover:ring-2 hover:ring-white/20",
                                                day.date ? getIntensityColor(day.intensity) : "bg-transparent",
                                                selectedDay?.date === day.date && "ring-2 ring-white"
                                            )}
                                            onClick={() => day.date && setSelectedDay(day)}
                                            title={day.date ? `${day.date}: ${formatStudyTime(day.studyMinutes)}` : ''}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="flex items-center justify-end gap-2 mt-4 text-xs text-gray-500">
                        <span>Less</span>
                        <div className="flex gap-1">
                            <div className="w-3 h-3 rounded-sm bg-gray-800" />
                            <div className="w-3 h-3 rounded-sm bg-green-900" />
                            <div className="w-3 h-3 rounded-sm bg-green-700" />
                            <div className="w-3 h-3 rounded-sm bg-green-600" />
                            <div className="w-3 h-3 rounded-sm bg-green-500" />
                        </div>
                        <span>More</span>
                    </div>
                </CardContent>
            </Card>

            {/* Selected Day Details */}
            {selectedDay && (
                <Card className="mt-6 bg-gray-900 border-gray-800 rounded-2xl">
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-400 text-sm mb-1">
                                    {new Date(selectedDay.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                </p>
                                <p className="text-2xl font-black text-white">{formatStudyTime(selectedDay.studyMinutes)}</p>
                            </div>
                            <div className="flex gap-4 text-center">
                                <div>
                                    <p className="text-2xl font-bold text-purple-400">{selectedDay.pomodorosCompleted}</p>
                                    <p className="text-[10px] text-gray-500 uppercase">Pomodoros</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-blue-400">{selectedDay.flashcardsReviewed}</p>
                                    <p className="text-[10px] text-gray-500 uppercase">Flashcards</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-emerald-400">{selectedDay.mcqsAttempted}</p>
                                    <p className="text-[10px] text-gray-500 uppercase">MCQs</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
