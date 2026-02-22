"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BookOpen as Book,
    Zap,
    Lightbulb,
    ShieldCheck,
    Users,
    Globe,
    Milestone,
    ClipboardList,
    GraduationCap,
    HeartHandshake,
    Flame,
    Quote,
    Search,
    PenTool as Quill,
    Link as LinkIcon,
    ArrowRightCircle,
    CheckCircle2,
    ShieldAlert,
    Clock,
    History
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguageStore } from '@/lib/language-store';
import { ch8Translations } from './translations/ch8';

export default function HandwrittenChapter8() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch8Translations.hi : ch8Translations.en;

    const [activeStream, setActiveStream] = useState<'reformist' | 'revivalist'>('reformist');

    return (
        <div className="min-h-screen bg-[#f8f5f0] p-4 md:p-8 font-['Merriweather',_serif] text-slate-900 selection:bg-orange-200 overflow-x-hidden">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Kalam:wght@400;700&family=Special+Elite&display=swap');
                
                .parchment-sheet {
                    background-color: #fdfaf6;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    border: 1px solid #e5e1da;
                    position: relative;
                }

                .lamp-glow {
                    box-shadow: 0 0 40px rgba(204, 119, 34, 0.2);
                }

                .scholar-font {
                    font-family: 'Playfair Display', serif;
                }

                .quill-header {
                    font-family: 'Kalam', cursive;
                    color: #4B3621;
                }

                .reform-blue { color: #4169E1; }
                .revival-saffron { color: #CC7722; }

                .lamp-animation:hover {
                    filter: drop-shadow(0 0 10px #CC7722);
                    transition: all 0.3s ease;
                }

                .bullet-quill::before {
                    content: '🪶';
                    margin-right: 8px;
                }

                .bullet-lotus::before {
                    content: '🪷';
                    margin-right: 8px;
                }

                .body-handwritten {
                    font-family: 'Kalam', cursive;
                    font-weight: 300;
                }

                .marker-yellow {
                    background-color: #fef08a;
                    padding: 0 4px;
                    border-radius: 2px;
                    font-weight: bold;
                }

                .paper-border {
                    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
                    border: 2px solid #333;
                }

                .stamp-intercepted {
                    font-family: 'Permanent Marker', cursive;
                    color: #2F4F4F;
                    border: 5px solid #2F4F4F;
                    padding: 4px 12px;
                    text-transform: uppercase;
                    transform: rotate(10deg);
                    opacity: 0.7;
                }
            `}</style>

            {/* HERO SECTION: THE SCHOLAR'S DESK */}
            <header className="max-w-6xl mx-auto pt-24 mb-20 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl transform -rotate-12 opacity-80 pointer-events-none">
                        🪔
                    </div>
                    <h1 className="scholar-font text-5xl md:text-8xl font-bold text-slate-800 mb-6 italic">
                        {t.heroTitle}
                    </h1>
                    <p className="text-xl md:text-3xl font-light tracking-widest text-[#4B3621] uppercase opacity-70">
                        {t.heroSubtitle}
                    </p>
                    <div className="flex justify-center gap-12 mt-12 text-4xl opacity-50">
                        <Quill className="w-12 h-12" /> <Book className="w-12 h-12" /> <Lightbulb className="w-12 h-12" />
                    </div>
                </motion.div>

                {/* MISSION STATEMENT CAROUSEL */}
                <div className="mt-20 max-w-4xl mx-auto p-12 bg-white/40 backdrop-blur-sm border-2 border-slate-200 rounded-[50px] shadow-2xl relative">
                    <Quote className="absolute -top-6 left-12 w-12 h-12 text-orange-200" />
                    <p className="scholar-font text-2xl italic leading-relaxed text-slate-700">
                        {t.heroQuote}
                    </p>
                    <p className="mt-4 scholar-font font-bold text-orange-800">{t.heroQuoteBy}</p>
                </div>
            </header>

            {/* SECTION 1: THE CONTEXT & CRITERIA */}
            <section className="max-w-7xl mx-auto mb-32 px-4 relative">
                <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                    <History className="w-96 h-96" />
                </div>

                <h2 className="text-4xl scholar-font font-bold mb-12 flex items-center gap-4 border-b-4 border-orange-100 pb-4">
                    <span className="lamp-animation">🪔</span> {t.criteriaTitle}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {t.criteriaCards.map((card, idx) => (
                        <Card key={idx} className={`parchment-sheet p-8 border-none ${idx === 1 ? 'transform rotate-1' : idx === 2 ? 'transform -rotate-1' : ''} hover:shadow-2xl transition-shadow`}>
                            <h3 className="text-2xl font-bold mb-4 text-orange-900 border-b border-orange-100 pb-2">{card.title}</h3>
                            <p className="leading-relaxed font-light">{card.text}</p>
                        </Card>
                    ))}
                </div>

                {/* THE TATTVABODHINI ROOT */}
                <div className="mt-16 bg-white p-10 border-4 border-dashed border-orange-200 rounded-[40px] shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Search className="w-32 h-32" />
                    </div>
                    <Badge className="bg-orange-800 mb-4">{t.intellectualRoot}</Badge>
                    <h3 className="text-3xl scholar-font font-bold mb-4">{t.tattvaTitle}</h3>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="body-handwritten text-xl leading-relaxed">
                            {t.tattvaText}
                        </div>
                        <div className="text-6xl grayscale opacity-20">📜</div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE TWO STREAMS (REFORMIST VS REVIVALIST) */}
            <section className="max-w-7xl mx-auto mb-32 px-4">
                <h2 className="text-4xl scholar-font font-bold text-center mb-16 uppercase tracking-[0.3em]">{t.dualTitle}</h2>

                <div className="flex flex-col lg:flex-row gap-8 min-h-[500px]">
                    {/* REFORMIST */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className={`flex-1 p-12 rounded-[60px] cursor-pointer transition-all duration-500 shadow-xl ${activeStream === 'reformist' ? 'bg-blue-900 text-white scale-105' : 'bg-blue-50 text-blue-900 opacity-60'}`}
                        onClick={() => setActiveStream('reformist')}
                    >
                        <h4 className="text-3xl font-bold scholar-font mb-6 flex items-center gap-3">
                            {t.reformistTitle} <ArrowRightCircle className="w-8 h-8" />
                        </h4>
                        <p className="text-lg italic mb-8 border-b border-blue-100/20 pb-4">
                            {t.reformistQuote}
                        </p>
                        <div className="space-y-6 text-sm">
                            {t.reformistItems.map((item, i) => (
                                <p key={i} className="bullet-quill"><strong>{item.bold}</strong>{item.text}</p>
                            ))}
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/20 mt-8">
                                <h5 className="font-bold mb-2 gold-text">{t.aligarhFact}</h5>
                                <p className="italic">{t.aligarhText}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* REVIVALIST */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className={`flex-1 p-12 rounded-[60px] cursor-pointer transition-all duration-500 shadow-xl ${activeStream === 'revivalist' ? 'bg-orange-800 text-white scale-105' : 'bg-orange-50 text-orange-900 opacity-60'}`}
                        onClick={() => setActiveStream('revivalist')}
                    >
                        <h4 className="text-3xl font-bold scholar-font mb-6 flex items-center gap-3">
                            {t.revivalistTitle} <ArrowRightCircle className="w-8 h-8" />
                        </h4>
                        <p className="text-lg italic mb-8 border-b border-orange-100/20 pb-4">
                            {t.revivalistQuote}
                        </p>
                        <div className="space-y-6 text-sm">
                            {t.revivalistItems.map((item, i) => (
                                <p key={i} className="bullet-quill"><strong>{item.bold}</strong>{item.text}</p>
                            ))}
                            <div className="p-4 bg-black/10 rounded-2xl border border-white/20 mt-8">
                                <h5 className="font-bold mb-2 gold-text">{t.deobandFact}</h5>
                                <p className="italic">{t.deobandText}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* RADICAL TREND: YOUNG BENGAL FIREBRAND */}
            <section className="max-w-5xl mx-auto mb-32 px-4">
                <div className="p-12 bg-slate-900 text-slate-100 rounded-[50px] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform">
                        <Flame className="w-48 h-48 text-orange-500" />
                    </div>
                    <h2 className="text-4xl scholar-font font-bold mb-8 text-orange-400">{t.youngBengalTitle}</h2>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <p className="text-2xl italic text-slate-300">{t.youngBengalQuote}</p>
                            <div className="body-handwritten text-xl leading-relaxed">
                                {t.youngBengalText}
                            </div>
                            <div className="flex gap-4">
                                <Badge className="bg-red-900">{t.radicalBadge}</Badge>
                                <Badge className="bg-slate-700">{t.deroziansBadge}</Badge>
                            </div>
                        </div>
                        <div className="w-full md:w-64 p-6 bg-white/10 border border-white/20 rounded-3xl text-center">
                            <h4 className="font-bold mb-2">{t.failureNote}</h4>
                            <p className="text-sm italic opacity-70">{t.failureText}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: FIGHT FOR BETTERMENT OF WOMEN (PROGRESS TIMELINE) */}
            <section className="max-w-7xl mx-auto mb-32 px-4">
                <h2 className="text-4xl scholar-font font-bold mb-16 flex items-center gap-4">
                    <Lightbulb className="w-10 h-10 text-orange-400" /> {t.womenTitle}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t.womenTimeline.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 border-2 border-slate-100 rounded-3xl hover:border-orange-200 hover:shadow-lg transition-all relative">
                            <div className="text-3xl mb-4">{item.icon}</div>
                            <h4 className="text-xl font-bold scholar-font text-orange-900 flex justify-between">
                                {item.title}
                                <span className="bg-orange-50 text-orange-800 text-xs px-2 py-1 rounded-full font-sans">{item.year}</span>
                            </h4>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600 italic">
                                {item.desc}
                            </p>
                            {idx === 6 && (
                                <div className="mt-4 p-2 bg-red-50 border border-red-100 rounded text-[10px] text-red-900 font-bold uppercase">
                                    {t.tilakNuance}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* WOMEN-LED ORGANIZATIONS */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="parchment-sheet p-8 border-l-8 border-l-orange-800">
                        <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            {t.bharatStreeTitle}
                        </h4>
                        <p className="body-handwritten text-lg leading-relaxed">
                            {t.bharatStreeText}
                        </p>
                    </Card>
                    <Card className="parchment-sheet p-8 border-l-8 border-l-blue-800">
                        <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            {t.panditaTitle}
                        </h4>
                        <p className="body-handwritten text-lg leading-relaxed">
                            {t.panditaText}
                        </p>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: WESTERN & SOUTH INDIAN REFORMERS (REGIONAL FOCUS) */}
            <section className="max-w-7xl mx-auto mb-32 px-4">
                <h2 className="text-4xl scholar-font font-bold mb-16 text-center underline decoration-orange-200 decoration-8 underline-offset-8">{t.regionalTitle}</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* MAHARASHTRA CLUSTER */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <ShieldCheck className="w-12 h-12 text-orange-800" />
                            <h3 className="text-3xl font-bold scholar-font uppercase tracking-wider">{t.maharashtra}</h3>
                        </div>

                        <Card className="parchment-sheet p-8 hover:scale-[1.02] transition-transform">
                            <h4 className="text-2xl font-bold text-orange-900 border-b pb-2 mb-4">{t.phuleTitle}</h4>
                            <p className="body-handwritten text-xl leading-relaxed">
                                {t.phuleText}
                            </p>
                            <Badge className="mt-4 bg-orange-800">{t.phuleBadge}</Badge>
                        </Card>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-white border border-slate-100 rounded-3xl">
                                <h5 className="font-bold text-sm mb-2 text-slate-400 uppercase">{t.lokhitwadi}</h5>
                                <p className="body-handwritten text-lg">{t.lokhitwadiText}</p>
                            </div>
                            <div className="p-6 bg-white border border-slate-100 rounded-3xl">
                                <h5 className="font-bold text-sm mb-2 text-slate-400 uppercase">{t.rationalist}</h5>
                                <p className="body-handwritten text-lg">{t.rationalistText}</p>
                            </div>
                        </div>
                    </div>

                    {/* SOUTH INDIA CLUSTER */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <Globe className="w-12 h-12 text-blue-800" />
                            <h3 className="text-3xl font-bold scholar-font uppercase tracking-wider">{t.southIndia}</h3>
                        </div>

                        <Card className="p-8 bg-blue-900 text-white rounded-[50px] shadow-2xl relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 opacity-10 rotate-12"><Users className="w-40 h-48" /></div>
                            <h4 className="text-3xl font-bold mb-4 scholar-font">{t.narayanaTitle}</h4>
                            <p className="text-2xl italic text-blue-200 mb-6">{t.narayanaQuote}</p>
                            <div className="space-y-4 text-sm body-handwritten">
                                {t.narayanaItems.map((item, i) => (
                                    <p key={i}>• {item}</p>
                                ))}
                            </div>
                        </Card>

                        <Card className="parchment-sheet p-8">
                            <h4 className="text-2xl font-bold text-blue-900 border-b pb-2 mb-4 flex justify-between">
                                {t.veeresalingam}
                                <span className="text-xs font-sans bg-blue-50 text-blue-900 px-2 flex items-center rounded-3xl uppercase tracking-tighter">{t.veeresalingamRegion}</span>
                            </h4>
                            <p className="body-handwritten text-lg leading-relaxed italic">
                                {t.veeresalingamText}
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* TEMPLE ENTRY SECTION (DIRECT ACTION) */}
            <section className="max-w-6xl mx-auto mb-32 bg-[#4B3621] text-[#f8f5f0] p-16 rounded-[100px] relative overflow-hidden">
                <div className="absolute top-0 left-0 p-10 opacity-5"><Milestone className="w-32 h-32" /></div>
                <h2 className="text-4xl scholar-font font-bold mb-12 text-center text-orange-200">{t.templeTitle}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="bg-orange-200 text-orange-900 p-3 rounded-full font-bold">1924</div>
                            <div>
                                <h4 className="text-2xl font-bold">{t.vaikomTitle}</h4>
                                <p className="body-handwritten opacity-80 mt-2">{t.vaikomText}</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="bg-orange-200 text-orange-900 p-3 rounded-full font-bold">1931</div>
                            <div>
                                <h4 className="text-2xl font-bold">{t.guruvayurTitle}</h4>
                                <p className="body-handwritten opacity-80 mt-2">{t.guruvayurText}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 p-8 border-2 border-dashed border-orange-200/20 rounded-[40px] flex items-center justify-center text-center">
                        <div>
                            <ShieldAlert className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                            <h4 className="text-xl font-bold mb-2">{t.breastClothTitle}</h4>
                            <p className="text-sm italic opacity-70">{t.breastClothText}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* MINORITY MOVEMENT CARDS (PARSI, SIKH, AHMADIYYA) */}
            <section className="max-w-7xl mx-auto mb-32 px-4">
                <h2 className="text-4xl scholar-font font-bold mb-16 flex items-center gap-4">
                    <Globe className="w-10 h-10 text-orange-400" /> {t.minorityTitle}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* PARSI */}
                    <Card className="parchment-sheet p-8 border-t-8 border-t-yellow-600">
                        <h4 className="text-xl font-bold mb-4">{t.parsiTitle}</h4>
                        <ul className="text-sm body-handwritten space-y-2">
                            {t.parsiItems.map((item, i) => (
                                <li key={i}>• {item}</li>
                            ))}
                        </ul>
                    </Card>

                    {/* SIKH */}
                    <Card className="parchment-sheet p-8 border-t-8 border-t-indigo-600">
                        <h4 className="text-xl font-bold mb-4">{t.sikhTitle}</h4>
                        <ul className="text-sm body-handwritten space-y-2">
                            {t.sikhItems.map((item, i) => (
                                <li key={i}>• {item}</li>
                            ))}
                        </ul>
                    </Card>

                    {/* AHMADIYYA */}
                    <Card className="parchment-sheet p-8 border-t-8 border-t-emerald-600">
                        <h4 className="text-xl font-bold mb-4">{t.ahmadiyyaTitle}</h4>
                        <ul className="text-sm body-handwritten space-y-2">
                            {t.ahmadiyyaItems.map((item, i) => (
                                <li key={i}>• {item}</li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </section>

            {/* THE ORTHODOX BACKLASH */}
            <section className="max-w-4xl mx-auto mb-32 px-4">
                <div className="bg-red-50 p-10 paper-border border-4 border-red-900/30 rounded-3xl relative">
                    <div className="absolute top-2 right-2 stamp-intercepted text-[8px] text-red-900 border-red-900">{t.orthodoxStamp}</div>
                    <h3 className="text-2xl font-bold text-red-900 scholar-font mb-4">{t.orthodoxTitle}</h3>
                    <p className="body-handwritten text-lg leading-relaxed italic">
                        {t.orthodoxText}
                    </p>
                    <p className="text-[10px] mt-4 font-bold uppercase tracking-widest text-red-400">{t.orthodoxFooter}</p>
                </div>
            </section>

            {/* SECTION 5: SIGNIFICANCE & INSTITUTIONS */}
            <section className="max-w-7xl mx-auto mb-32 px-4">
                <h2 className="text-4xl scholar-font font-bold mb-16 flex items-center gap-4">
                    <ClipboardList className="w-10 h-10 text-orange-400" /> {t.institutionalTitle}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* GOKHALE */}
                    <div className="p-8 bg-white border border-slate-100 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform"><ShieldCheck className="w-24 h-24" /></div>
                        <h4 className="text-xl font-bold mb-4">{t.gokhaleTitle}</h4>
                        <p className="body-handwritten italic mb-4">{t.gokhaleText}</p>
                        <Badge variant="outline">{t.gokhaleBadge}</Badge>
                    </div>

                    {/* SOCIAL CONFERENCE */}
                    <div className="p-8 bg-white border border-slate-100 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform"><HeartHandshake className="w-24 h-24" /></div>
                        <h4 className="text-xl font-bold mb-4">{t.socialTitle}</h4>
                        <p className="body-handwritten italic mb-4">{t.socialText}</p>
                        <Badge variant="outline">{t.socialBadge}</Badge>
                    </div>

                    {/* ANNIE BESANT */}
                    <div className="p-8 bg-white border border-slate-100 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform"><Globe className="w-24 h-24" /></div>
                        <h4 className="text-xl font-bold mb-4 italic">{t.besantTitle}</h4>
                        <p className="body-handwritten italic mb-4">{t.besantText}</p>
                        <Badge variant="outline">{t.besantBadge}</Badge>
                    </div>
                </div>
            </section>

            {/* FOOTER: THE LAMP OF KNOWLEDGE */}
            <footer className="max-w-5xl mx-auto pb-32 text-center relative">
                <div className="h-px bg-slate-200 w-full mb-20"></div>

                <div className="relative inline-block px-12 py-6 border-y-2 border-slate-100">
                    <p className="scholar-font text-3xl font-bold italic text-slate-400">
                        {t.footerQuote}
                    </p>
                </div>

                <div className="mt-20 flex flex-col items-center group opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500">🪔</div>
                    <p className="text-xs uppercase tracking-[0.5em] font-bold">{t.footerLabel}</p>
                    <p className="mt-2 text-[10px] scholar-font italic">{t.footerSubtext}</p>
                </div>

                {/* THEMATIC QUILL DECORATION */}
                <div className="absolute -bottom-10 right-0 opacity-10 rotate-45 pointer-events-none">
                    <Quill className="w-64 h-64" />
                </div>
            </footer>
        </div>
    );
}
