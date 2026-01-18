const CACHE_NAME = 'eduecosystem-v1';
const DYNAMIC_CACHE = 'eduecosystem-dynamic-v1';

const ASSETS_TO_CACHE = [
    '/',
    '/manifest.json',
    '/offline.html',
    // Add critical assets here if paths are known
];

// Install Event
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing Service Worker ...', event);
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching App Shell');
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

// Activate Event
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating Service Worker ....', event);
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME && key !== DYNAMIC_CACHE) {
                    console.log('[Service Worker] Removing old cache.', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

// Fetch Event
self.addEventListener('fetch', (event) => {
    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) return;
    // Skip API requests from caching (or use network-first)
    if (event.request.url.includes('/api/')) return;
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                } else {
                    return fetch(event.request)
                        .then((res) => {
                            return caches.open(DYNAMIC_CACHE).then((cache) => {
                                // cache.put(event.request.url, res.clone()); // Optional: aggressive caching
                                return res;
                            });
                        })
                        .catch((err) => {
                            // Fallback to offline page if navigation
                            if (event.request.headers.get('accept').includes('text/html')) {
                                return caches.match('/offline.html');
                            }
                        });
                }
            })
    );
});

// Push Event Listener
self.addEventListener('push', function (event) {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: '/icon-192x192.png',
            badge: '/badge.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: '2'
            },
            actions: [
                { action: 'explore', title: 'Start Studying', icon: '/checkmark.png' },
                { action: 'close', title: 'Later', icon: '/xmark.png' },
            ]
        };
        event.waitUntil(
            self.registration.showNotification(data.title, options)
        );
    }
});

self.addEventListener('notificationclick', function (e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;
    var action = e.action;

    if (action === 'close') {
        notification.close();
    } else {
        clients.openWindow(self.location.origin + '/student/batch1-1');
        notification.close();
    }
});
