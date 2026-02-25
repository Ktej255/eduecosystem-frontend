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
    Droplets,
    TreeDeciduous,
    Compass
} from "lucide-react";
import { CHANDOGYA_METADATA, CHANDOGYA_SHLOKAS } from "@/components/batch2/upanishads/data/chandogya-shlokas";
import { useBatch2UI } from "@/components/batch2/context/Batch2UIContext";
import { TranceToggle } from "@/components/batch2/context/TranceToggle";
import { useBatch2Events } from "@/components/batch2/hooks/useBatch2Events";
import SadhanaTimer from "@/components/batch2/shared/SadhanaTimer";
import ExperienceReport from "@/components/batch2/shared/ExperienceReport";
import { ChandogyaImmersiveExperience } from "@/components/batch2/upanishads/ChandogyaImmersiveExperience";

// ==========================================
// CHANDOGYA OVERVIEW COMPONENT
// ==========================================
function ChandogyaOverview({ lang, setActiveTab }: { lang: "en" | "hi", setActiveTab: (tab: any) => void }) {
    const analogies = [
        { title: lang === "en" ? "Clay Analogy" : "मिट्टी उपमा", desc: lang === "en" ? "All pots are just clay" : "सब घड़े केवल मिट्टी हैं", emoji: "🏺", color: "from-teal-400 to-emerald-500", id: 2 },
        { title: lang === "en" ? "Banyan Seed" : "बरगद बीज", desc: lang === "en" ? "Invisible essence creates huge tree" : "अदृश्य सार से विशाल वृक्ष", emoji: "🌳", color: "from-emerald-400 to-green-500", id: 7 },
        { title: lang === "en" ? "Salt Water" : "नमक पानी", desc: lang === "en" ? "Brahman pervades everything" : "ब्रह्म सब में व्याप्त है", emoji: "🧂", color: "from-cyan-400 to-blue-500", id: 9 },
        { title: lang === "en" ? "Blindfolded Man" : "आंखों पर पट्टी", desc: lang === "en" ? "You need a Guru" : "तुम्हें गुरु चाहिए", emoji: "🧭", color: "from-blue-400 to-indigo-500", id: 11 },
    ];

    return (
        <div className="space-y-20">
            <div className="text-center max-w-4xl mx-auto space-y-6">
                <span className="text-teal-500 font-black uppercase tracking-[0.4em] text-[10px]">Pillars of Oneness</span>
                <h2 className="text-5xl md:text-7xl font-serif font-black text-white leading-tight">
                    {lang === "en" ? "The Song of Everlasting Being" : "छांदोग्योपनिषद्: सत्ता का गान"}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full" />
                <p className="text-teal-100/60 leading-relaxed text-xl font-light italic">
                    {lang === "en"
                        ? "Deep within the Sama Veda, Sage Uddalaka Aruni reveals to his son Shvetaketu the ultimate secret of existence: That the subtle essence of the universe is identical to one's own Self."
                        : "सामवेद के गहन ज्ञान में, ऋषि उद्दालक आरुणि अपने पुत्र श्वेतकेतु को अस्तित्व का परम रहस्य बताते हैं: कि ब्रह्मांड का सूक्ष्म सार मनुष्य के अपने आत्म-स्वरूप के समान है।"}
                </p>
            </div>

            {/* Mahavakya Highlight */}
            <div className="relative group overflow-hidden rounded-[3rem] border border-teal-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-cyan-950/40 to-slate-950 group-hover:scale-105 transition-transform duration-1000" />
                <div className="relative z-10 p-12 md:p-20 text-center space-y-8">
                    <p className="text-teal-500/60 text-sm uppercase tracking-[0.5em] font-black">The Ultimate Declaration</p>
                    <motion.h3
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="text-6xl md:text-[10rem] font-serif font-black text-white drop-shadow-[0_0_50px_rgba(20,184,166,0.3)]"
                    >
                        तत् त्वम् असि
                    </motion.h3>
                    <div className="space-y-4">
                        <p className="text-3xl md:text-4xl text-teal-100 italic font-light">
                            {lang === "en" ? "\"That Thou Art\"" : "\"वह तुम हो\""}
                        </p>
                        <p className="text-xl text-teal-400/60 font-medium uppercase tracking-[0.2em]">
                            {lang === "en" ? "YOU ARE BRAHMAN" : "तुम ही सत्य हो"}
                        </p>
                    </div>
                    <div className="pt-8 flex justify-center">
                        <button
                            onClick={() => setActiveTab('verses')}
                            className="group relative px-12 py-5 bg-teal-500 rounded-full text-slate-950 font-black text-lg overflow-hidden shadow-[0_20px_50px_rgba(20,184,166,0.3)] hover:shadow-teal-400/50 transition-all hover:scale-105 active:scale-95"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative flex items-center gap-3 italic">
                                STUDY THE ANALOGIES <ArrowRight className="w-6 h-6" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {analogies.map((a, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-900/50 backdrop-blur-xl border border-teal-500/20 rounded-[2.5rem] p-10 text-center hover:bg-slate-800/80 transition-all cursor-pointer group hover:border-teal-500/50"
                        onClick={() => setActiveTab('verses')}
                    >
                        <div className="w-20 h-20 mx-auto bg-slate-950 rounded-2xl flex items-center justify-center text-5xl mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500 border border-teal-500/10">
                            {a.emoji}
                        </div>
                        <h3 className={`text-2xl font-black bg-gradient-to-r ${a.color} bg-clip-text text-transparent mb-3 uppercase tracking-tight`}>{a.title}</h3>
                        <p className="text-teal-100/40 text-sm leading-relaxed">{a.desc}</p>
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
                <span className="text-teal-500 font-black uppercase tracking-[0.5em] text-[10px]">Wisdom Stream</span>
                <h2 className="text-4xl md:text-6xl font-serif font-black text-white italic">{title}</h2>
                <p className="text-teal-400/60 font-bold tracking-widest uppercase text-xs">{subtitle}</p>
            </div>

            <motion.div
                key={shloka.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-slate-950/40 backdrop-blur-3xl rounded-[3rem] border border-teal-500/30 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)]"
            >
                <div className="p-8 md:p-16 space-y-12">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-3xl font-black text-slate-950 shadow-[0_0_30px_rgba(20,184,166,0.4)]">
                                {shloka.id}
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-white tracking-tight italic">{shloka.theme || "Verse"}</h3>
                                <p className="text-teal-400/60 text-xs font-black uppercase tracking-widest mt-1">Sadvidya • Ch {shloka.chapter}, Sec {shloka.section}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse" />
                            <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse delay-75" />
                        </div>
                    </div>

                    <div className="bg-slate-900/40 rounded-[2.5rem] p-12 border border-teal-500/10 shadow-inner group">
                        <p className="text-4xl md:text-6xl text-teal-50 text-center leading-[1.6] font-serif transition-colors group-hover:text-white" style={{ fontFamily: "'Noto Sans Devanagari', serif" }}>
                            {shloka.sanskrit}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="space-y-4">
                            <div className="bg-teal-950/20 rounded-3xl p-8 border border-teal-500/10 h-full hover:bg-teal-950/40 transition-colors">
                                <h4 className="text-teal-400 font-black mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em]">
                                    <Languages className="w-4 h-4" />
                                    {lang === "en" ? "TRANSLATION" : "अनुवाद"}
                                </h4>
                                <p className="text-teal-50 text-2xl leading-relaxed font-light italic">
                                    {lang === "en" ? shloka.english : shloka.hindi}
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-teal-500/10 to-transparent rounded-3xl p-10 border border-teal-400/20 shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
                                <Sparkles className="w-16 h-16 text-teal-400" />
                            </div>
                            <h4 className="text-teal-200 font-black mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em]">
                                <div className="p-2 bg-teal-500 rounded-lg"><Sparkles className="w-4 h-4 text-slate-950" /></div>
                                {lang === "en" ? "ESSENCE" : "सार"}
                            </h4>
                            <p className="text-teal-100 text-2xl leading-relaxed font-medium relative z-10">
                                {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                            </p>
                        </div>
                    </div>

                    {shloka.wordMeanings && shloka.wordMeanings.length > 0 && (
                        <div className="pt-8">
                            <h4 className="text-teal-600/60 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3 mb-8">
                                <BookOpen className="w-4 h-4" />
                                {lang === "en" ? "ETERNAL CONCEPTS" : "शाश्वत अवधारणाएँ"}
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {shloka.wordMeanings.map((m: any, i: number) => (
                                    <div key={i} className="bg-slate-900/30 border border-teal-500/5 rounded-2xl p-6 hover:bg-slate-900/60 hover:border-teal-500/30 transition-all group">
                                        <p className="text-teal-100 font-serif text-2xl mb-1 group-hover:text-teal-400 transition-colors">{m.devanagari}</p>
                                        <p className="text-teal-600/60 text-[10px] uppercase tracking-tighter mb-3 font-black">{m.sanskrit}</p>
                                        <p className="text-slate-400 text-sm leading-snug">{lang === "en" ? m.english : m.hindi}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="flex flex-col md:flex-row gap-6">
                        <button
                            onClick={() => (window as any).showSadhanaTimer && (window as any).showSadhanaTimer()}
                            className="flex-1 bg-teal-600 hover:bg-teal-500 rounded-3xl p-8 text-slate-950 font-black text-xl flex items-center justify-center gap-4 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_20px_40px_rgba(20,184,166,0.3)]"
                        >
                            <Droplets className="w-8 h-8" />
                            DISSOLVE INTO BEING
                        </button>
                        <button
                            onClick={() => (window as any).showExperienceReport && (window as any).showExperienceReport()}
                            className="bg-slate-900/80 hover:bg-slate-800 border border-teal-500/20 rounded-3xl p-8 text-teal-400 font-black text-xl flex items-center justify-center gap-4 transition-all hover:border-teal-500/50"
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
                    className="w-20 h-20 flex items-center justify-center bg-slate-900 text-teal-400 rounded-full border border-teal-500/30 hover:bg-teal-500 hover:text-slate-950 transition-all disabled:opacity-20 shadow-xl"
                >
                    <ChevronLeft className="w-10 h-10" />
                </button>
                <div className="flex bg-slate-900/80 p-3 rounded-full border border-teal-500/20 gap-3 overflow-x-auto no-scrollbar max-w-[50vw]">
                    {data.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`min-w-[50px] h-[50px] rounded-full text-sm font-black transition-all ${i === currentIndex ? 'bg-teal-500 text-slate-950 shadow-[0_0_20px_rgba(20,184,166,0.4)]' : 'text-teal-500/40 hover:text-teal-400'}`}
                        >
                            {(i + 1).toString().padStart(2, '0')}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => setCurrentIndex(prev => Math.min(data.length - 1, prev + 1))}
                    disabled={currentIndex === data.length - 1}
                    className="w-20 h-20 flex items-center justify-center bg-slate-900 text-teal-400 rounded-full border border-teal-500/30 hover:bg-teal-500 hover:text-slate-950 transition-all disabled:opacity-20 shadow-xl"
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
export default function ChandogyaLayout() {
    const router = useRouter();
    const [lang, setLang] = useState<"en" | "hi">("en");
    const [activeTab, setActiveTab] = useState<"overview" | "verses">("overview");
    const [sadhanaActive, setSadhanaActive] = useState(false);
    const [reportActive, setReportActive] = useState(false);
    const { logEvent } = useBatch2Events();
    const { mode } = useBatch2UI();

    useEffect(() => {
        (window as any).showSadhanaTimer = () => {
            logEvent("upanishad_session_started", { module: "Chandogya Upanishad" });
            setSadhanaActive(true);
        };
        (window as any).showExperienceReport = () => setReportActive(true);
    }, [logEvent]);

    const tabs = [
        { id: "overview", label: lang === "en" ? "Source" : "स्रोत", icon: Info },
        { id: "verses", label: lang === "en" ? "Analogy" : "उपमा", icon: Droplets },
    ];

    if (mode === 'immersive') {
        return (
            <div className="relative w-full min-h-screen bg-black">
                <div className="absolute top-6 right-6 z-[200]">
                    <TranceToggle />
                </div>
                <div className="absolute top-6 left-6 z-[200]">
                    <button
                        onClick={() => router.push("/student/batch2/upanishads")}
                        className="flex items-center gap-2 text-amber-500/50 hover:text-amber-400 transition-colors uppercase tracking-[0.3em] font-black text-[10px]"
                    >
                        <ArrowLeft className="w-4 h-4" /> Exit
                    </button>
                </div>
                <ChandogyaImmersiveExperience lang={lang} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#020606] text-white selection:bg-teal-500/30 selection:text-teal-200 font-sans overflow-x-hidden">

            {/* Hero Section */}
            <header className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-teal-950/20 via-slate-950/60 to-[#020606]" />

                {/* Animated Particles/Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1],
                            rotate: [0, 5, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity }}
                        className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_30%_40%,_rgba(20,184,166,0.15)_0%,transparent_50%)]"
                    />
                    <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="space-y-12"
                    >
                        <div className="inline-flex items-center gap-4 px-8 py-3 bg-teal-500/10 rounded-full border border-teal-500/20 backdrop-blur-3xl">
                            <Compass className="w-5 h-5 text-teal-400 animate-spin-slow" />
                            <span className="text-teal-400 text-[10px] font-black tracking-[0.6em] uppercase">
                                Sama Veda • Divine Resonance
                            </span>
                        </div>

                        <div className="relative inline-block">
                            <h1 className="text-8xl md:text-[15rem] font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-teal-50 via-teal-400 to-teal-900 leading-[0.85] tracking-tighter">
                                {lang === "en" ? "Chāndogya" : "छान्दोग्य"}
                            </h1>
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/20 blur-[60px] rounded-full animate-pulse" />
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 pt-10">
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-teal-500/40 text-[10px] font-black uppercase tracking-[0.3em]">Guru</span>
                                <span className="text-2xl font-serif italic text-teal-100">Uddālaka Āruṇi</span>
                            </div>
                            <div className="w-px h-12 bg-teal-500/20 hidden md:block" />
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-teal-500/40 text-[10px] font-black uppercase tracking-[0.3em]">Teaching</span>
                                <span className="text-2xl font-serif italic text-teal-100">Tat Tvam Asi</span>
                            </div>
                            <div className="w-px h-12 bg-teal-500/20 hidden md:block" />
                            <div className="flex flex-col items-center gap-2">
                                <span className="text-teal-500/40 text-[10px] font-black uppercase tracking-[0.3em]">Student</span>
                                <span className="text-2xl font-serif italic text-teal-100">Śvetaketu</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                    <ArrowDownIcon className="w-6 h-6 text-teal-500" />
                </div>
            </header>

            {/* Sticky Navigation */}
            <nav className="sticky top-0 z-50 bg-[#020606]/80 backdrop-blur-3xl border-b border-teal-500/10 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button
                            onClick={() => router.push("/student/batch2/upanishads")}
                            className="p-3 text-teal-500 hover:bg-teal-500/10 rounded-2xl transition-all border border-teal-500/20 group overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-teal-500 translate-y-12 group-hover:translate-y-0 transition-transform duration-300" />
                            <ArrowLeft className="w-5 h-5 relative z-10 group-hover:text-slate-950" />
                        </button>
                        <div className="hidden lg:block">
                            <h2 className="text-xl font-black text-white leading-tight italic">CHANDOGYA</h2>
                            <p className="text-teal-600 font-black text-[9px] uppercase tracking-[0.4em]">Ancient Song of Being</p>
                        </div>
                    </div>

                    <div className="flex bg-slate-900/60 rounded-[1.5rem] p-2 border border-white/5 shadow-2xl">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-3 px-8 py-3 rounded-xl text-xs font-black transition-all ${activeTab === tab.id ? "bg-teal-500 shadow-[0_10px_20px_rgba(20,184,166,0.3)] text-slate-950" : "text-teal-600 hover:text-teal-400"}`}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span className="uppercase tracking-widest">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex bg-slate-900/40 rounded-xl p-1.5 border border-white/5">
                            {(["en", "hi"] as const).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className={`px-5 py-2 rounded-lg text-xs font-black transition-all ${lang === l ? "bg-teal-500 text-slate-950 shadow-lg" : "text-teal-600 hover:text-teal-400"}`}
                                >
                                    {l.toUpperCase()}
                                </button>
                            ))}
                        </div>
                        <div className="p-1 bg-slate-900/80 rounded-2xl border border-white/10">
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
                        {activeTab === "overview" && <ChandogyaOverview lang={lang} setActiveTab={setActiveTab} />}
                        {activeTab === "verses" && <WisdomStream data={CHANDOGYA_SHLOKAS} lang={lang} title={lang === "en" ? "Universal Truths" : "वैश्विक सत्य"} subtitle="The Infinite Instruction of Sat" />}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Premium Footer */}
            <footer className="group relative bg-[#020606] py-48 text-center border-t border-teal-500/10 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.05)_0%,transparent_70%)] animate-pulse" />
                <div className="relative z-10 space-y-12 max-w-4xl mx-auto px-6">
                    <div className="flex justify-center mb-4">
                        <Infinity className="w-16 h-16 text-teal-800/30 group-hover:text-teal-500 transition-colors duration-1000" />
                    </div>
                    <motion.p
                        whileHover={{ scale: 1.05 }}
                        className="text-5xl md:text-8xl font-serif text-teal-50 leading-tight transition-all group-hover:text-white group-hover:drop-shadow-[0_0_50px_rgba(20,184,166,0.3)]"
                    >
                        सदेव सोम्येदमग्र आसीत्
                    </motion.p>
                    <p className="text-teal-400/60 italic text-2xl font-light max-w-3xl mx-auto leading-relaxed">
                        {lang === "en" ? "\"In the beginning, my dear, this was Being alone—One only, without a second.\"" : "\"सौम्य! सृष्टि से पहले यह केवल 'सत्' ही था—एकमेव अद्वितीय।\""}
                    </p>
                    <div className="pt-10">
                        <span className="px-6 py-2 bg-teal-950/40 rounded-full border border-teal-500/10 text-teal-500/40 text-[10px] font-black uppercase tracking-[0.5em] transition-all group-hover:border-teal-500/30 group-hover:text-teal-500">
                            Chāndogya Upaniṣad 6.2.1
                        </span>
                    </div>
                </div>
            </footer>

            {/* Sadhana Modals */}
            <AnimatePresence>
                {sadhanaActive && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/80 backdrop-blur-2xl" onClick={() => setSadhanaActive(false)} />
                        <motion.div initial={{ scale: 0.9, y: 50, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 50, opacity: 0 }} className="relative z-10 w-full max-w-xl">
                            <SadhanaTimer
                                title="Chandogya: Sadvidya Dhyana"
                                duration={600}
                                onComplete={(data) => {
                                    logEvent("upanishad_session_completed", { module: "Chandogya Upanishad", duration: Math.ceil((data?.timeSpent || 600) / 60), data: { upanishadKey: "chandogya" } });
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
                            logEvent("upanishad_report_submitted", { module: "Chandogya Upanishad" });
                            setReportActive(false);
                        }}
                        title="Chandogya: Realization Log"
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
