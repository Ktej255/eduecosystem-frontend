"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle2, CreditCard, Lock, ShieldCheck } from 'lucide-react';

export default function CheckoutPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);
        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));
        router.push('/graphotherapy/funnel/thankyou');
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
            <header className="h-16 bg-white dark:bg-gray-900 border-b flex items-center justify-center px-4">
                <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    SECURE CHECKOUT
                </div>
            </header>

            <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Order Summary */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                        <Card className="mb-4">
                            <CardContent className="p-6 space-y-4">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold">Level 1 Graphotherapy Book</h3>
                                        <p className="text-sm text-gray-500">21-Day Transformation Course</p>
                                    </div>
                                    <span className="font-bold">₹2,499</span>
                                </div>
                                <hr />
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Includes 30-day Portal Access</span>
                                    <span className="text-green-600 text-sm font-medium">FREE</span>
                                </div>
                                <hr />
                                <div className="flex justify-between items-center text-lg font-bold">
                                    <span>Total</span>
                                    <span className="text-green-600">₹2,499</span>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg text-sm text-yellow-800">
                            <strong>50% Discount Applied!</strong> Original price: ₹4,999
                        </div>
                    </div>

                    {/* Payment Form */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
                        <Card>
                            <CardContent className="p-6 space-y-6">
                                <div className="space-y-2">
                                    <Label>Card Number</Label>
                                    <Input placeholder="1234 5678 9012 3456" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Expiry</Label>
                                        <Input placeholder="MM/YY" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>CVV</Label>
                                        <Input placeholder="123" type="password" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Name on Card</Label>
                                    <Input placeholder="John Doe" />
                                </div>

                                <Button
                                    className="w-full h-14 bg-green-600 hover:bg-green-700 text-lg font-bold"
                                    onClick={handlePayment}
                                    disabled={loading}
                                >
                                    {loading ? (
                                        "Processing..."
                                    ) : (
                                        <>
                                            <Lock className="w-5 h-5 mr-2" />
                                            Pay ₹2,499 Securely
                                        </>
                                    )}
                                </Button>

                                <p className="text-xs text-center text-gray-400">
                                    <CreditCard className="inline w-4 h-4 mr-1" />
                                    Your payment is 100% secure. We never store your card details.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
}
