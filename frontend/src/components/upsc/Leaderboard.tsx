"use client";

import React, { useState, useEffect } from 'react';
import { Trophy, Crown, Medal, TrendingUp, User } from 'lucide-react';
import { useGamification } from '@/context/GamificationContext';

interface LeaderboardEntry {
    rank: number;
    name: string;
    xp: number;
    level: number;
    avatar?: string;
    isCurrentUser?: boolean;
}

const MOCK_LEADERS: LeaderboardEntry[] = [
    { rank: 1, name: "Aarav Patel", xp: 12540, level: 12 },
    { rank: 2, name: "Ishaan Sharma", xp: 11200, level: 11 },
    { rank: 3, name: "Priya Singh", xp: 9850, level: 10 },
    { rank: 4, name: "Neha Gupta", xp: 8540, level: 9 },
    { rank: 5, name: "Rohan Das", xp: 7200, level: 8 }
];

export default function Leaderboard() {
    const { xp, level } = useGamification();
    const [leaders, setLeaders] = useState<LeaderboardEntry[]>([]);

    useEffect(() => {
        // Simple logic to insert current user into mock leaderboard
        // In real app, this would fetch from API
        const currentUser: LeaderboardEntry = {
            rank: 0, // Calculated below
            name: "You",
            xp: xp,
            level: level,
            isCurrentUser: true
        };

        const allUsers = [...MOCK_LEADERS, currentUser].sort((a, b) => b.xp - a.xp);

        // Assign ranks
        const rankedUsers = allUsers.map((u, idx) => ({ ...u, rank: idx + 1 }));

        setLeaders(rankedUsers);
    }, [xp, level]);

    const getRankIcon = (rank: number) => {
        switch (rank) {
            case 1: return <Crown className="w-5 h-5 text-yellow-500 fill-yellow-500" />;
            case 2: return <Medal className="w-5 h-5 text-gray-400 fill-gray-400" />;
            case 3: return <Medal className="w-5 h-5 text-amber-700 fill-amber-700" />;
            default: return <span className="font-bold text-gray-500 w-5 text-center">{rank}</span>;
        }
    };

    return (
        <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
            <div className="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gradient-to-r from-gray-50 to-white dark:from-[#151515] dark:to-[#111]">
                <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <h3 className="font-bold text-gray-900 dark:text-white">Weekly Leaderboard</h3>
                </div>
                <div className="text-xs text-green-600 font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Top 1%
                </div>
            </div>

            <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {leaders.map((user) => (
                    <div
                        key={user.rank}
                        className={`flex items-center justify-between p-4 transition-colors
                            ${user.isCurrentUser ? 'bg-blue-50 dark:bg-blue-900/10' : 'hover:bg-gray-50 dark:hover:bg-gray-900/50'}`}
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-6 flex justify-center">
                                {getRankIcon(user.rank)}
                            </div>
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                                    ${user.isCurrentUser
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400'}`}>
                                    {user.name.charAt(0)}
                                </div>
                                <div>
                                    <div className={`text-sm font-bold ${user.isCurrentUser ? 'text-blue-700 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
                                        {user.name} {user.isCurrentUser && "(You)"}
                                    </div>
                                    <div className="text-[10px] text-gray-500">Level {user.level} Aspirant</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="font-bold text-sm text-gray-900 dark:text-white">{user.xp.toLocaleString()} XP</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-3 bg-gray-50 dark:bg-gray-900/50 text-center">
                <button className="text-xs font-bold text-blue-600 hover:text-blue-700">View Full Rankings</button>
            </div>
        </div>
    );
}
