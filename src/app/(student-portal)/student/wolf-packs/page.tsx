"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, Trophy, Swords, Crown, Zap } from "lucide-react"
import { BattleArena } from "@/components/wolf-pack/BattleArena"

interface Pack {
    id: number
    name: string
    house_type: string
    points: number
    weekly_points: number
    member_count: number
}

interface Battle {
    id: number
    challenger_id: number
    defender_id: number
    status: string
    winner_id?: number
}

export default function WolfPackDashboardPage() {
    const [myPack, setMyPack] = useState<Pack | null>(null)
    const [battles, setBattles] = useState<Battle[]>([])
    const [activeBatlleData, setActiveBattleData] = useState<any>(null)
    const [view, setView] = useState<'dashboard' | 'arena'>('dashboard')

    useEffect(() => {
        // Fetch Pack Data
        const fetchPack = async () => {
            try {
                const res = await fetch('/api/v1/packs/my-pack', {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                })
                if (res.ok) setMyPack(await res.json())
            } catch (e) {
                console.error(e)
            }
        }

        // Fetch Battles
        const fetchBattles = async () => {
            try {
                const res = await fetch('/api/v1/pack-battles/my-battles', {
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                })
                if (res.ok) setBattles(await res.json())
            } catch (e) {
                console.error(e)
            }
        }

        fetchPack()
        fetchBattles()
    }, [])

    const startChallenge = async () => {
        // For MVP, just challenge a random user ID 2 (assuming it exists for demo)
        // Production: Open a "Find Opponent" dialog
        try {
            const res = await fetch('/api/v1/pack-battles/challenge?defender_id=2', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            })
            const data = await res.json()

            setActiveBattleData({
                id: data.battle_id,
                questions: data.questions
            })
            setView('arena')
        } catch (e) {
            console.error(e)
        }
    }

    if (view === 'arena' && activeBatlleData) {
        return (
            <div className="container mx-auto py-12 max-w-4xl">
                <Button variant="ghost" onClick={() => setView('dashboard')} className="mb-4">Exit Arena</Button>
                <BattleArena
                    battleId={activeBatlleData.id}
                    questions={activeBatlleData.questions}
                    onComplete={(score) => {
                        // Refresh battles logic here
                    }}
                />
            </div>
        )
    }

    return (
        <div className="container mx-auto py-8 px-4 max-w-6xl space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent flex items-center gap-2">
                        <Users className="w-8 h-8 text-amber-600" />
                        Wolf Pack Portal
                    </h1>
                    <p className="text-gray-500 mt-1">Hunt together. Win together.</p>
                </div>

                {myPack && (
                    <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white border-0 shadow-xl">
                        <CardContent className="p-4 flex items-center gap-6">
                            <div className="flex flex-col items-center">
                                <div className="text-3xl font-black text-amber-500">{myPack.house_type.toUpperCase()}</div>
                                <div className="text-xs text-gray-400">HOUSE</div>
                            </div>
                            <div className="w-px h-10 bg-gray-700" />
                            <div>
                                <div className="text-xl font-bold flex items-center gap-1">
                                    <Trophy className="w-5 h-5 text-yellow-400" />
                                    {myPack.weekly_points}
                                </div>
                                <div className="text-xs text-gray-400">Weekly Pts</div>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Dashboard - Left 2 cols */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Active Battles */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="flex items-center gap-2">
                                    <Swords className="w-5 h-5 text-red-500" />
                                    Active Battles
                                </CardTitle>
                                <CardDescription>Defend your pack's honor</CardDescription>
                            </div>
                            <Button size="sm" onClick={startChallenge} className="bg-red-600 hover:bg-red-700 text-white">
                                <Zap className="w-4 h-4 mr-2" />
                                Challenge Rival
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {battles.length === 0 ? (
                                    <div className="text-center py-8 text-gray-400 border-2 border-dashed rounded-xl">
                                        No active battles. Start a fight!
                                    </div>
                                ) : (
                                    battles.map(battle => (
                                        <div key={battle.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                                    <Swords className="w-5 h-5 text-red-600" />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-sm">Battle #{battle.id}</div>
                                                    <div className="text-xs text-gray-500 uppercase">{battle.status}</div>
                                                </div>
                                            </div>
                                            <Button size="sm" variant="outline">View</Button>
                                        </div>
                                    ))
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar - Right col */}
                <div className="space-y-6">
                    {/* Minimal Leaderboard */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-base">
                                <Crown className="w-4 h-4 text-yellow-500" />
                                Top Packs (Weekly)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-3 border-b last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono font-bold text-gray-400 w-4">#{i}</span>
                                        <span className="font-medium">Alpha Squad</span>
                                    </div>
                                    <span className="font-bold text-sm">2,450 pts</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Silence Library Widget */}
                    <Card className="bg-indigo-900 text-white border-0 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600 rounded-full blur-3xl opacity-50 -translate-y-10 translate-x-10" />
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Users className="w-5 h-5" />
                                Silence Library
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-black mb-1">12</div>
                            <div className="text-sm opacity-70 mb-4">Students focusing now</div>
                            <Button className="w-full bg-white/10 hover:bg-white/20 text-white border-0">
                                Enter Quiet Room
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
