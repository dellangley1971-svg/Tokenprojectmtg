const CACHE_NAME = 'mtg-tokens-v1';


self.addEventListener('install', (e) => {
  self.skipWaiting();
});


self.addEventListener('activate', (e) => {
  return self.clients.claim();
});


self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});