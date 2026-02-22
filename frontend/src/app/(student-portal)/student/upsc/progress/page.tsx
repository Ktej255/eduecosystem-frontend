"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from 'lucide-react';
import MCQProgressDashboard from '@/components/upsc/MCQProgressDashboard';

export default function MCQProgressPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-muted dark:bg-[#0a0a0a] p-4 md:p-8">
            <Button
                variant="ghost"
                className="mb-8"
                onClick={() => router.back()}
            >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Button>

            <MCQProgressDashboard />
        </div>
    );
}
