"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users } from "lucide-react";
import Link from 'next/link';
import DemographyViz from './visualizations/DemographyViz';

export default function PopulationPage() {
    return (
        <div className="min-h-screen bg-muted dark:bg-black p-4 md:p-8 text-foreground">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex items-center gap-4">
                    <Link href="/student/batch1/society">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <Users className="h-6 w-6 text-pink-600" />
                            Population & Associated Issues
                        </h1>
                        <p className="text-sm text-muted-foreground">Demographic trends, dividend, and control measures.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <DemographyViz />
                    <div className="prose dark:prose-invert">
                        <h3>Demographic Benefit</h3>
                        <p>
                            India has the world's largest youth population. This "Amrit Kaal" is an opportunity to fuel economic growth if skilling and employment are addressed.
                        </p>
                        <h3>Challenges</h3>
                        <ul>
                            <li><strong>Ageing Population:</strong> By 2050, 20% of India will be elderly.</li>
                            <li><strong>Skewed Sex Ratio:</strong> Requires social change (Beti Bachao Beti Padhao).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
