"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MeditationSession } from '@/lib/meditation/meditation-engine';
import { Play, Pause, ChevronLeft, Volume2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SessionPlayer({ session }: { session: MeditationSession }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [timeLeft, setTimeLeft] = useState(session.duration * 60);

    // Simulate audio playback ID
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (isPlaying && timeLeft > 0) {
            timerRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        setIsPlaying(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000); // 1-second simulation tick
        } else if (!isPlaying) {
            if (timerRef.current) clearInterval(timerRef.current);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPlaying, timeLeft]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' + s : s}`;
    };

    const progressPercent = ((session.duration * 60 - timeLeft) / (session.duration * 60)) * 100;

    return (
        <div className={`min-h-screen flex flex-col bg-gradient-to-br ${session.thumbnailGradient} text-white transition-all duration-1000`}>
            {/* Nav */}
            <div className="p-6 md:p-8 flex justify-between items-center z-10">
                <Link href="/student/meditation" className="p-2 hover:bg-card/10 rounded-full backdrop-blur-md">
                    <ChevronLeft className="w-6 h-6" />
                </Link>
                <div className="bg-card/10 px-4 py-1.5 rounded-full backdrop-blur-md text-xs font-bold uppercase tracking-wider">
                    {session.category}
                </div>
                <div className="w-10" />
            </div>

            {/* Main Visual */}
            <div className="flex-1 flex flex-col items-center justify-center relative p-8">

                {/* Breathing Circle Animation */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full bg-card/10 backdrop-blur-3xl transition-transform duration-[6000ms] ease-in-out ${isPlaying ? 'scale-150 animate-pulse' : 'scale-100'}`} />
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-72 md:h-72 rounded-full bg-card/20 backdrop-blur-xl transition-transform duration-[6000ms] ease-in-out delay-75 ${isPlaying ? 'scale-125' : 'scale-100'}`} />

                <div className="relative z-10 text-center space-y-4">
                    <h1 className="text-3xl md:text-5xl font-black">{session.title}</h1>
                    <p className="text-white/80 max-w-md mx-auto">{session.description}</p>
                </div>
            </div>

            {/* Controls */}
            <div className="bg-black/20 backdrop-blur-xl p-8 md:p-12 pb-16 rounded-t-3xl">
                <div className="max-w-xl mx-auto space-y-8">
                    {/* Progress Bar */}
                    <div className="space-y-2">
                        <div className="h-1.5 bg-card/20 rounded-full overflow-hidden">
                            <div className="h-full bg-card transition-all duration-1000 ease-linear" style={{ width: `${progressPercent}%` }} />
                        </div>
                        <div className="flex justify-between text-xs font-bold opacity-60">
                            <span>{formatTime(session.duration * 60 - timeLeft)}</span>
                            <span>-{formatTime(timeLeft)}</span>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center justify-center gap-10">
                        <Button variant="ghost" className="text-white/60 hover:text-white hover:bg-transparent">
                            <Volume2 className="w-6 h-6" />
                        </Button>

                        <button
                            onClick={togglePlay}
                            className="w-20 h-20 bg-card text-black rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
                        >
                            {isPlaying ? <Pause className="w-8 h-8 fill-black" /> : <Play className="w-8 ml-1 h-8 fill-black" />}
                        </button>

                        <div className="w-6" /> {/* Spacer balanced with volume icon */}
                    </div>
                </div>
            </div>
        </div>
    );
}
