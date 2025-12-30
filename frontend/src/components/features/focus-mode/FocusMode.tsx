import React, { useState, useEffect, useRef } from "react";
import {
    X, Play, Pause, Volume2, CloudRain, Coffee, Wind,
    Maximize2, Minimize2, MoreHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

interface FocusModeProps {
    timeLeft: number;
    totalTime: number;
    isActive: boolean;
    onToggleTimer: () => void;
    onExit: () => void;
    taskName: string;
}

const SOUNDS = [
    {
        id: "rain",
        name: "Heavy Rain",
        icon: CloudRain,
        url: "https://assets.mixkit.co/active_storage/sfx/2499/2499-preview.mp3" // Placeholder/Free asset
    },
    {
        id: "cafe",
        name: "Coffee Shop",
        icon: Coffee,
        url: "https://assets.mixkit.co/active_storage/sfx/2509/2509-preview.mp3"
    },
    {
        id: "white_noise",
        name: "White Noise",
        icon: Wind,
        url: "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"
    }
];

export const FocusMode: React.FC<FocusModeProps> = ({
    timeLeft,
    totalTime,
    isActive,
    onToggleTimer,
    onExit,
    taskName
}) => {
    const [activeSound, setActiveSound] = useState<string | null>(null);
    const [volume, setVolume] = useState(0.5);
    const [showControls, setShowControls] = useState(true);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Handle audio playback
    useEffect(() => {
        if (activeSound) {
            if (!audioRef.current) {
                audioRef.current = new Audio(SOUNDS.find(s => s.id === activeSound)?.url);
                audioRef.current.loop = true;
            } else {
                const soundUrl = SOUNDS.find(s => s.id === activeSound)?.url;
                if (audioRef.current.src !== soundUrl) {
                    audioRef.current.src = soundUrl || "";
                }
            }
            audioRef.current.volume = volume;
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        } else {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        }

        return () => {
            // Cleanup on unmount or change
            if (activeSound === null && audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, [activeSound]);

    // Handle volume change
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    // Cleanup on full unmount
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const progress = ((totalTime - timeLeft) / totalTime) * 100;

    return (
        <div className="fixed inset-0 z-50 bg-slate-950 text-slate-50 flex flex-col items-center justify-center transition-all duration-500">
            {/* Background Ambience Effect (Optional Visuals) */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black opacity-90 pointer-events-none" />

            {/* Top Bar */}
            <div className={cn(
                "absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-10 transition-opacity duration-300",
                showControls ? "opacity-100" : "opacity-0 hover:opacity-100"
            )}>
                <div className="flex items-center gap-3">
                    <div className="bg-slate-800/50 p-2 rounded-full backdrop-blur-sm">
                        <Maximize2 className="w-5 h-5 text-slate-400" />
                    </div>
                    <span className="text-slate-400 font-medium tracking-wide text-sm uppercase">Focus Mode</span>
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onExit}
                    className="hover:bg-red-500/20 hover:text-red-400 text-slate-400 rounded-full w-12 h-12"
                >
                    <X className="w-6 h-6" />
                </Button>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-12 max-w-4xl w-full px-4">

                {/* Task Info */}
                <div className="space-y-4 animate-in fade-in zoom-in duration-700">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                        {formatTime(timeLeft)}
                    </h2>
                    <p className="text-xl text-slate-400 font-light tracking-widest uppercase">
                        {taskName}
                    </p>
                </div>

                {/* Minimal Progress Bar */}
                <div className="w-full max-w-md h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-blue-500/80 transition-all duration-1000 ease-linear shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Main Controls */}
                <div className="flex items-center gap-8">
                    <Button
                        size="lg"
                        variant="ghost"
                        onClick={onToggleTimer}
                        className={cn(
                            "w-20 h-20 rounded-full border-2 border-slate-700 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300",
                            isActive && "border-blue-500 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                        )}
                    >
                        {isActive ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                    </Button>
                </div>
            </div>

            {/* Sound Controls (Bottom Overlay) */}
            <div className={cn(
                "absolute bottom-12 z-10 bg-slate-900/40 backdrop-blur-md border border-slate-800/50 p-4 rounded-2xl flex flex-col gap-4 min-w-[300px] transition-all duration-300",
                showControls ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 hover:translate-y-0 hover:opacity-100"
            )}>
                <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-wider font-semibold px-1">
                    <span>Ambient Sound</span>
                    <span>{activeSound ? SOUNDS.find(s => s.id === activeSound)?.name : "Off"}</span>
                </div>

                <div className="flex justify-center gap-4">
                    {SOUNDS.map((sound) => {
                        const Icon = sound.icon;
                        const isSelected = activeSound === sound.id;
                        return (
                            <button
                                key={sound.id}
                                onClick={() => setActiveSound(isSelected ? null : sound.id)}
                                className={cn(
                                    "p-3 rounded-xl transition-all duration-200 flex flex-col items-center gap-2",
                                    isSelected
                                        ? "bg-blue-500/20 text-blue-400 ring-1 ring-blue-500/50"
                                        : "bg-slate-800/30 text-slate-500 hover:bg-slate-800 hover:text-slate-300"
                                )}
                                title={sound.name}
                            >
                                <Icon className="w-5 h-5" />
                            </button>
                        )
                    })}
                </div>

                {activeSound && (
                    <div className="flex items-center gap-3 px-2 pt-2 border-t border-slate-800/50">
                        <Volume2 className="w-4 h-4 text-slate-500" />
                        <Slider
                            value={[volume]}
                            max={1}
                            step={0.01}
                            onValueChange={(val) => setVolume(val[0])}
                            className="w-full"
                        />
                    </div>
                )}
            </div>

        </div>
    );
};
