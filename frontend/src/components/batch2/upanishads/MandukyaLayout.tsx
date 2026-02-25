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
    Eye,
    Moon,
    Sun,
    Cloud,
    Activity,
    Compass,
    Volume2
} from "lucide-react";
import { MANDUKYA_METADATA, MANDUKYA_SHLOKAS } from "@/components/batch2/upanishads/data/mandukya-shlokas";
import { useBatch2UI } from "@/components/batch2/context/Batch2UIContext";
import { TranceToggle } from "@/components/batch2/context/TranceToggle";
import { useBatch2Events } from "@/components/batch2/hooks/useBatch2Events";
import SadhanaTimer from "@/components/batch2/shared/SadhanaTimer";
import ExperienceReport from "@/components/batch2/shared/ExperienceReport";
import { MandukyaImmersiveExperience } from "@/components/batch2/upanishads/MandukyaImmersiveExperience";

// ==========================================
// MANDUKYA OVERVIEW COMPONENT
// ==========================================
function MandukyaOverview({ lang, setActiveTab }: { lang: "en" | "hi", setActiveTab: (tab: any) => void }) {
    const states = [
        {
            name: lang === "en" ? "Waking (A)" : "जाग्रत (अ)",
            sound: "A",
            desc: lang === "en" ? "Vaishvanara - External consciousness. The physical world." : "वैश्वानर - बाह्य चेतना। भौतिक संसार।",
            icon: Sun,
            color: "from-amber-400 to-orange-500",
            tab: "v3"
        },
        {
            name: lang === "en" ? "Dreaming (U)" : "स्वप्न (उ)",
            sound: "U",
            desc: lang === "en" ? "Taijasa - Internal consciousness. The mental world." : "तैजस - आंतरिक चेतना। मानसिक संसार।",
            icon: Cloud,
            color: "from-violet-400 to-indigo-500",
            tab: "v4"
        },
        {
            name: lang === "en" ? "Deep Sleep (M)" : "सुषुप्ति (म)",
            sound: "M",
            desc: lang === "en" ? "Prajna - Blissful unconsciousness. The causal world." : "प्राज्ञ - आनंदमय अचेतना। कारण संसार।",
            icon: Moon,
            color: "from-blue-400 to-cyan-500",
            tab: "v5"
        },
        {
            name: lang === "en" ? "Turiya (Silence)" : "तुरीय (मौन)",
            sound: "Silence",
            desc: lang === "en" ? "The Fourth - Pure awareness beyond all states." : "तुरीय - शुद्ध चेतना, सभी अवस्थाओं से परे।",
            icon: Sparkles,
            color: "from-teal-400 to-emerald-500",
            tab: "v7"
        }
    ];

    return (
        <div className="space-y-16">
            <div className="text-center max-w-4xl mx-auto space-y-6">
                <h2 className="text-5xl md:text-7xl font-serif font-bold text-indigo-100 italic tracking-tighter">
                    {lang === "en" ? "The Shortest Bridge to Infinity" : "अनंतता का लघुतम सेतु"}
                </h2>
                <p className="text-indigo-400/70 leading-relaxed text-xl font-light max-w-2xl mx-auto">
                    {lang === "en"
                        ? "12 Verses. That is all it takes to decode the entire spectrum of human consciousness. Mandukya maps the journey from the noise of waking life to the silence of the Self."
                        : "१२ श्लोक। मानव चेतना के पूरे स्पेक्ट्रम को डिकोड करने के लिए बस इतना ही काफी है। माण्डूक्य जाग्रत जीवन के शोर से आत्मा के मौन तक की यात्रा का मानचित्र बनाता है।"}
                </p>
                <div className="flex justify-center pt-8">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/40 transition-all duration-500 animate-pulse" />
                        <div className="relative text-9xl font-serif text-indigo-200 drop-shadow-[0_0_50px_rgba(129,140,248,0.5)]">ॐ</div>
                    </div>
                </div>
            </div>

            <div className="bg-slate-900/50 rounded-[3rem] p-12 border border-indigo-500/20 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-30" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {states.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => setActiveTab(s.tab)}
                            className="group cursor-pointer space-y-4 text-center p-6 rounded-3xl hover:bg-indigo-500/5 transition-all border border-transparent hover:border-indigo-500/10"
                        >
                            <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                <s.icon className="w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">{s.name}</h3>
                                <p className="text-indigo-300/40 text-[10px] font-black uppercase tracking-[0.2em] mb-3">Vibration: {s.sound}</p>
                                <p className="text-indigo-200/50 text-sm leading-relaxed">{s.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center">
                <button
                    onClick={() => setActiveTab("verses")}
                    className="group relative px-10 py-5 bg-indigo-600 rounded-full text-white font-bold text-lg overflow-hidden shadow-2xl hover:shadow-indigo-500/40 transition-all"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative flex items-center gap-3">
                        <BookOpen className="w-6 h-6" />
                        Enter the 12 Dimensions
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
                <h2 className="text-3xl md:text-5xl font-serif font-black text-indigo-100 tracking-tight">{title}</h2>
                <div className="flex items-center justify-center gap-4">
                    <div className="h-px w-12 bg-indigo-500/30" />
                    <p className="text-indigo-400/60 font-black tracking-[0.3em] uppercase text-[10px]">{subtitle}</p>
                    <div className="h-px w-12 bg-indigo-500/30" />
                </div>
            </div>

            <motion.div
                key={shloka.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-4xl mx-auto"
            >
                <div className="bg-slate-900 border border-indigo-500/30 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(99,102,241,0.1)] backdrop-blur-xl">
                    <div className="p-8 md:p-16 space-y-12">
                        {/* Shloka Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-3xl font-black text-white shadow-xl rotate-3">
                                    {shloka.verse}
                                </div>
                                <div>
                                    <h3 className="text-3xl font-serif font-bold text-white tracking-tight">{shloka.theme || "The Revelation"}</h3>
                                    <p className="text-indigo-400/50 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Sutra Analysis</p>
                                </div>
                            </div>
                            <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                                <span className="text-indigo-400 text-[10px] font-black tracking-widest uppercase">Direct Transmission</span>
                            </div>
                        </div>

                        {/* Sanskrit Core */}
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/5 via-blue-500/5 to-indigo-500/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative bg-slate-950/80 rounded-[2.5rem] p-12 border border-indigo-500/10 shadow-inner text-center">
                                <p className="text-3xl md:text-4xl text-indigo-50 leading-[1.6] font-serif italic" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                                    {shloka.sanskrit}
                                </p>
                            </div>
                        </div>

                        {/* Analysis Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="p-8 bg-indigo-900/10 rounded-3xl border border-indigo-500/10 relative group">
                                    <Languages className="absolute top-6 right-6 w-5 h-5 text-indigo-500/30 group-hover:text-indigo-400 transition-colors" />
                                    <h4 className="text-indigo-400/60 text-[10px] font-black uppercase tracking-widest mb-4">Translation</h4>
                                    <p className="text-indigo-100 text-xl leading-relaxed italic font-light">
                                        {lang === "en" ? shloka.english : shloka.hindi}
                                    </p>
                                </div>

                                {shloka.wordMeanings && shloka.wordMeanings.length > 0 && (
                                    <div className="p-8 bg-slate-950/40 rounded-3xl border border-white/5">
                                        <h4 className="text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                                            <Activity className="w-3 h-3" /> Decoding Seeds
                                        </h4>
                                        <div className="space-y-4">
                                            {shloka.wordMeanings.map((m: any, i: number) => (
                                                <div key={i} className="flex items-center justify-between group/word">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-indigo-100 font-serif text-lg group-hover/word:text-indigo-400 transition-colors">{m.devanagari}</span>
                                                        <span className="h-px w-4 bg-indigo-500/10" />
                                                    </div>
                                                    <span className="text-indigo-400/60 text-sm font-light italic">{lang === "en" ? m.english : m.hindi}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-6">
                                <div className="p-10 bg-gradient-to-br from-indigo-600/20 to-blue-600/20 rounded-[2.5rem] border border-indigo-400/30 shadow-2xl relative overflow-hidden h-full">
                                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />
                                    <h4 className="text-indigo-200 font-black mb-6 flex items-center gap-3 text-lg">
                                        <span className="bg-indigo-500 text-slate-950 w-8 h-8 rounded-xl flex items-center justify-center text-sm shadow-lg">⚡</span>
                                        {lang === "en" ? "DIMENSIONAL SHIFT" : "चेतना का परिवर्तन"}
                                    </h4>
                                    <p className="text-indigo-50 text-2xl leading-relaxed font-serif italic text-center py-4">
                                        {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                                    </p>
                                    <div className="mt-8 pt-8 border-t border-indigo-400/20 flex flex-col gap-4">
                                        <button
                                            onClick={() => (window as any).showSadhanaTimer && (window as any).showSadhanaTimer()}
                                            className="w-full bg-white text-indigo-900 hover:bg-indigo-50 font-black p-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl hover:scale-[1.02] active:scale-95"
                                        >
                                            <Flame className="w-5 h-5" /> START CONTEMPLATION
                                        </button>
                                        <button
                                            onClick={() => (window as any).showExperienceReport && (window as any).showExperienceReport()}
                                            className="w-full bg-indigo-900/40 text-indigo-200 border border-indigo-400/20 hover:bg-slate-800 font-bold p-4 rounded-2xl flex items-center justify-center gap-3 transition-all"
                                        >
                                            <Feather className="w-5 h-5" /> LOG REALIZATION
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Micro Pagination */}
            <div className="max-w-4xl mx-auto flex items-center justify-center gap-8">
                <button
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="w-16 h-16 flex items-center justify-center bg-slate-900 text-indigo-400 rounded-full border border-indigo-500/30 hover:bg-indigo-500 hover:text-white transition-all disabled:opacity-20 shadow-xl"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>

                <div className="flex bg-slate-900/80 p-3 rounded-full border border-indigo-500/20 gap-3 overflow-x-auto no-scrollbar">
                    {data.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-12 h-12 rounded-full text-sm font-black transition-all ${i === currentIndex ? 'bg-indigo-500 text-white shadow-lg scale-110' : 'text-indigo-500/40 hover:text-indigo-400'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => setCurrentIndex(prev => Math.min(data.length - 1, prev + 1))}
                    disabled={currentIndex === data.length - 1}
                    className="w-16 h-16 flex items-center justify-center bg-slate-900 text-indigo-400 rounded-full border border-indigo-500/30 hover:bg-indigo-500 hover:text-white transition-all disabled:opacity-20 shadow-xl"
                >
                    <ChevronRight className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
}

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function MandukyaLayout() {
    const router = useRouter();
    const [lang, setLang] = useState<"en" | "hi">("en");
    const [activeTab, setActiveTab] = useState<string>("overview");
    const [sadhanaActive, setSadhanaActive] = useState(false);
    const [reportActive, setReportActive] = useState(false);
    const { logEvent } = useBatch2Events();
    const { mode } = useBatch2UI();

    useEffect(() => {
        (window as any).showSadhanaTimer = () => {
            logEvent("upanishad_session_started", { module: "Mandukya Upanishad" });
            setSadhanaActive(true);
        };
        (window as any).showExperienceReport = () => setReportActive(true);
    }, [logEvent]);

    const tabs = [
        { id: "overview", label: lang === "en" ? "Gateway" : "द्वार", icon: Eye },
        { id: "v3", label: "A - Waking", icon: Sun },
        { id: "v4", label: "U - Dream", icon: Cloud },
        { id: "v5", label: "M - Sleep", icon: Moon },
        { id: "v7", label: "The 4th", icon: Sparkles },
        { id: "verses", label: lang === "en" ? "12 Dimensions" : "१२ सूत्र", icon: Compass },
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
                        className="flex items-center gap-2 text-indigo-500/50 hover:text-indigo-400 transition-colors uppercase tracking-[0.3em] font-black text-[10px]"
                    >
                        <ArrowLeft className="w-4 h-4" /> Exit
                    </button>
                </div>
                <MandukyaImmersiveExperience lang={lang} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-indigo-50 selection:bg-indigo-500/30">

            <header className="relative h-[65vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e1b4b_0%,#020617_100%)]" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

                {/* Floating Essence Spheres */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -40, 0], scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 12, repeat: Infinity }}
                        className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{ y: [0, 40, 0], scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute -bottom-20 -right-20 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[150px]"
                    />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="inline-block px-8 py-2.5 bg-indigo-500/10 text-indigo-400 rounded-full text-[10px] font-black tracking-[0.6em] uppercase border border-indigo-500/20 backdrop-blur-md mb-12">
                            Atharva Veda • The Science of Sound & Self
                        </span>
                        <h1 className="text-7xl md:text-[11rem] font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-indigo-100 via-indigo-400 to-indigo-900 leading-none tracking-tighter mb-8 shadow-2xl">
                            Mandukya
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 text-2xl md:text-3xl font-light text-indigo-300 animate-pulse">
                            <span className="italic">"{MANDUKYA_METADATA.quote}"</span>
                        </div>
                    </motion.div>
                </div>
            </header>

            <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-3xl border-b border-indigo-900/20 px-6 py-5">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button onClick={() => router.push("/student/batch2/upanishads")} className="p-3 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white rounded-2xl transition-all border border-indigo-500/20">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div className="hidden sm:block">
                            <h2 className="text-xl font-black text-white leading-tight font-serif tracking-tight">Mandukya</h2>
                            <p className="text-indigo-600/60 text-[10px] font-black uppercase tracking-widest">{lang === "en" ? "AUM Analysis" : "ओङ्कार विवेचन"}</p>
                        </div>
                    </div>

                    <div className="flex bg-slate-900/80 rounded-[1.5rem] p-1.5 border border-white/5 shadow-2xl overflow-x-auto no-scrollbar max-w-[60%] md:max-w-none">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-black transition-all ${activeTab === tab.id ? "bg-indigo-50 text-indigo-900 shadow-xl scale-105" : "text-indigo-600 hover:text-indigo-400"}`}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span className="hidden lg:inline uppercase tracking-widest">{tab.label}</span>
                                <span className="lg:hidden">{tab.id === 'overview' ? 'Inf' : tab.label.split(' ')[0]}</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex bg-slate-900/80 rounded-xl p-1 border border-white/5">
                            {(["en", "hi"] as const).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all ${lang === l ? "bg-indigo-500 text-white" : "text-indigo-600 hover:text-indigo-400"}`}
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
                    <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
                        {activeTab === "overview" && <MandukyaOverview lang={lang} setActiveTab={setActiveTab} />}
                        {activeTab === "v3" && <WisdomStream data={MANDUKYA_SHLOKAS} initialIndex={2} lang={lang} title="The First Foot: Waking" subtitle="A - Vaishvanara" />}
                        {activeTab === "v4" && <WisdomStream data={MANDUKYA_SHLOKAS} initialIndex={3} lang={lang} title="The Second Foot: Dreaming" subtitle="U - Taijasa" />}
                        {activeTab === "v5" && <WisdomStream data={MANDUKYA_SHLOKAS} initialIndex={4} lang={lang} title="The Third Foot: Deep Sleep" subtitle="M - Prajna" />}
                        {activeTab === "v7" && <WisdomStream data={MANDUKYA_SHLOKAS} initialIndex={6} lang={lang} title="The Fourth State: Silence" subtitle="Turiya" />}
                        {activeTab === "verses" && <WisdomStream data={MANDUKYA_SHLOKAS} lang={lang} title="The Complete Mandukya" subtitle="All 12 Verses" />}
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="bg-slate-950 py-48 text-center border-t border-indigo-900/20 relative overflow-hidden">
                <div className="relative z-10 space-y-12">
                    <div className="text-8xl md:text-[10rem] font-serif text-indigo-500/20 animate-pulse">ॐ</div>
                    <div className="space-y-4">
                        <p className="text-5xl md:text-7xl font-serif text-indigo-50 leading-tight">शान्तं शिवमद्वैतम्</p>
                        <p className="text-indigo-400/60 italic text-2xl max-w-3xl mx-auto font-light leading-relaxed">
                            {lang === "en" ? "Peaceful, Auspicious, Non-dual. The Fourth state is to be known." : "शांत, कल्याणकारी, अद्वैत। चतुर्थ अवस्था ही जानने योग्य है।"}
                        </p>
                    </div>
                    <p className="text-indigo-500/40 text-[10px] font-black uppercase tracking-[0.5em] mt-20">— Mandukya Upanishad —</p>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.05)_0%,transparent_70%)]" />
            </footer>

            <AnimatePresence>
                {sadhanaActive && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setSadhanaActive(false)} />
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative z-10 w-full max-w-xl">
                            <SadhanaTimer
                                title="Mandukya: Turīya Silence"
                                duration={300}
                                onComplete={(data) => {
                                    logEvent("upanishad_session_completed", { module: "Mandukya Upanishad", duration: Math.ceil((data?.timeSpent || 300) / 60), data: { upanishadKey: "mandukya" } });
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
                        title="Mandukya: Silence Realization"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
