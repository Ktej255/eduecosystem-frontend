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
    TreeDeciduous,
    Droplets
} from "lucide-react";
import { CHANDOGYA_METADATA, CHANDOGYA_SHLOKAS } from "@/components/batch2/upanishads/data/chandogya-shlokas";

// ==========================================
// OVERVIEW COMPONENT
// ==========================================
function ChandogyaOverview({ lang }: { lang: "en" | "hi" }) {
    const analogies = [
        { title: lang === "en" ? "Clay Analogy" : "मिट्टी उपमा", desc: lang === "en" ? "All pots are just clay" : "सब घड़े केवल मिट्टी हैं", emoji: "🏺", color: "from-amber-400 to-orange-500" },
        { title: lang === "en" ? "Banyan Seed" : "बरगद बीज", desc: lang === "en" ? "Invisible essence creates huge tree" : "अदृश्य सार से विशाल वृक्ष", emoji: "🌳", color: "from-green-400 to-emerald-500" },
        { title: lang === "en" ? "Salt Water" : "नमक पानी", desc: lang === "en" ? "Brahman pervades everything" : "ब्रह्म सब में व्याप्त है", emoji: "🧂", color: "from-blue-400 to-cyan-500" },
        { title: lang === "en" ? "Blindfolded Man" : "आंखों पर पट्टी", desc: lang === "en" ? "You need a Guru" : "तुम्हें गुरु चाहिए", emoji: "🧭", color: "from-purple-400 to-indigo-500" },
    ];

    return (
        <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-teal-100 italic">
                    {lang === "en" ? "That Thou Art" : "तत् त्वम् असि"}
                </h2>
                <p className="text-teal-400/70 leading-relaxed text-lg">
                    {lang === "en"
                        ? "One of the two largest Upanishads. Sage Uddalaka teaches his son Shvetaketu the ultimate truth through powerful analogies. Contains the Mahavakya 'Tat Tvam Asi'."
                        : "दो सबसे बड़े उपनिषदों में से एक। ऋषि उद्दालक अपने पुत्र श्वेतकेतु को शक्तिशाली उपमाओं से परम सत्य सिखाते हैं। महावाक्य 'तत्त्वमसि' इसमें है।"}
                </p>
            </div>

            {/* Mahavakya */}
            <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-3xl p-8 border border-teal-500/30 text-center">
                <p className="text-teal-500/60 text-sm uppercase tracking-widest mb-2">The Fourth Mahavakya</p>
                <p className="text-4xl md:text-5xl font-serif text-teal-100 mb-4">तत् त्वम् असि</p>
                <p className="text-teal-400/80 italic text-xl">{lang === "en" ? "That Thou Art — You ARE Brahman!" : "वह तुम हो — तुम ब्रह्म हो!"}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {analogies.map((a, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-900 border border-teal-500/20 rounded-3xl p-6 text-center hover:bg-slate-800 transition-all"
                    >
                        <div className="text-5xl mb-4">{a.emoji}</div>
                        <h3 className={`text-xl font-bold bg-gradient-to-r ${a.color} bg-clip-text text-transparent mb-2`}>{a.title}</h3>
                        <p className="text-teal-200/60 text-sm">{a.desc}</p>
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
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-100 mb-2">{title}</h2>
                <p className="text-teal-400/60 font-medium tracking-widest uppercase text-xs">{subtitle}</p>
            </div>

            <motion.div
                key={shloka.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 rounded-3xl border border-teal-500/30 overflow-hidden shadow-2xl p-8 md:p-12 space-y-8"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-xl font-black text-white shadow-lg">
                        {shloka.id}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">{shloka.theme || "Verse"}</h3>
                        <p className="text-teal-400/60 text-xs font-bold uppercase tracking-widest">Chapter {shloka.chapter}, Section {shloka.section}</p>
                    </div>
                </div>

                <div className="bg-slate-950/60 rounded-2xl p-6 border border-teal-500/20">
                    <p className="text-2xl md:text-3xl text-teal-50 text-center leading-relaxed font-serif">
                        {shloka.sanskrit}
                    </p>
                </div>

                <div className="bg-teal-900/20 rounded-xl p-5 border border-teal-500/10">
                    <h4 className="text-teal-400 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                        <Languages className="w-4 h-4" />
                        {lang === "en" ? "Translation" : "अनुवाद"}
                    </h4>
                    <p className="text-teal-50 text-lg leading-relaxed">
                        {lang === "en" ? shloka.english : shloka.hindi}
                    </p>
                </div>

                {shloka.wordMeanings && shloka.wordMeanings.length > 0 && (
                    <div>
                        <h4 className="text-teal-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 mb-4">
                            <BookOpen className="w-3 h-3" />
                            {lang === "en" ? "Word Meanings" : "शब्दार्थ"}
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {shloka.wordMeanings.map((m: any, i: number) => (
                                <div key={i} className="bg-slate-900/50 border border-teal-500/10 rounded-xl p-3">
                                    <p className="text-teal-100 font-serif text-lg mb-1">{m.devanagari}</p>
                                    <p className="text-teal-600 text-[10px] uppercase tracking-tighter mb-1">{m.sanskrit}</p>
                                    <p className="text-slate-300 text-sm">{lang === "en" ? m.english : m.hindi}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl p-8 border border-teal-400/40">
                    <h4 className="text-teal-200 font-black mb-4 flex items-center gap-3">
                        <span className="bg-teal-500 text-slate-950 w-8 h-8 rounded-lg flex items-center justify-center">💡</span>
                        {lang === "en" ? "THE ESSENCE" : "सार"}
                    </h4>
                    <p className="text-teal-50 text-xl leading-relaxed italic font-medium">
                        {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                    </p>
                </div>
            </motion.div>

            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="w-14 h-14 flex items-center justify-center bg-slate-900 text-teal-400 rounded-full border border-teal-500/30 hover:bg-teal-500 hover:text-white transition-all disabled:opacity-20"
                >
                    <ChevronLeft className="w-7 h-7" />
                </button>
                <span className="text-teal-400 font-bold">{currentIndex + 1} / {data.length}</span>
                <button
                    onClick={() => setCurrentIndex(prev => Math.min(data.length - 1, prev + 1))}
                    disabled={currentIndex === data.length - 1}
                    className="w-14 h-14 flex items-center justify-center bg-slate-900 text-teal-400 rounded-full border border-teal-500/30 hover:bg-teal-500 hover:text-white transition-all disabled:opacity-20"
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
export default function ChandogyaLayout() {
    const router = useRouter();
    const [lang, setLang] = useState<"en" | "hi">("en");
    const [activeTab, setActiveTab] = useState<string>("overview");

    const tabs = [
        { id: "overview", label: lang === "en" ? "Overview" : "परिचय", icon: Eye },
        { id: "verses", label: lang === "en" ? "Tat Tvam Asi" : "तत्त्वमसि", icon: Sparkles },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-teal-900/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button onClick={() => router.push("/student/batch2/upanishads")} className="text-teal-400 hover:text-teal-300">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div>
                            <h1 className="text-xl font-bold text-white">{CHANDOGYA_METADATA.name} Upanishad</h1>
                            <p className="text-teal-500/60 text-xs">{CHANDOGYA_METADATA.nameSanskrit} • Chapter 6 Highlights</p>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2 bg-slate-900/50 rounded-xl p-1 border border-white/5">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${activeTab === tab.id ? "bg-teal-500 text-slate-950" : "text-teal-600 hover:text-teal-400"}`}
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
                                className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${lang === l ? "bg-teal-500 text-slate-950" : "text-teal-600 hover:text-teal-400"}`}
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
                        {activeTab === "overview" && <ChandogyaOverview lang={lang} />}
                        {activeTab === "verses" && <WisdomStream data={CHANDOGYA_SHLOKAS} lang={lang} title={lang === "en" ? "The Teaching of Uddalaka" : "उद्दालक का उपदेश"} subtitle="Chapter 6: Sadvidya - The Teaching of Being" />}
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="bg-slate-950 py-24 text-center border-t border-teal-900/10">
                <p className="text-3xl md:text-4xl font-serif text-teal-50 mb-4">तत्त्वमसि श्वेतकेतो</p>
                <p className="text-teal-400/60 italic">{lang === "en" ? "That Thou Art, O Shvetaketu!" : "वह तुम हो, हे श्वेतकेतु!"}</p>
                <p className="text-teal-500/40 text-sm mt-2">— Chandogya Upanishad 6.8.7</p>
            </footer>
        </div>
    );
}
