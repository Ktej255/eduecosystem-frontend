"use client";

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, Shield, Clock, CheckCircle, CreditCard, Smartphone, Building2 } from 'lucide-react';

// Product configuration
const PRODUCTS = {
    'analysis': {
        title: "Handwriting Analysis",
        description: "Discover your hidden personality traits through expert analysis.",
        price: 1599,
        originalPrice: 2999,
        duration: "One-time",
        features: [
            "Detailed Personality Report (PDF)",
            "Strength & Weakness Identification",
            "Career Guidance Insights",
            "Relationship Compatibility Check"
        ],
        deliveryTime: "24-48 hours"
    },
    'level-1': {
        title: "Level 1 Graphotherapy",
        description: "Foundation course to reprogram your subconscious mind.",
        price: 4999,
        originalPrice: 7999,
        duration: "21 Days",
        features: [
            "21-Day Guided Practice",
            "Daily Stroke Correction Exercises",
            "Stress & Anxiety Reduction",
            "Basic Personality Tuning",
            "WhatsApp Support"
        ],
        deliveryTime: "Instant Access"
    },
    'level-2': {
        title: "Level 2 Graphotherapy",
        description: "Advanced techniques for deeper behavioral changes.",
        price: 6999,
        originalPrice: 9999,
        duration: "30 Days",
        features: [
            "30-Day Intensive Program",
            "Emotional Healing Strokes",
            "Procrastination Removal",
            "Confidence Building Exercises",
            "Weekly Progress Review",
            "1-on-1 Call with Expert"
        ],
        deliveryTime: "Instant Access",
        isPopular: true
    },
    'level-3': {
        title: "Level 3 Graphotherapy",
        description: "Mastery level for complete transformation.",
        price: 7999,
        originalPrice: 12999,
        duration: "40 Days",
        features: [
            "40-Day Mastery Course",
            "Leader Mindset Development",
            "Health & Vitality Strokes",
            "Specific Trait Elimination",
            "Priority Support",
            "Bi-weekly Expert Reviews"
        ],
        deliveryTime: "Instant Access"
    },
    'level-4': {
        title: "Level 4 Graphotherapy",
        description: "The ultimate 90-day rewiring protocol.",
        price: 15999,
        originalPrice: 24999,
        duration: "90 Days",
        features: [
            "Complete 90-Day Protocol",
            "Total Personality Overhaul",
            "Subconscious Reprogramming",
            "Lifetime Access to Community",
            "Direct Expert Reviews",
            "Certificate of Completion"
        ],
        deliveryTime: "Instant Access"
    },
    'consultation': {
        title: "Expert Consultation",
        description: "1-on-1 session with a master graphologist.",
        price: 5000,
        originalPrice: 7500,
        duration: "1 Hour",
        features: [
            "Personalized Zoom Session",
            "Deep-dive Analysis",
            "Custom Remedy Plan",
            "Live Q&A",
            "Recording Provided"
        ],
        deliveryTime: "Schedule within 48 hours"
    }
};

type ProductKey = keyof typeof PRODUCTS;

