const cacheName = "js13kPWA-v1";
const appShellFiles = ["./index.html", "./script.js", "./style.css"]

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  
  this.addEventListener('fetch', function (event) {
    // This fetch function is required for the SW to be detected and is intentionally empty
    // For a more robust, real-world SW example see: https://developers.google.com/web/fundamentals/primers/service-workers
    e.respondWith(
        (async () => {
          const r = await caches.match(e.request);
          console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
          if (r) {
            return r;
          }
          const response = await fetch(e.request);
          const cache = await caches.open(cacheName);
          console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
          cache.put(e.request, response.clone());
          return response;
        })()
      );
  });

  self.addEventListener("install", (e) => {
    console.log("[Service Worker] Install");
    e.waitUntil(
        (async () => {
          const cache = await caches.open(cacheName);
          console.log("[Service Worker] Caching all: app shell and content");
          await cache.addAll(appShellFiles);
        })()
      );
  });