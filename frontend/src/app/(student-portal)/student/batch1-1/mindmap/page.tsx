"use client";

import MindMapGenerator from "@/components/batch1-1/ai/MindMapGenerator";
import { ArrowLeft, Network } from 'lucide-react';
import Link from 'next/link';

export default function MindMapPage() {
    return (
        <div className="container mx-auto p-6 max-w-7xl">
            <div className="mb-8">
                <Link
                    href="/student/batch1-1"
                    className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600 mb-4 transition-colors"
                >
                    <ArrowLeft className="mr-1 h-4 w-4" /> Back to Dashboard
                </Link>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-cyan-600 dark:from-indigo-300 dark:to-cyan-300 flex items-center gap-3">
                    <Network className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                    Smart Mind Map Generator
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Turn any topic into an interactive concept map instantly using AI.
                </p>
            </div>

            <MindMapGenerator />
        </div>
    );
}
