"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
    ArrowLeft,
    BookOpen,
    Drama,
    Volume2,
    VolumeX,
    ChevronRight,
    ChevronLeft,
    Languages,
    Sparkles,
    Eye,
    HelpCircle,
    Lightbulb,
    Brain,
    Zap,
    Info,
    ArrowRight
} from "lucide-react";
import { KENA_METADATA, kenaData } from "@/components/batch2/upanishads/data/kena-shlokas";
import { getKenaShlokaImage } from "@/components/batch2/upanishads/data/kena-images";
import KenaResearchReport from "@/components/batch2/upanishads/KenaResearchReport";

// Split data by sections
const philosophyData = kenaData.filter(d => d.section === "Philosophy");
const storyData = kenaData.filter(d => d.section === "Story");

// ==========================================
// WORD MEANINGS COMPONENT
// ==========================================
function WordMeanings({ meanings, lang }: { meanings: any[], lang: "en" | "hi" }) {
    if (!meanings || meanings.length === 0) return null;
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {meanings.map((m, i) => (
                <div key={i} className="bg-slate-900/50 border border-teal-500/10 rounded-xl p-3 hover:border-teal-500/30 transition-all">
                    <p className="text-teal-100 font-serif text-lg mb-1">{m.devanagari}</p>
                    <p className="text-teal-600 text-[10px] uppercase tracking-tighter mb-1">{m.sanskrit}</p>
                    <p className="text-slate-300 text-sm">{lang === "en" ? m.english : m.hindi}</p>
                </div>
            ))}
        </div>
    );
}

