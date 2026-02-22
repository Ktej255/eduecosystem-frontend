"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Flower2,
    Brain,
    Sparkles,
    ArrowRight,
    PlayCircle,
    Leaf,
    Moon,
    Sun,
    Wind,
    Star,
    ChevronDown,
    Clock,
    Users,
    Zap
} from 'lucide-react';
import { useRouter } from 'next/navigation';

// Meditation Level Card Component
interface MeditationLevelCardProps {
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
        gradient: 'from-sky-400 via-blue-500 to-indigo-500',
        bgLight: 'bg-gradient-to-br from-sky-50 to-blue-50',
        border: 'border-sky-200 hover:border-sky-400',
        accent: 'text-sky-600',
        buttonBg: 'bg-sky-600 hover:bg-sky-700',
        iconBg: 'bg-sky-100',
        glowColor: 'shadow-sky-500/20',
        icon: Wind,
    },
    2: {
        gradient: 'from-violet-400 via-purple-500 to-fuchsia-500',
        bgLight: 'bg-gradient-to-br from-violet-50 to-purple-50',
        border: 'border-violet-200 hover:border-violet-400',
        accent: 'text-violet-600',
        buttonBg: 'bg-violet-600 hover:bg-violet-700',
        iconBg: 'bg-violet-100',
        glowColor: 'shadow-violet-500/20',
        icon: Sparkles,
    },
    3: {
        gradient: 'from-amber-400 via-orange-500 to-red-500',
        bgLight: 'bg-gradient-to-br from-amber-50 to-orange-50',
        border: 'border-amber-200 hover:border-amber-400',
        accent: 'text-amber-600',
        buttonBg: 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600',
        iconBg: 'bg-amber-100',
        glowColor: 'shadow-amber-500/30',
        icon: Sun,
    },
    4: {
        gradient: 'from-indigo-500 via-purple-600 to-violet-700',
        bgLight: 'bg-gradient-to-br from-indigo-50 to-violet-50',
        border: 'border-indigo-200 hover:border-indigo-400',
        accent: 'text-indigo-700',
        buttonBg: 'bg-indigo-700 hover:bg-indigo-800',
        iconBg: 'bg-indigo-100',
        glowColor: 'shadow-indigo-500/20',
        icon: Moon,
    },
};

function MeditationLevelCard({
    level,
    title,
    subtitle,
    description,
    duration,
    price,
    features,
    isPopular,
    onSelect,
}: MeditationLevelCardProps) {
    const theme = levelThemes[level];
    const IconComponent = theme.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: level * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`relative group rounded-3xl border-2 ${theme.border} ${theme.bgLight} p-6 md:p-8 transition-all duration-300 hover:shadow-2xl ${theme.glowColor}`}
        >
            {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-gradient-to-r from-violet-500 to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg"
                    >
                        <Sparkles className="w-3 h-3" />
                        MOST POPULAR
                    </motion.div>
                </div>
            )}

            <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${theme.iconBg} ${theme.accent}`}>
                    <IconComponent className="w-4 h-4" />
                    Level {level}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {duration}
                </div>
            </div>

            <div className="mb-4">
                <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${theme.gradient} bg-clip-text text-transparent mb-1`}>
                    {title}
                </h3>
                <p className={`text-sm font-medium ${theme.accent} uppercase tracking-wide`}>
                    {subtitle}
                </p>
            </div>

            <p className="text-muted-foreground dark:text-muted-foreground mb-6 leading-relaxed">
                {description}
            </p>

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
                        <Leaf className={`w-5 h-5 ${theme.accent} shrink-0 mt-0.5`} />
                        <span className="text-sm text-muted-foreground dark:text-muted-foreground">{feature}</span>
                    </motion.li>
                ))}
            </ul>

            <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-4">
                    {price === "Free" ? (
                        <span className={`text-4xl font-bold ${theme.accent}`}>Free</span>
                    ) : (
                        <>
                            <span className={`text-4xl font-bold ${theme.accent}`}>₹{price}</span>
                            <span className="text-muted-foreground text-sm">/ program</span>
                        </>
                    )}
                </div>

                <Button
                    onClick={onSelect}
                    className={`w-full ${theme.buttonBg} text-white h-12 rounded-xl font-semibold text-base group/btn`}
                >
                    <span className="flex items-center justify-center gap-2">
                        {price === "Free" ? "Start Free" : `Begin Level ${level}`}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                </Button>
            </div>
        </motion.div>
    );
}

