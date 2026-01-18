"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Scale, History, Globe, Brain, Zap, Sun, GitMerge, FileText, ArrowRight, Eye, HelpCircle, Flame, User, Crown } from "lucide-react";

interface ResearchSectionProps {
    title: string;
    children: React.ReactNode;
    icon?: React.ElementType;
}

const ResearchSection = ({ title, children, icon: Icon }: ResearchSectionProps) => {
    const IconComp = Icon as any;
    return (
        <div className="mb-12 relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-500/50 to-transparent rounded-full" />
            <div className="flex items-center gap-3 mb-6">
                {IconComp && <IconComp className="w-6 h-6 text-amber-500" />}
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-amber-100 drop-shadow-md">{title}</h3>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-amber-50/90 font-light tracking-wide">
                {children}
            </div>
        </div>
    );
};

const HighlightBox = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-slate-900/80 border border-amber-500/20 rounded-2xl p-6 md:p-8 my-8 relative overflow-hidden group hover:bg-slate-800 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Flame className="w-24 h-24 text-amber-500" />
        </div>
        <h4 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-4 border-b border-amber-500/20 pb-2 inline-block">
            {title}
        </h4>
        <div className="relative z-10 space-y-4">
            {children}
        </div>
    </div>
);

const ComparisonTable = ({ headers, rows }: { headers: string[], rows: string[][] }) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-amber-500/20 shadow-2xl bg-slate-950">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-slate-900">
                    {headers.map((h, i) => (
                        <th key={i} className="p-4 text-amber-200 font-serif font-bold border-b border-amber-500/20 min-w-[150px] tracking-wide">
                            {h}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i} className="border-b border-amber-500/5 hover:bg-amber-500/5 transition-colors">
                        {row.map((cell, j) => (
                            <td key={j} className="p-4 text-amber-50 border-r border-amber-500/5 last:border-r-0">
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default function KathaResearchReport({ lang }: { lang: "en" | "hi" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto space-y-16 pb-20"
        >
            {/* Header */}
            <div className="text-center space-y-6 border-b border-amber-500/10 pb-12">
                <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-500 rounded-full text-[10px] font-black tracking-[0.3em] uppercase border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                    Comprehensive Research Report
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-400 to-amber-600 drop-shadow-sm">
                    {lang === "en" ? "Katha Upanishad" : "कठोपनिषद्"}
                </h2>
                <h3 className="text-xl md:text-2xl text-amber-200/60 font-serif italic max-w-3xl mx-auto">
                    {lang === "en"
                        ? "The Secret of Death, The Chariot Analogy, and The Path to Immortality"
                        : "मृत्यु का रहस्य, रथ रूपक, और अमरता का मार्ग"}
                </h3>
            </div>

            {/* Introduction */}
            <ResearchSection title={lang === "en" ? "Introduction" : "परिचय"} icon={BookOpen}>
                <p>
                    {lang === "en"
                        ? "The Katha Upanishad is perhaps the most famous of all Upanishads, widely known for the dialogue between the teenage seeker Nachiketa and Yama, the Lord of Death. It addresses the most pressing question of human existence: What lies beyond death?"
                        : "कठोपनिषद् शायद सभी उपनिषदों में सबसे प्रसिद्ध है, जो किशोर साधक नचिकेता और मृत्यु के देवता यम के बीच संवाद के लिए व्यापक रूप से जाना जाता है। यह मानव अस्तित्व के सबसे ज्वलंत प्रश्न को संबोधित करता है: मृत्यु के परे क्या है?"}
                </p>
                <HighlightBox title={lang === "en" ? "Key Concept" : "मुख्य अवधारणा"}>
                    <p className="italic text-amber-200">
                        {lang === "en"
                            ? "\"The good (Shreyas) is one thing, the pleasant (Preyas) is another. These two, having different ends, bind a man. It is well with him who chooses the good. He who chooses the pleasant misses the true end.\""
                            : "\"श्रेय (कल्याण) एक है, प्रेय (प्रिय) दूसरा है। अलग-अलग उद्देश्यों वाले ये दोनों मनुष्य को बांधते हैं। जो कल्याण को चुनता है उसका भला होता है। जो प्रिय को चुनता है वह सच्चे लक्ष्य से चूक जाता है।\""}
                    </p>
                </HighlightBox>
            </ResearchSection>

            {/* The Chariot Analogy */}
            <ResearchSection title={lang === "en" ? "The Chariot Analogy (Ratha Kalpana)" : "रथ रूपक (रथ कल्पना)"} icon={Crown}>
                <p>
                    {lang === "en"
                        ? "One of the most enduring metaphors in Indian philosophy is found in the Katha Upanishad: the individual as a rider in a chariot. This analogy describes the relationship between the body, senses, mind, intellect, and the Self."
                        : "भारतीय दर्शन में सबसे स्थायी रूपकों में से एक कठोपनिषद् में पाया जाता है: रथ में सवार के रूप में व्यक्ति। यह उपमा शरीर, इंद्रियों, मन, बुद्धि और आत्मा के बीच संबंधों का वर्णन करती है।"}
                </p>

                <ComparisonTable
                    headers={lang === "en" ? ["Component", "Symbol", "Function"] : ["घटक", "प्रतीक", "कार्य"]}
                    rows={[
                        [
                            lang === "en" ? "Body" : "शरीर",
                            lang === "en" ? "Chariot" : "रथ",
                            lang === "en" ? "The vehicle for the journey" : "यात्रा का वाहन"
                        ],
                        [
                            lang === "en" ? "Atman (Self)" : "आत्मा",
                            lang === "en" ? "Master of the Chariot" : "रथ स्वामी",
                            lang === "en" ? "The witness, the passenger" : "साक्षी, यात्री"
                        ],
                        [
                            lang === "en" ? "Intellect (Buddhi)" : "बुद्धि",
                            lang === "en" ? "Charioteer (Driver)" : "सारथी (चालक)",
                            lang === "en" ? "Discrimination, decision making" : "विवेक, निर्णय लेना"
                        ],
                        [
                            lang === "en" ? "Mind (Manas)" : "मन",
                            lang === "en" ? "Reins" : "लगाम",
                            lang === "en" ? "Controls the senses" : "इंद्रियों को नियंत्रित करता है"
                        ],
                        [
                            lang === "en" ? "Senses" : "इंद्रियां",
                            lang === "en" ? "Horses" : "घोड़े",
                            lang === "en" ? "Draw the chariot towards objects" : "रथ को विषयों की ओर खींचते हैं"
                        ]
                    ]}
                />
            </ResearchSection>

            {/* Three Boons */}
            <ResearchSection title={lang === "en" ? "The Three Boons" : "तीन वरदान"} icon={User}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    <div className="bg-slate-900 p-6 rounded-xl border border-amber-500/20 shadow-lg">
                        <div className="text-4xl mb-4">🏠</div>
                        <h4 className="text-amber-500 font-bold mb-2">{lang === "en" ? "1. Peace at Home" : "१. घर में शांति"}</h4>
                        <p className="text-sm text-amber-100/70">
                            {lang === "en"
                                ? "Nachiketa asks for his father's anger to be appeased."
                                : "नचिकेता अपने पिता के क्रोध को शांत करने के लिए कहता है।"}
                        </p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl border border-amber-500/20 shadow-lg">
                        <div className="text-4xl mb-4">🔥</div>
                        <h4 className="text-amber-500 font-bold mb-2">{lang === "en" ? "2. Celestial Fire" : "२. स्वर्गीय अग्नि"}</h4>
                        <p className="text-sm text-amber-100/70">
                            {lang === "en"
                                ? "Knowledge of the Fire Sacrifice that leads to heaven."
                                : "स्वर्ग की ओर ले जाने वाले अग्नि यज्ञ का ज्ञान।"}
                        </p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl border border-amber-500/20 shadow-lg border-b-4 border-b-amber-500">
                        <div className="text-4xl mb-4">☠️</div>
                        <h4 className="text-amber-500 font-bold mb-2">{lang === "en" ? "3. Beyond Death" : "३. मृत्यु के परे"}</h4>
                        <p className="text-sm text-amber-100/70">
                            {lang === "en"
                                ? "The crucial question: Does the Self exist after death?"
                                : "महत्वपूर्ण प्रश्न: क्या मृत्यु के बाद आत्मा अस्तित्व में रहती है?"}
                        </p>
                    </div>
                </div>
            </ResearchSection>

            {/* Conclusion */}
            <ResearchSection title={lang === "en" ? "Conclusion" : "निष्कर्ष"} icon={Scale}>
                <p>
                    {lang === "en"
                        ? "Yama concludes that the Self is beginningless, endless, and beyond reasoning. It is smaller than the smallest and greater than the greatest. By realizing this Self, one is liberated from the jaws of death."
                        : "यम निष्कर्ष निकालते हैं कि आत्मा अनादि, अनंत और तर्क से परे है। यह छोटे से छोटे और बड़े से भी बड़ा है। इस आत्मा को जानकर व्यक्ति मृत्यु के जबड़ों से मुक्त हो जाता है।"}
                </p>
            </ResearchSection>

            {/* Citation Footer */}
            <div className="border-t border-amber-500/10 pt-8 text-xs text-amber-500/30 text-center font-mono">
                Vedanta Research Report • Based on standard academic & traditional sources.
            </div>
        </motion.div>
    );
}
