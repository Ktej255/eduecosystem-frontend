"use client";

import GeographyGlobe from "@/components/batch1/geography/3d/GeographyGlobe";

export default function Geography3DPage() {
    return (
        <div className="h-screen w-full bg-black overflow-hidden relative">
            <GeographyGlobe activeModuleId="overview" onSelectTopic={(id) => console.log('Selected:', id)} />

            <div className="absolute top-4 left-4 z-50">
                <h1 className="text-2xl font-bold text-white drop-shadow-md">TerraLab 3D</h1>
                <p className="text-blue-300 text-sm">Interactive Earth Systems Simulation</p>
            </div>
        </div>
    );
}
