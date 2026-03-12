"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, Zap, Users, AlertTriangle, BookOpen, Info, CheckCircle2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CalculationResult {
    label: string;
    value: number;
    formula: string;
    passed: boolean;
    color: string;
}

export default function MajorityCalculator() {
    const [totalStrength, setTotalStrength] = useState<number>(545);
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

        // 5. IMPEACHMENT (Type 3 - Art 61) -> 2/3 of Total Strength
        const impeachmentReq = Math.ceil((totalStrength * 2) / 3);
        const impeachmentPassed = ayes >= impeachmentReq;

        setResults([
            {
                label: 'Simple Majority',
                value: simpleReq,
                formula: '> 50% of Present & Voting',
                passed: simplePassed,
                color: 'bg-blue-100 text-blue-800'
            },
            {
                label: 'Effective Majority',
                value: effectiveReq,
                formula: '> 50% of (Total - Vacant)',
                passed: effectivePassed,
                color: 'bg-purple-100 text-purple-800'
            },
            {
                label: 'Absolute Majority',
                value: absoluteReq,
                formula: '> 50% of Total Strength',
                passed: absolutePassed,
                color: 'bg-indigo-100 text-indigo-800'
            },
            {
                label: 'Special Majority (Art 368)',
                value: specialReq,
                formula: '2/3 Present + Absolute',
                passed: specialPassed,
                color: 'bg-rose-100 text-rose-800'
            },
            {
                label: 'Special Majority (Art 61)',
                value: impeachmentReq,
                formula: '2/3 of Total Strength',
                passed: impeachmentPassed,
                color: 'bg-red-100 text-red-800'
            }
        ]);
    };

    return (
        <div className="space-y-8 font-['Calibri']">

            {/* CALCULATOR CARD */}
            <Card className="max-w-4xl mx-auto border-4 border-slate-900 bg-muted shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] font-['Kalam']">
                <div className="bg-slate-900 text-white p-6 flex items-center gap-3">
                    <Calculator className="text-yellow-400" size={32} />
                    <div>
                        <h2 className="text-2xl font-black">The Majority Calculator</h2>
                        <p className="text-muted-foreground text-sm font-bold">Math behind the Politics</p>
                    </div>
                </div>

                <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* INPUT SECTION */}
                        <div className="space-y-6 bg-card p-6 rounded-xl border-2 border-border shadow-sm">
                            <h3 className="font-black text-lg text-muted-foreground flex items-center gap-2">
                                <Users size={18} /> House Parameters
                            </h3>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold text-muted-foreground uppercase">Total Strength</label>
                                        <Input type="number" value={totalStrength} onChange={(e) => setTotalStrength(Number(e.target.value))} className="font-mono text-lg font-bold border-border" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-muted-foreground uppercase">Vacancies</label>
                                        <Input type="number" value={vacancies} onChange={(e) => setVacancies(Number(e.target.value))} className="font-mono text-lg font-bold border-border" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-xs font-bold text-muted-foreground uppercase">Present & Voting</label>
                                        <Input type="number" value={presentVoting} onChange={(e) => setPresentVoting(Number(e.target.value))} className="font-mono text-lg font-bold border-border" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold text-green-600 uppercase">"Ayes" (Votes For)</label>
                                        <Input type="number" value={ayes} onChange={(e) => setAyes(Number(e.target.value))} className="font-mono text-lg font-bold border-green-300 text-green-700 bg-green-50" />
                                    </div>
                                </div>
                                <div className="bg-muted p-3 rounded-lg text-center">
                                    <span className="text-xs font-bold text-muted-foreground uppercase block">Effective Strength</span>
                                    <span className="text-xl font-mono font-bold text-muted-foreground">{totalStrength - vacancies}</span>
                                </div>
                            </div>
                        </div>

                        {/* RESULTS SECTION */}
                        <div className="space-y-3">
                            {results.map((res, idx) => (
                                <div key={idx} className={`relative overflow-hidden rounded-xl border-2 p-3 transition-all duration-300 ${res.passed ? 'border-green-500 bg-green-50 shadow-md transform scale-102' : 'border-border bg-card opacity-90'}`}>
                                    <div className="flex justify-between items-start mb-1">
                                        <div>
                                            <div className="text-sm font-black text-foreground">{res.label}</div>
                                            <div className="text-[10px] font-bold text-muted-foreground">{res.formula}</div>
                                        </div>
                                        <Badge className={`${res.passed ? 'bg-green-600' : 'bg-slate-400'} text-white border-0 text-[10px]`}>{res.passed ? 'PASSED' : 'FAILED'}</Badge>
                                    </div>
                                    <div className="flex items-end justify-between">
                                        <div className="text-[10px] font-bold text-muted-foreground">Needs <span className="text-foreground text-base font-mono">{res.value}</span> votes</div>
                                        {res.passed && <Zap className="text-yellow-500 fill-yellow-500 animate-pulse" size={16} />}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* INFO SECTION */}
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-2 mb-6">
                    <BookOpen className="text-indigo-600" />
                    <h2 className="text-2xl font-bold text-foreground">Majority Concepts Explained</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Simple Majority */}
                    <MajorityInfoCard
                        title="Simple Majority"
                        formula="> 50% of Present & Voting"
                        usedFor={[
                            "Ordinary Bills",
                            "Money Bills",
                            "Financial Bills",
                            "Vote of Thanks",
                            "Censure / No-Confidence Motion",
                            "State Emergency (Type 1)",
                            "Election of Speaker/Dy Speaker"
                        ]}
                        color="bg-blue-50 border-blue-200 text-blue-800"
                    />

                    {/* Effective Majority */}
                    <MajorityInfoCard
                        title="Effective Majority"
                        formula="> 50% of Effective Strength (Total - Vacancies)"
                        usedFor={[
                            "Removal of Vice President (in RS)",
                            "Removal of Speaker/Dy Speaker (LS/State LA)",
                            "Removal of Dy Chairman (RS)"
                        ]}
                        color="bg-purple-50 border-purple-200 text-purple-800"
                    />

                    {/* Absolute Majority */}
                    <MajorityInfoCard
                        title="Absolute Majority"
                        formula="> 50% of Total Strength"
                        usedFor={[
                            "Formation of Government (General Elections)",
                            "Not used independently in Parliament (usually part of Special Majority)"
                        ]}
                        color="bg-indigo-50 border-indigo-200 text-indigo-800"
                    />

                    {/* Special Majority Type 1 */}
                    <MajorityInfoCard
                        title="Special Majority (Type 1)"
                        formula="2/3rds of Present & Voting"
                        usedFor={[
                            "Art 249: Parliament legislation on State List",
                            "Art 312: Creation of All India Services"
                        ]}
                        color="bg-teal-50 border-teal-200 text-teal-800"
                    />

                    {/* Special Majority Type 2 */}
                    <MajorityInfoCard
                        title="Special Majority (Type 2)"
                        formula="2/3rds Present & Voting + Absolute Majority"
                        usedFor={[
                            "Constitutional Amendment (Art 368)",
                            "Removal of SC/HC Judges",
                            "Removal of CEC/CAG",
                            "Approval of National Emergency",
                            "Resolution by State Assembly for Council creation/abolition"
                        ]}
                        color="bg-rose-50 border-rose-200 text-rose-800"
                    />

                    {/* Special Majority Type 3 */}
                    <MajorityInfoCard
                        title="Special Majority (Type 3)"
                        formula="2/3rds of Total Strength"
                        usedFor={[
                            "Art 61: Impeachment of President (Only in Parliament)"
                        ]}
                        color="bg-red-50 border-red-200 text-red-800"
                    />

                    {/* Special Majority Type 4 */}
                    <MajorityInfoCard
                        title="Special Majority (Type 4)"
                        formula="Type 2 + Ratification by 50% States"
                        usedFor={[
                            "Federal Character changes (Art 368)",
                            "Election of President",
                            "SC/HC Powers",
                            "GST Council",
                            "7th Schedule Lists"
                        ]}
                        color="bg-orange-50 border-orange-200 text-orange-800"
                    />
                </div>
            </div>
        </div>
    );
}

function MajorityInfoCard({ title, formula, usedFor, color }: { title: string, formula: string, usedFor: string[], color: string }) {
    return (
        <Card className={`border-2 ${color.replace('text', 'border')} ${color} shadow-sm hover:shadow-md transition-shadow`}>
            <CardHeader className="pb-2">
                <CardTitle className="text-lg font-black">{title}</CardTitle>
                <div className="text-xs font-bold opacity-80 font-mono bg-card/50 inline-block px-2 py-1 rounded">{formula}</div>
            </CardHeader>
            <CardContent>
                <ul className="space-y-1">
                    {usedFor.map((item, idx) => (
                        <li key={idx} className="text-sm font-medium flex items-start gap-2">
                            <CheckCircle2 size={14} className="mt-0.5 shrink-0 opacity-70" />
                            {item}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
