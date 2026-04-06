"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
    Scale,
    BookOpen,
    Target,
    ArrowRight,
    PlayCircle,
    GraduationCap,
    ChevronDown,
    Brain,
    Zap,
    Clock,
    Users,
    Trophy,
    Star,
    CheckCircle2,
    Globe,
    TrendingUp,
    Leaf,
    Palette,
    Microscope,
    ShieldCheck,
    Heart,
    Map
} from 'lucide-react';
import { useRouter } from 'next/navigation';

// Program Card Component
interface ProgramCardProps {
    title: string;
    subtitle: string;
    description: string;
    duration: string;
    price: string;
    features: string[];
    isPopular?: boolean;
    theme: 'orange' | 'blue' | 'green' | 'purple';
    onSelect?: () => void;
}

const themeStyles = {
    orange: {
        gradient: 'from-orange-500 via-amber-500 to-yellow-500',
        bgLight: 'bg-gradient-to-br from-orange-50 to-amber-50',
        border: 'border-orange-200 hover:border-orange-400',
        accent: 'text-orange-600',
        buttonBg: 'bg-orange-600 hover:bg-orange-700',
        iconBg: 'bg-orange-100',
        glowColor: 'shadow-orange-500/20',
    },
    blue: {
        gradient: 'from-blue-500 via-indigo-500 to-violet-500',
        bgLight: 'bg-gradient-to-br from-blue-50 to-indigo-50',
        border: 'border-blue-200 hover:border-blue-400',
        accent: 'text-blue-600',
        buttonBg: 'bg-blue-600 hover:bg-blue-700',
        iconBg: 'bg-blue-100',
        glowColor: 'shadow-blue-500/20',
    },
    green: {
        gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
        bgLight: 'bg-gradient-to-br from-emerald-50 to-teal-50',
        border: 'border-emerald-200 hover:border-emerald-400',
        accent: 'text-emerald-600',
        buttonBg: 'bg-emerald-600 hover:bg-emerald-700',
        iconBg: 'bg-emerald-100',
        glowColor: 'shadow-emerald-500/20',
    },
    purple: {
        gradient: 'from-purple-500 via-fuchsia-500 to-pink-500',
        bgLight: 'bg-gradient-to-br from-purple-50 to-fuchsia-50',
        border: 'border-purple-200 hover:border-purple-400',
        accent: 'text-purple-600',
        buttonBg: 'bg-purple-600 hover:bg-purple-700',
        iconBg: 'bg-purple-100',
        glowColor: 'shadow-purple-500/20',
    },
};

function ProgramCard({
    title,
    subtitle,
    description,
    duration,
    price,
    features,
    isPopular,
    theme,
    onSelect,
}: ProgramCardProps) {
    const styles = themeStyles[theme];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`relative group rounded-3xl border-2 ${styles.border} ${styles.bgLight} p-6 md:p-8 transition-all duration-300 hover:shadow-2xl ${styles.glowColor}`}
        >
            {isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg"
                    >
                        <Trophy className="w-3 h-3" />
                        BEST VALUE
                    </motion.div>
                </div>
            )}

            <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold ${styles.iconBg} ${styles.accent}`}>
                    {subtitle}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {duration}
                </div>
            </div>

            <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${styles.gradient} bg-clip-text text-transparent mb-3`}>
                {title}
            </h3>

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
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex items-start gap-3"
                    >
                        <CheckCircle2 className={`w-5 h-5 ${styles.accent} shrink-0 mt-0.5`} />
                        <span className="text-sm text-muted-foreground dark:text-muted-foreground">{feature}</span>
                    </motion.li>
                ))}
            </ul>

            <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-4">
                    {price === "Free" ? (
                        <span className={`text-4xl font-bold ${styles.accent}`}>Free</span>
                    ) : (
                        <>
                            <span className={`text-4xl font-bold ${styles.accent}`}>₹{price}</span>
                            <span className="text-muted-foreground text-sm">/ program</span>
                        </>
                    )}
                </div>

                <Button
                    onClick={onSelect}
                    className={`w-full ${styles.buttonBg} text-white h-12 rounded-xl font-semibold text-base group/btn`}
                >
                    <span className="flex items-center justify-center gap-2">
                        {price === "Free" ? "Access Now" : "Enroll Now"}
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                </Button>
            </div>
        </motion.div>
    );
}

// Tricolor Particle Background
function TricolorBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-900/30 to-green-900/20" />

            {/* Saffron particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`saffron-${i}`}
                    className="absolute w-3 h-3 rounded-full bg-orange-500/30"
                    style={{ left: `${10 + Math.random() * 30}%`, top: `${Math.random() * 40}%` }}
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4 + Math.random() * 2, delay: Math.random() * 2, repeat: Infinity }}
                />
            ))}

            {/* White particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`white-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-card/40"
                    style={{ left: `${35 + Math.random() * 30}%`, top: `${Math.random() * 100}%` }}
                    animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3 + Math.random() * 2, delay: Math.random() * 2, repeat: Infinity }}
                />
            ))}

            {/* Green particles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={`green-${i}`}
                    className="absolute w-3 h-3 rounded-full bg-green-500/30"
                    style={{ left: `${60 + Math.random() * 30}%`, top: `${60 + Math.random() * 40}%` }}
                    animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4 + Math.random() * 2, delay: Math.random() * 2, repeat: Infinity }}
                />
            ))}

            {/* Ashoka Chakra hint */}
            <motion.div
                className="absolute top-1/2 right-1/4 w-32 h-32 border-2 border-blue-900/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            />
        </div>
    );
}

