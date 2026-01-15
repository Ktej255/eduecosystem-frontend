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
    GraduationCap,
    Layers,
    Heart,
    Wind,
    Feather
} from "lucide-react";
import { TAITTIRIYA_METADATA, TAITTIRIYA_SHLOKAS } from "@/components/batch2/upanishads/data/taittiriya-shlokas";
import SadhanaTimer from "@/components/batch2/shared/SadhanaTimer";
import ExperienceReport from "@/components/batch2/shared/ExperienceReport";

// Group by Valli
const shiksha = TAITTIRIYA_SHLOKAS.filter(d => d.valli === 1);
const brahmananda = TAITTIRIYA_SHLOKAS.filter(d => d.valli === 2);
const bhrigu = TAITTIRIYA_SHLOKAS.filter(d => d.valli === 3);

// ==========================================
// OVERVIEW COMPONENT
// ==========================================
function TaittiriyaOverview({ lang }: { lang: "en" | "hi" }) {
    const koshas = [
        { name: lang === "en" ? "Annamaya" : "अन्नमय", meaning: lang === "en" ? "Food Sheath" : "अन्न कोश", emoji: "🍞", color: "from-amber-400 to-orange-500" },
        { name: lang === "en" ? "Pranamaya" : "प्राणमय", meaning: lang === "en" ? "Vital Sheath" : "प्राण कोश", emoji: "💨", color: "from-cyan-400 to-blue-500" },
        { name: lang === "en" ? "Manomaya" : "मनोमय", meaning: lang === "en" ? "Mental Sheath" : "मन कोश", emoji: "🧠", color: "from-purple-400 to-indigo-500" },
        { name: lang === "en" ? "Vijnanamaya" : "विज्ञानमय", meaning: lang === "en" ? "Intellect Sheath" : "बुद्धि कोश", emoji: "💡", color: "from-yellow-400 to-amber-500" },
        { name: lang === "en" ? "Anandamaya" : "आनंदमय", meaning: lang === "en" ? "Bliss Sheath" : "आनंद कोश", emoji: "✨", color: "from-pink-400 to-rose-500" },
    ];

    return (
        <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-100 italic">
                    {lang === "en" ? "The Five Sheaths" : "पंच कोश"}
                </h2>
                <p className="text-rose-400/70 leading-relaxed text-lg">
                    {lang === "en"
                        ? "This Upanishad contains the famous 'Convocation Address' given to graduating students and the analysis of the Five Layers (Pancha Kosha) of human existence."
                        : "इस उपनिषद में स्नातक छात्रों को दिया गया प्रसिद्ध 'दीक्षांत भाषण' और मानव अस्तित्व की पाँच परतों (पंच कोश) का विश्लेषण है।"}
                </p>
            </div>

            {/* Famous Quote */}
            <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-3xl p-8 border border-rose-500/30 text-center">
                <p className="text-2xl md:text-3xl font-serif text-rose-100 mb-4">
                    मातृदेवो भव । पितृदेवो भव । आचार्यदेवो भव । अतिथिदेवो भव ।
                </p>
                <p className="text-rose-400/80 italic">
                    {lang === "en"
                        ? "Treat Mother as God. Father as God. Teacher as God. Guest as God."
                        : "माता को देवता मानो, पिता को देवता मानो, गुरु को देवता मानो, अतिथि को देवता मानो।"}
                </p>
            </div>

            {/* Pancha Kosha */}
            <div>
                <h3 className="text-2xl font-bold text-rose-200 text-center mb-8">
                    {lang === "en" ? "The Five Sheaths (Pancha Kosha)" : "पाँच कोश (पंच कोश)"}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {koshas.map((k, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-slate-900 border border-rose-500/20 rounded-2xl p-5 text-center hover:bg-slate-800 transition-all min-w-[150px]"
                        >
                            <div className="text-4xl mb-3">{k.emoji}</div>
                            <p className={`font-bold bg-gradient-to-r ${k.color} bg-clip-text text-transparent`}>{k.name}</p>
                            <p className="text-rose-200/50 text-xs mt-1">{k.meaning}</p>
                        </motion.div>
                    ))}
                </div>
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
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-rose-100 mb-2">{title}</h2>
                <p className="text-rose-400/60 font-medium tracking-widest uppercase text-xs">{subtitle}</p>
            </div>

            <motion.div
                key={shloka.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900 rounded-3xl border border-rose-500/30 overflow-hidden shadow-2xl p-8 md:p-12 space-y-8"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-xl font-black text-white shadow-lg">
                        {shloka.id}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">{shloka.theme || "Verse"}</h3>
                        <p className="text-rose-400/60 text-xs font-bold uppercase tracking-widest">Valli {shloka.valli}, Anuvaka {shloka.anuvaka}</p>
                    </div>
                </div>

                <div className="bg-slate-950/60 rounded-2xl p-6 border border-rose-500/20">
                    <p className="text-2xl md:text-3xl text-rose-50 text-center leading-relaxed font-serif">
                        {shloka.sanskrit}
                    </p>
                </div>

                <div className="bg-rose-900/20 rounded-xl p-5 border border-rose-500/10">
                    <h4 className="text-rose-400 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                        <Languages className="w-4 h-4" />
                        {lang === "en" ? "Translation" : "अनुवाद"}
                    </h4>
                    <p className="text-rose-50 text-lg leading-relaxed">
                        {lang === "en" ? shloka.english : shloka.hindi}
                    </p>
                </div>

                {shloka.wordMeanings && shloka.wordMeanings.length > 0 && (
                    <div>
                        <h4 className="text-rose-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 mb-4">
                            <BookOpen className="w-3 h-3" />
                            {lang === "en" ? "Word Meanings" : "शब्दार्थ"}
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {shloka.wordMeanings.map((m: any, i: number) => (
                                <div key={i} className="bg-slate-900/50 border border-rose-500/10 rounded-xl p-3">
                                    <p className="text-rose-100 font-serif text-lg mb-1">{m.devanagari}</p>
                                    <p className="text-rose-600 text-[10px] uppercase tracking-tighter mb-1">{m.sanskrit}</p>
                                    <p className="text-slate-300 text-sm">{lang === "en" ? m.english : m.hindi}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-2xl p-8 border border-rose-400/40">
                    <h4 className="text-rose-200 font-black mb-4 flex items-center gap-3">
                        <span className="bg-rose-500 text-slate-950 w-8 h-8 rounded-lg flex items-center justify-center">💡</span>
                        {lang === "en" ? "THE ESSENCE" : "सार"}
                    </h4>
                    <p className="text-rose-50 text-xl leading-relaxed italic font-medium">
                        {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                    </p>
                </div>

                {/* Practice Launchers */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <button
                        onClick={() => (window as any).showSadhanaTimer && (window as any).showSadhanaTimer()}
                        className="bg-rose-600/20 hover:bg-rose-600/30 border border-rose-500/30 rounded-xl p-4 text-rose-300 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                    >
                        <Wind className="w-4 h-4" /> Start Sadhana
                    </button>
                    <button
                        onClick={() => (window as any).showExperienceReport && (window as any).showExperienceReport()}
                        className="bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 rounded-xl p-4 text-emerald-300 font-bold text-sm flex items-center justify-center gap-2 transition-all"
                    >
                        <Feather className="w-4 h-4" /> Log Experience
                    </button>
                </div>
            </motion.div>

            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="w-14 h-14 flex items-center justify-center bg-slate-900 text-rose-400 rounded-full border border-rose-500/30 hover:bg-rose-500 hover:text-white transition-all disabled:opacity-20"
                >
                    <ChevronLeft className="w-7 h-7" />
                </button>
                <span className="text-rose-400 font-bold">{currentIndex + 1} / {data.length}</span>
                <button
                    onClick={() => setCurrentIndex(prev => Math.min(data.length - 1, prev + 1))}
                    disabled={currentIndex === data.length - 1}
                    className="w-14 h-14 flex items-center justify-center bg-slate-900 text-rose-400 rounded-full border border-rose-500/30 hover:bg-rose-500 hover:text-white transition-all disabled:opacity-20"
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
export default function TaittiriyaLayout() {
    const router = useRouter();
    const [lang, setLang] = useState<"en" | "hi">("en");
    const [activeTab, setActiveTab] = useState<string>("overview");
    const [sadhanaActive, setSadhanaActive] = useState(false);
    const [reportActive, setReportActive] = useState(false);

    // Expose control to sub-components via window for simplicity
    React.useEffect(() => {
        (window as any).showSadhanaTimer = () => setSadhanaActive(true);
        (window as any).showExperienceReport = () => setReportActive(true);
    }, []);

    const tabs = [
        { id: "overview", label: lang === "en" ? "Overview" : "परिचय", icon: Eye },
        { id: "shiksha", label: lang === "en" ? "Shiksha Valli" : "शिक्षा वल्ली", icon: GraduationCap },
        { id: "brahmananda", label: lang === "en" ? "Brahmananda Valli" : "ब्रह्मानंद वल्ली", icon: Layers },
        { id: "bhrigu", label: lang === "en" ? "Bhrigu Valli" : "भृगु वल्ली", icon: Heart },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-rose-900/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button onClick={() => router.push("/student/batch2/upanishads")} className="text-rose-400 hover:text-rose-300">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <div>
                            <h1 className="text-xl font-bold text-white">{TAITTIRIYA_METADATA.name} Upanishad</h1>
                            <p className="text-rose-500/60 text-xs">{TAITTIRIYA_METADATA.nameSanskrit} • {TAITTIRIYA_METADATA.shlokaCount} Verses</p>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2 bg-slate-900/50 rounded-xl p-1 border border-white/5">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${activeTab === tab.id ? "bg-rose-500 text-slate-950" : "text-rose-600 hover:text-rose-400"}`}
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
                                className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${lang === l ? "bg-rose-500 text-slate-950" : "text-rose-600 hover:text-rose-400"}`}
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
                        {activeTab === "overview" && <TaittiriyaOverview lang={lang} />}
                        {activeTab === "shiksha" && <WisdomStream data={shiksha} lang={lang} title={lang === "en" ? "The Convocation Address" : "दीक्षांत भाषण"} subtitle="Shiksha Valli: Education & Ethics" />}
                        {activeTab === "brahmananda" && <WisdomStream data={brahmananda} lang={lang} title={lang === "en" ? "The Five Sheaths" : "पंच कोश"} subtitle="Brahmananda Valli: Analysis of Bliss" />}
                        {activeTab === "bhrigu" && <WisdomStream data={bhrigu} lang={lang} title={lang === "en" ? "Bhrigu's Discovery" : "भृगु की खोज"} subtitle="Bhrigu Valli: Investigation of Brahman" />}
                    </motion.div>
                </AnimatePresence>
            </main>

            <footer className="bg-slate-950 py-24 text-center border-t border-rose-900/10">
                <p className="text-3xl md:text-4xl font-serif text-rose-50 mb-4">सह नाववतु । सह नौ भुनक्तु ।</p>
                <p className="text-rose-400/60 italic">{lang === "en" ? "May He protect us both. May He nourish us both." : "वह हम दोनों की रक्षा करे। वह हम दोनों का पालन करे।"}</p>

                {/* Modals */}
                <AnimatePresence>
                    {sadhanaActive && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                                onClick={() => setSadhanaActive(false)}
                            />
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                className="relative z-10 w-full max-w-xl"
                            >
                                <SadhanaTimer
                                    title="Taittiriya: Kosha Contemplation"
                                    duration={300}
                                    onComplete={() => {
                                        setSadhanaActive(false);
                                        setReportActive(true);
                                    }}
                                />
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {reportActive && (
                        <ExperienceReport
                            isOpen={reportActive}
                            onClose={() => setReportActive(false)}
                            onSubmit={(data: any) => {
                                console.log("Experience Logged:", data);
                                setReportActive(false);
                            }}
                            title="Taittiriya Upanishad: Internal Shift"
                        />
                    )}
                </AnimatePresence>
            </footer>
        </div>
    );
}
