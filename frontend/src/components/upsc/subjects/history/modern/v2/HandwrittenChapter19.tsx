"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mic2,
    Flag,
    Moon,
    Users,
    Footprints,
    Radio,
    Map,
    AlertTriangle,
    XCircle,
    Car,
    Skull,
    Scroll
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from '@/lib/language-store';
import { ch19Translations } from './translations/ch19';

export default function HandwrittenChapter19() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch19Translations.hi : ch19Translations.en;

    return (
        <div className="min-h-screen bg-paper font-sans text-paper-gray selection:bg-paper-green/30 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&family=Hind:wght@400;600;700&family=Special+Elite&display=swap');
                
                .green-texture {
                    background-color: var(--paper-green-80);
                    background-image: url("https://www.transparenttextures.com/patterns/arabesque.png");
                    color: white;
                }
                :global(.dark) .green-texture {
                    background-color: #050;
                }

                .saffron-texture {
                    background-color: var(--paper-orange-5);
                    background-image: url("https://www.transparenttextures.com/patterns/natural-paper.png");
                    color: var(--paper-gray);
                }
                :global(.dark) .saffron-texture {
                    background-color: #000;
                }

                .urdu-font { font-family: 'Scheherazade New', serif; }
                .hindi-font { font-family: 'Hind', sans-serif; }
                .typewriter-font { font-family: 'Special Elite', monospace; }

                .split-card-left {
                    background: var(--paper-green-20);
                    border-right: 4px solid var(--paper-orange);
                    box-shadow: 5px 0 15px var(--paper-border-10);
                }

                .split-card-right {
                    background: var(--paper-bg);
                    border-left: 4px solid var(--paper-orange);
                    box-shadow: -5px 0 15px var(--paper-border-10);
                }

                .car-animation {
                    animation: drive 10s linear infinite;
                }

                @keyframes drive {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>

            {/* BACKGROUND SPLIT */}
            <div className="fixed top-0 left-0 w-full lg:w-1/2 h-full green-texture z-0 pointer-events-none opacity-100 hidden lg:block"></div>
            <div className="fixed top-0 right-0 w-full lg:w-1/2 h-full saffron-texture z-0 pointer-events-none opacity-100 hidden lg:block"></div>

            {/* Mobile Background: Stacked */}
            <div className="fixed top-0 left-0 w-full h-1/2 green-texture z-0 pointer-events-none opacity-100 lg:hidden"></div>
            <div className="fixed bottom-0 left-0 w-full h-1/2 saffron-texture z-0 pointer-events-none opacity-100 lg:hidden"></div>

            {/* HEADER */}
            <header className="max-w-6xl mx-auto mb-12 text-center relative z-10 pt-12 pb-8 text-inherit">
                <div className="bg-paper shadow-2xl border-y-4 border-paper-border">
                    <h1 className="hindi-font text-5xl md:text-7xl font-bold uppercase tracking-tight mb-2 text-paper-gray">
                        {t.headerTitle}
                    </h1>
                    <div className="flex justify-center items-center gap-8 text-sm font-bold uppercase tracking-widest text-inherit">
                        <span className="text-paper-green flex items-center gap-1"><Moon className="w-4 h-4" /> {t.twoNations}</span>
                        <span className="opacity-20">|</span>
                        <span className="text-paper-orange flex items-center gap-1"><Footprints className="w-4 h-4" /> {t.oneWalker}</span>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10 shadow-2xl">

                {/* LEFT COLUMN: THE LEAGUE & PAKISTAN (GREEN) */}
                <div className="green-texture p-8 lg:min-h-screen space-y-10 border-r-4 border-yellow-500">

                    {/* LAHORE RESOLUTION */}
                    <div className="bg-paper-green/20 p-6 border border-paper-orange/40 relative overflow-hidden text-white">
                        <div className="absolute -right-4 -top-4 opacity-10">
                            <Moon className="w-40 h-40 text-white" />
                        </div>
                        <h3 className="urdu-font text-3xl font-bold mb-4 text-paper-orange text-center border-b border-paper-orange/20 pb-2">
                            {t.lahoreResolutionTitle}
                        </h3>
                        <p className="text-center text-xs opacity-60 mb-4 tracking-widest uppercase">{t.lahoreSubtitle}</p>

                        <div className="space-y-4 text-sm text-inherit">
                            <div className="bg-neutral-900/40 dark:bg-black/40 p-3 rounded border border-white/20 text-inherit">
                                <strong className="block text-white mb-1">{t.demandLabel}</strong>
                                <span className="opacity-80">{t.demandText}</span>
                                <br /><span className="text-xs text-paper-orange italic">{t.statesNote}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-xs text-inherit">
                                <div className="bg-card/10 p-2 text-inherit">
                                    <strong className="block text-paper-orange">{t.movedBy}</strong>
                                    <span className="opacity-80">{t.movedByName}</span>
                                </div>
                                <div className="bg-card/10 p-2 text-inherit">
                                    <strong className="block text-paper-orange">{t.draftedBy}</strong>
                                    <span className="opacity-80">{t.draftedByName}</span>
                                    <span className="block text-[10px] opacity-60 mt-1">{t.draftedByNote}</span>
                                </div>
                            </div>

                            <div className="bg-black/40 p-3 border-l-2 border-paper-red text-inherit">
                                <strong className="block text-paper-red mb-1">{t.twoNationTheoryTitle}</strong>
                                <p className="italic text-xs opacity-80">{t.twoNationTheoryQuote}</p>
                            </div>
                        </div>
                    </div>

                    {/* DEEP DIVE: ORIGIN OF "PAKISTAN" */}
                    <div className="bg-paper text-paper-gray p-4 rounded shadow-lg transform rotate-1 border border-paper-border/20 text-inherit">
                        <h4 className="typewriter-font font-bold text-center border-b border-paper-border/20 pb-1 mb-2 text-inherit">
                            {t.pakistanOriginTitle}
                        </h4>
                        <div className="flex justify-between items-start text-xs text-inherit">
                            <div className="w-2/3 opacity-80">
                                {t.rahmatAliNote}
                            </div>
                            <div className="w-1/3 bg-paper-border/5 p-2 font-mono text-center border border-paper-border/20 text-inherit">
                                <strong>P</strong>{t.pakistanAcronym.P}<br />
                                <strong>A</strong>{t.pakistanAcronym.A}<br />
                                <strong>K</strong>{t.pakistanAcronym.K}<br />
                                <strong>S</strong>{t.pakistanAcronym.S}<br />
                                <strong>TAN</strong> ({t.pakistanAcronym.TAN})
                            </div>
                        </div>
                    </div>

                    {/* AUGUST OFFER */}
                    <div className="bg-paper-green/20 p-6 border-t-4 border-paper-border text-white">
                        <h3 className="formal-font text-2xl font-bold mb-3 text-white opacity-80 flex items-center gap-2">
                            <Mic2 className="w-5 h-5 opacity-40" /> {t.augustOfferTitle}
                        </h3>
                        <p className="text-xs mb-3 opacity-60 italic">{t.linlithgowNote}</p>

                        <div className="space-y-2 text-xs text-inherit">
                            <div className="bg-card/10 p-2 text-inherit">
                                <strong className="text-paper-orange">{t.dominionStatus}</strong>
                            </div>
                            <div className="bg-card/10 p-2 text-inherit">
                                <strong className="text-paper-orange">{t.constituentAssembly}</strong>
                            </div>
                            <div className="bg-paper-red/20 p-2 border border-paper-red/40 text-inherit">
                                <strong className="text-paper-red">{t.theVeto}</strong>
                                <br /><span className="italic opacity-60">{t.vetoEffect}</span>
                            </div>
                        </div>

                        <div className="mt-3 text-[10px] text-center bg-black/40 p-2 rounded opacity-70">
                            {t.atlanticCharterNote}
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: CONGRESS & SATYAGRAHA (SAFFRON) */}
                <div className="saffron-texture p-8 lg:min-h-screen space-y-10">

                    {/* RAMGARH SPLIT */}
                    <div className="bg-paper p-6 border-l-4 border-paper-orange shadow-md text-inherit">
                        <h3 className="hindi-font text-3xl font-bold mb-4 text-paper-orange uppercase">
                            {t.ramgarhSessionTitle}
                        </h3>

                        <div className="flex gap-4 mb-4 text-inherit">
                            <div className="flex-1 bg-paper-orange/10 p-2 border border-paper-orange/20 text-inherit">
                                <strong className="block text-paper-orange text-sm">{t.congressGroup}</strong>
                                <p className="text-xs mt-1 opacity-80">{t.congressGoal}</p>
                            </div>
                            <div className="flex-1 bg-paper-red/5 p-2 border border-paper-red/20 text-inherit">
                                <strong className="block text-paper-red text-sm">{t.forwardBlocGroup}</strong>
                                <p className="text-xs mt-1 opacity-80">{t.forwardBlocGoal}</p>
                            </div>
                        </div>
                    </div>

                    {/* MARTYR CARD */}
                    <div className="bg-paper-red/10 p-4 border border-paper-red/20 text-paper-red relative">
                        <div className="absolute top-2 right-2"><Skull className="w-5 h-5 opacity-40" /></div>
                        <strong className="block font-bold uppercase text-sm mb-1">{t.revengeTitle}</strong>
                        <p className="text-xs opacity-90">
                            <strong>{t.revengeDate}</strong> <span className="opacity-80">{t.revengeAction}</span>
                            <br /><span className="text-[10px] opacity-50">{t.revengeNote}</span>
                        </p>
                    </div>

                    {/* INDIVIDUAL SATYAGRAHA */}
                    <div className="bg-paper p-0 border-2 border-paper-border shadow-md text-inherit">
                        <div className="bg-neutral-800 text-white p-3 text-center">
                            <h3 className="typewriter-font text-xl font-bold">{t.individualSatyagrahaTitle}</h3>
                            <p className="text-[10px] uppercase tracking-widest text-white/40">{t.individualSatyagrahaSubtitle}</p>
                        </div>
                        <div className="p-5 space-y-4 text-inherit">
                            <p className="text-xs italic text-center w-3/4 mx-auto border-b border-paper-border/20 pb-2 opacity-70">
                                {t.individualSatyagrahaQuote}
                            </p>

                            <div className="space-y-2 text-sm text-inherit">
                                <div className="flex items-center gap-3">
                                    <Badge className="bg-paper-orange text-white border-none">{t.st}</Badge>
                                    <strong>{t.vinoba}</strong>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Badge className="bg-paper-indigo text-white border-none">{t.nd}</Badge>
                                    <strong>{t.nehru}</strong>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Badge className="bg-paper-gray text-white border-none">{t.rd}</Badge>
                                    <strong>{t.brahmaDatt}</strong>
                                </div>
                            </div>

                            <div className="bg-paper-border/5 p-2 text-xs text-center border-t border-paper-border/20 mt-2 opacity-60">
                                {t.bardoliNote}
                            </div>
                        </div>
                    </div>

                    {/* THE GREAT ESCAPE */}
                    <div className="bg-paper-indigo/10 text-paper-indigo p-6 relative overflow-hidden border border-paper-indigo/20 text-inherit">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-paper-orange rounded-full blur-3xl opacity-10"></div>
                        <h3 className="formal-font text-2xl font-bold mb-4 flex items-center gap-2 text-inherit">
                            <Car className="w-6 h-6 opacity-40 text-paper-orange" /> {t.greatEscapeTitle}
                        </h3>

                        <div className="space-y-3 text-xs z-10 relative text-inherit">
                            <div className="bg-card/10 dark:bg-black/40 p-2 rounded text-inherit">
                                <strong>{t.escapeDate}</strong> <span className="opacity-80">{t.escapeAction}</span>
                                <br /><span className="opacity-60">{t.escapeContext}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-inherit">
                                <div className="border border-paper-indigo/20 p-2 text-inherit">
                                    <strong className="block text-paper-orange">{t.theDisguise}</strong>
                                    <span className="opacity-80">{t.disguiseName}</span>
                                    <br /><span className="opacity-80">{t.passportName}</span>
                                </div>
                                <div className="border border-paper-indigo/20 p-2 text-inherit">
                                    <strong className="block text-paper-orange">{t.theAccomplices}</strong>
                                    <span className="opacity-80">{t.accompliceDriver}</span>
                                    <br /><span className="opacity-80">{t.accompliceGuide}</span>
                                </div>
                            </div>

                            <div className="text-[10px] font-mono mt-2 text-center opacity-40 text-inherit">
                                {t.escapeRoute}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
