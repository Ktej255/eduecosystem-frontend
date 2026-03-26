"use client";

import { AlertCircle, BookOpen } from "lucide-react";
import Link from "next/link";

export default function PlaceholderPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-2xl border border-indigo-200 dark:border-indigo-800 max-w-md w-full shadow-xl">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-indigo-100 dark:bg-indigo-800/50 rounded-full animate-pulse">
                        <BookOpen className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
                    </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Polity Book</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    The comprehensive Indian Polity digital textbook is being indexed for offline access.
                </p>
                <div className="space-y-4">
                    <Link 
                        href="/student/upsc" 
                        className="block w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/20"
                    >
                        Go to UPSC Hub
                    </Link>
                    <div className="flex items-center justify-center gap-2 text-xs text-indigo-600 dark:text-indigo-500 font-medium bg-indigo-100/50 dark:bg-indigo-900/30 py-2 rounded-lg">
                        <AlertCircle className="h-3 w-3" />
                        Stabilization Mode: ACTIVE
                    </div>
                </div>
            </div>
        </div>
    );
}
