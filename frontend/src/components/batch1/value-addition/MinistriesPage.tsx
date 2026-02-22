"use client";

import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Landmark, ExternalLink, ScrollText, ArrowLeft, Building2 } from "lucide-react";
import Link from 'next/link';
import { MINISTRIES_DATA, Ministry } from './data/ministries-data';
import { useRouter } from 'next/navigation';

export default function MinistriesPage() {
    const router = useRouter();

    // Group ministries by primary category
    const groupedMinistries = useMemo(() => {
        const groups: Record<string, Ministry[]> = {};
        MINISTRIES_DATA.forEach(ministry => {
            const primaryCat = ministry.categories[0];
            if (!groups[primaryCat]) groups[primaryCat] = [];
            groups[primaryCat].push(ministry);
        });
        return groups;
    }, []);

    const categoryOrder = ['Strategic', 'Economic', 'Social', 'Infrastructure', 'Governance'];

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
                        <Landmark className="h-6 w-6 text-blue-600" />
                        Ministries of India
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        Directory of Central Ministries, their mandates, and flagship schemes.
                    </p>
                </div>
            </div>

            {/* Content Groups */}
            {categoryOrder.map(category => {
                const ministries = groupedMinistries[category];
                if (!ministries) return null;

                return (
                    <div key={category} className="space-y-4">
                        <h2 className="text-lg font-bold text-muted-foreground dark:text-muted-foreground border-b pb-2 flex items-center gap-2">
                            <span className="w-2 h-6 bg-indigo-500 rounded-full"></span>
                            {category} Sector
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {ministries.map((ministry) => (
                                <Card key={ministry.id} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-indigo-500 bg-card">
                                    <CardHeader className="pb-3">
                                        <div className="flex justify-between items-start">
                                            <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600">
                                                <Building2 className="h-5 w-5" />
                                            </div>
                                            <a href={ministry.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-500 transition-colors">
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        </div>
                                        <CardTitle className="text-lg leading-tight mt-3">
                                            {ministry.name}
                                        </CardTitle>
                                        <CardDescription className="font-medium text-indigo-600 dark:text-indigo-400">
                                            Minister: {ministry.minister}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-sm text-muted-foreground dark:text-muted-foreground min-h-[40px]">
                                            {ministry.mandate}
                                        </p>

                                        <div className="pt-2 border-t border-border flex gap-2">
                                            {/* Link to Schemes Page with Filter */}
                                            <Link href={`/student/batch1/value-addition/schemes?ministryId=${ministry.id}`} className="w-full">
                                                <Button size="sm" variant="outline" className="w-full gap-2 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20 hover:text-indigo-600 hover:border-indigo-200">
                                                    <ScrollText className="h-4 w-4" />
                                                    View Schemes
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
