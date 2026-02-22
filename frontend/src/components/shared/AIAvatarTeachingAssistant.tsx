"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Volume2, VolumeX, X, Brain, Sparkles, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { behavioralTracker } from '@/lib/ai/behavioral-tracker';

import { getVoiceProvider } from '@/lib/ai/voice-provider';

interface AIAvatarProps {
    lessonTitle: string;
    summary: string;
    keyTakeaways: string[];
}

export default function AIAvatarTeachingAssistant({ lessonTitle, summary, keyTakeaways }: AIAvatarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [showTip, setShowTip] = useState(true);
    const [proactiveMessage, setProactiveMessage] = useState<string | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setShowTip(false), 5000);

        // Behavioral Integration
        const unsubscribe = behavioralTracker?.subscribe((metrics) => {
            if (metrics.isStruggling && !isOpen) {
                if (metrics.lastSignal === 'frustrated') {
                    setProactiveMessage("Feeling a bit stuck? Don't worry, these topics are complex.");
                    setIsOpen(true);
                } else if (metrics.lastSignal === 'confused') {
                    setProactiveMessage("I noticed you've been on this part for a while. Need a simpler summary?");
                    setIsOpen(true);
                } else if (metrics.lastSignal === 'disengaged') {
                    setShowTip(true);
                    setProactiveMessage("Quick recap before we move on?");
                }
            }
        });

        return () => {
            clearTimeout(timer);
            unsubscribe?.();
        };
    }, [isOpen]);

    const speak = () => {
        const voiceProvider = getVoiceProvider(!!process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY);

        if (isSpeaking) {
            voiceProvider.stop();
            setIsSpeaking(false);
            return;
        }

        voiceProvider.speak(
            `${lessonTitle} Summary. ${summary}`,
            () => setIsSpeaking(true),
            () => setIsSpeaking(false)
        );
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="w-80 bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <div className="p-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-b border-white/5 flex justify-between items-center relative overflow-hidden">
                            {/* Animated Background Pulse when speaking */}
                            {isSpeaking && (
                                <motion.div
                                    animate={{
                                        opacity: [0.1, 0.3, 0.1],
                                        scale: [1, 1.2, 1]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 bg-blue-500/20"
                                />
                            )}

                            <div className="flex items-center gap-2 relative z-10">
                                <motion.div
                                    animate={isSpeaking ? {
                                        scale: [1, 1.1, 1],
                                        rotate: [0, 5, -5, 0]
                                    } : {
                                        y: [0, -3, 0]
                                    }}
                                    transition={{
                                        duration: isSpeaking ? 0.5 : 4,
                                        repeat: Infinity
                                    }}
                                >
                                    <Brain className="w-5 h-5 text-blue-400" />
                                </motion.div>
                                <span className="text-sm font-bold text-white">AI Teaching Assistant</span>
                            </div>
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 text-white/40 relative z-10">
                                <X className="w-4 h-4" />
                            </Button>
                        </div>

                        <div className="p-5">
                            <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">
                                {proactiveMessage ? "AI Proactive Help" : "Lesson Insight"}
                            </h4>
                            <p className="text-sm text-white/80 leading-relaxed mb-4">
                                {proactiveMessage || summary}
                            </p>

                            <div className="space-y-2 mb-6">
                                {keyTakeaways.map((tk, i) => (
                                    <div key={i} className="flex gap-2 items-start">
                                        <div className="mt-1.5 w-1 h-1 rounded-full bg-purple-400" />
                                        <p className="text-[11px] text-white/50">{tk}</p>
                                    </div>
                                ))}
                            </div>

                            <Button
                                onClick={speak}
                                className={`w-full gap-2 font-bold transition-all duration-300 ${isSpeaking ? 'bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                            >
                                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                {isSpeaking ? 'Stop Audio' : 'Listen to Summary'}
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative">
                <AnimatePresence>
                    {showTip && !isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 bg-blue-600 text-white text-[10px] font-bold rounded-lg shadow-lg"
                        >
                            Need a summary? I'm here! <Sparkles className="inline-block w-3 h-3 ml-1" />
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={!isOpen ? {
                        y: [0, -4, 0],
                        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    } : {}}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isOpen ? 'bg-card text-black' : 'bg-neutral-900 border border-white/10 text-white'}`}
                >
                    <div className="relative">
                        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}

                        {/* Visual Pulse when speaking */}
                        {isSpeaking && (
                            <motion.div
                                animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="absolute inset-x-0 -top-1 w-full h-full bg-blue-400 rounded-full blur-md"
                            />
                        )}
                    </div>

                    {!isOpen && isSpeaking && (
                        <div className="absolute inset-0 rounded-full border-2 border-blue-500 animate-ping opacity-30" />
                    )}
                </motion.button>
            </div>
        </div>
    );
}
