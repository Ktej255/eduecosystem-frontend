"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { UPSC_CATALOG } from '@/data/upsc-catalog';
import { ArrowLeft, PlayCircle, FileText, Lock, CheckCircle } from 'lucide-react';
import PriceCountdown from '@/components/upsc/PriceCountdown';

// Mock Chapter Data (In real app, fetch from backend/registry)
const MOCK_CHAPTERS = [
    { id: 1, title: "Historical Background", duration: "45 mins", isFree: true },
    { id: 2, title: "Making of the Constitution", duration: "60 mins", isFree: false },
    { id: 3, title: "Salient Features of Constitution", duration: "50 mins", isFree: false },
    { id: 4, title: "Preamble of the Constitution", duration: "40 mins", isFree: false },
    { id: 5, title: "Union and its Territory", duration: "35 mins", isFree: false },
    { id: 6, title: "Citizenship", duration: "45 mins", isFree: false },
];

export default function BookDetailPage() {
    const params = useParams();
    const router = useRouter();
    const subjectId = params.subjectId as string;
    const bookId = params.bookId as string;

    const subject = UPSC_CATALOG.find(s => s.id === subjectId);
    const book = subject?.books.find(b => b.id === bookId);

    // Simulate purchase state
    const [isPurchased, setIsPurchased] = useState(false);

    // Check for previous purchase on mount
    React.useEffect(() => {
        const purchased = localStorage.getItem(`upsc_purchased_${bookId}`);
        if (purchased === 'true') {
            setIsPurchased(true);
        }
    }, [bookId]);

    if (!subject || !book) return <div>Book not found</div>;

    const handleChapterClick = (chapterId: number, isFree: boolean) => {
        if (isPurchased || isFree) {
            // Navigate to Chapter View (content consumption)
            // For now, we'll implement this route in next step
            router.push(`/student/upsc/${subjectId}/${bookId}/chapter/${chapterId}`);
        } else {
            // Shake the buy button or scroll to it?
            alert("Please purchase the book to access this chapter.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] pb-20">
            {/* Header Image/Banner */}
            <div className="h-64 bg-gradient-to-br from-blue-900 to-gray-900 relative">
                <button
                    onClick={() => router.back()}
                    className="absolute top-6 left-6 flex items-center text-white/80 hover:text-white bg-black/20 px-3 py-1 rounded-full backdrop-blur-sm transition-all"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back
                </button>
                <div className="absolute -bottom-12 left-8 md:left-12 flex items-end gap-6">
                    <div className="w-32 h-48 bg-white shadow-xl rounded-lg p-2 flex items-center justify-center text-center border border-gray-200">
                        {/* Placeholder Cover */}
                        <div>
                            <div className="w-20 h-2 bg-gray-200 mb-2 mx-auto rounded"></div>
                            <div className="font-serif font-bold text-gray-900 text-sm">{book.title}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 pt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Chapters */}
                <div className="lg:col-span-2 space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{book.title}</h1>
                        <p className="text-gray-600 dark:text-gray-400">{book.description}</p>
                    </div>

                    <div className="bg-white dark:bg-[#111] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                        <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 flex justify-between items-center">
                            <h3 className="font-bold text-gray-900 dark:text-white">Table of Contents</h3>
                            <span className="text-sm text-gray-500">{MOCK_CHAPTERS.length} Chapters</span>
                        </div>
                        <div className="divide-y divide-gray-100 dark:divide-gray-800">
                            {MOCK_CHAPTERS.map((chapter) => (
                                <div
                                    key={chapter.id}
                                    onClick={() => handleChapterClick(chapter.id, chapter.isFree)}
                                    className={`p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group
                                        ${!isPurchased && !chapter.isFree ? 'opacity-70' : ''}
                                    `}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                                            ${(isPurchased || chapter.isFree) ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400'}
                                        `}>
                                            {chapter.id}
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                                {chapter.title}
                                            </h4>
                                            <p className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                                                <FileText className="w-3 h-3" /> Reading • 10 pages
                                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                <PlayCircle className="w-3 h-3" /> Quiz Available
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        {(isPurchased || chapter.isFree) ? (
                                            <button className="text-blue-600 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                                Start
                                            </button>
                                        ) : (
                                            <Lock className="w-4 h-4 text-gray-400" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Pricing & Meta */}
                <div className="space-y-6">
                    {/* Price Card */}
                    <div className="bg-white dark:bg-[#111] rounded-xl shadow-lg sticky top-24">
                        <PriceCountdown
                            bookId={bookId}
                            basePrice={book.price}
                            offerPrice={299} // 299 as per request
                            expiredPrice={499} // 499 as per request
                            onPurchase={() => {
                                // Mock purchase - in real app, would call payment API
                                setIsPurchased(true);
                                localStorage.setItem(`upsc_purchased_${bookId}`, 'true');
                                alert('🎉 Purchase Successful! All chapters are now unlocked.');
                            }}
                        />

                        <div className="p-6 pt-0 space-y-4">
                            <div className="flex items-start gap-3 mt-4">
                                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <strong className="text-gray-900 dark:text-white">Lifetime Access</strong> to updated PDF notes
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <strong className="text-gray-900 dark:text-white">Chapter-wise MCQs</strong> for practice
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <strong className="text-gray-900 dark:text-white">Automated Planner</strong> included
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
