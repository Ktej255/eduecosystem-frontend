import React, { useEffect, useState } from 'react';
import { Activity, Brain, CheckCircle, Globe, Shield, Zap, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import GeographyGapHeatmap from './GeographyGapHeatmap';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

interface ResultDashboardProps {
    score: number;
    totalQuestions: number;
    accuracy: number;
    stressIndex?: number;
    moduleData?: Record<string, { correct: number, total: number }>;
    onRetake?: () => void;
    onStartPractice?: (moduleId: string) => void;
}

const AnimatedCounter = ({ value, duration = 2, suffix = "" }: { value: number, duration?: number, suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        if (start === end) return;

        let totalMiliseconds = duration * 1000;
        let incrementTime = totalMiliseconds / end;

        let timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [value, duration]);

    return <span>{count}{suffix}</span>;
};

export default function GeographyResultDashboard({
    score = 0,
    totalQuestions = 0,
    accuracy = 0,
    stressIndex = 4.2,
    moduleData = {},
    onRetake,
    onStartPractice
}: ResultDashboardProps) {

    const isPassed = accuracy >= 70;
    const isHighStress = stressIndex > 6;

    useEffect(() => {
        if (isPassed) {
            const duration = 3 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

            const interval: any = setInterval(function() {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
                confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
            }, 250);
        }
    }, [isPassed]);

    return (
        <div className="max-w-7xl mx-auto px-6 py-8 relative">
            
            {/* HERO STATS HEADER */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl font-black text-foreground mb-2 flex items-center gap-3">
                        {isPassed ? "Geography Mastery Achieved! 🌍" : "Foundation Gaps Detected 🗺️"}
                        {isPassed && <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}><Globe className="text-blue-500 w-8 h-8" /></motion.div>}
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        {isPassed
                            ? "Your spatial understanding is solid. Ready for complex linking."
                            : "Your conceptual framework has memory leaks. Check the Heatmap below."}
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 bg-white dark:bg-neutral-900 p-4 rounded-2xl shadow-sm border border-border"
                >
                    <div className="flex flex-col items-end">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Global Rank</span>
                        <span className="text-2xl font-black text-blue-600 flex items-center gap-1">
                            <TrendingUp className="w-5 h-5" />
                            Top <AnimatedCounter value={15} suffix="%" />
                        </span>
                    </div>
                    <div className="w-px h-8 bg-muted" />
                    <div className="flex flex-col items-end">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Score</span>
                        <span className="text-2xl font-black text-amber-500">
                            <AnimatedCounter value={score} duration={1} />/{totalQuestions}
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* ZONE 1: COGNITIVE HEATMAP */}
            <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-card dark:bg-[#111] rounded-3xl border border-border shadow-2xl overflow-hidden mb-12 group hover:shadow-blue-500/5 transition-all duration-500"
            >
                <div className="p-6 border-b border-border bg-gray-50/50 dark:bg-card/5 flex items-center justify-between">
                    <h2 className="font-bold text-foreground flex items-center gap-2">
                        <Brain className="w-5 h-5 text-blue-500 animate-pulse" />
                        Zone 1: Spatial Cognitive Heatmap
                    </h2>
                    <span className="text-xs font-bold text-muted-foreground uppercase">Module-wise Gap Analysis</span>
                </div>
                <GeographyGapHeatmap moduleData={moduleData} onStartPractice={onStartPractice} />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

                {/* ZONE 2: STRESS & BEHAVIOR REPORT */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-card dark:bg-[#111] rounded-3xl border border-border shadow-xl p-8 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-24 bg-red-50 dark:bg-red-900/10 rounded-bl-[150px] -z-0" />

                    <div className="relative z-10">
                        <h2 className="font-bold text-foreground flex items-center gap-2 mb-6">
                            <Activity className={`w-5 h-5 ${isHighStress ? 'text-red-500' : 'text-green-500'}`} />
                            Zone 2: Behavioral Stress Index
                        </h2>

                        <div className="flex items-center gap-6 mb-6">
                            <div className={`text-5xl font-black ${isHighStress ? 'text-red-500' : 'text-green-500'}`}>
                                {stressIndex}/10
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-foreground">
                                    {isHighStress ? "Exam Anxiety Detected" : "Calm & Focused"}
                                </h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                    {isHighStress
                                        ? "You rushed your responses in the last quadrant. This drops recall by 30%."
                                        : "Your pacing remains optimal across the globe. Keep this frequency!"}
                                </p>
                            </div>
                        </div>

                        {isHighStress && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border border-red-100 dark:border-red-900/50"
                            >
                                <h4 className="font-bold text-red-800 dark:text-red-300 text-sm mb-2 flex items-center gap-2">
                                    <Zap className="w-4 h-4 fill-current animate-bounce" /> Recommended Action
                                </h4>
                                <Link href="/student/graphotherapy" className="w-full">
                                    <button className="w-full bg-card dark:bg-black text-red-600 font-bold py-3 rounded-lg shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all text-sm">
                                        Start 3-Min Reset Graphotherapy
                                    </button>
                                </Link>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* ZONE 3: THE PATH FORWARD */}
                <motion.div 
                    whileHover={{ y: -5 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className={`rounded-3xl border shadow-xl p-8 relative overflow-hidden flex flex-col justify-center ${isPassed
                    ? 'bg-gradient-to-br from-indigo-900 to-blue-900 text-white border-blue-800 shadow-indigo-500/20'
                    : 'bg-card dark:bg-[#111] border-border'
                    }`}>
                    <div className="relative z-10">
                        <h2 className="font-bold flex items-center gap-2 mb-4 opacity-90">
                            <Shield className="w-5 h-5" />
                            Zone 3: The Path Forward
                        </h2>

                        {isPassed ? (
                            <>
                                <h3 className="text-2xl font-black mb-3 text-white">
                                    You have conquered the Basics! 🧗
                                </h3>
                                <p className="text-blue-100 mb-8 max-w-sm">
                                    Your spatial facts are accurate. Ready for current affairs linking and advanced statement traps?
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-white text-blue-900 font-black py-4 rounded-xl shadow-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2 text-lg"
                                >
                                    <Globe className="w-5 h-5 animate-spin-slow" />
                                    Explore Current Linkages
                                </motion.button>
                            </>
                        ) : (
                            <>
                                <h3 className="text-2xl font-black text-foreground mb-3">
                                    Gaps in Foundation. 🗺️
                                </h3>
                                <p className="text-muted-foreground mb-8 max-w-sm">
                                    Focus on the red modules first. Rushing to advanced topics now will lead to confusion in the main exam.
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={onRetake}
                                    className="w-full bg-slate-900 dark:bg-card text-white dark:text-black font-bold py-4 rounded-xl shadow-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
                                >
                                    <CheckCircle className="w-5 h-5" />
                                    Review Weak Concepts
                                </motion.button>
                            </>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
