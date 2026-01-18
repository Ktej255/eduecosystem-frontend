"use client";

import MainsEvaluator from "@/components/batch1-1/ai/MainsEvaluator";
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MainsEvaluationPage() {
    return (
        <div className="container mx-auto p-6 max-w-7xl">
            <div className="mb-8">
                <Link 
                    href="/student/batch1-1" 
                    className="inline-flex items-center text-sm text-gray-500 hover:text-indigo-600 mb-4 transition-colors"
                >
                    <ArrowLeft className="mr-1 h-4 w-4" /> Back to Dashboard
                </Link>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-violet-700 dark:from-indigo-300 dark:to-violet-300">
                    AI Mains Answer Evaluator
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Get instant, strict, and detailed feedback on your handwritten answers using our advanced Vision AI.
                </p>
            </div>

            <MainsEvaluator />
        </div>
    );
}
