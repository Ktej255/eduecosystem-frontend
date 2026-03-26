"use client";

import { AlertCircle, Newspaper } from "lucide-react";
import Link from "next/link";

export default function PlaceholderPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 text-center">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800 max-w-md w-full shadow-xl">
                <div className="flex justify-center mb-6">
                    <div className="p-4 bg-blue-100 dark:bg-blue-800/50 rounded-full animate-pulse">
                        <Newspaper className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                    </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Current Affairs Admin</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Admin panel for managing UPSC Daily Current Affairs is being finalized.
                </p>
                <div className="space-y-4">
                    <Link 
                        href="/admin" 
                        className="block w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/20"
                    >
                        Return to Admin Dashboard
                    </Link>
                    <div className="flex items-center justify-center gap-2 text-xs text-blue-600 dark:text-blue-500 font-medium bg-blue-100/50 dark:bg-blue-900/30 py-2 rounded-lg">
                        <AlertCircle className="h-3 w-3" />
                        Stabilization Mode: ACTIVE
                    </div>
                </div>
            </div>
        </div>
    );
}
