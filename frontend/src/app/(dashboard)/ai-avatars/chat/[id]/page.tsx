"use client";

import { AlertCircle, Clock } from "lucide-react";
import Link from "next/link";

export default function PlaceholderPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-2xl border border-amber-200 dark:border-amber-800 max-w-md w-full shadow-xl">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-amber-100 dark:bg-amber-800/50 rounded-full animate-pulse">
                        <Clock className="h-12 w-12 text-amber-600 dark:text-amber-400" />
                    </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Coming Soon</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    This module is currently under stabilization as part of the EduEcosystem 2026 launch. 
                    Check back shortly!
                </p>
                <div className="space-y-4">
                    <Link 
                        href="/student/dashboard" 
                        className="block w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/20"
                    >
                        Return to Dashboard
                    </Link>
                    <div className="flex items-center justify-center gap-2 text-xs text-amber-600 dark:text-amber-500 font-medium bg-amber-100/50 dark:bg-amber-900/30 py-2 rounded-lg">
                        <AlertCircle className="h-3 w-3" />
                        Stabilization Mode: ACTIVE
                    </div>
                </div>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full text-left">
                {[
                    { title: "Deep Learning", desc: "AI-driven curriculum mapping" },
                    { title: "Smart Revision", desc: "Automated spaced repetition" },
                    { title: "Exam Simulator", desc: "Real-time UPSC environment" }
                ].map((item, i) => (
                    <div key={i} className="p-5 bg-white dark:bg-gray-900 border border-border rounded-xl shadow-sm">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
