"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Flower, Brain, Sparkles, ArrowRight, PlayCircle, Leaf } from 'lucide-react';
import ProductCard from '@/components/graphotherapy/ProductCard';
import { useRouter } from 'next/navigation';

export default function MeditationLandingPage() {
    const router = useRouter();

    const products = [
        {
            title: "Level 1: Breath Awareness",
            description: "The foundation of mindfulness. Master the art of observing your breath.",
            price: "Free",
            duration: "60 Days",
            features: [
                "Guided Breathwork",
                "Stress Reduction",
                "Better Sleep Quality",
                "Beginner Friendly"
            ],
            onBuy: () => router.push('/student/meditation/level1') // Assuming this route exists or will exist
        },
        {
            title: "Level 2: Visualization",
            description: "Harness the power of your imagination to manifest your goals.",
            price: "1,999",
            duration: "60 Days",
            features: [
                "Creative Visualization",
                "Goal Manifestation",
                "Subconscious Reprogramming",
                "Enhanced Creativity"
            ]
        },
        {
            title: "Level 3: Mantra & Sound",
            description: "Deep dive into vibrational healing and mantra chanting.",
            price: "3,499",
            duration: "60 Days",
            features: [
                "Ancient Mantras",
                "Vibrational Healing",
                "Chakra Balancing",
                "Deep Focus"
            ],
            isPopular: true
        },
        {
            title: "Level 4: Transcendence",
            description: "Advanced techniques for touching the state of pure consciousness.",
            price: "5,999",
            duration: "60 Days",
            features: [
                "Advanced Silence",
                "Pure Awareness",
                "Ego Dissolution",
                "Spiritual Awakening"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 font-sans">
            {/* Hero Section */}
            <header className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-gray-950 pt-20 pb-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="flex justify-center mb-6">
                            <span className="px-4 py-1.5 rounded-full bg-teal-100 text-teal-800 text-sm font-semibold tracking-wide">
                                #1 MENTAL FITNESS PLATFORM
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-8">
                            Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">Mind</span>. <br />
                            Unleash Your Potential.
                        </h1>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                            A scientific approach to meditation designed specifically for students and high performers.
                            Move from chaos to clarity in just 10 minutes a day.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-6 h-auto rounded-full shadow-xl hover:shadow-teal-500/30 transition-all">
                                Start Free Trial
                            </Button>
                            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto rounded-full border-2">
                                <PlayCircle className="mr-2 h-5 w-5" /> How It Works
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Benefits Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Meditate?</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            It's not just spiritualwoo-woo. It's neuroscience. Here is how meditation upgrades your brain hardware.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                                <Brain className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Enhanced Focus</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Increase your attention span and ability to concentrate on complex subjects for longer durations.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                                <Sparkles className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Emotional Balance</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Regulate exam anxiety and stress. Stay potential and composed even under high pressure.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
                                <Flower className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">Memory Retention</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Boost gray matter density in the hippocampus, improving your ability to retain and recall information.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="py-24 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Your Path to Mastery</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            A structured curriculum to take you from novice to zen master.
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

            {/* Newsletter */}
            <section className="bg-teal-900 text-white py-24">
                <div className="container mx-auto px-4 text-center max-w-2xl">
                    <Leaf className="h-12 w-12 mx-auto mb-6 text-teal-400" />
                    <h2 className="text-3xl font-bold mb-6">Start with a Conscious Breath</h2>
                    <p className="text-teal-200 mb-8 text-lg">
                        Join 10,000+ students on the journey to inner peace. Get daily mindfulness tips and free guided sessions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Input placeholder="Enter your email" className="bg-white/10 border-white/20 text-white placeholder:text-teal-200/50 h-14" />
                        <Button className="bg-white text-teal-900 hover:bg-teal-50 h-14 px-8 font-bold">
                            Join Community
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
