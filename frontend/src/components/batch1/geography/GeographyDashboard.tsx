"use client";

import React from 'react';
import Link from 'next/link';
import ClimateClassificationViz from './3d/simulations/ClimateClassificationViz';
import { Card, CardContent } from "@/components/ui/card";
import { Globe2, Mountain, Waves, Wind, CloudRain, Map } from 'lucide-react';

export default function GeographyDashboard() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Header Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard
                    icon={<Globe2 />}
                    label="Active Simulations"
                    value="6"
                    color="text-indigo-500"
                />
                <StatCard
                    icon={<Mountain />}
                    label="Landforms"
                    value="40+"
                    color="text-amber-500"
                />
                <StatCard
                    icon={<Waves />}
                    label="Ocean Currents"
                    value="Major"
                    color="text-blue-500"
                />
                <StatCard
                    icon={<Wind />}
                    label="Climate Zones"
                    value="12 (Koppen)"
                    color="text-emerald-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Visualization: Climate Classification */}
                <div className="lg:col-span-2 space-y-6">
                    <ClimateClassificationViz />
                </div>

                {/* 3D Simulations Quick Access */}
                <div className="space-y-6">
                    <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-none text-white overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                <Globe2 className="w-6 h-6 text-blue-400 animate-spin-slow" />
                                TerraLab 3D
                            </h3>
                            <p className="text-slate-300 text-sm mb-6">
                                Interactive physical geography simulations powered by Three.js.
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                <SimButton label="Plate Tectonics" icon={<Mountain className="w-4 h-4" />} />
                                <SimButton label="Monsoon" icon={<CloudRain className="w-4 h-4" />} />
                                <SimButton label="Rivers" icon={<Waves className="w-4 h-4" />} />
                                <SimButton label="Glaciers" icon={<Map className="w-4 h-4" />} />
                            </div>

                            <Link href="/student/upsc/geography/3d">
                                <button className="w-full mt-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/50">
                                    Launch 3D Globe
                                </button>
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Quick Facts Card */}
                    <Card>
                        <CardContent className="p-5">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Geography Quick Facts</h4>
                            <div className="space-y-3">
                                <FactItem text="India has 7516.6 km coastline" />
                                <FactItem text="Deccan Trap = Cretaceous Period" />
                                <FactItem text="Highest Peak: K2 (Godwin-Austen)" />
                                <FactItem text="Longest River: Ganga (2525 km)" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode, label: string, value: string, color: string }) {
    return (
        <Card>
            <CardContent className="p-5 flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-opacity-10 ${color.replace('text-', 'bg-')} flex items-center justify-center`}>
                     <div className={color}>
                        {icon}
                    </div>
                </div>
                <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</p>
                </div>
            </CardContent>
        </Card>
    );
}

function SimButton({ label, icon }: { label: string, icon: React.ReactNode }) {
    return (
        <button className="flex flex-col items-center justify-center p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors border border-white/5">
            <div className="mb-2 text-blue-300">{icon}</div>
            <span className="text-xs font-medium text-white">{label}</span>
        </button>
    );
}

function FactItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{text}</p>
        </div>
    );
}
