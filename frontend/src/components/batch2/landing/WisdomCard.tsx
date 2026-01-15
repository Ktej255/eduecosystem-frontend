"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lock, ArrowRight, Sparkles } from "lucide-react";

interface WisdomCardProps {
    title: string;
    subtitle: string;
    level: string; // e.g., "Foundation", "Advanced"
    description: string;
    icon?: React.ReactNode;
    locked?: boolean;
    onClick?: () => void;
    colorTheme?: string; // Hex or tailwind class prefix
}

export default function WisdomCard({
    title,
    subtitle,
    level,
    description,
    icon,
    locked = false,
    onClick,
    colorTheme = "amber",
}: WisdomCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`relative group cursor-pointer perspective-1000 h-full`}
            onClick={onClick}
        >
            {/* Glow Effect */}
            <div className={`absolute inset-0 bg-${colorTheme}-500/20 blur-2xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative h-full bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden hover:border-amber-500/50 transition-colors duration-300 shadow-2xl">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-400/20 via-transparent to-transparent" />

                {/* Level Badge */}
                <div className="flex justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${colorTheme}-500/10 text-${colorTheme}-200 border border-${colorTheme}-500/20`}>
                        {level}
                    </span>
                    {locked && <Lock className="w-5 h-5 text-slate-400" />}
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                    <div className="flex items-center gap-3">
                        {icon && <div className={`p-2 rounded-lg bg-${colorTheme}-500/20 text-${colorTheme}-300`}>{icon}</div>}
                        <h3 className="text-xl font-bold text-white font-serif tracking-wide">{title}</h3>
                    </div>

                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">{subtitle}</p>

                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                        {description}
                    </p>
                </div>

                {/* Action Area */}
                <div className="mt-6 flex items-center gap-2 text-amber-400 text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                    <span>{locked ? "Unlock Access" : "Begin Journey"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Decorative Particles */}
                <motion.div
                    animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-10 w-20 h-20 bg-amber-500/5 rounded-full blur-xl pointer-events-none"
                />
            </div>
        </motion.div>
    );
}
