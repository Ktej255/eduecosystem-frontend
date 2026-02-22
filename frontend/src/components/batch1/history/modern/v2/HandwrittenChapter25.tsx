"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Scissors,
    Flag,
    Map as MapIcon,
    AlertTriangle,
    Calendar,
    Users,
    FileText,
    CheckCircle
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { useLanguageStore } from '@/lib/language-store';
import { ch25Translations } from './translations/ch25';

export default function HandwrittenChapter25() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch25Translations.hi : ch25Translations.en;

    return (
        <div className="min-h-screen bg-paper font-sans text-paper-gray selection:bg-paper-orange/30 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Patrick+Hand&family=Reenie+Beanie&family=Special+Elite&display=swap');
                
                .parchment-texture {
                    background-color: #ffe0b2;
                    background-image: url("https://www.transparenttextures.com/patterns/aged-paper.png");
                }

                .marker-font { font-family: 'Permanent Marker', cursive; }
                .hand-font { font-family: 'Patrick Hand', cursive; }
                .scribble-font { font-family: 'Reenie Beanie', cursive; }
                .type-font { font-family: 'Special Elite', monospace; }

                .torn-paper {
                    clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 95% 95%, 90% 90%, 85% 95%, 80% 90%, 75% 95%, 70% 90%, 65% 95%, 60% 90%, 55% 95%, 50% 90%, 45% 95%, 40% 90%, 35% 95%, 30% 90%, 25% 95%, 20% 90%, 15% 95%, 10% 90%, 5% 95%, 0% 90%);
                }
            `}</style>

            {/* BACKGROUND */}
            <div className="fixed inset-0 parchment-texture pointer-events-none z-0"></div>

            {/* HEADER */}
            <header className="max-w-4xl mx-auto pt-16 pb-12 text-center relative z-10">
                <div className="relative inline-block">
                    <div className="absolute -inset-2 bg-orange-500 blur-xl opacity-20 transform rotate-2"></div>
                    <div className="border-4 border-black p-6 bg-card transform -rotate-1 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex justify-between items-center border-b-2 border-black pb-2 mb-2">
                            <span className="type-font text-xs uppercase">{t.finalChapterLabel}</span>
                            <span className="type-font text-xs bg-black text-white px-2 tracking-widest">{t.year1947}</span>
                        </div>
                        <h1 className="marker-font text-5xl md:text-7xl font-bold uppercase tracking-tight text-black mb-2 leading-none">
                            {t.headerTitle}
                        </h1>
                        <p className="scribble-font text-2xl mt-2 text-gray-600 font-bold">{t.trystWithDestiny}</p>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10 px-6 pb-20">

                {/* LEFT COLUMN: THE PLANS */}
                <div className="space-y-12">

                    {/* PLAN BALKAN */}
                    <div className="bg-card p-6 shadow-lg border-l-8 border-gray-400 rotate-1 text-gray-900">
                        <h2 className="marker-font text-2xl text-gray-500 mb-4 flex items-center gap-2">
                            <FileText className="w-6 h-6" /> {t.secretPlanTitle}
                        </h2>

                        <div className="hand-font text-lg space-y-4">
                            <div className="bg-gray-100 p-3 border border-gray-300">
                                <strong className="block text-xl uppercase tracking-tighter">{t.planBalkanTitle}</strong>
                                <p className="text-sm">{t.planBalkanDesc}</p>
                            </div>

                            <div className="flex gap-4 items-center bg-red-50 p-3 border-l-4 border-red-500">
                                <div className="text-3xl">😡</div>
                                <div>
                                    <strong className="block text-red-900 uppercase tracking-tight">{t.nehruReactionTitle}</strong>
                                    <p className="text-sm">{t.nehruReactionDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MOUNTBATTEN PLAN */}
                    <div className="bg-[#e3f2fd] p-6 shadow-xl border-2 border-blue-800 rounded-lg relative text-gray-900">
                        <div className="absolute -top-4 right-4 bg-blue-800 text-white px-3 py-1 font-bold type-font text-sm tracking-widest uppercase">{t.mountbattenPlanBadge}</div>
                        <h2 className="marker-font text-3xl text-blue-900 mb-6 uppercase">
                            {t.mountbattenPlanTitle}
                        </h2>

                        <div className="hand-font space-y-4">
                            <ul className="list-disc pl-5 space-y-2 text-lg">
                                <li><strong>{t.partitionAccepted}</strong></li>
                                <li><strong>{t.dateSet}</strong></li>
                                <li><strong>{t.referendum}</strong></li>
                                <li><strong>{t.princelyStates}</strong></li>
                            </ul>

                            <div className="bg-card p-4 border border-blue-200 mt-4 shadow-sm">
                                <strong className="type-font text-xs uppercase text-gray-500 block mb-1 font-bold">{t.boundaryCommissionTitle}</strong>
                                <div className="flex items-center gap-2">
                                    <Scissors className="w-5 h-5 text-red-600" />
                                    <span className="text-xl font-bold uppercase tracking-tight">{t.radcliffeName}</span>
                                </div>
                                <p className="text-sm italic mt-1">{t.radcliffeDesc}</p>
                            </div>
                        </div>
                    </div>

                    {/* INDIAN INDEPENDENCE ACT */}
                    <div className="bg-yellow-50 p-6 shadow border border-yellow-200 text-gray-900">
                        <h2 className="type-font text-xl font-bold text-yellow-900 mb-2 border-b border-yellow-300 pb-2 uppercase tracking-wide">
                            {t.independenceActTitle}
                        </h2>
                        <div className="hand-font text-lg">
                            <p><strong>{t.royalAssent}</strong></p>
                            <p className="mt-2 text-sm text-gray-600">
                                {t.abolishedViceroy}
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-4 text-center text-sm font-bold">
                                <div className="bg-orange-100 p-2 border border-orange-200">
                                    <strong>{t.indiaGG}</strong><br />{t.mountbatten}
                                </div>
                                <div className="bg-green-100 p-2 border border-green-200">
                                    <strong>{t.pakistanGG}</strong><br />{t.jinnah}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: THE REALITY */}
                <div className="space-y-12">

                    {/* PARTITION HORROR */}
                    <div className="bg-card p-1 shadow-[0_0_20px_rgba(0,0,0,0.1)] -rotate-1 text-gray-900">
                        <div className="border-4 border-red-700 p-5 torn-paper bg-[#ffebee]">
                            <h2 className="marker-font text-3xl text-red-800 mb-4 flex items-center justify-between uppercase">
                                <span>{t.theSurgeryTitle}</span>
                                <Scissors className="w-8 h-8 rotate-90" />
                            </h2>

                            <div className="hand-font space-y-4">
                                <p className="text-xl leading-relaxed italic font-bold">
                                    {t.surgeryQuote}
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-red-800 text-white p-3 text-center">
                                        <div className="text-3xl font-bold uppercase tracking-tight">{t.displacedCount}</div>
                                        <div className="text-xs uppercase font-bold">{t.displacedLabel}</div>
                                    </div>
                                    <div className="bg-black text-white p-3 text-center">
                                        <div className="text-3xl font-bold uppercase tracking-tight">{t.deadCount}</div>
                                        <div className="text-xs uppercase font-bold">{t.deadLabel}</div>
                                    </div>
                                </div>

                                <div className="bg-card/50 p-3 border border-red-200 italic text-sm">
                                    {t.punjabReality}
                                    <br />
                                    {t.bengalReality}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* INTEGRATION OF STATES */}
                    <div className="bg-paper-orange/10 p-6 border-l-8 border-paper-orange shadow-md text-inherit">
                        <h2 className="marker-font text-2xl text-paper-orange mb-4 flex items-center gap-2 uppercase text-inherit">
                            <MapIcon className="w-6 h-6 opacity-40" /> {t.statesIntegrationTitle}
                        </h2>

                        <div className="hand-font text-lg space-y-4 text-inherit">
                            <div className="flex items-center gap-3 text-inherit">
                                <div className="w-12 h-12 rounded-full bg-paper-border/20 flex items-center justify-center font-bold text-2xl opacity-60">👷‍♂️</div>
                                <div className="text-inherit">
                                    <strong className="block text-xl uppercase tracking-tighter text-inherit">{t.patelMenonTitle}</strong>
                                    <span className="text-sm opacity-60 text-inherit">{t.patelMenonDesc}</span>
                                </div>
                            </div>

                            <div className="space-y-2 text-inherit opacity-80">
                                <strong className="block text-sm uppercase tracking-widest text-paper-gray/40 font-bold text-inherit">{t.troublemakersTitle}</strong>
                                <ul className="text-sm pl-4 border-l-2 border-paper-orange/30 space-y-2 text-inherit">
                                    <li className="text-inherit">❌ <strong className="text-inherit">{t.junagadh}</strong> <span className="text-inherit opacity-80">{t.junagadhDesc}</span></li>
                                    <li className="text-inherit">❌ <strong className="text-inherit">{t.hyderabad}</strong> <span className="font-bold text-paper-red">{t.operationPolo}</span> <span className="text-inherit opacity-80">{t.hyderabadDesc}</span></li>
                                    <li className="text-inherit">❌ <strong className="text-inherit">{t.kashmir}</strong> <span className="text-inherit opacity-80">{t.kashmirDesc}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* DAWN OF FREEDOM */}
                    <div className="bg-gradient-to-r from-paper-orange/20 via-paper to-paper-green/20 p-8 shadow-xl text-center transform rotate-1 mt-8 pb-12 text-inherit">
                        <Flag className="w-12 h-12 mx-auto mb-4 text-paper-indigo opacity-40" />
                        <h2 className="marker-font text-4xl text-paper-gray mb-2 uppercase tracking-tight text-inherit">{t.august15Header}</h2>
                        <p className="scribble-font text-3xl text-paper-gray opacity-60 font-bold text-inherit">
                            {t.awakeQuote}
                        </p>
                        <p className="type-font text-xs mt-4 uppercase font-bold tracking-widest text-paper-gray/40 text-inherit">{t.firstCabinet}</p>
                    </div>

                </div>

            </div>
        </div>
    );
}
