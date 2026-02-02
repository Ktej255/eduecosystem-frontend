"use client";

import React, { useState, useEffect } from 'react';
import { WifiOff, Wifi } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NetworkStatus() {
    const [isOnline, setIsOnline] = useState(true);
    const [showRestored, setShowRestored] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsOnline(navigator.onLine);

            const handleOnline = () => {
                setIsOnline(true);
                setShowRestored(true);
                setTimeout(() => setShowRestored(false), 3000);
            };

            const handleOffline = () => {
                setIsOnline(false);
                setShowRestored(false);
            };

            window.addEventListener('online', handleOnline);
            window.addEventListener('offline', handleOffline);

            return () => {
                window.removeEventListener('online', handleOnline);
                window.removeEventListener('offline', handleOffline);
            };
        }
    }, []);

    return (
        <AnimatePresence>
            {!isOnline && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-red-600 text-white text-xs font-semibold text-center z-[100] relative"
                >
                    <div className="py-1 flex items-center justify-center gap-2">
                        <WifiOff className="w-3 h-3" />
                        <span>You are offline. Content may be outdated.</span>
                    </div>
                </motion.div>
            )}

            {isOnline && showRestored && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="bg-green-600 text-white text-xs font-semibold text-center z-[100] relative"
                >
                    <div className="py-1 flex items-center justify-center gap-2">
                        <Wifi className="w-3 h-3" />
                        <span>Internet restored. Back online.</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
