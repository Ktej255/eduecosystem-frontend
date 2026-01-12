"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Scale, BookOpen, PenTool, ArrowRight, PlayCircle, GraduationCap, Target } from 'lucide-react';
import ProductCard from '@/components/graphotherapy/ProductCard';
import { useRouter } from 'next/navigation';

export default function UPSCLandingPage() {
    const router = useRouter();

    const products = [
        {
            title: "Revision Portal (Batch 1.1)",
            description: "Scientific revision cycles to maximize retention.",
            price: "Free",
            duration: "Lifetime",
            features: [
                "Daily Flashcards (Polity, Hist)",
                "Pomodoro Study Timer",
                "Spaced Repetition Algorithm",
                "Performance Analytics"
            ],
            onBuy: () => router.push('/student/batch1')
        },
        {
            title: "Prelims Test Series",
            description: "High-yield mock tests with detailed AI analysis.",
            price: "5,999",
            duration: "6 Months",
            features: [
                "30 Full Length Tests",
                "Subject-wise Drills",
                "AI Weakness Detection",
                "All India Ranking"
            ],
            isPopular: true
        },
        {
            title: "Mains Answer Writing",
            description: "Master the art of answer writing with expert feedback.",
            price: "9,999",
            duration: "4 Months",
            features: [
                "Daily Answer Writing",
                "Personalized Feedback",
                "Model Answers",
                "Weekly Mentorship Call"
            ]
        },
        {
            title: "CSAT Mastery",
            description: "Conquer the fear of CSAT with logic and practice.",
            price: "2,499",
            duration: "2 Months",
            features: [
                "Concept Clarity Classes",
                "Shortcut Tricks",
                "Previous Year Analysis",
                "Topic-wise Tests"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 font-sans">
            {/* Hero Section */}
            <header className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white dark:from-orange-950/20 dark:to-gray-950 pt-20 pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="flex justify-center mb-6">
                            <span className="px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-sm font-semibold tracking-wide">
                                UPSC CIVIL SERVICES EXAMINATION
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-8">
                            Crack UPSC with <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Scientific Precision</span>.
                        </h1>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Stop random reading. Start strategic preparation.
                            Our AI-driven platform optimizes your study schedule, revision cycles, and test performance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-6 h-auto rounded-full shadow-xl hover:shadow-orange-500/30 transition-all text-white" onClick={() => router.push('/student/batch1')}>
                                Enter Revision Portal
                            </Button>
                            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto rounded-full border-2">
                                <PlayCircle className="mr-2 h-5 w-5" /> Watch Orientation
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Why Us Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <BookOpen className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Retain More</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Our "Active Recall" flashcard engine ensures you never forget a fact. Science-backed spaced repetition.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                                <Target className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Focus Better</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Integrated Pomodoro timers and Graphotherapy exercises to keep your mind sharp and anxiety-free.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
                                <Scale className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Analyze Deeply</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Granular analytics on every test. Know exactly which sub-topic is dragging your score down.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-24 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Comprehensive Programs</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Everything you need to crack the exam, under one roof.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            {/* Footer CTA */}
            <section className="bg-gray-900 text-white py-20 rounded-t-3xl">
                <div className="container mx-auto px-4 text-center max-w-2xl">
                    <GraduationCap className="h-16 w-16 mx-auto mb-6 text-orange-500" />
                    <h2 className="text-3xl font-bold mb-6">Your Seat at LBSNAA Awaits</h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Don't let another attempt go to waste. Join the revolution in UPSC preparation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-white text-gray-900 hover:bg-gray-100 h-14 px-10 font-bold text-lg rounded-full" onClick={() => router.push('/student/batch1')}>
                            Start Studying Now
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