// Subject Selector Hub Component
interface Subject {
    id: string;
    title: string;
    icon: any;
    color: string;
    bg: string;
    path: string;
}

const subjects: Subject[] = [
    { id: 'polity', title: 'Indian Polity', icon: Scale, color: 'text-orange-600', bg: 'bg-orange-50', path: '/student/upsc/polity' },
    { id: 'history', title: 'Modern History', icon: BookOpen, color: 'text-amber-600', bg: 'bg-amber-50', path: '/student/upsc/history' },
    { id: 'geography', title: 'Geography', icon: Globe, color: 'text-blue-600', bg: 'bg-blue-50', path: '/student/upsc/geography' },
    { id: 'economy', title: 'Indian Economy', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50', path: '/student/upsc/economy' },
    { id: 'environment', title: 'Environment', icon: Leaf, color: 'text-green-600', bg: 'bg-green-50', path: '/student/upsc/environment' },
    { id: 'art-culture', title: 'Art & Culture', icon: Palette, color: 'text-rose-600', bg: 'bg-rose-50', path: '/student/upsc/art-culture' },
    { id: 'ancient', title: 'Ancient History', icon: Map, color: 'text-yellow-600', bg: 'bg-yellow-50', path: '/student/upsc/ancient-history' },
    { id: 'science', title: 'Science & Tech', icon: Microscope, color: 'text-indigo-600', bg: 'bg-indigo-50', path: '/student/upsc/science-tech' },
    { id: 'ir', title: 'Int. Relations', icon: ShieldCheck, color: 'text-cyan-600', bg: 'bg-cyan-50', path: '/student/upsc/international-relations' },
    { id: 'ethics', title: 'Ethics & Integrity', icon: Heart, color: 'text-purple-600', bg: 'bg-purple-50', path: '/student/upsc/ethics' },
    { id: 'ca', title: 'Current Affairs', icon: Zap, color: 'text-red-600', bg: 'bg-red-50', path: '/student/upsc/current-affairs' },
    { id: 'society', title: 'Indian Society', icon: Users, color: 'text-teal-600', bg: 'bg-teal-50', path: '/student/upsc/society' },
];

function SubjectSelectorHub() {
    const router = useRouter();
    return (
        <section className="py-24 bg-slate-50" id="subjects">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Explore <span className="text-orange-600">Subjects</span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Select a subject to enter its dedicated revision portal and mastery tracks.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {subjects.map((subject, idx) => (
                        <motion.div
                            key={subject.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5, scale: 1.05 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            onClick={() => router.push(subject.path)}
                            className={`cursor-pointer ${subject.bg} p-6 rounded-2xl border border-transparent hover:border-orange-200 transition-all shadow-sm hover:shadow-md group`}
                        >
                            <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center ${subject.color}`}>
                                <subject.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground">{subject.title}</h3>
                            <div className="mt-2 flex items-center text-xs font-semibold text-muted-foreground group-hover:text-orange-600 transition-colors">
                                Enter Portal <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function UPSCLandingPage() {
    const router = useRouter();
    const { scrollYProgress } = useScroll();
    const scrollProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    const programs = [
        {
            title: "Revision Portal",
            subtitle: "Batch 1.1",
            description: "Scientific revision cycles with spaced repetition. Maximize retention with our AI-powered flashcard system.",
            duration: "Lifetime",
            price: "Free",
            features: [
                "Daily Flashcards (Polity, History)",
                "Pomodoro Study Timer",
                "Spaced Repetition Algorithm",
                "Voice Recall Practice",
                "Performance Analytics",
            ],
            theme: 'orange' as const,
            onSelect: () => {
                const element = document.getElementById('subjects');
                element?.scrollIntoView({ behavior: 'smooth' });
            },
        },
        {
            title: "Prelims Test Series",
            subtitle: "Mock Tests",
            description: "High-yield mock tests with detailed AI-powered analysis. Know your weak spots before the exam does.",
            duration: "6 Months",
            price: "5,999",
            features: [
                "30 Full-Length Mock Tests",
                "Subject-wise Sectional Drills",
                "AI Weakness Detection",
                "All India Ranking",
                "Detailed Answer Explanations",
            ],
            theme: 'blue' as const,
            isPopular: true,
        },
        {
            title: "Mains Answer Writing",
            subtitle: "Expert Feedback",
            description: "Master the art of answer writing with personalized feedback from toppers and mentors.",
            duration: "4 Months",
            price: "9,999",
            features: [
                "Daily Answer Writing Practice",
                "Personalized Expert Feedback",
                "Model Answers Library",
                "Weekly Mentorship Calls",
                "Essay & Ethics Mastery",
            ],
            theme: 'green' as const,
        },
        {
            title: "CSAT Mastery",
            subtitle: "Paper 2",
            description: "Conquer the qualifying paper with logic, comprehension, and mathematical shortcuts.",
            duration: "2 Months",
            price: "2,499",
            features: [
                "Concept Clarity Classes",
                "Shortcut Tricks & Formulas",
                "Previous Year Analysis",
                "Topic-wise Practice Tests",
                "Decision Making Strategies",
            ],
            theme: 'purple' as const,
        },
    ];

    const features = [
        {
            icon: BookOpen,
            title: "Retain More",
            description: "Our Active Recall engine ensures you never forget. Science-backed spaced repetition for permanent memory.",
            color: "text-blue-600",
            bg: "bg-blue-50",
        },
        {
            icon: Target,
            title: "Focus Better",
            description: "Integrated Pomodoro timers and Graphotherapy to keep your mind sharp and anxiety-free.",
            color: "text-orange-600",
            bg: "bg-orange-50",
        },
        {
            icon: Scale,
            title: "Analyze Deeply",
            description: "Granular analytics on every test. Know exactly which sub-topic is pulling your score down.",
            color: "text-emerald-600",
            bg: "bg-emerald-50",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white font-sans">
            {/* Scroll Progress */}
            <motion.div
                className="fixed top-0 left-0 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600 z-50"
                style={{ width: scrollProgress }}
            />

            {/* ======================= HERO SECTION ======================= */}
            <header className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-gray-900 via-orange-950/50 to-slate-50">
                <TricolorBackground />

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
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/10 backdrop-blur-sm border border-white/20 text-orange-300 text-sm font-medium mb-8"
                            >
                                <GraduationCap className="w-4 h-4" />
                                UPSC CIVIL SERVICES EXAMINATION
                            </motion.div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                                <span className="block">Crack UPSC with</span>
                                <span className="block bg-gradient-to-r from-orange-400 via-white to-green-400 bg-clip-text text-transparent">
                                    Scientific Precision.
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                                Stop random reading. Start <span className="text-orange-400 font-semibold">strategic preparation</span>.
                                Our AI-driven platform optimizes your study schedule, revision cycles, and test performance.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-lg px-8 py-6 h-auto rounded-full shadow-xl shadow-orange-500/30 font-semibold group"
                                    onClick={() => {
                                        const element = document.getElementById('subjects');
                                        element?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    <span className="flex items-center gap-2">
                                        Enter Revision Portal
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-white/30 text-white hover:bg-card/10 text-lg px-8 py-6 h-auto rounded-full backdrop-blur-sm"
                                >
                                    <PlayCircle className="mr-2 h-5 w-5" />
                                    Watch Orientation
                                </Button>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start"
                            >
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-white">500+</div>
                                    <div className="text-sm text-muted-foreground">Active Aspirants</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-400">95%</div>
                                    <div className="text-sm text-muted-foreground">Retention Rate</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-400">4.8★</div>
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
                                <div className="absolute inset-0 border-2 border-orange-500/20 rounded-full animate-pulse" />
                                <div className="absolute inset-8 border border-white/10 rounded-full" />
                                <div className="absolute inset-16 border border-green-500/20 rounded-full" />

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gradient-to-br from-orange-500/20 via-white/10 to-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                                        <GraduationCap className="w-16 h-16 text-white" />
                                    </div>
                                </div>

                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute top-8 right-8 w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg"
                                >
                                    <BookOpen className="w-7 h-7 text-white" />
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                                    className="absolute bottom-16 left-8 w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg"
                                >
                                    <Trophy className="w-6 h-6 text-white" />
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
            <SubjectSelectorHub />

            {/* ======================= WHY US ======================= */}
            <section className="py-24 bg-card">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Why <span className="text-orange-600">Choose Us</span>?
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We don't just teach—we <strong>optimize your brain</strong> for the toughest exam in India.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {features.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`${item.bg} p-8 rounded-2xl hover:shadow-lg transition-shadow border border-border`}
                            >
                                <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 ${item.color}`}>
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ======================= PROGRAMS ======================= */}
            <section className="py-24 bg-gradient-to-b from-white to-orange-50/30" id="programs">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Comprehensive <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Programs</span>
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            Everything you need to crack the exam, under one roof.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {programs.map((program, idx) => (
                            <ProgramCard
                                key={idx}
                                {...program}
                                onSelect={program.onSelect || (() => console.log('Select', program.title))}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ======================= FOOTER CTA ======================= */}
            <section className="py-24 bg-gradient-to-r from-gray-900 via-orange-950 to-gray-900 text-white rounded-t-3xl">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <GraduationCap className="h-16 w-16 mx-auto mb-6 text-orange-400" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Your Seat at LBSNAA Awaits
                        </h2>
                        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                            Don't let another attempt go to waste. Join the revolution in UPSC preparation.
                            Start with our free revision portal today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 text-lg px-10 py-6 h-auto rounded-full font-semibold shadow-xl"
                                onClick={() => {
                                    const element = document.getElementById('subjects');
                                    element?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Start Studying Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
