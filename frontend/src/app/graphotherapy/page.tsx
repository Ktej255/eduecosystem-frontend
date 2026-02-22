"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    ArrowRight,
    Star,
    Quote,
    PlayCircle,
    Brain,
    PenTool,
    Sparkles,
    ChevronDown,
    Users,
    Award,
    Clock
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import LevelCard from '@/components/graphotherapy/LevelCard';
import BeforeAfterSlider from '@/components/graphotherapy/BeforeAfterSlider';
import NeuroCanvas from '@/components/graphotherapy/NeuroCanvas';
import ScrollInkSystem from '@/components/graphotherapy/ScrollInkSystem';
import IntentSelector, { UserIntent } from '@/components/graphotherapy/IntentSelector';

export default function GraphotherapyLandingPage() {
    const router = useRouter();
    const [showFreeAnalysisPopup, setShowFreeAnalysisPopup] = useState(false);
    const [selectedIntent, setSelectedIntent] = useState<UserIntent>(null);
    const [mouseSpeed, setMouseSpeed] = useState(0);

    // Popup Timer
    useEffect(() => {
        const timer = setTimeout(() => setShowFreeAnalysisPopup(true), 15000); // Increased delay
        return () => clearTimeout(timer);
    }, []);

    const levels = [
        {
            id: 'l1',
            level: 1 as const,
            title: "The Awakening",
            subtitle: "Foundation & Mindfulness",
            description: "Begin your transformation journey. Master the basic strokes that rewire your subconscious for calm and clarity.",
            duration: "21 Days",
            price: "4,999",
            features: [
                "21-Day Guided Daily Practice",
                "Foundational Stroke Correction (t-bars, loops)",
                "Stress & Anxiety Reduction Techniques",
                "Daily Progress Tracking & Reminders",
                "Community Support Access",
            ],
            tags: ['anxiety', 'healing'],
        },
        {
            id: 'l2',
            level: 2 as const,
            title: "The Scholar",
            subtitle: "Focus & Academic Excellence",
            description: "Unlock laser-sharp focus and memory retention. Designed for students and professionals seeking peak mental performance.",
            duration: "30 Days",
            price: "6,999",
            features: [
                "30-Day Intensive Program",
                "Concentration & Memory Strokes",
                "Procrastination Elimination Protocol",
                "Confidence Building Exercises",
                "Weekly Expert Progress Review",
            ],
            isPopular: true,
            tags: ['focus', 'leadership'],
        },
        {
            id: 'l3',
            level: 3 as const,
            title: "The Architect",
            subtitle: "Leadership & Mastery",
            description: "Develop the handwriting of leaders. Build unshakable self-belief, initiative, and decisive thinking patterns.",
            duration: "40 Days",
            price: "9,999",
            features: [
                "40-Day Mastery Course",
                "Leadership Mindset Strokes",
                "Decision Making Enhancement",
                "Specific Trait Elimination Program",
                "Priority 1-on-1 Expert Support",
            ],
            tags: ['leadership', 'focus'],
        },
        {
            id: 'l4',
            level: 4 as const,
            title: "The Healer",
            subtitle: "Health & Complete Transformation",
            description: "The ultimate 90-day neural rewiring protocol. Address deep-rooted patterns for holistic wellbeing and self-mastery.",
            duration: "90 Days",
            price: "15,999",
            features: [
                "Complete 90-Day Protocol",
                "Total Personality Architecture",
                "Health & Vitality Strokes",
                "Subconscious Reprogramming",
                "Lifetime Community Access",
                "Direct Expert Reviews & Calls",
            ],
            tags: ['healing', 'anxiety'],
        },
    ];

    // Filter and sort levels based on intent
    const filteredLevels = React.useMemo(() => {
        if (!selectedIntent) return levels;

        return [...levels].sort((a, b) => {
            const aMatch = a.tags.includes(selectedIntent) ? 1 : 0;
            const bMatch = b.tags.includes(selectedIntent) ? 1 : 0;
            return bMatch - aMatch; // Match comes first
        });
    }, [selectedIntent]);

    const testimonials = [
        {
            quote: "I never knew changing the way I cross my 't's could make me feel so much more confident. After 21 days, my manager noticed the difference!",
            name: "Priya S.",
            role: "Software Engineer, Bangalore",
            rating: 5,
        },
        {
            quote: "My concentration during UPSC preparation improved dramatically. The procrastination strokes literally changed my study routine.",
            name: "Rahul K.",
            role: "UPSC Aspirant, Delhi",
            rating: 5,
        },
        {
            quote: "Skeptic at first, but the science behind it is solid. My anxiety reduced significantly within the first week.",
            name: "Ananya M.",
            role: "Marketing Manager, Mumbai",
            rating: 5,
        },
    ];

    return (
        <div className="min-h-screen bg-[#FFFEF7] font-sans selection:bg-[#D4AF37] selection:text-white">
            {/* 10X Upgrade: Living Border System */}
            <ScrollInkSystem />

            {/* ======================= HERO SECTION ======================= */}
            <header className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1628]">
                {/* 10X Upgrade: Interactive NeuroCanvas */}
                <div className="absolute inset-0 z-0 opacity-40">
                    <NeuroCanvas
                        interactive
                        onSpeedChange={setMouseSpeed}
                    />
                </div>

                {/* Dynamic Gradient Overlay based on mouse speed */}
                <motion.div
                    className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay"
                    animate={{
                        background: mouseSpeed > 10
                            ? 'radial-gradient(circle at 50% 50%, rgba(78, 205, 196, 0.2), transparent 70%)' // Active Teal
                            : 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1), transparent 70%)' // Calm Gold
                    }}
                    transition={{ duration: 1 }}
                />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Copy */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center lg:text-left"
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/5 backdrop-blur-sm border border-white/10 text-amber-300 text-sm font-medium mb-8"
                            >
                                <Sparkles className="w-4 h-4" />
                                THE SCIENCE OF HANDWRITING THERAPY
                            </motion.div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                                <span className="block">Rewrite Your</span>
                                <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                                    Neuron Pathways.
                                </span>
                                <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl font-light text-muted-foreground">
                                    Redesign Your Destiny.
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                                Every stroke you write is a signal to your brain. Change your handwriting,
                                change your <span className="text-amber-400 font-semibold">personality</span>,
                                change your <span className="text-teal-400 font-semibold">life</span>.
                            </p>

                            {/* CTAs - Z-Pattern Hot Zone */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-foreground text-lg px-8 py-6 h-auto rounded-full shadow-xl shadow-amber-500/30 font-semibold btn-ink-hover group"
                                    onClick={() => setShowFreeAnalysisPopup(true)}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Get Free Analysis
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-white/30 text-white hover:bg-card/10 text-lg px-8 py-6 h-auto rounded-full backdrop-blur-sm"
                                >
                                    <PlayCircle className="mr-2 h-5 w-5" />
                                    Watch Case Study
                                </Button>
                            </div>

                            {/* Social Proof Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
                            >
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">5000+</div>
                                    <div className="text-sm text-muted-foreground">Students Transformed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-amber-400">21 Days</div>
                                    <div className="text-sm text-muted-foreground">To See Results</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-teal-400">4.9★</div>
                                    <div className="text-sm text-muted-foreground">Student Rating</div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right: Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="hidden lg:block relative"
                        >
                            <div className="relative w-full aspect-square max-w-lg mx-auto">
                                {/* Decorative rings */}
                                <div className="absolute inset-0 border-2 border-amber-500/20 rounded-full animate-pulse" />
                                <div className="absolute inset-8 border border-teal-500/20 rounded-full" />
                                <div className="absolute inset-16 border border-white/10 rounded-full" />

                                {/* Center brain icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gradient-to-br from-amber-500/20 to-teal-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                                        <Brain className="w-16 h-16 text-white" />
                                    </div>
                                </div>

                                {/* Floating icons */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute top-8 right-8 w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg"
                                >
                                    <PenTool className="w-7 h-7 text-white" />
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                                    className="absolute bottom-16 left-8 w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center shadow-lg"
                                >
                                    <Star className="w-6 h-6 text-white" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ChevronDown className="w-8 h-8 text-white/50" />
                        </motion.div>
                    </motion.div>
                </div>
            </header>

            {/* ======================= WHY GRAPHOTHERAPY ======================= */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Why <span className="text-amber-600">Graphotherapy</span>?
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Your handwriting is actually <strong>"brain-writing"</strong>.
                            Every stroke comes from neural pathways in your brain.
                            By altering specific strokes, you send reverse signals that create
                            <strong> new neural connections</strong>.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Brain,
                                title: "Neuroscience-Backed",
                                description: "Based on neuroplasticity research. Your brain can rewire itself at any age through consistent practice.",
                                color: "text-blue-600",
                                bg: "bg-blue-50",
                            },
                            {
                                icon: PenTool,
                                title: "Simple Daily Practice",
                                description: "Just 15 minutes of conscious writing each day. No equipment, no apps—just paper and intention.",
                                color: "text-amber-600",
                                bg: "bg-amber-50",
                            },
                            {
                                icon: Sparkles,
                                title: "Visible Results",
                                description: "Students report changes in confidence, focus, and emotional stability within 21 days.",
                                color: "text-emerald-600",
                                bg: "bg-emerald-50",
                            },
                        ].map((item, idx) => (
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

            {/* ======================= BEFORE/AFTER SLIDER ======================= */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            See the <span className="text-amber-600">Transformation</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Drag the slider to compare handwriting before and after Graphotherapy
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <BeforeAfterSlider />
                    </div>
                </div>
            </section>

            {/* ======================= 4-LEVEL JOURNEY ======================= */}
            <section className="py-24 bg-[#FFFEF7]" id="programs">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Your <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">4-Level Journey</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            From awareness to mastery—a structured path to complete personality transformation.
                        </p>
                    </motion.div>

                    {/* 10X Upgrade: Intent Logic Engine */}
                    <IntentSelector
                        selectedIntent={selectedIntent}
                        onSelect={setSelectedIntent}
                    />

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <AnimatePresence mode='popLayout'>
                            {filteredLevels.map((level) => (
                                <motion.div
                                    key={level.level}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <LevelCard
                                        {...level}
                                        onSelect={() => router.push(`/student/graphotherapy/level/${level.level}`)}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* ======================= TESTIMONIALS ======================= */}
            <section className="py-24 bg-gradient-to-b from-[#0A1628] to-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Real <span className="text-amber-400">Transformations</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Hear from students who rewrote their stories
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {testimonials.map((testimonial, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-card/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                                <Quote className="w-8 h-8 text-amber-400/50 mb-4" />
                                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                                    "{testimonial.quote}"
                                </p>
                                <div>
                                    <div className="font-semibold text-white">{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ======================= FOOTER CTA ======================= */}
            <section className="py-24 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-foreground">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Transform?
                        </h2>
                        <p className="text-xl text-foreground mb-10 max-w-2xl mx-auto">
                            Join thousands of students who have rewritten their destiny.
                            Start with a free handwriting analysis today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-gray-900 text-white hover:bg-gray-800 text-lg px-10 py-6 h-auto rounded-full font-semibold shadow-xl"
                                onClick={() => router.push('/graphotherapy/funnel')}
                            >
                                Start Free Analysis
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-gray-900 text-foreground hover:bg-gray-900/10 text-lg px-10 py-6 h-auto rounded-full font-semibold"
                                onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                View Programs
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ======================= FREE ANALYSIS POPUP ======================= */}
            {showFreeAnalysisPopup && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-card rounded-3xl shadow-2xl max-w-lg w-full p-8 relative overflow-hidden"
                    >
                        {/* Gold accent bar */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-yellow-500" />

                        <button
                            onClick={() => setShowFreeAnalysisPopup(false)}
                            className="absolute top-4 right-4 text-muted-foreground hover:text-muted-foreground text-2xl"
                        >
                            ×
                        </button>

                        <div className="text-center space-y-6">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-20 h-20 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto"
                            >
                                <PenTool className="h-10 w-10 text-amber-600" />
                            </motion.div>

                            <h2 className="text-3xl font-bold text-foreground">
                                Get Your Handwriting Analysis
                                <span className="text-amber-600"> FREE!</span>
                            </h2>

                            <p className="text-muted-foreground">
                                Discover what your handwriting reveals about your subconscious mind.
                                Takes only 2 minutes!
                            </p>

                            <Button
                                className="w-full h-14 text-lg bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-foreground shadow-lg font-bold rounded-xl"
                                onClick={() => router.push('/graphotherapy/funnel')}
                            >
                                Yes! Analyze My Handwriting
                            </Button>

                            <button
                                onClick={() => setShowFreeAnalysisPopup(false)}
                                className="text-sm text-muted-foreground underline hover:text-muted-foreground"
                            >
                                No thanks, I'll pay full price later
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
