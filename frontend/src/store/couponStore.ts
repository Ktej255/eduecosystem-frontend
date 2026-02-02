import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Coupon {
    id: string;
    code: string;
    type: "percentage" | "fixed_amount";
    value: number;
    usageCount: number;
    maxUses: number | null;
    status: "active" | "expired" | "depleted";
    expiry: string;
}

interface CouponState {
    coupons: Coupon[];
    addCoupon: (coupon: Coupon) => void;
    removeCoupon: (id: string) => void;
    updateCoupon: (id: string, updates: Partial<Coupon>) => void;
}

export const useCouponStore = create<CouponState>()(
    persist(
        (set) => ({
            coupons: [
                {
                    id: "c1",
                    code: "WELCOME50",
                    type: "percentage",
                    value: 50,
                    usageCount: 124,
                    maxUses: 500,
                    status: "active",
                    expiry: "2026-12-31"
                }
            ],
            addCoupon: (coupon) => set((state) => ({
                coupons: [coupon, ...state.coupons]
            })),
            removeCoupon: (id) => set((state) => ({
                coupons: state.coupons.filter(c => c.id !== id)
            })),
            updateCoupon: (id, updates) => set((state) => ({
                coupons: state.coupons.map(c => c.id === id ? { ...c, ...updates } : c)
            }))
        }),
        {
            name: 'eduecosystem-coupons',
        }
    )
);
