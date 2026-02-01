"use client";

import GeographyDashboard from "@/components/batch1/geography/GeographyDashboard";

export default function GeographyPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <div className="bg-emerald-900 text-white py-12 px-4 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <h1 className="text-4xl font-black tracking-tight mb-2">Physical Geography</h1>
                    <p className="text-emerald-100 text-lg max-w-2xl">
                        Comprehensive visualization of Earth's systems, from plate tectonics to climatic zones.
                    </p>
                </div>
            </div>
            <GeographyDashboard />
        </div>
    );
}