// ==========================================
// KENA OVERVIEW COMPONENT (NEW)
// ==========================================
function KenaOverview({ lang, setActiveTab }: { lang: "en" | "hi", setActiveTab: (tab: any) => void }) {
    const pillars = [
        {
            title: lang === "en" ? "The Inquiry" : "जिज्ञासा",
            desc: lang === "en"
                ? "By whom is the mind directed? What power controls our senses?"
                : "मन को कौन निर्देशित करता है? हमारी इंद्रियों को कौन नियंत्रित करता है?",
            icon: HelpCircle,
            color: "from-teal-400 to-cyan-500",
            mantras: "1-8"
        },
        {
            title: lang === "en" ? "The Paradox" : "विरोधाभास",
            desc: lang === "en"
                ? "Known to those who don't claim to know, unknown to those who claim knowledge."
                : "जो नहीं जानने का दावा करते हैं उन्हें ज्ञात, जो ज्ञान का दावा करते हैं उन्हें अज्ञात।",
            icon: Brain,
            color: "from-purple-400 to-indigo-500",
            mantras: "9-13"
        },
        {
            title: lang === "en" ? "The Yaksha Story" : "यक्ष कथा",
            desc: lang === "en"
                ? "The gods' pride tested by a mysterious Spirit through a simple straw."
                : "एक रहस्यमय आत्मा द्वारा एक साधारण तिनके से देवताओं के अहंकार की परीक्षा।",
            icon: Drama,
            color: "from-amber-400 to-orange-500",
            mantras: "14-27"
        },
        {
            title: lang === "en" ? "The Revelation" : "रहस्योद्घाटन",
            desc: lang === "en"
                ? "Uma reveals the truth: all power belongs to Brahman alone."
                : "उमा सत्य प्रकट करती हैं: सारी शक्ति केवल ब्रह्म की है।",
            icon: Sparkles,
            color: "from-rose-400 to-pink-500",
            mantras: "28-34"
        }
    ];

    return (
        <div className="space-y-16">
            {/* Opening Statement */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-teal-100 italic">
                    {lang === "en" ? "The Core Question" : "मूल प्रश्न"}
                </h2>
                <p className="text-teal-400/70 leading-relaxed text-lg">
                    {lang === "en"
                        ? "Kena Upanishad asks the most fundamental question: 'By Whom?' Who is the power behind our mind, senses, and breath? It teaches that Brahman cannot be known as an object, only realized as the Subject."
                        : "केनोपनिषद् सबसे मौलिक प्रश्न पूछती है: 'किसके द्वारा?' हमारे मन, इंद्रियों और प्राण के पीछे कौन सी शक्ति है? यह सिखाती है कि ब्रह्म को एक वस्तु के रूप में नहीं जाना जा सकता, केवल विषय के रूप में अनुभव किया जा सकता है।"}
                </p>
            </div>

            {/* Four Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillars.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-900 border border-teal-500/20 rounded-3xl p-8 hover:bg-slate-800 transition-all group relative overflow-hidden"
                    >
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${p.color} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity`} />
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-6 shadow-lg`}>
                            <p.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                        <p className="text-xs text-teal-400 font-bold uppercase tracking-widest mb-3">Mantras {p.mantras}</p>
                        <p className="text-teal-100/60 text-sm leading-relaxed">{p.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Research CTA */}
            <div className="flex justify-center">
                <button
                    onClick={() => setActiveTab('research')}
                    className="flex items-center gap-3 px-8 py-4 bg-slate-900 border border-teal-500/30 rounded-full text-teal-400 hover:bg-teal-500 hover:text-slate-950 transition-all group shadow-xl hover:shadow-teal-500/20"
                >
                    <BookOpen className="w-5 h-5" />
                    <span className="font-bold uppercase tracking-widest text-sm">
                        {lang === "en" ? "Read Full Research Report" : "पूर्ण शोध रिपोर्ट पढ़ें"}
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* The Central Teaching */}
            <div className="bg-gradient-to-br from-teal-600/10 to-transparent border border-teal-500/20 rounded-3xl p-10 bg-slate-950">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-serif font-bold text-teal-100">
                            {lang === "en" ? "The Ultimate Teaching" : "परम शिक्षा"}
                        </h3>
                        <div className="space-y-4">
                            {[
                                lang === "en" ? "The senses cannot grasp Brahman, yet Brahman powers all senses." : "इंद्रियाँ ब्रह्म को नहीं समझ सकतीं, फिर भी ब्रह्म सभी इंद्रियों को शक्ति देता है।",
                                lang === "en" ? "True knowledge is knowing that you cannot 'know' it like an object." : "सच्चा ज्ञान यह जानना है कि आप इसे किसी वस्तु की तरह 'जान' नहीं सकते।",
                                lang === "en" ? "All power and victory belong to Brahman—the ego takes false credit." : "सारी शक्ति और विजय ब्रह्म की है—अहंकार झूठा श्रेय लेता है।"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center shrink-0 border border-teal-500/30">
                                        <span className="text-teal-400 font-bold">{i + 1}</span>
                                    </div>
                                    <p className="text-teal-100/80">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-teal-500/20 shadow-2xl">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="text-8xl md:text-[100px] font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-teal-100 to-teal-600 opacity-20"
                        >
                            केन?
                        </motion.div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="w-32 h-32 rounded-full border border-teal-500/30 flex items-center justify-center mb-4"
                            >
                                <Eye className="w-14 h-14 text-teal-500 animate-pulse" />
                            </motion.div>
                            <p className="text-teal-500 font-black tracking-widest text-xs uppercase">By Whom?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// WISDOM STREAM COMPONENT (ENHANCED)
// ==========================================
function WisdomStream({ data, lang, title, subtitle }: { data: any[], lang: "en" | "hi", title: string, subtitle: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const shloka = data[currentIndex];
    const image = getKenaShlokaImage(shloka.id);

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
                transition={{ duration: 0.5 }}
                className="bg-slate-900 rounded-3xl border border-teal-500/30 overflow-hidden shadow-2xl backdrop-blur-md"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Text Section */}
                    <div className="p-8 md:p-12 space-y-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-xl font-black text-white shadow-lg">
                                    {shloka.id}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{shloka.theme || "Mantra"}</h3>
                                    <p className="text-teal-400/60 text-xs font-bold uppercase tracking-widest">Kena Upanishad</p>
                                </div>
                            </div>
                        </div>

                        {/* Sanskrit Block */}
                        <div className="bg-slate-950/60 rounded-2xl p-6 border border-teal-500/20 shadow-inner">
                            <p className="text-2xl md:text-3xl text-teal-50 text-center leading-relaxed font-serif" style={{ fontFamily: "'Noto Sans Devanagari', serif" }}>
                                {shloka.sanskrit}
                            </p>
                            <p className="mt-4 text-teal-400/80 text-sm text-center italic leading-relaxed">
                                {shloka.transliteration}
                            </p>
                        </div>

                        {/* Translation Block */}
                        <div className="space-y-6">
                            <div className="bg-teal-900/20 rounded-xl p-5 border border-teal-500/10">
                                <h4 className="text-teal-400 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                    <Languages className="w-4 h-4" />
                                    {lang === "en" ? "Translation" : "अनुवाद"}
                                </h4>
                                <p className="text-teal-50 text-lg leading-relaxed">
                                    {lang === "en" ? shloka.english : shloka.hindi}
                                </p>
                            </div>

                            {/* Word Meanings - Only show if data exists */}
                            {shloka.wordMeanings && shloka.wordMeanings.length > 0 && (
                                <div>
                                    <h4 className="text-teal-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 mb-4">
                                        <BookOpen className="w-3 h-3" />
                                        {lang === "en" ? "Word Meanings" : "शब्दार्थ"}
                                    </h4>
                                    <WordMeanings meanings={shloka.wordMeanings} lang={lang} />
                                </div>
                            )}

                            {/* The Essence - Insight Box */}
                            <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl p-8 border border-teal-400/40 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Lightbulb className="w-12 h-12 text-teal-400" />
                                </div>
                                <h4 className="text-teal-200 font-black mb-4 flex items-center gap-3">
                                    <span className="bg-teal-500 text-slate-950 w-8 h-8 rounded-lg flex items-center justify-center text-lg">💡</span>
                                    {lang === "en" ? "THE ESSENCE" : "सार"}
                                </h4>
                                <p className="text-teal-50 text-xl leading-relaxed italic font-medium relative z-10">
                                    {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Visual Section */}
                    <div className="relative bg-slate-950 min-h-[500px] flex items-center justify-center overflow-hidden border-l border-teal-500/10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/10 to-transparent pointer-events-none" />

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
                                    {shloka.id <= 8 ? "🧠" : shloka.id <= 13 ? "✨" : "🔥"}
                                </motion.div>
                                <p className="text-teal-400/50 font-medium italic max-w-xs mx-auto">{shloka.nanoBananaPrompt}</p>
                            </div>
                        )}

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                            <span className="px-4 py-1.5 bg-black/60 rounded-full text-[10px] text-teal-400 font-black tracking-[0.2em] uppercase border border-teal-500/30 backdrop-blur-md">
                                {shloka.theme || `Mantra ${shloka.id}`}
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
                        className="w-14 h-14 flex items-center justify-center bg-slate-900 text-teal-400 rounded-full border border-teal-500/30 hover:bg-teal-500 hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed group"
                    >
                        <ChevronLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <div className="flex flex-wrap justify-center gap-2 max-w-md">
                        {data.map((s, i) => (
                            <button
                                key={s.id}
                                onClick={() => setCurrentIndex(i)}
                                className={`w-10 h-10 rounded-xl text-sm font-black transition-all border ${i === currentIndex
                                    ? "bg-teal-500 border-teal-300 text-white scale-110 shadow-lg shadow-teal-500/40"
                                    : "bg-slate-900 border-teal-500/20 text-teal-700 hover:border-teal-500"
                                    }`}
                            >
                                {s.id}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setCurrentIndex(prev => Math.min(data.length - 1, prev + 1))}
                        disabled={currentIndex === data.length - 1}
                        className="w-14 h-14 flex items-center justify-center bg-slate-900 text-teal-400 rounded-full border border-teal-500/30 hover:bg-teal-500 hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed group"
                    >
                        <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                <div className="flex items-center gap-3">
                    <div className="h-1 w-48 bg-slate-900 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-teal-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentIndex + 1) / data.length) * 100}%` }}
                        />
                    </div>
                    <p className="text-teal-400/50 text-xs font-black uppercase tracking-widest">
                        {currentIndex + 1} / {data.length} Mantras
                    </p>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// YAKSHA STORY MODE COMPONENT (ENHANCED)
// ==========================================
function YakshaStoryMode({ lang }: { lang: "en" | "hi" }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const step = storyData[currentIndex];
    const image = getKenaShlokaImage(step.id);

    // Scroll timeline on change
    useEffect(() => {
        if (scrollRef.current) {
            const activeElem = scrollRef.current.children[currentIndex] as HTMLElement;
            if (activeElem) {
                const containerWidth = scrollRef.current.offsetWidth;
                const scrollPos = activeElem.offsetLeft - (containerWidth / 2) + (activeElem.offsetWidth / 2);
                scrollRef.current.scrollTo({ left: scrollPos, behavior: "smooth" });
            }
        }
    }, [currentIndex]);

    // Get icon for story section
    const getStoryIcon = (id: number) => {
        if (id >= 14 && id <= 15) return "✨";
        if (id >= 16 && id <= 20) return "🔥";
        if (id >= 21 && id <= 25) return "💨";
        if (id >= 26 && id <= 27) return "👁️";
        if (id >= 28 && id <= 34) return "🕉️";
        return "✨";
    };

    return (
        <div className="space-y-10">
            {/* Title */}
            <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-teal-100 mb-2">
                    {lang === "en" ? "The Yaksha Allegory" : "यक्ष कथा"}
                </h2>
                <p className="text-teal-400/60 font-medium tracking-widest uppercase text-xs">
                    Khanda 3 & 4: The Humbling of the Gods
                </p>
            </div>

            {/* Scrollable Timeline */}
            <div className="relative group">
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-teal-500/10 -translate-y-1/2" />
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto pb-6 pt-2 scrollbar-hide px-8 cursor-grab active:cursor-grabbing no-scrollbar"
                >
                    {storyData.map((s, i) => (
                        <button
                            key={s.id}
                            onClick={() => setCurrentIndex(i)}
                            className="flex-shrink-0 flex flex-col items-center gap-3 w-16 group"
                        >
                            <div
                                className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-black transition-all duration-300 border-2 ${i === currentIndex
                                    ? "bg-teal-500 border-white text-white scale-125 shadow-xl shadow-teal-500/30"
                                    : "bg-slate-900 border-teal-500/30 text-teal-700 hover:border-teal-500"
                                    }`}
                            >
                                {s.id}
                            </div>
                        </button>
                    ))}
                </div>
                {/* Fade overlays for scroll */}
                <div className="absolute left-0 top-0 bottom-6 w-20 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />
            </div>

            {/* Content Display */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-slate-900 rounded-3xl border border-teal-500/30 overflow-hidden shadow-2xl backdrop-blur-md"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Story Content */}
                        <div className="p-8 md:p-12 space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 text-white rounded-2xl flex items-center justify-center text-3xl font-black shadow-lg">
                                    {step.id}
                                </div>
                                <div className="border-l-2 border-teal-500/20 pl-4">
                                    <h3 className="text-3xl font-bold text-white tracking-tight leading-tight">
                                        {step.theme || (lang === "en" ? "The Revelation" : "रहस्योद्घाटन")}
                                    </h3>
                                    <p className="text-teal-400 font-medium text-sm">
                                        {lang === "en" ? "The Yaksha Allegory" : "यक्ष कथा"}
                                    </p>
                                </div>
                            </div>

                            {/* Main Story Text */}
                            <div className="bg-slate-950/40 rounded-2xl p-6 border border-teal-500/20">
                                <p className="text-xl text-teal-50 leading-relaxed font-medium">
                                    {lang === "en" ? step.english : step.hindi}
                                </p>
                            </div>

                            {/* Insight Section */}
                            <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/10 rounded-2xl p-8 border border-teal-400/30 shadow-lg relative overflow-hidden">
                                <div className="flex items-center gap-2 text-teal-400 mb-4">
                                    <Lightbulb className="w-5 h-5" />
                                    <span className="uppercase text-xs font-black tracking-widest">Master Key</span>
                                </div>
                                <p className="text-xl text-teal-100/90 leading-relaxed italic">
                                    {lang === "en" ? step.simpleExplanation : step.simpleExplanationHindi}
                                </p>
                            </div>
                        </div>

                        {/* Interactive Visual */}
                        <div className="relative bg-black/30 flex flex-col items-center justify-center min-h-[500px] border-l border-teal-500/10">
                            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500/40 to-transparent" />

                            {image ? (
                                <motion.img
                                    src={image}
                                    alt={step.theme}
                                    className="w-full h-full object-contain p-8 relative z-10"
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8 }}
                                />
                            ) : (
                                <div className="relative z-10 text-center p-8">
                                    <motion.div
                                        className="text-9xl mb-8 filter drop-shadow-[0_0_50px_rgba(45,212,191,0.5)]"
                                        animate={{
                                            y: [0, -10, 0],
                                            filter: ["drop-shadow(0 0 20px rgba(45,212,191,0.2))", "drop-shadow(0 0 60px rgba(45,212,191,0.6))", "drop-shadow(0 0 20px rgba(45,212,191,0.2))"]
                                        }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        {getStoryIcon(step.id)}
                                    </motion.div>
                                    <p className="text-teal-400 text-sm font-bold tracking-widest uppercase mb-2">Scene Description</p>
                                    <p className="text-teal-100/60 max-w-xs mx-auto italic leading-relaxed">
                                        {step.nanoBananaPrompt}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Quick Controls */}
            <div className="flex justify-between items-center bg-slate-900 p-4 rounded-2xl border border-teal-500/20">
                <button
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="flex items-center gap-3 px-6 py-3 bg-slate-950 text-teal-400 rounded-xl hover:bg-teal-500 hover:text-white transition-all disabled:opacity-10 border border-teal-500/20"
                >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="font-bold">Previous</span>
                </button>

                <div className="hidden md:flex items-center gap-3">
                    <span className="text-teal-500/50 font-bold text-xs uppercase tracking-tighter">Progress</span>
                    <div className="h-1.5 w-64 bg-slate-950 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-teal-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentIndex + 1) / storyData.length) * 100}%` }}
                        />
                    </div>
                    <span className="text-teal-400 font-black text-sm">{currentIndex + 1}/{storyData.length}</span>
                </div>

                <button
                    onClick={() => setCurrentIndex(prev => Math.min(storyData.length - 1, prev + 1))}
                    disabled={currentIndex === storyData.length - 1}
                    className="flex items-center gap-3 px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-500 transition-all disabled:opacity-10 shadow-lg shadow-teal-500/20"
                >
                    <span className="font-bold">Next</span>
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

// ==========================================
// MAIN KENA LAYOUT COMPONENT (REDESIGNED)
// ==========================================
export default function KenaLayout() {
    const router = useRouter();
    const [lang, setLang] = useState<"en" | "hi">("en");
    const [activeTab, setActiveTab] = useState<"overview" | "research" | "inquiry" | "paradox" | "story">("overview");
    const [isPlaying, setIsPlaying] = useState(false);

    // Get data for inquiry (1-8) and paradox (9-13)
    const inquiryData = philosophyData.filter(d => d.id <= 8);
    const paradoxData = philosophyData.filter(d => d.id >= 9);

    return (
        <div className="min-h-screen bg-slate-950 text-teal-50 font-sans selection:bg-teal-500/30 selection:text-teal-200">
            {/* Hero Section - ENHANCED */}
            <header className="relative h-[55vh] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 opacity-40 scale-110"
                    style={{
                        backgroundImage: `url(/assets/upanishads/kena/kena_header_bg_1766057445730.png)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "blur(4px)"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950" />

                {/* Float elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{ y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]"
                    />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-5 py-2 bg-teal-500/10 text-teal-400 rounded-full text-[10px] font-black tracking-[0.4em] uppercase mb-8 border border-teal-500/20 backdrop-blur-md">
                            Sama Veda • 34 Mantras • 4 Khandas
                        </span>
                        <h1 className="text-6xl md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-teal-100 to-teal-600 mb-8 tracking-tighter">
                            {lang === "en" ? "Kena Upanishad" : "केनोपनिषद्"}
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-2xl md:text-3xl text-teal-200/80">
                            <span className="font-light italic">"{lang === "en" ? "By Whom?" : "किसके द्वारा?"}"</span>
                            <span className="hidden md:block w-2 h-2 bg-teal-500 rounded-full" />
                            <span className="font-medium">{lang === "en" ? "The Science of Perception" : "ज्ञानेन्द्रियों का विज्ञान"}</span>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Navigation Bar - 5 TABS */}
            <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/5 px-4 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <button
                        onClick={() => router.push("/student/batch2/upanishads")}
                        className="flex items-center gap-3 text-teal-500 hover:text-teal-400 transition-all group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-slate-900/50 flex items-center justify-center border border-teal-500/20 group-hover:bg-teal-500 group-hover:text-white transition-all">
                            <ArrowLeft className="w-5 h-5" />
                        </div>
                        <span className="font-black text-xs uppercase tracking-widest hidden sm:block">Portal</span>
                    </button>

                    <div className="flex bg-black/60 rounded-2xl p-1.5 border border-white/5 shadow-2xl overflow-x-auto no-scrollbar max-w-[70%] md:max-w-none">
                        {[
                            { id: "overview", label: "Overview", labelHi: "सारांश", icon: Info },
                            { id: "research", label: "Research", labelHi: "शोध", icon: BookOpen },
                            { id: "inquiry", label: "The Inquiry", labelHi: "जिज्ञासा", icon: HelpCircle },
                            { id: "paradox", label: "The Paradox", labelHi: "विरोधाभास", icon: Brain },
                            { id: "story", label: "Yaksha Story", labelHi: "यक्ष कथा", icon: Drama }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${activeTab === tab.id
                                    ? "bg-teal-500 text-white shadow-lg"
                                    : "text-teal-500 hover:text-teal-400"
                                    }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span className="uppercase tracking-widest">{lang === "en" ? tab.label : tab.labelHi}</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex bg-slate-900/50 rounded-xl p-1 border border-white/5">
                            {(["en", "hi"] as const).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${lang === l ? "bg-teal-500 text-white shadow-md" : "text-teal-600 hover:text-teal-400"
                                        }`}
                                >
                                    {l.toUpperCase()}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isPlaying ? "bg-teal-500 text-white shadow-lg shadow-teal-500/20" : "bg-slate-900/50 text-teal-600 hover:text-teal-400"
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
                    className="h-full bg-teal-500"
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
                            <KenaOverview lang={lang} setActiveTab={setActiveTab} />
                        )}
                        {activeTab === "research" && (
                            <KenaResearchReport lang={lang} />
                        )}
                        {activeTab === "inquiry" && (
                            <WisdomStream
                                data={inquiryData}
                                lang={lang}
                                title={lang === "en" ? "The Inquiry" : "जिज्ञासा"}
                                subtitle="Mantras 1-8: Who Powers the Senses?"
                            />
                        )}
                        {activeTab === "paradox" && (
                            <WisdomStream
                                data={paradoxData}
                                lang={lang}
                                title={lang === "en" ? "The Knowledge Paradox" : "ज्ञान का विरोधाभास"}
                                subtitle="Mantras 9-13: Known to Those Who Don't Know"
                            />
                        )}
                        {activeTab === "story" && (
                            <YakshaStoryMode lang={lang} />
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 py-32 relative overflow-hidden text-center border-t border-teal-900/10">
                <div className="max-w-4xl mx-auto px-6 space-y-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="space-y-6"
                    >
                        <div className="w-20 h-px bg-teal-500/30 mx-auto" />
                        <p className="text-3xl md:text-5xl font-serif text-teal-50 leading-tight">
                            तपः दमो कर्मेति प्रतिष्ठा वेदाः सर्वाङ्गानि सत्यमायतनम् ॥
                        </p>
                        <p className="text-teal-400/60 font-medium italic text-lg max-w-2xl mx-auto">
                            {lang === "en"
                                ? "Austerity, restraint, and work are its foundational feet. The Vedas are its limbs. Truth is its abode."
                                : "तपस्या, संयम और कर्म इसके आधार हैं। वेद इसके अंग हैं। सत्य इसका निवास है।"}
                        </p>
                        <div className="w-20 h-px bg-teal-500/30 mx-auto" />
                    </motion.div>

                    <div className="pt-20">
                        <p className="text-[10px] text-teal-500/20 font-black tracking-[1em] uppercase">
                            Digital Upanishad Experience • Eduecosystem
                        </p>
                    </div>
                </div>

                {/* Glow Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(45,212,191,0.05)_0%,transparent_70%)] pointer-events-none" />
            </footer>
        </div>
    );
}
