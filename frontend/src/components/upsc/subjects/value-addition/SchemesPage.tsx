"use client";

import React, { useMemo, Suspense } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollText, ArrowLeft, Calendar, User, Target, Filter } from "lucide-react";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { SCHEMES_DATA, Scheme } from './data/schemes-data';
import { MINISTRIES_DATA } from './data/ministries-data';

function SchemesList() {
    const searchParams = useSearchParams();
    const ministryId = searchParams.get('ministryId');

    // Get ministry details if filtered
    const activeMinistry = useMemo(() => {
        if (!ministryId) return null;
        return MINISTRIES_DATA.find(m => m.id === ministryId);
    }, [ministryId]);

    // Filter schemes
    const filteredSchemes = useMemo(() => {
        let schemes = SCHEMES_DATA;
        if (ministryId) {
            schemes = schemes.filter(s => s.ministryId === ministryId);
        }
        return schemes;
    }, [ministryId]);

    return (
        <div className="space-y-6">
            {/* Context Header if Filtered */}
            {activeMinistry ? (
                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-xl border border-indigo-100 dark:border-indigo-800 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">Filtered by Ministry</p>
                        <h2 className="text-xl font-bold text-foreground">{activeMinistry.name}</h2>
                    </div>
                    <Link href="/student/upsc/value-addition/schemes">
                        <Button variant="outline" size="sm" className="gap-2">
                            <Filter className="h-4 w-4" />
                            Clear Filter
                        </Button>
                    </Link>
                </div>
            ) : (
                <div className="flex gap-2 flex-wrap pb-4 border-b">
                    <p className="w-full text-sm text-muted-foreground mb-2">Filter by popular ministries:</p>
                    {MINISTRIES_DATA.slice(0, 5).map(m => (
                        <Link key={m.id} href={`/student/upsc/value-addition/schemes?ministryId=${m.id}`}>
                            <Badge variant="secondary" className="hover:bg-indigo-100 cursor-pointer px-3 py-1">
                                {m.name}
                            </Badge>
                        </Link>
                    ))}
                </div>
            )}

            {/* Schemes Grid */}
            <div className="grid grid-cols-1 gap-6">
                {filteredSchemes.length > 0 ? filteredSchemes.map((scheme) => (
                    <Card key={scheme.id} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="flex gap-2 mb-2">
                                        <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50 dark:bg-blue-900/30">
                                            {scheme.sector}
                                        </Badge>
                                        <Badge variant="outline" className="border-orange-200 text-orange-700 bg-orange-50 dark:bg-orange-900/30">
                                            {scheme.launchYear}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl text-foreground">
                                        {scheme.name}
                                    </CardTitle>
                                    <CardDescription className="flex items-center gap-1 mt-1">
                                        <Target className="h-3 w-3" /> {scheme.objective}
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div className="bg-muted/50 p-3 rounded-lg">
                                    <p className="text-xs font-bold text-muted-foreground uppercase mb-1 flex items-center gap-1">
                                        <User className="h-3 w-3" /> Beneficiaries
                                    </p>
                                    <p className="text-sm font-medium text-muted-foreground dark:text-muted-foreground">
                                        {scheme.beneficiaries}
                                    </p>
                                </div>
                                <div className="bg-muted/50 p-3 rounded-lg">
                                    <p className="text-xs font-bold text-muted-foreground uppercase mb-1">
                                        Ministry
                                    </p>
                                    <p className="text-sm font-medium text-muted-foreground dark:text-muted-foreground">
                                        {MINISTRIES_DATA.find(m => m.id === scheme.ministryId)?.name || 'N/A'}
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-bold text-sm text-muted-foreground dark:text-muted-foreground mb-2">Key Features:</h4>
                                <ul className="space-y-1">
                                    {scheme.keyFeatures.map((feature, idx) => (
                                        <li key={idx} className="text-sm text-muted-foreground dark:text-muted-foreground flex items-start gap-2">
                                            <span className="text-indigo-500 mt-1.5">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                )) : (
                    <div className="text-center py-12 text-muted-foreground bg-muted rounded-xl border border-dashed">
                        No schemes found for this filter.
                    </div>
                )}
            </div>
        </div>
    );
}

export default function SchemesPage() {
    return (
        <React.Suspense fallback={<div className="p-8 text-center">Loading Schemes...</div>}>
            <SchemesPageContent />
        </React.Suspense>
    );
}

function SchemesPageContent() {
    return (
        <div className="p-4 max-w-5xl mx-auto space-y-6 animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <Link href="/student/upsc/value-addition">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <ScrollText className="h-6 w-6 text-indigo-600" />
                        Flagship Schemes
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        Database of key government initiatives for Prelims & Mains.
                    </p>
                </div>
            </div>

            <SchemesList />
        </div>
    );
}
