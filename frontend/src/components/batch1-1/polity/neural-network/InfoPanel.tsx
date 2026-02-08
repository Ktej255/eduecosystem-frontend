
"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PolityNode } from './types';

interface InfoPanelProps {
    selectedNode: PolityNode | null;
    activeScenario: string | null;
}

export default function InfoPanel({ selectedNode, activeScenario }: InfoPanelProps) {
    return (
        <Card className="w-80 h-full bg-slate-900/90 border-slate-700 text-slate-100 overflow-y-auto">
            <CardHeader>
                <CardTitle className="text-sm font-bold uppercase tracking-wider text-slate-400">
                    Neural Analysis
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Node Details */}
                {selectedNode ? (
                    <div>
                        <h3 className="text-xl font-bold text-sky-400 mb-1">{selectedNode.data.label}</h3>
                        <p className="text-xs text-slate-400 mb-4">{selectedNode.data.articleRange}</p>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            {selectedNode.data.description}
                        </p>
                        <div className="mt-4 flex gap-2">
                            <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400 border border-slate-700">
                                {selectedNode.data.category}
                            </span>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-10 text-slate-500 text-sm">
                        Select a node to view Constitutional details.
                    </div>
                )}

                <Separator className="bg-slate-700" />

                {/* Scenario Feedback */}
                <div>
                    <h4 className="text-xs font-semibold mb-3 text-slate-500">Active Signals</h4>
                    {activeScenario ? (
                        <div className="p-3 bg-slate-800 rounded border border-slate-700">
                            <p className="text-sm font-medium text-amber-400 mb-1">
                                {activeScenario === 'emergency' && "National Emergency (Art 352)"}
                                {activeScenario === 'impeachment' && "Impeachment Motion (Art 61)"}
                                {activeScenario === 'appointment' && "PM Appointment (Art 75)"}
                                {activeScenario === 'law' && "Judicial Review (Art 13): NJAC Act"}
                                {activeScenario === 'rights' && "Writ Petition (Art 32): Habeas Corpus"}
                                {['bill_pass', 'governor_reserve'].includes(activeScenario || '') && activeScenario}
                            </p>
                            <p className="text-xs text-slate-400">
                                {activeScenario === 'emergency' && "Federal structure suspended. Centre becomes unitary. Fundamental Rights (Art 19) suspended."}
                                {activeScenario === 'impeachment' && "Parliament initiates removal. 14 days notice required. Special majority needed in both houses."}
                                {activeScenario === 'appointment' && "President appoints PM. Logic: Must appoint leader of majority party in Lok Sabha."}
                                {activeScenario === 'law' && "Supreme Court strikes down law as 'Unconstitutional' for violating Basic Structure."}
                                {activeScenario === 'rights' && "Supreme Court issues Writ to enforce Fundamental Rights. Direct access to SC."}
                                {['bill_pass', 'governor_reserve'].includes(activeScenario || '') && "Simulation of legislative procedure."}
                            </p>
                        </div>
                    ) : (
                        <p className="text-xs text-slate-600 italic">No active scenarios running.</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