// Particle Background for Meditation
function ZenParticleBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent" />

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-card/20"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        delay: Math.random() * 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Decorative circles */}
            <motion.div
                className="absolute top-1/4 right-1/4 w-64 h-64 border border-white/10 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
                className="absolute top-1/3 right-1/3 w-48 h-48 border border-purple-500/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            />
        </div>
    );
}

export default function MeditationLandingPage() {
    const router = useRouter();
    const { scrollYProgress } = useScroll();
    const scrollProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    const levels = [
        {
            level: 1 as const,
            title: "Breath Awareness",
            subtitle: "Foundation & Stillness",
            description: "Begin with the basics. Learn to observe your breath without trying to change it—the gateway to inner peace.",
            duration: "60 Days",
            price: "Free",
            features: [
                "Guided Breathwork Sessions",
                "Morning & Evening Routines",
                "Stress Reduction Techniques",
                "Sleep Quality Improvement",
                "Beginner-Friendly Approach",
            ],
        },
        {
            level: 2 as const,
            title: "Visualization",
            subtitle: "Imagination & Manifestation",
            description: "Harness the creative power of your mind. Learn to visualize goals, heal emotions, and reprogram beliefs.",
            duration: "60 Days",
            price: "1,999",
            features: [
                "Creative Visualization Scripts",
                "Goal Manifestation Techniques",
                "Subconscious Reprogramming",
                "Enhanced Creativity Exercises",
                "Emotional Healing Journeys",
            ],
            isPopular: true,
        },
        {
            level: 3 as const,
            title: "Mantra & Sound",
            subtitle: "Vibration & Resonance",
            description: "Dive into the ancient science of sound. Use mantras and frequencies to align your energy centers.",
            duration: "60 Days",
            price: "3,499",
            features: [
                "Sacred Mantra Practices",
                "Vibrational Healing Sessions",
                "Chakra Balancing Techniques",
                "Sound Bath Experiences",
                "Deep Focus States",
            ],
        },
        {
            level: 4 as const,
            title: "Transcendence",
            subtitle: "Pure Awareness",
            description: "The ultimate journey inward. Touch states of pure consciousness beyond thought and form.",
            duration: "60 Days",
            price: "5,999",
            features: [
                "Advanced Silence Practices",
                "Non-Dual Awareness",
                "Ego Dissolution Techniques",
                "Spiritual Awakening Path",
                "Direct Guidance Sessions",
            ],
        },
    ];

    const benefits = [
        {
            icon: Brain,
            title: "Enhanced Focus",
            description: "Increase attention span and concentrate on complex subjects for longer durations.",
            color: "text-blue-600",
            bg: "bg-blue-50",
        },
        {
            icon: Sparkles,
            title: "Emotional Balance",
            description: "Regulate exam anxiety and stress. Stay calm and composed under high pressure.",
            color: "text-purple-600",
            bg: "bg-purple-50",
        },
        {
            icon: Zap,
            title: "Memory Boost",
            description: "Increase gray matter density in the hippocampus for better retention and recall.",
            color: "text-amber-600",
            bg: "bg-amber-50",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white font-sans">
            {/* Scroll Progress Line */}
            <motion.div
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-sky-500 via-purple-500 to-violet-600 z-50"
                style={{ width: scrollProgress }}
            />

            {/* ======================= HERO SECTION ======================= */}
            <header className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-indigo-950 via-violet-900 to-slate-50">
                <ZenParticleBackground />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center lg:text-left"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/10 backdrop-blur-sm border border-white/20 text-violet-300 text-sm font-medium mb-8"
                            >
                                <Flower2 className="w-4 h-4" />
                                #1 MENTAL FITNESS PLATFORM
                            </motion.div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                                <span className="block">Master Your</span>
                                <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-fuchsia-400 bg-clip-text text-transparent">
                                    Mind.
                                </span>
                                <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl font-light text-muted-foreground">
                                    Unleash Your Potential.
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                                A scientific approach to meditation designed for students and high performers.
                                Move from <span className="text-violet-400 font-semibold">chaos</span> to
                                <span className="text-fuchsia-400 font-semibold"> clarity</span> in just 10 minutes a day.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white text-lg px-8 py-6 h-auto rounded-full shadow-xl shadow-violet-500/30 font-semibold group"
                                    onClick={() => router.push('/student/meditation/level/1')}
                                >
                                    <span className="flex items-center gap-2">
                                        Start Free Trial
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-white/30 text-white hover:bg-card/10 text-lg px-8 py-6 h-auto rounded-full backdrop-blur-sm"
                                >
                                    <PlayCircle className="mr-2 h-5 w-5" />
                                    How It Works
                                </Button>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
                            >
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">10,000+</div>
                                    <div className="text-sm text-muted-foreground">Students Meditating</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-violet-400">10 Min</div>
                                    <div className="text-sm text-muted-foreground">Daily Practice</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-fuchsia-400">4.9★</div>
                                    <div className="text-sm text-muted-foreground">Student Rating</div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="hidden lg:block relative"
                        >
                            <div className="relative w-full aspect-square max-w-lg mx-auto">
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute inset-0 border-2 border-violet-500/30 rounded-full"
                                />
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                                    className="absolute inset-8 border border-purple-500/20 rounded-full"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                        className="w-32 h-32 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20"
                                    >
                                        <Flower2 className="w-16 h-16 text-white" />
                                    </motion.div>
                                </div>

                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute top-8 right-8 w-14 h-14 bg-violet-500 rounded-xl flex items-center justify-center shadow-lg"
                                >
                                    <Moon className="w-7 h-7 text-white" />
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                                    className="absolute bottom-16 left-8 w-12 h-12 bg-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg"
                                >
                                    <Sun className="w-6 h-6 text-white" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    >
                        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                            <ChevronDown className="w-8 h-8 text-white/50" />
                        </motion.div>
                    </motion.div>
                </div>
            </header>

            {/* ======================= WHY MEDITATE ======================= */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Why <span className="text-violet-600">Meditate</span>?
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            It's not just spiritual—it's <strong>neuroscience</strong>.
                            Here's how meditation upgrades your brain hardware.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {benefits.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`${item.bg} p-8 rounded-2xl hover:shadow-lg transition-shadow`}
                            >
                                <div className={`w-14 h-14 rounded-xl ${item.bg} border border-current/10 flex items-center justify-center mb-6 ${item.color}`}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ======================= 4-LEVEL JOURNEY ======================= */}
            <section className="py-24 bg-gradient-to-b from-white to-slate-50" id="programs">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Your Path to <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Mastery</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            A structured curriculum to take you from novice to zen master.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {levels.map((level) => (
                            <MeditationLevelCard
                                key={level.level}
                                {...level}
                                onSelect={() => router.push(`/student/meditation/level/${level.level}`)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ======================= FOOTER CTA ======================= */}
            <section className="py-24 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Leaf className="h-16 w-16 mx-auto mb-6 text-white/80" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Start with a Conscious Breath
                        </h2>
                        <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto">
                            Join 10,000+ students on the journey to inner peace.
                            Start your free trial today—no credit card required.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-card text-violet-700 hover:bg-violet-50 text-lg px-10 py-6 h-auto rounded-full font-semibold shadow-xl"
                                onClick={() => router.push('/student/meditation/level/1')}
                            >
                                Begin Free Trial
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
