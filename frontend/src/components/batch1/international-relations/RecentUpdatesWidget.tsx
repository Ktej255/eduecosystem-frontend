"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe2, MapPin, ChevronRight, AlertCircle, TrendingUp } from 'lucide-react';

const UPDATES = [
    { id: 1, title: 'India-France sign Defense Roadmap', date: 'Feb 2026', type: 'Agreement', region: 'Europe', level: 'High' },
    { id: 2, title: 'Gallaudet University Collaboration', date: 'Jan 2026', type: 'Education', region: 'Americas', level: 'Medium' },
    { id: 3, title: 'IMEC Corridor Updates', date: 'Jan 2026', type: 'Infrastructure', region: 'Middle East', level: 'High' },
    { id: 4, title: 'ASEAN Digital Ministers Meeting', date: 'Jan 2026', type: 'Summit', region: 'Asia', level: 'Medium' },
    { id: 5, title: 'BIMSTEC Security Dialogue', date: 'Dec 2025', type: 'Security', region: 'Neighborhood', level: 'High' },
];

export default function RecentUpdatesWidget() {
    return (
        <Card className="bg-white dark:bg-[#111] border-slate-200 dark:border-slate-800 shadow-sm h-full flex flex-col">
            <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800">
                <CardTitle className="text-base font-bold flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                    Global Updates
                    <Badge variant="secondary" className="ml-auto text-xs font-normal">Latest 5</Badge>
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0 flex-1 overflow-y-auto custom-scrollbar">
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {UPDATES.map((update) => (
                        <div key={update.id} className="p-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group cursor-pointer">
                            <div className="flex justify-between items-start mb-1">
                                <Badge variant="outline" className={`text-[10px] px-1.5 py-0 h-5 ${update.level === 'High' ? 'border-rose-200 text-rose-600 bg-rose-50' : 'border-slate-200 text-slate-500'
                                    }`}>
                                    {update.type}
                                </Badge>
                                <span className="text-[10px] text-slate-400">{update.date}</span>
                            </div>
                            <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 transition-colors mb-1 line-clamp-2">
                                {update.title}
                            </h4>
                            <div className="flex items-center gap-1 text-[10px] text-slate-500">
                                <Globe2 className="w-3 h-3" />
                                {update.region}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30">
                    <button className="w-full text-xs font-bold text-indigo-600 hover:text-indigo-700 py-1 flex items-center justify-center gap-1">
                        View All Updates <ChevronRight className="w-3 h-3" />
                    </button>
                </div>
            </CardContent>
        </Card>
    );
}
