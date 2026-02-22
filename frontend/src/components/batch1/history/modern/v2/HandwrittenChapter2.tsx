"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Glasses,
    BookOpen,
    Search,
    Zap,
    Users,
    Globe,
    Lightbulb,
    ScrollText,
    Info,
    CheckCircle2,
    Feather,
    Sparkles,
    ArrowRightCircle,
    Quote
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useLanguageStore } from '@/lib/language-store';
import { ch2Translations } from './translations/ch2';

type SchoolId = 'colonial' | 'nationalist' | 'marxist' | 'subaltern' | 'all';

const SCHOOLS_META = [
    { id: 'colonial', color: 'bg-slate-500', hover: 'hover:bg-slate-600', filter: 'sepia(0.3) contrast(1.1) brightness(0.95)' },
    { id: 'nationalist', color: 'bg-orange-500', hover: 'hover:bg-orange-600', filter: 'hue-rotate(20deg) saturate(1.2)' },
    { id: 'marxist', color: 'bg-red-600', hover: 'hover:bg-red-700', filter: 'hue-rotate(-20deg) saturate(1.5) contrast(1.1)' },
    { id: 'subaltern', color: 'bg-amber-800', hover: 'hover:bg-amber-900', filter: 'sepia(0.5) contrast(0.9) brightness(1.05)' },
    { id: 'all', color: 'bg-indigo-600', hover: 'hover:bg-indigo-700', filter: 'none' }
];

