"use client";

import { AlertCircle, Clock } from "lucide-react";
import Link from "next/link";

export default function PlaceholderPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-2xl border border-emerald-200 dark:border-emerald-800 max-w-md w-full shadow-xl">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-emerald-100 dark:bg-emerald-800/50 rounded-full animate-pulse">
                        <Clock className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
                    </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Editing Interface Coming Soon</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    The AI Avatar customization engine is being optimized for the Saturday launch.
                </p>
                <div className="space-y-4">
                    <Link 
                        href="/student/dashboard" 
                        className="block w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-emerald-600/20"
                    >
                        Return to Dashboard
                    </Link>
                    <div className="flex items-center justify-center gap-2 text-xs text-emerald-600 dark:text-emerald-500 font-medium bg-emerald-100/50 dark:bg-emerald-900/30 py-2 rounded-lg">
                        <AlertCircle className="h-3 w-3" />
                        Stabilization Mode: ACTIVE
                    </div>
                </div>
            </div>
        </div>
    );
}
