"use client";

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Users, FileBarChart, CheckCircle2 } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const MAJORITY_TYPES = [
    {
        name: 'Simple Majority',
        formula: '> 50% of Present & Voting',
        useCase: 'Ordinary Bills, Financial Bills, Confidence Motion, Removal of VP (Lok Sabha).',
        example: 'Total: 543. Present: 300. Need: 151.',
        color: 'blue'
    },
    {
        name: 'Absolute Majority',
        formula: '> 50% of Total Strength',
        useCase: 'Formation of Govt (confidence). Usually not for passing bills alone (except with Special).',
        example: 'Total: 543. Doesn\'t matter present. Need: 272.',
        color: 'green'
    },
    {
        name: 'Effective Majority',
        formula: '> 50% of Effective Strength (Total - Vacancies)',
        useCase: 'Removal of VP (Rajya Sabha), Removal of Speaker/Deputy Speaker.',
        example: 'Total: 245. Vacancies: 5. Effective: 240. Need: 121.',
        color: 'purple'
    },
    {
        name: 'Special Majority (Type 1)',
        formula: '2/3rd of Present & Voting',
        useCase: 'Art 249 (State List Law), Art 312 (All India Services).',
        example: 'Present: 300. Need: 200.',
        color: 'orange'
    },
    {
        name: 'Special Majority (Type 2)',
        formula: '2/3rd Present & Voting + Absolute Majority',
        useCase: 'Constitutional Amendment (Art 368), Removal of SC/HC Judges, CEC, CAG.',
        example: 'Need: >272 AND >2/3 of Present.',
        color: 'red'
    },
    {
        name: 'Special Majority (Type 3)',
        formula: '2/3rd of Total Strength',
        useCase: 'Impeachment of President (Art 61). Toughest.',
        example: 'Total: 543. Need: 362.',
        color: 'rose'
    }
];

export default function MajoritiesMasterclass() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 font-['Kalam']">
            {MAJORITY_TYPES.map((maj, index) => (
                <Card key={index} className={`border-l-8 shadow-md hover:shadow-xl transition-shadow bg-white
                    ${maj.color === 'blue' ? 'border-blue-500' :
                        maj.color === 'green' ? 'border-green-500' :
                            maj.color === 'purple' ? 'border-purple-500' :
                                maj.color === 'orange' ? 'border-orange-500' :
                                    maj.color === 'red' ? 'border-red-600' : 'border-rose-700'}
                `}>
                    <CardContent className="p-6 space-y-4">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-black text-slate-800 leading-tight">{maj.name}</h3>
                            <Badge variant="outline" className="font-bold border-slate-300">
                                {maj.color === 'rose' ? 'Toughest' : 'Common'}
                            </Badge>
                        </div>

                        <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                            <p className="text-xs text-slate-500 font-bold uppercase mb-1">Formula</p>
                            <p className="text-lg font-bold text-slate-900">{maj.formula}</p>
                        </div>

                        <div>
                            <p className="text-xs text-slate-500 font-bold uppercase mb-1 flex items-center gap-1">
                                <FileBarChart size={12} /> Used For
                            </p>
                            <p className="text-sm font-medium text-slate-700 leading-snug">{maj.useCase}</p>
                        </div>

                        <div className={`p-3 rounded-lg text-xs font-bold flex items-start gap-2
                             ${maj.color === 'blue' ? 'bg-blue-50 text-blue-700' :
                                maj.color === 'green' ? 'bg-green-50 text-green-700' :
                                    maj.color === 'purple' ? 'bg-purple-50 text-purple-700' :
                                        maj.color === 'orange' ? 'bg-orange-50 text-orange-700' :
                                            maj.color === 'red' ? 'bg-red-50 text-red-700' : 'bg-rose-50 text-rose-700'}
                        `}>
                            <Scale size={14} className="shrink-0 mt-0.5" />
                            <span>Example: {maj.example}</span>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
