"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, BookOpen, Star, Lock, ArrowRight, Flame, Calculator, Fingerprint, Activity, Hand, Compass, Clock, Shield, Play, Droplets, Map, Wrench, BarChart2 } from "lucide-react";
import Link from "next/link";
import { useSadhanaProgress } from "./hooks/useSadhanaProgress";
import SkillsExplorer from "./Sadhaka/SkillsExplorer";
import { LotusVisualizer } from "./Sadhaka/LotusVisualizer";

// -----------------------------------------------------------------------------------
// DATA
// -----------------------------------------------------------------------------------

interface ChapterEntry {
    id: number;
    title: string;
    desc: string;
    duration: string;
    unlocked: boolean;
}

interface JourneyPhase {
    name: string;
    subtitle: string;
    chapters: ChapterEntry[];
}

const JOURNEY_PHASES: JourneyPhase[] = [
    {
        name: "Phase 1: The Foundation",
        subtitle: "Understanding before practice begins.",
        chapters: [
            { id: 1, title: "The Origin of Mantras", desc: "Shiva's Mahatandava and the 70 million sounds.", duration: "10 min", unlocked: true },
            { id: 2, title: "Mantra Sadhana", desc: "Inheriting sonic energy from previous masters.", duration: "15 min", unlocked: true },
            { id: 3, title: "Do Mantras Work?", desc: "The author's 45th sadhana account.", duration: "12 min", unlocked: true },
            { id: 4, title: "Devotion and Faith", desc: "The 16 Critical Factors for Siddhi.", duration: "20 min", unlocked: true },
            { id: 5, title: "Initiation", desc: "The 4 Pillars & Types of Gurus.", duration: "18 min", unlocked: true },
            { id: 6, title: "Tenets of Discipleship", desc: "10 guidelines and the story of Totakacharya.", duration: "12 min", unlocked: true },
            { id: 7, title: "Daily Duties of an Adept", desc: "9 daily steps, 10 Dos, 10 Don'ts.", duration: "15 min", unlocked: true },
            { id: 8, title: "Six Limbs of a Mantra", desc: "Shadanga — the 6 structural components.", duration: "10 min", unlocked: true },
            { id: 9, title: "Selecting the Right Mantra", desc: "Kula-Akula Chakra element matching.", duration: "15 min", unlocked: true },
            { id: 10, title: "Exceptions", desc: "10 categories exempted from strict rules.", duration: "10 min", unlocked: true },
            { id: 11, title: "Flaws in Mantras", desc: "50 important flaws, 6 most common.", duration: "18 min", unlocked: true },
            { id: 12, title: "Correcting Flaws", desc: "The 5-step purification process.", duration: "12 min", unlocked: true },
            { id: 13, title: "Infusing Life in a Mantra", desc: "The 10 Samskaras of consecration.", duration: "20 min", unlocked: true },
            { id: 14, title: "How to Chant Your Mantra", desc: "4 types of Japa: Vachika to Ajapa.", duration: "15 min", unlocked: true },
            { id: 15, title: "Hurdles in Invocation", desc: "Fear, impatience, and how to overcome.", duration: "12 min", unlocked: true },
        ]
    },
    {
        name: "Phase 2: The Practices",
        subtitle: "Mastering the rituals of invocation.",
        chapters: [
            { id: 16, title: "Invoking the Deity", desc: "9-step pre-japa invocation flow.", duration: "20 min", unlocked: false },
            { id: 17, title: "Nyasa", desc: "Body consecration with 50 Sanskrit letters.", duration: "18 min", unlocked: false },
            { id: 18, title: "Hand Locks (Mudras)", desc: "7 core mudras and finger-element map.", duration: "15 min", unlocked: false },
            { id: 19, title: "Purushcharana", desc: "The complete 36-step sadhana engine.", duration: "30 min", unlocked: false },
        ]
    },
    {
        name: "Phase 3: The Sadhanas",
        subtitle: "Individual deity-specific practices.",
        chapters: [
            { id: 20, title: "Ganesha Sadhana", desc: "1.25L chants, obstacle removal.", duration: "15 min", unlocked: false },
            { id: 21, title: "Guru Sadhana", desc: "Inner guide awakening, 30-day practice.", duration: "15 min", unlocked: false },
            { id: 22, title: "Gayatri Sadhana", desc: "3-tier wisdom practice (40 days to 36 months).", duration: "20 min", unlocked: false },
            { id: 23, title: "Sri Suktam Sadhana", desc: "960-day discipline + 16-night ritual.", duration: "25 min", unlocked: false },
            { id: 24, title: "Rites of Atonement", desc: "Prayashchitta — 11 methods of expiation.", duration: "12 min", unlocked: false },
            { id: 25, title: "How to Make Fire Offerings", desc: "Complete Yajna procedure and Kunda setup.", duration: "20 min", unlocked: false },
        ]
    },
    {
        name: "Phase 4: Detailed Notes",
        subtitle: "Reference appendices and compatibility science.",
        chapters: [
            { id: 26, title: "Types of Mantras", desc: "Classifications and their applications.", duration: "10 min", unlocked: false },
            { id: 27, title: "Flaws in a Mantra (Detailed)", desc: "44 additional flaws with remedies.", duration: "15 min", unlocked: false },
            { id: 28, title: "16 Samskaras of Sanatana Dharma", desc: "Life-cycle ceremonies from birth to death.", duration: "18 min", unlocked: false },
            { id: 29, title: "16 Aspects of Mantra Sadhana", desc: "Critical factors for successful practice.", duration: "15 min", unlocked: false },
            { id: 30, title: "Vedic Meters (Chanda)", desc: "Poetic structures governing mantra rhythm.", duration: "12 min", unlocked: false },
            { id: 31, title: "Arrangement of Pots", desc: "Patrasadana — the 5-vessel system.", duration: "8 min", unlocked: false },
            { id: 32, title: "Mantra Compatibility", desc: "Zodiac & Creditor-Debtor algorithms.", duration: "15 min", unlocked: false },
        ]
    }
];

