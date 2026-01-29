import React from 'react';
import { CheckCircle, Lock, Trophy, Zap } from 'lucide-react';

interface StoreSubjectCardProps {
    subject: {
        id: string;
        title: string;
        description: string;
        color: string;
        icon: any;
    };
    onSelectLevel: (level: number) => void;
    onBuy: (level: number, price: number) => void;
}

export default function StoreSubjectCard({ subject, onSelectLevel, onBuy }: StoreSubjectCardProps) {
    const Icon = subject.icon;

    return (
        <div className="bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className={`h-3 bg-gradient-to-r ${subject.color.replace('text-', 'from-').replace('600', '500')} to-transparent`} />

            <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${subject.color}`} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{subject.title}</h3>
                        <p className="text-xs text-gray-500">Premium MCQs & Resources</p>
                    </div>
                </div>

                <div className="space-y-3">
                    {/* Level 1 */}
                    <button
                        onClick={() => onSelectLevel(1)}
                        className="w-full flex items-center justify-between p-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/10 transition-all group"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 font-bold text-xs">L1</div>
                            <div className="text-left">
                                <div className="font-bold text-sm text-gray-700 dark:text-gray-200 group-hover:text-green-700">Recall & Revise</div>
                                <div className="text-[10px] text-gray-500">Easy to Moderate • ₹299</div>
                            </div>
                        </div>
                        <CheckCircle className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    {/* Level 2 */}
                    <button
                        onClick={() => onSelectLevel(2)}
                        className="w-full flex items-center justify-between p-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all group relative"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 font-bold text-xs">L2</div>
                            <div className="text-left">
                                <div className="font-bold text-sm text-gray-700 dark:text-gray-200 group-hover:text-blue-700">Prelims Ready</div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-gray-500 line-through">₹699</span>
                                    <span className="text-[10px] font-bold text-blue-600">₹499</span>
                                    <span className="bg-red-100 text-red-600 text-[8px] font-bold px-1 rounded animate-pulse">OFFER</span>
                                </div>
                            </div>
                        </div>
                        <Zap className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>

                    {/* Level 3 */}
                    <button
                        onClick={() => onSelectLevel(3)}
                        className="w-full flex items-center justify-between p-3 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-all group relative"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 font-bold text-xs">L3</div>
                            <div className="text-left">
                                <div className="font-bold text-sm text-gray-700 dark:text-gray-200 group-hover:text-purple-700">UPSC Standard</div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-gray-500 line-through">₹999</span>
                                    <span className="text-[10px] font-bold text-purple-600">₹699</span>
                                    <span className="bg-red-100 text-red-600 text-[8px] font-bold px-1 rounded animate-pulse">OFFER</span>
                                </div>
                            </div>
                        </div>
                        <Trophy className="w-4 h-4 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                </div>
            </div>
        </div>
    );
}
