"use client";

import React from "react";
import { CodeMetricsDashboard } from "@/components/admin/CodeMetricsDashboard";
import { LayoutDashboard } from "lucide-react";

export default function CodeMetricsPage() {
    return (
        <div className="p-6 space-y-6 max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-indigo-600 text-white">
                    <LayoutDashboard className="h-5 w-5" />
                </div>
                <div>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">System Metrics</h1>
                    <p className="text-gray-500 text-sm">Deep dive into the EduEcosystem enterprise architecture.</p>
                </div>
            </div>

            <CodeMetricsDashboard />
        </div>
    );
}