export default function HandwrittenChapter2() {
    const [activeLens, setActiveLens] = useState<SchoolId>('all');
    const [activeGlossaryTerm, setActiveGlossaryTerm] = useState<string | null>(null);
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch2Translations.hi : ch2Translations.en;

    const lensStyles = useMemo(() => {
        const school = SCHOOLS_META.find(s => s.id === activeLens);
        return {
            filter: school?.filter || 'none',
            transition: 'all 0.5s ease-in-out'
        };
    }, [activeLens]);

    return (
        <div className="min-h-screen bg-[#fdfbf7] selection:bg-yellow-200 overflow-x-hidden pb-12">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Permanent+Marker&family=Patrick+Hand&display=swap');
                
                .handwritten-paper {
                    background-image: repeating-linear-gradient(transparent, transparent 31px, #e5e5f7 31px, #e5e5f7 32px);
                    background-attachment: local;
                }
                
                .sticky-note {
                    box-shadow: 2px 3px 10px rgba(0,0,0,0.1);
                    transform: rotate(-1deg);
                }
                
                .paper-border {
                    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
                    border: 2px solid #333;
                }

                .lens-active {
                    box-shadow: 0 0 20px rgba(0,0,0,0.2) inset;
                }

                .marker-label {
                    font-family: 'Permanent Marker', cursive;
                }

                .body-handwritten {
                    font-family: 'Kalam', cursive;
                    line-height: 1.8;
                }
            `}</style>

            {/* Sticky Lens Selector */}
            <div className="fixed top-20 left-0 right-0 z-40 px-4 pointer-events-none">
                <div className="max-w-4xl mx-auto flex justify-center pointer-events-auto">
                    <div className="bg-white/80 backdrop-blur-md p-2 rounded-2xl border-2 border-slate-200 shadow-xl flex gap-2">
                        <div className="flex items-center gap-2 px-3 border-r pr-4 mr-2">
                            <Glasses className="w-5 h-5 text-slate-600" />
                            <span className="text-xs font-bold uppercase text-slate-500 whitespace-nowrap">{t.lensLabel}</span>
                        </div>
                        {SCHOOLS_META.map(school => (
                            <Button
                                key={school.id}
                                size="sm"
                                onClick={() => setActiveLens(school.id as SchoolId)}
                                className={`${school.color} ${school.hover} text-white transition-all transform hover:scale-105 ${activeLens === school.id ? 'ring-4 ring-offset-2 ring-indigo-400' : 'opacity-70'}`}
                            >
                                {t.schoolLabels[school.id as keyof typeof t.schoolLabels]}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Glossary Sidebar - Sticky */}
            <div className="fixed right-6 top-40 z-30 hidden xl:block w-64 pointer-events-none">
                <div className="pointer-events-auto">
                    <Card className="paper-border bg-yellow-50/90 shadow-lg transform rotate-1 sticky-note border-yellow-200">
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2 mb-3 border-b border-yellow-200 pb-2">
                                <ScrollText className="w-5 h-5 text-amber-700" />
                                <h3 className="marker-label text-amber-900 text-lg">{t.glossaryTitle}</h3>
                            </div>
                            <div className="space-y-4 body-handwritten text-sm">
                                {t.glossary.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`cursor-help transition-all ${activeGlossaryTerm === item.term ? 'scale-105 bg-yellow-200 p-1 rounded' : 'hover:text-indigo-600'}`}
                                        onMouseEnter={() => setActiveGlossaryTerm(item.term)}
                                        onMouseLeave={() => setActiveGlossaryTerm(null)}
                                    >
                                        <p className="font-bold border-b border-dotted border-amber-300 inline">{item.term}</p>
                                        {activeGlossaryTerm === item.term && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                className="mt-1 text-slate-700 italic"
                                            >
                                                {item.definition}
                                            </motion.p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Lens Overlay Content */}
            <div style={lensStyles} className="transition-all duration-700">
                {/* HERO SECTION */}
                <div className="max-w-5xl mx-auto pt-40 mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative"
                    >
                        <h1 className="marker-label text-center text-4xl md:text-7xl text-[#CC0000] mb-4">
                            {t.heroTitle}
                        </h1>
                        <p className="text-center text-2xl body-handwritten text-slate-700 mb-8 font-bold">
                            {t.heroSubtitle}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="bg-white p-8 paper-border shadow-md transform -rotate-1">
                                <h2 className="marker-label text-2xl text-indigo-800 mb-4 flex items-center gap-2">
                                    <BookOpen className="w-6 h-6" /> {t.whatIsHistoriography}
                                </h2>
                                <p className="body-handwritten text-xl leading-relaxed">
                                    {t.historiographyText1}<span className="highlight bg-yellow-200">{t.historiographyHighlight}</span>{t.historiographyText2}<span className="text-[#CC0000] font-bold">{t.historiographyBold}</span>{t.historiographyText3}
                                </p>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {t.tags.map((tag, i) => (
                                        <Badge key={i} variant="outline" className="paper-border px-3 py-1 bg-slate-50">{tag}</Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="bg-pink-50 p-6 sticky-note border-pink-200">
                                    <Quote className="w-8 h-8 text-pink-300 absolute -top-4 -left-4" />
                                    <p className="body-handwritten text-xl italic text-slate-800">
                                        {t.heroQuote}
                                    </p>
                                    <p className="text-right mt-4 font-bold marker-label text-pink-700">{t.heroQuoteAuthor}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* THE BIG FOUR FLOWCHART */}
                <div className="max-w-4xl mx-auto mb-20 px-4">
                    <h3 className="marker-label text-center text-2xl mb-8 text-slate-500 uppercase tracking-widest">{t.coreBranches}</h3>
                    <div className="flex flex-wrap justify-center gap-12 relative">
                        {[
                            { id: 'colonial', icon: Globe, color: 'text-slate-600' },
                            { id: 'nationalist', icon: Sparkles, color: 'text-orange-600' },
                            { id: 'marxist', icon: Zap, color: 'text-red-600' },
                            { id: 'subaltern', icon: Users, color: 'text-amber-800' }
                        ].map((school, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.1, rotate: (i % 2 === 0 ? 2 : -2) }}
                                className="flex flex-col items-center bg-white p-6 paper-border shadow-lg w-40 text-center relative"
                            >
                                <school.icon className={`w-12 h-12 ${school.color} mb-3`} />
                                <h4 className="marker-label text-xl mb-1">{t.schoolLabels[school.id as keyof typeof t.schoolLabels]}</h4>
                                <p className="body-handwritten text-sm text-slate-500">{t.schoolNotes[school.id as keyof typeof t.schoolNotes]}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* SECTION 2: COLONIAL */}
                <section className={`max-w-5xl mx-auto mb-20 px-4 transition-all ${activeLens === 'colonial' ? 'ring-8 ring-slate-200 p-8 rounded-3xl' : ''}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 handwritten-paper p-8 paper-border bg-white relative">
                            <div className="absolute top-0 right-0 p-4 transform rotate-12">
                                <Feather className="w-10 h-10 text-slate-300" />
                            </div>
                            <h2 className="marker-label text-3xl mb-6 text-slate-700 flex items-center gap-2">
                                <Globe className="w-8 h-8" /> {t.colonialTitle}
                            </h2>
                            <p className="body-handwritten text-xl leading-relaxed mb-6">
                                <span className="font-bold underline">{t.colonialIntro}</span>{t.colonialText}<span className="highlight bg-slate-200">{t.colonialHighlight}</span>{t.colonialText2}
                            </p>

                            <div className="space-y-4 mb-8">
                                {t.colonialPoints.map((point, i) => (
                                    <li key={i} className="body-handwritten text-lg flex gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                                        <span>{point.text1}<strong>{point.bold}</strong>{point.text2}{point.em && <em>{point.em}</em>}</span>
                                    </li>
                                ))}
                            </div>

                            <div className="p-4 bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl">
                                <p className="marker-label text-slate-600 mb-2">{t.keyHistorians}</p>
                                <div className="flex flex-wrap gap-4 body-handwritten text-xl">
                                    {t.colonialHistorians.map((name, i) => (
                                        <span key={i} className="font-bold">{name}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* ORIENTALIST Nuance Injection */}
                            <motion.div
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                className="bg-indigo-50 p-6 paper-border border-indigo-200 shadow-md relative overflow-hidden"
                            >
                                <div className="absolute -right-4 -top-4 w-12 h-12 bg-indigo-200 rounded-full opacity-30"></div>
                                <h3 className="marker-label text-indigo-900 text-lg mb-2">{t.orientalistTitle}</h3>
                                <div className="body-handwritten text-sm leading-relaxed text-indigo-950">
                                    <p className="mb-2"><strong>William Jones & Max Muller</strong>{t.orientalistText}</p>
                                    <p className="italic underline">{t.orientalistLabel}</p>
                                </div>
                            </motion.div>

                            {/* EVANGELICAL Injection */}
                            <div className="bg-stone-50 p-6 sticky-note border-stone-200">
                                <h3 className="marker-label text-stone-700 text-lg mb-2">{t.evangelicalTitle}</h3>
                                <p className="body-handwritten text-sm">
                                    <strong>Charles Grant</strong>{t.evangelicalText1}<strong>{t.evangelicalBold}</strong>{t.evangelicalText2}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: NATIONALIST */}
                <section className={`max-w-5xl mx-auto mb-20 px-4 transition-all ${activeLens === 'nationalist' ? 'ring-8 ring-orange-200 p-8 rounded-3xl' : ''}`}>
                    <div className="bg-white p-10 paper-border shadow-xl relative overflow-hidden">
                        <div className="absolute -left-12 -top-12 w-40 h-40 bg-orange-100/50 rounded-full blur-3xl"></div>
                        <h2 className="marker-label text-3xl mb-8 text-orange-700 flex items-center gap-2">
                            <Sparkles className="w-8 h-8" /> {t.nationalistTitle}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <p className="body-handwritten text-xl leading-relaxed mb-6">
                                    {t.nationalistText}<span className="highlight bg-orange-100">{t.nationalistHighlight}</span>{t.nationalistText2}<span className="font-bold">{t.nationalistBold}</span>{t.nationalistText3}
                                </p>

                                <Card className="bg-orange-50/50 border-orange-200 paper-border mb-6">
                                    <CardContent className="p-4">
                                        <h3 className="marker-label text-orange-800 mb-3">{t.earlyDefenders}</h3>
                                        <ul className="space-y-4 body-handwritten text-lg">
                                            <li>
                                                <strong>K.P. Jayaswal:</strong> {t.jayaswal}
                                            </li>
                                            <li>
                                                <strong>R.G. Bhandarkar:</strong> {t.bhandarkar}
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="relative">
                                {/* ECONOMIC TRIO cluster */}
                                <div className="absolute -top-6 -right-6 px-4 py-2 bg-red-600 text-white marker-label text-sm transform rotate-6 z-10 shadow-lg">
                                    {t.economicTrio}
                                </div>
                                <div className="bg-stone-50 p-8 paper-border border-2 border-slate-300 relative">
                                    <div className="body-handwritten text-lg space-y-6">
                                        <div className="border-l-4 border-red-500 pl-4">
                                            <p className="font-bold text-red-700">Dadabhai Naoroji</p>
                                            <p className="text-sm"><em>{t.naoroji}</em></p>
                                        </div>
                                        <div className="border-l-4 border-blue-500 pl-4">
                                            <p className="font-bold text-blue-700">R.C. Dutt</p>
                                            <p className="text-sm"><em>{t.rcDutt}</em></p>
                                        </div>
                                        <div className="border-l-4 border-green-500 pl-4">
                                            <p className="font-bold text-green-700">M.G. Ranade</p>
                                            <p className="text-sm">{t.ranade}</p>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-slate-200 text-sm italic">
                                        {t.bookMention}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MARXIST SECTION */}
                <section className={`max-w-5xl mx-auto mb-20 px-4 transition-all ${activeLens === 'marxist' ? 'ring-8 ring-red-200 p-8 rounded-3xl' : ''}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#fffafa] p-8 paper-border border-red-200 shadow-md">
                            <h2 className="marker-label text-3xl mb-6 text-red-700 flex items-center gap-3">
                                <Zap className="w-8 h-8" /> {t.marxistTitle}
                            </h2>
                            <p className="body-handwritten text-xl leading-relaxed mb-6">
                                {t.marxistFocus}<span className="font-bold text-red-800">{t.classStruggle}</span>。
                            </p>
                            <div className="space-y-6 body-handwritten text-lg">
                                <div className="bg-white p-4 paper-border border-red-100 shadow-sm">
                                    <span className="text-red-700 font-bold block">{t.primaryContradiction}</span>
                                    {t.primaryText}
                                </div>
                                <div className="bg-white p-4 paper-border border-red-100 shadow-sm">
                                    <span className="text-red-700 font-bold block">{t.secondaryContradiction}</span>
                                    {t.secondaryText}
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="marker-label text-red-800 text-lg mb-3">{t.bigBooks}</h4>
                                <div className="grid grid-cols-1 gap-4 body-handwritten">
                                    <div className="flex justify-between border-b border-red-100 pb-2">
                                        <span><strong>{t.indiaToday}</strong> {t.indiaToday2}</span>
                                        <span className="font-bold text-red-700">{t.rpDutt}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-red-100 pb-2">
                                        <span><strong>{t.socialBackground}</strong></span>
                                        <span className="font-bold text-red-700">{t.arDesai}</span>
                                    </div>
                                </div>
                                <p className="mt-4 text-xs italic opacity-60">{t.marxistCritique}</p>
                            </div>
                        </div>

                        {/* BRIDGE: Bipan Chandra & Nehru */}
                        <div className="flex flex-col gap-6">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white p-8 paper-border relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-2 opacity-20">
                                    <Lightbulb className="w-12 h-12" />
                                </div>
                                <h3 className="marker-label text-2xl mb-4">{t.bipanChandra}</h3>
                                <p className="body-handwritten text-lg leading-relaxed">
                                    {t.bipanText}
                                </p>
                            </motion.div>

                            <div className="bg-teal-50 p-6 paper-border border-teal-200">
                                <h3 className="marker-label text-teal-800 text-xl mb-3">{t.nehruSynthesis}</h3>
                                <div className="body-handwritten text-slate-800">
                                    <p className="mb-2"><strong>{t.nehruBook}</strong></p>
                                    <p>{t.nehruText1}<span className="text-red-600 font-bold">{t.nehruMarxist}</span>{t.nehruText2}<span className="text-orange-600 font-bold">{t.nehruNationalist}</span>{t.nehruText3}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SUBALTERN SECTION */}
                <section className={`max-w-4xl mx-auto mb-20 px-4 transition-all ${activeLens === 'subaltern' ? 'ring-8 ring-amber-200 p-8 rounded-3xl' : ''}`}>
                    <div className="bg-[#fdf8f0] p-10 paper-border border-amber-300 shadow-2xl relative">
                        <div className="absolute top-4 right-8 opacity-10">
                            <Users className="w-24 h-24 text-amber-900" />
                        </div>
                        <h2 className="marker-label text-3xl mb-8 text-amber-900 flex items-center gap-2">
                            <Users className="w-8 h-8" /> {t.subalternTitle}
                        </h2>

                        <div className="body-handwritten text-xl leading-relaxed space-y-6 max-w-2xl">
                            <p>
                                <span className="font-bold underline text-amber-950">{t.subalternFounder}</span>
                            </p>
                            <p>
                                {t.subalternText}<span className="text-red-800 font-bold">{t.subalternElitist}</span>{t.subalternText2}
                            </p>

                            <div className="bg-white/60 p-6 rounded-2xl border border-amber-200">
                                <p className="font-bold marker-label text-lg mb-4 text-amber-800">{t.twoStreams}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-slate-50 p-4 border-l-4 border-slate-400">
                                        <p className="font-bold text-slate-700 mb-2">{t.eliteStream}</p>
                                        <p className="text-sm">{t.eliteText}</p>
                                    </div>
                                    <div className="bg-amber-50 p-4 border-l-4 border-amber-600">
                                        <p className="font-bold text-amber-800 mb-2">{t.subalternStream}</p>
                                        <p className="text-sm">{t.subalternStreamText}<span className="underline italic">{t.subalternStreamHighlight}</span>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GRID: OTHER SCHOOLS */}
                <section className="max-w-6xl mx-auto mb-20 px-4">
                    <h2 className="marker-label text-center text-3xl mb-12 text-slate-500">{t.otherSchools}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Communalist */}
                        <div className="bg-white p-6 paper-border shadow-md transform -rotate-1 hover:rotate-0 transition-transform cursor-pointer border-t-4 border-t-red-500">
                            <h3 className="marker-label text-red-600 mb-3">{t.communalist}</h3>
                            <p className="body-handwritten text-sm leading-relaxed">
                                {t.communalistText}
                            </p>
                        </div>

                        {/* Cambridge School */}
                        <div className="bg-white p-6 paper-border shadow-md transform rotate-1 hover:rotate-0 transition-transform cursor-pointer border-t-4 border-t-indigo-500">
                            <h3 className="marker-label text-indigo-600 mb-1">{t.cambridge}</h3>
                            <p className="text-[10px] text-slate-400 font-bold mb-2">{t.cambridgeNames}</p>
                            <p className="body-handwritten text-sm leading-relaxed">
                                <span className="font-bold">{t.cambridgeBold}</span>{t.cambridgeText}
                            </p>
                        </div>

                        {/* Liberal/Neo-Liberal */}
                        <div className="bg-white p-6 paper-border shadow-md transform -rotate-1 hover:rotate-0 transition-transform cursor-pointer border-t-4 border-t-green-500">
                            <h3 className="marker-label text-green-600 mb-1">{t.liberal}</h3>
                            <p className="text-[10px] text-slate-400 mb-2 italic">{t.liberalNames}</p>
                            <p className="body-handwritten text-sm leading-relaxed">
                                <span className="font-bold">{t.liberalBold}</span>{t.liberalText}
                            </p>
                        </div>

                        {/* Feminist */}
                        <div className="bg-white p-6 paper-border shadow-md transform rotate-1 hover:rotate-0 transition-transform cursor-pointer border-t-4 border-t-pink-500">
                            <h3 className="marker-label text-pink-600 mb-1">{t.feminist}</h3>
                            <p className="text-[10px] text-slate-400 mb-2">{t.feministNames}</p>
                            <p className="body-handwritten text-sm leading-relaxed">
                                <span className="font-bold">{t.feministBold}</span>{t.feministText}
                            </p>
                            <p className="text-[10px] italic mt-2"><em>{t.feministWork}</em></p>
                        </div>
                    </div>
                </section>

                <div className="max-w-md mx-auto mb-20 text-center">
                    <div className="inline-block p-4 border-2 border-dashed border-slate-300 rounded-full">
                        <Feather className="w-8 h-8 text-slate-400 mx-auto" />
                    </div>
                    <p className="marker-label text-slate-400 mt-4 uppercase text-sm tracking-widest">{t.endNote}</p>
                </div>
            </div>
        </div>
    );
}
