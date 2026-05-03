"use client";

import React, { useState, useEffect } from "react";
import { Play, Video, CheckCircle, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useMeetConfig } from "@/hooks/useMeetConfig";
import { useAuth } from "@/contexts/auth-context";

export default function MorningMeditation({ onComplete, onBack }: { onComplete: () => void, onBack: () => void }) {
    const { user } = useAuth();
    const isMasterId = user?.email === "ktej255@gmail.com";
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isLive, setIsLive] = useState(false);
    const MEET_CONFIG = useMeetConfig();

    useEffect(() => {
        const checkTime = () => {
            const now = new Date();
            const hour = now.getHours();
            const minute = now.getMinutes();

            // Logic: Live between 05:30 AM and 07:00 AM
            // 5:30 - 5:59 OR 6:00 - 6:59 OR 7:00 sharp (handled by < 7 check usually, but let's be precise)
            // Ideally: >= 5:30 AND < 7:00
            const isMorningSession = (hour === 5 && minute >= 30) || (hour === 6);

            setIsLive(isMorningSession);
        };

        checkTime();
        const timer = setInterval(checkTime, 60000); // Check every minute
        return () => clearInterval(timer);
    }, []);

    const recordAttendance = async () => {
        try {
            // Simple fire-and-forget logging
            const baseUrl = (process.env.NEXT_PUBLIC_API_URL || "https://eduecosystem-backend-503001969959.us-central1.run.app").replace(/\/$/, "");
            await fetch(`${baseUrl}/api/v1/attendance`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    session_type: 'morning_meditation',
                    timestamp: new Date().toISOString()
                })
            });
        } catch (error) {
            console.error("Failed to record attendance", error);
        }
    };

    const handleJoinLive = () => {
        recordAttendance();
        window.open(MEET_CONFIG.MORNING_SESSION_LINK, "_blank");
    };

    return (
        <div className="max-w-4xl mx-auto py-8 space-y-6">
            <Button variant="ghost" onClick={onBack} className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Timeline
            </Button>

            <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-950 dark:to-yellow-950 border-orange-200">
                <CardHeader className="text-center">
                    <h1 className="text-3xl font-bold text-orange-800 dark:text-orange-100">Morning Meditation</h1>
                    <p className="text-orange-600 dark:text-orange-300">Start your day with mindfulness and focus.</p>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-10 space-y-8">

                    {/* Master ID Testing Mode - Show Both Options */}
                    {isMasterId && (
                        <div className="bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700 rounded-lg p-4 w-full max-w-2xl text-center mb-4">
                            <p className="text-sm text-purple-700 dark:text-purple-300 font-medium">
                                🔧 Master ID Testing Mode: Both options are visible
                            </p>
                        </div>
                    )}

                    {/* Live Session Section - Show if live OR if Master ID */}
                    {(isLive || isMasterId) && (
                        <div className="text-center space-y-4 animate-in fade-in zoom-in duration-500">
                            <div className="relative inline-block">
                                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-xl shadow-lg shadow-red-200" onClick={handleJoinLive}>
                                    <Video className="w-6 h-6 mr-3" />
                                    Join Live Session
                                </Button>
                            </div>
                            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                                {isLive ? "Live session is active (05:30 - 07:00 AM). Click to join Google Meet." : "Test the live session join functionality."}
                            </p>
                        </div>
                    )}

                    {/* Recording Section - Show if not live OR if Master ID */}
                    {(!isLive || isMasterId) && (
                        <div className="text-center space-y-4 animate-in fade-in zoom-in duration-500">
                            <div className="aspect-video w-full max-w-2xl bg-black rounded-lg overflow-hidden shadow-2xl mx-auto relative group cursor-pointer">
                                {/* Placeholder for YouTube/Video Player */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                                    <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all" />
                                </div>
                                <img src="/api/placeholder/800/450" alt="Meditation Thumbnail" className="w-full h-full object-cover" />
                            </div>
                            <Button variant="outline" className="w-full max-w-md mx-auto" onClick={() => window.open(MEET_CONFIG.DEFAULT_MORNING_RECORDING, "_blank")}>
                                <Play className="w-4 h-4 mr-2" /> Watch Recording
                            </Button>
                            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                                {!isLive ? "You missed the live session. Please follow the recorded guidance." : "Test the recording functionality."}
                            </p>
                        </div>
                    )}

                    <div className="pt-8 border-t w-full max-w-md">
                        <Button onClick={onComplete} className="w-full bg-green-600 hover:bg-green-700 text-white">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Mark as Completed
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
