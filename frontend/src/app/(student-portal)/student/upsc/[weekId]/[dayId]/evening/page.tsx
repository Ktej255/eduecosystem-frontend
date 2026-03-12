"use client";

import { use } from "react";
import EveningSection from "@/components/upsc/infrastructure/workflow/EveningSection";
import { useRouter } from "next/navigation";

interface PageProps {
    params: Promise<{
        weekId: string;
        dayId: string;
    }>;
}

export default function EveningPage({ params }: PageProps) {
    const resolvedParams = use(params);
    const router = useRouter();
    
    return (
        <div className="min-h-screen bg-background">
            <EveningSection onBack={() => router.back()} />
        </div>
    );
}
