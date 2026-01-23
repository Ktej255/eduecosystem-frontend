"use client";

import React from 'react';
import FoodWebViz from './visualizations/FoodWebViz';
import CarbonCycleViz from './visualizations/CarbonCycleViz';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Leaf, Droplets, ThermometerSun } from 'lucide-react';

export default function EnvironmentDashboard() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Determine Header Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard
                    label="Biodiversity Index"
                    value="Critical"
                    color="text-red-500"
                    icon={<Leaf className="w-5 h-5 text-emerald-500" />}
                />
                <StatCard
                    label="CO2 Concentration"
                    value="421 ppm"
                    color="text-orange-500"
                    icon={<ThermometerSun className="w-5 h-5 text-orange-500" />}
                />
                <StatCard
                    label="Global Temp Rise"
                    value="+1.1°C"
                    color="text-red-600"
                    icon={<ThermometerSun className="w-5 h-5 text-red-500" />}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Food Web */}
                <div className="space-y-6">
                    <FoodWebViz />
                </div>

                {/* Right: Cycles */}
                <div className="space-y-6">
                    <CarbonCycleViz />
                </div>
            </div>
        </div>
    );
}

function StatCard({ label, value, color, icon }: { label: string, value: string, color: string, icon: React.ReactNode }) {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        {icon}
                    </div>
                </div>
                <div>
                    <h3 className={`text-2xl font-bold mb-1 ${color}`}>{value}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                </div>
            </CardContent>
        </Card>
    );
}
