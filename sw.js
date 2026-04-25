const CACHE_NAME = "portfolio-cache-v4";
const APP_SHELL = [
    "./",
    "./index.html",
    "./assets/css/style.css",
    "./assets/js/script.js",
    "./assets/js/components.js",
    "./assets/js/data.js",
    "./assets/js/translations.js",
    "./assets/icons/favicon.ico",
    "./assets/icons/favicon-16x16.png",
    "./assets/icons/favicon-32x32.png",
    "./assets/icons/android-chrome-192x192.png",
    "./assets/icons/android-chrome-512x512.png",
    "./assets/icons/apple-touch-icon.png",
    "./assets/icons/site.webmanifest",
    "./assets/docs/ahmed_riyadh_resume.pdf",
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

    if (request.mode === "navigate") {
        event.respondWith(networkFirst(request));
        return;
    }

    event.respondWith(cacheFirst(request));
});

function cacheFirst(request) {
    return caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
            return cachedResponse;
        }

        return fetchAndCache(request);
    });
}

function networkFirst(request) {
    return fetchAndCache(request).catch(() =>
        caches.match(request).then((cachedResponse) => cachedResponse || caches.match("./index.html"))
    );
}

function fetchAndCache(request) {
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
}