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
    Mountain,
    TreeDeciduous,
    Eye,
    Target
} from "lucide-react";
import { MUNDAKA_METADATA, MUNDAKA_SHLOKAS } from "@/components/batch2/upanishads/data/mundaka-shlokas";
import { useBatch2UI } from "@/components/batch2/context/Batch2UIContext";
import { TranceToggle } from "@/components/batch2/context/TranceToggle";
import { useBatch2Events } from "@/components/batch2/hooks/useBatch2Events";
import SadhanaTimer from "@/components/batch2/shared/SadhanaTimer";
import ExperienceReport from "@/components/batch2/shared/ExperienceReport";
import { MundakaImmersiveExperience } from "@/components/batch2/upanishads/MundakaImmersiveExperience";

// Group data by Mundaka
const mundaka1Data = MUNDAKA_SHLOKAS.filter(d => d.mundaka === 1);
const mundaka2Data = MUNDAKA_SHLOKAS.filter(d => d.mundaka === 2);
const mundaka3Data = MUNDAKA_SHLOKAS.filter(d => d.mundaka === 3);

// ==========================================
// MUNDAKA OVERVIEW COMPONENT
// ==========================================
function MundakaOverview({ lang, setActiveTab }: { lang: "en" | "hi", setActiveTab: (tab: any) => void }) {
    const highlights = [
        {
            title: lang === "en" ? "Two Knowledges" : "दो विद्याएं",
            desc: lang === "en" ? "Para (Higher) and Apara (Lower) Knowledge" : "परा (उच्च) और अपरा (निम्न) विद्या",
            emoji: "📚",
            color: "from-blue-400 to-cyan-500",
            tab: "mundaka1"
        },
        {
            title: lang === "en" ? "Two Birds" : "दो पक्षी",
            desc: lang === "en" ? "The Jivatma and Paramatma on the tree of life" : "जीव और ब्रह्म जीवन के वृक्ष पर",
            emoji: "🐦",
            color: "from-green-400 to-emerald-500",
            tab: "mundaka3"
        },
        {
            title: lang === "en" ? "Satyameva Jayate" : "सत्यमेव जयते",
            desc: lang === "en" ? "India's National Motto comes from this Upanishad" : "भारत का राष्ट्रीय वाक्य इसी उपनिषद से है",
            emoji: "🦁",
            color: "from-orange-400 to-amber-500",
            tab: "mundaka3"
        },
        {
            title: lang === "en" ? "Spider Analogy" : "मकड़ी उपमा",
            desc: lang === "en" ? "Universe emerges from Brahman like web from spider" : "ब्रह्मांड ब्रह्म से निकलता है जैसे जाला मकड़ी से",
            emoji: "🕷️",
            color: "from-purple-400 to-pink-500",
            tab: "mundaka1"
        }
    ];

    return (
        <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-100 italic">
                    {lang === "en" ? "The Wisdom of the Higher Knowledge" : "मुण्डकोपनिषद्"}
                </h2>
                <p className="text-emerald-400/70 leading-relaxed text-lg">
                    {lang === "en"
                        ? "Known as the 'Shaved-Head' Upanishad for its sharp, purifying wisdom. It reveals the ultimate target of life through powerful analogies of the bow, the spider, and the two birds."
                        : "'मुण्डक' इसलिए क्योंकि इसका ज्ञान अज्ञान को काटता है। यह उपनिषद धनुष, मकड़ी और दो पक्षियों की शक्तिशाली उपमाओं के माध्यम से जीवन के परम लक्ष्य को प्रकट करता है।"}
                </p>
            </div>

            {/* Featured Quote / Call to Action */}
            <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-[2.5rem] p-12 border border-emerald-500/30 text-center relative overflow-hidden group">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-transparent to-transparent pointer-events-none" />
                <p className="text-emerald-500/60 text-sm uppercase tracking-[0.3em] font-black mb-6">The Immortal Declaration</p>
                <h3 className="text-5xl md:text-7xl font-serif text-emerald-50 mb-6 drop-shadow-2xl">सत्यमेव जयते</h3>
                <p className="text-2xl md:text-3xl text-emerald-400/80 italic font-light">
                    {lang === "en" ? "\"Truth Alone Triumphs — Not Untruth.\"" : "\"सत्य की ही जीत होती है — असत्य की नहीं।\""}
                </p>
                <div className="mt-10">
                    <button
                        onClick={() => setActiveTab('mundaka3')}
                        className="px-8 py-3 bg-emerald-500 text-slate-950 font-black rounded-full hover:scale-105 transition-transform"
                    >
                        EXPLORE THE FINAL TRUTH
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-900 border border-emerald-500/20 rounded-3xl p-8 text-center hover:bg-slate-800 transition-all cursor-pointer group"
                        onClick={() => setActiveTab(h.tab as any)}
                    >
                        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{h.emoji}</div>
                        <h3 className={`text-xl font-bold bg-gradient-to-r ${h.color} bg-clip-text text-transparent mb-2`}>{h.title}</h3>
                        <p className="text-emerald-200/60 text-sm">{h.desc}</p>
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
        <div className="space-y-8">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-100 mb-2">{title}</h2>
                <p className="text-emerald-400/60 font-medium tracking-widest uppercase text-xs">{subtitle}</p>
            </div>

            <motion.div
                key={shloka.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 rounded-[2.5rem] border border-emerald-500/30 overflow-hidden shadow-2xl p-8 md:p-12 space-y-10"
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-2xl font-black text-white shadow-lg">
                            {shloka.id}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white tracking-tight">{shloka.theme || "Verse"}</h3>
                            <p className="text-emerald-400/60 text-xs font-bold uppercase tracking-widest">Mundaka {shloka.mundaka} • Khanda {shloka.khanda}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-950/60 rounded-3xl p-10 border border-emerald-500/20 shadow-inner">
                    <p className="text-3xl md:text-4xl text-emerald-50 text-center leading-relaxed font-serif" style={{ fontFamily: "'Noto Sans Devanagari', serif" }}>
                        {shloka.sanskrit}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="bg-emerald-900/10 rounded-2xl p-6 border border-emerald-500/10 h-full">
                            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                                <Languages className="w-4 h-4" />
                                {lang === "en" ? "Translation" : "अनुवाद"}
                            </h4>
                            <p className="text-emerald-50 text-xl leading-relaxed font-light italic">
                                {lang === "en" ? shloka.english : shloka.hindi}
                            </p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl p-8 border border-emerald-400/40 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Sparkles className="w-12 h-12 text-emerald-400" />
                        </div>
                        <h4 className="text-emerald-200 font-black mb-4 flex items-center gap-3">
                            <span className="bg-emerald-500 text-slate-950 w-8 h-8 rounded-lg flex items-center justify-center text-lg">💡</span>
                            {lang === "en" ? "THE ESSENCE" : "सार"}
                        </h4>
                        <p className="text-emerald-50 text-xl leading-relaxed font-medium relative z-10">
                            {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                        </p>
                    </div>
                </div>

                {shloka.wordMeanings && shloka.wordMeanings.length > 0 && (
                    <div className="pt-4">
                        <h4 className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 mb-6">
                            <BookOpen className="w-3 h-3" />
                            {lang === "en" ? "Key Concepts" : "मुख्य अवधारणाएँ"}
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {shloka.wordMeanings.map((m: any, i: number) => (
                                <div key={i} className="bg-slate-900/50 border border-emerald-500/10 rounded-2xl p-4 hover:border-emerald-500/30 transition-all">
                                    <p className="text-emerald-100 font-serif text-xl mb-1">{m.devanagari}</p>
                                    <p className="text-emerald-600 text-[10px] uppercase tracking-tighter mb-2 font-bold">{m.sanskrit}</p>
                                    <p className="text-slate-300 text-sm">{lang === "en" ? m.english : m.hindi}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Interaction Bars */}
                <div className="flex flex-wrap gap-4 pt-4">
                    <button
                        onClick={() => (window as any).showSadhanaTimer && (window as any).showSadhanaTimer()}
                        className="flex-1 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 rounded-2xl p-6 text-emerald-200 font-bold text-lg flex items-center justify-center gap-3 transition-all group"
                    >
                        <Zap className="w-6 h-6 text-emerald-400 group-hover:scale-125 transition-transform" />
                        Start Sadhana
                    </button>
                    <button
                        onClick={() => (window as any).showExperienceReport && (window as any).showExperienceReport()}
                        className="flex-1 bg-slate-800/50 hover:bg-slate-800 border border-emerald-500/10 rounded-2xl p-6 text-emerald-400/80 font-bold text-lg flex items-center justify-center gap-3 transition-all"
                    >
                        <Feather className="w-6 h-6" />
                        Log Realization
                    </button>
                </div>
            </motion.div>

            <div className="flex items-center justify-center gap-6">
                <button
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="w-16 h-16 flex items-center justify-center bg-slate-900 text-emerald-400 rounded-full border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition-all disabled:opacity-20"
                >
                    <ChevronLeft className="w-8 h-8" />
                </button>
                <div className="flex bg-slate-900/50 p-2 rounded-full border border-emerald-500/20 gap-2 overflow-x-auto no-scrollbar max-w-xs md:max-w-none">
                    {data.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`w-10 h-10 rounded-full text-sm font-black transition-all ${i === currentIndex ? 'bg-emerald-500 text-slate-950' : 'text-emerald-500/40 hover:text-emerald-400'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => setCurrentIndex(prev => Math.min(data.length - 1, prev + 1))}
                    disabled={currentIndex === data.length - 1}
                    className="w-16 h-16 flex items-center justify-center bg-slate-900 text-emerald-400 rounded-full border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition-all disabled:opacity-20"
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
export default function MundakaLayout() {
    const router = useRouter();
    const [lang, setLang] = useState<"en" | "hi">("en");
    const [activeTab, setActiveTab] = useState<"overview" | "mundaka1" | "mundaka2" | "mundaka3">("overview");
    const [sadhanaActive, setSadhanaActive] = useState(false);
    const [reportActive, setReportActive] = useState(false);
    const { logEvent } = useBatch2Events();
    const { mode } = useBatch2UI();

    useEffect(() => {
        (window as any).showSadhanaTimer = () => {
            logEvent("upanishad_session_started", { module: "Mundaka Upanishad" });
            setSadhanaActive(true);
        };
        (window as any).showExperienceReport = () => setReportActive(true);
    }, [logEvent]);

    const tabs = [
        { id: "overview", label: lang === "en" ? "Overview" : "परिचय", icon: Info },
        { id: "mundaka1", label: lang === "en" ? "Vidya" : "विद्या", icon: Mountain },
        { id: "mundaka2", label: lang === "en" ? "Target" : "लक्ष्य", icon: Target },
        { id: "mundaka3", label: lang === "en" ? "Birds" : "पक्षी", icon: Sparkles },
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
                        className="flex items-center gap-2 text-emerald-500/50 hover:text-emerald-400 transition-colors uppercase tracking-[0.3em] font-black text-[10px]"
                    >
                        <ArrowLeft className="w-4 h-4" /> Exit
                    </button>
                </div>
                <MundakaImmersiveExperience lang={lang} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-emerald-500/30 selection:text-emerald-200">

            {/* Hero Section */}
            <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-slate-950/80 to-slate-950" />

                {/* Visual Atmosphere */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 15, repeat: Infinity }}
                        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(16,185,129,0.1)_0%,transparent_50%)]"
                    />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-10" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <span className="inline-block px-6 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-black tracking-[0.5em] uppercase border border-emerald-500/20 backdrop-blur-md">
                            Atharva Veda • The Sharp Edge of Truth
                        </span>
                        <h1 className="text-7xl md:text-[10rem] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-emerald-100 to-emerald-700 leading-none tracking-tighter">
                            {lang === "en" ? "Mundaka" : "मुण्डक"}
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                            <div className="flex items-center gap-3 text-emerald-200/60 font-medium text-xl md:text-2xl">
                                <span className="italic">Truth Alone Triumphs</span>
                                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                <span>The Two Knowledges</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Navigation Bar */}
            <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-2xl border-b border-emerald-900/20 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button onClick={() => router.push("/student/batch2/upanishads")} className="p-3 text-emerald-500 hover:bg-emerald-500/10 rounded-xl transition-all border border-emerald-500/20">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div className="hidden sm:block">
                            <h2 className="text-lg font-bold text-white leading-tight">Mundaka</h2>
                            <p className="text-emerald-600/60 text-[10px] font-black uppercase tracking-widest">{lang === "en" ? "The Shaven-Headed Upanishad" : "मुण्डित ज्ञान उपनिषद"}</p>
                        </div>
                    </div>

                    <div className="flex bg-slate-900/80 rounded-[1.25rem] p-1.5 border border-white/5 shadow-2xl">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black transition-all ${activeTab === tab.id ? "bg-emerald-50 shadow-lg shadow-emerald-500/20 text-slate-950" : "text-emerald-600 hover:text-emerald-400"}`}
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
                                    className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${lang === l ? "bg-emerald-500 text-slate-950" : "text-emerald-600 hover:text-emerald-400"}`}
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
                        {activeTab === "overview" && <MundakaOverview lang={lang} setActiveTab={setActiveTab} />}
                        {activeTab === "mundaka1" && <WisdomStream data={mundaka1Data} lang={lang} title={lang === "en" ? "The Two Knowledges" : "दो विद्याएं"} subtitle="Section 1: Para & Apara Vidya" />}
                        {activeTab === "mundaka2" && <WisdomStream data={mundaka2Data} lang={lang} title={lang === "en" ? "The Bow & Arrow" : "धनुष और बाण"} subtitle="Section 2: Brahman as the Ultimate Target" />}
                        {activeTab === "mundaka3" && <WisdomStream data={mundaka3Data} lang={lang} title={lang === "en" ? "The Two Birds" : "दो पक्षी"} subtitle="Section 3: Yoga of Transformation and Liberty" />}
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="group bg-slate-950 py-32 text-center border-t border-emerald-900/10 relative overflow-hidden">
                <div className="relative z-10 space-y-8">
                    <p className="text-4xl md:text-6xl font-serif text-emerald-50 leading-tight transition-colors group-hover:text-emerald-400">भिद्यते हृदयग्रन्थिश्छिद्यन्ते सर्वसंशयाः</p>
                    <p className="text-emerald-400/60 italic text-xl max-w-2xl mx-auto">
                        {lang === "en" ? "When the Supreme is seen, the Knot of the Heart is broken, and all Doubts are dispelled." : "उस परावर का साक्षात्कार होने पर, हृदय की ग्रंथी टूट जाती है और सभी संशय मिट जाते हैं।"}
                    </p>
                    <p className="text-emerald-500/40 text-[10px] font-black uppercase tracking-[0.4em] mt-12">— Mundaka Upanishad 2.2.8 —</p>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.03)_0%,transparent_70%)]" />
            </footer>

            {/* Sadhana Modals */}
            <AnimatePresence>
                {sadhanaActive && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setSadhanaActive(false)} />
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative z-10 w-full max-w-xl">
                            <SadhanaTimer
                                title="Mundaka: Target the Truth"
                                duration={600}
                                onComplete={(data) => {
                                    logEvent("upanishad_session_completed", { module: "Mundaka Upanishad", duration: Math.ceil((data?.timeSpent || 600) / 60), data: { upanishadKey: "mundaka" } });
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
                        title="Mundaka: Realization Log"
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
