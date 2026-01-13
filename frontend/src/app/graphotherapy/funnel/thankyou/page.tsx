"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, BookOpen, PlayCircle, ArrowRight } from 'lucide-react';

export default function ThankYouPage() {

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-950 flex flex-col items-center justify-center p-6">
            <div className="max-w-xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                {/* Success Icon */}
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-14 h-14 text-green-600" />
                </div>

                {/* Main Message */}
                <div className="space-y-4">
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        Thank You for Your Order! 🎉
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Your Level 1 Graphotherapy course has been unlocked.
                        We've sent the access details to your email.
                    </p>
                </div>

                {/* Order Details Card */}
                <Card className="border-green-200 bg-green-50/50">
                    <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-4">
                            <BookOpen className="w-8 h-8 text-green-600" />
                            <div className="text-left">
                                <h3 className="font-bold">Level 1 Graphotherapy</h3>
                                <p className="text-sm text-gray-500">21-Day Transformation Course</p>
                            </div>
                        </div>
                        <div className="text-sm text-green-700 bg-green-100 py-2 px-4 rounded-lg">
                            Order #GT-{Math.random().toString(36).substring(2, 8).toUpperCase()}
                        </div>
                    </CardContent>
                </Card>

                {/* Next Steps */}
                <div className="space-y-4">
                    <h3 className="font-bold text-gray-700">What's Next?</h3>
                    <div className="grid gap-3 text-left">
                        <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                            <PlayCircle className="w-6 h-6 text-purple-500" />
                            <span>Watch the Introduction Video</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                            <BookOpen className="w-6 h-6 text-blue-500" />
                            <span>Start Day 1 of Your Journey</span>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <Link href="/graphotherapy">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8">
                        Go to My Dashboard <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
