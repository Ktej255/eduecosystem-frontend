"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Skull,
    Divide,
    Crown,
    Sword,
    Map as MapIcon,
    Book,
    Coins,
    Gem,
    Ghost,
    Wind,
    Library,
    Compass,
    AlertTriangle,
    ShieldAlert,
    Feather,
    Quote
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguageStore } from '@/lib/language-store';
import { ch4Translations } from './translations/ch4';

export default function HandwrittenChapter4() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch4Translations.hi : ch4Translations.en;

    return (
        <div className="min-h-screen bg-paper p-4 md:p-8 font-['Kalam',_cursive] text-paper-gray selection:bg-sticky-yellow/40 overflow-x-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Permanent+Marker&family=Patrick+Hand&display=swap');
                
                .weathered-scroll {
                    background-color: var(--paper-bg);
                    position: relative;
                    border: 1px solid var(--paper-border);
                }

                .weathered-scroll::before {
                    content: "";
                    position: absolute;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: url('https://www.transparenttextures.com/patterns/cardboard.png');
                    opacity: 0.1;
                    pointer-events: none;
                }

                .frayed-edge {
                    mask-image: linear-gradient(to bottom, black 90%, transparent 100%),
                                linear-gradient(to right, black 90%, transparent 100%);
                    clip-path: polygon(0% 0%, 100% 0%, 98% 5%, 100% 10%, 97% 15%, 100% 20%, 98% 25%, 100% 30%, 97% 35%, 100% 40%, 99% 45%, 100% 50%, 98% 55%, 100% 60%, 97% 65%, 100% 70%, 99% 75%, 100% 80%, 98% 85%, 100% 90%, 97% 95%, 100% 100%, 0% 100%);
                }

                .burnt-edge {
                    border-left: 15px solid transparent;
                    border-image: url('https://www.transparenttextures.com/patterns/black-paper.png') 30 round;
                }

                .marker-yellow {
                    background-color: var(--sticky-yellow);
                    padding: 0 4px;
                    border-radius: 2px;
                    font-weight: bold;
                    color: initial;
                }

                .mughal-purple { color: var(--paper-text-purple); }
                .maratha-saffron { color: var(--paper-text-saffron); }
                .successor-green { color: var(--paper-text-green); }
                .danger-red { color: var(--paper-text-red); }

                .grid-of-ruin {
                    display: grid;
                    gap: 2rem;
                }

                .cracked-card {
                    transform: rotate(-0.5deg);
                    box-shadow: 4px 4px 0px var(--paper-border);
                }

                .cracked-card:nth-child(even) {
                    transform: rotate(0.8deg);
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
            `}</style>

            {/* HERO SECTION */}
            <header className="max-w-5xl mx-auto pt-20 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative"
                >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-20 transform rotate-12">
                        <Skull className="w-32 h-32 text-muted-foreground" />
                    </div>
                    <h1 className="text-4xl md:text-7xl font-['Permanent_Marker'] danger-red mb-2 tracking-tighter uppercase">
                        {t.heroTitle}
                    </h1>
                    <p className="text-xl md:text-2xl mughal-purple font-bold opacity-80 uppercase tracking-widest italic">
                        {t.heroSubtitle}
                    </p>
                    <div className="w-48 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mt-4"></div>
                </motion.div>

                <div className="mt-12 max-w-3xl mx-auto space-y-4">
                    <p className="text-2xl body-handwritten leading-relaxed text-slate-700">
                        {t.heroQuestion}<span className="underline decoration-red-400">{t.heroDarkAge}</span>{t.heroOr}<span className="underline decoration-green-400">{t.heroTransition}</span>{t.heroModernity}
                    </p>
                    <div className="flex justify-center gap-6 text-sm font-bold uppercase tracking-tighter text-muted-foreground">
                        {t.heroTags.map((tag, i) => (
                            <span key={i} className="flex items-center gap-1">
                                {tag.icon === 'divide' && <Divide className="w-4 h-4" />}
                                {tag.icon === 'sword' && <Sword className="w-4 h-4" />}
                                {tag.icon === 'ghost' && <Ghost className="w-4 h-4" />}
                                {tag.text}
                            </span>
                        ))}
                    </div>
                </div>
            </header>

            {/* COLLAPSE OF THE MIGHTY: THE FOREIGN HAMMER BLOWS */}
            <div className="max-w-6xl mx-auto mb-20">
                <h2 className="text-3xl font-['Permanent_Marker'] danger-red mb-8 flex items-center gap-3">
                    <ShieldAlert className="w-10 h-10" /> {t.hammerTitle}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* NADIR SHAH */}
                    <div className="bg-paper p-8 paper-border border-4 border-paper-border shadow-2xl relative overflow-hidden transform -rotate-1 text-inherit">
                        <div className="absolute top-0 right-0 p-4 opacity-5 bg-red-100 rounded-bl-full">
                            <Gem className="w-32 h-32" />
                        </div>
                        <h3 className="text-2xl font-bold danger-red mb-4 border-b-2 border-red-100 pb-2">{t.nadirTitle}</h3>
                        <p className="text-xl leading-relaxed body-handwritten mb-6">
                            {t.nadirText}<span className="marker-yellow">{t.nadirBattle}</span>。
                        </p>
                        <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                            <p className="font-bold text-red-900 mb-2 uppercase text-xs tracking-widest">{t.nadirLoot}</p>
                            <div className="flex flex-wrap gap-3">
                                {t.nadirItems.map((item, i) => (
                                    <Badge key={i} className="bg-red-700">{item}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ABDALI */}
                    <div className="bg-card p-8 paper-border border-4 border-slate-800 shadow-2xl relative overflow-hidden transform rotate-1">
                        <div className="absolute top-0 right-0 p-4 opacity-5 bg-orange-100 rounded-bl-full">
                            <Sword className="w-32 h-32" />
                        </div>
                        <h3 className="text-2xl font-bold danger-red mb-4 border-b-2 border-red-100 pb-2">{t.abdaliTitle}</h3>
                        <p className="text-xl leading-relaxed body-handwritten mb-6">
                            {t.abdaliText}
                        </p>
                        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
                            <p className="font-bold text-amber-900 mb-1 text-lg">{t.panipatTitle}</p>
                            <p className="text-sm italic">{t.panipatText}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* REGIONAL FRAGMENTATION: SUCCESSOR STATES */}
            <section className="max-w-7xl mx-auto mb-20 bg-slate-50 p-12 paper-border border-2 border-dashed border-slate-300">
                <h2 className="text-center text-4xl font-['Permanent_Marker'] mughal-purple mb-12 uppercase">{t.regionalTitle}</h2>

                <Tabs defaultValue="successor" className="w-full">
                    <TabsList className="w-full grid grid-cols-3 h-16 bg-slate-200 rounded-2xl mb-12 p-2">
                        <TabsTrigger value="successor" className="rounded-xl font-bold data-[state=active]:bg-green-700 data-[state=active]:text-white transition-all">{t.tabSuccessor}</TabsTrigger>
                        <TabsTrigger value="independent" className="rounded-xl font-bold data-[state=active]:bg-orange-600 data-[state=active]:text-white transition-all">{t.tabIndependent}</TabsTrigger>
                        <TabsTrigger value="new" className="rounded-xl font-bold data-[state=active]:bg-red-700 data-[state=active]:text-white transition-all">{t.tabNew}</TabsTrigger>
                    </TabsList>

                    {/* 1. SUCCESSOR STATES */}
                    <TabsContent value="successor" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="cracked-card border-l-8 border-green-800">
                            <CardContent className="p-6">
                                <h4 className="text-2xl font-['Permanent_Marker'] successor-green mb-2">{t.hyderabadTitle}</h4>
                                <p className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">{t.hyderabadFounder}</p>
                                <p className="body-handwritten text-lg leading-snug">{t.hyderabadText}</p>
                            </CardContent>
                        </Card>
                        <Card className="cracked-card border-l-8 border-green-800">
                            <CardContent className="p-6">
                                <h4 className="text-2xl font-['Permanent_Marker'] successor-green mb-2">{t.bengalTitle}</h4>
                                <p className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">{t.bengalFounder}</p>
                                <p className="body-handwritten text-lg leading-snug">
                                    {t.bengalText}
                                    <span className="block mt-2 italic text-sm">{t.bengalKey}</span>
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="cracked-card border-l-8 border-green-800">
                            <CardContent className="p-6">
                                <h4 className="text-2xl font-['Permanent_Marker'] successor-green mb-2">{t.awadhTitle}</h4>
                                <p className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">{t.awadhFounder}</p>
                                <p className="body-handwritten text-lg leading-snug">
                                    {t.awadhText}
                                    <span className="block mt-2 text-red-700">{t.awadhArch}</span>
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* 2. INDEPENDENT KINGDOMS */}
                    <TabsContent value="independent" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="cracked-card border-l-8 border-orange-600">
                            <CardContent className="p-6">
                                <h4 className="text-2xl font-['Permanent_Marker'] text-orange-700 mb-2">{t.mysoreTitle}</h4>
                                <p className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">{t.mysoreFounder}</p>
                                <p className="body-handwritten text-lg leading-snug">{t.mysoreText}</p>
                            </CardContent>
                        </Card>
                        <Card className="cracked-card border-l-8 border-orange-600">
                            <CardContent className="p-6 relative">
                                <div className="absolute top-2 right-2 p-1 bg-yellow-100 text-[10px] font-bold uppercase rounded">{t.rajputLabel}</div>
                                <h4 className="text-2xl font-['Permanent_Marker'] text-orange-700 mb-2">{t.rajputTitle}</h4>
                                <p className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">{t.rajputFounder}</p>
                                <p className="body-handwritten text-lg leading-snug">{t.rajputText}</p>
                            </CardContent>
                        </Card>
                        <Card className="cracked-card border-l-8 border-orange-600">
                            <CardContent className="p-6">
                                <h4 className="text-2xl font-['Permanent_Marker'] text-orange-700 mb-2">{t.keralaTitle}</h4>
                                <p className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">{t.keralaFounder}</p>
                                <p className="body-handwritten text-lg leading-snug">{t.keralaText}</p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* 3. NEW REBEL STATES */}
                    <TabsContent value="new" className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="cracked-card border-l-8 border-red-700 bg-red-50/10">
                            <CardContent className="p-6 relative overflow-hidden">
                                <div className="absolute top-2 right-2 opacity-5"><Coins className="w-12 h-12" /></div>
                                <h4 className="text-2xl font-['Permanent_Marker'] text-red-800 mb-2">{t.marathaTitle}</h4>
                                <p className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">{t.marathaFounder}</p>
                                <p className="body-handwritten text-lg leading-snug">
                                    {t.marathaText}
                                    <span className="block mt-2 font-bold text-red-900 border-t pt-2">{t.marathaTax}</span>
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="cracked-card border-l-8 border-red-700 bg-red-50/10">
                            <CardContent className="p-6">
                                <h4 className="text-2xl font-['Permanent_Marker'] text-red-800 mb-2">{t.sikhTitle}</h4>
                                <p className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">{t.sikhFounder}</p>
                                <p className="body-handwritten text-lg leading-snug">
                                    {t.sikhText}
                                    <span className="block mt-2 italic text-sm">{t.sikhRevenue}</span>
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="cracked-card border-l-8 border-red-700 bg-red-50/10">
                            <CardContent className="p-6">
                                <h4 className="text-2xl font-['Permanent_Marker'] text-red-800 mb-2">{t.jatTitle}</h4>
                                <p className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-widest">{t.jatFounder}</p>
                                <p className="body-handwritten text-lg leading-snug">{t.jatText}</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </section>

            {/* MINOR FRAGMENTS: THE ROHILLAS & PATHANS */}
            <div className="max-w-4xl mx-auto mb-20">
                <div className="bg-stone-800 text-stone-100 p-8 frayed-edge flex flex-col md:flex-row gap-8 items-center shadow-xl">
                    <div className="flex-shrink-0 text-amber-500">
                        <AlertTriangle className="w-16 h-16" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-['Permanent_Marker'] mb-4 uppercase tracking-widest text-amber-500">{t.bufferTitle}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 body-handwritten text-lg italic">
                            <div className="border-l border-stone-500 pl-4">
                                <p className="font-bold text-amber-400">{t.rohillasLabel}</p>
                                <p>{t.rohillasText}</p>
                            </div>
                            <div className="border-l border-stone-500 pl-4">
                                <p className="font-bold text-amber-400">{t.bangashLabel}</p>
                                <p>{t.bangashText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SOCIO-ECONOMIC LIFE: THE SINK OF GOLD */}
            <section className="max-w-6xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Economy Card */}
                <div className="bg-card p-8 paper-border border-4 border-slate-800 relative shadow-lg">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Coins className="w-16 h-16" /></div>
                    <h3 className="marker-label text-2xl mb-6 flex items-center gap-2 underline decoration-yellow-400 decoration-4">{t.economyTitle}</h3>
                    <ul className="body-handwritten text-lg space-y-3">
                        {t.economyItems.map((item, i) => (
                            <li key={i}>• {typeof item === 'string' ? item : <><strong>{item.bold}</strong>{item.text}</>}</li>
                        ))}
                    </ul>
                </div>

                {/* Society Card */}
                <div className="bg-card p-8 paper-border border-4 border-slate-800 relative shadow-lg">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Ghost className="w-16 h-16" /></div>
                    <h3 className="marker-label text-2xl mb-6 flex items-center gap-2 underline decoration-red-400 decoration-4">{t.societyTitle}</h3>
                    <ul className="body-handwritten text-lg space-y-3">
                        {t.societyItems.map((item, i) => (
                            <li key={i}>• <strong>{item.bold}</strong>{item.text}</li>
                        ))}
                    </ul>
                </div>

                {/* Culture Card */}
                <div className="bg-card p-8 paper-border border-4 border-slate-800 relative shadow-lg">
                    <div className="absolute top-0 right-0 p-4 opacity-10"><Feather className="w-16 h-16" /></div>
                    <h3 className="marker-label text-2xl mb-6 flex items-center gap-2 underline decoration-purple-400 decoration-4">{t.cultureTitle}</h3>
                    <ul className="body-handwritten text-lg space-y-3">
                        {t.cultureItems.map((item, i) => (
                            <li key={i}>• <strong>{item.bold}</strong>{item.text}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* FINAL WARNING MAP PLACEHOLDER */}
            <div className="max-w-4xl mx-auto mb-20 text-center">
                <div className="bg-card p-12 paper-border border-2 border-slate-300 relative overflow-hidden flex flex-col items-center">
                    <MapIcon className="w-16 h-16 text-slate-300 mb-4" />
                    <p className="text-3xl font-['Permanent_Marker'] text-muted-foreground mb-2 uppercase opacity-40">{t.mapPlaceholder}</p>
                    <p className="body-handwritten text-lg italic text-muted-foreground">{t.mapQuote}</p>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>
                </div>
            </div>

            <footer className="text-center pb-12">
                <Quote className="w-8 h-8 text-slate-300 mx-auto mb-4" />
                <p className="marker-label text-muted-foreground uppercase text-xs tracking-widest font-bold">{t.footerText}</p>
                <div className="flex justify-center gap-2 mt-4 opacity-20">
                    <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                </div>
            </footer>
        </div>
    );
}
