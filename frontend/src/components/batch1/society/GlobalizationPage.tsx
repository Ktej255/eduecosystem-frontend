"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe } from "lucide-react";
import Link from 'next/link';
import GlobalizationFlowViz from './visualizations/GlobalizationFlowViz';

export default function GlobalizationPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black p-4 md:p-8 text-slate-900 dark:text-slate-100">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href="/student/batch1/society">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <Globe className="h-6 w-6 text-indigo-600" />
                            Globalization & Indian Society
                        </h1>
                        <p className="text-sm text-slate-500">Impact on Culture, Economy, and Social Structures.</p>
                    </div>
                </div>

                {/* Viz */}
                <GlobalizationFlowViz />

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="prose dark:prose-invert">
                        <h3>Impact on Women</h3>
                        <ul>
                            <li><strong>Positive:</strong> Economic independence, challenging patriarchy.</li>
                            <li><strong>Negative:</strong> Commodification, double burden of work.</li>
                        </ul>
                        <h3>Impact on Elderly</h3>
                        <ul>
                            <li>Rise of nuclear families leading to isolation.</li>
                            <li>Old age homes becoming common.</li>
                        </ul>
                    </div>
                    <div className="prose dark:prose-invert">
                        <h3>Glocalization</h3>
                        <p>
                            Adaptation of global products to local tastes (e.g., McDonald's McAloo Tikki, Indianized version of English).
                        </p>
                        <h3>Cultural Homogenization</h3>
                        <p>
                            Erosion of local dialects and traditional arts in favor of global pop culture (Mcdonaldization).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
