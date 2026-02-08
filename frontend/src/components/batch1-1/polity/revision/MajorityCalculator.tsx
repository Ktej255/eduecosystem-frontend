"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, Zap, Users, AlertTriangle } from 'lucide-react';

interface CalculationResult {
    label: string;
    value: number;
    formula: string;
    passed: boolean;
    color: string;
}

export default function MajorityCalculator() {
    const [totalStrength, setTotalStrength] = useState<number>(543);
    const [vacancies, setVacancies] = useState<number>(0);
    const [presentVoting, setPresentVoting] = useState<number>(500);
    const [ayes, setAyes] = useState<number>(273);

    const [results, setResults] = useState<CalculationResult[]>([]);

    useEffect(() => {
        calculateMajorities();
    }, [totalStrength, vacancies, presentVoting, ayes]);

    const calculateMajorities = () => {
        const effectiveStrength = totalStrength - vacancies;

        // 1. SIMPLE MAJORITY (>50% of Present & Voting)
        const simpleReq = Math.floor(presentVoting / 2) + 1;
        const simplePassed = ayes >= simpleReq;

        // 2. ABSOLUTE MAJORITY (>50% of Total Strength)
        const absoluteReq = Math.floor(totalStrength / 2) + 1;
        const absolutePassed = ayes >= absoluteReq;

        // 3. EFFECTIVE MAJORITY (>50% of Effective Strength)
        const effectiveReq = Math.floor(effectiveStrength / 2) + 1;
        const effectivePassed = ayes >= effectiveReq;

        // 4. SPECIAL MAJORITY (Type 2 - Art 368) -> 2/3 Present + Absolute
        const twoThirdPresent = Math.ceil((presentVoting * 2) / 3);
        const specialReq = Math.max(twoThirdPresent, absoluteReq);
        const specialPassed = ayes >= twoThirdPresent && ayes >= absoluteReq;

        setResults([
            {
                label: 'Simple Majority',
                value: simpleReq,
                formula: '> 50% of Present',
                passed: simplePassed,
                color: 'bg-blue-100 text-blue-800'
            },
            {
                label: 'Absolute Majority',
                value: absoluteReq,
                formula: '> 50% of Total',
                passed: absolutePassed,
                color: 'bg-indigo-100 text-indigo-800'
            },
            {
                label: 'Effective Majority',
                value: effectiveReq,
                formula: '> 50% of (Total - Vacant)',
                passed: effectivePassed,
                color: 'bg-purple-100 text-purple-800'
            },
            {
                label: 'Special Majority (Art 368)',
                value: specialReq,
                formula: '2/3 Present + Absolute',
                passed: specialPassed,
                color: 'bg-rose-100 text-rose-800'
            }
        ]);
    };

    return (
        <Card className="max-w-4xl mx-auto border-4 border-slate-900 bg-slate-50 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] font-['Kalam']">
            <div className="bg-slate-900 text-white p-6 flex items-center gap-3">
                <Calculator className="text-yellow-400" size={32} />
                <div>
                    <h2 className="text-2xl font-black">The Majority Calculator</h2>
                    <p className="text-slate-400 text-sm font-bold">Math behind the Politics</p>
                </div>
            </div>

            <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* INPUT SECTION */}
                    <div className="space-y-6 bg-white p-6 rounded-xl border-2 border-slate-200 shadow-sm">
                        <h3 className="font-black text-lg text-slate-700 flex items-center gap-2">
                            <Users size={18} /> House Parameters
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase">Total Strength</label>
                                <Input
                                    type="number"
                                    value={totalStrength}
                                    onChange={(e) => setTotalStrength(Number(e.target.value))}
                                    className="font-mono text-lg font-bold border-slate-300"
                                />
                                <span className="text-[10px] text-slate-400 font-bold ml-1">Example: Lok Sabha = 543</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase">Vacancies</label>
                                    <Input
                                        type="number"
                                        value={vacancies}
                                        onChange={(e) => setVacancies(Number(e.target.value))}
                                        className="font-mono text-lg font-bold border-slate-300"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase">Effective Strength</label>
                                    <div className="bg-slate-100 p-2 rounded text-lg font-mono font-bold text-slate-600 border border-slate-200 text-center">
                                        {totalStrength - vacancies}
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100"></div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs font-bold text-slate-500 uppercase">Present & Voting</label>
                                    <Input
                                        type="number"
                                        value={presentVoting}
                                        onChange={(e) => setPresentVoting(Number(e.target.value))}
                                        className="font-mono text-lg font-bold border-slate-300"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs font-bold text-green-600 uppercase">"Ayes" (Votes For)</label>
                                    <Input
                                        type="number"
                                        value={ayes}
                                        onChange={(e) => setAyes(Number(e.target.value))}
                                        className="font-mono text-lg font-bold border-green-300 text-green-700 bg-green-50"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RESULTS SECTION */}
                    <div className="space-y-4">
                        {results.map((res, idx) => (
                            <div
                                key={idx}
                                className={`
                       relative overflow-hidden rounded-xl border-2 p-4 transition-all duration-300
                       ${res.passed ? 'border-green-500 bg-green-50 shadow-md transform scale-102' : 'border-slate-200 bg-white opacity-90'}
                    `}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="text-sm font-black text-slate-800">{res.label}</div>
                                        <div className="text-xs font-bold text-slate-500">{res.formula}</div>
                                    </div>
                                    <Badge className={`${res.passed ? 'bg-green-600' : 'bg-slate-400'} text-white border-0`}>
                                        {res.passed ? 'PASSED' : 'FAILED'}
                                    </Badge>
                                </div>

                                <div className="flex items-end justify-between">
                                    <div className="text-xs font-bold text-slate-400">
                                        Needs <span className="text-slate-800 text-lg font-mono">{res.value}</span> votes
                                    </div>
                                    {res.passed && <Zap className="text-yellow-500 fill-yellow-500 animate-pulse" size={20} />}
                                </div>
                            </div>
                        ))}

                        <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 flex gap-2 items-start mt-4">
                            <AlertTriangle className="text-yellow-600 shrink-0 mt-0.5" size={16} />
                            <p className="text-xs font-bold text-yellow-800 leading-tight">
                                Tip: Try setting Total=545, Vacancies=5, Present=200. See how "Effective" changes but "Absolute" stays high!
                            </p>
                        </div>
                    </div>

                </div>
            </CardContent>
        </Card>
    );
}
