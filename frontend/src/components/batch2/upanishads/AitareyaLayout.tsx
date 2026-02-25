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
    Brain,
    Baby,
    Eye,
    Globe,
    User,
    Sun,
    Activity,
    Compass,
    Volume2
} from "lucide-react";
import { AITAREYA_METADATA, AITAREYA_SHLOKAS } from "@/components/batch2/upanishads/data/aitareya-shlokas";
import { useBatch2UI } from "@/components/batch2/context/Batch2UIContext";
import { TranceToggle } from "@/components/batch2/context/TranceToggle";
import { useBatch2Events } from "@/components/batch2/hooks/useBatch2Events";
import SadhanaTimer from "@/components/batch2/shared/SadhanaTimer";
import ExperienceReport from "@/components/batch2/shared/ExperienceReport";
import { AitareyaImmersiveExperience } from "@/components/batch2/upanishads/AitareyaImmersiveExperience";

const chapter1 = AITAREYA_SHLOKAS.filter(d => d.chapter === 1);
const chapter2 = AITAREYA_SHLOKAS.filter(d => d.chapter === 2);
const chapter3 = AITAREYA_SHLOKAS.filter(d => d.chapter === 3);

// ==========================================
// AITAREYA OVERVIEW COMPONENT
// ==========================================
function AitareyaOverview({ lang, setActiveTab }: { lang: "en" | "hi", setActiveTab: (tab: any) => void }) {
    const chapters = [
        {
            title: lang === "en" ? "Phase 1: Creation" : "प्रथम चरण: सृष्टि",
            desc: lang === "en" ? "From the One to the many worlds and guardians." : "एक से अनेक लोकों और रक्षकों तक।",
            icon: Globe,
            color: "from-[var(--sp-gold)] to-[var(--sp-bg)]",
            tab: "chapter1"
        },
        {
            title: lang === "en" ? "Phase 2: Incarnation" : "द्वितीय चरण: अवतार",
            desc: lang === "en" ? "Gods choosing the human body as their masterpiece." : "देवताओं द्वारा मानव शरीर को उत्कृष्ट कृति के रूप में चुनना।",
            icon: User,
            color: "from-[var(--sp-gold)] to-cyan-500",
            tab: "chapter1" // Still part of the same flow
        },
        {
            title: lang === "en" ? "Phase 3: The Cycle" : "तृतीय चरण: चक्र",
            desc: lang === "en" ? "The secret of the three births and the hawk of liberation." : "तीन जन्मों का रहस्य और मुक्ति का बाज।",
            icon: Baby,
            color: "from-[var(--sp-gold)] to-[var(--sp-bg)]",
            tab: "chapter2"
        },
        {
            title: lang === "en" ? "Phase 4: Awakening" : "चतुर्थ चरण: बोध",
            desc: lang === "en" ? "Prajnanam Brahma - Consciousness IS the Absolute." : "प्रज्ञानं ब्रह्म - चेतना ही ब्रह्म है।",
            icon: Brain,
            color: "from-[var(--sp-gold)] to-[var(--sp-bg)]",
            tab: "chapter3"
        }
    ];

    return (
        <div className="space-y-16">
            <div className="text-center max-w-4xl mx-auto space-y-6">
                <h2 className="text-5xl md:text-7xl font-serif font-black text-[var(--sp-text-hi)] italic tracking-tight">
                    {lang === "en" ? "The Masterpiece of Creation" : "सृष्टि की उत्कृष्ट कृति"}
                </h2>
                <p className="text-[var(--sp-text-lo)] leading-relaxed text-xl max-w-2xl mx-auto font-light">
                    {lang === "en"
                        ? "Aitareya maps the descent of consciousness into the human form, revealing that the very observer within you is the architect of the cosmos."
                        : "ऐतरेय मानव रूप में चेतना के अवतरण का मानचित्र बनाता है, यह प्रकट करता है कि आपके भीतर का दृष्टा ही ब्रह्मांड का वास्तुकार है।"}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {chapters.map((c, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => setActiveTab(c.tab)}
                        className="bg-[var(--sp-surface)] border border-[var(--sp-border)] rounded-[2.5rem] p-8 text-center hover:border-[var(--sp-border)] hover:bg-[#1a1a33] transition-all cursor-pointer group"
                    >
                        <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                            <c.icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
                        <p className="text-[var(--sp-text-hi)] text-[10px] leading-relaxed font-black uppercase tracking-widest">{c.desc}</p>
                    </motion.div>
                ))}
            </div>

            <div className="bg-[var(--sp-surface)]/80 border border-[var(--sp-border)] rounded-[3rem] p-12 text-center relative overflow-hidden group backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--sp-gold)]/5 via-transparent to-[var(--sp-bg)]/5" />
                <p className="text-[var(--sp-text-hi)]0/40 text-[10px] font-black uppercase tracking-[0.6em] mb-6">The Realization of Vamadeva</p>
                <div className="space-y-4">
                    <p className="text-4xl md:text-5xl font-serif text-[var(--sp-text-hi)] italic">"I broke from the cage like a hawk!"</p>
                    <p className="text-[var(--sp-text-lo)] text-lg font-light leading-relaxed max-w-3xl mx-auto">
                        {lang === "en"
                            ? "Even while in the womb, Sage Vamadeva realized the divinity in all forms and escaped the cycle of recurrence."
                            : "गर्भ में रहते हुए भी, ऋषि वामदेव ने सभी रूपों में दिव्यता को पहचाना और पुनरावृत्ति के चक्र से मुक्त हो गए।"}
                    </p>
                </div>
            </div>

            <div className="flex justify-center">
                <button
                    onClick={() => setActiveTab("chapter1")}
                    className="group relative px-12 py-5 bg-emerald-600 rounded-full text-white font-black text-lg overflow-hidden shadow-2xl hover:shadow-emerald-500/40 transition-all hover:scale-105 active:scale-95"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--sp-gold)] to-[var(--sp-bg)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative flex items-center gap-3">
                        <Sparkles className="w-6 h-6" />
                        Witness the Creation
                    </span>
                </button>
            </div>
        </div>
    );
}

