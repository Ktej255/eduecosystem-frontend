"use client";

import React, { useState, useEffect } from 'react';
import { ShoppingBag, Star, Zap, Shield, BookOpen, BrainCircuit, CheckCircle, Lock, Globe2, Map, Leaf, Cpu, ArrowRight, Coins } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import PaymentFunnelModal from '@/components/upsc/PaymentFunnelModal';

// Product catalog — mirrors backend SUBJECT_PRODUCTS
const PRODUCTS = [
    {
        id: 'geography',
        title: "Geography for UPSC 2026",
        price: 499,
        originalPrice: 1999,
        description: "Complete NCERT Geography in 21 days. 400+ topics, statement-based MCQs, 21-day study schedule, and current affairs integration — all in one place.",
        features: [
            "400+ Topics (Complete NCERT Class 6–12)",
            "UPSC Statement-Based MCQs (3-Tier)",
            "21-Day Structured Schedule",
            "Lesson Viewer with Concept Notes",
            "Current Affairs → Concept Linking",
            "Lifetime Access"
        ],
        icon: Globe2,
        color: "from-blue-500 to-indigo-700",
        bestValue: true,
        badge: "🔥 New Launch"
    },
    {
        id: 'polity',
        title: "Logic Masterclass (Polity)",
        price: 499,
        originalPrice: 1999,
        description: "Master the 'Why' behind every constitutional article. Statement-based MCQs for all 80+ chapters (Laxmikanth Standard).",
        features: ["80+ Chapters (Laxmikanth)", "Statement MCQ Drills", "Revision Flashcards"],
        icon: BrainCircuit,
        color: "from-amber-500 to-orange-600",
        bestValue: false,
        badge: null
    },
    {
        id: 'history_modern',
        title: "Modern History (Spectrum)",
        price: 299,
        originalPrice: 999,
        description: "Chapter-wise Pomodoro logic & tiered MCQs mapped to Spectrum by Rajiv Ahir.",
        features: ["Spectrum Coverage", "25/5 Session Timer", "Chapter 1 Free Preview"],
        icon: BookOpen,
        color: "from-rose-500 to-red-600",
        bestValue: false,
        badge: null
    },
    {
        id: 'history_ancient',
        title: "Ancient History (R.S. Sharma)",
        price: 299,
        originalPrice: 999,
        description: "Master 27 chapters of India's Ancient Past. 2,400+ UPSC-standard MCQs with 3-level difficulty, comprehensive timeline, and detailed score reports.",
        features: [
            "27 Chapters (R.S. Sharma) + 2,400+ MCQs",
            "3-Level Difficulty Engine (L1/L2/L3)",
            "Chapter-wise Read + Practice Mode",
            "Full Ancient History Timeline",
            "Post-Session Score Reports"
        ],
        icon: BookOpen,
        color: "from-stone-500 to-amber-700",
        bestValue: false,
        badge: "🏛️ New"
    },
    {
        id: 'economy',
        title: "Economy Masterclass 2026",
        price: 499,
        originalPrice: 1999,
        description: "Master Indian Economy through systematic practice. 210+ statement-based MCQs across National Income, Banking, External Sector, and Social Development.",
        features: [
            "210+ UPSC-Standard MCQs",
            "6 Comprehensive Modules (Social Dev Added)",
            "High-Yield 'Trend' Analysis (2024-2026)",
            "Detailed Explanations for Every Q",
            "Practice & Mock Test Modes"
        ],
        icon: Coins,
        color: "from-indigo-500 to-blue-700",
        bestValue: false,
        badge: "💰 High Yield"
    },
    {
        id: 'full_upsc',
        title: "Full UPSC Bundle",
        price: 2499,
        originalPrice: 7999,
        description: "All subjects. All tiers. Geography + Polity + History + Economy + Environment + SciTech. One payment, lifetime access.",
        features: [
            "All 6 Subjects Unlocked",
            "8,000+ MCQs Total",
            "All Study Schedules",
            "Priority Support",
            "New Subjects Added Free"
        ],
        icon: Star,
        color: "from-purple-600 to-pink-600",
        bestValue: false,
        badge: "💎 Best Value"
    },
    {
        id: 'grapho',
        title: "Graphotherapy Kit",
        price: 299,
        originalPrice: 599,
        description: "Fix your mindset physically. Tools to improve focus and handwriting speed for UPSC Mains.",
        features: ["30-Day Practice Sheets", "Focus Audio Tracks", "Daily Tracker"],
        icon: Zap,
        color: "from-blue-500 to-indigo-600",
        bestValue: false,
        badge: null
    }
];

function StorePageContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [purchasing, setPurchasing] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [funnelItem, setFunnelItem] = useState<{ id: string; title: string; price: number } | null>(null);
    const highlightSubject = searchParams.get('subject');

    const handlePurchase = (productId: string, price: number) => {
        const product = PRODUCTS.find(p => p.id === productId);
        if (product) {
            setFunnelItem({ id: product.id, title: product.title, price: product.price });
        }
    };

    const handleFunnelComplete = async (items: string[], finalPrice: number, subjectIds: string[]) => {
        // Map combinations to backend bundle IDs
        let finalId = subjectIds[0];
        if (subjectIds.includes('geography') && subjectIds.includes('polity')) {
            finalId = 'geography_polity';
        } else if (subjectIds.includes('geography') && subjectIds.includes('history_modern')) {
            finalId = 'geography_history';
        }

        setPurchasing(finalId);
        setError(null);
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/login');
                return;
            }

            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/create-order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ subject_id: finalId })
            });

            if (!res.ok) {
                const errData = await res.json();
                throw new Error(errData.detail || 'Order creation failed');
            }

            const { order_id, payment_session_id } = await res.json();

            console.log('[CASHFREE DEBUG] Order created:', { order_id, payment_session_id });
            console.log('[CASHFREE DEBUG] payment_session_id is:', payment_session_id ? 'PRESENT' : '⚠️ NULL/UNDEFINED');

            // @ts-ignore
            if (typeof window !== 'undefined' && window.Cashfree) {
                console.log('[CASHFREE DEBUG] SDK detected. Initializing with mode:', process.env.NEXT_PUBLIC_CASHFREE_ENV);
                // @ts-ignore
                const cf = await window.Cashfree({ mode: process.env.NEXT_PUBLIC_CASHFREE_ENV === 'production' ? 'production' : 'sandbox' });
                console.log('[CASHFREE DEBUG] Calling cf.checkout with paymentSessionId:', payment_session_id);
                cf.checkout({ paymentSessionId: payment_session_id }).then(async (result: any) => {
                    console.log('[CASHFREE DEBUG] Checkout result:', JSON.stringify(result, null, 2));
                    if (result.error) {
                        console.error('[CASHFREE DEBUG] Checkout error:', result.error);
                        setError(result.error.message || 'Payment cancelled');
                    } else if (result.paymentDetails) {
                        console.log('[CASHFREE DEBUG] Payment details received, verifying order:', order_id);
                        const vRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/payment/verify/${order_id}`, {
                            headers: { 'Authorization': `Bearer ${token}` }
                        });
                        if (vRes.ok) {
                            const vData = await vRes.json();
                            console.log('[CASHFREE DEBUG] Verification response:', vData);
                            if (vData.status === 'success') {
                                router.push(`/student/batch1/${subjectIds[0] === 'polity' || subjectIds[0] === 'level2' ? 'polity' :
                                        subjectIds[0] === 'history_modern' ? 'history' :
                                            subjectIds[0] === 'history_ancient' ? 'batch1-1/ancient-history' :
                                            subjectIds[0] === 'economy' ? 'economy' :
                                                subjectIds[0]
                                    }?unlocked=1`);
                            }
                        }
                    }
                });
            } else {
                console.error('[CASHFREE DEBUG] ⚠️ window.Cashfree is NOT loaded! SDK script may not have loaded yet.');
                setError('Payment system loading. Please refresh and try again.');
            }
        } catch (err: any) {
            setError(err.message || 'Something went wrong.');
        } finally {
            setPurchasing(null);
        }
    };

    return (
        <div className="min-h-screen bg-muted dark:bg-[#0a0a0a] pb-24">
            {/* Cashfree JS SDK */}
            <script src="https://sdk.cashfree.com/js/v3/cashfree.js" async />

            {/* Hero */}
            <div className="bg-[#0f172a] text-white pt-12 pb-28 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />
                <div className="max-w-6xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                        <ShoppingBag className="w-3 h-3" /> UPSC Arsenal — Subject-Wise Access
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                        Pay Only for What<br />You Actually Need
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        No ₹1 lakh course. Buy the exact subject you're struggling with, starting at ₹299. Lifetime access. Real results.
                    </p>
                </div>
            </div>

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm font-medium text-center">
                        {error}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PRODUCTS.map((product, idx) => {
                        const isHighlighted = highlightSubject === product.id;
                        const Icon = product.icon;
                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.07 }}
                                className={`bg-card dark:bg-[#111] rounded-3xl p-7 border flex flex-col transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 ${isHighlighted
                                    ? 'border-blue-500 ring-4 ring-blue-500/20'
                                    : product.bestValue
                                        ? 'border-amber-400/50 ring-2 ring-amber-400/10'
                                        : 'border-border'
                                    }`}
                            >
                                {/* Badge */}
                                {(product.badge || isHighlighted) && (
                                    <div className={`bg-gradient-to-r ${product.color} text-white text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full w-fit mb-4`}>
                                        {isHighlighted ? '⭐ Recommended for You' : product.badge}
                                    </div>
                                )}

                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white mb-5 shadow-lg`}>
                                    <Icon className="w-7 h-7" />
                                </div>

                                <h3 className="text-xl font-black text-foreground mb-2">{product.title}</h3>
                                <p className="text-muted-foreground text-sm mb-5 flex-1 leading-relaxed">{product.description}</p>

                                <ul className="space-y-2 mb-6">
                                    {product.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-baseline gap-2 mb-5">
                                    <span className="text-3xl font-black text-foreground">₹{product.price}</span>
                                    <span className="text-muted-foreground line-through">₹{product.originalPrice}</span>
                                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-full">
                                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                                    </span>
                                </div>

                                <button
                                    onClick={() => handlePurchase(product.id, product.price)}
                                    disabled={purchasing === product.id}
                                    className={`w-full py-4 rounded-xl font-bold text-base shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 ${purchasing === product.id
                                        ? 'bg-muted text-muted-foreground cursor-not-allowed'
                                        : `bg-gradient-to-r ${product.color} text-white hover:opacity-90`
                                        }`}
                                >
                                    {purchasing === product.id ? (
                                        'Creating Order...'
                                    ) : (
                                        <>Unlock Access <ArrowRight className="w-4 h-4" /></>
                                    )}
                                </button>
                                <p className="text-center text-xs text-muted-foreground mt-2">Secure · Instant Access · Lifetime</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {funnelItem && (
                <PaymentFunnelModal
                    isOpen={!!funnelItem}
                    onClose={() => setFunnelItem(null)}
                    baseItem={funnelItem}
                    onComplete={handleFunnelComplete}
                />
            )}

            {/* Trust Badges */}
            <div className="max-w-4xl mx-auto mt-20 text-center px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { icon: Shield, label: "Secure Payment" },
                        { icon: CheckCircle, label: "Instant Access" },
                        { icon: Star, label: "Lifetime Updates" },
                        { icon: Lock, label: "No Subscription" },
                    ].map(({ icon: Icon, label }, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <Icon className="w-8 h-8 text-muted-foreground" />
                            <span className="text-xs font-bold uppercase text-muted-foreground tracking-wide">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function UPSCStorePage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading store...</div>}>
            <StorePageContent />
        </Suspense>
    );
}
