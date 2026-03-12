"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Flame,
    Radio,
    XCircle,
    Skull,
    AlertTriangle,
    Mic2,
    FileText,
    Flag,
    Users,
    Anchor,
    Plane,
    Leaf
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from '@/lib/language-store';
import { ch20Translations } from './translations/ch20';

export default function HandwrittenChapter20() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch20Translations.hi : ch20Translations.en;

    return (
        <div className="min-h-screen bg-paper font-sans text-paper-gray selection:bg-paper-red/30 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Courier+Prime:wght@400;700&family=Special+Elite&display=swap');
                
                .burnt-texture {
                    background-color: var(--paper-bg);
                    background-image: url("https://www.transparenttextures.com/patterns/cracked-concrete.png");
                    opacity: 0.1;
                }

                .stencil-font { font-family: 'Black Ops One', cursive; }
                .typewriter-font { font-family: 'Courier Prime', monospace; }
                .handwritten-font { font-family: 'Special Elite', monospace; }

                .fire-text {
                    background: linear-gradient(to bottom, var(--paper-orange), var(--paper-red));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .steel-card {
                    background: var(--paper-indigo-5);
                    border: 1px solid var(--paper-indigo-20);
                    box-shadow: inset 0 0 20px var(--paper-indigo-10);
                }

                .radio-card {
                    background: var(--paper-bg);
                    border: 4px solid var(--paper-border);
                    box-shadow: 0 0 10px var(--paper-orange-20);
                }

                .torn-paper {
                    background: var(--paper-bg);
                    color: var(--paper-gray);
                    clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 90% 90%, 85% 100%, 80% 90%, 75% 100%, 70% 90%, 65% 100%, 60% 90%, 55% 100%, 50% 90%, 45% 100%, 40% 90%, 35% 100%, 30% 90%, 25% 100%, 20% 90%, 15% 100%, 10% 90%, 5% 100%, 0 90%);
                    border: 1px solid var(--paper-border-20);
                    padding-bottom: 2rem;
                    transform: rotate(1deg);
                }
            `}</style>

            {/* BACKGROUND */}
            <div className="fixed inset-0 burnt-texture pointer-events-none z-0 opacity-50"></div>

            {/* HEADER */}
            <header className="max-w-6xl mx-auto mb-12 text-center relative z-10 pt-12 pb-8 text-inherit">
                <div className="border-4 border-paper-red/40 p-8 bg-paper/50 backdrop-blur-md inline-block transform -rotate-1 shadow-xl">
                    <div className="flex justify-center items-center gap-4 mb-2">
                        <Flame className="w-8 h-8 text-paper-orange animate-pulse" />
                        <span className="typewriter-font text-paper-orange text-xl tracking-widest uppercase">{t.august1942}</span>
                        <Flame className="w-8 h-8 text-paper-orange animate-pulse" />
                    </div>
                    <h1 className="stencil-font text-6xl md:text-8xl fire-text uppercase tracking-widest leading-none mb-4">
                        {t.headerTitle}
                    </h1>
                    <div className="flex justify-center flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-paper-orange opacity-60">
                        <span>{t.quitIndia}</span>
                        <span>•</span>
                        <span>{t.leaderlessRevolt}</span>
                        <span>•</span>
                        <span>{t.parallelGovts}</span>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 px-6 pb-20">

                {/* LEFT COLUMN: THE OFFER & THE SPARK */}
                <div className="space-y-12">

                    {/* CRIPPS MISSION (TORN CHEQUE) */}
                    <div className="torn-paper p-6 relative">
                        <div className="absolute top-2 right-2 text-paper-red font-bold border-2 border-paper-red p-1 transform rotate-12 text-xs uppercase opacity-60">
                            {t.rejected}
                        </div>
                        <h3 className="typewriter-font text-2xl font-bold mb-4 flex items-center gap-2 border-b-2 border-dashed border-paper-border/20 pb-2 text-inherit">
                            <Plane className="w-5 h-5 opacity-40" /> {t.crippsMissionTitle}
                        </h3>

                        <div className="space-y-4 text-sm font-mono leading-tight text-inherit">
                            <p className="bg-paper-border/5 p-2 text-inherit">
                                <strong>{t.envoyLabel}</strong> <span className="opacity-80">{t.envoyText}</span>
                                <br /><span className="text-paper-orange/60 text-xs">{t.pressureNote}</span>
                            </p>

                            <ul className="list-disc ml-4 space-y-2 text-inherit">
                                <li><strong className="opacity-90">{t.dominionStatus}</strong></li>
                                <li><strong className="opacity-90">{t.constituentAssembly}</strong></li>
                                <li className="text-paper-red font-bold bg-paper-red/5 p-1">
                                    {t.rightToSecede}
                                </li>
                            </ul>

                            <div className="mt-4 text-center italic text-paper-red font-bold opacity-80">
                                {t.gandhiQuoteCripps}
                            </div>
                        </div>
                    </div>

                    {/* QUIT INDIA RESOLUTION */}
                    <div className="bg-red-900/20 border-l-4 border-red-600 p-6 backdrop-blur-sm">
                        <h3 className="stencil-font text-2xl font-bold mb-4 text-red-500 uppercase flex items-center gap-2">
                            <Flag className="w-6 h-6" /> {t.resolutionTitle}
                        </h3>

                        <div className="text-sm space-y-3">
                            <div className="flex items-center gap-2 opacity-80">
                                <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold">{t.locationLabel}</span>
                                {t.locationText}
                            </div>

                            <div className="bg-black/40 p-3 italic border border-red-500/30 text-center text-red-200">
                                {t.mantraQuote}
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-card/5 p-2 border border-white/10">
                                    <strong className="block text-red-400">{t.soldiersLabel}</strong>
                                    {t.soldiersText}
                                </div>
                                <div className="bg-card/5 p-2 border border-white/10">
                                    <strong className="block text-red-400">{t.studentsLabel}</strong>
                                    {t.studentsText}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* OPPOSITION */}
                    <div className="bg-paper-border/10 p-4 border border-paper-border/20 relative text-inherit">
                        <div className="absolute -top-3 left-4 bg-paper-border text-paper-bg text-xs px-2 py-1 uppercase font-bold">
                            {t.dissentersTitle}
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-xs mt-2 text-inherit">
                            <div>
                                <strong className="block text-paper-orange">{t.cpi}</strong>
                                <span className="opacity-70">{t.cpiDesc}</span>
                            </div>
                            <div>
                                <strong className="block text-paper-green">{t.muslimLeague}</strong>
                                <span className="opacity-70">{t.mlDesc}</span>
                            </div>
                            <div>
                                <strong className="block text-paper-orange opacity-70">{t.hinduMahasabha}</strong>
                                <span className="opacity-70">{t.hmDesc}</span>
                            </div>
                            <div>
                                <strong className="block text-paper-indigo">{t.ambedkar}</strong>
                                <span className="opacity-70">{t.ambedkarDesc}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: THE REVOLT & TRAGEDY */}
                <div className="space-y-12">

                    {/* OPERATION ZERO HOUR & UNDERGROUND */}
                    <div className="radio-card p-6 text-paper-orange relative overflow-hidden text-inherit">
                        <div className="absolute top-2 right-2 animate-pulse rounded-full h-3 w-3 bg-paper-red"></div>
                        <h3 className="handwritten-font text-2xl font-bold mb-4 flex items-center gap-2 text-inherit">
                            <Radio className="w-5 h-5 opacity-40" /> {t.radioTitle}
                        </h3>

                        <div className="space-y-4 text-sm font-mono text-inherit">
                            <div className="bg-black/40 p-3 border border-paper-orange/20 text-inherit">
                                <strong className="block text-white mb-1 uppercase text-xs">{t.zeroHourTitle}</strong>
                                <span className="opacity-80 text-white">{t.zeroHourDesc}</span>
                            </div>

                            <div className="flex gap-4 text-inherit">
                                <div className="flex-1 text-inherit">
                                    <strong className="block text-paper-orange opacity-60 text-xs uppercase mb-1">{t.broadcasterTitle}</strong>
                                    <span className="opacity-80">{t.broadcasterName}</span>
                                </div>
                                <div className="flex-1 text-inherit">
                                    <strong className="block text-paper-orange opacity-60 text-xs uppercase mb-1">{t.coordinatorTitle}</strong>
                                    <span className="opacity-80">{t.coordinatorName}</span>
                                </div>
                            </div>

                            <div className="bg-paper-orange/10 p-2 text-xs border-l-2 border-paper-orange text-inherit">
                                <strong className="text-paper-orange">{t.azadDastaTitle}</strong> <span className="opacity-80">{t.azadDastaDesc}</span>
                                <br /><span className="opacity-60 italic">{t.pilotFinancier}</span>
                            </div>
                        </div>
                    </div>

                    {/* PARALLEL GOVERNMENTS MAP */}
                    <div className="steel-card p-6 text-inherit relative border border-paper-indigo/20">
                        <Badge className="absolute top-4 right-4 bg-paper-orange text-white border-none">{t.parallelGovtBadge}</Badge>
                        <h3 className="stencil-font text-xl mb-4 uppercase text-paper-indigo">{t.powerToPeople}</h3>

                        <div className="space-y-3 text-xs text-inherit">
                            <div className="flex justify-between items-center border-b border-paper-border/10 pb-2 text-inherit">
                                <span><strong>{t.ballia}</strong><br /><span className="opacity-60">{t.balliaLeader}</span></span>
                                <span className="text-right">{t.balliaDuration}<br /><span className="opacity-60">{t.balliaAction}</span></span>
                            </div>
                            <div className="flex justify-between items-center border-b border-paper-border/10 pb-2 text-inherit">
                                <span><strong>{t.tamluk}</strong><br /><span className="opacity-60">{t.tamlukLeader}</span></span>
                                <span className="text-right">{t.tamlukDuration}<br /><span className="opacity-60">{t.tamlukAction}</span></span>
                            </div>
                            <div className="flex justify-between items-center text-inherit">
                                <span><strong>{t.satara}</strong><br /><span className="opacity-60">{t.sataraLeader}</span></span>
                                <span className="text-right">{t.sataraDuration}<br /><span className="opacity-60">{t.sataraAction}</span></span>
                            </div>
                        </div>
                    </div>

                    {/* MARTYRS & TRAGEDY */}
                    <div className="grid grid-cols-2 gap-4 text-inherit">
                        <div className="bg-paper-red/10 p-4 border border-paper-red/20 relative text-inherit">
                            <strong className="block text-paper-red text-xs uppercase mb-2">{t.martyrsTitle}</strong>
                            <ul className="space-y-2 text-xs opacity-70 text-inherit">
                                <li>{t.matanginiHazra}</li>
                                <li>{t.kanaklataBarua}</li>
                                <li>{t.bhaiKotwal}</li>
                            </ul>
                        </div>

                        <div className="bg-neutral-900 dark:bg-black p-4 border border-paper-border/10 relative text-white">
                            <strong className="block text-white/40 text-xs uppercase mb-2">{t.palaceTragedyTitle}</strong>
                            <ul className="space-y-2 text-xs text-white">
                                <li><strong>{t.mahadevDesai}</strong></li>
                                <li><strong>{t.kasturba}</strong></li>
                                <li className="text-[10px] mt-2 italic pt-2 border-t border-white/10 opacity-60">
                                    {t.churchillQuote}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* DIPLOMATIC END */}
                    <div className="bg-paper-border/5 p-3 text-xs flex justify-between items-center border-t border-paper-border/10 text-inherit">
                        <div className="text-inherit">
                            <strong className="block text-paper-green">{t.crFormula}</strong>
                            <span className="opacity-70">{t.crFormulaDesc}</span>
                        </div>
                        <div className="text-right text-inherit">
                            <strong className="block text-paper-red">{t.gandhiJinnahTalks}</strong>
                            <span className="opacity-70">{t.gandhiJinnahDesc}</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
