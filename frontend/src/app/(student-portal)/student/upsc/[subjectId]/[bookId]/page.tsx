"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { UPSC_CATALOG } from '@/data/upsc-catalog';
import { getBookChapters, UPSCChapter } from '@/data/upsc-chapter-registry';
import { ArrowLeft, PlayCircle, FileText, Lock, CheckCircle, BookOpen, BrainCircuit } from 'lucide-react';
import PriceCountdown from '@/components/upsc/PriceCountdown';

export default function BookDetailPage() {
    const params = useParams();
    const router = useRouter();
    const subjectId = params.subjectId as string;
    const bookId = params.bookId as string;

    const subject = UPSC_CATALOG.find(s => s.id === subjectId);
    const book = subject?.books.find(b => b.id === bookId);

    // Get chapters from registry
    const [chapters, setChapters] = useState<UPSCChapter[]>([]);
    const [isPurchased, setIsPurchased] = useState(false);

    useEffect(() => {
        // Load chapters from registry
        const bookChapters = getBookChapters(bookId);
        setChapters(bookChapters);

        // Check for previous purchase
        const purchased = localStorage.getItem(`upsc_purchased_${bookId}`);
        if (purchased === 'true') {
            setIsPurchased(true);
        }
    }, [bookId]);

    if (!subject || !book) return <div>Book not found</div>;

    const handleChapterClick = (chapterId: number, isFree: boolean) => {
        if (isPurchased || isFree) {
            router.push(`/student/upsc/${subjectId}/${bookId}/chapter/${chapterId}`);
        } else {
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
                            <span className="text-sm text-gray-500">{chapters.length} Chapters</span>
                        </div>

                        {chapters.length === 0 ? (
                            <div className="p-8 text-center text-gray-500">
                                <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
                                <p className="font-medium">Coming Soon</p>
                                <p className="text-sm">Chapters are being prepared for this book.</p>
                            </div>
                        ) : (
                            <div className="divide-y divide-gray-100 dark:divide-gray-800 max-h-[600px] overflow-y-auto">
                                {chapters.map((chapter) => (
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
                                                    <FileText className="w-3 h-3" /> {chapter.duration}
                                                    {chapter.hasMCQ && (
                                                        <>
                                                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                            <BrainCircuit className="w-3 h-3" /> MCQs
                                                        </>
                                                    )}
                                                    {chapter.isFree && (
                                                        <span className="bg-green-100 text-green-600 text-[10px] px-1.5 py-0.5 rounded font-bold ml-2">
                                                            FREE
                                                        </span>
                                                    )}
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
                        )}
                    </div>
                </div>

                {/* Right Column: Pricing & Meta */}
                <div className="space-y-6">
                    {/* Progress Entry */}
                    <div onClick={() => router.push('/student/upsc/progress')} className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white cursor-pointer hover:shadow-lg transition-all transform hover:-translate-y-1">
                        <div className="flex items-center gap-3 mb-2">
                            <BrainCircuit className="w-6 h-6 text-blue-200" />
                            <h3 className="font-bold text-lg">My Performance</h3>
                        </div>
                        <p className="text-blue-100 text-sm mb-4">View your MCQ test history, accuracy trends, and chapter-wise analysis.</p>
                        <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-bold w-full transition-colors">
                            Check Dashboard
                        </button>
                    </div>

                    {/* Price Card */}
                    <div className="bg-white dark:bg-[#111] rounded-xl shadow-lg sticky top-24">
                        <PriceCountdown
                            bookId={bookId}
                            basePrice={book.price}
                            offerPrice={299}
                            expiredPrice={499}
                            onPurchase={() => {
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
                                    <strong className="text-gray-900 dark:text-white">{chapters.length} Chapters</strong> with MCQs
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
