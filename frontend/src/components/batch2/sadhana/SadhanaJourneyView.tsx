"use client";

import { motion } from "framer-motion";
import { Sparkles, BookOpen, Star, Lock, ArrowRight, Flame, Calculator, Fingerprint, Activity } from "lucide-react";
import Link from "next/link";
import { useSadhanaProgress } from "./hooks/useSadhanaProgress";

const FOUNDATION_CHAPTERS = [
    { id: 1, title: "The Origin of Mantras", desc: "Shiva's Mahatandava and the 70 million sounds.", duration: "10 mins", unlocked: true },
    { id: 2, title: "Mantra Sadhana", desc: "Inheriting sonic energy from previous masters.", duration: "15 mins", unlocked: true },
    { id: 3, title: "Do Mantras Work?", desc: "The author's 45th sadhana account.", duration: "12 mins", unlocked: true },
    { id: 4, title: "Devotion and Faith", desc: "The 16 Critical Factors for Siddhi.", duration: "20 mins", unlocked: false },
    { id: 5, title: "Initiation", desc: "The 4 Pillars of Sadhana & Types of Gurus.", duration: "18 mins", unlocked: false },
];

const SADHANA_TOOLS = [
    {
        id: "mala",
        title: "Digital Mala",
        desc: "108-bead interactive chanting with haptic rhythm.",
        icon: Activity,
        href: "/student/batch2/sadhana/tools/mala",
        color: "bg-emerald-100 text-emerald-700 border-emerald-200",
        iconBg: "bg-emerald-500",
    },
    {
        id: "compatibility",
        title: "Mantra Compatibility",
        desc: "Kula-Akula & Creditor-Debtor mathematical Vedic algorithms.",
        icon: Calculator,
        href: "/student/batch2/sadhana/tools/compatibility",
        color: "bg-blue-100 text-blue-700 border-blue-200",
        iconBg: "bg-blue-500",
    },
    {
        id: "yajna",
        title: "Yajna Wizard",
        desc: "Interactive 36-step Purushcharana engine.",
        icon: Flame,
        href: "/student/batch2/sadhana/tools/yajna",
        color: "bg-orange-100 text-orange-700 border-orange-200",
        iconBg: "bg-orange-500",
    },
    {
        id: "skills",
        title: "36 Skills Ascendant",
        desc: "The 36-petal modern competency matrix.",
        icon: Fingerprint,
        href: "/student/batch2/sadhana/skills",
        color: "bg-purple-100 text-purple-700 border-purple-200",
        iconBg: "bg-purple-500",
    },
];

export default function SadhanaJourneyView() {
    const { progress } = useSadhanaProgress();

    return (
        <div className="min-h-screen bg-[#FDF8F0] pb-24">
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-amber-950 to-amber-900 px-6 py-16 text-center shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-400 via-transparent to-transparent" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 max-w-3xl mx-auto"
                >
                    <div className="w-16 h-16 bg-amber-800/50 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-amber-700/50 shadow-inner">
                        <Sparkles className="w-8 h-8 text-amber-300" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-amber-50 mb-4 tracking-tight">
                        The Ancient Science of Mantras
                    </h1>
                    <p className="text-amber-200/80 text-lg md:text-xl leading-relaxed font-medium mb-8">
                        Your sequential journey from foundational philosophy to intensive invocation.
                    </p>

                    <div className="inline-flex items-center gap-2 bg-amber-950/50 backdrop-blur-md px-6 py-3 rounded-full border border-amber-700/50 text-amber-200 text-sm font-semibold">
                        <Star className="w-4 h-4 text-amber-400" />
                        <span>Archetype: {progress.archetype || "Evaluating..."}</span>
                        <div className="w-1 h-1 rounded-full bg-amber-600 mx-2" />
                        <span>Sankalpa Resets: {progress.sankalpaResets}</span>
                    </div>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column: The Narrative Journey */}
                    <div className="lg:col-span-7 xl:col-span-8 space-y-8">
                        <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-amber-100">
                            <div className="mb-8">
                                <h2 className="text-2xl font-serif font-bold text-amber-950 flex items-center gap-3">
                                    <BookOpen className="w-6 h-6 text-amber-600" />
                                    Phase 1: The Foundation
                                </h2>
                                <p className="text-amber-700/80 mt-2">
                                    Aspirants must build understanding before any practice begins.
                                </p>
                            </div>

                            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-amber-200 before:to-transparent">
                                {FOUNDATION_CHAPTERS.map((chapter, index) => (
                                    <motion.div
                                        key={chapter.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
                                    >
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FDF8F0] bg-amber-100 text-amber-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors">
                                            {chapter.unlocked ? (
                                                <span className="font-bold text-sm">{chapter.id}</span>
                                            ) : (
                                                <Lock className="w-4 h-4 text-amber-400" />
                                            )}
                                        </div>

                                        <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border ${chapter.unlocked ? 'bg-white border-amber-200 shadow-sm hover:border-amber-400 hover:shadow-md transition-all cursor-pointer' : 'bg-stone-50 border-stone-100 opacity-60'}`}>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className={`text-xs font-bold uppercase tracking-wider ${chapter.unlocked ? 'text-amber-600' : 'text-stone-400'}`}>Chapter {chapter.id}</span>
                                                <span className="text-xs font-medium text-stone-500">{chapter.duration}</span>
                                            </div>
                                            <h3 className={`font-bold text-lg mb-1 leading-tight ${chapter.unlocked ? 'text-amber-950' : 'text-stone-700'}`}>{chapter.title}</h3>
                                            <p className="text-stone-600 text-sm leading-relaxed">{chapter.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Portal of Sadhanas (Functional Tools) */}
                    <div className="lg:col-span-5 xl:col-span-4 space-y-6">
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-sm border border-amber-200">
                            <h2 className="text-xl font-serif font-bold text-amber-950 mb-2">Portal of Sadhanas</h2>
                            <p className="text-sm text-amber-800/70 mb-6">Access your functional practice instruments here.</p>

                            <div className="grid gap-4">
                                {SADHANA_TOOLS.map((tool) => {
                                    const Icon = tool.icon;
                                    return (
                                        <Link href={tool.href} key={tool.id}>
                                            <div className={`group relative p-4 rounded-xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg bg-card border-amber-100`}>
                                                <div className="flex items-start gap-4">
                                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${tool.iconBg} text-white shadow-inner`}>
                                                        <Icon className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h3 className="font-bold text-amber-950 group-hover:text-amber-700 transition-colors">
                                                            {tool.title}
                                                        </h3>
                                                        <p className="text-sm text-stone-500 mt-1 leading-snug">
                                                            {tool.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                                    <ArrowRight className="w-5 h-5 text-amber-400" />
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Current Focus Mini-Card */}
                        <div className="bg-card rounded-2xl p-6 shadow-sm border border-amber-100">
                            <h3 className="font-bold text-sm uppercase tracking-wider text-amber-800/60 mb-4">Current Focus</h3>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
                                    <Flame className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-amber-950">Sri Suktam Prep</p>
                                    <p className="text-sm text-stone-500">Day {progress.sriSuktamPrepStreak} of 960</p>
                                </div>
                            </div>
                            <div className="w-full bg-stone-100 rounded-full h-2 mt-4 overflow-hidden">
                                <div className="bg-gradient-to-r from-amber-400 to-orange-500 h-2 rounded-full" style={{ width: `${(progress.sriSuktamPrepStreak / 960) * 100}%` }} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
