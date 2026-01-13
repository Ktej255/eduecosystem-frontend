"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Coins, Sparkles, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { graphotherapyService } from '@/services/graphotherapyService';
import { toast } from 'sonner';

interface UnlockLevelModalProps {
    isOpen: boolean;
    onClose: () => void;
    level: { id: number; name: string; price: number };
    userCoins: number;
    onSuccess: () => void;
}

export default function UnlockLevelModal({ isOpen, onClose, level, userCoins, onSuccess }: UnlockLevelModalProps) {
    const [useCoins, setUseCoins] = useState(false);
    const [isBundle, setIsBundle] = useState(false);
    const [loading, setLoading] = useState(false);

    // Config
    const COIN_VALUE = 0.1; // 10 coins = 1 unit
    const MAX_DISCOUNT_Amount = 1000; // Updated limit
    const BUNDLE_DISCOUNT = 5000;
    const BUNDLE_PRICE_BASE = 15000; // Sum of Level 2, 3, 4 (5000 each)

    // Calculations
    const basePrice = isBundle ? BUNDLE_PRICE_BASE : level.price;
    const bundleDiscount = isBundle ? BUNDLE_DISCOUNT : 0;

    // Calculate max coin discount
    const maxCoinDiscount = MAX_DISCOUNT_Amount;
    const userCoinValue = userCoins * COIN_VALUE;

    let coinDiscount = 0;
    let coinsToBurn = 0;

    if (useCoins) {
        // Limited by max allowed discount AND user balance AND remaining price
        const priceAfterBundle = basePrice - bundleDiscount;
        const maxApplicable = Math.min(maxCoinDiscount, priceAfterBundle);

        const actualDiscount = Math.min(maxApplicable, userCoinValue);
        coinDiscount = actualDiscount;
        coinsToBurn = Math.ceil(coinDiscount / COIN_VALUE);
    }

    const finalPrice = Math.max(0, basePrice - bundleDiscount - coinDiscount);

    const handlePurchase = async () => {
        setLoading(true);
        try {
            await graphotherapyService.purchaseLevel(level.id, useCoins, isBundle);
            toast.success("Purchase successful!", { description: "Level unlocked. Let's begin!" });
            onSuccess();
            onClose();
        } catch (error) {
            toast.error("Purchase failed", { description: "Please try again or contact support." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-md bg-white dark:bg-neutral-900 border border-gray-100 dark:border-white/10">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 text-2xl">
                        <Lock className="w-6 h-6 text-amber-500" />
                        Unlock {isBundle ? "All Levels" : "Next Level"}
                    </DialogTitle>
                    <DialogDescription>
                        Invest in your neurological transformation.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                    {/* Bundle Option Toggle (Only if not Level 3 already?) - For demo simpler */}
                    <div
                        className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${isBundle ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20' : 'border-gray-200 dark:border-white/10 hover:border-purple-200'}`}
                        onClick={() => setIsBundle(!isBundle)}
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Sparkles className={`w-5 h-5 ${isBundle ? 'text-purple-600' : 'text-gray-400'}`} />
                                <span className="font-bold">Unlock Bundle (Lvl 2 + 3 + 4)</span>
                            </div>
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">SAVE ₹5000</span>
                        </div>
                    </div>

                    {/* Price Breakdown */}
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-gray-500">
                            <span>Base Price</span>
                            <span>₹{basePrice.toLocaleString()}</span>
                        </div>
                        {isBundle && (
                            <div className="flex justify-between text-green-600 font-medium">
                                <span>Bundle Discount</span>
                                <span>-₹{BUNDLE_DISCOUNT.toLocaleString()}</span>
                            </div>
                        )}
                        {useCoins && (
                            <div className="flex justify-between text-amber-600 font-medium">
                                <span>Coin Discount ({coinsToBurn} coins)</span>
                                <span>-₹{coinDiscount.toLocaleString()}</span>
                            </div>
                        )}
                        <div className="h-px bg-gray-200 dark:bg-white/10 my-2" />
                        <div className="flex justify-between text-xl font-bold">
                            <span>Total</span>
                            <span>₹{finalPrice.toLocaleString()}</span>
                        </div>
                    </div>

                    {/* Coin Toggle */}
                    {userCoins > 0 && (
                        <div className="bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg flex items-center justify-between">
                            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-200">
                                <Coins className="w-4 h-4" />
                                <span className="text-sm font-medium">Use Coins (Bal: {userCoins})</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500 max-w-[100px] text-right leading-tight">Max ₹1k off</span>
                                <input
                                    type="checkbox"
                                    checked={useCoins}
                                    onChange={(e) => setUseCoins(e.target.checked)}
                                    className="w-5 h-5 accent-amber-500 rounded cursor-pointer"
                                />
                            </div>
                        </div>
                    )}

                    <Button
                        onClick={handlePurchase}
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-6 rounded-xl shadow-lg shadow-purple-500/20"
                    >
                        {loading ? "Processing..." : `Pay ₹${finalPrice.toLocaleString()} & Unlock`}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
