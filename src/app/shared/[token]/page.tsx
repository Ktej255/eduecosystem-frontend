"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Trophy,
    Flame,
    Calendar,
    TrendingUp,
    User,
    Shield,
    Clock
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SharedData {
    showXP: boolean
    showStreak: boolean
    showLevel: boolean
    showHeatmap: boolean
    showLeaderboardRank: boolean
    xp: {
        totalXP: number
        level: number
        currentXP: number
        xpToNextLevel: number
    }
    streak: {
        currentStreak: number
        longestStreak: number
    }
}

export default function SharedProgressPage() {
    const { token } = useParams()
    const [data, setData] = useState<SharedData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        // In production, this would be a backend API call
        // For now, we'll check localStorage (would be server-side in production)
        const loadData = async () => {
            try {
                // Simulate API call
                await new Promise(r => setTimeout(r, 500))

                // Try to get from localStorage (for demo purposes)
                const stored = localStorage.getItem(`shareSettings_${token}`)
                if (stored) {
                    setData(JSON.parse(stored))
                } else {
                    // Mock data for demonstration
                    setData({
                        showXP: true,
                        showStreak: true,
                        showLevel: true,
                        showHeatmap: true,
                        showLeaderboardRank: false,
                        xp: { totalXP: 2450, level: 8, currentXP: 350, xpToNextLevel: 800 },
                        streak: { currentStreak: 12, longestStreak: 28 }
                    })
                }
            } catch (err) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        loadData()
    }, [token])

    const getLevelIcon = (level: number): string => {
        if (level >= 20) return '👑'
        if (level >= 15) return '💎'
        if (level >= 10) return '🏆'
        if (level >= 7) return '⭐'
        if (level >= 4) return '🌟'
        return '✨'
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-950 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-gray-400">Loading progress...</p>
                </div>
            </div>
        )
    }

    if (error || !data) {
        return (
            <div className="min-h-screen bg-gray-950 flex items-center justify-center">
                <Card className="bg-gray-900 border-gray-800 max-w-md mx-4">
                    <CardContent className="pt-6 text-center">
                        <Shield className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                        <h2 className="text-xl font-bold mb-2">Link Not Found</h2>
                        <p className="text-gray-500 text-sm">This share link may have expired or been revoked.</p>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-indigo-950/30 to-gray-950 py-12 px-4">
            <div className="max-w-lg mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mb-4 shadow-2xl shadow-indigo-500/30">
                        <User className="w-10 h-10 text-white" />
                    </div>
                    <h1 className="text-2xl font-black text-white mb-1">Student Progress</h1>
                    <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                        Shared View
                    </Badge>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {data.showLevel && (
                        <Card className="bg-gray-900/80 border-gray-800 backdrop-blur-sm">
                            <CardContent className="pt-6 text-center">
                                <span className="text-4xl">{getLevelIcon(data.xp.level)}</span>
                                <p className="text-white font-bold text-lg mt-2">Level {data.xp.level}</p>
                                <p className="text-gray-500 text-xs">Scholar</p>
                            </CardContent>
                        </Card>
                    )}

                    {data.showXP && (
                        <Card className="bg-gray-900/80 border-gray-800 backdrop-blur-sm">
                            <CardContent className="pt-6 text-center">
                                <Trophy className="w-8 h-8 text-yellow-400 mx-auto" />
                                <p className="text-white font-bold text-lg mt-2">{data.xp.totalXP.toLocaleString()}</p>
                                <p className="text-gray-500 text-xs">Total XP</p>
                            </CardContent>
                        </Card>
                    )}

                    {data.showStreak && (
                        <Card className="bg-gray-900/80 border-gray-800 backdrop-blur-sm">
                            <CardContent className="pt-6 text-center">
                                <Flame className={cn("w-8 h-8 mx-auto", data.streak.currentStreak > 0 ? "text-orange-400 animate-pulse" : "text-gray-600")} />
                                <p className="text-white font-bold text-lg mt-2">{data.streak.currentStreak} Days</p>
                                <p className="text-gray-500 text-xs">Current Streak</p>
                            </CardContent>
                        </Card>
                    )}

                    {data.showStreak && (
                        <Card className="bg-gray-900/80 border-gray-800 backdrop-blur-sm">
                            <CardContent className="pt-6 text-center">
                                <TrendingUp className="w-8 h-8 text-emerald-400 mx-auto" />
                                <p className="text-white font-bold text-lg mt-2">{data.streak.longestStreak} Days</p>
                                <p className="text-gray-500 text-xs">Best Streak</p>
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Level Progress */}
                {data.showLevel && (
                    <Card className="bg-gray-900/80 border-gray-800 backdrop-blur-sm mb-6">
                        <CardHeader>
                            <CardTitle className="text-sm flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-indigo-400" />
                                Progress to Level {data.xp.level + 1}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between text-xs text-gray-400 mb-2">
                                <span>{data.xp.currentXP} XP</span>
                                <span>{data.xp.xpToNextLevel} XP</span>
                            </div>
                            <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                                    style={{ width: `${(data.xp.currentXP / data.xp.xpToNextLevel) * 100}%` }}
                                />
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Heatmap Placeholder */}
                {data.showHeatmap && (
                    <Card className="bg-gray-900/80 border-gray-800 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-sm flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-emerald-400" />
                                Study Activity
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-7 gap-1">
                                {Array.from({ length: 28 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className={cn(
                                            "w-full aspect-square rounded-sm",
                                            Math.random() > 0.3
                                                ? `bg-emerald-${Math.floor(Math.random() * 3 + 5)}00`
                                                : "bg-gray-800"
                                        )}
                                    />
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 text-center mt-3">Last 4 weeks</p>
                        </CardContent>
                    </Card>
                )}

                {/* Footer */}
                <p className="text-center text-gray-600 text-xs mt-8 flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" />
                    Last updated: {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    )
}
