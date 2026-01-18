"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
    Brain,
    Calendar,
    TrendingUp,
    Clock,
    CheckCircle2,
    AlertCircle,
    Zap,
    RotateCcw,
    ChevronRight,
    BookOpen
} from "lucide-react"
import { getDueCards, getUpcomingCards, getSRSStats } from "@/lib/srs/srs-scheduler"
import { SRSCard } from "@/lib/srs/srs-types"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function ReviewQueuePage() {
    const [dueCards, setDueCards] = useState<SRSCard[]>([])
    const [upcomingCards, setUpcomingCards] = useState<SRSCard[]>([])
    const [stats, setStats] = useState({
        totalCards: 0,
        dueToday: 0,
        newCards: 0,
        learningCards: 0,
        masteredCards: 0,
        retentionRate: 0
    })

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        setDueCards(getDueCards())
        setUpcomingCards(getUpcomingCards(7))
        setStats(getSRSStats())
    }

    const getStateColor = (state: SRSCard['state']) => {
        switch (state) {
            case 'new': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
            case 'learning': return 'bg-amber-500/20 text-amber-400 border-amber-500/30'
            case 'review': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
            case 'mastered': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
        }
    }

    return (
        <div className="container mx-auto py-8 px-4 max-w-5xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-purple-500/20">
                            <Brain className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-black">Review Queue</h1>
                            <p className="text-gray-400 text-sm">Spaced Repetition powered by SM-2 algorithm</p>
                        </div>
                    </div>
                </div>
                {dueCards.length > 0 && (
                    <Link href="/student/flashcards/review">
                        <Button size="lg" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-xl shadow-purple-500/20">
                            <Zap className="w-5 h-5 mr-2" />
                            Start Review ({dueCards.length} cards)
                        </Button>
                    </Link>
                )}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Due Today</p>
                                <p className="text-3xl font-black text-purple-400">{stats.dueToday}</p>
                            </div>
                            <AlertCircle className={cn("w-8 h-8", stats.dueToday > 0 ? "text-purple-500 animate-pulse" : "text-gray-700")} />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Retention</p>
                                <p className="text-3xl font-black text-emerald-400">{stats.retentionRate}%</p>
                            </div>
                            <TrendingUp className="w-8 h-8 text-emerald-500/30" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Mastered</p>
                                <p className="text-3xl font-black text-cyan-400">{stats.masteredCards}</p>
                            </div>
                            <CheckCircle2 className="w-8 h-8 text-cyan-500/30" />
                        </div>
                    </CardContent>
                </Card>
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold">Total Cards</p>
                                <p className="text-3xl font-black text-indigo-400">{stats.totalCards}</p>
                            </div>
                            <BookOpen className="w-8 h-8 text-indigo-500/30" />
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Due Cards */}
            <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <Clock className="w-5 h-5 text-purple-400" />
                        Due for Review
                    </h2>
                    {dueCards.length > 0 && (
                        <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                            {dueCards.length} cards
                        </Badge>
                    )}
                </div>

                {dueCards.length > 0 ? (
                    <div className="space-y-3">
                        {dueCards.slice(0, 5).map((card) => (
                            <Card key={card.id} className="bg-gray-900 border-gray-800 hover:border-purple-500/30 transition-colors group">
                                <CardContent className="p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Badge className={cn("text-[10px] uppercase", getStateColor(card.state))}>
                                                    {card.state}
                                                </Badge>
                                                {card.repetitions === 0 && (
                                                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-[10px]">
                                                        NEW
                                                    </Badge>
                                                )}
                                            </div>
                                            <p className="text-gray-200 font-medium line-clamp-1">{card.front}</p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                Interval: {card.interval} days • EF: {card.easeFactor.toFixed(2)}
                                            </p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-purple-400 transition-colors" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                        {dueCards.length > 5 && (
                            <p className="text-center text-gray-500 text-sm">
                                + {dueCards.length - 5} more cards due
                            </p>
                        )}
                    </div>
                ) : (
                    <Card className="bg-gray-900/50 border-dashed border-gray-800">
                        <CardContent className="py-12 text-center">
                            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                            <h3 className="text-lg font-bold mb-2">All caught up!</h3>
                            <p className="text-gray-500 text-sm">No cards due for review right now.</p>
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Upcoming Reviews */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-indigo-400" />
                        Upcoming (7 days)
                    </h2>
                </div>

                {upcomingCards.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {upcomingCards.slice(0, 6).map((card) => (
                            <Card key={card.id} className="bg-gray-900/50 border-gray-800">
                                <CardContent className="p-4">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <p className="text-gray-300 text-sm line-clamp-1 mb-1">{card.front}</p>
                                            <p className="text-xs text-gray-600">
                                                Due: {new Date(card.nextReviewDate).toLocaleDateString()}
                                            </p>
                                        </div>
                                        <Badge className={cn("text-[9px]", getStateColor(card.state))}>
                                            {card.state}
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600 text-sm">No upcoming reviews in the next 7 days.</p>
                )}
            </div>
        </div>
    )
}
