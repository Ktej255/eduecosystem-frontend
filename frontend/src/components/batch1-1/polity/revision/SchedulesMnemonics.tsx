"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCw, Sparkles } from 'lucide-react';

interface MnemonicItem {
    letter: string;
    meaning: string;
    schedule: string;
    detail: string;
}

const TEARS_OF_OLD_PM: MnemonicItem[] = [
    { letter: 'T', meaning: 'Territories', schedule: '1st', detail: 'Names of States & Union Territories.' },
    { letter: 'E', meaning: 'Emoluments', schedule: '2nd', detail: 'Salaries/Allowances of President, Governor, etc.' },
    { letter: 'A', meaning: 'Affirmations', schedule: '3rd', detail: 'Oaths & Affirmations.' },
    { letter: 'R', meaning: 'Rajya Sabha', schedule: '4th', detail: 'Allocation of seats in Rajya Sabha.' },
    { letter: 'S', meaning: 'Scheduled Areas', schedule: '5th', detail: 'Admin of Scheduled & Tribal Areas.' },
    { letter: 'O', meaning: 'Other Areas', schedule: '6th', detail: 'Admin of Tribal Areas (Assam, Meghalaya, Tripura, Mizoram) - ATM^2' },
    { letter: 'F', meaning: 'Federal List', schedule: '7th', detail: 'Union, State, Concurrent Lists.' },
    { letter: 'O', meaning: 'Official Languages', schedule: '8th', detail: '22 Recognized Languages.' },
    { letter: 'L', meaning: 'Land Reform', schedule: '9th', detail: 'Validation of certain Acts (Originally immune from JR).' },
    { letter: 'D', meaning: 'Defection', schedule: '10th', detail: 'Anti-Defection Law (52nd Amd).' },
    { letter: 'P', meaning: 'Panchayats', schedule: '11th', detail: 'Powers of Panchayats (29 matters).' },
    { letter: 'M', meaning: 'Municipalities', schedule: '12th', detail: 'Powers of Municipalities (18 matters).' },
];

export default function SchedulesMnemonics() {
    const [focused, setFocused] = useState<number | null>(null);

    return (
        <Card className="w-full bg-[#f8fafc] border-4 border-emerald-800 shadow-xl overflow-hidden font-['Kalam']">
            <CardContent className="p-8">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-black text-emerald-900 mb-2">TEARS OF OLD PM</h2>
                    <p className="text-emerald-700 font-bold">The Ultimate Schedules Cheat Code</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {TEARS_OF_OLD_PM.map((item, index) => (
                        <div
                            key={index}
                            className={`
                                relative h-40 rounded-2xl border-b-8 transition-all duration-300 cursor-pointer group perspective
                                ${focused === index
                                    ? 'bg-emerald-600 border-emerald-800 text-white -translate-y-2 shadow-2xl z-10 scale-110'
                                    : 'bg-white border-emerald-200 text-slate-800 hover:border-emerald-400 hover:-translate-y-1'
                                }
                            `}
                            onClick={() => setFocused(focused === index ? null : index)}
                        >
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                                {focused === index ? (
                                    // Back Side
                                    <div className="animate-in zoom-in spin-in-6">
                                        <div className="text-xs font-bold uppercase opacity-80 mb-1">{item.schedule} Schedule</div>
                                        <div className="font-bold text-sm leading-tight">{item.detail}</div>
                                    </div>
                                ) : (
                                    // Front Side
                                    <>
                                        <div className="text-5xl font-black mb-2 text-emerald-500 group-hover:text-emerald-600 transition-colors">
                                            {item.letter}
                                        </div>
                                        <div className="text-xs font-bold uppercase tracking-widest">{item.meaning}</div>
                                    </>
                                )}
                            </div>

                            {focused !== index && (
                                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-50">
                                    <RotateCw size={14} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center text-slate-500 text-sm font-bold flex items-center justify-center gap-2">
                    <Sparkles size={16} /> Tap any card to flip/reveal details
                </div>
            </CardContent>
        </Card>
    );
}
