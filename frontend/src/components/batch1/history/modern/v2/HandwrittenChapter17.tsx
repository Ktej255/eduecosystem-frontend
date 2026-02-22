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
        <div className="min-h-screen bg-[#fdf5e6] font-['Cinzel',_serif] text-gray-900 selection:bg-blue-200 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=La+Belle+Aurore&family=Special+Elite&family=Cormorant+Garamond:wght@400;700&display=swap');
                
                .sand-texture {
                    background-color: #fdf5e6;
                    background-image: url("https://www.transparenttextures.com/patterns/sandpaper.png");
                }

                .velvet-texture {
                    background-color: #2b0a0d;
                    background-image: url("https://www.transparenttextures.com/patterns/black-felt.png");
                    color: #ecf0f1;
                }

                .handwritten-font { font-family: 'La Belle Aurore', cursive; }
                .formal-font { font-family: 'Cinzel', serif; }
                .typewriter-font { font-family: 'Special Elite', monospace; }

                .dandi-card {
                    background: #fff;
                    border: 2px dashed #006994;
                    box-shadow: 4px 4px 0px #87CEEB;
                }

                .rtc-card {
                    background: #3e1215;
                    border: 2px solid #C41E3A;
                    box-shadow: 4px 4px 0px #5c1b1f;
                }

                .salt-white { color: #FFFFFF; }
                .ocean-blue { color: #006994; }
                .imperial-red { color: #C41E3A; }
                .dalit-blue { color: #007FFF; }
            `}</style>

            {/* BACKGROUND SPLIT */}
            <div className="fixed top-0 left-0 w-full h-1/2 sand-texture z-0 pointer-events-none opacity-50"></div>
            <div className="fixed bottom-0 left-0 w-full h-1/2 velvet-texture z-0 pointer-events-none opacity-90"></div>

            {/* HEADER */}
            <header className="max-w-4xl mx-auto mb-12 text-center relative z-10 pt-12 pb-8">
                <div className="bg-white/90 p-6 shadow-xl border-4 border-double border-gray-800 rotate-1 transform">
                    <h1 className="formal-font text-4xl md:text-6xl font-bold uppercase tracking-widest mb-2 text-gray-900">
                        {t.headerTitle}
                    </h1>
                    <div className="flex justify-center items-center gap-4 text-sm font-bold typewriter-font text-[#006994]">
                        <span><Footprints className="inline w-4 h-4" /> {t.dandi}</span>
                        <span>|</span>
                        <span><Users className="inline w-4 h-4" /> {t.roundTable}</span>
                        <span>|</span>
                        <span><Scale className="inline w-4 h-4" /> {t.poonaPact}</span>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 px-4 pb-12">

                {/* LEFT COLUMN: THE MARCH & RESISTANCE (SAND) */}
                <div className="lg:col-span-6 space-y-8">

                    {/* THE ULTIMATUM */}
                    <div className="dandi-card p-6 rotate-[-1deg]">
                        <h3 className="typewriter-font text-xl font-bold mb-3 uppercase flex items-center gap-2">
                            <Scroll className="w-5 h-5" /> {t.ultimatumTitle}
                        </h3>
                        <p className="text-xs italic mb-2">{t.ultimatumSubtitle}</p>

                        <div className="bg-yellow-50 p-3 text-xs border-l-4 border-yellow-500">
                            <strong>{t.demandsLabel}</strong> {t.demandsText}
                        </div>
                        <div className="mt-2 text-xs font-bold text-red-700 bg-red-50 p-2 text-center">
                            {t.ultimatumResponse}
                        </div>
                    </div>

                    {/* DANDI MARCH */}
                    <div className="dandi-card p-0 overflow-hidden">
                        <div className="bg-[#006994] text-white p-4 text-center">
                            <h3 className="handwritten-font text-3xl font-bold">{t.saltSatyagrahaTitle}</h3>
                            <p className="text-xs uppercase tracking-widest mt-1 formal-font">{t.saltSatyagrahaSubtitle}</p>
                        </div>
                        <div className="p-6">
                            <ul className="space-y-3 text-sm">
                                <li className="flex gap-2">
                                    <Footprints className="w-4 h-4 text-[#006994]" />
                                    <span><strong>{t.sabarmatiToDandi}</strong>{t.sabarmatiText}</span>
                                </li>
                                <li className="flex gap-2">
                                    <Users className="w-4 h-4 text-[#006994]" />
                                    <span><strong>{t.spreadLabel}</strong>{t.spreadText}</span>
                                </li>
                                <li className="flex gap-2 text-xs bg-gray-100 p-2 rounded italic">
                                    {t.gandhiSympathyQuote}
                                </li>
                            </ul>

                            <div className="mt-4 pt-4 border-t border-dashed border-gray-300">
                                <strong className="text-red-800 block mb-2 text-xs uppercase">{t.dharsanaTitle}</strong>
                                <p className="text-xs text-gray-700">{t.dharsanaText}</p>
                                <p className="text-[10px] mt-1 text-gray-500">{t.webbMillerNote}</p>
                            </div>
                        </div>
                    </div>

                    {/* REGIONAL SPREAD MAP */}
                    <div className="bg-[#f0f9ff] p-4 border border-blue-200 shadow-lg rounded">
                        <div className="flex items-center gap-2 mb-3 border-b border-blue-200 pb-1">
                            <Map className="w-5 h-5 text-blue-600" />
                            <h3 className="formal-font font-bold text-lg text-blue-900">{t.mapTitle}</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-xs">
                            <div className="bg-white p-2 border-l-2 border-red-500 shadow-sm">
                                <strong className="block text-red-700">{t.nwfp}</strong>
                                <span className="block font-bold">{t.nwfpLeader}</span>
                                <span className="text-[10px] text-gray-500">{t.nwfpDesc}</span>
                            </div>

                            <div className="bg-white p-2 border-l-2 border-purple-500 shadow-sm">
                                <strong className="block text-purple-700">{t.northEast}</strong>
                                <span className="block font-bold">{t.northEastLeader}</span>
                                <span className="text-[10px] text-gray-500">{t.northEastDesc}</span>
                            </div>

                            <div className="bg-white p-2 border-l-2 border-green-500 shadow-sm">
                                <strong className="block text-green-700">{t.south}</strong>
                                <span className="text-[10px] block">{t.southDesc}</span>
                                <span className="text-[10px] font-bold text-red-600 block mt-1">{t.southMartyr}</span>
                            </div>

                            <div className="bg-white p-2 border-l-2 border-yellow-500 shadow-sm">
                                <strong className="block text-yellow-700">{t.formsOfProtest}</strong>
                                <ul className="list-disc ml-3 text-[10px] text-gray-600">
                                    <li><strong>{t.forestSatyagraha}</strong> {t.forestText}</li>
                                    <li><strong>{t.noChowkidara}</strong> {t.noChowkidaraText}</li>
                                    <li><strong>{t.cunningham}</strong> {t.cunninghamText}</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-2 bg-pink-50 p-2 text-xs border border-pink-200 text-center">
                            <strong className="text-pink-700">{t.womensRole}</strong>
                            <br /><span className="text-[10px]">{t.kamaladeviNote}</span>
                        </div>

                        <div className="mt-2 bg-red-50 p-2 text-xs border border-red-200 text-center font-bold">
                            {t.sholapurGovt}
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: DIPLOMACY & PACTS (VELVET) */}
                <div className="lg:col-span-6 space-y-8 text-gray-100">

                    {/* DIPLOMATIC INTERLUDE */}
                    <div className="rtc-card p-6 relative">
                        <div className="absolute top-0 right-0 bg-[#C41E3A] text-white px-2 py-1 text-[10px] font-bold">1931</div>
                        <h3 className="formal-font text-2xl font-bold mb-4 text-[#DAA520]">{t.theTruce}</h3>

                        <div className="space-y-4">
                            <div className="bg-black/30 p-3 border border-gray-600 rounded">
                                <h4 className="font-bold text-sm text-white mb-1">{t.gandhiIrwinTitle}</h4>
                                <p className="text-xs text-gray-300">{t.mediators}</p>
                                <ul className="list-disc ml-4 text-xs text-gray-400 mt-1">
                                    <li><strong>{t.govtConcessions}</strong> {t.govtConcessionsText}</li>
                                    <li><strong>{t.congressConcessions}</strong> {t.congressConcessionsText}</li>
                                </ul>
                                <div className="mt-2 text-[10px] bg-red-900/50 p-1 text-red-200 text-center">
                                    {t.executionNote}
                                </div>
                            </div>

                            <div className="bg-[#2a2a2a] p-3 border-l-4 border-yellow-500">
                                <h4 className="font-bold text-sm text-yellow-500 mb-1">{t.karachiSession}</h4>
                                <p className="text-xs text-gray-300">{t.karachiLeader}</p>
                                <p className="text-xs mt-1"><strong>{t.karachiResolution}</strong></p>
                                <p className="text-[10px] italic text-gray-500 mt-1">{t.blackFlagNote}</p>
                            </div>
                        </div>
                    </div>

                    {/* ROUND TABLE CONFERENCES */}
                    <div className="rtc-card p-6">
                        <h3 className="formal-font text-xl font-bold mb-4 text-[#DAA520] flex items-center gap-2">
                            <Users className="w-5 h-5" /> {t.londonTables}
                        </h3>

                        <div className="grid grid-cols-3 gap-2 text-center text-xs mb-4">
                            <div className="bg-black/40 p-2 rounded opacity-50">
                                <strong className="block text-gray-400">{t.rtc1}</strong>
                                {t.rtc1Text}
                            </div>
                            <div className="bg-[#DAA520]/20 p-2 rounded border border-[#DAA520]">
                                <strong className="block text-[#DAA520]">{t.rtc2}</strong>
                                {t.rtc2Text}
                            </div>
                            <div className="bg-black/40 p-2 rounded opacity-50">
                                <strong className="block text-gray-400">{t.rtc3}</strong>
                                {t.rtc3Text}
                            </div>
                        </div>

                        <div className="bg-red-900/40 p-3 border border-red-800 text-xs text-center">
                            <strong className="block text-red-300 mb-1">{t.crackdownTitle}</strong>
                            <p>{t.crackdownText}</p>
                        </div>
                    </div>

                    {/* POONA PACT */}
                    <div className="bg-[#1e3a8a] text-blue-100 p-6 shadow-2xl border-2 border-blue-500">
                        <h3 className="formal-font text-2xl font-bold mb-3 flex items-center gap-2">
                            <Scale className="w-6 h-6" /> {t.poonaPactTitle}
                        </h3>

                        <div className="space-y-3 text-xs">
                            <div className="flex justify-between items-center border-b border-blue-400 pb-2">
                                <span><strong>{t.triggerLabel}</strong> {t.triggerText}</span>
                                <Badge variant="secondary" className="bg-blue-200 text-blue-900">{t.jailLabel}</Badge>
                            </div>

                            <p className="italic bg-blue-900/50 p-2 text-center">
                                {t.fastNote}
                            </p>

                            <div className="bg-white text-blue-900 p-3 rounded font-medium">
                                <strong className="block mb-1 text-center border-b border-blue-200 pb-1">{t.theAgreementTitle}</strong>
                                <ul className="list-disc ml-4 space-y-1">
                                    {t.agreementItems.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                                <p className="text-[10px] text-center mt-2 opacity-70">{t.signedByNote}</p>
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
