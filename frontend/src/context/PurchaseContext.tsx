"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Purchase {
    subjectId: string;
    level: number;
    price: number;
    purchasedAt: string;
}

interface PurchaseContextType {
    purchases: Purchase[];
    addPurchase: (subjectId: string, level: number, price: number) => void;
    hasPurchased: (subjectId: string, level: number) => boolean;
    getTotalSpent: () => number;
}

const PurchaseContext = createContext<PurchaseContextType | null>(null);

export function PurchaseProvider({ children }: { children: ReactNode }) {
    const [purchases, setPurchases] = useState<Purchase[]>([]);

    // Load purchases from localStorage on mount
    useEffect(() => {
        const stored = localStorage.getItem('upsc_store_purchases');
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                if (Array.isArray(parsed)) {
                    setPurchases(parsed);
                } else {
                    console.warn("Corrupted purchases data (not an array), resetting.");
                    setPurchases([]);
                }
            } catch (e) {
                console.error("Failed to parse purchases", e);
                setPurchases([]);
                localStorage.removeItem('upsc_store_purchases');
            }
        }
    }, []);

    // Save to localStorage whenever purchases change
    useEffect(() => {
        if (purchases.length > 0) {
            localStorage.setItem('upsc_store_purchases', JSON.stringify(purchases));
        }
    }, [purchases]);

    const addPurchase = (subjectId: string, level: number, price: number) => {
        const newPurchase: Purchase = {
            subjectId,
            level,
            price,
            purchasedAt: new Date().toISOString()
        };
        setPurchases(prev => [...prev, newPurchase]);
    };

    const hasPurchased = (subjectId: string, level: number): boolean => {
        return purchases.some(p => p.subjectId === subjectId && p.level === level);
    };

    const getTotalSpent = (): number => {
        return purchases.reduce((sum, p) => sum + p.price, 0);
    };

    return (
        <PurchaseContext.Provider value={{ purchases, addPurchase, hasPurchased, getTotalSpent }}>
            {children}
        </PurchaseContext.Provider>
    );
}

export function usePurchases() {
    const context = useContext(PurchaseContext);
    if (!context) {
        throw new Error('usePurchases must be used within a PurchaseProvider');
    }
    return context;
}
