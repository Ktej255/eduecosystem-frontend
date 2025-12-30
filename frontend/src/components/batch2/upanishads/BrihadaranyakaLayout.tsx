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
    Heart,
    Infinity
} from "lucide-react";
import { BRIHADARANYAKA_METADATA, BRIHADARANYAKA_SHLOKAS } from "@/components/batch2/upanishads/data/brihadaranyaka-shlokas";

// ==========================================
// OVERVIEW COMPONENT
// ==========================================
function BrihadaranyakaOverview({ lang }: { lang: "en" | "hi" }) {
    const pillars = [
        { title: lang === "en" ? "Asato Ma" : "असतो मा", desc: lang === "en" ? "The Prayer for Truth" : "सत्य की प्रार्थना", emoji: "🙏", color: "from-amber-400 to-orange-500" },
        { title: lang === "en" ? "Aham Brahmasmi" : "अहं ब्रह्मास्मि", desc: lang === "en" ? "The First Mahavakya" : "प्रथम महावाक्य", emoji: "✨", color: "from-yellow-400 to-amber-500" },
        { title: lang === "en" ? "Neti Neti" : "नेति नेति", desc: lang === "en" ? "Not this, Not this" : "यह नहीं, यह नहीं", emoji: "🚫", color: "from-red-400 to-pink-500" },
        { title: lang === "en" ? "Purnamadah" : "पूर्णमदः", desc: lang === "en" ? "Wholeness Remains" : "पूर्णता शेष रहती है", emoji: "♾️", color: "from-purple-400 to-indigo-500" },
    ];

    return (
        <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-orange-100 italic">
                    {lang === "en" ? "The Great Forest Upanishad" : "बृहदारण्यक उपनिषद्"}
                </h2>
                <p className="text-orange-400/70 leading-relaxed text-lg">
                    {lang === "en"
                        ? "The LARGEST and OLDEST Upanishad. Contains Yajnavalkya's debates, Maitreyi's love discourse, Gargi's challenge, and the first Mahavakya 'Aham Brahmasmi'."
                        : "सबसे बड़ा और सबसे पुराना उपनिषद। याज्ञवल्क्य की बहसें, मैत्रेयी का प्रेम प्रवचन, गार्गी की चुनौती, और पहला महावाक्य 'अहं ब्रह्मास्मि'।"}
                </p>
            </div>

            {/* Mahavakya */}
            <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-3xl p-8 border border-orange-500/30 text-center">
                <p className="text-orange-500/60 text-sm uppercase tracking-widest mb-2">The First Mahavakya</p>
                <p className="text-4xl md:text-5xl font-serif text-orange-100 mb-4">अहं ब्रह्मास्मि</p>
                <p className="text-orange-400/80 italic text-xl">{lang === "en" ? "I AM Brahman" : "मैं ब्रह्म हूँ"}</p>
            </div>

            {/* Famous Prayer */}
            <div className="bg-slate-900 rounded-3xl p-8 border border-orange-500/20 text-center space-y-4">
                <p className="text-3xl md:text-4xl font-serif text-orange-50 leading-relaxed">
                    असतो मा सद्गमय ।<br />
                    तमसो मा ज्योतिर्गमय ।<br />
                    मृत्योर्मा अमृतं गमय ॥
                </p>
                <p className="text-orange-400/70 italic">
                    {lang === "en"
                        ? "Lead me from Unreal to Real, from Darkness to Light, from Death to Immortality"
                        : "मुझे असत्य से सत्य, अंधकार से प्रकाश, मृत्यु से अमरता की ओर ले चलो"}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillars.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-900 border border-orange-500/20 rounded-3xl p-6 text-center hover:bg-slate-800 transition-all"
                    >
                        <div className="text-5xl mb-4">{p.emoji}</div>
                        <h3 className={`text-xl font-bold bg-gradient-to-r ${p.color} bg-clip-text text-transparent mb-2`}>{p.title}</h3>
                        <p className="text-orange-200/60 text-sm">{p.desc}</p>
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
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-orange-100 mb-2">{title}</h2>
                <p className="text-orange-400/60 font-medium tracking-widest uppercase text-xs">{subtitle}</p>
            </div>

            <motion.div
                key={shloka.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 rounded-3xl border border-orange-500/30 overflow-hidden shadow-2xl p-8 md:p-12 space-y-8"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-xl font-black text-white shadow-lg">
                        {shloka.id}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">{shloka.theme || "Verse"}</h3>
                        <p className="text-orange-400/60 text-xs font-bold uppercase tracking-widest">Chapter {shloka.chapter}, Section {shloka.section}</p>
                    </div>
                </div>

                <div className="bg-slate-950/60 rounded-2xl p-6 border border-orange-500/20">
                    <p className="text-2xl md:text-3xl text-orange-50 text-center leading-relaxed font-serif">
                        {shloka.sanskrit}
                    </p>
                </div>

                <div className="bg-orange-900/20 rounded-xl p-5 border border-orange-500/10">
                    <h4 className="text-orange-400 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                        <Languages className="w-4 h-4" />
                        {lang === "en" ? "Translation" : "अनुवाद"}
                    </h4>
                    <p className="text-orange-50 text-lg leading-relaxed">
                        {lang === "en" ? shloka.english : shloka.hindi}
                    </p>
                </div>

                {shloka.wordMeanings && shloka.wordMeanings.length > 0 && (
                    <div>
                        <h4 className="text-orange-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 mb-4">
                            <BookOpen className="w-3 h-3" />
                            {lang === "en" ? "Word Meanings" : "शब्दार्थ"}
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {shloka.wordMeanings.map((m: any, i: number) => (
                                <div key={i} className="bg-slate-900/50 border border-orange-500/10 rounded-xl p-3">
                                    <p className="text-orange-100 font-serif text-lg mb-1">{m.devanagari}</p>
                                    <p className="text-orange-600 text-[10px] uppercase tracking-tighter mb-1">{m.sanskrit}</p>
                                    <p className="text-slate-300 text-sm">{lang === "en" ? m.english : m.hindi}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl p-8 border border-orange-400/40">
                    <h4 className="text-orange-200 font-black mb-4 flex items-center gap-3">
                        <span className="bg-orange-500 text-slate-950 w-8 h-8 rounded-lg flex items-center justify-center">💡</span>
                        {lang === "en" ? "THE ESSENCE" : "सार"}
                    </h4>
                    <p className="text-orange-50 text-xl leading-relaxed italic font-medium">
                        {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                    </p>
                </div>
            </motion.div>

            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="w-14 h-14 flex items-center justify-center bg-slate-900 text-orange-400 rounded-full border border-orange-500/30 hover:bg-orange-500 hover:text-white transition-all disabled:opacity-20"
                >
                    <ChevronLeft className="w-7 h-7" />
                </button>
                <span className="text-orange-400 font-bold">{currentIndex + 1} / {data.length}</span>
                <button
                    onClick={() => setCurrentIndex(prev => Math.min(data.length - 1, prev + 1))}
                    disabled={currentIndex === data.length - 1}
                    className="w-14 h-14 flex items-center justify-center bg-slate-900 text-orange-400 rounded-full border border-orange-500/30 hover:bg-orange-500 hover:text-white transition-all disabled:opacity-20"
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
export default function BrihadaranyakaLayout() {
    const router = useRouter();
    const [lang, setLang] = useState<"en" | "hi">("en");
    const [activeTab, setActiveTab] = useState<string>("overview");

    const tabs = [
        { id: "overview", label: lang === "en" ? "Overview" : "परिचय", icon: Eye },
        { id: "verses", label: lang === "en" ? "10 Pillars" : "दस स्तंभ", icon: Sparkles },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-orange-900/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button onClick={() => router.push("/student/batch2/upanishads")} className="text-orange-400 hover:text-orange-300">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div>
                            <h1 className="text-xl font-bold text-white">{BRIHADARANYAKA_METADATA.name} Upanishad</h1>
                            <p className="text-orange-500/60 text-xs">{BRIHADARANYAKA_METADATA.nameSanskrit} • The Great Forest</p>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2 bg-slate-900/50 rounded-xl p-1 border border-white/5">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${activeTab === tab.id ? "bg-orange-500 text-slate-950" : "text-orange-600 hover:text-orange-400"}`}
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
                                className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${lang === l ? "bg-orange-500 text-slate-950" : "text-orange-600 hover:text-orange-400"}`}
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
                        {activeTab === "overview" && <BrihadaranyakaOverview lang={lang} />}
                        {activeTab === "verses" && <WisdomStream data={BRIHADARANYAKA_SHLOKAS} lang={lang} title={lang === "en" ? "The Ten Pillars" : "दस स्तंभ"} subtitle="Essential Wisdom from the Great Forest" />}
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="bg-slate-950 py-24 text-center border-t border-orange-900/10">
                <p className="text-3xl md:text-4xl font-serif text-orange-50 mb-4">पूर्णमदः पूर्णमिदम्</p>
                <p className="text-orange-400/60 italic">{lang === "en" ? "That is Whole, This is Whole" : "वह पूर्ण है, यह पूर्ण है"}</p>
                <p className="text-orange-500/40 text-sm mt-2">— Brihadaranyaka Upanishad 5.1.1</p>
            </footer>
        </div>
    );
}
