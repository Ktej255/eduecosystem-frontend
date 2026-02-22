"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle,
    Circle,
    Lock,
    Play,
    ArrowRight,
    Sun,
    PenTool,
    BookOpen,
    Mic,
    Clock,
    ChevronRight,
    Brain,
    Moon
} from 'lucide-react';
import Link from 'next/link';
import { DayPlan, JourneyStep } from '../../lib/journey/journey-engine';

const iconMap: Record<string, React.ReactNode> = {
    'Sun': <Sun className="w-6 h-6" />,
    'PenTool': <PenTool className="w-6 h-6" />,
    'BookOpen': <BookOpen className="w-6 h-6" />,
    'Mic': <Mic className="w-6 h-6" />,
    'Brain': <Brain className="w-6 h-6" />,
    'Moon': <Moon className="w-6 h-6" />
};

export default function JourneyTimeline({ plan }: { plan: DayPlan }) {

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 }
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
            {/* Header Quote */}
            {plan.quote && (
                <div className="text-center mb-10 opacity-80">
                    <p className="text-lg font-serif italic text-muted-foreground dark:text-muted-foreground">"{plan.quote.text}"</p>
                    <p className="text-sm font-bold text-muted-foreground mt-2">— {plan.quote.author}</p>
                </div>
            )}

            <div className="relative">
                {/* Vertical Connector Line */}
                <div className="absolute left-6 md:left-8 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-500/20 via-blue-500/20 to-transparent dark:from-blue-400/10 dark:via-blue-400/10 z-0 rounded-full" />

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="space-y-8"
                >
                    {plan.steps.map((step, idx) => (
                        <JourneyStepCard key={step.id} step={step} index={idx} isLast={idx === plan.steps.length - 1} />
                    ))}
                </motion.div>

                {/* Completion Badge at the end */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex justify-center mt-12"
                >
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-[1px] rounded-full shadow-xl shadow-green-500/20">
                        <div className="bg-card dark:bg-[#111] px-6 py-2 rounded-full flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm font-bold text-muted-foreground">
                                Day {plan.dayNumber} Finish Line
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

function JourneyStepCard({ step, index, isLast }: { step: JourneyStep, index: number, isLast: boolean }) {
    const isLocked = step.status === 'locked';
    const isCompleted = step.status === 'completed';
    const isActive = step.status === 'ready' || step.status === 'in-progress';

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
            }}
            className="relative z-10 pl-16 md:pl-20"
        >
            {/* Timeline Node */}
            <div className={`absolute left-2 md:left-4 top-0 w-10 h-10 md:w-12 md:h-12 rounded-full border-4 flex items-center justify-center bg-card dark:bg-[#111] transition-colors duration-300 ${isCompleted ? 'border-green-500 text-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]' :
                isActive ? 'border-blue-500 text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)] scale-110' :
                    'border-border text-muted-foreground dark:text-muted-foreground'
                }`}>
                {isCompleted ? <CheckCircle className="w-5 h-5 md:w-6 md:h-6" /> :
                    isLocked ? <Lock className="w-4 h-4 md:w-5 md:h-5" /> :
                        <span className="text-sm md:text-base font-black">{index + 1}</span>}
            </div>

            {/* Card Content */}
            <div className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${isActive
                ? 'bg-card dark:bg-[#111] border-blue-200 dark:border-blue-900 shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:-translate-y-1'
                : 'bg-muted/50 border-border opacity-60 grayscale-[0.8] hover:opacity-100 hover:grayscale-0'
                }`}>
                {/* Featured Gradient for Active Card */}
                {isActive && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-[100px]" />
                )}

                <div className="p-6 flex flex-col md:flex-row md:items-center gap-6">
                    {/* Icon Box */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-white shadow-lg ${step.phase === 'priming' ? 'bg-gradient-to-br from-amber-400 to-orange-500' :
                        step.phase === 'activation' ? 'bg-gradient-to-br from-purple-500 to-pink-600' :
                            step.phase === 'core' ? 'bg-gradient-to-br from-blue-500 to-indigo-600' :
                                'bg-gradient-to-br from-emerald-500 to-teal-600'
                        }`}>
                        {step.icon && iconMap[step.icon] ? iconMap[step.icon] : <Circle />}
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${isActive ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'bg-muted text-muted-foreground'
                                }`}>
                                Phase {index + 1}: {step.phase}
                            </span>
                            <span className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                                <Clock className="w-3 h-3" /> {step.durationMinutes} min
                            </span>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-1">
                            {step.title}
                        </h3>
                        {step.subtitle && (
                            <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                                {step.subtitle}
                            </div>
                        )}
                        <p className="text-sm text-muted-foreground dark:text-muted-foreground leading-relaxed max-w-lg">
                            {step.description}
                        </p>
                    </div>

                    {/* Action Button */}
                    <div className="mt-4 md:mt-0 md:ml-4 shrink-0">
                        {isLocked ? (
                            <button disabled className="px-6 py-3 rounded-xl bg-muted text-muted-foreground font-bold text-sm flex items-center gap-2 cursor-not-allowed w-full md:w-auto justify-center">
                                <Lock className="w-4 h-4" /> Locked
                            </button>
                        ) : isCompleted ? (
                            <button className="px-6 py-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-sm flex items-center gap-2 w-full md:w-auto justify-center hover:bg-green-200 transition-colors">
                                <CheckCircle className="w-4 h-4" /> Completed
                            </button>
                        ) : (
                            <Link href={step.actionUrl} className="block w-full md:w-auto">
                                <button className="w-full md:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all">
                                    Start Now <ArrowRight className="w-4 h-4" />
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
