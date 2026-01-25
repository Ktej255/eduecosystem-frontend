"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { UPSC_CATALOG, UPSCBook } from '@/data/upsc-catalog';
import { ArrowLeft, Book, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SubjectStorePage() {
    const params = useParams();
    const router = useRouter(); // Correct hooks usage
    const subjectId = params.subjectId as string;

    const subject = UPSC_CATALOG.find(s => s.id === subjectId);

    if (!subject) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h2 className="text-2xl font-bold">Subject Not Found</h2>
                <button onClick={() => router.back()} className="mt-4 text-blue-600 hover:underline">
                    Go Back
                </button>
            </div>
        );
    }

    const ncertBooks = subject.books.filter(b => b.isNCERT);
    const standardBooks = subject.books.filter(b => !b.isNCERT);

    const BookCard = ({ book }: { book: UPSCBook }) => (
        <div
            onClick={() => router.push(`/student/upsc/${subjectId}/${book.id}`)}
            className="group bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-xl p-4 cursor-pointer hover:shadow-md transition-all relative overflow-hidden"
        >
            <div className="flex gap-4">
                {/* Book Cover Placeholder */}
                <div className="w-24 h-32 bg-gray-200 dark:bg-gray-800 rounded-md shadow-sm flex-shrink-0 flex items-center justify-center text-gray-400">
                    <Book className="w-8 h-8 opacity-50" />
                </div>

                <div className="flex-1">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
                        {book.title}
                    </h4>
                    {book.author && (
                        <p className="text-xs text-gray-500 mb-2">by {book.author}</p>
                    )}
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                        {book.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                            {book.price > 0 ? (
                                <>
                                    <span className="font-bold text-lg">₹{book.discountedPrice}</span>
                                    <span className="text-xs text-gray-400 line-through">₹{book.price}</span>
                                    <span className="bg-red-100 text-red-600 text-[10px] px-1 rounded font-bold">
                                        -{Math.round(((book.price - book.discountedPrice) / book.price) * 100)}%
                                    </span>
                                </>
                            ) : (
                                <span className="font-bold text-green-600">FREE</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] p-4 md:p-8">
            <button
                onClick={() => router.back()}
                className="flex items-center text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-6"
            >
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Catalog
            </button>

            <header className="mb-8 flex items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl ${subject.bgColor} flex items-center justify-center`}>
                    <subject.icon className={`w-8 h-8 ${subject.color}`} />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{subject.title} Store</h1>
                    <p className="text-gray-500">{subject.description}</p>
                </div>
            </header>

            <div className="space-y-10">
                {standardBooks.length > 0 && (
                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-indigo-500" />
                            Standard Reference Books
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            {standardBooks.map(book => <BookCard key={book.id} book={book} />)}
                        </div>
                    </section>
                )}

                {ncertBooks.length > 0 && (
                    <section>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                            <Book className="w-5 h-5 text-emerald-500" />
                            NCERT Foundations
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            {ncertBooks.map(book => <BookCard key={book.id} book={book} />)}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
