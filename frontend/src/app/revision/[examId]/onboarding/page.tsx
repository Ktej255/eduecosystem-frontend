
"use client";

import React, { use } from "react";
import OnboardingFlow from "@/components/revision-portal/OnboardingFlow";
import { exams } from "@/data/exams";
import { notFound } from "next/navigation";

export default function OnboardingPage({ params }: { params: Promise<{ examId: string }> }) {
    const { examId } = use(params);
    const exam = exams.find(e => e.id === examId);

    if (!exam) return notFound();

    return (
        <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-level-1-primary/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-level-4-primary/10 rounded-full blur-[150px]" />
            </div>

            <div className="relative z-10 w-full py-12">
                <OnboardingFlow examId={examId} exam={exam} />
            </div>
        </div>
    );
}
