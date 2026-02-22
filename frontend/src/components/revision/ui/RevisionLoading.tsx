import React from 'react';
import { Loader2 } from 'lucide-react';

export default function RevisionLoading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
            <div className="relative">
                <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-20 rounded-full animate-pulse" />
                <Loader2 className="w-12 h-12 text-indigo-600 animate-spin relative z-10" />
            </div>
            <p className="text-muted-foreground font-medium text-sm animate-pulse">Initializing Learning Engine...</p>
        </div>
    );
}
