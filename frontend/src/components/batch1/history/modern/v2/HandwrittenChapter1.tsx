"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguageStore } from '@/lib/language-store';
import { ch1Translations } from './translations/ch1';

export default function HandwrittenChapter1() {
    const { language } = useLanguageStore();
    const t = language === 'hi' ? ch1Translations.hi : ch1Translations.en;

    return (
        <div className="min-h-screen bg-paper p-4 md:p-8 font-['Kalam',_cursive] text-paper-navy selection:bg-yellow-200">
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Permanent+Marker&display=swap');
        
        .handwritten-paper {
          background-image: repeating-linear-gradient(transparent, transparent 31px, var(--paper-line) 31px, var(--paper-line) 32px);
          background-attachment: local;
        }
        
        .sticky-note {
          box-shadow: 2px 3px 10px rgba(0,0,0,0.1);
          transform: rotate(-1deg);
          border: 1px solid var(--paper-line);
        }
        
        .sticky-note-pink { background-color: var(--sticky-pink); }
        .sticky-note-yellow { background-color: var(--sticky-yellow); }
        
        .highlight {
          background: linear-gradient(100deg, rgba(255,255,0,0) 0%, var(--highlight-yellow) 3%, var(--highlight-yellow) 100%);
          display: inline;
          padding: 0 4px;
        }
        
        .paper-border {
          border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
          border: 2px solid var(--paper-border);
        }

        .ink-blot::after {
            content: "";
            display: block;
            width: 30px;
            height: 30px;
            background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000080' d='M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-17.9,86.9,-2.9C83.7,12.2,74.6,26.7,64.2,38.8C53.8,50.9,42.2,60.6,29.3,66.4C16.4,72.2,2.2,74.1,-10.8,71.8C-23.8,69.5,-35.6,63,-46.6,55.2C-57.6,47.4,-67.8,38.3,-74.6,27.1C-81.4,15.9,-84.8,2.6,-82.1,-9.3C-79.4,-21.2,-70.6,-31.7,-60.7,-40.3C-50.8,-48.9,-39.8,-55.6,-28.4,-64.5C-17,-73.4,-5.2,-84.5,4.9,-83.4C15,-82.3,30,-69,44.7,-76.4Z' transform='translate(100 100)' /%3E%3C/svg%3E") no-repeat center;
            opacity: 0.6;
            position: absolute;
            top: -10px;
            right: -10px;
            pointer-events: none;
        }
      `}</style>

            {/* Hero Section: Mind Map */}
            <div className="max-w-5xl mx-auto mb-16 relative">
                <h1 className="text-center text-4xl md:text-6xl font-['Permanent_Marker'] text-paper-red mb-2 ink-blot relative inline-block left-1/2 -translate-x-1/2">
                    {t.heroTitle}
                </h1>
                <p className="text-center text-xl text-paper-gray mb-12 font-bold opacity-80">{t.heroSubtitle}</p>

                {/* Simple CSS Mind Map visualization */}
                <div className="flex flex-wrap justify-center gap-6 relative">
                    <div className="bg-paper p-6 paper-border border-2 border-dashed border-muted-foreground absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-40 h-40 flex items-center justify-center shadow-lg transform rotate-2">
                        <span className="text-2xl font-bold">{t.sourcesCenter}</span>
                    </div>
                    {/* Branches */}
                    {t.mindMapBranches.map((item, i) => (
                        <div key={i} className={`p-4 ${i % 2 === 0 ? 'bg-sticky-yellow' : 'bg-sticky-pink'} paper-border border shadow-sm w-48 text-center font-bold text-lg transform rotate-${(i * 45) % 10 - 5} m-4 mt-20`}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* SECTION 2: ARCHIVAL MATERIALS */}
            <section className="max-w-4xl mx-auto mb-12 handwritten-paper p-8 paper-border bg-paper relative">
                <div className="absolute top-0 right-0 p-4 transform rotate-3">
                    <span className="text-paper-red font-bold block border-2 border-paper-red p-1 rounded px-3 text-sm">{t.s2Important}</span>
                </div>
                <h2 className="text-3xl font-bold font-['Permanent_Marker'] mb-6 text-paper-navy">{t.s2Title}</h2>
                <p className="text-lg leading-relaxed mb-4">
                    <span className="font-bold bg-yellow-200 px-1">{t.s2DefinitionLabel}</span> {t.s2Definition}
                </p>
                <ul className="list-disc pl-6 space-y-2 text-lg">
                    {t.s2Points.map((point, i) => (
                        <li key={i}>
                            <strong className={i < 2 ? "text-paper-red" : ""}>{point.bold}</strong> {point.text}
                            {point.note && <span className="text-paper-gray text-sm opacity-80"> {point.note}</span>}
                        </li>
                    ))}
                </ul>

                {/* Published Archives */}
                <div className="mt-8 bg-sticky-yellow p-6 sticky-note border border-paper-border w-3/4 mx-auto relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-paper-red opacity-10"></div>
                    <h3 className="text-xl font-bold text-paper-red mb-2 border-b border-paper-border pb-1">{t.s2PublishedTitle}</h3>
                    <ul className="text-sm space-y-1">
                        {t.s2Published.map((item, i) => (
                            <li key={i}>• <strong>{item.bold}</strong> {item.text}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* SECTION 3: THE ARCHIVES OF INDIA */}
            <section className="max-w-6xl mx-auto mb-16">
                <h2 className="text-3xl font-['Permanent_Marker'] text-center mb-8 text-paper-navy">{t.s3Title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* State Archives */}
                    <div className="bg-paper p-6 paper-border shadow-md transform -rotate-1">
                        <h3 className="text-xl font-bold text-paper-red mb-4 border-b-2 border-dotted border-red-300">{t.s3StateTitle}</h3>
                        <ul className="space-y-3 text-sm">
                            {t.s3State.map((item, i) => (
                                <li key={i}><strong>{item.bold}</strong> {item.text}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Presidencies */}
                    <div className="bg-paper p-6 paper-border shadow-md transform rotate-1">
                        <h3 className="text-xl font-bold text-paper-navy mb-4 border-b-2 border-dotted border-blue-300">{t.s3PresidenciesTitle}</h3>
                        <ul className="space-y-3 text-sm">
                            {t.s3Presidencies.map((item, i) => (
                                <li key={i}><strong>{item.bold}</strong> {item.text}</li>
                            ))}
                        </ul>
                    </div>

                    {/* European */}
                    <div className="bg-paper p-6 paper-border shadow-md transform -rotate-1">
                        <h3 className="text-xl font-bold text-accent-green mb-4 border-b-2 border-dotted border-green-300">{t.s3EuropeanTitle}</h3>
                        <ul className="space-y-3 text-sm">
                            {t.s3European.map((item, i) => (
                                <li key={i}>
                                    <strong>{item.bold}</strong> {item.text}
                                    {item.highlight && <> <span className="highlight">{item.highlight}</span>.</>}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Intermediate */}
                    <div className="bg-sticky-yellow p-6 paper-border shadow-md transform rotate-2">
                        <h3 className="text-xl font-bold text-paper-red mb-4 border-b-2 border-dotted border-orange-300">{t.s3IntermediateTitle}</h3>
                        <p className="text-sm font-bold mb-2">{t.s3IntermediateSubtitle}</p>
                        <p className="text-xs italic">{t.s3IntermediateWhy}</p>
                        <p className="text-xs">{t.s3IntermediateAnswer}</p>
                    </div>
                </div>
            </section>

            {/* SECTION 4 & 5 Combined: Judicial, Private & Travelers */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                {/* SECTION 4 */}
                <section className="bg-paper paper-border p-6 relative">
                    <h2 className="text-2xl font-['Permanent_Marker'] mb-4">{t.s4Title}</h2>
                    <div className="space-y-4">
                        <div className="p-3 bg-sticky-yellow/10 border-l-4 border-paper-navy">
                            <strong className="block text-lg">{t.s4JudicialTitle}</strong>
                            {t.s4JudicialText}
                            <br /><span className="text-sm text-paper-gray opacity-70">{t.s4JudicialNote}</span>
                        </div>
                        <div className="p-3 bg-sticky-pink/10 border-l-4 border-accent-green">
                            <strong className="block text-lg">{t.s4PrivateTitle}</strong>
                            {t.s4PrivateText}
                            <br /><strong>UK:</strong> {t.s4PrivateUK}
                            <br /><strong>{language === 'hi' ? 'पाकिस्तान:' : 'Pakistan:'}</strong> {t.s4PrivatePak}
                        </div>
                    </div>
                </section>

                {/* SECTION 5: Travelers */}
                <section className="bg-paper paper-border p-6 relative">
                    <h2 className="text-2xl font-['Permanent_Marker'] mb-4">{t.s5Title}</h2>
                    <p className="mb-2 text-sm italic">{t.s5Subtitle}</p>
                    <div className="border border-paper-border rounded p-4 bg-paper/50">
                        <ul className="grid grid-cols-1 gap-2 text-sm">
                            {t.s5Travelers.map((name, i) => (
                                <li key={i}>• <strong>{name}</strong></li>
                            ))}
                            {t.s5ExtraTravelers.map((name, i) => (
                                <li key={`extra-${i}`} className="text-paper-navy font-bold">• {name}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>

            {/* SECTION 6: NEWSPAPERS (The Table) */}
            <section className="max-w-5xl mx-auto mb-16">
                <h2 className="text-3xl font-['Permanent_Marker']  mb-6 text-[#000080]">{t.s6Title}</h2>

                <div className="overflow-x-auto paper-border p-2 bg-card">
                    <table className="w-full text-left text-sm md:text-base border-collapse">
                        <thead>
                            <tr className="border-b-2 border-black">
                                {t.s6TableHeaders.map((header, i) => (
                                    <th key={i} className="p-3 bg-muted/30">{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {t.s6Newspapers.map((row, i) => (
                                <tr key={i} className="border-b border-paper-border hover:bg-sticky-yellow/30">
                                    <td className="p-3 font-bold">{row[0]}</td>
                                    <td className="p-3">{row[1]}</td>
                                    <td className="p-3 italic max-w-xs">{row[2]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Revolutionary & Socialist */}
                <div className="mt-8 flex flex-col md:flex-row gap-6 relative">
                    <div className="w-full bg-sticky-pink/10 paper-border p-6 relative">
                        <div className="absolute -top-4 left-10 w-4 h-12 bg-muted-foreground rounded-full opacity-50 transform rotate-12"></div>
                        <h3 className="text-xl font-bold text-paper-red mb-4">{t.s6RevolutionTitle}</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                                <strong className="block text-red-700 border-b border-red-200 mb-2">{t.s6RevolutionaryTitle}</strong>
                                <ul className="list-square pl-4 space-y-1">
                                    {t.s6Revolutionary.map((item, i) => (
                                        <li key={i}><strong>{item.bold}</strong> {item.text}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <strong className="block text-red-700 border-b border-red-200 mb-2">{t.s6SocialistTitle}</strong>
                                <ul className="list-square pl-4 space-y-1">
                                    {t.s6Socialist.map((item, i) => (
                                        <li key={i}><strong>{item.bold}</strong> {item.text}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <strong className="block text-red-700 border-b border-red-200 mb-2">{t.s6DalitTitle}</strong>
                                <ul className="list-square pl-4 space-y-1">
                                    {t.s6Dalit.map((item, i) => (
                                        <li key={i}><strong>{item.bold}</strong> {item.text}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: LITERATURE & PAINTING */}
            <section className="bg-paper paper-border p-8 max-w-4xl mx-auto mb-16 shadow-lg">
                <h2 className="text-3xl font-['Permanent_Marker'] mb-8 text-paper-navy text-center">{t.s7Title}</h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            {t.s7NovelTitle}
                        </h3>
                        <ul className="space-y-3 leading-relaxed">
                            {t.s7Novels.map((item, i) => (
                                <li key={i}><strong>{item.bold}</strong> <em>{item.text}</em></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            {t.s7PaintingTitle}
                        </h3>
                        <ul className="space-y-3 leading-relaxed">
                            {t.s7Paintings.map((item, i) => (
                                <li key={i}>
                                    <strong className={i === 3 ? "text-purple-800" : ""}>{item.bold}</strong>
                                    {item.text && <> {item.text}</>}
                                    {item.sub && (
                                        <>
                                            {item.sub.map((s, j) => (
                                                <span key={j} className="text-sm pl-4 block">- <em>{s}</em></span>
                                            ))}
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE CHRONOLOGY TIMELINE */}
            <section className="max-w-3xl mx-auto relative mb-20 pl-8">
                <h2 className="text-3xl font-['Permanent_Marker'] mb-10 text-center">{t.timelineTitle}</h2>
                <div className="absolute left-8 top-20 bottom-0 w-1 bg-gradient-to-b from-paper-navy to-transparent"></div>

                {t.timeline.map((item, i) => (
                    <div key={i} className="mb-8 relative pl-8">
                        <div className="absolute left-6 top-2 w-5 h-5 bg-paper border-4 border-paper-navy rounded-full transform -translate-x-1/2"></div>
                        <div className="bg-paper p-4 paper-border shadow-sm inline-block transform hover:scale-105 transition-transform duration-300">
                            <span className="text-2xl font-bold text-paper-red font-['Permanent_Marker'] block">{item.year}</span>
                            <span className="text-lg text-paper-navy font-bold">{item.event}</span>
                        </div>
                    </div>
                ))}
            </section>

            <div className="text-center font-['Just_Another_Hand'] text-2xl opacity-50 mt-20">
                {t.endNote}
            </div>
        </div>
    );
}
