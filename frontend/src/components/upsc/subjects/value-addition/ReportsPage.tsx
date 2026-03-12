"use client";

import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft, Globe, Building, TrendingUp } from "lucide-react";
import Link from 'next/link';
import { REPORTS_DATA, Report } from './data/reports-data';

export default function ReportsPage() {

    const sections = useMemo(() => {
        return {
            International: REPORTS_DATA.filter(r => r.category === 'International'),
            National: REPORTS_DATA.filter(r => r.category === 'National')
        };
    }, []);

    return (
        <div className="p-4 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex items-center gap-4">
                <Link href="/student/upsc/value-addition">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <FileText className="h-6 w-6 text-muted-foreground" />
                        Reports & Indices
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        Critical data points for Mains answers and Prelims elimination.
                    </p>
                </div>
            </div>

            {/* Sections */}
            {Object.entries(sections).map(([category, reports]) => (
                <div key={category} className="space-y-4">
                    <h2 className="text-lg font-bold text-muted-foreground dark:text-muted-foreground border-b pb-2 flex items-center gap-2">
                        {category === 'International' ? <Globe className="h-5 w-5 text-blue-500" /> : <Building className="h-5 w-5 text-orange-500" />}
                        {category} Reports
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {reports.map((report) => (
                            <Card key={report.id} className="hover:shadow-md transition-shadow border-t-4 border-t-slate-400 bg-card">
                                <CardHeader className="pb-3">
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="secondary" className="text-xs">
                                            {report.publisher}
                                        </Badge>
                                        {report.indiaRank && (
                                            <Badge variant="outline" className="border-red-200 text-red-700 bg-red-50">
                                                Rank: {report.indiaRank}
                                            </Badge>
                                        )}
                                    </div>
                                    <CardTitle className="text-lg text-foreground leading-snug">
                                        {report.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4 h-10 line-clamp-2">
                                        {report.description}
                                    </p>

                                    <div className="bg-muted/50 p-3 rounded-lg">
                                        <h4 className="text-xs font-bold text-muted-foreground uppercase mb-2 flex items-center gap-1">
                                            <TrendingUp className="h-3 w-3" /> Key Findings
                                        </h4>
                                        <ul className="space-y-1">
                                            {report.keyFindings.map((finding, idx) => (
                                                <li key={idx} className="text-sm text-muted-foreground dark:text-muted-foreground flex items-start gap-2">
                                                    <span className="text-muted-foreground mt-1.5 text-[10px]">●</span>
                                                    {finding}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
