"use client";

import React, { useState, useEffect } from "react";
import { Play, Video, CheckCircle, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MEET_CONFIG } from "@/config/meet-config";

export default function MorningMeditation({ onComplete, onBack }: { onComplete: () => void, onBack: () => void }) {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000); // Update every minute

        const hour = currentTime.getHours();
        // Live logic: 6 AM to 7 AM
        setIsLive(hour >= 6 && hour < 7);

        return () => clearInterval(timer);
    }, []);

    const handleJoinLive = () => {
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

                    {isLive ? (
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
                            <p className="text-sm text-gray-500 max-w-xs mx-auto">
                                Live session is active (06:00 - 07:00 AM). Click to join the Google Meet.
                            </p>
                        </div>
                    ) : (
                        <div className="text-center space-y-4 animate-in fade-in zoom-in duration-500">
                            <div className="aspect-video w-full max-w-2xl bg-black rounded-lg overflow-hidden shadow-2xl mx-auto relative group cursor-pointer">
                                {/* Placeholder for YouTube/Video Player */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
                                    <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-all" />
                                </div>
                                <img src="/api/placeholder/800/450" alt="Meditation Thumbnail" className="w-full h-full object-cover" />
                            </div>
                            <Button variant="outline" className="w-full max-w-md mx-auto" onClick={() => window.open("https://youtube.com/your-video-link", "_blank")}>
                                <Play className="w-4 h-4 mr-2" /> Watch Recording
                            </Button>
                            <p className="text-sm text-gray-500 max-w-xs mx-auto">
                                You missed the live session. Please follow the recorded guidance.
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
