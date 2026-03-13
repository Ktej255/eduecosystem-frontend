"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
    Globe2,
    Map,
    Compass,
    Mountain,
    Waves,
    Wind,
    Target,
    ArrowRight,
    PlayCircle,
    GraduationCap,
    ChevronDown,
    Brain,
    Zap,
    Clock,
    Trophy,
    CheckCircle2,
    BookOpen,
    Layers
} from 'lucide-react';
import { useRouter } from 'next/navigation';

// Feature Component
interface FeatureBoxProps {
    icon: any;
    title: string;
    description: string;
    color: string;
    bg: string;
    delay: number;
}

function FeatureBox({ icon: Icon, title, description, color, bg, delay }: FeatureBoxProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className={`${bg} p-8 rounded-[2rem] hover:shadow-2xl transition-all duration-500 border border-slate-200 group relative overflow-hidden`}
        >
            <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center mb-6 ${color} shadow-lg shadow-current/10 group-hover:scale-110 transition-transform`}>
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight text-slate-800 mb-3">{title}</h3>
            <p className="text-slate-600 font-medium leading-relaxed">{description}</p>
            <div className={`absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity`}>
                <Icon className="w-24 h-24" />
            </div>
        </motion.div>
    );
}

// Earth-themed Background
function EarthBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950 via-indigo-950 to-slate-50" />

            {/* Soft Ambient Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/10 rounded-full blur-[120px]" />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Animated Lines representing Lat/Long */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={`line-${i}`}
                    className="absolute h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full"
                    style={{ top: `${15 + i * 15}%` }}
                    animate={{ opacity: [0, 0.2, 0] }}
                    transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.5 }}
                />
            ))}
        </div>
    );
}

export default function GeographyLandingPage() {
    const router = useRouter();
    const { scrollYProgress } = useScroll();
    const scrollProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    const features = [
        {
            icon: Target,
            title: "NCERT Mapping",
            description: "Direct alignment with Class 11 and 12 NCERT Fundamentals of Physical & Human Geography.",
            color: "text-emerald-600",
            bg: "bg-emerald-50/50",
            delay: 0.1
        },
        {
            icon: Brain,
            title: "UPSC Logic",
            description: "Statement-based MCQs that mirror the tricky UPSC Prelims pattern for high-accuracy preparation.",
            color: "text-blue-600",
            bg: "bg-blue-50/50",
            delay: 0.2
        },
        {
            icon: Layers,
            title: "780+ Topics",
            description: "Granular breakdown of Geomorphology, Oceanography, and Indian Geography into 25-min blocks.",
            color: "text-indigo-600",
            bg: "bg-indigo-50/50",
            delay: 0.3
        }
    ];

    const curriculum = [
        { branch: "Physical Geography", icon: Mountain, items: ["Geomorphology", "Climatology", "Oceanography"], color: "bg-amber-100 text-amber-700" },
        { branch: "Indian Geography", icon: Map, items: ["Physiography", "Drainage Systems", "Climate & Soil"], color: "bg-emerald-100 text-emerald-700" },
        { branch: "Human & Economic", icon: Globe2, items: ["Resource Atlas", "Global Industry", "Population Dynamics"], color: "bg-blue-100 text-blue-700" }
    ];

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
            {/* Scroll Indicator */}
            <motion.div
                className="fixed top-0 left-0 h-1.5 bg-indigo-600 z-[100]"
                style={{ width: scrollProgress }}
            />

            {/* HERO SECTION */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-slate-200">
                <EarthBackground />

                <div className="container mx-auto px-4 relative z-10 pt-20">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-xs font-black uppercase tracking-widest"
                        >
                            <Compass className="w-4 h-4 animate-spin-slow" />
                            Master Geography Program 2026
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter"
                        >
                            SPATIAL <span className="text-indigo-400">PRECISION.</span><br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">UPSC SUCCESS.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg sm:text-xl text-blue-100/70 max-w-2xl mx-auto leading-relaxed font-medium"
                        >
                            Stop memorizing maps. Start understanding systems. The most comprehensive
                            Geography module built on scientific revision cycles and NCERT mastery.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Button
                                size="lg"
                                className="h-16 px-10 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black uppercase tracking-widest text-sm shadow-2xl shadow-indigo-600/30 group"
                                onClick={() => router.push('/student/upsc-store')}
                            >
                                Enroll Now — ₹1,999
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-16 px-10 rounded-2xl border-white/20 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest text-sm backdrop-blur-md"
                                onClick={() => router.push('/student/batch1/geography')}
                            >
                                <PlayCircle className="w-5 h-5 mr-2" />
                                Interactive Demo
                            </Button>
                        </motion.div>
                    </div>

                    {/* Stats HUD */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, type: 'spring' }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-5xl mx-auto"
                    >
                        <StatItem label="Topics" value="780+" />
                        <StatItem label="MCQs" value="1,500+" />
                        <StatItem label="NCERT Chapters" value="42" />
                        <StatItem label="Retention" value="98%" />
                    </motion.div>
                </div>
            </section>

            {/* KEY FEATURES */}
            <section className="py-32 container mx-auto px-4">
                <div className="text-center space-y-4 mb-20">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900">
                        The Geography <span className="text-indigo-600">Edge</span>
                    </h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-sm italic">
                        Scientific Methodology x UPSC Pattern
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <FeatureBox key={i} {...f} />
                    ))}
                </div>
            </section>

            {/* CURRICULUM PREVIEW */}
            <section className="py-32 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <Badge className="bg-indigo-600 text-white font-black px-4 py-1">SYLLABUS COVERAGE</Badge>
                            <h2 className="text-5xl font-black leading-tight uppercase">Master Every <span className="text-indigo-400">Coordinate</span>.</h2>
                            <p className="text-slate-400 text-lg leading-relaxed font-medium">
                                From the internal structure of the Earth to the complex monsoon patterns of India,
                                we've mapped every inch of the UPSC syllabus into high-retention teaching blocks.
                            </p>

                            <div className="space-y-4">
                                {curriculum.map((c, i) => (
                                    <div key={i} className="flex gap-6 p-6 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className={`w-12 h-12 rounded-2xl ${c.color} flex items-center justify-center`}>
                                            <c.icon className="w-6 h-6" />
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-black uppercase tracking-tight">{c.branch}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {c.items.map((item, j) => (
                                                    <span key={j} className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-2 py-1 rounded text-slate-400 border border-white/5">{item}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-indigo-500/20 blur-[120px] rounded-full" />
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="relative bg-gradient-to-br from-slate-800 to-slate-950 p-8 rounded-[3rem] border border-white/10 shadow-3xl"
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center">
                                                <Target className="w-5 h-5 text-white" />
                                            </div>
                                            <span className="font-black uppercase text-sm">Active Drill #42</span>
                                        </div>
                                        <span className="text-xs font-mono text-slate-500">Statement Type MCQ</span>
                                    </div>
                                    <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5">
                                        <p className="font-bold text-slate-200 mb-6">Which of the following statements regarding the Jet Streams is/are correct?</p>
                                        <div className="space-y-3">
                                            {[1, 2, 3].map(n => (
                                                <div key={n} className="flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-white/5">
                                                    <div className="w-6 h-6 rounded-full bg-slate-800 text-[10px] flex items-center justify-center font-black">{n}</div>
                                                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                                        <motion.div
                                                            className="h-full bg-indigo-500"
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${40 + n * 20}%` }}
                                                            transition={{ duration: 1, delay: n * 0.2 }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <Button className="w-full h-14 bg-indigo-600 rounded-2xl font-black uppercase text-xs">Verify Knowledge</Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-40 relative overflow-hidden bg-indigo-600 text-white">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                <div className="container mx-auto px-4 relative z-10 text-center space-y-10">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                        START YOUR <br />JOURNEY TO <span className="text-blue-200">LBSNAA.</span>
                    </h2>
                    <p className="text-xl text-indigo-100 font-medium max-w-2xl mx-auto">
                        Join 1,200+ aspirants who are mastering Geography through our scientific portal.
                        Your seat is waiting for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="h-16 px-12 rounded-2xl bg-white text-indigo-600 hover:bg-slate-100 font-black uppercase tracking-widest shadow-2xl"
                            onClick={() => router.push('/student/upsc-store')}
                        >
                            Enroll in Batch 1.1
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="h-16 px-12 rounded-2xl border-white/50 text-white hover:bg-white/10 font-black uppercase tracking-widest backdrop-blur-md"
                        >
                            Schedule Orientation
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

function StatItem({ label, value }: { label: string, value: string }) {
    return (
        <div className="px-6 py-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl text-center space-y-1">
            <div className="text-3xl font-black text-white">{value}</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-blue-200 opacity-60">{label}</div>
        </div>
    );
}

function Badge({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
            {children}
        </div>
    );
}
