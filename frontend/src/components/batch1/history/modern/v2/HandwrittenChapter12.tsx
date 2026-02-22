"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Newspaper,
    Flag,
    Megaphone,
    Scale,
    Users,
    Globe,
    Handshake,
    Scroll,
    PenTool,
    AlertTriangle,
    BadgeCheck
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from '@/lib/language-store';
import { ch12Translations } from './translations/ch12';

export default function HandwrittenChapter12() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch12Translations.hi : ch12Translations.en;

    return (
        <div className="min-h-screen bg-paper p-4 md:p-8 font-['Lora',_serif] text-paper-gray selection:bg-paper-green/30 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&family=League+Spartan:wght@400;700&family=Lora:ital,wght@0,400;0,700;1,400&display=swap');
                
                .newsprint-bg {
                    background-color: var(--paper-bg);
                    background-image: url("https://www.transparenttextures.com/patterns/newspaper.png");
                    box-shadow: inset 0 0 40px rgba(0,0,0,0.05);
                }

                .pamphlet-card {
                    background-color: var(--paper-bg);
                    border: 1px solid var(--paper-border);
                    box-shadow: 4px 4px 0px var(--paper-border);
                    transition: transform 0.2s;
                }
                .pamphlet-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 6px 6px 0px var(--paper-border);
                }

                .headline-font {
                    font-family: 'Oswald', sans-serif;
                }

                .spartan-font {
                    font-family: 'League Spartan', sans-serif;
                }

                .flag-stripe-green {
                    background: repeating-linear-gradient(45deg, #50C878, #50C878 10px, #45b069 10px, #45b069 20px);
                }
                .flag-stripe-saffron {
                    background: repeating-linear-gradient(45deg, #FF9933, #FF9933 10px, #e68a2e 10px, #e68a2e 20px);
                }

                .unity-gradient {
                    background: linear-gradient(90deg, #50C878 50%, #FF9933 50%);
                }
            `}</style>

            {/* BACKGROUND TEXTURE OVERLAY */}
            <div className="fixed inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/newspaper.png')] z-0"></div>

            {/* HEADER: NEW INDIA DAILY */}
            <header className="max-w-4xl mx-auto mb-16 text-center relative z-10 border-b-4 border-double border-paper-border pb-6 pt-4 text-inherit">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-paper-gray opacity-40 mb-2 border-b border-paper-border/20 pb-1">
                    <span>{t.vol}</span>
                    <span>{t.price}</span>
                    <span>{t.paper}</span>
                </div>
                <h1 className="headline-font text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-2 text-paper-purple">
                    {t.headerTitle}
                </h1>
                <p className="text-xl md:text-2xl font-bold italic text-paper-gray opacity-70 font-serif">
                    {t.headerQuote}
                </p>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">

                {/* LEFT COLUMN: CONTEXT & LEAGUES */}
                <div className="lg:col-span-6 space-y-8">

                    {/* WWI CONTEXT */}
                    <div className="pamphlet-card p-6 border-t-8 border-paper-border relative text-inherit">
                        <h3 className="spartan-font text-2xl font-bold mb-4 uppercase flex items-center gap-2 text-inherit">
                            <Globe className="w-6 h-6" /> {t.warTitle}
                        </h3>
                        <p className="text-sm mb-4 leading-relaxed opacity-80">{t.warText}</p>
                        <div className="bg-paper-border/5 p-4 border-l-4 border-paper-border text-sm relative text-inherit">
                            <div className="absolute -right-2 -top-2 bg-paper-border text-paper-bg px-2 py-0.5 text-[10px] font-bold">{t.realityCheck}</div>
                            <strong>{t.realityStrong}</strong>
                            <ul className="mt-2 space-y-1 list-disc ml-4 text-xs opacity-70">
                                {t.realityItems.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                                <li><strong>{t.realityNeed}</strong>{t.realityNeedText}<span className="bg-paper-green/20 px-1 font-bold text-paper-green">{t.selfGov}</span>.</li>
                            </ul>
                        </div>
                    </div>

                    {/* THE TWO LEAGUES */}
                    <div className="pamphlet-card p-0 overflow-hidden relative border-paper-border text-inherit">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* TILAK */}
                            <div className="bg-paper-orange/5 p-6 border-b md:border-b-0 md:border-r border-paper-orange/10 relative text-inherit">
                                <div className="absolute top-0 left-0 w-full h-2 flag-stripe-saffron opacity-30"></div>
                                <h3 className="headline-font text-2xl font-bold text-paper-orange mb-2 mt-2">{t.tilakTitle}</h3>
                                <div className="text-[10px] font-bold uppercase mb-4 text-paper-orange bg-paper-orange/10 inline-block px-1 border border-paper-orange/20">{t.tilakMeta}</div>
                                <ul className="text-xs space-y-3 list-disc ml-4 font-medium opacity-80">
                                    {t.tilakItems.map((item, i) => (
                                        <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                    ))}
                                    <li><strong>{t.tilakOrg}</strong> <span className="bg-paper-orange/20 px-1 border border-paper-orange/40 text-paper-orange">{t.tilakBranches}</span>{t.tilakBranchNote}</li>
                                </ul>
                            </div>

                            {/* BESANT */}
                            <div className="bg-paper-green/5 p-6 relative text-inherit">
                                <div className="absolute top-0 left-0 w-full h-2 flag-stripe-green opacity-30"></div>
                                <h3 className="headline-font text-2xl font-bold text-paper-green mb-2 mt-2">{t.besantTitle}</h3>
                                <div className="text-[10px] font-bold uppercase mb-4 text-paper-green bg-paper-green/10 inline-block px-1 border border-paper-green/20">{t.besantMeta}</div>
                                <ul className="text-xs space-y-3 list-disc ml-4 font-medium opacity-80">
                                    {t.besantItems.map((item, i) => (
                                        <li key={i}><strong>{item.bold}</strong>{item.text}</li>
                                    ))}
                                    <li><strong>{t.besantOrg}</strong> <span className="bg-paper-green/20 px-1 border border-paper-green/40 text-paper-green">{t.besantBranches}</span>{t.besantBranchNote}</li>
                                </ul>
                                <div className="mt-4 text-[10px] opacity-60 italic bg-paper border border-paper-green/20 rounded p-2 text-inherit">
                                    <strong>{t.besantLieutenants}</strong>{t.besantLieutenantsText}
                                </div>
                            </div>
                        </div>
                        <div className="bg-paper-border text-paper-bg text-[10px] p-2 text-center uppercase tracking-wider font-bold">
                            {t.leagueQuote}
                        </div>
                    </div>

                    {/* REPRESSION & RESPONSE */}
                    <div className="pamphlet-card p-6 bg-red-50 border-2 border-red-100 relative">
                        <h3 className="spartan-font text-xl font-bold mb-4 text-red-900 uppercase flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5" /> {t.conflictTitle}
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-inherit">
                                <div className="min-w-[40px] text-2xl">👮‍♂️</div>
                                <div>
                                    <h4 className="font-bold text-sm text-paper-red">{t.besantArrest}</h4>
                                    <p className="text-xs opacity-70 mt-1">{t.besantArrestText}</p>
                                </div>
                            </div>

                            <div className="border-l-4 border-paper-red pl-4 py-1 text-inherit">
                                <h4 className="font-bold text-sm text-paper-red">{t.renunciationTitle}</h4>
                                <p className="text-xs italic bg-paper p-1 inline-block border border-paper-border/20 mt-1">{t.renunciationQuote}</p>
                                <p className="text-[10px] font-bold mt-1 uppercase text-paper-red opacity-80">{t.renunciationBy}</p>
                            </div>

                            <div className="bg-paper p-3 border border-paper-red/20 shadow-sm relative text-inherit">
                                <div className="absolute -top-2 -right-2 transform rotate-3">
                                    <Badge variant="outline" className="bg-paper border-paper-red text-paper-red font-bold text-[10px]">{t.walkoutBadge}</Badge>
                                </div>
                                <h4 className="font-bold text-sm text-paper-red uppercase">{t.warConference}</h4>
                                <p className="text-xs mt-1">{t.warConferenceText}<span className="font-bold text-paper-red">{t.warConferenceWalkout}</span>.</p>
                            </div>

                            <div className="bg-paper-green/10 p-3 border border-paper-green/20 text-center text-inherit">
                                <h4 className="font-bold text-sm text-paper-green uppercase">{t.carrotTitle}</h4>
                                <p className="text-xs mt-1">{t.carrotText}<span className="font-bold bg-paper px-1 text-paper-green border border-paper-green/20">{t.selfGovInst}</span>{t.carrotEnd}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: LUCKNOW PACT, HEROES, ANALYSIS */}
                <div className="lg:col-span-6 space-y-8">

                    {/* OBITUARY NOTICE */}
                    <div className="border-4 border-paper-border p-4 bg-paper-border/5 text-center relative max-w-sm mx-auto transform -rotate-1 text-inherit">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-paper-border text-paper-bg px-2 py-0.5 text-[10px] font-bold uppercase">{t.obituaryTag}</div>
                        <h4 className="font-serif italic text-lg mb-1">{t.obituaryTitle}</h4>
                        <p className="font-bold uppercase text-sm mb-2">{t.obituaryNames}</p>
                        <div className="text-xs border-t border-paper-border/20 pt-2 mt-2">
                            <strong className="text-paper-gray">{t.obituaryEffect}</strong><span className="opacity-70">{t.obituaryEffectText}</span>
                        </div>
                    </div>

                    {/* LUCKNOW PACT */}
                    <div className="pamphlet-card p-6 relative overflow-hidden text-inherit">
                        <div className="unity-gradient h-16 w-full absolute top-0 left-0 flex items-center justify-center opacity-80">
                            <div className="bg-paper/90 px-4 py-1 rounded shadow-sm border border-paper-border/20">
                                <h3 className="headline-font text-2xl font-bold uppercase tracking-widest text-paper-gray">{t.lucknowTitle}</h3>
                            </div>
                        </div>

                        <div className="mt-12 text-center mb-6">
                            <p className="text-sm italic font-serif opacity-60 text-inherit">{t.lucknowQuote}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm mb-6 text-inherit">
                            <div className="bg-paper-purple/10 p-4 border border-paper-purple/20">
                                <strong className="text-paper-purple uppercase text-xs block mb-2">{t.doubleUnity}</strong>
                                <ul className="text-xs list-disc ml-4 space-y-1 opacity-80">
                                    {t.doubleUnityItems.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-paper-purple/10 p-4 border border-paper-purple/20">
                                <strong className="text-paper-purple uppercase text-xs block mb-2">{t.keyArchitect}</strong>
                                <p className="font-bold text-lg text-paper-purple">{t.jinnahName}</p>
                                <p className="text-[10px] italic mt-1 opacity-60">{t.jinnahQuote}</p>
                            </div>
                        </div>

                        <div className="bg-paper-red/10 p-4 text-xs border border-paper-red/20 text-inherit">
                            <strong className="text-paper-red block mb-1 uppercase flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3" /> {t.blunderTitle}
                            </strong>
                            <span className="opacity-80">{t.blunderText}</span><span className="font-bold bg-paper-red/20 px-1 text-paper-red">{t.separateElectorates}</span>.
                            <br /><em className="opacity-40 mt-1 block">{t.blunderCriticism}</em>
                        </div>
                    </div>

                    {/* HEROES & HIGHLIGHTS */}
                    <div className="pamphlet-card p-6 text-inherit">
                        <h3 className="spartan-font text-xl font-bold mb-4 uppercase text-paper-gray border-b-2 border-paper-border pb-2">
                            {t.heroesTitle}
                        </h3>

                        <div className="grid gap-4">
                            <div className="flex justify-between items-center bg-paper-purple/5 p-3 border border-paper-purple/10 text-inherit">
                                <div>
                                    <h4 className="font-bold text-sm text-paper-purple">{t.firstWoman}</h4>
                                    <p className="text-xs opacity-60">{t.firstWomanText}</p>
                                </div>
                                <BadgeCheck className="w-6 h-6 text-paper-purple opacity-30" />
                            </div>

                            <div className="bg-paper-navy/5 p-3 border border-paper-navy/10 text-inherit">
                                <h4 className="font-bold text-sm text-paper-navy">{t.bombayHero}</h4>
                                <p className="text-xs opacity-80 mt-1">{t.bombayHeroText}<strong>{t.antiWillingdon}</strong>.</p>
                                <div className="mt-2 text-[10px] bg-paper p-1 inline-block border border-paper-navy/20 font-bold uppercase text-paper-navy">
                                    {t.bombayLegacy}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-1 bg-paper-orange/5 p-3 border border-paper-orange/10 text-inherit">
                                    <h4 className="font-bold text-sm text-paper-orange mb-1">{t.biAmman}</h4>
                                    <p className="text-[10px] leading-tight opacity-70">{t.biAmmanText}</p>
                                </div>
                                <div className="flex-1 bg-paper-border/10 p-3 border border-paper-border/20 text-inherit">
                                    <h4 className="font-bold text-sm text-paper-gray mb-1">{t.chirolCase}</h4>
                                    <p className="text-[10px] leading-tight opacity-70">{t.chirolText}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ANALYSIS TABLE */}
                    <div className="bg-paper border-2 border-paper-border p-4 text-inherit">
                        <h4 className="font-bold text-sm uppercase mb-3 text-center bg-paper-border text-paper-bg py-1 spartan-font">{t.analysisTitle}</h4>
                        <div className="grid grid-cols-3 gap-2 text-xs text-center font-bold uppercase bg-paper-border/10 py-2 mb-2">
                            <span>{t.featureLabel}</span>
                            <span className="text-paper-orange">{t.swadeshiLabel}</span>
                            <span className="text-paper-green">{t.homeRuleLabel}</span>
                        </div>
                        <div className="space-y-2 text-xs text-inherit">
                            {t.analysisRows.map((row, i) => (
                                <div key={i} className={`grid grid-cols-3 gap-2 text-center ${i < t.analysisRows.length - 1 ? 'border-b border-paper-border/10 pb-2' : ''}`}>
                                    <span className="font-bold text-paper-gray opacity-50">{row.feature}</span>
                                    <span className="opacity-80">{row.swadeshi}</span>
                                    <span className="font-bold bg-paper-green/10 text-paper-green">{row.homeRule}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TRANSITION CARD */}
                    <div className="bg-neutral-900 dark:bg-black text-gray-100 p-6 relative overflow-hidden rounded-sm border border-white/10">
                        <div className="absolute right-0 top-0 text-6xl text-white opacity-5 transform rotate-12 font-black">1920</div>
                        <h3 className="spartan-font text-xl font-bold mb-2 text-paper-orange uppercase">{t.transitionTitle}</h3>
                        <p className="text-sm mb-4 text-gray-300 opacity-80">{t.transitionText}</p>

                        <div className="flex items-center gap-4 bg-card/10 p-3 rounded border border-white/20">
                            <div className="text-3xl">{t.gandhiLabel}</div>
                            <div className="text-[10px] md:text-xs">
                                <p><strong>{t.gandhiYear}</strong>{t.gandhiText}</p>
                                <div className="mt-1 flex items-center gap-2">
                                    <span className="px-1 bg-paper-orange text-paper-bg font-bold uppercase text-[10px]">{t.renamedTo}</span>
                                    <span className="font-bold uppercase tracking-wider text-paper-orange">{t.swarajyaSabha}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}
