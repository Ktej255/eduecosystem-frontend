"use client";

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Trophy, Flame, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface LeaderboardEntry {
    rank: number;
    user_id: number;
    name: string;
    xp: number;
    streak: number;
    avatar: string;
}

export default function Leaderboard() {
    const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/community/leaderboard`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const data = await response.json();
                setEntries(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchLeaderboard();
    }, []);

    return (
        <Card className="border-indigo-100 dark:border-indigo-900 shadow-sm overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
                <CardTitle className="flex items-center gap-2 text-yellow-700 dark:text-yellow-400">
                    <Trophy className="h-5 w-5" /> Top Scholars
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                {loading ? (
                    <div className="p-4 text-center text-sm text-gray-500">Loading ranks...</div>
                ) : (
                    <div className="divide-y divide-gray-100 dark:divide-gray-800">
                        {entries.map((entry, index) => (
                            <motion.div
                                key={entry.user_id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0, transition: { delay: index * 0.1 } }}
                                className="flex items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                            >
                                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center font-bold rounded-full mr-4 ${entry.rank === 1 ? 'bg-yellow-100 text-yellow-600' :
                                        entry.rank === 2 ? 'bg-gray-100 text-gray-600' :
                                            entry.rank === 3 ? 'bg-orange-100 text-orange-600' :
                                                'text-gray-400'
                                    }`}>
                                    {entry.rank}
                                </div>

                                <Avatar className="h-10 w-10 border border-gray-100">
                                    <AvatarImage src={entry.avatar} />
                                    <AvatarFallback>{entry.name[0]}</AvatarFallback>
                                </Avatar>

                                <div className="ml-3 flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                                        {entry.name}
                                    </p>
                                    <div className="flex items-center gap-3 mt-0.5">
                                        <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium flex items-center">
                                            <Star className="h-3 w-3 mr-1" fill="currentColor" /> {entry.xp.toLocaleString()} XP
                                        </span>
                                        <span className="text-xs text-orange-600 dark:text-orange-400 font-medium flex items-center">
                                            <Flame className="h-3 w-3 mr-1" fill="currentColor" /> {entry.streak} Days
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
