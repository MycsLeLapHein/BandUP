/* Service worker BANDUP : cache hors ligne. Incrémente VERSION à chaque mise à jour. */
const VERSION = "bandup-v1";
const CORE = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/maskable-512.png",
  "./assets/icons/apple-touch-icon.png",
  "./assets/gifs/alternating-vup.gif",
  "./assets/gifs/assisted-pullup.gif",
  "./assets/gifs/biceps-curl.gif",
  "./assets/gifs/bicycle-crunch.gif",
  "./assets/gifs/chest-press-unilateral.gif",
  "./assets/gifs/chest-press.gif",
  "./assets/gifs/close-grip-pulldown.gif",
  "./assets/gifs/concentration-curl.gif",
  "./assets/gifs/fixed-close-grip-pulldown.gif",
  "./assets/gifs/fixed-underhand-pulldown.gif",
  "./assets/gifs/front-raise.gif",
  "./assets/gifs/jack-knife-situp.gif",
  "./assets/gifs/kneeling-one-arm-pulldown.gif",
  "./assets/gifs/kneeling-twisting-crunch.gif",
  "./assets/gifs/lateral-raise.gif",
  "./assets/gifs/lying-leg-raise.gif",
  "./assets/gifs/overhead-biceps-curl.gif",
  "./assets/gifs/overhead-press-twist.gif",
  "./assets/gifs/pallof-press.gif",
  "./assets/gifs/pulldown-underhand.gif",
  "./assets/gifs/pulldown.gif",
  "./assets/gifs/push-situp.gif",
  "./assets/gifs/rear-delt-row.gif",
  "./assets/gifs/reverse-fly.gif",
  "./assets/gifs/reverse-wrist-curl.gif",
  "./assets/gifs/row.gif",
  "./assets/gifs/seated-row.gif",
  "./assets/gifs/seated-twist.gif",
  "./assets/gifs/shoulder-press.gif",
  "./assets/gifs/shrug.gif",
  "./assets/gifs/standing-crunch.gif",
  "./assets/gifs/standing-twisting-crunch.gif",
  "./assets/gifs/triceps-extension.gif",
  "./assets/gifs/triceps-pushup.gif",
  "./assets/gifs/v-up.gif",
  "./assets/gifs/vertical-pallof.gif",
  "./assets/gifs/wrist-curl.gif",
  "./assets/gifs/y-raise.gif",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((r) => r || caches.match("./index.html")))
  );
});
