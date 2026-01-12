"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Book, Feather, Sun, Moon, ArrowRight, PlayCircle, Library } from 'lucide-react';
import ProductCard from '@/components/graphotherapy/ProductCard';
import { useRouter } from 'next/navigation';

export default function SelfLearningLandingPage() {
    const router = useRouter();

    const products = [
        {
            title: "Upanishads Canon",
            description: "Access the wisdom of 108 Upanishads with translations.",
            price: "Access",
            duration: "Self-Paced",
            features: [
                "108 Sanskrit Texts",
                "English Translations",
                "Commentaries",
                "Audio Recitations"
            ],
            onBuy: () => router.push('/student/batch2')
        },
        {
            title: "Vedic Mathematics",
            description: "Unlock the secrets of mental calculation.",
            price: "1,499",
            duration: "4 Weeks",
            features: [
                "16 Sutras",
                "Speed Calculation",
                "Algebraic Tricks",
                "Certification"
            ]
        },
        {
            title: "Sanskrit Grammar",
            description: "Learn the mother of all languages.",
            price: "2,999",
            duration: "12 Weeks",
            features: [
                "Panini's Grammar",
                "Pronunciation Guide",
                "Vocabulary Building",
                "Classic Texts Reading"
            ],
            isPopular: true
        },
        {
            title: "Ancient Wisdom",
            description: "Philosophy for modern living.",
            price: "1,999",
            duration: "8 Weeks",
            features: [
                "Gita for Daily Life",
                "Yoga Sutras",
                "Chanakya Neeti",
                "Dharma Shastras"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-amber-50/30 dark:bg-gray-950 font-serif">
            {/* Hero Section */}
            <header className="relative overflow-hidden pt-20 pb-32 border-b border-amber-100 dark:border-gray-800">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 pointer-events-none"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="flex justify-center mb-6">
                            <Sun className="h-12 w-12 text-amber-600 animate-spin-slow" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
                            Path to <span className="text-amber-700 dark:text-amber-500">Enlightenment</span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
                            Reconnect with your roots. Explore the timeless wisdom of the Vedas, Upanishads, and ancient Indian sciences.
                            Self-learning modules designed for the seeker in you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center font-sans">
                            <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-lg px-8 py-6 h-auto rounded-full shadow-xl hover:shadow-amber-600/30 transition-all text-white" onClick={() => router.push('/student/batch2')}>
                                Enter Library
                            </Button>
                            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto rounded-full border-2 border-amber-200 bg-white/50 hover:bg-white">
                                <Book className="mr-2 h-5 w-5" /> Browse Catalog
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Quote Section */}
            <section className="py-16 bg-white dark:bg-gray-900 border-b border-amber-100 dark:border-gray-800">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <Feather className="h-8 w-8 mx-auto mb-4 text-gray-400" />
                    <p className="text-2xl italic text-gray-700 dark:text-gray-300">
                        "Knowledge is that which liberates."
                    </p>
                    <p className="mt-4 font-bold text-amber-800 uppercase tracking-widest text-sm font-sans">– Sa Vidya Ya Vimuktaye</p>
                </div>
            </section>

            {/* Courses Section */}
            <section className="py-24 bg-transparent font-sans">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-serif">Sacred Knowledge Series</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Structured courses to help you decode ancient texts and apply them today.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product, idx) => (
                            <ProductCard
                                key={idx}
                                {...product}
                                onBuy={product.onBuy || (() => console.log('Buy', product.title))}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-amber-900 text-amber-50 py-16 font-sans">
                <div className="container mx-auto px-4 text-center">
                    <Library className="h-10 w-10 mx-auto mb-6 opacity-80" />
                    <p className="mb-8 opacity-70">© 2026 Eduecosystem. Preserving Heritage.</p>
                </div>
            </footer>
        </div>
    );
}
