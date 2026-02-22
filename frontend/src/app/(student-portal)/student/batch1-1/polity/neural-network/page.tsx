
"use client";

import React, { useState, useEffect } from 'react';
import PolityGalaxy from '@/components/batch1-1/polity/neural-network/PolityGalaxy';
import ControlPanel from '@/components/batch1-1/polity/neural-network/ControlPanel';
import InfoPanel from '@/components/batch1-1/polity/neural-network/InfoPanel';
import { PolityNode } from '@/components/batch1-1/polity/neural-network/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AlertTriangle, ShieldCheck, Zap } from 'lucide-react';

export default function PolityNeuralNetworkPage() {
    const [selectedNode, setSelectedNode] = useState<PolityNode | null>(null);
    const [activeScenario, setActiveScenario] = useState<string | null>(null);
    const [mode, setMode] = useState<'NORMAL' | 'EMERGENCY' | 'ELECTION'>('NORMAL');

    const handleNodeClick = (node: PolityNode) => {
        setSelectedNode(node);
    };

    const handleScenarioTrigger = (scenario: string) => {
        if (scenario === 'emergency') {
            const newMode = mode === 'EMERGENCY' ? 'NORMAL' : 'EMERGENCY';
            setMode(newMode);
            setActiveScenario(newMode === 'EMERGENCY' ? 'emergency' : null);
        } else if (scenario === 'unconstitutional_law') {
            setActiveScenario('law');
        } else if (scenario === 'violate_rights') {
            setActiveScenario('rights');
        } else {
            setActiveScenario(scenario);
        }
    };

    return (
        <div className={`flex h-screen w-full flex-col overflow-hidden transition-colors duration-500
      ${mode === 'EMERGENCY' ? 'bg-red-950/30' : 'bg-slate-950'}
    `}>
            {/* Header */}
            <header className={`flex h-14 items-center justify-between border-b px-6 backdrop-blur transition-all duration-500
        ${mode === 'EMERGENCY'
                    ? 'bg-red-900/20 border-red-500/30'
                    : 'bg-slate-900/50 border-slate-800'}
      `}>
                <div className="flex items-center gap-4">
                    <Link href="/student/batch1-1/polity">
                        <Button variant="ghost" size="sm" className={`
              ${mode === 'EMERGENCY' ? 'text-red-300 hover:text-red-100' : 'text-muted-foreground hover:text-white'}
            `}>
                            ← Back
                        </Button>
                    </Link>
                    <div className="flex items-center gap-2">
                        <h1 className={`text-lg font-bold bg-clip-text text-transparent transition-all duration-500
              ${mode === 'EMERGENCY'
                                ? 'bg-gradient-to-r from-red-500 to-orange-500'
                                : 'bg-gradient-to-r from-cyan-400 to-blue-600'}
            `}>
                            {mode === 'EMERGENCY' ? 'UNITARY CIRCUIT BOARD' : 'CONSTITUTIONAL CIRCUIT BOARD'}
                        </h1>
                        <Badge variant="outline" className={`text-[10px]
              ${mode === 'EMERGENCY'
                                ? 'border-red-500/50 text-red-500 bg-red-500/10'
                                : 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10'}
            `}>
                            {mode === 'EMERGENCY' ? 'EMERGENCY PROTOCOL' : 'NORMAL MODE'}
                        </Badge>
                    </div>
                </div>

                {/* Status Indicators */}
                <div className="flex items-center gap-4">
                    {mode === 'EMERGENCY' && (
                        <div className="flex items-center gap-2 animate-pulse text-red-500">
                            <AlertTriangle className="w-4 h-4" />
                            <span className="text-xs font-bold tracking-widest uppercase">Federalism Suspended</span>
                        </div>
                    )}
                    {mode === 'NORMAL' && (
                        <div className="flex items-center gap-2 text-emerald-500/70">
                            <ShieldCheck className="w-4 h-4" />
                            <span className="text-xs font-medium tracking-wide uppercase">Checks & Balances Active</span>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content Area */}
            <div className="flex flex-1 overflow-hidden relative">

                {/* Left Control Panel */}
                <aside className={`w-72 border-r z-10 backdrop-blur-sm transition-all duration-500
            ${mode === 'EMERGENCY' ? 'border-red-900/30 bg-red-950/20' : 'border-slate-800 bg-slate-900/30'}
        `}>
                    <ControlPanel onScenarioTrigger={handleScenarioTrigger} mode={mode} />
                </aside>

                {/* Center Canvas */}
                <main className="flex-1 relative">
                    <PolityGalaxy onNodeClick={handleNodeClick} mode={mode} />
                </main>

                {/* Right Info Panel */}
                <aside className={`w-80 border-l z-10 backdrop-blur-sm transition-all duration-500
            ${mode === 'EMERGENCY' ? 'border-red-900/30 bg-red-950/20' : 'border-slate-800 bg-slate-900/30'}
        `}>
                    <InfoPanel selectedNode={selectedNode} activeScenario={activeScenario} />
                </aside>

            </div>
        </div>
    );
}
