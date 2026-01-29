"use client";

import HistoryScheduleView from '@/components/batch1/history/HistoryScheduleView';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function HistorySchedulePage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <Link
                href="/student/batch1/history"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-6"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to History Dashboard
            </Link>
            <HistoryScheduleView />
        </div>
    );
}
