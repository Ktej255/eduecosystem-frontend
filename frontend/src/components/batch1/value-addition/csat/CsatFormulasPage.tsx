"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calculator, Sigma, Divide } from "lucide-react";
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function CsatFormulasPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black p-4 md:p-8 text-slate-900 dark:text-slate-100">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href="/student/value-addition">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <Calculator className="h-6 w-6 text-violet-600" />
                            CSAT Formula Sheet
                        </h1>
                        <p className="text-sm text-slate-500">Quick revision for Quantitative Aptitude.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Number System */}
                    <Card className="dark:bg-[#0a0a0a] border-slate-200 dark:border-slate-800">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-violet-600">
                                <Sigma className="w-5 h-5" /> Number System
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg">
                                <span className="font-bold block mb-1">Sum of first n natural numbers:</span>
                                <code className="text-violet-600 bg-white dark:bg-black px-2 py-1 rounded">n(n+1)/2</code>
                            </div>
                            <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg">
                                <span className="font-bold block mb-1">Sum of first n odd numbers:</span>
                                <code className="text-violet-600 bg-white dark:bg-black px-2 py-1 rounded">n²</code>
                            </div>
                            <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg">
                                <span className="font-bold block mb-1">Divisibility by 3:</span>
                                <span className="text-slate-600 dark:text-slate-400">Sum of digits is divisible by 3.</span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Geometry */}
                    <Card className="dark:bg-[#0a0a0a] border-slate-200 dark:border-slate-800">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-emerald-600">
                                <Divide className="w-5 h-5" /> Geometry & Mensuration
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg">
                                <span className="font-bold block mb-1">Circle Area & Circumference:</span>
                                <code className="text-emerald-600 bg-white dark:bg-black px-2 py-1 rounded">πr²  |  2πr</code>
                            </div>
                            <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg">
                                <span className="font-bold block mb-1">Cylinder Volume:</span>
                                <code className="text-emerald-600 bg-white dark:bg-black px-2 py-1 rounded">πr²h</code>
                            </div>
                            <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg">
                                <span className="font-bold block mb-1">Sphere Volume:</span>
                                <code className="text-emerald-600 bg-white dark:bg-black px-2 py-1 rounded">4/3 πr³</code>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Permutation & Combination */}
                    <Card className="dark:bg-[#0a0a0a] border-slate-200 dark:border-slate-800">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-amber-600">
                                <Sigma className="w-5 h-5" /> P & C + Probability
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg">
                                <span className="font-bold block mb-1">Permutation (Arrangement):</span>
                                <code className="text-amber-600 bg-white dark:bg-black px-2 py-1 rounded">nPr = n! / (n-r)!</code>
                            </div>
                            <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg">
                                <span className="font-bold block mb-1">Combination (Selection):</span>
                                <code className="text-amber-600 bg-white dark:bg-black px-2 py-1 rounded">nCr = n! / r!(n-r)!</code>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
