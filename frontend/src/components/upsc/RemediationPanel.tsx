"use client";

import React, { useState, useEffect } from 'react';
import { 
    Zap, 
    AlertCircle, 
    ChevronRight, 
    MessageSquare, 
    Target, 
    Brain,
    Lock,
    TrendingUp,
    TrendingDown,
    Minus,
    ArrowUpRight,
    Loader2
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import api from '@/lib/api';

interface RemediationStep {
    step: number;
    type: 'video' | 'ai_chat' | 'mcq' | 'recall';
    label: string;
    action: string;
    content_id?: string;
    icon: string;
    is_mandatory: boolean;
}

interface WeakNode {
    node_id: string;
    node_name: string;
    mastery_score: number;
    is_at_risk: boolean;
    mastery_velocity: number;
    stability_score: number;
    remediation_plan: RemediationStep[];
}

export default function RemediationPanel({ subject }: { subject: string }) {
    const [weakNodes, setWeakNodes] = useState<WeakNode[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeWizard, setActiveWizard] = useState<WeakNode | null>(null);
    const [currentStep, setCurrentStep] = useState(1);

    useEffect(() => {
        const fetchWeak = async () => {
            setLoading(true);
            try {
                const res = await api.get(`/engine/weak-nodes?subject_slug=${encodeURIComponent(subject)}`);
                setWeakNodes(res.data);
            } catch (err) {
                console.error("Remediation lookup failed:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchWeak();
    }, [subject]);

    if (loading) return (
        <div className="p-12 flex flex-col items-center justify-center gap-4 bg-muted/5 rounded-3xl border-2 border-dashed border-emerald-500/10 animate-pulse">
            <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground font-mono">Syncing Synapse Health...</span>
        </div>
    );

    if (weakNodes.length === 0) return null;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-black tracking-tighter text-foreground flex items-center gap-2">
                        <Zap className="w-5 h-5 text-amber-500 fill-amber-500" />
                        Healing Engine
                    </h2>
                    <p className="text-[10px] text-muted-foreground uppercase font-black tracking-widest font-mono">
                        Phase 12: Sequenced Remediation Active
                    </p>
                </div>
                <Badge variant="outline" className="text-[10px] border-emerald-500/20 text-emerald-500 font-black px-2 py-0.5">
                    {weakNodes.length} Critical Latencies
                </Badge>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {weakNodes.map((node) => (
                    <Card 
                        key={node.node_id} 
                        className={`relative group overflow-hidden transition-all duration-300 bg-background border-2 ${
                            node.is_at_risk 
                                ? 'border-rose-500/40 shadow-[0_0_25px_rgba(244,63,94,0.1)] hover:border-rose-500' 
                                : 'border-emerald-500/10 hover:border-emerald-500/30'
                        }`}
                    >
                        <div className={`absolute top-0 left-0 w-1 h-full ${node.is_at_risk ? 'bg-rose-500' : 'bg-emerald-500/40'}`} />

                        <CardContent className="p-5 pl-7">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="font-black text-sm tracking-tight text-foreground truncate max-w-[200px]">
                                            {node.node_name}
                                        </h3>
                                        {node.mastery_velocity > 0 ? (
                                            <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                                        ) : node.mastery_velocity < -5.0 ? (
                                            <TrendingDown className="w-3.5 h-3.5 text-rose-500 animate-bounce" />
                                        ) : (
                                            <Minus className="w-3.5 h-3.5 text-muted-foreground opacity-30" />
                                        )}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-2">
                                            <Progress value={node.mastery_score} className="w-16 h-1" />
                                            <span className="text-[9px] font-black font-mono">{Math.round(node.mastery_score)}%</span>
                                        </div>
                                        <div className="h-3 w-[1px] bg-muted" />
                                        <span className="text-[9px] font-black text-muted-foreground uppercase tracking-widest font-mono">
                                            STABILITY: {Math.round(node.stability_score * 100)}%
                                        </span>
                                    </div>
                                </div>

                                {node.is_at_risk && (
                                    <Badge className="bg-rose-500 text-white border-0 text-[8px] font-black px-1.5 animate-pulse uppercase tracking-[0.2em]">
                                        RELAPSE
                                    </Badge>
                                )}
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-muted/30">
                                <span className="text-[9px] font-black text-muted-foreground uppercase italic flex items-center gap-1 opacity-60">
                                    <Brain className="w-3 h-3 text-emerald-500" />
                                    {node.remediation_plan.length}-Stage Healing Ready
                                </span>
                                <button 
                                    onClick={() => {
                                        setActiveWizard(node);
                                        setCurrentStep(1);
                                    }}
                                    className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-2 ${
                                        node.is_at_risk 
                                            ? 'bg-rose-500 text-white shadow-xl shadow-rose-500/20 hover:scale-105 active:scale-95' 
                                            : 'bg-emerald-600/10 text-emerald-600 hover:bg-emerald-600 hover:text-white'
                                    }`}
                                >
                                    Start Healing Journey
                                    <ChevronRight className="w-3 h-3" />
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Healing Wizard Overlay */}
            {activeWizard && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300">
                    <div className="bg-[#050505] border-2 border-emerald-500/20 w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)] relative">
                        {/* Header */}
                        <div className="bg-gradient-to-br from-emerald-600/10 to-transparent p-8 border-b border-white/5">
                            <button 
                                onClick={() => setActiveWizard(null)}
                                className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full text-muted-foreground hover:text-white transition-all"
                            >
                                <Minus className="w-6 h-6 rotate-45" />
                            </button>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/20">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black tracking-tighter text-white">
                                        Synthesizing Recovery: {activeWizard.node_name}
                                    </h2>
                                    <p className="text-[10px] text-emerald-500 uppercase font-black tracking-[0.3em] font-mono">
                                        Protocol: Stage-12 Adaptive Sequencer
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sequenced Stages */}
                        <div className="p-10 space-y-10 max-h-[60vh] overflow-y-auto custom-scrollbar">
                            {activeWizard.remediation_plan.map((step, idx) => (
                                <div key={idx} className="flex gap-8 group">
                                    <div className="flex flex-col items-center">
                                        <div className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center transition-all duration-500 ${
                                            idx + 1 === currentStep 
                                                ? 'bg-emerald-600 border-emerald-400 text-white scale-110 shadow-[0_0_30px_rgba(16,185,129,0.4)]' 
                                                : idx + 1 < currentStep
                                                    ? 'bg-emerald-600/20 border-emerald-500/40 text-emerald-500'
                                                    : 'border-white/5 text-muted-foreground opacity-40'
                                        }`}>
                                            <span className="text-xl font-black">
                                                {idx + 1 < currentStep ? '✓' : step.icon}
                                            </span>
                                        </div>
                                        {idx < activeWizard.remediation_plan.length - 1 && (
                                            <div className="w-0.5 h-16 bg-gradient-to-b from-emerald-500/20 to-transparent my-2" />
                                        )}
                                    </div>
                                    <div className={`pt-1 flex-1 transition-all duration-500 ${idx + 1 === currentStep ? 'opacity-100' : 'opacity-40'}`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className={`text-xs font-black uppercase tracking-[0.2em] font-mono ${idx + 1 === currentStep ? 'text-emerald-400' : 'text-muted-foreground'}`}>
                                                STAGE {step.step}: {step.label}
                                            </h4>
                                            {step.is_mandatory && idx !== 0 && (
                                                <Lock className="w-3.5 h-3.5 text-rose-500/40" />
                                            )}
                                        </div>
                                        <p className={`text-base font-medium leading-relaxed ${idx + 1 === currentStep ? 'text-white' : 'text-muted-foreground'}`}>
                                            {step.action}
                                        </p>
                                        
                                        {idx + 1 === currentStep && (
                                            <button 
                                                onClick={() => {
                                                    if (currentStep < activeWizard.remediation_plan.length) {
                                                        setCurrentStep(currentStep + 1);
                                                    } else {
                                                        setActiveWizard(null);
                                                    }
                                                }}
                                                className="mt-6 px-10 py-3 bg-emerald-600 text-white rounded-2xl text-xs font-black uppercase tracking-[0.25em] flex items-center gap-3 group-hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-emerald-600/30"
                                            >
                                                {currentStep === activeWizard.remediation_plan.length ? 'Finalize Healing' : 'Proceed to Next Stage'}
                                                <ArrowUpRight className="w-4 h-4" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer Requirement */}
                        <div className="bg-[#0f0f0f] p-6 border-t border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <AlertCircle className="w-4 h-4 text-rose-500" />
                                <p className="text-[10px] text-rose-500/80 font-black uppercase tracking-[0.1em] font-mono">
                                    HEALING TARGET: STABILITY ≥ 0.8 REQUIRED
                                </p>
                            </div>
                            <Progress value={activeWizard.stability_score * 100} className="w-32 h-1.5 opacity-40 bg-white/5" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
