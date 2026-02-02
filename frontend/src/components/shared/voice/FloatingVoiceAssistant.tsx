"use client";

import React, { useState } from 'react';
import VoiceInput from './VoiceInput';
import TTSPlayer from './TTSPlayer';
import { Card } from '@/components/ui/card';
import { X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

export default function FloatingVoiceAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
    const [isThinking, setIsThinking] = useState(false);
    const [lastResponse, setLastResponse] = useState<string>("");

    const handleTranscript = (text: string) => {
        setMessages(prev => [...prev, { role: 'user', text }]);
        processQuery(text);
    };

    const processQuery = (text: string) => {
        setIsThinking(true);
        // Mock AI processing
        setTimeout(() => {
            let response = "I heard you, but I don't have a backend connected yet.";

            if (text.toLowerCase().includes("hello") || text.toLowerCase().includes("hi")) {
                response = "Hello! reliable student. How can I help you regarding UPSC preparation?";
            } else if (text.toLowerCase().includes("polity")) {
                response = "Indian Polity is a crucial subject. Do you want to revise the Preamble or Fundamental Rights?";
            } else if (text.toLowerCase().includes("quiz")) {
                response = "Sure, let's start a quick quiz. What is the minimum age to become the President of India?";
            } else if (text.toLowerCase().includes("explain")) {
                response = "I can explain that concept. Please highlight the text you want me to read.";
            }

            setMessages(prev => [...prev, { role: 'ai', text: response }]);
            setLastResponse(response);
            setIsThinking(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="pointer-events-auto"
                    >
                        <Card className="w-80 shadow-2xl border-indigo-100 dark:border-indigo-900 bg-white/95 dark:bg-slate-900/95 backdrop-blur overflow-hidden">
                            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3 flex justify-between items-center text-white">
                                <span className="font-semibold text-sm flex items-center gap-2">
                                    <MessageSquare className="w-4 h-4" /> AI Tutor
                                </span>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="h-6 w-6 text-white/80 hover:bg-white/20 rounded-full"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <X className="w-4 h-4" />
                                </Button>
                            </div>

                            <div className="h-64 overflow-y-auto p-4 space-y-3 bg-slate-50 dark:bg-slate-950/50">
                                {messages.length === 0 && (
                                    <div className="text-center text-xs text-slate-400 mt-10">
                                        Tap the mic to ask a question or start a quiz.
                                    </div>
                                )}
                                {messages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={cn(
                                            "text-sm p-2.5 rounded-lg max-w-[85%]",
                                            msg.role === 'user'
                                                ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 ml-auto rounded-tr-none"
                                                : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mr-auto rounded-tl-none shadow-sm"
                                        )}
                                    >
                                        {msg.text}
                                    </div>
                                ))}
                                {isThinking && (
                                    <div className="flex gap-1 pl-2">
                                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75" />
                                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150" />
                                    </div>
                                )}
                            </div>

                            <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                                <div className="flex-1">
                                    <VoiceInput
                                        onTranscript={handleTranscript}
                                        placeholder="Ask a doubt..."
                                        className="w-full"
                                    />
                                </div>
                                <TTSPlayer text={lastResponse} autoPlay={true} />
                            </div>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pointer-events-auto"
            >
                <Button
                    size="icon"
                    className={cn(
                        "h-14 w-14 rounded-full shadow-lg transition-all duration-300",
                        isOpen
                            ? "bg-slate-800 text-white hover:bg-slate-900"
                            : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-indigo-500/25"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <div className="relative">
                            <MessageSquare className="h-6 w-6" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-slate-900" />
                        </div>
                    )}
                </Button>
            </motion.div>
        </div>
    );
}
