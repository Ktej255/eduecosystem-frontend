"use client";

import { use } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Batch1_1EveningSession from "@/components/batch1-1/evening/Batch1_1EveningSession";

interface PageProps {
    params: Promise<{
        weekId: string;
        dayId: string;
    }>;
}

export default function EveningSessionPage({ params }: PageProps) {
    const resolvedParams = use(params);
    const weekId = parseInt(resolvedParams.weekId);
    const dayId = parseInt(resolvedParams.dayId);

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6">
            {/* Back Button */}
            <Link
                href={`/student/batch1-1`}
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-4"
            >
                <ChevronLeft className="w-5 h-5" />
                <span>Back to Batch 1.1</span>
            </Link>

            {/* Evening Session Component - reads morning progress */}
            <Batch1_1EveningSession weekId={weekId} dayId={dayId} />
        </div>
    );
}
