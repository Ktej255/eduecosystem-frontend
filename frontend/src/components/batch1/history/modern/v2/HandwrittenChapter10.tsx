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
        <div className="min-h-screen bg-paper p-4 md:p-8 font-['Roboto_Slab',_serif] text-paper-gray selection:bg-paper-red/20 overflow-x-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Stardos+Stencil:wght@400;700&family=Roboto+Slab:wght@300;400;700&display=swap');
                
                .stencil-font {
                    font-family: 'Black Ops One', cursive;
                }
                
                .header-font {
                    font-family: 'Stardos Stencil', cursive;
                }

                .torn-paper {
                    background-color: var(--paper-bg);
                    position: relative;
                    box-shadow: 2px 4px 6px var(--paper-border);
                }
                
                .torn-paper::after {
                    content: "";
                    position: absolute;
                    bottom: -10px;
                    left: 0;
                    width: 100%;
                    height: 20px;
                    background: radial-gradient(circle, transparent 70%, var(--paper-bg) 70%) 0 0,
                                radial-gradient(circle, transparent 70%, var(--paper-bg) 70%) 10px 10px;
                    background-size: 20px 20px;
                    transform: rotate(180deg);
                }

                .burn-mark {
                    background: radial-gradient(circle, rgba(0,0,0,0.2) 0%, transparent 70%);
                }
            `}</style>

            {/* HEADER: THE BURNING FUSE */}
            <header className="max-w-6xl mx-auto mb-16 text-center border-b-8 border-paper-red pb-8 relative pt-12 text-inherit">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Flame className="w-24 h-24 text-paper-orange animate-pulse fill-paper-orange/50" />
                </div>
                <h2 className="stencil-font text-2xl md:text-3xl tracking-widest uppercase mb-2 text-paper-red animate-bounce">{t.bonfireTitle}</h2>
                <h1 className="header-font text-5xl md:text-8xl font-bold mb-6 uppercase tracking-tighter text-paper-gray">
                    {t.headerTitle}
                </h1>
                <p className="text-xl md:text-2xl font-bold italic text-paper-gray opacity-80">
                    {t.headerSubtitle}
                </p>

                {/* TIMELINE OF FIRE */}
                <div className="mt-12 overflow-x-auto pb-4">
                    <div className="flex justify-center items-center min-w-[600px] gap-2 text-xs md:text-sm font-bold">
                        {t.timelineItems.map((item, idx) => (
                            <React.Fragment key={idx}>
                                {idx > 0 && <div className="h-1 w-8 bg-paper-red/30"></div>}
                                <div className={`px-3 py-2 rounded shadow ${idx === 1 ? 'bg-paper-red text-paper-bg transform scale-110 shadow-lg' : idx === 3 ? 'bg-neutral-900 dark:bg-black text-white border border-paper-border/20' : 'bg-paper-border/10 text-paper-gray'}`}>
                                    <span className={`block text-[10px] uppercase ${idx === 1 ? 'text-paper-bg/60' : idx === 3 ? 'text-gray-400' : 'text-paper-gray/40'}`}>{item.date}</span>
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
                    <div className="torn-paper bg-paper-red/10 p-6 text-inherit">
                        <h3 className="header-font text-3xl font-bold mb-4 border-b-4 border-paper-red pb-2 text-paper-red">{t.triggerTitle}</h3>
                        <div className="mb-4">
                            <div className="text-sm font-bold uppercase text-paper-red flex items-center gap-2">
                                <AlertTriangle className="w-4 h-4" /> {t.villainLabel}
                            </div>
                            <p className="text-sm italic mt-1 opacity-70">{t.villainQuote}</p>
                        </div>
                        <ul className="text-sm space-y-3">
                            <li className="flex items-start gap-2">
                                <XCircle className="w-4 h-4 text-paper-red mt-0.5" />
                                <span><strong>{t.officialReason}</strong> {t.officialReasonText}</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Target className="w-4 h-4 text-paper-red mt-0.5" />
                                <span><strong>{t.realReason}</strong> {t.realReasonText}</span>
                            </li>
                        </ul>
                        <div className="mt-4 bg-neutral-900 dark:bg-black text-white p-3 text-center rounded border border-white/10">
                            <div className="font-bold uppercase text-sm">{t.mourningDate}</div>
                            <div className="text-xs opacity-70">{t.mourningEvent}</div>
                        </div>
                    </div>

                    {/* METHODS CARD */}
                    <div className="torn-paper bg-paper-orange/10 p-6 text-inherit">
                        <h3 className="header-font text-3xl font-bold mb-4 border-b-4 border-paper-orange pb-2 text-paper-orange">{t.methodsTitle}</h3>
                        <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                            {t.methodCards.map((card, i) => (
                                <div key={i} className="p-2 border border-paper-orange/20 bg-paper shadow-sm text-inherit">
                                    <span className="text-paper-orange">{iconMap[card.icon]}</span>
                                    <strong>{card.bold}</strong>{card.text}
                                </div>
                            ))}
                        </div>

                        <div className="bg-paper p-3 border-l-4 border-paper-green text-xs shadow-sm text-inherit">
                            <strong className="block mb-1 text-paper-green uppercase">{t.constructiveTitle}</strong>
                            <ul className="space-y-1">
                                {t.constructiveItems.map((item, i) => (
                                    <li key={i}>{item.emoji} <strong>{item.bold}</strong>{item.text}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ORGANIZATION CARD */}
                    <div className="torn-paper p-6 bg-paper text-inherit">
                        <h3 className="header-font text-xl font-bold mb-3 text-paper-gray">{t.orgTitle}</h3>
                        <div className="space-y-3 text-sm">
                            <p><strong>{t.samitiLabel}</strong>{t.samitiText}</p>
                            <div className="bg-paper-border/10 p-3 border border-paper-border/20 rounded relative overflow-hidden text-inherit">
                                <div className="font-bold text-paper-gray">{t.swadeshBandhabTitle}</div>
                                <div className="text-xs italic opacity-70">{t.swadeshBandhabPlace}</div>
                                <div className="text-[10px] mt-1 text-paper-gray opacity-50">{t.swadeshBandhabNote}</div>
                            </div>
                            <div className="bg-paper-border/10 p-3 border border-paper-border/20 rounded text-inherit">
                                <div className="font-bold text-paper-gray">{t.dawnTitle}</div>
                                <div className="text-xs italic opacity-70">{t.dawnLeader}</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* MIDDLE COLUMN: LEADERS & SPLIT */}
                <div className="lg:col-span-5 space-y-8">

                    {/* LAL-BAL-PAL SECTION */}
                    <div className="torn-paper p-8 relative overflow-hidden text-inherit">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Users className="w-40 h-40 text-paper-gray" />
                        </div>
                        <div className="text-center mb-8">
                            <h2 className="stencil-font text-5xl text-paper-red mb-1">{t.lalBalPalTitle}</h2>
                            <p className="text-xs font-bold uppercase tracking-widest text-paper-gray opacity-40">{t.triumvirateLabel}</p>
                        </div>

                        <div className="space-y-6">
                            {t.leaders.map((leader, idx) => (
                                <div key={idx} className={`flex gap-4 items-start border-l-4 border-paper-${leader.color === 'blue' ? 'navy' : leader.color} pl-4 bg-paper-${leader.color === 'blue' ? 'navy' : leader.color}/10 p-3 rounded-r-lg text-inherit`}>
                                    <div className="text-3xl">{leader.emoji}</div>
                                    <div>
                                        <h4 className="font-bold text-lg text-paper-gray">{leader.name}</h4>
                                        <p className={`text-xs font-bold text-paper-${leader.color === 'blue' ? 'navy' : leader.color} mb-1`}>{leader.region}</p>
                                        {leader.quote && <p className="text-sm italic opacity-80">{leader.quote}</p>}
                                        {leader.tools && <p className="text-xs mt-1 text-paper-gray opacity-60">{leader.tools}</p>}
                                        {leader.extra && (
                                            <div className="text-xs bg-paper p-2 border border-paper-green/20 mt-1 rounded text-inherit">
                                                <strong>{leader.extra.bold}</strong>{leader.extra.text}<br />
                                                <em className="opacity-60 text-paper-gray">Movement:</em> <span className="text-paper-green">{leader.extra.movement}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SURAT SPLIT INTERACTIVE */}
                    <div className="torn-paper bg-paper shadow-inner border-2 border-dashed border-paper-border/40 p-6 text-center group hover:bg-paper-border/5 transition-colors cursor-pointer text-inherit"
                        onClick={() => setSplitSide(prev => prev === 'moderates' ? 'extremists' : 'moderates')}>
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Zap className="w-8 h-8 text-paper-orange fill-paper-orange/50 animate-pulse" />
                            <h3 className="stencil-font text-3xl uppercase text-paper-gray">{t.splitTitle}</h3>
                            <Zap className="w-8 h-8 text-paper-orange fill-paper-orange/50 animate-pulse" />
                        </div>
                        <p className="text-xs text-paper-gray/40 mb-6 bg-paper inline-block px-2 py-1 rounded">{t.splitTap}</p>

                        <div className="grid grid-cols-2 gap-4 text-left">
                            <motion.div
                                className={`p-4 bg-paper border-l-4 border-paper-navy shadow-sm ${splitSide === 'extremists' ? 'opacity-50' : 'opacity-100'}`}
                                animate={{ scale: splitSide === 'moderates' ? 1.05 : 1 }}
                            >
                                <strong className="text-paper-navy block mb-2">{t.moderatesTitle}</strong>
                                <ul className="text-xs space-y-1">
                                    {t.moderatesItems.map((item, i) => (
                                        <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                className={`p-4 bg-paper border-l-4 border-paper-red shadow-sm ${splitSide === 'moderates' ? 'opacity-50' : 'opacity-100'}`}
                                animate={{ scale: splitSide === 'extremists' ? 1.05 : 1 }}
                            >
                                <strong className="text-paper-red block mb-2">{t.extremistsTitle}</strong>
                                <ul className="text-xs space-y-1">
                                    {t.extremistsItems.map((item, i) => (
                                        <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        <div className="mt-6 bg-neutral-900 dark:bg-black text-white p-2 text-xs font-bold uppercase tracking-widest border border-white/10">
                            {t.splitResult}
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: SHIFTS & TRANSITIONS */}
                <div className="lg:col-span-3 space-y-8">

                    {/* POLITICAL SHIFTS */}
                    <div className="torn-paper bg-paper-orange/10 p-6 text-inherit">
                        <h3 className="header-font text-2xl font-bold mb-4 text-paper-orange">{t.politicalTitle}</h3>

                        <div className="mb-4 border-b border-paper-orange/20 pb-3">
                            <div className="flex items-center gap-2 mb-1">
                                <Flag className="w-4 h-4 text-paper-navy" />
                                <h4 className="font-bold text-sm text-paper-navy">{t.calcuttaTitle}</h4>
                            </div>
                            <p className="text-xs opacity-70">{t.calcuttaText}</p>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <ShieldAlert className="w-4 h-4 text-paper-green" />
                                <h4 className="font-bold text-sm text-paper-green">{t.leagueTitle}</h4>
                            </div>
                            <p className="text-xs opacity-70">{t.leagueText}</p>
                            <p className="text-[10px] italic mt-1 opacity-50">{t.leagueGoal}</p>
                        </div>
                    </div>

                    {/* NUANCE & EXCEPTIONS */}
                    <div className="torn-paper bg-paper border border-paper-border/10 p-6 text-inherit">
                        <h3 className="header-font text-xl font-bold mb-3 text-paper-gray opacity-60">{t.nuanceTitle}</h3>
                        <p className="text-xs mb-3">
                            <strong>{t.gapText}</strong>
                        </p>
                        <div className="bg-paper-green/10 p-3 border border-paper-green/20 text-xs rounded text-inherit">
                            <strong className="block mb-1 text-paper-green">{t.exceptionsTitle}</strong>
                            <ul className="list-disc ml-4 space-y-1">
                                {t.exceptions.map((item, i) => (
                                    <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* IRON HAND & TERRORISM */}
                    <div className="torn-paper bg-neutral-900 dark:bg-black text-slate-100 p-6 border border-white/10">
                        <h3 className="header-font text-2xl font-bold mb-4 text-paper-red">{t.ironTitle}</h3>
                        <ul className="text-xs list-disc ml-4 space-y-2 mb-6 text-slate-300">
                            {t.ironItems.map((item, i) => (
                                <li key={i}><strong>{item}</strong></li>
                            ))}
                        </ul>

                        <div className="border-t border-white/10 pt-4 text-inherit">
                            <h4 className="stencil-font text-lg mb-2 text-paper-orange">{t.terrorTitle}</h4>
                            <p className="text-xs italic mb-2 opacity-70">{t.terrorQuote}</p>
                            <div className="text-xs font-mono bg-card/5 p-2 rounded text-paper-green">
                                {t.terrorJournals}
                            </div>
                        </div>
                    </div>

                    {/* FOLK REVIVAL */}
                    <div className="torn-paper bg-paper-purple/10 p-4 text-center text-inherit">
                        <BookOpen className="w-8 h-8 text-paper-purple mx-auto mb-2" />
                        <p className="text-xs font-bold text-paper-purple">{t.folkTitle}</p>
                        <p className="text-[10px] opacity-70">{t.folkText}</p>
                    </div>

                </div>

            </div>
        </div>
    );
}
