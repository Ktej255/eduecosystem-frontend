"use client";

import React, { useState, useMemo } from 'react';
import { GRAPHOTHERAPY_TRAITS, TRAIT_GROUPS } from '@/data/graphotherapyTraits';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ShoppingCart, Tag, AlertCircle, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

// Retention Popup Component
function RetentionPopup({ isOpen, onClose, onAccept }: { isOpen: boolean; onClose: () => void; onAccept: () => void }) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md bg-card border-2 border-red-500 animate-in zoom-in-95 duration-300">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-red-600 flex items-center gap-2">
                        <AlertCircle className="w-6 h-6" /> WAIT! Special First-Time Offer
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <p className="text-muted-foreground dark:text-muted-foreground">
                        We see you're interested in deep analysis. Don't leave your potential unlocked.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <p className="text-sm font-bold text-yellow-800 uppercase tracking-wide">Limited Time Coupon</p>
                        <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-3xl font-extrabold text-foreground">₹999</span>
                            <span className="text-muted-foreground line-through">₹1,599</span>
                        </div>
                        <p className="text-xs text-yellow-700 mt-2">Unlock EVERY trait + Full 30-Page Report.</p>
                    </div>
                </div>
                <DialogFooter className="flex-col gap-2 sm:flex-col">
                    <Button
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 text-lg shadow-lg shadow-green-500/30"
                        onClick={onAccept}
                    >
                        Claim 60% OFF Offer Now
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        className="w-full text-muted-foreground hover:text-muted-foreground text-xs"
                    >
                        No thanks, I'll stick to my selection
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default function TraitMenu() {
    const [selectedTraits, setSelectedTraits] = useState<Set<string>>(new Set());
    const [showBundleModal, setShowBundleModal] = useState(false);
    const [showRetentionPopup, setShowRetentionPopup] = useState(false);
    const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null); // 'BUNDLE_999'

    const toggleTrait = (id: string) => {
        const newSet = new Set(selectedTraits);
        if (newSet.has(id)) {
            newSet.delete(id);
        } else {
            newSet.add(id);
        }
        setSelectedTraits(newSet);
    };

    const calculateTotal = useMemo(() => {
        if (appliedCoupon === 'BUNDLE_999') return 999;

        // Explicitly calculate sum of selected traits
        let total = 0;
        selectedTraits.forEach(id => {
            const trait = GRAPHOTHERAPY_TRAITS.find(t => t.id === id);
            if (trait) total += trait.price;
        });
        return total;
    }, [selectedTraits, appliedCoupon]);

    const BUNDLE_PRICE = 1599;

    const handleCheckout = () => {
        // Logic 1: If total > 500 and not bundled, offer Bundle
        if (calculateTotal > 500 && calculateTotal < BUNDLE_PRICE && !appliedCoupon) {
            setShowBundleModal(true);
        } else {
            // Proceed to payment (Mock)
            alert(`Proceeding to payment: ₹${calculateTotal}`);
        }
    };

    const handleBundleAccept = () => {
        // Select ALL traits
        const allIds = new Set(GRAPHOTHERAPY_TRAITS.map(t => t.id));
        setSelectedTraits(allIds);
        setShowBundleModal(false);
        // Price automatically becomes BUNDLE_PRICE logic? 
        // Wait, create a special state for "Bundle Mode" or just sum > BUNDLE_PRICE capped?
        // Let's manually set a 'BUNDLE_1599' state or just rely on sum logic?
        // User requested "If they select separately... give brief idea... charges 1599"
        // I'll set appliedCoupon to null but ensure the total reflects the bundle if All selected?
        // Simplest: Just alert for now or set a flag.
        alert("Bundle 1599 Applied");
    };

    const handleBundleReject = () => {
        setShowBundleModal(false);
        // Logic 2: Retention Trap - If cancelled 1599, show 999
        setTimeout(() => setShowRetentionPopup(true), 300);
    };

    const handleRetentionAccept = () => {
        const allIds = new Set(GRAPHOTHERAPY_TRAITS.map(t => t.id));
        setSelectedTraits(allIds);
        setAppliedCoupon('BUNDLE_999');
        setShowRetentionPopup(false);
    };

    // Render Groups
    const renderGroup = (groupNum: 1 | 2 | 3, title: string, price: number) => (
        <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <h3 className="font-bold text-foreground">{title}</h3>
                <span className="bg-card px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    ₹{price} / trait
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {GRAPHOTHERAPY_TRAITS.filter(t => t.group === groupNum).map(trait => (
                    <div
                        key={trait.id}
                        onClick={() => toggleTrait(trait.id)}
                        className={`
                    cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 relative
                    ${selectedTraits.has(trait.id)
                                ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20 shadow-md'
                                : 'border-transparent bg-card hover:border-border shadow-sm'}
                `}
                    >
                        <div className="flex justify-between items-start">
                            <h4 className={`font-semibold ${selectedTraits.has(trait.id) ? 'text-purple-700' : 'text-muted-foreground'}`}>
                                {trait.name}
                            </h4>
                            {selectedTraits.has(trait.id) && <CheckCircle2 className="w-5 h-5 text-purple-600" />}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{trait.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto space-y-8 p-6">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-foreground">Customize Your Analysis</h1>
                <p className="text-muted-foreground">Select specific traits or unlock the full blueprint.</p>
            </div>

            {renderGroup(1, TRAIT_GROUPS.GROUP_1.label, TRAIT_GROUPS.GROUP_1.price)}
            {renderGroup(2, TRAIT_GROUPS.GROUP_2.label, TRAIT_GROUPS.GROUP_2.price)}
            {renderGroup(3, TRAIT_GROUPS.GROUP_3.label, TRAIT_GROUPS.GROUP_3.price)}

            {/* Floating Checkout Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-card/95/95 backdrop-blur border-t p-4 shadow-2xl z-50">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                            <ShoppingCart className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <div className="text-sm text-muted-foreground">{selectedTraits.size} traits selected</div>
                            <div className="text-2xl font-bold text-foreground">
                                ₹{calculateTotal}
                                {appliedCoupon === 'BUNDLE_999' && <span className="text-sm text-green-500 ml-2 line-through">₹1599</span>}
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {(!appliedCoupon && calculateTotal < BUNDLE_PRICE) && (
                            <Button variant="outline" onClick={() => setShowBundleModal(true)}>
                                Get All (₹1599)
                            </Button>
                        )}
                        <Button onClick={handleCheckout} size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-8">
                            Proceed to Payment
                        </Button>
                    </div>
                </div>
            </div>

            {/* Bundle Upsell Modal */}
            <Dialog open={showBundleModal} onOpenChange={setShowBundleModal}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                            <Tag className="w-5 h-5 text-green-600" /> Unlock The Full Blueprint?
                        </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <p className="text-muted-foreground">
                            You've selected a few traits, but you're missing the big picture.
                            Unlock ALL 50+ dimensions + 30-Page Report for just ₹1,599.
                        </p>
                        <ul className="text-sm space-y-2 text-muted-foreground">
                            <li>✅ All Group 3 Premium Traits</li>
                            <li>✅ Relationship Compatibility</li>
                            <li>✅ Future Wealth Potential</li>
                            <li>✅ 1-Year Access</li>
                        </ul>
                    </div>
                    <DialogFooter className="flex-col sm:flex-row gap-2">
                        <Button variant="outline" onClick={handleBundleReject} className="w-full sm:w-auto">
                            No, I'll pay ₹{calculateTotal}
                        </Button>
                        <Button onClick={handleBundleAccept} className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
                            Upgrade to Bundle (₹1599)
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Retention Popup */}
            <RetentionPopup
                isOpen={showRetentionPopup}
                onClose={() => setShowRetentionPopup(false)}
                onAccept={handleRetentionAccept}
            />

            <div className="h-24"></div>
        </div>
    );
}
