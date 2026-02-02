"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Interactive Demand-Supply Curve Visualization
 * Shows equilibrium changes with interactive sliders
 */
export default function DemandSupplyViz() {
    const [demandShift, setDemandShift] = useState(0); // -50 to +50
    const [supplyShift, setSupplyShift] = useState(0); // -50 to +50

    // Calculate equilibrium price and quantity
    const basePrice = 100;
    const baseQuantity = 100;

    // Simple model: D shift right → P up, Q up; S shift right → P down, Q up
    const priceChange = demandShift * 0.5 - supplyShift * 0.3;
    const quantityChange = demandShift * 0.3 + supplyShift * 0.3;

    const equilibriumPrice = basePrice + priceChange;
    const equilibriumQuantity = baseQuantity + quantityChange;

    // SVG dimensions
    const width = 400;
    const height = 300;
    const padding = 40;

    // Scale functions
    const scaleX = (q: number) => padding + ((q / 200) * (width - 2 * padding));
    const scaleY = (p: number) => height - padding - ((p / 200) * (height - 2 * padding));

    // Demand curve points (downward sloping)
    const demandPoints = [
        { q: 20 + demandShift, p: 180 },
        { q: 100 + demandShift, p: 100 },
        { q: 180 + demandShift, p: 20 }
    ];

    // Supply curve points (upward sloping)
    const supplyPoints = [
        { q: 20 + supplyShift, p: 20 },
        { q: 100 + supplyShift, p: 100 },
        { q: 180 + supplyShift, p: 180 }
    ];

    const demandPath = demandPoints.map((p, i) =>
        `${i === 0 ? 'M' : 'L'} ${scaleX(p.q)} ${scaleY(p.p)}`
    ).join(' ');

    const supplyPath = supplyPoints.map((p, i) =>
        `${i === 0 ? 'M' : 'L'} ${scaleX(p.q)} ${scaleY(p.p)}`
    ).join(' ');

    // Equilibrium point
    const eqX = scaleX(equilibriumQuantity);
    const eqY = scaleY(equilibriumPrice);

    return (
        <Card className="border-0 shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white pb-4">
                <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Demand & Supply Curves
                </CardTitle>
                <CardDescription className="text-blue-100">
                    Interactive visualization of market equilibrium
                </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* SVG Graph */}
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4">
                        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
                            {/* Grid lines */}
                            {[0, 50, 100, 150, 200].map(val => (
                                <g key={val}>
                                    <line
                                        x1={padding}
                                        y1={scaleY(val)}
                                        x2={width - padding}
                                        y2={scaleY(val)}
                                        stroke="#e2e8f0"
                                        strokeDasharray="4,4"
                                    />
                                    <line
                                        x1={scaleX(val)}
                                        y1={padding}
                                        x2={scaleX(val)}
                                        y2={height - padding}
                                        stroke="#e2e8f0"
                                        strokeDasharray="4,4"
                                    />
                                </g>
                            ))}

                            {/* Axes */}
                            <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#64748b" strokeWidth={2} />
                            <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#64748b" strokeWidth={2} />

                            {/* Axis labels */}
                            <text x={width / 2} y={height - 8} textAnchor="middle" className="fill-slate-600 text-xs font-medium">
                                Quantity (Q)
                            </text>
                            <text
                                x={12}
                                y={height / 2}
                                textAnchor="middle"
                                transform={`rotate(-90, 12, ${height / 2})`}
                                className="fill-slate-600 text-xs font-medium"
                            >
                                Price (P)
                            </text>

                            {/* Surplus Areas */}
                            <polygon
                                points={`${scaleX(0)},${scaleY(180)} ${eqX},${eqY} ${scaleX(0)},${eqY}`}
                                fill="#3b82f6"
                                fillOpacity={0.1}
                            />
                            <polygon
                                points={`${scaleX(0)},${scaleY(20)} ${eqX},${eqY} ${scaleX(0)},${eqY}`}
                                fill="#ef4444"
                                fillOpacity={0.1}
                            />

                            {/* Original curves (faded) */}
                            {(demandShift !== 0 || supplyShift !== 0) && (
                                <>
                                    <path
                                        d="M 62.4 56 L 220 160 L 377.6 264"
                                        fill="none"
                                        stroke="#3b82f6"
                                        strokeWidth={2}
                                        strokeDasharray="6,4"
                                        opacity={0.3}
                                    />
                                    <path
                                        d="M 62.4 264 L 220 160 L 377.6 56"
                                        fill="none"
                                        stroke="#ef4444"
                                        strokeWidth={2}
                                        strokeDasharray="6,4"
                                        opacity={0.3}
                                    />
                                </>
                            )}

                            {/* Demand Curve (Blue) */}
                            <motion.path
                                initial={false}
                                animate={{ d: demandPath }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                fill="none"
                                stroke="#3b82f6"
                                strokeWidth={3}
                                strokeLinecap="round"
                            />
                            <text x={scaleX(demandPoints[2].q) + 5} y={scaleY(demandPoints[2].p)} className="fill-blue-600 text-sm font-bold">
                                D
                            </text>

                            {/* Supply Curve (Red) */}
                            <motion.path
                                initial={false}
                                animate={{ d: supplyPath }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                fill="none"
                                stroke="#ef4444"
                                strokeWidth={3}
                                strokeLinecap="round"
                            />
                            <text x={scaleX(supplyPoints[2].q) + 5} y={scaleY(supplyPoints[2].p)} className="fill-red-600 text-sm font-bold">
                                S
                            </text>

                            {/* Equilibrium Point */}
                            <motion.circle
                                initial={false}
                                animate={{ cx: eqX, cy: eqY }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                r={8}
                                fill="#22c55e"
                                stroke="#fff"
                                strokeWidth={2}
                            />
                            <text x={eqX + 12} y={eqY - 5} className="fill-green-600 text-xs font-medium">
                                E ({Math.round(equilibriumQuantity)}, ₹{Math.round(equilibriumPrice)})
                            </text>

                            {/* Dotted lines to axes */}
                            <motion.line
                                initial={false}
                                animate={{ x1: eqX, y1: eqY, x2: eqX }}
                                x2={eqX} y2={height - padding} stroke="#22c55e" strokeDasharray="4,2" strokeWidth={1.5}
                            />
                            <motion.line
                                initial={false}
                                animate={{ x1: eqX, y1: eqY, y2: eqY }}
                                x1={eqX} y1={eqY} x2={padding} y2={eqY} stroke="#22c55e" strokeDasharray="4,2" strokeWidth={1.5}
                            />
                        </svg>
                    </div>

                    {/* Controls & Info */}
                    <div className="space-y-6">
                        {/* Demand Slider */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <label className="font-medium text-blue-700 dark:text-blue-400 flex items-center gap-2">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                                    Demand Shift
                                </label>
                                <span className="text-sm text-slate-500">
                                    {demandShift > 0 ? '→ Right (Increase)' : demandShift < 0 ? '← Left (Decrease)' : 'No Shift'}
                                </span>
                            </div>
                            <Slider
                                value={[demandShift]}
                                onValueChange={(v) => setDemandShift(v[0])}
                                min={-50}
                                max={50}
                                step={5}
                                className="w-full"
                            />
                            <p className="text-xs text-slate-500">
                                Causes: Income ↑, Tastes change, Population ↑, Expectations, Related goods prices
                            </p>
                        </div>

                        {/* Supply Slider */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <label className="font-medium text-red-700 dark:text-red-400 flex items-center gap-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                                    Supply Shift
                                </label>
                                <span className="text-sm text-slate-500">
                                    {supplyShift > 0 ? '→ Right (Increase)' : supplyShift < 0 ? '← Left (Decrease)' : 'No Shift'}
                                </span>
                            </div>
                            <Slider
                                value={[supplyShift]}
                                onValueChange={(v) => setSupplyShift(v[0])}
                                min={-50}
                                max={50}
                                step={5}
                                className="w-full"
                            />
                            <p className="text-xs text-slate-500">
                                Causes: Input costs, Technology, Government policy, Natural events
                            </p>
                        </div>

                        {/* Equilibrium Summary */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-xl">
                                <div className="text-sm text-green-600 dark:text-green-400 font-medium">Equilibrium Price</div>
                                <div className="text-2xl font-bold text-green-700 dark:text-green-300 flex items-center gap-1">
                                    ₹{Math.round(equilibriumPrice)}
                                    {priceChange > 0 ? <ArrowUpRight className="w-4 h-4" /> : priceChange < 0 ? <ArrowDownRight className="w-4 h-4" /> : null}
                                </div>
                                <div className="text-xs text-green-500">
                                    {priceChange > 0 ? `+${Math.round(priceChange)}` : priceChange < 0 ? Math.round(priceChange) : 'No change'}
                                </div>
                            </div>
                            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl">
                                <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Equilibrium Qty</div>
                                <div className="text-2xl font-bold text-purple-700 dark:text-purple-300 flex items-center gap-1">
                                    {Math.round(equilibriumQuantity)}
                                    {quantityChange > 0 ? <ArrowUpRight className="w-4 h-4" /> : quantityChange < 0 ? <ArrowDownRight className="w-4 h-4" /> : null}
                                </div>
                                <div className="text-xs text-purple-500">
                                    {quantityChange > 0 ? `+${Math.round(quantityChange)}` : quantityChange < 0 ? Math.round(quantityChange) : 'No change'}
                                </div>
                            </div>
                        </div>

                        {/* UPSC Tip */}
                        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl border-l-4 border-amber-500">
                            <div className="font-bold text-amber-700 dark:text-amber-400 text-sm mb-1">UPSC Tip</div>
                            <p className="text-xs text-amber-600 dark:text-amber-300">
                                {demandShift > 0 && supplyShift === 0 && "Demand ↑ alone → Both Price & Quantity ↑"}
                                {demandShift < 0 && supplyShift === 0 && "Demand ↓ alone → Both Price & Quantity ↓"}
                                {supplyShift > 0 && demandShift === 0 && "Supply ↑ alone → Price ↓, Quantity ↑"}
                                {supplyShift < 0 && demandShift === 0 && "Supply ↓ alone → Price ↑, Quantity ↓"}
                                {demandShift > 0 && supplyShift > 0 && "Both ↑ → Quantity definitely ↑, Price depends on magnitude"}
                                {demandShift < 0 && supplyShift < 0 && "Both ↓ → Quantity definitely ↓, Price depends on magnitude"}
                                {demandShift === 0 && supplyShift === 0 && "At equilibrium: Quantity Demanded = Quantity Supplied"}
                                {demandShift > 0 && supplyShift < 0 && "D↑ & S↓ → Price definitely ↑, Quantity depends on magnitude"}
                                {demandShift < 0 && supplyShift > 0 && "D↓ & S↑ → Price definitely ↓, Quantity depends on magnitude"}
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
