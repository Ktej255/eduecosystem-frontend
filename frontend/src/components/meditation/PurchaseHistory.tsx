"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Receipt,
    Calendar,
    CreditCard,
    CheckCircle2,
    Clock,
    ArrowLeft,
    Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MEDITATION_LEVELS } from './store/MeditationProgressionStore';

interface PurchaseRecord {
    id: number;
    user_id: number;
    level: number;
    amount_paid: number;
    currency: string;
    payment_status: string;
    purchased_at: string;
    payment_method?: string;
    receipt_url?: string;
}

interface PurchaseHistoryResponse {
    purchases: PurchaseRecord[];
    total_spent: number;
    levels_owned: number[];
}

export default function PurchaseHistory() {
    const [history, setHistory] = useState<PurchaseHistoryResponse | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';
                const token = localStorage.getItem('edueco_auth_token');

                if (!token) return;

                const res = await fetch(`${baseUrl}/meditation/purchases`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!res.ok) throw new Error('Failed to fetch purchase history');

                const data = await res.json();
                setHistory(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchHistory();
    }, []);

    const getLevelName = (levelId: number) => {
        const level = MEDITATION_LEVELS.find(l => l.id === levelId);
        return level?.name || `Level ${levelId}`;
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-white/50">
                <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4" />
                <p>Loading purchase history...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-red-400">
                <Receipt className="w-12 h-12 mb-4 opacity-50" />
                <p>{error}</p>
                <Button
                    variant="ghost"
                    className="mt-4 text-white hover:bg-card/10"
                    onClick={() => window.location.reload()}
                >
                    Try Again
                </Button>
            </div>
        );
    }

    if (!history || history.purchases.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-white/40">
                <Receipt className="w-16 h-16 mb-6 opacity-20" />
                <h3 className="text-xl font-medium text-white mb-2">No purchases yet</h3>
                <p className="max-w-md text-center mb-8">
                    Your purchase history will appear here once you unlock premium meditation levels.
                </p>
                <Link href="/student/meditation">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full">
                        Explore Levels
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-card/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <p className="text-sm text-white/40 mb-1">Total Spent</p>
                    <p className="text-3xl font-bold text-white">
                        ₹{history.total_spent.toLocaleString()}
                    </p>
                </div>
                <div className="bg-card/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <p className="text-sm text-white/40 mb-1">Levels Owned</p>
                    <p className="text-3xl font-bold text-white">
                        {history.levels_owned.length}
                    </p>
                </div>
                <div className="bg-card/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <p className="text-sm text-white/40 mb-1">Last Purchase</p>
                    <p className="text-lg font-medium text-white break-words">
                        {history.purchases[0]?.purchased_at
                            ? new Date(history.purchases[0].purchased_at).toLocaleDateString()
                            : '-'
                        }
                    </p>
                </div>
            </div>

            {/* List */}
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-indigo-400" />
                    Transaction History
                </h3>

                {history.purchases.map((purchase, index) => (
                    <motion.div
                        key={purchase.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-card/5 border border-white/10 rounded-2xl p-6 hover:bg-card/10 transition-colors group"
                    >
                        <div className="flex flex-col md:flex-row justify-between gap-4 md:items-center">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 group-hover:bg-indigo-500/30 transition-colors">
                                    <Receipt className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-white mb-1">
                                        {getLevelName(purchase.level)}
                                    </h4>
                                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/40">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {formatDate(purchase.purchased_at)}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <CreditCard className="w-3 h-3" />
                                            {purchase.payment_method || 'Razorpay'}
                                        </span>
                                        <span className="font-mono text-white/20">
                                            #{purchase.id.toString().padStart(6, '0')}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
                                <div className="text-right">
                                    <p className="text-xl font-bold text-white">
                                        ₹{purchase.amount_paid.toLocaleString()}
                                    </p>
                                    <div className="flex items-center justify-end gap-1.5 text-green-400 text-xs font-medium bg-green-400/10 px-2 py-0.5 rounded-full mt-1">
                                        <CheckCircle2 className="w-3 h-3" />
                                        PAID
                                    </div>
                                </div>

                                {purchase.receipt_url && (
                                    <Button size="icon" variant="ghost" className="text-white/40 hover:text-white" asChild>
                                        <a href={purchase.receipt_url} target="_blank" rel="noopener noreferrer">
                                            <Download className="w-5 h-5" />
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
