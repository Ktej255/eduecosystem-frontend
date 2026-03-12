"use client";

import HistoryScheduleView from '@/components/upsc/subjects/history/HistoryScheduleView';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function HistorySchedulePage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <Link
                href="/student/upsc/history"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground dark:hover:text-white mb-6"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to History Dashboard
            </Link>
            <HistoryScheduleView />
        </div>
    );
}
