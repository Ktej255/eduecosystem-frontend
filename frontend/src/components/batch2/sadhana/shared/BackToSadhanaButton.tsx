"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function BackToSadhanaButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push("/student/batch2/sadhana")}
            className="fixed top-6 left-6 z-[150] flex items-center gap-2 px-4 py-2 bg-slate-900/60 hover:bg-slate-900/90 text-amber-500/80 hover:text-amber-500 border border-amber-500/20 hover:border-amber-500/50 rounded-full backdrop-blur-md shadow-xl transition-all duration-300 group"
        >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">
                Sadhana Hub
            </span>
        </button>
    );
}
