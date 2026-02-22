"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Skull,
    Flame,
    Zap,
    Target,
    Skull as Grave,
    Book,
    Globe,
    Pencil,
    ShieldAlert,
    Crosshair,
    Lock,
    Eye,
    Stamp,
    MessageSquare,
    AlertCircle,
    Flag,
    History,
    Anchor,
    Search,
    BookOpen,
    Quote,
    CheckCircle2,
    Shield,
    Users
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useLanguageStore } from '@/lib/language-store';
import { ch7Translations } from './translations/ch7';

export default function HandwrittenChapter7() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch7Translations.hi : ch7Translations.en;

    const [activeMatchup, setActiveMatchup] = useState(0);

    const matchupColors = [
        { color: "border-paper-red", bg: "bg-paper-red/10" },
        { color: "border-paper-orange", bg: "bg-paper-orange/10" },
        { color: "border-paper-orange/80", bg: "bg-paper-orange/5" },
        { color: "border-paper-red/80", bg: "bg-paper-red/5" },
        { color: "border-paper-gray", bg: "bg-paper-gray/10" },
        { color: "border-paper-gray/80", bg: "bg-paper-gray/5" },
        { color: "border-paper-green", bg: "bg-paper-green/10" },
        { color: "border-paper-navy", bg: "bg-paper-navy/10" },
    ];

    const historianColors = ["border-paper-orange", "border-paper-navy/40", "border-paper-green"];
    const historianHovers = ["group-hover:text-paper-orange", "group-hover:text-paper-navy/60", "group-hover:text-paper-green"];

    return (
        <div className="min-h-screen bg-paper p-4 md:p-8 font-['Kalam',_cursive] text-paper-gray selection:bg-paper-red/20 overflow-x-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Permanent+Marker&family=Special+Elite&family=Cutive+Mono&display=swap');
                
                .scorched-paper {
                    background-color: var(--paper-bg);
                    box-shadow: 0 0 20px var(--paper-border);
                    position: relative;
                }

                .telegram-strip {
                    background-color: var(--sticky-yellow);
                    font-family: 'Special Elite', cursive;
                    border: 1px solid var(--paper-border);
                    box-shadow: 2px 2px 5px var(--paper-border);
                    transform: rotate(-0.5deg);
                    color: initial;
                }

                .blood-stain {
                    position: absolute;
                    width: 150px;
                    height: 150px;
                    background: radial-gradient(circle, var(--paper-text-red) 15%, var(--paper-text-red) 5%, transparent 70%);
                    border-radius: 50%;
                    pointer-events: none;
                    filter: blur(5px);
                    opacity: 0.1;
                }

                .stamp-top-secret {
                    font-family: 'Permanent Marker', cursive;
                    color: var(--paper-text-red);
                    border: 5px solid var(--paper-text-red);
                    padding: 4px 12px;
                    text-transform: uppercase;
                    transform: rotate(-15deg);
                    opacity: 0.8;
                }

                .stamp-intercepted {
                    font-family: 'Permanent Marker', cursive;
                    color: var(--paper-text-gray);
                    border: 5px solid var(--paper-text-gray);
                    padding: 4px 12px;
                    text-transform: uppercase;
                    transform: rotate(10deg);
                    opacity: 0.7;
                }

                .typewriter {
                    font-family: 'Special Elite', cursive;
                    letter-spacing: -1px;
                }

                .gunpowder-grey { color: var(--paper-text-gray); opacity: 0.8; }
                .revolution-red { color: var(--paper-text-red); }

                .grid-of-grievances {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                }

                .marker-yellow {
                    background-color: var(--sticky-yellow);
                    padding: 0 4px;
                    border-radius: 2px;
                    font-weight: bold;
                    color: initial;
                }

                .paper-border {
                    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
                    border: 2px solid var(--paper-border);
                }

                .body-handwritten {
                    font-family: 'Kalam', cursive;
                    line-height: 1.8;
                    color: var(--paper-text-gray);
                }

                .marker-label {
                    font-family: 'Permanent Marker', cursive;
                    color: var(--paper-text-gray);
                }

                .lotus-bullet::before {
                    content: '🪷';
                    margin-right: 8px;
                }
                .chapati-bullet::before {
                    content: '🫓';
                    margin-right: 8px;
                }
            `}</style>

            {/* HERO SECTION */}
            <header className="max-w-6xl mx-auto pt-20 mb-16 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="blood-stain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2] opacity-20"></div>
                    <div className="absolute top-0 right-10 stamp-top-secret scale-150">{t.topSecretStamp}</div>
                    <h1 className="text-5xl md:text-9xl font-['Permanent_Marker'] revolution-red mb-4 tracking-tighter uppercase drop-shadow-lg">
                        {t.heroTitle}
                    </h1>
                    <p className="text-xl md:text-3xl gunpowder-grey font-bold uppercase tracking-[0.5em] italic">
                        {t.heroSubtitle}
                    </p>
                    <div className="flex justify-center gap-12 mt-8 text-4xl">
                        <span>💣</span> <span>🏹</span> <span>🔥</span>
                    </div>
                </motion.div>

                <div className="mt-16 max-w-2xl mx-auto telegram-strip p-6 text-xl leading-relaxed">
                    <div className="flex justify-between items-center mb-4 text-xs font-bold text-muted-foreground">
                        <span>{t.telegramHeader}</span>
                        <span>{t.telegramDate}</span>
                    </div>
                    <p className="typewriter">{t.telegramBody}</p>
                    <p className="text-right text-[10px] mt-4 opacity-50">{t.telegramEnd}</p>
                </div>
            </header>

            {/* SECTION 1: THE POWDER KEG */}
            <section className="max-w-7xl mx-auto mb-24 px-4">
                <h2 className="text-4xl font-['Permanent_Marker'] gunpowder-grey mb-12 flex items-center gap-4">
                    <AlertCircle className="w-10 h-10 revolution-red" /> {t.causesTitle}
                </h2>

                <div className="grid-of-grievances text-inherit">
                    {/* ECONOMIC */}
                    <Card className="scorched-paper p-6 border-4 border-paper-border transform -rotate-1 hover:rotate-0 transition-transform text-inherit">
                        <h3 className="text-2xl font-['Permanent_Marker'] revolution-red mb-4 border-b-2 border-paper-border/10 pb-2 flex items-center gap-2">
                            <span className="text-3xl">💰</span> {t.economicTitle}
                        </h3>
                        <p className="body-handwritten text-lg leading-snug">{t.economicText}</p>
                    </Card>

                    {/* POLITICAL */}
                    <Card className="scorched-paper p-6 border-4 border-paper-border transform rotate-1 text-inherit">
                        <h3 className="text-2xl font-['Permanent_Marker'] revolution-red mb-4 border-b-2 border-paper-border/10 pb-2 flex items-center gap-2">
                            <span className="text-3xl">👑</span> {t.politicalTitle}
                        </h3>
                        <ul className="body-handwritten text-lg space-y-2">
                            {t.politicalItems.map((item, i) => (
                                <li key={i}>• <strong>{item.bold}</strong>{item.text}</li>
                            ))}
                        </ul>
                    </Card>

                    {/* SOCIO-RELIGIOUS */}
                    <Card className="scorched-paper p-6 border-4 border-paper-border transform -rotate-1 text-inherit">
                        <h3 className="text-2xl font-['Permanent_Marker'] revolution-red mb-4 border-b-2 border-paper-border/10 pb-2 flex items-center gap-2">
                            <span className="text-3xl">🕉️</span> {t.religiousTitle}
                        </h3>
                        <p className="body-handwritten text-lg leading-snug">
                            {t.religiousText}
                            <span className="block mt-2 font-bold text-sm">{t.religiousAct}</span>{t.religiousActText}
                        </p>
                    </Card>

                    {/* MILITARY */}
                    <Card className="scorched-paper p-6 border-4 border-paper-border transform rotate-1 text-inherit">
                        <h3 className="text-2xl font-['Permanent_Marker'] revolution-red mb-4 border-b-2 border-paper-border/10 pb-2 flex items-center gap-2">
                            <span className="text-3xl">⚔️</span> {t.militaryTitle}
                        </h3>
                        <p className="body-handwritten text-lg leading-snug">
                            <span className="marker-yellow">{t.militaryAct}</span> {t.militaryText}
                        </p>
                    </Card>
                </div>

                {/* IMMEDIATE CAUSE */}
                <div className="max-w-4xl mx-auto mt-12 bg-paper p-8 paper-border border-4 border-dashed border-paper-red relative shadow-2xl overflow-hidden text-inherit">
                    <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
                        <Flame className="w-32 h-32 text-paper-red" />
                    </div>
                    <div className="absolute top-2 left-2 stamp-intercepted">{t.sparkStamp}</div>
                    <h3 className="text-3xl font-['Permanent_Marker'] mb-4 text-center revolution-red underline decoration-paper-red/20 decoration-8 underline-offset-8 uppercase">{t.sparkTitle}</h3>
                    <div className="flex flex-col md:flex-row gap-8 items-center mt-8">
                        <div className="text-7xl">🔫</div>
                        <div className="body-handwritten text-xl leading-relaxed">
                            <strong>{t.sparkLabel}</strong> {t.sparkText}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE SPARK (TIMELINE) */}
            <section className="max-w-6xl mx-auto mb-24 relative">
                <div className="absolute left-1/2 -top-10 -translate-x-1/2 opacity-20"><Zap className="w-20 h-20 text-yellow-500 animate-bounce" /></div>
                <h2 className="text-4xl font-['Permanent_Marker'] text-center mb-16 uppercase tracking-widest">{t.timelineTitle}</h2>

                <div className="space-y-16 relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-300 -translate-x-1/2 border-dashed"></div>

                    {t.timeline.map((event, idx) => {
                        const isLeft = idx % 2 === 0;
                        return (
                            <div key={idx} className="flex flex-col md:flex-row gap-8 items-center">
                                {isLeft ? (
                                    <>
                                        <div className="flex-1 text-right order-2 md:order-1">
                                            <h4 className="text-2xl font-['Permanent_Marker'] revolution-red">{event.place}</h4>
                                            <p className="body-handwritten text-lg">{event.text}</p>
                                        </div>
                                        <div className="w-12 h-12 bg-red-900 text-white rounded-full flex items-center justify-center font-bold z-10 order-1 md:order-2">{idx + 1}</div>
                                        <div className="flex-1 order-3"></div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex-1 order-2 md:order-1"></div>
                                        <div className="w-12 h-12 bg-red-900 text-white rounded-full flex items-center justify-center font-bold z-10 order-1 md:order-2">{idx + 1}</div>
                                        <div className="flex-1 order-3 text-left">
                                            <h4 className="text-2xl font-['Permanent_Marker'] revolution-red">{event.place}</h4>
                                            <p className="body-handwritten text-lg">{event.text}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* SECTION 3: THE MATCHUPS */}
            <section className="max-w-7xl mx-auto mb-24 px-4">
                <h2 className="text-4xl font-['Permanent_Marker'] gunpowder-grey mb-12 flex items-center gap-4">
                    <Crosshair className="w-10 h-10 revolution-red" /> {t.matchupTitle}
                </h2>

                <div className="flex flex-wrap gap-4 mb-12 justify-center">
                    {t.matchups.map((m, idx) => (
                        <Button
                            key={idx}
                            onClick={() => setActiveMatchup(idx)}
                            variant={activeMatchup === idx ? "destructive" : "outline"}
                            className={`paper-border px-6 py-4 font-['Permanent_Marker'] transform ${activeMatchup === idx ? 'scale-105 rotate-1' : 'rotate-[-1deg] opacity-70'}`}
                        >
                            {m.place}
                        </Button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeMatchup}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`max-w-4xl mx-auto p-12 paper-border border-8 ${matchupColors[activeMatchup].color} ${matchupColors[activeMatchup].bg} shadow-2xl relative`}
                    >
                        <div className="absolute top-4 right-4 stamp-top-secret opacity-20">{t.encounterStamp}</div>
                        <h3 className="text-4xl font-['Permanent_Marker'] mb-8 underline decoration-double">{t.matchups[activeMatchup].place}</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 body-handwritten relative">
                            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-300 hidden md:block"></div>

                            {/* REBEL SIDE */}
                            <div className="space-y-6">
                                <h4 className="text-2xl font-bold revolution-red flex items-center gap-2">
                                    <ShieldAlert className="w-6 h-6" /> {t.rebelLabel}
                                </h4>
                                <p className="text-2xl font-bold">{t.matchups[activeMatchup].rebel}</p>
                                {t.matchups[activeMatchup].advisor && (
                                    <div className="p-2 bg-yellow-100 border border-yellow-300 rounded text-sm italic">
                                        {t.advisorLabel} <strong>{t.matchups[activeMatchup].advisor}</strong> {t.advisorBrain}
                                    </div>
                                )}
                                {(t.matchups[activeMatchup] as any).hidden && (
                                    <div className="p-2 bg-stone-200 border border-stone-400 rounded text-sm italic">
                                        <strong>{t.hiddenHero}</strong> {(t.matchups[activeMatchup] as any).hidden}
                                    </div>
                                )}
                            </div>

                            {/* BRITISH SIDE */}
                            <div className="space-y-6">
                                <h4 className="text-2xl font-bold gunpowder-grey flex items-center gap-2">
                                    <Target className="w-6 h-6" /> {t.suppressorLabel}
                                </h4>
                                <p className="text-2xl font-bold">{t.matchups[activeMatchup].british}</p>
                                <div className="mt-8 p-4 bg-card/50 border border-border rounded-xl relative">
                                    <div className="absolute -top-3 -right-3"><Grave className="w-8 h-8 text-muted-foreground" /></div>
                                    <h5 className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-2">{t.finalOutcome}</h5>
                                    <p className="text-sm italic">{t.matchups[activeMatchup].fate}</p>
                                </div>
                            </div>
                        </div>

                        {activeMatchup === 3 && (
                            <div className="mt-12 text-center">
                                <p className="text-2xl revolution-red font-bold animate-pulse">{t.jhansiQuote}</p>
                                <p className="text-sm italic text-muted-foreground mt-2">{t.jhansiQuoteBy}</p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </section>

            {/* MINOR REGIONAL LEADERS */}
            <section className="max-w-6xl mx-auto mb-24">
                <div className="bg-stone-800 text-stone-100 p-12 paper-border border-4 border-slate-300 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Flag className="w-64 h-64" />
                    </div>
                    <h2 className="text-3xl font-['Permanent_Marker'] text-orange-400 mb-12 uppercase text-center">{t.minorTitle}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center body-handwritten">
                        {t.minorLeaders.map((leader, i) => (
                            <div key={i} className="p-4 border border-stone-600 rounded-xl hover:bg-stone-700 transition-colors">
                                <h4 className="font-bold text-lg text-orange-200">{leader.region}</h4>
                                <p className="text-sm">{leader.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY IT FAILED */}
            <section className="max-w-7xl mx-auto mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-12">
                    <h2 className="text-4xl font-['Permanent_Marker'] gunpowder-grey flex items-center gap-4">
                        <Lock className="w-10 h-10" /> {t.failedTitle}
                    </h2>

                    <div className="bg-card p-8 paper-border border-4 border-slate-900 shadow-xl relative overflow-hidden transform -rotate-1">
                        <div className="absolute top-2 right-2 stamp-intercepted text-[10px]">{t.loyalistsStamp}</div>
                        <h4 className="text-2xl font-['Permanent_Marker'] mb-6 underline decoration-slate-200">{t.loyalistsTitle}</h4>
                        <p className="body-handwritten text-xl leading-relaxed mb-6">{t.loyalistsText}</p>
                        <blockquote className="p-4 bg-slate-900 text-slate-100 rounded-xl font-['Special_Elite'] text-sm italic">
                            {t.loyalistsQuote}
                        </blockquote>
                    </div>

                    <div className="bg-card p-8 paper-border border-4 border-slate-900 shadow-xl relative overflow-hidden transform rotate-1">
                        <h4 className="text-2xl font-['Permanent_Marker'] mb-6 underline decoration-slate-200">{t.splitTitle}</h4>
                        <p className="body-handwritten text-xl leading-relaxed mb-4">
                            <strong>{t.splitLabel}</strong> {t.splitText}
                        </p>
                        <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                            {t.splitBullets.map((b, i) => (
                                <span key={i} className="chapati-bullet">{b}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* UNITY CARD */}
                <div className="bg-red-900 text-white p-12 rounded-[100px] flex flex-col justify-center items-center text-center shadow-2xl relative">
                    <div className="absolute top-10 left-10 opacity-10"><Users className="w-32 h-32" /></div>
                    <div className="absolute bottom-10 right-10 opacity-10"><Flag className="w-32 h-32" /></div>
                    <Badge variant="outline" className="border-red-400 text-red-100 mb-6 text-xl px-6 py-2">{t.unityBadge}</Badge>
                    <h3 className="text-5xl font-['Permanent_Marker'] text-orange-400 mb-8">{t.unityTitle}</h3>
                    <p className="body-handwritten text-2xl leading-relaxed max-w-lg mb-8">
                        {t.unityQuote}
                        <br /><span className="text-sm opacity-60 font-sans">{t.unityQuoteBy}</span>
                    </p>
                    <div className="text-left space-y-4 body-handwritten text-lg bg-card/5 p-6 rounded-3xl border border-white/10">
                        {t.unityPoints.map((pt, i) => (
                            <p key={i}>• {pt}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* IMPACT */}
            <section className="max-w-7xl mx-auto mb-24 px-4">
                <h2 className="text-4xl font-['Permanent_Marker'] gunpowder-grey mb-12 flex items-center gap-4">
                    <History className="w-10 h-10" /> {t.impactTitle}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* ACT OF 1858 */}
                    <div className="bg-card p-10 paper-border border-l-8 border-l-slate-900 shadow-2xl relative">
                        <div className="absolute top-2 right-2 text-6xl opacity-10 font-bold">1858</div>
                        <h3 className="text-2xl font-['Permanent_Marker'] mb-6">{t.actTitle}</h3>
                        <div className="space-y-4 body-handwritten text-xl">
                            {t.actItems.map((item, i) => (
                                <p key={i} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-green-600" /> {item}</p>
                            ))}
                            <div className="p-4 bg-slate-50 border-2 border-dashed rounded-xl">
                                <h5 className="text-[10px] font-bold uppercase mb-2">{t.actOffice}</h5>
                                <p>{t.actOfficeText}</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-muted-foreground uppercase">{t.queensProc}</span>
                            <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-xs font-bold">{t.queensProcDate}</span>
                        </div>
                    </div>

                    {/* ARMY & 1861 */}
                    <div className="space-y-8">
                        <div className="bg-[#fffcf0] p-8 paper-border border-4 border-[#8B0000] relative group">
                            <div className="absolute -right-4 -top-4 stamp-intercepted rotate-12">{t.peelStamp}</div>
                            <h4 className="text-2xl font-bold revolution-red mb-4 flex gap-2"><Globe className="w-6 h-6" /> {t.armyTitle}</h4>
                            <div className="grid grid-cols-2 gap-4 text-center mb-6">
                                <div className="p-4 bg-card border border-red-100 rounded-xl">
                                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">{t.bengalRatio}</p>
                                    <p className="text-2xl font-black revolution-red">1 : 2</p>
                                </div>
                                <div className="p-4 bg-card border border-red-100 rounded-xl">
                                    <p className="text-[10px] uppercase font-bold text-muted-foreground mb-1">{t.madrasRatio}</p>
                                    <p className="text-2xl font-black revolution-red">1 : 3</p>
                                </div>
                            </div>
                            <p className="text-sm body-handwritten">{t.armyTheory}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-card p-4 paper-border border-2 border-border">
                                <h5 className="font-bold text-sm mb-2 border-b">{t.act1861Title}</h5>
                                <p className="text-xs body-handwritten italic">{t.act1861Text}</p>
                            </div>
                            <div className="bg-card p-4 paper-border border-2 border-border">
                                <h5 className="font-bold text-sm mb-2 border-b">{t.whiteMutiny}</h5>
                                <p className="text-xs body-handwritten">{t.whiteMutinyText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HISTORIANS' VERDICT */}
            <section className="max-w-6xl mx-auto mb-24">
                <div className="p-12 bg-[#4a3728] rounded-[40px] shadow-inner relative">
                    <div className="absolute top-0 right-0 p-10 opacity-5"><BookOpen className="w-48 h-48" /></div>
                    <h2 className="text-4xl font-['Permanent_Marker'] text-center text-orange-200 mb-16">{t.historiansTitle}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white body-handwritten">
                        {t.historians.map((h, i) => (
                            <div key={i} className={`bg-card/5 p-6 border-l-4 ${historianColors[i]} hover:bg-card/10 transition-all group`}>
                                <p className={`text-lg font-bold ${historianHovers[i]}`}>{h.name}</p>
                                <p className="text-xs italic mb-4">{h.book}</p>
                                <p className="text-sm border-t border-white/10 pt-4">{h.view}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-6 text-[10px] uppercase font-bold tracking-widest text-orange-200/50">
                        {t.historiansExtra.map((item, i) => (
                            <React.Fragment key={i}>
                                {i > 0 && <span>•</span>}
                                <span>{item}</span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="max-w-5xl mx-auto pb-24 px-4 text-center">
                <div className="bg-card p-12 paper-border border-4 border-dashed border-slate-300 relative shadow-inner">
                    <h4 className="text-2xl font-['Permanent_Marker'] mb-8 flex justify-center items-center gap-3">
                        <Grave className="w-6 h-6" /> {t.tragicTitle} <Grave className="w-6 h-6" />
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm body-handwritten italic">
                        {t.tragicLeaders.map((leader, i) => (
                            <div key={i} className="space-y-2">
                                <p className="font-bold border-b pb-1">{leader.name}</p>
                                <p>{leader.fate}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 typewriter text-xs opacity-50">
                        {t.footerTelegraph}
                    </div>
                </div>

                <div className="mt-20 flex flex-col items-center opacity-30 group cursor-pointer hover:opacity-100 transition-opacity">
                    <Quote className="w-8 h-8 mb-4 rotate-180" />
                    <p className="text-sm font-['Special_Elite'] uppercase tracking-widest">{t.footerConclusion}</p>
                    <p className="text-[10px] mt-2 italic">{t.footerSubtext}</p>
                </div>
            </footer>
        </div>
    );
}
