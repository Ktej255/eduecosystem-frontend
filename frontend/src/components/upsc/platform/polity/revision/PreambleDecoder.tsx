"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Sparkles } from 'lucide-react';

const PREAMBLE_KEYWORDS = {
    'We, THE PEOPLE': 'Source of Authority (Popular Sovereignty). Power flows from citizens to the Constitution.',
    'SOVEREIGN': 'Independent authority within territory. Not subject to external control. Can acquire foreign territory.',
    'SOCIALIST': 'Added by 42nd Amd (1976). Democratic Socialism (Mixed Economy), not Communist (State ownership). Aim: End poverty, ignorance, disease.',
    'SECULAR': 'Added by 42nd Amd (1976). Positive Secularism (State protects all religions equally). SR Bommai Case: Basic Structure.',
    'DEMOCRATIC': 'Govt by choice of people. Representative Parliamentary Democracy. Universal Adult Franchise.',
    'REPUBLIC': 'Head of State is elected (President), not hereditary (Monarch). Political sovereignty in people.',
    'JUSTICE': 'Social, Economic, Political. (Inspired by Russian Revolution 1917).',
    'LIBERTY': 'of thought, expression, belief, faith, worship. (French Revolution). Qualified, not absolute.',
    'EQUALITY': 'of status and of opportunity. (No special privileges). Absence of discrimination.',
    'FRATERNITY': 'Sense of brotherhood. Dignity of individual + Unity & Integrity (42nd Amd) of Nation.',
    '26th day of November, 1949': 'Date of Adoption. (Date of Commencement was Jan 26, 1950 to honor Purna Swaraj).'
};

export default function PreambleDecoder() {
    const [selectedKeyword, setSelectedKeyword] = useState<keyof typeof PREAMBLE_KEYWORDS | null>(null);

    return (
        <Card className="w-full bg-[#fffbeb] border-[12px] border-double border-amber-900 shadow-2xl overflow-hidden font-serif">
            <CardContent className="p-8 md:p-12 relative">
                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                    <div className="w-96 h-96 border-[20px] rounded-full border-slate-900"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* The Text */}
                    <div className="text-center md:text-left space-y-6 leading-loose text-lg md:text-xl text-foreground font-medium select-none">
                        <p className="uppercase font-bold tracking-widest text-2xl mb-6 text-center border-b-2 border-amber-900/20 pb-4">The Preamble</p>

                        <div className="bg-card/50 p-6 rounded-xl shadow-inner border border-amber-100">
                            <InteractiveWord text="We, THE PEOPLE" keyword="We, THE PEOPLE" onClick={setSelectedKeyword} active={selectedKeyword} /> OF INDIA, having solemnly resolved to constitute India into a <br className="hidden md:block" />
                            <InteractiveWord text=" SOVEREIGN " keyword="SOVEREIGN" onClick={setSelectedKeyword} active={selectedKeyword} />
                            <InteractiveWord text=" SOCIALIST " keyword="SOCIALIST" onClick={setSelectedKeyword} active={selectedKeyword} />
                            <InteractiveWord text=" SECULAR " keyword="SECULAR" onClick={setSelectedKeyword} active={selectedKeyword} />
                            <InteractiveWord text=" DEMOCRATIC " keyword="DEMOCRATIC" onClick={setSelectedKeyword} active={selectedKeyword} />
                            <InteractiveWord text=" REPUBLIC " keyword="REPUBLIC" onClick={setSelectedKeyword} active={selectedKeyword} />
                            and to secure to all its citizens: <br /><br />

                            <InteractiveWord text="JUSTICE" keyword="JUSTICE" onClick={setSelectedKeyword} active={selectedKeyword} />, social, economic and political; <br />
                            <InteractiveWord text="LIBERTY" keyword="LIBERTY" onClick={setSelectedKeyword} active={selectedKeyword} /> of thought, expression, belief, faith and worship; <br />
                            <InteractiveWord text="EQUALITY" keyword="EQUALITY" onClick={setSelectedKeyword} active={selectedKeyword} /> of status and of opportunity; <br />
                            and to promote among them all <br />
                            <InteractiveWord text="FRATERNITY" keyword="FRATERNITY" onClick={setSelectedKeyword} active={selectedKeyword} /> assuring the dignity of the individual and the unity and integrity of the Nation; <br /><br />

                            IN OUR CONSTITUENT ASSEMBLY this <InteractiveWord text="26th day of November, 1949" keyword="26th day of November, 1949" onClick={setSelectedKeyword} active={selectedKeyword} />, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.
                        </div>
                    </div>

                    {/* The Decoder Screen */}
                    <div className="flex items-center justify-center">
                        <div className="w-full bg-slate-900 text-amber-50 p-8 rounded-2xl shadow-2xl border-4 border-amber-600 min-h-[300px] flex flex-col items-center justify-center text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

                            {selectedKeyword ? (
                                <div className="space-y-4 animate-in zoom-in duration-300 relative z-10 p-4">
                                    <h3 className="text-3xl font-black text-amber-400 mb-4">{selectedKeyword}</h3>
                                    <div className="h-1 w-20 bg-amber-600 mx-auto rounded-full mb-6"></div>
                                    <p className="text-xl md:text-2xl font-serif text-slate-100 leading-relaxed font-light">
                                        "{PREAMBLE_KEYWORDS[selectedKeyword]}"
                                    </p>
                                </div>
                            ) : (
                                <div className="text-muted-foreground space-y-4 relative z-10">
                                    <div className="bg-slate-800 p-4 rounded-full inline-block mb-2 group-hover:scale-110 transition-transform">
                                        <Sparkles size={32} className="text-amber-500 animate-pulse" />
                                    </div>
                                    <h3 className="text-xl font-bold text-muted-foreground">Preamble Decoder</h3>
                                    <p className="text-sm max-w-xs mx-auto">Tap any highlighted word on the left to reveal its constitutional significance.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

const InteractiveWord = ({
    text,
    keyword,
    onClick,
    active
}: {
    text: string,
    keyword: keyof typeof PREAMBLE_KEYWORDS,
    onClick: (k: keyof typeof PREAMBLE_KEYWORDS) => void,
    active: string | null
}) => {
    const isActive = active === keyword;
    return (
        <span
            onClick={() => onClick(keyword)}
            className={`
                cursor-pointer font-bold px-2 py-0.5 rounded transition-all duration-300 inline-block
                ${isActive
                    ? 'bg-amber-600 text-white scale-110 shadow-lg rotate-1'
                    : 'text-amber-800 hover:bg-amber-100 hover:text-amber-900 border-b-2 border-amber-300 border-dotted hover:border-solid hover:-translate-y-0.5'
                }
            `}
        >
            {text}
        </span>
    );
};
