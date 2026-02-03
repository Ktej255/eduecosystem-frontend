"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gavel, ArrowLeft, Target, Lightbulb, Calendar, Building2 } from "lucide-react";
import Link from 'next/link';
import { POLICIES_DATA } from './data/policies-data';

export default function PoliciesPage() {
    return (
        <div className="p-4 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <Link href="/student/batch1/value-addition">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <Gavel className="h-6 w-6 text-violet-600" />
                        Key National Policies
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Summaries of major policy frameworks shaping India's development.
                    </p>
                </div>
            </div>

            {/* Policies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {POLICIES_DATA.map((policy) => (
                    <Card key={policy.id} className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-violet-500 bg-white dark:bg-gray-800">
                        <CardHeader className="pb-3">
                            <div className="flex justify-between items-start">
                                <Badge variant="outline" className="bg-violet-50 text-violet-700 border-violet-200">
                                    {policy.category}
                                </Badge>
                                <span className="text-sm font-bold text-gray-400 flex items-center gap-1">
                                    <Calendar className="h-3 w-3" /> {policy.year}
                                </span>
                            </div>
                            <CardTitle className="text-xl mt-2 text-gray-800 dark:text-gray-100">
                                {policy.name}
                            </CardTitle>
                            <CardDescription className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                                <Building2 className="h-3 w-3" /> {policy.ministry}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {/* Objectives */}
                            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                                <h4 className="text-xs font-bold text-gray-500 uppercase mb-2 flex items-center gap-1">
                                    <Target className="h-3 w-3" /> Objectives
                                </h4>
                                <ul className="space-y-1">
                                    {policy.objectives.map((obj, idx) => (
                                        <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                                            <span className="text-violet-400 mt-1.5 text-[10px]">●</span>
                                            {obj}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Key Highlights */}
                            <div>
                                <h4 className="text-xs font-bold text-gray-500 uppercase mb-2 flex items-center gap-1">
                                    <Lightbulb className="h-3 w-3" /> Key Highlights
                                </h4>
                                <ul className="space-y-1">
                                    {policy.keyHighlights.map((highlight, idx) => (
                                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                                            <span className="text-green-500 mt-1">✓</span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
