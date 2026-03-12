"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Scroll,
    Users,
    AlertTriangle,
    Flame,
    Mic2,
    Flag,
    XCircle,
    Star
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useLanguageStore } from '@/lib/language-store';
import { ch23Translations } from './translations/ch23';

export default function HandwrittenChapter23() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch23Translations.hi : ch23Translations.en;

    return (
        <div className="min-h-screen bg-paper font-sans text-paper-gray selection:bg-paper-red/30 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Patrick+Hand&family=Reenie+Beanie&family=Rock+Salt&display=swap');
                
                .parchment-texture {
                    background-color: var(--paper-bg);
                    background-image: url("https://www.transparenttextures.com/patterns/aged-paper.png");
                }
 Riverside.

                .marker-font { font-family: 'Permanent Marker', cursive; }
                .hand-font { font-family: 'Patrick Hand', cursive; }
                .scribble-font { font-family: 'Reenie Beanie', cursive; }
                .stamp-font { font-family: 'Rock Salt', cursive; }

                .ink-stain {
                    mask-image: url("https://www.transparenttextures.com/patterns/black-ink.png");
                }
            `}</style>

            {/* BACKGROUND */}
            <div className="fixed inset-0 parchment-texture pointer-events-none z-0"></div>

            {/* HEADER */}
            <header className="max-w-4xl mx-auto pt-12 pb-8 text-center relative z-10 text-inherit">
                <div className="border-4 border-paper-gray border-dashed p-6 transform -rotate-1 bg-paper/40 backdrop-blur-sm text-inherit">
                    <div className="flex justify-center items-center gap-4 mb-2 opacity-80 text-inherit">
                        <Flag className="w-8 h-8 text-paper-orange" />
                        <span className="marker-font text-2xl tracking-widest uppercase text-paper-orange">{t.headerYear}</span>
                        <Mic2 className="w-8 h-8 text-paper-green" />
                    </div>
                    <h1 className="marker-font text-5xl md:text-7xl font-bold uppercase tracking-widest text-paper-red mb-2 drop-shadow-md">
                        {t.headerTitle}
                    </h1>
                    <div className="flex justify-center gap-4 text-sm font-bold uppercase tracking-widest text-paper-gray hand-font">
                        <span>{t.doOrDie}</span>
                        <span>•</span>
                        <span>{t.leaderlessRevolt}</span>
                        <span>•</span>
                        <span>{t.inaRises}</span>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 px-6 pb-20">

                {/* LEFT COLUMN: THE MOVEMENT */}
                <div className="space-y-12">

                    {/* PAGE 1: THE STORM */}
                    <div className="relative group text-inherit">
                        <div className="absolute -inset-1 bg-gradient-to-r from-paper-orange to-paper-red rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative bg-paper-orange/5 p-6 border-2 border-paper-orange/30 shadow-xl rounded-sm text-inherit">
                            <h2 className="marker-font text-3xl text-paper-orange mb-4 flex items-center gap-2">
                                <Flame className="w-6 h-6 opacity-40" /> {t.stormTitle}
                            </h2>

                            <div className="hand-font text-xl space-y-4 text-inherit">
                                <div className="bg-paper/60 p-4 border-l-4 border-paper-red text-inherit">
                                    <strong className="block text-paper-red text-2xl mb-1">{t.whyNowLabel}</strong>
                                    <ul className="list-disc pl-5 space-y-1 text-inherit opacity-80">
                                        <li>{t.reasonCripps}</li>
                                        <li>{t.reasonJapan}</li>
                                        <li>{t.reasonScorched}</li>
                                        <li>{t.reasonInflation}</li>
                                    </ul>
                                </div>

                                <div className="flex items-center gap-4 bg-paper-orange/10 p-3 rounded-lg border border-paper-orange/20 text-inherit">
                                    <div className="text-4xl opacity-40">🗓️</div>
                                    <div className="text-inherit">
                                        <div className="font-bold text-inherit">{t.gowaliaTankDate}</div>
                                        <div className="text-sm opacity-60 text-inherit">{t.gowaliaTankDesc}</div>
                                    </div>
                                </div>

                                <div className="bg-neutral-900 text-white p-4 rotate-1 shadow-lg text-center">
                                    <p className="scribble-font text-3xl text-paper-orange">{t.mantraQuote}</p>
                                    <p className="text-xs uppercase tracking-widest mt-1 opacity-60">{t.gandhiSignature}</p>
                                </div>

                                <div className="bg-paper-red/10 p-3 border border-paper-red/20 text-sm text-inherit">
                                    <strong className="text-paper-red">{t.zeroHourTitle}</strong> <span className="opacity-80">{t.zeroHourDesc}</span>
                                </div>
                            </div>

                            <div className="absolute -right-4 top-10 rotate-12 bg-yellow-300 text-black px-3 py-1 text-xs font-bold shadow-md scribble-font text-lg">
                                {t.arunaLabel}
                            </div>
                        </div>
                    </div>

                    {/* PARALLEL GOVERNMENTS */}
                    <div className="bg-paper p-6 border-4 border-double border-paper-border shadow-lg relative text-inherit">
                        <h2 className="marker-font text-3xl text-paper-gray mb-6 underline decoration-wavy decoration-paper-green/40 text-inherit">
                            {t.parallelGovtsTitle}
                        </h2>

                        <div className="grid gap-6 hand-font text-lg text-inherit opacity-80">
                            {/* Ballia */}
                            <div className="bg-paper-green/10 p-4 border border-paper-green/20 text-inherit">
                                <h3 className="font-bold text-xl text-paper-green">{t.balliaTitle}</h3>
                                <p className="text-inherit">{t.balliaDesc}</p>
                            </div>

                            {/* Tamluk */}
                            <div className="bg-paper-green/10 p-4 border border-paper-green/20 relative text-inherit">
                                <h3 className="font-bold text-xl text-paper-green">{t.tamlukTitle}</h3>
                                <p className="text-inherit">{t.tamlukDesc}</p>
                                <ul className="list-disc pl-5 text-sm mt-1 text-inherit opacity-70">
                                    <li>{t.tamlukRelief}</li>
                                    <li>{t.tamlukVahinis}</li>
                                    <li>{t.tamlukMartyr}</li>
                                </ul>
                            </div>

                            {/* Satara */}
                            <div className="bg-paper-green/10 p-4 border border-paper-green/20 relative text-inherit">
                                <h3 className="font-bold text-xl text-paper-green">{t.sataraTitle}</h3>
                                <div className="absolute top-2 right-2 bg-paper-orange text-white text-[10px] px-2 py-1 font-bold rounded border-none">{t.longestLasting}</div>
                                <p className="text-inherit">{t.sataraLeaders}</p>
                                <ul className="list-disc pl-5 text-sm mt-1 text-inherit opacity-70">
                                    <li>{t.sataraCourts}</li>
                                    <li>{t.sataraMarriages}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: FAMINE, INA & PARTITION */}
                <div className="space-y-12">

                    {/* FAMINE & POLITICS */}
                    <div className="bg-paper-border/10 p-6 border-l-8 border-paper-gray shadow-2xl text-inherit">
                        <h2 className="marker-font text-2xl text-paper-gray mb-4 flex items-center gap-2 text-inherit">
                            <XCircle className="w-6 h-6 opacity-40" /> {t.darkConsensusTitle}
                        </h2>

                        <div className="space-y-4 hand-font text-inherit">
                            {/* Famine */}
                            <div className="bg-paper p-4 text-inherit">
                                <strong className="block text-xl border-b border-paper-border pb-1 mb-2 text-inherit">{t.bengalFamineTitle}</strong>
                                <p className="text-lg text-inherit opacity-80">{t.famineDeaths}</p>
                                <p className="text-sm italic text-paper-red text-inherit">{t.famineTragedy}</p>
                                <div className="text-xs bg-paper-border/5 mt-2 p-1 text-inherit"><strong>{t.woodheadCommission}</strong></div>
                            </div>

                            {/* Formulas */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-inherit">
                                <div className="bg-paper-indigo/10 p-3 border border-paper-indigo/20 text-inherit">
                                    <strong className="block text-paper-indigo">{t.crFormulaTitle}</strong>
                                    <span className="opacity-80">{t.crFormulaDesc}</span>
                                </div>
                                <div className="bg-paper-indigo/10 p-3 border border-paper-indigo/20 text-inherit">
                                    <strong className="block text-paper-indigo">{t.wavellPlanTitle}</strong>
                                    <span className="opacity-80">{t.wavellPlanDesc}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* INA SAGA */}
                    <div className="relative bg-paper-orange/10 p-6 border-2 border-paper-orange/40 transform rotate-1 text-inherit">
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-paper-orange rounded-full flex items-center justify-center text-white font-bold animate-pulse border-none">
                            INA
                        </div>
                        <h2 className="marker-font text-3xl text-paper-orange mb-4 text-right uppercase text-inherit">
                            {t.inaSagaTitle}
                        </h2>

                        <div className="hand-font space-y-5 text-inherit">
                            <div className="flex border-b border-paper-orange/20 pb-4 text-inherit">
                                <div className="w-1/3 font-bold text-paper-orange text-lg text-inherit">{t.phase1Label}</div>
                                <div className="w-2/3 text-inherit opacity-80">{t.phase1Desc}</div>
                            </div>

                            <div className="flex border-b border-paper-orange/20 pb-4 text-inherit">
                                <div className="w-1/3 font-bold text-paper-orange text-lg text-inherit">{t.phase2Label}</div>
                                <div className="w-2/3 text-inherit">
                                    <span className="text-xl font-bold bg-paper-orange/20 px-2 text-paper-orange">{t.phase2Name}</span>
                                    <p className="text-sm mt-1 opacity-80">{t.phase2Desc}</p>
                                </div>
                            </div>

                            <div className="bg-paper-orange text-white p-4 rounded-tl-xl rounded-br-xl shadow-lg border-none">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="stamp-font text-xs opacity-60">{t.warCryLabel}</span>
                                    <Star className="w-5 h-5 fill-current opacity-40" />
                                </div>
                                <p className="marker-font text-4xl text-center">{t.chaloDelhi}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs text-inherit">
                                <div className="bg-paper p-2 border border-paper-orange/20 text-inherit">
                                    <strong className="text-paper-orange">{t.moirangTitle}</strong> <span className="opacity-80">{t.moirangDesc}</span>
                                </div>
                                <div className="bg-paper p-2 border border-paper-orange/20 text-inherit">
                                    <strong className="text-paper-orange">{t.islandsTitle}</strong> <span className="opacity-80">{t.islandsDesc}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* GAP ANALYSIS NOTE */}
                    <div className="bg-paper-orange/10 p-4 rotate-1 border border-paper-orange/20 shadow-sm text-inherit">
                        <div className="flex items-center gap-2 mb-2 text-inherit">
                            <AlertTriangle className="w-5 h-5 text-paper-orange" />
                            <h3 className="scribble-font text-2xl font-bold text-paper-orange">{t.confidentialNotesTitle}</h3>
                        </div>
                        <ul className="hand-font text-sm space-y-2 text-inherit opacity-80">
                            <li>{t.ziauddinNote}</li>
                            <li>{t.cpiNote}</li>
                            <li>{t.loyaltyErosionNote}</li>
                        </ul>
                    </div>

                </div>

            </div>
        </div>
    );
}
