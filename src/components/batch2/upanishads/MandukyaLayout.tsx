"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    BookOpen,
    ChevronRight,
    ChevronLeft,
    Languages,
    Eye,
    Moon,
    Sun,
    Cloud,
    Sparkles
} from "lucide-react";
import { MANDUKYA_METADATA, MANDUKYA_SHLOKAS } from "@/components/batch2/upanishads/data/mandukya-shlokas";

// ==========================================
// OVERVIEW COMPONENT
// ==========================================
function MandukyaOverview({ lang }: { lang: "en" | "hi" }) {
    const states = [
        { name: lang === "en" ? "Waking (A)" : "जाग्रत (अ)", sound: "A", desc: lang === "en" ? "Vaishvanara - External consciousness" : "वैश्वानर - बाह्य चेतना", emoji: "☀️", color: "from-yellow-400 to-orange-500" },
        { name: lang === "en" ? "Dreaming (U)" : "स्वप्न (उ)", sound: "U", desc: lang === "en" ? "Taijasa - Internal consciousness" : "तैजस - आंतरिक चेतना", emoji: "🌙", color: "from-purple-400 to-indigo-500" },
        { name: lang === "en" ? "Deep Sleep (M)" : "सुषुप्ति (म)", sound: "M", desc: lang === "en" ? "Prajna - Blissful unconsciousness" : "प्राज्ञ - आनंदमय अचेतना", emoji: "🌑", color: "from-blue-400 to-cyan-500" },
        { name: lang === "en" ? "Turiya (Silence)" : "तुरीय (मौन)", sound: "∅", desc: lang === "en" ? "The Fourth - Pure consciousness" : "चतुर्थ - शुद्ध चेतना", emoji: "✨", color: "from-amber-400 to-yellow-500" },
    ];

    return (
        <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-violet-100 italic">
                    {lang === "en" ? "The Essence of OM" : "ॐ का सार"}
                </h2>
                <p className="text-violet-400/70 leading-relaxed text-lg">
                    {lang === "en"
                        ? "The shortest yet most profound Upanishad. Only 12 verses! It analyzes OM as the key to understanding the Four States of Consciousness."
                        : "सबसे छोटा पर सबसे गहन उपनिषद। केवल 12 श्लोक! यह ॐ को चेतना की चार अवस्थाओं की कुंजी के रूप में विश्लेषित करता है।"}
                </p>
                <div className="text-8xl font-bold text-violet-300 py-8">ॐ</div>
                <p className="text-violet-500 font-bold tracking-widest">A + U + M + SILENCE = OM</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {states.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-900 border border-violet-500/20 rounded-3xl p-6 text-center hover:bg-slate-800 transition-all"
                    >
                        <div className="text-5xl mb-4">{s.emoji}</div>
                        <div className={`text-3xl font-black bg-gradient-to-r ${s.color} bg-clip-text text-transparent mb-2`}>{s.sound}</div>
                        <h3 className="text-lg font-bold text-white mb-2">{s.name}</h3>
                        <p className="text-violet-200/60 text-sm">{s.desc}</p>
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
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-violet-100 mb-2">{title}</h2>
                <p className="text-violet-400/60 font-medium tracking-widest uppercase text-xs">{subtitle}</p>
            </div>

            <motion.div
                key={shloka.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 rounded-3xl border border-violet-500/30 overflow-hidden shadow-2xl p-8 md:p-12 space-y-8"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-xl font-black text-white shadow-lg">
                        {shloka.id}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">{shloka.theme || "Verse"}</h3>
                        <p className="text-violet-400/60 text-xs font-bold uppercase tracking-widest">Mandukya Upanishad • Verse {shloka.verse}</p>
                    </div>
                </div>

                <div className="bg-slate-950/60 rounded-2xl p-6 border border-violet-500/20">
                    <p className="text-2xl md:text-3xl text-violet-50 text-center leading-relaxed font-serif">
                        {shloka.sanskrit}
                    </p>
                </div>

                <div className="bg-violet-900/20 rounded-xl p-5 border border-violet-500/10">
                    <h4 className="text-violet-400 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                        <Languages className="w-4 h-4" />
                        {lang === "en" ? "Translation" : "अनुवाद"}
                    </h4>
                    <p className="text-violet-50 text-lg leading-relaxed">
                        {lang === "en" ? shloka.english : shloka.hindi}
                    </p>
                </div>

                {shloka.wordMeanings && shloka.wordMeanings.length > 0 && (
                    <div>
                        <h4 className="text-violet-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 mb-4">
                            <BookOpen className="w-3 h-3" />
                            {lang === "en" ? "Word Meanings" : "शब्दार्थ"}
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {shloka.wordMeanings.map((m: any, i: number) => (
                                <div key={i} className="bg-slate-900/50 border border-violet-500/10 rounded-xl p-3">
                                    <p className="text-violet-100 font-serif text-lg mb-1">{m.devanagari}</p>
                                    <p className="text-violet-600 text-[10px] uppercase tracking-tighter mb-1">{m.sanskrit}</p>
                                    <p className="text-slate-300 text-sm">{lang === "en" ? m.english : m.hindi}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl p-8 border border-violet-400/40">
                    <h4 className="text-violet-200 font-black mb-4 flex items-center gap-3">
                        <span className="bg-violet-500 text-slate-950 w-8 h-8 rounded-lg flex items-center justify-center">💡</span>
                        {lang === "en" ? "THE ESSENCE" : "सार"}
                    </h4>
                    <p className="text-violet-50 text-xl leading-relaxed italic font-medium">
                        {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                    </p>
                </div>
            </motion.div>

            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="w-14 h-14 flex items-center justify-center bg-slate-900 text-violet-400 rounded-full border border-violet-500/30 hover:bg-violet-500 hover:text-white transition-all disabled:opacity-20"
                >
                    <ChevronLeft className="w-7 h-7" />
                </button>
                <span className="text-violet-400 font-bold">{currentIndex + 1} / {data.length}</span>
                <button
                    onClick={() => setCurrentIndex(prev => Math.min(data.length - 1, prev + 1))}
                    disabled={currentIndex === data.length - 1}
                    className="w-14 h-14 flex items-center justify-center bg-slate-900 text-violet-400 rounded-full border border-violet-500/30 hover:bg-violet-500 hover:text-white transition-all disabled:opacity-20"
                >
                    <ChevronRight className="w-7 h-7" />
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

    const tabs = [
        { id: "overview", label: lang === "en" ? "Overview" : "परिचय", icon: Eye },
        { id: "verses", label: lang === "en" ? "All 12 Verses" : "सभी 12 श्लोक", icon: Sparkles },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-violet-900/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button onClick={() => router.push("/student/batch2/upanishads")} className="text-violet-400 hover:text-violet-300">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div>
                            <h1 className="text-xl font-bold text-white">{MANDUKYA_METADATA.name} Upanishad</h1>
                            <p className="text-violet-500/60 text-xs">{MANDUKYA_METADATA.nameSanskrit} • {MANDUKYA_METADATA.shlokaCount} Verses</p>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2 bg-slate-900/50 rounded-xl p-1 border border-white/5">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${activeTab === tab.id ? "bg-violet-500 text-slate-950" : "text-violet-600 hover:text-violet-400"}`}
                            >
                                <tab.icon className="w-4 h-4" />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex bg-slate-900/50 rounded-xl p-1 border border-white/5">
                        {(["en", "hi"] as const).map((l) => (
                            <button
                                key={l}
                                onClick={() => setLang(l)}
                                className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${lang === l ? "bg-violet-500 text-slate-950" : "text-violet-600 hover:text-violet-400"}`}
                            >
                                {l.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-16">
                <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        {activeTab === "overview" && <MandukyaOverview lang={lang} />}
                        {activeTab === "verses" && <WisdomStream data={MANDUKYA_SHLOKAS} lang={lang} title={lang === "en" ? "OM and Consciousness" : "ॐ और चेतना"} subtitle="The Complete Mandukya Upanishad" />}
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="bg-slate-950 py-24 text-center border-t border-violet-900/10">
                <p className="text-6xl mb-6">ॐ</p>
                <p className="text-3xl md:text-4xl font-serif text-violet-50 mb-4">शान्तं शिवमद्वैतम्</p>
                <p className="text-violet-400/60 italic">{lang === "en" ? "Peaceful, Auspicious, Non-dual" : "शांत, कल्याणकारी, अद्वैत"}</p>
                <p className="text-violet-500/40 text-sm mt-2">— Mandukya Upanishad, Verse 7</p>
            </footer>
        </div>
    );
}
