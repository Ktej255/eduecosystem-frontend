"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, Flame, TrendingUp, Users, Crown, Star, Zap } from "lucide-react"
import { getUserXP, getLevelIcon, getLevelTitle } from "@/lib/gamification/xp-engine"
import { cn } from "@/lib/utils"

interface LeaderboardEntry {
    rank: number
    name: string
    avatar: string
    xp: number
    level: number
    streak: number
    batch?: string
    isCurrentUser?: boolean
}

// Mock data - would come from backend in production
const mockLeaderboard: LeaderboardEntry[] = [
    { rank: 1, name: "Shreya M.", avatar: "SM", xp: 15420, level: 16, streak: 45, batch: "Batch 1.1" },
    { rank: 2, name: "Amit K.", avatar: "AK", xp: 14890, level: 15, streak: 32, batch: "Batch 1.1" },
    { rank: 3, name: "Priya R.", avatar: "PR", xp: 13200, level: 14, streak: 28, batch: "FastTrack" },
    { rank: 4, name: "Rohan S.", avatar: "RS", xp: 12750, level: 14, streak: 21, batch: "Batch 2.0" },
    { rank: 5, name: "Kavya T.", avatar: "KT", xp: 11900, level: 13, streak: 19, batch: "Batch 1.1" },
    { rank: 6, name: "Vikram D.", avatar: "VD", xp: 10500, level: 12, streak: 14, batch: "Batch 2.0" },
    { rank: 7, name: "Neha P.", avatar: "NP", xp: 9800, level: 11, streak: 12, batch: "FastTrack" },
    { rank: 8, name: "Arjun M.", avatar: "AM", xp: 8900, level: 10, streak: 10, batch: "Batch 1.1" },
]

export default function StudentLeaderboardPage() {
    const [activeTab, setActiveTab] = useState("weekly")
    const [currentUserXP, setCurrentUserXP] = useState(0)
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])

    useEffect(() => {
        const xpData = getUserXP()
        setCurrentUserXP(xpData.totalXP)

        // Add current user to leaderboard
        const userEntry: LeaderboardEntry = {
            rank: 0, // Will be calculated
            name: "You",
            avatar: "ME",
            xp: xpData.totalXP,
            level: xpData.level,
            streak: xpData.streak,
            isCurrentUser: true
        }

        const combined = [...mockLeaderboard, userEntry]
            .sort((a, b) => b.xp - a.xp)
            .map((entry, idx) => ({ ...entry, rank: idx + 1 }))

        setLeaderboard(combined)
    }, [])

    const getRankIcon = (rank: number) => {
        if (rank === 1) return <Crown className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />
        if (rank === 3) return <Award className="w-5 h-5 text-amber-600" />
        return <span className="text-lg font-bold text-gray-500">#{rank}</span>
    }

    const getPodiumStyle = (rank: number) => {
        if (rank === 1) return "bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border-yellow-500/30 ring-2 ring-yellow-500/20"
        if (rank === 2) return "bg-gradient-to-br from-gray-400/20 to-slate-400/20 border-gray-400/30"
        if (rank === 3) return "bg-gradient-to-br from-amber-600/20 to-orange-600/20 border-amber-600/30"
        return "bg-gray-900/50 border-gray-800"
    }

    return (
        <div className="container mx-auto py-8 px-4 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-600 mb-4 shadow-xl shadow-yellow-500/20">
                    <Trophy className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-black mb-2">Leaderboard</h1>
                <p className="text-gray-400">Compete with fellow students and climb the ranks</p>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
                <TabsList className="grid w-full grid-cols-4 bg-gray-900 border border-gray-800 rounded-2xl p-1">
                    <TabsTrigger value="daily" className="rounded-xl data-[state=active]:bg-indigo-600">Daily</TabsTrigger>
                    <TabsTrigger value="weekly" className="rounded-xl data-[state=active]:bg-indigo-600">Weekly</TabsTrigger>
                    <TabsTrigger value="alltime" className="rounded-xl data-[state=active]:bg-indigo-600">All Time</TabsTrigger>
                    <TabsTrigger value="batch" className="rounded-xl data-[state=active]:bg-indigo-600">My Batch</TabsTrigger>
                </TabsList>
            </Tabs>

            {/* Top 3 Podium */}
            <div className="grid grid-cols-3 gap-4 mb-8">
                {leaderboard.slice(0, 3).map((entry, idx) => {
                    const podiumOrder = [1, 0, 2] // Center is first place
                    const displayIdx = podiumOrder[idx]
                    const displayEntry = leaderboard[displayIdx]

                    return (
                        <div
                            key={displayEntry.rank}
                            className={cn(
                                "relative p-6 rounded-3xl border text-center transition-all hover:scale-105",
                                getPodiumStyle(displayEntry.rank),
                                displayEntry.rank === 1 ? "py-8" : "mt-4"
                            )}
                        >
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                {getRankIcon(displayEntry.rank)}
                            </div>
                            <div className={cn(
                                "w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-xl font-black mb-3",
                                displayEntry.rank === 1 ? "bg-gradient-to-br from-yellow-400 to-amber-500 text-white" : "bg-gray-800 text-white"
                            )}>
                                {displayEntry.avatar}
                            </div>
                            <h3 className="font-bold text-lg mb-1">{displayEntry.name}</h3>
                            <div className="flex items-center justify-center gap-1 text-sm text-gray-400 mb-2">
                                <span>{getLevelIcon(displayEntry.level)}</span>
                                <span>Level {displayEntry.level}</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <Badge className="bg-indigo-500/20 text-indigo-400 border-0">
                                    <Zap className="w-3 h-3 mr-1" />
                                    {displayEntry.xp.toLocaleString()} XP
                                </Badge>
                            </div>
                            {displayEntry.streak > 0 && (
                                <div className="mt-2 flex items-center justify-center gap-1 text-orange-400 text-xs">
                                    <Flame className="w-3 h-3" />
                                    {displayEntry.streak} day streak
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            {/* Full Leaderboard */}
            <Card className="bg-gray-900 border-gray-800 rounded-3xl overflow-hidden">
                <CardHeader className="border-b border-gray-800">
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <Users className="w-5 h-5 text-indigo-400" />
                        Full Rankings
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0 divide-y divide-gray-800">
                    {leaderboard.map((entry) => (
                        <div
                            key={entry.rank}
                            className={cn(
                                "flex items-center justify-between p-4 hover:bg-gray-800/50 transition-colors",
                                entry.isCurrentUser && "bg-indigo-500/10 border-l-4 border-indigo-500"
                            )}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-8 text-center">{getRankIcon(entry.rank)}</div>
                                <div className={cn(
                                    "w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm",
                                    entry.isCurrentUser ? "bg-indigo-600 text-white" : "bg-gray-800 text-white"
                                )}>
                                    {entry.avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold">{entry.name}</h4>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <span>{getLevelIcon(entry.level)} Lv.{entry.level}</span>
                                        {entry.batch && <span>• {entry.batch}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                {entry.streak > 0 && (
                                    <div className="flex items-center gap-1 text-orange-400 text-sm">
                                        <Flame className="w-3.5 h-3.5" />
                                        {entry.streak}
                                    </div>
                                )}
                                <div className="text-right">
                                    <p className="font-black text-indigo-400">{entry.xp.toLocaleString()}</p>
                                    <p className="text-[10px] text-gray-500 uppercase">XP</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}
