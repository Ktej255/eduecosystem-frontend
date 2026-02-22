"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Sword,
    Anchor,
    Scale,
    Skull,
    Flag,
    Ship,
    Users,
    MapPin,
    AlertTriangle,
    Mic2,
    Plane,
    Target
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from '@/lib/language-store';
import { ch21Translations } from './translations/ch21';

export default function HandwrittenChapter21() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch21Translations.hi : ch21Translations.en;

    return (
        <div className="min-h-screen bg-paper font-sans text-paper-gray selection:bg-paper-orange/30 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Roboto+Condensed:wght@400;700&family=Special+Elite&display=swap');
                
                .camo-texture {
                    background-color: var(--paper-green-80);
                    background-image: url("https://www.transparenttextures.com/patterns/army-camo.png");
                }
                :global(.dark) .camo-texture { background-color: #1a1a05; }

                .navy-texture {
                    background-color: var(--paper-indigo-80);
                    background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
                }
                :global(.dark) .navy-texture { background-color: #05051a; }

                .red-fort-texture {
                    background-color: var(--paper-red-80);
                    background-image: url("https://www.transparenttextures.com/patterns/brick-wall.png");
                }

                .stencil-font { font-family: 'Black Ops One', cursive; }
                .legal-font { font-family: 'Roboto Condensed', sans-serif; }
                .handwritten-font { font-family: 'Special Elite', monospace; }

                .split-screen {
                    display: grid;
                    grid-template-columns: 1fr;
                }
                @media (min-width: 1024px) {
                    .split-screen {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                .tiger-emblem {
                    filter: drop-shadow(0 0 10px rgba(255,165,0,0.5));
                }
            `}</style>

            {/* BACKGROUND SPLIT */}
            <div className="fixed top-0 left-0 w-full lg:w-1/2 h-1/2 lg:h-full camo-texture z-0 pointer-events-none opacity-80"></div>
            <div className="fixed bottom-0 left-0 lg:top-0 lg:left-1/2 w-full lg:w-1/2 h-1/2 lg:h-full navy-texture z-0 pointer-events-none opacity-80"></div>

            {/* HEADER (CENTERED RED FORT) */}
            <header className="relative z-20 max-w-4xl mx-auto pt-10 pb-6 text-center text-inherit">
                <div className="bg-paper-red border-4 border-paper-orange p-6 shadow-2xl skew-x-[-10deg] inline-block">
                    <div className="skew-x-[10deg] text-inherit">
                        <div className="flex justify-center items-center gap-4 mb-2 opacity-80 text-inherit">
                            <Sword className="w-8 h-8 text-paper-orange" />
                            <span className="stencil-font text-2xl text-paper-orange">{t.headerDate}</span>
                            <Anchor className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="stencil-font text-5xl md:text-7xl font-bold uppercase tracking-widest text-white drop-shadow-lg mb-2">
                            {t.headerTitle}
                        </h1>
                        <div className="flex justify-center gap-4 text-xs font-bold uppercase tracking-widest text-paper-indigo bg-paper-orange px-4 py-1">
                            <span>{t.inaLabel}</span>
                            <span>•</span>
                            <span>{t.redFortTrials}</span>
                            <span>•</span>
                            <span>{t.rinMutiny}</span>
                        </div>
                        <p className="text-[10px] text-white mt-1 italic opacity-80">{t.attleeQuote}</p>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 px-6 pb-20">

                {/* LEFT COLUMN: THE JUNGLE (INA) */}
                <div className="space-y-10">

                    {/* ORIGINS & NETAJI */}
                    <div className="bg-paper-green/20 border-l-4 border-paper-orange p-6 shadow-xl relative overflow-hidden text-white">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-paper-orange rounded-full blur-3xl opacity-10"></div>
                        <h3 className="stencil-font text-3xl font-bold mb-4 text-paper-orange flex items-center gap-2">
                            <Target className="w-6 h-6 opacity-40" /> {t.azadHindTitle}
                        </h3>

                        <div className="space-y-4 text-sm text-inherit">
                            <div className="bg-black/40 p-3 rounded text-inherit">
                                <strong className="block text-paper-orange mb-1 uppercase text-xs">{t.originsLabel}</strong>
                                <ul className="list-disc ml-4 text-xs space-y-1 opacity-80 text-inherit">
                                    <li>{t.originTokyo}</li>
                                    <li>{t.originBangkok}</li>
                                    <li>{t.originMohanSingh}</li>
                                </ul>
                            </div>

                            <div className="border border-paper-orange/30 p-3 relative text-inherit">
                                <Badge className="absolute -top-3 right-2 bg-paper-orange text-white border-none">{t.provisionalGovtBadge}</Badge>
                                <strong className="block text-xl text-white mb-2 stencil-font">{t.provisionalGovtTitle}</strong>
                                <div className="grid grid-cols-2 gap-2 text-xs text-inherit">
                                    <div className="text-inherit"><strong className="text-paper-orange">{t.pmWar}</strong> Netaji</div>
                                    <div className="text-inherit"><strong className="text-paper-orange">{t.women}</strong> Lakshmi Sahgal</div>
                                    <div className="text-inherit"><strong className="text-paper-orange">{t.advisor}</strong> Rash Behari</div>
                                    <div className="text-inherit"><strong className="text-paper-orange">{t.propaganda}</strong> S.A. Ayer</div>
                                </div>
                                <div className="mt-2 text-xs italic bg-card/10 p-2 text-center text-inherit">
                                    {t.chaloDelhi}
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-xs bg-black/40 p-2 text-inherit">
                                <span className="text-inherit">{t.regiments}</span>
                                <span className="text-paper-orange">{t.raniOfJhansi}</span>
                            </div>

                            <div className="text-[10px] opacity-70 text-center">
                                {t.freeIndiaLegion}
                            </div>
                        </div>
                    </div>

                    {/* THE CAMPAIGN & END */}
                    <div className="bg-paper-green/30 p-6 border-t-4 border-paper-orange relative text-white">
                        <h3 className="stencil-font text-2xl font-bold mb-3 text-white">{t.campaignTitle}</h3>

                        <div className="space-y-3 text-xs">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-red-500" />
                                <div>
                                    <strong className="block text-white text-sm">{t.moirangTitle}</strong>
                                    {t.moirangDate}
                                </div>
                            </div>

                            <div className="bg-card/5 p-2 flex gap-4 text-inherit">
                                <div className="flex-1 text-inherit">
                                    <strong className="block text-paper-orange">{t.andaman}</strong>
                                    <span className="opacity-80">{t.shaheed}</span>
                                </div>
                                <div className="flex-1 text-inherit">
                                    <strong className="block text-paper-orange">{t.nicobar}</strong>
                                    <span className="opacity-80">{t.swaraj}</span>
                                </div>
                            </div>

                            <div className="bg-paper-red/20 border border-paper-red/30 p-3 mt-4 flex items-center gap-3 text-inherit">
                                <Plane className="w-6 h-6 text-paper-red transform rotate-45" />
                                <div className="text-inherit">
                                    <strong className="block text-paper-red">{t.theEndTitle}</strong>
                                    <span className="opacity-80">{t.theEndDesc}</span>
                                    <br /><span className="text-[10px] opacity-60">{t.ashesNote}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RED FORT TRIALS */}
                    <div className="bg-paper-red p-6 text-white shadow-2xl transform rotate-1 border-4 border-double border-paper-orange">
                        <h3 className="legal-font text-3xl font-bold mb-4 uppercase text-center border-b border-white/20 pb-2">
                            {t.redFortTrialsTitle}
                        </h3>

                        <div className="text-center mb-4">
                            <div className="inline-flex gap-4 text-sm font-bold bg-black/30 px-4 py-2 rounded-full border border-paper-orange/40">
                                <span className="text-paper-orange">{t.sahgal}</span>
                                <span className="text-paper-green">{t.shahNawaz}</span>
                                <span className="text-paper-indigo/60">{t.dhillon}</span>
                            </div>
                            <p className="text-xs mt-2 italic opacity-70">{t.aawazQuote}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-xs text-left">
                            <div className="bg-card/10 p-2 border-l-2 border-white">
                                <strong className="block mb-1">{t.defenseTeam}</strong>
                                {t.defenseTeamDesc}
                            </div>
                            <div className="bg-card/10 p-2 border-l-2 border-white">
                                <strong className="block mb-1">{t.verdict}</strong>
                                {t.verdictDesc}
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: THE SEA (RIN MUTINY) */}
                <div className="space-y-10">

                    {/* RIN MUTINY HEADER */}
                    <div className="bg-paper-indigo p-6 border-r-4 border-paper-indigo/40 shadow-xl relative text-white">
                        <div className="absolute top-2 right-2 flex gap-1">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-card rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <h3 className="stencil-font text-3xl font-bold mb-4 text-white/90 flex items-center gap-2">
                            <Anchor className="w-6 h-6 opacity-40" /> {t.navalMutinyTitle}
                        </h3>

                        <div className="space-y-4 text-sm text-inherit">
                            <div className="bg-card/10 p-3 rounded border border-white/20 text-inherit">
                                <strong className="block text-paper-orange mb-1 uppercase text-xs">{t.sparkLabel}</strong>
                                <span className="opacity-80">{t.bcDuttNote}</span>
                                <br /><span className="opacity-60 italic">{t.triggerNote}</span>
                            </div>

                            <div className="flex gap-2 text-xs text-inherit">
                                <div className="bg-card/10 p-2 flex-1 text-inherit">
                                    <strong className="block text-paper-orange/60 uppercase text-[10px]">{t.ncscPresident}</strong>
                                    M.S. Khan (Muslim)
                                </div>
                                <div className="bg-card/10 p-2 flex-1 text-inherit">
                                    <strong className="block text-paper-orange/60 uppercase text-[10px]">{t.ncscVP}</strong>
                                    Madan Singh (Sikh)
                                </div>
                            </div>

                            <div className="bg-black/40 p-3 text-center border-t border-white/20 text-inherit">
                                <strong className="block text-white text-xs mb-1 uppercase opacity-40">{t.threeFlags}</strong>
                                <span className="opacity-80">{t.threeFlagsDesc}</span>
                                <br /><span className="text-[10px] italic opacity-40">{t.threeFlagsNote}</span>
                            </div>
                        </div>
                    </div>

                    {/* WIDER REVOLT & SUPPORT */}
                    <div className="bg-paper-indigo/80 p-6 relative text-white">
                        <Badge className="absolute -top-3 left-4 bg-paper-red text-white border-none">{t.totalCollapseBadge}</Badge>

                        <div className="space-y-3 text-xs text-inherit">
                            <div className="flex justify-between items-center border-b border-white/10 pb-2 text-inherit">
                                <span className="text-inherit"><strong>{t.rashidAliDay}</strong></span>
                                <span className="text-right opacity-60 text-inherit">{t.rashidAliDesc}</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/10 pb-2 text-inherit">
                                <span className="text-inherit"><strong>{t.civilianBloodbath}</strong></span>
                                <span className="text-right text-paper-orange font-bold text-inherit">{t.civilianBloodbathDesc}</span>
                            </div>
                            <div className="flex justify-between items-center text-inherit">
                                <span className="text-inherit"><strong>{t.widerRevolt}</strong></span>
                                <span className="text-right opacity-60 text-inherit">{t.widerRevoltDesc}</span>
                            </div>
                        </div>

                        <div className="mt-4 p-3 bg-red-900/40 border border-paper-red/30 text-[10px] text-center italic text-inherit">
                            <span className="opacity-80">{t.mutineersQuote}</span>
                        </div>
                    </div>

                    {/* THE IMPACT */}
                    <div className="bg-paper text-paper-gray p-6 transform -rotate-1 shadow-lg border border-paper-border/20 text-inherit">
                        <h3 className="handwritten-font text-2xl font-bold mb-2 uppercase text-inherit">{t.whyTheyLeftTitle}</h3>
                        <p className="text-sm font-serif mb-3 opacity-80 text-inherit">
                            {t.attleeAdmission}
                        </p>
                        <div className="text-4xl font-bold text-center text-paper-red stencil-font tracking-widest border-y-2 border-paper-border py-2 text-inherit">
                            {t.paramount}
                        </div>
                        <p className="text-xs text-center mt-2 opacity-60 text-inherit">
                            {t.auchinleckQuote}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}
