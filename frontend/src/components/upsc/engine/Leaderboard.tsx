"use client";

import React, { useState, useEffect } from 'react';
import { Trophy, Crown, Medal, TrendingUp, User as UserIcon } from 'lucide-react';
import { useGamification } from '@/context/GamificationContext';
import { useAuth } from '@/contexts/auth-context';

interface LeaderboardEntry {
    rank: number;
    user_id: number;
    name: string;
    xp: number;
    streak: number;
    avatar: string;
    isCurrentUser?: boolean;
}

export default function Leaderboard() {
    const { xp: localXP, level: localLevel } = useGamification();
    const { user: currentUser } = useAuth();
    const [leaders, setLeaders] = useState<LeaderboardEntry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const baseUrl = (process.env.NEXT_PUBLIC_API_URL || 'https://eduecosystem-backend-503001969959.us-central1.run.app').replace(/\/$/, \"\");
                const token = localStorage.getItem('edueco_auth_token');
                const response = await fetch(`${baseUrl}/api/v1/community/leaderboard`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                if (response.ok) {
                    const data: LeaderboardEntry[] = await response.json();

                    // Identify current user
                    const ranked = data.map(entry => ({
                        ...entry,
                        isCurrentUser: entry.user_id === currentUser?.id
                    }));

                    setLeaders(ranked);
                }
            } catch (error) {
                console.error('Failed to fetch leaderboard:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboard();
    }, [currentUser?.id, localXP]);

    const getRankIcon = (rank: number) => {
        switch (rank) {
            case 1: return <Crown className="w-5 h-5 text-yellow-500 fill-yellow-500" />;
            case 2: return <Medal className="w-5 h-5 text-muted-foreground fill-gray-400" />;
            case 3: return <Medal className="w-5 h-5 text-amber-700 fill-amber-700" />;
            default: return <span className="font-bold text-muted-foreground w-5 text-center">{rank}</span>;
        }
    };

    return (
        <div className="bg-card dark:bg-[#111] rounded-2xl border border-border overflow-hidden">
            <div className="p-4 border-b border-border flex justify-between items-center bg-gradient-to-r from-gray-50 to-white dark:from-[#151515] dark:to-[#111]">
                <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    <h3 className="font-bold text-foreground">Weekly Leaderboard</h3>
                </div>
                <div className="text-xs text-green-600 font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> Top 1%
                </div>
            </div>

            <div className="divide-y divide-border dark:divide-gray-800">
                {leaders.map((user) => (
                    <div
                        key={user.rank}
                        className={`flex items-center justify-between p-4 transition-colors
                            ${user.isCurrentUser ? 'bg-blue-50 dark:bg-blue-900/10' : 'hover:bg-muted dark:hover:bg-gray-900/50'}`}
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-6 flex justify-center">
                                {getRankIcon(user.rank)}
                            </div>
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                                    ${user.isCurrentUser
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-muted text-muted-foreground dark:text-muted-foreground'}`}>
                                    {user.name.charAt(0)}
                                </div>
                                <div>
                                    <div className={`text-sm font-bold ${user.isCurrentUser ? 'text-blue-700 dark:text-blue-400' : 'text-foreground'}`}>
                                        {user.name} {user.isCurrentUser && "(You)"}
                                    </div>
                                    <div className="text-[10px] text-muted-foreground">{user.streak} Day Streak</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="font-bold text-sm text-foreground">{user.xp.toLocaleString()} XP</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="p-3 bg-muted/50 text-center">
                <button className="text-xs font-bold text-blue-600 hover:text-blue-700">View Full Rankings</button>
            </div>
        </div>
    );
}
