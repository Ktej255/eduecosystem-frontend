"use client";

import React from 'react';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';
import { usePurchases } from '@/context/PurchaseContext';
import { UPSC_CATALOG } from '@/data/upsc-catalog';
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
            <div className="text-center py-10 bg-gray-50 dark:bg-[#111] rounded-xl border border-dashed border-gray-200 dark:border-gray-800">
                <BookOpen className="w-10 h-10 mx-auto text-gray-300 mb-2" />
                <h3 className="text-gray-500 font-medium">Your library is empty</h3>
                <p className="text-xs text-gray-400">Purchased courses will appear here.</p>
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
                    <div key={item.uniqueId} className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl p-3 flex gap-3 hover:shadow-md transition-shadow">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0 ${item.subject?.color?.split(' ')[0].replace('text-', 'bg-') || 'bg-gray-400'}`}>
                            {item.subject?.title.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-start">
                                <h4 className="font-bold text-sm text-gray-900 dark:text-white truncate pr-2">
                                    {item.subject?.title}
                                </h4>
                                <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3" /> L{item.level}
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mb-2">Level {item.level} Module</p>

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
