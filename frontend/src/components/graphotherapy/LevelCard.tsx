"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Sparkles, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LevelCardProps {
    level: 1 | 2 | 3 | 4;
    title: string;
    subtitle: string;
    description: string;
    duration: string;
    price: string;
    features: string[];
    isPopular?: boolean;
    onSelect?: () => void;
}

const levelThemes = {
    1: {
        name: 'Awareness',
        gradient: 'from-teal-500 via-cyan-500 to-blue-500',
        bgLight: 'bg-gradient-to-br from-teal-50 to-cyan-50',
        border: 'border-teal-200 hover:border-teal-400',
        accent: 'text-teal-600',
        buttonBg: 'bg-teal-600 hover:bg-teal-700',
        iconBg: 'bg-teal-100',
        glowColor: 'shadow-teal-500/20',
    },
    2: {
        name: 'Academic',
        gradient: 'from-orange-500 via-amber-500 to-yellow-500',
        bgLight: 'bg-gradient-to-br from-orange-50 to-amber-50',
        border: 'border-orange-200 hover:border-orange-400',
        accent: 'text-orange-600',
        buttonBg: 'bg-orange-600 hover:bg-orange-700',
        iconBg: 'bg-orange-100',
        glowColor: 'shadow-orange-500/20',
    },
    3: {
        name: 'Architect',
        gradient: 'from-amber-400 via-yellow-500 to-amber-600',
        bgLight: 'bg-gradient-to-br from-amber-50 to-yellow-50',
        border: 'border-amber-300 hover:border-amber-500',
        accent: 'text-amber-700',
        buttonBg: 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700',
        iconBg: 'bg-amber-100',
        glowColor: 'shadow-amber-500/30',
        isPremium: true,
    },
    4: {
        name: 'Healer',
        gradient: 'from-emerald-600 via-teal-600 to-green-700',
        bgLight: 'bg-gradient-to-br from-emerald-50 to-teal-50',
        border: 'border-emerald-200 hover:border-emerald-400',
        accent: 'text-emerald-700',
        buttonBg: 'bg-emerald-700 hover:bg-emerald-800',
        iconBg: 'bg-emerald-100',
        glowColor: 'shadow-emerald-500/20',
    },
};

export default function LevelCard({
    level,
    title,
    subtitle,
    description,
    duration,
    price,
    features,
    isPopular,
    onSelect,
}: LevelCardProps) {
    const theme = levelThemes[level];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: level * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`relative group rounded-3xl border-2 ${theme.border} ${theme.bgLight} p-6 md:p-8 transition-all duration-300 hover:shadow-2xl ${theme.glowColor}`}
        >
            {/* Popular Badge */}
            {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg"
                    >
                        <Sparkles className="w-3 h-3" />
                        MOST POPULAR
                    </motion.div>
                </div>
            )}

            {/* Level Badge */}
            <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${theme.iconBg} ${theme.accent}`}>
                    <Star className="w-4 h-4" fill="currentColor" />
                    Level {level}
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {duration}
                </div>
            </div>

            {/* Title Section */}
            <div className="mb-4">
                <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent mb-1`}>
                    {title}
                </h3>
                <p className={`text-sm font-medium ${theme.accent} uppercase tracking-wide`}>
                    {subtitle}
                </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {description}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
                {features.map((feature, idx) => (
                    <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.05 }}
                        className="flex items-start gap-3"
                    >
                        <CheckCircle2 className={`w-5 h-5 ${theme.accent} shrink-0 mt-0.5`} />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </motion.li>
                ))}
            </ul>

            {/* Price & CTA */}
            <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-4">
                    <span className={`text-4xl font-bold ${theme.accent}`}>₹{price}</span>
                    <span className="text-gray-500 text-sm">/ program</span>
                </div>

                <Button
                    onClick={onSelect}
                    className={`w-full ${theme.buttonBg} text-white h-12 rounded-xl font-semibold text-base group/btn btn-ink-hover`}
                >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                        Start Level {level}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                </Button>
            </div>

            {/* Decorative Ink Dots */}
            <div className="absolute top-4 right-4 opacity-20 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${theme.gradient}`}
                        style={{
                            top: i * 8,
                            right: i * 6,
                        }}
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.3,
                            repeat: Infinity,
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
}
