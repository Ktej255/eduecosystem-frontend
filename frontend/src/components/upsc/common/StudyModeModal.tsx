"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Video, FileText, CheckCircle, Target, X, Zap, Crown, User } from 'lucide-react';

interface StudyModeModalProps {
    isOpen: boolean;
    onClose: () => void;
    dayTitle: string;
    dayNumber: number;
    onSelectSelfStudy: () => void;
    onSelectGuided: () => void;
}

export default function StudyModeModal({
    isOpen,
    onClose,
    dayTitle,
    dayNumber,
    onSelectSelfStudy,
    onSelectGuided
}: StudyModeModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                {/* Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-4xl bg-card dark:bg-[#111] border border-border rounded-3xl overflow-hidden shadow-2xl z-10"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-full bg-muted/50 hover:bg-muted text-muted-foreground transition-colors z-20"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="p-8 text-center border-b border-border bg-muted/20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                            Day {dayNumber} Session
                        </div>
                        <h2 className="text-3xl font-black text-foreground mb-2">How would you like to study?</h2>
                        <p className="text-muted-foreground max-w-lg mx-auto font-medium">
                            Choose your preferred learning method for "{dayTitle}". You can switch between modes at any time.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:p-8 gap-6 object-cover">
                        
                        {/* Self Study Card */}
                        <div 
                            onClick={onSelectSelfStudy}
                            className="group relative bg-card dark:bg-[#111] border-2 border-border hover:border-blue-500 rounded-3xl p-8 cursor-pointer transition-all hover:shadow-xl hover:shadow-blue-500/10 flex flex-col items-center text-center overflow-hidden"
                        >
                            <div className="absolute top-4 right-4 bg-muted px-2.5 py-1 rounded-md text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                                FREE
                            </div>
                            
                            <div className="w-20 h-20 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                <Clock className="w-10 h-10" />
                            </div>
                            
                            <h3 className="text-2xl font-black text-foreground mb-3 flex items-center gap-2">
                                <User className="w-5 h-5 text-blue-500" />
                                Self Study
                            </h3>
                            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                                Use your own standard reference books. We will provide the structured schedule and a 4-session Pomodoro tracker to keep you intensely focused and actively revising.
                            </p>
                            
                            <ul className="space-y-3 w-full text-left mb-8 flex-1">
                                <li className="flex items-start gap-3 text-sm font-medium text-muted-foreground">
                                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                                    <span>Focus with integrated Pomodoro Timer</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm font-medium text-muted-foreground">
                                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                                    <span>Read from your personal physical books</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm font-medium text-muted-foreground">
                                    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
                                    <span>Track completion times independently</span>
                                </li>
                            </ul>
                            
                            <button className="w-full py-4 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                Start Free Session
                            </button>
                        </div>

                        {/* Guided Lessons Card */}
                        <div 
                            onClick={onSelectGuided}
                            className="group relative bg-indigo-50/30 dark:bg-indigo-900/10 border-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-600 rounded-3xl p-8 cursor-pointer transition-all hover:shadow-xl hover:shadow-indigo-600/20 flex flex-col items-center text-center overflow-hidden"
                        >
                            <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-2.5 py-1 rounded-md text-[10px] font-black tracking-widest flex items-center gap-1 shadow-sm">
                                <Crown className="w-3 h-3" /> PREMIUM
                            </div>
                            
                            <div className="w-20 h-20 rounded-2xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                <Video className="w-10 h-10" />
                            </div>
                            
                            <h3 className="text-2xl font-black text-foreground mb-3 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-indigo-600 fill-indigo-600" />
                                Guided Lessons
                            </h3>
                            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                                Access our comprehensive guided infrastructure. Includes recorded video lectures, downloadable deep-dive PDF notes, and chapter-specific high-yield MCQs.
                            </p>
                            
                            <ul className="space-y-3 w-full text-left mb-8 flex-1">
                                <li className="flex items-start gap-3 text-sm font-medium text-muted-foreground">
                                    <CheckCircle className="w-5 h-5 text-indigo-600 shrink-0" />
                                    <span>Watch topic-specific Video Lectures</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm font-medium text-muted-foreground">
                                    <CheckCircle className="w-5 h-5 text-indigo-600 shrink-0" />
                                    <span>Download detailed PDF summary notes</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm font-medium text-muted-foreground">
                                    <CheckCircle className="w-5 h-5 text-indigo-600 shrink-0" />
                                    <span>Test knowledge with tier-filtered MCQs</span>
                                </li>
                            </ul>
                            
                            <button className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold group-hover:bg-indigo-700 shadow-lg shadow-indigo-600/25 transition-colors duration-300">
                                Enter Learning Portal
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
