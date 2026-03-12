"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowLeft, Trophy, Medal, Crown, Star } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface LeaderEntry {
    rank: number;
    name: string;
    score: number;
    avatar?: string;
}

export default function LeaderboardPage() {
    const [leaders, setLeaders] = useState<LeaderEntry[]>([
        { rank: 1, name: "Aditya Sharma", score: 12500 },
        { rank: 2, name: "Priya Patel", score: 11800 },
        { rank: 3, name: "Rahul Kumar", score: 11200 },
        { rank: 4, name: "Sneha Gupta", score: 10900 },
        { rank: 5, name: "Vikram Singh", score: 10500 },
        { rank: 6, name: "Ananya Reddy", score: 10200 },
        { rank: 7, name: "Karan Mehta", score: 9800 },
        { rank: 8, name: "Divya Joshi", score: 9500 },
        { rank: 9, name: "Arjun Nair", score: 9200 },
        { rank: 10, name: "Neha Verma", score: 8900 },
    ]);

    const getRankIcon = (rank: number) => {
        if (rank === 1) return <Crown className="h-5 w-5 text-yellow-500" />;
        if (rank === 2) return <Medal className="h-5 w-5 text-muted-foreground" />;
        if (rank === 3) return <Medal className="h-5 w-5 text-amber-600" />;
        return <span className="text-sm font-bold text-muted-foreground">#{rank}</span>;
    };

    return (
        <div className="container mx-auto p-6 max-w-4xl">
            <div className="mb-8">
                <Link
                    href="/student/batch1-1"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-indigo-600 mb-4 transition-colors"
                >
                    <ArrowLeft className="mr-1 h-4 w-4" /> Back to Dashboard
                </Link>
                <div className="flex items-center gap-3">
                    <Trophy className="h-8 w-8 text-yellow-500" />
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-600">
                        Leaderboard
                    </h1>
                </div>
                <p className="text-muted-foreground mt-2">Top performers in Batch 1-1 this month.</p>
            </div>

            <Card className="border-yellow-100 dark:border-yellow-900/30">
                <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10">
                    <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        Monthly Rankings
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="divide-y divide-border dark:divide-gray-800">
                        {leaders.map((leader) => (
                            <div
                                key={leader.rank}
                                className={`flex items-center justify-between p-4 hover:bg-muted dark:hover:bg-gray-800/50 transition-colors ${leader.rank <= 3 ? 'bg-gradient-to-r from-yellow-50/50 to-transparent dark:from-yellow-900/5' : ''
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-8 flex justify-center">
                                        {getRankIcon(leader.rank)}
                                    </div>
                                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                        {leader.name[0]}
                                    </div>
                                    <span className="font-semibold">{leader.name}</span>
                                </div>
                                <div className="text-right">
                                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                                        {leader.score.toLocaleString()}
                                    </span>
                                    <span className="text-xs text-muted-foreground ml-1">XP</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
