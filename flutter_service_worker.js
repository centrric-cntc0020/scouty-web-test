'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d8823b8c9d0ac6836e200e36c243393b",
"index.html": "0801dedd2a76a7b62807bd1e88ad741a",
"/": "0801dedd2a76a7b62807bd1e88ad741a",
"loader.css": "5a44a4968d4b1ce8d863e621af99179a",
"main.dart.js": "44f0aaa51da7f124128453c1e6267936",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "015975afbd945dea80a22c3f1a96d7cc",
"assets/AssetManifest.json": "a53e5527a34c012d4af33b17e8dc2b80",
"assets/NOTICES": "04098834cc7f19bb67891b02ff960e80",
"assets/FontManifest.json": "f515622b0d1572dbcdfd44881cf54eac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "9317b7de046f228474e7892feed79e49",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/svg/image-rectangle.svg": "39119cedba3de7f2e74bbe786b223989",
"assets/assets/svg/search.svg": "e02d86b4136f506739e7cb538872be8e",
"assets/assets/svg/direction-left.svg": "4903661c1f4ed9b3452fd220381b46c7",
"assets/assets/svg/users1.svg": "253be19a129d6f2df7570bca285fbe8b",
"assets/assets/svg/user.svg": "806e22cbc23568f52f16f08bf397ae8a",
"assets/assets/svg/file-minus.svg": "25fb137201c357c1cd20b41756d504d6",
"assets/assets/svg/gmail.svg": "75083595e7fe8591e95489c6921916aa",
"assets/assets/svg/home.svg": "6b053b5dd386d8717557ce59efa8e26c",
"assets/assets/svg/more-horizontal.svg": "1682197368eb221f6479e00a7e1be78c",
"assets/assets/svg/chart-histogram.svg": "04fcd79a7d57c43d18c28239d51517f4",
"assets/assets/svg/star-s-fill.svg": "8c5707ba9851d432a34a9826bbda32fe",
"assets/assets/svg/lock.svg": "9f2091fdc1741d82d98cf91d7fd9ecdc",
"assets/assets/svg/app_icon.svg": "923e6819df698880fe26434a99dcf9e1",
"assets/assets/svg/instagram.svg": "f313bea6e5417079a5c327a00c545251",
"assets/assets/svg/apple_logo.svg": "023c04f1fabcd8051159f626cd03218d",
"assets/assets/svg/users02.svg": "9464aa34cca9d4c79db4f999717ecc2c",
"assets/assets/svg/tick.svg": "4ee13f6b369ab28558d0d2b8e5be5467",
"assets/assets/svg/login_background.svg": "00a20b69268d2d15ac0bc7429c68e280",
"assets/assets/svg/flag.svg": "078214e9e793b544de248c2a3efb58df",
"assets/assets/svg/wifi.svg": "710f8790a737e001b2634e87ae3393e8",
"assets/assets/svg/Add.svg": "52da33fbaa031dab068672b7ca3eacab",
"assets/assets/svg/logo_with_text.svg": "fd1e4a05b97b454af0e62acc1216b19f",
"assets/assets/svg/navigation.svg": "201c072dc0b416e1f0f30a647c184771",
"assets/assets/svg/setting.svg": "c0c0cc8bd5c4feefb23f659c00c26e79",
"assets/assets/svg/chat.svg": "6b6f0eb89a3850673b267f18fc448799",
"assets/assets/svg/notification.svg": "82b887f3382ec6311934192cc763f539",
"assets/assets/svg/paypal.svg": "0fecb6f960d8beb890700ab084265acc",
"assets/assets/svg/speaker.svg": "cef51f4cefe872af678d853411c8c2dd",
"assets/assets/svg/facebook.svg": "2f4e4e13a85f1cfd7d2c9832e0d621b3",
"assets/assets/svg/security.svg": "6fc08f5268f31ef87a15dd1283e8d6d4",
"assets/assets/svg/google.svg": "7286ff769c375662c0fbad804ed7c3dd",
"assets/assets/svg/attachment.svg": "cd5d1234c8e48665b73a3d8f7d738259",
"assets/assets/svg/trash.svg": "13794130585d3f054598266211f9a6df",
"assets/assets/svg/edit.svg": "8cb6a8be95dd3bf3d73ce199833811d1",
"assets/assets/svg/user-circle.svg": "eb603da50634754855bb0f5d548f5316",
"assets/assets/svg/facebook_icon.svg": "59b9572202cb539280492af7e53e8a17",
"assets/assets/svg/Call.svg": "b5743c3329921b2eb31a6f197633417a",
"assets/assets/svg/location.svg": "678362111081e435e222d43d1d5ff441",
"assets/assets/svg/more-vertical.svg": "8335432cee3ec41893400e5a604a7982",
"assets/assets/svg/direction-down.svg": "9e4344344be702de9e5f91e54aa6e5b3",
"assets/assets/svg/view.svg": "0a3a2e0363e1b00f0688239145f35dbe",
"assets/assets/svg/filter.svg": "50dda601ccb5c87640cc992a2849953f",
"assets/assets/svg/wave.svg": "1852857996840e3e792561f65350fc31",
"assets/assets/svg/zoomout.svg": "73745507176f14aa277689599f57e0a1",
"assets/assets/svg/call-hospital.svg": "62364da28fa6a1af86cd2b43d4e74ece",
"assets/assets/svg/menu.svg": "2ad534e03c9e9dccb15c41959eaba246",
"assets/assets/svg/doublebed.svg": "e5d15283d28a7da0c364e1d6ee211427",
"assets/assets/icons/ScoutyHyde.ttf": "9d70feb6f92f36f230a0cc306de42689",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
