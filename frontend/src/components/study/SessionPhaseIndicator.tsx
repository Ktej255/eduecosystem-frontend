"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Circle, Clock, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface SessionPhaseIndicatorProps {
    currentPhase: 1 | 2;
    currentCycle: number;
    totalPhase1Cycles: number;
    currentStep: "study" | "explanation" | "break";
    totalElapsedMs: number;
    targetMs: number;
    className?: string;
}

export default function SessionPhaseIndicator({
    currentPhase,
    currentCycle,
    totalPhase1Cycles,
    currentStep,
    totalElapsedMs,
    targetMs,
    className,
}: SessionPhaseIndicatorProps) {
    // Calculate phase 1 cycle indicators
    const phase1Cycles = Array.from({ length: totalPhase1Cycles }, (_, i) => ({
        number: i + 1,
        completed: currentPhase > 1 || (currentPhase === 1 && i + 1 < currentCycle),
        current: currentPhase === 1 && i + 1 === currentCycle,
    }));

    // Overall progress percentage
    const overallProgress = Math.min((totalElapsedMs / targetMs) * 100, 100);

    // Format duration
    const formatDuration = (ms: number): string => {
        const hours = Math.floor(ms / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        }
        return `${minutes}m`;
    };

    return (
        <div className={cn("space-y-4", className)}>
            {/* Phase Status */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Badge
                        variant="outline"
                        className={cn(
                            "px-3 py-1 font-medium",
                            currentPhase === 1
                                ? "bg-blue-500/10 text-blue-600 border-blue-500/50"
                                : "bg-purple-500/10 text-purple-600 border-purple-500/50"
                        )}
                    >
                        <Zap className="w-3 h-3 mr-1" />
                        Phase {currentPhase}
                    </Badge>

                    <Badge
                        variant="outline"
                        className={cn(
                            "px-3 py-1",
                            currentStep === "study"
                                ? "bg-green-500/10 text-green-600"
                                : currentStep === "explanation"
                                    ? "bg-amber-500/10 text-amber-600"
                                    : "bg-muted-foreground/10 text-muted-foreground"
                        )}
                    >
                        {currentStep === "study" && "📚 Studying"}
                        {currentStep === "explanation" && "🎤 Recording"}
                        {currentStep === "break" && "☕ Break"}
                    </Badge>
                </div>

                <div className="text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 inline mr-1" />
                    {formatDuration(totalElapsedMs)} / {formatDuration(targetMs)}
                </div>
            </div>

            {/* Phase 1 Cycle Indicators */}
            {currentPhase === 1 && (
                <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-16">Phase 1:</span>
                    <div className="flex gap-1">
                        {phase1Cycles.map((cycle) => (
                            <div
                                key={cycle.number}
                                className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all",
                                    cycle.completed
                                        ? "bg-green-500 text-white"
                                        : cycle.current
                                            ? "bg-blue-500 text-white ring-2 ring-blue-300 ring-offset-2"
                                            : "bg-muted text-muted-foreground"
                                )}
                            >
                                {cycle.completed ? (
                                    <CheckCircle className="w-4 h-4" />
                                ) : (
                                    cycle.number
                                )}
                            </div>
                        ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">
                        → 15 min break → Phase 2
                    </span>
                </div>
            )}

            {/* Phase 2 indicator */}
            {currentPhase === 2 && (
                <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground w-16">Phase 2:</span>
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-purple-500/10">
                            Cycle {currentCycle}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                            45-min study sessions until target reached
                        </span>
                    </div>
                </div>
            )}

            {/* Overall Progress Bar */}
            <div className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Overall Progress</span>
                    <span>{Math.round(overallProgress)}%</span>
                </div>
                <Progress value={overallProgress} className="h-2" />
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground pt-2 border-t">
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span>Phase 1: 25 min study</span>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-purple-500" />
                    <span>Phase 2: 45 min study</span>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span>Completed</span>
                </div>
            </div>
        </div>
    );
}
