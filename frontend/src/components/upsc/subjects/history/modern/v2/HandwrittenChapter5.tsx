"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Map as MapIcon,
    Sword,
    Shield,
    Scroll,
    Stamp,
    Target,
    Pin,
    Compass,
    AlertCircle,
    Flag,
    History,
    Anchor,
    Search,
    BookOpen,
    Quote,
    CheckCircle2
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from '@/lib/language-store';
import {
    ch5Translations,
    ANNEXATION_CHRONOLOGY_EN,
    ANNEXATION_CHRONOLOGY_HI,
    SUBSIDIARY_CHRONOLOGY_EN,
    SUBSIDIARY_CHRONOLOGY_HI,
} from './translations/ch5';

export default function HandwrittenChapter5() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch5Translations.hi : ch5Translations.en;
    const ANNEXATION_CHRONOLOGY = language === 'hi' ? ANNEXATION_CHRONOLOGY_HI : ANNEXATION_CHRONOLOGY_EN;
    const SUBSIDIARY_CHRONOLOGY = language === 'hi' ? SUBSIDIARY_CHRONOLOGY_HI : SUBSIDIARY_CHRONOLOGY_EN;

    const [activeWar, setActiveWar] = useState(0);

    const wars = t.wars.map((w, i) => ({
        ...w,
        color: ["border-paper-orange", "border-paper-red", "border-paper-navy"][i],
        bg: ["bg-paper-orange/10", "bg-paper-red/10", "bg-paper-navy/10"][i],
    }));

    return (
        <div className="min-h-screen bg-paper p-4 md:p-8 font-['Kalam',_cursive] text-paper-gray selection:bg-paper-red/10 overflow-x-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Permanent+Marker&family=Cutive+Mono&display=swap');
                
                .war-room-paper {
                    background-color: var(--paper-bg);
                    border: 1px solid var(--paper-border);
                    box-shadow: 2px 2px 10px var(--paper-border);
                }

                .stamp-annexed {
                    font-family: 'Permanent Marker', cursive;
                    color: var(--paper-text-red);
                    border: 4px solid var(--paper-text-red);
                    padding: 5px 15px;
                    display: inline-block;
                    transform: rotate(-10deg);
                    opacity: 0.8;
                    text-transform: uppercase;
                }

                .stamp-lapsed {
                    font-family: 'Permanent Marker', cursive;
                    color: var(--paper-text-gray);
                    border: 4px solid var(--paper-text-gray);
                    padding: 5px 15px;
                    display: inline-block;
                    transform: rotate(5deg);
                    opacity: 0.6;
                    text-transform: uppercase;
                }

                .tactical-pin {
                    width: 12px; height: 12px;
                    background-color: var(--paper-text-red);
                    border-radius: 50%;
                    position: relative;
                }
                .tactical-pin::after {
                    content: '';
                    position: absolute;
                    bottom: -8px; left: 5px;
                    width: 2px; height: 10px;
                    background-color: #999;
                }

                .marker-yellow {
                    background-color: var(--sticky-yellow);
                    padding: 0 4px;
                    border-radius: 2px;
                    font-weight: bold;
                    color: initial;
                }

                .british-red { color: var(--paper-text-red); }

                .timeline-node {
                    position: relative;
                    padding-left: 20px;
                    border-left: 2px dashed var(--paper-border);
                }
                .timeline-node::before {
                    content: '';
                    position: absolute;
                    left: -7px; top: 0;
                    width: 12px; height: 12px;
                    background-color: var(--paper-text-red);
                    border-radius: 50%;
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
                }
            `}</style>

            {/* HEADER: THE WAR ROOM */}
            <header className="max-w-6xl mx-auto pt-16 mb-16 text-center space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex justify-center mb-6">
                        <Stamp className="w-20 h-20 text-paper-red" />
                    </div>
                    <h1 className="text-4xl md:text-8xl font-['Permanent_Marker'] british-red mb-2 tracking-tighter">
                        {t.heroTitle}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-bold uppercase tracking-[0.4em] italic">
                        {t.heroSubtitle}
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto bg-paper p-6 paper-border border-4 border-paper-border transform rotate-1 shadow-2xl relative">
                    <div className="absolute -top-4 -left-4 tactical-pin"></div>
                    <div className="absolute -bottom-4 -right-4 tactical-pin"></div>
                    <p className="text-2xl leading-relaxed italic body-handwritten">
                        {t.heroQuote}
                    </p>
                </div>
            </header>

            {/* SECTION 1: THE TOOLKIT OF EXPANSION */}
            <div className="max-w-7xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* RING FENCE */}
                <div className="bg-paper p-8 paper-border border-2 border-paper-border/30 relative transform -rotate-1 hover:rotate-0 transition-transform cursor-help group text-inherit">
                    <div className="absolute top-4 right-4 text-paper-border/20 group-hover:text-paper-border/40 transition-colors">
                        <Shield className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold british-red mb-6 border-b pb-2">{t.ringFenceTitle}</h3>
                    <p className="body-handwritten text-xl leading-relaxed mb-6 italic">
                        {t.ringFenceQuote}
                    </p>
                    <ul className="space-y-4 body-handwritten text-lg">
                        {t.ringFencePoints.map((pt, i) => (
                            <li key={i}>• {pt.bold ? <><strong>{pt.bold}</strong>{pt.text}</> : pt.text}</li>
                        ))}
                        <li className="text-sm bg-paper/50 p-2 rounded border border-dashed border-paper-border/20">
                            <strong>{t.rohillaWar}</strong>{t.rohillaText}
                        </li>
                    </ul>
                </div>

                {/* SUBSIDIARY ALLIANCE */}
                <Card className="bg-paper p-8 paper-border border-4 border-paper-red relative transform rotate-1 hover:rotate-0 transition-transform shadow-xl text-inherit">
                    <div className="absolute top-2 right-2 stamp-lapsed text-[10px]">{t.subsidiaryStamp}</div>
                    <h3 className="text-2xl font-bold british-red mb-6 border-b-2 border-paper-red/10 pb-2 flex items-center gap-2">
                        <Target className="w-6 h-6" /> {t.subsidiaryTitle}
                    </h3>
                    <p className="body-handwritten text-lg leading-relaxed mb-6">
                        {t.subsidiaryText}
                    </p>

                    <div className="space-y-2 body-handwritten">
                        <p className="font-bold text-xs uppercase tracking-widest text-muted-foreground">{t.subsidiaryChronLabel}</p>
                        {SUBSIDIARY_CHRONOLOGY.slice(0, 5).map((item, i) => (
                            <div key={i} className="flex justify-between text-sm border-b border-slate-100 pb-1">
                                <span>{item.name}</span>
                                <span className="marker-yellow text-slate-800">{item.year}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 p-3 bg-paper-red/5 text-paper-red text-xs italic border border-paper-red/10">
                        <strong>{t.nonWarTakeovers}</strong>{t.nonWarText}
                    </div>
                </Card>

                {/* DOCTRINE OF LAPSE */}
                <div className="bg-paper p-8 paper-border border-2 border-paper-border/30 relative transform -rotate-1 hover:rotate-0 transition-transform group text-inherit">
                    <div className="absolute top-4 right-4 text-paper-border/20 group-hover:text-paper-border/40 transition-colors">
                        <Stamp className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-paper-gray opacity-80 mb-6 border-b border-paper-border/10 pb-2">{t.doctrineTitle}</h3>
                    <p className="body-handwritten text-lg leading-relaxed mb-6 italic">
                        {t.doctrineQuote}
                    </p>
                    <div className="space-y-3">
                        {ANNEXATION_CHRONOLOGY.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                                <span className="timeline-node"></span>
                                <span className="font-bold">{item.name}</span>
                                <span className="text-[10px] text-muted-foreground">[{item.year}]</span>
                                {i === 0 && <span className="stamp-annexed text-[8px] p-1 border-2 ml-auto">{t.doctrineFirst}</span>}
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 p-3 bg-sticky-yellow/10 text-paper-gray opacity-80 text-xs rounded border border-paper-border/10">
                        <strong>{t.doctrineException}</strong>{t.doctrineExceptionText}
                    </div>
                </div>
            </div>

            {/* SECTION 2: BENGAL FOUNDATION */}
            <section className="max-w-6xl mx-auto mb-20">
                <div className="bg-[#fffdf5] p-10 paper-border border-2 border-slate-300 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-5">
                        <MapIcon className="w-64 h-64 text-muted-foreground" />
                    </div>

                    <h2 className="text-3xl font-['Permanent_Marker'] british-red mb-10 flex items-center gap-3">
                        <Anchor className="w-8 h-8" /> {t.bengalTitle}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 text-inherit">
                        <div className="space-y-6">
                            <div className="bg-paper p-6 paper-border border-l-8 border-l-paper-red shadow-sm relative">
                                <div className="absolute -top-4 -right-4 stamp-annexed text-[10px]">{t.plassey1757}</div>
                                <h4 className="marker-label text-xl mb-2">{t.plassey}</h4>
                                <p className="body-handwritten text-lg">{t.plasseyText}</p>
                            </div>
                            <div className="bg-paper p-6 paper-border border-l-8 border-l-paper-red shadow-sm relative text-inherit">
                                <div className="absolute -top-4 -right-4 stamp-annexed text-[10px]">{t.buxar1764}</div>
                                <h4 className="marker-label text-xl mb-2">{t.buxar}</h4>
                                <p className="body-handwritten text-lg">{t.buxarText}</p>
                            </div>
                        </div>

                        <div className="bg-paper-navy/5 p-8 paper-border border-2 border-paper-navy/20 text-inherit">
                            <h4 className="marker-label text-paper-navy border-b border-paper-navy/10 mb-4 pb-2">{t.dualSystem}</h4>
                            <p className="body-handwritten text-xl italic mb-6">{t.dualQuote}</p>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="bg-card p-4 rounded-xl shadow-sm border border-blue-100">
                                    <p className="text-xs uppercase font-bold text-muted-foreground mb-2">{t.diwani}</p>
                                    <p className="font-bold text-blue-800">{t.diwaniText}</p>
                                </div>
                                <div className="bg-card p-4 rounded-xl shadow-sm border border-blue-100">
                                    <p className="text-xs uppercase font-bold text-muted-foreground mb-2">{t.nizamat}</p>
                                    <p className="font-bold text-blue-800">{t.nizamatText}</p>
                                </div>
                            </div>
                            <p className="mt-6 text-sm text-blue-900/60 body-handwritten">
                                {t.dualEnded}
                                <br />{t.dualPensioner}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE DECK OF WARS */}
            <div className="max-w-6xl mx-auto mb-20">
                <h2 className="text-4xl font-['Permanent_Marker'] text-center mb-12 flex justify-center items-center gap-4">
                    <Sword className="w-10 h-10 british-red" /> {t.warsTitle} <Shield className="w-10 h-10 british-red" />
                </h2>

                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {wars.map((war, idx) => (
                        <Button
                            key={idx}
                            onClick={() => setActiveWar(idx)}
                            variant={activeWar === idx ? "default" : "outline"}
                            className={`paper-border px-8 py-6 text-xl font-['Permanent_Marker'] transform ${activeWar === idx ? 'scale-110 -rotate-2 bg-slate-900 text-white' : 'rotate-1'}`}
                        >
                            {war.icon} {war.title}
                        </Button>
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeWar}
                        initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 1.05, rotate: 1 }}
                        className={`max-w-4xl mx-auto p-12 paper-border border-8 ${wars[activeWar].color} ${wars[activeWar].bg} shadow-2xl relative min-h-[500px]`}
                    >
                        <div className="absolute top-4 right-4 text-8xl opacity-10">{wars[activeWar].icon}</div>
                        <h3 className="text-4xl font-['Permanent_Marker'] mb-12 border-b-4 border-current pb-4">
                            {t.warDetails} {wars[activeWar].title}
                        </h3>

                        <div className="space-y-8">
                            {wars[activeWar].battles.map((battle, bIdx) => (
                                <div key={bIdx} className="relative group">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-card p-3 rounded-full shadow-md border-2 border-slate-900 z-10">
                                            <Target className="w-6 h-6" />
                                        </div>
                                        <div className="body-handwritten">
                                            <h4 className="text-2xl font-bold">{battle.title}</h4>
                                            <p className="text-xl text-slate-600 mb-1 italic">{t.treatyLabel} <span className="marker-yellow text-slate-800">{battle.treaty}</span></p>
                                            <p className="text-lg opacity-80">{battle.note}</p>
                                        </div>
                                    </div>
                                    {bIdx < wars[activeWar].battles.length - 1 && (
                                        <div className="absolute left-[23px] top-[48px] bottom-[-32px] w-1 bg-slate-900 opacity-10"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* SPECIFIC TREATMENT FOR SIKH WAR */}
                        {activeWar === 2 && wars[activeWar].extraNotes && (
                            <div className="mt-8 p-4 bg-card/50 border-2 border-dashed border-blue-300 rounded-xl space-y-2 body-handwritten text-sm">
                                {(wars[activeWar] as any).extraNotes.map((note: any, i: number) => (
                                    <p key={i}>• <strong>{note.bold}</strong>{note.text}</p>
                                ))}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* SECTION 4: THE FRONTIER EXPANSION */}
            <div className="max-w-6xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* NEPAL & AFGHANS */}
                <section className="bg-card p-8 paper-border border-4 border-slate-900 shadow-xl transform -rotate-1">
                    <h3 className="text-2xl font-['Permanent_Marker'] mb-6 flex items-center gap-2">
                        <Flag className="w-6 h-6" /> {t.frontierTitle}
                    </h3>
                    <div className="space-y-6 body-handwritten text-lg leading-snug">
                        <div className="border-l-4 border-red-800 pl-4 py-1">
                            <p className="font-bold">{t.nepal}</p>
                            <p className="text-sm">{t.nepalText}</p>
                        </div>
                        <div className="border-l-4 border-blue-800 pl-4 py-1">
                            <p className="font-bold">{t.afghanistan}</p>
                            <p className="text-sm">{t.afghanistanText}</p>
                        </div>
                        <div className="border-l-4 border-purple-800 pl-4 py-1">
                            <p className="font-bold">{t.tibet}</p>
                            <p className="text-sm">{t.tibetText}</p>
                        </div>
                    </div>
                </section>

                {/* SINDH & BURMA */}
                <section className="bg-card p-8 paper-border border-4 border-slate-900 shadow-xl transform rotate-1">
                    <h3 className="text-2xl font-['Permanent_Marker'] mb-6 flex items-center gap-2">
                        <Compass className="w-6 h-6" /> {t.expansionTitle}
                    </h3>
                    <div className="space-y-4 body-handwritten">
                        <div className="bg-muted p-4 rounded border-2 border-dashed">
                            <h4 className="font-bold mb-1">{t.sindh}</h4>
                            <p className="text-sm italic">{t.sindhQuote}</p>
                        </div>
                        <div className="bg-muted p-4 rounded border-2 border-dashed">
                            <h4 className="font-bold mb-1">{t.burma}</h4>
                            <p className="text-sm">{t.burmaText}</p>
                        </div>
                        <Card className="bg-yellow-50/50 p-4 border-yellow-200">
                            <p className="text-xs font-bold uppercase mb-2">{t.bentinck}</p>
                            <ul className="text-xs space-y-1">
                                {t.bentinckList.map((item, i) => (
                                    <li key={i}>• {item}</li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                </section>
            </div>

            {/* FOOTER: POLICY EVOLUTION */}
            <footer className="max-w-5xl mx-auto pb-20 text-center">
                <div className="bg-slate-900 text-slate-100 p-8 rounded-[50px] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500"></div>
                    <h4 className="text-2xl font-['Permanent_Marker'] mb-8 text-muted-foreground">{t.phasesTitle}</h4>
                    <div className="flex flex-col md:flex-row justify-center gap-4 text-xs font-['Permanent_Marker'] uppercase">
                        <div className="px-4 py-2 border border-slate-700 rounded-full">{t.phases[0]}</div>
                        <div className="px-4 py-2 border border-slate-700 rounded-full bg-red-900/20">{t.phases[1]}</div>
                        <div className="px-4 py-2 border border-slate-700 rounded-full bg-red-900/50">{t.phases[2]}</div>
                    </div>
                    <p className="mt-8 text-muted-foreground italic body-handwritten">{t.footerText}</p>
                </div>

                <div className="mt-12 opacity-30">
                    <Quote className="w-8 h-8 mx-auto" />
                    <p className="text-[10px] uppercase font-bold tracking-[0.5em] mt-4">{t.vellore}</p>
                </div>
            </footer>
        </div>
    );
}
