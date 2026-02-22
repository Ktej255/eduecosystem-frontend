"use client";

import React from 'react';
import { X, Lock, Clock, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ComingSoonModalProps {
    isOpen: boolean;
    onClose: () => void;
    feature: string;
    expectedDate?: string;
}

export default function ComingSoonModal({ isOpen, onClose, feature, expectedDate }: ComingSoonModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-card dark:bg-[#111] rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-border"
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-center text-white relative">
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-card/20 rounded-full hover:bg-card/30 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                        <div className="w-20 h-20 mx-auto bg-card/20 rounded-full flex items-center justify-center mb-4">
                            <Lock className="w-10 h-10" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">{feature}</h2>
                        <p className="text-indigo-100">Coming Soon!</p>
                    </div>

                    {/* Content */}
                    <div className="p-8 text-center">
                        <div className="flex items-center justify-center gap-2 text-muted-foreground dark:text-muted-foreground mb-6">
                            <Clock className="w-5 h-5" />
                            <span className="font-medium">
                                {expectedDate ? `Expected: ${expectedDate}` : 'Under Development'}
                            </span>
                        </div>

                        <p className="text-muted-foreground dark:text-muted-foreground mb-8">
                            We're working hard to bring you premium {feature.toLowerCase()} content.
                            Stay tuned for updates!
                        </p>

                        <div className="space-y-3">
                            <button
                                onClick={onClose}
                                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-bold transition-colors"
                            >
                                <Bell className="w-4 h-4" />
                                Notify Me When Ready
                            </button>
                            <button
                                onClick={onClose}
                                className="w-full text-muted-foreground hover:text-muted-foreground dark:hover:text-muted-foreground py-2 text-sm"
                            >
                                Back to Store
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
