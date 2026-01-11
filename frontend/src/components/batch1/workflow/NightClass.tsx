"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, Video, Play, BookHeart, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea"; // Assuming generic Textarea exists

export default function NightClass({ onComplete, onBack }: { onComplete: () => void, onBack: () => void }) {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isLive, setIsLive] = useState(false);
    const [auditText, setAuditText] = useState("");
    const [appreciationText, setAppreciationText] = useState("");

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 60000);
        const hour = currentTime.getHours();
        const minutes = currentTime.getMinutes();

        // Logic: Live between 9:00 PM (21:00) and 9:30 PM (21:30)
        // Adjust for flexibility: 21:00 to 21:45
        if (hour === 21 && minutes <= 45) {
            setIsLive(true);
        } else {
            setIsLive(false);
        }

        return () => clearInterval(timer);
    }, []);

    import { MEET_CONFIG } from "@/config/meet-config";

    // ... inside component
    const handleJoinLive = () => {
        window.open(MEET_CONFIG.NIGHT_CLASS_LINK, "_blank");
    };

    return (
        <div className="max-w-4xl mx-auto py-8 space-y-8 animate-in fade-in slide-in-from-right">
            <Button variant="ghost" onClick={onBack} className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Timeline
            </Button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Live Class Section */}
                <Card className="bg-indigo-950 text-indigo-50 border-indigo-800">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Video className="w-6 h-6" />
                            Night Polishing Class
                        </CardTitle>
                        <CardDescription className="text-indigo-300">
                            9:00 PM - 9:30 PM
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {isLive ? (
                            <div className="text-center py-8">
                                <div className="relative inline-block mb-4">
                                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </span>
                                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white w-full" onClick={handleJoinLive}>
                                        Join Live Now
                                    </Button>
                                </div>
                                <p className="text-sm text-indigo-300">Class is in session.</p>
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <Button variant="secondary" className="w-full mb-4" onClick={() => window.open("https://drive.google.com/drive/folders/your-recordings-link", "_blank")}>
                                    <Play className="w-4 h-4 mr-2" /> Watch Recording
                                </Button>
                                <p className="text-sm text-indigo-300">Live session ended. Recording available.</p>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Closing Rituals */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BookHeart className="w-6 h-6 text-pink-500" />
                            Closing Rituals
                        </CardTitle>
                        <CardDescription>Wrap up your day with gratitude and reflection.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Appreciation Journal</label>
                            <Textarea
                                placeholder="Who or what do you appreciate today?"
                                value={appreciationText}
                                onChange={(e) => setAppreciationText(e.target.value)}
                                className="min-h-[80px]"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Audit of the Day</label>
                            <Textarea
                                placeholder="What went well? What can be improved tomorrow?"
                                value={auditText}
                                onChange={(e) => setAuditText(e.target.value)}
                                className="min-h-[80px]"
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full bg-green-600 hover:bg-green-700" onClick={onComplete}>
                            <CheckCircle2 className="w-4 h-4 mr-2" /> Complete Day
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
