"use client";

import RevenueIntelligence from "@/components/admin/RevenueIntelligence";
import { TrendingUp } from "lucide-react";

export default function AnalyticsPage() {
    return (
        <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6 pb-20 bg-slate-950 min-h-screen">
            <div className="flex justify-between items-center bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
                <div>
                    <h2 className="text-2xl font-black text-white flex items-center gap-3 tracking-tight uppercase">
                        <TrendingUp className="w-8 h-8 text-blue-500" />
                        Revenue Intelligence
                    </h2>
                    <p className="text-sm text-slate-400 mt-1 font-medium">
                        Real-time financial tracking and marketing ROI analysis.
                    </p>
                </div>
            </div>

            <RevenueIntelligence />
        </div>
    );
}
