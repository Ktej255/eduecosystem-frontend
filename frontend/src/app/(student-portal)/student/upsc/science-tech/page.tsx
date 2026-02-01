"use client";

import SciTechDashboard from "@/components/batch1/science-tech/SciTechDashboard";

export default function ScienceTechPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-black">
            <div className="bg-indigo-900 text-white py-12 px-4 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <h1 className="text-4xl font-black tracking-tight mb-2">Science & Technology</h1>
                    <p className="text-indigo-200 text-lg max-w-2xl">
                        Explore the frontiers of human innovation, from biotech to space exploration, tailored for UPSC preparation.
                    </p>
                </div>
            </div>
            <SciTechDashboard />
        </div>
    );
}
