"use client";

import { useRouter, useSearchParams } from "next/navigation";
import RASPomodoroSession from "@/components/ras/RASPomodoroSession";
import { Suspense } from "react";

function RASFocusContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const topic = searchParams.get("topic") || "General Focus Session";

    return (
        <RASPomodoroSession
            topic={topic}
            onExit={() => router.back()}
        />
    );
}

export default function RASFocusPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black text-white p-8">Loading session...</div>}>
            <RASFocusContent />
        </Suspense>
    );
}
