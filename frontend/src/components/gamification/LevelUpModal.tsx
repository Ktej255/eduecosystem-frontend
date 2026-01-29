"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Star, Share2, X } from 'lucide-react';
import Confetti from 'react-confetti';
// useWindowSize implemented locally as useWindowDimensions

// Simple window size hook if react-use is not available
function useWindowDimensions() {
    const [windowSize, setWindowSize] = React.useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    React.useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
}

interface LevelUpModalProps {
    level: number;
    onClose: () => void;
}

export default function LevelUpModal({ level, onClose }: LevelUpModalProps) {
    const { width, height } = useWindowDimensions();

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <Confetti width={width} height={height} numberOfPieces={200} recycle={false} />

            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                className="bg-white dark:bg-slate-900 border-4 border-amber-500 rounded-3xl p-8 max-w-md w-full text-center relative shadow-[0_0_50px_rgba(245,158,11,0.5)]"
            >
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-24 h-24 bg-gradient-to-br from-amber-300 to-orange-500 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-900 shadow-xl"
                    >
                        <Crown className="w-12 h-12 text-white fill-white" />
                    </motion.div>
                </div>

                <div className="mt-10 space-y-4">
                    <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 uppercase tracking-wider">
                        Level Up!
                    </h2>

                    <div className="py-4">
                        <span className="text-8xl font-black text-slate-800 dark:text-white drop-shadow-2xl">
                            {level}
                        </span>
                    </div>

                    <p className="text-slate-500 dark:text-slate-400 font-medium">
                        You have reached a new milestone. Keep exploring to unlock more rewards!
                    </p>

                    <div className="flex gap-3 justify-center pt-4">
                        <button
                            onClick={onClose}
                            className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-xl font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition"
                        >
                            Close
                        </button>
                        <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-orange-500/25 transition flex items-center gap-2">
                            <Share2 className="w-4 h-4" /> Share
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
