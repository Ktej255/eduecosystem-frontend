"use client";

import React, { useState } from "react";
import HistoryModuleV1 from "./HistoryModuleV1";
import HistoryModuleV2 from "./HistoryModuleV2";
import { Button } from "@/components/ui/button";
import { Copy, LayoutTemplate } from "lucide-react";

interface HistoryModuleProps {
    onComplete: () => void;
    isCompleted: boolean;
}

export default function HistoryModuleWrapper({ onComplete, isCompleted }: HistoryModuleProps) {
    const [version, setVersion] = useState<"v1" | "v2">("v2");

    return (
        <div className="relative min-h-screen">
            {/* Version Switcher (Sticky Top) */}
            <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200 p-2 shadow-sm flex justify-center gap-4">
                <Button
                    variant={version === "v1" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setVersion("v1")}
                    className="flex items-center gap-2"
                >
                    <LayoutTemplate className="w-4 h-4" /> Version 1 (Timeline)
                </Button>
                <Button
                    variant={version === "v2" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setVersion("v2")}
                    className="flex items-center gap-2"
                >
                    <Copy className="w-4 h-4" /> Version 2 (Scrapbook)
                </Button>
            </div>

            {/* Render Selected Version */}
            {version === "v1" ? (
                <HistoryModuleV1 onComplete={onComplete} isCompleted={isCompleted} />
            ) : (
                <HistoryModuleV2 onComplete={onComplete} isCompleted={isCompleted} />
            )}
        </div>
    );
}
