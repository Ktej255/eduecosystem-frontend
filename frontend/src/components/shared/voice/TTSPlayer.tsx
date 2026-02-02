"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Pause, Play, FastForward } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface TTSPlayerProps {
    text: string;
    autoPlay?: boolean;
    onEnd?: () => void;
    className?: string;
}

export default function TTSPlayer({
    text,
    autoPlay = false,
    onEnd,
    className
}: TTSPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [rate, setRate] = useState(1); // 1x speed
    const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            // Cancel any ongoing speech when component mounts/updates text
            window.speechSynthesis.cancel();

            if (text) {
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'en-US'; // Default to English US
                utterance.rate = rate; // Default rate

                // Select a good voice if available
                const voices = window.speechSynthesis.getVoices();
                const preferredVoice = voices.find(voice => voice.name.includes("Google US English") || voice.name.includes("Samantha"));
                if (preferredVoice) utterance.voice = preferredVoice;

                utterance.onstart = () => {
                    setIsPlaying(true);
                    setIsPaused(false);
                };

                utterance.onend = () => {
                    setIsPlaying(false);
                    setIsPaused(false);
                    onEnd?.();
                };

                utterance.onerror = (e) => {
                    console.error("TTS Error:", e);
                    setIsPlaying(false);
                    setIsPaused(false);
                };

                utteranceRef.current = utterance;

                if (autoPlay) {
                    window.speechSynthesis.speak(utterance);
                }
            }
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.speechSynthesis.cancel();
            }
        };
    }, [text, autoPlay, onEnd]);

    // Handle Rate Change dynamically
    useEffect(() => {
        if (utteranceRef.current && isPlaying) {
            // Changing rate mid-speech is tricky in some browsers, simpler to just update ref for next play
            utteranceRef.current.rate = rate;
        }
    }, [rate, isPlaying]);


    const togglePlay = () => {
        if (!utteranceRef.current) return;

        if (isPlaying && !isPaused) {
            window.speechSynthesis.pause();
            setIsPaused(true);
        } else if (isPaused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
        } else {
            // Start fresh
            // Ensure rate is set
            utteranceRef.current.rate = rate;
            window.speechSynthesis.speak(utteranceRef.current);
        }
    };

    const stop = () => {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setIsPaused(false);
    };

    const toggleRate = () => {
        setRate(prev => prev === 1 ? 1.5 : 1);
        toast.info(`Playback speed: ${rate === 1 ? '1.5x' : '1x'}`);
    };

    if (!text) return null;

    return (
        <div className={cn("inline-flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800 rounded-full px-2 py-1 border border-neutral-200 dark:border-neutral-700", className)}>
            <Button
                size="icon"
                variant="ghost"
                className="h-7 w-7 rounded-full text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"
                onClick={togglePlay}
                title={isPlaying && !isPaused ? "Pause" : "Listen"}
            >
                {isPlaying && !isPaused ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
            </Button>

            {(isPlaying || isPaused) && (
                <>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 rounded-full text-neutral-500 hover:text-neutral-700"
                        onClick={stop}
                        title="Stop"
                    >
                        <VolumeX className="h-4 w-4" />
                    </Button>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 rounded-full text-neutral-500 hover:text-neutral-700 text-[10px] font-bold"
                        onClick={toggleRate}
                        title="Change Speed"
                    >
                        {rate}x
                    </Button>
                </>
            )}
            {!isPlaying && !isPaused && (
                <span className="text-[10px] bg-neutral-200 dark:bg-neutral-700 text-neutral-600 px-1.5 py-0.5 rounded mr-1">
                    Listen
                </span>
            )}
        </div>
    );
}
