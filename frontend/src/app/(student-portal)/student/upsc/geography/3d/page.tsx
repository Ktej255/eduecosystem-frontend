"use client";

import { useState } from "react";
import GeographyGlobe from "@/components/batch1/geography/3d/GeographyGlobe";
import TopicDetailView from "@/components/batch1/geography/TopicDetailView";
import { GeographyNode } from "@/components/batch1/geography/data/spatial-syllabus";
import { MicroTopic } from "@/components/batch1/geography/data/geography-syllabus-data";

export default function Geography3DPage() {
    const [selectedNode, setSelectedNode] = useState<GeographyNode | null>(null);
    const [activeModule, setActiveModule] = useState("geomorphology");

    const handleSelectTopic = (topic: MicroTopic) => {
        // Convert MicroTopic to GeographyNode structure required by the DetailView
        const node: GeographyNode = {
            id: topic.id,
            title: topic.title,
            type: 'node',
            status: topic.status === 'locked' ? 'locked' : 'active',
            coordinates: [0, 0, 0], // Not needed for detail view
            description: "Explore this topic in depth."
        };
        setSelectedNode(node);
    };

    return (
        <div className="h-screen w-full bg-black overflow-hidden relative">
            <GeographyGlobe
                activeModuleId={activeModule}
                onSelectTopic={handleSelectTopic}
            />

            <div className="absolute top-4 left-4 z-10 pointer-events-none">
                <h1 className="text-2xl font-bold text-white drop-shadow-lg">TerraLab 3D</h1>
                <p className="text-blue-300 text-sm drop-shadow-md">Interactive Earth Systems Simulation</p>
            </div>

            {/* Topic Detail Overlay */}
            {selectedNode && (
                <div className="absolute inset-0 z-50 p-4 md:p-8 bg-black/80 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-full max-w-5xl h-full md:h-[90%]">
                        <TopicDetailView
                            node={selectedNode}
                            onBack={() => setSelectedNode(null)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
