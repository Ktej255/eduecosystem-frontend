"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scale } from "lucide-react";
import Link from 'next/link';
import DilemmaFlowViz from './visualizations/DilemmaFlowViz';

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href="/student/batch1/ethics">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2 text-slate-900 dark:text-slate-100">
                            <Scale className="h-6 w-6 text-indigo-600" />
                            Case Study Simulator
                        </h1>
                        <p className="text-sm text-slate-500">Apply the 5-step framework to resolve ethical dilemmas.</p>
                    </div>
                </div>

                {/* Framework Viz */}
                <DilemmaFlowViz />

                {/* Placeholder for future specific case scenarios */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 opacity-50 pointer-events-none">
                    <div className="p-6 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-center">
                        <h3 className="font-bold text-slate-500">Scenario 1: Riot Control</h3>
                        <p className="text-xs text-slate-400">Locked</p>
                    </div>
                    <div className="p-6 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-center">
                        <h3 className="font-bold text-slate-500">Scenario 2: Whistleblowing</h3>
                        <p className="text-xs text-slate-400">Locked</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
