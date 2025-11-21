"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { BarChart3, TrendingUp, Target, Clock, Zap, Award, Brain, Users } from "lucide-react"
import api from "@/lib/api"

export default function AnalyticsPage() {
    const [stats, setStats] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchAnalytics()
    }, [])

    const fetchAnalytics = async () => {
        try {
            // Fetch data from multiple endpoints
            const [shadowProgress, attentionStats, gamification, user] = await Promise.all([
                api.get("/shadow-mode/progress").catch(() => ({ data: null })),
                api.get("/monitoring/attention/stats").catch(() => ({ data: null })),
                api.get("/gamification/stats").catch(() => ({ data: null })),
                api.get("/users/me").catch(() => ({ data: null }))
            ])

            setStats({
                shadow: shadowProgress.data,
                attention: attentionStats.data,
                gamification: gamification.data,
                user: user.data
            })
        } catch (error) {
            console.error("Failed to fetch analytics:", error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-white text-xl">Loading analytics...</div>
            </div>
        )
    }

    return (
        <div className="p-8 space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                    Analytics Dashboard
                </h1>
                <p className="text-gray-400 text-lg">
                    Track your progress, insights, and achievements across all learning modules
                </p>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="bg-gradient-to-br from-purple-900/30 to-purple-700/20 border-purple-500/30 p-6">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-purple-500/20 rounded-xl">
                            <Award className="h-8 w-8 text-purple-400" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Total Coins</p>
                            <p className="text-3xl font-bold text-white">{stats?.user?.coins || 0}</p>
                        </div>
                    </div>
                </Card>

                <Card className="bg-gradient-to-br from-cyan-900/30 to-cyan-700/20 border-cyan-500/30 p-6">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-cyan-500/20 rounded-xl">
                            <Zap className="h-8 w-8 text-cyan-400" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Current Streak</p>
                            <p className="text-3xl font-bold text-white">{stats?.user?.streak_days || 0} days</p>
                        </div>
                    </div>
                </Card>

                <Card className="bg-gradient-to-br from-blue-900/30 to-blue-700/20 border-blue-500/30 p-6">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-blue-500/20 rounded-xl">
                            <Brain className="h-8 w-8 text-blue-400" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Avg Focus</p>
                            <p className="text-3xl font-bold text-white">{stats?.attention?.average_focus || 0}%</p>
                        </div>
                    </div>
                </Card>

                <Card className="bg-gradient-to-br from-green-900/30 to-green-700/20 border-green-500/30 p-6">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-green-500/20 rounded-xl">
                            <Target className="h-8 w-8 text-green-400" />
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm">Shadow Days</p>
                            <p className="text-3xl font-bold text-white">{stats?.shadow?.completed_days || 0}/7</p>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Detailed Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Shadow Mode Progress */}
                <Card className="bg-gray-900 border-gray-800 p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Target className="mr-2 h-5 w-5 text-purple-400" />
                        Shadow Mode Progress
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Completed Days</span>
                            <span className="text-white font-bold">{stats?.shadow?.completed_days || 0} / 7</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Total Time</span>
                            <span className="text-white font-bold">{stats?.shadow?.total_minutes || 0} minutes</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Average Focus</span>
                            <span className="text-white font-bold">{stats?.shadow?.avg_focus_score || 0}/10</span>
                        </div>
                        <div className="w-full bg-gray-800 h-3 rounded-full overflow-hidden mt-4">
                            <div 
                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all"
                                style={{ width: `${((stats?.shadow?.completed_days || 0) / 7) * 100}%` }}
                            />
                        </div>
                    </div>
                </Card>

                {/* Attention Statistics */}
                <Card className="bg-gray-900 border-gray-800 p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Brain className="mr-2 h-5 w-5 text-cyan-400" />
                        Attention Tracking
                    </h3>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Total Checks</span>
                            <span className="text-white font-bold">{stats?.attention?.total_checks || 0}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400">Average Focus</span>
                            <span className="text-white font-bold">{stats?.attention?.average_focus || 0}%</span>
                        </div>
                        {stats?.attention?.recent_scores && stats.attention.recent_scores.length > 0 && (
                            <div className="mt-4">
                                <p className="text-gray-400 text-sm mb-2">Recent Scores</p>
                                <div className="flex space-x-1">
                                    {stats.attention.recent_scores.slice(0, 10).map((score: number, i: number) => (
                                        <div 
                                            key={i} 
                                            className="flex-1 bg-gray-800 rounded"
                                            style={{ height: `${score}px`, minHeight: '10px' }}
                                            title={`${score}%`}
                                        >
                                            <div 
                                                className={`w-full rounded ${
                                                    score > 80 ? 'bg-green-500' : 
                                                    score > 50 ? 'bg-yellow-500' : 'bg-red-500'
                                                }`}
                                                style={{ height: '100%' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </Card>

                {/* Weekly Activity */}
                <Card className="bg-gray-900 border-gray-800 p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <BarChart3 className="mr-2 h-5 w-5 text-blue-400" />
                        Weekly Activity
                    </h3>
                    <div className="space-y-3">
                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                            const activity = Math.floor(Math.random() * 100) // Mock data
                            return (
                                <div key={day} className="space-y-1">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-400">{day}</span>
                                        <span className="text-gray-400">{activity} min</span>
                                    </div>
                                    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                            style={{ width: `${activity}%` }}
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Card>

                {/* Achievement Progress */}
                <Card className="bg-gray-900 border-gray-800 p-6">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                        <TrendingUp className="mr-2 h-5 w-5 text-green-400" />
                        Recent Achievements
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                            <div className="p-2 bg-yellow-500/20 rounded-lg">
                                <Award className="h-5 w-5 text-yellow-400" />
                            </div>
                            <div>
                                <p className="text-white font-medium">First Shadow Session</p>
                                <p className="text-gray-400 text-sm">Completed your first deep focus session</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                            <div className="p-2 bg-purple-500/20 rounded-lg">
                                <Brain className="h-5 w-5 text-purple-400" />
                            </div>
                            <div>
                                <p className="text-white font-medium">Handwriting Analyzed</p>
                                <p className="text-gray-400 text-sm">Unlocked personality insights</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-lg">
                            <div className="p-2 bg-cyan-500/20 rounded-lg">
                                <Zap className="h-5 w-5 text-cyan-400" />
                            </div>
                            <div>
                                <p className="text-white font-medium">3-Day Streak</p>
                                <p className="text-gray-400 text-sm">Keep the momentum going!</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Insights & Recommendations */}
            <Card className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-indigo-500/30 p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <TrendingUp className="mr-3 h-6 w-6 text-indigo-400" />
                    AI Insights & Recommendations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-black/20 rounded-lg border border-indigo-500/20">
                        <h4 className="font-bold text-white mb-2">Peak Performance Time</h4>
                        <p className="text-gray-300 text-sm">
                            Your focus is highest between 9-11 AM. Schedule important tasks during this window.
                        </p>
                    </div>
                    <div className="p-4 bg-black/20 rounded-lg border border-purple-500/20">
                        <h4 className="font-bold text-white mb-2">Consistency Trend</h4>
                        <p className="text-gray-300 text-sm">
                            You're on track! Maintain your current pace to complete 7-day shadow mode this week.
                        </p>
                    </div>
                    <div className="p-4 bg-black/20 rounded-lg border border-pink-500/20">
                        <h4 className="font-bold text-white mb-2">Next Milestone</h4>
                        <p className="text-gray-300 text-sm">
                            75 more coins to unlock the "Focus Master" badge. Keep pushing!
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    )
}
