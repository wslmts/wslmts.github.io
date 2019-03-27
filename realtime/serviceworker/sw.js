var CACHE_NAME = 'offline';
var urlsToCache = [
  '/','/sw.html',
  '/a.css',
  'b.css',
  'sw-events.png'
];


self.addEventListener('install',function(e){
  self.skipWaiting()
  console.log('install ',e)
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache=>{
      cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('activate', event => {
  const currentCaches = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch',function(e){
  console.log('fetch ',e)
  e.respondWith(
    caches.match(e.request).then(function(cachedResponse) {
      return cachedResponse || fetch(e.request);
    })
  );
})