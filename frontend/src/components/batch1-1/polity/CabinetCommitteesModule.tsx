"use client";

import React from "react";
import { Users, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CabinetCommitteesModuleProps {
    onComplete?: () => void;
    isCompleted?: boolean;
    chapterNumber?: number | string;
}

const CabinetCommitteesModule = ({ onComplete, isCompleted }: CabinetCommitteesModuleProps) => {
    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 bg-muted border-2 border-dashed border-border rounded-xl text-center">
            <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6">
                <Users size={40} />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Chapter 21: Cabinet Committees</h2>
            <p className="text-muted-foreground max-w-md mb-8">
                The content for "Cabinet Committees" is currently being curated.
                Please check back later for the "Kitchen Cabinet" updates!
            </p>
            <div className="flex items-center gap-2 text-sm text-orange-600 bg-orange-50 px-4 py-2 rounded-lg border border-orange-200">
                <AlertTriangle size={16} />
                <span>Content Pending from Author</span>
            </div>
            <div className="mt-8">
                <Button onClick={onComplete} disabled={isCompleted}>
                    {isCompleted ? "Marked as Read" : "Mark as Read"}
                </Button>
            </div>
        </div>
    );
};

export default CabinetCommitteesModule;
