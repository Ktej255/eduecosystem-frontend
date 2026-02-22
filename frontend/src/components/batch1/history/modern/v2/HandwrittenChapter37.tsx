"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguageStore } from '@/lib/language-store';
import { ch37 } from './translations/ch37';

export default function HandwrittenChapter37() {
    const { language } = useLanguageStore();
    const t = ch37[language as keyof typeof ch37] || ch37.en;

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
                <h1 className="text-center text-4xl md:text-6xl font-['Permanent_Marker'] text-[#CC0000] mb-4 ink-blot-title relative inline-block left-1/2 -translate-x-1/2 uppercase">
                    {t.title}
                </h1>
                <p className="text-center text-xl text-[#333] mb-12 font-bold opacity-70 italic underline">{t.subtitle}</p>
            </div>

            {t.sections.map((section, sIdx) => (
                <section key={sIdx} className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-white relative">
                    <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-[#000080] border-b-2 border-slate-100 pb-2">{section.title}</h2>
                    <div className="space-y-6">
                        {section.content && (section.content as any[]).map((item: any, iIdx: number) => (
                            <div key={iIdx} className="flex gap-2 items-start text-lg">
                                <span className="text-[#CC0000] mt-1">•</span>
                                <p>
                                    {item.highlight && <span className="font-bold highlight">{item.highlight}</span>}
                                    {item.text}
                                </p>
                            </div>
                        ))}
                        {(section as any).footer && (section as any).footer.map((f: string, fIdx: number) => (
                            <p key={fIdx} className="text-lg leading-relaxed">{f}</p>
                        ))}
                    </div>
                </section>
            ))}

            <div className="text-center font-['Just_Another_Hand'] text-2xl opacity-40 mt-20 mb-10 italic">
                {t.end}
            </div>
        </div>
    );
}
