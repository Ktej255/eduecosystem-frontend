"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    BookOpen,
    Languages,
    ChevronRight,
    ChevronLeft,
    Sparkles,
    Flame,
    Zap,
    Wind,
    Feather,
    Info,
    ArrowRight,
    Volume2,
    VolumeX,
    Sun,
    Moon,
    Compass,
    Eye,
    Globe
} from "lucide-react";
import { BRIHADARANYAKA_METADATA, BRIHADARANYAKA_SHLOKAS } from "@/components/batch2/upanishads/data/brihadaranyaka-shlokas";
import { useBatch2UI } from "@/components/batch2/context/Batch2UIContext";
import { TranceToggle } from "@/components/batch2/context/TranceToggle";
import { useBatch2Events } from "@/components/batch2/hooks/useBatch2Events";
import SadhanaTimer from "@/components/batch2/shared/SadhanaTimer";
import ExperienceReport from "@/components/batch2/shared/ExperienceReport";
import { BrihadaranyakaImmersiveExperience } from "@/components/batch2/upanishads/BrihadaranyakaImmersiveExperience";

// ==========================================
// BRIHADARANYAKA OVERVIEW COMPONENT
// ==========================================
function BrihadaranyakaOverview({ lang, setActiveTab }: { lang: "en" | "hi", setActiveTab: (tab: any) => void }) {
    const pillars = [
        { title: lang === "en" ? "Asato Ma" : "असतो मा", desc: lang === "en" ? "The Prayer for Truth" : "सत्य की प्रार्थना", emoji: "🙏", color: "from-[var(--sp-gold)] to-[var(--sp-bg)]", id: 1 },
        { title: lang === "en" ? "Aham Brahmasmi" : "अहं ब्रह्मास्मि", desc: lang === "en" ? "The First Mahavakya" : "प्रथम महावाक्य", emoji: "✨", color: "from-yellow-400 to-[var(--sp-bg)]", id: 2 },
        { title: lang === "en" ? "Neti Neti" : "नेति नेति", desc: lang === "en" ? "Not this, Not this" : "यह नहीं, यह नहीं", emoji: "🚫", color: "from-[var(--sp-gold)] to-pink-500", id: 5 },
        { title: lang === "en" ? "Purnamadah" : "पूर्णमदः", desc: lang === "en" ? "Wholeness Remains" : "पूर्णता शेष रहती है", emoji: "♾️", color: "from-[var(--sp-gold)] to-[var(--sp-bg)]", id: 10 },
    ];

    return (
        <div className="space-y-20">
            <div className="text-center max-w-4xl mx-auto space-y-6">
                <span className="text-[var(--sp-text-hi)]0 font-black uppercase tracking-[0.4em] text-[10px]">The Great Forest of Knowledge</span>
                <h2 className="text-5xl md:text-7xl font-serif font-black text-white leading-tight">
                    {lang === "en" ? "The Primordial Whispers of Brahman" : "बृहदारण्यक उपनिषद्: अद्वैत का सागर"}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[var(--sp-gold)] to-[var(--sp-bg)] mx-auto rounded-full" />
                <p className="text-[var(--sp-text-hi)] leading-relaxed text-xl font-light italic">
                    {lang === "en"
                        ? "The largest and oldest of the Mukhya Upanishads. Within its vast forest of dialogues, Sage Yajnavalkya illuminates the path from the unreal to the real, revealing the Self as the inner controller of all things."
                        : "मुख्य उपनिषदों में सबसे बड़ा और सबसे प्राचीन। इसके संवादों के विशाल अरण्य में, ऋषि याज्ञवल्क्य असत्य से सत्य की ओर जाने वाले मार्ग को प्रकाशित करते हैं और आत्मा को सभी वस्तुओं के अंतर्यामी के रूप में प्रकट करते हैं।"}
                </p>
            </div>

            {/* Mahavakya Highlight */}
            <div className="relative group overflow-hidden rounded-[3rem] border border-[var(--sp-border)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--sp-gold)]/20 via-[var(--sp-surface)]0/40 to-slate-950 group-hover:scale-105 transition-transform duration-1000" />
                <div className="relative z-10 p-12 md:p-20 text-center space-y-8">
                    <p className="text-[var(--sp-text-hi)]0/60 text-sm uppercase tracking-[0.5em] font-black">The Grand Mahavakya</p>
                    <motion.h3
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="text-6xl md:text-[10rem] font-serif font-black text-white drop-shadow-[0_0_50px_rgba(249,115,22,0.3)]"
                    >
                        अहं ब्रह्मास्मि
                    </motion.h3>
                    <div className="space-y-4">
                        <p className="text-3xl md:text-4xl text-[var(--sp-text-hi)] italic font-light">
                            {lang === "en" ? "\"I Am Brahman\"" : "\"मैं ही ब्रह्म हूँ\""}
                        </p>
                        <p className="text-xl text-[var(--sp-text-lo)] font-medium uppercase tracking-[0.2em]">
                            {lang === "en" ? "THE FIRST EMANATION" : "प्रथम संकल्प"}
                        </p>
                    </div>
                    <div className="pt-8 flex justify-center">
                        <button
                            onClick={() => setActiveTab('pillars')}
                            className="group relative px-12 py-5 bg-orange-600 rounded-full text-white font-black text-lg overflow-hidden shadow-[0_20px_50px_rgba(249,115,22,0.3)] hover:shadow-orange-500/50 transition-all hover:scale-105 active:scale-95"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--sp-gold)] to-[var(--sp-bg)] opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative flex items-center gap-3 italic">
                                ENTER THE FOREST <ArrowRight className="w-6 h-6" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {pillars.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-[var(--sp-surface)]/50 backdrop-blur-xl border border-[var(--sp-border)] rounded-[2.5rem] p-10 text-center hover:bg-slate-800/80 transition-all cursor-pointer group hover:border-[var(--sp-border)]"
                        onClick={() => setActiveTab('pillars')}
                    >
                        <div className="w-20 h-20 mx-auto bg-[var(--sp-surface)] rounded-2xl flex items-center justify-center text-5xl mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500 border border-[var(--sp-border)]">
                            {p.emoji}
                        </div>
                        <h3 className={`text-2xl font-black bg-gradient-to-r ${p.color} bg-clip-text text-transparent mb-3 uppercase tracking-tight`}>{p.title}</h3>
                        <p className="text-[var(--sp-text-hi)] text-sm leading-relaxed">{p.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// WISDOM STREAM COMPONENT
// ==========================================
function WisdomStream({ data, lang, title, subtitle }: { data: any[], lang: "en" | "hi", title: string, subtitle: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const shloka = data[currentIndex];

    if (!shloka) return null;

    return (
        <div className="space-y-12">
            <div className="text-center space-y-4">
                <span className="text-[var(--sp-text-hi)]0 font-black uppercase tracking-[0.5em] text-[10px]">Sacred Pillars</span>
                <h2 className="text-4xl md:text-6xl font-serif font-black text-white italic">{title}</h2>
                <p className="text-[var(--sp-text-lo)] font-bold tracking-widest uppercase text-xs">{subtitle}</p>
            </div>

            <motion.div
                key={shloka.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-[var(--sp-surface)]/40 backdrop-blur-3xl rounded-[3rem] border border-[var(--sp-border)] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
            >
                <div className="p-8 md:p-16 space-y-12">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-[var(--sp-gold)] to-[var(--sp-bg)] flex items-center justify-center text-3xl font-black text-slate-950 shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                                {shloka.id}
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-white tracking-tight italic">{shloka.theme || "Verse"}</h3>
                                <p className="text-[var(--sp-text-lo)] text-xs font-black uppercase tracking-widest mt-1">Section {shloka.chapter}.{shloka.section}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse" />
                            <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse delay-75" />
                        </div>
                    </div>

                    <div className="bg-[var(--sp-surface)]/40 rounded-[2.5rem] p-12 border border-[var(--sp-border)] shadow-inner group">
                        <p className="text-4xl md:text-6xl text-[var(--sp-text-hi)] text-center leading-[1.6] font-serif transition-colors group-hover:text-white" style={{ fontFamily: "'Noto Sans Devanagari', serif" }}>
                            {shloka.sanskrit}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <div className="bg-[var(--sp-surface)] rounded-3xl p-8 border border-[var(--sp-border)] h-full hover:bg-[var(--sp-surface)] transition-colors">
                                <h4 className="text-[var(--sp-text-lo)] font-black mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em]">
                                    <Languages className="w-4 h-4" />
                                    {lang === "en" ? "DIRECT INSIGHT" : "प्रत्यक्ष दृष्टि"}
                                </h4>
                                <p className="text-[var(--sp-text-hi)] text-2xl leading-relaxed font-light italic">
                                    {lang === "en" ? shloka.english : shloka.hindi}
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[var(--sp-gold)]/10 to-transparent rounded-3xl p-10 border border-[var(--sp-border)] shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                                <Flame className="w-16 h-16 text-[var(--sp-text-lo)]" />
                            </div>
                            <h4 className="text-[var(--sp-text-hi)] font-black mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em]">
                                <div className="p-2 bg-orange-500 rounded-lg"><Sparkles className="w-4 h-4 text-slate-950" /></div>
                                {lang === "en" ? "CONTEMPLATION" : "चिंतन"}
                            </h4>
                            <p className="text-[var(--sp-text-hi)] text-2xl leading-relaxed font-medium relative z-10">
                                {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                            </p>
                        </div>
                    </div>

                    {shloka.wordMeanings && shloka.wordMeanings.length > 0 && (
                        <div className="pt-8">
                            <h4 className="text-[var(--sp-gold)]/60 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3 mb-8">
                                <BookOpen className="w-4 h-4" />
                                {lang === "en" ? "ETERNAL CONCEPTS" : "शाश्वत अवधारणाएँ"}
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {shloka.wordMeanings.map((m: any, i: number) => (
                                    <div key={i} className="bg-[var(--sp-surface)]/30 border border-[var(--sp-border)] rounded-2xl p-6 hover:bg-[var(--sp-surface)]/60 hover:border-[var(--sp-border)] transition-all group">
                                        <p className="text-[var(--sp-text-hi)] font-serif text-2xl mb-1 group-hover:text-[var(--sp-text-lo)] transition-colors">{m.devanagari}</p>
                                        <p className="text-[var(--sp-gold)]/60 text-[10px] uppercase tracking-tighter mb-3 font-black">{m.sanskrit}</p>
                                        <p className="text-[var(--sp-text-lo)] text-sm leading-snug">{lang === "en" ? m.english : m.hindi}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col md:flex-row gap-6">
                        <button
                            onClick={() => (window as any).showSadhanaTimer && (window as any).showSadhanaTimer()}
                            className="flex-1 bg-orange-600 hover:bg-[#1a1a33] rounded-3xl p-8 text-white font-black text-xl flex items-center justify-center gap-4 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_20px_40px_rgba(249,115,22,0.3)]"
                        >
                            <Flame className="w-8 h-8" />
                            ENTER FOREST DHYANA
                        </button>
                        <button
                            onClick={() => (window as any).showExperienceReport && (window as any).showExperienceReport()}
                            className="bg-[var(--sp-surface)]/80 hover:bg-slate-800 border border-[var(--sp-border)] rounded-3xl p-8 text-[var(--sp-text-lo)] font-black text-xl flex items-center justify-center gap-4 transition-all hover:border-[var(--sp-border)]"
                        >
                            <Feather className="w-8 h-8" />
                            LOG REALIZATION
                        </button>
                    </div>
                </div>
            </motion.div>

            <div className="flex items-center justify-center gap-10">
                <button
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="w-20 h-20 flex items-center justify-center bg-[var(--sp-surface)] text-[var(--sp-text-lo)] rounded-full border border-[var(--sp-border)] hover:bg-[#1a1a33] hover:text-white transition-all disabled:opacity-20 shadow-xl"
                >
                    <ChevronLeft className="w-10 h-10" />
                </button>
                <div className="flex bg-[var(--sp-surface)]/80 p-3 rounded-full border border-[var(--sp-border)] gap-3 overflow-x-auto no-scrollbar max-w-[50vw]">
                    {data.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`min-w-[50px] h-[50px] rounded-full text-sm font-black transition-all ${i === currentIndex ? 'bg-orange-500 text-slate-950 shadow-[0_0_20px_rgba(249,115,22,0.4)]' : 'text-[var(--sp-text-hi)]0/40 hover:text-[var(--sp-text-lo)]'}`}
                        >
                            {(i + 1).toString().padStart(2, '0')}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => setCurrentIndex(prev => Math.min(data.length - 1, prev + 1))}
                    disabled={currentIndex === data.length - 1}
                    className="w-20 h-20 flex items-center justify-center bg-[var(--sp-surface)] text-[var(--sp-text-lo)] rounded-full border border-[var(--sp-border)] hover:bg-[#1a1a33] hover:text-white transition-all disabled:opacity-20 shadow-xl"
                >
                    <ChevronRight className="w-10 h-10" />
                </button>
            </div>
        </div>
    );
}

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function BrihadaranyakaLayout() {
    const router = useRouter();
    const [lang, setLang] = useState<"en" | "hi">("en");
    const [activeTab, setActiveTab] = useState<"overview" | "pillars">("overview");
    const [sadhanaActive, setSadhanaActive] = useState(false);
    const [reportActive, setReportActive] = useState(false);
    const { logEvent } = useBatch2Events();
    const { mode, setMode } = useBatch2UI();

    useEffect(() => {
        (window as any).showSadhanaTimer = () => {
            logEvent("upanishad_session_started", { module: "Brihadaranyaka Upanishad" });
            setSadhanaActive(true);
        };
        (window as any).showExperienceReport = () => setReportActive(true);
    }, [logEvent]);

    const tabs = [
        { id: "overview", label: lang === "en" ? "The Forest" : "अरण्य", icon: Info },
        { id: "pillars", label: lang === "en" ? "The Pillars" : "स्तंभ", icon: Sparkles },
    ];

    if (mode === 'immersive') {
        return (
            <div className="relative w-full min-h-screen bg-[var(--sp-bg)]">
                <div className="absolute top-6 right-6 z-[200]">
                    <TranceToggle />
                </div>
                <div className="absolute top-6 left-6 z-[200]">
                    <button
                        onClick={() => router.push("/student/batch2/upanishads")}
                        className="flex items-center gap-2 text-[var(--sp-text-hi)]0/50 hover:text-[var(--sp-text-lo)] transition-colors uppercase tracking-[0.3em] font-black text-[10px]"
                    >
                        <ArrowLeft className="w-4 h-4" /> Exit
                    </button>
                </div>
                <BrihadaranyakaImmersiveExperience lang={lang} onClose={() => setMode('classic')} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#060302] text-white selection:bg-orange-500/30 selection:text-[var(--sp-text-hi)] font-sans overflow-x-hidden">

            {/* Hero Section */}
            <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--sp-gold)]/20 via-slate-950/60 to-[#060302]" />

                {/* Animated Particles/Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                            rotate: [0, -5, 0]
                        }}
                        transition={{ duration: 25, repeat: Infinity }}
                        className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_70%_60%,_rgba(249,115,22,0.15)_0%,transparent_50%)]"
                    />
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="space-y-12"
                    >
                        <div className="inline-flex items-center gap-4 px-8 py-3 bg-orange-500/10 rounded-full border border-[var(--sp-border)] backdrop-blur-3xl">
                            <Sun className="w-5 h-5 text-[var(--sp-text-lo)] animate-pulse" />
                            <span className="text-[var(--sp-text-lo)] text-[10px] font-black tracking-[0.6em] uppercase">
                                Shukla Yajur Veda • Primordial Wisdom
                            </span>
                        </div>

                        <div className="relative inline-block">
                            <h1 className="text-7xl md:text-[12rem] font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-[var(--sp-gold)] via-[var(--sp-surface)] to-[var(--sp-bg)] leading-[0.85] tracking-tighter">
                                {lang === "en" ? "Bṛhadāraṇyaka" : "बृहदारण्यक"}
                            </h1>
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-500/20 blur-[60px] rounded-full animate-pulse" />
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-10">
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-[var(--sp-text-hi)]0/40 text-[10px] font-black uppercase tracking-[0.3em]">Master</span>
                                <span className="text-2xl font-serif italic text-[var(--sp-text-hi)]">Yājñavalkya</span>
                            </div>
                            <div className="w-px h-12 bg-orange-500/20 hidden md:block" />
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-[var(--sp-text-hi)]0/40 text-[10px] font-black uppercase tracking-[0.3em]">Teaching</span>
                                <span className="text-2xl font-serif italic text-[var(--sp-text-hi)]">Aham Brahmāsmi</span>
                            </div>
                            <div className="w-px h-12 bg-orange-500/20 hidden md:block" />
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-[var(--sp-text-hi)]0/40 text-[10px] font-black uppercase tracking-[0.3em]">Scholar</span>
                                <span className="text-2xl font-serif italic text-[var(--sp-text-hi)]">Gārgī Vācaknavī</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                    <ArrowDownIcon className="w-6 h-6 text-[var(--sp-text-hi)]0" />
                </div>
            </header>

            {/* Sticky Navigation */}
            <nav className="sticky top-0 z-50 bg-[#060302]/80 backdrop-blur-3xl border-b border-[var(--sp-border)] px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => router.push("/student/batch2/upanishads")}
                            className="p-3 text-[var(--sp-text-hi)]0 hover:bg-[#1a1a33] rounded-2xl transition-all border border-[var(--sp-border)] group overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-orange-500 translate-y-12 group-hover:translate-y-0 transition-transform duration-300" />
                            <ArrowLeft className="w-5 h-5 relative z-10 group-hover:text-slate-950" />
                        </button>
                        <div className="hidden lg:block">
                            <h2 className="text-xl font-black text-white leading-tight italic uppercase tracking-tighter">Bṛhadāraṇyaka</h2>
                            <p className="text-[var(--sp-gold)] font-black text-[9px] uppercase tracking-[0.4em]">The Great Forest Upanishad</p>
                        </div>
                    </div>

                    <div className="flex bg-[var(--sp-surface)]/60 rounded-[1.5rem] p-2 border border-white/5 shadow-2xl">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-3 px-8 py-3 rounded-xl text-xs font-black transition-all ${activeTab === tab.id ? "bg-orange-600 shadow-[0_10px_20px_rgba(249,115,22,0.3)] text-white" : "text-[var(--sp-gold)] hover:text-[var(--sp-text-lo)]"}`}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span className="uppercase tracking-widest">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex bg-[var(--sp-surface)]/40 rounded-xl p-1.5 border border-white/5">
                            {(["en", "hi"] as const).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className={`px-5 py-2 rounded-lg text-xs font-black transition-all ${lang === l ? "bg-orange-600 text-white shadow-lg" : "text-[var(--sp-gold)] hover:text-[var(--sp-text-lo)]"}`}
                                >
                                    {l.toUpperCase()}
                                </button>
                            ))}
                        </div>
                        <div className="p-1 bg-[var(--sp-surface)]/80 rounded-2xl border border-white/10">
                            <TranceToggle />
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-32 md:py-48">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.6, ease: "anticipate" }}
                    >
                        {activeTab === "overview" && <BrihadaranyakaOverview lang={lang} setActiveTab={setActiveTab} />}
                        {activeTab === "pillars" && <WisdomStream data={BRIHADARANYAKA_SHLOKAS} lang={lang} title={lang === "en" ? "Universal Injunctions" : "वैश्विक आदेश"} subtitle="The Infinite Instruction of the Self" />}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Premium Footer */}
            <footer className="group relative bg-[#060302] py-48 text-center border-t border-[var(--sp-border)] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.05)_0%,transparent_70%)] animate-pulse" />
                <div className="relative z-10 space-y-12 max-w-4xl mx-auto px-6">
                    <div className="flex justify-center mb-4">
                        <Globe className="w-16 h-16 text-[var(--sp-gold)]/30 group-hover:text-[var(--sp-text-hi)]0 transition-colors duration-1000" />
                    </div>
                    <motion.p
                        whileHover={{ scale: 1.05 }}
                        className="text-5xl md:text-8xl font-serif text-[var(--sp-text-hi)] leading-tight transition-all group-hover:text-white group-hover:drop-shadow-[0_0_50px_rgba(249,115,22,0.3)]"
                    >
                        ॐ पूर्णमदः पूर्णमिदम्
                    </motion.p>
                    <p className="text-[var(--sp-text-lo)] italic text-2xl font-light max-w-3xl mx-auto leading-relaxed">
                        {lang === "en" ? "\"That is Whole, This is Whole. From Wholeness comes Wholeness.\"" : "\"वह पूर्ण है, यह पूर्ण है। पूर्ण में से पूर्ण प्रकट होता है।\""}
                    </p>
                    <div className="pt-10">
                        <span className="px-6 py-2 bg-[var(--sp-surface)] rounded-full border border-[var(--sp-border)] text-[var(--sp-text-hi)]0/40 text-[10px] font-black uppercase tracking-[0.5em] transition-all group-hover:border-[var(--sp-border)] group-hover:text-[var(--sp-text-hi)]0">
                            Bṛhadāraṇyaka Upaniṣad 5.1.1
                        </span>
                    </div>
                </div>
            </footer>

            {/* Sadhana Modals */}
            <AnimatePresence>
                {sadhanaActive && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[var(--sp-bg)]/80 backdrop-blur-2xl" onClick={() => setSadhanaActive(false)} />
                        <motion.div initial={{ scale: 0.9, y: 50, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 50, opacity: 0 }} className="relative z-10 w-full max-w-xl">
                            <SadhanaTimer
                                title="Brihadaranyaka: Forest Dhyana"
                                duration={600}
                                onComplete={(data) => {
                                    logEvent("upanishad_session_completed", { module: "Brihadaranyaka Upanishad", duration: Math.ceil((data?.timeSpent || 600) / 60), data: { upanishadKey: "brihadaranyaka" } });
                                    setSadhanaActive(false);
                                    setReportActive(true);
                                }}
                            />
                        </motion.div>
                    </div>
                )}

                {reportActive && (
                    <ExperienceReport
                        isOpen={reportActive}
                        onClose={() => setReportActive(false)}
                        onSubmit={(data) => {
                            logEvent("upanishad_report_submitted", { module: "Brihadaranyaka Upanishad" });
                            setReportActive(false);
                        }}
                        title="Brihadaranyaka: Realization Log"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}

function ArrowDownIcon({ className }: { className?: string }) {
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
    );
}
