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
            {/* Evening Session Component - reads morning progress */}
            <Batch1_1EveningSession weekId={weekId} dayId={dayId} />
        </div>
    );
}
