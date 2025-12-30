"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Scale, History, Globe, Brain, Zap, Sun, GitMerge, FileText, ArrowRight, Eye, HelpCircle, Flame, User, Atom, Wind } from "lucide-react";

interface ResearchSectionProps {
    title: string;
    children: React.ReactNode;
    icon?: React.ElementType;
}

const ResearchSection = ({ title, children, icon: Icon }: ResearchSectionProps) => (
    <div className="mb-12 relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-500/50 to-transparent rounded-full" />
        <div className="flex items-center gap-3 mb-6">
            {Icon && <Icon className="w-6 h-6 text-emerald-500" />}
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-emerald-100 drop-shadow-md">{title}</h3>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-emerald-50/90 font-light tracking-wide">
            {children}
        </div>
    </div>
);

const HighlightBox = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="bg-slate-900/80 border border-emerald-500/20 rounded-2xl p-6 md:p-8 my-8 relative overflow-hidden group hover:bg-slate-800 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Atom className="w-24 h-24 text-emerald-500" />
        </div>
        <h4 className="text-emerald-500 font-bold uppercase tracking-widest text-sm mb-4 border-b border-emerald-500/20 pb-2 inline-block">
            {title}
        </h4>
        <div className="relative z-10 space-y-4">
            {children}
        </div>
    </div>
);