const SADHANA_TOOLS = [
    { id: "mala", title: "Digital Mala", desc: "108-bead interactive chanting.", icon: Activity, href: "/student/batch2/sadhana/tools/mala" },
    { id: "compatibility", title: "Compatibility", desc: "Kula-Akula Vedic math.", icon: Calculator, href: "/student/batch2/sadhana/tools/compatibility" },
    { id: "yajna", title: "Yajna Wizard", desc: "36-step Purushcharana engine.", icon: Flame, href: "/student/batch2/sadhana/tools/yajna" },
    { id: "mudras", title: "Mudra Guide", desc: "7 core hand locks & paths.", icon: Hand, href: "/student/batch2/sadhana/tools/mudras" },
    { id: "dinacharya", title: "Dinacharya", desc: "Daily routine tracker.", icon: Clock, href: "/student/batch2/sadhana/tools/dinacharya" },
    { id: "session", title: "Session Timer", desc: "Guided ritual timer.", icon: Play, href: "/student/batch2/sadhana/tools/session" },
    { id: "patrasadana", title: "Patrasadana", desc: "5-pot arrangement guide.", icon: Droplets, href: "/student/batch2/sadhana/tools/patrasadana" },
    { id: "sri-suktam", title: "Sri Suktam Prep", desc: "Daily check-in for Sri Suktam.", icon: Flame, href: "/student/batch2/sadhana/tools/sri-suktam" },
    { id: "sri-suktam-ritual", title: "Sri Suktam Ritual", desc: "16-night ritual guide.", icon: Star, href: "/student/batch2/sadhana/tools/sri-suktam-ritual" },
    { id: "sankalpa", title: "Sankalpa Vow", desc: "Sacred commitment ceremony.", icon: Shield, href: "/student/batch2/sadhana/sankalpa" },
    { id: "immersive-upanishads", title: "Immersions", desc: "10 Full-screen visual journeys.", icon: Sparkles, href: "/student/batch2/sadhana/tools/immersive-upanishads" },
    { id: "skills", title: "36 Skills", desc: "The modern competency matrix.", icon: Fingerprint, href: "/student/batch2/sadhana/skills" },
];

