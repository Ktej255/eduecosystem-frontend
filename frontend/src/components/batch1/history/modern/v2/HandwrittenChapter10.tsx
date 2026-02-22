"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Flame,
    Zap,
    XCircle,
    Target,
    AlertTriangle,
    Mic2,
    Gavel,
    ShieldAlert,
    Anchor,
    Feather,
    Users,
    Flag,
    BookOpen
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from '@/lib/language-store';
import { ch10Translations } from './translations/ch10';

export default function HandwrittenChapter10() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch10Translations.hi : ch10Translations.en;

    const [splitSide, setSplitSide] = useState<'moderates' | 'extremists' | null>(null);

    const iconMap: Record<string, React.ReactNode> = {
        fire: <Flame className="w-6 h-6 text-orange-600 mb-1" />,
        feather: <Feather className="w-6 h-6 text-orange-600 mb-1" />,
        x: <XCircle className="w-6 h-6 text-orange-600 mb-1" />,
        book: <BookOpen className="w-6 h-6 text-orange-600 mb-1" />,
    };

    return (
        <div className="min-h-screen bg-[#f5e6d3] p-4 md:p-8 font-['Roboto_Slab',_serif] text-[#1a1a1a] selection:bg-red-200 overflow-x-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Stardos+Stencil:wght@400;700&family=Roboto+Slab:wght@300;400;700&display=swap');
                
                .stencil-font {
                    font-family: 'Black Ops One', cursive;
                }
                
                .header-font {
                    font-family: 'Stardos Stencil', cursive;
                }

                .torn-paper {
                    background-color: #fff;
                    position: relative;
                    box-shadow: 2px 4px 6px rgba(0,0,0,0.1);
                }
                
                .torn-paper::after {
                    content: "";
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    width: 100%;
                    height: 20px;
                    background: radial-gradient(circle, transparent 70%, #fff 70%) 0 0,
                                radial-gradient(circle, transparent 70%, #fff 70%) 10px 10px;
                    background-size: 20px 20px;
                    transform: rotate(180deg);
                }

                .burn-mark {
                    background: radial-gradient(circle, rgba(0,0,0,0.2) 0%, transparent 70%);
                }
            `}</style>

            {/* HEADER: THE BURNING FUSE */}
            <header className="max-w-6xl mx-auto mb-16 text-center border-b-8 border-red-800 pb-8 relative pt-12">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Flame className="w-24 h-24 text-orange-600 animate-pulse fill-orange-500" />
                </div>
                <h2 className="stencil-font text-2xl md:text-3xl tracking-widest uppercase mb-2 text-red-800 animate-bounce">{t.bonfireTitle}</h2>
                <h1 className="header-font text-5xl md:text-8xl font-bold mb-6 uppercase tracking-tighter">
                    {t.headerTitle}
                </h1>
                <p className="text-xl md:text-2xl font-bold italic text-slate-800">
                    {t.headerSubtitle}
                </p>

                {/* TIMELINE OF FIRE */}
                <div className="mt-12 overflow-x-auto pb-4">
                    <div className="flex justify-center items-center min-w-[600px] gap-2 text-xs md:text-sm font-bold">
                        {t.timelineItems.map((item, idx) => (
                            <React.Fragment key={idx}>
                                {idx > 0 && <div className="h-1 w-8 bg-red-400"></div>}
                                <div className={`px-3 py-2 rounded shadow ${idx === 1 ? 'bg-red-600 text-white transform scale-110 shadow-lg' : idx === 3 ? 'bg-black text-white' : 'bg-slate-300'}`}>
                                    <span className={`block text-[10px] uppercase ${idx === 1 ? 'text-red-200' : idx === 3 ? 'text-gray-400' : 'text-slate-500'}`}>{item.date}</span>
                                    {item.label}
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* LEFT COLUMN: CAUSE & METHOD */}
                <div className="lg:col-span-4 space-y-8">

                    {/* TRIGGER CARD */}
                    <div className="torn-paper bg-red-50 p-6">
                        <h3 className="header-font text-3xl font-bold mb-4 border-b-4 border-red-800 pb-2">{t.triggerTitle}</h3>
                        <div className="mb-4">
                            <div className="text-sm font-bold uppercase text-red-800 flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" /> {t.villainLabel}
                            </div>
                            <p className="text-sm italic mt-1">{t.villainQuote}</p>
                        </div>
                        <ul className="text-sm space-y-3">
                            <li className="flex items-start gap-2">
                                <XCircle className="w-4 h-4 text-red-600 mt-0.5" />
                                <span><strong>{t.officialReason}</strong> {t.officialReasonText}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Target className="w-4 h-4 text-red-600 mt-0.5" />
                                <span><strong>{t.realReason}</strong> {t.realReasonText}</span>
                            </li>
                        </ul>
                        <div className="mt-4 bg-black text-white p-3 text-center rounded">
                            <div className="font-bold uppercase text-sm">{t.mourningDate}</div>
                            <div className="text-xs">{t.mourningEvent}</div>
                        </div>
                    </div>

                    {/* METHODS CARD */}
                    <div className="torn-paper bg-orange-50 p-6">
                        <h3 className="header-font text-3xl font-bold mb-4 border-b-4 border-orange-500 pb-2">{t.methodsTitle}</h3>
                        <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                            {t.methodCards.map((card, i) => (
                                <div key={i} className="p-2 border border-orange-300 bg-white shadow-sm">
                                    {iconMap[card.icon]}
                                    <strong>{card.bold}</strong>{card.text}
                                </div>
                            ))}
                        </div>

                        <div className="bg-white p-3 border-l-4 border-green-600 text-xs shadow-sm">
                            <strong className="block mb-1 text-green-800 uppercase">{t.constructiveTitle}</strong>
                            <ul className="space-y-1">
                                {t.constructiveItems.map((item, i) => (
                                    <li key={i}>{item.emoji} <strong>{item.bold}</strong>{item.text}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ORGANIZATION CARD */}
                    <div className="torn-paper p-6 bg-white">
                        <h3 className="header-font text-xl font-bold mb-3">{t.orgTitle}</h3>
                        <div className="space-y-3 text-sm">
                            <p><strong>{t.samitiLabel}</strong>{t.samitiText}</p>
                            <div className="bg-slate-100 p-3 border border-slate-300 rounded relative overflow-hidden">
                                <div className="font-bold text-slate-800">{t.swadeshBandhabTitle}</div>
                                <div className="text-xs italic">{t.swadeshBandhabPlace}</div>
                                <div className="text-[10px] mt-1 text-slate-600">{t.swadeshBandhabNote}</div>
                            </div>
                            <div className="bg-slate-100 p-3 border border-slate-300 rounded">
                                <div className="font-bold text-slate-800">{t.dawnTitle}</div>
                                <div className="text-xs italic">{t.dawnLeader}</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* MIDDLE COLUMN: LEADERS & SPLIT */}
                <div className="lg:col-span-5 space-y-8">

                    {/* LAL-BAL-PAL SECTION */}
                    <div className="torn-paper p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Users className="w-40 h-40" />
                        </div>
                        <div className="text-center mb-8">
                            <h2 className="stencil-font text-5xl text-red-800 mb-1">{t.lalBalPalTitle}</h2>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{t.triumvirateLabel}</p>
                        </div>

                        <div className="space-y-6">
                            {t.leaders.map((leader, idx) => (
                                <div key={idx} className={`flex gap-4 items-start border-l-4 border-${leader.color}-600 pl-4 bg-${leader.color}-50 p-3 rounded-r-lg`}>
                                    <div className="text-3xl">{leader.emoji}</div>
                                    <div>
                                        <h4 className="font-bold text-lg">{leader.name}</h4>
                                        <p className={`text-xs font-bold text-${leader.color}-800 mb-1`}>{leader.region}</p>
                                        {leader.quote && <p className="text-sm italic">{leader.quote}</p>}
                                        {leader.tools && <p className="text-xs mt-1 text-slate-600">{leader.tools}</p>}
                                        {leader.extra && (
                                            <div className="text-xs bg-white p-2 border border-green-200 mt-1 rounded">
                                                <strong>{leader.extra.bold}</strong>{leader.extra.text}<br />
                                                <em>Movement:</em> {leader.extra.movement}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SURAT SPLIT INTERACTIVE */}
                    <div className="torn-paper bg-slate-100 border-2 border-dashed border-slate-600 p-6 text-center group hover:bg-slate-200 transition-colors cursor-pointer"
                        onClick={() => setSplitSide(prev => prev === 'moderates' ? 'extremists' : 'moderates')}>
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Zap className="w-8 h-8 text-yellow-600 fill-yellow-500 animate-pulse" />
                            <h3 className="stencil-font text-3xl uppercase text-slate-800">{t.splitTitle}</h3>
                            <Zap className="w-8 h-8 text-yellow-600 fill-yellow-500 animate-pulse" />
                        </div>
                        <p className="text-xs text-slate-500 mb-6 bg-white inline-block px-2 py-1 rounded">{t.splitTap}</p>

                        <div className="grid grid-cols-2 gap-4 text-left">
                            <motion.div
                                className={`p-4 bg-white border-l-4 border-blue-800 shadow-sm ${splitSide === 'extremists' ? 'opacity-50' : 'opacity-100'}`}
                                animate={{ scale: splitSide === 'moderates' ? 1.05 : 1 }}
                            >
                                <strong className="text-blue-800 block mb-2">{t.moderatesTitle}</strong>
                                <ul className="text-xs space-y-1">
                                    {t.moderatesItems.map((item, i) => (
                                        <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                className={`p-4 bg-white border-l-4 border-red-800 shadow-sm ${splitSide === 'moderates' ? 'opacity-50' : 'opacity-100'}`}
                                animate={{ scale: splitSide === 'extremists' ? 1.05 : 1 }}
                            >
                                <strong className="text-red-800 block mb-2">{t.extremistsTitle}</strong>
                                <ul className="text-xs space-y-1">
                                    {t.extremistsItems.map((item, i) => (
                                        <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        <div className="mt-6 bg-black text-white p-2 text-xs font-bold uppercase tracking-widest">
                            {t.splitResult}
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: SHIFTS & TRANSITIONS */}
                <div className="lg:col-span-3 space-y-8">

                    {/* POLITICAL SHIFTS */}
                    <div className="torn-paper bg-yellow-50 p-6">
                        <h3 className="header-font text-2xl font-bold mb-4">{t.politicalTitle}</h3>

                        <div className="mb-4 border-b border-yellow-300 pb-3">
                            <div className="flex items-center gap-2 mb-1">
                                <Flag className="w-4 h-4 text-blue-800" />
                                <h4 className="font-bold text-sm">{t.calcuttaTitle}</h4>
                            </div>
                            <p className="text-xs text-slate-700">{t.calcuttaText}</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <ShieldAlert className="w-4 h-4 text-green-800" />
                                <h4 className="font-bold text-sm text-green-800">{t.leagueTitle}</h4>
                            </div>
                            <p className="text-xs text-slate-700">{t.leagueText}</p>
                            <p className="text-[10px] italic mt-1 text-slate-500">{t.leagueGoal}</p>
                        </div>
                    </div>

                    {/* NUANCE & EXCEPTIONS */}
                    <div className="torn-paper bg-white border border-slate-200 p-6">
                        <h3 className="header-font text-xl font-bold mb-3 text-slate-700">{t.nuanceTitle}</h3>
                        <p className="text-xs mb-3 text-slate-600">
                            <strong>{t.gapText}</strong>
                        </p>
                        <div className="bg-green-50 p-3 border border-green-200 text-xs rounded">
                            <strong className="block mb-1 text-green-900">{t.exceptionsTitle}</strong>
                            <ul className="list-disc ml-4 space-y-1">
                                {t.exceptions.map((item, i) => (
                                    <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* IRON HAND & TERRORISM */}
                    <div className="torn-paper bg-slate-900 text-slate-100 p-6">
                        <h3 className="header-font text-2xl font-bold mb-4 text-red-500">{t.ironTitle}</h3>
                        <ul className="text-xs list-disc ml-4 space-y-2 mb-6 text-slate-300">
                            {t.ironItems.map((item, i) => (
                                <li key={i}><strong>{item}</strong></li>
                            ))}
                        </ul>

                        <div className="border-t border-slate-700 pt-4">
                            <h4 className="stencil-font text-lg mb-2 text-yellow-500">{t.terrorTitle}</h4>
                            <p className="text-xs italic mb-2">{t.terrorQuote}</p>
                            <div className="text-xs font-mono bg-slate-800 p-2 rounded text-green-400">
                                {t.terrorJournals}
                            </div>
                        </div>
                    </div>

                    {/* FOLK REVIVAL */}
                    <div className="torn-paper bg-pink-50 p-4 text-center">
                        <BookOpen className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                        <p className="text-xs font-bold text-pink-900">{t.folkTitle}</p>
                        <p className="text-[10px] text-pink-700">{t.folkText}</p>
                    </div>

                </div>

            </div>
        </div>
    );
}
