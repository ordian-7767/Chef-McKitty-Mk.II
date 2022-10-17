import 'regenerator-runtime';
import { setCacheNameDetails } from 'workbox-core';
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import {
  CacheFirst,
  NetworkFirst,
  StaleWhileRevalidate,
} from 'workbox-strategies';

setCacheNameDetails({
  prefix: 'chef-mckitty-rest-finder',
  precache: 'precache',
  runtime: 'runtime',
});

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ request }) => request.mode === 'navigate',
  new NetworkFirst({
    cacheName: 'chef-mckitty-pages-cache',
  }),
);

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'chef-mckitty-images-cache',
  }),
);

registerRoute(({ request }) => request.destination === 'style'
  || request.destination === 'script'
  || request.destination === 'worker', new StaleWhileRevalidate({
  cacheName: 'chef-mckitty-static-resources',
}));

cleanupOutdatedCaches();

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
