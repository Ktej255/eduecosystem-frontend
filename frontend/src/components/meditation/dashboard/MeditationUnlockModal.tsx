"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MeditationLevel } from '../store/MeditationProgressionStore';

interface MeditationUnlockModalProps {
    isOpen: boolean;
    onClose: () => void;
    level: MeditationLevel | null;
    userCoins: number;
    onConfirm: () => void;
}

export default function MeditationUnlockModal({
    isOpen,
    onClose,
    level,
    userCoins,
    onConfirm
}: MeditationUnlockModalProps) {
    if (!level) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-neutral-900 border border-neutral-800 rounded-3xl w-full max-w-md overflow-hidden relative"
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-white">
                            <X className="w-6 h-6" />
                        </button>

                        <div className={`h-32 bg-gradient-to-br ${level.color} opacity-20`} />
                        <div className="px-8 pb-8 -mt-12 relative z-10">
                            <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center shadow-xl mb-6 mx-auto`}>
                                <Sparkles className="w-10 h-10 text-white" />
                            </div>

                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-white mb-2">Unlock {level.name}?</h2>
                                <p className="text-neutral-400 text-sm">
                                    Spend <span className="text-yellow-400 font-bold">{level.unlockPrice} Karma Coins</span> to access this sanctuary.
                                </p>
                                <div className="mt-2 text-xs text-neutral-500">
                                    Your Balance: {userCoins} Coins
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Button variant="outline" onClick={onClose} className="flex-1 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white">
                                    Cancel
                                </Button>
                                <Button
                                    onClick={onConfirm}
                                    className={`flex-1 bg-gradient-to-r ${level.color} text-white font-bold hover:opacity-90`}
                                >
                                    Confirm Unlock
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
