"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Gavel,
    Scroll,
    Landmark,
    Shield,
    Coins,
    BookOpen,
    Scale
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useLanguageStore } from '@/lib/language-store';
import { ch26Translations } from './translations/ch26';

export default function HandwrittenChapter26() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch26Translations.hi : ch26Translations.en;

    return (
        <div className="min-h-screen bg-paper font-sans text-paper-gray selection:bg-paper-purple/30 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Patrick+Hand&family=Special+Elite&family=Cutive+Mono&display=swap');
                
                .parchment-texture {
                    background-color: var(--paper-bg);
                    background-image: url("https://www.transparenttextures.com/patterns/aged-paper.png");
                }

                .marker-font { font-family: 'Permanent Marker', cursive; }
                .hand-font { font-family: 'Patrick Hand', cursive; }
                .mono-font { font-family: 'Cutive Mono', monospace; }
                .type-font { font-family: 'Special Elite', monospace; }
            `}</style>

            {/* BACKGROUND */}
            <div className="fixed inset-0 parchment-texture pointer-events-none z-0 opacity-10"></div>

            {/* HEADER */}
            <header className="max-w-4xl mx-auto pt-16 pb-12 text-center relative z-10 text-inherit">
                <div className="bg-paper p-8 border-4 border-double border-paper-purple shadow-2xl relative text-inherit">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-paper-purple via-paper-gray to-paper-purple"></div>
                    <div className="flex justify-center mb-4 text-paper-purple">
                        <Landmark className="w-12 h-12 opacity-80" />
                    </div>
                    <h1 className="marker-font text-4xl md:text-6xl font-bold uppercase text-paper-purple mb-2 leading-tight text-inherit">
                        {t.headerTitle}
                    </h1>
                    <p className="mono-font text-lg text-paper-gray/60 uppercase tracking-widest font-bold text-inherit">{t.subHeader}</p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10 px-6 pb-20">

                {/* LEFT COLUMN: CIVIL SERVICES & POLICE */}
                <div className="space-y-12">

                    {/* CIVIL SERVICES */}
                    <div className="bg-paper p-6 shadow-md border-t-4 border-paper-purple relative text-inherit">
                        <div className="absolute -left-3 top-6 bg-paper-purple text-paper-bg px-2 py-1 rotate-90 text-xs font-bold tracking-widest uppercase border-none">ICS</div>
                        <h2 className="marker-font text-2xl text-paper-purple mb-4 ml-6 uppercase text-inherit">{t.civilServicesTitle}</h2>

                        <div className="hand-font text-lg space-y-4 ml-2 text-inherit">
                            <p className="italic text-paper-gray/60 font-bold text-inherit">{t.nehruQuote}</p>

                            <div className="bg-paper-purple/10 p-4 rounded-lg border border-paper-purple/20 text-inherit">
                                <ul className="space-y-3 text-inherit">
                                    <li className="flex gap-2 text-inherit">
                                        <Badge className="bg-paper-purple text-white border-none font-bold">{t.date1853}</Badge>
                                        <span className="text-inherit opacity-80">{t.desc1853}</span>
                                    </li>
                                    <li className="flex gap-2 text-inherit">
                                        <Badge className="bg-paper-purple text-white border-none font-bold">{t.date1863}</Badge>
                                        <span className="text-inherit opacity-80">{t.desc1863}</span>
                                    </li>
                                    <li className="flex gap-2 text-inherit">
                                        <Badge className="bg-paper-purple text-white border-none font-bold">{t.date1924}</Badge>
                                        <span className="text-inherit opacity-80">{t.desc1924}</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-sm bg-paper-border/10 p-2 border-l-2 border-paper-purple text-inherit">
                                <strong className="uppercase text-paper-purple">{t.examCenterTitle}</strong> <span className="text-inherit opacity-80">{t.examCenterDesc}</span>
                            </div>
                        </div>
                    </div>

                    {/* POLICE REFORMS */}
                    <div className="bg-paper-gray text-paper-bg p-6 shadow-xl border-l-4 border-paper-orange text-inherit">
                        <div className="flex items-center gap-3 mb-4 text-inherit">
                            <Shield className="w-8 h-8 text-paper-orange opacity-80" />
                            <h2 className="type-font text-2xl uppercase tracking-widest text-inherit">{t.policeReformsTitle}</h2>
                        </div>

                        <div className="mono-font space-y-4 text-sm text-inherit">
                            <div className="border-b border-paper-bg/20 pb-2 text-inherit">
                                <strong className="text-paper-orange block uppercase mb-1 font-bold text-inherit">{t.policeAct1861}</strong>
                                <span className="text-inherit opacity-80">{t.policeActDesc}</span>
                            </div>
                            <div className="text-inherit">
                                <strong className="text-paper-orange block uppercase mb-1 font-bold text-inherit">{t.frazerCommission}</strong>
                                <span className="opacity-70 text-inherit">{t.frazerDesc}</span>
                                <ul className="list-disc pl-5 mt-1 opacity-60 space-y-1 text-inherit">
                                    <li className="text-inherit">{t.corruptionCriticism}</li>
                                    <li className="text-inherit">{t.cidDesc}</li>
                                    <li className="text-inherit">{t.cibDesc}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: LOCAL GOVT, JUDICIARY & FINANCE */}
                <div className="space-y-12">

                    {/* FINANCIAL DECENTRALIZATION */}
                    <div className="relative bg-paper-indigo/10 p-6 border-2 border-paper-indigo transform rotate-1 text-inherit shadow-lg">
                        <h2 className="marker-font text-2xl text-paper-indigo mb-4 flex items-center gap-2 uppercase tracking-tight text-inherit">
                            <Coins className="w-6 h-6 opacity-60" /> {t.financialEvolutionTitle}
                        </h2>

                        <div className="hand-font text-lg space-y-4 text-inherit">
                            <div className="flex gap-4 items-start border-b border-paper-indigo/20 pb-2 text-inherit">
                                <div className="font-bold text-paper-indigo w-24 shrink-0 uppercase text-inherit">{t.mayoLabel}</div>
                                <div className="text-sm text-inherit opacity-80">{t.mayoDesc}</div>
                            </div>
                            <div className="flex gap-4 items-start border-b border-paper-indigo/20 pb-2 text-inherit">
                                <div className="font-bold text-paper-indigo w-24 shrink-0 uppercase text-inherit">{t.lyttonLabel}</div>
                                <div className="text-sm text-inherit opacity-80">{t.lyttonDesc}</div>
                            </div>
                            <div className="flex gap-4 items-start text-inherit">
                                <div className="font-bold text-paper-indigo w-24 shrink-0 uppercase text-inherit">{t.riponLabel}</div>
                                <div className="text-sm text-inherit opacity-80">{t.riponDesc}</div>
                            </div>
                        </div>
                    </div>

                    {/* LOCAL SELF GOVERNMENT */}
                    <div className="bg-paper p-6 shadow-[8px_8px_0_0_var(--paper-green-80)] border border-paper-green text-inherit">
                        <h2 className="marker-font text-2xl text-paper-green mb-4 underline decoration-wavy uppercase tracking-tighter text-inherit">
                            {t.localSelfGovtTitle}
                        </h2>

                        <div className="hand-font text-lg space-y-4 text-inherit">
                            <div className="bg-paper-green/10 p-4 rounded-xl border border-paper-green/20 text-center shadow-inner text-inherit">
                                <div className="text-3xl mb-1 opacity-60">👑</div>
                                <strong className="block text-xl text-paper-green uppercase text-inherit">{t.fatherOfLocalGovt}</strong>
                                <span className="text-xs uppercase tracking-widest font-bold text-paper-green/60 text-inherit">{t.fatherSubLabel}</span>
                                <p className="text-sm mt-2 font-serif text-paper-gray/60 italic font-bold text-inherit">
                                    {t.riponQuote}
                                </p>
                            </div>

                            <ul className="text-sm list-disc pl-5 space-y-2 text-inherit opacity-80">
                                <li className="text-inherit"><strong className="text-inherit">{t.mayoResolution}</strong></li>
                                <li className="text-inherit"><strong className="text-inherit">{t.royalCommission}</strong> <span className="text-inherit opacity-80">{t.hobhouseDesc}</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* JUDICIARY & ILBERT BILL */}
                    <div className="bg-paper-red/10 p-6 border-2 border-paper-red/20 relative group text-inherit shadow-xl transition-all duration-300">
                        <h2 className="type-font text-2xl text-paper-red mb-4 flex items-center gap-2 uppercase font-bold tracking-widest text-inherit">
                            <Scale className="w-6 h-6 opacity-60" /> {t.lawOrderTitle}
                        </h2>

                        <div className="hand-font space-y-4 text-inherit">
                            <div className="border-b border-paper-red/10 pb-3 text-inherit opacity-80">
                                <strong className="block text-lg uppercase tracking-tight text-inherit">{t.highCourtsAct}</strong>
                                <p className="text-sm opacity-80 text-inherit">{t.highCourtsDesc}</p>
                            </div>

                            <div className="bg-paper-red/5 p-4 border-l-4 border-paper-red shadow-inner text-inherit">
                                <div className="flex justify-between items-center mb-2 text-inherit">
                                    <strong className="text-paper-red text-lg uppercase tracking-tighter text-inherit">{t.ilbertBillTitle}</strong>
                                    <Badge className="bg-paper-red text-white font-bold border-none">{t.racismBadge}</Badge>
                                </div>
                                <div className="text-sm space-y-1 text-inherit">
                                    <span className="block italic text-inherit opacity-80"><strong className="text-paper-red text-inherit">{t.proposedBy}</strong> {t.ilbertName}</span>
                                    <span className="block text-inherit opacity-80"><strong className="text-paper-red text-inherit">{t.theGoalLabel}</strong> {t.theGoalDesc}</span>
                                    <span className="block text-inherit opacity-80"><strong className="text-paper-red text-inherit">{t.theOutcomeLabel}</strong> {t.theOutcomeDesc}</span>
                                    <span className="block pt-2 font-bold text-paper-red border-t border-paper-red/20 mt-2 text-inherit">
                                        <span className="uppercase text-xs mr-1 text-inherit">{t.legacyLabel}</span> <span className="text-inherit opacity-80">{t.legacyDesc}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
