"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Bell, BellOff, Send, Info } from "lucide-react";
import { subscribeToNotifications } from "@/services/push-notifications";
import { toast } from "sonner";

export function PushNotificationManager() {
    const [permission, setPermission] = useState<NotificationPermission>("default");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if ("Notification" in window) {
            setPermission(Notification.permission);
        }
    }, []);

    const handleSubscribe = async () => {
        setLoading(true);
        try {
            const sub = await subscribeToNotifications();
            if (sub) {
                setPermission("granted");
                toast.success("Notifications enabled successfully!");
            }
        } catch (error) {
            console.error("Subscription failed", error);
            toast.error("Failed to enable notifications. Please check your browser settings.");
        } finally {
            setLoading(false);
        }
    };

    if (!("Notification" in window)) {
        return (
            <Card className="bg-gray-900 border-yellow-900/50">
                <CardContent className="pt-6">
                    <div className="flex items-center gap-3 text-yellow-500">
                        <Info className="w-5 h-5" />
                        <p className="text-sm">Push notifications are not supported by your browser.</p>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    {permission === "granted" ? (
                        <Bell className="w-5 h-5 text-green-500" />
                    ) : (
                        <BellOff className="w-5 h-5 text-muted-foreground" />
                    )}
                    Nudge Notifications
                </CardTitle>
                <CardDescription>
                    Get reminded about your daily streaks and upcoming drills.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <p className="text-sm font-medium text-gray-200">Browser Status</p>
                        <p className="text-xs text-muted-foreground">
                            {permission === "granted"
                                ? "Notifications are currently active."
                                : permission === "denied"
                                    ? "Notifications are blocked. Reset permissions in your browser bar."
                                    : "Notifications are not yet enabled."}
                        </p>
                    </div>
                    {permission !== "granted" && (
                        <Button
                            onClick={handleSubscribe}
                            disabled={loading || permission === "denied"}
                            className="bg-indigo-600 hover:bg-indigo-500"
                        >
                            {loading ? "Enabling..." : "Enable Nudges"}
                        </Button>
                    )}
                </div>

                {permission === "granted" && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3">
                        <Send className="w-4 h-4 text-green-500" />
                        <p className="text-xs text-green-200">
                            You're all set! We'll send you a nudge if you miss your 5 AM club or have a low drill score.
                        </p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
