"use client";

import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import RASAnswerWritingSession from "@/components/ras/RASAnswerWritingSession";

export default function RASMainsPage() {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-[#050505]">
            <RASAnswerWritingSession onClose={() => router.back()} />
        </div>
    );
}
