"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, Crown, HeartPulse, Check } from 'lucide-react';

export type UserIntent = 'anxiety' | 'focus' | 'leadership' | 'healing' | null;

interface IntentSelectorProps {
    selectedIntent: UserIntent;
    onSelect: (intent: UserIntent) => void;
}

const intents = [
    {
        id: 'anxiety' as const,
        label: 'Reduce Anxiety',
        icon: Brain,
        color: 'from-teal-400 to-teal-600',
        textColor: 'text-teal-400',
        desc: 'Calm the mind & unwanted thoughts'
    },
    {
        id: 'focus' as const,
        label: 'Boost Focus',
        icon: Zap,
        color: 'from-orange-400 to-orange-600',
        textColor: 'text-orange-400',
        desc: 'Sharpen memory & concentration'
    },
    {
        id: 'leadership' as const,
        label: 'Leadership',
        icon: Crown,
        color: 'from-amber-400 to-yellow-500',
        textColor: 'text-amber-400',
        desc: 'Build confidence & decisiveness'
    },
    {
        id: 'healing' as const,
        label: 'Deep Healing',
        icon: HeartPulse,
        color: 'from-rose-400 to-rose-600',
        textColor: 'text-rose-400',
        desc: 'Holistic personality transformation'
    }
];

export default function IntentSelector({ selectedIntent, onSelect }: IntentSelectorProps) {
    return (
        <div className="w-full max-w-5xl mx-auto mb-16 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8"
            >
                <h3 className="text-xl font-serif italic text-gray-500 mb-2">What is your primary goal?</h3>
                <p className="text-sm text-gray-400">We'll tailor the journey for you.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {intents.map((intent) => {
                    const isSelected = selectedIntent === intent.id;
                    const Icon = intent.icon;

                    return (
                        <motion.button
                            key={intent.id}
                            onClick={() => onSelect(isSelected ? null : intent.id)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`
                                relative p-6 rounded-2xl border-2 transition-all duration-300 text-left
                                group hover:shadow-lg overflow-hidden
                                ${isSelected
                                    ? `border-transparent bg-white shadow-xl`
                                    : 'border-slate-100 bg-white/50 hover:border-slate-200'
                                }
                            `}
                        >
                            {/* Selected Gradient Border/Glow */}
                            {isSelected && (
                                <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${intent.color}`} />
                            )}

                            {/* Checkmark for selected state */}
                            <AnimatePresence>
                                {isSelected && (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        className={`absolute top-4 right-4 w-6 h-6 rounded-full bg-gradient-to-r ${intent.color} flex items-center justify-center text-white`}
                                    >
                                        <Check className="w-4 h-4" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className={`
                                w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-colors
                                ${isSelected ? `bg-gradient-to-br ${intent.color} text-white` : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}
                            `}>
                                <Icon className="w-6 h-6" />
                            </div>

                            <h4 className={`text-lg font-bold mb-1 ${isSelected ? 'text-slate-900' : 'text-slate-600'}`}>
                                {intent.label}
                            </h4>

                            <p className="text-xs text-slate-500 leading-relaxed">
                                {intent.desc}
                            </p>

                            {/* Active bottom bar */}
                            <motion.div
                                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${intent.color}`}
                                initial={{ width: "0%" }}
                                animate={{ width: isSelected ? "100%" : "0%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    );
                })}
            </div>
        </div>
    );
}
