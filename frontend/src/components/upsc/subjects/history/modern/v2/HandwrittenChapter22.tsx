"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Scroll,
    Sword,
    Skull,
    Users,
    Gavel,
    AlertTriangle,
    FileText,
    Map as MapIcon,
    Flame,
    Briefcase
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from '@/lib/language-store';
import { ch22Translations } from './translations/ch22';

export default function HandwrittenChapter22() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch22Translations.hi : ch22Translations.en;

    return (
        <div className="min-h-screen bg-paper font-sans text-paper-gray selection:bg-paper-red/30 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Rock+Salt&family=Special+Elite&display=swap');
                
                .parchment-texture {
                    background-color: var(--paper-bg);
                    background-image: url("https://www.transparenttextures.com/patterns/aged-paper.png");
                }

                .blood-texture {
                    background-image: radial-gradient(circle, var(--paper-red) 10%, transparent 10%), radial-gradient(circle, var(--paper-red) 10%, transparent 10%);
                    background-size: 50px 50px;
                    background-position: 0 0, 25px 25px;
                    opacity: 0.05;
                }

                .legal-font { font-family: 'Playfair Display', serif; }
                .riot-font { font-family: 'Rock Salt', cursive; }
                .handwritten-font { font-family: 'Special Elite', monospace; }

                .ink-stain {
                    mask-image: url("https://www.transparenttextures.com/patterns/black-ink.png");
                }
            `}</style>

            {/* BACKGROUND */}
            <div className="fixed inset-0 parchment-texture pointer-events-none z-0"></div>
            <div className="fixed bottom-0 w-full h-1/3 bg-gradient-to-t from-red-900/20 to-transparent pointer-events-none z-0"></div>

            {/* HEADER */}
            <header className="max-w-4xl mx-auto pt-12 pb-8 text-center relative z-10 text-inherit">
                <div className="border-y-4 border-double border-paper-border/80 py-6 bg-paper/50 backdrop-blur-sm text-inherit">
                    <div className="flex justify-center items-center gap-4 mb-2 opacity-80 text-inherit">
                        <Scroll className="w-8 h-8 text-paper-gray" />
                        <span className="legal-font text-xl tracking-widest uppercase">{t.headerYear}</span>
                        <Sword className="w-8 h-8 text-paper-red" />
                    </div>
                    <h1 className="legal-font text-5xl md:text-7xl font-bold uppercase tracking-widest text-paper-gray mb-2">
                        {t.headerTitle}
                    </h1>
                    <div className="flex justify-center gap-4 text-xs font-bold uppercase tracking-widest text-paper-red">
                        <span>{t.cabinetMission}</span>
                        <span>•</span>
                        <span>{t.directAction}</span>
                        <span>•</span>
                        <span>{t.interimGovt}</span>
                    </div>
                    <p className="text-xs mt-2 italic font-serif opacity-70">{t.jinnahQuote}</p>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 px-6 pb-20">

                {/* LEFT COLUMN: THE PLAN & THE POLITICS */}
                <div className="space-y-10">

                    {/* CONTEXT & ELECTIONS */}
                    <div className="bg-paper-border/10 p-4 border border-paper-border/40 rotate-1 shadow-md text-inherit">
                        <h3 className="handwritten-font text-lg font-bold mb-2 flex items-center gap-2 text-inherit">
                            <AlertTriangle className="w-4 h-4 text-paper-orange" /> {t.contextTitle}
                        </h3>
                        <ul className="text-xs space-y-2 font-serif text-inherit opacity-80">
                            <li>{t.elections1946}</li>
                            <li>{t.riafStrikes}</li>
                            <li>{t.congressPres}</li>
                        </ul>
                    </div>

                    {/* CABINET MISSION */}
                    <div className="bg-paper-orange/5 p-6 border-4 border-double border-paper-border shadow-xl relative text-inherit">
                        <Badge className="absolute -top-3 right-4 bg-paper-gray text-paper-bg border-none">{t.cabinetMissionDate}</Badge>
                        <h3 className="legal-font text-3xl font-bold mb-4 border-b border-paper-border pb-2 text-inherit">
                            {t.cabinetMissionTitle}
                        </h3>

                        <div className="space-y-4 text-sm font-serif text-inherit">
                            <div className="flex justify-between text-xs italic opacity-60 text-inherit">
                                <span>{t.pethickLawrence}</span>
                                <span>{t.staffordCripps}</span>
                                <span>{t.avAlexander}</span>
                            </div>

                            <div className="bg-paper border border-paper-border p-3 text-inherit">
                                <strong className="block text-center uppercase text-xs mb-2 opacity-60">{t.planTitle}</strong>
                                <ul className="list-disc ml-4 space-y-1 opacity-80 text-inherit">
                                    <li>{t.unionOfIndia}</li>
                                    <li>{t.residuaryPowers}</li>
                                    <li className="text-inherit"><strong>Pakistan:</strong> <span className="text-paper-red font-bold uppercase">{t.pakistanRejected}</span></li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-3 gap-2 text-center text-[10px] text-inherit">
                                <div className="bg-paper-green/10 p-2 border border-paper-green/20 text-inherit">
                                    <strong className="text-paper-green">{t.groupA}</strong><br />{t.groupAHindu}<br /><span className="opacity-60">{t.groupADetails}</span>
                                </div>
                                <div className="bg-paper-green/10 p-2 border border-paper-green/20 text-inherit">
                                    <strong className="text-paper-green">{t.groupB}</strong><br />{t.groupBMuslim}<br /><span className="opacity-60">{t.groupBDetails}</span>
                                </div>
                                <div className="bg-paper-green/10 p-2 border border-paper-green/20 text-inherit">
                                    <strong className="text-paper-green">{t.groupC}</strong><br />{t.groupCMuslim}<br /><span className="opacity-60">{t.groupCDetails}</span>
                                </div>
                            </div>

                            <div className="text-xs bg-paper-red/10 p-2 text-paper-red border-l-2 border-paper-red text-inherit">
                                <strong>{t.resistanceTitle}</strong> <span className="opacity-80">{t.resistanceDesc}</span>
                            </div>
                        </div>
                    </div>

                    {/* INTERIM GOVERNMENT */}
                    <div className="bg-paper-border/10 p-6 border-t-4 border-paper-border shadow-lg text-inherit">
                        <h3 className="legal-font text-2xl font-bold mb-4 flex items-center gap-2 text-inherit">
                            <Briefcase className="w-5 h-5 opacity-40" /> {t.interimGovtTitle}
                        </h3>

                        <div className="space-y-4 text-sm text-inherit opacity-80">
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div><strong>{t.pmExt}</strong></div>
                                <div><strong>{t.homeInfo}</strong></div>
                                <div><strong>{t.defense}</strong></div>
                                <div><strong>{t.ind}</strong></div>
                                <div><strong>{t.edu}</strong></div>
                                <div><strong>{t.labor}</strong></div>
                            </div>

                            <div className="bg-paper p-3 border border-paper-border/40 relative overflow-hidden text-inherit">
                                <div className="absolute top-0 right-0 w-4 h-4 bg-paper-green rounded-bl-xl opacity-60"></div>
                                <strong className="block text-paper-green text-xs uppercase mb-1 font-bold">{t.leagueEntryTitle}</strong>
                                <ul className="text-xs space-y-1 opacity-80 text-inherit">
                                    <li>{t.liaquatAli} <span className="text-[10px] opacity-60">({t.finance})</span></li>
                                    <li>{t.jogendraNath} <span className="text-[10px] opacity-60">({t.law})</span></li>
                                    <li>{t.teaPartyBoycott}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: THE BLOOD & THE END */}
                <div className="space-y-10">

                    {/* DIRECT ACTION DAY */}
                    <div className="bg-paper p-6 border-2 border-paper-red shadow-xl relative rotate-1 text-inherit">
                        <div className="absolute top-0 left-0 w-full h-full blood-texture pointer-events-none"></div>
                        <h3 className="riot-font text-3xl text-paper-red mb-4 transform -rotate-2">
                            {t.directActionTitle}
                        </h3>

                        <div className="space-y-4 text-sm font-sans z-10 relative text-inherit">
                            <div className="bg-neutral-900 dark:bg-black text-white p-2 text-center text-xs uppercase font-bold tracking-widest">
                                {t.directActionDate}
                            </div>

                            <div className="border-l-4 border-paper-red pl-3 text-inherit">
                                <strong className="block text-paper-red font-bold">{t.theHorrorTitle}</strong>
                                <span className="opacity-80">{t.calcuttaKillings}</span>
                            </div>

                            <div className="flex items-center gap-3 bg-paper-red/10 p-2 text-inherit">
                                <Users className="w-8 h-8 text-paper-gray/40" />
                                <div className="text-inherit">
                                    <strong className="block text-paper-gray text-xs">{t.spreadTitle}</strong>
                                    <span className="opacity-80">{t.spreadDetails}</span>
                                    <br /><span className="text-paper-red text-xs font-bold">{t.biharPoliceStrike}</span>
                                </div>
                            </div>

                            <div className="bg-paper/80 p-2 border border-paper-border/20 italic text-xs text-inherit">
                                <span className="opacity-70">{t.gandhiWalking}</span>
                            </div>
                        </div>
                    </div>

                    {/* CONSTITUENT ASSEMBLY */}
                    <div className="bg-paper-border/10 p-6 border border-paper-border relative text-inherit">
                        <h3 className="legal-font text-2xl font-bold mb-3 text-inherit">{t.constituentAssemblyTitle}</h3>

                        <div className="space-y-3 text-xs font-serif text-inherit opacity-80">
                            <div className="flex justify-between border-b border-paper-border/20 pb-2 text-inherit">
                                <span className="text-inherit"><strong>{t.firstMeeting}</strong></span>
                                <span className="text-paper-red font-bold text-inherit">{t.boycottedByLeague}</span>
                            </div>
                            <div className="bg-paper-indigo/10 p-2 border border-paper-indigo/20 text-inherit">
                                <strong className="block text-paper-indigo mb-1">{t.objectivesResolutionTitle}</strong>
                                <span className="text-inherit">{t.objectivesResolutionDesc}</span>
                                <br /><em className="text-inherit">{t.sovereignRepublic}</em>
                            </div>
                            <div className="text-inherit opacity-60">
                                {t.womenLeaders}
                            </div>
                        </div>
                    </div>

                    {/* BRITISH PANIC */}
                    <div className="bg-neutral-800 p-6 shadow-xl text-white">
                        <h3 className="stencil-font text-xl mb-3 text-paper-red">{t.operationMadhouseTitle}</h3>
                        <p className="text-xs mb-3 opacity-60">
                            {t.wavellPlan}
                        </p>

                        <div className="bg-card/10 p-3 border-t border-white/20">
                            <h4 className="text-sm font-bold text-white mb-1 uppercase opacity-80">{t.attleeStatementTitle}</h4>
                            <div className="text-xs font-mono opacity-80">
                                {t.deadlineLabel}
                                <br />{t.mountbattenNote}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
