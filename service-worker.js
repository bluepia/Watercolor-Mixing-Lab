const CACHE_NAME = 'watercolor-lab-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
  // 如果你有用外部字體 (Google Fonts)，第一次連線需要網路，之後手機通常會自己快取
];

// 安裝時：快取檔案
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// 讀取時：如果有快取就用快取，沒網路也能跑
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});