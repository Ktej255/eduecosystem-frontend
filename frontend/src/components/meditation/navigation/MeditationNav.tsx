"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Settings, BarChart2, Home, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MEDITATION_THEME } from '../theme/MeditationTheme';

interface MeditationNavProps {
    title?: string;
    subtitle?: string;
    showBack?: boolean;
    onSettingsClick?: () => void;
    onStatsClick?: () => void;
    rightActions?: React.ReactNode;
}

export default function MeditationNav({
    title = "Inner Sanctum",
    subtitle = "Your sacred space for focus and calm",
    showBack = false,
    onSettingsClick,
    onStatsClick,
    rightActions
}: MeditationNavProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex justify-between items-center mb-8 relative z-50 p-4 md:p-0"
        >
            {/* Left: Title & Breadcrumb */}
            <div className="flex flex-col">
                <div className="flex items-center gap-2 text-xs font-medium text-white/40 mb-1 uppercase tracking-widest">
                    <Link href="/student/dashboard" className="hover:text-emerald-400 transition-colors">
                        <Home className="w-3 h-3" />
                    </Link>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-emerald-400/80">Meditation</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-light text-white tracking-wide">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-white/60 text-sm font-light mt-1 max-w-md">
                        {subtitle}
                    </p>
                )}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
                {rightActions ? (
                    rightActions
                ) : (
                    <>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onStatsClick}
                            className="text-white/60 hover:text-emerald-400 hover:bg-white/5 rounded-full transition-all"
                            title="View Statistics"
                        >
                            <BarChart2 className="w-5 h-5" />
                        </Button>

                        <div className="h-6 w-px bg-white/10 mx-1" />

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onSettingsClick}
                            className="text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all"
                            title="Settings"
                        >
                            <Settings className="w-5 h-5" />
                        </Button>
                    </>
                )}
            </div>
        </motion.div>
    );
}
