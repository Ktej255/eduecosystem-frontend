"use client";

import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calculator, ArrowLeft, BrainCircuit, Sigma } from "lucide-react";
import Link from 'next/link';
import { CSAT_FORMULAS_DATA } from './data/csat-formulas-data';

export default function CsatFormulasPage() {

    // Group by Category
    const groupedData = useMemo(() => {
        return {
            Quant: CSAT_FORMULAS_DATA.filter(item => item.category === 'Quant'),
            Reasoning: CSAT_FORMULAS_DATA.filter(item => item.category === 'Reasoning')
        };
    }, []);

    return (
        <div className="p-4 max-w-6xl mx-auto space-y-6 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link href="/student/upsc/value-addition">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <Calculator className="h-6 w-6 text-red-600" />
                        CSAT Cheat Sheet
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        High-yield formulas for Quant & Reasoning revision.
                    </p>
                </div>
            </div>

            {/* Content Tabs */}
            <Tabs defaultValue="Quant" className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-[400px] mb-6">
                    <TabsTrigger value="Quant" className="flex items-center gap-2">
                        <Sigma className="h-4 w-4" /> Quant
                    </TabsTrigger>
                    <TabsTrigger value="Reasoning" className="flex items-center gap-2">
                        <BrainCircuit className="h-4 w-4" /> Reasoning
                    </TabsTrigger>
                </TabsList>

                {/* Quant Section */}
                <TabsContent value="Quant" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {groupedData.Quant.map((topic) => (
                            <FormulaCard key={topic.id} topicData={topic} />
                        ))}
                    </div>
                </TabsContent>

                {/* Reasoning Section */}
                <TabsContent value="Reasoning" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {groupedData.Reasoning.map((topic) => (
                            <FormulaCard key={topic.id} topicData={topic} />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}

// Helper Card Component
function FormulaCard({ topicData }: { topicData: any }) {
    return (
        <Card className="hover:shadow-md transition-shadow border-t-4 border-t-red-500">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground flex justify-between items-center">
                    {topicData.topic}
                    <Badge variant="secondary" className="text-xs font-normal opacity-70">
                        {topicData.formulas.length} Formulas
                    </Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-3">
                    {topicData.formulas.map((formula: any, idx: number) => (
                        <li key={idx} className="bg-red-50 dark:bg-red-900/10 p-3 rounded-lg border border-red-100 dark:border-red-900/30">
                            <p className="text-xs font-bold text-red-600 dark:text-red-400 uppercase mb-1">
                                {formula.title}
                            </p>
                            <p className="font-mono text-sm text-foreground bg-card dark:bg-black/20 p-1.5 rounded border border-dashed border-border inline-block w-full text-center">
                                {formula.expression}
                            </p>
                            {formula.note && (
                                <p className="text-[11px] text-muted-foreground italic mt-1.5">
                                    Tip: {formula.note}
                                </p>
                            )}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
