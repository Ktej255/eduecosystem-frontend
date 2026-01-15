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
    Flame,
    Skull,
    Heart,
    Zap,
    Info,
    Crown,
    User,
    Gift,
    ArrowRight,
    Wind,
    Feather
} from "lucide-react";
import { KATHA_METADATA, kathaData, getKathaByValli } from "@/components/batch2/upanishads/data/katha-shlokas";
import { getKathaShlokaImage } from "@/components/batch2/upanishads/data/katha-images";
import KathaResearchReport from "@/components/batch2/upanishads/KathaResearchReport";
import SadhanaTimer from "@/components/batch2/shared/SadhanaTimer";
import ExperienceReport from "@/components/batch2/shared/ExperienceReport";

// ==========================================
// KATHA OVERVIEW COMPONENT
// ==========================================
function KathaOverview({ lang, setActiveTab }: { lang: "en" | "hi", setActiveTab: (tab: any) => void }) {
    const sections = [
        {
            title: lang === "en" ? "The Story" : "कथा",
            desc: lang === "en"
                ? "Nachiketa questions his father's empty sacrifice and is cursed to meet Death."
                : "नचिकेता अपने पिता के खोखले यज्ञ पर सवाल उठाता है और मृत्यु से मिलने का शाप मिलता है।",
            icon: User,
            color: "from-amber-400 to-orange-500",
            vallis: "1.1"
        },
        {
            title: lang === "en" ? "The Three Boons" : "तीन वरदान",
            desc: lang === "en"
                ? "Yama offers three boons. The third—the secret of death—becomes immortal wisdom."
                : "यम तीन वरदान प्रदान करते हैं। तीसरा—मृत्यु का रहस्य—अमर ज्ञान बन जाता है।",
            icon: Gift,
            color: "from-purple-400 to-indigo-500",
            vallis: "1.2-1.3"
        },
        {
            title: lang === "en" ? "The Chariot" : "रथ रूपक",
            desc: lang === "en"
                ? "The famous metaphor: Body is chariot, Atman is passenger, Mind is reins."
                : "प्रसिद्ध रूपक: शरीर रथ है, आत्मा यात्री है, मन लगाम है।",
            icon: Crown,
            color: "from-teal-400 to-cyan-500",
            vallis: "2.1"
        },
        {
            title: lang === "en" ? "Liberation" : "मोक्ष",
            desc: lang === "en"
                ? "The eternal Self beyond birth and death. 'He who knows this becomes immortal.'"
                : "जन्म और मृत्यु से परे शाश्वत आत्मा। 'जो इसे जानता है वह अमर हो जाता है।'",
            icon: Sparkles,
            color: "from-rose-400 to-pink-500",
            vallis: "2.2-2.3"
        }
    ];

    const characters = [
        {
            name: lang === "en" ? "Nachiketa" : "नचिकेता",
            role: lang === "en" ? "The Seeker" : "साधक",
            desc: lang === "en" ? "A teenage boy with unshakable faith (Shraddha)" : "अटूट श्रद्धा वाला किशोर",
            emoji: "👦"
        },
        {
            name: lang === "en" ? "Yama" : "यम",
            role: lang === "en" ? "The Guru" : "गुरु",
            desc: lang === "en" ? "Lord of Death, the ultimate teacher" : "मृत्यु के देवता, परम शिक्षक",
            emoji: "💀"
        },
        {
            name: lang === "en" ? "Vajashravas" : "वाजश्रवस",
            role: lang === "en" ? "The Father" : "पिता",
            desc: lang === "en" ? "Represents hollow ritualism" : "खोखले कर्मकांड का प्रतीक",
            emoji: "👴"
        }
    ];

    return (
        <div className="space-y-16">
            {/* Opening Statement */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-100 italic">
                    {lang === "en" ? "The Dialogue with Death" : "मृत्यु से संवाद"}
                </h2>
                <p className="text-amber-400/70 leading-relaxed text-lg">
                    {lang === "en"
                        ? "The Katha Upanishad is the most beloved of all Upanishads. It tells the story of a fearless boy who goes to the realm of Death to learn the supreme secret: What happens after we die? Is there an immortal Self?"
                        : "कठोपनिषद् सभी उपनिषदों में सबसे प्रिय है। यह एक निडर बालक की कहानी है जो परम रहस्य जानने के लिए मृत्यु के लोक में जाता है: मृत्यु के बाद क्या होता है? क्या कोई अमर आत्मा है?"}
                </p>
            </div>

            {/* Characters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {characters.map((char, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-900 border border-amber-500/20 rounded-3xl p-6 text-center hover:bg-slate-800 transition-all"
                    >
                        <div className="text-6xl mb-4">{char.emoji}</div>
                        <h3 className="text-xl font-bold text-white mb-1">{char.name}</h3>
                        <p className="text-amber-400 text-sm font-bold uppercase tracking-widest mb-2">{char.role}</p>
                        <p className="text-amber-200/60 text-sm">{char.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Research CTA */}
            <div className="flex justify-center">
                <button
                    onClick={() => setActiveTab('research')}
                    className="flex items-center gap-3 px-8 py-4 bg-slate-900 border border-amber-500/30 rounded-full text-amber-400 hover:bg-amber-500 hover:text-slate-950 transition-all group shadow-xl hover:shadow-amber-500/20"
                >
                    <BookOpen className="w-5 h-5" />
                    <span className="font-bold uppercase tracking-widest text-sm">
                        {lang === "en" ? "Read Full Research Report" : "पूर्ण शोध रिपोर्ट पढ़ें"}
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Four Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {sections.map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-900 border border-amber-500/20 rounded-3xl p-8 hover:bg-slate-800 transition-all group relative overflow-hidden"
                    >
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${s.color} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity`} />
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-lg`}>
                            <s.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                        <p className="text-xs text-amber-400 font-bold uppercase tracking-widest mb-3">Valli {s.vallis}</p>
                        <p className="text-amber-200/60 text-sm leading-relaxed">{s.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* The Story Context */}
            <div className="bg-gradient-to-br from-amber-600/10 to-transparent border border-amber-500/20 rounded-3xl p-10 bg-slate-950">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-serif font-bold text-amber-100">
                            {lang === "en" ? "The Background Story" : "पृष्ठभूमि कथा"}
                        </h3>
                        <div className="space-y-4 text-amber-100/80">
                            <p>
                                {lang === "en"
                                    ? "Vajashravas was performing a great sacrifice to gain heaven. But he cheated—giving away old, barren, useless cows instead of valuable ones."
                                    : "वाजश्रवस स्वर्ग प्राप्ति के लिए एक महान यज्ञ कर रहे थे। लेकिन उन्होंने धोखा किया—मूल्यवान गायों के बजाय पुरानी, बांझ, बेकार गायें दान कीं।"}
                            </p>
                            <p>
                                {lang === "en"
                                    ? "His son Nachiketa saw this hypocrisy. To save his father from sin, the boy offered himself: 'Father, to whom will you give ME?'"
                                    : "उनके पुत्र नचिकेता ने यह पाखंड देखा। अपने पिता को पाप से बचाने के लिए, बालक ने स्वयं को अर्पित किया: 'पिता, मुझे किसे देंगे?'"}
                            </p>
                            <p className="text-amber-400 font-bold italic">
                                {lang === "en"
                                    ? 'Angered, the father shouted: "I give you to DEATH!" And so began the journey...'
                                    : 'क्रोधित पिता ने कहा: "मैं तुझे मृत्यु को देता हूँ!" और इस प्रकार यात्रा शुरू हुई...'}
                            </p>
                        </div>
                    </div>
                    <div className="relative aspect-video rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-amber-500/20 shadow-2xl">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="text-8xl md:text-[100px] font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-600 opacity-20"
                        >
                            ॐ
                        </motion.div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mb-4 border border-amber-500/30"
                            >
                                <Skull className="w-12 h-12 text-amber-500" />
                            </motion.div>
                            <p className="text-amber-500 font-black tracking-widest text-xs uppercase">मृत्यवे त्वा ददामीति</p>
                            <p className="text-amber-400/60 text-xs mt-1">Unto Death I Give Thee</p>
                        </div>
                    </div>
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
    const image = getKathaShlokaImage(shloka?.id);

    if (!shloka) return null;

    return (
        <div className="space-y-8">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-amber-100 mb-2">{title}</h2>
                <p className="text-amber-400/60 font-medium tracking-widest uppercase text-xs">{subtitle}</p>
            </div>

            <motion.div
                key={shloka.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900 rounded-3xl border border-amber-500/30 overflow-hidden shadow-2xl backdrop-blur-md"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Text Section */}
                    <div className="p-8 md:p-12 space-y-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-xl font-black text-white shadow-lg">
                                    {shloka.id}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{shloka.theme || "Verse"}</h3>
                                    <p className="text-amber-400/60 text-xs font-bold uppercase tracking-widest">Katha Upanishad • Valli {shloka.valli}</p>
                                </div>
                            </div>
                        </div>

                        {/* Sanskrit Block */}
                        <div className="bg-slate-950/60 rounded-2xl p-6 border border-amber-500/20 shadow-inner">
                            <p className="text-2xl md:text-3xl text-amber-50 text-center leading-relaxed font-serif" style={{ fontFamily: "'Noto Sans Devanagari', serif" }}>
                                {shloka.sanskrit}
                            </p>
                        </div>

                        {/* Translation Block */}
                        <div className="space-y-6">
                            <div className="bg-amber-900/20 rounded-xl p-5 border border-amber-500/10">
                                <h4 className="text-amber-400 font-bold mb-3 flex items-center gap-2 text-sm uppercase tracking-wider">
                                    <Languages className="w-4 h-4" />
                                    {lang === "en" ? "Translation" : "अनुवाद"}
                                </h4>
                                <p className="text-amber-50 text-lg leading-relaxed">
                                    {lang === "en" ? shloka.english : shloka.hindi}
                                </p>
                            </div>

                            {/* Word Meanings */}
                            {shloka.wordMeanings && shloka.wordMeanings.length > 0 && (
                                <div>
                                    <h4 className="text-amber-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 mb-4">
                                        <BookOpen className="w-3 h-3" />
                                        {lang === "en" ? "Word Meanings" : "शब्दार्थ"}
                                    </h4>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {shloka.wordMeanings.map((m: any, i: number) => (
                                            <div key={i} className="bg-slate-900/50 border border-amber-500/10 rounded-xl p-3 hover:border-amber-500/30 transition-all">
                                                <p className="text-amber-100 font-serif text-lg mb-1">{m.devanagari}</p>
                                                <p className="text-amber-600 text-[10px] uppercase tracking-tighter mb-1">{m.sanskrit}</p>
                                                <p className="text-slate-300 text-sm">{lang === "en" ? m.english : m.hindi}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* The Essence */}
                            <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl p-8 border border-amber-400/40 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Flame className="w-12 h-12 text-amber-400" />
                                </div>
                                <h4 className="text-amber-200 font-black mb-4 flex items-center gap-3">
                                    <span className="bg-amber-500 text-slate-950 w-8 h-8 rounded-lg flex items-center justify-center text-lg">💡</span>
                                    {lang === "en" ? "THE ESSENCE" : "सार"}
                                </h4>
                                <p className="text-amber-50 text-xl leading-relaxed italic font-medium relative z-10">
                                    {lang === "en" ? shloka.simpleExplanation : shloka.simpleExplanationHindi}
                                </p>
                            </div>

                            {/* Practice Launchers */}
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <button
                                    onClick={() => (window as any).showSadhanaTimer && (window as any).showSadhanaTimer()}
                                    className="bg-amber-600/20 hover:bg-amber-600/30 border border-amber-500/30 rounded-xl p-4 text-amber-300 font-bold text-sm flex items-center justify-center gap-2 transition-all"
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
                        </div>
                    </div>

                    {/* Visual Section */}
                    <div className="relative bg-black/40 min-h-[500px] flex items-center justify-center overflow-hidden border-l border-amber-500/10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 to-transparent pointer-events-none" />

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
                                    {shloka.id <= 4 ? "🔥" : shloka.id <= 6 ? "🌾" : "💀"}
                                </motion.div>
                                <p className="text-amber-400/50 font-medium italic max-w-xs mx-auto">{shloka.nanoBananaPrompt}</p>
                            </div>
                        )}

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                            <span className="px-4 py-1.5 bg-black/60 rounded-full text-[10px] text-amber-400 font-black tracking-[0.2em] uppercase border border-amber-500/30 backdrop-blur-md">
                                {shloka.theme || `Verse ${shloka.id}`}
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
                        className="w-14 h-14 flex items-center justify-center bg-slate-900 text-amber-400 rounded-full border border-amber-500/30 hover:bg-amber-500 hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed group"
                    >
                        <ChevronLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <div className="flex flex-wrap justify-center gap-2 max-w-md">
                        {data.map((s, i) => (
                            <button
                                key={s.id}
                                onClick={() => setCurrentIndex(i)}
                                className={`w-10 h-10 rounded-xl text-sm font-black transition-all border ${i === currentIndex
                                    ? "bg-amber-500 border-amber-300 text-white scale-110 shadow-lg shadow-amber-500/40"
                                    : "bg-slate-900 border-amber-500/20 text-amber-700 hover:border-amber-500"
                                    }`}
                            >
                                {s.id}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setCurrentIndex(prev => Math.min(data.length - 1, prev + 1))}
                        disabled={currentIndex === data.length - 1}
                        className="w-14 h-14 flex items-center justify-center bg-slate-900 text-amber-400 rounded-full border border-amber-500/30 hover:bg-amber-500 hover:text-white transition-all disabled:opacity-20 disabled:cursor-not-allowed group"
                    >
                        <ChevronRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                <div className="flex items-center gap-3">
                    <div className="h-1 w-48 bg-slate-900 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-amber-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentIndex + 1) / data.length) * 100}%` }}
                        />
                    </div>
                    <p className="text-amber-400/50 text-xs font-black uppercase tracking-widest">
                        {currentIndex + 1} / {data.length} Verses
                    </p>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// MAIN KATHA LAYOUT COMPONENT
// ==========================================
export default function KathaLayout() {
    const router = useRouter();
    const [lang, setLang] = useState<"en" | "hi">("en");
    const [activeTab, setActiveTab] = useState<"overview" | "research" | "valli1" | "valli2" | "valli3" | "valli4" | "valli5" | "valli6">("overview");
    const [isPlaying, setIsPlaying] = useState(false);
    const [sadhanaActive, setSadhanaActive] = useState(false);
    const [reportActive, setReportActive] = useState(false);

    // Expose control to sub-components via window for simplicity
    React.useEffect(() => {
        (window as any).showSadhanaTimer = () => setSadhanaActive(true);
        (window as any).showExperienceReport = () => setReportActive(true);
    }, []);

    // Get data for each valli
    const valli1Data = getKathaByValli(1);
    const valli2Data = getKathaByValli(2);
    const valli3Data = getKathaByValli(3);
    const valli4Data = getKathaByValli(4);
    const valli5Data = getKathaByValli(5);
    const valli6Data = getKathaByValli(6);

    return (
        <div className="min-h-screen bg-slate-950 text-amber-50 font-sans selection:bg-amber-500/30 selection:text-amber-200">
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
                        className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"
                    />
                    <motion.div
                        animate={{ y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px]"
                    />
                    {/* Floating skull icon */}
                    <motion.div
                        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="absolute top-1/3 right-1/6 opacity-10"
                    >
                        <Skull className="w-24 h-24 text-amber-500" />
                    </motion.div>
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="inline-block px-5 py-2 bg-amber-500/10 text-amber-400 rounded-full text-[10px] font-black tracking-[0.4em] uppercase mb-8 border border-amber-500/20 backdrop-blur-md">
                            Krishna Yajur Veda • 119 Verses • 6 Vallis
                        </span>
                        <h1 className="text-6xl md:text-9xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-600 mb-8 tracking-tighter">
                            {lang === "en" ? "Katha Upanishad" : "कठोपनिषद्"}
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-2xl md:text-3xl text-amber-200/80">
                            <span className="font-light italic">"{lang === "en" ? "The Dialogue with Death" : "मृत्यु से संवाद"}"</span>
                            <span className="hidden md:block w-2 h-2 bg-amber-500 rounded-full" />
                            <span className="font-medium">{lang === "en" ? "Nachiketa's Quest for Immortality" : "नचिकेता की अमरता की खोज"}</span>
                        </div>
                    </motion.div>
                </div>
            </header>

            {/* Navigation Bar */}
            <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-white/5 px-4 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <button
                        onClick={() => router.push("/student/batch2/upanishads")}
                        className="flex items-center gap-3 text-amber-500 hover:text-amber-400 transition-all group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-slate-900/50 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white transition-all">
                            <ArrowLeft className="w-5 h-5" />
                        </div>
                        <span className="font-black text-xs uppercase tracking-widest hidden sm:block">Portal</span>
                    </button>

                    <div className="flex bg-black/60 rounded-2xl p-1.5 border border-white/5 shadow-2xl overflow-x-auto no-scrollbar max-w-[70%] md:max-w-none">
                        {[
                            { id: "overview", label: "Overview", labelHi: "सारांश", icon: Info },
                            { id: "research", label: "Research", labelHi: "शोध", icon: BookOpen },
                            { id: "valli1", label: "I: The Curse", labelHi: "१: शाप", icon: User },
                            { id: "valli2", label: "II: Two Paths", labelHi: "२: दो मार्ग", icon: Gift },
                            { id: "valli3", label: "III: Chariot", labelHi: "३: रथ", icon: Crown },
                            { id: "valli4", label: "IV: The Soul", labelHi: "४: आत्मा", icon: Sparkles },
                            { id: "valli5", label: "V: Inner Ruler", labelHi: "५: अंतर्यामी", icon: Flame },
                            { id: "valli6", label: "VI: Liberation", labelHi: "६: मुक्ति", icon: Zap }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${activeTab === tab.id
                                    ? "bg-amber-500 text-slate-950 shadow-lg"
                                    : "text-amber-500 hover:text-amber-400"
                                    }`}
                            >
                                <tab.icon className="w-4 h-4" />
                                <span className="hidden md:inline uppercase tracking-widest">{lang === "en" ? tab.label : tab.labelHi}</span>
                                <span className="md:hidden uppercase tracking-widest">{tab.id === 'overview' ? (lang === "en" ? "Info" : "info") : tab.id.replace('valli', 'V')}</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex bg-slate-900/50 rounded-xl p-1 border border-white/5">
                            {(["en", "hi"] as const).map((l) => (
                                <button
                                    key={l}
                                    onClick={() => setLang(l)}
                                    className={`px-4 py-1.5 rounded-lg text-xs font-black transition-all ${lang === l ? "bg-amber-500 text-slate-950 shadow-md" : "text-amber-600 hover:text-amber-400"
                                        }`}
                                >
                                    {l.toUpperCase()}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isPlaying ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20" : "bg-slate-900/50 text-amber-600 hover:text-amber-400"
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
                    className="h-full bg-amber-500"
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
                            <KathaOverview lang={lang} setActiveTab={setActiveTab} />
                        )}
                        {activeTab === "research" && (
                            <KathaResearchReport lang={lang} />
                        )}
                        {activeTab === "valli1" && (
                            <WisdomStream
                                data={valli1Data}
                                lang={lang}
                                title={lang === "en" ? "The Story Begins" : "कथा का आरंभ"}
                                subtitle="Adhyaya 1, Valli 1: The Curse & Journey to Death"
                            />
                        )}
                        {activeTab === "valli2" && (
                            <WisdomStream
                                data={valli2Data}
                                lang={lang}
                                title={lang === "en" ? "The Two Paths" : "दो मार्ग"}
                                subtitle="Adhyaya 1, Valli 2: Shreyas (Good) vs Preyas (Pleasant)"
                            />
                        )}
                        {activeTab === "valli3" && (
                            <WisdomStream
                                data={valli3Data}
                                lang={lang}
                                title={lang === "en" ? "The Chariot Analogy" : "रथ रूपक"}
                                subtitle="Adhyaya 1, Valli 3: The Atman as the Lord of the Chariot"
                            />
                        )}
                        {activeTab === "valli4" && (
                            <WisdomStream
                                data={valli4Data}
                                lang={lang}
                                title={lang === "en" ? "The Inner Self" : "अंतरात्मा"}
                                subtitle="Adhyaya 2, Valli 1: Turning the Vision Inward"
                            />
                        )}
                        {activeTab === "valli5" && (
                            <WisdomStream
                                data={valli5Data}
                                lang={lang}
                                title={lang === "en" ? "The Inner Ruler" : "अंतर्यामी"}
                                subtitle="Adhyaya 2, Valli 2: The Thumb-sized Purusha"
                            />
                        )}
                        {activeTab === "valli6" && (
                            <WisdomStream
                                data={valli6Data}
                                lang={lang}
                                title={lang === "en" ? "The Yoga of Immortality" : "अमरता का योग"}
                                subtitle="Adhyaya 2, Valli 3: The Final Teaching & Liberation"
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 py-32 relative overflow-hidden text-center border-t border-amber-900/10">
                <div className="max-w-4xl mx-auto px-6 space-y-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="space-y-6"
                    >
                        <div className="w-20 h-px bg-amber-500/30 mx-auto" />
                        <p className="text-3xl md:text-5xl font-serif text-amber-50 leading-tight">
                            उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत ।
                        </p>
                        <p className="text-amber-400/60 font-medium italic text-lg max-w-2xl mx-auto">
                            {lang === "en"
                                ? "Arise! Awake! Approach the great teachers and learn!"
                                : "उठो! जागो! महान शिक्षकों के पास जाओ और सीखो!"}
                        </p>
                        <p className="text-amber-500/40 text-sm">— Katha Upanishad 1.3.14</p>
                        <div className="w-20 h-px bg-amber-500/30 mx-auto" />
                    </motion.div>

                    <div className="pt-20">
                        <p className="text-[10px] text-amber-500/20 font-black tracking-[1em] uppercase">
                            Digital Upanishad Experience • Eduecosystem
                        </p>
                    </div>
                </div>

                {/* Glow Background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.05)_0%,transparent_70%)] pointer-events-none" />

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
                                    title="Katha: Secret of the Self"
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
                            title="Katha Upanishad: Internal Shift"
                        />
                    )}
                </AnimatePresence>
            </footer>
        </div>
    );
}
