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
    Sparkles,
    Brain,
    Baby
} from "lucide-react";
import { AITAREYA_METADATA, AITAREYA_SHLOKAS } from "@/components/batch2/upanishads/data/aitareya-shlokas";

// Group by chapter
const chapter1 = AITAREYA_SHLOKAS.filter(d => d.chapter === 1);
const chapter2 = AITAREYA_SHLOKAS.filter(d => d.chapter === 2);
const chapter3 = AITAREYA_SHLOKAS.filter(d => d.chapter === 3);

// ==========================================
// OVERVIEW COMPONENT
// ==========================================
function AitareyaOverview({ lang }: { lang: "en" | "hi" }) {
    const themes = [
        { title: lang === "en" ? "Creation of Worlds" : "लोकों की सृष्टि", desc: lang === "en" ? "How the One became Many" : "एक से अनेक कैसे बने", emoji: "🌍", color: "from-blue-400 to-cyan-500" },
        { title: lang === "en" ? "Human Masterpiece" : "मानव उत्कृष्ट कृति", desc: lang === "en" ? "Gods chose the human body!" : "देवताओं ने मानव शरीर चुना!", emoji: "👤", color: "from-amber-400 to-orange-500" },
        { title: lang === "en" ? "Three Births" : "तीन जन्म", desc: lang === "en" ? "Conception, Birth, Rebirth" : "गर्भाधान, जन्म, पुनर्जन्म", emoji: "🔄", color: "from-green-400 to-emerald-500" },
        { title: lang === "en" ? "Prajnanam Brahma" : "प्रज्ञानं ब्रह्म", desc: lang === "en" ? "Consciousness IS Brahman!" : "चेतना ही ब्रह्म है!", emoji: "💫", color: "from-yellow-400 to-amber-500" },
    ];

    return (
        <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-sky-100 italic">
                    {lang === "en" ? "Creation & Consciousness" : "सृष्टि और चेतना"}
                </h2>
                <p className="text-sky-400/70 leading-relaxed text-lg">
                    {lang === "en"
                        ? "This Rig Vedic Upanishad describes creation in vivid detail and contains the Mahavakya 'Prajnanam Brahma' - Consciousness is Brahman."
                        : "यह ऋग्वैदिक उपनिषद सृष्टि का विस्तृत वर्णन करता है और महावाक्य 'प्रज्ञानं ब्रह्म' - चेतना ही ब्रह्म है, इसमें है।"}
                </p>
            </div>

            {/* Mahavakya */}
            <div className="bg-gradient-to-r from-sky-500/20 to-cyan-500/20 rounded-3xl p-8 border border-sky-500/30 text-center">
                <p className="text-sky-500/60 text-sm uppercase tracking-widest mb-2">The Third Mahavakya</p>
                <p className="text-4xl md:text-5xl font-serif text-sky-100 mb-4">प्रज्ञानं ब्रह्म</p>
                <p className="text-sky-400/80 italic text-xl">{lang === "en" ? "Consciousness is Brahman" : "चेतना ही ब्रह्म है"}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {themes.map((t, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-900 border border-sky-500/20 rounded-3xl p-6 text-center hover:bg-slate-800 transition-all"
                    >
                        <div className="text-5xl mb-4">{t.emoji}</div>
                        <h3 className={`text-xl font-bold bg-gradient-to-r ${t.color} bg-clip-text text-transparent mb-2`}>{t.title}</h3>
                        <p className="text-sky-200/60 text-sm">{t.desc}</p>
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
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-sky-100 mb-2">{title}</h2>
                <p className="text-sky-400/60 font-medium tracking-widest uppercase text-xs">{subtitle}</p>
            </div>

            <motion.div
                key={shloka.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 rounded-3xl border border-sky-500/30 overflow-hidden shadow-2xl p-8 md:p-12 space-y-8"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center text-xl font-black text-white shadow-lg">
                        {shloka.id}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">{shloka.theme || "Verse"}</h3>
                        <p className="text-sky-400/60 text-xs font-bold uppercase tracking-widest">Chapter {shloka.chapter}, Section {shloka.section}</p>
                    </div>
                </div>

                <div className="bg-slate-950/60 rounded-2xl p-6 border border-sky-500/20">
                    <p className="text-2xl md:text-3xl text-sky-50 text-center leading-relaxed font-serif">
                        {shloka.sanskrit}
                    </p>
                </div>

                <div className="bg-sky-900/20 rounded-xl p-5 border border-sky-500/10">
                    <h4 className="text-sky-400 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                        <Languages className="w-4 h-4" />
                        {lang === "en" ? "Translation" : "अनुवाद"}
                    </h4>
                    <p className="text-sky-50 text-lg leading-relaxed">
                        {lang === "en" ? shloka.english : shloka.hindi}
                    </p>
                </div>

                {shloka.wordMeanings && shloka.wordMeanings.length > 0 && (
                    <div>
                        <h4 className="text-sky-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 mb-4">
                            <BookOpen className="w-3 h-3" />
                            {lang === "en" ? "Word Meanings" : "शब्दार्थ"}
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {shloka.wordMeanings.map((m: any, i: number) => (
                                <div key={i} className="bg-slate-900/50 border border-sky-500/10 rounded-xl p-3">
                                    <p className="text-sky-100 font-serif text-lg mb-1">{m.devanagari}</p>
                                    <p className="text-sky-600 text-[10px] uppercase tracking-tighter mb-1">{m.sanskrit}</p>
                                    <p className="text-slate-300 text-sm">{lang === "en" ? m.english : m.hindi}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-2xl p-8 border border-sky-400/40">
                    <h4 className="text-sky-200 font-black mb-4 flex items-center gap-3">
                        <span className="bg-sky-500 text-slate-950 w-8 h-8 rounded-lg flex items-center justify-center">💡</span>
                        {lang === "en" ? "THE ESSENCE" : "सार"}
                    </h4>
                    <p className="text-sky-50 text-xl leading-relaxed italic font-medium">
                        {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                    </p>
                </div>
            </motion.div>

            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="w-14 h-14 flex items-center justify-center bg-slate-900 text-sky-400 rounded-full border border-sky-500/30 hover:bg-sky-500 hover:text-white transition-all disabled:opacity-20"
                >
                    <ChevronLeft className="w-7 h-7" />
                </button>
                <span className="text-sky-400 font-bold">{currentIndex + 1} / {data.length}</span>
                <button
                    onClick={() => setCurrentIndex(prev => Math.min(data.length - 1, prev + 1))}
                    disabled={currentIndex === data.length - 1}
                    className="w-14 h-14 flex items-center justify-center bg-slate-900 text-sky-400 rounded-full border border-sky-500/30 hover:bg-sky-500 hover:text-white transition-all disabled:opacity-20"
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
export default function AitareyaLayout() {
    const router = useRouter();
    const [lang, setLang] = useState<"en" | "hi">("en");
    const [activeTab, setActiveTab] = useState<string>("overview");

    const tabs = [
        { id: "overview", label: lang === "en" ? "Overview" : "परिचय", icon: Eye },
        { id: "chapter1", label: lang === "en" ? "Creation" : "सृष्टि", icon: Sparkles },
        { id: "chapter2", label: lang === "en" ? "Three Births" : "तीन जन्म", icon: Baby },
        { id: "chapter3", label: lang === "en" ? "Mahavakya" : "महावाक्य", icon: Brain },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-sky-900/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button onClick={() => router.push("/student/batch2/upanishads")} className="text-sky-400 hover:text-sky-300">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div>
                            <h1 className="text-xl font-bold text-white">{AITAREYA_METADATA.name} Upanishad</h1>
                            <p className="text-sky-500/60 text-xs">{AITAREYA_METADATA.nameSanskrit} • {AITAREYA_METADATA.shlokaCount} Verses</p>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2 bg-slate-900/50 rounded-xl p-1 border border-white/5">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${activeTab === tab.id ? "bg-sky-500 text-slate-950" : "text-sky-600 hover:text-sky-400"}`}
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
                                className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${lang === l ? "bg-sky-500 text-slate-950" : "text-sky-600 hover:text-sky-400"}`}
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
                        {activeTab === "overview" && <AitareyaOverview lang={lang} />}
                        {activeTab === "chapter1" && <WisdomStream data={chapter1} lang={lang} title={lang === "en" ? "The Creation" : "सृष्टि"} subtitle="Chapter 1: From One to Many" />}
                        {activeTab === "chapter2" && <WisdomStream data={chapter2} lang={lang} title={lang === "en" ? "The Three Births" : "तीन जन्म"} subtitle="Chapter 2: Cycle of Life" />}
                        {activeTab === "chapter3" && <WisdomStream data={chapter3} lang={lang} title={lang === "en" ? "Consciousness is Brahman" : "प्रज्ञानं ब्रह्म"} subtitle="Chapter 3: The Mahavakya" />}
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="bg-slate-950 py-24 text-center border-t border-sky-900/10">
                <p className="text-3xl md:text-4xl font-serif text-sky-50 mb-4">प्रज्ञानं ब्रह्म</p>
                <p className="text-sky-400/60 italic">{lang === "en" ? "Consciousness is Brahman" : "चेतना ही ब्रह्म है"}</p>
                <p className="text-sky-500/40 text-sm mt-2">— Aitareya Upanishad 3.1.3</p>
            </footer>
        </div>
    );
}
