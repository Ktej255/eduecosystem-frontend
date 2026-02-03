"use client";

import React from 'react';
import { Card } from "@/components/ui/card";

export default function DemographyViz() {
    // Simplified Data for India's Demographic Dividend
    const data = [
        { age: '80+', male: 1.2, female: 1.4 },
        { age: '70-79', male: 2.1, female: 2.3 },
        { age: '60-69', male: 3.8, female: 4.0 },
        { age: '50-59', male: 5.2, female: 5.1 },
        { age: '40-49', male: 6.5, female: 6.2 },
        { age: '30-39', male: 8.5, female: 8.1 },
        { age: '20-29', male: 10.2, female: 9.5 },
        { age: '10-19', male: 11.5, female: 10.8 },
        { age: '0-9', male: 12.0, female: 11.2 },
    ];

    const maxVal = 13;

    return (
        <Card className="p-6 bg-white dark:bg-[#0a0a0a] border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold mb-6 text-center text-slate-900 dark:text-white">India's Population Pyramid (2025 Est)</h3>

            <div className="relative">
                {/* Labels Header */}
                <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 px-10">
                    <span>MALE</span>
                    <span>FEMALE</span>
                </div>

                <div className="space-y-1">
                    {data.map((row) => (
                        <div key={row.age} className="flex items-center group">
                            {/* Male Bar (Left) */}
                            <div className="flex-1 flex justify-end relative h-6">
                                <div
                                    className="h-full bg-blue-500 rounded-l-sm transition-all group-hover:bg-blue-600"
                                    style={{ width: `${(row.male / maxVal) * 100}%` }}
                                />
                                <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {row.male}%
                                </span>
                            </div>

                            {/* Age Label (Center) */}
                            <div className="w-16 text-center text-[10px] font-mono text-slate-500">
                                {row.age}
                            </div>

                            {/* Female Bar (Right) */}
                            <div className="flex-1 flex justify-start relative h-6">
                                <div
                                    className="h-full bg-pink-500 rounded-r-sm transition-all group-hover:bg-pink-600"
                                    style={{ width: `${(row.female / maxVal) * 100}%` }}
                                />
                                <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {row.female}%
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Analysis Box */}
                <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl text-center">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        <span className="text-emerald-600 font-bold">Demographic Dividend:</span> The bulge in the <span className="underline decoration-indigo-500">20-39 age group</span> indicates India's working-age population advantage.
                    </p>
                </div>
            </div>
        </Card>
    );
}
