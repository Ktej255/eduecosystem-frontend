"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame, User as UserIcon, Medal } from 'lucide-react';
import { graphotherapyService } from '@/services/graphotherapyService';

interface LeaderboardEntry {
    rank: number;
    user_name: string;
    streak: number;
    avatar_url: string | null;
    is_current_user: boolean;
}

export default function GraphoLeaderboard() {
    const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const data = await graphotherapyService.getLeaderboard();
                setEntries(data);
            } catch (error) {
                console.error("Failed to fetch leaderboard", error);
            } finally {
                setLoading(false);
            }
        };
        fetchLeaderboard();
    }, []);

    if (loading) return <div className="text-center p-4 text-muted-foreground">Loading rankings...</div>;

    return (
        <div className="bg-card dark:bg-neutral-800/50 backdrop-blur-xl rounded-2xl border border-border dark:border-white/10 overflow-hidden shadow-xl">
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-200" />
                    <h3 className="font-bold">Top Streaks</h3>
                </div>
                <div className="text-xs bg-card/20 px-2 py-0.5 rounded-full">Global</div>
            </div>

            {/* List */}
            <div className="max-h-[300px] overflow-y-auto p-2 space-y-2">
                {entries.map((entry, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all ${entry.is_current_user
                                ? 'bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 shadow-sm transform scale-[1.02]'
                                : 'hover:bg-muted dark:hover:bg-card/5'
                            }`}
                    >
                        {/* Rank */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${entry.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                                entry.rank === 2 ? 'bg-gray-300 text-foreground' :
                                    entry.rank === 3 ? 'bg-amber-700 text-amber-100' :
                                        'bg-muted dark:bg-card/10 text-muted-foreground dark:text-muted-foreground'
                            }`}>
                            {entry.rank <= 3 ? <Medal className="w-4 h-4" /> : entry.rank}
                        </div>

                        {/* User Info */}
                        <div className="flex-1 min-w-0">
                            <div className={`font-semibold text-sm truncate ${entry.is_current_user ? 'text-amber-900 dark:text-amber-200' : 'text-foreground'}`}>
                                {entry.user_name}
                                {entry.is_current_user && <span className="ml-2 text-[10px] bg-amber-200 text-amber-800 px-1 rounded">You</span>}
                            </div>
                        </div>

                        {/* Streak */}
                        <div className="flex items-center gap-1.5 px-2 py-1 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-700 dark:text-orange-300 font-bold text-sm">
                            <Flame className="w-3.5 h-3.5 fill-orange-500" />
                            {entry.streak}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
