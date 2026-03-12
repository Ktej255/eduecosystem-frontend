"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock, Smartphone, Globe } from "lucide-react";
import Link from 'next/link';
import MoneyLaunderingCycleViz from './visualizations/MoneyLaunderingCycleViz';

export default function CyberSecurityPage() {
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
                            <Lock className="h-6 w-6 text-blue-600" />
                            Cyber Security & Money Laundering
                        </h1>
                        <p className="text-sm text-muted-foreground">Challenges in the digital domain and prevention of financial crimes.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Money Laundering Viz */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <div className="w-1 h-6 bg-indigo-500 rounded-full" />
                            Prevention of Money Laundering
                        </h2>
                        <MoneyLaunderingCycleViz />
                    </div>

                    {/* Cyber Security Challenges */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold flex items-center gap-2">
                            <div className="w-1 h-6 bg-red-500 rounded-full" />
                            Cyber Threats
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="p-4 bg-card rounded-xl border border-border flex items-start gap-4">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                                    <Globe className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Cyber Warfare</h3>
                                    <p className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">
                                        State-sponsored attacks on critical infrastructure (Power grids, Banking systems).
                                        <br /><span className="font-semibold text-blue-500">Ex: Kudankulam Malware Attack.</span>
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 bg-card rounded-xl border border-border flex items-start gap-4">
                                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg">
                                    <Smartphone className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Social Media Weaponization</h3>
                                    <p className="text-xs text-muted-foreground dark:text-muted-foreground mt-1">
                                        Use of platforms for radicalization, fake news propagation, and inciting communal violence.
                                        <br /><span className="font-semibold text-purple-500">Ex: Bangalore Exodus (2012) rumors.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-muted rounded-xl">
                            <h4 className="font-bold text-sm mb-2">Institutional Framework</h4>
                            <ul className="text-xs text-muted-foreground dark:text-muted-foreground space-y-1 list-disc list-inside">
                                <li><strong>CERT-In:</strong> Nodal agency for cyber incident response.</li>
                                <li><strong>NCIIPC:</strong> Protection of critical information infrastructure.</li>
                                <li><strong>Cyber Swachhta Kendra:</strong> Botnet cleaning and malware analysis.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
