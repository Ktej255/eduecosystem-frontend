"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Star, Quote, PlayCircle } from 'lucide-react';
import ProductCard from '@/components/graphotherapy/ProductCard';
import { useRouter } from 'next/navigation';

export default function GraphotherapyLandingPage() {
    const [showFreeAnalysisPopup, setShowFreeAnalysisPopup] = useState(false);

    // Popup Timer Logic
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowFreeAnalysisPopup(true);
        }, 5000); // 5 seconds delay
        return () => clearTimeout(timer);
    }, []);

    const products = [
        {
            title: "Handwriting Analysis",
            description: "Discover your hidden personality traits through expert analysis.",
            price: "1,599",
            duration: "One-time",
            features: [
                "Detailed Personality Report",
                "Strength & Weakness Identification",
                "Career Guidance insights",
                "Relationship compatibility check"
            ]
        },
        {
            title: "Level 1 Graphotherapy",
            description: "Foundation course to reprogram your subconscious mind.",
            price: "4,999",
            duration: "21 Days",
            features: [
                "21-Day Guided Practice",
                "Daily Stroke Correction",
                "Stress & Anxiety Reduction",
                "Basic Personality Tuning"
            ]
        },
        {
            title: "Level 2 Graphotherapy",
            description: "Advanced techniques for deeper behavioral changes.",
            price: "6,999",
            duration: "30 Days",
            features: [
                "30-Day Intensive Program",
                "Emotional Healing strokes",
                "Procrastination Removal",
                "Confidence Building Exercises",
                "Weekly Progress Review"
            ],
            isPopular: true
        },
        {
            title: "Level 3 Graphotherapy",
            description: "Mastery level for complete transformation.",
            price: "7,999",
            duration: "40 Days",
            features: [
                "40-Day Mastery Course",
                "Leader Mindset Development",
                "Health & Vitality Strokes",
                "Specific Trait Elimination",
                "Priority Support"
            ]
        },
        {
            title: "Level 4 Graphotherapy",
            description: "The ultimate 90-day rewiring protocol.",
            price: "15,999",
            duration: "90 Days",
            features: [
                "Complete 90-Day Protocol",
                "Total Personality Overhaul",
                "Subconscious Reprogramming",
                "Lifetime Access to Community",
                "Direct Expert Reviews"
            ]
        },
        {
            title: "Expert Consultation",
            description: "1-on-1 session with a master graphologist.",
            price: "5,000",
            duration: "1 Hour",
            features: [
                "Personalized Zoom Session",
                "Deep-dive Analysis",
                "Custom Remedy Plan",
                "Live Q&A"
            ]
        }
    ];

    const router = useRouter(); // Need to import useRouter
    const handleStartFunnel = () => {
        router.push('/graphotherapy/funnel');
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 font-sans">
            {/* Hero Section */}
            <header className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/20 dark:to-gray-950 pt-16 pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                            Change Your Handwriting, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                                Change Your Life.
                            </span>
                        </h1>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
                            Graphotherapy is the science of changing your personality by changing your handwriting strokes.
                            Reprogram your subconscious mind for success, confidence, and emotional stability.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-purple-500/30 transition-all" onClick={() => setShowFreeAnalysisPopup(true)}>
                                Get Free Analysis
                            </Button>
                            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto rounded-full border-2">
                                <PlayCircle className="mr-2 h-5 w-5" /> Watch Case Study
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* About Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Graphotherapy?</h2>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Your handwriting is actually "brain-writing". Every stroke you put on paper comes from a neural pathway in your brain.
                                By consciously altering these strokes through specific exercises (Graphotherapy), you send reverse signals to your brain,
                                effectively creating new neural pathways and changing your personality traits.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <div className="bg-green-100 p-2 rounded-full"><Star className="h-4 w-4 text-green-600" /></div>
                                    <span>Improve Concentration & Focus</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-purple-100 p-2 rounded-full"><Star className="h-4 w-4 text-purple-600" /></div>
                                    <span>Eliminate Fear & Procrastination</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="bg-blue-100 p-2 rounded-full"><Star className="h-4 w-4 text-blue-600" /></div>
                                    <span>Boost Confidence & Self-Esteem</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-[400px] bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-2xl shadow-xl flex items-center justify-center p-8 text-white">
                            <div className="text-center">
                                <Quote className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                <p className="text-2xl font-light italic">
                                    "I never knew changing the way I cross my 't's could make me feel so much more confident. This is pure science!"
                                </p>
                                <p className="mt-4 font-bold">- Successful Student</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="py-24 bg-white dark:bg-gray-950" id="products">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Choose Your Transformation</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Select the program that fits your goals. From a quick analysis to a complete 90-day personality overhaul.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, idx) => (
                            <ProductCard
                                key={idx}
                                {...product}
                                onBuy={() => console.log('Buy', product.title)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Lead Capture Footer */}
            <section className="bg-gray-900 text-white py-20">
                <div className="container mx-auto px-4 text-center max-w-2xl">
                    <h2 className="text-3xl font-bold mb-6">Ready to start?</h2>
                    <p className="text-gray-400 mb-8">
                        Enter your details below to schedule a free 15-minute introductory call with our experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Input placeholder="Your Email Address" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12" />
                        <Button className="bg-white text-gray-900 hover:bg-gray-100 h-12 px-8 font-semibold">
                            Join Waitlist
                        </Button>
                    </div>
                </div>
            </section>

            {/* FREE ANALYSIS POPUP (Phase 2 Placeholder) */}
            {showFreeAnalysisPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-300">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative border-2 border-purple-500 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        <button
                            onClick={() => setShowFreeAnalysisPopup(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                        >
                            ✕
                        </button>

                        <div className="text-center space-y-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Star className="h-8 w-8 text-purple-600 animate-pulse" />
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Get Your Handwriting Analysis <span className="text-purple-600">For FREE!</span>
                            </h2>

                            <p className="text-gray-600 dark:text-gray-300">
                                Discover what your handwriting says about your subconscious mind. It only takes 2 minutes!
                            </p>

                            <div className="pt-4">
                                <Button className="w-full h-14 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30 font-bold"
                                    onClick={handleStartFunnel}
                                >
                                    Yes! Analyze My Handwriting
                                </Button>
                                <button
                                    onClick={() => setShowFreeAnalysisPopup(false)}
                                    className="mt-4 text-sm text-gray-400 underline hover:text-gray-600"
                                >
                                    No thanks, I'll pay full price later
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
