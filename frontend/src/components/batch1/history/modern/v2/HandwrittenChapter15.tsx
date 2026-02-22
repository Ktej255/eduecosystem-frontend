"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Vote,
    Bomb,
    Train,
    Scale,
    Skull,
    BookOpen,
    Gavel,
    Users,
    PenTool,
    Flame,
    SplitSquareHorizontal,
    XCircle
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from '@/lib/language-store';
import { ch15Translations } from './translations/ch15';

export default function HandwrittenChapter15() {
    const [activeTab, setActiveTab] = useState<'council' | 'bomb'>('council');
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch15Translations.hi : ch15Translations.en;

    return (
        <div className="min-h-screen bg-[#f8f8ff] font-['Playfair_Display',_serif] text-gray-900 selection:bg-yellow-200 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Black+Ops+One&family=Special+Elite&display=swap');
                
                .council-bg {
                    background-color: #fcfbf7;
                    background-image: url("https://www.transparenttextures.com/patterns/wood-pattern.png");
                }

                .bomb-bg {
                    background-color: #1a1a1a;
                    background-image: url("https://www.transparenttextures.com/patterns/dark-brick-wall.png");
                    color: #e0e0e0;
                }

                .serif-font { font-family: 'Playfair Display', serif; }
                .stencil-font { font-family: 'Black Ops One', cursive; }
                .typewriter-font { font-family: 'Special Elite', monospace; }

                .council-card {
                    background: #fff;
                    border: 4px double #DAA520;
                    box-shadow: 4px 4px 0px #DAA520;
                }

                .revo-card {
                    background: #2a2a2a;
                    border: 1px dashed #8B0000;
                    box-shadow: 4px 4px 0px #8B0000;
                }

                .danger-text { color: #8B0000; }
                .gold-text { color: #DAA520; }
            `}</style>

            {/* HEADER: THE VACUUM */}
            <header className="max-w-5xl mx-auto mb-12 text-center relative z-10 pt-8 pb-8 border-b-2 border-gray-400">
                <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest mb-4 flex items-center justify-center gap-4">
                    <span className="serif-font text-[#DAA520]">{t.councilLabel}</span>
                    <span className="text-2xl text-gray-400">{t.vs}</span>
                    <span className="stencil-font text-[#8B0000]">{t.bombLabel}</span>
                </h1>
                <p className="typewriter-font text-xl mb-6">{t.subtitle}</p>

                {/* TOGGLE FOR MOBILE/TABLET */}
                <div className="flex justify-center gap-4 md:hidden">
                    <Button
                        onClick={() => setActiveTab('council')}
                        className={`border-2 ${activeTab === 'council' ? 'bg-[#DAA520] text-white border-[#DAA520]' : 'bg-white text-gray-800 border-gray-300'}`}
                    >
                        <Vote className="w-4 h-4 mr-2" /> {t.swarajistsBtn}
                    </Button>
                    <Button
                        onClick={() => setActiveTab('bomb')}
                        className={`border-2 ${activeTab === 'bomb' ? 'bg-[#8B0000] text-white border-[#8B0000]' : 'bg-white text-gray-800 border-gray-300'}`}
                    >
                        <Bomb className="w-4 h-4 mr-2" /> {t.revolutionariesBtn}
                    </Button>
                </div>
            </header>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[800px] shadow-2xl overflow-hidden rounded-lg">

                {/* LEFT SIDE: THE PARLIAMENT (SWARAJISTS) */}
                <div className={`council-bg p-8 border-r-4 border-gray-800 relative ${activeTab === 'bomb' ? 'hidden md:block opacity-50' : 'block'}`}>
                    <div className="absolute top-4 left-4 opacity-10">
                        <Vote className="w-24 h-24" />
                    </div>

                    <h2 className="serif-font text-3xl font-bold text-[#b8860b] mb-6 uppercase border-b-2 border-[#DAA520] pb-2 inline-block">
                        {t.swarajistsTitle}
                    </h2>

                    <div className="space-y-6">
                        {/* GAYA SPLIT */}
                        <div className="council-card p-6">
                            <h3 className="serif-font text-xl font-bold mb-2">{t.schismTitle}</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="bg-yellow-50 p-2 border border-yellow-200">
                                    <strong className="block text-[#b8860b] uppercase text-xs mb-1">{t.proChangers}</strong>
                                    <ul className="list-disc ml-4 text-xs font-medium">
                                        {t.proItems.map((item, i) => (
                                            <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                        ))}
                                        <li>Formed <strong>{t.proParty}</strong>{t.proPartyNote}</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-2 border border-gray-200">
                                    <strong className="block text-gray-600 uppercase text-xs mb-1">{t.noChangers}</strong>
                                    <ul className="list-disc ml-4 text-xs">
                                        {t.noItems.map((item, i) => (
                                            <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* ACHIEVEMENTS */}
                        <div className="council-card p-6 bg-[#fffde7]">
                            <h3 className="serif-font text-xl font-bold mb-4 flex items-center gap-2">
                                <Gavel className="w-5 h-5 text-[#DAA520]" />
                                {t.parlTitle}
                            </h3>

                            <div className="space-y-3 text-sm">
                                {t.parlActions.map((action, i) => (
                                    <div key={i} className="flex items-start gap-3 border-b border-dashed border-gray-300 pb-2">
                                        <div className="bg-[#DAA520] text-white text-xs font-bold px-2 py-1 rounded">{action.year}</div>
                                        <div>
                                            <strong className="block text-gray-800">{action.title}</strong>
                                            <p className="text-xs text-gray-600">{action.text}</p>
                                        </div>
                                    </div>
                                ))}

                                <div className="bg-white p-2 border border-gray-200 text-xs">
                                    <strong>{t.muddiman}</strong>{t.muddimanText}
                                </div>
                            </div>
                        </div>

                        {/* DECLINE */}
                        <div className="opacity-70 p-4 border border-gray-400 bg-gray-100 italic text-sm">
                            <strong>{t.declineText}</strong>{t.declineBody}<em>{t.responsivists}</em>{t.responsivistsNote}<em>{t.nonResponsivists}</em>{t.nonResponsivistsNote}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: THE BOMB FACTORY (REVOLUTIONARIES) */}
                <div className={`bomb-bg p-8 relative ${activeTab === 'council' ? 'hidden md:block opacity-50' : 'block'}`}>
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/80 pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="absolute top-4 right-4 opacity-20">
                            <Bomb className="w-24 h-24 text-red-600" />
                        </div>

                        <h2 className="stencil-font text-3xl font-bold text-red-600 mb-6 uppercase border-b-2 border-red-800 pb-2 inline-block tracking-widest">
                            {t.revoTitle}
                        </h2>

                        <div className="space-y-6">

                            {/* PHASE II ORGS */}
                            <div className="revo-card p-6 text-gray-200">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="stencil-font text-lg text-red-500 mb-1">{t.hra.title}</h3>
                                        <p className="typewriter-font text-[10px] text-gray-400 mb-2">{t.hra.meta}</p>
                                        <ul className="text-xs list-disc ml-4 space-y-1 text-gray-300">
                                            {t.hra.items.map((item, i) => (
                                                <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                            ))}
                                            <li><strong>{t.hra.action}</strong> <span className="text-red-400 font-bold">{t.hra.kakori}</span>.</li>
                                            <li><em className="text-[10px]">{t.hra.martyrs}</em></li>
                                        </ul>
                                    </div>
                                    <div className="border-t md:border-t-0 md:border-l border-gray-700 pt-4 md:pt-0 md:pl-4">
                                        <h3 className="stencil-font text-lg text-red-500 mb-1">{t.hsra.title}</h3>
                                        <p className="typewriter-font text-[10px] text-gray-400 mb-2">{t.hsra.meta}</p>
                                        <ul className="text-xs list-disc ml-4 space-y-1 text-gray-300">
                                            {t.hsra.items.map((item, i) => (
                                                <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                            ))}
                                            <li><strong>{t.hsra.openWing}</strong> <span className="text-yellow-500">{t.hsra.naujawan}</span>{t.hsra.naujawanNote}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* ACTIONS & IDEOLOGY */}
                            <div className="revo-card p-6 border-red-900 border-2">
                                <h3 className="typewriter-font text-xl font-bold mb-4 text-white flex items-center gap-2">
                                    <Flame className="w-5 h-5 text-red-600" /> {t.actionTitle}
                                </h3>

                                <div className="space-y-4">
                                    <div className="bg-black/50 p-3 border border-red-900/50 rounded text-gray-300 text-xs">
                                        <div className="flex justify-between">
                                            <strong className="text-red-400 uppercase">{t.saunders}</strong>
                                            <span className="text-[10px] bg-red-900 px-1">{t.saundersPlace}</span>
                                        </div>
                                        <p>{t.saundersText}</p>
                                    </div>

                                    <div className="bg-black/50 p-3 border border-red-900/50 rounded text-gray-300 text-xs">
                                        <div className="flex justify-between">
                                            <strong className="text-red-400 uppercase">{t.assemblyBomb}</strong>
                                            <span className="text-[10px] bg-red-900 px-1">{t.assemblyPlace}</span>
                                        </div>
                                        <p>{t.assemblyText}<span className="text-yellow-500">{t.assemblyBills}</span>.</p>
                                        <p className="italic mt-1">{t.assemblyQuote}</p>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-1 bg-gray-800 p-2 border border-gray-600 text-[10px] text-gray-400">
                                            <strong className="block text-white mb-1">{t.jatinDas}</strong>
                                            {t.jatinText}<span className="text-red-500 font-bold">{t.jatinStrike}</span>{t.jatinEnd}
                                        </div>
                                        <div className="flex-1 bg-gray-800 p-2 border border-gray-600 text-[10px] text-gray-400">
                                            <strong className="block text-white mb-1">{t.philosophy}</strong>
                                            {t.philText}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BENGAL & ENDGAMES */}
                            <div className="grid grid-cols-2 gap-4 text-xs">
                                <div className="revo-card p-3 text-gray-300">
                                    <strong className="text-red-500 block mb-1">{t.bengalTitle}</strong>
                                    <ul className="list-disc ml-3 space-y-1">
                                        {t.bengalItems.map((item, i) => (
                                            <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="revo-card p-3 text-gray-300">
                                    <strong className="text-red-500 block mb-1">{t.endgamesTitle}</strong>
                                    <ul className="list-disc ml-3 space-y-1">
                                        {t.endgameItems.map((item, i) => (
                                            <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            {/* FOOTER: LEFT WING & CONTEXT */}
            <div className="max-w-4xl mx-auto mt-8 p-4 bg-gray-200 border-t-4 border-red-500 text-center text-xs font-mono relative z-10">
                <div className="flex justify-center items-center gap-8 flex-wrap">
                    <div>
                        <strong className="text-red-800 block">{t.leftWing}</strong>
                        {t.leftWingText}
                    </div>
                    <div>
                        <strong className="text-red-800 block">{t.meerut}</strong>
                        {t.meerutText}
                    </div>
                    <div>
                        <strong className="text-gray-800 block">{t.gopinath}</strong>
                        {t.gopinathText}
                    </div>
                </div>
            </div>
        </div>
    );
}
