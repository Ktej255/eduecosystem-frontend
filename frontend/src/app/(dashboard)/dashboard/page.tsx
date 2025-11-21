"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Brain, Activity, Calendar, Users, Smile, Zap, LogOut } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import AIAssistant from "@/components/ai-assistant"
import { useAuth } from "@/contexts/auth-context"
import { useGameStats, useWolfPack, useTasks } from "@/hooks/use-api"

export default function DashboardPage() {
    const [goal, setGoal] = useState("")
    const [isFocused, setIsFocused] = useState(false)
    const { user, logout } = useAuth()
    const { stats } = useGameStats()
    const { pack, joinPack } = useWolfPack()
    const { tasks } = useTasks()

    const handleJoinPack = async () => {
        try {
            await joinPack()
        } catch (error) {
            console.error("Failed to join pack:", error)
        }
    }

    return (
        <div className="h-full flex flex-col items-center justify-center p-8 space-y-8">
            {!isFocused ? (
                <div className="text-center space-y-8 max-w-2xl animate-in fade-in zoom-in duration-500">
                    <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                        What is your Goal?
                    </h1>
                    <p className="text-gray-400 text-xl">
                        Define your target. The AI will build the path.
                    </p>
                    <div className="flex items-center space-x-4">
                        <Input
                            className="bg-gray-800/50 border-gray-700 text-xl h-14 px-6 rounded-full focus:ring-cyan-500"
                            placeholder="e.g. Crack UPSC 2026"
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                        />
                        <Button
                            size="lg"
                            className="h-14 px-8 rounded-full bg-cyan-600 hover:bg-cyan-500"
                            onClick={() => setIsFocused(true)}
                        >
                            <ArrowRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="w-full max-w-4xl p-8 space-y-8 relative min-h-screen">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold text-white">Welcome back, {user?.full_name || 'User'}</h1>
                            <p className="text-gray-400 mt-1">Here's your holistic learning overview for today.</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="bg-gray-900 px-4 py-2 rounded-full border border-gray-800 flex items-center">
                                <Zap className="h-4 w-4 text-yellow-500 mr-2" />
                                <span className="text-white font-bold">{stats?.streak_days || 0} Day Streak</span>
                            </div>
                            <div className="bg-gray-900 px-4 py-2 rounded-full border border-gray-800 flex items-center">
                                <span className="text-yellow-500 mr-2">🪙</span>
                                <span className="text-white font-bold">{stats?.coins || 0} Coins</span>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={logout}
                                className="border-gray-700 text-gray-300 hover:text-white"
                            >
                                <LogOut className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Widgets Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Graphology Widget */}
                        <Link href="/grapho">
                            <Card className="bg-gray-900 border-gray-800 p-6 hover:border-cyan-500/50 transition cursor-pointer group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-purple-900/30 rounded-xl">
                                        <Brain className="h-6 w-6 text-purple-400" />
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-cyan-500 transition" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">Graphology Insights</h3>
                                <p className="text-gray-400 text-sm mb-4">Upload handwriting for analysis</p>
                                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                                    <div className="bg-purple-500 h-full w-[75%]" />
                                </div>
                                <p className="text-xs text-gray-500 mt-2">75% Match with Ideal Profile</p>
                            </Card>
                        </Link>

                        {/* Attention Widget */}
                        <Link href="/monitoring">
                            <Card className="bg-gray-900 border-gray-800 p-6 hover:border-cyan-500/50 transition cursor-pointer group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-blue-900/30 rounded-xl">
                                        <Activity className="h-6 w-6 text-blue-400" />
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-cyan-500 transition" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">Focus Score</h3>
                                <p className="text-gray-400 text-sm mb-4">Today's Average</p>
                                <div className="flex items-end space-x-2">
                                    <span className="text-4xl font-bold text-white">82</span>
                                    <span className="text-sm text-green-500 mb-1">↑ 4%</span>
                                </div>
                            </Card>
                        </Link>

                        {/* Tasks Widget */}
                        <Link href="/planner">
                            <Card className="bg-gray-900 border-gray-800 p-6 hover:border-cyan-500/50 transition cursor-pointer group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-green-900/30 rounded-xl">
                                        <Calendar className="h-6 w-6 text-green-400" />
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-cyan-500 transition" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">Up Next</h3>
                                <div className="space-y-3 mt-4">
                                    {tasks && tasks.length > 0 ? (
                                        tasks.slice(0, 2).map((task: any, i: number) => (
                                            <div key={i} className="flex items-center text-sm text-gray-300">
                                                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                                                {task.title}
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-sm text-gray-400">No tasks yet</p>
                                    )}
                                </div>
                            </Card>
                        </Link>

                        {/* Community Widget - Wolf Pack */}
                        <Card className="bg-gray-900 border-gray-800 p-6 hover:border-cyan-500/50 transition cursor-pointer group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-orange-900/30 rounded-xl">
                                    <Users className="h-6 w-6 text-orange-400" />
                                </div>
                                <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-cyan-500 transition" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">Wolf Pack</h3>
                            {pack ? (
                                <>
                                    <p className="text-gray-400 text-sm mb-4">{pack.name} - {pack.members?.length || 0} members</p>
                                    <div className="flex -space-x-2">
                                        {pack.members?.slice(0, 3).map((member: any, i: number) => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 border-2 border-gray-900 flex items-center justify-center text-xs text-white font-bold">
                                                {member.full_name?.[0] || 'U'}
                                            </div>
                                        ))}
                                        {pack.members && pack.members.length > 3 && (
                                            <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-900 flex items-center justify-center text-xs text-white font-bold">
                                                +{pack.members.length - 3}
                                            </div>
                                        )}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p className="text-gray-400 text-sm mb-4">Join a learning pack</p>
                                    <Button
                                        onClick={handleJoinPack}
                                        className="w-full bg-orange-600 hover:bg-orange-500"
                                        size="sm"
                                    >
                                        Join Pack
                                    </Button>
                                </>
                            )}
                        </Card>

                        {/* Wellness Widget */}
                        <Link href="/meditation">
                            <Card className="bg-gray-900 border-gray-800 p-6 hover:border-cyan-500/50 transition cursor-pointer group">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-pink-900/30 rounded-xl">
                                        <Smile className="h-6 w-6 text-pink-400" />
                                    </div>
                                    <ArrowRight className="h-5 w-5 text-gray-600 group-hover:text-cyan-500 transition" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-1">Wellness Check</h3>
                                <p className="text-gray-400 text-sm mb-4">Current Mood: Productive</p>
                                <div className="flex justify-between mt-2">
                                    <span className="text-2xl grayscale hover:grayscale-0 transition cursor-pointer">😐</span>
                                    <span className="text-2xl grayscale hover:grayscale-0 transition cursor-pointer">🙂</span>
                                    <span className="text-2xl grayscale-0 scale-110 cursor-pointer">😎</span>
                                    <span className="text-2xl grayscale hover:grayscale-0 transition cursor-pointer">🤩</span>
                                </div>
                            </Card>
                        </Link>

                        {/* Quick Actions */}
                        <Card className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/30 p-6 flex flex-col justify-center items-center text-center">
                            <h3 className="text-xl font-bold text-white mb-2">Ready to Focus?</h3>
                            <p className="text-gray-400 text-sm mb-6">Enter Shadow Mode for deep work.</p>
                            <Link href="/shadow-mode">
                                <Button className="bg-cyan-600 hover:bg-cyan-500 w-full">
                                    Start Session
                                </Button>
                            </Link>
                        </Card>
                    </div>

                    {/* Global AI Assistant */}
                    <AIAssistant />
                </div>
            )}
        </div>
    )
}
