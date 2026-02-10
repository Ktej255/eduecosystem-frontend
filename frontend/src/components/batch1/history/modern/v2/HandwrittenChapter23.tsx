"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Scroll,
    Gavel,
    Landmark,
    Scale,
    FileText,
    BookOpen,
    Crown,
    Feather
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export default function HandwrittenChapter23() {
    return (
        <div className="min-h-screen bg-[#F5F5DC] font-sans text-gray-900 selection:bg-amber-200 overflow-x-hidden relative">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Rock+Salt&family=Special+Elite&family=Homemade+Apple&display=swap');
                
                .parchment-texture {
                    background-color: #F5F5DC;
                    background-image: url("https://www.transparenttextures.com/patterns/aged-paper.png");
                }

                .legal-font { font-family: 'Playfair Display', serif; }
                .handwritten-font { font-family: 'Homemade Apple', cursive; }
                .typewriter-font { font-family: 'Special Elite', monospace; }
                .stamp-font { font-family: 'Rock Salt', cursive; }

                .ink-splatter {
                    mask-image: url("https://www.transparenttextures.com/patterns/black-ink.png");
                }
            `}</style>

            {/* BACKGROUND */}
            <div className="fixed inset-0 parchment-texture pointer-events-none z-0"></div>

            {/* HEADER */}
            <header className="max-w-4xl mx-auto pt-12 pb-8 text-center relative z-10">
                <div className="border-y-4 border-double border-gray-800 py-6 bg-white/50 backdrop-blur-sm relative">
                    <div className="absolute top-2 right-4 opacity-50 rotate-12">
                        <div className="w-24 h-24 border-4 border-red-800 rounded-full flex items-center justify-center">
                            <span className="stamp-font text-red-800 text-xs font-bold -rotate-12">ROYAL<br />ASSENT</span>
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-4 mb-2">
                        <Scale className="w-8 h-8 text-gray-700" />
                        <span className="legal-font text-xl tracking-widest uppercase">1773 - 1947</span>
                        <Gavel className="w-8 h-8 text-gray-700" />
                    </div>
                    <h1 className="legal-font text-4xl md:text-6xl font-bold uppercase tracking-widest text-black mb-2">
                        CONSTITUTIONAL<br />DEVELOPMENT
                    </h1>
                    <div className="flex justify-center gap-4 text-xs font-bold uppercase tracking-widest text-[#5d4037]">
                        <span>Company Rule</span>
                        <span>•</span>
                        <span>Crown Rule</span>
                        <span>•</span>
                        <span>Evolution</span>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 px-6 pb-20">

                {/* LEFT COLUMN: COMPANY RULE */}
                <div className="space-y-12">
                    <div className="relative">
                        <h2 className="handwritten-font text-3xl text-[#3e2723] mb-6 -rotate-2">The Company Rule (1773-1858)</h2>

                        {/* REGULATING ACT 1773 */}
                        <div className="bg-[#fff8e1] p-6 border-l-4 border-[#3e2723] shadow-lg mb-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="legal-font text-2xl font-bold">Regulating Act, 1773</h3>
                                <Badge variant="outline" className="border-[#3e2723] text-[#3e2723]">First Step</Badge>
                            </div>
                            <ul className="typewriter-font text-sm space-y-3 text-gray-800">
                                <li className="flex gap-2">
                                    <span className="font-bold">1.</span>
                                    <span>Governor of Bengal → <span className="bg-yellow-200 px-1">Governor-General of Bengal</span> (Warren Hastings).</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-bold">2.</span>
                                    <span>Supreme Court established at Calcutta (1774).</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="font-bold">3.</span>
                                    <span>Executive Council of 4 members to assist GG.</span>
                                </li>
                            </ul>
                        </div>

                        {/* PITT'S INDIA ACT 1784 */}
                        <div className="bg-white p-6 shadow-md border border-gray-200 mb-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                            <h3 className="legal-font text-2xl font-bold mb-4 text-[#1a237e]">Pitt's India Act, 1784</h3>
                            <div className="grid grid-cols-2 gap-4 text-xs font-serif">
                                <div className="bg-blue-50 p-3 rounded">
                                    <strong className="block text-blue-900 mb-1">Commercial</strong>
                                    Court of Directors
                                </div>
                                <div className="bg-red-50 p-3 rounded">
                                    <strong className="block text-red-900 mb-1">Political</strong>
                                    Board of Control (6 members)
                                </div>
                            </div>
                            <p className="mt-3 text-sm italic border-t pt-2">"System of Double Government established."</p>
                        </div>

                        {/* CHARTER ACTS */}
                        <div className="space-y-4">
                            <div className="bg-[#e8f5e9] p-4 rounded-tl-3xl rounded-br-3xl border-2 border-dashed border-green-700">
                                <h4 className="font-bold text-green-900 mb-1">Charter Act, 1813</h4>
                                <p className="text-xs text-green-800">Ended EIC trade monopoly (except Tea & China). ₹1 Lakh for Education.</p>
                            </div>
                            <div className="bg-[#e3f2fd] p-4 rounded-tr-3xl rounded-bl-3xl border-2 border-dashed border-blue-700">
                                <h4 className="font-bold text-blue-900 mb-1">Charter Act, 1833</h4>
                                <p className="text-xs text-blue-800">GG of Bengal → <span className="font-bold">GG of India</span> (Bentinck). Laws made by GG now called 'Acts'.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: CROWN RULE */}
                <div className="space-y-12">
                    <div className="relative">
                        <h2 className="handwritten-font text-3xl text-[#1a237e] mb-6 rotate-1">The Crown Rule (1858-1947)</h2>

                        {/* GOI ACT 1858 */}
                        <div className="bg-[#fafafa] p-6 border-t-8 border-[#1a237e] shadow-xl mb-8">
                            <h3 className="legal-font text-2xl font-bold mb-2">Good Govt Act, 1858</h3>
                            <p className="text-xs font-serif italic mb-4 text-gray-500">Post-1857 Revolt Reaction</p>
                            <ul className="list-disc pl-5 typewritter-font text-sm space-y-2">
                                <li>Viceroy title introduced (Canning).</li>
                                <li><strong>Secretary of State</strong> for India created (Cabinet minister in UK).</li>
                                <li>Council of India (15 members) to assist SoS.</li>
                            </ul>
                        </div>

                        {/* COUNCIL ACTS */}
                        <div className="space-y-6">
                            {/* 1909 */}
                            <div className="relative bg-white p-5 shadow-lg border-2 border-gray-800">
                                <div className="absolute -left-3 top-4 -rotate-90 bg-gray-800 text-white px-2 py-0.5 text-[10px] tracking-widest font-bold">MORLEY-MINTO</div>
                                <div className="pl-6">
                                    <h3 className="text-xl font-bold mb-2">Indian Councils Act, 1909</h3>
                                    <p className="text-sm border-l-4 border-red-500 pl-3 bg-red-50 py-2">
                                        <span className="font-bold text-red-900">Separate Electorates</span> introduced for Muslims. "Legitimized Communalism".
                                    </p>
                                    <p className="text-xs mt-2">Satyendra Prasad Sinha joined Viceroy's Executive Council.</p>
                                </div>
                            </div>

                            {/* 1919 */}
                            <div className="relative bg-white p-5 shadow-lg border-2 border-gray-800">
                                <div className="absolute -left-3 top-4 -rotate-90 bg-gray-800 text-white px-2 py-0.5 text-[10px] tracking-widest font-bold">MONTAGU-CHELMSFORD</div>
                                <div className="pl-6">
                                    <h3 className="text-xl font-bold mb-2">GOI Act, 1919</h3>
                                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                                        <div className="bg-gray-100 p-2 text-center font-bold">Dyarchy in Provinces</div>
                                        <div className="bg-gray-100 p-2 text-center font-bold">Bicameralism at Center</div>
                                    </div>
                                    <p className="text-xs">Transferred vs Reserved Subjects.</p>
                                </div>
                            </div>

                            {/* 1935 */}
                            <div className="relative bg-white p-5 shadow-lg border-2 border-gray-800 transform rotate-1">
                                <div className="absolute -left-3 top-4 -rotate-90 bg-[#1a237e] text-white px-2 py-0.5 text-[10px] tracking-widest font-bold">BLUEPRINT</div>
                                <div className="pl-6">
                                    <h3 className="text-xl font-bold mb-2 text-[#1a237e]">GOI Act, 1935</h3>
                                    <ul className="text-sm list-disc pl-4 space-y-1">
                                        <li>Provincial Autonomy (Dyarchy abolished).</li>
                                        <li>All India Federation proposed (Never joined by princes).</li>
                                        <li>RBI, Federal Court, Public Service Commissions.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* AUGUST OFFER TO INDEPENDENCE */}
                        <div className="mt-8 bg-orange-50 p-4 border border-orange-200">
                            <h4 className="font-bold text-orange-900 text-sm mb-2 uppercase tracking-wide border-b border-orange-200 pb-1">The Final Sprint</h4>
                            <div className="flex justify-between text-xs font-mono">
                                <span>Cripps (1942)</span>
                                <span>→</span>
                                <span>Cabinet Mission (1946)</span>
                                <span>→</span>
                                <span>Mountbatten (1947)</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="text-center font-['Handwritten_Font'] text-xl opacity-50 pb-12">
                ~ The Bedrock of the Republic ~
            </div>
        </div>
    );
}
