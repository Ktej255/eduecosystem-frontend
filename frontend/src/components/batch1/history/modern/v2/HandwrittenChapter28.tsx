"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguageStore } from '@/lib/language-store';
import { ch28Translations } from './translations/ch28';

export default function HandwrittenChapter28() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch28Translations.hi : ch28Translations.en;

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

            {/* NATURE OF MOVEMENTS */}
            <section className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2 uppercase">{t.natureTitle}</h2>
                <div className="space-y-6">
                    <div className="flex gap-2 items-start text-lg">
                        <span className="text-[#CC0000] mt-1">•</span>
                        <p><span className="font-bold highlight uppercase text-xs mr-1">{t.reformistLabel}</span>{t.reformistDesc}</p>
                    </div>
                    <div className="flex gap-2 items-start text-lg">
                        <span className="text-[#CC0000] mt-1">•</span>
                        <p><span className="font-bold highlight uppercase text-xs mr-1">{t.revivalistLabel}</span>{t.revivalistDesc}</p>
                    </div>
                </div>
            </section>

            {/* KEY MOVEMENTS & LEADERS */}
            <section className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative text-gray-900">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2 uppercase">{t.keyMovementsTitle}</h2>
                <div className="space-y-6">

                    <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                        <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-tight">{t.brahmoSamajTitle}</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.brahmoSamajDesc1}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.brahmoSamajDesc2}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.brahmoSamajDesc3}</span></li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                        <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-tight">{t.prarthanaSamajTitle}</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.prarthanaSamajDesc1}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.prarthanaSamajDesc2}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.prarthanaSamajDesc3}</span></li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                        <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-tight">{t.aryaSamajTitle}</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.aryaSamajDesc1}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span className="font-bold underline text-red-900">{t.aryaSamajMotto}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.aryaSamajDesc2}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span className="font-bold italic">{t.aryaSamajBook}</span></li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                        <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-tight">{t.ramakrishnaMissionTitle}</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.ramakrishnaMissionDesc1}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.ramakrishnaMissionDesc2}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span className="font-bold bg-orange-100 px-1">{t.ramakrishnaMissionFocus}</span></li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                        <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-tight">{t.theosophicalSocietyTitle}</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.theosophicalSocietyDesc1}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.theosophicalSocietyDesc2}</span></li>
                            <li className="flex gap-2 items-start"><span className="text-slate-400 mt-1">→</span><span>{t.theosophicalSocietyDesc3}</span></li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                        <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-tight">{t.muslimReformsTitle}</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-2 items-start">
                                <span className="text-slate-400 mt-1">→</span>
                                <div>
                                    <strong className="block text-red-900 uppercase text-xs mb-1">{t.aligarhMovement}</strong>
                                    <span>{t.aligarhMovementDesc}</span>
                                </div>
                            </li>
                            <li className="flex gap-2 items-start">
                                <span className="text-slate-400 mt-1">→</span>
                                <div>
                                    <strong className="block text-red-900 uppercase text-xs mb-1">{t.deobandMovement}</strong>
                                    <span>{t.deobandMovementDesc}</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                        <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-tight">{t.sikhReformTitle}</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-2 items-start">
                                <span className="text-slate-400 mt-1">→</span>
                                <div>
                                    <strong className="block text-red-900 uppercase text-xs mb-1">{t.singhSabha}</strong>
                                    <span>{t.singhSabhaDesc}</span>
                                </div>
                            </li>
                            <li className="flex gap-2 items-start">
                                <span className="text-slate-400 mt-1">→</span>
                                <div>
                                    <strong className="block text-red-900 uppercase text-xs mb-1">{t.akaliMovement}</strong>
                                    <span>{t.akaliMovementDesc}</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50/30 p-4 paper-border border shadow-sm">
                        <h3 className="text-xl font-bold text-red-800 mb-2 uppercase tracking-tight">{t.parsiReformTitle}</h3>
                        <ul className="space-y-2">
                            <li className="flex gap-2 items-start">
                                <span className="text-slate-400 mt-1">→</span>
                                <div>
                                    <strong className="block text-red-900 uppercase text-xs mb-1">{t.rahnumaiMazdayasnan}</strong>
                                    <span>{t.rahnumaiMazdayasnanDesc}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* IMPACT SECTION */}
            <section className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative text-gray-900">
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2 uppercase">{t.impactTitle}</h2>
                <div className="space-y-4">
                    <div className="flex gap-2 items-start text-lg">
                        <span className="text-[#CC0000] mt-1">•</span>
                        <p>{t.impactItem1}</p>
                    </div>
                    <div className="flex gap-2 items-start text-lg">
                        <span className="text-[#CC0000] mt-1">•</span>
                        <p>{t.impactItem2}</p>
                    </div>
                    <div className="flex gap-2 items-start text-lg">
                        <span className="text-[#CC0000] mt-1">•</span>
                        <p>{t.impactItem3}</p>
                    </div>
                </div>
            </section>

            <div className="text-center font-['Just_Another_Hand'] text-2xl opacity-40 mt-20 mb-10 italic">
                {t.endOfNotes}
            </div>
        </div>
    );
}
