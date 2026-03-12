"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import Link from 'next/link';
import BorderSecurityViz from './visualizations/BorderSecurityViz';

export default function BorderManagementPage() {
    return (
        <div className="min-h-screen bg-muted dark:bg-black p-4 md:p-8 text-foreground">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href="/student/upsc/security">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            <ShieldAlert className="h-6 w-6 text-emerald-600" />
                            Border Management
                        </h1>
                        <p className="text-sm text-muted-foreground">Comprehensive analysis of India's land and maritime borders.</p>
                    </div>
                </div>

                {/* Visualization */}
                <BorderSecurityViz />

                {/* Detailed Notes Placeholder */}
                <div className="prose dark:prose-invert max-w-none">
                    <h3>Strategic Importance</h3>
                    <p>
                        India shares land borders with seven countries. The management of these borders is critical for national security,
                        preventing illegal migration, smuggling, and infiltration.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-8">
                        <div className="p-6 bg-card rounded-xl border border-border">
                            <h4 className="font-bold mb-2">Comprehensive Integrated Border Management System (CIBMS)</h4>
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                                Use of technology (Sensors, Cameras, Radars) in difficult terrains where physical fencing is not possible.
                            </p>
                        </div>
                        <div className="p-6 bg-card rounded-xl border border-border">
                            <h4 className="font-bold mb-2">Border Area Development Programme (BADP)</h4>
                            <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                                Development of infrastructure in border villages to ensure socio-economic security and prevent out-migration.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
