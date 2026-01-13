"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Mic, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

interface GraphoVoiceSyncProps {
    affirmations: string[];
    bpm?: number;
    isActive: boolean;
}

export default function GraphoVoiceSync({ affirmations, bpm = 60, isActive }: GraphoVoiceSyncProps) {
    const [isMuted, setIsMuted] = useState(false);
    const [currentAffirmation, setCurrentAffirmation] = useState(0);
    const audioContextRef = useRef<AudioContext | null>(null);
    const nextNoteTimeRef = useRef(0);
    const timerIDRef = useRef<NodeJS.Timeout | null>(null);
    const lookahead = 25.0; // ms
    const scheduleAheadTime = 0.1; // s

    // Initialize Audio
    useEffect(() => {
        if (isActive && !audioContextRef.current) {
            audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        return () => {
            if (audioContextRef.current) {
                audioContextRef.current.close();
                audioContextRef.current = null;
            }
        };
    }, [isActive]);

    // Scheduler
    const nextNote = () => {
        const secondsPerBeat = 60.0 / bpm;
        nextNoteTimeRef.current += secondsPerBeat;
    };

    const playSound = (time: number) => {
        if (!audioContextRef.current || isMuted) return;

        const osc = audioContextRef.current.createOscillator();
        const gain = audioContextRef.current.createGain();

        osc.connect(gain);
        gain.connect(audioContextRef.current.destination);

        // Tik sound
        osc.frequency.value = 800;
        gain.gain.value = 0.05;

        osc.start(time);
        osc.stop(time + 0.05);

        // Every 4th beat, speak affirmation
        // (Simplified: just random interval or specific logic later)
    };

    const scheduler = () => {
        if (!audioContextRef.current) return;

        while (nextNoteTimeRef.current < audioContextRef.current.currentTime + scheduleAheadTime) {
            playSound(nextNoteTimeRef.current);
            nextNote();
        }
        timerIDRef.current = setTimeout(scheduler, lookahead);
    };

    // Start/Stop Logic
    useEffect(() => {
        if (isActive && !isMuted) {
            if (audioContextRef.current?.state === 'suspended') {
                audioContextRef.current.resume();
            }
            nextNoteTimeRef.current = audioContextRef.current?.currentTime || 0;
            scheduler();
        } else {
            if (timerIDRef.current) clearTimeout(timerIDRef.current);
        }

        return () => {
            if (timerIDRef.current) clearTimeout(timerIDRef.current);
        };
    }, [isActive, isMuted, bpm]);

    // Affirmation Loop (Separate from metronome preciseness)
    useEffect(() => {
        if (!isActive || isMuted) return;

        const interval = setInterval(() => {
            const text = affirmations[Math.floor(Math.random() * affirmations.length)];
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = 0.9;
            utterance.pitch = 1.1; // Slightly higher/positive
            utterance.volume = 0.3; // Background level
            window.speechSynthesis.speak(utterance);
        }, 8000); // Every 8 seconds

        return () => clearInterval(interval);
    }, [isActive, isMuted, affirmations]);

    if (!isActive) return null;

    return (
        <div className="absolute top-4 left-4 z-30">
            <div className="bg-neutral-900/90 backdrop-blur border border-purple-500/30 rounded-full px-4 py-2 flex items-center gap-3 shadow-lg">
                <div className="relative">
                    <Activity className="w-5 h-5 text-purple-400" />
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 60 / bpm, repeat: Infinity }}
                        className="absolute inset-0 bg-purple-500 rounded-full blur-md"
                    />
                </div>

                <div className="text-xs font-mono text-purple-200">
                    <span className="font-bold">{bpm}</span> BPM Sync
                </div>

                <div className="h-4 w-[1px] bg-neutral-700" />

                <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-neutral-400 hover:text-white transition-colors"
                >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
            </div>

            {/* Visual Pacer Overlay */}
            {!isMuted && (
                <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-0 opacity-10">
                    <motion.div
                        animate={{ scale: [0.95, 1.05, 0.95] }}
                        transition={{ duration: 60 / bpm, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-[80vw] h-[80vw] max-w-[500px] max-h-[500px] rounded-full border-4 border-purple-500"
                    />
                </div>
            )}
        </div>
    );
}
