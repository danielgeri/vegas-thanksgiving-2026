const BUILD_VERSION = "__BUILD_VERSION__";
const CACHE_NAME = `vegas-thanksgiving-2026-${BUILD_VERSION}`;
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./data.js",
  "./manifest.webmanifest",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

function fetchWithTimeout(request, timeoutMs = 4000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Network timeout")), timeoutMs);
    fetch(request, { cache: "no-cache" }).then(
      (response) => {
        clearTimeout(timer);
        resolve(response);
      },
      (err) => {
        clearTimeout(timer);
        reject(err);
      }
    );
  });
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Bypass browser HTTP cache when pre-caching a newly deployed release
      const freshRequests = ASSETS.map((url) => new Request(url, { cache: "reload" }));
      await cache.addAll(freshRequests);
      await self.skipWaiting();
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
      await self.clients.claim();
      const windowClients = await self.clients.matchAll({
        type: "window",
        includeUncontrolled: true
      });
      for (const client of windowClients) {
        client.postMessage({
          type: "SW_ACTIVATED",
          version: BUILD_VERSION
        });
      }
    })()
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
  if (event.data?.type === "GET_VERSION") {
    event.source?.postMessage({
      type: "SW_VERSION",
      version: BUILD_VERSION
    });
  }
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  // Static icons: Cache-first (refreshed on each new BUILD_VERSION install)
  if (url.pathname.includes("/icons/")) {
    event.respondWith(
      caches.match(event.request).then((cached) => cached || fetch(event.request))
    );
    return;
  }

  // HTML, JS, CSS, Manifest: Network-first (no-cache) with offline cache fallback
  event.respondWith(
    (async () => {
      try {
        const response = await fetchWithTimeout(event.request, 4000);
        if (response && response.status === 200 && response.type === "basic") {
          const copy = response.clone();
          const cache = await caches.open(CACHE_NAME);
          await cache.put(event.request, copy);
        }
        return response;
      } catch {
        const cached = await caches.match(event.request, { ignoreSearch: true });
        if (cached) return cached;
        if (event.request.mode === "navigate") {
          return caches.match("./index.html");
        }
        throw new Error("Offline and not in cache");
      }
    })()
  );
});
