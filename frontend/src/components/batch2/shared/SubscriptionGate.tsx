"use client";

import React from "react";
import { useAuth } from "@/contexts/auth-context";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";

interface SubscriptionGateProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}

export default function SubscriptionGate({ children, fallback }: SubscriptionGateProps) {
    const { user, loading } = useAuth();

    if (loading) {
        return <div className="animate-pulse bg-slate-800/50 h-32 rounded-xl" />;
    }

    const hasAccess = user?.is_batch2_authorized;

    if (hasAccess) {
        return <>{children}</>;
    }

    if (fallback) {
        return <>{fallback}</>;
    }

    return (
        <div className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950/50 p-8 text-center">
            {/* Blurry Background of what could have been */}
            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md z-10 flex flex-col items-center justify-center p-6 space-y-4">
                <div className="p-4 bg-amber-500/20 rounded-full text-amber-500 mb-2">
                    <Lock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Premium Content</h3>
                <p className="text-slate-400 max-w-md">
                    This deep-dive session is available for Batch 2 students. Unlock the full Ancient Wisdom portal to continue.
                </p>
                <button className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:from-amber-400 hover:to-orange-500 transition-all shadow-lg hover:shadow-amber-500/20">
                    Unlock Access
                </button>
            </div>

            {/* Hints of content behind */}
            <div className="opacity-10 blur-sm pointer-events-none select-none" aria-hidden="true">
                {children}
            </div>
        </div>
    );
}
