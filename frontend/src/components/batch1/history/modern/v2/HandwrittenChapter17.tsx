"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Footprints,
    Gavel,
    Scroll,
    Users,
    Map,
    Flame,
    Anchor,
    Feather,
    XCircle,
    Scale,
    AlertTriangle,
    Mic2
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from '@/lib/language-store';
import { ch17Translations } from './translations/ch17';

export default function HandwrittenChapter17() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch17Translations.hi : ch17Translations.en;

    return (
        <div className="min-h-screen bg-paper font-['Cinzel',_serif] text-paper-gray selection:bg-paper-indigo/30 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=La+Belle+Aurore&family=Special+Elite&family=Cormorant+Garamond:wght@400;700&display=swap');
                
                .sand-texture {
                    background-color: var(--paper-bg);
                    background-image: url("https://www.transparenttextures.com/patterns/sandpaper.png");
                }

                .velvet-texture {
                    background-color: var(--neutral-900);
                    background-image: url("https://www.transparenttextures.com/patterns/black-felt.png");
                    color: var(--paper-gray);
                }
                :global(.dark) .velvet-texture {
                    background-color: #000;
                }

                .handwritten-font { font-family: 'La Belle Aurore', cursive; }
                .formal-font { font-family: 'Cinzel', serif; }
                .typewriter-font { font-family: 'Special Elite', monospace; }

                .dandi-card {
                    background: var(--paper-bg);
                    border: 2px dashed var(--paper-indigo);
                    box-shadow: 4px 4px 0px var(--paper-indigo-20);
                }

                .rtc-card {
                    background: var(--neutral-800);
                    border: 2px solid var(--paper-red);
                    box-shadow: 4px 4px 0px var(--paper-red-20);
                }
                :global(.dark) .rtc-card {
                    background: #111;
                }

                .salt-white { color: #FFFFFF; }
                .ocean-blue { color: var(--paper-indigo); }
                .imperial-red { color: var(--paper-red); }
                .dalit-blue { color: var(--paper-indigo); }
            `}</style>

            {/* BACKGROUND SPLIT */}
            <div className="fixed top-0 left-0 w-full h-1/2 sand-texture z-0 pointer-events-none opacity-50"></div>
            <div className="fixed bottom-0 left-0 w-full h-1/2 velvet-texture z-0 pointer-events-none opacity-90"></div>

            {/* HEADER */}
            <header className="max-w-4xl mx-auto mb-12 text-center relative z-10 pt-12 pb-8 text-inherit">
                <div className="bg-paper shadow-xl border-4 border-double border-paper-border rotate-1 transform">
                    <h1 className="formal-font text-4xl md:text-6xl font-bold uppercase tracking-widest mb-2">
                        {t.headerTitle}
                    </h1>
                    <div className="flex justify-center items-center gap-4 text-sm font-bold typewriter-font text-paper-indigo">
                        <span><Footprints className="inline w-4 h-4" /> {t.dandi}</span>
                        <span className="opacity-40">|</span>
                        <span><Users className="inline w-4 h-4" /> {t.roundTable}</span>
                        <span className="opacity-40">|</span>
                        <span><Scale className="inline w-4 h-4" /> {t.poonaPact}</span>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 px-4 pb-12">

                {/* LEFT COLUMN: THE MARCH & RESISTANCE (SAND) */}
                <div className="lg:col-span-6 space-y-8">

                    {/* THE ULTIMATUM */}
                    <div className="dandi-card p-6 rotate-[-1deg] text-inherit">
                        <h3 className="typewriter-font text-xl font-bold mb-3 uppercase flex items-center gap-2">
                            <Scroll className="w-5 h-5 opacity-40" /> {t.ultimatumTitle}
                        </h3>
                        <p className="text-xs italic mb-2 opacity-70">{t.ultimatumSubtitle}</p>

                        <div className="bg-paper-orange/10 p-3 text-xs border-l-4 border-paper-orange/20 text-inherit">
                            <strong>{t.demandsLabel}</strong> <span className="opacity-80">{t.demandsText}</span>
                        </div>
                        <div className="mt-2 text-xs font-bold text-paper-red bg-paper-red/5 p-2 text-center">
                            {t.ultimatumResponse}
                        </div>
                    </div>

                    {/* DANDI MARCH */}
                    <div className="dandi-card p-0 overflow-hidden text-inherit">
                        <div className="bg-paper-indigo text-white p-4 text-center">
                            <h3 className="handwritten-font text-3xl font-bold">{t.saltSatyagrahaTitle}</h3>
                            <p className="text-xs uppercase tracking-widest mt-1 formal-font opacity-80">{t.saltSatyagrahaSubtitle}</p>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-3 text-sm">
                                <li className="flex gap-2">
                                    <Footprints className="w-4 h-4 text-paper-indigo" />
                                    <span><strong>{t.sabarmatiToDandi}</strong><span className="opacity-80">{t.sabarmatiText}</span></span>
                                </li>
                                <li className="flex gap-2">
                                    <Users className="w-4 h-4 text-paper-indigo" />
                                    <span><strong>{t.spreadLabel}</strong><span className="opacity-80">{t.spreadText}</span></span>
                                </li>
                                <li className="flex gap-2 text-xs bg-paper-border/5 p-2 rounded italic opacity-70">
                                    {t.gandhiSympathyQuote}
                                </li>
                            </ul>

                            <div className="mt-4 pt-4 border-t border-dashed border-paper-border/20">
                                <strong className="text-paper-red block mb-2 text-xs uppercase">{t.dharsanaTitle}</strong>
                                <p className="text-xs opacity-80">{t.dharsanaText}</p>
                                <p className="text-[10px] mt-1 opacity-40">{t.webbMillerNote}</p>
                            </div>
                        </div>
                    </div>

                    {/* REGIONAL SPREAD MAP */}
                    <div className="bg-paper-indigo/5 p-4 border border-paper-indigo/20 shadow-lg rounded text-inherit">
                        <div className="flex items-center gap-2 mb-3 border-b border-paper-indigo/20 pb-1">
                            <Map className="w-5 h-5 text-paper-indigo" />
                            <h3 className="formal-font font-bold text-lg text-paper-indigo">{t.mapTitle}</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-xs">
                            <div className="bg-paper p-2 border-l-2 border-paper-red shadow-sm text-inherit">
                                <strong className="block text-paper-red">{t.nwfp}</strong>
                                <span className="block font-bold opacity-90">{t.nwfpLeader}</span>
                                <span className="text-[10px] opacity-50">{t.nwfpDesc}</span>
                            </div>

                            <div className="bg-paper p-2 border-l-2 border-paper-indigo shadow-sm text-inherit">
                                <strong className="block text-paper-indigo">{t.northEast}</strong>
                                <span className="block font-bold opacity-90">{t.northEastLeader}</span>
                                <span className="text-[10px] opacity-50">{t.northEastDesc}</span>
                            </div>

                            <div className="bg-paper p-2 border-l-2 border-paper-green shadow-sm text-inherit">
                                <strong className="block text-paper-green">{t.south}</strong>
                                <span className="text-[10px] block opacity-60">{t.southDesc}</span>
                                <span className="text-[10px] font-bold text-paper-red block mt-1">{t.southMartyr}</span>
                            </div>

                            <div className="bg-paper p-2 border-l-2 border-paper-orange shadow-sm text-inherit">
                                <strong className="block text-paper-orange">{t.formsOfProtest}</strong>
                                <ul className="list-disc ml-3 text-[10px] opacity-60">
                                    <li><strong>{t.forestSatyagraha}</strong> {t.forestText}</li>
                                    <li><strong>{t.noChowkidara}</strong> {t.noChowkidaraText}</li>
                                    <li><strong>{t.cunningham}</strong> {t.cunninghamText}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-2 bg-paper-orange/10 p-2 text-xs border border-paper-orange/20 text-center text-inherit">
                            <strong className="text-paper-orange">{t.womensRole}</strong>
                            <br /><span className="text-[10px] opacity-70">{t.kamaladeviNote}</span>
                        </div>

                        <div className="mt-2 bg-paper-red/5 p-2 text-xs border border-paper-red/20 text-center font-bold text-paper-red">
                            {t.sholapurGovt}
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: DIPLOMACY & PACTS (VELVET) */}
                <div className="lg:col-span-6 space-y-8 text-gray-100">

                    {/* DIPLOMATIC INTERLUDE */}
                    <div className="rtc-card p-6 relative text-inherit">
                        <div className="absolute top-0 right-0 bg-paper-red text-white px-2 py-1 text-[10px] font-bold">1931</div>
                        <h3 className="formal-font text-2xl font-bold mb-4 text-paper-orange">{t.theTruce}</h3>

                        <div className="space-y-4">
                            <div className="bg-black/40 p-3 border border-paper-border/20 rounded">
                                <h4 className="font-bold text-sm text-white mb-1">{t.gandhiIrwinTitle}</h4>
                                <p className="text-xs opacity-70">{t.mediators}</p>
                                <ul className="list-disc ml-4 text-xs opacity-60 mt-1">
                                    <li><strong>{t.govtConcessions}</strong> {t.govtConcessionsText}</li>
                                    <li><strong>{t.congressConcessions}</strong> {t.congressConcessionsText}</li>
                                </ul>
                                <div className="mt-2 text-[10px] bg-paper-red/20 p-1 text-white text-center rounded">
                                    {t.executionNote}
                                </div>
                            </div>

                            <div className="bg-neutral-900 dark:bg-black/40 p-3 border-l-4 border-paper-orange/40">
                                <h4 className="font-bold text-sm text-paper-orange mb-1">{t.karachiSession}</h4>
                                <p className="text-xs opacity-70">{t.karachiLeader}</p>
                                <p className="text-xs mt-1"><strong>{t.karachiResolution}</strong></p>
                                <p className="text-[10px] italic opacity-40 mt-1">{t.blackFlagNote}</p>
                            </div>
                        </div>
                    </div>

                    {/* ROUND TABLE CONFERENCES */}
                    <div className="rtc-card p-6 text-inherit text-inherit">
                        <h3 className="formal-font text-xl font-bold mb-4 text-paper-orange flex items-center gap-2">
                            <Users className="w-5 h-5 opacity-40" /> {t.londonTables}
                        </h3>

                        <div className="grid grid-cols-3 gap-2 text-center text-xs mb-4">
                            <div className="bg-black/40 p-2 rounded opacity-40">
                                <strong className="block opacity-60">{t.rtc1}</strong>
                                {t.rtc1Text}
                            </div>
                            <div className="bg-paper-orange/20 p-2 rounded border border-paper-orange/40">
                                <strong className="block text-paper-orange">{t.rtc2}</strong>
                                {t.rtc2Text}
                            </div>
                            <div className="bg-black/40 p-2 rounded opacity-40">
                                <strong className="block opacity-60">{t.rtc3}</strong>
                                {t.rtc3Text}
                            </div>
                        </div>

                        <div className="bg-paper-red/20 p-3 border border-paper-red/40 text-xs text-center">
                            <strong className="block text-paper-red mb-1">{t.crackdownTitle}</strong>
                            <p className="opacity-80">{t.crackdownText}</p>
                        </div>
                    </div>

                    {/* POONA PACT */}
                    <div className="bg-paper-indigo/10 text-paper-indigo p-6 shadow-2xl border-2 border-paper-indigo/40 text-inherit">
                        <h3 className="formal-font text-2xl font-bold mb-3 flex items-center gap-2">
                            <Scale className="w-6 h-6 opacity-40" /> {t.poonaPactTitle}
                        </h3>

                        <div className="space-y-3 text-xs">
                            <div className="flex justify-between items-center border-b border-paper-indigo/20 pb-2">
                                <span><strong>{t.triggerLabel}</strong> <span className="opacity-80">{t.triggerText}</span></span>
                                <Badge variant="secondary" className="bg-paper-indigo/20 text-paper-indigo border-none">{t.jailLabel}</Badge>
                            </div>

                            <p className="italic bg-paper-indigo/5 p-2 text-center opacity-70">
                                {t.fastNote}
                            </p>

                            <div className="bg-paper text-paper-indigo p-3 rounded font-medium border border-paper-border/20">
                                <strong className="block mb-1 text-center border-b border-paper-border/20 pb-1">{t.theAgreementTitle}</strong>
                                <ul className="list-disc ml-4 space-y-1 opacity-80">
                                    {t.agreementItems.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                <p className="text-[10px] text-center mt-2 opacity-50 font-normal">{t.signedByNote}</p>
                            </div>
                        </div>
                    </div>

                    {/* THE END */}
                    <div className="text-center text-xs opacity-60 font-mono mt-4">
                        <p><strong>{t.endYear}</strong> {t.endText}</p>
                        <p>{t.cspNote}</p>
                    </div>

                </div>

            </div>
        </div>
    );
}
