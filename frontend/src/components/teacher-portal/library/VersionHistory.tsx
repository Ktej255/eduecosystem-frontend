"use client";

import { useState } from "react";
import {
    History,
    User,
    Clock,
    RotateCcw,
    Check,
    FileText,
    ArrowLeft,
    ChevronRight
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

// Mock Data
interface Version {
    id: string;
    version: string;
    author: string;
    timestamp: string;
    changes: string;
    content: string;
    isCurrent: boolean;
}

const mockVersions: Version[] = [
    {
        id: "v3",
        version: "v2.1",
        author: "Rahul Varma",
        timestamp: "2 hours ago",
        changes: "Updated preamble description and added case studies.",
        content: `The Preamble to the Constitution of India is a brief introductory statement that sets out guidelines, which guide the people of the nation, and to present the principles of the Constitution, and to indicate the source from which the document derives its authority, and meaning.\n\nKey Cases:\n1. Berubari Union case (1960)\n2. Kesavananda Bharati case (1973)\n3. LIC of India case (1995)`,
        isCurrent: true
    },
    {
        id: "v2",
        version: "v2.0",
        author: "Amit Singh",
        timestamp: "1 day ago",
        changes: "Fixed typos in Article 21 section.",
        content: `The Preamble to the Constitution of India is a brief introductory statement that sets out guidelines, which guide the people of the nation, and to present the principles of the Constitution, and to indicate the source from which the document derives its authority, and meaning.\n\nKey Cases:\n1. Berubari Union case (1960)\n2. Kesavananda Bharati case (1973)`,
        isCurrent: false
    },
    {
        id: "v1",
        version: "v1.0",
        author: "System Auto-Save",
        timestamp: "2 days ago",
        changes: "Initial draft creation.",
        content: `The Preamble to the Constitution is a brief introductory statement.\nIt sets out guidelines for the people of the nation.`,
        isCurrent: false
    }
];

export default function VersionHistory() {
    const [selectedVersion, setSelectedVersion] = useState<Version>(mockVersions[0]);

    // Simple diff simulation (visual only)
    const renderDiff = (current: string, previous: string | null) => {
        // This is a simplified visual representation. Real diffing would require a library like 'diff'.
        // Here we just display the current content, but in a real app, we'd highlight changes.
        return (
            <div className="font-mono text-sm leading-relaxed whitespace-pre-wrap">
                {current}
            </div>
        );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px]">
            {/* Version List */}
            <div className="md:col-span-4 flex flex-col gap-4 h-full">
                <Card className="h-full border-border flex flex-col">
                    <CardHeader className="pb-3 border-b border-slate-100">
                        <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                            <History className="h-4 w-4" />
                            Version Log
                        </CardTitle>
                    </CardHeader>
                    <ScrollArea className="flex-1">
                        <div className="p-2 space-y-2">
                            {mockVersions.map((ver) => (
                                <div
                                    key={ver.id}
                                    onClick={() => setSelectedVersion(ver)}
                                    className={cn(
                                        "p-3 rounded-lg border cursor-pointer transition-all hover:bg-muted dark:hover:bg-slate-800",
                                        selectedVersion.id === ver.id
                                            ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 ring-1 ring-indigo-500/20"
                                            : "border-transparent hover:border-border"
                                    )}
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <div className="flex items-center gap-2">
                                            <Badge variant={ver.isCurrent ? "default" : "secondary"} className={cn("text-[10px] h-5", ver.isCurrent ? "bg-green-600 hover:bg-green-700" : "")}>
                                                {ver.version}
                                            </Badge>
                                            {ver.isCurrent && <span className="text-[10px] text-green-600 font-medium flex items-center"><Check className="h-3 w-3 mr-0.5" /> Live</span>}
                                        </div>
                                        <span className="text-[10px] text-muted-foreground">{ver.timestamp}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium mb-1">
                                        <User className="h-3 w-3 text-indigo-500" />
                                        {ver.author}
                                    </div>
                                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                                        {ver.changes}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </Card>
            </div>

            {/* Preview Panel */}
            <div className="md:col-span-8 flex flex-col gap-4 h-full">
                <Card className="h-full border-border flex flex-col">
                    <CardHeader className="pb-3 border-b border-slate-100 bg-slate-50/50/50">
                        <div className="flex justify-between items-center">
                            <div>
                                <CardTitle className="text-base font-bold text-foreground flex items-center gap-2">
                                    <FileText className="h-4 w-4 text-indigo-500" />
                                    {selectedVersion.version} - Preview
                                </CardTitle>
                                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    Edited {selectedVersion.timestamp} by {selectedVersion.author}
                                </p>
                            </div>
                            {!selectedVersion.isCurrent && (
                                <Button size="sm" variant="outline" className="text-amber-600 border-amber-200 hover:bg-amber-50 hover:text-amber-700">
                                    <RotateCcw className="h-3 w-3 mr-2" />
                                    Revert to this Version
                                </Button>
                            )}
                        </div>
                    </CardHeader>
                    <CardContent className="p-0 flex-1 relative bg-card overflow-hidden">
                        <ScrollArea className="h-full">
                            <div className="p-6">
                                <div className="prose prose-sm dark:prose-invert max-w-none">
                                    {renderDiff(selectedVersion.content, null)}
                                </div>
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
