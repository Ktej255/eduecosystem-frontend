"use client";

import ContentHealthMonitor from "@/components/admin/ContentHealthMonitor";
import { Activity } from "lucide-react";

export default function ContentSystemPage() {
    return (
        <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6 pb-20 bg-slate-950 min-h-screen">
            <div className="flex justify-between items-center bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
                <div>
                    <h2 className="text-2xl font-black text-white flex items-center gap-3 tracking-tight uppercase">
                        <Activity className="w-8 h-8 text-emerald-500" />
                        Content Health Monitor
                    </h2>
                    <p className="text-sm text-slate-400 mt-1 font-medium">
                        Unified integrity tracking for UPSC, Meditation, and Graphotherapy content modules.
                    </p>
                </div>
            </div>

            <ContentHealthMonitor />
        </div>
    );
}