// ==========================================
// WISDOM STREAM COMPONENT
// ==========================================
function WisdomStream({ data, lang, title, subtitle, initialIndex = 0 }: { data: any[], lang: "en" | "hi", title: string, subtitle: string, initialIndex?: number }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const shloka = data[currentIndex];

    useEffect(() => {
        if (initialIndex !== undefined) setCurrentIndex(initialIndex);
    }, [initialIndex]);

    if (!shloka) return null;

    return (
        <div className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-6xl font-serif font-black text-[var(--sp-text-hi)] tracking-tighter">{title}</h2>
                <div className="flex items-center justify-center gap-6">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent to-[var(--sp-bg)]/30" />
                    <p className="text-[var(--sp-text-lo)] font-black tracking-[0.5em] uppercase text-[10px]">{subtitle}</p>
                    <div className="h-px w-20 bg-gradient-to-l from-transparent to-[var(--sp-bg)]/30" />
                </div>
            </div>

            <motion.div
                key={shloka.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-5xl mx-auto"
            >
                <div className="bg-[var(--sp-surface)] border border-[var(--sp-border)] rounded-[4rem] overflow-hidden shadow-[0_0_120px_rgba(16,185,129,0.1)] backdrop-blur-xl">
                    <div className="p-8 md:p-16 space-y-12">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div className="flex items-center gap-6">
                                <div className="w-24 h-24 rounded-3xl bg-emerald-600 flex items-center justify-center text-5xl font-black text-white shadow-2xl relative">
                                    <div className="absolute inset-0 bg-emerald-400/20 blur-xl animate-pulse" />
                                    <span className="relative">{shloka.id}</span>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-serif font-bold text-white tracking-tight">{shloka.theme || "The Awareness"}</h3>
                                    <p className="text-[var(--sp-text-lo)] text-[10px] font-black uppercase tracking-[0.3em] mt-1">
                                        Ch {shloka.chapter} • Sec {shloka.section} • Verse {shloka.verse}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 bg-[var(--sp-surface)]/50 p-3 rounded-2xl border border-white/5 shadow-inner">
                                <button
                                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                                    disabled={currentIndex === 0}
                                    className="p-3 text-[var(--sp-text-lo)] hover:bg-[#1a1a33] hover:text-white rounded-xl transition-all disabled:opacity-20"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <span className="text-[var(--sp-text-hi)] font-bold text-lg">{currentIndex + 1} / {data.length}</span>
                                <button
                                    onClick={() => setCurrentIndex(prev => Math.min(data.length - 1, prev + 1))}
                                    disabled={currentIndex === data.length - 1}
                                    className="p-3 text-[var(--sp-text-lo)] hover:bg-[#1a1a33] hover:text-white rounded-xl transition-all disabled:opacity-20"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-[var(--sp-surface)]/80 rounded-[3rem] p-12 md:p-16 border border-[var(--sp-border)] shadow-inner group relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-[80px]" />
                            <p className="text-3xl md:text-5xl text-[var(--sp-text-hi)] leading-[1.7] text-center font-serif italic" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                                {shloka.sanskrit}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="p-10 bg-[var(--sp-surface)] rounded-[2.5rem] border border-[var(--sp-border)] h-full relative group">
                                    <Languages className="absolute top-8 right-8 w-6 h-6 text-[var(--sp-text-hi)]0/20 group-hover:text-[var(--sp-text-hi)]0/40 transition-colors" />
                                    <h4 className="text-[var(--sp-text-lo)] text-[10px] font-black uppercase tracking-widest mb-6">Translation</h4>
                                    <p className="text-[var(--sp-text-hi)] text-2xl leading-relaxed italic font-light">
                                        {lang === "en" ? shloka.english : shloka.hindi}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="p-12 bg-gradient-to-br from-[var(--sp-gold)]/30 to-[var(--sp-bg)]/30 rounded-[3rem] border border-[var(--sp-border)] shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
                                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-[100px]" />
                                    <div>
                                        <h4 className="text-[var(--sp-text-hi)] font-black mb-8 flex items-center gap-4 text-xl tracking-tight">
                                            <span className="bg-emerald-500 text-slate-950 w-10 h-10 rounded-2xl flex items-center justify-center text-sm shadow-xl">⚡</span>
                                            {lang === "en" ? "TRANSMISSION" : "संप्रेषण"}
                                        </h4>
                                        <p className="text-[var(--sp-text-hi)] text-2xl md:text-3xl leading-relaxed font-serif italic text-center pb-10 border-b border-[var(--sp-border)]">
                                            {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-10">
                                        <button
                                            onClick={() => (window as any).showSadhanaTimer && (window as any).showSadhanaTimer()}
                                            className="bg-white text-emerald-900 hover:bg-[#1a1a33] font-black p-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-2xl hover:scale-[1.03] active:scale-95"
                                        >
                                            <Flame className="w-6 h-6" /> SADHANA
                                        </button>
                                        <button
                                            onClick={() => (window as any).showExperienceReport && (window as any).showExperienceReport()}
                                            className="bg-[var(--sp-surface)] text-[var(--sp-text-hi)] border border-[var(--sp-border)] hover:bg-slate-800 font-bold p-5 rounded-2xl flex items-center justify-center gap-3 transition-all"
                                        >
                                            <Feather className="w-6 h-6" /> RECORD
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {shloka.wordMeanings && shloka.wordMeanings.length > 0 && (
                            <div className="p-12 bg-[var(--sp-surface)]/40 rounded-[3rem] border border-white/5">
                                <h4 className="text-[var(--sp-gold)] text-[10px] font-black uppercase tracking-widest mb-10 flex items-center gap-2">
                                    <Activity className="w-4 h-4" /> Cosmic Codes
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {shloka.wordMeanings.map((m: any, i: number) => (
                                        <div key={i} className="flex flex-col gap-2 p-6 bg-[var(--sp-surface)]/50 rounded-2xl border border-[var(--sp-border)] hover:border-[var(--sp-border)] transition-all hover:bg-[var(--sp-surface)]">
                                            <span className="text-[var(--sp-text-hi)] font-serif text-2xl">{m.devanagari}</span>
                                            <span className="text-[var(--sp-text-lo)] text-[10px] uppercase font-black tracking-tight">{m.sanskrit}</span>
                                            <span className="text-[var(--sp-text-hi)] text-sm mt-2">{lang === "en" ? m.english : m.hindi}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function AitareyaLayout() {
    const router = useRouter();
    const [lang, setLang] = useState<"en" | "hi">("en");
    const [activeTab, setActiveTab] = useState<string>("overview");
    const [sadhanaActive, setSadhanaActive] = useState(false);
    const [reportActive, setReportActive] = useState(false);
    const { logEvent } = useBatch2Events();
    const { mode, setMode } = useBatch2UI();

    useEffect(() => {
        (window as any).showSadhanaTimer = () => {
            logEvent("upanishad_session_started", { module: "Aitareya Upanishad" });
            setSadhanaActive(true);
        }
        (window as any).showExperienceReport = () => setReportActive(true);
    }, [logEvent]);

    const tabs = [
        { id: "overview", label: lang === "en" ? "Overview" : "परिचय", icon: Info },
        { id: "chapter1", label: lang === "en" ? "Creation" : "सृष्टि", icon: Globe },
        { id: "chapter2", label: lang === "en" ? "Births" : "जन्म", icon: Baby },
        { id: "chapter3", label: lang === "en" ? "Awakening" : "बोध", icon: Brain },
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
                <AitareyaImmersiveExperience lang={lang} onClose={() => setMode('classic')} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[var(--sp-surface)] text-[var(--sp-text-hi)] selection:bg-emerald-500/30">

            <header className="relative h-[65vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#064e3b_0%,#020617_100%)]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -50, 0], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute top-0 left-1/4 w-[45rem] h-[45rem] bg-emerald-500/20 rounded-full blur-[180px]"
                    />
                    <motion.div
                        animate={{ y: [0, 50, 0], opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 20, repeat: Infinity }}
                        className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-teal-600/10 rounded-full blur-[150px]"
                    />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block px-10 py-3 bg-emerald-500/10 text-[var(--sp-text-lo)] rounded-full text-[10px] font-black tracking-[0.7em] uppercase border border-[var(--sp-border)] backdrop-blur-md mb-12">
                            Rig Veda • The Source of Awareness
                        </span>
                        <h1 className="text-7xl md:text-[12rem] font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-[var(--sp-gold)] via-[var(--sp-surface)] to-[var(--sp-bg)] leading-none tracking-tighter mb-8 shadow-2xl">
                            Aitareya
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 text-3xl md:text-4xl font-light text-[var(--sp-text-lo)] font-serif">
                            <span className="italic">"Prajñānam Brahma • Consciousness IS the Absolute."</span>
                        </div>
                    </motion.div>
                </div>
            </header>

            <nav className="sticky top-0 z-50 bg-[var(--sp-surface)]/90 backdrop-blur-3xl border-b border-[var(--sp-border)] px-6 py-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button onClick={() => router.push("/student/batch2/upanishads")} className="p-4 bg-emerald-500/10 text-[var(--sp-text-lo)] hover:bg-[#1a1a33] hover:text-white rounded-3xl transition-all border border-[var(--sp-border)] shadow-xl">
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <div className="hidden sm:block">
                            <h2 className="text-2xl font-black text-white leading-tight font-serif tracking-tight">Aitareya</h2>
                            <p className="text-[var(--sp-gold)]/60 text-[10px] font-black uppercase tracking-widest">{lang === "en" ? "The Observer" : "प्रज्ञा"}</p>
                        </div>
                    </div>

                    <div className="flex bg-[var(--sp-surface)]/80 rounded-[2rem] p-2 border border-white/5 shadow-2xl overflow-x-auto no-scrollbar max-w-[60%] md:max-w-none">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-3 px-8 py-4 rounded-[1.5rem] text-xs font-black transition-all ${activeTab === tab.id ? "bg-emerald-50 text-emerald-900 shadow-2xl scale-105" : "text-[var(--sp-gold)] hover:text-[var(--sp-text-lo)]"}`}
                            >
                                <tab.icon className="w-5 h-5" />
                                <span className="hidden lg:inline uppercase tracking-widest">{tab.label}</span>
                                <span className="lg:hidden">{tab.id === 'overview' ? 'Inf' : tab.label.split(' ')[0]}</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex bg-[var(--sp-surface)]/80 rounded-2xl p-1.5 border border-white/5">
                            {(["en", "hi"] as const).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className={`px-5 py-2 rounded-xl text-[10px] font-black transition-all ${lang === l ? "bg-emerald-500 text-white" : "text-[var(--sp-gold)] hover:text-[var(--sp-text-lo)]"}`}
                                >
                                    {l.toUpperCase()}
                                </button>
                            ))}
                        </div>
                        <TranceToggle />
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-24 md:py-32">
                <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.6 }}>
                        {activeTab === "overview" && <AitareyaOverview lang={lang} setActiveTab={setActiveTab} />}
                        {activeTab === "chapter1" && <WisdomStream data={chapter1} lang={lang} title={lang === "en" ? "The Creation of Worlds" : "लोकों की सृष्टि"} subtitle="Chapter 1: The Divine Map" />}
                        {activeTab === "chapter2" && <WisdomStream data={chapter2} lang={lang} title={lang === "en" ? "The Secrets of Birth" : "जन्म के रहस्य"} subtitle="Chapter 2: The Hawk of Freedom" />}
                        {activeTab === "chapter3" && <WisdomStream data={chapter3} lang={lang} title={lang === "en" ? "The Mahavakya" : "महावाक्य"} subtitle="Chapter 3: Consciousness is Brahman" />}
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="bg-[var(--sp-surface)] py-56 text-center border-t border-[var(--sp-border)] relative overflow-hidden">
                <div className="relative z-10 space-y-16 px-6">
                    <div className="text-9xl md:text-[12rem] font-serif text-[var(--sp-text-hi)]0/10 animate-pulse">प्रज्ञानं ब्रह्म</div>
                    <div className="space-y-6">
                        <p className="text-6xl md:text-8xl font-serif text-[var(--sp-text-hi)] leading-none tracking-tighter">सत्यमेव जयते</p>
                        <p className="text-[var(--sp-text-lo)] italic text-2xl max-w-3xl mx-auto font-light leading-relaxed">
                            {lang === "en" ? "Consciousness is the eye of the world. Consciousness is the foundation." : "प्रज्ञा ही लोक का नेत्र है। प्रज्ञा ही प्रतिष्ठा है।"}
                        </p>
                    </div>
                    <div className="pt-24">
                        <p className="text-[var(--sp-text-hi)]0/40 text-[10px] font-black uppercase tracking-[0.8em]">— Aitareya Upanishad —</p>
                    </div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05)_0%,transparent_70%)]" />
            </footer>

            <AnimatePresence>
                {sadhanaActive && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[var(--sp-bg)]/90 backdrop-blur-2xl" onClick={() => setSadhanaActive(false)} />
                        <motion.div initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }} className="relative z-10 w-full max-w-xl">
                            <SadhanaTimer
                                title="Aitareya: Awareness Scan"
                                duration={300}
                                onComplete={(data) => {
                                    logEvent("upanishad_session_completed", { module: "Aitareya Upanishad", duration: Math.ceil((data?.timeSpent || 300) / 60), data: { upanishadKey: "aitareya" } });
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
                        onSubmit={(data) => setReportActive(false)}
                        title="Aitareya: Consciousness Realization"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
