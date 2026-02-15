"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Share2, Download, Trophy, Flame, Star, Quote } from 'lucide-react';
import { toast } from 'sonner';

interface SuccessCardProps {
    stats: {
        xp: number;
        streak: number;
        level: number;
        rank?: number;
    };
    userName: string;
    onClose: () => void;
}

export default function SuccessCard({ stats, userName, onClose }: SuccessCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleShare = async () => {
        try {
            // In a real app, use html-to-image or similar to generate a PNG
            // For now, we simulate social sharing
            if (navigator.share) {
                await navigator.share({
                    title: 'My UPSC Progress!',
                    text: `I just hit Level ${stats.level} on Eduecosystem with a ${stats.streak}-day streak! Join me!`,
                    url: window.location.href
                });
            } else {
                toast.success("Progress copied to clipboard! Share it with your wolf pack.");
            }
        } catch (e) {
            console.error("Sharing failed", e);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-white dark:bg-[#111] rounded-[2.5rem] overflow-hidden shadow-2xl max-w-md w-full"
                onClick={e => e.stopPropagation()}
                ref={cardRef}
            >
                {/* Poster Background */}
                <div className="relative p-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white aspect-[4/5] flex flex-col justify-between overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-400/20 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <div className="flex justify-between items-start">
                            <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                                Community Milestone
                            </div>
                            <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center">
                                <Trophy className="w-5 h-5" />
                            </div>
                        </div>

                        <h2 className="text-4xl font-black mb-2 leading-tight">THE WOLF <br />PACK SPIRIT</h2>
                        <p className="text-indigo-100/80 font-medium italic flex items-center gap-2">
                            <Quote size={12} className="fill-current" />
                            Progress is a marathon, not a sprint.
                        </p>
                    </div>

                    <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
                        <p className="text-xs font-bold uppercase tracking-wider opacity-60 mb-4">Aspirant Profile</p>
                        <h3 className="text-2xl font-bold mb-6">{userName}</h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-500/30 rounded-2xl flex items-center justify-center">
                                    <Flame className="w-5 h-5 text-orange-400" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xl font-bold leading-none">{stats.streak}</p>
                                    <p className="text-[10px] opacity-60 uppercase">Day Streak</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-purple-500/30 rounded-2xl flex items-center justify-center">
                                    <Star className="w-5 h-5 text-yellow-400" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xl font-bold leading-none">{stats.level}</p>
                                    <p className="text-[10px] opacity-60 uppercase">Mastery Lvl</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 flex justify-between items-end border-t border-white/10 pt-6">
                        <div className="text-left">
                            <p className="text-[10px] uppercase font-bold opacity-60">Platform</p>
                            <p className="font-bold tracking-tighter">EDUECOSYSTEM</p>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-black">{stats.xp.toLocaleString()}</p>
                            <p className="text-[10px] uppercase opacity-60">Total Experience</p>
                        </div>
                    </div>
                </div>

                {/* Footer Controls */}
                <div className="p-6 bg-white dark:bg-[#111] border-t border-gray-100 dark:border-gray-800 flex gap-4">
                    <button
                        onClick={handleShare}
                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95"
                    >
                        <Share2 className="w-4 h-4" /> Share Now
                    </button>
                    <button
                        disabled
                        className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-400 rounded-2xl opacity-50 cursor-not-allowed"
                    >
                        <Download className="w-5 h-5" />
                    </button>
                    <button
                        onClick={onClose}
                        className="px-6 py-3 font-bold text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}
