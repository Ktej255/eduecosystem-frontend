"use client";

import React from "react";
import { BackToSadhanaButton } from "@/components/batch2/sadhana/shared/BackToSadhanaButton";

export default function ToolsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen bg-[var(--sp-bg)]">
            <BackToSadhanaButton />
            {children}
        </div>
    );
}
