"use client";

import React, { useState, useEffect } from 'react';
import { Timer, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PriceCountdownProps {
    bookId: string;
    basePrice: number;
    offerPrice: number;
    expiredPrice: number;
    onExpire?: () => void;
    onPurchase?: () => void;
}

export default function PriceCountdown({
    bookId,
    basePrice,
    offerPrice,
    expiredPrice,
    onExpire,
    onPurchase
}: PriceCountdownProps) {
    const [timeLeft, setTimeLeft] = useState<number | null>(null);
    const [isExpired, setIsExpired] = useState(false);

    // Uniq key for this book's timer in localStorage
    const STORAGE_KEY = `upsc_offer_start_${bookId}`;
    const DURATION_MS = 15 * 60 * 1000; // 15 minutes

    useEffect(() => {
        // Initialize timer logic
        const storedStart = localStorage.getItem(STORAGE_KEY);
        const now = Date.now();
        let startTime = parseInt(storedStart || '0');

        if (!storedStart || isNaN(startTime)) {
            // First visit for this book
            startTime = now;
            localStorage.setItem(STORAGE_KEY, startTime.toString());
        }

        const elapsed = now - startTime;

        if (elapsed >= DURATION_MS) {
            setIsExpired(true);
            setTimeLeft(0);
            if (onExpire) onExpire();
        } else {
            setTimeLeft(DURATION_MS - elapsed);
        }

        // Ticking interval
        const interval = setInterval(() => {
            const currentNow = Date.now();
            const currentElapsed = currentNow - startTime;

            if (currentElapsed >= DURATION_MS) {
                setIsExpired(true);
                setTimeLeft(0);
                if (onExpire) onExpire();
                clearInterval(interval);
            } else {
                setTimeLeft(DURATION_MS - currentElapsed);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [bookId, DURATION_MS, onExpire]);

    const formatTime = (ms: number) => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    if (timeLeft === null) return null; // Loading state

    const currentPrice = isExpired ? expiredPrice : offerPrice;

    // Prevent division by zero and handle invalid basePrice
    const discountPercent = basePrice > 0
        ? Math.round(((basePrice - currentPrice) / basePrice) * 100)
        : 0;

    return (
        <div className={`rounded-xl p-6 border-2 transition-all ${isExpired ? 'border-border bg-muted' : 'border-red-500 bg-red-50'}`}>
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-sm text-muted-foreground mb-1">Special Launch Offer</p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-foreground">₹{currentPrice}</span>
                        {basePrice > currentPrice && (
                            <span className="text-lg text-muted-foreground line-through">₹{basePrice}</span>
                        )}
                        {discountPercent > 0 && (
                            <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-sm font-bold">
                                {discountPercent}% OFF
                            </span>
                        )}
                    </div>
                </div>

                {!isExpired && (
                    <div className="text-right">
                        <div className="flex items-center gap-1 text-red-600 font-bold animate-pulse">
                            <Timer className="w-4 h-4" />
                            <span>{formatTime(timeLeft)}</span>
                        </div>
                        <p className="text-[10px] text-red-500">Offer expires soon!</p>
                    </div>
                )}
            </div>

            <button
                onClick={onPurchase}
                className={`w-full py-3 rounded-lg font-bold text-lg shadow-lg transition-transform active:scale-95 mb-3
                    ${isExpired
                        ? 'bg-gray-900 text-white hover:bg-gray-800'
                        : 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700'
                    }`}
            >
                {isExpired ? 'Buy Now' : 'Grab Deal Now'}
            </button>

            {!isExpired && (
                <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    Price will revert to ₹{expiredPrice} when timer ends
                </p>
            )}

            {isExpired && (
                <p className="text-xs text-center text-muted-foreground">
                    Offer expired. You can still purchase at current price.
                </p>
            )}
        </div>
    );
}
