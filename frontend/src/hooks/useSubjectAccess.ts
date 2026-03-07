"use client";

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/auth-context';

interface SubjectAccess {
    purchasedSubjects: string[];
    isLoading: boolean;
    hasAccess: (subject: string) => boolean;
    refetch: () => void;
}

/**
 * useSubjectAccess — reads the student's purchased subjects from the backend
 * and exposes a `hasAccess(subject)` helper for gating pages.
 *
 * Usage:
 *   const { hasAccess, isLoading } = useSubjectAccess();
 *   if (!hasAccess('geography')) return <UnlockPage />;
 */
export function useSubjectAccess(): SubjectAccess {
    const { user } = useAuth();
    const [purchasedSubjects, setPurchasedSubjects] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchAccess = useCallback(async () => {
        if (!user) {
            setIsLoading(false);
            return;
        }
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setIsLoading(false);
                return;
            }
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/v1/payments/access`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            if (res.ok) {
                const data = await res.json();
                setPurchasedSubjects(data.purchased_subjects || []);
            }
        } catch (e) {
            console.warn('useSubjectAccess: Failed to fetch access data', e);
        } finally {
            setIsLoading(false);
        }
    }, [user]);

    useEffect(() => {
        fetchAccess();
    }, [fetchAccess]);

    const hasAccess = useCallback(
        (subject: string): boolean => {
            if (!user) return false;
            // Master users always have full access
            const masterEmails = process.env.NEXT_PUBLIC_MASTER_EMAILS?.split(',') || [];
            if (masterEmails.includes(user.email)) return true;
            // Check subject-level access
            return (
                purchasedSubjects.includes(subject) ||
                purchasedSubjects.includes('full_upsc')
            );
        },
        [purchasedSubjects, user]
    );

    return { purchasedSubjects, isLoading, hasAccess, refetch: fetchAccess };
}
