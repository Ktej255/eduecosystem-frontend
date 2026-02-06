"use client";

import React, { useRef, useState } from "react";
import {
    Scroll,
    Crown,
    Landmark,
    Gavel,
    Shield,
    Ban,
    Users,
    ArrowRight,
    Map,
    ArrowDown,
    CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface HistoryModuleProps {
    onComplete: () => void;
    isCompleted: boolean;
}

const HistoryModule = ({ onComplete, isCompleted }: HistoryModuleProps) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Payload content
    const cardsData = [
        {
            id: 1,
            tag: "Chronology",
            title: "The Roots / जड़ें (1608 - 1947)",
            theme: "border-green-600/30",
            ink: "text-slate-800",
            accent: "text-green-700",
            content: [
                { year: "1608", text: "British come as Traders (EIC).", icon: null },
                { year: "1765", text: "Got 'Diwani' Rights (Revenue/Civil Justice) for Bengal, Bihar, Orissa.", icon: <Scroll className="w-4 h-4 text-amber-700" /> },
                { year: "1858", text: "Sepoy Mutiny -> Crown Rule begins.", icon: <Crown className="w-4 h-4 text-purple-700" /> },
                { year: "1947", text: "Independence -> Need for Constitution.", icon: null }
            ],
            concept: "The Legal Framework",
            conceptDesc: "British laws influenced our Constitution."
        },
        {
            id: 2,
            tag: "Centralization Step 1",
            title: "Regulating Act, 1773 (विनियमन अधिनियम)",
            theme: "border-blue-600/30",
            ink: "text-slate-900",
            accent: "text-blue-700",
            importance: [
                "First step to Control EIC affairs.",
                "Recognized Political functions.",
                "Laid foundation of Central Administration."
            ],
            features: [
                { label: "Governor", text: "Gov of Bengal -> Governor-General of Bengal (Warren Hastings). Council of 4.", icon: <Landmark className="w-4 h-4 text-blue-600" /> },
                { label: "Centralization", text: "Bombay & Madras made subordinate to Bengal.", icon: <ArrowDown className="w-4 h-4 text-red-600" /> },
                { label: "Judiciary", text: "Supreme Court established at Calcutta (1774) (1 CJ + 3 Judges).", icon: <Gavel className="w-4 h-4 text-slate-700" /> },
                { label: "Anti-Corruption", text: "No private trade or bribes from natives.", icon: <Ban className="w-4 h-4 text-red-600" /> }
            ]
        },
        {
            id: 3,
            tag: "Supreme Court Limits",
            title: "Act of Settlement, 1781 (संशोधन अधिनियम)",
            theme: "border-red-600/30",
            ink: "text-slate-800",
            accent: "text-red-700",
            purpose: "To rectify defects of 1773 Act.",
            features: [
                { label: "Exemption", text: "Governor-General & Council exempted from Supreme Court jurisdiction for official acts.", icon: <Shield className="w-4 h-4 text-emerald-600" /> },
                { label: "Revenue", text: "Revenue matters excluded from SC jurisdiction.", icon: null },
                { label: "Personal Law", text: "Hindus tried by Hindu Law, Muslims by Mohammedan Law.", icon: <Users className="w-4 h-4 text-indigo-600" /> },
                { label: "Appeals", text: "Provincial Courts appeal to Governor-General-in-Council (NOT Supreme Court).", icon: null }
            ]
        }
    ];

    return (
        <div className="w-full bg-[#f3f4f6] dark:bg-[#0a0a0a] min-h-[600px] p-6 lg:p-10 font-[family-name:var(--font-kalam)]">

            {/* Header */}
            <div className="mb-6 flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 relative inline-block">
                        Historical Background
                        <span className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400/60 rounded-full transform -rotate-1"></span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">Swipe through the revision notes
                        <ArrowRight className="inline ml-2 w-4 h-4 animate-bounce-x" />
                    </p>
                </div>

                {isCompleted && (
                    <div className="hidden md:flex items-center gap-2 text-green-600 bg-green-100 px-4 py-2 rounded-full transform rotate-2 shadow-sm border border-green-200">
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="font-bold">Chapter Done!</span>
                    </div>
                )}
            </div>

            {/* Horizontal Scroll Deck */}
            <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-12 pt-4 px-2 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollBehavior: 'smooth' }}
            >
                {cardsData.map((card, index) => {
                    // Random rotation for organic feel (-1 to 1 deg)
                    const rotate = Math.random() * 2 - 1;

                    return (
                        <div
                            key={card.id}
                            className={`
                snap-center shrink-0 w-full md:w-[600px] min-h-[500px] 
                bg-[#fef3c7] relative shadow-xl rounded-sm 
                transform transition-transform hover:scale-[1.005] duration-300
                border border-gray-300
              `}
                            style={{ transform: `rotate(${rotate}deg)` }}
                        >
                            {/* Notebook Holes */}
                            <div className="absolute left-4 top-0 bottom-0 w-8 border-r border-red-300/30 flex flex-col justify-evenly py-4 z-10">
                                {[...Array(12)].map((_, i) => (
                                    <div key={i} className="w-3 h-3 rounded-full bg-gray-800/10 mb-8 mx-auto shadow-inner"></div>
                                ))}
                            </div>

                            {/* Card Content Container */}
                            <div className="pl-16 pr-8 py-10 h-full relative">
                                {/* Paper Lines Texture */}
                                <div className="absolute inset-0 pointer-events-none opacity-10"
                                    style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px)', backgroundSize: '100% 28px', marginTop: '40px' }}>
                                </div>

                                {/* Header Tag */}
                                <span className={`inline-block px-3 py-1 text-sm font-bold border-2 ${card.theme} rounded-full mb-4 bg-white/50 backdrop-blur-sm transform -rotate-1 shadow-sm`}>
                                    #{card.id} {card.tag}
                                </span>

                                {/* Title */}
                                <h3 className={`text-2xl font-bold mb-6 ${card.accent} leading-tight drop-shadow-sm`}>
                                    {card.title}
                                </h3>

                                {/* Card 1 Specific Layout */}
                                {card.id === 1 && (
                                    <div className="space-y-6 relative z-10">
                                        <div className="space-y-4 border-l-2 border-green-600/30 pl-4 ml-2">
                                            {card.content?.map((item, idx) => (
                                                <div key={idx} className="relative">
                                                    <span className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-green-600 border-2 border-[#fef3c7]"></span>
                                                    <div className="flex items-start gap-3">
                                                        <span className="font-bold text-gray-900 bg-yellow-200/50 px-1 rounded">{item.year}</span>
                                                        <p className={`text-lg ${card.ink} leading-relaxed`}>{item.text}</p>
                                                        {item.icon}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-8 p-4 bg-blue-50/50 border border-blue-200 rounded-lg transform rotate-1 shadow-sm">
                                            <p className="font-bold text-blue-800 text-lg">Key Concept:</p>
                                            <p className="text-xl text-slate-800">{card.concept} - <span className="text-gray-600 text-base">{card.conceptDesc}</span></p>
                                        </div>
                                    </div>
                                )}

                                {/* Card 2 Specific Layout */}
                                {card.id === 2 && (
                                    <div className="space-y-6 relative z-10">
                                        <div className="bg-white/40 p-4 rounded-lg border border-dashed border-gray-400">
                                            <p className="font-bold text-gray-700 underline decoration-wavy decoration-blue-300 mb-2">Importance:</p>
                                            <ul className="list-disc list-inside space-y-1 text-lg text-slate-800">
                                                {card.importance?.map((imp, idx) => (
                                                    <li key={idx}>{imp}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="grid gap-3">
                                            {card.features?.map((feat: any, idx) => (
                                                <div key={idx} className="flex items-start gap-3 p-2 hover:bg-white/30 rounded transition-colors">
                                                    <div className="mt-1 p-1 bg-white rounded shadow-sm border border-gray-200">
                                                        {feat.icon}
                                                    </div>
                                                    <div>
                                                        <span className="font-bold text-blue-800 block text-sm uppercase tracking-wide">{feat.label}</span>
                                                        <span className="text-lg text-slate-900 leading-snug">{feat.text}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Card 3 Specific Layout */}
                                {card.id === 3 && (
                                    <div className="space-y-6 relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="text-4xl font-bold text-red-100 select-none absolute right-4 top-20 rotate-12 pointer-events-none">EXCEPTION</div>
                                            <p className="text-xl text-slate-800 bg-red-100/50 px-2 py-1 inline-block transform -rotate-1">
                                                Purpose: {card.purpose}
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            {card.features?.map((feat: any, idx) => (
                                                <div key={idx} className="group relative">
                                                    <div className={`absolute inset-0 bg-white/40 transform skew-x-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                                    <div className="relative flex items-center gap-3 p-2">
                                                        {feat.icon && <div className="text-red-600">{feat.icon}</div>}
                                                        <div>
                                                            <span className="font-bold text-red-800 mr-2 border-b border-red-200">{feat.label}:</span>
                                                            <span className="text-lg text-slate-900">{feat.text}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Footer Page Number */}
                                <div className="absolute bottom-4 right-6 text-gray-400 font-mono text-xs">
                                    Page {index + 1} / {cardsData.length}
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Completion Card */}
                <div className="snap-center shrink-0 w-full md:w-[300px] min-h-[500px] flex items-center justify-center p-6">
                    <div className="text-center space-y-6">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto shadow-lg animate-pulse">
                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Chapter Finished?</h3>
                            <p className="text-gray-500 mb-6">If you have reviewed all the cards effectively, mark this chapter as done.</p>
                            <Button
                                onClick={onComplete}
                                disabled={isCompleted}
                                className={`
                    w-full py-6 text-lg font-bold rounded-xl shadow-lg transform transition-all hover:scale-105 active:scale-95
                    ${isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}
                  `}
                            >
                                {isCompleted ? "Completed ✅" : "Mark as Done"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryModule;
