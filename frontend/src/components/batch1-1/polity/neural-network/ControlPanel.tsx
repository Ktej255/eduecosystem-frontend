
"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Power, Activity, Zap, ShieldCheck, AlertTriangle } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface ControlPanelProps {
    onScenarioTrigger: (scenario: string) => void;
    mode: 'NORMAL' | 'EMERGENCY' | 'ELECTION';
}

export default function ControlPanel({ onScenarioTrigger, mode }: ControlPanelProps) {
    return (
        <div className="h-full p-4 flex flex-col gap-6">

            {/* 1. The Master Switch */}
            <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    The Master Switch
                </h3>

                <div className={`p-4 rounded-xl border transition-all duration-300
            ${mode === 'EMERGENCY'
                        ? 'bg-red-500/10 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                        : 'bg-slate-800/50 border-slate-700'}
        `}>
                    <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm font-bold flex items-center gap-2
                    ${mode === 'EMERGENCY' ? 'text-red-400' : 'text-slate-300'}
                `}>
                            <Power className="w-4 h-4" />
                            National Emergency
                        </span>
                        <Switch
                            checked={mode === 'EMERGENCY'}
                            onCheckedChange={() => onScenarioTrigger('emergency')}
                            className="data-[state=checked]:bg-red-600"
                        />
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">
                        Article 352. Suspends Federalism. Centre can legislate on State Lists.
                    </p>
                </div>
            </div>

            {/* 2. Scenario Triggers */}
            <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Test Circuits
                </h3>

                <Button
                    variant="outline"
                    className="w-full justify-start gap-2 border-slate-700 hover:bg-slate-800 text-slate-300 text-xs h-9"
                    disabled={mode === 'EMERGENCY'}
                    onClick={() => onScenarioTrigger('bill_pass')}
                >
                    <Activity className="w-3 h-3 text-cyan-500" />
                    Pass Ordinary Bill
                </Button>

                <Button
                    variant="outline"
                    className="w-full justify-start gap-2 border-slate-700 hover:bg-slate-800 text-slate-300 text-xs h-9"
                    onClick={() => onScenarioTrigger('governor_reserve')}
                >
                    <Zap className="w-3 h-3 text-amber-500" />
                    Governor Reserves Bill
                </Button>

                <div className="h-px bg-slate-800 my-2" />

                <Button
                    variant="outline"
                    className="w-full justify-start gap-2 border-red-900/30 hover:bg-red-900/20 text-red-300 text-xs h-9"
                    onClick={() => onScenarioTrigger('unconstitutional_law')}
                >
                    <ShieldCheck className="w-3 h-3 text-red-500" />
                    Pass Unconstitutional Law
                </Button>

                <Button
                    variant="outline"
                    className="w-full justify-start gap-2 border-red-900/30 hover:bg-red-900/20 text-red-300 text-xs h-9"
                    onClick={() => onScenarioTrigger('violate_rights')}
                >
                    <AlertTriangle className="w-3 h-3 text-orange-500" />
                    Violate Fundamental Rights
                </Button>
            </div>

            {/* 3. Legend */}
            <div className="mt-auto space-y-3 p-4 bg-black/20 rounded-lg border border-white/5">
                <h4 className="text-[10px] font-bold text-slate-500 uppercase">Circuit Legend</h4>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_cyan]"></div>
                        <span className="text-[10px] text-slate-400">Union Power (Active)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span className="text-[10px] text-slate-400">State Power (Active)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="text-[10px] text-slate-400">Override / Veto</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                        <span className="text-[10px] text-slate-400">Power Cut (Inactive)</span>
                    </div>
                </div>
            </div>

        </div>
    );
}
