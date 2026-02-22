"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Lock, AlertTriangle, Zap, Tag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Progress } from '@/components/ui/progress';

export default function CompleteOrder() {
    const router = useRouter();
    const [selectedPremiumTraits, setSelectedPremiumTraits] = useState<string[]>([]);
    const [couponApplied, setCouponApplied] = useState(false);
    const [showCouponPopup, setShowCouponPopup] = useState(false);

    // Pricing Constants
    const TRAIT_PRICE = 29;
    const FULL_ANALYSIS_PRICE = 1599;
    const DISC_FULL_ANALYSIS_PRICE = 999;

    const freeTraits = [
        "Introvert/Extrovert scale", "Emotional responsiveness", "Thinking pattern (Cumulative/Comprehensive)",
        "Goals and ambition level", "Will power strength", "Communication style", "Honesty/integrity indicators",
        "Determination level", "Organization skills", "Attention to detail", "Learning speed",
        "Physical energy drive", "Optimism/Pessimism", "Self-confidence base", "Social adaptability"
    ];

    const premiumTraits = [
        { id: 't1', name: 'Hidden Fears & Insecurities', desc: 'Identify subconscious blockages.' },
        { id: 't2', name: 'Relationship Compatibility', desc: 'How you behave in partnerships.' },
        { id: 't3', name: 'Financial Mindset', desc: 'Attitude towards money and savings.' },
        { id: 't4', name: 'Leadership Potential', desc: 'Ability to lead and manage teams.' },
        { id: 't5', name: 'Procrastination Triggers', desc: 'Why you delay important tasks.' },
        { id: 't6', name: 'Sexual Drives & Energy', desc: 'Hidden physical desires.' },
        { id: 't7', name: 'Childhood Trauma Indicators', desc: 'Past events affecting present.' },
        { id: 't8', name: 'Lying & Deceit Markers', desc: 'Propensity to reshape truth.' },
        { id: 't9', name: 'Health Issues (Early Warning)', desc: 'Stress markers on body.' },
        { id: 't10', name: 'Success & Wealth Potential', desc: 'Capacity to accumulate wealth.' }
    ];

    // Trigger Coupon Popup on load
    useEffect(() => {
        const timer = setTimeout(() => setShowCouponPopup(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    const toggleTrait = (id: string) => {
        if (selectedPremiumTraits.includes(id)) {
            setSelectedPremiumTraits(prev => prev.filter(t => t !== id));
        } else {
            setSelectedPremiumTraits(prev => [...prev, id]);
        }
    };

    const selectAllPremium = () => {
        setSelectedPremiumTraits(premiumTraits.map(t => t.id));
    };

    // Calculate Total
    const isFullPackage = selectedPremiumTraits.length === premiumTraits.length;
    const currentPrice = isFullPackage
        ? (couponApplied ? DISC_FULL_ANALYSIS_PRICE : FULL_ANALYSIS_PRICE)
        : selectedPremiumTraits.length * TRAIT_PRICE;

    const handleProceed = () => {
        // Mock Payment -> Go to Report Generation
        router.push('/graphotherapy/funnel/report-generation');
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
            {/* Header Status */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="bg-yellow-100 p-3 rounded-full">
                        <AlertTriangle className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-foreground">Order 80% Completed!</h2>
                        <p className="text-muted-foreground dark:text-muted-foreground">Your sample is uploaded. Confirm your analysis depth to finalize.</p>
                    </div>
                </div>
                <div className="md:w-1/3 w-full">
                    <div className="flex justify-between text-xs mb-1 font-semibold">
                        <span>Progress</span>
                        <span>80%</span>
                    </div>
                    <Progress value={80} className="h-2 bg-yellow-200" />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* LEFT: Trait Selection */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Free Included */}
                    <Card className="border-green-200 bg-green-50/50 dark:bg-green-900/10">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-lg flex items-center text-green-700 dark:text-green-400">
                                <Check className="w-5 h-5 mr-2" /> Included in Free Free Analysis
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {freeTraits.map((t, i) => (
                                    <span key={i} className="bg-card text-muted-foreground dark:text-muted-foreground text-xs px-2 py-1 rounded-md border shadow-sm">
                                        {t}
                                    </span>
                                ))}
                                <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md font-medium">
                                    + 15 More Basic Traits
                                </span>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Premium Selection */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Lock className="w-5 h-5 text-purple-600" /> Unlock Deeper Insights
                            </h3>
                            <Button variant="outline" size="sm" onClick={selectAllPremium} className="text-purple-600 hover:text-purple-700">
                                Select All (Best Value)
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {premiumTraits.map((trait) => (
                                <div
                                    key={trait.id}
                                    onClick={() => toggleTrait(trait.id)}
                                    className={`
                                        cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 relative overflow-hidden
                                        ${selectedPremiumTraits.includes(trait.id)
                                            ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20 shadow-md transform scale-[1.02]'
                                            : 'border-border hover:border-purple-300 bg-card'}
                                    `}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-bold text-foreground">{trait.name}</h4>
                                            <p className="text-xs text-muted-foreground mt-1">{trait.desc}</p>
                                        </div>
                                        <div className={`
                                            w-5 h-5 rounded-full border flex items-center justify-center
                                            ${selectedPremiumTraits.includes(trait.id) ? 'bg-purple-600 border-purple-600' : 'border-border'}
                                        `}>
                                            {selectedPremiumTraits.includes(trait.id) && <Check className="w-3 h-3 text-white" />}
                                        </div>
                                    </div>
                                    <div className="mt-3 text-xs font-semibold text-purple-600">
                                        Add for ₹{TRAIT_PRICE}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT: Cart Summary */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-8 border-purple-200 shadow-2xl overflow-hidden">
                        <div className="bg-gray-900 p-4 text-white text-center">
                            <h3 className="font-bold text-lg">Order Summary</h3>
                        </div>
                        <CardContent className="p-6 space-y-6">
                            <div className="space-y-3 pb-4 border-b">
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">Free Analysis</span>
                                    <span className="font-medium text-green-600">FREE</span>
                                </div>
                                {selectedPremiumTraits.length > 0 && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Premium Traits ({selectedPremiumTraits.length})</span>
                                        <span className="font-medium">₹{selectedPremiumTraits.length * TRAIT_PRICE}</span>
                                    </div>
                                )}
                                {isFullPackage && (
                                    <div className="flex justify-between text-sm text-purple-600 font-medium">
                                        <span>Full Package Discount</span>
                                        <span>-₹{(premiumTraits.length * TRAIT_PRICE) - (couponApplied ? DISC_FULL_ANALYSIS_PRICE : FULL_ANALYSIS_PRICE)}</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex justify-between items-end">
                                <span className="text-lg font-bold text-muted-foreground">Total</span>
                                <div className="text-right">
                                    <div className="text-3xl font-extrabold text-foreground">₹{currentPrice}</div>
                                    {isFullPackage && !couponApplied && <div className="text-xs text-muted-foreground line-through">₹{premiumTraits.length * TRAIT_PRICE}</div>}
                                </div>
                            </div>

                            {/* Coupon Area */}
                            {!couponApplied ? (
                                <button onClick={() => setShowCouponPopup(true)} className="text-sm text-blue-600 underline text-center w-full block">
                                    Have a coupon code?
                                </button>
                            ) : (
                                <div className="bg-green-100 text-green-800 text-xs p-2 rounded text-center font-bold flex items-center justify-center gap-2">
                                    <Tag className="w-3 h-3" /> FIRSTUSER Applied!
                                </div>
                            )}

                            <Button onClick={handleProceed} size="lg" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg font-bold text-lg">
                                {currentPrice === 0 ? 'Get Free Report' : 'Pay & Get Report'}
                            </Button>

                            <p className="text-xs text-center text-muted-foreground mt-2">
                                <Lock className="w-3 h-3 inline mr-1" />
                                256-bit SSL Secure Payment
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* COUPON POPUP */}
            {showCouponPopup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in zoom-in-95 duration-200">
                    <div className="bg-card rounded-xl shadow-2xl max-w-sm w-full p-6 text-center relative border-2 border-dashed border-purple-400">
                        <button onClick={() => setShowCouponPopup(false)} className="absolute top-2 right-2 text-muted-foreground hover:text-muted-foreground">✕</button>
                        <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4 animate-bounce" />
                        <h3 className="text-2xl font-bold mb-2">First Time Special!</h3>
                        <p className="text-muted-foreground mb-6">Get the Complete Analysis Package (All Traits) for just ₹999 instead of ₹1599!</p>
                        <Button className="w-full bg-purple-600 font-bold" onClick={() => {
                            selectAllPremium();
                            setCouponApplied(true);
                            setShowCouponPopup(false);
                        }}>
                            Apply Coupon: FIRSTUSER
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
