'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5b4eaeff69da839966af44b9e7fc8f59",
"assets/AssetManifest.bin.json": "8a6fcf4ad690cf6fd3b5ba2e33170713",
"assets/AssetManifest.json": "fb9d73d038b0aea25a3bc7caeb4c3e18",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9cef800f17a680576a6b79267ee0c0da",
"assets/images/ali.jpg": "b47bdd9ba5a7cb9954c2c6b7688cd244",
"assets/images/back.png": "319510be15b231ed9066ca1607c0301e",
"assets/images/book.png": "d676b05c703b13a3013d51a69dd31efd",
"assets/images/call.png": "5b922f0716488ed381520936cff29e70",
"assets/images/chat1.png": "c1d8537d3d5a2bc768a718c38076df1d",
"assets/images/faizan.png": "9858be0962b73db82829c6b22d4644af",
"assets/images/flutter.png": "eb459ae5d2d5aecb4138fa99d720b4d1",
"assets/images/flutter2.png": "c13d02fb9ff796f9bb3c8c2e4270531e",
"assets/images/laiba.png": "458f2402fdaa17864c45caae88edb87f",
"assets/images/lock-removebg.png": "8e75c813f03c5155e114a6b3e0606060",
"assets/images/lock.jpg": "b47ef093b6de7a26ac24817161d3c56f",
"assets/images/logo.png": "71ebe10f13935e03ba33c80cb0cfb568",
"assets/images/me.png": "4fe24e9d8555be9f77f6b3bea25c48c9",
"assets/images/meta.png": "fc3385a2fc4f7d854ae912405de24d8b",
"assets/images/person.png": "acceac7e87c1a40672fc6eabac9bf4dd",
"assets/images/person2.png": "73250aa8cb79746e1d0f046e713048ec",
"assets/images/pic3.png": "2e457c4c8680fbd862334520c894cf75",
"assets/images/pic4.png": "fcaf8343b3091005fee9b5caa82d6438",
"assets/images/ss1.png": "c7c7a5ed95c9c09ce2cda51ae1ba026b",
"assets/images/ss2.png": "e5a386f3f8e39e1306b7aadbfb44dcac",
"assets/images/ss3.png": "0278716ae31a1c889bcbc8c396e59a1f",
"assets/images/ss4.png": "af8c8b64055ca9a63bcdcdb2a7a936cc",
"assets/images/ss5.png": "00f022db30552032a38c7fee71643131",
"assets/images/ss6.png": "1d4d9c05ece231d6579646b4f801f32e",
"assets/images/ssfaiz.png": "6bd5b57f5865bd84daa47d05e34abe7c",
"assets/images/ssfalaq.png": "58a56ed50cfe2981a1eb914959105106",
"assets/images/status.png": "82e542255f3877146e3a7e4f38bcc871",
"assets/images/tab2.jpg": "254ef209ffb999be8aeddfde4afb8cc0",
"assets/images/ubaid.png": "33e93d56fdc663ec918d19a95ddafd38",
"assets/images/v1.png": "ff2cae8faac336a3153c40293608b17f",
"assets/images/v2.png": "1ef51094bce96b7bafd0d5cc5ba29bb2",
"assets/images/wicon.png": "77aa5da41fab32963647788b2bb0faa1",
"assets/NOTICES": "7f673730900047942f728fe9f06d3f75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "141e457b63bb5df7344660b21eb52e87",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5bf22f1d4d146b778d585436ae43f843",
"/": "5bf22f1d4d146b778d585436ae43f843",
"main.dart.js": "418e7733df15d42fcb61900d50ad065b",
"manifest.json": "f8e82a0e601887dba71f3716282a51fa",
"version.json": "8865ebd275d1db484dbb92c082988661"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
