"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Flame, AlertTriangle, ShieldAlert, MapPin } from "lucide-react";
import Link from 'next/link';

export default function ExtremismPage() {
    return (
        <div className="min-h-screen bg-muted dark:bg-black p-4 md:p-8 text-foreground">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href="/student/upsc/security">
                        <Button variant="ghost" size="icon">
                            <ArrowLeft className="h-5 w-5" />
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold flex items-center gap-2 text-red-700 dark:text-red-500">
                            <Flame className="h-6 w-6" />
                            Extremism & Insurgency
                        </h1>
                        <p className="text-sm text-muted-foreground">Left Wing Extremism (LWE) and North-East Insurgency.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* LWE Section */}
                    <Card className="dark:bg-[#0a0a0a] border-border border-l-4 border-l-red-600">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-500">
                                <AlertTriangle className="w-5 h-5" /> Left Wing Extremism (Naxalism)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-4 bg-red-50 dark:bg-red-900/10 rounded-lg">
                                <h3 className="font-bold mb-2 text-sm uppercase">Key Factors</h3>
                                <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                                    <li><strong>Land Alienation:</strong> Displacement of tribals due to development projects.</li>
                                    <li><strong>Governance Deficit:</strong> Lack of basic services in remote areas.</li>
                                    <li><strong>Ideological:</strong> Maoist ideology of armed overthrow of state.</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold text-sm">Government Strategy (SAMADHAN)</h3>
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                    <div className="bg-muted p-2 rounded">S - Smart Leadership</div>
                                    <div className="bg-muted p-2 rounded">A - Aggressive Strategy</div>
                                    <div className="bg-muted p-2 rounded">M - Motivation & Training</div>
                                    <div className="bg-muted p-2 rounded">A - Actionable Intelligence</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* North East Insurgency */}
                    <Card className="dark:bg-[#0a0a0a] border-border border-l-4 border-l-orange-500">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-orange-600">
                                <MapPin className="w-5 h-5" /> North-East Insurgency
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-lg">
                                <h3 className="font-bold mb-2 text-sm uppercase">Root Causes</h3>
                                <ul className="list-disc pl-5 text-sm space-y-1 text-muted-foreground">
                                    <li><strong>Ethnic Diversity:</strong> Competing tribal identities (Nagas vs Kukis).</li>
                                    <li><strong>Porous Borders:</strong> Easy arms supply from Myanmar/Bangladesh.</li>
                                    <li><strong>Development Gap:</strong> Perceived neglect by the mainland.</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-bold text-sm">Status of Peace Accords</h3>
                                <div className="space-y-2 text-xs">
                                    <div className="flex justify-between p-2 bg-green-50 dark:bg-green-900/10 rounded border border-green-100 dark:border-green-900/20">
                                        <span>Naga Peace Accord (Framework)</span>
                                        <span className="font-bold text-green-700">Ongoing</span>
                                    </div>
                                    <div className="flex justify-between p-2 bg-blue-50 dark:bg-blue-900/10 rounded border border-blue-100 dark:border-blue-900/20">
                                        <span>Bodo Accord (2020)</span>
                                        <span className="font-bold text-blue-700">Signed</span>
                                    </div>
                                    <div className="flex justify-between p-2 bg-amber-50 dark:bg-amber-900/10 rounded border border-amber-100 dark:border-amber-900/20">
                                        <span>ULFA (Pro-Talks)</span>
                                        <span className="font-bold text-amber-700">Negotiating</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Way Forward */}
                    <Card className="col-span-1 lg:col-span-2 dark:bg-[#0a0a0a] border-border">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5 text-indigo-600" /> Way Forward
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                <div className="p-4 border rounded-xl hover:shadow-md transition-shadow">
                                    <strong className="block mb-2 text-indigo-600">Developmental Approach</strong>
                                    Build roads (RRP-I), mobile towers, and schools (Eklavya Models) in affected districts.
                                </div>
                                <div className="p-4 border rounded-xl hover:shadow-md transition-shadow">
                                    <strong className="block mb-2 text-indigo-600">Security Grid</strong>
                                    Modernization of Police Forces (MPF) and better coordination between CAPF and State Police.
                                </div>
                                <div className="p-4 border rounded-xl hover:shadow-md transition-shadow">
                                    <strong className="block mb-2 text-indigo-600">Rights & Justice</strong>
                                    Strict implementation of PESA Act and Forest Rights Act (FRA) to address tribal grievances.
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
