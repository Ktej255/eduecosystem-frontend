"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBatch2UI } from './Batch2UIContext';
import { Sparkles, LayoutTemplate } from 'lucide-react';

export function TranceToggle() {
    const { mode, toggleMode } = useBatch2UI();
    const isImmersive = mode === 'immersive';

    return (
        <button
            onClick={toggleMode}
            className="group relative flex items-center bg-slate-900/40 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-xl transition-all duration-500 hover:border-amber-500/50 hover:bg-slate-900/60"
        >
            {/* The animated background 'pill' */}
            <motion.div
                className={`absolute w-[110px] h-8 rounded-full shadow-lg ${isImmersive ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 'bg-slate-800'
                    }`}
                layout
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                animate={{
                    x: isImmersive ? 110 : 0
                }}
            />

            {/* Classic Button Content */}
            <div className={`relative z-10 flex items-center justify-center gap-2 w-[110px] h-8 rounded-full text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${!isImmersive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'
                }`}>
                <LayoutTemplate className="w-3.5 h-3.5" />
                <span>Classic</span>
            </div>

            {/* Immersive Button Content */}
            <div className={`relative z-10 flex items-center justify-center gap-2 w-[110px] h-8 rounded-full text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isImmersive ? 'text-white' : 'text-slate-500 group-hover:text-amber-500/50'
                }`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>Immersive</span>
            </div>

            {/* Ambient Glow in Immersive Mode */}
            <AnimatePresence>
                {isImmersive && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-amber-500 blur-xl opacity-20 pointer-events-none rounded-full"
                    />
                )}
            </AnimatePresence>
        </button>
    );
}
