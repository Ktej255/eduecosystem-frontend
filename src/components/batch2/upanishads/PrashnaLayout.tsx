"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    BookOpen,
    HelpCircle,
    Volume2,
    VolumeX,
    ChevronRight,
    ChevronLeft,
    Languages,
    Sparkles,
    Flame,
    Wind,
    Sun,
    Moon,
    Zap,
    Info,
    User,
    Sprout,
    ArrowRight
} from "lucide-react";
import { prashnaData, getPrashnaVerses } from "@/components/batch2/upanishads/data/prashna-shlokas";
import { getPrashnaShlokaImage } from "@/components/batch2/upanishads/data/prashna-images";
import PrashnaResearchReport from "@/components/batch2/upanishads/PrashnaResearchReport";

// ==========================================
// PRASHNA OVERVIEW COMPONENT
// ==========================================
function PrashnaOverview({ lang, setActiveTab }: { lang: "en" | "hi", setActiveTab: (tab: any) => void }) {
    const questions = [
        {
            title: lang === "en" ? "Source of Life" : "जीवन का स्रोत",
            desc: lang === "en" ? "Kabandhi asks: Where do all beings come from? (Rayi & Prana)" : "कबन्धी पूछता है: सभी प्राणी कहाँ से आते हैं? (रयि और प्राण)",
            icon: Sprout,
            color: "from-emerald-400 to-green-500",
            q: 1
        },
        {
            title: lang === "en" ? "Nature of Prana" : "प्राण का स्वरूप",
            desc: lang === "en" ? "Bhargava asks: Who sustains the body? How is Prana supreme?" : "भार्गव पूछता है: शरीर को कौन धारण करता है? प्राण कैसे श्रेष्ठ है?",
            icon: Wind,
            color: "from-teal-400 to-cyan-500",
            q: 2
        },
        {
            title: lang === "en" ? "Origin of Prana" : "प्राण की उत्पत्ति",
            desc: lang === "en" ? "Kausalya asks: Where is Prana born? How does it enter?" : "कौसल्य पूछता है: प्राण कहाँ से उत्पन्न होता है? यह कैसे प्रवेश करता है?",
            icon: Sparkles,
            color: "from-blue-400 to-indigo-500",
            q: 3
        },
        {
            title: lang === "en" ? "Sleep & Dreams" : "नींद और सपने",
            desc: lang === "en" ? "Gargya asks: Who sleeps? Who dreams? Who is happy?" : "गार्ग्य पूछता है: कौन सोता है? कौन सपना देखता है? कौन खुश होता है?",
            icon: Moon,
            color: "from-violet-400 to-purple-500",
            q: 4
        },
        {
            title: lang === "en" ? "Meditation on OM" : "ओम ध्यान",
            desc: lang === "en" ? "Satyakama asks: What world is won by meditating on OM?" : "सत्यकाम पूछता है: ओम के ध्यान से कौन सा लोक जीता जाता है?",
            icon: Zap,
            color: "from-amber-400 to-orange-500",
            q: 5
        },
        {
            title: lang === "en" ? "The Purusha" : "षोडशकल पुरुष",
            desc: lang === "en" ? "Sukesha asks: Where is the Person with sixteen parts?" : "सुकेश पूछता है: सोलह कलाओं वाला पुरुष कहाँ है?",
            icon: User,
            color: "from-rose-400 to-red-500",
            q: 6
        }
    ];

    return (
        <div className="space-y-16">
            {/* Opening Statement */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-100 italic">
                    {lang === "en" ? "The Six Great Questions" : "छह महान प्रश्न"}
                </h2>
                <p className="text-emerald-400/70 leading-relaxed text-lg">
                    {lang === "en"
                        ? "Six seekers approached the Sage Pippalada with firewood in hand. They asked him about the deepest mysteries of life, energy, and the self. This dialogue is the Prashna Upanishad."
                        : "छह साधक हाथ में समिधा लेकर ऋषि पिप्पलाद के पास पहुंचे। उन्होंने उनसे जीवन, ऊर्जा और आत्मा के गहरे रहस्यों के बारे में पूछा। यह संवाद प्रश्नोपनिषद् है।"}
                </p>
            </div>

            {/* Research CTA */}
            <div className="flex justify-center">
                <button
                    onClick={() => setActiveTab('research')}
                    className="flex items-center gap-3 px-8 py-4 bg-slate-900 border border-emerald-500/30 rounded-full text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all group shadow-xl hover:shadow-emerald-500/20"
                >
                    <BookOpen className="w-5 h-5" />
                    <span className="font-bold uppercase tracking-widest text-sm">
                        {lang === "en" ? "Read Full Research Report" : "पूर्ण शोध रिपोर्ट पढ़ें"}
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* The Six Questions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {questions.map((q, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-900 border border-emerald-500/20 rounded-3xl p-8 hover:bg-slate-800 transition-all group relative overflow-hidden"
                    >
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${q.color} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity`} />
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${q.color} flex items-center justify-center mb-6 shadow-lg`}>
                            <q.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{q.title}</h3>
                        <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-3">Question {q.q}</p>
                        <p className="text-emerald-200/60 text-sm leading-relaxed">{q.desc}</p>
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
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-emerald-100 mb-2">{title}</h2>
                <p className="text-emerald-400/60 font-medium tracking-widest uppercase text-xs">{subtitle}</p>
            </div>

            <motion.div
                key={shloka.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900 rounded-3xl border border-emerald-500/30 overflow-hidden shadow-2xl backdrop-blur-md"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Text Section */}
                    <div className="p-8 md:p-12 space-y-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-xl font-black text-white shadow-lg">
                                    {shloka.verse}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{shloka.theme || "Verse"}</h3>
                                    <p className="text-emerald-400/60 text-xs font-bold uppercase tracking-widest">Prashna {shloka.prashna} • Verse {shloka.verse}</p>
                                </div>
                            </div>
                        </div>

                        {/* Sanskrit Block */}
                        <div className="bg-slate-950/60 rounded-2xl p-6 border border-emerald-500/20 shadow-inner">
                            <p className="text-2xl md:text-3xl text-emerald-50 text-center leading-relaxed font-serif" style={{ fontFamily: "'Noto Sans Devanagari', serif" }}>
                                {shloka.sanskrit}
                            </p>
                        </div>

                        {/* Translation Block */}
                        <div className="space-y-6">
                            <div className="bg-emerald-900/20 rounded-xl p-5 border border-emerald-500/10">
                                <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                    <Languages className="w-4 h-4" />
                                    {lang === "en" ? "Translation" : "अनुवाद"}
                                </h4>
                                <p className="text-emerald-50 text-lg leading-relaxed">
                                    {lang === "en" ? shloka.english : shloka.hindi}
                                </p>
                            </div>

                            {/* Word Meanings */}
                            {shloka.wordMeanings && shloka.wordMeanings.length > 0 && (
                                <div>
                                    <h4 className="text-emerald-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 mb-4">
                                        <BookOpen className="w-3 h-3" />
                                        {lang === "en" ? "Word Meanings" : "शब्दार्थ"}
                                    </h4>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {shloka.wordMeanings.map((m: any, i: number) => (
                                            <div key={i} className="bg-slate-900/50 border border-emerald-500/10 rounded-xl p-3 hover:border-emerald-500/30 transition-all">
                                                <p className="text-emerald-100 font-serif text-lg mb-1">{m.devanagari}</p>
                                                <p className="text-emerald-600 text-[10px] uppercase tracking-tighter mb-1">{m.sanskrit}</p>
                                                <p className="text-slate-300 text-sm">{lang === "en" ? m.english : m.hindi}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* The Essence */}
                            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl p-8 border border-emerald-400/40 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Flame className="w-12 h-12 text-emerald-400" />
                                </div>
                                <h4 className="text-emerald-200 font-black mb-4 flex items-center gap-3">
                                    <span className="bg-emerald-500 text-slate-950 w-8 h-8 rounded-lg flex items-center justify-center text-lg">💡</span>
                                    {lang === "en" ? "THE ESSENCE" : "सार"}
                                </h4>
                                <p className="text-emerald-50 text-xl leading-relaxed italic font-medium relative z-10">
                                    {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Visual Section */}
                    <div className="relative bg-black/40 min-h-[500px] flex items-center justify-center overflow-hidden border-l border-emerald-500/10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 to-transparent pointer-events-none" />

                        {image ? (
                            <motion.img
                                src={image}
                                alt={shloka.theme}
                                className="w-full h-full object-contain p-8 relative z-10"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                            />
                        ) : (
                            <div className="text-center p-12 relative z-10">
                                <motion.div
                                    animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="text-8xl mb-6"
                                >
                                    🌱
                                </motion.div>
                                <p className="text-emerald-400/50 font-medium italic max-w-xs mx-auto">{shloka.nanoBananaPrompt}</p>
                            </div>
                        )}

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                            <span className="px-4 py-1.5 bg-black/60 rounded-full text-[10px] text-emerald-400 font-black tracking-[0.2em] uppercase border border-emerald-500/30 backdrop-blur-md">
                                {shloka.theme || `Verse ${shloka.verse}`}
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Pagination */}
            <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                        disabled={currentIndex === 0}
                        className="w-14 h-14 flex items-center justify-center bg-slate-900 text-emerald-400 rounded-full border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed group"
                    >
                        <ChevronLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <div className="flex flex-wrap justify-center gap-2 max-w-md">
                        {data.map((s, i) => (
                            <button
                                key={s.id}
                                onClick={() => setCurrentIndex(i)}
                                className={`w-10 h-10 rounded-xl text-sm font-black transition-all border ${i === currentIndex
                                    ? "bg-emerald-500 border-emerald-300 text-white scale-110 shadow-lg shadow-emerald-500/40"
                                    : "bg-slate-900 border-emerald-500/20 text-emerald-700 hover:border-emerald-500"
                                    }`}
                            >
                                {s.verse}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setCurrentIndex(prev => Math.min(data.length - 1, prev + 1))}
                        disabled={currentIndex === data.length - 1}
                        className="w-14 h-14 flex items-center justify-center bg-slate-900 text-emerald-400 rounded-full border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed group"
                    >
                        <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                <div className="flex items-center gap-3">
                    <div className="h-1 w-48 bg-slate-900 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-emerald-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentIndex + 1) / data.length) * 100}%` }}
                        />
                    </div>
                    <p className="text-emerald-400/50 text-xs font-black uppercase tracking-widest">
                        {currentIndex + 1} / {data.length} Verses
                    </p>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// MAIN PRASHNA LAYOUT COMPONENT
// ==========================================
export default function PrashnaLayout() {
    const router = useRouter();
    const [lang, setLang] = useState<"en" | "hi">("en");
    const [activeTab, setActiveTab] = useState<"overview" | "research" | "q1" | "q2" | "q3" | "q4" | "q5" | "q6">("overview");
    const [isPlaying, setIsPlaying] = useState(false);

    // Get data for each question
    const q1Data = getPrashnaVerses(1);
    const q2Data = getPrashnaVerses(2);
    const q3Data = getPrashnaVerses(3);
    const q4Data = getPrashnaVerses(4);
    const q5Data = getPrashnaVerses(5);
    const q6Data = getPrashnaVerses(6);

    return (
        <div className="min-h-screen bg-slate-950 text-emerald-50 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
            {/* Hero Section */}
            <header className="relative h-[55vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 opacity-30 scale-110"
                    style={{
                        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />

                {/* Float elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{ y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px]"
                    />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-5 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-black tracking-[0.4em] uppercase mb-8 border border-emerald-500/20 backdrop-blur-md">
                            Atharva Veda • 67 Verses • 6 Questions
                        </span>
                        <h1 className="text-6xl md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-emerald-100 to-emerald-600 mb-8 tracking-tighter">
                            {lang === "en" ? "Prashna Upanishad" : "प्रश्नोपनिषद्"}
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-2xl md:text-3xl text-emerald-200/80">
                            <span className="font-light italic">"The Upanishad of Questions"</span>
                            <span className="hidden md:block w-2 h-2 bg-emerald-500 rounded-full" />
                            <span className="font-medium">{lang === "en" ? "Six Seekers & Sage Pippalada" : "छह साधक और ऋषि पिप्पलाद"}</span>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Navigation Bar */}
            <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/5 px-4 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <button
                        onClick={() => router.push("/student/batch2/upanishads")}
                        className="flex items-center gap-3 text-emerald-500 hover:text-emerald-400 transition-all group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-slate-900/50 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                            <ArrowLeft className="w-5 h-5" />
                        </div>
                        <span className="font-black text-xs uppercase tracking-widest hidden sm:block">Portal</span>
                    </button>

                    <div className="flex bg-black/60 rounded-2xl p-1.5 border border-white/5 shadow-2xl overflow-x-auto no-scrollbar max-w-[70%] md:max-w-none">
                        {[
                            { id: "overview", label: "Overview", labelHi: "सारांश", icon: Info },
                            { id: "research", label: "Research", labelHi: "शोध", icon: BookOpen },
                            { id: "q1", label: "Q1: Life", labelHi: "१: जीवन", icon: Sprout },
                            { id: "q2", label: "Q2: Power", labelHi: "२: शक्ति", icon: Wind },
                            { id: "q3", label: "Q3: Origin", labelHi: "३: उत्पत्ति", icon: Sparkles },
                            { id: "q4", label: "Q4: Dream", labelHi: "४: स्वप्न", icon: Moon },
                            { id: "q5", label: "Q5: Om", labelHi: "५: ओम", icon: Zap },
                            { id: "q6", label: "Q6: Person", labelHi: "६: पुरुष", icon: User }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${activeTab === tab.id
                                    ? "bg-emerald-500 text-slate-950 shadow-lg"
                                    : "text-emerald-500 hover:text-emerald-400"
                                    }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span className="hidden md:inline uppercase tracking-widest">{lang === "en" ? tab.label : tab.labelHi}</span>
                                <span className="md:hidden uppercase tracking-widest">{tab.id === 'overview' ? (lang === "en" ? "Info" : "info") : tab.id}</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex bg-slate-900/50 rounded-xl p-1 border border-white/5">
                            {(["en", "hi"] as const).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${lang === l ? "bg-emerald-500 text-slate-950 shadow-md" : "text-emerald-600 hover:text-emerald-400"
                                        }`}
                                >
                                    {l.toUpperCase()}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isPlaying ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20" : "bg-slate-900/50 text-emerald-600 hover:text-emerald-400"
                                }`}
                        >
                            {isPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Scroll Progress */}
            <div className="h-1 bg-slate-950">
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5 }}
                    style={{ originX: 0 }}
                    className="h-full bg-emerald-500"
                />
            </div>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto px-6 py-16 md:py-24">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.4 }}
                    >
                        {activeTab === "overview" && (
                            <PrashnaOverview lang={lang} setActiveTab={setActiveTab} />
                        )}
                        {activeTab === "research" && (
                            <PrashnaResearchReport lang={lang} />
                        )}
                        {activeTab === "q1" && (
                            <WisdomStream
                                data={q1Data}
                                lang={lang}
                                title={lang === "en" ? "Question 1: The Source of Life" : "प्रश्न १: जीवन का स्रोत"}
                                subtitle="Adhyaya 1: Rayi (Matter) & Prana (Energy)"
                            />
                        )}
                        {activeTab === "q2" && (
                            <WisdomStream
                                data={q2Data}
                                lang={lang}
                                title={lang === "en" ? "Question 2: The Supremacy of Prana" : "प्रश्न २: प्राण की श्रेष्ठता"}
                                subtitle="Adhyaya 2: Who sustains the body?"
                            />
                        )}
                        {activeTab === "q3" && (
                            <WisdomStream
                                data={q3Data}
                                lang={lang}
                                title={lang === "en" ? "Question 3: The Origin of Prana" : "प्रश्न ३: प्राण की उत्पत्ति"}
                                subtitle="Adhyaya 3: Where does Prana come from?"
                            />
                        )}
                        {activeTab === "q4" && (
                            <WisdomStream
                                data={q4Data}
                                lang={lang}
                                title={lang === "en" ? "Question 4: Sleep & Dreams" : "प्रश्न ४: नींद और सपने"}
                                subtitle="Adhyaya 4: Who sleeps? Who dreams?"
                            />
                        )}
                        {activeTab === "q5" && (
                            <WisdomStream
                                data={q5Data}
                                lang={lang}
                                title={lang === "en" ? "Question 5: Meditation on Om" : "प्रश्न ५: ओम पर ध्यान"}
                                subtitle="Adhyaya 5: The Fruit of Om Meditation"
                            />
                        )}
                        {activeTab === "q6" && (
                            <WisdomStream
                                data={q6Data}
                                lang={lang}
                                title={lang === "en" ? "Question 6: The Person with Sixteen Parts" : "प्रश्न ६: सोलह कलाओं वाला पुरुष"}
                                subtitle="Adhyaya 6: The Purusha"
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 py-32 relative overflow-hidden text-center border-t border-emerald-900/10">
                <div className="max-w-4xl mx-auto px-6 space-y-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="space-y-6"
                    >
                        <div className="w-20 h-px bg-emerald-500/30 mx-auto" />
                        <p className="text-3xl md:text-5xl font-serif text-emerald-50 leading-tight">
                            प्राणस्येदं वशे सर्वं त्रिदिवे यत् प्रतिष्ठितम् ।
                        </p>
                        <p className="text-emerald-400/60 font-medium italic text-lg max-w-2xl mx-auto">
                            {lang === "en"
                                ? "Everything in the three worlds is under the control of Prana."
                                : "तीनों लोकों में जो कुछ भी है, वह सब प्राण के वश में है।"}
                        </p>
                        <p className="text-emerald-500/40 text-sm">— Prashna Upanishad 2.13</p>
                        <div className="w-20 h-px bg-emerald-500/30 mx-auto" />
                    </motion.div>

                    <div className="pt-20">
                        <p className="text-[10px] text-emerald-500/20 font-black tracking-[1em] uppercase">
                            Digital Upanishad Experience • Eduecosystem
                        </p>
                    </div>
                </div>

                {/* Glow Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />
            </footer>
        </div>
    );
}