export default function SadhanaPortalV5() {
    const { progress } = useSadhanaProgress();
    const [activeTab, setActiveTab] = useState<'journey' | 'skills' | 'tools' | 'progress'>('journey');

    const renderTabs = () => {
        const tabs = [
            { id: 'journey', label: 'The Path', icon: Map },
            { id: 'skills', label: '36 Skills', icon: Fingerprint },
            { id: 'tools', label: 'Instruments', icon: Wrench },
            { id: 'progress', label: 'Evolution', icon: BarChart2 }
        ];

        return (
            <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-2">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all shrink-0 ${activeTab === tab.id
                            ? 'bg-[var(--sp-gold)] text-[var(--sp-bg)] shadow-[0_0_20px_var(--sp-gold)] opacity-100'
                            : 'bg-[var(--sp-surface)] text-[var(--sp-text-lo)] border border-[var(--sp-border)] hover:bg-[var(--sp-border)] hover:text-[var(--sp-text-hi)] opacity-80'
                            }`}
                    >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-[var(--sp-bg)] text-[var(--sp-text-hi)] font-sans pb-24">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-[var(--sp-surface)] border-b border-[var(--sp-border)] pt-20 pb-16 px-6">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--sp-gold)_0%,_transparent_30%)] opacity-10" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--sp-bg)] text-[var(--sp-gold)] rounded-xl border border-[var(--sp-border)] shadow-inner shadow-[var(--sp-gold)]/20 mb-6">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[var(--sp-text-hi)] mb-4 tracking-tight">
                            The Ancient Science of Mantras
                        </h1>
                        <p className="text-[var(--sp-text-lo)] text-lg max-w-xl leading-relaxed">
                            Your sequential journey from foundational philosophy to intensive invocation, merged and refined.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-3">
                        <div className="inline-flex items-center gap-3 bg-[var(--sp-bg)] border border-[var(--sp-border)] px-5 py-2.5 rounded-full text-sm font-semibold text-[var(--sp-text-hi)] shadow-sm">
                            <Star className="w-4 h-4 text-[var(--sp-gold)]" />
                            <span>Archetype: {progress.archetype || "Evaluating..."}</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--sp-gold)]/50 mx-1" />
                            <span className="text-[var(--sp-text-lo)]">Lvl {Math.floor(progress.points / 100) + 1}</span>
                        </div>

                        {progress.sriSuktamPrepStreak > 0 && (
                            <div className="inline-flex items-center gap-2 bg-[var(--sp-bg)] border border-[var(--sp-gold)]/30 px-4 py-2 rounded-full text-xs font-medium text-[var(--sp-gold)]">
                                <Flame className="w-3 h-3 animate-pulse" />
                                Sri Suktam Sync: Day {progress.sriSuktamPrepStreak}
                            </div>
                        )}
                    </div>
                </div>

                <div className="max-w-5xl mx-auto mt-10">
                    {renderTabs()}
                </div>
            </div>

            {/* Tab Content Area */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 relative z-20">
                <AnimatePresence mode="wait">

                    {/* JOURNEY TAB */}
                    {activeTab === 'journey' && (
                        <motion.div key="journey" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} className="space-y-12">
                            {JOURNEY_PHASES.map((phase) => (
                                <div key={phase.name} className="relative">
                                    <h2 className="text-2xl font-serif font-bold text-[var(--sp-gold)] flex items-center gap-3 mb-2">
                                        <BookOpen className="w-5 h-5 opacity-70" />
                                        {phase.name}
                                    </h2>
                                    <p className="text-[var(--sp-text-lo)] mb-8 ml-8">{phase.subtitle}</p>

                                    <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-[var(--sp-border)]">
                                        {phase.chapters.map((chapter) => (
                                            <div key={chapter.id} className="relative flex items-center gap-6 group">
                                                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--sp-bg)] shadow shrink-0 z-10 transition-colors duration-500 ${chapter.unlocked ? 'bg-[var(--sp-gold)] text-[var(--sp-bg)]' : 'bg-[var(--sp-surface)] text-[var(--sp-text-lo)]'}`}>
                                                    {chapter.unlocked ? <span className="font-bold text-sm tracking-tighter">{chapter.id}</span> : <Lock className="w-4 h-4 opacity-50" />}
                                                </div>

                                                {chapter.unlocked ? (
                                                    <Link href={`/student/batch2/sadhana/step/${chapter.id}`} className="flex-1 p-5 rounded-xl border bg-[var(--sp-surface)] border-[var(--sp-border)] group-hover:border-[var(--sp-gold)]/50 group-hover:bg-[#1a1a33] transition-all cursor-pointer">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <span className="text-xs font-bold uppercase tracking-widest text-[var(--sp-gold)]">Step {chapter.id}</span>
                                                            <span className="text-xs font-medium text-[var(--sp-text-lo)] flex items-center gap-1.5"><Clock className="w-3 h-3" /> {chapter.duration}</span>
                                                        </div>
                                                        <h3 className="font-bold text-lg mb-2 text-[var(--sp-text-hi)]">{chapter.title}</h3>
                                                        <p className="text-[var(--sp-text-lo)] text-sm">{chapter.desc}</p>
                                                    </Link>
                                                ) : (
                                                    <div className="flex-1 p-5 rounded-xl border bg-[var(--sp-bg)] border-[var(--sp-border)] opacity-50">
                                                        <div className="flex items-center justify-between mb-2">
                                                            <span className="text-xs font-bold uppercase tracking-widest">Locked</span>
                                                            <span className="text-xs font-medium">{chapter.duration}</span>
                                                        </div>
                                                        <h3 className="font-bold text-lg mb-2">{chapter.title}</h3>
                                                        <p className="text-sm">{chapter.desc}</p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* SKILLS TAB */}
                    {activeTab === 'skills' && (
                        <motion.div key="skills" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} className="min-h-[600px] w-full bg-[var(--sp-surface)] rounded-2xl border border-[var(--sp-border)] overflow-hidden">
                            <SkillsExplorer />
                        </motion.div>
                    )}

                    {/* TOOLS TAB */}
                    {activeTab === 'tools' && (
                        <motion.div key="tools" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {SADHANA_TOOLS.map((tool) => (
                                <Link href={tool.href} key={tool.id}>
                                    <div className="group h-full p-6 rounded-2xl border bg-[var(--sp-surface)] border-[var(--sp-border)] hover:border-[var(--sp-teal)]/50 hover:bg-[#1a1a33] hover:-translate-y-1 transition-all duration-300">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--sp-bg)] text-[var(--sp-teal)] border border-[var(--sp-border)] mb-4 group-hover:scale-110 group-hover:bg-[var(--sp-teal)] group-hover:text-[var(--sp-bg)] transition-all">
                                            <tool.icon className="w-5 h-5" />
                                        </div>
                                        <h3 className="font-bold text-lg text-[var(--sp-text-hi)] mb-2 group-hover:text-[var(--sp-teal)] transition-colors">
                                            {tool.title}
                                        </h3>
                                        <p className="text-sm text-[var(--sp-text-lo)] leading-relaxed">
                                            {tool.desc}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </motion.div>
                    )}

                    {/* PROGRESS TAB */}
                    {activeTab === 'progress' && (
                        <motion.div key="progress" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} className="flex flex-col md:flex-row gap-8">
                            <div className="md:w-1/2 bg-[var(--sp-surface)] rounded-2xl border border-[var(--sp-border)] p-8 flex flex-col items-center justify-center min-h-[400px]">
                                <h3 className="text-xl font-serif text-[var(--sp-gold)] mb-8 self-start w-full border-b border-[var(--sp-border)] pb-4">The Flowering Mind</h3>
                                <LotusVisualizer category="all" scale={1.2} />
                            </div>
                            <div className="md:w-1/2 space-y-4">
                                <div className="bg-[var(--sp-bg)] p-6 rounded-2xl border border-[var(--sp-border)]">
                                    <h4 className="text-[var(--sp-text-hi)] font-bold mb-1">Maturity Score</h4>
                                    <p className="text-3xl text-[var(--sp-teal)] font-serif font-black">{progress.points}</p>
                                </div>
                                <div className="bg-[var(--sp-bg)] p-6 rounded-2xl border border-[var(--sp-border)]">
                                    <h4 className="text-[var(--sp-text-hi)] font-bold mb-1">Archetype Profile</h4>
                                    <p className="text-lg text-[var(--sp-text-lo)]">{progress.archetype || "Unknown"}</p>
                                </div>
                                <div className="bg-[var(--sp-bg)] p-6 rounded-2xl border border-[var(--sp-border)]">
                                    <h4 className="text-[var(--sp-text-hi)] font-bold mb-1">Sankalpa Restarts</h4>
                                    <p className="text-lg text-[var(--sp-text-lo)]">{progress.sankalpaResets}</p>
                                </div>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
}
