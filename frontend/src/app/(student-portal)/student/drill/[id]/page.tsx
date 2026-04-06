"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { DrillStepWizard } from "@/components/upsc/DrillStepWizard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { upscService } from "@/services/upscService";

export default function DrillPage() {
    const params = useParams();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [question, setQuestion] = useState<any>(null);
    const [timerConfig, setTimerConfig] = useState<any>(null);
    const [sessionId, setSessionId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDrillData = async () => {
            try {
                setIsLoading(true);
                const planId = params.id as string;
                // Start with question 1 for now (daily drill sequence)
                const response = await upscService.startDrill(planId, 1);
                
                if (response.isPlaceholder) {
                    setError("Our AI is currently finalizing this Geography topic. Please check back in a few minutes.");
                } else if (response.success || response.session_id) {
                    setSessionId(response.session_id);
                    setQuestion(response.question);
                    setTimerConfig(response.timer_config);
                } else {
                    setError("Drill session could not be started. Please retry.");
                }
            } catch (err) {
                console.error("Failed to start drill:", err);
                setError("Drill session could not be started. Please retry.");
            } finally {
                setIsLoading(false);
            }
        };

        if (params.id) {
            fetchDrillData();
        }
    }, [params.id]);

    const handleSessionComplete = (reportId?: string) => {
        if (reportId) {
            router.push(`/student/reports/${reportId}`);
        } else {
            router.push("/student/drill");
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="h-12 w-12 bg-blue-200 rounded-full mb-4"></div>
                    <div className="h-4 w-48 bg-slate-200 rounded"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center p-8 bg-white rounded-3xl shadow-xl border border-slate-200">
                    <p className="text-red-600 font-bold mb-4">{error}</p>
                    <Button onClick={() => window.location.reload()}>Retry</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" size="icon" onClick={() => router.back()}>
                            <ArrowLeft className="w-5 h-5 text-slate-500" />
                        </Button>
                        <div>
                            <h1 className="text-lg font-bold text-slate-900">
                                Daily Mains Drill
                            </h1>
                            <p className="text-xs text-slate-500">
                                Session ID: {params.id?.toString().slice(0, 8)}...
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                            LIVE SESSION
                        </span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {question && timerConfig && (
                    <DrillStepWizard
                        question={question}
                        timerConfig={timerConfig}
                        sessionId={sessionId}
                        onSessionComplete={handleSessionComplete}
                    />
                )}
            </main>
        </div>
    );
}
