"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, X } from 'lucide-react';

interface AchievementToastProps {
    message: string;
    subMessage: string;
    onClose: () => void;
}

export default function AchievementToast({ message, subMessage, onClose }: AchievementToastProps) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-amber-500 to-orange-600 text-white p-4 rounded-xl shadow-2xl flex items-center gap-4 min-w-[300px] border border-white/20"
            >
                <div className="bg-white/20 p-2 rounded-full">
                    <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                    <h4 className="font-bold text-lg">{message}</h4>
                    <p className="text-white/80 text-sm">{subMessage}</p>
                </div>
                <button onClick={onClose} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                    <X className="w-4 h-4" />
                </button>
            </motion.div>
        </AnimatePresence>
    );
}
