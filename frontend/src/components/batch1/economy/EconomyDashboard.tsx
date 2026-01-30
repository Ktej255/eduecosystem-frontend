"use client";

import React from 'react';
import CircularFlowViz from './visualizations/CircularFlowViz';
import DemandSupplyViz from './visualizations/DemandSupplyViz';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { TrendingUp, Users, Wallet, Briefcase } from 'lucide-react';

const SECTOR_DATA = [
    { name: 'Agriculture', value: 18, color: '#22c55e' }, // Approx India stats
    { name: 'Industry', value: 28, color: '#f59e0b' },
    { name: 'Services', value: 54, color: '#3b82f6' },
];

const GROWTH_DATA = [
    { year: '2020', gdp: -5.8 },
    { year: '2021', gdp: 9.1 },
    { year: '2022', gdp: 7.2 },
    { year: '2023', gdp: 7.6 },
    { year: '2024', gdp: 6.8 }, // Projected
];

export default function EconomyDashboard() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-in fade-in duration-500">
            {/* Determine Header Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard
                    label="GDP Growth Rate"
                    value="6.8%"
                    trend="+0.2%"
                    trendUp={true}
                    icon={<TrendingUp className="w-5 h-5 text-green-500" />}
                />
                <StatCard
                    label="Inflation (CPI)"
                    value="5.1%"
                    trend="-0.3%"
                    trendUp={true} // Good that it's down
                    icon={<Wallet className="w-5 h-5 text-orange-500" />}
                />
                <StatCard
                    label="Unemployment"
                    value="7.2%"
                    trend="+0.1%"
                    trendUp={false}
                    icon={<Users className="w-5 h-5 text-blue-500" />}
                />
                <StatCard
                    label="Forex Reserves"
                    value="$620 Bn"
                    trend="All Time High"
                    trendUp={true}
                    icon={<Briefcase className="w-5 h-5 text-purple-500" />}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Viz: Circular Flow (Span 2 cols) */}
                <div className="lg:col-span-2 space-y-6">
                    <CircularFlowViz />

                    <Card>
                        <CardHeader>
                            <CardTitle>GDP Growth Trend</CardTitle>
                            <CardDescription>Annual Growth Rate (India)</CardDescription>
                        </CardHeader>
                        <CardContent className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={GROWTH_DATA}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="year" />
                                    <YAxis />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                                    />
                                    <Bar dataKey="gdp" fill="#3b82f6" radius={[4, 4, 0, 0]}>
                                        {GROWTH_DATA.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.gdp > 0 ? '#3b82f6' : '#ef4444'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    {/* Demand Supply Visualization */}
                    <DemandSupplyViz />
                </div>

                {/* Right Panel: Sectors & Insights */}
                <div className="space-y-6">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Sector Contribution</CardTitle>
                            <CardDescription>Share in GVA (Gross Value Added)</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px] relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={SECTOR_DATA}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={60}
                                            outerRadius={100}
                                            paddingAngle={5}
                                            dataKey="value"
                                        >
                                            {SECTOR_DATA.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend verticalAlign="bottom" height={36} />
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="text-center">
                                        <span className="text-2xl font-bold dark:text-white">GVA</span>
                                        <br />
                                        <span className="text-xs text-gray-500">FY 2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 space-y-4">
                                {SECTOR_DATA.map(sector => (
                                    <div key={sector.name} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: sector.color }} />
                                            <span className="font-medium">{sector.name}</span>
                                        </div>
                                        <span className="font-bold">{sector.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function StatCard({ label, value, trend, trendUp, icon }: { label: string, value: string, trend: string, trendUp: boolean, icon: React.ReactNode }) {
    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        {icon}
                    </div>
                    {trend && (
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${trendUp ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                            {trend}
                        </span>
                    )}
                </div>
                <div>
                    <h3 className="text-2xl font-bold mb-1">{value}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
                </div>
            </CardContent>
        </Card>
    );
}
