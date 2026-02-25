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
    GraduationCap,
    Layers,
    Heart,
    Eye,
    Star,
    Sun,
    Activity,
    Compass
} from "lucide-react";
import { TAITTIRIYA_METADATA, TAITTIRIYA_SHLOKAS } from "@/components/batch2/upanishads/data/taittiriya-shlokas";
import { useBatch2UI } from "@/components/batch2/context/Batch2UIContext";
import { TranceToggle } from "@/components/batch2/context/TranceToggle";
import { useBatch2Events } from "@/components/batch2/hooks/useBatch2Events";
import SadhanaTimer from "@/components/batch2/shared/SadhanaTimer";
import ExperienceReport from "@/components/batch2/shared/ExperienceReport";
import { TaittiriyaImmersiveExperience } from "@/components/batch2/upanishads/TaittiriyaImmersiveExperience";

// Group by Valli
const shiksha = TAITTIRIYA_SHLOKAS.filter(d => d.valli === 1);
const brahmananda = TAITTIRIYA_SHLOKAS.filter(d => d.valli === 2);
const bhrigu = TAITTIRIYA_SHLOKAS.filter(d => d.valli === 3);

// ==========================================
// TAITTIRIYA OVERVIEW COMPONENT
// ==========================================
function TaittiriyaOverview({ lang, setActiveTab }: { lang: "en" | "hi", setActiveTab: (tab: any) => void }) {
    const koshas = [
        { name: lang === "en" ? "Annamaya" : "अन्नमय", meaning: lang === "en" ? "Food / Physical" : "अन्न / भौतिक", icon: Compass, color: "from-amber-500 to-orange-600", tab: "brahmananda", index: 3 },
        { name: lang === "en" ? "Pranamaya" : "प्राणमय", meaning: lang === "en" ? "Vital / Energy" : "प्राण / ऊर्जा", icon: Wind, color: "from-emerald-400 to-teal-500", tab: "brahmananda", index: 4 },
        { name: lang === "en" ? "Manomaya" : "मनोमय", meaning: lang === "en" ? "Mental / Emotional" : "मन / भावनात्मक", icon: Activity, color: "from-blue-400 to-indigo-500", tab: "brahmananda", index: 5 },
        { name: lang === "en" ? "Vijnanamaya" : "विज्ञानमय", meaning: lang === "en" ? "Intellect / Wisdom" : "बुद्धि / विवेक", icon: Sparkles, color: "from-purple-400 to-violet-500", tab: "brahmananda", index: 6 },
        { name: lang === "en" ? "Anandamaya" : "आनंदमय", meaning: lang === "en" ? "Bliss / Causal" : "आनंद / कारण", icon: Heart, color: "from-rose-400 to-pink-500", tab: "brahmananda", index: 7 }
    ];

    return (
        <div className="space-y-16">
            <div className="text-center max-w-4xl mx-auto space-y-6">
                <h2 className="text-5xl md:text-7xl font-serif font-black text-rose-100 italic tracking-tight">
                    {lang === "en" ? "The Layers of Divinity" : "दिव्यता की परतें"}
                </h2>
                <p className="text-rose-400/60 leading-relaxed text-xl max-w-2xl mx-auto font-light">
                    {lang === "en"
                        ? "From the physical body to the core of bliss, the Taittiriya Upanishad is a scientific manual on human constitution. It reveals that we are not one, but five integrated sheaths."
                        : "भौतिक शरीर से लेकर आनंद के केंद्र तक, तैत्तिरीय उपनिषद मानव संविधान पर एक वैज्ञानिक मैनुअल है। यह प्रकट करता है कि हम एक नहीं, बल्कि पाँच एकीकृत कोश हैं।"}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                    onClick={() => setActiveTab("shiksha")}
                    className="col-span-1 md:col-span-2 lg:col-span-1 bg-slate-900/50 border border-rose-500/20 rounded-[2.5rem] p-10 hover:bg-rose-500/5 transition-all cursor-pointer group"
                >
                    <GraduationCap className="w-12 h-12 text-rose-500 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white mb-2">Shiksha Valli</h3>
                    <p className="text-rose-400/50 text-xs font-black uppercase tracking-widest mb-4">The Ethics of a Seeker</p>
                    <p className="text-rose-100/40 text-sm leading-relaxed">Contains the famous convocation address. Guidelines for living a life of truth, dharma, and continuous learning.</p>
                </div>

                <div
                    onClick={() => setActiveTab("brahmananda")}
                    className="col-span-1 md:col-span-2 lg:col-span-1 bg-slate-900/50 border border-rose-500/20 rounded-[2.5rem] p-10 hover:bg-rose-500/5 transition-all cursor-pointer group"
                >
                    <Layers className="w-12 h-12 text-rose-500 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white mb-2">Brahmananda Valli</h3>
                    <p className="text-rose-400/50 text-xs font-black uppercase tracking-widest mb-4">The Calculus of Bliss</p>
                    <p className="text-rose-100/40 text-sm leading-relaxed">Defines Brahman and analyzes the Five Sheaths (Pancha Kosha) that hide the ultimate bliss within.</p>
                </div>

                <div
                    onClick={() => setActiveTab("bhrigu")}
                    className="col-span-1 md:col-span-2 lg:col-span-1 bg-slate-900/50 border border-rose-500/20 rounded-[2.5rem] p-10 hover:bg-rose-500/5 transition-all cursor-pointer group"
                >
                    <SearchIcon className="w-12 h-12 text-rose-500 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold text-white mb-2">Bhrigu Valli</h3>
                    <p className="text-rose-400/50 text-xs font-black uppercase tracking-widest mb-4">The Scientific Search</p>
                    <p className="text-rose-100/40 text-sm leading-relaxed">Bhrigu's personal journey of self-discovery through Tapas to find the origin of all existence.</p>
                </div>
            </div>

            <div className="space-y-8">
                <h3 className="text-3xl font-serif font-black text-rose-100 text-center tracking-tight">The Pancha Kosha Map</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {koshas.map((k, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => setActiveTab(k.tab)}
                            className="bg-slate-900 border border-rose-500/10 rounded-3xl p-6 text-center hover:border-rose-500/40 hover:bg-slate-800 transition-all cursor-pointer group relative overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${k.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                            <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${k.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:rotate-6 transition-transform`}>
                                <k.icon className="w-7 h-7" />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-1">{k.name}</h4>
                            <p className="text-rose-400/40 text-[10px] uppercase font-black tracking-widest leading-tight">{k.meaning}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-br from-rose-900/20 to-orange-900/20 rounded-[3rem] p-12 border border-rose-500/30 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Star className="w-32 h-32 text-rose-400" />
                </div>
                <h3 className="text-4xl md:text-5xl font-serif text-rose-50 mb-6 drop-shadow-2xl font-bold tracking-tighter">सत्यं ज्ञानमनन्तं ब्रह्म</h3>
                <p className="text-2xl text-rose-300/80 italic font-light max-w-2xl mx-auto leading-relaxed">
                    {lang === "en" ? "\"Brahman is Truth, Knowledge, and Infinity.\"" : "\"ब्रह्म सत्य, ज्ञान और अनंत है।\""}
                </p>
            </div>
        </div>
    );
}

function SearchIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
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
                <h2 className="text-3xl md:text-5xl font-serif font-black text-rose-100 tracking-tight">{title}</h2>
                <div className="flex items-center justify-center gap-6">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-500/30" />
                    <p className="text-rose-400/60 font-black tracking-[0.4em] uppercase text-[10px]">{subtitle}</p>
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-500/30" />
                </div>
            </div>

            <motion.div
                key={shloka.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-5xl mx-auto"
            >
                <div className="bg-slate-900 border border-rose-500/30 rounded-[3.5rem] overflow-hidden shadow-[0_0_100px_rgba(244,63,94,0.1)] backdrop-blur-xl">
                    <div className="p-8 md:p-16 space-y-12">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-4xl font-black text-white shadow-2xl rotate-6">
                                    {shloka.id}
                                </div>
                                <div>
                                    <h3 className="text-3xl font-serif font-bold text-white tracking-tight">{shloka.theme || "The Revelation"}</h3>
                                    <p className="text-rose-400/50 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Valli {shloka.valli} • Anuvaka {shloka.anuvaka}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-slate-950/50 p-2 rounded-2xl border border-white/5">
                                <button
                                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                                    disabled={currentIndex === 0}
                                    className="p-3 text-rose-400 hover:bg-rose-500 hover:text-white rounded-xl transition-all disabled:opacity-20"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <span className="text-rose-100 font-black text-sm px-2">{currentIndex + 1} / {data.length}</span>
                                <button
                                    onClick={() => setCurrentIndex(prev => Math.min(data.length - 1, prev + 1))}
                                    disabled={currentIndex === data.length - 1}
                                    className="p-3 text-rose-400 hover:bg-rose-500 hover:text-white rounded-xl transition-all disabled:opacity-20"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-slate-950/80 rounded-[2.5rem] p-12 border border-rose-500/10 shadow-inner group relative">
                            <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-30 transition-opacity">
                                <Volume2 className="w-8 h-8 text-rose-400" />
                            </div>
                            <p className="text-3xl md:text-5xl text-rose-50 leading-[1.6] text-center font-serif italic" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                                {shloka.sanskrit}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="p-8 bg-rose-900/10 rounded-3xl border border-rose-500/10 h-full">
                                    <h4 className="text-rose-400/60 text-[10px] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <Languages className="w-4 h-4" /> Message
                                    </h4>
                                    <p className="text-rose-100 text-xl leading-relaxed italic font-light">
                                        {lang === "en" ? shloka.english : shloka.hindi}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="p-10 bg-gradient-to-br from-rose-600/20 to-orange-600/20 rounded-[2.5rem] border border-rose-400/30 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-rose-200 font-black mb-6 flex items-center gap-3 text-lg">
                                            <span className="bg-rose-500 text-slate-950 w-8 h-8 rounded-xl flex items-center justify-center text-sm shadow-lg">💡</span>
                                            {lang === "en" ? "ESSENCE" : "सार"}
                                        </h4>
                                        <p className="text-rose-50 text-2xl leading-relaxed font-serif italic text-center pb-8 border-b border-rose-400/20">
                                            {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mt-8">
                                        <button
                                            onClick={() => (window as any).showSadhanaTimer && (window as any).showSadhanaTimer()}
                                            className="bg-white text-rose-900 hover:bg-rose-50 font-black p-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl hover:scale-[1.02] active:scale-95"
                                        >
                                            <Flame className="w-5 h-5" /> SADHANA
                                        </button>
                                        <button
                                            onClick={() => (window as any).showExperienceReport && (window as any).showExperienceReport()}
                                            className="bg-rose-900/40 text-rose-200 border border-rose-400/20 hover:bg-slate-800 font-bold p-4 rounded-2xl flex items-center justify-center gap-3 transition-all"
                                        >
                                            <Feather className="w-5 h-5" /> RECOGNITION
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {shloka.wordMeanings && shloka.wordMeanings.length > 0 && (
                            <div className="p-10 bg-slate-950/40 rounded-[2.5rem] border border-white/5">
                                <h4 className="text-rose-600 text-[10px] font-black uppercase tracking-widest mb-8 flex items-center gap-2">
                                    <Activity className="w-3 h-3" /> Root Definitions
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {shloka.wordMeanings.map((m: any, i: number) => (
                                        <div key={i} className="flex flex-col gap-1 p-4 bg-slate-900/50 rounded-2xl border border-rose-500/5 hover:border-rose-500/30 transition-all">
                                            <span className="text-rose-100 font-serif text-xl">{m.devanagari}</span>
                                            <span className="text-rose-400/40 text-[9px] uppercase font-black tracking-tighter">{m.sanskrit}</span>
                                            <span className="text-rose-200/60 text-sm mt-1">{lang === "en" ? m.english : m.hindi}</span>
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
export default function TaittiriyaLayout() {
    const router = useRouter();
    const [lang, setLang] = useState<"en" | "hi">("en");
    const [activeTab, setActiveTab] = useState<string>("overview");
    const [sadhanaActive, setSadhanaActive] = useState(false);
    const [reportActive, setReportActive] = useState(false);
    const { logEvent } = useBatch2Events();
    const { mode } = useBatch2UI();

    useEffect(() => {
        (window as any).showSadhanaTimer = () => {
            logEvent("upanishad_session_started", { module: "Taittiriya Upanishad" });
            setSadhanaActive(true);
        }
        (window as any).showExperienceReport = () => setReportActive(true);
    }, [logEvent]);

    const tabs = [
        { id: "overview", label: lang === "en" ? "Overview" : "परिचय", icon: Info },
        { id: "shiksha", label: lang === "en" ? "Shiksha" : "शिक्षा", icon: GraduationCap },
        { id: "brahmananda", label: lang === "en" ? "Koshas" : "कोश", icon: Layers },
        { id: "bhrigu", label: lang === "en" ? "Bhrigu" : "भृगु", icon: Heart },
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
                        className="flex items-center gap-2 text-rose-500/50 hover:text-rose-400 transition-colors uppercase tracking-[0.3em] font-black text-[10px]"
                    >
                        <ArrowLeft className="w-4 h-4" /> Exit
                    </button>
                </div>
                <TaittiriyaImmersiveExperience lang={lang} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-rose-50 selection:bg-rose-500/30">

            <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-rose-950/40 via-slate-950/70 to-slate-950" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10" />

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-rose-500/20 rounded-full blur-[150px]"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 20, repeat: Infinity }}
                        className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-orange-600/10 rounded-full blur-[120px]"
                    />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                        <span className="inline-block px-8 py-2.5 bg-rose-500/10 text-rose-400 rounded-full text-[10px] font-black tracking-[0.6em] uppercase border border-rose-500/20 backdrop-blur-md mb-12">
                            Krishna Yajur Veda • The Five Sheaths of Bliss
                        </span>
                        <h1 className="text-7xl md:text-[11rem] font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-rose-100 via-rose-300 to-rose-900 leading-none tracking-tighter mb-8 filter drop-shadow-2xl">
                            Taittiriya
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12 text-2xl md:text-3xl font-light text-rose-300/60 font-serif">
                            <span className="italic italic">"Knowing Brahman, one attains the Highest."</span>
                        </div>
                    </motion.div>
                </div>
            </header>

            <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-3xl border-b border-rose-900/20 px-6 py-5">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button onClick={() => router.push("/student/batch2/upanishads")} className="p-3 bg-rose-500/10 text-rose-400 hover:bg-rose-500 hover:text-white rounded-2xl transition-all border border-rose-500/20">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div className="hidden sm:block">
                            <h2 className="text-xl font-black text-white leading-tight font-serif">Taittiriya</h2>
                            <p className="text-rose-600/60 text-[10px] font-black uppercase tracking-widest">{lang === "en" ? "Pancha Kosha" : "पंच कोश"}</p>
                        </div>
                    </div>

                    <div className="flex bg-slate-900/80 rounded-[1.5rem] p-1.5 border border-white/5 shadow-2xl overflow-x-auto no-scrollbar max-w-[60%] md:max-w-none">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-black transition-all ${activeTab === tab.id ? "bg-rose-50 text-rose-900 shadow-xl" : "text-rose-600 hover:text-rose-400"}`}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span className="hidden lg:inline uppercase tracking-widest">{tab.label}</span>
                                <span className="lg:hidden">{tab.id === 'overview' ? 'Inf' : tab.label}</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex bg-slate-900/80 rounded-xl p-1 border border-white/5">
                            {(["en", "hi"] as const).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all ${lang === l ? "bg-rose-500 text-white" : "text-rose-600 hover:text-rose-400"}`}
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
                        {activeTab === "overview" && <TaittiriyaOverview lang={lang} setActiveTab={setActiveTab} />}
                        {activeTab === "shiksha" && <WisdomStream data={shiksha} lang={lang} title={lang === "en" ? "Convocation Address" : "दीक्षांत भाषण"} subtitle="Guidelines for Ethics and Learning" />}
                        {activeTab === "brahmananda" && <WisdomStream data={brahmananda} lang={lang} title={lang === "en" ? "The Five Layers" : "पाँच परतें"} subtitle="The Anatomy of the Self" />}
                        {activeTab === "bhrigu" && <WisdomStream data={bhrigu} lang={lang} title={lang === "en" ? "Bhrigu's Search" : "भृगु की खोज"} subtitle="Direct Investigation of Reality" />}
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="bg-slate-950 py-48 text-center border-t border-rose-900/10 relative overflow-hidden">
                <div className="relative z-10 space-y-12 px-6">
                    <p className="text-4xl md:text-7xl font-serif text-rose-50 leading-tight">ॐ सह नाववतु । सह नौ भुनक्तु ।</p>
                    <p className="text-rose-400/60 italic text-2xl max-w-3xl mx-auto font-light leading-relaxed">
                        {lang === "en" ? "May it protect us together. May it nourish us together. OM Peace Peace Peace." : "वह हम दोनों की रक्षा करे। वह हम दोनों का पोषण करे। ॐ शांतिः शांतिः शांतिः।"}
                    </p>
                    <div className="pt-20">
                        <p className="text-rose-500/40 text-[10px] font-black uppercase tracking-[0.5em]">— Taittiriya Upanishad —</p>
                    </div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(244,63,94,0.05)_0%,transparent_70%)]" />
            </footer>

            <AnimatePresence>
                {sadhanaActive && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setSadhanaActive(false)} />
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative z-10 w-full max-w-xl">
                            <SadhanaTimer
                                title="Taittiriya: Kosha Scan"
                                duration={300}
                                onComplete={(data) => {
                                    logEvent("upanishad_session_completed", { module: "Taittiriya Upanishad", duration: Math.ceil((data?.timeSpent || 300) / 60), data: { upanishadKey: "taittiriya" } });
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
                        title="Taittiriya: Bliss Realization"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
