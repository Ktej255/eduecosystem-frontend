"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useSubjectAccess } from '@/hooks/useSubjectAccess';
import { Lock, ShoppingBag, ArrowRight, Globe2, BookOpen, Loader2, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SUBJECT_META: Record<string, { label: string; icon: React.ReactNode; color: string; price: number }> = {
    geography: {
        label: 'Geography for UPSC 2026',
        icon: <Globe2 className="w-10 h-10" />,
        color: 'from-blue-600 to-indigo-700',
        price: 499,
    },
    polity: {
        label: 'Polity (Laxmikanth 95 Chapters)',
        icon: <BookOpen className="w-10 h-10" />,
        color: 'from-amber-500 to-orange-600',
        price: 499,
    },
    history: {
        label: 'Modern History (Spectrum)',
        icon: <BookOpen className="w-10 h-10" />,
        color: 'from-rose-500 to-red-600',
        price: 299,
    },
    environment: {
        label: 'Environment & Ecology 2026',
        icon: <Leaf className="w-10 h-10" />,
        color: 'from-emerald-600 to-teal-700',
        price: 299,
    },
};

interface SubjectAccessGateProps {
    subject: string;
    children: React.ReactNode;
}

/**
 * SubjectAccessGate — wraps a page/component and blocks access
 * if the student hasn't purchased the given subject.
 *
 * Usage:
 *   <SubjectAccessGate subject="geography">
 *     <GeographyHome />
 *   </SubjectAccessGate>
 */
export default function SubjectAccessGate({ subject, children }: SubjectAccessGateProps) {
    const { hasAccess, isLoading } = useSubjectAccess();
    const router = useRouter();
    const meta = SUBJECT_META[subject] || {
        label: subject,
        icon: <Lock className="w-10 h-10" />,
        color: 'from-slate-600 to-slate-700',
        price: 499,
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-muted">
                <div className="flex flex-col items-center gap-4 text-muted-foreground">
                    <Loader2 className="w-10 h-10 animate-spin text-indigo-500" />
                    <p className="text-sm font-medium">Verifying access...</p>
                </div>
            </div>
        );
    }

    // Dev/Staff Bypass
    const isStaff = hasAccess('teacher') || hasAccess('admin');
    
    if (!hasAccess(subject) && !isStaff) {
        return (
            <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center p-6">
                {/* Background glow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
                </div>

                <div className="relative max-w-lg w-full text-center space-y-8">
                    {/* Icon */}
                    <div className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br ${meta.color} flex items-center justify-center text-white shadow-2xl`}>
                        {meta.icon}
                    </div>

                    {/* Lock badge */}
                    <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-full text-xs font-bold text-slate-400 uppercase tracking-wider">
                        <Lock className="w-3 h-3" />
                        Access Required
                    </div>

                    {/* Heading */}
                    <div className="space-y-3">
                        <h1 className="text-3xl font-black text-white leading-tight">
                            Unlock <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">{meta.label}</span>
                        </h1>
                        <p className="text-slate-400 text-base leading-relaxed">
                            Get lifetime access to 400+ topics, UPSC-pattern MCQs, a 21-day schedule, and integrated current affairs for just ₹{meta.price}.
                        </p>
                    </div>

                    {/* What's included */}
                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-left space-y-3">
                        {[
                            '400+ Granular Topics (Complete NCERT Coverage)',
                            'UPSC Statement-Based MCQs (3-Tier Difficulty)',
                            '21-Day Study Schedule with 25/5 Session Timer',
                            'Current Affairs → Concept Linking',
                            'Lifetime Access — No Subscription',
                        ].map((feat, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                                <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                </div>
                                {feat}
                            </div>
                        ))}
                    </div>

                    {/* Price + CTA */}
                    <div className="space-y-3">
                        <div className="flex items-baseline justify-center gap-2">
                            <span className="text-4xl font-black text-white">₹{meta.price}</span>
                            <span className="text-slate-500 line-through text-lg">₹1,999</span>
                            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                                {Math.round((1 - meta.price / 1999) * 100)}% OFF
                            </span>
                        </div>
                        <Button
                            className="w-full h-14 text-base font-black bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-xl shadow-blue-600/25 gap-3"
                            onClick={() => router.push(`/student/upsc-store?subject=${subject}`)}
                        >
                            <ShoppingBag className="w-5 h-5" />
                            Unlock Now — ₹{meta.price} Lifetime
                            <ArrowRight className="w-5 h-5" />
                        </Button>
                        <p className="text-xs text-slate-600">Secure payment via Cashfree · Instant access after payment</p>
                    </div>
                </div>
            </div>
        );
    }

    return <>{children}</>;
}
