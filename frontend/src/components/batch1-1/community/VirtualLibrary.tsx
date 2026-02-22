"use client";

import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Loader2, BookOpen, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

interface UserPresence {
    user_id: number;
    name: string;
    avatar: string;
    status: 'focusing' | 'taking_break' | 'online';
    current_subject: string;
}

export default function VirtualLibrary() {
    const [users, setUsers] = useState<UserPresence[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchPresence = async () => {
        // Force offline mode
        setUsers([
            { user_id: 101, name: "Sidharth M.", avatar: "", status: 'focusing', current_subject: 'Polity' },
            { user_id: 102, name: "Tara S.", avatar: "", status: 'taking_break', current_subject: 'Economy' },
            { user_id: 103, name: "Rohan K.", avatar: "", status: 'focusing', current_subject: 'History' },
            { user_id: 104, name: "Vihaan", avatar: "", status: 'online', current_subject: 'Rest' },
        ]);
        setLoading(false);
        /*
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/community/presence`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!response.ok) throw new Error("API Error");
            const data = await response.json();
            if (!Array.isArray(data)) throw new Error("Invalid Data");
            setUsers(data);
            setLoading(false);
        } catch (error) {
            console.error("Presence Error", error);
            // Mock Fallback
            setUsers([
                { user_id: 101, name: "Sidharth M.", avatar: "", status: 'focusing', current_subject: 'Polity' },
                { user_id: 102, name: "Tara S.", avatar: "", status: 'taking_break', current_subject: 'Economy' },
                { user_id: 103, name: "Rohan K.", avatar: "", status: 'focusing', current_subject: 'History' },
                { user_id: 104, name: "Vihaan", avatar: "", status: 'online', current_subject: 'Rest' },
            ]);
            setLoading(false);
        }
        */
    };

    // Heartbeat
    useEffect(() => {
        fetchPresence();
        /*
        const interval = setInterval(() => {
            // Update my status
            const token = localStorage.getItem('token');
            fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/api/v1/community/presence`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ status: 'focusing', subject: 'In Library' }) // Simple update
            }).then(() => fetchPresence());

        }, 30000); // 30s poll

        return () => clearInterval(interval);
        */
    }, []);

    return (
        <Card className="border-indigo-100 dark:border-indigo-900 shadow-sm bg-card">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                    Silence Library ({users.length} Online)
                </CardTitle>
            </CardHeader>
            <CardContent>
                {loading ? (
                    <div className="flex justify-center p-4"><Loader2 className="animate-spin" /></div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {users.map((user) => (
                            <motion.div
                                key={user.user_id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center p-3 rounded-xl bg-muted border border-border relative group"
                            >
                                <div className="relative">
                                    <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                                        <AvatarImage src={user.avatar} />
                                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${user.status === 'focusing' ? 'bg-green-500' : 'bg-amber-500'
                                        }`} />
                                </div>

                                <span className="text-xs font-semibold mt-2 text-center truncate w-full px-1">
                                    {user.name}
                                </span>

                                <span className="text-[10px] text-muted-foreground flex items-center gap-1 mt-1">
                                    {user.status === 'focusing' ? <BookOpen className="h-3 w-3" /> : <Coffee className="h-3 w-3" />}
                                    {user.current_subject}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
