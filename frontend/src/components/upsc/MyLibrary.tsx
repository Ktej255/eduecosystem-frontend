"use client";

import React from 'react';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';
import { usePurchases } from '@/context/PurchaseContext';
import { UPSC_CATALOG } from '@/data/upsc-catalog';
import { Progress } from "@/components/ui/progress";
import Link from 'next/link';

export default function MyLibrary() {
    const { purchases } = usePurchases();

    // Map purchases to catalog data
    // Purchase has { subjectId, level }
    const myItems = purchases.map((p, idx) => {
        const subject = UPSC_CATALOG.find(s => s.id === p.subjectId);
        return {
            uniqueId: `${p.subjectId}-${p.level}-${idx}`,
            ...p,
            subject // might be undefined if catalog mismatch
        };
    }).filter(item => item.subject); // Valid items only

    if (myItems.length === 0) {
        return (
            <div className="text-center py-10 bg-muted dark:bg-[#111] rounded-xl border border-dashed border-border">
                <BookOpen className="w-10 h-10 mx-auto text-muted-foreground mb-2" />
                <h3 className="text-muted-foreground font-medium">Your library is empty</h3>
                <p className="text-xs text-muted-foreground">Purchased courses will appear here.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                My Library ({myItems.length})
            </h3>

            <div className="flex flex-col gap-3">
                {myItems.map((item) => (
                    <div key={item.uniqueId} className="bg-card dark:bg-[#111] border border-border rounded-xl p-3 flex gap-3 hover:shadow-md transition-shadow">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0 ${item.subject?.color?.split(' ')[0].replace('text-', 'bg-') || 'bg-gray-400'}`}>
                            {item.subject?.title.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                                <h4 className="font-bold text-sm text-foreground truncate pr-2">
                                    {item.subject?.title}
                                </h4>
                                <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3" /> L{item.level}
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground mb-2">Level {item.level} Module</p>

                            <div className="mb-3">
                                <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                                    <span>Progress</span>
                                    <span>0%</span>
                                </div>
                                <Progress value={0} className="h-1" />
                            </div>

                            <Link
                                href={`/student/upsc/${item.subjectId}?level=${item.level}`}
                                className="text-blue-600 text-xs font-bold hover:underline block text-right"
                            >
                                Open →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
