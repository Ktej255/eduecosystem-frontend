"use client";

import { motion } from "framer-motion";
import { Sparkles, BookOpen, Star, Lock, ArrowRight, Flame, Calculator, Fingerprint, Activity, Hand, Compass, Clock, Shield, Play, Droplets } from "lucide-react";
import Link from "next/link";
import { useSadhanaProgress } from "./hooks/useSadhanaProgress";

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
        id: "mudras",
        title: "Mudra Guide",
        desc: "Interactive 7-mudra reference with finger-element mapping.",
        icon: Hand,
        href: "/student/batch2/sadhana/tools/mudras",
        color: "bg-violet-100 text-violet-700 border-violet-200",
        iconBg: "bg-violet-500",
    },
    {
        id: "dinacharya",
        title: "Dinacharya",
        desc: "Daily routine tracker — 9 steps, 10 Dos, 10 Don'ts.",
        icon: Clock,
        href: "/student/batch2/sadhana/tools/dinacharya",
        color: "bg-cyan-100 text-cyan-700 border-cyan-200",
        iconBg: "bg-cyan-500",
    },
    {
        id: "session",
        title: "Session Timer",
        desc: "Guided ritual timer with phase flow and streak heatmap.",
        icon: Play,
        href: "/student/batch2/sadhana/tools/session",
        color: "bg-amber-100 text-amber-700 border-amber-200",
        iconBg: "bg-amber-500",
    },
    {
        id: "patrasadana",
        title: "Patrasadana",
        desc: "Interactive 5-pot sacred arrangement guide.",
        icon: Droplets,
        href: "/student/batch2/sadhana/tools/patrasadana",
        color: "bg-teal-100 text-teal-700 border-teal-200",
        iconBg: "bg-teal-500",
    },
    {
        id: "sri-suktam",
        title: "Sri Suktam Prep",
        desc: "Daily check-in for Sri Suktam Sadhana.",
        icon: Flame,
        href: "/student/batch2/sadhana/tools/sri-suktam",
        color: "bg-red-100 text-red-700 border-red-200",
        iconBg: "bg-red-500",
    },
    {
        id: "sri-suktam-ritual",
        title: "Sri Suktam Ritual",
        desc: "The high-intensity 16-night ritual guide for cosmic abundance.",
        icon: Star,
        href: "/student/batch2/sadhana/tools/sri-suktam-ritual",
        color: "bg-amber-100 text-amber-700 border-amber-200",
        iconBg: "bg-amber-600",
    },
    {
        id: "sankalpa",
        title: "Sankalpa Vow",
        desc: "Sacred commitment ceremony with atonement flow.",
        icon: Shield,
        href: "/student/batch2/sadhana/sankalpa",
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
                        {JOURNEY_PHASES.map((phase, phaseIdx) => (
                            <div key={phase.name} className="bg-card rounded-2xl p-6 sm:p-8 shadow-sm border border-amber-100">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-serif font-bold text-amber-950 flex items-center gap-3">
                                        <BookOpen className="w-6 h-6 text-amber-600" />
                                        {phase.name}
                                    </h2>
                                    <p className="text-amber-700/80 mt-2">
                                        {phase.subtitle}
                                    </p>
                                </div>

                                <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-amber-200 before:to-transparent">
                                    {phase.chapters.map((chapter, index) => (
                                        <motion.div
                                            key={chapter.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
                                        >
                                            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#FDF8F0] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors ${chapter.unlocked ? 'bg-amber-100 text-amber-600' : 'bg-stone-100 text-stone-400'}`}>
                                                {chapter.unlocked ? (
                                                    <span className="font-bold text-sm">{chapter.id}</span>
                                                ) : (
                                                    <Lock className="w-4 h-4" />
                                                )}
                                            </div>

                                            {chapter.unlocked ? (
                                                <Link href={`/student/batch2/sadhana/step/${chapter.id}`} className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border bg-white border-amber-200 shadow-sm hover:border-amber-400 hover:shadow-md transition-all cursor-pointer block">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Step {chapter.id}</span>
                                                        <span className="text-xs font-medium text-stone-500">{chapter.duration}</span>
                                                    </div>
                                                    <h3 className="font-bold text-lg mb-1 leading-tight text-amber-950">{chapter.title}</h3>
                                                    <p className="text-stone-600 text-sm leading-relaxed">{chapter.desc}</p>
                                                </Link>
                                            ) : (
                                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border bg-stone-50 border-stone-100 opacity-60">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="text-xs font-bold uppercase tracking-wider text-stone-400">Step {chapter.id}</span>
                                                        <span className="text-xs font-medium text-stone-500">{chapter.duration}</span>
                                                    </div>
                                                    <h3 className="font-bold text-lg mb-1 leading-tight text-stone-700">{chapter.title}</h3>
                                                    <p className="text-stone-600 text-sm leading-relaxed">{chapter.desc}</p>
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
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
