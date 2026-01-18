"use client"

import { useState, useEffect } from "react"
import { getUserXP, getLevelIcon, getLevelTitle, getXPHistory } from "@/lib/gamification/xp-engine"
import { getStreakInfo } from "@/lib/gamification/streak-tracker"
import { Progress } from "@/components/ui/progress"
import { Flame, Zap, Star, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface XPProgressBarProps {
    compact?: boolean
    className?: string
}

export function XPProgressBar({ compact = false, className }: XPProgressBarProps) {
    const [xpData, setXpData] = useState<ReturnType<typeof getUserXP> | null>(null)
    const [streakData, setStreakData] = useState<ReturnType<typeof getStreakInfo> | null>(null)
    const [todayXP, setTodayXP] = useState(0)

    useEffect(() => {
        const loadData = () => {
            setXpData(getUserXP())
            setStreakData(getStreakInfo())
            const history = getXPHistory(1)
            setTodayXP(history[0]?.xp || 0)
        }

        loadData()
        // Refresh every 10 seconds for live updates
        const interval = setInterval(loadData, 10000)
        return () => clearInterval(interval)
    }, [])

    if (!xpData) return null

    const progressPercent = xpData.xpToNextLevel > 0
        ? Math.min((xpData.currentXP / xpData.xpToNextLevel) * 100, 100)
        : 100

    if (compact) {
        return (
            <div className={cn("flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-500/20", className)}>
                <div className="flex items-center gap-1">
                    <span className="text-lg">{getLevelIcon(xpData.level)}</span>
                    <span className="text-xs font-bold text-indigo-400">Lv.{xpData.level}</span>
                </div>
                <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
                {streakData && streakData.currentStreak > 0 && (
                    <div className="flex items-center gap-0.5">
                        <Flame className="w-3 h-3 text-orange-500" />
                        <span className="text-[10px] font-bold text-orange-400">{streakData.currentStreak}</span>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className={cn("p-4 bg-gradient-to-br from-gray-900 via-indigo-950/50 to-purple-950/50 rounded-2xl border border-indigo-500/20 shadow-xl shadow-indigo-500/5", className)}>
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl shadow-lg">
                        {getLevelIcon(xpData.level)}
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 font-medium">{getLevelTitle(xpData.level)}</p>
                        <p className="text-lg font-black text-white">Level {xpData.level}</p>
                    </div>
                </div>
                {streakData && streakData.currentStreak > 0 && (
                    <div className="flex flex-col items-center px-3 py-1.5 bg-orange-500/10 rounded-xl border border-orange-500/20">
                        <div className="flex items-center gap-1">
                            <Flame className={cn("w-4 h-4", streakData.currentStreak >= 7 ? "text-orange-400 animate-pulse" : "text-orange-500")} />
                            <span className="text-lg font-black text-orange-400">{streakData.currentStreak}</span>
                        </div>
                        <span className="text-[9px] text-orange-300/70 font-medium uppercase tracking-wider">Day Streak</span>
                    </div>
                )}
            </div>

            {/* XP Progress */}
            <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-400 font-medium flex items-center gap-1">
                        <Zap className="w-3 h-3 text-yellow-500" />
                        {xpData.currentXP.toLocaleString()} / {xpData.xpToNextLevel.toLocaleString()} XP
                    </span>
                    <span className="text-indigo-400 font-bold">{Math.round(progressPercent)}%</span>
                </div>
                <div className="h-3 bg-gray-800/80 rounded-full overflow-hidden border border-white/5">
                    <div
                        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-700 ease-out relative"
                        style={{ width: `${progressPercent}%` }}
                    >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                </div>
            </div>

            {/* Today's XP */}
            {todayXP > 0 && (
                <div className="mt-3 flex items-center justify-between text-xs">
                    <span className="text-gray-500 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Today
                    </span>
                    <span className="text-emerald-400 font-bold">+{todayXP} XP</span>
                </div>
            )}

            {/* Total XP */}
            <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
                <span className="text-gray-600 uppercase tracking-wider">Total XP Earned</span>
                <span className="text-purple-400 font-black">{xpData.totalXP.toLocaleString()}</span>
            </div>
        </div>
    )
}
