import api from "./api";

// This must match the VAPID_PUBLIC_KEY stored securely in your backend environment variables
// It should be exposed to the frontend via safe NEXT_PUBLIC_ variables.
const VAPID_PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || "BE_u3vHkx0x0tF1E2Xm6uQz8Xz-zH3Z5Z8H5Z8H5Z8H5Z8H5Z8H5Z8H5Z8H5Z8H5Z8=";

function urlBase64ToUint8Array(base64String: string) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

export async function subscribeToPushNotifications() {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
        console.warn('Push notifications not supported by this browser.');
        return null;
    }

    try {
        const registration = await navigator.serviceWorker.ready;

        let subscription = await registration.pushManager.getSubscription();

        if (!subscription) {
            subscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
            });
        }

        // Parse the generated keys
        const subJSON = subscription.toJSON();

        // Send to our backend postgres database
        const payload = {
            endpoint: subJSON.endpoint,
            keys: {
                p256dh: subJSON.keys?.p256dh,
                auth: subJSON.keys?.auth
            }
        };

        await api.post('/users/me/push-subscription', payload);

        console.log("Successfully subscribed to push notifications");
        return subscription;

    } catch (error) {
        console.error('Failed to subscribe to push notifications:', error);
        return null;
    }
}
