"use client";

import React from "react";
import { motion } from "framer-motion";
import { KENA_INTRO_DATA } from "@/components/batch2/upanishads/data/kena-intro-data";
import { BookOpen, Sparkles, MapPin, Feather, Quote, Brain } from "lucide-react";

// Define flexible section type to handle all possible properties
interface KenaSection {
    id: string;
    title: string;
    description?: string;
    content?: Array<{
        heading: string;
        text?: string;
        points?: string[];
        list?: string[];
    }>;
    mantra?: {
        sanskrit: string;
        transliteration: string;
    };
    explanation?: Array<{
        title: string;
        quote?: string;
        meaning?: string;
        subPoints?: string[];
    }>;
    table?: {
        headers: string[];
        rows: string[][];
    };
    warning?: {
        title: string;
        text: string;
    };
    details?: Array<{
        label: string;
        value: string;
    }>;
    points?: Array<{
        title: string;
        content: string;
        list?: string[];
    }>;
}

export default function KenaIntroMode({ lang }: { lang: "en" | "hi" }) {
    // Cast sections to our flexible type
    const sections = KENA_INTRO_DATA.sections as KenaSection[];

    const objectives = [
        { icon: "👁️", label: lang === "en" ? "Sharpened Perception" : "तीक्ष्ण दृष्टि", desc: lang === "en" ? "Identify the source of sight and hearing." : "देखने और सुनने के स्रोत की पहचान।" },
        { icon: "🧠", label: lang === "en" ? "Mental Clarity" : "मानसिक स्पष्टता", desc: lang === "en" ? "Recognize the 'impeller' behind thoughts." : "विचारों के पीछे के 'प्रेरक' को पहचानना।" },
        { icon: "⚡", label: lang === "en" ? "Internal Power" : "आंतरिक शक्ति", desc: lang === "en" ? "Understand the source of Vitality (Prana)." : "प्राण शक्ति के स्रोत को समझना।" },
    ];

    return (
        <div className="space-y-12 max-w-5xl mx-auto">
            {/* Transformation Objectives Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
                {objectives.map((obj, i) => (
                    <div key={i} className="bg-teal-500/5 border border-teal-500/20 rounded-2xl p-6 text-center hover:bg-teal-500/10 transition-all">
                        <div className="text-3xl mb-3">{obj.icon}</div>
                        <h4 className="text-teal-400 font-bold mb-1">{obj.label}</h4>
                        <p className="text-xs text-slate-400">{obj.desc}</p>
                    </div>
                ))}
            </motion.div>
            {sections.map((section, idx) => (
                <motion.section
                    key={section.id || idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-cyan-900/30 rounded-3xl border border-teal-500/20 p-8 md:p-12 backdrop-blur-sm overflow-hidden"
                >
                    {/* Section Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-300">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                                {section.title}
                            </h2>
                            <div className="h-1 w-20 bg-teal-500 mt-2 rounded-full" />
                        </div>
                    </div>

                    {/* Section Description */}
                    {section.description && (
                        <p className="text-cyan-100/80 mb-8 text-lg font-light leading-relaxed">
                            {section.description}
                        </p>
                    )}

                    {/* Content Blocks */}
                    {section.content && (
                        <div className="grid md:grid-cols-2 gap-8">
                            {section.content.map((block, i) => (
                                <div key={i} className="bg-cyan-950/50 rounded-2xl p-6 border border-teal-500/10 hover:border-teal-500/30 transition-all">
                                    <h3 className="text-xl font-bold text-teal-400 mb-4 flex items-center gap-2">
                                        <Sparkles className="w-5 h-5" />
                                        {block.heading}
                                    </h3>
                                    {block.text && (
                                        <div className="text-cyan-100 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: block.text }} />
                                    )}
                                    {block.points && (
                                        <ul className="space-y-3">
                                            {block.points.map((point, j) => (
                                                <li key={j} className="text-cyan-200/80 text-sm leading-relaxed pl-3 border-l-2 border-teal-500/30" dangerouslySetInnerHTML={{ __html: point }} />
                                            ))}
                                        </ul>
                                    )}
                                    {block.list && (
                                        <div className="space-y-3">
                                            {block.list.map((item, j) => (
                                                <div key={j} className="bg-black/20 rounded-lg p-3 text-sm text-cyan-200" dangerouslySetInnerHTML={{ __html: item }} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Mantra Block */}
                    {section.mantra && (
                        <div className="space-y-8 my-8">
                            <div className="bg-black/30 rounded-2xl p-8 text-center border border-teal-500/20 shadow-inner">
                                <p className="text-2xl md:text-3xl text-teal-50 font-serif leading-relaxed mb-6 whitespace-pre-line" style={{ fontFamily: "'Noto Sans Devanagari', serif" }}>
                                    {section.mantra.sanskrit}
                                </p>
                                <p className="text-teal-400/80 italic font-medium whitespace-pre-line">
                                    {section.mantra.transliteration}
                                </p>
                            </div>

                            {/* Mantra Explanations */}
                            {section.explanation && (
                                <div className="grid md:grid-cols-2 gap-6">
                                    {section.explanation.map((item, i) => (
                                        <div key={i} className="bg-cyan-950/40 rounded-xl p-6 border border-teal-500/10 hover:border-teal-500/40 transition-all group">
                                            <h3 className="text-teal-300 font-bold mb-3 group-hover:text-teal-200 transition-colors">{item.title}</h3>
                                            {item.quote && (
                                                <div className="mb-4 relative pl-4">
                                                    <Quote className="w-4 h-4 text-teal-500 absolute left-0 top-0 opacity-50" />
                                                    <p className="text-white italic text-sm leading-relaxed">{item.quote}</p>
                                                </div>
                                            )}
                                            {item.meaning && (
                                                <div className="text-cyan-200/80 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.meaning }} />
                                            )}
                                            {item.subPoints && (
                                                <div className="space-y-3 mt-3">
                                                    {item.subPoints.map((sub, j) => (
                                                        <div key={j} className="bg-black/20 rounded p-3 text-xs text-cyan-200" dangerouslySetInnerHTML={{ __html: sub }} />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Table Block */}
                    {section.table && (
                        <div className="overflow-x-auto my-8 rounded-xl border border-teal-500/20 shadow-2xl bg-cyan-950/50">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-cyan-900/60">
                                        {section.table.headers.map((h, i) => (
                                            <th key={i} className="p-4 text-teal-200 font-serif font-bold border-b border-teal-500/20 min-w-[150px] tracking-wide">
                                                {h}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {section.table.rows.map((row, i) => (
                                        <tr key={i} className="border-b border-teal-500/5 hover:bg-teal-500/5 transition-colors">
                                            {row.map((cell, j) => (
                                                <td key={j} className="p-4 text-teal-50 border-r border-teal-500/5 last:border-r-0">
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {/* Warning/Limitation Block */}
                    {section.warning && (
                        <div className="bg-orange-500/10 border-l-4 border-orange-500 p-6 rounded-r-xl my-6">
                            <h4 className="text-orange-400 font-bold mb-2 uppercase tracking-wider text-sm flex items-center gap-2">
                                <span className="text-lg">⚠️</span>
                                {section.warning.title}
                            </h4>
                            <p className="text-orange-100/90 leading-relaxed italic">
                                {section.warning.text}
                            </p>
                        </div>
                    )}

                    {/* Map/Location Block */}
                    {section.details && (
                        <div className="grid md:grid-cols-3 gap-4">
                            {section.details.map((detail, i) => (
                                <div key={i} className="bg-cyan-900/40 border border-teal-500/20 rounded-2xl p-6 text-center hover:bg-teal-900/20 transition-colors">
                                    <MapPin className="w-6 h-6 text-teal-500 mx-auto mb-3" />
                                    <h4 className="text-teal-300 font-bold text-sm uppercase tracking-wider mb-1">{detail.label}</h4>
                                    <p className="text-white font-serif text-xl">{detail.value}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.section>
            ))}

            {/* Final CTA for Immersive Study */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-teal-600/20 to-cyan-600/20 border border-teal-400/30 rounded-[3rem] p-12 text-center space-y-8 shadow-2xl relative overflow-hidden"
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-teal-500/20 blur-[80px] rounded-full pointer-events-none" />

                <div className="space-y-4 relative z-10">
                    <div className="w-20 h-20 bg-teal-500 text-slate-950 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-teal-500/20">
                        <Sparkles className="w-10 h-10" />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">Ready for Internal Inquiry?</h3>
                    <p className="text-cyan-100/70 text-xl max-w-2xl mx-auto leading-relaxed">
                        The first mantra of Kena is not just text; it is a portal. Experience the guided contemplation and observe the 'First Mover' of your own mind.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10 pt-4">
                    <button
                        onClick={() => (window as any).showGuidedMantra && (window as any).showGuidedMantra()}
                        className="px-10 py-5 bg-teal-500 text-slate-950 rounded-full font-black text-lg hover:bg-teal-400 hover:scale-105 transition-all shadow-xl shadow-teal-500/20 flex items-center gap-3"
                    >
                        <Brain className="w-6 h-6" /> Start Immersive Study
                    </button>
                    <button className="px-10 py-5 bg-white/5 text-teal-300 border border-teal-500/30 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                        Skip to All Mantras
                    </button>
                </div>

                <p className="text-[10px] text-teal-500/50 uppercase font-black tracking-[0.4em] relative z-10">
                    Audio Guidance Included • 3:30 Experience
                </p>
            </motion.div>
        </div>
    );
}
