"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Bell, BellOff } from 'lucide-react';
import { toast } from 'react-hot-toast';

export default function NotificationManager() {
    const [permission, setPermission] = useState('default');

    useEffect(() => {
        if ('Notification' in window) {
            setPermission(Notification.permission);
        }
    }, []);

    const requestPermission = async () => {
        if (!('Notification' in window)) {
            toast.error("This browser does not support notifications.");
            return;
        }

        const result = await Notification.requestPermission();
        setPermission(result);

        if (result === 'granted') {
            try {
                const registration = await navigator.serviceWorker.ready;
                // VAPID Public Key
                const vapidPublicKey = 'BNNEyboSaCbyHVwuo4gSTnDrsY9sr-qbITDPCBJ5S5DKyHL-5bpIkRl7LZ8KlRRVk_Nrus9pDIF1CErCyLepKv8';

                const subscription = await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: vapidPublicKey
                });

                const token = localStorage.getItem('token');
                const baseUrl = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000').replace(/\/$/, "");
                await fetch(`${baseUrl}/api/v1/notifications/subscribe`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(subscription)
                });

                toast.success("Notifications enabled! You'll get study reminders.");
            } catch (error) {
                console.error("Subscription failed:", error);
                toast.error("Failed to sync with server.");
            }
        }
    };

    if (permission === 'granted') {
        return null; // Hidden if already active
    }

    return (
        <Button
            variant="outline"
            size="sm"
            onClick={requestPermission}
            className="flex items-center gap-2 border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-400"
        >
            <Bell className="h-4 w-4" /> Enable Alerts
        </Button>
    );
}
