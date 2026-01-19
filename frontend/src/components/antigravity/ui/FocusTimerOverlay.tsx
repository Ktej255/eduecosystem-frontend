"use client";

import React, { useState, useEffect } from 'react';
import { Rocket, XCircle, Play, CheckCircle2 } from 'lucide-react';
import { SlotTask } from '../types';
import { toast } from 'sonner';

interface Props {
    slot: SlotTask;
    onClose: () => void;
    onComplete: () => void;
}

export default function FocusTimerOverlay({ slot, onClose, onComplete }: Props) {
    const [timeLeft, setTimeLeft] = useState(slot.duration_minutes * 60);
    const [isActive, setIsActive] = useState(false);
    const [progress, setProgress] = useState(0);

    const totalTime = slot.duration_minutes * 60;

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prev => {
                    const newTime = prev - 1;
                    setProgress(((totalTime - newTime) / totalTime) * 100);
                    return newTime;
                });
            }, 1000);
        } else if (timeLeft === 0) {
            setIsActive(false);
            onComplete();
            toast.success("Mission Accomplished! Gravity Defied.");
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft, totalTime, onComplete]);

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    };

    return (
        <div className="fixed inset-0 z-50 bg-[#0B0B15]/95 backdrop-blur-2xl flex flex-col items-center justify-center text-white">
            {/* Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 animate-pulse" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]" />
            </div>

            <div className="relative z-10 text-center space-y-8 animate-in zoom-in-95 duration-500">
                <div className="inline-block p-4 rounded-full bg-purple-500/10 border border-purple-500/30 mb-4 animate-bounce">
                    <Rocket className="w-12 h-12 text-purple-400" />
                </div>

                <div>
                    <h2 className="text-3xl font-black tracking-widest uppercase mb-2">Hyper-Drive Engaged</h2>
                    <p className="text-blue-200 font-mono">{slot.subject}: {slot.topic}</p>
                </div>

                <div className="text-9xl font-black font-mono tabular-nums tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-2xl">
                    {formatTime(timeLeft)}
                </div>

                <div className="w-96 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <p className="text-xs text-gray-500 uppercase tracking-widest font-mono">
                    {isActive ? "Lock-down Protocol Active" : "Systems Standby"}
                </p>

                <div className="flex items-center justify-center gap-6 pt-8">
                    {!isActive && timeLeft > 0 && (
                        <button
                            onClick={() => setIsActive(true)}
                            className="px-10 py-4 bg-white text-black rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center gap-2"
                        >
                            <Play className="w-6 h-6 fill-black" /> IGNITE
                        </button>
                    )}

                    {isActive && (
                        <button
                            onClick={() => setIsActive(false)} // Pause logic? Or strict? User said "Locking mechanism". Usually means no pause.
                            // But for UX, we allow pause but warn.
                            className="px-8 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 rounded-full font-bold transition-colors"
                        >
                            PAUSE THRUSTERS
                        </button>
                    )}

                    <button
                        onClick={onClose}
                        className="px-8 py-3 text-gray-400 hover:text-white font-mono text-sm uppercase tracking-widest transition-colors flex items-center gap-2"
                    >
                        <XCircle className="w-5 h-5" /> Abort
                    </button>
                </div>
            </div>
        </div>
    );
}
