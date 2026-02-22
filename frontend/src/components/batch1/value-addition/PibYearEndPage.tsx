"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Newspaper, Download, Calendar } from "lucide-react";
import Link from 'next/link';

export default function PibYearEndPage() {
    const reviews = [
        { title: "Ministry of New & Renewable Energy - Year End Review 2025", date: "Dec 31, 2025", tags: ["Energy", "Solar"] },
        { title: "Ministry of Defence - Major Achievements 2025", date: "Dec 28, 2025", tags: ["Defence", "Make in India"] },
        { title: "Ministry of Railways - Infrastructure Push", date: "Dec 25, 2025", tags: ["Infrastructure"] },
    ];

    return (
        <div className="p-4 max-w-5xl mx-auto space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center gap-4">
                <Link href="/student/batch1/value-addition">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <Newspaper className="h-6 w-6 text-pink-600" />
                        PIB & Year End Reviews
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        Curated summaries from Press Information Bureau.
                    </p>
                </div>
            </div>

            <div className="space-y-4">
                {reviews.map((review, idx) => (
                    <Card key={idx} className="hover:bg-muted transition-colors">
                        <CardContent className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <h3 className="font-bold text-foreground">{review.title}</h3>
                                <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {review.date}</span>
                                    {review.tags.map(tag => (
                                        <span key={tag} className="bg-muted px-2 py-0.5 rounded text-muted-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <Button size="sm" variant="outline" className="gap-2 shrink-0">
                                <Download className="h-4 w-4" /> Download PDF
                            </Button>
                        </CardContent>
                    </Card>
                ))}

                <div className="text-center py-8 bg-muted rounded-xl border border-dashed">
                    <p className="text-muted-foreground">More updates will be populated automatically.</p>
                </div>
            </div>
        </div>
    );
}
