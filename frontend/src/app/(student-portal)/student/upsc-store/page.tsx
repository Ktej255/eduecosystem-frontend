"use client";

import React, { useState } from 'react';
import { ShoppingBag, Star, Zap, Shield, BookOpen, BrainCircuit, CheckCircle, Lock } from 'lucide-react';
import { upscSynapseService } from '@/services/upscSynapseService';
import { useRouter } from 'next/navigation';

export default function UPSCStorePage() {
    const router = useRouter();
    const [purchasing, setPurchasing] = useState<string | null>(null);

    const PRODUCTS = [
        {
            id: 'level2',
            title: "Logic Masterclass (Polity)",
            price: 499,
            originalPrice: 1999,
            description: "Move beyond rote learning. Master the 'Why' and 'How' behind every article.",
            features: ["50+ Logic Modules", "Video Explanations", "Assertion-Reasoning Drills"],
            icon: BrainCircuit,
            color: "from-amber-500 to-orange-600",
            bestValue: true
        },
        {
            id: 'level3',
            title: "Prelims Simulator Pro",
            price: 999,
            originalPrice: 2499,
            description: "Train under pressure. High-fidelity exam simulation with Stress Engine analysis.",
            features: ["Real-time Stress Tracking", "Negative Marking Logic", "All-India Ranking"],
            icon: Shield,
            color: "from-red-600 to-rose-600",
            bestValue: false
        },
        {
            id: 'grapho',
            title: "Graphotherapy Kit",
            price: 299,
            originalPrice: 599,
            description: "Fix your mindset physically. Tools to improve focus and handwriting speed.",
            features: ["30-Day Practice Sheets", "Focus Audio Tracks", "Daily Tracker"],
            icon: Zap,
            color: "from-blue-500 to-indigo-600",
            bestValue: false
        }
    ];

    const handlePurchase = async (productId: string, price: number) => {
        setPurchasing(productId);

        // Simulate fake payment delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        try {
            // For Prototype: All purchases redirect to the Polity Synapse Engine
            // This simulates "Unlocking" the module and going there.
            try {
                // Determine level to unlock based on product
                let levelToUnlock: 'level2' | 'level3' | null = null;
                if (productId === 'level2') levelToUnlock = 'level2';
                if (productId === 'level3') levelToUnlock = 'level3';

                if (levelToUnlock) {
                    const profile = await upscSynapseService.getProfile();
                    await upscSynapseService.unlockLevel(profile.id, levelToUnlock, price);
                }
            } catch (e) {
                console.warn("Backend connect failed, using mock success", e);
            }

            // Redirect to the Synapse Engine Page
            router.push('/student/upsc-store/polity');

        } catch (error) {
            alert("Payment failed.");
        } finally {
            setPurchasing(null);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] pb-24">
            {/* HERDER */}
            <div className="bg-[#0f172a] text-white pt-12 pb-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-blue-500/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                        <ShoppingBag className="w-3 h-3" /> UPSC Arsenal
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Upgrade Your Preparation
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Unlock advanced cognitive engines, stress management tools, and logic masterclasses.
                    </p>
                </div>
            </div>

            {/* PRODUCT GRID */}
            <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PRODUCTS.map((product) => (
                        <div
                            key={product.id}
                            className={`bg-white dark:bg-[#111] rounded-3xl p-8 border hover:scale-105 transition-all duration-300 shadow-xl flex flex-col ${product.bestValue ? 'border-amber-500 ring-4 ring-amber-500/10' : 'border-gray-200 dark:border-gray-800'}`}
                        >
                            {product.bestValue && (
                                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full w-fit mb-4">
                                    Most Popular
                                </div>
                            )}

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                                <product.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                {product.title}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 flex-1">
                                {product.description}
                            </p>

                            <div className="flex items-end gap-2 mb-8">
                                <span className="text-4xl font-black text-gray-900 dark:text-white">₹{product.price}</span>
                                <span className="text-lg text-gray-400 line-through mb-1">₹{product.originalPrice}</span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {product.features.map((feat, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => handlePurchase(product.id, product.price)}
                                disabled={purchasing === product.id}
                                className={`w-full py-4 rounded-xl font-bold text-lg shadow-xl flex items-center justify-center gap-2 transition-all ${purchasing === product.id
                                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                    : 'bg-gray-900 dark:bg-white text-white dark:text-black hover:opacity-90 active:scale-95'
                                    }`}
                            >
                                {purchasing === product.id ? (
                                    <>Processing...</>
                                ) : (
                                    <>Unlock Access <Lock className="w-4 h-4" /></>
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* TRUST BADGES */}
            <div className="max-w-4xl mx-auto mt-24 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
                    {[1, 2, 3, 4].map((_, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <Shield className="w-8 h-8 text-gray-400" />
                            <span className="text-xs font-bold uppercase text-gray-500">Secure Payment</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
