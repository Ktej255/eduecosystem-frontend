"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, PieChart, Coins } from "lucide-react";
import Link from 'next/link';
import BudgetExplorerViz from './visualizations/BudgetExplorerViz';

export default function BudgetPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black">
            {/* Header */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <Link href="/student/batch1/economy">
                            <Button variant="ghost" size="icon">
                                <ArrowLeft className="h-5 w-5" />
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-xl font-bold flex items-center gap-2 text-emerald-900 dark:text-emerald-100">
                                <PieChart className="h-5 w-5 text-emerald-600" />
                                Union Budget & Fiscal Policy
                            </h1>
                            <p className="text-xs text-slate-500">Deficits, FRBM Act, and GST Council analysis.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="border-t-4 border-t-emerald-500">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Coins className="h-5 w-5 text-emerald-500" />
                                Interactive Budget Explorer
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 overflow-hidden rounded-b-xl">
                            <BudgetExplorerViz />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Key Concepts</CardTitle>
                        </CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none text-sm text-slate-700 dark:text-slate-300">
                            <h3>1. Types of Deficits</h3>
                            <ul>
                                <li><strong>Fiscal Deficit:</strong> Total Expenditure - Total Income (excluding debt). Indicates total borrowing req.</li>
                                <li><strong>Revenue Deficit:</strong> Revenue Exp - Revenue Receipts. Indicates savings/dissavings.</li>
                                <li><strong>Primary Deficit:</strong> Fiscal Deficit - Interest Payments. Indicates current year's fiscal stance.</li>
                            </ul>

                            <h3>2. FRBM Act 2003</h3>
                            <p>Goal: To institutionalize financial discipline. Target: Limit Fiscal Deficit to 3% of GDP.</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-4">
                    <Card className="bg-emerald-50 dark:bg-emerald-900/10 border-emerald-100 dark:border-emerald-900/30">
                        <CardContent className="p-6">
                            <h3 className="text-sm font-bold text-emerald-800 dark:text-emerald-300 mb-2">Did You Know?</h3>
                            <p className="text-xs text-emerald-700 dark:text-emerald-400">
                                The terms "Budget" is not mentioned in the Constitution. Article 112 refers to it as the "Annual Financial Statement".
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