const ComparisonTable = ({ headers, rows }: { headers: string[], rows: string[][] }) => (
    <div className="overflow-x-auto my-8 rounded-xl border border-emerald-500/20 shadow-2xl bg-slate-950">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-slate-900">
                    {headers.map((h, i) => (
                        <th key={i} className="p-4 text-emerald-200 font-serif font-bold border-b border-emerald-500/20 min-w-[150px] tracking-wide">
                            {h}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i} className="border-b border-emerald-500/5 hover:bg-emerald-500/5 transition-colors">
                        {row.map((cell, j) => (
                            <td key={j} className="p-4 text-emerald-50 border-r border-emerald-500/5 last:border-r-0">
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default function PrashnaResearchReport({ lang }: { lang: "en" | "hi" }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto space-y-16 pb-20"
        >
            {/* Header */}
            <div className="text-center space-y-6 border-b border-emerald-500/10 pb-12">
                <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-500 rounded-full text-[10px] font-black tracking-[0.3em] uppercase border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                    Comprehensive Research Report
                </span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-100 via-emerald-400 to-emerald-600 drop-shadow-sm">
                    {lang === "en" ? "Prashna Upanishad" : "प्रश्नोपनिषद्"}
                </h2>
                <h3 className="text-xl md:text-2xl text-emerald-200/60 font-serif italic max-w-3xl mx-auto">
                    {lang === "en"
                        ? "The Six Cosmic Questions on Life, Energy, and the Self"
                        : "जीवन, ऊर्जा और आत्मा पर छह ब्रह्मांडीय प्रश्न"}
                </h3>
            </div>

            {/* Introduction */}
            <ResearchSection title={lang === "en" ? "Introduction" : "परिचय"} icon={BookOpen}>
                <p>
                    {lang === "en"
                        ? "The Prashna Upanishad ('Upanishad of Questions') belongs to the Atharva Veda. It is structured as a dialogue between the sage Pippalada and six seekers who approach him with fuel in hand, symbolizing their readiness to serve and learn."
                        : "प्रश्नोपनिषद् ('प्रश्नों का उपनिषद्') अथर्ववेद से संबंधित है। यह ऋषि पिप्पलाद और छह साधकों के बीच संवाद के रूप में संरचित है जो हाथ में ईंधन (समिधा) लेकर उनके पास आते हैं, जो सेवा करने और सीखने की उनकी तत्परता का प्रतीक है।"}
                </p>
                <HighlightBox title={lang === "en" ? "Key Concept" : "मुख्य अवधारणा"}>
                    <p className="italic text-emerald-200">
                        {lang === "en"
                            ? "\"Prana (Life Force) and Rayi (Matter) are the dual principles from which all creation springs. Prana is the sun, Rayi is the moon. Everything that has form is Rayi; the formless energy is Prana.\""
                            : "\"प्राण (जीवन शक्ति) और रयि (पदार्थ) दोहरे सिद्धांत हैं जिनसे सभी सृष्टि उत्पन्न होती है। प्राण सूर्य है, रयि चंद्रमा है। जो कुछ भी रूप वाला है वह रयि है; निराकार ऊर्जा प्राण है।\""}
                    </p>
                </HighlightBox>
            </ResearchSection>

            {/* The Six Questions */}
            <ResearchSection title={lang === "en" ? "The Six Questions" : "छह प्रश्न"} icon={HelpCircle}>
                <p>
                    {lang === "en"
                        ? "Each of the six seekers asks a specific question that leads from the gross creation to the ultimate reality via Prana."
                        : "प्रत्येक छह साधक एक विशिष्ट प्रश्न पूछता है जो स्थूल सृष्टि से प्राण के माध्यम से परम वास्तविकता की ओर ले जाता है।"}
                </p>

                <ComparisonTable
                    headers={lang === "en" ? ["Seeker", "Question Topic", "Significance"] : ["साधक", "प्रश्न विषय", "महत्व"]}
                    rows={[
                        [
                            lang === "en" ? "Kabandhi" : "कबन्धी",
                            lang === "en" ? "Origin of Creatures" : "जीवों की उत्पत्ति",
                            lang === "en" ? "Establishment of Prana & Rayi duality" : "प्राण और रयि द्वैत की स्थापना"
                        ],
                        [
                            lang === "en" ? "Bhargava" : "भार्गव",
                            lang === "en" ? "Constituents of Body" : "शरीर के घटक",
                            lang === "en" ? "Supremacy of Prana over senses" : "इंद्रियों पर प्राण की श्रेष्ठता"
                        ],
                        [
                            lang === "en" ? "Kausalya" : "कौसल्य",
                            lang === "en" ? "Origin of Prana" : "प्राण की उत्पत्ति",
                            lang === "en" ? "Functioning of Prana in the body" : "शरीर में प्राण की कार्यप्रणाली"
                        ],
                        [
                            lang === "en" ? "Gargya" : "गार्ग्य",
                            lang === "en" ? "Sleep & Dreams" : "नींद और सपने",
                            lang === "en" ? "Analysis of consciousness states" : "चेतना की अवस्थाओं का विश्लेषण"
                        ],
                        [
                            lang === "en" ? "Satyakama" : "सत्यकाम",
                            lang === "en" ? "Om Meditation" : "ओम ध्यान",
                            lang === "en" ? "Attaining higher worlds via Om" : "ओम के माध्यम से उच्च लोकों की प्राप्ति"
                        ],
                        [
                            lang === "en" ? "Sukesha" : "सुकेश",
                            lang === "en" ? "The 16-Part Person" : "सोलह कलाओं वाला पुरुष",
                            lang === "en" ? "The Self within the body" : "शरीर के भीतर आत्मा"
                        ]
                    ]}
                />
            </ResearchSection>

            {/* Prana Analysis */}
            <ResearchSection title={lang === "en" ? "The Science of Prana" : "प्राण का विज्ञान"} icon={Wind}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="bg-slate-900 p-6 rounded-xl border border-emerald-500/20 shadow-lg">
                        <div className="text-4xl mb-4">☀️</div>
                        <h4 className="text-emerald-500 font-bold mb-2">{lang === "en" ? "Aditya (Sun)" : "आदित्य (सूर्य)"}</h4>
                        <p className="text-sm text-emerald-100/70">
                            {lang === "en"
                                ? "The external Prana that rises to assist the Prana in the eye."
                                : "बाहरी प्राण जो आंख में प्राण की सहायता के लिए उगता है।"}
                        </p>
                    </div>
                    <div className="bg-slate-900 p-6 rounded-xl border border-emerald-500/20 shadow-lg">
                        <div className="text-4xl mb-4">🌪️</div>
                        <h4 className="text-emerald-500 font-bold mb-2">{lang === "en" ? "Vayu (Air)" : "वायु (हवा)"}</h4>
                        <p className="text-sm text-emerald-100/70">
                            {lang === "en"
                                ? "Distributed within the body as Vyana, Samana, etc."
                                : "व्यान, समान आदि के रूप में शरीर के भीतर वितरित।"}
                        </p>
                    </div>
                </div>
            </ResearchSection>

            {/* Conclusion */}
            <ResearchSection title={lang === "en" ? "Conclusion" : "निष्कर्ष"} icon={Scale}>
                <p>
                    {lang === "en"
                        ? "The Upanishad concludes by pointing to the Purusha (Self) who is beyond the sixteen parts (Kalas). Just as rivers lose their name and form when they merge into the ocean, the sixteen parts merge into the Purusha, and one becomes immortal."
                        : "उपनिषद पुरुष (आत्मा) की ओर इशारा करते हुए समाप्त होता है जो सोलह कलाओं से परे है। जिस प्रकार नदियाँ समुद्र में मिल जाने पर अपना नाम और रूप खो देती हैं, उसी प्रकार सोलह कलाएँ पुरुष में मिल जाती हैं, और व्यक्ति अमर हो जाता है।"}
                </p>
            </ResearchSection>

            {/* Citation Footer */}
            <div className="border-t border-emerald-500/10 pt-8 text-xs text-emerald-500/30 text-center font-mono">
                Vedanta Research Report • Based on standard academic & traditional sources.
            </div>
        </motion.div>
    );
}
