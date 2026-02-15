"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PurchaseHistory from '@/components/meditation/PurchaseHistory';
import AmbientBackground from '@/components/meditation/theme/AmbientBackground';

export default function PurchasesPage() {
    return (
        <div className="min-h-screen text-white relative">
            <AmbientBackground />

            <div className="relative z-10 max-w-7xl mx-auto py-8 px-6">
                <div className="mb-8">
                    <Link href="/student/meditation">
                        <Button variant="ghost" className="text-white/60 hover:text-white gap-2 pl-0 hover:bg-transparent">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Sanctum
                        </Button>
                    </Link>
                    <h1 className="text-4xl font-light mt-4 mb-2">Order History</h1>
                    <p className="text-white/60">View and download receipts for your purchases</p>
                </div>

                <PurchaseHistory />
            </div>
        </div>
    );
}
