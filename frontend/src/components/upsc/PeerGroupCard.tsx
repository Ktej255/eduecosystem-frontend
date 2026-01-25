"use client";

import React from 'react';
import { Users, Lock, Crown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PeerGroupCard() {
    return (
        <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111] p-6 group">
            {/* Locked Overlay */}
            <div className="absolute inset-0 bg-gray-900/5 dark:bg-black/50 backdrop-blur-[2px] flex flex-col items-center justify-center z-10 p-6 text-center">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4 border border-gray-700 shadow-lg">
                    <Lock className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">Level 3: Study Circles Locked</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    Unlock peer discussions and debate rooms by maintaining consistency.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-800">
                    <Crown className="w-3 h-3" />
                    Reach 14-Day Streak
                </div>
            </div>

            {/* Background / Preview Content (Blurred behind overlay) */}
            <div className="opacity-40 blur-sm pointer-events-none select-none">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg">
                            <Users className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 dark:text-white">Toppers Batch (100)</h3>
                            <p className="text-xs text-gray-500">32 members online</p>
                        </div>
                    </div>
                    <Button size="sm" variant="ghost">Join</Button>
                </div>

                <div className="space-y-3">
                    <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg rounded-tl-none text-xs w-3/4">
                            Has anyone analyzed the recent SC judgement on Article 21?
                        </div>
                    </div>
                    <div className="flex gap-3 flex-row-reverse">
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg rounded-tr-none text-xs w-3/4">
                            Yes! It expands the definition of 'Right to Privacy' significantly.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
