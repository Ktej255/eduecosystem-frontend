"use client";

import InterventionEngine from "@/components/admin/InterventionEngine";
import { Shield } from "lucide-react";

export default function InterventionsPage() {
    return (
        <div className="space-y-6 max-w-7xl mx-auto p-4 md:p-6 pb-20 bg-slate-950 min-h-screen">
            <div className="flex justify-between items-center bg-slate-900 p-6 rounded-3xl border border-slate-800 shadow-xl">
                <div>
                    <h2 className="text-2xl font-black text-white flex items-center gap-3 tracking-tight uppercase">
                        <Shield className="w-8 h-8 text-indigo-500" />
                        Intervention Engine
                    </h2>
                    <p className="text-sm text-slate-400 mt-1 font-medium">
                        Unified control center for student, teacher, and batch interventions.
                    </p>
                </div>
            </div>

            <InterventionEngine />
        </div>
    );
}
