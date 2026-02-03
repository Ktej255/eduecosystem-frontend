"use client";

import React, { useEffect, useState } from 'react';
import { Download, CheckCircle, Clock, XCircle, Receipt } from 'lucide-react';
import { meditationService } from '@/services/meditationService';

interface Purchase {
    id: number;
    level: number;
    amount_paid: number;
    currency: string;
    payment_status: string;
    purchased_at: string;
    payment_method: string | null;
    receipt_url: string | null;
}

interface PurchaseHistory {
    purchases: Purchase[];
    total_spent: number;
    levels_owned: number[];
}

export default function PurchaseHistoryPage() {
    const [history, setHistory] = useState<PurchaseHistory | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadPurchaseHistory();
    }, []);

    const loadPurchaseHistory = async () => {
        try {
            const data = await meditationService.getPurchaseHistory();
            setHistory(data);
        } catch (error) {
            console.error('Failed to load purchase history:', error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed':
                return <CheckCircle className="w-5 h-5 text-green-500" />;
            case 'pending':
                return <Clock className="w-5 h-5 text-yellow-500" />;
            case 'failed':
                return <XCircle className="w-5 h-5 text-red-500" />;
            default:
                return null;
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'completed':
                return 'Completed';
            case 'pending':
                return 'Pending';
            case 'failed':
                return 'Failed';
            default:
                return status;
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="animate-pulse space-y-4">
                        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                        <div className="h-32 bg-gray-200 rounded"></div>
                        <div className="h-32 bg-gray-200 rounded"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Purchase History</h1>
                    <p className="text-gray-600">View all your meditation level purchases</p>
                </div>

                {/* Summary Cards */}
                {history && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
                            <p className="text-sm text-gray-600 mb-1">Total Spent</p>
                            <p className="text-2xl font-bold text-indigo-600">₹{history.total_spent}</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
                            <p className="text-sm text-gray-600 mb-1">Levels Owned</p>
                            <p className="text-2xl font-bold text-purple-600">{history.levels_owned.length}</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100">
                            <p className="text-sm text-gray-600 mb-1">Total Purchases</p>
                            <p className="text-2xl font-bold text-green-600">{history.purchases.length}</p>
                        </div>
                    </div>
                )}

                {/* Purchases List */}
                <div className="space-y-4">
                    {history && history.purchases.length > 0 ? (
                        history.purchases.map((purchase) => (
                            <div
                                key={purchase.id}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            {getStatusIcon(purchase.payment_status)}
                                            <h3 className="text-lg font-semibold text-gray-900">
                                                Level {purchase.level} Purchase
                                            </h3>
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-medium ${purchase.payment_status === 'completed'
                                                        ? 'bg-green-100 text-green-700'
                                                        : purchase.payment_status === 'pending'
                                                            ? 'bg-yellow-100 text-yellow-700'
                                                            : 'bg-red-100 text-red-700'
                                                    }`}
                                            >
                                                {getStatusText(purchase.payment_status)}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                            <div>
                                                <p className="text-xs text-gray-500 mb-1">Amount</p>
                                                <p className="font-semibold text-gray-900">
                                                    ₹{purchase.amount_paid}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 mb-1">Date</p>
                                                <p className="font-semibold text-gray-900">
                                                    {formatDate(purchase.purchased_at)}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 mb-1">Payment Method</p>
                                                <p className="font-semibold text-gray-900 capitalize">
                                                    {purchase.payment_method || 'N/A'}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 mb-1">Order ID</p>
                                                <p className="font-mono text-xs text-gray-600">#{purchase.id}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {purchase.receipt_url && (
                                        <a
                                            href={purchase.receipt_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ml-4 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                                            title="Download Receipt"
                                        >
                                            <Download className="w-5 h-5 text-gray-600" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="bg-white p-12 rounded-xl shadow-sm border border-gray-100 text-center">
                            <Receipt className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                No purchases yet
                            </h3>
                            <p className="text-gray-600">
                                Your purchase history will appear here once you unlock a level
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
