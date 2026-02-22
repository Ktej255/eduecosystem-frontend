"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguageStore } from '@/lib/language-store';
import { ch27Translations } from './translations/ch27';

export default function HandwrittenChapter27() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch27Translations.hi : ch27Translations.en;

    return (
        <div className="min-h-screen bg-[#fdfbf7] p-4 md:p-8 font-['Kalam',_cursive] text-[#000080] selection:bg-yellow-200">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Permanent+Marker&display=swap');
                
                .handwritten-paper {
                    background-image: repeating-linear-gradient(transparent, transparent 31px, #e5e5f7 31px, #e5e5f7 32px);
                    background-attachment: local;
                }
                
                .paper-border {
                    border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
                    border: 2px solid #333;
                }

                .highlight {
                    background: linear-gradient(100deg, rgba(255,255,0,0) 0%, rgba(255,255,0,0.4) 3%, rgba(255,255,0,0.2) 100%);
                    display: inline;
                    padding: 0 4px;
                }
                
                .ink-blot-title::after {
                    content: "";
                    display: block;
                    width: 30px;
                    height: 30px;
                    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000080' d='M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-17.9,86.9,-2.9C83.7,12.2,74.6,26.7,64.2,38.8C53.8,50.9,42.2,60.6,29.3,66.4C16.4,72.2,2.2,74.1,-10.8,71.8C-23.8,69.5,-35.6,63,-46.6,55.2C-57.6,47.4,-67.8,38.3,-74.6,27.1C-81.4,15.9,-84.8,2.6,-82.1,-9.3C-79.4,-21.2,-70.6,-31.7,-60.7,-40.3C-50.8,-48.9,-39.8,-55.6,-28.4,-64.5C-17,-73.4,-5.2,-84.5,4.9,-83.4C15,-82.3,30,-69,44.7,-76.4Z' transform='translate(100 100)' /%3E%3C/svg%3E") no-repeat center;
                    opacity: 0.3;
                    position: absolute;
                    top: -10px;
                    right: -10px;
                    pointer-events: none;
                }
            `}</style>

            <div className="max-w-5xl mx-auto mb-16 relative pt-12">
                <h1 className="text-center text-4xl md:text-6xl font-['Permanent_Marker'] text-[#CC0000] mb-4 ink-blot-title relative inline-block left-1/2 -translate-x-1/2 uppercase leading-tight">
                    {t.headerTitle}
                </h1>
                <p className="text-center text-xl text-[#333] mb-12 font-bold opacity-70 italic underline uppercase">{t.studyNotesLabel}</p>
            </div>

            {/* ARCHITECTURE SECTION */}
            <section className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2 uppercase">{t.architectureTitle}</h2>
                <div className="space-y-6">
                    <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                        <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-tight">{t.indoSaracenicTitle}</h3>
                        <ul className="space-y-3">
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.indoSaracenicDesc}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold uppercase text-xs mr-1">{t.purposeLabel}</span>{t.purposeDesc}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span className="font-bold uppercase tracking-widest text-xs text-gray-500">{t.keyExamplesLabel}</span></li>
                            <li className="pl-6 space-y-2">
                                <p className="text-lg leading-relaxed shrink-0"><strong>{t.victoriaMemorial}</strong> {t.victoriaMemorialDesc}</p>
                                <p className="text-lg leading-relaxed shrink-0"><strong>{t.cstMumbai}</strong> {t.cstMumbaiDesc}</p>
                                <p className="text-lg leading-relaxed shrink-0"><strong>{t.gatewayOfIndia}</strong> {t.gatewayOfIndiaDesc}</p>
                                <p className="text-lg leading-relaxed shrink-0"><strong>{t.madrasHighCourt}</strong> {t.madrasHighCourtDesc}</p>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                        <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-tight">{t.lutyensDelhiTitle}</h3>
                        <ul className="space-y-3">
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.lutyensDelhiDesc}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold uppercase text-xs mr-1">{t.styleLabel}</span>{t.styleDesc}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold uppercase text-xs mr-1">{t.keyBuildingsLabel}</span>{t.keyBuildingsDesc}</span></li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                        <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-tight">{t.artDecoTitle}</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.artDecoDesc}</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* ART & PAINTING SECTION */}
            <section className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2 uppercase">{t.artSectionTitle}</h2>
                <div className="space-y-6">
                    <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                        <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-tight">{t.companySchoolTitle}</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.companySchoolDesc}</span></li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                        <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-tight">{t.rajaRaviVarmaTitle}</h3>
                        <ul className="space-y-3">
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.rajaRaviVarmaDesc1}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.rajaRaviVarmaDesc2}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.rajaRaviVarmaDesc3}</span></li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                        <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-tight">{t.bengalSchoolTitle}</h3>
                        <ul className="space-y-3">
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.bengalSchoolDesc1}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.bengalSchoolDesc2}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold uppercase text-xs mr-1">{t.styleLabel}</span>{t.bengalSchoolStyleDesc}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold uppercase text-xs mr-1">{t.keyArtistsLabel}</span>{t.keyArtistsDesc}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><span className="font-bold uppercase text-xs mr-1">{t.famousWorkLabel}</span>{t.famousWorkDesc}</span></li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                        <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-tight">{t.modernistsTitle}</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><strong>{t.amritaSherGil}</strong> {t.amritaSherGilDesc}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><strong>{t.jaminiRoy}</strong> {t.jaminiRoyDesc}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span><strong>{t.progressiveArtistsGroup}</strong> {t.progressiveArtistsGroupDesc}</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="text-center font-['Just_Another_Hand'] text-2xl opacity-40 mt-20 mb-10 italic">
                {t.endOfNotes}
            </div>
        </div>
    );
}
