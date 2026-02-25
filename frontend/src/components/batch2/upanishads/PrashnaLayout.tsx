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
    Sprout,
    Moon,
    User,
    Volume2,
    VolumeX,
    HelpCircle
} from "lucide-react";
import { prashnaData, getPrashnaVerses } from "@/components/batch2/upanishads/data/prashna-shlokas";
import { getPrashnaShlokaImage } from "@/components/batch2/upanishads/data/prashna-images";
import { useBatch2UI } from "@/components/batch2/context/Batch2UIContext";
import { TranceToggle } from "@/components/batch2/context/TranceToggle";
import { useBatch2Events } from "@/components/batch2/hooks/useBatch2Events";
import PrashnaResearchReport from "@/components/batch2/upanishads/PrashnaResearchReport";
import SadhanaTimer from "@/components/batch2/shared/SadhanaTimer";
import ExperienceReport from "@/components/batch2/shared/ExperienceReport";
import { PrashnaImmersiveExperience } from "@/components/batch2/upanishads/PrashnaImmersiveExperience";

// ==========================================
// PRASHNA OVERVIEW COMPONENT
// ==========================================
function PrashnaOverview({ lang, setActiveTab }: { lang: "en" | "hi", setActiveTab: (tab: any) => void }) {
    const questions = [
        {
            title: lang === "en" ? "Source of Life" : "जीवन का स्रोत",
            desc: lang === "en" ? "Kabandhi asks: Where do all beings come from?" : "सभी प्राणी कहाँ से आते हैं?",
            icon: Sprout,
            color: "from-emerald-400 to-green-500",
            tab: "q1"
        },
        {
            title: lang === "en" ? "Nature of Prana" : "प्राण का स्वरूप",
            desc: lang === "en" ? "How is Prana supreme over all elements?" : "प्राण सभी तत्वों पर श्रेष्ठ कैसे है?",
            icon: Wind,
            color: "from-teal-400 to-cyan-500",
            tab: "q2"
        },
        {
            title: lang === "en" ? "Origin of Prana" : "प्राण की उत्पत्ति",
            desc: lang === "en" ? "Where is Prana born and how does it enter?" : "प्राण कहाँ से उत्पन्न होता है?",
            icon: Sparkles,
            color: "from-blue-400 to-indigo-500",
            tab: "q3"
        },
        {
            title: lang === "en" ? "Sleep & Dreams" : "नींद और सपने",
            desc: lang === "en" ? "Who sleeps? Who dreams? Who is happy?" : "कौन सोता है? कौन सपना देखता है?",
            icon: Moon,
            color: "from-violet-400 to-purple-500",
            tab: "q4"
        },
        {
            title: lang === "en" ? "Meditation on OM" : "ओम ध्यान",
            desc: lang === "en" ? "What world is won by Om?" : "ओम के ध्यान से क्या प्राप्त होता है?",
            icon: Zap,
            color: "from-amber-400 to-orange-500",
            tab: "q5"
        },
        {
            title: lang === "en" ? "The Purusha" : "षोडशकल पुरुष",
            desc: lang === "en" ? "The Person with sixteen parts." : "सोलह कलाओं वाला पुरुष।",
            icon: User,
            color: "from-rose-400 to-red-500",
            tab: "q6"
        }
    ];

    return (
        <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-teal-100 italic">
                    {lang === "en" ? "The Science of Life Force" : "प्रश्नोपनिषद्"}
                </h2>
                <p className="text-teal-400/70 leading-relaxed text-lg">
                    {lang === "en"
                        ? "Six seekers approach the Sage Pippalada with specific questions about the origin of life, the nature of Prana, and the mechanics of consciousness. It is a systematic inquiry into the unseen drivers of the body."
                        : "छह साधक ऋषि पिप्पलाद के पास जीवन की उत्पत्ति, प्राण के स्वरूप और चेतना की क्रियाविधि के बारे में विशिष्ट प्रश्न लेकर पहुँचते हैं।"}
                </p>
            </div>

            <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-[2.5rem] p-12 border border-teal-500/30 text-center relative overflow-hidden group">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-400 via-transparent to-transparent pointer-events-none" />
                <p className="text-teal-500/60 text-sm uppercase tracking-[0.3em] font-black mb-6">The Prana Declaration</p>
                <h3 className="text-5xl md:text-7xl font-serif text-teal-50 mb-6 drop-shadow-2xl font-bold">प्राणस्येदं वशे सर्वम्</h3>
                <p className="text-2xl md:text-3xl text-teal-400/80 italic font-light">
                    {lang === "en" ? "\"Everything in the three worlds is under the control of Prana.\"" : "\"तीनों लोकों में जो कुछ भी है, वह सब प्राण के वश में है।\""}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {questions.map((q, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-900 border border-teal-500/20 rounded-3xl p-8 hover:bg-slate-800 transition-all cursor-pointer group relative overflow-hidden"
                        onClick={() => setActiveTab(q.tab as any)}
                    >
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${q.color} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity`} />
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${q.color} flex items-center justify-center mb-6 shadow-lg shadow-black/40`}>
                            <q.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{q.title}</h3>
                        <p className="text-teal-200/60 text-sm leading-relaxed">{q.desc}</p>
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
    const image = getPrashnaShlokaImage(shloka?.id);

    if (!shloka) return null;

    return (
        <div className="space-y-8">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-100 mb-2">{title}</h2>
                <p className="text-teal-400/60 font-medium tracking-widest uppercase text-xs">{subtitle}</p>
            </div>

            <motion.div
                key={shloka.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 rounded-[2.5rem] border border-teal-500/30 overflow-hidden shadow-2xl"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="p-8 md:p-12 space-y-10">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-2xl font-black text-white shadow-lg">
                                {shloka.verse}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white tracking-tight">{shloka.theme || "Verse"}</h3>
                                <p className="text-teal-400/60 text-xs font-bold uppercase tracking-widest">Question {shloka.prashna} • Verse {shloka.verse}</p>
                            </div>
                        </div>

                        <div className="bg-slate-950/60 rounded-3xl p-10 border border-teal-500/20 shadow-inner">
                            <p className="text-3xl md:text-3xl text-teal-50 text-center leading-relaxed font-serif" style={{ fontFamily: "'Noto Sans Devanagari', serif" }}>
                                {shloka.sanskrit}
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-teal-900/10 rounded-2xl p-6 border border-teal-500/10">
                                <h4 className="text-teal-400 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                                    <Languages className="w-4 h-4" />
                                    {lang === "en" ? "Translation" : "अनुवाद"}
                                </h4>
                                <p className="text-teal-50 text-xl leading-relaxed italic font-light">
                                    {lang === "en" ? shloka.english : shloka.hindi}
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl p-8 border border-teal-400/40 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Sparkles className="w-12 h-12 text-teal-400" />
                                </div>
                                <h4 className="text-teal-200 font-black mb-4 flex items-center gap-3">
                                    <span className="bg-teal-500 text-slate-950 w-8 h-8 rounded-lg flex items-center justify-center text-lg">💡</span>
                                    {lang === "en" ? "THE ESSENCE" : "सार"}
                                </h4>
                                <p className="text-teal-50 text-xl leading-relaxed font-medium">
                                    {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => (window as any).showSadhanaTimer && (window as any).showSadhanaTimer()}
                                    className="flex-1 bg-teal-600/20 hover:bg-teal-600/30 border border-teal-500/30 rounded-2xl p-6 text-teal-200 font-bold text-lg flex items-center justify-center gap-3 transition-all group"
                                >
                                    <Zap className="w-6 h-6 text-teal-400 group-hover:scale-125 transition-transform" />
                                    Start Sadhana
                                </button>
                                <button
                                    onClick={() => (window as any).showExperienceReport && (window as any).showExperienceReport()}
                                    className="flex-1 bg-slate-800/50 hover:bg-slate-800 border border-teal-500/10 rounded-2xl p-6 text-teal-400/80 font-bold text-lg flex items-center justify-center gap-3 transition-all"
                                >
                                    <Feather className="w-6 h-6" />
                                    Log Experience
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="relative bg-black min-h-[500px] lg:min-h-full overflow-hidden border-l border-teal-500/10 hidden lg:flex items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.1)_0%,transparent_70%)] pointer-events-none" />
                        {image ? (
                            <motion.img
                                src={image}
                                alt="Visual Representation"
                                className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-1000"
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                            />
                        ) : (
                            <div className="text-center p-12 text-teal-500/20 font-serif italic text-2xl">
                                {shloka.nanoBananaPrompt}
                            </div>
                        )}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2 bg-black/60 rounded-full border border-teal-500/30 backdrop-blur-md text-xs font-black text-teal-400 uppercase tracking-widest">
                            Contemplative Visual
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="flex items-center justify-center gap-6">
                <button
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="w-16 h-16 flex items-center justify-center bg-slate-900 text-teal-400 rounded-full border border-teal-500/30 hover:bg-teal-500 hover:text-white transition-all disabled:opacity-20"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>
                <div className="flex bg-slate-900/50 p-2 rounded-full border border-teal-500/20 gap-2 overflow-x-auto no-scrollbar max-w-xs md:max-w-none">
                    {data.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-10 h-10 rounded-full text-sm font-black transition-all ${i === currentIndex ? 'bg-teal-500 text-slate-950' : 'text-teal-500/40 hover:text-teal-400'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => setCurrentIndex(prev => Math.min(data.length - 1, prev + 1))}
                    disabled={currentIndex === data.length - 1}
                    className="w-16 h-16 flex items-center justify-center bg-slate-900 text-teal-400 rounded-full border border-teal-500/30 hover:bg-teal-500 hover:text-white transition-all disabled:opacity-20"
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
export default function PrashnaLayout() {
    const router = useRouter();
    const [lang, setLang] = useState<"en" | "hi">("en");
    const [activeTab, setActiveTab] = useState<"overview" | "research" | "q1" | "q2" | "q3" | "q4" | "q5" | "q6">("overview");
    const [sadhanaActive, setSadhanaActive] = useState(false);
    const [reportActive, setReportActive] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const { logEvent } = useBatch2Events();
    const { mode } = useBatch2UI();

    useEffect(() => {
        (window as any).showSadhanaTimer = () => {
            logEvent("upanishad_session_started", { module: "Prashna Upanishad" });
            setSadhanaActive(true);
        };
        (window as any).showExperienceReport = () => setReportActive(true);
    }, [logEvent]);

    const tabs = [
        { id: "overview", label: lang === "en" ? "Overview" : "परिचय", icon: Info },
        { id: "research", label: lang === "en" ? "Reports" : "रिपोर्ट", icon: HelpCircle },
        { id: "q1", label: "Q1", icon: Sprout },
        { id: "q2", label: "Q2", icon: Wind },
        { id: "q3", label: "Q3", icon: Sparkles },
        { id: "q4", label: "Q4", icon: Moon },
        { id: "q5", label: "Q5", icon: Zap },
        { id: "q6", label: "Q6", icon: User },
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
                        className="flex items-center gap-2 text-teal-500/50 hover:text-teal-400 transition-colors uppercase tracking-[0.3em] font-black text-[10px]"
                    >
                        <ArrowLeft className="w-4 h-4" /> Exit
                    </button>
                </div>
                <PrashnaImmersiveExperience lang={lang} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-teal-500/30 selection:text-teal-200">

            <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-teal-950/40 via-slate-950/80 to-slate-950" />

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(20,184,166,0.1)_0%,transparent_50%)]"
                    />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')] opacity-10" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                        <span className="inline-block px-6 py-2 bg-teal-500/10 text-teal-400 rounded-full text-[10px] font-black tracking-[0.5em] uppercase border border-teal-500/20 backdrop-blur-md">
                            Atharva Veda • The Upanishad of Questions
                        </span>
                        <h1 className="text-7xl md:text-[10rem] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-teal-100 to-teal-700 leading-none tracking-tighter">
                            {lang === "en" ? "Prashna" : "प्रश्न"}
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                            <div className="flex items-center gap-3 text-teal-200/60 font-medium text-xl md:text-2xl">
                                <span className="italic">Six Enquiries into Life</span>
                                <div className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.5)]" />
                                <span>The Secret of Prana</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </header>

            <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-2xl border-b border-teal-900/20 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button onClick={() => router.push("/student/batch2/upanishads")} className="p-3 text-teal-500 hover:bg-teal-500/10 rounded-xl transition-all border border-teal-500/20">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div className="hidden sm:block">
                            <h2 className="text-lg font-bold text-white leading-tight">Prashna</h2>
                            <p className="text-teal-600/60 text-[10px] font-black uppercase tracking-widest">{lang === "en" ? "Adhyaropa-Apavada" : "छह महान प्रश्न"}</p>
                        </div>
                    </div>

                    <div className="flex bg-slate-900/80 rounded-[1.25rem] p-1.5 border border-white/5 shadow-2xl overflow-x-auto no-scrollbar max-w-[50%] md:max-w-none">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all ${activeTab === tab.id ? "bg-teal-50 text-slate-950 shadow-lg" : "text-teal-600 hover:text-teal-400"}`}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span className="hidden md:inline uppercase tracking-widest">{tab.label}</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex bg-slate-900/50 rounded-xl p-1 border border-white/5">
                            {(["en", "hi"] as const).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${lang === l ? "bg-teal-500 text-slate-950" : "text-teal-600 hover:text-teal-400"}`}
                                >
                                    {l.toUpperCase()}
                                </button>
                            ))}
                        </div>
                        <TranceToggle />
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-20 md:py-32">
                <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                        {activeTab === "overview" && <PrashnaOverview lang={lang} setActiveTab={setActiveTab} />}
                        {activeTab === "research" && <PrashnaResearchReport lang={lang} />}
                        {activeTab === "q1" && <WisdomStream data={getPrashnaVerses(1)} lang={lang} title={lang === "en" ? "Q1: Source of Life" : "प्रश्न १: जीवन का स्रोत"} subtitle="Rayi & Prana" />}
                        {activeTab === "q2" && <WisdomStream data={getPrashnaVerses(2)} lang={lang} title={lang === "en" ? "Q2: Power of Prana" : "प्रश्न २: प्राण की शक्ति"} subtitle="The Supreme Driver" />}
                        {activeTab === "q3" && <WisdomStream data={getPrashnaVerses(3)} lang={lang} title={lang === "en" ? "Q3: Distribution" : "प्रश्न ३: वितरण"} subtitle="The Fivefold Division" />}
                        {activeTab === "q4" && <WisdomStream data={getPrashnaVerses(4)} lang={lang} title={lang === "en" ? "Q4: Dream State" : "प्रश्न ४: स्वप्न अवस्था"} subtitle="The Withdrawal of Senses" />}
                        {activeTab === "q5" && <WisdomStream data={getPrashnaVerses(5)} lang={lang} title={lang === "en" ? "Q5: Om Meditation" : "प्रश्न ५: ओम ध्यान"} subtitle="The Ultimate Path" />}
                        {activeTab === "q6" && <WisdomStream data={getPrashnaVerses(6)} lang={lang} title={lang === "en" ? "Q6: The Purusha" : "प्रश्न ६: पुरुष"} subtitle="The Sixteen Parts" />}
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="group bg-slate-950 py-32 text-center border-t border-teal-900/10 relative overflow-hidden">
                <div className="relative z-10 space-y-8">
                    <p className="text-4xl md:text-6xl font-serif text-teal-50 leading-tight">ॐ शान्तिः शान्तिः शान्तिः</p>
                    <p className="text-teal-400/60 italic text-xl max-w-2xl mx-auto">
                        {lang === "en" ? "May Prana bestow upon us Shri (Wealth) and Prajna (Wisdom)." : "प्राण हमें श्री और प्रज्ञा प्रदान करें।"}
                    </p>
                    <p className="text-teal-500/40 text-[10px] font-black uppercase tracking-[0.4em] mt-12">— Prashna Upanishad —</p>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.03)_0%,transparent_70%)]" />
            </footer>

            <AnimatePresence>
                {sadhanaActive && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setSadhanaActive(false)} />
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative z-10 w-full max-w-xl">
                            <SadhanaTimer
                                title="Prashna: Prana Contemplation"
                                duration={600}
                                onComplete={(data) => {
                                    logEvent("upanishad_session_completed", { module: "Prashna Upanishad", duration: Math.ceil((data?.timeSpent || 600) / 60), data: { upanishadKey: "prashna" } });
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
                        title="Prashna: Realization Log"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
