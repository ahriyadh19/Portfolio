const CACHE_NAME = "portfolio-cache-v2";
const APP_SHELL = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./components.js",
    "./data.js",
    "./translations.js",
    "./assets/icons/favicon-16x16.png",
    "./assets/icons/favicon-32x32.png",
    "./assets/icons/android-chrome-192x192.png",
    "./assets/icons/android-chrome-512x512.png",
    "./assets/icons/apple-touch-icon.png",
    "./assets/icons/site.webmanifest",
    "./assets/ahmed_riyadh_resume.pdf",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(APP_SHELL))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys
                .filter((key) => key !== CACHE_NAME)
                .map((key) => caches.delete(key))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (event) => {
    const { request } = event;

    if (request.method !== "GET") {
        return;
    }

    const requestUrl = new URL(request.url);
    if (requestUrl.origin !== self.location.origin) {
        return;
    }

    event.respondWith(
        caches.match(request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(request).then((networkResponse) => {
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
                    return networkResponse;
                }

                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(request, responseToCache);
                });

                return networkResponse;
            });
        })
    );
});