export default function CheckoutPage() {
    const params = useParams();
    const router = useRouter();
    const productId = params.productId as string;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        paymentMethod: 'upi'
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const product = PRODUCTS[productId as ProductKey];

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
                <Card className="max-w-md w-full mx-4">
                    <CardContent className="pt-6 text-center">
                        <h2 className="text-xl font-bold text-red-600 mb-2">Product Not Found</h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">The product you're looking for doesn't exist.</p>
                        <Button onClick={() => router.push('/graphotherapy')}>
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const discount = product.originalPrice - product.price;
    const discountPercent = Math.round((discount / product.originalPrice) * 100);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
            newErrors.phone = 'Invalid phone number';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsProcessing(true);

        // TODO: Integrate with actual payment gateway (Razorpay/PhonePe)
        // For now, simulate processing
        setTimeout(() => {
            setIsProcessing(false);
            // Redirect to success page or payment gateway
            alert('Payment integration coming soon! Your details have been captured.');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-950 dark:to-gray-900">
            {/* Header */}
            <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <button
                        onClick={() => router.push('/graphotherapy')}
                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Back to Products
                    </button>
                    <div className="flex items-center gap-2 text-green-600">
                        <Shield className="h-5 w-5" />
                        <span className="text-sm font-medium">Secure Checkout</span>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: Order Summary */}
                    <div className="order-2 lg:order-1">
                        <Card className="sticky top-24">
                            <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg">
                                <CardTitle className="text-xl">Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6 space-y-6">
                                {/* Product Info */}
                                <div className="border-b pb-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{product.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mt-1">{product.description}</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <Clock className="h-4 w-4 text-purple-600" />
                                        <span className="text-sm text-gray-600 dark:text-gray-400">{product.duration}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-gray-900 dark:text-white">What's Included:</h4>
                                    <ul className="space-y-2">
                                        {product.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Pricing */}
                                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-2">
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Original Price</span>
                                        <span className="line-through">₹{product.originalPrice.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-green-600 font-medium">
                                        <span>Discount ({discountPercent}% OFF)</span>
                                        <span>-₹{discount.toLocaleString()}</span>
                                    </div>
                                    <div className="border-t pt-2 mt-2">
                                        <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white">
                                            <span>Total</span>
                                            <span>₹{product.price.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Delivery Info */}
                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                                    <Clock className="h-4 w-4 text-purple-600" />
                                    <span><strong>Delivery:</strong> {product.deliveryTime}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right: Checkout Form */}
                    <div className="order-1 lg:order-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Complete Your Purchase</CardTitle>
                                <CardDescription>Fill in your details to proceed with payment</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Contact Information */}
                                    <div className="space-y-4">
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Contact Information</h3>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Full Name *
                                            </label>
                                            <Input
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className={errors.name ? 'border-red-500' : ''}
                                            />
                                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Email Address *
                                            </label>
                                            <Input
                                                type="email"
                                                placeholder="your@email.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className={errors.email ? 'border-red-500' : ''}
                                            />
                                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                                Phone Number (WhatsApp) *
                                            </label>
                                            <Input
                                                type="tel"
                                                placeholder="10-digit mobile number"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                                                className={errors.phone ? 'border-red-500' : ''}
                                            />
                                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                        </div>
                                    </div>

                                    {/* Payment Method */}
                                    <div className="space-y-4">
                                        <h3 className="font-semibold text-gray-900 dark:text-white">Payment Method</h3>

                                        <div className="grid grid-cols-3 gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                                                className={`p-4 border-2 rounded-lg flex flex-col items-center gap-2 transition-all ${formData.paymentMethod === 'upi'
                                                        ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20'
                                                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                                                    }`}
                                            >
                                                <Smartphone className="h-6 w-6 text-purple-600" />
                                                <span className="text-sm font-medium">UPI</span>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                                                className={`p-4 border-2 rounded-lg flex flex-col items-center gap-2 transition-all ${formData.paymentMethod === 'card'
                                                        ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20'
                                                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                                                    }`}
                                            >
                                                <CreditCard className="h-6 w-6 text-purple-600" />
                                                <span className="text-sm font-medium">Card</span>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFormData({ ...formData, paymentMethod: 'netbanking' })}
                                                className={`p-4 border-2 rounded-lg flex flex-col items-center gap-2 transition-all ${formData.paymentMethod === 'netbanking'
                                                        ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20'
                                                        : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                                                    }`}
                                            >
                                                <Building2 className="h-6 w-6 text-purple-600" />
                                                <span className="text-sm font-medium">Bank</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        disabled={isProcessing}
                                        className="w-full h-14 text-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg"
                                    >
                                        {isProcessing ? (
                                            <>Processing...</>
                                        ) : (
                                            <>Pay ₹{product.price.toLocaleString()}</>
                                        )}
                                    </Button>

                                    {/* Trust Badges */}
                                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Shield className="h-4 w-4" />
                                            <span>Secure Payment</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <CheckCircle className="h-4 w-4" />
                                            <span>100% Money Back</span>
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
