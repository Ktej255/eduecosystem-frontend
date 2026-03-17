"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Lightbulb, Target, TrendingUp, AlertTriangle, ChevronRight, FileText, Layers } from "lucide-react";
import Link from 'next/link';
import { ENVIRONMENT_MODULES, ENVIRONMENT_TOPICS } from './data/environment-config';
import { ENVIRONMENT_MODULE_CONTENT } from './data/environment-module-content';
import FoodWebViz from './visualizations/FoodWebViz';
import CarbonCycleViz from './visualizations/CarbonCycleViz';
import ClimateAgreementsViz from './visualizations/ClimateAgreementsViz';
import ClimateTimeMachine from './visualizations/ClimateTimeMachine';
import { Microscope } from 'lucide-react';

interface EnvironmentModuleViewerProps {
    moduleId: string;
}

export default function EnvironmentModuleViewer({ moduleId }: EnvironmentModuleViewerProps) {
    const module = ENVIRONMENT_MODULES.find(m => m.id === moduleId);
    const content = ENVIRONMENT_MODULE_CONTENT[moduleId];

    if (!module || !content) {
        return (
            <div className="p-8 text-center min-h-[60vh] flex flex-col items-center justify-center">
                <div className="p-6 bg-emerald-50 rounded-full mb-6">
                    <BookOpen className="w-12 h-12 text-emerald-300" />
                </div>
                <h1 className="text-2xl font-bold text-slate-800">Content Under Curation</h1>
                <p className="text-slate-500 mt-2 max-w-sm mx-auto">
                    Our team is currently finalizing the UPSC 2026 specific notes for this module. 
                    Please check back shortly.
                </p>
                <Link href="/student/upsc/environment">
                    <Button className="mt-8 rounded-xl bg-emerald-600 hover:bg-emerald-700">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Environment Hub
                    </Button>
                </Link>
            </div>
        );
    }

    // Get topics associated with this module
    const moduleTopics = ENVIRONMENT_TOPICS.filter(t => t.moduleId === moduleId);

    return (
        <div className="max-w-5xl mx-auto px-4 py-8 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-emerald-100">
                <div className="space-y-4">
                    <Link href="/student/upsc/environment" className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors text-sm font-bold group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Environment Roadmap
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-2xl bg-${module.color}-100 dark:bg-${module.color}-950/30 text-${module.color}-600 dark:text-${module.color}-400 shadow-sm border border-${module.color}-200/50`}>
                            {module.icon as any}
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200`}>
                                    Module {moduleId}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-serif italic text-foreground leading-tight">
                                {module.title}
                            </h1>
                            <p className="text-muted-foreground mt-1 max-w-2xl">
                                {module.description}
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="flex gap-2">
                    <Button variant="outline" className="rounded-xl border-emerald-200 hover:bg-emerald-50 text-emerald-700">
                        <FileText className="w-4 h-4 mr-2" /> PDF Notes
                    </Button>
                    <Button className="rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200/50">
                        Next Module <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                </div>
            </div>

            {/* Main Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Side: Study Content */}
                <div className="lg:col-span-2 space-y-12">
                    
                    {/* Flowchart Section */}
                    {content.flowchart && (
                        <section className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-blue-500" />
                                    <h2 className="text-xl font-bold">Process Vizualization</h2>
                                </div>
                                <span className="text-[10px] uppercase tracking-widest font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                    Concept Map
                                </span>
                            </div>
                            <div className="py-8 flex flex-col items-center justify-center space-y-4">
                                <div className="flex flex-wrap items-center justify-center gap-4">
                                    {content.flowchart.split(' -> ').map((step, idx, arr) => (
                                        <React.Fragment key={idx}>
                                            <div className="px-4 py-2 bg-white dark:bg-slate-800 border-2 border-blue-100 dark:border-blue-900 rounded-xl shadow-sm text-sm font-semibold text-blue-800 dark:text-blue-200">
                                                {step}
                                            </div>
                                            {idx < arr.length - 1 && <ChevronRight className="w-4 h-4 text-blue-300" />}
                                        </React.Fragment>
                                    ))}
                                </div>
                                <p className="text-slate-400 text-[11px] italic mt-4">Interactive full-resolution map available in the Visual Hub</p>
                            </div>
                        </section>
                    )}

                    {/* Interactive Visual Lab Integration */}
                    {['B6', 'B8', 'B12', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6'].includes(moduleId) && (
                        <section className="space-y-6">
                            <div className="flex items-center gap-2 mb-4 border-l-4 border-blue-500 pl-4 py-1">
                                <Microscope className="w-5 h-5 text-blue-500" />
                                <h2 className="text-2xl font-bold text-foreground font-serif italic">Interactive Visual Lab</h2>
                            </div>
                            
                            <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
                                {moduleId === 'B6' && <FoodWebViz />}
                                {moduleId === 'B8' && <CarbonCycleViz />}
                                {moduleId === 'B12' && <ClimateTimeMachine />}
                                {moduleId.startsWith('C') && <ClimateAgreementsViz />}
                            </div>
                            <p className="text-center text-xs text-muted-foreground italic">
                                This simulation is directly linked to the core concepts of this module for immersive learning.
                            </p>
                        </section>
                    )}

                    {/* Concept Deep Dive */}
                    <section className="space-y-10">
                        <div className="flex items-center gap-2 mb-4 border-l-4 border-emerald-500 pl-4 py-1">
                            <BookOpen className="w-5 h-5 text-emerald-500" />
                            <h2 className="text-2xl font-bold text-foreground font-serif italic">Core Concepts</h2>
                        </div>
                        
                        {content.coreConcepts.map((concept, idx) => (
                            <div key={idx} className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-500" style={{ animationDelay: `${idx * 100}ms` }}>
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                    <span className="w-6 h-6 flex items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 text-xs font-bold">{idx + 1}</span>
                                    {concept.title}
                                </h3>
                                <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed pl-8">
                                    <p>{concept.content}</p>
                                    
                                    {concept.table && (
                                        <div className="my-6 overflow-hidden rounded-xl border border-border shadow-sm bg-white dark:bg-slate-900">
                                            <table className="w-full text-left text-sm border-collapse">
                                                <thead className="bg-slate-50 dark:bg-slate-800/50">
                                                    <tr>
                                                        {concept.table.headers.map((h, i) => (
                                                            <th key={i} className="px-4 py-3 font-bold text-slate-700 dark:text-slate-300 border-b">{h}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {concept.table.rows.map((row, i) => (
                                                        <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                                                            {row.map((cell, j) => (
                                                                <td key={j} className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 last:border-b-0">{cell}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* PYQ Practice */}
                    {content.pyqs && content.pyqs.length > 0 && (
                        <section className="space-y-6">
                            <div className="flex items-center gap-2 mb-4 border-l-4 border-orange-500 pl-4 py-1">
                                <FileText className="w-5 h-5 text-orange-500" />
                                <h2 className="text-2xl font-bold text-foreground font-serif italic">Actual UPSC PYQs</h2>
                            </div>
                            
                            <div className="space-y-4">
                                {content.pyqs.map((pyq, idx) => (
                                    <Card key={idx} className="border-orange-100 dark:border-orange-900/30 overflow-hidden group">
                                        <div className="bg-orange-50/50 dark:bg-orange-950/10 px-6 py-3 border-b border-orange-100 dark:border-orange-900/30 flex justify-between items-center">
                                            <span className="text-xs font-bold text-orange-700 dark:text-orange-400 uppercase tracking-tighter">UPSC Prelims {pyq.year}</span>
                                            <Target className="w-4 h-4 text-orange-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <CardContent className="p-6 space-y-4">
                                            <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                                                {pyq.question}
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {pyq.options.map((opt, i) => (
                                                    <div key={i} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-sm hover:border-orange-200 hover:bg-orange-50/30 transition-colors cursor-pointer flex items-center gap-3">
                                                        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-500">{String.fromCharCode(65 + i)}</span>
                                                        {opt}
                                                    </div>
                                                ))}
                                            </div>
                                            <details className="mt-4">
                                                <summary className="text-xs font-bold text-blue-600 cursor-pointer hover:underline">View Answer & Detailed Explanation</summary>
                                                <div className="mt-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-sm shadow-inner">
                                                    <p className="font-bold text-emerald-600 mb-2">Correct Answer: {pyq.answer}</p>
                                                    <p className="text-slate-600 dark:text-slate-400 italic">
                                                        {pyq.explanation}
                                                    </p>
                                                </div>
                                            </details>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right Side: UPSC Insights Box */}
                <div className="space-y-6">
                    {/* PYQ Prediction Box */}
                    <Card className="border-emerald-200 shadow-xl shadow-emerald-100/20 overflow-hidden bg-gradient-to-b from-emerald-50/50 to-transparent sticky top-8">
                        <CardHeader className="bg-emerald-600 text-white pb-6 pt-8">
                            <div className="flex items-center gap-2 mb-2">
                                <Target className="w-5 h-5" />
                                <span className="uppercase tracking-widest text-[10px] font-bold">Target UPSC 2026</span>
                            </div>
                            <CardTitle className="text-2xl font-serif">Prediction Hub</CardTitle>
                            <CardDescription className="text-emerald-100">
                                Evolving Trends & Likely MCQ statements
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-6">
                            <div className="space-y-3">
                                <h4 className="text-sm font-bold flex items-center gap-2">
                                    <Lightbulb className="w-4 h-4 text-yellow-500" /> High Yield Statements
                                </h4>
                                <ul className="space-y-3">
                                    {content.predictions.map((pred, i) => (
                                        <li key={i} className="flex items-start gap-2 p-3 bg-white dark:bg-slate-900 rounded-xl border border-emerald-100/50 shadow-sm text-xs leading-relaxed text-slate-600 group hover:border-emerald-300 transition-colors">
                                            <ChevronRight className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                                            {pred}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="pt-6 border-t space-y-3">
                                <h4 className="text-sm font-bold flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-emerald-500" /> Topic Priority
                                </h4>
                                <div className="space-y-2">
                                    {moduleTopics.length > 0 ? moduleTopics.slice(0, 3).map(topic => (
                                        <div key={topic.id} className="flex justify-between items-center text-[10px]">
                                            <span className="text-muted-foreground">{topic.title}</span>
                                            <span className={`px-2 py-0.5 rounded-md font-bold ${
                                                topic.priority === 'High' ? 'bg-red-50 text-red-600' : 'bg-orange-50 text-orange-600'
                                            }`}>
                                                {topic.priority}
                                            </span>
                                        </div>
                                    )) : (
                                        <p className="text-[10px] text-muted-foreground italic">Priority data being calibrated...</p>
                                    )}
                                </div>
                            </div>

                            <div className="pt-6 border-t space-y-3">
                                <h4 className="text-sm font-bold flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4 text-orange-500" /> Analysis Alert
                                </h4>
                                <p className="text-[10px] text-muted-foreground bg-orange-50/30 p-2 rounded-lg border border-orange-100 italic">
                                    Focus on the "Connectivity" between concepts rather than isolated facts. UPSC is increasingly asking about the "Interplay" of species in changing biomes.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Access Sidebar */}
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 space-y-4 sticky top-[540px]">
                        <h4 className="font-bold text-sm flex items-center gap-2">
                            <Layers className="w-4 h-4 text-emerald-500" /> Action Center
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                            <Link href={`/student/upsc/environment/mcqs?module=${moduleId}`}>
                                <Button variant="ghost" className="justify-between w-full font-medium h-12 bg-white dark:bg-slate-800 border hover:bg-emerald-50 group rounded-xl">
                                    <span className="flex items-center gap-2"><BookOpen className="w-4 h-4" /> Practice {moduleId} MCQs</span>
                                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Button>
                            </Link>
                            <Link href={`/student/upsc/environment/flashcards?module=${moduleId}`}>
                                <Button variant="ghost" className="justify-between w-full font-medium h-12 bg-white dark:bg-slate-800 border hover:bg-emerald-50 group rounded-xl">
                                    <span className="flex items-center gap-2"><Lightbulb className="w-4 h-4" /> Review Flashcards</span>
                                    <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
