"use client";

import { SyllabusKnowledgeGraph } from "@/components/syllabus/SyllabusKnowledgeGraph";
import { Layers, Sparkles } from "lucide-react";

export default function SyllabusExplorerPage() {
    return (
        <div className="container mx-auto py-10 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <Layers className="h-8 w-8 text-cyan-500" />
                        <h1 className="text-4xl font-black text-white">Syllabus Explorer</h1>
                        <div className="text-[10px] bg-purple-600 px-2 py-0.5 rounded-full text-white uppercase font-bold flex items-center gap-1">
                            <Sparkles className="h-3 w-3" />
                            Interactive Graph
                        </div>
                    </div>
                    <p className="text-gray-400 text-lg">
                        Explore the entire RAS syllabus visually. Click nodes to expand topics.
                    </p>
                </div>
            </div>

            <SyllabusKnowledgeGraph />

            <div className="text-center text-gray-500 text-sm">
                Tip: Drag nodes to rearrange. Scroll to zoom. Click a subject to see its topics.
            </div>
        </div>
    );
}
