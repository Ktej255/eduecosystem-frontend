"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    BookOpen,
    Volume2,
    VolumeX,
    ChevronRight,
    ChevronLeft,
    Languages,
    Sparkles,
    Eye,
    TreeDeciduous,
    Mountain
} from "lucide-react";
import { MUNDAKA_METADATA, MUNDAKA_SHLOKAS } from "@/components/batch2/upanishads/data/mundaka-shlokas";

// Group data by Mundaka
const mundaka1Data = MUNDAKA_SHLOKAS.filter(d => d.mundaka === 1);
const mundaka2Data = MUNDAKA_SHLOKAS.filter(d => d.mundaka === 2);
const mundaka3Data = MUNDAKA_SHLOKAS.filter(d => d.mundaka === 3);

// ==========================================
// OVERVIEW COMPONENT
// ==========================================
function MundakaOverview({ lang }: { lang: "en" | "hi" }) {
    const highlights = [
        {
            title: lang === "en" ? "Two Knowledges" : "दो विद्याएं",
            desc: lang === "en" ? "Para (Higher) and Apara (Lower) Knowledge" : "परा (उच्च) और अपरा (निम्न) विद्या",
            emoji: "📚",
            color: "from-blue-400 to-cyan-500"
        },
        {
            title: lang === "en" ? "Two Birds" : "दो पक्षी",
            desc: lang === "en" ? "The Jivatma and Paramatma on the tree of life" : "जीव और ब्रह्म जीवन के वृक्ष पर",
            emoji: "🐦",
            color: "from-green-400 to-emerald-500"
        },
        {
            title: lang === "en" ? "Satyameva Jayate" : "सत्यमेव जयते",
            desc: lang === "en" ? "India's National Motto comes from this Upanishad" : "भारत का राष्ट्रीय वाक्य इसी उपनिषद से है",
            emoji: "🦁",
            color: "from-orange-400 to-amber-500"
        },
        {
            title: lang === "en" ? "Spider Analogy" : "मकड़ी उपमा",
            desc: lang === "en" ? "Universe emerges from Brahman like web from spider" : "ब्रह्मांड ब्रह्म से निकलता है जैसे जाला मकड़ी से",
            emoji: "🕷️",
            color: "from-purple-400 to-pink-500"
        }
    ];

    return (
        <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-100 italic">
                    {lang === "en" ? "The Shaved Head Upanishad" : "मुण्डक उपनिषद्"}
                </h2>
                <p className="text-emerald-400/70 leading-relaxed text-lg">
                    {lang === "en"
                        ? "Called 'Mundaka' because its wisdom 'shaves off' ignorance. This Upanishad distinguishes between Higher (Spiritual) and Lower (Material) knowledge, and contains India's national motto."
                        : "'मुण्डक' इसलिए क्योंकि इसका ज्ञान अज्ञान को 'मुंडित' (काटता) है। इस उपनिषद में परा और अपरा विद्या का भेद है, और भारत का राष्ट्रीय वाक्य भी इसी में है।"}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-900 border border-emerald-500/20 rounded-3xl p-6 text-center hover:bg-slate-800 transition-all"
                    >
                        <div className="text-5xl mb-4">{h.emoji}</div>
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
                transition={{ duration: 0.5 }}
                className="bg-slate-900 rounded-3xl border border-emerald-500/30 overflow-hidden shadow-2xl p-8 md:p-12 space-y-8"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-xl font-black text-white shadow-lg">
                        {shloka.id}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">{shloka.theme || "Verse"}</h3>
                        <p className="text-emerald-400/60 text-xs font-bold uppercase tracking-widest">Mundaka {shloka.mundaka}, Khanda {shloka.khanda}</p>
                    </div>
                </div>

                <div className="bg-slate-950/60 rounded-2xl p-6 border border-emerald-500/20">
                    <p className="text-2xl md:text-3xl text-emerald-50 text-center leading-relaxed font-serif" style={{ fontFamily: "'Noto Sans Devanagari', serif" }}>
                        {shloka.sanskrit}
                    </p>
                </div>

                <div className="bg-emerald-900/20 rounded-xl p-5 border border-emerald-500/10">
                    <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                        <Languages className="w-4 h-4" />
                        {lang === "en" ? "Translation" : "अनुवाद"}
                    </h4>
                    <p className="text-emerald-50 text-lg leading-relaxed">
                        {lang === "en" ? shloka.english : shloka.hindi}
                    </p>
                </div>

                {shloka.wordMeanings && shloka.wordMeanings.length > 0 && (
                    <div>
                        <h4 className="text-emerald-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 mb-4">
                            <BookOpen className="w-3 h-3" />
                            {lang === "en" ? "Word Meanings" : "शब्दार्थ"}
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {shloka.wordMeanings.map((m: any, i: number) => (
                                <div key={i} className="bg-slate-900/50 border border-emerald-500/10 rounded-xl p-3">
                                    <p className="text-emerald-100 font-serif text-lg mb-1">{m.devanagari}</p>
                                    <p className="text-emerald-600 text-[10px] uppercase tracking-tighter mb-1">{m.sanskrit}</p>
                                    <p className="text-slate-300 text-sm">{lang === "en" ? m.english : m.hindi}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl p-8 border border-emerald-400/40">
                    <h4 className="text-emerald-200 font-black mb-4 flex items-center gap-3">
                        <span className="bg-emerald-500 text-slate-950 w-8 h-8 rounded-lg flex items-center justify-center">💡</span>
                        {lang === "en" ? "THE ESSENCE" : "सार"}
                    </h4>
                    <p className="text-emerald-50 text-xl leading-relaxed italic font-medium">
                        {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                    </p>
                </div>
            </motion.div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="w-14 h-14 flex items-center justify-center bg-slate-900 text-emerald-400 rounded-full border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition-all disabled:opacity-20"
                >
                    <ChevronLeft className="w-7 h-7" />
                </button>
                <span className="text-emerald-400 font-bold">{currentIndex + 1} / {data.length}</span>
                <button
                    onClick={() => setCurrentIndex(prev => Math.min(data.length - 1, prev + 1))}
                    disabled={currentIndex === data.length - 1}
                    className="w-14 h-14 flex items-center justify-center bg-slate-900 text-emerald-400 rounded-full border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition-all disabled:opacity-20"
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
export default function MundakaLayout() {
    const router = useRouter();
    const [lang, setLang] = useState<"en" | "hi">("en");
    const [activeTab, setActiveTab] = useState<string>("overview");

    const tabs = [
        { id: "overview", label: lang === "en" ? "Overview" : "परिचय", icon: Eye },
        { id: "mundaka1", label: lang === "en" ? "Mundaka 1" : "मुण्डक १", icon: Mountain },
        { id: "mundaka2", label: lang === "en" ? "Mundaka 2" : "मुण्डक २", icon: TreeDeciduous },
        { id: "mundaka3", label: lang === "en" ? "Mundaka 3" : "मुण्डक ३", icon: Sparkles },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-emerald-900/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button onClick={() => router.push("/student/batch2/upanishads")} className="text-emerald-400 hover:text-emerald-300 transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div>
                            <h1 className="text-xl font-bold text-white">{MUNDAKA_METADATA.name} Upanishad</h1>
                            <p className="text-emerald-500/60 text-xs">{MUNDAKA_METADATA.nameSanskrit} • {MUNDAKA_METADATA.shlokaCount} Verses</p>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2 bg-slate-900/50 rounded-xl p-1 border border-white/5">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${activeTab === tab.id ? "bg-emerald-500 text-slate-950" : "text-emerald-600 hover:text-emerald-400"}`}
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
                                className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${lang === l ? "bg-emerald-500 text-slate-950" : "text-emerald-600 hover:text-emerald-400"}`}
                            >
                                {l.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-16">
                <AnimatePresence mode="wait">
                    <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        {activeTab === "overview" && <MundakaOverview lang={lang} />}
                        {activeTab === "mundaka1" && <WisdomStream data={mundaka1Data} lang={lang} title={lang === "en" ? "The Two Knowledges" : "दो विद्याएं"} subtitle="Mundaka 1: Para & Apara Vidya" />}
                        {activeTab === "mundaka2" && <WisdomStream data={mundaka2Data} lang={lang} title={lang === "en" ? "The Bow & Arrow" : "धनुष और बाण"} subtitle="Mundaka 2: Brahman as Target" />}
                        {activeTab === "mundaka3" && <WisdomStream data={mundaka3Data} lang={lang} title={lang === "en" ? "Two Birds & Liberation" : "दो पक्षी और मोक्ष"} subtitle="Mundaka 3: Satyameva Jayate" />}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 py-24 text-center border-t border-emerald-900/10">
                <p className="text-3xl md:text-4xl font-serif text-emerald-50 mb-4">सत्यमेव जयते नानृतम्</p>
                <p className="text-emerald-400/60 italic">{lang === "en" ? "Truth alone triumphs, not falsehood" : "सत्य ही जीतता है, असत्य नहीं"}</p>
                <p className="text-emerald-500/40 text-sm mt-2">— Mundaka Upanishad 3.1.6</p>
            </footer>
        </div>
    );
}
