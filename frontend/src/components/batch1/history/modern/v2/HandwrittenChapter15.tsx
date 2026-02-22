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
        <div className="min-h-screen bg-paper font-['Playfair_Display',_serif] text-paper-gray selection:bg-paper-orange/30 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Black+Ops+One&family=Special+Elite&display=swap');
                
                .council-bg {
                    background-color: var(--paper-bg);
                    background-image: url("https://www.transparenttextures.com/patterns/wood-pattern.png");
                }

                .bomb-bg {
                    background-color: var(--neutral-900);
                    background-image: url("https://www.transparenttextures.com/patterns/dark-brick-wall.png");
                    color: var(--paper-gray);
                }
                :global(.dark) .bomb-bg {
                    background-color: #000;
                }

                .serif-font { font-family: 'Playfair Display', serif; }
                .stencil-font { font-family: 'Black Ops One', cursive; }
                .typewriter-font { font-family: 'Special Elite', monospace; }

                .council-card {
                    background: var(--paper-bg);
                    border: 4px double var(--paper-orange);
                    box-shadow: 4px 4px 0px var(--paper-orange-20);
                }

                .revo-card {
                    background: var(--neutral-800);
                    border: 1px dashed var(--paper-red);
                    box-shadow: 4px 4px 0px var(--paper-red-20);
                }
                :global(.dark) .revo-card {
                    background: #111;
                }

                .danger-text { color: var(--paper-red); }
                .gold-text { color: var(--paper-orange); }
            `}</style>

            {/* HEADER: THE VACUUM */}
            <header className="max-w-5xl mx-auto mb-12 text-center relative z-10 pt-8 pb-8 border-b-2 border-paper-border/20 text-inherit">
                <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-widest mb-4 flex items-center justify-center gap-4">
                    <span className="serif-font text-paper-orange">{t.councilLabel}</span>
                    <span className="text-2xl opacity-40">{t.vs}</span>
                    <span className="stencil-font text-paper-red">{t.bombLabel}</span>
                </h1>
                <p className="typewriter-font text-xl mb-6 opacity-80">{t.subtitle}</p>

                {/* TOGGLE FOR MOBILE/TABLET */}
                <div className="flex justify-center gap-4 md:hidden">
                    <Button
                        onClick={() => setActiveTab('council')}
                        className={`border-2 ${activeTab === 'council' ? 'bg-paper-orange text-white border-paper-orange' : 'bg-paper text-paper-gray border-paper-border/20'}`}
                    >
                        <Vote className="w-4 h-4 mr-2" /> {t.swarajistsBtn}
                    </Button>
                    <Button
                        onClick={() => setActiveTab('bomb')}
                        className={`border-2 ${activeTab === 'bomb' ? 'bg-paper-red text-white border-paper-red' : 'bg-paper text-paper-gray border-paper-border/20'}`}
                    >
                        <Bomb className="w-4 h-4 mr-2" /> {t.revolutionariesBtn}
                    </Button>
                </div>
            </header>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[800px] shadow-2xl overflow-hidden rounded-lg">

                {/* LEFT SIDE: THE PARLIAMENT (SWARAJISTS) */}
                <div className={`council-bg p-8 border-r-4 border-paper-border/20 relative ${activeTab === 'bomb' ? 'hidden md:block opacity-50' : 'block'} text-inherit`}>
                    <div className="absolute top-4 left-4 opacity-10">
                        <Vote className="w-24 h-24" />
                    </div>

                    <h2 className="serif-font text-3xl font-bold text-paper-orange mb-6 uppercase border-b-2 border-paper-orange pb-2 inline-block">
                        {t.swarajistsTitle}
                    </h2>

                    <div className="space-y-6">
                        {/* GAYA SPLIT */}
                        <div className="council-card p-6 text-inherit">
                            <h3 className="serif-font text-xl font-bold mb-2">{t.schismTitle}</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="bg-paper-orange/10 p-2 border border-paper-orange/20">
                                    <strong className="block text-paper-orange uppercase text-xs mb-1">{t.proChangers}</strong>
                                    <ul className="list-disc ml-4 text-xs font-medium opacity-80">
                                        {t.proItems.map((item, i) => (
                                            <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                        ))}
                                        <li>Formed <strong>{t.proParty}</strong>{t.proPartyNote}</li>
                                    </ul>
                                </div>
                                <div className="bg-paper-border/5 p-2 border border-paper-border/20">
                                    <strong className="block text-paper-gray opacity-60 uppercase text-xs mb-1">{t.noChangers}</strong>
                                    <ul className="list-disc ml-4 text-xs opacity-80">
                                        {t.noItems.map((item, i) => (
                                            <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* ACHIEVEMENTS */}
                        <div className="council-card p-6 bg-paper-orange/5 text-inherit">
                            <h3 className="serif-font text-xl font-bold mb-4 flex items-center gap-2">
                                <Gavel className="w-5 h-5 text-paper-orange" />
                                {t.parlTitle}
                            </h3>

                            <div className="space-y-3 text-sm">
                                {t.parlActions.map((action, i) => (
                                    <div key={i} className="flex items-start gap-3 border-b border-dashed border-paper-border/20 pb-2">
                                        <div className="bg-paper-orange text-white text-xs font-bold px-2 py-1 rounded">{action.year}</div>
                                        <div>
                                            <strong className="block opacity-90">{action.title}</strong>
                                            <p className="text-xs opacity-70">{action.text}</p>
                                        </div>
                                    </div>
                                ))}

                                <div className="bg-paper p-2 border border-paper-border/20 text-xs">
                                    <strong>{t.muddiman}</strong><span className="opacity-70">{t.muddimanText}</span>
                                </div>
                            </div>
                        </div>

                        {/* DECLINE */}
                        <div className="opacity-70 p-4 border border-paper-border/40 bg-paper-border/5 italic text-sm text-inherit">
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
                            <Bomb className="w-24 h-24 text-paper-red" />
                        </div>

                        <h2 className="stencil-font text-3xl font-bold text-paper-red mb-6 uppercase border-b-2 border-paper-red/40 pb-2 inline-block tracking-widest">
                            {t.revoTitle}
                        </h2>

                        <div className="space-y-6">

                            {/* PHASE II ORGS */}
                            <div className="revo-card p-6 text-inherit">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="stencil-font text-lg text-paper-red mb-1 opacity-90">{t.hra.title}</h3>
                                        <p className="typewriter-font text-[10px] opacity-50 mb-2">{t.hra.meta}</p>
                                        <ul className="text-xs list-disc ml-4 space-y-1 opacity-80">
                                            {t.hra.items.map((item, i) => (
                                                <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                            ))}
                                            <li><strong>{t.hra.action}</strong> <span className="text-paper-red font-bold">{t.hra.kakori}</span>.</li>
                                            <li><em className="text-[10px]">{t.hra.martyrs}</em></li>
                                        </ul>
                                    </div>
                                    <div className="border-t md:border-t-0 md:border-l border-paper-border/20 pt-4 md:pt-0 md:pl-4">
                                        <h3 className="stencil-font text-lg text-paper-red mb-1 opacity-90">{t.hsra.title}</h3>
                                        <p className="typewriter-font text-[10px] opacity-50 mb-2">{t.hsra.meta}</p>
                                        <ul className="text-xs list-disc ml-4 space-y-1 opacity-80">
                                            {t.hsra.items.map((item, i) => (
                                                <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                            ))}
                                            <li><strong>{t.hsra.openWing}</strong> <span className="text-paper-orange">{t.hsra.naujawan}</span>{t.hsra.naujawanNote}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* ACTIONS & IDEOLOGY */}
                            <div className="revo-card p-6 border-paper-red/40 border-2 text-inherit">
                                <h3 className="typewriter-font text-xl font-bold mb-4 flex items-center gap-2">
                                    <Flame className="w-5 h-5 text-paper-red" /> {t.actionTitle}
                                </h3>

                                <div className="space-y-4">
                                    <div className="bg-black/40 p-3 border border-paper-red/20 rounded opacity-90 text-xs">
                                        <div className="flex justify-between">
                                            <strong className="text-paper-red opacity-80 uppercase">{t.saunders}</strong>
                                            <span className="text-[10px] bg-paper-red px-1 text-white">{t.saundersPlace}</span>
                                        </div>
                                        <p>{t.saundersText}</p>
                                    </div>

                                    <div className="bg-black/40 p-3 border border-paper-red/20 rounded opacity-90 text-xs text-inherit">
                                        <div className="flex justify-between">
                                            <strong className="text-paper-red opacity-80 uppercase">{t.assemblyBomb}</strong>
                                            <span className="text-[10px] bg-paper-red px-1 text-white">{t.assemblyPlace}</span>
                                        </div>
                                        <p>{t.assemblyText}<span className="text-paper-orange font-bold px-1">{t.assemblyBills}</span>.</p>
                                        <p className="italic mt-1 opacity-70">{t.assemblyQuote}</p>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="flex-1 bg-neutral-800 dark:bg-black/40 p-2 border border-paper-border/20 text-[10px] opacity-70 text-inherit">
                                            <strong className="block text-paper-red mb-1">{t.jatinDas}</strong>
                                            {t.jatinText}<span className="text-paper-red font-bold">{t.jatinStrike}</span>{t.jatinEnd}
                                        </div>
                                        <div className="flex-1 bg-neutral-800 dark:bg-black/40 p-2 border border-paper-border/20 text-[10px] opacity-70 text-inherit">
                                            <strong className="block text-paper-red mb-1">{t.philosophy}</strong>
                                            {t.philText}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BENGAL & ENDGAMES */}
                            <div className="grid grid-cols-2 gap-4 text-xs">
                                <div className="revo-card p-3 text-inherit">
                                    <strong className="text-paper-red block mb-1">{t.bengalTitle}</strong>
                                    <ul className="list-disc ml-3 space-y-1 opacity-80">
                                        {t.bengalItems.map((item, i) => (
                                            <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="revo-card p-3 text-inherit">
                                    <strong className="text-paper-red block mb-1">{t.endgamesTitle}</strong>
                                    <ul className="list-disc ml-3 space-y-1 opacity-80">
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
            <div className="max-w-4xl mx-auto mt-8 p-4 bg-paper-border/10 border-t-4 border-paper-red text-center text-xs font-mono relative z-10 text-inherit">
                <div className="flex justify-center items-center gap-8 flex-wrap">
                    <div>
                        <strong className="text-paper-red block">{t.leftWing}</strong>
                        <span className="opacity-70">{t.leftWingText}</span>
                    </div>
                    <div>
                        <strong className="text-paper-red block">{t.meerut}</strong>
                        <span className="opacity-70">{t.meerutText}</span>
                    </div>
                    <div>
                        <strong className="text-paper-gray block">{t.gopinath}</strong>
                        <span className="opacity-70">{t.gopinathText}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
