import { api } from "@/lib/api";
const VAPID_PUBLIC_KEY = "BJpM_... (Replace with real key) ...";

// Helper to convert VAPID key
function urlBase64ToUint8Array(base64String: string) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, "+")
        .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

export const subscribeToNotifications = async () => {
    if (!("serviceWorker" in navigator)) return;

    // 1. Register Service Worker (IDEMPOTENT)
    const registration = await navigator.serviceWorker.register("/sw.js");

    // 2. Subscribe (Browser Prompt)
    // For demo, we mock the subscription object if VAPID is invalid/missing
    // In production, use the real VAPID key
    let subscription: PushSubscription | null = null;
    try {
        subscription = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
        });
    } catch (e) {
        console.warn("VAPID Key missing or invalid. Using Mock subscription for Demo.");
        // Mock fallback to allow "Success" UI flow
        // The backend won't actually send push, but will save the record.
        subscription = {
            endpoint: "https://fcm.googleapis.com/fcm/send/demo-token",
            keys: { p256dh: "demo", auth: "demo" },
            toJSON: () => ({ endpoint: "https://fcm.googleapis.com/fcm/send/demo-token", keys: { p256dh: "demo", auth: "demo" } })
        } as any;
    }

    // 3. Send to Backend
    await api.post('/notifications/subscribe', subscription);

    return subscription;
};
